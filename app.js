let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");

function toggleSidebar() {                          //switch sidebar between hidden and shown
    if(sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
    }
    else {
        sidebar.classList.add('show');
    }
}


menuIcon.addEventListener("click", () => {      //menu icon triggers toggle
    toggleSidebar();                           
})