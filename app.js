const form = document.getElementById("contact-form");
const firstName = document.getElementById("first-name");

const lastName = document.getElementById("last-name");

const radioButtons = document.querySelectorAll("input[name='query']");

const email = document.getElementById("email");
const message = document.getElementById("message");
const checkBox = document.getElementById("consent");
const button = document.getElementById("button")

form.addEventListener("submit",function(e){
   e.preventDefault()

   let isValid = true;

   const isRadioChecked = Array.from(radioButtons).some(button => button.checked);

   if (firstName.value === ""){
    document.getElementById("first-name-error").style.display = "block";
    firstName.style.borderColor = "red"
    isValid = false
   }
   if (lastName.value === ""){
    document.getElementById("last-name-error").style.display = "block";
    lastName.style.borderColor = "red"
    isValid = false
   }
   if (email.value === ""){
    document.getElementById("email-error").style.display = "block";
    email.style.borderColor = "red"
    isValid = false
   }
   if (!isRadioChecked){
    document.getElementById("query-error").style.display = "block";
    isValid = false
   }
   if (message.value === ""){
    document.getElementById("message-error").style.display = "block";
    message.style.borderColor = "red"
    isValid = false
   }
   if (!checkBox.checked){
    document.getElementById("checkbox-error").style.display = "block";
    isValid = false
   }

   console.log(isValid)
   if(isValid){
    document.getElementById("success-message").style.display = "block";
    form.reset()
   }
   
})

firstName.addEventListener("input", function(){
       document.getElementById("first-name-error").style.display = "none"
       firstName.style.borderColor = ""
   })
lastName.addEventListener("input", function(){
       document.getElementById("last-name-error").style.display = "none"
        lastName.style.borderColor = ""
   })
email.addEventListener("input", function(){
       document.getElementById("email-error").style.display = "none"
        email.style.borderColor = ""
   })
   radioButtons.forEach(function(button){
      button.addEventListener("change", function(){
         document.getElementById("query-error").style.display = "none"
       document.querySelectorAll(".query-options").forEach(function(option){
         option.style.borderColor = "";
        option.style.backgroundColor = "";
       })

       button.parentElement.style.borderColor = "hsl(169, 82%, 27%)"
       button.parentElement.style.backgroundColor = "hsl(148, 38%, 91%)"
     })
      })
    

message.addEventListener("input", function(){
       document.getElementById("message-error").style.display = "none"
        message.style.borderColor = ""
   })
checkBox.addEventListener("change", function(){
       document.getElementById("checkbox-error").style.display = "none"
   })