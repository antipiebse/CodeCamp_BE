function solution(n) {
    let count = 0;
    for (let j = 1; j <= num; j++) {
        if ((left + i) % j === 0) {
            arr.push(j);
            if ((left + i) / j !== j) {
                arr.push((left + i) / j);
            }
        }
    }}