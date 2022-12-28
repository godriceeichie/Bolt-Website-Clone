
const dropdownToggle = document.querySelectorAll(".navbar-list-link")
const overlay = document.querySelector('.overlay')
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

let mobileDropdownContainer = document.querySelectorAll(".mobile-dropdown-container")
mobileDropdownContainer.forEach(dropdownContainer => {
    let mobileDropdown = dropdownContainer.querySelector(".mobile-dropdown")
    let dropdownToggleBtn = dropdownContainer.querySelector(".mobile-navbar-list__link");
    dropdownToggleBtn.addEventListener("click", () => {
        if(mobileDropdown.classList.contains("active")){
            mobileDropdown.classList.toggle("active")
        }
        else{
            document.querySelectorAll(".mobile-dropdown").forEach(dropdown => {
                dropdown.classList.remove("active")
            });
            mobileDropdown.classList.add("active")
        }
    })
})

// let dropdownToggleBtn = document.querySelectorAll(".mobile-navbar-list__link");
// dropdownToggleBtn.forEach(mobileToggleBtn => {
//     mobileToggleBtn.addEventListener("click", () => {
//         let mobileDropdown = document.querySelector(".mobile-dropdown");
//         if(mobileDropdownContainer.classList.contains("")){

//         }
//     })
// })