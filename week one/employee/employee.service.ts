import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { Repository } from 'typeorm';
import { EmployeeDto } from './employee.dto';
import { ContactInfo } from './contact-info.entity';
import { Meeting } from 'week one/meeting/meeting.entity';
import { Tasks } from 'week one/tasks/tasks.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    @InjectRepository(ContactInfo)
    private contactInfoRepository: Repository<ContactInfo>,
    @InjectRepository(Meeting)
    private meetingRepository: Repository<Meeting>,
    @InjectRepository(Tasks)
    private tasksRepository: Repository<Tasks>,
  ) {}

  async signup(employeeDto: EmployeeDto): Promise<void> {
    const employee = this.employeeRepository.create({
      name: employeeDto.name,
      managerId: employeeDto.managerId,
    });

    console.log(await employee.save());

    const contactInfo = this.contactInfoRepository.create({
      phone: employeeDto.phone,
      email: employeeDto.email,
      employeeId: employee.id,
    });

    console.log(await contactInfo.save());

    const manager = this.employeeRepository.create({
      name: employeeDto.name,
      manager: employee,
    });

    console.log(await manager.save());

    const task1 = this.tasksRepository.create({
      name: employeeDto.taskName,
    });
    console.log(await task1.save());

    const task2 = this.tasksRepository.create({
      name: employeeDto.taskName,
    });
    console.log(await task2.save());

    manager.tasks = [task1, task2];

    const meeting1 = this.meetingRepository.create({
      zoomUrl: employeeDto.zoomUrl,
    });

    meeting1.attendees = [employee];

    manager.meeting = [meeting1];

    await this.employeeRepository.save(manager);
  }
}
