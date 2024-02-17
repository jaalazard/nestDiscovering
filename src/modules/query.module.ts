import { Module } from '@nestjs/common';
import { QueryController } from 'src/controllers/query.controller';

@Module({
  controllers: [QueryController],
  providers: [],
})
export class QueryModule {}
