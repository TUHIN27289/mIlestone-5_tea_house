console.log('this is external jssssssssssssss');
console.log(document);

const si_=document.querySelectorAll('section');
// for(const i of si_){
//     i.style.border='2px solid red';
//     i.style.marginBottom='10px';
//     i.style.paddingLeft='10px';
//     i.style.backgroundColor='lightgray';
//     i.style.borderRadius='10px';

// }

for(const section of si_){
    section.classList.add('section-card')
}








// document.getElementById('avii_uu').childNodes[6].childNodes
// NodeList []

// document.getElementById('avii_uu').childNodes[5].childNodes
// NodeList(23) [ #text, h1#food-title, #text, li, #text, li, #text, li, #text, li.v
// , … ]

// document.getElementById('avii_uu').childNodes[5].childNodes[1]
// <h1 id="food-title">

// document.getElementById('avii_uu').childNodes[5].childNodes[1].parentNode
// <div class="fav_food">

// document.getElementById('avii_uu').childNodes[5].childNodes[1].parentNode.parentNode
// <section id="avii_uu" class="section-card">

// document.getElementById('avii_uu').childNodes[5].childNodes[1].parentNode.parentNode.parentNode
// <body>

// document.getElementById('avii_uu').childNodes[5].childNodes[1].parentNode.parentNode.parentNode.parentNode
// <html lang="en">

// document.getElementById('avii_uu').childNodes[5].childNodes[1].parentNode.parentNode.parentNode.parentNode.parentNode
// HTMLDocument http://127.0.0.1:5500/index_1.html

// document.getElementById('avii_uu').childNodes[5].childNodes[1].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
// null




// 24-7 NodeList, htmlcollection, parentNode, childnodes, createElement

//  create element and  set innertext or innerhtml
const newChild=document.createElement('li');
newChild.innerText='new born footballer here';

// find the parent where you will add the child
const playerList = document.getElementById('avi_miss');
playerList.appendChild(newChild);
