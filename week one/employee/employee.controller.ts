import { Body, Controller, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeDto } from './employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Post('/signup')
  signup(@Body() employeeDto: EmployeeDto): Promise<void> {
    return this.employeeService.signup(employeeDto);
  }
}
