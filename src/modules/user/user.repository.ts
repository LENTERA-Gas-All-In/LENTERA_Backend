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

  async findUserByEmail(email: string) {
    const { data, error } = await this.supabaseClient
      .from('Users')
      .select('*')
      .eq('email', email)
      .single();

    if (error) {
      console.error('Error fetching user by email:', error);
      return null;
    }

    return data;
  }

  async findUserById(userId: string) {
    const { data, error } = await this.supabaseClient
      .from('Users')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error fetching user:', error);
      return null;
    }

    return data;
  }

  async createUser(createUserDto: any) {
    const { data, error } = await this.supabaseClient
      .from('Users')
      .insert([createUserDto])
      .select();

    if (error) {
      console.error('Error creating user:', error);
      throw new Error('Failed to create user');
    }

    return data;
  }

  async updateKYBStatus(userId: string, status: boolean) {
    const { data, error } = await this.supabaseClient
      .from('Users')
      .update({ kyb_status: status, updated_at: new Date() })
      .eq('id', userId)
      .select();

    if (error) {
      console.error('Error updating KYB status:', error);
      throw new Error('Failed to update KYB status');
    }

    return data;
  }
}
