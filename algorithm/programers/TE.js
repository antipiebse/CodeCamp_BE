function solution(s) {
    //짝수 번째 대문자
    //공백 기준 나누기
    let arr = s.split(' ')
    arr[0].toUpperCase()
    arr.forEach((v, i) => {
        for (let j = 0; j < v.length; j++) {
            if (v[i] % 2 === 0) {
                arr[i].toUpperCase()
            } arr[i].toLowerCase()
        }
    })
    console.log(arr)
}
solution("try hello world")