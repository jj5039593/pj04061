"use strict";

const gallery= document .querySelector('.gallery');
const galleryUl= gallery .querySelector('ul');
const galleryLi= galleryUl .querySelectorAll('li');

const centerBtn = document.querySelector('.center-btn');
const arrow = centerBtn.querySelectorAll('span.arrow')

const items = document.querySelector('.items');
const itemsUl = items.querySelector('ul');
const itemsLi = itemsUl.querySelectorAll('li');

const arrBg=[];

for(let i=0;i<galleryLi.length;i++){
    arrBg.push(`url(img/g${i}.jpg) no-repeat 50%/cover`);
    galleryLi[i].style.background=arrBg[i];
    galleryLi[i].style.filter='grayscale(1.1)';
    
};

//모듈화 할것임


function autoGo(num){

    let gap =galleryLi[1].offsetLeft-galleryLi[0].offsetLeft;
    let goto=(-gap*num)+'px';
    gallery.style.left=goto;
    gallery.style.transition='all 0.2s';

}


function autoAdd(num){

    itemsLi.forEach((el2,idx2)=>{
        if(idx2===num){
            el2.classList.add('on')
        }else{
            el2.classList.remove('on')
        }
    });

}
let i=-1;

function autoGallery(){
    if(i>=galleryLi.length-1) i=-1;

    i++;
    /*
    let gap =galleryLi[1].offsetLeft-galleryLi[0].offsetLeft;
    let goto=(-gap*i)+'px';
    gallery.style.left=goto;
    gallery.style.transition='all 0.2s';

    itemsLi.forEach((el,idx)=>{
        if(idx===i){
            el.classList.add('on')
        }else{
            el.classList.remove('on')
        }
    });
    */
    autoGo(i)
    autoAdd(i)
};

let setIn = setInterval(autoGallery,4000);


centerBtn.addEventListener('mouseover',(e)=>{
    const eTarget=e.target;
    arrow.forEach(el=>{
        if(el===eTarget){
            clearInterval(setIn);
        }
    });
});
centerBtn.addEventListener('mouseout',(e)=>{
    const eTarget=e.target;
    arrow.forEach(el=>{
        if(el===eTarget){
            setIn= setInterval(autoGallery, 4000);
        }
    });
});
itemsUl.addEventListener('mouseover',(e)=>{
    const eTarget=e.target;
    itemsLi.forEach(el=>{
        if(el===eTarget){
            clearInterval(setIn);
        }
    });
});
itemsUl.addEventListener('mouseout',(e)=>{
    const eTarget=e.target;
    itemsLi.forEach(el=>{
        if(el===eTarget){
            setIn= setInterval(autoGallery, 4000);
        }
    });
});


itemsUl.addEventListener('click',e=>{

    const eTarget=e.target;

    itemsLi.forEach((el,idx)=>{
        if(el===eTarget){
                
            el.classList.add('on')
            console.log(`idx->${idx}`)

           i=idx;

           autoGo(i)
            /*
                // let gap =galleryLi[1].offsetLeft-galleryLi[0].offsetLeft;
                // let goto=(-gap*i)+'px';
                // gallery.style.left=goto;
                // gallery.style.transition='all 0.2s' 
            */
        }else{
            el.classList.add('remove')
        }
    });
});


/*
이벤트 위임
arrow[0] click 시 gallery 왼쪽으로 gap만큼 이동 
arrow[1] click 시 .gallery 오른쪽으로 gap만큼 이동 
itemLi 인덱시 값에 따라서 on 클레스 적용
*/

centerBtn.addEventListener('click',e=>{
    const eTarget=e.target;

    arrow.forEach((el,idx)=>{
        if(el===eTarget){
            if(idx==0){
                if(i<=0) i=-galleryLi.length;
                i--;
                
                console.log(idx, i);

                autoGo(i)

                /*
                    let gap =galleryLi[1].offsetLeft-galleryLi[0].offsetLeft;
                    let goto=(-gap*i)+'px';
                    gallery.style.left=goto;
                    gallery.style.transition='all 0.2s' 
                */
                /*
                    itemsLi.forEach((el2,idx2)=>{
                    if(idx2===i){
                        el2.classList.add('on')
                    }else{
                        el2.classList.remove('on')
                    }
                */
               autoAdd(i)    
            }else if(idx==1){
                if(i>=galleryLi.length-1) i=-1
                i++;

                console.log(idx, i);

                autoGo(i)

                /*
                    let gap =galleryLi[1].offsetLeft-galleryLi[0].offsetLeft;
                    let goto=(-gap*i)+'px';
                    gallery.style.left=goto;
                    gallery.style.transition='all 0.2s' 
                */
               /*
                    itemsLi.forEach((el2,idx2)=>{
                    if(idx2===i){
                        el2.classList.add('on')
                    }else{
                        el2.classList.remove('on')
                    }
                */
               autoAdd(i);    
            };
         };

        });
    });



(()=>{autoGallery()})();


const secCon=document.querySelector('.section.sec2>.sec-con');
const secConUl=secCon.querySelector('ul');
const secConLi=secConUl.querySelectorAll('li');

const popUp = document.querySelector('.popUp');
const popUpCon = popUp.querySelector('.popUp-con');

secConUl.addEventListener('click',e=>{

    const eTarget=e.target;

    const liTag = eTarget.parentElement;

    console.log(eTarget,liTag)

    secConLi.forEach((el,idx)=>{
        if(el===liTag){
            const imgTag = el.children[0]

            const imgSrc = imgTag.getAttribute('src')
            const imgAlt = imgTag.getAttribute('alt')

            console.log(imgAlt,imgSrc)

            popUpCon.children[0].setAttribute('src',imgSrc)
            popUpCon.children[0].setAttribute('alt',imgAlt)

            popUp.style.display='block';
            popUp.style.display='flex';
        }

        
    });
});