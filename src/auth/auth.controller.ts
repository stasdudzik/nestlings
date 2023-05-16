import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  //   POST /auth/signup
  @Post('signup')
  signup(@Req() req: Request) {
    console.log(req.body);
    return this.authService.signup();
  }

  //   POST /auth/signin
  @Post('signin')
  signin() {
    return this.authService.login();
  }
}
