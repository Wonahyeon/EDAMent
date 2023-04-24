// main header btn-menu 클릭하면
// promotion-player sub-nav 나타남
const menuBtn = document.querySelector('header .sns-nav .btn-menu');
const navSub = document.querySelector('.promotion-player .sub-nav');

console.log(navSub);

menuBtn.addEventListener('click', function () {
  navSub.classList.toggle('active');
});


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

// promotion-title 클릭하면 promotion-content 나타남

const promotionToggle = document.querySelector('.promotion-title');
const promotionContent = document.querySelector('.promotion-content');

promotionToggle.addEventListener('click', function() {
  promotionContent.classList.toggle('active');
})