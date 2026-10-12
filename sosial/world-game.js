(()=>{
const G=$('#gm'),cv=$('#gc'),g=cv.getContext('2d'),ci=$('#ci'),HS=$('#hist'),WW=960,WH=600,K=2.4;
const rr=(x,y,w,h,r,c)=>{g.fillStyle=c;g.beginPath();g.roundRect(x,y,w,h,r);g.fill()};
const cc=(x,y,r,c)=>{g.fillStyle=c;g.beginPath();g.arc(x,y,r,0,7);g.fill()};
const tree=(x,y)=>{const T=performance.now()/1000,w=Math.sin(T*1.1+x*.05)*2.2;
 g.fillStyle='#0002';g.beginPath();g.ellipse(x+7,y+2,32,9,0,0,7);g.fill();
 g.fillStyle='#6b4527';g.fillRect(x-5,y-40,10,40);g.fillStyle='#8a5a34';g.fillRect(x-5,y-40,4,40);g.fillStyle='#0002';g.fillRect(x+2,y-40,3,40);
 cc(x+w*.5,y-58,34,'#2f7d32');cc(x-16+w,y-48,22,'#3a8f3f');cc(x+18+w,y-50,21,'#3a8f3f');cc(x+w*1.1,y-68,28,'#4fa549');
 cc(x-10+w*1.4,y-78,15,'#72c765');cc(x+14+w*1.4,y-72,10,'#86d676');cc(x+w*1.4,y-60,5,'#9be58a');
 for(let k=0;k<2;k++){const q=(T*.11+x*.013+k*.5)%1,lx=x+(k?-1:1)*(14+q*10)+Math.sin(T*2+k*3+x)*7*q,ly=y-70+q*78,al=q<.1?q*10:q>.85?(1-q)/.15:1;
  g.save();g.globalAlpha=al*.9;g.translate(lx,ly);g.rotate(T*2+q*6+k);g.fillStyle=k?'#8bd15f':'#c6d94a';g.beginPath();g.ellipse(0,0,3,1.6,0,0,7);g.fill();g.restore()}};
const bin=(c,lb,k)=>(x,y)=>{const w=28,h=40,d=mix(c,-.3),l=mix(c,.35),m=x+w/2;
 g.fillStyle='#0003';g.beginPath();g.ellipse(m+3,y+h+1,18,5,0,0,7);g.fill();
 g.fillStyle=c;g.beginPath();g.moveTo(x+2,y+9);g.lineTo(x+w-2,y+9);g.lineTo(x+w-4,y+h);g.lineTo(x+4,y+h);g.closePath();g.fill();
 g.fillStyle='#0002';g.fillRect(x+w-10,y+10,6,h-14);g.fillStyle='#fff3';g.fillRect(x+5,y+11,3,h-17);
 rr(x-2,y+3,w+4,8,4,l);rr(x-2,y+8,w+4,3,2,d);rr(m-5,y,10,5,2,d);
 g.fillStyle='#fff';g.beginPath();g.arc(m,y+26,8,0,7);g.fill();
 g.fillStyle=c;g.strokeStyle=c;g.lineWidth=2;
 if(k==0){g.beginPath();g.ellipse(m,y+26,3,5.5,.7,0,7);g.fill()}
 else if(k==1){g.beginPath();g.moveTo(m,y+21);g.lineTo(m+5,y+30);g.lineTo(m-5,y+30);g.closePath();g.stroke()}
 else{g.beginPath();g.moveTo(m,y+20);g.lineTo(m+6,y+31);g.lineTo(m-6,y+31);g.closePath();g.fill();g.fillStyle='#fff';g.fillRect(m-1,y+24,2,4);g.fillRect(m-1,y+29,2,1.5)}
 rr(m-17,y-17,34,13,6,c);g.fillStyle='#fff';g.font='bold 9px "Pixelify Sans",sans-serif';g.textAlign='center';g.fillText(lb,m,y-7)};
const podium=(x,y)=>{const T=performance.now()/1000;
 g.fillStyle='#0003';g.beginPath();g.ellipse(x+64,y+38,66,8,0,0,7);g.fill();
 rr(x,y+6,120,30,6,'#2d3a4f');rr(x,y,120,14,6,'#eef1f5');g.fillStyle='#0001';g.fillRect(x+4,y+11,112,3);
 g.fillStyle='#e53935';g.fillRect(x+34,y+18,52,6);g.fillStyle='#fff';g.fillRect(x+34,y+24,52,6);
 g.fillStyle='#fff3';g.fillRect(x+6,y+8,4,22);
 g.fillStyle='#555';g.fillRect(x+59,y-22,2,24);g.fillStyle='#333';g.beginPath();g.arc(x+60,y-24,4,0,7);g.fill();g.fillStyle='#8f949c';g.fillRect(x+57,y-4,6,3)};
const bench=(x,y)=>{g.fillStyle='#0002';g.beginPath();g.ellipse(x+38,y+22,40,6,0,0,7);g.fill();
 g.fillStyle='#454b57';g.fillRect(x+6,y+8,4,14);g.fillRect(x+66,y+8,4,14);rr(x,y,76,7,3,'#b97a4a');rr(x,y+9,76,9,3,'#d19a66');g.fillStyle='#0002';g.fillRect(x+3,y+13,70,1)};
const bush=(x,y,r,f)=>{g.fillStyle='#0002';g.beginPath();g.ellipse(x+3,y+r*.7,r*1.2,r*.45,0,0,7);g.fill();cc(x,y,r,'#3f8f3a');cc(x-r*.6,y+r*.2,r*.7,'#4fa549');cc(x+r*.6,y+r*.2,r*.7,'#4fa549');cc(x,y-r*.3,r*.6,'#68bd5b');
 if(f){cc(x-r*.4,y-r*.2,2,f);cc(x+r*.5,y,2,f);cc(x,y+r*.3,2,f)}};
const TR=[[260,170],[660,170],[48,250],[48,340],[48,480],[912,340],[912,480],[912,560]];
const FD=[
 (w,T,i)=>{g.beginPath();g.moveTo(-8,0);g.lineTo(-20,-6+w*5);g.lineTo(-15,w*3);g.lineTo(-20,6+w*5);g.closePath();g.fill();
  g.beginPath();g.moveTo(12,0);g.bezierCurveTo(8,-6.5,-2,-6+w*.5,-9,-1+w*1.5);g.lineTo(-9,1+w*1.5);g.bezierCurveTo(-2,6+w*.5,8,6.5,12,0);g.fill();
  [1,-1].forEach(s=>{g.save();g.translate(5,s*4.5);g.rotate(s*(.6+Math.sin(T*8+i)*.35));g.beginPath();g.ellipse(0,s*3,1.8,4.2,0,0,7);g.fill();g.restore()})},
 (w,T,i)=>{g.beginPath();g.moveTo(-6,0);g.bezierCurveTo(-14,-8+w*4,-20,-9+w*6,-19,-3+w*6);g.bezierCurveTo(-16,0,-16,1+w*3,-19,4+w*6);g.bezierCurveTo(-20,10+w*6,-14,8+w*4,-6,0);g.fill();
  g.beginPath();g.ellipse(2,0,9,6.2,0,0,7);g.fill();g.beginPath();g.moveTo(-2,-5);g.quadraticCurveTo(2,-11,7,-5);g.fill();
  g.beginPath();g.ellipse(4,5.5,2,3.5,.5+Math.sin(T*8+i)*.3,0,7);g.fill()},
 (w,T,i)=>{g.beginPath();g.moveTo(20,-.5);g.bezierCurveTo(14,-4,0,-4.2,-12,-2+w*1.5);g.lineTo(-12,2+w*1.5);g.bezierCurveTo(0,4.8,14,4.5,20,1.5);g.closePath();g.fill();
  g.beginPath();g.moveTo(-10,-1+w*1.5);g.lineTo(-21,-5+w*4);g.lineTo(-18,w*3);g.lineTo(-21,5+w*4);g.lineTo(-10,1+w*1.5);g.fill();
  g.beginPath();g.moveTo(-2,-3.5);g.lineTo(-13,-6);g.lineTo(-12,-2);g.closePath();g.fill();g.beginPath();g.moveTo(-1,3.5);g.lineTo(-11,6);g.lineTo(-10,2);g.closePath();g.fill();
  g.lineWidth=1.2;g.strokeStyle=g.fillStyle;g.beginPath();g.moveTo(19,1.5);g.quadraticCurveTo(22,4,20,7);g.stroke()},
 (w,T,i)=>{g.beginPath();g.moveTo(13,0);g.bezierCurveTo(13,-6,5,-6.5,-2,-4);g.bezierCurveTo(-8,-3,-12,-1+w*1.5,-15,w*2);g.bezierCurveTo(-12,2+w*1.5,-8,3,-2,4);g.bezierCurveTo(5,6.5,13,6,13,0);g.fill();
  g.beginPath();g.moveTo(-14,w*2);g.lineTo(-20,-4+w*4);g.lineTo(-19,4+w*4);g.fill();
  g.lineWidth=1.2;g.strokeStyle=g.fillStyle;[[12,-3,19,-8],[12,-1,20,-3],[12,1,20,3],[12,3,19,8]].forEach(([a,b,c,d])=>{const k=Math.sin(T*5+i+a)*1.2;g.beginPath();g.moveTo(a,b);g.quadraticCurveTo((a+c)/2,(b+d)/2+k,c,d+k);g.stroke()})},
 (w,T,i)=>{g.beginPath();g.moveTo(10,0);g.lineTo(2,-12);g.lineTo(-3,-3);g.lineTo(-9,-1+w);g.lineTo(-14,-4+w*3);g.lineTo(-12,w*2);g.lineTo(-14,4+w*3);g.lineTo(-9,1+w);g.lineTo(-3,3);g.lineTo(1,12);g.closePath();g.fill();
  g.beginPath();g.ellipse(2,0,8,5,0,0,7);g.fill()},
 (w,T,i)=>{g.beginPath();g.arc(0,0,6.5,0,7);g.fill();g.beginPath();g.moveTo(-5,0);g.lineTo(-11,-3+w*3);g.lineTo(-11,3+w*3);g.fill();
  g.beginPath();g.ellipse(1,6,2.4,1.4,Math.sin(T*9+i)*.6,0,7);g.fill();g.beginPath();g.moveTo(-1,-6);g.lineTo(-4,-9+w);g.lineTo(2,-6);g.fill();
  for(let k=0;k<9;k++){const a=k/9*6.28,ca=Math.cos(a),sa=Math.sin(a);g.beginPath();g.moveTo(ca*6,sa*6);g.lineTo(ca*8.6,sa*8.6);g.lineTo(Math.cos(a+.25)*6,Math.sin(a+.25)*6);g.fill()}},
 (w,T,i)=>{[[0,0],[-10,5],[-10,-5],[-20,0],[-21,8],[-3,-9],[-14,-10],[-27,-5]].forEach(([x,y],k)=>{const ww=Math.sin(T*10+k*1.3);g.save();g.translate(x,y+Math.sin(T*2+k)*1.5);g.beginPath();g.ellipse(0,0,4.2,1.9,0,0,7);g.fill();g.beginPath();g.moveTo(-3.5,0);g.lineTo(-7,-2+ww*1.5);g.lineTo(-7,2+ww*1.5);g.fill();g.restore()})},
 (w,T,i)=>{const p=Math.sin(T*2.2+i);g.beginPath();g.ellipse(0,0,10,8,0,0,7);g.fill();g.beginPath();g.ellipse(11,0,4,3,0,0,7);g.fill();
  [[5,1],[5,-1],[-5,1],[-5,-1]].forEach(([x,s],k)=>{g.save();g.translate(x,s*7);g.rotate(s*(.5+(k%2?p:-p)*.4));g.beginPath();g.ellipse(0,s*3,2.6,5,0,0,7);g.fill();g.restore()});
  g.beginPath();g.moveTo(-9,0);g.lineTo(-14,w*2);g.lineTo(-9,1.5);g.fill()}];
// ===== Kantin sekolah: 5 kios, kasir, etalase =====
const KS=[
{x:14,sg:'KASIR',c:'#2f8f6b',kasir:1,pr:'',tot:'',fr:[],et:[],npc:'Kasir'},
{x:206,sg:'WARUNG PAK CEN',c:'#e0594f',pr:'Rp 12rb',tot:'12.000',fr:['🍛','🍚','🍗','🥗','🍳'],et:['🍛','🍗','🥚','🍚','🥗','🍳'],npc:'Pak Cen'},
{x:398,sg:'GORENGAN',c:'#d9a21b',pr:'Rp 1rb',tot:'3.000',fr:['🍢','🥟','🍤','🍟','🥔'],et:['🍢','🥟','🍤','🍟','🥔','🍘'],npc:'Mbak Rina'},
{x:590,sg:'ROTI DAN KUE',c:'#d9609b',pr:'Rp 5rb',tot:'10.000',fr:['🍞','🥐','🍩','🧁','🍪'],et:['🍞','🥐','🍩','🧁','🍪','🥯'],npc:'Kak Dewi'},
{x:782,sg:'MINUMAN',c:'#2f8fd4',pr:'Rp 4rb',tot:'4.000',fr:['🥤','🧃','🥛','🧋','🍹'],et:['🥤','🧃','🥛','🧋','🍹','🥤'],npc:'Bang Ujang'}];
const TBL=[];for(let r=0;r<2;r++)for(let c=0;c<4;c++)TBL.push([90+c*210,285+r*145]);
const EC={};
const emo=()=>{};
const kiosBack=(k,T)=>{const x=k.x,w=164;
 g.fillStyle='#f6ead0';g.fillRect(x,60,w,108);g.fillStyle='#e7d6b3';g.fillRect(x,60,w,6);
 g.fillStyle='#d9c196';g.fillRect(x,134,w,34);g.strokeStyle='#c8ae80';g.lineWidth=1;g.beginPath();for(let i=x+14;i<x+w;i+=14){g.moveTo(i,134);g.lineTo(i,168)}g.stroke();
 // rak belakang + isi
 (k.kasir?[]:[[x+4,0],[x+112,2]]).forEach(([sx,o])=>{g.fillStyle='#8d6b4a';g.fillRect(sx,116,48,4);g.fillStyle='#0002';g.fillRect(sx,120,48,2);for(let j=0;j<1;j++)emo(k.fr[(j+o)%5],sx+9+j*15,115,14)});
 
 // tenda bergaris
 for(let i=0;i<8;i++){g.fillStyle=i%2?'#fff':k.c;g.fillRect(x+i*w/8,60,w/8+.5,24)}
 for(let i=0;i<8;i++){g.fillStyle=i%2?'#fff':k.c;g.beginPath();g.arc(x+i*w/8+w/16,84,w/16,0,Math.PI);g.fill()}
 g.fillStyle='#0002';g.fillRect(x,60,w,3);
 rr(x+22,64,w-44,18,4,'#2a1c14');g.fillStyle='#ffe9a8';g.font='bold 12px "Pixelify Sans",sans-serif';g.textAlign='center';g.fillText(k.sg,x+w/2,77)};
const kiosFront=k=>(x,y)=>{const T=performance.now()/1000,w=164,d=mix(k.c,-.35);
 g.fillStyle='#0003';g.beginPath();g.ellipse(x+w/2,y+46,w/2+4,6,0,0,7);g.fill();
 // badan konter
 rr(x-2,y,w+4,12,4,'#e9c58e');rr(x-2,y+9,w+4,4,2,'#b88b57');rr(x,y+12,w,32,3,k.c);g.fillStyle='#fff4';g.fillRect(x+2,y+13,w-4,2);rr(x,y+40,w,4,2,d);if(k.kasir){g.fillStyle='#fff';g.font='bold 11px "Pixelify Sans",sans-serif';g.textAlign='center';g.fillText('Bayar disini',x+w/2,y+31);const bx=x+w/2-10,by=y-23;rr(x+w/2-7,y+1,14,3,1.5,'#2a2e36');rr(bx,by,20,26,2,'#2a2e36');rr(bx+1.5,by+1.5,17,23,1.5,'#fff');g.fillStyle='#2a2e36';g.font='bold 5px "Pixelify Sans",sans-serif';g.fillText('QRIS',bx+10,by+7);const qx=bx+3.5,qy=by+10,cz=1.3,fd=(i,j)=>(i<3&&j<3)||(i>6&&j<3)||(i<3&&j>6);for(let j=0;j<10;j++)for(let i=0;i<10;i++){const f=fd(i,j),on=f?!(i%9==1&&j%9==1):hs_(i*7+j*13+5)>.5;if(on){g.fillStyle='#1b1b22';g.fillRect(qx+i*cz,qy+j*cz,cz,cz)}}return}
 // etalase kaca depan (berisi makanan/minuman)
 rr(x+8,y+17,w-16,22,3,'#2a1c14');rr(x+10,y+19,w-20,18,2,'#e6f6fb');
 for(let j=0;j<5;j+=2)emo(k.fr[j],x+10+(w-20)/5*(j+.5),y+34,14);
 g.fillStyle='rgba(255,255,255,.45)';g.beginPath();g.moveTo(x+14,y+19);g.lineTo(x+34,y+19);g.lineTo(x+24,y+37);g.lineTo(x+10,y+37);g.closePath();g.fill();
 // etalase kaca di atas konter
 rr(x+6,y-32,54,36,3,'#4a4f5a');rr(x+9,y-29,48,30,2,'#e6f6fb');
 g.fillStyle='#8d6b4a';g.fillRect(x+9,y-17,48,2);g.fillRect(x+9,y-5,48,2);
 for(let j=0;j<3;j+=2){emo(k.et[j],x+19+j*15,y-19,13);emo(k.et[j+3],x+19+j*15,y-7,13)}
 g.fillStyle='rgba(255,255,255,.4)';g.beginPath();g.moveTo(x+12,y-29);g.lineTo(x+24,y-29);g.lineTo(x+14,y);g.lineTo(x+10,y);g.closePath();g.fill();
 rr(x+6,y-35,54,5,2,'#6b707c');};
const meja=i=>(x,y)=>{const F=['🍛','🍜','🍢','🍞','🥤','🍙'];
 g.fillStyle='#0003';g.beginPath();g.ellipse(x+78,y+58,84,7,0,0,7);g.fill();
 rr(x+4,y-16,142,12,4,'#b97a4a');rr(x+4,y-16,142,4,3,'#d19a66');
 rr(x,y,150,40,5,'#e6c997');rr(x,y+30,150,10,4,'#b88b57');g.fillStyle='#fff5';g.fillRect(x+4,y+3,142,3);
 [0,1].forEach(j=>{const tx=x+16+j*72;rr(tx,y+9,46,20,3,'#6f8caa');rr(tx+2,y+11,42,16,2,'#8fa9c4');j||emo(F[(i+j*3)%6],tx+23,y+25,15)});
 rr(x+4,y+44,142,12,4,'#d19a66');rr(x+4,y+52,142,4,3,'#b97a4a')};
const wastafel=(x,y)=>{const T=performance.now()/1000;
 g.fillStyle='#0003';g.beginPath();g.ellipse(x+52,y+52,56,6,0,0,7);g.fill();
 rr(x,y+18,100,32,4,'#9fb3c4');rr(x,y+18,100,10,4,'#d7e3ee');
 [x+26,x+74].forEach((sx,k)=>{rr(sx-14,y+26,28,16,6,'#6f8aa0');rr(sx-12,y+28,24,12,5,'#bfe3f5');
  g.fillStyle='#8f9aa6';g.fillRect(sx-1,y+8,2,18);g.fillRect(sx-1,y+8,8,2);g.fillRect(sx+6,y+8,2,5);
  const q=(T*1.2+k*.5)%1;g.fillStyle='rgba(120,190,235,'+(1-q)+')';g.fillRect(sx+6,y+13+q*12,2,3)});
 rr(x+10,y-4,80,14,3,'#2f8fd4');g.fillStyle='#fff';g.font='bold 9px "Pixelify Sans",sans-serif';g.textAlign='center';g.fillText('CUCI TANGAN',x+50,y+7)};
const kasirMeja=(x,y)=>{const w=170;
 g.fillStyle='#0003';g.beginPath();g.ellipse(x+w/2+3,y+48,w/2+10,7,0,0,7);g.fill();
 rr(x,y+10,w,36,4,'#c58d52');rr(x,y+38,w,8,3,'#8d5f35');g.fillStyle='#fff3';g.fillRect(x+3,y+15,w-6,2);
 rr(x-5,y,w+10,14,5,'#ecc999');rr(x-5,y+11,w+10,4,2,'#b88b57');g.fillStyle='#fff6';g.fillRect(x,y+2,w,2);
 g.fillStyle='#e0b24a';g.beginPath();g.arc(x+24,y+3,7,Math.PI,0);g.fill();rr(x+16,y+2,16,4,2,'#b8892a');cc(x+24,y-5,1.8,'#b8892a');
 rr(x+122,y+2,30,8,3,'#6b707c');rr(x+124,y,26,6,3,'#8b919e');[0,1,2].forEach(k=>cc(x+131+k*7,y+3,3,'#ffd54a'));
 rr(x+54,y+1,26,10,2,'#fff');g.fillStyle='#4f7cac';g.fillRect(x+54,y+1,4,10);g.fillStyle='#9aa4ac';g.fillRect(x+61,y+4,15,1);g.fillRect(x+61,y+7,11,1);g.fillStyle='#e45b5b';g.fillRect(x+88,y+5,14,2);
 rr(x+14,y+17,w-28,25,5,'#2a1c14');rr(x+17,y+20,w-34,19,3,'#e0594f');g.fillStyle='#fff3';g.fillRect(x+20,y+22,w-40,3);
 g.fillStyle='#fff';g.font='bold 14px "Pixelify Sans",sans-serif';g.textAlign='center';g.fillText('BAYAR DISINI',x+w/2,y+34)};

const flw=(x,y,T,s)=>{const cols=['#ff9ec2','#ffd54a','#ffffff','#c9a3ff','#ff8a7a'];
 g.fillStyle='#0001';g.beginPath();g.ellipse(x,y+1,18,4,0,0,7);g.fill();
 for(let k=0;k<5;k++){const fx=x+(k-2)*7+((s+k)%3),h=13+((s*3+k*5)%10),sw=Math.sin(T*2.3+s*1.7+k*1.1+x*.02)*3.4;
  g.strokeStyle='#3f8f3a';g.lineWidth=1.6;g.beginPath();g.moveTo(fx,y);g.quadraticCurveTo(fx+sw*.3,y-h*.5,fx+sw,y-h);g.stroke();
  g.fillStyle='#58b04d';g.beginPath();g.ellipse(fx+sw*.15+2.5,y-h*.4,3.2,1.4,-.5,0,7);g.fill();
  const c=cols[(s+k)%5],px=fx+sw,py=y-h,tl=Math.sin(T*2.3+s*1.7+k*1.1+x*.02)*.3;
  for(let q=0;q<5;q++){const a=q/5*6.283+tl;cc(px+Math.cos(a)*3.1,py+Math.sin(a)*3.1,2.3,c)}
  cc(px,py,1.7,'#ffe08a')}};
const MP=[
{n:'Kelas',f:'#dcbb8a',o:[[0,0,WW,100,null],[20,140,30,150,null],[910,140,30,150,null],[400,130,160,44,null],[76,150,32,30,null]],d:[],
 bg:()=>{const T=performance.now()/1000,D=new Date();
  g.fillStyle='#dcbb8a';g.fillRect(0,100,WW,WH-100);g.strokeStyle='#c7a470';g.lineWidth=1;g.beginPath();
  for(let y=100,k=0;y<WH;y+=24,k++){g.moveTo(0,y);g.lineTo(WW,y);for(let x=(k%3)*110+(k%2)*40;x<WW;x+=330){g.moveTo(x,y);g.lineTo(x,y+24)}}g.stroke();
  g.fillStyle='#f6efe0';g.fillRect(0,0,WW,100);g.fillStyle='#cdb48d';g.fillRect(0,68,WW,24);g.fillStyle='#b99a6a';g.fillRect(0,68,WW,3);g.fillStyle='#8d6b4a';g.fillRect(0,92,WW,8);g.fillStyle='#0002';g.fillRect(0,100,WW,6);
  const win=(x,y,w,h)=>{rr(x-4,y-4,w+8,h+8,4,'#e9e2d2');g.save();g.beginPath();g.rect(x,y,w,h);g.clip();const gr=g.createLinearGradient(0,y,0,y+h);gr.addColorStop(0,'#9fd8f7');gr.addColorStop(1,'#dff3fc');g.fillStyle=gr;g.fillRect(x,y,w,h);
   cc(x+w*.3,y+14,7,'#fff');cc(x+w*.3+9,y+16,5,'#fff');cc(x+w*.3-8,y+17,5,'#fff');
   g.strokeStyle='#6b4a3a';g.lineWidth=3;g.beginPath();g.moveTo(x+w+4,y+h*.6);g.quadraticCurveTo(x+w*.6,y+h*.35,x+w*.25,y+h*.5);g.stroke();
   [[.3,.5,7],[.45,.38,8],[.62,.42,9],[.8,.52,8],[.55,.55,6]].forEach(([a,b,r])=>{cc(x+w*a,y+h*b,r,'#4fa549');cc(x+w*a+2,y+h*b-2,r*.5,'#86d676')});
   for(let k=0;k<4;k++){const q=(T*.12+k/4+x*.003)%1;g.fillStyle='#7ccf6a';g.beginPath();g.ellipse(x+((q*w*1.3+k*27)%w),y+q*h,2.6,1.5,q*8,0,7);g.fill()}
   g.restore();g.fillStyle='#e9e2d2';g.fillRect(x+w/2-1.5,y,3,h);g.fillRect(x,y+h*.6,w,3)};
  win(30,22,96,50);win(136,22,96,50);win(756,22,84,50);win(848,22,84,50);
  [[24,8],[238,8]].forEach(([x])=>{g.fillStyle='#f3ead6';g.fillRect(x,16,12,62);g.strokeStyle='#d8cdb2';g.lineWidth=1;for(let k=3;k<12;k+=4){g.beginPath();g.moveTo(x+k,16);g.lineTo(x+k,78);g.stroke()}});
  // jam
  const cx=282,cy=40;cc(cx,cy,16,'#4a4a52');cc(cx,cy,14,'#fff');g.strokeStyle='#333';g.lineWidth=1;for(let k=0;k<12;k++){const a=k/12*6.2832;g.beginPath();g.moveTo(cx+Math.cos(a)*11,cy+Math.sin(a)*11);g.lineTo(cx+Math.cos(a)*13,cy+Math.sin(a)*13);g.stroke()}
  const hh=((D.getHours()%12)+D.getMinutes()/60)/12*6.2832-1.5708,mm=(D.getMinutes()+D.getSeconds()/60)/60*6.2832-1.5708,ss=D.getSeconds()/60*6.2832-1.5708;
  g.lineWidth=2;g.strokeStyle='#222';g.beginPath();g.moveTo(cx,cy);g.lineTo(cx+Math.cos(hh)*7,cy+Math.sin(hh)*7);g.stroke();g.lineWidth=1.5;g.beginPath();g.moveTo(cx,cy);g.lineTo(cx+Math.cos(mm)*10,cy+Math.sin(mm)*10);g.stroke();g.lineWidth=1;g.strokeStyle='#e53935';g.beginPath();g.moveTo(cx,cy);g.lineTo(cx+Math.cos(ss)*11,cy+Math.sin(ss)*11);g.stroke();cc(cx,cy,1.5,'#222');
  // papan tulis
  rr(312,14,336,66,5,'#a97c4e');rr(320,20,320,50,3,'#2f5d4a');rr(320,20,320,8,3,'#ffffff12');
  const WK=['日','月','火','水','木','金','土'];
  g.textAlign='left';g.fillStyle='#e8f1ea';g.font='bold 20px "Hiragino Sans","Yu Gothic","Noto Sans JP","Pixelify Sans",sans-serif';g.fillText(D.getDate()+'日 '+WK[D.getDay()]+'曜日',334,52);
  g.font='8px "Hiragino Sans","Yu Gothic","Noto Sans JP",sans-serif';g.fillStyle='#e8f1eacc';g.textAlign='center';
  const HG='あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん';
  for(let i=0;i<56;i++)g.fillText(HG[i%HG.length],495+(i%14)*10.5,32+((i/14)|0)*10);
  g.textAlign='left';
  rr(318,74,324,6,2,'#8d6b4a');g.fillStyle='#fff';g.fillRect(340,72,10,3);g.fillStyle='#ffd166';g.fillRect(354,72,8,3);rr(590,71,26,5,2,'#6b5b4a');
  // papan pengumuman
  rr(662,22,78,50,3,'#a97c4e');rr(666,26,70,42,2,'#d9b38a');[[670,30,20,16,'#ffd166'],[694,30,18,22,'#ff9eb5'],[716,30,16,14,'#8fd3f4'],[672,50,22,14,'#fff'],[698,56,30,10,'#a8e6a1']].forEach(([x,y,w,h,c])=>{g.fillStyle=c;g.fillRect(x,y,w,h);cc(x+w/2,y+2,1.5,'#e53935')});
  // podium guru
  rr(330,102,300,86,8,'#b98e58');rr(330,102,300,78,8,'#d2a96f');g.fillStyle='#0001';g.fillRect(334,176,292,6);
  // karpet kecil depan
  rr(360,206,240,40,10,'#c8d9ea');g.strokeStyle='#fff8';g.lineWidth=2;g.beginPath();g.roundRect(366,212,228,28,8);g.stroke();
  // meja guru
  g.fillStyle='#0003';g.beginPath();g.ellipse(482,176,86,7,0,0,7);g.fill();rr(400,130,160,32,4,'#c58d52');rr(400,130,160,5,3,'#e0ac72');rr(404,160,152,14,2,'#8d5f35');g.fillStyle='#0002';g.fillRect(410,164,60,6);g.fillRect(490,164,60,6);
  g.fillStyle='#fff';g.fillRect(414,134,22,16);g.fillStyle='#4f7cac';g.fillRect(414,134,3,16);g.fillStyle='#e45b5b';g.fillRect(440,138,14,12);g.fillStyle='#ffd166';g.fillRect(440,134,14,4);
  rr(520,134,18,14,3,'#fff');g.fillStyle='#8d6b4a';g.fillRect(523,140,12,2);g.fillStyle='#c0392b';g.fillRect(496,138,10,8);
  // kursi guru
  rr(462,110,40,16,5,'#6a4c93');rr(462,106,40,6,3,'#52397a');
  // rak sepatu kiri
  rr(20,140,30,150,3,'#9c7448');g.fillStyle='#0003';g.fillRect(48,144,4,146);
  for(let r=0;r<5;r++)for(let c=0;c<2;c++){const x=23+c*13,y=143+r*29;rr(x,y,11,26,2,'#6e4f2f');const col=['#e45b5b','#4f7cac','#ffd166','#8fd3f4','#a99bf5','#ff9eb5','#a8e6a1','#f5f5f5','#ffb88a','#7aa889'][(r*2+c)%10];g.fillStyle=col;g.fillRect(x+2,y+10,7,14);g.fillStyle='#fff6';g.fillRect(x+2,y+10,7,2)}
  // loker kanan
  rr(910,140,30,150,3,'#7c91a5');for(let k=0;k<3;k++){const y=143+k*49;rr(913,y,24,46,2,'#a8bccd');g.fillStyle='#7c91a5';[6,10,14].forEach(o=>g.fillRect(917,y+o,16,2));g.fillStyle='#e8eef3';g.fillRect(918,y+30,3,8);g.fillStyle='#fff5';g.fillRect(914,y+1,22,3)}
  // pot tanaman
  g.fillStyle='#0002';g.beginPath();g.ellipse(94,180,16,5,0,0,7);g.fill();rr(82,166,24,16,3,'#c9743f');cc(94,158,13,'#4fa549');cc(86,154,8,'#68bd5b');cc(102,154,8,'#68bd5b');cc(94,148,7,'#86d676');
  // bangku siswa (meja satu orang)
  for(let a=0;a<3;a++)for(let b=0;b<4;b++)for(let k=0;k<2;k++){const dx=120+b*200+k*58,dy=250+a*110,n=a*8+b*2+k;
   rr(dx+7,dy+30,38,14,4,['#6aa0c7','#7fb08e','#e0a86a','#b79ad6'][(a+b+k)%4]);rr(dx+7,dy+42,38,6,3,'#0003');
   g.fillStyle='#0002';g.fillRect(dx+3,dy+27,46,4);rr(dx,dy,52,27,4,'#ecd7b0');rr(dx,dy+22,52,5,3,'#c7a56e');g.fillStyle='#fff6';g.fillRect(dx+3,dy+2,46,3);
   if(n%3==0){g.fillStyle='#fff';g.fillRect(dx+8,dy+8,16,12);g.fillStyle='#4f7cac';g.fillRect(dx+8,dy+8,3,12)}if(n%4==1){g.fillStyle='#ffd166';g.fillRect(dx+32,dy+10,12,3)}}
  }},
{n:'Kantin',f:'#efe6d0',
o:[[0,0,WW,204,null],...TBL.map(([x,y])=>[x,y-16,150,72,null]),[30,520,28,40,null],[66,520,28,40,null],[102,520,28,40,null],[830,500,100,50,null]],
d:[...KS.map(k=>[kiosFront(k),k.x,160,204]),...TBL.map(([x,y],i)=>[meja(i),x,y,y+56]),
 [bin('#e53935','B3',2),30,520,560],[bin('#f6c744','Anor.',1),66,520,560],[bin('#43a047','Org.',0),102,520,560],
 [wastafel,830,500,550]],
bg:()=>{const T=performance.now()/1000;
  // lantai keramik
  g.fillStyle='#efe6d0';g.fillRect(0,0,WW,WH);
  for(let y=204,r=0;y<WH;y+=48,r++)for(let x=0,c=0;x<WW;x+=48,c++)if((r+c)%2==0){g.fillStyle='#e3d7b9';g.fillRect(x,y,48,48)}
  g.fillStyle='#0001';g.fillRect(0,204,WW,6);
  // garis antrian
  g.strokeStyle='#e8b923';g.lineWidth=4;g.setLineDash([14,10]);g.beginPath();g.moveTo(14,224);g.lineTo(946,224);g.stroke();g.setLineDash([]);
  // dinding belakang
  g.fillStyle='#f3e4c0';g.fillRect(0,0,WW,60);g.fillStyle='#d9534f';g.fillRect(0,50,WW,10);g.fillStyle='#fff';g.fillRect(0,56,WW,2);
  // bendera hias
  for(let x=10,k=0;x<950;x+=36,k++){const sg=Math.sin(x/960*Math.PI)*8,sw=Math.sin(T*2+k)*1.2;g.fillStyle=['#e0594f','#ffd166','#4fb0e0','#8bc34a','#ff9eb5'][k%5];g.beginPath();g.moveTo(x,2+sg);g.lineTo(x+24,2+sg);g.lineTo(x+12+sw,20+sg);g.closePath();g.fill()}
  // papan nama kantin
  rr(306,18,348,34,6,'#a97c4e');rr(311,22,338,26,4,'#2f5d4a');g.fillStyle='#fff';g.font='bold 20px "Pixelify Sans",sans-serif';g.textAlign='center';g.fillText('KANTIN SEKOLAH',480,43);
  // poster
  rr(150,14,86,38,3,'#fff');rr(153,17,80,32,2,'#c9f2dc');g.fillStyle='#2a7f62';g.font='bold 10px "Pixelify Sans",sans-serif';g.fillText('JAJAN SEHAT',193,30);g.font='9px "Pixelify Sans",sans-serif';g.fillText('Gizi Seimbang',193,42);
  rr(724,14,86,38,3,'#fff');rr(727,17,80,32,2,'#ffe3ec');g.fillStyle='#c0392b';g.font='bold 10px "Pixelify Sans",sans-serif';g.fillText('BUANG SAMPAH',767,30);g.font='9px "Pixelify Sans",sans-serif';g.fillText('pada tempatnya',767,42);
  // 5 kios
  KS.forEach(k=>kiosBack(k,T));
  // sekat antar kios
  [0,1,2,3].forEach(i=>{const x=178+i*192;rr(x,60,28,144,3,'#7a5236');g.fillStyle='#8f6444';g.fillRect(x+3,64,5,136);g.fillStyle='#0002';g.fillRect(x+22,64,4,136);rr(x-2,58,32,8,3,'#5a3d2b')});
  g.fillStyle='#7a5236';g.fillRect(0,60,14,144);g.fillRect(946,60,14,144);
  }},
{n:'Lapangan Upacara',f:'#86c06a',o:[[0,0,WW,108,null],[466,126,28,18,null],[420,190,120,36,null],[70,132,28,40,null],[106,132,28,40,null],[142,132,28,40,null],[730,130,180,120,null],[768,274,76,22,null],...TR.map(([x,y])=>[x-8,y-14,16,18,null])],
 d:[[podium,420,190,226],[bin('#e53935','B3',2),70,132,172],[bin('#f6c744','Anor.',1),106,132,172],[bin('#43a047','Org.',0),142,132,172],[bench,768,274,296],...TR.map(([x,y])=>[tree,x,y,y])],
 bg:()=>{const T=performance.now()/1000;
  // rumput belang
  g.fillStyle='#7cb760';for(let y=0;y<WH;y+=80)g.fillRect(0,y,WW,40);
  // gedung sekolah
  g.fillStyle='#f4efe6';g.fillRect(0,0,WW,92);g.fillStyle='#3b4a5e';g.fillRect(0,0,WW,12);g.fillStyle='#e0594f';g.fillRect(0,12,WW,4);
  for(let i=0;i<10;i++){const x=24+i*96;if(x+72>430&&x<590)continue;rr(x,28,72,40,4,'#86c7ee');rr(x,28,72,18,4,'#a9dcf8');g.fillStyle='#fff';g.fillRect(x+34,28,3,40);g.fillStyle='#fff6';g.beginPath();g.moveTo(x+8,66);g.lineTo(x+22,30);g.lineTo(x+30,30);g.lineTo(x+16,66);g.fill()}
  g.fillStyle='#c9ced6';g.fillRect(0,86,WW,8);g.fillStyle='#b4bac3';g.fillRect(0,94,WW,4);
  // pagar tanaman
  [[40,452],[508,912]].forEach(([a,b])=>{rr(a,96,b-a,14,7,'#3f8f3a');for(let x=a+6;x<b-4;x+=14){cc(x,100+(x/14%2)*3,5,'#58b04d');if((x/14|0)%4==0)cc(x+3,98,2,'#ffd54a')}});
  // plaza paving modern
  rr(40,110,880,470,14,'#e3e6ea');g.strokeStyle='#d3d7dd';g.lineWidth=1;
  for(let x=100;x<920;x+=60){g.beginPath();g.moveTo(x,110);g.lineTo(x,580);g.stroke()}
  for(let y=110;y<=580;y+=60){g.beginPath();g.moveTo(40,y);g.lineTo(920,y);g.stroke()}
  g.fillStyle='#cfe8e4';g.beginPath();g.arc(480,430,64,0,7);g.fill();g.strokeStyle='#fff';g.lineWidth=4;g.beginPath();g.arc(480,430,64,0,7);g.stroke();g.beginPath();g.arc(480,430,44,0,7);g.stroke();
  g.strokeStyle='#fff';g.lineWidth=4;g.lineCap='round';[300,400,500].forEach(y=>{g.beginPath();g.moveTo(70,y);g.lineTo(890,y);g.stroke()});[270,480,690].forEach(x=>{g.beginPath();g.moveTo(x,260);g.lineTo(x,560);g.stroke()});g.lineCap='butt';
  g.strokeStyle='#c4cad2';g.lineWidth=8;g.beginPath();g.roundRect(44,114,872,462,12);g.stroke();g.strokeStyle='#2a9d8f';g.lineWidth=3;g.beginPath();g.roundRect(54,124,852,442,8);g.stroke();
  // label tempat sampah

  // tiang bendera
  g.fillStyle='#0002';g.beginPath();g.ellipse(483,142,24,8,0,0,7);g.fill();rr(466,128,28,14,6,'#aab0b8');rr(470,124,20,8,4,'#c4c9d0');
  g.fillStyle='#bfc4ca';g.fillRect(477,24,6,104);g.fillStyle='#fff6';g.fillRect(477,24,2,104);cc(480,22,6,'#f2c230');
  for(let i=0;i<22;i++){const a=i*3,wv=Math.sin(T*4-i*.5)*(1+i*.18);g.fillStyle='#e53935';g.fillRect(483+a,28+wv,3.2,18);g.fillStyle='#f4f4f4';g.fillRect(483+a,46+wv,3.2,18);g.fillStyle='rgba(0,0,0,'+(.06+.05*Math.sin(T*4-i*.5))+')';g.fillRect(483+a,28+wv,3.2,36)}
  g.font='bold 9px "Pixelify Sans",sans-serif';
  // kolam ikan kotak (siluet)
  rr(726,126,188,128,6,'#a7a193');rr(731,131,178,118,4,'#d8d2c4');g.strokeStyle='#b3ac9c';g.lineWidth=2;g.setLineDash([10,6]);g.beginPath();g.roundRect(735,135,170,110,3);g.stroke();g.setLineDash([]);
  g.fillStyle='#8a857a';g.fillRect(738,138,164,104);
  g.save();g.beginPath();g.rect(740,140,160,100);g.clip();
  const wg=g.createLinearGradient(740,140,900,240);wg.addColorStop(0,'#c9f0f8');wg.addColorStop(.6,'#8fd6ea');wg.addColorStop(1,'#5db5d6');g.fillStyle=wg;g.fillRect(740,140,160,100);
  g.lineWidth=1.5;for(let i=0;i<6;i++){g.strokeStyle='rgba(255,255,255,.3)';g.beginPath();for(let x=740;x<=900;x+=8){const y=146+i*17+Math.sin(T*1.3+x/18+i)*2.5;x==740?g.moveTo(x,y):g.lineTo(x,y)}g.stroke()}
  const SC=['#1f6288','#18506f','#2b7399'];
  [[0,.5,44,22,-4,-2,0,1.1,0],[1,.42,40,20,6,4,3.1,1.1,1],[6,.46,40,22,0,0,1.7,1,2]]
  .forEach(([ty,sp,rx,ry,ox,oy,ph,sz,ci],i)=>{const a=T*sp+ph,fx=i==1?2:1,q=fx==2?.7:1,x=820+ox+Math.cos(a*fx)*rx*q,y=190+oy+Math.sin(a)*ry,vx=-Math.sin(a*fx)*fx*rx*q,vy=Math.cos(a)*ry,an=Math.atan2(vy,vx),w=Math.sin(T*(7+sp*5)+i*1.7);
   g.save();g.translate(x,y);g.rotate(an);g.scale(sz,sz);g.fillStyle=SC[ci];FD[ty](w,T,i);g.restore()});
  [[780,175],[860,210],[800,215]].forEach(([x,y],k)=>{const q=(T*.3+k/3)%1;g.strokeStyle='rgba(255,255,255,'+(.7*(1-q))+')';g.lineWidth=2;g.beginPath();g.ellipse(x,y,q*24,q*11,0,0,7);g.stroke()});
  [[790,205],[850,165],[830,222]].forEach(([x,y],k)=>{const q=(T*.25+k/3)%1;g.fillStyle='rgba(255,255,255,'+(.6*(1-q))+')';g.beginPath();g.arc(x+Math.sin(T*2+k)*3,y-q*30,1.4+q,0,7);g.fill()});
  g.fillStyle='#fff3';g.beginPath();g.moveTo(745,145);g.lineTo(800,145);g.lineTo(770,160);g.lineTo(745,160);g.fill();
  [[772,224,0],[868,164,1.5],[860,226,3],[760,172,4.4]].forEach(([x,y,ph])=>{const b=Math.sin(T*.9+ph)*1.2,r2=11;g.fillStyle='#3f9a46';g.beginPath();g.moveTo(x,y+b);g.arc(x,y+b,r2,.35+ph,6.2+ph);g.closePath();g.fill();g.fillStyle='#57b85c';g.beginPath();g.arc(x-2,y+b-2,r2*.55,0,7);g.fill();
   if(ph<3.2){cc(x+2,y+b-1,4,'#ff9ec2');cc(x+2,y+b-1,2,'#fff1f6')}});
  g.restore();
  // bunga kecil berhembus di samping pohon
  TR.filter(([x])=>x<100||x>860).forEach(([x,y],i)=>{const o=x<100?1:-1;flw(x+o*30,y+6,T,i*2);flw(x-o*26,y+8,T,i*2+1)});
  // pot tanaman kecil
  [[60,560],[900,560]].forEach(([x,y])=>{rr(x-10,y-8,20,14,3,'#c9743f');cc(x,y-12,10,'#4fa549');cc(x-4,y-15,4,'#ff9ec2')})}}];
for(let a=0;a<3;a++)for(let b=0;b<4;b++)MP[0].o.push([120+b*200,250+a*110,110,48,null]);

const hs_=n=>{const x=Math.sin(n*127.1+311.7)*43758.5453;return x-Math.floor(x)};
const potLib=(x,y)=>{g.fillStyle='#0002';g.beginPath();g.ellipse(x,y+8,15,5,0,0,7);g.fill();rr(x-11,y-6,22,16,3,'#c9743f');cc(x,y-14,13,'#3f8f3a');cc(x-8,y-10,8,'#4fa549');cc(x+8,y-10,8,'#4fa549');cc(x,y-22,8,'#68bd5b')};
const binHitam=(x,y)=>{const w=32,h=46,m=x+w/2;
 g.fillStyle='#0004';g.beginPath();g.ellipse(m+3,y+h+1,22,6,0,0,7);g.fill();
 g.fillStyle='#26262c';g.beginPath();g.moveTo(x+3,y+10);g.lineTo(x+w-3,y+10);g.lineTo(x+w-5,y+h);g.lineTo(x+5,y+h);g.closePath();g.fill();
 g.fillStyle='#3c3c45';g.fillRect(x+7,y+12,4,h-16);g.fillStyle='#111116';g.fillRect(x+w-11,y+12,6,h-16);
 g.fillStyle='#4a4a54';[18,28,38].forEach(o=>g.fillRect(x+4,y+o,w-8,2));
 rr(x-1,y+4,w+2,9,4,'#32323a');rr(x-1,y+10,w+2,3,2,'#18181d');rr(x+2,y+5,w-4,2,1,'#6a6a76');rr(m-6,y-1,12,6,3,'#18181d');g.fillStyle='#6a6a76';g.fillRect(m-4,y,8,1.5)};
const pohonBesar=(x,y)=>{g.save();g.translate(x,y);g.scale(3,3);tree(0,0);g.restore()};
// ===== PERPUSTAKAAN (mengikuti referensi: interior biru) =====
const rakLib=(lb,seed)=>(x,y)=>{const W=122,H=118,BC=['#2f5f7a','#2c7a6b','#3a4f8f','#8a5a3b','#cfd8de','#b5453f','#d9b24a','#4a7a4f'];
 g.fillStyle='#0003';g.beginPath();g.ellipse(x+W/2+4,y+H+2,W/2+4,6,0,0,7);g.fill();
 rr(x,y,W,H,4,'#a07a4a');rr(x+4,y+17,W-8,H-23,2,'#27394b');
 for(let r=0;r<3;r++){const ry=y+19+r*29;let bx=x+7,k=0;
  while(bx<x+W-11){const bw=4+Math.floor(hs_(seed*50+r*13+k)*5),bh=18+Math.floor(hs_(seed*70+r*7+k*3)*8),c=BC[Math.floor(hs_(seed*31+r*17+k*5)*BC.length)];
   if(hs_(seed*9+r*5+k*11)>.92){bx+=6;k++;continue}
   g.fillStyle=c;g.fillRect(bx,ry+26-bh,bw,bh);g.fillStyle='#fff3';g.fillRect(bx,ry+26-bh,1.5,bh);g.fillStyle='#0004';g.fillRect(bx+bw-1.5,ry+26-bh,1.5,bh);
   bx+=bw+1;k++}
  rr(x+3,ry+26,W-6,4,1,'#b58c5a')}
 rr(x-3,y-5,W+6,9,3,'#8a653a');g.fillStyle='#fff3';g.fillRect(x,y-3,W,2);
 rr(x+W/2-15,y+4,30,12,2,'#e8eef2');g.strokeStyle='#6b7a86';g.lineWidth=1.2;g.beginPath();g.roundRect(x+W/2-15,y+4,30,12,2);g.stroke();
 g.fillStyle='#27394b';g.font='bold 10px "Pixelify Sans",sans-serif';g.textAlign='center';g.fillText(lb,x+W/2,y+13.5)};
const resepsi=(x,y)=>{const W=250;
 g.fillStyle='#0003';g.beginPath();g.ellipse(x+W/2+4,y+124,W/2+12,9,0,0,7);g.fill();
 g.fillStyle='#f2e8d8';g.beginPath();g.roundRect(x,y+30,W,92,[40,40,12,12]);g.fill();
 rr(x+4,y+106,W-8,14,6,'#d9ccb4');g.fillStyle='#fff6';g.fillRect(x+14,y+40,6,60);
 rr(x-8,y+14,W+16,26,13,'#c98e4f');rr(x-8,y+14,W+16,10,10,'#e0a867');g.fillStyle='#fff4';g.fillRect(x+6,y+17,W-12,2);
 [x+50,x+150].forEach(mx=>{rr(mx,y-8,40,28,3,'#2e3b48');rr(mx+3,y-5,34,20,2,'#a8dcf5');g.fillStyle='#fff7';g.fillRect(mx+5,y-3,14,3);g.fillStyle='#2e3b48';g.fillRect(mx+17,y+20,6,5)});
 rr(x+98,y+22,48,7,2,'#cfd5da');rr(x+200,y+4,22,14,2,'#fff');g.fillStyle='#d9534f';g.fillRect(x+203,y+7,16,3);
 rr(x+W/2-34,y+62,68,22,5,'#fff');g.fillStyle='#2f5d8a';g.font='bold 11px "Pixelify Sans",sans-serif';g.textAlign='center';g.fillText('LAYANAN',x+W/2,y+77)};
const brosur=(x,y)=>{g.fillStyle='#0003';g.beginPath();g.ellipse(x+17,y+72,20,5,0,0,7);g.fill();rr(x,y,34,70,3,'#e5e8ea');
 for(let i=0;i<3;i++){rr(x+3,y+4+i*20,28,16,2,'#fff');g.fillStyle=['#7fb0e0','#e0a86a','#8fd08a'][i];g.fillRect(x+6,y+7+i*20,10,10);g.fillStyle='#9aa4ac';g.fillRect(x+18,y+9+i*20,10,2);g.fillRect(x+18,y+14+i*20,8,2)}};
const rakMaj=(x,y)=>{const W=92,H=140,C=['#d9534f','#4f8fd9','#e0b84a','#58b04d','#9a6fd1','#e07fa6','#3fa7a0','#e08a4a','#2f5f7a','#b5453f','#7fb0e0','#f4efe6'];
 g.fillStyle='#0003';g.beginPath();g.ellipse(x+W/2+4,y+H+2,W/2+6,7,0,0,7);g.fill();
 rr(x,y,W,H,4,'#e4c98e');rr(x+5,y+5,W-10,H-10,2,'#cfae6c');
 for(let r=0;r<4;r++){const ry=y+8+r*32;for(let c=0;c<3;c++){const cl=C[(r*3+c)%C.length];rr(x+9+c*26,ry+2,22,24,1.5,cl);g.fillStyle='#fff8';g.fillRect(x+12+c*26,ry+5,16,3);g.fillStyle='#0003';g.fillRect(x+12+c*26,ry+16,12,2)}rr(x+5,ry+27,W-10,5,1,'#e9d29c')}};
const kursiH=(x,y,f)=>{const d='#237d6c';g.fillStyle='#6b4a2a';g.fillRect(x+3,y+22,3,9);g.fillRect(x+22,y+22,3,9);
 if(f){rr(x,y,28,24,6,'#2f9a86');rr(x+3,y+4,22,12,4,'#0002');rr(x+1,y+20,26,11,4,d)}else{rr(x+1,y-9,26,11,4,d);rr(x,y,28,24,6,'#2f9a86');rr(x+3,y+10,22,12,4,'#0002')}};
const mejaPanjang=(x,y)=>{for(let i=0;i<4;i++)kursiH(x+14+i*72,y-24,0);
 g.fillStyle='#0003';g.beginPath();g.ellipse(x+152,y+44,160,9,0,0,7);g.fill();
 g.fillStyle='#8a6a40';g.fillRect(x+12,y+28,8,20);g.fillRect(x+280,y+28,8,20);
 rr(x,y,300,34,5,'#e0bf8c');rr(x,y+26,300,12,4,'#b58f5c');g.fillStyle='#fff5';g.fillRect(x+5,y+3,290,3);
 rr(x+30,y+8,30,18,2,'#f4efe6');g.fillStyle='#4f7cac';g.fillRect(x+30,y+8,4,18);rr(x+120,y+8,36,20,2,'#cfd5da');rr(x+124,y+4,28,18,2,'#2e3b48');g.fillStyle='#a8dcf5';g.fillRect(x+126,y+6,24,13);rr(x+210,y+10,26,16,2,'#d9534f');rr(x+212,y+8,26,16,2,'#e0b84a');
 for(let i=0;i<4;i++)kursiH(x+14+i*72,y+34,1)};
const sofaBiru=(x,y)=>{g.fillStyle='#0003';g.beginPath();g.ellipse(x+28,y+52,32,6,0,0,7);g.fill();
 rr(x,y,54,46,8,'#3f6fb5');rr(x+4,y+6,36,34,6,'#5a8ad0');rr(x+40,y,14,46,6,'#2f5a9a');rr(x+2,y-4,46,9,4,'#c99a5c');rr(x+2,y+41,46,9,4,'#c99a5c')};
const MPL=[[30,'A',1],[170,'B',2],[310,'C',3],[450,'D',4],[590,'E',5]];
const lampuLib=[60,260,460,660,820];
// ===== TAMAN SAKURA (mengikuti referensi: plaza sekolah putih + pohon sakura) =====
const IS={x:480,y:362,rx:190,ry:60},isO=[];
for(let t=0;t<6.283;t+=.17)isO.push([IS.x+Math.cos(t)*IS.rx-15,IS.y+Math.sin(t)*IS.ry-7,30,14,null]);
const awan=(x,y,T)=>{const X=(x+T*6)%1100-70;g.fillStyle='#fff';g.beginPath();g.ellipse(X,y,34,9,0,0,7);g.ellipse(X+18,y-5,22,10,0,0,7);g.ellipse(X-16,y-3,18,8,0,0,7);g.fill()};
const SKB=[];for(let i=0;i<150;i++){const a=hs_(i*3.1)*6.283,r=Math.sqrt(hs_(i*7.7+1));SKB.push([Math.cos(a)*r*158,Math.sin(a)*r*128,17+hs_(i*5.3)*20,i])}
SKB.sort((p,q)=>q[1]-p[1]);
const sakura=(x,y)=>{const T=performance.now()/1000,cy=y-200;
 g.fillStyle='#0003';g.beginPath();g.ellipse(x+10,y+2,46,11,0,0,7);g.fill();
 g.fillStyle='#5e4032';g.beginPath();g.moveTo(x-17,y);g.quadraticCurveTo(x-10,y-60,x-12,y-130);g.lineTo(x+12,y-130);g.quadraticCurveTo(x+10,y-60,x+19,y);g.closePath();g.fill();
 g.fillStyle='#7d5a47';g.beginPath();g.moveTo(x-12,y);g.quadraticCurveTo(x-6,y-60,x-8,y-130);g.lineTo(x-1,y-130);g.quadraticCurveTo(x-1,y-60,x-2,y);g.closePath();g.fill();
 g.fillStyle='#0003';g.fillRect(x+8,y-120,4,118);
 let br=false;
 const branches=()=>{g.strokeStyle='#5e4032';g.lineCap='round';[[-70,-175,8],[72,-182,8],[-22,-205,6],[30,-212,6]].forEach(([dx,dy,w])=>{g.lineWidth=w;g.beginPath();g.moveTo(x,y-110);g.quadraticCurveTo(x+dx*.3,y-150,x+dx,y+dy);g.stroke()});g.lineCap='butt'};
 SKB.forEach(([ex,ey,r,i])=>{const t=(ey+128)/256;if(!br&&t<.55){br=true;branches()}
  const sx=Math.sin(T*.9+i*.7)*1.8*(1-t*.5),c=t<.2?'#ffe3ef':t<.42?'#fbc3da':t<.68?'#f3a1c6':t<.86?'#e17fae':'#c9669a';
  cc(x+ex+sx,cy+ey,r,c);if(t<.5)cc(x+ex+sx-r*.25,cy+ey-r*.3,r*.55,t<.2?'#fff0f6':'#ffd3e5')});
 for(let i=0;i<26;i++){const px=x+(hs_(i*2.3)-.5)*300+Math.sin(T+i)*2,py=cy+(hs_(i*4.1)-.5)*240;g.fillStyle='#fff9';g.fillRect(px,py,2,2)}};
const sideTree=sc=>(x,y)=>{g.save();g.translate(x,y);g.scale(sc,sc);tree(0,0);g.restore()};
const benchKayu=W=>(x,y)=>{g.fillStyle='#0003';g.beginPath();g.ellipse(x+W/2+3,y+24,W/2+8,6,0,0,7);g.fill();
 g.fillStyle='#2e323b';g.fillRect(x+8,y+8,4,18);g.fillRect(x+W-12,y+8,4,18);g.fillRect(x+10,y-20,3,14);g.fillRect(x+W-13,y-20,3,14);
 rr(x,y-26,W,8,2,'#a9733f');rr(x,y-17,W,8,2,'#b97f47');
 rr(x-2,y,W+4,8,3,'#d19a66');rr(x-2,y+9,W+4,7,3,'#a9733f');g.fillStyle='#fff4';g.fillRect(x+2,y+1,W-4,2);g.fillStyle='#0002';g.fillRect(x+3,y+14,W-6,1);
 rr(x-5,y-22,6,28,2,'#2e323b');rr(x+W-1,y-22,6,28,2,'#2e323b')};
const lampu=(x,y)=>{g.fillStyle='#0003';g.beginPath();g.ellipse(x+3,y+1,10,3,0,0,7);g.fill();rr(x-5,y-8,10,9,2,'#2a2e36');g.fillStyle='#3a3f48';g.fillRect(x-2,y-140,4,134);g.fillStyle='#fff3';g.fillRect(x-2,y-140,1.5,134);
 rr(x-3,y-146,18,6,3,'#2a2e36');rr(x+4,y-142,12,6,2,'#fff7c8')};
const MPX=[
{n:'Perpustakaan',f:'#3f9fd4',
 o:[[0,0,WW,138,null],...MPL.map(([x])=>[x,138,122,36,null]),[20,326,250,98,null],[282,350,34,44,null],[330,272,300,34,null],[330,402,300,34,null],[790,400,92,40,null],[836,480,54,30,null],[836,530,54,30,null],[730,322,24,18,null]],
 d:[...MPL.map(([x,lb,sd])=>[rakLib(lb,sd),x,56,174]),[resepsi,20,300,424],[brosur,282,336,406],[mejaPanjang,330,270,304],[mejaPanjang,330,400,434],[rakMaj,790,300,440],[sofaBiru,836,470,516],[sofaBiru,836,520,566],[potLib,742,334,342]],
 bg:()=>{const T=performance.now()/1000;
  const fl=g.createLinearGradient(0,130,0,WH);fl.addColorStop(0,'#5bb6e2');fl.addColorStop(1,'#3a90c8');g.fillStyle=fl;g.fillRect(0,0,WW,WH);
  g.strokeStyle='#ffffff22';g.lineWidth=1;g.beginPath();for(let y=140;y<WH;y+=60){g.moveTo(0,y);g.lineTo(WW,y)}for(let x=0;x<WW;x+=80){g.moveTo(x,138);g.lineTo(x,WH)}g.stroke();
  g.fillStyle='rgba(255,255,255,.12)';[[150,230],[390,300],[620,230],[250,500],[600,520],[850,380]].forEach(([x,y],i)=>{g.beginPath();g.ellipse(x,y,100,14,0,0,7);g.fill()});
  g.fillStyle='#7da6dc';g.fillRect(0,22,WW,116);g.fillStyle='#6a92cb';g.fillRect(0,104,WW,34);g.fillStyle='#3f66a8';g.fillRect(0,132,WW,6);g.fillStyle='#fff3';g.fillRect(0,22,WW,3);
  g.fillStyle='#dfe7f2';g.fillRect(0,0,WW,22);g.fillStyle='#c4d0e0';g.fillRect(0,18,WW,4);
  lampuLib.forEach(x=>{g.fillStyle='rgba(255,255,255,.16)';g.beginPath();g.moveTo(x-6,22);g.lineTo(x+126,22);g.lineTo(x+150,60);g.lineTo(x-30,60);g.fill();rr(x,5,120,10,3,'#fff');g.fillStyle='#fff9';g.fillRect(x+4,6,112,2)});
  rr(420,24,84,16,3,'#eef1f4');g.fillStyle='#b8c2cc';for(let i=0;i<6;i++)g.fillRect(426+i*13,30,9,2);
  rr(300,28,360,24,6,'#2f5d8a');rr(305,31,350,18,4,'#244a70');g.fillStyle='#fff';g.font='bold 18px "Pixelify Sans",sans-serif';g.textAlign='center';g.fillText('PERPUSTAKAAN',480,46);
  // jendela besar kanan
  g.fillStyle='rgba(255,255,255,.12)';g.beginPath();g.moveTo(780,138);g.lineTo(940,138);g.lineTo(900,330);g.lineTo(700,330);g.fill();
  rr(766,26,180,100,4,'#f2f6fa');for(let i=0;i<2;i++)for(let j=0;j<2;j++){const wx=772+i*86,wy=32+j*46,gr=g.createLinearGradient(wx,wy,wx+80,wy+42);gr.addColorStop(0,'#cfeaff');gr.addColorStop(1,'#8ec9f2');rr(wx,wy,80,42,2,gr);g.fillStyle='#fff7';g.beginPath();g.moveTo(wx+8,wy+40);g.lineTo(wx+22,wy+2);g.lineTo(wx+30,wy+2);g.lineTo(wx+16,wy+40);g.fill()}
  [[100,60],[300,60],[610,60]].forEach(([x,y])=>{});
  // poster
  rr(730,60,0,0,0,'#000');
  for(let i=0;i<8;i++){const q=(T*.05+i*.125)%1;g.fillStyle='rgba(255,255,255,'+(.4*Math.sin(q*3.14))+')';g.beginPath();g.arc(720+((i*83)%220)+Math.sin(T+i)*5,160+q*300,1.5,0,7);g.fill()}}},
{n:'Taman',f:'#86c564',
 o:[[0,0,WW,206,null],...isO,[462,366,36,14,null],[266,438,128,24,null],[566,438,128,24,null],[884,500,32,28,null],[42,326,16,12,null],[898,316,16,12,null],[150,226,96,20,null],[730,226,96,20,null]],
 d:[[sideTree(1.7),70,222,222],[sideTree(1.6),892,222,222],[sideTree(1.2),270,208,208],[sideTree(1.3),690,208,208],
  [lampu,50,334,334],[lampu,906,324,324],
  [benchKayu(96),150,246,270],[benchKayu(96),730,246,270],
  [sakura,480,376,376],
  [benchKayu(120),270,452,476],[benchKayu(120),570,452,476],
  [binHitam,884,470,520],
  [(x,y)=>bush(x,y,20,'#ff9ec2'),780,540,550],[(x,y)=>bush(x,y,18,'#ffffff'),170,540,550]],
 bg:()=>{const T=performance.now()/1000;
  // langit
  const sk=g.createLinearGradient(0,0,0,30);sk.addColorStop(0,'#6fbdf0');sk.addColorStop(1,'#cfeaff');g.fillStyle=sk;g.fillRect(0,0,WW,30);awan(120,12,T);awan(520,8,T+70);awan(840,14,T+140);
  // gedung putih
  g.fillStyle='#dfe4ea';g.fillRect(0,24,WW,10);g.fillStyle='#b9c2cc';g.fillRect(0,32,WW,3);
  g.fillStyle='#eef1f4';g.fillRect(0,35,WW,170);
  [[44,32],[98,32],[152,32]].forEach(()=>{});
  [42,96,150].forEach((y,fi)=>{g.fillStyle='#d4dbe3';g.fillRect(0,y+34,WW,4);
   for(let x=10;x<WW-40;x+=150){if(fi==1&&(x==460))continue;g.fillStyle='#9ab5d1';g.fillRect(x,y,118,32);g.fillStyle='#b9d1e6';g.fillRect(x,y,118,10);g.fillStyle='#fff';for(let k=0;k<=6;k++)g.fillRect(x+k*19.5,y,2.4,32);g.fillRect(x,y+15,118,2)}});
  g.fillStyle='#cfd6de';g.fillRect(58,34,5,170);g.fillRect(560,34,5,170);g.fillStyle='#fff8';g.fillRect(58,34,1.5,170);g.fillRect(560,34,1.5,170);
  g.fillStyle='#0002';g.fillRect(0,200,WW,6);
  // semak bulat di dasar gedung
  for(let x=0;x<WW+30;x+=34){const o=(x/34%2)*3;cc(x+10,198+o,16,'#2f7d32');cc(x+7,193+o,10,'#4fa549');cc(x+14,194+o,6,'#68bd5b')}
  // rumput
  g.fillStyle='#86c564';g.fillRect(0,206,WW,WH-206);g.fillStyle='#7cbc5c';for(let y=214;y<WH;y+=44)g.fillRect(0,y,WW,22);
  // lantai paving (elips)
  g.save();g.beginPath();g.ellipse(480,430,420,172,0,0,7);g.clip();
  g.fillStyle='#bdb8b2';g.fillRect(0,250,WW,WH-250);
  for(let y=250,r=0;y<WH;y+=12,r++)for(let x=(r%2)*12-24,c=0;x<WW;x+=24,c++)if(hs_(r*31+c*7)>.55){g.fillStyle='#c9c4be';g.fillRect(x,y,24,12)}else if(hs_(r*13+c*3)<.2){g.fillStyle='#b0aba5';g.fillRect(x,y,24,12)}
  g.strokeStyle='#9d9892';g.lineWidth=1;g.beginPath();for(let y=250,r=0;y<WH;y+=12,r++){g.moveTo(0,y);g.lineTo(WW,y);for(let x=(r%2)*12-24;x<WW;x+=24){g.moveTo(x,y);g.lineTo(x,y+12)}}g.stroke();
  g.restore();
  g.strokeStyle='#e9eaee';g.lineWidth=6;g.beginPath();g.ellipse(480,430,420,172,0,0,7);g.stroke();g.strokeStyle='#9fa1a8';g.lineWidth=2;g.beginPath();g.ellipse(480,433,422,174,0,0,7);g.stroke();
  // pulau rumput bundar + pinggiran batu
  g.fillStyle='#0003';g.beginPath();g.ellipse(IS.x+4,IS.y+14,IS.rx+8,IS.ry+8,0,0,7);g.fill();
  g.fillStyle='#a9abb3';g.beginPath();g.ellipse(IS.x,IS.y+9,IS.rx+4,IS.ry+4,0,0,7);g.fill();
  g.fillStyle='#e6e7ec';g.beginPath();g.ellipse(IS.x,IS.y,IS.rx+4,IS.ry+4,0,0,7);g.fill();
  g.fillStyle='#8fd06a';g.beginPath();g.ellipse(IS.x,IS.y-1,IS.rx-10,IS.ry-9,0,0,7);g.fill();
  g.fillStyle='#a3dc7c';g.beginPath();g.ellipse(IS.x-30,IS.y-10,IS.rx-80,IS.ry-30,0,0,7);g.fill();
  // bayangan teduh sakura
  g.fillStyle='rgba(60,40,70,.16)';g.beginPath();g.ellipse(IS.x+30,IS.y+10,150,38,0,0,7);g.fill();
  // bunga kecil di rumput
  [[60,540],[900,555],[110,300],[860,280],[340,560],[640,566]].forEach(([x,y],i)=>flw(x,y,T,i));
  // kelopak jatuh
  for(let i=0;i<22;i++){const q=(T*.06+hs_(i*9.1))%1,px=250+hs_(i*3.7)*460+Math.sin(T*1.2+i)*26*q+q*40,py=120+q*470;g.save();g.translate(px,py);g.rotate(T*1.5+i);g.fillStyle=i%3?'#ffc9de':'#ffe3ef';g.globalAlpha=.9*Math.min(1,(1-q)*4);g.beginPath();g.ellipse(0,0,3.6,2,0,0,7);g.fill();g.restore()}}}
];
MP.push(...MPX);
// ===== MUSHOLA =====
const LEDF={'0':['01110','10001','10011','10101','11001','10001','01110'],'1':['00100','01100','00100','00100','00100','00100','01110'],'2':['01110','10001','00001','00010','00100','01000','11111'],'3':['11110','00001','00001','01110','00001','00001','11110'],'4':['00010','00110','01010','10010','11111','00010','00010'],'5':['11111','10000','11110','00001','00001','10001','01110'],'6':['00110','01000','10000','11110','10001','10001','01110'],'7':['11111','00001','00010','00100','01000','01000','01000'],'8':['01110','10001','10001','01110','10001','10001','01110'],'9':['01110','10001','10001','01111','00001','00010','01100'],':':['0','1','1','0','1','1','0'],' ':['00','00','00','00','00','00','00'],'J':['00111','00010','00010','00010','00010','10010','01100'],'A':['01110','10001','10001','11111','10001','10001','10001'],'M':['10001','11011','10101','10101','10001','10001','10001']};
const ledCols=s=>{const o=[];for(const ch of s){const gl=LEDF[ch]||LEDF[' '],w=gl[0].length;for(let c=0;c<w;c++){let m=0;for(let r=0;r<7;r++)if(gl[r][c]=='1')m|=1<<r;o.push(m)}o.push(0)}return o};
// jam LED digital: waktu real-time, teks berjalan (marquee) dari kanan ke kiri
const PT={lat:-6.2,lon:106.85,d:'',v:null,ask:0};const pOff=-new Date().getTimezoneOffset()/60;if(pOff!=7){PT.lat=0;PT.lon=pOff*15}const ptAsk=()=>{if(PT.ask)return;PT.ask=1;try{document.fonts.load('700 10px "Google Sans"')}catch(e){}try{navigator.geolocation&&navigator.geolocation.getCurrentPosition(p=>{PT.lat=p.coords.latitude;PT.lon=p.coords.longitude},()=>{},{timeout:8000,maximumAge:36e5})}catch(e){}};const prayerTimes=(dt,lat,lon)=>{const R=Math.PI/180,sn=a=>Math.sin(a*R),cs=a=>Math.cos(a*R),fx=(v,m)=>((v%m)+m)%m,cl=v=>Math.max(-1,Math.min(1,v)),tz=-dt.getTimezoneOffset()/60,jd=Date.UTC(dt.getFullYear(),dt.getMonth(),dt.getDate(),12)/864e5+2440587.5-2451545,gm=357.529+.98560028*jd,q=fx(280.459+.98564736*jd,360),L=fx(q+1.915*sn(gm)+.02*sn(2*gm),360),e=23.439-4e-7*jd,ra=fx(Math.atan2(cs(e)*sn(L),cs(L))/R,360)/15,eq=fx(q/15-ra+12,24)-12,dc=Math.asin(sn(e)*sn(L))/R,dh=12+tz-lon/15-eq,den=cs(dc)*cs(lat),T=a=>Math.acos(cl((-sn(a)-sn(dc)*sn(lat))/den))/R/15,A=Math.atan(1/(1+Math.tan(Math.abs(lat-dc)*R)))/R,asr=dh+Math.acos(cl((sn(A)-sn(dc)*sn(lat))/den))/R/15;return[dh-T(20),dh,asr,dh+T(.833),dh+T(18)].map(h=>Math.round(fx(h+2/60,24)*60)%1440)};const ptGet=()=>{const D=new Date(),k=D.toDateString()+PT.lat+PT.lon;if(PT.d!=k){PT.d=k;PT.v=prayerTimes(D,PT.lat,PT.lon)}return PT.v};const jamLED=(x,y)=>{ptAsk();const T=performance.now()/1000,D=new Date(),p2=n=>String(n).padStart(2,'0'),cols=ledCols('   JAM '+p2(D.getHours())+':'+p2(D.getMinutes())+':'+p2(D.getSeconds())+'   '),NC=50,P=3,pos=Math.floor(T*15)%(cols.length+NC),ox=x+10,oy=y+11;rr(x+20,y-9,8,11,2,'#8f949c');rr(x+142,y-9,8,11,2,'#8f949c');rr(x+3,y+5,170,70,7,'#0003');rr(x,y,170,70,7,'#202228');rr(x+2,y+2,166,66,6,'#3a3d46');rr(x+7,y+7,156,56,4,'#0a0505');const un=new Path2D,lt=[];for(let i=0;i<NC;i++){const s=i+pos-NC,m=s>=0&&s<cols.length?cols[s]:0;for(let r=0;r<7;r++){const px=ox+i*P,py=oy+r*P;if((m>>r)&1)lt.push([px,py]);else{un.moveTo(px+.8,py);un.arc(px,py,.8,0,7)}}}g.fillStyle='#2d0d0b';g.fill(un);g.fillStyle='rgba(255,70,50,.28)';lt.forEach(([a,b])=>{g.beginPath();g.arc(a,b,1.9,0,7);g.fill()});g.fillStyle='#ff4d3a';lt.forEach(([a,b])=>{g.beginPath();g.arc(a,b,1.1,0,7);g.fill()});g.fillStyle='#ffc2b8';lt.forEach(([a,b])=>g.fillRect(a-.4,b-.5,.8,.8));g.fillStyle='#4a1a14';g.fillRect(x+9,y+35,152,1);const pt=ptGet(),nm=['SUBUH','DZUHUR','ASHAR','MAGHRIB','ISYA'],mn=D.getHours()*60+D.getMinutes();let nx=pt.findIndex(m=>m>mn);if(nx<0)nx=0;g.textAlign='center';for(let i=0;i<5;i++){const cx=x+7+156/5*(i+.5),on=i==nx;if(on){g.fillStyle='rgba(255,77,58,.22)';g.beginPath();g.roundRect(cx-14.5,y+39,29,22,3);g.fill()}g.font='bold 6.5px "Google Sans","Product Sans",Roboto,Arial,sans-serif';g.fillStyle=on?'#ffc2b8':'#c27a5c';g.fillText(nm[i],cx,y+47);g.font='bold 10px "Google Sans","Product Sans",Roboto,Arial,sans-serif';g.fillStyle=on?'#ffffff':'#ffb347';g.fillText(p2(pt[i]/60|0)+':'+p2(pt[i]%60),cx,y+57)}g.fillStyle='#ffffff10';g.fillRect(x+7,y+7,156,12)};
// kaligrafi (lingkaran emas berisi tulisan Arab)
const kalig=(cx,cy,txt)=>{g.save();
 cc(cx+2,cy+4,48,'#0003');cc(cx,cy,48,'#c99a2e');cc(cx,cy,45,'#f3d77a');cc(cx,cy,42,'#b88a22');
 const rg=g.createRadialGradient(cx-10,cy-12,4,cx,cy,42);rg.addColorStop(0,'#1c8a5c');rg.addColorStop(1,'#0a3d2a');
 g.fillStyle=rg;g.beginPath();g.arc(cx,cy,40,0,7);g.fill();
 for(let k=0;k<24;k++){const a=k/24*6.2832;cc(cx+Math.cos(a)*35,cy+Math.sin(a)*35,1.6,'#f3d77a')}
 g.strokeStyle='#f3d77a66';g.lineWidth=1;g.beginPath();g.arc(cx,cy,29,0,7);g.stroke();
 g.textAlign='center';g.textBaseline='middle';
 const fn=s=>'700 '+s+'px Amiri,"Noto Naskh Arabic","Traditional Arabic","Scheherazade New",serif';
 let sz=30;g.font=fn(sz);const w=g.measureText(txt).width;if(w>38){sz=sz*38/w;g.font=fn(sz)}
 g.shadowColor='#ffe58a';g.shadowBlur=6;g.fillStyle='#f9e08a';g.fillText(txt,cx,cy+4);
 g.shadowBlur=0;g.fillStyle='#fff3c4';g.fillText(txt,cx,cy+3);
 g.restore()};
const arch=(x,y,w,h)=>{g.beginPath();g.moveTo(x,y+h);g.lineTo(x,y+w/2);g.arc(x+w/2,y+w/2,w/2,Math.PI,0);g.lineTo(x+w,y+h);g.closePath()};
const jendelaM=(x,y,w,h)=>{arch(x-5,y-5,w+10,h+8);g.fillStyle='#e3d6b0';g.fill();
 arch(x,y,w,h);const gr=g.createLinearGradient(0,y,0,y+h);gr.addColorStop(0,'#9fe0c0');gr.addColorStop(1,'#e6f8ee');g.fillStyle=gr;g.fill();
 g.save();arch(x,y,w,h);g.clip();g.strokeStyle='#e8c25a';g.lineWidth=1.5;g.beginPath();
 for(let k=-h;k<w+h;k+=16){g.moveTo(x+k,y);g.lineTo(x+k+h,y+h);g.moveTo(x+k+h,y);g.lineTo(x+k,y+h)}g.stroke();
 g.strokeStyle='#e3d6b0';g.lineWidth=3;g.beginPath();g.moveTo(x+w/2,y);g.lineTo(x+w/2,y+h);g.moveTo(x,y+h*.55);g.lineTo(x+w,y+h*.55);g.stroke();g.restore();
 rr(x-8,y+h-2,w+16,7,2,'#c9b98c')};
// sejadah hijau panjang (gulung) dengan motif mihrab per jamaah
const sejadah=(x,y,w,h)=>{const n=10,sw=w/n;
 rr(x+2,y+4,w,h,4,'#0003');rr(x,y,w,h,4,'#14653f');rr(x+3,y+3,w-6,h-6,3,'#22915b');
 g.strokeStyle='#e8c25a';g.lineWidth=1.2;g.beginPath();g.roundRect(x+5,y+5,w-10,h-10,2);g.stroke();
 for(let i=0;i<n;i++){const px=x+i*sw+sw/2,t=y+8,b=y+h-8;
  g.fillStyle='#2fae6f';g.beginPath();g.moveTo(px-23,b);g.lineTo(px-23,t+13);g.quadraticCurveTo(px-23,t+3,px,t);g.quadraticCurveTo(px+23,t+3,px+23,t+13);g.lineTo(px+23,b);g.closePath();g.fill();
  g.strokeStyle='#8fe3b4';g.lineWidth=1;g.stroke();cc(px,t+10,1.8,'#f3d77a')}
};
const mimbar=(x,y)=>{const w=136,m=x+w/2;
 g.fillStyle='#0003';g.beginPath();g.ellipse(m+3,y+84,w/2+12,8,0,0,7);g.fill();
 g.fillStyle='#4e3320';g.beginPath();g.moveTo(x+16,y+44);g.lineTo(x+16,y-16);g.quadraticCurveTo(x+16,y-46,m,y-56);g.quadraticCurveTo(x+w-16,y-46,x+w-16,y-16);g.lineTo(x+w-16,y+44);g.closePath();g.fill();
 g.fillStyle='#6e4a2a';g.beginPath();g.moveTo(x+23,y+44);g.lineTo(x+23,y-14);g.quadraticCurveTo(x+23,y-40,m,y-48);g.quadraticCurveTo(x+w-23,y-40,x+w-23,y-14);g.lineTo(x+w-23,y+44);g.closePath();g.fill();
 g.strokeStyle='#e8c25a';g.lineWidth=1.5;g.stroke();
 cc(m,y-22,7,'#e8c25a');cc(m,y-22,4,'#6e4a2a');cc(m,y-22,1.6,'#fff1b0');
 [-1,1].forEach(s=>{g.fillStyle='#e8c25a';g.beginPath();g.moveTo(m+s*12,y-10);g.lineTo(m+s*22,y-4);g.lineTo(m+s*12,y+2);g.closePath();g.fill()});
 g.fillStyle='#e8c25a';g.beginPath();g.moveTo(m-8,y-52);g.quadraticCurveTo(m-8,y-64,m,y-72);g.quadraticCurveTo(m+8,y-64,m+8,y-52);g.closePath();g.fill();cc(m,y-74,2.4,'#fff1b0');
 [x,x+w-22].forEach(sx=>{rr(sx-2,y+6,26,10,4,'#a8703f');rr(sx,y+14,22,56,4,'#8a5a34');g.fillStyle='#5e3d22';for(let k=0;k<4;k++)g.fillRect(sx+3+k*5,y+20,2,44);rr(sx-2,y+66,26,8,3,'#a8703f')});
 rr(x+22,y+36,w-44,12,3,'#c98e4f');rr(x+34,y+24,w-68,14,5,'#1f8a55');g.fillStyle='#e8c25a';g.fillRect(x+34,y+36,w-68,2);
 [[x+30,y+48,w-60],[x+26,y+60,w-52],[x+22,y+72,w-44]].forEach(([sx,sy,sw])=>{rr(sx,sy,sw,12,3,'#b57a45');g.fillStyle='#e0ac72';g.fillRect(sx+2,sy,sw-4,2);g.fillStyle='#0003';g.fillRect(sx+2,sy+9,sw-4,3)});
 rr(m-15,y+48,30,36,2,'#1f8a55');g.fillStyle='#e8c25a';g.fillRect(m-15,y+48,2,36);g.fillRect(m+13,y+48,2,36);g.fillStyle='#2fae6f';g.fillRect(m-9,y+50,18,32);
 g.strokeStyle='#2a2a30';g.lineWidth=2;g.beginPath();g.moveTo(m+38,y+32);g.lineTo(m+38,y+16);g.quadraticCurveTo(m+38,y+8,m+28,y+10);g.stroke();rr(m+24,y+7,8,6,3,'#2a2a30')};
// tirai hijau pembatas
const tirai=(x,y)=>{const T=performance.now()/1000,w=760,h=52,top=y-h;
 g.fillStyle='#0003';g.beginPath();g.ellipse(x+w/2+3,y+3,w/2+8,6,0,0,7);g.fill();
 [x-6,x+w].forEach(px=>{rr(px,top-10,6,h+14,2,'#6b4a2a');cc(px+3,top-12,4,'#e8c25a');rr(px-3,y+2,12,5,2,'#4a3320')});
 rr(x-6,top-8,w+12,6,3,'#8a5a34');
 for(let i=0,k=0;i<w;i+=19,k++){const sw=Math.sin(T*1.4+k*.8)*1.2;
  g.fillStyle=k%2?'#238455':'#2d9f68';g.beginPath();g.moveTo(x+i,top-2);g.lineTo(x+i+19,top-2);g.lineTo(x+i+19+sw*.4,y);g.quadraticCurveTo(x+i+9.5+sw,y+3,x+i+sw*.4,y);g.closePath();g.fill();
  g.fillStyle='#ffffff14';g.fillRect(x+i+3,top,2,h-6);g.fillStyle='#00000018';g.fillRect(x+i+15,top,3,h-4);cc(x+i+9,top-5,1.5,'#d5dbe0')}
 g.fillStyle='#e8c25a';g.fillRect(x,y-9,w,2)};
const acM=(x,y)=>{const T=performance.now()/1000,w=64,h=22;rr(x+2,y+5,w,h,8,'#0002');rr(x+6,y+h-1,w-12,3,1,'#9aa4ae');const gr=g.createLinearGradient(0,y,0,y+h);gr.addColorStop(0,'#ffffff');gr.addColorStop(1,'#d5dce4');g.fillStyle=gr;g.beginPath();g.roundRect(x,y,w,h,8);g.fill();g.strokeStyle='#c1c9d2';g.lineWidth=1;g.stroke();g.fillStyle='#cfd6dd';g.fillRect(x+5,y+5,w-10,1.5);rr(x+5,y+h-8,w-10,5,2,'#b9c3cd');g.fillStyle='#8f9ba7';for(let k=0;k<7;k++)g.fillRect(x+8+k*7.5,y+h-7,5,1.2);rr(x+w-22,y+8,14,6,1.5,'#1b2a2a');cc(x+w-27,y+11,1.7,Math.sin(T*3)>0?'#38e08a':'#1e9e5a');g.fillStyle='#7dffb8';g.font='bold 6px "Pixelify Sans",sans-serif';g.textAlign='left';g.fillText('24',x+w-19,y+13.2);for(let k=0;k<5;k++){const q=(T*.45+k/5)%1,ax=x+10+k*(w-20)/4+Math.sin(T*2+k)*1.5,ay=y+h+3+q*46;g.strokeStyle='rgba(190,230,255,'+(.6*(1-q))+')';g.lineWidth=2;g.lineCap='round';g.beginPath();g.moveTo(ax,ay);g.lineTo(ax+Math.sin(T+k)*1.2,ay+8);g.stroke();g.lineCap='butt'}};
const rakBuku=(x,y)=>{const W=112,H=90,BC=['#1d6b48','#2f5f7a','#8a5a3b','#e8c25a','#f4efe6','#b5453f','#3a4f8f','#2c7a6b'];
 g.fillStyle='#0003';g.beginPath();g.ellipse(x+W/2+4,y+H+1,W/2+6,6,0,0,7);g.fill();
 rr(x,y,W,H,4,'#a07a4a');rr(x+5,y+17,W-10,H-23,2,'#2b2018');
 rr(x-3,y-4,W+6,8,3,'#7d5230');g.fillStyle='#fff3';g.fillRect(x,y-2,W,2);
 rr(x+W/2-36,y+6,72,10,2,'#f4efe6');g.fillStyle='#1d6b48';g.font='bold 8px "Pixelify Sans",sans-serif';g.textAlign='center';g.fillText('Buku & Alquran',x+W/2,y+14);
 for(let r=0;r<3;r++){const ry=y+19+r*23;let bx=x+8,k=0;
  while(bx<x+W-14){const bw=4+Math.floor(hs_(r*13+k+3)*4),bh=14+Math.floor(hs_(r*7+k*3+1)*7),c=BC[Math.floor(hs_(r*17+k*5+2)*BC.length)];
   if(hs_(r*9+k*11)>.9){bx+=5;k++;continue}
   g.fillStyle=c;g.fillRect(bx,ry+19-bh,bw,bh);g.fillStyle='#fff3';g.fillRect(bx,ry+19-bh,1.2,bh);g.fillStyle='#0004';g.fillRect(bx+bw-1.2,ry+19-bh,1.2,bh);
   if(c=='#1d6b48'||c=='#2c7a6b'){g.fillStyle='#e8c25a';g.fillRect(bx+1,ry+19-bh+3,bw-2,1.2)}
   bx+=bw+1;k++}
  rr(x+4,ry+19,W-8,4,1,'#c58d52')}};
const rakSarung=(x,y)=>{const W=150,H=96,SC=['#c0392b','#2f5f7a','#2c7a6b','#6a4c93','#8a5a3b','#d9a21b'],MK=['#ffffff','#f6efe0','#e9e0f7','#ffe3ec','#e3f3ee'];
 g.fillStyle='#0003';g.beginPath();g.ellipse(x+W/2+4,y+H+1,W/2+6,6,0,0,7);g.fill();
 rr(x,y,W,H,4,'#a07a4a');rr(x+5,y+18,W-10,H-24,2,'#3b2a1e');
 rr(x-3,y-4,W+6,8,3,'#7d5230');g.fillStyle='#fff3';g.fillRect(x,y-2,W,2);
 rr(x+W/2-50,y+5,100,12,3,'#f4efe6');g.fillStyle='#1d6b48';g.font='bold 9px "Pixelify Sans",sans-serif';g.textAlign='center';g.fillText('SARUNG & MUKENA',x+W/2,y+14);
 for(let r=0;r<3;r++){const ry=y+20+r*23;
  for(let c=0;c<5;c++){const sx=x+9+c*27,sar=r==0||(r==2&&c%2==0);
   for(let l=0;l<3;l++){const yy=ry+1+l*6;
    if(sar){const cl=SC[(c+r*2+l)%SC.length];rr(sx,yy,24,6,1.5,cl);g.fillStyle=mix(cl,-.35);[4,12,20].forEach(o=>g.fillRect(sx+o,yy,1.5,6));g.fillStyle=mix(cl,.4);g.fillRect(sx,yy+2,24,1)}
    else{const cl=MK[(c+l)%MK.length];rr(sx,yy,24,6,2.5,cl);g.fillStyle=mix(cl,-.12);g.fillRect(sx+2,yy+3,20,1);for(let d=0;d<4;d++)cc(sx+4+d*5.3,yy+5,1,'#f3b6cb')}}}
  rr(x+4,ry+19,W-8,4,1,'#c58d52')}};
const kotakAmal=(x,y)=>{const W=36;
 g.fillStyle='#0003';g.beginPath();g.ellipse(x+W/2+2,y+42,W/2+6,5,0,0,7);g.fill();
 rr(x,y+12,W,30,3,'#a9733f');g.fillStyle='#8d5f35';[16,22,28,34].forEach(o=>g.fillRect(x+2,y+o,W-4,1));
 rr(x-2,y+5,W+4,9,3,'#c58d52');g.fillStyle='#fff4';g.fillRect(x,y+6,W,1.5);
 rr(x+W/2-8,y+7,16,3,1,'#2a1c14');
 g.fillStyle='#e0b24a';g.fillRect(x+3,y+12,3,30);g.fillRect(x+W-6,y+12,3,30);
 rr(x+8,y+19,W-16,10,1.5,'#f4efe6');g.fillStyle='#1d6b48';g.font='bold 7px "Pixelify Sans",sans-serif';g.textAlign='center';g.fillText('AMAL',x+W/2,y+27);
 cc(x+W/2,y+35,2.2,'#e0b24a');g.fillStyle='#2a1c14';g.fillRect(x+W/2-.5,y+35,1,3)};
MP.push({n:'Mushola',f:'#f7f7f4',
 o:[[0,0,WW,130,null],[0,0,18,WH,null],[942,0,18,WH,null],[0,584,WW,16,null],[412,150,136,48,null],[100,408,760,18,null],[70,552,112,28,null],[716,552,150,28,null],[598,556,36,24,null]],
 d:[[mimbar,412,116,200],[tirai,100,426,426],[rakBuku,70,490,580],[rakSarung,716,484,580],[kotakAmal,598,540,582]],
 bg:()=>{
  if(!window.__am){window.__am=1;try{document.fonts.load('700 40px Amiri','الله محمد')}catch(e){}}
  // lantai ubin putih
  g.fillStyle='#f7f7f4';g.fillRect(0,0,WW,WH);
  for(let y=130,r=0;y<WH;y+=48,r++)for(let x=0,c=0;x<WW;x+=48,c++)if((r+c)%2==0){g.fillStyle='#eeeeea';g.fillRect(x,y,48,48)}
  g.strokeStyle='#d9d9d3';g.lineWidth=1;g.beginPath();for(let y=130;y<WH;y+=48){g.moveTo(0,y);g.lineTo(WW,y)}for(let x=0;x<WW;x+=48){g.moveTo(x,130);g.lineTo(x,WH)}g.stroke();
  // dinding depan
  g.fillStyle='#f4eedb';g.fillRect(0,0,WW,130);g.fillStyle='#ebe3c9';for(let x=24;x<WW;x+=48)g.fillRect(x,12,2,86);
  g.fillStyle='#1d6b48';g.fillRect(0,0,WW,8);g.fillStyle='#e8c25a';g.fillRect(0,8,WW,2);for(let x=12;x<WW;x+=24)cc(x,4,1.6,'#e8c25a');
  g.fillStyle='#1d6b48';g.fillRect(0,100,WW,30);g.fillStyle='#e8c25a';g.fillRect(0,98,WW,3);
  g.fillStyle='#ffffff18';for(let x=14;x<WW-30;x+=64)g.fillRect(x,106,44,18);
  g.fillStyle='#0003';g.fillRect(0,130,WW,7);
  // mihrab
  g.fillStyle='#e8c25a';g.beginPath();g.moveTo(408,130);g.lineTo(408,70);g.quadraticCurveTo(408,28,480,10);g.quadraticCurveTo(552,28,552,70);g.lineTo(552,130);g.closePath();g.fill();
  const mg=g.createLinearGradient(0,10,0,130);mg.addColorStop(0,'#187a52');mg.addColorStop(1,'#0b3f2b');
  g.fillStyle=mg;g.beginPath();g.moveTo(415,130);g.lineTo(415,70);g.quadraticCurveTo(415,34,480,18);g.quadraticCurveTo(545,34,545,70);g.lineTo(545,130);g.closePath();g.fill();
  g.strokeStyle='#e8c25a88';g.lineWidth=1.5;g.beginPath();g.moveTo(424,130);g.lineTo(424,72);g.quadraticCurveTo(424,42,480,28);g.quadraticCurveTo(536,42,536,72);g.lineTo(536,130);g.stroke();
  g.strokeStyle='#e8c25a';g.lineWidth=1.2;g.beginPath();g.moveTo(480,18);g.lineTo(480,27);g.stroke();cc(480,38,15,'rgba(255,230,140,.22)');rr(474,27,12,15,4,'#e8c25a');rr(476,30,8,9,3,'#fff1b0');
  // kaligrafi Allah & Muhammad
  kalig(350,62,'الله');kalig(610,62,'محمد');
  // jendela
  jendelaM(64,14,60,78);jendelaM(150,14,60,78);
  // jam LED digital (kanan depan)
  jamLED(676,24);acM(232,30);acM(868,30);
  // sejadah: 3 saf depan + 1 saf di belakang tirai
  [214,256,298,438].forEach(y=>sejadah(104,y,766,36));
  // sinar jendela
  g.fillStyle='rgba(255,247,205,.12)';[[64,124],[150,210]].forEach(([a,b])=>{g.beginPath();g.moveTo(a,130);g.lineTo(b,130);g.lineTo(b+120,330);g.lineTo(a+120,330);g.closePath();g.fill()});
  // dinding samping & belakang
  g.fillStyle='#ece3c8';g.fillRect(0,0,18,WH);g.fillRect(942,0,18,WH);g.fillRect(0,584,WW,16);
  g.fillStyle='#1d6b48';g.fillRect(14,130,4,WH-130);g.fillRect(942,130,4,WH-130);g.fillRect(0,584,WW,4);
  g.fillStyle='#0002';g.fillRect(18,137,3,WH-137);g.fillRect(939,137,3,WH-137);
 }});


const NM=['Budi','Sari','Rafi','Dinda','Kevin','Mira','Tono','Lala','Gita','Bayu'],
SAY=['Halo semuanya!','Siapa yang mau main?','Wah lucu banget karaktermu!','Lagi ngapain nih?','Ayo ke kantin!','Hehe 😄','Gas main basket!','Laper nih...','Seru ya di sini!'],
REP=['Haha iya!','Setuju!','Wkwk','Halo juga!','Hmm menarik 🤔','Betul banget'],
EM=['😀','😂','😍','😎','😭','😡','👍','👋','❤️','🎉'];
let mi=0,me,bots=[],npcs=[],keys={},joy=null,now=0,last=0,snap,pn,tabs=[];
const blocked=(x,y)=>x<14||x>WW-14||y<14||y>WH-4||MP[mi].o.some(([a,b,w,h])=>x+9>a&&x-9<a+w&&y>b&&y-8<b+h);
const spot=()=>{let x,y;do{x=30+Math.random()*900;y=130+Math.random()*440}while(blocked(x,y));return{x,y}};
const mk=(name,cfg,bot)=>({...spot(),vx:0,vy:0,sp:0,cfg,name,ph:0,say:'',st:0,emo:'',et:0,bot,wt:0,tx:0,ty:0,f:0});
const rc=()=>rndCfg();
function log(n,t,sys,col){const d=document.createElement('div');if(sys){d.textContent=t;d.style.opacity=.7}else{const b=document.createElement('b');b.textContent=n+': ';if(col)b.style.color=col;d.append(b,t)}HS.append(d);while(HS.children.length>80)HS.firstChild.remove();HS.scrollTop=1e9}
const say=(p,t)=>{p.say=t;p.st=now+4500;log(p.name,t,0,ncol(p))},emote=(p,e)=>{p.emo=e;p.et=now+2500;window.__sfx&&window.__sfx(e,p)};
function setMap(i){mi=i;ensureLobby();BGM.play(i);me=mk(pn,snap,0);if(!blocked(480,560)){me.x=480;me.y=560}
 const ns=[...NM].sort(()=>Math.random()-.5);bots=[0,1,2,3].map(k=>mk(ns[k],rc(),1));
 npcs=i==1?[(()=>{const p=mk('',{g:'f',skin:1,hair:5,hc:1,top:12,tc:1,bot:7,bc:8,shoe:8,sc:1,acc:0,ac:4},1);p.x=96;p.y=172;p.f=0;return p})()]:[];
 tabs.forEach((b,j)=>b.classList.toggle('on',j==i));log('',`Kamu masuk ke ${MP[i].n}.`,1);joinRoom(i)}
const face=p=>{const ax=Math.abs(p.vx),ay=Math.abs(p.vy);if(ax+ay>20)p.f=ay>ax*1.15?(p.vy>0?0:2):(p.vx>0?1:3)};
function step(p,dx,dy,dt){const k=1-Math.exp(-dt*9);p.vx+=(dx*185-p.vx)*k;p.vy+=(dy*160-p.vy)*k;
 let n=p.x+p.vx*dt;if(blocked(n,p.y))p.vx=0;else p.x=n;n=p.y+p.vy*dt;if(blocked(p.x,n))p.vy=0;else p.y=n;
 p.sp=Math.hypot(p.vx,p.vy);p.ph+=p.sp*dt*.055;face(p)}
function update(dt){volUpd();let dx=0,dy=0;
 if(document.activeElement!=ci){dx=(keys.ArrowRight||keys.d?1:0)-(keys.ArrowLeft||keys.a?1:0);dy=(keys.ArrowDown||keys.s?1:0)-(keys.ArrowUp||keys.w?1:0);const l=Math.hypot(dx,dy);if(l>1){dx/=l;dy/=l}if(keys.Shift){dx*=1.7;dy*=1.7}}
 if(joy&&joy.m){dx=joy.dx;dy=joy.dy}
 step(me,dx,dy,dt);
 if(channel&&(pt+=dt)>.066){pt=0;const q=[me.x,me.y,me.vx,me.vy,me.f].map(Math.round).join();if(q!=lq){lq=q;broadcastState()}else if(me.sid&&now<me.st&&(hb+=.066)>1){hb=0;broadcastState()}}
 rem.forEach(o=>{const k=1-Math.exp(-dt*10);o.x+=(o.tx-o.x)*k;o.y+=(o.ty-o.y)*k;o.vx=o.rvx;o.vy=o.rvy;o.sp=Math.hypot(o.rvx,o.rvy);o.ph+=o.sp*dt*.055});
 (rem.size?[]:bots).forEach(b=>{if(now>b.wt){const s=spot();b.tx=Math.random()<.3?b.x:s.x;b.ty=Math.random()<.3?b.y:s.y;b.wt=now+2000+Math.random()*4000}
  const ex=b.tx-b.x,ey=b.ty-b.y,l=Math.hypot(ex,ey);step(b,l>12?ex/l:0,l>12?ey/l:0,dt);
  botTick(b,dt)})}

// ===== Efek emote: partikel =====
const fxStar=(x,y,r,a)=>{g.save();g.globalAlpha=a;g.fillStyle='#fff8c8';g.beginPath();g.moveTo(x,y-r);g.lineTo(x+r*.28,y-r*.28);g.lineTo(x+r,y);g.lineTo(x+r*.28,y+r*.28);g.lineTo(x,y+r);g.lineTo(x-r*.28,y+r*.28);g.lineTo(x-r,y);g.lineTo(x-r*.28,y-r*.28);g.closePath();g.fill();g.restore()};
function emoFx(p,xi,T,fz){const s=Math.sin,PI=Math.PI,hx=p.x,hy=p.y-66;g.save();g.textAlign='center';g.textBaseline='middle';
 const glyph=(ch,x,y,sz,a)=>{g.globalAlpha=Math.max(0,a)*fz;g.font=sz+'px sans-serif';g.fillText(ch,x,y)};
 const drops=(col,n,sp)=>{for(let i=0;i<n;i++){const u=((T/sp)+i/n)%1,sd=i%2?1:-1,x=hx+sd*(10+u*26),y=hy+2-22*u+60*u*u;g.globalAlpha=(1-u)*fz;g.fillStyle=col;g.beginPath();g.arc(x,y,2.4*(1-u*.4),0,7);g.fill()}};
 if(xi==0){for(let i=0;i<3;i++){const u=((T/700)+i/3)%1;fxStar(hx+(i-1)*30+s(i*3)*6,hy-26-u*10,3+5*s(u*PI),s(u*PI)*.9*fz)}}
 else if(xi==1){drops('#6cc6ff',6,520);}
 else if(xi==2||xi==8){const n=xi==8?9:6;for(let i=0;i<n;i++){const u=((T/1500)+i/n)%1,x=hx+s(i*2.1+T/450)*(xi==8?34:26),y=hy-18-u*58;glyph(i%2?'💗':'❤️',x,y,9+13*s(Math.min(1,u*1.6)*PI/2),1-u*u)}}
 else if(xi==3){const u=(T/900)%1;fxStar(hx-14,hy+2,2+9*s(Math.min(1,u*2.5)*PI),(u<.4?1:0)*fz);fxStar(hx+36,hy-30,3+5*s(((T/700)%1)*PI),.9*fz)}
 else if(xi==4){drops('#6cc6ff',8,640);g.globalAlpha=.6*fz;g.fillStyle='#6cc6ff';const pu=(T/500)%1;g.beginPath();g.ellipse(hx,p.y+4,10+pu*16,3+pu*2,0,0,7);g.globalAlpha=(1-pu)*.45*fz;g.fill()}
 else if(xi==5){glyph('💢',hx+24,hy-26,18+5*Math.abs(s(T/110)),1);for(let i=0;i<2;i++){const u=((T/650)+i/2)%1,sd=i?1:-1;g.globalAlpha=(1-u)*.8*fz;g.fillStyle='#e8e8ee';g.beginPath();g.arc(hx+sd*(16+u*10),hy-14-u*34,3+u*8,0,7);g.fill()}}
 else if(xi==6){const u=(T/600)%1;fxStar(hx+44,hy+4,3+7*s(u*PI),.9*fz);fxStar(hx+30,hy-14,2+4*s(((T/600+.5)%1)*PI),.8*fz)}
 else if(xi==7){for(let i=0;i<3;i++){const u=((T/500)+i/3)%1;g.globalAlpha=(1-u)*.7*fz;g.strokeStyle='#ffffff';g.lineWidth=2;g.beginPath();g.arc(hx+34,hy-14,12+u*14,-PI*.9,-PI*.1);g.stroke()}}
 else if(xi==9){const C=['#ff4d6d','#ffd23f','#3ddc97','#4cc9f0','#b388ff','#ff9f43'];for(let i=0;i<18;i++){const a=i*2.399,u=((T/1000)+i*.137)%1,x=hx+Math.cos(a)*50*u+s(i)*6,y=hy-26-70*u+120*u*u;g.globalAlpha=(1-u*u)*fz;g.save();g.translate(x,y);g.rotate(T/130+i);g.fillStyle=C[i%6];g.fillRect(-3,-2,6,3.5);g.restore()}}
 g.restore();g.textBaseline='alphabetic'}
function pdraw(p,t){const dt0=Math.min(.05,(t-(p.lt||t))/1e3);p.lt=t;p.sm=(p.sm||0)+(Math.min(1.7,p.sp/150)-(p.sm||0))*(1-Math.exp(-dt0*9));
 const am=p.sm,mv=Math.min(1,am/1.1),sn=Math.sin(p.ph),cs=Math.cos(p.ph),vw=((p.pz||p.emo&&t<p.et)&&Math.min(1.7,p.sp/150)<.2)?0:(p.f|0),sd=vw==1||vw==3,
 bob=-(sd?Math.abs(cs):Math.abs(sn))*2.3*am,lau=p.emo=='😂'&&t<p.et,xo=(p.emo&&t<p.et)||p.pz,xi=p.pz?p.pz.i:(xo?EM.indexOf(p.emo):-1),te=p.pz?t-p.pz.t0:(xo?t-(p.et-2500):0),fz=p.pz?Math.min(1,te/300):(xo?Math.min(Math.min(1,te/220),Math.min(1,(p.et-t)/260)):0),
 dy=mv>.2?((sd?Math.abs(cs)<.5:Math.abs(sn)>.6)?1:0):(t%1800<900?0:1);
 draw(p.cfg,{dy,lau,xi,te,blink:!lau&&((t+p.x*7)|0)%3300<140,ph:p.ph,am:mv>.2?am:0},vw);

 const sx_=Math.sin;let eox=0,eoy=0,erot=0,esy=1,esx=1,AL=null,AR=null,GL=null,GL2=null;
 if(xi>=0&&vw==0){const T=te;switch(xi){
  case 10:{const w=(1+sx_(T/450))/2;esy=1+.06*w;erot=sx_(T/900)*.05;eoy=-w*2;AL=2.9+sx_(T/450)*.1;AR=-AL}break;case 11:{const q=(T/1500|0)%6;esy=[1,1,.8,1,.5,.72][q];esx=q==4?1.12:1;AL=[2.5,.6,.3,.6,.2,.6][q];AR=-AL}break;case 12:{const w=sx_(T/180);eox=w*4;erot=w*.12;eoy=-Math.abs(w)*5;AL=2+.8*w;AR=-2+.8*w}break;case 13:esy=.62+sx_(T/600)*.01;esx=1.12;AL=.5;AR=-.5;break;case 14:erot=-1.5708+sx_(T/1200)*.01;eoy=-8;break;case 15:AL=2;GL2='📱';AR=-2.5+sx_(T/260)*.06;GL='✌️';erot=sx_(T/700)*.04;break;
  case 0:eoy=-Math.abs(sx_(T/150))*5;break;
  case 1:eox=sx_(T/28)*1.6;eoy=-Math.abs(sx_(T/85))*4;erot=sx_(T/65)*.05;break;
  case 2:erot=sx_(T/250)*.1;eoy=-Math.abs(sx_(T/320))*3;break;
  case 3:erot=-.07;eoy=0;break;
  case 4:eox=sx_(T/42)*1.6;eoy=Math.abs(sx_(T/105))*1.8;esy=.97;AL=3.3+sx_(T/70)*.14;AR=-3.3-sx_(T/70+1.5)*.14;break;
  case 5:eox=sx_(T/22)*2.4;erot=sx_(T/29)*.04;AL=.75+sx_(T/45)*.12;AR=-.75-sx_(T/45)*.12;break;
  case 6:eoy=-Math.abs(sx_(T/200))*3;AR=-2.0+sx_(T/170)*.1;GL='👍';break;
  case 7:AR=-2.55+sx_(T/85)*.38;GL='👋';break;
  case 8:{const hb=Math.max(0,sx_(T/140));esy=1+.06*hb;esx=1+.04*hb;eoy=-hb*2}break;
  case 9:eoy=-Math.abs(sx_(T/175))*16;AL=2.7+sx_(T/90)*.28;AR=-2.7-sx_(T/90+1)*.28}}
 else if(xi>=0){const T=te;switch(xi){case 1:eox=sx_(T/28)*1.2;break;case 5:eox=sx_(T/22)*1.8;break;case 4:eoy=Math.abs(sx_(T/105))*1.5;break;case 9:eoy=-Math.abs(sx_(T/175))*10;break;default:eoy=-Math.abs(sx_(T/170))*3}}
 eox*=fz;eoy*=fz;erot*=fz;esy=1+(esy-1)*fz;esx=1+(esx-1)*fz;
 g.fillStyle='#0003';g.beginPath();g.ellipse(p.x+eox,p.y-2,Math.max(9,20-bob*.6+eoy*.4),7,0,0,7);g.fill();
 g.save();g.translate(p.x+eox,p.y+eoy);g.rotate(p.vx/185*(sd?.12:.08)+(sd?0:sn*am*.02)+erot);g.scale(esx,esy);
 const sl=(sx,sy,w,h,ox,oy)=>g.drawImage(lo,sx,sy,w,h,-14*K+sx*K+ox,-36*K+sy*K+oy+bob,w*K,h*K+.8);
 if(sd)sl(0,0,28,36,0,0);
 else{const E=v=>v*v*(3-2*v),ar=sn*am*2.4*K,lf=E(Math.max(0,sn))*am*3*K,rf=E(Math.max(0,-sn))*am*3*K,ox=0;
  sl(0,0,28,19,0,0);if(AL==null)sl(0,19,10,8,0,-ar);sl(10,19,8,8,0,0);if(AR==null)sl(18,19,10,8,0,ar);sl(0,27,28,3,0,0);
  sl(0,30,14,6,-Math.max(0,sn)*ox,-lf);sl(14,30,14,6,Math.max(0,-sn)*ox,-rf);
  const rarm=(sd2,a)=>{a*=fz;const px=(sd2>0?5:-5)*K,py=-16*K+bob;g.save();g.translate(px,py);g.rotate(a);
   if(sd2>0)g.drawImage(lo,18,19,10,8,-K,-K,10*K,8*K+.8);else g.drawImage(lo,0,19,10,8,-9*K,-K,10*K,8*K+.8);g.restore();return[px-8*K*Math.sin(a),py+8*K*Math.cos(a)]};
  if(AL!=null){const tp=rarm(-1,AL);if(GL2){g.save();g.translate(tp[0],tp[1]-3);phIcon(g,30*fz+1);g.restore()}}
  if(AR!=null){const tp=rarm(1,AR);if(GL){const pz=Math.min(1,te/260);g.save();g.translate(tp[0],tp[1]-3);g.rotate(xi==7?sx_(te/85)*.35:0);g.textAlign='center';g.textBaseline='middle';g.globalAlpha=1;g.fillStyle='#000';g.font=Math.round(23*pz*fz+1)+'px sans-serif';g.fillText(GL,0,0);g.restore();g.textBaseline='alphabetic'}}}
 g.restore();
 if(xi>=0&&xi<10)emoFx(p,xi,te,fz);if(xi==14)zzz(p,te);
 g.font='bold 13px "Pixelify Sans",sans-serif';g.textAlign='center';g.lineWidth=4;g.strokeStyle='#0008';const nm=((p==me?micOn:p.mic)?'🎤 ':'')+p.name;g.strokeText(nm,p.x,p.y+16);g.fillStyle=ncol(p);g.fillText(nm,p.x,p.y+16)}
const wrap=(s,mw)=>{const ws=s.replace(/(\S{20})(?=\S)/g,'$1 ').split(/\s+/),ls=[];let cur='';
 ws.forEach(w=>{const tt=cur?cur+' '+w:w;if(cur&&g.measureText(tt).width>mw){ls.push(cur);cur=w}else cur=tt});
 if(cur)ls.push(cur);return ls.length?ls:[s]};
function over(p,t){if(t<p.st&&p.say){g.font='bold 14px "Pixelify Sans",sans-serif';g.textAlign='center';
  const ls=wrap(p.say,190),w=Math.max(...ls.map(s=>g.measureText(s).width))+18,h=ls.length*17+9,
  x=Math.max(4,Math.min(WW-w-4,p.x-w/2)),y=Math.max(4,p.y-92-h),tx=Math.max(x+12,Math.min(x+w-12,p.x));
  g.beginPath();g.roundRect(x,y,w,h,8);g.fillStyle='#fff';g.fill();g.lineWidth=3;g.strokeStyle='#3b2a3a';g.stroke();
  g.beginPath();g.moveTo(tx-6,y+h-1);g.lineTo(tx,y+h+8);g.lineTo(tx+6,y+h-1);g.fillStyle='#fff';g.fill();g.stroke();
  g.fillStyle='#3b2a3a';ls.forEach((s,i)=>g.fillText(s,x+w/2,y+16+i*17))}
 if(t<p.et){const a=1-(p.et-t)/2500;g.globalAlpha=Math.min(1,(p.et-t)/600);g.font=`${Math.min(1,a*7)*32}px sans-serif`;g.fillText(p.emo,p.x+34,p.y-70-a*20);g.globalAlpha=1}}
let zt=0,zk=0;const tcv=document.createElement('canvas'),tcx=tcv.getContext('2d');
function render(t){const dpr=Math.min(devicePixelRatio||1,1.5),w=innerWidth,h=innerHeight;
 if(cv.width!=(w*dpr|0)||cv.height!=(h*dpr|0)){cv.width=w*dpr;cv.height=h*dpr}
 g.setTransform(dpr,0,0,dpr,0,0);g.fillStyle='#1d1a24';g.fillRect(0,0,w,h);g.imageSmoothingEnabled=false;
 const s0=Math.min(w/WW,h/WH),U=36*K,ZL=[[-.05,1.4],[.19,1.2]];
 const lvl=n=>{if(n==2){const z=Math.max(s0*1.5,Math.min(h/(WH*.62),1.7)),vw=w/z,vh=h/(z*.62),fx=vw<WW?Math.max(vw/2,Math.min(WW-vw/2,me.x)):WW/2,fy=vh<WH?Math.max(vh/2,Math.min(WH-vh/2,me.y-50)):WH/2;return[z,fx,fy,1]}if(!n){if(h>w*1.2){const z=h/WH,vw=w/z;return[z,vw<WW?Math.max(vw/2,Math.min(WW-vw/2,me.x)):WW/2,WH/2]}return[s0,WW/2,WH/2]}const[bt,sp]=ZL[n-1],z=Math.min(h/(sp*U),w/(1.15*28*K)),vw=w/z,vh=h/z,fx=vw<WW?Math.max(vw/2,Math.min(WW-vw/2,me.x)):WW/2,fy=vh<WH?Math.max(vh/2,Math.min(WH-vh/2,me.y-bt*U-vh/2+(h>w?64/z:0))):WH/2;return[z,fx,fy]};
 zk+=(zt-zk)*.14;if(Math.abs(zt-zk)<.004)zk=zt;
 const zi=Math.min(1,Math.floor(zk)),zf=zk-zi,A=lvl(zi),B=lvl(zi+1),s=A[0]+(B[0]-A[0])*zf,cx=A[1]+(B[1]-A[1])*zf,cy=A[2]+(B[2]-A[2])*zf;
 const ts=(A[3]||0)+((B[3]||0)-(A[3]||0))*zf,sy=1-.38*ts,bb=(x,y,f)=>{if(ts>.001){g.save();g.translate(x,y);g.scale(1,1/sy);g.translate(-x,-y);f();g.restore()}else f()};
 WV={s,sy,cx,cy,w,h};g.translate(w/2,h/2);g.scale(s,s*sy);g.translate(-cx,-cy);g.save();g.beginPath();g.rect(0,-90*ts,WW,WH+90*ts);g.clip();
 const m=MP[mi];g.fillStyle=m.f;g.fillRect(0,0,WW,WH);m.bg&&m.bg();
 const L=[...m.o.map(o=>({y:o[1]+o[3],f:()=>{const[a,b,ow,oh,c]=o;if(!c)return;rr(a+4,b+6,ow,oh,5,'#0003');const e=(16+Math.min(oh,70)*.4)*ts;if(e>.5){g.fillStyle=c;g.fillRect(a,b+oh-e,ow,e+1);g.fillStyle='#0000004d';g.fillRect(a,b+oh-e,ow,e+1);g.fillStyle='#0003';g.fillRect(a,b+oh-e,ow,2);g.save();g.translate(0,-e)}rr(a,b,ow,oh,5,c);g.fillStyle='#fff4';g.fillRect(a+3,b+2,ow-6,4);g.fillStyle='#0002';g.fillRect(a+3,b+oh-5,ow-6,3);o[5]&&o[5](a,b,ow,oh);if(e>.5)g.restore()}})),
  ...(m.d||[]).map(d=>({y:d[3],f:()=>bb(d[1],d[3],()=>{if(typeof d[0]=='function')return d[0](d[1],d[2]);g.font='34px sans-serif';g.textAlign='center';g.fillText(d[0],d[1],d[2])})})),
  ...actors().map(p=>({y:p.y,f:()=>bb(p.x,p.y,()=>pdraw(p,t))}))].sort((a,b)=>a.y-b.y);
 L.forEach(i=>i.f());actors().forEach(p=>bb(p.x,p.y,()=>over(p,t)));
 if(micOn){g.beginPath();g.arc(me.x,me.y-30,VR,0,7);g.strokeStyle='#ff8fa3aa';g.lineWidth=2;g.setLineDash([8,8]);g.stroke();g.setLineDash([])}g.restore();
 if(ts>.01){const W2=cv.width,H2=cv.height;if(tcv.width!=W2||tcv.height!=H2){tcv.width=W2;tcv.height=H2}tcx.clearRect(0,0,W2,H2);tcx.drawImage(cv,0,0);g.setTransform(1,0,0,1,0,0);g.fillStyle='#1d1a24';g.fillRect(0,0,W2,H2);g.imageSmoothingEnabled=false;
  const hs=Math.max(2,Math.round(dpr*2));for(let y=0;y<H2;y+=hs){const f=1-.15*ts*(1-(y+hs/2)/H2),dw=W2*f;g.drawImage(tcv,0,y,W2,hs,(W2-dw)/2,y,dw,hs)}
  const gr=g.createLinearGradient(0,0,0,H2*.55);gr.addColorStop(0,'rgba(24,16,48,'+(.42*ts)+')');gr.addColorStop(1,'rgba(24,16,48,0)');g.fillStyle=gr;g.fillRect(0,0,W2,H2*.55)}
 if(joy&&joy.m){g.setTransform(dpr,0,0,dpr,0,0);g.globalAlpha=.4;g.fillStyle='#fff';[[joy.ox,joy.oy,45],[joy.cx,joy.cy,18]].forEach(([x,y,q])=>{g.beginPath();g.arc(x,y,q,0,7);g.fill()});g.globalAlpha=1}}
function send(){const t=ci.value.trim().slice(0,60);ci.value='';if(!t)return;me.sid=CLIENT_ID+'-'+(++sq);say(me,t);
 if(channelReady){broadcast('chat',{name:pn,text:t,clientId:CLIENT_ID,id:me.sid,p:playerPayload()});broadcastState();try{channel.track(playerPayload())}catch(e){}}
 else{if(supabaseClient)log('','Belum tersambung ke server, pesan hanya terlihat olehmu.',1);
  if(!rem.size)setTimeout(()=>{const b=bots[r(bots.length)];b&&say(b,botSay(b))},1000+Math.random()*1200)}}
$('#cs').onclick=send;ci.onkeydown=e=>{if(e.key=='Enter'){send();ci.blur()}else if(e.key=='Escape')ci.blur();e.stopPropagation()};
addEventListener('keydown',e=>{if(G.hidden||document.activeElement==ci)return;if(e.key=='Enter'){ci.focus();e.preventDefault();return}
 keys[e.key.length==1?e.key.toLowerCase():e.key]=1;if(e.key.startsWith('Arrow'))e.preventDefault()});
addEventListener('keyup',e=>{delete keys[e.key.length==1?e.key.toLowerCase():e.key]});addEventListener('blur',()=>keys={});
cv.onpointerdown=e=>{joy={ox:e.clientX,oy:e.clientY,cx:e.clientX,cy:e.clientY,dx:0,dy:0,m:0};cv.setPointerCapture(e.pointerId);ci.blur();$('#emp').hidden=true;closeWh();dn={x:e.clientX,y:e.clientY}};
cv.onpointermove=e=>{if(!joy)return;const x=e.clientX-joy.ox,y=e.clientY-joy.oy,l=Math.hypot(x,y),c=Math.min(1.7,l/45);joy.m=l>10;joy.dx=l?x/l*c:0;joy.dy=l?y/l*c:0;joy.cx=e.clientX;joy.cy=e.clientY};
cv.onpointerup=e=>{tap(e);joy=null};cv.onpointercancel=()=>{dn=null;joy=null};
EM.forEach(e=>{const b=document.createElement('button');b.className='gb';b.textContent=e;b.onclick=()=>{me.pz=null;emote(me,e);if(channelReady)broadcast('emote',{name:pn,emoji:e,client:CLIENT_ID,id:++eq});$('#emp').hidden=true};$('#emp').append(b)});
$('#hb').onclick=()=>{const h=HS.style.display=='none';HS.style.display=h?'':'none';$('#hb').textContent=h?'Sembunyikan chat':'Tampilkan chat';$('#hb').title=h?'Sembunyikan chat':'Tampilkan chat'};
$('#em').onclick=()=>$('#emp').hidden=!$('#emp').hidden;$('#cam').onclick=()=>{zt=(zt+1)%3;const c=$('#cam');c.classList.toggle('on',zt>0);c.dataset.z=['','1','2.5'][zt];c.title='Kamera: '+['Normal','Kepala sampai kaki','Tampilan 2.5D'][zt]};
const ML=$('#ml');MP.forEach((m,i)=>{const b=document.createElement('button');b.textContent=m.n;b.onclick=()=>{ML.hidden=true;setMap(i)};ML.append(b);tabs.push(b)});
$('#mb').onclick=()=>{const o=ML.hidden;if(o){const mb=$('#bgm');mb&&mb.classList.contains('on')&&mb.click()}ML.hidden=!o};
document.addEventListener('click',e=>{if(!ML.hidden&&!e.target.closest('#mb,#ml'))ML.hidden=true});$('#gx').onclick=()=>{closePh();closeWh();lbOff();G.hidden=true;keys={};stopMic();leave();BGM.stop()};
$('#next').onclick=()=>{const k=$('#card'),bg=['#9be3b0','#ffd9a0','#ffb38a','#d9c2f0','#b7e6a5','#a8dfc0'];
 k.innerHTML=`<b style="font-size:20px">Pilih Map</b><canvas id="mc" width="280" height="360"></canvas><input id="nm" maxlength="14" placeholder="Nama karakter..."><p>Mau main di mana? Pemain asli di map yang sama akan muncul.</p>`+MP.map((m,i)=>`<button class="btn next" data-i="${i}" style="margin:0;width:100%;background:${bg[i]}">${m.n}</button>`).join('')+`<button class="tab" id="bk">Kembali</button>`;
 $('#md').hidden=false;$('#bk').onclick=()=>$('#md').hidden=true;
 k.querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>{snap={...cfg};pn=$('#nm').value.trim()||'Pemain';$('#md').hidden=true;G.hidden=false;HS.innerHTML='';HS.style.display='';$('#hb').textContent='Sembunyikan chat';$('#hb').title='Sembunyikan chat';setMap(+b.dataset.i);me.f=VW;log('','Tip: tahan Shift (atau tarik joystick jauh) untuk berlari.',1)})};

const BGM=(()=>{let ac=null,mg=null,tm=0,cur=-1,sg=0,n=0,nx=0,ps=0,hs=[];const M=[[{bpm:92,r:60,sw:0,tk:0,w:'triangle',bw:'sine',v:.09,sc:[0,2,4,7,9],m:[5,-1,6,7,-1,6,5,3,4,-1,3,2,-1,3,4,-1,5,-1,7,8,-1,7,6,5,6,-1,4,3,-1,2,0,-1],b:[0,2,3,1,0,2,3,0]},{bpm:80,r:57,sw:0,tk:0,w:'sine',bw:'triangle',v:.1,sc:[0,2,5,7,9],m:[4,-1,-1,5,6,-1,-1,5,4,-1,2,-1,3,-1,-1,-1,4,-1,-1,5,7,-1,-1,6,5,-1,4,-1,2,-1,-1,-1],b:[0,0,2,2,0,0,3,1]},{bpm:100,r:62,sw:0,tk:0,w:'triangle',bw:'sine',v:.09,sc:[0,2,3,7,8],m:[7,-1,8,7,-1,5,6,-1,7,-1,8,9,-1,8,7,-1,9,-1,8,7,-1,6,5,-1,6,-1,7,5,-1,3,4,-1],b:[0,3,2,0,0,3,4,2]},{bpm:108,r:55,sw:0,tk:0,w:'triangle',bw:'sine',v:.09,sc:[0,2,4,7,9],m:[5,7,9,7,5,-1,7,-1,6,8,10,8,6,-1,8,-1,9,8,7,5,6,-1,4,-1,3,5,7,5,4,2,3,-1],b:[0,3,1,4,0,3,2,0]},{bpm:76,r:64,sw:0,tk:0,w:'sine',bw:'triangle',v:.1,sc:[0,3,5,7,10],m:[3,-1,-1,5,-1,6,-1,-1,7,-1,-1,6,-1,5,-1,-1,3,-1,-1,4,-1,6,-1,-1,5,-1,3,-1,2,-1,-1,-1],b:[0,0,2,2,3,3,1,1]}],[{bpm:104,r:55,sw:1,tk:0,w:'triangle',bw:'sine',v:.085,sc:[0,2,4,7,9],m:[5,-1,6,7,-1,6,5,-1,3,-1,4,5,-1,4,3,-1,5,-1,6,7,-1,8,7,-1,6,-1,5,4,-1,3,-1,-1],b:[0,0,3,3,2,2,3,0]},{bpm:96,r:55,sw:1,tk:0,w:'triangle',bw:'sine',v:.085,sc:[0,2,4,7,9],m:[7,-1,-1,6,5,-1,6,-1,7,-1,-1,8,7,-1,5,-1,6,-1,-1,5,4,-1,5,-1,6,-1,5,-1,3,-1,-1,-1],b:[0,0,3,3,1,1,4,0]},{bpm:110,r:53,sw:1,tk:0,w:'triangle',bw:'sine',v:.085,sc:[0,2,4,7,9],m:[4,5,7,-1,5,4,-1,2,3,4,5,-1,4,3,-1,-1,4,5,7,-1,8,7,-1,5,6,-1,5,4,-1,3,-1,-1],b:[0,0,2,2,3,3,2,0]},{bpm:100,r:57,sw:1,tk:0,w:'triangle',bw:'sine',v:.085,sc:[0,2,4,7,9],m:[5,-1,7,-1,6,-1,5,4,5,-1,6,-1,4,-1,-1,-1,7,-1,8,-1,7,-1,6,5,6,-1,7,-1,5,-1,-1,-1],b:[0,3,1,4,0,3,2,0]},{bpm:92,r:52,sw:1,tk:0,w:'triangle',bw:'sine',v:.085,sc:[0,2,4,7,9],m:[6,-1,5,-1,4,-1,5,6,7,-1,-1,6,5,-1,-1,-1,6,-1,7,-1,8,-1,7,6,5,-1,4,-1,3,-1,-1,-1],b:[0,0,4,4,3,3,1,0]}],[{bpm:84,r:57,sw:0,tk:0,w:'triangle',bw:'sine',v:.085,sc:[0,2,4,7,9],m:[4,-1,-1,5,6,-1,5,-1,4,-1,-1,3,2,-1,-1,-1,4,-1,-1,5,7,-1,6,-1,5,-1,4,-1,2,-1,-1,-1],b:[0,0,3,3,1,1,0,0]},{bpm:76,r:55,sw:0,tk:0,w:'triangle',bw:'sine',v:.085,sc:[0,2,4,7,9],m:[6,-1,-1,-1,7,-1,6,-1,5,-1,-1,4,5,-1,-1,-1,6,-1,-1,-1,8,-1,7,-1,6,-1,5,-1,4,-1,-1,-1],b:[0,0,2,2,3,3,1,0]},{bpm:90,r:59,sw:0,tk:0,w:'triangle',bw:'sine',v:.085,sc:[0,2,4,7,9],m:[5,-1,6,-1,7,-1,6,5,6,-1,-1,5,4,-1,-1,-1,5,-1,6,-1,8,-1,7,6,7,-1,6,-1,5,-1,-1,-1],b:[0,3,1,4,0,3,2,0]},{bpm:80,r:57,sw:0,tk:0,w:'triangle',bw:'sine',v:.085,sc:[0,2,4,7,9],m:[3,-1,4,-1,5,-1,-1,4,3,-1,2,-1,3,-1,-1,-1,4,-1,5,-1,7,-1,-1,6,5,-1,4,-1,3,-1,-1,-1],b:[0,0,3,3,2,2,1,0]},{bpm:72,r:55,sw:0,tk:0,w:'triangle',bw:'sine',v:.085,sc:[0,2,4,7,9],m:[7,-1,-1,6,5,-1,-1,4,5,-1,6,-1,5,-1,-1,-1,7,-1,-1,8,7,-1,-1,6,5,-1,4,-1,5,-1,-1,-1],b:[0,0,4,4,3,3,1,0]}],[{bpm:66,r:60,sw:0,tk:0,w:'sine',bw:'triangle',v:.1,sc:[0,2,4,7,9],m:[7,-1,-1,8,9,-1,-1,8,7,-1,5,-1,6,-1,-1,-1,7,-1,-1,9,10,-1,-1,9,8,-1,7,-1,5,-1,-1,-1],b:[0,0,3,3,1,1,4,0]},{bpm:58,r:57,sw:0,tk:0,w:'triangle',bw:'sine',v:.095,sc:[0,3,5,7,10],m:[5,-1,-1,-1,7,-1,6,-1,5,-1,-1,3,4,-1,-1,-1,5,-1,-1,-1,8,-1,7,-1,6,-1,5,-1,3,-1,-1,-1],b:[0,0,2,2,3,3,1,0]},{bpm:72,r:62,sw:0,tk:0,w:'sine',bw:'sine',v:.09,sc:[0,2,5,7,9],m:[9,-1,7,-1,6,-1,7,-1,5,-1,-1,6,7,-1,-1,-1,9,-1,8,-1,7,-1,6,-1,7,-1,5,-1,-1,-1,-1,-1],b:[0,2,3,3,1,1,0,0]},{bpm:78,r:59,sw:0,tk:0,w:'triangle',bw:'sine',v:.09,sc:[0,2,4,7,9],m:[5,6,7,-1,9,-1,7,6,5,-1,6,-1,7,-1,-1,-1,8,9,10,-1,9,-1,7,-1,6,7,6,-1,5,-1,-1,-1],b:[0,3,1,4,0,3,2,0]},{bpm:62,r:60,sw:0,tk:0,w:'sine',bw:'triangle',v:.1,sc:[0,2,4,7,9],m:[9,-1,-1,7,-1,6,-1,-1,5,-1,6,-1,4,-1,-1,-1,7,-1,-1,6,-1,5,-1,-1,3,-1,4,-1,2,-1,-1,-1],b:[0,0,3,3,2,2,1,0]}],[{bpm:96,r:60,sw:0,tk:0,w:'triangle',bw:'sine',v:.09,sc:[0,2,4,7,9],m:[7,-1,8,9,-1,8,7,-1,5,-1,6,7,-1,-1,-1,-1,7,-1,8,9,-1,10,9,-1,8,-1,7,6,-1,-1,-1,-1],b:[0,0,4,4,3,3,0,0]},{bpm:104,r:62,sw:0,tk:0,w:'sine',bw:'triangle',v:.1,sc:[0,2,4,7,9],m:[9,-1,7,-1,8,9,-1,7,5,-1,6,-1,7,-1,-1,-1,9,-1,10,-1,9,8,-1,7,8,-1,6,-1,5,-1,-1,-1],b:[0,3,4,1,0,3,1,0]},{bpm:88,r:57,sw:0,tk:0,w:'triangle',bw:'sine',v:.09,sc:[0,2,4,7,9],m:[5,-1,-1,7,8,-1,7,-1,5,-1,6,-1,5,3,-1,-1,5,-1,-1,7,9,-1,8,-1,7,-1,8,7,5,-1,-1,-1],b:[0,0,4,4,3,3,1,0]},{bpm:100,r:64,sw:0,tk:0,w:'sine',bw:'sine',v:.09,sc:[0,2,4,7,9],m:[7,9,7,-1,5,-1,6,-1,7,-1,8,7,6,-1,5,-1,8,9,8,-1,7,-1,5,-1,6,7,8,-1,9,-1,-1,-1],b:[0,4,3,1,0,4,3,0]},{bpm:80,r:59,sw:0,tk:0,w:'triangle',bw:'sine',v:.095,sc:[0,2,4,7,9],m:[9,-1,-1,8,7,-1,6,-1,5,-1,6,7,-1,-1,-1,-1,8,-1,-1,7,6,-1,5,-1,3,-1,4,5,-1,-1,-1,-1],b:[0,0,4,4,1,1,0,0]}],[{bpm:60,r:57,sw:0,tk:0,w:'sine',bw:'sine',v:.1,sc:[0,1,4,7,8],m:[5,-1,-1,6,7,-1,-1,6,5,-1,3,-1,2,-1,-1,-1,5,-1,-1,7,8,-1,-1,7,6,-1,5,-1,3,-1,-1,-1],b:[0,0,2,2,3,3,1,0]},{bpm:54,r:55,sw:0,tk:0,w:'triangle',bw:'sine',v:.095,sc:[0,1,4,7,8],m:[7,-1,-1,-1,6,-1,5,-1,3,-1,-1,5,6,-1,-1,-1,7,-1,-1,8,9,-1,8,-1,7,-1,6,-1,5,-1,-1,-1],b:[0,0,3,3,2,2,1,0]},{bpm:66,r:57,sw:0,tk:0,w:'sine',bw:'triangle',v:.1,sc:[0,1,4,7,8],m:[3,-1,5,-1,6,-1,5,3,2,-1,3,-1,5,-1,-1,-1,6,-1,7,-1,8,-1,7,6,5,-1,6,-1,3,-1,-1,-1],b:[0,2,3,1,0,2,3,0]},{bpm:58,r:60,sw:0,tk:0,w:'sine',bw:'sine',v:.1,sc:[0,1,4,7,8],m:[5,-1,-1,-1,5,6,7,-1,6,-1,5,-1,3,-1,-1,-1,2,-1,3,-1,5,-1,-1,6,7,-1,-1,-1,5,-1,-1,-1],b:[0,0,2,2,1,1,3,0]},{bpm:62,r:57,sw:0,tk:0,w:'triangle',bw:'sine',v:.09,sc:[0,1,4,7,8],m:[8,-1,-1,7,6,-1,-1,5,6,-1,7,-1,5,-1,-1,-1,3,-1,-1,5,6,-1,-1,7,8,-1,6,-1,5,-1,-1,-1],b:[0,0,3,3,2,2,1,0]}]];const fq=(S,i)=>440*Math.pow(2,(S.r+12*Math.floor(i/5)+S.sc[((i%5)+5)%5]-69)/12);const note=(f,t,d,w,v)=>{const o=ac.createOscillator(),g=ac.createGain();o.type=w;o.frequency.value=f;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(mg);o.start(t);o.stop(t+d+.03)};const go=d=>{if(d>0){hs.push(sg);sg=(sg+1)%5}else sg=hs.length?hs.pop():(sg+4)%5;n=0;if(ac)nx=ac.currentTime+.05};const tick=()=>{if(!ac||cur<0)return;while(nx<ac.currentTime+.25){if(n>=128){hs.push(sg);sg=(sg+1)%5;n=0}const S=M[cur][sg],sd=30/S.bpm,k=n%32,t=nx+(S.sw&&k%2?sd*.3:0),q=S.m[k];if(q>=0)note(fq(S,q),t,sd*1.6,S.w,S.v);if(k%4==0)note(fq(S,S.b[k/4]-5),t,sd*3.2,S.bw,S.v*1.4);if((S.tk==1&&k%2)||(S.tk==2&&k%4==2))note(5000,t,.03,'square',.012);nx+=sd;n++}};const play=i=>{if(!ac){const C=window.AudioContext||window.webkitAudioContext;if(!C)return;ac=new C();mg=ac.createGain();mg.gain.value=.5;mg.connect(ac.destination)}if(!ps)ac.resume().catch(()=>{});if(cur==i&&tm)return;cur=i;hs=[];sg=Math.floor(Math.random()*5);n=0;nx=ac.currentTime+.1;clearInterval(tm);tm=setInterval(tick,50)};const mn=document.createElement('div');mn.style.cssText='position:absolute;right:10px;top:calc(52px + env(safe-area-inset-top,0px));display:none;gap:6px;background:#000a;padding:6px;border-radius:10px;z-index:3';const mk=(t,ti,f)=>{const b=document.createElement('button');b.className='gb';b.textContent=t;b.title=ti;b.onclick=f;mn.appendChild(b);return b};const unp=()=>{if(ps){ps=0;pp.textContent='⏸';pp.title='Pause';if(ac&&cur>=0)ac.resume().catch(()=>{})}};mk('⏮','Sebelumnya',()=>{if(cur<0)return;unp();go(-1)});const pp=mk('⏸','Pause',()=>{if(cur<0||!ac)return;if(ps)unp();else{ps=1;pp.textContent='▶';pp.title='Putar';ac.suspend().catch(()=>{})}});mk('⏭','Berikutnya',()=>{if(cur<0)return;unp();go(1)});document.getElementById('gm').appendChild(mn);const stop=()=>{clearInterval(tm);tm=0;cur=-1;ps=0;pp.textContent='⏸';pp.title='Pause';mn.style.display='none';if(ac)ac.suspend().catch(()=>{})};document.addEventListener('visibilitychange',()=>{if(!ac)return;if(document.hidden)ac.suspend().catch(()=>{});else if(cur>=0&&!ps)ac.resume().catch(()=>{})});const b=document.createElement('button');b.className='gb';b.id='bgm';b.title='Musik';b.textContent='🎵';b.onclick=()=>{const o=mn.style.display=='none';mn.style.display=o?'flex':'none';b.classList.toggle('on',o)};const gx=document.getElementById('gx');gx.parentNode.insertBefore(b,gx);return{play,stop}})();const NPAL=['#ffe27a','#ff9eb5','#8fd3f4','#a8e6a1','#c9a3ff','#ffb88a','#7ee0c3','#f4a6e8','#ffd166','#9ad0ff','#b8f08a','#ff8a7a','#e3b8ff','#ffc6a0','#9be3e3','#f0f08a'];const hcol=k=>{k=String(k);let h=7;for(let i=0;i<k.length;i++)h=(h*31+k.charCodeAt(i))>>>0;return NPAL[h%NPAL.length]};const ncol=p=>hcol(p===me?CLIENT_ID:(p.pid||p.name));const rem=new Map(),actors=()=>[me,...rem.values(),...(rem.size?[]:bots),...npcs];
// ===== Voice chat jarak dekat (WebRTC; signaling lewat Supabase Realtime) =====
const VR=130,pcs=new Map(),RB=new Map(),ICE={iceServers:[...(TURN_URL?[{urls:TURN_URL.split(','),username:TURN_USER,credential:TURN_PASS}]:[]),{urls:'stun:stun.l.google.com:19302'},{urls:['turn:openrelay.metered.ca:80','turn:openrelay.metered.ca:443','turn:openrelay.metered.ca:443?transport=tcp'],username:'openrelayproject',credential:'openrelayproject'}]};let micOn=false,micStream=null,hb=0,micRaw=null;
const rtcSend=(to,d)=>broadcast('rtc',{from:CLIENT_ID,to,...d});
const micTrack=()=>micStream?micStream.getAudioTracks()[0]:null;
let actx=null;const getCtx=()=>{if(!actx){const C=window.AudioContext||window.webkitAudioContext;if(C){try{actx=new C()}catch(x){}}}if(actx&&actx.state=='suspended')actx.resume().catch(()=>{});return actx};
let XIR=null,XW=0;const loadTurn=()=>{if(!XIR_CH||!XIR_ID||!XIR_SEC)return;XW=1;fetch('https://global.xirsys.net/_turn/'+encodeURIComponent(XIR_CH),{method:'PUT',headers:{'Authorization':'Basic '+btoa(XIR_ID+':'+XIR_SEC),'Content-Type':'application/json'},body:JSON.stringify({format:'urls'})}).then(r=>r.json()).then(j=>{const v=j&&j.v&&j.v.iceServers;if(v&&v.urls){XIR=v;log('','Server relay suara (Xirsys) siap.',1)}else log('','Xirsys: respons tidak dikenali. Cek Channel, Ident, Secret.',1)}).catch(x=>log('','Gagal menghubungi Xirsys: '+((x&&x.message)||x),1)).then(()=>{XW=0})};function rtcEnsure(peer){if(!window.RTCPeerConnection)return null;let e=pcs.get(peer);if(e)return e;if((RB.get(peer)||0)>Date.now())return null;if(XW)return null;
 const pc=new RTCPeerConnection({iceServers:[...(XIR?[XIR]:[]),...ICE.iceServers]}),au=new Audio();au.autoplay=true;au.muted=true;au.volume=0;e={pc,au,q:[],rd:false,gn:null,sr:null};pcs.set(peer,e);
 pc.onicecandidate=ev=>{if(ev.candidate)rtcSend(peer,{c:ev.candidate})};
 pc.ontrack=ev=>{const st=ev.streams[0]||new MediaStream([ev.track]);au.srcObject=st;au.play().catch(()=>{});
  const cx=getCtx();if(cx){try{if(e.sr)e.sr.disconnect();if(e.gn)e.gn.disconnect();e.sr=cx.createMediaStreamSource(st);e.gn=cx.createGain();e.gn.gain.value=0;e.sr.connect(e.gn);e.gn.connect(cx.destination)}catch(x){e.gn=null;au.muted=false}}else au.muted=false};
 pc.onconnectionstatechange=()=>{const st=pc.connectionState,o=rem.get(peer),nm=o?o.name:'pemain';if(st=='connected')log('','Voice terhubung dengan '+nm,1);if(st=='failed'){log('','Voice gagal tersambung dengan '+nm+' (jaringan memblokir koneksi langsung)',1);RB.set(peer,Date.now()+20000);rtcClose(peer)}};
 if(CLIENT_ID<peer){pc.addTransceiver('audio',{direction:'sendrecv'});if(micTrack())pc.getSenders()[0].replaceTrack(micTrack());
  pc.createOffer().then(o=>pc.setLocalDescription(o)).then(()=>rtcSend(peer,{s:pc.localDescription})).catch(()=>{})}
 return e}
function rtcClose(peer){const e=pcs.get(peer);if(!e)return;try{e.pc.close()}catch(x){}e.au.srcObject=null;try{if(e.sr)e.sr.disconnect();if(e.gn)e.gn.disconnect()}catch(x){}pcs.delete(peer)}
async function rtcHandle(m){if(!m||m.to!==CLIENT_ID||!m.from)return;const e=rtcEnsure(m.from);if(!e)return;const pc=e.pc;
 try{if(m.s){if(m.s.type=='offer'&&CLIENT_ID<m.from)return;await pc.setRemoteDescription(m.s);e.rd=true;
   if(m.s.type=='offer'){pc.getTransceivers().forEach(t=>t.direction='sendrecv');if(micTrack())await pc.getSenders()[0].replaceTrack(micTrack());
    const a=await pc.createAnswer();await pc.setLocalDescription(a);rtcSend(m.from,{s:pc.localDescription})}
   while(e.q.length)await pc.addIceCandidate(e.q.shift())}
  else if(m.c){if(e.rd)await pc.addIceCandidate(m.c);else e.q.push(m.c)}}catch(x){}}
// makin jauh makin pelan, makin dekat makin keras; di luar radius = tidak terdengar
function volUpd(){pcs.forEach((e,pe)=>{const o=rem.get(pe),d=o?Math.hypot(o.x-me.x,o.y-me.y):1e9;const v=d<VR?Math.pow(1-d/VR,2):0;if(e.gn)e.gn.gain.value=v;else e.au.volume=v})}
addEventListener('pointerdown',()=>{if(!G.hidden){getCtx();pcs.forEach(e=>{try{e.au.play().catch(()=>{})}catch(x){}})}},true);addEventListener('keydown',()=>{if(!G.hidden)getCtx()},true);
const MIC_DB=10;function boost(st){micRaw=st;try{const cx=getCtx();if(!cx||!cx.createMediaStreamDestination)return st;const src=cx.createMediaStreamSource(st),gn=cx.createGain(),cp=cx.createDynamicsCompressor(),ds=cx.createMediaStreamDestination();gn.gain.value=Math.pow(10,MIC_DB/20);cp.threshold.value=-6;cp.knee.value=0;cp.ratio.value=20;cp.attack.value=.003;cp.release.value=.1;src.connect(gn);gn.connect(cp);cp.connect(ds);return ds.stream}catch(x){return st}}function stopMic(){micOn=false;if(micRaw)micRaw.getTracks().forEach(t=>t.stop());micRaw=null;if(micStream)micStream.getTracks().forEach(t=>t.stop());micStream=null;pcs.forEach(e=>e.pc.getSenders().forEach(s=>s.replaceTrack(null).catch(()=>{})));$('#mic').classList.remove('on');broadcastState()}
$('#mic').onclick=async()=>{if(micOn){stopMic();return}
 if(!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)){log('','Mikrofon tidak tersedia. Buka halaman lewat HTTPS atau localhost (bukan file://).',1);return} try{try{micStream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true,autoGainControl:true}})}catch(e1){if(e1&&(e1.name=='NotAllowedError'||e1.name=='SecurityError'))throw e1;micStream=await navigator.mediaDevices.getUserMedia({audio:true})}micStream=boost(micStream);micOn=true;
  pcs.forEach(e=>e.pc.getSenders().forEach(s=>s.replaceTrack(micTrack()).catch(()=>{})));$('#mic').classList.add('on');broadcastState();
  log('','Mic aktif. Suaramu hanya terdengar oleh pemain di dalam lingkaran putus-putus di sekitarmu.',1)}
 catch(err){const nm=(err&&err.name)||'error',h=nm=='NotAllowedError'?'Izin mikrofon ditolak. Izinkan Mikrofon di pengaturan situs/browser lalu coba lagi.':nm=='NotFoundError'?'Mikrofon tidak ditemukan.':nm=='NotReadableError'?'Mikrofon sedang dipakai aplikasi lain.':'Butuh HTTPS atau localhost.';log('','Mikrofon gagal ('+nm+'). '+h,1)}};
let supabaseClient=null,channel=null,channelReady=false,sq=0,eq=0,pt=0,lq='',lastChatAt=0;
const CLIENT_ID=(window.crypto&&crypto.randomUUID)?crypto.randomUUID():'p-'+Math.random().toString(36).slice(2)+Date.now();
const cl=(v,n)=>Math.max(0,Math.min(n-1,Number(v)||0));
const cleanCfg=c=>({g:c&&c.g==='f'?'f':'m',skin:cl(c&&c.skin,6),hair:cl(c&&c.hair,HR.length),hc:cl(c&&c.hc,HAIRC.length),top:cl(c&&c.top,13),tc:cl(c&&c.tc,CLR.length),bot:cl(c&&c.bot,12),bc:cl(c&&c.bc,BOTC.length),shoe:cl(c&&c.shoe,10),sc:cl(c&&c.sc,8),acc:cl(c&&c.acc,13),ac:cl(c&&c.ac,CLR.length)});
function playerPayload(){return {id:CLIENT_ID,n:String(pn||'Pemain').slice(0,14),c:cleanCfg(snap||cfg),x:Math.round(me.x),y:Math.round(me.y),vx:Math.round(me.vx||0),vy:Math.round(me.vy||0),f:me.f|0,mic:micOn?1:0,s:(me.say&&now<me.st)?me.say:'',sid:me.sid||''}}
function broadcast(event,payload){
  // Jangan kirim sebelum Realtime channel benar-benar tersambung.
  // Jika belum SUBSCRIBED, supabase-js dapat mencoba fallback REST.
  if(!channel || !channelReady) return;
  channel.send({type:'broadcast',event,payload}).then(status=>{
    if(status && status!=='ok') log('','Pengiriman Realtime gagal: '+status,1);
  }).catch(err=>log('','Gagal mengirim Realtime: '+(err?.message||err),1));
}
function broadcastState(){if(channel)broadcast('state',playerPayload())}
function updateRemote(peer,v){if(!v||v.id===CLIENT_ID||!v.c)return;let o=rem.get(peer);
 if(!o){o=mk(String(v.n||'Pemain').slice(0,14),cleanCfg(v.c),0);o.x=Number(v.x)||480;o.y=Number(v.y)||300;o.tx=o.x;o.ty=o.y;o.rvx=0;o.rvy=0;o.ms=0;o.es=0;o.pid=peer;rem.set(peer,o);log('',o.name+' ada di sini',1)}
 o.name=String(v.n||'Pemain').slice(0,14);o.tx=Math.max(14,Math.min(WW-14,Number(v.x)||0));o.ty=Math.max(14,Math.min(WH-4,Number(v.y)||0));o.rvx=Number(v.vx)||0;o.rvy=Number(v.vy)||0;
 if(v.c)o.cfg=cleanCfg(v.c);if(v.f!=null)o.f=cl(v.f,4);o.mic=v.mic?1:0;
 if(v.s&&v.sid&&v.sid!==o.sid){o.sid=v.sid;say(o,String(v.s).slice(0,60))}rtcEnsure(peer)}
function syncPresence(){if(!channel)return;const state=channel.presenceState(),ids=new Set();
 Object.entries(state).forEach(([peer,list])=>{if(peer===CLIENT_ID)return;(list||[]).forEach(v=>{if(v&&v.id!==CLIENT_ID){ids.add(peer);updateRemote(peer,v)}})});
 [...rem].forEach(([peer,o])=>{if(!ids.has(peer)){log('',o.name+' keluar',1);rtcClose(peer);rem.delete(peer)}})}
function leave(){const old=channel;channel=null;channelReady=false;pcs.forEach((e,p)=>rtcClose(p));rem.clear();lq='';if(old){try{old.untrack();supabaseClient&&supabaseClient.removeChannel(old)}catch(e){}}}
async function joinRoom(i){leave();loadTurn();
 if(!supabaseClient){log('','Supabase belum dikonfigurasi. Isi URL dan key di bagian atas file HTML.',1);return}
 const room='map-'+i;
 try{const ch=supabaseClient.channel(room,{config:{broadcast:{self:false,ack:false},presence:{key:CLIENT_ID}}});channel=ch;
  ch.on('presence',{event:'sync'},()=>syncPresence());
  ch.on('presence',{event:'join'},()=>syncPresence());
  ch.on('presence',{event:'leave'},()=>syncPresence());
  ch.on('broadcast',{event:'state'},({payload})=>{if(payload&&payload.id!==CLIENT_ID)updateRemote(payload.id,payload)});
  ch.on('broadcast',{event:'rtc'},({payload})=>rtcHandle(payload));
  ch.on('broadcast',{event:'chat'},({payload})=>{if(!payload||payload.clientId===CLIENT_ID)return;
   const text=String(payload.text||'').slice(0,60);if(!text)return;
   let o=rem.get(payload.clientId);
   if(!o&&payload.p){updateRemote(payload.clientId,payload.p);o=rem.get(payload.clientId)}
   if(!o)o=[...rem.values()].find(x=>x.name===payload.name);
   if(o){if(payload.id&&o.sid===payload.id)return;o.sid=payload.id||o.sid;say(o,text)}else log(String(payload.name||'Pemain').slice(0,14),text,0,hcol(payload.clientId||payload.name))});
  ch.on('broadcast',{event:'sms'},({payload})=>window.__smsIn&&window.__smsIn(payload));ch.on('broadcast',{event:'emote'},({payload})=>{if(!payload||payload.client===CLIENT_ID)return;let o=rem.get(payload.client)||[...rem.values()].find(x=>x.name===payload.name);if(o)emote(o,String(payload.emoji||'').slice(0,4));else{const temp={name:String(payload.name||'Pemain')};log(temp.name,String(payload.emoji||'').slice(0,4))}});
  ch.subscribe(async status=>{
   if(channel!==ch) return;
   if(status==='SUBSCRIBED'&&!G.hidden&&mi===i){
    channelReady=true;
    try{const presenceStatus=await ch.track(playerPayload());if(presenceStatus && presenceStatus!=='ok')log('','Channel tersambung, tetapi presence gagal: '+presenceStatus,1);}
    catch(err){log('','Gagal mendaftarkan pemain: '+(err?.message||err),1)}
    broadcastState();
    log('','Terhubung ke Supabase Realtime. Map: '+room,1);
   } else if(status==='CHANNEL_ERROR'||status==='TIMED_OUT'||status==='CLOSED'){
    channelReady=false;
    log('','Koneksi Realtime gagal ('+status+'). Periksa Project URL, publishable/anon key, dan pengaturan Realtime.',1);
   }
  });
 }catch(e){channel=null;log('','Gagal menghubungkan multiplayer. Periksa konfigurasi Supabase.',1)}}
if(window.supabase&&SUPABASE_URL.startsWith('https://')&&!SUPABASE_KEY.includes('PASTE_')){try{supabaseClient=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY,{realtime:{params:{eventsPerSecond:40}}})}catch(e){supabaseClient=null}}
// ===== MENU WHEEL (klik karakter) + PONSEL =====
let WV,dn=null,WX=0,WY=0;
const GW=282,GH=420,KP={l:0,r:0,u:0,d:0},KM={ArrowLeft:'l',a:'l',ArrowRight:'r',d:'r',ArrowUp:'u',w:'u',' ':'u',ArrowDown:'d',s:'d'};
const esc=s=>String(s).replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
const wh=document.createElement('div');wh.id='wh';wh.hidden=true;
wh.innerHTML='<button class="wb" data-a="em" title="Emote" style="--x:0px;--y:-92px">😊</button><button class="wb" data-a="pose" title="Pose" style="--x:-92px;--y:0px">🧘</button><button class="wb" data-a="ph" title="Handphone" style="--x:92px;--y:0px"><svg viewBox="0 0 24 24" width="30" height="30"><defs><linearGradient id="pg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff6ec4"/><stop offset="1" stop-color="#4f8cff"/></linearGradient></defs><rect x="6" y="1.5" width="12" height="21" rx="3.2" fill="#1c1c22"/><rect x="7.2" y="2.7" width="9.6" height="18.6" rx="2.4" fill="url(#pg)"/><rect x="10" y="3.6" width="4" height="1.5" rx=".75" fill="#000"/><circle cx="10" cy="10" r="1.6" fill="#ffe14d"/><circle cx="14" cy="10" r="1.6" fill="#5be37d"/><circle cx="10" cy="14" r="1.6" fill="#fff"/><circle cx="14" cy="14" r="1.6" fill="#ff5a5a"/></svg></button><button class="wb" data-a="bag" title="Ransel" style="--x:0px;--y:92px">🎒</button>';
G.append(wh);const emp=$('#emp');
function closeWh(){wh.hidden=true;pp.hidden=true}
wh.onclick=e=>{const a=e.target.closest('[data-a]')?.dataset.a;if(!a)return;closeWh();
 if(a=='em'){emp.style.left=Math.max(130,Math.min(innerWidth-130,WX))+'px';emp.style.top=Math.max(130,Math.min(innerHeight-130,WY))+'px';[...emp.children].forEach((b,i)=>{const t=-Math.PI/2+i*Math.PI/5;b.style.transform=`translate(${Math.cos(t)*105}px,${Math.sin(t)*105}px)`});emp.hidden=false}
 else if(a=='ph')openPh();else if(a=='pose')openPose();else log('','🎒 Inventory segera hadir.',1)};
function tap(e){if(!dn||!WV||G.hidden)return;const m=Math.hypot(e.clientX-dn.x,e.clientY-dn.y)>10||(joy&&joy.m);const d=dn;dn=null;if(m)return;
 const{s,sy,cx,cy,w,h}=WV,X=w/2+(me.x-cx)*s,Y=h/2+(me.y-44-cy)*s*sy;
 if(Math.hypot(e.clientX-X,(e.clientY-Y)/1.4)<40*s+12){WX=Math.max(110,Math.min(w-110,X));WY=Math.max(120,Math.min(h-80,Y));wh.style.left=WX+'px';wh.style.top=WY+'px';wh.hidden=false}}
const ph=document.createElement('div');ph.id='ph';ph.hidden=true;
ph.innerHTML='<div id="pf"><div id="di"></div><div id="sb"><b id="pt"></b><span>5G ▮▮▮</span></div><div id="pa"></div><div id="hi"></div></div>';G.append(ph);
const pa=$('#pa');let GM=null,raf=0,ct=0,cur='';const TH={};
const stopG=()=>{GM=null;cancelAnimationFrame(raf);clearInterval(ct)};
const clk=()=>{$('#pt').textContent=new Date().toTimeString().slice(0,5)};
function openPh(){$('#pf').style.setProperty('--ps',Math.min(1,(innerHeight-16)/620));keys={};clk();ph.hidden=false;home()}
function closePh(){stopG();ph.hidden=true}
ph.onclick=e=>{if(e.target==ph)closePh()};$('#hi').onclick=()=>home();
const IC={sms:['#6cf08a','#12a83a','<path fill="#fff" d="M5 6h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-8l-5 4v-4H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/>'],
tel:['#5be37d','#0c9b3a','<path fill="#fff" d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.6 3.6a1 1 0 0 1-.25 1z"/>'],
qr:['#128a63','#04362a','<path fill="#f5c542" d="M14 2a5.5 5.5 0 1 0 4 9.3A4.6 4.6 0 1 1 14 2z"/><circle cx="19" cy="5" r="1.1" fill="#f5c542"/><path fill="#fff" d="M2.5 13c3-1 6-1 9.5 1 3.5-2 6.5-2 9.5-1v7c-3-1-6-1-9.5 1-3.5-2-6.5-2-9.5-1z"/><path stroke="#128a63" d="M12 14v7"/>'],
kms:['#ff5a6e','#b3122d','<rect x="3" y="4" width="18" height="16" rx="3" fill="#fff"/><text x="8" y="15" font-size="9" text-anchor="middle" fill="#d4203f" font-weight="700">あ</text><text x="16.5" y="16" font-size="8" text-anchor="middle" fill="#333" font-weight="700">A</text><path d="M12 6v12" stroke="#ddd" stroke-width=".8"/>'],
snk:['#c3e07a','#7aa233','<path d="M4 19h10v-5h5V9h-5" fill="none" stroke="#1e3a0f" stroke-width="3.4" stroke-linejoin="round"/><rect x="12.5" y="4.5" width="5" height="5" fill="#1e3a0f"/><rect x="15" y="6" width="1.5" height="1.5" fill="#c3e07a"/>'],
plt:['#5fa8e6','#2f6fb0','<path fill="#8fa3b8" d="M0 24L7 11l5 7 5-9 7 15z"/><path fill="#2f4a35" d="M0 24l5-6 5 6z"/><path fill="#fff" d="M2 7l-1-4h4zM3 6l-2 4 2 1z" opacity="0"/><path fill="#6b7785" d="M3 9l-1-4h3l3 3z"/><path fill="#cfd8e3" d="M3 8l8-1 10 3-10 1H5z"/><ellipse cx="13" cy="8" rx="2.5" ry="1.200" fill="#4fc3f7"/><path fill="#6b7785" d="M9 10l-4 4h3l5-4z"/>'],
crs:['#8fdcff','#2f9dea','<rect y="16" width="24" height="8" fill="#6fcb4a"/><rect x="7" y="7" width="10" height="10" fill="#fff"/><rect x="10" y="4" width="4" height="3" fill="#e53935"/><rect x="17" y="10" width="4" height="3" fill="#ff9800"/><rect x="9" y="9" width="2" height="2" fill="#222"/><rect x="8" y="17" width="2" height="3" fill="#ff9800"/><rect x="13" y="17" width="2" height="3" fill="#ff9800"/>'],
bnc:['#4a7bf0','#1a2f8a','<path d="M0 17h24v7H0z" fill="#c0392b"/><path d="M0 20h24M8 17v7M16 20v4" stroke="#7b1e1e" stroke-width=".6"/><circle cx="12" cy="10" r="7" fill="#e53935"/><circle cx="9.5" cy="7.5" r="2.2" fill="#ffb3b3"/>'],
set:['#c4c9d4','#6a7080','<circle cx="12" cy="12" r="8" fill="none" stroke="#fff" stroke-width="3.2" stroke-dasharray="3.1 3.140"/><circle cx="12" cy="12" r="6" fill="#fff"/><circle cx="12" cy="12" r="2.5" fill="#6a7080"/>']};
const AP=[['Pesan','sms',()=>sms()],['Telepon','tel',()=>tel()],["Al-Qur'an",'qr',()=>qr()],['Kamus Jepang','kms',()=>kms()],['Snake','snk',()=>game(snake,'Snake')],['Ace Combat','plt',()=>game(plat,'Ace Combat')],['Crossy Road','crs',()=>game(crossy,'Crossy Road')],['Bounce','bnc',()=>game(bounce,'Bounce')],['Pengaturan','set',()=>setg()]];
const WG=[['Gradien',['linear-gradient(160deg,#5b7cfa,#c471ed,#f64f59)','linear-gradient(160deg,#0f2027,#2c5364)','linear-gradient(160deg,#ff9a9e,#fad0c4)','linear-gradient(160deg,#43e97b,#38f9d7)','linear-gradient(160deg,#fa709a,#fee140)','radial-gradient(circle at 30% 20%,#7f7fd5,#1b1b3a)']]];
const WP=WG.flatMap(g=>g[1]);let WPU='';let WPi=0,TL=0,CU=0,CT=0;try{WPi=+localStorage.wp||0}catch(e){}
function home(){stopG();pa.className='home';pa.style.background=WPi<0&&WPU?`url(${WPU}) center/cover`:WP[WPi]||WP[0];TL=CU=0;pa.innerHTML='<div class="gr">'+AP.map((a,i)=>{const c=IC[a[1]];return`<button data-i="${i}"><i style="background:linear-gradient(160deg,${c[0]},${c[1]})"><svg viewBox="0 0 24 24" fill="#fff">${c[2]}</svg></i>${a[0]}</button>`}).join('')+'</div>';pa.querySelectorAll('[data-i]').forEach(b=>b.onclick=()=>AP[b.dataset.i][2]())}
function shell(t,c){stopG();TL=CU=0;pa.className='app';pa.style.background='';pa.innerHTML=`<div class="ah" style="background:${c}">${esc(t)}</div><div class="ab"></div>`;return pa.querySelector('.ab')}
function setg(){const b=shell('Pengaturan','#333');b.innerHTML='<div class="ls"><p>Wallpaper</p></div><div class="wp">'+WP.map((w,i)=>`<button data-i="${i}" class="${i==WPi?'on':''}" style="background:${w}"></button>`).join('')+'</div>';b.querySelectorAll('[data-i]').forEach(x=>x.onclick=()=>{WPi=+x.dataset.i;try{localStorage.wp=WPi}catch(e){}setg()})}
const tn=q=>{try{const cx=getCtx(),t=cx.currentTime;q.forEach(([f,a,d])=>{const o=cx.createOscillator(),g=cx.createGain();o.type='triangle';o.frequency.value=f;g.gain.setValueAtTime(0,t+a);g.gain.linearRampToValueAtTime(.25,t+a+.02);g.gain.setValueAtTime(.25,t+a+d-.04);g.gain.linearRampToValueAtTime(0,t+a+d);o.connect(g);g.connect(cx.destination);o.start(t+a);o.stop(t+a+d)})}catch(e){}};
const SMST=[[988,0,.18],[1319,.22,.18],[988,.5,.18],[1319,.72,.25]],CALLT=[0,1,2].flatMap(i=>[[523,i,.25],[659,i+.3,.25],[784,i+.6,.3]]);

const peers=()=>[...new Set(actors().filter(p=>p!==me&&p.name).map(p=>p.name))];
const list=(b,ns,ic,fn)=>{b.innerHTML='<div class="ls">'+(ns.length?ns.map(n=>`<button data-n="${esc(n)}"><b>${ic||''} ${esc(n)}</b><small>${esc((TH[n]||[]).slice(-1)[0]?.t||'Ketuk untuk membuka')}</small></button>`).join(''):'<p>Belum ada pemain lain.</p>')+'</div>';b.querySelectorAll('[data-n]').forEach(x=>x.onclick=()=>fn(x.dataset.n))};
function sms(n){if(!n){const on=[...new Set([...LBP.values(),...peers()])];list(shell('Pesan','#34c759'),on.length?on:[...new Set([...Object.keys(TH),...peers()])],'',sms);return}
 cur=n;const b=shell('‹ '+n,'#34c759');b.innerHTML='<div class="ms"></div><div class="mi"><input maxlength="80" placeholder="iMessage"><button>➤</button></div>';
 pa.querySelector('.ah').onclick=()=>sms();const ms=b.querySelector('.ms'),inp=b.querySelector('input');inp.onkeydown=e=>{e.stopPropagation();if(e.key=='Enter')go()};
 const rd=window.__smsRd=()=>{ms.innerHTML=(TH[n]||[]).map(m=>`<p class="${m.m?'me':'ot'}">${esc(m.t)}</p>`).join('');ms.scrollTop=1e9};rd();
 const go=()=>{const t=inp.value.trim();if(!t)return;inp.value='';(TH[n]=TH[n]||[]).push({m:1,t});rd();
  if(LB&&[...LBP.values()].includes(n))LB.send({type:'broadcast',event:'sms',payload:{to:n,from:pn,text:t,client:CLIENT_ID}});else if([...rem.values()].some(p=>p.name==n))broadcast('sms',{to:n,from:pn,text:t,client:CLIENT_ID});
  else setTimeout(()=>{(TH[n]=TH[n]||[]).push({m:0,t:botSay(BB[n]||(BB[n]={}))});cur==n&&!ph.hidden&&rd()},1200)};
 b.querySelector('.mi button').onclick=go}
window.__smsIn=p=>{if(!p||p.client===CLIENT_ID||p.to!==pn)return;const n=String(p.from||'Pemain').slice(0,14),t=String(p.text||'').slice(0,80);(TH[n]=TH[n]||[]).push({m:0,t});log('','💬 SMS dari '+n+': '+t,1);tn(SMST);cur==n&&!ph.hidden&&window.__smsRd&&window.__smsRd()};
// ---- Telepon lintas map (lobby global + WebRTC, mic +10dB) ----
let LB=null,LBP=new Map(),CALL=null,PC=null,CMIC=null,Q=Promise.resolve();const AU=new Audio();AU.autoplay=true;
function ensureLobby(){if(LB||!supabaseClient)return;LB=supabaseClient.channel('lobby',{config:{broadcast:{self:false,ack:false},presence:{key:CLIENT_ID}}});
 LB.on('presence',{event:'sync'},()=>{LBP.clear();Object.entries(LB.presenceState()).forEach(([k,l])=>{k!==CLIENT_ID&&l[0]&&LBP.set(k,String(l[0].n||'Pemain').slice(0,14))});TL&&tel()})
 .on('broadcast',{event:'sms'},({payload})=>window.__smsIn&&window.__smsIn(payload)).on('broadcast',{event:'call'},({payload:p})=>{if(p&&p.to===CLIENT_ID)Q=Q.then(()=>onCall(p)).catch(()=>{log('','Panggilan gagal (mikrofon/koneksi).',1);endCall()})}).subscribe(s=>{if(s=='SUBSCRIBED')LB.track({id:CLIENT_ID,n:pn})})}
function lbOff(){endCall();try{LB&&supabaseClient.removeChannel(LB)}catch(e){}LB=null;LBP.clear()}
const lbSend=(t,to,d)=>LB&&LB.send({type:'broadcast',event:'call',payload:{t,to,from:CLIENT_ID,n:pn,d}});
async function mkPc(init){const st=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true}}),cx=getCtx(),gn=cx.createGain(),ds=cx.createMediaStreamDestination();gn.gain.value=Math.pow(10,MIC_DB/20);cx.createMediaStreamSource(st).connect(gn);gn.connect(ds);CMIC=st;
 PC=new RTCPeerConnection(ICE);ds.stream.getTracks().forEach(t=>PC.addTrack(t,ds.stream));PC.ontrack=e=>{AU.srcObject=e.streams[0];AU.play().catch(()=>{})};PC.onicecandidate=e=>e.candidate&&lbSend('ice',CALL.id,e.candidate);
 if(init){const o=await PC.createOffer();await PC.setLocalDescription(o);lbSend('off',CALL.id,o)}}
async function onCall(p){const t=p.t;
 if(t=='ring'){if(CALL){lbSend('rej',p.from);return}CALL={id:p.from,n:p.n,s:'in'};ph.hidden&&openPh();callUI();log('','📞 '+p.n+' menelepon…',1);tn(CALLT);{const c=CALL;setTimeout(()=>CALL===c&&c.s=='in'&&endCall(1),10000)}return}
 if(!CALL||CALL.id!=p.from)return;
 if(t=='acc'){CALL.s='on';await mkPc(1);callUI()}else if(t=='rej'||t=='end')endCall(1);
 else if(t=='off'){await PC.setRemoteDescription(p.d);const a=await PC.createAnswer();await PC.setLocalDescription(a);lbSend('ans',CALL.id,a)}
 else if(t=='ans')await PC.setRemoteDescription(p.d);else if(t=='ice'&&PC)try{await PC.addIceCandidate(p.d)}catch(e){}}
function endCall(rm){if(!rm&&CALL)lbSend('end',CALL.id);try{PC&&PC.close()}catch(e){}PC=null;CMIC&&CMIC.getTracks().forEach(t=>t.stop());CMIC=null;AU.srcObject=null;clearInterval(CT);const u=CU;CALL=null;!ph.hidden&&u&&tel()}
function callUI(){const b=shell('Panggilan','#111'),c=CALL,s=c.s;CU=1;
 b.innerHTML=`<div class="cl"><h2>${esc(c.n)}</h2><p id="cs2">${s=='in'?'Panggilan masuk':s=='out'?'Memanggil…':'Terhubung 00:00'}</p><div>${s=='in'?'<button id="ca" class="cb" style="background:#34c759">✔</button>':''}<button id="ce" class="cb">✖</button></div></div>`;$('#ce').onclick=()=>endCall();
 if(s=='in')$('#ca').onclick=async()=>{try{CALL.s='on';await mkPc(0);lbSend('acc',CALL.id);callUI()}catch(e){log('','Mikrofon tidak bisa diakses.',1);endCall()}};
 if(s=='on'){let t=0;clearInterval(CT);CT=setInterval(()=>{t++;const p=$('#cs2');p&&(p.textContent='Terhubung '+String(t/60|0).padStart(2,'0')+':'+String(t%60).padStart(2,'0'))},1000)}}
function tel(){if(CALL){callUI();return}const b=shell('Telepon','#2ecc71');TL=1;const ns=[...LBP];
 b.innerHTML='<div class="ls">'+(ns.length?ns.map(([k,n])=>`<button data-k="${esc(k)}" data-n="${esc(n)}"><b>📞 ${esc(n)}</b><small>Online · bisa beda map</small></button>`).join(''):'<p>Tidak ada pemain online.</p>')+'</div>';
 b.querySelectorAll('[data-k]').forEach(x=>x.onclick=()=>{const c=CALL={id:x.dataset.k,n:x.dataset.n,s:'out'};lbSend('ring',c.id);callUI();setTimeout(()=>CALL===c&&c.s=='out'&&endCall(),10000)})}
// ---- Al-Qur'an (equran.id, perlu internet) ----
const QC={};
async function qr(n){const b=shell("Al-Qur'an",'#0b7a5b'),J=u=>fetch(u).then(x=>x.json());b.innerHTML='<div class="ls"><p>Memuat…</p></div>';if(n)pa.querySelector('.ah').onclick=()=>qr();
 try{if(!n){const d=QC.l||(QC.l=(await J('https://equran.id/api/v2/surat')).data);b.innerHTML='<div class="ls">'+d.map(s=>`<button data-n="${s.nomor}"><b>${s.nomor}. ${esc(s.namaLatin)} <span class="ar">${s.nama}</span></b><small>${esc(s.arti)} · ${s.jumlahAyat} ayat</small></button>`).join('')+'</div>';b.querySelectorAll('[data-n]').forEach(x=>x.onclick=()=>qr(+x.dataset.n));return}
  const d=QC[n]||(QC[n]=(await J('https://equran.id/api/v2/surat/'+n)).data);pa.querySelector('.ah').textContent='‹ '+d.namaLatin;
  b.innerHTML=d.ayat.map(a=>`<div class="qa"><div class="ar">${a.teksArab} ﴿${a.nomorAyat}﴾</div><div class="lt">${esc(a.teksLatin)}</div><div class="tr">${esc(a.teksIndonesia)}</div></div>`).join('')}
 catch(e){b.innerHTML='<div class="ls"><p>Butuh internet untuk memuat Al-Qur\'an.</p></div>'}}
// ---- Kamus Jepang-Indonesia (offline) ----
const D='私|わたし|watashi|saya;あなた|あなた|anata|kamu;友達|ともだち|tomodachi|teman;先生|せんせい|sensei|guru;学生|がくせい|gakusei|pelajar;学校|がっこう|gakkou|sekolah;本|ほん|hon|buku;水|みず|mizu|air;食べる|たべる|taberu|makan;飲む|のむ|nomu|minum;行く|いく|iku|pergi;来る|くる|kuru|datang;見る|みる|miru|melihat;聞く|きく|kiku|mendengar, bertanya;話す|はなす|hanasu|berbicara;読む|よむ|yomu|membaca;書く|かく|kaku|menulis;買う|かう|kau|membeli;好き|すき|suki|suka;大きい|おおきい|ookii|besar;小さい|ちいさい|chiisai|kecil;新しい|あたらしい|atarashii|baru;古い|ふるい|furui|lama (benda);高い|たかい|takai|tinggi, mahal;安い|やすい|yasui|murah;美味しい|おいしい|oishii|enak;楽しい|たのしい|tanoshii|menyenangkan;今日|きょう|kyou|hari ini;明日|あした|ashita|besok;昨日|きのう|kinou|kemarin;時間|じかん|jikan|waktu;日本|にほん|nihon|Jepang;人|ひと|hito|orang;家|いえ|ie|rumah;車|くるま|kuruma|mobil;電話|でんわ|denwa|telepon;猫|ねこ|neko|kucing;犬|いぬ|inu|anjing;ありがとう|ありがとう|arigatou|terima kasih;すみません|すみません|sumimasen|permisi, maaf;おはよう|おはよう|ohayou|selamat pagi;こんにちは|こんにちは|konnichiwa|selamat siang;こんばんは|こんばんは|konbanwa|selamat malam;さようなら|さようなら|sayounara|selamat tinggal;はい|はい|hai|ya;いいえ|いいえ|iie|tidak;愛|あい|ai|cinta;山|やま|yama|gunung;海|うみ|umi|laut;空|そら|sora|langit;花|はな|hana|bunga;天気|てんき|tenki|cuaca'.split(';').map(x=>x.split('|'));
function kms(){const b=shell('Kamus Jepang','#d4203f');b.innerHTML='<div class="mi"><input placeholder="Cari kanji / kana / romaji / Indonesia"></div><p class="nt">Offline · tanpa kuota · '+D.length+' kata</p><div class="ls"></div>';const i=b.querySelector('input'),l=b.querySelector('.ls');
 const f=()=>{const q=i.value.trim().toLowerCase(),m=D.filter(w=>!q||w.some(s=>s.toLowerCase().includes(q))).slice(0,60);l.innerHTML=m.length?m.map(w=>`<div class="kw"><span class="kj">${w[0]}</span><div><b>${w[1]}</b> <small>${w[2]}</small><br>${esc(w[3])}</div></div>`).join(''):'<p>Tidak ditemukan.</p>'};i.oninput=f;i.onkeydown=e=>e.stopPropagation();f()}
function game(mk,nm){const b=shell(nm,'#222');b.innerHTML='<canvas width="282" height="420"></canvas><div class="pd"><button data-k="u" style="grid-area:1/2">▲</button><button data-k="l" style="grid-area:2/1">◀</button><button data-k="d" style="grid-area:2/2">▼</button><button data-k="r" style="grid-area:2/3">▶</button></div>';
 const c=b.querySelector('canvas'),x=c.getContext('2d');x.imageSmoothingEnabled=false;Object.keys(KP).forEach(k=>KP[k]=0);const o=mk(x);GM=o;let lt=performance.now();
 c.onpointerdown=()=>o.p('t');b.querySelectorAll('[data-k]').forEach(el=>{const k=el.dataset.k;el.onpointerdown=e=>{e.preventDefault();KP[k]=1;o.p(k)};el.onpointerup=el.onpointerleave=el.onpointercancel=()=>KP[k]=0});
 const lp=t=>{if(GM!==o)return;const dt=Math.min(.04,(t-lt)/1e3);lt=t;o.u(dt);o.d();raf=requestAnimationFrame(lp)};raf=requestAnimationFrame(lp)}
addEventListener('keydown',e=>{if(ph.hidden)return;if(e.key=='Escape'){closePh();e.stopImmediatePropagation();return}if(e.target.tagName=='INPUT')return;e.stopImmediatePropagation();const k=KM[e.key]||KM[e.key.toLowerCase()];if(k&&GM){e.preventDefault();KP[k]=1;e.repeat||GM.p(k)}},true);
addEventListener('keyup',e=>{const k=KM[e.key]||KM[e.key.toLowerCase()];k&&(KP[k]=0)},true);
const ovr=(x,m)=>{x.fillStyle='#000a';x.fillRect(0,0,GW,GH);x.textAlign='center';x.fillStyle='#fff';x.font='bold 24px sans-serif';x.fillText(m,GW/2,GH/2);x.font='13px sans-serif';x.fillText('Ketuk / tekan tombol untuk ulang',GW/2,GH/2+26);x.textAlign='left'};
const txt=(x,s)=>{x.fillStyle='#fff';x.font='bold 14px sans-serif';x.textAlign='left';x.fillText(s,8,18)};
// --- Snake (hutan) ---
const snake=x=>{const C=20,W=14,H=21;let s,d,nd,f,sc,t,ov;const rs=()=>{s=[[7,10],[6,10],[5,10]];d=nd=[1,0];f=[3,5];sc=0;t=0;ov=0};rs();
 return{p(k){if(ov){rs();return}const v={l:[-1,0],r:[1,0],u:[0,-1],d:[0,1]}[k];if(v&&(v[0]+d[0]||v[1]+d[1]))nd=v},
 u(dt){if(ov)return;t+=dt;if(t<.12)return;t=0;d=nd;const h=[s[0][0]+d[0],s[0][1]+d[1]];if(h[0]<0||h[1]<0||h[0]>=W||h[1]>=H||s.some(c=>c[0]==h[0]&&c[1]==h[1])){ov=1;return}s.unshift(h);if(h[0]==f[0]&&h[1]==f[1]){sc++;do f=[r(W),r(H)];while(s.some(c=>c[0]==f[0]&&c[1]==f[1]))}else s.pop()},
 d(){for(let i=0;i<W;i++)for(let j=0;j<H;j++){x.fillStyle=(i+j)%2?'#3a7d32':'#357530';x.fillRect(i*C,j*C,C,C)}
  const fx=f[0]*C+10,fy=f[1]*C+10;x.fillStyle='#e53935';x.beginPath();x.arc(fx,fy+1,7,0,7);x.fill();x.fillStyle='#8d6e63';x.fillRect(fx-1,fy-8,2,4);x.fillStyle='#7cb342';x.fillRect(fx+1,fy-8,5,3);
  const n=s.length,P=k=>[s[k][0]*C+10,s[k][1]*C+10],R=k=>k?Math.max(1.5,8.5*Math.min(1,(n-k)/6)):10;x.lineCap='round';
  for(let k=n-1;k>0;k--){const a=P(k),b=P(k-1);x.strokeStyle=k%2?'#43a047':'#2e9a3f';x.lineWidth=R(k)+R(k-1);x.beginPath();x.moveTo(a[0],a[1]);x.lineTo(b[0],b[1]);x.stroke()}
  const h=P(0),pp=[-d[1],d[0]];x.strokeStyle='#e53935';x.lineWidth=2;x.beginPath();x.moveTo(h[0]+d[0]*10,h[1]+d[1]*10);x.lineTo(h[0]+d[0]*17,h[1]+d[1]*17);x.stroke();
  x.fillStyle='#66bb6a';x.beginPath();x.arc(h[0],h[1],10,0,7);x.fill();
  [-1,1].forEach(q=>{const ex=h[0]+d[0]*3+pp[0]*5*q,ey=h[1]+d[1]*3+pp[1]*5*q;x.fillStyle='#fff';x.beginPath();x.arc(ex,ey,3.2,0,7);x.fill();x.fillStyle='#111';x.beginPath();x.arc(ex+d[0],ey+d[1],1.6,0,7);x.fill()});
  x.fillStyle='#fff';x.font='bold 14px sans-serif';x.shadowColor='#000';x.shadowBlur=3;x.fillText('Skor '+sc,8,18);x.shadowBlur=0;ov&&ovr(x,'Game Over')}}};
// --- Ace Combat (F-16) ---
const jet=(x,px,py,c,k,cn,fl,fire)=>{x.save();x.translate(px,py);if(fl)x.scale(-1,1);
 if(fire){x.fillStyle='#ff9d2e';x.beginPath();x.moveTo(-21,0);x.lineTo(-30-Math.random()*5,-1.5);x.lineTo(-30-Math.random()*5,1.5);x.fill()}
 x.fillStyle=k;x.beginPath();x.moveTo(-19,-1);x.lineTo(-23,-12);x.lineTo(-14,-12);x.lineTo(-8,-4);x.fill();x.beginPath();x.moveTo(-19,2);x.lineTo(-26,6);x.lineTo(-15,5);x.fill();
 x.fillStyle=c;x.beginPath();x.moveTo(-21,0);x.lineTo(-9,-4.5);x.lineTo(10,-4.5);x.lineTo(23,0);x.lineTo(10,3.5);x.lineTo(-9,4);x.closePath();x.fill();
 x.fillStyle=k;x.beginPath();x.moveTo(-3,3);x.lineTo(-15,11);x.lineTo(-8,11);x.lineTo(7,3);x.fill();x.fillRect(1,3,9,3);
 x.fillStyle=cn;x.beginPath();x.ellipse(6,-4.5,5.5,3,0,0,7);x.fill();x.restore()};
const plat=x=>{let p,b,e,t,sc,lv,ov,sh,th,nx;const AT=[['#8fd3f0','#eaf9ff','#cfeaf7','#a8d8ee','#f4fbff'],['#f6d28b','#fff0cc','#e0b36a','#c99a4e','#a87c3a'],['#8a8f99','#cfd3da','#6d7075','#55585d','#3a3c40']];const rs=()=>{p={x:40,y:200};b=[];e=[];t=0;sc=0;lv=3;ov=0;sh=0;th=r(3);nx=10};rs();
 const mt=(off,h,per,col)=>{x.fillStyle=col;x.beginPath();x.moveTo(0,GH);for(let i=0;i<=GW;i+=6)x.lineTo(i,GH-h*(.3+.7*(1-Math.abs(Math.sin((i+off)/per)))));x.lineTo(GW,GH);x.fill()};
 return{p(){ov&&rs()},
 u(dt){if(ov)return;t+=dt;sh-=dt;p.x=Math.max(24,Math.min(GW-30,p.x+(KP.r-KP.l)*170*dt));p.y=Math.max(14,Math.min(GH-14,p.y+(KP.d-KP.u)*170*dt));
  if(sh<=0){sh=.22;b.push({x:p.x+22,y:p.y})}if(r(1000)<18+Math.min(t,60)/2)e.push({x:GW+26,y:20+r(GH-40),a:r(6),v:60+r(50)+t});
  b.forEach(q=>q.x+=330*dt);e.forEach(q=>{q.x-=q.v*dt;q.y+=Math.sin(t*3+q.a)*50*dt});b=b.filter(q=>q.x<GW);
  e=e.filter(q=>{if(b.some(u=>{const h=Math.abs(u.x-q.x)<18&&Math.abs(u.y-q.y)<13;if(h)u.x=9e9;return h})){sc++;return 0}if(Math.abs(q.x-p.x)<30&&Math.abs(q.y-p.y)<14){lv--;return 0}return q.x>-30});if(sc>=nx){nx+=10;th=(th+1+r(2))%3}if(lv<=0)ov=1},
 d(){const g=x.createLinearGradient(0,0,0,GH);g.addColorStop(0,AT[th][0]);g.addColorStop(1,AT[th][1]);x.fillStyle=g;x.fillRect(0,0,GW,GH);mt(t*20,240,70,AT[th][2]);mt(t*45+90,170,50,AT[th][3]);mt(t*90,100,35,AT[th][4]);
  x.fillStyle='#ffd54f';b.forEach(q=>x.fillRect(q.x,q.y-1.5,12,3));e.forEach(q=>jet(x,q.x,q.y,'#4a525c','#2b2f36','#5a2a2a',1,0));jet(x,p.x,p.y,'#aab6c4','#6b7785','#4fc3f7',0,1);
  x.fillStyle='#fff';x.font='bold 14px sans-serif';x.shadowColor='#000';x.shadowBlur=3;x.fillText('Skor '+sc+'   ♥'.repeat(Math.max(lv,0)),8,18);x.shadowBlur=0;ov&&ovr(x,'Game Over')}}};
// --- Crossy Road (karakter = karakter pemain) ---
const crossy=x=>{const CS=40,OX=1,sp=(()=>{draw(me.cfg,{dy:0,blink:0,ph:0,am:0},2);const c=document.createElement('canvas');c.width=28;c.height=36;c.getContext('2d').drawImage(lo,0,0);return c})();let L,P,sc,ov,cam;
 const gen=i=>{if(L[i])return;const k=i<2?0:[0,1,1,2,2,0][r(6)],o={k,tr:[],it:[],v:(r(2)?1:-1)*(40+r(60))};
  if(k==0){for(let c=0;c<7;c++)if(i>1&&r(5)==0)o.tr.push(c)}else if(k==1){for(let j=0;j<3;j++)o.it.push({x:j*100+r(40),w:36+r(20),c:['#e53935','#1e88e5','#fdd835','#8e24aa'][r(4)]})}
  else{o.v*=.7;for(let j=0;j<3;j++)o.it.push({x:j*110+r(30),w:70+r(30)})}L[i]=o};
 const rs=()=>{L={};for(let i=0;i<20;i++)gen(i);P={x:OX+3*CS+20,r:0,y:0};sc=0;ov=0;cam=0};rs();
 return{p(k){if(ov){rs();return}if(k=='t')k='u';const dx=k=='l'?-1:k=='r'?1:0,dy=k=='u'?1:k=='d'?-1:0;if(!dx&&!dy)return;if(Math.abs(P.y-P.r)>.4)return;
  let nx=P.x,nr=P.r+dy;if(dx||L[P.r].k!=2)nx=OX+Math.round((P.x-OX-20)/CS)*CS+20;nx+=dx*CS;if(nx<OX+14||nx>OX+7*CS-14||nr<Math.floor(cam))return;gen(nr+12);
  if(L[nr].k==0&&L[nr].tr.includes(Math.floor((nx-OX)/CS)))return;P.x=nx;P.r=nr;sc=Math.max(sc,nr)},
 u(dt){if(ov)return;for(const i in L){const o=L[i];o.it.forEach(q=>{q.x+=o.v*dt;if(o.v>0&&q.x>GW+20)q.x=-q.w-20;if(o.v<0&&q.x<-q.w-20)q.x=GW+20})}
  P.y+=(P.r-P.y)*Math.min(1,dt*18);cam+=(Math.max(cam,P.r-3)-cam)*Math.min(1,dt*5);const o=L[P.r];
  if(Math.abs(P.y-P.r)<.25){if(o.k==1&&o.it.some(q=>P.x>q.x-6&&P.x<q.x+q.w+6))ov=1;if(o.k==2){const g=o.it.find(q=>P.x>q.x&&P.x<q.x+q.w);if(g)P.x+=o.v*dt;else ov=1;if(P.x<0||P.x>GW)ov=1}}
  if(P.r<cam-1)ov=1},
 d(){const top=i=>GH-(i-cam+1)*CS;x.fillStyle='#7ed957';x.fillRect(0,0,GW,GH);
  for(let i=Math.floor(cam)-1;i<cam+12;i++){const o=L[i];if(!o)continue;const y=top(i);x.fillStyle=o.k==1?'#4a4a52':o.k==2?'#3aa0ff':i%2?'#6fcb4a':'#7ed957';x.fillRect(0,y,GW,CS);
   if(o.k==1){x.fillStyle='#ffffff55';for(let j=0;j<GW;j+=30)x.fillRect(j,y+CS/2-1,16,2)}
   o.tr.forEach(c=>{x.fillStyle='#6d4c2f';x.fillRect(OX+c*CS+16,y+22,8,14);x.fillStyle='#2e7d32';x.fillRect(OX+c*CS+6,y+2,28,24);x.fillStyle='#1b5e2088';x.fillRect(OX+c*CS+22,y+2,12,24);x.fillStyle='#66bb6a';x.fillRect(OX+c*CS+6,y+2,28,6)});
   o.it.forEach(q=>{if(o.k==1){x.fillStyle=q.c;x.fillRect(q.x,y+8,q.w,24);x.fillStyle='#0004';x.fillRect(q.x,y+26,q.w,6);x.fillStyle='#fff6';x.fillRect(q.x,y+8,q.w,4);x.fillStyle='#222';x.fillRect(q.x+4,y+30,8,5);x.fillRect(q.x+q.w-12,y+30,8,5);x.fillStyle='#cfe8ff';x.fillRect(q.x+(o.v>0?q.w-14:4),y+11,10,8)}else{x.fillStyle='#8d6e63';x.fillRect(q.x,y+6,q.w,28);x.fillStyle='#a1887f';x.fillRect(q.x,y+6,q.w,6)}})}
  const y=top(P.y);x.fillStyle='#0003';x.fillRect(P.x-12,y+CS-8,24,5);x.drawImage(sp,P.x-17,y-8,34,43);txt(x,'Skor '+sc);ov&&ovr(x,'Game Over')}}};
// --- Bounce ---
const bounce=x=>{const WL=2400,PL=[[0,330,300,100],[360,330,200,100],[620,280,140,150],[820,330,260,100],[1140,250,120,20],[1320,300,160,20],[1540,330,300,100],[1900,300,100,130],[2060,330,340,100]],SP=[[450,330],[950,330],[1700,330],[2200,330]],RG0=[[120,250],[250,230],[480,220],[690,200],[900,250],[1200,180],[1400,220],[1650,240],[1950,220],[2150,250]];let b,cx,ov,sc,RG;
 const rs=()=>{b={x:40,y:200,vx:0,vy:0};cx=0;sc=0;ov=0;RG=RG0.map(q=>q.slice())};rs();
 return{p(){ov&&rs()},
 u(dt){if(ov)return;b.vx=Math.max(-170,Math.min(170,b.vx+(KP.r-KP.l)*700*dt))*Math.pow(.2,dt);b.vy+=900*dt;b.x+=b.vx*dt;
  PL.forEach(q=>{if(b.x+11>q[0]&&b.x-11<q[0]+q[2]&&b.y+9>q[1]&&b.y-9<q[1]+q[3]){b.x=b.vx>0?q[0]-11:q[0]+q[2]+11;b.vx=0}});
  b.y+=b.vy*dt;PL.forEach(q=>{if(b.x+10>q[0]&&b.x-10<q[0]+q[2]&&b.y+11>q[1]&&b.y-11<q[1]+q[3]){if(b.vy>0){b.y=q[1]-11;b.vy=-(KP.u?560:380)}else{b.y=q[1]+q[3]+11;b.vy=0}}});
  if(b.x<11)b.x=11;if(b.y>GH+40||SP.some(s=>Math.abs(b.x-s[0])<14&&b.y+11>s[1]-14&&b.y<s[1]+10))ov=1;
  RG=RG.filter(q=>{const h=Math.abs(b.x-q[0])<18&&Math.abs(b.y-q[1])<22;h&&sc++;return!h});if(b.x>WL)ov=2;cx=Math.max(0,Math.min(WL-GW+60,b.x-100))},
 d(){x.fillStyle='#8ecbff';x.fillRect(0,0,GW,GH);x.save();x.translate(-cx,0);
  PL.forEach(q=>{x.fillStyle='#c0392b';x.fillRect(q[0],q[1],q[2],q[3]);x.fillStyle='#e8645a';x.fillRect(q[0],q[1],q[2],5);x.fillStyle='#0002';for(let j=q[0];j<q[0]+q[2];j+=20)x.fillRect(j,q[1]+5,1,q[3])});
  x.fillStyle='#90a4ae';SP.forEach(s=>{x.beginPath();x.moveTo(s[0]-12,s[1]);x.lineTo(s[0],s[1]-18);x.lineTo(s[0]+12,s[1]);x.fill()});
  x.strokeStyle='#ffc107';x.lineWidth=4;RG.forEach(q=>{x.beginPath();x.ellipse(q[0],q[1],7,14,0,0,7);x.stroke()});
  x.fillStyle='#e53935';x.beginPath();x.arc(b.x,b.y,11,0,7);x.fill();x.fillStyle='#ff8a80';x.beginPath();x.arc(b.x-3,b.y-4,4,0,7);x.fill();x.restore();
  txt(x,'Cincin '+sc+'/'+RG0.length);ov&&ovr(x,ov==2?'Menang! 🎉':'Game Over')}}};

function fol(){if(me.pz&&(me.sp>25||G.hidden))me.pz=null;if(!WV||(wh.hidden&&emp.hidden&&pp.hidden))return;const{s,sy,cx,cy,w,h}=WV,X=w/2+(me.x-cx)*s,Y=h/2+(me.y-44-cy)*s*sy;
 if(!wh.hidden){wh.style.left=Math.max(110,Math.min(w-110,X))+'px';wh.style.top=Math.max(120,Math.min(h-80,Y))+'px'}
 if(!emp.hidden){emp.style.left=Math.max(130,Math.min(w-130,X))+'px';emp.style.top=Math.max(130,Math.min(h-130,Y))+'px'}
 if(!pp.hidden){pp.style.left=Math.max(120,Math.min(w-120,X))+'px';pp.style.top=Math.max(120,Math.min(h-120,Y))+'px'}}
D.push(...'会社|かいしゃ|kaisha|perusahaan;仕事|しごと|shigoto|pekerjaan;病院|びょういん|byouin|rumah sakit;駅|えき|eki|stasiun;電車|でんしゃ|densha|kereta listrik;空港|くうこう|kuukou|bandara;銀行|ぎんこう|ginkou|bank;図書館|としょかん|toshokan|perpustakaan;質問|しつもん|shitsumon|pertanyaan;宿題|しゅくだい|shukudai|PR;試験|しけん|shiken|ujian;旅行|りょこう|ryokou|perjalanan;準備|じゅんび|junbi|persiapan;約束|やくそく|yakusoku|janji;紹介|しょうかい|shoukai|perkenalan;説明|せつめい|setsumei|penjelasan;連絡|れんらく|renraku|kontak;予定|よてい|yotei|rencana;経験|けいけん|keiken|pengalaman;意見|いけん|iken|pendapat;理由|りゆう|riyuu|alasan;場合|ばあい|baai|kasus, jika;方法|ほうほう|houhou|cara;習慣|しゅうかん|shuukan|kebiasaan;文化|ぶんか|bunka|budaya;社会|しゃかい|shakai|masyarakat;地震|じしん|jishin|gempa;景色|けしき|keshiki|pemandangan;思う|おもう|omou|berpikir;考える|かんがえる|kangaeru|memikirkan;教える|おしえる|oshieru|mengajar;覚える|おぼえる|oboeru|mengingat;忘れる|わすれる|wasureru|lupa;探す|さがす|sagasu|mencari;集める|あつめる|atsumeru|mengumpulkan;決める|きめる|kimeru|memutuskan;続ける|つづける|tsuzukeru|melanjutkan;始める|はじめる|hajimeru|memulai;終わる|おわる|owaru|selesai;間に合う|まにあう|maniau|sempat;乗る|のる|noru|naik;降りる|おりる|oriru|turun;届ける|とどける|todokeru|mengantarkan;直す|なおす|naosu|memperbaiki;壊れる|こわれる|kowareru|rusak;変わる|かわる|kawaru|berubah;遅れる|おくれる|okureru|terlambat;急ぐ|いそぐ|isogu|bergegas;眠い|ねむい|nemui|mengantuk;忙しい|いそがしい|isogashii|sibuk;寂しい|さびしい|sabishii|kesepian;厳しい|きびしい|kibishii|ketat;優しい|やさしい|yasashii|baik hati;丁寧|ていねい|teinei|sopan;大切|たいせつ|taisetsu|penting;大変|たいへん|taihen|repot, parah;簡単|かんたん|kantan|mudah;複雑|ふくざつ|fukuzatsu|rumit;必要|ひつよう|hitsuyou|perlu;無理|むり|muri|mustahil;特別|とくべつ|tokubetsu|spesial;例えば|たとえば|tatoeba|misalnya;全部|ぜんぶ|zenbu|semua;最近|さいきん|saikin|akhir-akhir ini;突然|とつぜん|totsuzen|tiba-tiba;必ず|かならず|kanarazu|pasti;相談|そうだん|soudan|berkonsultasi;参加|さんか|sanka|ikut serta'.split(';').map(x=>x.split('|')));
// ---- Adzan di map mushola (perkiraan Jabodetabek) ----
const PRT=[['Subuh',4,35],['Dzuhur',11,55],['Ashar',15,10],['Maghrib',18,0],['Isya',19,10]];let PRD='',PRB='';
function adzan(){try{const cx=getCtx(),t=cx.currentTime,g=cx.createGain(),o=cx.createOscillator(),f=cx.createBiquadFilter(),l=cx.createOscillator(),lg=cx.createGain();o.type='sawtooth';f.type='lowpass';f.frequency.value=1100;l.frequency.value=5.5;lg.gain.value=7;l.connect(lg);lg.connect(o.frequency);o.connect(f);f.connect(g);g.connect(cx.destination);
 g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.22,t+.3);g.gain.setValueAtTime(.22,t+4.5);g.gain.linearRampToValueAtTime(0,t+5);let a=t;[[392,.7],[440,.5],[392,.3],[349,.3],[392,.9],[440,.5],[466,.6],[440,.4],[392,.8]].forEach(([q,d])=>{o.frequency.setTargetAtTime(q,a,.04);a+=d});o.start(t);l.start(t);o.stop(t+5);l.stop(t+5)}catch(e){}}
setInterval(()=>{if(G.hidden)return;const d=new Date(),m=d.getHours()*60+d.getMinutes(),M=MP.findIndex(x=>/mushola|musholla/i.test(x.n));if(mi!=M){PRB='';return}
 const p=PRT.find(p=>m>=p[1]*60+p[2]&&m<p[1]*60+p[2]+10);if(!p)return;const k=d.toDateString()+p[0];
 if(PRB!=k){PRB=k;BGM.stop();if(PRD!=k){PRD=k;adzan();log('','🕌 Waktu '+p[0]+' — adzan berkumandang',1)}}},1000);

// ---- POSE ----
const pp=document.createElement('div');pp.id='pp';pp.hidden=true;G.append(pp);
[['🙆','Regangkan badan'],['🕌','Sholat'],['💃','Menari'],['🧘','Duduk sila'],['😴','Tidur'],['🤳','Selfie']].forEach((q,i)=>{const b=document.createElement('button'),a=-Math.PI/2+i*Math.PI/3;b.className='gb';b.textContent=q[0];b.title=q[1];b.style.transform=`translate(${Math.cos(a)*95}px,${Math.sin(a)*95}px)`;b.onclick=()=>{me.pz={i:10+i,t0:performance.now()};pp.hidden=true;log('','Pose: '+q[1]+' (bergerak untuk berhenti)',1)};pp.append(b)});
function openPose(){pp.hidden=false}
XEYE[10]=XEYE[11]=XEYE[12]=XEYE[13]=XEYE[15]='happy';XMO[10]='oh';XMO[11]=0;XMO[12]='grin';XMO[13]='smile';XMO[14]='oh';XMO[15]='grin';XEYE[14]='happy';

// ---- NPC mood, ucapan sesuai emote, SFX emote, zzz, ikon ponsel ----
const MD={senang:{e:['😀','😂','🎉','👍'],s:['Hari ini seru banget!','Aku lagi happy nih~','Ayo main bareng, seru lho!','Senangnya bisa ketemu kalian!','Cuacanya enak banget ya!','Rasanya pengen joget!']},
sedih:{e:['😭'],s:['Hari ini rasanya berat...','Aku lagi sedih nih...','Kangen rumah...','Kok sepi ya...','Pengen cerita tapi bingung...','Semoga besok lebih baik.']},
marah:{e:['😡'],s:['Ih, kesel banget deh!','Jangan ganggu aku dulu!','Siapa yang nyenggol tadi?!','Sabar... sabar... tapi tetap kesel!','Hari ini nyebelin banget!','Aku lagi bad mood!']},
cinta:{e:['😍','❤️'],s:['Duh, hatiku berbunga-bunga~','Hari ini rasanya indah banget!','Ada yang lagi jatuh cinta nih...','Dunia terasa manis hari ini!','Aku suka suasana di sini 💕','Pipiku jadi merah, nih!']},
santai:{e:['😎','👋'],s:['Santai aja, nikmati harinya.','Duduk dulu, minum teh yuk.','Hidup itu dibawa slow aja.','Enaknya jalan-jalan sore.','Tenang, semua bakal baik-baik aja.','Angin di sini adem banget.']}};
const EL={'😀':['Hehe, senangnya!','Aku lagi ceria nih!'],'😂':['Wkwkwk lucu banget!','Hahaha ngakak parah!'],'😍':['Waaah gemes banget~','Aku suka banget ini!'],'😎':['Keren kan aku?','Santai tapi stylish.'],'😭':['Huhuhu sedih banget...','Hiks hiks, aku nggak kuat...'],'😡':['Grrr! Kesel banget!','Jangan bikin aku marah!'],'👍':['Mantap, setuju banget!','Oke, sip!'],'👋':['Halo semuanya!','Hai hai, apa kabar?'],'❤':['Aku sayang kalian semua!','Love you all!'],'🎉':['Yeay! Ayo rayakan!','Pesta dimulai!']};
const MK=Object.keys(MD),BB={},nz=e=>String(e).replace(/\uFE0F/g,'');
const pick=(b,a)=>{const h=b.h||(b.h=[]);let c=a.filter(x=>!h.includes(x));if(!c.length){h.length=0;c=a}const x=c[r(c.length)];h.push(x);if(h.length>14)h.shift();return x};
function botSay(b){return pick(b,MD[b.md||(b.md=MK[r(MK.length)])].s)}
function botTick(b,dt){if(!b.mt||now>b.mt){b.md=MK[r(MK.length)];b.mt=now+20000+r(20000)}const m=MD[b.md];
 if(Math.random()<dt*.02)say(b,pick(b,m.s));if(Math.random()<dt*.03){const e=m.e[r(m.e.length)];emote(b,e);say(b,pick(b,EL[nz(e)]))}}
const SF={'😀':['sine',[[523,0,.1],[659,.1,.1],[784,.2,.16]]],'😂':['square',[[700,0,.07],[600,.1,.07],[700,.2,.07],[600,.3,.07],[700,.4,.07],[560,.5,.12]]],'😍':['sine',[[659,0,.2],[880,.18,.3]]],'😎':['sawtooth',[[196,0,.12],[247,.12,.1],[392,.3,.25]]],'😭':['sine',[[660,0,.25],[600,.25,.25],[540,.5,.25],[470,.75,.35]]],'😡':['sawtooth',[[110,0,.25],[98,.25,.3]]],'👍':['triangle',[[784,0,.08],[1047,.1,.18]]],'👋':['triangle',[[880,0,.12],[988,.16,.18]]],'❤':['sine',[[130,0,.14],[110,.22,.18]]],'🎉':['triangle',[[523,0,.09],[659,.09,.09],[784,.18,.09],[1047,.27,.3]]]};
window.__sfx=(e,p)=>{const s=SF[nz(e)];if(!s||G.hidden)return;const d=p===me?0:Math.hypot(p.x-me.x,p.y-me.y),v=Math.max(0,1-d/520);if(v<.05)return;
 try{const cx=getCtx(),t=cx.currentTime;s[1].forEach(([f,a,du])=>{const o=cx.createOscillator(),g2=cx.createGain();o.type=s[0];o.frequency.value=f;
  if(e=='😭'||e=='😍'){const l=cx.createOscillator(),lg=cx.createGain();l.frequency.value=6;lg.gain.value=8;l.connect(lg);lg.connect(o.frequency);l.start(t+a);l.stop(t+a+du)}
  g2.gain.setValueAtTime(0,t+a);g2.gain.linearRampToValueAtTime(.2*v,t+a+.015);g2.gain.linearRampToValueAtTime(0,t+a+du);o.connect(g2);g2.connect(cx.destination);o.start(t+a);o.stop(t+a+du+.02)})}catch(x){}};
const zzz=(p,T)=>{g.save();g.textAlign='center';g.textBaseline='middle';for(let i=0;i<3;i++){const q=(T/1600+i/3)%1;g.globalAlpha=Math.sin(q*Math.PI);g.font='bold '+Math.round(11+q*14)+'px sans-serif';g.lineWidth=3;g.strokeStyle='#0008';g.fillStyle='#fff';const X=p.x-68+q*24,Y=p.y-16-q*44,c=i%2?'z':'Z';g.strokeText(c,X,Y);g.fillText(c,X,Y)}g.restore()};
const phIcon=(x,z)=>{x.save();x.scale(z/24,z/24);x.translate(-12,-12);x.fillStyle='#1c1c22';x.beginPath();x.roundRect(6,1.5,12,21,3.2);x.fill();const gr=x.createLinearGradient(7,3,17,21);gr.addColorStop(0,'#ff6ec4');gr.addColorStop(1,'#4f8cff');x.fillStyle=gr;x.beginPath();x.roundRect(7.2,2.7,9.6,18.6,2.4);x.fill();x.fillStyle='#000';x.beginPath();x.roundRect(10,3.6,4,1.5,.75);x.fill();[[10,10,'#ffe14d'],[14,10,'#5be37d'],[10,14,'#fff'],[14,14,'#ff5a5a']].forEach(([a,b,c])=>{x.fillStyle=c;x.beginPath();x.arc(a,b,1.6,0,7);x.fill()});x.restore()};

(function lp(t){requestAnimationFrame(lp);if(G.hidden){last=0;return}now=t;const dt=Math.min(.05,(t-(last||t))/1e3);last=t;update(dt);render(t);fol()})(0);
})();
