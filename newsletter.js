// Help from this video: https://www.youtube.com/watch?v=5FNNaYzb4GE&ab_channel=TheWebShala
const popup = document.querySelector(".newsletter-form");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close-button");

window.addEventListener("load", function(){

    showPopup();

})

// will make the newsletter pop upp after 5 seconds
function showPopup(){
    const timeLimit = 5 // seconds;
    let i = 0;
    const timer = setInterval(function(){
        i++;
        if (i == timeLimit){
            clearInterval(timer);
            popup.classList.add("show");
            overlay.classList.add("show");

        }
    },1000);
}

// The "no thanks" button
close.addEventListener("click", function(){
    popup.classList.remove("show");
    overlay.classList.remove("show");

}
)


// Checks for valid email
let email = document.querySelector("#email")
const subscribe = document.querySelector(".subscribe-button")

email.oninput = () => {
    if (email.value.includes("@") && email.value.includes(".com")){
    email.style.border="3px solid #00ff00";
    }     
    else {
    email.style.border="3px solid #ff0000";
    }
}



// the subscribe button // valid or not valid
subscribe.addEventListener("click", function(){
    if (email.value.includes("@") && email.value.includes(".com")){
        popup.classList.remove("show");
        overlay.classList.remove("show");
        alert ("Thank you for subscribing to our newsletter")
    }
    else {
        email.style.border="3px solid #ff0000";
        alert ("Plase enter a valid email")
    }
}
)