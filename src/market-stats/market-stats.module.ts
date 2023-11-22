import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {MarketStats, MarketStatsSchema} from "./market-stats.schema";
import { MarketSatasRepository } from './market-satas.repository';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: MarketStats.name, schema: MarketStatsSchema}
        ])
    ],
    providers: [MarketSatasRepository]
})
export class MarketStatsModule {}
