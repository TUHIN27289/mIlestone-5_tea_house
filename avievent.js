
// way-2
function makeAqua(){
    document.body.style.backgroundColor='aqua';
}
function makeTomato(){
    document.body.style.backgroundColor='tomato'
}

//  way-3
const btnMakeBlue=document.getElementById('make-bg-blue');
btnMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor='blue';
}

const btnMakeGreen= document.getElementById('make-bg-green');
btnMakeGreen.onclick=function makeBgGren(){
    document.body.style.backgroundColor='green';
}

// way-4
const btnMakePurple=document.getElementById('make-bg-purple');
btnMakePurple.onclick= makeBgPurple
function makeBgPurple(){
    document.body.style.backgroundColor='purple';
}