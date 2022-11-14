import { Injectable } from '@nestjs/common';
import { CreateMedicalRecordDto } from './dto/create-medicalrecord.dto';
import { UpdateMedicalRecordDto } from './dto/update-medicalrecord.dto';

@Injectable()
export class MedicalRecordService {
  create(createMedicalRecordDto: CreateMedicalRecordDto) {
    return 'This action adds a new medicalrecord';
  }

  findAll() {
    return `This action returns all medicalrecord`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalrecord`;
  }

  update(id: number, updateMedicalrecordDto: UpdateMedicalRecordDto) {
    return `This action updates a #${id} medicalrecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalrecord`;
  }
}
