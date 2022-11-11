import { Module } from '@nestjs/common';
import { ClHistService } from './cl_hist.service';
import { ClHistController } from './cl_hist.controller';

@Module({
  controllers: [ClHistController],
  providers: [ClHistService]
})
export class ClHistModule {}
