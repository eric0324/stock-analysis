import { Injectable } from '@nestjs/common';

@Injectable()
export class BacktesterService {
  getHello(): string {
    return 'Hello World!';
  }
}
