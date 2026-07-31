// let, var, const= types of variables
// redeclaration,reassignment,scoping 
// let a;
// let a;
console.log(a);
a=45;
var a;
a=66;
var a;
{
    console.log(a);
    var a=12;
    a=65;
    console.log(a);
    var b=66;

}
console.log(b);