import { Injectable } from '@nestjs/common';

@Injectable()
export class FlagService {
  getFrenchFlag(): string {
    return '🇫🇷🇫🇷🇫🇷';
  }
  getEnglishFlag(): string {
    return '🇬🇧🇬🇧🇬🇧';
  }
  getGermanFlag(): string {
    return '🇩🇪🇩🇪🇩🇪';
  }
  getSpanishFlag(): string {
    return '🇪🇸🇪🇸🇪🇸';
  }
}
