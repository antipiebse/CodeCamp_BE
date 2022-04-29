function solution(progresses, speeds) {
  let days = progresses.map((el, ind) => Math.ceil((100 - el) / speeds[ind]))
  // console.log("날짜: ",days)
  let answer = []
  let count = 1
  for (let i = 0; i < days.length; i++) {
    // console.log(days[i], days[i+1], "카운트: ",count )
    if (days[i] >= days[i + 1]) {
      count += 1
      // console.log("카운트 증가!",count)
    } else {
      // console.log("push", count)
      answer.push(count)
      count = 1
    }
  }
  return answer
  // console.log(answer)
}

// function solution(progresses, speeds) {
//     const answer = []
//     let day = 0
//     for(let  i = 0; i< progresses.length;i++){
//         // 100% 완성까지 얼마나 걸리는 지
//         const process =  Math.ceil((100 -  progresses[i])/speeds[i])
//         if(process > day){
//             day = process
//             answer[answer.length] = 1
//         }else if(day >= process){
//             // 개발이 완료됐지만 앞에 있는 기능이 완성될때까지 기다리는 경우
//             answer[answer.length - 1]++
//         }
//     }
//     return answer
// }
// reduce풀이
function solution(progresses, speeds){
  let day = 0
  
  const answer = progresses.reduce(( acc, cur, i)=> {
      const process = Math.ceil((100-cur)/speeds[i])
      
      if(process> day){
          day = process
          acc[acc.length] = 1
      }else if(day >= process){
          acc[ acc.length-1 ]++
      }
      return acc,
  },[])
  return answer
}





  //     let days = progresses.map((el,ind)=>Math.ceil((100-el)/speeds[ind]))
  
//     let answer = []
//     let count = 1
//     let flag = 0 
  // for(let i = 0; i < days.length;i++){
  //     for(let j=i+1; j <=days.length; j++){
  //         if(days[i]>=days[j]){
  //             count++
  //            flag = days[i]
  //             answer[answer.length] = 1
  //         }else{
  //             count = 1
  //         }
  //     }
  // }