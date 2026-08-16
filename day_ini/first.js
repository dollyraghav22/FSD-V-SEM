// let number = prompt("enter the number");
// console.log(number);
// if (number%5==0) {
//     console.log("yes");
// }
// else {
//     console.log("no");
// }
let score = prompt("enter the score");
console.log(score);
if (score>=80 && score<=100){
    console.log("Grade A");
}
else if (score>=70 && score<=89) {
    console.log("Grade B");
}
else if (score>=60 && score<=69) {
    console.log("Grade C");
}
else if (score>=50 && score<=59) {
    console.log("Grade D");
}
else{
    console.log("Grade F");
}