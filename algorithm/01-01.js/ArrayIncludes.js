// 코캠컴퍼니에서는 신입사원을 뽑고있습니다.
// 프론트엔드 직무 지원자 명단과
// 백엔드 직무 지원자 명단이 주어질 때,
// 중복 지원한 사람을 찾아 배열에 담아 리턴해주세요.
function solution(front, back) {
    for (let i =0; i < front.length; i++){
      if (front.includes(back[i])) {
        return back[i];
      }
    }
  }
  
  const front = ['아라', '세준', '재환'];
  const back = ['지연', '아라', '재훈'];
  const result = solution(front, back);
  console.log("결과", result); // ["아라"]
  