import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Employee } from 'week one/employee/employee.entity';

@Entity()
export class Tasks extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Employee, (employee) => employee.tasks, {
    onDelete: 'SET NULL',
  })
  employee: Employee;
}
