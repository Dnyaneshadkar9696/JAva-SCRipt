console.log("Hellow World");
let arr = [1,2,3,4];
console.log(arr);

// to reduce the complex calculations using functions
// to avoid code repetation we use functons
// we need to call the function all time
function calvalue(){
    let result = (23* 5 + 23*5 + 23 *5 + 6);
    console.log(result);
}
calvalue();
// to avoid the calculation for different numbers we use the function attributes.
function changeval(a,b,c=0){
    let result1 = (a + 4 * b+6 * c+8);
    console.log(result1);
}
// call the function 
changeval(4,5,6);
changeval(5,5,5);
// for c we add default parameter


// function for string 
function instr(name="sample",rule="If it works don't touch it."){
    console.log("Hi My name is "+ name + "The rule is " + rule );
}
instr("Dnyanesh");
// we can also write the name like ${name}.

// function that gives the total of array
let array = [2,3,4,5,6];
function arrtotle(){
    let total = 0;
    for(let i=0;i<array.length;i++){
        total = total + array[i];
        
    }
    console.log(total);
}
arrtotle();

// scoping in Javascript
let a = 20;
{
    let a = 30;
    var b = 40;
    console.log(a);
}
console.log(a);
console.log(b);