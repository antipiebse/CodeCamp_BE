function solution(left, right) {
    let answer = 0;
    let count = right - left;
    for (let i = 0; i <= count; i++) {
        let num = Math.sqrt(left + i);
        let arr = [];
        for (let j = 1; j <= num; j++) {
            if ((left + i) % j === 0) {
                arr.push(j);
                if ((left + i) / j !== j) {
                    arr.push((left + i) / j);
                }
            }
        } if (arr.length % 2 === 0) {
            answer += (left + i);
        } else { answer -= (left + i); }
    }
    return answer;
}


function solution(n) {
    let answer = 0;
    for (let i = 0; i < n; i++) {
        let num = Math.sqrt(n);
        let arr = [];
        for (let j = 1; j <= num; j++) {
            if (num % j === 0) {
                arr.push(j);
                if (num / j !== j) {
                    arr.push(num / j);
                }
            }
        }
    }
} 

solution(12)