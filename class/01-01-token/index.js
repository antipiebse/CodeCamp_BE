// node로 실행해보기
// node file명
console.log('안녕하세요.');


// terminal을 이용한 cli명령어들
// ls, cd, pwd(print working directory), mkdir, mv
// rm, cp(폴더는 안에 폴더나 파일이 들어갈 수 있으므로 -R 속성을 주고 복사나 지운다.)
// rm -rf folder_name
// cp -R folder folder


// token generator
function getToken() {
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    console.log(result);
}

getToken()

// 재사용성이 떨어짐! 함수의 다양한 개념을 사용하여 재사용성을 높여보자



// Function 
// 함수의 필수 개념들
// 매개변수(parameter), 인자(argument), 스코프(scope), 반환값(return)

// *하나의 함수는 하나의 기능만!!!!*
function add(a, b){
    // 더하기 함수
    const result = a + b;

}


// Scope
// 스코프란 변수가 사용가능한 범위를 의미한다.
// 스코프 체인이란 바로 근접한 스코프 안에서 데이터를 찾아온다.



// Return(반환)
// 함수 내에서 사용한 데이터를 return하면 함수 밖에서도 사용이 가능하다.
// return문이 작동하면 함수가 종료되고 반환하므로 
// return문 아래의 명령들은 실행되지 않는다.


