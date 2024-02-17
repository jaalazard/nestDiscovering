import { Injectable } from '@nestjs/common';

@Injectable()
export class PawService {
  getPaw(animal: string): number {
    return animal === 'dog'
      ? 4
      : animal === 'duck'
        ? 2
        : animal === 'spider'
          ? 8
          : 0;
  }
}
