import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { PowerService } from 'src/power/power.service';

@Module({
  imports: [PowerService],
  providers: [DiskService]
})
export class DiskModule {}
