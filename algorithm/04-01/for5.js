function bigNum(str) {
	let biggest = 0;
  for (let i = 0; i< str.length; i++){
    if(biggest < Number(str[i]))
  	biggest = Number(str[i])
  }
	return biggest
}



bigNum('12345')

















