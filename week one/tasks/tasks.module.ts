import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { EmployeeModule } from 'week one/employee/employee.module';

@Module({
  imports: [EmployeeModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
