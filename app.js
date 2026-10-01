const commons = name => `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(name)}?width=900`;
const picsum = id => `https://picsum.photos/id/${id}/900/1200.jpg`;
const BASE = [
  {type:'ai', src:commons('This AI-generated woman does not exist.png'), source:'Wikimedia Commons · Stable Diffusion 1.5', reason:'Die Dateibeschreibung dokumentiert das Bild als Stable-Diffusion-Erzeugung. Sichtbare Hinweise sind deformierte Hände, unleserliche Schilder und unscharf erfundene Produktdetails.'},
  {type:'ai', src:commons('Midjourney artificial intelligence art.png'), source:'Wikimedia Commons · Midjourney', reason:'Das Bild ist auf Wikimedia Commons ausdrücklich als Midjourney-generiert dokumentiert. Auffällig sind die extrem glatten Übergänge und die unrealistisch perfekte Lichtstimmung.'},
  {type:'ai', src:commons('A man having an idea before the light bulp.jpg'), source:'Wikimedia Commons · Stable Diffusion', reason:'Die Datei ist in der Commons-Kategorie für Stable-Diffusion-Bilder gelistet. Typische Hinweise sind leicht widersprüchliche Formen und sehr gleichmäßige Texturen.'},
  {type:'ai', src:commons('AI Artwork of Mountains.jpg'), source:'Wikimedia Commons · Stable Diffusion', reason:'Die Herkunft ist als Stable-Diffusion-Bild dokumentiert. Die Bergstrukturen und Lichtverteilung wirken stellenweise zu regelmäßig und malerisch geglättet.'},
  {type:'ai', src:commons('CyberpunkHumanoidChef (SD3.5).webp'), source:'Wikimedia Commons · Stable Diffusion 3.5', reason:'Schon der Dateieintrag weist Stable Diffusion 3.5 aus. Kleine Objektformen, Materialübergänge und Details am Körper sind gute KI-Hinweise.'},
  {type:'ai', src:commons('Late Afternoon Cloudy Valley (SD3.5).webp'), source:'Wikimedia Commons · Stable Diffusion 3.5', reason:'Das Bild ist als SD3.5-Erzeugung dokumentiert. Wolken, Gelände und Licht sehen plausibel aus, zeigen aber ungewöhnlich homogene Übergänge.'},
  {type:'ai', src:commons('Scenic Valley in the Afternoon (SD1.5).jpg'), source:'Wikimedia Commons · Stable Diffusion 1.5', reason:'Die Quelle kennzeichnet es als Stable-Diffusion-1.5-Bild. Landschaftsdetails verschmelzen an einigen Stellen statt klaren natürlichen Strukturen zu folgen.'},
  {type:'ai', src:commons('SD - Photo of a beautiful girl dancing 768px.png'), source:'Wikimedia Commons · Stable Diffusion', reason:'Die Datei ist ausdrücklich als Stable-Diffusion-Foto gekennzeichnet. Anatomie, Finger, Stoffkanten und feine Hintergrunddetails sind typische Prüfstellen.'},
  {type:'ai', src:commons('SD - Stock photo of Asian male with Caucasian female.jpg'), source:'Wikimedia Commons · Stable Diffusion', reason:'Dieses vermeintliche Stockfoto ist als Stable-Diffusion-Ausgabe dokumentiert. Haut, Haare, Hände und Übergänge zwischen Personen können unnatürlich wirken.'},
  {type:'ai', src:commons('SD - Sportscar Aston Martin Speedster racing on racetrack in countryside 1024px.png'), source:'Wikimedia Commons · Stable Diffusion', reason:'Die Datei stammt laut Commons aus Stable Diffusion. Fahrzeuggeometrie, Logos, Räder und Reflexionen sind typische Stellen für generative Fehler.'},
  {type:'ai', src:commons('Geburtstagskuchen mit 3 Kerzen.jpg'), source:'Wikimedia Commons · Stable Diffusion', reason:'Die Datei ist in der Stable-Diffusion-Kategorie geführt. Bei KI-Food-Bildern verraten sich oft Dekorationen, Kerzenformen und wiederholte Texturen.'},
  {type:'ai', src:commons('Robot chef cooking with spices.png'), source:'Wikimedia Commons · Stable Diffusion', reason:'Das Bild ist als Stable-Diffusion-Erzeugung dokumentiert. Hände beziehungsweise Greifer, Kochutensilien und kleine Zutaten zeigen oft unlogische Übergänge.'},
  {type:'ai', src:commons('Green sustainable city with lots of public transport and green spaces.jpg'), source:'Wikimedia Commons · Stable Diffusion', reason:'Die Quelle ordnet das Bild Stable Diffusion zu. Architektur, Fahrzeuge und sich wiederholende Fensterstrukturen sind typische KI-Prüfstellen.'},
  {type:'ai', src:commons('Overgrown city, post-apocalyptic.jpg'), source:'Wikimedia Commons · Stable Diffusion', reason:'Die Datei ist als Stable-Diffusion-Bild gelistet. Vegetation und Gebäudestrukturen verschmelzen teilweise auf physikalisch unplausible Weise.'},
  {type:'ai', src:commons('Solarpunk, a positive possible near-future.jpg'), source:'Wikimedia Commons · Stable Diffusion', reason:'Das Bild ist dokumentiert KI-generiert. Achte auf wiederholte Architekturdetails, uneindeutige Fahrzeuge und sehr gleichmäßige Materialtexturen.'},
  {type:'ai', src:commons('Solarpunk utopia with sustainable transport.jpg'), source:'Wikimedia Commons · Stable Diffusion', reason:'Die Commons-Herkunft weist Stable Diffusion aus. Besonders Verkehrsmittel, Fenster, Geländer und kleine Personen können inkonsistent sein.'},
  {type:'ai', src:commons('Cyborg elf, science fantasy, Stable Diffusion AI art.png'), source:'Wikimedia Commons · Stable Diffusion', reason:'Der Dateiname und die Commons-Kategorisierung dokumentieren Stable Diffusion. Schmuck, Ohren, Haare und metallische Übergänge sind typische KI-Merkmale.'},
  {type:'ai', src:commons('Fantastic background illustration created by Stable Diffusion.webp'), source:'Wikimedia Commons · Stable Diffusion', reason:'Die Datei ist ausdrücklich als mit Stable Diffusion erzeugte Illustration bezeichnet. Strukturen wirken lokal plausibel, ergeben global aber oft keine konsistente Geometrie.'},
  {type:'ai', src:commons('Frutiger aero-style wallpaper.png'), source:'Wikimedia Commons · Stable Diffusion', reason:'Das Bild ist in der Stable-Diffusion-Kategorie dokumentiert. Sehr glatte Oberflächen, perfekte Farbverläufe und künstlich saubere Details sind auffällig.'},
  {type:'ai', src:commons('Toxic acidic rain in the city, cyberpunk.png'), source:'Wikimedia Commons · Stable Diffusion', reason:'Die Quelle führt das Bild als Stable-Diffusion-Erzeugung. Neonreflexionen, Beschilderung und Architekturdetails zeigen generative Inkonsistenzen.'},

  {type:'real', src:picsum(1005), source:'Lorem Picsum · echtes Foto'},
  {type:'real', src:picsum(237), source:'Lorem Picsum · echtes Foto'},
  {type:'real', src:picsum(1011), source:'Lorem Picsum · echtes Foto'},
  {type:'real', src:picsum(1015), source:'Lorem Picsum · echtes Foto'},
  {type:'real', src:picsum(1025), source:'Lorem Picsum · echtes Foto'},
  {type:'real', src:picsum(1020), source:'Lorem Picsum · echtes Foto'},
  {type:'real', src:picsum(1003), source:'Lorem Picsum · echtes Foto'},
  {type:'real', src:picsum(1024), source:'Lorem Picsum · echtes Foto'},
  {type:'real', src:picsum(1035), source:'Lorem Picsum · echtes Foto'},
  {type:'real', src:picsum(1039), source:'Lorem Picsum · echtes Foto'},
  {type:'real', src:picsum(1040), source:'Lorem Picsum · echtes Foto'},
  {type:'real', src:picsum(1043), source:'Lorem Picsum · echtes Foto'},
  {type:'real', src:picsum(1050), source:'Lorem Picsum · echtes Foto'},
  {type:'real', src:picsum(1059), source:'Lorem Picsum · echtes Foto'},
  {type:'real', src:picsum(1060), source:'Lorem Picsum · echtes Foto'},
  {type:'real', src:picsum(1062), source:'Lorem Picsum · echtes Foto'},
  {type:'real', src:picsum(1074), source:'Lorem Picsum · echtes Foto'},
  {type:'real', src:picsum(1080), source:'Lorem Picsum · echtes Foto'},
  {type:'real', src:picsum(1081), source:'Lorem Picsum · echtes Foto'},
  {type:'real', src:picsum(1084), source:'Lorem Picsum · echtes Foto'}
];
const ROUNDS_PER_GAME=15;
let deck=[], index=0, score=0, streak=0, bestStreak=0, locked=false, autoNextTimer=null;
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
  if(autoNextTimer){clearTimeout(autoNextTimer);autoNextTimer=null}
  deck=shuffle([...BASE]).slice(0,ROUNDS_PER_GAME); index=0; score=0; streak=0; bestStreak=0; locked=false;
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
  if(autoNextTimer){clearTimeout(autoNextTimer);autoNextTimer=null}
  locked=false;
  feedback.classList.remove('show');
  $('#nextBtn').style.display='none';
  $('#explanation').style.display='none';
  resetCard();
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
  $('#resultText').textContent=correct?'✓ Richtig':'✕ Falsch';
  $('#resultText').className='result '+(correct?'good':'bad');
  $('#truthText').textContent=item.type==='ai'?'Es war: KI':'Es war: Echt';
  if(item.type==='ai'){
    $('#explanation').textContent=`Warum KI? ${item.reason}`;
    $('#explanation').style.display='block';
  }else{
    $('#explanation').textContent='';
    $('#explanation').style.display='none';
  }
  $('#nextBtn').style.display='none';
  setTimeout(()=>feedback.classList.add('show'),180);
  autoNextTimer=setTimeout(()=>{
    feedback.classList.remove('show');
    next();
  },item.type==='ai'?6000:2600);
}
function next(){
  if(!locked)return;
  if(autoNextTimer){clearTimeout(autoNextTimer);autoNextTimer=null}
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
