function solution(numbers) {
    let answer = [];
    let flag = ''
    for (let i = 0; i < numbers.length - 1; i++) {
        let count = i+1
        for (let j= count; j < numbers.length; j++) {
            flag = numbers[i] + numbers[j]
            if (!answer.includes(flag)) {
                answer.push(flag)
            }
        }
    }
    return answer.sort((a,b)=>{
        return a-b
    });

    //new Set()
    // 1. 자동으로 중복되는 데이터 제거
    // 2. 타입은 객체, 겉으로는 배열로 사용 가능!
    // const arr = new Set()
    // 데이터 추가
    // arr.add(1)
    // arr.add(2)
    // arr.add(1) 값이 들어가지 않음
    // 데이터 조회
    // arr.has(1) => true
    // arr.has(3) => false
    // 데이터의 길이
    // arr.size
    // 데이터 반복(new Set에서 제공하는 함수들!)
    // arr.forEach( el => {
    // console.log(el)
    // })

    //배열로 바꾸기
    // arr = Array.from(arr);
    // to Spread
    // arr = [...arr]

    // 데이터의 삭제(없는 데이터 삭제 시 false)
    // arr.delete( 2 )
    // 데이터 초기화
    // arr.clear()

}

function solution(numbers) {
    let answer = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j= i+1; j < numbers.length; j++) {
                answer.add(sum)
        }
    }
    //return [...answer].sort((a,b)=> a-b)
    return Array.from(answer).sort((a,b)=>{
        return a-b
    })
}


function sol_run(num){
    const answer= new Set([]);

    numbers.forEach((num1, i)=>{
        numbers.slice( i + 1 ).forEach(num2 =>{
            const sum = num1 + num2;;

            answer.add(sum)
        })
        })
    return [...answer].sort((a,b)=> a-b); 
}
