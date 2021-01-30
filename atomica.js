//This is the beginning, inny the beninging. 

//Constants!
const nrgAmt = document.querySelector("#nrg-amt");
const elcAmt = document.querySelector("#elc-amt");
const prtAmt = document.querySelector("#prt-amt");
const netAmt = document.querySelector("#net-amt");

const nrgBtn = document.querySelector("#nrg-btn");
const elcBtn = document.querySelector("#elc-btn");
const prtBtn = document.querySelector("#prt-btn");
const netBtn = document.querySelector("#net-btn");
//const nrgAmt = document.querySelector("#nrg");

//Variables!
let player = {
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

function energyClick() {
    energy += epc;
}

function electronClick() {
    if (energy >= 100)  {
        energy -= 100;
        electrons ++;
        eps += (eps * 10 + 1) / 10;
    }
}

function protonClick() {
    if (energy >= 10) {
        energy -= 10;
        protons ++;
        epc ++;
    }    
}

function neutronClick() {
    if (energy >= 1000) {
        energy -= 1000;
        neutrons ++;
    }
}

function perSecond() {
    energy = (energy * 10 + (eps * 10 * neutrons)) / 10
}

function updateAmts() {
    nrgAmt.innerHTML = energy;
    prtAmt.innerHTML = protons;
    elcAmt.innerHTML = electrons;
    netAmt.innerHTML = neutrons;
}

nrgBtn.addEventListener("click", energyClick);
prtBtn.addEventListener("click", protonClick);
elcBtn.addEventListener("click", electronClick);
netBtn.addEventListener("click", neutronClick);

setInterval(updateAmts, 10)
setInterval(perSecond, 1000)


























































































































































































































































































































































































































//Bernie Sanders' dwelling, this is where he dwells.