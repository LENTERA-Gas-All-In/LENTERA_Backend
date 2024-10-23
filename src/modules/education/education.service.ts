import { Injectable, NotFoundException } from '@nestjs/common';
import { EducationRepository } from './education.repository';

@Injectable()
export class EducationService {
    constructor(
        private readonly educationRepository: EducationRepository,
    ) { }

    async getAllEducations() {
        const educations = await this.educationRepository.findAllEducation();
        if (!educations) {
            throw new NotFoundException('Education contents not found');
        }
        return educations;
    }
    async getEducationById(educationId: string) {
        const education = await this.educationRepository.findEducationById(educationId);
        if (!education) {
            throw new NotFoundException(`Education-${educationId} content not found`);
        }
        return education;
    }

}
