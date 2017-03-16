function greet(){
    console.log('hi');
}
greet();
function logGreeting(fn){
    fn();
}

logGreeting(greet);

var greetMe = function(){
    console.log('Hi there!');
}
greetMe();

logGreeting(greetMe);