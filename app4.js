var a = 5;
var b = 10;

if(a===5){
    let a = 4;  //只在{}範圍
    var b = 1;

    console.log(a);
    console.log(b);
}

console.log(a); //變回5
console.log(b);