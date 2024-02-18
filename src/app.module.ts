import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GreetingModule } from './modules/greeting.module';
import { FlagModule } from './modules/flag.module';
import { PawModule } from './modules/paw.module';
import { ExampleModule } from './modules/example.module';
import { QueryModule } from './modules/query.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database.config';
import { UsersModule } from './modules/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],

      useFactory: () => databaseConfig,
    }),
    GreetingModule,
    FlagModule,
    PawModule,
    ExampleModule,
    QueryModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
