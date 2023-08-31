import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Employee } from 'week one/employee/employee.entity';

@Entity()
export class ContactInfo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  employeeId: number;

  @OneToOne(() => Employee, (employee) => employee.contactInfo, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  employee: Employee;
}
