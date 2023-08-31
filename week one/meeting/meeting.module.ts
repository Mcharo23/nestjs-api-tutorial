import { Module } from '@nestjs/common';
import { MeetingController } from './meeting.controller';
import { MeetingService } from './meeting.service';
import { EmployeeModule } from 'week one/employee/employee.module';

@Module({
  imports: [EmployeeModule],
  controllers: [MeetingController],
  providers: [MeetingService],
})
export class MeetingModule {}
