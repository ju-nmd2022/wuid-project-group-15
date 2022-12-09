// -------------------------------------------
//             constant variables
// -------------------------------------------

// const vars for filter dropdowns
const filterOptionRestrictor1 = document.getElementById('filterOptionRestrictor1');
const filterOptionDropdown1 = document.getElementById('filterOptionDropdown1');
const filterOptionRestrictor2 = document.getElementById('filterOptionRestrictor2');
const filterOptionDropdown2 = document.getElementById('filterOptionDropdown2');
const filterOptionRestrictor3 = document.getElementById('filterOptionRestrictor3');
const filterOptionDropdown3 = document.getElementById('filterOptionDropdown3');
const filterOptionRestrictor4 = document.getElementById('filterOptionRestrictor4');
const filterOptionDropdown4 = document.getElementById('filterOptionDropdown4');

// const vars for filter button
const filterButtonRestrictor = document.getElementById('filterButtonRestrictor');
const filterButton = document.getElementById("filterButton");
const filterButtonSelected = document.getElementById("filterButtonSelected");
const filterSortList = document.getElementById("filterSortList");
const filterOptionHeadline = document.getElementById("filterOptionHeadline");

// filter links for desktop
const iphoneFilter = document.getElementById('iphoneFilter');
const ipadFilter = document.getElementById('ipadFilter');
const airpodsFilter = document.getElementById('airpodsFilter');
const macbookFilter = document.getElementById('macbookFilter');
const standardFilter = document.getElementById('standardFilter');
const sleeveFilter = document.getElementById('sleeveFilter');
const blackFilter = document.getElementById('blackFilter');
const brownFilter = document.getElementById('brownFilter');
const blueFilter = document.getElementById('blueFilter');
const plasticFilter = document.getElementById('plasticFilter');
const leatherFilter = document.getElementById('leatherFilter');

// filter links for mobile
const iphoneFilterMobile = document.getElementById('iphoneFilterMobile');
const ipadFilterMobile = document.getElementById('ipadFilterMobile');
const airpodsFilterMobile = document.getElementById('airpodsFilterMobile');
const macbookFilterMobile = document.getElementById('macbookFilterMobile');
const standardFilterMobile = document.getElementById('standardFilterMobile');
const sleeveFilterMobile = document.getElementById('sleeveFilterMobile');
const blackFilterMobile = document.getElementById('blackFilterMobile');
const brownFilterMobile = document.getElementById('brownFilterMobile');
const blueFilterMobile = document.getElementById('blueFilterMobile');
const plasticFilterMobile = document.getElementById('plasticFilterMobile');
const leatherFilterMobile = document.getElementById('leatherFilterMobile');

// -------------------------------------------
//             let variables
// -------------------------------------------

// booleans to determine if a certain item is filtered
let iphonesFiltered = false;
let ipadsFiltered = false;
let airpodsFiltered = false;
let macbooksFiltered = false;
let standardFiltered = false;
let sleeveFiltered = false;
let blackFiltered = false;
let brownFiltered = false;
let blueFiltered = false;
let plasticFiltered = false;
let leatherFiltered = false;

// counter to determine number of applied filters
let numberOfFilters = 0;

// sessionstorage variables used to determine what filters are applied
let iphoneFilterStorage = window.sessionStorage.getItem('iphoneFilterStorage');
let ipadFilterStorage = window.sessionStorage.getItem('ipadFilterStorage');
let airpodFilterStorage = window.sessionStorage.getItem('airpodFilterStorage');
let macbookFilterStorage = window.sessionStorage.getItem('macbookFilterStorage');

// -------------------------------------------
//               functions
// -------------------------------------------

// change headline to either showing: filtered or showing: all products
function changeHeadline() {
    if (numberOfFilters >= 1) {
    filterOptionHeadline.innerText = "Showing: Filtered (" + numberOfFilters + ")";
    }
    else {
    filterOptionHeadline.innerText = "Showing: All Products";
    }
}

// functions to filter out certain products based on filter
function removeIphones() {
    iphone1.style.display = 'none';
    iphone2.style.display = 'none';
    iphone3.style.display = 'none';
}
function addIphones() {
    iphone1.style.display = 'block';
    iphone2.style.display = 'block';
    iphone3.style.display = 'block';
}
function removeIpads() {
    ipad1.style.display = 'none';
    ipad2.style.display = 'none';
    ipad3.style.display = 'none';
}
function addIpads() {
    ipad1.style.display = 'block';
    ipad2.style.display = 'block';
    ipad3.style.display = 'block';
}
function removeAirpods() {
    airpods1.style.display = 'none';
    airpods2.style.display = 'none';
    airpods3.style.display = 'none';
}
function addAirpods() {
    airpods1.style.display = 'block';
    airpods2.style.display = 'block';
    airpods3.style.display = 'block';
}
function removeMacbooks() {
    macbook1.style.display = 'none';
    macbook2.style.display = 'none';
    macbook3.style.display = 'none';
}
function addMacbooks() {
    macbook1.style.display = 'block';
    macbook2.style.display = 'block';
    macbook3.style.display = 'block';
}
function removeStandard() {
    removeIphones();
    removeIpads();
    removeAirpods();
}
function addStandard() {
    addIphones();
    addIpads();
    addAirpods();
}
function removeSleeve() {
    removeMacbooks();
}
function addSleeve() {
    addMacbooks();
}
function removeBlack() {
    iphone1.style.display = 'none';
    ipad1.style.display = 'none';
    airpods1.style.display = 'none';
    macbook1.style.display = 'none';
}
function addBlack() {
    iphone1.style.display = 'block';
    ipad1.style.display = 'block';
    airpods1.style.display = 'block';
    macbook1.style.display = 'block';
}
function removeBrown() {
    iphone2.style.display = 'none';
    ipad2.style.display = 'none';
    airpods2.style.display = 'none';
    macbook2.style.display = 'none';
}
function addBrown() {
    iphone2.style.display = 'block';
    ipad2.style.display = 'block';
    airpods2.style.display = 'block';
    macbook2.style.display = 'block';
}
function removeBlue() {
    iphone3.style.display = 'none';
    ipad3.style.display = 'none';
    airpods3.style.display = 'none';
    macbook3.style.display = 'none';
}
function addBlue() {
    iphone3.style.display = 'block';
    ipad3.style.display = 'block';
    airpods3.style.display = 'block';
    macbook3.style.display = 'block';
}
function removePlastic() {
    removeIphones();
    removeIpads();
    removeAirpods();
}
function addPlastic() {
    addIphones();
    addIpads();
    addAirpods();
}
function removeLeather() {
    removeMacbooks();
}
function addLeather() {
    addMacbooks();
}

// checks if the product page is empty and, in that case, adds a message
function checkEmpty() {
    if (standardFiltered === true && macbooksFiltered === true) {
    notAdded.style.display = 'block';
    }
    
    else if (sleeveFiltered === true && iphonesFiltered === true) {
    notAdded.style.display = 'block';
    }
    else if (sleeveFiltered === true && ipadsFiltered === true) {
    notAdded.style.display = 'block';
    }
    else if (sleeveFiltered === true && airpodsFiltered === true) {
    notAdded.style.display = 'block';
    }

    else if (plasticFiltered === true && macbooksFiltered === true) {
    notAdded.style.display = 'block';
    }

    else if (leatherFiltered === true && iphonesFiltered === true) {
    notAdded.style.display = 'block';
    }
    else if (leatherFiltered === true && ipadsFiltered === true) {
    notAdded.style.display = 'block';
    }
    else if (leatherFiltered === true && airpodsFiltered === true) {
    notAdded.style.display = 'block';
    }
    else {
    notAdded.style.display = 'none';
    }
}

// function to update filter settings
function filterCheck() {
    iphonesFiltered = iphonesFiltered;
    ipadsFiltered = ipadsFiltered;
    airpodsFiltered = airpodsFiltered;
    macbooksFiltered = macbooksFiltered;
    standardFiltered = standardFiltered;
    sleeveFiltered = sleeveFiltered;
    blackFiltered = blackFiltered;
    brownFiltered = brownFiltered;
    blueFiltered = blueFiltered;
    plasticFiltered = plasticFiltered;
    leatherFiltered = leatherFiltered;
    numberOfFilters = numberOfFilters;
    checkEmpty();
    changeHeadline();
}

// function that checks for other filters whenever a filter is applied
function applyOtherFilters() {
    if (iphonesFiltered === true) {
    removeIpads();
    removeAirpods();
    removeMacbooks();
    }
    if (ipadsFiltered === true) {
    removeIphones();
    removeAirpods();
    removeMacbooks();
    }
    if (airpodsFiltered === true) {
    removeIphones();
    removeIpads();
    removeMacbooks();
    }
    if (macbooksFiltered === true) {
    removeIphones();
    removeIpads();
    removeAirpods();
    }
    if (blackFiltered === true) {
    removeBrown();
    removeBlue();
    }
    if (brownFiltered === true) {
    removeBlack();
    removeBlue();
    }
    if (blueFiltered === true) {
    removeBlack();
    removeBrown();
    }

    if (standardFiltered === true) {
    removeSleeve();
    }
    if (sleeveFiltered === true) {
    removeStandard();
    }

    if (plasticFiltered === true) {
    removeLeather();
    }
    if (leatherFiltered === true) {
    removePlastic();
    } 
}

// edits sessionstorage to make a filter 'true' and applies it 
function filterIphones() {
    window.sessionStorage.getItem('iphoneFilterStorage');
    window.sessionStorage.setItem('iphoneFilterStorage', 'true');
    if (iphonesFiltered === false) {
    numberOfFilters = numberOfFilters + 1;
    }   
    iphonesFiltered = true;
    filterCheck();

    removeIpads();
    removeAirpods();
    removeMacbooks();

    applyOtherFilters();
    
    iphoneFilter.style.fontWeight = 'bold';
}
function filterIpads() {
    window.sessionStorage.getItem('ipadFilterStorage');
    window.sessionStorage.setItem('ipadFilterStorage', 'true');
    if (ipadsFiltered === false) {
    numberOfFilters = numberOfFilters + 1;
    } 
    ipadsFiltered = true;
    filterCheck();
    // remove everything except ipads
    removeIphones();
    removeAirpods();
    removeMacbooks();

    applyOtherFilters();
    ipadFilter.style.fontWeight = 'bold';
}
function filterAirpods() {
    window.sessionStorage.getItem('airpodFilterStorage');
    window.sessionStorage.setItem('airpodFilterStorage', 'true');
    if (airpodsFiltered === false) {
    numberOfFilters = numberOfFilters + 1;
    } 
    airpodsFiltered = true;
    filterCheck();
    // remove everything except airpods
    addIphones();
    addIpads();
    addMacbooks();

    applyOtherFilters();
    airpodsFilter.style.fontWeight = 'bold';
}
function filterMacbooks() {
    window.sessionStorage.getItem('macbookFilterStorage');
    window.sessionStorage.setItem('macbookFilterStorage', 'true');
    if (macbooksFiltered === false) {
    numberOfFilters = numberOfFilters + 1;
    } 
    macbooksFiltered = true;
    filterCheck();
    // remove everything besides macbooks
    removeIphones();
    removeIpads();
    removeAirpods();

    applyOtherFilters();
    macbookFilter.style.fontWeight = 'bold';
}

// checks sessionstorage and filtered boolean to see if a filter should be applied
function iphoneFilterCheck() {
    window.sessionStorage.getItem('iphoneFilterStorage');
    if (iphoneFilterStorage === 'true') {
        filterIphones();
        window.sessionStorage.setItem('iphoneFilterStorage', 'false');
    }
}
function ipadFilterCheck() {
    window.sessionStorage.getItem('ipadFilterStorage');
    if (ipadFilterStorage === 'true') {
        filterIpads();
        window.sessionStorage.setItem('ipadFilterStorage', 'false');
    }
}
function airpodFilterCheck() {
    window.sessionStorage.getItem('airpodFilterStorage');
    if (airpodFilterStorage === 'true') {
        filterAirpods();
        window.sessionStorage.setItem('airpodFilterStorage', 'false');
    }
}
function macbookFilterCheck() {
    window.sessionStorage.getItem('macbookFilterStorage');
    if (macbookFilterStorage === 'true') {
        filterMacbooks();
        window.sessionStorage.setItem('macbookFilterStorage', 'false');
    }
}

// -------------------------------------------
//               main
// -------------------------------------------

// check filters on page load
iphoneFilterCheck();
ipadFilterCheck();
airpodFilterCheck();
macbookFilterCheck();

// hovering over a filter option adds a dropdown menu

// Device
filterOptionRestrictor1.addEventListener('mouseover', function () {
    filterOptionRestrictor1.style.overflow = 'visible';
    filterOptionRestrictor1.style.boxShadow = 'none';
})
filterOptionRestrictor1.addEventListener('mouseout', function () {
    filterOptionRestrictor1.style.overflow = 'hidden';
})

// Type
filterOptionRestrictor2.addEventListener('mouseover', function () {
    filterOptionRestrictor2.style.overflow = 'visible';
    filterOptionRestrictor2.style.boxShadow = 'none';
})
filterOptionRestrictor2.addEventListener('mouseout', function () {
    filterOptionRestrictor2.style.overflow = 'hidden';
})

// Color
filterOptionRestrictor3.addEventListener('mouseover', function () {
    filterOptionRestrictor3.style.overflow = 'visible';
    filterOptionRestrictor3.style.boxShadow = 'none';
})
filterOptionRestrictor3.addEventListener('mouseout', function () {
    filterOptionRestrictor3.style.overflow = 'hidden';
})

// Material
filterOptionRestrictor4.addEventListener('mouseover', function () {
    filterOptionRestrictor4.style.overflow = 'visible';
    filterOptionRestrictor4.style.boxShadow = 'none';
})
filterOptionRestrictor4.addEventListener('mouseout', function () {
    filterOptionRestrictor4.style.overflow = 'hidden';
})


// clicking the smaller filterbutton changes the icon
filterButton.addEventListener('click', function () {
    filterButton.style.display = "none";
    filterButtonSelected.style.display = "block";
    filterSortList.style.display = "block";
    filterButtonRestrictor.style.overflow = 'visible';
})
filterButtonSelected.addEventListener('click', function () {
    filterButton.style.display = "block";
    filterButtonSelected.style.display = "none";
    filterSortList.style.display = "none";
})



// filter links for larger screens 
// iphone
iphoneFilter.addEventListener('click', function () {
    filterIphones();
})
iphoneFilter.addEventListener('dblclick', function () {
    if (iphonesFiltered === true) {
    numberOfFilters = numberOfFilters - 1;
    }
    iphonesFiltered = false;
    filterCheck();
    // add back the removed products
    addIpads();
    addAirpods();
    addMacbooks();

    applyOtherFilters();
    window.sessionStorage.getItem('iphoneFilterStorage');
    window.sessionStorage.setItem('iphoneFilterStorage', 'false');
    iphoneFilter.style.fontWeight = 'normal';
})

// ipad
ipadFilter.addEventListener('click', function () {
    filterIpads();
})
ipadFilter.addEventListener('dblclick', function () {
    if (ipadsFiltered === true) {
    numberOfFilters = numberOfFilters - 1;
    }
    ipadsFiltered = false;
    filterCheck();
    // add back the removed products
    addIphones();
    addAirpods();
    addMacbooks();

    applyOtherFilters();
    window.sessionStorage.getItem('ipadFilterStorage');
        window.sessionStorage.setItem('ipadFilterStorage', 'false');
    ipadFilter.style.fontWeight = 'normal';
})

// airpods
airpodsFilter.addEventListener('click', function () {
    filterAirpods();
})
airpodsFilter.addEventListener('dblclick', function () {
    if (airpodsFiltered === true) {
    numberOfFilters = numberOfFilters - 1;
    }
    airpodsFiltered = false;
    filterCheck();
    // add back the removed products
    addIphones();
    addIpads();
    addMacbooks();

    applyOtherFilters();
    window.sessionStorage.getItem('airpodFilterStorage');
        window.sessionStorage.setItem('airpodFilterStorage', 'false');
    airpodsFilter.style.fontWeight = 'normal';
})

// macbook
macbookFilter.addEventListener('click', function () {
    filterMacbooks();
})
macbookFilter.addEventListener('dblclick', function () {
    if (macbooksFiltered === true) {
    numberOfFilters = numberOfFilters - 1;
    }
    macbooksFiltered = false;
    filterCheck();
    // add back the removed products
    addIphones();
    addIpads();
    addAirpods();

    applyOtherFilters();
    window.sessionStorage.getItem('macbookFilterStorage');
        window.sessionStorage.setItem('macbookFilterStorage', 'false');
    macbookFilter.style.fontWeight = 'normal';
})

// type

// standard
standardFilter.addEventListener('click', function () {
    if (standardFiltered === false) {
    numberOfFilters = numberOfFilters + 1;
    } 
    standardFiltered = true;
    filterCheck();
    removeSleeve();

    applyOtherFilters();
    standardFilter.style.fontWeight = 'bold';
})
standardFilter.addEventListener('dblclick', function () {
    numberOfFilters = numberOfFilters - 1;
    standardFiltered = false;
    filterCheck();
    addSleeve();

    applyOtherFilters();
    standardFilter.style.fontWeight = 'normal';
})

// sleeve
sleeveFilter.addEventListener('click', function () {
    if (sleeveFiltered === false) {
    numberOfFilters = numberOfFilters + 1;
    } 
    sleeveFiltered = true;
    filterCheck();
    removeStandard();   
    
    applyOtherFilters();
    sleeveFilter.style.fontWeight = 'bold';
})
sleeveFilter.addEventListener('dblclick', function () {
    numberOfFilters = numberOfFilters - 1;
    sleeveFiltered = false;
    filterCheck();
    addStandard();

    applyOtherFilters();
    sleeveFilter.style.fontWeight = 'normal';
})

// color

// black
blackFilter.addEventListener('click', function () {
    if (blackFiltered === false) {
    numberOfFilters = numberOfFilters + 1;
    } 
    blackFiltered = true;
    filterCheck();
    removeBrown();
    removeBlue();

    applyOtherFilters();
    blackFilter.style.fontWeight = 'bold';
})
blackFilter.addEventListener('dblclick', function () {
    numberOfFilters = numberOfFilters - 1;
    blackFiltered = false;
    filterCheck();
    addBrown();
    addBlue();
    
    applyOtherFilters();
    blackFilter.style.fontWeight = 'normal';
})

// brown
brownFilter.addEventListener('click', function () {
    if (brownFiltered === false) {
    numberOfFilters = numberOfFilters + 1;
    } 
    brownFiltered = true;
    filterCheck();
    removeBlack();
    removeBlue();

    applyOtherFilters();
    brownFilter.style.fontWeight = 'bold';
})
brownFilter.addEventListener('dblclick', function () {
    numberOfFilters = numberOfFilters - 1;
    brownFiltered = false;
    filterCheck();
    addBlack();
    addBlue();
    
    applyOtherFilters();
    brownFilter.style.fontWeight = 'normal';
})

// blue
blueFilter.addEventListener('click', function () {
    if (blueFiltered === false) {
    numberOfFilters = numberOfFilters + 1;
    } 
    blueFiltered = true;
    filterCheck();
    removeBrown();
    removeBlack();

    applyOtherFilters();
    blueFilter.style.fontWeight = 'bold';
})
blueFilter.addEventListener('dblclick', function () {
    numberOfFilters = numberOfFilters - 1;
    blueFiltered = false;
    filterCheck();
    addBrown();
    addBlack();
    
    applyOtherFilters();
    blueFilter.style.fontWeight = 'normal';
})

// material

// plastic
plasticFilter.addEventListener('click', function () {
    if (plasticFiltered === false) {
    numberOfFilters = numberOfFilters + 1;
    } 
    plasticFiltered = true;
    filterCheck();
    removeLeather();

    applyOtherFilters();
    plasticFilter.style.fontWeight = 'bold';
})
plasticFilter.addEventListener('dblclick', function () {
    numberOfFilters = numberOfFilters - 1;
    plasticFiltered = false;
    filterCheck();
    addLeather();
    
    applyOtherFilters();
    plasticFilter.style.fontWeight = 'normal';
})


// leather
leatherFilter.addEventListener('click', function () {
    if (leatherFiltered === false) {
    numberOfFilters = numberOfFilters + 1;
    } 
    leatherFiltered = true;
    filterCheck();
    removePlastic();

    applyOtherFilters();
    leatherFilter.style.fontWeight = 'bold';
})
leatherFilter.addEventListener('dblclick', function () {
    numberOfFilters = numberOfFilters - 1;
    leatherFiltered = false;
    filterCheck();
    addPlastic();
    
    applyOtherFilters();
    leatherFilter.style.fontWeight = 'normal';
})



// filter links for smaller screen
// iphone
iphoneFilterMobile.addEventListener('click', function () {
    filterIphones();
})
iphoneFilterMobile.addEventListener('dblclick', function () {
    if (iphonesFiltered === true) {
    numberOfFilters = numberOfFilters - 1;
    }
    iphonesFiltered = false;
    filterCheck();
    // add back the removed products
    addIpads();
    addAirpods();
    addMacbooks();

    applyOtherFilters();
    window.sessionStorage.getItem('iphoneFilterStorage');
        window.sessionStorage.setItem('iphoneFilterStorage', 'false');
})

// ipad
ipadFilterMobile.addEventListener('click', function () {
    filterIpads();
})
ipadFilterMobile.addEventListener('dblclick', function () {
    if (ipadsFiltered === true) {
    numberOfFilters = numberOfFilters - 1;
    }
    ipadsFiltered = false;
    filterCheck();
    // add back the removed products
    addIphones();
    addAirpods();
    addMacbooks();

    applyOtherFilters();
    window.sessionStorage.getItem('ipadFilterStorage');
        window.sessionStorage.setItem('ipadFilterStorage', 'false');
})

// airpods
airpodsFilterMobile.addEventListener('click', function () {
    filterAirpods();
})
airpodsFilterMobile.addEventListener('dblclick', function () {
    if (airpodsFiltered === true) {
    numberOfFilters = numberOfFilters - 1;
    }
    airpodsFiltered = false;
    filterCheck();
    // add back the removed products
    addIphones();
    addIpads();
    addMacbooks();

    applyOtherFilters();
    window.sessionStorage.getItem('airpodFilterStorage');
        window.sessionStorage.setItem('airpodFilterStorage', 'false');
})

// macbook
macbookFilterMobile.addEventListener('click', function () {
    filterMacbooks();
})
macbookFilterMobile.addEventListener('dblclick', function () {
    if (macbooksFiltered === true) {
    numberOfFilters = numberOfFilters - 1;
    }
    macbooksFiltered = false;
    filterCheck();
    // add back the removed products
    addIphones();
    addIpads();
    addAirpods();

    applyOtherFilters();
    window.sessionStorage.getItem('macbookFilterStorage');
        window.sessionStorage.setItem('macbookFilterStorage', 'false');
})

// type

// standard
standardFilterMobile.addEventListener('click', function () {
    if (standardFiltered === false) {
    numberOfFilters = numberOfFilters + 1;
    } 
    standardFiltered = true;
    filterCheck();
    removeSleeve();

    applyOtherFilters();
})
standardFilterMobile.addEventListener('dblclick', function () {
    numberOfFilters = numberOfFilters - 1;
    standardFiltered = false;
    filterCheck();
    addSleeve();

    applyOtherFilters();
})

// sleeve
sleeveFilterMobile.addEventListener('click', function () {
    if (sleeveFiltered === false) {
    numberOfFilters = numberOfFilters + 1;
    } 
    sleeveFiltered = true;
    filterCheck();
    removeStandard();   
    
    applyOtherFilters();
})
sleeveFilterMobile.addEventListener('dblclick', function () {
    numberOfFilters = numberOfFilters - 1;
    sleeveFiltered = false;
    filterCheck();
    addStandard();

    applyOtherFilters();
})

// color

// black
blackFilterMobile.addEventListener('click', function () {
    if (blackFiltered === false) {
    numberOfFilters = numberOfFilters + 1;
    } 
    blackFiltered = true;
    filterCheck();
    removeBrown();
    removeBlue();

    applyOtherFilters();
})
blackFilterMobile.addEventListener('dblclick', function () {
    numberOfFilters = numberOfFilters - 1;
    blackFiltered = false;
    filterCheck();
    addBrown();
    addBlue();
    
    applyOtherFilters();
})

// brown
brownFilterMobile.addEventListener('click', function () {
    if (brownFiltered === false) {
    numberOfFilters = numberOfFilters + 1;
    } 
    brownFiltered = true;
    filterCheck();
    removeBlack();
    removeBlue();

    applyOtherFilters();
})
brownFilterMobile.addEventListener('dblclick', function () {
    numberOfFilters = numberOfFilters - 1;
    brownFiltered = false;
    filterCheck();
    addBlack();
    addBlue();
    
    applyOtherFilters();
})

// blue
blueFilterMobile.addEventListener('click', function () {
    if (blueFiltered === false) {
    numberOfFilters = numberOfFilters + 1;
    } 
    blueFiltered = true;
    filterCheck();
    removeBrown();
    removeBlack();

    applyOtherFilters();
})
blueFilterMobile.addEventListener('dblclick', function () {
    numberOfFilters = numberOfFilters - 1;
    blueFiltered = false;
    filterCheck();
    addBrown();
    addBlack();
    
    applyOtherFilters();
})

// material

// plastic
plasticFilterMobile.addEventListener('click', function () {
    if (plasticFiltered === false) {
    numberOfFilters = numberOfFilters + 1;
    } 
    plasticFiltered = true;
    filterCheck();
    removeLeather();

    applyOtherFilters();
})
plasticFilterMobile.addEventListener('dblclick', function () {
    numberOfFilters = numberOfFilters - 1;
    plasticFiltered = false;
    filterCheck();
    addLeather();
    
    applyOtherFilters();
})


// leather
leatherFilterMobile.addEventListener('click', function () {
    if (leatherFiltered === false) {
    numberOfFilters = numberOfFilters + 1;
    } 
    leatherFiltered = true;
    filterCheck();
    removePlastic();

    applyOtherFilters();
})
leatherFilterMobile.addEventListener('dblclick', function () {
    numberOfFilters = numberOfFilters - 1;
    leatherFiltered = false;
    filterCheck();
    addPlastic();
    
    applyOtherFilters();
})






