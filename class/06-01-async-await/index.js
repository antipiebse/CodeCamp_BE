import axios from "../06-03-rest-api-with-email/node_modules/axios";

// 비동기방식
function fetchPost(){
    const result =  axios.get('https://koreanjson.com/posts/1')
    console.log(result)// 비동기로 하였을 때 Promise { <pending> }
}
fetchPost(); // 실행명령


// 동기방식
async function fetchPost2(){
    const result = await axios.get('https://koreanjson.com/posts/1')
    console.log(result.data.title)// 동기방식을 사용하여 데이터를 받아올때까지 기다림!
}
fetchPost2(); //실행 명령

