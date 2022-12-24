
const dropdownToggle = document.querySelectorAll(".navbar-list-link")
const overlay = document.querySelector('.overlay')
const caret = document.querySelector(".expand-more")

dropdownToggle.forEach(toggleBtn => {
    toggleBtn.addEventListener('click', e => {
        e.preventDefault()
        toggleBtn.classList.toggle("active")
        const dropdown = toggleBtn.parentElement;
        // dropdown.classList.toggle("active")
        if(dropdown.classList.contains('active')){
            dropdown.classList.toggle('active')
        }

        else{
            const dropdowns = document.querySelectorAll(".dropdown-container")
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active')
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
