/* نطّة — مشهد الوادي 3D. يتضمن three.js r187 (MIT, © 2010-2026 three.js authors) */
var NattaValley3D=(()=>{var xc=Object.defineProperty;var Tf=Object.getOwnPropertyDescriptor;var Cf=Object.getOwnPropertyNames;var Rf=Object.prototype.hasOwnProperty;var Pf=(i,t)=>{for(var e in t)xc(i,e,{get:t[e],enumerable:!0})},If=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Cf(t))!Rf.call(i,s)&&s!==e&&xc(i,s,{get:()=>t[s],enumerable:!(n=Tf(t,s))||n.enumerable});return i};var Ff=i=>If(xc({},"__esModule",{value:!0}),i);var R_={};Pf(R_,{create:()=>Mf,createMountain:()=>Sf,makeRenderer:()=>tc,supported:()=>yf});var il="188dev";var Wu=0,nh=1,Xu=2;var Gs=1,qu=2,Ar=3,bs=0,Un=1,en=2,Vs=0,Er=1,ri=2,ih=3,sh=4,Yu=5;var Hs=100,Zu=101,Ju=102,$u=103,Ku=104,Qu=200,ju=201,td=202,ed=203,rh=204,oh=205,nd=206,id=207,sd=208,rd=209,od=210,ad=211,ld=212,cd=213,hd=214,_a=0,ya=1,va=2,mr=3,Ma=4,Sa=5,wa=6,ba=7,So=0,ud=1,dd=2,qi=0,ah=1,lh=2,ch=3,wo=4,hh=5,uh=6,dh=7;var fh=300,Ws=301,Tr=302,sl=303,rl=304,gr=1e3,Gi=1001,Aa=1002,Dn=1003,fd=1004;var bo=1005;var qn=1006,ol=1007;var cs=1008;var Kn=1009,ph=1010,mh=1011,Cr=1012,al=1013,Li=1014,vi=1015,Di=1016,ll=1017,cl=1018,Xs=1020,gh=35902,xh=35899,_h=1021,yh=1022,Ni=1023,rs=1026,hs=1027,hl=1028,ul=1029,As=1030,dl=1031;var fl=1033,Ao=33776,Eo=33777,To=33778,Co=33779,pl=35840,ml=35841,gl=35842,xl=35843,_l=36196,yl=37492,vl=37496,Ml=37488,Sl=37489,Ro=37490,wl=37491,bl=37808,Al=37809,El=37810,Tl=37811,Cl=37812,Rl=37813,Pl=37814,Il=37815,Fl=37816,Ll=37817,Dl=37818,Nl=37819,Ul=37820,zl=37821,Ol=36492,Bl=36494,kl=36495,Gl=36283,Vl=36284,Po=36285,Hl=36286;var Xr=2300,Ea=2301,ga=2302,Xc=2303,qc=2400,Yc=2401,Zc=2402;var pd=3200;var Io=0,md=1,us="",Xn="srgb",qr="srgb-linear",Yr="linear",pn="srgb";var xa=7680;var gd=519,xd=512,_d=513,yd=514,vh=515,vd=516,Md=517,Mh=518,Sh=519,wh=35044;var bh="300 es",hi=2e3,xr=2001;function Lf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}var Df={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};typeof Float16Array<"u"&&(Df.Float16Array=Float16Array);function Nf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sd(){let i=Zr("canvas");return i.style.display="block",i}var su={},_r=null;function Jr(...i){let t="THREE."+i.shift();_r?_r("log",t,...i):console.log(t,...i)}function wd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Le(...i){i=wd(i);let t="THREE."+i.shift();if(_r)_r("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ze(...i){i=wd(i);let t="THREE."+i.shift();if(_r)_r("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Vr(...i){let t=i.join(" ");t in su||(su[t]=!0,Le(...i))}function bd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Ad={[_a]:_a,[va]:wa,[Ma]:Ma,[mr]:Sa,[ya]:ya,[wa]:va,[ba]:ba,[Sa]:mr},Hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var _c=Math.PI/180,Ta=180/Math.PI;function Es(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gn[i&255]+Gn[i>>8&255]+Gn[i>>16&255]+Gn[i>>24&255]+"-"+Gn[t&255]+Gn[t>>8&255]+"-"+Gn[t>>16&15|64]+Gn[t>>24&255]+"-"+Gn[e&63|128]+Gn[e>>8&255]+"-"+Gn[e>>16&255]+Gn[e>>24&255]+Gn[n&255]+Gn[n>>8&255]+Gn[n>>16&255]+Gn[n>>24&255]).toLowerCase()}function sn(i,t,e){return Math.max(t,Math.min(e,i))}function Uf(i,t){return(i%t+t)%t}function yc(i,t,e){return(1-e)*i+e*t}function Ed(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Td(i,t){if(t.constructor===Float32Array)return i;let e=Wl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Cd(i,t){if(t.constructor===Float32Array)return i;let e=Wl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Ph=class Ph{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=sn(this.x,t.x,e.x),this.y=sn(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=sn(this.x,t,e),this.y=sn(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(sn(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ph.prototype.isVector2=!0;var ot=Ph,ui=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],d=r[o+0],u=r[o+1],g=r[o+2],A=r[o+3];if(p!==A||l!==d||c!==u||h!==g){let m=l*d+c*u+h*g+p*A;m<0&&(d=-d,u=-u,g=-g,A=-A,m=-m);let f=1-a;if(m<.9995){let M=Math.acos(m),R=Math.sin(M);f=Math.sin(f*M)/R,a=Math.sin(a*M)/R,l=l*f+d*a,c=c*f+u*a,h=h*f+g*a,p=p*f+A*a}else{l=l*f+d*a,c=c*f+u*a,h=h*f+g*a,p=p*f+A*a;let M=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=M,c*=M,h*=M,p*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[o],d=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+h*p+l*u-c*d,t[e+1]=l*g+h*d+c*p-a*u,t[e+2]=c*g+h*u+a*d-l*p,t[e+3]=h*g-a*p-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),p=a(r/2),d=l(n/2),u=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*p+c*u*g,this._y=c*u*p-d*h*g,this._z=c*h*g+d*u*p,this._w=c*h*p-d*u*g;break;case"YXZ":this._x=d*h*p+c*u*g,this._y=c*u*p-d*h*g,this._z=c*h*g-d*u*p,this._w=c*h*p+d*u*g;break;case"ZXY":this._x=d*h*p-c*u*g,this._y=c*u*p+d*h*g,this._z=c*h*g+d*u*p,this._w=c*h*p-d*u*g;break;case"ZYX":this._x=d*h*p-c*u*g,this._y=c*u*p+d*h*g,this._z=c*h*g-d*u*p,this._w=c*h*p+d*u*g;break;case"YZX":this._x=d*h*p+c*u*g,this._y=c*u*p+d*h*g,this._z=c*h*g-d*u*p,this._w=c*h*p-d*u*g;break;case"XZY":this._x=d*h*p-c*u*g,this._y=c*u*p-d*h*g,this._z=c*h*g+d*u*p,this._w=c*h*p+d*u*g;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],p=e[10],d=n+a+p;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>p){let u=2*Math.sqrt(1+n-a-p);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>p){let u=2*Math.sqrt(1+a-n-p);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+p-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(sn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ih=class Ih{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ru.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ru.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),p=2*(r*n-o*e);return this.x=e+l*c+o*p-a*h,this.y=n+l*h+a*c-r*p,this.z=s+l*p+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=sn(this.x,t.x,e.x),this.y=sn(this.y,t.y,e.y),this.z=sn(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=sn(this.x,t,e),this.y=sn(this.y,t,e),this.z=sn(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(sn(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vc.copy(this).projectOnVector(t),this.sub(vc)}reflect(t){return this.sub(vc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ih.prototype.isVector3=!0;var O=Ih,vc=new O,ru=new ui,Fh=class Fh{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],p=n[7],d=n[2],u=n[5],g=n[8],A=s[0],m=s[3],f=s[6],M=s[1],R=s[4],b=s[7],D=s[2],I=s[5],x=s[8];return r[0]=o*A+a*M+l*D,r[3]=o*m+a*R+l*I,r[6]=o*f+a*b+l*x,r[1]=c*A+h*M+p*D,r[4]=c*m+h*R+p*I,r[7]=c*f+h*b+p*x,r[2]=d*A+u*M+g*D,r[5]=d*m+u*R+g*I,r[8]=d*f+u*b+g*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=h*o-a*c,d=a*l-h*r,u=c*r-o*l,g=e*p+n*d+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/g;return t[0]=p*A,t[1]=(s*c-h*n)*A,t[2]=(a*n-s*o)*A,t[3]=d*A,t[4]=(h*e-s*l)*A,t[5]=(s*r-a*e)*A,t[6]=u*A,t[7]=(n*l-c*e)*A,t[8]=(o*e-n*r)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Vr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mc.makeScale(t,e)),this}rotate(t){return Vr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mc.makeRotation(-t)),this}translate(t,e){return Vr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Fh.prototype.isMatrix3=!0;var We=Fh,Mc=new We,ou=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),au=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zf(){let i={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pn&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pn&&(s.r=pr(s.r),s.g=pr(s.g),s.b=pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===us?Yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qr]:{primaries:t,whitePoint:n,transfer:Yr,toXYZ:ou,fromXYZ:au,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:t,whitePoint:n,transfer:pn,toXYZ:ou,fromXYZ:au,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),i}var on=zf();function ss(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $s,Ca=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{$s===void 0&&($s=Zr("canvas")),$s.width=t.width,$s.height=t.height;let s=$s.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=$s}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Zr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ss(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ss(e[n]/255)*255):e[n]=ss(e[n]);return{data:e,width:t.width,height:t.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Of=0,yr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=Es(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Sc(s[o].image)):r.push(Sc(s[o]))}else r=Sc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Sc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ca.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var Bf=0,wc=new O,Yn=class i extends Hi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Gi,s=Gi,r=qn,o=cs,a=Ni,l=Kn,c=i.DEFAULT_ANISOTROPY,h=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Es(),this.name="",this.source=new yr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(wc).x}get height(){return this.source.getSize(wc).y}get depth(){return this.source.getSize(wc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Le(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Le(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gr:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case Aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gr:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case Aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=fh;Yn.DEFAULT_ANISOTROPY=1;var Lh=class Lh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){let e=sn(t.w,-1,1);this.w=2*Math.acos(e);let n=Math.sqrt(1-e*e);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],d=l[1],u=l[5],g=l[9],A=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-A)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+A)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,b=(u+1)/2,D=(f+1)/2,I=(h+d)/4,x=(p+A)/4,C=(g+m)/4;return R>b&&R>D?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=I/n,r=x/n):b>D?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=I/s,r=C/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=x/r,s=C/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(p-A)*(p-A)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(p-A)/M,this.z=(d-h)/M,this.w=Math.acos((c+u+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=sn(this.x,t.x,e.x),this.y=sn(this.y,t.y,e.y),this.z=sn(this.z,t.z,e.z),this.w=sn(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=sn(this.x,t,e),this.y=sn(this.y,t,e),this.z=sn(this.z,t,e),this.w=sn(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(sn(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lh.prototype.isVector4=!0;var vn=Lh,Ra=class extends Hi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new vn(0,0,t,e),this.scissorTest=!1,this.viewport=new vn(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Yn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++){let o=this.textures[s],a=o.images?o.images[0]:o.image;a.width=t,a.height=e,a.depth=n,o.isData3DTexture!==!0&&(o.isArrayTexture=a.depth>1)}this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new yr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ei=class extends Ra{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},$r=class extends Yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pa=class extends Yn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var nl=class nl{constructor(t,e,n,s,r,o,a,l,c,h,p,d,u,g,A,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,p,d,u,g,A,m)}set(t,e,n,s,r,o,a,l,c,h,p,d,u,g,A,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=d,f[3]=u,f[7]=g,f[11]=A,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ks.setFromMatrixColumn(t,0).length(),r=1/Ks.setFromMatrixColumn(t,1).length(),o=1/Ks.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let d=o*h,u=o*p,g=a*h,A=a*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=u+g*c,e[5]=d-A*c,e[9]=-a*l,e[2]=A-d*c,e[6]=g+u*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,u=l*p,g=c*h,A=c*p;e[0]=d+A*a,e[4]=g*a-u,e[8]=o*c,e[1]=o*p,e[5]=o*h,e[9]=-a,e[2]=u*a-g,e[6]=A+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,u=l*p,g=c*h,A=c*p;e[0]=d-A*a,e[4]=-o*p,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*h,e[9]=A-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,u=o*p,g=a*h,A=a*p;e[0]=l*h,e[4]=g*c-u,e[8]=d*c+A,e[1]=l*p,e[5]=A*c+d,e[9]=u*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,u=o*c,g=a*l,A=a*c;e[0]=l*h,e[4]=A-d*p,e[8]=g*p+u,e[1]=p,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*p+g,e[10]=d-A*p}else if(t.order==="XZY"){let d=o*l,u=o*c,g=a*l,A=a*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=d*p+A,e[5]=o*h,e[9]=u*p-g,e[2]=g*p-u,e[6]=a*h,e[10]=A*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kf,t,Gf)}lookAt(t,e,n){let s=this.elements;return jn.subVectors(t,e),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),ps.crossVectors(n,jn),ps.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),ps.crossVectors(n,jn)),ps.normalize(),Bo.crossVectors(jn,ps),s[0]=ps.x,s[4]=Bo.x,s[8]=jn.x,s[1]=ps.y,s[5]=Bo.y,s[9]=jn.y,s[2]=ps.z,s[6]=Bo.z,s[10]=jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],p=n[5],d=n[9],u=n[13],g=n[2],A=n[6],m=n[10],f=n[14],M=n[3],R=n[7],b=n[11],D=n[15],I=s[0],x=s[4],C=s[8],k=s[12],F=s[1],Q=s[5],it=s[9],Y=s[13],ct=s[2],et=s[6],rt=s[10],nt=s[14],dt=s[3],pt=s[7],St=s[11],Ht=s[15];return r[0]=o*I+a*F+l*ct+c*dt,r[4]=o*x+a*Q+l*et+c*pt,r[8]=o*C+a*it+l*rt+c*St,r[12]=o*k+a*Y+l*nt+c*Ht,r[1]=h*I+p*F+d*ct+u*dt,r[5]=h*x+p*Q+d*et+u*pt,r[9]=h*C+p*it+d*rt+u*St,r[13]=h*k+p*Y+d*nt+u*Ht,r[2]=g*I+A*F+m*ct+f*dt,r[6]=g*x+A*Q+m*et+f*pt,r[10]=g*C+A*it+m*rt+f*St,r[14]=g*k+A*Y+m*nt+f*Ht,r[3]=M*I+R*F+b*ct+D*dt,r[7]=M*x+R*Q+b*et+D*pt,r[11]=M*C+R*it+b*rt+D*St,r[15]=M*k+R*Y+b*nt+D*Ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],p=t[6],d=t[10],u=t[14],g=t[3],A=t[7],m=t[11],f=t[15],M=l*u-c*d,R=a*u-c*p,b=a*d-l*p,D=o*u-c*h,I=o*d-l*h,x=o*p-a*h;return e*(A*M-m*R+f*b)-n*(g*M-m*D+f*I)+s*(g*R-A*D+f*x)-r*(g*b-A*I+m*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=t[9],d=t[10],u=t[11],g=t[12],A=t[13],m=t[14],f=t[15],M=e*a-n*o,R=e*l-s*o,b=e*c-r*o,D=n*l-s*a,I=n*c-r*a,x=s*c-r*l,C=h*A-p*g,k=h*m-d*g,F=h*f-u*g,Q=p*m-d*A,it=p*f-u*A,Y=d*f-u*m,ct=M*Y-R*it+b*Q+D*F-I*k+x*C;if(ct===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let et=1/ct;return t[0]=(a*Y-l*it+c*Q)*et,t[1]=(s*it-n*Y-r*Q)*et,t[2]=(A*x-m*I+f*D)*et,t[3]=(d*I-p*x-u*D)*et,t[4]=(l*F-o*Y-c*k)*et,t[5]=(e*Y-s*F+r*k)*et,t[6]=(m*b-g*x-f*R)*et,t[7]=(h*x-d*b+u*R)*et,t[8]=(o*it-a*F+c*C)*et,t[9]=(n*F-e*it-r*C)*et,t[10]=(g*I-A*b+f*M)*et,t[11]=(p*b-h*I-u*M)*et,t[12]=(a*k-o*Q-l*C)*et,t[13]=(e*Q-n*k+s*C)*et,t[14]=(A*R-g*D-m*M)*et,t[15]=(h*D-p*R+d*M)*et,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,p=a+a,d=r*c,u=r*h,g=r*p,A=o*h,m=o*p,f=a*p,M=l*c,R=l*h,b=l*p,D=n.x,I=n.y,x=n.z;return s[0]=(1-(A+f))*D,s[1]=(u+b)*D,s[2]=(g-R)*D,s[3]=0,s[4]=(u-b)*I,s[5]=(1-(d+f))*I,s[6]=(m+M)*I,s[7]=0,s[8]=(g+R)*x,s[9]=(m-M)*x,s[10]=(1-(d+A))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ks.set(s[0],s[1],s[2]).length(),a=Ks.set(s[4],s[5],s[6]).length(),l=Ks.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ai.copy(this);let c=1/o,h=1/a,p=1/l;return Ai.elements[0]*=c,Ai.elements[1]*=c,Ai.elements[2]*=c,Ai.elements[4]*=h,Ai.elements[5]*=h,Ai.elements[6]*=h,Ai.elements[8]*=p,Ai.elements[9]*=p,Ai.elements[10]*=p,e.setFromRotationMatrix(Ai),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=hi,l=!1){let c=this.elements,h=2*r/(e-t),p=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),g,A;if(l)g=r/(o-r),A=o*r/(o-r);else if(a===hi)g=-(o+r)/(o-r),A=-2*o*r/(o-r);else if(a===xr)g=-o/(o-r),A=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=A,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=hi,l=!1){let c=this.elements,h=2/(e-t),p=2/(n-s),d=-(e+t)/(e-t),u=-(n+s)/(n-s),g,A;if(l)g=1/(o-r),A=o/(o-r);else if(a===hi)g=-2/(o-r),A=-(o+r)/(o-r);else if(a===xr)g=-1/(o-r),A=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=A,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};nl.prototype.isMatrix4=!0;var hn=nl,Ks=new O,Ai=new hn,kf=new O(0,0,0),Gf=new O(1,1,1),ps=new O,Bo=new O,jn=new O,lu=new hn,cu=new ui,di=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],p=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-sn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cu.setFromEuler(this),this.setFromQuaternion(cu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};di.DEFAULT_ORDER="XYZ";var Kr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vf=0,hu=new O,Qs=new ui,Qi=new hn,ko=new O,Ir=new O,Hf=new O,Wf=new ui,uu=new O(1,0,0),du=new O(0,1,0),fu=new O(0,0,1),pu={type:"added"},Xf={type:"removed"},js={type:"childadded",child:null},bc={type:"childremoved",child:null},mn=class i extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new di,n=new ui,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new hn},normalMatrix:{value:new We}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qs.setFromAxisAngle(t,e),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(t,e){return Qs.setFromAxisAngle(t,e),this.quaternion.premultiply(Qs),this}rotateX(t){return this.rotateOnAxis(uu,t)}rotateY(t){return this.rotateOnAxis(du,t)}rotateZ(t){return this.rotateOnAxis(fu,t)}translateOnAxis(t,e){return hu.copy(t).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uu,t)}translateY(t){return this.translateOnAxis(du,t)}translateZ(t){return this.translateOnAxis(fu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ko.copy(t):ko.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Ir,ko,this.up):Qi.lookAt(ko,Ir,this.up),this.quaternion.setFromRotationMatrix(Qi),s&&(Qi.extractRotation(s.matrixWorld),Qs.setFromRotationMatrix(Qi),this.quaternion.premultiply(Qs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ze("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pu),js.child=t,this.dispatchEvent(js),js.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xf),bc.child=t,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pu),js.child=t,this.dispatchEvent(js),js.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,t,Hf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,Wf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1)===!0&&(n=!0),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}return n}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),p=o(t.shapes),d=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};mn.DEFAULT_UP=new O(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ue=class extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},qf={type:"move"},vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let A of t.hand.values()){let m=e.getJointPose(A,n),f=this._getHandJoint(c,A);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=h.position.distanceTo(p.position),u=.02,g=.005;c.inputState.pinching&&d>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function Ac(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ee=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,on.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=on.workingColorSpace){return this.r=t,this.g=e,this.b=n,on.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=on.workingColorSpace){if(t=Uf(t,1),e=sn(e,0,1),n=sn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ac(o,r,t+1/3),this.g=Ac(o,r,t),this.b=Ac(o,r,t-1/3)}return on.colorSpaceToWorking(this,s),this}setStyle(t,e=Xn){function n(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Le("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Le("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xn){let n=Rd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Le("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}copyLinearToSRGB(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xn){return on.workingToColorSpace(Vn.copy(this),t),Math.round(sn(Vn.r*255,0,255))*65536+Math.round(sn(Vn.g*255,0,255))*256+Math.round(sn(Vn.b*255,0,255))}getHexString(t=Xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=on.workingColorSpace){on.workingToColorSpace(Vn.copy(this),e);let n=Vn.r,s=Vn.g,r=Vn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=on.workingColorSpace){return on.workingToColorSpace(Vn.copy(this),e),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=Xn){on.workingToColorSpace(Vn.copy(this),t);let e=Vn.r,n=Vn.g,s=Vn.b;return t!==Xn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(Cs),Ei.s===0&&(Ei.h=Cs.h),Cs.s===0&&(Cs.h=Ei.h);let n=yc(Ei.h,Cs.h,e),s=yc(Ei.s,Cs.s,e),r=yc(Ei.l,Cs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vn=new Ee;Ee.NAMES=Rd;var Ls=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ee(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ds=class extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ti=new O,ji=new O,Ec=new O,ts=new O,tr=new O,er=new O,mu=new O,Tc=new O,Cc=new O,Rc=new O,Pc=new vn,Ic=new vn,Fc=new vn,is=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ti.subVectors(t,e),s.cross(Ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ti.subVectors(s,e),ji.subVectors(n,e),Ec.subVectors(t,e);let o=Ti.dot(Ti),a=Ti.dot(ji),l=Ti.dot(Ec),c=ji.dot(ji),h=ji.dot(Ec),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;let d=1/p,u=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ts)===null?!1:ts.x>=0&&ts.y>=0&&ts.x+ts.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ts.x),l.addScaledVector(o,ts.y),l.addScaledVector(a,ts.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Pc.setScalar(0),Ic.setScalar(0),Fc.setScalar(0),Pc.fromBufferAttribute(t,e),Ic.fromBufferAttribute(t,n),Fc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Pc,r.x),o.addScaledVector(Ic,r.y),o.addScaledVector(Fc,r.z),o}static isFrontFacing(t,e,n,s){return Ti.subVectors(n,e),ji.subVectors(t,e),Ti.cross(ji).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),Ti.cross(ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;tr.subVectors(s,n),er.subVectors(r,n),Tc.subVectors(t,n);let l=tr.dot(Tc),c=er.dot(Tc);if(l<=0&&c<=0)return e.copy(n);Cc.subVectors(t,s);let h=tr.dot(Cc),p=er.dot(Cc);if(h>=0&&p<=h)return e.copy(s);let d=l*p-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(tr,o);Rc.subVectors(t,r);let u=tr.dot(Rc),g=er.dot(Rc);if(g>=0&&u<=g)return e.copy(r);let A=u*c-l*g;if(A<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(er,a);let m=h*g-u*p;if(m<=0&&p-h>=0&&u-g>=0)return mu.subVectors(r,s),a=(p-h)/(p-h+(u-g)),e.copy(s).addScaledVector(mu,a);let f=1/(m+A+d);return o=A*f,a=d*f,e.copy(n).addScaledVector(tr,o).addScaledVector(er,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Wi=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ci):Ci.fromBufferAttribute(r,o),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Go.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Go.copy(n.boundingBox)),Go.applyMatrix4(t.matrixWorld),this.union(Go)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fr),Vo.subVectors(this.max,Fr),nr.subVectors(t.a,Fr),ir.subVectors(t.b,Fr),sr.subVectors(t.c,Fr),ms.subVectors(ir,nr),gs.subVectors(sr,ir),Rs.subVectors(nr,sr);let e=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Rs.z,Rs.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Rs.z,0,-Rs.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Rs.y,Rs.x,0];return!Lc(e,nr,ir,sr,Vo)||(e=[1,0,0,0,1,0,0,0,1],!Lc(e,nr,ir,sr,Vo))?!1:(Ho.crossVectors(ms,gs),e=[Ho.x,Ho.y,Ho.z],Lc(e,nr,ir,sr,Vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(es),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},es=[new O,new O,new O,new O,new O,new O,new O,new O],Ci=new O,Go=new Wi,nr=new O,ir=new O,sr=new O,ms=new O,gs=new O,Rs=new O,Fr=new O,Vo=new O,Ho=new O,Ps=new O;function Lc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ps.fromArray(i,r);let a=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),l=t.dot(Ps),c=e.dot(Ps),h=n.dot(Ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var An=new O,Wo=new ot,Yf=0,Ve=class extends Hi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wh,this.updateRanges=[],this.gpuType=vi,this.version=0,this._normalizationScale=t!==void 0?Wl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Wo.fromBufferAttribute(this,e),Wo.applyMatrix3(t),this.setXY(e,Wo.x,Wo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)An.fromBufferAttribute(this,e),An.applyMatrix3(t),this.setXYZ(e,An.x,An.y,An.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)An.fromBufferAttribute(this,e),An.applyMatrix4(t),this.setXYZ(e,An.x,An.y,An.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)An.fromBufferAttribute(this,e),An.applyNormalMatrix(t),this.setXYZ(e,An.x,An.y,An.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)An.fromBufferAttribute(this,e),An.transformDirection(t),this.setXYZ(e,An.x,An.y,An.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Td(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Cd(t,this.array)}};var Qr=class extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var jr=class extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var He=class extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}},Zf=new Wi,Lr=new O,Dc=new O,Xi=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Zf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lr.subVectors(t,this.center);let e=Lr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Lr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lr.copy(t.center).add(Dc)),this.expandByPoint(Lr.copy(t.center).sub(Dc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Jf=0,ci=new hn,Nc=new mn,rr=new O,ti=new Wi,Dr=new Wi,Bi=new O,Xo=new O,qo=new O,qe=class i extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Lf(t)?jr:Qr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,e,n){return ci.makeTranslation(t,e,n),this.applyMatrix4(ci),this}scale(t,e,n){return ci.makeScale(t,e,n),this.applyMatrix4(ci),this}lookAt(t){return Nc.lookAt(t),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new He(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ti.setFromBufferAttribute(r),this.morphTargetsRelative?(Xo.addVectors(this.boundingBox.min,ti.min),qo.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Xo),this.boundingBox.expandByPoint(qo)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Xo.addVectors(ti.min,Dr.min),qo.addVectors(ti.max,Dr.max),ti.expandByPoint(Xo),ti.expandByPoint(qo)):(ti.expandByPoint(Dr.min),ti.expandByPoint(Dr.max))}ti.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Bi.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Bi));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Bi.fromBufferAttribute(a,c),l&&(rr.fromBufferAttribute(t,c),Bi.add(rr)),s=Math.max(s,n.distanceToSquared(Bi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ve(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let k=0;k<n.count;k++)a[k]=new O,l[k]=new O;let h=new O,p=new O,d=new O,u=new ot,g=new ot,A=new ot,m=new O,f=new O;function M(k,F,Q){c[k]=c[F]=c[Q]=1,h.fromBufferAttribute(n,k),p.fromBufferAttribute(n,F),d.fromBufferAttribute(n,Q),u.fromBufferAttribute(r,k),g.fromBufferAttribute(r,F),A.fromBufferAttribute(r,Q),p.sub(h),d.sub(h),g.sub(u),A.sub(u);let it=1/(g.x*A.y-A.x*g.y);isFinite(it)&&(m.copy(p).multiplyScalar(A.y).addScaledVector(d,-g.y).multiplyScalar(it),f.copy(d).multiplyScalar(g.x).addScaledVector(p,-A.x).multiplyScalar(it),a[k].add(m),a[F].add(m),a[Q].add(m),l[k].add(f),l[F].add(f),l[Q].add(f))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let k=0,F=R.length;k<F;++k){let Q=R[k],it=Q.start,Y=Q.count;for(let ct=it,et=Math.min(t.count,it+Y);ct<et;ct+=3)M(t.getX(ct+0),t.getX(ct+1),t.getX(ct+2))}let b=new O,D=new O,I=new O,x=new O;function C(k){I.fromBufferAttribute(s,k),x.copy(I);let F=a[k];b.copy(F),b.sub(I.multiplyScalar(I.dot(F))).normalize(),b.lengthSq()===0&&(Math.abs(x.x)<.9?b.set(1,0,0):b.set(0,1,0),b.crossVectors(x,b).normalize()),D.crossVectors(x,F);let it=D.dot(l[k])<0?-1:1;o.setXYZW(k,b.x,b.y,b.z,it)}for(let k=0,F=n.count;k<F;++k)c[k]&&C(k);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,p=new O;if(t)for(let d=0,u=t.count;d<u;d+=3){let g=t.getX(d+0),A=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,A),o.fromBufferAttribute(e,m),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(A,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Bi.fromBufferAttribute(t,e),Bi.normalize(),t.setXYZ(e,Bi.x,Bi.y,Bi.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,p=a.normalized,d=new c.constructor(l.length*h),u=0,g=0;for(let A=0,m=l.length;A<m;A++){a.isInterleavedBufferAttribute?u=l[A]*a.data.stride+a.offset:u=l[A]*h;for(let f=0;f<h;f++)d[g++]=c[u++]}return new Ve(d,h,p)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,p=c.length;h<p;h++){let d=c[h],u=t(d,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,d=c.length;p<d;p++){let u=c[p];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let d=0,u=p.length;d<u;d++)h.push(p[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ia=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=wh,this.updateRanges=[],this.version=0,this.uuid=Es()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=gu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=gu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function gu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Es()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Wn=new O,to=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Wl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Wn.fromBufferAttribute(this,e),Wn.applyMatrix4(t),this.setXYZ(e,Wn.x,Wn.y,Wn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Wn.fromBufferAttribute(this,e),Wn.applyNormalMatrix(t),this.setXYZ(e,Wn.x,Wn.y,Wn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Wn.fromBufferAttribute(this,e),Wn.transformDirection(t),this.setXYZ(e,Wn.x,Wn.y,Wn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Jr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ve(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Jr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Td(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Cd(t,this.data.array)}},Uc=new O,$f=new O,Kf=new We,Ri=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Uc.subVectors(n,e).cross($f.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Uc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Kf.getNormalMatrix(t),s=this.coplanarPoint(Uc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Qf=0,fi=class extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=Er,this.side=bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=oh,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xa,this.stencilZFail=xa,this.stencilZPass=xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Le(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Le(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ee().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ri().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},pi=class extends fi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},or,Nr=new O,ar=new O,lr=new O,cr=new ot,Ur=new ot,Pd=new hn,Yo=new O,zr=new O,Zo=new O,xu=new ot,zc=new ot,_u=new ot,Pi=class extends mn{constructor(t=new pi){if(super(),this.isSprite=!0,this.type="Sprite",or===void 0){or=new qe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ia(e,5);or.setIndex([0,1,2,0,2,3]),or.setAttribute("position",new to(n,3,0,!1)),or.setAttribute("uv",new to(n,2,3,!1))}this.geometry=or,this.material=t,this.center=new ot(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ar.setFromMatrixScale(this.matrixWorld),Pd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),lr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ar.multiplyScalar(-lr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Jo(Yo.set(-.5,-.5,0),lr,o,ar,s,r),Jo(zr.set(.5,-.5,0),lr,o,ar,s,r),Jo(Zo.set(.5,.5,0),lr,o,ar,s,r),xu.set(0,0),zc.set(1,0),_u.set(1,1);let a=t.ray.intersectTriangle(Yo,zr,Zo,!1,Nr);if(a===null&&(Jo(zr.set(-.5,.5,0),lr,o,ar,s,r),zc.set(0,1),a=t.ray.intersectTriangle(Yo,Zo,zr,!1,Nr),a===null))return;let l=t.ray.origin.distanceTo(Nr);l<t.near||l>t.far||e.push({distance:l,point:Nr.clone(),uv:is.getInterpolation(Nr,Yo,zr,Zo,xu,zc,_u,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this.count=t.count,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Jo(i,t,e,n,s,r){cr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ur.x=r*cr.x-s*cr.y,Ur.y=s*cr.x+r*cr.y):Ur.copy(cr),i.copy(t),i.x+=Ur.x,i.y+=Ur.y,i.applyMatrix4(Pd)}var ns=new O,Oc=new O,$o=new O,Ko=new O,Mr=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ns)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ns.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ns.copy(this.origin).addScaledVector(this.direction,e),ns.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Oc.copy(t).add(e).multiplyScalar(.5),$o.copy(e).sub(t).normalize(),Ko.copy(this.origin).sub(Oc);let r=t.distanceTo(e)*.5,o=-this.direction.dot($o),a=Ko.dot(this.direction),l=-Ko.dot($o),c=Ko.lengthSq(),h=Math.abs(1-o*o),p,d,u,g;if(h>0)if(p=o*l-a,d=o*a-l,g=r*h,p>=0)if(d>=-g)if(d<=g){let A=1/h;p*=A,d*=A,u=p*(p+o*d+2*a)+d*(o*p+d+2*l)+c}else d=r,p=Math.max(0,-(o*d+a)),u=-p*p+d*(d+2*l)+c;else d=-r,p=Math.max(0,-(o*d+a)),u=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-o*r+a)),d=p>0?-r:Math.min(Math.max(-r,-l),r),u=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(p=Math.max(0,-(o*r+a)),d=p>0?r:Math.min(Math.max(-r,-l),r),u=-p*p+d*(d+2*l)+c);else d=o>0?-r:r,p=Math.max(0,-(o*d+a)),u=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Oc).addScaledVector($o,d),u}intersectSphere(t,e){if(t.radius<0)return null;ns.subVectors(t.center,this.origin);let n=ns.dot(this.direction),s=ns.dot(ns)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(a=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ns)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,p=t.x-o.x,d=t.y-o.y,u=t.z-o.z,g=e.x-o.x,A=e.y-o.y,m=e.z-o.z,f=n.x-o.x,M=n.y-o.y,R=n.z-o.z,b=Math.abs(l),D=Math.abs(c),I=Math.abs(h),x,C,k,F,Q,it,Y,ct,et,rt,nt,dt;if(b>=D&&b>=I?(k=l,it=p,et=g,dt=f,l>=0?(x=c,C=h,F=d,Q=u,Y=A,ct=m,rt=M,nt=R):(x=h,C=c,F=u,Q=d,Y=m,ct=A,rt=R,nt=M)):D>=I?(k=c,it=d,et=A,dt=M,c>=0?(x=h,C=l,F=u,Q=p,Y=m,ct=g,rt=R,nt=f):(x=l,C=h,F=p,Q=u,Y=g,ct=m,rt=f,nt=R)):(k=h,it=u,et=m,dt=R,h>=0?(x=l,C=c,F=p,Q=d,Y=g,ct=A,rt=f,nt=M):(x=c,C=l,F=d,Q=p,Y=A,ct=g,rt=M,nt=f)),k===0)return null;let pt=x/k,St=C/k,Ht=1/k,ne=F-pt*it,we=Q-St*it,mt=Y-pt*et,te=ct-St*et,ie=rt-pt*dt,me=nt-St*dt,kt=ie*te-me*mt,ae=ne*me-we*ie,Ge=mt*we-te*ne;if(s){if(kt<0||ae<0||Ge<0)return null}else if((kt<0||ae<0||Ge<0)&&(kt>0||ae>0||Ge>0))return null;let ve=kt+ae+Ge;if(ve===0)return null;let fe=Ht*(kt*it+ae*et+Ge*dt);return(ve>0?fe<0:fe>0)?null:this.at(fe/ve,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yn=class extends fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=So,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},yu=new hn,Is=new Mr,Qo=new Xi,vu=new O,jo=new O,ta=new O,ea=new O,Bc=new O,na=new O,Mu=new O,ia=new O,xt=class extends mn{constructor(t=new qe,e=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this.count=t.count,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){na.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],p=r[l];h!==0&&(Bc.fromBufferAttribute(p,t),o?na.addScaledVector(Bc,h):na.addScaledVector(Bc.sub(e),h))}e.add(na)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(r),Is.copy(t.ray).recast(t.near),!(Qo.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Qo,vu)===null||Is.origin.distanceToSquared(vu)>(t.far-t.near)**2))&&(yu.copy(r).invert(),Is.copy(t.ray).applyMatrix4(yu),!(n.boundingBox!==null&&Is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Is)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,A=d.length;g<A;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,u.start),R=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let b=M,D=R;b<D;b+=3){let I=a.getX(b),x=a.getX(b+1),C=a.getX(b+2);s=sa(this,f,t,n,c,h,p,I,x,C),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),A=Math.min(a.count,u.start+u.count);for(let m=g,f=A;m<f;m+=3){let M=a.getX(m),R=a.getX(m+1),b=a.getX(m+2);s=sa(this,o,t,n,c,h,p,M,R,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,A=d.length;g<A;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,u.start),R=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let b=M,D=R;b<D;b+=3){let I=b,x=b+1,C=b+2;s=sa(this,f,t,n,c,h,p,I,x,C),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),A=Math.min(l.count,u.start+u.count);for(let m=g,f=A;m<f;m+=3){let M=m,R=m+1,b=m+2;s=sa(this,o,t,n,c,h,p,M,R,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function jf(i,t,e,n,s,r,o,a){let l;if(t.side===Un?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===bs,a),l===null)return null;ia.copy(a),ia.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ia);return c<e.near||c>e.far?null:{distance:c,point:ia.clone(),object:i}}function sa(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,jo),i.getVertexPosition(l,ta),i.getVertexPosition(c,ea);let h=jf(i,t,e,n,jo,ta,ea,Mu);if(h){let p=new O;is.getBarycoord(Mu,jo,ta,ea,p),s&&(h.uv=is.getInterpolatedAttribute(s,a,l,c,p,new ot)),r&&(h.uv1=is.getInterpolatedAttribute(r,a,l,c,p,new ot)),o&&(h.normal=is.getInterpolatedAttribute(o,a,l,c,p,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new O,materialIndex:0};is.getNormal(jo,ta,ea,d.normal),h.face=d,h.barycoord=p}return h}var eo=class extends Yn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Dn,h=Dn,p,d){super(null,o,a,l,c,h,s,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var no=class extends Ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},hr=new hn,Su=new hn,ra=[],wu=new Wi,tp=new hn,Or=new xt,Br=new Xi,mi=class extends xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new no(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,tp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hr),wu.copy(t.boundingBox).applyMatrix4(hr),this.boundingBox.union(wu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hr),Br.copy(t.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(Br)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Or.geometry=this.geometry,Or.material=this.material,Or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(n),t.ray.intersectsSphere(Br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hr),Su.multiplyMatrices(n,hr),Or.matrixWorld=Su,Or.raycast(t,ra);for(let o=0,a=ra.length;o<a;o++){let l=ra[o];l.instanceId=r,l.object=this,e.push(l)}ra.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new no(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new eo(new Float32Array(s*this.count),s,this.count,hl,vi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Fs=new Xi,ep=new ot(.5,.5),oa=new O,_s=class{constructor(t=new Ri,e=new Ri,n=new Ri,s=new Ri,r=new Ri,o=new Ri){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hi,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],p=r[5],d=r[6],u=r[7],g=r[8],A=r[9],m=r[10],f=r[11],M=r[12],R=r[13],b=r[14],D=r[15];if(s[0].setComponents(c-o,u-h,f-g,D-M).normalize(),s[1].setComponents(c+o,u+h,f+g,D+M).normalize(),s[2].setComponents(c+a,u+p,f+A,D+R).normalize(),s[3].setComponents(c-a,u-p,f-A,D-R).normalize(),n)s[4].setComponents(l,d,m,b).normalize(),s[5].setComponents(c-l,u-d,f-m,D-b).normalize();else if(s[4].setComponents(c-l,u-d,f-m,D-b).normalize(),e===hi)s[5].setComponents(c+l,u+d,f+m,D+b).normalize();else if(e===xr)s[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(t){Fs.center.set(0,0,0);let e=ep.distanceTo(t.center);return Fs.radius=.7071067811865476+e,Fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(oa.x=s.normal.x>0?t.max.x:t.min.x,oa.y=s.normal.y>0?t.max.y:t.min.y,oa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},bu=new hn,Fa=class i{constructor(){this.coordinateSystem=hi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];bu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new _s),n[s].setFromProjectionMatrix(bu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new _s),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var ys=class extends fi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},La=new O,Da=new O,Au=new hn,kr=new Mr,aa=new Xi,kc=new O,Eu=new O,Na=class extends mn{constructor(t=new qe,e=new ys){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)La.fromBufferAttribute(e,s-1),Da.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=La.distanceTo(Da);t.setAttribute("lineDistance",new He(n,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,t.ray.intersectsSphere(aa)===!1)return;Au.copy(s).invert(),kr.copy(t.ray).applyMatrix4(Au);let a=r/s.getMaxScaleOnAxis(),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let A=u,m=g-1;A<m;A+=c){let f=h.getX(A),M=h.getX(A+1),R=la(this,t,kr,l,f,M,A);R&&e.push(R)}if(this.isLineLoop){let A=h.getX(g-1),m=h.getX(u),f=la(this,t,kr,l,A,m,g-1);f&&e.push(f)}}else{let u=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let A=u,m=g-1;A<m;A+=c){let f=la(this,t,kr,l,A,A+1,A);f&&e.push(f)}if(this.isLineLoop){let A=la(this,t,kr,l,g-1,u,g-1);A&&e.push(A)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function la(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(La.fromBufferAttribute(a,s),Da.fromBufferAttribute(a,r),e.distanceSqToSegment(La,Da,kc,Eu)>n)return;kc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(kc);if(!(c<t.near||c>t.far))return{distance:c,point:Eu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Tu=new O,Cu=new O,Ns=class extends Na{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Tu.fromBufferAttribute(e,s),Cu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Tu.distanceTo(Cu);t.setAttribute("lineDistance",new He(n,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var os=class extends fi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ru=new hn,Jc=new Mr,ca=new Xi,ha=new O,vs=class extends mn{constructor(t=new qe,e=new os){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(s),ca.radius+=r,t.ray.intersectsSphere(ca)===!1)return;Ru.copy(s).invert(),Jc.copy(t.ray).applyMatrix4(Ru);let a=r/s.getMaxScaleOnAxis(),l=a*a,c=n.index,p=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let g=d,A=u;g<A;g++){let m=c.getX(g);ha.fromBufferAttribute(p,m),Pu(ha,m,l,s,t,e,this)}}else{let d=Math.max(0,o.start),u=Math.min(p.count,o.start+o.count);for(let g=d,A=u;g<A;g++)ha.fromBufferAttribute(p,g),Pu(ha,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pu(i,t,e,n,s,r,o){let a=Jc.distanceSqToPoint(i);if(a<e){let l=new O;Jc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var io=class extends Yn{constructor(t=[],e=Ws,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},so=class extends Yn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var as=class extends Yn{constructor(t,e,n=Li,s,r,o,a=Dn,l=Dn,c,h=rs,p=1){if(h!==rs&&h!==hs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:p};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ro=class extends as{constructor(t,e=Li,n=Ws,s,r,o=Dn,a=Dn,l,c=rs){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},oo=class extends Yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Qe=class i extends qe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],p=[],d=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(p,2));function g(A,m,f,M,R,b,D,I,x,C,k){let F=b/x,Q=D/C,it=b/2,Y=D/2,ct=I/2,et=x+1,rt=C+1,nt=0,dt=0,pt=new O;for(let St=0;St<rt;St++){let Ht=St*Q-Y;for(let ne=0;ne<et;ne++){let we=ne*F-it;pt[A]=we*M,pt[m]=Ht*R,pt[f]=ct,c.push(pt.x,pt.y,pt.z),pt[A]=0,pt[m]=0,pt[f]=I>0?1:-1,h.push(pt.x,pt.y,pt.z),p.push(ne/x),p.push(1-St/C),nt+=1}}for(let St=0;St<C;St++)for(let Ht=0;Ht<x;Ht++){let ne=d+Ht+et*St,we=d+Ht+et*(St+1),mt=d+(Ht+1)+et*(St+1),te=d+(Ht+1)+et*St;l.push(ne,we,te),l.push(we,mt,te),dt+=6}a.addGroup(u,dt,k),u+=dt,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},gi=class i extends qe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,p=Math.PI/2*t,d=e,u=2*p+d,g=n*2+r,A=s+1,m=new O,f=new O;for(let M=0;M<=g;M++){let R=0,b=0,D=0,I=0;if(M<=n){let k=M/n,F=k*Math.PI/2;b=-h-t*Math.cos(F),D=t*Math.sin(F),I=-t*Math.cos(F),R=k*p}else if(M<=n+r){let k=(M-n)/r;b=-h+k*e,D=t,I=0,R=p+k*d}else{let k=(M-n-r)/n,F=k*Math.PI/2;b=h+t*Math.sin(F),D=t*Math.cos(F),I=t*Math.sin(F),R=p+d+k*p}let x=Math.max(0,Math.min(1,R/u)),C=0;M===0?C=.5/s:M===g&&(C=-.5/s);for(let k=0;k<=s;k++){let F=k/s,Q=F*Math.PI*2,it=Math.sin(Q),Y=Math.cos(Q);f.x=-D*Y,f.y=b,f.z=D*it,a.push(f.x,f.y,f.z),m.set(-D*Y,I,D*it),m.normalize(),l.push(m.x,m.y,m.z),c.push(F+C,x)}if(M>0){let k=(M-1)*A;for(let F=0;F<s;F++){let Q=k+F,it=k+F+1,Y=M*A+F,ct=M*A+F+1;o.push(Q,it,Y),o.push(it,ct,Y)}}}this.setIndex(o),this.setAttribute("position",new He(a,3)),this.setAttribute("normal",new He(l,3)),this.setAttribute("uv",new He(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ni=class i extends qe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new O,h=new ot;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=e;p++,d+=3){let u=n+p/e*s;c.x=t*Math.cos(u),c.y=t*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new He(o,3)),this.setAttribute("normal",new He(a,3)),this.setAttribute("uv",new He(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},xe=class i extends qe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],d=[],u=[],g=0,A=[],m=n/2,f=0;M(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new He(p,3)),this.setAttribute("normal",new He(d,3)),this.setAttribute("uv",new He(u,2));function M(){let b=new O,D=new O,I=0,x=(e-t)/n;for(let C=0;C<=r;C++){let k=[],F=C/r,Q=F*(e-t)+t;for(let it=0;it<=s;it++){let Y=it/s,ct=Y*l+a,et=Math.sin(ct),rt=Math.cos(ct);D.x=Q*et,D.y=-F*n+m,D.z=Q*rt,p.push(D.x,D.y,D.z),b.set(et,x,rt).normalize(),d.push(b.x,b.y,b.z),u.push(Y,1-F),k.push(g++)}A.push(k)}for(let C=0;C<s;C++)for(let k=0;k<r;k++){let F=A[k][C],Q=A[k+1][C],it=A[k+1][C+1],Y=A[k][C+1];(t>0||k!==0)&&(h.push(F,Q,Y),I+=3),(e>0||k!==r-1)&&(h.push(Q,it,Y),I+=3)}c.addGroup(f,I,0),f+=I}function R(b){let D=g,I=new ot,x=new O,C=0,k=b===!0?t:e,F=b===!0?1:-1;for(let it=1;it<=s;it++)p.push(0,m*F,0),d.push(0,F,0),u.push(.5,.5),g++;let Q=g;for(let it=0;it<=s;it++){let ct=it/s*l+a,et=Math.cos(ct),rt=Math.sin(ct);x.x=k*rt,x.y=m*F,x.z=k*et,p.push(x.x,x.y,x.z),d.push(0,F,0),I.x=et*.5+.5,I.y=rt*.5*F+.5,u.push(I.x,I.y),g++}for(let it=0;it<s;it++){let Y=D+it,ct=Q+it;b===!0?h.push(ct,ct+1,Y):h.push(ct+1,ct,Y),C+=3}c.addGroup(f,C,b===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},En=class i extends xe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ao=class i extends qe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new He(r,3)),this.setAttribute("normal",new He(r.slice(),3)),this.setAttribute("uv",new He(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let R=new O,b=new O,D=new O;for(let I=0;I<e.length;I+=3)u(e[I+0],R),u(e[I+1],b),u(e[I+2],D),l(R,b,D,M)}function l(M,R,b,D){let I=D+1,x=[];for(let C=0;C<=I;C++){x[C]=[];let k=M.clone().lerp(b,C/I),F=R.clone().lerp(b,C/I),Q=I-C;for(let it=0;it<=Q;it++)it===0&&C===I?x[C][it]=k:x[C][it]=k.clone().lerp(F,it/Q)}for(let C=0;C<I;C++)for(let k=0;k<2*(I-C)-1;k++){let F=Math.floor(k/2);k%2===0?(d(x[C][F+1]),d(x[C+1][F]),d(x[C][F])):(d(x[C][F+1]),d(x[C+1][F+1]),d(x[C+1][F]))}}function c(M){let R=new O;for(let b=0;b<r.length;b+=3)R.x=r[b+0],R.y=r[b+1],R.z=r[b+2],R.normalize().multiplyScalar(M),r[b+0]=R.x,r[b+1]=R.y,r[b+2]=R.z}function h(){let M=new O;for(let R=0;R<r.length;R+=3){M.x=r[R+0],M.y=r[R+1],M.z=r[R+2];let b=m(M)/2/Math.PI+.5,D=f(M)/Math.PI+.5;o.push(b,1-D)}g(),p()}function p(){for(let M=0;M<o.length;M+=6){let R=o[M+0],b=o[M+2],D=o[M+4],I=Math.max(R,b,D),x=Math.min(R,b,D);I>.9&&x<.1&&(R<.2&&(o[M+0]+=1),b<.2&&(o[M+2]+=1),D<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function u(M,R){let b=M*3;R.x=t[b+0],R.y=t[b+1],R.z=t[b+2]}function g(){let M=new O,R=new O,b=new O,D=new O,I=new ot,x=new ot,C=new ot;for(let k=0,F=0;k<r.length;k+=9,F+=6){M.set(r[k+0],r[k+1],r[k+2]),R.set(r[k+3],r[k+4],r[k+5]),b.set(r[k+6],r[k+7],r[k+8]),I.set(o[F+0],o[F+1]),x.set(o[F+2],o[F+3]),C.set(o[F+4],o[F+5]),D.copy(M).add(R).add(b).divideScalar(3);let Q=m(D);A(I,F+0,M,Q),A(x,F+2,R,Q),A(C,F+4,b,Q)}}function A(M,R,b,D){D<0&&M.x===1&&(o[R]=M.x-1),b.x===0&&b.z===0&&(o[R]=D/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},xi=class i extends ao{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ii=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(o-h)/d;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ot:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new O,s=[],r=[],o=[],a=new O,l=new hn;for(let u=0;u<=t;u++){let g=u/t;s[u]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(sn(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(sn(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],u*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Sr=class extends ii{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ot){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*p+this.aX,c=d*p+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ua=class extends Sr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ah(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,p){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+p)+(l-a)/p;d*=h,u*=h,s(o,a,d,u)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Iu=new O,Fu=new O,Gc=new Ah,Vc=new Ah,Hc=new Ah,$n=class extends ii{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new O){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Fu.subVectors(s[0],s[1]).add(s[0]),c=Fu);let p=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Iu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Iu),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),u),A=Math.pow(p.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(h),u);A<1e-4&&(A=1),g<1e-4&&(g=A),m<1e-4&&(m=A),Gc.initNonuniformCatmullRom(c.x,p.x,d.x,h.x,g,A,m),Vc.initNonuniformCatmullRom(c.y,p.y,d.y,h.y,g,A,m),Hc.initNonuniformCatmullRom(c.z,p.z,d.z,h.z,g,A,m)}else this.curveType==="catmullrom"&&(Gc.initCatmullRom(c.x,p.x,d.x,h.x,this.tension),Vc.initCatmullRom(c.y,p.y,d.y,h.y,this.tension),Hc.initCatmullRom(c.z,p.z,d.z,h.z,this.tension));return n.set(Gc.calc(l),Vc.calc(l),Hc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Lu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function np(i,t){let e=1-i;return e*e*t}function ip(i,t){return 2*(1-i)*i*t}function sp(i,t){return i*i*t}function Hr(i,t,e,n){return np(i,t)+ip(i,e)+sp(i,n)}function rp(i,t){let e=1-i;return e*e*e*t}function op(i,t){let e=1-i;return 3*e*e*i*t}function ap(i,t){return 3*(1-i)*i*i*t}function lp(i,t){return i*i*i*t}function Wr(i,t,e,n,s){return rp(i,t)+op(i,e)+ap(i,n)+lp(i,s)}var lo=class extends ii{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Wr(t,s.x,r.x,o.x,a.x),Wr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},za=class extends ii{constructor(t=new O,e=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Wr(t,s.x,r.x,o.x,a.x),Wr(t,s.y,r.y,o.y,a.y),Wr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},co=class extends ii{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oa=class extends ii{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ho=class extends ii{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Hr(t,s.x,r.x,o.x),Hr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Us=class extends ii{constructor(t=new O,e=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new O){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Hr(t,s.x,r.x,o.x),Hr(t,s.y,r.y,o.y),Hr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uo=class extends ii{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(Lu(a,l.x,c.x,h.x,p.x),Lu(a,l.y,c.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ot().fromArray(s))}return this}},Ba=Object.freeze({__proto__:null,ArcCurve:Ua,CatmullRomCurve3:$n,CubicBezierCurve:lo,CubicBezierCurve3:za,EllipseCurve:Sr,LineCurve:co,LineCurve3:Oa,QuadraticBezierCurve:ho,QuadraticBezierCurve3:Us,SplineCurve:uo}),ka=class extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ba[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ba[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},fo=class extends ka{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new co(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ho(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new lo(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new uo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Sr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},_i=class extends fo{constructor(t){super(t),this.uuid=Es(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new fo().fromJSON(s))}return this}};function cp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Id(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=pp(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,p=l;for(let d=e;d<s;d+=e){let u=i[d],g=i[d+1];u<a&&(a=u),g<l&&(l=g),u>h&&(h=u),g>p&&(p=g)}c=Math.max(h-a,p-l),c=c!==0?32767/c:0}return po(r,o,e,a,l,c,0),o}function Id(i,t,e,n,s){let r;if(s===Ap(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Du(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Du(o/n|0,i[o],i[o+1],r);return r&&wr(r,r.next)&&(go(r),r=r.next),r}function zs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(wr(e,e.next)||Mn(e.prev,e,e.next)===0)){if(go(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function po(i,t,e,n,s,r,o){if(!i)return;!o&&r&&yp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?up(i,n,s,r):hp(i)){t.push(l.i,i.i,c.i),go(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=dp(zs(i),t),po(i,t,e,n,s,r,2)):o===2&&fp(i,t,e,n,s,r):po(zs(i),t,e,n,s,r,1);break}}}function hp(i){let t=i.prev,e=i,n=i.next;if(Mn(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),p=Math.min(a,l,c),d=Math.max(s,r,o),u=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=p&&g.y<=u&&Gr(s,a,r,l,o,c,g.x,g.y)&&Mn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function up(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Mn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,p=r.y,d=o.y,u=Math.min(a,l,c),g=Math.min(h,p,d),A=Math.max(a,l,c),m=Math.max(h,p,d),f=$c(u,g,t,e,n),M=$c(A,m,t,e,n),R=i.prevZ,b=i.nextZ;for(;R&&R.z>=f&&b&&b.z<=M;){if(R.x>=u&&R.x<=A&&R.y>=g&&R.y<=m&&R!==s&&R!==o&&Gr(a,h,l,p,c,d,R.x,R.y)&&Mn(R.prev,R,R.next)>=0||(R=R.prevZ,b.x>=u&&b.x<=A&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&Gr(a,h,l,p,c,d,b.x,b.y)&&Mn(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;R&&R.z>=f;){if(R.x>=u&&R.x<=A&&R.y>=g&&R.y<=m&&R!==s&&R!==o&&Gr(a,h,l,p,c,d,R.x,R.y)&&Mn(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;b&&b.z<=M;){if(b.x>=u&&b.x<=A&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&Gr(a,h,l,p,c,d,b.x,b.y)&&Mn(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function dp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!wr(n,s)&&Ld(n,e,e.next,s)&&mo(n,s)&&mo(s,n)&&(t.push(n.i,e.i,s.i),go(e),go(e.next),e=i=s),e=e.next}while(e!==i);return zs(e)}function fp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Sp(o,a)){let l=Dd(o,a);o=zs(o,o.next),l=zs(l,l.next),po(o,t,e,n,s,r,0),po(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function pp(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Id(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Mp(c))}s.sort(mp);for(let r=0;r<s.length;r++)e=gp(s[r],e);return e}function mp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function gp(i,t){let e=xp(i,t);if(!e)return t;let n=Dd(e,i);return zs(n,n.next),zs(e,e.next)}function xp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(wr(i,e))return e;do{if(wr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,o=e.x<e.next.x?e:e.next,p===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Fd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let p=Math.abs(s-e.y)/(n-e.x);mo(e,i)&&(p<h||p===h&&(e.x>o.x||e.x===o.x&&_p(o,e)))&&(o=e,h=p)}e=e.next}while(e!==a);return o}function _p(i,t){return Mn(i.prev,i,t.prev)<0&&Mn(t.next,i,i.next)<0}function yp(i,t,e,n){let s=i;do s.z===0&&(s.z=$c(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,vp(s)}function vp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function $c(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Mp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Fd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Gr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Fd(i,t,e,n,s,r,o,a)}function Sp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!wp(i,t)&&(mo(i,t)&&mo(t,i)&&bp(i,t)&&(Mn(i.prev,i,t.prev)||Mn(i,t.prev,t))||wr(i,t)&&Mn(i.prev,i,i.next)>0&&Mn(t.prev,t,t.next)>0)}function Mn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function wr(i,t){return i.x===t.x&&i.y===t.y}function Ld(i,t,e,n){let s=da(Mn(i,t,e)),r=da(Mn(i,t,n)),o=da(Mn(e,n,i)),a=da(Mn(e,n,t));return!!(s!==r&&o!==a||s===0&&ua(i,e,t)||r===0&&ua(i,n,t)||o===0&&ua(e,i,n)||a===0&&ua(e,t,n))}function ua(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function da(i){return i>0?1:i<0?-1:0}function wp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ld(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function mo(i,t){return Mn(i.prev,i,i.next)<0?Mn(i,t,i.next)>=0&&Mn(i,i.prev,t)>=0:Mn(i,t,i.prev)<0||Mn(i,i.next,t)<0}function bp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Dd(i,t){let e=Kc(i.i,i.x,i.y),n=Kc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Du(i,t,e,n){let s=Kc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function go(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Kc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ap(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Qc=class{static triangulate(t,e,n=2){return cp(t,e,n)}},Vi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Nu(t),Uu(n,t);let o=t.length;e.forEach(Nu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Uu(n,e[l]);let a=Qc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Nu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Uu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var xo=class i extends qe{constructor(t=new _i([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new He(s,3)),this.setAttribute("uv",new He(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,A=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Ep,R,b=!1,D,I,x,C;if(f){R=f.getSpacedPoints(h),b=!0,d=!1;let wt=f.isCatmullRomCurve3?f.closed:!1;D=f.computeFrenetFrames(h,wt),I=new O,x=new O,C=new O}d||(m=0,u=0,g=0,A=0);let k=a.extractPoints(c),F=k.shape,Q=k.holes;if(!Vi.isClockWise(F)){F=F.reverse();for(let wt=0,Gt=Q.length;wt<Gt;wt++){let Pt=Q[wt];Vi.isClockWise(Pt)&&(Q[wt]=Pt.reverse())}}function Y(wt){let Pt=10000000000000001e-36,ue=wt[0];for(let jt=1;jt<=wt.length;jt++){let ge=jt%wt.length,de=wt[ge],Fe=de.x-ue.x,Ne=de.y-ue.y,yt=Fe*Fe+Ne*Ne,K=Math.max(Math.abs(de.x),Math.abs(de.y),Math.abs(ue.x),Math.abs(ue.y)),tn=Pt*K*K;if(yt<=tn){wt.splice(ge,1),jt--;continue}ue=de}}Y(F),Q.forEach(Y);let ct=Q.length,et=F;for(let wt=0;wt<ct;wt++){let Gt=Q[wt];F=F.concat(Gt)}function rt(wt,Gt,Pt){return Gt||ze("ExtrudeGeometry: vec does not exist"),wt.clone().addScaledVector(Gt,Pt)}let nt=F.length;function dt(wt,Gt,Pt){let ue,jt,ge,de=wt.x-Gt.x,Fe=wt.y-Gt.y,Ne=Pt.x-wt.x,yt=Pt.y-wt.y,K=de*de+Fe*Fe,tn=de*yt-Fe*Ne;if(Math.abs(tn)>Number.EPSILON){let Be=Math.sqrt(K),ln=Math.sqrt(Ne*Ne+yt*yt),Zt=Gt.x-Fe/Be,cn=Gt.y+de/Be,be=Pt.x-yt/ln,Ie=Pt.y+Ne/ln,U=((be-Zt)*yt-(Ie-cn)*Ne)/(de*yt-Fe*Ne);ue=Zt+de*U-wt.x,jt=cn+Fe*U-wt.y;let v=ue*ue+jt*jt;if(v<=2)return new ot(ue,jt);ge=Math.sqrt(v/2)}else{let Be=!1;de>Number.EPSILON?Ne>Number.EPSILON&&(Be=!0):de<-Number.EPSILON?Ne<-Number.EPSILON&&(Be=!0):Math.sign(Fe)===Math.sign(yt)&&(Be=!0),Be?(ue=-Fe,jt=de,ge=Math.sqrt(K)):(ue=de,jt=Fe,ge=Math.sqrt(K/2))}return new ot(ue/ge,jt/ge)}let pt=[];for(let wt=0,Gt=et.length,Pt=Gt-1,ue=wt+1;wt<Gt;wt++,Pt++,ue++)Pt===Gt&&(Pt=0),ue===Gt&&(ue=0),pt[wt]=dt(et[wt],et[Pt],et[ue]);let St=[],Ht,ne=pt.concat();for(let wt=0,Gt=ct;wt<Gt;wt++){let Pt=Q[wt];Ht=[];for(let ue=0,jt=Pt.length,ge=jt-1,de=ue+1;ue<jt;ue++,ge++,de++)ge===jt&&(ge=0),de===jt&&(de=0),Ht[ue]=dt(Pt[ue],Pt[ge],Pt[de]);St.push(Ht),ne=ne.concat(Ht)}let we;if(m===0)we=Vi.triangulateShape(et,Q);else{let wt=[],Gt=[];for(let Pt=0;Pt<m;Pt++){let ue=Pt/m,jt=u*Math.cos(ue*Math.PI/2),ge=g*Math.sin(ue*Math.PI/2)+A;for(let de=0,Fe=et.length;de<Fe;de++){let Ne=rt(et[de],pt[de],ge);ae(Ne.x,Ne.y,-jt),ue===0&&wt.push(Ne)}for(let de=0,Fe=ct;de<Fe;de++){let Ne=Q[de];Ht=St[de];let yt=[];for(let K=0,tn=Ne.length;K<tn;K++){let Be=rt(Ne[K],Ht[K],ge);ae(Be.x,Be.y,-jt),ue===0&&yt.push(Be)}ue===0&&Gt.push(yt)}}we=Vi.triangulateShape(wt,Gt)}let mt=we.length,te=g+A;for(let wt=0;wt<nt;wt++){let Gt=d?rt(F[wt],ne[wt],te):F[wt];b?(x.copy(D.normals[0]).multiplyScalar(Gt.x),I.copy(D.binormals[0]).multiplyScalar(Gt.y),C.copy(R[0]).add(x).add(I),ae(C.x,C.y,C.z)):ae(Gt.x,Gt.y,0)}for(let wt=1;wt<=h;wt++)for(let Gt=0;Gt<nt;Gt++){let Pt=d?rt(F[Gt],ne[Gt],te):F[Gt];b?(x.copy(D.normals[wt]).multiplyScalar(Pt.x),I.copy(D.binormals[wt]).multiplyScalar(Pt.y),C.copy(R[wt]).add(x).add(I),ae(C.x,C.y,C.z)):ae(Pt.x,Pt.y,p/h*wt)}for(let wt=m-1;wt>=0;wt--){let Gt=wt/m,Pt=u*Math.cos(Gt*Math.PI/2),ue=g*Math.sin(Gt*Math.PI/2)+A;for(let jt=0,ge=et.length;jt<ge;jt++){let de=rt(et[jt],pt[jt],ue);ae(de.x,de.y,p+Pt)}for(let jt=0,ge=Q.length;jt<ge;jt++){let de=Q[jt];Ht=St[jt];for(let Fe=0,Ne=de.length;Fe<Ne;Fe++){let yt=rt(de[Fe],Ht[Fe],ue);b?ae(yt.x,yt.y+R[h-1].y,R[h-1].x+Pt):ae(yt.x,yt.y,p+Pt)}}}ie(),me();function ie(){let wt=s.length/3;if(d){let Gt=0,Pt=nt*Gt;for(let ue=0;ue<mt;ue++){let jt=we[ue];Ge(jt[2]+Pt,jt[1]+Pt,jt[0]+Pt)}Gt=h+m*2,Pt=nt*Gt;for(let ue=0;ue<mt;ue++){let jt=we[ue];Ge(jt[0]+Pt,jt[1]+Pt,jt[2]+Pt)}}else{for(let Gt=0;Gt<mt;Gt++){let Pt=we[Gt];Ge(Pt[2],Pt[1],Pt[0])}for(let Gt=0;Gt<mt;Gt++){let Pt=we[Gt];Ge(Pt[0]+nt*h,Pt[1]+nt*h,Pt[2]+nt*h)}}n.addGroup(wt,s.length/3-wt,0)}function me(){let wt=s.length/3,Gt=0;kt(et,Gt),Gt+=et.length;for(let Pt=0,ue=Q.length;Pt<ue;Pt++){let jt=Q[Pt];kt(jt,Gt),Gt+=jt.length}n.addGroup(wt,s.length/3-wt,1)}function kt(wt,Gt){let Pt=wt.length;for(;--Pt>=0;){let ue=Pt,jt=Pt-1;jt<0&&(jt=wt.length-1);for(let ge=0,de=h+m*2;ge<de;ge++){let Fe=nt*ge,Ne=nt*(ge+1),yt=Gt+ue+Fe,K=Gt+jt+Fe,tn=Gt+jt+Ne,Be=Gt+ue+Ne;ve(yt,K,tn,Be)}}}function ae(wt,Gt,Pt){l.push(wt),l.push(Gt),l.push(Pt)}function Ge(wt,Gt,Pt){fe(wt),fe(Gt),fe(Pt);let ue=s.length/3,jt=M.generateTopUV(n,s,ue-3,ue-2,ue-1);Ke(jt[0]),Ke(jt[1]),Ke(jt[2])}function ve(wt,Gt,Pt,ue){fe(wt),fe(Gt),fe(ue),fe(Gt),fe(Pt),fe(ue);let jt=s.length/3,ge=M.generateSideWallUV(n,s,jt-6,jt-3,jt-2,jt-1);Ke(ge[0]),Ke(ge[1]),Ke(ge[3]),Ke(ge[1]),Ke(ge[2]),Ke(ge[3])}function fe(wt){s.push(l[wt*3+0]),s.push(l[wt*3+1]),s.push(l[wt*3+2])}function Ke(wt){r.push(wt.x),r.push(wt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Tp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ba[s.type]().fromJSON(s)),new i(n,t.options)}},Ep={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ot(r,o),new ot(a,l),new ot(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],p=t[n*3+2],d=t[s*3],u=t[s*3+1],g=t[s*3+2],A=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ot(o,1-l),new ot(c,1-p),new ot(d,1-g),new ot(A,1-f)]:[new ot(a,1-l),new ot(h,1-p),new ot(u,1-g),new ot(m,1-f)]}};function Tp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var zn=class i extends ao{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},On=class i extends qe{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=sn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,p=new O,d=new ot,u=new O,g=new O,A=new O,m=0,f=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,u.x=f*1,u.y=-m,u.z=f*0,A.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:A.normalize(),l.push(A.x,A.y,A.z);break;default:m=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,u.x=f*1,u.y=-m,u.z=f*0,g.copy(u),u.x+=A.x,u.y+=A.y,u.z+=A.z,u.normalize(),l.push(u.x,u.y,u.z),A.copy(g)}for(let M=0;M<=e;M++){let R=n+M*h*s,b=Math.sin(R),D=Math.cos(R);for(let I=0;I<=t.length-1;I++){p.x=t[I].x*b,p.y=t[I].y,p.z=t[I].x*D,o.push(p.x,p.y,p.z),d.x=M/e,d.y=I/(t.length-1),a.push(d.x,d.y);let x=l[3*I+0]*b,C=l[3*I+1],k=l[3*I+0]*D;c.push(x,C,k)}}for(let M=0;M<e;M++)for(let R=0;R<t.length-1;R++){let b=R+M*t.length,D=b,I=b+t.length,x=b+t.length+1,C=b+1;r.push(D,I,C),r.push(x,C,I)}this.setIndex(r),this.setAttribute("position",new He(o,3)),this.setAttribute("uv",new He(a,2)),this.setAttribute("normal",new He(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Zn=class i extends qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,p=t/a,d=e/l,u=[],g=[],A=[],m=[];for(let f=0;f<h;f++){let M=f*d-o;for(let R=0;R<c;R++){let b=R*p-r;g.push(b,-M,0),A.push(0,0,1),m.push(R/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){let R=M+c*f,b=M+c*(f+1),D=M+1+c*(f+1),I=M+1+c*f;u.push(R,b,I),u.push(b,D,I)}this.setIndex(u),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(A,3)),this.setAttribute("uv",new He(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},_o=class i extends qe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],p=t,d=(e-t)/s,u=new O,g=new ot;for(let A=0;A<=s;A++){for(let m=0;m<=n;m++){let f=r+m/n*o;u.x=p*Math.cos(f),u.y=p*Math.sin(f),l.push(u.x,u.y,u.z),c.push(0,0,1),g.x=(u.x/e+1)/2,g.y=(u.y/e+1)/2,h.push(g.x,g.y)}p+=d}for(let A=0;A<s;A++){let m=A*(n+1);for(let f=0;f<n;f++){let M=f+m,R=M,b=M+n+1,D=M+n+2,I=M+1;a.push(R,b,I),a.push(b,D,I)}}this.setIndex(a),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(c,3)),this.setAttribute("uv",new He(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ls=class i extends qe{constructor(t=new _i([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new He(s,3)),this.setAttribute("normal",new He(r,3)),this.setAttribute("uv",new He(o,2));function c(h){let p=s.length/3,d=h.extractPoints(e),u=d.shape,g=d.holes;Vi.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,f=g.length;m<f;m++){let M=g[m];Vi.isClockWise(M)===!0&&(g[m]=M.reverse())}let A=Vi.triangulateShape(u,g);for(let m=0,f=g.length;m<f;m++){let M=g[m];u=u.concat(M)}for(let m=0,f=u.length;m<f;m++){let M=u[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,f=A.length;m<f;m++){let M=A[m],R=M[0]+p,b=M[1]+p,D=M[2]+p;n.push(R,b,D),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Cp(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Cp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Oe=class i extends qe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],p=new O,d=new O,u=[],g=[],A=[],m=[];for(let f=0;f<=n;f++){let M=[],R=f/n,b=o+R*a,D=t*Math.cos(b),I=Math.sqrt(t*t-D*D),x=0;f===0&&o===0?x=.5/e:f===n&&l===Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){let k=C/e,F=s+k*r;p.x=-I*Math.cos(F),p.y=D,p.z=I*Math.sin(F),g.push(p.x,p.y,p.z),d.copy(p).normalize(),A.push(d.x,d.y,d.z),m.push(k+x,1-R),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){let R=h[f][M+1],b=h[f][M],D=h[f+1][M],I=h[f+1][M+1];(f!==0||o>0)&&u.push(R,b,I),(f!==n-1||l<Math.PI)&&u.push(b,D,I)}this.setIndex(u),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(A,3)),this.setAttribute("uv",new He(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ii=class i extends qe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],p=[],d=new O,u=new O,g=new O;for(let A=0;A<=n;A++){let m=o+A/n*a;for(let f=0;f<=s;f++){let M=f/s*r;u.x=(t+e*Math.cos(m))*Math.cos(M),u.y=(t+e*Math.cos(m))*Math.sin(M),u.z=e*Math.sin(m),c.push(u.x,u.y,u.z),d.x=t*Math.cos(M),d.y=t*Math.sin(M),g.subVectors(u,d).normalize(),h.push(g.x,g.y,g.z),p.push(f/s),p.push(A/n)}}for(let A=1;A<=n;A++)for(let m=1;m<=s;m++){let f=(s+1)*A+m-1,M=(s+1)*(A-1)+m-1,R=(s+1)*(A-1)+m,b=(s+1)*A+m;l.push(f,M,b),l.push(M,R,b)}this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Fi=class i extends qe{constructor(t=new Us(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new O,l=new O,c=new ot,h=new O,p=[],d=[],u=[],g=[];A(),this.setIndex(g),this.setAttribute("position",new He(p,3)),this.setAttribute("normal",new He(d,3)),this.setAttribute("uv",new He(u,2));function A(){for(let R=0;R<e;R++)m(R);m(r===!1?e:0),M(),f()}function m(R){h=t.getPointAt(R/e,h);let b=o.normals[R],D=o.binormals[R];for(let I=0;I<=s;I++){let x=I/s*Math.PI*2,C=Math.sin(x),k=-Math.cos(x);l.x=k*b.x+C*D.x,l.y=k*b.y+C*D.y,l.z=k*b.z+C*D.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,p.push(a.x,a.y,a.z)}}function f(){for(let R=1;R<=e;R++)for(let b=1;b<=s;b++){let D=(s+1)*(R-1)+(b-1),I=(s+1)*R+(b-1),x=(s+1)*R+b,C=(s+1)*(R-1)+b;g.push(D,I,C),g.push(I,x,C)}}function M(){for(let R=0;R<=e;R++)for(let b=0;b<=s;b++)c.x=R/e,c.y=b/s,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Ba[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function qs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(zu(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(zu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Hn(i){let t={};for(let e=0;e<i.length;e++){let n=qs(i[e]);for(let s in n)t[s]=n[s]}return t}function zu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Rp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Eh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:on.workingColorSpace}var Nd={clone:qs,merge:Hn},Pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yi=class extends fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qs(t.uniforms),this.uniformsGroups=Rp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.linewidth=t.linewidth,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ee().setHex(s.value);break;case"v2":this.uniforms[n].value=new ot().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new vn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new We().fromArray(s.value);break;case"m4":this.uniforms[n].value=new hn().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ga=class extends yi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Nn=class extends fi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ee(16777215),this.specular=new Ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=So,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ye=class extends fi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=So,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Va=class extends fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ha=class extends fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ur(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function fa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ms=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Wa=class extends Ms{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qc,endingEnd:qc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yc:r=t,a=2*e-n;break;case Zc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yc:o=t,l=2*n-e;break;case Zc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-e)/(s-e),A=g*g,m=A*g,f=-d*m+2*d*A-d*g,M=(1+d)*m+(-1.5-2*d)*A+(-.5+d)*g+1,R=(-1-u)*m+(1.5+u)*A+.5*g,b=u*m-u*A;for(let D=0;D!==a;++D)r[D]=f*o[h+D]+M*o[c+D]+R*o[l+D]+b*o[p+D];return r}},Xa=class extends Ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),p=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*p+o[l+d]*h;return r}},qa=class extends Ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ya=class extends Ms{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,p=this.outTangents;if(!h||!p){let g=(n-e)/(s-e),A=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*A+o[l+m]*g;return r}let d=a*2,u=t-1;for(let g=0;g!==a;++g){let A=o[c+g],m=o[l+g],f=u*d+g*2,M=p[f],R=p[f+1],b=t*d+g*2,D=h[b],I=h[b+1],x=Lp(n,e,M,D,s);r[g]=Ud(x,A,R,I,m)}return r}};function Ud(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Fp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Lp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Ud(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Fp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var si=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ur(e,this.TimeBufferType),this.values=ur(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ur(t.times,Array),values:ur(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),fa(t.settings)&&(n.settings={inTangents:ur(t.settings.inTangents,Array),outTangents:ur(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ya(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Xr:e=this.InterpolantFactoryMethodDiscrete;break;case Ea:e=this.InterpolantFactoryMethodLinear;break;case ga:e=this.InterpolantFactoryMethodSmooth;break;case Xc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Le("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return Ea;case this.InterpolantFactoryMethodSmooth:return ga;case this.InterpolantFactoryMethodBezier:return Xc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;fa(this.settings)&&(Ou(this.settings.inTangents,t),Ou(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;fa(this.settings)&&(Bu(this.settings.inTangents,t),Bu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ze("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ze("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Nf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ga,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let p=a*n,d=p-n,u=p+n;for(let g=0;g!==n;++g){let A=e[p+g];if(A!==e[d+g]||A!==e[u+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let p=a*n,d=o*n;for(let u=0;u!==n;++u)e[d+u]=e[p+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,fa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ou(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Bu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Ea;var Ss=class extends si{constructor(t,e,n){super(t,e,n)}};Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=Xr;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Za=class extends si{constructor(t,e,n,s){super(t,e,n,s)}};Za.prototype.ValueTypeName="color";var Ja=class extends si{constructor(t,e,n,s){super(t,e,n,s)}};Ja.prototype.ValueTypeName="number";var $a=class extends Ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)ui.slerpFlat(r,0,o,c-a,o,c,l);return r}},yo=class extends si{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new $a(this.times,this.values,this.getValueSize(),t)}};yo.prototype.ValueTypeName="quaternion";yo.prototype.InterpolantFactoryMethodSmooth=void 0;var ws=class extends si{constructor(t,e,n){super(t,e,n)}};ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=Xr;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends si{constructor(t,e,n,s){super(t,e,n,s)}};Ka.prototype.ValueTypeName="vector";var Qa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,d=c.length;p<d;p+=2){let u=c[p],g=c[p+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zd=new Qa,ja=class{constructor(t){this.manager=t!==void 0?t:zd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ja.DEFAULT_MATERIAL_NAME="__DEFAULT";var vo=class extends mn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Os=class extends vo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Wc=new hn,ku=new O,Gu=new O,tl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.filterNode=null,this.shadowNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new hn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new vn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ku.setFromMatrixPosition(t.matrixWorld),e.position.copy(ku),Gu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Wc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Wc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===xr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Wc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this.filterNode=t.filterNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},pa=new O,ma=new ui,ki=new O,Mo=class extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(pa,ma,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pa,ma,ki.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){let s=super.updateWorldMatrix(t,e,n);return this.matrixWorld.decompose(pa,ma,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pa,ma,ki.set(1,1,1)).invert(),s}clone(){return new this.constructor().copy(this)}},xs=new O,Vu=new ot,Hu=new ot,Ln=class extends Mo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ta*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_c*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ta*2*Math.atan(Math.tan(_c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xs.x,xs.y).multiplyScalar(-t/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xs.x,xs.y).multiplyScalar(-t/xs.z)}getViewSize(t,e){return this.getViewBounds(t,Vu,Hu),e.subVectors(Hu,Vu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_c*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Bs=class extends Mo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},jc=class extends tl{constructor(){super(new Bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ks=class extends vo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new jc}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var dr=-90,fr=1,br=class extends mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ln(dr,fr,t,e);s.layers=this.layers,this.add(s);let r=new Ln(dr,fr,t,e);r.layers=this.layers,this.add(r);let o=new Ln(dr,fr,t,e);o.layers=this.layers,this.add(o);let a=new Ln(dr,fr,t,e);a.layers=this.layers,this.add(a);let l=new Ln(dr,fr,t,e);l.layers=this.layers,this.add(l);let c=new Ln(dr,fr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===hi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let A=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=A,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,d,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},el=class extends Ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Th="\\[\\]\\.:\\/",Dp=new RegExp("["+Th+"]","g"),Ch="[^"+Th+"]",Np="[^"+Th.replace("\\.","")+"]",Up=/((?:WC+[\/:])*)/.source.replace("WC",Ch),zp=/(WCOD+)?/.source.replace("WCOD",Np),Op=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ch),Bp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ch),kp=new RegExp("^"+Up+zp+Op+Bp+"$"),Gp=["material","materials","bones","map"],th=class{constructor(t,e,n){let s=n||_n.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_n=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dp,"")}static parseTrackName(t){let e=kp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_n.Composite=th;_n.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_n.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_n.prototype.GetterByBindingType=[_n.prototype._getValue_direct,_n.prototype._getValue_array,_n.prototype._getValue_arrayElement,_n.prototype._getValue_toArray];_n.prototype.SetterByBindingTypeAndVersioning=[[_n.prototype._setValue_direct,_n.prototype._setValue_direct_setNeedsUpdate,_n.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_array,_n.prototype._setValue_array_setNeedsUpdate,_n.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_arrayElement,_n.prototype._setValue_arrayElement_setNeedsUpdate,_n.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_fromArray,_n.prototype._setValue_fromArray_setNeedsUpdate,_n.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var I_=new Float32Array(1);var Dh=class Dh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Dh.prototype.isMatrix2=!0;var eh=Dh;function Rh(i,t,e,n){let s=Vp(n);switch(e){case _h:return i*t;case hl:return i*t/s.components*s.byteLength;case ul:return i*t/s.components*s.byteLength;case As:return i*t*2/s.components*s.byteLength;case dl:return i*t*2/s.components*s.byteLength;case yh:return i*t*3/s.components*s.byteLength;case Ni:return i*t*4/s.components*s.byteLength;case fl:return i*t*4/s.components*s.byteLength;case Ao:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case To:case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ml:case xl:return Math.max(i,16)*Math.max(t,8)/4;case pl:case gl:return Math.max(i,8)*Math.max(t,8)/2;case _l:case yl:case Ml:case Sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vl:case Ro:case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case El:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case zl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ol:case Bl:case kl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Gl:case Vl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Po:case Hl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vp(i){switch(i){case Kn:case ph:return{byteLength:1,components:1};case Cr:case mh:case Di:return{byteLength:2,components:1};case ll:case cl:return{byteLength:2,components:4};case Li:case al:case vi:return{byteLength:4,components:1};case gh:case xh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:il}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=il);function of(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Hp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,p=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,a),p.length===0)i.bufferSubData(c,0,h);else{p.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<p.length;u++){let g=p[d],A=p[u];A.start<=g.start+g.count+1?g.count=Math.max(g.count,A.start+A.count-g.start):(++d,p[d]=A)}p.length=d+1;for(let u=0,g=p.length;u<g;u++){let A=p[u];i.bufferSubData(c,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xp=`#ifdef USE_ALPHAHASH
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
#endif`,qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$p=`#ifdef USE_AOMAP
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
#endif`,Kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qp=`#ifdef USE_BATCHING
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
#endif`,jp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,im=`#ifdef USE_IRIDESCENCE
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
#endif`,sm=`#ifdef USE_BUMPMAP
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,fm=`#define PI 3.141592653589793
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
} // validated`,pm=`vec3 transformedNormal = objectNormal;
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
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pm=`#ifdef USE_GRADIENTMAP
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
}`,Im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,km=`PhysicalMaterial material;
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
#endif`,Gm=`uniform sampler2D dfgLUT;
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
}`,Vm=`
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
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Km=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jm=`#if defined( USE_POINTS_UV )
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
#endif`,t0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i0=`#if defined( USE_MORPHCOLORS )
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
#endif`,s0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r0=`#ifdef USE_MORPHTARGETS
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
#endif`,o0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,l0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,d0=`#ifdef USE_NORMALMAP
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
#endif`,f0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,g0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C0=`float getShadowMask() {
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
}`,R0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P0=`#ifdef USE_SKINNING
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
#endif`,I0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F0=`#ifdef USE_SKINNING
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
#endif`,L0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z0=`#ifdef USE_TRANSMISSION
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
#endif`,O0=`#ifdef USE_TRANSMISSION
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W0=`uniform sampler2D t2D;
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`uniform float backgroundBlurriness;
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`#include <common>
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
}`,$0=`#if DEPTH_PACKING == 3200
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
}`,K0=`#define DISTANCE
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
}`,Q0=`#define DISTANCE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`uniform float scale;
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#include <common>
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
}`,sg=`uniform vec3 diffuse;
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
}`,rg=`#define LAMBERT
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
}`,og=`#define LAMBERT
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
}`,ag=`#define MATCAP
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
}`,lg=`#define MATCAP
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
}`,cg=`#define NORMAL
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
}`,hg=`#define NORMAL
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
}`,ug=`#define PHONG
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
}`,dg=`#define PHONG
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
}`,fg=`#define STANDARD
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
}`,pg=`#define STANDARD
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
}`,mg=`#define TOON
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
}`,gg=`#define TOON
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
}`,xg=`uniform float size;
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
}`,_g=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,vg=`uniform vec3 color;
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
}`,Mg=`uniform float rotation;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,nn={alphahash_fragment:Wp,alphahash_pars_fragment:Xp,alphamap_fragment:qp,alphamap_pars_fragment:Yp,alphatest_fragment:Zp,alphatest_pars_fragment:Jp,aomap_fragment:$p,aomap_pars_fragment:Kp,batching_pars_vertex:Qp,batching_vertex:jp,begin_vertex:tm,beginnormal_vertex:em,bsdfs:nm,iridescence_fragment:im,bumpmap_pars_fragment:sm,clipping_planes_fragment:rm,clipping_planes_pars_fragment:om,clipping_planes_pars_vertex:am,clipping_planes_vertex:lm,color_fragment:cm,color_pars_fragment:hm,color_pars_vertex:um,color_vertex:dm,common:fm,defaultnormal_vertex:pm,displacementmap_pars_vertex:mm,displacementmap_vertex:gm,emissivemap_fragment:xm,emissivemap_pars_fragment:_m,colorspace_fragment:ym,colorspace_pars_fragment:vm,envmap_fragment:Mm,envmap_common_pars_fragment:Sm,envmap_pars_fragment:wm,envmap_pars_vertex:bm,envmap_physical_pars_fragment:Nm,envmap_vertex:Am,fog_vertex:Em,fog_pars_vertex:Tm,fog_fragment:Cm,fog_pars_fragment:Rm,gradientmap_pars_fragment:Pm,lightmap_pars_fragment:Im,lights_lambert_fragment:Fm,lights_lambert_pars_fragment:Lm,lights_pars_begin:Dm,lights_toon_fragment:Um,lights_toon_pars_fragment:zm,lights_phong_fragment:Om,lights_phong_pars_fragment:Bm,lights_physical_fragment:km,lights_physical_pars_fragment:Gm,lights_fragment_begin:Vm,lights_fragment_maps:Hm,lights_fragment_end:Wm,lightprobes_pars_fragment:Xm,logdepthbuf_fragment:qm,logdepthbuf_pars_fragment:Ym,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:Jm,map_fragment:$m,map_pars_fragment:Km,map_particle_fragment:Qm,map_particle_pars_fragment:jm,metalnessmap_fragment:t0,metalnessmap_pars_fragment:e0,morphinstance_vertex:n0,morphcolor_vertex:i0,morphnormal_vertex:s0,morphtarget_pars_vertex:r0,morphtarget_vertex:o0,normal_fragment_begin:a0,normal_fragment_maps:l0,normal_pars_fragment:c0,normal_pars_vertex:h0,normal_vertex:u0,normalmap_pars_fragment:d0,clearcoat_normal_fragment_begin:f0,clearcoat_normal_fragment_maps:p0,clearcoat_pars_fragment:m0,iridescence_pars_fragment:g0,opaque_fragment:x0,packing:_0,premultiplied_alpha_fragment:y0,project_vertex:v0,dithering_fragment:M0,dithering_pars_fragment:S0,roughnessmap_fragment:w0,roughnessmap_pars_fragment:b0,shadowmap_pars_fragment:A0,shadowmap_pars_vertex:E0,shadowmap_vertex:T0,shadowmask_pars_fragment:C0,skinbase_vertex:R0,skinning_pars_vertex:P0,skinning_vertex:I0,skinnormal_vertex:F0,specularmap_fragment:L0,specularmap_pars_fragment:D0,tonemapping_fragment:N0,tonemapping_pars_fragment:U0,transmission_fragment:z0,transmission_pars_fragment:O0,uv_pars_fragment:B0,uv_pars_vertex:k0,uv_vertex:G0,worldpos_vertex:V0,background_vert:H0,background_frag:W0,backgroundCube_vert:X0,backgroundCube_frag:q0,cube_vert:Y0,cube_frag:Z0,depth_vert:J0,depth_frag:$0,distance_vert:K0,distance_frag:Q0,equirect_vert:j0,equirect_frag:tg,linedashed_vert:eg,linedashed_frag:ng,meshbasic_vert:ig,meshbasic_frag:sg,meshlambert_vert:rg,meshlambert_frag:og,meshmatcap_vert:ag,meshmatcap_frag:lg,meshnormal_vert:cg,meshnormal_frag:hg,meshphong_vert:ug,meshphong_frag:dg,meshphysical_vert:fg,meshphysical_frag:pg,meshtoon_vert:mg,meshtoon_frag:gg,points_vert:xg,points_frag:_g,shadow_vert:yg,shadow_frag:vg,sprite_vert:Mg,sprite_frag:Sg},le={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]},probesIntensity:{value:[]}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Zi={basic:{uniforms:Hn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:nn.meshbasic_vert,fragmentShader:nn.meshbasic_frag},lambert:{uniforms:Hn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ee(0)},envMapIntensity:{value:1}}]),vertexShader:nn.meshlambert_vert,fragmentShader:nn.meshlambert_frag},phong:{uniforms:Hn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nn.meshphong_vert,fragmentShader:nn.meshphong_frag},standard:{uniforms:Hn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nn.meshphysical_vert,fragmentShader:nn.meshphysical_frag},toon:{uniforms:Hn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ee(0)}}]),vertexShader:nn.meshtoon_vert,fragmentShader:nn.meshtoon_frag},matcap:{uniforms:Hn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:nn.meshmatcap_vert,fragmentShader:nn.meshmatcap_frag},points:{uniforms:Hn([le.points,le.fog]),vertexShader:nn.points_vert,fragmentShader:nn.points_frag},dashed:{uniforms:Hn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nn.linedashed_vert,fragmentShader:nn.linedashed_frag},depth:{uniforms:Hn([le.common,le.displacementmap]),vertexShader:nn.depth_vert,fragmentShader:nn.depth_frag},normal:{uniforms:Hn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:nn.meshnormal_vert,fragmentShader:nn.meshnormal_frag},sprite:{uniforms:Hn([le.sprite,le.fog]),vertexShader:nn.sprite_vert,fragmentShader:nn.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nn.background_vert,fragmentShader:nn.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:nn.backgroundCube_vert,fragmentShader:nn.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nn.cube_vert,fragmentShader:nn.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nn.equirect_vert,fragmentShader:nn.equirect_frag},distance:{uniforms:Hn([le.common,le.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nn.distance_vert,fragmentShader:nn.distance_frag},shadow:{uniforms:Hn([le.lights,le.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:nn.shadow_vert,fragmentShader:nn.shadow_frag}};Zi.physical={uniforms:Hn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:nn.meshphysical_vert,fragmentShader:nn.meshphysical_frag};var Xl={r:0,b:0,g:0},wg=new hn,af=new We;af.set(-1,0,0,0,1,0,0,0,1);function bg(i,t,e,n,s,r){let o=new Ee(0),a=s===!0?0:1,l,c,h=null,p=0,d=null;function u(M){let R=M.isScene===!0?M.background:null;if(R&&R.isTexture){let b=M.backgroundBlurriness>0;R=t.get(R,b)}return R}function g(M){let R=!1,b=u(M);b===null?m(o,a):b&&b.isColor&&(m(b,1),R=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?e.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(M,R){let b=u(R);b&&b.isCubeTexture?(c===void 0&&(c=new xt(new Qe(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:qs(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,I,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wg.makeRotationFromEuler(R.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(af),c.material.toneMapped=on.getTransfer(b.colorSpace)!==pn,(h!==b||p!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,p=b.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new xt(new Zn(2,2),new yi({name:"BackgroundMaterial",uniforms:qs(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=on.getTransfer(b.colorSpace)!==pn,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||p!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,p=b.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,R){M.getRGB(Xl,Eh(i)),e.buffers.color.setClear(Xl.r,Xl.g,Xl.b,R,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,R=1){o.set(M),a=R,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:A,dispose:f}}function Ag(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(Q,it,Y,ct,et){let rt=!1,nt=p(Q,ct,Y,it);r!==nt&&(r=nt,c(r.object)),rt=u(Q,ct,Y,et),rt&&g(Q,ct,Y,et),et!==null&&t.update(et,i.ELEMENT_ARRAY_BUFFER),(rt||o)&&(o=!1,b(Q,it,Y,ct),et!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function l(){return i.createVertexArray()}function c(Q){return i.bindVertexArray(Q)}function h(Q){return i.deleteVertexArray(Q)}function p(Q,it,Y,ct){let et=ct.wireframe===!0,rt=n[it.id];rt===void 0&&(rt={},n[it.id]=rt);let nt=Q.isInstancedMesh===!0?Q.id:0,dt=rt[nt];dt===void 0&&(dt={},rt[nt]=dt);let pt=dt[Y.id];pt===void 0&&(pt={},dt[Y.id]=pt);let St=pt[et];return St===void 0&&(St=d(l()),pt[et]=St),St}function d(Q){let it=[],Y=[],ct=[];for(let et=0;et<e;et++)it[et]=0,Y[et]=0,ct[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:it,enabledAttributes:Y,attributeDivisors:ct,object:Q,attributes:{},index:null}}function u(Q,it,Y,ct){let et=r.attributes,rt=it.attributes,nt=0,dt=Y.getAttributes();for(let pt in dt)if(dt[pt].location>=0){let Ht=et[pt],ne=rt[pt];if(ne===void 0&&(pt==="instanceMatrix"&&Q.instanceMatrix&&(ne=Q.instanceMatrix),pt==="instanceColor"&&Q.instanceColor&&(ne=Q.instanceColor)),Ht===void 0||Ht.attribute!==ne||ne&&Ht.data!==ne.data)return!0;nt++}return r.attributesNum!==nt||r.index!==ct}function g(Q,it,Y,ct){let et={},rt=it.attributes,nt=0,dt=Y.getAttributes();for(let pt in dt)if(dt[pt].location>=0){let Ht=rt[pt];Ht===void 0&&(pt==="instanceMatrix"&&Q.instanceMatrix&&(Ht=Q.instanceMatrix),pt==="instanceColor"&&Q.instanceColor&&(Ht=Q.instanceColor));let ne={};ne.attribute=Ht,Ht&&Ht.data&&(ne.data=Ht.data),et[pt]=ne,nt++}r.attributes=et,r.attributesNum=nt,r.index=ct}function A(){let Q=r.newAttributes;for(let it=0,Y=Q.length;it<Y;it++)Q[it]=0}function m(Q){f(Q,0)}function f(Q,it){let Y=r.newAttributes,ct=r.enabledAttributes,et=r.attributeDivisors;Y[Q]=1,ct[Q]===0&&(i.enableVertexAttribArray(Q),ct[Q]=1),et[Q]!==it&&(i.vertexAttribDivisor(Q,it),et[Q]=it)}function M(){let Q=r.newAttributes,it=r.enabledAttributes;for(let Y=0,ct=it.length;Y<ct;Y++)it[Y]!==Q[Y]&&(i.disableVertexAttribArray(Y),it[Y]=0)}function R(Q,it,Y,ct,et,rt,nt){nt===!0?i.vertexAttribIPointer(Q,it,Y,et,rt):i.vertexAttribPointer(Q,it,Y,ct,et,rt)}function b(Q,it,Y,ct){A();let et=ct.attributes,rt=Y.getAttributes(),nt=it.defaultAttributeValues;for(let dt in rt){let pt=rt[dt];if(pt.location>=0){let St=et[dt];if(St===void 0&&(dt==="instanceMatrix"&&Q.instanceMatrix&&(St=Q.instanceMatrix),dt==="instanceColor"&&Q.instanceColor&&(St=Q.instanceColor)),St!==void 0){let Ht=St.normalized,ne=St.itemSize,we=t.get(St);if(we===void 0)continue;let mt=we.buffer,te=we.type,ie=we.bytesPerElement,me=te===i.INT||te===i.UNSIGNED_INT||St.gpuType===al;if(St.isInterleavedBufferAttribute){let kt=St.data,ae=kt.isInterleavedBuffer===!0?kt.stride:kt.itemSize,Ge=St.offset;if(kt.isInstancedInterleavedBuffer||kt.isInstancedBufferAttribute){for(let ve=0;ve<pt.locationSize;ve++)f(pt.location+ve,kt.meshPerAttribute);Q.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=kt.meshPerAttribute*kt.count)}else for(let ve=0;ve<pt.locationSize;ve++)m(pt.location+ve);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let ve=0;ve<pt.locationSize;ve++)R(pt.location+ve,ne/pt.locationSize,te,Ht,ae*ie,(Ge+ne/pt.locationSize*ve)*ie,me)}else{if(St.isInstancedBufferAttribute){for(let kt=0;kt<pt.locationSize;kt++)f(pt.location+kt,St.meshPerAttribute);Q.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let kt=0;kt<pt.locationSize;kt++)m(pt.location+kt);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let kt=0;kt<pt.locationSize;kt++)R(pt.location+kt,ne/pt.locationSize,te,Ht,ne*ie,ne/pt.locationSize*kt*ie,me)}}else if(nt!==void 0){let Ht=nt[dt];if(Ht!==void 0)switch(Ht.length){case 2:i.vertexAttrib2fv(pt.location,Ht);break;case 3:i.vertexAttrib3fv(pt.location,Ht);break;case 4:i.vertexAttrib4fv(pt.location,Ht);break;default:i.vertexAttrib1fv(pt.location,Ht)}}}}M()}function D(){k();for(let Q in n){let it=n[Q];for(let Y in it){let ct=it[Y];for(let et in ct){let rt=ct[et];for(let nt in rt)h(rt[nt].object),delete rt[nt];delete ct[et]}}delete n[Q]}}function I(Q){if(n[Q.id]===void 0)return;let it=n[Q.id];for(let Y in it){let ct=it[Y];for(let et in ct){let rt=ct[et];for(let nt in rt)h(rt[nt].object),delete rt[nt];delete ct[et]}}delete n[Q.id]}function x(Q){for(let it in n){let Y=n[it];for(let ct in Y){let et=Y[ct];if(et[Q.id]===void 0)continue;let rt=et[Q.id];for(let nt in rt)h(rt[nt].object),delete rt[nt];delete et[Q.id]}}}function C(Q){for(let it in n){let Y=n[it],ct=Q.isInstancedMesh===!0?Q.id:0,et=Y[ct];if(et!==void 0){for(let rt in et){let nt=et[rt];for(let dt in nt)h(nt[dt].object),delete nt[dt];delete et[rt]}delete Y[ct],Object.keys(Y).length===0&&delete n[it]}}}function k(){F(),o=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:k,resetDefaultState:F,dispose:D,releaseStatesOfGeometry:I,releaseStatesOfObject:C,releaseStatesOfProgram:x,initAttributes:A,enableAttribute:m,disableUnusedAttributes:M}}function Eg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Tg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Ni&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let C=x===Di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==Kn&&x!==vi&&!C&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Le("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=i.getParameter(i.MAX_SAMPLES),I=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:u,maxVertexTextures:g,maxTextureSize:A,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:R,maxFragmentUniforms:b,maxSamples:D,samples:I}}function Cg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ri,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let u=p.length!==0||d||n!==0||s;return s=d,n=p.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=h(p,d,0)},this.setState=function(p,d,u){let g=p.clippingPlanes,A=p.clipIntersection,m=p.clipShadows,f=i.get(p);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,R=M*4,b=f.clippingState||null;l.value=b,b=h(g,d,R,u);for(let D=0;D!==R;++D)b[D]=e[D];f.clippingState=b,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,d,u,g){let A=p!==null?p.length:0,m=null;if(A!==0){if(m=l.value,g!==!0||m===null){let f=u+A*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let R=0,b=u;R!==A;++R,b+=4)o.copy(p[R]).applyMatrix4(M,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,m}}var Do=class extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new io(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qe(5,5,5),r=new yi({name:"CubemapFromEquirect",uniforms:qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:Vs});r.uniforms.tEquirect.value=e;let o=new xt(s,r),a=e.minFilter;return e.minFilter===cs&&(e.minFilter=qn),new br(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Od=256,Rg=3,Pg=20,lf=256,cf=16,Ig=3,Fg=new O,Lg=new Ee,Yl=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new br(1,10,null),this._boxMesh=new xt(new Qe(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Fg}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,d=l.autoClearColor,u=l.autoClearDepth,g=l.autoClearStencil,A=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,A===null&&(t.background=l.getClearColor(Lg));let m=new br(n,s,h);return m.position.copy(a),m.update(l,t),l.autoClear=p,l.autoClearColor=d,l.autoClearDepth=u,l.autoClearStencil=g,t.background=A,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Od,Ed(t))}_fromTexture(t,e){t.mapping===Ws||t.mapping===Tr?this._setSize(t.image.length===0?Od:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Bd(t,!1,!1),n=Math.log2(t)-Rg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Bd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ws||t.mapping===Tr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=kd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Dg(),this._integrationMaterial=Ng());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/cf);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Ig)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(lf*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Ug());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Bd(i,t,e){return new Do(i,{minFilter:cs,generateMipmaps:t,type:Di,colorSpace:qr,depthBuffer:e})}function No(i,t,e){return new yi({name:i,uniforms:t,vertexShader:nn.cube_vert,fragmentShader:e,side:Un,blending:Vs,depthTest:!1,depthWrite:!1})}function Dg(){return No("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${lf}u

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
	`)}function Ng(){return No("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:cf}},`

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
	`)}function Ug(){return No("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Pg}
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
	`)}function kd(){return No("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Gd(){return No("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureLod( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ), 0.0 ).rgb, 1.0 );

		}
	`)}function zg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,u=!1){return d==null?null:u?o(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===sl||u===rl)if(t.has(d)){let g=t.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let A=new Do(g.height);return A.fromEquirectangularTexture(i,d),t.set(d,A),d.addEventListener("dispose",c),a(A.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,g=u===sl||u===rl,A=u===Ws||u===Tr;if(g||A){let m=e.get(d),f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new Yl(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return g&&M&&M.height>0||A&&M&&l(M)?(n===null&&(n=new Yl(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,u){return u===sl?d.mapping=Ws:u===rl&&(d.mapping=Tr),d}function l(d){let u=0,g=6;for(let A=0;A<g;A++)d[A]!==void 0&&u++;return u===g}function c(d){let u=d.target;u.removeEventListener("dispose",c);let g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Og(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Vr("WebGLRenderer: "+n+" extension not supported."),s}}}function Bg(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);let A=r.get(g);A&&(t.remove(A),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,A){return s[A.id]!==void 0||(A.addEventListener("dispose",a),s[A.id]=new WeakRef(A),o.register(A,A.id,A),e.memory.geometries++),A}function h(g){let A=g.attributes;for(let m in A)t.update(A[m],i.ARRAY_BUFFER)}function p(g){let A=g.index,m=g.attributes.position,f=0;if(m===void 0)return;let M=A!==null?A.count:m.count-1,R=m.count>=65535?jr:Qr,b=new R(Math.ceil(M/3)*6,1),D=b.array;if(A!==null){let x=A.array;f=A.version;for(let C=0,k=0;C<M;C+=3){let F=x[C+0],Q=x[C+1],it=x[C+2];D[k++]=F,D[k++]=Q,D[k++]=Q,D[k++]=it,D[k++]=it,D[k++]=F}}else{f=m.version;for(let x=0,C=0;x<M;x+=3){let k=x+0,F=x+1,Q=x+2;D[C++]=k,D[C++]=F,D[C++]=F,D[C++]=Q,D[C++]=Q,D[C++]=k}}b.version=f;let I=r.get(g);I&&t.remove(I),r.set(g,b)}function d(g){let A=r.get(g);if(A){let m=g.index;m!==null&&A.version<m.version&&p(g)}else p(g);return r.get(g)}function u(){for(let g in s){let A=s[g].deref();A!==void 0&&l(A)}}return{get:c,update:h,getWireframeAttribute:d,dispose:u}}function kg(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,d){i.drawElements(n,d,r,p*o),e.update(d,n,1)}function c(p,d,u){u!==0&&(i.drawElementsInstanced(n,d,r,p*o,u),e.update(d,n,u))}function h(p,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,u);let A=0;for(let m=0;m<u;m++)A+=d[m];e.update(A,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Gg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ze("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Vg(i,t,e){let n=new WeakMap,s=new vn;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==p){let k=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",k)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,A=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],R=0;u===!0&&(R=1),g===!0&&(R=2),A===!0&&(R=3);let b=a.attributes.position.count*R,D=1;b>t.maxTextureSize&&(D=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let I=new Float32Array(b*D*4*p),x=new $r(I,b,D,p);x.type=vi,x.needsUpdate=!0;let C=R*4;for(let F=0;F<p;F++){let Q=m[F],it=f[F],Y=M[F],ct=b*D*4*F;for(let et=0;et<Q.count;et++){let rt=et*C;u===!0&&(s.fromBufferAttribute(Q,et),I[ct+rt+0]=s.x,I[ct+rt+1]=s.y,I[ct+rt+2]=s.z,I[ct+rt+3]=0),g===!0&&(s.fromBufferAttribute(it,et),I[ct+rt+4]=s.x,I[ct+rt+5]=s.y,I[ct+rt+6]=s.z,I[ct+rt+7]=0),A===!0&&(s.fromBufferAttribute(Y,et),I[ct+rt+8]=s.x,I[ct+rt+9]=s.y,I[ct+rt+10]=s.z,I[ct+rt+11]=Y.itemSize===4?s.w:1)}}d={count:p,texture:x,size:new ot(b,D)},n.set(a,d),a.addEventListener("dispose",k)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let A=0;A<c.length;A++)u+=c[A];let g=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Hg(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,p=c.geometry,d=t.get(c,p);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Wg={[ah]:"LINEAR_TONE_MAPPING",[lh]:"REINHARD_TONE_MAPPING",[ch]:"CINEON_TONE_MAPPING",[wo]:"ACES_FILMIC_TONE_MAPPING",[uh]:"AGX_TONE_MAPPING",[dh]:"NEUTRAL_TONE_MAPPING",[hh]:"CUSTOM_TONE_MAPPING"};function Xg(i,t,e,n,s,r){let o=new ei(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new qe;h.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new He([0,2,0,0,2,0],2));let p=new Ga({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new xt(h,p),u=new Bs(-1,1,1,-1,0,1),g=null,A=null,m=!1,f,M=null,R=[],b=!1;this.setSize=function(D,I){o.setSize(D,I),a!==null&&a.setSize(D,I),l!==null&&l.setSize(D,I);for(let x=0;x<R.length;x++){let C=R[x];C.setSize&&C.setSize(D,I)}},this.setEffects=function(D){R=D,b=R.length>0&&R[0].isRenderPass===!0;let I=o.width,x=o.height;R.length>0&&a===null&&(a=new ei(I,x,{type:Di,depthBuffer:!1,stencilBuffer:!1}),l=new ei(I,x,{type:Di,depthBuffer:!1,stencilBuffer:!1}));let C=s===!0&&R.some(k=>k.needsDepthTexture===!0);C!==(o.depthTexture!==null)&&(C===!0&&c===null&&(c=new as(I,x),r===!0&&(c.format=hs,c.type=Xs)),o.dispose(),o.depthTexture=C?c:null,o.resolveDepthBuffer=C,o.storeMultisampledDepthBuffer=C);for(let k=0;k<R.length;k++){let F=R[k];F.setSize&&F.setSize(I,x),C&&F.needsDepthTexture===!0&&F.setDepthTexture&&F.setDepthTexture(c)}},this.begin=function(D,I){if(m||D.toneMapping===qi&&R.length===0)return!1;if(M=I,I!==null){let x=I.width,C=I.height;(o.width!==x||o.height!==C)&&this.setSize(x,C)}return b===!1&&D.setRenderTarget(o),f=D.toneMapping,D.toneMapping=qi,!0},this.hasRenderPass=function(){return b},this.end=function(D,I){D.toneMapping=f,m=!0;let x=o,C=a;for(let k=0;k<R.length;k++){let F=R[k];F.enabled!==!1&&(F.render(D,C,x,I),F.needsSwap!==!1&&(x=C,C=C===a?l:a))}if(g!==D.outputColorSpace||A!==D.toneMapping){g=D.outputColorSpace,A=D.toneMapping,p.defines={},on.getTransfer(g)===pn&&(p.defines.SRGB_TRANSFER="");let k=Wg[A];k&&(p.defines[k]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=x.texture,D.setRenderTarget(M),D.render(d,u),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}var hf=new Yn,uf=new as(1,1),df=new ro(1),ff=new $r,pf=new Pa,mf=new io,Vd=[],Hd=[],Wd=new Float32Array(16),Xd=new Float32Array(9),qd=new Float32Array(4);function Pr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Vd[s];if(r===void 0&&(r=new Float32Array(s),Vd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Rn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Jl(i,t){let e=Hd[t];e===void 0&&(e=new Int32Array(t),Hd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Rn(e,t))return;i.uniform2fv(this.addr,t),Pn(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Rn(e,t))return;i.uniform3fv(this.addr,t),Pn(e,t)}}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Rn(e,t))return;i.uniform4fv(this.addr,t),Pn(e,t)}}function $g(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Rn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pn(e,t)}else{if(Rn(e,n))return;qd.set(n),i.uniformMatrix2fv(this.addr,!1,qd),Pn(e,n)}}function Kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Rn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pn(e,t)}else{if(Rn(e,n))return;Xd.set(n),i.uniformMatrix3fv(this.addr,!1,Xd),Pn(e,n)}}function Qg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Rn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pn(e,t)}else{if(Rn(e,n))return;Wd.set(n),i.uniformMatrix4fv(this.addr,!1,Wd),Pn(e,n)}}function jg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Rn(e,t))return;i.uniform2iv(this.addr,t),Pn(e,t)}}function ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Rn(e,t))return;i.uniform3iv(this.addr,t),Pn(e,t)}}function nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Rn(e,t))return;i.uniform4iv(this.addr,t),Pn(e,t)}}function ix(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Rn(e,t))return;i.uniform2uiv(this.addr,t),Pn(e,t)}}function rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Rn(e,t))return;i.uniform3uiv(this.addr,t),Pn(e,t)}}function ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Rn(e,t))return;i.uniform4uiv(this.addr,t),Pn(e,t)}}function $l(i){return i.version===0&&(i.compareFunction=Sh,i.needsUpdate=!0),i}function ax(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=$l(uf):r=hf,e.setTexture2D(t||r,s)}function lx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||pf,s)}function cx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=$l(df):r=mf,e.setTextureCube(t||r,s)}function hx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ff,s)}function ux(i){switch(i){case 5126:return qg;case 35664:return Yg;case 35665:return Zg;case 35666:return Jg;case 35674:return $g;case 35675:return Kg;case 35676:return Qg;case 5124:case 35670:return jg;case 35667:case 35671:return tx;case 35668:case 35672:return ex;case 35669:case 35673:return nx;case 5125:return ix;case 36294:return sx;case 36295:return rx;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return hx}}function dx(i,t){i.uniform1fv(this.addr,t)}function fx(i,t){let e=Pr(t,this.size,2);i.uniform2fv(this.addr,e)}function px(i,t){let e=Pr(t,this.size,3);i.uniform3fv(this.addr,e)}function mx(i,t){let e=Pr(t,this.size,4);i.uniform4fv(this.addr,e)}function gx(i,t){let e=Pr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xx(i,t){let e=Pr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _x(i,t){let e=Pr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yx(i,t){i.uniform1iv(this.addr,t)}function vx(i,t){i.uniform2iv(this.addr,t)}function Mx(i,t){i.uniform3iv(this.addr,t)}function Sx(i,t){i.uniform4iv(this.addr,t)}function wx(i,t){i.uniform1uiv(this.addr,t)}function bx(i,t){i.uniform2uiv(this.addr,t)}function Ax(i,t){i.uniform3uiv(this.addr,t)}function Ex(i,t){i.uniform4uiv(this.addr,t)}function Tx(i,t,e){let n=this.cache,s=t.length,r=Jl(e,s);Rn(n,r)||(i.uniform1iv(this.addr,r),Pn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=$l(uf):o=hf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Cx(i,t,e){let n=this.cache,s=t.length,r=Jl(e,s);Rn(n,r)||(i.uniform1iv(this.addr,r),Pn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||pf,r[o])}function Rx(i,t,e){let n=this.cache,s=t.length,r=Jl(e,s);Rn(n,r)||(i.uniform1iv(this.addr,r),Pn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=$l(df):o=mf;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Px(i,t,e){let n=this.cache,s=t.length,r=Jl(e,s);Rn(n,r)||(i.uniform1iv(this.addr,r),Pn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ff,r[o])}function Ix(i){switch(i){case 5126:return dx;case 35664:return fx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return xx;case 35676:return _x;case 5124:case 35670:return yx;case 35667:case 35671:return vx;case 35668:case 35672:return Mx;case 35669:case 35673:return Sx;case 5125:return wx;case 36294:return bx;case 36295:return Ax;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Rx;case 36289:case 36303:case 36311:case 36292:return Px}}var zh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ux(e.type)}},Oh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ix(e.type)}},Bh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Nh=/(\w+)(\])?(\[|\.)?/g;function Yd(i,t){i.seq.push(t),i.map[t.id]=t}function Fx(i,t,e){let n=i.name,s=n.length;for(Nh.lastIndex=0;;){let r=Nh.exec(n),o=Nh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Yd(e,c===void 0?new zh(a,i,t):new Oh(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new Bh(a),Yd(e,p)),e=p}}}var Rr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Fx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Zd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Lx=37297,Dx=0;function Nx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Jd=new We;function Ux(i){on._getMatrix(Jd,on.workingColorSpace,i);let t=`mat3( ${Jd.elements.map(e=>e.toFixed(4))} )`;switch(on.getTransfer(i)){case Yr:return[t,"LinearTransferOETF"];case pn:return[t,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function $d(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Nx(i.getShaderSource(t),a)}else return r}function zx(i,t){let e=Ux(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ox={[ah]:"Linear",[lh]:"Reinhard",[ch]:"Cineon",[wo]:"ACESFilmic",[uh]:"AgX",[dh]:"Neutral",[hh]:"Custom"};function Bx(i,t){let e=Ox[t];return e===void 0?(Le("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ql=new O;function kx(){on.getLuminanceCoefficients(ql);let i=ql.x.toFixed(4),t=ql.y.toFixed(4),e=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function Vx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Lo(i){return i!==""}function Kd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Qd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function kh(i){return i.replace(Wx,Xx)}function Xx(i,t){let e=nn[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return kh(e)}var qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jd(i){return i.replace(qx,Yx)}function Yx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Zx={[Gs]:"SHADOWMAP_TYPE_PCF",[Ar]:"SHADOWMAP_TYPE_VSM"};function Jx(i){return Zx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var $x={[Tr]:"ENVMAP_MODE_REFRACTION"};function Kx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$x[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qx={[So]:"ENVMAP_BLENDING_MULTIPLY",[ud]:"ENVMAP_BLENDING_MIX",[dd]:"ENVMAP_BLENDING_ADD"};function jx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Qx[i.combine]||"ENVMAP_BLENDING_NONE"}function t_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Jx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Kx(e),p=jx(e),d=Gx(e),u=Vx(r),g=s.createProgram(),A,m,f=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(A=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Lo).join(`
`),A.length>0&&(A+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Lo).join(`
`),m.length>0&&(m+=`
`)):(A=[tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),m=[tf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qi?"#define TONE_MAPPING":"",e.toneMapping!==qi?nn.tonemapping_pars_fragment:"",e.toneMapping!==qi?Bx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",nn.colorspace_pars_fragment,zx("linearToOutputTexel",e.outputColorSpace),kx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lo).join(`
`)),o=kh(o),o=Kd(o,e),o=Qd(o,e),a=kh(a),a=Kd(a,e),a=Qd(a,e),o=jd(o),a=jd(a),e.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,A=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,m=["#define varying in",e.glslVersion===bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=f+A+o,R=f+m+a,b=Zd(s,s.VERTEX_SHADER,M),D=Zd(s,s.FRAGMENT_SHADER,R);s.attachShader(g,b),s.attachShader(g,D),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function I(F){if(i.debug.checkShaderErrors){let Q=s.getProgramInfoLog(g)||"",it=s.getShaderInfoLog(b)||"",Y=s.getShaderInfoLog(D)||"",ct=Q.trim(),et=it.trim(),rt=Y.trim(),nt=!0,dt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,b,D);else{let pt=$d(s,b,"vertex"),St=$d(s,D,"fragment");ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ct+`
`+pt+`
`+St)}else ct!==""?Le("WebGLProgram: Program Info Log:",ct):(et===""||rt==="")&&(dt=!1);dt&&(F.diagnostics={runnable:nt,programLog:ct,vertexShader:{log:et,prefix:A},fragmentShader:{log:rt,prefix:m}})}s.deleteShader(b),s.deleteShader(D),x=new Rr(s,g),C=Hx(s,g)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(g,Lx)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dx++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=D,this}var e_=0,Gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Vh(t),e.set(t,n)),n}},Vh=class{constructor(t){this.id=e_++,this.code=t,this.usedTimes=0}};function n_(i){return i===As||i===Ro||i===Po}function i_(i,t,e,n,s,r){let o=new Kr,a=new Gh,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,C,k,F,Q,it){let Y=F.fog,ct=Q.geometry,et=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,rt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,nt=t.get(x.envMap||et,rt),dt=d[x.type],pt=n.precision;x.precision!==null&&(pt=n.getMaxPrecision(x.precision),pt!==x.precision&&Le("WebGLProgram.getParameters:",x.precision,"not supported, using",pt,"instead."));let St=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Ht=St!==void 0?St.length:0,ne=0;ct.morphAttributes.position!==void 0&&(ne=1),ct.morphAttributes.normal!==void 0&&(ne=2),ct.morphAttributes.color!==void 0&&(ne=3);let we,mt,te,ie;if(dt){let se=Zi[dt];we=se.vertexShader,mt=se.fragmentShader}else{we=x.vertexShader,mt=x.fragmentShader;let se=a.getVertexShaderStage(x),Je=a.getFragmentShaderStage(x);a.update(x,se,Je),te=se.id,ie=Je.id}let me=i.getRenderTarget(),kt=i.state.buffers.depth.getReversed(),ae=Q.isInstancedMesh===!0,Ge=Q.isBatchedMesh===!0,ve=!!x.map,fe=!!x.matcap,Ke=!!nt,wt=Ke&&nt.isPMREMTexture===!0,Gt=!!x.aoMap,Pt=!!x.lightMap,ue=!!x.bumpMap&&x.wireframe===!1,jt=!!x.normalMap,ge=!!x.displacementMap,de=!!x.emissiveMap,Fe=!!x.metalnessMap,Ne=!!x.roughnessMap,yt=x.anisotropy>0,K=x.clearcoat>0,tn=x.diffuseRoughness>0,Be=x.dispersion>0,ln=x.retroreflectivity>0,Zt=x.iridescence>0,cn=x.sheen>0,be=x.transmission>0,Ie=yt&&!!x.anisotropyMap,U=K&&!!x.clearcoatMap,v=K&&!!x.clearcoatNormalMap,ht=K&&!!x.clearcoatRoughnessMap,bt=tn&&!!x.diffuseRoughnessMap,Tt=Zt&&!!x.iridescenceMap,$t=Zt&&!!x.iridescenceThicknessMap,qt=cn&&!!x.sheenColorMap,Mt=cn&&!!x.sheenRoughnessMap,ut=!!x.specularMap,Jt=!!x.specularColorMap,re=!!x.specularIntensityMap,H=be&&!!x.transmissionMap,vt=be&&!!x.thicknessMap,Ct=!!x.gradientMap,lt=!!x.alphaMap,Yt=x.alphaTest>0,ee=!!x.alphaHash,Pe=!!x.extensions,zt=qi;x.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(zt=i.toneMapping);let Xe=wt?nt.isCompressedCubeTexture?nt.image[0].mipmaps:nt.mipmaps:null,Me={shaderID:dt,shaderType:x.type,shaderName:x.name,vertexShader:we,fragmentShader:mt,defines:x.defines,customVertexShaderID:te,customFragmentShaderID:ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:pt,batching:Ge,batchingColor:Ge&&Q._colorsTexture!==null,instancing:ae,instancingColor:ae&&Q.instanceColor!==null,instancingMorph:ae&&Q.morphTexture!==null,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:on.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ve,matcap:fe,envMap:Ke,envMapMode:Ke&&nt.mapping,envMapPMREM:wt,envMapMaxLod:wt?Xe.length-1:null,envMapSize:wt?Xe[0].width:null,aoMap:Gt,lightMap:Pt,bumpMap:ue,normalMap:jt,displacementMap:ge,emissiveMap:de,normalMapObjectSpace:jt&&x.normalMapType===md,normalMapTangentSpace:jt&&x.normalMapType===Io,packedNormalMap:jt&&x.normalMapType===Io&&n_(x.normalMap.format),metalnessMap:Fe,roughnessMap:Ne,anisotropy:yt,anisotropyMap:Ie,clearcoat:K,clearcoatMap:U,clearcoatNormalMap:v,clearcoatRoughnessMap:ht,diffuseRoughness:tn,diffuseRoughnessMap:bt,dispersion:Be,retroreflection:ln,iridescence:Zt,iridescenceMap:Tt,iridescenceThicknessMap:$t,sheen:cn,sheenColorMap:qt,sheenRoughnessMap:Mt,specularMap:ut,specularColorMap:Jt,specularIntensityMap:re,transmission:be,transmissionMap:H,thicknessMap:vt,gradientMap:Ct,opaque:x.transparent===!1&&x.blending===Er&&x.alphaToCoverage===!1,alphaMap:lt,alphaTest:Yt,alphaHash:ee,combine:x.combine,mapUv:ve&&u(x.map.channel),aoMapUv:Gt&&u(x.aoMap.channel),lightMapUv:Pt&&u(x.lightMap.channel),bumpMapUv:ue&&u(x.bumpMap.channel),normalMapUv:jt&&u(x.normalMap.channel),displacementMapUv:ge&&u(x.displacementMap.channel),emissiveMapUv:de&&u(x.emissiveMap.channel),metalnessMapUv:Fe&&u(x.metalnessMap.channel),roughnessMapUv:Ne&&u(x.roughnessMap.channel),anisotropyMapUv:Ie&&u(x.anisotropyMap.channel),clearcoatMapUv:U&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:v&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:bt&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:Tt&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&u(x.sheenRoughnessMap.channel),specularMapUv:ut&&u(x.specularMap.channel),specularColorMapUv:Jt&&u(x.specularColorMap.channel),specularIntensityMapUv:re&&u(x.specularIntensityMap.channel),transmissionMapUv:H&&u(x.transmissionMap.channel),thicknessMapUv:vt&&u(x.thicknessMap.channel),alphaMapUv:lt&&u(x.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(jt||yt),vertexNormals:!!ct.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ct.attributes.uv&&(ve||lt),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||ct.attributes.normal===void 0&&jt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:kt,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:ct.attributes.position!==void 0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:ne,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbeGrids:it.filter(se=>se.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:ve&&x.map.isVideoTexture===!0&&on.getTransfer(x.map.colorSpace)===pn,decodeVideoTextureEmissive:de&&x.emissiveMap.isVideoTexture===!0&&on.getTransfer(x.emissiveMap.colorSpace)===pn,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===en,flipSided:x.side===Un,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Pe&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&x.extensions.multiDraw===!0||Ge)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function A(x){let C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(let k in x.defines)C.push(k),C.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(m(C,x),f(C,x),C.push(i.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function m(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapPMREM),x.push(C.envMapMaxLod),x.push(C.envMapSize),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.diffuseRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.numSunLights),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numSunLightShadows),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbeGrids),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function f(x,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.diffuseRoughness&&o.enable(25),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function M(x){let C=d[x.type],k;if(C){let F=Zi[C];k=Nd.clone(F.uniforms)}else k=x.uniforms;return k}function R(x,C){let k=h.get(C);return k!==void 0?++k.usedTimes:(k=new t_(i,C,x,s),c.push(k),h.set(C,k)),k}function b(x){if(--x.usedTimes===0){let C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function D(x){a.remove(x)}function I(){a.dispose()}return{getParameters:g,getProgramCacheKey:A,getUniforms:M,acquireProgram:R,releaseProgram:b,releaseShaderCache:D,programs:c,dispose:I}}function s_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function r_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ef(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function nf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function a(d,u,g,A,m,f){let M=i[t];return M===void 0?(M={id:d.id,object:d,geometry:u,material:g,materialVariant:o(d),groupOrder:A,renderOrder:d.renderOrder,z:m,group:f},i[t]=M):(M.id=d.id,M.object=d,M.geometry=u,M.material=g,M.materialVariant=o(d),M.groupOrder=A,M.renderOrder=d.renderOrder,M.z=m,M.group=f),t++,M}function l(d,u,g,A,m,f,M){M.reversedDepth===!0&&(m=-m);let R=a(d,u,g,A,m,f);g.transmission>0?n.push(R):g.transparent===!0?s.push(R):e.push(R)}function c(d,u,g,A,m,f){let M=a(d,u,g,A,m,f);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(d,u){e.length>1&&e.sort(d||r_),n.length>1&&n.sort(u||ef),s.length>1&&s.sort(u||ef)}function p(){for(let d=t,u=i.length;d<u;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function o_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new nf,i.set(n,[o])):s>=r.length?(o=new nf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function a_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new Ee};break;case"SpotLight":e={position:new O,direction:new O,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":e={color:new Ee,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function l_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var c_=0;function h_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function u_(i){let t=new a_,e=l_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0},s=new O,r=new hn,o=new hn;function a(c){let h=0,p=0,d=0,u=0,g=0,A=0,m=0,f=0,M=0,R=0,b=0,D=0,I=0,x=0,C=0,k=0;c.sort(h_);for(let Q=0,it=c.length;Q<it;Q++){let Y=c[Q],ct=Y.color,et=Y.intensity,rt=Y.distance,nt=null;if(Y.shadow&&Y.shadow.map&&(Y.shadow.map.texture.format===As?nt=Y.shadow.map.texture:nt=Y.shadow.map.depthTexture||Y.shadow.map.texture),Y.isAmbientLight)h+=ct.r*et,p+=ct.g*et,d+=ct.b*et;else if(Y.isSunLight){let dt=t.get(Y);if(dt.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){let pt=Y.shadow,St=e.get(Y);St.shadowIntensity=pt.intensity,St.shadowBias=pt.bias,St.shadowNormalBias=pt.normalBias,St.shadowRadius=pt.radius,St.shadowMapSize.copy(pt.mapSize).multiply(pt.getFrameExtents()),n.sunShadow[g]=St,n.sunShadowMap[g]=nt;let Ht=pt.getViewportCount();for(let ne=0;ne<Ht;ne++)n.sunShadowMatrix[A+ne]=pt.getMatrix(ne),n.sunShadowCascade[A+ne]=pt._cascadeData[ne];A+=Ht,g++}n.sun[u]=dt,u++}else if(Y.isDirectionalLight){let dt=t.get(Y);if(dt.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){let pt=Y.shadow,St=e.get(Y);St.shadowIntensity=pt.intensity,St.shadowBias=pt.bias,St.shadowNormalBias=pt.normalBias,St.shadowRadius=pt.radius,St.shadowMapSize=pt.mapSize,n.directionalShadow[m]=St,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=Y.shadow.matrix,D++}n.directional[m]=dt,m++}else if(Y.isSpotLight){let dt=t.get(Y);dt.position.setFromMatrixPosition(Y.matrixWorld),dt.color.copy(ct).multiplyScalar(et),dt.distance=rt,dt.coneCos=Math.cos(Y.angle),dt.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),dt.decay=Y.decay,n.spot[M]=dt;let pt=Y.shadow;if(Y.map&&(n.spotLightMap[C]=Y.map,C++,pt.updateMatrices(Y),Y.castShadow&&k++),n.spotLightMatrix[M]=pt.matrix,Y.castShadow){let St=e.get(Y);St.shadowIntensity=pt.intensity,St.shadowBias=pt.bias,St.shadowNormalBias=pt.normalBias,St.shadowRadius=pt.radius,St.shadowMapSize=pt.mapSize,n.spotShadow[M]=St,n.spotShadowMap[M]=nt,x++}M++}else if(Y.isRectAreaLight){let dt=t.get(Y);dt.color.copy(ct).multiplyScalar(et),dt.halfWidth.set(Y.width*.5,0,0),dt.halfHeight.set(0,Y.height*.5,0),n.rectArea[R]=dt,R++}else if(Y.isPointLight){let dt=t.get(Y);if(dt.color.copy(Y.color).multiplyScalar(Y.intensity),dt.distance=Y.distance,dt.decay=Y.decay,Y.castShadow){let pt=Y.shadow,St=e.get(Y);St.shadowIntensity=pt.intensity,St.shadowBias=pt.bias,St.shadowNormalBias=pt.normalBias,St.shadowRadius=pt.radius,St.shadowMapSize=pt.mapSize,St.shadowCameraNear=pt.camera.near,St.shadowCameraFar=pt.camera.far,n.pointShadow[f]=St,n.pointShadowMap[f]=nt,n.pointShadowMatrix[f]=Y.shadow.matrix,I++}n.point[f]=dt,f++}else if(Y.isHemisphereLight){let dt=t.get(Y);dt.skyColor.copy(Y.color).multiplyScalar(et),dt.groundColor.copy(Y.groundColor).multiplyScalar(et),n.hemi[b]=dt,b++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=d;let F=n.hash;(F.sunLength!==u||F.directionalLength!==m||F.pointLength!==f||F.spotLength!==M||F.rectAreaLength!==R||F.hemiLength!==b||F.numSunShadows!==g||F.numDirectionalShadows!==D||F.numPointShadows!==I||F.numSpotShadows!==x||F.numSpotMaps!==C)&&(n.sun.length=u,n.directional.length=m,n.spot.length=M,n.rectArea.length=R,n.point.length=f,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=A,n.sunShadowCascade.length=A,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.directionalShadowMatrix.length=D,n.pointShadow.length=I,n.pointShadowMap.length=I,n.pointShadowMatrix.length=I,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+C-k,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=k,F.sunLength=u,F.directionalLength=m,F.pointLength=f,F.spotLength=M,F.rectAreaLength=R,F.hemiLength=b,F.numSunShadows=g,F.numDirectionalShadows=D,F.numPointShadows=I,F.numSpotShadows=x,F.numSpotMaps=C,n.version=c_++)}function l(c,h){let p=0,d=0,u=0,g=0,A=0,m=0,f=h.matrixWorldInverse;for(let M=0,R=c.length;M<R;M++){let b=c[M];if(b.isSunLight){let D=n.sun[p];D.direction.setFromMatrixPosition(b.matrixWorld),D.direction.transformDirection(f),p++}else if(b.isDirectionalLight){let D=n.directional[d];D.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(f),d++}else if(b.isSpotLight){let D=n.spot[g];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(f),D.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(f),g++}else if(b.isRectAreaLight){let D=n.rectArea[A];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(f),o.identity(),r.copy(b.matrixWorld),r.premultiply(f),o.extractRotation(r),D.halfWidth.set(b.width*.5,0,0),D.halfHeight.set(0,b.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),A++}else if(b.isPointLight){let D=n.point[u];D.position.setFromMatrixPosition(b.matrixWorld),D.position.applyMatrix4(f),u++}else if(b.isHemisphereLight){let D=n.hemi[m];D.direction.setFromMatrixPosition(b.matrixWorld),D.direction.transformDirection(f),m++}}}return{setup:a,setupView:l,state:n}}function sf(i){let t=new u_(i),e=[],n=[],s=[];function r(p){h.camera=p,e.length=0,n.length=0,s.length=0}function o(p){p.isLightProbeGrid?s.push(p):e.push(p)}function a(p){n.push(p)}function l(){t.setup(e),s.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function c(p){t.setupView(e,p)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function d_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new sf(i),t.set(s,[a])):r>=o.length?(a=new sf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var f_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p_=`uniform sampler2D shadow_pass;
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
}`,m_=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],g_=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],rf=new hn,Fo=new O,Uh=new O;function x_(i,t,e){let n=new _s,s=new ot,r=new ot,o=new vn,a=new Va,l=new Ha,c={},h=e.maxTextureSize,p={[bs]:Un,[Un]:bs,[en]:en},d=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:f_,fragmentShader:p_}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new qe;g.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new xt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gs;let f=this.type;this.render=function(I,x,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;this.type===qu&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gs);let k=i.getRenderTarget(),F=i.getActiveCubeFace(),Q=i.getActiveMipmapLevel(),it=i.state;it.setBlending(Vs),it.buffers.depth.getReversed()===!0?it.buffers.color.setClear(0,0,0,0):it.buffers.color.setClear(1,1,1,1),it.buffers.depth.setTest(!0),it.setScissorTest(!1);let Y=f!==this.type;Y&&x.traverse(function(ct){ct.material&&(Array.isArray(ct.material)?ct.material.forEach(et=>et.needsUpdate=!0):ct.material.needsUpdate=!0)});for(let ct=0,et=I.length;ct<et;ct++){let rt=I[ct],nt=rt.shadow;if(nt===void 0){Le("WebGLShadowMap:",rt,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;s.copy(nt.mapSize);let dt=nt.getFrameExtents();s.multiply(dt),r.copy(nt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/dt.x),s.x=r.x*dt.x,nt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/dt.y),s.y=r.y*dt.y,nt.mapSize.y=r.y));let pt=i.state.buffers.depth.getReversed();if(nt.camera._reversedDepth=pt,nt.map===null||Y===!0){if(nt.map!==null&&(nt.map.depthTexture!==null&&(nt.map.depthTexture.dispose(),nt.map.depthTexture=null),nt.map.dispose()),this.type===Ar){if(rt.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}nt.map=new ei(s.x,s.y,{format:As,type:Di,minFilter:qn,magFilter:qn,generateMipmaps:!1}),nt.map.texture.name=rt.name+".shadowMap",nt.map.depthTexture=new as(s.x,s.y,vi),nt.map.depthTexture.name=rt.name+".shadowMapDepth",nt.map.depthTexture.format=rs,nt.map.depthTexture.compareFunction=null,nt.map.depthTexture.minFilter=Dn,nt.map.depthTexture.magFilter=Dn}else rt.isPointLight?(nt.map=new Do(s.x),nt.map.depthTexture=new ro(s.x,Li)):(nt.map=new ei(s.x,s.y),nt.map.depthTexture=new as(s.x,s.y,Li)),nt.map.depthTexture.name=rt.name+".shadowMap",nt.map.depthTexture.format=rs,this.type===Gs?(nt.map.depthTexture.compareFunction=pt?Mh:vh,nt.map.depthTexture.minFilter=qn,nt.map.depthTexture.magFilter=qn):(nt.map.depthTexture.compareFunction=null,nt.map.depthTexture.minFilter=Dn,nt.map.depthTexture.magFilter=Dn);nt.camera.updateProjectionMatrix()}nt.map.isWebGLCubeRenderTarget!==!0&&(nt.map.width!==s.x||nt.map.height!==s.y)&&nt.map.setSize(s.x,s.y);let St=nt.map.isWebGLCubeRenderTarget?6:nt.getViewportCount();rt.isPointLight!==!0&&nt.updateMatrices(rt,C);let Ht=(nt.camera.layers.mask&4294967294)!==0?nt.camera.layers:C.layers;for(let ne=0;ne<St;ne++){let we=nt.getCamera(ne);if(rt.isPointLight){let mt=nt.camera,te=nt.matrix,ie=rt.distance||mt.far;ie!==mt.far&&(mt.far=ie,mt.updateProjectionMatrix()),Fo.setFromMatrixPosition(rt.matrixWorld),mt.position.copy(Fo),Uh.copy(mt.position),Uh.add(m_[ne]),mt.up.copy(g_[ne]),mt.lookAt(Uh),mt.updateMatrixWorld(),te.makeTranslation(-Fo.x,-Fo.y,-Fo.z),rf.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),nt._frustum.setFromProjectionMatrix(rf,mt.coordinateSystem,mt.reversedDepth)}if(nt.map.isWebGLCubeRenderTarget)i.setRenderTarget(nt.map,ne),i.clear();else{ne===0&&(i.setRenderTarget(nt.map),i.clear());let mt=nt.getViewport(ne);o.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),it.viewport(o)}n=nt.getFrustum(ne),b(x,C,we,rt,Ht,this.type)}nt.isPointLightShadow!==!0&&this.type===Ar&&M(nt,C),nt.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(k,F,Q)};function M(I,x){let C=t.update(A);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,u.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),I.mapPass===null?I.mapPass=new ei(s.x,s.y,{format:As,type:Di}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),d.uniforms.shadow_pass.value=I.map.depthTexture,d.uniforms.resolution.value.set(I.map.width,I.map.height),d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(x,null,C,d,A,null),u.uniforms.shadow_pass.value=I.mapPass.texture,u.uniforms.resolution.value.set(I.map.width,I.map.height),u.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(x,null,C,u,A,null)}function R(I,x,C,k){let F=null,Q=C.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(Q!==void 0)F=Q;else if(F=C.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let it=F.uuid,Y=x.uuid,ct=c[it];ct===void 0&&(ct={},c[it]=ct);let et=ct[Y];et===void 0&&(et=F.clone(),ct[Y]=et,x.addEventListener("dispose",D)),F=et}if(F.visible=x.visible,F.wireframe=x.wireframe,k===Ar?F.side=x.shadowSide!==null?x.shadowSide:x.side:F.side=x.shadowSide!==null?x.shadowSide:p[x.side],F.alphaMap=x.alphaMap,F.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,F.map=x.map,F.clipShadows=x.clipShadows,F.clippingPlanes=x.clippingPlanes,F.clipIntersection=x.clipIntersection,F.displacementMap=x.displacementMap,F.displacementScale=x.displacementScale,F.displacementBias=x.displacementBias,F.wireframeLinewidth=x.wireframeLinewidth,F.linewidth=x.linewidth,C.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let it=i.properties.get(F);it.light=C}return F}function b(I,x,C,k,F,Q){if(I.visible===!1)return;if(I.layers.test(F)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&Q===Ar)&&(!I.frustumCulled||I.intersectsFrustum(n))){I.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,I.matrixWorld);let ct=t.update(I),et=I.material;if(Array.isArray(et)){let rt=ct.groups;for(let nt=0,dt=rt.length;nt<dt;nt++){let pt=rt[nt],St=et[pt.materialIndex];if(St&&St.visible){let Ht=R(I,St,k,Q);I.onBeforeShadow(i,I,x,C,ct,Ht,pt),i.renderBufferDirect(C,null,ct,Ht,I,pt),I.onAfterShadow(i,I,x,C,ct,Ht,pt)}}}else if(et.visible){let rt=R(I,et,k,Q);I.onBeforeShadow(i,I,x,C,ct,rt,null),i.renderBufferDirect(C,null,ct,rt,I,null),I.onAfterShadow(i,I,x,C,ct,rt,null)}}let Y=I.children;for(let ct=0,et=Y.length;ct<et;ct++)b(Y[ct],x,C,k,F,Q)}function D(I){I.target.removeEventListener("dispose",D);for(let C in c){let k=c[C],F=I.target.uuid;F in k&&(k[F].dispose(),delete k[F])}}}function __(i,t){function e(){let H=!1,vt=new vn,Ct=null,lt=new vn(0,0,0,0);return{setMask:function(Yt){Ct!==Yt&&!H&&(i.colorMask(Yt,Yt,Yt,Yt),Ct=Yt)},setLocked:function(Yt){H=Yt},setClear:function(Yt,ee,Pe,zt,Xe){Xe===!0&&(Yt*=zt,ee*=zt,Pe*=zt),vt.set(Yt,ee,Pe,zt),lt.equals(vt)===!1&&(i.clearColor(Yt,ee,Pe,zt),lt.copy(vt))},reset:function(){H=!1,Ct=null,lt.set(-1,0,0,0)}}}function n(){let H=!1,vt=!1,Ct=null,lt=null,Yt=null;return{setReversed:function(ee){if(vt!==ee){let Pe=t.get("EXT_clip_control");ee?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),vt=ee;let zt=Yt;Yt=null,this.setClear(zt)}},getReversed:function(){return vt},setTest:function(ee){ee?kt(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(ee){Ct!==ee&&!H&&(i.depthMask(ee),Ct=ee)},setFunc:function(ee){if(vt&&(ee=Ad[ee]),lt!==ee){switch(ee){case _a:i.depthFunc(i.NEVER);break;case ya:i.depthFunc(i.ALWAYS);break;case va:i.depthFunc(i.LESS);break;case mr:i.depthFunc(i.LEQUAL);break;case Ma:i.depthFunc(i.EQUAL);break;case Sa:i.depthFunc(i.GEQUAL);break;case wa:i.depthFunc(i.GREATER);break;case ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=ee}},setLocked:function(ee){H=ee},setClear:function(ee){Yt!==ee&&(Yt=ee,vt&&(ee=1-ee),i.clearDepth(ee))},reset:function(){H=!1,Ct=null,lt=null,Yt=null,vt=!1}}}function s(){let H=!1,vt=null,Ct=null,lt=null,Yt=null,ee=null,Pe=null,zt=null,Xe=null;return{setTest:function(Me){H||(Me?kt(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(Me){vt!==Me&&!H&&(i.stencilMask(Me),vt=Me)},setFunc:function(Me,se,Je){(Ct!==Me||lt!==se||Yt!==Je)&&(i.stencilFunc(Me,se,Je),Ct=Me,lt=se,Yt=Je)},setOp:function(Me,se,Je){(ee!==Me||Pe!==se||zt!==Je)&&(i.stencilOp(Me,se,Je),ee=Me,Pe=se,zt=Je)},setLocked:function(Me){H=Me},setClear:function(Me){Xe!==Me&&(i.clearStencil(Me),Xe=Me)},reset:function(){H=!1,vt=null,Ct=null,lt=null,Yt=null,ee=null,Pe=null,zt=null,Xe=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,h={},p={},d={},u=new WeakMap,g=[],A=null,m=!1,f=null,M=null,R=null,b=null,D=null,I=null,x=null,C=new Ee(0,0,0),k=0,F=!1,Q=null,it=null,Y=null,ct=null,et=null,rt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),nt=!1,dt=0,pt=i.getParameter(i.VERSION);pt.indexOf("WebGL")!==-1?(dt=parseFloat(/^WebGL (\d)/.exec(pt)[1]),nt=dt>=1):pt.indexOf("OpenGL ES")!==-1&&(dt=parseFloat(/^OpenGL ES (\d)/.exec(pt)[1]),nt=dt>=2);let St=null,Ht={},ne=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),mt=new vn().fromArray(ne),te=new vn().fromArray(we);function ie(H,vt,Ct,lt){let Yt=new Uint8Array(4),ee=i.createTexture();i.bindTexture(H,ee),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<Ct;Pe++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,Yt):i.texImage2D(vt+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Yt);return ee}let me={};me[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),kt(i.DEPTH_TEST),o.setFunc(mr),jt(!1),ge(nh),kt(i.CULL_FACE),Pt(Vs);function kt(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function ae(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function Ge(H,vt){return H===i.FRAMEBUFFER?d[i.DRAW_FRAMEBUFFER]===vt&&d[i.READ_FRAMEBUFFER]===vt?!1:(i.bindFramebuffer(i.FRAMEBUFFER,vt),d[i.DRAW_FRAMEBUFFER]=vt,d[i.READ_FRAMEBUFFER]=vt,!0):d[H]===vt?!1:(i.bindFramebuffer(H,vt),d[H]=vt,!0)}function ve(H){return H===i.FRAMEBUFFER&&(H=i.DRAW_FRAMEBUFFER),d[H]||null}function fe(H,vt){let Ct=g,lt=!1;if(H){Ct=u.get(vt),Ct===void 0&&(Ct=[],u.set(vt,Ct));let Yt=H.textures;if(Ct.length!==Yt.length||Ct[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Pe=Yt.length;ee<Pe;ee++)Ct[ee]=i.COLOR_ATTACHMENT0+ee;Ct.length=Yt.length,lt=!0}}else Ct[0]!==i.BACK&&(Ct[0]=i.BACK,lt=!0);lt&&i.drawBuffers(Ct)}function Ke(H){return A!==H?(i.useProgram(H),A=H,!0):!1}let wt={[Hs]:i.FUNC_ADD,[Zu]:i.FUNC_SUBTRACT,[Ju]:i.FUNC_REVERSE_SUBTRACT};wt[$u]=i.MIN,wt[Ku]=i.MAX;let Gt={[Qu]:i.ZERO,[ju]:i.ONE,[td]:i.SRC_COLOR,[rh]:i.SRC_ALPHA,[od]:i.SRC_ALPHA_SATURATE,[sd]:i.DST_COLOR,[nd]:i.DST_ALPHA,[ed]:i.ONE_MINUS_SRC_COLOR,[oh]:i.ONE_MINUS_SRC_ALPHA,[rd]:i.ONE_MINUS_DST_COLOR,[id]:i.ONE_MINUS_DST_ALPHA,[ad]:i.CONSTANT_COLOR,[ld]:i.ONE_MINUS_CONSTANT_COLOR,[cd]:i.CONSTANT_ALPHA,[hd]:i.ONE_MINUS_CONSTANT_ALPHA};function Pt(H,vt,Ct,lt,Yt,ee,Pe,zt,Xe,Me){if(H===Vs){m===!0&&(ae(i.BLEND),m=!1);return}if(m===!1&&(kt(i.BLEND),m=!0),H!==Yu){if(H!==f||Me!==F){if((M!==Hs||D!==Hs)&&(i.blendEquation(i.FUNC_ADD),M=Hs,D=Hs),Me)switch(H){case Er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ri:i.blendFunc(i.ONE,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ze("WebGLState: Invalid blending: ",H);break}else switch(H){case Er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ih:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sh:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",H);break}R=null,b=null,I=null,x=null,C.set(0,0,0),k=0,f=H,F=Me}return}Yt=Yt||vt,ee=ee||Ct,Pe=Pe||lt,(vt!==M||Yt!==D)&&(i.blendEquationSeparate(wt[vt],wt[Yt]),M=vt,D=Yt),(Ct!==R||lt!==b||ee!==I||Pe!==x)&&(i.blendFuncSeparate(Gt[Ct],Gt[lt],Gt[ee],Gt[Pe]),R=Ct,b=lt,I=ee,x=Pe),(zt.equals(C)===!1||Xe!==k)&&(i.blendColor(zt.r,zt.g,zt.b,Xe),C.copy(zt),k=Xe),f=H,F=!1}function ue(H,vt){H.side===en?ae(i.CULL_FACE):kt(i.CULL_FACE);let Ct=H.side===Un;vt&&(Ct=!Ct),jt(Ct),H.blending===Er&&H.transparent===!1?Pt(Vs):Pt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let lt=H.stencilWrite;a.setTest(lt),lt&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Fe(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?kt(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function jt(H){Q!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),Q=H)}function ge(H){H!==Wu?(kt(i.CULL_FACE),H!==it&&(H===nh?i.cullFace(i.BACK):H===Xu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),it=H}function de(H){H!==Y&&(nt&&i.lineWidth(H),Y=H)}function Fe(H,vt,Ct){H?(kt(i.POLYGON_OFFSET_FILL),(ct!==vt||et!==Ct)&&(ct=vt,et=Ct,o.getReversed()&&(vt=-vt,Ct=-Ct),i.polygonOffset(vt,Ct))):ae(i.POLYGON_OFFSET_FILL)}function Ne(H){H?kt(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function yt(H){H===void 0&&(H=i.TEXTURE0+rt-1),St!==H&&(i.activeTexture(H),St=H)}function K(H,vt,Ct){Ct===void 0&&(St===null?Ct=i.TEXTURE0+rt-1:Ct=St);let lt=Ht[Ct];lt===void 0&&(lt={type:void 0,texture:void 0},Ht[Ct]=lt),(lt.type!==H||lt.texture!==vt)&&(St!==Ct&&(i.activeTexture(Ct),St=Ct),i.bindTexture(H,vt||me[H]),lt.type=H,lt.texture=vt)}function tn(){let H=Ht[St];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Be(){try{i.compressedTexImage2D(...arguments)}catch(H){ze("WebGLState:",H)}}function ln(){try{i.compressedTexImage3D(...arguments)}catch(H){ze("WebGLState:",H)}}function Zt(){try{i.texSubImage2D(...arguments)}catch(H){ze("WebGLState:",H)}}function cn(){try{i.texSubImage3D(...arguments)}catch(H){ze("WebGLState:",H)}}function be(){try{i.compressedTexSubImage2D(...arguments)}catch(H){ze("WebGLState:",H)}}function Ie(){try{i.compressedTexSubImage3D(...arguments)}catch(H){ze("WebGLState:",H)}}function U(){try{i.texStorage2D(...arguments)}catch(H){ze("WebGLState:",H)}}function v(){try{i.texStorage3D(...arguments)}catch(H){ze("WebGLState:",H)}}function ht(){try{i.texImage2D(...arguments)}catch(H){ze("WebGLState:",H)}}function bt(){try{i.texImage3D(...arguments)}catch(H){ze("WebGLState:",H)}}function Tt(H){return p[H]!==void 0?p[H]:i.getParameter(H)}function $t(H,vt){p[H]!==vt&&(i.pixelStorei(H,vt),p[H]=vt)}function qt(H){mt.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),mt.copy(H))}function Mt(H){te.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),te.copy(H))}function ut(H,vt){let Ct=c.get(vt);Ct===void 0&&(Ct=new WeakMap,c.set(vt,Ct));let lt=Ct.get(H);lt===void 0&&(lt=i.getUniformBlockIndex(vt,H.name),i.uniformBlockBinding(vt,lt,lt),Ct.set(H,lt))}function Jt(H,vt,Ct){let Yt=c.get(vt).get(H);l[Yt]!==Ct&&(i.bindBufferBase(i.UNIFORM_BUFFER,Yt,Ct),l[Yt]=Ct)}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},St=null,Ht={},d={},l={},u=new WeakMap,g=[],A=null,m=!1,f=null,M=null,R=null,b=null,D=null,I=null,x=null,C=new Ee(0,0,0),k=0,F=!1,Q=null,it=null,Y=null,ct=null,et=null,mt.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:kt,disable:ae,bindFramebuffer:Ge,getBoundFramebuffer:ve,drawBuffers:fe,useProgram:Ke,setBlending:Pt,setMaterial:ue,setFlipSided:jt,setCullFace:ge,setLineWidth:de,setPolygonOffset:Fe,setScissorTest:Ne,activeTexture:yt,bindTexture:K,unbindTexture:tn,compressedTexImage2D:Be,compressedTexImage3D:ln,texImage2D:ht,texImage3D:bt,pixelStorei:$t,getParameter:Tt,updateUBOMapping:ut,uniformBlockBinding:Jt,texStorage2D:U,texStorage3D:v,texSubImage2D:Zt,texSubImage3D:cn,compressedTexSubImage2D:be,compressedTexSubImage3D:Ie,scissor:qt,viewport:Mt,reset:re}}function y_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap,p=new Set,d,u=new WeakMap,g=new Set,A=new FinalizationRegistry(U=>g.delete(U)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(U,v){return m?new OffscreenCanvas(U,v):Zr("canvas")}function M(U,v,ht){let bt=1,Tt=Ie(U);if((Tt.width>ht||Tt.height>ht)&&(bt=ht/Math.max(Tt.width,Tt.height)),bt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let $t=Math.floor(bt*Tt.width),qt=Math.floor(bt*Tt.height);d===void 0&&(d=f($t,qt));let Mt=v?f($t,qt):d;return Mt.width=$t,Mt.height=qt,Mt.getContext("2d").drawImage(U,0,0,$t,qt),Le("WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+$t+"x"+qt+")."),Mt}else return"data"in U&&Le("WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),U;return U}function R(U){return U.generateMipmaps}function b(U){i.generateMipmap(U)}function D(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function I(U,v,ht,bt,Tt,$t=!1){if(U!==null){if(i[U]!==void 0)return i[U];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let qt;bt&&(qt=t.get("EXT_texture_norm16"),qt||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Mt=v;if(v===i.RED&&(ht===i.FLOAT&&(Mt=i.R32F),ht===i.HALF_FLOAT&&(Mt=i.R16F),ht===i.UNSIGNED_BYTE&&(Mt=i.R8),ht===i.UNSIGNED_SHORT&&qt&&(Mt=qt.R16_EXT),ht===i.SHORT&&qt&&(Mt=qt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(ht===i.UNSIGNED_BYTE&&(Mt=i.R8UI),ht===i.UNSIGNED_SHORT&&(Mt=i.R16UI),ht===i.UNSIGNED_INT&&(Mt=i.R32UI),ht===i.BYTE&&(Mt=i.R8I),ht===i.SHORT&&(Mt=i.R16I),ht===i.INT&&(Mt=i.R32I)),v===i.RG&&(ht===i.FLOAT&&(Mt=i.RG32F),ht===i.HALF_FLOAT&&(Mt=i.RG16F),ht===i.UNSIGNED_BYTE&&(Mt=i.RG8),ht===i.UNSIGNED_SHORT&&qt&&(Mt=qt.RG16_EXT),ht===i.SHORT&&qt&&(Mt=qt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(ht===i.UNSIGNED_BYTE&&(Mt=i.RG8UI),ht===i.UNSIGNED_SHORT&&(Mt=i.RG16UI),ht===i.UNSIGNED_INT&&(Mt=i.RG32UI),ht===i.BYTE&&(Mt=i.RG8I),ht===i.SHORT&&(Mt=i.RG16I),ht===i.INT&&(Mt=i.RG32I)),v===i.RGB_INTEGER&&(ht===i.UNSIGNED_BYTE&&(Mt=i.RGB8UI),ht===i.UNSIGNED_SHORT&&(Mt=i.RGB16UI),ht===i.UNSIGNED_INT&&(Mt=i.RGB32UI),ht===i.BYTE&&(Mt=i.RGB8I),ht===i.SHORT&&(Mt=i.RGB16I),ht===i.INT&&(Mt=i.RGB32I)),v===i.RGBA_INTEGER&&(ht===i.UNSIGNED_BYTE&&(Mt=i.RGBA8UI),ht===i.UNSIGNED_SHORT&&(Mt=i.RGBA16UI),ht===i.UNSIGNED_INT&&(Mt=i.RGBA32UI),ht===i.BYTE&&(Mt=i.RGBA8I),ht===i.SHORT&&(Mt=i.RGBA16I),ht===i.INT&&(Mt=i.RGBA32I)),v===i.RGB&&(ht===i.UNSIGNED_SHORT&&qt&&(Mt=qt.RGB16_EXT),ht===i.SHORT&&qt&&(Mt=qt.RGB16_SNORM_EXT),ht===i.UNSIGNED_INT_5_9_9_9_REV&&(Mt=i.RGB9_E5),ht===i.UNSIGNED_INT_10F_11F_11F_REV&&(Mt=i.R11F_G11F_B10F)),v===i.RGBA){let ut=$t?Yr:on.getTransfer(Tt);ht===i.FLOAT&&(Mt=i.RGBA32F),ht===i.HALF_FLOAT&&(Mt=i.RGBA16F),ht===i.UNSIGNED_BYTE&&(Mt=ut===pn?i.SRGB8_ALPHA8:i.RGBA8),ht===i.UNSIGNED_SHORT&&qt&&(Mt=qt.RGBA16_EXT),ht===i.SHORT&&qt&&(Mt=qt.RGBA16_SNORM_EXT),ht===i.UNSIGNED_SHORT_4_4_4_4&&(Mt=i.RGBA4),ht===i.UNSIGNED_SHORT_5_5_5_1&&(Mt=i.RGB5_A1)}return(Mt===i.R16F||Mt===i.R32F||Mt===i.RG16F||Mt===i.RG32F||Mt===i.RGBA16F||Mt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Mt}function x(U,v){let ht;return U?v===null||v===Li||v===Xs?ht=i.DEPTH24_STENCIL8:v===vi?ht=i.DEPTH32F_STENCIL8:v===Cr&&(ht=i.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Li||v===Xs?ht=i.DEPTH_COMPONENT24:v===vi?ht=i.DEPTH_COMPONENT32F:v===Cr&&(ht=i.DEPTH_COMPONENT16),ht}function C(U,v){return R(U)===!0||U.isFramebufferTexture&&U.minFilter!==Dn&&U.minFilter!==qn?Math.log2(Math.max(v.width,v.height))+1:U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?v.mipmaps.length:1}function k(U){let v=new WeakRef(U);n.get(U).__ref=v,g.add(v),A.register(U,v,v)}function F(U){let v=n.get(U).__ref;v!==void 0&&(g.delete(v),A.unregister(v))}function Q(U){Y(U.target)}function it(U){ct(U.target)}function Y(U){U.removeEventListener("dispose",Q),F(U),rt(U),U.isVideoTexture&&h.delete(U),U.isHTMLTexture&&p.delete(U)}function ct(U){U.removeEventListener("dispose",it),F(U),dt(U)}function et(){for(let U of g){let v=U.deref();v!==void 0&&(v.isRenderTarget===!0?ct(v):Y(v))}g.clear(),p.clear()}function rt(U){let v=n.get(U);if(v.__webglInit===void 0)return;let ht=U.source,bt=u.get(ht);if(bt){let Tt=bt[v.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&nt(U),Object.keys(bt).length===0&&u.delete(ht)}n.remove(U)}function nt(U){let v=n.get(U);i.deleteTexture(v.__webglTexture);let ht=U.source,bt=u.get(ht);delete bt[v.__cacheKey],o.memory.textures--}function dt(U){let v=n.get(U);v.__depthDisposeCallback&&v.__depthDisposeCallback();let ht=U.depthTexture;if(ht&&ht.renderTarget===U&&Y(ht),U.isWebGLCubeRenderTarget)for(let Tt=0;Tt<6;Tt++){if(Array.isArray(v.__webglFramebuffer[Tt]))for(let $t=0;$t<v.__webglFramebuffer[Tt].length;$t++)i.deleteFramebuffer(v.__webglFramebuffer[Tt][$t]);else i.deleteFramebuffer(v.__webglFramebuffer[Tt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Tt])}else{if(Array.isArray(v.__webglFramebuffer))for(let Tt=0;Tt<v.__webglFramebuffer.length;Tt++)i.deleteFramebuffer(v.__webglFramebuffer[Tt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Tt=0;Tt<v.__webglColorRenderbuffer.length;Tt++)v.__webglColorRenderbuffer[Tt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Tt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let bt=U.textures;for(let Tt=0,$t=bt.length;Tt<$t;Tt++){let qt=n.get(bt[Tt]);qt.__webglTexture&&(i.deleteTexture(qt.__webglTexture),o.memory.textures--),n.remove(bt[Tt])}n.remove(U)}let pt=0;function St(){pt=0}function Ht(){return pt}function ne(U){pt=U}function we(){let U=pt;return U>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),pt+=1,U}function mt(U){let v=[];return v.push(U.wrapS),v.push(U.wrapT),v.push(U.wrapR||0),v.push(U.magFilter),v.push(U.minFilter),v.push(U.anisotropy),v.push(U.internalFormat),v.push(U.format),v.push(U.type),v.push(U.generateMipmaps),v.push(U.mipmapsAutoUpdate),v.push(U.premultiplyAlpha),v.push(U.flipY),v.push(U.unpackAlignment),v.push(U.colorSpace),v.join()}function te(U,v){let ht=n.get(U);if(U.isVideoTexture&&cn(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&ht.__version!==U.version){let bt=U.image;if(bt===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(bt.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(ht,U,v);return}}else U.isExternalTexture&&(ht.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,ht.__webglTexture,i.TEXTURE0+v)}function ie(U,v){let ht=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ht.__version!==U.version){Pt(ht,U,v);return}else U.isExternalTexture&&(ht.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,ht.__webglTexture,i.TEXTURE0+v)}function me(U,v){let ht=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ht.__version!==U.version){Pt(ht,U,v);return}e.bindTexture(i.TEXTURE_3D,ht.__webglTexture,i.TEXTURE0+v)}function kt(U,v){let ht=n.get(U);if(U.version>0&&ht.__version!==U.version){ue(ht,U,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture,i.TEXTURE0+v)}let ae={[gr]:i.REPEAT,[Gi]:i.CLAMP_TO_EDGE,[Aa]:i.MIRRORED_REPEAT},Ge={[Dn]:i.NEAREST,[fd]:i.NEAREST_MIPMAP_NEAREST,[bo]:i.NEAREST_MIPMAP_LINEAR,[qn]:i.LINEAR,[ol]:i.LINEAR_MIPMAP_NEAREST,[cs]:i.LINEAR_MIPMAP_LINEAR},ve={[xd]:i.NEVER,[Sh]:i.ALWAYS,[_d]:i.LESS,[vh]:i.LEQUAL,[yd]:i.EQUAL,[Mh]:i.GEQUAL,[vd]:i.GREATER,[Md]:i.NOTEQUAL};function fe(U,v){if(v.type===vi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===qn||v.magFilter===ol||v.magFilter===bo||v.magFilter===cs||v.minFilter===qn||v.minFilter===ol||v.minFilter===bo||v.minFilter===cs)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,ae[v.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,ae[v.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,ae[v.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Ge[v.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Ge[v.minFilter]),v.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,ve[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Dn||v.minFilter!==bo&&v.minFilter!==cs||v.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let ht=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ke(U,v){let ht=!1;U.__webglInit===void 0&&(U.__webglInit=!0,v.addEventListener("dispose",Q),k(v));let bt=v.source,Tt=u.get(bt);Tt===void 0&&(Tt={},u.set(bt,Tt));let $t=mt(v);if($t!==U.__cacheKey){Tt[$t]===void 0&&(Tt[$t]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,ht=!0),Tt[$t].usedTimes++;let qt=Tt[U.__cacheKey];qt!==void 0&&(Tt[U.__cacheKey].usedTimes--,qt.usedTimes===0&&nt(v)),U.__cacheKey=$t,U.__webglTexture=Tt[$t].texture}return ht}function wt(U,v,ht){return Math.floor(Math.floor(U/ht)/v)}function Gt(U,v,ht,bt){let $t=U.updateRanges;if($t.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,ht,bt,v.data);else{$t.sort((re,H)=>re.start-H.start);let qt=0;for(let re=1;re<$t.length;re++){let H=$t[qt],vt=$t[re],Ct=H.start+H.count,lt=wt(vt.start,v.width,4),Yt=wt(H.start,v.width,4);vt.start<=Ct+1&&lt===Yt&&wt(vt.start+vt.count-1,v.width,4)===lt?H.count=Math.max(H.count,vt.start+vt.count-H.start):(++qt,$t[qt]=vt)}$t.length=qt+1;let Mt=e.getParameter(i.UNPACK_ROW_LENGTH),ut=e.getParameter(i.UNPACK_SKIP_PIXELS),Jt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let re=0,H=$t.length;re<H;re++){let vt=$t[re],Ct=Math.floor(vt.start/4),lt=Math.ceil(vt.count/4),Yt=Ct%v.width,ee=Math.floor(Ct/v.width),Pe=lt,zt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Yt),e.pixelStorei(i.UNPACK_SKIP_ROWS,ee),e.texSubImage2D(i.TEXTURE_2D,0,Yt,ee,Pe,zt,ht,bt,v.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Mt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,Jt)}}function Pt(U,v,ht){let bt=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(bt=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(bt=i.TEXTURE_3D);let Tt=Ke(U,v),$t=v.source;e.bindTexture(bt,U.__webglTexture,i.TEXTURE0+ht);let qt=n.get($t);if($t.version!==qt.__version||Tt===!0){if(e.activeTexture(i.TEXTURE0+ht),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let zt=on.getPrimaries(on.workingColorSpace),Xe=v.colorSpace===us?null:on.getPrimaries(v.colorSpace),Me=v.colorSpace===us||zt===Xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let ut=M(v.image,!1,s.maxTextureSize);ut=be(v,ut);let Jt=r.convert(v.format,v.colorSpace),re=r.convert(v.type),H=I(v.internalFormat,Jt,re,v.normalized,v.colorSpace,v.isVideoTexture);fe(bt,v);let vt,Ct=v.mipmaps,lt=v.isVideoTexture!==!0,Yt=qt.__version===void 0||Tt===!0,ee=$t.dataReady,Pe=C(v,ut);if(v.isDepthTexture)H=x(v.format===hs,v.type),Yt&&(lt?e.texStorage2D(i.TEXTURE_2D,1,H,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,H,ut.width,ut.height,0,Jt,re,null));else if(v.isDataTexture)if(Ct.length>0){lt&&Yt&&e.texStorage2D(i.TEXTURE_2D,Pe,H,Ct[0].width,Ct[0].height);for(let zt=0,Xe=Ct.length;zt<Xe;zt++)vt=Ct[zt],lt?ee&&e.texSubImage2D(i.TEXTURE_2D,zt,0,0,vt.width,vt.height,Jt,re,vt.data):e.texImage2D(i.TEXTURE_2D,zt,H,vt.width,vt.height,0,Jt,re,vt.data);v.generateMipmaps=!1}else lt?(Yt&&e.texStorage2D(i.TEXTURE_2D,Pe,H,ut.width,ut.height),ee&&Gt(v,ut,Jt,re)):e.texImage2D(i.TEXTURE_2D,0,H,ut.width,ut.height,0,Jt,re,ut.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){lt&&Yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,H,Ct[0].width,Ct[0].height,ut.depth);for(let zt=0,Xe=Ct.length;zt<Xe;zt++)if(vt=Ct[zt],v.format!==Ni)if(Jt!==null)if(lt){if(ee)if(v.layerUpdates.size>0){let Me=Rh(vt.width,vt.height,v.format,v.type);for(let se of v.layerUpdates){let Je=vt.data.subarray(se*Me/vt.data.BYTES_PER_ELEMENT,(se+1)*Me/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,zt,0,0,se,vt.width,vt.height,1,Jt,Je)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,zt,0,0,0,vt.width,vt.height,ut.depth,Jt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,zt,H,vt.width,vt.height,ut.depth,0,vt.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?ee&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,zt,0,0,0,vt.width,vt.height,ut.depth,Jt,re,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,zt,H,vt.width,vt.height,ut.depth,0,Jt,re,vt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{lt&&Yt&&e.texStorage2D(i.TEXTURE_2D,Pe,H,Ct[0].width,Ct[0].height);for(let zt=0,Xe=Ct.length;zt<Xe;zt++)vt=Ct[zt],v.format!==Ni?Jt!==null?lt?ee&&e.compressedTexSubImage2D(i.TEXTURE_2D,zt,0,0,vt.width,vt.height,Jt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,zt,H,vt.width,vt.height,0,vt.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?ee&&e.texSubImage2D(i.TEXTURE_2D,zt,0,0,vt.width,vt.height,Jt,re,vt.data):e.texImage2D(i.TEXTURE_2D,zt,H,vt.width,vt.height,0,Jt,re,vt.data)}else if(v.isDataArrayTexture)if(lt){if(Yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,H,ut.width,ut.height,ut.depth),ee)if(v.layerUpdates.size>0){let zt=Rh(ut.width,ut.height,v.format,v.type);for(let Xe of v.layerUpdates){let Me=ut.data.subarray(Xe*zt/ut.data.BYTES_PER_ELEMENT,(Xe+1)*zt/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Xe,ut.width,ut.height,1,Jt,re,Me)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Jt,re,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,H,ut.width,ut.height,ut.depth,0,Jt,re,ut.data);else if(v.isData3DTexture)lt?(Yt&&e.texStorage3D(i.TEXTURE_3D,Pe,H,ut.width,ut.height,ut.depth),ee&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Jt,re,ut.data)):e.texImage3D(i.TEXTURE_3D,0,H,ut.width,ut.height,ut.depth,0,Jt,re,ut.data);else if(v.isFramebufferTexture){if(Yt)if(lt)e.texStorage2D(i.TEXTURE_2D,Pe,H,ut.width,ut.height);else{let zt=ut.width,Xe=ut.height;for(let Me=0;Me<Pe;Me++)e.texImage2D(i.TEXTURE_2D,Me,H,zt,Xe,0,Jt,re,null),zt>>=1,Xe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let zt=i.canvas;if(zt.hasAttribute("layoutsubtree")||zt.setAttribute("layoutsubtree","true"),ut.parentNode!==zt){zt.appendChild(ut),p.add(v),zt.onpaint=Xe=>{let Me=Xe.changedElements;for(let se of p)Me.includes(se.image)&&(se.needsUpdate=!0)},zt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ut);else{let Me=i.RGBA,se=i.RGBA,Je=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Me,se,Je,ut)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ct.length>0){if(lt&&Yt){let zt=Ie(Ct[0]);e.texStorage2D(i.TEXTURE_2D,Pe,H,zt.width,zt.height)}for(let zt=0,Xe=Ct.length;zt<Xe;zt++)vt=Ct[zt],lt?ee&&e.texSubImage2D(i.TEXTURE_2D,zt,0,0,Jt,re,vt):e.texImage2D(i.TEXTURE_2D,zt,H,Jt,re,vt);v.generateMipmaps=!1}else if(lt){if(Yt){let zt=Ie(ut);e.texStorage2D(i.TEXTURE_2D,Pe,H,zt.width,zt.height)}ee&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Jt,re,ut)}else e.texImage2D(i.TEXTURE_2D,0,H,Jt,re,ut);R(v)&&v.mipmapsAutoUpdate===!0&&b(bt),qt.__version=$t.version,v.onUpdate&&v.onUpdate(v)}U.__version=v.version}function ue(U,v,ht){if(v.image.length!==6)return;let bt=Ke(U,v),Tt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+ht);let $t=n.get(Tt);if(Tt.version!==$t.__version||bt===!0){e.activeTexture(i.TEXTURE0+ht);let qt=on.getPrimaries(on.workingColorSpace),Mt=v.colorSpace===us?null:on.getPrimaries(v.colorSpace),ut=v.colorSpace===us||qt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Jt=v.isCompressedTexture||v.image[0].isCompressedTexture,re=v.image[0]&&v.image[0].isDataTexture,H=[];for(let se=0;se<6;se++)!Jt&&!re?H[se]=M(v.image[se],!0,s.maxCubemapSize):H[se]=re?v.image[se].image:v.image[se],H[se]=be(v,H[se]);let vt=H[0],Ct=r.convert(v.format,v.colorSpace),lt=r.convert(v.type),Yt=I(v.internalFormat,Ct,lt,v.normalized,v.colorSpace),ee=v.isVideoTexture!==!0,Pe=$t.__version===void 0||bt===!0,zt=Tt.dataReady,Xe=C(v,vt);fe(i.TEXTURE_CUBE_MAP,v);let Me;if(v.isDepthTexture){if(Yt=x(v.format===hs,v.type),Pe)if(ee)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Yt,vt.width,vt.height);else for(let se=0;se<6;se++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Yt,vt.width,vt.height,0,Ct,lt,null)}else if(Jt){ee&&Pe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,Yt,vt.width,vt.height);for(let se=0;se<6;se++){Me=H[se].mipmaps;for(let Je=0;Je<Me.length;Je++){let gn=Me[Je];v.format!==Ni?Ct!==null?ee?zt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Je,0,0,gn.width,gn.height,Ct,gn.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Je,Yt,gn.width,gn.height,0,gn.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?zt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Je,0,0,gn.width,gn.height,Ct,lt,gn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Je,Yt,gn.width,gn.height,0,Ct,lt,gn.data)}}}else{if(Me=v.mipmaps,ee&&Pe){Me.length>0&&Xe++;let se=Ie(H[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,Yt,se.width,se.height)}for(let se=0;se<6;se++)if(re){ee?zt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,H[se].width,H[se].height,Ct,lt,H[se].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Yt,H[se].width,H[se].height,0,Ct,lt,H[se].data);for(let Je=0;Je<Me.length;Je++){let ai=Me[Je].image[se].image;ee?zt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Je+1,0,0,ai.width,ai.height,Ct,lt,ai.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Je+1,Yt,ai.width,ai.height,0,Ct,lt,ai.data)}}else{ee?zt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ct,lt,H[se]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Yt,Ct,lt,H[se]);for(let Je=0;Je<Me.length;Je++){let gn=Me[Je];ee?zt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Je+1,0,0,Ct,lt,gn.image[se]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Je+1,Yt,Ct,lt,gn.image[se])}}}R(v)&&v.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),$t.__version=Tt.version,v.onUpdate&&v.onUpdate(v)}U.__version=v.version}function jt(U,v,ht,bt,Tt,$t){let qt=r.convert(ht.format,ht.colorSpace),Mt=r.convert(ht.type),ut=I(ht.internalFormat,qt,Mt,ht.normalized,ht.colorSpace),Jt=n.get(v),re=n.get(ht);if(re.__renderTarget=v,!Jt.__hasExternalTextures){let H=Math.max(1,v.width>>$t),vt=Math.max(1,v.height>>$t);Tt===i.TEXTURE_3D||Tt===i.TEXTURE_2D_ARRAY?e.texImage3D(Tt,$t,ut,H,vt,v.depth,0,qt,Mt,null):e.texImage2D(Tt,$t,ut,H,vt,0,qt,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),Zt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,bt,Tt,re.__webglTexture,0,ln(v)):(Tt===i.TEXTURE_2D||Tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,bt,Tt,re.__webglTexture,$t),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(U,v,ht){if(i.bindRenderbuffer(i.RENDERBUFFER,U),v.depthBuffer){let bt=v.depthTexture,Tt=bt&&bt.isDepthTexture?bt.type:null,$t=x(v.stencilBuffer,Tt),qt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Zt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ln(v),$t,v.width,v.height):ht?i.renderbufferStorageMultisample(i.RENDERBUFFER,ln(v),$t,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,$t,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,qt,i.RENDERBUFFER,U)}else{let bt=v.textures;for(let Tt=0;Tt<bt.length;Tt++){let $t=bt[Tt],qt=r.convert($t.format,$t.colorSpace),Mt=r.convert($t.type),ut=I($t.internalFormat,qt,Mt,$t.normalized,$t.colorSpace);Zt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ln(v),ut,v.width,v.height):ht?i.renderbufferStorageMultisample(i.RENDERBUFFER,ln(v),ut,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ut,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(U,v,ht){let bt=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Tt=n.get(v.depthTexture);Tt.__renderTarget=v;let $t=bt?v.depthTexture.image[0]:v.depthTexture.image;(!Tt.__webglTexture||$t.width!==v.width||$t.height!==v.height)&&($t.width=v.width,$t.height=v.height,v.depthTexture.needsUpdate=!0),bt?kt(v.depthTexture,0):te(v.depthTexture,0);let qt=Tt.__webglTexture,Mt=ln(v),ut=bt?i.TEXTURE_CUBE_MAP_POSITIVE_X+ht:i.TEXTURE_2D,Jt=v.depthTexture.format===hs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===rs)Zt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Jt,ut,qt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,Jt,ut,qt,0);else if(v.depthTexture.format===hs)Zt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Jt,ut,qt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,Jt,ut,qt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Fe(U){let v=n.get(U),ht=U.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==U.depthTexture){let bt=U.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),bt){let Tt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,bt.removeEventListener("dispose",Tt)};bt.addEventListener("dispose",Tt),v.__depthDisposeCallback=Tt}v.__boundDepthTexture=bt}if(U.depthTexture&&!v.__autoAllocateDepthBuffer)if(ht)for(let bt=0;bt<6;bt++)de(v.__webglFramebuffer[bt],U,bt);else U.texture.mipmaps.length>0?de(v.__webglFramebuffer[0],U,0):de(v.__webglFramebuffer,U,0);else if(ht){v.__webglDepthbuffer=[];for(let bt=0;bt<6;bt++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[bt]),v.__webglDepthbuffer[bt]===void 0)v.__webglDepthbuffer[bt]=i.createRenderbuffer(),ge(v.__webglDepthbuffer[bt],U,!1);else{let Tt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$t=v.__webglDepthbuffer[bt];i.bindRenderbuffer(i.RENDERBUFFER,$t),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,$t)}}else if(U.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ge(v.__webglDepthbuffer,U,!1);else{let Tt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$t=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$t),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,$t)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(U,v,ht){let bt=n.get(U);v!==void 0&&jt(bt.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ht!==void 0&&Fe(U)}function yt(U){let v=U.texture,ht=n.get(U),bt=n.get(v);U.addEventListener("dispose",it),k(U);let Tt=U.textures,$t=U.isWebGLCubeRenderTarget===!0,qt=Tt.length>1;if(qt||(bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture()),bt.__version=v.version,o.memory.textures++),$t){ht.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(v.mipmaps.length>0){ht.__webglFramebuffer[Mt]=[];for(let ut=0;ut<v.mipmaps.length;ut++)ht.__webglFramebuffer[Mt][ut]=i.createFramebuffer()}else ht.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(v.mipmaps.length>0){ht.__webglFramebuffer=[];for(let Mt=0;Mt<v.mipmaps.length;Mt++)ht.__webglFramebuffer[Mt]=i.createFramebuffer()}else ht.__webglFramebuffer=i.createFramebuffer();if(qt)for(let Mt=0,ut=Tt.length;Mt<ut;Mt++){let Jt=n.get(Tt[Mt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&Zt(U)===!1){ht.__webglMultisampledFramebuffer=i.createFramebuffer(),ht.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer);for(let Mt=0;Mt<Tt.length;Mt++){let ut=Tt[Mt];ht.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ht.__webglColorRenderbuffer[Mt]);let Jt=r.convert(ut.format,ut.colorSpace),re=r.convert(ut.type),H=I(ut.internalFormat,Jt,re,ut.normalized,ut.colorSpace,U.isXRRenderTarget===!0),vt=ln(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,H,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,ht.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(ht.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(ht.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($t){e.bindTexture(i.TEXTURE_CUBE_MAP,bt.__webglTexture),fe(i.TEXTURE_CUBE_MAP,v);for(let Mt=0;Mt<6;Mt++)if(v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)jt(ht.__webglFramebuffer[Mt][ut],U,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,ut);else jt(ht.__webglFramebuffer[Mt],U,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);R(v)?b(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(qt){for(let Mt=0,ut=Tt.length;Mt<ut;Mt++){let Jt=Tt[Mt],re=n.get(Jt),H=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(H=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(H,re.__webglTexture),fe(H,Jt),jt(ht.__webglFramebuffer,U,Jt,i.COLOR_ATTACHMENT0+Mt,H,0),R(Jt)&&b(H)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Mt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,bt.__webglTexture),fe(Mt,v),v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)jt(ht.__webglFramebuffer[ut],U,v,i.COLOR_ATTACHMENT0,Mt,ut);else jt(ht.__webglFramebuffer,U,v,i.COLOR_ATTACHMENT0,Mt,0);R(v)?b(Mt):v.mipmaps.length>0&&i.texParameteri(Mt,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}U.depthBuffer&&Fe(U)}function K(U){let v=U.textures;for(let ht=0,bt=v.length;ht<bt;ht++){let Tt=v[ht];if(R(Tt)&&Tt.mipmapsAutoUpdate===!0){let $t=D(U),qt=n.get(Tt).__webglTexture;e.bindTexture($t,qt),b($t),e.unbindTexture()}}}let tn=[];function Be(U){if(U.samples>0){if(Zt(U)===!1){let v=U.textures,ht=U.width,bt=U.height,Tt=i.COLOR_BUFFER_BIT,$t=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,qt=n.get(U),Mt=v.length>1;if(Mt)for(let Jt=0;Jt<v.length;Jt++)e.bindFramebuffer(i.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Jt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,qt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Jt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer),U.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Jt=0;Jt<v.length;Jt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Tt|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Tt|=i.STENCIL_BUFFER_BIT)),Mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,qt.__webglColorRenderbuffer[Jt]);let re=n.get(v[Jt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,ht,bt,0,0,ht,bt,Tt,i.NEAREST),l===!0&&(tn.length=0,tn.push(i.COLOR_ATTACHMENT0+Jt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&tn.push($t),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let Jt=0;Jt<v.length;Jt++){e.bindFramebuffer(i.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Jt,i.RENDERBUFFER,qt.__webglColorRenderbuffer[Jt]);let re=n.get(v[Jt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,qt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Jt,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){let v=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ln(U){return Math.min(s.maxSamples,U.samples)}function Zt(U){let v=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function cn(U){let v=o.render.frame;h.get(U)!==v&&(h.set(U,v),U.update())}function be(U,v){let ht=U.colorSpace,bt=U.format,Tt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ht!==qr&&ht!==us&&(on.getTransfer(ht)===pn?(bt!==Ni||Tt!==Kn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",ht)),v}function Ie(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=we,this.resetTextureUnits=St,this.getTextureUnits=Ht,this.setTextureUnits=ne,this.setTexture2D=te,this.setTexture2DArray=ie,this.setTexture3D=me,this.setTextureCube=kt,this.rebindTextures=Ne,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=jt,this.useMultisampledRTT=Zt,this.dispose=et}function v_(i,t){function e(n,s=us){let r,o=on.getTransfer(s);if(n===Kn)return i.UNSIGNED_BYTE;if(n===ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ph)return i.BYTE;if(n===mh)return i.SHORT;if(n===Cr)return i.UNSIGNED_SHORT;if(n===al)return i.INT;if(n===Li)return i.UNSIGNED_INT;if(n===vi)return i.FLOAT;if(n===Di)return i.HALF_FLOAT;if(n===_h)return i.ALPHA;if(n===yh)return i.RGB;if(n===Ni)return i.RGBA;if(n===rs)return i.DEPTH_COMPONENT;if(n===hs)return i.DEPTH_STENCIL;if(n===hl)return i.RED;if(n===ul)return i.RED_INTEGER;if(n===As)return i.RG;if(n===dl)return i.RG_INTEGER;if(n===fl)return i.RGBA_INTEGER;if(n===Ao||n===Eo||n===To||n===Co)if(o===pn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pl||n===ml||n===gl||n===xl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_l||n===yl||n===vl||n===Ml||n===Sl||n===Ro||n===wl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_l||n===yl)return o===pn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vl)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ml)return r.COMPRESSED_R11_EAC;if(n===Sl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ro)return r.COMPRESSED_RG11_EAC;if(n===wl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===bl||n===Al||n===El||n===Tl||n===Cl||n===Rl||n===Pl||n===Il||n===Fl||n===Ll||n===Dl||n===Nl||n===Ul||n===zl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bl)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Al)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===El)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tl)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cl)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rl)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pl)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Il)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fl)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ll)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dl)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nl)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ul)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zl)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ol||n===Bl||n===kl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ol)return o===pn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gl||n===Vl||n===Po||n===Hl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var M_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S_=`
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

}`,Hh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new oo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new yi({vertexShader:M_,fragmentShader:S_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xt(new Zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wh=class extends Hi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,d=null,u=null,g=null,A=typeof XRWebGLBinding<"u",m=new Hh,f={},M=e.getContextAttributes(),R=null,b=null,D=[],I=[],x=new ot,C=null,k=null,F=new Ln;F.viewport=new vn;let Q=new Ln;Q.viewport=new vn;let it=[F,Q],Y=new el,ct=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(mt){let te=D[mt];return te===void 0&&(te=new vr,D[mt]=te),te.getTargetRaySpace()},this.getControllerGrip=function(mt){let te=D[mt];return te===void 0&&(te=new vr,D[mt]=te),te.getGripSpace()},this.getHand=function(mt){let te=D[mt];return te===void 0&&(te=new vr,D[mt]=te),te.getHandSpace()};function rt(mt){let te=I.indexOf(mt.inputSource);if(te===-1)return;let ie=D[te];ie!==void 0&&(ie.update(mt.inputSource,mt.frame,c||o),ie.dispatchEvent({type:mt.type,data:mt.inputSource}))}function nt(){s.removeEventListener("select",rt),s.removeEventListener("selectstart",rt),s.removeEventListener("selectend",rt),s.removeEventListener("squeeze",rt),s.removeEventListener("squeezestart",rt),s.removeEventListener("squeezeend",rt),s.removeEventListener("end",nt),s.removeEventListener("inputsourceschange",dt);for(let mt=0;mt<D.length;mt++){let te=I[mt];te!==null&&(I[mt]=null,D[mt].disconnect(te))}ct=null,et=null,m.reset();for(let mt in f)delete f[mt];if(t.setRenderTarget(R),u=null,d=null,p=null,s=null,b=null,we.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(x.width,x.height,!1),k!==null){let mt=k.camera;mt.fov=k.fov,mt.zoom=k.zoom,mt.updateProjectionMatrix(),k=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(mt){r=mt,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(mt){a=mt,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(mt){c=mt},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return p===null&&A&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(mt){if(s=mt,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",rt),s.addEventListener("selectstart",rt),s.addEventListener("selectend",rt),s.addEventListener("squeeze",rt),s.addEventListener("squeezestart",rt),s.addEventListener("squeezeend",rt),s.addEventListener("end",nt),s.addEventListener("inputsourceschange",dt),M.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(x),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,me=null,kt=null;M.depth&&(kt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ie=M.stencil?hs:rs,me=M.stencil?Xs:Li);let ae={colorFormat:e.RGBA8,depthFormat:kt,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(ae),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new ei(d.textureWidth,d.textureHeight,{format:Ni,type:Kn,depthTexture:new as(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ie={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,ie),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new ei(u.framebufferWidth,u.framebufferHeight,{format:Ni,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),we.setContext(s),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function dt(mt){for(let te=0;te<mt.removed.length;te++){let ie=mt.removed[te],me=I.indexOf(ie);me>=0&&(I[me]=null,D[me].disconnect(ie))}for(let te=0;te<mt.added.length;te++){let ie=mt.added[te],me=I.indexOf(ie);if(me===-1){for(let ae=0;ae<D.length;ae++)if(ae>=I.length){I.push(ie),me=ae;break}else if(I[ae]===null){I[ae]=ie,me=ae;break}if(me===-1)break}let kt=D[me];kt&&kt.connect(ie)}}function pt(mt,te){te===null?mt.matrixWorld.copy(mt.matrix):mt.matrixWorld.multiplyMatrices(te.matrixWorld,mt.matrix),mt.matrixWorldInverse.copy(mt.matrixWorld).invert()}this.updateCamera=function(mt){if(s===null)return;let te=mt.near,ie=mt.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),Y.near=Q.near=F.near=te,Y.far=Q.far=F.far=ie,(ct!==Y.near||et!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),ct=Y.near,et=Y.far),Y.layers.mask=mt.layers.mask|6,F.layers.mask=Y.layers.mask&-5,Q.layers.mask=Y.layers.mask&-3;let me=mt.parent,kt=Y.cameras;pt(Y,me);for(let ae=0;ae<kt.length;ae++)pt(kt[ae],me);Y.projectionMatrix.copy(F.projectionMatrix),Y.projectionMatrixInverse.copy(F.projectionMatrixInverse),k===null&&mt.isPerspectiveCamera&&(k={camera:mt,fov:mt.fov,zoom:mt.zoom}),St(mt,Y,me)};function St(mt,te,ie){ie===null?mt.matrix.copy(te.matrixWorld):(mt.matrix.copy(ie.matrixWorld),mt.matrix.invert(),mt.matrix.multiply(te.matrixWorld)),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.updateMatrixWorld(!0),mt.projectionMatrix.copy(te.projectionMatrix),mt.projectionMatrixInverse.copy(te.projectionMatrixInverse),mt.isPerspectiveCamera&&(mt.fov=Ta*2*Math.atan(1/mt.projectionMatrix.elements[5]),mt.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(mt){l=mt,d!==null&&(d.fixedFoveation=mt),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=mt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Y)},this.getCameraTexture=function(mt){return f[mt]};let Ht=null;function ne(mt,te){if(h=te.getViewerPose(c||o),g=te,h!==null){let ie=h.views;u!==null&&(t.setRenderTargetFramebuffer(b,u.framebuffer),t.setRenderTarget(b));let me=!1;ie.length!==Y.cameras.length&&(Y.cameras.length=0,me=!0);for(let ve=0;ve<ie.length;ve++){let fe=ie[ve],Ke=null;if(u!==null)Ke=u.getViewport(fe);else{let Gt=p.getViewSubImage(d,fe);Ke=Gt.viewport,ve===0&&(t.setRenderTargetTextures(b,Gt.colorTexture,Gt.depthStencilTexture),t.setRenderTarget(b))}let wt=it[ve];wt===void 0&&(wt=new Ln,wt.layers.enable(ve),wt.viewport=new vn,it[ve]=wt),wt.matrix.fromArray(fe.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(fe.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),ve===0&&(Y.matrix.copy(wt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),me===!0&&Y.cameras.push(wt)}let kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&A){p=n.getBinding();let ve=p.getDepthInformation(ie[0]);ve&&ve.isValid&&ve.texture&&m.init(ve,s.renderState)}if(kt&&kt.includes("camera-access")&&A){t.state.unbindTexture(),p=n.getBinding();for(let ve=0;ve<ie.length;ve++){let fe=ie[ve].camera;if(fe){let Ke=f[fe];Ke||(Ke=new oo,f[fe]=Ke);let wt=p.getCameraImage(fe);Ke.sourceTexture=wt}}}}for(let ie=0;ie<D.length;ie++){let me=I[ie],kt=D[ie];me!==null&&kt!==void 0&&kt.update(me,te,c||o)}Ht&&Ht(mt,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}let we=new of;we.setAnimationLoop(ne),this.setAnimationLoop=function(mt){Ht=mt},this.dispose=function(){}}},w_=new hn,gf=new We;gf.set(-1,0,0,0,1,0,0,0,1);function b_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Eh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,R,b){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),p(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&u(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),A(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,R):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Un&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Un&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=t.get(f),R=M.envMap,b=M.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(w_.makeRotationFromEuler(b)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(gf),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,R){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=R*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function u(m,f,M){m.ior.value=f.ior,f.diffuseRoughness>0&&(m.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=f.diffuseRoughnessMap,e(f.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Un&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function A(m,f){let M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function A_(i,t,e,n){let s={},r={};function o(M,R){let b=R.program;n.uniformBlockBinding(M,b,s[M.id])}function a(M,R){let b=s[M.id];b===void 0&&(g(M),b=l(M),s[M.id]=b,M.addEventListener("dispose",m));let D=R.program;n.updateUBOMapping(M,D);let I=t.render.frame;r[M.id]!==I&&(c(M),r[M.id]=I)}function l(M){let R=i.createBuffer(),b=M.__size,D=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,b,D),i.bindBuffer(i.UNIFORM_BUFFER,null),R}function c(M){let R=s[M.id],b=M.uniforms,D=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let I=0,x=b.length;I<x;I++){let C=b[I];if(Array.isArray(C))for(let k=0,F=C.length;k<F;k++)h(C[k],I,k,D);else h(C,I,0,D)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,R,b,D){if(d(M,R,b,D)===!0){let I=M.__offset,x=M.value;if(Array.isArray(x)){let C=0;for(let k=0;k<x.length;k++){let F=x[k],Q=A(F,!0);p(F,M.__data,C),C+=Q.storage/Float32Array.BYTES_PER_ELEMENT}}else p(x,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,I,M.__data)}}function p(M,R,b){typeof M=="number"||typeof M=="boolean"?R[b]=M:M.isMatrix3?(R[b]=M.elements[0],R[b+1]=M.elements[1],R[b+2]=M.elements[2],R[b+3]=0,R[b+4]=M.elements[3],R[b+5]=M.elements[4],R[b+6]=M.elements[5],R[b+7]=0,R[b+8]=M.elements[6],R[b+9]=M.elements[7],R[b+10]=M.elements[8],R[b+11]=0):ArrayBuffer.isView(M)?R.set(M.subarray(0,R.length-b),b):M.toArray(R,b)}function d(M,R,b,D){let I=M.value,x=R+"_"+b;if(Array.isArray(I)){D[x]===void 0&&(D[x]=[]);let C=D[x],k=!1;for(let F=0;F<I.length;F++)u(I[F],C,F)===!0&&(k=!0);return k}return u(I,D,x)}function u(M,R,b){if(R[b]===void 0)return typeof M=="number"||typeof M=="boolean"?R[b]=M:ArrayBuffer.isView(M)?R[b]=M.slice():R[b]=M.clone(),!0;{let D=R[b];if(typeof M=="number"||typeof M=="boolean"){if(D!==M)return R[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(D.equals(M)===!1)return D.copy(M),!0}}return!1}function g(M){let R=M.uniforms,b=0,D=16;for(let x=0,C=R.length;x<C;x++){let k=Array.isArray(R[x])?R[x]:[R[x]];for(let F=0,Q=k.length;F<Q;F++){let it=k[F],Y=Array.isArray(it.value)?it.value:[it.value],ct=Array.isArray(R[x])||Array.isArray(it.value),et=b;for(let nt=0,dt=Y.length;nt<dt;nt++){let pt=Y[nt],St=A(pt,ct),Ht=b%D,ne=Ht%St.boundary,we=Ht+ne;b+=ne,we!==0&&D-we<St.storage&&(b+=D-we),nt===0&&(et=b),b+=St.storage}let rt=it.type==="int"?Int32Array:it.type==="uint"?Uint32Array:Float32Array;it.__data=new rt((b-et)/Float32Array.BYTES_PER_ELEMENT),it.__offset=et}}let I=b%D;return I>0&&(b+=D-I),M.__size=b,M.__cache={},this}function A(M,R){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=16,b.storage=48):M.isMatrix4?(b.boundary=16,b.storage=64):M.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",M),R===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(M){let R=M.target;R.removeEventListener("dispose",m),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function f(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:f}}var E_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yi=null;function T_(){return Yi===null&&(Yi=new eo(E_,16,16,As,Di),Yi.name="DFG_LUT",Yi.minFilter=qn,Yi.magFilter=qn,Yi.wrapS=Gi,Yi.wrapT=Gi,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}var Zl=class{constructor(t={}){let{canvas:e=Sd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Kn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let A=u,m=new Set([fl,dl,ul]),f=new Set([Kn,Li,Cr,Xs,ll,cl]),M=new Uint32Array(4),R=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[],intensity:[]},D=null,I=null,x=[],C=[],k=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,Q=!1,it=null,Y=null,ct=null,et=null;this._outputColorSpace=Xn;let rt=0,nt=0,dt=null,pt=-1,St=null,Ht=new vn,ne=new vn,we=null,mt=new Ee(0),te=0,ie=e.width,me=e.height,kt=1,ae=null,Ge=null,ve=new vn(0,0,ie,me),fe=new vn(0,0,ie,me),Ke=!1,wt=new _s,Gt=new Fa,Pt=!1,ue=!1,jt=new hn,ge=new O,de=new vn,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function yt(){return dt===null?kt:1}let K=n;function tn(T,W){return e.getContext(T,W)}let Be,ln,Zt,cn,be,Ie,U,v,ht,bt,Tt,$t,qt,Mt,ut,Jt,re,H,vt,Ct,lt,Yt,ee;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${il}`),e.addEventListener("webglcontextlost",Xe,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",se,!1),K===null){let W="webgl2";if(K=tn(W,T),K===null)throw tn(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(T){throw e.removeEventListener("webglcontextlost",Xe,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",se,!1),ze("WebGLRenderer: "+T.message),T}function Pe(){Be=new Og(K),Be.init(),lt=new v_(K,Be),ln=new Tg(K,Be,t,lt),Zt=new __(K,Be),ln.reversedDepthBuffer&&d&&Zt.buffers.depth.setReversed(!0),Y=K.createFramebuffer(),ct=K.createFramebuffer(),et=K.createFramebuffer(),cn=new Gg(K),be=new s_,Ie=new y_(K,Be,Zt,be,ln,lt,cn),U=new zg(F),v=new Hp(K),Yt=new Ag(K,v),ht=new Bg(K,v,cn,Yt),bt=new Hg(K,ht,v,Yt,cn),H=new Vg(K,ln,Ie),ut=new Cg(be),Tt=new i_(F,U,Be,ln,Yt,ut),$t=new b_(F,be),qt=new o_,Mt=new d_(Be),re=new bg(F,U,Zt,bt,g,l),Jt=new x_(F,bt,ln),ee=new A_(K,cn,ln,Zt),vt=new Eg(K,Be,cn),Ct=new kg(K,Be,cn),cn.programs=Tt.programs,F.capabilities=ln,F.extensions=Be,F.properties=be,F.renderLists=qt,F.shadowMap=Jt,F.state=Zt,F.info=cn}A!==Kn&&(k=new Xg(A,e.width,e.height,a,s,r));let zt=new Wh(F,K);this.xr=zt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let T=Be.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Be.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return kt},this.setPixelRatio=function(T){T!==void 0&&(kt=T,this.setSize(ie,me,!1))},this.getSize=function(T){return T.set(ie,me)},this.setSize=function(T,W,j=!0){if(zt.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=T,me=W,e.width=Math.floor(T*kt),e.height=Math.floor(W*kt),j===!0&&(e.style.width=T+"px",e.style.height=W+"px"),k!==null&&k.setSize(e.width,e.height),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(ie*kt,me*kt).floor()},this.setDrawingBufferSize=function(T,W,j){ie=T,me=W,kt=j,e.width=Math.floor(T*j),e.height=Math.floor(W*j),this.setViewport(0,0,T,W)},this.setEffects=function(T){if(A===Kn){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let W=0;W<T.length;W++)if(T[W].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Ht)},this.getViewport=function(T){return T.copy(ve)},this.setViewport=function(T,W,j,$){T.isVector4?ve.set(T.x,T.y,T.z,T.w):ve.set(T,W,j,$),Zt.viewport(Ht.copy(ve).multiplyScalar(yt()).round())},this.getScissor=function(T){return T.copy(fe)},this.setScissor=function(T,W,j,$){T.isVector4?fe.set(T.x,T.y,T.z,T.w):fe.set(T,W,j,$),Zt.scissor(ne.copy(fe).multiplyScalar(yt()).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(T){Zt.setScissorTest(Ke=T)},this.setOpaqueSort=function(T){ae=T},this.setTransparentSort=function(T){Ge=T},this.getClearColor=function(T){return T.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(T=!0,W=!0,j=!0){let $=0;if(T){let st=!1;if(dt!==null){let Dt=dt.texture.format;st=m.has(Dt)}if(st){let Dt=dt.texture.type,S=f.has(Dt),w=re.getClearColor(),E=re.getClearAlpha(),_=w.r,B=w.g,P=w.b;S?(M[0]=_,M[1]=B,M[2]=P,M[3]=E,K.clearBufferuiv(K.COLOR,0,M)):(R[0]=_,R[1]=B,R[2]=P,R[3]=E,K.clearBufferiv(K.COLOR,0,R))}else $|=K.COLOR_BUFFER_BIT}W&&($|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&($|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&K.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),it=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Xe,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",se,!1),re.dispose(),qt.dispose(),Mt.dispose(),Ie.dispose(),be.dispose(),U.dispose(),bt.dispose(),ht.dispose(),Yt.dispose(),ee.dispose(),Tt.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",z),zt.removeEventListener("sessionend",tt),y.stop()};function Xe(T){T.preventDefault(),Jr("WebGLRenderer: Context Lost."),Q=!0}function Me(){Jr("WebGLRenderer: Context Restored."),Q=!1;let T=cn.autoReset,W=Jt.enabled,j=Jt.autoUpdate,$=Jt.needsUpdate,st=Jt.type;Pe(),cn.autoReset=T,Jt.enabled=W,Jt.autoUpdate=j,Jt.needsUpdate=$,Jt.type=st}function se(T){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Je(T){let W=T.target;W.removeEventListener("dispose",Je),gn(W)}function gn(T){ai(T),be.remove(T)}function ai(T){let W=be.get(T).programs;W!==void 0&&(W.forEach(function(j){Tt.releaseProgram(j)}),T.isShaderMaterial&&Tt.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,j,$,st,Dt){W===null&&(W=Fe);let S=st.isMesh&&st.matrixWorld.determinantAffine()<0,w=Ft(T,W,j,$,st);Zt.setMaterial($,S);let E=j.index,_=1;if($.wireframe===!0){if(E=ht.getWireframeAttribute(j),E===void 0)return;_=2}let B=j.drawRange,P=j.attributes.position,X=B.start*_,q=(B.start+B.count)*_;Dt!==null&&(X=Math.max(X,Dt.start*_),q=Math.min(q,(Dt.start+Dt.count)*_)),E!==null?(X=Math.max(X,0),q=Math.min(q,E.count)):P!=null&&(X=Math.max(X,0),q=Math.min(q,P.count));let Z=q-X;if(Z<0||Z===1/0)return;Yt.setup(st,$,w,j,E);let L,V=vt;if(E!==null&&(L=v.get(E),V=Ct,V.setIndex(L)),st.isMesh)$.wireframe===!0?(Zt.setLineWidth($.wireframeLinewidth*yt()),V.setMode(K.LINES)):V.setMode(K.TRIANGLES);else if(st.isLine){let J=$.linewidth;J===void 0&&(J=1),Zt.setLineWidth(J*yt()),st.isLineSegments?V.setMode(K.LINES):st.isLineLoop?V.setMode(K.LINE_LOOP):V.setMode(K.LINE_STRIP)}else st.isPoints?V.setMode(K.POINTS):st.isSprite&&V.setMode(K.TRIANGLES);if(st.isBatchedMesh)if(Be.get("WEBGL_multi_draw"))V.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{let J=st._multiDrawStarts,G=st._multiDrawCounts,ft=st._multiDrawCount,Rt=E?v.get(E).bytesPerElement:1,At=be.get($).currentProgram.getUniforms();for(let Kt=0;Kt<ft;Kt++)At.setValue(K,"_gl_DrawID",Kt),V.render(J[Kt]/Rt,G[Kt])}else if(st.isInstancedMesh)V.renderInstances(X,Z,st.count);else if(j.isInstancedBufferGeometry){let J=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,G=Math.min(j.instanceCount,J);V.renderInstances(X,Z,G)}else V.render(X,Z)};function Js(T,W,j,$){it!==null&&T.isNodeMaterial&&it.setObject($,T),Pt===!0&&ut.setState(T,j,!1),T.transparent===!0&&T.side===en&&T.forceSinglePass===!1?(T.side=Un,T.needsUpdate=!0,Lt(T,W,$),T.side=bs,T.needsUpdate=!0,Lt(T,W,$),T.side=en):Lt(T,W,$)}this.compile=function(T,W,j=null){j===null&&(j=T),it!==null&&it.renderStart(T,W,j),I=Mt.get(j),I.init(W),C.push(I),j.traverseVisible(function(st){st.isLight&&st.layers.test(W.layers)&&(I.pushLight(st),st.castShadow&&I.pushShadow(st))}),T!==j&&T.traverseVisible(function(st){st.isLight&&st.layers.test(W.layers)&&(I.pushLight(st),st.castShadow&&I.pushShadow(st))}),I.setupLights(),it!==null&&it.updateLights(I.state.lightsArray),ue=this.localClippingEnabled,Pt=ut.init(this.clippingPlanes,ue),Pt===!0&&ut.setGlobalState(this.clippingPlanes,W),it!==null&&Jt.render(I.state.shadowsArray,j,W);let $=new Set;return T.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;let Dt=st.material;if(Dt)if(Array.isArray(Dt))for(let S=0;S<Dt.length;S++){let w=Dt[S];Js(w,j,W,st),$.add(w)}else Js(Dt,j,W,st),$.add(Dt)}),I=C.pop(),it!==null&&it.renderEnd(),$},this.compileAsync=function(T,W,j=null){let $=this.compile(T,W,j);return new Promise(st=>{function Dt(){if($.forEach(function(S){let E=be.get(S).currentProgram;(E===void 0||E.isReady())&&$.delete(S)}),$.size===0){st(T);return}setTimeout(Dt,10)}Be.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Ts=null;function zo(T){Ts&&Ts(T)}function z(){y.stop()}function tt(){y.start()}let y=new of;y.setAnimationLoop(zo),typeof self<"u"&&y.setContext(self),this.setAnimationLoop=function(T){Ts=T,zt.setAnimationLoop(T),T===null?y.stop():y.start()},zt.addEventListener("sessionstart",z),zt.addEventListener("sessionend",tt),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Q===!0)return;it!==null&&it.renderStart(T,W);let j=zt.enabled===!0&&zt.isPresenting===!0,$=k!==null&&(dt===null||j)&&k.begin(F,dt);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(W),W=zt.getCamera()),T.isScene===!0&&T.onBeforeRender(F,T,W,dt),I=Mt.get(T,C.length),I.init(W),I.state.textureUnits=Ie.getTextureUnits(),C.push(I),jt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?Gt.setFromArrayCamera(W):wt.setFromProjectionMatrix(jt,hi,W.reversedDepth),ue=this.localClippingEnabled,Pt=ut.init(this.clippingPlanes,ue),D=qt.get(T,x.length),D.init(),x.push(D),this.info.render.frame++,zt.enabled===!0&&zt.isPresenting===!0){let S=F.xr.getDepthSensingMesh();S!==null&&N(S,W,-1/0,F.sortObjects)}N(T,W,0,F.sortObjects),D.finish(),it!==null&&it.updateLights(I.state.lightsArray),F.sortObjects===!0&&D.sort(ae,Ge),Ne=zt.enabled===!1||zt.isPresenting===!1||zt.hasDepthSensing()===!1,Ne&&re.addToRenderList(D,T),this.info.autoReset===!0&&this.info.reset(),Pt===!0&&ut.beginShadows();let st=I.state.shadowsArray;if(Jt.render(st,T,W),Pt===!0&&ut.endShadows(),($&&k.hasRenderPass())===!1){let S=D.opaque,w=D.transmissive;if(I.setupLights(),W.isArrayCamera){let E=W.cameras;if(w.length>0)for(let _=0,B=E.length;_<B;_++){let P=E[_];It(S,w,T,P)}Ne&&re.render(T);for(let _=0,B=E.length;_<B;_++){let P=E[_];at(D,T,P,P.viewport)}}else w.length>0&&It(S,w,T,W),Ne&&re.render(T),at(D,T,W)}dt!==null&&nt===0&&(Ie.updateMultisampleRenderTarget(dt),Ie.updateRenderTargetMipmap(dt)),$&&k.end(F),T.isScene===!0&&T.onAfterRender(F,T,W),Yt.resetDefaultState(),pt=-1,St=null,C.pop(),C.length>0?(I=C[C.length-1],Ie.setTextureUnits(I.state.textureUnits),Pt===!0&&ut.setGlobalState(F.clippingPlanes,I.state.camera)):I=null,x.pop(),x.length>0?D=x[x.length-1]:D=null,it!==null&&it.renderEnd()};function N(T,W,j,$){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)I.pushLight(T),T.castShadow&&I.pushShadow(T);else if(T.isSprite){let S=W.isArrayCamera?Gt:wt;if(!T.frustumCulled||T.intersectsFrustum(S)){$&&de.setFromMatrixPosition(T.matrixWorld).applyMatrix4(jt);let w=bt.update(T),E=T.material;E.visible&&D.push(T,w,E,j,de.z,null,W)}}else if(T.isMesh||T.isLine||T.isPoints){let S=W.isArrayCamera?Gt:wt;if(!T.frustumCulled||T.intersectsFrustum(S)){let w=bt.update(T),E=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),de.copy(T.boundingSphere.center)):(w.boundingSphere===null&&w.computeBoundingSphere(),de.copy(w.boundingSphere.center)),de.applyMatrix4(T.matrixWorld).applyMatrix4(jt)),Array.isArray(E)){let _=w.groups;for(let B=0,P=_.length;B<P;B++){let X=_[B],q=E[X.materialIndex];q&&q.visible&&D.push(T,w,q,j,de.z,X,W)}}else E.visible&&D.push(T,w,E,j,de.z,null,W)}}}let Dt=T.children;for(let S=0,w=Dt.length;S<w;S++)N(Dt[S],W,j,$)}function at(T,W,j,$){let{opaque:st,transmissive:Dt,transparent:S}=T;I.setupLightsView(j),Pt===!0&&ut.setGlobalState(F.clippingPlanes,j),$&&Zt.viewport(Ht.copy($)),st.length>0&&_t(st,W,j),Dt.length>0&&_t(Dt,W,j),S.length>0&&_t(S,W,j),Zt.buffers.depth.setTest(!0),Zt.buffers.depth.setMask(!0),Zt.buffers.color.setMask(!0),Zt.setPolygonOffset(!1)}function It(T,W,j,$){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[$.id]===void 0){let X=Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[$.id]=new ei(1,1,{generateMipmaps:!0,type:X?Di:Kn,minFilter:cs,samples:Math.max(4,ln.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:on.workingColorSpace})}let Dt=I.state.transmissionRenderTarget[$.id],S=$.viewport||Ht;Dt.setSize(S.z*F.transmissionResolutionScale,S.w*F.transmissionResolutionScale);let w=F.getRenderTarget(),E=F.getActiveCubeFace(),_=F.getActiveMipmapLevel();F.setRenderTarget(Dt),F.getClearColor(mt),te=F.getClearAlpha(),te<1&&F.setClearColor(16777215,.5),F.clear(),Ne&&re.render(j);let B=F.toneMapping;F.toneMapping=qi;let P=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),I.setupLightsView($),Pt===!0&&ut.setGlobalState(F.clippingPlanes,$),_t(T,j,$),Ie.updateMultisampleRenderTarget(Dt),Ie.updateRenderTargetMipmap(Dt),Be.has("WEBGL_multisampled_render_to_texture")===!1){let X=!1;for(let q=0,Z=W.length;q<Z;q++){let L=W[q],{object:V,geometry:J,material:G,group:ft}=L;if(G.side===en&&V.layers.test($.layers)){let Rt=G.side;G.side=Un,G.needsUpdate=!0,Ot(V,j,$,J,G,ft),G.side=Rt,G.needsUpdate=!0,X=!0}}X===!0&&(Ie.updateMultisampleRenderTarget(Dt),Ie.updateRenderTargetMipmap(Dt))}F.setRenderTarget(w,E,_),F.setClearColor(mt,te),P!==void 0&&($.viewport=P),F.toneMapping=B}function _t(T,W,j){let $=W.isScene===!0?W.overrideMaterial:null;for(let st=0,Dt=T.length;st<Dt;st++){let S=T[st],{object:w,geometry:E,group:_}=S,B=S.material;B.allowOverride===!0&&$!==null&&(B=$),w.layers.test(j.layers)&&Ot(w,W,j,E,B,_)}}function Ot(T,W,j,$,st,Dt){it!==null&&st.isNodeMaterial&&it.setObject(T,st),T.onBeforeRender(F,W,j,$,st,Dt),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),st.onBeforeRender(F,W,j,$,T,Dt),st.transparent===!0&&st.side===en&&st.forceSinglePass===!1?(st.side=Un,st.needsUpdate=!0,F.renderBufferDirect(j,W,$,st,T,Dt),st.side=bs,st.needsUpdate=!0,F.renderBufferDirect(j,W,$,st,T,Dt),st.side=en):F.renderBufferDirect(j,W,$,st,T,Dt),T.onAfterRender(F,W,j,$,st,Dt)}function gt(T){let W=0;for(let j of T)j.texture!==null&&W++;return W}function Lt(T,W,j){W.isScene!==!0&&(W=Fe);let $=be.get(T),st=I.state.lights,Dt=I.state.shadowsArray,S=st.state.version,w=Tt.getParameters(T,st.state,Dt,W,j,I.state.lightProbeGridArray),E=Tt.getProgramCacheKey(w),_=$.programs;$.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?W.environment:null,$.fog=W.fog;let B=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;$.envMap=U.get(T.envMap||$.environment,B),$.envMapRotation=$.environment!==null&&T.envMap===null?W.environmentRotation:T.envMapRotation,_===void 0&&(T.addEventListener("dispose",Je),_=new Map,$.programs=_,$.programVariants=new Map);let P=_.get(E);if(P!==void 0){if($.currentProgram===P&&$.lightsStateVersion===S)return Vt(T,w),P}else w.uniforms=Tt.getUniforms(T),it!==null&&T.isNodeMaterial&&it.build(T,j,w),T.onBeforeCompile(w,F),P=Tt.acquireProgram(w,E),_.set(E,P),$.uniforms=w.uniforms;let X=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(X.clippingPlanes=ut.uniform),Vt(T,w),$.needsLights=ye(T),$.lightsStateVersion=S,$.needsLights&&(X.ambientLightColor.value=st.state.ambient,X.sunLights.value=st.state.sun,X.sunLightShadows.value=st.state.sunShadow,X.directionalLights.value=st.state.directional,X.directionalLightShadows.value=st.state.directionalShadow,X.spotLights.value=st.state.spot,X.spotLightShadows.value=st.state.spotShadow,X.rectAreaLights.value=st.state.rectArea,X.ltc_1.value=st.state.rectAreaLTC1,X.ltc_2.value=st.state.rectAreaLTC2,X.pointLights.value=st.state.point,X.pointLightShadows.value=st.state.pointShadow,X.hemisphereLights.value=st.state.hemi,X.sunShadowMatrix.value=st.state.sunShadowMatrix,X.sunShadowCascade.value=st.state.sunShadowCascade,X.directionalShadowMatrix.value=st.state.directionalShadowMatrix,X.spotLightMatrix.value=st.state.spotLightMatrix,X.spotLightMap.value=st.state.spotLightMap,X.pointShadowMatrix.value=st.state.pointShadowMatrix),$.numLightProbeGrids=gt(I.state.lightProbeGridArray),$.currentProgram=P,$.uniformsList=null,P}function Xt(T,W,j,$,st){let Dt=be.get(T),S=Dt.currentProgram.id+","+$+","+st,w=Dt.programVariants.get(S);return w===void 0?(w=Lt(T,W,j),Dt.programVariants.set(S,w)):(Dt.currentProgram=w,Dt.uniformsList=null,Dt.outputColorSpace=$,Dt.toneMapping=st),w}function Ut(T){if(T.uniformsList===null){let W=T.currentProgram.getUniforms();T.uniformsList=Rr.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function Vt(T,W){let j=be.get(T);j.outputColorSpace=W.outputColorSpace,j.batching=W.batching,j.batchingColor=W.batchingColor,j.instancing=W.instancing,j.instancingColor=W.instancingColor,j.instancingMorph=W.instancingMorph,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function Ft(T,W,j,$,st){W.isScene!==!0&&(W=Fe),Ie.resetTextureUnits();let Dt=W.fog,S=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?W.environment:null,w=dt===null?F.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:on.workingColorSpace,E=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,_=U.get($.envMap||S,E),B=$.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,P=!!j.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),X=!!j.morphAttributes.position,q=!!j.morphAttributes.normal,Z=!!j.morphAttributes.color,L=qi;$.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(L=F.toneMapping);let V=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,J=V!==void 0?V.length:0,G=be.get($),ft=I.state.lights;if(Pt===!0&&(ue===!0||T!==St)){let Nt=T===St&&$.id===pt;ut.setState($,T,Nt)}let Rt=!1,At=!1;$.version===G.__version?G.needsLights&&G.lightsStateVersion!==ft.state.version||st.isBatchedMesh&&G.batching===!1||!st.isBatchedMesh&&G.batching===!0||st.isBatchedMesh&&G.batchingColor===!0&&st._colorsTexture===null||st.isBatchedMesh&&G.batchingColor===!1&&st._colorsTexture!==null||st.isInstancedMesh&&G.instancing===!1||!st.isInstancedMesh&&G.instancing===!0||st.isSkinnedMesh&&G.skinning===!1||!st.isSkinnedMesh&&G.skinning===!0||st.isInstancedMesh&&G.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&G.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&G.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&G.instancingMorph===!1&&st.morphTexture!==null||G.envMap!==_||$.fog===!0&&G.fog!==Dt||G.numClippingPlanes!==void 0&&(G.numClippingPlanes!==ut.numPlanes||G.numIntersection!==ut.numIntersection)||G.vertexAlphas!==B||G.vertexTangents!==P||G.morphTargets!==X||G.morphNormals!==q||G.morphColors!==Z||G.morphTargetsCount!==J||G.numLightProbeGrids!==gt(I.state.lightProbeGridArray)?Rt=!0:(G.outputColorSpace!==w||G.toneMapping!==L)&&(At=!0):(Rt=!0,G.__version=$.version);let Kt=G.currentProgram;(Rt===!0||At===!0)&&(Kt=At===!0?Xt($,W,st,w,L):Lt($,W,st),it&&$.isNodeMaterial&&it.onUpdateProgram($,Kt,G));let oe=!1,Se=!1,ce=!1,Qt=Kt.getUniforms(),Te=G.uniforms;if(Zt.useProgram(Kt.program)&&(oe=!0,Se=!0,ce=!0),$.id!==pt&&(pt=$.id,Se=!0),oe||St!==T){Zt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Qt.setValue(K,"projectionMatrix",T.projectionMatrix),Qt.setValue(K,"viewMatrix",T.matrixWorldInverse);let pe=Qt.map.cameraPosition;pe!==void 0&&pe.setValue(K,ge.setFromMatrixPosition(T.matrixWorld)),ln.logarithmicDepthBuffer&&Qt.setValue(K,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Qt.setValue(K,"isOrthographic",T.isOrthographicCamera===!0),St!==T&&(St=T,Se=!0,ce=!0)}if(G.needsLights&&(ft.state.sunShadowMap.length>0&&Qt.setValue(K,"sunShadowMap",ft.state.sunShadowMap,Ie),ft.state.directionalShadowMap.length>0&&Qt.setValue(K,"directionalShadowMap",ft.state.directionalShadowMap,Ie),ft.state.spotShadowMap.length>0&&Qt.setValue(K,"spotShadowMap",ft.state.spotShadowMap,Ie),ft.state.pointShadowMap.length>0&&Qt.setValue(K,"pointShadowMap",ft.state.pointShadowMap,Ie)),st.isSkinnedMesh){Qt.setOptional(K,st,"bindMatrix"),Qt.setOptional(K,st,"bindMatrixInverse");let Nt=st.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Qt.setValue(K,"boneTexture",Nt.boneTexture,Ie))}st.isBatchedMesh&&(Qt.setOptional(K,st,"batchingTexture"),Qt.setValue(K,"batchingTexture",st._matricesTexture,Ie),Qt.setOptional(K,st,"batchingIdTexture"),Qt.setValue(K,"batchingIdTexture",st._indirectTexture,Ie),Qt.setOptional(K,st,"batchingColorTexture"),st._colorsTexture!==null&&Qt.setValue(K,"batchingColorTexture",st._colorsTexture,Ie));let he=j.morphAttributes;if((he.position!==void 0||he.normal!==void 0||he.color!==void 0)&&H.update(st,j,Kt),(Se||G.receiveShadow!==st.receiveShadow)&&(G.receiveShadow=st.receiveShadow,Qt.setValue(K,"receiveShadow",st.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&W.environment!==null&&(Te.envMapIntensity.value=W.environmentIntensity),Te.dfgLUT!==void 0&&(Te.dfgLUT.value=T_()),Se){if(Qt.setValue(K,"toneMappingExposure",F.toneMappingExposure),G.needsLights&&_e(Te,ce),Dt&&$.fog===!0&&$t.refreshFogUniforms(Te,Dt),$t.refreshMaterialUniforms(Te,$,kt,me,I.state.transmissionRenderTarget[T.id]),G.needsLights&&G.numLightProbeGrids>0){let Nt=b,pe=0;for(let Ce of I.state.lightProbeGridArray)Ce.texture!==null&&(Nt.textures[pe]=Ce.texture,Nt.min[pe]=Ce.boundingBox.min,Nt.max[pe]=Ce.boundingBox.max,Nt.resolution[pe]=Ce.resolution,Nt.intensity[pe]=Ce.intensity,pe++);for(let Ce in Nt)Nt[Ce].length=pe;Te.probesSH.value=Nt.textures,Te.probesMin.value=Nt.min,Te.probesMax.value=Nt.max,Te.probesResolution.value=Nt.resolution,Te.probesIntensity.value=Nt.intensity}Rr.upload(K,Ut(G),Te,Ie)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Rr.upload(K,Ut(G),Te,Ie),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Qt.setValue(K,"center",st.center),Qt.setValue(K,"modelViewMatrix",st.modelViewMatrix),Qt.setValue(K,"normalMatrix",st.normalMatrix),Qt.setValue(K,"modelMatrix",st.matrixWorld),$.uniformsGroups!==void 0){let Nt=$.uniformsGroups;for(let pe=0,Ce=Nt.length;pe<Ce;pe++){let xn=Nt[pe];ee.update(xn,Kt),ee.bind(xn,Kt)}}return Kt}function _e(T,W){T.ambientLightColor.needsUpdate=W,T.sunLights.needsUpdate=W,T.sunLightShadows.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function ye(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return rt},this.getActiveMipmapLevel=function(){return nt},this.getRenderTarget=function(){return dt},this.setRenderTargetTextures=function(T,W,j){let $=be.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),be.get(T.texture).__webglTexture=W,be.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:j,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,W){let j=be.get(T);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(T,W=0,j=0){dt=T,rt=W,nt=j;let $=null,st=!1,Dt=!1;if(T){let w=be.get(T);if(w.__useDefaultFramebuffer!==void 0){Zt.bindFramebuffer(K.FRAMEBUFFER,w.__webglFramebuffer),Ht.copy(T.viewport),ne.copy(T.scissor),we=T.scissorTest,Zt.viewport(Ht),Zt.scissor(ne),Zt.setScissorTest(we),pt=-1;return}else if(w.__webglFramebuffer===void 0)Ie.setupRenderTarget(T);else if(w.__hasExternalTextures)Ie.rebindTextures(T,be.get(T.texture).__webglTexture,be.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let B=T.depthTexture;if(w.__boundDepthTexture!==B){if(B!==null&&be.has(B)&&(T.width!==B.image.width||T.height!==B.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(T)}}let E=T.texture;(E.isData3DTexture||E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Dt=!0);let _=be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(_[W])?$=_[W][j]:$=_[W],st=!0):T.samples>0&&Ie.useMultisampledRTT(T)===!1?$=be.get(T).__webglMultisampledFramebuffer:Array.isArray(_)?$=_[j]:$=_,Ht.copy(T.viewport),ne.copy(T.scissor),we=T.scissorTest}else Ht.copy(ve).multiplyScalar(kt).floor(),ne.copy(fe).multiplyScalar(kt).floor(),we=Ke;if(j!==0&&($=Y),Zt.bindFramebuffer(K.FRAMEBUFFER,$)&&Zt.drawBuffers(T,$),Zt.viewport(Ht),Zt.scissor(ne),Zt.setScissorTest(we),st){let w=be.get(T.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+W,w.__webglTexture,j)}else if(Dt){let w=W;for(let E=0;E<T.textures.length;E++){let _=be.get(T.textures[E]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+E,_.__webglTexture,j,w)}}else if(T!==null&&j!==0){let w=be.get(T.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,w.__webglTexture,j)}pt=-1};function $e(T){let W=be.get(T);return(W.__readFormat!==T.format||W.__readType!==T.type)&&(W.__readFormat=T.format,W.__readType=T.type,W.__formatReadable=ln.textureFormatReadable(T.format),W.__typeReadable=ln.textureTypeReadable(T.type)),W}this.readRenderTargetPixels=function(T,W,j,$,st,Dt,S,w=0){if(!(T&&T.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let E=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&S!==void 0&&(E=E[S]),Array.isArray(E)&&(E=E[0]),E){let _=Zt.getBoundFramebuffer(K.READ_FRAMEBUFFER);Zt.bindFramebuffer(K.READ_FRAMEBUFFER,E);try{let B=T.textures[w],P=B.format,X=B.type;T.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+w);let q=$e(B);if(q.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(q.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-$&&j>=0&&j<=T.height-st&&K.readPixels(W,j,$,st,lt.convert(P),lt.convert(X),Dt)}finally{Zt.bindFramebuffer(K.READ_FRAMEBUFFER,_)}}},this.readRenderTargetPixelsAsync=async function(T,W,j,$,st,Dt,S,w=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let E=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&S!==void 0&&(E=E[S]),Array.isArray(E)&&(E=E[0]),E)if(W>=0&&W<=T.width-$&&j>=0&&j<=T.height-st){let _=Zt.getBoundFramebuffer(K.READ_FRAMEBUFFER);Zt.bindFramebuffer(K.READ_FRAMEBUFFER,E);let B=T.textures[w],P=B.format,X=B.type;T.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+w);let q=$e(B);if(q.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(q.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Z=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,Z),K.bufferData(K.PIXEL_PACK_BUFFER,Dt.byteLength,K.STREAM_READ),K.readPixels(W,j,$,st,lt.convert(P),lt.convert(X),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),Zt.bindFramebuffer(K.READ_FRAMEBUFFER,_);let L=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await bd(K,L,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,Z),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Dt),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(Z),K.deleteSync(L),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,W=null,j=0){let $=Math.pow(2,-j),st=Math.floor(T.image.width*$),Dt=Math.floor(T.image.height*$),S=W!==null?W.x:0,w=W!==null?W.y:0;Ie.setTexture2D(T,0),Zt.activeTexture(K.TEXTURE0),K.copyTexSubImage2D(K.TEXTURE_2D,j,0,0,S,w,st,Dt),Zt.unbindTexture()},this.copyTextureToTexture=function(T,W,j=null,$=null,st=0,Dt=0){let S,w,E,_,B,P,X,q,Z,L=T.isCompressedTexture?T.mipmaps[Dt]:T.image;if(j!==null)S=j.max.x-j.min.x,w=j.max.y-j.min.y,E=j.isBox3?j.max.z-j.min.z:1,_=j.min.x,B=j.min.y,P=j.isBox3?j.min.z:0;else{let Qt=Math.pow(2,-st);S=Math.floor(T.width*Qt),w=Math.floor(T.height*Qt),T.isDataArrayTexture?E=L.depth:T.isData3DTexture?E=Math.floor(L.depth*Qt):E=1,_=0,B=0,P=0}$!==null?(X=$.x,q=$.y,Z=$.z):(X=0,q=0,Z=0);let V=lt.convert(W.format),J=lt.convert(W.type),G;W.isData3DTexture?(Ie.setTexture3D(W,0),G=K.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Ie.setTexture2DArray(W,0),G=K.TEXTURE_2D_ARRAY):(Ie.setTexture2D(W,0),G=K.TEXTURE_2D),Zt.activeTexture(K.TEXTURE0),Zt.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,W.flipY),Zt.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),Zt.pixelStorei(K.UNPACK_ALIGNMENT,W.unpackAlignment);let ft=Zt.getParameter(K.UNPACK_ROW_LENGTH),Rt=Zt.getParameter(K.UNPACK_IMAGE_HEIGHT),At=Zt.getParameter(K.UNPACK_SKIP_PIXELS),Kt=Zt.getParameter(K.UNPACK_SKIP_ROWS),oe=Zt.getParameter(K.UNPACK_SKIP_IMAGES);Zt.pixelStorei(K.UNPACK_ROW_LENGTH,L.width),Zt.pixelStorei(K.UNPACK_IMAGE_HEIGHT,L.height),Zt.pixelStorei(K.UNPACK_SKIP_PIXELS,_),Zt.pixelStorei(K.UNPACK_SKIP_ROWS,B),Zt.pixelStorei(K.UNPACK_SKIP_IMAGES,P);let Se=T.isDataArrayTexture||T.isData3DTexture,ce=W.isDataArrayTexture||W.isData3DTexture;if(T.isDepthTexture){let Qt=be.get(T),Te=be.get(W),he=be.get(Qt.__renderTarget),Nt=be.get(Te.__renderTarget);Zt.bindFramebuffer(K.READ_FRAMEBUFFER,he.__webglFramebuffer),Zt.bindFramebuffer(K.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let pe=0;pe<E;pe++)Se&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,be.get(T).__webglTexture,st,P+pe),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,be.get(W).__webglTexture,Dt,Z+pe)),K.blitFramebuffer(_,B,_+S,B+w,X,q,X+S,q+w,K.DEPTH_BUFFER_BIT,K.NEAREST);Zt.bindFramebuffer(K.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(st!==0||T.isRenderTargetTexture||be.has(T)){let Qt=be.get(T),Te=be.get(W);Zt.bindFramebuffer(K.READ_FRAMEBUFFER,ct),Zt.bindFramebuffer(K.DRAW_FRAMEBUFFER,et);for(let he=0;he<E;he++)Se?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Qt.__webglTexture,st,P+he):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Qt.__webglTexture,st),ce?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Te.__webglTexture,Dt,Z+he):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Te.__webglTexture,Dt),st!==0?K.blitFramebuffer(_,B,_+S,B+w,X,q,X+S,q+w,K.COLOR_BUFFER_BIT,K.NEAREST):ce?K.copyTexSubImage3D(G,Dt,X,q,Z+he,_,B,S,w):K.copyTexSubImage2D(G,Dt,X,q,_,B,S,w);Zt.bindFramebuffer(K.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else ce?T.isDataTexture||T.isData3DTexture?K.texSubImage3D(G,Dt,X,q,Z,S,w,E,V,J,L.data):W.isCompressedArrayTexture?K.compressedTexSubImage3D(G,Dt,X,q,Z,L.width,L.height,E,V,L.data):K.texSubImage3D(G,Dt,X,q,Z,S,w,E,V,J,L):T.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Dt,X,q,S,w,V,J,L.data):T.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Dt,X,q,L.width,L.height,V,L.data):K.texSubImage2D(K.TEXTURE_2D,Dt,X,q,S,w,V,J,L);Zt.pixelStorei(K.UNPACK_ROW_LENGTH,ft),Zt.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Rt),Zt.pixelStorei(K.UNPACK_SKIP_PIXELS,At),Zt.pixelStorei(K.UNPACK_SKIP_ROWS,Kt),Zt.pixelStorei(K.UNPACK_SKIP_IMAGES,oe),Dt===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&K.generateMipmap(G),Zt.unbindTexture()},this.initRenderTarget=function(T){be.get(T).__webglFramebuffer===void 0&&Ie.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ie.setTextureCube(T,0):T.isData3DTexture?Ie.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ie.setTexture2DArray(T,0):Ie.setTexture2D(T,0),Zt.unbindTexture()},this.resetState=function(){rt=0,nt=0,dt=null,Zt.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=on._getDrawingBufferColorSpace(t),e.unpackColorSpace=on._getUnpackColorSpace()}};var Re=Math.PI*2,Ze=(i,t,e)=>i<t?t:i>e?e:i,Tn=(i,t,e)=>i+(t-i)*e,un=(i,t,e)=>{let n=Ze((e-i)/(t-i),0,1);return n*n*(3-2*n)},je=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-e*n));function Bn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var wn=(i,t)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)};function In(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=wn(e,n),c=wn(e+1,n),h=wn(e,n+1),p=wn(e+1,n+1);return l+(c-l)*o+(h-l)*a+(l-c-h+p)*o*a}function Ji(i,t){let e=0,n=.5,s=1;for(let r=0;r<4;r++)e+=n*In(i*s,t*s),s*=2.03,n*=.5;return e/.9375}var Kl=new hn,Ql=new ui,xf=new di,C_=new O,_f=new O,ke=new Ee;function Bt(i,t){i.index&&(i=i.toNonIndexed()),i.attributes.uv&&i.deleteAttribute("uv"),i.attributes.uv1&&i.deleteAttribute("uv1");let e=i.attributes.position,n=e.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)typeof t=="function"?t(ke,e.getX(r),e.getY(r),e.getZ(r),r):ke.set(t),s[r*3]=ke.r,s[r*3+1]=ke.g,s[r*3+2]=ke.b;return i.setAttribute("color",new Ve(s,3)),i}function Wt(i,t=0,e=0,n=0,s=0,r=0,o=0,a=1,l=a,c=a){return xf.set(s,r,o),Ql.setFromEuler(xf),Kl.compose(C_.set(t,e,n),Ql,_f.set(a,l,c)),i.applyMatrix4(Kl),i}function Xh(i,t,e){let n=new O().subVectors(e,t),s=n.length();return Ql.setFromUnitVectors(new O(0,1,0),n.normalize()),Kl.compose(new O().addVectors(t,e).multiplyScalar(.5),Ql,_f.set(1,1,1)),i.applyMatrix4(Kl),s}function bn(i){let t=0;for(let a of i)t+=a.attributes.position.count;let e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*3),r=0;for(let a of i)a.attributes.normal||a.computeVertexNormals(),e.set(a.attributes.position.array,r*3),n.set(a.attributes.normal.array,r*3),s.set(a.attributes.color.array,r*3),r+=a.attributes.position.count,a.dispose();let o=new qe;return o.setAttribute("position",new Ve(e,3)),o.setAttribute("normal",new Ve(n,3)),o.setAttribute("color",new Ve(s,3)),o.computeBoundingSphere(),o}var an=(i,t,e,n)=>i.copy(Mi.set(t)).lerp(Uo.set(e),Ze(n,0,1)),Mi=new Ee,Uo=new Ee;function Si(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new so(s);return r.colorSpace=Xn,r.anisotropy=4,n&&(r.wrapS=r.wrapT=gr,r.repeat.set(n[0],n[1])),r}var oi=(i,t)=>{let e=(t-i)%Re;return e>Math.PI&&(e-=Re),e<-Math.PI&&(e+=Re),e},Cn=(i,t,e,n)=>i+oi(i,t)*(1-Math.exp(-e*n)),De=(i,t={})=>new Nn({color:i,shininess:30,specular:"#2A2A2A",...t}),Ys=i=>i.traverse(t=>{t.isMesh&&(t.castShadow=!0)});function jl(i="#2F78DA",t="#86C4F7",e="#F8E6C8",n=new O(.62,.3,-.73)){let s=new xt(new Oe(600,32,16),new yi({side:Un,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ee(i)},mid:{value:new Ee(t)},hor:{value:new Ee(e)},sunDir:{value:n.clone().normalize()}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top, mid, hor, sunDir; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float y = d.y;
        vec3 c = mix(hor, mid, smoothstep(-0.03, 0.2, y)); c = mix(c, top, smoothstep(0.2, 0.8, y));
        float s = max(dot(d, sunDir), 0.0);
        c += vec3(1.0, 0.86, 0.6) * (pow(s, 10.0) * 0.35 + pow(s, 90.0) * 0.6);
        c = mix(c, vec3(1.0, 0.97, 0.86), smoothstep(0.9982, 0.9992, s));
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));return s.renderOrder=-10,s.frustumCulled=!1,s}function tc(i){let t=new Zl({canvas:i,antialias:!0,powerPreference:"high-performance"});return t.toneMapping=wo,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=Gs,t}function yf(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}var ec=()=>Si(64,64,i=>{let t=i.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,64,64)});function nc(){let i=Si(256,256,(t,e,n)=>{let s=t.createImageData(e,n),r=(o,a)=>In(o/18,a/9)*.6+In(o/7,a/4)*.4;for(let o=0;o<n;o++)for(let a=0;a<e;a++){let l=r(a+1,o)-r(a-1,o),c=r(a,o+1)-r(a,o-1),h=(o*e+a)*4,p=-l*3,d=-c*3,u=Math.hypot(p,d,1);s.data[h]=(p/u*.5+.5)*255,s.data[h+1]=(d/u*.5+.5)*255,s.data[h+2]=(1/u*.5+.5)*255,s.data[h+3]=255}t.putImageData(s,0,0)},[1,1]);return i.colorSpace="",i}function wi(i,t,e,n){let s=i.clone();return s.onBeforeCompile=r=>{r.uniforms.uTime=n.time,r.uniforms.uWind=n.wind||{value:0},r.vertexShader=`uniform float uTime; uniform float uWind;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float hh = max(0.0, transformed.y - ${e.toFixed(2)});
      float ph = 0.0;
      #ifdef USE_INSTANCING
        ph = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.23;
      #endif
      float wk = 1.0 + uWind * 6.0;
      transformed.x += ((sin(uTime * (1.25 + uWind * 3.0) + ph) + 0.35 * sin(uTime * 2.7 + ph * 1.7)) * ${t.toFixed(4)} * wk + uWind * ${(t*8).toFixed(4)}) * hh * hh;
      transformed.z += cos(uTime * (1.05 + uWind * 2.5) + ph) * ${(t*.5).toFixed(4)} * wk * hh * hh;`)},s.customProgramCacheKey=()=>"sway"+t+"_"+e+(i.flatShading?"f":"")+i.side,s}function ic(i,t,e){let n=[],s=4.6+i()*1.6,r=new $n([new O(0,-.2,0),new O(t*.2,s*.35,.05),new O(t*.6,s*.7,.1),new O(t,s,.12)]),o=13;for(let c=0;c<o;c++){let h=r.getPoint(c/o),p=r.getPoint((c+1)/o),d=Tn(.25,.14,c/o),u=Bt(new xe(d*1.13,d*.9,1,9,1,!0),(A,m,f)=>an(A,c%2?"#7E5E3C":"#8D6C46","#A9875C",f+.5)),g=h.distanceTo(p);Wt(u,0,0,0,0,0,0,1,g*1.04,1),Xh(u,h,p),n.push(u)}let a=r.getPoint(1),l=new O(0,1,0);n.push(Wt(Bt(new zn(.28,1),"#6B5A2E"),a.x,a.y,a.z));for(let c=0;c<e;c++){let h=c/e*Re+i()*.35,p=new O(Math.cos(h),0,Math.sin(h)),d=2.6+i()*.9,u=.7+i()*.6,g=new $n([a.clone(),a.clone().addScaledVector(p,d*.3).addScaledVector(l,.55),a.clone().addScaledVector(p,d*.65).addScaledVector(l,.35-u*.2),a.clone().addScaledVector(p,d).addScaledVector(l,-u)]),A=14,m=[],f=[],M=[];for(let D=0;D<=A;D++){let I=D/A,x=g.getPoint(I),C=g.getTangent(I),k=new O().crossVectors(C,l).normalize(),F=Math.pow(Math.sin(Math.PI*Math.min(1,I*1.15)),.7)*.5*(D%2?1:.72);M.push([x,x.clone().addScaledVector(k,F).addScaledVector(l,-F*.42),x.clone().addScaledVector(k,-F).addScaledVector(l,-F*.42),I])}let R=(D,I,x)=>{m.push(D.x,D.y,D.z),an(ke,"#2E7A30","#6CC24A",I*.9+x*.25),f.push(ke.r,ke.g,ke.b)};for(let D=0;D<A;D++){let[I,x,C,k]=M[D],[F,Q,it,Y]=M[D+1];R(I,k,0),R(x,k,1),R(F,Y,0),R(x,k,1),R(Q,Y,1),R(F,Y,0),R(I,k,0),R(F,Y,0),R(C,k,1),R(C,k,1),R(F,Y,0),R(it,Y,1)}let b=new qe;b.setAttribute("position",new Ve(new Float32Array(m),3)),b.setAttribute("color",new Ve(new Float32Array(f),3)),b.computeVertexNormals(),n.push(b)}for(let c=0;c<2;c++){let h=i()*Re;for(let p=0;p<7;p++)n.push(Wt(Bt(new zn(.085,0),p%2?"#B85C1C":"#D07A26"),a.x+Math.cos(h)*.32+(i()-.5)*.16,a.y-.32-i()*.3,a.z+Math.sin(h)*.32+(i()-.5)*.16))}return bn(n)}function sc(i,t,e){let n=[Bt(Wt(new xe(.12,.2,1.7,7),0,.85,0),"#7A5230")];n.push(Bt(Wt(new xe(.05,.08,.8,5),.25,1.55,0,0,0,-.7),"#7A5230"));for(let s=0;s<7;s++){let r=.62+i()*.45,o=(i()-.5)*1.3,a=2.15+i()*.9,l=(i()-.5)*1.1,c=i();n.push(Wt(Bt(new zn(r,1),(h,p,d,u)=>an(h,e[0],e[1],.25+d/r*.45+c*.3+(wn(p*9,u*9)-.5)*.2)),o,a,l))}if(t)for(let s=0;s<9;s++){let r=i()*Re,o=i()*1.3;n.push(Wt(Bt(new zn(.08,1),t),Math.cos(r)*.95,2.1+Math.sin(o)*.9,Math.sin(r)*.85+.2))}return bn(n)}var rc=()=>bn([0,1,2,3].map(i=>Wt(Bt(new zn(.42-i*.05,1),(t,e,n)=>an(t,"#2F8A3C","#86D05C",.4+n*.9+i*.1)),(i-1.5)*.32,.3,i%2*.2))),oc=()=>Bt(new xi(.4,0),(i,t,e,n)=>an(i,"#8C877B","#C9C4B6",.4+e*1.2+wn(t*7,n*7)*.3)),vf=()=>bn([...Array(6)].map((i,t)=>{let e=t*1.1,n=.8+t%3*.22,s=Bt(new En(.025,n,3),(r,o,a)=>an(r,"#3C7F35","#8CC05A",a/n+.5));return Wt(s,Math.cos(e)*.12,n/2,Math.sin(e)*.12,Math.sin(e)*.15,0,Math.cos(e)*.15),t%2?bn([s,Wt(Bt(new xe(.035,.035,.16,6),"#6B4423"),Math.cos(e)*.12+Math.cos(e)*.15*n,n-.05,Math.sin(e)*.12)]):s})),ac=()=>(()=>{let i=[],t=[];for(let n=0;n<5;n++){let s=n/5*Re+.3,r=.22+n%3*.07,o=.035,a=Math.cos(s)*.05,l=Math.sin(s)*.05,c=a+Math.cos(s)*.1,h=l+Math.sin(s)*.1,p=-Math.sin(s)*o,d=Math.cos(s)*o;i.push(a-p,0,l-d,a+p,0,l+d,c,r,h);for(let u of[0,0,1])an(ke,"#5AA544","#B0E47A",u),t.push(ke.r,ke.g,ke.b)}let e=new qe;return e.setAttribute("position",new Ve(new Float32Array(i),3)),e.setAttribute("color",new Ve(new Float32Array(t),3)),e.computeVertexNormals(),e})();function lc(i,t){let e=new Ue,n=new Ue;e.add(n),n.position.y=.55;let s=i.body==="fire",r=i.body==="rainbow",o;r?o=De("#FFFFFF",{vertexColors:!0,shininess:50}):s?o=De("#FF8A1F",{emissive:"#FF3D00",emissiveIntensity:.55,shininess:20}):o=De(i.body,{shininess:38});let a=new Oe(.5,48,32);r&&(a=Bt(a,(et,rt,nt,dt)=>et.setHSL(((Math.atan2(dt,rt)/Re+1)%1+nt*.3)%1,.75,.62)));let l=new xt(a,o);l.scale.set(1.05,1,.95);let c=new xt(new Oe(.5,32,20),new yn({color:i.dark,side:Un}));c.scale.set(1.05*1.035,1.035,.95*1.035);let h=new xt(new Oe(.3,32,16),De(s||r?i.belly:new Ee(i.body).lerp(new Ee(i.belly),.5),{shininess:20}));h.position.set(0,-.25,.345),h.scale.set(.78,.5,.32),n.add(l,c,h);let p=[];for(let et of[-1,1]){let rt=new xt(new Oe(.15,20,12),De(i.dark,{shininess:20}));rt.scale.set(1.2,.55,1.45),rt.position.set(et*.22,-.49,.07),n.add(rt),p.push(rt)}let d=[],u=[],g=De("#FFFFFF",{shininess:90,specular:"#FFFFFF"}),A=De("#1B1F3B",{shininess:120,specular:"#FFFFFF"}),m=new yn({color:i.dark});for(let et of[-1,1]){let rt=new Ue;rt.position.set(et*.185,.15,.36);let nt=new xt(new Oe(.162,24,16),m);nt.scale.set(1,1.15,.6),nt.position.z=-.012;let dt=new xt(new Oe(.15,24,16),g);dt.scale.set(1,1.15,.72);let pt=new Ue;pt.position.z=.074;let St=new xt(new Oe(.07,16,12),A);St.scale.z=.6;let Ht=new xt(new Oe(.024,8,6),new yn({color:"#FFFFFF"}));Ht.position.set(.028,.035,.04),pt.add(St,Ht),rt.add(nt,dt,pt),n.add(rt),d.push(rt),u.push(pt)}let f=new xt(new Ii(.075,.017,6,16,Math.PI*.8),new yn({color:"#1B1F3B"}));f.rotation.z=Math.PI+Math.PI*.1,f.position.set(0,0,.462),f.rotation.x=-.2;let M=new xt(new Oe(.05,12,10),new yn({color:"#7A1F2B"}));M.scale.set(1,1.25,.4),M.position.set(0,-.04,.47),M.visible=!1,n.add(f,M);let R=new Ue;n.add(R);let b=[];if(i.acc==="blush"||i.id==="orange")for(let et of[-1,1]){let rt=new xt(new ni(.07,16),new yn({color:"#FF7896",transparent:!0,opacity:.5}));rt.position.set(et*.33,-.06,.36),rt.rotation.y=et*.75,rt.scale.y=.62,R.add(rt)}if(i.acc==="leaf"){let et=new xt(new xe(.018,.022,.14,6),De("#6B3E1F"));et.position.set(0,.54,0),et.rotation.z=-.15;let rt=new xt(new Oe(.15,16,8),De("#3FB950"));rt.scale.set(1,.18,.5),rt.position.set(.13,.6,0),rt.rotation.z=.45,R.add(et,rt)}else if(i.acc==="antenna")for(let et of[-1,1]){let rt=new xt(new xe(.014,.014,.32,6),De(i.dark));rt.position.set(et*.18,.58,0),rt.rotation.z=-et*.35;let nt=new xt(new Oe(.06,12,10),De("#FF5DA2",{emissive:"#FF5DA2",emissiveIntensity:.3}));nt.position.set(et*.235,.73,0),R.add(rt,nt)}else if(i.acc==="crown"){let et=De("#FFC400",{shininess:110,specular:"#FFF2B0",emissive:"#5A3D00",emissiveIntensity:.3}),rt=new xt(new xe(.25,.23,.12,28,1,!0),et);rt.material.side=en,rt.position.y=.48,R.add(rt);for(let nt=0;nt<6;nt++){let dt=nt/6*Re,pt=new xt(new En(.05,.16,6),et);pt.position.set(Math.sin(dt)*.24,.6,Math.cos(dt)*.24),R.add(pt);let St=new xt(new Oe(.028,8,6),De(nt%2?"#2EA8FF":"#E63946",{shininess:140,specular:"#FFFFFF"}));St.position.set(Math.sin(dt)*.255,.48,Math.cos(dt)*.255),R.add(St)}}else if(i.acc==="star"){let et=new _i;for(let nt=0;nt<10;nt++){let dt=nt/10*Re-Math.PI/2,pt=nt%2?.06:.14;nt?et.lineTo(Math.cos(dt)*pt,-Math.sin(dt)*pt):et.moveTo(Math.cos(dt)*pt,-Math.sin(dt)*pt)}let rt=new xt(new xo(et,{depth:.04,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:1}),De("#FFE066",{emissive:"#FFB703",emissiveIntensity:.5,shininess:90}));rt.position.set(0,.74,-.02),R.add(rt),R.userData.star=rt}else if(i.acc==="band"){let et=De("#E63946"),rt=new xt(new Ii(.43,.05,8,40),et);rt.rotation.x=Math.PI/2-.08,rt.position.y=.2,rt.scale.set(1.05,.95,1),R.add(rt);for(let nt of[-1,1]){let dt=new xt(new Qe(.06,.03,.3),et);dt.position.set(nt*.06,.18,-.55),dt.rotation.set(.5,nt*.3,0),R.add(dt),R.userData["tail"+nt]=dt}}else if(i.acc==="hat"){let et=De("#946232",{shininess:14}),rt=De("#4A2E14",{shininess:12}),nt=new xt(new xe(.46,.48,.035,36),et);nt.position.y=.4;let dt=new xt(new Oe(.29,28,14,0,Re,0,Math.PI/2),et);dt.position.y=.41,dt.scale.y=.75;let pt=new xt(new xe(.292,.295,.06,28,1,!0),rt);pt.material.side=en,pt.position.y=.45;let St=new Ue;St.add(nt,dt,pt),St.rotation.set(-.12,0,.06),R.add(St);let Ht=De("#E63946",{shininess:15,side:en}),ne=new xt(new Ii(.34,.04,8,36),Ht);ne.rotation.x=Math.PI/2,ne.position.y=-.4,ne.scale.set(1.05,.95,1),R.add(ne);let we=new _i;we.moveTo(-.2,0),we.lineTo(.2,0),we.lineTo(.02,-.17),we.closePath();let mt=new xt(new ls(we),Ht);mt.position.set(0,-.38,.33),mt.rotation.x=-.55,R.add(mt)}if(s){for(let rt=0;rt<7;rt++){let nt=rt/7*Math.PI-Math.PI/2,dt=new xt(new En(.09,.4,8,1,!0),new yn({color:rt%2?"#FFB13B":"#FF5A1F",transparent:!0,opacity:.9,depthWrite:!1,blending:ri}));dt.position.set(Math.sin(nt)*.28,.42+Math.cos(nt)*.05,-.12-Math.abs(Math.cos(nt))*.08),dt.userData.ph=rt,n.add(dt),b.push(dt)}let et=new Pi(new pi({map:t,color:"#FF6A1F",transparent:!0,opacity:.55,depthWrite:!1,blending:ri}));et.scale.setScalar(2.2),n.add(et)}Ys(e),c.castShadow=!1;let D=new Ue,I=["#E63946","#FFFFFF","#FFB703","#FFFFFF","#2EA8FF","#FFFFFF"],x=Bt(new Oe(1.7,24,8,0,Re,0,Math.PI*.42),(et,rt,nt,dt)=>et.set(I[Math.floor((Math.atan2(dt,rt)/Re+1)%1*12+1e-4)%6])),C=new Ye({vertexColors:!0,side:en,transparent:!0,opacity:1}),k=new xt(x,C);k.scale.set(1,.62,1),k.castShadow=!0;let F=new Float32Array(60),Q=new Ns(new qe,new ys({color:"#4A4A5A",transparent:!0,opacity:.85}));Q.geometry.setAttribute("position",new Ve(F,3)),Q.frustumCulled=!1;let it=new Ue;it.position.y=1.6,it.add(k),D.add(it,Q),D.visible=!1;let Y=new xt(x,C.clone());Y.visible=!1,Y.castShadow=!1;let ct=new xt(new qe,De("#8B5A2B",{shininess:5}));return ct.visible=!1,ct.castShadow=!0,{id:i.id,root:e,inner:n,eyes:d,pupils:u,smile:f,ooh:M,feet:p,acc:R,flames:b,bodyMat:o,fire:s,chute:D,canopy:k,canopyHolder:it,lines:Q,drop:Y,rope:ct,turn:0,blink:0,nextBlink:2}}function Zs(i={}){let t={skin:"#C98E62",thobe:"#F2EEE4",bisht:"#5B3A24",shmagh:"#C8102E",agal:"#141414",beard:"#4A4440",beads:!0,gold:!0,...i},e=new Ue,n=De(t.skin,{shininess:12}),s=De(t.thobe,{shininess:8}),r=De(t.bisht||t.thobe,{shininess:14,side:en}),o=new xt(new On([new ot(.001,0),new ot(.27,0),new ot(.275,.1),new ot(.25,.5),new ot(.232,.9),new ot(.222,1.2),new ot(.2,1.34),new ot(.12,1.42),new ot(.05,1.45)],30),s);e.add(o);for(let I of[-1,1]){let x=new xt(new Qe(.1,.04,.2),De("#4A2E18"));x.position.set(I*.09,.02,.2),e.add(x)}let a=new xt(new On([new ot(.245,.06),new ot(.295,.08),new ot(.285,.5),new ot(.265,.9),new ot(.255,1.2),new ot(.24,1.33),new ot(.16,1.41)],30,.62,Re-1.24),r);e.add(a),a.visible=!!t.bisht;let l=De("#D4AF37",{shininess:90,specular:"#FFF2B0"});for(let I of[-1,1]){let x=I*.62,C=[[.247,.08],[.297,.1],[.287,.5],[.267,.9],[.257,1.2],[.242,1.33],[.162,1.41]].map(([k,F])=>new O(Math.sin(x)*(k+.006),F,Math.cos(x)*(k+.006)));t.bisht&&t.gold&&e.add(new xt(new Fi(new $n(C),20,.014,6),l))}let c=[];for(let I of[-1,1]){let x=new Ue;x.position.set(I*.25,1.3,0),e.add(x);let C=new xt(new gi(.072,.28,4,10),r);C.position.y=-.18,x.add(C);let k=new Ue;k.position.y=-.36,x.add(k);let F=new xt(new gi(.068,.22,4,10),r);F.position.y=-.14,k.add(F);let Q=new xt(new xe(.055,.06,.05,10),s);Q.position.y=-.3,k.add(Q);let it=new xt(new Oe(.052,12,10),n);if(it.position.y=-.36,it.scale.set(.9,1.1,.8),k.add(it),I<0&&t.beads){let Y=new xt(new Ii(.06,.011,6,18),De("#E0A03C",{shininess:80,specular:"#FFF0C8"}));Y.position.set(0,-.44,.02),Y.rotation.y=.4,k.add(Y)}x.rotation.z=I*.12,k.rotation.x=-.25,c.push({sh:x,el:k,s:I})}let h=new xt(new xe(.06,.07,.1,10),n);h.position.y=1.46,e.add(h);let p=new Ue;p.position.y=1.6,e.add(p);let d=new xt(new Oe(.155,28,20),n);d.scale.set(.94,1.08,1),p.add(d);let u=new xt(new Oe(.034,10,8),De("#B97C52"));u.position.set(0,-.005,.15),u.scale.set(.85,1.1,1.25),p.add(u);for(let I of[-1,1]){let x=new xt(new Oe(.019,10,8),De("#1B140F",{shininess:120,specular:"#FFFFFF"}));x.position.set(I*.055,.025,.135),p.add(x);let C=new xt(new Qe(.065,.016,.02),De("#3A3430"));C.position.set(I*.056,.058,.138),C.rotation.z=-I*.12,p.add(C);let k=new xt(new gi(.019,.06,3,6),De("#2A2420"));k.position.set(I*.034,-.045,.142),k.rotation.z=I*1.15,p.add(k)}let g=new xt(new Oe(.16,24,10,Math.PI/2-1.2,2.4,Math.PI*.6,Math.PI*.3),De(t.beard==="none"?"#000":t.beard,{side:en,shininess:5}));p.add(g),g.visible=t.beard!=="none";let A=new xt(new Oe(.026,10,8),new yn({color:"#4A1A14"}));A.position.set(0,-.07,.143),A.scale.set(1,.3,.5),p.add(A);let m=Si(128,128,(I,x,C)=>{I.fillStyle="#FBF8F2",I.fillRect(0,0,x,C),I.fillStyle=t.shmagh;for(let k=0;k<C;k+=16)for(let F=0;F<x;F+=16)I.fillRect(F+2,k+2,7,7),I.fillRect(F+9,k+9,5,5),I.fillRect(F+9,k+2,2,2),I.fillRect(F+2,k+11,2,2)},[5,5]),f=new Ye({map:m,side:en}),M=new xt(new Oe(.168,28,14,0,Re,0,Math.PI*.52),f);M.rotation.x=-.42,M.position.y=.01,p.add(M);let R=new xt(new On([new ot(.168,.02),new ot(.18,-.06),new ot(.2,-.16),new ot(.24,-.26),new ot(.28,-.33)],28,1.15,Re-2.3),f);p.add(R);let b=new xt(new Zn(.2,.36),f);b.position.set(.17,-.25,.1),b.rotation.set(-.15,.6,-.08),p.add(b);let D=De(t.agal,{shininess:40});for(let[I,x]of[[.07,.154],[.097,.139]]){let C=new xt(new Ii(x,.015,8,36),D);C.position.set(0,I*.913,-I*.408),C.rotation.x=Math.PI/2-.42,p.add(C)}return Ys(e),{root:e,head:p,arms:c,mouth:A,yaw:0}}function Mf(i,t){t=t||{};let e=t.renderer||tc(i),n=new Ds,s=new Ee("#D3E3EA");n.background=s,n.fog=new Ls(s,60,340);let r=new Ln(62,.5,.1,1400),o={time:{value:0},wind:{value:0}},a=Bn(20261123),l=new Os("#CFE5FF","#7FA458",1.05);n.add(l);let c=new O(.55,.6,.5).normalize(),h=new ks("#FFE6BC",3);h.castShadow=!0,h.shadow.mapSize.set(2048,2048),Object.assign(h.shadow.camera,{left:-17,right:17,top:17,bottom:-17,near:1,far:140}),h.shadow.bias=-4e-4,h.shadow.normalBias=.025,h.shadow.radius=2.5,n.add(h,h.target);let p=jl();n.add(p);let d=120,u=11,g=z=>2.6*Math.sin(z*.055+.6)+1.5*Math.sin(z*.13+2.1)-.6,A=[[17,1],[45,-1],[76,1],[103,-1]].map(([z,tt])=>({x:z,z:Ze(g(z)+tt*6.4,-8.2,8.2),side:tt,rot:tt>0?Math.PI:0,base:0}));function m(z,tt){let y=Math.abs(tt),N=(Ji(z*.09+3.1,tt*.09)-.5)*.55,at=tt-g(z);N-=Math.exp(-(at*at)/1.3)*.75;let It=Ze((y-(u-1))/21,0,1);N+=21*It*It+un(30,50,y)*7,N+=(Ji(z*.07+(tt>0?9:2),y*.09)-.5)*5*un(u+1,u+9,y);let _t=z<2?(2-z)/22:z>d-2?(z-d+2)/30:0;return _t>0&&(N+=20*Math.min(1,_t)**2+un(1,2.5,_t)*6),N}for(let z of A)z.base=m(z.x,z.z)+.05;function f(z,tt){let y=m(z,tt);for(let N of A){let at=z-N.x,It=tt-N.z;at*at+It*It<49&&(y=Tn(y,N.base,un(7,4.5,Math.hypot(at,It))))}return y}let M=(z,tt)=>Math.hypot(f(z+.3,tt)-f(z-.3,tt),f(z,tt+.3)-f(z,tt-.3))/.6;{let z=[-150,-110,-80,-60,-45,-35,-27,-21,-16,-12.5];for(let Xt=-10;Xt<=130;Xt+=1)z.push(Xt);z.push(133,137,142,148,156,166,180,200,230,270);let tt=[0];for(let Xt=.6;Xt<14;Xt+=.6)tt.push(+Xt.toFixed(2));for(let Xt=14;Xt<36;Xt+=1.4)tt.push(+Xt.toFixed(2));for(let Xt=36;Xt<=80;Xt+=4)tt.push(Xt);tt.push(95,120,160);let y=[...tt.slice(1).reverse().map(Xt=>-Xt),...tt],N=z.length,at=y.length,It=new Float32Array(N*at*3),_t=new Float32Array(N*at*3);for(let Xt=0;Xt<at;Xt++)for(let Ut=0;Ut<N;Ut++){let Vt=z[Ut],Ft=y[Xt],_e=f(Vt,Ft),ye=(Xt*N+Ut)*3,$e=Math.abs(Ft);It[ye]=Vt,It[ye+1]=_e,It[ye+2]=Ft;let T=Ji(Vt*.07+11,Ft*.07),W=In(Vt*.5,Ft*.5);an(ke,"#5FAE3E","#9AD85E",T*1.3-.15+W*.2);let j=Math.abs(Ft-g(Vt));j<2.4&&$e<u+1&&ke.lerp(Mi.set(j<1?"#8F8A62":"#D9C891"),un(2.4,1.3,j));let $=un(1.2,5,_e)*un(u-.5,u+4,$e);if($>0){let st=.5+.5*Math.sin(_e*1.9+Ji(Vt*.05,Ft*.05)*4);an(Uo,"#B98F62","#DDBE8E",st),Uo.lerp(Mi.set("#8E6A48"),In(Vt*.35,_e*.6)*.35),ke.lerp(Uo,$)}$e>31&&ke.lerp(Mi.set("#B7A96E"),un(31,40,$e)*.7),_t[ye]=ke.r,_t[ye+1]=ke.g,_t[ye+2]=ke.b}let Ot=[];for(let Xt=0;Xt<at-1;Xt++)for(let Ut=0;Ut<N-1;Ut++){let Vt=Xt*N+Ut,Ft=Vt+1,_e=Vt+N,ye=_e+1;Ot.push(Vt,_e,Ft,Ft,_e,ye)}let gt=new qe;gt.setAttribute("position",new Ve(It,3)),gt.setAttribute("color",new Ve(_t,3)),gt.setIndex(Ot),gt.computeVertexNormals();let Lt=new xt(gt,new Ye({vertexColors:!0}));Lt.receiveShadow=!0,n.add(Lt)}let R=nc();R.colorSpace="";let b=z=>m(z,g(z))+.42,D=(()=>{let z=[],tt=[],y=[],N=0;for(let _t=-6;_t<=d+6;_t+=.5){let Ot=g(_t),gt=(g(_t+.1)-Ot)/.1,Lt=Math.hypot(1,gt),Xt=-gt/Lt,Ut=1/Lt,Vt=b(_t);for(let Ft of[-1.35,1.35])z.push(_t+Xt*Ft,Vt,Ot+Ut*Ft),tt.push(_t/3,Ft>0?1:0);if(N){let Ft=(N-1)*2;y.push(Ft,Ft+1,Ft+2,Ft+1,Ft+3,Ft+2)}N++}let at=new qe;at.setAttribute("position",new Ve(new Float32Array(z),3)),at.setAttribute("uv",new Ve(new Float32Array(tt),2)),at.setIndex(y),at.computeVertexNormals();let It=new xt(at,new Nn({color:"#3D9FD8",specular:"#FFFFFF",shininess:140,normalMap:R,transparent:!0,opacity:.88}));return It.material.normalScale.set(.7,.7),It.receiveShadow=!0,n.add(It),It})();{let z=[],tt=(Ot,gt,Lt,Xt,Ut,Vt)=>{let Ft=new En(Xt,Lt,30,12),_e=Ft.attributes.position;for(let ye=0;ye<_e.count;ye++){let $e=_e.getX(ye),T=_e.getY(ye),W=_e.getZ(ye),j=Math.atan2(W,$e),$=(T+Lt/2)/Lt,st=1+(In(j*2.2+Ut,$*3.5)-.5)*.45*(1-$*.4);_e.setXYZ(ye,$e*st,T+(In(j*4+Ut*2,$*5)-.5)*Lt*.07*(1-$),W*st)}Ft=Bt(Ft,(ye,$e,T,W)=>{let j=(T+Lt/2)/Lt,$=In(Math.atan2(W,$e)*6+Ut,j*9);an(ye,"#7F9CC0","#B4C6E0",j*1.15+$*.3),Vt<1&&j>Vt-.06+$*.08&&ye.set("#F7FAFF")}),z.push(Wt(Ft,Ot,Lt/2-2,gt))};tt(430,-40,175,110,1.3,.6),[[380,120,120,90],[400,-170,130,95],[-260,40,120,100],[-240,-140,110,90],[60,-260,140,110],[180,-250,120,95],[-60,-250,115,100],[60,260,140,110],[200,250,125,95],[-80,250,120,100],[330,260,110,90],[320,-260,120,95]].forEach(([Ot,gt,Lt,Xt],Ut)=>tt(Ot,gt,Lt,Xt,Ut*3.7,Lt>118?.74:2));let N=new xt(bn(z),new Ye({vertexColors:!0,flatShading:!0,fog:!1}));n.add(N);let at=new Ue,It=new xt(new xe(.25,.25,9,6),new Ye({color:"#5C3A1A"}));It.position.y=4.5;let _t=new xt(new Zn(6,3.6),new yn({color:"#FFB703",side:en,fog:!1}));_t.position.set(3,7,0),at.add(It,_t),at.position.set(430,171,-40),at.scale.setScalar(2.2),n.add(at)}let I=new Ye({vertexColors:!0}),x=new Ye({vertexColors:!0,flatShading:!0}),C=(z,tt,y)=>A.some(N=>Math.hypot(z-N.x,tt-N.z)<y),k=(z,tt,y)=>Math.abs(tt-g(z))<1.7+y||C(z,tt,6.8+y),F=[];function Q(z,tt,y,N={}){let at=new Map;for(let _t of y){let Ot=Math.floor((_t.x+40)/32);at.has(Ot)||at.set(Ot,[]),at.get(Ot).push(_t)}let It=new mn;for(let _t of at.values()){let Ot=new mi(z,tt,_t.length);_t.forEach((gt,Lt)=>{It.position.set(gt.x,gt.y,gt.z),It.rotation.set(gt.rx||0,gt.ry||0,gt.rz||0),gt.s3?It.scale.set(gt.s3[0],gt.s3[1],gt.s3[2]):It.scale.setScalar(gt.s||1),It.updateMatrix(),Ot.setMatrixAt(Lt,It.matrix),gt.color&&Ot.setColorAt(Lt,ke.set(gt.color))}),Ot.castShadow=!!N.cast,Ot.receiveShadow=N.receive!==!1,Ot.computeBoundingSphere(),n.add(Ot)}}let it=(z=0,tt=u-.6,y=-1,N=d+1)=>({x:y+a()*(N-y),z:(a()<.5?-1:1)*(z+a()*(tt-z))}),Y=wi(new Ye({vertexColors:!0,side:en}),.012,2.8,o),ct=[ic(Bn(3),1.1,9),ic(Bn(8),-.8,10),ic(Bn(15),.5,8)];{let z=[];for(let tt of[-1,1])for(let y=-2;y<d+2;y+=5+a()*5){let N=g(y)+tt*(2.3+a()*1.8);!C(y,N,7.5)&&Math.abs(N)<u&&z.push({x:y,z:N})}for(let tt=0;tt<16;tt++){let y=it(2,u-1);k(y.x,y.z,.6)||z.push(y)}ct.forEach((tt,y)=>{let N=z.filter((at,It)=>It%3===y).map(at=>(F.push({x:at.x,z:at.z,r:.38,tall:1}),{x:at.x,y:f(at.x,at.z)-.05,z:at.z,ry:a()*Re,s:.85+a()*.4}));Q(tt,Y,N,{cast:!0})})}let et=wi(new Ye({vertexColors:!0,flatShading:!0}),.01,1.2,o);[sc(Bn(21),"#E8443A",["#2F8A3C","#7CCB55"]),sc(Bn(33),null,["#3B9447","#8AD460"]),sc(Bn(41),"#FFB52E",["#2C7F3A","#6FC24F"])].forEach((z,tt)=>{let y=[];for(let N=0;y.length<9&&N<400;N++){let at=it(1.5,u-.5);k(at.x,at.z,1.4)||F.some(It=>Math.hypot(It.x-at.x,It.z-at.z)<3)||(F.push({x:at.x,z:at.z,r:.35,tall:1}),y.push({x:at.x,y:f(at.x,at.z)-.05,z:at.z,ry:a()*Re,s:.75+a()*.45}))}Q(z,et,y,{cast:!0})});let nt=rc(),dt=oc();{let z=[];for(let It=0;z.length<130&&It<3e3;It++){let _t=it(0,u+4);k(_t.x,_t.z,.5)||M(_t.x,_t.z)>.7||z.push({x:_t.x,y:f(_t.x,_t.z),z:_t.z,ry:a()*Re,s:.5+a()*.8})}Q(nt,x,z,{cast:!0});let tt=[];for(let It=0;tt.length<90&&It<2e3;It++){let _t=it(0,u);if(C(_t.x,_t.z,6)||Math.abs(_t.z-g(_t.x))<1.1)continue;let Ot=.35+a()*.8;Ot>.8&&F.push({x:_t.x,z:_t.z,r:.3*Ot}),tt.push({x:_t.x,y:f(_t.x,_t.z)+.04,z:_t.z,rx:a()*3,ry:a()*3,rz:a()*3,s3:[Ot,Ot*(.6+a()*.4),Ot*(.8+a()*.4)]})}let y=Bt(new xi(.5,1),(It,_t,Ot,gt)=>{an(It,"#9C7A56","#D2B387",.45+Ot*.9+(wn(_t*5,gt*5)-.5)*.4)}),N=[];for(let It=0;It<230;It++){let _t=-14+a()*(d+30),Ot=u+1+a()*26,gt=(a()<.5?-1:1)*Ot,Lt=.8+a()*3.2;N.push({x:_t,y:f(_t,gt)-Lt*.42,z:gt,rx:a()*3,ry:a()*3,rz:a()*3,s3:[Lt,Lt*(.5+a()*.4),Lt*(.8+a()*.5)]})}for(let It=0;It<26;It++){let _t=it(u-3,u+1);if(C(_t.x,_t.z,7))continue;let Ot=1.3+a()*1.6;F.push({x:_t.x,z:_t.z,r:.45*Ot}),N.push({x:_t.x,y:f(_t.x,_t.z)-.15,z:_t.z,rx:a()*3,ry:a()*3,rz:a()*3,s3:[Ot,Ot*.7,Ot]})}Q(dt,x,tt,{cast:!1}),Q(y,x,N,{cast:!1});let at=[];for(let It=0;It<140;It++){let _t=-40+a()*(d+80),Ot=26+a()*40,gt=(a()<.5?-1:1)*Ot;In(_t*.06,gt*.06)<.4||at.push({x:_t,y:f(_t,gt)-.2,z:gt,ry:a()*Re,s:1+a()*1.3})}Q(bn([Wt(Bt(new xe(.15,.22,1.6,5),"#6B4A2A"),0,.8,0),Wt(Bt(new zn(1.2,0),(It,_t,Ot)=>an(It,"#4F7F3A","#8DB45E",Ot/1.2*.5+.5)),0,2.3,0,0,0,0,1,.85,1)]),x,at,{cast:!1})}let pt=vf();{let z=[];for(let tt=-4;tt<d+4;tt+=.55)for(let y of[-1,1]){if(a()<.35)continue;let N=g(tt)+y*(1.05+a()*.55);C(tt,N,5)||z.push({x:tt,y:f(tt,N)-.05,z:N,ry:a()*Re,s:.7+a()*.6})}Q(pt,wi(I,.09,.2,o),z,{cast:!1})}let St=ac();{let z=[];for(let tt=0;z.length<7500&&tt<3e4;tt++){let y=it(0,u+3,-3,d+3);Math.abs(y.z-g(y.x))<1.15||C(y.x,y.z,3.9)||M(y.x,y.z)>.6||z.push({x:y.x,y:f(y.x,y.z)-.02,z:y.z,ry:a()*Re,s:.5+a()*.7})}Q(St,wi(new Ye({vertexColors:!0,side:en}),.5,0,o),z)}let Ht=bn([Wt(Bt(new xe(.007,.01,.24,3,1,!0),"#3E8E36"),0,.12,0),Wt(Bt(new ni(.02,6),"#FFD54A"),0,.248,.004,-1,0,0)]),ne=bn([0,1,2,3,4].map(z=>{let tt=z/5*Re;return Wt(Bt(new ni(.036,5),"#FFFFFF"),Math.cos(tt)*.035,Math.sin(tt)*.035,0,0,0,tt)}));Wt(ne,0,.245,0,-1,0,0);{let z=[],tt=["#FF6B9A","#FFFFFF","#FFD23F","#B28DFF","#FF8C42","#FF4D6D","#7FD1FF"];for(let N=0;N<9e3&&z.length<2600;N++){let at=it(0,u-.3,-2,d+2);Math.abs(at.z-g(at.x))<1.3||C(at.x,at.z,3.9)||In(at.x*.16,at.z*.16)<.42||z.push({x:at.x,y:f(at.x,at.z),z:at.z,ry:a()*Re*.25,s:1.2+a()*.8,color:tt[Math.floor(In(at.x*.3+40,at.z*.3)*tt.length*.999+a()*1.5)%tt.length]})}let y=new Ye({vertexColors:!0,side:en});Q(Ht,wi(I,.8,0,o),z.map(N=>({...N,color:null}))),Q(ne,wi(y,.8,0,o),z)}let we=new Ue;n.add(we);{let z=new Ye({color:"#FFFFFF",emissive:"#C9D8E6",emissiveIntensity:.35,flatShading:!1,fog:!0});for(let tt=0;tt<11;tt++){let y=new Ue;for(let N=0;N<6;N++){let at=new xt(new zn(1,2),z);at.position.set((N-2.5)*2.1+a(),a()*1.4,a()*1.5),at.scale.set(2.2+a()*1.6,1.5+a()*1.1,1.8+a()),y.add(at)}y.position.set(-60+a()*260,48+a()*26,-140+a()*280),y.userData.v=.4+a()*.6,we.add(y)}}let mt=[];{let z=new qe;z.setAttribute("position",new Ve(new Float32Array([0,0,0,.9,0,-.25,.9,0,.25]),3)),z.computeVertexNormals();let tt=new yn({color:"#34406A",side:en});for(let y=0;y<6;y++){let N=new Ue,at=new xt(z,tt),It=new xt(z,tt);It.scale.x=-1,N.add(at,It),N.userData={ph:a()*6,sp:.25+a()*.2,y:26+a()*14,cx:15+a()*90,cz:(a()-.5)*20,rad:10+a()*14,l:at,r:It},mt.push(N),n.add(N)}}let te=[];{let z=new _i;z.moveTo(0,0),z.bezierCurveTo(.05,.1,.16,.12,.15,.02),z.bezierCurveTo(.16,-.05,.08,-.1,0,-.02);let tt=new ls(z,6),y=["#FF8FD1","#FFD23F","#8FD6FF","#FFFFFF","#FF9E5E","#B28DFF"];for(let N=0;N<22;N++){let at=new Ye({color:y[N%y.length],side:en,emissive:y[N%y.length],emissiveIntensity:.25}),It=new Ue,_t=new xt(tt,at),Ot=new xt(tt,at);Ot.scale.x=-1;let gt=new xt(new gi(.012,.07,3,5),new yn({color:"#2B2233"}));gt.rotation.x=Math.PI/2,It.add(_t,Ot,gt),It.userData={l:_t,r:Ot,ax:6+a()*108,az:(a()-.5)*16,ph:a()*6},te.push(It),n.add(It)}}let ie=ec(),me=(()=>{let tt=new Float32Array(480),y=[];for(let It=0;It<160;It++)y.push([a()*30-15,.3+a()*3.5,-4+a()*12,a()*6]);let N=new qe;N.setAttribute("position",new Ve(tt,3));let at=new vs(N,new os({size:.07,map:ie,color:"#FFF4C4",transparent:!0,opacity:.85,depthWrite:!1,blending:ri}));return at.frustumCulled=!1,n.add(at),at.userData.seeds=y,at})(),kt=0,ae=-2.8,Ge=new O(4,0,-2.4),ve=1.05,fe=new Ue;n.add(fe);let Ke={mer:new O(ve,0,-.5),zone:new O(2.35,0,.35),pen:new O(-4.45,0,-1.75)},wt=[[-1.1,-2.8,1.25],[0,-2.8,1.3],[1.1,-2.8,1.25],[-.78,-.8,.55],[4,-2.4,.62],[1.95,-1.8,.35],[-2.05,-1.6,.4],[1.68,-.25,.14],[-1.68,-.25,.14],[ve,-.5,.42],[-5.8,-1,.3],[-5.8,-1.8,.3],[-5.8,-2.6,.3],[-5.1,-2.9,.3],[-4.45,-2.9,.3],[-3.8,-2.9,.3],[-3.1,-2.6,.3],[-3.1,-1.8,.3],[-3.1,-1,.3]],Gt={flames:[],glows:[],lantern:null,merchant:null};{let z=[],tt=(L,V)=>L.set(Math.floor((V+1.7)/.425)%2?"#EAD9B5":"#D9C39C");z.push(Wt(Bt(new Qe(3.4,1.95,2.4),tt),kt,.975,ae));for(let L of[-1,1])z.push(Wt(Bt(new Qe(3.62,.07,1.52),(V,J)=>V.set(Math.floor((J+1.81)/.4525)%2?"#C9AE82":"#B99D70")),kt,2.32,ae+L*.6,L*.59,0,0));let y=new _i;y.moveTo(-1.2,0),y.lineTo(1.2,0),y.lineTo(0,.8),y.closePath();for(let L of[-1,1])z.push(Wt(Bt(new ls(y),"#E3D0A8"),kt+L*1.7,1.95,ae,0,Math.PI/2,0));z.push(Wt(Bt(new Qe(.95,1.55,.05),"#3F2412"),kt-.25,.775,ae+1.22));for(let L of[-1,1]){let V=new _i;V.moveTo(0,0),V.lineTo(.42*L,0),V.lineTo(0,-1),V.closePath(),z.push(Wt(Bt(new ls(V),"#E9D7B0"),kt-.25+L*.04,1.55,ae+1.25))}let N=new O(0,2.15,ae+1.2),at=new O(0,1.98,ae+2.55),It=N.distanceTo(at),_t=Math.atan2(N.y-at.y,at.z-N.z);for(let L=0;L<8;L++){let V=kt-1.7+.2125+L*.425,J=L%2?"#FAF3E6":"#D7263D";z.push(Wt(Bt(new Qe(.425,.035,It),J),V,(N.y+at.y)/2,(N.z+at.z)/2,_t,0,0)),z.push(Wt(Bt(new ni(.2125,10,Math.PI,Math.PI),J),V,at.y,at.z+.01))}for(let L of[-1,1])z.push(Wt(Bt(new xe(.045,.055,2.05,7),"#5C3A1A"),kt+L*1.68,1.02,ae+2.55));z.push(Wt(Bt(new xe(.03,.03,.5,5),"#5C3A1A"),kt,2.95,ae+1.22,0,0,0));let Ot=kt-.78,gt=ae+2;z.push(Wt(Bt(new Qe(1,.06,.55),"#8B5A2B"),Ot,.74,gt));for(let[L,V]of[[-1,-1],[1,-1],[-1,1],[1,1]])z.push(Wt(Bt(new xe(.03,.03,.72,5),"#6B4220"),Ot+L*.44,.36,gt+V*.22));let Lt=L=>new On([new ot(.001,0),new ot(.09*L,0),new ot(.15*L,.07),new ot(.16*L,.17),new ot(.11*L,.28),new ot(.06*L,.32),new ot(.075*L,.36),new ot(.06*L,.37)],14);z.push(Wt(Bt(Lt(1),(L,V,J)=>L.set(J>.2&&J<.24?"#F2E3C6":"#C0612B")),Ot-.3,.77,gt)),z.push(Wt(Bt(Lt(.8),(L,V,J)=>L.set(J>.16&&J<.19?"#FFFFFF":"#2E86AB")),Ot+.02,.77,gt-.05)),z.push(Wt(Bt(new xe(.07,.07,.42,10),(L,V,J)=>L.set(Math.abs(J)>.17?"#E8C170":Math.floor((J+.2)/.06)%2?"#9B2335":"#1F3A68")),Ot+.3,.84,gt,0,0,Math.PI/2)),z.push(Wt(Bt(new Oe(.28,12,8),(L,V,J)=>an(L,"#C8B18A","#E2D2AE",J*2+.5)),kt-2.05,.27,ae+1.2,0,0,0,1,1.2,1)),z.push(Wt(Bt(new Oe(.22,12,8),(L,V,J)=>an(L,"#C8B18A","#E2D2AE",J*2+.5)),kt-2,.22,ae+1.75,0,0,0,1,1.15,1)),z.push(Wt(Bt(new Qe(.5,.42,.42),(L,V,J,G)=>L.set(Math.abs(J)>.17||Math.abs(V)>.21?"#7A4E25":"#A0703C")),kt+1.95,.21,ae+1,0,.3,0));let Xt=(L,V)=>{let J=L.distanceTo(V),G=Math.max(2,Math.round(J/.55));for(let ft=0;ft<=G;ft++){let Rt=L.clone().lerp(V,ft/G);z.push(Wt(Bt(new xe(.045,.055,.85,6),"#8B5A2B"),Rt.x,.42,Rt.z))}for(let ft of[.3,.62]){let Rt=Bt(new Qe(.05,1,.035),"#9C6A36");Wt(Rt,0,0,0,0,0,0,1,J,1),Xh(Rt,new O(L.x,ft,L.z),new O(V.x,ft,V.z)),z.push(Rt)}},Ut=new O(-5.8,0,-.75),Vt=new O(-5.8,0,-2.9),Ft=new O(-3.1,0,-2.9),_e=new O(-3.1,0,-.75);Xt(Ut,Vt),Xt(Vt,Ft),Xt(Ft,_e),z.push(Wt(Bt(new Qe(1,.18,.35),"#7A4E25"),-4.45,.09,-2.55)),z.push(Wt(Bt(new Qe(.9,.06,.28),"#D8C26A"),-4.45,.2,-2.55)),z.push(Wt(Bt(new Qe(1.75,.46,.06),"#7A4A22"),kt,2.66,ae+1.25));for(let L=0;L<9;L++){let V=L/9*Re;z.push(Wt(Bt(new xi(.11,0),(J,G,ft)=>an(J,"#7D776C","#B5AFA2",ft*4+.5)),Ge.x+Math.cos(V)*.42,.06,Ge.z+Math.sin(V)*.42,L,L*2,0,1,.7,1))}for(let L=0;L<3;L++){let V=L/3*Math.PI;z.push(Wt(Bt(new xe(.05,.05,.62,6),(J,G,ft)=>J.set(Math.abs(ft)>.27?"#C9A36B":"#4A2E18")),Ge.x,.1,Ge.z,0,V,Math.PI/2-.25))}z.push(Wt(Bt(new xe(.22,.25,.12,9),"#9A948A"),Ge.x-.75,.06,Ge.z+.35));for(let[L,V]of[[-.55,.75],[-.35,.82]])z.push(Wt(Bt(new On([new ot(.001,0),new ot(.022,0),new ot(.03,.045),new ot(.026,.046)],10),"#F4EFE6"),Ge.x+L,.12,Ge.z+V));let ye=new xt(bn(z),new Ye({vertexColors:!0,side:en}));ye.castShadow=!0,ye.receiveShadow=!0,fe.add(ye);let $e=Si(512,128,(L,V,J)=>{L.fillStyle="#8B5A2B",L.fillRect(0,0,V,J),L.strokeStyle="#E8C170",L.lineWidth=6,L.strokeRect(8,8,V-16,J-16),L.fillStyle="#FFF3D6",L.font='900 64px -apple-system, "SF Arabic", "Geeza Pro", system-ui, sans-serif',L.textAlign="center",L.textBaseline="middle";try{L.direction="rtl"}catch{}L.fillText(t.sign||"\u062E\u064A\u0645\u0629 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",V/2,J/2+4)}),T=new xt(new Zn(1.62,.38),new Ye({map:$e,emissive:"#3B2410",emissiveIntensity:.25}));T.position.set(kt,2.66,ae+1.29),fe.add(T);let W=Si(256,160,(L,V,J)=>{L.fillStyle="#8E1B26",L.fillRect(0,0,V,J),L.fillStyle="#1F2F5C",L.fillRect(10,10,V-20,J-20),L.fillStyle="#8E1B26",L.fillRect(20,20,V-40,J-40),L.strokeStyle="#E8C170",L.lineWidth=3,L.strokeRect(16,16,V-32,J-32),L.fillStyle="#E8C170";for(let ft=0;ft<14;ft++)L.beginPath(),L.arc(24+ft*16.3,14,3,0,Re),L.arc(24+ft*16.3,J-14,3,0,Re),L.fill();let G=(ft,Rt,At,Kt)=>{L.fillStyle=Kt,L.beginPath(),L.moveTo(ft,Rt-At),L.lineTo(ft+At*1.5,Rt),L.lineTo(ft,Rt+At),L.lineTo(ft-At*1.5,Rt),L.closePath(),L.fill()};G(V/2,J/2,44,"#1F2F5C"),G(V/2,J/2,30,"#E8C170"),G(V/2,J/2,16,"#8E1B26"),G(V/2,J/2,6,"#F4EFE6");for(let[ft,Rt]of[[50,45],[V-50,45],[50,J-45],[V-50,J-45]])G(ft,Rt,12,"#2E86AB");L.fillStyle="#F4EFE6";for(let ft=4;ft<J;ft+=8)L.fillRect(0,ft,4,3),L.fillRect(V-4,ft,4,3)}),j=new xt(new Zn(2,1.25),new Ye({map:W}));j.rotation.x=-Math.PI/2,j.rotation.z=.04,j.position.set(kt-.2,.02,ae+1.9),j.receiveShadow=!0,fe.add(j);let $=new Ue,st=new xt(new xe(.07,.07,.16,8),new yn({color:"#FFD36B"})),Dt=new xt(new En(.1,.08,8),new Ye({color:"#3B2A1A"}));Dt.position.y=.12;let S=new xt(new xe(.085,.07,.03,8),new Ye({color:"#3B2A1A"}));S.position.y=-.09;let w=new Pi(new pi({map:ie,color:"#FFC14D",transparent:!0,opacity:.75,depthWrite:!1,blending:ri}));w.scale.setScalar(.9),$.add(st,Dt,S,w),$.position.set(kt+1.68,1.72,ae+2.55),fe.add($),Gt.lantern=$;let E=L=>new yn({color:L,transparent:!0,opacity:.9,depthWrite:!1,blending:ri});[["#FF5A1F",.2,.55,0],["#FF9A2E",.15,.45,.07],["#FFE07A",.09,.3,-.05]].forEach(([L,V,J,G],ft)=>{let Rt=new xt(new En(V,J,10,1,!0),E(L));Rt.position.set(Ge.x+G,.12+J/2,Ge.z-G),Rt.userData={h0:J,i:ft},fe.add(Rt),Gt.flames.push(Rt)});let _=new Pi(new pi({map:ie,color:"#FF8A2E",transparent:!0,opacity:.6,depthWrite:!1,blending:ri}));_.position.set(Ge.x,.45,Ge.z),_.scale.setScalar(1.8),fe.add(_),Gt.glows.push(_);let B=new Nn({color:"#C9A13B",specular:"#FFE9A8",shininess:90}),P=new Ue,X=new xt(new On([new ot(.001,0),new ot(.1,0),new ot(.115,.02),new ot(.1,.09),new ot(.06,.14),new ot(.045,.2),new ot(.06,.24),new ot(.075,.26),new ot(.04,.3),new ot(.012,.34),new ot(.02,.36),new ot(.001,.37)],20),B),q=new xt(new Fi(new $n([new O(.07,.07,0),new O(.14,.14,0),new O(.17,.25,0),new O(.23,.3,0)]),10,.016,6),B),Z=new xt(new Ii(.07,.01,6,14,Math.PI*1.2),B);Z.position.set(-.07,.15,0),Z.rotation.z=Math.PI*.4,P.add(X,q,Z),P.position.set(Ge.x-.75,.12,Ge.z+.35),P.rotation.y=-.6,P.traverse(L=>{L.castShadow=!0}),fe.add(P)}let Pt=null;function ue(z){let tt=lc(z,ie);return n.add(tt.root,tt.chute,tt.drop,tt.rope),tt}function jt(){if(Pt){for(let z of[Pt.root,Pt.chute,Pt.drop,Pt.rope])n.remove(z),z.traverse(tt=>{tt.geometry&&tt.geometry.dispose(),tt.material&&[].concat(tt.material).forEach(y=>y.dispose())});Pt=null}}let ge=(()=>{let z=new Ue,tt=new Ue;z.add(tt);let y=De("#D9A066",{shininess:18}),N=De("#ECCB9C",{shininess:18}),at=De("#3B2A1A",{shininess:40}),It=[[-.56,0],[-.54,.1],[-.48,.17],[-.36,.2],[-.18,.18],[0,.185],[.18,.21],[.32,.215],[.44,.18],[.53,.11],[.57,0]],_t=new On(It.map(([j,$])=>new ot($,j)),36);{let j=_t.attributes.position;for(let $=0;$<j.count;$++){let st=j.getX($),Dt=j.getY($),S=j.getZ($),w=Math.exp(-(((Dt+.1)/.22)**2));st<0&&(st*=1-w*.28),j.setXYZ($,Dt,-st*(st<0?.95:1.05),S*.82)}_t.computeVertexNormals()}_t=Bt(_t,(j,$,st)=>{let Dt=st/.21;Dt<-.45?j.set("#FFF6E8"):Dt<-.15?an(j,"#6A3F1F","#8A5528",(Dt+.45)/.3):an(j,"#D9A066","#C58A50",(Dt-.3)*1.5),$<-.46&&Dt<.55&&j.set("#FFF6E8")});let Ot=new xt(_t,De("#FFFFFF",{vertexColors:!0,shininess:22}));Ot.position.y=.8,tt.add(Ot);let gt=new Ue;gt.position.set(-.56,.86,0);let Lt=new xt(new gi(.025,.1,3,6),De("#2B1D12"));Lt.position.y=-.06,gt.add(Lt),gt.rotation.z=.5,tt.add(gt);let Xt=new Ue;Xt.position.set(.42,.88,0),tt.add(Xt);let Ut=new xt(new xe(.055,.1,.5,14),y);Ut.position.y=.23,Ut.scale.z=.85,Xt.add(Ut);let Vt=new xt(new xe(.036,.06,.42,10),De("#FFF6E8"));Vt.position.set(.04,.21,0),Vt.rotation.z=-.08,Xt.add(Vt),Xt.rotation.z=-.6;let Ft=new Ue;Ft.position.set(0,.49,0),Ft.scale.setScalar(1.12),Xt.add(Ft);let _e=new xt(new Oe(.11,24,16),y);_e.scale.set(1.35,.9,.82),Ft.add(_e);let ye=new xt(new Oe(.075,18,12),N);ye.position.set(.14,-.045,0),ye.scale.set(1.25,.8,.85),Ft.add(ye);let $e=new xt(new Oe(.03,10,8),at);$e.position.set(.225,-.035,0),Ft.add($e);for(let j of[-1,1]){let $=new xt(new Oe(1,10,6),De("#5A3518"));$.scale.set(.1,.012,.01),$.position.set(.1,-.012,j*.07),$.rotation.z=-.28,Ft.add($);let st=new xt(new Oe(1,10,6),De("#FFF6E8"));st.scale.set(.095,.012,.01),st.position.set(.085,.022,j*.074),st.rotation.z=-.22,Ft.add(st);let Dt=new xt(new Oe(.026,12,10),De("#120C08",{shininess:160,specular:"#FFFFFF"}));Dt.position.set(.035,.035,j*.083),Ft.add(Dt);let S=new xt(new Oe(.07,12,8),y);S.scale.set(.45,1.25,.25),S.position.set(-.08,.1,j*.08),S.rotation.set(j*.6,0,.6),Ft.add(S);let w=new $n([new O(-.02,.07,j*.035),new O(-.09,.22,j*.07),new O(-.07,.38,j*.085),new O(0,.47,j*.06)]),E=new Fi(w,18,.019,7);{let B=E.attributes.position,P=8;for(let X=0;X<=18;X++){let q=w.getPointAt(X/18),Z=1-X/18*.7;for(let L=0;L<P;L++){let V=X*P+L;B.setXYZ(V,q.x+(B.getX(V)-q.x)*Z,q.y+(B.getY(V)-q.y)*Z,q.z+(B.getZ(V)-q.z)*Z)}}E.computeVertexNormals()}let _=Bt(E,(B,P,X)=>B.set(Math.floor(X*55)%2?"#3B2A1A":"#5A4330"));Ft.add(new xt(_,De("#FFFFFF",{vertexColors:!0,shininess:50})))}let T=new mn;T.position.set(0,.38,0),Xt.add(T);let W=[];for(let[j,$]of[[.34,1],[-.38,0]])for(let st of[-1,1]){let Dt=new Ue;if(Dt.position.set(j,.76,st*.09),tt.add(Dt),$){let P=new xt(new Oe(.075,12,10),y);P.scale.set(1.1,1.7,.6),P.position.set(.01,-.05,0),Dt.add(P)}else{let P=new xt(new Oe(.1,14,10),y);P.scale.set(1.15,1.6,.55),P.position.set(0,-.07,0),Dt.add(P)}let S=new xt(new xe($?.026:.03,$?.04:.055,.36,10),y);S.position.y=-.2,Dt.add(S);let w=new Ue;w.position.y=-.38,Dt.add(w);let E=new xt(new Oe(.024,8,6),N);w.add(E);let _=new xt(new xe(.014,.02,.34,8),N);_.position.y=-.17,w.add(_);let B=new xt(new xe(.017,.024,.045,8),De("#20150D",{shininess:60}));B.position.y=-.355,w.add(B),W.push({hip:Dt,knee:w,front:$,s:st})}return Ys(z),n.add(z),{root:z,body:tt,neck:Xt,head:Ft,tail:gt,legs:W,collar:T,yaw:-.25,z:0,neckA:-.6}})(),de=Zs();n.add(de.root);let Fe=new mi(new xe(.22,.22,.05,22),new Nn({color:"#FFC93C",specular:"#FFF4C0",shininess:90,emissive:"#6B4A00",emissiveIntensity:.55}),40);Fe.castShadow=!0,Fe.count=0,Fe.frustumCulled=!1,n.add(Fe);let Ne=new Ue;{let z=new xt(new _o(.95,1.18,48),new yn({color:"#FFD23F",transparent:!0,opacity:.9,depthWrite:!1,side:en}));z.rotation.x=-Math.PI/2,z.position.y=.03;let tt=new xt(new ni(.95,40),new yn({color:"#FFE38A",transparent:!0,opacity:.25,depthWrite:!1}));tt.rotation.x=-Math.PI/2,tt.position.y=.025;let y=new xt(new En(.2,.42,4),new Nn({color:"#FFB703",emissive:"#FF8A00",emissiveIntensity:.6,shininess:80}));y.rotation.x=Math.PI,y.position.y=1.9,Ne.add(z,tt,y),Ne.userData={ring:z,arrow:y},Ne.visible=!1,n.add(Ne)}let yt={phase:"fall",t:0,p:null,gz:null,coins:[],caught:!1,delivered:!1,met:!1,called:!1,coinsGot:0,camp:null,drop:null,focus:null,merW:new O,zoneW:new O,penW:new O},K=[];function tn(z){yt.camp=z,fe.position.set(z.x,z.base,z.z),fe.rotation.y=z.rot,fe.updateMatrixWorld(!0),yt.merW.copy(Ke.mer).applyMatrix4(fe.matrixWorld),yt.zoneW.copy(Ke.zone).applyMatrix4(fe.matrixWorld),yt.penW.copy(Ke.pen).applyMatrix4(fe.matrixWorld),de.root.position.copy(yt.merW),de.root.rotation.y=z.rot,de.yaw=z.rot,Ne.position.set(yt.zoneW.x,f(yt.zoneW.x,yt.zoneW.z),yt.zoneW.z),K=wt.map(([tt,y,N])=>{let at=new O(tt,0,y).applyMatrix4(fe.matrixWorld);return{x:at.x,z:at.z,r:N}})}function Be(z,tt,y,N){for(let at of N){let It=z-at.x,_t=tt-at.z,Ot=y+at.r,gt=It*It+_t*_t;if(gt<Ot*Ot&&gt>1e-8){let Lt=Math.sqrt(gt),Xt=(Ot-Lt)/Lt;z+=It*Xt,tt+=_t*Xt}}return[z,tt]}let ln=()=>F.concat(K),Zt=(z,tt)=>z>1.5&&z<d-1.5&&Math.abs(tt)<u-1.2&&M(z,tt)<.55;function cn(z,tt){(!Pt||Pt.id!==z.id)&&(jt(),Pt=ue(z));let y=Bn(tt>>>0);tn(A[Math.floor(y()*A.length)]);let N=32+y()*56,at=g(N)+(y()<.5?-3:3);yt.p={x:N,z:at,y:f(N,at)+42,vx:0,vz:0,vy:-3,face:0,chute:0,rot:0,landT:0,hopPh:0,speed:0,water:!1,run:!1},yt.coins=[];for(let Ot=0;Ot<20;Ot++){let gt=Ot*.62;yt.coins.push({x:N+Math.cos(gt)*3.2,z:at+Math.sin(gt)*3.2,y:yt.p.y-4-Ot*1.55,taken:!1})}let It=60,_t=0;for(let Ot=0;Ot<400;Ot++){let gt=6+y()*(d-12),Lt=(y()-.5)*2*(u-2.5);if(!(Math.hypot(gt-N,Lt-at)<36||Math.hypot(gt-yt.camp.x,Lt-yt.camp.z)<24||Math.abs(Lt-g(gt))<2.2||!Zt(gt,Lt))){It=gt,_t=Lt;break}}return yt.gz={x:It,z:_t,y:0,vx:0,vz:0,face:y()*Re,state:"graze",t:0,gt:2.5,sus:0,stamina:4,ph:0,triedLeap:!1,tx:It,tz:_t,fx:1,fz:0,stuck:0},Object.assign(yt,{phase:"fall",t:0,caught:!1,delivered:!1,met:!1,called:!1,coinsGot:0,drop:null,focus:null}),v.yaw=0,v.pitch=.5,v.dist=9,v.init=!1,ut=0,Jt=0,Mt=-1,{camp:A.indexOf(yt.camp),gazelle:[It,_t],start:[N,at]}}function be(z,tt){z.state="flee",z.t=0,z.stuck=0;let y=yt.p,N=Math.hypot(z.x-y.x,z.z-y.z)||1;z.fx=(z.x-y.x)/N,z.fz=(z.z-y.z)/N,tt.push("snort")}function Ie(z,tt){let y=yt.gz,N=yt.p;y.t+=z;let at=N.x-y.x,It=N.z-y.z,_t=Math.hypot(at,It)||.001,Ot=Math.atan2(It,at),gt=N.speed,Lt=Math.hypot(y.vx,y.vz)>.2;if(y.ph+=z*(y.state==="flee"?15:Lt?8:0),y.state!=="flee"&&y.state!=="leap"&&(y.stamina=Math.min(4,y.stamina+z*(y.state==="tired"?.5:.8))),!yt.caught&&(y.state==="graze"||y.state==="look"||y.state==="walk"||y.state==="alert")){let Ut=_t<22?1+(1-_t/22)*1.6:0,Vt=y.state!=="graze",_e=(gt>4?Vt?2.6:1.4:gt>.5?Vt?1.1:.06:0)*Ut;y.sus=Ze(y.sus+(_e>0?_e:-.3)*z,0,1)}let Xt=(Ut,Vt,Ft)=>{let _e=Ut-y.x,ye=Vt-y.z,$e=Math.hypot(_e,ye);if($e<.05)return y.vx=y.vz=0,$e;y.vx=je(y.vx,_e/$e*Ft,6,z),y.vz=je(y.vz,ye/$e*Ft,6,z);let T=y.x+y.vx*z,W=y.z+y.vz*z;return[T,W]=Be(T,W,.42,ln()),M(T,W)<.7&&(y.x=T,y.z=W),y.face=Cn(y.face,Math.atan2(y.vz,y.vx),7,z),$e};switch(y.state){case"graze":if(y.vx=y.vz=0,y.sus>.5)y.state="alert",y.t=0,tt.push("snort");else if(y.t>y.gt)if(y.t=0,Math.random()<.72)y.state="look";else for(let Ut=0;Ut<12;Ut++){let Vt=y.x+(Math.random()-.5)*14,Ft=y.z+(Math.random()-.5)*10;if(Zt(Vt,Ft)&&Math.abs(Ft-g(Vt))>1.6){y.tx=Vt,y.tz=Ft,y.state="walk";break}}break;case"look":y.vx=y.vz=0,_t<26&&(y.face=Cn(y.face,Ot,4,z)),y.sus>.5?(y.state="alert",y.t=0,tt.push("snort")):y.t>1.1&&(y.state="graze",y.t=0,y.gt=1.4+Math.random()*1.8);break;case"walk":if(y.sus>.5){y.state="alert",y.t=0,y.vx=y.vz=0,tt.push("snort");break}(Xt(y.tx,y.tz,1.1)<.4||y.t>6)&&(y.state="graze",y.t=0,y.vx=y.vz=0,y.gt=1.4+Math.random()*1.8);break;case"alert":y.vx=y.vz=0,y.face=Cn(y.face,Ot,8,z),y.sus>=1||_t<1.6?be(y,tt):y.sus<.3&&(y.state="graze",y.t=0,y.gt=1.2+Math.random()*1.2);break;case"flee":{y.stamina-=z;let Ut=8.2*(.55+.45*Math.max(0,y.stamina)/4),Vt=-at/_t,Ft=-It/_t;Math.abs(y.z)>5.5&&(Ft-=Math.sign(y.z)*(Math.abs(y.z)-5.5)*.45),y.x<8&&(Vt+=(8-y.x)*.35),y.x>d-8&&(Vt-=(y.x-d+8)*.35);let _e=Math.hypot(Vt,Ft)||1;y.fx=je(y.fx,Vt/_e,5,z),y.fz=je(y.fz,Ft/_e,5,z);let ye=Math.hypot(y.fx,y.fz)||1,$e=y.fx/ye,T=y.fz/ye,W=y.x+$e*Ut*z,j=y.z+T*Ut*z;[W,j]=Be(W,j,.42,ln());let $=Math.hypot(W-y.x,j-y.z);M(W,j)<.7&&Math.abs(j)<u+1&&W>1&&W<d-1&&(y.vx=(W-y.x)/z,y.vz=(j-y.z)/z,y.x=W,y.z=j),y.stuck=$<Ut*z*.35?y.stuck+z:0,y.face=Cn(y.face,Math.atan2(T,$e),10,z),y.stuck>.35&&_t<10?(y.state="cornered",y.t=0,y.vx=y.vz=0):y.stamina<=0?(y.state="tired",y.t=0,tt.push("tired")):_t>32&&y.t>1.5&&(y.state="graze",y.t=0,y.vx=y.vz=0,y.sus=.35,y.gt=1.5);break}case"tired":_t<9?Xt(y.x-at/_t*2,y.z-It/_t*2,2.3):y.vx=y.vz=0,y.stamina>3.2&&y.t>2.2&&(y.sus=.45,_t<6?be(y,tt):(y.state="graze",y.t=0));break;case"cornered":if(y.vx=y.vz=0,y.face=Cn(y.face,Ot,8,z),!y.triedLeap&&_t<4&&y.t>.4){let Ut=N.x+at/_t*4.5,Vt=N.z+It/_t*4.5;Zt(Ut,Vt)||(Ut=N.x+at/_t*3,Vt=Ze(N.z+It/_t*3,-(u-2),u-2)),Object.assign(y,{triedLeap:!0,state:"leap",t:0,from:[y.x,y.z],to:[Ut,Vt]}),tt.push("snort")}else y.t>4&&_t>9&&(y.state="graze",y.t=0,y.sus=.4);break;case"leap":{let Ut=Math.min(1,y.t/.75);y.x=Tn(y.from[0],y.to[0],Ut),y.z=Tn(y.from[1],y.to[1],Ut),y.y=Math.sin(Ut*Math.PI)*1.5,y.vx=(y.to[0]-y.from[0])/.75,y.vz=(y.to[1]-y.from[1])/.75,y.face=Math.atan2(y.vz,y.vx),Ut>=1&&(y.y=0,be(y,tt));break}case"follow":{let Ut=N.x-Math.cos(N.face)*1.45,Vt=N.z-Math.sin(N.face)*1.45,Ft=Math.hypot(Ut-y.x,Vt-y.z),_e=Math.min(7,Ft*3.2);Ft>.08?Xt(Ut,Vt,_e):y.vx=y.vz=0;break}case"pen":{let Ut=Math.hypot(yt.penW.x-y.x,yt.penW.z-y.z);Ut>.3?(y.vx=(yt.penW.x-y.x)/Ut*1.3,y.vz=(yt.penW.z-y.z)/Ut*1.3,y.x+=y.vx*z,y.z+=y.vz*z,y.face=Cn(y.face,Math.atan2(y.vz,y.vx),6,z)):y.vx=y.vz=0;break}}!yt.caught&&["graze","look","walk","alert","tired","cornered"].includes(y.state)&&_t<1.2&&y.y<.25&&(yt.caught=!0,y.state="follow",y.vx=y.vz=0,y.sus=0,yt.focus={t:2.2,dist:5.2,yaw:Math.atan2(y.z-N.z,y.x-N.x)-Math.PI/2},tt.push("catch"))}function U(z,tt){let y=[],N=yt.p;if(!N)return y;yt.t+=z,v.yaw+=tt.dyaw||0,v.pitch=Ze(v.pitch+(tt.dpitch||0),.06,1.15);let at=Math.cos(v.yaw),It=Math.sin(v.yaw),_t=-Math.sin(v.yaw),Ot=Math.cos(v.yaw),gt=at*(tt.jy||0)+_t*(tt.jx||0),Lt=It*(tt.jy||0)+Ot*(tt.jx||0),Xt=Math.hypot(gt,Lt);Xt>1e-4&&(gt/=Xt,Lt/=Xt);let Ut=Ze(tt.mag||0,0,1);if(yt.phase!=="walk"){yt.phase==="fall"?(N.rot+=z*8,N.vy=Math.max(N.vy-9.8*z,-16),yt.t>1.1&&(yt.phase="glide",y.push("chute"))):(N.chute=Math.min(1,N.chute+z*3),N.rot*=Math.pow(.015,z),N.vy+=(-2.4-N.vy)*Math.min(1,z*3));let Vt=(yt.phase==="glide"?4.6:1.5)*Ut;N.vx=je(N.vx,gt*Vt,3,z),N.vz=je(N.vz,Lt*Vt,3,z),N.x=Ze(N.x+N.vx*z,2,d-2),N.z=Ze(N.z+N.vz*z,-(u+3),u+3),N.y+=N.vy*z,Ut>.1&&(N.face=Cn(N.face,Math.atan2(Lt,gt),5,z));for(let _e of yt.coins)!_e.taken&&Math.hypot(_e.x-N.x,_e.z-N.z)<1.25&&Math.abs(_e.y-(N.y+.55))<1.3&&(_e.taken=!0,yt.coinsGot++,y.push(["coin",_e]));let Ft=f(N.x,N.z);N.y<=Ft&&(N.y=Ft,N.vy=0,N.rot=0,N.chute=0,N.landT=.35,yt.phase="walk",yt.drop={x:N.x+Math.cos(N.face)*1.2,z:N.z+Math.sin(N.face)*1.2,t:0,face:N.face},v.pitch=Math.min(v.pitch,.3),y.push("land"))}else{let Vt=Ut>.62&&!tt.sneak,Ft=Ut<.08?0:Vt?5.6:2.2*Ze(Ut/.62,.4,1);N.water=Math.abs(N.z-g(N.x))<.95;let _e=Ft*(N.water?.6:1);N.vx=je(N.vx,gt*_e,10,z),N.vz=je(N.vz,Lt*_e,10,z);let ye=N.x+N.vx*z,$e=N.z+N.vz*z,T=f(N.x,N.z),W=(Dt,S)=>{let w=Math.hypot(Dt-N.x,S-N.z);return w<1e-6||(f(Dt,S)-T)/w<.8};W(ye,$e)||(W(ye,N.z)?$e=N.z:W(N.x,$e)?ye=N.x:(ye=N.x,$e=N.z)),[ye,$e]=Be(ye,$e,.4,ln()),yt.caught&&!yt.delivered&&([ye,$e]=Be(ye,$e,.4,[{x:yt.gz.x,z:yt.gz.z,r:.25}])),ye=Ze(ye,.6,d-.6),N.speed=Math.hypot(ye-N.x,$e-N.z)/z,N.run=Vt&&N.speed>3,N.x=ye,N.z=$e,N.y=f(ye,$e),N.speed>.3&&(N.face=Cn(N.face,Math.atan2(N.vz,N.vx),12,z));let j=N.hopPh;N.hopPh=N.speed<.3?0:N.hopPh+N.speed*z*2.1,N.hopPh&&Math.floor(j/Math.PI)!==Math.floor(N.hopPh/Math.PI)&&y.push(N.water?"splash":["step",N.run]),N.landT=Math.max(0,N.landT-z),Ie(z,y);let $=Math.hypot(N.x-yt.merW.x,N.z-yt.merW.z);!yt.called&&$<24&&(yt.called=!0,y.push("call"));let st=Math.atan2(-Math.cos(yt.camp.rot),-Math.sin(yt.camp.rot));if(!yt.met&&$<4.2&&(yt.met=!0,yt.focus={t:3.4,dist:6.2,x:(N.x+yt.merW.x)/2,z:(N.z+yt.merW.z)/2,yaw:st,talk:!0},y.push("meet")),yt.caught&&!yt.delivered&&Math.hypot(N.x-yt.zoneW.x,N.z-yt.zoneW.z)<1.7){yt.delivered=!0,yt.gz.state="pen";let Dt=(N.x+yt.merW.x)/2,S=(N.z+yt.merW.z)/2;yt.focus={t:4.6,dist:6.6,x:Dt,z:S,yaw:st,talk:!0},y.push("deliver")}}return yt.drop&&(yt.drop.t+=z),yt.focus&&(yt.focus.t-=z,yt.focus.t<=0&&(yt.focus=null)),Tt(z),y}let v={yaw:0,pitch:.34,dist:5.2,init:!1,tgt:new O,pos:new O},ht=new O,bt=new O;function Tt(z){let tt=yt.p,y=yt.phase==="walk",N=yt.focus;ht.set(N&&N.x!=null?N.x:tt.x,tt.y+(y?1.45:.6),N&&N.z!=null?N.z:tt.z),N&&(v.yaw=Cn(v.yaw,N.yaw,2.2,z));let at=N?N.dist:y?6.2:9;v.init||(v.tgt.copy(ht),v.dist=at,v.init=!0),v.tgt.x=je(v.tgt.x,ht.x,y?14:8,z),v.tgt.z=je(v.tgt.z,ht.z,y?14:8,z),v.tgt.y=je(v.tgt.y,ht.y,y?10:12,z),v.dist=je(v.dist,at,3,z);let It=v.dist,_t=gt=>bt.set(v.tgt.x-Math.cos(v.yaw)*Math.cos(v.pitch)*gt,v.tgt.y+Math.sin(v.pitch)*gt,v.tgt.z-Math.sin(v.yaw)*Math.cos(v.pitch)*gt);for(let gt=1;gt<=6;gt++){let Lt=gt/6;if(_t(It*Lt),bt.y<f(bt.x,bt.z)+.45){It=Math.max(1.6,It*(Lt-1/6));break}}_t(It);for(let gt of F){if(!gt.tall)continue;let Lt=bt.x-gt.x,Xt=bt.z-gt.z,Ut=Lt*Lt+Xt*Xt,Vt=gt.r+.35;if(Ut<Vt*Vt&&bt.y<f(gt.x,gt.z)+6.5){let Ft=Math.sqrt(Ut)||.01;bt.x=gt.x+Lt/Ft*Vt,bt.z=gt.z+Xt/Ft*Vt}}let Ot=f(bt.x,bt.z)+.45;bt.y<Ot&&(bt.y=Ot),v.pos.copy(bt)}function $t(){return(v.yaw*180/Math.PI%360+360)%360}let qt=0,Mt=-1,ut=0,Jt=0,re=2,H=390,vt=844,Ct=new O,lt=new O,Yt=new mn;Yt.rotation.order="YXZ";function ee(z,tt,y){H=z,vt=tt,re=y,e.setPixelRatio(y),e.setSize(z,tt,!1),r.aspect=z/tt,r.updateProjectionMatrix()}let Pe=z=>Math.PI/2-z;function zt(z,tt){let y=yt.p,N=Pt,at=yt.phase==="walk",It=at?Math.abs(Math.sin(y.hopPh))*(y.run?.17:.08):0;N.root.position.set(y.x,y.y+It,y.z),N.turn=Cn(N.turn||Pe(y.face),Pe(y.face),14,tt),N.root.rotation.y=N.turn,N.inner.rotation.z=-y.rot;let _t=y.landT>0?y.landT*2.4:0;at&&y.speed>.3&&(_t+=(1-Math.abs(Math.sin(y.hopPh)))*.22-.07),N.inner.scale.set(1+.2*_t,1-.22*_t,1+.2*_t),N.inner.position.y=.55*(1-.22*_t);for(let[Ut,Vt]of N.feet.entries())Vt.position.y=-.49+(at&&y.speed>.3?Math.max(0,Math.sin(y.hopPh*2+Ut*Math.PI))*.06:0);let Ot=yt.phase==="fall";N.nextBlink-=tt,N.nextBlink<0&&(N.blink=.14,N.nextBlink=2.5+Math.random()*2.5),N.blink=Math.max(0,N.blink-tt);let gt=Ot?1.15:N.blink>0?.12:1;for(let Ut of N.eyes)Ut.scale.set(Ot?1.08:1,gt,1);for(let Ut of N.pupils)Ut.scale.setScalar(Ot?.72:1),Ut.position.x=0,Ut.position.y=at?0:-.035;N.smile.visible=!Ot,N.ooh.visible=Ot,N.acc.userData.star&&(N.acc.userData.star.rotation.y=z*2);for(let Ut of[-1,1]){let Vt=N.acc.userData["tail"+Ut];Vt&&(Vt.rotation.x=.5+Math.sin(z*12+Ut)*.25)}if(N.fire){N.bodyMat.emissiveIntensity=.5+Math.sin(z*13)*.1+Math.sin(z*7.3)*.08;for(let Ut of N.flames){let Vt=.8+Math.sin(z*14+Ut.userData.ph*1.7)*.25;Ut.scale.set(1,Vt,1)}}let Lt=N.chute;if(Lt.visible=y.chute>.01,Lt.visible){Lt.position.copy(N.root.position),Lt.rotation.y=N.root.rotation.y;let Ut=y.chute,Vt=Ut<1?Tn(.15,1,Ut)+Math.sin(Ut*Math.PI)*.12:1;N.canopyHolder.scale.set(Vt,Tn(.4,1,Ut),Vt),N.canopyHolder.position.y=Tn(1,2.25,Ut),Lt.rotation.z=-(Math.hypot(y.vx,y.vz)*.05)+Math.sin(z*1.5)*.05,Lt.rotation.x=Math.sin(z*1.1)*.05;let Ft=N.lines.geometry.attributes.position,_e=N.canopyHolder.position.y,ye=1.7*Math.sin(Math.PI*.42)*Vt,$e=_e+1.7*Math.cos(Math.PI*.42)*.62*Tn(.4,1,Ut);for(let T=0;T<10;T++){let W=T/10*Re,j=T%2?.22:-.22;Ft.setXYZ(T*2,Math.cos(W)*ye,$e,Math.sin(W)*ye),Ft.setXYZ(T*2+1,j,.85,0)}Ft.needsUpdate=!0}let Xt=yt.drop;if(N.drop.visible=!!(Xt&&Xt.t<2.4),N.drop.visible){let Ut=Ze(1-Xt.t*1.2,.1,1);N.drop.position.set(Xt.x,f(Xt.x,Xt.z)+.02,Xt.z),N.drop.scale.set(1.05,.62*Ut,1.05),N.drop.material.opacity=Ze(1-(Xt.t-1.4),0,1)}}function Xe(z,tt){let y=yt.gz,N=ge,at=y.state,It=Math.hypot(y.vx,y.vz)>.25,_t=at==="flee"||at==="leap",Ot=at==="tired",gt=It?Math.abs(Math.sin(y.ph))*(_t?.07:.025):Ot?Math.sin(z*9)*.008:0;N.root.position.set(y.x,f(y.x,y.z)+y.y,y.z),N.body.position.y=gt,N.yaw=Cn(N.yaw,-y.face,_t?14:8,tt),N.root.rotation.y=N.yaw,N.body.rotation.z=_t?Math.sin(y.ph*2)*.05:0;let Lt=at==="graze"||at==="pen"&&!It,Xt=Lt?-2.05:Ot?-1.15:_t?-.95:at==="alert"||at==="look"||at==="cornered"?-.32:-.6;N.neckA=je(N.neckA,Xt,Lt?3:7,tt),N.neck.rotation.z=N.neckA,N.head.rotation.z=Lt?.5+Math.sin(z*7)*.08:at==="alert"||at==="look"?.2:.35,N.head.rotation.y=at==="look"||at==="alert"||at==="cornered"?Math.sin(z*1.6)*.25:0,N.tail.rotation.z=.5+(at==="alert"||_t?.9:Math.sin(z*3)*.2);let Ut=_t?.6:Ot?.28:.36,Vt=at==="leap";for(let Ft of N.legs){let _e=Ft.front?Ft.s>0?0:Math.PI:(Ft.s>0?Math.PI:0)+(_t?.6:0);if(Vt){Ft.hip.rotation.z=Ft.front?.9:-.9,Ft.knee.rotation.z=Ft.front?-1.2:1.1;continue}if(It){let ye=Math.sin(y.ph+_e);Ft.hip.rotation.z=ye*Ut,Ft.knee.rotation.z=(Ft.front?-1:1)*Math.max(0,-Math.cos(y.ph+_e))*Ut*1.1}else Ft.hip.rotation.z=je(Ft.hip.rotation.z,0,8,tt),Ft.knee.rotation.z=je(Ft.knee.rotation.z,0,8,tt)}}function Me(z,tt,y){let N=de,at=yt.p,It=at.x-yt.merW.x,_t=at.z-yt.merW.z,Ot=Math.hypot(It,_t),gt=Ot<16||!!y,Lt=gt?Math.atan2(It,_t):yt.camp.rot+.15*Math.sin(z*.3);yt.focus&&yt.focus.talk&&(Lt=yt.camp.rot+Ze(oi(yt.camp.rot,Math.atan2(It,_t)),-.7,.7)),N.yaw=Cn(N.yaw,Lt,3,tt),N.root.rotation.y=N.yaw,N.root.position.set(yt.merW.x,yt.camp.base,yt.merW.z),N.root.scale.y=1+Math.sin(z*1.7)*.007;let Xt=!!(y&&y.shown<[...y.text].length);N.mouth.scale.y=Xt?.25+Math.abs(Math.sin(z*15))*.9:.3,N.head.rotation.x=Xt?Math.sin(z*5)*.05:0;let[Ut,Vt]=N.arms;if(yt.delivered){for(let Ft of N.arms)Ft.sh.rotation.z=je(Ft.sh.rotation.z,Ft.s*2.5,6,tt),Ft.el.rotation.x=je(Ft.el.rotation.x,-.3+Math.sin(z*9+Ft.s)*.3,8,tt);N.root.position.y=yt.camp.base+Math.abs(Math.sin(z*6))*.06}else if(yt.caught&&gt)Vt.sh.rotation.z=je(Vt.sh.rotation.z,1.35,5,tt),Vt.el.rotation.x=je(Vt.el.rotation.x,0,5,tt),Vt.sh.rotation.x=je(Vt.sh.rotation.x,-.2,5,tt),Ut.sh.rotation.z=je(Ut.sh.rotation.z,-.12,5,tt);else if(gt&&Ot>2.5)Vt.sh.rotation.z=je(Vt.sh.rotation.z,2.55,5,tt),Vt.el.rotation.x=je(Vt.el.rotation.x,0,5,tt),Vt.el.rotation.z=Math.sin(z*8)*.45,Vt.sh.rotation.x=0,Ut.sh.rotation.z=je(Ut.sh.rotation.z,-.12,5,tt);else for(let Ft of N.arms)Ft.sh.rotation.z=je(Ft.sh.rotation.z,Ft.s*.12,4,tt),Ft.el.rotation.z=je(Ft.el.rotation.z,0,4,tt),Ft.el.rotation.x=je(Ft.el.rotation.x,-.25,4,tt),Ft.sh.rotation.x=0}function se(){let z=Pt.rope;if(z.visible=yt.caught&&!yt.delivered,!z.visible)return;Pt.root.updateMatrixWorld(),ge.root.updateMatrixWorld();let tt=yt.p,y=Ct.set(tt.x-Math.cos(tt.face)*.3,Pt.root.position.y+.5,tt.z-Math.sin(tt.face)*.3),N=ge.collar.getWorldPosition(lt),at=y.clone().lerp(N,.5);at.y=Math.min(y.y,N.y)-.25,z.geometry.dispose(),z.geometry=new Fi(new Us(y.clone(),at,N.clone()),18,.016,5)}function Je(z,tt={}){let y=performance.now(),N=qt?Ze((y-qt)/1e3,0,.1):1/60;qt=y;let at=Mt>=0?Ze(z-Mt,0,.1):1/60;if(Mt=z,o.time.value=z,Jt++,ut=ut*.97+(N>1/38?1:0)*.03,Jt>90&&ut>.6&&re>1.01&&(ee(H,vt,Math.max(1,re-.25)),ut=0,Jt=0),!Pt||!yt.p)return;zt(z,at),Xe(z,at),Me(z,at,tt.dlg),se();let It=0;for(let gt=0;gt<yt.coins.length&&It<40;gt++){let Lt=yt.coins[gt];Lt.taken||(Yt.position.set(Lt.x,Lt.y,Lt.z),Yt.rotation.set(Math.PI/2,z*3+gt,0),Yt.scale.setScalar(1),Yt.updateMatrix(),Fe.setMatrixAt(It++,Yt.matrix))}if(Fe.count=It,Fe.instanceMatrix.needsUpdate=!0,Ne.visible=yt.caught&&!yt.delivered,Ne.visible){let gt=.5+.5*Math.sin(z*5);Ne.userData.ring.scale.setScalar(1+gt*.08),Ne.userData.arrow.position.y=1.9+gt*.25,Ne.userData.arrow.rotation.y=z*2}for(let gt of Gt.flames){let Lt=.75+Math.sin(z*13+gt.userData.i*2)*.18+Math.sin(z*23+gt.userData.i)*.08;gt.scale.set(1+Math.sin(z*9+gt.userData.i)*.08,Lt,1),gt.position.y=.12+gt.userData.h0*Lt/2}for(let gt of Gt.glows)gt.material.opacity=.5+Math.sin(z*11)*.08;Gt.lantern.rotation.z=Math.sin(z*1.6)*.08;for(let gt of te){let Lt=gt.userData,Xt=Lt.ax+Math.sin(z*.45+Lt.ph)*2.2,Ut=Lt.az+Math.sin(z*.7+Lt.ph*2)*.9,Vt=f(Xt,Ut)+.7+Math.sin(z*1.3+Lt.ph)*.35+Math.abs(Math.sin(z*4+Lt.ph))*.12;gt.position.set(Xt,Vt,Ut),gt.rotation.y=Math.cos(z*.45+Lt.ph)>0?-Math.PI/2:Math.PI/2;let Ft=Math.sin(z*22+Lt.ph)*1.1;Lt.l.rotation.y=Ft,Lt.r.rotation.y=-Ft}for(let gt of mt){let Lt=gt.userData,Xt=z*Lt.sp+Lt.ph;gt.position.set(Lt.cx+Math.cos(Xt)*Lt.rad,Lt.y+Math.sin(z+Lt.ph)*.8,Lt.cz+Math.sin(Xt)*Lt.rad),gt.rotation.y=-Xt;let Ut=Math.sin(z*8+Lt.ph)*.6;Lt.l.rotation.z=Ut,Lt.r.rotation.z=-Ut}for(let gt of we.children)gt.position.x+=gt.userData.v*at,gt.position.x>220&&(gt.position.x=-80);if(r.position.copy(v.pos),r.lookAt(v.tgt),tt.shake>0){let gt=tt.shake*.25;r.position.x+=(Math.random()-.5)*gt,r.position.y+=(Math.random()-.5)*gt}p.position.copy(r.position);{let gt=me.userData.seeds,Lt=me.geometry.attributes.position,Xt=yt.p;for(let Ut=0;Ut<gt.length;Ut++){let[Vt,Ft,_e,ye]=gt[Ut];Lt.setXYZ(Ut,Xt.x+Vt*.8+Math.sin(z*.3+ye)*.8,Xt.y+Ft+Math.sin(z*.5+ye*2)*.3,Xt.z+(_e-4)*.9+Math.cos(z*.25+ye)*.6)}Lt.needsUpdate=!0}let _t=Math.round(yt.p.x/.25)*.25,Ot=Math.round(yt.p.z/.25)*.25;h.target.position.set(_t,yt.p.y,Ot),h.position.set(_t+c.x*60,yt.p.y+c.y*60,Ot+c.z*60),e.render(n,r)}let gn=new O;function ai(z,tt,y){return gn.set(z,tt,y).project(r),{x:(gn.x+1)/2,y:(1-gn.y)/2,vis:gn.z<1&&gn.z>-1}}function Js(z=160){n.updateMatrixWorld();let tt=new O;de.head.getWorldPosition(tt);let y=e.domElement.width,N=e.domElement.height,at=new Ln(28,y/N,.05,1200),It=new O(Math.sin(de.root.rotation.y),0,Math.cos(de.root.rotation.y));at.position.copy(tt).addScaledVector(It,1.75).add(new O(0,.05,0)),at.lookAt(tt.x,tt.y-.02,tt.z),p.position.copy(at.position),h.target.position.copy(tt),h.position.set(tt.x+c.x*60,tt.y+c.y*60,tt.z+c.z*60);let _t=[Pt&&Pt.root.visible,ge.root.visible];Pt&&(Pt.root.visible=!1),ge.root.visible=!1,e.render(n,at),Pt&&(Pt.root.visible=_t[0]),ge.root.visible=_t[1];let Ot=document.createElement("canvas");Ot.width=Ot.height=z;let gt=Math.min(y,N);return Ot.getContext("2d").drawImage(e.domElement,(y-gt)/2,(N-gt)/2,gt,gt,0,0,z,z),Ot.toDataURL("image/jpeg",.9)}function Ts(){let z=e.domElement.width,tt=e.domElement.height,y=z/tt,N=-8,at=d+8,It=(at-N)/2,_t=It*y,Ot=new Bs(-_t,_t,It,-It,1,600);Ot.position.set((N+at)/2,300,0),Ot.up.set(1,0,0),Ot.lookAt((N+at)/2,0,0);let gt=[fe,de.root,ge.root,Fe,Ne,we,me,...mt,...te,...Pt?[Pt.root,Pt.chute,Pt.drop,Pt.rope]:[]],Lt=gt.map(_e=>_e.visible);gt.forEach(_e=>{_e.visible=!1});let Xt=n.fog.near,Ut=n.fog.far;n.fog.near=1e5,n.fog.far=2e5;let Vt=h.shadow.camera.right;Object.assign(h.shadow.camera,{left:-80,right:80,top:80,bottom:-80}),h.shadow.camera.updateProjectionMatrix(),h.target.position.set(d/2,0,0),h.position.set(d/2+c.x*120,c.y*120,c.z*120),e.render(n,Ot),Object.assign(h.shadow.camera,{left:-Vt,right:Vt,top:Vt,bottom:-Vt}),h.shadow.camera.updateProjectionMatrix(),n.fog.near=Xt,n.fog.far=Ut,gt.forEach((_e,ye)=>{_e.visible=Lt[ye]});let Ft=document.createElement("canvas");return Ft.width=Math.round(z/Math.max(1,re/1.5)),Ft.height=Math.round(tt/Math.max(1,re/1.5)),Ft.getContext("2d").drawImage(e.domElement,0,0,Ft.width,Ft.height),{canvas:Ft,x0:N,x1:at,z0:-_t,z1:_t}}function zo(){e.dispose()}return{setSize:ee,enter:cn,step:U,render:Je,project:ai,portrait:Js,mapShot:Ts,heading:$t,ground:f,S:yt,cam:v,info:{VL:d,FLOOR:u,CAMPS:A},renderer:e,scene:n,camera:r,U:o,get pr(){return re}}}function Sf(i){i=i||{};let t=i.renderer,e=new Ds,n=new Ee("#C6D6DE");e.background=n,e.fog=new Ls(n,22,120);let s=new Ln(62,.5,.1,1600),r={time:{value:0},wind:{value:0}},o=Bn(9091),a=new Os("#D2E6FF","#5E7F48",1);e.add(a);let l=new O(.5,.75,.42).normalize(),c=new ks("#FFE9C4",2.8);c.castShadow=!0,c.shadow.mapSize.set(2048,2048),Object.assign(c.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:1,far:160}),c.shadow.bias=-5e-4,c.shadow.normalBias=.03,c.shadow.radius=2.5,e.add(c,c.target);let h=jl("#3A7FD6","#9CCBF2","#EFE7D6",new O(.6,.35,-.7));e.add(h);let p=ec(),d=new Ye({vertexColors:!0}),u=new Ye({vertexColors:!0,flatShading:!0}),g=13.3,A=95,m=0,f=Math.PI/180,M=(S,w)=>[Math.cos(w*f)*S,Math.sin(w*f)*S];function R(S){if(S<=g+1)return A;let w=40+55*Math.pow(1-Ze((S-g-1)/(72-g-1),0,1),1.12),E=36+4*(1-Ze((S-72)/48,0,1)),_=36*Math.pow(1-Ze((S-120)/60,0,1),1.25)-un(180,230,S)*14;return Tn(Tn(w,E,un(68,76,S)),_,un(116,124,S))}let b=[],D=(S,w)=>{let E=Math.hypot(S,w);return R(E)+(Ji(S*.028+5,w*.028)-.5)*9*un(g+2,g+12,E)*(1-un(200,260,E)*.5)},I=(S,w)=>{let E=Math.hypot(S,w),_=D(S,w);for(let B of b){let P=Math.atan2(w,S),X=Math.abs(oi(B.a,P))*E;E>B.r0&&E<B.r1&&X<B.w&&(_-=B.depth*un(B.w,B.w*.25,X)*un(B.r0,B.r0+4,E)*un(B.r1,B.r1-4,E))}return _};b.push({a:118.5*f,r0:108,r1:190,w:7,depth:13}),b.push({a:101*f,r0:22,r1:64,w:5.5,depth:11}),b.push({a:58*f,r0:26,r1:72,w:4.5,depth:1.6,water:!0});let x=[],C={trail:0,maze:1,ledge:2,bridge:3,stones:4};function k(S,w={}){let E=S.map(([L,V])=>{let[J,G]=M(L,V);return new O(J,0,G)}),_=new $n(E,!1,"centripetal"),B=_.getLength(),P=Math.max(2,Math.ceil(B/.8)),X=[];for(let L=0;L<=P;L++){let V=_.getUtoTmapping(L/P),J=_.getPoint(V);X.push([J.x,J.z,Math.min(E.length-2,Math.floor(V*(E.length-1)))])}let q={id:x.length,kind:w.kind||"trail",pts:X.map(([L,V,J])=>({x:L,z:V,wi:J,y:0,hw:w.hw||1.35,kind:w.kinds&&w.kinds[J]||w.kind||"trail"}))},Z=q.pts.map(L=>D(L.x,L.z));if(q.pts.forEach((L,V)=>{let J=0,G=0;for(let ft=-22;ft<=22;ft++){let Rt=Ze(V+ft,0,Z.length-1);J+=Z[Rt],G++}L.y=J/G}),w.y0!=null||w.y1!=null){let L=q.pts.length-1,V=w.y0!=null?w.y0-q.pts[0].y:0,J=w.y1!=null?w.y1-q.pts[L].y:0;q.pts.forEach((G,ft)=>{G.y+=Tn(V,J,ft/(L||1))})}for(let L of q.pts)L.kind==="ledge"?L.hw=.72:L.kind==="bridge"?L.hw=.62:L.kind==="stones"&&(L.hw=.6);return x.push(q),q}let F=k([[166,12],[160,40],[153,68],[146,94],[142.5,114.6],[140,122.4],[134,146],[127,172],[121,194],[117,206]],{kinds:{4:"bridge"}}),Q=[110,98,86,74],it=[212,224,236,248,260,272,284],Y=(S,w)=>M(Q[S],it[w]),ct=(S,w)=>{let[E,_]=Y(S,w),B=0;for(let P=0;P<9;P++)B+=D(E+Math.cos(P)*4,_+Math.sin(P)*4);return B/9},et=[],rt=new Set,nt=Bn(77),dt=(S,w)=>S*10+w;(function S(w,E){rt.add(dt(w,E));let _=[[w+1,E],[w-1,E],[w,E+1],[w,E-1]].filter(([B,P])=>B>=0&&B<4&&P>=0&&P<7&&!rt.has(dt(B,P)));for(let B=_.length-1;B>0;B--){let P=Math.floor(nt()*(B+1));[_[B],_[P]]=[_[P],_[B]]}for(let[B,P]of _)rt.has(dt(B,P))||(et.push([[w,E],[B,P]]),S(B,P))})(0,0),et.push([[1,2],[1,3]],[[2,4],[3,4]]);let pt=new Map;for(let S of et){let w=dt(...S[0])*100+dt(...S[1]),E=dt(...S[1])*100+dt(...S[0]);!pt.has(w)&&!pt.has(E)&&pt.set(w,S)}let St=[],Ht=new Map;for(let[[S,w],[E,_]]of pt.values()){let[B,P]=Y(S,w),[X,q]=Y(E,_),Z=(B+X)/2+(nt()-.5)*3,L=(P+q)/2+(nt()-.5)*3,V=(G,ft)=>[Math.hypot(G,ft),Math.atan2(ft,G)/f],J=k([V(B,P),V(Z,L),V(X,q)].map(([G,ft])=>[G,(ft+360)%360]),{kind:"maze",hw:1.25,y0:ct(S,w),y1:ct(E,_)});J.cells=[[S,w],[E,_]],St.push(J);for(let G of J.cells)Ht.set(dt(...G),(Ht.get(dt(...G))||0)+1)}k([[117,206],[113,209],[Q[0],it[0]]],{kind:"maze",hw:1.3,y0:F.pts[F.pts.length-1].y,y1:ct(0,0)});let ne=k([[Q[3],it[6]],[70,287],[66,292]],{kind:"maze",hw:1.3,y0:ct(3,6)}),we=[[66,292],[62,306],[58,334],[54,308],[50,336],[46,309],[43,330],[41,344],[40,0],[39.3,16],[38.6,30],[37.5,42],[36.6,53],[35.8,63],[34.4,75],[32.4,86],[31.2,92],[29.6,110.5],[27.4,122],[24,138],[20,154],[g+.4,168]],mt=k(we,{y0:ne.pts[ne.pts.length-1].y,kinds:{7:"ledge",8:"ledge",9:"ledge",12:"stones",16:"bridge"}});{let S=mt.pts,w=0;for(let E=S.length-1;E>=0&&(E<S.length-1&&(w+=Math.hypot(S[E+1].x-S[E].x,S[E+1].z-S[E].z)),S[E].y=Math.max(S[E].y,A-w*.42),!(w>60));E--);S[S.length-1].y=A;for(let E=Math.max(1,S.length-80);E<S.length;E++)(S[E].y-S[E-1].y)/(Math.hypot(S[E].x-S[E-1].x,S[E].z-S[E-1].z)||1)>.24&&S[E].kind==="trail"&&(S[E].kind="stairs",S[E].hw=1.25)}let te=[];for(let S of[F,mt]){let w=0;for(;w<S.pts.length;){if(S.pts[w].kind!=="bridge"){w++;continue}let E=w;for(;E+1<S.pts.length&&S.pts[E+1].kind==="bridge";)E++;let _=S.pts[Math.max(0,w-1)],B=S.pts[Math.min(S.pts.length-1,E+1)],P=E-w+1,X=P>10?[Math.floor(P*.3),Math.floor(P*.7)]:[Math.floor(P/2)];for(let q=w;q<=E;q++){let Z=(q-w+1)/(P+1),L=S.pts[q];L.y=Tn(_.y,B.y,Z)-Math.sin(Z*Math.PI)*.7,L.gap=X.some(V=>Math.abs(q-w-V)<=0)}te.push({seg:S,i:w,j:E,a:_,b:B}),w=E+1}}let ie=[];for(let S of[mt])for(let w=0;w<S.pts.length;w++){let E=S.pts[w];if(E.kind==="stones"&&(!ie.length||Math.hypot(E.x-ie[ie.length-1].x,E.z-ie[ie.length-1].z)>2.25)){let _=(o()-.5)*.5,B=-(S.pts[Math.min(w+1,S.pts.length-1)].z-E.z),P=S.pts[Math.min(w+1,S.pts.length-1)].x-E.x,X=Math.hypot(B,P)||1;ie.push({x:E.x+B/X*_,z:E.z+P/X*_,y:E.y+.05,r:.72})}}let me=[];for(let S of x)S.pts.forEach((w,E)=>{w.seg=S,w.k=E,me.push(w)});let kt=4,ae=new Map,Ge=(S,w)=>S*10007+w;for(let S of me){let w=Ge(Math.floor(S.x/kt),Math.floor(S.z/kt));ae.has(w)||ae.set(w,[]),ae.get(w).push(S)}function ve(S,w,E,_=1){let B=Math.floor(S/kt),P=Math.floor(w/kt),X=null,q=1/0;for(let oe=-_;oe<=_;oe++)for(let Se=-_;Se<=_;Se++){let ce=ae.get(Ge(B+oe,P+Se));if(ce)for(let Qt of ce){let Te=(Qt.x-S)**2+(Qt.z-w)**2+(E!=null?Math.max(0,Math.abs(Qt.y-E)-1.2)**2*9:0);Te<q&&(q=Te,X=Qt)}}if(!X)return null;let Z=X.seg.pts,L=Z[Math.min(X.k+1,Z.length-1)],V=Z[Math.max(X.k-1,0)],J=Math.hypot(S-X.x,w-X.z),G=X.y,ft=L.x-V.x,Rt=L.z-V.z,At=Math.hypot(ft,Rt)||1;ft/=At,Rt/=At;for(let[oe,Se]of[[V,X],[X,L]]){let ce=Se.x-oe.x,Qt=Se.z-oe.z,Te=ce*ce+Qt*Qt||1,he=Ze(((S-oe.x)*ce+(w-oe.z)*Qt)/Te,0,1),Nt=Math.hypot(S-(oe.x+ce*he),w-(oe.z+Qt*he));Nt<J&&(J=Nt,G=Tn(oe.y,Se.y,he))}let Kt=(S-X.x)*-Rt+(w-X.z)*ft;return{p:X,d:J,y:G,tx:ft,tz:Rt,side:Kt}}let fe=[],Ke=[];function wt(S,w){let E=Math.hypot(S,w),_=I(S,w);if(E<g+1.5)return Tn(_,A,un(g+1.5,g+.3,E));let B=ve(S,w,null,2);if(B&&B.d<B.p.hw+3.2){let P=B.p.kind;if(P!=="bridge"){if(P==="stones")_=Math.min(_,B.y-.55);else if(_=Tn(_,B.y-.04,un(B.p.hw+3.2,B.p.hw+.5,B.d)),P==="ledge"){let X=E>Math.hypot(B.p.x,B.p.z)?1:-1,q=B.d-B.p.hw;q>0&&(X>0?_=Math.min(_,B.y-un(0,2.2,q)*11):_=Math.max(_,B.y+un(.3,2.4,q)*4.5))}}}return _}let Gt=(S,w,E)=>{let _=S.pts[Ze(w,0,S.pts.length-1)],B={x:_.x,z:_.z,y:_.y,name:E,seg:S,k:w,active:!1};return fe.push(B),B},Pt=(S,w)=>S.pts.findIndex(E=>E.kind===w);Gt(F,3,"\u0633\u0641\u062D \u0627\u0644\u062C\u0628\u0644"),Gt(F,Pt(F,"bridge")-7,"\u0642\u0628\u0644 \u0627\u0644\u062C\u0633\u0631"),Gt(F,F.pts.length-2,"\u0628\u0627\u0628 \u063A\u0627\u0628\u0629 \u0627\u0644\u0645\u062A\u0627\u0647\u0629"),Gt(mt,4,"\u0637\u0644\u0639\u0629 \u0627\u0644\u0632\u0643\u0632\u0627\u0643"),Gt(mt,Pt(mt,"ledge")-6,"\u0642\u0628\u0644 \u062D\u0627\u0641\u0629 \u0627\u0644\u062C\u0631\u0641"),Gt(mt,Pt(mt,"stones")-5,"\u0642\u0628\u0644 \u0627\u0644\u0633\u0627\u0642\u064A\u0629"),Gt(mt,Pt(mt,"bridge")-6,"\u0642\u0628\u0644 \u0627\u0644\u062C\u0633\u0631 \u0627\u0644\u062B\u0627\u0646\u064A");let ue=300;{let S=[];for(let Z=-ue;Z<=ue;Z+=Z*Z<36100?1.7:9)S.push(Z);let w=S.length,E=new Float32Array(w*w*3),_=new Float32Array(w*w*3);for(let Z=0;Z<w;Z++)for(let L=0;L<w;L++){let V=S[L],J=S[Z],G=(Z*w+L)*3;E[G]=V,E[G+1]=Math.hypot(V,J)>200?I(V,J):wt(V,J),E[G+2]=J}let B=(Z,L)=>E[(Ze(L,0,w-1)*w+Ze(Z,0,w-1))*3+1];for(let Z=0;Z<w;Z++)for(let L=0;L<w;L++){let V=(Z*w+L)*3,J=E[V],G=E[V+1],ft=E[V+2],Rt=Math.hypot(J,ft),At=Ji(J*.06+3,ft*.06);an(ke,"#3E6E2E","#6E9A44",At*1.2-.1);let Kt=Math.hypot((B(L+1,Z)-B(L-1,Z))/(S[Ze(L+1,0,w-1)]-S[Ze(L-1,0,w-1)]),(B(L,Z+1)-B(L,Z-1))/(S[Ze(Z+1,0,w-1)]-S[Ze(Z-1,0,w-1)]));if(Kt>.8&&(an(Mi,"#5E5A55","#A9A398",In(J*.35+ft*.2,G*1.6)*.8+In(J*2,ft*2+G)*.35),ke.lerp(Mi,un(.8,1.3,Kt))),Rt<200){let oe=ve(J,ft,G,1);oe&&oe.d<oe.p.hw+.9&&oe.p.kind!=="bridge"&&ke.lerp(Mi.set("#9C7E55"),un(oe.p.hw+.9,oe.p.hw-.2,oe.d)*.85)}Rt<g+1&&ke.set("#9A9388"),G<-4&&ke.lerp(Mi.set("#5D7F4A"),.4),_[V]=ke.r,_[V+1]=ke.g,_[V+2]=ke.b}let P=[];for(let Z=0;Z<w-1;Z++)for(let L=0;L<w-1;L++){let V=Z*w+L,J=V+1,G=V+w,ft=G+1;P.push(V,G,J,J,G,ft)}let X=new qe;X.setAttribute("position",new Ve(E,3)),X.setAttribute("color",new Ve(_,3)),X.setIndex(P),X.computeVertexNormals();let q=new xt(X,d);q.receiveShadow=!0,e.add(q)}{let S=Si(64,256,(q,Z,L)=>{q.clearRect(0,0,Z,L);for(let V=0;V<L;V+=2){let J=6+In(V*.06,1)*8,G=Z-6-In(V*.06,5)*8,ft=q.createLinearGradient(J,0,G,0);ft.addColorStop(0,"rgba(150,118,78,0)"),ft.addColorStop(.2,"rgba(150,118,78,.95)"),ft.addColorStop(.8,"rgba(140,108,70,.95)"),ft.addColorStop(1,"rgba(140,108,70,0)"),q.fillStyle=ft,q.fillRect(J,V,G-J,2)}for(let V=0;V<260;V++)q.fillStyle=`rgba(${90+V%5*20},${80+V%7*12},${60+V%3*10},.6)`,q.beginPath(),q.arc(8+Math.random()*(Z-16),Math.random()*L,.5+Math.random()*1.4,0,Re),q.fill()},[1,1]),w=[],E=[],_=[],B=0;for(let q of x){let Z=[],L=()=>{if(Z.length<2){Z=[];return}let V=0;Z.forEach((J,G)=>{let ft=Z[Math.max(0,G-1)],Rt=Z[Math.min(Z.length-1,G+1)],At=Rt.x-ft.x,Kt=Rt.z-ft.z,oe=Math.hypot(At,Kt)||1,Se=-Kt/oe,ce=At/oe,Qt=J.hw+.35;if(G&&(V+=Math.hypot(J.x-Z[G-1].x,J.z-Z[G-1].z)/6),w.push(J.x+Se*Qt,J.y+.035,J.z+ce*Qt,J.x-Se*Qt,J.y+.035,J.z-ce*Qt),E.push(0,V,1,V),G){let Te=B+(G-1)*2;_.push(Te,Te+2,Te+1,Te+1,Te+2,Te+3)}}),B+=Z.length*2,Z=[]};for(let V of q.pts)V.kind==="bridge"||V.kind==="stones"||V.kind==="stairs"?L():Z.push(V);L()}let P=new qe;P.setAttribute("position",new Ve(new Float32Array(w),3)),P.setAttribute("uv",new Ve(new Float32Array(E),2)),P.setIndex(_),P.computeVertexNormals();let X=new xt(P,new Ye({map:S,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,side:en}));X.receiveShadow=!0,e.add(X)}let jt=nc();{let S=b[2],w=[],E=[],_=[],B=0;for(let q=S.r0;q<=S.r1;q+=1){let[Z,L]=M(q,S.a/f),[V,J]=[Math.cos(S.a),Math.sin(S.a)],G=-J,ft=V,Rt=I(Z,L)+.5;if(w.push(Z+G*2.2,Rt,L+ft*2.2,Z-G*2.2,Rt,L-ft*2.2),E.push(0,q/4,1,q/4),B){let At=(B-1)*2;_.push(At,At+2,At+1,At+1,At+2,At+3)}B++}let P=new qe;P.setAttribute("position",new Ve(new Float32Array(w),3)),P.setAttribute("uv",new Ve(new Float32Array(E),2)),P.setIndex(_),P.computeVertexNormals();let X=new xt(P,new Nn({color:"#4AA6D8",specular:"#FFFFFF",shininess:140,normalMap:jt,transparent:!0,opacity:.9,side:en}));X.material.normalScale.set(.8,.8),e.add(X)}let ge=[],de=(S,w,E,_,B)=>{let P=[Bt(Wt(new xe(.13,.22,E*.45,6),0,E*.22,0),"#5A3E26")];for(let X=0;X<w;X++){let q=X/w,Z=_*(1-q*.62),L=E*.42;P.push(Wt(Bt(new En(Z,L,8,1),(V,J,G)=>an(V,B?"#1F4A2B":"#24572F",B?"#3F7A43":"#4E8C46",.25+(G/L+.5)*.6+(wn(J*7,G*3)-.5)*.25)),0,E*.32+X*E*.22+L/2,0,0,S()*3,0))}return bn(P)},Fe={pine:wi(new Ye({vertexColors:!0,flatShading:!0}),.006,2,r),tree:wi(new Ye({vertexColors:!0,flatShading:!0}),.01,1.2,r)},Ne=()=>{let S=Bn(43),w=[Bt(Wt(new xe(.14,.22,2.6,6),0,1.3,0),"#5A3E26")];for(let[E,_,B,P]of[[0,3.1,0,1.35],[.7,2.6,.3,.95],[-.6,2.7,-.4,1],[.1,3.8,-.2,.9]])w.push(Wt(Bt(new zn(P,0),(X,q,Z)=>an(X,"#2C6B33","#6FAE4E",.3+Z/P*.35+(S()-.5)*.3)),E,_,B));return bn(w)},yt={pineA:de(Bn(5),4,7.5,2,!1),pineB:de(Bn(6),3,6,2.5,!0),oak:Ne()},K=[],tn={pineA:[],pineB:[],oak:[],bush:[],rock:[],tuft:[],fern:[]},Be=(S,w,E)=>{if(Math.hypot(S,w)<g+3)return!1;let B=ve(S,w,null,2);if(B&&B.d<B.p.hw+E)return!1;for(let P of fe)if(Math.hypot(S-P.x,w-P.z)<4.6)return!1;return!0};for(let S=-195;S<=195;S+=2.3)for(let w=-195;w<=195;w+=2.3){if(Math.hypot(S,w)>192)continue;let _=S+(o()-.5)*2,B=w+(o()-.5)*2,P=ve(_,B,null,6),X=P?P.d:99;if(X>26&&o()<.62||!Be(_,B,1.05))continue;let q=wt(_,B),Z=o(),L=.8+o()*.55;if(q>84){o()<.3&&Be(_,B,.4)?tn.rock.push({x:_,y:q+.05,z:B,rx:o()*3,ry:o()*3,rz:o()*3,s3:[.8+o()*1.4,.5+o()*.8,.8+o()*1.4]}):o()<.35&&tn.bush.push({x:_,y:q,z:B,ry:o()*Re,s:.5+o()*.6});continue}if(q>72){if(o()<.45)continue;L*=Tn(1,.6,un(72,84,q))}if(Math.abs(oi(Math.atan2(B,_),m))<.55&&q+9*L>A-7)continue;q>48&&(Z=Z*.86);let V={x:_,y:q-.15,z:B,ry:o()*Re,s:L};if(Z<.46?tn.pineA.push(V):Z<.82?tn.pineB.push(V):tn.oak.push({...V,s:L*.95}),ge.push({x:_,z:B,r:.42*L,tall:1}),X<9&&o()<.5){let J=_+(o()-.5)*1.6,G=B+(o()-.5)*1.6;Be(J,G,.25)&&tn.bush.push({x:J,y:wt(J,G),z:G,ry:o()*Re,s:.5+o()*.7})}}for(let S of me){if(S.kind==="bridge"||S.kind==="stones"||S.k%2)continue;let w=-(S.seg.pts[Math.min(S.k+1,S.seg.pts.length-1)].z-S.seg.pts[Math.max(S.k-1,0)].z),E=S.seg.pts[Math.min(S.k+1,S.seg.pts.length-1)].x-S.seg.pts[Math.max(S.k-1,0)].x,_=Math.hypot(w,E)||1;for(let B of[-1,1]){let P=S.hw+.15+o()*1.4,X=S.x+w/_*P*B,q=S.z+E/_*P*B;if(S.kind==="ledge"&&B*1!==0&&o()<.5)continue;let Z=wt(X,q),L=o();L<.55?tn.tuft.push({x:X,y:Z-.02,z:q,ry:o()*Re,s:.6+o()*.7}):L<.78?tn.fern.push({x:X,y:Z,z:q,ry:o()*Re,s:.7+o()*.6}):L<.9?tn.bush.push({x:X,y:Z,z:q,ry:o()*Re,s:.4+o()*.5}):tn.rock.push({x:X,y:Z+.05,z:q,rx:o()*3,ry:o()*3,rz:o()*3,s3:[.5+o(),.4+o()*.5,.5+o()]})}}let ln=bn([...Array(7)].map((S,w)=>{let E=w/7*Re,_=.55+w%3*.12,B=[],P=[];for(let q=0;q<6;q++){let Z=q/6,L=(q+1)/6,V=Math.sin(Z*Math.PI)*.09,J=Math.sin(L*Math.PI)*.09,G=[Math.cos(E)*_*Z,Math.sin(Z*Math.PI*.8)*.3,Math.sin(E)*_*Z],ft=[Math.cos(E)*_*L,Math.sin(L*Math.PI*.8)*.3,Math.sin(E)*_*L],Rt=-Math.sin(E),At=Math.cos(E);B.push(G[0]-Rt*V,G[1],G[2]-At*V,ft[0]-Rt*J,ft[1],ft[2]-At*J,G[0]+Rt*V,G[1],G[2]+At*V,G[0]+Rt*V,G[1],G[2]+At*V,ft[0]-Rt*J,ft[1],ft[2]-At*J,ft[0]+Rt*J,ft[1],ft[2]+At*J);for(let Kt=0;Kt<6;Kt++)an(ke,"#2F6B2C","#79B356",Z+.2),P.push(ke.r,ke.g,ke.b)}let X=new qe;return X.setAttribute("position",new Ve(new Float32Array(B),3)),X.setAttribute("color",new Ve(new Float32Array(P),3)),X.computeVertexNormals(),X})),Zt=new Ye({vertexColors:!0,flatShading:!0});function cn(S,w,E,_={}){let B=new Map,P=new mn,X=_.size||26;for(let q of E){let Z=Ge(Math.floor(q.x/X),Math.floor(q.z/X));B.has(Z)||B.set(Z,[]),B.get(Z).push(q)}for(let q of B.values()){let Z=new mi(S,w,q.length),L=0,V=0;q.forEach((G,ft)=>{P.position.set(G.x,G.y,G.z),P.rotation.set(G.rx||0,G.ry||0,G.rz||0),G.s3?P.scale.set(...G.s3):P.scale.setScalar(G.s||1),P.updateMatrix(),Z.setMatrixAt(ft,P.matrix),L+=G.x,V+=G.z}),Z.castShadow=!!_.cast,Z.receiveShadow=!0,Z.computeBoundingSphere(),e.add(Z);let J=null;_.lod&&(J=new mi(_.lod,Zt,q.length),J.instanceMatrix=Z.instanceMatrix,J.computeBoundingSphere(),J.visible=!1,e.add(J)),K.push({m:Z,lo:J,x:L/q.length,z:V/q.length,far:_.far||105})}}let be=(S,w,E)=>Bt(Wt(new En(w*.9,S*.95,6,1,!0),0,S*.62,0),(_,B,P)=>an(_,E?"#1F4A2B":"#24572F",E?"#3F7A43":"#4E8C46",.3+(P/S+.5)*.5));cn(yt.pineA,Fe.pine,tn.pineA,{cast:!0,lod:be(7.5,2,!1)}),cn(yt.pineB,Fe.pine,tn.pineB,{cast:!0,lod:be(6,2.5,!0)}),cn(yt.oak,Fe.tree,tn.oak,{cast:!0,lod:Wt(Bt(new zn(1.5,0),"#3E7D3A"),0,3.1,0)}),cn(rc(),u,tn.bush,{size:30,far:70}),cn(oc(),u,tn.rock,{size:30,far:80}),cn(ac(),wi(new Ye({vertexColors:!0,side:en}),.5,0,r),tn.tuft,{size:30,far:45}),cn(ln,wi(new Ye({vertexColors:!0,side:en}),.35,0,r),tn.fern,{size:30,far:50});let Ie=new Ue;e.add(Ie);{let S=Si(256,128,(w,E,_)=>{w.clearRect(0,0,E,_);let B=Bn(3);for(let P=0;P<22;P++){let X=E*(.18+B()*.64),q=_*(.42+B()*.28),Z=18+B()*30,L=w.createRadialGradient(X,q,0,X,q,Z);L.addColorStop(0,"rgba(255,255,255,.95)"),L.addColorStop(.6,"rgba(250,252,255,.55)"),L.addColorStop(1,"rgba(240,246,255,0)"),w.fillStyle=L,w.beginPath(),w.arc(X,q,Z,0,Re),w.fill()}});for(let w=0;w<46;w++){let E=o()*Re;Math.abs(oi(E,m))<.6&&(E+=Math.sign(oi(m,E)||1)*-1.2);let _=230+o()*330,B=new Pi(new pi({map:S,transparent:!0,opacity:.75+o()*.25,depthWrite:!1,fog:!1})),P=60+o()*90;B.scale.set(P,P*.42,1),B.position.set(Math.cos(E)*_,18+o()*40,Math.sin(E)*_),Ie.add(B)}}{let S=[],w=(Nt,pe,Ce,xn,Sn,Ui)=>{let kn=new En(xn,Ce,28,10),ds=kn.attributes.position;for(let li=0;li<ds.count;li++){let $i=ds.getX(li),Ki=ds.getY(li),Qn=ds.getZ(li),fs=Math.atan2(Qn,$i),zi=(Ki+Ce/2)/Ce,Oi=1+(In(fs*2.2+Sn,zi*3.5)-.5)*.45*(1-zi*.4);ds.setXYZ(li,$i*Oi,Ki,Qn*Oi)}kn=Bt(kn,(li,$i,Ki,Qn)=>{let fs=(Ki+Ce/2)/Ce,zi=In(Math.atan2(Qn,$i)*6+Sn,fs*9);an(li,"#A9BCD2","#D3DEEA",fs*.9+zi*.35),Ui<1&&fs>Ui-.06+zi*.08&&li.set("#F4F8FC")}),S.push(Wt(kn,Nt,Ce/2-20,pe))};for(let Nt=0;Nt<22;Nt++){let pe=Nt/22*Re+.2+Math.sin(Nt*3.1)*.08,Ce=560+Nt%3*110;Math.abs(oi(pe,0))<.4||w(Math.cos(pe)*Ce,Math.sin(pe)*Ce,95+Nt%4*28,190+Nt%3*50,Nt*2.1,Nt%3?.7:2)}let E=new xt(bn(S),new Ye({vertexColors:!0,flatShading:!0,fog:!1}));e.add(E);let _=230,B=980,P=260,X=Nt=>Math.sin(Nt*.011)*22+Math.sin(Nt*.027+1)*8,q=(Nt,pe)=>{let Ce=Math.abs(pe-X(Nt));return-26+un(18,110,Ce)*70+Ji(Nt*.012,pe*.012)*10*un(10,60,Ce)-un(_+60,_,Nt)*0},Z=90,L=40,V=new qe,J=[],G=[],ft=[];for(let Nt=0;Nt<=L;Nt++)for(let pe=0;pe<=Z;pe++){let Ce=_+(B-_)*pe/Z,xn=-P+2*P*Nt/L,Sn=q(Ce,xn),Ui=Math.abs(xn-X(Ce));if(J.push(Ce,Sn,xn),an(ke,"#C9A56B","#E0C28A",Ji(Ce*.02,xn*.02)),Ui<40&&ke.lerp(Mi.set("#5E9A3E"),un(40,14,Ui)),Sn>20&&ke.lerp(Mi.set("#B8946A"),un(20,40,Sn)*.7),G.push(ke.r,ke.g,ke.b),pe<Z&&Nt<L){let kn=Nt*(Z+1)+pe;ft.push(kn,kn+Z+1,kn+1,kn+1,kn+Z+1,kn+Z+2)}}V.setAttribute("position",new Ve(new Float32Array(J),3)),V.setAttribute("color",new Ve(new Float32Array(G),3)),V.setIndex(ft),V.computeVertexNormals(),e.add(new xt(V,new Ye({vertexColors:!0})));let Rt=[],At=[];for(let Nt=0;Nt<=160;Nt++){let pe=_+(B-_)*Nt/160,Ce=X(pe),xn=4.5+Math.sin(Nt*.3)*1.2;if(Rt.push(pe,-25.3,Ce-xn,pe,-25.3,Ce+xn),Nt){let Sn=(Nt-1)*2;At.push(Sn,Sn+1,Sn+2,Sn+1,Sn+3,Sn+2)}}let Kt=new qe;Kt.setAttribute("position",new Ve(new Float32Array(Rt),3)),Kt.setIndex(At),Kt.computeVertexNormals(),e.add(new xt(Kt,new Nn({color:"#3D9FD8",specular:"#FFFFFF",shininess:120,side:en})));let oe=bn([Bt(Wt(new xe(.3,.45,9,5),0,4.5,0),"#8B6A3E"),Bt(Wt(new zn(1.6,0),0,9.2,0,0,0,0,1,.55,1),"#3A7F34"),...[0,1,2,3,4,5].map(Nt=>Bt(Wt(Wt(Wt(new En(.7,4.6,3),0,2.3,0),0,0,0,1.9,0,0),0,9.3,0,0,Nt/6*Re,0),"#4C9A3E"))]),Se=[],ce=Bn(12);for(let Nt=0;Nt<260;Nt++){let pe=_+20+ce()*(B-_-40),Ce=ce()<.5?-1:1,xn=X(pe)+Ce*(7+ce()*26);Se.push([pe,q(pe,xn),xn,ce()*Re,.8+ce()*.5])}let Qt=new mi(oe,new Ye({vertexColors:!0,flatShading:!0}),Se.length),Te=new mn;Se.forEach(([Nt,pe,Ce,xn,Sn],Ui)=>{Te.position.set(Nt,pe,Ce),Te.rotation.set(0,xn,0),Te.scale.setScalar(Sn),Te.updateMatrix(),Qt.setMatrixAt(Ui,Te.matrix)}),e.add(Qt);let he=[];for(let[Nt,pe]of[[330,16],[345,19],[420,-18],[520,15]]){let Ce=X(Nt)+pe,xn=q(Nt,Ce);he.push(Bt(Wt(new En(3.4,3.4,4),Nt,xn+1.7,Ce,0,.6,0),(Sn,Ui,kn)=>Sn.set(kn>1?"#F4ECDC":"#3B2A20")))}e.add(new xt(bn(he),new Ye({vertexColors:!0,flatShading:!0})))}{let S=[];for(let P of te){P.seg.pts.slice(P.i,P.j+1).forEach((q,Z)=>{if(q.gap)return;let L=P.seg.pts[Math.min(q.k+1,P.seg.pts.length-1)],V=Math.atan2(L.z-q.z,L.x-q.x);S.push(Wt(Bt(new Qe(.5,.07,1.45),(J,G,ft,Rt)=>an(J,"#7A5634","#A57B4C",wn(Z,Rt*3)*.6+(ft>0?.3:0))),q.x,q.y-.035,q.z,0,-V,0))});for(let q of[-1,1])for(let Z of[.95,.45]){let L=[];for(let V=P.i-1;V<=P.j+1;V++){let J=P.seg.pts[Ze(V,0,P.seg.pts.length-1)],G=P.seg.pts[Ze(V+1,0,P.seg.pts.length-1)],ft=P.seg.pts[Ze(V-1,0,P.seg.pts.length-1)],Rt=G.x-ft.x,At=G.z-ft.z,Kt=Math.hypot(Rt,At)||1;L.push(new O(J.x-At/Kt*.72*q,J.y+Z,J.z+Rt/Kt*.72*q))}S.push(Bt(new Fi(new $n(L),L.length*2,.03,5),"#C9A46B"))}for(let q of[P.a,P.b])for(let Z of[-1,1]){let L=q.seg.pts[Math.min(q.k+1,q.seg.pts.length-1)],V=q.seg.pts[Math.max(q.k-1,0)],J=L.x-V.x,G=L.z-V.z,ft=Math.hypot(J,G)||1;S.push(Wt(Bt(new xe(.09,.11,1.5,6),"#5C3A1A"),q.x-G/ft*.8*Z,q.y+.6,q.z+J/ft*.8*Z))}}for(let P of me)if(P.kind==="stairs"){let X=P.seg.pts[Math.min(P.k+1,P.seg.pts.length-1)],q=P.seg.pts[Math.max(P.k-1,0)],Z=Math.atan2(X.z-q.z,X.x-q.x);S.push(Wt(Bt(new Qe(.9,.5,2.7),(L,V,J,G)=>an(L,"#7C766B","#ABA393",J+.4+wn(P.k,G*5)*.3)),P.x,P.y-.25,P.z,0,-Z+(wn(P.k,3)-.5)*.08,0))}for(let P of me)if(P.kind==="ledge"&&P.k%2===0){let X=P.seg.pts[Math.min(P.k+1,P.seg.pts.length-1)],q=P.seg.pts[Math.max(P.k-1,0)],Z=X.x-q.x,L=X.z-q.z,V=Math.hypot(Z,L)||1,J=-L/V,G=Z/V;Math.hypot(P.x+J,P.z+G)>Math.hypot(P.x,P.z)&&(J=-J,G=-G);let ft=.9+wn(P.k,1)*.8;S.push(Wt(Bt(new xi(1,0).scale(ft,ft*(1.3+wn(P.k,5)),ft*.8),(Rt,At,Kt,oe)=>an(Rt,"#5E5A55","#A9A398",.35+Kt*.2+wn(At*5+P.k,oe*5)*.3)),P.x+J*(P.hw+ft*1),P.y+ft*.3,P.z+G*(P.hw+ft*1),wn(P.k,2)*.4,wn(P.k,4)*3,0)),ge.push({x:P.x+J*(P.hw+ft),z:P.z+G*(P.hw+ft),r:ft*.8,tall:1}),P.k%6===0&&S.push(Wt(Bt(new xi(.25,0),"#8A847A"),P.x-J*(P.hw-.05),P.y+.08,P.z-G*(P.hw-.05)))}for(let P of ie)S.push(Wt(Bt(new xe(P.r,P.r*1.12,1.4,9),(X,q,Z)=>an(X,"#7F7A72","#B7B1A6",Z+.6+wn(q*9,P.x)*.2)),P.x,P.y-.7,P.z,0,o()*3,0));{let P=fe[0],X=F.pts[8],q=Math.atan2(X.z-P.z,X.x-P.x),Z=-Math.sin(q),L=Math.cos(q);for(let G of[-1,1])S.push(Wt(Bt(new xe(.11,.13,3.4,7),"#5C3A1A"),P.x+Math.cos(q)*3+Z*2*G,P.y+1.7,P.z+Math.sin(q)*3+L*2*G));S.push(Wt(Bt(new Qe(.2,.2,4.6),"#4F3420"),P.x+Math.cos(q)*3,P.y+3.35,P.z+Math.sin(q)*3,0,-q,0));let V=Si(512,128,(G,ft,Rt)=>{G.fillStyle="#7A4E26",G.fillRect(0,0,ft,Rt),G.strokeStyle="#E8C170",G.lineWidth=8,G.strokeRect(6,6,ft-12,Rt-12),G.fillStyle="#FFF3D6",G.font='900 60px -apple-system, "Geeza Pro", system-ui, sans-serif',G.textAlign="center",G.textBaseline="middle";try{G.direction="rtl"}catch{}G.fillText("\u26F0\uFE0F \u0637\u0631\u064A\u0642 \u0627\u0644\u0642\u0645\u0629",ft/2,Rt/2+4)}),J=new xt(new Zn(3.4,.85),new Ye({map:V,side:en}));J.position.set(P.x+Math.cos(q)*3,P.y+2.85,P.z+Math.sin(q)*3),J.rotation.y=-q-Math.PI/2,e.add(J)}for(let P of fe){for(let X=0;X<6;X++)S.push(Wt(Bt(new xi(.22-X*.025,0),"#9D978C"),P.x+1.6,P.y+.15+X*.25,P.z+1.1));S.push(Wt(Bt(new xe(.05,.06,2.4,6),"#5C3A1A"),P.x-1.4,P.y+1.2,P.z-1.1))}let w=new Map;{let P=new Map;for(let V of St){let[J,G]=V.cells.map(ft=>dt(...ft));P.has(J)||P.set(J,[]),P.has(G)||P.set(G,[]),P.get(J).push(G),P.get(G).push(J)}let X=dt(0,0),q=dt(3,6),Z=new Map([[X,-1]]),L=[X];for(;L.length;){let V=L.shift();if(V===q)break;for(let J of P.get(V)||[])Z.has(J)||(Z.set(J,V),L.push(J))}for(let V=q;Z.get(V)!==-1&&Z.has(V);V=Z.get(V))w.set(Z.get(V),V)}let E=Si(256,64,(P,X,q)=>{P.fillStyle="#8B5A2B",P.fillRect(0,0,X,q),P.strokeStyle="#E8C170",P.lineWidth=4,P.strokeRect(4,4,X-8,q-8),P.fillStyle="#FFF3D6",P.font='900 34px -apple-system, "Geeza Pro", system-ui, sans-serif',P.textAlign="center",P.textBaseline="middle";try{P.direction="rtl"}catch{}P.fillText("\u2B05 \u0644\u0644\u0642\u0645\u0629",X/2,q/2+2)}),_=0;for(let[P,X]of w){if((Ht.get(P)||0)<3||_%3===2){_++;continue}_++;let q=Math.floor(P/10),Z=P%10,L=Math.floor(X/10),V=X%10,[J,G]=Y(q,Z),[ft,Rt]=Y(L,V),At=Math.atan2(Rt-G,ft-J),Kt=J+Math.cos(At+.9)*1.9,oe=G+Math.sin(At+.9)*1.9,Se=wt(Kt,oe);S.push(Wt(Bt(new xe(.06,.07,1.9,6),"#5C3A1A"),Kt,Se+.95,oe));let ce=new xt(new Zn(1.1,.28),new Ye({map:E,side:en}));ce.position.set(Kt+Math.cos(At)*.45,Se+1.65,oe+Math.sin(At)*.45),ce.rotation.y=-At+Math.PI,e.add(ce),Ke.push({x:Kt,z:oe})}for(let[P,X]of Ht){if(X!==1||P===dt(0,0)||P===dt(3,6))continue;let[q,Z]=Y(Math.floor(P/10),P%10),L=wt(q,Z),V=o()*Re;S.push(Wt(Bt(new xe(.32,.38,4.2,8),(J,G,ft)=>J.set(Math.abs(ft)>2?"#C9A36B":"#5A3E26")),q,L+.35,Z,0,V,Math.PI/2)),ge.push({x:q,z:Z,r:.9})}let B=new xt(bn(S),new Ye({vertexColors:!0,side:en}));B.castShadow=!0,B.receiveShadow=!0,e.add(B)}let U=fe.map(S=>{let w=new qe;w.setAttribute("position",new Ve(new Float32Array([0,.32,0,0,-.32,0,1.05,0,0]),3)),w.computeVertexNormals();let E=new xt(w,new Ye({color:"#F4F1EA",side:en}));return E.position.set(S.x-1.4,S.y+2.05,S.z-1.1),e.add(E),E}),v=[];for(let S of[F,mt])for(let w=8;w<S.pts.length-4;w+=17){let E=S.pts[w];E.kind==="trail"&&v.push({x:E.x,y:E.y+.9,z:E.z,taken:!1})}for(let[S,w]of Ht){if(w!==1||S===dt(0,0)||S===dt(3,6))continue;let[E,_]=Y(Math.floor(S/10),S%10),B=ve(E,_,null,2),P=B?B.p.x:E,X=B?B.p.z:_,q=B?B.y:wt(E,_);for(let Z=0;Z<4;Z++){let L=B.p.seg.pts[Ze(B.p.k+(Z-1.5)*2|0,0,B.p.seg.pts.length-1)];v.push({x:L.x,y:L.y+.9,z:L.z,taken:!1})}}let ht=new mi(new xe(.22,.22,.05,20),new Nn({color:"#FFC93C",specular:"#FFF4C0",shininess:90,emissive:"#6B4A00",emissiveIntensity:.55}),v.length);ht.castShadow=!0,ht.frustumCulled=!1,e.add(ht);let bt=new Ue;bt.position.set(0,A,0),e.add(bt);let Tt=mt.pts[mt.pts.length-1],$t=Math.atan2(Tt.z,Tt.x),qt=[],Mt=[],ut={flag:null,flagBase:null,bell:null,lanterns:[],water:null,drops:null,leaves:null,kiosk:null,cups:[]};{let S=Si(512,512,(Et,Ae,rn)=>{Et.fillStyle="#B9B1A3",Et.fillRect(0,0,Ae,rn);for(let fn=0;fn<12;fn++){let dn=fn*22,Fn=dn+22,Jn=Math.max(6,Math.round(Re*(dn+11)/34));for(let bi=0;bi<Jn;bi++){let nu=bi/Jn*Re,iu=(bi+1)/Jn*Re,gc=.82+(fn*7+bi*3)%5*.04;Et.fillStyle=`rgb(${Math.round(196*gc)},${Math.round(186*gc)},${Math.round(168*gc)})`,Et.beginPath(),Et.arc(Ae/2,rn/2,Fn-1.5,nu+.01,iu-.01),Et.arc(Ae/2,rn/2,Math.max(0,dn+1.5),iu-.01,nu+.01,!0),Et.closePath(),Et.fill()}}}),w=new xt(new ni(g,64),new Ye({map:S}));w.rotation.x=-Math.PI/2,w.position.y=.03,w.receiveShadow=!0,bt.add(w);let E=[];for(let Et=0;Et<64;Et++){let Ae=Et/64*Re;Math.abs(oi(Ae,$t))<.16||Math.abs(oi(Ae,m))<.2||E.push(Wt(Bt(new Qe(1.36,.72,.55),(rn,fn,dn,Fn)=>an(rn,"#8E877B","#B8AF9F",.4+dn+wn(Et,Fn*4)*.3)),Math.cos(Ae)*(g-.1),.36,Math.sin(Ae)*(g-.1),0,-Ae+Math.PI/2,0))}for(let Et=0;Et<10;Et++)E.push(Wt(Bt(new Qe(.46,.08,3.6),(Ae,rn,fn,dn)=>an(Ae,"#7A5634","#A57B4C",wn(Et,dn)*.5+.3)),g-.3+Et*.48,.05,0));for(let Et of[-1,1]){E.push(Wt(Bt(new Qe(4.8,.07,.07),"#6B4423"),g+2.1,.95,Et*1.8));for(let Ae=0;Ae<5;Ae++)E.push(Wt(Bt(new xe(.05,.05,1,6),"#5C3A1A"),g+.1+Ae*1.1,.5,Et*1.8))}E.push(Wt(Bt(new Qe(.07,.07,3.6),"#6B4423"),g+4.5,.95,0));for(let Et=-1;Et<=1;Et++)E.push(Wt(Bt(new xe(.06,.06,1,6),"#5C3A1A"),g+4.5,.5,Et*1.6));for(let Et=0;Et<4;Et++)E.push(Wt(Bt(new xe(.12,.14,7,6),"#4F3420"),g+.5+Et*1.3,-3.4,(Et%2?1:-1)*1.5));E.push(Bt(new On([new ot(.001,0),new ot(2.35,0),new ot(2.45,.08),new ot(2.4,.62),new ot(2.15,.66),new ot(2.1,.22),new ot(.001,.22)],40),(Et,Ae,rn)=>an(Et,"#9F988C","#D6CFC2",rn*1.5+.2))),E.push(Bt(new On([new ot(.001,.2),new ot(.32,.2),new ot(.22,.9),new ot(.18,1.4),new ot(.7,1.55),new ot(.72,1.68),new ot(.15,1.72),new ot(.12,2.15),new ot(.2,2.3),new ot(.001,2.38)],24),(Et,Ae,rn)=>an(Et,"#A79F92","#DCD5C8",rn*.4)));let _=236*f,B=Math.cos(_)*9.2,P=Math.sin(_)*9.2,X=Math.atan2(-Math.cos(_),-Math.sin(_)),q=[],Z=Et=>q.push(Et),L=(Et,Ae)=>Et.set(Math.floor((Ae+1.6)/.4)%2?"#A97B4C":"#93683E");Z(Wt(Bt(new Qe(3.2,2.4,.12),L),0,1.2,-1.05));for(let Et of[-1,1])Z(Wt(Bt(new Qe(.12,2.4,2.2),"#8A5F36"),Et*1.55,1.2,0));Z(Wt(Bt(new Qe(3.5,.12,2.7),"#6B4423"),0,2.45,.15)),Z(Wt(Bt(new Qe(3.1,1,.5),(Et,Ae,rn)=>Et.set(rn>.42?"#5C3A1A":Math.floor((Ae+1.55)/.31)%2?"#A97B4C":"#93683E")),0,.5,.85));for(let Et=0;Et<8;Et++)Z(Wt(Bt(new Qe(.44,.04,.9),Et%2?"#FAF3E6":"#2E8B57"),-1.54+Et*.44,2.3,1.75,.35,0,0));Z(Wt(Bt(new Qe(2.6,.06,.35),"#6B4423"),0,1.6,-.9));for(let Et=0;Et<5;Et++)Z(Wt(Bt(new xe(.07,.06,.22,8),["#2E86AB","#C0612B","#F2E3C6","#9B2335","#E8C170"][Et]),-1+Et*.5,1.75,-.9));let V=new Ue;V.add(new xt(bn(q),new Ye({vertexColors:!0,side:en}))),V.position.set(B,0,P),V.rotation.y=X,bt.add(V),V.traverse(Et=>{Et.isMesh&&(Et.castShadow=!0,Et.receiveShadow=!0)}),ut.kiosk=V;let J=new Nn({color:"#C9A13B",specular:"#FFE9A8",shininess:90}),G=new xt(new On([new ot(.001,0),new ot(.14,0),new ot(.16,.05),new ot(.22,.2),new ot(.2,.42),new ot(.12,.5),new ot(.14,.56),new ot(.06,.62),new ot(.001,.64)],18),J);G.position.set(-1,1,.85),V.add(G);let ft=new Nn({color:"#B5562A",specular:"#FFFFFF",shininess:120,transparent:!0,opacity:.85});for(let Et=0;Et<6;Et++){let Ae=new xt(new xe(.045,.032,.1,10),ft);Ae.position.set(-.3+Et*.2,1.05,.9),V.add(Ae),ut.cups.push(Ae)}let Rt=Zs({thobe:"#EDE6DA",bisht:null,shmagh:"#1E1E1E",beard:"#2E2A26",beads:!1});Rt.root.position.set(.35,0,-.25),V.add(Rt.root),Mt.push({m:Rt,base:Rt.root.position.clone(),home:0,kind:"seller"}),qt.push({id:"tea",x:B-Math.cos(_)*2.1,z:P-Math.sin(_)*2.1,r:2.3,label:"\u2615 \u0627\u0634\u0631\u0628 \u0634\u0627\u064A"});let At=(Et,Ae)=>{let rn=Math.cos(Et)*Ae,fn=Math.sin(Et)*Ae,dn=-Et-Math.PI/2,Fn=-Math.sin(Et),Jn=Math.cos(Et);E.push(Wt(Bt(new Qe(2.2,.1,.55),"#8A5F36"),rn,.45,fn,0,dn,0)),E.push(Wt(Bt(new Qe(2.2,.5,.08),"#7A5232"),rn+Math.cos(Et)*.3,.75,fn+Math.sin(Et)*.3,0,dn,0));for(let bi of[-.9,.9])E.push(Wt(Bt(new Qe(.1,.45,.5),"#6B4423"),rn+Fn*bi,.22,fn+Jn*bi,0,dn,0));return ge.push({x:rn,z:fn,r:.75},{x:rn+Fn*.8,z:fn+Jn*.8,r:.5},{x:rn-Fn*.8,z:fn-Jn*.8,r:.5}),[rn,fn,Fn,Jn]};At(185*f,6.6),At(150*f,6.6),At(30*f,6.6);let Kt=()=>{let Et=new xt(new xe(.035,.026,.08,10),ft);return Et.position.set(0,-.43,.05),Et},oe=(Et,Ae,rn,fn,dn)=>{let Fn=Math.cos(Ae)*rn,Jn=Math.sin(Ae)*rn;Et.root.position.set(Fn,0,Jn),Et.root.rotation.y=Math.atan2(fn[0]-Fn,fn[1]-Jn),bt.add(Et.root);let bi={m:Et,base:Et.root.position.clone(),kind:dn,ph:o()*6};return Mt.push(bi),ge.push({x:Fn,z:Jn,r:.42}),bi},Se=Zs({thobe:"#D8CDB8",bisht:"#2D3A4E",shmagh:"#C8102E",beads:!1,beard:"#5A524C"}),ce=Zs({thobe:"#F4F1EA",bisht:null,shmagh:"#F4F1EA",beard:"none",beads:!0}),Qt=Zs({thobe:"#CFE0E8",bisht:null,shmagh:"#C8102E",beard:"#3A3430",beads:!1}),Te=[Math.cos(221*f)*6.2,Math.sin(221*f)*6.2];oe(Se,212*f,6.9,Te,"tea"),oe(ce,229*f,6.9,Te,"tea"),oe(Qt,219*f,5.2,[B,P],"stand"),Se.arms[1].el.add(Kt()),ce.arms[1].el.add(Kt()),qt.push({id:"chat",x:Te[0],z:Te[1],r:2.2,label:"\u{1F5E3}\uFE0F \u0633\u0648\u0644\u0641 \u0648\u064A\u0627\u0647\u0645"});let he=118*f,Nt=Math.cos(he)*9,pe=Math.sin(he)*9,Ce=-Math.sin(he),xn=Math.cos(he);for(let Et of[-1,1])E.push(Wt(Bt(new Qe(.18,2.8,.18),"#5C3A1A"),Nt+Ce*.9*Et,1.4,pe+xn*.9*Et));E.push(Wt(Bt(new Qe(2.3,.2,.24),"#4F3420"),Nt,2.8,pe,0,-he-Math.PI/2,0));let Sn=new Ue;Sn.position.set(Nt,2.7,pe),bt.add(Sn);let Ui=new Nn({color:"#B07A2E",specular:"#FFE2A0",shininess:100}),kn=new xt(new On([new ot(.001,-.05),new ot(.18,-.06),new ot(.24,-.25),new ot(.3,-.55),new ot(.42,-.72),new ot(.4,-.76),new ot(.001,-.76)],24),Ui);kn.castShadow=!0;let ds=new xt(new Oe(.07,10,8),De("#3B2A1A"));ds.position.y=-.7,Sn.add(kn,ds),ut.bell={g:Sn,swing:0,v:0},qt.push({id:"bell",x:Nt*.84,z:pe*.84,r:2.2,label:"\u{1F514} \u062F\u0643 \u0627\u0644\u062C\u0631\u0633"});let li=300*f,$i=Math.cos(li)*10.2,Ki=Math.sin(li)*10.2;E.push(Wt(Bt(new xe(.08,.1,9,8),"#D9D9D9"),$i,4.5,Ki)),E.push(Wt(Bt(new Oe(.16,10,8),"#E8C170"),$i,9.05,Ki));let Qn=new Zn(3.2,2,20,10);Qn.translate(1.6,0,0);let fs=new Float32Array(Qn.attributes.position.count*3);for(let Et=0;Et<Qn.attributes.position.count;Et++){let Ae=Qn.attributes.position.getY(Et);ke.set(Ae>.33?"#CE1126":Ae>-.33?"#FFFFFF":"#141414"),Math.abs(Ae)<.33&&Math.abs(Qn.attributes.position.getX(Et)-1.6)<.35&&Math.abs(Ae)<.2&&ke.set("#007A3D"),fs.set([ke.r,ke.g,ke.b],Et*3)}Qn.setAttribute("color",new Ve(fs,3));let zi=new xt(Qn,new Ye({vertexColors:!0,side:en}));zi.position.set($i+.1,7.9,Ki),zi.castShadow=!0,bt.add(zi),ut.flag=zi,ut.flagBase=Float32Array.from(Qn.attributes.position.array);let Oi=new Ue;Oi.position.set(g+3.9,0,0),bt.add(Oi);for(let Et=0;Et<3;Et++){let Ae=Et/3*Re,rn=new xt(new xe(.03,.03,1.3,6),De("#3B3B3B"));rn.position.set(Math.cos(Ae)*.25,.6,Math.sin(Ae)*.25),rn.rotation.set(Math.sin(Ae)*.38,0,-Math.cos(Ae)*.38),Oi.add(rn)}let cc=new xt(new xe(.09,.13,1.1,16),J);cc.rotation.z=Math.PI/2-.15,cc.position.set(.1,1.32,0),Oi.add(cc);let hc=new xt(new xe(.14,.14,.06,16),De("#1A2A3A",{shininess:160,specular:"#FFFFFF"}));hc.rotation.z=Math.PI/2-.15,hc.position.set(.66,1.4,0),Oi.add(hc),Ys(Oi),ut.scope=Oi,qt.push({id:"scope",x:g+3.1,z:0,r:1.8,label:"\u{1F52D} \u0628\u0627\u0648\u0639 \u0628\u0627\u0644\u062A\u0644\u0633\u0643\u0648\u0628"}),qt.push({id:"fountain",x:0,z:0,r:3.4,label:"\u{1FA99} \u0627\u0631\u0645\u0650 \u0639\u0645\u0644\u0629 \u0628\u0627\u0644\u0646\u0627\u0641\u0648\u0631\u0629"});let uc=[45,145,255,330].map(Et=>Et*f);for(let Et of uc){let Ae=Math.cos(Et)*12.2,rn=Math.sin(Et)*12.2;E.push(Wt(Bt(new xe(.06,.08,3.2,6),"#2E2E2E"),Ae,1.6,rn));let fn=new Ue;fn.position.set(Ae,3,rn);let dn=new xt(new xe(.11,.11,.26,8),new yn({color:"#FFD36B"})),Fn=new Pi(new pi({map:p,color:"#FFC14D",transparent:!0,opacity:.7,depthWrite:!1,blending:ri}));Fn.scale.setScalar(.75),fn.add(dn,Fn),bt.add(fn),ut.lanterns.push(fn)}let dc=[];for(let Et=0;Et<4;Et++){let Ae=uc[Et],rn=uc[(Et+1)%4],fn=oi(Ae,rn);fn<0&&(fn+=Re);for(let dn=1;dn<9;dn++){let Fn=Ae+fn*dn/9,Jn=Math.sin(dn/9*Math.PI)*.6;dc.push([Math.cos(Fn)*12.2,3.05-Jn,Math.sin(Fn)*12.2,dn])}}let fc=new mi(new Oe(.07,8,6),new yn({color:"#FFFFFF"}),dc.length),pc=new mn,wf=["#FF5D8F","#FFD23F","#7FD1FF","#8DE26B"];dc.forEach(([Et,Ae,rn,fn],dn)=>{pc.position.set(Et,Ae,rn),pc.updateMatrix(),fc.setMatrixAt(dn,pc.matrix),fc.setColorAt(dn,ke.set(wf[dn%4]))}),bt.add(fc);for(let Et of[80,175,280,350]){let Ae=Et*f,rn=Math.cos(Ae)*11,fn=Math.sin(Ae)*11;E.push(Wt(Bt(new xe(.7,.6,.5,12),"#8E877B"),rn,.25,fn));for(let dn=0;dn<9;dn++)E.push(Wt(Bt(new zn(.13,0),["#FF5D8F","#FFD23F","#FFFFFF","#B28DFF"][dn%4]),rn+Math.cos(dn)*.4,.58,fn+Math.sin(dn)*.4))}let mc=new xt(bn(E),new Ye({vertexColors:!0,side:en}));mc.castShadow=!0,mc.receiveShadow=!0,bt.add(mc);let qh=[62,100,200,320].map(Et=>{let Ae=Et*f;return{x:Math.cos(Ae)*11.6,y:A-.1,z:Math.sin(Ae)*11.6,ry:o()*Re,s:.9}});cn(yt.pineA,Fe.pine,qh,{cast:!0,size:100,far:400});for(let Et of qh)ge.push({x:Et.x,z:Et.z,r:.5,tall:1});let Oo=new xt(new ni(2.12,40),new Nn({color:"#4AA6D8",specular:"#FFFFFF",shininess:140,normalMap:jt,transparent:!0,opacity:.88}));Oo.rotation.x=-Math.PI/2,Oo.position.y=.55,bt.add(Oo),ut.water=Oo;let Yh=140,bf=new Float32Array(Yh*3),Zh=[];for(let Et=0;Et<Yh;Et++)Zh.push([o()*Re,o(),.5+o()*.5]);let Jh=new qe;Jh.setAttribute("position",new Ve(bf,3)),ut.drops=new vs(Jh,new os({size:.16,map:p,color:"#E6F6FF",transparent:!0,opacity:.9,depthWrite:!1})),ut.drops.userData.seed=Zh,ut.drops.frustumCulled=!1,bt.add(ut.drops);let $h=220,Af=new Float32Array($h*3),Kh=[];for(let Et=0;Et<$h;Et++)Kh.push([o()*60-30,o()*8,o()*60-30,o()]);let Qh=new qe;Qh.setAttribute("position",new Ve(Af,3)),ut.leaves=new vs(Qh,new os({size:.22,map:p,color:"#A8D46A",transparent:!0,opacity:0,depthWrite:!1})),ut.leaves.userData.seed=Kh,ut.leaves.frustumCulled=!1,bt.add(ut.leaves);let jh=70,Ef=new Float32Array(jh*6),tu=[];for(let Et=0;Et<jh;Et++)tu.push([o()*50-25,o()*9-1,o()*50-25,.5+o()]);let eu=new qe;eu.setAttribute("position",new Ve(Ef,3)),ut.streaks=new Ns(eu,new ys({color:"#FFFFFF",transparent:!0,opacity:0,depthWrite:!1})),ut.streaks.userData.seed=tu,ut.streaks.frustumCulled=!1,bt.add(ut.streaks),ge.push({x:0,z:0,r:2.6,tall:1});for(let Et of[-1.1,0,1.1])ge.push({x:B+Math.cos(_+Math.PI/2)*Et-Math.cos(_)*0,z:P+Math.sin(_+Math.PI/2)*Et,r:1.05});ge.push({x:Nt+Ce*.9,z:pe+xn*.9,r:.25},{x:Nt-Ce*.9,z:pe-xn*.9,r:.25},{x:$i,z:Ki,r:.3});for(let Et of[80,175,280,350]){let Ae=Et*f;ge.push({x:Math.cos(Ae)*11,z:Math.sin(Ae)*11,r:.75})}}function Jt(S){let w=S==="wolf",E=new Ue,_=new Ue;E.add(_);let B=De(w?"#7E8088":"#4E3626",{shininess:8}),P=De(w?"#C9CACF":"#6E5038",{shininess:8}),X=De(w?"#3E4048":"#2B1D12",{shininess:20}),q=w?.95:1,Z=w?.72:.62,L=w?.22:.33,V=new xt(new Oe(1,22,14),B);V.scale.set(q/2,L,L*(w?.85:.9)),V.position.y=Z,_.add(V);let J=new xt(new Oe(1,16,10),P);if(J.scale.set(q/2.3,L*.6,L*.75),J.position.set(0,Z-L*.4,0),_.add(J),!w){let ce=new xt(new Qe(q*.8,.12,.08),X);ce.position.set(0,Z+L*.95,0),_.add(ce)}let G=new Ue;G.position.set(q/2+.05,Z+(w?.16:0),0),_.add(G);let ft=new xt(new Oe(w?.16:.2,16,12),B);ft.scale.set(1.2,.95,.9),G.add(ft);let Rt=new xt(new xe(w?.05:.09,w?.09:.13,w?.26:.22,10),w?P:B);Rt.rotation.z=-Math.PI/2,Rt.position.set(w?.24:.25,-.04,0),G.add(Rt);let At=new xt(new Oe(w?.035:.07,10,8),X);At.position.set(w?.37:.36,-.03,0),w||At.scale.set(.5,1,1.1),G.add(At);for(let ce of[-1,1]){let Qt=new xt(new Oe(.025,8,6),new yn({color:w?"#F2C14E":"#1A0E08"}));Qt.position.set(.12,.06,ce*.09),G.add(Qt);let Te=new xt(new En(w?.06:.05,w?.16:.1,6),B);if(Te.position.set(-.02,w?.17:.15,ce*.08),Te.rotation.set(ce*.25,0,w?-.1:.4),G.add(Te),!w){let he=new xt(new En(.018,.12,6),De("#F4EFE6"));he.position.set(.36,-.04,ce*.08),he.rotation.z=.6,G.add(he)}}let Kt=new Ue;Kt.position.set(-q/2,Z+.05,0),_.add(Kt);let oe=new xt(w?new gi(.06,.36,4,8):new xe(.015,.02,.18,6),B);oe.position.y=w?-.2:-.09,Kt.add(oe),Kt.rotation.z=w?.9:.4;let Se=[];for(let[ce,Qt]of[[q*.33,1],[-q*.33,0]])for(let Te of[-1,1]){let he=new Ue;he.position.set(ce,Z-L*.4,Te*L*.55),_.add(he);let Nt=new xt(new xe(.045,.06,(Z-L*.4)*.55,8),B);Nt.position.y=-((Z-L*.4)*.55)/2,he.add(Nt);let pe=new Ue;pe.position.y=-(Z-L*.4)*.55,he.add(pe);let Ce=new xt(new xe(.03,.04,(Z-L*.4)*.45,8),w?B:X);Ce.position.y=-((Z-L*.4)*.45)/2,pe.add(Ce),Se.push({hip:he,knee:pe,front:Qt,s:Te})}return Ys(E),e.add(E),{root:E,body:_,head:G,tail:Kt,legs:Se,yaw:0}}let re=[],H=(S,w)=>{let E=S.pts[Ze(w,0,S.pts.length-1)];return{x:E.x,z:E.z,y:E.y}},vt=(S,w,E=0)=>{let _=Jt(S);re.push({kind:S,m:_,home:w,x:w.x+E,z:w.z,y:w.y,vx:0,vz:0,face:o()*Re,state:"idle",t:o()*2,ph:0,cool:0,tx:w.x,tz:w.z,charge:null})};vt("wolf",H(F,Math.floor(F.pts.length*.22)),0),vt("wolf",H(F,Math.floor(F.pts.length*.22)+4),1.5),vt("wolf",H(mt,Pt(mt,"ledge")-26),0),vt("wolf",H(mt,Pt(mt,"ledge")-22),1.2);{let S=St[Math.floor(St.length*.4)],w=St[Math.floor(St.length*.75)];vt("boar",H(S,Math.floor(S.pts.length/2))),vt("boar",H(w,Math.floor(w.pts.length/2)))}let Ct=null,lt={phase:"climb",t:0,p:null,cp:0,coinsGot:0,summit:null,scope:!1,fall:0,focus:null,best:0,startT:0};function Yt(S,w,E,_){let B=Math.hypot(S,w);if(B<g-.45||B<g+1.3&&Math.abs(oi(Math.atan2(w,S),$t))<.24)return{y:A,kind:"plaza"};if(S>g-1&&S<g+4.35&&Math.abs(w)<1.65)return{y:A+.09,kind:"deck"};let P=ve(S,w,E,1);if(!P)return{y:null,edge:"wall"};let X=P.p;if(X.kind==="stones"){for(let q of ie)if(Math.hypot(S-q.x,w-q.z)<q.r+(_?.5:0))return{y:q.y,kind:"stone",stone:q};return P.d<2.5?{y:null,edge:"fall",water:!0,q:P}:{y:null,edge:"wall",q:P}}if(P.d<=X.hw){if(X.kind==="bridge"&&X.gap){let q=(S-X.x)*P.tx+(w-X.z)*P.tz;if(Math.abs(q)<.32)return{y:null,edge:"fall",q:P}}return{y:P.y,kind:X.kind,q:P}}return X.kind==="bridge"?{y:null,edge:"fall",q:P}:X.kind==="ledge"?{y:null,edge:Math.hypot(S,w)>Math.hypot(X.x,X.z)?"fall":"wall",q:P}:{y:null,edge:"wall",q:P}}function ee(S,w={}){if(!Ct||Ct.id!==S.id){if(Ct)for(let B of[Ct.root,Ct.chute,Ct.drop,Ct.rope])e.remove(B);Ct=lc(S,p),e.add(Ct.root,Ct.chute,Ct.drop,Ct.rope),Ct.turn=0,Ct.blink=0,Ct.nextBlink=2}for(let B of v)B.taken=!1;fe.forEach((B,P)=>{B.active=P===0,U[P].material.color.set(P===0?"#FFD23F":"#F4F1EA")}),lt.cp=0,lt.coinsGot=0,lt.summit=null,lt.scope=!1,lt.fall=0,lt.focus=null,lt.t=0,lt.phase="climb";let E=fe[0],_=F.pts[6];lt.p={x:E.x,z:E.z,y:E.y,vx:0,vz:0,vy:0,air:!1,face:Math.atan2(_.z-E.z,_.x-E.x),speed:0,run:!1,hopPh:0,landT:0,stun:0,rot:0,chute:0,ground:E.y},w.at==="summit"&&Object.assign(lt.p,{x:-g+2.5,z:2,y:A,ground:A});for(let B of re)B.x=B.home.x,B.z=B.home.z,B.state="idle",B.cool=0;return y.yaw=lt.p.face,y.pitch=.24,y.init=!1,gt=-1,r.wind.value=0,{checkpoints:fe.length,coins:v.length,trail:Math.round(me.length*.8)}}function Pe(S){let w=fe[lt.cp],E=lt.p,_=w.seg.pts[Math.min(w.k+6,w.seg.pts.length-1)];Object.assign(E,{x:w.x,z:w.z,y:w.y,vx:0,vz:0,vy:0,air:!1,stun:0,rot:0,ground:w.y,face:Math.atan2(_.z-w.z,_.x-w.x)}),lt.fall=0,y.yaw=E.face,y.init=!1,S.push(["respawn",w.name])}function zt(S,w,E,_,B){let P=Yt(w,E,S.y);if(P.y!=null&&Math.abs(P.y-S.y)<1.1)return{x:w,z:E,y:P.y};if(!B&&P.edge==="fall"&&!S.air)return{fall:!0,water:P.water};if(P.q){let X=w-S.x,q=E-S.z,Z=X*P.q.tx+q*P.q.tz,L=S.x+P.q.tx*Z,V=S.z+P.q.tz*Z,J=Yt(L,V,S.y);if(J.y!=null&&Math.abs(J.y-S.y)<1.1)return{x:L,z:V,y:J.y}}return null}function Xe(S,w){let E=[],_=lt.p;if(!_)return E;if(lt.t+=S,y.yaw+=w.dyaw||0,y.pitch=Ze(y.pitch+(w.dpitch||0),.06,1.15),lt.scope)return y.scopeYaw=Ze((y.scopeYaw||0)+(w.dyaw||0)*.35,-.9,.9),y.scopePitch=Ze((y.scopePitch||-.2)+(w.dpitch||0)*-.3,-.55,.2),It(S),E;let B=Math.cos(y.yaw),P=Math.sin(y.yaw),X=-Math.sin(y.yaw),q=Math.cos(y.yaw),Z=B*(w.jy||0)+X*(w.jx||0),L=P*(w.jy||0)+q*(w.jx||0),V=Math.hypot(Z,L);V>1e-4&&(Z/=V,L/=V);let J=Ze(w.mag||0,0,1),G=lt.summit;if(G&&G.phase==="lift")return ai(S,E),It(S),E;if(lt.fall>0)return lt.fall+=S,_.vy-=22*S,_.y+=_.vy*S,_.x+=_.vx*S*.5,_.z+=_.vz*S*.5,_.rot+=S*7,lt.fall>1.25&&Pe(E),It(S),E;_.stun>0&&(_.stun-=S,J=0);let ft=J>.62&&!w.sneak,Rt=J<.08?0:ft?5.6:2.3*Ze(J/.62,.4,1),At=0,Kt=0;G&&G.wind>0&&(At=G.wdx*G.wind*1.6,Kt=G.wdz*G.wind*1.6);let oe=_.air?3:10,Se=_.air?Math.max(Rt,_.airSpd||0):Rt;if(_.vx=je(_.vx,Z*Se+At,oe,S),_.vz=je(_.vz,L*Se+Kt,oe,S),w.jump&&!_.air&&_.stun<=0){_.air=!0,_.vy=6,_.ground=_.y,E.push("jump");let he=Math.hypot(_.vx,_.vz);he>.4&&he<3.4&&(_.vx*=3.4/he,_.vz*=3.4/he),_.airSpd=J>.08?Math.max(3.4,he):0}let ce=_.x+_.vx*S,Qt=_.z+_.vz*S;if([ce,Qt]=Me(ce,Qt,.4),_.air){_.vy-=14*S;let he=_.y+_.vy*S,Nt=Yt(ce,Qt,_.y,!0);if(Nt.y!=null&&he<=Nt.y&&_.vy<=0&&Nt.y-_.y<.9){if(_.x=ce,_.z=Qt,_.y=Nt.y,_.air=!1,_.vy=0,_.landT=.25,E.push(Nt.kind==="stone"?"landStone":"land"),Nt.stone){let pe=Math.hypot(_.x-Nt.stone.x,_.z-Nt.stone.z),Ce=.35;pe>Ce&&(_.x=Nt.stone.x+(_.x-Nt.stone.x)/pe*Ce,_.z=Nt.stone.z+(_.z-Nt.stone.z)/pe*Ce),_.vx*=.2,_.vz*=.2}}else Nt.y==null&&Nt.edge==="wall"||(_.x=ce,_.z=Qt),_.y=he;_.air&&_.y<_.ground-1.6&&(lt.fall=.01,E.push(["fall",Nt.water?"water":"drop"]))}else{let he=zt(_,ce,Qt,E);he&&he.fall?(_.x=ce,_.z=Qt,lt.fall=.01,_.vy=0,E.push(["fall",he.water?"water":"drop"])):he?(_.speed=Math.hypot(he.x-_.x,he.z-_.z)/S,_.x=he.x,_.z=he.z,_.y=he.y):(_.speed=0,_.vx*=.5,_.vz*=.5)}_.run=ft&&_.speed>3,_.speed>.3&&!_.air?_.face=Cn(_.face,Math.atan2(_.vz-Kt,_.vx-At),12,S):_.air&&Math.hypot(_.vx,_.vz)>.5&&(_.face=Cn(_.face,Math.atan2(_.vz,_.vx),8,S));let Te=_.hopPh;_.hopPh=_.speed<.3||_.air?0:_.hopPh+_.speed*S*2.1,_.hopPh&&Math.floor(Te/Math.PI)!==Math.floor(_.hopPh/Math.PI)&&E.push(["step",_.run,Yt(_.x,_.z,_.y).kind]),_.landT=Math.max(0,_.landT-S),fe.forEach((he,Nt)=>{Nt>lt.cp&&Math.hypot(_.x-he.x,_.z-he.z)<3.2&&Math.abs(_.y-he.y)<2.5&&(lt.cp=Nt,he.active=!0,U[Nt].material.color.set("#FFD23F"),E.push(["checkpoint",he.name,Nt]))});for(let he of v)!he.taken&&Math.hypot(he.x-_.x,he.z-_.z)<1&&Math.abs(he.y-(_.y+.6))<1.2&&(he.taken=!0,lt.coinsGot++,E.push(["coin",he]));return se(S,E),!G&&Math.hypot(_.x,_.z)<g-1&&Math.abs(_.y-A)<1&&(lt.summit={t:0,phase:"wait",wind:0,wdx:1,wdz:.3},lt.phase="summit",E.push("summit")),lt.summit&&gn(S,E),It(S),E}function Me(S,w,E){for(let _ of ge){let B=S-_.x,P=w-_.z,X=E+_.r,q=B*B+P*P;if(q<X*X&&q>1e-8){let Z=Math.sqrt(q),L=(X-Z)/Z;S+=B*L,w+=P*L}}return[S,w]}function se(S,w){let E=lt.p;for(let _ of re){_.t+=S,_.cool=Math.max(0,_.cool-S);let B=E.x-_.x,P=E.z-_.z,X=Math.hypot(B,P),q=Math.abs(E.y-_.y),Z=E.run?14:E.speed>.4?9:5.5,L=_.kind==="wolf",V=(J,G,ft)=>{let Rt=J-_.x,At=G-_.z,Kt=Math.hypot(Rt,At);if(Kt<.05)return _.vx=_.vz=0,Kt;_.vx=je(_.vx,Rt/Kt*ft,6,S),_.vz=je(_.vz,At/Kt*ft,6,S);let oe=zt(_,_.x+_.vx*S,_.z+_.vz*S,w,!0);return oe?(_.x=oe.x,_.z=oe.z,_.y=oe.y):(_.vx*=.3,_.vz*=.3),_.face=Cn(_.face,Math.atan2(_.vz,_.vx),8,S),Kt};switch(_.state){case"idle":if(_.cool<=0&&X<Z&&q<3&&lt.fall<=0&&!lt.summit){_.state="notice",_.t=0,w.push([L?"growl":"grunt",_]);break}if(_.t>3+Math.random()*3){_.t=0;let J=Math.random()*Re;_.tx=_.home.x+Math.cos(J)*5,_.tz=_.home.z+Math.sin(J)*5}Math.hypot(_.tx-_.x,_.tz-_.z)>.6?V(_.tx,_.tz,1):_.vx=_.vz=0;break;case"notice":if(_.vx=_.vz=0,_.face=Cn(_.face,Math.atan2(P,B),10,S),_.t>(L?.6:.9)){if(_.state=L?"chase":"charge",_.t=0,!L){let J=X||1;_.charge=[B/J,P/J]}w.push([L?"howl":"grunt",_])}break;case"chase":V(E.x,E.z,4.7),(X>22||_.t>7||Math.hypot(_.x-_.home.x,_.z-_.home.z)>32)&&(_.state="return",_.cool=3);break;case"charge":{let G=zt(_,_.x+_.charge[0]*7.8*S,_.z+_.charge[1]*7.8*S,w,!0);G&&(_.x=G.x,_.z=G.z,_.y=G.y,_.vx=_.charge[0]*7.8,_.vz=_.charge[1]*7.8,_.face=Math.atan2(_.charge[1],_.charge[0])),(!G||_.t>1.8)&&(_.vx=_.vz=0,_.state=X<12&&_.t<6?"notice":"return",_.t=0);break}case"return":V(_.home.x,_.home.z,2.2)<1&&(_.state="idle",_.t=0);break}if((_.state==="chase"||_.state==="charge")&&X<.95&&q<1.2&&E.stun<=0&&lt.fall<=0){let J=X||1;E.vx=B/J*6,E.vz=P/J*6,E.stun=.9,E.landT=.3,_.state="return",_.cool=6,w.push(["bitten",_.kind])}}}let Je=45;function gn(S,w){let E=lt.summit;if(E.t+=S,E.phase==="wait"&&E.t>=Je&&(E.phase="wind",E.t=0,w.push("windStart")),E.phase==="wind"&&(E.wind=Ze(E.t/7,0,1),r.wind.value=E.wind,E.t>8.5)){E.phase="lift",E.t=0;let _=lt.p;E.from=[_.x,_.y,_.z],_.air=!0,lt.scope=!1,w.push("lift")}}function ai(S,w){let E=lt.summit,_=lt.p;E.t+=S,r.wind.value=1;let B=E.t;_.x=E.from[0]+E.wdx*B*B*2.2,_.z=E.from[2]+E.wdz*B*B*2.2,_.y=E.from[1]+B*B*3.2+Math.sin(B*6)*.2,_.rot+=S*(4+B*3),B>2.6&&!E.done&&(E.done=!0,w.push("toValley"))}function Js(){let S=[];for(let w of re)(w.state==="chase"||w.state==="charge"||w.state==="notice")&&S.push({kind:w.kind,x:w.x,y:w.y,z:w.z,state:w.state});return S}function Ts(){lt.summit&&lt.summit.phase==="wait"&&(lt.summit.t=Je)}function zo(S){let w=lt.p;if(S==="bell")return ut.bell.v+=2.4,!0;if(S==="tea"){for(let E of Mt)E.kind==="seller"&&(E.pour=1.4,E.talk=3);return!0}if(S==="chat"){let E=Mt.filter(_=>_.kind==="tea");return E[Math.floor(Math.random()*E.length)].talk=3,!0}return S==="scope"&&(lt.scope=!lt.scope,y.scopeYaw=.01,y.scopePitch=-.2),!0}function z(){let S=lt.p;if(!lt.summit||lt.summit.phase==="lift")return null;let w=null,E=1e9;for(let _ of qt){let B=Math.hypot(S.x-_.x,S.z-_.z);B<_.r&&B<E&&(E=B,w=_)}return w}let tt=null,y={yaw:0,pitch:.24,dist:5.6,init:!1,tgt:new O,pos:new O},N=new O,at=new O;function It(S){let w=lt.p,E=lt.summit&&lt.summit.phase==="lift";if(lt.scope){let G=g+3.9-.4,ft=A+1.45,Rt=y.scopeYaw||0,At=y.scopePitch||-.2;y.pos.set(G,ft,0),y.tgt.set(G+Math.cos(Rt)*100*Math.cos(At),ft+Math.sin(At)*100,Math.sin(Rt)*100*Math.cos(At));return}N.set(w.x,w.y+(E?.6:1.45),w.z);let _=E?7:lt.summit?6.4:5.6;y.init||(y.tgt.copy(N),y.dist=_,y.effPitch=null,y.effDist=null,y.init=!0);let B=lt.fall>0?2:14;if(y.tgt.x=je(y.tgt.x,N.x,B,S),y.tgt.z=je(y.tgt.z,N.z,B,S),y.tgt.y=je(y.tgt.y,N.y,lt.fall>0?1.5:10,S),y.dist=je(y.dist,_,3,S),!tt){tt=new Map;for(let G of ge)if(G.tall){let ft=Ge(Math.floor(G.x/4),Math.floor(G.z/4));tt.has(ft)||tt.set(ft,[]),tt.get(ft).push(G)}}let P=(G,ft,Rt)=>{let At=Math.floor(G/4),Kt=Math.floor(ft/4);for(let oe=-1;oe<=1;oe++)for(let Se=-1;Se<=1;Se++){let ce=tt.get(Ge(At+oe,Kt+Se));if(ce){for(let Qt of ce)if(Rt(Qt))return!0}}return!1},X=(G,ft)=>at.set(y.tgt.x-Math.cos(y.yaw)*Math.cos(ft)*G,y.tgt.y+Math.sin(ft)*G,y.tgt.z-Math.sin(y.yaw)*Math.cos(ft)*G),q=(G,ft)=>{for(let Rt=1;Rt<=8;Rt++){let At=Rt/8;X(G*At,ft);let Kt=wt(at.x,at.z);if(at.y<Kt+.4||Rt>=2&&!lt.summit&&P(at.x,at.z,oe=>{let Se=oe.r*3.4,ce=at.x-oe.x,Qt=at.z-oe.z;return ce*ce+Qt*Qt<Se*Se&&at.y>Kt+1.9&&at.y<Kt+9}))return At}return 0},Z=y.pitch,L=y.dist,V=q(L,Z);if(V){let G=Math.min(Z,.04),ft=q(L,G);(!ft||ft>V)&&(Z=G,V=ft),V&&(L=Math.max(1.8,L*(V-1/8)))}y.effPitch=y.effPitch==null?Z:je(y.effPitch,Z,Z<y.effPitch?8:2.5,S),y.effDist=y.effDist==null?L:je(y.effDist,L,L<y.effDist?10:2.5,S),X(Math.min(y.effDist,L+.6),y.effPitch),P(at.x,at.z,G=>{let ft=at.x-G.x,Rt=at.z-G.z,At=ft*ft+Rt*Rt,Kt=G.r+.35;if(At<Kt*Kt){let oe=Math.sqrt(At)||.01;at.x=G.x+ft/oe*Kt,at.z=G.z+Rt/oe*Kt}return!1});let J=wt(at.x,at.z)+.4;at.y<J&&(at.y=J),y.pos.copy(at)}function _t(){return(y.yaw*180/Math.PI%360+360)%360}let Ot=0,gt=-1,Lt=0,Xt=0,Ut=2,Vt=390,Ft=844,_e=new mn;_e.rotation.order="YXZ";function ye(S,w,E){Vt=S,Ft=w,Ut=E,t.setPixelRatio(E),t.setSize(S,w,!1),s.aspect=S/w,s.updateProjectionMatrix()}function $e(S,w){let E=lt.p,_=Ct,B=!E.air&&lt.fall<=0,P=B?Math.abs(Math.sin(E.hopPh))*(E.run?.17:.08):0;_.root.position.set(E.x,E.y+P,E.z),_.turn=Cn(_.turn,Math.PI/2-E.face,14,w),_.root.rotation.y=_.turn,_.inner.rotation.z=-E.rot,!(lt.fall>0)&&!(lt.summit&&lt.summit.phase==="lift")&&(E.rot*=Math.pow(.001,w));let X=E.landT>0?E.landT*2.4:0;E.air&&(X=-.12),B&&E.speed>.3&&(X+=(1-Math.abs(Math.sin(E.hopPh)))*.22-.07),_.inner.scale.set(1+.2*X,1-.22*X,1+.2*X),_.inner.position.y=.55*(1-.22*X);for(let[Z,L]of _.feet.entries())L.position.y=-.49+(B&&E.speed>.3?Math.max(0,Math.sin(E.hopPh*2+Z*Math.PI))*.06:0);let q=lt.fall>0||E.stun>0||lt.summit&&(lt.summit.phase==="lift"||lt.summit.wind>.5);_.nextBlink-=w,_.nextBlink<0&&(_.blink=.14,_.nextBlink=2.5+Math.random()*2.5),_.blink=Math.max(0,_.blink-w);for(let Z of _.eyes)Z.scale.set(q?1.08:1,q?1.15:_.blink>0?.12:1,1);for(let Z of _.pupils)Z.scale.setScalar(q?.72:1);if(_.smile.visible=!q,_.ooh.visible=q,_.acc.userData.star&&(_.acc.userData.star.rotation.y=S*2),_.fire){_.bodyMat.emissiveIntensity=.5+Math.sin(S*13)*.1;for(let Z of _.flames)Z.scale.set(1,.8+Math.sin(S*14+Z.userData.ph*1.7)*.25,1)}_.chute.visible=!1,_.drop.visible=!1,_.rope.visible=!1}function T(S,w){for(let E of re){let _=E.m,B=Math.hypot(E.vx,E.vz)>.3,P=E.state==="chase"||E.state==="charge";E.ph+=w*(P?16:B?8:0),_.root.position.set(E.x,E.y,E.z),_.yaw=Cn(_.yaw,-E.face,10,w),_.root.rotation.y=_.yaw,_.body.position.y=B?Math.abs(Math.sin(E.ph))*(P?.06:.02):0,_.head.rotation.z=E.state==="notice"?-.25+Math.sin(S*20)*.04:B?-.1:Math.sin(S*1.3)*.15-.2,_.tail.rotation.z=(E.kind==="wolf"?.9:.4)+(P?.5:0)+Math.sin(S*(P?14:3))*.15;for(let X of _.legs){let q=X.front?X.s>0?0:Math.PI:(X.s>0?Math.PI:0)+(P?.6:0);B?(X.hip.rotation.z=Math.sin(E.ph+q)*(P?.7:.4),X.knee.rotation.z=(X.front?-1:1)*Math.max(0,-Math.cos(E.ph+q))*.5):(X.hip.rotation.z=je(X.hip.rotation.z,0,8,w),X.knee.rotation.z=je(X.knee.rotation.z,0,8,w))}}}function W(S,w){let E=lt.summit,_=E?E.wind:0,P=E&&E.phase==="lift"?1:_,X=ut.flag.geometry.attributes.position,q=ut.flagBase;for(let At=0;At<X.count;At++){let Kt=q[At*3],oe=q[At*3+1],Se=Kt/3.2;X.setXYZ(At,Kt*(1-P*.05),oe-Se*Se*.25*(1-P),Math.sin(S*(4+P*12)-Kt*(1.6+P*1.5))*Se*(.18+P*.42)+Math.sin(S*7+oe*3)*.04*Se)}X.needsUpdate=!0,ut.flag.geometry.computeVertexNormals(),ut.flag.rotation.y=-.3*P;let Z=ut.bell;Z.v+=(-Z.swing*18-Z.v*1.4)*w,Z.swing+=Z.v*w,Z.g.rotation.x=Z.swing+P*.25*Math.sin(S*6);for(let At of ut.lanterns)At.rotation.z=Math.sin(S*(1.6+P*8)+At.position.x)*(.06+P*.45),At.rotation.x=Math.cos(S*(1.3+P*7))*P*.3;let L=ut.drops.geometry.attributes.position,V=ut.drops.userData.seed;for(let At=0;At<V.length;At++){let[Kt,oe,Se]=V[At],ce=(S*Se*.9+oe)%1,Qt=.15+ce*1.6;L.setXYZ(At,Math.cos(Kt)*Qt+P*ce*3.5,2.35+Math.sin(ce*Math.PI)*.7-ce*1.8,Math.sin(Kt)*Qt+P*ce*1.2)}L.needsUpdate=!0,jt.offset.x=S*.03,ut.water.material.normalScale.set(.6+P,.6+P);let J=ut.streaks.geometry.attributes.position,G=ut.streaks.userData.seed;ut.streaks.material.opacity=un(.15,.8,P)*.55;for(let At=0;At<G.length;At++){let[Kt,oe,Se,ce]=G[At],Qt=(S*ce*(.6+P*1.6)+At*.137)%1,Te=-30+Qt*60,he=1.5+P*3.5,Nt=Se+Math.sin(S*2+At)*.6,pe=oe+Math.sin(Qt*9+At)*.4;J.setXYZ(At*2,Te,pe,Nt+Qt*12-6),J.setXYZ(At*2+1,Te-he,pe+.05,Nt+Qt*12-6-he*.3)}J.needsUpdate=!0;let ft=ut.leaves.geometry.attributes.position,Rt=ut.leaves.userData.seed;ut.leaves.material.opacity=P*.9;for(let At=0;At<Rt.length;At++){let[Kt,oe,Se,ce]=Rt[At],Qt=S*(.5+ce)*(.4+P)%1;ft.setXYZ(At,(Kt+Qt*70)%60-30,oe*.6+.4+Math.sin(S*3+At)*.5,Se+Math.sin(S+ce*6)*2+Qt*20*.3)}ft.needsUpdate=!0;for(let At of Mt){let Kt=At.m,[oe,Se]=Kt.arms,ce=1-Math.exp(-6*w);Kt.root.scale.y=1+Math.sin(S*1.6+At.base.x)*.006,Kt.root.rotation.x=-P*.14+Math.sin(S*9+At.base.x)*P*.03;let Qt=0,Te=-.12,he=-.25,Nt=0,pe=.12,Ce=-.25;if(P>.25&&(Qt=-2.4,Te=0,he=-1.3),At.kind==="seller")Nt=-.5+Math.sin(S*2)*.1,Ce=-1.2,At.pour>0&&(At.pour-=w,Nt=-1,Ce=-.6);else if(At.kind==="tea"){let xn=Math.max(0,Math.sin(S*.5+At.ph))**8;Nt=-.45-xn*.7,Ce=-1.25-xn*.9}else At.kind==="stand"&&(Qt=P>.25?Qt:-.2,Nt=-.15+Math.sin(S*1.1)*.25*(At.talk>0?1:.3),Ce=-.6);oe.sh.rotation.x+=(Qt-oe.sh.rotation.x)*ce,oe.sh.rotation.z+=(Te-oe.sh.rotation.z)*ce,oe.el.rotation.x+=(he-oe.el.rotation.x)*ce,Se.sh.rotation.x+=(Nt-Se.sh.rotation.x)*ce,Se.sh.rotation.z+=(pe-Se.sh.rotation.z)*ce,Se.el.rotation.x+=(Ce-Se.el.rotation.x)*ce,Kt.mouth.scale.y=At.talk>0?.25+Math.abs(Math.sin(S*15))*.9:.3,At.talk>0&&(At.talk-=w)}for(let At of ut.cups)At.position.x+=P*w*.05*Math.sin(S*13+At.position.z*20);ut.kiosk.children[0].rotation.z=P*.01*Math.sin(S*17)}function j(S,w={}){let E=performance.now(),_=Ot?Ze((E-Ot)/1e3,0,.1):1/60;Ot=E;let B=gt>=0?Ze(S-gt,0,.1):1/60;if(gt=S,r.time.value=S,Xt++,Lt=Lt*.97+(_>1/38?1:0)*.03,Xt>90&&Lt>.6&&Ut>1.01&&(ye(Vt,Ft,Math.max(1,Ut-.25)),Lt=0,Xt=0),!Ct||!lt.p)return;$e(S,B),T(S,B),(Math.hypot(lt.p.x,lt.p.z)<60||lt.scope)&&W(S,B);let P=0;for(let L=0;L<v.length;L++){let V=v[L];V.taken||(V.x-lt.p.x)**2+(V.z-lt.p.z)**2>3600||(_e.position.set(V.x,V.y+Math.sin(S*2+L)*.08,V.z),_e.rotation.set(Math.PI/2,S*3+L,0),_e.scale.setScalar(1),_e.updateMatrix(),ht.setMatrixAt(P++,_e.matrix))}ht.count=P,ht.instanceMatrix.needsUpdate=!0,U.forEach((L,V)=>{L.rotation.y=Math.sin(S*2+V)*.3}),Ie.visible=lt.p.y>30||lt.scope;let X=un(55,90,lt.p.y);if(e.fog.near=Tn(20,90,X),e.fog.far=lt.scope?1500:Tn(115,700,X),ut.scope.visible=!lt.scope,s.fov=lt.scope?13:62,s.updateProjectionMatrix(),s.position.copy(y.pos),s.lookAt(y.tgt),w.shake>0){let L=w.shake*.25;s.position.x+=(Math.random()-.5)*L,s.position.y+=(Math.random()-.5)*L}h.position.copy(s.position);for(let L of K){let V=(L.x-s.position.x)**2+(L.z-s.position.z)**2,J=V<(L.far+(lt.scope?400:0)+X*110)**2;if(L.lo){let G=V<3844&&!lt.scope;L.m.visible=J&&G,L.lo.visible=J&&!G}else L.m.visible=J}let q=Math.round(lt.p.x/.25)*.25,Z=Math.round(lt.p.z/.25)*.25;c.target.position.set(q,lt.p.y,Z),c.position.set(q+l.x*80,lt.p.y+l.y*80,Z+l.z*80),t.render(e,s)}let $=new O;function st(S,w,E){return $.set(S,w,E).project(s),{x:($.x+1)/2,y:(1-$.y)/2,vis:$.z<1&&$.z>-1}}function Dt(S,w=3){for(let E of Mt)E.kind===S&&(E.talk=w)}return{setSize:ye,enter:ee,step:Xe,render:j,project:st,heading:_t,interact:zo,nearInteract:z,skipWait:Ts,talkNpc:Dt,threats:Js,ground:wt,surface:Yt,S:lt,cam:y,U:r,info:{RP:g,HS:A,checkpoints:fe,coins:v,segs:x,stones:ie,bridges:te,beasts:re,signs:Ke,trailLen:Math.round(me.length*.8),area:Math.round(Math.PI*g*g)},renderer:t,scene:e,camera:s,get pr(){return Ut}}}return Ff(R_);})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
