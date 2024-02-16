import { Module } from '@nestjs/common';
import { FlagController } from 'src/controllers/flag.controller';
import { FlagService } from 'src/services/flag.service';

@Module({
  controllers: [FlagController],
  providers: [FlagService],
})
export class FlagModule {}
