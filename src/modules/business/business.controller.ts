import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import { BusinessService } from './business.service';
import { CreateBusinessDto, UpdateBusinessDto } from './dto/business.dto';
import { JwtAuthGuard } from 'src/guard/jwt-auth.guard';
import { KycGuard } from 'src/guard/kyc.guard';

@Controller('api/business')
@UseGuards(JwtAuthGuard, KycGuard)
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Post()
  async createBusiness(
    @Req() req,
    @Body() createBusinessDto: CreateBusinessDto,
  ) {
    const userId = req.user.id;
    return this.businessService.createBusiness(userId, createBusinessDto);
  }

  @Get(':id')
  async getBusinessById(@Param('id') businessId: string) {
    return this.businessService.getBusinessById(businessId);
  }

  @Patch(':id')
  async updateBusiness(
    @Param('id') businessId: string,
    @Body() updateBusinessDto: UpdateBusinessDto,
  ) {
    return this.businessService.updateBusiness(businessId, updateBusinessDto);
  }

  @Delete(':id')
  async deleteBusiness(@Param('id') businessId: string) {
    return this.businessService.deleteBusiness(businessId);
  }
}
