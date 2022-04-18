function solution(dartResult) {
  let bonus = { S: 1, D: 2, T: 3 }
  let num = []
  let count = -1
  let length = dartResult.length
  for (let i = 0; i < length; i++) {
    //숫자일 경우 push(10은 따로 처리)
    if (dartResult[i].match(/[0-9]/)) {
      if (dartResult[i + 1] === "0") {
        num.push(Number(dartResult[i] + dartResult[i + 1]))
        i++
      } else {
        num.push(Number(dartResult[i]))
      }
      //숫자를 만날 경우에 count++
      count++
    }
    //숫자가 아닌 값처리
    else {
      if (dartResult[i] === '*') {
        //스타상이 첫 번째 기회가 아닐 때
        if (i > 2) {
          num[count - 1] = num[count - 1] * 2
        }
        num[count] = num[count] * 2
      }
      //아차상 처리
      else if (dartResult[i] === '#') {
        num[count] = -num[count]
      }
      //SDT 처리
      else {
        num[count] = num[count] ** bonus[dartResult[i]]
      }
    }
  }
  return num.reduce((pre, cur) => pre + cur)
}