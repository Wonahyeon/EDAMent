const modalIU = document.querySelector('.modal#modal-iu');
const modalIuOpen = document.querySelector('.profile .artists .artist#iu');

modalIuOpen.addEventListener('click',function(){
  modalIU.classList.add('active');
});

const modalIuClose = modalIU.querySelector('.btn-close');
modalIuClose.addEventListener('click',function(){
  modalIU.classList.remove('active');
});


// 수평 슬라이드
new Swiper('.modal .swiper',{
  loop: true,
  autoplay: true,
  slidesPerView: 5,
  spaceBetween: 20,
  navigation: {
    nextEl: '.modal .swiper-button-next',
    prevEl: '.modal .swiper-button-prev'
  }
});

// TODO 반응형 slidesPerView 달리 보이게 하기