import { Module } from '@nestjs/common';
import { AuthtController } from './autht.controller';
import { AuthtService } from './autht.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './autht.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

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
  providers: [AuthtService],
  exports: [JwtModule, PassportModule],
})
export class AuthtModule {}
