import { Module } from '@nestjs/common';
import { GreetingController } from 'src/controllers/greeting.controller';
import { GreetingService } from 'src/services/greeting.service';

@Module({
  controllers: [GreetingController],
  providers: [GreetingService],
})
export class GreetingModule {}
