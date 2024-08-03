//Form section 
body = document.querySelector("body");   
document.addEventListener("DOMContentLoaded", function() {
    let contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name1 = document.getElementById("name");
        let email = document.getElementById("email");
        let msg = document.getElementById("msg");

        // Check if all fields are filled
        if (name1.value !== "" && email.value !== "" && msg.value !== "") {
            //console.log("Not null");
            alert("Submitted successfully!");
            

        } else {
            //console.log("Some fields are empty");
            alert("Please fill all fields");
        }

        name1.value = "";
        email.value = "";
        msg.value = "";
    });
});


// Handling Toggle button
let sidebar = document.querySelector("#sidebar");
let togglebtn = document.querySelector("#toggle-button");
let closebtn = document.querySelector("#close-btn");


togglebtn.addEventListener("click", ()=>{
    console.log("button clicked");
    if(togglebtn){
        sidebar.style.display = "flex";
        togglebtn.style.display = "none";
    }
    else{
        sidebar.style.display = "none";
        togglebtn.style.display = "flex";
    }
});

closebtn.addEventListener("click", ()=>{
    if(closebtn){
        sidebar.style.display = "none";
        togglebtn.style.display = "flex";
    }
    else{
        sidebar.style.display = "flex";
    }
});




