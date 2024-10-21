import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from '../auth/dto/auth.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUsers() {
    return this.userRepository.findAllUsers();
  }

  async getUserById(userId: string) {
    return this.userRepository.findUserById(userId);
  }

  async findByEmail(email: string) {
    return this.userRepository.findUserByEmail(email);
  }

  async createUser(createUserDto: CreateUserDto) {
    return this.userRepository.createUser(createUserDto);
  }

  async updateKYBStatus(userId: string, status: boolean) {
    return this.userRepository.updateKYBStatus(userId, status);
  }
}
