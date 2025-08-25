//   const item_list = document.getElementsByClassName("items_");
    //   for (const item of item_list) {
    //     item.addEventListener("click", function (event) {
    //       event.target.parentNode.removeChild(event.target);
    //     });
    //   }
    //   document.getElementById('adbtn').addEventListener('click',function(){
    //     const ol=document.getElementById('ol-con');
    //     const li=document.createElement('li');
    //     li.classList.add('items_')
    //     li.innerText='new list add'
    //     ol.appendChild(li);
    //   })

// problem solve now i can delete the added list


    document.getElementById('ol-con').addEventListener('click',function(e){
        e.target.parentNode.removeChild(e.target);
    })

    document.getElementById('adbtn').addEventListener('click',function(){
        const ol=document.getElementById('ol-con');
        const li=document.createElement('li');
        li.classList.add('items_');
        li.innerText='new list added';
        ol.appendChild(li);

    })
