import { Controller, Get, Query } from '@nestjs/common';

@Controller('query')
export class QueryController {
  @Get()
  getExample(@Query('id') id: string, @Query('name') name: string): void {
    console.log('id + name', id + ' ' + name);
  }
}
