import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup() {
    return { msg: 'Hi, you have Signed UP' };
  }

  login() {
    return { msg: 'Hi, you have Logged IN' };
  }
}
