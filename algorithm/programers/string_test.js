function solution(s) {
    return (s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s)
}

//정규표현식을 이용해서 s의 값이 숫자인지 확인.