// -------------------------------------------
//             constant variables
// -------------------------------------------

// const variables for topbar links
const homeIphone = document.getElementById('homeIphone');
const homeIpad = document.getElementById('homeIpad');
const homeAirpods = document.getElementById('homeAirpods');
const homeMacbook = document.getElementById('homeMacbook');

// -------------------------------------------
//             main
// -------------------------------------------

// home categories filtering functionality 
// on click, add the relevant filter
homeIphone.addEventListener('click', function () {
    window.sessionStorage.getItem('iphoneFilterStorage');
    window.sessionStorage.setItem('iphoneFilterStorage', 'true');
})
homeIpad.addEventListener('click', function () {
    window.sessionStorage.getItem('ipadFilterStorage');
    window.sessionStorage.setItem('ipadFilterStorage', 'true');
})
homeAirpods.addEventListener('click', function () {
    window.sessionStorage.getItem('airpodFilterStorage');
    window.sessionStorage.setItem('airpodFilterStorage', 'true');
})
homeMacbook.addEventListener('click', function () {
    window.sessionStorage.getItem('macbookFilterStorage');
    window.sessionStorage.setItem('macbookFilterStorage', 'true')
})