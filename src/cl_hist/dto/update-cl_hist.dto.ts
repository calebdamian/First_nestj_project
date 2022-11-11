import { PartialType } from '@nestjs/mapped-types';
import { CreateClHistDto } from './create-cl_hist.dto';

export class UpdateClHistDto extends PartialType(CreateClHistDto) {}
