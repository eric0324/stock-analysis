import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Ticker, TickerSchema } from './ticker.schema';
import { ScraperModule } from '../scraper/scraper.module';
import { TickerRepository } from './ticker.repository';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Ticker.name, schema: TickerSchema },
        ]),
        ScraperModule,
    ],
    providers: [TickerRepository],
})
export class TickerModule {}