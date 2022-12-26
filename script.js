
const dropdownToggle = document.querySelectorAll(".navbar-list-link")
const overlay = document.querySelector('.overlay')
const caret = document.querySelector(".expand-more")

dropdownToggle.forEach(toggleBtn => {
    toggleBtn.addEventListener('click', e => {
        e.preventDefault()
        // toggleBtn.classList.toggle("active")
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
