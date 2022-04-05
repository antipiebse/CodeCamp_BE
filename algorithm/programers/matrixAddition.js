let arr1 = [[1,2],[2,3]];
let arr2 = [[2,3],[4,5]];
    let arr = (arr1.concat(arr2)).flat();
    let leng = arr.length/2;
    let answer = [];
    let a = [];
    for(let i = 0; i<leng;i++){
        a.push(arr[i]+arr[i+leng]);
        if(a.length===leng/2){
            answer.push(a);
            a = [];
        }
    }

