import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../dto/task-status-enum';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.COMPLETE,
  ];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is an invalid status`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatuses.indexOf(status);
    return idx !== -1;
  }

  /*
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value: ', value);
    //console.log('metadata: ', metadata);

    return value;
  }
  */
}
