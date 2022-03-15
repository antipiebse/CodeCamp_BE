import {checkValidationPhone, sendTokenToSMS, getToken} from './phone.js'
function createTokenOfPhone(myphone) {
    // 1. 핸드폰 번호 자릿수 맞는 지 확인하기.
    const isValid = checkValidationPhone(myphone);
    
    if (isValid === true){   
         // 2.핸드폰 토큰 6자리 만들기
        const mytoken = getToken()
    
        // 3. 핸드폰 번호에 토큰 전송하기
        sendTokenToSMS(myphone, mytoken)
    }

}
console.log('안녕하세요!');
createTokenOfPhone('01012345678');


// 이 파일들이 node기반의 파일이라는 것을 표현하고 module사용을 위해 package.json을 만들어야함!
// cli: npm init || yarn init


// 파일을 import하는 방식에는 두 가지가 있음
// commonjs 방식(옛날!)
// const { check~~} = require('.phone.js')

// module 방식
// import {checkValidationPhone, sendTokenToSMS, getToken} from './phone.js'
