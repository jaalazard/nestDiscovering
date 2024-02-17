import { Controller, Get, Param } from '@nestjs/common';
import { PawService } from 'src/services/paw.service';

@Controller('paw')
export class PawController {
  constructor(private readonly pawService: PawService) {}

  @Get(':animal')
  getPaw(@Param('animal') animal: string): number {
    return this.pawService.getPaw(animal);
  }
}
