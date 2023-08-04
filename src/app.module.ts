import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthtModule } from './modules/autht/autht.module';
import { TasksModule } from './modules/tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthtModule,
    AuthtModule,
    TasksModule,
  ],
})
export class AppModule {}
