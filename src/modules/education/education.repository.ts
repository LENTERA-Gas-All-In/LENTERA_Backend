import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/common/supabase.service';

@Injectable()
export class EducationRepository {
    private supabaseClient;

    constructor(private readonly supabaseService: SupabaseService) {
        this.supabaseClient = this.supabaseService.getClient();
    }

    async findAllEducation() {
        const { data, error } = await this.supabaseClient
            .from('Educations')
            .select('*');

        if (error) {
            console.error('Error finding education contents', error)
            return null
        }

        return data;
    }

    async findEducationById(educationId: string) {
        const { data, error } = await this.supabaseClient
            .from('Educations')
            .select('*')
            .eq('id', educationId)
            .single();

        if (error) {
            console.error(`Error finding education-${educationId} content:`, error);
            return null;
        }
        return data;
    }

}
