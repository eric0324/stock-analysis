import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TwseScraperService } from './twse-scraper.service';
import { TpexScraperService } from './tpex-scraper.service';
import { TaifexScraperService } from './taifex-scraper.service';
import { YahooFinanceService } from './yahoo-finance.service';
import { UsdtScraperService } from './usdt-scraper.service';
import { MopsScraperService } from './mops-scraper.service';
import { TdccScraperService } from './tdcc-scraper.service';

@Module({
    imports: [HttpModule],
    providers: [
        TwseScraperService,
        TpexScraperService,
        TaifexScraperService,
        YahooFinanceService,
        UsdtScraperService,
        MopsScraperService,
        TdccScraperService
    ],
    exports: [
        TwseScraperService,
        TpexScraperService,
        TaifexScraperService,
        TdccScraperService,
        MopsScraperService,
        UsdtScraperService,
        YahooFinanceService,
    ],
})
export class ScraperModule {}