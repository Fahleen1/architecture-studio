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



//Business Part
const business ={
    projects:235,
    buildingDesigns:421,
    officeLocation:4,
    experience:3
};

let business_container = document.getElementById("business-cont");
let values = Object.entries(business);

let a = values.map(([key, val])=>{
    let business_item = document.createElement("div");
    business_item.classList.add("business-item");
    business_item.innerHTML = `<h1>${val}</h1> <p>${key.replace(/([A-Z])/g, ' $1').toUpperCase()}</p> `;
    business_container.appendChild(business_item);
});


