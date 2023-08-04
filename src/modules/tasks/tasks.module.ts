import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { AuthtModule } from '../autht/autht.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), AuthtModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
