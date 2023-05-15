import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  //   POST /auth/signup
  @Post('signup')
  signup() {
    return 'Signed up!';
  }

  //   POST /auth/signin
  @Post('signin')
  signin() {
    return 'Signed in!';
  }
}
