let navToggle = document.querySelector('.nav-toggle');
let navSidebar = document.querySelector('.nav-sidebar');
let drowdown = document.querySelectorAll('.nav .nav-item');

navToggle.addEventListener('click', function() {
    this.classList.toggle('close');
    navSidebar.classList.toggle('slide-in');
    document.body.classList.toggle('mask');
});

drowdown.forEach(ele => {
    ele.addEventListener('click', function() {
        this.classList.toggle('dropdown');
    });
});