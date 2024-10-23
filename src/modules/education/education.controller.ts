import {
    Controller,
    Get,
    Param,
    Req,
} from '@nestjs/common';
import { EducationService } from './education.service';

@Controller('api/education')
export class EducationController {
    constructor(private readonly educationService: EducationService) { }

    @Get(':id')
    async getEducationById(@Param('id') educationId: string) {
        return this.educationService.getEducationById(educationId);
    }

    @Get()
    async getAllEducations() {
        return this.educationService.getAllEducations();
    }
}
