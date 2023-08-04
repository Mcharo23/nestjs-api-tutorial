import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './autht.entity';
import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/autht-credentials.dto';
import { JwtPayload } from './jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthtService {
  private logger = new Logger('AuthtService');
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signup(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;
    const salt = await bcrypt.genSalt();
    console.log(await this.hashPassword(password, salt));

    const data = this.userRepository.create({
      username: username,
      salt: salt,
      password: await this.hashPassword(password, salt),
    });

    console.log(data);
    try {
      await data.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('User already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async signin(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const { username, password } = authCredentialsDto;

    const user = await this.userRepository.findOne({
      where: {
        username: username,
      },
    });

    if (user && user.password === (await bcrypt.hash(password, user.salt))) {
      // console.log(user.password);
      // console.log(await bcrypt.hash(password, user.salt));
      const payload: JwtPayload = { username };
      const accessToken = await this.jwtService.sign(payload);

      this.logger.debug(
        `Generated JWT token with payloas ${JSON.stringify(payload)}`,
      );

      return { accessToken };
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }

    //console.log(user);
  }

  async updatePassword(
    username: string,
    oldPassword: string,
    newPassword: string,
  ): Promise<void> {
    const salt = await bcrypt.genSalt();
    const found = this.userRepository.findOne({
      where: {
        username: username,
      },
    });

    if (
      (await found) &&
      (await found).password ===
        (await bcrypt.hash(oldPassword, (await found).salt))
    ) {
      (await found).password = await bcrypt.hash(newPassword, salt);
      (await found).salt = salt;
      (await found).save();
      console.log((await found).password);
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  async hashPassword(password: string, salt: string): Promise<string> {
    return await bcrypt.hash(password, salt);
  }
}
