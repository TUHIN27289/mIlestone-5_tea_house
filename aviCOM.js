document.getElementById("post").addEventListener("click", function () {
  const comatext = document.getElementById("commentBox");
  const newcom = comatext.value;
  const newcHild = document.createElement("p");
  newcHild.classList.add("comment");
  newcHild.innerText = newcom;
  const comcon = document.getElementById("comCantainer");
  comcon.appendChild(newcHild);
  commentBox.value = "";
});

// 25-6 Explore more event type and Simple github like delete confirmation button

document
  .getElementById("btn-mouse")
  .addEventListener("mouseenter", function () {
    console.log("mouse enter");
  });
document.getElementById("btn-mouse").addEventListener("mouseout", function () {
  console.log("mouse out");
});

document.getElementById("btn-mouse").addEventListener("mousemove", function () {
  console.log("mouse move");
});
document.getElementById("name_avi").addEventListener("focus", function () {
  console.log("your name in focus");
});

document.getElementById("avi-mail").addEventListener("focus", function () {
  console.log("your mail in focus");
});

document.getElementById("name_avi").addEventListener("blur", function () {
  console.log("your name done");
});

document.getElementById("avi-mail").addEventListener("blur", function () {
  console.log("your mail done");
});

document.getElementById("favS").addEventListener("keyup", function (event) {
  console.log("typing", event.target.value);
});

document.getElementById("favS").addEventListener("keydown", function (e) {
  console.log("typing", e.target.value);
});

document.getElementById("input_name").addEventListener("keyup", function (ev) {
  let text = ev.target.value;
  console.log("typing ", text);
  const st = document.getElementById("dlt-btn");
  const scode = document.getElementById("sec-tag");
  if (text === "avi") {
    st.removeAttribute("disabled");
    scode.style.display = "none";
  } else {
    st.setAttribute("disabled", true);
    scode.style.display = "block";
  }
});

// 25-7 (semi-advanced) Event bubble and Stop propagating
document.getElementById("item-3").addEventListener("click", function (event) {
  console.log("li -3 clicked");
  event.stopImmediatePropagation();
//   event.stopPropagation();
});

document.getElementById("item-3").addEventListener("click", function (event) {
  console.log("li -3 second clicked");
});

document.getElementById("item-3").addEventListener("click", function () {
  console.log("li -3  third clicked");
});

document.getElementById("ol-clicked").addEventListener("click", function () {
  console.log("ol clicked");
});
document.getElementById("div-clicked").addEventListener("click", function () {
  console.log("div clicked");
});
document.getElementById("sec-clicked").addEventListener("click", function () {
  console.log("section clicked");
});
document.getElementById("body-click").addEventListener("click", function () {
  console.log("body clicked");
});

