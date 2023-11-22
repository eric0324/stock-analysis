import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {MongooseModule} from "@nestjs/mongoose";
import * as process from "process";
import {ScraperModule} from "./scraper/scraper.module";
import { MarketStatsModule } from './market-stats/market-stats.module';
import { TickerModule } from './ticker/ticker.module';
import {ScheduleModule} from "@nestjs/schedule";

@Module({
  imports: [
      ConfigModule.forRoot(),
      MongooseModule.forRoot(process.env.MONGODB_URI),
      ScraperModule,
      MarketStatsModule,
      TickerModule,
      ScheduleModule.forRoot(),
  ]
})
export class AppModule {}