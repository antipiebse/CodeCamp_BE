function solution(people, limit) {
  // 가장 큰 값과 가장 작은 값을 합쳐서 내보내면 최소한의 보트를 사용 할 수 있다.
  let answer = 0;
  // 내림차순으로 정렬하여 비교
  const sortedPeople = people.sort((a, b) => b - a);

  let lInd = 0;
  let rInd = people.length - 1;

  // 왼쪽 인덱스가 오른쪽 인덱스보다 작거나 같을 동안만 카운트를 업!
  while (lInd <= rInd) {
    // 두 인덱스를 합쳐 리미트와 비교했을 때 넘지 않는 경우에 인덱스를 이동!
    if ((sortedPeople[lInd] + sortedPeople[rInd]) <= limit) {
      lInd += 1
      rInd -= 1
    } else {
      lInd += 1
    }
    answer += 1;
  }
  return answer;
}


// function solution(people, limit) {
//     //내림차순으로 정렬
//     const sort = people.sort((a,b)=> b-a)
//     let count = 0
//     const leng = sort.length
//     let lind = 0
//     let rind = leng-1
//     while(lind<=rind){
//         if(sort[lind]+sort[rind]<=limit){
//             lind++
//         }
//         rind--
//         count++
//     }
//     return count

//     for(let i = 0; i<leng;i++){
//         //무게 제한을 넘는 사람들을 미리 계산!
//         let flag = sort[i]+(sort[i+1]?sort[i+1]:0)
//         if(flag>limit){
//             count++
//         }else if(flag<=limit){
//             count++
//             i++
//         }
//     }

// }
