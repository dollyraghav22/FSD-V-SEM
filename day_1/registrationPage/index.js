const email=document.getElementById("email");
const name=document.getElementById("name");
const password=document.getElementById("password");
const btn=document.getElementById("btn");

const div=document.getElementById("students");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const val=email.innerText;
    console.log(name.val);
    console.log(email.val);
    console.log(password.val);

    const innerdiv=document.createElement("div");
    innerdiv.innerText='&{email.value} &{name.value} &{password.value}';
    div.appendChild(innerdiv);
})