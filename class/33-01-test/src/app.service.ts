import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
    //테스트 시, 
    // 1. 실제로 DB에 등록한다면? -> 실제 DB에 쓸모없는 데이터가 생성됨.
    // 2. 가짜 DB를 만들어놓고 거기다 등록한다면? -> 테스트 시간도 오래걸리고, 
    // DB를 반복적으로 만듣고 수정해야하는 번거로움이 있다.
    // 3. 가짜 DB를 JS로 임시 배열을 만들고, PUSH 
    // -> 배열을 만들어 놓고 값을 넣는 방식이 제일 안전하다. 
    

  }
}
