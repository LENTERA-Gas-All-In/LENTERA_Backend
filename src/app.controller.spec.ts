import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getWelcome', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get(AppController);
      expect(appController.getWelcome()).toBe('Hello World!');
    });
  });
});
