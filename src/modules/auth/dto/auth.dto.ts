export class CreateUserDto {
  full_name: string;
  place_of_birth: string;
  date_of_birth: Date;
  address: string;
  email: string;
  phone_number: string;
  password: string;
  kyc_status: boolean;
  kyb_status: boolean;
  created_at: Date;
  updated_at: Date;
}

export class LoginDto {
  email: string;
  password: string;
}
