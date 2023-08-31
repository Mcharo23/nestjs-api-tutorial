import { IsOptional } from 'class-validator';

export class EmployeeDto {
  name: string;
  contactInfo: string;
  @IsOptional()
  managerId: number;
  phone: string;
  email: string;
  taskName: string;
  zoomUrl: string;
}
