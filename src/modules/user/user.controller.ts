import { Controller, Get } from '@nestjs/common';

@Controller('api/user')
export class UserController {
  @Get()
  getUserService(): string {
    return 'This is the user service';
  }
}
