import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Employee } from 'week one/employee/employee.entity';

@Entity()
export class Meeting extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  zoomUrl: string;

  @ManyToMany(() => Employee, (attendees) => attendees.meeting)
  attendees: Employee[];
}
