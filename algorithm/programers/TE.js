// function solution(s) {
//     //짝수 번째 대문자
//     //공백 기준 나누기
//     let arr = s.split(' ')

//     arr.forEach((v, i) => {
//         arr[i] = v.toUpperCase()
//         console.log(arr[i])
//         // for(let j=0; j< v.length;j++){
//         //   if(j%2){ 
//         //   	arr[i][j] = arr[i][j].toLowerCase()
//         //     console.log(arr[i][j])
//         //   }
//         // }
//     })
//     console.log(arr)
//     return arr
// }
// solution("try hello world")


// // 인자로 받은 문자열을 분류해서 기존에 있는 컬렉션에 개수를 더해주는 함수를 만들어 주세요.


// function classification(str) {
//     let map = new Map([['A', 1], ['B', 2], ['C', 3]]);

//     // Map객체의 메서드를 사용해보세요.
//     console.log(map.key)
//     for (let [value, key] of map) {
//         console.log(value)
//         console.log(key)
//     }
//     return map;
// }
// var str = "ABCCCAA"
// console.log(classification(str)); //Map(3){'A' => 4, 'B' => 3, 'C' => 6}




// // 뒤집은 소수

// let arr = [32, 55, 62, 20, 250, 370, 200, 30, 10]

// const isPrime = (num) => {
//     if (num === 1) return false
//     for (let i = 2; i < num / 2; i++) {
//         if (num % i === 0) return false
//     }
//     return true
// }

// let solution = (arr) => {
//     //숫자 뒤집기
//     const result = []
//     arr.forEach((ele) => {
//         let num = Number(ele.toString().split('').reverse().join(''))
//         console.log(num)
//         // 소수 판별
//         if (isPrime(num)) {
//             result.push(num)
//         }
//     })
//     return result
// }
// solution(arr)

// 인자로 받은 문자열을 분류해서 기존에 있는 컬렉션에 개수를 더해주는 함수를 만들어 주세요.
function classification(str) {
    let map = new Map([['A', 1], ['B', 2], ['C', 3]]);
		let arr = str.split('')
    let a,b,c = 0;
    console.log(arr)
    // Map객체의 메서드를 사용해보세요.
		for(let j=0;j<arr.lenght;j++){
    	if(arr[j]==='A'){
        console.log(arr[j])
        a++
        return map.set('A',a)
      }else if(arr[j]==='B'){
        b++
        return map.set('B',b)
      }else if(arr[j]==='C'){
        c++
        return map.set('C',c)
      }
    }
		    
    return map;
}
let str = "ABCCCAA"
console.log(classification(str)); //Map(3){'A' => 4, 'B' => 3, 'C' => 6}



// vote

//assignment
function vote(str){
    // 아래에 코드를 작성해주세요.
      let map = new Map([['A', 0], ['B', 0], ['C', 0],['D',0],['E',0]]);
          let arr = str.split('')
      // Map객체의 메서드를 사용해보세요.
      let [a, b, c, d, e] = [map.get('A'),map.get('B'),map.get('C'),map.get('D'),map.get('E')]
          arr.forEach((ele,key)=>{
          if(ele==='A'){
          a++
          return map.set('A',a)
        }else if(ele==='B'){
          b++
          return map.set('B',b)
        }else if(ele==='C'){
          c++
          return map.set('C',c)
        }else if(ele==='D'){
          d++
          return map.set('D',d)
        }else if(ele==='E'){
          e++
          return map.set('E',e)
        }
      })	
          for(let [key, value] of map){
        console.log(value)
      }
      return 
  }
  vote('BACBACCACCBDEDE')
  
  