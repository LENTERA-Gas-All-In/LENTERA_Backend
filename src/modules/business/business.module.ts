import { Module } from '@nestjs/common';
import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';
import { BusinessRepository } from './business.repository';
import { SupabaseService } from 'src/common/supabase.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [BusinessController],
  providers: [BusinessService, BusinessRepository, SupabaseService],
})
export class BusinessModule {}
