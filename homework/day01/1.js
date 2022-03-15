// 자릿수 체크
export function checkNum(reginum){
    const first = (reginum.split("-"))
    console.log('22');
    if (first[0].length !== 6 || first[1].length !== 7){
        console.log("에러발생!!! 갯수를 제대로 입력해주세요!!!")
        return 
    } 
}

// "-" 있는지 없는지 체크
export function checkDash(reginum){
    if (!reginum[6]===("-")){
        console.log("에러발생!!! 형식이 올바르지 않습니다!!!")
        return 
    } 
}

// true일 떄 return 내용
export function regiHide(reginum){
    return reginum.slice(0,8) + "******"
}

checkNum('010211-12312245')