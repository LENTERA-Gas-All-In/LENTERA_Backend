import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUsers() {
    return this.userRepository.findAllUsers();
  }

  async getUserById(userId: string) {
    return this.userRepository.findUserById(userId);
  }
}
