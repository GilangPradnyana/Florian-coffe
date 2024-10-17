// ==== Data for Load the HTML code ====
const menu = [
 {
    id:1,
    title: 'Croissant with coffe',
    category: 'Pastry',
    price: '17.44$',
    img: 'img/crossiant-coffe.jpg',
    desc: `Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan
        copper mug whatever cold-pressedI'm baby woke whatever cold-pressed
        uta, praesentium similique`
 },
 {
    id:2,
    title: 'Hamburger Bucket',
    category: 'Lunch',
    price: '19.14$',
    img: 'img/img3.jpg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang
        helvetica man braid jianbing. Marfa thundercats Lorem ipsum dolor sit amet consectetur
        adipisicing`
 },
 {
    id:3,
    title: 'Sandwich Lava',
    category: 'Lunch',
    price: '20.44',
    img: 'img/sandiwch-lava.jpg',
    desc: ` vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang
        helvetica man braid jianbing. Marfa thundercats Lorem ipsum dolor sit amet consectetur
        adipisicing` 
 },
 {
    id:4,
    title: 'American Coffe',
    category: 'Coffe',
    price: '5.4$',
    img:'img/american-coffe.jpg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch.
            Prism austin mlkshk truffaut,` 
 },
 {
    id: 5,
    title: 'Latte Coffe',
    category: 'Coffe',
    price:'7.4$',
    img: 'img/latte-coffe.jpg',
    desc: ` I'm baby woke mlkshk wolf bitters live-edge blue
            bottle, hammock freegan copper mug whatever cold-pressed`
 },
 {
    id: 6,
    title: 'Brisket Beast',
    category: 'Lunch',
    price: '10.2$',
    img: 'img/brisket-beast.jpg',
    desc: ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quaerat quasi vitae sit,
            sapiente soluta aspernatur consequatur natus. Recusandae.`
 },
 {
    id: 7,
    title: 'PacPac Cungo',
    category: 'Pastry',
    price: '11.22$',
    img: 'img/pacpac-cungo.jpg',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum necessitatibus
         e aspernatur consequatur natus. Recusandae.`
 },
 {
    id: 8,
    title: 'Croissant Brugaret',
    category: 'Pastry',
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
   displayMenuItems(menu);
   displayMenuBtns();
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
   };
});

// MENU SECTION
const menuSection = document.querySelector('.menu-list');
const btnSection = document.querySelector('.btn-container');
// Load menu content
function displayMenuItems(menu) {
   const menuCategories = menu.map((item) =>{
      return `<div class="content-container">
                <img src="${item.img}" alt="${item.title}" class="photo">
                <!-- content desc -->
                <div class="item-info">
                    <div class="header-item">
                        <h4>${item.title}</h4>
                        <p>${item.price}</p>
                    </div>
                    <p class="item-text">
                        ${item.desc}
                    </p>
                </div>
            </div>`
   }).join('');
   menuSection.innerHTML = menuCategories;
};
// MENU BTNS
function displayMenuBtns() {
   const categories = menu.reduce((values, item)=> {
      if(!values.includes(item.category)) {
         values.push(item.category)
      };
      return values;
   },['all']); 
   // Showing btns
   const showBtns = categories.map((item)=> {
      return ` <button type="button" class="filter-btn" data-id="${item}">${item}</button>`
   }).join('');
   btnSection.innerHTML = showBtns;

   // Shorting categories
   const filterBtns = document.querySelectorAll('.filter-btn');
   filterBtns.forEach((el)=> {
      el.addEventListener('click',(btns)=> {
         const itemID = btns.currentTarget.dataset.id;
         const menuShorting = menu.filter((items)=> {
            if(items.category == itemID) {
               return items;
            };
         });
         if(itemID == 'all') {
            displayMenuItems(menu);
         } else {
            displayMenuItems(menuShorting)
         };
      });
   });
};

// COUNTDOWN SECTION
const giveaway = document.querySelector('.giveaway-text');
const deadline = document.querySelector('.deadline');
const count = document.querySelectorAll('.deadline-format h4');
// Setup
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 50,10,20,0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
giveaway.textContent = `Grand Opeing on ${weekday}, ${date}, ${month}, ${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();
function getRemainingTime() {
   const today = new Date().getTime();  
   const deadlineTime = futureTime - today;
   // the template
   const oneDay = 24*60*60*1000;
   const oneHour = 60*60*1000;
   const oneMinute = 60*1000;
   // calculate all values
   let days = Math.floor(deadlineTime / oneDay);
   let hour = Math.floor((deadlineTime % oneDay) / oneHour);
   let minutes = Math.floor((deadlineTime % oneHour) / oneMinute);
   let milsc = Math.floor((deadlineTime % oneMinute) / 1000);
   // set all the time data
   const values = [days, hour, minutes, milsc];
   // add the '0' before number
   function format(item) {
      if(item < 10) {
         return `0${item}`
      }
      return item;
   };
   // added the countdown
   count.forEach((item, index)=> {
      item.innerHTML = format(values[index]);
   });
   // when the countdown passed
   if(deadlineTime < 0) {
      clearInterval(countdown);
      deadline.innerHTML = `<h5>Giveaway was expired</h5>`
   };
};
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();

// FAQ SECTION
const faqSection = document.querySelectorAll('.question');
faqSection.forEach((question)=> {
   const item = question.querySelector('.question-btn');
   item.addEventListener('click', ()=> {
      faqSection.forEach((el)=> {
         // if the statement true remove the showing text class
         if(el !== question) {
            el.classList.remove('show-text');
         };
      });
      // if the statement passed showing the text 
      question.classList.toggle('show-text')
   });
})