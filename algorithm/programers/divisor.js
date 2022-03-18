function solution(n) {
    let answer = 0;
    if ((n - 1) % 2 === 1) {
        return answer - 1;
    } else if ((n - 1) % 2 === 0) {
        for (let i = 0; i < n; i++) {
            let num = Math.sqrt(n);
            let arr = [];
            for (let j = 1; j <= num; j++) {
                if (num % j === 0) {
                    arr.push(j);
                    if (num/ j !== j) {
                        arr.push(num/ j);
                    }
                }
            }
        }
    }
}
solution(13)