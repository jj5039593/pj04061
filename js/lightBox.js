"use strict";

const secCon = document.querySelector('.sec-con');
const secConUl = secCon.querySelector('ul');
const secConLi = secCon.querySelectorAll('li');

const popUp = document.querySelector('.popup');
const popCon = document.querySelector('.popup-con');

//이벤트 위임, ul 클릭 이벤트 

secConUl.addEventListener('click',e=>{
    const eTarget = e.target;

    const liTag = eTarget.parentElement;

    secConLi.forEach((el,idx)=>{
        if(el===liTag){
            const imgTag = el.children[0]
            const pTag = el.children[1]

            const imgSrc = imgTag.getAttribute('src')
            const imgAlt = imgTag.getAttribute('alt')
            const pTxt = pTag.innerText;

            popCon.children[0].setAttribute('src',imgSrc)
            popCon.children[0].setAttribute('alt',imgAlt)
            popCon.children[1].innerText=pTxt
            popUp.classList.add('pop-animation')

        }
    });

});

popCon.addEventListener('click',e=>{
    const popup = e.currentTarget.parentElement;
    console.log(popup)
    popUp.classList.remove('pop-animation')
});
