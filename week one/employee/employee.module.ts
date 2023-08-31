import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { ContactInfo } from './contact-info.entity';
import { Meeting } from 'week one/meeting/meeting.entity';
import { Tasks } from 'week one/tasks/tasks.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, ContactInfo, Meeting, Tasks])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
