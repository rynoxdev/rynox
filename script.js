const items=document.querySelectorAll('header,section');
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting)e.target.classList.add('show');
  });
},{threshold:.2});
items.forEach(i=>obs.observe(i));
