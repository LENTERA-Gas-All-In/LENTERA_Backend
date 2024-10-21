export class CreateBusinessDto {
  business_name: string;
  business_registration_number: string;
  industry_type: string;
  address: string;
  contact_detail: string;
}

export class UpdateBusinessDto {
  business_name?: string;
  business_registration_number?: string;
  industry_type?: string;
  address?: string;
  contact_detail?: string;
}
