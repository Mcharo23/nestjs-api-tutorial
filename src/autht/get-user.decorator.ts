import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { User } from './autht.entity';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): User => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
