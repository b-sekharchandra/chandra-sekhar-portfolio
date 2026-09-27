const menu=document.querySelector('.menu');const nav=document.querySelector('.nav');menu?.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

// Interactive profile tabs
const profileTabs=document.querySelectorAll('.profile-tab');
const profilePanels=document.querySelectorAll('.profile-panel');
profileTabs.forEach(tab=>tab.addEventListener('click',()=>{
  const target=tab.dataset.profileTab;
  profileTabs.forEach(t=>{t.classList.toggle('active',t===tab);t.setAttribute('aria-selected',t===tab?'true':'false')});
  profilePanels.forEach(panel=>panel.classList.toggle('hidden',panel.dataset.profilePanel!==target));
}));

// Project filters
const filterButtons=document.querySelectorAll('.filter-btn');
const projectCards=document.querySelectorAll('.project-card[data-category]');
filterButtons.forEach(button=>button.addEventListener('click',()=>{
  const filter=button.dataset.filter;
  filterButtons.forEach(b=>b.classList.toggle('active',b===button));
  projectCards.forEach(card=>card.classList.toggle('is-hidden',filter!=='all' && card.dataset.category!==filter));
}));

// Reveal sections as they enter the viewport
const revealItems=document.querySelectorAll('.section .container, .resume-banner-inner');
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target)}});
  },{threshold:.08});
  revealItems.forEach(item=>{item.classList.add('reveal');observer.observe(item)});
}else{revealItems.forEach(item=>item.classList.add('revealed'));}
