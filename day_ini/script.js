// PROTOTYPE IN JS (OBJECTS)
const employee = {
  caltax(){
    console.log("tax rate is 10%");
  }}
const karanArjun = {
  salary: 50000,
}  
const karanArjun1 = {
  salary: 60000,
}
karanArjun.__proto__ = employee; 
karanArjun1.__proto__=employee;
