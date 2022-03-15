// switch-case를 이용해서 오늘의 요일을 출력해주세요.
// HINT: MDN Date
let dayName = '';
let date = new Date();
let day = date.getDay();
switch (day) {
    case 1:
        dayName = '월요일';
        break;
    
    case 2:
        dayName = '화요일';
        break;
    
    case 3:
        dayName = '수요일';
        break;
    
    case 4:
        dayName = '목요일';
        break;
    
    case 5:
        dayName = '금요일';
        break;
    
    case 6:
        dayName = '주말입니다.';
        break;
    
    case 0:
        dayName = '주말입니다.';
        break;
}

console.log(dayName);
// 평일일 경우 해당 요일 출력 ("월요일", "화요일", ...)
// 주말일 경우 "주말입니다." 출력
