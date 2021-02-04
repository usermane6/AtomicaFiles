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

var clickLvl = 1;

function energyClick() {
    var clickStage = "stageOne";
    function clickTimer () {
        nrgBtn.classList.remove(clickStage);
        switch(clickLvl) {
            case 2:
                clickLvl = 1;
                clickStage = "stageOne";
                break;
            case 3: 
                clickLvl = 2;
                clickStage = "stageTwo";
                break;
            case 4: 
                clickLvl = 3;
                clickStage = "stageThree";
                break;
            case 5: 
                clickLvl = 4;
                clickStage = "stageFour";
        }
        nrgBtn.classList.add(clickStage);
    }
    if (clickLvl == 1) {
        player.energy = (player.energy * 10 + player.epc * 10) / 10;
        clickLvl = 5;
        nrgBtn.classList.replace("stageOne", "stageFive");
        setTimeout(clickTimer, 1000);
        setTimeout(clickTimer, 2000);
        setTimeout(clickTimer, 3000);
        setTimeout(clickTimer, 4000);
    }
}

function protonClick() {
    if (player.energy >= 10) {
        player.energy = (player.energy * 10 - 100) / 10;
        player.protons ++;
        player.epc ++;
    }    
}

function electronClick() {
    if (player.energy >= 100)  {
        player.energy = (player.energy * 10 - 1000) / 10;
        player.electrons ++;
        player.eps = (player.eps * 10 + 1) / 10;
    }
}

function neutronClick() {
    if (player.energy >= 1000) {
        player.energy = (player.energy * 10 - 10000) / 10;
        player.neutrons ++;
    }
}

function perSecond() {
    if (player.neutrons < 0) {
        player.energy = (player.energy * 10 + (player.eps * 10 * player.neutrons)) / 10;
    } else {
        player.energy = ((player.energy * 10) + (player.eps * 10)) / 10;
    }   
}

function updateAmts() {
    nrgAmt.innerHTML = player.energy;
    prtAmt.innerHTML = player.protons;
    elcAmt.innerHTML = player.electrons;
    netAmt.innerHTML = player.neutrons;
    console.log(player)
}

nrgBtn.addEventListener("click", energyClick);
prtBtn.addEventListener("click", protonClick);
elcBtn.addEventListener("click", electronClick);
netBtn.addEventListener("click", neutronClick);

setInterval(updateAmts, 10)
setInterval(perSecond, 1000)



























































































































































































































































































































































































































//Bernie Sanders' dwelling, this is where he dwells.