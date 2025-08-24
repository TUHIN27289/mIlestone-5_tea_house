// way-2
function makeAqua() {
  document.body.style.backgroundColor = "aqua";
}
function makeTomato() {
  document.body.style.backgroundColor = "tomato";
}

//  way-3
const btnMakeBlue = document.getElementById("make-bg-blue");
btnMakeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};

const btnMakeGreen = document.getElementById("make-bg-green");
btnMakeGreen.onclick = function makeBgGren() {
  document.body.style.backgroundColor = "green";
};

// way-4
const btnMakePurple = document.getElementById("make-bg-purple");
btnMakePurple.onclick = makeBgPurple;
function makeBgPurple() {
  document.body.style.backgroundColor = "purple";
}

document.getElementById("make-bg-gray").addEventListener("click", function () {
  document.body.style.backgroundColor = "gray";
});

// way-5
document
  .getElementById("make-bg-yellow")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "yellow";
  });
document
  .getElementById("make-bg-gray")
  .addEventListener("mouseover", function () {
    document.body.style.backgroundColor = "red";
  });

// 25-4 Integrate Event innerText and Text update by Event Event Handlers

document.getElementById("upadate-btn").addEventListener("click", function () {
  const tile = document.getElementById("page-title");
  tile.innerText = "this is event handler aviiiiiiii";
});

document.getElementById("update-para").addEventListener("click", function () {
  const upPara = document.getElementById("para-Text");
  upPara.innerText =
    "coding is like  drug to me.i just love to code.there are many fav language c,c++,java, .net js, css .......aviiiiiiiiii  lets codeeeeeeeeeeeeeeeeeeee together ";
});

document.getElementById("upbtn").addEventListener("click", function () {
  const inName = document.getElementById("inpu-name");
  const namep_ = inName.value;

  const uname = document.getElementById("update-name");
  uname.innerText = namep_;
});

document.getElementById("favBtn").addEventListener("click", function () {
  const fav = document.getElementById("favInput");
  const favname = fav.value;
  const udatefavname = document.getElementById("naHere");
  udatefavname.innerText = favname;
});



// comment
