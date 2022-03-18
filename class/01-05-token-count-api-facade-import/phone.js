// 복잡한 로직은 주석을 달지만 함수의 이름을 설정하는 것처럼 간단한 부분에 이름을
// 명확히 설정하면 이해하기 좋음.

// 1. 핸드폰 번호 제대로 입력 확인
// 2. 토큰 생성
// 3. 핸드폰에 토큰 보내주기
export function checkValidationPhone(myphone) {
    if(myphone.length !== 10 && myphone.length !== 11){
        console.log('에러발생, 핸드폰 번호를 제대로 입력하여주십시오.');
        return false;
    } else {
        return true;
    }
}

export function getToken() {
    let mycount = 6;
    const result = String(Math.floor(Math.random() * Math.pow(10, mycount))).padStart(mycount, "0");
    return result;
}

export function sendTokenToSMS(myphone, mytoken) {
    console.log(myphone + ' 번호로 인증번호 ' + mytoken + '를 전송합니다!!');
}
