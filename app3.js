var greetMe = function(){
    console.log('Hi Annie!');
}
greetMe();

greetSam = () =>console.log('Hi Sam!');
greetSam();

greetYou = name =>console.log('hi '+name+'!');
greetYou('NTUE');

var square1 = function(num) {return num*num};
var square2 = num => {return num*num};
var square3 = num => num*num;