import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Test } from '@nestjs/testing';


//aaa3.spec에서는 실제로 사용하는 서비스나 컨트롤러를 직접 주입했다.
//그러나 가짜 복제본(Mock)을 만들어 사용하는 것이 더 안전하다.
class MockAppService {
  getHello(){
    return 'Hello World!'
  }
}


describe("AppController", ()=>{
  // let appService: AppService;
  let appController: AppController;
  //사전 작업할 때 사용!

  beforeEach(async ()=>{
    const appModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{
        provide: AppService,//원본, 실제론 provide안에 있는 걸 사용하지만 
        useClass: MockAppService,//나만의 AppService를 주입하여 테스트시 사용가능!
      }]
    }).compile()

    // nestjs에서 사용했던 모듈로 주입하는 방식 사용!!
    appController = appModule.get<AppController>(AppController)

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