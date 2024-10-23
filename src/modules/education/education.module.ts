import { Module } from '@nestjs/common';
import { EducationController } from './education.controller';
import { EducationService } from './education.service';
import { EducationRepository } from './education.repository';
import { SupabaseService } from 'src/common/supabase.service';

@Module({
    controllers: [EducationController],
    providers: [EducationService, EducationRepository, SupabaseService],
})
export class EducationModule { }
