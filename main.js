// ========================== Toggle icon navbar ===================================
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* ================= Scroll Section Active Links ============================== */
let Sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    Sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop = 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top <= offset + height) {
            navlinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
/* ================================ Sticky Navbar ============================== */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

/* ================= remove Toggle icon and Navbar ============================== */
    menuicon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};

/* ================= Typed JS for HOME Headings  ============================== */
const typed = new Typed('.multiple-text', {
    strings: ['Front-End Developer','Ui/Ux Designer','E-comerce Expert'],
    TypedSpeed : 70,
    BackSpeed : 70,
    BackDelay : 1000,
    Loop : true,
});