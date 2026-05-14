const tabs = [...document.querySelectorAll('.tab')];
const video = document.getElementById('mainVideo');

const videoMap = {
  english: 'assets/english.mp4',
  arabic: 'assets/arabic.mp4',
  hindi: 'assets/hindi.mp4'
};

function setVideo(src, lang) {
  tabs.forEach((tab) => tab.classList.toggle('active', tab.dataset.lang === lang));
  video.pause();
  video.innerHTML = `<source src="${src}" type="video/mp4">Your browser does not support the video tag.`;
  video.load();
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => setVideo(tab.dataset.video, tab.dataset.lang));
});

const params = new URLSearchParams(window.location.search);
const selected = (params.get('video') || 'english').toLowerCase();
const shouldPlay = params.get('play') === '1' || params.get('autoplay') === '1';

if (videoMap[selected]) {
  setVideo(videoMap[selected], selected);
}

if (shouldPlay) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const p = video.play();
      if (p !== undefined) p.catch(() => {});
    }, 300);
  });
}
