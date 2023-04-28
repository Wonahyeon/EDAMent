// 아이유
const modalIU = document.querySelector('.modal#modal-iu');
const modalIuOpen = document.querySelector('.profile .artists .artist#iu');

modalIuOpen.addEventListener('click',function(){
  modalIU.classList.add('active');
});

const modalIuClose = modalIU.querySelector('.btn-close');
modalIuClose.addEventListener('click',function(){
  modalIU.classList.remove('active');
});
// 신세경
const modalSsk = document.querySelector('.modal#modal-ssk');
const modalSskOpen = document.querySelector('.profile .artists .artist#ssk');

modalSskOpen.addEventListener('click',function(){
  modalSsk.classList.add('active');
});

const modalSskClose = modalSsk.querySelector('.btn-close');
modalSskClose.addEventListener('click',function(){
  modalSsk.classList.remove('active');
});
// 우즈
const modalWz = document.querySelector('.modal#modal-wz');
const modalWzOpen = document.querySelector('.profile .artists .artist#wz');

modalWzOpen.addEventListener('click',function(){
  modalWz.classList.add('active');
});

const modalWzClose = modalWz.querySelector('.btn-close');
modalWzClose.addEventListener('click',function(){
  modalWz.classList.remove('active');
});
