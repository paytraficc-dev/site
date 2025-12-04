
// Popup logic
const openBtn = document.getElementById('openPopup');
const popupBg = document.getElementById('popupBg');
const popupClose = document.getElementById('popupClose');
const filterBtn = document.getElementById('filterBtn');

if(openBtn) openBtn.addEventListener('click', ()=> popupBg.style.display='flex');
if(popupClose) popupClose.addEventListener('click', ()=> popupBg.style.display='none');
if(popupBg) popupBg.addEventListener('click', (e)=>{ if(e.target === popupBg) popupBg.style.display='none'; });

// Filter button opens popup with prefilled values if needed
if(filterBtn){
  filterBtn.addEventListener('click', ()=> {
    const district = document.getElementById('f_district').value;
    const rooms = document.getElementById('f_rooms').value;
    const price = document.getElementById('f_price').value;
    popupBg.style.display='flex';
    const note = document.getElementById('leadNote');
    if(note) note.value = `Район: ${district}; Комнат: ${rooms}; Бюджет: ${price}`;
  });
}

// Send lead (placeholder) - replace with fetch to webhook
const sendBtn = document.getElementById('sendLead');
if(sendBtn){
  sendBtn.addEventListener('click', ()=>{
    const name = document.getElementById('leadName').value || '';
    const phone = document.getElementById('leadPhone').value || '';
    const note = document.getElementById('leadNote').value || '';
    if(!phone){ alert('Укажите телефон'); return; }
    console.log({name,phone,note});
    alert('Заявка принята. Мы свяжемся в течение 15 минут.');
    popupBg.style.display='none';
  });
}
