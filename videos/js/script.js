"use strict";
let li=document.querySelectorAll('li');
let video = document.querySelector('video');
for(let i=0;i<li.length;i++){
  li[i].addEventListener('click',function(){
    console.log(li[i].dataset.url);
    let string=li[i].dataset.url;
    video.pause();
    video.removeAttribute('src');
    video.setAttribute('src', 'videos/'+string+'.mp4');
    video.setAttribute('poster', 'posters/'+string+'.jpg');
    video.load();
  });

}
//
// var source = document.createElement('source');
//
// source.setAttribute('src', 'videos/despicableme.mp4');
//
// video.appendChild(source);
// video.play();
//
// setTimeout(function() {
//     video.pause();
//
//     source.setAttribute('src', 'videos/kungfupanda.mp4');
//
//     video.load();
//     video.play();
// }, 3000);
