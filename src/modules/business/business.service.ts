import { Injectable, NotFoundException } from '@nestjs/common';
import { BusinessRepository } from './business.repository';
import { CreateBusinessDto, UpdateBusinessDto } from './dto/business.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class BusinessService {
  constructor(
    private readonly businessRepository: BusinessRepository,
    private readonly userService: UserService,
  ) {}

  async createBusiness(userId: string, createBusinessDto: CreateBusinessDto) {
    const newBusiness = await this.businessRepository.createBusiness(
      userId,
      createBusinessDto,
    );
    await this.userService.updateKYBStatus(userId, true);
    return newBusiness;
  }

  async getBusinessById(businessId: string) {
    const business = await this.businessRepository.findBusinessById(businessId);
    if (!business) {
      throw new NotFoundException('Business not found');
    }
    return business;
  }

  async updateBusiness(
    businessId: string,
    updateBusinessDto: UpdateBusinessDto,
  ) {
    return this.businessRepository.updateBusiness(
      businessId,
      updateBusinessDto,
    );
  }

  async deleteBusiness(businessId: string) {
    return this.businessRepository.deleteBusiness(businessId);
  }
}
