let dropdownContainer = document.querySelectorAll(".dropdown-container");
dropdownContainer.forEach(dropdown => {
    let caret = dropdown.querySelector(".navbar-list-link span")
    let toggleButton = dropdown.querySelector(".navbar-list-link");
    let dropdownMenu = document.querySelectorAll(".dropdown-menu");
    toggleButton.addEventListener("click", function(){
        dropdown.classList.toggle("active")
        caret.classList.toggle("caret-rotate")
    })
})
