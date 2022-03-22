// function solution(participant, completion) {
//     let answer = 0;  
//     let arr = participant.filter(function path(x,completion){
//     let a = completion.indexOf(x)
//     if(a===-1){
//         return a
//     }
// }
    
//     )
//     answer = arr
//     return answer
// }


// let participant = ["marina", "marina", "nikola", "vinko", "filipa"]
// let completion =  ["vinko", "filipa", "marina", "nikola"]


// solution(participant, completion)


function solution(participant, completion) {
    let answer = participant.filter((x)=> {
    //배열 속에 존재하지 않을 때 바로 제거
      if(!completion.includes(x)){
        return x
      }else { //동명이인이라면 처리
        for(let i = 0; i< participant){

        }
      }
    }

    return answer
}

let participant = ["marina", "marina", "nikola", "vinko", "filipa"]
let completion =  ["vinko", "filipa", "marina", "nikola"]


solution(participant, completion)