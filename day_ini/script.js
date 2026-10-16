// INHERITANCE IN JS

class user{
  constructor(name,email){
    this.name = name;
    this.email = email;

  }
  viewdata(){
    console.log("you can view the properties of this class");
  }
}
class admin extends user{
  newmethod(){
    
  }
}
let student1 = new user();
let student2 = new user();