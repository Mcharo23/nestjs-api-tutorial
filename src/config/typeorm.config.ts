import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/modules/autht/autht.entity';
import { Task } from 'src/modules/tasks/task.entity';
import { Product } from 'src/products/entities/product.entity';
import { ContactInfo } from 'week one/employee/contact-info.entity';
import { Employee } from 'week one/employee/employee.entity';
import { Meeting } from 'week one/meeting/meeting.entity';
import { Tasks } from 'week one/tasks/tasks.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'taskManagement',
  entities: [Task, User, Employee, Meeting, Tasks, ContactInfo, Product],
  synchronize: true,
};
