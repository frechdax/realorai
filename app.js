const commons = name => `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(name)}?width=900`;
const picsum = id => `https://picsum.photos/id/${id}/900/1200.jpg`;
const BASE = [
  {type:'ai', src:commons('This AI-generated woman does not exist.png'), source:'Wikimedia Commons · Stable Diffusion', note:'Dieses Bild ist dokumentiert KI-generiert. Achte auf kleine Details wie Beschriftungen, Accessoires und feine Übergänge.'},
  {type:'real', src:picsum(1005), source:'Lorem Picsum · echtes Foto', note:'Ein echtes Foto aus einem realen Fotobestand. Natürliche Bildfehler oder starke Bearbeitung bedeuten nicht automatisch KI.'},
  {type:'ai', src:commons('GAN Katze StyleGAN2.png'), source:'Wikimedia Commons · StyleGAN2', note:'Diese Katze wurde mit StyleGAN2 erzeugt. Bei älteren GAN-Bildern wirken Fell, Hintergrund und feine Kanten oft ungewöhnlich glatt.'},
  {type:'real', src:picsum(237), source:'Lorem Picsum · echtes Foto', note:'Ein echtes Foto. Tiere können durch geringe Tiefenschärfe oder starke Kompression fast künstlich wirken.'},
  {type:'ai', src:commons('Adobe Firefly generated realistic portrait.jpg'), source:'Wikimedia Commons · Adobe Firefly', note:'Dieses Porträt ist als KI-generiertes Bild dokumentiert. Moderne Generatoren können Haut und Licht bereits sehr überzeugend darstellen.'},
  {type:'real', src:picsum(1011), source:'Lorem Picsum · echtes Foto', note:'Ein echtes Foto. Spiegelungen, Gegenlicht und ungewöhnliche Perspektiven sind in realen Aufnahmen völlig normal.'},
  {type:'ai', src:commons('Midjourney artificial intelligence art.png'), source:'Wikimedia Commons · Midjourney', note:'Dieses Motiv wurde mit Midjourney erzeugt. Bei komplexen Szenen verraten kleine Strukturen und Übergänge oft mehr als der Gesamteindruck.'},
  {type:'real', src:picsum(1015), source:'Lorem Picsum · echtes Foto', note:'Ein echtes Landschaftsfoto. Dramatische Farben oder perfekte Komposition können auch durch Fotografie und Nachbearbeitung entstehen.'},
  {type:'ai', src:commons('Image made on midjourney.ai.png'), source:'Wikimedia Commons · Midjourney', note:'Dieses Bild ist als KI-generiertes Werk gekennzeichnet. Bei Straßenszenen lohnt sich ein Blick auf kleine Objekte und Schrift.'},
  {type:'real', src:picsum(1025), source:'Lorem Picsum · echtes Foto', note:'Ein echtes Foto. Fell und Augen können bei guten Kameras extrem klar wirken – ein sauberer Look ist kein verlässlicher KI-Hinweis.'},
  {type:'ai', src:commons("Room with an urealistic view on a forest landscape by AI; 'The Television's in Another Room'.jpg"), source:'Wikimedia Commons · Midjourney', note:'Diese Innenraumszene wurde mit Midjourney erzeugt. Architektur, Perspektive und Übergänge zwischen Möbeln sind gute Prüfstellen.'},
  {type:'real', src:picsum(1020), source:'Lorem Picsum · echtes Foto', note:'Ein echtes Foto. Bei schwierigen Bildern hilft es, mehrere Hinweise zusammen zu bewerten statt nur ein Detail.'}
];
let deck=[], index=0, score=0, streak=0, bestStreak=0, locked=false;
const $ = s => document.querySelector(s);
const card=$('#card'), stage=$('#stage'), image=$('#image'), nextImage=$('#nextImage'), feedback=$('#feedback');

function shuffle(a){
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}
function start(){
  deck=shuffle([...BASE]); index=0; score=0; streak=0; bestStreak=0; locked=false;
  $('#endScreen').classList.remove('show');
  $('#controls').style.visibility='visible';
  feedback.classList.remove('show');
  loadRound();
  updateHud();
}
function updateHud(){
  $('#scorePill').textContent=`${score} Punkte`;
  $('#streakPill').textContent=`🔥 ${streak}`;
  $('#progressBar').style.width=`${Math.min(index/deck.length*100,100)}%`;
}
function resetCard(){
  stage.classList.remove('dragging');
  card.style.transition='none';
  card.style.transform='translate(0,0) rotate(0deg)';
  card.style.opacity='1';
  $('#stampAI').style.opacity=0;
  $('#stampReal').style.opacity=0;
}
function loadRound(){
  locked=false; feedback.classList.remove('show'); resetCard();
  const item=deck[index];
  image.src=item.src;
  $('#roundText').textContent=`Runde ${index+1} von ${deck.length}`;
  const nxt=deck[index+1];
  if(nxt){ nextImage.src=nxt.src; $('#nextCard').style.display='block'; }
  else $('#nextCard').style.display='none';
  updateHud();
}
function animateOut(type){
  const dir=type==='real'?1:-1;
  card.style.transition='transform .34s cubic-bezier(.18,.82,.18,1), opacity .28s ease';
  card.style.transform=`translate(${dir*135}%, -10px) rotate(${dir*18}deg)`;
  card.style.opacity='.12';
  $('#nextCard').style.transform='scale(1) translateY(0)';
  $('#nextCard').style.filter='brightness(.9)';
}
function choose(type){
  if(locked)return;
  locked=true;
  stage.classList.remove('dragging');
  const item=deck[index], correct=type===item.type;
  if(correct){score++;streak++;bestStreak=Math.max(bestStreak,streak)}else streak=0;
  updateHud();
  const dir=type==='real'?1:-1;
  const stamp=type==='real'?$('#stampReal'):$('#stampAI');
  stamp.style.opacity=1;
  stamp.style.transform=`rotate(${dir*10}deg) scale(1)`;
  animateOut(type);
  $('#resultText').textContent=correct?'✓ Richtig!':'✕ Leider falsch';
  $('#resultText').className='result '+(correct?'good':'bad');
  $('#truthText').textContent=item.type==='ai'?'Auflösung: KI':'Auflösung: ECHT';
  $('#explanation').textContent=`${item.note} Quelle: ${item.source}`;
  setTimeout(()=>feedback.classList.add('show'),220);
}
function next(){
  if(!locked)return;
  index++;
  if(index>=deck.length){finish();return}
  $('#nextCard').style.transition='none';
  $('#nextCard').style.transform='scale(.955) translateY(14px)';
  $('#nextCard').style.filter='brightness(.72)';
  loadRound();
}
function finish(){
  feedback.classList.remove('show');
  $('#controls').style.visibility='hidden';
  $('#progressBar').style.width='100%';
  const pct=Math.round(score/deck.length*100);
  const previous=Number(localStorage.getItem('realorai_best')||0);
  const best=Math.max(previous,pct);
  localStorage.setItem('realorai_best',String(best));
  $('#percent').textContent=`${pct}%`;
  $('#summary').textContent=`${score} von ${deck.length} richtig · beste Serie ${bestStreak}`;
  $('#bestLine').textContent=pct>=previous&&pct>0?`Neuer Bestwert: ${best}% 🎉`:`Dein Bestwert auf diesem Gerät: ${best}%`;
  $('#endEmoji').textContent=pct>=85?'🏆':pct>=65?'🧠':pct>=45?'🕵️':'🤖';
  $('#endScreen').classList.add('show');
}
$('#aiBtn').onclick=()=>choose('ai');
$('#realBtn').onclick=()=>choose('real');
$('#nextBtn').onclick=next;
$('#restartBtn').onclick=start;
$('#tutorialBtn').onclick=()=>{localStorage.setItem('realorai_tutorial','1');$('#tutorial').classList.add('hide')};
if(localStorage.getItem('realorai_tutorial')==='1')$('#tutorial').classList.add('hide');
$('#shareBtn').onclick=async()=>{
  const pct=Math.round(score/deck.length*100);
  const txt=`REAL OR AI? – Ich hatte ${score}/${deck.length} richtig (${pct}%). Schaffst du mehr?`;
  const url=window.location.origin;
  try{
    if(navigator.share) await navigator.share({title:'REAL OR AI?',text:txt,url});
    else { await navigator.clipboard.writeText(`${txt} ${url}`); showToast('Ergebnis + Link kopiert!'); }
  }catch(e){}
};
function showToast(t){
  const el=$('#toast'); el.textContent=t; el.classList.add('show');
  setTimeout(()=>el.classList.remove('show'),1600);
}
let sx=0,sy=0,dx=0,drag=false,startTime=0;
card.addEventListener('pointerdown',e=>{
  if(locked)return;
  drag=true; sx=e.clientX; sy=e.clientY; dx=0; startTime=performance.now();
  stage.classList.add('dragging');
  try{card.setPointerCapture(e.pointerId)}catch(_){}
  card.style.transition='none';
});
card.addEventListener('pointermove',e=>{
  if(!drag||locked)return;
  dx=e.clientX-sx;
  const dy=(e.clientY-sy)*.12;
  const rot=Math.max(-15,Math.min(15,dx/16));
  card.style.transform=`translate(${dx}px,${dy}px) rotate(${rot}deg)`;
  const a=Math.min(Math.abs(dx)/80,1);
  $('#stampReal').style.opacity=dx>0?a:0;
  $('#stampAI').style.opacity=dx<0?a:0;
  if(dx>0)$('#stampReal').style.transform=`rotate(10deg) scale(${.85+a*.15})`;
  if(dx<0)$('#stampAI').style.transform=`rotate(-10deg) scale(${.85+a*.15})`;
});
function releaseSwipe(){
  if(!drag||locked)return;
  drag=false; stage.classList.remove('dragging');
  const elapsed=Math.max(1,performance.now()-startTime), velocity=Math.abs(dx)/elapsed;
  const threshold=Math.min(105,innerWidth*.24);
  if(Math.abs(dx)>threshold||velocity>.65) choose(dx>0?'real':'ai');
  else{
    card.style.transition='transform .22s cubic-bezier(.2,.8,.2,1)';
    card.style.transform='translate(0,0) rotate(0deg)';
    $('#stampReal').style.opacity=0; $('#stampAI').style.opacity=0;
  }
  dx=0;
}
card.addEventListener('pointerup',releaseSwipe);
card.addEventListener('pointercancel',releaseSwipe);
card.addEventListener('lostpointercapture',()=>{if(drag&&!locked)releaseSwipe()});
window.addEventListener('keydown',e=>{
  if(e.key==='ArrowLeft')choose('ai');
  if(e.key==='ArrowRight')choose('real');
  if((e.key==='Enter'||e.key===' ')&&locked)next();
});
BASE.forEach(x=>{const i=new Image();i.src=x.src});
start();
