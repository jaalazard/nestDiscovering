import { Controller, Get } from '@nestjs/common';
import { GreetingService } from '../services/greeting.service';

@Controller()
export class GreetingController {
  constructor(private readonly greetingService: GreetingService) {}

  @Get('/greetings')
  getGreetings(): string {
    return this.greetingService.getEnglishGreetings();
  }

  @Get('/salut')
  getSalut(): string {
    return this.greetingService.getFrenchGreetings();
  }

  @Get('/hallo')
  getHallo(): string {
    return this.greetingService.getGermanGreetings();
  }

  @Get('/hola')
  getHola(): string {
    return this.greetingService.getSpanishGreetings();
  }
}
