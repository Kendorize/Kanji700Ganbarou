
// Isi dua nilai ini dari Supabase Dashboard > Project Settings > API.
// Gunakan publishable key (atau anon key lama), JANGAN gunakan service_role/secret key.
// Harus URL dasar proyek, tanpa /rest/v1 atau /realtime/v1.
const SUPABASE_URL = 'https://ridlgahoavhguwgyrkip.supabase.co';
const SUPABASE_KEY = 'sb_publishable_6FdItz1UEkNqvjlscuGk9g_jBb6ada_'; const TURN_URL = '', TURN_USER = '', TURN_PASS = ''; const XIR_CH = 'channel918d7f54', XIR_ID = 'Kendorize', XIR_SEC = '8fd99724-c482-11f1-9163-4a5f0e7f2f76';
const $=s=>document.querySelector(s);
const SKIN=['#ffe0c7','#f7cba5','#e9ad82','#c98a5f','#9a6240','#6e4430'];
const HAIRC=['#2b2230','#5b3a29','#8a5a3b','#c98f55','#f0d28a','#e8e8ef','#ef7d6b','#f48fb1','#7fb7ee','#b39ddb','#111111','#3b2417','#7b1e1e','#d4381f','#ff9f1c','#2e7d6b','#3a5fcd','#8e44ad','#7ee0c3','#9a9aa6'];
const CLR=['#ff9eb5','#ffb88a','#ffe27a','#a8e6a1','#8fd3f4','#a99bf5','#f5f5f5','#4a4a5a','#c7845a','#e45b5b','#e63946','#ff7f50','#f9c74f','#2a9d8f','#1d4e89','#6a4c93','#e56fa6','#8bc34a','#795548','#111111','#9e9e9e','#7b1e1e','#00bcd4','#f4e9d1'];
const BOTC=['#6b8fc7','#34425f','#8d7b5a','#4a4a5a','#f4f0e8','#e07a9a','#7aa889','#b57a5a','#1b2a49','#111111','#7b1e1e','#2a7f62','#c9a66b','#9e9e9e','#6a4c93','#e63946'];
const SHC=['#f5f5f5','#3b3b48','#8a5a3b','#e45b5b','#6b8fc7','#f4b6c2','#f0d28a','#7fbf9a'];
const MI=(x,y,w,h,s)=>{const a=[x,y,w,h],b=[24-x-w,y,w,h];if(s!==undefined){a.push(s);b.push(s)}return[a,b]};
const C=[[6,2,12,3],[5,3,1,6],[18,3,1,6]];
// [nama, di belakang kepala, di depan kepala, ikat/aksen]. 0-4 = cowok, 5-9 = cewek
const HR=[
['Wolfcut',[[5,8,14,9],[6,17,3,1],[11,17,3,1],[15,17,3,1]],[...C,[7,1,3,1],[12,1,4,1],[9,0,3,1],...MI(6,5,5,2),[11,5,2,1],...MI(5,6,2,8),...MI(4,11,2,3),[8,5,1,3,-.25],[15,5,1,3,-.25]]],
['Buzzcut',[],[[7,2,10,1],[6,3,12,2],...MI(6,5,1,3),[7,3,10,1,.2]]],
['Comma Hair',[],[...C,[8,1,8,1],[6,5,3,2],[9,5,7,2],[16,5,2,2],[9,7,3,1],[10,8,1,1],[13,7,2,1,-.25]]],
['Messy Hair',[[5,6,14,7]],[...C,[6,0,2,2],[9,-1,2,3],[12,0,3,2],[16,0,2,2],[4,3,2,2],[19,4,1,2],[6,5,3,3],[10,5,2,2],[13,5,2,1],[15,5,3,3],[4,6,2,4],[18,6,2,4],[8,1,2,1,.3]]],
['Curtain Hair',[[5,6,14,7]],[...C,...MI(6,5,4,2),...MI(6,7,2,5),...MI(5,10,2,3),[11,3,2,4,-.35]]],
['Curtain Bangs',[[4,3,16,16]],[...C,...MI(6,5,4,2),...MI(6,7,2,3),...MI(4,5,3,11),[11,3,2,3,-.3]]],
['Long Layers',[[4,3,16,14],[3,12,3,6],[18,12,3,6],[5,17,4,3],[15,17,4,3]],[...C,[6,5,6,2],[12,5,6,1],[7,7,3,1],...MI(4,5,2,12),[10,2,3,1,.3]]],
['Bob Cut',[[4,3,16,12]],[...C,[6,5,12,2],...MI(4,5,3,10)]],
['Shaggy Cut',[[4,4,16,13],[3,13,2,3],[19,13,2,3],[7,17,3,2],[14,17,3,2]],[...C,[7,1,3,1],[13,1,3,1],[6,5,3,3],[9,5,2,2],[12,5,2,3],[15,5,3,2],[17,7,2,2],...MI(4,6,2,8),...MI(3,10,2,3)]],
['Ponytail',[[17,3,3,3],[19,6,3,12],[18,17,3,3]],[...C,...MI(6,5,5,2),[11,5,2,1],[8,1,6,1,.3]],[[17,3,2,2]]]];
const N={hair:HR.map(h=>h[0]),
top:['Kaos Polos','Kaos Polos','Hoodie','Bomber Jacket','Flannel','Knit Sweater','Seragam','Varsity Jacket','Dress','Crop Top'],
bot:['Celana Pendek','Jogger','Cargo','Sarung Sholat','Overall','Legging','Mini Skirt','Rok Panjang','Rok Plisa','Rok A-Line'],
shoe:['Sneakers','Boots','Formal','Sandal','High Top','Loafer','Wellington','Slip On'],
acc:['Tanpa','Topi','Kacamata','Kacamata Hitam','Headphone','Bando','Masker','Syal','Sayap','Kuping Kucing']};
const BG=[['Permen Pink','#ffd3e6','#fff0f6','\u2665','#ff9cc2','#f6b8d0'],['Langit Biru','#c7e6ff','#effaff','\u2601','#ffffff','#a8d8a0'],['Mint Segar','#c9f2dc','#f1fff7','\u273F','#8fdcb0','#b8e6a8'],['Lavender','#e1d4ff','#f6f0ff','\u2605','#b9a3f5','#cdbff0'],['Peach Sunset','#ffd9b8','#ffe8f0','\u25CF','#ffb38a','#f6c6a0'],['Lemon Pop','#fff1a8','#fffbe3','\u266A','#f5d24a','#f2e08a'],['Bubble Tea','#f1dccb','#fff3e8','\u25CB','#c99a7a','#e4c6a8'],['Malam Pastel','#bfc8ff','#e8d6ff','\u2726','#fff4a8','#a9b4f0']];

const lo=document.createElement('canvas');lo.width=28;lo.height=36;
const L=lo.getContext('2d',{willReadFrequently:true});
function mix(h,a){const n=parseInt(h.slice(1),16),f=c=>Math.round(a>0?c+(255-c)*a:c*(1+a));
 return '#'+[n>>16,(n>>8)&255,n&255].map(f).map(v=>v.toString(16).padStart(2,'0')).join('')}

const R=(col,x,y,w,h)=>{L.fillStyle=col;L.fillRect(x,y,w,h)};
const S=(col,x,y,w,h)=>{R(col,x,y,w,h);R(col,24-x-w,y,w,h)};
const hp=(hc,r)=>R(r.length>4?mix(hc,r[4]):hc,r[0],r[1],r[2],r[3]);
// sarung sholat bermotif kotak-kotak (plaid)
const sarung=(W,x,y,w,h)=>{const dk=mix(W,-.32),lt=mix(W,.4),dd=mix(W,-.55);R(W,x,y,w,h);
 for(let j=1;j<h;j++)for(let i=0;i<w;i++){const a=(i-1)%4==0,b=(j-1)%3==0;if(a&&b)R(dd,x+i,y+j,1,1);else if(a)R(dk,x+i,y+j,1,1);else if(b)R(lt,x+i,y+j,1,1)}
 R(mix(W,-.5),x,y,w,1);R(mix(W,-.3),x,y+h-1,w,1)};
const mr=document.createElement('canvas');mr.width=28;mr.height=36;const MR=mr.getContext('2d');

// Rambut tampak belakang: [rambut, ikat]
const BKH=[
[[[7,2,10,12],[6,3,12,10],[4,8,16,9],[5,17,3,1],[10,17,4,1],[16,17,3,1],[8,9,1,6,-.25],[11,6,1,9,-.25],[15,9,1,6,-.25]],[]],
[[[7,2,10,3],[6,3,12,7],[7,10,10,2,.3]],[]],
[[[7,2,10,11],[6,3,12,8],[6,11,12,1,.3],[11,4,2,1,-.25],[10,5,1,2,-.25]],[]],
[[[7,1,10,12],[6,3,12,9],[5,1,2,2],[8,-1,2,3],[12,-1,3,2],[16,0,3,2],[9,5,1,6,-.25],[13,4,1,7,-.25],[16,6,1,4,-.25],[6,12,12,2]],[]],
[[[7,2,10,11],[6,3,12,9],[5,6,14,7],[12,3,1,10,-.25]],[]],
[[[7,2,10,12],[6,3,12,10],[4,4,16,15],[9,8,1,10,-.2],[14,8,1,10,-.2],[12,4,1,12,-.2]],[]],
[[[7,2,10,12],[6,3,12,10],[4,3,16,14],[3,12,18,7],[4,19,6,2],[14,19,6,2],[10,18,4,2],[8,10,1,9,-.2],[12,8,1,11,-.2],[16,10,1,9,-.2]],[]],
[[[7,2,10,12],[6,3,12,10],[4,4,16,9],[5,12,14,3],[7,15,10,1,-.2]],[]],
[[[7,2,10,12],[6,3,12,10],[4,4,16,13],[3,11,18,5],[5,16,3,2],[10,17,4,2],[16,16,3,2],[7,1,3,1],[13,1,3,1],[8,8,1,7,-.22],[12,6,1,10,-.22],[15,9,1,7,-.22]],[]],
[[[7,2,10,11],[6,3,12,8],[10,0,4,3],[10,3,4,2],[9,5,6,6],[10,11,4,7],[11,18,2,2],[12,6,1,11,-.25]],[[9,3,6,1]]]];

// Rambut tampak samping (menghadap kanan): [belakang, depan, ikat, tutup telinga]
const SB=[[6,2,12,3],[5,3,7,9]];
const SD=[
[[[4,6,8,11],[3,12,3,3],[4,16,3,2]],SB.concat([[7,0,3,2],[11,0,4,2],[12,5,5,2],[13,7,3,1],[8,5,1,6,-.25],[10,4,1,5,-.25],[4,9,3,6]]),[],true],
[[],[[6,2,12,3],[5,3,6,6],[12,5,5,1],[6,3,10,1,.2]],[],false],
[[],SB.concat([[8,1,8,1],[12,5,5,2],[14,7,2,1],[15,8,1,1]]),[],false],
[[[4,5,3,6]],SB.concat([[5,1,2,2],[8,-1,2,3],[11,0,2,2],[14,-1,2,3],[16,1,2,2],[12,5,5,2],[15,7,2,1],[3,8,2,3],[7,4,1,6,-.25]]),[],false],
[[[4,5,8,9]],SB.concat([[12,5,5,2],[9,5,4,7],[11,7,2,4,-.25]]),[],true],
[[[3,4,9,16]],SB.concat([[11,5,5,2],[10,7,3,4],[9,5,1,10,-.2]]),[],true],
[[[3,4,9,17],[2,14,3,5]],SB.concat([[12,5,5,2],[13,7,3,1],[8,6,1,12,-.2]]),[],false],
[[[4,4,8,11]],SB.concat([[12,5,6,2],[10,9,2,5]]),[],true],
[[[3,5,9,12],[2,15,3,3],[5,17,3,2]],SB.concat([[7,0,2,2],[11,0,3,2],[14,1,2,1],[12,5,5,2],[14,7,2,1],[16,7,1,2]]),[],true],
[[[1,1,5,4],[0,4,4,11],[1,14,3,3]],SB.concat([[12,5,5,2],[13,7,2,1]]),[[5,2,2,3]],false]];

// ===== Gaya rambut modern (mengganti indeks 1,2,3,8,9) =====
const MH=(i,nm,bk,fr,tie,bkh,sd)=>{HR[i]=[nm,bk,fr,tie];BKH[i]=bkh;SD[i]=sd};
MH(1,'Two-Block',[],[...C,[7,1,10,1],[8,0,8,1],[7,5,10,2],[7,7,2,1],[15,7,2,1],[11,5,1,2,-.25],[9,5,1,1,-.25],[14,5,1,1,-.25]],[],
 [[[7,1,10,3],[6,2,12,9],[8,0,8,1],[7,11,10,1,.3]],[]],
 [[],SB.concat([[7,1,10,1],[8,0,8,1],[12,5,7,2],[11,7,1,1]]),[],false]);
MH(2,'Textured Crop',[],[...C,[8,0,2,1],[11,0,3,1],[7,1,10,1],[7,5,2,2],[9,5,2,1],[11,5,3,2],[14,5,3,1],[16,5,2,2],[10,7,1,1],[13,7,1,1],[8,5,1,1,-.25],[15,5,1,1,.3]],[],
 [[[7,1,10,3],[6,2,12,8],[8,0,2,1],[11,0,3,1],[6,10,12,1,.3],[10,4,1,2,-.25],[14,3,1,3,-.25]],[]],
 [[],SB.concat([[8,0,2,1],[11,0,3,1],[7,1,9,1],[12,5,2,2],[14,5,3,1],[16,5,2,2],[13,7,1,1],[8,5,1,5,-.25]]),[],false]);
MH(3,'Slick Back',[],[[6,2,12,3],[5,3,1,4],[18,3,1,4],[7,1,10,1],[8,0,8,1],[9,-1,6,1],[9,1,1,3,.3],[12,0,1,4,.3],[15,1,1,3,.3],[7,5,2,1,-.3],[15,5,2,1,-.3]],[],
 [[[7,1,10,3],[6,2,12,9],[8,0,8,1],[9,-1,6,1],[9,3,1,7,.25],[12,2,1,8,.25],[15,3,1,7,.25],[7,11,10,1,-.25]],[]],
 [[],SB.concat([[8,0,8,1],[9,-1,6,1],[7,1,9,1],[12,5,5,1],[8,2,1,4,.3],[10,1,1,4,.3],[12,1,1,3,.3]]),[],false]);
MH(8,'Hime Cut',[[4,3,16,17],[3,14,2,5],[19,14,2,5]],[...C,[6,5,12,2],...MI(4,7,2,7),[9,5,1,2,-.2],[14,5,1,2,-.2]],[],
 [[[7,2,10,11],[6,3,12,10],[4,4,16,16],[3,14,2,5],[19,14,2,5],[8,8,1,10,-.2],[12,6,1,13,-.2],[15,8,1,10,-.2]],[]],
 [[[3,4,9,16],[2,13,3,5]],SB.concat([[12,5,6,2],[10,7,3,6],[9,5,1,10,-.2]]),[],true]);
MH(9,'Twin Buns',[],[...MI(3,0,4,4),...MI(4,1,1,1,.3),...C,[6,5,12,1],[7,6,3,1],[14,6,3,1],[11,5,1,2,-.25]],[[5,3,2,1],[17,3,2,1]],
 [[[7,2,10,11],[6,3,12,8],[3,0,4,4],[17,0,4,4],[4,1,1,1,.3],[19,1,1,1,.3],[7,11,10,1,-.2]],[[5,3,2,1],[17,3,2,1]]],
 [[],SB.concat([[4,0,5,4],[5,1,1,1,.3],[12,5,6,1],[8,6,3,1]]),[[5,3,3,1]],false]);
MH(10,'Ivy League',[],[...C,[7,1,10,1],[7,5,5,2],[12,5,5,1],[10,2,1,3,-.3],[14,3,3,1,.25]],[],
 [[[7,1,10,3],[6,2,12,8],[6,10,12,1,.3],[10,2,1,3,-.3]],[]],
 [[],SB.concat([[7,1,9,1],[12,5,6,2],[11,3,1,2,-.3],[8,10,3,1,.3]]),[],false]);
MH(11,'Buzzcut',[],[[7,2,10,1],[6,3,12,2],...MI(6,5,1,3),[7,3,10,1,.2]],[],
 [[[7,2,10,3],[6,3,12,7],[7,10,10,2,.3]],[]],
 [[],[[6,2,12,3],[5,3,6,6],[12,5,5,1],[6,3,10,1,.2]],[],false]);
MH(12,'Messy Hair',[[5,6,14,7]],[...C,[6,0,2,2],[9,-1,2,3],[12,0,3,2],[16,0,2,2],[4,3,2,2],[19,4,1,2],[6,5,3,3],[10,5,2,2],[13,5,2,1],[15,5,3,3],[4,6,2,4],[18,6,2,4],[8,1,2,1,.3]],[],
 [[[7,1,10,12],[6,3,12,9],[5,1,2,2],[8,-1,2,3],[12,-1,3,2],[16,0,3,2],[9,5,1,6,-.25],[13,4,1,7,-.25],[16,6,1,4,-.25],[6,12,12,2]],[]],
 [[[4,5,3,6]],SB.concat([[5,1,2,2],[8,-1,2,3],[11,0,2,2],[14,-1,2,3],[16,1,2,2],[12,5,5,2],[15,7,2,1],[3,8,2,3],[7,4,1,6,-.25]]),[],false]);
MH(13,'Pixie Cut',[],[...C,[7,1,10,1],[8,0,6,1],[6,5,8,2],[14,5,3,1],[6,7,2,2],[17,6,1,3],[11,5,1,2,-.25]],[],
 [[[7,1,10,3],[6,2,12,9],[6,11,12,2],[8,0,6,1],[12,3,1,6,-.25]],[]],
 [[],SB.concat([[8,0,6,1],[7,1,9,1],[12,5,5,2],[13,7,2,1],[5,10,5,2]]),[],false]);
MH(14,'Medium Wolf Cut',[[4,4,16,12],[3,12,2,4],[19,12,2,4],[5,15,3,2],[16,15,3,2]],[...C,[7,1,3,1],[12,1,4,1],[9,0,3,1],[6,5,5,2],[12,5,6,1],[8,7,2,1],[14,7,2,1],...MI(4,5,2,9),...MI(3,10,2,3),[8,5,1,3,-.25],[15,5,1,3,-.25]],[],
 [[[7,2,10,11],[6,3,12,10],[4,4,16,12],[3,12,3,3],[18,12,3,3],[5,15,4,2],[15,15,4,2],[8,8,1,6,-.2],[12,6,1,9,-.2],[15,8,1,6,-.2]],[]],
 [[[3,4,9,12],[2,12,3,3],[4,15,4,2]],SB.concat([[7,0,3,2],[11,0,3,2],[12,5,5,2],[14,7,2,1],[8,5,1,5,-.25],[9,11,2,2]]),[],true]);
MH(15,'Butterfly Cut',[[4,3,16,16],[2,10,3,8],[19,10,3,8],[3,17,4,3],[17,17,4,3]],[...C,...MI(6,5,4,2),...MI(6,7,2,4),...MI(3,8,3,8),...MI(2,12,2,5),[10,2,3,1,.3],[11,3,2,3,-.3]],[],
 [[[7,2,10,12],[6,3,12,10],[4,4,16,14],[2,10,3,8],[19,10,3,8],[3,17,5,3],[16,17,5,3],[9,8,1,9,-.2],[14,8,1,9,-.2],[12,4,1,12,-.2]],[]],
 [[[3,4,9,14],[1,10,4,7],[3,17,4,2]],SB.concat([[11,5,5,2],[10,7,3,5],[9,5,1,9,-.2],[13,7,2,1]]),[],true]);
MH(16,'Hijab',[],[[6,0,12,1],[5,1,14,5],[7,5,10,1,-.22],[5,6,2,9],[17,6,2,9],[7,6,1,8,-.22],[16,6,1,8,-.22],[5,15,14,5],[4,17,16,3],[5,14,14,1,-.22],[4,20,16,1,-.22],[8,2,3,1,.35],[9,16,2,1,.35],[12,17,1,3,-.22]],[],
 [[[5,0,14,16],[5,14,14,2,-.22],[4,16,16,5],[4,20,16,1,-.22],[9,3,2,5,.35],[11,9,1,6,-.22]],[]],
 [[],[[5,0,13,6],[4,2,9,13],[4,14,9,1,-.22],[4,15,11,6],[4,20,11,1,-.22],[13,2,5,4],[12,5,6,1,-.22],[8,1,3,1,.35],[11,8,1,6,-.22]],[],true]);
HR[0][0]='Wolf Cut';HR[4][0]='Curtain Hair';HR[7][0]='French Bob';
N.hair=HR.map(h=>h[0]);
Object.assign(N,{
 top:['Kaos Polos','Kaos Polos','Hoodie','Bomber Jacket','Flannel','Knit Sweater','Kemeja Sekolah','Varsity Jacket','Dress','Crop Top','Denim Jacket','Cardigan','Ruffle Blouse'],
 bot:['Bermuda','Jogger','Cargo','Sarung Sholat','Overall','Legging','Mini Skirt','Rok Panjang','Rok Plisa','Rok A-Line','Chino','Wide Leg'],
 shoe:['Chunky Sneakers','Boots','Pantofel','Sandal','High Top','Loafer','Rain Boots','Slip On','Mary Jane','Platform'],
 acc:['Tanpa','Topi','Kacamata','Kacamata Hitam','Headphone','Pita','Masker','Syal','Sayap','Kuping Kucing','Peci','Jepit Rambut','Helm Bogo']});
// Katalog per gender (angka = indeks gambar)
const CAT={m:{hair:[0,1,2,3,4,10,11,12],top:[1,2,3,10,4,7],bot:[2,3,1,0,4,10],shoe:[0,4,1,5,3,2],acc:[0,1,3,4,6,7,9,10,12]},
 f:{hair:[5,6,7,8,9,13,14,15,16],top:[9,5,8,11,12,6],bot:[6,8,9,7,5,11],shoe:[8,9,1,3,6,5],acc:[0,5,9,2,8,4,11,12]}};

function outline(){
 const im=L.getImageData(0,0,28,36),d=im.data,a=new Uint8Array(1008);
 for(let i=0;i<1008;i++)a[i]=d[i*4+3]>0?1:0;
 for(let y=0;y<36;y++)for(let x=0;x<28;x++){const i=y*28+x;
  if(!a[i]&&((x>0&&a[i-1])||(x<27&&a[i+1])||(y>0&&a[i-28])||(y<35&&a[i+28]))){d[i*4]=59;d[i*4+1]=42;d[i*4+2]=58;d[i*4+3]=255}}
 L.putImageData(im,0,0)}

// vw: 0 = depan, 1 = kanan, 2 = belakang, 3 = kiri
function draw(c,st,vw){vw|=0;L.clearRect(0,0,28,36);L.save();L.translate(2,3);
 if(vw==1||vw==3)drawSide(c,st);else drawFB(c,st,vw==2);
 L.restore();outline();
 if(vw==3){MR.clearRect(0,0,28,36);MR.save();MR.translate(28,0);MR.scale(-1,1);MR.drawImage(lo,0,0);MR.restore();L.clearRect(0,0,28,36);L.drawImage(mr,0,0)}}


// ===== Ekspresi wajah emote (idx = urutan di EM) =====
const XEYE=['open',0,'heart','shades','cry','angry','wink','happy','happy','happy'],XMO=['grin',0,'smile','smirk','wail','frown','grin','smile','smile','oh'];
function exFB(st,F,D){const i=st.xi;if(i==null||i<0||i==1)return 0;const T=st.te||0,e=XEYE[i],mo=XMO[i],M='#7a2a3a',C='#c0566a',pk=(i==2||i==8)?'#ff5f86':'#ffa0ae';
 if(e=='open'){S(D,8,9,2,3);S('#fff',8,9,1,1);if(F)S(D,7,9,1,1)}
 else if(e=='happy'){S(D,8,10,1,1);S(D,9,9,1,1);S(D,10,10,1,1)}
 else if(e=='heart'){const c=(T/190|0)%2?'#ff2d6a':'#ff7aa0';S(c,7,9,1,1);S(c,9,9,1,1);S(c,7,10,3,1);S(c,8,11,1,1)}
 else if(e=='shades'){S('#14141c',7,9,3,2);R('#14141c',10,9,4,1);S('#14141c',8,11,1,1);const gx=(T/80|0)%9;if(gx<3){S('#ffffff',7+gx,9,1,1)}}
 else if(e=='cry'){S(D,8,10,2,1);S(D,7,9,1,1);const ty=(T/70|0)%5;S('#6cc6ff',8,12+Math.min(3,ty),1,1);S('#9ddcff',9,12+((ty+2)%4),1,1)}
 else if(e=='angry'){L.save();L.globalAlpha=.22+.14*Math.sin(T/60);R('#ff2a1a',7,5,10,9);L.restore();S(D,8,10,2,2);S(D,7,8,1,1);S(D,8,8,1,1);S(D,9,9,1,1)}
 else if(e=='wink'){R(D,8,9,2,3);R('#fff',8,9,1,1);if((T/420|0)%2)R(D,14,10,2,1);else{R(D,14,9,2,3);R('#fff',14,9,1,1)}}
 S(pk,7,12,2,1);
 if(mo=='grin'){R(M,10,12,4,2);R('#fff',10,12,4,1);R('#ff8fa3',11,13,2,1)}
 else if(mo=='smile'){R(C,10,12,4,1);R(C,9,11,1,1);R(C,14,11,1,1)}
 else if(mo=='smirk'){R(C,11,12,3,1);R(C,14,11,1,1)}
 else if(mo=='wail'){if((T/110|0)%2)R(M,10,12,4,3);else R(M,11,12,2,3);R('#ff8fa3',11,14,2,1)}
 else if(mo=='frown'){R(C,10,12,4,1);R(C,9,13,1,1);R(C,14,13,1,1)}
 else if(mo=='oh'){if((T/180|0)%2){R(M,11,12,2,3)}else R(M,10,12,4,2);R('#ff8fa3',11,13,2,1)}
 return 1}
function exSD(st,F,D){const i=st.xi;if(i==null||i<0||i==1)return 0;const T=st.te||0,e=XEYE[i],mo=XMO[i],M='#7a2a3a',C='#c0566a',pk=(i==2||i==8)?'#ff5f86':'#ffa0ae';
 if(e=='open'){R(D,14,9,2,3);R('#fff',14,9,1,1)}
 else if(e=='happy'){R(D,13,10,1,1);R(D,14,9,1,1);R(D,15,10,1,1)}
 else if(e=='heart'){const c=(T/190|0)%2?'#ff2d6a':'#ff7aa0';R(c,13,9,1,1);R(c,15,9,1,1);R(c,13,10,3,1);R(c,14,11,1,1)}
 else if(e=='shades'){R('#14141c',13,9,4,2);R('#14141c',8,9,5,1);R('#14141c',14,11,1,1);if((T/80|0)%9<3)R('#fff',13+(T/80|0)%9,9,1,1)}
 else if(e=='cry'){R(D,14,10,2,1);R(D,13,9,1,1);const ty=(T/70|0)%5;R('#6cc6ff',15,12+Math.min(3,ty),1,1)}
 else if(e=='angry'){R(D,14,10,2,2);R(D,13,8,1,1);R(D,14,8,1,1);R(D,15,9,1,1)}
 else if(e=='wink'){if((T/420|0)%2)R(D,14,10,2,1);else{R(D,14,9,2,3);R('#fff',14,9,1,1)}}
 R(pk,12,12,2,1);
 if(mo=='grin'){R(M,16,12,2,2);R('#fff',16,12,2,1)}
 else if(mo=='smile'){R(C,15,12,3,1)}
 else if(mo=='smirk'){R(C,16,12,2,1);R(C,17,11,1,1)}
 else if(mo=='wail'){R(M,16,12,2,((T/110|0)%2)?3:2)}
 else if(mo=='frown'){R(C,16,12,2,1);R(C,17,13,1,1)}
 else if(mo=='oh'){R(M,16,12,2,((T/180|0)%2)?3:2)}
 return 1}

// ===== Tampak depan & belakang =====
function drawFB(c,st,BK){
 const dy=st.dy,sk=SKIN[c.skin],hc=HAIRC[c.hc],H=HR[c.hair],tc=CLR[c.tc],bc=BOTC[c.bc],sc=SHC[c.sc],ac=CLR[c.ac],F=c.g=='f',D='#2a2230';
 // belakang
 L.save();L.translate(0,dy);
 if(!BK){
  H[1].forEach(r=>hp(hc,r));
  if(c.acc==8){const w=mix(ac,.45);S(w,1,9,5,4);S(w,0,7,3,3);S(w,2,13,4,3)}}
 L.restore();
 // badan menyatu: kaki, torso, lengan
 S(sk,9,23,3,6);
 const Y=15+dy,tn=8-dy;
 R(sk,8,Y,8,tn);S(sk,6,16+dy,2,7-dy);
 // baju
 const SL=h=>S(tc,6,16+dy,2,h),dk=mix(tc,-.22),lt=mix(tc,.4),Tb=()=>R(tc,8,Y,8,tn);
 switch(c.top){
 case 0:Tb();SL(3);if(!BK)R(sk,10,Y,4,1);break;
 case 1:Tb();SL(3);if(!BK)R(sk,10,Y,4,1);break;
 case 2:Tb();SL(5);R(dk,7,Y,10,BK?3:2);if(!BK){R('#fff',11,Y+2,1,3);R('#fff',12,Y+2,1,2);R(dk,10,Y+5,4,2)}S(dk,6,21,2,1);break;
 case 3:Tb();R(dk,8,Y+tn-1,8,1);S(lt,6,17+dy,2,1);
  if(BK){R(dk,12,Y+1,1,tn-2);R(dk,8,Y,8,1)}else{R('#f4f0e8',11,Y,2,tn-1);R(dk,10,Y,1,tn-1);R(dk,13,Y,1,tn-1);R(dk,8,Y,3,1);R(dk,13,Y,3,1)}
  SL(5);S(lt,6,17+dy,2,1);S(dk,6,21,2,1);break;
 case 4:Tb();SL(4);R(dk,8,Y+3,8,1);R(dk,8,Y+6,8,1);S(lt,9,Y+2,1,tn-2);S(dk,6,18+dy,2,1);
  if(BK)R(lt,8,Y,8,1);else{R(dk,11,Y+1,2,tn-1);S(lt,9,Y,2,2)}break;
 case 5:Tb();SL(5);R(dk,8,22,8,1);S(dk,6,21,2,1);R(dk,9,Y,6,1);R(lt,8,Y+3,8,1);break;
 case 6:R('#f6f3ee',8,Y,8,tn);S('#f6f3ee',6,16+dy,2,4);S(tc,6,19+dy,2,1);R(tc,8,Y,8,2);
  if(BK){R(tc,8,Y+2,8,2);R(mix(tc,.4),8,Y+3,8,1)}else{R(tc,10,Y+2,4,1);R(tc,11,Y+3,2,1);R('#e86a7a',11,Y+3,2,2)}break;
 case 7:Tb();S('#f6f3ee',6,16+dy,2,5);S(tc,6,20+dy,2,1);R(dk,8,Y+tn-1,8,1);R(dk,9,Y,6,1);
  if(BK){R('#fff',10,Y+2,1,2);R('#fff',13,Y+2,1,2);R('#fff',11,Y+4,2,1)}
  else{R(dk,11,Y+1,1,tn-2);R('#fff',9,Y+2,2,2);R(tc,9,Y+3,1,1)}break;
 case 8:Tb();SL(2);if(!BK)R(sk,10,Y,4,1);R(tc,7,22,10,5);R(dk,8,21,8,1);R(lt,7,26,10,1);if(BK)R(dk,10,20,4,2);break;
 case 9:R(tc,8,Y,8,4);SL(2);R(lt,8,Y+3,8,1);if(!BK)R(sk,10,Y,4,1);break;
 case 10:Tb();SL(5);S(dk,6,21,2,1);if(BK)R(dk,8,Y,8,1);else{R(dk,11,Y,2,tn);S(lt,9,Y+3,2,2);R(dk,8,Y,3,1);R(dk,13,Y,3,1)}break;
 case 11:Tb();SL(5);S(dk,6,21,2,1);if(BK)R(dk,8,Y+tn-1,8,1);else{R('#f6f3ee',11,Y,2,tn);S(dk,10,Y+1,1,tn-1);R(dk,11,Y+tn-1,2,1)}break;
 case 12:Tb();SL(2);R(lt,8,Y,8,1);R(lt,7,Y+tn-1,10,1);if(!BK){R(dk,11,Y+1,2,2);S(dk,10,Y+1,1,1)}break}
 // sepatu
 switch(c.shoe){
  case 0:S(sc,7,29,5,2);S('#fff',7,31,5,1);S(mix(sc,.5),7,30,2,1);break;
  case 1:S(sc,8,26,4,3);S(sc,7,29,5,2);S('#3a2a28',7,31,5,1);S(mix(sc,.3),8,26,4,1);break;
  case 2:S(mix(sc,-.3),7,29,5,2);S('#222',7,31,5,1);S('#fff',8,29,1,1);break;
  case 3:S(sk,7,29,5,2);S(sc,7,31,5,1);S(sc,9,29,3,1);S(sc,8,30,1,1);break;
  case 4:S(sc,8,27,4,2);S(sc,7,29,5,2);S('#fff',7,31,5,1);S('#fff',9,28,1,1);break;
  case 5:S(mix(sc,-.2),7,29,5,2);S('#2a2020',7,31,5,1);S('#ffd54f',9,29,1,1);break;
  case 6:S(sc,8,24,4,5);S(sc,7,29,5,2);S(mix(sc,-.4),7,31,5,1);S(mix(sc,.4),8,24,1,4);break;
  case 7:S(mix(sc,.2),7,29,5,2);S('#fff',7,31,5,1);S(mix(sc,-.2),8,30,4,1);break;
  case 8:S(sc,7,29,5,2);S('#222',7,31,5,1);S(mix(sc,.5),7,29,5,1);S(mix(sc,.5),8,28,1,1);break;
  case 9:S(sc,7,28,5,2);S('#fff',7,30,5,2);S(mix(sc,.4),8,28,2,1)}
 // bawahan
 if(c.top!=8){const W=bc,d2=mix(bc,-.25),l2=mix(bc,.3),P=()=>{R(W,8,22,8,2);S(W,8,24,4,5)};
 switch(c.bot){
  case 0:R(W,8,22,8,2);S(W,8,24,4,2);break;
  case 1:P();S(d2,8,28,4,1);if(!BK){R(mix(bc,.5),11,22,1,2);R(mix(bc,.5),12,22,1,2)}break;
  case 2:P();S(d2,9,26,2,2);break;
  case 3:sarung(W,7,22,10,6);break;
  case 4:P();if(BK){R(W,9,20,6,2);S(W,9,15+dy,1,6-dy);S('#ffe27a',9,20,1,1)}else{R(W,9,17+dy,6,5-dy);R(d2,11,19+dy,2,2);S(W,9,15+dy,1,2);S('#ffe27a',9,17+dy,1,1)}break;
  case 5:R(W,8,22,8,1);S(W,9,23,3,6);break;
  case 6:R(W,8,22,8,1);R(W,7,23,10,3);break;
  case 7:R(W,8,22,8,1);R(W,7,23,10,5);R(l2,7,27,10,1);break;
  case 8:R(W,7,22,10,4);[9,11,12,14].forEach(x=>R(d2,x,23,1,3));R(l2,7,25,10,1);break;
  case 9:R(W,8,22,8,1);R(W,7,23,10,2);R(W,6,25,12,2);R(l2,6,26,12,1);break;
  case 10:P();if(BK)S(d2,9,23,2,1);else S(d2,9,23,1,2);S(d2,8,28,4,1);break;
  case 11:R(W,7,22,10,2);S(W,7,24,5,5);S(l2,9,24,1,5);S(d2,7,28,5,1)}}
 // sayap dilihat dari belakang: menempel di punggung
 if(BK&&c.acc==8){const w=mix(ac,.45);L.save();L.translate(0,dy);S(w,2,12,6,5);S(w,0,10,3,4);S(w,1,16,5,4);L.restore()}
 // kepala
 L.save();L.translate(0,dy);
 R(sk,7,3,10,12);R(sk,6,4,12,10);
 if(BK){const B=BKH[c.hair];B[0].forEach(r=>hp(hc,r));B[1].forEach(r=>R('#ff7aa8',...r))}
 else{
  if(!exFB(st,F,D)){
  if(st.lau){S(D,8,10,1,1);S(D,9,9,1,1);S(D,10,10,1,1)}
  else if(st.blink)S(D,8,11,2,1);
  else{S(D,8,9,2,3);S('#fff',8,9,1,1);if(F)S(D,7,9,1,1)}
  S(st.lau?'#ff6f8a':'#ffa0ae',7,12,2,1);
  if(st.lau){R('#7a2a3a',10,12,4,2);R('#fff',10,12,4,1);R('#ff8fa3',11,13,2,1)}else R('#c0566a',11,12,2,1);
  }
  H[2].forEach(r=>hp(hc,r));
 }
 R(mix(hc,.3),8,2,3,1);
 if(!BK&&H[3])H[3].forEach(r=>R('#ff7aa8',...r));
 switch(c.acc){
  case 1:if(BK){R(ac,6,1,12,5);R(mix(ac,-.25),6,5,12,1);R(mix(ac,-.3),10,3,4,2);R(mix(ac,.5),11,0,2,1)}
   else{R(ac,6,1,12,3);R(ac,5,3,14,2);R(mix(ac,-.25),5,5,14,1);R(mix(ac,.5),11,0,2,1)}break;
  case 2:if(BK)S(ac,6,9,1,1);else{S(ac,7,8,4,1);S(ac,7,12,4,1);S(ac,7,9,1,3);S(ac,10,9,1,3);R(ac,11,9,2,1)}break;
  case 3:if(BK)S('#2a2a3a',6,9,1,1);else{S('#2a2a3a',7,8,4,4);R('#2a2a3a',11,9,2,1);S('#7a7a9a',8,9,1,1)}break;
  case 4:R(ac,6,1,12,1);S(ac,5,2,1,5);S(mix(ac,-.25),4,7,2,5);S(mix(ac,.4),4,8,1,3);break;
  case 5:if(BK){R(ac,9,1,2,3);R(ac,6,1,2,3);R(mix(ac,-.3),8,2,1,1)}else{R(ac,13,1,2,3);R(ac,16,1,2,3);R(mix(ac,-.3),15,2,1,1)}break;
  case 6:if(BK)R(mix(ac,-.1),6,11,12,1);else{R(ac,7,11,10,4);R(mix(ac,-.15),7,12,10,1);S(ac,6,10,1,1)}break;
  case 7:R(ac,7,15,10,2);R(mix(ac,-.15),14,17,2,5);R(mix(ac,.3),7,15,10,1);break;
  case 9:{const dk2=mix(ac,-.3),pk='#f4a6b8';S(dk2,5,-3,1,1);S(ac,5,-2,2,1);S(ac,5,-1,3,1);S(ac,5,0,4,1);S(ac,5,1,5,2);S(dk2,5,-1,1,2);
   if(!BK){S(pk,6,-1,1,1);S(pk,6,0,2,2);S(mix(pk,.6),7,1,1,1);S(mix(ac,.55),8,2,1,1)}else{S(mix(ac,-.15),6,0,2,2);S(mix(ac,.3),6,-1,1,1)}break}
  case 10:if(!F){const dk2=mix(ac,-.25);R(ac,6,-1,12,5);R(dk2,6,4,12,1);R(mix(ac,.35),7,-1,6,1);R(mix(ac,.2),6,0,1,4)}break;
  case 11:if(!BK){R(ac,14,5,3,1);R('#fff',15,4,1,1)}break;
  case 12:R(ac,6,0,12,2);R(ac,5,2,14,4);R(mix(ac,-.3),5,6,14,1);S(mix(ac,-.3),5,7,1,5);R(mix(ac,.55),8,1,3,1);R(mix(ac,-.35),11,0,2,6);S('#e8e8f0',6,3,1,1);S('#3a3a48',5,12,1,2);if(!BK){R(mix(ac,-.45),7,6,10,1);R('#d8d8e0',11,7,2,1)}}
 L.restore();
}

// ===== Tampak samping (menghadap kanan; kiri = cermin) dengan siklus jalan/lari =====
function drawSide(c,st){
 const dy=st.dy,am=st.am||0,th=st.ph||0,mvg=am>.12,sk=SKIN[c.skin],hc=HAIRC[c.hc],tc=CLR[c.tc],bc=BOTC[c.bc],sc=SHC[c.sc],ac=CLR[c.ac],F=c.g=='f',D='#2a2230';
 const Y=15+dy,tn=8-dy,dk=mix(tc,-.22),lt=mix(tc,.4),SH=mix(sk,-.12),HD=SD[c.hair];
 const ST=mvg?am*(c.top!=8&&c.bot==3?1.5:2.8):0,LF=mvg?Math.max(0,am-.3):0,lean=mvg&&am>1.45?1:0;
 // kaki: ayunan dari pinggul, lutut menekuk & kaki terangkat saat diayun ke depan
 const lp=ph=>{const sn=Math.sin(ph),cs=Math.cos(ph),sw=sn*ST,up=Math.max(0,cs),lift=Math.round(up*LF*1.6),bend=up*LF*1.5,n=6-lift,
  xo=i=>Math.round(sw*(i/5))-(i>=3?Math.round(bend*(i-2)/3):0);return{n,lift,xo,fx:10+xo(n-1)}};
 const GN=lp(th),GF=lp(th+Math.PI);
 // lengan: berayun berlawanan dengan kaki, siku menekuk ke depan saat berlari
 const AA=mvg?am*3.1:0,bf=mvg?Math.round(Math.min(1.5,am)*1.1):0,up2=mvg&&am>1.4?1:0;
 const AR=[[tc,3,0,3],[tc,3,0,3],[tc,5,dk,5],[tc,5,dk,5],[tc,4,0,4],[tc,5,dk,5],['#f6f3ee',4,tc,3],['#f6f3ee',5,tc,4],[tc,2,0,2],[tc,2,0,2],[tc,5,dk,5],[tc,5,dk,5],[tc,2,0,2]][c.top];
 const arm=(sn,dim)=>{const AL=7-dy-up2,o=sn*AA;
  for(let i=0;i<AL;i++){const ox=Math.round(o*i/(AL-1))+(i>=3?bf:0);
   let col=i<AR[1]?AR[0]:sk;if(AR[2]&&i==AR[3])col=AR[2];if(dim)col=mix(col,-.18);
   R(col,10+ox+lean,16+dy+i,3,1)}};
 const BL=c.top==8?0:[3,6,6,0,6,6,0,0,0,0,6,6][c.bot],LW=(c.top!=8&&c.bot==11)?4:3;
 const leg=(G,dim)=>{for(let i=0;i<G.n;i++){let col=i<BL?bc:sk;if(c.bot==1&&BL&&i==4)col=mix(bc,-.25);if(dim)col=mix(col,-.2);R(col,10+G.xo(i),23+i,LW,1)}
  if(BL&&!dim){const px=10+G.xo(2)+1;if(c.bot==2)R(mix(bc,-.25),px,25,2,2);if(c.bot==3)R(mix(bc,.3),px,25,1,3)}};
 const shapeShoe=(x,dim)=>{const q=v=>dim?mix(v,-.22):v,a=q(sc);
  switch(c.shoe){
  case 0:R(a,x,29,5,2);R(q('#ffffff'),x,31,5,1);R(q(mix(sc,.5)),x+3,30,2,1);break;
  case 1:R(a,x,26,3,3);R(a,x,29,5,2);R(q('#3a2a28'),x,31,5,1);R(q(mix(sc,.3)),x,26,3,1);break;
  case 2:R(q(mix(sc,-.3)),x,29,5,2);R(q('#222222'),x,31,5,1);R(q('#ffffff'),x+3,29,1,1);break;
  case 3:R(dim?mix(sk,-.2):sk,x,29,5,2);R(a,x,31,5,1);R(a,x+1,29,3,1);R(a,x+2,30,1,1);break;
  case 4:R(a,x,27,3,2);R(a,x,29,5,2);R(q('#ffffff'),x,31,5,1);R(q('#ffffff'),x+1,28,1,1);break;
  case 5:R(q(mix(sc,-.2)),x,29,5,2);R(q('#2a2020'),x,31,5,1);R(q('#ffd54f'),x+3,29,1,1);break;
  case 6:R(a,x,24,3,5);R(a,x,29,5,2);R(q(mix(sc,-.4)),x,31,5,1);R(q(mix(sc,.4)),x,24,1,4);break;
  case 7:R(q(mix(sc,.2)),x,29,5,2);R(q('#ffffff'),x,31,5,1);R(q(mix(sc,-.2)),x+1,30,4,1);break;
  case 8:R(a,x,29,5,2);R(q('#222222'),x,31,5,1);R(q(mix(sc,.5)),x+1,29,3,1);break;
  case 9:R(a,x,28,5,2);R(q('#ffffff'),x,30,5,2);R(q(mix(sc,.4)),x+1,28,2,1)}};
 const shoe=(G,dim)=>{L.save();L.translate(0,-G.lift);shapeShoe(G.fx,dim);L.restore()};
 // lapisan paling belakang: rambut panjang, sayap
 L.save();L.translate(lean,dy);
 HD[0].forEach(r=>hp(hc,r));
 if(c.acc==8){const w=mix(ac,.45);R(w,2,10,6,5);R(w,0,8,4,3);R(w,3,15,5,3)}
 L.restore();
 const sa=Math.sin(th);
 arm(sa,1);
 shoe(GF,1);leg(GF,1);
 // torso & baju
 L.save();L.translate(lean,0);
 R(sk,9,Y,6,tn);
 const T=()=>R(tc,9,Y,6,tn);
 switch(c.top){
  case 0:case 1:T();break;
  case 2:T();R(dk,7,Y,5,3);R(dk,9,Y+tn-1,6,1);break;
  case 3:T();R('#f4f0e8',14,Y,1,tn);R(dk,9,Y,6,1);R(dk,9,Y+tn-1,6,1);break;
  case 4:T();R(dk,9,Y+3,6,1);R(dk,9,Y+6,6,1);R(lt,11,Y+2,1,tn-2);R(lt,12,Y,3,2);R(dk,14,Y+1,1,tn-1);break;
  case 5:T();R(dk,9,22,6,1);R(dk,10,Y,4,1);R(lt,9,Y+3,6,1);break;
  case 6:R('#f6f3ee',9,Y,6,tn);R(tc,8,Y,6,3);R('#e86a7a',13,Y+2,2,3);break;
  case 7:T();R(dk,9,Y,6,1);R(dk,9,Y+tn-1,6,1);R('#ffffff',12,Y+2,2,2);break;
  case 8:T();break;
  case 9:R(tc,9,Y,6,4);R(lt,9,Y+3,6,1);break;
  case 10:T();R(dk,9,Y,6,1);R(dk,14,Y,1,tn);break;
  case 11:T();R('#f6f3ee',13,Y,2,tn);R(dk,9,Y+tn-1,6,1);break;
  case 12:T();R(lt,9,Y,6,1);R(lt,8,Y+tn-1,7,1);R(dk,13,Y+1,2,2)}
 L.restore();
 shoe(GN,0);leg(GN,0);
 // bawahan
 if(c.top==8){R(tc,7,22,10,5);R(dk,8,21,8,1);R(lt,7,26,10,1)}
 else{const W=bc,d2=mix(bc,-.25),l2=mix(bc,.3);
  switch(c.bot){
  case 0:case 1:case 2:case 10:R(W,9,22,6,2);break;
  case 3:sarung(W,7,22,10,6);break;
  case 11:R(W,8,22,8,2);break;
  case 4:R(W,9,22,6,2);R(W,13,17+dy,2,5-dy);R(W,11,15+dy,2,3);R('#ffe27a',13,18+dy,1,1);break;
  case 5:R(W,9,22,6,1);break;
  case 6:R(W,8,22,8,1);R(W,7,23,10,3);break;
  case 7:R(W,8,22,8,1);R(W,7,23,10,5);R(l2,7,27,10,1);break;
  case 8:R(W,7,22,10,4);[9,11,13,15].forEach(x=>R(d2,x,23,1,3));R(l2,7,25,10,1);break;
  case 9:R(W,8,22,8,1);R(W,7,23,10,2);R(W,6,25,12,2);R(l2,6,26,12,1)}}

 // kepala
 L.save();L.translate(lean,dy);
 R(sk,7,3,10,12);R(sk,6,4,12,10);R(SH,18,9,1,2);
 if(!exSD(st,F,D)){
 if(st.lau){R(D,13,10,1,1);R(D,14,9,1,1);R(D,15,10,1,1)}
 else if(st.blink)R(D,14,11,2,1);
 else{R(D,14,9,2,3);R('#ffffff',14,9,1,1);if(F)R(D,16,8,1,1)}
 R(st.lau?'#ff6f8a':'#ffa0ae',12,12,2,1);
 if(st.lau){R('#7a2a3a',16,12,2,2);R('#ffffff',16,12,2,1)}else R('#c0566a',16,12,2,1);
 }
 HD[1].forEach(r=>hp(hc,r));
 if(!HD[3])R(SH,10,9,2,2);
 HD[2].forEach(r=>R('#ff7aa8',...r));
 R(mix(hc,.3),8,2,3,1);
 switch(c.acc){
  case 1:R(ac,5,1,12,4);R(mix(ac,-.25),15,4,5,2);R(mix(ac,-.25),5,5,12,1);R(mix(ac,.5),10,0,2,1);break;
  case 2:R(ac,13,8,4,1);R(ac,13,12,4,1);R(ac,13,9,1,3);R(ac,16,9,1,3);R(ac,8,9,5,1);break;
  case 3:R('#2a2a3a',13,8,4,5);R('#2a2a3a',8,9,5,1);R('#7a7a9a',14,9,1,1);break;
  case 4:R(ac,8,1,8,1);R(ac,10,2,1,5);R(mix(ac,-.25),9,7,4,5);R(mix(ac,.4),9,8,1,3);break;
  case 5:R(ac,9,1,2,3);R(ac,12,1,2,3);R(mix(ac,-.3),11,2,1,1);break;
  case 6:R(ac,12,11,6,4);R(mix(ac,-.15),12,12,6,1);R(ac,9,10,3,1);break;
  case 7:R(ac,8,15,8,2);R(mix(ac,-.15),7,17,2,5);R(mix(ac,.3),8,15,8,1);break;
  case 9:{const dk2=mix(ac,-.3);R(dk2,10,-3,1,1);R(ac,10,-2,2,1);R(ac,9,-1,4,1);R(ac,8,0,6,1);R(ac,8,1,7,2);R('#f4a6b8',10,-1,2,1);R('#f4a6b8',10,0,3,2);R(mix('#f4a6b8',.6),12,1,1,1);R(mix(ac,-.2),5,-1,2,3);R(dk2,5,-2,1,1);break}
  case 10:if(!F){const dk2=mix(ac,-.25);R(ac,5,-1,13,5);R(dk2,5,4,13,1);R(mix(ac,.35),7,-1,6,1);R(mix(ac,.2),5,0,1,4)}break;
  case 11:R(ac,13,5,3,1);R('#ffffff',14,4,1,1);break;
  case 12:R(ac,5,0,13,6);R(ac,4,2,2,4);R(mix(ac,-.3),4,6,14,1);R(mix(ac,-.3),9,7,3,5);R(mix(ac,.55),8,1,3,1);R(mix(ac,-.35),12,0,2,6);R(mix(ac,-.45),16,5,4,1);R('#e8e8f0',7,3,1,1);R('#3a3a48',9,12,1,3);R('#d8d8e0',10,14,1,1)}
 L.restore();
 // lengan dekat (paling depan)
 arm(-sa,0);
}
function blit(cv,c,st,[sx,sy,sw,sh],vw){draw(c,st,vw);const x=cv.getContext('2d');x.imageSmoothingEnabled=false;x.clearRect(0,0,cv.width,cv.height);
 const s=Math.min(cv.width/sw,cv.height/sh),w=sw*s,h=sh*s;x.drawImage(lo,sx,sy,sw,sh,(cv.width-w)/2,(cv.height-h)/2,w,h)}

const def=g=>g=='m'?{g,skin:1,hair:0,hc:0,top:1,tc:4,bot:1,bc:1,shoe:0,sc:1,acc:0,ac:4}:{g,skin:0,hair:7,hc:1,top:9,tc:0,bot:6,bc:5,shoe:8,sc:0,acc:5,ac:0};
let cfg=def('m'),bgI=0,tab=0,laughUntil=0,VW=0;
const TABS=[['Badan'],['Rambut','hair','hc',HAIRC],['Baju','top','tc',CLR],['Bawahan','bot','bc',BOTC],['Sepatu','shoe','sc',SHC],['Aksesoris','acc','ac',CLR]];
const CR=[[0,0,28,36],[1,1,26,24],[3,17,22,12],[3,24,22,10],[5,29,18,7],[1,2,26,22]];
const el=(t,c,p)=>{const e=document.createElement(t);e.className=c||'';(p||$('#opts')).appendChild(e);return e};

function fill(){
 const o=$('#opts'),cl=$('#cols'),T=TABS[tab];o.innerHTML=cl.innerHTML='';
 $('#note').textContent=(tab==3&&cfg.top==8)?'Dress menutupi bawahan. Pilih baju lain untuk melihat bawahan.':'';
 const sw=(pal,key)=>pal.forEach((col,i)=>{const b=el('button','sw'+(cfg[key]==i?' on':''),cl);b.style.background=col;b.onclick=()=>{cfg[key]=i;fill()}});
 if(tab==0){
  [['m','Cowok'],['f','Cewek']].forEach(([g,n])=>{const b=el('button','opt'+(cfg.g==g?' on':''));const cv=el('canvas','',b);cv.width=cv.height=72;
   blit(cv,{...cfg,g},{dy:0},CR[0],VW);b.append(n);b.onclick=()=>{cfg.g=g;['hair','top','bot','shoe','acc'].forEach(k=>{if(!CAT[g][k].includes(cfg[k]))cfg[k]=CAT[g][k][0]});fill()}});
  sw(SKIN,'skin');return}
 CAT[cfg.g][T[1]].forEach(i=>{const n=N[T[1]][i];const b=el('button','opt'+(cfg[T[1]]==i?' on':''));const cv=el('canvas','',b);cv.width=cv.height=72;
  blit(cv,{...cfg,[T[1]]:i},{dy:0},CR[tab],VW);b.append(n);b.onclick=()=>{cfg[T[1]]=i;fill()}});
 sw(T[3],T[2]);
}
TABS.forEach((t,i)=>{const b=el('button','tab'+(i==0?' on':''),$('#tabs'));b.textContent=t[0];
 b.onclick=()=>{tab=i;document.querySelectorAll('.tab').forEach((x,j)=>x.classList.toggle('on',j==i));fill()}});

function setBg(i){bgI=(i+BG.length)%BG.length;const b=BG[bgI];
 $('#stage').style.background=`linear-gradient(180deg,${b[1]},${b[2]})`;$('#gr').style.background=b[5];
 const d=$('#dec');d.innerHTML='';
 for(let k=0;k<14;k++){const s=document.createElement('span');s.textContent=b[3];s.style.cssText=`left:${Math.random()*92}%;top:${8+Math.random()*60}%;font-size:${14+Math.random()*26}px;color:${b[4]};animation-delay:${-Math.random()*5}s;animation-duration:${4+Math.random()*3}s`;d.appendChild(s)}}

const r=n=>Math.random()*n|0;
const pk=(g,k)=>{const a=CAT[g][k];return a[r(a.length)]};
function rndCfg(){const g=r(2)?'m':'f';return{g,skin:r(6),hair:pk(g,'hair'),hc:r(HAIRC.length),top:pk(g,'top'),tc:r(CLR.length),bot:pk(g,'bot'),bc:r(BOTC.length),shoe:pk(g,'shoe'),sc:r(8),acc:r(3)?pk(g,'acc'):0,ac:r(CLR.length)}}
$('#dice').onclick=e=>{const b=e.currentTarget;b.classList.remove('spin');void b.offsetWidth;b.classList.add('spin');
 cfg=rndCfg();
 setBg(r(8));laughUntil=performance.now()+1200;fill()};
$('#reset').onclick=()=>{cfg=def('m');setBg(0);fill()};
$('#cv').onclick=()=>{laughUntil=performance.now()+1500};
$('#rl').onclick=()=>{VW=(VW+3)%4;fill()};
$('#rr').onclick=()=>{VW=(VW+1)%4;fill()};

$('#next').onclick=()=>{const k=$('#card');
 k.innerHTML=`<b style="font-size:20px">Karakter Siap!</b><canvas id="mc" width="280" height="360"></canvas>
 <p>${cfg.g=='m'?'Cowok':'Cewek'} &middot; ${N.hair[cfg.hair]} &middot; ${N.top[cfg.top]} &middot; ${cfg.top==8?'Dress':N.bot[cfg.bot]} &middot; ${N.shoe[cfg.shoe]} &middot; ${N.acc[cfg.acc]}</p>
 <input id="nm" maxlength="14" placeholder="Nama karakter..."><button class="btn next" id="go" style="margin:0">Mulai Petualangan!</button><button class="tab" id="bk">Kembali</button>`;
 $('#md').hidden=false;$('#bk').onclick=()=>$('#md').hidden=true;
 $('#go').onclick=()=>{const n=$('#nm').value.trim()||'Petani Baru';k.querySelector('b').textContent=`Selamat datang, ${n}!`;
  k.querySelector('p').textContent='Lahan pertanianmu sudah menunggu. Selamat bersenang-senang!';$('#nm').remove();$('#go').remove();laughUntil=performance.now()+3000}};

function loop(t){
 const lau=t<laughUntil||(t%7000<1400),dy=lau?((t/110)|0)%2:(t%1800<900?0:1),blink=!lau&&t%3300<140,st={dy,lau,blink};
 blit($('#cv'),cfg,st,[0,0,28,36],VW);$('#bub').classList.toggle('on',lau);
 if(!$('#md').hidden&&$('#mc'))blit($('#mc'),cfg,st,[0,0,28,36]);
 requestAnimationFrame(loop)}
setBg(0);fill();requestAnimationFrame(loop);
