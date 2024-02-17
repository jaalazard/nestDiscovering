import { Module } from '@nestjs/common';
import { ExampleController } from 'src/controllers/example.controller';

@Module({
  controllers: [ExampleController],
  providers: [],
})
export class ExampleModule {}
