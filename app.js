// let project = document.querySelector("#project")

// project.addEventListener('click', projectPage);

// function projectPage(){

//     project.classList.add("projectHidden");
//     // project.classList.add("projectSection");
// }

document.querySelectorAll(".link").forEach(link =>{
    if(link.href === window.location.href){
        link.classList.add("active")
    }
})