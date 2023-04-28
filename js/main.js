// HEADER
// sns-nav =>  sub-menu
const menuBtn = document.querySelector('header .sns-nav .btn-menu');
const navSub = document.querySelector('header .sub-nav');

menuBtn.addEventListener('click', function () {
  navSub.classList.toggle('active');
});

// SECTION
// PROMOTION-CONTENT
// 수평 슬라이드 기능
new Swiper('.promotion-content .swiper', {
  loop: true,
  autoplay: true,
  slidesPerView: 5,
  spaceBetween: 50,
  navigation: {
    nextEl: '.promotion-content .swiper-button-next',
    prevEl: '.promotion-content .swiper-button-prev'
  }
});

// 스크롤 내리면
// 보임: promotion-content
// 안보임: promotion-player footer
const promotionPlayer = document.querySelector('.promotion-player');
const promotionContent = document.querySelector('.promotion-content');


const scrollDownBtn = promotionPlayer.querySelector('.promotion-direction');
scrollDownBtn.addEventListener('click', function(){
  gsap.to(promotionPlayer,0.1,{
    opacity: 0,
    display: 'none',
  });
  gsap.to(promotionContent,0.1,{
    opacity: 1,
    display: 'block',
  });
  
});

window.addEventListener('scroll',function () {
  if (window.scrollY > 0) {
    gsap.to(promotionContent,0.4,{
      opacity: 1,
      display: 'block',
    });
  } else {
    gsap.to(promotionContent,0.4,{
      opacity: 0,
      display: 'none',
      flex: 0,
    });
  }
});


// sub-nav promotion-content에서 보이도록
const navSubBc = navSub.querySelectorAll('li');
const navSubText = navSub.querySelectorAll('a');
const logoText = document.querySelector('header .logo-text > a');



window.addEventListener('scroll',function () {
  if (window.scrollY > 350) {
    navSubBc.forEach(function (bc) {
      bc.classList.add('bc-change');
    });
    navSubText.forEach(function(tc){
      tc.classList.add('color-change');
    });
  } else {
    navSubBc.forEach(function (bc) {
      bc.classList.remove('bc-change');
    });
    navSubText.forEach(function(tc){
      tc.classList.remove('color-change');
    });
  } 
});

// SCROLL UP BTN 누르면
const scrollUpBtn = document.querySelector('.promotion-content .scroll-up-btn');

scrollUpBtn.addEventListener('click',function () {
  if(window.scrollY > 0) {
    window.scrollTo(0,0);
    gsap.to(promotionPlayer,0.1,{
      opacity: 1,
      display: 'block',
    });
  } else {
    gsap.to(promotionPlayer,0.1,{
      opacity: 0,
      display: 'none',
    });
  }
});

// FOOTER
// 현재 연도 표시
const thisYear = document.querySelector('.copyright .this-year');
thisYear.textContent = new Date().getFullYear(); 

