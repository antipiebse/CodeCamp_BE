import { Injectable } from '@nestjs/common';
import axios from 'axios'
@Injectable()
export class IamportService{
  constructor(){}

  async getToken(){
    const getToken = await axios({
      url: "https://api.iamport.kr/users/getToken",
      method: "post", // POST method
      headers: { "Content-Type": "application/json" }, // "Content-Type": "application/json"
      data: {
        imp_key: process.env.IAMPORT_KEY, // REST API키
        imp_secret: process.env.IAMPORT_SECRETKEY // REST API Secret
      }
    });

    const { access_token } = getToken.data.response; // 인증 토큰
    return access_token
  }
  
  async getPaymentData({impUid, access_token}){
    const getPaymentData = await axios({
      url: `https://api.iamport.kr/payments/${impUid}`,
      method: "get", // GET method
      headers: { "Authorization": access_token }
    })
    console.log(getPaymentData)
    // const PaymentData = getPaymentData.data.response
    return getPaymentData
  }

  async cancelPayment({impUid, reason,checksum}){
    const access_token = await this.getToken()
    const getCancelData = await axios({
      url: "https://api.iamport.kr/payments/cancel",
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "Authorization": access_token // 아임포트 서버로부터 발급받은 엑세스 토큰
          },
          data: {
            reason, // 가맹점 클라이언트로부터 받은 환불사유
            imp_uid: impUid, // impUid를 환불 `unique key`로 입력
            checksum,
          }
    })
    return getCancelData
  }
  
}