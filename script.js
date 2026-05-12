const tabs = [...document.querySelectorAll('.tab')];
const video = document.getElementById('mainVideo');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    video.pause();
    video.innerHTML = `<source src="${tab.dataset.video}" type="video/mp4">Your browser does not support the video tag.`;
    video.load();
  });
});
