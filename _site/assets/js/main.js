
// Simple local time updater & theme tweak
function updateClock(){
  const el = document.querySelector('#local-time');
  if(!el) return;
  const now = new Date();
  el.textContent = now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true });
}
setInterval(updateClock, 1000); updateClock();

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth'});
    }
  })
});
