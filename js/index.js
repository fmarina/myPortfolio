let nav_list = document.querySelectorAll(".nav-list")[0];

document.querySelectorAll(".hamburger")[0].addEventListener('click', () => {
    nav_list.classList.toggle("open");
});