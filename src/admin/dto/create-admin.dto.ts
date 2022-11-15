import { IsNumber } from 'class-validator';
export class CreateAdminDto {
  @IsNumber()
  userId: number;

  @IsNumber()
  adminProfileId?: number;
}
