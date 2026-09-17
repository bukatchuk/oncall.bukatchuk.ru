(function(){
  try{
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.08});
    document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
  }catch(e){
    document.querySelectorAll('.rv').forEach(function(el){el.classList.add('in')});
  }
  try{ document.getElementById('yr').textContent=new Date().getFullYear(); }catch(e){}
  try{
    var b=document.getElementById('burger'),n=document.getElementById('nav');
    b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false')});
    n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');b.setAttribute('aria-expanded','false')}});
  }catch(e){}
  try{
    var c=document.getElementById('clock');
    if(c){var tick=function(){var d=new Date(),u=d.getTime()+d.getTimezoneOffset()*6e4,m=new Date(u+108e5);
      c.textContent=String(m.getHours()).padStart(2,'0')+':'+String(m.getMinutes()).padStart(2,'0')+':'+String(m.getSeconds()).padStart(2,'0')+' MSK';};
      tick();setInterval(tick,1000);}
  }catch(e){}
})();
