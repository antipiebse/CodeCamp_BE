// function getToday(){
//     const date = new Date();
//     const yyyy = date.getFullYear();
//     const mm = String(date.getMonth()+1).padStart(2,"0");//month는 0부터 시작하여 항상 +1하기
//     const dd = String(date.getDate()).padStart(2, "0");
//     const hour = date.getHours();
//     const min = date.getMinutes();
//     const sec = date.getSeconds();
//     const today = `오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${hour}:${min}:${sec}입니다.`;
//     return today
// }
// console.log(getToday());



function solution(left, right) {
    let answer = 0;
    let count = right - left;
    for(let i = 0; i<count+1; i++){
        let arr = [];
        for(let j = 0; j<Math.sqrt(left+i); j++){
            if((left+i)%j===0){
                arr.push(j); 
                if((left+i)/j !== j){
                    arr.push((left+i)/j);
                }
            }
        }if(arr.length % 2 === 0){
            answer += (left + i);
            console.log(answer);
        }else if(arr.length % 2 === 1){
            answer -= (left + i);
            console.log(answer);
        }
    }
    return answer;
}

solution(13,17)

