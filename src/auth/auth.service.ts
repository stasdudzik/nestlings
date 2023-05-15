import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
@Injectable()
export class AuthService {
  login() {
    return { msg: 'Hi, you have Logged IN' };
  }

  signup() {
    return { msg: 'Hi, you have Signed UP' };
  }
}
