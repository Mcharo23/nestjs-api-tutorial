import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthtModule } from './modules/autht/autht.module';
import { TasksModule } from 'week one/tasks/tasks.module';
import { EmployeeModule } from 'week one/employee/employee.module';
import { MeetingModule } from 'week one/meeting/meeting.module';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthtModule,
    TasksModule,
    AppModule,
    EmployeeModule,
    MeetingModule,
    ProductsModule,
    CartModule,
  ],
})
export class AppModule {}
