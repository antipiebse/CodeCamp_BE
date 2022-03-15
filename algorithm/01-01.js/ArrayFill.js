// 핸드폰 번호가 담긴 문자열 phone이 주어질 때,
// 뒤의 4자리를 "*"로 바꿔서 리턴해주세요.

function solution(phone) {
    let arr = phone.split('');
    // 여기에서 작성해주세요.
    for (let i = 0; i < 4; i++){
      arr[i+7] = '*';
    }
    arr = arr.join("");
    return String(arr)
  }
  
  console.log("결과", solution('01012345678')); // "0101234****"
  