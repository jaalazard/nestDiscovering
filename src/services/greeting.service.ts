import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingService {
  getFrenchGreetings(): string {
    return 'Salut le monde!';
  }
  getEnglishGreetings(): string {
    return 'Hello World!';
  }
  getGermanGreetings(): string {
    return 'Hallo Welt!';
  }
  getSpanishGreetings(): string {
    return 'Hola Mundo!';
  }

  createGreeting(name: string): string {
    return `Hello ${name}!`;
  }
}
