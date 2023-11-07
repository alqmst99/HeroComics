

let tab1= document.querySelector('.tab1');
let tab2= document.querySelector('.tab2');
let tab3= document.querySelector('.tab3');
let tab4= document.querySelector('.tab4');
let inf= document.querySelector('.content-info')
let res= document.querySelector('.result-s')
let src= document.querySelector('.searchF')
let modal= document.querySelector('.card-header')


function selectTab1(){
    tab1.classList.add ('active')
    tab2.classList.remove ('active')
    tab3.classList.remove ('active')
    tab4.classList.remove ('active')
  
    
}
function selectTab2(){
    tab2.classList.add ('active')
    tab1.classList.remove ('active')
    tab3.classList.remove ('active')
    tab4.classList.remove ('active')
  
   
}
function selectTab3(){
    tab3.classList.add ('active')
    tab1.classList.remove ('active')
    tab2.classList.remove ('active')
    tab4.classList.remove ('active')
   
    
}


