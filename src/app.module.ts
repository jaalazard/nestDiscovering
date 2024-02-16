import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GreetingModule } from './modules/greeting.module';
import { FlagModule } from './modules/flag.module';

@Module({
  imports: [GreetingModule, FlagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
