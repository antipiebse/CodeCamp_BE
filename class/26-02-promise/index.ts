// new Promise((resolve, reject)=>{
  // 특정한 작업(api보내기 등등)
  // if(성공){
  //     resolve("철수")
  // }
  // if{
  //     reject("에러!!")
  // }  
// }).then(res => {}).catch(err=>{})

// 성공시 then에 resolve가 들어가고
// 실패시 catch에 reject가 들어간다.


const fetchData = async () =>{
  const result = await new Promise((resolve, reject)=>{
    // 특정한 작업(api보내기 등등)
    setTimeout(()=>{
      //외부에 데이터를 보내고 받는데 2초 걸림
      try{
        resolve("성공시 받는 데이터")
      } catch(error){
        reject("실패했습니다!!!")
      }
    },2000)
  }).then(res => console.log(res))
  // console.log(result)
}

fetchData()