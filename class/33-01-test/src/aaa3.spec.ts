import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Test } from '@nestjs/testing';

describe("AppController", ()=>{
  let appService: AppService;
  let appController: AppController;
  //사전 작업할 때 사용!
  beforeEach(async ()=>{
    const appModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile()

    // nestjs에서 사용했던 모듈로 주입하는 방식 사용!!
    appController =  appModule.get<AppController>(AppController)

    // node방식!
    // appService = new AppService();
    // appController = new AppController(appService);
  });

  //실제 작업
  describe("getHello",()=>{
    //수없이 많은 api테스트를 편하게 할 수 있다. 
    // 어떠한 값이 변경되어 오류가 났는지도 확인 가능!!
    it('이 테스트의 검증 결과는 Hello World를 리턴해야함!!', ()=>{
      const result = appController.getHello();
      expect(result).toBe('Hello World!');
    });
  });
});