// ==== Data for Load the HTML code ====
const menu = [
 {
    id:1,
    title: 'Croissant with coffe',
    category: 'pastry',
    price: '17.44$',
    img: 'img/crossiant-coffe.jpg',
    desc: `Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan
        copper mug whatever cold-pressedI'm baby woke whatever cold-pressed
        uta, praesentium similique`
 },
 {
    id:2,
    title: 'Hamburger Bucket',
    category: 'lunch',
    price: '19.14$',
    img: 'img/img3.jpg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang
        helvetica man braid jianbing. Marfa thundercats Lorem ipsum dolor sit amet consectetur
        adipisicing`
 },
 {
    id:3,
    title: 'Sandwich Lava',
    category: 'lunch',
    price: '20.44',
    img: 'img/sandwich-lava.jpg',
    desc: ` vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang
        helvetica man braid jianbing. Marfa thundercats Lorem ipsum dolor sit amet consectetur
        adipisicing` 
 },
 {
    id:4,
    title: 'American Coffe',
    category: 'coffe',
    price: '5.4$',
    img:'img/american-coffe.jpg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch.
            Prism austin mlkshk truffaut,` 
 },
 {
    id: 5,
    title: 'Latte Coffe',
    category: 'coffe',
    price:'7.4$',
    img: 'img/latte-coffe.img',
    desc: ` I'm baby woke mlkshk wolf bitters live-edge blue
            bottle, hammock freegan copper mug whatever cold-pressed`
 },
 {
    id: 6,
    title: 'Brisket Beast',
    category: 'lunch',
    price: '10.2$',
    img: 'img/brisket-beast.jpg',
    desc: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quaerat quasi vitae sit,
            sapiente soluta aspernatur consequatur natus. Recusandae.`
 },
 {
    id: 7,
    title: 'PacPac Cungo',
    category: 'pastry',
    price: '11.22$',
    img: 'img/pacpac-cungo.jpg',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum necessitatibus
         e aspernatur consequatur natus. Recusandae.`
 },
 {
    id: 8,
    title: 'Croissant Brugaret',
    category: 'pastry',
    price: '11.12$',
    img: 'img/croissant-burg.jpg',
    desc: `Lorem ipsum dolor Lorem, ipsum dolor Lorem ipsum dolor sit, amet
         consectetur adipisicing elit. Ipsam, ea. ur natus. Recusandae.`
 }
];
const months = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
];
 const weekdays = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
];

// Main JS
window.addEventListener('DOMContentLoaded',()=> {
   // displayMenuItems(menu);
   // displayMenuBtns();
   // getRemainingTime();
});
// NAVBAR SECTION
const navbar = document.getElementById('nav');
window.addEventListener('scroll',()=> {
   const windowHeight = window.pageYOffset;
   const navHeight = navbar.getBoundingClientRect().height;
   // showing the fixed nav
   if(windowHeight > navHeight) {
      navbar.classList.add('show-navbar');
   } else {
      navbar.classList.remove('show-navbar');
   }
})

