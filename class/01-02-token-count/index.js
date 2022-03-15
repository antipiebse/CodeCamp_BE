// 좀 더 효율적인 토큰 만들기
// 매개변수와 인자를 활용하여 함수 리펙토링
function getToken(args) {
    // undefined는 값이 정의되지 않았다!
    // null은 값이 아예 없는 것! 일부러 값을 넣지 않은 것으로 주의!
    if(args === undefined){
        console.log('에러발생, 값을 입력하여주십시오.');
        return
    } else if(args <= 0){
        console.log('에러발생, 갯수가 너무 적습니다');
        return
    } else if(args > 10){
        console.log('에러발생, 갯수가 너무 많습니다');
        return
    } else {
        const result = String(Math.floor(Math.random() * Math.pow(10, args))).padStart(args, "0");
        console.log(result);}
}

getToken(4);

// 인증번호 요청 api
// api를 사용하는 이유
// 보안상의 문제, 최적화 문제 등 다양한 이유가 존재함.
