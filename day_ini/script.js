// INHERITANCE IN JS

class person{
  eat(){
    console.log("a person can eat");
  }
  sleep(){
    console.log("a person can sleep");
  }
}
class doctor extends person {
  work(){
    console.log("a doctor can work");
  }
}
let obj = new person();