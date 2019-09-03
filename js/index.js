// Your code goes here
const noNav = document.querySelector('.nav');
noNav.addEventListener('click', element => {
    element.preventDefault();
  })
  noNav.addEventListener('dblclick', e => {
    alert('NO!');
})

// adds mousover effect to main paragraph
const mainPara = document.querySelector('.intro p');
mainPara.addEventListener('mouseenter', e => {
    mainPara.style.minWidth = '2000px';
    mainPara.style.color = 'blue';
    mainPara.style.marginLeft = '-25%';
    mainPara.style.paddingRight = '500px';
    mainPara.style.fontSize = '3rem';
})
//mouse out to reset main paragraph
mainPara.addEventListener('mouseout', e => {
    mainPara.style.minWidth = '1300px';
    mainPara.style.fontSize = '1.6rem';
    mainPara.style.color = 'orange';
    mainPara.style.marginLeft = '.01%';
})
// Looks good
const pageScroll = document.querySelector('body');
pageScroll.addEventListener('wheel', e => {
    pageScroll.style.color = 'yellow' ;
    pageScroll.style.backgroundColor = 'red';
})

// Fun flippy button
const imgFlip = document.querySelector('.destination .btn');
imgFlip.addEventListener('mousemove', e => {
    imgFlip.style.color = 'blue';
    imgFlip.style.transform = 'rotate(18000deg)';
    imgFlip.textContent = 'weeeeeeeeeeeeeeeeeee';
    imgFlip.style.backgroundColor = 'peru';
    imgFlip.style.transition = '10s';
});

imgFlip.addEventListener('transitionend', e => {
    imgFlip.style.color = 'red';
    imgFlip.style.transform = 'rotate(1800deg)';
    imgFlip.textContent = 'weeeeeeeeeeeeeeeeeee';
    imgFlip.style.backgroundColor = 'gray';
    imgFlip.style.transition = '30.8s';
})


// Fun flippy image, same as button but with more fun
const imgFlipDest = document.querySelector('.content-destination img');
imgFlipDest.addEventListener('mousemove', e => {
    imgFlipDest.style.color = 'blue';
    imgFlipDest.style.transform = 'rotate(18000deg)';
    imgFlipDest.textContent = 'weeeeeeeeeeeeeeeeeee';
    imgFlipDest.style.backgroundColor = 'peru';
    imgFlipDest.style.transition = '10s';
});

imgFlipDest.addEventListener('transitionend', e => {
    imgFlipDest.style.color = 'red';
    imgFlipDest.style.transform = 'rotate(1800deg)';
    imgFlipDest.textContent = 'weeeeeeeeeeeeeeeeeee';
    imgFlipDest.style.backgroundColor = 'gray';
    imgFlipDest.style.transition = '30.8s';
})


const textSelect = document.querySelector('.inverse-content .text-content');
textSelect.addEventListener('drag', e => {
    keyStroke.style.backgroundColor = 'purple';
    event.stopPropagation();
})

const keyStroke = document.querySelector('.inverse-content');
keyStroke.addEventListener('drag', e => {
    keyStroke.style.minWidth = '1100px'
    keyStroke.style.transform = 'scale(1.4)'
    keyStroke.style.transition = 'transform 10s';
})

window.addEventListener('load', e => {
    alert(`Page fully loaded dawg`);
})

const altClick = document.querySelector('.footer');
altClick.addEventListener('auxclick', e => {
    altClick.textContent = 'YOOOOOOOOOOOOOOOOOOOOOOOO';
    altClick.style.padding = '20px';
    altClick.style.textAlign = 'center';
    altClick.style.color = 'black';
})



