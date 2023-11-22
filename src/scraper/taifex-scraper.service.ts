import * as csvtojson from 'csvtojson';
import * as iconv from 'iconv-lite';
import * as numeral from 'numeral';
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { DateTime } from 'luxon';

@Injectable()
export class TaifexScraperService {
    constructor(private httpService: HttpService) {}

    async onApplicationBootstrap() {
        // const tse = await this.fetchExchangeRates({ date: '2023-11-21' });
        // console.log(tse);
    }

    async fetchTxoPutCallRatio(options?: { date: string }) {
        const date = options?.date ?? DateTime.local().toISODate();
        const queryDate = DateTime.fromISO(date).toFormat('yyyy/MM/dd');
        const form = new URLSearchParams({
            queryStartDate: queryDate,
            queryEndDate: queryDate,
        });
        const url = 'https://www.taifex.com.tw/cht/3/pcRatioDown';

        const response = await firstValueFrom(
            this.httpService.post(url, form, { responseType: 'arraybuffer' }),
        );
        const json = await csvtojson({ noheader: true, output: 'csv' }).fromString(
            iconv.decode(response.data, 'big5'),
        );
        const [_, row] = json;
        if (!row) return null;
        if (DateTime.fromString(row[0], 'yyyy/MM/dd').toISODate() !== date) return null;

        const txoPutCallRatio = numeral(row[6]).divide(100).value();

        return { date, txoPutCallRatio };
    }

    async fetchExchangeRates(options?: { date: string }) {
        const date = options?.date ?? DateTime.local().toISODate();
        const queryDate = DateTime.fromISO(date).toFormat('yyyy/MM/dd');
        const form = new URLSearchParams({
            queryStartDate: queryDate,
            queryEndDate: queryDate,
        });
        const url = 'https://www.taifex.com.tw/cht/3/dailyFXRateDown';

        const response = await firstValueFrom(
            this.httpService.post(url, form, { responseType: 'arraybuffer' }),
        );
        const json = await csvtojson({ noheader: true, output: 'csv' }).fromString(
            iconv.decode(response.data, 'big5'),
        );
        const [fields, row] = json;
        if (fields[0] !== '日期') return null;

        const [usdtwd, ..._] = row.slice(1).map(data => numeral(data).value());

        return { date, usdtwd };
    }
}
