let navToggle = document.querySelector('.nav-toggle');
// let navSidebar = document.querySelector('.nav-sidebar');
let navItem = document.querySelectorAll('.nav-item');

navToggle.addEventListener('click', function() {
    this.classList.toggle('close');
    this.nextElementSibling.classList.toggle('slide-in');
    document.body.classList.toggle('mask');
});

navItem.forEach(ele => {
    let submenu = ele.querySelector('.submenu');

    if (submenu) {
        ele.addEventListener('click', function() {
            submenu.classList.toggle('open');
        });
    }
});
