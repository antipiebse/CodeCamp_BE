function solution(record) {
  // 닉네임 변경 방법
  // 1. 채팅방을 나간 후, 새로운 닉네임으로 다시 들어간다.
  // 2. 채팅방에서 닉네임 변경
  let obj = {}
  let answer = []
  // userID를 키 이름을 밸류로 저장
  for (let i = 0; i < record.length; i++) {
    const [action, userId, name] = record[i].split(' ')
    if (action !== 'Leave') {
      obj[userId] = name
    }
  }

  //현재 어떤 작업을 해야하는지 확인하며 이름 저장
  for (let j = 0; j < record.length; j++) {
    const [action, userId, _] = record[j].split(' ')
    if (action === 'Enter') {
      answer.push(`${obj[userId]}님이 들어왔습니다.`)
    } else if (action === 'Leave') {
      answer.push(`${obj[userId]}님이 나갔습니다.`)
    }
  }


  return answer
}
