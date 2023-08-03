import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { typeOrmConfig } from './config/typeorm.config';
import { Task } from './tasks/task.entity';
import { AuthtModule } from './autht/autht.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    Task,
    AuthtModule,
    AuthtModule,
  ],
})
export class AppModule {}
