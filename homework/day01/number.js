export function checkValidationhyphen(num){
    if (num[6] !== '-'){
        console.log('에러발생!! 형식을 지켜주세요!')
        return false;
    } else return true;
}

export function checkValidationNum(num) {
    const arr = num.split('-');
    if (arr[0].length !== 6 || arr[1].length !==7){
        console.log('에러발생!!! 갯수를 제대로 입력해주세요!!!');
        return false;
    } else return true;
}
export function EncryptionNum(num) {
    let str = String(num.slice(0,8)).padEnd(14, "*");
    return str;
}

export function printNum(value){
    console.log(`주민번호가 암호화되었습니다. \n : ${value}`);
}