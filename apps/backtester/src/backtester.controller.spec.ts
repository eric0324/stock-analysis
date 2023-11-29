import { Test, TestingModule } from '@nestjs/testing';
import { BacktesterController } from './backtester.controller';
import { BacktesterService } from './backtester.service';

describe('BacktesterController', () => {
  let backtesterController: BacktesterController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BacktesterController],
      providers: [BacktesterService],
    }).compile();

    backtesterController = app.get<BacktesterController>(BacktesterController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(backtesterController.getHello()).toBe('Hello World!');
    });
  });
});
