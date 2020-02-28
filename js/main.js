'use strict';

{
  const open = document.getElementById('open');
  const details = document.getElementById('details');
  const hide = document.getElementById('hide');
  
  open.addEventListener('click', () => {
    details.classList.remove('hidden');
    open.classList.add('hidden');
  });

  hide.addEventListener('click', () => {
    details.classList.add('hidden');
    open.classList.remove('hidden');
  });

  const text = document.querySelector('textarea');
  // text.focus();

  const counternumber = document.getElementById('counternumber');
  const writingpaper400 = document.getElementById('writingpaper400');

  text.addEventListener('input', () => {
    let currentTextLength = text.value.length;
    writingpaper400.textContent = Math.ceil(currentTextLength / 400);
    currentTextLength = currentTextLength.toLocaleString();
    counternumber.textContent = currentTextLength;
  });

  const copy = document.getElementById('copy');
  const mask = document.getElementById('mask');
  const modal1 = document.getElementById('modal1');
  
  copy.addEventListener('click', () => {
    text.select();
    document.execCommand('copy');
    mask.classList.remove('hidden');
    modal1.classList.remove('hidden');
    text.blur();
  });
  
  const close = document.getElementById('close');

  mask.addEventListener('click', () => {
    modal1.classList.add('hidden');
    mask.classList.add('hidden');  
  });

  close.addEventListener('click', () => {
    modal1.classList.add('hidden');
    mask.classList.add('hidden');  
  
    mask.addEventListener('click', () => {
      close.click();
    });
  });

  const reset = document.getElementById('reset');
  const no = document.getElementById('no');
  const yes = document.getElementById('yes');
  const modal2 = document.getElementById('modal2');

  reset.addEventListener('click', () => {
    mask.classList.remove('hidden');
    modal2.classList.remove('hidden');
    
    no.addEventListener('click', () => {
      modal2.classList.add('hidden');
      mask.classList.add('hidden');  
    });
        
    mask.addEventListener('click', () => {
      no.click();
    });

    yes.addEventListener('click', () => {
      no.click();
      text.value = '';
      counternumber.textContent = 0;
      writingpaper400.textContent = 0;
    });
  });
}
