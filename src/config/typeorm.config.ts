import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/modules/autht/autht.entity';
import { Task } from 'src/modules/tasks/task.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'taskManagement',
  entities: [Task, User],
  synchronize: true,
};
