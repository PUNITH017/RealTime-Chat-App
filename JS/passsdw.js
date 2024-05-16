const pswdField = document.querySelector(".form input[type='password']"),
toggleIcon = document.querySelector(".form .field i");

toggleIcon.onclick = () =>{
    if (pswdField.type === "password"){
        pswdField.type = "text";
        toggleIcon.classList.add("active");
    }
    else{
        pswdField.type = "password";
        toggleIcon.classList.remove("active");
    }
}