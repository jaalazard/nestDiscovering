import { Controller, Get } from '@nestjs/common';
import { FlagService } from 'src/services/flag.service';

@Controller('flags')
export class FlagController {
  constructor(private readonly flagService: FlagService) {}

  @Get('/uk')
  getEnglishFlag(): string {
    return this.flagService.getEnglishFlag();
  }

  @Get('/france')
  getFrenchFlag(): string {
    return this.flagService.getFrenchFlag();
  }

  @Get('/germany')
  getGermanFlag(): string {
    return this.flagService.getGermanFlag();
  }

  @Get('/spain')
  getSpanishFlag(): string {
    return this.flagService.getSpanishFlag();
  }
}
