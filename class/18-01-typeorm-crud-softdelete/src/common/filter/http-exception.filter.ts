import { Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter{
    //implements 가져온 함수를 반드시 구현해서 사용해야함!
    catch(excetion: HttpException){
        const status =  excetion.getStatus()
        const message = excetion.message

        console.log("------------------------")
        console.log('에러 발생!!!')
        console.log('에러 내용',message)
        console.log('에러 코드',status)
        console.log("------------------------")

    }
}