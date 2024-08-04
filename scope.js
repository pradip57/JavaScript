//Scope
//a. Global
//b. Block/ Local

var x = 10;
console.log(x); //10

{
  var x = 20;
  console.log(x); //20
}

console.log(x); //20(Because var always gives global scope)

//let gives both global and block scope
let y = 30;
console.log(y);//30
//Remember let cannot be redeclared

{
    let y = 45;
    console.log(y)//45
}

console.log(y)//30
