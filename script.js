const tabs=[...document.querySelectorAll('.tab')];
const video=document.getElementById('mainVideo');
const posterButton=document.getElementById('posterButton');
const videoFrame=document.querySelector('.videoFrame');
const videoMap={english:'assets/english.mp4',arabic:'assets/arabic.mp4',hindi:'assets/hindi.mp4'};
function setVideo(src,lang){tabs.forEach(i=>i.classList.toggle('active',i.dataset.lang===lang));video.pause();video.innerHTML=`<source src="${src}" type="video/mp4">Your browser does not support the video tag.`;video.load();}
function tryPlay(){videoFrame.classList.remove('needsClick');const p=video.play();if(p!==undefined){p.catch(()=>videoFrame.classList.add('needsClick'));}}
tabs.forEach(tab=>tab.addEventListener('click',()=>{setVideo(tab.dataset.video,tab.dataset.lang);videoFrame.classList.remove('needsClick');}));
posterButton.addEventListener('click',tryPlay);
const params=new URLSearchParams(window.location.search);
const selected=(params.get('video')||'english').toLowerCase();
const shouldPlay=params.get('play')==='1'||params.get('autoplay')==='1';
if(videoMap[selected]) setVideo(videoMap[selected],selected);
if(shouldPlay) window.addEventListener('load',()=>setTimeout(tryPlay,350));
