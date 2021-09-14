/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, CanActivate, ExecutionContext, Inject, forwardRef } from '@nestjs/common';
import { UsersService } from '@services/users.service';
import { Observable } from 'rxjs';
import bcrypt from 'bcrypt';

@Injectable()
export class PasswordRevalidateGuard implements CanActivate {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<boolean> {
    const user = await this.usersService.findByEmail(email);

    if (!user) return null;

    const isVerified = await bcrypt.compare(password, user.password);

    return isVerified;
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateUser(request.user.email, request.body.currentPassword);
  }
}
