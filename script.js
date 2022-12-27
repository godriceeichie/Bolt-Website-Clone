
const dropdownToggle = document.querySelectorAll(".navbar-list-link")
const overlay = document.querySelector('.overlay')
const caret = document.querySelector(".expand-more")
document.addEventListener("click", e => {
    if(!e.target.closest(".dropdown-container")){
        const dropdowns = document.querySelectorAll(".dropdown-container")
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active')
            if (document.querySelector('.dropdown-container.active')) {
                overlay.classList.add('active');
    
            } else {
                overlay.classList.remove('active');
                dropdownToggle.forEach(toggleBtn => {
                    toggleBtn.classList.remove("active")
                })
            }
        })
    }
})

dropdownToggle.forEach(toggleBtn => {
    toggleBtn.addEventListener('click', e => {
        e.preventDefault()
        if(toggleBtn.classList.contains("active")){
            toggleBtn.classList.toggle("active")
        }

        else{
            for(i = 0; i < dropdownToggle.length; i++){
                let item = dropdownToggle[i]
                item.classList.remove("active")
            }
            toggleBtn.classList.add("active")
        }
        const dropdown = toggleBtn.parentElement;
        // dropdown.classList.toggle("active")
        if(dropdown.classList.contains('active')){
            dropdown.classList.toggle('active')
        }

        else{
            const dropdowns = document.querySelectorAll(".dropdown-container")
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active')
                // toggleBtn.classList.remove("active")
            })
            dropdown.classList.add('active')
        }

        
        if (document.querySelector('.dropdown-container.active')) {
            overlay.classList.add('active');

        } else {
            overlay.classList.remove('active');
        }
    })
})

let mobileNavbar = document.querySelector(".mobile-navbar")
let secondHamburgerToggle = document.querySelector(".second-hamburger")
let hamburgerToggle = document.querySelector(".hamburger");
hamburgerToggle.addEventListener("click", () => {
    mobileNavbar.classList.add("is-active");
    hamburgerToggle.classList.toggle("is-active")
})

secondHamburgerToggle.addEventListener("click", () => {
    mobileNavbar.classList.remove("is-active")
    hamburgerToggle.classList.remove("is-active")
})

let mobileDropdown = document.querySelector(".mobile-dropdown")
let mobileNavbarToggle = document.querySelector(".mobile-navbar-list__link");
mobileNavbarToggle.addEventListener("click", () => {
    mobileDropdown.classList.toggle("active")
})