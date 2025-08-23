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