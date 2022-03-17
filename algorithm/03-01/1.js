//프로그래머스 크레인 인형뽑기 게임
function solution(board, moves) {
    let arr = [];
    let answer = 0;
    for (ele of moves){
        for(let j = 0; j <= 4; j++){
            if(board[j][ele-1] !== 0){
                arr.push(board[j][ele-1])
                for(let i=0; i<arr.length; i++){
                    if (arr[arr.length-1] === arr[arr.length-2]){
                        arr.pop()
                        arr.pop()
                        answer += 2;
                    }
                }
                board[j][ele-1] = 0;
            	break
            }   
        }
    }
    return answer;
}