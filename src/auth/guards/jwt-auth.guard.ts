// jwt-auth.guard.ts
import * as JWT from 'jsonwebtoken';
import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';
import { UserRole } from '../enum/role.enum';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true; // No role is required, allow access
    }

    const request = context.switchToHttp().getRequest();
    const tokenString = request.headers.authorization;
    if (!tokenString || !tokenString.startsWith('Bearer ')) {
      // Token is missing or in an invalid format
      return false;
    }
    const token = tokenString.split(" ")[1];
    console.log(token, 'token');

    try {
      const user: any = JWT.verify(token, 'secret');
      console.log(typeof user, 'type');
      return requiredRoles.some((role) => user?.role === role);
    } catch (error) {
      console.error('Failed to verify JWT:', error);
      return false;
    }
  }
}
