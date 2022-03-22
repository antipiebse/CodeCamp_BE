function solution(numbers) {
    let answer = [];
    let flag = ''
    for (let i = 0; i < numbers.length - 1; i++) {
        let count = i+1
        for (let j= count; j < numbers.length; j++) {
            flag = numbers[i] + numbers[j]
            if (!answer.includes(flag)) {
                answer.push(flag)
            }
        }
    }
    return answer.sort();
}



// 배열에 있는 수를 서로서로 더해 만들 수 있는 모든 수를 배열에 담아 리턴.
//  

let numbers = [2, 1, 3, 4, 1];
console.log(solution(numbers))
