const meguru = document.getElementById('meguru');
meguru.insertAdjacentHTML('beforeend', '\
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
</div>');

const mouse = document.getElementById('scene');
const box = document.querySelector('div');