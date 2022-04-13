// // 지도는 n*n배열
// // 지도 1과 지도 2 중 어느 한 곳이라도 벽이라면 벽, 모두 공백이면 공백


let n = 5
let arr1 = [9, 20, 28, 18, 11]
let arr2 = [30, 1, 21, 17, 28]
solution(n, arr1, arr2)
function solution(n, arr1, arr2) {
  //비밀지도를 만들기 위해 10진수를 2진수로 변환하여 배열에 저장
  let flag = []
  let arr = arr1.concat(arr2)
  for (let i = 0; i < arr.length; i++) {
    let devide = []
    while (arr[i] > 0) {
      devide.unshift(arr[i] % 2)
      arr[i] = Math.floor(arr[i] / 2)
    }
    // console.log(devide.join('').padStart(n,0).split(''))
    flag.push(devide.join('').padStart(n, 0))
  }
  let map = []
  let flag2 = []
  let leng = flag.length / 2
  // console.log(leng)
  // console.log(flag)
  for (let j = 0; j < leng; j++) {
    flag2 = []
    for (let k = 0; k < leng; k++) {
      // console.log(flag[j][k], flag[j+leng][k])
      if ((flag[j][k] === '0') && (flag[j + leng][k] === '0')) {
        // console.log(flag[j][k], flag[j+leng][k], j)
        flag2.push(' ')
      }
      else flag2.push('#')
    }
    // console.log(flag2)
    map.push(flag2.join(''))
  }
  return map
}


