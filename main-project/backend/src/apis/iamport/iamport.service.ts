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
        imp_key: "8680122769488528", // REST API키
        imp_secret: "38ef437a9cdd7ac065378b64e62b329c465f83f4e2a7bed72621aec9118a7f3b0d2fb9ca6d9967cd" // REST API Secret
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
    // const PaymentData = getPaymentData.data.response
    return getPaymentData
  }

  async canclePayment(){
    
  }
  
}