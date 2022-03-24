import axios from 'axios'
export function checkValidationPhone(myphone) {
    if (myphone.length !== 10 && myphone.length !== 11) {
        console.log('에러발생, 핸드폰 번호를 제대로 입력하여주십시오.')
        return false
    } else {
        return true
    }
}

export function getToken() {
    let mycount = 6
    const result = String(Math.floor(Math.random() * Math.pow(10, mycount))).padStart(mycount, "0")
    return result
}

export async function sendTokenToSMS(myphone, mytoken) {
    // .env설정
    const appKey = process.env.SMS_APP_KEY
    const XSecretKey = process.env.SMS_X_SECRET_KEY
    const sender = process.env.SMS_SENDER
    const result = await axios.post(`https://api-sms.cloud.toast.com/sms/v3.0/appKeys/${appKey}/sender/sms`,
        {
            //data
            body: `안녕하세요. 인증번호는 ${mytoken}입니다.`,
            sendNo: sender,
            recipientList:[{internationalRecipientNo: myphone}]
        },
        {//config
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "X-Secret-Key": XSecretKey
            }
        })
    console.log("전송 끝!!!!")


    // console.log(myphone + ' 번호로 인증번호 ' + mytoken + '를 전송합니다!!');
}
