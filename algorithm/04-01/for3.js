function makeNumber(num) {
    let str = '';
    for (let j = 1; j <= num; j++) {
        str += j;
      	if(j !== num){
        str += '-';}
    }
  	
    return str
}

makeNumber(5)
















