import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/common/supabase.service';

@Injectable()
export class BusinessRepository {
  private supabaseClient;

  constructor(private readonly supabaseService: SupabaseService) {
    this.supabaseClient = this.supabaseService.getClient();
  }

  async createBusiness(userId: string, createBusinessDto: any) {
    const { data, error } = await this.supabaseClient
      .from('Businesses')
      .insert(
        [
          {
            ...createBusinessDto,
            user_id: userId,
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        { returning: 'representation' },
      )
      .select();

    if (error) {
      console.error('Error creating business:', error);
      throw new Error('Failed to create business');
    }
    return data[0];
  }

  async findBusinessById(businessId: string) {
    const { data, error } = await this.supabaseClient
      .from('Businesses')
      .select('*')
      .eq('id', businessId)
      .single();

    if (error) {
      console.error('Error finding business:', error);
      return null;
    }
    return data;
  }

  async updateBusiness(businessId: string, updateBusinessDto: any) {
    const { data, error } = await this.supabaseClient
      .from('Businesses')
      .update({ ...updateBusinessDto, updated_at: new Date() })
      .eq('id', businessId)
      .select();

    if (error) {
      console.error('Error updating business:', error);
      throw new Error('Failed to update business');
    }
    return data;
  }

  async deleteBusiness(businessId: string) {
    const { data, error } = await this.supabaseClient
      .from('Businesses')
      .delete()
      .eq('id', businessId);

    if (error) {
      console.error('Error deleting business:', error);
      throw new Error('Failed to delete business');
    }
    return data;
  }
}
