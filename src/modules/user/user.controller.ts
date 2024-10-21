import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../../guard/jwt-auth.guard';
import { KycGuard } from '../../guard/kyc.guard';
import { KybGuard } from '../../guard/kyb.guard';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard, KycGuard)
  @Get()
  async getAllUsers() {
    return this.userService.getUsers();
  }

  @UseGuards(JwtAuthGuard, KybGuard)
  @Get(':id')
  async getUserById(@Param('id') userId: string) {
    return this.userService.getUserById(userId);
  }
}
