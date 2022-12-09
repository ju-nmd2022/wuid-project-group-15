// -------------------------------------------
//             constant variables
// -------------------------------------------

// const variables for topbar links
const topText1 = document.getElementById('topText1');
const topText2 = document.getElementById('topText2');
const topText3 = document.getElementById('topText3');
const topText4 = document.getElementById('topText4');


// -------------------------------------------
//             main
// -------------------------------------------

// topbar filtering functionality 
// on link click, change relevant filterStorage to true
topText1.addEventListener('click', function () {
    window.sessionStorage.getItem('iphoneFilterStorage');
    window.sessionStorage.setItem('iphoneFilterStorage', 'true');
})
topText2.addEventListener('click', function () {
    window.sessionStorage.getItem('ipadFilterStorage');
    window.sessionStorage.setItem('ipadFilterStorage', 'true');
})
topText3.addEventListener('click', function () {
    window.sessionStorage.getItem('airpodFilterStorage');
    window.sessionStorage.setItem('airpodFilterStorage', 'true');
})
topText4.addEventListener('click', function () {
    window.sessionStorage.getItem('macbookFilterStorage');
    window.sessionStorage.setItem('macbookFilterStorage', 'true')
})