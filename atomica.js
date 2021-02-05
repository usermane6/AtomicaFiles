//This is the beginning, inny the beninging. 

//Constants!
const nrgAmt = document.querySelector("#nrg-amt");
const elcAmt = document.querySelector("#elc-amt");
const prtAmt = document.querySelector("#prt-amt");
const netAmt = document.querySelector("#net-amt");

//general buttons
const nrgBtn = document.querySelector("#nrg-btn");
const elcBtn = document.querySelector("#elc-btn");
const prtBtn = document.querySelector("#prt-btn");
const netBtn = document.querySelector("#net-btn");

//buttons that buy 10
const ptrBuyTen = document.querySelector("#prt-buy-ten");
const elcBuyTen = document.querySelector("#elc-buy-ten");
const netBuyTen = document.querySelector("#net-buy-ten");

//stuff dealing with saves
const wipeSaveBtn = document.querySelector("#wipe-save");
const saveGameBtn = document.querySelector("#save");
const loadGameBtn = document.querySelector("#load");

//Variables!
var plyr = {
    //amounts
    energy: 0,
    protons: 0,
    neutrons: 0,
    electrons: 0,
    atoms: 0,

    //levels
    epc: 1,
    eps: 0,
}

var clickLvl = 1;

function energyClick() {
    var clickStage = "stageOne";
    //needlessly complicated timer code
    function clickTimer () {
        switch(clickLvl) {
            case 2:
                clickLvl = 1;
                nrgBtn.classList.remove("stageTwo");
                clickStage = "stageOne";
                break;
            case 3: 
                clickLvl = 2;
                nrgBtn.classList.remove("stageThree");
                clickStage = "stageTwo";
                break;
            case 4: 
                clickLvl = 3;
                nrgBtn.classList.remove("stageFour");
                clickStage = "stageThree";
                break;
            case 5: 
                clickLvl = 4;
                nrgBtn.classList.remove("stageFive");
                clickStage = "stageFour";
        }
        nrgBtn.classList.add(clickStage);
    }
    //it works, dont mess with it
    if (clickLvl == 1) {
        plyr.energy = (plyr.energy * 10 + plyr.epc * 10) / 10;
        clickLvl = 5;
        nrgBtn.classList.replace("stageOne", "stageFive")
        setTimeout(clickTimer, 1000);
        setTimeout(clickTimer, 2000);
        setTimeout(clickTimer, 3000);
        setTimeout(clickTimer, 4000);
    }
}

function protonClick() {
    if (plyr.energy >= 10) {
        plyr.energy = (plyr.energy * 10 - 100) / 10;
        plyr.protons ++;
        plyr.epc ++;
    }    
}

function electronClick() {
    if (plyr.energy >= 100)  {
        plyr.energy = (plyr.energy * 10 - 1000) / 10;
        plyr.electrons ++;
        plyr.eps = (plyr.eps * 10 + 1) / 10;
    }
}

function neutronClick() {
    if (plyr.energy >= 1000) {
        plyr.energy = (plyr.energy * 10 - 10000) / 10;
        plyr.neutrons ++;
    }
}

function buyTenElc() {
    if (plyr.energy >= 1000) {
        for (let i = 0; i <= 9; i++) {
            electronClick();
        }
    }
}

function buyTenPtr() {
    if (plyr.energy >= 100) {
        for (let i = 0; i <= 9; i++) {
            protonClick();
        }
    }
}

function buyTenNet() {
    if (plyr.energy >= 10000) {
        for (let i = 0; i <= 9; i++) {
            neutronClick();
        }
    }
}

function updateAmts() {
    function updater(x, y) {
        x >= 1000 ? y.innerHTML = x.toExponential(2) : y.innerHTML = x;
    }
    updater(plyr.energy, nrgAmt);
    updater(plyr.protons, prtAmt);
    updater(plyr.neutrons, netAmt);
    updater(plyr.electrons, elcAmt);
    console.log(plyr);
}


function perSecond() {
    if (plyr.neutrons > 0) {
        plyr.energy = (plyr.energy * 10 + (plyr.eps * 10 * plyr.neutrons)) / 10;
    } else {
        plyr.energy = ((plyr.energy * 10) + (plyr.eps * 10)) / 10;
    }   
}

function saveGame() {
    localStorage.removeItem('plyr')
    localStorage.setItem('plyr', JSON.stringify(plyr));
}

function loadGame() {
    plyr = JSON.parse(localStorage.getItem('plyr'));
}

function wipeSave() {
    //dumb code is dumb and I hate it | He despises it.
    plyr.energy = 0;
    plyr.electrons = 0;
    plyr.neutrons = 0;
    plyr.protons = 0;
    plyr.atoms = 0;
    plyr.epc = 1;
    plyr.eps = 0;
}

//eventlisteners woo hoo
//normal button event listeners
nrgBtn.addEventListener("click", energyClick);
prtBtn.addEventListener("click", protonClick);
elcBtn.addEventListener("click", electronClick);
netBtn.addEventListener("click", neutronClick);

//buy ten event listeners
elcBuyTen.addEventListener("click", buyTenElc);
ptrBuyTen.addEventListener("click", buyTenPtr);
netBuyTen.addEventListener("click", buyTenNet);

//save state event listeners
wipeSaveBtn.addEventListener("click", wipeSave);
saveGameBtn.addEventListener("click", saveGame);
loadGameBtn.addEventListener("click", loadGame);

setInterval(updateAmts, 10);
setInterval(perSecond, 1000);
setInterval(saveGame, 10000);



























































































































































































































































































































































































































//Bernie Sanders' dwelling, this is where he dwells. Born in the cretacious period, he has lived through multiple mass extinctions.