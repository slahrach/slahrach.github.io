import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class EmailConfirmationGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
