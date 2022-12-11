// -------------------------------------------
//             constant variables
// -------------------------------------------

// const vars for showing and hiding add to cart button
const cartHover1 = document.getElementById('cartHover1');
const addToCart1 = document.getElementById('addToCart1');
const productCardImg1 = document.getElementById('productCardImg1');
const cartHover2 = document.getElementById('cartHover2');
const addToCart2 = document.getElementById('addToCart2');
const productCardImg2 = document.getElementById('productCardImg2');
const cartHover3 = document.getElementById('cartHover3');
const addToCart3 = document.getElementById('addToCart3');
const productCardImg3 = document.getElementById('productCardImg3');
const cartHover4 = document.getElementById('cartHover4');
const addToCart4 = document.getElementById('addToCart4');
const productCardImg4 = document.getElementById('productCardImg4');
const cartHover5 = document.getElementById('cartHover5');
const addToCart5 = document.getElementById('addToCart5');
const productCardImg5 = document.getElementById('productCardImg5');
const cartHover6 = document.getElementById('cartHover6');
const addToCart6 = document.getElementById('addToCart6');
const productCardImg6 = document.getElementById('productCardImg6');
const cartHover7 = document.getElementById('cartHover7');
const addToCart7 = document.getElementById('addToCart7');
const productCardImg7 = document.getElementById('productCardImg7');
const cartHover8 = document.getElementById('cartHover8');
const addToCart8 = document.getElementById('addToCart8');
const productCardImg8 = document.getElementById('productCardImg8');
const cartHover9 = document.getElementById('cartHover9');
const addToCart9 = document.getElementById('addToCart9');
const productCardImg9 = document.getElementById('productCardImg9');
const cartHover10 = document.getElementById('cartHover10');
const addToCart10 = document.getElementById('addToCart10');
const productCardImg10 = document.getElementById('productCardImg10');
const cartHover11 = document.getElementById('cartHover11');
const addToCart11 = document.getElementById('addToCart11');
const productCardImg11 = document.getElementById('productCardImg11');
const cartHover12 = document.getElementById('cartHover12');
const addToCart12 = document.getElementById('addToCart12');
const productCardImg12 = document.getElementById('productCardImg12');

// sessionstorage variables used to determine what items are in cart
let iphone1InCart = window.sessionStorage.getItem('iphone1InCart');
let iphone2InCart = window.sessionStorage.getItem('iphone2InCart');
let iphone3InCart = window.sessionStorage.getItem('iphone3InCart');
let ipad1InCart = window.sessionStorage.getItem('ipad1InCart');
let ipad2InCart = window.sessionStorage.getItem('ipad2InCart');
let ipad3InCart = window.sessionStorage.getItem('ipad3InCart');
let airpods1InCart = window.sessionStorage.getItem('airpods1InCart');
let airpods2InCart = window.sessionStorage.getItem('airpods2InCart');
let airpods3InCart = window.sessionStorage.getItem('airpods3InCart');
let macbook1InCart = window.sessionStorage.getItem('macbook1InCart');
let macbook2InCart = window.sessionStorage.getItem('macbook2InCart');
let macbook3InCart = window.sessionStorage.getItem('macbook3InCart');

// const vars for individual product cards
const iphone1 = document.getElementById('iphone1');
const iphone2 = document.getElementById('iphone2');
const iphone3 = document.getElementById('iphone3');
const ipad1 = document.getElementById('ipad1');
const ipad2 = document.getElementById('ipad2');
const ipad3 = document.getElementById('ipad3');
const airpods1 = document.getElementById('airpods1');
const airpods2 = document.getElementById('airpods2');
const airpods3 = document.getElementById('airpods3');
const macbook1 = document.getElementById('macbook1');
const macbook2 = document.getElementById('macbook2');
const macbook3 = document.getElementById('macbook3');
const notAdded = document.getElementById('notAdded');

// -------------------------------------------
//             main
// -------------------------------------------
// when hovering over a card the add to cart button appears, when clicking a card the item gets added to cart

iphone1.addEventListener('mouseover', function () {
    cartHover1.style.display = "flex";
    productCardImg1.style.display = "none";  
})
iphone1.addEventListener('mouseout', function () {
    cartHover1.style.display = "none";
    productCardImg1.style.display = "block";
})
iphone1.addEventListener('click', function () {
    window.sessionStorage.getItem("iphone1InCart");
    window.sessionStorage.setItem("iphone1InCart", 'true');
})

iphone2.addEventListener('mouseover', function () {
    cartHover2.style.display = "flex";
    productCardImg2.style.display = "none";  
})
iphone2.addEventListener('mouseout', function () {
    cartHover2.style.display = "none";
    productCardImg2.style.display = "block";
})
iphone2.addEventListener('click', function () {
    window.sessionStorage.getItem("iphone2InCart");
    window.sessionStorage.setItem("iphone2InCart", 'true');
})

iphone3.addEventListener('mouseover', function () {
    cartHover3.style.display = "flex";
    productCardImg3.style.display = "none";  
})
iphone3.addEventListener('mouseout', function () {
    cartHover3.style.display = "none";
    productCardImg3.style.display = "block";
})
iphone3.addEventListener('click', function () {
    window.sessionStorage.getItem("iphone3InCart");
    window.sessionStorage.setItem("iphone3InCart", 'true');
})

ipad1.addEventListener('mouseover', function () {
    cartHover4.style.display = "flex";
    productCardImg4.style.display = "none";  
})
ipad1.addEventListener('mouseout', function () {
    cartHover4.style.display = "none";
    productCardImg4.style.display = "block";
})
ipad1.addEventListener('click', function () {
    window.sessionStorage.getItem("ipad1InCart");
    window.sessionStorage.setItem("ipad1InCart", 'true');
})

ipad2.addEventListener('mouseover', function () {
    cartHover5.style.display = "flex";
    productCardImg5.style.display = "none";  
})
ipad2.addEventListener('mouseout', function () {
    cartHover5.style.display = "none";
    productCardImg5.style.display = "block";
})
ipad2.addEventListener('click', function () {
    window.sessionStorage.getItem("ipad2InCart");
    window.sessionStorage.setItem("ipad2InCart", 'true');  
})

ipad3.addEventListener('mouseover', function () {
    cartHover6.style.display = "flex";
    productCardImg6.style.display = "none";  
})
ipad3.addEventListener('mouseout', function () {
    cartHover6.style.display = "none";
    productCardImg6.style.display = "block";
})
ipad3.addEventListener('click', function () {
    window.sessionStorage.getItem("ipad3InCart");
    window.sessionStorage.setItem("ipad3InCart", 'true');
})

airpods1.addEventListener('mouseover', function () {
    cartHover7.style.display = "flex";
    productCardImg7.style.display = "none";  
})
airpods1.addEventListener('mouseout', function () {
    cartHover7.style.display = "none";
    productCardImg7.style.display = "block";
})
airpods1.addEventListener('click', function () {
    window.sessionStorage.getItem("airpods1InCart");
    window.sessionStorage.setItem("airpods1InCart", 'true');
})

airpods2.addEventListener('mouseover', function () {
    cartHover8.style.display = "flex";
    productCardImg8.style.display = "none";  
})
airpods2.addEventListener('mouseout', function () {
    cartHover8.style.display = "none";
    productCardImg8.style.display = "block";
})
airpods2.addEventListener('click', function () {
    window.sessionStorage.getItem("airpods2InCart");
    window.sessionStorage.setItem("airpods2InCart", 'true');
})

airpods3.addEventListener('mouseover', function () {
    cartHover9.style.display = "flex";
    productCardImg9.style.display = "none";  
})
airpods3.addEventListener('mouseout', function () {
    cartHover9.style.display = "none";
    productCardImg9.style.display = "block";
})
airpods3.addEventListener('click', function () {
    window.sessionStorage.getItem("airpods3InCart");
    window.sessionStorage.setItem("airpods3InCart", 'true');
})

macbook1.addEventListener('mouseover', function () {
    cartHover10.style.display = "flex";
    productCardImg10.style.display = "none";  
})
macbook1.addEventListener('mouseout', function () {
    cartHover10.style.display = "none";
    productCardImg10.style.display = "block";
})
macbook1.addEventListener('click', function () {
    window.sessionStorage.getItem("macbook1InCart");
    window.sessionStorage.setItem("macbook1InCart", 'true');
})

macbook2.addEventListener('mouseover', function () {
    cartHover11.style.display = "flex";
    productCardImg11.style.display = "none";  
})
macbook2.addEventListener('mouseout', function () {
    cartHover11.style.display = "none";
    productCardImg11.style.display = "block";
})
macbook2.addEventListener('click', function () {
    window.sessionStorage.getItem("macbook2InCart");
    window.sessionStorage.setItem("macbook2InCart", 'true');
})

macbook3.addEventListener('mouseover', function () {
    cartHover12.style.display = "flex";
    productCardImg12.style.display = "none";  
})
macbook3.addEventListener('mouseout', function () {
    cartHover12.style.display = "none";
    productCardImg12.style.display = "block";
})
macbook3.addEventListener('click', function () {
    window.sessionStorage.getItem("macbook3InCart");
    window.sessionStorage.setItem("macbook3InCart", 'true');
})