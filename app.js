let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let closeIcon = document.querySelector(".close-icon");

menuIcon.addEventListener("click", () => {      //menu icon shows sidebar
    sidebar.classList.add("show");
})

closeIcon.addEventListener("click", () => {     //close icon hides sidebar
    sidebar.classList.remove("show");
})