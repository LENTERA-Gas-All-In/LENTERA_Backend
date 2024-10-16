import { Controller, Get } from '@nestjs/common';

@Controller('api/auth')
export class AuthController {
  @Get()
  getAuthService(): string {
    return 'This is the auth service';
  }
}
