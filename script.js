// script.js - simple mobile menu + smooth transitions
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('mobile-btn');
  const menu = document.getElementById('mobile-menu');
  if(btn && menu){
    btn.addEventListener('click', ()=> {
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
  }

  // Simple smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({behavior:'smooth'});
      }
    });
  });
});
