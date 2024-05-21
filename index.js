// firstName.addEventListener("input", ()=>{
//     console.log(firstName.value)
// })
function validateForm(e) {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password');
  const pattern = /^(?=.[A-Z])(?=.[!@$#&])(?=.\d).+$/;

//   console.log(pattern.text("123mvjyfktk+"));
  
  if(password.value.length < 8) {
    console.log("password too short");
 } else if (!pattern.test(password.value)) {
    console.log("password must include capital letters, numbers and symbols");
    password.style.border = "red solid 1px";
 }else if (password.length.value >= 8 && pattern.test(password.value)) {
    alert(
        `First Name: ${firstName}, Last Name ${lastName}, Email: ${email} password: ${password.value}` );
} 
  
}
