(function(){
var p=document.getElementById('player'),b=document.getElementById('playBtn'),f=document.getElementById('gameFrame'),fs=document.getElementById('fsBtn');
if(b)b.addEventListener('click',function(){f.src=f.dataset.src;p.classList.add('playing');f.focus();});
if(fs)fs.addEventListener('click',function(){var el=p;(el.requestFullscreen||el.webkitRequestFullscreen||function(){}).call(el);});
})();
