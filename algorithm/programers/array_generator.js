function solution(a,b){
    let max = Math.max(a,b)
    let min = Math.min(a,b)
    return (Array.from({ length: (max - min)+1}, (_, i) => min + i).reduce((a,c) => a+c))
}