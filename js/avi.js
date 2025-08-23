
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



// 24-8 Create HTML elements using Javascript and appendChild

// parent node
const mainContainer=document.getElementById('main_con');

// create section(child)
const placesSection=document.createElement('section')

// create h1
const h1_=document.createElement('h1');
h1_.innerText='hi this toukir....are you there ~ ~ ~';

const p_=document.createElement('p');
p_.innerText='Interactive OpenGL Graphics Project: Create immersive scenes with dynamic weather, day/night cycles, and user control. Explore the power of computer graphics through realistic simulations. This project showcases rendering, animation, and user interaction techniques.'

const ull=document.createElement('ul');
const li1=document.createElement('li');
li1.innerText='aviiiiiii ';
const li2=document.createElement('li');
li2.innerText='1229'
const li3=document.createElement('li');
li3.innerText='~ ~ ~';
const li4=document.createElement('li');
li4.innerText='Toukir';



// child connected to parent
mainContainer.appendChild( placesSection);
placesSection.appendChild(h1_)
placesSection.appendChild(p_)
placesSection.appendChild(ull)
ull.appendChild(li1)
ull.appendChild(li2)
ull.appendChild(li3)
ull.appendChild(li4)

//  easir ways to create html
const bookSection=document.createElement('section');
bookSection.innerHTML=`
<h1>this is all avi's fav book</h1>
<ul>
<li>c</li>
<li>java</li>
<li>c++</li>
<li>.net</li>
<li>math</li>
</ul>
`
mainContainer.appendChild(bookSection)