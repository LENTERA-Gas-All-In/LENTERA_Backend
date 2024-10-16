import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { SupabaseService } from 'src/common/supabase.service';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, SupabaseService],
})
export class UserModule {}
