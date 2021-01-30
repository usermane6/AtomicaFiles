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
var player = {
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
    player.energy += player.epc;
}

function electronClick() {
    if (player.energy >= 100)  {
        player.energy -= 100;
        player.electrons ++;
        player.eps += (player.eps * 10 + 1) / 10;
    }
}

function protonClick() {
    if (player.energy >= 10) {
        player.energy -= 10;
        player.protons ++;
        player.epc ++;
    }    
}

function neutronClick() {
    if (player.energy >= 1000) {
        player.energy -= 1000;
        player.neutrons ++;
    }
}

function perSecond() {
    player.energy = (player.energy * 10 + (player.eps * 10 * player.neutrons)) / 10
}

function updateAmts() {
    nrgAmt.innerHTML = player.energy;
    prtAmt.innerHTML = player.protons;
    elcAmt.innerHTML = player.electrons;
    netAmt.innerHTML = player.neutrons;
}

nrgBtn.addEventListener("click", energyClick);
prtBtn.addEventListener("click", protonClick);
elcBtn.addEventListener("click", electronClick);
netBtn.addEventListener("click", neutronClick);

setInterval(updateAmts, 10)
setInterval(perSecond, 1000)


























































































































































































































































































































































































































//Bernie Sanders' dwelling, this is where he dwells.