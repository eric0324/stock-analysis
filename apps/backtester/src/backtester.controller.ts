import { Controller, Get } from '@nestjs/common';
import { BacktesterService } from './backtester.service';

@Controller()
export class BacktesterController {
  constructor(private readonly backtesterService: BacktesterService) {}

  @Get()
  getHello(): string {
    return this.backtesterService.getHello();
  }
}
