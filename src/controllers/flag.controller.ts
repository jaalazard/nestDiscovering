import { Controller, Get } from '@nestjs/common';
import { FlagService } from 'src/services/flag.service';

@Controller()
export class FlagController {
  constructor(private readonly flagService: FlagService) {}

  @Get('/uk')
  getGreetings(): string {
    return this.flagService.getEnglishFlag();
  }

  @Get('/france')
  getSalut(): string {
    return this.flagService.getFrenchFlag();
  }

  @Get('/germany')
  getHallo(): string {
    return this.flagService.getGermanFlag();
  }

  @Get('/spain')
  getHola(): string {
    return this.flagService.getSpanishFlag();
  }
}
