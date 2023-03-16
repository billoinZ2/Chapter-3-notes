//Parameters are placeholder variables that allow us to
//reuse function

//Example 1: Without parameter(s)
function printYes(){
    console.log("yes");
}

printYes();
printYes();
printYes();

//Example 2: with parameter
function printText(text){
    console.log(text)
}
printText( "Happy Thursday!");
printText( "Tomorrow is Friday!");

//Return statement provides values to the rest of the program
//Returned values can be used by other parts of the code
//console.log does not return values for the rest of your code

//Example 3: without return
function double(n){
    console.log(n*2);
}
double( 21);
double( 911);
double( 66);

//Example 4: with r
function triple(n){
    return(n*3);
}

let lives = triple( 3);
lives -=1;
lives +=2;
console.log(lives);

console.log(triple( 2));

//scopes is the part of the program where the blinding(values of
//a variable} is visible
//Global scope: created outside{}, accessible everywhere
//local scope: created inside specific {}. accessible only there

//Example 5: Different scope
let x=10; //global x
if (x>1){
    let y=20; //local y
    let z=30; //local z
    console.log(x+y+z);
}
console.log(x); //y and z are not accessible outside the {}

//Example 6: no Naming Conflict
function half(n){ //local n
    return (n/2)
}
let n=10;
console.log(half( 100));
console.log(n);
