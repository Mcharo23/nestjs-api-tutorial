import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthtService } from './autht.service';
import { AuthCredentialsDto } from './dto/autht-credentials.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/modules/autht/get-user.decorator';
import { User } from './autht.entity';

@Controller('autht')
export class AuthtController {
  constructor(private authtService: AuthtService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authtCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    return this.authtService.signup(authtCredentialsDto);
  }

  @Post('/signin')
  signin(
    @Body(ValidationPipe) authtCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authtService.signin(authtCredentialsDto);
  }

  @Patch('/updatePassword')
  updatePassword(
    @Body('username', ValidationPipe) username: string,
    @Body('oldPassword', ValidationPipe) oldPassword: string,
    @Body('newPassword', ValidationPipe) newPassword: string,
  ): Promise<void> {
    return this.authtService.updatePassword(username, oldPassword, newPassword);
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    console.log(user);
  }
}
