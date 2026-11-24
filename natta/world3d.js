/* نطّة — العالم المفتوح 3D. يتضمن three.js r187 (MIT, © 2010-2026 three.js authors) */
var NattaWorld3D=(()=>{var dc=Object.defineProperty;var Nf=Object.getOwnPropertyDescriptor;var Uf=Object.getOwnPropertyNames;var Bf=Object.prototype.hasOwnProperty;var Of=(i,t)=>{for(var e in t)dc(i,e,{get:t[e],enumerable:!0})},kf=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Uf(t))!Bf.call(i,s)&&s!==e&&dc(i,s,{get:()=>t[s],enumerable:!(n=Nf(t,s))||n.enumerable});return i};var Vf=i=>kf(dc({},"__esModule",{value:!0}),i);var j1={};Of(j1,{createWorld:()=>zf,makeRenderer:()=>vf,supported:()=>Mf});var al="188dev";var Gu=0,Kc=1,Wu=2;var Fs=1,Xu=2,gr=3,_s=0,kn=1,Be=2,Ls=0,xr=1,zn=2,jc=3,Qc=4,qu=5;var Ds=100,Yu=101,Zu=102,Ju=103,$u=104,Ku=200,ju=201,Qu=202,td=203,th=204,eh=205,ed=206,nd=207,id=208,sd=209,rd=210,od=211,ad=212,ld=213,cd=214,wa=0,Sa=1,ba=2,or=3,Aa=4,Ea=5,Ta=6,Ca=7,wo=0,hd=1,ud=2,Wi=0,nh=1,ih=2,sh=3,So=4,rh=5,oh=6,ah=7;var lh=300,zs=301,_r=302,ll=303,cl=304,ds=1e3,Oi=1001,Ra=1002,Dn=1003,dd=1004;var bo=1005;var Qn=1006,hl=1007;var ss=1008;var ii=1009,ch=1010,hh=1011,yr=1012,ul=1013,Li=1014,Ai=1015,Di=1016,dl=1017,fl=1018,Ns=1020,uh=35902,dh=35899,fh=1021,ph=1022,zi=1023,ts=1026,rs=1027,pl=1028,ml=1029,ys=1030,gl=1031;var xl=1033,Ao=33776,Eo=33777,To=33778,Co=33779,_l=35840,yl=35841,vl=35842,Ml=35843,wl=36196,Sl=37492,bl=37496,Al=37488,El=37489,Ro=37490,Tl=37491,Cl=37808,Rl=37809,Pl=37810,Il=37811,Fl=37812,Ll=37813,Dl=37814,zl=37815,Nl=37816,Ul=37817,Bl=37818,Ol=37819,kl=37820,Vl=37821,Hl=36492,Gl=36494,Wl=36495,Xl=36283,ql=36284,Po=36285,Yl=36286;var kr=2300,Pa=2301,va=2302,kc=2303,Vc=2400,Hc=2401,Gc=2402;var fd=3200;var Io=0,pd=1,os="",jn="srgb",Vr="srgb-linear",Hr="linear",cn="srgb";var Ma=7680;var md=519,gd=512,xd=513,_d=514,mh=515,yd=516,vd=517,gh=518,xh=519,_h=35044;var yh="300 es",xi=2e3,ar=2001;function Hf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}var Gf={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};typeof Float16Array<"u"&&(Gf.Float16Array=Float16Array);function Wf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Md(){let i=Gr("canvas");return i.style.display="block",i}var iu={},lr=null;function Wr(...i){let t="THREE."+i.shift();lr?lr("log",t,...i):console.log(t,...i)}function wd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ue(...i){i=wd(i);let t="THREE."+i.shift();if(lr)lr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Oe(...i){i=wd(i);let t="THREE."+i.shift();if(lr)lr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ur(...i){let t=i.join(" ");t in iu||(iu[t]=!0,Ue(...i))}function Sd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var bd={[wa]:wa,[ba]:Ta,[Aa]:Aa,[or]:Ea,[Sa]:Sa,[Ta]:ba,[Ca]:Ca,[Ea]:or},Vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var fc=Math.PI/180,Ia=180/Math.PI;function vs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gn[i&255]+Gn[i>>8&255]+Gn[i>>16&255]+Gn[i>>24&255]+"-"+Gn[t&255]+Gn[t>>8&255]+"-"+Gn[t>>16&15|64]+Gn[t>>24&255]+"-"+Gn[e&63|128]+Gn[e>>8&255]+"-"+Gn[e>>16&255]+Gn[e>>24&255]+Gn[n&255]+Gn[n>>8&255]+Gn[n>>16&255]+Gn[n>>24&255]).toLowerCase()}function Qe(i,t,e){return Math.max(t,Math.min(e,i))}function Xf(i,t){return(i%t+t)%t}function pc(i,t,e){return(1-e)*i+e*t}function Ad(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ed(i,t){if(t.constructor===Float32Array)return i;let e=Zl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Td(i,t){if(t.constructor===Float32Array)return i;let e=Zl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Ah=class Ah{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qe(this.x,t.x,e.x),this.y=Qe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qe(this.x,t,e),this.y=Qe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ah.prototype.isVector2=!0;var Ct=Ah,_i=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],d=n[s+2],f=n[s+3],m=r[o+0],g=r[o+1],_=r[o+2],R=r[o+3];if(f!==R||l!==m||c!==g||d!==_){let p=l*m+c*g+d*_+f*R;p<0&&(m=-m,g=-g,_=-_,R=-R,p=-p);let y=1-a;if(p<.9995){let P=Math.acos(p),F=Math.sin(P);y=Math.sin(y*P)/F,a=Math.sin(a*P)/F,l=l*y+m*a,c=c*y+g*a,d=d*y+_*a,f=f*y+R*a}else{l=l*y+m*a,c=c*y+g*a,d=d*y+_*a,f=f*y+R*a;let P=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=P,c*=P,d*=P,f*=P}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],d=n[s+3],f=r[o],m=r[o+1],g=r[o+2],_=r[o+3];return t[e]=a*_+d*f+l*g-c*m,t[e+1]=l*_+d*m+c*f-a*g,t[e+2]=c*_+d*g+a*m-l*f,t[e+3]=d*_-a*f-l*m-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(s/2),f=a(r/2),m=l(n/2),g=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=m*d*f+c*g*_,this._y=c*g*f-m*d*_,this._z=c*d*_+m*g*f,this._w=c*d*f-m*g*_;break;case"YXZ":this._x=m*d*f+c*g*_,this._y=c*g*f-m*d*_,this._z=c*d*_-m*g*f,this._w=c*d*f+m*g*_;break;case"ZXY":this._x=m*d*f-c*g*_,this._y=c*g*f+m*d*_,this._z=c*d*_+m*g*f,this._w=c*d*f-m*g*_;break;case"ZYX":this._x=m*d*f-c*g*_,this._y=c*g*f+m*d*_,this._z=c*d*_-m*g*f,this._w=c*d*f+m*g*_;break;case"YZX":this._x=m*d*f+c*g*_,this._y=c*g*f+m*d*_,this._z=c*d*_-m*g*f,this._w=c*d*f-m*g*_;break;case"XZY":this._x=m*d*f-c*g*_,this._y=c*g*f-m*d*_,this._z=c*d*_+m*g*f,this._w=c*d*f+m*g*_;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],d=e[6],f=e[10],m=n+a+f;if(m>0){let g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(d-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(n>a&&n>f){let g=2*Math.sqrt(1+n-a-f);this._w=(d-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>f){let g=2*Math.sqrt(1+a-n-f);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+d)/g}else{let g=2*Math.sqrt(1+f-n-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-s*a,this._w=o*d-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,e=Math.sin(e*c)/d,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Eh=class Eh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(su.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(su.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),d=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*d,this.y=n+l*d+a*c-r*f,this.z=s+l*f+r*d-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qe(this.x,t.x,e.x),this.y=Qe(this.y,t.y,e.y),this.z=Qe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qe(this.x,t,e),this.y=Qe(this.y,t,e),this.z=Qe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mc.copy(this).projectOnVector(t),this.sub(mc)}reflect(t){return this.sub(mc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Eh.prototype.isVector3=!0;var j=Eh,mc=new j,su=new _i,Th=class Th{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],f=n[7],m=n[2],g=n[5],_=n[8],R=s[0],p=s[3],y=s[6],P=s[1],F=s[4],I=s[7],B=s[2],D=s[5],A=s[8];return r[0]=o*R+a*P+l*B,r[3]=o*p+a*F+l*D,r[6]=o*y+a*I+l*A,r[1]=c*R+d*P+f*B,r[4]=c*p+d*F+f*D,r[7]=c*y+d*I+f*A,r[2]=m*R+g*P+_*B,r[5]=m*p+g*F+_*D,r[8]=m*y+g*I+_*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8];return e*o*d-e*a*c-n*r*d+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],f=d*o-a*c,m=a*l-d*r,g=c*r-o*l,_=e*f+n*m+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/_;return t[0]=f*R,t[1]=(s*c-d*n)*R,t[2]=(a*n-s*o)*R,t[3]=m*R,t[4]=(d*e-s*l)*R,t[5]=(s*r-a*e)*R,t[6]=g*R,t[7]=(n*l-c*e)*R,t[8]=(o*e-n*r)*R,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ur("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gc.makeScale(t,e)),this}rotate(t){return Ur("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gc.makeRotation(-t)),this}translate(t,e){return Ur("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Th.prototype.isMatrix3=!0;var We=Th,gc=new We,ru=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ou=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qf(){let i={enabled:!0,workingColorSpace:Vr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===cn&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===cn&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===os?Hr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vr]:{primaries:t,whitePoint:n,transfer:Hr,toXYZ:ru,fromXYZ:ou,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:t,whitePoint:n,transfer:cn,toXYZ:ru,fromXYZ:ou,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),i}var tn=qf();function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vs,Fa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Vs===void 0&&(Vs=Gr("canvas")),Vs.width=t.width,Vs.height=t.height;let s=Vs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Vs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Gr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qi(e[n]/255)*255):e[n]=Qi(e[n]);return{data:e,width:t.width,height:t.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Yf=0,cr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=vs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xc(s[o].image)):r.push(xc(s[o]))}else r=xc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function xc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}var Zf=0,_c=new j,ti=class i extends Vi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Oi,s=Oi,r=Qn,o=ss,a=zi,l=ii,c=i.DEFAULT_ANISOTROPY,d=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=vs(),this.name="",this.source=new cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(_c).x}get height(){return this.source.getSize(_c).y}get depth(){return this.source.getSize(_c).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ue(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ue(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ds:t.x=t.x-Math.floor(t.x);break;case Oi:t.x=t.x<0?0:1;break;case Ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ds:t.y=t.y-Math.floor(t.y);break;case Oi:t.y=t.y<0?0:1;break;case Ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=lh;ti.DEFAULT_ANISOTROPY=1;var Ch=class Ch{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){let e=Qe(t.w,-1,1);this.w=2*Math.acos(e);let n=Math.sqrt(1-e*e);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],d=l[4],f=l[8],m=l[1],g=l[5],_=l[9],R=l[2],p=l[6],y=l[10];if(Math.abs(d-m)<.01&&Math.abs(f-R)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+m)<.1&&Math.abs(f+R)<.1&&Math.abs(_+p)<.1&&Math.abs(c+g+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let F=(c+1)/2,I=(g+1)/2,B=(y+1)/2,D=(d+m)/4,A=(f+R)/4,L=(_+p)/4;return F>I&&F>B?F<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(F),s=D/n,r=A/n):I>B?I<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(I),n=D/s,r=L/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=A/r,s=L/r),this.set(n,s,r,e),this}let P=Math.sqrt((p-_)*(p-_)+(f-R)*(f-R)+(m-d)*(m-d));return Math.abs(P)<.001&&(P=1),this.x=(p-_)/P,this.y=(f-R)/P,this.z=(m-d)/P,this.w=Math.acos((c+g+y-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qe(this.x,t.x,e.x),this.y=Qe(this.y,t.y,e.y),this.z=Qe(this.z,t.z,e.z),this.w=Qe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qe(this.x,t,e),this.y=Qe(this.y,t,e),this.z=Qe(this.z,t,e),this.w=Qe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ch.prototype.isVector4=!0;var fn=Ch,La=class extends Vi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new fn(0,0,t,e),this.scissorTest=!1,this.viewport=new fn(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new ti({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++){let o=this.textures[s],a=o.images?o.images[0]:o.image;a.width=t,a.height=e,a.depth=n,o.isData3DTexture!==!0&&(o.isArrayTexture=a.depth>1)}this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new cr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends La{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xr=class extends ti{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Da=class extends ti{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ol=class ol{constructor(t,e,n,s,r,o,a,l,c,d,f,m,g,_,R,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,d,f,m,g,_,R,p)}set(t,e,n,s,r,o,a,l,c,d,f,m,g,_,R,p){let y=this.elements;return y[0]=t,y[4]=e,y[8]=n,y[12]=s,y[1]=r,y[5]=o,y[9]=a,y[13]=l,y[2]=c,y[6]=d,y[10]=f,y[14]=m,y[3]=g,y[7]=_,y[11]=R,y[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ol().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Hs.setFromMatrixColumn(t,0).length(),r=1/Hs.setFromMatrixColumn(t,1).length(),o=1/Hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let m=o*d,g=o*f,_=a*d,R=a*f;e[0]=l*d,e[4]=-l*f,e[8]=c,e[1]=g+_*c,e[5]=m-R*c,e[9]=-a*l,e[2]=R-m*c,e[6]=_+g*c,e[10]=o*l}else if(t.order==="YXZ"){let m=l*d,g=l*f,_=c*d,R=c*f;e[0]=m+R*a,e[4]=_*a-g,e[8]=o*c,e[1]=o*f,e[5]=o*d,e[9]=-a,e[2]=g*a-_,e[6]=R+m*a,e[10]=o*l}else if(t.order==="ZXY"){let m=l*d,g=l*f,_=c*d,R=c*f;e[0]=m-R*a,e[4]=-o*f,e[8]=_+g*a,e[1]=g+_*a,e[5]=o*d,e[9]=R-m*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let m=o*d,g=o*f,_=a*d,R=a*f;e[0]=l*d,e[4]=_*c-g,e[8]=m*c+R,e[1]=l*f,e[5]=R*c+m,e[9]=g*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let m=o*l,g=o*c,_=a*l,R=a*c;e[0]=l*d,e[4]=R-m*f,e[8]=_*f+g,e[1]=f,e[5]=o*d,e[9]=-a*d,e[2]=-c*d,e[6]=g*f+_,e[10]=m-R*f}else if(t.order==="XZY"){let m=o*l,g=o*c,_=a*l,R=a*c;e[0]=l*d,e[4]=-f,e[8]=c*d,e[1]=m*f+R,e[5]=o*d,e[9]=g*f-_,e[2]=_*f-g,e[6]=a*d,e[10]=R*f+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jf,t,$f)}lookAt(t,e,n){let s=this.elements;return si.subVectors(t,e),si.lengthSq()===0&&(si.z=1),si.normalize(),ls.crossVectors(n,si),ls.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),ls.crossVectors(n,si)),ls.normalize(),Go.crossVectors(si,ls),s[0]=ls.x,s[4]=Go.x,s[8]=si.x,s[1]=ls.y,s[5]=Go.y,s[9]=si.y,s[2]=ls.z,s[6]=Go.z,s[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],f=n[5],m=n[9],g=n[13],_=n[2],R=n[6],p=n[10],y=n[14],P=n[3],F=n[7],I=n[11],B=n[15],D=s[0],A=s[4],L=s[8],$=s[12],O=s[1],ot=s[5],dt=s[9],st=s[13],wt=s[2],ft=s[6],Bt=s[10],gt=s[14],Mt=s[3],vt=s[7],It=s[11],qt=s[15];return r[0]=o*D+a*O+l*wt+c*Mt,r[4]=o*A+a*ot+l*ft+c*vt,r[8]=o*L+a*dt+l*Bt+c*It,r[12]=o*$+a*st+l*gt+c*qt,r[1]=d*D+f*O+m*wt+g*Mt,r[5]=d*A+f*ot+m*ft+g*vt,r[9]=d*L+f*dt+m*Bt+g*It,r[13]=d*$+f*st+m*gt+g*qt,r[2]=_*D+R*O+p*wt+y*Mt,r[6]=_*A+R*ot+p*ft+y*vt,r[10]=_*L+R*dt+p*Bt+y*It,r[14]=_*$+R*st+p*gt+y*qt,r[3]=P*D+F*O+I*wt+B*Mt,r[7]=P*A+F*ot+I*ft+B*vt,r[11]=P*L+F*dt+I*Bt+B*It,r[15]=P*$+F*st+I*gt+B*qt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],d=t[2],f=t[6],m=t[10],g=t[14],_=t[3],R=t[7],p=t[11],y=t[15],P=l*g-c*m,F=a*g-c*f,I=a*m-l*f,B=o*g-c*d,D=o*m-l*d,A=o*f-a*d;return e*(R*P-p*F+y*I)-n*(_*P-p*B+y*D)+s*(_*F-R*B+y*A)-r*(_*I-R*D+p*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],d=t[10];return e*(o*d-a*c)-n*(r*d-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],d=t[8],f=t[9],m=t[10],g=t[11],_=t[12],R=t[13],p=t[14],y=t[15],P=e*a-n*o,F=e*l-s*o,I=e*c-r*o,B=n*l-s*a,D=n*c-r*a,A=s*c-r*l,L=d*R-f*_,$=d*p-m*_,O=d*y-g*_,ot=f*p-m*R,dt=f*y-g*R,st=m*y-g*p,wt=P*st-F*dt+I*ot+B*O-D*$+A*L;if(wt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let ft=1/wt;return t[0]=(a*st-l*dt+c*ot)*ft,t[1]=(s*dt-n*st-r*ot)*ft,t[2]=(R*A-p*D+y*B)*ft,t[3]=(m*D-f*A-g*B)*ft,t[4]=(l*O-o*st-c*$)*ft,t[5]=(e*st-s*O+r*$)*ft,t[6]=(p*I-_*A-y*F)*ft,t[7]=(d*A-m*I+g*F)*ft,t[8]=(o*dt-a*O+c*L)*ft,t[9]=(n*O-e*dt-r*L)*ft,t[10]=(_*D-R*I+y*P)*ft,t[11]=(f*I-d*D-g*P)*ft,t[12]=(a*$-o*ot-l*L)*ft,t[13]=(e*ot-n*$+s*L)*ft,t[14]=(R*F-_*B-p*P)*ft,t[15]=(d*B-f*F+m*P)*ft,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+n,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,d=o+o,f=a+a,m=r*c,g=r*d,_=r*f,R=o*d,p=o*f,y=a*f,P=l*c,F=l*d,I=l*f,B=n.x,D=n.y,A=n.z;return s[0]=(1-(R+y))*B,s[1]=(g+I)*B,s[2]=(_-F)*B,s[3]=0,s[4]=(g-I)*D,s[5]=(1-(m+y))*D,s[6]=(p+P)*D,s[7]=0,s[8]=(_+F)*A,s[9]=(p-P)*A,s[10]=(1-(m+R))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Hs.set(s[0],s[1],s[2]).length(),a=Hs.set(s[4],s[5],s[6]).length(),l=Hs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ci.copy(this);let c=1/o,d=1/a,f=1/l;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=d,Ci.elements[5]*=d,Ci.elements[6]*=d,Ci.elements[8]*=f,Ci.elements[9]*=f,Ci.elements[10]*=f,e.setFromRotationMatrix(Ci),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=xi,l=!1){let c=this.elements,d=2*r/(e-t),f=2*r/(n-s),m=(e+t)/(e-t),g=(n+s)/(n-s),_,R;if(l)_=r/(o-r),R=o*r/(o-r);else if(a===xi)_=-(o+r)/(o-r),R=-2*o*r/(o-r);else if(a===ar)_=-o/(o-r),R=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=f,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=R,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=xi,l=!1){let c=this.elements,d=2/(e-t),f=2/(n-s),m=-(e+t)/(e-t),g=-(n+s)/(n-s),_,R;if(l)_=1/(o-r),R=o/(o-r);else if(a===xi)_=-2/(o-r),R=-(o+r)/(o-r);else if(a===ar)_=-1/(o-r),R=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=m,c[1]=0,c[5]=f,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=_,c[14]=R,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ol.prototype.isMatrix4=!0;var rn=ol,Hs=new j,Ci=new rn,Jf=new j(0,0,0),$f=new j(1,1,1),ls=new j,Go=new j,si=new j,au=new rn,lu=new _i,yi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],f=s[2],m=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,g),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return au.makeRotationFromQuaternion(t),this.setFromRotationMatrix(au,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lu.setFromEuler(this),this.setFromQuaternion(lu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yi.DEFAULT_ORDER="XYZ";var qr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kf=0,cu=new j,Gs=new _i,Yi=new rn,Wo=new j,Er=new j,jf=new j,Qf=new _i,hu=new j(1,0,0),uu=new j(0,1,0),du=new j(0,0,1),fu={type:"added"},tp={type:"removed"},Ws={type:"childadded",child:null},yc={type:"childremoved",child:null},dn=class i extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new j,e=new yi,n=new _i,s=new j(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rn},normalMatrix:{value:new We}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gs.setFromAxisAngle(t,e),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(t,e){return Gs.setFromAxisAngle(t,e),this.quaternion.premultiply(Gs),this}rotateX(t){return this.rotateOnAxis(hu,t)}rotateY(t){return this.rotateOnAxis(uu,t)}rotateZ(t){return this.rotateOnAxis(du,t)}translateOnAxis(t,e){return cu.copy(t).applyQuaternion(this.quaternion),this.position.add(cu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hu,t)}translateY(t){return this.translateOnAxis(uu,t)}translateZ(t){return this.translateOnAxis(du,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wo.copy(t):Wo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Er,Wo,this.up):Yi.lookAt(Wo,Er,this.up),this.quaternion.setFromRotationMatrix(Yi),s&&(Yi.extractRotation(s.matrixWorld),Gs.setFromRotationMatrix(Yi),this.quaternion.premultiply(Gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fu),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tp),yc.child=t,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fu),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,jf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Qf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1)===!0&&(n=!0),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}return n}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),d=o(t.images),f=o(t.shapes),m=o(t.skeletons),g=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dn.DEFAULT_UP=new j(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var we=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ep={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let R of t.hand.values()){let p=e.getJointPose(R,n),y=this._getHandJoint(c,R);p!==null&&(y.matrix.fromArray(p.transform.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=p.radius),y.visible=p!==null}let d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],m=d.position.distanceTo(f.position),g=.02,_=.005;c.inputState.pinching&&m>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ep)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new we;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},bs={h:0,s:0,l:0};function vc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ie=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,tn.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=tn.workingColorSpace){return this.r=t,this.g=e,this.b=n,tn.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=tn.workingColorSpace){if(t=Xf(t,1),e=Qe(e,0,1),n=Qe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=vc(o,r,t+1/3),this.g=vc(o,r,t),this.b=vc(o,r,t-1/3)}return tn.colorSpaceToWorking(this,s),this}setStyle(t,e=jn){function n(r){r!==void 0&&parseFloat(r)<1&&Ue("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ue("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ue("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=jn){let n=Cd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ue("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=jn){return tn.workingToColorSpace(Wn.copy(this),t),Math.round(Qe(Wn.r*255,0,255))*65536+Math.round(Qe(Wn.g*255,0,255))*256+Math.round(Qe(Wn.b*255,0,255))}getHexString(t=jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=tn.workingColorSpace){tn.workingToColorSpace(Wn.copy(this),e);let n=Wn.r,s=Wn.g,r=Wn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=tn.workingColorSpace){return tn.workingToColorSpace(Wn.copy(this),e),t.r=Wn.r,t.g=Wn.g,t.b=Wn.b,t}getStyle(t=jn){tn.workingToColorSpace(Wn.copy(this),t);let e=Wn.r,n=Wn.g,s=Wn.b;return t!==jn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(bs),Ri.s===0&&(Ri.h=bs.h),bs.s===0&&(bs.h=Ri.h);let n=pc(Ri.h,bs.h,e),s=pc(Ri.s,bs.s,e),r=pc(Ri.l,bs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wn=new Ie;Ie.NAMES=Cd;var Yr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Zr=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Pi=new j,Zi=new j,Mc=new j,Ji=new j,Xs=new j,qs=new j,pu=new j,wc=new j,Sc=new j,bc=new j,Ac=new fn,Ec=new fn,Tc=new fn,ji=class i{constructor(t=new j,e=new j,n=new j){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pi.subVectors(t,e),s.cross(Pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pi.subVectors(s,e),Zi.subVectors(n,e),Mc.subVectors(t,e);let o=Pi.dot(Pi),a=Pi.dot(Zi),l=Pi.dot(Mc),c=Zi.dot(Zi),d=Zi.dot(Mc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let m=1/f,g=(c*l-a*d)*m,_=(o*d-a*l)*m;return r.set(1-g-_,_,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ji.x),l.addScaledVector(o,Ji.y),l.addScaledVector(a,Ji.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ac.setScalar(0),Ec.setScalar(0),Tc.setScalar(0),Ac.fromBufferAttribute(t,e),Ec.fromBufferAttribute(t,n),Tc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ac,r.x),o.addScaledVector(Ec,r.y),o.addScaledVector(Tc,r.z),o}static isFrontFacing(t,e,n,s){return Pi.subVectors(n,e),Zi.subVectors(t,e),Pi.cross(Zi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),Pi.cross(Zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Xs.subVectors(s,n),qs.subVectors(r,n),wc.subVectors(t,n);let l=Xs.dot(wc),c=qs.dot(wc);if(l<=0&&c<=0)return e.copy(n);Sc.subVectors(t,s);let d=Xs.dot(Sc),f=qs.dot(Sc);if(d>=0&&f<=d)return e.copy(s);let m=l*f-d*c;if(m<=0&&l>=0&&d<=0&&l-d>0)return o=l/(l-d),e.copy(n).addScaledVector(Xs,o);bc.subVectors(t,r);let g=Xs.dot(bc),_=qs.dot(bc);if(_>=0&&g<=_)return e.copy(r);let R=g*c-l*_;if(R<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(qs,a);let p=d*_-g*f;if(p<=0&&f-d>=0&&g-_>=0)return pu.subVectors(r,s),a=(f-d)/(f-d+(g-_)),e.copy(s).addScaledVector(pu,a);let y=1/(p+R+m);return o=R*y,a=m*y,e.copy(n).addScaledVector(Xs,o).addScaledVector(qs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hi=class{constructor(t=new j(1/0,1/0,1/0),e=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ii):Ii.fromBufferAttribute(r,o),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xo.copy(n.boundingBox)),Xo.applyMatrix4(t.matrixWorld),this.union(Xo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tr),qo.subVectors(this.max,Tr),Ys.subVectors(t.a,Tr),Zs.subVectors(t.b,Tr),Js.subVectors(t.c,Tr),cs.subVectors(Zs,Ys),hs.subVectors(Js,Zs),As.subVectors(Ys,Js);let e=[0,-cs.z,cs.y,0,-hs.z,hs.y,0,-As.z,As.y,cs.z,0,-cs.x,hs.z,0,-hs.x,As.z,0,-As.x,-cs.y,cs.x,0,-hs.y,hs.x,0,-As.y,As.x,0];return!Cc(e,Ys,Zs,Js,qo)||(e=[1,0,0,0,1,0,0,0,1],!Cc(e,Ys,Zs,Js,qo))?!1:(Yo.crossVectors(cs,hs),e=[Yo.x,Yo.y,Yo.z],Cc(e,Ys,Zs,Js,qo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},$i=[new j,new j,new j,new j,new j,new j,new j,new j],Ii=new j,Xo=new Hi,Ys=new j,Zs=new j,Js=new j,cs=new j,hs=new j,As=new j,Tr=new j,qo=new j,Yo=new j,Es=new j;function Cc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Es.fromArray(i,r);let a=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),l=t.dot(Es),c=e.dot(Es),d=n.dot(Es);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var Cn=new j,Zo=new Ct,np=0,qe=class extends Vi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:np++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_h,this.updateRanges=[],this.gpuType=Ai,this.version=0,this._normalizationScale=t!==void 0?Zl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zo.fromBufferAttribute(this,e),Zo.applyMatrix3(t),this.setXY(e,Zo.x,Zo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.applyMatrix3(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.applyMatrix4(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.applyNormalMatrix(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.transformDirection(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ed(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Td(t,this.array)}};var Jr=class extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var $r=class extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ge=class extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}},ip=new Hi,Cr=new j,Rc=new j,Gi=class{constructor(t=new j,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ip.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cr.subVectors(t,this.center);let e=Cr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Cr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cr.copy(t.center).add(Rc)),this.expandByPoint(Cr.copy(t.center).sub(Rc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},sp=0,gi=new rn,Pc=new dn,$s=new j,ri=new Hi,Rr=new Hi,Ui=new j,Jo=new j,$o=new j,Ze=class i extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hf(t)?$r:Jr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,e,n){return gi.makeTranslation(t,e,n),this.applyMatrix4(gi),this}scale(t,e,n){return gi.makeScale(t,e,n),this.applyMatrix4(gi),this}lookAt(t){return Pc.lookAt(t),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ge(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(Jo.addVectors(this.boundingBox.min,ri.min),$o.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Jo),this.boundingBox.expandByPoint($o)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){let n=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Jo.addVectors(ri.min,Rr.min),$o.addVectors(ri.max,Rr.max),ri.expandByPoint(Jo),ri.expandByPoint($o)):(ri.expandByPoint(Rr.min),ri.expandByPoint(Rr.max))}ri.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ui.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ui));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ui.fromBufferAttribute(a,c),l&&($s.fromBufferAttribute(t,c),Ui.add($s)),s=Math.max(s,n.distanceToSquared(Ui))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new qe(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let $=0;$<n.count;$++)a[$]=new j,l[$]=new j;let d=new j,f=new j,m=new j,g=new Ct,_=new Ct,R=new Ct,p=new j,y=new j;function P($,O,ot){c[$]=c[O]=c[ot]=1,d.fromBufferAttribute(n,$),f.fromBufferAttribute(n,O),m.fromBufferAttribute(n,ot),g.fromBufferAttribute(r,$),_.fromBufferAttribute(r,O),R.fromBufferAttribute(r,ot),f.sub(d),m.sub(d),_.sub(g),R.sub(g);let dt=1/(_.x*R.y-R.x*_.y);isFinite(dt)&&(p.copy(f).multiplyScalar(R.y).addScaledVector(m,-_.y).multiplyScalar(dt),y.copy(m).multiplyScalar(_.x).addScaledVector(f,-R.x).multiplyScalar(dt),a[$].add(p),a[O].add(p),a[ot].add(p),l[$].add(y),l[O].add(y),l[ot].add(y))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let $=0,O=F.length;$<O;++$){let ot=F[$],dt=ot.start,st=ot.count;for(let wt=dt,ft=Math.min(t.count,dt+st);wt<ft;wt+=3)P(t.getX(wt+0),t.getX(wt+1),t.getX(wt+2))}let I=new j,B=new j,D=new j,A=new j;function L($){D.fromBufferAttribute(s,$),A.copy(D);let O=a[$];I.copy(O),I.sub(D.multiplyScalar(D.dot(O))).normalize(),I.lengthSq()===0&&(Math.abs(A.x)<.9?I.set(1,0,0):I.set(0,1,0),I.crossVectors(A,I).normalize()),B.crossVectors(A,O);let dt=B.dot(l[$])<0?-1:1;o.setXYZW($,I.x,I.y,I.z,dt)}for(let $=0,O=n.count;$<O;++$)c[$]&&L($);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);let s=new j,r=new j,o=new j,a=new j,l=new j,c=new j,d=new j,f=new j;if(t)for(let m=0,g=t.count;m<g;m+=3){let _=t.getX(m+0),R=t.getX(m+1),p=t.getX(m+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,R),o.fromBufferAttribute(e,p),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,R),c.fromBufferAttribute(n,p),a.add(d),l.add(d),c.add(d),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(R,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let m=0,g=e.count;m<g;m+=3)s.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ui.fromBufferAttribute(t,e),Ui.normalize(),t.setXYZ(e,Ui.x,Ui.y,Ui.z)}toNonIndexed(){function t(a,l){let c=a.array,d=a.itemSize,f=a.normalized,m=new c.constructor(l.length*d),g=0,_=0;for(let R=0,p=l.length;R<p;R++){a.isInterleavedBufferAttribute?g=l[R]*a.data.stride+a.offset:g=l[R]*d;for(let y=0;y<d;y++)m[_++]=c[g++]}return new qe(m,d,f)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let d=0,f=c.length;d<f;d++){let m=c[d],g=t(m,n);l.push(g)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let f=0,m=c.length;f<m;f++){let g=c[f];d.push(g.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(e))}let r=t.morphAttributes;for(let c in r){let d=[],f=r[c];for(let m=0,g=f.length;m<g;m++)d.push(f[m].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,d=o.length;c<d;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},za=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_h,this.updateRanges=[],this.version=0,this.uuid=vs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=mu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=mu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function mu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=vs()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Kn=new j,Kr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Zl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Kn.fromBufferAttribute(this,e),Kn.applyMatrix4(t),this.setXYZ(e,Kn.x,Kn.y,Kn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Kn.fromBufferAttribute(this,e),Kn.applyNormalMatrix(t),this.setXYZ(e,Kn.x,Kn.y,Kn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Kn.fromBufferAttribute(this,e),Kn.transformDirection(t),this.setXYZ(e,Kn.x,Kn.y,Kn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Wr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Wr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ed(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Td(t,this.data.array)}},Ic=new j,rp=new j,op=new We,Fi=class{constructor(t=new j(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ic.subVectors(n,e).cross(rp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ic),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||op.getNormalMatrix(t),s=this.coplanarPoint(Ic).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ap=0,vi=class extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=vs(),this.name="",this.type="Material",this.blending=xr,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=eh,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ma,this.stencilZFail=Ma,this.stencilZPass=Ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ue(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ue(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Fi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ct().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ct().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Un=class extends vi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ks,Pr=new j,js=new j,Qs=new j,tr=new Ct,Ir=new Ct,Rd=new rn,Ko=new j,Fr=new j,jo=new j,gu=new Ct,Fc=new Ct,xu=new Ct,qn=class extends dn{constructor(t=new Un){if(super(),this.isSprite=!0,this.type="Sprite",Ks===void 0){Ks=new Ze;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new za(e,5);Ks.setIndex([0,1,2,0,2,3]),Ks.setAttribute("position",new Kr(n,3,0,!1)),Ks.setAttribute("uv",new Kr(n,2,3,!1))}this.geometry=Ks,this.material=t,this.center=new Ct(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Oe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),js.setFromMatrixScale(this.matrixWorld),Rd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&js.multiplyScalar(-Qs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Qo(Ko.set(-.5,-.5,0),Qs,o,js,s,r),Qo(Fr.set(.5,-.5,0),Qs,o,js,s,r),Qo(jo.set(.5,.5,0),Qs,o,js,s,r),gu.set(0,0),Fc.set(1,0),xu.set(1,1);let a=t.ray.intersectTriangle(Ko,Fr,jo,!1,Pr);if(a===null&&(Qo(Fr.set(-.5,.5,0),Qs,o,js,s,r),Fc.set(0,1),a=t.ray.intersectTriangle(Ko,jo,Fr,!1,Pr),a===null))return;let l=t.ray.origin.distanceTo(Pr);l<t.near||l>t.far||e.push({distance:l,point:Pr.clone(),uv:ji.getInterpolation(Pr,Ko,Fr,jo,gu,Fc,xu,new Ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this.count=t.count,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Qo(i,t,e,n,s,r){tr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ir.x=r*tr.x-s*tr.y,Ir.y=s*tr.x+r*tr.y):Ir.copy(tr),i.copy(t),i.x+=Ir.x,i.y+=Ir.y,i.applyMatrix4(Rd)}var Ki=new j,Lc=new j,ta=new j,ea=new j,ur=class{constructor(t=new j,e=new j(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ki.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,e),Ki.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Lc.copy(t).add(e).multiplyScalar(.5),ta.copy(e).sub(t).normalize(),ea.copy(this.origin).sub(Lc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ta),a=ea.dot(this.direction),l=-ea.dot(ta),c=ea.lengthSq(),d=Math.abs(1-o*o),f,m,g,_;if(d>0)if(f=o*l-a,m=o*a-l,_=r*d,f>=0)if(m>=-_)if(m<=_){let R=1/d;f*=R,m*=R,g=f*(f+o*m+2*a)+m*(o*f+m+2*l)+c}else m=r,f=Math.max(0,-(o*m+a)),g=-f*f+m*(m+2*l)+c;else m=-r,f=Math.max(0,-(o*m+a)),g=-f*f+m*(m+2*l)+c;else m<=-_?(f=Math.max(0,-(-o*r+a)),m=f>0?-r:Math.min(Math.max(-r,-l),r),g=-f*f+m*(m+2*l)+c):m<=_?(f=0,m=Math.min(Math.max(-r,-l),r),g=m*(m+2*l)+c):(f=Math.max(0,-(o*r+a)),m=f>0?r:Math.min(Math.max(-r,-l),r),g=-f*f+m*(m+2*l)+c);else m=o>0?-r:r,f=Math.max(0,-(o*m+a)),g=-f*f+m*(m+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Lc).addScaledVector(ta,m),g}intersectSphere(t,e){if(t.radius<0)return null;Ki.subVectors(t.center,this.origin);let n=Ki.dot(this.direction),s=Ki.dot(Ki)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,m=this.origin;return c>=0?(n=(t.min.x-m.x)*c,s=(t.max.x-m.x)*c):(n=(t.max.x-m.x)*c,s=(t.min.x-m.x)*c),d>=0?(r=(t.min.y-m.y)*d,o=(t.max.y-m.y)*d):(r=(t.max.y-m.y)*d,o=(t.min.y-m.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-m.z)*f,l=(t.max.z-m.z)*f):(a=(t.max.z-m.z)*f,l=(t.min.z-m.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,d=a.z,f=t.x-o.x,m=t.y-o.y,g=t.z-o.z,_=e.x-o.x,R=e.y-o.y,p=e.z-o.z,y=n.x-o.x,P=n.y-o.y,F=n.z-o.z,I=Math.abs(l),B=Math.abs(c),D=Math.abs(d),A,L,$,O,ot,dt,st,wt,ft,Bt,gt,Mt;if(I>=B&&I>=D?($=l,dt=f,ft=_,Mt=y,l>=0?(A=c,L=d,O=m,ot=g,st=R,wt=p,Bt=P,gt=F):(A=d,L=c,O=g,ot=m,st=p,wt=R,Bt=F,gt=P)):B>=D?($=c,dt=m,ft=R,Mt=P,c>=0?(A=d,L=l,O=g,ot=f,st=p,wt=_,Bt=F,gt=y):(A=l,L=d,O=f,ot=g,st=_,wt=p,Bt=y,gt=F)):($=d,dt=g,ft=p,Mt=F,d>=0?(A=l,L=c,O=f,ot=m,st=_,wt=R,Bt=y,gt=P):(A=c,L=l,O=m,ot=f,st=R,wt=_,Bt=P,gt=y)),$===0)return null;let vt=A/$,It=L/$,qt=1/$,$t=O-vt*dt,pe=ot-It*dt,zt=st-vt*ft,ne=wt-It*ft,he=Bt-vt*Mt,_e=gt-It*Mt,Jt=he*ne-_e*zt,ye=$t*_e-pe*he,Fe=zt*pe-ne*$t;if(s){if(Jt<0||ye<0||Fe<0)return null}else if((Jt<0||ye<0||Fe<0)&&(Jt>0||ye>0||Fe>0))return null;let le=Jt+ye+Fe;if(le===0)return null;let W=qt*(Jt*dt+ye*ft+Fe*Mt);return(le>0?W<0:W>0)?null:this.at(W/le,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vn=class extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},_u=new rn,Ts=new ur,na=new Gi,yu=new j,ia=new j,sa=new j,ra=new j,Dc=new j,oa=new j,vu=new j,aa=new j,Vt=class extends dn{constructor(t=new Ze,e=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this.count=t.count,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=a[l],f=r[l];d!==0&&(Dc.fromBufferAttribute(f,t),o?oa.addScaledVector(Dc,d):oa.addScaledVector(Dc.sub(e),d))}e.add(oa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(r),Ts.copy(t.ray).recast(t.near),!(na.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(na,yu)===null||Ts.origin.distanceToSquared(yu)>(t.far-t.near)**2))&&(_u.copy(r).invert(),Ts.copy(t.ray).applyMatrix4(_u),!(n.boundingBox!==null&&Ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ts)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,m=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,R=m.length;_<R;_++){let p=m[_],y=o[p.materialIndex],P=Math.max(p.start,g.start),F=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let I=P,B=F;I<B;I+=3){let D=a.getX(I),A=a.getX(I+1),L=a.getX(I+2);s=la(this,y,t,n,c,d,f,D,A,L),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),R=Math.min(a.count,g.start+g.count);for(let p=_,y=R;p<y;p+=3){let P=a.getX(p),F=a.getX(p+1),I=a.getX(p+2);s=la(this,o,t,n,c,d,f,P,F,I),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,R=m.length;_<R;_++){let p=m[_],y=o[p.materialIndex],P=Math.max(p.start,g.start),F=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let I=P,B=F;I<B;I+=3){let D=I,A=I+1,L=I+2;s=la(this,y,t,n,c,d,f,D,A,L),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,g.start),R=Math.min(l.count,g.start+g.count);for(let p=_,y=R;p<y;p+=3){let P=p,F=p+1,I=p+2;s=la(this,o,t,n,c,d,f,P,F,I),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function lp(i,t,e,n,s,r,o,a){let l;if(t.side===kn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===_s,a),l===null)return null;aa.copy(a),aa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(aa);return c<e.near||c>e.far?null:{distance:c,point:aa.clone(),object:i}}function la(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ia),i.getVertexPosition(l,sa),i.getVertexPosition(c,ra);let d=lp(i,t,e,n,ia,sa,ra,vu);if(d){let f=new j;ji.getBarycoord(vu,ia,sa,ra,f),s&&(d.uv=ji.getInterpolatedAttribute(s,a,l,c,f,new Ct)),r&&(d.uv1=ji.getInterpolatedAttribute(r,a,l,c,f,new Ct)),o&&(d.normal=ji.getInterpolatedAttribute(o,a,l,c,f,new j),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let m={a,b:l,c,normal:new j,materialIndex:0};ji.getNormal(ia,sa,ra,m.normal),d.face=m,d.barycoord=f}return d}var jr=class extends ti{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Dn,d=Dn,f,m){super(null,o,a,l,c,d,s,r,f,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qr=class extends qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},er=new rn,Mu=new rn,ca=[],wu=new Hi,cp=new rn,Lr=new Vt,Dr=new Gi,ai=class extends Vt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,er),wu.copy(t.boundingBox).applyMatrix4(er),this.boundingBox.union(wu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,er),Dr.copy(t.boundingSphere).applyMatrix4(er),this.boundingSphere.union(Dr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(n),t.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,er),Mu.multiplyMatrices(n,er),Lr.matrixWorld=Mu,Lr.raycast(t,ca);for(let o=0,a=ca.length;o<a;o++){let l=ca[o];l.instanceId=r,l.object=this,e.push(l)}ca.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Qr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new jr(new Float32Array(s*this.count),s,this.count,pl,Ai));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Cs=new Gi,hp=new Ct(.5,.5),ha=new j,fs=class{constructor(t=new Fi,e=new Fi,n=new Fi,s=new Fi,r=new Fi,o=new Fi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xi,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],f=r[5],m=r[6],g=r[7],_=r[8],R=r[9],p=r[10],y=r[11],P=r[12],F=r[13],I=r[14],B=r[15];if(s[0].setComponents(c-o,g-d,y-_,B-P).normalize(),s[1].setComponents(c+o,g+d,y+_,B+P).normalize(),s[2].setComponents(c+a,g+f,y+R,B+F).normalize(),s[3].setComponents(c-a,g-f,y-R,B-F).normalize(),n)s[4].setComponents(l,m,p,I).normalize(),s[5].setComponents(c-l,g-m,y-p,B-I).normalize();else if(s[4].setComponents(c-l,g-m,y-p,B-I).normalize(),e===xi)s[5].setComponents(c+l,g+m,y+p,B+I).normalize();else if(e===ar)s[5].setComponents(l,m,p,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(t){Cs.center.set(0,0,0);let e=hp.distanceTo(t.center);return Cs.radius=.7071067811865476+e,Cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ha.x=s.normal.x>0?t.max.x:t.min.x,ha.y=s.normal.y>0?t.max.y:t.min.y,ha.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ha)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Su=new rn,Na=class i{constructor(){this.coordinateSystem=xi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Su.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new fs),n[s].setFromProjectionMatrix(Su,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new fs),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var es=class extends vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ua=new j,Ba=new j,bu=new rn,zr=new ur,ua=new Gi,zc=new j,Au=new j,Oa=class extends dn{constructor(t=new Ze,e=new es){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ua.fromBufferAttribute(e,s-1),Ba.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ua.distanceTo(Ba);t.setAttribute("lineDistance",new Ge(n,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,t.ray.intersectsSphere(ua)===!1)return;bu.copy(s).invert(),zr.copy(t.ray).applyMatrix4(bu);let a=r/s.getMaxScaleOnAxis(),l=a*a,c=this.isLineSegments?2:1,d=n.index,m=n.attributes.position;if(d!==null){let g=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let R=g,p=_-1;R<p;R+=c){let y=d.getX(R),P=d.getX(R+1),F=da(this,t,zr,l,y,P,R);F&&e.push(F)}if(this.isLineLoop){let R=d.getX(_-1),p=d.getX(g),y=da(this,t,zr,l,R,p,_-1);y&&e.push(y)}}else{let g=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let R=g,p=_-1;R<p;R+=c){let y=da(this,t,zr,l,R,R+1,R);y&&e.push(y)}if(this.isLineLoop){let R=da(this,t,zr,l,_-1,g,_-1);R&&e.push(R)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function da(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Ua.fromBufferAttribute(a,s),Ba.fromBufferAttribute(a,r),e.distanceSqToSegment(Ua,Ba,zc,Au)>n)return;zc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(zc);if(!(c<t.near||c>t.far))return{distance:c,point:Au.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Eu=new j,Tu=new j,ps=class extends Oa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Eu.fromBufferAttribute(e,s),Tu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Eu.distanceTo(Tu);t.setAttribute("lineDistance",new Ge(n,1))}else Ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Rs=class extends vi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Cu=new rn,Wc=new ur,fa=new Gi,pa=new j,dr=class extends dn{constructor(t=new Ze,e=new Rs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(s),fa.radius+=r,t.ray.intersectsSphere(fa)===!1)return;Cu.copy(s).invert(),Wc.copy(t.ray).applyMatrix4(Cu);let a=r/s.getMaxScaleOnAxis(),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let m=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let _=m,R=g;_<R;_++){let p=c.getX(_);pa.fromBufferAttribute(f,p),Ru(pa,p,l,s,t,e,this)}}else{let m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=m,R=g;_<R;_++)pa.fromBufferAttribute(f,_),Ru(pa,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ru(i,t,e,n,s,r,o){let a=Wc.distanceSqToPoint(i);if(a<e){let l=new j;Wc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var to=class extends ti{constructor(t=[],e=zs,n,s,r,o,a,l,c,d){super(t,e,n,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},eo=class extends ti{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ns=class extends ti{constructor(t,e,n=Li,s,r,o,a=Dn,l=Dn,c,d=ts,f=1){if(d!==ts&&d!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:t,height:e,depth:f};super(m,s,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},no=class extends ns{constructor(t,e=Li,n=zs,s,r,o=Dn,a=Dn,l,c=ts){let d={width:t,height:t,depth:1},f=[d,d,d,d,d,d];super(t,t,e,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},io=class extends ti{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},be=class i extends Ze{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],d=[],f=[],m=0,g=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(f,2));function _(R,p,y,P,F,I,B,D,A,L,$){let O=I/A,ot=B/L,dt=I/2,st=B/2,wt=D/2,ft=A+1,Bt=L+1,gt=0,Mt=0,vt=new j;for(let It=0;It<Bt;It++){let qt=It*ot-st;for(let $t=0;$t<ft;$t++){let pe=$t*O-dt;vt[R]=pe*P,vt[p]=qt*F,vt[y]=wt,c.push(vt.x,vt.y,vt.z),vt[R]=0,vt[p]=0,vt[y]=D>0?1:-1,d.push(vt.x,vt.y,vt.z),f.push($t/A),f.push(1-It/L),gt+=1}}for(let It=0;It<L;It++)for(let qt=0;qt<A;qt++){let $t=m+qt+ft*It,pe=m+qt+ft*(It+1),zt=m+(qt+1)+ft*(It+1),ne=m+(qt+1)+ft*It;l.push($t,pe,ne),l.push(pe,zt,ne),Mt+=6}a.addGroup(g,Mt,$),g+=Mt,m+=gt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Mi=class i extends Ze{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],d=e/2,f=Math.PI/2*t,m=e,g=2*f+m,_=n*2+r,R=s+1,p=new j,y=new j;for(let P=0;P<=_;P++){let F=0,I=0,B=0,D=0;if(P<=n){let $=P/n,O=$*Math.PI/2;I=-d-t*Math.cos(O),B=t*Math.sin(O),D=-t*Math.cos(O),F=$*f}else if(P<=n+r){let $=(P-n)/r;I=-d+$*e,B=t,D=0,F=f+$*m}else{let $=(P-n-r)/n,O=$*Math.PI/2;I=d+t*Math.sin(O),B=t*Math.cos(O),D=t*Math.sin(O),F=f+m+$*f}let A=Math.max(0,Math.min(1,F/g)),L=0;P===0?L=.5/s:P===_&&(L=-.5/s);for(let $=0;$<=s;$++){let O=$/s,ot=O*Math.PI*2,dt=Math.sin(ot),st=Math.cos(ot);y.x=-B*st,y.y=I,y.z=B*dt,a.push(y.x,y.y,y.z),p.set(-B*st,D,B*dt),p.normalize(),l.push(p.x,p.y,p.z),c.push(O+L,A)}if(P>0){let $=(P-1)*R;for(let O=0;O<s;O++){let ot=$+O,dt=$+O+1,st=P*R+O,wt=P*R+O+1;o.push(ot,dt,st),o.push(dt,wt,st)}}}this.setIndex(o),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Bn=class i extends Ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new j,d=new Ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,m=3;f<=e;f++,m+=3){let g=n+f/e*s;c.x=t*Math.cos(g),c.y=t*Math.sin(g),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[m]/t+1)/2,d.y=(o[m+1]/t+1)/2,l.push(d.x,d.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Ge(o,3)),this.setAttribute("normal",new Ge(a,3)),this.setAttribute("uv",new Ge(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},me=class i extends Ze{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],f=[],m=[],g=[],_=0,R=[],p=n/2,y=0;P(),o===!1&&(t>0&&F(!0),e>0&&F(!1)),this.setIndex(d),this.setAttribute("position",new Ge(f,3)),this.setAttribute("normal",new Ge(m,3)),this.setAttribute("uv",new Ge(g,2));function P(){let I=new j,B=new j,D=0,A=(e-t)/n;for(let L=0;L<=r;L++){let $=[],O=L/r,ot=O*(e-t)+t;for(let dt=0;dt<=s;dt++){let st=dt/s,wt=st*l+a,ft=Math.sin(wt),Bt=Math.cos(wt);B.x=ot*ft,B.y=-O*n+p,B.z=ot*Bt,f.push(B.x,B.y,B.z),I.set(ft,A,Bt).normalize(),m.push(I.x,I.y,I.z),g.push(st,1-O),$.push(_++)}R.push($)}for(let L=0;L<s;L++)for(let $=0;$<r;$++){let O=R[$][L],ot=R[$+1][L],dt=R[$+1][L+1],st=R[$][L+1];(t>0||$!==0)&&(d.push(O,ot,st),D+=3),(e>0||$!==r-1)&&(d.push(ot,dt,st),D+=3)}c.addGroup(y,D,0),y+=D}function F(I){let B=_,D=new Ct,A=new j,L=0,$=I===!0?t:e,O=I===!0?1:-1;for(let dt=1;dt<=s;dt++)f.push(0,p*O,0),m.push(0,O,0),g.push(.5,.5),_++;let ot=_;for(let dt=0;dt<=s;dt++){let wt=dt/s*l+a,ft=Math.cos(wt),Bt=Math.sin(wt);A.x=$*Bt,A.y=p*O,A.z=$*ft,f.push(A.x,A.y,A.z),m.push(0,O,0),D.x=ft*.5+.5,D.y=Bt*.5*O+.5,g.push(D.x,D.y),_++}for(let dt=0;dt<s;dt++){let st=B+dt,wt=ot+dt;I===!0?d.push(wt,wt+1,st):d.push(wt+1,wt,st),L+=3}c.addGroup(y,L,I===!0?1:2),y+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Mn=class i extends me{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},so=class i extends Ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),d(),this.setAttribute("position",new Ge(r,3)),this.setAttribute("normal",new Ge(r.slice(),3)),this.setAttribute("uv",new Ge(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(P){let F=new j,I=new j,B=new j;for(let D=0;D<e.length;D+=3)g(e[D+0],F),g(e[D+1],I),g(e[D+2],B),l(F,I,B,P)}function l(P,F,I,B){let D=B+1,A=[];for(let L=0;L<=D;L++){A[L]=[];let $=P.clone().lerp(I,L/D),O=F.clone().lerp(I,L/D),ot=D-L;for(let dt=0;dt<=ot;dt++)dt===0&&L===D?A[L][dt]=$:A[L][dt]=$.clone().lerp(O,dt/ot)}for(let L=0;L<D;L++)for(let $=0;$<2*(D-L)-1;$++){let O=Math.floor($/2);$%2===0?(m(A[L][O+1]),m(A[L+1][O]),m(A[L][O])):(m(A[L][O+1]),m(A[L+1][O+1]),m(A[L+1][O]))}}function c(P){let F=new j;for(let I=0;I<r.length;I+=3)F.x=r[I+0],F.y=r[I+1],F.z=r[I+2],F.normalize().multiplyScalar(P),r[I+0]=F.x,r[I+1]=F.y,r[I+2]=F.z}function d(){let P=new j;for(let F=0;F<r.length;F+=3){P.x=r[F+0],P.y=r[F+1],P.z=r[F+2];let I=p(P)/2/Math.PI+.5,B=y(P)/Math.PI+.5;o.push(I,1-B)}_(),f()}function f(){for(let P=0;P<o.length;P+=6){let F=o[P+0],I=o[P+2],B=o[P+4],D=Math.max(F,I,B),A=Math.min(F,I,B);D>.9&&A<.1&&(F<.2&&(o[P+0]+=1),I<.2&&(o[P+2]+=1),B<.2&&(o[P+4]+=1))}}function m(P){r.push(P.x,P.y,P.z)}function g(P,F){let I=P*3;F.x=t[I+0],F.y=t[I+1],F.z=t[I+2]}function _(){let P=new j,F=new j,I=new j,B=new j,D=new Ct,A=new Ct,L=new Ct;for(let $=0,O=0;$<r.length;$+=9,O+=6){P.set(r[$+0],r[$+1],r[$+2]),F.set(r[$+3],r[$+4],r[$+5]),I.set(r[$+6],r[$+7],r[$+8]),D.set(o[O+0],o[O+1]),A.set(o[O+2],o[O+3]),L.set(o[O+4],o[O+5]),B.copy(P).add(F).add(I).divideScalar(3);let ot=p(B);R(D,O+0,P,ot),R(A,O+2,F,ot),R(L,O+4,I,ot)}}function R(P,F,I,B){B<0&&P.x===1&&(o[F]=P.x-1),I.x===0&&I.z===0&&(o[F]=B/2/Math.PI+.5)}function p(P){return Math.atan2(P.z,-P.x)}function y(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},ni=class i extends so{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var li=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ue("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let d=n[s],m=n[s+1]-d,g=(o-d)/m;return(s+g)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Ct:new j);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new j,s=[],r=[],o=[],a=new j,l=new rn;for(let g=0;g<=t;g++){let _=g/t;s[g]=this.getTangentAt(_,new j)}r[0]=new j,o[0]=new j;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),f=Math.abs(s[0].y),m=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),m<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(s[g-1],s[g]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(Qe(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(a,_))}o[g].crossVectors(s[g],r[g])}if(e===!0){let g=Math.acos(Qe(r[0].dot(r[t]),-1,1));g/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(g=-g);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],g*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},fr=class extends li{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),m=l-this.aX,g=c-this.aY;l=m*d-g*f+this.aX,c=m*f+g*d+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ka=class extends fr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function vh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,d,f){let m=(o-r)/c-(a-r)/(c+d)+(a-o)/d,g=(a-o)/d-(l-o)/(d+f)+(l-a)/f;m*=d,g*=d,s(o,a,m,g)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Pu=new j,Iu=new j,Nc=new vh,Uc=new vh,Bc=new vh,Yn=class extends li{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new j){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,d;this.closed||a>0?c=s[(a-1)%r]:(Iu.subVectors(s[0],s[1]).add(s[0]),c=Iu);let f=s[a%r],m=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(Pu.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Pu),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(f),g),R=Math.pow(f.distanceToSquared(m),g),p=Math.pow(m.distanceToSquared(d),g);R<1e-4&&(R=1),_<1e-4&&(_=R),p<1e-4&&(p=R),Nc.initNonuniformCatmullRom(c.x,f.x,m.x,d.x,_,R,p),Uc.initNonuniformCatmullRom(c.y,f.y,m.y,d.y,_,R,p),Bc.initNonuniformCatmullRom(c.z,f.z,m.z,d.z,_,R,p)}else this.curveType==="catmullrom"&&(Nc.initCatmullRom(c.x,f.x,m.x,d.x,this.tension),Uc.initCatmullRom(c.y,f.y,m.y,d.y,this.tension),Bc.initCatmullRom(c.z,f.z,m.z,d.z,this.tension));return n.set(Nc.calc(l),Uc.calc(l),Bc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new j().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Fu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function up(i,t){let e=1-i;return e*e*t}function dp(i,t){return 2*(1-i)*i*t}function fp(i,t){return i*i*t}function Br(i,t,e,n){return up(i,t)+dp(i,e)+fp(i,n)}function pp(i,t){let e=1-i;return e*e*e*t}function mp(i,t){let e=1-i;return 3*e*e*i*t}function gp(i,t){return 3*(1-i)*i*i*t}function xp(i,t){return i*i*i*t}function Or(i,t,e,n,s){return pp(i,t)+mp(i,e)+gp(i,n)+xp(i,s)}var ro=class extends li{constructor(t=new Ct,e=new Ct,n=new Ct,s=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ct){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Or(t,s.x,r.x,o.x,a.x),Or(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Va=class extends li{constructor(t=new j,e=new j,n=new j,s=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Or(t,s.x,r.x,o.x,a.x),Or(t,s.y,r.y,o.y,a.y),Or(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},oo=class extends li{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ha=class extends li{constructor(t=new j,e=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new j){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ao=class extends li{constructor(t=new Ct,e=new Ct,n=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ct){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Br(t,s.x,r.x,o.x),Br(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ps=class extends li{constructor(t=new j,e=new j,n=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Br(t,s.x,r.x,o.x),Br(t,s.y,r.y,o.y),Br(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lo=class extends li{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],d=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Fu(a,l.x,c.x,d.x,f.x),Fu(a,l.y,c.y,d.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Ct().fromArray(s))}return this}},Ga=Object.freeze({__proto__:null,ArcCurve:ka,CatmullRomCurve3:Yn,CubicBezierCurve:ro,CubicBezierCurve3:Va,EllipseCurve:fr,LineCurve:oo,LineCurve3:Ha,QuadraticBezierCurve:ao,QuadraticBezierCurve3:Ps,SplineCurve:lo}),Wa=class extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ga[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let d=l[c];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ga[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},co=class extends Wa{constructor(t){super(),this.type="Path",this.currentPoint=new Ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new oo(this.currentPoint.clone(),new Ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ao(this.currentPoint.clone(),new Ct(t,e),new Ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new ro(this.currentPoint.clone(),new Ct(t,e),new Ct(n,s),new Ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new lo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+c,e+d,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new fr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},wi=class extends co{constructor(t){super(t),this.uuid=vs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new co().fromJSON(s))}return this}};function _p(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Pd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Sp(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let d=a,f=l;for(let m=e;m<s;m+=e){let g=i[m],_=i[m+1];g<a&&(a=g),_<l&&(l=_),g>d&&(d=g),_>f&&(f=_)}c=Math.max(d-a,f-l),c=c!==0?32767/c:0}return ho(r,o,e,a,l,c,0),o}function Pd(i,t,e,n,s){let r;if(s===Dp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Lu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Lu(o/n|0,i[o],i[o+1],r);return r&&pr(r,r.next)&&(fo(r),r=r.next),r}function Is(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(pr(e,e.next)||bn(e.prev,e,e.next)===0)){if(fo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ho(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Cp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?vp(i,n,s,r):yp(i)){t.push(l.i,i.i,c.i),fo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Mp(Is(i),t),ho(i,t,e,n,s,r,2)):o===2&&wp(i,t,e,n,s,r):ho(Is(i),t,e,n,s,r,1);break}}}function yp(i){let t=i.prev,e=i,n=i.next;if(bn(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,d=Math.min(s,r,o),f=Math.min(a,l,c),m=Math.max(s,r,o),g=Math.max(a,l,c),_=n.next;for(;_!==t;){if(_.x>=d&&_.x<=m&&_.y>=f&&_.y<=g&&Nr(s,a,r,l,o,c,_.x,_.y)&&bn(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function vp(i,t,e,n){let s=i.prev,r=i,o=i.next;if(bn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,d=s.y,f=r.y,m=o.y,g=Math.min(a,l,c),_=Math.min(d,f,m),R=Math.max(a,l,c),p=Math.max(d,f,m),y=Xc(g,_,t,e,n),P=Xc(R,p,t,e,n),F=i.prevZ,I=i.nextZ;for(;F&&F.z>=y&&I&&I.z<=P;){if(F.x>=g&&F.x<=R&&F.y>=_&&F.y<=p&&F!==s&&F!==o&&Nr(a,d,l,f,c,m,F.x,F.y)&&bn(F.prev,F,F.next)>=0||(F=F.prevZ,I.x>=g&&I.x<=R&&I.y>=_&&I.y<=p&&I!==s&&I!==o&&Nr(a,d,l,f,c,m,I.x,I.y)&&bn(I.prev,I,I.next)>=0))return!1;I=I.nextZ}for(;F&&F.z>=y;){if(F.x>=g&&F.x<=R&&F.y>=_&&F.y<=p&&F!==s&&F!==o&&Nr(a,d,l,f,c,m,F.x,F.y)&&bn(F.prev,F,F.next)>=0)return!1;F=F.prevZ}for(;I&&I.z<=P;){if(I.x>=g&&I.x<=R&&I.y>=_&&I.y<=p&&I!==s&&I!==o&&Nr(a,d,l,f,c,m,I.x,I.y)&&bn(I.prev,I,I.next)>=0)return!1;I=I.nextZ}return!0}function Mp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!pr(n,s)&&Fd(n,e,e.next,s)&&uo(n,s)&&uo(s,n)&&(t.push(n.i,e.i,s.i),fo(e),fo(e.next),e=i=s),e=e.next}while(e!==i);return Is(e)}function wp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ip(o,a)){let l=Ld(o,a);o=Is(o,o.next),l=Is(l,l.next),ho(o,t,e,n,s,r,0),ho(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Sp(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Pd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Pp(c))}s.sort(bp);for(let r=0;r<s.length;r++)e=Ap(s[r],e);return e}function bp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Ap(i,t){let e=Ep(i,t);if(!e)return t;let n=Ld(e,i);return Is(n,n.next),Is(e,e.next)}function Ep(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(pr(i,e))return e;do{if(pr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,d=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Id(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);uo(e,i)&&(f<d||f===d&&(e.x>o.x||e.x===o.x&&Tp(o,e)))&&(o=e,d=f)}e=e.next}while(e!==a);return o}function Tp(i,t){return bn(i.prev,i,t.prev)<0&&bn(t.next,i,i.next)<0}function Cp(i,t,e,n){let s=i;do s.z===0&&(s.z=Xc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Rp(s)}function Rp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Xc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Pp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Id(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Nr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Id(i,t,e,n,s,r,o,a)}function Ip(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Fp(i,t)&&(uo(i,t)&&uo(t,i)&&Lp(i,t)&&(bn(i.prev,i,t.prev)||bn(i,t.prev,t))||pr(i,t)&&bn(i.prev,i,i.next)>0&&bn(t.prev,t,t.next)>0)}function bn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function pr(i,t){return i.x===t.x&&i.y===t.y}function Fd(i,t,e,n){let s=ga(bn(i,t,e)),r=ga(bn(i,t,n)),o=ga(bn(e,n,i)),a=ga(bn(e,n,t));return!!(s!==r&&o!==a||s===0&&ma(i,e,t)||r===0&&ma(i,n,t)||o===0&&ma(e,i,n)||a===0&&ma(e,t,n))}function ma(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ga(i){return i>0?1:i<0?-1:0}function Fp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Fd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function uo(i,t){return bn(i.prev,i,i.next)<0?bn(i,t,i.next)>=0&&bn(i,i.prev,t)>=0:bn(i,t,i.prev)<0||bn(i,i.next,t)<0}function Lp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ld(i,t){let e=qc(i.i,i.x,i.y),n=qc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Lu(i,t,e,n){let s=qc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Dp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Yc=class{static triangulate(t,e,n=2){return _p(t,e,n)}},ki=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Du(t),zu(n,t);let o=t.length;e.forEach(Du);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,zu(n,e[l]);let a=Yc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Du(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function zu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var po=class i extends Ze{constructor(t=new wi([new Ct(.5,.5),new Ct(-.5,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Ge(s,3)),this.setAttribute("uv",new Ge(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:g-.1,R=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,y=e.extrudePath,P=e.UVGenerator!==void 0?e.UVGenerator:zp,F,I=!1,B,D,A,L;if(y){F=y.getSpacedPoints(d),I=!0,m=!1;let rt=y.isCatmullRomCurve3?y.closed:!1;B=y.computeFrenetFrames(d,rt),D=new j,A=new j,L=new j}m||(p=0,g=0,_=0,R=0);let $=a.extractPoints(c),O=$.shape,ot=$.holes;if(!ki.isClockWise(O)){O=O.reverse();for(let rt=0,mt=ot.length;rt<mt;rt++){let K=ot[rt];ki.isClockWise(K)&&(ot[rt]=K.reverse())}}function st(rt){let K=10000000000000001e-36,pt=rt[0];for(let lt=1;lt<=rt.length;lt++){let ht=lt%rt.length,xt=rt[ht],u=xt.x-pt.x,M=xt.y-pt.y,Y=u*u+M*M,C=Math.max(Math.abs(xt.x),Math.abs(xt.y),Math.abs(pt.x),Math.abs(pt.y)),_t=K*C*C;if(Y<=_t){rt.splice(ht,1),lt--;continue}pt=xt}}st(O),ot.forEach(st);let wt=ot.length,ft=O;for(let rt=0;rt<wt;rt++){let mt=ot[rt];O=O.concat(mt)}function Bt(rt,mt,K){return mt||Oe("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(mt,K)}let gt=O.length;function Mt(rt,mt,K){let pt,lt,ht,xt=rt.x-mt.x,u=rt.y-mt.y,M=K.x-rt.x,Y=K.y-rt.y,C=xt*xt+u*u,_t=xt*Y-u*M;if(Math.abs(_t)>Number.EPSILON){let H=Math.sqrt(C),V=Math.sqrt(M*M+Y*Y),G=mt.x-u/H,Dt=mt.y+xt/H,yt=K.x-Y/V,Et=K.y+M/V,U=((yt-G)*Y-(Et-Dt)*M)/(xt*Y-u*M);pt=G+xt*U-rt.x,lt=Dt+u*U-rt.y;let b=pt*pt+lt*lt;if(b<=2)return new Ct(pt,lt);ht=Math.sqrt(b/2)}else{let H=!1;xt>Number.EPSILON?M>Number.EPSILON&&(H=!0):xt<-Number.EPSILON?M<-Number.EPSILON&&(H=!0):Math.sign(u)===Math.sign(Y)&&(H=!0),H?(pt=-u,lt=xt,ht=Math.sqrt(C)):(pt=xt,lt=u,ht=Math.sqrt(C/2))}return new Ct(pt/ht,lt/ht)}let vt=[];for(let rt=0,mt=ft.length,K=mt-1,pt=rt+1;rt<mt;rt++,K++,pt++)K===mt&&(K=0),pt===mt&&(pt=0),vt[rt]=Mt(ft[rt],ft[K],ft[pt]);let It=[],qt,$t=vt.concat();for(let rt=0,mt=wt;rt<mt;rt++){let K=ot[rt];qt=[];for(let pt=0,lt=K.length,ht=lt-1,xt=pt+1;pt<lt;pt++,ht++,xt++)ht===lt&&(ht=0),xt===lt&&(xt=0),qt[pt]=Mt(K[pt],K[ht],K[xt]);It.push(qt),$t=$t.concat(qt)}let pe;if(p===0)pe=ki.triangulateShape(ft,ot);else{let rt=[],mt=[];for(let K=0;K<p;K++){let pt=K/p,lt=g*Math.cos(pt*Math.PI/2),ht=_*Math.sin(pt*Math.PI/2)+R;for(let xt=0,u=ft.length;xt<u;xt++){let M=Bt(ft[xt],vt[xt],ht);ye(M.x,M.y,-lt),pt===0&&rt.push(M)}for(let xt=0,u=wt;xt<u;xt++){let M=ot[xt];qt=It[xt];let Y=[];for(let C=0,_t=M.length;C<_t;C++){let H=Bt(M[C],qt[C],ht);ye(H.x,H.y,-lt),pt===0&&Y.push(H)}pt===0&&mt.push(Y)}}pe=ki.triangulateShape(rt,mt)}let zt=pe.length,ne=_+R;for(let rt=0;rt<gt;rt++){let mt=m?Bt(O[rt],$t[rt],ne):O[rt];I?(A.copy(B.normals[0]).multiplyScalar(mt.x),D.copy(B.binormals[0]).multiplyScalar(mt.y),L.copy(F[0]).add(A).add(D),ye(L.x,L.y,L.z)):ye(mt.x,mt.y,0)}for(let rt=1;rt<=d;rt++)for(let mt=0;mt<gt;mt++){let K=m?Bt(O[mt],$t[mt],ne):O[mt];I?(A.copy(B.normals[rt]).multiplyScalar(K.x),D.copy(B.binormals[rt]).multiplyScalar(K.y),L.copy(F[rt]).add(A).add(D),ye(L.x,L.y,L.z)):ye(K.x,K.y,f/d*rt)}for(let rt=p-1;rt>=0;rt--){let mt=rt/p,K=g*Math.cos(mt*Math.PI/2),pt=_*Math.sin(mt*Math.PI/2)+R;for(let lt=0,ht=ft.length;lt<ht;lt++){let xt=Bt(ft[lt],vt[lt],pt);ye(xt.x,xt.y,f+K)}for(let lt=0,ht=ot.length;lt<ht;lt++){let xt=ot[lt];qt=It[lt];for(let u=0,M=xt.length;u<M;u++){let Y=Bt(xt[u],qt[u],pt);I?ye(Y.x,Y.y+F[d-1].y,F[d-1].x+K):ye(Y.x,Y.y,f+K)}}}he(),_e();function he(){let rt=s.length/3;if(m){let mt=0,K=gt*mt;for(let pt=0;pt<zt;pt++){let lt=pe[pt];Fe(lt[2]+K,lt[1]+K,lt[0]+K)}mt=d+p*2,K=gt*mt;for(let pt=0;pt<zt;pt++){let lt=pe[pt];Fe(lt[0]+K,lt[1]+K,lt[2]+K)}}else{for(let mt=0;mt<zt;mt++){let K=pe[mt];Fe(K[2],K[1],K[0])}for(let mt=0;mt<zt;mt++){let K=pe[mt];Fe(K[0]+gt*d,K[1]+gt*d,K[2]+gt*d)}}n.addGroup(rt,s.length/3-rt,0)}function _e(){let rt=s.length/3,mt=0;Jt(ft,mt),mt+=ft.length;for(let K=0,pt=ot.length;K<pt;K++){let lt=ot[K];Jt(lt,mt),mt+=lt.length}n.addGroup(rt,s.length/3-rt,1)}function Jt(rt,mt){let K=rt.length;for(;--K>=0;){let pt=K,lt=K-1;lt<0&&(lt=rt.length-1);for(let ht=0,xt=d+p*2;ht<xt;ht++){let u=gt*ht,M=gt*(ht+1),Y=mt+pt+u,C=mt+lt+u,_t=mt+lt+M,H=mt+pt+M;le(Y,C,_t,H)}}}function ye(rt,mt,K){l.push(rt),l.push(mt),l.push(K)}function Fe(rt,mt,K){W(rt),W(mt),W(K);let pt=s.length/3,lt=P.generateTopUV(n,s,pt-3,pt-2,pt-1);St(lt[0]),St(lt[1]),St(lt[2])}function le(rt,mt,K,pt){W(rt),W(mt),W(pt),W(mt),W(K),W(pt);let lt=s.length/3,ht=P.generateSideWallUV(n,s,lt-6,lt-3,lt-2,lt-1);St(ht[0]),St(ht[1]),St(ht[3]),St(ht[1]),St(ht[2]),St(ht[3])}function W(rt){s.push(l[rt*3+0]),s.push(l[rt*3+1]),s.push(l[rt*3+2])}function St(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Np(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ga[s.type]().fromJSON(s)),new i(n,t.options)}},zp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],d=t[s*3+1];return[new Ct(r,o),new Ct(a,l),new Ct(c,d)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],d=t[n*3+1],f=t[n*3+2],m=t[s*3],g=t[s*3+1],_=t[s*3+2],R=t[r*3],p=t[r*3+1],y=t[r*3+2];return Math.abs(a-d)<Math.abs(o-c)?[new Ct(o,1-l),new Ct(c,1-f),new Ct(m,1-_),new Ct(R,1-y)]:[new Ct(a,1-l),new Ct(d,1-f),new Ct(g,1-_),new Ct(p,1-y)]}};function Np(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var gn=class i extends so{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Zn=class i extends Ze{constructor(t=[new Ct(0,-.5),new Ct(.5,0),new Ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Qe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],d=1/e,f=new j,m=new Ct,g=new j,_=new j,R=new j,p=0,y=0;for(let P=0;P<=t.length-1;P++)switch(P){case 0:p=t[P+1].x-t[P].x,y=t[P+1].y-t[P].y,g.x=y*1,g.y=-p,g.z=y*0,R.copy(g),g.normalize(),l.push(g.x,g.y,g.z);break;case t.length-1:R.normalize(),l.push(R.x,R.y,R.z);break;default:p=t[P+1].x-t[P].x,y=t[P+1].y-t[P].y,g.x=y*1,g.y=-p,g.z=y*0,_.copy(g),g.x+=R.x,g.y+=R.y,g.z+=R.z,g.normalize(),l.push(g.x,g.y,g.z),R.copy(_)}for(let P=0;P<=e;P++){let F=n+P*d*s,I=Math.sin(F),B=Math.cos(F);for(let D=0;D<=t.length-1;D++){f.x=t[D].x*I,f.y=t[D].y,f.z=t[D].x*B,o.push(f.x,f.y,f.z),m.x=P/e,m.y=D/(t.length-1),a.push(m.x,m.y);let A=l[3*D+0]*I,L=l[3*D+1],$=l[3*D+0]*B;c.push(A,L,$)}}for(let P=0;P<e;P++)for(let F=0;F<t.length-1;F++){let I=F+P*t.length,B=I,D=I+t.length,A=I+t.length+1,L=I+1;r.push(B,D,L),r.push(A,L,D)}this.setIndex(r),this.setAttribute("position",new Ge(o,3)),this.setAttribute("uv",new Ge(a,2)),this.setAttribute("normal",new Ge(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var xn=class i extends Ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,d=l+1,f=t/a,m=e/l,g=[],_=[],R=[],p=[];for(let y=0;y<d;y++){let P=y*m-o;for(let F=0;F<c;F++){let I=F*f-r;_.push(I,-P,0),R.push(0,0,1),p.push(F/a),p.push(1-y/l)}}for(let y=0;y<l;y++)for(let P=0;P<a;P++){let F=P+c*y,I=P+c*(y+1),B=P+1+c*(y+1),D=P+1+c*y;g.push(F,I,D),g.push(I,B,D)}this.setIndex(g),this.setAttribute("position",new Ge(_,3)),this.setAttribute("normal",new Ge(R,3)),this.setAttribute("uv",new Ge(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},mo=class i extends Ze{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],d=[],f=t,m=(e-t)/s,g=new j,_=new Ct;for(let R=0;R<=s;R++){for(let p=0;p<=n;p++){let y=r+p/n*o;g.x=f*Math.cos(y),g.y=f*Math.sin(y),l.push(g.x,g.y,g.z),c.push(0,0,1),_.x=(g.x/e+1)/2,_.y=(g.y/e+1)/2,d.push(_.x,_.y)}f+=m}for(let R=0;R<s;R++){let p=R*(n+1);for(let y=0;y<n;y++){let P=y+p,F=P,I=P+n+1,B=P+n+2,D=P+1;a.push(F,I,D),a.push(I,B,D)}}this.setIndex(a),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},is=class i extends Ze{constructor(t=new wi([new Ct(0,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let d=0;d<t.length;d++)c(t[d]),this.addGroup(a,l,d),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ge(s,3)),this.setAttribute("normal",new Ge(r,3)),this.setAttribute("uv",new Ge(o,2));function c(d){let f=s.length/3,m=d.extractPoints(e),g=m.shape,_=m.holes;ki.isClockWise(g)===!1&&(g=g.reverse());for(let p=0,y=_.length;p<y;p++){let P=_[p];ki.isClockWise(P)===!0&&(_[p]=P.reverse())}let R=ki.triangulateShape(g,_);for(let p=0,y=_.length;p<y;p++){let P=_[p];g=g.concat(P)}for(let p=0,y=g.length;p<y;p++){let P=g[p];s.push(P.x,P.y,0),r.push(0,0,1),o.push(P.x,P.y)}for(let p=0,y=R.length;p<y;p++){let P=R[p],F=P[0]+f,I=P[1]+f,B=P[2]+f;n.push(F,I,B),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Up(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Up(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ee=class i extends Ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,d=[],f=new j,m=new j,g=[],_=[],R=[],p=[];for(let y=0;y<=n;y++){let P=[],F=y/n,I=o+F*a,B=t*Math.cos(I),D=Math.sqrt(t*t-B*B),A=0;y===0&&o===0?A=.5/e:y===n&&l===Math.PI&&(A=-.5/e);for(let L=0;L<=e;L++){let $=L/e,O=s+$*r;f.x=-D*Math.cos(O),f.y=B,f.z=D*Math.sin(O),_.push(f.x,f.y,f.z),m.copy(f).normalize(),R.push(m.x,m.y,m.z),p.push($+A,1-F),P.push(c++)}d.push(P)}for(let y=0;y<n;y++)for(let P=0;P<e;P++){let F=d[y][P+1],I=d[y][P],B=d[y+1][P],D=d[y+1][P+1];(y!==0||o>0)&&g.push(F,I,D),(y!==n-1||l<Math.PI)&&g.push(I,B,D)}this.setIndex(g),this.setAttribute("position",new Ge(_,3)),this.setAttribute("normal",new Ge(R,3)),this.setAttribute("uv",new Ge(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ci=class i extends Ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],d=[],f=[],m=new j,g=new j,_=new j;for(let R=0;R<=n;R++){let p=o+R/n*a;for(let y=0;y<=s;y++){let P=y/s*r;g.x=(t+e*Math.cos(p))*Math.cos(P),g.y=(t+e*Math.cos(p))*Math.sin(P),g.z=e*Math.sin(p),c.push(g.x,g.y,g.z),m.x=t*Math.cos(P),m.y=t*Math.sin(P),_.subVectors(g,m).normalize(),d.push(_.x,_.y,_.z),f.push(y/s),f.push(R/n)}}for(let R=1;R<=n;R++)for(let p=1;p<=s;p++){let y=(s+1)*R+p-1,P=(s+1)*(R-1)+p-1,F=(s+1)*(R-1)+p,I=(s+1)*R+p;l.push(y,P,I),l.push(P,F,I)}this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(d,3)),this.setAttribute("uv",new Ge(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Si=class i extends Ze{constructor(t=new Ps(new j(-1,-1,0),new j(-1,1,0),new j(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new j,l=new j,c=new Ct,d=new j,f=[],m=[],g=[],_=[];R(),this.setIndex(_),this.setAttribute("position",new Ge(f,3)),this.setAttribute("normal",new Ge(m,3)),this.setAttribute("uv",new Ge(g,2));function R(){for(let F=0;F<e;F++)p(F);p(r===!1?e:0),P(),y()}function p(F){d=t.getPointAt(F/e,d);let I=o.normals[F],B=o.binormals[F];for(let D=0;D<=s;D++){let A=D/s*Math.PI*2,L=Math.sin(A),$=-Math.cos(A);l.x=$*I.x+L*B.x,l.y=$*I.y+L*B.y,l.z=$*I.z+L*B.z,l.normalize(),m.push(l.x,l.y,l.z),a.x=d.x+n*l.x,a.y=d.y+n*l.y,a.z=d.z+n*l.z,f.push(a.x,a.y,a.z)}}function y(){for(let F=1;F<=e;F++)for(let I=1;I<=s;I++){let B=(s+1)*(F-1)+(I-1),D=(s+1)*F+(I-1),A=(s+1)*F+I,L=(s+1)*(F-1)+I;_.push(B,D,L),_.push(D,A,L)}}function P(){for(let F=0;F<=e;F++)for(let I=0;I<=s;I++)c.x=F/e,c.y=I/s,g.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Ga[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Us(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Nu(s))s.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Nu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Jn(i){let t={};for(let e=0;e<i.length;e++){let n=Us(i[e]);for(let s in n)t[s]=n[s]}return t}function Nu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Bp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Mh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:tn.workingColorSpace}var Dd={clone:Us,merge:Jn},Op=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bi=class extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Op,this.fragmentShader=kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=Bp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.linewidth=t.linewidth,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ie().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ct().fromArray(s.value);break;case"v3":this.uniforms[n].value=new j().fromArray(s.value);break;case"v4":this.uniforms[n].value=new fn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new We().fromArray(s.value);break;case"m4":this.uniforms[n].value=new rn().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Xa=class extends bi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var On=class extends vi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ie(16777215),this.specular=new Ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=wo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Te=class extends vi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=wo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},qa=class extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ya=class extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function nr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function xa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ms=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Za=class extends ms{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vc,endingEnd:Vc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hc:r=t,a=2*e-n;break;case Gc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hc:o=t,l=2*n-e;break;case Gc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,d=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=this._offsetPrev,f=this._offsetNext,m=this._weightPrev,g=this._weightNext,_=(n-e)/(s-e),R=_*_,p=R*_,y=-m*p+2*m*R-m*_,P=(1+m)*p+(-1.5-2*m)*R+(-.5+m)*_+1,F=(-1-g)*p+(1.5+g)*R+.5*_,I=g*p-g*R;for(let B=0;B!==a;++B)r[B]=y*o[d+B]+P*o[c+B]+F*o[l+B]+I*o[f+B];return r}},Ja=class extends ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=(n-e)/(s-e),f=1-d;for(let m=0;m!==a;++m)r[m]=o[c+m]*f+o[l+m]*d;return r}},$a=class extends ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ka=class extends ms{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,d=this.inTangents,f=this.outTangents;if(!d||!f){let _=(n-e)/(s-e),R=1-_;for(let p=0;p!==a;++p)r[p]=o[c+p]*R+o[l+p]*_;return r}let m=a*2,g=t-1;for(let _=0;_!==a;++_){let R=o[c+_],p=o[l+_],y=g*m+_*2,P=f[y],F=f[y+1],I=t*m+_*2,B=d[I],D=d[I+1],A=Hp(n,e,P,B,s);r[_]=zd(A,R,F,D,p)}return r}};function zd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Vp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Hp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=zd(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Vp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var hi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=nr(e,this.TimeBufferType),this.values=nr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:nr(t.times,Array),values:nr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),xa(t.settings)&&(n.settings={inTangents:nr(t.settings.inTangents,Array),outTangents:nr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ka(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case kr:e=this.InterpolantFactoryMethodDiscrete;break;case Pa:e=this.InterpolantFactoryMethodLinear;break;case va:e=this.InterpolantFactoryMethodSmooth;break;case kc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ue("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return Pa;case this.InterpolantFactoryMethodSmooth:return va;case this.InterpolantFactoryMethodBezier:return kc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;xa(this.settings)&&(Uu(this.settings.inTangents,t),Uu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;xa(this.settings)&&(Bu(this.settings.inTangents,t),Bu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Oe("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Oe("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Oe("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Wf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Oe("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===va,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],d=t[a+1];if(c!==d&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,m=f-n,g=f+n;for(let _=0;_!==n;++_){let R=e[f+_];if(R!==e[m+_]||R!==e[g+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,m=o*n;for(let g=0;g!==n;++g)e[m+g]=e[f+g]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,xa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Uu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Bu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}hi.prototype.ValueTypeName="";hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=Pa;var gs=class extends hi{constructor(t,e,n){super(t,e,n)}};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=kr;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}};ja.prototype.ValueTypeName="color";var Qa=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}};Qa.prototype.ValueTypeName="number";var tl=class extends ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let d=c+a;c!==d;c+=4)_i.slerpFlat(r,0,o,c-a,o,c,l);return r}},go=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new tl(this.times,this.values,this.getValueSize(),t)}};go.prototype.ValueTypeName="quaternion";go.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends hi{constructor(t,e,n){super(t,e,n)}};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=kr;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}};el.prototype.ValueTypeName="vector";var nl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){let f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,m=c.length;f<m;f+=2){let g=c[f],_=c[f+1];if(g.global&&(g.lastIndex=0),g.test(d))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Nd=new nl,il=class{constructor(t){this.manager=t!==void 0?t:Nd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};il.DEFAULT_MATERIAL_NAME="__DEFAULT";var xo=class extends dn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},_o=class extends xo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Oc=new rn,Ou=new j,ku=new j,sl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.filterNode=null,this.shadowNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fs,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new fn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ou.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ou),ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ku),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Oc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Oc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ar||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Oc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this.filterNode=t.filterNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},_a=new j,ya=new _i,Bi=new j,yo=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_a,ya,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,ya,Bi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){let s=super.updateWorldMatrix(t,e,n);return this.matrixWorld.decompose(_a,ya,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,ya,Bi.set(1,1,1)).invert(),s}clone(){return new this.constructor().copy(this)}},us=new j,Vu=new Ct,Hu=new Ct,Xn=class extends yo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(us.x,us.y).multiplyScalar(-t/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(us.x,us.y).multiplyScalar(-t/us.z)}getViewSize(t,e){return this.getViewBounds(t,Vu,Hu),e.subVectors(Hu,Vu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var vo=class extends yo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Zc=class extends sl{constructor(){super(new vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mo=class extends xo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new Zc}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ir=-90,sr=1,mr=class extends dn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xn(ir,sr,t,e);s.layers=this.layers,this.add(s);let r=new Xn(ir,sr,t,e);r.layers=this.layers,this.add(r);let o=new Xn(ir,sr,t,e);o.layers=this.layers,this.add(o);let a=new Xn(ir,sr,t,e);a.layers=this.layers,this.add(a);let l=new Xn(ir,sr,t,e);l.layers=this.layers,this.add(l);let c=new Xn(ir,sr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===xi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,d]=this.children,f=t.getRenderTarget(),m=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let R=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=R,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(f,m,g),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},rl=class extends Xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var wh="\\[\\]\\.:\\/",Gp=new RegExp("["+wh+"]","g"),Sh="[^"+wh+"]",Wp="[^"+wh.replace("\\.","")+"]",Xp=/((?:WC+[\/:])*)/.source.replace("WC",Sh),qp=/(WCOD+)?/.source.replace("WCOD",Wp),Yp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sh),Zp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sh),Jp=new RegExp("^"+Xp+qp+Yp+Zp+"$"),$p=["material","materials","bones","map"],Jc=class{constructor(t,e,n){let s=n||mn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},mn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Gp,"")}static parseTrackName(t){let e=Jp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$p.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===c){c=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Oe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mn.Composite=Jc;mn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mn.prototype.GetterByBindingType=[mn.prototype._getValue_direct,mn.prototype._getValue_array,mn.prototype._getValue_arrayElement,mn.prototype._getValue_toArray];mn.prototype.SetterByBindingTypeAndVersioning=[[mn.prototype._setValue_direct,mn.prototype._setValue_direct_setNeedsUpdate,mn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_array,mn.prototype._setValue_array_setNeedsUpdate,mn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_arrayElement,mn.prototype._setValue_arrayElement_setNeedsUpdate,mn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_fromArray,mn.prototype._setValue_fromArray_setNeedsUpdate,mn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var t_=new Float32Array(1);var Rh=class Rh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Rh.prototype.isMatrix2=!0;var $c=Rh;function bh(i,t,e,n){let s=Kp(n);switch(e){case fh:return i*t;case pl:return i*t/s.components*s.byteLength;case ml:return i*t/s.components*s.byteLength;case ys:return i*t*2/s.components*s.byteLength;case gl:return i*t*2/s.components*s.byteLength;case ph:return i*t*3/s.components*s.byteLength;case zi:return i*t*4/s.components*s.byteLength;case xl:return i*t*4/s.components*s.byteLength;case Ao:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case To:case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yl:case Ml:return Math.max(i,16)*Math.max(t,8)/4;case _l:case vl:return Math.max(i,8)*Math.max(t,8)/2;case wl:case Sl:case Al:case El:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bl:case Ro:case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case kl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Hl:case Gl:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Xl:case ql:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Po:case Yl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kp(i){switch(i){case ii:case ch:return{byteLength:1,components:1};case yr:case hh:case Di:return{byteLength:2,components:1};case dl:case fl:return{byteLength:2,components:4};case Li:case ul:case Ai:return{byteLength:4,components:1};case uh:case dh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:al}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=al);function rf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function jp(i){let t=new WeakMap;function e(a,l){let c=a.array,d=a.usage,f=c.byteLength,m=i.createBuffer();i.bindBuffer(l,m),i.bufferData(l,c,d),a.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let d=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,d);else{f.sort((g,_)=>g.start-_.start);let m=0;for(let g=1;g<f.length;g++){let _=f[m],R=f[g];R.start<=_.start+_.count+1?_.count=Math.max(_.count,R.start+R.count-_.start):(++m,f[m]=R)}f.length=m+1;for(let g=0,_=f.length;g<_;g++){let R=f[g];i.bufferSubData(c,R.start*d.BYTES_PER_ELEMENT,d,R.start,R.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,e0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	#if defined( STANDARD )
		reflectedLight.indirectDiffuse *= computeMultiBounceOcclusion( ambientOcclusion, material.diffuseContribution );
	#else
		reflectedLight.indirectDiffuse *= ambientOcclusion;
	#endif
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= computeSpecularOcclusion( saturate( dot( geometryClearcoatNormal, geometryViewDir ) ), ambientOcclusion, material.clearcoatRoughness );
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		float specularOcclusion = computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
		reflectedLight.indirectSpecular *= computeMultiBounceOcclusion( specularOcclusion, material.specularColorBlended );
	#endif
#endif`,o0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,l0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,d0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,f0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,v0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,M0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,w0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,S0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,b0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C0="gl_FragColor = linearToOutputTexel( gl_FragColor );",R0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( textureLod( gradientMap, coord, 0.0 ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,k0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
vec3 getIndirectLightRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if ( NUM_HEMI_LIGHTS > 0 )
		vec3 reflectVec = normalize( mix( reflect( - viewDir, normal ), normal, pow4( roughness ) ) );
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], reflectVec );
		}
		#pragma unroll_loop_end
	#endif
	return irradiance * RECIPROCAL_PI;
}
#include <lightprobes_pars_fragment>`,W0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,X0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = textureLod( dfgLUT, vec2( roughness, dotNV ), 0.0 ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = textureLod( ltc_1, uv, 0.0 );
		vec4 t2 = textureLod( ltc_2, uv, 0.0 );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = textureLod( ltc_1, uvClearcoat, 0.0 );
			vec4 t2Clearcoat = textureLod( ltc_2, uvClearcoat, 0.0 );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 indirectSpecular = radiance * ( singleScattering + multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}
vec3 computeMultiBounceOcclusion( const in float visibility, const in vec3 albedo ) {
	vec3 a = 2.0404 * albedo - 0.3324;
	vec3 b = - 4.7951 * albedo + 0.6417;
	vec3 c = 2.7552 * albedo + 0.6903;
	return max( vec3( visibility ), ( ( visibility * a + b ) * visibility + c ) * visibility );
}`,K0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = textureLod( dfgLUT, vec2( material.roughness, dotNVms ), 0.0 ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal ) * probesIntensity[ i ];
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = getIndirectLightRadiance( geometryViewDir, geometryNormal, material.roughness );
	vec3 clearcoatRadiance = vec3( 0.0 );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIndirectLightRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,j0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			irradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tm=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
uniform float probesIntensity[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5 * step( 1.5, probesResolution );
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = textureLod( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ), 0.0 );
	vec4 s1 = textureLod( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ), 0.0 );
	vec4 s2 = textureLod( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ), 0.0 );
	vec4 s3 = textureLod( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ), 0.0 );
	vec4 s4 = textureLod( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ), 0.0 );
	vec4 s5 = textureLod( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ), 0.0 );
	vec4 s6 = textureLod( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ), 0.0 );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,om=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,um=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = textureLod( shadowMap, shadowCoord.xy, 0.0 ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = textureLod( shadowMap, shadowCoord.xy, 0.0 ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureLod( shadowMap, bd3D, 0.0 ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Um=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Om=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ym=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,og=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ag=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ig=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Qp,alphahash_pars_fragment:t0,alphamap_fragment:e0,alphamap_pars_fragment:n0,alphatest_fragment:i0,alphatest_pars_fragment:s0,aomap_fragment:r0,aomap_pars_fragment:o0,batching_pars_vertex:a0,batching_vertex:l0,begin_vertex:c0,beginnormal_vertex:h0,bsdfs:u0,iridescence_fragment:d0,bumpmap_pars_fragment:f0,clipping_planes_fragment:p0,clipping_planes_pars_fragment:m0,clipping_planes_pars_vertex:g0,clipping_planes_vertex:x0,color_fragment:_0,color_pars_fragment:y0,color_pars_vertex:v0,color_vertex:M0,common:w0,defaultnormal_vertex:S0,displacementmap_pars_vertex:b0,displacementmap_vertex:A0,emissivemap_fragment:E0,emissivemap_pars_fragment:T0,colorspace_fragment:C0,colorspace_pars_fragment:R0,envmap_fragment:P0,envmap_common_pars_fragment:I0,envmap_pars_fragment:F0,envmap_pars_vertex:L0,envmap_physical_pars_fragment:W0,envmap_vertex:D0,fog_vertex:z0,fog_pars_vertex:N0,fog_fragment:U0,fog_pars_fragment:B0,gradientmap_pars_fragment:O0,lightmap_pars_fragment:k0,lights_lambert_fragment:V0,lights_lambert_pars_fragment:H0,lights_pars_begin:G0,lights_toon_fragment:X0,lights_toon_pars_fragment:q0,lights_phong_fragment:Y0,lights_phong_pars_fragment:Z0,lights_physical_fragment:J0,lights_physical_pars_fragment:$0,lights_fragment_begin:K0,lights_fragment_maps:j0,lights_fragment_end:Q0,lightprobes_pars_fragment:tm,logdepthbuf_fragment:em,logdepthbuf_pars_fragment:nm,logdepthbuf_pars_vertex:im,logdepthbuf_vertex:sm,map_fragment:rm,map_pars_fragment:om,map_particle_fragment:am,map_particle_pars_fragment:lm,metalnessmap_fragment:cm,metalnessmap_pars_fragment:hm,morphinstance_vertex:um,morphcolor_vertex:dm,morphnormal_vertex:fm,morphtarget_pars_vertex:pm,morphtarget_vertex:mm,normal_fragment_begin:gm,normal_fragment_maps:xm,normal_pars_fragment:_m,normal_pars_vertex:ym,normal_vertex:vm,normalmap_pars_fragment:Mm,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Sm,clearcoat_pars_fragment:bm,iridescence_pars_fragment:Am,opaque_fragment:Em,packing:Tm,premultiplied_alpha_fragment:Cm,project_vertex:Rm,dithering_fragment:Pm,dithering_pars_fragment:Im,roughnessmap_fragment:Fm,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:Dm,shadowmap_pars_vertex:zm,shadowmap_vertex:Nm,shadowmask_pars_fragment:Um,skinbase_vertex:Bm,skinning_pars_vertex:Om,skinning_vertex:km,skinnormal_vertex:Vm,specularmap_fragment:Hm,specularmap_pars_fragment:Gm,tonemapping_fragment:Wm,tonemapping_pars_fragment:Xm,transmission_fragment:qm,transmission_pars_fragment:Ym,uv_pars_fragment:Zm,uv_pars_vertex:Jm,uv_vertex:$m,worldpos_vertex:Km,background_vert:jm,background_frag:Qm,backgroundCube_vert:tg,backgroundCube_frag:eg,cube_vert:ng,cube_frag:ig,depth_vert:sg,depth_frag:rg,distance_vert:og,distance_frag:ag,equirect_vert:lg,equirect_frag:cg,linedashed_vert:hg,linedashed_frag:ug,meshbasic_vert:dg,meshbasic_frag:fg,meshlambert_vert:pg,meshlambert_frag:mg,meshmatcap_vert:gg,meshmatcap_frag:xg,meshnormal_vert:_g,meshnormal_frag:yg,meshphong_vert:vg,meshphong_frag:Mg,meshphysical_vert:wg,meshphysical_frag:Sg,meshtoon_vert:bg,meshtoon_frag:Ag,points_vert:Eg,points_frag:Tg,shadow_vert:Cg,shadow_frag:Rg,sprite_vert:Pg,sprite_frag:Ig},ve={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]},probesIntensity:{value:[]}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},qi={basic:{uniforms:Jn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Jn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Jn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Jn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Jn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ie(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Jn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Jn([ve.points,ve.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Jn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Jn([ve.common,ve.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Jn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Jn([ve.sprite,ve.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Jn([ve.common,ve.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Jn([ve.lights,ve.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};qi.physical={uniforms:Jn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Jl={r:0,b:0,g:0},Fg=new rn,of=new We;of.set(-1,0,0,0,1,0,0,0,1);function Lg(i,t,e,n,s,r){let o=new Ie(0),a=s===!0?0:1,l,c,d=null,f=0,m=null;function g(P){let F=P.isScene===!0?P.background:null;if(F&&F.isTexture){let I=P.backgroundBlurriness>0;F=t.get(F,I)}return F}function _(P){let F=!1,I=g(P);I===null?p(o,a):I&&I.isColor&&(p(I,1),F=!0);let B=i.xr.getEnvironmentBlendMode();B==="additive"?e.buffers.color.setClear(0,0,0,1,r):B==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||F)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function R(P,F){let I=g(F);I&&I.isCubeTexture?(c===void 0&&(c=new Vt(new be(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Us(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(B,D,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=I,c.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Fg.makeRotationFromEuler(F.backgroundRotation)).transpose(),I.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(of),c.material.toneMapped=tn.getTransfer(I.colorSpace)!==cn,(d!==I||f!==I.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=I,f=I.version,m=i.toneMapping),c.layers.enableAll(),P.unshift(c,c.geometry,c.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new Vt(new xn(2,2),new bi({name:"BackgroundMaterial",uniforms:Us(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,l.material.toneMapped=tn.getTransfer(I.colorSpace)!==cn,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(d!==I||f!==I.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=I,f=I.version,m=i.toneMapping),l.layers.enableAll(),P.unshift(l,l.geometry,l.material,0,0,null))}function p(P,F){P.getRGB(Jl,Mh(i)),e.buffers.color.setClear(Jl.r,Jl.g,Jl.b,F,r)}function y(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(P,F=1){o.set(P),a=F,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(P){a=P,p(o,a)},render:_,addToRenderList:R,dispose:y}}function Dg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,o=!1;function a(ot,dt,st,wt,ft){let Bt=!1,gt=f(ot,wt,st,dt);r!==gt&&(r=gt,c(r.object)),Bt=g(ot,wt,st,ft),Bt&&_(ot,wt,st,ft),ft!==null&&t.update(ft,i.ELEMENT_ARRAY_BUFFER),(Bt||o)&&(o=!1,I(ot,dt,st,wt),ft!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function l(){return i.createVertexArray()}function c(ot){return i.bindVertexArray(ot)}function d(ot){return i.deleteVertexArray(ot)}function f(ot,dt,st,wt){let ft=wt.wireframe===!0,Bt=n[dt.id];Bt===void 0&&(Bt={},n[dt.id]=Bt);let gt=ot.isInstancedMesh===!0?ot.id:0,Mt=Bt[gt];Mt===void 0&&(Mt={},Bt[gt]=Mt);let vt=Mt[st.id];vt===void 0&&(vt={},Mt[st.id]=vt);let It=vt[ft];return It===void 0&&(It=m(l()),vt[ft]=It),It}function m(ot){let dt=[],st=[],wt=[];for(let ft=0;ft<e;ft++)dt[ft]=0,st[ft]=0,wt[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:dt,enabledAttributes:st,attributeDivisors:wt,object:ot,attributes:{},index:null}}function g(ot,dt,st,wt){let ft=r.attributes,Bt=dt.attributes,gt=0,Mt=st.getAttributes();for(let vt in Mt)if(Mt[vt].location>=0){let qt=ft[vt],$t=Bt[vt];if($t===void 0&&(vt==="instanceMatrix"&&ot.instanceMatrix&&($t=ot.instanceMatrix),vt==="instanceColor"&&ot.instanceColor&&($t=ot.instanceColor)),qt===void 0||qt.attribute!==$t||$t&&qt.data!==$t.data)return!0;gt++}return r.attributesNum!==gt||r.index!==wt}function _(ot,dt,st,wt){let ft={},Bt=dt.attributes,gt=0,Mt=st.getAttributes();for(let vt in Mt)if(Mt[vt].location>=0){let qt=Bt[vt];qt===void 0&&(vt==="instanceMatrix"&&ot.instanceMatrix&&(qt=ot.instanceMatrix),vt==="instanceColor"&&ot.instanceColor&&(qt=ot.instanceColor));let $t={};$t.attribute=qt,qt&&qt.data&&($t.data=qt.data),ft[vt]=$t,gt++}r.attributes=ft,r.attributesNum=gt,r.index=wt}function R(){let ot=r.newAttributes;for(let dt=0,st=ot.length;dt<st;dt++)ot[dt]=0}function p(ot){y(ot,0)}function y(ot,dt){let st=r.newAttributes,wt=r.enabledAttributes,ft=r.attributeDivisors;st[ot]=1,wt[ot]===0&&(i.enableVertexAttribArray(ot),wt[ot]=1),ft[ot]!==dt&&(i.vertexAttribDivisor(ot,dt),ft[ot]=dt)}function P(){let ot=r.newAttributes,dt=r.enabledAttributes;for(let st=0,wt=dt.length;st<wt;st++)dt[st]!==ot[st]&&(i.disableVertexAttribArray(st),dt[st]=0)}function F(ot,dt,st,wt,ft,Bt,gt){gt===!0?i.vertexAttribIPointer(ot,dt,st,ft,Bt):i.vertexAttribPointer(ot,dt,st,wt,ft,Bt)}function I(ot,dt,st,wt){R();let ft=wt.attributes,Bt=st.getAttributes(),gt=dt.defaultAttributeValues;for(let Mt in Bt){let vt=Bt[Mt];if(vt.location>=0){let It=ft[Mt];if(It===void 0&&(Mt==="instanceMatrix"&&ot.instanceMatrix&&(It=ot.instanceMatrix),Mt==="instanceColor"&&ot.instanceColor&&(It=ot.instanceColor)),It!==void 0){let qt=It.normalized,$t=It.itemSize,pe=t.get(It);if(pe===void 0)continue;let zt=pe.buffer,ne=pe.type,he=pe.bytesPerElement,_e=ne===i.INT||ne===i.UNSIGNED_INT||It.gpuType===ul;if(It.isInterleavedBufferAttribute){let Jt=It.data,ye=Jt.isInterleavedBuffer===!0?Jt.stride:Jt.itemSize,Fe=It.offset;if(Jt.isInstancedInterleavedBuffer||Jt.isInstancedBufferAttribute){for(let le=0;le<vt.locationSize;le++)y(vt.location+le,Jt.meshPerAttribute);ot.isInstancedMesh!==!0&&wt._maxInstanceCount===void 0&&(wt._maxInstanceCount=Jt.meshPerAttribute*Jt.count)}else for(let le=0;le<vt.locationSize;le++)p(vt.location+le);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let le=0;le<vt.locationSize;le++)F(vt.location+le,$t/vt.locationSize,ne,qt,ye*he,(Fe+$t/vt.locationSize*le)*he,_e)}else{if(It.isInstancedBufferAttribute){for(let Jt=0;Jt<vt.locationSize;Jt++)y(vt.location+Jt,It.meshPerAttribute);ot.isInstancedMesh!==!0&&wt._maxInstanceCount===void 0&&(wt._maxInstanceCount=It.meshPerAttribute*It.count)}else for(let Jt=0;Jt<vt.locationSize;Jt++)p(vt.location+Jt);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let Jt=0;Jt<vt.locationSize;Jt++)F(vt.location+Jt,$t/vt.locationSize,ne,qt,$t*he,$t/vt.locationSize*Jt*he,_e)}}else if(gt!==void 0){let qt=gt[Mt];if(qt!==void 0)switch(qt.length){case 2:i.vertexAttrib2fv(vt.location,qt);break;case 3:i.vertexAttrib3fv(vt.location,qt);break;case 4:i.vertexAttrib4fv(vt.location,qt);break;default:i.vertexAttrib1fv(vt.location,qt)}}}}P()}function B(){$();for(let ot in n){let dt=n[ot];for(let st in dt){let wt=dt[st];for(let ft in wt){let Bt=wt[ft];for(let gt in Bt)d(Bt[gt].object),delete Bt[gt];delete wt[ft]}}delete n[ot]}}function D(ot){if(n[ot.id]===void 0)return;let dt=n[ot.id];for(let st in dt){let wt=dt[st];for(let ft in wt){let Bt=wt[ft];for(let gt in Bt)d(Bt[gt].object),delete Bt[gt];delete wt[ft]}}delete n[ot.id]}function A(ot){for(let dt in n){let st=n[dt];for(let wt in st){let ft=st[wt];if(ft[ot.id]===void 0)continue;let Bt=ft[ot.id];for(let gt in Bt)d(Bt[gt].object),delete Bt[gt];delete ft[ot.id]}}}function L(ot){for(let dt in n){let st=n[dt],wt=ot.isInstancedMesh===!0?ot.id:0,ft=st[wt];if(ft!==void 0){for(let Bt in ft){let gt=ft[Bt];for(let Mt in gt)d(gt[Mt].object),delete gt[Mt];delete ft[Bt]}delete st[wt],Object.keys(st).length===0&&delete n[dt]}}}function $(){O(),o=!0,r!==s&&(r=s,c(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:$,resetDefaultState:O,dispose:B,releaseStatesOfGeometry:D,releaseStatesOfObject:L,releaseStatesOfProgram:A,initAttributes:R,enableAttribute:p,disableUnusedAttributes:P}}function zg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),e.update(c,n,d))}function a(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let m=0;for(let g=0;g<d;g++)m+=c[g];e.update(m,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ng(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==zi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let L=A===Di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ii&&A!==Ai&&!L&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",d=l(c);d!==c&&(Ue("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Ue("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),P=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),F=i.getParameter(i.MAX_VARYING_VECTORS),I=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=i.getParameter(i.MAX_SAMPLES),D=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:f,maxTextures:g,maxVertexTextures:_,maxTextureSize:R,maxCubemapSize:p,maxAttributes:y,maxVertexUniforms:P,maxVaryings:F,maxFragmentUniforms:I,maxSamples:B,samples:D}}function Ug(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Fi,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){let g=f.length!==0||m||n!==0||s;return s=m,n=f.length,g},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,m){e=d(f,m,0)},this.setState=function(f,m,g){let _=f.clippingPlanes,R=f.clipIntersection,p=f.clipShadows,y=i.get(f);if(!s||_===null||_.length===0||r&&!p)r?d(null):c();else{let P=r?0:n,F=P*4,I=y.clippingState||null;l.value=I,I=d(_,m,F,g);for(let B=0;B!==F;++B)I[B]=e[B];y.clippingState=I,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=P}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,m,g,_){let R=f!==null?f.length:0,p=null;if(R!==0){if(p=l.value,_!==!0||p===null){let y=g+R*4,P=m.matrixWorldInverse;a.getNormalMatrix(P),(p===null||p.length<y)&&(p=new Float32Array(y));for(let F=0,I=g;F!==R;++F,I+=4)o.copy(f[F]).applyMatrix4(P,a),o.normal.toArray(p,I),p[I+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,p}}var Do=class extends oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new to(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new be(5,5,5),r=new bi({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:Ls});r.uniforms.tEquirect.value=e;let o=new Vt(s,r),a=e.minFilter;return e.minFilter===ss&&(e.minFilter=Qn),new mr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ud=256,Bg=3,Og=20,af=256,lf=16,kg=3,Vg=new j,Hg=new Ie,Kl=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new mr(1,10,null),this._boxMesh=new Vt(new be(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Vg}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),d=this._getSourceTarget(!0);e>0&&(d.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,m=l.autoClearColor,g=l.autoClearDepth,_=l.autoClearStencil,R=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,R===null&&(t.background=l.getClearColor(Hg));let p=new mr(n,s,d);return p.position.copy(a),p.update(l,t),l.autoClear=f,l.autoClearColor=m,l.autoClearDepth=g,l.autoClearStencil=_,t.background=R,e>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Ud,Ad(t))}_fromTexture(t,e){t.mapping===zs||t.mapping===_r?this._setSize(t.image.length===0?Ud:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Bd(t,!1,!1),n=Math.log2(t)-Bg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Bd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===zs||t.mapping===_r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Od()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Gg(),this._integrationMaterial=Wg());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/lf);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-kg)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(af*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Xg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Bd(i,t,e){return new Do(i,{minFilter:ss,generateMipmaps:t,type:Di,colorSpace:Vr,depthBuffer:e})}function zo(i,t,e){return new bi({name:i,uniforms:t,vertexShader:$e.cube_vert,fragmentShader:e,side:kn,blending:Ls,depthTest:!1,depthWrite:!1})}function Gg(){return zo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${af}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Wg(){return zo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:lf}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Xg(){return zo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Og}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Od(){return zo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function kd(){return zo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureLod( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ), 0.0 ).rgb, 1.0 );

		}
	`)}function qg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(m,g=!1){return m==null?null:g?o(m):r(m)}function r(m){if(m&&m.isTexture){let g=m.mapping;if(g===ll||g===cl)if(t.has(m)){let _=t.get(m).texture;return a(_,m.mapping)}else{let _=m.image;if(_&&_.height>0){let R=new Do(_.height);return R.fromEquirectangularTexture(i,m),t.set(m,R),m.addEventListener("dispose",c),a(R.texture,m.mapping)}else return null}}return m}function o(m){if(m&&m.isTexture&&m.isPMREMTexture!==!0){let g=m.mapping,_=g===ll||g===cl,R=g===zs||g===_r;if(_||R){let p=e.get(m),y=p!==void 0?p.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==y)return n===null&&(n=new Kl(i)),p=_?n.fromEquirectangular(m,p):n.fromCubemap(m,p),p.texture.pmremVersion=m.pmremVersion,e.set(m,p),p.texture;if(p!==void 0)return p.texture;{let P=m.image;return _&&P&&P.height>0||R&&P&&l(P)?(n===null&&(n=new Kl(i)),p=_?n.fromEquirectangular(m):n.fromCubemap(m),p.texture.pmremVersion=m.pmremVersion,e.set(m,p),m.addEventListener("dispose",d),p.texture):null}}}return m}function a(m,g){return g===ll?m.mapping=zs:g===cl&&(m.mapping=_r),m}function l(m){let g=0,_=6;for(let R=0;R<_;R++)m[R]!==void 0&&g++;return g===_}function c(m){let g=m.target;g.removeEventListener("dispose",c);let _=t.get(g);_!==void 0&&(t.delete(g),_.dispose())}function d(m){let g=m.target;g.removeEventListener("dispose",d);let _=e.get(g);_!==void 0&&(e.delete(g),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Yg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ur("WebGLRenderer: "+n+" extension not supported."),s}}}function Zg(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(_=>delete s[_]);function a(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(let p in _.attributes)t.remove(_.attributes[p]);_.removeEventListener("dispose",a),delete s[_.id],o.unregister(_);let R=r.get(_);R&&(t.remove(R),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,R){return s[R.id]!==void 0||(R.addEventListener("dispose",a),s[R.id]=new WeakRef(R),o.register(R,R.id,R),e.memory.geometries++),R}function d(_){let R=_.attributes;for(let p in R)t.update(R[p],i.ARRAY_BUFFER)}function f(_){let R=_.index,p=_.attributes.position,y=0;if(p===void 0)return;let P=R!==null?R.count:p.count-1,F=p.count>=65535?$r:Jr,I=new F(Math.ceil(P/3)*6,1),B=I.array;if(R!==null){let A=R.array;y=R.version;for(let L=0,$=0;L<P;L+=3){let O=A[L+0],ot=A[L+1],dt=A[L+2];B[$++]=O,B[$++]=ot,B[$++]=ot,B[$++]=dt,B[$++]=dt,B[$++]=O}}else{y=p.version;for(let A=0,L=0;A<P;A+=3){let $=A+0,O=A+1,ot=A+2;B[L++]=$,B[L++]=O,B[L++]=O,B[L++]=ot,B[L++]=ot,B[L++]=$}}I.version=y;let D=r.get(_);D&&t.remove(D),r.set(_,I)}function m(_){let R=r.get(_);if(R){let p=_.index;p!==null&&R.version<p.version&&f(_)}else f(_);return r.get(_)}function g(){for(let _ in s){let R=s[_].deref();R!==void 0&&l(R)}}return{get:c,update:d,getWireframeAttribute:m,dispose:g}}function Jg(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*o),e.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*o,g),e.update(m,n,g))}function d(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let R=0;for(let p=0;p<g;p++)R+=m[p];e.update(R,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function $g(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Oe("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Kg(i,t,e){let n=new WeakMap,s=new fn;function r(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0,m=n.get(a);if(m===void 0||m.count!==f){let $=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",$)};m!==void 0&&m.texture.dispose();let g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,R=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],P=a.morphAttributes.color||[],F=0;g===!0&&(F=1),_===!0&&(F=2),R===!0&&(F=3);let I=a.attributes.position.count*F,B=1;I>t.maxTextureSize&&(B=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);let D=new Float32Array(I*B*4*f),A=new Xr(D,I,B,f);A.type=Ai,A.needsUpdate=!0;let L=F*4;for(let O=0;O<f;O++){let ot=p[O],dt=y[O],st=P[O],wt=I*B*4*O;for(let ft=0;ft<ot.count;ft++){let Bt=ft*L;g===!0&&(s.fromBufferAttribute(ot,ft),D[wt+Bt+0]=s.x,D[wt+Bt+1]=s.y,D[wt+Bt+2]=s.z,D[wt+Bt+3]=0),_===!0&&(s.fromBufferAttribute(dt,ft),D[wt+Bt+4]=s.x,D[wt+Bt+5]=s.y,D[wt+Bt+6]=s.z,D[wt+Bt+7]=0),R===!0&&(s.fromBufferAttribute(st,ft),D[wt+Bt+8]=s.x,D[wt+Bt+9]=s.y,D[wt+Bt+10]=s.z,D[wt+Bt+11]=st.itemSize===4?s.w:1)}}m={count:f,texture:A,size:new Ct(I,B)},n.set(a,m),a.addEventListener("dispose",$)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let R=0;R<c.length;R++)g+=c[R];let _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function jg(i,t,e,n,s){let r=new WeakMap;function o(c){let d=s.render.frame,f=c.geometry,m=t.get(c,f);if(r.get(m)!==d&&(t.update(m),r.set(m,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let g=c.skeleton;r.get(g)!==d&&(g.update(),r.set(g,d))}return m}function a(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:a}}var Qg={[nh]:"LINEAR_TONE_MAPPING",[ih]:"REINHARD_TONE_MAPPING",[sh]:"CINEON_TONE_MAPPING",[So]:"ACES_FILMIC_TONE_MAPPING",[oh]:"AGX_TONE_MAPPING",[ah]:"NEUTRAL_TONE_MAPPING",[rh]:"CUSTOM_TONE_MAPPING"};function tx(i,t,e,n,s,r){let o=new oi(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,d=new Ze;d.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ge([0,2,0,0,2,0],2));let f=new Xa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new Vt(d,f),g=new vo(-1,1,1,-1,0,1),_=null,R=null,p=!1,y,P=null,F=[],I=!1;this.setSize=function(B,D){o.setSize(B,D),a!==null&&a.setSize(B,D),l!==null&&l.setSize(B,D);for(let A=0;A<F.length;A++){let L=F[A];L.setSize&&L.setSize(B,D)}},this.setEffects=function(B){F=B,I=F.length>0&&F[0].isRenderPass===!0;let D=o.width,A=o.height;F.length>0&&a===null&&(a=new oi(D,A,{type:Di,depthBuffer:!1,stencilBuffer:!1}),l=new oi(D,A,{type:Di,depthBuffer:!1,stencilBuffer:!1}));let L=s===!0&&F.some($=>$.needsDepthTexture===!0);L!==(o.depthTexture!==null)&&(L===!0&&c===null&&(c=new ns(D,A),r===!0&&(c.format=rs,c.type=Ns)),o.dispose(),o.depthTexture=L?c:null,o.resolveDepthBuffer=L,o.storeMultisampledDepthBuffer=L);for(let $=0;$<F.length;$++){let O=F[$];O.setSize&&O.setSize(D,A),L&&O.needsDepthTexture===!0&&O.setDepthTexture&&O.setDepthTexture(c)}},this.begin=function(B,D){if(p||B.toneMapping===Wi&&F.length===0)return!1;if(P=D,D!==null){let A=D.width,L=D.height;(o.width!==A||o.height!==L)&&this.setSize(A,L)}return I===!1&&B.setRenderTarget(o),y=B.toneMapping,B.toneMapping=Wi,!0},this.hasRenderPass=function(){return I},this.end=function(B,D){B.toneMapping=y,p=!0;let A=o,L=a;for(let $=0;$<F.length;$++){let O=F[$];O.enabled!==!1&&(O.render(B,L,A,D),O.needsSwap!==!1&&(A=L,L=L===a?l:a))}if(_!==B.outputColorSpace||R!==B.toneMapping){_=B.outputColorSpace,R=B.toneMapping,f.defines={},tn.getTransfer(_)===cn&&(f.defines.SRGB_TRANSFER="");let $=Qg[R];$&&(f.defines[$]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=A.texture,B.setRenderTarget(P),B.render(m,g),P=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),d.dispose(),f.dispose()}}var cf=new ti,hf=new ns(1,1),uf=new no(1),df=new Xr,ff=new Da,pf=new to,Vd=[],Hd=[],Gd=new Float32Array(16),Wd=new Float32Array(9),Xd=new Float32Array(4);function Mr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Vd[s];if(r===void 0&&(r=new Float32Array(s),Vd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Pn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function In(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ql(i,t){let e=Hd[t];e===void 0&&(e=new Int32Array(t),Hd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ex(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2fv(this.addr,t),In(e,t)}}function ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pn(e,t))return;i.uniform3fv(this.addr,t),In(e,t)}}function sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4fv(this.addr,t),In(e,t)}}function rx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),In(e,t)}else{if(Pn(e,n))return;Xd.set(n),i.uniformMatrix2fv(this.addr,!1,Xd),In(e,n)}}function ox(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),In(e,t)}else{if(Pn(e,n))return;Wd.set(n),i.uniformMatrix3fv(this.addr,!1,Wd),In(e,n)}}function ax(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),In(e,t)}else{if(Pn(e,n))return;Gd.set(n),i.uniformMatrix4fv(this.addr,!1,Gd),In(e,n)}}function lx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2iv(this.addr,t),In(e,t)}}function hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pn(e,t))return;i.uniform3iv(this.addr,t),In(e,t)}}function ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4iv(this.addr,t),In(e,t)}}function dx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function fx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2uiv(this.addr,t),In(e,t)}}function px(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pn(e,t))return;i.uniform3uiv(this.addr,t),In(e,t)}}function mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4uiv(this.addr,t),In(e,t)}}function tc(i){return i.version===0&&(i.compareFunction=xh,i.needsUpdate=!0),i}function gx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=tc(hf):r=cf,e.setTexture2D(t||r,s)}function xx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ff,s)}function _x(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=tc(uf):r=pf,e.setTextureCube(t||r,s)}function yx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||df,s)}function vx(i){switch(i){case 5126:return ex;case 35664:return nx;case 35665:return ix;case 35666:return sx;case 35674:return rx;case 35675:return ox;case 35676:return ax;case 5124:case 35670:return lx;case 35667:case 35671:return cx;case 35668:case 35672:return hx;case 35669:case 35673:return ux;case 5125:return dx;case 36294:return fx;case 36295:return px;case 36296:return mx;case 35678:case 36198:case 36298:case 36306:case 35682:return gx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return yx}}function Mx(i,t){i.uniform1fv(this.addr,t)}function wx(i,t){let e=Mr(t,this.size,2);i.uniform2fv(this.addr,e)}function Sx(i,t){let e=Mr(t,this.size,3);i.uniform3fv(this.addr,e)}function bx(i,t){let e=Mr(t,this.size,4);i.uniform4fv(this.addr,e)}function Ax(i,t){let e=Mr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ex(i,t){let e=Mr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Tx(i,t){let e=Mr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Cx(i,t){i.uniform1iv(this.addr,t)}function Rx(i,t){i.uniform2iv(this.addr,t)}function Px(i,t){i.uniform3iv(this.addr,t)}function Ix(i,t){i.uniform4iv(this.addr,t)}function Fx(i,t){i.uniform1uiv(this.addr,t)}function Lx(i,t){i.uniform2uiv(this.addr,t)}function Dx(i,t){i.uniform3uiv(this.addr,t)}function zx(i,t){i.uniform4uiv(this.addr,t)}function Nx(i,t,e){let n=this.cache,s=t.length,r=Ql(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=tc(hf):o=cf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Ux(i,t,e){let n=this.cache,s=t.length,r=Ql(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ff,r[o])}function Bx(i,t,e){let n=this.cache,s=t.length,r=Ql(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=tc(uf):o=pf;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Ox(i,t,e){let n=this.cache,s=t.length,r=Ql(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||df,r[o])}function kx(i){switch(i){case 5126:return Mx;case 35664:return wx;case 35665:return Sx;case 35666:return bx;case 35674:return Ax;case 35675:return Ex;case 35676:return Tx;case 5124:case 35670:return Cx;case 35667:case 35671:return Rx;case 35668:case 35672:return Px;case 35669:case 35673:return Ix;case 5125:return Fx;case 36294:return Lx;case 36295:return Dx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Bx;case 36289:case 36303:case 36311:case 36292:return Ox}}var Fh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vx(e.type)}},Lh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kx(e.type)}},Dh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ph=/(\w+)(\])?(\[|\.)?/g;function qd(i,t){i.seq.push(t),i.map[t.id]=t}function Vx(i,t,e){let n=i.name,s=n.length;for(Ph.lastIndex=0;;){let r=Ph.exec(n),o=Ph.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qd(e,c===void 0?new Fh(a,i,t):new Lh(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Dh(a),qd(e,f)),e=f}}}var vr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Vx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Yd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Hx=37297,Gx=0;function Wx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Zd=new We;function Xx(i){tn._getMatrix(Zd,tn.workingColorSpace,i);let t=`mat3( ${Zd.elements.map(e=>e.toFixed(4))} )`;switch(tn.getTransfer(i)){case Hr:return[t,"LinearTransferOETF"];case cn:return[t,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Jd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Wx(i.getShaderSource(t),a)}else return r}function qx(i,t){let e=Xx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Yx={[nh]:"Linear",[ih]:"Reinhard",[sh]:"Cineon",[So]:"ACESFilmic",[oh]:"AgX",[ah]:"Neutral",[rh]:"Custom"};function Zx(i,t){let e=Yx[t];return e===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var $l=new j;function Jx(){tn.getLuminanceCoefficients($l);let i=$l.x.toFixed(4),t=$l.y.toFixed(4),e=$l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $x(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function Kx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Lo(i){return i!==""}function $d(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Kd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function zh(i){return i.replace(Qx,t1)}function t1(i,t){let e=$e[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return zh(e)}var e1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jd(i){return i.replace(e1,n1)}function n1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var i1={[Fs]:"SHADOWMAP_TYPE_PCF",[gr]:"SHADOWMAP_TYPE_VSM"};function s1(i){return i1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var r1={[_r]:"ENVMAP_MODE_REFRACTION"};function o1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":r1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var a1={[wo]:"ENVMAP_BLENDING_MULTIPLY",[hd]:"ENVMAP_BLENDING_MIX",[ud]:"ENVMAP_BLENDING_ADD"};function l1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":a1[i.combine]||"ENVMAP_BLENDING_NONE"}function c1(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=s1(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=o1(e),f=l1(e),m=$x(e),g=Kx(r),_=s.createProgram(),R,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(R=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lo).join(`
`),R.length>0&&(R+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lo).join(`
`),p.length>0&&(p+=`
`)):(R=[Qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),p=[Qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?$e.tonemapping_pars_fragment:"",e.toneMapping!==Wi?Zx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,qx("linearToOutputTexel",e.outputColorSpace),Jx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lo).join(`
`)),o=zh(o),o=$d(o,e),o=Kd(o,e),a=zh(a),a=$d(a,e),a=Kd(a,e),o=jd(o),a=jd(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,R=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,p=["#define varying in",e.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let P=y+R+o,F=y+p+a,I=Yd(s,s.VERTEX_SHADER,P),B=Yd(s,s.FRAGMENT_SHADER,F);s.attachShader(_,I),s.attachShader(_,B),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function D(O){if(i.debug.checkShaderErrors){let ot=s.getProgramInfoLog(_)||"",dt=s.getShaderInfoLog(I)||"",st=s.getShaderInfoLog(B)||"",wt=ot.trim(),ft=dt.trim(),Bt=st.trim(),gt=!0,Mt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(gt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,B);else{let vt=Jd(s,I,"vertex"),It=Jd(s,B,"fragment");Oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+wt+`
`+vt+`
`+It)}else wt!==""?Ue("WebGLProgram: Program Info Log:",wt):(ft===""||Bt==="")&&(Mt=!1);Mt&&(O.diagnostics={runnable:gt,programLog:wt,vertexShader:{log:ft,prefix:R},fragmentShader:{log:Bt,prefix:p}})}s.deleteShader(I),s.deleteShader(B),A=new vr(s,_),L=jx(s,_)}let A;this.getUniforms=function(){return A===void 0&&D(this),A};let L;this.getAttributes=function(){return L===void 0&&D(this),L};let $=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return $===!1&&($=s.getProgramParameter(_,Hx)),$},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=B,this}var h1=0,Nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Uh(t),e.set(t,n)),n}},Uh=class{constructor(t){this.id=h1++,this.code=t,this.usedTimes=0}};function u1(i){return i===ys||i===Ro||i===Po}function d1(i,t,e,n,s,r){let o=new qr,a=new Nh,l=new Set,c=[],d=new Map,f=n.logarithmicDepthBuffer,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(A){return l.add(A),A===0?"uv":`uv${A}`}function _(A,L,$,O,ot,dt){let st=O.fog,wt=ot.geometry,ft=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?O.environment:null,Bt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,gt=t.get(A.envMap||ft,Bt),Mt=m[A.type],vt=n.precision;A.precision!==null&&(vt=n.getMaxPrecision(A.precision),vt!==A.precision&&Ue("WebGLProgram.getParameters:",A.precision,"not supported, using",vt,"instead."));let It=wt.morphAttributes.position||wt.morphAttributes.normal||wt.morphAttributes.color,qt=It!==void 0?It.length:0,$t=0;wt.morphAttributes.position!==void 0&&($t=1),wt.morphAttributes.normal!==void 0&&($t=2),wt.morphAttributes.color!==void 0&&($t=3);let pe,zt,ne,he;if(Mt){let fe=qi[Mt];pe=fe.vertexShader,zt=fe.fragmentShader}else{pe=A.vertexShader,zt=A.fragmentShader;let fe=a.getVertexShaderStage(A),Xe=a.getFragmentShaderStage(A);a.update(A,fe,Xe),ne=fe.id,he=Xe.id}let _e=i.getRenderTarget(),Jt=i.state.buffers.depth.getReversed(),ye=ot.isInstancedMesh===!0,Fe=ot.isBatchedMesh===!0,le=!!A.map,W=!!A.matcap,St=!!gt,rt=St&&gt.isPMREMTexture===!0,mt=!!A.aoMap,K=!!A.lightMap,pt=!!A.bumpMap&&A.wireframe===!1,lt=!!A.normalMap,ht=!!A.displacementMap,xt=!!A.emissiveMap,u=!!A.metalnessMap,M=!!A.roughnessMap,Y=A.anisotropy>0,C=A.clearcoat>0,_t=A.diffuseRoughness>0,H=A.dispersion>0,V=A.retroreflectivity>0,G=A.iridescence>0,Dt=A.sheen>0,yt=A.transmission>0,Et=Y&&!!A.anisotropyMap,U=C&&!!A.clearcoatMap,b=C&&!!A.clearcoatNormalMap,nt=C&&!!A.clearcoatRoughnessMap,it=_t&&!!A.diffuseRoughnessMap,tt=G&&!!A.iridescenceMap,ut=G&&!!A.iridescenceThicknessMap,Wt=Dt&&!!A.sheenColorMap,Ft=Dt&&!!A.sheenRoughnessMap,Ut=!!A.specularMap,Zt=!!A.specularColorMap,ee=!!A.specularIntensityMap,Q=yt&&!!A.transmissionMap,bt=yt&&!!A.thicknessMap,Gt=!!A.gradientMap,se=!!A.alphaMap,ce=A.alphaTest>0,xe=!!A.alphaHash,Le=!!A.extensions,Kt=Wi;A.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Kt=i.toneMapping);let ke=rt?gt.isCompressedCubeTexture?gt.image[0].mipmaps:gt.mipmaps:null,Ae={shaderID:Mt,shaderType:A.type,shaderName:A.name,vertexShader:pe,fragmentShader:zt,defines:A.defines,customVertexShaderID:ne,customFragmentShaderID:he,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:vt,batching:Fe,batchingColor:Fe&&ot._colorsTexture!==null,instancing:ye,instancingColor:ye&&ot.instanceColor!==null,instancingMorph:ye&&ot.morphTexture!==null,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:tn.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:le,matcap:W,envMap:St,envMapMode:St&&gt.mapping,envMapPMREM:rt,envMapMaxLod:rt?ke.length-1:null,envMapSize:rt?ke[0].width:null,aoMap:mt,lightMap:K,bumpMap:pt,normalMap:lt,displacementMap:ht,emissiveMap:xt,normalMapObjectSpace:lt&&A.normalMapType===pd,normalMapTangentSpace:lt&&A.normalMapType===Io,packedNormalMap:lt&&A.normalMapType===Io&&u1(A.normalMap.format),metalnessMap:u,roughnessMap:M,anisotropy:Y,anisotropyMap:Et,clearcoat:C,clearcoatMap:U,clearcoatNormalMap:b,clearcoatRoughnessMap:nt,diffuseRoughness:_t,diffuseRoughnessMap:it,dispersion:H,retroreflection:V,iridescence:G,iridescenceMap:tt,iridescenceThicknessMap:ut,sheen:Dt,sheenColorMap:Wt,sheenRoughnessMap:Ft,specularMap:Ut,specularColorMap:Zt,specularIntensityMap:ee,transmission:yt,transmissionMap:Q,thicknessMap:bt,gradientMap:Gt,opaque:A.transparent===!1&&A.blending===xr&&A.alphaToCoverage===!1,alphaMap:se,alphaTest:ce,alphaHash:xe,combine:A.combine,mapUv:le&&g(A.map.channel),aoMapUv:mt&&g(A.aoMap.channel),lightMapUv:K&&g(A.lightMap.channel),bumpMapUv:pt&&g(A.bumpMap.channel),normalMapUv:lt&&g(A.normalMap.channel),displacementMapUv:ht&&g(A.displacementMap.channel),emissiveMapUv:xt&&g(A.emissiveMap.channel),metalnessMapUv:u&&g(A.metalnessMap.channel),roughnessMapUv:M&&g(A.roughnessMap.channel),anisotropyMapUv:Et&&g(A.anisotropyMap.channel),clearcoatMapUv:U&&g(A.clearcoatMap.channel),clearcoatNormalMapUv:b&&g(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&g(A.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&g(A.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&g(A.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&g(A.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&g(A.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&g(A.sheenRoughnessMap.channel),specularMapUv:Ut&&g(A.specularMap.channel),specularColorMapUv:Zt&&g(A.specularColorMap.channel),specularIntensityMapUv:ee&&g(A.specularIntensityMap.channel),transmissionMapUv:Q&&g(A.transmissionMap.channel),thicknessMapUv:bt&&g(A.thicknessMap.channel),alphaMapUv:se&&g(A.alphaMap.channel),vertexTangents:!!wt.attributes.tangent&&(lt||Y),vertexNormals:!!wt.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!wt.attributes.color&&wt.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!wt.attributes.uv&&(le||se),fog:!!st,useFog:A.fog===!0,fogExp2:!!st&&st.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||wt.attributes.normal===void 0&&lt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Jt,skinning:ot.isSkinnedMesh===!0,hasPositionAttribute:wt.attributes.position!==void 0,morphTargets:wt.morphAttributes.position!==void 0,morphNormals:wt.morphAttributes.normal!==void 0,morphColors:wt.morphAttributes.color!==void 0,morphTargetsCount:qt,morphTextureStride:$t,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbeGrids:dt.filter(fe=>fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&$.length>0,shadowMapType:i.shadowMap.type,toneMapping:Kt,decodeVideoTexture:le&&A.map.isVideoTexture===!0&&tn.getTransfer(A.map.colorSpace)===cn,decodeVideoTextureEmissive:xt&&A.emissiveMap.isVideoTexture===!0&&tn.getTransfer(A.emissiveMap.colorSpace)===cn,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Be,flipSided:A.side===kn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Le&&A.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&A.extensions.multiDraw===!0||Fe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function R(A){let L=[];if(A.shaderID?L.push(A.shaderID):(L.push(A.customVertexShaderID),L.push(A.customFragmentShaderID)),A.defines!==void 0)for(let $ in A.defines)L.push($),L.push(A.defines[$]);return A.isRawShaderMaterial===!1&&(p(L,A),y(L,A),L.push(i.outputColorSpace)),L.push(A.customProgramCacheKey),L.join()}function p(A,L){A.push(L.precision),A.push(L.outputColorSpace),A.push(L.envMapMode),A.push(L.envMapPMREM),A.push(L.envMapMaxLod),A.push(L.envMapSize),A.push(L.mapUv),A.push(L.alphaMapUv),A.push(L.lightMapUv),A.push(L.aoMapUv),A.push(L.bumpMapUv),A.push(L.normalMapUv),A.push(L.displacementMapUv),A.push(L.emissiveMapUv),A.push(L.metalnessMapUv),A.push(L.roughnessMapUv),A.push(L.anisotropyMapUv),A.push(L.clearcoatMapUv),A.push(L.clearcoatNormalMapUv),A.push(L.clearcoatRoughnessMapUv),A.push(L.diffuseRoughnessMapUv),A.push(L.iridescenceMapUv),A.push(L.iridescenceThicknessMapUv),A.push(L.sheenColorMapUv),A.push(L.sheenRoughnessMapUv),A.push(L.specularMapUv),A.push(L.specularColorMapUv),A.push(L.specularIntensityMapUv),A.push(L.transmissionMapUv),A.push(L.thicknessMapUv),A.push(L.combine),A.push(L.fogExp2),A.push(L.sizeAttenuation),A.push(L.morphTargetsCount),A.push(L.numSunLights),A.push(L.numDirLights),A.push(L.numPointLights),A.push(L.numSpotLights),A.push(L.numSpotLightMaps),A.push(L.numHemiLights),A.push(L.numRectAreaLights),A.push(L.numSunLightShadows),A.push(L.numDirLightShadows),A.push(L.numPointLightShadows),A.push(L.numSpotLightShadows),A.push(L.numSpotLightShadowsWithMaps),A.push(L.numLightProbeGrids),A.push(L.shadowMapType),A.push(L.toneMapping),A.push(L.numClippingPlanes),A.push(L.numClipIntersection),A.push(L.depthPacking)}function y(A,L){o.disableAll(),L.instancing&&o.enable(0),L.instancingColor&&o.enable(1),L.instancingMorph&&o.enable(2),L.matcap&&o.enable(3),L.envMap&&o.enable(4),L.normalMapObjectSpace&&o.enable(5),L.normalMapTangentSpace&&o.enable(6),L.clearcoat&&o.enable(7),L.iridescence&&o.enable(8),L.alphaTest&&o.enable(9),L.vertexColors&&o.enable(10),L.vertexAlphas&&o.enable(11),L.vertexUv1s&&o.enable(12),L.vertexUv2s&&o.enable(13),L.vertexUv3s&&o.enable(14),L.vertexTangents&&o.enable(15),L.anisotropy&&o.enable(16),L.alphaHash&&o.enable(17),L.batching&&o.enable(18),L.dispersion&&o.enable(19),L.retroreflection&&o.enable(24),L.diffuseRoughness&&o.enable(25),L.batchingColor&&o.enable(20),L.gradientMap&&o.enable(21),L.packedNormalMap&&o.enable(22),L.vertexNormals&&o.enable(23),A.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.reversedDepthBuffer&&o.enable(4),L.skinning&&o.enable(5),L.morphTargets&&o.enable(6),L.morphNormals&&o.enable(7),L.morphColors&&o.enable(8),L.premultipliedAlpha&&o.enable(9),L.shadowMapEnabled&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.transmission&&o.enable(15),L.sheen&&o.enable(16),L.opaque&&o.enable(17),L.pointsUvs&&o.enable(18),L.decodeVideoTexture&&o.enable(19),L.decodeVideoTextureEmissive&&o.enable(20),L.alphaToCoverage&&o.enable(21),L.numLightProbeGrids>0&&o.enable(22),L.hasPositionAttribute&&o.enable(23),A.push(o.mask)}function P(A){let L=m[A.type],$;if(L){let O=qi[L];$=Dd.clone(O.uniforms)}else $=A.uniforms;return $}function F(A,L){let $=d.get(L);return $!==void 0?++$.usedTimes:($=new c1(i,L,A,s),c.push($),d.set(L,$)),$}function I(A){if(--A.usedTimes===0){let L=c.indexOf(A);c[L]=c[c.length-1],c.pop(),d.delete(A.cacheKey),A.destroy()}}function B(A){a.remove(A)}function D(){a.dispose()}return{getParameters:_,getProgramCacheKey:R,getUniforms:P,acquireProgram:F,releaseProgram:I,releaseShaderCache:B,programs:c,dispose:D}}function f1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function p1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function tf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ef(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(m){let g=0;return m.isInstancedMesh&&(g+=2),m.isSkinnedMesh&&(g+=1),g}function a(m,g,_,R,p,y){let P=i[t];return P===void 0?(P={id:m.id,object:m,geometry:g,material:_,materialVariant:o(m),groupOrder:R,renderOrder:m.renderOrder,z:p,group:y},i[t]=P):(P.id=m.id,P.object=m,P.geometry=g,P.material=_,P.materialVariant=o(m),P.groupOrder=R,P.renderOrder=m.renderOrder,P.z=p,P.group=y),t++,P}function l(m,g,_,R,p,y,P){P.reversedDepth===!0&&(p=-p);let F=a(m,g,_,R,p,y);_.transmission>0?n.push(F):_.transparent===!0?s.push(F):e.push(F)}function c(m,g,_,R,p,y){let P=a(m,g,_,R,p,y);_.transmission>0?n.unshift(P):_.transparent===!0?s.unshift(P):e.unshift(P)}function d(m,g){e.length>1&&e.sort(m||p1),n.length>1&&n.sort(g||tf),s.length>1&&s.sort(g||tf)}function f(){for(let m=t,g=i.length;m<g;m++){let _=i[m];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:d}}function m1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new ef,i.set(n,[o])):s>=r.length?(o=new ef,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function g1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new j,color:new Ie};break;case"SpotLight":e={position:new j,direction:new j,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new j,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new j,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":e={color:new Ie,position:new j,halfWidth:new j,halfHeight:new j};break}return i[t.id]=e,e}}}function x1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var _1=0;function y1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function v1(i){let t=new g1,e=x1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0},s=new j,r=new rn,o=new rn;function a(c){let d=0,f=0,m=0,g=0,_=0,R=0,p=0,y=0,P=0,F=0,I=0,B=0,D=0,A=0,L=0,$=0;c.sort(y1);for(let ot=0,dt=c.length;ot<dt;ot++){let st=c[ot],wt=st.color,ft=st.intensity,Bt=st.distance,gt=null;if(st.shadow&&st.shadow.map&&(st.shadow.map.texture.format===ys?gt=st.shadow.map.texture:gt=st.shadow.map.depthTexture||st.shadow.map.texture),st.isAmbientLight)d+=wt.r*ft,f+=wt.g*ft,m+=wt.b*ft;else if(st.isSunLight){let Mt=t.get(st);if(Mt.color.copy(st.color).multiplyScalar(st.intensity),st.castShadow){let vt=st.shadow,It=e.get(st);It.shadowIntensity=vt.intensity,It.shadowBias=vt.bias,It.shadowNormalBias=vt.normalBias,It.shadowRadius=vt.radius,It.shadowMapSize.copy(vt.mapSize).multiply(vt.getFrameExtents()),n.sunShadow[_]=It,n.sunShadowMap[_]=gt;let qt=vt.getViewportCount();for(let $t=0;$t<qt;$t++)n.sunShadowMatrix[R+$t]=vt.getMatrix($t),n.sunShadowCascade[R+$t]=vt._cascadeData[$t];R+=qt,_++}n.sun[g]=Mt,g++}else if(st.isDirectionalLight){let Mt=t.get(st);if(Mt.color.copy(st.color).multiplyScalar(st.intensity),st.castShadow){let vt=st.shadow,It=e.get(st);It.shadowIntensity=vt.intensity,It.shadowBias=vt.bias,It.shadowNormalBias=vt.normalBias,It.shadowRadius=vt.radius,It.shadowMapSize=vt.mapSize,n.directionalShadow[p]=It,n.directionalShadowMap[p]=gt,n.directionalShadowMatrix[p]=st.shadow.matrix,B++}n.directional[p]=Mt,p++}else if(st.isSpotLight){let Mt=t.get(st);Mt.position.setFromMatrixPosition(st.matrixWorld),Mt.color.copy(wt).multiplyScalar(ft),Mt.distance=Bt,Mt.coneCos=Math.cos(st.angle),Mt.penumbraCos=Math.cos(st.angle*(1-st.penumbra)),Mt.decay=st.decay,n.spot[P]=Mt;let vt=st.shadow;if(st.map&&(n.spotLightMap[L]=st.map,L++,vt.updateMatrices(st),st.castShadow&&$++),n.spotLightMatrix[P]=vt.matrix,st.castShadow){let It=e.get(st);It.shadowIntensity=vt.intensity,It.shadowBias=vt.bias,It.shadowNormalBias=vt.normalBias,It.shadowRadius=vt.radius,It.shadowMapSize=vt.mapSize,n.spotShadow[P]=It,n.spotShadowMap[P]=gt,A++}P++}else if(st.isRectAreaLight){let Mt=t.get(st);Mt.color.copy(wt).multiplyScalar(ft),Mt.halfWidth.set(st.width*.5,0,0),Mt.halfHeight.set(0,st.height*.5,0),n.rectArea[F]=Mt,F++}else if(st.isPointLight){let Mt=t.get(st);if(Mt.color.copy(st.color).multiplyScalar(st.intensity),Mt.distance=st.distance,Mt.decay=st.decay,st.castShadow){let vt=st.shadow,It=e.get(st);It.shadowIntensity=vt.intensity,It.shadowBias=vt.bias,It.shadowNormalBias=vt.normalBias,It.shadowRadius=vt.radius,It.shadowMapSize=vt.mapSize,It.shadowCameraNear=vt.camera.near,It.shadowCameraFar=vt.camera.far,n.pointShadow[y]=It,n.pointShadowMap[y]=gt,n.pointShadowMatrix[y]=st.shadow.matrix,D++}n.point[y]=Mt,y++}else if(st.isHemisphereLight){let Mt=t.get(st);Mt.skyColor.copy(st.color).multiplyScalar(ft),Mt.groundColor.copy(st.groundColor).multiplyScalar(ft),n.hemi[I]=Mt,I++}}F>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=m;let O=n.hash;(O.sunLength!==g||O.directionalLength!==p||O.pointLength!==y||O.spotLength!==P||O.rectAreaLength!==F||O.hemiLength!==I||O.numSunShadows!==_||O.numDirectionalShadows!==B||O.numPointShadows!==D||O.numSpotShadows!==A||O.numSpotMaps!==L)&&(n.sun.length=g,n.directional.length=p,n.spot.length=P,n.rectArea.length=F,n.point.length=y,n.hemi.length=I,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=R,n.sunShadowCascade.length=R,n.directionalShadow.length=B,n.directionalShadowMap.length=B,n.directionalShadowMatrix.length=B,n.pointShadow.length=D,n.pointShadowMap.length=D,n.pointShadowMatrix.length=D,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+L-$,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=$,O.sunLength=g,O.directionalLength=p,O.pointLength=y,O.spotLength=P,O.rectAreaLength=F,O.hemiLength=I,O.numSunShadows=_,O.numDirectionalShadows=B,O.numPointShadows=D,O.numSpotShadows=A,O.numSpotMaps=L,n.version=_1++)}function l(c,d){let f=0,m=0,g=0,_=0,R=0,p=0,y=d.matrixWorldInverse;for(let P=0,F=c.length;P<F;P++){let I=c[P];if(I.isSunLight){let B=n.sun[f];B.direction.setFromMatrixPosition(I.matrixWorld),B.direction.transformDirection(y),f++}else if(I.isDirectionalLight){let B=n.directional[m];B.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),B.direction.sub(s),B.direction.transformDirection(y),m++}else if(I.isSpotLight){let B=n.spot[_];B.position.setFromMatrixPosition(I.matrixWorld),B.position.applyMatrix4(y),B.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),B.direction.sub(s),B.direction.transformDirection(y),_++}else if(I.isRectAreaLight){let B=n.rectArea[R];B.position.setFromMatrixPosition(I.matrixWorld),B.position.applyMatrix4(y),o.identity(),r.copy(I.matrixWorld),r.premultiply(y),o.extractRotation(r),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),B.halfWidth.applyMatrix4(o),B.halfHeight.applyMatrix4(o),R++}else if(I.isPointLight){let B=n.point[g];B.position.setFromMatrixPosition(I.matrixWorld),B.position.applyMatrix4(y),g++}else if(I.isHemisphereLight){let B=n.hemi[p];B.direction.setFromMatrixPosition(I.matrixWorld),B.direction.transformDirection(y),p++}}}return{setup:a,setupView:l,state:n}}function nf(i){let t=new v1(i),e=[],n=[],s=[];function r(f){d.camera=f,e.length=0,n.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):e.push(f)}function a(f){n.push(f)}function l(){t.setup(e),s.sort((f,m)=>f.priority-m.priority||f.id-m.id)}function c(f){t.setupView(e,f)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function M1(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new nf(i),t.set(s,[a])):r>=o.length?(a=new nf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var w1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = textureLod( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution, 0.0 ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = textureLod( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution, 0.0 ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,b1=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],A1=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],sf=new rn,Fo=new j,Ih=new j;function E1(i,t,e){let n=new fs,s=new Ct,r=new Ct,o=new fn,a=new qa,l=new Ya,c={},d=e.maxTextureSize,f={[_s]:kn,[kn]:_s,[Be]:Be},m=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:w1,fragmentShader:S1}),g=m.clone();g.defines.HORIZONTAL_PASS=1;let _=new Ze;_.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let R=new Vt(_,m),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fs;let y=this.type;this.render=function(D,A,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;this.type===Xu&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fs);let $=i.getRenderTarget(),O=i.getActiveCubeFace(),ot=i.getActiveMipmapLevel(),dt=i.state;dt.setBlending(Ls),dt.buffers.depth.getReversed()===!0?dt.buffers.color.setClear(0,0,0,0):dt.buffers.color.setClear(1,1,1,1),dt.buffers.depth.setTest(!0),dt.setScissorTest(!1);let st=y!==this.type;st&&A.traverse(function(wt){wt.material&&(Array.isArray(wt.material)?wt.material.forEach(ft=>ft.needsUpdate=!0):wt.material.needsUpdate=!0)});for(let wt=0,ft=D.length;wt<ft;wt++){let Bt=D[wt],gt=Bt.shadow;if(gt===void 0){Ue("WebGLShadowMap:",Bt,"has no shadow.");continue}if(gt.autoUpdate===!1&&gt.needsUpdate===!1)continue;s.copy(gt.mapSize);let Mt=gt.getFrameExtents();s.multiply(Mt),r.copy(gt.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Mt.x),s.x=r.x*Mt.x,gt.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Mt.y),s.y=r.y*Mt.y,gt.mapSize.y=r.y));let vt=i.state.buffers.depth.getReversed();if(gt.camera._reversedDepth=vt,gt.map===null||st===!0){if(gt.map!==null&&(gt.map.depthTexture!==null&&(gt.map.depthTexture.dispose(),gt.map.depthTexture=null),gt.map.dispose()),this.type===gr){if(Bt.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}gt.map=new oi(s.x,s.y,{format:ys,type:Di,minFilter:Qn,magFilter:Qn,generateMipmaps:!1}),gt.map.texture.name=Bt.name+".shadowMap",gt.map.depthTexture=new ns(s.x,s.y,Ai),gt.map.depthTexture.name=Bt.name+".shadowMapDepth",gt.map.depthTexture.format=ts,gt.map.depthTexture.compareFunction=null,gt.map.depthTexture.minFilter=Dn,gt.map.depthTexture.magFilter=Dn}else Bt.isPointLight?(gt.map=new Do(s.x),gt.map.depthTexture=new no(s.x,Li)):(gt.map=new oi(s.x,s.y),gt.map.depthTexture=new ns(s.x,s.y,Li)),gt.map.depthTexture.name=Bt.name+".shadowMap",gt.map.depthTexture.format=ts,this.type===Fs?(gt.map.depthTexture.compareFunction=vt?gh:mh,gt.map.depthTexture.minFilter=Qn,gt.map.depthTexture.magFilter=Qn):(gt.map.depthTexture.compareFunction=null,gt.map.depthTexture.minFilter=Dn,gt.map.depthTexture.magFilter=Dn);gt.camera.updateProjectionMatrix()}gt.map.isWebGLCubeRenderTarget!==!0&&(gt.map.width!==s.x||gt.map.height!==s.y)&&gt.map.setSize(s.x,s.y);let It=gt.map.isWebGLCubeRenderTarget?6:gt.getViewportCount();Bt.isPointLight!==!0&&gt.updateMatrices(Bt,L);let qt=(gt.camera.layers.mask&4294967294)!==0?gt.camera.layers:L.layers;for(let $t=0;$t<It;$t++){let pe=gt.getCamera($t);if(Bt.isPointLight){let zt=gt.camera,ne=gt.matrix,he=Bt.distance||zt.far;he!==zt.far&&(zt.far=he,zt.updateProjectionMatrix()),Fo.setFromMatrixPosition(Bt.matrixWorld),zt.position.copy(Fo),Ih.copy(zt.position),Ih.add(b1[$t]),zt.up.copy(A1[$t]),zt.lookAt(Ih),zt.updateMatrixWorld(),ne.makeTranslation(-Fo.x,-Fo.y,-Fo.z),sf.multiplyMatrices(zt.projectionMatrix,zt.matrixWorldInverse),gt._frustum.setFromProjectionMatrix(sf,zt.coordinateSystem,zt.reversedDepth)}if(gt.map.isWebGLCubeRenderTarget)i.setRenderTarget(gt.map,$t),i.clear();else{$t===0&&(i.setRenderTarget(gt.map),i.clear());let zt=gt.getViewport($t);o.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),dt.viewport(o)}n=gt.getFrustum($t),I(A,L,pe,Bt,qt,this.type)}gt.isPointLightShadow!==!0&&this.type===gr&&P(gt,L),gt.needsUpdate=!1}y=this.type,p.needsUpdate=!1,i.setRenderTarget($,O,ot)};function P(D,A){let L=t.update(R);m.defines.VSM_SAMPLES!==D.blurSamples&&(m.defines.VSM_SAMPLES=D.blurSamples,g.defines.VSM_SAMPLES=D.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),D.mapPass===null?D.mapPass=new oi(s.x,s.y,{format:ys,type:Di}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),m.uniforms.shadow_pass.value=D.map.depthTexture,m.uniforms.resolution.value.set(D.map.width,D.map.height),m.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(A,null,L,m,R,null),g.uniforms.shadow_pass.value=D.mapPass.texture,g.uniforms.resolution.value.set(D.map.width,D.map.height),g.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(A,null,L,g,R,null)}function F(D,A,L,$){let O=null,ot=L.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(ot!==void 0)O=ot;else if(O=L.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let dt=O.uuid,st=A.uuid,wt=c[dt];wt===void 0&&(wt={},c[dt]=wt);let ft=wt[st];ft===void 0&&(ft=O.clone(),wt[st]=ft,A.addEventListener("dispose",B)),O=ft}if(O.visible=A.visible,O.wireframe=A.wireframe,$===gr?O.side=A.shadowSide!==null?A.shadowSide:A.side:O.side=A.shadowSide!==null?A.shadowSide:f[A.side],O.alphaMap=A.alphaMap,O.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,O.map=A.map,O.clipShadows=A.clipShadows,O.clippingPlanes=A.clippingPlanes,O.clipIntersection=A.clipIntersection,O.displacementMap=A.displacementMap,O.displacementScale=A.displacementScale,O.displacementBias=A.displacementBias,O.wireframeLinewidth=A.wireframeLinewidth,O.linewidth=A.linewidth,L.isPointLight===!0&&O.isMeshDistanceMaterial===!0){let dt=i.properties.get(O);dt.light=L}return O}function I(D,A,L,$,O,ot){if(D.visible===!1)return;if(D.layers.test(O)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&ot===gr)&&(!D.frustumCulled||D.intersectsFrustum(n))){D.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,D.matrixWorld);let wt=t.update(D),ft=D.material;if(Array.isArray(ft)){let Bt=wt.groups;for(let gt=0,Mt=Bt.length;gt<Mt;gt++){let vt=Bt[gt],It=ft[vt.materialIndex];if(It&&It.visible){let qt=F(D,It,$,ot);D.onBeforeShadow(i,D,A,L,wt,qt,vt),i.renderBufferDirect(L,null,wt,qt,D,vt),D.onAfterShadow(i,D,A,L,wt,qt,vt)}}}else if(ft.visible){let Bt=F(D,ft,$,ot);D.onBeforeShadow(i,D,A,L,wt,Bt,null),i.renderBufferDirect(L,null,wt,Bt,D,null),D.onAfterShadow(i,D,A,L,wt,Bt,null)}}let st=D.children;for(let wt=0,ft=st.length;wt<ft;wt++)I(st[wt],A,L,$,O,ot)}function B(D){D.target.removeEventListener("dispose",B);for(let L in c){let $=c[L],O=D.target.uuid;O in $&&($[O].dispose(),delete $[O])}}}function T1(i,t){function e(){let Q=!1,bt=new fn,Gt=null,se=new fn(0,0,0,0);return{setMask:function(ce){Gt!==ce&&!Q&&(i.colorMask(ce,ce,ce,ce),Gt=ce)},setLocked:function(ce){Q=ce},setClear:function(ce,xe,Le,Kt,ke){ke===!0&&(ce*=Kt,xe*=Kt,Le*=Kt),bt.set(ce,xe,Le,Kt),se.equals(bt)===!1&&(i.clearColor(ce,xe,Le,Kt),se.copy(bt))},reset:function(){Q=!1,Gt=null,se.set(-1,0,0,0)}}}function n(){let Q=!1,bt=!1,Gt=null,se=null,ce=null;return{setReversed:function(xe){if(bt!==xe){let Le=t.get("EXT_clip_control");xe?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),bt=xe;let Kt=ce;ce=null,this.setClear(Kt)}},getReversed:function(){return bt},setTest:function(xe){xe?Jt(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(xe){Gt!==xe&&!Q&&(i.depthMask(xe),Gt=xe)},setFunc:function(xe){if(bt&&(xe=bd[xe]),se!==xe){switch(xe){case wa:i.depthFunc(i.NEVER);break;case Sa:i.depthFunc(i.ALWAYS);break;case ba:i.depthFunc(i.LESS);break;case or:i.depthFunc(i.LEQUAL);break;case Aa:i.depthFunc(i.EQUAL);break;case Ea:i.depthFunc(i.GEQUAL);break;case Ta:i.depthFunc(i.GREATER);break;case Ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=xe}},setLocked:function(xe){Q=xe},setClear:function(xe){ce!==xe&&(ce=xe,bt&&(xe=1-xe),i.clearDepth(xe))},reset:function(){Q=!1,Gt=null,se=null,ce=null,bt=!1}}}function s(){let Q=!1,bt=null,Gt=null,se=null,ce=null,xe=null,Le=null,Kt=null,ke=null;return{setTest:function(Ae){Q||(Ae?Jt(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(Ae){bt!==Ae&&!Q&&(i.stencilMask(Ae),bt=Ae)},setFunc:function(Ae,fe,Xe){(Gt!==Ae||se!==fe||ce!==Xe)&&(i.stencilFunc(Ae,fe,Xe),Gt=Ae,se=fe,ce=Xe)},setOp:function(Ae,fe,Xe){(xe!==Ae||Le!==fe||Kt!==Xe)&&(i.stencilOp(Ae,fe,Xe),xe=Ae,Le=fe,Kt=Xe)},setLocked:function(Ae){Q=Ae},setClear:function(Ae){ke!==Ae&&(i.clearStencil(Ae),ke=Ae)},reset:function(){Q=!1,bt=null,Gt=null,se=null,ce=null,xe=null,Le=null,Kt=null,ke=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,d={},f={},m={},g=new WeakMap,_=[],R=null,p=!1,y=null,P=null,F=null,I=null,B=null,D=null,A=null,L=new Ie(0,0,0),$=0,O=!1,ot=null,dt=null,st=null,wt=null,ft=null,Bt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),gt=!1,Mt=0,vt=i.getParameter(i.VERSION);vt.indexOf("WebGL")!==-1?(Mt=parseFloat(/^WebGL (\d)/.exec(vt)[1]),gt=Mt>=1):vt.indexOf("OpenGL ES")!==-1&&(Mt=parseFloat(/^OpenGL ES (\d)/.exec(vt)[1]),gt=Mt>=2);let It=null,qt={},$t=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),zt=new fn().fromArray($t),ne=new fn().fromArray(pe);function he(Q,bt,Gt,se){let ce=new Uint8Array(4),xe=i.createTexture();i.bindTexture(Q,xe),i.texParameteri(Q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<Gt;Le++)Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(bt+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return xe}let _e={};_e[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Jt(i.DEPTH_TEST),o.setFunc(or),lt(!1),ht(Kc),Jt(i.CULL_FACE),K(Ls);function Jt(Q){d[Q]!==!0&&(i.enable(Q),d[Q]=!0)}function ye(Q){d[Q]!==!1&&(i.disable(Q),d[Q]=!1)}function Fe(Q,bt){return Q===i.FRAMEBUFFER?m[i.DRAW_FRAMEBUFFER]===bt&&m[i.READ_FRAMEBUFFER]===bt?!1:(i.bindFramebuffer(i.FRAMEBUFFER,bt),m[i.DRAW_FRAMEBUFFER]=bt,m[i.READ_FRAMEBUFFER]=bt,!0):m[Q]===bt?!1:(i.bindFramebuffer(Q,bt),m[Q]=bt,!0)}function le(Q){return Q===i.FRAMEBUFFER&&(Q=i.DRAW_FRAMEBUFFER),m[Q]||null}function W(Q,bt){let Gt=_,se=!1;if(Q){Gt=g.get(bt),Gt===void 0&&(Gt=[],g.set(bt,Gt));let ce=Q.textures;if(Gt.length!==ce.length||Gt[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,Le=ce.length;xe<Le;xe++)Gt[xe]=i.COLOR_ATTACHMENT0+xe;Gt.length=ce.length,se=!0}}else Gt[0]!==i.BACK&&(Gt[0]=i.BACK,se=!0);se&&i.drawBuffers(Gt)}function St(Q){return R!==Q?(i.useProgram(Q),R=Q,!0):!1}let rt={[Ds]:i.FUNC_ADD,[Yu]:i.FUNC_SUBTRACT,[Zu]:i.FUNC_REVERSE_SUBTRACT};rt[Ju]=i.MIN,rt[$u]=i.MAX;let mt={[Ku]:i.ZERO,[ju]:i.ONE,[Qu]:i.SRC_COLOR,[th]:i.SRC_ALPHA,[rd]:i.SRC_ALPHA_SATURATE,[id]:i.DST_COLOR,[ed]:i.DST_ALPHA,[td]:i.ONE_MINUS_SRC_COLOR,[eh]:i.ONE_MINUS_SRC_ALPHA,[sd]:i.ONE_MINUS_DST_COLOR,[nd]:i.ONE_MINUS_DST_ALPHA,[od]:i.CONSTANT_COLOR,[ad]:i.ONE_MINUS_CONSTANT_COLOR,[ld]:i.CONSTANT_ALPHA,[cd]:i.ONE_MINUS_CONSTANT_ALPHA};function K(Q,bt,Gt,se,ce,xe,Le,Kt,ke,Ae){if(Q===Ls){p===!0&&(ye(i.BLEND),p=!1);return}if(p===!1&&(Jt(i.BLEND),p=!0),Q!==qu){if(Q!==y||Ae!==O){if((P!==Ds||B!==Ds)&&(i.blendEquation(i.FUNC_ADD),P=Ds,B=Ds),Ae)switch(Q){case xr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zn:i.blendFunc(i.ONE,i.ONE);break;case jc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Oe("WebGLState: Invalid blending: ",Q);break}else switch(Q){case xr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jc:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qc:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",Q);break}F=null,I=null,D=null,A=null,L.set(0,0,0),$=0,y=Q,O=Ae}return}ce=ce||bt,xe=xe||Gt,Le=Le||se,(bt!==P||ce!==B)&&(i.blendEquationSeparate(rt[bt],rt[ce]),P=bt,B=ce),(Gt!==F||se!==I||xe!==D||Le!==A)&&(i.blendFuncSeparate(mt[Gt],mt[se],mt[xe],mt[Le]),F=Gt,I=se,D=xe,A=Le),(Kt.equals(L)===!1||ke!==$)&&(i.blendColor(Kt.r,Kt.g,Kt.b,ke),L.copy(Kt),$=ke),y=Q,O=!1}function pt(Q,bt){Q.side===Be?ye(i.CULL_FACE):Jt(i.CULL_FACE);let Gt=Q.side===kn;bt&&(Gt=!Gt),lt(Gt),Q.blending===xr&&Q.transparent===!1?K(Ls):K(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),o.setFunc(Q.depthFunc),o.setTest(Q.depthTest),o.setMask(Q.depthWrite),r.setMask(Q.colorWrite);let se=Q.stencilWrite;a.setTest(se),se&&(a.setMask(Q.stencilWriteMask),a.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),a.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),u(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?Jt(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(Q){ot!==Q&&(Q?i.frontFace(i.CW):i.frontFace(i.CCW),ot=Q)}function ht(Q){Q!==Gu?(Jt(i.CULL_FACE),Q!==dt&&(Q===Kc?i.cullFace(i.BACK):Q===Wu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),dt=Q}function xt(Q){Q!==st&&(gt&&i.lineWidth(Q),st=Q)}function u(Q,bt,Gt){Q?(Jt(i.POLYGON_OFFSET_FILL),(wt!==bt||ft!==Gt)&&(wt=bt,ft=Gt,o.getReversed()&&(bt=-bt,Gt=-Gt),i.polygonOffset(bt,Gt))):ye(i.POLYGON_OFFSET_FILL)}function M(Q){Q?Jt(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Y(Q){Q===void 0&&(Q=i.TEXTURE0+Bt-1),It!==Q&&(i.activeTexture(Q),It=Q)}function C(Q,bt,Gt){Gt===void 0&&(It===null?Gt=i.TEXTURE0+Bt-1:Gt=It);let se=qt[Gt];se===void 0&&(se={type:void 0,texture:void 0},qt[Gt]=se),(se.type!==Q||se.texture!==bt)&&(It!==Gt&&(i.activeTexture(Gt),It=Gt),i.bindTexture(Q,bt||_e[Q]),se.type=Q,se.texture=bt)}function _t(){let Q=qt[It];Q!==void 0&&Q.type!==void 0&&(i.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function H(){try{i.compressedTexImage2D(...arguments)}catch(Q){Oe("WebGLState:",Q)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(Q){Oe("WebGLState:",Q)}}function G(){try{i.texSubImage2D(...arguments)}catch(Q){Oe("WebGLState:",Q)}}function Dt(){try{i.texSubImage3D(...arguments)}catch(Q){Oe("WebGLState:",Q)}}function yt(){try{i.compressedTexSubImage2D(...arguments)}catch(Q){Oe("WebGLState:",Q)}}function Et(){try{i.compressedTexSubImage3D(...arguments)}catch(Q){Oe("WebGLState:",Q)}}function U(){try{i.texStorage2D(...arguments)}catch(Q){Oe("WebGLState:",Q)}}function b(){try{i.texStorage3D(...arguments)}catch(Q){Oe("WebGLState:",Q)}}function nt(){try{i.texImage2D(...arguments)}catch(Q){Oe("WebGLState:",Q)}}function it(){try{i.texImage3D(...arguments)}catch(Q){Oe("WebGLState:",Q)}}function tt(Q){return f[Q]!==void 0?f[Q]:i.getParameter(Q)}function ut(Q,bt){f[Q]!==bt&&(i.pixelStorei(Q,bt),f[Q]=bt)}function Wt(Q){zt.equals(Q)===!1&&(i.scissor(Q.x,Q.y,Q.z,Q.w),zt.copy(Q))}function Ft(Q){ne.equals(Q)===!1&&(i.viewport(Q.x,Q.y,Q.z,Q.w),ne.copy(Q))}function Ut(Q,bt){let Gt=c.get(bt);Gt===void 0&&(Gt=new WeakMap,c.set(bt,Gt));let se=Gt.get(Q);se===void 0&&(se=i.getUniformBlockIndex(bt,Q.name),i.uniformBlockBinding(bt,se,se),Gt.set(Q,se))}function Zt(Q,bt,Gt){let ce=c.get(bt).get(Q);l[ce]!==Gt&&(i.bindBufferBase(i.UNIFORM_BUFFER,ce,Gt),l[ce]=Gt)}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},f={},It=null,qt={},m={},l={},g=new WeakMap,_=[],R=null,p=!1,y=null,P=null,F=null,I=null,B=null,D=null,A=null,L=new Ie(0,0,0),$=0,O=!1,ot=null,dt=null,st=null,wt=null,ft=null,zt.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Jt,disable:ye,bindFramebuffer:Fe,getBoundFramebuffer:le,drawBuffers:W,useProgram:St,setBlending:K,setMaterial:pt,setFlipSided:lt,setCullFace:ht,setLineWidth:xt,setPolygonOffset:u,setScissorTest:M,activeTexture:Y,bindTexture:C,unbindTexture:_t,compressedTexImage2D:H,compressedTexImage3D:V,texImage2D:nt,texImage3D:it,pixelStorei:ut,getParameter:tt,updateUBOMapping:Ut,uniformBlockBinding:Zt,texStorage2D:U,texStorage3D:b,texSubImage2D:G,texSubImage3D:Dt,compressedTexSubImage2D:yt,compressedTexSubImage3D:Et,scissor:Wt,viewport:Ft,reset:ee}}function C1(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,d=new WeakMap,f=new Set,m,g=new WeakMap,_=new Set,R=new FinalizationRegistry(U=>_.delete(U)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(U,b){return p?new OffscreenCanvas(U,b):Gr("canvas")}function P(U,b,nt){let it=1,tt=Et(U);if((tt.width>nt||tt.height>nt)&&(it=nt/Math.max(tt.width,tt.height)),it<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let ut=Math.floor(it*tt.width),Wt=Math.floor(it*tt.height);m===void 0&&(m=y(ut,Wt));let Ft=b?y(ut,Wt):m;return Ft.width=ut,Ft.height=Wt,Ft.getContext("2d").drawImage(U,0,0,ut,Wt),Ue("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ut+"x"+Wt+")."),Ft}else return"data"in U&&Ue("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),U;return U}function F(U){return U.generateMipmaps}function I(U){i.generateMipmap(U)}function B(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(U,b,nt,it,tt,ut=!1){if(U!==null){if(i[U]!==void 0)return i[U];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Wt;it&&(Wt=t.get("EXT_texture_norm16"),Wt||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Ft=b;if(b===i.RED&&(nt===i.FLOAT&&(Ft=i.R32F),nt===i.HALF_FLOAT&&(Ft=i.R16F),nt===i.UNSIGNED_BYTE&&(Ft=i.R8),nt===i.UNSIGNED_SHORT&&Wt&&(Ft=Wt.R16_EXT),nt===i.SHORT&&Wt&&(Ft=Wt.R16_SNORM_EXT)),b===i.RED_INTEGER&&(nt===i.UNSIGNED_BYTE&&(Ft=i.R8UI),nt===i.UNSIGNED_SHORT&&(Ft=i.R16UI),nt===i.UNSIGNED_INT&&(Ft=i.R32UI),nt===i.BYTE&&(Ft=i.R8I),nt===i.SHORT&&(Ft=i.R16I),nt===i.INT&&(Ft=i.R32I)),b===i.RG&&(nt===i.FLOAT&&(Ft=i.RG32F),nt===i.HALF_FLOAT&&(Ft=i.RG16F),nt===i.UNSIGNED_BYTE&&(Ft=i.RG8),nt===i.UNSIGNED_SHORT&&Wt&&(Ft=Wt.RG16_EXT),nt===i.SHORT&&Wt&&(Ft=Wt.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(nt===i.UNSIGNED_BYTE&&(Ft=i.RG8UI),nt===i.UNSIGNED_SHORT&&(Ft=i.RG16UI),nt===i.UNSIGNED_INT&&(Ft=i.RG32UI),nt===i.BYTE&&(Ft=i.RG8I),nt===i.SHORT&&(Ft=i.RG16I),nt===i.INT&&(Ft=i.RG32I)),b===i.RGB_INTEGER&&(nt===i.UNSIGNED_BYTE&&(Ft=i.RGB8UI),nt===i.UNSIGNED_SHORT&&(Ft=i.RGB16UI),nt===i.UNSIGNED_INT&&(Ft=i.RGB32UI),nt===i.BYTE&&(Ft=i.RGB8I),nt===i.SHORT&&(Ft=i.RGB16I),nt===i.INT&&(Ft=i.RGB32I)),b===i.RGBA_INTEGER&&(nt===i.UNSIGNED_BYTE&&(Ft=i.RGBA8UI),nt===i.UNSIGNED_SHORT&&(Ft=i.RGBA16UI),nt===i.UNSIGNED_INT&&(Ft=i.RGBA32UI),nt===i.BYTE&&(Ft=i.RGBA8I),nt===i.SHORT&&(Ft=i.RGBA16I),nt===i.INT&&(Ft=i.RGBA32I)),b===i.RGB&&(nt===i.UNSIGNED_SHORT&&Wt&&(Ft=Wt.RGB16_EXT),nt===i.SHORT&&Wt&&(Ft=Wt.RGB16_SNORM_EXT),nt===i.UNSIGNED_INT_5_9_9_9_REV&&(Ft=i.RGB9_E5),nt===i.UNSIGNED_INT_10F_11F_11F_REV&&(Ft=i.R11F_G11F_B10F)),b===i.RGBA){let Ut=ut?Hr:tn.getTransfer(tt);nt===i.FLOAT&&(Ft=i.RGBA32F),nt===i.HALF_FLOAT&&(Ft=i.RGBA16F),nt===i.UNSIGNED_BYTE&&(Ft=Ut===cn?i.SRGB8_ALPHA8:i.RGBA8),nt===i.UNSIGNED_SHORT&&Wt&&(Ft=Wt.RGBA16_EXT),nt===i.SHORT&&Wt&&(Ft=Wt.RGBA16_SNORM_EXT),nt===i.UNSIGNED_SHORT_4_4_4_4&&(Ft=i.RGBA4),nt===i.UNSIGNED_SHORT_5_5_5_1&&(Ft=i.RGB5_A1)}return(Ft===i.R16F||Ft===i.R32F||Ft===i.RG16F||Ft===i.RG32F||Ft===i.RGBA16F||Ft===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Ft}function A(U,b){let nt;return U?b===null||b===Li||b===Ns?nt=i.DEPTH24_STENCIL8:b===Ai?nt=i.DEPTH32F_STENCIL8:b===yr&&(nt=i.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Li||b===Ns?nt=i.DEPTH_COMPONENT24:b===Ai?nt=i.DEPTH_COMPONENT32F:b===yr&&(nt=i.DEPTH_COMPONENT16),nt}function L(U,b){return F(U)===!0||U.isFramebufferTexture&&U.minFilter!==Dn&&U.minFilter!==Qn?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function $(U){let b=new WeakRef(U);n.get(U).__ref=b,_.add(b),R.register(U,b,b)}function O(U){let b=n.get(U).__ref;b!==void 0&&(_.delete(b),R.unregister(b))}function ot(U){st(U.target)}function dt(U){wt(U.target)}function st(U){U.removeEventListener("dispose",ot),O(U),Bt(U),U.isVideoTexture&&d.delete(U),U.isHTMLTexture&&f.delete(U)}function wt(U){U.removeEventListener("dispose",dt),O(U),Mt(U)}function ft(){for(let U of _){let b=U.deref();b!==void 0&&(b.isRenderTarget===!0?wt(b):st(b))}_.clear(),f.clear()}function Bt(U){let b=n.get(U);if(b.__webglInit===void 0)return;let nt=U.source,it=g.get(nt);if(it){let tt=it[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&gt(U),Object.keys(it).length===0&&g.delete(nt)}n.remove(U)}function gt(U){let b=n.get(U);i.deleteTexture(b.__webglTexture);let nt=U.source,it=g.get(nt);delete it[b.__cacheKey],o.memory.textures--}function Mt(U){let b=n.get(U);b.__depthDisposeCallback&&b.__depthDisposeCallback();let nt=U.depthTexture;if(nt&&nt.renderTarget===U&&st(nt),U.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(b.__webglFramebuffer[tt]))for(let ut=0;ut<b.__webglFramebuffer[tt].length;ut++)i.deleteFramebuffer(b.__webglFramebuffer[tt][ut]);else i.deleteFramebuffer(b.__webglFramebuffer[tt]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[tt])}else{if(Array.isArray(b.__webglFramebuffer))for(let tt=0;tt<b.__webglFramebuffer.length;tt++)i.deleteFramebuffer(b.__webglFramebuffer[tt]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let tt=0;tt<b.__webglColorRenderbuffer.length;tt++)b.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[tt]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let it=U.textures;for(let tt=0,ut=it.length;tt<ut;tt++){let Wt=n.get(it[tt]);Wt.__webglTexture&&(i.deleteTexture(Wt.__webglTexture),o.memory.textures--),n.remove(it[tt])}n.remove(U)}let vt=0;function It(){vt=0}function qt(){return vt}function $t(U){vt=U}function pe(){let U=vt;return U>=s.maxTextures&&Ue("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),vt+=1,U}function zt(U){let b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.mipmapsAutoUpdate),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function ne(U,b){let nt=n.get(U);if(U.isVideoTexture&&Dt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&nt.__version!==U.version){let it=U.image;if(it===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{K(nt,U,b);return}}else U.isExternalTexture&&(nt.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture,i.TEXTURE0+b)}function he(U,b){let nt=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&nt.__version!==U.version){K(nt,U,b);return}else U.isExternalTexture&&(nt.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,nt.__webglTexture,i.TEXTURE0+b)}function _e(U,b){let nt=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&nt.__version!==U.version){K(nt,U,b);return}e.bindTexture(i.TEXTURE_3D,nt.__webglTexture,i.TEXTURE0+b)}function Jt(U,b){let nt=n.get(U);if(U.version>0&&nt.__version!==U.version){pt(nt,U,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture,i.TEXTURE0+b)}let ye={[ds]:i.REPEAT,[Oi]:i.CLAMP_TO_EDGE,[Ra]:i.MIRRORED_REPEAT},Fe={[Dn]:i.NEAREST,[dd]:i.NEAREST_MIPMAP_NEAREST,[bo]:i.NEAREST_MIPMAP_LINEAR,[Qn]:i.LINEAR,[hl]:i.LINEAR_MIPMAP_NEAREST,[ss]:i.LINEAR_MIPMAP_LINEAR},le={[gd]:i.NEVER,[xh]:i.ALWAYS,[xd]:i.LESS,[mh]:i.LEQUAL,[_d]:i.EQUAL,[gh]:i.GEQUAL,[yd]:i.GREATER,[vd]:i.NOTEQUAL};function W(U,b){if(b.type===Ai&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Qn||b.magFilter===hl||b.magFilter===bo||b.magFilter===ss||b.minFilter===Qn||b.minFilter===hl||b.minFilter===bo||b.minFilter===ss)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,ye[b.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,ye[b.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,ye[b.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Fe[b.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Fe[b.minFilter]),b.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,le[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Dn||b.minFilter!==bo&&b.minFilter!==ss||b.type===Ai&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let nt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function St(U,b){let nt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",ot),$(b));let it=b.source,tt=g.get(it);tt===void 0&&(tt={},g.set(it,tt));let ut=zt(b);if(ut!==U.__cacheKey){tt[ut]===void 0&&(tt[ut]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,nt=!0),tt[ut].usedTimes++;let Wt=tt[U.__cacheKey];Wt!==void 0&&(tt[U.__cacheKey].usedTimes--,Wt.usedTimes===0&&gt(b)),U.__cacheKey=ut,U.__webglTexture=tt[ut].texture}return nt}function rt(U,b,nt){return Math.floor(Math.floor(U/nt)/b)}function mt(U,b,nt,it){let ut=U.updateRanges;if(ut.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,nt,it,b.data);else{ut.sort((ee,Q)=>ee.start-Q.start);let Wt=0;for(let ee=1;ee<ut.length;ee++){let Q=ut[Wt],bt=ut[ee],Gt=Q.start+Q.count,se=rt(bt.start,b.width,4),ce=rt(Q.start,b.width,4);bt.start<=Gt+1&&se===ce&&rt(bt.start+bt.count-1,b.width,4)===se?Q.count=Math.max(Q.count,bt.start+bt.count-Q.start):(++Wt,ut[Wt]=bt)}ut.length=Wt+1;let Ft=e.getParameter(i.UNPACK_ROW_LENGTH),Ut=e.getParameter(i.UNPACK_SKIP_PIXELS),Zt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let ee=0,Q=ut.length;ee<Q;ee++){let bt=ut[ee],Gt=Math.floor(bt.start/4),se=Math.ceil(bt.count/4),ce=Gt%b.width,xe=Math.floor(Gt/b.width),Le=se,Kt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),e.pixelStorei(i.UNPACK_SKIP_ROWS,xe),e.texSubImage2D(i.TEXTURE_2D,0,ce,xe,Le,Kt,nt,it,b.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Ft),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,Zt)}}function K(U,b,nt){let it=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(it=i.TEXTURE_3D);let tt=St(U,b),ut=b.source;e.bindTexture(it,U.__webglTexture,i.TEXTURE0+nt);let Wt=n.get(ut);if(ut.version!==Wt.__version||tt===!0){if(e.activeTexture(i.TEXTURE0+nt),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let Kt=tn.getPrimaries(tn.workingColorSpace),ke=b.colorSpace===os?null:tn.getPrimaries(b.colorSpace),Ae=b.colorSpace===os||Kt===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let Ut=P(b.image,!1,s.maxTextureSize);Ut=yt(b,Ut);let Zt=r.convert(b.format,b.colorSpace),ee=r.convert(b.type),Q=D(b.internalFormat,Zt,ee,b.normalized,b.colorSpace,b.isVideoTexture);W(it,b);let bt,Gt=b.mipmaps,se=b.isVideoTexture!==!0,ce=Wt.__version===void 0||tt===!0,xe=ut.dataReady,Le=L(b,Ut);if(b.isDepthTexture)Q=A(b.format===rs,b.type),ce&&(se?e.texStorage2D(i.TEXTURE_2D,1,Q,Ut.width,Ut.height):e.texImage2D(i.TEXTURE_2D,0,Q,Ut.width,Ut.height,0,Zt,ee,null));else if(b.isDataTexture)if(Gt.length>0){se&&ce&&e.texStorage2D(i.TEXTURE_2D,Le,Q,Gt[0].width,Gt[0].height);for(let Kt=0,ke=Gt.length;Kt<ke;Kt++)bt=Gt[Kt],se?xe&&e.texSubImage2D(i.TEXTURE_2D,Kt,0,0,bt.width,bt.height,Zt,ee,bt.data):e.texImage2D(i.TEXTURE_2D,Kt,Q,bt.width,bt.height,0,Zt,ee,bt.data);b.generateMipmaps=!1}else se?(ce&&e.texStorage2D(i.TEXTURE_2D,Le,Q,Ut.width,Ut.height),xe&&mt(b,Ut,Zt,ee)):e.texImage2D(i.TEXTURE_2D,0,Q,Ut.width,Ut.height,0,Zt,ee,Ut.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){se&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Q,Gt[0].width,Gt[0].height,Ut.depth);for(let Kt=0,ke=Gt.length;Kt<ke;Kt++)if(bt=Gt[Kt],b.format!==zi)if(Zt!==null)if(se){if(xe)if(b.layerUpdates.size>0){let Ae=bh(bt.width,bt.height,b.format,b.type);for(let fe of b.layerUpdates){let Xe=bt.data.subarray(fe*Ae/bt.data.BYTES_PER_ELEMENT,(fe+1)*Ae/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Kt,0,0,fe,bt.width,bt.height,1,Zt,Xe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Kt,0,0,0,bt.width,bt.height,Ut.depth,Zt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Kt,Q,bt.width,bt.height,Ut.depth,0,bt.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?xe&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Kt,0,0,0,bt.width,bt.height,Ut.depth,Zt,ee,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Kt,Q,bt.width,bt.height,Ut.depth,0,Zt,ee,bt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{se&&ce&&e.texStorage2D(i.TEXTURE_2D,Le,Q,Gt[0].width,Gt[0].height);for(let Kt=0,ke=Gt.length;Kt<ke;Kt++)bt=Gt[Kt],b.format!==zi?Zt!==null?se?xe&&e.compressedTexSubImage2D(i.TEXTURE_2D,Kt,0,0,bt.width,bt.height,Zt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,Kt,Q,bt.width,bt.height,0,bt.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?xe&&e.texSubImage2D(i.TEXTURE_2D,Kt,0,0,bt.width,bt.height,Zt,ee,bt.data):e.texImage2D(i.TEXTURE_2D,Kt,Q,bt.width,bt.height,0,Zt,ee,bt.data)}else if(b.isDataArrayTexture)if(se){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Q,Ut.width,Ut.height,Ut.depth),xe)if(b.layerUpdates.size>0){let Kt=bh(Ut.width,Ut.height,b.format,b.type);for(let ke of b.layerUpdates){let Ae=Ut.data.subarray(ke*Kt/Ut.data.BYTES_PER_ELEMENT,(ke+1)*Kt/Ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ke,Ut.width,Ut.height,1,Zt,ee,Ae)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ut.width,Ut.height,Ut.depth,Zt,ee,Ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,Ut.width,Ut.height,Ut.depth,0,Zt,ee,Ut.data);else if(b.isData3DTexture)se?(ce&&e.texStorage3D(i.TEXTURE_3D,Le,Q,Ut.width,Ut.height,Ut.depth),xe&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ut.width,Ut.height,Ut.depth,Zt,ee,Ut.data)):e.texImage3D(i.TEXTURE_3D,0,Q,Ut.width,Ut.height,Ut.depth,0,Zt,ee,Ut.data);else if(b.isFramebufferTexture){if(ce)if(se)e.texStorage2D(i.TEXTURE_2D,Le,Q,Ut.width,Ut.height);else{let Kt=Ut.width,ke=Ut.height;for(let Ae=0;Ae<Le;Ae++)e.texImage2D(i.TEXTURE_2D,Ae,Q,Kt,ke,0,Zt,ee,null),Kt>>=1,ke>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let Kt=i.canvas;if(Kt.hasAttribute("layoutsubtree")||Kt.setAttribute("layoutsubtree","true"),Ut.parentNode!==Kt){Kt.appendChild(Ut),f.add(b),Kt.onpaint=ke=>{let Ae=ke.changedElements;for(let fe of f)Ae.includes(fe.image)&&(fe.needsUpdate=!0)},Kt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Ut);else{let Ae=i.RGBA,fe=i.RGBA,Xe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ae,fe,Xe,Ut)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Gt.length>0){if(se&&ce){let Kt=Et(Gt[0]);e.texStorage2D(i.TEXTURE_2D,Le,Q,Kt.width,Kt.height)}for(let Kt=0,ke=Gt.length;Kt<ke;Kt++)bt=Gt[Kt],se?xe&&e.texSubImage2D(i.TEXTURE_2D,Kt,0,0,Zt,ee,bt):e.texImage2D(i.TEXTURE_2D,Kt,Q,Zt,ee,bt);b.generateMipmaps=!1}else if(se){if(ce){let Kt=Et(Ut);e.texStorage2D(i.TEXTURE_2D,Le,Q,Kt.width,Kt.height)}xe&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Zt,ee,Ut)}else e.texImage2D(i.TEXTURE_2D,0,Q,Zt,ee,Ut);F(b)&&b.mipmapsAutoUpdate===!0&&I(it),Wt.__version=ut.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function pt(U,b,nt){if(b.image.length!==6)return;let it=St(U,b),tt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+nt);let ut=n.get(tt);if(tt.version!==ut.__version||it===!0){e.activeTexture(i.TEXTURE0+nt);let Wt=tn.getPrimaries(tn.workingColorSpace),Ft=b.colorSpace===os?null:tn.getPrimaries(b.colorSpace),Ut=b.colorSpace===os||Wt===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let Zt=b.isCompressedTexture||b.image[0].isCompressedTexture,ee=b.image[0]&&b.image[0].isDataTexture,Q=[];for(let fe=0;fe<6;fe++)!Zt&&!ee?Q[fe]=P(b.image[fe],!0,s.maxCubemapSize):Q[fe]=ee?b.image[fe].image:b.image[fe],Q[fe]=yt(b,Q[fe]);let bt=Q[0],Gt=r.convert(b.format,b.colorSpace),se=r.convert(b.type),ce=D(b.internalFormat,Gt,se,b.normalized,b.colorSpace),xe=b.isVideoTexture!==!0,Le=ut.__version===void 0||it===!0,Kt=tt.dataReady,ke=L(b,bt);W(i.TEXTURE_CUBE_MAP,b);let Ae;if(b.isDepthTexture){if(ce=A(b.format===rs,b.type),Le)if(xe)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ce,bt.width,bt.height);else for(let fe=0;fe<6;fe++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ce,bt.width,bt.height,0,Gt,se,null)}else if(Zt){xe&&Le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ke,ce,bt.width,bt.height);for(let fe=0;fe<6;fe++){Ae=Q[fe].mipmaps;for(let Xe=0;Xe<Ae.length;Xe++){let pn=Ae[Xe];b.format!==zi?Gt!==null?xe?Kt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe,0,0,pn.width,pn.height,Gt,pn.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe,ce,pn.width,pn.height,0,pn.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xe?Kt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe,0,0,pn.width,pn.height,Gt,se,pn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe,ce,pn.width,pn.height,0,Gt,se,pn.data)}}}else{if(Ae=b.mipmaps,xe&&Le){Ae.length>0&&ke++;let fe=Et(Q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ke,ce,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(ee){xe?Kt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Q[fe].width,Q[fe].height,Gt,se,Q[fe].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ce,Q[fe].width,Q[fe].height,0,Gt,se,Q[fe].data);for(let Xe=0;Xe<Ae.length;Xe++){let En=Ae[Xe].image[fe].image;xe?Kt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe+1,0,0,En.width,En.height,Gt,se,En.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe+1,ce,En.width,En.height,0,Gt,se,En.data)}}else{xe?Kt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Gt,se,Q[fe]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ce,Gt,se,Q[fe]);for(let Xe=0;Xe<Ae.length;Xe++){let pn=Ae[Xe];xe?Kt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe+1,0,0,Gt,se,pn.image[fe]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe+1,ce,Gt,se,pn.image[fe])}}}F(b)&&b.mipmapsAutoUpdate===!0&&I(i.TEXTURE_CUBE_MAP),ut.__version=tt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function lt(U,b,nt,it,tt,ut){let Wt=r.convert(nt.format,nt.colorSpace),Ft=r.convert(nt.type),Ut=D(nt.internalFormat,Wt,Ft,nt.normalized,nt.colorSpace),Zt=n.get(b),ee=n.get(nt);if(ee.__renderTarget=b,!Zt.__hasExternalTextures){let Q=Math.max(1,b.width>>ut),bt=Math.max(1,b.height>>ut);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,ut,Ut,Q,bt,b.depth,0,Wt,Ft,null):e.texImage2D(tt,ut,Ut,Q,bt,0,Wt,Ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),G(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,tt,ee.__webglTexture,0,V(b)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,tt,ee.__webglTexture,ut),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(U,b,nt){if(i.bindRenderbuffer(i.RENDERBUFFER,U),b.depthBuffer){let it=b.depthTexture,tt=it&&it.isDepthTexture?it.type:null,ut=A(b.stencilBuffer,tt),Wt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;G(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,V(b),ut,b.width,b.height):nt?i.renderbufferStorageMultisample(i.RENDERBUFFER,V(b),ut,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ut,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Wt,i.RENDERBUFFER,U)}else{let it=b.textures;for(let tt=0;tt<it.length;tt++){let ut=it[tt],Wt=r.convert(ut.format,ut.colorSpace),Ft=r.convert(ut.type),Ut=D(ut.internalFormat,Wt,Ft,ut.normalized,ut.colorSpace);G(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,V(b),Ut,b.width,b.height):nt?i.renderbufferStorageMultisample(i.RENDERBUFFER,V(b),Ut,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ut,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(U,b,nt){let it=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(b.depthTexture);tt.__renderTarget=b;let ut=it?b.depthTexture.image[0]:b.depthTexture.image;(!tt.__webglTexture||ut.width!==b.width||ut.height!==b.height)&&(ut.width=b.width,ut.height=b.height,b.depthTexture.needsUpdate=!0),it?Jt(b.depthTexture,0):ne(b.depthTexture,0);let Wt=tt.__webglTexture,Ft=V(b),Ut=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+nt:i.TEXTURE_2D,Zt=b.depthTexture.format===rs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===ts)G(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Zt,Ut,Wt,0,Ft):i.framebufferTexture2D(i.FRAMEBUFFER,Zt,Ut,Wt,0);else if(b.depthTexture.format===rs)G(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Zt,Ut,Wt,0,Ft):i.framebufferTexture2D(i.FRAMEBUFFER,Zt,Ut,Wt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function u(U){let b=n.get(U),nt=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){let it=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),it){let tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,it.removeEventListener("dispose",tt)};it.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=it}if(U.depthTexture&&!b.__autoAllocateDepthBuffer)if(nt)for(let it=0;it<6;it++)xt(b.__webglFramebuffer[it],U,it);else U.texture.mipmaps.length>0?xt(b.__webglFramebuffer[0],U,0):xt(b.__webglFramebuffer,U,0);else if(nt){b.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[it]),b.__webglDepthbuffer[it]===void 0)b.__webglDepthbuffer[it]=i.createRenderbuffer(),ht(b.__webglDepthbuffer[it],U,!1);else{let tt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ut)}}else if(U.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ht(b.__webglDepthbuffer,U,!1);else{let tt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ut),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ut)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function M(U,b,nt){let it=n.get(U);b!==void 0&&lt(it.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),nt!==void 0&&u(U)}function Y(U){let b=U.texture,nt=n.get(U),it=n.get(b);U.addEventListener("dispose",dt),$(U);let tt=U.textures,ut=U.isWebGLCubeRenderTarget===!0,Wt=tt.length>1;if(Wt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=b.version,o.memory.textures++),ut){nt.__webglFramebuffer=[];for(let Ft=0;Ft<6;Ft++)if(b.mipmaps.length>0){nt.__webglFramebuffer[Ft]=[];for(let Ut=0;Ut<b.mipmaps.length;Ut++)nt.__webglFramebuffer[Ft][Ut]=i.createFramebuffer()}else nt.__webglFramebuffer[Ft]=i.createFramebuffer()}else{if(b.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Ft=0;Ft<b.mipmaps.length;Ft++)nt.__webglFramebuffer[Ft]=i.createFramebuffer()}else nt.__webglFramebuffer=i.createFramebuffer();if(Wt)for(let Ft=0,Ut=tt.length;Ft<Ut;Ft++){let Zt=n.get(tt[Ft]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&G(U)===!1){nt.__webglMultisampledFramebuffer=i.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Ft=0;Ft<tt.length;Ft++){let Ut=tt[Ft];nt.__webglColorRenderbuffer[Ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,nt.__webglColorRenderbuffer[Ft]);let Zt=r.convert(Ut.format,Ut.colorSpace),ee=r.convert(Ut.type),Q=D(Ut.internalFormat,Zt,ee,Ut.normalized,Ut.colorSpace,U.isXRRenderTarget===!0),bt=V(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,Q,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,nt.__webglColorRenderbuffer[Ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(nt.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(nt.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ut){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),W(i.TEXTURE_CUBE_MAP,b);for(let Ft=0;Ft<6;Ft++)if(b.mipmaps.length>0)for(let Ut=0;Ut<b.mipmaps.length;Ut++)lt(nt.__webglFramebuffer[Ft][Ut],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Ut);else lt(nt.__webglFramebuffer[Ft],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0);F(b)?I(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(Wt){for(let Ft=0,Ut=tt.length;Ft<Ut;Ft++){let Zt=tt[Ft],ee=n.get(Zt),Q=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Q=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,ee.__webglTexture),W(Q,Zt),lt(nt.__webglFramebuffer,U,Zt,i.COLOR_ATTACHMENT0+Ft,Q,0),F(Zt)&&I(Q)}e.unbindTexture()}else{let Ft=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ft=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ft,it.__webglTexture),W(Ft,b),b.mipmaps.length>0)for(let Ut=0;Ut<b.mipmaps.length;Ut++)lt(nt.__webglFramebuffer[Ut],U,b,i.COLOR_ATTACHMENT0,Ft,Ut);else lt(nt.__webglFramebuffer,U,b,i.COLOR_ATTACHMENT0,Ft,0);F(b)?I(Ft):b.mipmaps.length>0&&i.texParameteri(Ft,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}U.depthBuffer&&u(U)}function C(U){let b=U.textures;for(let nt=0,it=b.length;nt<it;nt++){let tt=b[nt];if(F(tt)&&tt.mipmapsAutoUpdate===!0){let ut=B(U),Wt=n.get(tt).__webglTexture;e.bindTexture(ut,Wt),I(ut),e.unbindTexture()}}}let _t=[];function H(U){if(U.samples>0){if(G(U)===!1){let b=U.textures,nt=U.width,it=U.height,tt=i.COLOR_BUFFER_BIT,ut=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Wt=n.get(U),Ft=b.length>1;if(Ft)for(let Zt=0;Zt<b.length;Zt++)e.bindFramebuffer(i.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Zt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Zt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),U.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let Zt=0;Zt<b.length;Zt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),Ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Wt.__webglColorRenderbuffer[Zt]);let ee=n.get(b[Zt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,nt,it,0,0,nt,it,tt,i.NEAREST),l===!0&&(_t.length=0,_t.push(i.COLOR_ATTACHMENT0+Zt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&_t.push(ut),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ft)for(let Zt=0;Zt<b.length;Zt++){e.bindFramebuffer(i.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Zt,i.RENDERBUFFER,Wt.__webglColorRenderbuffer[Zt]);let ee=n.get(b[Zt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Zt,i.TEXTURE_2D,ee,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){let b=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function V(U){return Math.min(s.maxSamples,U.samples)}function G(U){let b=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Dt(U){let b=o.render.frame;d.get(U)!==b&&(d.set(U,b),U.update())}function yt(U,b){let nt=U.colorSpace,it=U.format,tt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||nt!==Vr&&nt!==os&&(tn.getTransfer(nt)===cn?(it!==zi||tt!==ii)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",nt)),b}function Et(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=pe,this.resetTextureUnits=It,this.getTextureUnits=qt,this.setTextureUnits=$t,this.setTexture2D=ne,this.setTexture2DArray=he,this.setTexture3D=_e,this.setTextureCube=Jt,this.rebindTextures=M,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=u,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=G,this.dispose=ft}function R1(i,t){function e(n,s=os){let r,o=tn.getTransfer(s);if(n===ii)return i.UNSIGNED_BYTE;if(n===dl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ch)return i.BYTE;if(n===hh)return i.SHORT;if(n===yr)return i.UNSIGNED_SHORT;if(n===ul)return i.INT;if(n===Li)return i.UNSIGNED_INT;if(n===Ai)return i.FLOAT;if(n===Di)return i.HALF_FLOAT;if(n===fh)return i.ALPHA;if(n===ph)return i.RGB;if(n===zi)return i.RGBA;if(n===ts)return i.DEPTH_COMPONENT;if(n===rs)return i.DEPTH_STENCIL;if(n===pl)return i.RED;if(n===ml)return i.RED_INTEGER;if(n===ys)return i.RG;if(n===gl)return i.RG_INTEGER;if(n===xl)return i.RGBA_INTEGER;if(n===Ao||n===Eo||n===To||n===Co)if(o===cn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_l||n===yl||n===vl||n===Ml)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wl||n===Sl||n===bl||n===Al||n===El||n===Ro||n===Tl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wl||n===Sl)return o===cn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bl)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Al)return r.COMPRESSED_R11_EAC;if(n===El)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ro)return r.COMPRESSED_RG11_EAC;if(n===Tl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Cl||n===Rl||n===Pl||n===Il||n===Fl||n===Ll||n===Dl||n===zl||n===Nl||n===Ul||n===Bl||n===Ol||n===kl||n===Vl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cl)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rl)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pl)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fl)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ll)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dl)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zl)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nl)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ul)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bl)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ol)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kl)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hl||n===Gl||n===Wl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Hl)return o===cn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xl||n===ql||n===Po||n===Yl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var P1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new io(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new bi({vertexShader:P1,fragmentShader:I1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vt(new xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oh=class extends Vi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,m=null,g=null,_=null,R=typeof XRWebGLBinding<"u",p=new Bh,y={},P=e.getContextAttributes(),F=null,I=null,B=[],D=[],A=new Ct,L=null,$=null,O=new Xn;O.viewport=new fn;let ot=new Xn;ot.viewport=new fn;let dt=[O,ot],st=new rl,wt=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(zt){let ne=B[zt];return ne===void 0&&(ne=new hr,B[zt]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(zt){let ne=B[zt];return ne===void 0&&(ne=new hr,B[zt]=ne),ne.getGripSpace()},this.getHand=function(zt){let ne=B[zt];return ne===void 0&&(ne=new hr,B[zt]=ne),ne.getHandSpace()};function Bt(zt){let ne=D.indexOf(zt.inputSource);if(ne===-1)return;let he=B[ne];he!==void 0&&(he.update(zt.inputSource,zt.frame,c||o),he.dispatchEvent({type:zt.type,data:zt.inputSource}))}function gt(){s.removeEventListener("select",Bt),s.removeEventListener("selectstart",Bt),s.removeEventListener("selectend",Bt),s.removeEventListener("squeeze",Bt),s.removeEventListener("squeezestart",Bt),s.removeEventListener("squeezeend",Bt),s.removeEventListener("end",gt),s.removeEventListener("inputsourceschange",Mt);for(let zt=0;zt<B.length;zt++){let ne=D[zt];ne!==null&&(D[zt]=null,B[zt].disconnect(ne))}wt=null,ft=null,p.reset();for(let zt in y)delete y[zt];if(t.setRenderTarget(F),g=null,m=null,f=null,s=null,I=null,pe.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(A.width,A.height,!1),$!==null){let zt=$.camera;zt.fov=$.fov,zt.zoom=$.zoom,zt.updateProjectionMatrix(),$=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(zt){r=zt,n.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(zt){a=zt,n.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(zt){c=zt},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return f===null&&R&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(zt){if(s=zt,s!==null){if(F=t.getRenderTarget(),s.addEventListener("select",Bt),s.addEventListener("selectstart",Bt),s.addEventListener("selectend",Bt),s.addEventListener("squeeze",Bt),s.addEventListener("squeezestart",Bt),s.addEventListener("squeezeend",Bt),s.addEventListener("end",gt),s.addEventListener("inputsourceschange",Mt),P.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(A),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,_e=null,Jt=null;P.depth&&(Jt=P.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,he=P.stencil?rs:ts,_e=P.stencil?Ns:Li);let ye={colorFormat:e.RGBA8,depthFormat:Jt,scaleFactor:r};f=this.getBinding(),m=f.createProjectionLayer(ye),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),I=new oi(m.textureWidth,m.textureHeight,{format:zi,type:ii,depthTexture:new ns(m.textureWidth,m.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let he={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,he),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),I=new oi(g.framebufferWidth,g.framebufferHeight,{format:zi,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),pe.setContext(s),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Mt(zt){for(let ne=0;ne<zt.removed.length;ne++){let he=zt.removed[ne],_e=D.indexOf(he);_e>=0&&(D[_e]=null,B[_e].disconnect(he))}for(let ne=0;ne<zt.added.length;ne++){let he=zt.added[ne],_e=D.indexOf(he);if(_e===-1){for(let ye=0;ye<B.length;ye++)if(ye>=D.length){D.push(he),_e=ye;break}else if(D[ye]===null){D[ye]=he,_e=ye;break}if(_e===-1)break}let Jt=B[_e];Jt&&Jt.connect(he)}}function vt(zt,ne){ne===null?zt.matrixWorld.copy(zt.matrix):zt.matrixWorld.multiplyMatrices(ne.matrixWorld,zt.matrix),zt.matrixWorldInverse.copy(zt.matrixWorld).invert()}this.updateCamera=function(zt){if(s===null)return;let ne=zt.near,he=zt.far;p.texture!==null&&(p.depthNear>0&&(ne=p.depthNear),p.depthFar>0&&(he=p.depthFar)),st.near=ot.near=O.near=ne,st.far=ot.far=O.far=he,(wt!==st.near||ft!==st.far)&&(s.updateRenderState({depthNear:st.near,depthFar:st.far}),wt=st.near,ft=st.far),st.layers.mask=zt.layers.mask|6,O.layers.mask=st.layers.mask&-5,ot.layers.mask=st.layers.mask&-3;let _e=zt.parent,Jt=st.cameras;vt(st,_e);for(let ye=0;ye<Jt.length;ye++)vt(Jt[ye],_e);st.projectionMatrix.copy(O.projectionMatrix),st.projectionMatrixInverse.copy(O.projectionMatrixInverse),$===null&&zt.isPerspectiveCamera&&($={camera:zt,fov:zt.fov,zoom:zt.zoom}),It(zt,st,_e)};function It(zt,ne,he){he===null?zt.matrix.copy(ne.matrixWorld):(zt.matrix.copy(he.matrixWorld),zt.matrix.invert(),zt.matrix.multiply(ne.matrixWorld)),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.updateMatrixWorld(!0),zt.projectionMatrix.copy(ne.projectionMatrix),zt.projectionMatrixInverse.copy(ne.projectionMatrixInverse),zt.isPerspectiveCamera&&(zt.fov=Ia*2*Math.atan(1/zt.projectionMatrix.elements[5]),zt.zoom=1)}this.getCamera=function(){return st},this.getFoveation=function(){if(!(m===null&&g===null))return l},this.setFoveation=function(zt){l=zt,m!==null&&(m.fixedFoveation=zt),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=zt)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(st)},this.getCameraTexture=function(zt){return y[zt]};let qt=null;function $t(zt,ne){if(d=ne.getViewerPose(c||o),_=ne,d!==null){let he=d.views;g!==null&&(t.setRenderTargetFramebuffer(I,g.framebuffer),t.setRenderTarget(I));let _e=!1;he.length!==st.cameras.length&&(st.cameras.length=0,_e=!0);for(let le=0;le<he.length;le++){let W=he[le],St=null;if(g!==null)St=g.getViewport(W);else{let mt=f.getViewSubImage(m,W);St=mt.viewport,le===0&&(t.setRenderTargetTextures(I,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(I))}let rt=dt[le];rt===void 0&&(rt=new Xn,rt.layers.enable(le),rt.viewport=new fn,dt[le]=rt),rt.matrix.fromArray(W.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(W.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(St.x,St.y,St.width,St.height),le===0&&(st.matrix.copy(rt.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale)),_e===!0&&st.cameras.push(rt)}let Jt=s.enabledFeatures;if(Jt&&Jt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&R){f=n.getBinding();let le=f.getDepthInformation(he[0]);le&&le.isValid&&le.texture&&p.init(le,s.renderState)}if(Jt&&Jt.includes("camera-access")&&R){t.state.unbindTexture(),f=n.getBinding();for(let le=0;le<he.length;le++){let W=he[le].camera;if(W){let St=y[W];St||(St=new io,y[W]=St);let rt=f.getCameraImage(W);St.sourceTexture=rt}}}}for(let he=0;he<B.length;he++){let _e=D[he],Jt=B[he];_e!==null&&Jt!==void 0&&Jt.update(_e,ne,c||o)}qt&&qt(zt,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),_=null}let pe=new rf;pe.setAnimationLoop($t),this.setAnimationLoop=function(zt){qt=zt},this.dispose=function(){}}},F1=new rn,mf=new We;mf.set(-1,0,0,0,1,0,0,0,1);function L1(i,t){function e(p,y){p.matrixAutoUpdate===!0&&p.updateMatrix(),y.value.copy(p.matrix)}function n(p,y){y.color.getRGB(p.fogColor.value,Mh(i)),y.isFog?(p.fogNear.value=y.near,p.fogFar.value=y.far):y.isFogExp2&&(p.fogDensity.value=y.density)}function s(p,y,P,F,I){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?r(p,y):y.isMeshLambertMaterial?(r(p,y),y.envMap&&(p.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(r(p,y),f(p,y)):y.isMeshPhongMaterial?(r(p,y),d(p,y),y.envMap&&(p.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(r(p,y),m(p,y),y.isMeshPhysicalMaterial&&g(p,y,I)):y.isMeshMatcapMaterial?(r(p,y),_(p,y)):y.isMeshDepthMaterial?r(p,y):y.isMeshDistanceMaterial?(r(p,y),R(p,y)):y.isMeshNormalMaterial?r(p,y):y.isLineBasicMaterial?(o(p,y),y.isLineDashedMaterial&&a(p,y)):y.isPointsMaterial?l(p,y,P,F):y.isSpriteMaterial?c(p,y):y.isShadowMaterial?(p.color.value.copy(y.color),p.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function r(p,y){p.opacity.value=y.opacity,y.color&&p.diffuse.value.copy(y.color),y.emissive&&p.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(p.map.value=y.map,e(y.map,p.mapTransform)),y.alphaMap&&(p.alphaMap.value=y.alphaMap,e(y.alphaMap,p.alphaMapTransform)),y.bumpMap&&(p.bumpMap.value=y.bumpMap,e(y.bumpMap,p.bumpMapTransform),p.bumpScale.value=y.bumpScale,y.side===kn&&(p.bumpScale.value*=-1)),y.normalMap&&(p.normalMap.value=y.normalMap,e(y.normalMap,p.normalMapTransform),p.normalScale.value.copy(y.normalScale),y.side===kn&&p.normalScale.value.negate()),y.displacementMap&&(p.displacementMap.value=y.displacementMap,e(y.displacementMap,p.displacementMapTransform),p.displacementScale.value=y.displacementScale,p.displacementBias.value=y.displacementBias),y.emissiveMap&&(p.emissiveMap.value=y.emissiveMap,e(y.emissiveMap,p.emissiveMapTransform)),y.specularMap&&(p.specularMap.value=y.specularMap,e(y.specularMap,p.specularMapTransform)),y.alphaTest>0&&(p.alphaTest.value=y.alphaTest);let P=t.get(y),F=P.envMap,I=P.envMapRotation;F&&(p.envMap.value=F,p.envMapRotation.value.setFromMatrix4(F1.makeRotationFromEuler(I)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(mf),p.reflectivity.value=y.reflectivity,p.ior.value=y.ior,p.refractionRatio.value=y.refractionRatio),y.lightMap&&(p.lightMap.value=y.lightMap,p.lightMapIntensity.value=y.lightMapIntensity,e(y.lightMap,p.lightMapTransform)),y.aoMap&&(p.aoMap.value=y.aoMap,p.aoMapIntensity.value=y.aoMapIntensity,e(y.aoMap,p.aoMapTransform))}function o(p,y){p.diffuse.value.copy(y.color),p.opacity.value=y.opacity,y.map&&(p.map.value=y.map,e(y.map,p.mapTransform))}function a(p,y){p.dashSize.value=y.dashSize,p.totalSize.value=y.dashSize+y.gapSize,p.scale.value=y.scale}function l(p,y,P,F){p.diffuse.value.copy(y.color),p.opacity.value=y.opacity,p.size.value=y.size*P,p.scale.value=F*.5,y.map&&(p.map.value=y.map,e(y.map,p.uvTransform)),y.alphaMap&&(p.alphaMap.value=y.alphaMap,e(y.alphaMap,p.alphaMapTransform)),y.alphaTest>0&&(p.alphaTest.value=y.alphaTest)}function c(p,y){p.diffuse.value.copy(y.color),p.opacity.value=y.opacity,p.rotation.value=y.rotation,y.map&&(p.map.value=y.map,e(y.map,p.mapTransform)),y.alphaMap&&(p.alphaMap.value=y.alphaMap,e(y.alphaMap,p.alphaMapTransform)),y.alphaTest>0&&(p.alphaTest.value=y.alphaTest)}function d(p,y){p.specular.value.copy(y.specular),p.shininess.value=Math.max(y.shininess,1e-4)}function f(p,y){y.gradientMap&&(p.gradientMap.value=y.gradientMap)}function m(p,y){p.metalness.value=y.metalness,y.metalnessMap&&(p.metalnessMap.value=y.metalnessMap,e(y.metalnessMap,p.metalnessMapTransform)),p.roughness.value=y.roughness,y.roughnessMap&&(p.roughnessMap.value=y.roughnessMap,e(y.roughnessMap,p.roughnessMapTransform)),y.envMap&&(p.envMapIntensity.value=y.envMapIntensity)}function g(p,y,P){p.ior.value=y.ior,y.diffuseRoughness>0&&(p.diffuseRoughness.value=y.diffuseRoughness,y.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=y.diffuseRoughnessMap,e(y.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),y.sheen>0&&(p.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),p.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(p.sheenColorMap.value=y.sheenColorMap,e(y.sheenColorMap,p.sheenColorMapTransform)),y.sheenRoughnessMap&&(p.sheenRoughnessMap.value=y.sheenRoughnessMap,e(y.sheenRoughnessMap,p.sheenRoughnessMapTransform))),y.clearcoat>0&&(p.clearcoat.value=y.clearcoat,p.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(p.clearcoatMap.value=y.clearcoatMap,e(y.clearcoatMap,p.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,e(y.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(p.clearcoatNormalMap.value=y.clearcoatNormalMap,e(y.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===kn&&p.clearcoatNormalScale.value.negate())),y.dispersion>0&&(p.dispersion.value=y.dispersion),y.retroreflectivity>0&&(p.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(p.iridescence.value=y.iridescence,p.iridescenceIOR.value=y.iridescenceIOR,p.iridescenceThicknessMinimum.value=y.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=y.iridescenceThicknessMaximum,y.iridescenceMap&&(p.iridescenceMap.value=y.iridescenceMap,e(y.iridescenceMap,p.iridescenceMapTransform)),y.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=y.iridescenceThicknessMap,e(y.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),y.transmission>0&&(p.transmission.value=y.transmission,p.transmissionSamplerMap.value=P.texture,p.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(p.transmissionMap.value=y.transmissionMap,e(y.transmissionMap,p.transmissionMapTransform)),p.thickness.value=y.thickness,y.thicknessMap&&(p.thicknessMap.value=y.thicknessMap,e(y.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=y.attenuationDistance,p.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(p.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(p.anisotropyMap.value=y.anisotropyMap,e(y.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=y.specularIntensity,p.specularColor.value.copy(y.specularColor),y.specularColorMap&&(p.specularColorMap.value=y.specularColorMap,e(y.specularColorMap,p.specularColorMapTransform)),y.specularIntensityMap&&(p.specularIntensityMap.value=y.specularIntensityMap,e(y.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,y){y.matcap&&(p.matcap.value=y.matcap)}function R(p,y){let P=t.get(y).light;p.referencePosition.value.setFromMatrixPosition(P.matrixWorld),p.nearDistance.value=P.shadow.camera.near,p.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function D1(i,t,e,n){let s={},r={};function o(P,F){let I=F.program;n.uniformBlockBinding(P,I,s[P.id])}function a(P,F){let I=s[P.id];I===void 0&&(_(P),I=l(P),s[P.id]=I,P.addEventListener("dispose",p));let B=F.program;n.updateUBOMapping(P,B);let D=t.render.frame;r[P.id]!==D&&(c(P),r[P.id]=D)}function l(P){let F=i.createBuffer(),I=P.__size,B=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,F),i.bufferData(i.UNIFORM_BUFFER,I,B),i.bindBuffer(i.UNIFORM_BUFFER,null),F}function c(P){let F=s[P.id],I=P.uniforms,B=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,F);for(let D=0,A=I.length;D<A;D++){let L=I[D];if(Array.isArray(L))for(let $=0,O=L.length;$<O;$++)d(L[$],D,$,B);else d(L,D,0,B)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(P,F,I,B){if(m(P,F,I,B)===!0){let D=P.__offset,A=P.value;if(Array.isArray(A)){let L=0;for(let $=0;$<A.length;$++){let O=A[$],ot=R(O,!0);f(O,P.__data,L),L+=ot.storage/Float32Array.BYTES_PER_ELEMENT}}else f(A,P.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,D,P.__data)}}function f(P,F,I){typeof P=="number"||typeof P=="boolean"?F[I]=P:P.isMatrix3?(F[I]=P.elements[0],F[I+1]=P.elements[1],F[I+2]=P.elements[2],F[I+3]=0,F[I+4]=P.elements[3],F[I+5]=P.elements[4],F[I+6]=P.elements[5],F[I+7]=0,F[I+8]=P.elements[6],F[I+9]=P.elements[7],F[I+10]=P.elements[8],F[I+11]=0):ArrayBuffer.isView(P)?F.set(P.subarray(0,F.length-I),I):P.toArray(F,I)}function m(P,F,I,B){let D=P.value,A=F+"_"+I;if(Array.isArray(D)){B[A]===void 0&&(B[A]=[]);let L=B[A],$=!1;for(let O=0;O<D.length;O++)g(D[O],L,O)===!0&&($=!0);return $}return g(D,B,A)}function g(P,F,I){if(F[I]===void 0)return typeof P=="number"||typeof P=="boolean"?F[I]=P:ArrayBuffer.isView(P)?F[I]=P.slice():F[I]=P.clone(),!0;{let B=F[I];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return F[I]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(B.equals(P)===!1)return B.copy(P),!0}}return!1}function _(P){let F=P.uniforms,I=0,B=16;for(let A=0,L=F.length;A<L;A++){let $=Array.isArray(F[A])?F[A]:[F[A]];for(let O=0,ot=$.length;O<ot;O++){let dt=$[O],st=Array.isArray(dt.value)?dt.value:[dt.value],wt=Array.isArray(F[A])||Array.isArray(dt.value),ft=I;for(let gt=0,Mt=st.length;gt<Mt;gt++){let vt=st[gt],It=R(vt,wt),qt=I%B,$t=qt%It.boundary,pe=qt+$t;I+=$t,pe!==0&&B-pe<It.storage&&(I+=B-pe),gt===0&&(ft=I),I+=It.storage}let Bt=dt.type==="int"?Int32Array:dt.type==="uint"?Uint32Array:Float32Array;dt.__data=new Bt((I-ft)/Float32Array.BYTES_PER_ELEMENT),dt.__offset=ft}}let D=I%B;return D>0&&(I+=B-D),P.__size=I,P.__cache={},this}function R(P,F){let I={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(I.boundary=4,I.storage=4):P.isVector2?(I.boundary=8,I.storage=8):P.isVector3||P.isColor?(I.boundary=16,I.storage=12):P.isVector4?(I.boundary=16,I.storage=16):P.isMatrix3?(I.boundary=16,I.storage=48):P.isMatrix4?(I.boundary=16,I.storage=64):P.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(P)?(I.boundary=16,I.storage=P.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",P),F===!0&&(I.boundary=16,I.storage=Math.ceil(I.storage/16)*16),I}function p(P){let F=P.target;F.removeEventListener("dispose",p),i.deleteBuffer(s[F.id]),delete s[F.id],delete r[F.id]}function y(){for(let P in s)i.deleteBuffer(s[P]);s={},r={}}return{bind:o,update:a,dispose:y}}var z1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xi=null;function N1(){return Xi===null&&(Xi=new jr(z1,16,16,ys,Di),Xi.name="DFG_LUT",Xi.minFilter=Qn,Xi.magFilter=Qn,Xi.wrapS=Oi,Xi.wrapT=Oi,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}var jl=class{constructor(t={}){let{canvas:e=Md(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:g=ii}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let R=g,p=new Set([xl,gl,ml]),y=new Set([ii,Li,yr,Ns,dl,fl]),P=new Uint32Array(4),F=new Int32Array(4),I={textures:[],min:[],max:[],resolution:[],intensity:[]},B=null,D=null,A=[],L=[],$=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,ot=!1,dt=null,st=null,wt=null,ft=null;this._outputColorSpace=jn;let Bt=0,gt=0,Mt=null,vt=-1,It=null,qt=new fn,$t=new fn,pe=null,zt=new Ie(0),ne=0,he=e.width,_e=e.height,Jt=1,ye=null,Fe=null,le=new fn(0,0,he,_e),W=new fn(0,0,he,_e),St=!1,rt=new fs,mt=new Na,K=!1,pt=!1,lt=new rn,ht=new j,xt=new fn,u={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},M=!1;function Y(){return Mt===null?Jt:1}let C=n;function _t(h,x){return e.getContext(h,x)}let H,V,G,Dt,yt,Et,U,b,nt,it,tt,ut,Wt,Ft,Ut,Zt,ee,Q,bt,Gt,se,ce,xe;try{let h={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${al}`),e.addEventListener("webglcontextlost",ke,!1),e.addEventListener("webglcontextrestored",Ae,!1),e.addEventListener("webglcontextcreationerror",fe,!1),C===null){let x="webgl2";if(C=_t(x,h),C===null)throw _t(x)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(h){throw e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),Oe("WebGLRenderer: "+h.message),h}function Le(){H=new Yg(C),H.init(),se=new R1(C,H),V=new Ng(C,H,t,se),G=new T1(C,H),V.reversedDepthBuffer&&m&&G.buffers.depth.setReversed(!0),st=C.createFramebuffer(),wt=C.createFramebuffer(),ft=C.createFramebuffer(),Dt=new $g(C),yt=new f1,Et=new C1(C,H,G,yt,V,se,Dt),U=new qg(O),b=new jp(C),ce=new Dg(C,b),nt=new Zg(C,b,Dt,ce),it=new jg(C,nt,b,ce,Dt),Q=new Kg(C,V,Et),Ut=new Ug(yt),tt=new d1(O,U,H,V,ce,Ut),ut=new L1(O,yt),Wt=new m1,Ft=new M1(H),ee=new Lg(O,U,G,it,_,l),Zt=new E1(O,it,V),xe=new D1(C,Dt,V,G),bt=new zg(C,H,Dt),Gt=new Jg(C,H,Dt),Dt.programs=tt.programs,O.capabilities=V,O.extensions=H,O.properties=yt,O.renderLists=Wt,O.shadowMap=Zt,O.state=G,O.info=Dt}R!==ii&&($=new tx(R,e.width,e.height,a,s,r));let Kt=new Oh(O,C);this.xr=Kt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let h=H.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){let h=H.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return Jt},this.setPixelRatio=function(h){h!==void 0&&(Jt=h,this.setSize(he,_e,!1))},this.getSize=function(h){return h.set(he,_e)},this.setSize=function(h,x,S=!0){if(Kt.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}he=h,_e=x,e.width=Math.floor(h*Jt),e.height=Math.floor(x*Jt),S===!0&&(e.style.width=h+"px",e.style.height=x+"px"),$!==null&&$.setSize(e.width,e.height),this.setViewport(0,0,h,x)},this.getDrawingBufferSize=function(h){return h.set(he*Jt,_e*Jt).floor()},this.setDrawingBufferSize=function(h,x,S){he=h,_e=x,Jt=S,e.width=Math.floor(h*S),e.height=Math.floor(x*S),this.setViewport(0,0,h,x)},this.setEffects=function(h){if(R===ii){Oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(h){for(let x=0;x<h.length;x++)if(h[x].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}$.setEffects(h||[])},this.getCurrentViewport=function(h){return h.copy(qt)},this.getViewport=function(h){return h.copy(le)},this.setViewport=function(h,x,S,T){h.isVector4?le.set(h.x,h.y,h.z,h.w):le.set(h,x,S,T),G.viewport(qt.copy(le).multiplyScalar(Y()).round())},this.getScissor=function(h){return h.copy(W)},this.setScissor=function(h,x,S,T){h.isVector4?W.set(h.x,h.y,h.z,h.w):W.set(h,x,S,T),G.scissor($t.copy(W).multiplyScalar(Y()).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(h){G.setScissorTest(St=h)},this.setOpaqueSort=function(h){ye=h},this.setTransparentSort=function(h){Fe=h},this.getClearColor=function(h){return h.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(h=!0,x=!0,S=!0){let T=0;if(h){let E=!1;if(Mt!==null){let z=Mt.texture.format;E=p.has(z)}if(E){let z=Mt.texture.type,X=y.has(z),k=ee.getClearColor(),N=ee.getClearAlpha(),q=k.r,ct=k.g,Pt=k.b;X?(P[0]=q,P[1]=ct,P[2]=Pt,P[3]=N,C.clearBufferuiv(C.COLOR,0,P)):(F[0]=q,F[1]=ct,F[2]=Pt,F[3]=N,C.clearBufferiv(C.COLOR,0,F))}else T|=C.COLOR_BUFFER_BIT}x&&(T|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),S&&(T|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T!==0&&C.clear(T)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(h){h.setRenderer(this),dt=h},this.dispose=function(){e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),ee.dispose(),Wt.dispose(),Ft.dispose(),Et.dispose(),yt.dispose(),U.dispose(),it.dispose(),nt.dispose(),ce.dispose(),xe.dispose(),tt.dispose(),Kt.dispose(),Kt.removeEventListener("sessionstart",Ei),Kt.removeEventListener("sessionend",Ti),Ln.stop()};function ke(h){h.preventDefault(),Wr("WebGLRenderer: Context Lost."),ot=!0}function Ae(){Wr("WebGLRenderer: Context Restored."),ot=!1;let h=Dt.autoReset,x=Zt.enabled,S=Zt.autoUpdate,T=Zt.needsUpdate,E=Zt.type;Le(),Dt.autoReset=h,Zt.enabled=x,Zt.autoUpdate=S,Zt.needsUpdate=T,Zt.type=E}function fe(h){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function Xe(h){let x=h.target;x.removeEventListener("dispose",Xe),pn(x)}function pn(h){En(h),yt.remove(h)}function En(h){let x=yt.get(h).programs;x!==void 0&&(x.forEach(function(S){tt.releaseProgram(S)}),h.isShaderMaterial&&tt.releaseShaderCache(h))}this.renderBufferDirect=function(h,x,S,T,E,z){x===null&&(x=u);let X=E.isMesh&&E.matrixWorld.determinantAffine()<0,k=J(h,x,S,T,E);G.setMaterial(T,X);let N=S.index,q=1;if(T.wireframe===!0){if(N=nt.getWireframeAttribute(S),N===void 0)return;q=2}let ct=S.drawRange,Pt=S.attributes.position,Lt=ct.start*q,Yt=(ct.start+ct.count)*q;z!==null&&(Lt=Math.max(Lt,z.start*q),Yt=Math.min(Yt,(z.start+z.count)*q)),N!==null?(Lt=Math.max(Lt,0),Yt=Math.min(Yt,N.count)):Pt!=null&&(Lt=Math.max(Lt,0),Yt=Math.min(Yt,Pt.count));let de=Yt-Lt;if(de<0||de===1/0)return;ce.setup(E,T,k,S,N);let jt,Ht=bt;if(N!==null&&(jt=b.get(N),Ht=Gt,Ht.setIndex(jt)),E.isMesh)T.wireframe===!0?(G.setLineWidth(T.wireframeLinewidth*Y()),Ht.setMode(C.LINES)):Ht.setMode(C.TRIANGLES);else if(E.isLine){let ie=T.linewidth;ie===void 0&&(ie=1),G.setLineWidth(ie*Y()),E.isLineSegments?Ht.setMode(C.LINES):E.isLineLoop?Ht.setMode(C.LINE_LOOP):Ht.setMode(C.LINE_STRIP)}else E.isPoints?Ht.setMode(C.POINTS):E.isSprite&&Ht.setMode(C.TRIANGLES);if(E.isBatchedMesh)if(H.get("WEBGL_multi_draw"))Ht.renderMultiDraw(E._multiDrawStarts,E._multiDrawCounts,E._multiDrawCount);else{let ie=E._multiDrawStarts,Xt=E._multiDrawCounts,re=E._multiDrawCount,ae=N?b.get(N).bytesPerElement:1,Ve=yt.get(T).currentProgram.getUniforms();for(let Ne=0;Ne<re;Ne++)Ve.setValue(C,"_gl_DrawID",Ne),Ht.render(ie[Ne]/ae,Xt[Ne])}else if(E.isInstancedMesh)Ht.renderInstances(Lt,de,E.count);else if(S.isInstancedBufferGeometry){let ie=S._maxInstanceCount!==void 0?S._maxInstanceCount:1/0,Xt=Math.min(S.instanceCount,ie);Ht.renderInstances(Lt,de,Xt)}else Ht.render(Lt,de)};function pi(h,x,S,T){dt!==null&&h.isNodeMaterial&&dt.setObject(T,h),K===!0&&Ut.setState(h,S,!1),h.transparent===!0&&h.side===Be&&h.forceSinglePass===!1?(h.side=kn,h.needsUpdate=!0,At(h,x,T),h.side=_s,h.needsUpdate=!0,At(h,x,T),h.side=Be):At(h,x,T)}this.compile=function(h,x,S=null){S===null&&(S=h),dt!==null&&dt.renderStart(h,x,S),D=Ft.get(S),D.init(x),L.push(D),S.traverseVisible(function(E){E.isLight&&E.layers.test(x.layers)&&(D.pushLight(E),E.castShadow&&D.pushShadow(E))}),h!==S&&h.traverseVisible(function(E){E.isLight&&E.layers.test(x.layers)&&(D.pushLight(E),E.castShadow&&D.pushShadow(E))}),D.setupLights(),dt!==null&&dt.updateLights(D.state.lightsArray),pt=this.localClippingEnabled,K=Ut.init(this.clippingPlanes,pt),K===!0&&Ut.setGlobalState(this.clippingPlanes,x),dt!==null&&Zt.render(D.state.shadowsArray,S,x);let T=new Set;return h.traverse(function(E){if(!(E.isMesh||E.isPoints||E.isLine||E.isSprite))return;let z=E.material;if(z)if(Array.isArray(z))for(let X=0;X<z.length;X++){let k=z[X];pi(k,S,x,E),T.add(k)}else pi(z,S,x,E),T.add(z)}),D=L.pop(),dt!==null&&dt.renderEnd(),T},this.compileAsync=function(h,x,S=null){let T=this.compile(h,x,S);return new Promise(E=>{function z(){if(T.forEach(function(X){let N=yt.get(X).currentProgram;(N===void 0||N.isReady())&&T.delete(X)}),T.size===0){E(h);return}setTimeout(z,10)}H.get("KHR_parallel_shader_compile")!==null?z():setTimeout(z,10)})};let mi=null;function Fn(h){mi&&mi(h)}function Ei(){Ln.stop()}function Ti(){Ln.start()}let Ln=new rf;Ln.setAnimationLoop(Fn),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(h){mi=h,Kt.setAnimationLoop(h),h===null?Ln.stop():Ln.start()},Kt.addEventListener("sessionstart",Ei),Kt.addEventListener("sessionend",Ti),this.render=function(h,x){if(x!==void 0&&x.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ot===!0)return;dt!==null&&dt.renderStart(h,x);let S=Kt.enabled===!0&&Kt.isPresenting===!0,T=$!==null&&(Mt===null||S)&&$.begin(O,Mt);if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),Kt.enabled===!0&&Kt.isPresenting===!0&&($===null||$.isCompositing()===!1)&&(Kt.cameraAutoUpdate===!0&&Kt.updateCamera(x),x=Kt.getCamera()),h.isScene===!0&&h.onBeforeRender(O,h,x,Mt),D=Ft.get(h,L.length),D.init(x),D.state.textureUnits=Et.getTextureUnits(),L.push(D),lt.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),x.isArrayCamera?mt.setFromArrayCamera(x):rt.setFromProjectionMatrix(lt,xi,x.reversedDepth),pt=this.localClippingEnabled,K=Ut.init(this.clippingPlanes,pt),B=Wt.get(h,A.length),B.init(),A.push(B),this.info.render.frame++,Kt.enabled===!0&&Kt.isPresenting===!0){let X=O.xr.getDepthSensingMesh();X!==null&&Hn(X,x,-1/0,O.sortObjects)}Hn(h,x,0,O.sortObjects),B.finish(),dt!==null&&dt.updateLights(D.state.lightsArray),O.sortObjects===!0&&B.sort(ye,Fe),M=Kt.enabled===!1||Kt.isPresenting===!1||Kt.hasDepthSensing()===!1,M&&ee.addToRenderList(B,h),this.info.autoReset===!0&&this.info.reset(),K===!0&&Ut.beginShadows();let E=D.state.shadowsArray;if(Zt.render(E,h,x),K===!0&&Ut.endShadows(),(T&&$.hasRenderPass())===!1){let X=B.opaque,k=B.transmissive;if(D.setupLights(),x.isArrayCamera){let N=x.cameras;if(k.length>0)for(let q=0,ct=N.length;q<ct;q++){let Pt=N[q];Nn(X,k,h,Pt)}M&&ee.render(h);for(let q=0,ct=N.length;q<ct;q++){let Pt=N[q];on(B,h,Pt,Pt.viewport)}}else k.length>0&&Nn(X,k,h,x),M&&ee.render(h),on(B,h,x)}Mt!==null&&gt===0&&(Et.updateMultisampleRenderTarget(Mt),Et.updateRenderTargetMipmap(Mt)),T&&$.end(O),h.isScene===!0&&h.onAfterRender(O,h,x),ce.resetDefaultState(),vt=-1,It=null,L.pop(),L.length>0?(D=L[L.length-1],Et.setTextureUnits(D.state.textureUnits),K===!0&&Ut.setGlobalState(O.clippingPlanes,D.state.camera)):D=null,A.pop(),A.length>0?B=A[A.length-1]:B=null,dt!==null&&dt.renderEnd()};function Hn(h,x,S,T){if(h.visible===!1)return;if(h.layers.test(x.layers)){if(h.isGroup)S=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(x);else if(h.isLight)D.pushLight(h),h.castShadow&&D.pushShadow(h);else if(h.isSprite){let X=x.isArrayCamera?mt:rt;if(!h.frustumCulled||h.intersectsFrustum(X)){T&&xt.setFromMatrixPosition(h.matrixWorld).applyMatrix4(lt);let k=it.update(h),N=h.material;N.visible&&B.push(h,k,N,S,xt.z,null,x)}}else if(h.isMesh||h.isLine||h.isPoints){let X=x.isArrayCamera?mt:rt;if(!h.frustumCulled||h.intersectsFrustum(X)){let k=it.update(h),N=h.material;if(T&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),xt.copy(h.boundingSphere.center)):(k.boundingSphere===null&&k.computeBoundingSphere(),xt.copy(k.boundingSphere.center)),xt.applyMatrix4(h.matrixWorld).applyMatrix4(lt)),Array.isArray(N)){let q=k.groups;for(let ct=0,Pt=q.length;ct<Pt;ct++){let Lt=q[ct],Yt=N[Lt.materialIndex];Yt&&Yt.visible&&B.push(h,k,Yt,S,xt.z,Lt,x)}}else N.visible&&B.push(h,k,N,S,xt.z,null,x)}}}let z=h.children;for(let X=0,k=z.length;X<k;X++)Hn(z[X],x,S,T)}function on(h,x,S,T){let{opaque:E,transmissive:z,transparent:X}=h;D.setupLightsView(S),K===!0&&Ut.setGlobalState(O.clippingPlanes,S),T&&G.viewport(qt.copy(T)),E.length>0&&Z(E,x,S),z.length>0&&Z(z,x,S),X.length>0&&Z(X,x,S),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function Nn(h,x,S,T){if((S.isScene===!0?S.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[T.id]===void 0){let Lt=H.has("EXT_color_buffer_half_float")||H.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[T.id]=new oi(1,1,{generateMipmaps:!0,type:Lt?Di:ii,minFilter:ss,samples:Math.max(4,V.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tn.workingColorSpace})}let z=D.state.transmissionRenderTarget[T.id],X=T.viewport||qt;z.setSize(X.z*O.transmissionResolutionScale,X.w*O.transmissionResolutionScale);let k=O.getRenderTarget(),N=O.getActiveCubeFace(),q=O.getActiveMipmapLevel();O.setRenderTarget(z),O.getClearColor(zt),ne=O.getClearAlpha(),ne<1&&O.setClearColor(16777215,.5),O.clear(),M&&ee.render(S);let ct=O.toneMapping;O.toneMapping=Wi;let Pt=T.viewport;if(T.viewport!==void 0&&(T.viewport=void 0),D.setupLightsView(T),K===!0&&Ut.setGlobalState(O.clippingPlanes,T),Z(h,S,T),Et.updateMultisampleRenderTarget(z),Et.updateRenderTargetMipmap(z),H.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let Yt=0,de=x.length;Yt<de;Yt++){let jt=x[Yt],{object:Ht,geometry:ie,material:Xt,group:re}=jt;if(Xt.side===Be&&Ht.layers.test(T.layers)){let ae=Xt.side;Xt.side=kn,Xt.needsUpdate=!0,et(Ht,S,T,ie,Xt,re),Xt.side=ae,Xt.needsUpdate=!0,Lt=!0}}Lt===!0&&(Et.updateMultisampleRenderTarget(z),Et.updateRenderTargetMipmap(z))}O.setRenderTarget(k,N,q),O.setClearColor(zt,ne),Pt!==void 0&&(T.viewport=Pt),O.toneMapping=ct}function Z(h,x,S){let T=x.isScene===!0?x.overrideMaterial:null;for(let E=0,z=h.length;E<z;E++){let X=h[E],{object:k,geometry:N,group:q}=X,ct=X.material;ct.allowOverride===!0&&T!==null&&(ct=T),k.layers.test(S.layers)&&et(k,x,S,N,ct,q)}}function et(h,x,S,T,E,z){dt!==null&&E.isNodeMaterial&&dt.setObject(h,E),h.onBeforeRender(O,x,S,T,E,z),h.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),E.onBeforeRender(O,x,S,T,h,z),E.transparent===!0&&E.side===Be&&E.forceSinglePass===!1?(E.side=kn,E.needsUpdate=!0,O.renderBufferDirect(S,x,T,E,h,z),E.side=_s,E.needsUpdate=!0,O.renderBufferDirect(S,x,T,E,h,z),E.side=Be):O.renderBufferDirect(S,x,T,E,h,z),h.onAfterRender(O,x,S,T,E,z)}function Rt(h){let x=0;for(let S of h)S.texture!==null&&x++;return x}function At(h,x,S){x.isScene!==!0&&(x=u);let T=yt.get(h),E=D.state.lights,z=D.state.shadowsArray,X=E.state.version,k=tt.getParameters(h,E.state,z,x,S,D.state.lightProbeGridArray),N=tt.getProgramCacheKey(k),q=T.programs;T.environment=h.isMeshStandardMaterial||h.isMeshLambertMaterial||h.isMeshPhongMaterial?x.environment:null,T.fog=x.fog;let ct=h.isMeshStandardMaterial||h.isMeshLambertMaterial&&!h.envMap||h.isMeshPhongMaterial&&!h.envMap;T.envMap=U.get(h.envMap||T.environment,ct),T.envMapRotation=T.environment!==null&&h.envMap===null?x.environmentRotation:h.envMapRotation,q===void 0&&(h.addEventListener("dispose",Xe),q=new Map,T.programs=q,T.programVariants=new Map);let Pt=q.get(N);if(Pt!==void 0){if(T.currentProgram===Pt&&T.lightsStateVersion===X)return Pe(h,k),Pt}else k.uniforms=tt.getUniforms(h),dt!==null&&h.isNodeMaterial&&dt.build(h,S,k),h.onBeforeCompile(k,O),Pt=tt.acquireProgram(k,N),q.set(N,Pt),T.uniforms=k.uniforms;let Lt=T.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(Lt.clippingPlanes=Ut.uniform),Pe(h,k),T.needsLights=v(h),T.lightsStateVersion=X,T.needsLights&&(Lt.ambientLightColor.value=E.state.ambient,Lt.sunLights.value=E.state.sun,Lt.sunLightShadows.value=E.state.sunShadow,Lt.directionalLights.value=E.state.directional,Lt.directionalLightShadows.value=E.state.directionalShadow,Lt.spotLights.value=E.state.spot,Lt.spotLightShadows.value=E.state.spotShadow,Lt.rectAreaLights.value=E.state.rectArea,Lt.ltc_1.value=E.state.rectAreaLTC1,Lt.ltc_2.value=E.state.rectAreaLTC2,Lt.pointLights.value=E.state.point,Lt.pointLightShadows.value=E.state.pointShadow,Lt.hemisphereLights.value=E.state.hemi,Lt.sunShadowMatrix.value=E.state.sunShadowMatrix,Lt.sunShadowCascade.value=E.state.sunShadowCascade,Lt.directionalShadowMatrix.value=E.state.directionalShadowMatrix,Lt.spotLightMatrix.value=E.state.spotLightMatrix,Lt.spotLightMap.value=E.state.spotLightMap,Lt.pointShadowMatrix.value=E.state.pointShadowMatrix),T.numLightProbeGrids=Rt(D.state.lightProbeGridArray),T.currentProgram=Pt,T.uniformsList=null,Pt}function kt(h,x,S,T,E){let z=yt.get(h),X=z.currentProgram.id+","+T+","+E,k=z.programVariants.get(X);return k===void 0?(k=At(h,x,S),z.programVariants.set(X,k)):(z.currentProgram=k,z.uniformsList=null,z.outputColorSpace=T,z.toneMapping=E),k}function Tt(h){if(h.uniformsList===null){let x=h.currentProgram.getUniforms();h.uniformsList=vr.seqWithValue(x.seq,h.uniforms)}return h.uniformsList}function Pe(h,x){let S=yt.get(h);S.outputColorSpace=x.outputColorSpace,S.batching=x.batching,S.batchingColor=x.batchingColor,S.instancing=x.instancing,S.instancingColor=x.instancingColor,S.instancingMorph=x.instancingMorph,S.skinning=x.skinning,S.morphTargets=x.morphTargets,S.morphNormals=x.morphNormals,S.morphColors=x.morphColors,S.morphTargetsCount=x.morphTargetsCount,S.numClippingPlanes=x.numClippingPlanes,S.numIntersection=x.numClipIntersection,S.vertexAlphas=x.vertexAlphas,S.vertexTangents=x.vertexTangents,S.toneMapping=x.toneMapping}function J(h,x,S,T,E){x.isScene!==!0&&(x=u),Et.resetTextureUnits();let z=x.fog,X=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?x.environment:null,k=Mt===null?O.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:tn.workingColorSpace,N=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,q=U.get(T.envMap||X,N),ct=T.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,Pt=!!S.attributes.tangent&&(!!T.normalMap||T.anisotropy>0),Lt=!!S.morphAttributes.position,Yt=!!S.morphAttributes.normal,de=!!S.morphAttributes.color,jt=Wi;T.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(jt=O.toneMapping);let Ht=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,ie=Ht!==void 0?Ht.length:0,Xt=yt.get(T),re=D.state.lights;if(K===!0&&(pt===!0||h!==It)){let He=h===It&&T.id===vt;Ut.setState(T,h,He)}let ae=!1,Ve=!1;T.version===Xt.__version?Xt.needsLights&&Xt.lightsStateVersion!==re.state.version||E.isBatchedMesh&&Xt.batching===!1||!E.isBatchedMesh&&Xt.batching===!0||E.isBatchedMesh&&Xt.batchingColor===!0&&E._colorsTexture===null||E.isBatchedMesh&&Xt.batchingColor===!1&&E._colorsTexture!==null||E.isInstancedMesh&&Xt.instancing===!1||!E.isInstancedMesh&&Xt.instancing===!0||E.isSkinnedMesh&&Xt.skinning===!1||!E.isSkinnedMesh&&Xt.skinning===!0||E.isInstancedMesh&&Xt.instancingColor===!0&&E.instanceColor===null||E.isInstancedMesh&&Xt.instancingColor===!1&&E.instanceColor!==null||E.isInstancedMesh&&Xt.instancingMorph===!0&&E.morphTexture===null||E.isInstancedMesh&&Xt.instancingMorph===!1&&E.morphTexture!==null||Xt.envMap!==q||T.fog===!0&&Xt.fog!==z||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Ut.numPlanes||Xt.numIntersection!==Ut.numIntersection)||Xt.vertexAlphas!==ct||Xt.vertexTangents!==Pt||Xt.morphTargets!==Lt||Xt.morphNormals!==Yt||Xt.morphColors!==de||Xt.morphTargetsCount!==ie||Xt.numLightProbeGrids!==Rt(D.state.lightProbeGridArray)?ae=!0:(Xt.outputColorSpace!==k||Xt.toneMapping!==jt)&&(Ve=!0):(ae=!0,Xt.__version=T.version);let Ne=Xt.currentProgram;(ae===!0||Ve===!0)&&(Ne=Ve===!0?kt(T,x,E,k,jt):At(T,x,E),dt&&T.isNodeMaterial&&dt.onUpdateProgram(T,Ne,Xt));let sn=!1,ln=!1,ue=!1,ge=Ne.getUniforms(),Re=Xt.uniforms;if(G.useProgram(Ne.program)&&(sn=!0,ln=!0,ue=!0),T.id!==vt&&(vt=T.id,ln=!0),sn||It!==h){G.buffers.depth.getReversed()&&h.reversedDepth!==!0&&(h._reversedDepth=!0,h.updateProjectionMatrix()),ge.setValue(C,"projectionMatrix",h.projectionMatrix),ge.setValue(C,"viewMatrix",h.matrixWorldInverse);let Je=ge.map.cameraPosition;Je!==void 0&&Je.setValue(C,ht.setFromMatrixPosition(h.matrixWorld)),V.logarithmicDepthBuffer&&ge.setValue(C,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(T.isMeshPhongMaterial||T.isMeshToonMaterial||T.isMeshLambertMaterial||T.isMeshBasicMaterial||T.isMeshStandardMaterial||T.isShaderMaterial)&&ge.setValue(C,"isOrthographic",h.isOrthographicCamera===!0),It!==h&&(It=h,ln=!0,ue=!0)}if(Xt.needsLights&&(re.state.sunShadowMap.length>0&&ge.setValue(C,"sunShadowMap",re.state.sunShadowMap,Et),re.state.directionalShadowMap.length>0&&ge.setValue(C,"directionalShadowMap",re.state.directionalShadowMap,Et),re.state.spotShadowMap.length>0&&ge.setValue(C,"spotShadowMap",re.state.spotShadowMap,Et),re.state.pointShadowMap.length>0&&ge.setValue(C,"pointShadowMap",re.state.pointShadowMap,Et)),E.isSkinnedMesh){ge.setOptional(C,E,"bindMatrix"),ge.setOptional(C,E,"bindMatrixInverse");let He=E.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),ge.setValue(C,"boneTexture",He.boneTexture,Et))}E.isBatchedMesh&&(ge.setOptional(C,E,"batchingTexture"),ge.setValue(C,"batchingTexture",E._matricesTexture,Et),ge.setOptional(C,E,"batchingIdTexture"),ge.setValue(C,"batchingIdTexture",E._indirectTexture,Et),ge.setOptional(C,E,"batchingColorTexture"),E._colorsTexture!==null&&ge.setValue(C,"batchingColorTexture",E._colorsTexture,Et));let en=S.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&Q.update(E,S,Ne),(ln||Xt.receiveShadow!==E.receiveShadow)&&(Xt.receiveShadow=E.receiveShadow,ge.setValue(C,"receiveShadow",E.receiveShadow)),(T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial)&&T.envMap===null&&x.environment!==null&&(Re.envMapIntensity.value=x.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=N1()),ln){if(ge.setValue(C,"toneMappingExposure",O.toneMappingExposure),Xt.needsLights&&at(Re,ue),z&&T.fog===!0&&ut.refreshFogUniforms(Re,z),ut.refreshMaterialUniforms(Re,T,Jt,_e,D.state.transmissionRenderTarget[h.id]),Xt.needsLights&&Xt.numLightProbeGrids>0){let He=I,Je=0;for(let Rn of D.state.lightProbeGridArray)Rn.texture!==null&&(He.textures[Je]=Rn.texture,He.min[Je]=Rn.boundingBox.min,He.max[Je]=Rn.boundingBox.max,He.resolution[Je]=Rn.resolution,He.intensity[Je]=Rn.intensity,Je++);for(let Rn in He)He[Rn].length=Je;Re.probesSH.value=He.textures,Re.probesMin.value=He.min,Re.probesMax.value=He.max,Re.probesResolution.value=He.resolution,Re.probesIntensity.value=He.intensity}vr.upload(C,Tt(Xt),Re,Et)}if(T.isShaderMaterial&&T.uniformsNeedUpdate===!0&&(vr.upload(C,Tt(Xt),Re,Et),T.uniformsNeedUpdate=!1),T.isSpriteMaterial&&ge.setValue(C,"center",E.center),ge.setValue(C,"modelViewMatrix",E.modelViewMatrix),ge.setValue(C,"normalMatrix",E.normalMatrix),ge.setValue(C,"modelMatrix",E.matrixWorld),T.uniformsGroups!==void 0){let He=T.uniformsGroups;for(let Je=0,Rn=He.length;Je<Rn;Je++){let ks=He[Je];xe.update(ks,Ne),xe.bind(ks,Ne)}}return Ne}function at(h,x){h.ambientLightColor.needsUpdate=x,h.sunLights.needsUpdate=x,h.sunLightShadows.needsUpdate=x,h.directionalLights.needsUpdate=x,h.directionalLightShadows.needsUpdate=x,h.pointLights.needsUpdate=x,h.pointLightShadows.needsUpdate=x,h.spotLights.needsUpdate=x,h.spotLightShadows.needsUpdate=x,h.rectAreaLights.needsUpdate=x,h.hemisphereLights.needsUpdate=x}function v(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return Bt},this.getActiveMipmapLevel=function(){return gt},this.getRenderTarget=function(){return Mt},this.setRenderTargetTextures=function(h,x,S){let T=yt.get(h);T.__autoAllocateDepthBuffer=h.resolveDepthBuffer===!1,T.__autoAllocateDepthBuffer===!1&&(T.__useRenderToTexture=!1),yt.get(h.texture).__webglTexture=x,yt.get(h.depthTexture).__webglTexture=T.__autoAllocateDepthBuffer?void 0:S,T.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(h,x){let S=yt.get(h);S.__webglFramebuffer=x,S.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(h,x=0,S=0){Mt=h,Bt=x,gt=S;let T=null,E=!1,z=!1;if(h){let k=yt.get(h);if(k.__useDefaultFramebuffer!==void 0){G.bindFramebuffer(C.FRAMEBUFFER,k.__webglFramebuffer),qt.copy(h.viewport),$t.copy(h.scissor),pe=h.scissorTest,G.viewport(qt),G.scissor($t),G.setScissorTest(pe),vt=-1;return}else if(k.__webglFramebuffer===void 0)Et.setupRenderTarget(h);else if(k.__hasExternalTextures)Et.rebindTextures(h,yt.get(h.texture).__webglTexture,yt.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){let ct=h.depthTexture;if(k.__boundDepthTexture!==ct){if(ct!==null&&yt.has(ct)&&(h.width!==ct.image.width||h.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Et.setupDepthRenderbuffer(h)}}let N=h.texture;(N.isData3DTexture||N.isDataArrayTexture||N.isCompressedArrayTexture)&&(z=!0);let q=yt.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(q[x])?T=q[x][S]:T=q[x],E=!0):h.samples>0&&Et.useMultisampledRTT(h)===!1?T=yt.get(h).__webglMultisampledFramebuffer:Array.isArray(q)?T=q[S]:T=q,qt.copy(h.viewport),$t.copy(h.scissor),pe=h.scissorTest}else qt.copy(le).multiplyScalar(Jt).floor(),$t.copy(W).multiplyScalar(Jt).floor(),pe=St;if(S!==0&&(T=st),G.bindFramebuffer(C.FRAMEBUFFER,T)&&G.drawBuffers(h,T),G.viewport(qt),G.scissor($t),G.setScissorTest(pe),E){let k=yt.get(h.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+x,k.__webglTexture,S)}else if(z){let k=x;for(let N=0;N<h.textures.length;N++){let q=yt.get(h.textures[N]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+N,q.__webglTexture,S,k)}}else if(h!==null&&S!==0){let k=yt.get(h.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,k.__webglTexture,S)}vt=-1};function w(h){let x=yt.get(h);return(x.__readFormat!==h.format||x.__readType!==h.type)&&(x.__readFormat=h.format,x.__readType=h.type,x.__formatReadable=V.textureFormatReadable(h.format),x.__typeReadable=V.textureTypeReadable(h.type)),x}this.readRenderTargetPixels=function(h,x,S,T,E,z,X,k=0){if(!(h&&h.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let N=yt.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&X!==void 0&&(N=N[X]),Array.isArray(N)&&(N=N[0]),N){let q=G.getBoundFramebuffer(C.READ_FRAMEBUFFER);G.bindFramebuffer(C.READ_FRAMEBUFFER,N);try{let ct=h.textures[k],Pt=ct.format,Lt=ct.type;h.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+k);let Yt=w(ct);if(Yt.__formatReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Yt.__typeReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=h.width-T&&S>=0&&S<=h.height-E&&C.readPixels(x,S,T,E,se.convert(Pt),se.convert(Lt),z)}finally{G.bindFramebuffer(C.READ_FRAMEBUFFER,q)}}},this.readRenderTargetPixelsAsync=async function(h,x,S,T,E,z,X,k=0){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let N=yt.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&X!==void 0&&(N=N[X]),Array.isArray(N)&&(N=N[0]),N)if(x>=0&&x<=h.width-T&&S>=0&&S<=h.height-E){let q=G.getBoundFramebuffer(C.READ_FRAMEBUFFER);G.bindFramebuffer(C.READ_FRAMEBUFFER,N);let ct=h.textures[k],Pt=ct.format,Lt=ct.type;h.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+k);let Yt=w(ct);if(Yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,de),C.bufferData(C.PIXEL_PACK_BUFFER,z.byteLength,C.STREAM_READ),C.readPixels(x,S,T,E,se.convert(Pt),se.convert(Lt),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),G.bindFramebuffer(C.READ_FRAMEBUFFER,q);let jt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Sd(C,jt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,de),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,z),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(de),C.deleteSync(jt),z}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(h,x=null,S=0){let T=Math.pow(2,-S),E=Math.floor(h.image.width*T),z=Math.floor(h.image.height*T),X=x!==null?x.x:0,k=x!==null?x.y:0;Et.setTexture2D(h,0),G.activeTexture(C.TEXTURE0),C.copyTexSubImage2D(C.TEXTURE_2D,S,0,0,X,k,E,z),G.unbindTexture()},this.copyTextureToTexture=function(h,x,S=null,T=null,E=0,z=0){let X,k,N,q,ct,Pt,Lt,Yt,de,jt=h.isCompressedTexture?h.mipmaps[z]:h.image;if(S!==null)X=S.max.x-S.min.x,k=S.max.y-S.min.y,N=S.isBox3?S.max.z-S.min.z:1,q=S.min.x,ct=S.min.y,Pt=S.isBox3?S.min.z:0;else{let ge=Math.pow(2,-E);X=Math.floor(h.width*ge),k=Math.floor(h.height*ge),h.isDataArrayTexture?N=jt.depth:h.isData3DTexture?N=Math.floor(jt.depth*ge):N=1,q=0,ct=0,Pt=0}T!==null?(Lt=T.x,Yt=T.y,de=T.z):(Lt=0,Yt=0,de=0);let Ht=se.convert(x.format),ie=se.convert(x.type),Xt;x.isData3DTexture?(Et.setTexture3D(x,0),Xt=C.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(Et.setTexture2DArray(x,0),Xt=C.TEXTURE_2D_ARRAY):(Et.setTexture2D(x,0),Xt=C.TEXTURE_2D),G.activeTexture(C.TEXTURE0),G.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,x.flipY),G.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),G.pixelStorei(C.UNPACK_ALIGNMENT,x.unpackAlignment);let re=G.getParameter(C.UNPACK_ROW_LENGTH),ae=G.getParameter(C.UNPACK_IMAGE_HEIGHT),Ve=G.getParameter(C.UNPACK_SKIP_PIXELS),Ne=G.getParameter(C.UNPACK_SKIP_ROWS),sn=G.getParameter(C.UNPACK_SKIP_IMAGES);G.pixelStorei(C.UNPACK_ROW_LENGTH,jt.width),G.pixelStorei(C.UNPACK_IMAGE_HEIGHT,jt.height),G.pixelStorei(C.UNPACK_SKIP_PIXELS,q),G.pixelStorei(C.UNPACK_SKIP_ROWS,ct),G.pixelStorei(C.UNPACK_SKIP_IMAGES,Pt);let ln=h.isDataArrayTexture||h.isData3DTexture,ue=x.isDataArrayTexture||x.isData3DTexture;if(h.isDepthTexture){let ge=yt.get(h),Re=yt.get(x),en=yt.get(ge.__renderTarget),He=yt.get(Re.__renderTarget);G.bindFramebuffer(C.READ_FRAMEBUFFER,en.__webglFramebuffer),G.bindFramebuffer(C.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Je=0;Je<N;Je++)ln&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,yt.get(h).__webglTexture,E,Pt+Je),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,yt.get(x).__webglTexture,z,de+Je)),C.blitFramebuffer(q,ct,q+X,ct+k,Lt,Yt,Lt+X,Yt+k,C.DEPTH_BUFFER_BIT,C.NEAREST);G.bindFramebuffer(C.READ_FRAMEBUFFER,null),G.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(E!==0||h.isRenderTargetTexture||yt.has(h)){let ge=yt.get(h),Re=yt.get(x);G.bindFramebuffer(C.READ_FRAMEBUFFER,wt),G.bindFramebuffer(C.DRAW_FRAMEBUFFER,ft);for(let en=0;en<N;en++)ln?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ge.__webglTexture,E,Pt+en):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ge.__webglTexture,E),ue?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Re.__webglTexture,z,de+en):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Re.__webglTexture,z),E!==0?C.blitFramebuffer(q,ct,q+X,ct+k,Lt,Yt,Lt+X,Yt+k,C.COLOR_BUFFER_BIT,C.NEAREST):ue?C.copyTexSubImage3D(Xt,z,Lt,Yt,de+en,q,ct,X,k):C.copyTexSubImage2D(Xt,z,Lt,Yt,q,ct,X,k);G.bindFramebuffer(C.READ_FRAMEBUFFER,null),G.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ue?h.isDataTexture||h.isData3DTexture?C.texSubImage3D(Xt,z,Lt,Yt,de,X,k,N,Ht,ie,jt.data):x.isCompressedArrayTexture?C.compressedTexSubImage3D(Xt,z,Lt,Yt,de,jt.width,jt.height,N,Ht,jt.data):C.texSubImage3D(Xt,z,Lt,Yt,de,X,k,N,Ht,ie,jt):h.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,z,Lt,Yt,X,k,Ht,ie,jt.data):h.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,z,Lt,Yt,jt.width,jt.height,Ht,jt.data):C.texSubImage2D(C.TEXTURE_2D,z,Lt,Yt,X,k,Ht,ie,jt);G.pixelStorei(C.UNPACK_ROW_LENGTH,re),G.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ae),G.pixelStorei(C.UNPACK_SKIP_PIXELS,Ve),G.pixelStorei(C.UNPACK_SKIP_ROWS,Ne),G.pixelStorei(C.UNPACK_SKIP_IMAGES,sn),z===0&&x.generateMipmaps===!0&&x.mipmapsAutoUpdate===!0&&C.generateMipmap(Xt),G.unbindTexture()},this.initRenderTarget=function(h){yt.get(h).__webglFramebuffer===void 0&&Et.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?Et.setTextureCube(h,0):h.isData3DTexture?Et.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?Et.setTexture2DArray(h,0):Et.setTexture2D(h,0),G.unbindTexture()},this.resetState=function(){Bt=0,gt=0,Mt=null,G.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=tn._getDrawingBufferColorSpace(t),e.unpackColorSpace=tn._getUnpackColorSpace()}};var Se=Math.PI*2,Me=(i,t,e)=>i<t?t:i>e?e:i,Qt=(i,t,e)=>i+(t-i)*e,oe=(i,t,e)=>{let n=Me((e-i)/(t-i),0,1);return n*n*(3-2*n)},Ye=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-e*n));function hn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Ke=(i,t)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)};function yn(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=Ke(e,n),c=Ke(e+1,n),d=Ke(e,n+1),f=Ke(e+1,n+1);return l+(c-l)*o+(d-l)*a+(l-c-d+f)*o*a}function un(i,t){let e=0,n=.5,s=1;for(let r=0;r<4;r++)e+=n*yn(i*s,t*s),s*=2.03,n*=.5;return e/.9375}var ec=new rn,nc=new _i,gf=new yi,U1=new j,_f=new j,_n=new Ie;function Nt(i,t){i.index&&(i=i.toNonIndexed()),i.attributes.uv&&i.deleteAttribute("uv"),i.attributes.uv1&&i.deleteAttribute("uv1");let e=i.attributes.position,n=e.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)typeof t=="function"?t(_n,e.getX(r),e.getY(r),e.getZ(r),r):_n.set(t),s[r*3]=_n.r,s[r*3+1]=_n.g,s[r*3+2]=_n.b;return i.setAttribute("color",new qe(s,3)),i}function Ot(i,t=0,e=0,n=0,s=0,r=0,o=0,a=1,l=a,c=a){return gf.set(s,r,o),nc.setFromEuler(gf),ec.compose(U1.set(t,e,n),nc,_f.set(a,l,c)),i.applyMatrix4(ec),i}function kh(i,t,e){let n=new j().subVectors(e,t),s=n.length();return nc.setFromUnitVectors(new j(0,1,0),n.normalize()),ec.compose(new j().addVectors(t,e).multiplyScalar(.5),nc,_f.set(1,1,1)),i.applyMatrix4(ec),s}function nn(i){let t=0;for(let a of i)t+=a.attributes.position.count;let e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*3),r=0;for(let a of i)a.attributes.normal||a.computeVertexNormals(),e.set(a.attributes.position.array,r*3),n.set(a.attributes.normal.array,r*3),s.set(a.attributes.color.array,r*3),r+=a.attributes.position.count,a.dispose();let o=new Ze;return o.setAttribute("position",new qe(e,3)),o.setAttribute("normal",new qe(n,3)),o.setAttribute("color",new qe(s,3)),o.computeBoundingSphere(),o}var De=(i,t,e,n)=>i.copy(ui.set(t)).lerp(No.set(e),Me(n,0,1)),ui=new Ie,No=new Ie;function di(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new eo(s);return r.colorSpace=jn,r.anisotropy=4,n&&(r.wrapS=r.wrapT=ds,r.repeat.set(n[0],n[1])),r}var wn=(i,t)=>{let e=(t-i)%Se;return e>Math.PI&&(e-=Se),e<-Math.PI&&(e+=Se),e},Sn=(i,t,e,n)=>i+wn(i,t)*(1-Math.exp(-e*n)),Ce=(i,t={})=>new On({color:i,shininess:30,specular:"#2A2A2A",...t}),wr=i=>i.traverse(t=>{t.isMesh&&(t.castShadow=!0)});function yf(i="#2F78DA",t="#86C4F7",e="#F8E6C8",n=new j(.62,.3,-.73)){let s=new Vt(new Ee(600,32,16),new bi({side:kn,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ie(i)},mid:{value:new Ie(t)},hor:{value:new Ie(e)},sunDir:{value:n.clone().normalize()}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top, mid, hor, sunDir; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float y = d.y;
        vec3 c = mix(hor, mid, smoothstep(-0.03, 0.2, y)); c = mix(c, top, smoothstep(0.2, 0.8, y));
        float s = max(dot(d, sunDir), 0.0);
        c += vec3(1.0, 0.86, 0.6) * (pow(s, 10.0) * 0.35 + pow(s, 90.0) * 0.6);
        c = mix(c, vec3(1.0, 0.97, 0.86), smoothstep(0.9982, 0.9992, s));
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));return s.renderOrder=-10,s.frustumCulled=!1,s}function vf(i){let t=new jl({canvas:i,antialias:!0,powerPreference:"high-performance"});return t.toneMapping=So,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=Fs,t}function Mf(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}var wf=()=>di(64,64,i=>{let t=i.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,64,64)});function Sf(){let i=di(256,256,(t,e,n)=>{let s=t.createImageData(e,n),r=(o,a)=>yn(o/18,a/9)*.6+yn(o/7,a/4)*.4;for(let o=0;o<n;o++)for(let a=0;a<e;a++){let l=r(a+1,o)-r(a-1,o),c=r(a,o+1)-r(a,o-1),d=(o*e+a)*4,f=-l*3,m=-c*3,g=Math.hypot(f,m,1);s.data[d]=(f/g*.5+.5)*255,s.data[d+1]=(m/g*.5+.5)*255,s.data[d+2]=(1/g*.5+.5)*255,s.data[d+3]=255}t.putImageData(s,0,0)},[1,1]);return i.colorSpace="",i}function bf(i,t){!t||!t.see||(i.uniforms.uSee=t.see,i.vertexShader=`varying float vSeeZ;
`+i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
  vSeeZ = -mvPosition.z;`),i.fragmentShader=`uniform vec4 uSee; varying float vSeeZ;
`+i.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
    if (uSee.w > 0.0) {
      float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
      float sd = distance(gl_FragCoord.xy, uSee.xy) / uSee.w;
      if (vSeeZ < uSee.z - 0.7 && sd < 1.0 && ign >= smoothstep(0.5, 1.0, sd)) discard;
      if (vSeeZ < 1.2 && ign >= smoothstep(0.45, 1.2, vSeeZ)) discard;
    }`))}function ic(i,t){let e=i.clone();return e.onBeforeCompile=n=>bf(n,t),e.customProgramCacheKey=()=>"see"+(i.flatShading?"f":"")+i.side+(i.vertexColors?"v":""),e}function $n(i,t,e,n){let s=i.clone();return s.onBeforeCompile=r=>{bf(r,n),r.uniforms.uTime=n.time,r.uniforms.uWind=n.wind||{value:0},r.vertexShader=`uniform float uTime; uniform float uWind;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float hh = max(0.0, transformed.y - ${e.toFixed(2)});
      float ph = 0.0;
      #ifdef USE_INSTANCING
        ph = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.23;
      #endif
      float wk = 1.0 + uWind * 6.0;
      transformed.x += ((sin(uTime * (1.25 + uWind * 3.0) + ph) + 0.35 * sin(uTime * 2.7 + ph * 1.7)) * ${t.toFixed(4)} * wk + uWind * ${(t*8).toFixed(4)}) * hh * hh;
      transformed.z += cos(uTime * (1.05 + uWind * 2.5) + ph) * ${(t*.5).toFixed(4)} * wk * hh * hh;`)},s.customProgramCacheKey=()=>"sway"+t+"_"+e+(i.flatShading?"f":"")+i.side+(n&&n.see?"see":""),s}function Sr(i,t,e){let n=[],s=4.6+i()*1.6,r=new Yn([new j(0,-.2,0),new j(t*.2,s*.35,.05),new j(t*.6,s*.7,.1),new j(t,s,.12)]),o=13;for(let c=0;c<o;c++){let d=r.getPoint(c/o),f=r.getPoint((c+1)/o),m=Qt(.25,.14,c/o),g=Nt(new me(m*1.13,m*.9,1,9,1,!0),(R,p,y)=>De(R,c%2?"#7E5E3C":"#8D6C46","#A9875C",y+.5)),_=d.distanceTo(f);Ot(g,0,0,0,0,0,0,1,_*1.04,1),kh(g,d,f),n.push(g)}let a=r.getPoint(1),l=new j(0,1,0);n.push(Ot(Nt(new gn(.28,1),"#6B5A2E"),a.x,a.y,a.z));for(let c=0;c<e;c++){let d=c/e*Se+i()*.35,f=new j(Math.cos(d),0,Math.sin(d)),m=2.6+i()*.9,g=.7+i()*.6,_=new Yn([a.clone(),a.clone().addScaledVector(f,m*.3).addScaledVector(l,.55),a.clone().addScaledVector(f,m*.65).addScaledVector(l,.35-g*.2),a.clone().addScaledVector(f,m).addScaledVector(l,-g)]),R=14,p=[],y=[],P=[];for(let B=0;B<=R;B++){let D=B/R,A=_.getPoint(D),L=_.getTangent(D),$=new j().crossVectors(L,l).normalize(),O=Math.pow(Math.sin(Math.PI*Math.min(1,D*1.15)),.7)*.5*(B%2?1:.72);P.push([A,A.clone().addScaledVector($,O).addScaledVector(l,-O*.42),A.clone().addScaledVector($,-O).addScaledVector(l,-O*.42),D])}let F=(B,D,A)=>{p.push(B.x,B.y,B.z),De(_n,"#2E7A30","#6CC24A",D*.9+A*.25),y.push(_n.r,_n.g,_n.b)};for(let B=0;B<R;B++){let[D,A,L,$]=P[B],[O,ot,dt,st]=P[B+1];F(D,$,0),F(A,$,1),F(O,st,0),F(A,$,1),F(ot,st,1),F(O,st,0),F(D,$,0),F(O,st,0),F(L,$,1),F(L,$,1),F(O,st,0),F(dt,st,1)}let I=new Ze;I.setAttribute("position",new qe(new Float32Array(p),3)),I.setAttribute("color",new qe(new Float32Array(y),3)),I.computeVertexNormals(),n.push(I)}for(let c=0;c<2;c++){let d=i()*Se;for(let f=0;f<7;f++)n.push(Ot(Nt(new gn(.085,0),f%2?"#B85C1C":"#D07A26"),a.x+Math.cos(d)*.32+(i()-.5)*.16,a.y-.32-i()*.3,a.z+Math.sin(d)*.32+(i()-.5)*.16))}return nn(n)}function sc(i,t,e){let n=[Nt(Ot(new me(.12,.2,1.7,7),0,.85,0),"#7A5230")];n.push(Nt(Ot(new me(.05,.08,.8,5),.25,1.55,0,0,0,-.7),"#7A5230"));for(let s=0;s<7;s++){let r=.62+i()*.45,o=(i()-.5)*1.3,a=2.15+i()*.9,l=(i()-.5)*1.1,c=i();n.push(Ot(Nt(new gn(r,1),(d,f,m,g)=>De(d,e[0],e[1],.25+m/r*.45+c*.3+(Ke(f*9,g*9)-.5)*.2)),o,a,l))}if(t)for(let s=0;s<9;s++){let r=i()*Se,o=i()*1.3;n.push(Ot(Nt(new gn(.08,1),t),Math.cos(r)*.95,2.1+Math.sin(o)*.9,Math.sin(r)*.85+.2))}return nn(n)}var Uo=()=>nn([0,1,2,3].map(i=>Ot(Nt(new gn(.42-i*.05,1),(t,e,n)=>De(t,"#2F8A3C","#86D05C",.4+n*.9+i*.1)),(i-1.5)*.32,.3,i%2*.2))),Bo=()=>Nt(new ni(.4,0),(i,t,e,n)=>De(i,"#8C877B","#C9C4B6",.4+e*1.2+Ke(t*7,n*7)*.3)),rc=()=>nn([...Array(6)].map((i,t)=>{let e=t*1.1,n=.8+t%3*.22,s=Nt(new Mn(.025,n,3),(r,o,a)=>De(r,"#3C7F35","#8CC05A",a/n+.5));return Ot(s,Math.cos(e)*.12,n/2,Math.sin(e)*.12,Math.sin(e)*.15,0,Math.cos(e)*.15),t%2?nn([s,Ot(Nt(new me(.035,.035,.16,6),"#6B4423"),Math.cos(e)*.12+Math.cos(e)*.15*n,n-.05,Math.sin(e)*.12)]):s})),Oo=()=>(()=>{let i=[],t=[];for(let n=0;n<5;n++){let s=n/5*Se+.3,r=.22+n%3*.07,o=.035,a=Math.cos(s)*.05,l=Math.sin(s)*.05,c=a+Math.cos(s)*.1,d=l+Math.sin(s)*.1,f=-Math.sin(s)*o,m=Math.cos(s)*o;i.push(a-f,0,l-m,a+f,0,l+m,c,r,d);for(let g of[0,0,1])De(_n,"#5AA544","#B0E47A",g),t.push(_n.r,_n.g,_n.b)}let e=new Ze;return e.setAttribute("position",new qe(new Float32Array(i),3)),e.setAttribute("color",new qe(new Float32Array(t),3)),e.computeVertexNormals(),e})();var Ni={hip:.92,thigh:.42,shin:.42,ankle:.08,waist:.1,neck:.45,upper:.31,fore:.265,shW:.195,hipW:.092,height:1.72},xf={green:{shirt:"#4CB963",trim:"#D9F7D2",pants:"#34507A",shoes:"#4A3324",hair:"#2B1D14"},orange:{shirt:"#FF9A3A",trim:"#FFE2BC",pants:"#5B4636",shoes:"#33261D",hair:"#3A2416"},ghost:{shirt:"#F4F6FF",trim:"#AAB4E0",pants:"#8E9AC8",shoes:"#5E6893",hair:"#E7E9F2"},ninja:{shirt:"#30354A",trim:"#14172A",pants:"#1E2233",shoes:"#14172A",hair:"#141414",long:!0},alien:{shirt:"#9BE878",trim:"#3E8F2E",pants:"#2F5F2A",shoes:"#1F3A1C",hair:"#2B1D14"},fire:{shirt:"#FF7A1A",trim:"#FFE07A",pants:"#4A1608",shoes:"#2A1208",hair:"#2B1D14"},king:{shirt:"#F5C534",trim:"#FFF2B3",pants:"#6E1A26",shoes:"#3A1F10",hair:"#2B1D14",long:!0},rainbow:{shirt:"rainbow",trim:"#FFFFFF",pants:"#3C2E6B",shoes:"#2A2044",hair:"#2B1D14"},explorer:{shirt:"#DDB06A",trim:"#9A6326",pants:"#6B4A2B",shoes:"#4A2E16",hair:"#2B1D14",boots:!0}};function Af(i,t){let e=Ni,n=xf[i.id]||xf.green,s=i.body==="fire",r=n.shirt==="rainbow",o=Ce("#D49C70",{shininess:16,specular:"#4A3426"}),a=r?Ce("#FFFFFF",{vertexColors:!0,shininess:10}):s?Ce(n.shirt,{emissive:"#FF3D00",emissiveIntensity:.35,shininess:10}):Ce(n.shirt,{shininess:8,specular:"#1A1A1A"}),l=Ce(n.trim,{shininess:8}),c=Ce(n.pants,{shininess:6,specular:"#141414"}),d=Ce(n.shoes,{shininess:26}),f=Ce("#2A211B",{shininess:4}),m=Ce(n.hair,{shininess:22,specular:"#3A3A3A"}),g=new we,_=new we,R=new we;_.position.y=1,R.position.y=-1,g.add(_),_.add(R);let p=(K,pt,lt=0,ht=0,xt=0)=>{let u=new Vt(pt,K);return u.position.set(lt,ht,xt),u},y=(K,pt,lt,ht=12)=>new me(K,pt,lt,ht),P=new we;P.position.y=e.hip,R.add(P);let F=p(c,new Ee(.16,20,12),0,.03,0);F.scale.set(1,.72,.74),P.add(F);let I=new we;I.position.y=e.waist,P.add(I);let B=[[.001,-.13],[.148,-.13],[.15,-.03],[.148,.06],[.152,.16],[.162,.26],[.166,.32],[.16,.375],[.135,.425],[.09,.455],[.062,.466]].map(([K,pt])=>new Ct(K,pt)),D=new Zn(B,28);r&&(D=Nt(D,(K,pt,lt,ht)=>K.setHSL(((Math.atan2(ht,pt)/Se+1)%1+lt*.6)%1,.72,.6)));let A=p(a,D);A.scale.z=.68,I.add(A);let L=p(l,new ci(.068,.012,6,20),0,.455,0);L.rotation.x=Math.PI/2,L.scale.y=.75,I.add(L);let $=p(Ce("#3A2618",{shininess:30}),y(.156,.155,.045,24),0,-.095,0);$.scale.z=.7,I.add($),I.add(p(Ce("#D8B25A",{shininess:90,specular:"#FFF2B0"}),new be(.05,.036,.012),0,-.095,.108));let O=new we;if(O.position.set(0,.2,-.112),I.add(O),i.id!=="king"){let K=Ce(i.id==="ninja"?"#262A3A":"#8A5A32",{shininess:12}),pt=Ce(i.id==="ninja"?"#14172A":"#5E3B1F",{shininess:10}),lt=p(K,new Mi(.1,.17,4,12),0,0,-.045);lt.scale.set(1.25,1,.62),O.add(lt);let ht=p(pt,new Ee(.105,14,8,0,Se,0,Math.PI/2),0,.07,-.045);ht.scale.set(1.2,.55,.66),O.add(ht);let xt=p(pt,new be(.15,.09,.04),0,-.06,-.115);O.add(xt);for(let u of[-1,1]){let M=p(pt,new be(.035,.26,.012),u*.085,.31,.118);M.rotation.x=-.1,I.add(M)}}let ot=new we;ot.position.y=e.neck,I.add(ot),ot.add(p(o,y(.05,.056,.12,12),0,.04,0));let dt=new we;dt.position.y=.135,ot.add(dt);let st=p(o,new Ee(.1,28,20));st.scale.set(.8,1.08,.98),dt.add(st);let wt=p(o,new Ee(.08,20,14),0,-.05,.016);wt.scale.set(.86,.78,.9),dt.add(wt);let ft=p(Ce("#BC7F55",{shininess:16}),new Ee(.016,10,8),0,-.012,.098);ft.scale.set(.78,1.45,1.15),dt.add(ft);for(let K of[-1,1]){let pt=p(o,new Ee(.024,10,8),K*.079,-.004,-.004);pt.scale.set(.42,1,.72),dt.add(pt)}let Bt=[],gt=Ce("#F7F3EE",{shininess:60}),Mt=Ce("#2A1A10",{shininess:120,specular:"#FFFFFF"}),vt=Ce(n.hair==="#E7E9F2"?"#C9CDDB":"#2A1D15");for(let K of[-1,1]){let pt=new we;pt.position.set(K*.032,.012,.081),dt.add(pt);let lt=p(gt,new Ee(.0135,12,10));lt.scale.set(1.2,.82,.7),pt.add(lt),pt.add(p(Mt,new Ee(.0078,10,8),0,0,.0072)),pt.add(p(new vn({color:"#FFFFFF"}),new Ee(.0022,6,4),.0025,.0028,.0146)),Bt.push(pt);let ht=p(vt,new be(.032,.008,.01),K*.033,.033,.09);ht.rotation.z=-K*.1,dt.add(ht)}let It=new vn({color:"#8C4A3A"}),qt=p(It,new ci(.017,.0035,5,14,Math.PI*.7),0,-.046,.088);qt.rotation.z=Math.PI+Math.PI*.15,dt.add(qt);let $t=p(new vn({color:"#4A1A14"}),new Ee(.011,10,8),0,-.05,.09);$t.scale.set(1,1.3,.5),$t.visible=!1,dt.add($t);let pe=p(m,new Ee(.106,24,14,0,Se,0,Math.PI*.56));pe.scale.set(.84,1.06,1.02),pe.rotation.x=-.32,pe.position.set(0,.012,-.006),dt.add(pe);let zt=p(m,new Ee(.1,18,10,Math.PI*1.12,Math.PI*.76,Math.PI*.4,Math.PI*.3));zt.scale.set(.83,1.06,1),dt.add(zt);let ne=!!n.long,he=[];for(let K of[1,-1]){let pt=new we;pt.position.set(K*e.shW,.405,0),I.add(pt);let lt=p(a,new Ee(.056,14,10),0,-.012,0);lt.scale.set(.95,1,1.05),pt.add(lt),pt.add(p(ne?a:o,y(.046,.039,e.upper),0,-e.upper/2,0)),ne||pt.add(p(a,y(.06,.053,.15,14),0,-.07,0));let ht=new we;ht.position.y=-e.upper,pt.add(ht),ht.add(p(ne?a:o,new Ee(.04,10,8))),ht.add(p(ne?a:o,y(.039,.03,e.fore),0,-e.fore/2,0)),i.id==="explorer"&&ht.add(p(a,y(.047,.045,.05,12),0,-.01,0));let xt=new we;xt.position.y=-e.fore,ht.add(xt);let u=p(o,new Ee(.05,14,10),0,-.075,.004);u.scale.set(.5,1.55,.86),xt.add(u);let M=p(o,new Mi(.011,.04,3,6),-K*.006,-.045,.036);M.rotation.x=.45,xt.add(M),he.push({s:K,sh:pt,el:ht,wr:xt})}let _e=[];for(let K of[1,-1]){let pt=new we;pt.position.set(K*e.hipW,0,0),P.add(pt),pt.add(p(c,new Ee(.077,14,10))),pt.add(p(c,y(.077,.056,e.thigh,14),0,-e.thigh/2,0));let lt=new we;lt.position.y=-e.thigh,pt.add(lt),lt.add(p(c,new Ee(.056,12,10))),lt.add(p(c,y(.055,.043,e.shin,14),0,-e.shin/2,0)),n.boots&&lt.add(p(d,y(.054,.05,.2,14),0,-e.shin+.08,0));let ht=new we;ht.position.y=-e.shin,lt.add(ht);let xt=p(d,new be(.098,.07,.2),0,-.042,.03);ht.add(xt);let u=p(d,new Ee(.05,12,8,0,Se,0,Math.PI/2),0,-.077,.13);u.scale.set(.98,1,1.25),ht.add(u);let M=p(d,new Ee(.05,12,8),0,-.04,-.07);M.scale.set(.98,.78,.7),ht.add(M);let Y=p(f,new be(.104,.014,.27),0,-.075,.035);ht.add(Y),_e.push({s:K,hp:pt,kn:lt,an:ht})}let Jt=new we;dt.add(Jt);let ye=[],Fe=null,le=null;if(i.acc==="hat"){let K=Ce("#8E5E2E",{shininess:12}),pt=Ce("#3E2612",{shininess:10}),lt=new we;lt.position.set(0,.07,-.004),lt.rotation.set(-.1,0,.04),Jt.add(lt);let ht=p(K,y(.175,.18,.012,32));ht.scale.z=.92,lt.add(ht);let xt=p(K,y(.088,.1,.1,24),0,.055,0);xt.scale.z=1.08,lt.add(xt);let u=p(K,new Ee(.089,18,8,0,Se,0,Math.PI/2),0,.1,0);u.scale.set(1,.3,1.08),lt.add(u);let M=p(pt,y(.1,.1,.026,24,1),0,.018,0);M.scale.z=1.08,lt.add(M);let Y=Ce("#C8283A",{shininess:12,side:Be}),C=p(Y,new ci(.068,.018,8,22),0,.43,.006);C.rotation.x=Math.PI/2+.12,I.add(C);let _t=new wi;_t.moveTo(-.07,0),_t.lineTo(.07,0),_t.lineTo(0,-.09),_t.closePath();let H=p(Y,new is(_t),0,.42,.075);H.rotation.x=-.25,I.add(H)}else if(i.acc==="crown"){let K=Ce("#FFC400",{shininess:110,specular:"#FFF2B0",emissive:"#5A3D00",emissiveIntensity:.3}),pt=p(K,y(.092,.088,.045,24,1),0,.085,0);pt.material.side=Be,Jt.add(pt);for(let xt=0;xt<6;xt++){let u=xt/6*Se;Jt.add(p(K,new Mn(.018,.055,6),Math.sin(u)*.088,.13,Math.cos(u)*.088)),Jt.add(p(Ce(xt%2?"#2EA8FF":"#E63946",{shininess:140,specular:"#FFFFFF"}),new Ee(.01,8,6),Math.sin(u)*.093,.085,Math.cos(u)*.093))}Fe=new we,Fe.position.set(0,.43,-.1),I.add(Fe);let lt=new xn(.46,1.05,4,8);lt.translate(0,-.525,0);let ht=lt.attributes.position;for(let xt=0;xt<ht.count;xt++){let u=ht.getX(xt),M=ht.getY(xt);ht.setZ(xt,-Math.abs(u)*.35*(.4-M*.6)-.02),ht.setX(xt,u*(1-M*.5))}lt.computeVertexNormals(),Fe.add(p(Ce("#A81E2D",{side:Be,shininess:18}),lt))}else if(i.acc==="band"){let K=Ce("#D62839"),pt=p(K,new ci(.087,.011,6,28),0,.03,.002);pt.rotation.x=Math.PI/2-.12,pt.scale.set(.92,1.12,1),Jt.add(pt);for(let ht of[-1,1]){let xt=p(K,new be(.025,.012,.15),ht*.02,.02,-.16);xt.rotation.set(.6,ht*.35,0),Jt.add(xt),Jt.userData["tail"+ht]=xt}let lt=p(Ce("#22263A",{side:Be}),new Ee(.103,22,10,Math.PI*.1,Math.PI*.8,Math.PI*.52,Math.PI*.34));lt.scale.set(.84,1.1,1.02),Jt.add(lt)}else if(i.acc==="antenna")for(let K of[-1,1]){let pt=p(Ce("#2C6B23"),y(.005,.005,.13,6),K*.045,.14,0);pt.rotation.z=-K*.35,Jt.add(pt),Jt.add(p(Ce("#FF5DA2",{emissive:"#FF5DA2",emissiveIntensity:.35}),new Ee(.02,10,8),K*.068,.2,0))}else if(i.acc==="leaf"){let K=p(Ce("#6B3E1F"),y(.004,.005,.05,6),0,.125,.01);K.rotation.z=-.2,Jt.add(K);let pt=p(Ce("#3FB950"),new Ee(.04,12,8),.03,.15,.01);pt.scale.set(1,.2,.5),pt.rotation.z=.45,Jt.add(pt)}else if(i.acc==="star"){let K=new wi;for(let pt=0;pt<10;pt++){let lt=pt/10*Se-Math.PI/2,ht=pt%2?.03:.07;pt?K.lineTo(Math.cos(lt)*ht,-Math.sin(lt)*ht):K.moveTo(Math.cos(lt)*ht,-Math.sin(lt)*ht)}le=p(Ce("#FFE066",{emissive:"#FFB703",emissiveIntensity:.5,shininess:90}),new po(K,{depth:.02,bevelEnabled:!0,bevelSize:.006,bevelThickness:.006,bevelSegments:1}),0,.26,0),Jt.add(le)}if(i.acc==="blush"||i.id==="orange")for(let K of[-1,1]){let pt=p(new vn({color:"#FF7896",transparent:!0,opacity:.45}),new Bn(.014,12),K*.05,-.022,.083);pt.rotation.y=K*.55,dt.add(pt)}if(s){for(let pt=0;pt<7;pt++){let lt=pt/7*Math.PI-Math.PI/2,ht=p(new vn({color:pt%2?"#FFB13B":"#FF5A1F",transparent:!0,opacity:.85,depthWrite:!1,blending:zn}),new Mn(.045,.2,8,1,!0),Math.sin(lt)*.15,.42,-.06-Math.abs(Math.cos(lt))*.04);ht.userData.ph=pt,I.add(ht),ye.push(ht)}let K=new qn(new Un({map:t,color:"#FF6A1F",transparent:!0,opacity:.45,depthWrite:!1,blending:zn}));K.scale.setScalar(1.8),K.position.y=.25,I.add(K)}let W=new we;g.add(W),W.visible=!1;let St=p(Ce("#7A5230",{shininess:30}),y(.006,.013,2.4,6),0,1,0);W.add(St),W.add(p(Ce("#2E2E2E"),y(.024,.024,.05,10),.03,.12,0));let rt=new dn;rt.position.y=2.2,W.add(rt),O1(g,new Set([A,qt,$t,...ye,...le?[le]:[]])),wr(g);let mt=k1();return{id:i.id,human:!0,root:g,body:_,rig:R,pelvis:P,spine:I,neck:ot,head:dt,torso:A,arms:he,legs:_e,eyes:Bt,smile:qt,ooh:$t,acc:Jt,flames:ye,fire:s,cape:Fe,star:le,pack:O,rod:W,rodTip:rt,bodyMat:a,...mt,turn:0,blink:0,nextBlink:2}}var B1=new On({color:"#FFFFFF",vertexColors:!0,shininess:14,specular:"#2A2A2A"});function O1(i,t){let e=[];i.traverse(n=>{n.isMesh||e.push(n)});for(let n of e){let s=n.children.filter(a=>a.isMesh&&!t.has(a)&&a.material&&a.material.isMeshPhongMaterial&&a.material.side!==Be&&!(a.material.emissive&&a.material.emissive.getHex())&&!a.material.transparent);if(s.length<1)continue;let r=[];for(let a of s){a.updateMatrix();let l=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();for(let c of Object.keys(l.attributes))c!=="position"&&c!=="normal"&&!(c==="color"&&a.material.vertexColors)&&l.deleteAttribute(c);if(l.attributes.normal||l.computeVertexNormals(),l.applyMatrix4(a.matrix),!l.attributes.color){let c=l.attributes.position.count,d=new Float32Array(c*3),f=a.material.color;for(let m=0;m<c;m++)d[m*3]=f.r,d[m*3+1]=f.g,d[m*3+2]=f.b;l.setAttribute("color",new qe(d,3))}r.push(l),n.remove(a),a.geometry.dispose()}let o=new Vt(nn(r),B1);o.castShadow=!0,n.add(o)}}function k1(){let i=new we,t=["#E63946","#FFFFFF","#FFB703","#FFFFFF","#2EA8FF","#FFFFFF"],e=Nt(new Ee(1.7,24,8,0,Se,0,Math.PI*.42),(d,f,m,g)=>d.set(t[Math.floor((Math.atan2(g,f)/Se+1)%1*12+1e-4)%6])),n=new Te({vertexColors:!0,side:Be,transparent:!0,opacity:1}),s=new Vt(e,n);s.scale.set(1,.62,1),s.castShadow=!0;let r=new Float32Array(60),o=new ps(new Ze,new es({color:"#4A4A5A",transparent:!0,opacity:.85}));o.geometry.setAttribute("position",new qe(r,3)),o.frustumCulled=!1;let a=new we;a.position.y=1.6,a.add(s),i.add(a,o),i.visible=!1;let l=new Vt(e,n.clone());l.visible=!1,l.castShadow=!1;let c=new Vt(new Ze,Ce("#8B5A2B",{shininess:5}));return c.visible=!1,c.castShadow=!0,{chute:i,canopy:s,canopyHolder:a,lines:o,drop:l,rope:c}}function Ms(i={}){let t={skin:"#C98E62",thobe:"#F2EEE4",bisht:"#5B3A24",shmagh:"#C8102E",agal:"#141414",beard:"#4A4440",beads:!0,gold:!0,...i},e=new we,n=Ce(t.skin,{shininess:12}),s=Ce(t.thobe,{shininess:8}),r=Ce(t.bisht||t.thobe,{shininess:14,side:Be}),o=new Vt(new Zn([new Ct(.001,0),new Ct(.27,0),new Ct(.275,.1),new Ct(.25,.5),new Ct(.232,.9),new Ct(.222,1.2),new Ct(.2,1.34),new Ct(.12,1.42),new Ct(.05,1.45)],30),s);e.add(o);for(let D of[-1,1]){let A=new Vt(new be(.1,.04,.2),Ce("#4A2E18"));A.position.set(D*.09,.02,.2),e.add(A)}let a=new Vt(new Zn([new Ct(.245,.06),new Ct(.295,.08),new Ct(.285,.5),new Ct(.265,.9),new Ct(.255,1.2),new Ct(.24,1.33),new Ct(.16,1.41)],30,.62,Se-1.24),r);e.add(a),a.visible=!!t.bisht;let l=Ce("#D4AF37",{shininess:90,specular:"#FFF2B0"});for(let D of[-1,1]){let A=D*.62,L=[[.247,.08],[.297,.1],[.287,.5],[.267,.9],[.257,1.2],[.242,1.33],[.162,1.41]].map(([$,O])=>new j(Math.sin(A)*($+.006),O,Math.cos(A)*($+.006)));t.bisht&&t.gold&&e.add(new Vt(new Si(new Yn(L),20,.014,6),l))}let c=[];for(let D of[-1,1]){let A=new we;A.position.set(D*.25,1.3,0),e.add(A);let L=new Vt(new Mi(.072,.28,4,10),r);L.position.y=-.18,A.add(L);let $=new we;$.position.y=-.36,A.add($);let O=new Vt(new Mi(.068,.22,4,10),r);O.position.y=-.14,$.add(O);let ot=new Vt(new me(.055,.06,.05,10),s);ot.position.y=-.3,$.add(ot);let dt=new Vt(new Ee(.052,12,10),n);if(dt.position.y=-.36,dt.scale.set(.9,1.1,.8),$.add(dt),D<0&&t.beads){let st=new Vt(new ci(.06,.011,6,18),Ce("#E0A03C",{shininess:80,specular:"#FFF0C8"}));st.position.set(0,-.44,.02),st.rotation.y=.4,$.add(st)}A.rotation.z=D*.12,$.rotation.x=-.25,c.push({sh:A,el:$,s:D})}let d=new Vt(new me(.06,.07,.1,10),n);d.position.y=1.46,e.add(d);let f=new we;f.position.y=1.6,e.add(f);let m=new Vt(new Ee(.155,28,20),n);m.scale.set(.94,1.08,1),f.add(m);let g=new Vt(new Ee(.034,10,8),Ce("#B97C52"));g.position.set(0,-.005,.15),g.scale.set(.85,1.1,1.25),f.add(g);for(let D of[-1,1]){let A=new Vt(new Ee(.019,10,8),Ce("#1B140F",{shininess:120,specular:"#FFFFFF"}));A.position.set(D*.055,.025,.135),f.add(A);let L=new Vt(new be(.065,.016,.02),Ce("#3A3430"));L.position.set(D*.056,.058,.138),L.rotation.z=-D*.12,f.add(L);let $=new Vt(new Mi(.019,.06,3,6),Ce("#2A2420"));$.position.set(D*.034,-.045,.142),$.rotation.z=D*1.15,f.add($)}let _=new Vt(new Ee(.16,24,10,Math.PI/2-1.2,2.4,Math.PI*.6,Math.PI*.3),Ce(t.beard==="none"?"#000":t.beard,{side:Be,shininess:5}));f.add(_),_.visible=t.beard!=="none";let R=new Vt(new Ee(.026,10,8),new vn({color:"#4A1A14"}));R.position.set(0,-.07,.143),R.scale.set(1,.3,.5),f.add(R);let p=di(128,128,(D,A,L)=>{D.fillStyle="#FBF8F2",D.fillRect(0,0,A,L),D.fillStyle=t.shmagh;for(let $=0;$<L;$+=16)for(let O=0;O<A;O+=16)D.fillRect(O+2,$+2,7,7),D.fillRect(O+9,$+9,5,5),D.fillRect(O+9,$+2,2,2),D.fillRect(O+2,$+11,2,2)},[5,5]),y=new Te({map:p,side:Be}),P=new Vt(new Ee(.168,28,14,0,Se,0,Math.PI*.52),y);P.rotation.x=-.42,P.position.y=.01,f.add(P);let F=new Vt(new Zn([new Ct(.168,.02),new Ct(.18,-.06),new Ct(.2,-.16),new Ct(.24,-.26),new Ct(.28,-.33)],28,1.15,Se-2.3),y);f.add(F);let I=new Vt(new xn(.2,.36),y);I.position.set(.17,-.25,.1),I.rotation.set(-.15,.6,-.08),f.add(I);let B=Ce(t.agal,{shininess:40});for(let[D,A]of[[.07,.154],[.097,.139]]){let L=new Vt(new ci(A,.015,8,36),B);L.position.set(0,D*.913,-D*.408),L.rotation.x=Math.PI/2-.42,f.add(L)}return wr(e),{root:e,head:f,arms:c,mouth:R,yaw:0}}var Gh={id:"natta-island",name:"\u062C\u0632\u064A\u0631\u0629 \u0646\u0637\u0651\u0629",half:4330,seed:7531,sea:-300,features:[{type:"mountain",id:"M1",x:0,z:0},{type:"valley",id:"V1",x:-200,z:1350}],spawn:"fajr"},Bs=(i,t)=>Math.exp(-(i*i)/(t*t)),ac=(i,t,e)=>{let n=Math.max(e-Math.abs(i-t),0)/e;return Math.max(i,t)+n*n*e*.25},Ef=(i,t,e)=>-ac(-i,-t,e);function Vh(i){let t=new Map,e=(n,s)=>n*100003+s;return{add(n,s){let r=Math.floor((Math.min(n.ax,n.bx)-s)/i),o=Math.floor((Math.max(n.ax,n.bx)+s)/i),a=Math.floor((Math.min(n.az,n.bz)-s)/i),l=Math.floor((Math.max(n.az,n.bz)+s)/i);for(let c=r;c<=o;c++)for(let d=a;d<=l;d++){let f=e(c,d),m=t.get(f);m||(m=[],t.set(f,m)),m.push(n)}},at(n,s){return t.get(e(Math.floor(n/i),Math.floor(s/i)))}}}function Hh(i,t,e,n){let s=Me(((t-i.ax)*i.dx+(e-i.az)*i.dz)*i.il2,0,1),r=i.ax+i.dx*s,o=i.az+i.dz*s;return n.d=Math.hypot(t-r,e-o),n.t=s,n}var oc=(i,t,e)=>{let n=t.x-i.x,s=t.z-i.z;return{ax:i.x,az:i.z,bx:t.x,bz:t.z,dx:n,dz:s,il2:1/Math.max(1e-6,n*n+s*s),a:i,b:t,...e}};function Tf(i,t){let e=[];for(let s=0;s<i.length-1;s++){let r=i[Math.max(0,s-1)],o=i[s],a=i[s+1],l=i[Math.min(i.length-1,s+2)],c=Math.hypot(a[0]-o[0],a[1]-o[1]),d=Math.max(1,Math.round(c/t));for(let f=0;f<d;f++){let m=f/d,g=m*m,_=g*m,R=(p,y,P,F)=>.5*(2*y+(-p+P)*m+(2*p-5*y+4*P-F)*g+(-p+3*y-3*P+F)*_);e.push({x:R(r[0],o[0],a[0],l[0]),z:R(r[1],o[1],a[1],l[1])})}}let n=i[i.length-1];return e.push({x:n[0],z:n[1]}),e}function Cf(i,t,e){let n=i.sea??-300,s=i.half||4330,r=t.x,o=t.z,a=hn(i.seed||7),l=286,c=0;function d(Z){let et=3420+300*Math.sin(3*Z+.7)+220*Math.sin(5*Z+2.1)+140*Math.sin(9*Z+4)+70*Math.sin(15*Z+1.3);return et-=1650*Bs(wn(Z,c),.27),et+=260*Bs(wn(Z,-.52),.1)+220*Bs(wn(Z,.55),.09),et-=380*Bs(wn(Z,-1.95),.22),et+=250*Bs(wn(Z,Math.PI),.15),Math.min(et,s-300)}function f(Z,et){let Rt=(un(Z*.0011+3.1,et*.0011-1.7)-.5)*520,At=(un(Z*.0011-4.3,et*.0011+2.2)-.5)*520,kt=Z+Rt-r,Tt=et+At-o;return d(Math.atan2(Tt,kt))-Math.hypot(kt,Tt)+(un(Z*.006,et*.006)-.5)*60}let m=[{a:1.32,w:.26},{a:-.84,w:.13},{a:-2.55,w:.2},{a:2.3,w:.1}];function g(Z,et,Rt){let At=0;for(let kt of m)At=Math.max(At,Bs(wn(Z,kt.a),kt.w));return oe(.35,.75,At*(.75+.5*yn(et*.004,Rt*.004)))}let _=[{a:.95,w:.45,r:760,h:16},{a:-2.2,w:.5,r:900,h:18},{a:2.4,w:.35,r:640,h:14},{a:-.45,w:.3,r:1200,h:12},{a:1.9,w:.4,r:1300,h:15},{a:-1.45,w:.35,r:560,h:13}];function R(Z,et){let Rt=Z-r,At=et-o,kt=Math.hypot(Rt,At);if(kt<300)return l;let Tt=Math.atan2(At,Rt),Pe=2150+380*Math.sin(3*Tt+.4)+260*Math.sin(5*Tt+2.2)+160*Math.sin(8*Tt+1.1);Pe-=700*Bs(wn(Tt,c),.33),Pe*=1+(un(Z*.0016+9,et*.0016)-.5)*.35;let J=Me((kt-300)/(Pe-300),0,1),at=l*(1-J*J*(3-2*J));at*=1+.1*Math.sin(11*Tt+kt*.0035)*oe(320,700,kt)*(1-J);for(let v of _){let w=oe(v.w,v.w*.55,Math.abs(wn(Tt,v.a)));w>0&&(at-=v.h*w*oe(v.r-6,v.r+6,kt)*(1-J*.6))}return at+=((un(Z*.004+2,et*.004-6)-.5)*46+(un(Z*.02,et*.02)-.5)*5)*oe(300,650,kt),at}let p=[{id:"falcons",x:1900,z:1900,h:230,r:820},{id:"kohl",x:1550,z:-1950,h:185,r:600,dark:!0},{id:"fort",x:-2500,z:-2e3,h:58,r:300}];function y(Z,et,Rt){let At=Math.hypot(et-Z.x,Rt-Z.z);if(At>Z.r*1.3)return-1e9;let kt=At*(1+.28*(un(et*.003+Z.x*.01,Rt*.003)-.5)),Tt=Me(1-kt/Z.r,0,1);return Z.h*Math.pow(Tt,1.6)*(.85+.3*un(et*.01,Rt*.01))*(1+.12*Math.sin(7*Math.atan2(Rt-Z.z,et-Z.x)+kt*.012)*Tt*oe(0,90,At))}let P={x:-2e3,z:1400,r:950,amp:78},F={x:-1e3,z:2500,r:520,top:112,ramps:[-2.2,2.6]};function I(Z,et){let Rt=F,At=Math.hypot(Z-Rt.x,et-Rt.z);if(At>Rt.r+420)return-1e9;let kt=Math.atan2(et-Rt.z,Z-Rt.x),Tt=Rt.r*(1+.18*(yn(kt*2.2+11,3.3)-.5)),Pe=0;for(let at of Rt.ramps)Pe=Math.max(Pe,oe(.28,.12,Math.abs(wn(kt,at))));let J=oe(Tt+Qt(10,300,Pe),Tt-26,At);return(Rt.top+(un(Z*.004+2,et*.004)-.5)*22+(un(Z*.02,et*.02)-.5)*3)*J}let B=null;function D(Z,et){let Rt=f(Z,et),At=Math.atan2(et-o,Z-r),kt=g(At,Z,et),Tt;Rt<0?Tt=Math.max(-38,Rt*Qt(.035,.3,kt)-.4):Tt=1.4+Math.min(Rt,1500)*.011+(un(Z*.0035+1,et*.0035+8)-.5)*26*oe(40,500,Rt)+(un(Z*.03,et*.03)-.5)*1.4+kt*26*oe(-4,28,Rt);let Pe=oe(-25,160,Rt);if(Pe>0){let J=R(Z,et);for(let h of p){let x=y(h,Z,et);x>0&&(J=Qt(J,ac(J,x,18),oe(0,15,x)))}let at=Math.hypot(Z-P.x,et-P.z);at<P.r&&(Tt+=P.amp*oe(P.r,P.r*.45,at)*Math.pow(un(Z*.0055+3,et*.0055-2),1.5)*Pe);let v=J*Pe;Tt=Qt(Math.max(Tt,v),ac(Tt,v,14),oe(0,12,v));let w=I(Z,et)*Pe;w>0&&(Tt=Qt(Math.max(Tt,w),ac(Tt,w,10),oe(0,10,w)))}if(B){let J=Math.hypot(Z-B.x,et-B.z);J<B.r*1.6&&(Tt=Math.max(Tt,13*Math.pow(Me(1-J/B.r,0,1),1.2)*(.8+.4*un(Z*.02,et*.02))-1.2));let at=Hh(B.bar,Z,et,A);at.d<40&&(Tt=Math.max(Tt,-.5+(un(Z*.02,et*.02)-.5)*.5-oe(18,40,at.d)*3))}return Tt}let A={d:0,t:0};function L(Z,et=600){let Rt=Math.cos(Z),At=Math.sin(Z),kt=et;for(;kt<s&&f(r+Rt*kt,o+At*kt)>0;)kt+=12;return{r:kt,x:r+Rt*kt,z:o+At*kt,c:Rt,s:At}}let $=(Z,et,Rt=0)=>({x:Z.x-Z.c*et-Z.s*Rt,z:Z.z-Z.s*et+Z.c*Rt});{let et=L(2.29),Rt=r+Math.cos(2.29)*(et.r+330),At=o+Math.sin(2.29)*(et.r+330);B={x:Rt,z:At,r:170,bar:oc({x:et.x-Math.cos(2.29)*30,z:et.z-Math.sin(2.29)*30},{x:Rt,z:At})}}let O=L(c),ot=$(O,230),dt=L(-.52),st=$(dt,45),wt=L(-1.94),ft={...$(wt,380),r:640},Bt=L(Math.PI),gt=$(Bt,70),Mt=L(1.32),vt=$(L(1.08),60),It={x:e.x+60,z:e.z,r:210},qt={x:1150,z:-820,r:230},$t={x:560,z:-1580,r:70},pe={x:900,z:-2350,r:250},zt={x:-2500,z:-2e3},ne={x:ot.x-300,z:640,r:340},he={x:-1500,z:-1650,r:520},_e=[],Jt=(Z,et)=>D(Z,et);_e.push({x:ot.x,z:ot.z,r:52,fall:40,a:Math.max(7,Jt(ot.x,ot.z))}),_e.push({x:It.x,z:It.z,r:It.r-70,fall:70,a:Jt(It.x,It.z)}),_e.push({x:st.x,z:st.z,r:26,fall:25,a:Math.max(4,Jt(st.x,st.z))}),_e.push({x:$t.x,z:$t.z,r:$t.r,fall:40,a:Jt($t.x,$t.z)}),_e.push({x:zt.x,z:zt.z,r:34,fall:30,a:Jt(zt.x,zt.z)});function ye(Z,et,Rt){for(let kt of _e){let Tt=Math.hypot(Z-kt.x,et-kt.z);Tt<kt.r+kt.fall&&(Rt=Qt(kt.a,Rt,oe(kt.r,kt.r+kt.fall,Tt)))}let At=Math.hypot(Z-qt.x,et-qt.z);if(At<qt.r+60){let kt=Rt/3,Tt=kt-Math.floor(kt),Pe=(Math.floor(kt)+oe(.8,1,Tt))*3;Rt=Qt(Pe,Rt,oe(qt.r,qt.r+60,At))}return Rt}let Fe=[];for(let Z=0;Z<=24;Z++){let et=Z/24*Math.PI*2;Fe.push([r+Math.cos(et)*278,o+Math.sin(et)*278])}let le=Z=>[Z.x,Z.z],W=[{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0641\u062C\u0631",hw:1.9,way:[le(ot),[ot.x-140,220],[1520,120],[1330,260],[1150,150],[980,270],[820,150],[660,250],[520,120],[400,200],[300,80],[195,42]]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u063A\u064A\u0645",hw:1.5,way:Fe},{name:"\u062F\u0631\u0628 \u0627\u0644\u0631\u0637\u0628",hw:1.6,way:[le(ot),[ot.x-60,420],[ne.x,ne.z],[1500,1100],[1650,1450]]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0642\u0631\u064A\u0629",hw:1.8,way:[le(ot),[ot.x-120,-200],[1450,-450],[qt.x+60,qt.z+120],[qt.x,qt.z],[qt.x+250,-1050],[st.x-300,st.z+150],le(st)]},{name:"\u062F\u0631\u0628 \u0627\u0644\u0628\u062D\u064A\u0631\u0629",hw:1.4,way:[[qt.x,qt.z],[1180,-1350],[pe.x+300,pe.z+120],[pe.x+200,pe.z+300],[$t.x+150,$t.z-200],le($t)]},{name:"\u062F\u0631\u0628 \u0627\u0644\u062D\u0637\u0651\u0627\u0628\u064A\u0646",hw:1.4,way:[[r-20,o-278],[60,-650],[300,-1100],le($t)]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0647\u0648\u0631",hw:1.6,way:[[r-197,o-197],[-600,-700],[-1e3,-1200],[he.x,he.z],[ft.x-150,ft.z+350],le(ft)]},{name:"\u062F\u0631\u0628 \u0627\u0644\u062D\u0635\u0646",hw:1.3,way:[[he.x,he.z],[-2050,-1830],le(zt)]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0628\u0644\u0648\u0637",hw:1.6,way:[[r-278,o],[-900,-100],[-1600,-250],[-2300,-200],[gt.x+250,gt.z-100],le(gt)]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0648\u0627\u062F\u064A",hw:1.6,way:[[r,o+278],[-150,700],[-250,1100],[e.x-75,e.z],[-700,1500],[-1300,1700],[-1800,2150],[B.bar.ax+60,B.bar.az-60],[B.bar.ax,B.bar.az]]},{name:"\u062F\u0631\u0628 \u0627\u0644\u0647\u0636\u0628\u0629",hw:1.3,way:[[-1300,1700],[-1e3+Math.cos(-2.2)*900,2500+Math.sin(-2.2)*900],[F.x,F.z]]},{name:"\u062F\u0631\u0628 \u0627\u0644\u0634\u0644\u0627\u0644",hw:1.4,way:[[r+197,o+197],[480,600],[700,1150],[560,1780],[650,2400],[vt.x-120,vt.z-200],le(vt)]}],St=[],rt=Vh(48);for(let Z of W){let et=Tf(Z.way,5);for(let At of et)At.a0=ye(At.x,At.z,D(At.x,At.z));for(let At=0;At<et.length;At++){let kt=0,Tt=0;for(let Pe=-6;Pe<=6;Pe++){let J=et[Me(At+Pe,0,et.length-1)];kt+=J.a0,Tt++}et[At].a=Math.max(kt/Tt,.6)}let Rt={name:Z.name,hw:Z.hw,pts:et};St.push(Rt);for(let At=0;At<et.length-1;At++)rt.add(oc(et[At],et[At+1],{road:Rt}),Z.hw+8)}let mt={d:0,t:0};function K(Z,et){let Rt=rt.at(Z,et);if(!Rt)return null;let At=null,kt=1e9,Tt=0;for(let Pe of Rt)Hh(Pe,Z,et,mt),mt.d<kt&&(kt=mt.d,At=Pe,Tt=mt.t);return At?{d:kt,a:Qt(At.a.a,At.b.a,Tt),hw:At.road.hw,road:At.road}:null}function pt(Z,et,Rt){let At=K(Z,et);return At&&At.d<At.hw+6&&(Rt=Qt(At.a,Rt,oe(At.hw+.3,At.hw+6,At.d))),Rt}let lt={x:590,z:1950,nx:.17,nz:-.985,len:300,h:16},ht=()=>0,xt=[{id:"silver",name:"\u0646\u0647\u0631 \u0627\u0644\u0641\u0636\u0629",w0:2.4,w1:8,depth:1.5,way:[[520,720],[640,1050],[660,1400],[600,1750],[592,1950],[620,2300],[760,2700],[900,3100],[Mt.x+Mt.c*150,Mt.z+Mt.s*150]]},{id:"anbar",name:"\u0646\u0647\u0631 \u0627\u0644\u0639\u0646\u0628\u0631",w0:2.2,w1:7,depth:1.4,way:[[-330,-650],[-470,-1e3],[-640,-1450],[-800,-1900],[-960,-2300],[ft.x+60,ft.z+330],[ft.x,ft.z]]},{id:"dates",name:"\u0633\u0627\u0642\u064A\u0629 \u0627\u0644\u0631\u0637\u0628",w0:1.2,w1:2.4,depth:.7,way:[[640,320],[900,480],[1250,560],[ne.x+100,ne.z-40],[O.x+60,560]]}],u=[],M=Vh(64),Y=[],C=(Z,et)=>pt(Z,et,ye(Z,et,D(Z,et)+ht(Z,et)));for(let Z of xt){let et=Tf(Z.way,8),Rt=1e9;for(let kt=0;kt<et.length;kt++){let Tt=et[kt],Pe=kt/(et.length-1),J=C(Tt.x,Tt.z);Rt=Math.min(Rt-.03,J-Qt(.9,.5,Pe)),Tt.lv=Math.max(Rt,Z.id==="anbar"?.3:.05),Tt.w=Qt(Z.w0,Z.w1,Math.pow(Pe,.8)),kt&&et[kt-1].lv-Tt.lv>2.5&&Y.push({river:Z.id,x:(Tt.x+et[kt-1].x)/2,z:(Tt.z+et[kt-1].z)/2,top:et[kt-1].lv,bot:Tt.lv,w:Tt.w,dx:Tt.x-et[kt-1].x,dz:Tt.z-et[kt-1].z})}let At={...Z,pts:et};u.push(At);for(let kt=0;kt<et.length-1;kt++)M.add(oc(et[kt],et[kt+1],{river:At}),et[kt].w+70)}function _t(Z,et){let Rt=M.at(Z,et);if(!Rt)return null;let At=null,kt=1e9,Tt=0;for(let Pe of Rt)Hh(Pe,Z,et,mt),mt.d<kt&&(kt=mt.d,At=Pe,Tt=mt.t);return At?{d:kt,lv:Qt(At.a.lv,At.b.lv,Tt),w:Qt(At.a.w,At.b.w,Tt),river:At.river,dx:At.dx,dz:At.dz}:null}function H(Z,et,Rt){let At=_t(Z,et);if(!At)return Rt;if(At.d<At.w){let kt=K(Z,et),Tt=kt&&kt.d<kt.hw+3?.35:At.river.depth;Rt=Math.min(Rt,At.lv-.12-Tt*(1-(At.d/At.w)**2))}else Rt=Math.min(Rt,Ef(At.lv+.25+(At.d-At.w)*.42,Rt,1.5));return Rt}let V=Y.filter(Z=>Z.river==="silver").sort((Z,et)=>et.top-et.bot-(Z.top-Z.bot))[0],G=V?{x:V.x,z:V.z}:{x:lt.x,z:lt.z},Dt=ye(pe.x,pe.z,D(pe.x,pe.z))-2.5,yt=[{id:"moon",name:"\u0628\u062D\u064A\u0631\u0629 \u0627\u0644\u0642\u0645\u0631",x:pe.x,z:pe.z,r:pe.r,lv:Dt}],Et=(Z,et,Rt)=>Z.r*(1+.2*(yn(Math.atan2(Rt-Z.z,et-Z.x)*2.4+5,1.1)-.5)),U=.3;function b(Z,et,Rt){for(let kt of yt){let Tt=Math.hypot(Z-kt.x,et-kt.z);if(Tt>kt.r*1.25+160)continue;let Pe=Et(kt,Z,et);Tt<Pe?Rt=Math.min(Rt,kt.lv-.2-3.6*(1-(Tt/Pe)**2)):Rt=Math.min(Rt,Ef(kt.lv+.35+(Tt-Pe)*.18,Rt,1.5))}let At=Math.hypot(Z-ft.x,et-ft.z);if(At<ft.r){let kt=.22+(un(Z*.022+4,et*.022)-.47)*2.4;Rt=Qt(kt,Rt,oe(ft.r*.55,ft.r,At))}return Rt}let nt=[],it=[],tt=Vh(32),ut=(Z,et=!0)=>{if(nt.push(Z),et&&Z.w){let Rt={x:Z.x,z:Z.z,c:Math.cos(Z.rot||0),s:Math.sin(Z.rot||0),hw:Z.w/2+.6,hd:Z.d/2+.6,a:null};it.push(Rt),Z.pad=Rt,tt.add(oc(Rt,Rt),Math.max(Rt.hw,Rt.hd)+4)}return Z},Wt=(Z,et)=>b(Z,et,H(Z,et,pt(Z,et,ye(Z,et,D(Z,et)+ht(Z,et))))),Ft=(Z,et,Rt)=>{let At=K(Z,et);if(At&&At.d<At.hw+Rt)return!1;let kt=_t(Z,et);return kt&&kt.d<kt.w+Rt+4?!1:!nt.some(Tt=>Math.hypot(Tt.x-Z,Tt.z-et)<Rt+Math.max(Tt.w||2,Tt.d||2)*.6)};{let Z=ot,et=0,Rt=(At,kt)=>({x:Z.x+At,z:Z.z+kt});ut({kind:"square",...Rt(0,0),rot:et,w:64,d:96,h:0},!1),ut({kind:"fountain",...Rt(0,0),rot:et,r:3.4},!1);for(let At=0;At<8;At++){let kt=At/8*Math.PI*2+.2;ut({kind:"palm",...Rt(Math.cos(kt)*15,Math.sin(kt)*15),s:.95+At%3*.08},!1)}for(let At=0;At<5;At++)ut({kind:"stall",...Rt(-18+At*9,-38),rot:Math.PI/2,w:3.2,d:2.4,h:2.6,tint:At});ut({kind:"teahouse",...Rt(-20,30),rot:Math.atan2(-30,20),w:6,d:10,h:3.3}),ut({kind:"board",...Rt(25,0),rot:Math.PI,w:1.9,d:4.6,h:4.2}),ut({kind:"signpost",...Rt(-26,8),rot:0},!1),ut({kind:"gate",...Rt(-31,0),rot:0,w:1.2,d:9,h:5.2},!1);for(let[At,kt]of[[-30,-46],[-30,46],[30,-46],[30,46],[0,-46],[0,46],[-30,22],[-30,-22]])ut({kind:"lamp",...Rt(At,kt)},!1);ut({kind:"pier",x:O.x+O.c*6,z:O.z-40+O.s*6,rot:Math.atan2(O.s,O.c),w:46,d:3,h:0},!1);for(let At=0;At<3;At++)ut({kind:"boat",x:O.x+10+At*7,z:O.z-30+At*9,rot:.4+At*.5},!1)}{let Z=qt;for(let et=0,Rt=0;Rt<22&&et<900;et++){let At=a()*Math.PI*2,kt=Math.sqrt(a())*(Z.r-25),Tt=Z.x+Math.cos(At)*kt,Pe=Z.z+Math.sin(At)*kt;if(!Ft(Tt,Pe,8))continue;let J=(x,S)=>Wt(Tt+x,Pe+S),at=J(4,0)-J(-4,0),v=J(0,4)-J(0,-4),w=Math.atan2(-v,-at)+Math.round(a()*2-1)*.05,h=a()<.3;ut({kind:"house",x:Tt,z:Pe,rot:w,w:h?7:8+a()*2,d:h?9:9+a()*2.5,h:h?6.4:3.2,floors:h?2:1,tint:a()}),Rt++}ut({kind:"well",x:Z.x+6,z:Z.z+4,r:1.1},!1)}{for(let Z=0;Z<5;Z++){let et=Z/5*Math.PI*2+.4,Rt=$t.x+Math.cos(et)*24,At=$t.z+Math.sin(et)*24;ut({kind:"hut",x:Rt,z:At,rot:et+Math.PI,w:4,d:5,h:2.4})}ut({kind:"logs",x:$t.x+6,z:$t.z-5,rot:.6,w:4.5,d:1.8,h:1.2}),ut({kind:"campfire",x:$t.x,z:$t.z},!1)}{let Z=ft.x+40,et=ft.z+120;_e.push({x:Z,z:et,r:26,fall:14,a:1.1}),ut({kind:"mudhif",x:Z,z:et,rot:.3,w:6.5,d:20,h:5.8});for(let Rt=0;Rt<4;Rt++){let At=1.2+Rt*1.3,kt=Z+Math.cos(At)*22,Tt=et+Math.sin(At)*22;_e.push({x:kt,z:Tt,r:6,fall:8,a:.9}),ut({kind:"reedhut",x:kt,z:Tt,rot:At,w:3.2,d:6,h:3})}for(let Rt=0;Rt<3;Rt++)ut({kind:"canoe",x:Z-30+Rt*9,z:et-20-Rt*6,rot:1+Rt*.7,float:!0},!1)}{ut({kind:"lighthouse",x:st.x,z:st.z,rot:0,w:6,d:6,h:19}),ut({kind:"house",x:st.x-16,z:st.z+4,rot:.3,w:6,d:7,h:3,floors:1,tint:.8,white:!0});for(let Z=0;Z<2;Z++)ut({kind:"boat",x:dt.x+18+Z*8,z:dt.z+30+Z*12,rot:1.6+Z*.4},!1)}{let Z=zt,et=17;for(let[At,kt]of[[-1,-1],[1,-1],[1,1],[-1,1]])ut({kind:"ftower",x:Z.x+At*et,z:Z.z+kt*et,r:3.2,h:6+a()*3},!1);[[[-1,-1],[1,-1]],[[1,-1],[1,1]],[[1,1],[-1,1]],[[-1,1],[-1,-1]]].forEach(([[At,kt],[Tt,Pe]],J)=>{let at=Z.x+At*et,v=Z.z+kt*et,w=Z.x+Tt*et,h=Z.z+Pe*et;for(let[x,S]of J===2?[[.1,.38],[.62,.9]]:[[.12,.88]]){let T=Qt(at,w,x),E=Qt(v,h,x),z=Qt(at,w,S),X=Qt(v,h,S);ut({kind:"fwall",x:(T+z)/2,z:(E+X)/2,rot:Math.atan2(X-E,z-T),w:Math.hypot(z-T,X-E),d:1.3,h:3+a()*2.2},!1)}})}{ut({kind:"reedhut",x:gt.x+30,z:gt.z-20,rot:.5,w:3.2,d:6,h:3});for(let Rt=0;Rt<3;Rt++)ut({kind:"boat",x:Bt.x+8,z:Bt.z-25+Rt*14,rot:Rt*.6},!1);let Z=Math.atan2(90,240),et={x:pe.x+Math.cos(Z)*(pe.r-8),z:pe.z+Math.sin(Z)*(pe.r-8)};ut({kind:"pier",x:et.x,z:et.z,rot:Z+Math.PI,w:26,d:2.4,h:0,lake:!0},!1)}for(let Z of it)Z.a=Wt(Z.x,Z.z);let Ut={d:0,t:0};function Zt(Z,et,Rt){let At=tt.at(Z,et);if(!At)return Rt;for(let kt of At){let Tt=kt.a,Pe=Z-Tt.x,J=et-Tt.z,at=Math.abs(Pe*Tt.c+J*Tt.s),v=Math.abs(-Pe*Tt.s+J*Tt.c),w=Math.max(at-Tt.hw,v-Tt.hd,0);w<4&&(Rt=Qt(Tt.a,Rt,oe(0,4,w)))}return Rt}function ee(Z,et){return Zt(Z,et,b(Z,et,H(Z,et,pt(Z,et,ye(Z,et,D(Z,et)+ht(Z,et))))))}let Q=(Z,et)=>n+ee(Z,et);function bt(Z,et,Rt){for(let kt of yt){let Tt=Math.hypot(Z-kt.x,et-kt.z);if(Tt<kt.r*1.25&&Rt<n+kt.lv+.2&&Tt<Et(kt,Z,et)+2)return{kind:"lake",level:n+kt.lv}}if(Math.hypot(Z-ft.x,et-ft.z)<ft.r&&Rt<n+U+.15)return{kind:"marsh",level:n+U};let At=_t(Z,et);return At&&At.d<At.w+.3&&Rt<n+At.lv+.25?{kind:"river",level:n+At.lv,dx:At.dx,dz:At.dz}:Rt<n+.1?{kind:"sea",level:n}:null}let Gt=(Z,et,Rt)=>oe(Z.r,Z.r*.6,Math.hypot(et-Z.x,Rt-Z.z)),se={x:400,z:-1150,r:950},ce={x:-1700,z:-250,r:750};function xe(Z,et,Rt,At,kt){let Tt={t:0,pine:0,oak:0,palm:0,olive:0,b:.04,rock:0,reed:0};if(Rt<.35)return Math.hypot(Z-ft.x,et-ft.z)<ft.r&&Rt>-.6&&(Tt.reed=.75),Tt;let Pe=un(Z*.0032+5,et*.0032-3),J=oe(.44,.62,Pe),at=oe(90,200,Rt);Tt.t=J*Qt(.55,.75,at)+.03,Tt.pine=.25+at*.7,Tt.oak=1-Tt.pine,Rt<25&&(Tt.olive=.3,Tt.palm=oe(25,6,Rt)*.6,Tt.t*=.6);let v=Gt(se,Z,et);v>0&&(Tt.t=Qt(Tt.t,.9,v),Tt.pine=Qt(Tt.pine,.85,v),Tt.oak=1-Tt.pine,Tt.palm=Tt.olive=0);let w=Gt(ce,Z,et);w>0&&(Tt.t=Qt(Tt.t,.82,w),Tt.oak=Qt(Tt.oak,.95,w),Tt.pine=1-Tt.oak,Tt.palm*=1-w,Tt.olive*=1-w);let h=Gt(ne,Z,et);h>0&&(Tt.t=Qt(Tt.t,.8,h),Tt.palm=Qt(Tt.palm,1,h),Tt.pine*=1-h,Tt.oak*=1-h,Tt.olive*=1-h);let x=Gt(he,Z,et);x>0&&(Tt.t*=1-x*.97,Tt.b*=1-x);let S=Gt(qt,Z,et);S>0&&(Tt.t=Qt(Tt.t,.14,S),Tt.olive=Qt(Tt.olive,.6,S),Tt.palm=Qt(Tt.palm,.4,S),Tt.pine*=1-S,Tt.oak*=1-S);let T=oe(P.r,P.r*.5,Math.hypot(Z-P.x,et-P.z));T>0&&(Tt.t*=1-T*.8,Tt.b=Qt(Tt.b,.3,T)),Math.hypot(Z-F.x,et-F.z)<F.r&&(Tt.t=.05,Tt.oak=1,Tt.pine=0),At<110&&Rt<5&&(Tt.t=.05,Tt.palm=1,Tt.oak=Tt.pine=Tt.olive=0,Tt.b=.03),Rt>330&&(Tt.t*=.5),kt>.75&&(Tt.t*=.4,Tt.rock=oe(.75,1.1,kt)*.35),Tt.rock+=.006;let z=K(Z,et);z&&z.d<z.hw+2.2&&(Tt.t=Tt.b=Tt.rock=0);let X=_t(Z,et);return X&&X.d<X.w+1.5&&(Tt.t=Tt.rock=0,X.d>X.w-.5&&(Tt.reed=.3)),Tt}function Le(Z,et){if(Math.hypot(Z-ot.x,et-ot.z)<62)return!0;for(let At of fe)if(Math.hypot(Z-At.fx,et-At.fz)<7)return!0;if(Ti&&Ln(Z,et,4.5)||Math.hypot(Z-$t.x,et-$t.z)<$t.r-8||Math.hypot(Z-zt.x,et-zt.z)<26||Math.hypot(Z-st.x,et-st.z)<30)return!0;let Rt=tt.at(Z,et);if(Rt)for(let At of Rt){let kt=At.a,Tt=Z-kt.x,Pe=et-kt.z;if(Math.abs(Tt*kt.c+Pe*kt.s)<kt.hw+2.5&&Math.abs(-Tt*kt.s+Pe*kt.c)<kt.hd+2.5)return!0}for(let At of nt)if((At.kind==="fountain"||At.kind==="ftower")&&Math.hypot(Z-At.x,et-At.z)<(At.r||2)+2)return!0;return!1}let Kt=[{id:"summit",name:"\u0642\u0645\u0629 \u0627\u0644\u0633\u062D\u0627\u0628",icon:"\u{1F3D4}\uFE0F",x:r,z:o,r:22,sub:"\u0623\u0628\u0648 \u062C\u0627\u0633\u0645 \u0648\u0627\u0644\u0686\u0627\u064A\u0686\u064A"},{id:"shoulder",name:"\u0645\u0635\u0637\u0628\u0629 \u0627\u0644\u063A\u064A\u0645",icon:"\u2601\uFE0F",x:r,z:o,r:340,ring:225,sub:"\u0643\u062A\u0641 \u0627\u0644\u062C\u0628\u0644"},{id:"mount",name:"\u062C\u0628\u0644 \u0627\u0644\u0647\u064A\u0628\u0629",icon:"\u26F0\uFE0F",x:r,z:o,r:1700,sub:"\u0642\u0644\u0628 \u0627\u0644\u062C\u0632\u064A\u0631\u0629"},{id:"fajr",name:"\u0633\u0627\u062D\u0629 \u0627\u0644\u0641\u062C\u0631",icon:"\u{1F305}",x:ot.x,z:ot.z,r:110,sub:"\u0633\u0648\u0642 \u0648\u0686\u0627\u064A\u062E\u0627\u0646\u0629 \u064A\u0645 \u0627\u0644\u062E\u0644\u064A\u062C"},{id:"bay",name:"\u062E\u0644\u064A\u062C \u0627\u0644\u0641\u062C\u0631",icon:"\u26F5",x:O.x+200,z:O.z,r:520},{id:"groves",name:"\u0628\u0633\u0627\u062A\u064A\u0646 \u0627\u0644\u0631\u0637\u0628",icon:"\u{1F334}",x:ne.x,z:ne.z,r:ne.r},{id:"village",name:"\u0642\u0631\u064A\u0629 \u0627\u0644\u0637\u064A\u0646",icon:"\u{1F3D8}\uFE0F",x:qt.x,z:qt.z,r:qt.r+30},{id:"light",name:"\u0645\u0646\u0627\u0631\u0629 \u0627\u0644\u0635\u064A\u0627\u062F\u064A\u0646",icon:"\u{1F5FC}",x:st.x,z:st.z,r:200},{id:"kohl",name:"\u062C\u0628\u0644 \u0627\u0644\u0643\u062D\u0644",icon:"\u{1F5FB}",x:1550,z:-1950,r:560},{id:"lake",name:"\u0628\u062D\u064A\u0631\u0629 \u0627\u0644\u0642\u0645\u0631",icon:"\u{1F319}",x:pe.x,z:pe.z,r:pe.r+140},{id:"huts",name:"\u0623\u0643\u0648\u0627\u062E \u0627\u0644\u062D\u0637\u0651\u0627\u0628\u064A\u0646",icon:"\u{1FA93}",x:$t.x,z:$t.z,r:120},{id:"shadows",name:"\u063A\u0627\u0628\u0629 \u0627\u0644\u0638\u0644\u0627\u0644",icon:"\u{1F332}",x:se.x,z:se.z,r:se.r},{id:"marsh",name:"\u0647\u0648\u0631 \u0627\u0644\u0639\u0646\u0628\u0631",icon:"\u{1F6F6}",x:ft.x,z:ft.z,r:ft.r},{id:"mudhif",name:"\u0645\u0636\u064A\u0641 \u0627\u0644\u0642\u0635\u0628",icon:"\u{1F6D6}",x:ft.x+40,z:ft.z+120,r:60},{id:"wheat",name:"\u0633\u0647\u0644 \u0627\u0644\u0633\u0646\u0627\u0628\u0644",icon:"\u{1F33E}",x:he.x,z:he.z,r:he.r},{id:"fort",name:"\u0623\u0637\u0644\u0627\u0644 \u0627\u0644\u062D\u0635\u0646",icon:"\u{1F3F0}",x:zt.x,z:zt.z,r:260},{id:"oaks",name:"\u063A\u0627\u0628\u0629 \u0627\u0644\u0628\u0644\u0648\u0637",icon:"\u{1F333}",x:ce.x,z:ce.z,r:ce.r},{id:"pearl",name:"\u0634\u0627\u0637\u0626 \u0627\u0644\u0644\u0624\u0644\u0624",icon:"\u{1F41A}",x:gt.x,z:gt.z,r:420},{id:"thyme",name:"\u062A\u0644\u0627\u0644 \u0627\u0644\u0632\u0639\u062A\u0631",icon:"\u{1F33F}",x:P.x,z:P.z,r:P.r},{id:"plateau",name:"\u0647\u0636\u0628\u0629 \u0627\u0644\u062E\u064A\u0651\u0627\u0644\u0629",icon:"\u{1F40E}",x:F.x,z:F.z,r:F.r+40},{id:"birds",name:"\u062C\u0632\u064A\u0631\u0629 \u0627\u0644\u0637\u064A\u0648\u0631",icon:"\u{1F54A}\uFE0F",x:B.x,z:B.z,r:B.r+80},{id:"gulls",name:"\u062C\u0631\u0641 \u0627\u0644\u0646\u0648\u0627\u0631\u0633",icon:"\u{1FAB6}",x:vt.x,z:vt.z,r:380},{id:"falls",name:"\u0634\u0644\u0627\u0644 \u0627\u0644\u0645\u0631\u0627\u064A\u0627",icon:"\u{1F4A6}",x:G.x,z:G.z,r:130},{id:"falcons",name:"\u062C\u0628\u0644 \u0627\u0644\u0635\u0642\u0648\u0631",icon:"\u{1F985}",x:1900,z:1900,r:760},{id:"valley",name:"\u0648\u0627\u062F\u064A \u0627\u0644\u063A\u0632\u0644\u0627\u0646",icon:"\u{1F98C}",x:It.x,z:It.z,r:It.r}];Kt.sort((Z,et)=>Z.r-et.r);function ke(Z,et){for(let At of Kt){let kt=Math.hypot(Z-At.x,et-At.z);if(At.ring?kt<At.r&&kt>At.ring:kt<At.r)return At}let Rt=_t(Z,et);return Rt&&Rt.d<Rt.w+30?{id:Rt.river.id,name:Rt.river.name,icon:"\u{1F4A7}",river:!0}:f(Z,et)<0?{id:"sea",name:"\u0627\u0644\u0628\u062D\u0631",icon:"\u{1F30A}"}:f(Z,et)<160?{id:"coast",name:"\u0627\u0644\u0633\u0627\u062D\u0644",icon:"\u{1F3D6}\uFE0F"}:{id:"wild",name:"\u0627\u0644\u0628\u0631\u0651\u064A\u0629",icon:"\u{1F343}"}}let Ae={fajr:[ot.x-22,ot.z-16],village:[qt.x+14,qt.z+10],light:[st.x-24,st.z-12],lake:[pe.x+290,pe.z+60],huts:[$t.x-6,$t.z+8],mudhif:[ft.x+40,ft.z+146],wheat:[he.x+10,he.z+14],fort:[zt.x+26,zt.z+4],oaks:[-1600,-238],pearl:[gt.x+40,gt.z+10],thyme:[-1300,1712],plateau:[F.x+10,F.z],birds:[B.x,B.z],gulls:[vt.x-40,vt.z-30],falls:[G.x-30,G.z-20],falcons:[1650,1460],kohl:[1300,-1500],groves:[ne.x,ne.z+14]},fe=[];for(let Z of Kt){let et=Ae[Z.id];if(!et)continue;let Rt=Math.atan2(o-et[1],r-et[0]);fe.push({id:"z_"+Z.id,x:et[0]-Math.cos(Rt)*3.4,z:et[1]-Math.sin(Rt)*3.4,fx:et[0],fz:et[1],name:Z.name,icon:Z.icon,face:Rt,flag:!1,fire:!0})}fe.sort((Z,et)=>(et.id==="z_fajr")-(Z.id==="z_fajr"));{let Z=fe[0];Object.assign(Z,{x:ot.x+18.5,z:ot.z,face:0,start:!0})}let Xe=hn((i.seed||7)*31+5),pn=Math.PI*2,En=(Z,et)=>Math.hypot(ee(Z+1,et)-ee(Z-1,et),ee(Z,et+1)-ee(Z,et-1))/2,pi=(Z,et)=>{let Rt=ee(Z,et);if(Rt<.6||f(Z,et)<12||bt(Z,et,n+Rt+.05))return!1;let At=K(Z,et);if(At&&At.d<At.hw+3)return!1;let kt=_t(Z,et);return kt&&kt.d<kt.w+6?!1:!nt.some(Tt=>Math.hypot(Tt.x-Z,Tt.z-et)<12)};function mi(Z,et,Rt,At,kt,Tt){let Pe=[];for(let J=0;J<6e3&&Pe.length<At;J++){let at=Xe()*pn,v=Math.sqrt(Xe())*Rt,w=Z+Math.cos(at)*v,h=et+Math.sin(at)*v;!Tt(w,h)||Pe.some(x=>Math.hypot(x.x-w,x.z-h)<kt)||Pe.push({x:w,z:h})}return Pe}function Fn(Z){let et={x:Z.x,z:Z.z,a:-1e9};for(let Rt=-40;Rt<=40;Rt++)for(let At=-40;At<=40;At++){let kt=Z.x+Rt*6,Tt=Z.z+At*6,Pe=ee(kt,Tt);Pe>et.a&&(et={x:kt,z:Tt,a:Pe})}return{x:et.x,z:et.z}}let Ei={x:-1650,z:1560},Ti=[{id:"gazelle",icon:"\u{1F98C}",name:"\u063A\u0632\u0627\u0644 \u062D\u064A",need:1,reward:500,zone:"valley",at:{x:It.x,z:It.z},note:"\u0628\u0648\u0627\u062F\u064A \u0627\u0644\u063A\u0632\u0644\u0627\u0646 \u0634\u0631\u0642 \u0627\u0644\u062C\u0628\u0644. \u0627\u0645\u0634\u0650 \u064A\u0645\u0651\u0647 \u0639\u0644\u0649 \u0647\u0648\u0646\u0643\u2026 \u0625\u0630\u0627 \u0631\u0643\u0636\u062A \u064A\u0634\u0631\u062F",items:[]},{id:"thyme",icon:"\u{1F33F}",name:"\u0628\u0627\u0642\u0627\u062A \u0632\u0639\u062A\u0631 \u0628\u0631\u064A",need:5,reward:150,zone:"thyme",at:Ei,note:"\u062A\u0646\u0628\u062A \u0628\u064A\u0646 \u0635\u062E\u0648\u0631 \u062A\u0644\u0627\u0644 \u0627\u0644\u0632\u0639\u062A\u0631\u060C \u062C\u0646\u0648\u0628 \u0634\u0631\u0642 \u0627\u0644\u062C\u0628\u0644",items:mi(Ei.x,Ei.z,330,5,55,(Z,et)=>pi(Z,et)&&En(Z,et)<.45)},{id:"pearl",icon:"\u{1F9AA}",name:"\u0645\u062D\u0627\u0631 \u0628\u064A\u0647 \u0644\u0624\u0644\u0624",need:3,reward:250,zone:"pearl",at:gt,note:"\u0639\u0644\u0649 \u0631\u0645\u0644 \u0634\u0627\u0637\u0626 \u0627\u0644\u0644\u0624\u0644\u0624 \u064A\u0645 \u0627\u0644\u0645\u0627\u064A\u060C \u062C\u0646\u0648\u0628 \u0627\u0644\u062C\u0632\u064A\u0631\u0629",items:mi(gt.x,gt.z,420,3,45,(Z,et)=>{let Rt=f(Z,et),At=ee(Z,et);return Rt>3&&Rt<18&&At>.35&&At<4&&!bt(Z,et,n+At+.05)&&En(Z,et)<.22})},{id:"honey",icon:"\u{1F36F}",name:"\u062C\u0631\u0651\u0629 \u0639\u0633\u0644 \u0628\u0631\u064A",need:1,reward:200,zone:"oaks",at:ce,note:"\u062E\u0644\u064A\u0629 \u0646\u062D\u0644 \u0642\u062F\u064A\u0645\u0629 \u0628\u0646\u0635 \u063A\u0627\u0628\u0629 \u0627\u0644\u0628\u0644\u0648\u0637\u2026 \u0648\u0627\u0646\u062A\u0628\u0647 \u0645\u0646 \u0627\u0644\u062E\u0646\u0627\u0632\u064A\u0631 \u{1F417}",items:mi(ce.x-60,ce.z-80,180,1,0,(Z,et)=>pi(Z,et)&&En(Z,et)<.3)},{id:"feather",icon:"\u{1FAB6}",name:"\u0631\u064A\u0634\u0629 \u0635\u0642\u0631",need:1,reward:300,zone:"falcons",at:{x:p[0].x,z:p[0].z},note:"\u0628\u0639\u0634 \u0627\u0644\u0635\u0642\u0631 \u0641\u0648\u0643 \u0642\u0645\u0629 \u062C\u0628\u0644 \u0627\u0644\u0635\u0642\u0648\u0631\u060C \u0634\u0645\u0627\u0644 \u0634\u0631\u0642 \u0627\u0644\u062C\u0632\u064A\u0631\u0629",items:[Fn(p[0])]},{id:"fish",icon:"\u{1F41F}",name:"\u0633\u0645\u0686\u062A\u064A\u0646",need:2,reward:300,zone:"lake",at:{x:pe.x,z:pe.z},note:"\u0645\u0646 \u0631\u0635\u064A\u0641 \u0627\u0644\u062E\u0644\u064A\u062C \u0623\u0648 \u0628\u062D\u064A\u0631\u0629 \u0627\u0644\u0642\u0645\u0631\u2026 \u062A\u062D\u062A\u0627\u062C \u0633\u0646\u0627\u0631\u0629 \u0645\u0646 \u062F\u0643\u0627\u0646\u064A",items:[]}];for(let Z of Ti)for(let et of Z.items)et.y=Q(et.x,et.z);let Ln=(Z,et,Rt)=>Ti.some(At=>At.items.some(kt=>Math.hypot(Z-kt.x,et-kt.z)<Rt)),Hn=nt.find(Z=>Z.kind==="board"),on={x:Hn.x,z:Hn.z,fx:Math.cos(Hn.rot),fz:Math.sin(Hn.rot),w:Hn.d},Nn=[...[[300,-1300],[650,-1050],[180,-1720]].map(([Z,et])=>({kind:"wolf",x:Z,z:et})),...[[-1600,-420],[-1900,-120],[-1480,-720],[-1900,1300],[-2250,1620]].map(([Z,et])=>({kind:"boar",x:Z,z:et}))];return{SEA:n,HALF:s,SHOULDER:l,beasts:Nn,H:Q,A:ee,baseA:D,coastS:f,Rc:d,rivers:u,falls:Y,lakes:yt,marsh:{...ft,lv:U},roads:St,sites:nt,zones:Kt,zoneAt:ke,rest:fe,nearRoad:K,nearRiver:_t,water:bt,flora:xe,reserved:Le,tasks:Ti,board:on,peaks:p,plateau:F,islet:B,fajr:ot,shBay:O,valley:It,scarp:lt,fallsAt:G}}var Vn=Math.PI/180,ws=(i,t)=>i*100003+t;function lc(i){let t=new Map;return{cell:i,add(e,n=e.x,s=e.z){let r=ws(Math.floor(n/i),Math.floor(s/i)),o=t.get(r);o||(o=[],t.set(r,o)),o.push(e)},remove(e,n=e.x,s=e.z){let r=t.get(ws(Math.floor(n/i),Math.floor(s/i)));if(r){let o=r.indexOf(e);o>=0&&r.splice(o,1)}},addArea(e,n,s,r,o){for(let a=Math.floor(n/i);a<=Math.floor(r/i);a++)for(let l=Math.floor(s/i);l<=Math.floor(o/i);l++){let c=ws(a,l),d=t.get(c);d||(d=[],t.set(c,d)),d.push(e)}},each(e,n,s,r){let o=Math.floor(e/i),a=Math.floor(n/i);for(let l=-s;l<=s;l++)for(let c=-s;c<=s;c++){let d=t.get(ws(o+l,a+c));if(d){for(let f of d)if(r(f)===!0)return!0}}return!1}}}function V1(i,t){let e=i.x||0,n=i.z||0,s=13.3,r=95,o=0,a=(H,V)=>[e+Math.cos(V*Vn)*H,n+Math.sin(V*Vn)*H],l=(H,V)=>Math.hypot(H-e,V-n),c=(H,V)=>Math.atan2(V-n,H-e);function d(H){if(H<=s+1)return r;let V=40+55*Math.pow(1-Me((H-s-1)/(72-s-1),0,1),1.12),G=36+4*(1-Me((H-72)/48,0,1)),Dt=36*Math.pow(1-Me((H-120)/60,0,1),1.25)-oe(180,230,H)*14;return Qt(Qt(V,G,oe(68,76,H)),Dt,oe(116,124,H))}let f=[{a:118.5*Vn,r0:108,r1:190,w:7.5,depth:17},{a:101*Vn,r0:22,r1:64,w:6,depth:15},{a:58*Vn,r0:26,r1:72,w:4.5,depth:1.6,water:!0}],m=(H,V)=>{let G=l(H,V),Dt=d(G)+(un(H*.028+5,V*.028)-.5)*9*oe(s+2,s+12,G)*(1-oe(200,260,G)*.5);return Dt+=5*oe(49.5,47.6,G)*oe(28,42,G),Dt+=4*oe(27.2,25.3,G)*oe(15.5,21,G),Dt},g=(H,V)=>{let G=l(H,V),Dt=m(H,V);for(let yt of f){if(G<=yt.r0||G>=yt.r1)continue;let Et=Math.abs(wn(yt.a,c(H,V)))*G;Et<yt.w&&(Dt-=yt.depth*oe(yt.w,yt.w*.25,Et)*oe(yt.r0,yt.r0+4,G)*oe(yt.r1,yt.r1-4,G))}return Dt},_=[];function R(H,V={}){let G=H.map(([it,tt])=>{let[ut,Wt]=a(it,tt);return new j(ut,0,Wt)}),Dt=new Yn(G,!1,"centripetal"),yt=Dt.getLength(),Et=Math.max(2,Math.ceil(yt/.8)),U=[];for(let it=0;it<=Et;it++){let tt=Dt.getUtoTmapping(it/Et),ut=Dt.getPoint(tt);U.push([ut.x,ut.z,Math.min(G.length-2,Math.floor(tt*(G.length-1)))])}let b={id:_.length,kind:V.kind||"trail",pts:U.map(([it,tt,ut])=>({x:it,z:tt,wi:ut,y:0,hw:V.hw||1.35,kind:V.kinds&&V.kinds[ut]||V.kind||"trail"}))},nt=b.pts.map(it=>m(it.x,it.z));if(b.pts.forEach((it,tt)=>{let ut=0,Wt=0;for(let Ft=-22;Ft<=22;Ft++)ut+=nt[Me(tt+Ft,0,nt.length-1)],Wt++;it.y=ut/Wt}),V.y0!=null||V.y1!=null){let it=b.pts.length-1,tt=V.y0!=null?V.y0-b.pts[0].y:0,ut=V.y1!=null?V.y1-b.pts[it].y:0;b.pts.forEach((Wt,Ft)=>{Wt.y+=Qt(tt,ut,Ft/(it||1))})}for(let it of b.pts)it.kind==="ledge"?it.hw=.72:it.kind==="bridge"?it.hw=.62:it.kind==="stones"&&(it.hw=.6);return _.push(b),b}let p=R([[166,12],[160,40],[153,68],[146,94],[142.5,114.6],[140,122.4],[134,146],[127,172],[121,194],[117,206]],{kinds:{4:"bridge"}}),y=[110,98,86,74],P=[212,224,236,248,260,272,284],F=(H,V)=>a(y[H],P[V]),I=(H,V)=>{let[G,Dt]=F(H,V),yt=0;for(let Et=0;Et<9;Et++)yt+=m(G+Math.cos(Et)*4,Dt+Math.sin(Et)*4);return yt/9},B=[],D=new Set,A=hn(77),L=(H,V)=>H*10+V;(function H(V,G){D.add(L(V,G));let Dt=[[V+1,G],[V-1,G],[V,G+1],[V,G-1]].filter(([yt,Et])=>yt>=0&&yt<4&&Et>=0&&Et<7&&!D.has(L(yt,Et)));for(let yt=Dt.length-1;yt>0;yt--){let Et=Math.floor(A()*(yt+1));[Dt[yt],Dt[Et]]=[Dt[Et],Dt[yt]]}for(let[yt,Et]of Dt)D.has(L(yt,Et))||(B.push([[V,G],[yt,Et]]),H(yt,Et))})(0,0),B.push([[1,2],[1,3]],[[2,4],[3,4]]);let $=new Map;for(let H of B){let V=L(...H[0])*100+L(...H[1]),G=L(...H[1])*100+L(...H[0]);!$.has(V)&&!$.has(G)&&$.set(V,H)}let O=[],ot=new Map;for(let[[H,V],[G,Dt]]of $.values()){let[yt,Et]=F(H,V),[U,b]=F(G,Dt),nt=(yt+U)/2+(A()-.5)*3,it=(Et+b)/2+(A()-.5)*3,tt=(Wt,Ft)=>[l(Wt,Ft),(c(Wt,Ft)/Vn+360)%360],ut=R([tt(yt,Et),tt(nt,it),tt(U,b)],{kind:"maze",hw:1.25,y0:I(H,V),y1:I(G,Dt)});ut.cells=[[H,V],[G,Dt]],O.push(ut);for(let Wt of ut.cells)ot.set(L(...Wt),(ot.get(L(...Wt))||0)+1)}let dt=R([[117,206],[113,209],[y[0],P[0]]],{kind:"maze",hw:1.3,y0:p.pts[p.pts.length-1].y,y1:I(0,0)}),st=R([[y[3],P[6]],[70,287],[66,292]],{kind:"maze",hw:1.3,y0:I(3,6)}),wt=[[66,292],[62,306],[58,334],[54,308],[50,336],[46,309],[43,330],[41,344],[40,0],[39.3,16],[38.6,30],[37.5,42],[36.6,53],[35.8,63],[34.4,75],[32.4,86],[31.2,92],[29.6,110.5],[27.4,122],[24,138],[20,154],[s+.4,168]],ft=R(wt,{y0:st.pts[st.pts.length-1].y,kinds:{7:"ledge",8:"ledge",9:"ledge",12:"stones",16:"bridge"}});{let H=ft.pts,V=0;for(let G=H.length-1;G>=0&&(G<H.length-1&&(V+=Math.hypot(H[G+1].x-H[G].x,H[G+1].z-H[G].z)),H[G].y=Math.max(H[G].y,r-V*.42),!(V>60));G--);H[H.length-1].y=r;for(let G=Math.max(1,H.length-80);G<H.length;G++)(H[G].y-H[G-1].y)/(Math.hypot(H[G].x-H[G-1].x,H[G].z-H[G-1].z)||1)>.24&&H[G].kind==="trail"&&(H[G].kind="stairs",H[G].hw=1.25)}let Bt=[];for(let H of[p,ft]){let V=0;for(;V<H.pts.length;){if(H.pts[V].kind!=="bridge"){V++;continue}let G=V;for(;G+1<H.pts.length&&H.pts[G+1].kind==="bridge";)G++;let Dt=H.pts[Math.max(0,V-1)],yt=H.pts[Math.min(H.pts.length-1,G+1)],Et=G-V+1,U=Et>10?[Math.floor(Et*.3),Math.floor(Et*.7)]:[Math.floor(Et/2)];for(let b=V;b<=G;b++){let nt=(b-V+1)/(Et+1),it=H.pts[b];it.y=Qt(Dt.y,yt.y,nt)-Math.sin(nt*Math.PI)*.7,it.gap=U.includes(b-V)}Bt.push({seg:H,i:V,j:G,a:Dt,b:yt}),V=G+1}}let gt=[];for(let H=0;H<ft.pts.length;H++){let V=ft.pts[H];if(V.kind==="stones"&&(!gt.length||Math.hypot(V.x-gt[gt.length-1].x,V.z-gt[gt.length-1].z)>2.25)){let G=ft.pts[Math.min(H+1,ft.pts.length-1)],Dt=(t()-.5)*.5,yt=-(G.z-V.z),Et=G.x-V.x,U=Math.hypot(yt,Et)||1;gt.push({x:V.x+yt/U*Dt,z:V.z+Et/U*Dt,y:V.y+.05,r:.72})}}let Mt=[];for(let H of _)H.pts.forEach((V,G)=>{V.seg=H,V.k=G,Mt.push(V)});let vt=lc(4);for(let H of Mt)vt.add(H);function It(H,V,G,Dt=1){let yt=null,Et=1/0;if(vt.each(H,V,Dt,Ut=>{let Zt=(Ut.x-H)**2+(Ut.z-V)**2+(G!=null?Math.max(0,Math.abs(Ut.y-G)-1.2)**2*9:0);Zt<Et&&(Et=Zt,yt=Ut)}),!yt)return null;let U=yt.seg.pts,b=U[Math.min(yt.k+1,U.length-1)],nt=U[Math.max(yt.k-1,0)],it=Math.hypot(H-yt.x,V-yt.z),tt=yt.y,ut=b.x-nt.x,Wt=b.z-nt.z,Ft=Math.hypot(ut,Wt)||1;ut/=Ft,Wt/=Ft;for(let[Ut,Zt]of[[nt,yt],[yt,b]]){let ee=Zt.x-Ut.x,Q=Zt.z-Ut.z,bt=ee*ee+Q*Q||1,Gt=Me(((H-Ut.x)*ee+(V-Ut.z)*Q)/bt,0,1),se=Math.hypot(H-(Ut.x+ee*Gt),V-(Ut.z+Q*Gt));se<it&&(it=se,tt=Qt(Ut.y,Zt.y,Gt))}return{p:yt,d:it,y:tt,tx:ut,tz:Wt,side:(H-yt.x)*-Wt+(V-yt.z)*ut}}function qt(H,V){let G=l(H,V),Dt=g(H,V);if(G<s+1.5)return Qt(Dt,r,oe(s+1.5,s+.3,G));if(G>200)return Dt;let yt=Dt,Et=It(H,V,null,2);if(Et&&Et.d<Et.p.hw+3.2){let U=Et.p.kind;if(U!=="bridge"){if(U==="stones")yt=Math.min(yt,Et.y-.55);else if(yt=Qt(yt,Et.y-.04,oe(Et.p.hw+3.2,Et.p.hw+.5,Et.d)),U==="ledge"){let b=Et.d-Et.p.hw;b>0&&(G>l(Et.p.x,Et.p.z)?yt=Math.min(yt,Et.y-oe(0,2.2,b)*11):yt=Math.max(yt,Et.y+oe(.3,2.4,b)*4.5))}}}return yt}let $t=[],pe=(H,V)=>H.pts.findIndex(G=>G.kind===V),zt=(H,V,G)=>{let Dt=H.pts[Me(V,0,H.pts.length-1)],yt=H.pts[Me(V+6,0,H.pts.length-1)],Et={id:"cp"+$t.length,x:Dt.x,z:Dt.z,y:Dt.y,name:G,face:Math.atan2(yt.z-Dt.z,yt.x-Dt.x),flag:!0};return $t.push(Et),Et};zt(p,3,"\u0633\u0641\u062D \u0627\u0644\u062C\u0628\u0644"),zt(p,pe(p,"bridge")-7,"\u0642\u0628\u0644 \u0627\u0644\u062C\u0633\u0631"),zt(p,p.pts.length-2,"\u0628\u0627\u0628 \u063A\u0627\u0628\u0629 \u0627\u0644\u0645\u062A\u0627\u0647\u0629"),zt(ft,4,"\u0637\u0644\u0639\u0629 \u0627\u0644\u0632\u0643\u0632\u0627\u0643"),zt(ft,pe(ft,"ledge")-6,"\u0642\u0628\u0644 \u062D\u0627\u0641\u0629 \u0627\u0644\u062C\u0631\u0641"),zt(ft,pe(ft,"stones")-5,"\u0642\u0628\u0644 \u0627\u0644\u0633\u0627\u0642\u064A\u0629"),zt(ft,pe(ft,"bridge")-6,"\u0642\u0628\u0644 \u0627\u0644\u062C\u0633\u0631 \u0627\u0644\u062B\u0627\u0646\u064A");let ne=ft.pts[ft.pts.length-1],he=c(ne.x,ne.z);$t.push({id:"summit",x:e-3,z:n+3,y:r,name:"\u0633\u0627\u062D\u0629 \u0627\u0644\u0642\u0645\u0629",face:0,flag:!1,plaza:!0});let _e=[],Jt=[];{let H=new Map;for(let b of O){let[nt,it]=b.cells.map(tt=>L(...tt));for(let[tt,ut]of[[nt,it],[it,nt]])H.has(tt)||H.set(tt,[]),H.get(tt).push(ut)}let V=L(0,0),G=L(3,6),Dt=new Map([[V,-1]]),yt=[V],Et=new Map;for(;yt.length;){let b=yt.shift();if(b===G)break;for(let nt of H.get(b)||[])Dt.has(nt)||(Dt.set(nt,b),yt.push(nt))}for(let b=G;Dt.get(b)!==-1&&Dt.has(b);b=Dt.get(b))Et.set(Dt.get(b),b);let U=0;for(let[b,nt]of Et){if((ot.get(b)||0)<3||U++%3===2)continue;let[it,tt]=F(Math.floor(b/10),b%10),[ut,Wt]=F(Math.floor(nt/10),nt%10),Ft=Math.atan2(Wt-tt,ut-it),Ut=it+Math.cos(Ft+.9)*1.9,Zt=tt+Math.sin(Ft+.9)*1.9;_e.push({x:Ut,z:Zt,a:Ft,text:"\u2B05 \u0644\u0644\u0642\u0645\u0629"})}for(let[b,nt]of ot){if(nt!==1||b===V||b===G)continue;let[it,tt]=F(Math.floor(b/10),b%10);Jt.push({x:it,z:tt,a:t()*Se})}}let ye=[];for(let H of[p,ft])for(let V=8;V<H.pts.length-4;V+=17){let G=H.pts[V];G.kind==="trail"&&ye.push({x:G.x,y:G.y+.9,z:G.z})}for(let H of Jt){let V=It(H.x,H.z,null,2);if(V)for(let G=0;G<4;G++){let Dt=V.p.seg.pts[Me(V.p.k+(G-1.5)*2|0,0,V.p.seg.pts.length-1)];ye.push({x:Dt.x,y:Dt.y+.9,z:Dt.z})}}let Fe=(H,V)=>{let G=H.pts[Me(V,0,H.pts.length-1)];return{x:G.x,z:G.z,y:G.y}},le=Math.floor(p.pts.length*.22),W=pe(ft,"ledge"),St=[{kind:"wolf",home:Fe(p,le)},{kind:"wolf",home:Fe(p,le+4),ox:1.5},{kind:"wolf",home:Fe(ft,W-26)},{kind:"wolf",home:Fe(ft,W-22),ox:1.2},{kind:"boar",home:Fe(O[Math.floor(O.length*.4)],10)},{kind:"boar",home:Fe(O[Math.floor(O.length*.75)],10)}],rt=(H,V)=>[e+Math.cos(H*Vn)*V,n+Math.sin(H*Vn)*V],mt=236,[K,pt]=rt(mt,9.2),lt=rt(221,6.2),ht=rt(118,9),xt=rt(300,10.2),u={x:e,z:n,RP:s,HS:r,DECK_A:o,ENTRY_A:he,kioskA:mt,kiosk:[K,pt],meet:lt,bell:ht,flag:xt,benches:[185,150,30],beds:[80,175,280,350],lamps:[45,145,255,330],pines:[62,100,200,320],guests:[{a:212,r:6.9,look:lt,kind:"tea"},{a:229,r:6.9,look:lt,kind:"tea"},{a:219,r:5.2,look:[K,pt],kind:"stand"}],scope:[e+s+3.9,n],inter:[{id:"tea",x:K-Math.cos(mt*Vn)*2.1,z:pt-Math.sin(mt*Vn)*2.1,r:2.3,label:"\u2615 \u0627\u0634\u0631\u0628 \u0634\u0627\u064A"},{id:"chat",x:lt[0],z:lt[1],r:2.2,label:"\u{1F5E3}\uFE0F \u0633\u0648\u0644\u0641 \u0648\u064A\u0627\u0647\u0645"},{id:"bell",x:e+(ht[0]-e)*.84,z:n+(ht[1]-n)*.84,r:2.2,label:"\u{1F514} \u062F\u0643 \u0627\u0644\u062C\u0631\u0633"},{id:"scope",x:e+s+3.1,z:n,r:1.8,label:"\u{1F52D} \u0628\u0627\u0648\u0639 \u0628\u0627\u0644\u062A\u0644\u0633\u0643\u0648\u0628"},{id:"fountain",x:e,z:n,r:3.4,label:"\u{1FA99} \u0627\u0631\u0645\u0650 \u0639\u0645\u0644\u0629 \u0628\u0627\u0644\u0646\u0627\u0641\u0648\u0631\u0629"}]},M=[];M.push({x:e,z:n,r:2.6,tall:1});for(let H of[-1.1,0,1.1])M.push({x:K+Math.cos(mt*Vn+Math.PI/2)*H,z:pt+Math.sin(mt*Vn+Math.PI/2)*H,r:1.05});{let H=-Math.sin(118*Vn),V=Math.cos(118*Vn);M.push({x:ht[0]+H*.9,z:ht[1]+V*.9,r:.25},{x:ht[0]-H*.9,z:ht[1]-V*.9,r:.25})}M.push({x:xt[0],z:xt[1],r:.3});for(let H of u.beds){let[V,G]=rt(H,11);M.push({x:V,z:G,r:.75})}for(let H of u.benches){let[V,G]=rt(H,6.6),Dt=-Math.sin(H*Vn),yt=Math.cos(H*Vn);M.push({x:V,z:G,r:.75},{x:V+Dt*.8,z:G+yt*.8,r:.5},{x:V-Dt*.8,z:G-yt*.8,r:.5})}for(let H of u.guests){let[V,G]=rt(H.a,H.r);M.push({x:V,z:G,r:.42})}for(let H of u.pines){let[V,G]=rt(H,11.6);M.push({x:V,z:G,r:.5,tall:1})}for(let H=0;H<64;H++){let V=H/64*Se;Math.abs(wn(V,he))<.2||Math.abs(wn(V,o))<.22||M.push({x:e+Math.cos(V)*(s-.1),z:n+Math.sin(V)*(s-.1),r:.55,wall:1})}let Y=[];for(let H of Mt)if(H.kind==="ledge"&&H.k%2===0){let V=H.seg.pts[Math.min(H.k+1,H.seg.pts.length-1)],G=H.seg.pts[Math.max(H.k-1,0)],Dt=V.x-G.x,yt=V.z-G.z,Et=Math.hypot(Dt,yt)||1,U=-yt/Et,b=Dt/Et;l(H.x+U,H.z+b)>l(H.x,H.z)&&(U=-U,b=-b);let nt=.9+Ke(H.k,1)*.8;Y.push({p:H,nx:U,nz:b,sz:nt}),M.push({x:H.x+U*(H.hw+nt),z:H.z+b*(H.hw+nt),r:nt*.8,tall:1})}for(let H of Jt)M.push({x:H.x,z:H.z,r:.9});let C=f[2],_t=(H,V)=>{let G=l(H,V),Dt=(c(H,V)/Vn+360)%360;return G>66&&G<122&&Dt>203&&Dt<293};return{id:i.id||"M1",x:e,z:n,RP:s,HS:r,DECK_A:o,ENTRY_A:he,rad:l,ang:c,P2:a,prof:d,gullies:f,stream:C,Hbase:m,Hnat:g,H:qt,segs:_,ALL:Mt,A:p,C2:ft,MAZ:O,entrySeg:dt,exitSeg:st,cellP:F,key:L,nearest:It,bridges:Bt,stones:gt,rest:$t,signs:_e,logs:Jt,coins:ye,beasts:St,plaza:u,coll:M,ledgeRocks:Y,inMaze:_t,foot:200}}function H1(i){let t=i.x,e=i.z||0,n=i.floor??-35,s=120,r=11,o=_=>2.6*Math.sin(_*.055+.6)+1.5*Math.sin(_*.13+2.1)-.6,a=[[17,1],[45,-1],[76,1],[103,-1]].map(([_,R])=>({x:_,z:Me(o(_)+R*6.4,-8.2,8.2),side:R,rot:R>0?Math.PI:0,base:0}));function l(_,R){let p=Math.abs(R),y=(un(_*.09+3.1,R*.09)-.5)*.55,P=R-o(Me(_,-10,s+10));y-=Math.exp(-(P*P)/1.3)*.75*oe(-12,-2,_);let F=Me((p-(r-1))/21,0,1);if(y+=21*F*F+oe(30,50,p)*7,y+=(un(_*.07+(R>0?9:2),p*.09)-.5)*5*oe(r+1,r+9,p),_<2&&(y=Math.max(y,21*Math.pow(Me((2-_)/62,0,1),.9))),_>s-2){let I=(_-s+2)/30;y+=20*Math.min(1,I)**2+oe(1,2.5,I)*6}return y+=oe(46,70,p)*45+oe(-62,-90,_)*45+oe(s+35,s+70,_)*45,y}for(let _ of a)_.base=l(_.x,_.z)+.05;let c=(_,R)=>[_-t,R-e];function d(_,R){let p=_-t,y=R-e;if(p<-95||p>s+75||Math.abs(y)>72)return 1/0;let P=l(p,y);for(let F of a){let I=p-F.x,B=y-F.z;I*I+B*B<49&&(P=Qt(P,F.base,oe(7,4.5,Math.hypot(I,B))))}return n+P}let f=_=>n+l(_,o(_))+.42,m=(_,R)=>_>1.5&&_<s-1.5&&Math.abs(R)<r-1.2,g=[{id:"valley",x:t+4,z:e+o(4)+3.2,y:n+l(4,o(4)+3.2),name:"\u0645\u062F\u062E\u0644 \u0627\u0644\u0648\u0627\u062F\u064A",face:0,flag:!1}];for(let _ of g)_.y=d(_.x,_.z);return{id:i.id||"V1",x:t,z:e,VF:n,VL:s,FLOOR:r,riverZ:o,CAMPS:a,H0:l,Hv:d,toL:c,waterLevel:f,onFloor:m,rest:g}}var Rf=Gh;function Pf(i=Gh){let t=hn(i.seed||1),e=i.half||500,n=V1(i.features.find(W=>W.type==="mountain"),t),s=i.features.find(W=>W.type==="valley"),r=Cf(i,n,s),o=r.SEA,a=H1({...s,floor:o+r.A(r.valley.x,r.valley.z)-21}),l=(W,St)=>r.H(W,St);function c(W,St){let rt=n.rad(W,St),mt=rt<245?rt>200?Qt(n.H(W,St),l(W,St),oe(200,245,rt)):n.H(W,St):l(W,St),K=a.Hv(W,St);return K<mt&&(mt=K),mt}let d=(W,St)=>Math.hypot(c(W+.4,St)-c(W-.4,St),c(W,St+.4)-c(W,St-.4))/.8,f=lc(4),m=[],g=W=>(m.push(W),f.add(W),W);for(let W of n.coll)g(W);let _={pineA:[],pineB:[],oak:[],hedge:[],bush:[],rock:[],palm:[[],[],[]],fruit:[[],[],[]],boulder:[],vbush:[],vrock:[],rim:[]},R=(W,St,rt)=>{if(n.rad(W,St)<n.RP+3)return!1;let mt=n.nearest(W,St,null,2);if(mt&&mt.d<mt.p.hw+rt)return!1;for(let K of n.rest)if(Math.hypot(W-K.x,St-K.z)<4.6)return!1;return!0};for(let W=-125;W<=125;W+=1.25)for(let St=-125;St<=125;St+=1.25){let rt=n.x+W+(t()-.5)*.4,mt=n.z+St+(t()-.5)*.4;if(!n.inMaze(rt,mt)||!R(rt,mt,.75))continue;let K=c(rt,mt);if(_.hedge.push({x:rt,y:K-.1,z:mt,ry:t()*Se,s:.95+t()*.45}),g({x:rt,z:mt,r:.62,hedge:1}),t()<.16&&R(rt,mt,2.2)){let pt={x:rt,y:K-.15,z:mt,ry:t()*Se,s:.85+t()*.4};(t()<.5?_.pineA:_.oak).push(pt)}}{let W=hn(20261123),St=(ht,xt)=>[a.x+ht,a.z+xt],rt=(ht,xt,u)=>a.CAMPS.some(M=>Math.hypot(ht-M.x,xt-M.z)<u),mt=(ht,xt,u)=>Math.abs(xt-a.riverZ(ht))<1.7+u||rt(ht,xt,6.8+u),K=(ht=0,xt=a.FLOOR-.6,u=-1,M=a.VL+1)=>({x:u+W()*(M-u),z:(W()<.5?-1:1)*(ht+W()*(xt-ht))}),pt=(ht,xt)=>d(a.x+ht,a.z+xt),lt=[];for(let ht of[-1,1])for(let xt=-2;xt<a.VL+2;xt+=5+W()*5){let u=a.riverZ(xt)+ht*(2.3+W()*1.8);!rt(xt,u,7.5)&&Math.abs(u)<a.FLOOR&&lt.push({x:xt,z:u})}for(let ht=0;ht<16;ht++){let xt=K(2,a.FLOOR-1);mt(xt.x,xt.z,.6)||lt.push(xt)}lt.forEach((ht,xt)=>{let[u,M]=St(ht.x,ht.z);g({x:u,z:M,r:.38,tall:1,tree:1}),_.palm[xt%3].push({x:u,y:c(u,M)-.05,z:M,ry:W()*Se,s:.85+W()*.4})});for(let ht=0;ht<3;ht++)for(let xt=0,u=0;u<9&&xt<400;xt++){let M=K(1.5,a.FLOOR-.5),[Y,C]=St(M.x,M.z);mt(M.x,M.z,1.4)||f.each(Y,C,1,_t=>Math.hypot(_t.x-Y,_t.z-C)<3)||(g({x:Y,z:C,r:.35,tall:1,tree:1}),_.fruit[ht].push({x:Y,y:c(Y,C)-.05,z:C,ry:W()*Se,s:.75+W()*.45}),u++)}for(let ht=0;_.vbush.length<130&&ht<3e3;ht++){let xt=K(0,a.FLOOR+4);if(mt(xt.x,xt.z,.5)||pt(xt.x,xt.z)>.7)continue;let[u,M]=St(xt.x,xt.z);_.vbush.push({x:u,y:c(u,M),z:M,ry:W()*Se,s:.5+W()*.8})}for(let ht=0;_.vrock.length<90&&ht<2e3;ht++){let xt=K(0,a.FLOOR);if(rt(xt.x,xt.z,6)||Math.abs(xt.z-a.riverZ(xt.x))<1.1)continue;let u=.35+W()*.8,[M,Y]=St(xt.x,xt.z);u>.8&&g({x:M,z:Y,r:.3*u}),_.vrock.push({x:M,y:c(M,Y)+.04,z:Y,rx:W()*3,ry:W()*3,rz:W()*3,s3:[u,u*(.6+W()*.4),u*(.8+W()*.4)]})}for(let ht=0;ht<230;ht++){let xt=-14+W()*(a.VL+30),u=a.FLOOR+1+W()*26,M=(W()<.5?-1:1)*u,Y=.8+W()*3.2,[C,_t]=St(xt,M);_.boulder.push({x:C,y:c(C,_t)-Y*.42,z:_t,rx:W()*3,ry:W()*3,rz:W()*3,s3:[Y,Y*(.5+W()*.4),Y*(.8+W()*.5)]})}for(let ht=0;ht<26;ht++){let xt=K(a.FLOOR-3,a.FLOOR+1);if(rt(xt.x,xt.z,7))continue;let u=1.3+W()*1.6,[M,Y]=St(xt.x,xt.z);g({x:M,z:Y,r:.45*u}),_.boulder.push({x:M,y:c(M,Y)-.15,z:Y,rx:W()*3,ry:W()*3,rz:W()*3,s3:[u,u*.7,u]})}for(let ht=0;ht<140;ht++){let xt=-40+W()*(a.VL+80),u=26+W()*40,M=(W()<.5?-1:1)*u;if(yn(xt*.06,M*.06)<.4)continue;let[Y,C]=St(xt,M);_.rim.push({x:Y,y:c(Y,C)-.2,z:C,ry:W()*Se,s:1+W()*1.3})}}let p=new Map,y=(W,St)=>{let rt=ws(Math.floor(W.x/6),Math.floor(W.z/6));p.set(rt,(p.get(rt)||0)+St)};for(let W of m)W.tree&&y(W,1);let P=[],F=lc(16),I=W=>{W.box=!0,W.c=Math.cos(W.rot||0),W.s=Math.sin(W.rot||0);let St=Math.hypot(W.hw,W.hd);return m.push(W),f.addArea(W,W.x-St,W.z-St,W.x+St,W.z+St),W};for(let W of r.sites){W.y=r.H(W.x,W.z);let St=W.kind,rt=W.rot||0;if(["house","hut","reedhut","mudhif","teahouse","stall","board","logs","fwall"].includes(St))I({x:W.x,z:W.z,hw:W.w/2,hd:W.d/2,rot:rt,tall:1,h:W.h,site:W});else if(St==="lighthouse")g({x:W.x,z:W.z,r:3.1,tall:1});else if(St==="fountain")g({x:W.x,z:W.z,r:W.r});else if(St==="well"||St==="ftower")g({x:W.x,z:W.z,r:W.r,tall:St==="ftower"?1:0});else if(St==="lamp"||St==="signpost")g({x:W.x,z:W.z,r:.14});else if(St==="palm")g({x:W.x,z:W.z,r:.3,tall:1,tree:1});else if(St==="gate")for(let mt of[-1,1])g({x:W.x-Math.sin(rt)*mt*4.6,z:W.z+Math.cos(rt)*mt*4.6,r:.55,tall:1});else if(St==="pier"){let mt=W.lake?r.lakes[0]:null,K=mt?o+mt.lv+.55:o+.95,pt={x:W.x,z:W.z,c:Math.cos(rt),s:Math.sin(rt),hw:W.w/2,hd:W.d/2,y:K};W.y=K,P.push(pt);let lt=Math.max(W.w,W.d)/2+1;F.addArea(pt,W.x-lt,W.z-lt,W.x+lt,W.z+lt)}}function B(W,St){let rt=null;return F.each(W,St,0,mt=>{let K=W-mt.x,pt=St-mt.z;Math.abs(K*mt.c+pt*mt.s)<mt.hw+.05&&Math.abs(-K*mt.s+pt*mt.c)<mt.hd&&(rt=mt)}),rt}let D=32,A=new Map,L=(i.seed||1)*2654435761,$=(W,St)=>{let rt=W-a.x,mt=St-a.z;return rt>-66&&rt<a.VL+30&&Math.abs(mt)<46};function O(W,St){let rt=ws(W,St),mt=A.get(rt);if(mt)return mt;mt={ci:W,cj:St,x:(W+.5)*D,z:(St+.5)*D,items:[],colls:[],on:!1};let K=hn((W*73856093^St*19349663^L)>>>0),pt=W*D,lt=St*D;for(let ht=0;ht<4;ht++)for(let xt=0;xt<4;xt++){let u=pt+(ht+.5)*8+(K()-.5)*5,M=lt+(xt+.5)*8+(K()-.5)*5,Y=K(),C=K(),_t=K(),H=K()*Se;if(Math.abs(u)>e-20||Math.abs(M)>e-20||$(u,M))continue;let V=n.rad(u,M);if(V<250&&(V<n.RP+3||n.inMaze(u,M)||!R(u,M,1.4)||Bt(u,M))||r.reserved(u,M)||ot(u,M))continue;let G=c(u,M),Dt=G-o;if(Dt>-1&&Dt<.35&&Y>.6){let U=r.flora(u,M,Dt,0,0);U.reed>0&&K()<U.reed&&mt.items.push({t:"reed",x:u,y:G-.1,z:M,s:.8+_t*.6,ry:H});continue}if(Dt<.35)continue;let yt=Math.hypot(c(u+1.5,M)-G,c(u,M+1.5)-G)/1.5,Et=r.flora(u,M,Dt,r.coastS(u,M),yt);if(V<250&&G>60&&(Et.t*=.35),Y<Et.t){let U=Et.pine+Et.oak+Et.palm+Et.olive||1,b=C*U,nt;(b-=Et.pine)<0?nt="pine":(b-=Et.oak)<0?nt="oak":(b-=Et.palm)<0?nt="palm":nt="olive";let it=nt==="pine"?.85+_t*.4:nt==="oak"?.8+_t*.4:nt==="palm"?.85+_t*.35:.8+_t*.5;mt.items.push({t:nt,x:u,y:G-.12,z:M,s:it,ry:H}),mt.colls.push({x:u,z:M,r:(nt==="pine"?.34:nt==="oak"?.45:nt==="palm"?.28:.3)*it,tall:1,tree:1})}else if(Y<Et.t+Et.b)mt.items.push({t:"bush",x:u,y:G,z:M,s:.7+_t*.9,ry:H});else if(Y<Et.t+Et.b+Et.rock){let U=_t>.7,b=U?1.6+C*2.4:.5+C*.9;mt.items.push({t:U?"boulder":"rock",x:u,y:G-b*.25,z:M,s:b,ry:H,rx:C*3,rz:_t*3}),b>1.1&&mt.colls.push({x:u,z:M,r:b*.5})}}return A.set(rt,mt),mt}function ot(W,St){if(typeof Jt>"u")return!1;for(let rt of Jt)for(let mt of rt.segs){let K=mt.B.x-mt.A.x,pt=mt.B.z-mt.A.z,lt=K*K+pt*pt,ht=Me(((W-mt.A.x)*K+(St-mt.A.z)*pt)/lt,0,1);if(Math.hypot(W-mt.A.x-K*ht,St-mt.A.z-pt*ht)<7&&Qt(mt.A.y,mt.B.y,ht)-mt.sag*4*ht*(1-ht)-c(W,St)<28)return!0}return!1}let dt=null;function st(W,St,rt=170){if(dt&&Math.hypot(W-dt[0],St-dt[1])<12)return;dt=[W,St];let mt=Math.floor((W-rt)/D),K=Math.floor((W+rt)/D),pt=Math.floor((St-rt)/D),lt=Math.floor((St+rt)/D);for(let ht=mt;ht<=K;ht++)for(let xt=pt;xt<=lt;xt++){let u=O(ht,xt);if(!u.on){u.on=!0;for(let M of u.colls)m.push(M),f.add(M),M.tree&&y(M,1)}}for(let ht of A.values()){let xt=Math.hypot(ht.x-W,ht.z-St);if(ht.on&&xt>rt+80){ht.on=!1;for(let u of ht.colls)f.remove(u),u.tree&&y(u,-1)}!ht.on&&xt>1900&&A.delete(ws(ht.ci,ht.cj))}}let wt=(W,St)=>(p.get(ws(Math.floor(W/6),Math.floor(St/6)))||0)/3,ft=lc(4);for(let W of n.bridges)for(let St=W.i;St<=W.j;St++)ft.add(W.seg.pts[St]);function Bt(W,St){let rt=null,mt=1/0;if(ft.each(W,St,1,_t=>{let H=(_t.x-W)**2+(_t.z-St)**2;H<mt&&(mt=H,rt=_t)}),!rt||mt>2.5)return null;let K=rt.seg.pts,pt=K[Math.min(rt.k+1,K.length-1)],lt=K[Math.max(rt.k-1,0)],ht=pt.x-lt.x,xt=pt.z-lt.z,u=Math.hypot(ht,xt)||1;ht/=u,xt/=u;let M=(W-rt.x)*ht+(St-rt.z)*xt,Y=Math.abs((W-rt.x)*-xt+(St-rt.z)*ht);if(Y>rt.hw+.05)return{off:!0,p:rt,tx:ht,tz:xt,lat:Y};let C=K[Me(rt.k+(M>0?1:-1),0,K.length-1)];return C.kind!=="bridge"&&Math.abs(M)>.35?null:rt.gap&&Math.abs(M)<.32?{hole:!0,p:rt,tx:ht,tz:xt,lat:Y}:{y:Qt(rt.y,C.y,Me(Math.abs(M)/.8,0,1)),p:rt,tx:ht,tz:xt,lat:Y}}let gt={x0:n.x+n.RP-1,x1:n.x+n.RP+4.35,z0:n.z-1.65,z1:n.z+1.65,y:n.HS+.09};function Mt(W,St,rt,mt){let K=c(W,St),pt=null,lt=null,ht=rt==null?1/0:rt+.7;if(rt!=null&&n.rad(W,St)<200){let M=n.nearest(W,St,rt,1);M&&M.d<=M.p.hw+.25&&M.p.kind!=="bridge"&&M.p.kind!=="stones"&&M.y-.04<=ht&&Math.abs(M.y-.04-K)<7&&(K=M.y-.04,pt="path")}let xt=Bt(W,St);xt&&xt.y!=null&&xt.y<=ht&&xt.y>K-.01&&(K=xt.y,pt="bridge",lt=xt);for(let M of n.stones)Math.hypot(W-M.x,St-M.z)<M.r+(mt?.5:0)&&M.y<=ht&&M.y>K&&(K=M.y,pt="stone",lt=M);W>gt.x0&&W<gt.x1&&St>gt.z0&&St<gt.z1&&gt.y<=ht&&gt.y>=K-.2&&(K=gt.y,pt="deck");let u=B(W,St);return u&&u.y<=ht&&u.y>K&&(K=u.y,pt="pier"),{y:K,kind:pt,plat:lt,b:xt}}function vt(W,St,rt){let mt=n.rad(W,St);if(mt<n.RP+.5&&Math.abs(rt-n.HS)<.6)return"plaza";if(mt<200){let lt=n.nearest(W,St,rt,1);if(lt&&lt.d<lt.p.hw)return lt.p.kind==="stones"?"trail":lt.p.kind}let[K,pt]=a.toL(W,St);if(K>-2&&K<a.VL+2&&Math.abs(pt)<a.FLOOR+1)return"grass";if(mt>245){let lt=rt-o,ht=r.nearRoad(W,St);if(ht&&ht.d<ht.hw+.3)return"trail";if(Math.hypot(W-r.fajr.x,St-r.fajr.z)<50)return"plaza";if(lt<3.5&&r.coastS(W,St)<150)return"sand"}return d(W,St)>.85?"rock":wt(W,St)>.55?"forest":"grass"}function It(W,St,rt){let[mt,K]=a.toL(W,St);if(mt>-6&&mt<a.VL+6&&Math.abs(K-a.riverZ(mt))<.95){let ht=a.waterLevel(mt);if(rt<ht+.3)return{kind:"river",level:ht}}let pt=n.stream,lt=n.rad(W,St);if(lt>245)return r.water(W,St,rt);if(lt>pt.r0+1&&lt<pt.r1-1&&Math.abs(wn(pt.a,n.ang(W,St)))*lt<2.1){let xt=n.Hnat(W,St)+.5;if(rt<xt+.25)return{kind:"torrent",level:xt,dx:Math.cos(pt.a),dz:Math.sin(pt.a)}}return null}let qt=0;function $t(W,St,rt,mt){for(let K=0;K<2;K++){let pt=++qt;f.each(W,St,1,lt=>{if(lt._st===pt||(lt._st=pt,mt&&!mt(lt)))return;if(lt.box){let Y=W-lt.x,C=St-lt.z,_t=Y*lt.c+C*lt.s,H=-Y*lt.s+C*lt.c,V=_t-Me(_t,-lt.hw,lt.hw),G=H-Me(H,-lt.hd,lt.hd),Dt=V*V+G*G;if(Dt>=rt*rt)return;if(Dt>1e-8){let yt=Math.sqrt(Dt),Et=(rt-yt)/yt;_t+=V*Et,H+=G*Et}else{let yt=lt.hw-Math.abs(_t),Et=lt.hd-Math.abs(H);yt<Et?_t=(_t<0?-1:1)*(lt.hw+rt):H=(H<0?-1:1)*(lt.hd+rt)}W=lt.x+_t*lt.c-H*lt.s,St=lt.z+_t*lt.s+H*lt.c;return}let ht=W-lt.x,xt=St-lt.z,u=rt+lt.r,M=ht*ht+xt*xt;if(M<u*u&&M>1e-8){let Y=Math.sqrt(M),C=(u-Y)/Y;W+=ht*C,St+=xt*C}})}return[Me(W,-e+3,e-3),Me(St,-e+3,e-3)]}let pe=(W,St,rt)=>f.each(W,St,1,mt=>mt.tall&&rt(mt)),zt=[...r.rest.map(W=>({...W,y:c(W.x,W.z)})),...n.rest,...a.rest],ne=Math.PI/180,he=W=>{let St=r.zones.find(rt=>rt.id===W);return[St.x,St.z]},Jt=[{id:"fajr",name:"\u062D\u0628\u0644 \u0627\u0644\u0641\u062C\u0631",icon:"\u{1F305}",a:20,to:[r.fajr.x-330,r.fajr.z+110]},{id:"valley",name:"\u062D\u0628\u0644 \u0627\u0644\u0648\u0627\u062F\u064A",icon:"\u{1F98C}",a:128,to:[a.x-120,a.z-60]},{id:"huts",name:"\u062D\u0628\u0644 \u0627\u0644\u062D\u0637\u0651\u0627\u0628\u064A\u0646",icon:"\u{1FA93}",a:270,to:(([W,St])=>[W+70,St+40])(he("huts"))}].map((W,St)=>{let rt=W.a*ne,mt={x:n.x+Math.cos(rt)*14.6,y:n.HS+4.6,z:n.z+Math.sin(rt)*14.6},K=W.to[0],pt=W.to[1],lt={x:K,y:c(K,pt)+4.4,z:pt},ht=[mt,lt],xt=(V,G,Dt,yt)=>({x:Qt(V.x,G.x,Dt),y:Qt(V.y,G.y,Dt)-yt*4*Dt*(1-Dt),z:Qt(V.z,G.z,Dt)});for(let V=0;V<6;V++){let G=null;for(let yt=0;yt<ht.length-1;yt++){let Et=ht[yt],U=ht[yt+1],b=Math.hypot(U.x-Et.x,U.z-Et.z),nt=b*.01;for(let it=1;it<40;it++){let tt=it/40,ut=xt(Et,U,tt,nt),Wt=ut.y-3.4-c(ut.x,ut.z);(!G||Wt<G.c)&&(G={c:Wt,k:yt,t:tt,p:ut})}}if(G.c>0)break;let Dt={x:G.p.x,z:G.p.z,tower:!0};Dt.y=c(Dt.x,Dt.z)+12,ht.splice(G.k+1,0,Dt)}let u=[],M=0;for(let V=0;V<ht.length-1;V++){let G=ht[V],Dt=ht[V+1],yt=Math.hypot(Dt.x-G.x,Dt.y-G.y,Dt.z-G.z);u.push({A:G,B:Dt,s0:M,l:yt,sag:Math.hypot(Dt.x-G.x,Dt.z-G.z)*.01}),M+=yt}let Y=(lt.x-mt.x)/Math.hypot(lt.x-mt.x,lt.z-mt.z),C=(lt.z-mt.z)/Math.hypot(lt.x-mt.x,lt.z-mt.z),_t={i:St,...W,S:mt,E:lt,pts:ht,segs:u,L:M,ux:Y,uz:C,stand:{x:n.x+Math.cos(rt)*11.4,z:n.z+Math.sin(rt)*11.4},end:{x:K-Y*2.5,z:pt-C*2.5}};_t.at=V=>{V=Me(V,0,M);let G=u[u.length-1];for(let Et of u)if(V<=Et.s0+Et.l){G=Et;break}let Dt=Me((V-G.s0)/G.l,0,1),yt=xt(G.A,G.B,Dt,G.sag);return yt.t=V/M,yt};let H=1e9;for(let V=1;V<200;V++){let G=_t.at(V/200*M);H=Math.min(H,G.y-2.2-c(G.x,G.z))}return _t.clear=H,_t}),ye=[];function Fe(W,St,rt,mt,K){let pt=Math.cos(rt),lt=Math.sin(rt),ht=null,xt=0;for(let _t=K;_t>mt;_t-=1){let H=c(W+pt*_t,St+lt*_t),V=c(W+pt*(_t-1),St+lt*(_t-1)),G=V-H;G>xt&&(xt=G,ht=_t)}if(!ht||xt<.9)return null;let u=ht+1;for(;u<K&&c(W+pt*u,St+lt*u)-c(W+pt*(u+1),St+lt*(u+1))>.55;)u++;let M=ht-1;for(;M>mt&&c(W+pt*(M-1),St+lt*(M-1))-c(W+pt*M,St+lt*M)>.55;)M--;u+=1.6,M-=1.8;let Y={x:W+pt*u,z:St+lt*u},C={x:W+pt*M,z:St+lt*M};return Y.y=c(Y.x,Y.z),C.y=c(C.x,C.z),C.y-Y.y<2.4||d(C.x,C.z)>1||d(Y.x,Y.z)>1||n.rad(Y.x,Y.z)<250&&(!R(Y.x,Y.z,1)||!R(C.x,C.z,1))?null:{bot:Y,top:C,h:C.y-Y.y}}let le=(W,St,rt,mt,K,pt)=>{let lt=Fe(W,St,rt*ne,mt,K);lt&&ye.push({i:ye.length,name:pt,...lt})};for(let W of[35,140,215,320,250])le(n.x,n.z,W,43,54,"\u062D\u0632\u0627\u0645 \u0627\u0644\u0635\u062E\u0631");for(let W of[70,190,300,250])le(n.x,n.z,W,21,31,"\u0627\u0644\u062D\u0632\u0627\u0645 \u0627\u0644\u0639\u0627\u0644\u064A");for(let W of[[.95,760],[-2.2,900],[2.4,640],[-.45,1200],[1.9,1300],[-1.45,560]])le(n.x,n.z,W[0]/ne,W[1]-30,W[1]+30,"\u062C\u0631\u0641 \u0627\u0644\u062C\u0628\u0644");{let W=r.plateau;for(let St of[-60,30,150,210])le(W.x,W.z,St,W.r-140,W.r+150,"\u062C\u0631\u0641 \u0627\u0644\u0647\u0636\u0628\u0629")}return{map:i,HALF:e,M:n,V:a,H:c,slope:d,plains:l,surfaceAt:Mt,groundKind:vt,water:It,collide:$t,colliders:m,addColl:g,removeColl:W=>{f.remove(W);let St=m.indexOf(W);St>=0&&m.splice(St,1)},tallNear:pe,cgrid:f,veg:_,forestAt:wt,restPoints:zt,bridgeAt:Bt,deck:gt,I:r,SEA:o,VC:D,vegCell:O,ensureVeg:st,platAt:B,zoneAt:r.zoneAt,zips:Jt,anchors:ye}}var G1=9.81,W1=1,X1=1.15,q1=1.45,Y1=1.6,fi={walk:1.7,walkMin:.6,jog:3.6,run:4.7,sprint:6.3,swim:1,swimFast:1.5,jumpV:3.7,jumpH:3.2},Z1=i=>Qt(.62,1.85,Me((i-1)/5.3,0,1));function If(i,t={}){let e=i.M,n=i.V,s=[],r=1,o={t:0,hero:null,rest:null,reached:new Set,coins:[],coinsGot:0,climb:{done:!1,time:0},summit:null,scope:!1,wind:0,vq:{camp:null,merW:{x:0,z:0},zoneW:{x:0,z:0},penW:{x:0,z:0},met:!1,called:!1,caught:!1,delivered:!1},carry:null,focus:null,seed:1},a=[],l=(...u)=>a.push(u.length===1?u[0]:u);function c(u,M,Y,C={}){let _t={id:r++,kind:u,x:M,z:Y,y:i.H(M,Y),vx:0,vy:0,vz:0,face:0,air:!1,peak:0,r:.4,speed:0,run:!1,hopPh:0,landT:0,stun:0,rot:0,surf:null,...C};return s.push(_t),_t}let f=[...e.beasts,...i.I.beasts.map(u=>({kind:u.kind,home:{x:u.x,z:u.z,y:i.H(u.x,u.z)}}))].map(u=>c(u.kind,u.home.x+(u.ox||0),u.home.z,{home:u.home,r:u.kind==="boar"?.52:.44,state:"idle",t:Math.random()*2,cool:0,tx:u.home.x,tz:u.home.z,charge:null,ph:0,face:Math.random()*Se})),m=c("gazelle",n.x+60,n.z,{r:.42,state:"graze",t:0,gt:2.5,sus:0,stamina:4,ph:0,triedLeap:!1,tx:0,tz:0,fx:1,fz:0,stuck:0,hy:0}),g=c("merchant",n.x+20,n.z,{r:.42});function _(u,M,Y,C,_t,H={}){let V=u.air?2.5:u.kind==="hero"?9:10,G=u.air?Math.max(C,u.airSpd||0):C,Dt=H.pushX||0,yt=H.pushZ||0;u.vx=Ye(u.vx,M*G+Dt,V,_t),u.vz=Ye(u.vz,Y*G+yt,V,_t);let Et=u.x,U=u.z,b=u.x+u.vx*_t,nt=u.z+u.vz*_t;if([b,nt]=i.collide(b,nt,u.r,H.collFilter),u.air){u.vy-=G1*_t;let it=u.y+u.vy*_t,tt=i.surfaceAt(b,nt,Math.max(u.y,it)+.05,!0);if(tt.y>u.y+.45){let ut=u.kind==="hero"?i.surfaceAt(b,nt,u.y+1.15,!0):null;if(ut&&ut.y>u.y&&ut.y<=u.y+1.15&&!u.mantled){u.mantled=!0,u.x=b,u.z=nt,u.y=ut.y,u.air=!1,u.vy=0,u.vx*=.4,u.vz*=.4,u.landT=.3,u.surf=ut.kind,u.plat=ut.plat,u.peak=0,u.speed=Math.hypot(u.x-Et,u.z-U)/_t,u.onLand&&u.onLand(0,ut);return}b=u.x,nt=u.z,u.vx*=-.15,u.vz*=-.15,tt=i.surfaceAt(b,nt,u.y+.05,!0)}if(it<=tt.y&&u.vy<=0){let ut=(u.peak||u.y)-tt.y;if(u.x=b,u.z=nt,u.y=tt.y,u.air=!1,u.vy=0,u.landT=.25,u.surf=tt.kind,u.plat=tt.plat,u.mantled=!1,tt.kind==="stone"&&tt.plat){let Wt=Math.hypot(u.x-tt.plat.x,u.z-tt.plat.z),Ft=.35;Wt>Ft&&(u.x=tt.plat.x+(u.x-tt.plat.x)/Wt*Ft,u.z=tt.plat.z+(u.z-tt.plat.z)/Wt*Ft),u.vx*=.2,u.vz*=.2}u.onLand&&u.onLand(ut,tt)}else u.x=b,u.z=nt,u.y=it,u.peak=Math.max(u.peak||it,it)}else{if(u.surf==="bridge"){let Zt=i.bridgeAt(b,nt);if(Zt&&Zt.off){let ee=b-u.x,Q=nt-u.z,bt=ee*Zt.tx+Q*Zt.tz;b=u.x+Zt.tx*bt,nt=u.z+Zt.tz*bt}}else if(u.surf==="deck"){let Zt=i.deck;nt=Me(nt,Zt.z0+.35,Zt.z1-.35),b=Math.min(b,Zt.x1-.35)}let it=i.surfaceAt(b,nt,u.y+.4),tt=Math.hypot(b-u.x,nt-u.z),ut=it.y-u.y,Wt=it.kind==="path"?.75:.35,Ft=u.boots?q1:W1;if(tt>1e-5&&ut>Wt&&ut>tt*Ft){let Zt=(Q,bt)=>{let Gt=i.surfaceAt(Q,bt,u.y+.4),se=Math.hypot(Q-u.x,bt-u.z),ce=Gt.y-u.y;return ce<=(Gt.kind==="path"?.75:.35)||ce<=se*Ft?[Q,bt,Gt]:null},ee=Zt(b,u.z)||Zt(u.x,nt);ee?(b=ee[0],nt=ee[1],it=ee[2]):(b=u.x,nt=u.z,it=i.surfaceAt(b,nt,u.y),u.vx*=.3,u.vz*=.3)}let Ut=Math.hypot(b-u.x,nt-u.z);if(it.y<u.y-Math.max(.45,Ut*1.45)?H.cautious?(b=u.x,nt=u.z,u.vx=u.vz=0,it=i.surfaceAt(b,nt,u.y),u.y=it.y):(u.air=!0,u.vy=Math.min(0,u.vy),u.peak=u.y,u.x=b,u.z=nt):(u.x=b,u.z=nt,u.y=it.y,u.surf=it.kind,u.plat=it.plat),!u.air&&!u.surf&&!H.noSlide){let Zt=i.H(u.x+.4,u.z)-i.H(u.x-.4,u.z),ee=i.H(u.x,u.z+.4)-i.H(u.x,u.z-.4),Q=Math.hypot(Zt,ee)/.8,bt=u.boots?Y1:X1;if(Q>bt){let Gt=(Q-bt)*9*_t;u.vx-=Zt/.8*Gt,u.vz-=ee/.8*Gt}}}u.speed=Math.hypot(u.x-Et,u.z-U)/_t}function R(u,M){let Y=c("hero",M.x,M.z,{r:.32,skin:u,hp:100,maxHp:100,swim:!1,sneak:!1,lastHurt:-99,mode:"walk",chute:0,airSpd:0,water:null,inTorrent:0,faintT:0,face:M.face||0});return Y.y=M.y!=null?M.y:i.H(M.x,M.z),Y.onLand=(C,_t)=>{l(_t.kind==="stone"?"landStone":"land"),C>4.2&&p(Y,Math.round((C-4.2)*14),"fall")},Y}function p(u,M,Y){u.kind!=="hero"||u.mode!=="walk"||M<=0||(u.hp=Math.max(0,u.hp-M),u.lastHurt=o.t,l(["hurt",M,Y,u.hp]),u.hp<=0&&(u.mode="faint",u.faintT=0,u.vx=u.vz=0,l(["faint",Y])))}function y(u,M,Y,C,_t,H){u.swim=!0,u.air=!1,u.vy=0;let V=Math.hypot(M.mx||0,M.mz||0),G=V>1e-4?M.mx/V:0,Dt=V>1e-4?M.mz/V:0,yt=_t<.08?0:H?fi.swimFast:fi.swim;u.vx=Ye(u.vx,G*yt,4,Y),u.vz=Ye(u.vz,Dt*yt,4,Y);let Et=u.x+u.vx*Y,U=u.z+u.vz*Y;i.I.coastS(Et,U)<-700?(Et=u.x,U=u.z,u.vx*=-.3,u.vz*=-.3,u.farWarn||(u.farWarn=!0,l("farSea"))):u.farWarn=!1,[Et,U]=i.collide(Et,U,u.r),u.x=Et,u.z=U,u.y=Math.max(C.level-.7+Math.sin(o.t*2.2)*.05,i.H(Et,U)),u.speed=Math.hypot(u.vx,u.vz),u.surf="water",u.speed>.3&&(u.face=Sn(u.face,Math.atan2(u.vz,u.vx),6,Y));let b=u.hopPh||0;u.hopPh=b+(u.speed<.15?.9:1.6+u.speed*1.4)*Y,u.hopPh&&Math.floor(b/Math.PI)!==Math.floor(u.hopPh/Math.PI)&&l("splash"),o.t-u.lastHurt>6&&u.hp<u.maxHp&&(u.hp=Math.min(u.maxHp,u.hp+Y*3))}function P(u,M){let Y=o.rest||i.restPoints[0];if(Object.assign(u,{x:Y.x,z:Y.z,y:i.H(Y.x,Y.z),vx:0,vy:0,vz:0,air:!1,stun:0,rot:0,mode:"walk",face:Y.face||0,inTorrent:0,surf:null,swim:!1,hopPh:0}),Y.plaza&&(u.y=e.HS),M==="faint"){u.hp=u.maxHp;let C=Math.ceil(o.coinsGot*.2);o.coinsGot-=C,l(["respawn",Y.name,C])}else l(["respawn",Y.name,0]);o.focus=null}function F(u){let M=o.hero;o.zip={z:u,s:0,v:4},o.scope=!1,M.mode="zip",M.air=!0,M.vy=0,M.rot=0,l(["zipStart",u.name,u.icon])}function I(u,M){let Y=o.zip,C=Y.z,_t=C.at(Y.s),H=C.at(Y.s+1.5),V=(H.y-_t.y)/1.5;Y.v+=(-9.8*V*.85-.0016*Y.v*Y.v)*M,Y.v=Me(Y.v,3.5,27);let G=oe(C.L-70,C.L-12,Y.s);G>0&&(Y.v=Qt(Y.v,3.2,Me(G*M*4,0,1))),Y.s+=Y.v*M,Y.t=(Y.t||0)+M;let Dt=C.at(Y.s),yt=C.at(Y.s+2);if(u.x=Dt.x,u.y=Dt.y-2.4,u.z=Dt.z,Y.s>=C.L-.4){let Et=C.end;Object.assign(u,{x:Et.x,z:Et.z,y:i.H(Et.x,Et.z),mode:"walk",air:!1,vx:0,vz:0,vy:0,surf:null,peak:0}),o.zip=null,l(["zipEnd",C.name])}}function B(u){let M=o.hero;o.climbing={a:u,t:0,dur:Math.max(3,u.h/2.6)},M.mode="climb",M.vx=M.vz=0,M.rot=0,M.face=Math.atan2(u.top.z-u.bot.z,u.top.x-u.bot.x),l(["climbStart",u.name,Math.round(u.h)])}function D(u,M){let Y=o.climbing,C=Y.a;Y.t+=M;let _t=Me(Y.t/Y.dur,0,1),H=oe(0,1,_t);u.x=Qt(C.bot.x,C.top.x,H),u.z=Qt(C.bot.z,C.top.z,H),u.y=Math.max(i.H(u.x,u.z),Qt(C.bot.y,C.top.y,H)-.6),_t>=1&&(Object.assign(u,{x:C.top.x,z:C.top.z,y:i.H(C.top.x,C.top.z),mode:"walk",air:!1,surf:null}),o.climbing=null,l(["climbEnd",C.name]))}function A(u){let M=o.hero;o.fishing={t:0,bite:3+Math.random()*4.5,kind:u.kind},M.mode="fish",M.vx=M.vz=0,M.rot=0,M.air=!1,l("fishStart")}function L(u,M){let Y=o.fishing;Y.t+=M,Y.t>=Y.bite&&(o.fish=(o.fish||0)+1,u.mode="walk",o.fishing=null,l(["fish",o.fish]))}function $(u){let M=u.x+Math.cos(u.face)*3.5,Y=u.z+Math.sin(u.face)*3.5,C=i.H(M,Y),_t=i.water(M,Y,C+.05);return _t&&(_t.kind==="lake"||_t.kind==="sea"||_t.kind==="marsh")&&_t.level-C>.3?_t:null}function O(u,M,Y){if(u.mode==="faint"){u.faintT+=Y,u.faintT>1.6&&P(u,"faint");return}if(u.mode==="zip")return I(u,Y);if(u.mode==="climb")return D(u,Y);if(u.mode==="fish")if((M.mag||0)>.3)u.mode="walk",o.fishing=null,l("fishStop");else return L(u,Y);if(u.mode!=="walk")return ot(u,M,Y);if(o.scope){u.vx=u.vz=0,u.speed=0;return}let C=Me(M.mag||0,0,1);u.stun>0&&(u.stun-=Y,C=0);let _t=C>.62&&!M.sneak;u.sneak=!!M.sneak&&C>.08;let H=C<.08?0:_t?C>=.9?fi.sprint:Qt(fi.jog,fi.run,Me((C-.62)/.26,0,1)):u.sneak?.9:Qt(fi.walkMin,fi.walk,Me((C-.08)/.5,0,1));u.sprint=H>=fi.sprint-.01,i.ensureVeg(u.x,u.z);let V=i.water(u.x,u.z,u.y);u.water=V?V.kind:null;let G=V&&(V.kind==="sea"||V.kind==="lake"||V.kind==="marsh")?V.level-i.H(u.x,u.z):0;if(G>1.15&&!u.air)return y(u,M,Y,V,C,_t);G>.25&&(H*=Qt(1,.5,Me(G/1.15,0,1))),u.swim=!1;let Dt=u.air?null:u.surf&&u.surf!=="path"?u.surf:i.groundKind(u.x,u.z,u.y);Dt==="forest"?H*=.78:Dt==="rock"&&(H*=.85),V&&V.kind==="river"&&(H*=.6);let yt=0,Et=0;if(o.summit&&o.summit.wind>0&&(yt=o.summit.wind*1.6,Et=o.summit.wind*.48),V&&V.kind==="torrent"&&!u.air){if(yt+=V.dx*3.4,Et+=V.dz*3.4,u.inTorrent+=Y,u.inTorrent>.9){l("swept"),p(u,12,"water"),u.mode==="walk"&&P(u,"swept");return}}else u.inTorrent=0;if(M.jump&&!u.air&&u.stun<=0){u.air=!0,u.vy=fi.jumpV,u.peak=u.y,u.mantled=!1,l("jump");let tt=Math.hypot(u.vx,u.vz);tt>.4&&tt<fi.jumpH&&(u.vx*=fi.jumpH/tt,u.vz*=fi.jumpH/tt),u.airSpd=C>.08?Math.max(fi.jumpH,tt):0}let U=Math.hypot(M.mx||0,M.mz||0),b=U>1e-4?M.mx/U:0,nt=U>1e-4?M.mz/U:0;_(u,b,nt,H,Y,{pushX:yt,pushZ:Et}),u.run=_t&&u.speed>2.6,u.speed>.3&&!u.air?u.face=Sn(u.face,Math.atan2(u.vz-Et,u.vx-yt),12,Y):u.air&&Math.hypot(u.vx,u.vz)>.5&&(u.face=Sn(u.face,Math.atan2(u.vz,u.vx),8,Y)),u.air&&u.vy<-7?u.rot+=Y*5:u.air||(u.rot*=Math.pow(.001,Y));let it=u.hopPh;u.hopPh=u.speed<.25||u.air?0:u.hopPh+u.speed/Z1(u.speed)*Math.PI*Y,u.hopPh&&Math.floor(it/Math.PI)!==Math.floor(u.hopPh/Math.PI)&&l(u.water?"splash":["step",u.run,Dt]),u.landT=Math.max(0,u.landT-Y),o.t-u.lastHurt>6&&u.hp<u.maxHp&&(u.hp=Math.min(u.maxHp,u.hp+Y*3));for(let tt of i.restPoints)(!tt.dyn||tt.on)&&Math.hypot(u.x-tt.x,u.z-tt.z)<(tt.plaza?e.RP-1:tt.fire?6:3.2)&&Math.abs(u.y-(tt.plaza?e.HS:tt.y))<2.5&&o.rest!==tt&&(o.rest=tt,o.reached.has(tt.id)||(o.reached.add(tt.id),(tt.flag||tt.fire||tt.id==="valley")&&l(["rest",tt.name,tt.id])));for(let tt of o.coins)!tt.taken&&Math.abs(tt.x-u.x)<1.25&&Math.abs(tt.z-u.z)<1.25&&Math.hypot(tt.x-u.x,tt.z-u.z)<1&&Math.abs(tt.y-(u.y+.6))<1.2&&(tt.taken=!0,o.coinsGot++,l(["coin",tt]));for(let tt of o.items)if(!tt.taken&&Math.abs(tt.x-u.x)<1.6&&Math.abs(tt.z-u.z)<1.6&&Math.hypot(tt.x-u.x,tt.z-u.z)<1.45&&Math.abs(tt.y-u.y)<1.8){tt.taken=!0;let ut=Mt(tt.task);ut.got++,l(["pick",tt.task,ut.got,ut.def.need]),(!o.track||o.track===tt.task||Mt(o.track).done)&&(o.track=tt.task)}!o.summit&&e.rad(u.x,u.z)<e.RP-1&&Math.abs(u.y-e.HS)<1&&!o.carry&&(o.summit={t:0,phase:"wait",wind:0},o.climb.done?l(["summit",0,!1]):(o.climb.done=!0,o.climb.time=o.t-(o.climb.t0||0),l(["summit",o.climb.time,!0]))),o.summit&&o.summit.phase==="wait"&&e.rad(u.x,u.z)>e.RP+8&&(o.summit=null)}function ot(u,M,Y){let C=o.carry;if(u.mode==="lift"){C.t+=Y;let _t=C.t;u.x=C.from[0]+_t*_t*2.2,u.z=C.from[2]+_t*_t*.66,u.y=C.from[1]+_t*_t*3.2+Math.sin(_t*6)*.2,u.rot+=Y*(4+_t*3),_t>2.6&&(u.mode="carry",C.t=0,C.p0=[u.x,u.y,u.z],l("carry"));return}if(u.mode==="carry"){C.t+=Y;let _t=Me(C.t/C.dur,0,1),H=_t*_t*(3-2*_t),V=[C.p0,[e.x+80,e.HS+48,e.z+14],[n.x-50,n.VF+78,n.z],C.end],G=U=>{let b=1-H;return b*b*b*V[0][U]+3*b*b*H*V[1][U]+3*b*H*H*V[2][U]+H*H*H*V[3][U]},Dt=G(0),yt=G(1),Et=G(2);u.face=Math.atan2(Et-u.z,Dt-u.x),u.x=Dt,u.y=yt,u.z=Et,u.rot+=Y*Qt(9,2,_t),o.wind=Qt(1,.25,_t),_t>=1&&(u.mode="glide",u.vy=-3,u.vx=u.vz=0,u.chute=0,l("chute"),dt(u));return}if(u.mode==="glide"){u.chute=Math.min(1,u.chute+Y*3),u.rot*=Math.pow(.015,Y),u.vy+=(-3.2-u.vy)*Math.min(1,Y*3);let _t=Me(M.mag||0,0,1),H=Math.hypot(M.mx||0,M.mz||0),V=H>1e-4?M.mx/H:0,G=H>1e-4?M.mz/H:0;u.vx=Ye(u.vx,V*4.6*_t,3,Y),u.vz=Ye(u.vz,G*4.6*_t,3,Y),u.x+=u.vx*Y,u.z+=u.vz*Y,u.y+=u.vy*Y,[u.x,u.z]=i.collide(u.x,u.z,.4,yt=>yt.tall),_t>.1&&(u.face=Sn(u.face,Math.atan2(G,V),5,Y));for(let yt of o.coins)!yt.taken&&Math.hypot(yt.x-u.x,yt.z-u.z)<1.25&&Math.abs(yt.y-(u.y+.55))<1.3&&(yt.taken=!0,o.coinsGot++,l(["coin",yt]));o.wind=Math.max(0,o.wind-Y*.2);let Dt=i.surfaceAt(u.x,u.z,u.y+.5);u.y<=Dt.y&&(u.y=Dt.y,u.vy=0,u.rot=0,u.chute=0,u.landT=.35,u.mode="walk",u.air=!1,u.surf=Dt.kind,o.carry=null,o.drop={x:u.x+Math.cos(u.face)*1.2,z:u.z+Math.sin(u.face)*1.2,t:0,face:u.face},l(["landChute"]))}}function dt(u){o.coins=o.coins.filter(M=>!M.sky);for(let M=0;M<20;M++){let Y=M*.62;o.coins.push({x:u.x+Math.cos(Y)*3.2,z:u.z+Math.sin(Y)*3.2,y:u.y-4-M*1.55,sky:!0})}}function st(u){let M=o.summit;if(!(!M||o.carry)){if(M.t+=u,M.phase==="wait"&&M.t>=45&&o.windStory&&(M.phase="wind",M.t=0,l("windStart")),M.phase==="wind"&&(M.wind=Me(M.t/7,0,1),o.wind=M.wind,M.t>8.5)){let Y=o.hero;o.scope=!1;let[C,_t]=wt();o.carry={t:0,from:[Y.x,Y.y,Y.z],dur:6.2,end:[n.x+C,n.VF+i.V.H0(C,_t)+34,n.z+_t]},Y.mode="lift",Y.air=!0,M.phase="lift",l("lift")}M.phase==="lift"&&!o.carry&&(o.summit=null)}}function wt(){let u=hn(o.seed*7+13>>>0),M=(C,_t)=>!i.tallNear(n.x+C,n.z+_t,H=>Math.hypot(H.x-n.x-C,H.z-n.z-_t)<4.5+H.r),Y=null;for(let C=0;C<80;C++){let _t=32+u()*56,H=u()<.5?-1:1,V=Me(n.riverZ(_t)+H*(4.5+u()*3),-n.FLOOR+2.5,n.FLOOR-2.5);if(!(Math.hypot(_t-o.vq.camp.x,V-o.vq.camp.z)<16)){if(M(_t,V))return[_t,V];Y||(Y=[_t,V])}}return Y||[60,n.riverZ(60)+5]}function ft(){o.summit&&o.summit.phase==="wait"&&o.windStory&&(o.summit.t=45)}function Bt(u){let M=o.hero,Y=M.mode==="walk"&&!o.summit;for(let C of f){C.t+=u,C.cool=Math.max(0,C.cool-u);let _t=M.x-C.x,H=M.z-C.z,V=Math.hypot(_t,H),G=Math.abs(M.y-C.y);if(V>120&&C.state==="idle"){C.vx=C.vz=0,C.speed=0;continue}let Dt=M.run?14:M.speed>.4?9:5.5,yt=C.kind==="wolf",Et=(U,b,nt)=>{let it=U-C.x,tt=b-C.z,ut=Math.hypot(it,tt);return ut<.05?(_(C,0,0,0,u,{cautious:!0}),ut):(_(C,it/ut,tt/ut,nt,u,{cautious:!0,collFilter:Wt=>!Wt.hedge||!0}),C.speed>.2&&(C.face=Sn(C.face,Math.atan2(C.vz,C.vx),8,u)),ut)};switch(C.state){case"idle":if(Y&&C.cool<=0&&V<Dt&&G<3){C.state="notice",C.t=0,l([yt?"growl":"grunt",C.kind]);break}if(C.t>3+Math.random()*3){C.t=0;let U=Math.random()*Se;C.tx=C.home.x+Math.cos(U)*5,C.tz=C.home.z+Math.sin(U)*5}Math.hypot(C.tx-C.x,C.tz-C.z)>.6?Et(C.tx,C.tz,1):Et(C.x,C.z,0);break;case"notice":if(Et(C.x,C.z,0),C.face=Sn(C.face,Math.atan2(H,_t),10,u),!Y){C.state="return";break}if(C.t>(yt?.6:.9)){if(C.state=yt?"chase":"charge",C.t=0,!yt){let U=V||1;C.charge=[_t/U,H/U]}l([yt?"howl":"grunt",C.kind])}break;case"chase":Et(M.x,M.z,5),(!Y||V>22||C.t>7||Math.hypot(C.x-C.home.x,C.z-C.home.z)>32)&&(C.state="return",C.cool=3);break;case"charge":{let U=C.x,b=C.z;_(C,C.charge[0],C.charge[1],7.8,u,{cautious:!0}),C.face=Math.atan2(C.charge[1],C.charge[0]),(Math.hypot(C.x-U,C.z-b)<7.8*u*.3||C.t>1.8)&&(C.state=Y&&V<12&&C.t<6?"notice":"return",C.t=0);break}case"return":(Et(C.home.x,C.home.z,2.2)<1||C.t>20)&&(C.state="idle",C.t=0);break}if(C.ph+=u*(C.state==="chase"||C.state==="charge"?16:C.speed>.3?8:0),(C.state==="chase"||C.state==="charge")&&V<1.25&&G<1.4&&M.stun<=0&&Y){let U=V||1;M.vx=_t/U*6,M.vz=H/U*6,M.stun=.9,M.landT=.3,C.state="return",C.cool=6;let b=yt?18:25;l(["bitten",C.kind,b]),p(M,b,C.kind)}}}let gt=i.I.tasks,Mt=u=>o.tasks.find(M=>M.id===u);function vt(u){return u.id==="gazelle"?o.vq.caught?1:0:u.id==="fish"?Math.min(o.fish,u.def.need):u.got}let It=(u,M)=>[u-n.x,M-n.z],qt={mer:[1.05,-.5],zone:[2.35,.35],pen:[-4.45,-1.75]},$t=[[-1.1,-2.8,1.25],[0,-2.8,1.3],[1.1,-2.8,1.25],[-.78,-.8,.55],[4,-2.4,.62],[1.95,-1.8,.35],[-2.05,-1.6,.4],[1.68,-.25,.14],[-1.68,-.25,.14],[1.05,-.5,.42],[-5.8,-1,.3],[-5.8,-1.8,.3],[-5.8,-2.6,.3],[-5.1,-2.9,.3],[-4.45,-2.9,.3],[-3.8,-2.9,.3],[-3.1,-2.6,.3],[-3.1,-1.8,.3],[-3.1,-1,.3]],pe=[],zt={id:"camp",x:0,z:0,y:0,name:"\u062E\u064A\u0645\u0629 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",face:0,flag:!1,dyn:!0,on:!1};i.restPoints.push(zt);function ne(u,M,Y){let C=Math.cos(u.rot),_t=Math.sin(u.rot);return{x:n.x+u.x+M*C+Y*_t,z:n.z+u.z-M*_t+Y*C}}let he=80*Math.PI/180,_e=60*Math.PI/180;function Jt(){for(let C of pe)i.removeColl(C);let u=e.x+Math.cos(he)*8.7,M=e.z+Math.sin(he)*8.7,Y=Math.atan2(e.z-M,e.x-u);o.vq.camp={summit:!0,rot:Math.PI/2-Y,base:e.HS-n.VF,x:0,z:0},o.vq.merW={x:u,z:M},o.vq.zoneW={x:e.x+Math.cos(_e)*7.2,z:e.z+Math.sin(_e)*7.2},o.vq.penW={x:e.x+Math.cos(_e+.25)*9.2,z:e.z+Math.sin(_e+.25)*9.2},pe=[i.addColl({x:e.x+Math.cos(he)*10,z:e.z+Math.sin(he)*10,r:1.1})],Object.assign(g,{x:u,z:M,y:e.HS,face:Y})}function ye(u){u.state="flee",u.t=0,u.stuck=0;let M=o.hero,Y=Math.hypot(u.x-M.x,u.z-M.z)||1;u.fx=(u.x-M.x)/Y,u.fz=(u.z-M.z)/Y,l("snort")}function Fe(u){let M=m,Y=o.hero,C=o.vq;M.t+=u;let _t=Y.x-M.x,H=Y.z-M.z,V=Math.hypot(_t,H)||.001,G=Math.atan2(H,_t);if(V>140&&!C.caught){M.vx=M.vz=0;return}let Dt=Y.mode==="walk"?Y.speed:0,yt=Math.hypot(M.vx,M.vz)>.2;if(M.ph+=u*(M.state==="flee"?15:yt?8:0),M.state!=="flee"&&M.state!=="leap"&&(M.stamina=Math.min(4,M.stamina+u*(M.state==="tired"?.5:.8))),!C.caught&&["graze","look","walk","alert"].includes(M.state)){let it=V<22?1+(1-V/22)*1.6:0,tt=M.state!=="graze",ut=Dt>2.6?tt?2.6:1.4:Dt>1?tt?1.1:.06:Dt>.3&&tt?.35:0;M.sus=Me(M.sus+(ut*it>0?ut*it:-.3)*u,0,1)}let Et=(it,tt)=>{let[ut,Wt]=It(it,tt);return i.slope(it,tt)<.7&&ut>1&&ut<n.VL-1&&Math.abs(Wt)<n.FLOOR+1},U=(it,tt,ut)=>{let Wt=it-M.x,Ft=tt-M.z,Ut=Math.hypot(Wt,Ft);if(Ut<.05)return M.vx=M.vz=0,Ut;M.vx=Ye(M.vx,Wt/Ut*ut,6,u),M.vz=Ye(M.vz,Ft/Ut*ut,6,u);let Zt=M.x+M.vx*u,ee=M.z+M.vz*u;return[Zt,ee]=i.collide(Zt,ee,.42),Et(Zt,ee)&&(M.x=Zt,M.z=ee),M.face=Sn(M.face,Math.atan2(M.vz,M.vx),7,u),Ut},[b,nt]=It(M.x,M.z);switch(M.state){case"graze":if(M.vx=M.vz=0,M.sus>.5)M.state="alert",M.t=0,l("snort");else if(M.t>M.gt)if(M.t=0,Math.random()<.72)M.state="look";else for(let it=0;it<12;it++){let tt=b+(Math.random()-.5)*14,ut=nt+(Math.random()-.5)*10;if(n.onFloor(tt,ut)&&Math.abs(ut-n.riverZ(tt))>1.6){M.tx=n.x+tt,M.tz=n.z+ut,M.state="walk";break}}break;case"look":M.vx=M.vz=0,V<26&&(M.face=Sn(M.face,G,4,u)),M.sus>.5?(M.state="alert",M.t=0,l("snort")):M.t>1.1&&(M.state="graze",M.t=0,M.gt=1.4+Math.random()*1.8);break;case"walk":if(M.sus>.5){M.state="alert",M.t=0,M.vx=M.vz=0,l("snort");break}(U(M.tx,M.tz,1.1)<.4||M.t>6)&&(M.state="graze",M.t=0,M.vx=M.vz=0,M.gt=1.4+Math.random()*1.8);break;case"alert":M.vx=M.vz=0,M.face=Sn(M.face,G,8,u),M.sus>=1||V<1.6?ye(M):M.sus<.3&&(M.state="graze",M.t=0,M.gt=1.2+Math.random()*1.2);break;case"flee":{M.stamina-=u;let it=8.2*(.55+.45*Math.max(0,M.stamina)/4),tt=-_t/V,ut=-H/V;Math.abs(nt)>5.5&&(ut-=Math.sign(nt)*(Math.abs(nt)-5.5)*.45),b<8&&(tt+=(8-b)*.35),b>n.VL-8&&(tt-=(b-n.VL+8)*.35);let Wt=Math.hypot(tt,ut)||1;M.fx=Ye(M.fx,tt/Wt,5,u),M.fz=Ye(M.fz,ut/Wt,5,u);let Ft=Math.hypot(M.fx,M.fz)||1,Ut=M.fx/Ft,Zt=M.fz/Ft,ee=M.x+Ut*it*u,Q=M.z+Zt*it*u;[ee,Q]=i.collide(ee,Q,.42);let bt=Math.hypot(ee-M.x,Q-M.z);Et(ee,Q)&&(M.vx=(ee-M.x)/u,M.vz=(Q-M.z)/u,M.x=ee,M.z=Q),M.stuck=bt<it*u*.35?M.stuck+u:0,M.face=Sn(M.face,Math.atan2(Zt,Ut),10,u),M.stuck>.35&&V<10?(M.state="cornered",M.t=0,M.vx=M.vz=0):M.stamina<=0?(M.state="tired",M.t=0,l("tired")):V>32&&M.t>1.5&&(M.state="graze",M.t=0,M.vx=M.vz=0,M.sus=.35,M.gt=1.5);break}case"tired":V<9?U(M.x-_t/V*2,M.z-H/V*2,2.3):M.vx=M.vz=0,M.stamina>3.2&&M.t>2.2&&(M.sus=.45,V<6?ye(M):(M.state="graze",M.t=0));break;case"cornered":if(M.vx=M.vz=0,M.face=Sn(M.face,G,8,u),!M.triedLeap&&V<4&&M.t>.4){let it=Y.x+_t/V*4.5,tt=Y.z+H/V*4.5,[ut,Wt]=It(it,tt);n.onFloor(ut,Wt)||(it=Y.x+_t/V*3,tt=n.z+Me(It(0,Y.z+H/V*3)[1],-(n.FLOOR-2),n.FLOOR-2)),Object.assign(M,{triedLeap:!0,state:"leap",t:0,from:[M.x,M.z],to:[it,tt]}),l("snort")}else M.t>4&&V>9&&(M.state="graze",M.t=0,M.sus=.4);break;case"leap":{let it=Math.min(1,M.t/.75);M.x=Qt(M.from[0],M.to[0],it),M.z=Qt(M.from[1],M.to[1],it),M.hy=Math.sin(it*Math.PI)*1.5,M.vx=(M.to[0]-M.from[0])/.75,M.vz=(M.to[1]-M.from[1])/.75,M.face=Math.atan2(M.vz,M.vx),it>=1&&(M.hy=0,ye(M));break}case"follow":{let it=Y.x-Math.cos(Y.face)*1.45,tt=Y.z-Math.sin(Y.face)*1.45,ut=Math.hypot(it-M.x,tt-M.z);if(ut>12)M.x=it,M.z=tt;else if(ut>.08){M.vx=Ye(M.vx,(it-M.x)/ut*Math.min(7,ut*3.2),6,u),M.vz=Ye(M.vz,(tt-M.z)/ut*Math.min(7,ut*3.2),6,u);let Wt=M.x+M.vx*u,Ft=M.z+M.vz*u;[Wt,Ft]=i.collide(Wt,Ft,.42),M.x=Wt,M.z=Ft,M.face=Sn(M.face,Math.atan2(M.vz,M.vx),7,u)}else M.vx=M.vz=0;break}case"pen":{let it=C.penW,tt=Math.hypot(it.x-M.x,it.z-M.z);tt>.3?(M.vx=(it.x-M.x)/tt*1.3,M.vz=(it.z-M.z)/tt*1.3,M.x+=M.vx*u,M.z+=M.vz*u,M.face=Sn(M.face,Math.atan2(M.vz,M.vx),6,u)):M.vx=M.vz=0;break}}M.y=i.H(M.x,M.z)+(M.hy||0),!C.caught&&Y.mode==="walk"&&["graze","look","walk","alert","tired","cornered"].includes(M.state)&&V<1.55&&(M.hy||0)<.25&&Math.abs(Y.y-M.y)<1.5&&(C.caught=!0,M.state="follow",M.vx=M.vz=0,M.sus=0,o.focus={t:2.2,dist:5.2,yaw:Math.atan2(M.z-Y.z,M.x-Y.x)-Math.PI/2},l("catch"))}function le(u){let M=o.hero,Y=o.vq;if(M.mode!=="walk")return;let C=Math.hypot(M.x-Y.merW.x,M.z-Y.merW.z),_t=Y.camp,H=Math.atan2(Y.merW.z-e.z,Y.merW.x-e.x);if(!Y.called&&C<24&&Math.abs(M.y-g.y)<8&&(Y.called=!0,l("call")),!Y.met&&C<4.2&&(Y.met=!0,o.focus={t:3.4,dist:6.2,x:(M.x+Y.merW.x)/2,z:(M.z+Y.merW.z)/2,yaw:H,talk:!0},l("meet")),C<3.6&&Math.abs(M.y-g.y)<3)for(let V of o.tasks)V.done||V.id==="gazelle"||vt(V)<V.def.need||(V.done=!0,V.id==="fish"&&(o.fish-=V.def.need),o.focus={t:3.2,dist:6.4,x:(M.x+Y.merW.x)/2,z:(M.z+Y.merW.z)/2,yaw:H,talk:!0},l(["handIn",V.id,V.def.reward]),o.track===V.id&&(o.track=null));Y.caught&&!Y.delivered&&Math.hypot(M.x-Y.zoneW.x,M.z-Y.zoneW.z)<1.7&&(Y.delivered=!0,m.state="pen",Mt("gazelle").done=!0,Mt("gazelle").got=1,o.track==="gazelle"&&(o.track=null),o.focus={t:4.6,dist:6.6,x:(M.x+Y.merW.x)/2,z:(M.z+Y.merW.z)/2,yaw:H,talk:!0},l("deliver"))}function W(u,M={}){o.seed=(M.seed!=null?M.seed:Math.random()*4294967295)>>>0;let Y=hn(o.seed);s.length=0,s.push(...f,m,g);for(let G of f)Object.assign(G,{x:G.home.x,z:G.home.z,y:G.home.y,vx:0,vz:0,vy:0,air:!1,state:"idle",cool:0,t:Math.random()*2});Jt();let C=60,_t=0;for(let G=0;G<400;G++){let Dt=6+Y()*(n.VL-12),yt=(Y()-.5)*2*(n.FLOOR-2.5);if(!(Dt<22||Math.abs(yt-n.riverZ(Dt))<2.2||!n.onFloor(Dt,yt))){C=Dt,_t=yt;break}}Object.assign(m,{x:n.x+C,z:n.z+_t,vx:0,vz:0,state:"graze",t:0,gt:2.5,sus:0,stamina:4,triedLeap:!1,hy:0,face:Y()*Se}),m.y=i.H(m.x,m.z),Object.assign(o.vq,{met:!1,called:!1,caught:!1,delivered:!1}),zt.on=!1,o.coins=e.coins.map(G=>({...G,taken:!1})),o.zip=null,o.climbing=null,o.fishing=null,o.fish=0,o.tasks=gt.map(G=>({id:G.id,def:G,got:0,done:!1})),o.track=null,o.boardRead=!1,o.items=gt.flatMap(G=>G.items.map(Dt=>({...Dt,task:G.id,taken:!1}))),o.coinsGot=0,o.summit=null,o.scope=!1,o.carry=null,o.focus=null,o.wind=0,o.t=0,o.drop=null,o.climb={done:!1,time:0,t0:0},o.reached=new Set;let H=i.restPoints[0];o.rest=H,o.reached.add(H.id),o.hero=R(u,H),s.push(o.hero),o.hero.boots=!!o.tools.boots;let V=o.hero;if(M.at==="summit"&&(Object.assign(V,{x:e.x-e.RP+2.5,z:e.z+2,y:e.HS}),o.rest=i.restPoints.find(G=>G.id==="summit"),o.climb.done=!0),M.at==="valley"){let G=i.restPoints.find(Dt=>Dt.id==="valley");Object.assign(V,{x:G.x,z:G.z,y:G.y,face:0}),o.rest=G}return{camp:0,gazelle:[m.x,m.z],start:[V.x,V.z]}}function St(u){o.tools={...u||{}},o.hero&&(o.hero.boots=!!o.tools.boots)}function rt(u){let[M,Y]=String(u).split(":");if(M==="zip"){let C=i.zips[+Y];return C&&o.hero.mode==="walk"&&F(C),!0}if(M==="rope"){let C=i.anchors[+Y];return C?o.tools.rope?(o.hero.mode==="walk"&&B(C),!0):(l(["needTool","rope"]),!1):!1}if(M==="fish"){let C=$(o.hero);return o.tools.rod?(C&&A(C),!0):(l(["needTool","rod"]),!1)}return M==="shop"?(l("shop"),!0):M==="board"?(o.boardRead=!0,l("board"),!0):u==="scope"?(o.scope=!o.scope,!0):(u==="tea"&&(o.hero.hp=o.hero.maxHp),!0)}function mt(){let u=o.hero;if(u.mode!=="walk"||u.air)return null;let M=null,Y=1e9;if(o.summit&&o.summit.phase==="wait"){for(let C of e.plaza.inter){let _t=Math.hypot(u.x-C.x,u.z-C.z);_t<C.r&&_t<Y&&(Y=_t,M=C)}for(let C of i.zips){let _t=Math.hypot(u.x-C.stand.x,u.z-C.stand.z);_t<2.4&&_t<Y&&(Y=_t,M={id:"zip:"+C.i,label:`\u{1F6A1} ${C.name} ${C.icon}`,r:2.4})}if(o.vq.met){let C=Math.hypot(u.x-o.vq.merW.x,u.z-o.vq.merW.z);C<3.2&&C<Y&&!(o.vq.caught&&!o.vq.delivered)&&(Y=C,M={id:"shop",label:"\u{1F6D2} \u062F\u0643\u0627\u0646 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",r:3.2})}}for(let C of i.anchors){let _t=Math.hypot(u.x-C.bot.x,u.z-C.bot.z);_t<2.2&&Math.abs(u.y-C.bot.y)<1.6&&_t<Y&&(Y=_t,M={id:"rope:"+C.i,label:o.tools.rope?`\u{1F9D7} \u0627\u062A\u0633\u0644\u0651\u0642 ${Math.round(C.h)} \u0645`:"\u{1F9D7} \u062A\u062D\u062A\u0627\u062C \u062D\u0628\u0644 \u062A\u0633\u0644\u0651\u0642",r:2.2})}{let C=i.I.board,_t=u.x-C.x,H=u.z-C.z,V=Math.hypot(_t,H);V<7&&_t*C.fx+H*C.fz>.8&&Math.abs(u.y-i.H(C.x,C.z))<2&&V<Y&&(Y=V,M={id:"board",label:"\u{1F4DC} \u0627\u0642\u0631\u0627 \u0644\u0648\u062D\u0629 \u0627\u0644\u0637\u0644\u0628\u0627\u062A",r:7})}return!M&&!u.swim&&$(u)&&(M={id:"fish",label:o.tools.rod?"\u{1F3A3} \u0627\u0635\u0637\u0627\u062F \u0633\u0645\u0686":"\u{1F3A3} \u062A\u062D\u062A\u0627\u062C \u0633\u0646\u0627\u0631\u0629",r:3}),M}function K(){let u=o.track&&Mt(o.track);return u&&!u.done?u:o.tasks.find(M=>!M.done)||null}function pt(){let u=o.hero,M=o.vq;if(u.mode==="faint")return"\u{1F635} \u2026";if(M.caught&&!M.delivered)return"\u{1F3D4}\uFE0F \u0631\u062C\u0651\u0639 \u0627\u0644\u063A\u0632\u0627\u0644 \u0644\u0623\u0628\u0648 \u062C\u0627\u0633\u0645 \u0628\u0627\u0644\u0642\u0645\u0629";if(!o.boardRead&&!M.met&&!o.track)return"\u{1F4DC} \u0627\u0642\u0631\u0627 \u0644\u0648\u062D\u0629 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0628\u0633\u0627\u062D\u0629 \u0627\u0644\u0641\u062C\u0631";let Y=K();if(!Y)return"\u{1F30D} \u0643\u0645\u0651\u0644\u062A \u0643\u0644 \u0627\u0644\u0637\u0644\u0628\u0627\u062A! \u0627\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u062C\u0632\u064A\u0631\u0629";let C=Y.def,_t=vt(Y),H=(i.I.zones.find(V=>V.id===C.zone)||{}).name||"";return _t>=C.need?`\u26F0\uFE0F \u0633\u0644\u0651\u0645 ${C.icon} ${C.name} \u0644\u0623\u0628\u0648 \u062C\u0627\u0633\u0645 \u0628\u0627\u0644\u0642\u0645\u0629`:Y.id==="fish"&&!o.tools.rod?"\u{1F3A3} \u0627\u0634\u062A\u0631\u064A \u0633\u0646\u0627\u0631\u0629 \u0645\u0646 \u062F\u0643\u0627\u0646 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645 \u0628\u0627\u0644\u0642\u0645\u0629":Y.id==="gazelle"?`\u{1F98C} \u062C\u064A\u0628 ${C.name} \u0645\u0646 ${H}`:`${C.icon} ${C.name} ${_t}/${C.need} \u2014 ${H}`}function lt(){let u=o.hero,M=o.vq;if(M.caught&&!M.delivered)return{x:e.x,z:e.z,icon:"\u{1F3D4}\uFE0F"};let Y=K();if(!Y)return null;let C=Y.def;if(vt(Y)>=C.need||Y.id==="fish"&&!o.tools.rod)return{x:e.x,z:e.z,icon:"\u{1F3D4}\uFE0F"};let _t=null,H=1e9;for(let V of o.items)if(V.task===Y.id&&!V.taken){let G=Math.hypot(V.x-u.x,V.z-u.z);G<H&&(H=G,_t=V)}return _t&&H<600?{x:_t.x,z:_t.z,icon:C.icon,item:!0}:{x:C.at.x,z:C.at.z,icon:C.icon}}function ht(u,M){if(!(u>0))return[];o.t+=u;let Y=o.hero;if(!Y)return[];O(Y,M||{},u),st(u),!o.summit&&!o.carry&&(o.wind=Math.max(0,o.wind-u*.35)),Bt(u),Fe(u),le(u),o.drop&&(o.drop.t+=u),o.focus&&(o.focus.t-=u,o.focus.t<=0&&(o.focus=null));let C=a.slice();return a.length=0,C}return o.tools={},o.fish=0,o.tasks=[],o.items=[],{S:o,ents:s,beasts:f,gz:m,merchant:g,step:ht,enter:W,interact:rt,nearInteract:mt,skipWait:ft,objective:pt,trackTarget:lt,setTrack:u=>{o.track=u},setTools:St,have:vt,respawn:()=>{o.hero&&o.hero.mode==="walk"&&P(o.hero,"menu")},hurt:u=>p(o.hero,u,"test")}}var cc=new Ie,J1=new Ie,An=new Ie,ko=new Ie,Os=(i,t,e,n)=>i.copy(cc.set(t)).lerp(J1.set(e),Me(n,0,1));function Ff({scene:i,G:t,U:e,camera:n,waterN:s,glowTex:r,colorBase:o,S:a}){let l=t.I,c=t.SEA,d=t.M,f=t.HALF,m=new Te({vertexColors:!0}),g=new Te({vertexColors:!0,flatShading:!0}),_=ic(g,e),R=new dn,p=new Ie;function y(v,w,h,x,S,T){let E=w-c;if(E<.4)return Os(S,"#D9C99A","#3C7C88",-E/5),E<-5&&S.lerp(An.set("#1E4C69"),Me((-E-5)/22,0,1)),S;Os(S,"#5C973C","#9CC45A",un(v*.02+9,h*.02)*1.2-.1),S.lerp(An.set("#B5AE68"),oe(.55,.8,yn(v*.008+3,h*.008))*.42);let z=l.coastS(v,h);if(T>0){let k=l.flora(v,h,E,z,x);S.lerp(An.set("#3D6629"),Me(k.t,0,.9)*.6),k.reed>.3&&S.lerp(An.set("#6F7E3E"),.6)}else S.lerp(An.set("#3D6629"),oe(.44,.62,un(v*.0032+5,h*.0032-3))*.45);S.lerp(An.set("#8D8A70"),oe(300,390,E)*.45);let X=Math.hypot(v+1500,h+1650);if(X<520&&(Os(An,"#D2AE52","#E6CB72",yn(v*.5,0)*.5+.5*Math.sin(v*.9+h*.15)**2),S.lerp(An,oe(520,380,X)*.85)),z<160&&E<4.5&&S.lerp(An.set("#E4D3A0"),oe(4.5,1.6,E)),x>.72){let k=l.peaks.some(N=>N.dark&&Math.hypot(v-N.x,h-N.z)<N.r);Os(An,k?"#3E3A37":"#6C665C",k?"#6A645E":"#ADA595",yn(v*.2,w*.6)),S.lerp(An,oe(.72,1.1,x))}if(T>0){let k=l.nearRoad(v,h);k&&k.d<k.hw+1.2&&S.lerp(An.set(T>1?"#A88A5E":"#9E8A62"),oe(k.hw+1.2,k.hw-.3,k.d)*.9);let N=l.nearRiver(v,h);N&&N.d<N.w+2.5&&S.lerp(An.set("#857A55"),oe(N.w+2.5,N.w,N.d)*.7)}return S}let P=[{size:1024,split:760},{size:256,split:170},{size:64,split:0}],F=32,I=-4608,B=new Map,D=(v,w,h)=>v*1e8+(w+5e3)*1e4+(h+5e3),A=m;function L(v,w,h){let x=P[v].size,S=x/F,T=I+w*x,E=I+h*x,z=F+1,X=z+2,k=new Float32Array(X*X);for(let re=0;re<X;re++)for(let ae=0;ae<X;ae++)k[re*X+ae]=t.H(T+(ae-1)*S,E+(re-1)*S);let N=(re,ae)=>k[(ae+1)*X+(re+1)],q=new Float32Array((z*z+4*F)*3),ct=new Float32Array(q.length),Pt=new Float32Array(q.length),Lt=[],Yt=0;for(let re=0;re<z;re++)for(let ae=0;ae<z;ae++){let Ve=T+ae*S,Ne=E+re*S,sn=N(ae,re),ln=(N(ae+1,re)-N(ae-1,re))/(2*S),ue=(N(ae,re+1)-N(ae,re-1))/(2*S),ge=Math.hypot(ln,ue),Re=Math.hypot(ln,1,ue);if(q[Yt*3]=Ve,q[Yt*3+1]=sn,q[Yt*3+2]=Ne,ct[Yt*3]=-ln/Re,ct[Yt*3+1]=1/Re,ct[Yt*3+2]=-ue/Re,o(Ve,sn,Ne,ge,ko,v)||y(Ve,sn,Ne,ge,ko,v),Pt[Yt*3]=ko.r,Pt[Yt*3+1]=ko.g,Pt[Yt*3+2]=ko.b,Yt++,ae<z-1&&re<z-1){let en=re*z+ae;Lt.push(en,en+z,en+1,en+1,en+z,en+z+1)}}let de=[];for(let re=0;re<z;re++)de.push(re);for(let re=1;re<z;re++)de.push(re*z+z-1);for(let re=z-2;re>=0;re--)de.push((z-1)*z+re);for(let re=z-2;re>0;re--)de.push(re*z);let jt=Yt,Ht=S*.9+1;for(let re of de){q[Yt*3]=q[re*3],q[Yt*3+1]=q[re*3+1]-Ht,q[Yt*3+2]=q[re*3+2];for(let ae=0;ae<3;ae++)ct[Yt*3+ae]=ct[re*3+ae],Pt[Yt*3+ae]=Pt[re*3+ae];Yt++}for(let re=0;re<de.length;re++){let ae=de[re],Ve=de[(re+1)%de.length],Ne=jt+re,sn=jt+(re+1)%de.length;Lt.push(ae,Ne,Ve,Ve,Ne,sn,ae,Ve,Ne,Ve,sn,Ne)}let ie=new Ze;ie.setAttribute("position",new qe(q,3)),ie.setAttribute("normal",new qe(ct,3)),ie.setAttribute("color",new qe(Pt,3)),ie.setIndex(Lt),ie.computeBoundingSphere();let Xt=new Vt(ie,A);return Xt.receiveShadow=!0,Xt.matrixAutoUpdate=!1,Xt.visible=!1,i.add(Xt),Xt}let $=(v,w)=>{let h=P[0].size,x=I+v*h,S=I+w*h;for(let T=0;T<=4;T++)for(let E=0;E<=4;E++)if(l.coastS(x+T/4*h,S+E/4*h)>-650)return!1;return!0},O=[];for(let v=0;v<9;v++)for(let w=0;w<9;w++)$(v,w)||O.push({lv:0,i:v,j:w});let ot=[];function dt(v,w,h){let x=D(v,w,h),S=B.get(x);return S||(S={lv:v,i:w,j:h,mesh:null,x:I+(w+.5)*P[v].size,z:I+(h+.5)*P[v].size,used:wt},B.set(x,S)),S}let st=(v,w,h)=>{let x=P[v.lv].size/2;return Math.hypot(Math.max(0,Math.abs(w-v.x)-x),Math.max(0,Math.abs(h-v.z)-x))},wt=0;function ft(v,w,h){wt++,ot.length=0;let x=Math.max(0,h-c-60)*1.4,S=T=>{if(T.used=wt,!T.mesh)return ot.push(T),!1;let E=st(T,v,w),z=P[T.lv].split+(T.lv===0?x:x*.15);if(T.lv<2&&E<z){let X=[],N=!0;for(let q=0;q<4;q++)for(let ct=0;ct<4;ct++){let Pt=dt(T.lv+1,T.i*4+q,T.j*4+ct);X.push(Pt),Pt.mesh||(N=!1,ot.push(Pt),Pt.used=wt)}if(N){T.mesh.visible=!1;for(let q of X)S(q);return!0}}return T.mesh.visible=!0,!0};for(let T of O)S(dt(T.lv,T.i,T.j));for(let T of B.values())if(T.used!==wt&&T.mesh){T.mesh.visible=!1;let E=st(T,v,w);wt-T.used>120&&(T.lv===2&&E>420||T.lv===1&&E>1700)&&(i.remove(T.mesh),T.mesh.geometry.dispose(),T.mesh=null,B.delete(D(T.lv,T.i,T.j)))}ot.sort((T,E)=>(T.lv===0?-1e6:0)+st(T,v,w)/(T.lv+1)-((E.lv===0?-1e6:0)+st(E,v,w)/(E.lv+1)))}for(let v of O){let w=dt(0,v.i,v.j);w.mesh=L(0,v.i,v.j)}function Bt(v){let w=performance.now(),h=0;for(;ot.length&&(performance.now()-w<v||h===0);){let x=ot.shift();x.mesh||(x.mesh=L(x.lv,x.i,x.j),h++)}return ot.length}let gt=(v,w)=>{let h=hn(v),x=18,S=[Nt(Ot(new me(.2,.36,x*.9,7),0,x*.45,0),"#5B3F27")];for(let T=0;T<5;T++){let E=T/4,z=Qt(5.4,x-2.6,E),X=Qt(3.3,1,E)*(.9+h()*.2),k=Qt(4.3,3,E);S.push(Ot(Nt(new Mn(X,k,7,1),(N,q,ct,Pt)=>De(N,w?"#1B4226":"#214F2C",w?"#3A7538":"#4C8C44",.3+(ct/k+.5)*.5+(Ke(q*7,Pt*7)-.5)*.2)),(h()-.5)*.2,z+k*.3,(h()-.5)*.2,0,h()*3,0))}return nn(S)},Mt=v=>{let w=hn(v),h=[Nt(Ot(new me(.3,.5,6,7),0,3,0),"#5E4630")];for(let[x,S]of[[1,.3],[-.8,.7],[.2,-1]])h.push(Nt(Ot(new me(.1,.2,3.4,5),x*.9,6.2,S*.9,S*.5,0,-x*.5),"#5E4630"));for(let x=0;x<6;x++){let S=x/6*Se+w(),T=x?2.6+w()*.8:3.2;h.push(Ot(Nt(new gn(T,0),(E,z,X,k)=>De(E,"#2D5E2A","#6FA349",.35+X/T*.4+(Ke(z*3,k*3)-.5)*.3)),x?Math.cos(S)*2.8:0,x?8+w()*2.5:10.5,x?Math.sin(S)*2.8:0,0,0,0,1,.8,1))}return nn(h)},vt=v=>{let w=hn(v),h=[Nt(Ot(new me(.16,.3,2.2,6),0,1.1,0,.12,0,.08),"#6B5640")];for(let x=0;x<5;x++){let S=x/5*Se+w();h.push(Ot(Nt(new gn(1.4+w()*.4,0),(T,E,z)=>De(T,"#5F7A4F","#A6B98A",.4+z*.3)),Math.cos(S)*1.2,3.2+w()*.9,Math.sin(S)*1.2,0,0,0,1,.65,1))}return nn(h)},It=()=>Nt(new ni(1,0),(v,w,h,x)=>De(v,"#7A746A","#B9B2A2",.4+h*.5+(Ke(w*5,x*5)-.5)*.35)),qt={pine:[gt(5,!1)],oak:[Mt(7)],palm:[Sr(hn(3),1.1,9)],olive:[vt(9)],bush:[Uo()],rock:[Bo()],boulder:[It()],reed:[rc()]},$t={pine:1,oak:1,palm:2.4,olive:1,bush:1.7,rock:1.3,boulder:1,reed:2.4},pe={pine:.22,oak:.18,palm:.12,olive:.12,bush:.2},zt={pine:$n(new Te({vertexColors:!0,flatShading:!0}),.0012,5,e),oak:$n(new Te({vertexColors:!0,flatShading:!0}),.0016,5,e),palm:$n(new Te({vertexColors:!0,side:Be}),.003,9,e),olive:$n(new Te({vertexColors:!0,flatShading:!0}),.004,2,e),bush:_,rock:g,boulder:g,reed:$n(new Te({vertexColors:!0}),.09,.2,e)},ne={pine:nn([Nt(Ot(new me(.25,.35,6,4),0,3,0),"#4B3520"),Nt(Ot(new Mn(3.4,13.5,5,1),0,11.2,0),(v,w,h)=>De(v,"#1F4A2A","#3E7A3A",h/13.5+.5))]),oak:nn([Nt(Ot(new me(.3,.45,6,4),0,3,0),"#4B3520"),Nt(Ot(new gn(4.6,0),0,9.6,0,0,0,0,1,.72,1),(v,w,h)=>De(v,"#2B5A28","#5E9443",h/4+.5))]),palm:nn([Nt(Ot(new me(.12,.17,5.5,4),0,2.75,0),"#8B6A3E"),Nt(Ot(new gn(1.25,0),0,5.6,0,0,0,0,1,.42,1),"#3F8A36")]),olive:Nt(Ot(new gn(2.4,0),0,3.5,0,0,0,0,1,.7,1),"#7C9467")},he=Nt(Ot(new Mn(.5,1,5,1),0,.5,0),(v,w,h)=>De(v,"#BFBFBF","#FFFFFF",h)),_e={pine:[6.6,15,4,"#24502C"],oak:[9.5,9,4.5,"#355F2C"],palm:[5,3.5,11,"#3C7B34"],olive:[4.6,3.6,1.8,"#6E8A5E"]},Jt=new Te({vertexColors:!0,flatShading:!0}),ye=26e3,Fe=9e4,le={};for(let v of Object.keys(ne)){let w=new ai(ne[v],Jt,ye);w.count=0,w.frustumCulled=!1,w.receiveShadow=!0,i.add(w),le[v]=w}let W=new ai(he,Jt,Fe);W.count=0,W.frustumCulled=!1,i.add(W);let St=130,rt=480,mt=1400,K=128,pt=new Map,lt=K/t.VC,ht=[];{let v=Math.ceil(mt/t.VC);for(let w=-v;w<=v;w++)for(let h=-v;h<=v;h++){let x=Math.hypot(w,h)*t.VC;x<=mt+t.VC&&ht.push([w,h,x])}ht.sort((w,h)=>w[2]-h[2])}let xt=0,u=null,M=null,Y=0,C=-1,_t=new Set;function H(v,w,h){let x=Math.floor(v/t.VC),S=Math.floor(w/t.VC);(!u||u[0]!==x||u[1]!==S)&&(u=[x,S],xt=0);let T=performance.now();for(;xt<ht.length&&performance.now()-T<h;){let[E,z]=ht[xt++],X=(x+E)*100003+(S+z);_t.has(X)||(t.vegCell(x+E,S+z),_t.add(X),Y++)}if(_t.size>9e3){for(let E of _t)if(_t.delete(E),_t.size<6e3)break}}function V(v,w){let h={};for(let S=0;S<lt;S++)for(let T=0;T<lt;T++)for(let E of t.vegCell(v*lt+S,w*lt+T).items)(h[E.t]=h[E.t]||[]).push(E);let x=new we;for(let[S,T]of Object.entries(h)){let E=qt[S];E&&E.forEach((z,X)=>{let k=T.filter((q,ct)=>ct%E.length===X);if(!k.length)return;let N=new ai(z,zt[S],k.length);k.forEach((q,ct)=>{R.position.set(q.x,q.y,q.z),R.rotation.set(q.rx||0,q.ry||0,q.rz||0),R.scale.setScalar((q.s||1)*$t[S]),R.updateMatrix(),N.setMatrixAt(ct,R.matrix),pe[S]&&N.setColorAt(ct,p.setScalar(1).offsetHSL(0,0,(Ke(q.x,q.z)-.5)*pe[S]))}),N.castShadow=S!=="reed"&&S!=="rock",N.receiveShadow=!0,N.computeBoundingSphere(),x.add(N)})}return i.add(x),x}function G(v,w,h,x=h*.5){let S=performance.now();H(v,w,x);let T=Math.floor(v/K),E=Math.floor(w/K),z=new Set;for(let N=-2;N<=2;N++)for(let q=-2;q<=2;q++){let ct=(T+N+.5)*K,Pt=(E+q+.5)*K;Math.hypot(Math.max(0,Math.abs(v-ct)-K/2),Math.max(0,Math.abs(w-Pt)-K/2))<St&&z.add((T+N)*100003+(E+q))}let X=!1;for(let[N,q]of pt)z.has(N)||(i.remove(q.group),q.group.children.forEach(ct=>ct.dispose&&ct.dispose()),pt.delete(N),X=!0);for(let N of z)if(!pt.has(N)&&performance.now()-S<h){let q=Math.round(N/100003),ct=N-q*100003;pt.set(N,{group:V(q,ct)}),X=!0}(!M||Math.hypot(v-M[0],w-M[1])>24||X||Y>60)&&performance.now()-C>350&&Dt(v,w)}function Dt(v,w){M=[v,w],Y=0,C=performance.now();let h={pine:0,oak:0,palm:0,olive:0},x=0,S=Math.floor(v/t.VC),T=Math.floor(w/t.VC);for(let[E,z,X]of ht){if(X<St-t.VC)continue;let k=(S+E)*100003+(T+z);if(!_t.has(k))continue;let N=t.vegCell(S+E,T+z);if(!pt.has(Math.floor(N.ci/lt)*100003+Math.floor(N.cj/lt)))for(let q of N.items){let ct=_e[q.t];if(!ct)continue;let Pt=Math.hypot(q.x-v,q.z-w);if(Pt<rt){let Lt=le[q.t];if(h[q.t]>=ye)continue;R.position.set(q.x,q.y,q.z),R.rotation.set(0,q.ry,0),R.scale.setScalar(q.s*(q.t==="palm"?2.4:1)),R.updateMatrix(),Lt.setMatrixAt(h[q.t]++,R.matrix)}else if(Pt<mt&&x<Fe&&(q.s>.95||Pt<900)){let Lt=q.s;R.position.set(q.x,q.y+ct[2]*Lt,q.z),R.rotation.set(0,q.ry,0),R.scale.set(ct[0]*Lt,ct[1]*Lt,ct[0]*Lt),R.updateMatrix(),W.setMatrixAt(x,R.matrix),W.setColorAt(x,p.set(ct[3]).offsetHSL(0,0,(Ke(q.x,q.z)-.5)*.06)),x++}}}for(let E in h)le[E].count=h[E],le[E].instanceMatrix.needsUpdate=!0;W.count=x,W.instanceMatrix.needsUpdate=!0,W.instanceColor&&(W.instanceColor.needsUpdate=!0)}let yt=1900,Et=new ai(Oo(),$n(new Te({vertexColors:!0,side:Be}),.5,0,e),yt);Et.frustumCulled=!1,Et.count=0,i.add(Et);let U=null;function b(v,w){if(U&&Math.hypot(v-U[0],w-U[1])<8)return;U=[v,w];let h=0,x=hn((Math.floor(v/8)*7919^Math.floor(w/8)*104729)>>>0);for(let S=0;S<yt*1.6&&h<yt;S++){let T=x()*Se,E=Math.sqrt(x())*42,z=Math.round((v+Math.cos(T)*E)*4)/4,X=Math.round((w+Math.sin(T)*E)*4)/4,k=t.H(z,X),N=k-c;if(N<.6||N<4&&l.coastS(z,X)<160||l.reserved(z,X))continue;let q=l.nearRoad(z,X);if(q&&q.d<q.hw+.4)continue;if(d.rad(z,X)<250){let Pt=d.nearest(z,X,k,1);if(d.rad(z,X)<d.RP+1||Pt&&Pt.d<Pt.p.hw+.3)continue}let ct=l.nearRiver(z,X);ct&&ct.d<ct.w+.5||(R.position.set(z,k,X),R.rotation.set(0,Ke(z,X)*Se,0),R.scale.setScalar(1+Ke(X,z)*.75))}Et.count=h,Et.instanceMatrix.needsUpdate=!0}let nt=(v,w,h)=>{let x=s.clone();x.wrapS=x.wrapT=ds,x.repeat.set(h,h),x.needsUpdate=!0;let S=new On({color:v,specular:"#FFFFFF",shininess:110,normalMap:x,transparent:!0,opacity:w});return S.normalScale.set(.6,.6),S},it=nt("#2A7DB2",.84,1400),tt=new Vt(new xn(26e3,26e3),it);tt.rotation.x=-Math.PI/2,tt.position.y=c,i.add(tt);let ut=new Vt(new xn(26e3,26e3),new vn({color:"#174767"}));ut.rotation.x=-Math.PI/2,ut.position.y=c-42,i.add(ut);let Wt=[it];for(let v of l.lakes){let w=nt("#3A8FBE",.86,40);Wt.push(w);let h=new Vt(new Bn(v.r*1.3+30,48),w);h.rotation.x=-Math.PI/2,h.position.set(v.x,c+v.lv,v.z),i.add(h)}{let v=nt("#4E8C8A",.8,60);Wt.push(v);let w=new Vt(new Bn(l.marsh.r,56),v);w.rotation.x=-Math.PI/2,w.position.set(l.marsh.x,c+l.marsh.lv,l.marsh.z),i.add(w)}let Ft=nt("#3C95C8",.88,1);Wt.push(Ft);for(let v of l.rivers){let w=[],h=[],x=[],S=0,T=0;v.pts.forEach((X,k)=>{let N=v.pts[Math.max(0,k-1)],q=v.pts[Math.min(v.pts.length-1,k+1)],ct=q.x-N.x,Pt=q.z-N.z,Lt=Math.hypot(ct,Pt)||1,Yt=-Pt/Lt,de=ct/Lt,jt=X.w+.7;if(k&&(T+=Math.hypot(X.x-v.pts[k-1].x,X.z-v.pts[k-1].z)),w.push(X.x+Yt*jt,c+X.lv+.04,X.z+de*jt,X.x-Yt*jt,c+X.lv+.04,X.z-de*jt),h.push(0,T/6,1,T/6),k){let Ht=(k-1)*2;x.push(Ht,Ht+2,Ht+1,Ht+1,Ht+2,Ht+3)}});let E=new Ze;E.setAttribute("position",new qe(new Float32Array(w),3)),E.setAttribute("uv",new qe(new Float32Array(h),2)),E.setIndex(x),E.computeVertexNormals();let z=new Vt(E,Ft);i.add(z)}let Ut=di(64,128,(v,w,h)=>{v.clearRect(0,0,w,h);for(let x=0;x<90;x++)v.fillStyle=`rgba(255,255,255,${.25+Math.random()*.5})`,v.fillRect(Math.random()*w,0,1+Math.random()*3,h)},[3,1]),Zt=new Te({map:Ut,color:"#DDF3FF",transparent:!0,opacity:.85,side:Be,depthWrite:!1}),ee=[];for(let v of l.falls){if(v.top-v.bot<4)continue;let w=Math.hypot(v.dx,v.dz)||1,h=v.w*2+1.2,x=v.top-v.bot+1,S=new Vt(new xn(h,x),Zt);S.position.set(v.x,c+(v.top+v.bot)/2,v.z),S.rotation.y=Math.atan2(v.dx,v.dz)+Math.PI/2,S.rotation.order="YXZ",S.rotation.x=-.25,i.add(S);let T=new qn(new Un({map:r,color:"#FFFFFF",transparent:!0,opacity:.55,depthWrite:!1}));T.position.set(v.x+v.dx/w*3,c+v.bot+1.2,v.z+v.dz/w*3),T.scale.setScalar(h*1.4),i.add(T),ee.push({m:S,sp:T})}let Q=(v,w=512,h=128,x=56,S="#8B5A2B",T="#FFF6E0")=>di(w,h,E=>{E.fillStyle=S,E.fillRect(0,0,w,h),E.strokeStyle="#E8C170",E.lineWidth=8,E.strokeRect(4,4,w-8,h-8),E.fillStyle=T,E.font=`900 ${x}px -apple-system,system-ui,sans-serif`,E.textAlign="center",E.textBaseline="middle",E.direction="rtl",E.fillText(v,w/2,h/2+4)}),bt=(v,w,h,x,S=0,T=0,E=0,z=0)=>Ot(Nt(new be(v,w,h),x),S,T,E,0,z,0),Gt=(v,w,h,x,S=0,T=0,E=0,z=10)=>Ot(Nt(new me(v,w,h,z),x),S,T,E),se=v=>(w,h,x,S)=>De(w,v>.5?"#C79E72":"#B98D62",v>.5?"#DDBB8E":"#D1AE80",.45+(Ke(Math.round(h*3),Math.round(x*3+S*3))-.5)*.35);function ce(v){let w=[],h=v.kind;if(h==="house"){let x=v.w,S=v.d,T=v.h,E=v.white?z=>z.set("#F1ECE2"):se(v.tint);w.push(Nt(Ot(new be(x,T,S),0,T/2,0),E));for(let[z,X,k,N]of[[0,S/2-.15,x,.3],[0,-S/2+.15,x,.3],[x/2-.15,0,.3,S],[-x/2+.15,0,.3,S]])w.push(Nt(Ot(new be(k,.55,N),z,T+.27,X),E));w.push(bt(.12,2.1,1,"#5B3A1F",x/2+.03,1.05,0));for(let z of v.floors===2?[1.6,4.8]:[1.6])for(let X of[-1,1])w.push(bt(.1,.8,.9,"#3A2A1E",x/2+.03,z,X*S*.28));v.floors===2&&w.push(Nt(Ot(new be(x+.1,.18,S+.1),0,3.25,0),"#A9825A")),w.push(bt(1.4,.12,1.4,"#8B6B44",x/2+.7,2.3,0))}else if(h==="hut"){let x=v.w,S=v.d;w.push(Nt(Ot(new be(x,2.4,S),0,1.2,0),(E,z,X)=>De(E,"#7A5434","#9C7048",(X+1.2)*3.3%1)));let T=new me(.01,x*.78,S+.6,3,1);w.push(Nt(Ot(T,0,2.4+.75,0,Math.PI/2,0,0,1,1,1),"#5C3F27")),w.push(bt(.1,1.9,.9,"#3E2A18",x/2+.03,.95,0))}else if(h==="reedhut"||h==="mudhif"){let x=v.w,S=v.d,T=v.h,E=Math.round(S/.9),z=new me(x/2,x/2,S,18,1,!0,-Math.PI/2,Math.PI);w.push(Nt(Ot(z,0,0,0,Math.PI/2,0,0,1,1,T/(x/2)),(X,k,N,q)=>De(X,"#BFA35E","#E0C98A",.5+Math.sin(q*9)*.25+(Ke(k*4,q*4)-.5)*.2)));for(let X=0;X<=E;X++){let k=-S/2+X/E*S;w.push(Nt(Ot(new me(x/2+.06,x/2+.06,.16,18,1,!0,-Math.PI/2,Math.PI),0,0,k,Math.PI/2,0,0,1,1,T/(x/2)),"#8C7038"))}if(h==="mudhif")for(let X of[-1,1])w.push(Gt(.35,.42,T+.8,"#A88A4C",X*(x/2-.5),(T+.8)/2,S/2+.2,8))}else if(h==="teahouse"){let x=v.w,S=v.d;w.push(bt(.3,3.3,S,"#E3D2B4",-x/2,1.65,0),bt(x,3.3,.3,"#E3D2B4",0,1.65,-S/2),bt(x,3.3,.3,"#E3D2B4",0,1.65,S/2)),w.push(bt(x+1.2,.25,S+.6,"#7B5534",.3,3.4,0));for(let T of[-1,1])w.push(Gt(.12,.12,3.3,"#6B4A2E",x/2+.6,1.65,T*(S/2-.2),6));for(let T=0;T<3;T++)w.push(bt(.6,.45,1.8,"#8E5A36",-.6,.23,-3+T*3),bt(.9,.7,.9,"#6B4A2E",.6,.35,-3+T*3));w.push(Gt(.22,.3,.7,"#C9A13B",-x/2+.6,1.25,0,10))}else if(h==="stall"){let x=["#E63946","#2A9D8F","#F4A261","#457B9D","#E9C46A"],S=x[(v.tint||0)%x.length];for(let[T,E]of[[-1,-1],[1,-1],[-1,1],[1,1]])w.push(Gt(.05,.05,2.6,"#6B4A2E",T*1.4,1.3,E*1,5));w.push(Nt(Ot(new be(3.1,.08,2.3),0,2.62,0,.12,0,0),(T,E)=>T.set(Math.floor((E+2)*2.5)%2?S:"#FFF5E0"))),w.push(bt(2.8,.85,1,"#8B5E3C",0,.43,.3));for(let T=0;T<6;T++)w.push(bt(.35,.3,.3,["#E76F51","#F4D35E","#7FB069","#C2185B","#FFB703","#8D6E63"][T],-1.1+T*.44,1,.3))}else if(h==="board"){let x=(S,T,E,z)=>De(S,"#C9B596","#E3D3B5",.4+(Ke(Math.round(T*3),Math.round(z*3+E))-.5)*.5);w.push(Nt(Ot(new be(1.9,.18,4.6),0,.09,0),x),Nt(Ot(new be(1.25,.16,4.1),-.25,.26,0),x)),w.push(Nt(Ot(new be(1.95,.03,4.65),0,.185,0),"#B39C78"));for(let S of[-1,1])w.push(bt(.2,3.75,.2,"#5A3720",-.3,.34+1.875,S*1.82),bt(.28,.16,.28,"#7A4E2A",-.3,.42,S*1.82),bt(.26,.12,.26,"#7A4E2A",-.3,2.95,S*1.82)),w.push(Nt(Ot(new Mn(.2,.22,4),-.3,4.2,S*1.82,0,Math.PI/4,0),"#4A2C16")),w.push(Nt(Ot(new be(.55,.42,.55),.55,.55,S*1.95),x),Nt(Ot(new gn(.3,1),.55,.88,S*1.95,0,0,0,1,.6,1),(T,E,z,X)=>T.set(["#FF6B9A","#FFD23F","#FFFFFF","#B28DFF","#E63946","#7FD16B"][Math.floor(Ke(E*9+S,X*9)*6)])));w.push(bt(.1,2.05,3.5,"#6E4526",-.34,.34+.75+1.025,0));for(let[S,T]of[[1.06,.1],[3.17,.1]])w.push(bt(.16,T,3.62,"#8A5A30",-.27,S,0));for(let S of[-1,1])w.push(bt(.16,2.2,.1,"#8A5A30",-.27,2.12,S*1.76));for(let[S,T]of[[1,.02],[3.23,.02]])w.push(bt(.17,T,3.64,"#D4AF37",-.26,S,0));w.push(bt(.12,.5,2.7,"#5A3720",-.28,3.55,0));for(let S of[-1,1])w.push(Nt(Ot(new be(1.25,.08,4.5),-.3+S*.5,4.22,0,0,0,-S*.62),(T,E,z,X)=>T.set(Math.floor((X+3)*4.5)%2?"#B5532F":"#C8653A")));w.push(bt(.16,.16,4.6,"#7A3A1E",-.3,4.55,0))}else if(h==="signpost")w.push(Gt(.08,.1,3.2,"#5B3A1F",0,1.6,0,6));else if(h==="gate"){for(let x of[-1,1])w.push(Nt(Ot(new be(1.1,5.2,1.1),0,2.6,x*4.6),se(.8)));w.push(Nt(Ot(new be(1.2,.9,10.4),0,5.6,0),se(.8)))}else if(h==="fountain")w.push(Nt(Ot(new me(v.r,v.r+.15,.7,8),0,.35,0),"#D9CBB0"),Gt(.45,.6,1.8,"#CDBB9C",0,.9,0,8),Gt(1.1,.4,.35,"#D9CBB0",0,1.9,0,8));else if(h==="lamp")w.push(Gt(.06,.09,3.3,"#2E2E2E",0,1.65,0,6));else if(h==="pier"){w.push(Nt(Ot(new be(v.w,.22,v.d),0,0,0),(x,S,T,E)=>De(x,"#7E5B3A","#A47A50",Math.floor((S+50)*1.6)%2*.6+.2)));for(let x=0;x<=Math.floor(v.w/4);x++)for(let S of[-1,1])w.push(Gt(.12,.12,4,"#5B3F27",-v.w/2+x*4,-2,S*(v.d/2-.1),6))}else if(h==="boat"||h==="canoe"){let x=h==="canoe"?6.5:5.2,S=h==="canoe"?.85:1.7;w.push(Nt(Ot(new Ee(1,14,6,0,Se,Math.PI/2,Math.PI/2),0,.42,0,0,0,0,x/2,.5,S/2),h==="canoe"?"#3B2A1E":(T,E,z)=>De(T,"#2A6F97","#F1ECE2",z*-2+.2))),h==="boat"&&w.push(bt(.25,.1,S*.8,"#7B5534",0,.38,0))}else if(h==="logs")for(let x=0;x<6;x++)w.push(Nt(Ot(new me(.28,.28,v.w,8),0,.3+(x>3?.48:0),(x%4-1.5)*.48*(x>3?.6:1),0,0,Math.PI/2),"#8A6240"));else if(h==="well"){w.push(Gt(v.r,v.r+.1,.9,"#B8A88A",0,.45,0,12));for(let x of[-1,1])w.push(Gt(.06,.06,2.2,"#5B3A1F",x*.9,1.1,0,5));w.push(Nt(Ot(new me(.01,1.2,.6,4),0,2.4,0,0,Math.PI/4,0),"#7B5534"))}else if(h==="lighthouse")w.push(Nt(Ot(new me(2,3,17,16),0,8.5,0),(x,S,T)=>x.set(Math.floor((T+8.5)/3)%2?"#D62828":"#FBF7EF"))),w.push(Gt(2.6,2.6,.4,"#2E2E2E",0,17.2,0,16),Gt(1.6,1.6,1.8,"#9FD8FF",0,18.3,0,12),Nt(Ot(new Mn(1.9,1.4,16),0,19.9,0),"#D62828")),w.push(bt(.15,2.2,1,"#5B3A1F",3,1.1,0));else if(h==="fwall"){let x=Math.max(2,Math.round(v.w/2));for(let S=0;S<x;S++){let T=v.h*(.6+.4*Ke(v.x+S,v.z));w.push(Nt(Ot(new be(v.w/x+.05,T,v.d),-v.w/2+(S+.5)*v.w/x,T/2,0),(E,z,X,k)=>De(E,"#8E8576","#B8AE9B",.4+Ke(Math.round(z*2+v.x),Math.round(X*2))*.5)))}}else if(h==="ftower")w.push(Nt(Ot(new me(v.r*.92,v.r,v.h,12),0,v.h/2,0),(x,S,T,E)=>De(x,"#8E8576","#B8AE9B",.4+Ke(Math.round(S*2+E),Math.round(T*2))*.5)));else if(h==="campfire")for(let x=0;x<9;x++){let S=x/9*Se;w.push(Ot(Nt(new ni(.22,0),"#8A857B"),Math.cos(S)*.75,.12,Math.sin(S)*.75))}else if(h==="square"){w.push(Nt(Ot(new be(v.w,.2,v.d),0,-.02,0),(x,S,T,E)=>De(x,"#CBB894","#E2D2B2",(Math.floor(S/1.5)+Math.floor(E/1.5))%2*.5+Ke(Math.floor(S/1.5),Math.floor(E/1.5))*.35)));for(let[x,S]of[[-20,-26],[20,-26],[-20,26],[20,26]])w.push(Nt(Ot(new me(3.2,3.4,.5,14),x,.25,S),"#9C8466"),Nt(Ot(new gn(2.8,1),x,.6,S,0,0,0,1,.3,1),(T,E,z,X)=>T.set(["#FF6B9A","#FFD23F","#FFFFFF","#B28DFF","#E63946"][Math.floor(Ke(E*3,X*3)*5)])))}return w}let xe=[],Le=[],Kt=[],ke=[],Ae=[],fe=null,Xe="";for(let v of l.sites){let w=ce(v),h=new we;if(h.position.set(v.x,v.float?c+.15:v.y,v.z),h.rotation.y=-(v.rot||0),w.length){let x=new Vt(nn(w),new Te({vertexColors:!0,side:Be}));x.castShadow=!0,x.receiveShadow=!0,h.add(x)}if(v.kind==="palm"){let x=new Vt(qt.palm[0],zt.palm);x.scale.setScalar(2.4*(v.s||1)),x.castShadow=!0,h.add(x)}if(v.kind==="board"){let x=new Vt(new xn(2.6,.46),new Te({map:Q("\u{1F4DC} \u0637\u0644\u0628\u0627\u062A \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",1024,180,96,"#5A3720","#FFE7A8")}));x.position.set(-.215,3.55,0),x.rotation.y=Math.PI/2,h.add(x),fe=di(1024,600,()=>{});let S=new Vt(new xn(3.4,1.99),new Te({map:fe,emissive:"#2A1C10",emissiveIntensity:.25}));S.position.set(-.28,2.12,0),S.rotation.y=Math.PI/2,h.add(S);for(let T of[-1,1]){let E=new we;E.position.set(.25,3.9,T*2.05);let z=new Vt(new me(.09,.11,.26,6),new Te({color:"#FFD27A",emissive:"#FFB347",emissiveIntensity:.9}));z.position.y=-.3,E.add(z);let X=new Vt(new Mn(.13,.12,6),new Te({color:"#2E2E2E"}));X.position.y=-.12,E.add(X);let k=new Vt(new me(.008,.008,.25,4),new Te({color:"#2E2E2E"}));k.position.y=0,E.add(k);let N=new qn(new Un({map:r,color:"#FFC85A",transparent:!0,opacity:.85,depthWrite:!1,blending:zn}));N.position.y=-.3,N.scale.setScalar(1.3),E.add(N),Le.push(N),h.add(E),Ae.push(E)}}if(v.kind==="signpost"&&["\u26F0\uFE0F \u0642\u0645\u0629 \u0627\u0644\u0633\u062D\u0627\u0628","\u{1F3D8}\uFE0F \u0642\u0631\u064A\u0629 \u0627\u0644\u0637\u064A\u0646","\u{1F334} \u0628\u0633\u0627\u062A\u064A\u0646 \u0627\u0644\u0631\u0637\u0628","\u{1F5FC} \u0627\u0644\u0645\u0646\u0627\u0631\u0629"].forEach((x,S)=>{let T=new Vt(new xn(1.9,.42),new Te({map:Q(x,512,112,54),side:Be}));T.position.set(0,2.9-S*.5,0),T.rotation.y=[Math.PI/2,0,Math.PI,-Math.PI/2][S]+.2,T.translateX(.95),h.add(T)}),v.kind==="gate"){let x=new Vt(new xn(4.2,.8),new Te({map:Q("\u26F0\uFE0F \u0637\u0631\u064A\u0642 \u0627\u0644\u0642\u0645\u0629",512,100,58),side:Be}));x.position.set(.62,5.6,0),x.rotation.y=Math.PI/2,h.add(x)}if(v.kind==="lamp"||v.kind==="lighthouse"){let x=new qn(new Un({map:r,color:"#FFC85A",transparent:!0,opacity:.8,depthWrite:!1,blending:zn}));x.position.y=v.kind==="lamp"?3.3:18.4,x.scale.setScalar(v.kind==="lamp"?1:7),h.add(x),Le.push(x)}if(v.kind==="fountain"){let x=new Vt(new Bn(v.r-.2,24),Wt[1]);x.rotation.x=-Math.PI/2,x.position.y=.55,h.add(x)}if(v.kind==="campfire"&&Kt.push(pn(h)),v.kind==="teahouse")for(let[x,S,T]of[[-.9,-3,Math.PI/2],[-.9,0,Math.PI/2+.3],[-.9,3,Math.PI/2-.2]]){let E=Ms({thobe:["#F2EEE4","#D9D2C3","#EDE3CF"][ke.length%3],bisht:null});E.root.position.set(x,0,S),E.root.rotation.y=T,h.add(E.root),ke.push(E)}i.add(h),xe.push({grp:h,x:v.x,z:v.z,st:v})}function pn(v){let w=new we,h=S=>new vn({color:S,transparent:!0,opacity:.9,depthWrite:!1,blending:zn});[["#FF5A1F",.32,.9],["#FF9A2E",.24,.7],["#FFE07A",.14,.45]].forEach(([S,T,E])=>{let z=new Vt(new Mn(T,E,10,1,!0),h(S));z.position.y=E/2+.1,w.add(z)});for(let S=0;S<3;S++){let T=new Vt(new me(.08,.08,1.1,6),new Te({color:"#5B3A1F"}));T.rotation.set(Math.PI/2,S/3*Math.PI,0),T.position.y=.12,w.add(T)}let x=new qn(new Un({map:r,color:"#FF8A2E",transparent:!0,opacity:.65,depthWrite:!1,blending:zn}));return x.position.y=.6,x.scale.setScalar(2.6),w.add(x),v.add(w),w}for(let v of t.restPoints)if(v.fire){let w=new we;w.position.set(v.fx,t.H(v.fx,v.fz),v.fz);let h=new Vt(nn(ce({kind:"campfire"})),new Te({vertexColors:!0}));w.add(h);for(let x of[.4,2.5]){let S=new Vt(new me(.22,.24,1.8,8),new Te({color:"#7A5434"}));S.rotation.set(0,x,Math.PI/2),S.position.set(Math.cos(x)*1.9,.22,Math.sin(x)*1.9),S.castShadow=!0,w.add(S)}Kt.push(pn(w)),i.add(w),xe.push({grp:w,x:v.x,z:v.z,st:{kind:"rest"}})}{let v=80*Math.PI/180,w=d.x+Math.cos(v)*10.1,h=d.z+Math.sin(v)*10.1,x=new we,S=[];S.push(Nt(Ot(new be(2.2,.03,3.2),0,.02,0),(E,z,X,k)=>E.set(Math.floor((k+2)*2.2)%2?"#9B2226":"#CA6702")));for(let[E,z]of[[-1.1,-1.6],[-1.1,1.6],[.9,-1.6],[.9,1.6]])S.push(Gt(.05,.05,2.4,"#6B4A2E",E,1.2,z,5));S.push(Nt(Ot(new be(2.4,.06,3.6),-.1,2.42,0,0,0,.1),(E,z,X,k)=>E.set(Math.floor((k+2)*2)%2?"#0A9396":"#E9D8A6")));for(let E=0;E<5;E++)S.push(Nt(Ot(new me(.28,.33,.6,8),-.7,.3,-1.2+E*.6),["#D4A373","#CCD5AE","#E9EDC9","#FAEDCD","#BC6C25"][E]));S.push(bt(.6,.4,.9,"#7B5534",.1,.2,1.1),bt(.5,.3,.5,"#B5838D",.1,.55,1.1));let T=new Vt(nn(S),new Te({vertexColors:!0,side:Be}));T.castShadow=!0,x.add(T),x.position.set(w,d.HS+.01,h),x.rotation.y=-Math.atan2(d.z-h,d.x-w),i.add(x)}let En=new Te({color:"#3A3A3A"}),pi=new Te({color:"#7B5534"}),mi=(v,w,h,x,S)=>{let T=new we;for(let z of[-1,1]){let X=new Vt(new me(.14,.18,x,6),pi);X.position.set(-Math.sin(S)*z*1.3,x/2,Math.cos(S)*z*1.3),X.castShadow=!0,T.add(X)}let E=new Vt(new be(.22,.22,2.9),pi);return E.position.y=x,E.rotation.y=-S,T.add(E),T.position.set(v,w,h),i.add(T),T};for(let v of t.zips){let w=[];for(let z=0;z<=v.L;z+=6){let X=v.at(z);w.push(new j(X.x,X.y,X.z))}let h=v.at(v.L);w.push(new j(h.x,h.y,h.z));let x=new Vt(new Si(new Yn(w),w.length,.04,4,!1),En);i.add(x);let S=Math.atan2(v.uz,v.ux);mi(v.S.x,d.HS-1,v.S.z,5.6,S),mi(v.E.x,t.H(v.E.x,v.E.z)-.2,v.E.z,4.6,S);for(let z of v.pts)if(z.tower){let X=new we;for(let[N,q]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let ct=new Vt(new me(.12,.16,12.6,5),En);ct.position.set(N*.9,6.1,q*.9),ct.rotation.set(q*.07,0,-N*.07),X.add(ct)}let k=new Vt(new be(2.4,.3,.6),En);k.position.y=12,k.rotation.y=-S+Math.PI/2,X.add(k),X.position.set(z.x,t.H(z.x,z.z)-.3,z.z),i.add(X)}let T=new Vt(new xn(2.4,.6),new Te({map:Q(`\u{1F6A1} ${v.name} ${v.icon}`,512,128,56),side:Be}));T.position.set(v.stand.x,d.HS+2.2,v.stand.z),T.rotation.y=-Math.atan2(v.stand.z-d.z,v.stand.x-d.x)+Math.PI/2,i.add(T);let E=new Vt(new me(.06,.06,2.4,6),pi);E.position.set(v.stand.x,d.HS+1.2,v.stand.z),i.add(E)}let Fn=new we;{let v=new Te({color:"#E63946"}),w=new Vt(new me(.11,.11,.08,14),En);w.rotation.x=Math.PI/2,w.position.y=2.4,Fn.add(w);let h=new Vt(new be(.3,.2,.04),v);h.position.set(0,2.38,.06),Fn.add(h);for(let E of[-1,1]){let z=new Vt(new me(.012,.012,.36,4),En);z.position.set(0,2.2,E*.17),z.rotation.x=E*.35,Fn.add(z)}let x=new Vt(new me(.022,.022,.62,8),new Te({color:"#2E2E2E"}));x.rotation.x=Math.PI/2,x.position.y=2.03,Fn.add(x);let S=new Vt(new me(.012,.012,1.3,4),v);S.position.set(0,1.68,0),Fn.add(S);let T=new Vt(new ci(.17,.025,6,18),v);T.rotation.x=Math.PI/2,T.scale.z=.72,T.position.y=1,Fn.add(T)}Fn.visible=!1,i.add(Fn);let Ei=new Te({color:"#C8A46A"}),Ti=new Te({color:"#E63946",side:Be});for(let v of t.anchors){let w=[new j(v.top.x,v.top.y+.8,v.top.z)];for(let E=1;E<=16;E++){let z=E/16,X=Qt(v.top.x,v.bot.x,z),k=Qt(v.top.z,v.bot.z,z);w.push(new j(X,Math.max(t.H(X,k),Qt(v.top.y,v.bot.y,z)-.6)+.25,k))}let h=new Vt(new Si(new Yn(w),40,.03,4,!1),Ei);i.add(h);let x=new Vt(new me(.06,.06,1.1,6),En);x.position.set(v.top.x,v.top.y+.5,v.top.z),i.add(x);let S=new Vt(new me(.03,.03,1.8,5),pi);S.position.set(v.bot.x,v.bot.y+.9,v.bot.z),i.add(S);let T=new Vt(new xn(.5,.32),Ti);T.position.set(v.bot.x+.25,v.bot.y+1.6,v.bot.z),i.add(T)}let Ln=[];{let v=nn([...Array(9)].map((k,N)=>{let q=N*.7,ct=.26+N%3*.06;return Nt(Ot(new Mn(.05,ct,5),Math.cos(q)*.07,ct/2,Math.sin(q)*.07,Math.sin(q)*.2,0,Math.cos(q)*.2),(Pt,Lt,Yt)=>De(Pt,"#4E7A3A","#9BBF7A",Yt/ct+.3))}).concat([Nt(Ot(new ci(.06,.012,5,12),0,.08,0,Math.PI/2),"#C8283A")],[...Array(6)].map((k,N)=>Nt(Ot(new Ee(.018,5,4),Math.cos(N)*.08,.3+N%2*.04,Math.sin(N)*.08),"#B99CF0")))),w=nn([Nt(Ot(new Ee(.11,12,6,0,Se,0,Math.PI/2),0,.02,0,0,0,0,1,.38,.8),(k,N,q,ct)=>De(k,"#8A8378","#D9D2C3",.5+Math.sin(Math.atan2(ct,N)*9)*.3)),Nt(Ot(new Ee(.11,12,6,0,Se,0,Math.PI/2),-.02,.09,0,0,0,1.1,1,.32,.8),(k,N,q,ct)=>De(k,"#7D776B","#CFC7B6",.5+Math.sin(Math.atan2(ct,N)*9)*.3)),Nt(Ot(new Ee(.03,10,8),.02,.05,0),"#FFF8EE")]),h=nn([bt(.7,.08,.7,"#6B4A2E",0,.42,0),...[-1,1].flatMap(k=>[-1,1].map(N=>Gt(.03,.03,.42,"#5B3A1F",k*.28,.21,N*.28,5))),Nt(Ot(new me(.27,.3,.55,12),0,.73,0),(k,N,q)=>De(k,"#C9963E","#E8C170",Math.floor((q+1)*9)%2?.2:.8)),Nt(Ot(new Mn(.33,.22,12),0,1.11,0),"#8C6A3A"),bt(.1,.06,.02,"#2A1C10",0,.55,.29),Nt(Ot(new me(.09,.11,.16,10),.24,.53,.18),"#E0A83A")]),x=nn([...Array(26)].map((k,N)=>{let q=N*.26;return Nt(Ot(new me(.018,.018,.55,4),Math.cos(q)*.3,.1+N%3*.05,Math.sin(q)*.3,Math.PI/2,q+.3,.2*(N%2?1:-1)),ct=>ct.set(N%3?"#7A5A3A":"#5E4228"))}).concat([Nt(Ot(new Bn(.27,12),0,.08,0,-Math.PI/2),"#5E4228"),Nt(Ot(new Ee(.06,8,6),.06,.12,.02,0,0,0,1,.78,1),"#EFE6D6"),Nt(Ot(new Ee(.06,8,6),-.07,.12,-.03,0,0,0,1,.78,1),"#E8DCC6")])),S=nn([Nt(Ot(new me(.004,.006,.42,4),0,.21,0),"#EFE6D6"),Nt(Ot(new Ee(.06,10,6),0,.25,0,0,0,0,.55,2.6,.12),(k,N,q)=>De(k,"#5A3A22","#D8B98A",.5+Math.sin(q*70)*.5))]),T=new Te({vertexColors:!0}),E=new vn({color:"#FFE38A",transparent:!0,opacity:.22,depthWrite:!1,blending:zn,side:Be}),z=new me(.18,.5,26,10,1,!0);z.translate(0,13,0),l.tasks.flatMap(k=>k.items.map(N=>({...N,task:k.id}))).forEach((k,N)=>{let q=new we;q.position.set(k.x,k.y,k.z);let ct=k.task==="thyme"?v:k.task==="pearl"?w:k.task==="honey"?h:x,Pt=new Vt(ct,T);Pt.castShadow=!0,Pt.rotation.y=Ke(k.x,k.z)*Se,q.add(Pt);let Lt=null;if(k.task==="feather"&&(Lt=new Vt(S,T),Lt.position.set(.05,.12,0),Lt.rotation.z=-.5,q.add(Lt)),k.task==="honey"){let jt=new Vt(new me(.07,.08,.14,10),new Te({color:"#F2A922",emissive:"#7A4A00",emissiveIntensity:.4}));jt.position.set(.24,.53,.18),q.add(jt),Lt=jt}let Yt=new Vt(z,E);q.add(Yt);let de=new qn(new Un({map:r,color:"#FFE38A",transparent:!0,opacity:.7,depthWrite:!1,blending:zn}));de.position.y=k.task==="honey"?.9:.35,de.scale.setScalar(k.task==="honey"?2.2:1.4),q.add(de),i.add(q),Ln.push({it:k,idx:N,grp:q,fe:Lt,beam:Yt,gl:de})})}function Hn(){if(!fe)return;let v=a.tasks.map(N=>`${N.id}:${N.done?"D":""}${N.got}`).join("|")+"|"+a.fish+"|"+a.track+"|"+(a.vq.caught?1:0);if(v===Xe)return;Xe=v;let w=fe.image,h=w.getContext("2d"),x=w.width,S=w.height,T=h.createLinearGradient(0,0,0,S);T.addColorStop(0,"#A9794A"),T.addColorStop(1,"#8E6238"),h.fillStyle=T,h.fillRect(0,0,x,S);for(let N=0;N<900;N++)h.fillStyle=`rgba(${60+N%5*20},${35+N%3*12},15,.25)`,h.fillRect(N*97.3%x,N*53.7%S,3,2);let E=318,z=270,X=18,k=22;a.tasks.forEach((N,q)=>{let ct=N.def,Pt=q%3,Lt=Math.floor(q/3),Yt=x-X-E-Pt*(E+18),de=k+Lt*(z+18),jt=N.id==="gazelle"?a.vq.caught?1:0:N.id==="fish"?Math.min(a.fish,ct.need):N.got,Ht=!N.done&&jt>=ct.need;h.save(),h.translate(Yt+E/2,de+z/2),h.rotate((q*37%7-3)*.008),h.fillStyle="rgba(0,0,0,.25)",h.fillRect(-E/2+6,-z/2+8,E,z),h.fillStyle=N.done?"#E4EFD8":"#F6E8C6",h.fillRect(-E/2,-z/2,E,z),h.strokeStyle=a.track===N.id&&!N.done?"#E63946":"#C9A86A",h.lineWidth=a.track===N.id&&!N.done?8:3,h.strokeRect(-E/2+4,-z/2+4,E-8,z-8),h.fillStyle=["#E63946","#2A9D8F","#457B9D"][q%3],h.beginPath(),h.arc(0,-z/2+16,10,0,Se),h.fill(),h.textAlign="center",h.textBaseline="middle",h.direction="rtl",h.font='72px -apple-system,system-ui,"Apple Color Emoji","Noto Color Emoji",sans-serif',h.fillStyle="#000",h.fillText(ct.icon,0,-z/2+78),h.fillStyle="#3A2614",h.font="900 34px -apple-system,system-ui,sans-serif",h.fillText(ct.name,0,-z/2+146);let ie=(l.zones.find(Xt=>Xt.id===ct.zone)||{}).name||"";h.font="700 25px -apple-system,system-ui,sans-serif",h.fillStyle="#6B4A2B",h.fillText(ct.need>1?`${ie} \xB7 ${jt}/${ct.need}`:ie,0,-z/2+186),h.font="900 30px -apple-system,system-ui,sans-serif",h.fillStyle="#9A6B00",h.fillText(`${ct.reward} \u{1FA99}`,0,-z/2+230),(N.done||Ht)&&(h.rotate(-.22),h.strokeStyle=N.done?"rgba(46,140,60,.85)":"rgba(214,40,57,.85)",h.lineWidth=6,h.strokeRect(-110,-40,220,64),h.fillStyle=h.strokeStyle,h.font="900 38px -apple-system,system-ui,sans-serif",h.fillText(N.done?"\u2714 \u062A\u0645":"\u062C\u0627\u0647\u0632 \u{1F392}",0,-8)),h.restore()}),fe.needsUpdate=!0}let on=360,Nn=new Float32Array(on*on),Z=new Float32Array(on*on),et=0,Rt=null;function At(v){let w=performance.now(),h=f*2/on;for(;et<on&&performance.now()-w<v;){let x=f-(et+.5)*h;for(let S=0;S<on;S++){let T=-f+(S+.5)*h,E=l.A(x,T),z=et*on+S;Nn[z]=d.rad(x,T)<230?t.H(x,T)-c:E,Z[z]=E>.4?l.flora(x,T,E,999,0).t:0}et++}return on-et}function kt(v=1024){et<on&&At(1e9);let w=document.createElement("canvas");w.width=w.height=on;let h=w.getContext("2d"),x=h.createImageData(on,on),S=f*2/on;for(let X=0;X<on;X++)for(let k=0;k<on;k++){let N=X*on+k,q=Nn[N],ct=Nn[Math.min(on-1,X+1)*on+k]-Nn[Math.max(0,X-1)*on+k],Pt=Nn[X*on+Math.min(on-1,k+1)]-Nn[X*on+Math.max(0,k-1)];if(q<.35)Os(An,"#BFE6EE","#2A6FA0",Me(-q/14,0,1));else{Os(An,"#E6D7A6","#86B55A",q/4),q>4&&Os(An,"#86B55A","#5F9446",(q-4)/120),An.lerp(cc.set("#2F6B33"),Me(Z[N],0,1)*.7),q>200&&An.lerp(cc.set("#A39B8B"),oe(200,330,q)),q>330&&An.lerp(cc.set("#E8E4DA"),oe(330,395,q));let Lt=Me(1+(ct*.55-Pt*.55)/S*.9,.6,1.3);An.multiplyScalar(Lt)}x.data[N*4]=An.r*255,x.data[N*4+1]=An.g*255,x.data[N*4+2]=An.b*255,x.data[N*4+3]=255}h.putImageData(x,0,0);let T=document.createElement("canvas");T.width=T.height=v;let E=T.getContext("2d");E.imageSmoothingEnabled=!0,E.drawImage(w,0,0,v,v);let z=(X,k)=>[(k+f)/(2*f)*v,(f-X)/(2*f)*v];E.lineCap="round",E.lineJoin="round";for(let X of l.roads)E.strokeStyle="rgba(120,80,40,.85)",E.lineWidth=v/520,E.setLineDash([v/260,v/400]),E.beginPath(),X.pts.forEach((k,N)=>{let[q,ct]=z(k.x,k.z);N?E.lineTo(q,ct):E.moveTo(q,ct)}),E.stroke();E.setLineDash([]);for(let X of l.rivers)E.strokeStyle="#3F93C8",E.lineWidth=v/340,E.beginPath(),X.pts.forEach((k,N)=>{let[q,ct]=z(k.x,k.z);N?E.lineTo(q,ct):E.moveTo(q,ct)}),E.stroke();for(let X of l.sites)if(["house","hut","reedhut","mudhif","teahouse","lighthouse"].includes(X.kind)){let[k,N]=z(X.x,X.z);E.fillStyle="#7A4A2A",E.fillRect(k-1.5,N-1.5,3,3)}return Rt=T,{canvas:T,x0:-f,x1:f,z0:-f,z1:f}}let Tt=0;function Pe(v,w,h,x,S){x&&(Fn.visible=x.mode==="zip",Fn.visible&&(Fn.position.set(x.x,x.y,x.z),Fn.rotation.y=-x.face));for(let z of Ln){let X=a.items[z.idx],k=!(X&&X.taken)&&(z.it.x-h.x)**2+(z.it.z-h.z)**2<1500*1500;if(z.grp.visible=k,!k)continue;let N=Math.hypot(z.it.x-h.x,z.it.z-h.z);z.beam.visible=N>6,z.beam.scale.set(1+N/220,1+N/500,1+N/220),z.gl.material.opacity=.55+Math.sin(v*3+z.it.x)*.2,z.fe&&z.it.task==="feather"&&(z.fe.rotation.y=v*.8)}Hn();for(let z of Ae)z.rotation.z=Math.sin(v*1.4+z.position.z)*.06;ft(h.x,h.z,h.y);let T=Bt(S*.45);G(h.x,h.z,S*.4),x&&b(x.x,x.z),et<on&&!T&&At(S*.15),Tt+=w;for(let z of Wt)z.normalMap.offset.set(Tt*.01,Tt*.006);Kt.forEach((z,X)=>{let k=.85+Math.sin(v*13+X*1.7)*.1+Math.sin(v*23+X)*.06;z.children.slice(0,3).forEach((N,q)=>{N.scale.set(1,k+q*.05,1),N.rotation.y=v*(1+q)})});for(let z of xe)z.grp.visible=Math.hypot(z.x-h.x,z.z-h.z)<(z.st.kind==="lighthouse"?4e3:z.st.kind==="house"||z.st.kind==="mudhif"?1600:700);for(let z of ke)z.head.rotation.y=Math.sin(v*.6+z.root.position.x)*.35;for(let z of ee)z.m.material.map.offset.y=-v*.9;let E=26e3/1400*11;tt.position.x=Math.round(h.x/E)*E,tt.position.z=Math.round(h.z/E)*E}function J(v,w,h){for(let T=0;T<3;T++)ft(v,w,h),Bt(1e9);let x=Math.floor(v/t.VC),S=Math.floor(w/t.VC);for(let[T,E,z]of ht){if(z>260)break;let X=(x+T)*100003+(S+E);_t.has(X)||(t.vegCell(x+T,S+E),_t.add(X))}G(v,w,1e9,0),Dt(v,w),U=null,b(v,w)}return{update:Pe,warm:J,colorIsland:y,mapShot:kt,pending:()=>ot.length+(et<on?1:0),buildSome:Bt,selectTerrain:ft,tiles:B,refill:Dt,nearChunks:pt,mid:le,far:W,sea:tt,mapRows:At}}var Wh={th:[.36,.28,.15,.02,-.12,-.24,-.2,.02,.29,.4],kn:[.05,.24,.28,.14,.08,.14,.58,1.05,.68,.16],ft:[.22,0,0,0,-.06,-.28,-.62,-.22,.06,.2]},Xh={th:[.42,.22,-.02,-.3,-.5,-.36,.06,.52,.8,.66],kn:[.32,.56,.48,.36,.5,1.42,1.95,1.7,.9,.42],ft:[.12,0,-.08,-.48,-.8,-.4,0,.2,.24,.18]};function br(i,t){let e=i.length,n=(t%1+1)%1*e,s=Math.floor(n),r=n-s,o=i[(s-1+e)%e],a=i[s%e],l=i[(s+1)%e],c=i[(s+2)%e];return .5*(2*a+(-o+l)*r+(2*o-5*a+4*l-c)*r*r+(-o+3*a-3*l+c)*r*r*r)}var Vo=["bx","bz","by","px","py","pry","prz","sx","sy","sz","nx","ny","Lsx","Lsz","Lsy","Le","Rsx","Rsz","Rsy","Re","Lhx","Lhz","Lk","La","Rhx","Rhz","Rk","Ra"],$1=new Set(["Lsx","Rsx"]),K1=(i,t,e)=>Ni.thigh*Math.cos(i)+Ni.shin*Math.cos(t-i)+Ni.ankle+(e<0?.13*Math.sin(-e):0);function Lf(){let i={},t={};for(let l of Vo)i[l]=0,t[l]=0;i.py=t.py=Ni.hip;let e={lookT:2,lookYaw:0,lastFace:null,turn:0,inited:!1};function n(l,c,d,f,m=0){return t[l+"hx"]=c,t[l+"k"]=d,t[l+"a"]=-f+c-d,t[l+"hz"]=m,K1(c,d,f)}function s(l,c,d,f,m=0){t[l+"sx"]=c,t[l+"sz"]=d,t[l+"e"]=f,t[l+"sy"]=m}function r(){for(let l of Vo)t[l]=0;t.py=Ni.hip}function o(l,c,d,f,m){r();let g=l.mode==="walk"&&!l.air&&!l.swim?l.speed:0,_=e.lastFace==null?0:wn(e.lastFace,l.face)/Math.max(f,.001);e.lastFace=l.face,e.turn=Ye(e.turn,Me(_,-4,4),6,f);let R=0;if(l.mode==="faint"){let Mt=Math.min(1,l.faintT*2.6);t.bx=-1.47*Mt,t.by=-.86*Mt,t.sx=.05,t.nx=.15*Mt,n("L",.05,.15,.1,.16),n("R",0,.25,.1,.12),s("L",.2,1.15*Mt+.1,.3),s("R",.1,.9*Mt+.1,.5);return}if(l.mode==="zip"&&c.zip){let Mt=c.zip.v||0;t.bx=-.05-.12*oe(4,27,Mt)+.05*Math.sin(d*2.3),t.bz=.03*Math.sin(d*1.7),s("L",2.92,.12,.18),s("R",2.92,.12,.18),t.py=Ni.hip-.02,n("L",.62+.08*Math.sin(d*2),.85,.2),n("R",.48+.08*Math.sin(d*2+1),.7,.2),t.sx=.06,t.nx=-.15;return}if(l.mode==="climb"&&c.climbing){let Mt=c.climbing.t*3.4,vt=Math.sin(Mt),It=Math.sin(Mt+1.6);t.bx=-.2,t.sx=.12,t.nx=-.35,t.py=Ni.hip-.12,s("L",2.45+.38*vt,.22,.55-.42*vt),s("R",2.45-.38*vt,.22,.55+.42*vt),n("L",.85+.38*It,1.25-.38*It,.45,.1),n("R",.85-.38*It,1.25+.38*It,.45,.1);return}if(l.mode==="fish"){let Mt=c.fishing?oe(c.fishing.bite-.6,c.fishing.bite,c.fishing.t):0,vt=Math.sin(d*1.6)*.012,It=n("L",.14,.12,0,.05),qt=n("R",-.12,.08,0,.07);t.py=Math.max(It,qt)-.005,t.pry=.1,t.sy=-.18,t.sx=.06-Mt*.2+vt,t.nx=.18,s("R",.5+Mt*.5,-.12,1.25-Mt*.4),s("L",.82+Mt*.45,-.2,.78-Mt*.3);return}if(l.mode==="glide"){s("L",2.6,.45,.4),s("R",2.6,.45,.4),n("L",.25,.4,.15),n("R",.15,.3,.15);return}if(l.mode==="lift"||l.mode==="carry"){s("L",2.2+Math.sin(d*12)*.5,1.2,.6),s("R",2+Math.sin(d*11+1)*.5,1.2,.6),n("L",.5+Math.sin(d*9)*.4,.8,.2),n("R",.3+Math.sin(d*9+2)*.4,.9,.2);return}if(l.swim){let Mt=oe(.12,.6,l.speed),vt=l.hopPh||0;t.bx=Qt(.12,1.32,Mt),t.by=Qt(-.8,-.42,Mt),t.nx=Qt(.05,-.75,Mt);for(let[It,qt]of[["L",0],["R",Math.PI]]){let $t=vt+qt,pe=Math.sin(d*2.6+qt);t[It+"sx"]=Qt(.45+.25*pe,-(Math.PI+$t),Mt),t[It+"sz"]=Qt(1.15,.15,Mt),t[It+"e"]=Qt(.65,1.1*Math.max(0,Math.sin($t)),Mt);let zt=Math.sin(vt*2.4+qt),ne=Qt(.5+.3*Math.sin(d*2.6+qt),.22*zt,Mt),he=Qt(.95+.4*Math.sin(d*2.6+qt+1),.28+.22*Math.sin(vt*2.4+qt+1),Mt);n(It,ne,he,Qt(-.2,-.6,Mt),.06)}t.sy=.15*Math.sin(vt)*Mt,t.pry=-.1*Math.sin(vt)*Mt;return}if(l.air&&l.mode==="walk"){let Mt=oe(.6,-1.6,l.vy),vt=oe(-5.5,-8.5,l.vy);if(n("L",Qt(.78,.38,Mt),Qt(1.15,.38,Mt),.1),n("R",Qt(.08,.14,Mt),Qt(.62,.28,Mt),Qt(-.4,.1,Mt)),s("L",Qt(1.25,.45,Mt),Qt(.2,.85,Mt),Qt(.6,.35,Mt)),s("R",Qt(.95,.35,Mt),Qt(.2,.85,Mt),Qt(.6,.35,Mt)),t.sx=Qt(.12,.04,Mt),t.py=Ni.hip,vt>0){for(let[It,qt]of[["L",0],["R",2]])t[It+"sz"]=Qt(t[It+"sz"],1.7+.45*Math.sin(d*13+qt),vt),t[It+"sx"]=Qt(t[It+"sx"],.6*Math.sin(d*11+qt),vt);n("L",Qt(t.Lhx,.45+.4*Math.sin(d*10),vt),.6,0),n("R",Qt(t.Rhx,.45+.4*Math.sin(d*10+3),vt),.7,0)}return}let p=oe(.12,.55,g),y=Qt(.5,1,oe(.45,1.35,g))*(1+.16*oe(4.7,6.3,g));R=oe(2,3.6,g);let P=oe(4.7,6.3,g),F=l.sneak?1:0,I=(l.hopPh||0)/Se,B=Me((l.landT||0)/.25,0,1),D=Me((l.stun||0)/.9,0,1),A=Mt=>({th:Qt(br(Wh.th,Mt),br(Xh.th,Mt),R)*y*p,kn:Qt(br(Wh.kn,Mt),br(Xh.kn,Mt),R)*Qt(.8,1,y)*p,ft:Qt(br(Wh.ft,Mt),br(Xh.ft,Mt),R)*p}),L=A(I),$=A(I+.5),O=1-p,ot=Math.sin(d*.45);L.th+=O*.035,$.th-=O*.03,L.kn+=O*(.05+.04*Math.max(0,-ot)),$.kn+=O*(.07+.05*Math.max(0,ot));for(let Mt of[L,$])Mt.th+=F*.34+B*.48,Mt.kn+=F*.6+B*1,Mt.ft*=1-B;let dt=n("L",L.th,L.kn,L.ft,.025+O*.03),st=n("R",$.th,$.kn,$.ft,.025+O*.03),wt=R*.045*Math.pow(Math.max(0,Math.cos(Se*2*(I-.43))),2);t.py=Math.max(dt,st)+wt-.004,t.prz=Qt(.045,.03,R)*Math.sin(Se*I)*p+O*.02*ot,t.px=.016*Math.sin(Se*I)*p*(1-R)-O*.012*ot,t.pry=-.13*(L.th-$.th)*p,t.sy=-1.7*t.pry;let ft=Math.sin(d*1.65)*.012*O;t.sx=.03*p+.13*R+.07*P+F*.32+B*.3+ft-D*.28,t.sz=-t.prz*.7,t.bz=Me(-e.turn*g*.018,-.2,.2);let Bt=Qt(.85,.62,R)+.18*P;for(let[Mt,vt]of[["L",$],["R",L]]){let It=Bt*vt.th,qt=It+R*.02+F*.25+B*.5+D*1.5+O*.03;s(Mt,qt,Qt(.09,.13,R)+O*.02,Qt(.2+.32*Math.max(0,It),1.5+.35*It,R)+F*.5+D*1.6+O*.08,0)}c.vq&&c.vq.caught&&!c.vq.delivered&&s("R",-.12+t.Rsx*.25,.14,.5),e.lookT-=f;let gt=0;m?gt=Me(wn(Math.PI/2-l.face,m),-1.25,1.25):O>.8&&(e.lookT<0&&(e.lookT=2.5+Math.random()*3.5,e.lookYaw=Math.random()<.45?0:(Math.random()-.5)*1.6),gt=e.lookYaw),t.ny=-(t.pry+t.sy)+gt*.75,t.sy+=gt*.25,t.nx=-t.sx*.65+D*-.2}function a(l,c,d){let f=d?22:12;for(let m of Vo)Number.isFinite(t[m])||(t[m]=m==="py"?Ni.hip:0);for(let m of Vo)i[m]=$1.has(m)?Sn(i[m],t[m],f,c):Ye(i[m],t[m],m==="py"||m==="by"?18:f,c);l.body.rotation.set(i.bx,0,i.bz),l.pelvis.position.set(i.px,i.py,0),l.pelvis.rotation.set(0,i.pry,i.prz),l.spine.rotation.set(i.sx,i.sy,i.sz),l.neck.rotation.set(i.nx*.4,i.ny*.4,0),l.head.rotation.set(i.nx*.6,i.ny*.6,0);for(let m of l.arms){let g=m.s>0?"L":"R";m.sh.rotation.set(-i[g+"sx"],m.s*i[g+"sy"],m.s*i[g+"sz"]),m.el.rotation.x=-i[g+"e"]}for(let m of l.legs){let g=m.s>0?"L":"R";m.hp.rotation.set(-i[g+"hx"],0,m.s*i[g+"hz"]),m.kn.rotation.x=i[g+"k"],m.an.rotation.x=i[g+"a"]}}return{update(l,c,d,f,m,g){if(!e.inited){e.inited=!0,o(c,d,f,m,g);for(let _ of Vo)i[_]=t[_]}return o(c,d,f,m,g),a(l,m,c.mode==="walk"&&!c.swim),i},reset(){e.inited=!1,e.lastFace=null},pose:i}}var Ar=Math.PI/180;function Df(i,t,e){let n=i.renderer,s=t.M,r=t.V,o=e.S,a=new Zr,l=new Ie("#CFDFE8");a.background=l,a.fog=new Yr(l,320,3600);let c=new Xn(62,.5,.25,7e3),d={time:{value:0},wind:{value:0},see:{value:new fn(0,0,0,0)}},f=hn(4242),m=new _o("#D2E6FF","#6A8A4E",1);a.add(m);let g=new j(.5,.72,.45).normalize(),_=new Mo("#FFE9C4",2.9);_.castShadow=!0,_.shadow.mapSize.set(2048,2048),Object.assign(_.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:1,far:180}),_.shadow.bias=-5e-4,_.shadow.normalBias=.03,_.shadow.radius=2.5,a.add(_,_.target);let R=yf("#3A7FD6","#9CCBF2","#EFE7D6",new j(.6,.35,-.7));a.add(R);let p=wf(),y=Sf(),P=new Te({vertexColors:!0}),F=new Te({vertexColors:!0,flatShading:!0}),I=new Te({vertexColors:!0,flatShading:!0}),B=[],D=(J,at)=>J*100003+at,A=t.HALF,L=64,$=Math.ceil(A*2/L),O=-$*L/2;function ot(J,at,v,w,h){let x=s.rad(J,v),S=r.Hv(J,v);if(S<=at+.02&&S<1e8){let z=J-r.x,X=v-r.z,k=Math.abs(X),N=un(z*.07+11,X*.07),q=yn(z*.5,X*.5);De(h,"#5FAE3E","#9AD85E",N*1.3-.15+q*.2);let ct=Math.abs(X-r.riverZ(z));ct<2.4&&k<r.FLOOR+1&&z>-4&&h.lerp(ui.set(ct<1?"#8F8A62":"#D9C891"),oe(2.4,1.3,ct));let Pt=oe(1.2,5,at-r.VF)*oe(r.FLOOR-.5,r.FLOOR+4,k)+oe(.55,.9,w)*.8;if(Pt>0){let Lt=.5+.5*Math.sin(at*1.9+un(J*.05,v*.05)*4);De(No,"#B98F62","#DDBE8E",Lt),No.lerp(ui.set("#8E6A48"),yn(J*.35,at*.6)*.35),h.lerp(No,Me(Pt,0,1))}return z<0&&k<9&&h.lerp(ui.set("#A88C62"),oe(-2,-12,z)*oe(9,5,k)*.6),h}if(x<205){De(h,"#3E6E2E","#6E9A44",un(J*.06+3,v*.06)*1.2-.1),w>.8&&(De(ui,"#5E5A55","#A9A398",yn(J*.35+v*.2,at*1.6)*.8+yn(J*2,v*2+at)*.35),h.lerp(ui,oe(.8,1.3,w)));let z=s.nearest(J,v,at,1);return z&&z.d<z.p.hw+.9&&z.p.kind!=="bridge"&&h.lerp(ui.set("#9C7E55"),oe(z.p.hw+.9,z.p.hw-.2,z.d)*.85),x<s.RP+1&&h.set("#9A9388"),x>190&&h.lerp(ui.set("#5E8F3E"),oe(190,205,x)),h}return null}let dt=null;function st(){return!dt||!dt.pending()}{let J=di(64,256,(E,z,X)=>{E.clearRect(0,0,z,X);for(let k=0;k<X;k+=2){let N=6+yn(k*.06,1)*8,q=z-6-yn(k*.06,5)*8,ct=E.createLinearGradient(N,0,q,0);ct.addColorStop(0,"rgba(150,118,78,0)"),ct.addColorStop(.2,"rgba(150,118,78,.95)"),ct.addColorStop(.8,"rgba(140,108,70,.95)"),ct.addColorStop(1,"rgba(140,108,70,0)"),E.fillStyle=ct,E.fillRect(N,k,q-N,2)}for(let k=0;k<260;k++)E.fillStyle=`rgba(${90+k%5*20},${80+k%7*12},${60+k%3*10},.6)`,E.beginPath(),E.arc(8+Math.random()*(z-16),Math.random()*X,.5+Math.random()*1.4,0,Se),E.fill()},[1,1]),at=[],v=[],w=[],h=0,x=E=>{if(E.length<2)return;let z=0;E.forEach((X,k)=>{let N=E[Math.max(0,k-1)],q=E[Math.min(E.length-1,k+1)],ct=q.x-N.x,Pt=q.z-N.z,Lt=Math.hypot(ct,Pt)||1,Yt=-Pt/Lt,de=ct/Lt,jt=X.hw+.35;if(k&&(z+=Math.hypot(X.x-E[k-1].x,X.z-E[k-1].z)/6),at.push(X.x+Yt*jt,X.y+.06,X.z+de*jt,X.x-Yt*jt,X.y+.06,X.z-de*jt),v.push(0,z,1,z),k){let Ht=h+(k-1)*2;w.push(Ht,Ht+2,Ht+1,Ht+1,Ht+2,Ht+3)}}),h+=E.length*2};for(let E of s.segs){let z=[];for(let X of E.pts)X.kind==="bridge"||X.kind==="stones"||X.kind==="stairs"?(x(z),z=[]):z.push(X);x(z)}let S=new Ze;S.setAttribute("position",new qe(new Float32Array(at),3)),S.setAttribute("uv",new qe(new Float32Array(v),2)),S.setIndex(w),S.computeVertexNormals();let T=new Vt(S,new Te({map:J,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,side:Be}));T.receiveShadow=!0,a.add(T)}{let J=s.stream,at=[],v=[],w=[],h=0;for(let T=J.r0;T<=J.r1;T+=1){let E=s.x+Math.cos(J.a)*T,z=s.z+Math.sin(J.a)*T,X=-Math.sin(J.a),k=Math.cos(J.a),N=s.Hnat(E,z)+.5;if(at.push(E+X*2.2,N,z+k*2.2,E-X*2.2,N,z-k*2.2),v.push(0,T/4,1,T/4),h){let q=(h-1)*2;w.push(q,q+2,q+1,q+1,q+2,q+3)}h++}let x=new Ze;x.setAttribute("position",new qe(new Float32Array(at),3)),x.setAttribute("uv",new qe(new Float32Array(v),2)),x.setIndex(w),x.computeVertexNormals();let S=new Vt(x,new On({color:"#4AA6D8",specular:"#FFFFFF",shininess:140,normalMap:y,transparent:!0,opacity:.9,side:Be}));S.material.normalScale.set(.8,.8),a.add(S)}{let J=[],at=[],v=[],w=0;for(let S=-6;S<=r.VL+6;S+=.5){let T=r.riverZ(S),E=(r.riverZ(S+.1)-T)/.1,z=Math.hypot(1,E),X=-E/z,k=1/z,N=r.waterLevel(S);for(let q of[-1.35,1.35])J.push(r.x+S+X*q,N,r.z+T+k*q),at.push(S/3,q>0?1:0);if(w){let q=(w-1)*2;v.push(q,q+1,q+2,q+1,q+3,q+2)}w++}let h=new Ze;h.setAttribute("position",new qe(new Float32Array(J),3)),h.setAttribute("uv",new qe(new Float32Array(at),2)),h.setIndex(v),h.computeVertexNormals();let x=new Vt(h,new On({color:"#3D9FD8",specular:"#FFFFFF",shininess:140,normalMap:y,transparent:!0,opacity:.88}));x.material.normalScale.set(.7,.7),x.receiveShadow=!0,a.add(x)}let wt=(J,at,v,w,h)=>{let x=[Nt(Ot(new me(.13,.22,v*.45,6),0,v*.22,0),"#5A3E26")];for(let S=0;S<at;S++){let T=S/at,E=w*(1-T*.62),z=v*.42;x.push(Ot(Nt(new Mn(E,z,8,1),(X,k,N)=>De(X,h?"#1F4A2B":"#24572F",h?"#3F7A43":"#4E8C46",.25+(N/z+.5)*.6+(Ke(k*7,N*3)-.5)*.25)),0,v*.32+S*v*.22+z/2,0,0,J()*3,0))}return nn(x)},ft=()=>{let J=hn(43),at=[Nt(Ot(new me(.14,.22,2.6,6),0,1.3,0),"#5A3E26")];for(let[v,w,h,x]of[[0,3.1,0,1.35],[.7,2.6,.3,.95],[-.6,2.7,-.4,1],[.1,3.8,-.2,.9]])at.push(Ot(Nt(new gn(x,0),(S,T,E)=>De(S,"#2C6B33","#6FAE4E",.3+E/x*.35+(J()-.5)*.3)),v,w,h));return nn(at)},Bt=(J,at,v)=>Nt(Ot(new Mn(at*.9,J*.95,6,1,!0),0,J*.62,0),(w,h,x)=>De(w,v?"#1F4A2B":"#24572F",v?"#3F7A43":"#4E8C46",.3+(x/J+.5)*.5)),gt={pine:$n(new Te({vertexColors:!0,flatShading:!0}),.006,2,d),tree:$n(new Te({vertexColors:!0,flatShading:!0}),.01,1.2,d),palm:$n(new Te({vertexColors:!0,side:Be}),.012,2.8,d),grass:$n(new Te({vertexColors:!0,side:Be}),.5,0,d)},Mt={pineA:wt(hn(5),4,7.5,2,!1),pineB:wt(hn(6),3,6,2.5,!0),oak:ft()};function vt(J,at,v,w={}){let h=new Map,x=new dn,S=w.size||26;for(let T of v){let E=D(Math.floor(T.x/S),Math.floor(T.z/S));h.has(E)||h.set(E,[]),h.get(E).push(T)}for(let T of h.values()){let E=new ai(J,at,T.length),z=0,X=0;T.forEach((N,q)=>{x.position.set(N.x,N.y,N.z),x.rotation.set(N.rx||0,N.ry||0,N.rz||0),N.s3?x.scale.set(...N.s3):x.scale.setScalar(N.s||1),x.updateMatrix(),E.setMatrixAt(q,x.matrix),N.color&&E.setColorAt(q,_n.set(N.color)),z+=N.x,X+=N.z}),E.castShadow=!!w.cast,E.receiveShadow=!0,E.computeBoundingSphere(),a.add(E);let k=null;w.lod&&(k=new ai(w.lod,I,T.length),k.instanceMatrix=E.instanceMatrix,k.computeBoundingSphere(),k.visible=!1,a.add(k)),B.push({m:E,lo:k,x:z/T.length,z:X/T.length,far:w.far||105,lodAt:w.lodAt||62,small:!!w.small})}}let It=t.veg;vt(Mt.pineA,gt.pine,It.pineA,{cast:!0,lod:Bt(7.5,2,!1)}),vt(Mt.pineB,gt.pine,It.pineB,{cast:!0,lod:Bt(6,2.5,!0)}),vt(Mt.oak,gt.tree,It.oak,{cast:!0,lod:Ot(Nt(new gn(1.5,0),"#3E7D3A"),0,3.1,0)});let qt=nn([Ot(Nt(new gn(.85,0),(J,at,v,w)=>De(J,"#1E4A24","#4C8A3E",.35+v*.4+Ke(at*9,w*9)*.3)),0,.55,0,0,0,0,1,.95,1),Ot(Nt(new gn(.6,0),(J,at,v)=>De(J,"#2A5C2C","#5E9E48",.5+v*.5)),.25,1.25,.1)]),$t=ic(F,d);vt(qt,$t,It.hedge,{size:26,far:70,cast:!1}),vt(Uo(),$t,It.bush,{size:30,far:70,small:!0}),vt(Bo(),F,It.rock,{size:30,far:120});let pe=[Sr(hn(3),1.1,9),Sr(hn(8),-.8,10),Sr(hn(15),.5,8)],zt=nn([Nt(Ot(new me(.25,.4,8,5),0,4,0),"#8B6A3E"),Nt(Ot(new gn(1.6,0),0,8.4,0,0,0,0,1,.55,1),"#3A7F34")]);pe.forEach((J,at)=>vt(J,gt.palm,It.palm[at].map(v=>({...v,s:v.s*2.2})),{cast:!0,lod:zt,lodAt:70,far:260})),[sc(hn(21),"#E8443A",["#2F8A3C","#7CCB55"]),sc(hn(33),null,["#3B9447","#8AD460"]),sc(hn(41),"#FFB52E",["#2C7F3A","#6FC24F"])].forEach((J,at)=>vt(J,gt.tree,It.fruit[at].map(v=>({...v,s:v.s*1.5})),{cast:!0,far:220})),vt(Uo(),F,It.vbush,{size:30,far:90,small:!0}),vt(Bo(),F,It.vrock,{size:30,far:70,small:!0}),vt(Nt(new ni(.5,1),(J,at,v,w)=>De(J,"#9C7A56","#D2B387",.45+v*.9+(Ke(at*5,w*5)-.5)*.4)),F,It.boulder,{size:40,far:260}),vt(nn([Ot(Nt(new me(.15,.22,1.6,5),"#6B4A2A"),0,.8,0),Ot(Nt(new gn(1.2,0),(J,at,v)=>De(J,"#4F7F3A","#8DB45E",v/1.2*.5+.5)),0,2.3,0,0,0,0,1,.85,1)]),F,It.rim,{size:40,far:300});{let J=hn(5151),at=(N,q)=>[r.x+N,r.z+q],v=(N,q,ct)=>r.CAMPS.some(Pt=>Math.hypot(N-Pt.x,q-Pt.z)<ct),w=[],h=[],x=[];for(let N=0;w.length<6e3&&N<3e4;N++){let q=-3+J()*(r.VL+6),ct=(J()<.5?-1:1)*J()*(r.FLOOR+3);if(Math.abs(ct-r.riverZ(q))<1.15||v(q,ct,3.9))continue;let[Pt,Lt]=at(q,ct);t.slope(Pt,Lt)>.6||w.push({x:Pt,y:t.H(Pt,Lt)-.02,z:Lt,ry:J()*Se,s:.5+J()*.7})}let S=["#FF6B9A","#FFFFFF","#FFD23F","#B28DFF","#FF8C42","#FF4D6D","#7FD1FF"];for(let N=0;N<9e3&&h.length<2400;N++){let q=-2+J()*(r.VL+4),ct=(J()<.5?-1:1)*J()*(r.FLOOR-.3);if(Math.abs(ct-r.riverZ(q))<1.3||v(q,ct,3.9)||yn(q*.16,ct*.16)<.42)continue;let[Pt,Lt]=at(q,ct);h.push({x:Pt,y:t.H(Pt,Lt),z:Lt,ry:J()*Se*.25,s:1.2+J()*.8,color:S[Math.floor(yn(q*.3+40,ct*.3)*S.length*.999+J()*1.5)%S.length]})}for(let N=-4;N<r.VL+4;N+=.55)for(let q of[-1,1]){if(J()<.35)continue;let ct=r.riverZ(N)+q*(1.05+J()*.55);if(v(N,ct,5))continue;let[Pt,Lt]=at(N,ct);x.push({x:Pt,y:t.H(Pt,Lt)-.05,z:Lt,ry:J()*Se,s:.7+J()*.6})}vt(Oo(),gt.grass,w,{size:24,far:55,small:!0});let T=nn([Ot(Nt(new me(.007,.01,.24,3,1,!0),"#3E8E36"),0,.12,0),Ot(Nt(new Bn(.02,6),"#FFD54A"),0,.248,.004,-1,0,0)]),E=nn([0,1,2,3,4].map(N=>{let q=N/5*Se;return Ot(Nt(new Bn(.036,5),"#FFFFFF"),Math.cos(q)*.035,Math.sin(q)*.035,0,0,0,q)}));Ot(E,0,.245,0,-1,0,0),vt(T,$n(P,.8,0,d),h.map(N=>({...N,color:null})),{size:24,far:45,small:!0}),vt(E,$n(new Te({vertexColors:!0,side:Be}),.8,0,d),h,{size:24,far:45,small:!0}),vt(rc(),$n(P,.09,.2,d),x,{size:24,far:70,small:!0});let z=[],X=[];for(let N of s.ALL){if(N.kind==="bridge"||N.kind==="stones"||N.k%2)continue;let q=N.seg.pts,ct=-(q[Math.min(N.k+1,q.length-1)].z-q[Math.max(N.k-1,0)].z),Pt=q[Math.min(N.k+1,q.length-1)].x-q[Math.max(N.k-1,0)].x,Lt=Math.hypot(ct,Pt)||1;for(let Yt of[-1,1]){let de=N.hw+.15+f()*1.4,jt=N.x+ct/Lt*de*Yt,Ht=N.z+Pt/Lt*de*Yt,ie=t.H(jt,Ht),Xt=f();Xt<.55?z.push({x:jt,y:ie-.02,z:Ht,ry:f()*Se,s:.6+f()*.7}):Xt<.8&&X.push({x:jt,y:ie,z:Ht,ry:f()*Se,s:.7+f()*.6})}}vt(Oo(),gt.grass,z,{size:30,far:45,small:!0});let k=nn([...Array(7)].map((N,q)=>{let ct=q/7*Se,Pt=.55+q%3*.12,Lt=[],Yt=[];for(let jt=0;jt<6;jt++){let Ht=jt/6,ie=(jt+1)/6,Xt=Math.sin(Ht*Math.PI)*.09,re=Math.sin(ie*Math.PI)*.09,ae=[Math.cos(ct)*Pt*Ht,Math.sin(Ht*Math.PI*.8)*.3,Math.sin(ct)*Pt*Ht],Ve=[Math.cos(ct)*Pt*ie,Math.sin(ie*Math.PI*.8)*.3,Math.sin(ct)*Pt*ie],Ne=-Math.sin(ct),sn=Math.cos(ct);Lt.push(ae[0]-Ne*Xt,ae[1],ae[2]-sn*Xt,Ve[0]-Ne*re,Ve[1],Ve[2]-sn*re,ae[0]+Ne*Xt,ae[1],ae[2]+sn*Xt,ae[0]+Ne*Xt,ae[1],ae[2]+sn*Xt,Ve[0]-Ne*re,Ve[1],Ve[2]-sn*re,Ve[0]+Ne*re,Ve[1],Ve[2]+sn*re);for(let ln=0;ln<6;ln++)De(_n,"#2F6B2C","#79B356",Ht+.2),Yt.push(_n.r,_n.g,_n.b)}let de=new Ze;return de.setAttribute("position",new qe(new Float32Array(Lt),3)),de.setAttribute("color",new qe(new Float32Array(Yt),3)),de.computeVertexNormals(),de}));vt(k,$n(new Te({vertexColors:!0,side:Be}),.35,0,d),X,{size:30,far:50,small:!0})}let he=new we;a.add(he);{let J=di(256,128,(at,v,w)=>{at.clearRect(0,0,v,w);let h=hn(3);for(let x=0;x<22;x++){let S=v*(.18+h()*.64),T=w*(.42+h()*.28),E=18+h()*30,z=at.createRadialGradient(S,T,0,S,T,E);z.addColorStop(0,"rgba(255,255,255,.95)"),z.addColorStop(.6,"rgba(250,252,255,.55)"),z.addColorStop(1,"rgba(240,246,255,0)"),at.fillStyle=z,at.beginPath(),at.arc(S,T,E,0,Se),at.fill()}});for(let at=0;at<46;at++){let v=f()*Se,w=600+f()*6200,h=new qn(new Un({map:J,transparent:!0,opacity:.45+f()*.35,depthWrite:!1,fog:!1})),x=380+f()*520;h.scale.set(x,x*.38,1),h.position.set(Math.cos(v)*w,t.SEA+1400+f()*800,Math.sin(v)*w),he.add(h)}}dt=Ff({scene:a,G:t,U:d,camera:c,waterN:y,glowTex:p,colorBase:ot,S:o});let _e=(J,at=256,v=64,w=34)=>di(at,v,h=>{h.fillStyle="#8B5A2B",h.fillRect(0,0,at,v),h.strokeStyle="#E8C170",h.lineWidth=Math.max(4,v/16),h.strokeRect(4,4,at-8,v-8),h.fillStyle="#FFF3D6",h.font=`900 ${w}px -apple-system, "Geeza Pro", system-ui, sans-serif`,h.textAlign="center",h.textBaseline="middle";try{h.direction="rtl"}catch{}h.fillText(J,at/2,v/2+2)}),Jt=new Map;{let J=[];for(let w of s.bridges){w.seg.pts.slice(w.i,w.j+1).forEach((h,x)=>{if(h.gap)return;let S=w.seg.pts[Math.min(h.k+1,w.seg.pts.length-1)],T=Math.atan2(S.z-h.z,S.x-h.x);J.push(Ot(Nt(new be(.5,.07,1.45),(E,z,X,k)=>De(E,"#7A5634","#A57B4C",Ke(x,k*3)*.6+(X>0?.3:0))),h.x,h.y-.035,h.z,0,-T,0))});for(let h of[-1,1])for(let x of[.95,.45]){let S=[];for(let T=w.i-1;T<=w.j+1;T++){let E=w.seg.pts,z=E[Me(T,0,E.length-1)],X=E[Me(T+1,0,E.length-1)],k=E[Me(T-1,0,E.length-1)],N=X.x-k.x,q=X.z-k.z,ct=Math.hypot(N,q)||1;S.push(new j(z.x-q/ct*.72*h,z.y+x,z.z+N/ct*.72*h))}J.push(Nt(new Si(new Yn(S),S.length*2,.03,5),"#C9A46B"))}for(let h of[w.a,w.b])for(let x of[-1,1]){let S=h.seg.pts,T=S[Math.min(h.k+1,S.length-1)],E=S[Math.max(h.k-1,0)],z=T.x-E.x,X=T.z-E.z,k=Math.hypot(z,X)||1;J.push(Ot(Nt(new me(.09,.11,1.5,6),"#5C3A1A"),h.x-X/k*.8*x,h.y+.6,h.z+z/k*.8*x))}}for(let w of s.ALL)if(w.kind==="stairs"){let h=w.seg.pts,x=h[Math.min(w.k+1,h.length-1)],S=h[Math.max(w.k-1,0)],T=Math.atan2(x.z-S.z,x.x-S.x);J.push(Ot(Nt(new be(.9,.5,2.7),(E,z,X,k)=>De(E,"#7C766B","#ABA393",X+.4+Ke(w.k,k*5)*.3)),w.x,w.y-.25,w.z,0,-T+(Ke(w.k,3)-.5)*.08,0))}for(let{p:w,nx:h,nz:x,sz:S}of s.ledgeRocks)J.push(Ot(Nt(new ni(1,0).scale(S,S*(1.3+Ke(w.k,5)),S*.8),(T,E,z,X)=>De(T,"#5E5A55","#A9A398",.35+z*.2+Ke(E*5+w.k,X*5)*.3)),w.x+h*(w.hw+S),w.y+S*.3,w.z+x*(w.hw+S),Ke(w.k,2)*.4,Ke(w.k,4)*3,0)),w.k%6===0&&J.push(Ot(Nt(new ni(.25,0),"#8A847A"),w.x-h*(w.hw-.05),w.y+.08,w.z-x*(w.hw-.05)));for(let w of s.stones)J.push(Ot(Nt(new me(w.r,w.r*1.12,1.4,9),(h,x,S)=>De(h,"#7F7A72","#B7B1A6",S+.6+Ke(x*9,w.x)*.2)),w.x,w.y-.7,w.z,0,f()*3,0));{let w=s.rest[0],h=w.face,x=-Math.sin(h),S=Math.cos(h),T=w.x+Math.cos(h)*3,E=w.z+Math.sin(h)*3;for(let X of[-1,1])J.push(Ot(Nt(new me(.11,.13,3.4,7),"#5C3A1A"),T+x*2*X,w.y+1.7,E+S*2*X));J.push(Ot(Nt(new be(.2,.2,4.6),"#4F3420"),T,w.y+3.35,E,0,-h,0));let z=new Vt(new xn(3.4,.85),new Te({map:_e("\u26F0\uFE0F \u0637\u0631\u064A\u0642 \u0627\u0644\u0642\u0645\u0629",512,128,60),side:Be}));z.position.set(T,w.y+2.85,E),z.rotation.y=-h-Math.PI/2,a.add(z)}{let h=r.x+-6,x=r.z+5.5,S=t.H(h,x);J.push(Ot(Nt(new me(.08,.1,2.4,6),"#5C3A1A"),h,S+1.2,x));let T=new Vt(new xn(2.4,.6),new Te({map:_e("\u{1F3DE}\uFE0F \u0648\u0627\u062F\u064A \u0627\u0644\u063A\u0632\u0644\u0627\u0646",384,96,46),side:Be}));T.position.set(h,S+2.25,x),T.rotation.y=Math.PI/2,a.add(T)}for(let w of s.rest)if(w.flag){for(let S=0;S<6;S++)J.push(Ot(Nt(new ni(.22-S*.025,0),"#9D978C"),w.x+1.6,w.y+.15+S*.25,w.z+1.1));J.push(Ot(Nt(new me(.05,.06,2.4,6),"#5C3A1A"),w.x-1.4,w.y+1.2,w.z-1.1));let h=new Ze;h.setAttribute("position",new qe(new Float32Array([0,.32,0,0,-.32,0,1.05,0,0]),3)),h.computeVertexNormals();let x=new Vt(h,new Te({color:"#F4F1EA",side:Be}));x.position.set(w.x-1.4,w.y+2.05,w.z-1.1),a.add(x),Jt.set(w.id,x)}let at=_e("\u2B05 \u0644\u0644\u0642\u0645\u0629");for(let w of s.signs){let h=t.H(w.x,w.z);J.push(Ot(Nt(new me(.06,.07,1.9,6),"#5C3A1A"),w.x,h+.95,w.z));let x=new Vt(new xn(1.1,.28),new Te({map:at,side:Be}));x.position.set(w.x+Math.cos(w.a)*.45,h+1.65,w.z+Math.sin(w.a)*.45),x.rotation.y=-w.a+Math.PI,a.add(x)}for(let w of s.logs){let h=t.H(w.x,w.z);J.push(Ot(Nt(new me(.32,.38,4.2,8),(x,S,T)=>x.set(Math.abs(T)>2?"#C9A36B":"#5A3E26")),w.x,h+.35,w.z,0,w.a,Math.PI/2))}let v=new Vt(nn(J),new Te({vertexColors:!0,side:Be}));v.castShadow=!0,v.receiveShadow=!0,a.add(v)}let ye=200,Fe=new ai(new me(.22,.22,.05,20),new On({color:"#FFC93C",specular:"#FFF4C0",shininess:90,emissive:"#6B4A00",emissiveIntensity:.55}),ye);Fe.castShadow=!0,Fe.frustumCulled=!1,Fe.count=0,a.add(Fe);let le=s.plaza,W=s.RP,St=s.HS,rt=new we;rt.position.set(le.x,St,le.z),a.add(rt);let mt=[],K={flag:null,flagBase:null,bell:null,lanterns:[],water:null,drops:null,leaves:null,kiosk:null,cups:[],streaks:null,scope:null},pt=(J,at)=>[Math.cos(J*Ar)*at,Math.sin(J*Ar)*at],lt=new On({color:"#B5562A",specular:"#FFFFFF",shininess:120,transparent:!0,opacity:.85}),ht=new On({color:"#C9A13B",specular:"#FFE9A8",shininess:90});{let J=di(512,512,(te,ze,je)=>{te.fillStyle="#B9B1A3",te.fillRect(0,0,ze,je);for(let an=0;an<12;an++){let Tn=an*22,ei=Tn+22,Ss=Math.max(6,Math.round(Se*(Tn+11)/34));for(let as=0;as<Ss;as++){let eu=as/Ss*Se,nu=(as+1)/Ss*Se,uc=.82+(an*7+as*3)%5*.04;te.fillStyle=`rgb(${Math.round(196*uc)},${Math.round(186*uc)},${Math.round(168*uc)})`,te.beginPath(),te.arc(ze/2,je/2,ei-1.5,eu+.01,nu-.01),te.arc(ze/2,je/2,Math.max(0,Tn+1.5),nu-.01,eu+.01,!0),te.closePath(),te.fill()}}}),at=new Vt(new Bn(W,64),new Te({map:J}));at.rotation.x=-Math.PI/2,at.position.y=.03,at.receiveShadow=!0,rt.add(at);let v=[];for(let te=0;te<64;te++){let ze=te/64*Se;Math.abs(wn(ze,s.ENTRY_A))<.16||Math.abs(wn(ze,s.DECK_A))<.2||v.push(Ot(Nt(new be(1.36,.72,.55),(je,an,Tn,ei)=>De(je,"#8E877B","#B8AF9F",.4+Tn+Ke(te,ei*4)*.3)),Math.cos(ze)*(W-.1),.36,Math.sin(ze)*(W-.1),0,-ze+Math.PI/2,0))}for(let te=0;te<10;te++)v.push(Ot(Nt(new be(.46,.08,3.6),(ze,je,an,Tn)=>De(ze,"#7A5634","#A57B4C",Ke(te,Tn)*.5+.3)),W-.3+te*.48,.05,0));for(let te of[-1,1]){v.push(Ot(Nt(new be(4.8,.07,.07),"#6B4423"),W+2.1,.95,te*1.8));for(let ze=0;ze<5;ze++)v.push(Ot(Nt(new me(.05,.05,1,6),"#5C3A1A"),W+.1+ze*1.1,.5,te*1.8))}v.push(Ot(Nt(new be(.07,.07,3.6),"#6B4423"),W+4.5,.95,0));for(let te=-1;te<=1;te++)v.push(Ot(Nt(new me(.06,.06,1,6),"#5C3A1A"),W+4.5,.5,te*1.6));for(let te=0;te<4;te++)v.push(Ot(Nt(new me(.12,.14,7,6),"#4F3420"),W+.5+te*1.3,-3.4,(te%2?1:-1)*1.5));v.push(Nt(new Zn([new Ct(.001,0),new Ct(2.35,0),new Ct(2.45,.08),new Ct(2.4,.62),new Ct(2.15,.66),new Ct(2.1,.22),new Ct(.001,.22)],40),(te,ze,je)=>De(te,"#9F988C","#D6CFC2",je*1.5+.2))),v.push(Nt(new Zn([new Ct(.001,.2),new Ct(.32,.2),new Ct(.22,.9),new Ct(.18,1.4),new Ct(.7,1.55),new Ct(.72,1.68),new Ct(.15,1.72),new Ct(.12,2.15),new Ct(.2,2.3),new Ct(.001,2.38)],24),(te,ze,je)=>De(te,"#A79F92","#DCD5C8",je*.4)));let w=le.kioskA*Ar,[h,x]=pt(le.kioskA,9.2),S=Math.atan2(-Math.cos(w),-Math.sin(w)),T=[],E=te=>T.push(te),z=(te,ze)=>te.set(Math.floor((ze+1.6)/.4)%2?"#A97B4C":"#93683E");E(Ot(Nt(new be(3.2,2.4,.12),z),0,1.2,-1.05));for(let te of[-1,1])E(Ot(Nt(new be(.12,2.4,2.2),"#8A5F36"),te*1.55,1.2,0));E(Ot(Nt(new be(3.5,.12,2.7),"#6B4423"),0,2.45,.15)),E(Ot(Nt(new be(3.1,1,.5),(te,ze,je)=>te.set(je>.42?"#5C3A1A":Math.floor((ze+1.55)/.31)%2?"#A97B4C":"#93683E")),0,.5,.85));for(let te=0;te<8;te++)E(Ot(Nt(new be(.44,.04,.9),te%2?"#FAF3E6":"#2E8B57"),-1.54+te*.44,2.3,1.75,.35,0,0));E(Ot(Nt(new be(2.6,.06,.35),"#6B4423"),0,1.6,-.9));for(let te=0;te<5;te++)E(Ot(Nt(new me(.07,.06,.22,8),["#2E86AB","#C0612B","#F2E3C6","#9B2335","#E8C170"][te]),-1+te*.5,1.75,-.9));let X=new we;X.add(new Vt(nn(T),new Te({vertexColors:!0,side:Be}))),X.position.set(h,0,x),X.rotation.y=S,rt.add(X),X.traverse(te=>{te.isMesh&&(te.castShadow=!0,te.receiveShadow=!0)}),K.kiosk=X;let k=new Vt(new Zn([new Ct(.001,0),new Ct(.14,0),new Ct(.16,.05),new Ct(.22,.2),new Ct(.2,.42),new Ct(.12,.5),new Ct(.14,.56),new Ct(.06,.62),new Ct(.001,.64)],18),ht);k.position.set(-1,1,.85),X.add(k);for(let te=0;te<6;te++){let ze=new Vt(new me(.045,.032,.1,10),lt);ze.position.set(-.3+te*.2,1.05,.9),X.add(ze),K.cups.push(ze)}let N=Ms({thobe:"#EDE6DA",bisht:null,shmagh:"#1E1E1E",beard:"#2E2A26",beads:!1});N.root.position.set(.35,0,-.25),X.add(N.root),mt.push({m:N,base:N.root.position.clone(),kind:"seller"});for(let te of le.benches){let ze=te*Ar,[je,an]=pt(te,6.6),Tn=-ze-Math.PI/2,ei=-Math.sin(ze),Ss=Math.cos(ze);v.push(Ot(Nt(new be(2.2,.1,.55),"#8A5F36"),je,.45,an,0,Tn,0)),v.push(Ot(Nt(new be(2.2,.5,.08),"#7A5232"),je+Math.cos(ze)*.3,.75,an+Math.sin(ze)*.3,0,Tn,0));for(let as of[-.9,.9])v.push(Ot(Nt(new be(.1,.45,.5),"#6B4423"),je+ei*as,.22,an+Ss*as,0,Tn,0))}let q=()=>{let te=new Vt(new me(.035,.026,.08,10),lt);return te.position.set(0,-.43,.05),te},ct={tea:[le.meet[0]-le.x,le.meet[1]-le.z],stand:[h,x]},Pt=[Ms({thobe:"#D8CDB8",bisht:"#2D3A4E",shmagh:"#C8102E",beads:!1,beard:"#5A524C"}),Ms({thobe:"#F4F1EA",bisht:null,shmagh:"#F4F1EA",beard:"none",beads:!0}),Ms({thobe:"#CFE0E8",bisht:null,shmagh:"#C8102E",beard:"#3A3430",beads:!1})];le.guests.forEach((te,ze)=>{let je=Pt[ze],[an,Tn]=pt(te.a,te.r),ei=ct[te.kind];je.root.position.set(an,0,Tn),je.root.rotation.y=Math.atan2(ei[0]-an,ei[1]-Tn),rt.add(je.root),mt.push({m:je,base:je.root.position.clone(),kind:te.kind,ph:f()*6}),te.kind==="tea"&&je.arms[1].el.add(q())});let Lt=118*Ar,[Yt,de]=pt(118,9),jt=-Math.sin(Lt),Ht=Math.cos(Lt);for(let te of[-1,1])v.push(Ot(Nt(new be(.18,2.8,.18),"#5C3A1A"),Yt+jt*.9*te,1.4,de+Ht*.9*te));v.push(Ot(Nt(new be(2.3,.2,.24),"#4F3420"),Yt,2.8,de,0,-Lt-Math.PI/2,0));let ie=new we;ie.position.set(Yt,2.7,de),rt.add(ie);let Xt=new Vt(new Zn([new Ct(.001,-.05),new Ct(.18,-.06),new Ct(.24,-.25),new Ct(.3,-.55),new Ct(.42,-.72),new Ct(.4,-.76),new Ct(.001,-.76)],24),new On({color:"#B07A2E",specular:"#FFE2A0",shininess:100}));Xt.castShadow=!0;let re=new Vt(new Ee(.07,10,8),Ce("#3B2A1A"));re.position.y=-.7,ie.add(Xt,re),K.bell={g:ie,swing:0,v:0};let[ae,Ve]=pt(300,10.2);v.push(Ot(Nt(new me(.08,.1,9,8),"#D9D9D9"),ae,4.5,Ve)),v.push(Ot(Nt(new Ee(.16,10,8),"#E8C170"),ae,9.05,Ve));let Ne=new xn(3.2,2,20,10);Ne.translate(1.6,0,0);let sn=new Float32Array(Ne.attributes.position.count*3);for(let te=0;te<Ne.attributes.position.count;te++){let ze=Ne.attributes.position.getY(te);_n.set(ze>.33?"#CE1126":ze>-.33?"#FFFFFF":"#141414"),Math.abs(ze)<.2&&Math.abs(Ne.attributes.position.getX(te)-1.6)<.35&&_n.set("#007A3D"),sn.set([_n.r,_n.g,_n.b],te*3)}Ne.setAttribute("color",new qe(sn,3));let ln=new Vt(Ne,new Te({vertexColors:!0,side:Be}));ln.position.set(ae+.1,7.9,Ve),ln.castShadow=!0,rt.add(ln),K.flag=ln,K.flagBase=Float32Array.from(Ne.attributes.position.array);let ue=new we;ue.position.set(W+3.9,0,0),rt.add(ue);for(let te=0;te<3;te++){let ze=te/3*Se,je=new Vt(new me(.03,.03,1.3,6),Ce("#3B3B3B"));je.position.set(Math.cos(ze)*.25,.6,Math.sin(ze)*.25),je.rotation.set(Math.sin(ze)*.38,0,-Math.cos(ze)*.38),ue.add(je)}let ge=new Vt(new me(.09,.13,1.1,16),ht);ge.rotation.z=Math.PI/2-.15,ge.position.set(.1,1.32,0),ue.add(ge);let Re=new Vt(new me(.14,.14,.06,16),Ce("#1A2A3A",{shininess:160,specular:"#FFFFFF"}));Re.rotation.z=Math.PI/2-.15,Re.position.set(.66,1.4,0),ue.add(Re),wr(ue),K.scope=ue;let en=le.lamps.map(te=>te*Ar);for(let te of en){let ze=Math.cos(te)*12.2,je=Math.sin(te)*12.2;v.push(Ot(Nt(new me(.06,.08,3.2,6),"#2E2E2E"),ze,1.6,je));let an=new we;an.position.set(ze,3,je);let Tn=new Vt(new me(.11,.11,.26,8),new vn({color:"#FFD36B"})),ei=new qn(new Un({map:p,color:"#FFC14D",transparent:!0,opacity:.7,depthWrite:!1,blending:zn}));ei.scale.setScalar(.75),an.add(Tn,ei),rt.add(an),K.lanterns.push(an)}let He=[];for(let te=0;te<4;te++){let ze=en[te],je=en[(te+1)%4],an=wn(ze,je);an<0&&(an+=Se);for(let Tn=1;Tn<9;Tn++){let ei=ze+an*Tn/9,Ss=Math.sin(Tn/9*Math.PI)*.6;He.push([Math.cos(ei)*12.2,3.05-Ss,Math.sin(ei)*12.2])}}let Je=new ai(new Ee(.07,8,6),new vn({color:"#FFFFFF"}),He.length),Rn=new dn,ks=["#FF5D8F","#FFD23F","#7FD1FF","#8DE26B"];He.forEach(([te,ze,je],an)=>{Rn.position.set(te,ze,je),Rn.updateMatrix(),Je.setMatrixAt(an,Rn.matrix),Je.setColorAt(an,_n.set(ks[an%4]))}),rt.add(Je);for(let te of le.beds){let[ze,je]=pt(te,11);v.push(Ot(Nt(new me(.7,.6,.5,12),"#8E877B"),ze,.25,je));for(let an=0;an<9;an++)v.push(Ot(Nt(new gn(.13,0),["#FF5D8F","#FFD23F","#FFFFFF","#B28DFF"][an%4]),ze+Math.cos(an)*.4,.58,je+Math.sin(an)*.4))}let hc=new Vt(nn(v),new Te({vertexColors:!0,side:Be}));hc.castShadow=!0,hc.receiveShadow=!0,rt.add(hc),vt(Mt.pineA,gt.pine,le.pines.map(te=>{let[ze,je]=pt(te,11.6);return{x:le.x+ze,y:St-.1,z:le.z+je,ry:f()*Se,s:.9}}),{cast:!0,size:100,far:500});let Ho=new Vt(new Bn(2.12,40),new On({color:"#4AA6D8",specular:"#FFFFFF",shininess:140,normalMap:y,transparent:!0,opacity:.88}));Ho.rotation.x=-Math.PI/2,Ho.position.y=.55,rt.add(Ho),K.water=Ho;let qh=140,Yh=[];for(let te=0;te<qh;te++)Yh.push([f()*Se,f(),.5+f()*.5]);let Zh=new Ze;Zh.setAttribute("position",new qe(new Float32Array(qh*3),3)),K.drops=new dr(Zh,new Rs({size:.16,map:p,color:"#E6F6FF",transparent:!0,opacity:.9,depthWrite:!1})),K.drops.userData.seed=Yh,K.drops.frustumCulled=!1,rt.add(K.drops);let Jh=220,$h=[];for(let te=0;te<Jh;te++)$h.push([f()*60-30,f()*8,f()*60-30,f()]);let Kh=new Ze;Kh.setAttribute("position",new qe(new Float32Array(Jh*3),3)),K.leaves=new dr(Kh,new Rs({size:.22,map:p,color:"#A8D46A",transparent:!0,opacity:0,depthWrite:!1})),K.leaves.userData.seed=$h,K.leaves.frustumCulled=!1,rt.add(K.leaves);let jh=70,Qh=[];for(let te=0;te<jh;te++)Qh.push([f()*50-25,f()*9-1,f()*50-25,.5+f()]);let tu=new Ze;tu.setAttribute("position",new qe(new Float32Array(jh*6),3)),K.streaks=new ps(tu,new es({color:"#FFFFFF",transparent:!0,opacity:0,depthWrite:!1})),K.streaks.userData.seed=Qh,K.streaks.frustumCulled=!1,rt.add(K.streaks)}let xt=new we;a.add(xt);let u={flames:[],glows:[],lantern:null};{let v=new j(4,0,-2.4),w=[],h=(ue,ge)=>ue.set(Math.floor((ge+1.7)/.425)%2?"#EAD9B5":"#D9C39C");w.push(Ot(Nt(new be(3.4,1.95,2.4),h),0,.975,-2.8));for(let ue of[-1,1])w.push(Ot(Nt(new be(3.62,.07,1.52),(ge,Re)=>ge.set(Math.floor((Re+1.81)/.4525)%2?"#C9AE82":"#B99D70")),0,2.32,-2.8+ue*.6,ue*.59,0,0));let x=new wi;x.moveTo(-1.2,0),x.lineTo(1.2,0),x.lineTo(0,.8),x.closePath();for(let ue of[-1,1])w.push(Ot(Nt(new is(x),"#E3D0A8"),0+ue*1.7,1.95,-2.8,0,Math.PI/2,0));w.push(Ot(Nt(new be(.95,1.55,.05),"#3F2412"),0-.25,.775,-2.8+1.22));for(let ue of[-1,1]){let ge=new wi;ge.moveTo(0,0),ge.lineTo(.42*ue,0),ge.lineTo(0,-1),ge.closePath(),w.push(Ot(Nt(new is(ge),"#E9D7B0"),0-.25+ue*.04,1.55,-2.8+1.25))}let S=new j(0,2.15,-2.8+1.2),T=new j(0,1.98,-2.8+2.55),E=S.distanceTo(T),z=Math.atan2(S.y-T.y,T.z-S.z);for(let ue=0;ue<8;ue++){let ge=-1.4875+ue*.425,Re=ue%2?"#FAF3E6":"#D7263D";w.push(Ot(Nt(new be(.425,.035,E),Re),ge,(S.y+T.y)/2,(S.z+T.z)/2,z,0,0)),w.push(Ot(Nt(new Bn(.2125,10,Math.PI,Math.PI),Re),ge,T.y,T.z+.01))}for(let ue of[-1,1])w.push(Ot(Nt(new me(.045,.055,2.05,7),"#5C3A1A"),0+ue*1.68,1.02,-2.8+2.55));let X=0-.78,k=-2.8+2;w.push(Ot(Nt(new be(1,.06,.55),"#8B5A2B"),X,.74,k));for(let[ue,ge]of[[-1,-1],[1,-1],[-1,1],[1,1]])w.push(Ot(Nt(new me(.03,.03,.72,5),"#6B4220"),X+ue*.44,.36,k+ge*.22));let N=ue=>new Zn([new Ct(.001,0),new Ct(.09*ue,0),new Ct(.15*ue,.07),new Ct(.16*ue,.17),new Ct(.11*ue,.28),new Ct(.06*ue,.32),new Ct(.075*ue,.36),new Ct(.06*ue,.37)],14);w.push(Ot(Nt(N(1),(ue,ge,Re)=>ue.set(Re>.2&&Re<.24?"#F2E3C6":"#C0612B")),X-.3,.77,k)),w.push(Ot(Nt(N(.8),(ue,ge,Re)=>ue.set(Re>.16&&Re<.19?"#FFFFFF":"#2E86AB")),X+.02,.77,k-.05)),w.push(Ot(Nt(new Ee(.28,12,8),(ue,ge,Re)=>De(ue,"#C8B18A","#E2D2AE",Re*2+.5)),0-2.05,.27,-2.8+1.2,0,0,0,1,1.2,1)),w.push(Ot(Nt(new be(.5,.42,.42),(ue,ge,Re)=>ue.set(Math.abs(Re)>.17||Math.abs(ge)>.21?"#7A4E25":"#A0703C")),0+1.95,.21,-2.8+1,0,.3,0));let q=(ue,ge)=>{let Re=ue.distanceTo(ge),en=Math.max(2,Math.round(Re/.55));for(let He=0;He<=en;He++){let Je=ue.clone().lerp(ge,He/en);w.push(Ot(Nt(new me(.045,.055,.85,6),"#8B5A2B"),Je.x,.42,Je.z))}for(let He of[.3,.62]){let Je=Nt(new be(.05,1,.035),"#9C6A36");Ot(Je,0,0,0,0,0,0,1,Re,1),kh(Je,new j(ue.x,He,ue.z),new j(ge.x,He,ge.z)),w.push(Je)}},ct=new j(-5.8,0,-.75),Pt=new j(-5.8,0,-2.9),Lt=new j(-3.1,0,-2.9),Yt=new j(-3.1,0,-.75);q(ct,Pt),q(Pt,Lt),q(Lt,Yt),w.push(Ot(Nt(new be(1,.18,.35),"#7A4E25"),-4.45,.09,-2.55)),w.push(Ot(Nt(new be(.9,.06,.28),"#D8C26A"),-4.45,.2,-2.55)),w.push(Ot(Nt(new be(1.75,.46,.06),"#7A4A22"),0,2.66,-2.8+1.25));for(let ue=0;ue<9;ue++){let ge=ue/9*Se;w.push(Ot(Nt(new ni(.11,0),(Re,en,He)=>De(Re,"#7D776C","#B5AFA2",He*4+.5)),v.x+Math.cos(ge)*.42,.06,v.z+Math.sin(ge)*.42,ue,ue*2,0,1,.7,1))}for(let ue=0;ue<3;ue++){let ge=ue/3*Math.PI;w.push(Ot(Nt(new me(.05,.05,.62,6),(Re,en,He)=>Re.set(Math.abs(He)>.27?"#C9A36B":"#4A2E18")),v.x,.1,v.z,0,ge,Math.PI/2-.25))}let de=new Vt(nn(w),new Te({vertexColors:!0,side:Be}));de.castShadow=!0,de.receiveShadow=!0,xt.add(de);let jt=new Vt(new xn(1.62,.38),new Te({map:_e(i.sign||"\u062E\u064A\u0645\u0629 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",512,128,64),emissive:"#3B2410",emissiveIntensity:.25}));jt.position.set(0,2.66,-2.8+1.29),xt.add(jt);let Ht=new we,ie=new Vt(new me(.07,.07,.16,8),new vn({color:"#FFD36B"})),Xt=new qn(new Un({map:p,color:"#FFC14D",transparent:!0,opacity:.75,depthWrite:!1,blending:zn}));Xt.scale.setScalar(.9),Ht.add(ie,Xt),Ht.position.set(0+1.68,1.72,-2.8+2.55),xt.add(Ht),u.lantern=Ht;let re=ue=>new vn({color:ue,transparent:!0,opacity:.9,depthWrite:!1,blending:zn});[["#FF5A1F",.2,.55,0],["#FF9A2E",.15,.45,.07],["#FFE07A",.09,.3,-.05]].forEach(([ue,ge,Re,en],He)=>{let Je=new Vt(new Mn(ge,Re,10,1,!0),re(ue));Je.position.set(v.x+en,.12+Re/2,v.z-en),Je.userData={h0:Re,i:He},xt.add(Je),u.flames.push(Je)});let ae=new qn(new Un({map:p,color:"#FF8A2E",transparent:!0,opacity:.6,depthWrite:!1,blending:zn}));ae.position.set(v.x,.45,v.z),ae.scale.setScalar(1.8),xt.add(ae),u.glows.push(ae);let Ve=new we,Ne=new Vt(new Zn([new Ct(.001,0),new Ct(.1,0),new Ct(.115,.02),new Ct(.1,.09),new Ct(.06,.14),new Ct(.045,.2),new Ct(.06,.24),new Ct(.075,.26),new Ct(.04,.3),new Ct(.012,.34),new Ct(.02,.36),new Ct(.001,.37)],20),ht);Ve.add(Ne),Ve.position.set(v.x-.75,.12,v.z+.35),xt.add(Ve);let sn=di(256,160,(ue,ge,Re)=>{ue.fillStyle="#8E1B26",ue.fillRect(0,0,ge,Re),ue.fillStyle="#1F2F5C",ue.fillRect(10,10,ge-20,Re-20),ue.fillStyle="#8E1B26",ue.fillRect(20,20,ge-40,Re-40),ue.strokeStyle="#E8C170",ue.lineWidth=3,ue.strokeRect(16,16,ge-32,Re-32);let en=(He,Je,Rn,ks)=>{ue.fillStyle=ks,ue.beginPath(),ue.moveTo(He,Je-Rn),ue.lineTo(He+Rn*1.5,Je),ue.lineTo(He,Je+Rn),ue.lineTo(He-Rn*1.5,Je),ue.closePath(),ue.fill()};en(ge/2,Re/2,44,"#1F2F5C"),en(ge/2,Re/2,30,"#E8C170"),en(ge/2,Re/2,16,"#8E1B26"),en(ge/2,Re/2,6,"#F4EFE6")}),ln=new Vt(new xn(2,1.25),new Te({map:sn}));ln.rotation.x=-Math.PI/2,ln.rotation.z=.04,ln.position.set(0-.2,.02,-2.8+1.9),ln.receiveShadow=!0,xt.add(ln)}let M=new we;{let J=new Vt(new mo(.95,1.18,48),new vn({color:"#FFD23F",transparent:!0,opacity:.9,depthWrite:!1,side:Be}));J.rotation.x=-Math.PI/2,J.position.y=.03;let at=new Vt(new Bn(.95,40),new vn({color:"#FFE38A",transparent:!0,opacity:.25,depthWrite:!1}));at.rotation.x=-Math.PI/2,at.position.y=.025;let v=new Vt(new Mn(.2,.42,4),new On({color:"#FFB703",emissive:"#FF8A00",emissiveIntensity:.6,shininess:80}));v.rotation.x=Math.PI,v.position.y=1.9,M.add(J,at,v),M.userData={ring:J,arrow:v},M.visible=!1,a.add(M)}function Y(J){let at=J==="wolf",v=new we,w=new we;v.add(w);let h=Ce(at?"#7E8088":"#4E3626",{shininess:8}),x=Ce(at?"#C9CACF":"#6E5038",{shininess:8}),S=Ce(at?"#3E4048":"#2B1D12",{shininess:20}),T=at?.95:1,E=at?.72:.62,z=at?.22:.33,X=new Vt(new Ee(1,22,14),h);X.scale.set(T/2,z,z*(at?.85:.9)),X.position.y=E,w.add(X);let k=new Vt(new Ee(1,16,10),x);if(k.scale.set(T/2.3,z*.6,z*.75),k.position.set(0,E-z*.4,0),w.add(k),!at){let jt=new Vt(new be(T*.8,.12,.08),S);jt.position.set(0,E+z*.95,0),w.add(jt)}let N=new we;N.position.set(T/2+.05,E+(at?.16:0),0),w.add(N);let q=new Vt(new Ee(at?.16:.2,16,12),h);q.scale.set(1.2,.95,.9),N.add(q);let ct=new Vt(new me(at?.05:.09,at?.09:.13,at?.26:.22,10),at?x:h);ct.rotation.z=-Math.PI/2,ct.position.set(at?.24:.25,-.04,0),N.add(ct);let Pt=new Vt(new Ee(at?.035:.07,10,8),S);Pt.position.set(at?.37:.36,-.03,0),at||Pt.scale.set(.5,1,1.1),N.add(Pt);for(let jt of[-1,1]){let Ht=new Vt(new Ee(.025,8,6),new vn({color:at?"#F2C14E":"#1A0E08"}));Ht.position.set(.12,.06,jt*.09),N.add(Ht);let ie=new Vt(new Mn(at?.06:.05,at?.16:.1,6),h);if(ie.position.set(-.02,at?.17:.15,jt*.08),ie.rotation.set(jt*.25,0,at?-.1:.4),N.add(ie),!at){let Xt=new Vt(new Mn(.018,.12,6),Ce("#F4EFE6"));Xt.position.set(.36,-.04,jt*.08),Xt.rotation.z=.6,N.add(Xt)}}let Lt=new we;Lt.position.set(-T/2,E+.05,0),w.add(Lt);let Yt=new Vt(at?new Mi(.06,.36,4,8):new me(.015,.02,.18,6),h);Yt.position.y=at?-.2:-.09,Lt.add(Yt),Lt.rotation.z=at?.9:.4;let de=[];for(let[jt,Ht]of[[T*.33,1],[-T*.33,0]])for(let ie of[-1,1]){let Xt=new we;Xt.position.set(jt,E-z*.4,ie*z*.55),w.add(Xt);let re=new Vt(new me(.045,.06,(E-z*.4)*.55,8),h);re.position.y=-((E-z*.4)*.55)/2,Xt.add(re);let ae=new we;ae.position.y=-(E-z*.4)*.55,Xt.add(ae);let Ve=new Vt(new me(.03,.04,(E-z*.4)*.45,8),at?h:S);Ve.position.y=-((E-z*.4)*.45)/2,ae.add(Ve),de.push({hip:Xt,knee:ae,front:Ht,s:ie})}return wr(v),a.add(v),v.scale.setScalar(1.15),{root:v,body:w,head:N,tail:Lt,legs:de,yaw:0}}let C=e.beasts.map(J=>({e:J,m:Y(J.kind)})),_t=(()=>{let J=new we,at=new we;J.add(at);let v=Ce("#D9A066",{shininess:18}),w=Ce("#ECCB9C",{shininess:18}),h=Ce("#3B2A1A",{shininess:40}),x=[[-.56,0],[-.54,.1],[-.48,.17],[-.36,.2],[-.18,.18],[0,.185],[.18,.21],[.32,.215],[.44,.18],[.53,.11],[.57,0]],S=new Zn(x.map(([jt,Ht])=>new Ct(Ht,jt)),36);{let jt=S.attributes.position;for(let Ht=0;Ht<jt.count;Ht++){let ie=jt.getX(Ht),Xt=jt.getY(Ht),re=jt.getZ(Ht),ae=Math.exp(-(((Xt+.1)/.22)**2));ie<0&&(ie*=1-ae*.28),jt.setXYZ(Ht,Xt,-ie*(ie<0?.95:1.05),re*.82)}S.computeVertexNormals()}S=Nt(S,(jt,Ht,ie)=>{let Xt=ie/.21;Xt<-.45?jt.set("#FFF6E8"):Xt<-.15?De(jt,"#6A3F1F","#8A5528",(Xt+.45)/.3):De(jt,"#D9A066","#C58A50",(Xt-.3)*1.5),Ht<-.46&&Xt<.55&&jt.set("#FFF6E8")});let T=new Vt(S,Ce("#FFFFFF",{vertexColors:!0,shininess:22}));T.position.y=.8,at.add(T);let E=new we;E.position.set(-.56,.86,0);let z=new Vt(new Mi(.025,.1,3,6),Ce("#2B1D12"));z.position.y=-.06,E.add(z),E.rotation.z=.5,at.add(E);let X=new we;X.position.set(.42,.88,0),at.add(X);let k=new Vt(new me(.055,.1,.5,14),v);k.position.y=.23,k.scale.z=.85,X.add(k);let N=new Vt(new me(.036,.06,.42,10),Ce("#FFF6E8"));N.position.set(.04,.21,0),N.rotation.z=-.08,X.add(N),X.rotation.z=-.6;let q=new we;q.position.set(0,.49,0),q.scale.setScalar(1.12),X.add(q);let ct=new Vt(new Ee(.11,24,16),v);ct.scale.set(1.35,.9,.82),q.add(ct);let Pt=new Vt(new Ee(.075,18,12),w);Pt.position.set(.14,-.045,0),Pt.scale.set(1.25,.8,.85),q.add(Pt);let Lt=new Vt(new Ee(.03,10,8),h);Lt.position.set(.225,-.035,0),q.add(Lt);for(let jt of[-1,1]){let Ht=new Vt(new Ee(.026,12,10),Ce("#120C08",{shininess:160,specular:"#FFFFFF"}));Ht.position.set(.035,.035,jt*.083),q.add(Ht);let ie=new Vt(new Ee(.07,12,8),v);ie.scale.set(.45,1.25,.25),ie.position.set(-.08,.1,jt*.08),ie.rotation.set(jt*.6,0,.6),q.add(ie);let Xt=new Yn([new j(-.02,.07,jt*.035),new j(-.09,.22,jt*.07),new j(-.07,.38,jt*.085),new j(0,.47,jt*.06)]),re=new Si(Xt,18,.019,7);{let ae=re.attributes.position,Ve=8;for(let Ne=0;Ne<=18;Ne++){let sn=Xt.getPointAt(Ne/18),ln=1-Ne/18*.7;for(let ue=0;ue<Ve;ue++){let ge=Ne*Ve+ue;ae.setXYZ(ge,sn.x+(ae.getX(ge)-sn.x)*ln,sn.y+(ae.getY(ge)-sn.y)*ln,sn.z+(ae.getZ(ge)-sn.z)*ln)}}re.computeVertexNormals()}q.add(new Vt(Nt(re,(ae,Ve,Ne)=>ae.set(Math.floor(Ne*55)%2?"#3B2A1A":"#5A4330")),Ce("#FFFFFF",{vertexColors:!0,shininess:50})))}let Yt=new dn;Yt.position.set(0,.38,0),X.add(Yt);let de=[];for(let[jt,Ht]of[[.34,1],[-.38,0]])for(let ie of[-1,1]){let Xt=new we;Xt.position.set(jt,.76,ie*.09),at.add(Xt);let re=new Vt(new Ee(Ht?.075:.1,12,10),v);re.scale.set(Ht?1.1:1.15,Ht?1.7:1.6,Ht?.6:.55),re.position.set(0,Ht?-.05:-.07,0),Xt.add(re);let ae=new Vt(new me(Ht?.026:.03,Ht?.04:.055,.36,10),v);ae.position.y=-.2,Xt.add(ae);let Ve=new we;Ve.position.y=-.38,Xt.add(Ve),Ve.add(new Vt(new Ee(.024,8,6),w));let Ne=new Vt(new me(.014,.02,.34,8),w);Ne.position.y=-.17,Ve.add(Ne);let sn=new Vt(new me(.017,.024,.045,8),Ce("#20150D",{shininess:60}));sn.position.y=-.355,Ve.add(sn),de.push({hip:Xt,knee:Ve,front:Ht,s:ie})}return wr(J),a.add(J),{root:J,body:at,neck:X,head:q,tail:E,legs:de,collar:Yt,yaw:-.25,neckA:-.6}})(),H=Ms();a.add(H.root);let V=null,G=Lf(),Dt=new ps(new Ze,new es({color:"#F4F4F4",transparent:!0,opacity:.85}));Dt.geometry.setAttribute("position",new qe(new Float32Array(6),3)),Dt.frustumCulled=!1,Dt.visible=!1,a.add(Dt);let yt=new Vt(new Ee(.035,10,8),new Te({color:"#E63946"}));yt.visible=!1,a.add(yt);function Et(J){if(!(V&&V.id===J.id)){if(V)for(let at of[V.root,V.chute,V.drop,V.rope])a.remove(at);V=Af(J,p),a.add(V.root,V.chute,V.drop,V.rope),G.reset()}}function U(){let J=o.vq.camp;xt.visible=!1,xt.position.set(r.x+J.x,r.VF+J.base,r.z+J.z),xt.rotation.y=J.rot,M.position.set(o.vq.zoneW.x,t.H(o.vq.zoneW.x,o.vq.zoneW.z),o.vq.zoneW.z),H.root.rotation.y=J.rot,H.yaw=J.rot}let b=[],nt=[];{let J=new Ze;J.setAttribute("position",new qe(new Float32Array([0,0,0,.9,0,-.25,.9,0,.25]),3)),J.computeVertexNormals();let at=new vn({color:"#34406A",side:Be});for(let x=0;x<9;x++){let S=new we,T=new Vt(J,at),E=new Vt(J,at);E.scale.x=-1,S.add(T,E);let z=x<5;S.userData={ph:f()*6,sp:.25+f()*.2,y:z?r.VF+26+f()*14:70+f()*40,cx:z?r.x+15+f()*90:(f()-.5)*300,cz:z?r.z+(f()-.5)*20:(f()-.5)*300,rad:10+f()*18,l:T,r:E},b.push(S),a.add(S)}let v=new wi;v.moveTo(0,0),v.bezierCurveTo(.05,.1,.16,.12,.15,.02),v.bezierCurveTo(.16,-.05,.08,-.1,0,-.02);let w=new is(v,6),h=["#FF8FD1","#FFD23F","#8FD6FF","#FFFFFF","#FF9E5E","#B28DFF"];for(let x=0;x<22;x++){let S=new Te({color:h[x%h.length],side:Be,emissive:h[x%h.length],emissiveIntensity:.25}),T=new we,E=new Vt(w,S),z=new Vt(w,S);z.scale.x=-1,T.add(E,z),T.userData={l:E,r:z,ax:r.x+6+f()*108,az:r.z+(f()-.5)*16,ph:f()*6},nt.push(T),a.add(T)}}let it={yaw:0,pitch:.26,dist:5.6,init:!1,tgt:new j,pos:new j,scopeYaw:0,scopePitch:-.38,effPitch:null,effDist:null},tt=new j,ut=new j;function Wt(J){let at=o.hero;if(!at)return;if(o.scope){let ct=s.x+W+4.75,Pt=St+1.45,Lt=s.z,Yt=it.scopeYaw,de=it.scopePitch;it.pos.set(ct,Pt,Lt),it.tgt.set(ct+Math.cos(Yt)*100*Math.cos(de),Pt+Math.sin(de)*100,Lt+Math.sin(Yt)*100*Math.cos(de));return}let v=o.focus,w=at.mode==="lift"||at.mode==="carry"||at.mode==="zip",h=at.mode==="glide";tt.set(v&&v.x!=null?v.x:at.x,at.y+(w||h?.9:at.mode==="zip"?1.6:1.42),v&&v.z!=null?v.z:at.z),v&&(it.yaw=Sn(it.yaw,v.yaw,2.2,J)),at.mode==="carry"&&(it.yaw=Sn(it.yaw,Math.atan2(at.z-it.pos.z,at.x-it.pos.x),1.5,J)),at.mode==="zip"&&(it.yaw=Sn(it.yaw,at.face,1.4,J));let x=v?v.dist*.85:at.mode==="carry"?11:at.mode==="zip"?7.2:w?7:h?9:at.swim?5.2:o.summit?5.6:4.9;it.init||(it.tgt.copy(tt),it.dist=x,it.effPitch=null,it.effDist=null,it.init=!0);let S=at.mode==="faint"?2:w?6:14;it.tgt.x=Ye(it.tgt.x,tt.x,S,J),it.tgt.z=Ye(it.tgt.z,tt.z,S,J),it.tgt.y=Ye(it.tgt.y,tt.y,at.air&&!w&&!h?6:10,J),it.dist=Ye(it.dist,x,3,J);let T=(ct,Pt)=>ut.set(it.tgt.x-Math.cos(it.yaw)*Math.cos(Pt)*ct,it.tgt.y+Math.sin(Pt)*ct,it.tgt.z-Math.sin(it.yaw)*Math.cos(Pt)*ct),E="",z=(ct,Pt)=>{E="";for(let Lt=1;Lt<=8;Lt++){let Yt=Lt/8;T(ct*Yt,Pt);let de=t.H(ut.x,ut.z);if(ut.y<de+.4||ut.y-.85*(1-Yt)<de+.2)return E="terr",Yt;if(E="canopy",!w&&t.tallNear(ut.x,ut.z,jt=>{let Ht=ut.x-jt.x,ie=ut.z-jt.z,Xt=Ht*Ht+ie*ie,re=jt.r*(jt.tree?3.4:1.2);return Lt>=2&&!o.summit&&Xt<re*re&&ut.y>de+1.9&&ut.y<de+9}))return Yt}return E="",0},X=w?.35:h?Math.max(it.pitch,.42):it.pitch,k=it.dist,N=z(k,X);if(N&&E==="canopy"){let ct=Math.min(X,.04),Pt=z(k,ct);(!Pt||Pt>N)&&(X=ct,N=Pt)}else if(N)for(let ct of[.3,.6]){let Pt=Math.min(X+ct,1.05),Lt=z(k,Pt);if((!Lt||Lt>N)&&(X=Pt,N=Lt),!N)break}N&&(k=Math.max(1.8,k*(N-1/8))),it.effPitch=it.effPitch==null?X:Ye(it.effPitch,X,X<it.effPitch?8:2.5,J),it.effDist=it.effDist==null?k:Ye(it.effDist,k,k<it.effDist?10:2.5,J),T(Math.min(it.effDist,k+.6),it.effPitch),t.tallNear(ut.x,ut.z,ct=>{let Pt=ut.x-ct.x,Lt=ut.z-ct.z,Yt=Pt*Pt+Lt*Lt,de=ct.r+.35;if(Yt<de*de){let jt=Math.sqrt(Yt)||.01;ut.x=ct.x+Pt/jt*de,ut.z=ct.z+Lt/jt*de}return!1});let q=t.H(ut.x,ut.z)+.4;ut.y<q&&(ut.y=q),it.pos.copy(ut)}let Ft=()=>(it.yaw*180/Math.PI%360+360)%360,Ut=0,Zt=-1,ee=0,Q=0,bt=2,Gt=390,se=844,ce=new dn;ce.rotation.order="YXZ";let xe=new j,Le=new j;function Kt(J,at,v){Gt=J,se=at,bt=v,n.setPixelRatio(v),n.setSize(J,at,!1),c.aspect=J/at,c.updateProjectionMatrix()}let ke=J=>Math.PI/2-J,Ae=new j,fe=new j;function Xe(J,at){let v=o.hero,w=V,h=null,x=(k,N,q)=>{let ct=Math.hypot(k-v.x,N-v.z);return ct<q&&ct>.8?(h=Math.PI/2-Math.atan2(N-v.z,k-v.x),!0):!1};if(v.mode==="walk"&&!v.swim&&!(o.vq.merW&&Math.abs(v.y-s.HS)<4&&x(o.vq.merW.x,o.vq.merW.z,9))&&!(!o.vq.caught&&x(e.gz.x,e.gz.z,14))&&v.speed<1.2){let k=t.I.board;x(k.x,k.z,9)}let S=G.update(w,v,o,J,at,h);w.root.position.set(v.x,v.y+S.by,v.z),w.turn=Sn(w.turn,ke(v.face),v.mode==="walk"?11:6,at),w.root.rotation.y=w.turn;let T=v.mode==="lift"||v.mode==="carry"||v.stun>0||v.air&&v.vy<-7||v.mode==="faint";w.nextBlink-=at,w.nextBlink<0&&(w.blink=.13,w.nextBlink=2.2+Math.random()*3),w.blink=Math.max(0,w.blink-at);for(let k of w.eyes)k.scale.y=w.blink>0||v.mode==="faint"&&v.faintT>.4?.12:T?1.25:1;w.smile.visible=!T,w.ooh.visible=T,w.star&&(w.star.rotation.y=J*2);for(let k of[-1,1]){let N=w.acc.userData["tail"+k];N&&(N.rotation.x=.6+Math.sin(J*12+k)*.2+v.speed*.08)}if(w.cape&&(w.cape.rotation.x=.08+.55*oe(0,4.2,v.speed)+Math.sin(J*3)*.03),w.fire){w.bodyMat.emissiveIntensity=.32+Math.sin(J*13)*.08;for(let k of w.flames)k.scale.set(1,.8+Math.sin(J*14+k.userData.ph*1.7)*.25,1)}w.torso.scale.x=1+Math.sin(J*1.65)*.008;let E=v.mode==="fish";if(w.rod.visible=E,Dt.visible=yt.visible=E,E){w.root.updateMatrixWorld(!0),w.arms[1].wr.getWorldPosition(Ae),w.root.worldToLocal(Ae),w.rod.position.copy(Ae),w.rod.position.y-=.05,w.rod.rotation.set(.82,0,0),w.rod.updateMatrixWorld(!0),w.rodTip.getWorldPosition(fe);let k=v.x+Math.cos(v.face)*3.6,N=v.z+Math.sin(v.face)*3.6,q=t.water(k,N,t.H(k,N)+.05),ct=q?q.level:v.y-.5,Pt=o.fishing,Lt=Pt&&Pt.t>Pt.bite-.6?Math.sin(J*30)*.03-.05:0;yt.position.set(k,ct+.02+Math.sin(J*2.6)*.012+Lt,N);let Yt=Dt.geometry.attributes.position;Yt.setXYZ(0,fe.x,fe.y,fe.z),Yt.setXYZ(1,yt.position.x,yt.position.y,yt.position.z),Yt.needsUpdate=!0}let z=w.chute;if(z.visible=v.chute>.01,z.visible){z.position.copy(w.root.position),z.rotation.y=w.root.rotation.y;let k=v.chute,N=k<1?Qt(.15,1,k)+Math.sin(k*Math.PI)*.12:1;w.canopyHolder.scale.set(N,Qt(.4,1,k),N),w.canopyHolder.position.y=Qt(2.2,3.6,k),z.rotation.z=-(Math.hypot(v.vx,v.vz)*.05)+Math.sin(J*1.5)*.05,z.rotation.x=Math.sin(J*1.1)*.05;let q=w.lines.geometry.attributes.position,ct=w.canopyHolder.position.y,Pt=1.7*Math.sin(Math.PI*.42)*N,Lt=ct+1.7*Math.cos(Math.PI*.42)*.62*Qt(.4,1,k);for(let Yt=0;Yt<10;Yt++){let de=Yt/10*Se,jt=Yt%2?.22:-.22;q.setXYZ(Yt*2,Math.cos(de)*Pt,Lt,Math.sin(de)*Pt),q.setXYZ(Yt*2+1,jt,2.05,0)}q.needsUpdate=!0}let X=o.drop;if(w.drop.visible=!!(X&&X.t<2.4),w.drop.visible){let k=Me(1-X.t*1.2,.1,1);w.drop.position.set(X.x,t.H(X.x,X.z)+.02,X.z),w.drop.scale.set(1.05,.62*k,1.05),w.drop.material.opacity=Me(1-(X.t-1.4),0,1)}}function pn(J,at){for(let{e:v,m:w}of C){let h=(v.x-c.position.x)**2+(v.z-c.position.z)**2>19600;if(w.root.visible=!h,h)continue;let x=v.speed>.3,S=v.state==="chase"||v.state==="charge";w.root.position.set(v.x,v.y,v.z),w.yaw=Sn(w.yaw,-v.face,10,at),w.root.rotation.y=w.yaw,w.body.position.y=x?Math.abs(Math.sin(v.ph))*(S?.06:.02):0,w.head.rotation.z=v.state==="notice"?-.25+Math.sin(J*20)*.04:x?-.1:Math.sin(J*1.3)*.15-.2,w.tail.rotation.z=(v.kind==="wolf"?.9:.4)+(S?.5:0)+Math.sin(J*(S?14:3))*.15;for(let T of w.legs){let E=T.front?T.s>0?0:Math.PI:(T.s>0?Math.PI:0)+(S?.6:0);x?(T.hip.rotation.z=Math.sin(v.ph+E)*(S?.7:.4),T.knee.rotation.z=(T.front?-1:1)*Math.max(0,-Math.cos(v.ph+E))*.5):(T.hip.rotation.z=Ye(T.hip.rotation.z,0,8,at),T.knee.rotation.z=Ye(T.knee.rotation.z,0,8,at))}}}function En(J,at){let v=e.gz,w=_t,h=v.state,x=Math.hypot(v.vx,v.vz)>.25;if(w.root.visible=(v.x-c.position.x)**2+(v.z-c.position.z)**2<260*260,!w.root.visible)return;let S=h==="flee"||h==="leap",T=h==="tired";w.root.position.set(v.x,v.y,v.z),w.body.position.y=x?Math.abs(Math.sin(v.ph))*(S?.07:.025):T?Math.sin(J*9)*.008:0,w.yaw=Sn(w.yaw,-v.face,S?14:8,at),w.root.rotation.y=w.yaw,w.body.rotation.z=S?Math.sin(v.ph*2)*.05:0;let E=h==="graze"||h==="pen"&&!x;w.neckA=Ye(w.neckA,E?-2.05:T?-1.15:S?-.95:h==="alert"||h==="look"||h==="cornered"?-.32:-.6,E?3:7,at),w.neck.rotation.z=w.neckA,w.head.rotation.z=E?.5+Math.sin(J*7)*.08:h==="alert"||h==="look"?.2:.35,w.head.rotation.y=h==="look"||h==="alert"||h==="cornered"?Math.sin(J*1.6)*.25:0,w.tail.rotation.z=.5+(h==="alert"||S?.9:Math.sin(J*3)*.2);let z=S?.6:T?.28:.36,X=h==="leap";for(let k of w.legs){let N=k.front?k.s>0?0:Math.PI:(k.s>0?Math.PI:0)+(S?.6:0);if(X){k.hip.rotation.z=k.front?.9:-.9,k.knee.rotation.z=k.front?-1.2:1.1;continue}if(x){let q=Math.sin(v.ph+N);k.hip.rotation.z=q*z,k.knee.rotation.z=(k.front?-1:1)*Math.max(0,-Math.cos(v.ph+N))*z*1.1}else k.hip.rotation.z=Ye(k.hip.rotation.z,0,8,at),k.knee.rotation.z=Ye(k.knee.rotation.z,0,8,at)}}function pi(J,at,v){let w=H,h=o.hero,x=o.vq,S=x.camp,T=h.x-x.merW.x,E=h.z-x.merW.z,z=Math.hypot(T,E);if(w.root.visible=z<200,!w.root.visible)return;let X=z<16||!!v,k=X?Math.atan2(T,E):S.rot+.15*Math.sin(J*.3);o.focus&&o.focus.talk&&(k=S.rot+Me(wn(S.rot,Math.atan2(T,E)),-.7,.7)),w.yaw=Sn(w.yaw,k,3,at),w.root.rotation.y=w.yaw,w.root.position.set(x.merW.x,r.VF+S.base,x.merW.z),w.root.scale.y=1+Math.sin(J*1.7)*.007;let N=!!(v&&v.who==="merchant"&&v.shown<[...v.text].length);w.mouth.scale.y=N?.25+Math.abs(Math.sin(J*15))*.9:.3,w.head.rotation.x=N?Math.sin(J*5)*.05:0;let[q,ct]=w.arms;if(x.delivered){for(let Pt of w.arms)Pt.sh.rotation.z=Ye(Pt.sh.rotation.z,Pt.s*2.5,6,at),Pt.el.rotation.x=Ye(Pt.el.rotation.x,-.3+Math.sin(J*9+Pt.s)*.3,8,at);w.root.position.y=r.VF+S.base+Math.abs(Math.sin(J*6))*.06*(o.focus?1:0)}else if(x.caught&&X)ct.sh.rotation.z=Ye(ct.sh.rotation.z,1.35,5,at),ct.el.rotation.x=Ye(ct.el.rotation.x,0,5,at),ct.sh.rotation.x=Ye(ct.sh.rotation.x,-.2,5,at),q.sh.rotation.z=Ye(q.sh.rotation.z,-.12,5,at);else if(X&&z>2.5)ct.sh.rotation.z=Ye(ct.sh.rotation.z,2.55,5,at),ct.el.rotation.x=Ye(ct.el.rotation.x,0,5,at),ct.el.rotation.z=Math.sin(J*8)*.45,ct.sh.rotation.x=0,q.sh.rotation.z=Ye(q.sh.rotation.z,-.12,5,at);else for(let Pt of w.arms)Pt.sh.rotation.z=Ye(Pt.sh.rotation.z,Pt.s*.12,4,at),Pt.el.rotation.z=Ye(Pt.el.rotation.z,0,4,at),Pt.el.rotation.x=Ye(Pt.el.rotation.x,-.25,4,at),Pt.sh.rotation.x=0}function mi(){let J=V.rope;if(J.visible=o.vq.caught&&!o.vq.delivered&&_t.root.visible,!J.visible)return;V.root.updateMatrixWorld(),_t.root.updateMatrixWorld();let at=V.arms[1].wr.getWorldPosition(xe),v=_t.collar.getWorldPosition(Le),w=at.clone().lerp(v,.5);w.y=Math.min(at.y,v.y)-.25,J.geometry.dispose(),J.geometry=new Si(new Ps(at.clone(),w,v.clone()),18,.016,5)}function Fn(J,at){let v=o.wind,w=K.flag.geometry.attributes.position,h=K.flagBase;for(let N=0;N<w.count;N++){let q=h[N*3],ct=h[N*3+1],Pt=q/3.2;w.setXYZ(N,q*(1-v*.05),ct-Pt*Pt*.25*(1-v),Math.sin(J*(4+v*12)-q*(1.6+v*1.5))*Pt*(.18+v*.42)+Math.sin(J*7+ct*3)*.04*Pt)}w.needsUpdate=!0,K.flag.geometry.computeVertexNormals(),K.flag.rotation.y=-.3*v;let x=K.bell;x.v+=(-x.swing*18-x.v*1.4)*at,x.swing+=x.v*at,x.g.rotation.x=x.swing+v*.25*Math.sin(J*6);for(let N of K.lanterns)N.rotation.z=Math.sin(J*(1.6+v*8)+N.position.x)*(.06+v*.45),N.rotation.x=Math.cos(J*(1.3+v*7))*v*.3;let S=K.drops.geometry.attributes.position,T=K.drops.userData.seed;for(let N=0;N<T.length;N++){let[q,ct,Pt]=T[N],Lt=(J*Pt*.9+ct)%1,Yt=.15+Lt*1.6;S.setXYZ(N,Math.cos(q)*Yt+v*Lt*3.5,2.35+Math.sin(Lt*Math.PI)*.7-Lt*1.8,Math.sin(q)*Yt+v*Lt*1.2)}S.needsUpdate=!0,y.offset.x=J*.03,K.water.material.normalScale.set(.6+v,.6+v);let E=K.streaks.geometry.attributes.position,z=K.streaks.userData.seed;K.streaks.material.opacity=oe(.15,.8,v)*.55;for(let N=0;N<z.length;N++){let[,q,ct,Pt]=z[N],Lt=(J*Pt*(.6+v*1.6)+N*.137)%1,Yt=-30+Lt*60,de=1.5+v*3.5,jt=ct+Math.sin(J*2+N)*.6,Ht=q+Math.sin(Lt*9+N)*.4;E.setXYZ(N*2,Yt,Ht,jt+Lt*12-6),E.setXYZ(N*2+1,Yt-de,Ht+.05,jt+Lt*12-6-de*.3)}E.needsUpdate=!0;let X=K.leaves.geometry.attributes.position,k=K.leaves.userData.seed;K.leaves.material.opacity=v*.9;for(let N=0;N<k.length;N++){let[q,ct,Pt,Lt]=k[N],Yt=J*(.5+Lt)*(.4+v)%1;X.setXYZ(N,(q+Yt*70)%60-30,ct*.6+.4+Math.sin(J*3+N)*.5,Pt+Math.sin(J+Lt*6)*2+Yt*6)}X.needsUpdate=!0;for(let N of mt){let q=N.m,[ct,Pt]=q.arms,Lt=1-Math.exp(-6*at);q.root.scale.y=1+Math.sin(J*1.6+N.base.x)*.006,q.root.rotation.x=-v*.14+Math.sin(J*9+N.base.x)*v*.03;let Yt=0,de=-.12,jt=-.25,Ht=0,ie=.12,Xt=-.25;if(v>.25&&(Yt=-2.4,de=0,jt=-1.3),N.kind==="seller")Ht=-.5+Math.sin(J*2)*.1,Xt=-1.2,N.pour>0&&(N.pour-=at,Ht=-1,Xt=-.6);else if(N.kind==="tea"){let re=Math.max(0,Math.sin(J*.5+N.ph))**8;Ht=-.45-re*.7,Xt=-1.25-re*.9}else N.kind==="stand"&&(Yt=v>.25?Yt:-.2,Ht=-.15+Math.sin(J*1.1)*.25*(N.talk>0?1:.3),Xt=-.6);ct.sh.rotation.x+=(Yt-ct.sh.rotation.x)*Lt,ct.sh.rotation.z+=(de-ct.sh.rotation.z)*Lt,ct.el.rotation.x+=(jt-ct.el.rotation.x)*Lt,Pt.sh.rotation.x+=(Ht-Pt.sh.rotation.x)*Lt,Pt.sh.rotation.z+=(ie-Pt.sh.rotation.z)*Lt,Pt.el.rotation.x+=(Xt-Pt.el.rotation.x)*Lt,q.mouth.scale.y=N.talk>0?.25+Math.abs(Math.sin(J*15))*.9:.3,N.talk>0&&(N.talk-=at)}}let Ei=-1;function Ti(J,at={}){let v=performance.now(),w=Ut?Me((v-Ut)/1e3,0,.1):1/60;Ut=v;let h=Zt>=0?Me(J-Zt,0,.1):1/60;Zt=J,d.time.value=J,d.wind.value=Ye(d.wind.value,o.wind,3,h),Q++,ee=ee*.97+(w>1/38?1:0)*.03,Q>90&&ee>.6&&bt>1.01&&(Kt(Gt,se,Math.max(1,bt-.25)),ee=0,Q=0);let x=o.hero;if(!x||!V)return;Ei!==o.vq.camp&&(U(),Ei=o.vq.camp),st(at.budget!=null?at.budget:4,x.x,x.z),Xe(J,h),pn(J,h),En(J,h),pi(J,h,at.dlg),mi(),(s.rad(c.position.x,c.position.z)<120||o.scope)&&Fn(J,h);let S=0;for(let Ht=0;Ht<o.coins.length&&S<ye;Ht++){let ie=o.coins[Ht];ie.taken||(ie.x-x.x)**2+(ie.z-x.z)**2>3600||(ce.position.set(ie.x,ie.y+Math.sin(J*2+Ht)*.08,ie.z),ce.rotation.set(Math.PI/2,J*3+Ht,0),ce.scale.setScalar(1),ce.updateMatrix(),Fe.setMatrixAt(S++,ce.matrix))}Fe.count=S,Fe.instanceMatrix.needsUpdate=!0;for(let[Ht,ie]of Jt)ie.rotation.y=Math.sin(J*2+ie.position.x)*.3,ie.material.color.set(o.reached.has(Ht)?"#FFD23F":"#F4F1EA");if(M.visible=o.vq.caught&&!o.vq.delivered,M.visible){let Ht=.5+.5*Math.sin(J*5);M.userData.ring.scale.setScalar(1+Ht*.08),M.userData.arrow.position.y=1.9+Ht*.25,M.userData.arrow.rotation.y=J*2}for(let Ht of u.flames){let ie=.75+Math.sin(J*13+Ht.userData.i*2)*.18;Ht.scale.set(1,ie,1),Ht.position.y=.12+Ht.userData.h0*ie/2}for(let Ht of u.glows)Ht.material.opacity=.5+Math.sin(J*11)*.08;u.lantern.rotation.z=Math.sin(J*1.6)*.08;let T=Math.abs(c.position.x-(r.x+60))<160&&Math.abs(c.position.z-r.z)<90;for(let Ht of nt){if(Ht.visible=T,!T)continue;let ie=Ht.userData,Xt=ie.ax+Math.sin(J*.45+ie.ph)*2.2,re=ie.az+Math.sin(J*.7+ie.ph*2)*.9;Ht.position.set(Xt,t.H(Xt,re)+.7+Math.sin(J*1.3+ie.ph)*.35,re),Ht.rotation.y=Math.cos(J*.45+ie.ph)>0?-Math.PI/2:Math.PI/2;let ae=Math.sin(J*22+ie.ph)*1.1;ie.l.rotation.y=ae,ie.r.rotation.y=-ae}for(let Ht of b){let ie=Ht.userData,Xt=J*ie.sp+ie.ph;Ht.position.set(ie.cx+Math.cos(Xt)*ie.rad,ie.y+Math.sin(J+ie.ph)*.8,ie.cz+Math.sin(Xt)*ie.rad),Ht.rotation.y=-Xt;let re=Math.sin(J*8+ie.ph)*.6;ie.l.rotation.z=re,ie.r.rotation.z=-re}Wt(h);let E=s.rad(x.x,x.z),z=oe(195,170,E)*oe(78,62,x.y),X=oe(50,95,x.y)*oe(200,120,E),k=Math.max(0,c.position.y-t.SEA),N=oe(20,420,k),q=o.scope?900:Qt(Qt(320,90,z),900,N),ct=o.scope?6500:Qt(Qt(3600,1200,z),6200,N);if(a.fog.near=Ye(a.fog.near,q,2,h),a.fog.far=Ye(a.fog.far,ct,2,h),K.scope.visible=!o.scope,c.fov=o.scope?13:62,c.updateProjectionMatrix(),c.position.copy(it.pos),c.lookAt(it.tgt),at.shake>0){let Ht=at.shake*.25;c.position.x+=(Math.random()-.5)*Ht,c.position.y+=(Math.random()-.5)*Ht}R.position.copy(c.position);let Pt=c.position.x,Lt=c.position.z,Yt=(o.scope?500:0)+oe(40,95,c.position.y)*160;for(let Ht of B){let ie=(Ht.x-Pt)**2+(Ht.z-Lt)**2,Xt=Ht.small?Ht.far:Ht.far+Yt,re=ie<Xt*Xt;if(Ht.lo){let ae=ie<Ht.lodAt*Ht.lodAt&&!o.scope;Ht.m.visible=re&&ae,Ht.lo.visible=re&&!ae}else Ht.m.visible=re}dt.update(J,h,c.position,x,at.budget!=null?at.budget:6);let de=Math.round(x.x/.25)*.25,jt=Math.round(x.z/.25)*.25;_.target.position.set(de,x.y,jt),_.position.set(de+g.x*90,x.y+g.y*90,jt+g.z*90),on(x),n.render(a,c)}let Ln=new j,Hn=new Ct;function on(J){let at=d.see.value;if(o.scope||J.mode==="lift"||J.mode==="carry"){at.w=0;return}c.updateMatrixWorld(),Ln.set(J.x,J.y+.9,J.z).applyMatrix4(c.matrixWorldInverse);let v=-Ln.z;if(v<.3){at.w=0;return}Ln.set(J.x,J.y+.9,J.z).project(c),n.getDrawingBufferSize(Hn);let w=1.6/(v*Math.tan(c.fov*Math.PI/360))*(Hn.y/2);at.set((Ln.x*.5+.5)*Hn.x,(Ln.y*.5+.5)*Hn.y,v,w)}let Nn=new j;function Z(J,at,v){return Nn.set(J,at,v).project(c),{x:(Nn.x+1)/2,y:(1-Nn.y)/2,vis:Nn.z<1&&Nn.z>-1}}function et(J=160){a.updateMatrixWorld(),d.see.value.w=0;let at=new j;H.head.getWorldPosition(at);let v=n.domElement.width,w=n.domElement.height,h=new Xn(28,v/w,.05,1200),x=new j(Math.sin(H.root.rotation.y),0,Math.cos(H.root.rotation.y));h.position.copy(at).addScaledVector(x,1.75).add(new j(0,.05,0)),h.lookAt(at.x,at.y-.02,at.z),R.position.copy(h.position),_.target.position.copy(at),_.position.set(at.x+g.x*60,at.y+g.y*60,at.z+g.z*60);let S=[V&&V.root.visible,_t.root.visible];V&&(V.root.visible=!1),_t.root.visible=!1,n.render(a,h),V&&(V.root.visible=S[0]),_t.root.visible=S[1];let T=document.createElement("canvas");T.width=T.height=J;let E=Math.min(v,w);return T.getContext("2d").drawImage(n.domElement,(v-E)/2,(w-E)/2,E,E,0,0,J,J),T.toDataURL("image/jpeg",.9)}let Rt=(J=1024)=>dt.mapShot(J),At=()=>{for(let J of mt)J.kind==="seller"&&(J.pour=1.4,J.talk=3)},kt=J=>{let at=mt.filter(v=>v.kind===J);at.length&&(at[Math.floor(Math.random()*at.length)].talk=3)},Tt=()=>{K.bell.v+=2.4};function Pe(){if(!V)return null;V.root.updateMatrixWorld(!0);let J=new j,at=o.hero;V.head.getWorldPosition(J);let v=J.y+.115-(at.y+G.pose.by);V.arms[0].sh.getWorldPosition(J);let w=J.clone();return V.arms[1].sh.getWorldPosition(J),{height:+v.toFixed(3),shoulders:+w.distanceTo(J).toFixed(3),leg:+V.pelvis.position.y.toFixed(3)}}return{IV:dt,setSize:Kt,render:Ti,project:Z,heading:Ft,cam:it,portrait:et,mapShot:Rt,buildHi:st,setHero:Et,heroDims:Pe,pourTea:At,talkNpc:kt,ringBell:Tt,renderer:n,scene:a,camera:c,U:d,fx:K,npcs:mt,get pr(){return bt},get hiLeft(){return dt.pending()}}}function zf(i,t={}){let e=performance.now(),n=Pf(t.map||Rf),s=performance.now()-e,r=If(n),o=Df({renderer:t.renderer,sign:t.sign},n,r),a=r.S,l=o.cam,c=Math.round(performance.now()-e);function d(_,R={}){o.setHero(_);let p=r.enter(_.id,R);return l.yaw=a.hero.face,l.pitch=.26,l.init=!1,o.IV.warm(a.hero.x,a.hero.z,a.hero.y+3),p}function f(_,R={}){a.scope?(l.scopeYaw=Me(l.scopeYaw+(R.dyaw||0)*.35,-.9,.9),l.scopePitch=Me(l.scopePitch+(R.dpitch||0)*-.3,-.75,.2)):(l.yaw+=R.dyaw||0,l.pitch=Me(l.pitch+(R.dpitch||0),-.3,1.15));let p=R.jx||0,y=R.jy||0,P=Math.cos(l.yaw),F=Math.sin(l.yaw),I={mx:P*y-F*p,mz:F*y+P*p,mag:R.mag||0,jump:!!R.jump,sneak:!!R.sneak},B=r.step(_,I);for(let D of B)Array.isArray(D)&&D[0]==="respawn"&&(l.yaw=a.hero.face,l.init=!1,o.IV.warm(a.hero.x,a.hero.z,a.hero.y+3));return B}function m(_){return _==="scope"?(r.interact("scope"),l.scopeYaw=0,l.scopePitch=-.2,a.scope):_==="tea"?(r.interact("tea"),o.pourTea(),!0):_==="chat"?(o.talkNpc("tea"),!0):_==="bell"?(o.ringBell(),!0):r.interact(_)}return{G:n,sim:r,view:o,S:a,cam:l,enter:d,step:f,interact:m,threats:()=>r.beasts.filter(_=>_.state==="chase"||_.state==="charge"||_.state==="notice").map(_=>({kind:_.kind,x:_.x,y:_.y,z:_.z,state:_.state})),render:o.render,setSize:o.setSize,project:o.project,heading:o.heading,nearInteract:r.nearInteract,skipWait:r.skipWait,objective:r.objective,trackTarget:r.trackTarget,setTrack:r.setTrack,have:r.have,respawn:r.respawn,setTools:r.setTools,mapShot:o.mapShot,portrait:o.portrait,ground:n.H,warm:(_,R,p)=>o.IV.warm(_,R,p),info:{HALF:n.HALF,M:n.M,V:n.V,I:n.I,SEA:n.SEA,rest:n.restPoints,buildMs:c,geoMs:Math.round(s)},renderer:o.renderer,scene:o.scene,camera:o.camera,U:o.U,get pr(){return o.pr}}}return Vf(j1);})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
