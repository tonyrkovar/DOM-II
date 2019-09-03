// Your code goes here
const noNav = document.querySelector('.nav');
noNav.addEventListener('click', element => {
    element.preventDefault();
  })
  noNav.addEventListener('dblclick', e => {
    alert('NO!');
})

// const fullNav = document.querySelector('.main-navigation');
// fullNav.addEventListener('mouseenter', e => {
//     e.style.backgroun = 'red';
// });

const mainPara = document.querySelector('.intro p');
mainPara.addEventListener('mouseenter', e => {
    mainPara.style.minWidth = '2000px';
    mainPara.style.color = 'blue';
    mainPara.style.marginLeft = '-25%';
    mainPara.style.paddingRight = '500px';
    mainPara.style.fontSize = '3rem';
})
mainPara.addEventListener('mouseout', e => {
    mainPara.style.minWidth = '1300px';
    mainPara.style.fontSize = '1.6rem';
    mainPara.style.color = 'orange';
    mainPara.style.marginLeft = '.01%';
})

const pageScroll = document.querySelector('body');
pageScroll.addEventListener('wheel', e => {
    pageScroll.style.color = 'yellow' ;
    pageScroll.style.backgroundColor = 'red';
})

const imgFlip = document.querySelectorAll('img');
imgFlip.forEach( e => {
    imgFlip.style.transfrom = 'scale(1.9)';
    imgFlip.style.transition = 'transform 5s';
});


