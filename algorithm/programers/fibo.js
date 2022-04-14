function solution(n) {
  let arr = [0, 1]
  for(let i = 2; i<=n;i++){
      arr.push((arr[i-1]+arr[i-2])%1234567)//값을 먼저 나누면 int타입의 범위 안에 포함됨!
  }
  return arr[n]
}

//숫자 num은 int
// 2의 53제곱-1까지만 표현 가능!
// Number.isSafeInteger()// 인자로 들어온 값이 정상 범주에 속하는 지 확인


//reduce
function solution(n){
  let prev = 0; //0번째 피보나치 수의 결과
  let next = 1; //1번째 피보나치 수의 결과
  let sum = prev + next//2번째 피보나치 수의 결과

  const answer = new Array(n-1)
                  .fill(1)
                  .reduce( acc => {
                    sum = (prev + acc)%1234567
                    prev = acc
                    next = sum

                    return sum
                  }, sum)
                  return answer
}