import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/common/supabase.service';

@Injectable()
export class UserRepository {
  private supabaseClient;

  constructor(private readonly supabaseService: SupabaseService) {
    this.supabaseClient = this.supabaseService.getClient();
  }

  async findAllUsers() {
    const { data, error } = await this.supabaseClient.from('Users').select('*');

    if (error) {
      console.error('Error fetching users:', error);
      return [];
    }

    return data;
  }

  async findUserById(userId: string) {
    const { data, error } = await this.supabaseClient
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error fetching user:', error);
      return null;
    }

    return data;
  }
}
