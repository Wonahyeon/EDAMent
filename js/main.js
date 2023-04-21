// main header btn-menu 클릭하면
// artist-recent-activity sub-nav 나타남
const menuBtn = document.querySelector('header .btn-menu');
const navSub = document.querySelector('.artist-recent-activity .sub-nav');

menuBtn.addEventListener('click', function () {
  navSub.classList.toggle('active');
})
