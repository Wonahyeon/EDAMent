// main header main-nav sub-menu

const menuBtn = document.querySelector('header .sns-nav .btn-menu');
const navSub = document.querySelector('header .sub-nav');

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

// 스크롤 내리면 promotion content 나타남

// const promotionPlayer = document.querySelector('.promotion-player');
// const promotionContent = document.querySelector('.promotion-content');

// window.addEventListener('scroll',function () {
//   if (window.scrollY > 0) {
//     promotionContent.classList.add('active');
//     promotionPlayer.classList.add('active');
//   }
// });

// TODO버튼 누르면 다시 원래대로
// const scrollUpBtn = document.querySelector('.promotion-content .scroll-up-btn');

// scrollUpBtn.addEventListener('click', function () {
//   promotionPlayer.classList.remove('active');
//   promotionContent.classList.remove('active');
// });



// FOOTER
// 현재 연도 표시
const thisYear = document.querySelector('.copyright .this-year');
thisYear.textContent = new Date().getFullYear();