import { Module } from '@nestjs/common';
import { PawController } from 'src/controllers/paw.controller';
import { PawService } from 'src/services/paw.service';

@Module({
  controllers: [PawController],
  providers: [PawService],
})
export class PawModule {}
