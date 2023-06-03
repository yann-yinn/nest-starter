import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './auth/session.serializer';
import { LocalStrategy } from './auth/local.strategy';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';

@Module({
  imports: [AuthModule, PassportModule.register({ session: true })],
  controllers: [AppController],
  providers: [
    AppService,
    SessionSerializer,
    LocalStrategy,
    AuthService,
    UsersService,
  ],
})
export class AppModule {}
