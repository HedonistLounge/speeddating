// Basit: Rıza al -> form iframe göster
const agree = document.getElementById('agree');
const continueBtn = document.getElementById('continueBtn');
const start = document.getElementById('start');
const formwrap = document.getElementById('formwrap');

continueBtn.addEventListener('click', () => {
  if(!agree.checked){
    alert('Lütfen şartları ve gizlilik politikasını kabul edin.');
    return;
  }
  start.style.display = 'none';
  formwrap.style.display = 'block';
});
