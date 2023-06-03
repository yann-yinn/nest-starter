import {
  Body,
  Controller,
  Res,
  Get,
  Post,
  Request,
  Render,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('login')
  @Render('login')
  getForm() {
    return { pageTitle: 'Login' };
  }

  @HttpCode(HttpStatus.OK)
  @Post('api/auth/login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('api/auth/profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
