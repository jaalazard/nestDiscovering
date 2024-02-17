import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GreetingModule } from './modules/greeting.module';
import { FlagModule } from './modules/flag.module';
import { PawModule } from './modules/paw.module';
import { ExampleModule } from './modules/example.module';
import { QueryModule } from './modules/query.module';

@Module({
  imports: [GreetingModule, FlagModule, PawModule, ExampleModule, QueryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
