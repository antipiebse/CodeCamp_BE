function solution(s) {
  let answer = [0, 0]
  while(s.length!==1){
      prev = s.length
      s = s.replace(/0/g,"").length
      answer[1]+=prev-s
      answer[0]++
      s = s.toString(2)
  }
  return answer
}

//재귀함수(recurision)
// 1. 함수 자신을 계속해서 반복(함수 안에서 자신을 계속 호출)
// 2. while 반복문을 대체해서 사용가능
// 3. 재귀함수를 종료시키는 조건이 반드시 필요!

// let count = 0
// function recurision(){
//   if(count >= 5){
//     return
//   }
//   count++
//   console.log(count)
//   return recurision()
// }

// recurision

function solution(s){
  let [count, remove] = [0, 0];
  function recurision() {
    if(s ==="1"){
      return [count, remove]
    }
    //0을 제거
  }
}