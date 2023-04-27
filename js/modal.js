const modalIU = document.querySelector('.modal#modal-iu');
const modalIuOpen = document.querySelector('.profile .artists .artist#iu');

modalIuOpen.addEventListener('click',function(){
  modalIU.classList.add('active');
});

const modalIuClose = modalIU.querySelector('.btn-close');
modalIuClose.addEventListener('click',function(){
  modalIU.classList.remove('active');
});
