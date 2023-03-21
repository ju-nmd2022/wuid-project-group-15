// -------------------------------------------
//             constant variables
// -------------------------------------------

// const variables of 'trashcan' imgs used for removing cart items

const removeCartItem1 = document.getElementById('removeCartItem1');
const removeCartItem2 = document.getElementById('removeCartItem2');
const removeCartItem3 = document.getElementById('removeCartItem3');
const removeCartItem4 = document.getElementById('removeCartItem4');
const removeCartItem5 = document.getElementById('removeCartItem5');
const removeCartItem6 = document.getElementById('removeCartItem6');
const removeCartItem7 = document.getElementById('removeCartItem7');
const removeCartItem8 = document.getElementById('removeCartItem8');
const removeCartItem9 = document.getElementById('removeCartItem9');
const removeCartItem10 = document.getElementById('removeCartItem10');
const removeCartItem11 = document.getElementById('removeCartItem11');
const removeCartItem12 = document.getElementById('removeCartItem12');

// const variables for cart item cards

const cartItem1 = document.getElementById('cartItem1');
const cartItem2 = document.getElementById('cartItem2');
const cartItem3 = document.getElementById('cartItem3');
const cartItem4 = document.getElementById('cartItem4');
const cartItem5 = document.getElementById('cartItem5');
const cartItem6 = document.getElementById('cartItem6');
const cartItem7 = document.getElementById('cartItem7');
const cartItem8 = document.getElementById('cartItem8');
const cartItem9 = document.getElementById('cartItem9');
const cartItem10 = document.getElementById('cartItem10');
const cartItem11 = document.getElementById('cartItem11');
const cartItem12 = document.getElementById('cartItem12');

// const variables for quantity button, used for removing and adding quantities

const quantityNumber1 = document.getElementById('quantityNumber1');
const plus1 = document.getElementById('plus1');
const minus1 = document.getElementById('minus1');
const quantityNumber2 = document.getElementById('quantityNumber2');
const plus2 = document.getElementById('plus2');
const minus2 = document.getElementById('minus2');
const quantityNumber3 = document.getElementById('quantityNumber3');
const plus3 = document.getElementById('plus3');
const minus3 = document.getElementById('minus3');
const quantityNumber4 = document.getElementById('quantityNumber4');
const plus4 = document.getElementById('plus4');
const minus4 = document.getElementById('minus4');
const quantityNumber5 = document.getElementById('quantityNumber5');
const plus5 = document.getElementById('plus5');
const minus5 = document.getElementById('minus5');
const quantityNumber6 = document.getElementById('quantityNumber6');
const plus6 = document.getElementById('plus6');
const minus6 = document.getElementById('minus6');
const quantityNumber7 = document.getElementById('quantityNumber7');
const plus7 = document.getElementById('plus7');
const minus7 = document.getElementById('minus7');
const quantityNumber8 = document.getElementById('quantityNumber8');
const plus8 = document.getElementById('plus8');
const minus8 = document.getElementById('minus8');
const quantityNumber9 = document.getElementById('quantityNumber9');
const plus9 = document.getElementById('plus9');
const minus9 = document.getElementById('minus9');
const quantityNumber10 = document.getElementById('quantityNumber10');
const plus10 = document.getElementById('plus10');
const minus10 = document.getElementById('minus10');
const quantityNumber11 = document.getElementById('quantityNumber11');
const plus11 = document.getElementById('plus11');
const minus11 = document.getElementById('minus11');
const quantityNumber12 = document.getElementById('quantityNumber12');
const plus12 = document.getElementById('plus12');
const minus12 = document.getElementById('minus12');

// const variables used if cart is empty

const emptyCart = document.getElementById('emptyCart');
const mayWeRecommend = document.getElementById('mayWeRecommend');

// const variable for total price text

const yourTotal = document.getElementById('yourTotal');

// const variables for card information

const submitCardInformation = document.getElementById('submitCardInformation');
const cardNumber = document.getElementById('cardNumber');
const cardholderName = document.getElementById('cardholderName');
const expirationYear = document.getElementById('expirationYear');
const expirationMonth = document.getElementById('expirationMonth');
const ccv = document.getElementById('ccv');

// const variables for order confirmation message

const orderConfirmation = document.getElementById('orderConfirmation');
const orderConfirmationText = document.getElementById('orderConfirmationText');

// -------------------------------------------
//             let variables
// -------------------------------------------

// counters for quantity of items
let iphone1Quantity = 0;
let iphone2Quantity = 0;
let iphone3Quantity = 0;
let ipad1Quantity = 0;
let ipad2Quantity = 0;
let ipad3Quantity = 0;
let airpods1Quantity = 0;
let airpods2Quantity = 0;
let airpods3Quantity = 0;
let macbook1Quantity = 0;
let macbook2Quantity = 0;
let macbook3Quantity = 0;

// counter for how many recommended items are present
let recommendationCounter = 0;

// counter for total price
let totalPrice = 0;

// -------------------------------------------
//             functions
// -------------------------------------------

// 

// updates the order confirmation text based on which items are in cart
function updateOrderConfirmation(){
window.sessionStorage.getItem("iphone1InCart");
window.sessionStorage.getItem("iphone2InCart");
window.sessionStorage.getItem("iphone3InCart");
window.sessionStorage.getItem("ipad1InCart");
window.sessionStorage.getItem("ipad2InCart");
window.sessionStorage.getItem("ipad3InCart");
window.sessionStorage.getItem("airpods1InCart");
window.sessionStorage.getItem("airpods2InCart");
window.sessionStorage.getItem("airpods3InCart");
window.sessionStorage.getItem("macbook1InCart");
window.sessionStorage.getItem("macbook2InCart");
window.sessionStorage.getItem("macbook3InCart");

orderConfirmationText.innerText = 'The following items are on their way:'

if (iphone1InCart === 'true') {
    orderConfirmationText.innerText = (orderConfirmationText.innerText) + ' ' + 'Black Standard (iPhone 14)';
}
if (iphone2InCart === 'true') {
    orderConfirmationText.innerText = (orderConfirmationText.innerText) + ' ' + 'Brown Standard (iPhone 14)';
}
if (iphone3InCart === 'true') {
    orderConfirmationText.innerText = (orderConfirmationText.innerText) + ' ' + 'Blue Standard (iPhone 14)';
}
if (ipad1InCart === 'true') {
    orderConfirmationText.innerText = (orderConfirmationText.innerText) + ' ' + 'Black Standard (iPad 2022)';
}
if (ipad2InCart === 'true') {
    orderConfirmationText.innerText = (orderConfirmationText.innerText) + ' ' + 'Brown Standard (iPad 2022)';
}
if (ipad3InCart === 'true') {
    orderConfirmationText.innerText = (orderConfirmationText.innerText) + ' ' + 'Blue Standard (iPad 2022)';
}
if (airpods1InCart === 'true') {
    orderConfirmationText.innerText = (orderConfirmationText.innerText) + ' ' + 'Black Standard (AirPods (3rd Gen)';
}
if (airpods2InCart === 'true') {
    orderConfirmationText.innerText = (orderConfirmationText.innerText) + ' ' + 'Brown Standard (AirPods (3rd Gen)';
}
if (airpods3InCart === 'true') {
    orderConfirmationText.innerText = (orderConfirmationText.innerText) + ' ' + 'Blue Standard (AirPods (3rd Gen)';
}
if (macbook1InCart === 'true') {
    orderConfirmationText.innerText = (orderConfirmationText.innerText) + ' ' + 'Black Sleeve (MacBook Air M2)';
}
if (macbook2InCart === 'true') {
    orderConfirmationText.innerText = (orderConfirmationText.innerText) + ' ' + 'Brown Sleeve (MacBook Air M2)';
}
if (macbook3InCart === 'true') {
    orderConfirmationText.innerText = (orderConfirmationText.innerText) + ' ' + 'Blue Sleeve (MacBook Air M2)';
}
}

// clear card information
function clearCard() {
    if (cardNumber.value != '') {
        cardNumber.value = '';
    }
    if (cardholderName.value != '') {
        cardholderName.value = '';
    }
    if (expirationYear.value != '') {
        expirationYear.value = '';
    }
    if (expirationMonth.value != '') {
        expirationMonth.value = '';
    }
    if (ccv.value != '') {
        ccv.value = '';
    }
}
// update totalPrice
function priceCheck() {
    totalPrice = totalPrice;
}
// check totalPrice and if === 0, update page
function updatePage() {
    priceCheck();
    if (totalPrice === 0) {
        yourTotal.style.display = 'none';
        emptyCart.style.display = 'block';
        mayWeRecommend.innerText = 'May We Recommend?';
    }
    else {
        yourTotal.innerText = 'Your Total: ' + (totalPrice) + ':-';
        emptyCart.style.display = 'none';
    }
}
// when removing any item, perform an updatePage
function removeCartItem() {
    updatePage();
}
// item specific removals trigger removeCartItem, removes the item being true from sessionsstorage, hides the item and reverts the price
function removeIphone1() {
    window.sessionStorage.getItem("iphone1InCart");
    window.sessionStorage.setItem("iphone1InCart",'false');
    cartItem1.style.display = 'none';
    totalPrice = totalPrice - 399;
    removeCartItem();
}
function removeIphone2() {
    window.sessionStorage.getItem("iphone2InCart");
    window.sessionStorage.setItem("iphone2InCart",'false');
    cartItem2.style.display = 'none';
    totalPrice = totalPrice - 399;
    removeCartItem();
}
function removeIphone3() {
    window.sessionStorage.getItem("iphone3InCart");
    window.sessionStorage.setItem("iphone3InCart",'false');
    cartItem3.style.display = 'none';
    totalPrice = totalPrice - 399;
    removeCartItem();
}
function removeIpad1() {
    window.sessionStorage.getItem("ipad1InCart");
    window.sessionStorage.setItem("ipad1InCart",'false');
    cartItem4.style.display = 'none';
    totalPrice = totalPrice - 399;
    removeCartItem();
}
function removeIpad2() {
    window.sessionStorage.getItem("ipad2InCart");
    window.sessionStorage.setItem("ipad2InCart",'false');
    cartItem5.style.display = 'none';
    totalPrice = totalPrice - 399;
    removeCartItem();
}
function removeIpad3() {
    window.sessionStorage.getItem("ipad3InCart");
    window.sessionStorage.setItem("ipad3InCart",'false');
    cartItem6.style.display = 'none';
    totalPrice = totalPrice - 399;
    removeCartItem();
}
function removeAirpods1() {
    window.sessionStorage.getItem("airpods1InCart");
    window.sessionStorage.setItem("airpods1InCart",'false');
    cartItem7.style.display = 'none';
    totalPrice = totalPrice - 199;
    removeCartItem();
}
function removeAirpods2() {
    window.sessionStorage.getItem("airpods2InCart");
    window.sessionStorage.setItem("airpods2InCart",'false');
    cartItem8.style.display = 'none';
    totalPrice = totalPrice - 199;
    removeCartItem();
}
function removeAirpods3() {
    window.sessionStorage.getItem("airpods3InCart");
    window.sessionStorage.setItem("airpods3InCart",'false');
    cartItem9.style.display = 'none';
    totalPrice = totalPrice - 199;
    removeCartItem();
}
function removeMacbook1() {
    window.sessionStorage.getItem("macbook1InCart");
    window.sessionStorage.setItem("macbook1InCart",'false');
    cartItem10.style.display = 'none';
    totalPrice = totalPrice - 899;
    removeCartItem();
}
function removeMacbook2() {
    window.sessionStorage.getItem("macbook2InCart");
    window.sessionStorage.setItem("macbook2InCart",'false');
    cartItem11.style.display = 'none';
    totalPrice = totalPrice - 899;
    removeCartItem();
}
function removeMacbook3() {
    window.sessionStorage.getItem("macbook3InCart");
    window.sessionStorage.setItem("macbook3InCart",'false');
    cartItem12.style.display = 'none';
    totalPrice = totalPrice - 899;
    removeCartItem();
}

// updates quantity, quantityNumber innerText, and checks if the quantity hits 0
function checkQuantity() {
    iphone1Quantity = iphone1Quantity;
    iphone2Quantity = iphone2Quantity;
    iphone3Quantity = iphone3Quantity;
    ipad1Quantity = ipad1Quantity;
    ipad2Quantity = ipad2Quantity;
    ipad3Quantity = ipad3Quantity;
    airpods1Quantity = airpods1Quantity;
    airpods2Quantity = airpods2Quantity;
    airpods3Quantity = airpods3Quantity;
    macbook1Quantity = macbook1Quantity;
    macbook2Quantity = macbook2Quantity;
    macbook3Quantity = macbook3Quantity;
    quantityNumber1.innerText = (iphone1Quantity);
    quantityNumber2.innerText = (iphone2Quantity);
    quantityNumber3.innerText = (iphone3Quantity);
    quantityNumber4.innerText = (ipad1Quantity);
    quantityNumber5.innerText = (ipad2Quantity);
    quantityNumber6.innerText = (ipad3Quantity);
    quantityNumber7.innerText = (airpods1Quantity);
    quantityNumber8.innerText = (airpods2Quantity);
    quantityNumber9.innerText = (airpods3Quantity);
    quantityNumber10.innerText = (macbook1Quantity);
    quantityNumber11.innerText = (macbook2Quantity);
    quantityNumber12.innerText = (macbook3Quantity);
    updatePage();
}

// updates number of present recommendations
function updateRecommendations() {
    recommendationCounter = recommendationCounter;
}

// hides all cartitems
function hideAll() {
    cartItem1.style.display = 'none';
    cartItem2.style.display = 'none';
    cartItem3.style.display = 'none';
    cartItem4.style.display = 'none';
    cartItem5.style.display = 'none';
    cartItem6.style.display = 'none';
    cartItem7.style.display = 'none';
    cartItem8.style.display = 'none';
    cartItem9.style.display = 'none';
    cartItem10.style.display = 'none';
    cartItem11.style.display = 'none';
    cartItem12.style.display = 'none';
}
// hides all recommendations
function hideAllRecommendations() {
    iphone1.style.display = 'none';
    iphone2.style.display = 'none';
    iphone3.style.display = 'none';
    ipad1.style.display = 'none';
    ipad2.style.display = 'none';
    ipad3.style.display = 'none';
    airpods1.style.display = 'none';
    airpods2.style.display = 'none';
    airpods3.style.display = 'none';
    macbook1.style.display = 'none';
    macbook2.style.display = 'none';
    macbook3.style.display = 'none';
}

// shorthand for clearing both cartitems and recommendations
function clearAll() {
hideAll();
hideAllRecommendations();
}

// checks what cart items should be displayed based on which ones have sessionstorage value === true
function cartCheck() {
if (iphone1InCart === 'true') {
    iphone1Quantity = iphone1Quantity + 1;
    updateRecommendations();
    cartItem1.style.display = 'flex';
    if (recommendationCounter === 0) {
    recommendationCounter = recommendationCounter + 3
    ipad1.style.display = 'block';
    airpods1.style.display = 'block';
    macbook1.style.display = 'block';
    }
    totalPrice = totalPrice + 399;
    priceCheck();
    updatePage();
}
if (iphone2InCart === 'true') {
    iphone2Quantity = iphone2Quantity + 1;
    updateRecommendations();
    cartItem2.style.display = 'flex';
    if (recommendationCounter === 0) {
        recommendationCounter = recommendationCounter + 3
        ipad2.style.display = 'block';
        airpods2.style.display = 'block';
        macbook2.style.display = 'block';
        }
        totalPrice = totalPrice + 399;
        priceCheck();
}
if (iphone3InCart === 'true') {
    iphone3Quantity = iphone3Quantity + 1;
    updateRecommendations();
    cartItem3.style.display = 'flex';
    if (recommendationCounter === 0) {
        recommendationCounter = recommendationCounter + 3
        ipad3.style.display = 'block';
        airpods3.style.display = 'block';
        macbook3.style.display = 'block';
        }
        totalPrice = totalPrice + 399;
        priceCheck();
}

if (ipad1InCart === 'true') {
    ipad1Quantity = ipad1Quantity + 1;
    updateRecommendations();
    cartItem4.style.display = 'flex';
    if (recommendationCounter === 0) {
        recommendationCounter = recommendationCounter + 3
        iphone1.style.display = 'block';
        airpods1.style.display = 'block';
        macbook1.style.display = 'block';
        }
        totalPrice = totalPrice + 399;
    priceCheck();
}
if (ipad2InCart === 'true') {
    ipad2Quantity = ipad2Quantity + 1;
    updateRecommendations();
    cartItem5.style.display = 'flex';
    if (recommendationCounter === 0) {
        recommendationCounter = recommendationCounter + 3
        iphone2.style.display = 'block';
        airpods2.style.display = 'block';
        macbook2.style.display = 'block';
        }
        totalPrice = totalPrice + 399;
        priceCheck();
}
if (ipad3InCart === 'true') {
    ipad3Quantity = ipad3Quantity + 1;
    updateRecommendations();
    cartItem6.style.display = 'flex';
    if (recommendationCounter === 0) {
        recommendationCounter = recommendationCounter + 3
        iphone3.style.display = 'block';
        airpods3.style.display = 'block';
        macbook3.style.display = 'block';
        }
        totalPrice = totalPrice + 399;
    priceCheck();
}

if (airpods1InCart === 'true') {
    airpods1Quantity = airpods1Quantity + 1;
    updateRecommendations();
    cartItem7.style.display = 'flex';
    if (recommendationCounter === 0) {
        recommendationCounter = recommendationCounter + 3
        ipad1.style.display = 'block';
        iphone1.style.display = 'block';
        macbook1.style.display = 'block';
        }
        totalPrice = totalPrice + 199;
    priceCheck();
}
if (airpods2InCart === 'true') {
    airpods2Quantity = airpods2Quantity + 1;
    updateRecommendations();
    cartItem8.style.display = 'flex';
    if (recommendationCounter === 0) {
        recommendationCounter = recommendationCounter + 3
        ipad2.style.display = 'block';
        iphone2.style.display = 'block';
        macbook2.style.display = 'block';
        }
        totalPrice = totalPrice + 199;
    priceCheck();
}
if (airpods3InCart === 'true') {
    airpods3Quantity = airpods3Quantity + 1;
    updateRecommendations();
    cartItem9.style.display = 'flex';
    if (recommendationCounter === 0) {
        recommendationCounter = recommendationCounter + 3
        ipad3.style.display = 'block';
        iphone3.style.display = 'block';
        macbook3.style.display = 'block';
        }
        totalPrice = totalPrice + 199;
    priceCheck();
}

if (macbook1InCart === 'true') {
    macbook1Quantity = macbook1Quantity + 1;
    updateRecommendations();
    cartItem10.style.display = 'flex';
    if (recommendationCounter === 0) {
        recommendationCounter = recommendationCounter + 3
        ipad1.style.display = 'block';
        iphone1.style.display = 'block';
        airpods1.style.display = 'block';
        }
        totalPrice = totalPrice + 899;
    priceCheck();
}
if (macbook2InCart === 'true') {
    macbook2Quantity = macbook2Quantity + 1;
    updateRecommendations();
    cartItem11.style.display = 'flex';
    if (recommendationCounter === 0) {
        recommendationCounter = recommendationCounter + 3
        ipad2.style.display = 'block';
        iphone2.style.display = 'block';
        airpods2.style.display = 'block';
        }
        totalPrice = totalPrice + 899;
    priceCheck();
}
if (macbook3InCart === 'true') {
    macbook3Quantity = macbook3Quantity + 1;
    updateRecommendations();
    cartItem12.style.display = 'flex';
    if (recommendationCounter === 0) {
        recommendationCounter = recommendationCounter + 3
        ipad3.style.display = 'block';
        iphone3.style.display = 'block';
        airpods3.style.display = 'block';
        }
        totalPrice = totalPrice + 899;
    priceCheck();
}
}


// -------------------------------------------
//             main
// -------------------------------------------

// on page load: clears all cart items and recommendations, then adds the ones that should be added, then runs updatePage
clearAll();
cartCheck();
updatePage();

// -------------------------------------------
//             eventlisteners
// -------------------------------------------

// if the submit button is clicked, the cardinfo is cleared and the order confirmation is updated and shown
submitCardInformation.addEventListener('click',function() {
    clearCard();
    updateOrderConfirmation();
    orderConfirmation.style.display = 'block';
    window.sessionStorage.clear();
})

// if any plus or minus is clicked, the quantity of the relevant cart item is updated 
plus1.addEventListener('click',function() {
    iphone1Quantity = iphone1Quantity + 1;
    totalPrice = totalPrice + 399;
    checkQuantity();
})
plus2.addEventListener('click',function() {
    iphone2Quantity = iphone2Quantity + 1;
    totalPrice = totalPrice + 399;
    checkQuantity();
})
plus3.addEventListener('click',function() {
    iphone3Quantity = iphone3Quantity + 1;
    totalPrice = totalPrice + 399;
    checkQuantity();
})
plus4.addEventListener('click',function() {
    ipad1Quantity = ipad1Quantity + 1;
    totalPrice = totalPrice + 399;
    checkQuantity();
})
plus5.addEventListener('click',function() {
    ipad2Quantity = ipad2Quantity + 1;
    totalPrice = totalPrice + 399;
    checkQuantity();
})
plus6.addEventListener('click',function() {
    ipad3Quantity = ipad3Quantity + 1;
    totalPrice = totalPrice + 399;
    checkQuantity();
})
plus7.addEventListener('click',function() {
    airpods1Quantity = airpods1Quantity + 1;
    totalPrice = totalPrice + 199;
    checkQuantity();
})
plus8.addEventListener('click',function() {
    airpods2Quantity = airpods2Quantity + 1;
    totalPrice = totalPrice + 199;
    checkQuantity();
})
plus9.addEventListener('click',function() {
    airpods3Quantity = airpods3Quantity + 1;
    totalPrice = totalPrice + 199;
    checkQuantity();
})
plus10.addEventListener('click',function() {
    macbook1Quantity = macbook1Quantity + 1;
    totalPrice = totalPrice + 899;
    checkQuantity();
})
plus11.addEventListener('click',function() {
    macbook2Quantity = macbook2Quantity + 1;
    totalPrice = totalPrice + 899;
    checkQuantity();
})
plus12.addEventListener('click',function() {
    macbook3Quantity = macbook3Quantity + 1;
    totalPrice = totalPrice + 899;
    checkQuantity();
})

minus1.addEventListener('click',function() {
    iphone1Quantity = iphone1Quantity - 1;
    totalPrice = totalPrice - 399;
    if (iphone1Quantity <= 0){
        totalPrice = totalPrice + 399;
        removeIphone1();
    }
    checkQuantity();
})
minus2.addEventListener('click',function() {
    iphone2Quantity = iphone2Quantity - 1;
    totalPrice = totalPrice - 399;
    if (iphone2Quantity <= 0){
        totalPrice = totalPrice + 399;
        removeIphone2();
    }
    checkQuantity();
})
minus3.addEventListener('click',function() {
    iphone3Quantity = iphone3Quantity - 1;
    totalPrice = totalPrice - 399;
    if (iphone3Quantity <= 0){
        totalPrice = totalPrice + 399;
        removeIphone3();
    }
    checkQuantity();
})
minus4.addEventListener('click',function() {
    ipad1Quantity = ipad1Quantity - 1;
    totalPrice = totalPrice - 399;
    if (ipad1Quantity <= 0){
        totalPrice = totalPrice + 399;
        removeIpad1();
    }
    checkQuantity();
})
minus5.addEventListener('click',function() {
    ipad2Quantity = ipad2Quantity - 1;
    totalPrice = totalPrice - 399;
    if (ipad2Quantity <= 0){
        totalPrice = totalPrice + 399;
        removeIpad2();
    }
    checkQuantity();
})
minus6.addEventListener('click',function() {
    ipad3Quantity = ipad3Quantity - 1;
    totalPrice = totalPrice - 399;
    if (ipad3Quantity <= 0){
        totalPrice = totalPrice + 399;
        removeIpad3();
    }
    checkQuantity();
})
minus7.addEventListener('click',function() {
    airpods1Quantity = airpods1Quantity - 1;
    totalPrice = totalPrice - 199;
    if (airpods1Quantity <= 0){
        totalPrice = totalPrice + 199;
        removeAirpods1();
    }
    checkQuantity();
})
minus8.addEventListener('click',function() {
    airpods2Quantity = airpods2Quantity - 1;
    totalPrice = totalPrice - 199;
    if (airpods2Quantity <= 0){
        totalPrice = totalPrice + 199;
        removeAirpods2();
    }
    checkQuantity();
})
minus9.addEventListener('click',function() {
    airpods3Quantity = airpods3Quantity - 1;
    totalPrice = totalPrice - 199;
    if (airpods3Quantity <= 0){
        totalPrice = totalPrice + 199;
        removeAirpods3();
    }
    checkQuantity();
})
minus10.addEventListener('click',function() {
    macbook1Quantity = macbook1Quantity - 1;
    totalPrice = totalPrice - 899;
    if (macbook1Quantity <= 0){
        totalPrice = totalPrice + 899;
        removeMacbook1();
    }
    checkQuantity();
})
minus11.addEventListener('click',function() {
    macbook2Quantity = macbook2Quantity - 1;
    totalPrice = totalPrice - 899;
    if (macbook2Quantity <= 0){
        totalPrice = totalPrice + 899;
        removeMacbook2();
    }
    checkQuantity();
})
minus12.addEventListener('click',function() {
    macbook3Quantity = macbook3Quantity - 1;
    totalPrice = totalPrice - 899;
    if (macbook3Quantity <= 0){
        totalPrice = totalPrice + 899;
        removeMacbook3();
    }
    checkQuantity();
})

// remove cart items on trashcan click

removeCartItem1.addEventListener('click', function () {
    removeIphone1();
})
removeCartItem2.addEventListener('click', function () {
    removeIphone2();
})
removeCartItem3.addEventListener('click', function () {
    removeIphone3();
})
removeCartItem4.addEventListener('click', function () {
    removeIpad1();
})
removeCartItem5.addEventListener('click', function () {
    removeIpad2();
})
removeCartItem6.addEventListener('click', function () {
    removeIpad3();
})
removeCartItem7.addEventListener('click', function () {
    removeAirpods1();
})
removeCartItem8.addEventListener('click', function () {
    removeAirpods2();
})
removeCartItem9.addEventListener('click', function () {
    removeAirpods3();
})
removeCartItem10.addEventListener('click', function () {
    removeMacbook1();
})
removeCartItem11.addEventListener('click', function () {
    removeMacbook2();
})
removeCartItem12.addEventListener('click', function () {
    removeMacbook3();
})