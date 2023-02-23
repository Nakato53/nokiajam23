var H=Object.defineProperty;var T=(n,t,e)=>t in n?H(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var s=(n,t,e)=>(T(n,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const w=84,x=48,f=4;function _(n){return JSON.parse(JSON.stringify(n))}class I{constructor(){s(this,"_keys");this._keys=[]}keydownEventHandler(t){this._keys[t.keyCode]=!0}keyupEventHandler(t){this._keys[t.keyCode]=!1}bindEvents(){document.body.addEventListener("keydown",this.keydownEventHandler.bind(this)),document.body.addEventListener("keyup",this.keyupEventHandler.bind(this))}getState(){const t=new A;return t.setKeys(_(this._keys)),t}}class A{constructor(){s(this,"keys",[])}setKeys(t){this.keys=t}}const v=new I;class R{constructor(){s(this,"_x");s(this,"_y");s(this,"_buttons");this._x=0,this._y=0,this._buttons=[!1,!1,!1]}pressEventHandler(t){this._buttons[t.button]=!0}releaseEventHandler(t){this._buttons[t.button]=!1}moveEventHandler(t){t.target&&(this._x=t.offsetX/f,this._y=t.offsetY/f)}cancelEventHandler(){}getState(){const t=new Y;return t.x=_(this._x),t.y=_(this._y),t.buttons=_(this._buttons),t}bindEvent(t){t.addEventListener("mousedown",this.pressEventHandler.bind(this)),t.addEventListener("mousemove",this.moveEventHandler.bind(this)),t.addEventListener("mouseup",this.releaseEventHandler.bind(this)),t.addEventListener("mouseout",this.cancelEventHandler.bind(this))}}class Y{constructor(){s(this,"x",0);s(this,"y",0);s(this,"buttons",[!1,!1,!1])}}const L=new R;class G{constructor(t,e){s(this,"_context");s(this,"_secondsPassed",0);s(this,"_oldTimeStamp",0);s(this,"_fps",0);s(this,"_running",!1);s(this,"_update");s(this,"_test",0);t.style.width=Math.floor(w*f)+"px",t.style.height=Math.floor(x*f)+"px",t.style.imageRendering="pixelated",t.style.textRendering="geometricPrecision",t.width=w,t.height=x,this._context=t.getContext("2d"),this._context.imageSmoothingEnabled=!1,this._context.translate(0,0),this._update=e,L.bindEvent(t),v.bindEvents()}loop(t=0){this._secondsPassed=t-this._oldTimeStamp,this._oldTimeStamp=t,this._update(this._context,this._secondsPassed),window.requestAnimationFrame(this.loop.bind(this))}run(){this._running||this.loop()}}const p=class{constructor(t,e,o,i=255){s(this,"_r");s(this,"_g");s(this,"_b");s(this,"_a");this._r=Math.floor(t),this._g=Math.floor(e),this._b=Math.floor(o),this._a=Math.floor(i)}get R(){return this._r}get G(){return this._g}get B(){return this._b}get A(){return this._a}ToHEXWithA(t){return p.RGBAtoHEX(this._r,this._g,this.B,t)}ToHEX(t=!1){return t?p.RGBAtoHEX(this._r,this._g,this.B,this.A):p.RGBtoHEX(this._r,this._g,this.B)}};let h=p;s(h,"FromHEX",(t,e=1)=>{const[o,i,r]=t.match(/\w\w/g).map(a=>parseInt(a,16));return new p(o,i,r,parseInt((e*255).toString()))}),s(h,"RGBtoHEX",(t,e,o)=>{let r=(t+","+e+","+o).match(/^[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);return r&&r.length===4?"#"+("0"+parseInt(r[1],10).toString(16)).slice(-2)+("0"+parseInt(r[2],10).toString(16)).slice(-2)+("0"+parseInt(r[3],10).toString(16)).slice(-2):""}),s(h,"RGBAtoHEX",(t,e,o,i)=>{let a=(t+","+e+","+o+","+i).match(/^[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);return a&&a.length===5?"#"+("0"+parseInt(a[1],10).toString(16)).slice(-2)+("0"+parseInt(a[2],10).toString(16)).slice(-2)+("0"+parseInt(a[3],10).toString(16)).slice(-2)+("0"+parseInt(a[4],10).toString(16)).slice(-2):""}),s(h,"NokiaColorOne",p.FromHEX("#c7f0d8")),s(h,"NokiaColorTwo",p.FromHEX("#43523d"));class N{constructor(){s(this,"_scenes",[])}pushScene(t){this._scenes.push(t)}popScene(){this._scenes.pop()}clear(){this._scenes=[]}update(t){this._scenes[this._scenes.length-1].update(t)}draw(t){for(let e=0;e<this._scenes.length;e++)this._scenes[e].draw(t)}}const y=new N;class C{constructor(t=0,e=0){s(this,"X");s(this,"Y");this.X=t,this.Y=e}}const l=new C;class O{constructor(t,e,o,i,r){s(this,"x");s(this,"y");s(this,"lifetime");s(this,"vx");s(this,"vy");this.x=t,this.y=e,this.vx=o,this.vy=i,this.lifetime=r}update(t){this.lifetime--,this.x+=this.vx,this.y+=this.vy}get dead(){return this.lifetime<=0}draw(t){t.fillRect(Math.floor(this.x)-l.X,Math.floor(this.y)-l.Y,1,1)}}class B{constructor(){s(this,"_particles");this._particles=[]}update(t){for(let e=this._particles.length-1;e>-1;e--)try{this._particles[e].update(t),this._particles[e].dead&&this._particles.splice(e,1)}catch{console.log(e,this._particles.length)}}draw(t){this._particles.forEach(e=>{e.draw(t)})}add(t,e,o,i,r){let a=new O(t,e,o,i,r);this._particles.push(a)}createExplosion(t,e,o){for(let i=0;i<o;i++){let r=Math.random()*(2*Math.PI);this.add(t,e,Math.cos(r),Math.sin(r),100)}}}const c=new B;class M{constructor(){s(this,"x",4.5);s(this,"y",28.5);s(this,"step",0);s(this,"_previousKeyboard");this._previousKeyboard=v.getState()}update(t){let e=v.getState();this.step++,this.step%5==0&&(this.x=Math.random()*2-1,this.y=Math.random()*2-1),this.step>30&&e.keys[13]&&y.popScene(),c.update(t)}draw(t){t.fillStyle=h.NokiaColorTwo.ToHEX(),t.beginPath(),t.fillRect(0,15,84,18),t.font="12.5px pixel",t.fillStyle=h.NokiaColorOne.ToHEX(),t.fillText("GAME-OVER",4.5+this.x,28.5+this.y),t.closePath()}}class u{constructor(t=0,e=0){s(this,"X");s(this,"Y");this.X=t,this.Y=e}static get Zero(){return new u}static get Left(){return new u(-1,0)}static get Right(){return new u(1,0)}static get Up(){return new u(0,-1)}static get Down(){return new u(0,1)}}function g(n,t){for(var e=n.x,o=n.y,i=!1,r=0,a=t.length-1;r<t.length;a=r++){var E=t[r].x,k=t[r].y,P=t[a].x,m=t[a].y,X=k>o!=m>o&&e<(P-E)*(o-k)/(m-k)+E;X&&(i=!i)}return i}class K{constructor(){s(this,"_position",u.Zero);s(this,"_rotation",17);s(this,"_rotationSpeed",.05);s(this,"_longeur",10);s(this,"_life",3)}update(t){this._rotation=this._rotation+this._rotationSpeed*t,this._rotation>360&&(this._rotation-=360),this._rotation<0&&(this._rotation+=360)}draw(t){let e=this._rotation*Math.PI/180,o=Math.cos(e),i=Math.sin(e);t.strokeStyle=h.NokiaColorTwo.ToHEX(),t.lineWidth=3,t.beginPath(),t.moveTo(this._position.X-o*this._longeur-l.X,this._position.Y-i*this._longeur-l.Y),t.lineTo(this._position.X+o*this._longeur-l.X,this._position.Y+i*this._longeur-l.Y),t.stroke(),t.closePath(),t.beginPath(),t.arc(this._position.X-l.X,this._position.Y-l.Y,1,0,2*Math.PI),t.stroke(),t.closePath(),t.beginPath(),t.fillStyle=h.NokiaColorTwo.ToHEX();for(let r=0;r<this._life;r++)t.fillRect(2+r*4,2,2,2);t.closePath()}getExternPoints(){let t=this._rotation*Math.PI/180,e=Math.cos(t),o=Math.sin(t);var i={x:this._position.X-e*this._longeur,y:this._position.Y-o*this._longeur},r={x:this._position.X+e*this._longeur,y:this._position.Y+o*this._longeur};return[i,r]}}const D=-1,F=30,W=!1,q=[{draworder:"topdown",id:2,name:"map",objects:[{class:"",height:0,id:3,name:"",polygon:[{x:18.1778521049953,y:31.9930197047917},{x:65.440267577983,y:47.9895295571875},{x:119.973823892969,y:56.7148985675853},{x:197.775030902349,y:48.7166436413873},{x:193.41234639715,y:86.5265760197775},{x:44.3539591361885,y:110.521340798371}],properties:[{name:"type",type:"string",value:"inner"}],rotation:0,visible:!0,width:0,x:0,y:0},{class:"",height:0,id:4,name:"",polygon:[{x:3.63557042099906,y:7.27114084199812},{x:49.4437577255872,y:15.9965098523958},{x:122.882280229768,y:34.9014760415909},{x:235.584963280739,y:30.5387915363921},{x:237.039191449138,y:61.8046971569839},{x:226.859594270341,y:108.339998545772},{x:13.8151675997964,y:142.514360503163}],properties:[{name:"type",type:"string",value:"outer"}],rotation:0,visible:!0,width:0,x:0,y:0},{class:"",height:0,id:5,name:"",point:!0,properties:[{name:"type",type:"string",value:"start"}],rotation:0,visible:!0,width:0,x:20.3591943575947,y:24.7218788627936}],opacity:1,type:"objectgroup",visible:!0,x:0,y:0}],J=3,Z=7,U="orthogonal",z="right-down",Q="1.9.2",$=8,V=[],j=8,tt="map",et="1.9",st=53,S={compressionlevel:D,height:F,infinite:W,layers:q,nextlayerid:J,nextobjectid:Z,orientation:U,renderorder:z,tiledversion:Q,tileheight:$,tilesets:V,tilewidth:j,type:tt,version:et,width:st};class it{constructor(){s(this,"_levels");s(this,"_levelIndex",0);this._levels=[],this._levels.push(S)}load(t){console.log(S)}getStart(){for(var t of this._levels[this._levelIndex].layers[0].objects)if(t.properties[0].value=="start")return{x:t.x,y:t.y};return{x:0,y:0}}getInner(){for(var t of this._levels[this._levelIndex].layers[0].objects)if(t.polygon&&t.properties[0].value=="inner")return t.polygon;return[]}getOuter(){for(var t of this._levels[this._levelIndex].layers[0].objects)if(t.polygon&&t.properties[0].value=="outer")return t.polygon;return[]}draw(t){t.strokeStyle=h.NokiaColorTwo.ToHEX(),t.lineWidth=1,t.beginPath();for(var e of this._levels[this._levelIndex].layers[0].objects)if(e.polygon&&(e.properties[0].value=="inner"||e.properties[0].value=="outer")){for(let o=0;o<e.polygon.length;o++)o==0?t.moveTo(Math.floor(e.polygon[o].x)-l.X,Math.floor(e.polygon[o].y)-l.Y):t.lineTo(Math.floor(e.polygon[o].x)-l.X,Math.floor(e.polygon[o].y)-l.Y),t.stroke();t.lineTo(Math.floor(e.polygon[0].x)-l.X,Math.floor(e.polygon[0].y)-l.Y),t.stroke()}t.closePath()}}const d=new it;class rt{constructor(){s(this,"invinsible",0);s(this,"speed",.02);s(this,"multiplier",1);s(this,"kuru");d.load("test"),this.kuru=new K,this.kuru._position=new u(d.getStart().x,d.getStart().y)}restart(){this.kuru._position=new u(d.getStart().x,d.getStart().y),this.kuru._rotation=0,this.kuru._life=3}update(t){this.invinsible--;const e=v.getState();e.keys[16]?this.multiplier=2:this.multiplier=1,e.keys[68]&&(this.kuru._position.X+=t*this.speed*this.multiplier),e.keys[65]&&(this.kuru._position.X-=t*this.speed*this.multiplier),e.keys[87]&&(this.kuru._position.Y-=t*this.speed*this.multiplier),e.keys[83]&&(this.kuru._position.Y+=t*this.speed*this.multiplier),this.kuru.update(t),l.X=this.kuru._position.X-42,l.Y=this.kuru._position.Y-24,this.checkCollision(),c.update(t)}caTouche(){this.kuru._rotation-=this.kuru._rotationSpeed*1e3,this.invinsible<0&&(this.kuru._life--,this.kuru._life<=0&&(this.restart(),y.pushScene(new M)),this.invinsible=20)}checkCollision(){var t=d.getInner();g(this.kuru.getExternPoints()[0],t)&&(c.createExplosion(this.kuru.getExternPoints()[0].x,this.kuru.getExternPoints()[0].y,50),this.caTouche()),g(this.kuru.getExternPoints()[1],t)&&(c.createExplosion(this.kuru.getExternPoints()[1].x,this.kuru.getExternPoints()[1].y,50),this.caTouche());var e=d.getOuter();g(this.kuru.getExternPoints()[0],e)||(c.createExplosion(this.kuru.getExternPoints()[0].x,this.kuru.getExternPoints()[0].y,50),this.caTouche()),g(this.kuru.getExternPoints()[1],e)||(c.createExplosion(this.kuru.getExternPoints()[1].x,this.kuru.getExternPoints()[1].y,50),this.caTouche())}draw(t){d.draw(t),this.kuru.draw(t),c.draw(t)}}class ot{constructor(){y.pushScene(new rt),y.pushScene(new M)}update(t){y.update(t)}draw(t){this.clear(t),y.draw(t)}clear(t){const e=t.fillStyle;t.fillStyle=h.NokiaColorOne.ToHEX(),t.fillRect(0,0,w,x),t.fillStyle=e}}const b=new ot,nt=document.querySelector("#game"),at=new G(nt,(n,t)=>{b.update(t),b.draw(n)});at.run();