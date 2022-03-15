// 복잡한 로직은 주석을 달지만 함수의 이름을 설정하는 것처럼 간단한 부분에 이름을
// 명확히 설정하면 이해하기 좋음.

// 1. 핸드폰 번호 제대로 입력 확인
// 2. 토큰 생성
// 3. 핸드폰에 토큰 보내주기
function createTokenOfPhone(myphone) {
    // 1. 핸드폰 번호 자릿수 맞는 지 확인하기.
    if(myphone.length !== 10 && myphone.length !== 11){
        console.log('에러발생, 핸드폰 번호를 제대로 입력하여주십시오.');
        return
    }


    // 2.핸드폰 토큰 6자리 만들기
    const mycount = 6
    if(mycount === undefined){
        console.log('에러발생, 값을 입력하여주십시오.');
        return
    } else if(mycount <= 0){
        console.log('에러발생, 갯수가 너무 적습니다');
        return
    } else if(mycount > 10){
        console.log('에러발생, 갯수가 너무 많습니다');
        return
    } 
    const result = String(Math.floor(Math.random() * Math.pow(10, myphone))).padStart(myphone, "0");
    console.log(result);

    // 3. 핸드폰 번호에 토큰 전송하기
    console.log(myphone + '번호로 인증번호' + result + '를 전송합니다!!');
}

createTokenOfPhone('01012345498');


// 코드 리팩토링을 위한 퍼사드 패턴 사용!
// 퍼사드(Facade) 성벽이란 뜻!
// api를 모아서 또 다른 거대한 api를 만듦.
// 많은 사람들이 사용하는 디자인패턴!
