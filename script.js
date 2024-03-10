
let inputPassword= document.querySelector("#password")
let confirmPassword=document.querySelector("#confirm_password")
let error=document.querySelector(".error")
let userPassword="";
let confirmUserPassword="";

confirmPassword.addEventListener("keyup", (e)=>{
   confirmUserPassword=e.target.value;
   if(confirmUserPassword!==inputPassword.value){
      error.style.display="block";
   }
   else{
      error.style.display="none";
      console.log("password match");
   }
} );
// confirmPassword.addEventListener("blur", (e)=>{
//    confirmUserPassword=e.target.value;
//    if(confirmUserPassword===inputPassword.value){
//       console.log("password match");
//       error.textContent="";
//    }
//    else{
//       console.log("password do not match")
//    }
// });