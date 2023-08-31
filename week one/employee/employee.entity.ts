import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ContactInfo } from 'week one/employee/contact-info.entity';
import { Meeting } from 'week one/meeting/meeting.entity';
import { Tasks } from 'week one/tasks/tasks.entity';

@Entity()
export class Employee extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  managerId: number;

  @ManyToOne(() => Employee, (employee) => employee.directDeports, {
    onDelete: 'SET NULL',
  })
  manager: Employee;

  @OneToMany(() => Employee, (directDeports) => directDeports.manager)
  directDeports: Employee[];

  @OneToOne(() => ContactInfo, (contactInfo) => contactInfo.employee)
  contactInfo: ContactInfo;

  @OneToMany(() => Tasks, (tasks) => tasks.employee)
  tasks: Tasks[];

  @ManyToMany(() => Meeting, (meeting) => meeting.attendees)
  @JoinTable()
  meeting: Meeting[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
