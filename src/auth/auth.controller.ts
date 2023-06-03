import {
  Body,
  Controller,
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

  @Post('login')
  postLogin(@Body() formData: any) {
    console.log(formData);
    this.authService.validateUser(formData.email, formData.password);
    return 'coucou';
  }

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
