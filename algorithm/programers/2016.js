function solution(a, b) {
    let answer = ''
    let day_arr = [
        "FRI",
        "SAT",
        "SUN",
        "MON",
        "TUE",
        "WED",
        "THU"
    ]
    //달마다 1일의 요일이 바뀌는 걸 위해, 각 달을 7로 나눈 나머지 값들
    let flag = [3, 1, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3];

    //달에 따른 요일 배열의 순서 바꾸기
    //배열의 0번째 인덱스를 맨뒤로 보내는 것을 flag횟수를 지정해서 반복문돌리기
    let count = 0
    for (let i = 0; i < a - 1; i++) {
        count += flag[i]
    }
    for (let j = 0; j < count; j++) {
        let item = ''
        item = day_arr.splice(0, 1)
        day_arr.splice(6, 0, item[0])
    }
    if (b > 7) {
        answer = day_arr[b % 7 - 1];
    } else {
        answer = day_arr[b - 1]
    }
    return answer
}
solution(2, 29)
