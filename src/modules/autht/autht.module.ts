import { Module } from '@nestjs/common';
import { AuthtController } from './autht.controller';
import { User } from './autht.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthtService } from './autht.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'jwt-secret',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
  ],
  controllers: [AuthtController],
  providers: [AuthtService, JwtStrategy],
  exports: [JwtModule, PassportModule],
})
export class AuthtModule {}
