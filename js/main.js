// main header btn-menu 클릭하면
// artist-recent-activity sub-nav 나타남
// const menuBtn = document.querySelector('header .btn-menu');
// const navSub = document.querySelector('.artist-recent-activity .sub-nav');

// menuBtn.addEventListener('click', function () {
//   navSub.classList.toggle('active');
// })


// 수평 슬라이드 기능
new Swiper('.promotion-content .swiper', {
  loop: true,
  autoplay: true,
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: {
    nextEl: '.promotion-content .swiper-button-next',
    prevEl: '.promotion-content .swiper-button-prev'
  }
});
