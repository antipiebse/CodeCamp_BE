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
  console.time("=== 개별 Promise 각각 ===")
  const result1 = await new Promise((resolve, reject)=>{
    // 특정한 작업(api보내기 등등)
    setTimeout(()=>{
        resolve("성공시 받는 데이터")
    },2000)
  })
  const result2 = await new Promise((resolve, reject)=>{
    // 특정한 작업(api보내기 등등)
    setTimeout(()=>{
        resolve("성공시 받는 데이터")
    },3000)
  })
  const result3 = await new Promise((resolve, reject)=>{
    // 특정한 작업(api보내기 등등)
    setTimeout(()=>{
        resolve("성공시 받는 데이터")
    },1000)
  })
  console.timeEnd("=== 개별 Promise 각각 ===")
}

const fetchData2 = async ()=>{
  console.time("=== 한방에 Promise.all ===")

  await Promise.all([
    new Promise((resolve, reject)=>{
      setTimeout(()=>{
          resolve("성공시 받는 데이터")
      },2000)
    }),
    new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("성공시 받는 데이터")
    },3000)
    }),
    new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("성공시 받는 데이터")
    },1000)
    })
  ])//배열 속의 promise들을 한 번에 실행시킨다. axios요청도 여러개 한 번에 보내기 가능!
  console.timeEnd("=== 한방에 Promise.all ===")
}

fetchData()
fetchData2()