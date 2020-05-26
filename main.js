const meguru = document.getElementById('meguru');
meguru.insertAdjacentHTML('beforeend', '\
<div id="bigBox">\
<div id="scene">\
<div class="boxBase">\
    <div class="top"></div>\
    <div class="bottom"></div>\
    <div class="front"></div>\
    <div class="back"></div>\
    <div class="left"></div>\
    <div class="right"></div>\
</div>\
</div>\
<div id="scene2">\
<div class="boxBase2">\
    <div class="top"></div>\
    <div class="bottom"></div>\
    <div class="front"></div>\
    <div class="back"></div>\
    <div class="left"></div>\
    <div class="right"></div>\
</div>\
</div>\
</div>');

const mouse = document.getElementById('scene');
const box = document.querySelector('div');

let count = 0;

function bigClone() {
    setTimeout(bigClone, 3000);
    if (count <= 2) {
        let bigBox = document.getElementById('bigBox');
        let clone = bigBox.firstElementChild.cloneNode(true);
        bigBox.appendChild(clone); 
        count ++;

    }
};

bigClone();
