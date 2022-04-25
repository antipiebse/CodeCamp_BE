function solution(id_list, report, k) {
  let obj = {}
  id_list.map(el => obj[el] = 0)
  let answer = { ...obj }
  let set = [...new Set(report)].map(el => el.split(' ')[1])
  //중복 신고를 방지하기 위해 추가!
  set.map(el => obj[el] = obj[el] + 1)

  //객체를 돌면서 k이상 인 값만 추가!
  let res = []
  for (let key in obj) {
    if (obj[key] >= k)
      res.push(key)
  }

  // report배열을 돌면서 확인!
  let flag = [...new Set(report)].map(el => el.split(' '))
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < flag.length; j++) {
      if (flag[j][1] === (res[i]))
        answer[flag[j][0]] = answer[flag[j][0]] + 1
    }
  }

  return Object.values(answer)
}