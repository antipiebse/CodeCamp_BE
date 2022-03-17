const max_up = 2;
const floor = 100;
const start = 1
let result = Math.floor((floor - start) / max_up)
console.log(`${result} + 1`);0

function cbfunction(){
	console.log('CB operaition');	
}

function printMessage(name,cb){
	console.log(`${name}님의 명령: `);
    cb()
}
function event(){
	printMessage('성민', cbfunction);
}
event();