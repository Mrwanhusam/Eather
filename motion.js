(function(){
var d=document,root=d.documentElement;
if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion:reduce)').matches){root.classList.remove('js');return}
var io=new IntersectionObserver(function(es){es.forEach(function(e){var t=e.target;if(e.isIntersecting){t.classList.add('in')}else{t.classList.remove('in')}})},{threshold:0,rootMargin:'0px 0px -6% 0px'});
var grid=d.getElementById('grid');
var SEL=grid?'section h2,section>.inc>div,section>.filters,.card:not(.rv-done)':'main>*,.intro>*,.item>*,.pb,.r';
function tag(){d.querySelectorAll(SEL).forEach(function(el,i){if(el.__rv)return;el.__rv=1;
if(el.classList.contains('card')){el.style.setProperty('--d',(Array.prototype.indexOf.call(el.parentNode.children,el)%4)*.07+'s')}
else if(!grid){el.style.setProperty('--d',Math.min(Array.prototype.indexOf.call(el.parentNode.children,el),6)*.06+'s')}
el.classList.add('rv');io.observe(el)})}
tag();
if(grid)new MutationObserver(tag).observe(grid,{childList:true});
})();
