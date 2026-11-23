/* نطّة — مشهد الوادي 3D. يتضمن three.js r187 (MIT, © 2010-2026 three.js authors) */
var NattaValley3D=(()=>{var gc=Object.defineProperty;var Ef=Object.getOwnPropertyDescriptor;var Tf=Object.getOwnPropertyNames;var Cf=Object.prototype.hasOwnProperty;var Rf=(i,t)=>{for(var e in t)gc(i,e,{get:t[e],enumerable:!0})},Pf=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Tf(t))!Cf.call(i,s)&&s!==e&&gc(i,s,{get:()=>t[s],enumerable:!(n=Ef(t,s))||n.enumerable});return i};var If=i=>Pf(gc({},"__esModule",{value:!0}),i);var C_={};Rf(C_,{create:()=>vf,createMountain:()=>Mf,makeRenderer:()=>jl,supported:()=>_f});var nl="188dev";var Hu=0,eh=1,Wu=2;var ks=1,Xu=2,br=3,ws=0,Nn=1,je=2,Gs=0,Ar=1,si=2,nh=3,ih=4,qu=5;var Vs=100,Yu=101,Zu=102,Ju=103,$u=104,Ku=200,Qu=201,ju=202,td=203,sh=204,rh=205,ed=206,nd=207,id=208,sd=209,rd=210,od=211,ad=212,ld=213,cd=214,xa=0,_a=1,ya=2,pr=3,va=4,Ma=5,Sa=6,wa=7,Mo=0,hd=1,ud=2,Xi=0,oh=1,ah=2,lh=3,So=4,ch=5,hh=6,uh=7;var dh=300,Hs=301,Er=302,il=303,sl=304,mr=1e3,ki=1001,ba=1002,Ln=1003,dd=1004;var wo=1005;var Xn=1006,rl=1007;var ls=1008;var $n=1009,fh=1010,ph=1011,Tr=1012,ol=1013,Ii=1014,_i=1015,Fi=1016,al=1017,ll=1018,Ws=1020,mh=35902,gh=35899,xh=1021,_h=1022,Li=1023,ss=1026,cs=1027,cl=1028,hl=1029,bs=1030,ul=1031;var dl=1033,bo=33776,Ao=33777,Eo=33778,To=33779,fl=35840,pl=35841,ml=35842,gl=35843,xl=36196,_l=37492,yl=37496,vl=37488,Ml=37489,Co=37490,Sl=37491,wl=37808,bl=37809,Al=37810,El=37811,Tl=37812,Cl=37813,Rl=37814,Pl=37815,Il=37816,Fl=37817,Ll=37818,Dl=37819,Nl=37820,Ul=37821,zl=36492,Ol=36494,Bl=36495,kl=36283,Gl=36284,Ro=36285,Vl=36286;var Wr=2300,Aa=2301,ma=2302,Wc=2303,Xc=2400,qc=2401,Yc=2402;var fd=3200;var Po=0,pd=1,hs="",Wn="srgb",Xr="srgb-linear",qr="linear",dn="srgb";var ga=7680;var md=519,gd=512,xd=513,_d=514,yh=515,yd=516,vd=517,vh=518,Mh=519,Sh=35044;var wh="300 es",li=2e3,gr=2001;function Ff(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}var Lf={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};typeof Float16Array<"u"&&(Lf.Float16Array=Float16Array);function Df(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Md(){let i=Yr("canvas");return i.style.display="block",i}var iu={},xr=null;function Zr(...i){let t="THREE."+i.shift();xr?xr("log",t,...i):console.log(t,...i)}function Sd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Fe(...i){i=Sd(i);let t="THREE."+i.shift();if(xr)xr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ze(...i){i=Sd(i);let t="THREE."+i.shift();if(xr)xr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Gr(...i){let t=i.join(" ");t in iu||(iu[t]=!0,Fe(...i))}function wd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var bd={[xa]:xa,[ya]:Sa,[va]:va,[pr]:Ma,[_a]:_a,[Sa]:ya,[wa]:wa,[Ma]:pr},Vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var xc=Math.PI/180,Ea=180/Math.PI;function As(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kn[i&255]+kn[i>>8&255]+kn[i>>16&255]+kn[i>>24&255]+"-"+kn[t&255]+kn[t>>8&255]+"-"+kn[t>>16&15|64]+kn[t>>24&255]+"-"+kn[e&63|128]+kn[e>>8&255]+"-"+kn[e>>16&255]+kn[e>>24&255]+kn[n&255]+kn[n>>8&255]+kn[n>>16&255]+kn[n>>24&255]).toLowerCase()}function en(i,t,e){return Math.max(t,Math.min(e,i))}function Nf(i,t){return(i%t+t)%t}function _c(i,t,e){return(1-e)*i+e*t}function Ad(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ed(i,t){if(t.constructor===Float32Array)return i;let e=Hl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Td(i,t){if(t.constructor===Float32Array)return i;let e=Hl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Rh=class Rh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=en(this.x,t.x,e.x),this.y=en(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=en(this.x,t,e),this.y=en(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(en(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rh.prototype.isVector2=!0;var ct=Rh,ci=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],d=r[o+0],u=r[o+1],g=r[o+2],b=r[o+3];if(p!==b||l!==d||c!==u||h!==g){let m=l*d+c*u+h*g+p*b;m<0&&(d=-d,u=-u,g=-g,b=-b,m=-m);let f=1-a;if(m<.9995){let M=Math.acos(m),R=Math.sin(M);f=Math.sin(f*M)/R,a=Math.sin(a*M)/R,l=l*f+d*a,c=c*f+u*a,h=h*f+g*a,p=p*f+b*a}else{l=l*f+d*a,c=c*f+u*a,h=h*f+g*a,p=p*f+b*a;let M=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=M,c*=M,h*=M,p*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[o],d=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+h*p+l*u-c*d,t[e+1]=l*g+h*d+c*p-a*u,t[e+2]=c*g+h*u+a*d-l*p,t[e+3]=h*g-a*p-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),p=a(r/2),d=l(n/2),u=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*p+c*u*g,this._y=c*u*p-d*h*g,this._z=c*h*g+d*u*p,this._w=c*h*p-d*u*g;break;case"YXZ":this._x=d*h*p+c*u*g,this._y=c*u*p-d*h*g,this._z=c*h*g-d*u*p,this._w=c*h*p+d*u*g;break;case"ZXY":this._x=d*h*p-c*u*g,this._y=c*u*p+d*h*g,this._z=c*h*g+d*u*p,this._w=c*h*p-d*u*g;break;case"ZYX":this._x=d*h*p-c*u*g,this._y=c*u*p+d*h*g,this._z=c*h*g-d*u*p,this._w=c*h*p+d*u*g;break;case"YZX":this._x=d*h*p+c*u*g,this._y=c*u*p+d*h*g,this._z=c*h*g-d*u*p,this._w=c*h*p-d*u*g;break;case"XZY":this._x=d*h*p-c*u*g,this._y=c*u*p-d*h*g,this._z=c*h*g+d*u*p,this._w=c*h*p+d*u*g;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],p=e[10],d=n+a+p;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(n>a&&n>p){let u=2*Math.sqrt(1+n-a-p);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>p){let u=2*Math.sqrt(1+a-n-p);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+p-n-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ph=class Ph{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(su.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(su.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),p=2*(r*n-o*e);return this.x=e+l*c+o*p-a*h,this.y=n+l*h+a*c-r*p,this.z=s+l*p+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=en(this.x,t.x,e.x),this.y=en(this.y,t.y,e.y),this.z=en(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=en(this.x,t,e),this.y=en(this.y,t,e),this.z=en(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(en(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return yc.copy(this).projectOnVector(t),this.sub(yc)}reflect(t){return this.sub(yc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ph.prototype.isVector3=!0;var B=Ph,yc=new B,su=new ci,Ih=class Ih{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],p=n[7],d=n[2],u=n[5],g=n[8],b=s[0],m=s[3],f=s[6],M=s[1],R=s[4],w=s[7],D=s[2],I=s[5],_=s[8];return r[0]=o*b+a*M+l*D,r[3]=o*m+a*R+l*I,r[6]=o*f+a*w+l*_,r[1]=c*b+h*M+p*D,r[4]=c*m+h*R+p*I,r[7]=c*f+h*w+p*_,r[2]=d*b+u*M+g*D,r[5]=d*m+u*R+g*I,r[8]=d*f+u*w+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=h*o-a*c,d=a*l-h*r,u=c*r-o*l,g=e*p+n*d+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return t[0]=p*b,t[1]=(s*c-h*n)*b,t[2]=(a*n-s*o)*b,t[3]=d*b,t[4]=(h*e-s*l)*b,t[5]=(s*r-a*e)*b,t[6]=u*b,t[7]=(n*l-c*e)*b,t[8]=(o*e-n*r)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vc.makeScale(t,e)),this}rotate(t){return Gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vc.makeRotation(-t)),this}translate(t,e){return Gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ih.prototype.isMatrix3=!0;var He=Ih,vc=new He,ru=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ou=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uf(){let i={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===dn&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dn&&(s.r=fr(s.r),s.g=fr(s.g),s.b=fr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hs?qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xr]:{primaries:t,whitePoint:n,transfer:qr,toXYZ:ru,fromXYZ:ou,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:t,whitePoint:n,transfer:dn,toXYZ:ru,fromXYZ:ou,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),i}var sn=Uf();function is(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Js,Ta=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Js===void 0&&(Js=Yr("canvas")),Js.width=t.width,Js.height=t.height;let s=Js.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Js}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Yr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=is(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(is(e[n]/255)*255):e[n]=is(e[n]);return{data:e,width:t.width,height:t.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zf=0,_r=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=As(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Mc(s[o].image)):r.push(Mc(s[o]))}else r=Mc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Mc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ta.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}var Of=0,Sc=new B,qn=class i extends Vi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ki,s=ki,r=Xn,o=ls,a=Li,l=$n,c=i.DEFAULT_ANISOTROPY,h=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=As(),this.name="",this.source=new _r(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Sc).x}get height(){return this.source.getSize(Sc).y}get depth(){return this.source.getSize(Sc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Fe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Fe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mr:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mr:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=dh;qn.DEFAULT_ANISOTROPY=1;var Fh=class Fh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){let e=en(t.w,-1,1);this.w=2*Math.acos(e);let n=Math.sqrt(1-e*e);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],d=l[1],u=l[5],g=l[9],b=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,w=(u+1)/2,D=(f+1)/2,I=(h+d)/4,_=(p+b)/4,C=(g+m)/4;return R>w&&R>D?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=I/n,r=_/n):w>D?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=I/s,r=C/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=_/r,s=C/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(p-b)*(p-b)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(p-b)/M,this.z=(d-h)/M,this.w=Math.acos((c+u+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=en(this.x,t.x,e.x),this.y=en(this.y,t.y,e.y),this.z=en(this.z,t.z,e.z),this.w=en(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=en(this.x,t,e),this.y=en(this.y,t,e),this.z=en(this.z,t,e),this.w=en(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(en(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fh.prototype.isVector4=!0;var vn=Fh,Ca=class extends Vi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new vn(0,0,t,e),this.scissorTest=!1,this.viewport=new vn(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new qn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++){let o=this.textures[s],a=o.images?o.images[0]:o.image;a.width=t,a.height=e,a.depth=n,o.isData3DTexture!==!0&&(o.isArrayTexture=a.depth>1)}this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new _r(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ti=class extends Ca{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Jr=class extends qn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ra=class extends qn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var el=class el{constructor(t,e,n,s,r,o,a,l,c,h,p,d,u,g,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,p,d,u,g,b,m)}set(t,e,n,s,r,o,a,l,c,h,p,d,u,g,b,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=d,f[3]=u,f[7]=g,f[11]=b,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new el().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/$s.setFromMatrixColumn(t,0).length(),r=1/$s.setFromMatrixColumn(t,1).length(),o=1/$s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let d=o*h,u=o*p,g=a*h,b=a*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=u+g*c,e[5]=d-b*c,e[9]=-a*l,e[2]=b-d*c,e[6]=g+u*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,u=l*p,g=c*h,b=c*p;e[0]=d+b*a,e[4]=g*a-u,e[8]=o*c,e[1]=o*p,e[5]=o*h,e[9]=-a,e[2]=u*a-g,e[6]=b+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,u=l*p,g=c*h,b=c*p;e[0]=d-b*a,e[4]=-o*p,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*h,e[9]=b-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,u=o*p,g=a*h,b=a*p;e[0]=l*h,e[4]=g*c-u,e[8]=d*c+b,e[1]=l*p,e[5]=b*c+d,e[9]=u*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,u=o*c,g=a*l,b=a*c;e[0]=l*h,e[4]=b-d*p,e[8]=g*p+u,e[1]=p,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*p+g,e[10]=d-b*p}else if(t.order==="XZY"){let d=o*l,u=o*c,g=a*l,b=a*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=d*p+b,e[5]=o*h,e[9]=u*p-g,e[2]=g*p-u,e[6]=a*h,e[10]=b*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bf,t,kf)}lookAt(t,e,n){let s=this.elements;return Qn.subVectors(t,e),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),fs.crossVectors(n,Qn),fs.lengthSq()===0&&(Math.abs(n.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),fs.crossVectors(n,Qn)),fs.normalize(),Oo.crossVectors(Qn,fs),s[0]=fs.x,s[4]=Oo.x,s[8]=Qn.x,s[1]=fs.y,s[5]=Oo.y,s[9]=Qn.y,s[2]=fs.z,s[6]=Oo.z,s[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],p=n[5],d=n[9],u=n[13],g=n[2],b=n[6],m=n[10],f=n[14],M=n[3],R=n[7],w=n[11],D=n[15],I=s[0],_=s[4],C=s[8],k=s[12],L=s[1],K=s[5],st=s[9],Z=s[13],ht=s[2],nt=s[6],lt=s[10],it=s[14],ft=s[3],mt=s[7],wt=s[11],Ht=s[15];return r[0]=o*I+a*L+l*ht+c*ft,r[4]=o*_+a*K+l*nt+c*mt,r[8]=o*C+a*st+l*lt+c*wt,r[12]=o*k+a*Z+l*it+c*Ht,r[1]=h*I+p*L+d*ht+u*ft,r[5]=h*_+p*K+d*nt+u*mt,r[9]=h*C+p*st+d*lt+u*wt,r[13]=h*k+p*Z+d*it+u*Ht,r[2]=g*I+b*L+m*ht+f*ft,r[6]=g*_+b*K+m*nt+f*mt,r[10]=g*C+b*st+m*lt+f*wt,r[14]=g*k+b*Z+m*it+f*Ht,r[3]=M*I+R*L+w*ht+D*ft,r[7]=M*_+R*K+w*nt+D*mt,r[11]=M*C+R*st+w*lt+D*wt,r[15]=M*k+R*Z+w*it+D*Ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],p=t[6],d=t[10],u=t[14],g=t[3],b=t[7],m=t[11],f=t[15],M=l*u-c*d,R=a*u-c*p,w=a*d-l*p,D=o*u-c*h,I=o*d-l*h,_=o*p-a*h;return e*(b*M-m*R+f*w)-n*(g*M-m*D+f*I)+s*(g*R-b*D+f*_)-r*(g*w-b*I+m*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],p=t[9],d=t[10],u=t[11],g=t[12],b=t[13],m=t[14],f=t[15],M=e*a-n*o,R=e*l-s*o,w=e*c-r*o,D=n*l-s*a,I=n*c-r*a,_=s*c-r*l,C=h*b-p*g,k=h*m-d*g,L=h*f-u*g,K=p*m-d*b,st=p*f-u*b,Z=d*f-u*m,ht=M*Z-R*st+w*K+D*L-I*k+_*C;if(ht===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let nt=1/ht;return t[0]=(a*Z-l*st+c*K)*nt,t[1]=(s*st-n*Z-r*K)*nt,t[2]=(b*_-m*I+f*D)*nt,t[3]=(d*I-p*_-u*D)*nt,t[4]=(l*L-o*Z-c*k)*nt,t[5]=(e*Z-s*L+r*k)*nt,t[6]=(m*w-g*_-f*R)*nt,t[7]=(h*_-d*w+u*R)*nt,t[8]=(o*st-a*L+c*C)*nt,t[9]=(n*L-e*st-r*C)*nt,t[10]=(g*I-b*w+f*M)*nt,t[11]=(p*w-h*I-u*M)*nt,t[12]=(a*k-o*K-l*C)*nt,t[13]=(e*K-n*k+s*C)*nt,t[14]=(b*R-g*D-m*M)*nt,t[15]=(h*D-p*R+d*M)*nt,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,p=a+a,d=r*c,u=r*h,g=r*p,b=o*h,m=o*p,f=a*p,M=l*c,R=l*h,w=l*p,D=n.x,I=n.y,_=n.z;return s[0]=(1-(b+f))*D,s[1]=(u+w)*D,s[2]=(g-R)*D,s[3]=0,s[4]=(u-w)*I,s[5]=(1-(d+f))*I,s[6]=(m+M)*I,s[7]=0,s[8]=(g+R)*_,s[9]=(m-M)*_,s[10]=(1-(d+b))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=$s.set(s[0],s[1],s[2]).length(),a=$s.set(s[4],s[5],s[6]).length(),l=$s.set(s[8],s[9],s[10]).length();r<0&&(o=-o),wi.copy(this);let c=1/o,h=1/a,p=1/l;return wi.elements[0]*=c,wi.elements[1]*=c,wi.elements[2]*=c,wi.elements[4]*=h,wi.elements[5]*=h,wi.elements[6]*=h,wi.elements[8]*=p,wi.elements[9]*=p,wi.elements[10]*=p,e.setFromRotationMatrix(wi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=li,l=!1){let c=this.elements,h=2*r/(e-t),p=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),g,b;if(l)g=r/(o-r),b=o*r/(o-r);else if(a===li)g=-(o+r)/(o-r),b=-2*o*r/(o-r);else if(a===gr)g=-o/(o-r),b=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=li,l=!1){let c=this.elements,h=2/(e-t),p=2/(n-s),d=-(e+t)/(e-t),u=-(n+s)/(n-s),g,b;if(l)g=1/(o-r),b=o/(o-r);else if(a===li)g=-2/(o-r),b=-(o+r)/(o-r);else if(a===gr)g=-1/(o-r),b=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};el.prototype.isMatrix4=!0;var ln=el,$s=new B,wi=new ln,Bf=new B(0,0,0),kf=new B(1,1,1),fs=new B,Oo=new B,Qn=new B,au=new ln,lu=new ci,hi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],p=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-en(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return au.makeRotationFromQuaternion(t),this.setFromRotationMatrix(au,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lu.setFromEuler(this),this.setFromQuaternion(lu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gf=0,cu=new B,Ks=new ci,Ki=new ln,Bo=new B,Pr=new B,Vf=new B,Hf=new ci,hu=new B(1,0,0),uu=new B(0,1,0),du=new B(0,0,1),fu={type:"added"},Wf={type:"removed"},Qs={type:"childadded",child:null},wc={type:"childremoved",child:null},fn=class i extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new hi,n=new ci,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ln},normalMatrix:{value:new He}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ks.setFromAxisAngle(t,e),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(t,e){return Ks.setFromAxisAngle(t,e),this.quaternion.premultiply(Ks),this}rotateX(t){return this.rotateOnAxis(hu,t)}rotateY(t){return this.rotateOnAxis(uu,t)}rotateZ(t){return this.rotateOnAxis(du,t)}translateOnAxis(t,e){return cu.copy(t).applyQuaternion(this.quaternion),this.position.add(cu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hu,t)}translateY(t){return this.translateOnAxis(uu,t)}translateZ(t){return this.translateOnAxis(du,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Bo.copy(t):Bo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Pr,Bo,this.up):Ki.lookAt(Bo,Pr,this.up),this.quaternion.setFromRotationMatrix(Ki),s&&(Ki.extractRotation(s.matrixWorld),Ks.setFromRotationMatrix(Ki),this.quaternion.premultiply(Ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ze("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fu),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wf),wc.child=t,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fu),Qs.child=t,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,t,Vf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,Hf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1)===!0&&(n=!0),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}return n}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),p=o(t.shapes),d=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};fn.DEFAULT_UP=new B(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var De=class extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xf={type:"move"},yr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let b of t.hand.values()){let m=e.getJointPose(b,n),f=this._getHandJoint(c,b);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=h.position.distanceTo(p.position),u=.02,g=.005;c.inputState.pinching&&d>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function bc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ae=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,sn.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=sn.workingColorSpace){return this.r=t,this.g=e,this.b=n,sn.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=sn.workingColorSpace){if(t=Nf(t,1),e=en(e,0,1),n=en(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=bc(o,r,t+1/3),this.g=bc(o,r,t),this.b=bc(o,r,t-1/3)}return sn.colorSpaceToWorking(this,s),this}setStyle(t,e=Wn){function n(r){r!==void 0&&parseFloat(r)<1&&Fe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Fe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Fe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Wn){let n=Cd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Fe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}copyLinearToSRGB(t){return this.r=fr(t.r),this.g=fr(t.g),this.b=fr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wn){return sn.workingToColorSpace(Gn.copy(this),t),Math.round(en(Gn.r*255,0,255))*65536+Math.round(en(Gn.g*255,0,255))*256+Math.round(en(Gn.b*255,0,255))}getHexString(t=Wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=sn.workingColorSpace){sn.workingToColorSpace(Gn.copy(this),e);let n=Gn.r,s=Gn.g,r=Gn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=sn.workingColorSpace){return sn.workingToColorSpace(Gn.copy(this),e),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=Wn){sn.workingToColorSpace(Gn.copy(this),t);let e=Gn.r,n=Gn.g,s=Gn.b;return t!==Wn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(Ts),bi.s===0&&(bi.h=Ts.h),Ts.s===0&&(Ts.h=bi.h);let n=_c(bi.h,Ts.h,e),s=_c(bi.s,Ts.s,e),r=_c(bi.l,Ts.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gn=new Ae;Ae.NAMES=Cd;var Fs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ae(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ls=class extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ai=new B,Qi=new B,Ac=new B,ji=new B,js=new B,tr=new B,pu=new B,Ec=new B,Tc=new B,Cc=new B,Rc=new vn,Pc=new vn,Ic=new vn,ns=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ai.subVectors(t,e),s.cross(Ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ai.subVectors(s,e),Qi.subVectors(n,e),Ac.subVectors(t,e);let o=Ai.dot(Ai),a=Ai.dot(Qi),l=Ai.dot(Ac),c=Qi.dot(Qi),h=Qi.dot(Ac),p=o*c-a*a;if(p===0)return r.set(0,0,0),null;let d=1/p,u=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ji.x),l.addScaledVector(o,ji.y),l.addScaledVector(a,ji.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Rc.setScalar(0),Pc.setScalar(0),Ic.setScalar(0),Rc.fromBufferAttribute(t,e),Pc.fromBufferAttribute(t,n),Ic.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Rc,r.x),o.addScaledVector(Pc,r.y),o.addScaledVector(Ic,r.z),o}static isFrontFacing(t,e,n,s){return Ai.subVectors(n,e),Qi.subVectors(t,e),Ai.cross(Qi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Ai.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;js.subVectors(s,n),tr.subVectors(r,n),Ec.subVectors(t,n);let l=js.dot(Ec),c=tr.dot(Ec);if(l<=0&&c<=0)return e.copy(n);Tc.subVectors(t,s);let h=js.dot(Tc),p=tr.dot(Tc);if(h>=0&&p<=h)return e.copy(s);let d=l*p-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(js,o);Cc.subVectors(t,r);let u=js.dot(Cc),g=tr.dot(Cc);if(g>=0&&u<=g)return e.copy(r);let b=u*c-l*g;if(b<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(tr,a);let m=h*g-u*p;if(m<=0&&p-h>=0&&u-g>=0)return pu.subVectors(r,s),a=(p-h)/(p-h+(u-g)),e.copy(s).addScaledVector(pu,a);let f=1/(m+b+d);return o=b*f,a=d*f,e.copy(n).addScaledVector(js,o).addScaledVector(tr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hi=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ei):Ei.fromBufferAttribute(r,o),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ko.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ko.copy(n.boundingBox)),ko.applyMatrix4(t.matrixWorld),this.union(ko)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ir),Go.subVectors(this.max,Ir),er.subVectors(t.a,Ir),nr.subVectors(t.b,Ir),ir.subVectors(t.c,Ir),ps.subVectors(nr,er),ms.subVectors(ir,nr),Cs.subVectors(er,ir);let e=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-Cs.z,Cs.y,ps.z,0,-ps.x,ms.z,0,-ms.x,Cs.z,0,-Cs.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-Cs.y,Cs.x,0];return!Fc(e,er,nr,ir,Go)||(e=[1,0,0,0,1,0,0,0,1],!Fc(e,er,nr,ir,Go))?!1:(Vo.crossVectors(ps,ms),e=[Vo.x,Vo.y,Vo.z],Fc(e,er,nr,ir,Go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ts),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ts=[new B,new B,new B,new B,new B,new B,new B,new B],Ei=new B,ko=new Hi,er=new B,nr=new B,ir=new B,ps=new B,ms=new B,Cs=new B,Ir=new B,Go=new B,Vo=new B,Rs=new B;function Fc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Rs.fromArray(i,r);let a=s.x*Math.abs(Rs.x)+s.y*Math.abs(Rs.y)+s.z*Math.abs(Rs.z),l=t.dot(Rs),c=e.dot(Rs),h=n.dot(Rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var bn=new B,Ho=new ct,qf=0,Ge=class extends Vi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sh,this.updateRanges=[],this.gpuType=_i,this.version=0,this._normalizationScale=t!==void 0?Hl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ho.fromBufferAttribute(this,e),Ho.applyMatrix3(t),this.setXY(e,Ho.x,Ho.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix3(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ed(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Td(t,this.array)}};var Kr=class extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Qr=class extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ve=class extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},Yf=new Hi,Fr=new B,Lc=new B,Wi=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Yf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fr.subVectors(t,this.center);let e=Fr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fr.copy(t.center).add(Lc)),this.expandByPoint(Fr.copy(t.center).sub(Lc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Zf=0,ai=new ln,Dc=new fn,sr=new B,jn=new Hi,Lr=new Hi,Oi=new B,Wo=new B,Xo=new B,qe=class i extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ff(t)?Qr:Kr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new He().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ai.makeRotationFromQuaternion(t),this.applyMatrix4(ai),this}rotateX(t){return ai.makeRotationX(t),this.applyMatrix4(ai),this}rotateY(t){return ai.makeRotationY(t),this.applyMatrix4(ai),this}rotateZ(t){return ai.makeRotationZ(t),this.applyMatrix4(ai),this}translate(t,e,n){return ai.makeTranslation(t,e,n),this.applyMatrix4(ai),this}scale(t,e,n){return ai.makeScale(t,e,n),this.applyMatrix4(ai),this}lookAt(t){return Dc.lookAt(t),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ve(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];jn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wo.addVectors(this.boundingBox.min,jn.min),Xo.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(Wo),this.boundingBox.expandByPoint(Xo)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(jn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Lr.setFromBufferAttribute(a),this.morphTargetsRelative?(Wo.addVectors(jn.min,Lr.min),Xo.addVectors(jn.max,Lr.max),jn.expandByPoint(Wo),jn.expandByPoint(Xo)):(jn.expandByPoint(Lr.min),jn.expandByPoint(Lr.max))}jn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Oi.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oi));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Oi.fromBufferAttribute(a,c),l&&(sr.fromBufferAttribute(t,c),Oi.add(sr)),s=Math.max(s,n.distanceToSquared(Oi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ge(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let k=0;k<n.count;k++)a[k]=new B,l[k]=new B;let h=new B,p=new B,d=new B,u=new ct,g=new ct,b=new ct,m=new B,f=new B;function M(k,L,K){c[k]=c[L]=c[K]=1,h.fromBufferAttribute(n,k),p.fromBufferAttribute(n,L),d.fromBufferAttribute(n,K),u.fromBufferAttribute(r,k),g.fromBufferAttribute(r,L),b.fromBufferAttribute(r,K),p.sub(h),d.sub(h),g.sub(u),b.sub(u);let st=1/(g.x*b.y-b.x*g.y);isFinite(st)&&(m.copy(p).multiplyScalar(b.y).addScaledVector(d,-g.y).multiplyScalar(st),f.copy(d).multiplyScalar(g.x).addScaledVector(p,-b.x).multiplyScalar(st),a[k].add(m),a[L].add(m),a[K].add(m),l[k].add(f),l[L].add(f),l[K].add(f))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let k=0,L=R.length;k<L;++k){let K=R[k],st=K.start,Z=K.count;for(let ht=st,nt=Math.min(t.count,st+Z);ht<nt;ht+=3)M(t.getX(ht+0),t.getX(ht+1),t.getX(ht+2))}let w=new B,D=new B,I=new B,_=new B;function C(k){I.fromBufferAttribute(s,k),_.copy(I);let L=a[k];w.copy(L),w.sub(I.multiplyScalar(I.dot(L))).normalize(),w.lengthSq()===0&&(Math.abs(_.x)<.9?w.set(1,0,0):w.set(0,1,0),w.crossVectors(_,w).normalize()),D.crossVectors(_,L);let st=D.dot(l[k])<0?-1:1;o.setXYZW(k,w.x,w.y,w.z,st)}for(let k=0,L=n.count;k<L;++k)c[k]&&C(k);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,p=new B;if(t)for(let d=0,u=t.count;d<u;d+=3){let g=t.getX(d+0),b=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,b),o.fromBufferAttribute(e,m),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oi.fromBufferAttribute(t,e),Oi.normalize(),t.setXYZ(e,Oi.x,Oi.y,Oi.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,p=a.normalized,d=new c.constructor(l.length*h),u=0,g=0;for(let b=0,m=l.length;b<m;b++){a.isInterleavedBufferAttribute?u=l[b]*a.data.stride+a.offset:u=l[b]*h;for(let f=0;f<h;f++)d[g++]=c[u++]}return new Ge(d,h,p)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,p=c.length;h<p;h++){let d=c[h],u=t(d,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,d=c.length;p<d;p++){let u=c[p];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let d=0,u=p.length;d<u;d++)h.push(p[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sh,this.updateRanges=[],this.version=0,this.uuid=As()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=mu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=mu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function mu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=As()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Hn=new B,jr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Hl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.applyMatrix4(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.applyNormalMatrix(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Hn.fromBufferAttribute(this,e),Hn.transformDirection(t),this.setXYZ(e,Hn.x,Hn.y,Hn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Zr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Zr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ed(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Td(t,this.data.array)}},Nc=new B,Jf=new B,$f=new He,Ti=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Nc.subVectors(n,e).cross(Jf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Nc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||$f.getNormalMatrix(t),s=this.coplanarPoint(Nc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Kf=0,ui=class extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=As(),this.name="",this.type="Material",this.blending=Ar,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=rh,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ga,this.stencilZFail=ga,this.stencilZPass=ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Fe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Fe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ae().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ti().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ct().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},di=class extends ui{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},rr,Dr=new B,or=new B,ar=new B,lr=new ct,Nr=new ct,Rd=new ln,qo=new B,Ur=new B,Yo=new B,gu=new ct,Uc=new ct,xu=new ct,Ci=class extends fn{constructor(t=new di){if(super(),this.isSprite=!0,this.type="Sprite",rr===void 0){rr=new qe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Pa(e,5);rr.setIndex([0,1,2,0,2,3]),rr.setAttribute("position",new jr(n,3,0,!1)),rr.setAttribute("uv",new jr(n,2,3,!1))}this.geometry=rr,this.material=t,this.center=new ct(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),or.setFromMatrixScale(this.matrixWorld),Rd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ar.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&or.multiplyScalar(-ar.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Zo(qo.set(-.5,-.5,0),ar,o,or,s,r),Zo(Ur.set(.5,-.5,0),ar,o,or,s,r),Zo(Yo.set(.5,.5,0),ar,o,or,s,r),gu.set(0,0),Uc.set(1,0),xu.set(1,1);let a=t.ray.intersectTriangle(qo,Ur,Yo,!1,Dr);if(a===null&&(Zo(Ur.set(-.5,.5,0),ar,o,or,s,r),Uc.set(0,1),a=t.ray.intersectTriangle(qo,Yo,Ur,!1,Dr),a===null))return;let l=t.ray.origin.distanceTo(Dr);l<t.near||l>t.far||e.push({distance:l,point:Dr.clone(),uv:ns.getInterpolation(Dr,qo,Ur,Yo,gu,Uc,xu,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this.count=t.count,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Zo(i,t,e,n,s,r){lr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Nr.x=r*lr.x-s*lr.y,Nr.y=s*lr.x+r*lr.y):Nr.copy(lr),i.copy(t),i.x+=Nr.x,i.y+=Nr.y,i.applyMatrix4(Rd)}var es=new B,zc=new B,Jo=new B,$o=new B,vr=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,es)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=es.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(es.copy(this.origin).addScaledVector(this.direction,e),es.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){zc.copy(t).add(e).multiplyScalar(.5),Jo.copy(e).sub(t).normalize(),$o.copy(this.origin).sub(zc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Jo),a=$o.dot(this.direction),l=-$o.dot(Jo),c=$o.lengthSq(),h=Math.abs(1-o*o),p,d,u,g;if(h>0)if(p=o*l-a,d=o*a-l,g=r*h,p>=0)if(d>=-g)if(d<=g){let b=1/h;p*=b,d*=b,u=p*(p+o*d+2*a)+d*(o*p+d+2*l)+c}else d=r,p=Math.max(0,-(o*d+a)),u=-p*p+d*(d+2*l)+c;else d=-r,p=Math.max(0,-(o*d+a)),u=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-o*r+a)),d=p>0?-r:Math.min(Math.max(-r,-l),r),u=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(p=Math.max(0,-(o*r+a)),d=p>0?r:Math.min(Math.max(-r,-l),r),u=-p*p+d*(d+2*l)+c);else d=o>0?-r:r,p=Math.max(0,-(o*d+a)),u=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(zc).addScaledVector(Jo,d),u}intersectSphere(t,e){if(t.radius<0)return null;es.subVectors(t.center,this.origin);let n=es.dot(this.direction),s=es.dot(es)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(a=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,es)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,p=t.x-o.x,d=t.y-o.y,u=t.z-o.z,g=e.x-o.x,b=e.y-o.y,m=e.z-o.z,f=n.x-o.x,M=n.y-o.y,R=n.z-o.z,w=Math.abs(l),D=Math.abs(c),I=Math.abs(h),_,C,k,L,K,st,Z,ht,nt,lt,it,ft;if(w>=D&&w>=I?(k=l,st=p,nt=g,ft=f,l>=0?(_=c,C=h,L=d,K=u,Z=b,ht=m,lt=M,it=R):(_=h,C=c,L=u,K=d,Z=m,ht=b,lt=R,it=M)):D>=I?(k=c,st=d,nt=b,ft=M,c>=0?(_=h,C=l,L=u,K=p,Z=m,ht=g,lt=R,it=f):(_=l,C=h,L=p,K=u,Z=g,ht=m,lt=f,it=R)):(k=h,st=u,nt=m,ft=R,h>=0?(_=l,C=c,L=p,K=d,Z=g,ht=b,lt=f,it=M):(_=c,C=l,L=d,K=p,Z=b,ht=g,lt=M,it=f)),k===0)return null;let mt=_/k,wt=C/k,Ht=1/k,ee=L-mt*st,Se=K-wt*st,gt=Z-mt*nt,Qt=ht-wt*nt,ne=lt-mt*ft,pe=it-wt*ft,zt=ne*Qt-pe*gt,oe=ee*pe-Se*ne,ke=gt*Se-Qt*ee;if(s){if(zt<0||oe<0||ke<0)return null}else if((zt<0||oe<0||ke<0)&&(zt>0||oe>0||ke>0))return null;let xe=zt+oe+ke;if(xe===0)return null;let fe=Ht*(zt*st+oe*nt+ke*ft);return(xe>0?fe<0:fe>0)?null:this.at(fe/xe,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yn=class extends ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},_u=new ln,Ps=new vr,Ko=new Wi,yu=new B,Qo=new B,jo=new B,ta=new B,Oc=new B,ea=new B,vu=new B,na=new B,vt=class extends fn{constructor(t=new qe,e=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this.count=t.count,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],p=r[l];h!==0&&(Oc.fromBufferAttribute(p,t),o?ea.addScaledVector(Oc,h):ea.addScaledVector(Oc.sub(e),h))}e.add(ea)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(r),Ps.copy(t.ray).recast(t.near),!(Ko.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(Ko,yu)===null||Ps.origin.distanceToSquared(yu)>(t.far-t.near)**2))&&(_u.copy(r).invert(),Ps.copy(t.ray).applyMatrix4(_u),!(n.boundingBox!==null&&Ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ps)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,b=d.length;g<b;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,u.start),R=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let w=M,D=R;w<D;w+=3){let I=a.getX(w),_=a.getX(w+1),C=a.getX(w+2);s=ia(this,f,t,n,c,h,p,I,_,C),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),b=Math.min(a.count,u.start+u.count);for(let m=g,f=b;m<f;m+=3){let M=a.getX(m),R=a.getX(m+1),w=a.getX(m+2);s=ia(this,o,t,n,c,h,p,M,R,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,b=d.length;g<b;g++){let m=d[g],f=o[m.materialIndex],M=Math.max(m.start,u.start),R=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let w=M,D=R;w<D;w+=3){let I=w,_=w+1,C=w+2;s=ia(this,f,t,n,c,h,p,I,_,C),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),b=Math.min(l.count,u.start+u.count);for(let m=g,f=b;m<f;m+=3){let M=m,R=m+1,w=m+2;s=ia(this,o,t,n,c,h,p,M,R,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Qf(i,t,e,n,s,r,o,a){let l;if(t.side===Nn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ws,a),l===null)return null;na.copy(a),na.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(na);return c<e.near||c>e.far?null:{distance:c,point:na.clone(),object:i}}function ia(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Qo),i.getVertexPosition(l,jo),i.getVertexPosition(c,ta);let h=Qf(i,t,e,n,Qo,jo,ta,vu);if(h){let p=new B;ns.getBarycoord(vu,Qo,jo,ta,p),s&&(h.uv=ns.getInterpolatedAttribute(s,a,l,c,p,new ct)),r&&(h.uv1=ns.getInterpolatedAttribute(r,a,l,c,p,new ct)),o&&(h.normal=ns.getInterpolatedAttribute(o,a,l,c,p,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new B,materialIndex:0};ns.getNormal(Qo,jo,ta,d.normal),h.face=d,h.barycoord=p}return h}var to=class extends qn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ln,h=Ln,p,d){super(null,o,a,l,c,h,s,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var eo=class extends Ge{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},cr=new ln,Mu=new ln,sa=[],Su=new Hi,jf=new ln,zr=new vt,Or=new Wi,fi=class extends vt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new eo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,jf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cr),Su.copy(t.boundingBox).applyMatrix4(cr),this.boundingBox.union(Su)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cr),Or.copy(t.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(Or)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Or.copy(this.boundingSphere),Or.applyMatrix4(n),t.ray.intersectsSphere(Or)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cr),Mu.multiplyMatrices(n,cr),zr.matrixWorld=Mu,zr.raycast(t,sa);for(let o=0,a=sa.length;o<a;o++){let l=sa[o];l.instanceId=r,l.object=this,e.push(l)}sa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new eo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new to(new Float32Array(s*this.count),s,this.count,cl,_i));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Is=new Wi,tp=new ct(.5,.5),ra=new B,xs=class{constructor(t=new Ti,e=new Ti,n=new Ti,s=new Ti,r=new Ti,o=new Ti){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],p=r[5],d=r[6],u=r[7],g=r[8],b=r[9],m=r[10],f=r[11],M=r[12],R=r[13],w=r[14],D=r[15];if(s[0].setComponents(c-o,u-h,f-g,D-M).normalize(),s[1].setComponents(c+o,u+h,f+g,D+M).normalize(),s[2].setComponents(c+a,u+p,f+b,D+R).normalize(),s[3].setComponents(c-a,u-p,f-b,D-R).normalize(),n)s[4].setComponents(l,d,m,w).normalize(),s[5].setComponents(c-l,u-d,f-m,D-w).normalize();else if(s[4].setComponents(c-l,u-d,f-m,D-w).normalize(),e===li)s[5].setComponents(c+l,u+d,f+m,D+w).normalize();else if(e===gr)s[5].setComponents(l,d,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(t){Is.center.set(0,0,0);let e=tp.distanceTo(t.center);return Is.radius=.7071067811865476+e,Is.applyMatrix4(t.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ra.x=s.normal.x>0?t.max.x:t.min.x,ra.y=s.normal.y>0?t.max.y:t.min.y,ra.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},wu=new ln,Ia=class i{constructor(){this.coordinateSystem=li,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];wu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new xs),n[s].setFromProjectionMatrix(wu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new xs),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var _s=class extends ui{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Fa=new B,La=new B,bu=new ln,Br=new vr,oa=new Wi,Bc=new B,Au=new B,Da=class extends fn{constructor(t=new qe,e=new _s){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Fa.fromBufferAttribute(e,s-1),La.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Fa.distanceTo(La);t.setAttribute("lineDistance",new Ve(n,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(s),oa.radius+=r,t.ray.intersectsSphere(oa)===!1)return;bu.copy(s).invert(),Br.copy(t.ray).applyMatrix4(bu);let a=r/s.getMaxScaleOnAxis(),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let b=u,m=g-1;b<m;b+=c){let f=h.getX(b),M=h.getX(b+1),R=aa(this,t,Br,l,f,M,b);R&&e.push(R)}if(this.isLineLoop){let b=h.getX(g-1),m=h.getX(u),f=aa(this,t,Br,l,b,m,g-1);f&&e.push(f)}}else{let u=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let b=u,m=g-1;b<m;b+=c){let f=aa(this,t,Br,l,b,b+1,b);f&&e.push(f)}if(this.isLineLoop){let b=aa(this,t,Br,l,g-1,u,g-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function aa(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Fa.fromBufferAttribute(a,s),La.fromBufferAttribute(a,r),e.distanceSqToSegment(Fa,La,Bc,Au)>n)return;Bc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Bc);if(!(c<t.near||c>t.far))return{distance:c,point:Au.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Eu=new B,Tu=new B,Ds=class extends Da{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Eu.fromBufferAttribute(e,s),Tu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Eu.distanceTo(Tu);t.setAttribute("lineDistance",new Ve(n,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var rs=class extends ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Cu=new ln,Zc=new vr,la=new Wi,ca=new B,ys=class extends fn{constructor(t=new qe,e=new rs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(s),la.radius+=r,t.ray.intersectsSphere(la)===!1)return;Cu.copy(s).invert(),Zc.copy(t.ray).applyMatrix4(Cu);let a=r/s.getMaxScaleOnAxis(),l=a*a,c=n.index,p=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let g=d,b=u;g<b;g++){let m=c.getX(g);ca.fromBufferAttribute(p,m),Ru(ca,m,l,s,t,e,this)}}else{let d=Math.max(0,o.start),u=Math.min(p.count,o.start+o.count);for(let g=d,b=u;g<b;g++)ca.fromBufferAttribute(p,g),Ru(ca,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ru(i,t,e,n,s,r,o){let a=Zc.distanceSqToPoint(i);if(a<e){let l=new B;Zc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var no=class extends qn{constructor(t=[],e=Hs,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},io=class extends qn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var os=class extends qn{constructor(t,e,n=Ii,s,r,o,a=Ln,l=Ln,c,h=ss,p=1){if(h!==ss&&h!==cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:p};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _r(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},so=class extends os{constructor(t,e=Ii,n=Hs,s,r,o=Ln,a=Ln,l,c=ss){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ro=class extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ke=class i extends qe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],p=[],d=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(h,3)),this.setAttribute("uv",new Ve(p,2));function g(b,m,f,M,R,w,D,I,_,C,k){let L=w/_,K=D/C,st=w/2,Z=D/2,ht=I/2,nt=_+1,lt=C+1,it=0,ft=0,mt=new B;for(let wt=0;wt<lt;wt++){let Ht=wt*K-Z;for(let ee=0;ee<nt;ee++){let Se=ee*L-st;mt[b]=Se*M,mt[m]=Ht*R,mt[f]=ht,c.push(mt.x,mt.y,mt.z),mt[b]=0,mt[m]=0,mt[f]=I>0?1:-1,h.push(mt.x,mt.y,mt.z),p.push(ee/_),p.push(1-wt/C),it+=1}}for(let wt=0;wt<C;wt++)for(let Ht=0;Ht<_;Ht++){let ee=d+Ht+nt*wt,Se=d+Ht+nt*(wt+1),gt=d+(Ht+1)+nt*(wt+1),Qt=d+(Ht+1)+nt*wt;l.push(ee,Se,Qt),l.push(Se,gt,Qt),ft+=6}a.addGroup(u,ft,k),u+=ft,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},pi=class i extends qe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,p=Math.PI/2*t,d=e,u=2*p+d,g=n*2+r,b=s+1,m=new B,f=new B;for(let M=0;M<=g;M++){let R=0,w=0,D=0,I=0;if(M<=n){let k=M/n,L=k*Math.PI/2;w=-h-t*Math.cos(L),D=t*Math.sin(L),I=-t*Math.cos(L),R=k*p}else if(M<=n+r){let k=(M-n)/r;w=-h+k*e,D=t,I=0,R=p+k*d}else{let k=(M-n-r)/n,L=k*Math.PI/2;w=h+t*Math.sin(L),D=t*Math.cos(L),I=t*Math.sin(L),R=p+d+k*p}let _=Math.max(0,Math.min(1,R/u)),C=0;M===0?C=.5/s:M===g&&(C=-.5/s);for(let k=0;k<=s;k++){let L=k/s,K=L*Math.PI*2,st=Math.sin(K),Z=Math.cos(K);f.x=-D*Z,f.y=w,f.z=D*st,a.push(f.x,f.y,f.z),m.set(-D*Z,I,D*st),m.normalize(),l.push(m.x,m.y,m.z),c.push(L+C,_)}if(M>0){let k=(M-1)*b;for(let L=0;L<s;L++){let K=k+L,st=k+L+1,Z=M*b+L,ht=M*b+L+1;o.push(K,st,Z),o.push(st,ht,Z)}}}this.setIndex(o),this.setAttribute("position",new Ve(a,3)),this.setAttribute("normal",new Ve(l,3)),this.setAttribute("uv",new Ve(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ei=class i extends qe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new B,h=new ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=e;p++,d+=3){let u=n+p/e*s;c.x=t*Math.cos(u),c.y=t*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Ve(o,3)),this.setAttribute("normal",new Ve(a,3)),this.setAttribute("uv",new Ve(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ge=class i extends qe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],d=[],u=[],g=0,b=[],m=n/2,f=0;M(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new Ve(p,3)),this.setAttribute("normal",new Ve(d,3)),this.setAttribute("uv",new Ve(u,2));function M(){let w=new B,D=new B,I=0,_=(e-t)/n;for(let C=0;C<=r;C++){let k=[],L=C/r,K=L*(e-t)+t;for(let st=0;st<=s;st++){let Z=st/s,ht=Z*l+a,nt=Math.sin(ht),lt=Math.cos(ht);D.x=K*nt,D.y=-L*n+m,D.z=K*lt,p.push(D.x,D.y,D.z),w.set(nt,_,lt).normalize(),d.push(w.x,w.y,w.z),u.push(Z,1-L),k.push(g++)}b.push(k)}for(let C=0;C<s;C++)for(let k=0;k<r;k++){let L=b[k][C],K=b[k+1][C],st=b[k+1][C+1],Z=b[k][C+1];(t>0||k!==0)&&(h.push(L,K,Z),I+=3),(e>0||k!==r-1)&&(h.push(K,st,Z),I+=3)}c.addGroup(f,I,0),f+=I}function R(w){let D=g,I=new ct,_=new B,C=0,k=w===!0?t:e,L=w===!0?1:-1;for(let st=1;st<=s;st++)p.push(0,m*L,0),d.push(0,L,0),u.push(.5,.5),g++;let K=g;for(let st=0;st<=s;st++){let ht=st/s*l+a,nt=Math.cos(ht),lt=Math.sin(ht);_.x=k*lt,_.y=m*L,_.z=k*nt,p.push(_.x,_.y,_.z),d.push(0,L,0),I.x=nt*.5+.5,I.y=lt*.5*L+.5,u.push(I.x,I.y),g++}for(let st=0;st<s;st++){let Z=D+st,ht=K+st;w===!0?h.push(ht,ht+1,Z):h.push(ht+1,ht,Z),C+=3}c.addGroup(f,C,w===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},An=class i extends ge{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},oo=class i extends qe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Ve(r,3)),this.setAttribute("normal",new Ve(r.slice(),3)),this.setAttribute("uv",new Ve(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let R=new B,w=new B,D=new B;for(let I=0;I<e.length;I+=3)u(e[I+0],R),u(e[I+1],w),u(e[I+2],D),l(R,w,D,M)}function l(M,R,w,D){let I=D+1,_=[];for(let C=0;C<=I;C++){_[C]=[];let k=M.clone().lerp(w,C/I),L=R.clone().lerp(w,C/I),K=I-C;for(let st=0;st<=K;st++)st===0&&C===I?_[C][st]=k:_[C][st]=k.clone().lerp(L,st/K)}for(let C=0;C<I;C++)for(let k=0;k<2*(I-C)-1;k++){let L=Math.floor(k/2);k%2===0?(d(_[C][L+1]),d(_[C+1][L]),d(_[C][L])):(d(_[C][L+1]),d(_[C+1][L+1]),d(_[C+1][L]))}}function c(M){let R=new B;for(let w=0;w<r.length;w+=3)R.x=r[w+0],R.y=r[w+1],R.z=r[w+2],R.normalize().multiplyScalar(M),r[w+0]=R.x,r[w+1]=R.y,r[w+2]=R.z}function h(){let M=new B;for(let R=0;R<r.length;R+=3){M.x=r[R+0],M.y=r[R+1],M.z=r[R+2];let w=m(M)/2/Math.PI+.5,D=f(M)/Math.PI+.5;o.push(w,1-D)}g(),p()}function p(){for(let M=0;M<o.length;M+=6){let R=o[M+0],w=o[M+2],D=o[M+4],I=Math.max(R,w,D),_=Math.min(R,w,D);I>.9&&_<.1&&(R<.2&&(o[M+0]+=1),w<.2&&(o[M+2]+=1),D<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function u(M,R){let w=M*3;R.x=t[w+0],R.y=t[w+1],R.z=t[w+2]}function g(){let M=new B,R=new B,w=new B,D=new B,I=new ct,_=new ct,C=new ct;for(let k=0,L=0;k<r.length;k+=9,L+=6){M.set(r[k+0],r[k+1],r[k+2]),R.set(r[k+3],r[k+4],r[k+5]),w.set(r[k+6],r[k+7],r[k+8]),I.set(o[L+0],o[L+1]),_.set(o[L+2],o[L+3]),C.set(o[L+4],o[L+5]),D.copy(M).add(R).add(w).divideScalar(3);let K=m(D);b(I,L+0,M,K),b(_,L+2,R,K),b(C,L+4,w,K)}}function b(M,R,w,D){D<0&&M.x===1&&(o[R]=M.x-1),w.x===0&&w.z===0&&(o[R]=D/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},mi=class i extends oo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ni=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Fe("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(o-h)/d;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ct:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new B,s=[],r=[],o=[],a=new B,l=new ln;for(let u=0;u<=t;u++){let g=u/t;s[u]=this.getTangentAt(g,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(en(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(en(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],u*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Mr=class extends ni{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*p+this.aX,c=d*p+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Na=class extends Mr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function bh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,p){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+p)+(l-a)/p;d*=h,u*=h,s(o,a,d,u)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Pu=new B,Iu=new B,kc=new bh,Gc=new bh,Vc=new bh,Jn=class extends ni{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new B){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Iu.subVectors(s[0],s[1]).add(s[0]),c=Iu);let p=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Pu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Pu),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),u),b=Math.pow(p.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(h),u);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),kc.initNonuniformCatmullRom(c.x,p.x,d.x,h.x,g,b,m),Gc.initNonuniformCatmullRom(c.y,p.y,d.y,h.y,g,b,m),Vc.initNonuniformCatmullRom(c.z,p.z,d.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&(kc.initCatmullRom(c.x,p.x,d.x,h.x,this.tension),Gc.initCatmullRom(c.y,p.y,d.y,h.y,this.tension),Vc.initCatmullRom(c.z,p.z,d.z,h.z,this.tension));return n.set(kc.calc(l),Gc.calc(l),Vc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new B().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Fu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function ep(i,t){let e=1-i;return e*e*t}function np(i,t){return 2*(1-i)*i*t}function ip(i,t){return i*i*t}function Vr(i,t,e,n){return ep(i,t)+np(i,e)+ip(i,n)}function sp(i,t){let e=1-i;return e*e*e*t}function rp(i,t){let e=1-i;return 3*e*e*i*t}function op(i,t){return 3*(1-i)*i*i*t}function ap(i,t){return i*i*i*t}function Hr(i,t,e,n,s){return sp(i,t)+rp(i,e)+op(i,n)+ap(i,s)}var ao=class extends ni{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hr(t,s.x,r.x,o.x,a.x),Hr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ua=class extends ni{constructor(t=new B,e=new B,n=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hr(t,s.x,r.x,o.x,a.x),Hr(t,s.y,r.y,o.y,a.y),Hr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lo=class extends ni{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},za=class extends ni{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},co=class extends ni{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Vr(t,s.x,r.x,o.x),Vr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ns=class extends ni{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Vr(t,s.x,r.x,o.x),Vr(t,s.y,r.y,o.y),Vr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ho=class extends ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(Fu(a,l.x,c.x,h.x,p.x),Fu(a,l.y,c.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},Oa=Object.freeze({__proto__:null,ArcCurve:Na,CatmullRomCurve3:Jn,CubicBezierCurve:ao,CubicBezierCurve3:Ua,EllipseCurve:Mr,LineCurve:lo,LineCurve3:za,QuadraticBezierCurve:co,QuadraticBezierCurve3:Ns,SplineCurve:ho}),Ba=class extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oa[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Oa[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},uo=class extends Ba{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new lo(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new co(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new ao(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ho(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Mr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},gi=class extends uo{constructor(t){super(t),this.uuid=As(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new uo().fromJSON(s))}return this}};function lp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Pd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=fp(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,p=l;for(let d=e;d<s;d+=e){let u=i[d],g=i[d+1];u<a&&(a=u),g<l&&(l=g),u>h&&(h=u),g>p&&(p=g)}c=Math.max(h-a,p-l),c=c!==0?32767/c:0}return fo(r,o,e,a,l,c,0),o}function Pd(i,t,e,n,s){let r;if(s===bp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Lu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Lu(o/n|0,i[o],i[o+1],r);return r&&Sr(r,r.next)&&(mo(r),r=r.next),r}function Us(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Sr(e,e.next)||Mn(e.prev,e,e.next)===0)){if(mo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function fo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&_p(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?hp(i,n,s,r):cp(i)){t.push(l.i,i.i,c.i),mo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=up(Us(i),t),fo(i,t,e,n,s,r,2)):o===2&&dp(i,t,e,n,s,r):fo(Us(i),t,e,n,s,r,1);break}}}function cp(i){let t=i.prev,e=i,n=i.next;if(Mn(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),p=Math.min(a,l,c),d=Math.max(s,r,o),u=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=p&&g.y<=u&&kr(s,a,r,l,o,c,g.x,g.y)&&Mn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function hp(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Mn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,p=r.y,d=o.y,u=Math.min(a,l,c),g=Math.min(h,p,d),b=Math.max(a,l,c),m=Math.max(h,p,d),f=Jc(u,g,t,e,n),M=Jc(b,m,t,e,n),R=i.prevZ,w=i.nextZ;for(;R&&R.z>=f&&w&&w.z<=M;){if(R.x>=u&&R.x<=b&&R.y>=g&&R.y<=m&&R!==s&&R!==o&&kr(a,h,l,p,c,d,R.x,R.y)&&Mn(R.prev,R,R.next)>=0||(R=R.prevZ,w.x>=u&&w.x<=b&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&kr(a,h,l,p,c,d,w.x,w.y)&&Mn(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;R&&R.z>=f;){if(R.x>=u&&R.x<=b&&R.y>=g&&R.y<=m&&R!==s&&R!==o&&kr(a,h,l,p,c,d,R.x,R.y)&&Mn(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;w&&w.z<=M;){if(w.x>=u&&w.x<=b&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&kr(a,h,l,p,c,d,w.x,w.y)&&Mn(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function up(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Sr(n,s)&&Fd(n,e,e.next,s)&&po(n,s)&&po(s,n)&&(t.push(n.i,e.i,s.i),mo(e),mo(e.next),e=i=s),e=e.next}while(e!==i);return Us(e)}function dp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Mp(o,a)){let l=Ld(o,a);o=Us(o,o.next),l=Us(l,l.next),fo(o,t,e,n,s,r,0),fo(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function fp(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Pd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(vp(c))}s.sort(pp);for(let r=0;r<s.length;r++)e=mp(s[r],e);return e}function pp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function mp(i,t){let e=gp(i,t);if(!e)return t;let n=Ld(e,i);return Us(n,n.next),Us(e,e.next)}function gp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Sr(i,e))return e;do{if(Sr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,o=e.x<e.next.x?e:e.next,p===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Id(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let p=Math.abs(s-e.y)/(n-e.x);po(e,i)&&(p<h||p===h&&(e.x>o.x||e.x===o.x&&xp(o,e)))&&(o=e,h=p)}e=e.next}while(e!==a);return o}function xp(i,t){return Mn(i.prev,i,t.prev)<0&&Mn(t.next,i,i.next)<0}function _p(i,t,e,n){let s=i;do s.z===0&&(s.z=Jc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,yp(s)}function yp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Jc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function vp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Id(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function kr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Id(i,t,e,n,s,r,o,a)}function Mp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Sp(i,t)&&(po(i,t)&&po(t,i)&&wp(i,t)&&(Mn(i.prev,i,t.prev)||Mn(i,t.prev,t))||Sr(i,t)&&Mn(i.prev,i,i.next)>0&&Mn(t.prev,t,t.next)>0)}function Mn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Sr(i,t){return i.x===t.x&&i.y===t.y}function Fd(i,t,e,n){let s=ua(Mn(i,t,e)),r=ua(Mn(i,t,n)),o=ua(Mn(e,n,i)),a=ua(Mn(e,n,t));return!!(s!==r&&o!==a||s===0&&ha(i,e,t)||r===0&&ha(i,n,t)||o===0&&ha(e,i,n)||a===0&&ha(e,t,n))}function ha(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ua(i){return i>0?1:i<0?-1:0}function Sp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Fd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function po(i,t){return Mn(i.prev,i,i.next)<0?Mn(i,t,i.next)>=0&&Mn(i,i.prev,t)>=0:Mn(i,t,i.prev)<0||Mn(i,i.next,t)<0}function wp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ld(i,t){let e=$c(i.i,i.x,i.y),n=$c(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Lu(i,t,e,n){let s=$c(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function mo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $c(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Kc=class{static triangulate(t,e,n=2){return lp(t,e,n)}},Gi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Du(t),Nu(n,t);let o=t.length;e.forEach(Du);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Nu(n,e[l]);let a=Kc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Du(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Nu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var go=class i extends qe{constructor(t=new gi([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Ve(s,3)),this.setAttribute("uv",new Ve(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,b=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Ap,R,w=!1,D,I,_,C;if(f){R=f.getSpacedPoints(h),w=!0,d=!1;let bt=f.isCatmullRomCurve3?f.closed:!1;D=f.computeFrenetFrames(h,bt),I=new B,_=new B,C=new B}d||(m=0,u=0,g=0,b=0);let k=a.extractPoints(c),L=k.shape,K=k.holes;if(!Gi.isClockWise(L)){L=L.reverse();for(let bt=0,Ot=K.length;bt<Ot;bt++){let Rt=K[bt];Gi.isClockWise(Rt)&&(K[bt]=Rt.reverse())}}function Z(bt){let Rt=10000000000000001e-36,he=bt[0];for(let Wt=1;Wt<=bt.length;Wt++){let Ce=Wt%bt.length,ue=bt[Ce],Ue=ue.x-he.x,Pe=ue.y-he.y,Mt=Ue*Ue+Pe*Pe,J=Math.max(Math.abs(ue.x),Math.abs(ue.y),Math.abs(he.x),Math.abs(he.y)),mn=Rt*J*J;if(Mt<=mn){bt.splice(Ce,1),Wt--;continue}he=ue}}Z(L),K.forEach(Z);let ht=K.length,nt=L;for(let bt=0;bt<ht;bt++){let Ot=K[bt];L=L.concat(Ot)}function lt(bt,Ot,Rt){return Ot||ze("ExtrudeGeometry: vec does not exist"),bt.clone().addScaledVector(Ot,Rt)}let it=L.length;function ft(bt,Ot,Rt){let he,Wt,Ce,ue=bt.x-Ot.x,Ue=bt.y-Ot.y,Pe=Rt.x-bt.x,Mt=Rt.y-bt.y,J=ue*ue+Ue*Ue,mn=ue*Mt-Ue*Pe;if(Math.abs(mn)>Number.EPSILON){let We=Math.sqrt(J),an=Math.sqrt(Pe*Pe+Mt*Mt),Bt=Ot.x-Ue/We,pn=Ot.y+ue/We,Me=Rt.x-Mt/an,Ie=Rt.y+Pe/an,N=((Me-Bt)*Mt-(Ie-pn)*Pe)/(ue*Mt-Ue*Pe);he=Bt+ue*N-bt.x,Wt=pn+Ue*N-bt.y;let v=he*he+Wt*Wt;if(v<=2)return new ct(he,Wt);Ce=Math.sqrt(v/2)}else{let We=!1;ue>Number.EPSILON?Pe>Number.EPSILON&&(We=!0):ue<-Number.EPSILON?Pe<-Number.EPSILON&&(We=!0):Math.sign(Ue)===Math.sign(Mt)&&(We=!0),We?(he=-Ue,Wt=ue,Ce=Math.sqrt(J)):(he=ue,Wt=Ue,Ce=Math.sqrt(J/2))}return new ct(he/Ce,Wt/Ce)}let mt=[];for(let bt=0,Ot=nt.length,Rt=Ot-1,he=bt+1;bt<Ot;bt++,Rt++,he++)Rt===Ot&&(Rt=0),he===Ot&&(he=0),mt[bt]=ft(nt[bt],nt[Rt],nt[he]);let wt=[],Ht,ee=mt.concat();for(let bt=0,Ot=ht;bt<Ot;bt++){let Rt=K[bt];Ht=[];for(let he=0,Wt=Rt.length,Ce=Wt-1,ue=he+1;he<Wt;he++,Ce++,ue++)Ce===Wt&&(Ce=0),ue===Wt&&(ue=0),Ht[he]=ft(Rt[he],Rt[Ce],Rt[ue]);wt.push(Ht),ee=ee.concat(Ht)}let Se;if(m===0)Se=Gi.triangulateShape(nt,K);else{let bt=[],Ot=[];for(let Rt=0;Rt<m;Rt++){let he=Rt/m,Wt=u*Math.cos(he*Math.PI/2),Ce=g*Math.sin(he*Math.PI/2)+b;for(let ue=0,Ue=nt.length;ue<Ue;ue++){let Pe=lt(nt[ue],mt[ue],Ce);oe(Pe.x,Pe.y,-Wt),he===0&&bt.push(Pe)}for(let ue=0,Ue=ht;ue<Ue;ue++){let Pe=K[ue];Ht=wt[ue];let Mt=[];for(let J=0,mn=Pe.length;J<mn;J++){let We=lt(Pe[J],Ht[J],Ce);oe(We.x,We.y,-Wt),he===0&&Mt.push(We)}he===0&&Ot.push(Mt)}}Se=Gi.triangulateShape(bt,Ot)}let gt=Se.length,Qt=g+b;for(let bt=0;bt<it;bt++){let Ot=d?lt(L[bt],ee[bt],Qt):L[bt];w?(_.copy(D.normals[0]).multiplyScalar(Ot.x),I.copy(D.binormals[0]).multiplyScalar(Ot.y),C.copy(R[0]).add(_).add(I),oe(C.x,C.y,C.z)):oe(Ot.x,Ot.y,0)}for(let bt=1;bt<=h;bt++)for(let Ot=0;Ot<it;Ot++){let Rt=d?lt(L[Ot],ee[Ot],Qt):L[Ot];w?(_.copy(D.normals[bt]).multiplyScalar(Rt.x),I.copy(D.binormals[bt]).multiplyScalar(Rt.y),C.copy(R[bt]).add(_).add(I),oe(C.x,C.y,C.z)):oe(Rt.x,Rt.y,p/h*bt)}for(let bt=m-1;bt>=0;bt--){let Ot=bt/m,Rt=u*Math.cos(Ot*Math.PI/2),he=g*Math.sin(Ot*Math.PI/2)+b;for(let Wt=0,Ce=nt.length;Wt<Ce;Wt++){let ue=lt(nt[Wt],mt[Wt],he);oe(ue.x,ue.y,p+Rt)}for(let Wt=0,Ce=K.length;Wt<Ce;Wt++){let ue=K[Wt];Ht=wt[Wt];for(let Ue=0,Pe=ue.length;Ue<Pe;Ue++){let Mt=lt(ue[Ue],Ht[Ue],he);w?oe(Mt.x,Mt.y+R[h-1].y,R[h-1].x+Rt):oe(Mt.x,Mt.y,p+Rt)}}}ne(),pe();function ne(){let bt=s.length/3;if(d){let Ot=0,Rt=it*Ot;for(let he=0;he<gt;he++){let Wt=Se[he];ke(Wt[2]+Rt,Wt[1]+Rt,Wt[0]+Rt)}Ot=h+m*2,Rt=it*Ot;for(let he=0;he<gt;he++){let Wt=Se[he];ke(Wt[0]+Rt,Wt[1]+Rt,Wt[2]+Rt)}}else{for(let Ot=0;Ot<gt;Ot++){let Rt=Se[Ot];ke(Rt[2],Rt[1],Rt[0])}for(let Ot=0;Ot<gt;Ot++){let Rt=Se[Ot];ke(Rt[0]+it*h,Rt[1]+it*h,Rt[2]+it*h)}}n.addGroup(bt,s.length/3-bt,0)}function pe(){let bt=s.length/3,Ot=0;zt(nt,Ot),Ot+=nt.length;for(let Rt=0,he=K.length;Rt<he;Rt++){let Wt=K[Rt];zt(Wt,Ot),Ot+=Wt.length}n.addGroup(bt,s.length/3-bt,1)}function zt(bt,Ot){let Rt=bt.length;for(;--Rt>=0;){let he=Rt,Wt=Rt-1;Wt<0&&(Wt=bt.length-1);for(let Ce=0,ue=h+m*2;Ce<ue;Ce++){let Ue=it*Ce,Pe=it*(Ce+1),Mt=Ot+he+Ue,J=Ot+Wt+Ue,mn=Ot+Wt+Pe,We=Ot+he+Pe;xe(Mt,J,mn,We)}}}function oe(bt,Ot,Rt){l.push(bt),l.push(Ot),l.push(Rt)}function ke(bt,Ot,Rt){fe(bt),fe(Ot),fe(Rt);let he=s.length/3,Wt=M.generateTopUV(n,s,he-3,he-2,he-1);Ne(Wt[0]),Ne(Wt[1]),Ne(Wt[2])}function xe(bt,Ot,Rt,he){fe(bt),fe(Ot),fe(he),fe(Ot),fe(Rt),fe(he);let Wt=s.length/3,Ce=M.generateSideWallUV(n,s,Wt-6,Wt-3,Wt-2,Wt-1);Ne(Ce[0]),Ne(Ce[1]),Ne(Ce[3]),Ne(Ce[1]),Ne(Ce[2]),Ne(Ce[3])}function fe(bt){s.push(l[bt*3+0]),s.push(l[bt*3+1]),s.push(l[bt*3+2])}function Ne(bt){r.push(bt.x),r.push(bt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ep(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Oa[s.type]().fromJSON(s)),new i(n,t.options)}},Ap={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ct(r,o),new ct(a,l),new ct(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],p=t[n*3+2],d=t[s*3],u=t[s*3+1],g=t[s*3+2],b=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ct(o,1-l),new ct(c,1-p),new ct(d,1-g),new ct(b,1-f)]:[new ct(a,1-l),new ct(h,1-p),new ct(u,1-g),new ct(m,1-f)]}};function Ep(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Un=class i extends oo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},zn=class i extends qe{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=en(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,p=new B,d=new ct,u=new B,g=new B,b=new B,m=0,f=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,u.x=f*1,u.y=-m,u.z=f*0,b.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:b.normalize(),l.push(b.x,b.y,b.z);break;default:m=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,u.x=f*1,u.y=-m,u.z=f*0,g.copy(u),u.x+=b.x,u.y+=b.y,u.z+=b.z,u.normalize(),l.push(u.x,u.y,u.z),b.copy(g)}for(let M=0;M<=e;M++){let R=n+M*h*s,w=Math.sin(R),D=Math.cos(R);for(let I=0;I<=t.length-1;I++){p.x=t[I].x*w,p.y=t[I].y,p.z=t[I].x*D,o.push(p.x,p.y,p.z),d.x=M/e,d.y=I/(t.length-1),a.push(d.x,d.y);let _=l[3*I+0]*w,C=l[3*I+1],k=l[3*I+0]*D;c.push(_,C,k)}}for(let M=0;M<e;M++)for(let R=0;R<t.length-1;R++){let w=R+M*t.length,D=w,I=w+t.length,_=w+t.length+1,C=w+1;r.push(D,I,C),r.push(_,C,I)}this.setIndex(r),this.setAttribute("position",new Ve(o,3)),this.setAttribute("uv",new Ve(a,2)),this.setAttribute("normal",new Ve(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Yn=class i extends qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,p=t/a,d=e/l,u=[],g=[],b=[],m=[];for(let f=0;f<h;f++){let M=f*d-o;for(let R=0;R<c;R++){let w=R*p-r;g.push(w,-M,0),b.push(0,0,1),m.push(R/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){let R=M+c*f,w=M+c*(f+1),D=M+1+c*(f+1),I=M+1+c*f;u.push(R,w,I),u.push(w,D,I)}this.setIndex(u),this.setAttribute("position",new Ve(g,3)),this.setAttribute("normal",new Ve(b,3)),this.setAttribute("uv",new Ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},xo=class i extends qe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],p=t,d=(e-t)/s,u=new B,g=new ct;for(let b=0;b<=s;b++){for(let m=0;m<=n;m++){let f=r+m/n*o;u.x=p*Math.cos(f),u.y=p*Math.sin(f),l.push(u.x,u.y,u.z),c.push(0,0,1),g.x=(u.x/e+1)/2,g.y=(u.y/e+1)/2,h.push(g.x,g.y)}p+=d}for(let b=0;b<s;b++){let m=b*(n+1);for(let f=0;f<n;f++){let M=f+m,R=M,w=M+n+1,D=M+n+2,I=M+1;a.push(R,w,I),a.push(w,D,I)}}this.setIndex(a),this.setAttribute("position",new Ve(l,3)),this.setAttribute("normal",new Ve(c,3)),this.setAttribute("uv",new Ve(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},as=class i extends qe{constructor(t=new gi([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ve(s,3)),this.setAttribute("normal",new Ve(r,3)),this.setAttribute("uv",new Ve(o,2));function c(h){let p=s.length/3,d=h.extractPoints(e),u=d.shape,g=d.holes;Gi.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,f=g.length;m<f;m++){let M=g[m];Gi.isClockWise(M)===!0&&(g[m]=M.reverse())}let b=Gi.triangulateShape(u,g);for(let m=0,f=g.length;m<f;m++){let M=g[m];u=u.concat(M)}for(let m=0,f=u.length;m<f;m++){let M=u[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,f=b.length;m<f;m++){let M=b[m],R=M[0]+p,w=M[1]+p,D=M[2]+p;n.push(R,w,D),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Tp(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Tp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Oe=class i extends qe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],p=new B,d=new B,u=[],g=[],b=[],m=[];for(let f=0;f<=n;f++){let M=[],R=f/n,w=o+R*a,D=t*Math.cos(w),I=Math.sqrt(t*t-D*D),_=0;f===0&&o===0?_=.5/e:f===n&&l===Math.PI&&(_=-.5/e);for(let C=0;C<=e;C++){let k=C/e,L=s+k*r;p.x=-I*Math.cos(L),p.y=D,p.z=I*Math.sin(L),g.push(p.x,p.y,p.z),d.copy(p).normalize(),b.push(d.x,d.y,d.z),m.push(k+_,1-R),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){let R=h[f][M+1],w=h[f][M],D=h[f+1][M],I=h[f+1][M+1];(f!==0||o>0)&&u.push(R,w,I),(f!==n-1||l<Math.PI)&&u.push(w,D,I)}this.setIndex(u),this.setAttribute("position",new Ve(g,3)),this.setAttribute("normal",new Ve(b,3)),this.setAttribute("uv",new Ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ri=class i extends qe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],p=[],d=new B,u=new B,g=new B;for(let b=0;b<=n;b++){let m=o+b/n*a;for(let f=0;f<=s;f++){let M=f/s*r;u.x=(t+e*Math.cos(m))*Math.cos(M),u.y=(t+e*Math.cos(m))*Math.sin(M),u.z=e*Math.sin(m),c.push(u.x,u.y,u.z),d.x=t*Math.cos(M),d.y=t*Math.sin(M),g.subVectors(u,d).normalize(),h.push(g.x,g.y,g.z),p.push(f/s),p.push(b/n)}}for(let b=1;b<=n;b++)for(let m=1;m<=s;m++){let f=(s+1)*b+m-1,M=(s+1)*(b-1)+m-1,R=(s+1)*(b-1)+m,w=(s+1)*b+m;l.push(f,M,w),l.push(M,R,w)}this.setIndex(l),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(h,3)),this.setAttribute("uv",new Ve(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Pi=class i extends qe{constructor(t=new Ns(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new B,l=new B,c=new ct,h=new B,p=[],d=[],u=[],g=[];b(),this.setIndex(g),this.setAttribute("position",new Ve(p,3)),this.setAttribute("normal",new Ve(d,3)),this.setAttribute("uv",new Ve(u,2));function b(){for(let R=0;R<e;R++)m(R);m(r===!1?e:0),M(),f()}function m(R){h=t.getPointAt(R/e,h);let w=o.normals[R],D=o.binormals[R];for(let I=0;I<=s;I++){let _=I/s*Math.PI*2,C=Math.sin(_),k=-Math.cos(_);l.x=k*w.x+C*D.x,l.y=k*w.y+C*D.y,l.z=k*w.z+C*D.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,p.push(a.x,a.y,a.z)}}function f(){for(let R=1;R<=e;R++)for(let w=1;w<=s;w++){let D=(s+1)*(R-1)+(w-1),I=(s+1)*R+(w-1),_=(s+1)*R+w,C=(s+1)*(R-1)+w;g.push(D,I,C),g.push(I,_,C)}}function M(){for(let R=0;R<=e;R++)for(let w=0;w<=s;w++)c.x=R/e,c.y=w/s,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Oa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Xs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Uu(s))s.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Uu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Vn(i){let t={};for(let e=0;e<i.length;e++){let n=Xs(i[e]);for(let s in n)t[s]=n[s]}return t}function Uu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Cp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ah(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:sn.workingColorSpace}var Dd={clone:Xs,merge:Vn},Rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xi=class extends ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rp,this.fragmentShader=Pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=Cp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.linewidth=t.linewidth,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ae().setHex(s.value);break;case"v2":this.uniforms[n].value=new ct().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new vn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new He().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ln().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ka=class extends xi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Dn=class extends ui{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ae(16777215),this.specular=new Ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Mo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ye=class extends ui{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Mo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ga=class extends ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Va=class extends ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function hr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function da(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var vs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ha=class extends vs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xc,endingEnd:Xc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qc:r=t,a=2*e-n;break;case Yc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qc:o=t,l=2*n-e;break;case Yc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-e)/(s-e),b=g*g,m=b*g,f=-d*m+2*d*b-d*g,M=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,R=(-1-u)*m+(1.5+u)*b+.5*g,w=u*m-u*b;for(let D=0;D!==a;++D)r[D]=f*o[h+D]+M*o[c+D]+R*o[l+D]+w*o[p+D];return r}},Wa=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),p=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*p+o[l+d]*h;return r}},Xa=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},qa=class extends vs{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,p=this.outTangents;if(!h||!p){let g=(n-e)/(s-e),b=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*b+o[l+m]*g;return r}let d=a*2,u=t-1;for(let g=0;g!==a;++g){let b=o[c+g],m=o[l+g],f=u*d+g*2,M=p[f],R=p[f+1],w=t*d+g*2,D=h[w],I=h[w+1],_=Fp(n,e,M,D,s);r[g]=Nd(_,b,R,I,m)}return r}};function Nd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Ip(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Fp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Nd(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Ip(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var ii=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=hr(e,this.TimeBufferType),this.values=hr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:hr(t.times,Array),values:hr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),da(t.settings)&&(n.settings={inTangents:hr(t.settings.inTangents,Array),outTangents:hr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new qa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Wr:e=this.InterpolantFactoryMethodDiscrete;break;case Aa:e=this.InterpolantFactoryMethodLinear;break;case ma:e=this.InterpolantFactoryMethodSmooth;break;case Wc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Fe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return Aa;case this.InterpolantFactoryMethodSmooth:return ma;case this.InterpolantFactoryMethodBezier:return Wc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;da(this.settings)&&(zu(this.settings.inTangents,t),zu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;da(this.settings)&&(Ou(this.settings.inTangents,t),Ou(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ze("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ze("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Df(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ma,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let p=a*n,d=p-n,u=p+n;for(let g=0;g!==n;++g){let b=e[p+g];if(b!==e[d+g]||b!==e[u+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let p=a*n,d=o*n;for(let u=0;u!==n;++u)e[d+u]=e[p+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,da(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function zu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Ou(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}ii.prototype.ValueTypeName="";ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=Aa;var Ms=class extends ii{constructor(t,e,n){super(t,e,n)}};Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Wr;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Ya=class extends ii{constructor(t,e,n,s){super(t,e,n,s)}};Ya.prototype.ValueTypeName="color";var Za=class extends ii{constructor(t,e,n,s){super(t,e,n,s)}};Za.prototype.ValueTypeName="number";var Ja=class extends vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)ci.slerpFlat(r,0,o,c-a,o,c,l);return r}},_o=class extends ii{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ja(this.times,this.values,this.getValueSize(),t)}};_o.prototype.ValueTypeName="quaternion";_o.prototype.InterpolantFactoryMethodSmooth=void 0;var Ss=class extends ii{constructor(t,e,n){super(t,e,n)}};Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=Wr;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends ii{constructor(t,e,n,s){super(t,e,n,s)}};$a.prototype.ValueTypeName="vector";var Ka=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,d=c.length;p<d;p+=2){let u=c[p],g=c[p+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ud=new Ka,Qa=class{constructor(t){this.manager=t!==void 0?t:Ud,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Qa.DEFAULT_MATERIAL_NAME="__DEFAULT";var yo=class extends fn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},zs=class extends yo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Hc=new ln,Bu=new B,ku=new B,ja=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.filterNode=null,this.shadowNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xs,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new vn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Bu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bu),ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ku),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Hc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===gr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Hc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this.filterNode=t.filterNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},fa=new B,pa=new ci,Bi=new B,vo=class extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(fa,pa,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fa,pa,Bi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){let s=super.updateWorldMatrix(t,e,n);return this.matrixWorld.decompose(fa,pa,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fa,pa,Bi.set(1,1,1)).invert(),s}clone(){return new this.constructor().copy(this)}},gs=new B,Gu=new ct,Vu=new ct,Fn=class extends vo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ea*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gs.x,gs.y).multiplyScalar(-t/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gs.x,gs.y).multiplyScalar(-t/gs.z)}getViewSize(t,e){return this.getViewBounds(t,Gu,Vu),e.subVectors(Vu,Gu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Os=class extends vo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Qc=class extends ja{constructor(){super(new Os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bs=class extends yo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new Qc}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ur=-90,dr=1,wr=class extends fn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fn(ur,dr,t,e);s.layers=this.layers,this.add(s);let r=new Fn(ur,dr,t,e);r.layers=this.layers,this.add(r);let o=new Fn(ur,dr,t,e);o.layers=this.layers,this.add(o);let a=new Fn(ur,dr,t,e);a.layers=this.layers,this.add(a);let l=new Fn(ur,dr,t,e);l.layers=this.layers,this.add(l);let c=new Fn(ur,dr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=b,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,d,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},tl=class extends Fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Eh="\\[\\]\\.:\\/",Lp=new RegExp("["+Eh+"]","g"),Th="[^"+Eh+"]",Dp="[^"+Eh.replace("\\.","")+"]",Np=/((?:WC+[\/:])*)/.source.replace("WC",Th),Up=/(WCOD+)?/.source.replace("WCOD",Dp),zp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Th),Op=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Th),Bp=new RegExp("^"+Np+Up+zp+Op+"$"),kp=["material","materials","bones","map"],jc=class{constructor(t,e,n){let s=n||_n.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_n=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Lp,"")}static parseTrackName(t){let e=Bp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);kp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_n.Composite=jc;_n.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_n.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_n.prototype.GetterByBindingType=[_n.prototype._getValue_direct,_n.prototype._getValue_array,_n.prototype._getValue_arrayElement,_n.prototype._getValue_toArray];_n.prototype.SetterByBindingTypeAndVersioning=[[_n.prototype._setValue_direct,_n.prototype._setValue_direct_setNeedsUpdate,_n.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_array,_n.prototype._setValue_array_setNeedsUpdate,_n.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_arrayElement,_n.prototype._setValue_arrayElement_setNeedsUpdate,_n.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_fromArray,_n.prototype._setValue_fromArray_setNeedsUpdate,_n.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var P_=new Float32Array(1);var Lh=class Lh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Lh.prototype.isMatrix2=!0;var th=Lh;function Ch(i,t,e,n){let s=Gp(n);switch(e){case xh:return i*t;case cl:return i*t/s.components*s.byteLength;case hl:return i*t/s.components*s.byteLength;case bs:return i*t*2/s.components*s.byteLength;case ul:return i*t*2/s.components*s.byteLength;case _h:return i*t*3/s.components*s.byteLength;case Li:return i*t*4/s.components*s.byteLength;case dl:return i*t*4/s.components*s.byteLength;case bo:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Eo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pl:case gl:return Math.max(i,16)*Math.max(t,8)/4;case fl:case ml:return Math.max(i,8)*Math.max(t,8)/2;case xl:case _l:case vl:case Ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yl:case Co:case Sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case El:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Il:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zl:case Ol:case Bl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case kl:case Gl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ro:case Vl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gp(i){switch(i){case $n:case fh:return{byteLength:1,components:1};case Tr:case ph:case Fi:return{byteLength:2,components:1};case al:case ll:return{byteLength:2,components:4};case Ii:case ol:case _i:return{byteLength:4,components:1};case mh:case gh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);function rf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,p=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,a),p.length===0)i.bufferSubData(c,0,h);else{p.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<p.length;u++){let g=p[d],b=p[u];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,p[d]=b)}p.length=d+1;for(let u=0,g=p.length;u<g;u++){let b=p[u];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wp=`#ifdef USE_ALPHAHASH
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
#endif`,Xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jp=`#ifdef USE_AOMAP
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
#endif`,$p=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kp=`#ifdef USE_BATCHING
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
#endif`,Qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,em=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nm=`#ifdef USE_IRIDESCENCE
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
#endif`,im=`#ifdef USE_BUMPMAP
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
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dm=`#define PI 3.141592653589793
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
} // validated`,fm=`vec3 transformedNormal = objectNormal;
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
#endif`,pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_m="gl_FragColor = linearToOutputTexel( gl_FragColor );",ym=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Sm=`#ifdef USE_ENVMAP
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
#endif`,wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rm=`#ifdef USE_GRADIENTMAP
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
}`,Pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bm=`PhysicalMaterial material;
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
#endif`,km=`uniform sampler2D dfgLUT;
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
}`,Gm=`
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qm=`#if defined( USE_POINTS_UV )
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
#endif`,jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n0=`#if defined( USE_MORPHCOLORS )
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
#endif`,i0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`#ifdef USE_MORPHTARGETS
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
#endif`,r0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,a0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,u0=`#ifdef USE_NORMALMAP
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
#endif`,d0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,T0=`float getShadowMask() {
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
}`,C0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R0=`#ifdef USE_SKINNING
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
#endif`,P0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I0=`#ifdef USE_SKINNING
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
#endif`,F0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U0=`#ifdef USE_TRANSMISSION
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
#endif`,z0=`#ifdef USE_TRANSMISSION
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
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,V0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H0=`uniform sampler2D t2D;
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`uniform float backgroundBlurriness;
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
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`#include <common>
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
}`,J0=`#if DEPTH_PACKING == 3200
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
}`,$0=`#define DISTANCE
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
}`,K0=`#define DISTANCE
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`uniform float scale;
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
}`,eg=`uniform vec3 diffuse;
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
}`,ng=`#include <common>
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#define LAMBERT
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
}`,rg=`#define LAMBERT
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
}`,og=`#define MATCAP
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
}`,ag=`#define MATCAP
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
}`,lg=`#define NORMAL
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
}`,cg=`#define NORMAL
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
}`,hg=`#define PHONG
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
}`,ug=`#define PHONG
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
}`,dg=`#define STANDARD
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
}`,fg=`#define STANDARD
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
}`,pg=`#define TOON
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
}`,mg=`#define TOON
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
}`,gg=`uniform float size;
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
}`,xg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,yg=`uniform vec3 color;
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
}`,vg=`uniform float rotation;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,tn={alphahash_fragment:Hp,alphahash_pars_fragment:Wp,alphamap_fragment:Xp,alphamap_pars_fragment:qp,alphatest_fragment:Yp,alphatest_pars_fragment:Zp,aomap_fragment:Jp,aomap_pars_fragment:$p,batching_pars_vertex:Kp,batching_vertex:Qp,begin_vertex:jp,beginnormal_vertex:tm,bsdfs:em,iridescence_fragment:nm,bumpmap_pars_fragment:im,clipping_planes_fragment:sm,clipping_planes_pars_fragment:rm,clipping_planes_pars_vertex:om,clipping_planes_vertex:am,color_fragment:lm,color_pars_fragment:cm,color_pars_vertex:hm,color_vertex:um,common:dm,defaultnormal_vertex:fm,displacementmap_pars_vertex:pm,displacementmap_vertex:mm,emissivemap_fragment:gm,emissivemap_pars_fragment:xm,colorspace_fragment:_m,colorspace_pars_fragment:ym,envmap_fragment:vm,envmap_common_pars_fragment:Mm,envmap_pars_fragment:Sm,envmap_pars_vertex:wm,envmap_physical_pars_fragment:Dm,envmap_vertex:bm,fog_vertex:Am,fog_pars_vertex:Em,fog_fragment:Tm,fog_pars_fragment:Cm,gradientmap_pars_fragment:Rm,lightmap_pars_fragment:Pm,lights_lambert_fragment:Im,lights_lambert_pars_fragment:Fm,lights_pars_begin:Lm,lights_toon_fragment:Nm,lights_toon_pars_fragment:Um,lights_phong_fragment:zm,lights_phong_pars_fragment:Om,lights_physical_fragment:Bm,lights_physical_pars_fragment:km,lights_fragment_begin:Gm,lights_fragment_maps:Vm,lights_fragment_end:Hm,lightprobes_pars_fragment:Wm,logdepthbuf_fragment:Xm,logdepthbuf_pars_fragment:qm,logdepthbuf_pars_vertex:Ym,logdepthbuf_vertex:Zm,map_fragment:Jm,map_pars_fragment:$m,map_particle_fragment:Km,map_particle_pars_fragment:Qm,metalnessmap_fragment:jm,metalnessmap_pars_fragment:t0,morphinstance_vertex:e0,morphcolor_vertex:n0,morphnormal_vertex:i0,morphtarget_pars_vertex:s0,morphtarget_vertex:r0,normal_fragment_begin:o0,normal_fragment_maps:a0,normal_pars_fragment:l0,normal_pars_vertex:c0,normal_vertex:h0,normalmap_pars_fragment:u0,clearcoat_normal_fragment_begin:d0,clearcoat_normal_fragment_maps:f0,clearcoat_pars_fragment:p0,iridescence_pars_fragment:m0,opaque_fragment:g0,packing:x0,premultiplied_alpha_fragment:_0,project_vertex:y0,dithering_fragment:v0,dithering_pars_fragment:M0,roughnessmap_fragment:S0,roughnessmap_pars_fragment:w0,shadowmap_pars_fragment:b0,shadowmap_pars_vertex:A0,shadowmap_vertex:E0,shadowmask_pars_fragment:T0,skinbase_vertex:C0,skinning_pars_vertex:R0,skinning_vertex:P0,skinnormal_vertex:I0,specularmap_fragment:F0,specularmap_pars_fragment:L0,tonemapping_fragment:D0,tonemapping_pars_fragment:N0,transmission_fragment:U0,transmission_pars_fragment:z0,uv_pars_fragment:O0,uv_pars_vertex:B0,uv_vertex:k0,worldpos_vertex:G0,background_vert:V0,background_frag:H0,backgroundCube_vert:W0,backgroundCube_frag:X0,cube_vert:q0,cube_frag:Y0,depth_vert:Z0,depth_frag:J0,distance_vert:$0,distance_frag:K0,equirect_vert:Q0,equirect_frag:j0,linedashed_vert:tg,linedashed_frag:eg,meshbasic_vert:ng,meshbasic_frag:ig,meshlambert_vert:sg,meshlambert_frag:rg,meshmatcap_vert:og,meshmatcap_frag:ag,meshnormal_vert:lg,meshnormal_frag:cg,meshphong_vert:hg,meshphong_frag:ug,meshphysical_vert:dg,meshphysical_frag:fg,meshtoon_vert:pg,meshtoon_frag:mg,points_vert:gg,points_frag:xg,shadow_vert:_g,shadow_frag:yg,sprite_vert:vg,sprite_frag:Mg},ae={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]},probesIntensity:{value:[]}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Yi={basic:{uniforms:Vn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:tn.meshbasic_vert,fragmentShader:tn.meshbasic_frag},lambert:{uniforms:Vn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ae(0)},envMapIntensity:{value:1}}]),vertexShader:tn.meshlambert_vert,fragmentShader:tn.meshlambert_frag},phong:{uniforms:Vn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tn.meshphong_vert,fragmentShader:tn.meshphong_frag},standard:{uniforms:Vn([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tn.meshphysical_vert,fragmentShader:tn.meshphysical_frag},toon:{uniforms:Vn([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ae(0)}}]),vertexShader:tn.meshtoon_vert,fragmentShader:tn.meshtoon_frag},matcap:{uniforms:Vn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:tn.meshmatcap_vert,fragmentShader:tn.meshmatcap_frag},points:{uniforms:Vn([ae.points,ae.fog]),vertexShader:tn.points_vert,fragmentShader:tn.points_frag},dashed:{uniforms:Vn([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tn.linedashed_vert,fragmentShader:tn.linedashed_frag},depth:{uniforms:Vn([ae.common,ae.displacementmap]),vertexShader:tn.depth_vert,fragmentShader:tn.depth_frag},normal:{uniforms:Vn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:tn.meshnormal_vert,fragmentShader:tn.meshnormal_frag},sprite:{uniforms:Vn([ae.sprite,ae.fog]),vertexShader:tn.sprite_vert,fragmentShader:tn.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tn.background_vert,fragmentShader:tn.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:tn.backgroundCube_vert,fragmentShader:tn.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tn.cube_vert,fragmentShader:tn.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tn.equirect_vert,fragmentShader:tn.equirect_frag},distance:{uniforms:Vn([ae.common,ae.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tn.distance_vert,fragmentShader:tn.distance_frag},shadow:{uniforms:Vn([ae.lights,ae.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:tn.shadow_vert,fragmentShader:tn.shadow_frag}};Yi.physical={uniforms:Vn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:tn.meshphysical_vert,fragmentShader:tn.meshphysical_frag};var Wl={r:0,b:0,g:0},Sg=new ln,of=new He;of.set(-1,0,0,0,1,0,0,0,1);function wg(i,t,e,n,s,r){let o=new Ae(0),a=s===!0?0:1,l,c,h=null,p=0,d=null;function u(M){let R=M.isScene===!0?M.background:null;if(R&&R.isTexture){let w=M.backgroundBlurriness>0;R=t.get(R,w)}return R}function g(M){let R=!1,w=u(M);w===null?m(o,a):w&&w.isColor&&(m(w,1),R=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?e.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(M,R){let w=u(R);w&&w.isCubeTexture?(c===void 0&&(c=new vt(new Ke(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Xs(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,I,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sg.makeRotationFromEuler(R.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(of),c.material.toneMapped=sn.getTransfer(w.colorSpace)!==dn,(h!==w||p!==w.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,p=w.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new vt(new Yn(2,2),new xi({name:"BackgroundMaterial",uniforms:Xs(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=sn.getTransfer(w.colorSpace)!==dn,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||p!==w.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=w,p=w.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,R){M.getRGB(Wl,Ah(i)),e.buffers.color.setClear(Wl.r,Wl.g,Wl.b,R,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,R=1){o.set(M),a=R,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:b,dispose:f}}function bg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(K,st,Z,ht,nt){let lt=!1,it=p(K,ht,Z,st);r!==it&&(r=it,c(r.object)),lt=u(K,ht,Z,nt),lt&&g(K,ht,Z,nt),nt!==null&&t.update(nt,i.ELEMENT_ARRAY_BUFFER),(lt||o)&&(o=!1,w(K,st,Z,ht),nt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(nt).buffer))}function l(){return i.createVertexArray()}function c(K){return i.bindVertexArray(K)}function h(K){return i.deleteVertexArray(K)}function p(K,st,Z,ht){let nt=ht.wireframe===!0,lt=n[st.id];lt===void 0&&(lt={},n[st.id]=lt);let it=K.isInstancedMesh===!0?K.id:0,ft=lt[it];ft===void 0&&(ft={},lt[it]=ft);let mt=ft[Z.id];mt===void 0&&(mt={},ft[Z.id]=mt);let wt=mt[nt];return wt===void 0&&(wt=d(l()),mt[nt]=wt),wt}function d(K){let st=[],Z=[],ht=[];for(let nt=0;nt<e;nt++)st[nt]=0,Z[nt]=0,ht[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:st,enabledAttributes:Z,attributeDivisors:ht,object:K,attributes:{},index:null}}function u(K,st,Z,ht){let nt=r.attributes,lt=st.attributes,it=0,ft=Z.getAttributes();for(let mt in ft)if(ft[mt].location>=0){let Ht=nt[mt],ee=lt[mt];if(ee===void 0&&(mt==="instanceMatrix"&&K.instanceMatrix&&(ee=K.instanceMatrix),mt==="instanceColor"&&K.instanceColor&&(ee=K.instanceColor)),Ht===void 0||Ht.attribute!==ee||ee&&Ht.data!==ee.data)return!0;it++}return r.attributesNum!==it||r.index!==ht}function g(K,st,Z,ht){let nt={},lt=st.attributes,it=0,ft=Z.getAttributes();for(let mt in ft)if(ft[mt].location>=0){let Ht=lt[mt];Ht===void 0&&(mt==="instanceMatrix"&&K.instanceMatrix&&(Ht=K.instanceMatrix),mt==="instanceColor"&&K.instanceColor&&(Ht=K.instanceColor));let ee={};ee.attribute=Ht,Ht&&Ht.data&&(ee.data=Ht.data),nt[mt]=ee,it++}r.attributes=nt,r.attributesNum=it,r.index=ht}function b(){let K=r.newAttributes;for(let st=0,Z=K.length;st<Z;st++)K[st]=0}function m(K){f(K,0)}function f(K,st){let Z=r.newAttributes,ht=r.enabledAttributes,nt=r.attributeDivisors;Z[K]=1,ht[K]===0&&(i.enableVertexAttribArray(K),ht[K]=1),nt[K]!==st&&(i.vertexAttribDivisor(K,st),nt[K]=st)}function M(){let K=r.newAttributes,st=r.enabledAttributes;for(let Z=0,ht=st.length;Z<ht;Z++)st[Z]!==K[Z]&&(i.disableVertexAttribArray(Z),st[Z]=0)}function R(K,st,Z,ht,nt,lt,it){it===!0?i.vertexAttribIPointer(K,st,Z,nt,lt):i.vertexAttribPointer(K,st,Z,ht,nt,lt)}function w(K,st,Z,ht){b();let nt=ht.attributes,lt=Z.getAttributes(),it=st.defaultAttributeValues;for(let ft in lt){let mt=lt[ft];if(mt.location>=0){let wt=nt[ft];if(wt===void 0&&(ft==="instanceMatrix"&&K.instanceMatrix&&(wt=K.instanceMatrix),ft==="instanceColor"&&K.instanceColor&&(wt=K.instanceColor)),wt!==void 0){let Ht=wt.normalized,ee=wt.itemSize,Se=t.get(wt);if(Se===void 0)continue;let gt=Se.buffer,Qt=Se.type,ne=Se.bytesPerElement,pe=Qt===i.INT||Qt===i.UNSIGNED_INT||wt.gpuType===ol;if(wt.isInterleavedBufferAttribute){let zt=wt.data,oe=zt.isInterleavedBuffer===!0?zt.stride:zt.itemSize,ke=wt.offset;if(zt.isInstancedInterleavedBuffer||zt.isInstancedBufferAttribute){for(let xe=0;xe<mt.locationSize;xe++)f(mt.location+xe,zt.meshPerAttribute);K.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=zt.meshPerAttribute*zt.count)}else for(let xe=0;xe<mt.locationSize;xe++)m(mt.location+xe);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let xe=0;xe<mt.locationSize;xe++)R(mt.location+xe,ee/mt.locationSize,Qt,Ht,oe*ne,(ke+ee/mt.locationSize*xe)*ne,pe)}else{if(wt.isInstancedBufferAttribute){for(let zt=0;zt<mt.locationSize;zt++)f(mt.location+zt,wt.meshPerAttribute);K.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let zt=0;zt<mt.locationSize;zt++)m(mt.location+zt);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let zt=0;zt<mt.locationSize;zt++)R(mt.location+zt,ee/mt.locationSize,Qt,Ht,ee*ne,ee/mt.locationSize*zt*ne,pe)}}else if(it!==void 0){let Ht=it[ft];if(Ht!==void 0)switch(Ht.length){case 2:i.vertexAttrib2fv(mt.location,Ht);break;case 3:i.vertexAttrib3fv(mt.location,Ht);break;case 4:i.vertexAttrib4fv(mt.location,Ht);break;default:i.vertexAttrib1fv(mt.location,Ht)}}}}M()}function D(){k();for(let K in n){let st=n[K];for(let Z in st){let ht=st[Z];for(let nt in ht){let lt=ht[nt];for(let it in lt)h(lt[it].object),delete lt[it];delete ht[nt]}}delete n[K]}}function I(K){if(n[K.id]===void 0)return;let st=n[K.id];for(let Z in st){let ht=st[Z];for(let nt in ht){let lt=ht[nt];for(let it in lt)h(lt[it].object),delete lt[it];delete ht[nt]}}delete n[K.id]}function _(K){for(let st in n){let Z=n[st];for(let ht in Z){let nt=Z[ht];if(nt[K.id]===void 0)continue;let lt=nt[K.id];for(let it in lt)h(lt[it].object),delete lt[it];delete nt[K.id]}}}function C(K){for(let st in n){let Z=n[st],ht=K.isInstancedMesh===!0?K.id:0,nt=Z[ht];if(nt!==void 0){for(let lt in nt){let it=nt[lt];for(let ft in it)h(it[ft].object),delete it[ft];delete nt[lt]}delete Z[ht],Object.keys(Z).length===0&&delete n[st]}}}function k(){L(),o=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:k,resetDefaultState:L,dispose:D,releaseStatesOfGeometry:I,releaseStatesOfObject:C,releaseStatesOfProgram:_,initAttributes:b,enableAttribute:m,disableUnusedAttributes:M}}function Ag(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Eg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Li&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let C=_===Fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==$n&&_!==_i&&!C&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Fe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&Fe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=i.getParameter(i.MAX_SAMPLES),I=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:u,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:R,maxFragmentUniforms:w,maxSamples:D,samples:I}}function Tg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ti,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let u=p.length!==0||d||n!==0||s;return s=d,n=p.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=h(p,d,0)},this.setState=function(p,d,u){let g=p.clippingPlanes,b=p.clipIntersection,m=p.clipShadows,f=i.get(p);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,R=M*4,w=f.clippingState||null;l.value=w,w=h(g,d,R,u);for(let D=0;D!==R;++D)w[D]=e[D];f.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,d,u,g){let b=p!==null?p.length:0,m=null;if(b!==0){if(m=l.value,g!==!0||m===null){let f=u+b*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let R=0,w=u;R!==b;++R,w+=4)o.copy(p[R]).applyMatrix4(M,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}var Lo=class extends ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new no(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ke(5,5,5),r=new xi({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nn,blending:Gs});r.uniforms.tEquirect.value=e;let o=new vt(s,r),a=e.minFilter;return e.minFilter===ls&&(e.minFilter=Xn),new wr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},zd=256,Cg=3,Rg=20,af=256,lf=16,Pg=3,Ig=new B,Fg=new Ae,ql=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new wr(1,10,null),this._boxMesh=new vt(new Ke(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Ig}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,d=l.autoClearColor,u=l.autoClearDepth,g=l.autoClearStencil,b=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(t.background=l.getClearColor(Fg));let m=new wr(n,s,h);return m.position.copy(a),m.update(l,t),l.autoClear=p,l.autoClearColor=d,l.autoClearDepth=u,l.autoClearStencil=g,t.background=b,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(zd,Ad(t))}_fromTexture(t,e){t.mapping===Hs||t.mapping===Er?this._setSize(t.image.length===0?zd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Od(t,!1,!1),n=Math.log2(t)-Cg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Od(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Hs||t.mapping===Er?(this._cubemapMaterial===null&&(this._cubemapMaterial=kd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Bd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Lg(),this._integrationMaterial=Dg());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/lf);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Pg)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(af*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Ng());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Od(i,t,e){return new Lo(i,{minFilter:ls,generateMipmaps:t,type:Fi,colorSpace:Xr,depthBuffer:e})}function Do(i,t,e){return new xi({name:i,uniforms:t,vertexShader:tn.cube_vert,fragmentShader:e,side:Nn,blending:Gs,depthTest:!1,depthWrite:!1})}function Lg(){return Do("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function Dg(){return Do("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:lf}},`

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
	`)}function Ng(){return Do("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Rg}
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
	`)}function Bd(){return Do("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function kd(){return Do("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureLod( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ), 0.0 ).rgb, 1.0 );

		}
	`)}function Ug(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,u=!1){return d==null?null:u?o(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===il||u===sl)if(t.has(d)){let g=t.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let b=new Lo(g.height);return b.fromEquirectangularTexture(i,d),t.set(d,b),d.addEventListener("dispose",c),a(b.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,g=u===il||u===sl,b=u===Hs||u===Er;if(g||b){let m=e.get(d),f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new ql(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return g&&M&&M.height>0||b&&M&&l(M)?(n===null&&(n=new ql(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,u){return u===il?d.mapping=Hs:u===sl&&(d.mapping=Er),d}function l(d){let u=0,g=6;for(let b=0;b<g;b++)d[b]!==void 0&&u++;return u===g}function c(d){let u=d.target;u.removeEventListener("dispose",c);let g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function zg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Gr("WebGLRenderer: "+n+" extension not supported."),s}}}function Og(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);let b=r.get(g);b&&(t.remove(b),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,b){return s[b.id]!==void 0||(b.addEventListener("dispose",a),s[b.id]=new WeakRef(b),o.register(b,b.id,b),e.memory.geometries++),b}function h(g){let b=g.attributes;for(let m in b)t.update(b[m],i.ARRAY_BUFFER)}function p(g){let b=g.index,m=g.attributes.position,f=0;if(m===void 0)return;let M=b!==null?b.count:m.count-1,R=m.count>=65535?Qr:Kr,w=new R(Math.ceil(M/3)*6,1),D=w.array;if(b!==null){let _=b.array;f=b.version;for(let C=0,k=0;C<M;C+=3){let L=_[C+0],K=_[C+1],st=_[C+2];D[k++]=L,D[k++]=K,D[k++]=K,D[k++]=st,D[k++]=st,D[k++]=L}}else{f=m.version;for(let _=0,C=0;_<M;_+=3){let k=_+0,L=_+1,K=_+2;D[C++]=k,D[C++]=L,D[C++]=L,D[C++]=K,D[C++]=K,D[C++]=k}}w.version=f;let I=r.get(g);I&&t.remove(I),r.set(g,w)}function d(g){let b=r.get(g);if(b){let m=g.index;m!==null&&b.version<m.version&&p(g)}else p(g);return r.get(g)}function u(){for(let g in s){let b=s[g].deref();b!==void 0&&l(b)}}return{get:c,update:h,getWireframeAttribute:d,dispose:u}}function Bg(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,d){i.drawElements(n,d,r,p*o),e.update(d,n,1)}function c(p,d,u){u!==0&&(i.drawElementsInstanced(n,d,r,p*o,u),e.update(d,n,u))}function h(p,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,u);let b=0;for(let m=0;m<u;m++)b+=d[m];e.update(b,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function kg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ze("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gg(i,t,e){let n=new WeakMap,s=new vn;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==p){let k=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",k)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],R=0;u===!0&&(R=1),g===!0&&(R=2),b===!0&&(R=3);let w=a.attributes.position.count*R,D=1;w>t.maxTextureSize&&(D=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let I=new Float32Array(w*D*4*p),_=new Jr(I,w,D,p);_.type=_i,_.needsUpdate=!0;let C=R*4;for(let L=0;L<p;L++){let K=m[L],st=f[L],Z=M[L],ht=w*D*4*L;for(let nt=0;nt<K.count;nt++){let lt=nt*C;u===!0&&(s.fromBufferAttribute(K,nt),I[ht+lt+0]=s.x,I[ht+lt+1]=s.y,I[ht+lt+2]=s.z,I[ht+lt+3]=0),g===!0&&(s.fromBufferAttribute(st,nt),I[ht+lt+4]=s.x,I[ht+lt+5]=s.y,I[ht+lt+6]=s.z,I[ht+lt+7]=0),b===!0&&(s.fromBufferAttribute(Z,nt),I[ht+lt+8]=s.x,I[ht+lt+9]=s.y,I[ht+lt+10]=s.z,I[ht+lt+11]=Z.itemSize===4?s.w:1)}}d={count:p,texture:_,size:new ct(w,D)},n.set(a,d),a.addEventListener("dispose",k)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let u=0;for(let b=0;b<c.length;b++)u+=c[b];let g=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Vg(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,p=c.geometry,d=t.get(c,p);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Hg={[oh]:"LINEAR_TONE_MAPPING",[ah]:"REINHARD_TONE_MAPPING",[lh]:"CINEON_TONE_MAPPING",[So]:"ACES_FILMIC_TONE_MAPPING",[hh]:"AGX_TONE_MAPPING",[uh]:"NEUTRAL_TONE_MAPPING",[ch]:"CUSTOM_TONE_MAPPING"};function Wg(i,t,e,n,s,r){let o=new ti(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new qe;h.setAttribute("position",new Ve([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ve([0,2,0,0,2,0],2));let p=new ka({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new vt(h,p),u=new Os(-1,1,1,-1,0,1),g=null,b=null,m=!1,f,M=null,R=[],w=!1;this.setSize=function(D,I){o.setSize(D,I),a!==null&&a.setSize(D,I),l!==null&&l.setSize(D,I);for(let _=0;_<R.length;_++){let C=R[_];C.setSize&&C.setSize(D,I)}},this.setEffects=function(D){R=D,w=R.length>0&&R[0].isRenderPass===!0;let I=o.width,_=o.height;R.length>0&&a===null&&(a=new ti(I,_,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),l=new ti(I,_,{type:Fi,depthBuffer:!1,stencilBuffer:!1}));let C=s===!0&&R.some(k=>k.needsDepthTexture===!0);C!==(o.depthTexture!==null)&&(C===!0&&c===null&&(c=new os(I,_),r===!0&&(c.format=cs,c.type=Ws)),o.dispose(),o.depthTexture=C?c:null,o.resolveDepthBuffer=C,o.storeMultisampledDepthBuffer=C);for(let k=0;k<R.length;k++){let L=R[k];L.setSize&&L.setSize(I,_),C&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(c)}},this.begin=function(D,I){if(m||D.toneMapping===Xi&&R.length===0)return!1;if(M=I,I!==null){let _=I.width,C=I.height;(o.width!==_||o.height!==C)&&this.setSize(_,C)}return w===!1&&D.setRenderTarget(o),f=D.toneMapping,D.toneMapping=Xi,!0},this.hasRenderPass=function(){return w},this.end=function(D,I){D.toneMapping=f,m=!0;let _=o,C=a;for(let k=0;k<R.length;k++){let L=R[k];L.enabled!==!1&&(L.render(D,C,_,I),L.needsSwap!==!1&&(_=C,C=C===a?l:a))}if(g!==D.outputColorSpace||b!==D.toneMapping){g=D.outputColorSpace,b=D.toneMapping,p.defines={},sn.getTransfer(g)===dn&&(p.defines.SRGB_TRANSFER="");let k=Hg[b];k&&(p.defines[k]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=_.texture,D.setRenderTarget(M),D.render(d,u),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}var cf=new qn,hf=new os(1,1),uf=new so(1),df=new Jr,ff=new Ra,pf=new no,Gd=[],Vd=[],Hd=new Float32Array(16),Wd=new Float32Array(9),Xd=new Float32Array(4);function Rr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Gd[s];if(r===void 0&&(r=new Float32Array(s),Gd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Cn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Rn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zl(i,t){let e=Vd[t];e===void 0&&(e=new Int32Array(t),Vd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Cn(e,t))return;i.uniform2fv(this.addr,t),Rn(e,t)}}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Cn(e,t))return;i.uniform3fv(this.addr,t),Rn(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Cn(e,t))return;i.uniform4fv(this.addr,t),Rn(e,t)}}function Jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Cn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Rn(e,t)}else{if(Cn(e,n))return;Xd.set(n),i.uniformMatrix2fv(this.addr,!1,Xd),Rn(e,n)}}function $g(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Cn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Rn(e,t)}else{if(Cn(e,n))return;Wd.set(n),i.uniformMatrix3fv(this.addr,!1,Wd),Rn(e,n)}}function Kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Cn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Rn(e,t)}else{if(Cn(e,n))return;Hd.set(n),i.uniformMatrix4fv(this.addr,!1,Hd),Rn(e,n)}}function Qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Cn(e,t))return;i.uniform2iv(this.addr,t),Rn(e,t)}}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Cn(e,t))return;i.uniform3iv(this.addr,t),Rn(e,t)}}function ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Cn(e,t))return;i.uniform4iv(this.addr,t),Rn(e,t)}}function nx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Cn(e,t))return;i.uniform2uiv(this.addr,t),Rn(e,t)}}function sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Cn(e,t))return;i.uniform3uiv(this.addr,t),Rn(e,t)}}function rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Cn(e,t))return;i.uniform4uiv(this.addr,t),Rn(e,t)}}function Jl(i){return i.version===0&&(i.compareFunction=Mh,i.needsUpdate=!0),i}function ox(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Jl(hf):r=cf,e.setTexture2D(t||r,s)}function ax(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ff,s)}function lx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Jl(uf):r=pf,e.setTextureCube(t||r,s)}function cx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||df,s)}function hx(i){switch(i){case 5126:return Xg;case 35664:return qg;case 35665:return Yg;case 35666:return Zg;case 35674:return Jg;case 35675:return $g;case 35676:return Kg;case 5124:case 35670:return Qg;case 35667:case 35671:return jg;case 35668:case 35672:return tx;case 35669:case 35673:return ex;case 5125:return nx;case 36294:return ix;case 36295:return sx;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return ox;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return cx}}function ux(i,t){i.uniform1fv(this.addr,t)}function dx(i,t){let e=Rr(t,this.size,2);i.uniform2fv(this.addr,e)}function fx(i,t){let e=Rr(t,this.size,3);i.uniform3fv(this.addr,e)}function px(i,t){let e=Rr(t,this.size,4);i.uniform4fv(this.addr,e)}function mx(i,t){let e=Rr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gx(i,t){let e=Rr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function xx(i,t){let e=Rr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _x(i,t){i.uniform1iv(this.addr,t)}function yx(i,t){i.uniform2iv(this.addr,t)}function vx(i,t){i.uniform3iv(this.addr,t)}function Mx(i,t){i.uniform4iv(this.addr,t)}function Sx(i,t){i.uniform1uiv(this.addr,t)}function wx(i,t){i.uniform2uiv(this.addr,t)}function bx(i,t){i.uniform3uiv(this.addr,t)}function Ax(i,t){i.uniform4uiv(this.addr,t)}function Ex(i,t,e){let n=this.cache,s=t.length,r=Zl(e,s);Cn(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Jl(hf):o=cf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Tx(i,t,e){let n=this.cache,s=t.length,r=Zl(e,s);Cn(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ff,r[o])}function Cx(i,t,e){let n=this.cache,s=t.length,r=Zl(e,s);Cn(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Jl(uf):o=pf;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Rx(i,t,e){let n=this.cache,s=t.length,r=Zl(e,s);Cn(n,r)||(i.uniform1iv(this.addr,r),Rn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||df,r[o])}function Px(i){switch(i){case 5126:return ux;case 35664:return dx;case 35665:return fx;case 35666:return px;case 35674:return mx;case 35675:return gx;case 35676:return xx;case 5124:case 35670:return _x;case 35667:case 35671:return yx;case 35668:case 35672:return vx;case 35669:case 35673:return Mx;case 5125:return Sx;case 36294:return wx;case 36295:return bx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return Tx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Rx}}var Uh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hx(e.type)}},zh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Px(e.type)}},Oh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Dh=/(\w+)(\])?(\[|\.)?/g;function qd(i,t){i.seq.push(t),i.map[t.id]=t}function Ix(i,t,e){let n=i.name,s=n.length;for(Dh.lastIndex=0;;){let r=Dh.exec(n),o=Dh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qd(e,c===void 0?new Uh(a,i,t):new zh(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new Oh(a),qd(e,p)),e=p}}}var Cr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Ix(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Yd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Fx=37297,Lx=0;function Dx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Zd=new He;function Nx(i){sn._getMatrix(Zd,sn.workingColorSpace,i);let t=`mat3( ${Zd.elements.map(e=>e.toFixed(4))} )`;switch(sn.getTransfer(i)){case qr:return[t,"LinearTransferOETF"];case dn:return[t,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Jd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Dx(i.getShaderSource(t),a)}else return r}function Ux(i,t){let e=Nx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var zx={[oh]:"Linear",[ah]:"Reinhard",[lh]:"Cineon",[So]:"ACESFilmic",[hh]:"AgX",[uh]:"Neutral",[ch]:"Custom"};function Ox(i,t){let e=zx[t];return e===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xl=new B;function Bx(){sn.getLuminanceCoefficients(Xl);let i=Xl.x.toFixed(4),t=Xl.y.toFixed(4),e=Xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function Gx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Fo(i){return i!==""}function $d(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Kd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(i){return i.replace(Hx,Wx)}function Wx(i,t){let e=tn[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Bh(e)}var Xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qd(i){return i.replace(Xx,qx)}function qx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Yx={[ks]:"SHADOWMAP_TYPE_PCF",[br]:"SHADOWMAP_TYPE_VSM"};function Zx(i){return Yx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Jx={[Er]:"ENVMAP_MODE_REFRACTION"};function $x(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Jx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Kx={[Mo]:"ENVMAP_BLENDING_MULTIPLY",[hd]:"ENVMAP_BLENDING_MIX",[ud]:"ENVMAP_BLENDING_ADD"};function Qx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Kx[i.combine]||"ENVMAP_BLENDING_NONE"}function jx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Zx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=$x(e),p=Qx(e),d=kx(e),u=Gx(r),g=s.createProgram(),b,m,f=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(b=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Fo).join(`
`),b.length>0&&(b+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Fo).join(`
`),m.length>0&&(m+=`
`)):(b=[jd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),m=[jd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xi?"#define TONE_MAPPING":"",e.toneMapping!==Xi?tn.tonemapping_pars_fragment:"",e.toneMapping!==Xi?Ox("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",tn.colorspace_pars_fragment,Ux("linearToOutputTexel",e.outputColorSpace),Bx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fo).join(`
`)),o=Bh(o),o=$d(o,e),o=Kd(o,e),a=Bh(a),a=$d(a,e),a=Kd(a,e),o=Qd(o),a=Qd(a),e.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,b=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,m=["#define varying in",e.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=f+b+o,R=f+m+a,w=Yd(s,s.VERTEX_SHADER,M),D=Yd(s,s.FRAGMENT_SHADER,R);s.attachShader(g,w),s.attachShader(g,D),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function I(L){if(i.debug.checkShaderErrors){let K=s.getProgramInfoLog(g)||"",st=s.getShaderInfoLog(w)||"",Z=s.getShaderInfoLog(D)||"",ht=K.trim(),nt=st.trim(),lt=Z.trim(),it=!0,ft=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(it=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,w,D);else{let mt=Jd(s,w,"vertex"),wt=Jd(s,D,"fragment");ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+ht+`
`+mt+`
`+wt)}else ht!==""?Fe("WebGLProgram: Program Info Log:",ht):(nt===""||lt==="")&&(ft=!1);ft&&(L.diagnostics={runnable:it,programLog:ht,vertexShader:{log:nt,prefix:b},fragmentShader:{log:lt,prefix:m}})}s.deleteShader(w),s.deleteShader(D),_=new Cr(s,g),C=Vx(s,g)}let _;this.getUniforms=function(){return _===void 0&&I(this),_};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(g,Fx)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lx++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=D,this}var t_=0,kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Gh(t),e.set(t,n)),n}},Gh=class{constructor(t){this.id=t_++,this.code=t,this.usedTimes=0}};function e_(i){return i===bs||i===Co||i===Ro}function n_(i,t,e,n,s,r){let o=new $r,a=new kh,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,C,k,L,K,st){let Z=L.fog,ht=K.geometry,nt=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,lt=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,it=t.get(_.envMap||nt,lt),ft=d[_.type],mt=n.precision;_.precision!==null&&(mt=n.getMaxPrecision(_.precision),mt!==_.precision&&Fe("WebGLProgram.getParameters:",_.precision,"not supported, using",mt,"instead."));let wt=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Ht=wt!==void 0?wt.length:0,ee=0;ht.morphAttributes.position!==void 0&&(ee=1),ht.morphAttributes.normal!==void 0&&(ee=2),ht.morphAttributes.color!==void 0&&(ee=3);let Se,gt,Qt,ne;if(ft){let ie=Yi[ft];Se=ie.vertexShader,gt=ie.fragmentShader}else{Se=_.vertexShader,gt=_.fragmentShader;let ie=a.getVertexShaderStage(_),$e=a.getFragmentShaderStage(_);a.update(_,ie,$e),Qt=ie.id,ne=$e.id}let pe=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),oe=K.isInstancedMesh===!0,ke=K.isBatchedMesh===!0,xe=!!_.map,fe=!!_.matcap,Ne=!!it,bt=Ne&&it.isPMREMTexture===!0,Ot=!!_.aoMap,Rt=!!_.lightMap,he=!!_.bumpMap&&_.wireframe===!1,Wt=!!_.normalMap,Ce=!!_.displacementMap,ue=!!_.emissiveMap,Ue=!!_.metalnessMap,Pe=!!_.roughnessMap,Mt=_.anisotropy>0,J=_.clearcoat>0,mn=_.diffuseRoughness>0,We=_.dispersion>0,an=_.retroreflectivity>0,Bt=_.iridescence>0,pn=_.sheen>0,Me=_.transmission>0,Ie=Mt&&!!_.anisotropyMap,N=J&&!!_.clearcoatMap,v=J&&!!_.clearcoatNormalMap,at=J&&!!_.clearcoatRoughnessMap,Ft=mn&&!!_.diffuseRoughnessMap,Et=Bt&&!!_.iridescenceMap,Zt=Bt&&!!_.iridescenceThicknessMap,Jt=pn&&!!_.sheenColorMap,ut=pn&&!!_.sheenRoughnessMap,St=!!_.specularMap,Xt=!!_.specularColorMap,re=!!_.specularIntensityMap,X=Me&&!!_.transmissionMap,xt=Me&&!!_.thicknessMap,rt=!!_.gradientMap,kt=!!_.alphaMap,Kt=_.alphaTest>0,te=!!_.alphaHash,Ee=!!_.extensions,Nt=Xi;_.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Nt=i.toneMapping);let Xe=bt?it.isCompressedCubeTexture?it.image[0].mipmaps:it.mipmaps:null,_e={shaderID:ft,shaderType:_.type,shaderName:_.name,vertexShader:Se,fragmentShader:gt,defines:_.defines,customVertexShaderID:Qt,customFragmentShaderID:ne,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:mt,batching:ke,batchingColor:ke&&K._colorsTexture!==null,instancing:oe,instancingColor:oe&&K.instanceColor!==null,instancingMorph:oe&&K.morphTexture!==null,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:sn.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:xe,matcap:fe,envMap:Ne,envMapMode:Ne&&it.mapping,envMapPMREM:bt,envMapMaxLod:bt?Xe.length-1:null,envMapSize:bt?Xe[0].width:null,aoMap:Ot,lightMap:Rt,bumpMap:he,normalMap:Wt,displacementMap:Ce,emissiveMap:ue,normalMapObjectSpace:Wt&&_.normalMapType===pd,normalMapTangentSpace:Wt&&_.normalMapType===Po,packedNormalMap:Wt&&_.normalMapType===Po&&e_(_.normalMap.format),metalnessMap:Ue,roughnessMap:Pe,anisotropy:Mt,anisotropyMap:Ie,clearcoat:J,clearcoatMap:N,clearcoatNormalMap:v,clearcoatRoughnessMap:at,diffuseRoughness:mn,diffuseRoughnessMap:Ft,dispersion:We,retroreflection:an,iridescence:Bt,iridescenceMap:Et,iridescenceThicknessMap:Zt,sheen:pn,sheenColorMap:Jt,sheenRoughnessMap:ut,specularMap:St,specularColorMap:Xt,specularIntensityMap:re,transmission:Me,transmissionMap:X,thicknessMap:xt,gradientMap:rt,opaque:_.transparent===!1&&_.blending===Ar&&_.alphaToCoverage===!1,alphaMap:kt,alphaTest:Kt,alphaHash:te,combine:_.combine,mapUv:xe&&u(_.map.channel),aoMapUv:Ot&&u(_.aoMap.channel),lightMapUv:Rt&&u(_.lightMap.channel),bumpMapUv:he&&u(_.bumpMap.channel),normalMapUv:Wt&&u(_.normalMap.channel),displacementMapUv:Ce&&u(_.displacementMap.channel),emissiveMapUv:ue&&u(_.emissiveMap.channel),metalnessMapUv:Ue&&u(_.metalnessMap.channel),roughnessMapUv:Pe&&u(_.roughnessMap.channel),anisotropyMapUv:Ie&&u(_.anisotropyMap.channel),clearcoatMapUv:N&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ft&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:Et&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:ut&&u(_.sheenRoughnessMap.channel),specularMapUv:St&&u(_.specularMap.channel),specularColorMapUv:Xt&&u(_.specularColorMap.channel),specularIntensityMapUv:re&&u(_.specularIntensityMap.channel),transmissionMapUv:X&&u(_.transmissionMap.channel),thicknessMapUv:xt&&u(_.thicknessMap.channel),alphaMapUv:kt&&u(_.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(Wt||Mt),vertexNormals:!!ht.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ht.attributes.uv&&(xe||kt),fog:!!Z,useFog:_.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||ht.attributes.normal===void 0&&Wt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:zt,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:ht.attributes.position!==void 0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:ee,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbeGrids:st.filter(ie=>ie.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:xe&&_.map.isVideoTexture===!0&&sn.getTransfer(_.map.colorSpace)===dn,decodeVideoTextureEmissive:ue&&_.emissiveMap.isVideoTexture===!0&&sn.getTransfer(_.emissiveMap.colorSpace)===dn,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===je,flipSided:_.side===Nn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ee&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&_.extensions.multiDraw===!0||ke)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return _e.vertexUv1s=l.has(1),_e.vertexUv2s=l.has(2),_e.vertexUv3s=l.has(3),l.clear(),_e}function b(_){let C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(let k in _.defines)C.push(k),C.push(_.defines[k]);return _.isRawShaderMaterial===!1&&(m(C,_),f(C,_),C.push(i.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function m(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapPMREM),_.push(C.envMapMaxLod),_.push(C.envMapSize),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.diffuseRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.numSunLights),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numSunLightShadows),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbeGrids),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function f(_,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.diffuseRoughness&&o.enable(25),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function M(_){let C=d[_.type],k;if(C){let L=Yi[C];k=Dd.clone(L.uniforms)}else k=_.uniforms;return k}function R(_,C){let k=h.get(C);return k!==void 0?++k.usedTimes:(k=new jx(i,C,_,s),c.push(k),h.set(C,k)),k}function w(_){if(--_.usedTimes===0){let C=c.indexOf(_);c[C]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function D(_){a.remove(_)}function I(){a.dispose()}return{getParameters:g,getProgramCacheKey:b,getUniforms:M,acquireProgram:R,releaseProgram:w,releaseShaderCache:D,programs:c,dispose:I}}function i_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function s_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function tf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ef(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function a(d,u,g,b,m,f){let M=i[t];return M===void 0?(M={id:d.id,object:d,geometry:u,material:g,materialVariant:o(d),groupOrder:b,renderOrder:d.renderOrder,z:m,group:f},i[t]=M):(M.id=d.id,M.object=d,M.geometry=u,M.material=g,M.materialVariant=o(d),M.groupOrder=b,M.renderOrder=d.renderOrder,M.z=m,M.group=f),t++,M}function l(d,u,g,b,m,f,M){M.reversedDepth===!0&&(m=-m);let R=a(d,u,g,b,m,f);g.transmission>0?n.push(R):g.transparent===!0?s.push(R):e.push(R)}function c(d,u,g,b,m,f){let M=a(d,u,g,b,m,f);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(d,u){e.length>1&&e.sort(d||s_),n.length>1&&n.sort(u||tf),s.length>1&&s.sort(u||tf)}function p(){for(let d=t,u=i.length;d<u;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function r_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new ef,i.set(n,[o])):s>=r.length?(o=new ef,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function o_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new Ae};break;case"SpotLight":e={position:new B,direction:new B,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":e={color:new Ae,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function a_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var l_=0;function c_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function h_(i){let t=new o_,e=a_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0},s=new B,r=new ln,o=new ln;function a(c){let h=0,p=0,d=0,u=0,g=0,b=0,m=0,f=0,M=0,R=0,w=0,D=0,I=0,_=0,C=0,k=0;c.sort(c_);for(let K=0,st=c.length;K<st;K++){let Z=c[K],ht=Z.color,nt=Z.intensity,lt=Z.distance,it=null;if(Z.shadow&&Z.shadow.map&&(Z.shadow.map.texture.format===bs?it=Z.shadow.map.texture:it=Z.shadow.map.depthTexture||Z.shadow.map.texture),Z.isAmbientLight)h+=ht.r*nt,p+=ht.g*nt,d+=ht.b*nt;else if(Z.isSunLight){let ft=t.get(Z);if(ft.color.copy(Z.color).multiplyScalar(Z.intensity),Z.castShadow){let mt=Z.shadow,wt=e.get(Z);wt.shadowIntensity=mt.intensity,wt.shadowBias=mt.bias,wt.shadowNormalBias=mt.normalBias,wt.shadowRadius=mt.radius,wt.shadowMapSize.copy(mt.mapSize).multiply(mt.getFrameExtents()),n.sunShadow[g]=wt,n.sunShadowMap[g]=it;let Ht=mt.getViewportCount();for(let ee=0;ee<Ht;ee++)n.sunShadowMatrix[b+ee]=mt.getMatrix(ee),n.sunShadowCascade[b+ee]=mt._cascadeData[ee];b+=Ht,g++}n.sun[u]=ft,u++}else if(Z.isDirectionalLight){let ft=t.get(Z);if(ft.color.copy(Z.color).multiplyScalar(Z.intensity),Z.castShadow){let mt=Z.shadow,wt=e.get(Z);wt.shadowIntensity=mt.intensity,wt.shadowBias=mt.bias,wt.shadowNormalBias=mt.normalBias,wt.shadowRadius=mt.radius,wt.shadowMapSize=mt.mapSize,n.directionalShadow[m]=wt,n.directionalShadowMap[m]=it,n.directionalShadowMatrix[m]=Z.shadow.matrix,D++}n.directional[m]=ft,m++}else if(Z.isSpotLight){let ft=t.get(Z);ft.position.setFromMatrixPosition(Z.matrixWorld),ft.color.copy(ht).multiplyScalar(nt),ft.distance=lt,ft.coneCos=Math.cos(Z.angle),ft.penumbraCos=Math.cos(Z.angle*(1-Z.penumbra)),ft.decay=Z.decay,n.spot[M]=ft;let mt=Z.shadow;if(Z.map&&(n.spotLightMap[C]=Z.map,C++,mt.updateMatrices(Z),Z.castShadow&&k++),n.spotLightMatrix[M]=mt.matrix,Z.castShadow){let wt=e.get(Z);wt.shadowIntensity=mt.intensity,wt.shadowBias=mt.bias,wt.shadowNormalBias=mt.normalBias,wt.shadowRadius=mt.radius,wt.shadowMapSize=mt.mapSize,n.spotShadow[M]=wt,n.spotShadowMap[M]=it,_++}M++}else if(Z.isRectAreaLight){let ft=t.get(Z);ft.color.copy(ht).multiplyScalar(nt),ft.halfWidth.set(Z.width*.5,0,0),ft.halfHeight.set(0,Z.height*.5,0),n.rectArea[R]=ft,R++}else if(Z.isPointLight){let ft=t.get(Z);if(ft.color.copy(Z.color).multiplyScalar(Z.intensity),ft.distance=Z.distance,ft.decay=Z.decay,Z.castShadow){let mt=Z.shadow,wt=e.get(Z);wt.shadowIntensity=mt.intensity,wt.shadowBias=mt.bias,wt.shadowNormalBias=mt.normalBias,wt.shadowRadius=mt.radius,wt.shadowMapSize=mt.mapSize,wt.shadowCameraNear=mt.camera.near,wt.shadowCameraFar=mt.camera.far,n.pointShadow[f]=wt,n.pointShadowMap[f]=it,n.pointShadowMatrix[f]=Z.shadow.matrix,I++}n.point[f]=ft,f++}else if(Z.isHemisphereLight){let ft=t.get(Z);ft.skyColor.copy(Z.color).multiplyScalar(nt),ft.groundColor.copy(Z.groundColor).multiplyScalar(nt),n.hemi[w]=ft,w++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=d;let L=n.hash;(L.sunLength!==u||L.directionalLength!==m||L.pointLength!==f||L.spotLength!==M||L.rectAreaLength!==R||L.hemiLength!==w||L.numSunShadows!==g||L.numDirectionalShadows!==D||L.numPointShadows!==I||L.numSpotShadows!==_||L.numSpotMaps!==C)&&(n.sun.length=u,n.directional.length=m,n.spot.length=M,n.rectArea.length=R,n.point.length=f,n.hemi.length=w,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.directionalShadowMatrix.length=D,n.pointShadow.length=I,n.pointShadowMap.length=I,n.pointShadowMatrix.length=I,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+C-k,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=k,L.sunLength=u,L.directionalLength=m,L.pointLength=f,L.spotLength=M,L.rectAreaLength=R,L.hemiLength=w,L.numSunShadows=g,L.numDirectionalShadows=D,L.numPointShadows=I,L.numSpotShadows=_,L.numSpotMaps=C,n.version=l_++)}function l(c,h){let p=0,d=0,u=0,g=0,b=0,m=0,f=h.matrixWorldInverse;for(let M=0,R=c.length;M<R;M++){let w=c[M];if(w.isSunLight){let D=n.sun[p];D.direction.setFromMatrixPosition(w.matrixWorld),D.direction.transformDirection(f),p++}else if(w.isDirectionalLight){let D=n.directional[d];D.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(f),d++}else if(w.isSpotLight){let D=n.spot[g];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(f),D.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(f),g++}else if(w.isRectAreaLight){let D=n.rectArea[b];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(f),o.identity(),r.copy(w.matrixWorld),r.premultiply(f),o.extractRotation(r),D.halfWidth.set(w.width*.5,0,0),D.halfHeight.set(0,w.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),b++}else if(w.isPointLight){let D=n.point[u];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(f),u++}else if(w.isHemisphereLight){let D=n.hemi[m];D.direction.setFromMatrixPosition(w.matrixWorld),D.direction.transformDirection(f),m++}}}return{setup:a,setupView:l,state:n}}function nf(i){let t=new h_(i),e=[],n=[],s=[];function r(p){h.camera=p,e.length=0,n.length=0,s.length=0}function o(p){p.isLightProbeGrid?s.push(p):e.push(p)}function a(p){n.push(p)}function l(){t.setup(e),s.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function c(p){t.setupView(e,p)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function u_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new nf(i),t.set(s,[a])):r>=o.length?(a=new nf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var d_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f_=`uniform sampler2D shadow_pass;
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
}`,p_=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],m_=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],sf=new ln,Io=new B,Nh=new B;function g_(i,t,e){let n=new xs,s=new ct,r=new ct,o=new vn,a=new Ga,l=new Va,c={},h=e.maxTextureSize,p={[ws]:Nn,[Nn]:ws,[je]:je},d=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:d_,fragmentShader:f_}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new qe;g.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new vt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ks;let f=this.type;this.render=function(I,_,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;this.type===Xu&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ks);let k=i.getRenderTarget(),L=i.getActiveCubeFace(),K=i.getActiveMipmapLevel(),st=i.state;st.setBlending(Gs),st.buffers.depth.getReversed()===!0?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);let Z=f!==this.type;Z&&_.traverse(function(ht){ht.material&&(Array.isArray(ht.material)?ht.material.forEach(nt=>nt.needsUpdate=!0):ht.material.needsUpdate=!0)});for(let ht=0,nt=I.length;ht<nt;ht++){let lt=I[ht],it=lt.shadow;if(it===void 0){Fe("WebGLShadowMap:",lt,"has no shadow.");continue}if(it.autoUpdate===!1&&it.needsUpdate===!1)continue;s.copy(it.mapSize);let ft=it.getFrameExtents();s.multiply(ft),r.copy(it.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,it.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,it.mapSize.y=r.y));let mt=i.state.buffers.depth.getReversed();if(it.camera._reversedDepth=mt,it.map===null||Z===!0){if(it.map!==null&&(it.map.depthTexture!==null&&(it.map.depthTexture.dispose(),it.map.depthTexture=null),it.map.dispose()),this.type===br){if(lt.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}it.map=new ti(s.x,s.y,{format:bs,type:Fi,minFilter:Xn,magFilter:Xn,generateMipmaps:!1}),it.map.texture.name=lt.name+".shadowMap",it.map.depthTexture=new os(s.x,s.y,_i),it.map.depthTexture.name=lt.name+".shadowMapDepth",it.map.depthTexture.format=ss,it.map.depthTexture.compareFunction=null,it.map.depthTexture.minFilter=Ln,it.map.depthTexture.magFilter=Ln}else lt.isPointLight?(it.map=new Lo(s.x),it.map.depthTexture=new so(s.x,Ii)):(it.map=new ti(s.x,s.y),it.map.depthTexture=new os(s.x,s.y,Ii)),it.map.depthTexture.name=lt.name+".shadowMap",it.map.depthTexture.format=ss,this.type===ks?(it.map.depthTexture.compareFunction=mt?vh:yh,it.map.depthTexture.minFilter=Xn,it.map.depthTexture.magFilter=Xn):(it.map.depthTexture.compareFunction=null,it.map.depthTexture.minFilter=Ln,it.map.depthTexture.magFilter=Ln);it.camera.updateProjectionMatrix()}it.map.isWebGLCubeRenderTarget!==!0&&(it.map.width!==s.x||it.map.height!==s.y)&&it.map.setSize(s.x,s.y);let wt=it.map.isWebGLCubeRenderTarget?6:it.getViewportCount();lt.isPointLight!==!0&&it.updateMatrices(lt,C);let Ht=(it.camera.layers.mask&4294967294)!==0?it.camera.layers:C.layers;for(let ee=0;ee<wt;ee++){let Se=it.getCamera(ee);if(lt.isPointLight){let gt=it.camera,Qt=it.matrix,ne=lt.distance||gt.far;ne!==gt.far&&(gt.far=ne,gt.updateProjectionMatrix()),Io.setFromMatrixPosition(lt.matrixWorld),gt.position.copy(Io),Nh.copy(gt.position),Nh.add(p_[ee]),gt.up.copy(m_[ee]),gt.lookAt(Nh),gt.updateMatrixWorld(),Qt.makeTranslation(-Io.x,-Io.y,-Io.z),sf.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),it._frustum.setFromProjectionMatrix(sf,gt.coordinateSystem,gt.reversedDepth)}if(it.map.isWebGLCubeRenderTarget)i.setRenderTarget(it.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(it.map),i.clear());let gt=it.getViewport(ee);o.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),st.viewport(o)}n=it.getFrustum(ee),w(_,C,Se,lt,Ht,this.type)}it.isPointLightShadow!==!0&&this.type===br&&M(it,C),it.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(k,L,K)};function M(I,_){let C=t.update(b);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,u.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),I.mapPass===null?I.mapPass=new ti(s.x,s.y,{format:bs,type:Fi}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),d.uniforms.shadow_pass.value=I.map.depthTexture,d.uniforms.resolution.value.set(I.map.width,I.map.height),d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(_,null,C,d,b,null),u.uniforms.shadow_pass.value=I.mapPass.texture,u.uniforms.resolution.value.set(I.map.width,I.map.height),u.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(_,null,C,u,b,null)}function R(I,_,C,k){let L=null,K=C.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(K!==void 0)L=K;else if(L=C.isPointLight===!0?l:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let st=L.uuid,Z=_.uuid,ht=c[st];ht===void 0&&(ht={},c[st]=ht);let nt=ht[Z];nt===void 0&&(nt=L.clone(),ht[Z]=nt,_.addEventListener("dispose",D)),L=nt}if(L.visible=_.visible,L.wireframe=_.wireframe,k===br?L.side=_.shadowSide!==null?_.shadowSide:_.side:L.side=_.shadowSide!==null?_.shadowSide:p[_.side],L.alphaMap=_.alphaMap,L.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,L.map=_.map,L.clipShadows=_.clipShadows,L.clippingPlanes=_.clippingPlanes,L.clipIntersection=_.clipIntersection,L.displacementMap=_.displacementMap,L.displacementScale=_.displacementScale,L.displacementBias=_.displacementBias,L.wireframeLinewidth=_.wireframeLinewidth,L.linewidth=_.linewidth,C.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let st=i.properties.get(L);st.light=C}return L}function w(I,_,C,k,L,K){if(I.visible===!1)return;if(I.layers.test(L)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&K===br)&&(!I.frustumCulled||I.intersectsFrustum(n))){I.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,I.matrixWorld);let ht=t.update(I),nt=I.material;if(Array.isArray(nt)){let lt=ht.groups;for(let it=0,ft=lt.length;it<ft;it++){let mt=lt[it],wt=nt[mt.materialIndex];if(wt&&wt.visible){let Ht=R(I,wt,k,K);I.onBeforeShadow(i,I,_,C,ht,Ht,mt),i.renderBufferDirect(C,null,ht,Ht,I,mt),I.onAfterShadow(i,I,_,C,ht,Ht,mt)}}}else if(nt.visible){let lt=R(I,nt,k,K);I.onBeforeShadow(i,I,_,C,ht,lt,null),i.renderBufferDirect(C,null,ht,lt,I,null),I.onAfterShadow(i,I,_,C,ht,lt,null)}}let Z=I.children;for(let ht=0,nt=Z.length;ht<nt;ht++)w(Z[ht],_,C,k,L,K)}function D(I){I.target.removeEventListener("dispose",D);for(let C in c){let k=c[C],L=I.target.uuid;L in k&&(k[L].dispose(),delete k[L])}}}function x_(i,t){function e(){let X=!1,xt=new vn,rt=null,kt=new vn(0,0,0,0);return{setMask:function(Kt){rt!==Kt&&!X&&(i.colorMask(Kt,Kt,Kt,Kt),rt=Kt)},setLocked:function(Kt){X=Kt},setClear:function(Kt,te,Ee,Nt,Xe){Xe===!0&&(Kt*=Nt,te*=Nt,Ee*=Nt),xt.set(Kt,te,Ee,Nt),kt.equals(xt)===!1&&(i.clearColor(Kt,te,Ee,Nt),kt.copy(xt))},reset:function(){X=!1,rt=null,kt.set(-1,0,0,0)}}}function n(){let X=!1,xt=!1,rt=null,kt=null,Kt=null;return{setReversed:function(te){if(xt!==te){let Ee=t.get("EXT_clip_control");te?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),xt=te;let Nt=Kt;Kt=null,this.setClear(Nt)}},getReversed:function(){return xt},setTest:function(te){te?zt(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(te){rt!==te&&!X&&(i.depthMask(te),rt=te)},setFunc:function(te){if(xt&&(te=bd[te]),kt!==te){switch(te){case xa:i.depthFunc(i.NEVER);break;case _a:i.depthFunc(i.ALWAYS);break;case ya:i.depthFunc(i.LESS);break;case pr:i.depthFunc(i.LEQUAL);break;case va:i.depthFunc(i.EQUAL);break;case Ma:i.depthFunc(i.GEQUAL);break;case Sa:i.depthFunc(i.GREATER);break;case wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}kt=te}},setLocked:function(te){X=te},setClear:function(te){Kt!==te&&(Kt=te,xt&&(te=1-te),i.clearDepth(te))},reset:function(){X=!1,rt=null,kt=null,Kt=null,xt=!1}}}function s(){let X=!1,xt=null,rt=null,kt=null,Kt=null,te=null,Ee=null,Nt=null,Xe=null;return{setTest:function(_e){X||(_e?zt(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function(_e){xt!==_e&&!X&&(i.stencilMask(_e),xt=_e)},setFunc:function(_e,ie,$e){(rt!==_e||kt!==ie||Kt!==$e)&&(i.stencilFunc(_e,ie,$e),rt=_e,kt=ie,Kt=$e)},setOp:function(_e,ie,$e){(te!==_e||Ee!==ie||Nt!==$e)&&(i.stencilOp(_e,ie,$e),te=_e,Ee=ie,Nt=$e)},setLocked:function(_e){X=_e},setClear:function(_e){Xe!==_e&&(i.clearStencil(_e),Xe=_e)},reset:function(){X=!1,xt=null,rt=null,kt=null,Kt=null,te=null,Ee=null,Nt=null,Xe=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,h={},p={},d={},u=new WeakMap,g=[],b=null,m=!1,f=null,M=null,R=null,w=null,D=null,I=null,_=null,C=new Ae(0,0,0),k=0,L=!1,K=null,st=null,Z=null,ht=null,nt=null,lt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),it=!1,ft=0,mt=i.getParameter(i.VERSION);mt.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(mt)[1]),it=ft>=1):mt.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(mt)[1]),it=ft>=2);let wt=null,Ht={},ee=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),gt=new vn().fromArray(ee),Qt=new vn().fromArray(Se);function ne(X,xt,rt,kt){let Kt=new Uint8Array(4),te=i.createTexture();i.bindTexture(X,te),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<rt;Ee++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,kt,0,i.RGBA,i.UNSIGNED_BYTE,Kt):i.texImage2D(xt+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Kt);return te}let pe={};pe[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),zt(i.DEPTH_TEST),o.setFunc(pr),Wt(!1),Ce(eh),zt(i.CULL_FACE),Rt(Gs);function zt(X){h[X]!==!0&&(i.enable(X),h[X]=!0)}function oe(X){h[X]!==!1&&(i.disable(X),h[X]=!1)}function ke(X,xt){return X===i.FRAMEBUFFER?d[i.DRAW_FRAMEBUFFER]===xt&&d[i.READ_FRAMEBUFFER]===xt?!1:(i.bindFramebuffer(i.FRAMEBUFFER,xt),d[i.DRAW_FRAMEBUFFER]=xt,d[i.READ_FRAMEBUFFER]=xt,!0):d[X]===xt?!1:(i.bindFramebuffer(X,xt),d[X]=xt,!0)}function xe(X){return X===i.FRAMEBUFFER&&(X=i.DRAW_FRAMEBUFFER),d[X]||null}function fe(X,xt){let rt=g,kt=!1;if(X){rt=u.get(xt),rt===void 0&&(rt=[],u.set(xt,rt));let Kt=X.textures;if(rt.length!==Kt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let te=0,Ee=Kt.length;te<Ee;te++)rt[te]=i.COLOR_ATTACHMENT0+te;rt.length=Kt.length,kt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,kt=!0);kt&&i.drawBuffers(rt)}function Ne(X){return b!==X?(i.useProgram(X),b=X,!0):!1}let bt={[Vs]:i.FUNC_ADD,[Yu]:i.FUNC_SUBTRACT,[Zu]:i.FUNC_REVERSE_SUBTRACT};bt[Ju]=i.MIN,bt[$u]=i.MAX;let Ot={[Ku]:i.ZERO,[Qu]:i.ONE,[ju]:i.SRC_COLOR,[sh]:i.SRC_ALPHA,[rd]:i.SRC_ALPHA_SATURATE,[id]:i.DST_COLOR,[ed]:i.DST_ALPHA,[td]:i.ONE_MINUS_SRC_COLOR,[rh]:i.ONE_MINUS_SRC_ALPHA,[sd]:i.ONE_MINUS_DST_COLOR,[nd]:i.ONE_MINUS_DST_ALPHA,[od]:i.CONSTANT_COLOR,[ad]:i.ONE_MINUS_CONSTANT_COLOR,[ld]:i.CONSTANT_ALPHA,[cd]:i.ONE_MINUS_CONSTANT_ALPHA};function Rt(X,xt,rt,kt,Kt,te,Ee,Nt,Xe,_e){if(X===Gs){m===!0&&(oe(i.BLEND),m=!1);return}if(m===!1&&(zt(i.BLEND),m=!0),X!==qu){if(X!==f||_e!==L){if((M!==Vs||D!==Vs)&&(i.blendEquation(i.FUNC_ADD),M=Vs,D=Vs),_e)switch(X){case Ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case si:i.blendFunc(i.ONE,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ze("WebGLState: Invalid blending: ",X);break}else switch(X){case Ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nh:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ih:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",X);break}R=null,w=null,I=null,_=null,C.set(0,0,0),k=0,f=X,L=_e}return}Kt=Kt||xt,te=te||rt,Ee=Ee||kt,(xt!==M||Kt!==D)&&(i.blendEquationSeparate(bt[xt],bt[Kt]),M=xt,D=Kt),(rt!==R||kt!==w||te!==I||Ee!==_)&&(i.blendFuncSeparate(Ot[rt],Ot[kt],Ot[te],Ot[Ee]),R=rt,w=kt,I=te,_=Ee),(Nt.equals(C)===!1||Xe!==k)&&(i.blendColor(Nt.r,Nt.g,Nt.b,Xe),C.copy(Nt),k=Xe),f=X,L=!1}function he(X,xt){X.side===je?oe(i.CULL_FACE):zt(i.CULL_FACE);let rt=X.side===Nn;xt&&(rt=!rt),Wt(rt),X.blending===Ar&&X.transparent===!1?Rt(Gs):Rt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let kt=X.stencilWrite;a.setTest(kt),kt&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ue(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?zt(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(X){K!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),K=X)}function Ce(X){X!==Hu?(zt(i.CULL_FACE),X!==st&&(X===eh?i.cullFace(i.BACK):X===Wu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),st=X}function ue(X){X!==Z&&(it&&i.lineWidth(X),Z=X)}function Ue(X,xt,rt){X?(zt(i.POLYGON_OFFSET_FILL),(ht!==xt||nt!==rt)&&(ht=xt,nt=rt,o.getReversed()&&(xt=-xt,rt=-rt),i.polygonOffset(xt,rt))):oe(i.POLYGON_OFFSET_FILL)}function Pe(X){X?zt(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function Mt(X){X===void 0&&(X=i.TEXTURE0+lt-1),wt!==X&&(i.activeTexture(X),wt=X)}function J(X,xt,rt){rt===void 0&&(wt===null?rt=i.TEXTURE0+lt-1:rt=wt);let kt=Ht[rt];kt===void 0&&(kt={type:void 0,texture:void 0},Ht[rt]=kt),(kt.type!==X||kt.texture!==xt)&&(wt!==rt&&(i.activeTexture(rt),wt=rt),i.bindTexture(X,xt||pe[X]),kt.type=X,kt.texture=xt)}function mn(){let X=Ht[wt];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function We(){try{i.compressedTexImage2D(...arguments)}catch(X){ze("WebGLState:",X)}}function an(){try{i.compressedTexImage3D(...arguments)}catch(X){ze("WebGLState:",X)}}function Bt(){try{i.texSubImage2D(...arguments)}catch(X){ze("WebGLState:",X)}}function pn(){try{i.texSubImage3D(...arguments)}catch(X){ze("WebGLState:",X)}}function Me(){try{i.compressedTexSubImage2D(...arguments)}catch(X){ze("WebGLState:",X)}}function Ie(){try{i.compressedTexSubImage3D(...arguments)}catch(X){ze("WebGLState:",X)}}function N(){try{i.texStorage2D(...arguments)}catch(X){ze("WebGLState:",X)}}function v(){try{i.texStorage3D(...arguments)}catch(X){ze("WebGLState:",X)}}function at(){try{i.texImage2D(...arguments)}catch(X){ze("WebGLState:",X)}}function Ft(){try{i.texImage3D(...arguments)}catch(X){ze("WebGLState:",X)}}function Et(X){return p[X]!==void 0?p[X]:i.getParameter(X)}function Zt(X,xt){p[X]!==xt&&(i.pixelStorei(X,xt),p[X]=xt)}function Jt(X){gt.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),gt.copy(X))}function ut(X){Qt.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),Qt.copy(X))}function St(X,xt){let rt=c.get(xt);rt===void 0&&(rt=new WeakMap,c.set(xt,rt));let kt=rt.get(X);kt===void 0&&(kt=i.getUniformBlockIndex(xt,X.name),i.uniformBlockBinding(xt,kt,kt),rt.set(X,kt))}function Xt(X,xt,rt){let Kt=c.get(xt).get(X);l[Kt]!==rt&&(i.bindBufferBase(i.UNIFORM_BUFFER,Kt,rt),l[Kt]=rt)}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},wt=null,Ht={},d={},l={},u=new WeakMap,g=[],b=null,m=!1,f=null,M=null,R=null,w=null,D=null,I=null,_=null,C=new Ae(0,0,0),k=0,L=!1,K=null,st=null,Z=null,ht=null,nt=null,gt.set(0,0,i.canvas.width,i.canvas.height),Qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:zt,disable:oe,bindFramebuffer:ke,getBoundFramebuffer:xe,drawBuffers:fe,useProgram:Ne,setBlending:Rt,setMaterial:he,setFlipSided:Wt,setCullFace:Ce,setLineWidth:ue,setPolygonOffset:Ue,setScissorTest:Pe,activeTexture:Mt,bindTexture:J,unbindTexture:mn,compressedTexImage2D:We,compressedTexImage3D:an,texImage2D:at,texImage3D:Ft,pixelStorei:Zt,getParameter:Et,updateUBOMapping:St,uniformBlockBinding:Xt,texStorage2D:N,texStorage3D:v,texSubImage2D:Bt,texSubImage3D:pn,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ie,scissor:Jt,viewport:ut,reset:re}}function __(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap,p=new Set,d,u=new WeakMap,g=new Set,b=new FinalizationRegistry(N=>g.delete(N)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(N,v){return m?new OffscreenCanvas(N,v):Yr("canvas")}function M(N,v,at){let Ft=1,Et=Ie(N);if((Et.width>at||Et.height>at)&&(Ft=at/Math.max(Et.width,Et.height)),Ft<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let Zt=Math.floor(Ft*Et.width),Jt=Math.floor(Ft*Et.height);d===void 0&&(d=f(Zt,Jt));let ut=v?f(Zt,Jt):d;return ut.width=Zt,ut.height=Jt,ut.getContext("2d").drawImage(N,0,0,Zt,Jt),Fe("WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+Zt+"x"+Jt+")."),ut}else return"data"in N&&Fe("WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),N;return N}function R(N){return N.generateMipmaps}function w(N){i.generateMipmap(N)}function D(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function I(N,v,at,Ft,Et,Zt=!1){if(N!==null){if(i[N]!==void 0)return i[N];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Jt;Ft&&(Jt=t.get("EXT_texture_norm16"),Jt||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=v;if(v===i.RED&&(at===i.FLOAT&&(ut=i.R32F),at===i.HALF_FLOAT&&(ut=i.R16F),at===i.UNSIGNED_BYTE&&(ut=i.R8),at===i.UNSIGNED_SHORT&&Jt&&(ut=Jt.R16_EXT),at===i.SHORT&&Jt&&(ut=Jt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(at===i.UNSIGNED_BYTE&&(ut=i.R8UI),at===i.UNSIGNED_SHORT&&(ut=i.R16UI),at===i.UNSIGNED_INT&&(ut=i.R32UI),at===i.BYTE&&(ut=i.R8I),at===i.SHORT&&(ut=i.R16I),at===i.INT&&(ut=i.R32I)),v===i.RG&&(at===i.FLOAT&&(ut=i.RG32F),at===i.HALF_FLOAT&&(ut=i.RG16F),at===i.UNSIGNED_BYTE&&(ut=i.RG8),at===i.UNSIGNED_SHORT&&Jt&&(ut=Jt.RG16_EXT),at===i.SHORT&&Jt&&(ut=Jt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(at===i.UNSIGNED_BYTE&&(ut=i.RG8UI),at===i.UNSIGNED_SHORT&&(ut=i.RG16UI),at===i.UNSIGNED_INT&&(ut=i.RG32UI),at===i.BYTE&&(ut=i.RG8I),at===i.SHORT&&(ut=i.RG16I),at===i.INT&&(ut=i.RG32I)),v===i.RGB_INTEGER&&(at===i.UNSIGNED_BYTE&&(ut=i.RGB8UI),at===i.UNSIGNED_SHORT&&(ut=i.RGB16UI),at===i.UNSIGNED_INT&&(ut=i.RGB32UI),at===i.BYTE&&(ut=i.RGB8I),at===i.SHORT&&(ut=i.RGB16I),at===i.INT&&(ut=i.RGB32I)),v===i.RGBA_INTEGER&&(at===i.UNSIGNED_BYTE&&(ut=i.RGBA8UI),at===i.UNSIGNED_SHORT&&(ut=i.RGBA16UI),at===i.UNSIGNED_INT&&(ut=i.RGBA32UI),at===i.BYTE&&(ut=i.RGBA8I),at===i.SHORT&&(ut=i.RGBA16I),at===i.INT&&(ut=i.RGBA32I)),v===i.RGB&&(at===i.UNSIGNED_SHORT&&Jt&&(ut=Jt.RGB16_EXT),at===i.SHORT&&Jt&&(ut=Jt.RGB16_SNORM_EXT),at===i.UNSIGNED_INT_5_9_9_9_REV&&(ut=i.RGB9_E5),at===i.UNSIGNED_INT_10F_11F_11F_REV&&(ut=i.R11F_G11F_B10F)),v===i.RGBA){let St=Zt?qr:sn.getTransfer(Et);at===i.FLOAT&&(ut=i.RGBA32F),at===i.HALF_FLOAT&&(ut=i.RGBA16F),at===i.UNSIGNED_BYTE&&(ut=St===dn?i.SRGB8_ALPHA8:i.RGBA8),at===i.UNSIGNED_SHORT&&Jt&&(ut=Jt.RGBA16_EXT),at===i.SHORT&&Jt&&(ut=Jt.RGBA16_SNORM_EXT),at===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),at===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function _(N,v){let at;return N?v===null||v===Ii||v===Ws?at=i.DEPTH24_STENCIL8:v===_i?at=i.DEPTH32F_STENCIL8:v===Tr&&(at=i.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ii||v===Ws?at=i.DEPTH_COMPONENT24:v===_i?at=i.DEPTH_COMPONENT32F:v===Tr&&(at=i.DEPTH_COMPONENT16),at}function C(N,v){return R(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ln&&N.minFilter!==Xn?Math.log2(Math.max(v.width,v.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?v.mipmaps.length:1}function k(N){let v=new WeakRef(N);n.get(N).__ref=v,g.add(v),b.register(N,v,v)}function L(N){let v=n.get(N).__ref;v!==void 0&&(g.delete(v),b.unregister(v))}function K(N){Z(N.target)}function st(N){ht(N.target)}function Z(N){N.removeEventListener("dispose",K),L(N),lt(N),N.isVideoTexture&&h.delete(N),N.isHTMLTexture&&p.delete(N)}function ht(N){N.removeEventListener("dispose",st),L(N),ft(N)}function nt(){for(let N of g){let v=N.deref();v!==void 0&&(v.isRenderTarget===!0?ht(v):Z(v))}g.clear(),p.clear()}function lt(N){let v=n.get(N);if(v.__webglInit===void 0)return;let at=N.source,Ft=u.get(at);if(Ft){let Et=Ft[v.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&it(N),Object.keys(Ft).length===0&&u.delete(at)}n.remove(N)}function it(N){let v=n.get(N);i.deleteTexture(v.__webglTexture);let at=N.source,Ft=u.get(at);delete Ft[v.__cacheKey],o.memory.textures--}function ft(N){let v=n.get(N);v.__depthDisposeCallback&&v.__depthDisposeCallback();let at=N.depthTexture;if(at&&at.renderTarget===N&&Z(at),N.isWebGLCubeRenderTarget)for(let Et=0;Et<6;Et++){if(Array.isArray(v.__webglFramebuffer[Et]))for(let Zt=0;Zt<v.__webglFramebuffer[Et].length;Zt++)i.deleteFramebuffer(v.__webglFramebuffer[Et][Zt]);else i.deleteFramebuffer(v.__webglFramebuffer[Et]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Et])}else{if(Array.isArray(v.__webglFramebuffer))for(let Et=0;Et<v.__webglFramebuffer.length;Et++)i.deleteFramebuffer(v.__webglFramebuffer[Et]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Et=0;Et<v.__webglColorRenderbuffer.length;Et++)v.__webglColorRenderbuffer[Et]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Et]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Ft=N.textures;for(let Et=0,Zt=Ft.length;Et<Zt;Et++){let Jt=n.get(Ft[Et]);Jt.__webglTexture&&(i.deleteTexture(Jt.__webglTexture),o.memory.textures--),n.remove(Ft[Et])}n.remove(N)}let mt=0;function wt(){mt=0}function Ht(){return mt}function ee(N){mt=N}function Se(){let N=mt;return N>=s.maxTextures&&Fe("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),mt+=1,N}function gt(N){let v=[];return v.push(N.wrapS),v.push(N.wrapT),v.push(N.wrapR||0),v.push(N.magFilter),v.push(N.minFilter),v.push(N.anisotropy),v.push(N.internalFormat),v.push(N.format),v.push(N.type),v.push(N.generateMipmaps),v.push(N.mipmapsAutoUpdate),v.push(N.premultiplyAlpha),v.push(N.flipY),v.push(N.unpackAlignment),v.push(N.colorSpace),v.join()}function Qt(N,v){let at=n.get(N);if(N.isVideoTexture&&pn(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&at.__version!==N.version){let Ft=N.image;if(Ft===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(Ft.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(at,N,v);return}}else N.isExternalTexture&&(at.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,at.__webglTexture,i.TEXTURE0+v)}function ne(N,v){let at=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&at.__version!==N.version){Rt(at,N,v);return}else N.isExternalTexture&&(at.__webglTexture=N.sourceTexture?N.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,at.__webglTexture,i.TEXTURE0+v)}function pe(N,v){let at=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&at.__version!==N.version){Rt(at,N,v);return}e.bindTexture(i.TEXTURE_3D,at.__webglTexture,i.TEXTURE0+v)}function zt(N,v){let at=n.get(N);if(N.version>0&&at.__version!==N.version){he(at,N,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture,i.TEXTURE0+v)}let oe={[mr]:i.REPEAT,[ki]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},ke={[Ln]:i.NEAREST,[dd]:i.NEAREST_MIPMAP_NEAREST,[wo]:i.NEAREST_MIPMAP_LINEAR,[Xn]:i.LINEAR,[rl]:i.LINEAR_MIPMAP_NEAREST,[ls]:i.LINEAR_MIPMAP_LINEAR},xe={[gd]:i.NEVER,[Mh]:i.ALWAYS,[xd]:i.LESS,[yh]:i.LEQUAL,[_d]:i.EQUAL,[vh]:i.GEQUAL,[yd]:i.GREATER,[vd]:i.NOTEQUAL};function fe(N,v){if(v.type===_i&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Xn||v.magFilter===rl||v.magFilter===wo||v.magFilter===ls||v.minFilter===Xn||v.minFilter===rl||v.minFilter===wo||v.minFilter===ls)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,oe[v.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,oe[v.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,oe[v.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,ke[v.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,ke[v.minFilter]),v.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,xe[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ln||v.minFilter!==wo&&v.minFilter!==ls||v.type===_i&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let at=t.get("EXT_texture_filter_anisotropic");i.texParameterf(N,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ne(N,v){let at=!1;N.__webglInit===void 0&&(N.__webglInit=!0,v.addEventListener("dispose",K),k(v));let Ft=v.source,Et=u.get(Ft);Et===void 0&&(Et={},u.set(Ft,Et));let Zt=gt(v);if(Zt!==N.__cacheKey){Et[Zt]===void 0&&(Et[Zt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,at=!0),Et[Zt].usedTimes++;let Jt=Et[N.__cacheKey];Jt!==void 0&&(Et[N.__cacheKey].usedTimes--,Jt.usedTimes===0&&it(v)),N.__cacheKey=Zt,N.__webglTexture=Et[Zt].texture}return at}function bt(N,v,at){return Math.floor(Math.floor(N/at)/v)}function Ot(N,v,at,Ft){let Zt=N.updateRanges;if(Zt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,at,Ft,v.data);else{Zt.sort((re,X)=>re.start-X.start);let Jt=0;for(let re=1;re<Zt.length;re++){let X=Zt[Jt],xt=Zt[re],rt=X.start+X.count,kt=bt(xt.start,v.width,4),Kt=bt(X.start,v.width,4);xt.start<=rt+1&&kt===Kt&&bt(xt.start+xt.count-1,v.width,4)===kt?X.count=Math.max(X.count,xt.start+xt.count-X.start):(++Jt,Zt[Jt]=xt)}Zt.length=Jt+1;let ut=e.getParameter(i.UNPACK_ROW_LENGTH),St=e.getParameter(i.UNPACK_SKIP_PIXELS),Xt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let re=0,X=Zt.length;re<X;re++){let xt=Zt[re],rt=Math.floor(xt.start/4),kt=Math.ceil(xt.count/4),Kt=rt%v.width,te=Math.floor(rt/v.width),Ee=kt,Nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(i.UNPACK_SKIP_ROWS,te),e.texSubImage2D(i.TEXTURE_2D,0,Kt,te,Ee,Nt,at,Ft,v.data)}N.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ut),e.pixelStorei(i.UNPACK_SKIP_PIXELS,St),e.pixelStorei(i.UNPACK_SKIP_ROWS,Xt)}}function Rt(N,v,at){let Ft=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Ft=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Ft=i.TEXTURE_3D);let Et=Ne(N,v),Zt=v.source;e.bindTexture(Ft,N.__webglTexture,i.TEXTURE0+at);let Jt=n.get(Zt);if(Zt.version!==Jt.__version||Et===!0){if(e.activeTexture(i.TEXTURE0+at),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let Nt=sn.getPrimaries(sn.workingColorSpace),Xe=v.colorSpace===hs?null:sn.getPrimaries(v.colorSpace),_e=v.colorSpace===hs||Nt===Xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let St=M(v.image,!1,s.maxTextureSize);St=Me(v,St);let Xt=r.convert(v.format,v.colorSpace),re=r.convert(v.type),X=I(v.internalFormat,Xt,re,v.normalized,v.colorSpace,v.isVideoTexture);fe(Ft,v);let xt,rt=v.mipmaps,kt=v.isVideoTexture!==!0,Kt=Jt.__version===void 0||Et===!0,te=Zt.dataReady,Ee=C(v,St);if(v.isDepthTexture)X=_(v.format===cs,v.type),Kt&&(kt?e.texStorage2D(i.TEXTURE_2D,1,X,St.width,St.height):e.texImage2D(i.TEXTURE_2D,0,X,St.width,St.height,0,Xt,re,null));else if(v.isDataTexture)if(rt.length>0){kt&&Kt&&e.texStorage2D(i.TEXTURE_2D,Ee,X,rt[0].width,rt[0].height);for(let Nt=0,Xe=rt.length;Nt<Xe;Nt++)xt=rt[Nt],kt?te&&e.texSubImage2D(i.TEXTURE_2D,Nt,0,0,xt.width,xt.height,Xt,re,xt.data):e.texImage2D(i.TEXTURE_2D,Nt,X,xt.width,xt.height,0,Xt,re,xt.data);v.generateMipmaps=!1}else kt?(Kt&&e.texStorage2D(i.TEXTURE_2D,Ee,X,St.width,St.height),te&&Ot(v,St,Xt,re)):e.texImage2D(i.TEXTURE_2D,0,X,St.width,St.height,0,Xt,re,St.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){kt&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,X,rt[0].width,rt[0].height,St.depth);for(let Nt=0,Xe=rt.length;Nt<Xe;Nt++)if(xt=rt[Nt],v.format!==Li)if(Xt!==null)if(kt){if(te)if(v.layerUpdates.size>0){let _e=Ch(xt.width,xt.height,v.format,v.type);for(let ie of v.layerUpdates){let $e=xt.data.subarray(ie*_e/xt.data.BYTES_PER_ELEMENT,(ie+1)*_e/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Nt,0,0,ie,xt.width,xt.height,1,Xt,$e)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Nt,0,0,0,xt.width,xt.height,St.depth,Xt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Nt,X,xt.width,xt.height,St.depth,0,xt.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?te&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Nt,0,0,0,xt.width,xt.height,St.depth,Xt,re,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Nt,X,xt.width,xt.height,St.depth,0,Xt,re,xt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{kt&&Kt&&e.texStorage2D(i.TEXTURE_2D,Ee,X,rt[0].width,rt[0].height);for(let Nt=0,Xe=rt.length;Nt<Xe;Nt++)xt=rt[Nt],v.format!==Li?Xt!==null?kt?te&&e.compressedTexSubImage2D(i.TEXTURE_2D,Nt,0,0,xt.width,xt.height,Xt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,Nt,X,xt.width,xt.height,0,xt.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?te&&e.texSubImage2D(i.TEXTURE_2D,Nt,0,0,xt.width,xt.height,Xt,re,xt.data):e.texImage2D(i.TEXTURE_2D,Nt,X,xt.width,xt.height,0,Xt,re,xt.data)}else if(v.isDataArrayTexture)if(kt){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,X,St.width,St.height,St.depth),te)if(v.layerUpdates.size>0){let Nt=Ch(St.width,St.height,v.format,v.type);for(let Xe of v.layerUpdates){let _e=St.data.subarray(Xe*Nt/St.data.BYTES_PER_ELEMENT,(Xe+1)*Nt/St.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Xe,St.width,St.height,1,Xt,re,_e)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Xt,re,St.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,X,St.width,St.height,St.depth,0,Xt,re,St.data);else if(v.isData3DTexture)kt?(Kt&&e.texStorage3D(i.TEXTURE_3D,Ee,X,St.width,St.height,St.depth),te&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Xt,re,St.data)):e.texImage3D(i.TEXTURE_3D,0,X,St.width,St.height,St.depth,0,Xt,re,St.data);else if(v.isFramebufferTexture){if(Kt)if(kt)e.texStorage2D(i.TEXTURE_2D,Ee,X,St.width,St.height);else{let Nt=St.width,Xe=St.height;for(let _e=0;_e<Ee;_e++)e.texImage2D(i.TEXTURE_2D,_e,X,Nt,Xe,0,Xt,re,null),Nt>>=1,Xe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let Nt=i.canvas;if(Nt.hasAttribute("layoutsubtree")||Nt.setAttribute("layoutsubtree","true"),St.parentNode!==Nt){Nt.appendChild(St),p.add(v),Nt.onpaint=Xe=>{let _e=Xe.changedElements;for(let ie of p)_e.includes(ie.image)&&(ie.needsUpdate=!0)},Nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,St);else{let _e=i.RGBA,ie=i.RGBA,$e=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,_e,ie,$e,St)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(rt.length>0){if(kt&&Kt){let Nt=Ie(rt[0]);e.texStorage2D(i.TEXTURE_2D,Ee,X,Nt.width,Nt.height)}for(let Nt=0,Xe=rt.length;Nt<Xe;Nt++)xt=rt[Nt],kt?te&&e.texSubImage2D(i.TEXTURE_2D,Nt,0,0,Xt,re,xt):e.texImage2D(i.TEXTURE_2D,Nt,X,Xt,re,xt);v.generateMipmaps=!1}else if(kt){if(Kt){let Nt=Ie(St);e.texStorage2D(i.TEXTURE_2D,Ee,X,Nt.width,Nt.height)}te&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Xt,re,St)}else e.texImage2D(i.TEXTURE_2D,0,X,Xt,re,St);R(v)&&v.mipmapsAutoUpdate===!0&&w(Ft),Jt.__version=Zt.version,v.onUpdate&&v.onUpdate(v)}N.__version=v.version}function he(N,v,at){if(v.image.length!==6)return;let Ft=Ne(N,v),Et=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+at);let Zt=n.get(Et);if(Et.version!==Zt.__version||Ft===!0){e.activeTexture(i.TEXTURE0+at);let Jt=sn.getPrimaries(sn.workingColorSpace),ut=v.colorSpace===hs?null:sn.getPrimaries(v.colorSpace),St=v.colorSpace===hs||Jt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Xt=v.isCompressedTexture||v.image[0].isCompressedTexture,re=v.image[0]&&v.image[0].isDataTexture,X=[];for(let ie=0;ie<6;ie++)!Xt&&!re?X[ie]=M(v.image[ie],!0,s.maxCubemapSize):X[ie]=re?v.image[ie].image:v.image[ie],X[ie]=Me(v,X[ie]);let xt=X[0],rt=r.convert(v.format,v.colorSpace),kt=r.convert(v.type),Kt=I(v.internalFormat,rt,kt,v.normalized,v.colorSpace),te=v.isVideoTexture!==!0,Ee=Zt.__version===void 0||Ft===!0,Nt=Et.dataReady,Xe=C(v,xt);fe(i.TEXTURE_CUBE_MAP,v);let _e;if(v.isDepthTexture){if(Kt=_(v.format===cs,v.type),Ee)if(te)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Kt,xt.width,xt.height);else for(let ie=0;ie<6;ie++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Kt,xt.width,xt.height,0,rt,kt,null)}else if(Xt){te&&Ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,Kt,xt.width,xt.height);for(let ie=0;ie<6;ie++){_e=X[ie].mipmaps;for(let $e=0;$e<_e.length;$e++){let gn=_e[$e];v.format!==Li?rt!==null?te?Nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,$e,0,0,gn.width,gn.height,rt,gn.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,$e,Kt,gn.width,gn.height,0,gn.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?Nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,$e,0,0,gn.width,gn.height,rt,kt,gn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,$e,Kt,gn.width,gn.height,0,rt,kt,gn.data)}}}else{if(_e=v.mipmaps,te&&Ee){_e.length>0&&Xe++;let ie=Ie(X[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,Kt,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(re){te?Nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,X[ie].width,X[ie].height,rt,kt,X[ie].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Kt,X[ie].width,X[ie].height,0,rt,kt,X[ie].data);for(let $e=0;$e<_e.length;$e++){let ri=_e[$e].image[ie].image;te?Nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,$e+1,0,0,ri.width,ri.height,rt,kt,ri.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,$e+1,Kt,ri.width,ri.height,0,rt,kt,ri.data)}}else{te?Nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,rt,kt,X[ie]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Kt,rt,kt,X[ie]);for(let $e=0;$e<_e.length;$e++){let gn=_e[$e];te?Nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,$e+1,0,0,rt,kt,gn.image[ie]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,$e+1,Kt,rt,kt,gn.image[ie])}}}R(v)&&v.mipmapsAutoUpdate===!0&&w(i.TEXTURE_CUBE_MAP),Zt.__version=Et.version,v.onUpdate&&v.onUpdate(v)}N.__version=v.version}function Wt(N,v,at,Ft,Et,Zt){let Jt=r.convert(at.format,at.colorSpace),ut=r.convert(at.type),St=I(at.internalFormat,Jt,ut,at.normalized,at.colorSpace),Xt=n.get(v),re=n.get(at);if(re.__renderTarget=v,!Xt.__hasExternalTextures){let X=Math.max(1,v.width>>Zt),xt=Math.max(1,v.height>>Zt);Et===i.TEXTURE_3D||Et===i.TEXTURE_2D_ARRAY?e.texImage3D(Et,Zt,St,X,xt,v.depth,0,Jt,ut,null):e.texImage2D(Et,Zt,St,X,xt,0,Jt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,N),Bt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ft,Et,re.__webglTexture,0,an(v)):(Et===i.TEXTURE_2D||Et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Ft,Et,re.__webglTexture,Zt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(N,v,at){if(i.bindRenderbuffer(i.RENDERBUFFER,N),v.depthBuffer){let Ft=v.depthTexture,Et=Ft&&Ft.isDepthTexture?Ft.type:null,Zt=_(v.stencilBuffer,Et),Jt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Bt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,an(v),Zt,v.width,v.height):at?i.renderbufferStorageMultisample(i.RENDERBUFFER,an(v),Zt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Zt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Jt,i.RENDERBUFFER,N)}else{let Ft=v.textures;for(let Et=0;Et<Ft.length;Et++){let Zt=Ft[Et],Jt=r.convert(Zt.format,Zt.colorSpace),ut=r.convert(Zt.type),St=I(Zt.internalFormat,Jt,ut,Zt.normalized,Zt.colorSpace);Bt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,an(v),St,v.width,v.height):at?i.renderbufferStorageMultisample(i.RENDERBUFFER,an(v),St,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,St,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(N,v,at){let Ft=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,N),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Et=n.get(v.depthTexture);Et.__renderTarget=v;let Zt=Ft?v.depthTexture.image[0]:v.depthTexture.image;(!Et.__webglTexture||Zt.width!==v.width||Zt.height!==v.height)&&(Zt.width=v.width,Zt.height=v.height,v.depthTexture.needsUpdate=!0),Ft?zt(v.depthTexture,0):Qt(v.depthTexture,0);let Jt=Et.__webglTexture,ut=an(v),St=Ft?i.TEXTURE_CUBE_MAP_POSITIVE_X+at:i.TEXTURE_2D,Xt=v.depthTexture.format===cs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===ss)Bt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Xt,St,Jt,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,Xt,St,Jt,0);else if(v.depthTexture.format===cs)Bt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Xt,St,Jt,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,Xt,St,Jt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ue(N){let v=n.get(N),at=N.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==N.depthTexture){let Ft=N.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Ft){let Et=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Ft.removeEventListener("dispose",Et)};Ft.addEventListener("dispose",Et),v.__depthDisposeCallback=Et}v.__boundDepthTexture=Ft}if(N.depthTexture&&!v.__autoAllocateDepthBuffer)if(at)for(let Ft=0;Ft<6;Ft++)ue(v.__webglFramebuffer[Ft],N,Ft);else N.texture.mipmaps.length>0?ue(v.__webglFramebuffer[0],N,0):ue(v.__webglFramebuffer,N,0);else if(at){v.__webglDepthbuffer=[];for(let Ft=0;Ft<6;Ft++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Ft]),v.__webglDepthbuffer[Ft]===void 0)v.__webglDepthbuffer[Ft]=i.createRenderbuffer(),Ce(v.__webglDepthbuffer[Ft],N,!1);else{let Et=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Zt=v.__webglDepthbuffer[Ft];i.bindRenderbuffer(i.RENDERBUFFER,Zt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,Zt)}}else if(N.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ce(v.__webglDepthbuffer,N,!1);else{let Et=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Zt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Zt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,Zt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(N,v,at){let Ft=n.get(N);v!==void 0&&Wt(Ft.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),at!==void 0&&Ue(N)}function Mt(N){let v=N.texture,at=n.get(N),Ft=n.get(v);N.addEventListener("dispose",st),k(N);let Et=N.textures,Zt=N.isWebGLCubeRenderTarget===!0,Jt=Et.length>1;if(Jt||(Ft.__webglTexture===void 0&&(Ft.__webglTexture=i.createTexture()),Ft.__version=v.version,o.memory.textures++),Zt){at.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(v.mipmaps.length>0){at.__webglFramebuffer[ut]=[];for(let St=0;St<v.mipmaps.length;St++)at.__webglFramebuffer[ut][St]=i.createFramebuffer()}else at.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(v.mipmaps.length>0){at.__webglFramebuffer=[];for(let ut=0;ut<v.mipmaps.length;ut++)at.__webglFramebuffer[ut]=i.createFramebuffer()}else at.__webglFramebuffer=i.createFramebuffer();if(Jt)for(let ut=0,St=Et.length;ut<St;ut++){let Xt=n.get(Et[ut]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&Bt(N)===!1){at.__webglMultisampledFramebuffer=i.createFramebuffer(),at.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let ut=0;ut<Et.length;ut++){let St=Et[ut];at.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,at.__webglColorRenderbuffer[ut]);let Xt=r.convert(St.format,St.colorSpace),re=r.convert(St.type),X=I(St.internalFormat,Xt,re,St.normalized,St.colorSpace,N.isXRRenderTarget===!0),xt=an(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,X,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,at.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(at.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(at.__webglDepthRenderbuffer,N,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Zt){e.bindTexture(i.TEXTURE_CUBE_MAP,Ft.__webglTexture),fe(i.TEXTURE_CUBE_MAP,v);for(let ut=0;ut<6;ut++)if(v.mipmaps.length>0)for(let St=0;St<v.mipmaps.length;St++)Wt(at.__webglFramebuffer[ut][St],N,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,St);else Wt(at.__webglFramebuffer[ut],N,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);R(v)?w(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(Jt){for(let ut=0,St=Et.length;ut<St;ut++){let Xt=Et[ut],re=n.get(Xt),X=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(X=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(X,re.__webglTexture),fe(X,Xt),Wt(at.__webglFramebuffer,N,Xt,i.COLOR_ATTACHMENT0+ut,X,0),R(Xt)&&w(X)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ut=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,Ft.__webglTexture),fe(ut,v),v.mipmaps.length>0)for(let St=0;St<v.mipmaps.length;St++)Wt(at.__webglFramebuffer[St],N,v,i.COLOR_ATTACHMENT0,ut,St);else Wt(at.__webglFramebuffer,N,v,i.COLOR_ATTACHMENT0,ut,0);R(v)?w(ut):v.mipmaps.length>0&&i.texParameteri(ut,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}N.depthBuffer&&Ue(N)}function J(N){let v=N.textures;for(let at=0,Ft=v.length;at<Ft;at++){let Et=v[at];if(R(Et)&&Et.mipmapsAutoUpdate===!0){let Zt=D(N),Jt=n.get(Et).__webglTexture;e.bindTexture(Zt,Jt),w(Zt),e.unbindTexture()}}}let mn=[];function We(N){if(N.samples>0){if(Bt(N)===!1){let v=N.textures,at=N.width,Ft=N.height,Et=i.COLOR_BUFFER_BIT,Zt=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Jt=n.get(N),ut=v.length>1;if(ut)for(let Xt=0;Xt<v.length;Xt++)e.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let Xt=0;Xt<v.length;Xt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Et|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Et|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Jt.__webglColorRenderbuffer[Xt]);let re=n.get(v[Xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,at,Ft,0,0,at,Ft,Et,i.NEAREST),l===!0&&(mn.length=0,mn.push(i.COLOR_ATTACHMENT0+Xt),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&mn.push(Zt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Xt=0;Xt<v.length;Xt++){e.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.RENDERBUFFER,Jt.__webglColorRenderbuffer[Xt]);let re=n.get(v[Xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xt,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let v=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function an(N){return Math.min(s.maxSamples,N.samples)}function Bt(N){let v=n.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function pn(N){let v=o.render.frame;h.get(N)!==v&&(h.set(N,v),N.update())}function Me(N,v){let at=N.colorSpace,Ft=N.format,Et=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||at!==Xr&&at!==hs&&(sn.getTransfer(at)===dn?(Ft!==Li||Et!==$n)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",at)),v}function Ie(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=Se,this.resetTextureUnits=wt,this.getTextureUnits=Ht,this.setTextureUnits=ee,this.setTexture2D=Qt,this.setTexture2DArray=ne,this.setTexture3D=pe,this.setTextureCube=zt,this.rebindTextures=Pe,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Wt,this.useMultisampledRTT=Bt,this.dispose=nt}function y_(i,t){function e(n,s=hs){let r,o=sn.getTransfer(s);if(n===$n)return i.UNSIGNED_BYTE;if(n===al)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===fh)return i.BYTE;if(n===ph)return i.SHORT;if(n===Tr)return i.UNSIGNED_SHORT;if(n===ol)return i.INT;if(n===Ii)return i.UNSIGNED_INT;if(n===_i)return i.FLOAT;if(n===Fi)return i.HALF_FLOAT;if(n===xh)return i.ALPHA;if(n===_h)return i.RGB;if(n===Li)return i.RGBA;if(n===ss)return i.DEPTH_COMPONENT;if(n===cs)return i.DEPTH_STENCIL;if(n===cl)return i.RED;if(n===hl)return i.RED_INTEGER;if(n===bs)return i.RG;if(n===ul)return i.RG_INTEGER;if(n===dl)return i.RGBA_INTEGER;if(n===bo||n===Ao||n===Eo||n===To)if(o===dn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fl||n===pl||n===ml||n===gl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xl||n===_l||n===yl||n===vl||n===Ml||n===Co||n===Sl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xl||n===_l)return o===dn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yl)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===vl)return r.COMPRESSED_R11_EAC;if(n===Ml)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Co)return r.COMPRESSED_RG11_EAC;if(n===Sl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wl||n===bl||n===Al||n===El||n===Tl||n===Cl||n===Rl||n===Pl||n===Il||n===Fl||n===Ll||n===Dl||n===Nl||n===Ul)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wl)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bl)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Al)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===El)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tl)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cl)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rl)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pl)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Il)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fl)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ll)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dl)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nl)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ul)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zl||n===Ol||n===Bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zl)return o===dn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kl||n===Gl||n===Ro||n===Vl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===kl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var v_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M_=`
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

}`,Vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ro(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xi({vertexShader:v_,fragmentShader:M_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new vt(new Yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hh=class extends Vi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,d=null,u=null,g=null,b=typeof XRWebGLBinding<"u",m=new Vh,f={},M=e.getContextAttributes(),R=null,w=null,D=[],I=[],_=new ct,C=null,k=null,L=new Fn;L.viewport=new vn;let K=new Fn;K.viewport=new vn;let st=[L,K],Z=new tl,ht=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(gt){let Qt=D[gt];return Qt===void 0&&(Qt=new yr,D[gt]=Qt),Qt.getTargetRaySpace()},this.getControllerGrip=function(gt){let Qt=D[gt];return Qt===void 0&&(Qt=new yr,D[gt]=Qt),Qt.getGripSpace()},this.getHand=function(gt){let Qt=D[gt];return Qt===void 0&&(Qt=new yr,D[gt]=Qt),Qt.getHandSpace()};function lt(gt){let Qt=I.indexOf(gt.inputSource);if(Qt===-1)return;let ne=D[Qt];ne!==void 0&&(ne.update(gt.inputSource,gt.frame,c||o),ne.dispatchEvent({type:gt.type,data:gt.inputSource}))}function it(){s.removeEventListener("select",lt),s.removeEventListener("selectstart",lt),s.removeEventListener("selectend",lt),s.removeEventListener("squeeze",lt),s.removeEventListener("squeezestart",lt),s.removeEventListener("squeezeend",lt),s.removeEventListener("end",it),s.removeEventListener("inputsourceschange",ft);for(let gt=0;gt<D.length;gt++){let Qt=I[gt];Qt!==null&&(I[gt]=null,D[gt].disconnect(Qt))}ht=null,nt=null,m.reset();for(let gt in f)delete f[gt];if(t.setRenderTarget(R),u=null,d=null,p=null,s=null,w=null,Se.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(_.width,_.height,!1),k!==null){let gt=k.camera;gt.fov=k.fov,gt.zoom=k.zoom,gt.updateProjectionMatrix(),k=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(gt){r=gt,n.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(gt){a=gt,n.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(gt){c=gt},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(gt){if(s=gt,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",lt),s.addEventListener("selectstart",lt),s.addEventListener("selectend",lt),s.addEventListener("squeeze",lt),s.addEventListener("squeezestart",lt),s.addEventListener("squeezeend",lt),s.addEventListener("end",it),s.addEventListener("inputsourceschange",ft),M.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(_),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,pe=null,zt=null;M.depth&&(zt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ne=M.stencil?cs:ss,pe=M.stencil?Ws:Ii);let oe={colorFormat:e.RGBA8,depthFormat:zt,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(oe),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new ti(d.textureWidth,d.textureHeight,{format:Li,type:$n,depthTexture:new os(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ne={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,ne),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),w=new ti(u.framebufferWidth,u.framebufferHeight,{format:Li,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Se.setContext(s),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ft(gt){for(let Qt=0;Qt<gt.removed.length;Qt++){let ne=gt.removed[Qt],pe=I.indexOf(ne);pe>=0&&(I[pe]=null,D[pe].disconnect(ne))}for(let Qt=0;Qt<gt.added.length;Qt++){let ne=gt.added[Qt],pe=I.indexOf(ne);if(pe===-1){for(let oe=0;oe<D.length;oe++)if(oe>=I.length){I.push(ne),pe=oe;break}else if(I[oe]===null){I[oe]=ne,pe=oe;break}if(pe===-1)break}let zt=D[pe];zt&&zt.connect(ne)}}function mt(gt,Qt){Qt===null?gt.matrixWorld.copy(gt.matrix):gt.matrixWorld.multiplyMatrices(Qt.matrixWorld,gt.matrix),gt.matrixWorldInverse.copy(gt.matrixWorld).invert()}this.updateCamera=function(gt){if(s===null)return;let Qt=gt.near,ne=gt.far;m.texture!==null&&(m.depthNear>0&&(Qt=m.depthNear),m.depthFar>0&&(ne=m.depthFar)),Z.near=K.near=L.near=Qt,Z.far=K.far=L.far=ne,(ht!==Z.near||nt!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),ht=Z.near,nt=Z.far),Z.layers.mask=gt.layers.mask|6,L.layers.mask=Z.layers.mask&-5,K.layers.mask=Z.layers.mask&-3;let pe=gt.parent,zt=Z.cameras;mt(Z,pe);for(let oe=0;oe<zt.length;oe++)mt(zt[oe],pe);Z.projectionMatrix.copy(L.projectionMatrix),Z.projectionMatrixInverse.copy(L.projectionMatrixInverse),k===null&&gt.isPerspectiveCamera&&(k={camera:gt,fov:gt.fov,zoom:gt.zoom}),wt(gt,Z,pe)};function wt(gt,Qt,ne){ne===null?gt.matrix.copy(Qt.matrixWorld):(gt.matrix.copy(ne.matrixWorld),gt.matrix.invert(),gt.matrix.multiply(Qt.matrixWorld)),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.updateMatrixWorld(!0),gt.projectionMatrix.copy(Qt.projectionMatrix),gt.projectionMatrixInverse.copy(Qt.projectionMatrixInverse),gt.isPerspectiveCamera&&(gt.fov=Ea*2*Math.atan(1/gt.projectionMatrix.elements[5]),gt.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(gt){l=gt,d!==null&&(d.fixedFoveation=gt),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=gt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Z)},this.getCameraTexture=function(gt){return f[gt]};let Ht=null;function ee(gt,Qt){if(h=Qt.getViewerPose(c||o),g=Qt,h!==null){let ne=h.views;u!==null&&(t.setRenderTargetFramebuffer(w,u.framebuffer),t.setRenderTarget(w));let pe=!1;ne.length!==Z.cameras.length&&(Z.cameras.length=0,pe=!0);for(let xe=0;xe<ne.length;xe++){let fe=ne[xe],Ne=null;if(u!==null)Ne=u.getViewport(fe);else{let Ot=p.getViewSubImage(d,fe);Ne=Ot.viewport,xe===0&&(t.setRenderTargetTextures(w,Ot.colorTexture,Ot.depthStencilTexture),t.setRenderTarget(w))}let bt=st[xe];bt===void 0&&(bt=new Fn,bt.layers.enable(xe),bt.viewport=new vn,st[xe]=bt),bt.matrix.fromArray(fe.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(fe.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),xe===0&&(Z.matrix.copy(bt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),pe===!0&&Z.cameras.push(bt)}let zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){p=n.getBinding();let xe=p.getDepthInformation(ne[0]);xe&&xe.isValid&&xe.texture&&m.init(xe,s.renderState)}if(zt&&zt.includes("camera-access")&&b){t.state.unbindTexture(),p=n.getBinding();for(let xe=0;xe<ne.length;xe++){let fe=ne[xe].camera;if(fe){let Ne=f[fe];Ne||(Ne=new ro,f[fe]=Ne);let bt=p.getCameraImage(fe);Ne.sourceTexture=bt}}}}for(let ne=0;ne<D.length;ne++){let pe=I[ne],zt=D[ne];pe!==null&&zt!==void 0&&zt.update(pe,Qt,c||o)}Ht&&Ht(gt,Qt),Qt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Qt}),g=null}let Se=new rf;Se.setAnimationLoop(ee),this.setAnimationLoop=function(gt){Ht=gt},this.dispose=function(){}}},S_=new ln,mf=new He;mf.set(-1,0,0,0,1,0,0,0,1);function w_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ah(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,R,w){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),p(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&u(m,f,w)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),b(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,R):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Nn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Nn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=t.get(f),R=M.envMap,w=M.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(S_.makeRotationFromEuler(w)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(mf),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,R){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=R*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function u(m,f,M){m.ior.value=f.ior,f.diffuseRoughness>0&&(m.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=f.diffuseRoughnessMap,e(f.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Nn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function b(m,f){let M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function b_(i,t,e,n){let s={},r={};function o(M,R){let w=R.program;n.uniformBlockBinding(M,w,s[M.id])}function a(M,R){let w=s[M.id];w===void 0&&(g(M),w=l(M),s[M.id]=w,M.addEventListener("dispose",m));let D=R.program;n.updateUBOMapping(M,D);let I=t.render.frame;r[M.id]!==I&&(c(M),r[M.id]=I)}function l(M){let R=i.createBuffer(),w=M.__size,D=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,w,D),i.bindBuffer(i.UNIFORM_BUFFER,null),R}function c(M){let R=s[M.id],w=M.uniforms,D=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let I=0,_=w.length;I<_;I++){let C=w[I];if(Array.isArray(C))for(let k=0,L=C.length;k<L;k++)h(C[k],I,k,D);else h(C,I,0,D)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,R,w,D){if(d(M,R,w,D)===!0){let I=M.__offset,_=M.value;if(Array.isArray(_)){let C=0;for(let k=0;k<_.length;k++){let L=_[k],K=b(L,!0);p(L,M.__data,C),C+=K.storage/Float32Array.BYTES_PER_ELEMENT}}else p(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,I,M.__data)}}function p(M,R,w){typeof M=="number"||typeof M=="boolean"?R[w]=M:M.isMatrix3?(R[w]=M.elements[0],R[w+1]=M.elements[1],R[w+2]=M.elements[2],R[w+3]=0,R[w+4]=M.elements[3],R[w+5]=M.elements[4],R[w+6]=M.elements[5],R[w+7]=0,R[w+8]=M.elements[6],R[w+9]=M.elements[7],R[w+10]=M.elements[8],R[w+11]=0):ArrayBuffer.isView(M)?R.set(M.subarray(0,R.length-w),w):M.toArray(R,w)}function d(M,R,w,D){let I=M.value,_=R+"_"+w;if(Array.isArray(I)){D[_]===void 0&&(D[_]=[]);let C=D[_],k=!1;for(let L=0;L<I.length;L++)u(I[L],C,L)===!0&&(k=!0);return k}return u(I,D,_)}function u(M,R,w){if(R[w]===void 0)return typeof M=="number"||typeof M=="boolean"?R[w]=M:ArrayBuffer.isView(M)?R[w]=M.slice():R[w]=M.clone(),!0;{let D=R[w];if(typeof M=="number"||typeof M=="boolean"){if(D!==M)return R[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(D.equals(M)===!1)return D.copy(M),!0}}return!1}function g(M){let R=M.uniforms,w=0,D=16;for(let _=0,C=R.length;_<C;_++){let k=Array.isArray(R[_])?R[_]:[R[_]];for(let L=0,K=k.length;L<K;L++){let st=k[L],Z=Array.isArray(st.value)?st.value:[st.value],ht=Array.isArray(R[_])||Array.isArray(st.value),nt=w;for(let it=0,ft=Z.length;it<ft;it++){let mt=Z[it],wt=b(mt,ht),Ht=w%D,ee=Ht%wt.boundary,Se=Ht+ee;w+=ee,Se!==0&&D-Se<wt.storage&&(w+=D-Se),it===0&&(nt=w),w+=wt.storage}let lt=st.type==="int"?Int32Array:st.type==="uint"?Uint32Array:Float32Array;st.__data=new lt((w-nt)/Float32Array.BYTES_PER_ELEMENT),st.__offset=nt}}let I=w%D;return I>0&&(w+=D-I),M.__size=w,M.__cache={},this}function b(M,R){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=16,w.storage=48):M.isMatrix4?(w.boundary=16,w.storage=64):M.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",M),R===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}function m(M){let R=M.target;R.removeEventListener("dispose",m),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function f(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:f}}var A_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qi=null;function E_(){return qi===null&&(qi=new to(A_,16,16,bs,Fi),qi.name="DFG_LUT",qi.minFilter=Xn,qi.magFilter=Xn,qi.wrapS=ki,qi.wrapT=ki,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}var Yl=class{constructor(t={}){let{canvas:e=Md(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:u=$n}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let b=u,m=new Set([dl,ul,hl]),f=new Set([$n,Ii,Tr,Ws,al,ll]),M=new Uint32Array(4),R=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[],intensity:[]},D=null,I=null,_=[],C=[],k=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,K=!1,st=null,Z=null,ht=null,nt=null;this._outputColorSpace=Wn;let lt=0,it=0,ft=null,mt=-1,wt=null,Ht=new vn,ee=new vn,Se=null,gt=new Ae(0),Qt=0,ne=e.width,pe=e.height,zt=1,oe=null,ke=null,xe=new vn(0,0,ne,pe),fe=new vn(0,0,ne,pe),Ne=!1,bt=new xs,Ot=new Ia,Rt=!1,he=!1,Wt=new ln,Ce=new B,ue=new vn,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Mt(){return ft===null?zt:1}let J=n;function mn(E,Y){return e.getContext(E,Y)}let We,an,Bt,pn,Me,Ie,N,v,at,Ft,Et,Zt,Jt,ut,St,Xt,re,X,xt,rt,kt,Kt,te;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nl}`),e.addEventListener("webglcontextlost",Xe,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",ie,!1),J===null){let Y="webgl2";if(J=mn(Y,E),J===null)throw mn(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ee()}catch(E){throw e.removeEventListener("webglcontextlost",Xe,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),ze("WebGLRenderer: "+E.message),E}function Ee(){We=new zg(J),We.init(),kt=new y_(J,We),an=new Eg(J,We,t,kt),Bt=new x_(J,We),an.reversedDepthBuffer&&d&&Bt.buffers.depth.setReversed(!0),Z=J.createFramebuffer(),ht=J.createFramebuffer(),nt=J.createFramebuffer(),pn=new kg(J),Me=new i_,Ie=new __(J,We,Bt,Me,an,kt,pn),N=new Ug(L),v=new Vp(J),Kt=new bg(J,v),at=new Og(J,v,pn,Kt),Ft=new Vg(J,at,v,Kt,pn),X=new Gg(J,an,Ie),St=new Tg(Me),Et=new n_(L,N,We,an,Kt,St),Zt=new w_(L,Me),Jt=new r_,ut=new u_(We),re=new wg(L,N,Bt,Ft,g,l),Xt=new g_(L,Ft,an),te=new b_(J,pn,an,Bt),xt=new Ag(J,We,pn),rt=new Bg(J,We,pn),pn.programs=Et.programs,L.capabilities=an,L.extensions=We,L.properties=Me,L.renderLists=Jt,L.shadowMap=Xt,L.state=Bt,L.info=pn}b!==$n&&(k=new Wg(b,e.width,e.height,a,s,r));let Nt=new Hh(L,J);this.xr=Nt,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){let E=We.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=We.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return zt},this.setPixelRatio=function(E){E!==void 0&&(zt=E,this.setSize(ne,pe,!1))},this.getSize=function(E){return E.set(ne,pe)},this.setSize=function(E,Y,tt=!0){if(Nt.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=E,pe=Y,e.width=Math.floor(E*zt),e.height=Math.floor(Y*zt),tt===!0&&(e.style.width=E+"px",e.style.height=Y+"px"),k!==null&&k.setSize(e.width,e.height),this.setViewport(0,0,E,Y)},this.getDrawingBufferSize=function(E){return E.set(ne*zt,pe*zt).floor()},this.setDrawingBufferSize=function(E,Y,tt){ne=E,pe=Y,zt=tt,e.width=Math.floor(E*tt),e.height=Math.floor(Y*tt),this.setViewport(0,0,E,Y)},this.setEffects=function(E){if(b===$n){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let Y=0;Y<E.length;Y++)if(E[Y].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Ht)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,Y,tt,Q){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,Y,tt,Q),Bt.viewport(Ht.copy(xe).multiplyScalar(Mt()).round())},this.getScissor=function(E){return E.copy(fe)},this.setScissor=function(E,Y,tt,Q){E.isVector4?fe.set(E.x,E.y,E.z,E.w):fe.set(E,Y,tt,Q),Bt.scissor(ee.copy(fe).multiplyScalar(Mt()).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(E){Bt.setScissorTest(Ne=E)},this.setOpaqueSort=function(E){oe=E},this.setTransparentSort=function(E){ke=E},this.getClearColor=function(E){return E.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(E=!0,Y=!0,tt=!0){let Q=0;if(E){let ot=!1;if(ft!==null){let y=ft.texture.format;ot=m.has(y)}if(ot){let y=ft.texture.type,T=f.has(y),S=re.getClearColor(),x=re.getClearAlpha(),O=S.r,P=S.g,$=S.b;T?(M[0]=O,M[1]=P,M[2]=$,M[3]=x,J.clearBufferuiv(J.COLOR,0,M)):(R[0]=O,R[1]=P,R[2]=$,R[3]=x,J.clearBufferiv(J.COLOR,0,R))}else Q|=J.COLOR_BUFFER_BIT}Y&&(Q|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(Q|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&J.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),st=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Xe,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),re.dispose(),Jt.dispose(),ut.dispose(),Ie.dispose(),Me.dispose(),N.dispose(),Ft.dispose(),at.dispose(),Kt.dispose(),te.dispose(),Et.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",U),Nt.removeEventListener("sessionend",H),A.stop()};function Xe(E){E.preventDefault(),Zr("WebGLRenderer: Context Lost."),K=!0}function _e(){Zr("WebGLRenderer: Context Restored."),K=!1;let E=pn.autoReset,Y=Xt.enabled,tt=Xt.autoUpdate,Q=Xt.needsUpdate,ot=Xt.type;Ee(),pn.autoReset=E,Xt.enabled=Y,Xt.autoUpdate=tt,Xt.needsUpdate=Q,Xt.type=ot}function ie(E){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $e(E){let Y=E.target;Y.removeEventListener("dispose",$e),gn(Y)}function gn(E){ri(E),Me.remove(E)}function ri(E){let Y=Me.get(E).programs;Y!==void 0&&(Y.forEach(function(tt){Et.releaseProgram(tt)}),E.isShaderMaterial&&Et.releaseShaderCache(E))}this.renderBufferDirect=function(E,Y,tt,Q,ot,y){Y===null&&(Y=Ue);let T=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,S=Tt(E,Y,tt,Q,ot);Bt.setMaterial(Q,T);let x=tt.index,O=1;if(Q.wireframe===!0){if(x=at.getWireframeAttribute(tt),x===void 0)return;O=2}let P=tt.drawRange,$=tt.attributes.position,G=P.start*O,q=(P.start+P.count)*O;y!==null&&(G=Math.max(G,y.start*O),q=Math.min(q,(y.start+y.count)*O)),x!==null?(G=Math.max(G,0),q=Math.min(q,x.count)):$!=null&&(G=Math.max(G,0),q=Math.min(q,$.count));let j=q-G;if(j<0||j===1/0)return;Kt.setup(ot,Q,S,tt,x);let z,V=xt;if(x!==null&&(z=v.get(x),V=rt,V.setIndex(z)),ot.isMesh)Q.wireframe===!0?(Bt.setLineWidth(Q.wireframeLinewidth*Mt()),V.setMode(J.LINES)):V.setMode(J.TRIANGLES);else if(ot.isLine){let W=Q.linewidth;W===void 0&&(W=1),Bt.setLineWidth(W*Mt()),ot.isLineSegments?V.setMode(J.LINES):ot.isLineLoop?V.setMode(J.LINE_LOOP):V.setMode(J.LINE_STRIP)}else ot.isPoints?V.setMode(J.POINTS):ot.isSprite&&V.setMode(J.TRIANGLES);if(ot.isBatchedMesh)if(We.get("WEBGL_multi_draw"))V.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{let W=ot._multiDrawStarts,et=ot._multiDrawCounts,Ct=ot._multiDrawCount,dt=x?v.get(x).bytesPerElement:1,jt=Me.get(Q).currentProgram.getUniforms();for(let $t=0;$t<Ct;$t++)jt.setValue(J,"_gl_DrawID",$t),V.render(W[$t]/dt,et[$t])}else if(ot.isInstancedMesh)V.renderInstances(G,j,ot.count);else if(tt.isInstancedBufferGeometry){let W=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,et=Math.min(tt.instanceCount,W);V.renderInstances(G,j,et)}else V.render(G,j)};function Zs(E,Y,tt,Q){st!==null&&E.isNodeMaterial&&st.setObject(Q,E),Rt===!0&&St.setState(E,tt,!1),E.transparent===!0&&E.side===je&&E.forceSinglePass===!1?(E.side=Nn,E.needsUpdate=!0,It(E,Y,Q),E.side=ws,E.needsUpdate=!0,It(E,Y,Q),E.side=je):It(E,Y,Q)}this.compile=function(E,Y,tt=null){tt===null&&(tt=E),st!==null&&st.renderStart(E,Y,tt),I=ut.get(tt),I.init(Y),C.push(I),tt.traverseVisible(function(ot){ot.isLight&&ot.layers.test(Y.layers)&&(I.pushLight(ot),ot.castShadow&&I.pushShadow(ot))}),E!==tt&&E.traverseVisible(function(ot){ot.isLight&&ot.layers.test(Y.layers)&&(I.pushLight(ot),ot.castShadow&&I.pushShadow(ot))}),I.setupLights(),st!==null&&st.updateLights(I.state.lightsArray),he=this.localClippingEnabled,Rt=St.init(this.clippingPlanes,he),Rt===!0&&St.setGlobalState(this.clippingPlanes,Y),st!==null&&Xt.render(I.state.shadowsArray,tt,Y);let Q=new Set;return E.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;let y=ot.material;if(y)if(Array.isArray(y))for(let T=0;T<y.length;T++){let S=y[T];Zs(S,tt,Y,ot),Q.add(S)}else Zs(y,tt,Y,ot),Q.add(y)}),I=C.pop(),st!==null&&st.renderEnd(),Q},this.compileAsync=function(E,Y,tt=null){let Q=this.compile(E,Y,tt);return new Promise(ot=>{function y(){if(Q.forEach(function(T){let x=Me.get(T).currentProgram;(x===void 0||x.isReady())&&Q.delete(T)}),Q.size===0){ot(E);return}setTimeout(y,10)}We.get("KHR_parallel_shader_compile")!==null?y():setTimeout(y,10)})};let Es=null;function Uo(E){Es&&Es(E)}function U(){A.stop()}function H(){A.start()}let A=new rf;A.setAnimationLoop(Uo),typeof self<"u"&&A.setContext(self),this.setAnimationLoop=function(E){Es=E,Nt.setAnimationLoop(E),E===null?A.stop():A.start()},Nt.addEventListener("sessionstart",U),Nt.addEventListener("sessionend",H),this.render=function(E,Y){if(Y!==void 0&&Y.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;st!==null&&st.renderStart(E,Y);let tt=Nt.enabled===!0&&Nt.isPresenting===!0,Q=k!==null&&(ft===null||tt)&&k.begin(L,ft);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(Y),Y=Nt.getCamera()),E.isScene===!0&&E.onBeforeRender(L,E,Y,ft),I=ut.get(E,C.length),I.init(Y),I.state.textureUnits=Ie.getTextureUnits(),C.push(I),Wt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Y.isArrayCamera?Ot.setFromArrayCamera(Y):bt.setFromProjectionMatrix(Wt,li,Y.reversedDepth),he=this.localClippingEnabled,Rt=St.init(this.clippingPlanes,he),D=Jt.get(E,_.length),D.init(),_.push(D),this.info.render.frame++,Nt.enabled===!0&&Nt.isPresenting===!0){let T=L.xr.getDepthSensingMesh();T!==null&&F(T,Y,-1/0,L.sortObjects)}F(E,Y,0,L.sortObjects),D.finish(),st!==null&&st.updateLights(I.state.lightsArray),L.sortObjects===!0&&D.sort(oe,ke),Pe=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,Pe&&re.addToRenderList(D,E),this.info.autoReset===!0&&this.info.reset(),Rt===!0&&St.beginShadows();let ot=I.state.shadowsArray;if(Xt.render(ot,E,Y),Rt===!0&&St.endShadows(),(Q&&k.hasRenderPass())===!1){let T=D.opaque,S=D.transmissive;if(I.setupLights(),Y.isArrayCamera){let x=Y.cameras;if(S.length>0)for(let O=0,P=x.length;O<P;O++){let $=x[O];Pt(T,S,E,$)}Pe&&re.render(E);for(let O=0,P=x.length;O<P;O++){let $=x[O];pt(D,E,$,$.viewport)}}else S.length>0&&Pt(T,S,E,Y),Pe&&re.render(E),pt(D,E,Y)}ft!==null&&it===0&&(Ie.updateMultisampleRenderTarget(ft),Ie.updateRenderTargetMipmap(ft)),Q&&k.end(L),E.isScene===!0&&E.onAfterRender(L,E,Y),Kt.resetDefaultState(),mt=-1,wt=null,C.pop(),C.length>0?(I=C[C.length-1],Ie.setTextureUnits(I.state.textureUnits),Rt===!0&&St.setGlobalState(L.clippingPlanes,I.state.camera)):I=null,_.pop(),_.length>0?D=_[_.length-1]:D=null,st!==null&&st.renderEnd()};function F(E,Y,tt,Q){if(E.visible===!1)return;if(E.layers.test(Y.layers)){if(E.isGroup)tt=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(Y);else if(E.isLight)I.pushLight(E),E.castShadow&&I.pushShadow(E);else if(E.isSprite){let T=Y.isArrayCamera?Ot:bt;if(!E.frustumCulled||E.intersectsFrustum(T)){Q&&ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Wt);let S=Ft.update(E),x=E.material;x.visible&&D.push(E,S,x,tt,ue.z,null,Y)}}else if(E.isMesh||E.isLine||E.isPoints){let T=Y.isArrayCamera?Ot:bt;if(!E.frustumCulled||E.intersectsFrustum(T)){let S=Ft.update(E),x=E.material;if(Q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ue.copy(E.boundingSphere.center)):(S.boundingSphere===null&&S.computeBoundingSphere(),ue.copy(S.boundingSphere.center)),ue.applyMatrix4(E.matrixWorld).applyMatrix4(Wt)),Array.isArray(x)){let O=S.groups;for(let P=0,$=O.length;P<$;P++){let G=O[P],q=x[G.materialIndex];q&&q.visible&&D.push(E,S,q,tt,ue.z,G,Y)}}else x.visible&&D.push(E,S,x,tt,ue.z,null,Y)}}}let y=E.children;for(let T=0,S=y.length;T<S;T++)F(y[T],Y,tt,Q)}function pt(E,Y,tt,Q){let{opaque:ot,transmissive:y,transparent:T}=E;I.setupLightsView(tt),Rt===!0&&St.setGlobalState(L.clippingPlanes,tt),Q&&Bt.viewport(Ht.copy(Q)),ot.length>0&&yt(ot,Y,tt),y.length>0&&yt(y,Y,tt),T.length>0&&yt(T,Y,tt),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function Pt(E,Y,tt,Q){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[Q.id]===void 0){let G=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[Q.id]=new ti(1,1,{generateMipmaps:!0,type:G?Fi:$n,minFilter:ls,samples:Math.max(4,an.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:sn.workingColorSpace})}let y=I.state.transmissionRenderTarget[Q.id],T=Q.viewport||Ht;y.setSize(T.z*L.transmissionResolutionScale,T.w*L.transmissionResolutionScale);let S=L.getRenderTarget(),x=L.getActiveCubeFace(),O=L.getActiveMipmapLevel();L.setRenderTarget(y),L.getClearColor(gt),Qt=L.getClearAlpha(),Qt<1&&L.setClearColor(16777215,.5),L.clear(),Pe&&re.render(tt);let P=L.toneMapping;L.toneMapping=Xi;let $=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),I.setupLightsView(Q),Rt===!0&&St.setGlobalState(L.clippingPlanes,Q),yt(E,tt,Q),Ie.updateMultisampleRenderTarget(y),Ie.updateRenderTargetMipmap(y),We.has("WEBGL_multisampled_render_to_texture")===!1){let G=!1;for(let q=0,j=Y.length;q<j;q++){let z=Y[q],{object:V,geometry:W,material:et,group:Ct}=z;if(et.side===je&&V.layers.test(Q.layers)){let dt=et.side;et.side=Nn,et.needsUpdate=!0,Dt(V,tt,Q,W,et,Ct),et.side=dt,et.needsUpdate=!0,G=!0}}G===!0&&(Ie.updateMultisampleRenderTarget(y),Ie.updateRenderTargetMipmap(y))}L.setRenderTarget(S,x,O),L.setClearColor(gt,Qt),$!==void 0&&(Q.viewport=$),L.toneMapping=P}function yt(E,Y,tt){let Q=Y.isScene===!0?Y.overrideMaterial:null;for(let ot=0,y=E.length;ot<y;ot++){let T=E[ot],{object:S,geometry:x,group:O}=T,P=T.material;P.allowOverride===!0&&Q!==null&&(P=Q),S.layers.test(tt.layers)&&Dt(S,Y,tt,x,P,O)}}function Dt(E,Y,tt,Q,ot,y){st!==null&&ot.isNodeMaterial&&st.setObject(E,ot),E.onBeforeRender(L,Y,tt,Q,ot,y),E.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),ot.onBeforeRender(L,Y,tt,Q,E,y),ot.transparent===!0&&ot.side===je&&ot.forceSinglePass===!1?(ot.side=Nn,ot.needsUpdate=!0,L.renderBufferDirect(tt,Y,Q,ot,E,y),ot.side=ws,ot.needsUpdate=!0,L.renderBufferDirect(tt,Y,Q,ot,E,y),ot.side=je):L.renderBufferDirect(tt,Y,Q,ot,E,y),E.onAfterRender(L,Y,tt,Q,ot,y)}function _t(E){let Y=0;for(let tt of E)tt.texture!==null&&Y++;return Y}function It(E,Y,tt){Y.isScene!==!0&&(Y=Ue);let Q=Me.get(E),ot=I.state.lights,y=I.state.shadowsArray,T=ot.state.version,S=Et.getParameters(E,ot.state,y,Y,tt,I.state.lightProbeGridArray),x=Et.getProgramCacheKey(S),O=Q.programs;Q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?Y.environment:null,Q.fog=Y.fog;let P=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Q.envMap=N.get(E.envMap||Q.environment,P),Q.envMapRotation=Q.environment!==null&&E.envMap===null?Y.environmentRotation:E.envMapRotation,O===void 0&&(E.addEventListener("dispose",$e),O=new Map,Q.programs=O,Q.programVariants=new Map);let $=O.get(x);if($!==void 0){if(Q.currentProgram===$&&Q.lightsStateVersion===T)return Vt(E,S),$}else S.uniforms=Et.getUniforms(E),st!==null&&E.isNodeMaterial&&st.build(E,tt,S),E.onBeforeCompile(S,L),$=Et.acquireProgram(S,x),O.set(x,$),Q.uniforms=S.uniforms;let G=Q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(G.clippingPlanes=St.uniform),Vt(E,S),Q.needsLights=ye(E),Q.lightsStateVersion=T,Q.needsLights&&(G.ambientLightColor.value=ot.state.ambient,G.sunLights.value=ot.state.sun,G.sunLightShadows.value=ot.state.sunShadow,G.directionalLights.value=ot.state.directional,G.directionalLightShadows.value=ot.state.directionalShadow,G.spotLights.value=ot.state.spot,G.spotLightShadows.value=ot.state.spotShadow,G.rectAreaLights.value=ot.state.rectArea,G.ltc_1.value=ot.state.rectAreaLTC1,G.ltc_2.value=ot.state.rectAreaLTC2,G.pointLights.value=ot.state.point,G.pointLightShadows.value=ot.state.pointShadow,G.hemisphereLights.value=ot.state.hemi,G.sunShadowMatrix.value=ot.state.sunShadowMatrix,G.sunShadowCascade.value=ot.state.sunShadowCascade,G.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,G.spotLightMatrix.value=ot.state.spotLightMatrix,G.spotLightMap.value=ot.state.spotLightMap,G.pointShadowMatrix.value=ot.state.pointShadowMatrix),Q.numLightProbeGrids=_t(I.state.lightProbeGridArray),Q.currentProgram=$,Q.uniformsList=null,$}function qt(E,Y,tt,Q,ot){let y=Me.get(E),T=y.currentProgram.id+","+Q+","+ot,S=y.programVariants.get(T);return S===void 0?(S=It(E,Y,tt),y.programVariants.set(T,S)):(y.currentProgram=S,y.uniformsList=null,y.outputColorSpace=Q,y.toneMapping=ot),S}function Lt(E){if(E.uniformsList===null){let Y=E.currentProgram.getUniforms();E.uniformsList=Cr.seqWithValue(Y.seq,E.uniforms)}return E.uniformsList}function Vt(E,Y){let tt=Me.get(E);tt.outputColorSpace=Y.outputColorSpace,tt.batching=Y.batching,tt.batchingColor=Y.batchingColor,tt.instancing=Y.instancing,tt.instancingColor=Y.instancingColor,tt.instancingMorph=Y.instancingMorph,tt.skinning=Y.skinning,tt.morphTargets=Y.morphTargets,tt.morphNormals=Y.morphNormals,tt.morphColors=Y.morphColors,tt.morphTargetsCount=Y.morphTargetsCount,tt.numClippingPlanes=Y.numClippingPlanes,tt.numIntersection=Y.numClipIntersection,tt.vertexAlphas=Y.vertexAlphas,tt.vertexTangents=Y.vertexTangents,tt.toneMapping=Y.toneMapping}function Tt(E,Y,tt,Q,ot){Y.isScene!==!0&&(Y=Ue),Ie.resetTextureUnits();let y=Y.fog,T=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?Y.environment:null,S=ft===null?L.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:sn.workingColorSpace,x=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,O=N.get(Q.envMap||T,x),P=Q.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,$=!!tt.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),G=!!tt.morphAttributes.position,q=!!tt.morphAttributes.normal,j=!!tt.morphAttributes.color,z=Xi;Q.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(z=L.toneMapping);let V=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,W=V!==void 0?V.length:0,et=Me.get(Q),Ct=I.state.lights;if(Rt===!0&&(he===!0||E!==wt)){let ce=E===wt&&Q.id===mt;St.setState(Q,E,ce)}let dt=!1,jt=!1;Q.version===et.__version?et.needsLights&&et.lightsStateVersion!==Ct.state.version||ot.isBatchedMesh&&et.batching===!1||!ot.isBatchedMesh&&et.batching===!0||ot.isBatchedMesh&&et.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&et.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&et.instancing===!1||!ot.isInstancedMesh&&et.instancing===!0||ot.isSkinnedMesh&&et.skinning===!1||!ot.isSkinnedMesh&&et.skinning===!0||ot.isInstancedMesh&&et.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&et.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&et.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&et.instancingMorph===!1&&ot.morphTexture!==null||et.envMap!==O||Q.fog===!0&&et.fog!==y||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==St.numPlanes||et.numIntersection!==St.numIntersection)||et.vertexAlphas!==P||et.vertexTangents!==$||et.morphTargets!==G||et.morphNormals!==q||et.morphColors!==j||et.morphTargetsCount!==W||et.numLightProbeGrids!==_t(I.state.lightProbeGridArray)?dt=!0:(et.outputColorSpace!==S||et.toneMapping!==z)&&(jt=!0):(dt=!0,et.__version=Q.version);let $t=et.currentProgram;(dt===!0||jt===!0)&&($t=jt===!0?qt(Q,Y,ot,S,z):It(Q,Y,ot),st&&Q.isNodeMaterial&&st.onUpdateProgram(Q,$t,et));let Te=!1,le=!1,ve=!1,de=$t.getUniforms(),se=et.uniforms;if(Bt.useProgram($t.program)&&(Te=!0,le=!0,ve=!0),Q.id!==mt&&(mt=Q.id,le=!0),Te||wt!==E){Bt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),de.setValue(J,"projectionMatrix",E.projectionMatrix),de.setValue(J,"viewMatrix",E.matrixWorldInverse);let me=de.map.cameraPosition;me!==void 0&&me.setValue(J,Ce.setFromMatrixPosition(E.matrixWorld)),an.logarithmicDepthBuffer&&de.setValue(J,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&de.setValue(J,"isOrthographic",E.isOrthographicCamera===!0),wt!==E&&(wt=E,le=!0,ve=!0)}if(et.needsLights&&(Ct.state.sunShadowMap.length>0&&de.setValue(J,"sunShadowMap",Ct.state.sunShadowMap,Ie),Ct.state.directionalShadowMap.length>0&&de.setValue(J,"directionalShadowMap",Ct.state.directionalShadowMap,Ie),Ct.state.spotShadowMap.length>0&&de.setValue(J,"spotShadowMap",Ct.state.spotShadowMap,Ie),Ct.state.pointShadowMap.length>0&&de.setValue(J,"pointShadowMap",Ct.state.pointShadowMap,Ie)),ot.isSkinnedMesh){de.setOptional(J,ot,"bindMatrix"),de.setOptional(J,ot,"bindMatrixInverse");let ce=ot.skeleton;ce&&(ce.boneTexture===null&&ce.computeBoneTexture(),de.setValue(J,"boneTexture",ce.boneTexture,Ie))}ot.isBatchedMesh&&(de.setOptional(J,ot,"batchingTexture"),de.setValue(J,"batchingTexture",ot._matricesTexture,Ie),de.setOptional(J,ot,"batchingIdTexture"),de.setValue(J,"batchingIdTexture",ot._indirectTexture,Ie),de.setOptional(J,ot,"batchingColorTexture"),ot._colorsTexture!==null&&de.setValue(J,"batchingColorTexture",ot._colorsTexture,Ie));let Gt=tt.morphAttributes;if((Gt.position!==void 0||Gt.normal!==void 0||Gt.color!==void 0)&&X.update(ot,tt,$t),(le||et.receiveShadow!==ot.receiveShadow)&&(et.receiveShadow=ot.receiveShadow,de.setValue(J,"receiveShadow",ot.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&Y.environment!==null&&(se.envMapIntensity.value=Y.environmentIntensity),se.dfgLUT!==void 0&&(se.dfgLUT.value=E_()),le){if(de.setValue(J,"toneMappingExposure",L.toneMappingExposure),et.needsLights&&we(se,ve),y&&Q.fog===!0&&Zt.refreshFogUniforms(se,y),Zt.refreshMaterialUniforms(se,Q,zt,pe,I.state.transmissionRenderTarget[E.id]),et.needsLights&&et.numLightProbeGrids>0){let ce=w,me=0;for(let on of I.state.lightProbeGridArray)on.texture!==null&&(ce.textures[me]=on.texture,ce.min[me]=on.boundingBox.min,ce.max[me]=on.boundingBox.max,ce.resolution[me]=on.resolution,ce.intensity[me]=on.intensity,me++);for(let on in ce)ce[on].length=me;se.probesSH.value=ce.textures,se.probesMin.value=ce.min,se.probesMax.value=ce.max,se.probesResolution.value=ce.resolution,se.probesIntensity.value=ce.intensity}Cr.upload(J,Lt(et),se,Ie)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Cr.upload(J,Lt(et),se,Ie),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&de.setValue(J,"center",ot.center),de.setValue(J,"modelViewMatrix",ot.modelViewMatrix),de.setValue(J,"normalMatrix",ot.normalMatrix),de.setValue(J,"modelMatrix",ot.matrixWorld),Q.uniformsGroups!==void 0){let ce=Q.uniformsGroups;for(let me=0,on=ce.length;me<on;me++){let xn=ce[me];te.update(xn,$t),te.bind(xn,$t)}}return $t}function we(E,Y){E.ambientLightColor.needsUpdate=Y,E.sunLights.needsUpdate=Y,E.sunLightShadows.needsUpdate=Y,E.directionalLights.needsUpdate=Y,E.directionalLightShadows.needsUpdate=Y,E.pointLights.needsUpdate=Y,E.pointLightShadows.needsUpdate=Y,E.spotLights.needsUpdate=Y,E.spotLightShadows.needsUpdate=Y,E.rectAreaLights.needsUpdate=Y,E.hemisphereLights.needsUpdate=Y}function ye(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return lt},this.getActiveMipmapLevel=function(){return it},this.getRenderTarget=function(){return ft},this.setRenderTargetTextures=function(E,Y,tt){let Q=Me.get(E);Q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Me.get(E.texture).__webglTexture=Y,Me.get(E.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:tt,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,Y){let tt=Me.get(E);tt.__webglFramebuffer=Y,tt.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(E,Y=0,tt=0){ft=E,lt=Y,it=tt;let Q=null,ot=!1,y=!1;if(E){let S=Me.get(E);if(S.__useDefaultFramebuffer!==void 0){Bt.bindFramebuffer(J.FRAMEBUFFER,S.__webglFramebuffer),Ht.copy(E.viewport),ee.copy(E.scissor),Se=E.scissorTest,Bt.viewport(Ht),Bt.scissor(ee),Bt.setScissorTest(Se),mt=-1;return}else if(S.__webglFramebuffer===void 0)Ie.setupRenderTarget(E);else if(S.__hasExternalTextures)Ie.rebindTextures(E,Me.get(E.texture).__webglTexture,Me.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let P=E.depthTexture;if(S.__boundDepthTexture!==P){if(P!==null&&Me.has(P)&&(E.width!==P.image.width||E.height!==P.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(E)}}let x=E.texture;(x.isData3DTexture||x.isDataArrayTexture||x.isCompressedArrayTexture)&&(y=!0);let O=Me.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(O[Y])?Q=O[Y][tt]:Q=O[Y],ot=!0):E.samples>0&&Ie.useMultisampledRTT(E)===!1?Q=Me.get(E).__webglMultisampledFramebuffer:Array.isArray(O)?Q=O[tt]:Q=O,Ht.copy(E.viewport),ee.copy(E.scissor),Se=E.scissorTest}else Ht.copy(xe).multiplyScalar(zt).floor(),ee.copy(fe).multiplyScalar(zt).floor(),Se=Ne;if(tt!==0&&(Q=Z),Bt.bindFramebuffer(J.FRAMEBUFFER,Q)&&Bt.drawBuffers(E,Q),Bt.viewport(Ht),Bt.scissor(ee),Bt.setScissorTest(Se),ot){let S=Me.get(E.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Y,S.__webglTexture,tt)}else if(y){let S=Y;for(let x=0;x<E.textures.length;x++){let O=Me.get(E.textures[x]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+x,O.__webglTexture,tt,S)}}else if(E!==null&&tt!==0){let S=Me.get(E.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,S.__webglTexture,tt)}mt=-1};function Je(E){let Y=Me.get(E);return(Y.__readFormat!==E.format||Y.__readType!==E.type)&&(Y.__readFormat=E.format,Y.__readType=E.type,Y.__formatReadable=an.textureFormatReadable(E.format),Y.__typeReadable=an.textureTypeReadable(E.type)),Y}this.readRenderTargetPixels=function(E,Y,tt,Q,ot,y,T,S=0){if(!(E&&E.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let x=Me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&T!==void 0&&(x=x[T]),Array.isArray(x)&&(x=x[0]),x){let O=Bt.getBoundFramebuffer(J.READ_FRAMEBUFFER);Bt.bindFramebuffer(J.READ_FRAMEBUFFER,x);try{let P=E.textures[S],$=P.format,G=P.type;E.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+S);let q=Je(P);if(q.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(q.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=E.width-Q&&tt>=0&&tt<=E.height-ot&&J.readPixels(Y,tt,Q,ot,kt.convert($),kt.convert(G),y)}finally{Bt.bindFramebuffer(J.READ_FRAMEBUFFER,O)}}},this.readRenderTargetPixelsAsync=async function(E,Y,tt,Q,ot,y,T,S=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let x=Me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&T!==void 0&&(x=x[T]),Array.isArray(x)&&(x=x[0]),x)if(Y>=0&&Y<=E.width-Q&&tt>=0&&tt<=E.height-ot){let O=Bt.getBoundFramebuffer(J.READ_FRAMEBUFFER);Bt.bindFramebuffer(J.READ_FRAMEBUFFER,x);let P=E.textures[S],$=P.format,G=P.type;E.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+S);let q=Je(P);if(q.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(q.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let j=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,j),J.bufferData(J.PIXEL_PACK_BUFFER,y.byteLength,J.STREAM_READ),J.readPixels(Y,tt,Q,ot,kt.convert($),kt.convert(G),0),J.bindBuffer(J.PIXEL_PACK_BUFFER,null),Bt.bindFramebuffer(J.READ_FRAMEBUFFER,O);let z=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await wd(J,z,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,j),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,y),J.bindBuffer(J.PIXEL_PACK_BUFFER,null),J.deleteBuffer(j),J.deleteSync(z),y}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,Y=null,tt=0){let Q=Math.pow(2,-tt),ot=Math.floor(E.image.width*Q),y=Math.floor(E.image.height*Q),T=Y!==null?Y.x:0,S=Y!==null?Y.y:0;Ie.setTexture2D(E,0),Bt.activeTexture(J.TEXTURE0),J.copyTexSubImage2D(J.TEXTURE_2D,tt,0,0,T,S,ot,y),Bt.unbindTexture()},this.copyTextureToTexture=function(E,Y,tt=null,Q=null,ot=0,y=0){let T,S,x,O,P,$,G,q,j,z=E.isCompressedTexture?E.mipmaps[y]:E.image;if(tt!==null)T=tt.max.x-tt.min.x,S=tt.max.y-tt.min.y,x=tt.isBox3?tt.max.z-tt.min.z:1,O=tt.min.x,P=tt.min.y,$=tt.isBox3?tt.min.z:0;else{let de=Math.pow(2,-ot);T=Math.floor(E.width*de),S=Math.floor(E.height*de),E.isDataArrayTexture?x=z.depth:E.isData3DTexture?x=Math.floor(z.depth*de):x=1,O=0,P=0,$=0}Q!==null?(G=Q.x,q=Q.y,j=Q.z):(G=0,q=0,j=0);let V=kt.convert(Y.format),W=kt.convert(Y.type),et;Y.isData3DTexture?(Ie.setTexture3D(Y,0),et=J.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(Ie.setTexture2DArray(Y,0),et=J.TEXTURE_2D_ARRAY):(Ie.setTexture2D(Y,0),et=J.TEXTURE_2D),Bt.activeTexture(J.TEXTURE0),Bt.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,Y.flipY),Bt.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),Bt.pixelStorei(J.UNPACK_ALIGNMENT,Y.unpackAlignment);let Ct=Bt.getParameter(J.UNPACK_ROW_LENGTH),dt=Bt.getParameter(J.UNPACK_IMAGE_HEIGHT),jt=Bt.getParameter(J.UNPACK_SKIP_PIXELS),$t=Bt.getParameter(J.UNPACK_SKIP_ROWS),Te=Bt.getParameter(J.UNPACK_SKIP_IMAGES);Bt.pixelStorei(J.UNPACK_ROW_LENGTH,z.width),Bt.pixelStorei(J.UNPACK_IMAGE_HEIGHT,z.height),Bt.pixelStorei(J.UNPACK_SKIP_PIXELS,O),Bt.pixelStorei(J.UNPACK_SKIP_ROWS,P),Bt.pixelStorei(J.UNPACK_SKIP_IMAGES,$);let le=E.isDataArrayTexture||E.isData3DTexture,ve=Y.isDataArrayTexture||Y.isData3DTexture;if(E.isDepthTexture){let de=Me.get(E),se=Me.get(Y),Gt=Me.get(de.__renderTarget),ce=Me.get(se.__renderTarget);Bt.bindFramebuffer(J.READ_FRAMEBUFFER,Gt.__webglFramebuffer),Bt.bindFramebuffer(J.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let me=0;me<x;me++)le&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Me.get(E).__webglTexture,ot,$+me),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Me.get(Y).__webglTexture,y,j+me)),J.blitFramebuffer(O,P,O+T,P+S,G,q,G+T,q+S,J.DEPTH_BUFFER_BIT,J.NEAREST);Bt.bindFramebuffer(J.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(ot!==0||E.isRenderTargetTexture||Me.has(E)){let de=Me.get(E),se=Me.get(Y);Bt.bindFramebuffer(J.READ_FRAMEBUFFER,ht),Bt.bindFramebuffer(J.DRAW_FRAMEBUFFER,nt);for(let Gt=0;Gt<x;Gt++)le?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,de.__webglTexture,ot,$+Gt):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,de.__webglTexture,ot),ve?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,se.__webglTexture,y,j+Gt):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,se.__webglTexture,y),ot!==0?J.blitFramebuffer(O,P,O+T,P+S,G,q,G+T,q+S,J.COLOR_BUFFER_BIT,J.NEAREST):ve?J.copyTexSubImage3D(et,y,G,q,j+Gt,O,P,T,S):J.copyTexSubImage2D(et,y,G,q,O,P,T,S);Bt.bindFramebuffer(J.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else ve?E.isDataTexture||E.isData3DTexture?J.texSubImage3D(et,y,G,q,j,T,S,x,V,W,z.data):Y.isCompressedArrayTexture?J.compressedTexSubImage3D(et,y,G,q,j,z.width,z.height,x,V,z.data):J.texSubImage3D(et,y,G,q,j,T,S,x,V,W,z):E.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,y,G,q,T,S,V,W,z.data):E.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,y,G,q,z.width,z.height,V,z.data):J.texSubImage2D(J.TEXTURE_2D,y,G,q,T,S,V,W,z);Bt.pixelStorei(J.UNPACK_ROW_LENGTH,Ct),Bt.pixelStorei(J.UNPACK_IMAGE_HEIGHT,dt),Bt.pixelStorei(J.UNPACK_SKIP_PIXELS,jt),Bt.pixelStorei(J.UNPACK_SKIP_ROWS,$t),Bt.pixelStorei(J.UNPACK_SKIP_IMAGES,Te),y===0&&Y.generateMipmaps===!0&&Y.mipmapsAutoUpdate===!0&&J.generateMipmap(et),Bt.unbindTexture()},this.initRenderTarget=function(E){Me.get(E).__webglFramebuffer===void 0&&Ie.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ie.setTextureCube(E,0):E.isData3DTexture?Ie.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ie.setTexture2DArray(E,0):Ie.setTexture2D(E,0),Bt.unbindTexture()},this.resetState=function(){lt=0,it=0,ft=null,Bt.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=sn._getDrawingBufferColorSpace(t),e.unpackColorSpace=sn._getUnpackColorSpace()}};var Re=Math.PI*2,Ze=(i,t,e)=>i<t?t:i>e?e:i,En=(i,t,e)=>i+(t-i)*e,cn=(i,t,e)=>{let n=Ze((e-i)/(t-i),0,1);return n*n*(3-2*n)},Qe=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-e*n));function On(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Sn=(i,t)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)};function Pn(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=Sn(e,n),c=Sn(e+1,n),h=Sn(e,n+1),p=Sn(e+1,n+1);return l+(c-l)*o+(h-l)*a+(l-c-h+p)*o*a}function Zi(i,t){let e=0,n=.5,s=1;for(let r=0;r<4;r++)e+=n*Pn(i*s,t*s),s*=2.03,n*=.5;return e/.9375}var $l=new ln,Kl=new ci,gf=new hi,T_=new B,xf=new B,Be=new Ae;function Ut(i,t){i.index&&(i=i.toNonIndexed()),i.attributes.uv&&i.deleteAttribute("uv"),i.attributes.uv1&&i.deleteAttribute("uv1");let e=i.attributes.position,n=e.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)typeof t=="function"?t(Be,e.getX(r),e.getY(r),e.getZ(r),r):Be.set(t),s[r*3]=Be.r,s[r*3+1]=Be.g,s[r*3+2]=Be.b;return i.setAttribute("color",new Ge(s,3)),i}function Yt(i,t=0,e=0,n=0,s=0,r=0,o=0,a=1,l=a,c=a){return gf.set(s,r,o),Kl.setFromEuler(gf),$l.compose(T_.set(t,e,n),Kl,xf.set(a,l,c)),i.applyMatrix4($l),i}function Wh(i,t,e){let n=new B().subVectors(e,t),s=n.length();return Kl.setFromUnitVectors(new B(0,1,0),n.normalize()),$l.compose(new B().addVectors(t,e).multiplyScalar(.5),Kl,xf.set(1,1,1)),i.applyMatrix4($l),s}function wn(i){let t=0;for(let a of i)t+=a.attributes.position.count;let e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*3),r=0;for(let a of i)a.attributes.normal||a.computeVertexNormals(),e.set(a.attributes.position.array,r*3),n.set(a.attributes.normal.array,r*3),s.set(a.attributes.color.array,r*3),r+=a.attributes.position.count,a.dispose();let o=new qe;return o.setAttribute("position",new Ge(e,3)),o.setAttribute("normal",new Ge(n,3)),o.setAttribute("color",new Ge(s,3)),o.computeBoundingSphere(),o}var rn=(i,t,e,n)=>i.copy(yi.set(t)).lerp(No.set(e),Ze(n,0,1)),yi=new Ae,No=new Ae;function vi(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new io(s);return r.colorSpace=Wn,r.anisotropy=4,n&&(r.wrapS=r.wrapT=mr,r.repeat.set(n[0],n[1])),r}var Di=(i,t)=>{let e=(t-i)%Re;return e>Math.PI&&(e-=Re),e<-Math.PI&&(e+=Re),e},Tn=(i,t,e,n)=>i+Di(i,t)*(1-Math.exp(-e*n)),Le=(i,t={})=>new Dn({color:i,shininess:30,specular:"#2A2A2A",...t}),qs=i=>i.traverse(t=>{t.isMesh&&(t.castShadow=!0)});function Ql(i="#2F78DA",t="#86C4F7",e="#F8E6C8",n=new B(.62,.3,-.73)){let s=new vt(new Oe(600,32,16),new xi({side:Nn,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ae(i)},mid:{value:new Ae(t)},hor:{value:new Ae(e)},sunDir:{value:n.clone().normalize()}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top, mid, hor, sunDir; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float y = d.y;
        vec3 c = mix(hor, mid, smoothstep(-0.03, 0.2, y)); c = mix(c, top, smoothstep(0.2, 0.8, y));
        float s = max(dot(d, sunDir), 0.0);
        c += vec3(1.0, 0.86, 0.6) * (pow(s, 10.0) * 0.35 + pow(s, 90.0) * 0.6);
        c = mix(c, vec3(1.0, 0.97, 0.86), smoothstep(0.9982, 0.9992, s));
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));return s.renderOrder=-10,s.frustumCulled=!1,s}function jl(i){let t=new Yl({canvas:i,antialias:!0,powerPreference:"high-performance"});return t.toneMapping=So,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=ks,t}function _f(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}var tc=()=>vi(64,64,i=>{let t=i.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,64,64)});function ec(){let i=vi(256,256,(t,e,n)=>{let s=t.createImageData(e,n),r=(o,a)=>Pn(o/18,a/9)*.6+Pn(o/7,a/4)*.4;for(let o=0;o<n;o++)for(let a=0;a<e;a++){let l=r(a+1,o)-r(a-1,o),c=r(a,o+1)-r(a,o-1),h=(o*e+a)*4,p=-l*3,d=-c*3,u=Math.hypot(p,d,1);s.data[h]=(p/u*.5+.5)*255,s.data[h+1]=(d/u*.5+.5)*255,s.data[h+2]=(1/u*.5+.5)*255,s.data[h+3]=255}t.putImageData(s,0,0)},[1,1]);return i.colorSpace="",i}function Mi(i,t,e,n){let s=i.clone();return s.onBeforeCompile=r=>{r.uniforms.uTime=n.time,r.uniforms.uWind=n.wind||{value:0},r.vertexShader=`uniform float uTime; uniform float uWind;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float hh = max(0.0, transformed.y - ${e.toFixed(2)});
      float ph = 0.0;
      #ifdef USE_INSTANCING
        ph = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.23;
      #endif
      float wk = 1.0 + uWind * 6.0;
      transformed.x += ((sin(uTime * (1.25 + uWind * 3.0) + ph) + 0.35 * sin(uTime * 2.7 + ph * 1.7)) * ${t.toFixed(4)} * wk + uWind * ${(t*8).toFixed(4)}) * hh * hh;
      transformed.z += cos(uTime * (1.05 + uWind * 2.5) + ph) * ${(t*.5).toFixed(4)} * wk * hh * hh;`)},s.customProgramCacheKey=()=>"sway"+t+"_"+e+(i.flatShading?"f":"")+i.side,s}function nc(i,t,e){let n=[],s=4.6+i()*1.6,r=new Jn([new B(0,-.2,0),new B(t*.2,s*.35,.05),new B(t*.6,s*.7,.1),new B(t,s,.12)]),o=13;for(let c=0;c<o;c++){let h=r.getPoint(c/o),p=r.getPoint((c+1)/o),d=En(.25,.14,c/o),u=Ut(new ge(d*1.13,d*.9,1,9,1,!0),(b,m,f)=>rn(b,c%2?"#7E5E3C":"#8D6C46","#A9875C",f+.5)),g=h.distanceTo(p);Yt(u,0,0,0,0,0,0,1,g*1.04,1),Wh(u,h,p),n.push(u)}let a=r.getPoint(1),l=new B(0,1,0);n.push(Yt(Ut(new Un(.28,1),"#6B5A2E"),a.x,a.y,a.z));for(let c=0;c<e;c++){let h=c/e*Re+i()*.35,p=new B(Math.cos(h),0,Math.sin(h)),d=2.6+i()*.9,u=.7+i()*.6,g=new Jn([a.clone(),a.clone().addScaledVector(p,d*.3).addScaledVector(l,.55),a.clone().addScaledVector(p,d*.65).addScaledVector(l,.35-u*.2),a.clone().addScaledVector(p,d).addScaledVector(l,-u)]),b=14,m=[],f=[],M=[];for(let D=0;D<=b;D++){let I=D/b,_=g.getPoint(I),C=g.getTangent(I),k=new B().crossVectors(C,l).normalize(),L=Math.pow(Math.sin(Math.PI*Math.min(1,I*1.15)),.7)*.5*(D%2?1:.72);M.push([_,_.clone().addScaledVector(k,L).addScaledVector(l,-L*.42),_.clone().addScaledVector(k,-L).addScaledVector(l,-L*.42),I])}let R=(D,I,_)=>{m.push(D.x,D.y,D.z),rn(Be,"#2E7A30","#6CC24A",I*.9+_*.25),f.push(Be.r,Be.g,Be.b)};for(let D=0;D<b;D++){let[I,_,C,k]=M[D],[L,K,st,Z]=M[D+1];R(I,k,0),R(_,k,1),R(L,Z,0),R(_,k,1),R(K,Z,1),R(L,Z,0),R(I,k,0),R(L,Z,0),R(C,k,1),R(C,k,1),R(L,Z,0),R(st,Z,1)}let w=new qe;w.setAttribute("position",new Ge(new Float32Array(m),3)),w.setAttribute("color",new Ge(new Float32Array(f),3)),w.computeVertexNormals(),n.push(w)}for(let c=0;c<2;c++){let h=i()*Re;for(let p=0;p<7;p++)n.push(Yt(Ut(new Un(.085,0),p%2?"#B85C1C":"#D07A26"),a.x+Math.cos(h)*.32+(i()-.5)*.16,a.y-.32-i()*.3,a.z+Math.sin(h)*.32+(i()-.5)*.16))}return wn(n)}function ic(i,t,e){let n=[Ut(Yt(new ge(.12,.2,1.7,7),0,.85,0),"#7A5230")];n.push(Ut(Yt(new ge(.05,.08,.8,5),.25,1.55,0,0,0,-.7),"#7A5230"));for(let s=0;s<7;s++){let r=.62+i()*.45,o=(i()-.5)*1.3,a=2.15+i()*.9,l=(i()-.5)*1.1,c=i();n.push(Yt(Ut(new Un(r,1),(h,p,d,u)=>rn(h,e[0],e[1],.25+d/r*.45+c*.3+(Sn(p*9,u*9)-.5)*.2)),o,a,l))}if(t)for(let s=0;s<9;s++){let r=i()*Re,o=i()*1.3;n.push(Yt(Ut(new Un(.08,1),t),Math.cos(r)*.95,2.1+Math.sin(o)*.9,Math.sin(r)*.85+.2))}return wn(n)}var sc=()=>wn([0,1,2,3].map(i=>Yt(Ut(new Un(.42-i*.05,1),(t,e,n)=>rn(t,"#2F8A3C","#86D05C",.4+n*.9+i*.1)),(i-1.5)*.32,.3,i%2*.2))),rc=()=>Ut(new mi(.4,0),(i,t,e,n)=>rn(i,"#8C877B","#C9C4B6",.4+e*1.2+Sn(t*7,n*7)*.3)),yf=()=>wn([...Array(6)].map((i,t)=>{let e=t*1.1,n=.8+t%3*.22,s=Ut(new An(.025,n,3),(r,o,a)=>rn(r,"#3C7F35","#8CC05A",a/n+.5));return Yt(s,Math.cos(e)*.12,n/2,Math.sin(e)*.12,Math.sin(e)*.15,0,Math.cos(e)*.15),t%2?wn([s,Yt(Ut(new ge(.035,.035,.16,6),"#6B4423"),Math.cos(e)*.12+Math.cos(e)*.15*n,n-.05,Math.sin(e)*.12)]):s})),oc=()=>(()=>{let i=[],t=[];for(let n=0;n<5;n++){let s=n/5*Re+.3,r=.22+n%3*.07,o=.035,a=Math.cos(s)*.05,l=Math.sin(s)*.05,c=a+Math.cos(s)*.1,h=l+Math.sin(s)*.1,p=-Math.sin(s)*o,d=Math.cos(s)*o;i.push(a-p,0,l-d,a+p,0,l+d,c,r,h);for(let u of[0,0,1])rn(Be,"#5AA544","#B0E47A",u),t.push(Be.r,Be.g,Be.b)}let e=new qe;return e.setAttribute("position",new Ge(new Float32Array(i),3)),e.setAttribute("color",new Ge(new Float32Array(t),3)),e.computeVertexNormals(),e})();function ac(i,t){let e=new De,n=new De;e.add(n),n.position.y=.55;let s=i.body==="fire",r=i.body==="rainbow",o;r?o=Le("#FFFFFF",{vertexColors:!0,shininess:50}):s?o=Le("#FF8A1F",{emissive:"#FF3D00",emissiveIntensity:.55,shininess:20}):o=Le(i.body,{shininess:38});let a=new Oe(.5,48,32);r&&(a=Ut(a,(nt,lt,it,ft)=>nt.setHSL(((Math.atan2(ft,lt)/Re+1)%1+it*.3)%1,.75,.62)));let l=new vt(a,o);l.scale.set(1.05,1,.95);let c=new vt(new Oe(.5,32,20),new yn({color:i.dark,side:Nn}));c.scale.set(1.05*1.035,1.035,.95*1.035);let h=new vt(new Oe(.3,32,16),Le(s||r?i.belly:new Ae(i.body).lerp(new Ae(i.belly),.5),{shininess:20}));h.position.set(0,-.25,.345),h.scale.set(.78,.5,.32),n.add(l,c,h);let p=[];for(let nt of[-1,1]){let lt=new vt(new Oe(.15,20,12),Le(i.dark,{shininess:20}));lt.scale.set(1.2,.55,1.45),lt.position.set(nt*.22,-.49,.07),n.add(lt),p.push(lt)}let d=[],u=[],g=Le("#FFFFFF",{shininess:90,specular:"#FFFFFF"}),b=Le("#1B1F3B",{shininess:120,specular:"#FFFFFF"}),m=new yn({color:i.dark});for(let nt of[-1,1]){let lt=new De;lt.position.set(nt*.185,.15,.36);let it=new vt(new Oe(.162,24,16),m);it.scale.set(1,1.15,.6),it.position.z=-.012;let ft=new vt(new Oe(.15,24,16),g);ft.scale.set(1,1.15,.72);let mt=new De;mt.position.z=.074;let wt=new vt(new Oe(.07,16,12),b);wt.scale.z=.6;let Ht=new vt(new Oe(.024,8,6),new yn({color:"#FFFFFF"}));Ht.position.set(.028,.035,.04),mt.add(wt,Ht),lt.add(it,ft,mt),n.add(lt),d.push(lt),u.push(mt)}let f=new vt(new Ri(.075,.017,6,16,Math.PI*.8),new yn({color:"#1B1F3B"}));f.rotation.z=Math.PI+Math.PI*.1,f.position.set(0,0,.462),f.rotation.x=-.2;let M=new vt(new Oe(.05,12,10),new yn({color:"#7A1F2B"}));M.scale.set(1,1.25,.4),M.position.set(0,-.04,.47),M.visible=!1,n.add(f,M);let R=new De;n.add(R);let w=[];if(i.acc==="blush"||i.id==="orange")for(let nt of[-1,1]){let lt=new vt(new ei(.07,16),new yn({color:"#FF7896",transparent:!0,opacity:.5}));lt.position.set(nt*.33,-.06,.36),lt.rotation.y=nt*.75,lt.scale.y=.62,R.add(lt)}if(i.acc==="leaf"){let nt=new vt(new ge(.018,.022,.14,6),Le("#6B3E1F"));nt.position.set(0,.54,0),nt.rotation.z=-.15;let lt=new vt(new Oe(.15,16,8),Le("#3FB950"));lt.scale.set(1,.18,.5),lt.position.set(.13,.6,0),lt.rotation.z=.45,R.add(nt,lt)}else if(i.acc==="antenna")for(let nt of[-1,1]){let lt=new vt(new ge(.014,.014,.32,6),Le(i.dark));lt.position.set(nt*.18,.58,0),lt.rotation.z=-nt*.35;let it=new vt(new Oe(.06,12,10),Le("#FF5DA2",{emissive:"#FF5DA2",emissiveIntensity:.3}));it.position.set(nt*.235,.73,0),R.add(lt,it)}else if(i.acc==="crown"){let nt=Le("#FFC400",{shininess:110,specular:"#FFF2B0",emissive:"#5A3D00",emissiveIntensity:.3}),lt=new vt(new ge(.25,.23,.12,28,1,!0),nt);lt.material.side=je,lt.position.y=.48,R.add(lt);for(let it=0;it<6;it++){let ft=it/6*Re,mt=new vt(new An(.05,.16,6),nt);mt.position.set(Math.sin(ft)*.24,.6,Math.cos(ft)*.24),R.add(mt);let wt=new vt(new Oe(.028,8,6),Le(it%2?"#2EA8FF":"#E63946",{shininess:140,specular:"#FFFFFF"}));wt.position.set(Math.sin(ft)*.255,.48,Math.cos(ft)*.255),R.add(wt)}}else if(i.acc==="star"){let nt=new gi;for(let it=0;it<10;it++){let ft=it/10*Re-Math.PI/2,mt=it%2?.06:.14;it?nt.lineTo(Math.cos(ft)*mt,-Math.sin(ft)*mt):nt.moveTo(Math.cos(ft)*mt,-Math.sin(ft)*mt)}let lt=new vt(new go(nt,{depth:.04,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:1}),Le("#FFE066",{emissive:"#FFB703",emissiveIntensity:.5,shininess:90}));lt.position.set(0,.74,-.02),R.add(lt),R.userData.star=lt}else if(i.acc==="band"){let nt=Le("#E63946"),lt=new vt(new Ri(.43,.05,8,40),nt);lt.rotation.x=Math.PI/2-.08,lt.position.y=.2,lt.scale.set(1.05,.95,1),R.add(lt);for(let it of[-1,1]){let ft=new vt(new Ke(.06,.03,.3),nt);ft.position.set(it*.06,.18,-.55),ft.rotation.set(.5,it*.3,0),R.add(ft),R.userData["tail"+it]=ft}}else if(i.acc==="hat"){let nt=Le("#946232",{shininess:14}),lt=Le("#4A2E14",{shininess:12}),it=new vt(new ge(.46,.48,.035,36),nt);it.position.y=.4;let ft=new vt(new Oe(.29,28,14,0,Re,0,Math.PI/2),nt);ft.position.y=.41,ft.scale.y=.75;let mt=new vt(new ge(.292,.295,.06,28,1,!0),lt);mt.material.side=je,mt.position.y=.45;let wt=new De;wt.add(it,ft,mt),wt.rotation.set(-.12,0,.06),R.add(wt);let Ht=Le("#E63946",{shininess:15,side:je}),ee=new vt(new Ri(.34,.04,8,36),Ht);ee.rotation.x=Math.PI/2,ee.position.y=-.4,ee.scale.set(1.05,.95,1),R.add(ee);let Se=new gi;Se.moveTo(-.2,0),Se.lineTo(.2,0),Se.lineTo(.02,-.17),Se.closePath();let gt=new vt(new as(Se),Ht);gt.position.set(0,-.38,.33),gt.rotation.x=-.55,R.add(gt)}if(s){for(let lt=0;lt<7;lt++){let it=lt/7*Math.PI-Math.PI/2,ft=new vt(new An(.09,.4,8,1,!0),new yn({color:lt%2?"#FFB13B":"#FF5A1F",transparent:!0,opacity:.9,depthWrite:!1,blending:si}));ft.position.set(Math.sin(it)*.28,.42+Math.cos(it)*.05,-.12-Math.abs(Math.cos(it))*.08),ft.userData.ph=lt,n.add(ft),w.push(ft)}let nt=new Ci(new di({map:t,color:"#FF6A1F",transparent:!0,opacity:.55,depthWrite:!1,blending:si}));nt.scale.setScalar(2.2),n.add(nt)}qs(e),c.castShadow=!1;let D=new De,I=["#E63946","#FFFFFF","#FFB703","#FFFFFF","#2EA8FF","#FFFFFF"],_=Ut(new Oe(1.7,24,8,0,Re,0,Math.PI*.42),(nt,lt,it,ft)=>nt.set(I[Math.floor((Math.atan2(ft,lt)/Re+1)%1*12+1e-4)%6])),C=new Ye({vertexColors:!0,side:je,transparent:!0,opacity:1}),k=new vt(_,C);k.scale.set(1,.62,1),k.castShadow=!0;let L=new Float32Array(60),K=new Ds(new qe,new _s({color:"#4A4A5A",transparent:!0,opacity:.85}));K.geometry.setAttribute("position",new Ge(L,3)),K.frustumCulled=!1;let st=new De;st.position.y=1.6,st.add(k),D.add(st,K),D.visible=!1;let Z=new vt(_,C.clone());Z.visible=!1,Z.castShadow=!1;let ht=new vt(new qe,Le("#8B5A2B",{shininess:5}));return ht.visible=!1,ht.castShadow=!0,{id:i.id,root:e,inner:n,eyes:d,pupils:u,smile:f,ooh:M,feet:p,acc:R,flames:w,bodyMat:o,fire:s,chute:D,canopy:k,canopyHolder:st,lines:K,drop:Z,rope:ht,turn:0,blink:0,nextBlink:2}}function Ys(i={}){let t={skin:"#C98E62",thobe:"#F2EEE4",bisht:"#5B3A24",shmagh:"#C8102E",agal:"#141414",beard:"#4A4440",beads:!0,gold:!0,...i},e=new De,n=Le(t.skin,{shininess:12}),s=Le(t.thobe,{shininess:8}),r=Le(t.bisht||t.thobe,{shininess:14,side:je}),o=new vt(new zn([new ct(.001,0),new ct(.27,0),new ct(.275,.1),new ct(.25,.5),new ct(.232,.9),new ct(.222,1.2),new ct(.2,1.34),new ct(.12,1.42),new ct(.05,1.45)],30),s);e.add(o);for(let I of[-1,1]){let _=new vt(new Ke(.1,.04,.2),Le("#4A2E18"));_.position.set(I*.09,.02,.2),e.add(_)}let a=new vt(new zn([new ct(.245,.06),new ct(.295,.08),new ct(.285,.5),new ct(.265,.9),new ct(.255,1.2),new ct(.24,1.33),new ct(.16,1.41)],30,.62,Re-1.24),r);e.add(a),a.visible=!!t.bisht;let l=Le("#D4AF37",{shininess:90,specular:"#FFF2B0"});for(let I of[-1,1]){let _=I*.62,C=[[.247,.08],[.297,.1],[.287,.5],[.267,.9],[.257,1.2],[.242,1.33],[.162,1.41]].map(([k,L])=>new B(Math.sin(_)*(k+.006),L,Math.cos(_)*(k+.006)));t.bisht&&t.gold&&e.add(new vt(new Pi(new Jn(C),20,.014,6),l))}let c=[];for(let I of[-1,1]){let _=new De;_.position.set(I*.25,1.3,0),e.add(_);let C=new vt(new pi(.072,.28,4,10),r);C.position.y=-.18,_.add(C);let k=new De;k.position.y=-.36,_.add(k);let L=new vt(new pi(.068,.22,4,10),r);L.position.y=-.14,k.add(L);let K=new vt(new ge(.055,.06,.05,10),s);K.position.y=-.3,k.add(K);let st=new vt(new Oe(.052,12,10),n);if(st.position.y=-.36,st.scale.set(.9,1.1,.8),k.add(st),I<0&&t.beads){let Z=new vt(new Ri(.06,.011,6,18),Le("#E0A03C",{shininess:80,specular:"#FFF0C8"}));Z.position.set(0,-.44,.02),Z.rotation.y=.4,k.add(Z)}_.rotation.z=I*.12,k.rotation.x=-.25,c.push({sh:_,el:k,s:I})}let h=new vt(new ge(.06,.07,.1,10),n);h.position.y=1.46,e.add(h);let p=new De;p.position.y=1.6,e.add(p);let d=new vt(new Oe(.155,28,20),n);d.scale.set(.94,1.08,1),p.add(d);let u=new vt(new Oe(.034,10,8),Le("#B97C52"));u.position.set(0,-.005,.15),u.scale.set(.85,1.1,1.25),p.add(u);for(let I of[-1,1]){let _=new vt(new Oe(.019,10,8),Le("#1B140F",{shininess:120,specular:"#FFFFFF"}));_.position.set(I*.055,.025,.135),p.add(_);let C=new vt(new Ke(.065,.016,.02),Le("#3A3430"));C.position.set(I*.056,.058,.138),C.rotation.z=-I*.12,p.add(C);let k=new vt(new pi(.019,.06,3,6),Le("#2A2420"));k.position.set(I*.034,-.045,.142),k.rotation.z=I*1.15,p.add(k)}let g=new vt(new Oe(.16,24,10,Math.PI/2-1.2,2.4,Math.PI*.6,Math.PI*.3),Le(t.beard==="none"?"#000":t.beard,{side:je,shininess:5}));p.add(g),g.visible=t.beard!=="none";let b=new vt(new Oe(.026,10,8),new yn({color:"#4A1A14"}));b.position.set(0,-.07,.143),b.scale.set(1,.3,.5),p.add(b);let m=vi(128,128,(I,_,C)=>{I.fillStyle="#FBF8F2",I.fillRect(0,0,_,C),I.fillStyle=t.shmagh;for(let k=0;k<C;k+=16)for(let L=0;L<_;L+=16)I.fillRect(L+2,k+2,7,7),I.fillRect(L+9,k+9,5,5),I.fillRect(L+9,k+2,2,2),I.fillRect(L+2,k+11,2,2)},[5,5]),f=new Ye({map:m,side:je}),M=new vt(new Oe(.168,28,14,0,Re,0,Math.PI*.52),f);M.rotation.x=-.42,M.position.y=.01,p.add(M);let R=new vt(new zn([new ct(.168,.02),new ct(.18,-.06),new ct(.2,-.16),new ct(.24,-.26),new ct(.28,-.33)],28,1.15,Re-2.3),f);p.add(R);let w=new vt(new Yn(.2,.36),f);w.position.set(.17,-.25,.1),w.rotation.set(-.15,.6,-.08),p.add(w);let D=Le(t.agal,{shininess:40});for(let[I,_]of[[.07,.154],[.097,.139]]){let C=new vt(new Ri(_,.015,8,36),D);C.position.set(0,I*.913,-I*.408),C.rotation.x=Math.PI/2-.42,p.add(C)}return qs(e),{root:e,head:p,arms:c,mouth:b,yaw:0}}function vf(i,t){t=t||{};let e=t.renderer||jl(i),n=new Ls,s=new Ae("#D3E3EA");n.background=s,n.fog=new Fs(s,60,340);let r=new Fn(62,.5,.1,1400),o={time:{value:0},wind:{value:0}},a=On(20261123),l=new zs("#CFE5FF","#7FA458",1.05);n.add(l);let c=new B(.55,.6,.5).normalize(),h=new Bs("#FFE6BC",3);h.castShadow=!0,h.shadow.mapSize.set(2048,2048),Object.assign(h.shadow.camera,{left:-17,right:17,top:17,bottom:-17,near:1,far:140}),h.shadow.bias=-4e-4,h.shadow.normalBias=.025,h.shadow.radius=2.5,n.add(h,h.target);let p=Ql();n.add(p);let d=120,u=11,g=U=>2.6*Math.sin(U*.055+.6)+1.5*Math.sin(U*.13+2.1)-.6,b=[[17,1],[45,-1],[76,1],[103,-1]].map(([U,H])=>({x:U,z:Ze(g(U)+H*6.4,-8.2,8.2),side:H,rot:H>0?Math.PI:0,base:0}));function m(U,H){let A=Math.abs(H),F=(Zi(U*.09+3.1,H*.09)-.5)*.55,pt=H-g(U);F-=Math.exp(-(pt*pt)/1.3)*.75;let Pt=Ze((A-(u-1))/21,0,1);F+=21*Pt*Pt+cn(30,50,A)*7,F+=(Zi(U*.07+(H>0?9:2),A*.09)-.5)*5*cn(u+1,u+9,A);let yt=U<2?(2-U)/22:U>d-2?(U-d+2)/30:0;return yt>0&&(F+=20*Math.min(1,yt)**2+cn(1,2.5,yt)*6),F}for(let U of b)U.base=m(U.x,U.z)+.05;function f(U,H){let A=m(U,H);for(let F of b){let pt=U-F.x,Pt=H-F.z;pt*pt+Pt*Pt<49&&(A=En(A,F.base,cn(7,4.5,Math.hypot(pt,Pt))))}return A}let M=(U,H)=>Math.hypot(f(U+.3,H)-f(U-.3,H),f(U,H+.3)-f(U,H-.3))/.6;{let U=[-150,-110,-80,-60,-45,-35,-27,-21,-16,-12.5];for(let qt=-10;qt<=130;qt+=1)U.push(qt);U.push(133,137,142,148,156,166,180,200,230,270);let H=[0];for(let qt=.6;qt<14;qt+=.6)H.push(+qt.toFixed(2));for(let qt=14;qt<36;qt+=1.4)H.push(+qt.toFixed(2));for(let qt=36;qt<=80;qt+=4)H.push(qt);H.push(95,120,160);let A=[...H.slice(1).reverse().map(qt=>-qt),...H],F=U.length,pt=A.length,Pt=new Float32Array(F*pt*3),yt=new Float32Array(F*pt*3);for(let qt=0;qt<pt;qt++)for(let Lt=0;Lt<F;Lt++){let Vt=U[Lt],Tt=A[qt],we=f(Vt,Tt),ye=(qt*F+Lt)*3,Je=Math.abs(Tt);Pt[ye]=Vt,Pt[ye+1]=we,Pt[ye+2]=Tt;let E=Zi(Vt*.07+11,Tt*.07),Y=Pn(Vt*.5,Tt*.5);rn(Be,"#5FAE3E","#9AD85E",E*1.3-.15+Y*.2);let tt=Math.abs(Tt-g(Vt));tt<2.4&&Je<u+1&&Be.lerp(yi.set(tt<1?"#8F8A62":"#D9C891"),cn(2.4,1.3,tt));let Q=cn(1.2,5,we)*cn(u-.5,u+4,Je);if(Q>0){let ot=.5+.5*Math.sin(we*1.9+Zi(Vt*.05,Tt*.05)*4);rn(No,"#B98F62","#DDBE8E",ot),No.lerp(yi.set("#8E6A48"),Pn(Vt*.35,we*.6)*.35),Be.lerp(No,Q)}Je>31&&Be.lerp(yi.set("#B7A96E"),cn(31,40,Je)*.7),yt[ye]=Be.r,yt[ye+1]=Be.g,yt[ye+2]=Be.b}let Dt=[];for(let qt=0;qt<pt-1;qt++)for(let Lt=0;Lt<F-1;Lt++){let Vt=qt*F+Lt,Tt=Vt+1,we=Vt+F,ye=we+1;Dt.push(Vt,we,Tt,Tt,we,ye)}let _t=new qe;_t.setAttribute("position",new Ge(Pt,3)),_t.setAttribute("color",new Ge(yt,3)),_t.setIndex(Dt),_t.computeVertexNormals();let It=new vt(_t,new Ye({vertexColors:!0}));It.receiveShadow=!0,n.add(It)}let R=ec();R.colorSpace="";let w=U=>m(U,g(U))+.42,D=(()=>{let U=[],H=[],A=[],F=0;for(let yt=-6;yt<=d+6;yt+=.5){let Dt=g(yt),_t=(g(yt+.1)-Dt)/.1,It=Math.hypot(1,_t),qt=-_t/It,Lt=1/It,Vt=w(yt);for(let Tt of[-1.35,1.35])U.push(yt+qt*Tt,Vt,Dt+Lt*Tt),H.push(yt/3,Tt>0?1:0);if(F){let Tt=(F-1)*2;A.push(Tt,Tt+1,Tt+2,Tt+1,Tt+3,Tt+2)}F++}let pt=new qe;pt.setAttribute("position",new Ge(new Float32Array(U),3)),pt.setAttribute("uv",new Ge(new Float32Array(H),2)),pt.setIndex(A),pt.computeVertexNormals();let Pt=new vt(pt,new Dn({color:"#3D9FD8",specular:"#FFFFFF",shininess:140,normalMap:R,transparent:!0,opacity:.88}));return Pt.material.normalScale.set(.7,.7),Pt.receiveShadow=!0,n.add(Pt),Pt})();{let U=[],H=(Dt,_t,It,qt,Lt,Vt)=>{let Tt=new An(qt,It,30,12),we=Tt.attributes.position;for(let ye=0;ye<we.count;ye++){let Je=we.getX(ye),E=we.getY(ye),Y=we.getZ(ye),tt=Math.atan2(Y,Je),Q=(E+It/2)/It,ot=1+(Pn(tt*2.2+Lt,Q*3.5)-.5)*.45*(1-Q*.4);we.setXYZ(ye,Je*ot,E+(Pn(tt*4+Lt*2,Q*5)-.5)*It*.07*(1-Q),Y*ot)}Tt=Ut(Tt,(ye,Je,E,Y)=>{let tt=(E+It/2)/It,Q=Pn(Math.atan2(Y,Je)*6+Lt,tt*9);rn(ye,"#7F9CC0","#B4C6E0",tt*1.15+Q*.3),Vt<1&&tt>Vt-.06+Q*.08&&ye.set("#F7FAFF")}),U.push(Yt(Tt,Dt,It/2-2,_t))};H(430,-40,175,110,1.3,.6),[[380,120,120,90],[400,-170,130,95],[-260,40,120,100],[-240,-140,110,90],[60,-260,140,110],[180,-250,120,95],[-60,-250,115,100],[60,260,140,110],[200,250,125,95],[-80,250,120,100],[330,260,110,90],[320,-260,120,95]].forEach(([Dt,_t,It,qt],Lt)=>H(Dt,_t,It,qt,Lt*3.7,It>118?.74:2));let F=new vt(wn(U),new Ye({vertexColors:!0,flatShading:!0,fog:!1}));n.add(F);let pt=new De,Pt=new vt(new ge(.25,.25,9,6),new Ye({color:"#5C3A1A"}));Pt.position.y=4.5;let yt=new vt(new Yn(6,3.6),new yn({color:"#FFB703",side:je,fog:!1}));yt.position.set(3,7,0),pt.add(Pt,yt),pt.position.set(430,171,-40),pt.scale.setScalar(2.2),n.add(pt)}let I=new Ye({vertexColors:!0}),_=new Ye({vertexColors:!0,flatShading:!0}),C=(U,H,A)=>b.some(F=>Math.hypot(U-F.x,H-F.z)<A),k=(U,H,A)=>Math.abs(H-g(U))<1.7+A||C(U,H,6.8+A),L=[];function K(U,H,A,F={}){let pt=new Map;for(let yt of A){let Dt=Math.floor((yt.x+40)/32);pt.has(Dt)||pt.set(Dt,[]),pt.get(Dt).push(yt)}let Pt=new fn;for(let yt of pt.values()){let Dt=new fi(U,H,yt.length);yt.forEach((_t,It)=>{Pt.position.set(_t.x,_t.y,_t.z),Pt.rotation.set(_t.rx||0,_t.ry||0,_t.rz||0),_t.s3?Pt.scale.set(_t.s3[0],_t.s3[1],_t.s3[2]):Pt.scale.setScalar(_t.s||1),Pt.updateMatrix(),Dt.setMatrixAt(It,Pt.matrix),_t.color&&Dt.setColorAt(It,Be.set(_t.color))}),Dt.castShadow=!!F.cast,Dt.receiveShadow=F.receive!==!1,Dt.computeBoundingSphere(),n.add(Dt)}}let st=(U=0,H=u-.6,A=-1,F=d+1)=>({x:A+a()*(F-A),z:(a()<.5?-1:1)*(U+a()*(H-U))}),Z=Mi(new Ye({vertexColors:!0,side:je}),.012,2.8,o),ht=[nc(On(3),1.1,9),nc(On(8),-.8,10),nc(On(15),.5,8)];{let U=[];for(let H of[-1,1])for(let A=-2;A<d+2;A+=5+a()*5){let F=g(A)+H*(2.3+a()*1.8);!C(A,F,7.5)&&Math.abs(F)<u&&U.push({x:A,z:F})}for(let H=0;H<16;H++){let A=st(2,u-1);k(A.x,A.z,.6)||U.push(A)}ht.forEach((H,A)=>{let F=U.filter((pt,Pt)=>Pt%3===A).map(pt=>(L.push({x:pt.x,z:pt.z,r:.38,tall:1}),{x:pt.x,y:f(pt.x,pt.z)-.05,z:pt.z,ry:a()*Re,s:.85+a()*.4}));K(H,Z,F,{cast:!0})})}let nt=Mi(new Ye({vertexColors:!0,flatShading:!0}),.01,1.2,o);[ic(On(21),"#E8443A",["#2F8A3C","#7CCB55"]),ic(On(33),null,["#3B9447","#8AD460"]),ic(On(41),"#FFB52E",["#2C7F3A","#6FC24F"])].forEach((U,H)=>{let A=[];for(let F=0;A.length<9&&F<400;F++){let pt=st(1.5,u-.5);k(pt.x,pt.z,1.4)||L.some(Pt=>Math.hypot(Pt.x-pt.x,Pt.z-pt.z)<3)||(L.push({x:pt.x,z:pt.z,r:.35,tall:1}),A.push({x:pt.x,y:f(pt.x,pt.z)-.05,z:pt.z,ry:a()*Re,s:.75+a()*.45}))}K(U,nt,A,{cast:!0})});let it=sc(),ft=rc();{let U=[];for(let Pt=0;U.length<130&&Pt<3e3;Pt++){let yt=st(0,u+4);k(yt.x,yt.z,.5)||M(yt.x,yt.z)>.7||U.push({x:yt.x,y:f(yt.x,yt.z),z:yt.z,ry:a()*Re,s:.5+a()*.8})}K(it,_,U,{cast:!0});let H=[];for(let Pt=0;H.length<90&&Pt<2e3;Pt++){let yt=st(0,u);if(C(yt.x,yt.z,6)||Math.abs(yt.z-g(yt.x))<1.1)continue;let Dt=.35+a()*.8;Dt>.8&&L.push({x:yt.x,z:yt.z,r:.3*Dt}),H.push({x:yt.x,y:f(yt.x,yt.z)+.04,z:yt.z,rx:a()*3,ry:a()*3,rz:a()*3,s3:[Dt,Dt*(.6+a()*.4),Dt*(.8+a()*.4)]})}let A=Ut(new mi(.5,1),(Pt,yt,Dt,_t)=>{rn(Pt,"#9C7A56","#D2B387",.45+Dt*.9+(Sn(yt*5,_t*5)-.5)*.4)}),F=[];for(let Pt=0;Pt<230;Pt++){let yt=-14+a()*(d+30),Dt=u+1+a()*26,_t=(a()<.5?-1:1)*Dt,It=.8+a()*3.2;F.push({x:yt,y:f(yt,_t)-It*.42,z:_t,rx:a()*3,ry:a()*3,rz:a()*3,s3:[It,It*(.5+a()*.4),It*(.8+a()*.5)]})}for(let Pt=0;Pt<26;Pt++){let yt=st(u-3,u+1);if(C(yt.x,yt.z,7))continue;let Dt=1.3+a()*1.6;L.push({x:yt.x,z:yt.z,r:.45*Dt}),F.push({x:yt.x,y:f(yt.x,yt.z)-.15,z:yt.z,rx:a()*3,ry:a()*3,rz:a()*3,s3:[Dt,Dt*.7,Dt]})}K(ft,_,H,{cast:!1}),K(A,_,F,{cast:!1});let pt=[];for(let Pt=0;Pt<140;Pt++){let yt=-40+a()*(d+80),Dt=26+a()*40,_t=(a()<.5?-1:1)*Dt;Pn(yt*.06,_t*.06)<.4||pt.push({x:yt,y:f(yt,_t)-.2,z:_t,ry:a()*Re,s:1+a()*1.3})}K(wn([Yt(Ut(new ge(.15,.22,1.6,5),"#6B4A2A"),0,.8,0),Yt(Ut(new Un(1.2,0),(Pt,yt,Dt)=>rn(Pt,"#4F7F3A","#8DB45E",Dt/1.2*.5+.5)),0,2.3,0,0,0,0,1,.85,1)]),_,pt,{cast:!1})}let mt=yf();{let U=[];for(let H=-4;H<d+4;H+=.55)for(let A of[-1,1]){if(a()<.35)continue;let F=g(H)+A*(1.05+a()*.55);C(H,F,5)||U.push({x:H,y:f(H,F)-.05,z:F,ry:a()*Re,s:.7+a()*.6})}K(mt,Mi(I,.09,.2,o),U,{cast:!1})}let wt=oc();{let U=[];for(let H=0;U.length<7500&&H<3e4;H++){let A=st(0,u+3,-3,d+3);Math.abs(A.z-g(A.x))<1.15||C(A.x,A.z,3.9)||M(A.x,A.z)>.6||U.push({x:A.x,y:f(A.x,A.z)-.02,z:A.z,ry:a()*Re,s:.5+a()*.7})}K(wt,Mi(new Ye({vertexColors:!0,side:je}),.5,0,o),U)}let Ht=wn([Yt(Ut(new ge(.007,.01,.24,3,1,!0),"#3E8E36"),0,.12,0),Yt(Ut(new ei(.02,6),"#FFD54A"),0,.248,.004,-1,0,0)]),ee=wn([0,1,2,3,4].map(U=>{let H=U/5*Re;return Yt(Ut(new ei(.036,5),"#FFFFFF"),Math.cos(H)*.035,Math.sin(H)*.035,0,0,0,H)}));Yt(ee,0,.245,0,-1,0,0);{let U=[],H=["#FF6B9A","#FFFFFF","#FFD23F","#B28DFF","#FF8C42","#FF4D6D","#7FD1FF"];for(let F=0;F<9e3&&U.length<2600;F++){let pt=st(0,u-.3,-2,d+2);Math.abs(pt.z-g(pt.x))<1.3||C(pt.x,pt.z,3.9)||Pn(pt.x*.16,pt.z*.16)<.42||U.push({x:pt.x,y:f(pt.x,pt.z),z:pt.z,ry:a()*Re*.25,s:1.2+a()*.8,color:H[Math.floor(Pn(pt.x*.3+40,pt.z*.3)*H.length*.999+a()*1.5)%H.length]})}let A=new Ye({vertexColors:!0,side:je});K(Ht,Mi(I,.8,0,o),U.map(F=>({...F,color:null}))),K(ee,Mi(A,.8,0,o),U)}let Se=new De;n.add(Se);{let U=new Ye({color:"#FFFFFF",emissive:"#C9D8E6",emissiveIntensity:.35,flatShading:!1,fog:!0});for(let H=0;H<11;H++){let A=new De;for(let F=0;F<6;F++){let pt=new vt(new Un(1,2),U);pt.position.set((F-2.5)*2.1+a(),a()*1.4,a()*1.5),pt.scale.set(2.2+a()*1.6,1.5+a()*1.1,1.8+a()),A.add(pt)}A.position.set(-60+a()*260,48+a()*26,-140+a()*280),A.userData.v=.4+a()*.6,Se.add(A)}}let gt=[];{let U=new qe;U.setAttribute("position",new Ge(new Float32Array([0,0,0,.9,0,-.25,.9,0,.25]),3)),U.computeVertexNormals();let H=new yn({color:"#34406A",side:je});for(let A=0;A<6;A++){let F=new De,pt=new vt(U,H),Pt=new vt(U,H);Pt.scale.x=-1,F.add(pt,Pt),F.userData={ph:a()*6,sp:.25+a()*.2,y:26+a()*14,cx:15+a()*90,cz:(a()-.5)*20,rad:10+a()*14,l:pt,r:Pt},gt.push(F),n.add(F)}}let Qt=[];{let U=new gi;U.moveTo(0,0),U.bezierCurveTo(.05,.1,.16,.12,.15,.02),U.bezierCurveTo(.16,-.05,.08,-.1,0,-.02);let H=new as(U,6),A=["#FF8FD1","#FFD23F","#8FD6FF","#FFFFFF","#FF9E5E","#B28DFF"];for(let F=0;F<22;F++){let pt=new Ye({color:A[F%A.length],side:je,emissive:A[F%A.length],emissiveIntensity:.25}),Pt=new De,yt=new vt(H,pt),Dt=new vt(H,pt);Dt.scale.x=-1;let _t=new vt(new pi(.012,.07,3,5),new yn({color:"#2B2233"}));_t.rotation.x=Math.PI/2,Pt.add(yt,Dt,_t),Pt.userData={l:yt,r:Dt,ax:6+a()*108,az:(a()-.5)*16,ph:a()*6},Qt.push(Pt),n.add(Pt)}}let ne=tc(),pe=(()=>{let H=new Float32Array(480),A=[];for(let Pt=0;Pt<160;Pt++)A.push([a()*30-15,.3+a()*3.5,-4+a()*12,a()*6]);let F=new qe;F.setAttribute("position",new Ge(H,3));let pt=new ys(F,new rs({size:.07,map:ne,color:"#FFF4C4",transparent:!0,opacity:.85,depthWrite:!1,blending:si}));return pt.frustumCulled=!1,n.add(pt),pt.userData.seeds=A,pt})(),zt=0,oe=-2.8,ke=new B(4,0,-2.4),xe=1.05,fe=new De;n.add(fe);let Ne={mer:new B(xe,0,-.5),zone:new B(2.35,0,.35),pen:new B(-4.45,0,-1.75)},bt=[[-1.1,-2.8,1.25],[0,-2.8,1.3],[1.1,-2.8,1.25],[-.78,-.8,.55],[4,-2.4,.62],[1.95,-1.8,.35],[-2.05,-1.6,.4],[1.68,-.25,.14],[-1.68,-.25,.14],[xe,-.5,.42],[-5.8,-1,.3],[-5.8,-1.8,.3],[-5.8,-2.6,.3],[-5.1,-2.9,.3],[-4.45,-2.9,.3],[-3.8,-2.9,.3],[-3.1,-2.6,.3],[-3.1,-1.8,.3],[-3.1,-1,.3]],Ot={flames:[],glows:[],lantern:null,merchant:null};{let U=[],H=(z,V)=>z.set(Math.floor((V+1.7)/.425)%2?"#EAD9B5":"#D9C39C");U.push(Yt(Ut(new Ke(3.4,1.95,2.4),H),zt,.975,oe));for(let z of[-1,1])U.push(Yt(Ut(new Ke(3.62,.07,1.52),(V,W)=>V.set(Math.floor((W+1.81)/.4525)%2?"#C9AE82":"#B99D70")),zt,2.32,oe+z*.6,z*.59,0,0));let A=new gi;A.moveTo(-1.2,0),A.lineTo(1.2,0),A.lineTo(0,.8),A.closePath();for(let z of[-1,1])U.push(Yt(Ut(new as(A),"#E3D0A8"),zt+z*1.7,1.95,oe,0,Math.PI/2,0));U.push(Yt(Ut(new Ke(.95,1.55,.05),"#3F2412"),zt-.25,.775,oe+1.22));for(let z of[-1,1]){let V=new gi;V.moveTo(0,0),V.lineTo(.42*z,0),V.lineTo(0,-1),V.closePath(),U.push(Yt(Ut(new as(V),"#E9D7B0"),zt-.25+z*.04,1.55,oe+1.25))}let F=new B(0,2.15,oe+1.2),pt=new B(0,1.98,oe+2.55),Pt=F.distanceTo(pt),yt=Math.atan2(F.y-pt.y,pt.z-F.z);for(let z=0;z<8;z++){let V=zt-1.7+.2125+z*.425,W=z%2?"#FAF3E6":"#D7263D";U.push(Yt(Ut(new Ke(.425,.035,Pt),W),V,(F.y+pt.y)/2,(F.z+pt.z)/2,yt,0,0)),U.push(Yt(Ut(new ei(.2125,10,Math.PI,Math.PI),W),V,pt.y,pt.z+.01))}for(let z of[-1,1])U.push(Yt(Ut(new ge(.045,.055,2.05,7),"#5C3A1A"),zt+z*1.68,1.02,oe+2.55));U.push(Yt(Ut(new ge(.03,.03,.5,5),"#5C3A1A"),zt,2.95,oe+1.22,0,0,0));let Dt=zt-.78,_t=oe+2;U.push(Yt(Ut(new Ke(1,.06,.55),"#8B5A2B"),Dt,.74,_t));for(let[z,V]of[[-1,-1],[1,-1],[-1,1],[1,1]])U.push(Yt(Ut(new ge(.03,.03,.72,5),"#6B4220"),Dt+z*.44,.36,_t+V*.22));let It=z=>new zn([new ct(.001,0),new ct(.09*z,0),new ct(.15*z,.07),new ct(.16*z,.17),new ct(.11*z,.28),new ct(.06*z,.32),new ct(.075*z,.36),new ct(.06*z,.37)],14);U.push(Yt(Ut(It(1),(z,V,W)=>z.set(W>.2&&W<.24?"#F2E3C6":"#C0612B")),Dt-.3,.77,_t)),U.push(Yt(Ut(It(.8),(z,V,W)=>z.set(W>.16&&W<.19?"#FFFFFF":"#2E86AB")),Dt+.02,.77,_t-.05)),U.push(Yt(Ut(new ge(.07,.07,.42,10),(z,V,W)=>z.set(Math.abs(W)>.17?"#E8C170":Math.floor((W+.2)/.06)%2?"#9B2335":"#1F3A68")),Dt+.3,.84,_t,0,0,Math.PI/2)),U.push(Yt(Ut(new Oe(.28,12,8),(z,V,W)=>rn(z,"#C8B18A","#E2D2AE",W*2+.5)),zt-2.05,.27,oe+1.2,0,0,0,1,1.2,1)),U.push(Yt(Ut(new Oe(.22,12,8),(z,V,W)=>rn(z,"#C8B18A","#E2D2AE",W*2+.5)),zt-2,.22,oe+1.75,0,0,0,1,1.15,1)),U.push(Yt(Ut(new Ke(.5,.42,.42),(z,V,W,et)=>z.set(Math.abs(W)>.17||Math.abs(V)>.21?"#7A4E25":"#A0703C")),zt+1.95,.21,oe+1,0,.3,0));let qt=(z,V)=>{let W=z.distanceTo(V),et=Math.max(2,Math.round(W/.55));for(let Ct=0;Ct<=et;Ct++){let dt=z.clone().lerp(V,Ct/et);U.push(Yt(Ut(new ge(.045,.055,.85,6),"#8B5A2B"),dt.x,.42,dt.z))}for(let Ct of[.3,.62]){let dt=Ut(new Ke(.05,1,.035),"#9C6A36");Yt(dt,0,0,0,0,0,0,1,W,1),Wh(dt,new B(z.x,Ct,z.z),new B(V.x,Ct,V.z)),U.push(dt)}},Lt=new B(-5.8,0,-.75),Vt=new B(-5.8,0,-2.9),Tt=new B(-3.1,0,-2.9),we=new B(-3.1,0,-.75);qt(Lt,Vt),qt(Vt,Tt),qt(Tt,we),U.push(Yt(Ut(new Ke(1,.18,.35),"#7A4E25"),-4.45,.09,-2.55)),U.push(Yt(Ut(new Ke(.9,.06,.28),"#D8C26A"),-4.45,.2,-2.55)),U.push(Yt(Ut(new Ke(1.75,.46,.06),"#7A4A22"),zt,2.66,oe+1.25));for(let z=0;z<9;z++){let V=z/9*Re;U.push(Yt(Ut(new mi(.11,0),(W,et,Ct)=>rn(W,"#7D776C","#B5AFA2",Ct*4+.5)),ke.x+Math.cos(V)*.42,.06,ke.z+Math.sin(V)*.42,z,z*2,0,1,.7,1))}for(let z=0;z<3;z++){let V=z/3*Math.PI;U.push(Yt(Ut(new ge(.05,.05,.62,6),(W,et,Ct)=>W.set(Math.abs(Ct)>.27?"#C9A36B":"#4A2E18")),ke.x,.1,ke.z,0,V,Math.PI/2-.25))}U.push(Yt(Ut(new ge(.22,.25,.12,9),"#9A948A"),ke.x-.75,.06,ke.z+.35));for(let[z,V]of[[-.55,.75],[-.35,.82]])U.push(Yt(Ut(new zn([new ct(.001,0),new ct(.022,0),new ct(.03,.045),new ct(.026,.046)],10),"#F4EFE6"),ke.x+z,.12,ke.z+V));let ye=new vt(wn(U),new Ye({vertexColors:!0,side:je}));ye.castShadow=!0,ye.receiveShadow=!0,fe.add(ye);let Je=vi(512,128,(z,V,W)=>{z.fillStyle="#8B5A2B",z.fillRect(0,0,V,W),z.strokeStyle="#E8C170",z.lineWidth=6,z.strokeRect(8,8,V-16,W-16),z.fillStyle="#FFF3D6",z.font='900 64px -apple-system, "SF Arabic", "Geeza Pro", system-ui, sans-serif',z.textAlign="center",z.textBaseline="middle";try{z.direction="rtl"}catch{}z.fillText(t.sign||"\u062E\u064A\u0645\u0629 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",V/2,W/2+4)}),E=new vt(new Yn(1.62,.38),new Ye({map:Je,emissive:"#3B2410",emissiveIntensity:.25}));E.position.set(zt,2.66,oe+1.29),fe.add(E);let Y=vi(256,160,(z,V,W)=>{z.fillStyle="#8E1B26",z.fillRect(0,0,V,W),z.fillStyle="#1F2F5C",z.fillRect(10,10,V-20,W-20),z.fillStyle="#8E1B26",z.fillRect(20,20,V-40,W-40),z.strokeStyle="#E8C170",z.lineWidth=3,z.strokeRect(16,16,V-32,W-32),z.fillStyle="#E8C170";for(let Ct=0;Ct<14;Ct++)z.beginPath(),z.arc(24+Ct*16.3,14,3,0,Re),z.arc(24+Ct*16.3,W-14,3,0,Re),z.fill();let et=(Ct,dt,jt,$t)=>{z.fillStyle=$t,z.beginPath(),z.moveTo(Ct,dt-jt),z.lineTo(Ct+jt*1.5,dt),z.lineTo(Ct,dt+jt),z.lineTo(Ct-jt*1.5,dt),z.closePath(),z.fill()};et(V/2,W/2,44,"#1F2F5C"),et(V/2,W/2,30,"#E8C170"),et(V/2,W/2,16,"#8E1B26"),et(V/2,W/2,6,"#F4EFE6");for(let[Ct,dt]of[[50,45],[V-50,45],[50,W-45],[V-50,W-45]])et(Ct,dt,12,"#2E86AB");z.fillStyle="#F4EFE6";for(let Ct=4;Ct<W;Ct+=8)z.fillRect(0,Ct,4,3),z.fillRect(V-4,Ct,4,3)}),tt=new vt(new Yn(2,1.25),new Ye({map:Y}));tt.rotation.x=-Math.PI/2,tt.rotation.z=.04,tt.position.set(zt-.2,.02,oe+1.9),tt.receiveShadow=!0,fe.add(tt);let Q=new De,ot=new vt(new ge(.07,.07,.16,8),new yn({color:"#FFD36B"})),y=new vt(new An(.1,.08,8),new Ye({color:"#3B2A1A"}));y.position.y=.12;let T=new vt(new ge(.085,.07,.03,8),new Ye({color:"#3B2A1A"}));T.position.y=-.09;let S=new Ci(new di({map:ne,color:"#FFC14D",transparent:!0,opacity:.75,depthWrite:!1,blending:si}));S.scale.setScalar(.9),Q.add(ot,y,T,S),Q.position.set(zt+1.68,1.72,oe+2.55),fe.add(Q),Ot.lantern=Q;let x=z=>new yn({color:z,transparent:!0,opacity:.9,depthWrite:!1,blending:si});[["#FF5A1F",.2,.55,0],["#FF9A2E",.15,.45,.07],["#FFE07A",.09,.3,-.05]].forEach(([z,V,W,et],Ct)=>{let dt=new vt(new An(V,W,10,1,!0),x(z));dt.position.set(ke.x+et,.12+W/2,ke.z-et),dt.userData={h0:W,i:Ct},fe.add(dt),Ot.flames.push(dt)});let O=new Ci(new di({map:ne,color:"#FF8A2E",transparent:!0,opacity:.6,depthWrite:!1,blending:si}));O.position.set(ke.x,.45,ke.z),O.scale.setScalar(1.8),fe.add(O),Ot.glows.push(O);let P=new Dn({color:"#C9A13B",specular:"#FFE9A8",shininess:90}),$=new De,G=new vt(new zn([new ct(.001,0),new ct(.1,0),new ct(.115,.02),new ct(.1,.09),new ct(.06,.14),new ct(.045,.2),new ct(.06,.24),new ct(.075,.26),new ct(.04,.3),new ct(.012,.34),new ct(.02,.36),new ct(.001,.37)],20),P),q=new vt(new Pi(new Jn([new B(.07,.07,0),new B(.14,.14,0),new B(.17,.25,0),new B(.23,.3,0)]),10,.016,6),P),j=new vt(new Ri(.07,.01,6,14,Math.PI*1.2),P);j.position.set(-.07,.15,0),j.rotation.z=Math.PI*.4,$.add(G,q,j),$.position.set(ke.x-.75,.12,ke.z+.35),$.rotation.y=-.6,$.traverse(z=>{z.castShadow=!0}),fe.add($)}let Rt=null;function he(U){let H=ac(U,ne);return n.add(H.root,H.chute,H.drop,H.rope),H}function Wt(){if(Rt){for(let U of[Rt.root,Rt.chute,Rt.drop,Rt.rope])n.remove(U),U.traverse(H=>{H.geometry&&H.geometry.dispose(),H.material&&[].concat(H.material).forEach(A=>A.dispose())});Rt=null}}let Ce=(()=>{let U=new De,H=new De;U.add(H);let A=Le("#D9A066",{shininess:18}),F=Le("#ECCB9C",{shininess:18}),pt=Le("#3B2A1A",{shininess:40}),Pt=[[-.56,0],[-.54,.1],[-.48,.17],[-.36,.2],[-.18,.18],[0,.185],[.18,.21],[.32,.215],[.44,.18],[.53,.11],[.57,0]],yt=new zn(Pt.map(([tt,Q])=>new ct(Q,tt)),36);{let tt=yt.attributes.position;for(let Q=0;Q<tt.count;Q++){let ot=tt.getX(Q),y=tt.getY(Q),T=tt.getZ(Q),S=Math.exp(-(((y+.1)/.22)**2));ot<0&&(ot*=1-S*.28),tt.setXYZ(Q,y,-ot*(ot<0?.95:1.05),T*.82)}yt.computeVertexNormals()}yt=Ut(yt,(tt,Q,ot)=>{let y=ot/.21;y<-.45?tt.set("#FFF6E8"):y<-.15?rn(tt,"#6A3F1F","#8A5528",(y+.45)/.3):rn(tt,"#D9A066","#C58A50",(y-.3)*1.5),Q<-.46&&y<.55&&tt.set("#FFF6E8")});let Dt=new vt(yt,Le("#FFFFFF",{vertexColors:!0,shininess:22}));Dt.position.y=.8,H.add(Dt);let _t=new De;_t.position.set(-.56,.86,0);let It=new vt(new pi(.025,.1,3,6),Le("#2B1D12"));It.position.y=-.06,_t.add(It),_t.rotation.z=.5,H.add(_t);let qt=new De;qt.position.set(.42,.88,0),H.add(qt);let Lt=new vt(new ge(.055,.1,.5,14),A);Lt.position.y=.23,Lt.scale.z=.85,qt.add(Lt);let Vt=new vt(new ge(.036,.06,.42,10),Le("#FFF6E8"));Vt.position.set(.04,.21,0),Vt.rotation.z=-.08,qt.add(Vt),qt.rotation.z=-.6;let Tt=new De;Tt.position.set(0,.49,0),Tt.scale.setScalar(1.12),qt.add(Tt);let we=new vt(new Oe(.11,24,16),A);we.scale.set(1.35,.9,.82),Tt.add(we);let ye=new vt(new Oe(.075,18,12),F);ye.position.set(.14,-.045,0),ye.scale.set(1.25,.8,.85),Tt.add(ye);let Je=new vt(new Oe(.03,10,8),pt);Je.position.set(.225,-.035,0),Tt.add(Je);for(let tt of[-1,1]){let Q=new vt(new Oe(1,10,6),Le("#5A3518"));Q.scale.set(.1,.012,.01),Q.position.set(.1,-.012,tt*.07),Q.rotation.z=-.28,Tt.add(Q);let ot=new vt(new Oe(1,10,6),Le("#FFF6E8"));ot.scale.set(.095,.012,.01),ot.position.set(.085,.022,tt*.074),ot.rotation.z=-.22,Tt.add(ot);let y=new vt(new Oe(.026,12,10),Le("#120C08",{shininess:160,specular:"#FFFFFF"}));y.position.set(.035,.035,tt*.083),Tt.add(y);let T=new vt(new Oe(.07,12,8),A);T.scale.set(.45,1.25,.25),T.position.set(-.08,.1,tt*.08),T.rotation.set(tt*.6,0,.6),Tt.add(T);let S=new Jn([new B(-.02,.07,tt*.035),new B(-.09,.22,tt*.07),new B(-.07,.38,tt*.085),new B(0,.47,tt*.06)]),x=new Pi(S,18,.019,7);{let P=x.attributes.position,$=8;for(let G=0;G<=18;G++){let q=S.getPointAt(G/18),j=1-G/18*.7;for(let z=0;z<$;z++){let V=G*$+z;P.setXYZ(V,q.x+(P.getX(V)-q.x)*j,q.y+(P.getY(V)-q.y)*j,q.z+(P.getZ(V)-q.z)*j)}}x.computeVertexNormals()}let O=Ut(x,(P,$,G)=>P.set(Math.floor(G*55)%2?"#3B2A1A":"#5A4330"));Tt.add(new vt(O,Le("#FFFFFF",{vertexColors:!0,shininess:50})))}let E=new fn;E.position.set(0,.38,0),qt.add(E);let Y=[];for(let[tt,Q]of[[.34,1],[-.38,0]])for(let ot of[-1,1]){let y=new De;if(y.position.set(tt,.76,ot*.09),H.add(y),Q){let $=new vt(new Oe(.075,12,10),A);$.scale.set(1.1,1.7,.6),$.position.set(.01,-.05,0),y.add($)}else{let $=new vt(new Oe(.1,14,10),A);$.scale.set(1.15,1.6,.55),$.position.set(0,-.07,0),y.add($)}let T=new vt(new ge(Q?.026:.03,Q?.04:.055,.36,10),A);T.position.y=-.2,y.add(T);let S=new De;S.position.y=-.38,y.add(S);let x=new vt(new Oe(.024,8,6),F);S.add(x);let O=new vt(new ge(.014,.02,.34,8),F);O.position.y=-.17,S.add(O);let P=new vt(new ge(.017,.024,.045,8),Le("#20150D",{shininess:60}));P.position.y=-.355,S.add(P),Y.push({hip:y,knee:S,front:Q,s:ot})}return qs(U),n.add(U),{root:U,body:H,neck:qt,head:Tt,tail:_t,legs:Y,collar:E,yaw:-.25,z:0,neckA:-.6}})(),ue=Ys();n.add(ue.root);let Ue=new fi(new ge(.22,.22,.05,22),new Dn({color:"#FFC93C",specular:"#FFF4C0",shininess:90,emissive:"#6B4A00",emissiveIntensity:.55}),40);Ue.castShadow=!0,Ue.count=0,Ue.frustumCulled=!1,n.add(Ue);let Pe=new De;{let U=new vt(new xo(.95,1.18,48),new yn({color:"#FFD23F",transparent:!0,opacity:.9,depthWrite:!1,side:je}));U.rotation.x=-Math.PI/2,U.position.y=.03;let H=new vt(new ei(.95,40),new yn({color:"#FFE38A",transparent:!0,opacity:.25,depthWrite:!1}));H.rotation.x=-Math.PI/2,H.position.y=.025;let A=new vt(new An(.2,.42,4),new Dn({color:"#FFB703",emissive:"#FF8A00",emissiveIntensity:.6,shininess:80}));A.rotation.x=Math.PI,A.position.y=1.9,Pe.add(U,H,A),Pe.userData={ring:U,arrow:A},Pe.visible=!1,n.add(Pe)}let Mt={phase:"fall",t:0,p:null,gz:null,coins:[],caught:!1,delivered:!1,met:!1,called:!1,coinsGot:0,camp:null,drop:null,focus:null,merW:new B,zoneW:new B,penW:new B},J=[];function mn(U){Mt.camp=U,fe.position.set(U.x,U.base,U.z),fe.rotation.y=U.rot,fe.updateMatrixWorld(!0),Mt.merW.copy(Ne.mer).applyMatrix4(fe.matrixWorld),Mt.zoneW.copy(Ne.zone).applyMatrix4(fe.matrixWorld),Mt.penW.copy(Ne.pen).applyMatrix4(fe.matrixWorld),ue.root.position.copy(Mt.merW),ue.root.rotation.y=U.rot,ue.yaw=U.rot,Pe.position.set(Mt.zoneW.x,f(Mt.zoneW.x,Mt.zoneW.z),Mt.zoneW.z),J=bt.map(([H,A,F])=>{let pt=new B(H,0,A).applyMatrix4(fe.matrixWorld);return{x:pt.x,z:pt.z,r:F}})}function We(U,H,A,F){for(let pt of F){let Pt=U-pt.x,yt=H-pt.z,Dt=A+pt.r,_t=Pt*Pt+yt*yt;if(_t<Dt*Dt&&_t>1e-8){let It=Math.sqrt(_t),qt=(Dt-It)/It;U+=Pt*qt,H+=yt*qt}}return[U,H]}let an=()=>L.concat(J),Bt=(U,H)=>U>1.5&&U<d-1.5&&Math.abs(H)<u-1.2&&M(U,H)<.55;function pn(U,H){(!Rt||Rt.id!==U.id)&&(Wt(),Rt=he(U));let A=On(H>>>0);mn(b[Math.floor(A()*b.length)]);let F=32+A()*56,pt=g(F)+(A()<.5?-3:3);Mt.p={x:F,z:pt,y:f(F,pt)+42,vx:0,vz:0,vy:-3,face:0,chute:0,rot:0,landT:0,hopPh:0,speed:0,water:!1,run:!1},Mt.coins=[];for(let Dt=0;Dt<20;Dt++){let _t=Dt*.62;Mt.coins.push({x:F+Math.cos(_t)*3.2,z:pt+Math.sin(_t)*3.2,y:Mt.p.y-4-Dt*1.55,taken:!1})}let Pt=60,yt=0;for(let Dt=0;Dt<400;Dt++){let _t=6+A()*(d-12),It=(A()-.5)*2*(u-2.5);if(!(Math.hypot(_t-F,It-pt)<36||Math.hypot(_t-Mt.camp.x,It-Mt.camp.z)<24||Math.abs(It-g(_t))<2.2||!Bt(_t,It))){Pt=_t,yt=It;break}}return Mt.gz={x:Pt,z:yt,y:0,vx:0,vz:0,face:A()*Re,state:"graze",t:0,gt:2.5,sus:0,stamina:4,ph:0,triedLeap:!1,tx:Pt,tz:yt,fx:1,fz:0,stuck:0},Object.assign(Mt,{phase:"fall",t:0,caught:!1,delivered:!1,met:!1,called:!1,coinsGot:0,drop:null,focus:null}),v.yaw=0,v.pitch=.5,v.dist=9,v.init=!1,St=0,Xt=0,ut=-1,{camp:b.indexOf(Mt.camp),gazelle:[Pt,yt],start:[F,pt]}}function Me(U,H){U.state="flee",U.t=0,U.stuck=0;let A=Mt.p,F=Math.hypot(U.x-A.x,U.z-A.z)||1;U.fx=(U.x-A.x)/F,U.fz=(U.z-A.z)/F,H.push("snort")}function Ie(U,H){let A=Mt.gz,F=Mt.p;A.t+=U;let pt=F.x-A.x,Pt=F.z-A.z,yt=Math.hypot(pt,Pt)||.001,Dt=Math.atan2(Pt,pt),_t=F.speed,It=Math.hypot(A.vx,A.vz)>.2;if(A.ph+=U*(A.state==="flee"?15:It?8:0),A.state!=="flee"&&A.state!=="leap"&&(A.stamina=Math.min(4,A.stamina+U*(A.state==="tired"?.5:.8))),!Mt.caught&&(A.state==="graze"||A.state==="look"||A.state==="walk"||A.state==="alert")){let Lt=yt<22?1+(1-yt/22)*1.6:0,Vt=A.state!=="graze",we=(_t>4?Vt?2.6:1.4:_t>.5?Vt?1.1:.06:0)*Lt;A.sus=Ze(A.sus+(we>0?we:-.3)*U,0,1)}let qt=(Lt,Vt,Tt)=>{let we=Lt-A.x,ye=Vt-A.z,Je=Math.hypot(we,ye);if(Je<.05)return A.vx=A.vz=0,Je;A.vx=Qe(A.vx,we/Je*Tt,6,U),A.vz=Qe(A.vz,ye/Je*Tt,6,U);let E=A.x+A.vx*U,Y=A.z+A.vz*U;return[E,Y]=We(E,Y,.42,an()),M(E,Y)<.7&&(A.x=E,A.z=Y),A.face=Tn(A.face,Math.atan2(A.vz,A.vx),7,U),Je};switch(A.state){case"graze":if(A.vx=A.vz=0,A.sus>.5)A.state="alert",A.t=0,H.push("snort");else if(A.t>A.gt)if(A.t=0,Math.random()<.72)A.state="look";else for(let Lt=0;Lt<12;Lt++){let Vt=A.x+(Math.random()-.5)*14,Tt=A.z+(Math.random()-.5)*10;if(Bt(Vt,Tt)&&Math.abs(Tt-g(Vt))>1.6){A.tx=Vt,A.tz=Tt,A.state="walk";break}}break;case"look":A.vx=A.vz=0,yt<26&&(A.face=Tn(A.face,Dt,4,U)),A.sus>.5?(A.state="alert",A.t=0,H.push("snort")):A.t>1.1&&(A.state="graze",A.t=0,A.gt=1.4+Math.random()*1.8);break;case"walk":if(A.sus>.5){A.state="alert",A.t=0,A.vx=A.vz=0,H.push("snort");break}(qt(A.tx,A.tz,1.1)<.4||A.t>6)&&(A.state="graze",A.t=0,A.vx=A.vz=0,A.gt=1.4+Math.random()*1.8);break;case"alert":A.vx=A.vz=0,A.face=Tn(A.face,Dt,8,U),A.sus>=1||yt<1.6?Me(A,H):A.sus<.3&&(A.state="graze",A.t=0,A.gt=1.2+Math.random()*1.2);break;case"flee":{A.stamina-=U;let Lt=8.2*(.55+.45*Math.max(0,A.stamina)/4),Vt=-pt/yt,Tt=-Pt/yt;Math.abs(A.z)>5.5&&(Tt-=Math.sign(A.z)*(Math.abs(A.z)-5.5)*.45),A.x<8&&(Vt+=(8-A.x)*.35),A.x>d-8&&(Vt-=(A.x-d+8)*.35);let we=Math.hypot(Vt,Tt)||1;A.fx=Qe(A.fx,Vt/we,5,U),A.fz=Qe(A.fz,Tt/we,5,U);let ye=Math.hypot(A.fx,A.fz)||1,Je=A.fx/ye,E=A.fz/ye,Y=A.x+Je*Lt*U,tt=A.z+E*Lt*U;[Y,tt]=We(Y,tt,.42,an());let Q=Math.hypot(Y-A.x,tt-A.z);M(Y,tt)<.7&&Math.abs(tt)<u+1&&Y>1&&Y<d-1&&(A.vx=(Y-A.x)/U,A.vz=(tt-A.z)/U,A.x=Y,A.z=tt),A.stuck=Q<Lt*U*.35?A.stuck+U:0,A.face=Tn(A.face,Math.atan2(E,Je),10,U),A.stuck>.35&&yt<10?(A.state="cornered",A.t=0,A.vx=A.vz=0):A.stamina<=0?(A.state="tired",A.t=0,H.push("tired")):yt>32&&A.t>1.5&&(A.state="graze",A.t=0,A.vx=A.vz=0,A.sus=.35,A.gt=1.5);break}case"tired":yt<9?qt(A.x-pt/yt*2,A.z-Pt/yt*2,2.3):A.vx=A.vz=0,A.stamina>3.2&&A.t>2.2&&(A.sus=.45,yt<6?Me(A,H):(A.state="graze",A.t=0));break;case"cornered":if(A.vx=A.vz=0,A.face=Tn(A.face,Dt,8,U),!A.triedLeap&&yt<4&&A.t>.4){let Lt=F.x+pt/yt*4.5,Vt=F.z+Pt/yt*4.5;Bt(Lt,Vt)||(Lt=F.x+pt/yt*3,Vt=Ze(F.z+Pt/yt*3,-(u-2),u-2)),Object.assign(A,{triedLeap:!0,state:"leap",t:0,from:[A.x,A.z],to:[Lt,Vt]}),H.push("snort")}else A.t>4&&yt>9&&(A.state="graze",A.t=0,A.sus=.4);break;case"leap":{let Lt=Math.min(1,A.t/.75);A.x=En(A.from[0],A.to[0],Lt),A.z=En(A.from[1],A.to[1],Lt),A.y=Math.sin(Lt*Math.PI)*1.5,A.vx=(A.to[0]-A.from[0])/.75,A.vz=(A.to[1]-A.from[1])/.75,A.face=Math.atan2(A.vz,A.vx),Lt>=1&&(A.y=0,Me(A,H));break}case"follow":{let Lt=F.x-Math.cos(F.face)*1.45,Vt=F.z-Math.sin(F.face)*1.45,Tt=Math.hypot(Lt-A.x,Vt-A.z),we=Math.min(7,Tt*3.2);Tt>.08?qt(Lt,Vt,we):A.vx=A.vz=0;break}case"pen":{let Lt=Math.hypot(Mt.penW.x-A.x,Mt.penW.z-A.z);Lt>.3?(A.vx=(Mt.penW.x-A.x)/Lt*1.3,A.vz=(Mt.penW.z-A.z)/Lt*1.3,A.x+=A.vx*U,A.z+=A.vz*U,A.face=Tn(A.face,Math.atan2(A.vz,A.vx),6,U)):A.vx=A.vz=0;break}}!Mt.caught&&["graze","look","walk","alert","tired","cornered"].includes(A.state)&&yt<1.2&&A.y<.25&&(Mt.caught=!0,A.state="follow",A.vx=A.vz=0,A.sus=0,Mt.focus={t:2.2,dist:5.2,yaw:Math.atan2(A.z-F.z,A.x-F.x)-Math.PI/2},H.push("catch"))}function N(U,H){let A=[],F=Mt.p;if(!F)return A;Mt.t+=U,v.yaw+=H.dyaw||0,v.pitch=Ze(v.pitch+(H.dpitch||0),.06,1.15);let pt=Math.cos(v.yaw),Pt=Math.sin(v.yaw),yt=-Math.sin(v.yaw),Dt=Math.cos(v.yaw),_t=pt*(H.jy||0)+yt*(H.jx||0),It=Pt*(H.jy||0)+Dt*(H.jx||0),qt=Math.hypot(_t,It);qt>1e-4&&(_t/=qt,It/=qt);let Lt=Ze(H.mag||0,0,1);if(Mt.phase!=="walk"){Mt.phase==="fall"?(F.rot+=U*8,F.vy=Math.max(F.vy-9.8*U,-16),Mt.t>1.1&&(Mt.phase="glide",A.push("chute"))):(F.chute=Math.min(1,F.chute+U*3),F.rot*=Math.pow(.015,U),F.vy+=(-2.4-F.vy)*Math.min(1,U*3));let Vt=(Mt.phase==="glide"?4.6:1.5)*Lt;F.vx=Qe(F.vx,_t*Vt,3,U),F.vz=Qe(F.vz,It*Vt,3,U),F.x=Ze(F.x+F.vx*U,2,d-2),F.z=Ze(F.z+F.vz*U,-(u+3),u+3),F.y+=F.vy*U,Lt>.1&&(F.face=Tn(F.face,Math.atan2(It,_t),5,U));for(let we of Mt.coins)!we.taken&&Math.hypot(we.x-F.x,we.z-F.z)<1.25&&Math.abs(we.y-(F.y+.55))<1.3&&(we.taken=!0,Mt.coinsGot++,A.push(["coin",we]));let Tt=f(F.x,F.z);F.y<=Tt&&(F.y=Tt,F.vy=0,F.rot=0,F.chute=0,F.landT=.35,Mt.phase="walk",Mt.drop={x:F.x+Math.cos(F.face)*1.2,z:F.z+Math.sin(F.face)*1.2,t:0,face:F.face},v.pitch=Math.min(v.pitch,.3),A.push("land"))}else{let Vt=Lt>.62&&!H.sneak,Tt=Lt<.08?0:Vt?5.6:2.2*Ze(Lt/.62,.4,1);F.water=Math.abs(F.z-g(F.x))<.95;let we=Tt*(F.water?.6:1);F.vx=Qe(F.vx,_t*we,10,U),F.vz=Qe(F.vz,It*we,10,U);let ye=F.x+F.vx*U,Je=F.z+F.vz*U,E=f(F.x,F.z),Y=(y,T)=>{let S=Math.hypot(y-F.x,T-F.z);return S<1e-6||(f(y,T)-E)/S<.8};Y(ye,Je)||(Y(ye,F.z)?Je=F.z:Y(F.x,Je)?ye=F.x:(ye=F.x,Je=F.z)),[ye,Je]=We(ye,Je,.4,an()),Mt.caught&&!Mt.delivered&&([ye,Je]=We(ye,Je,.4,[{x:Mt.gz.x,z:Mt.gz.z,r:.25}])),ye=Ze(ye,.6,d-.6),F.speed=Math.hypot(ye-F.x,Je-F.z)/U,F.run=Vt&&F.speed>3,F.x=ye,F.z=Je,F.y=f(ye,Je),F.speed>.3&&(F.face=Tn(F.face,Math.atan2(F.vz,F.vx),12,U));let tt=F.hopPh;F.hopPh=F.speed<.3?0:F.hopPh+F.speed*U*2.1,F.hopPh&&Math.floor(tt/Math.PI)!==Math.floor(F.hopPh/Math.PI)&&A.push(F.water?"splash":["step",F.run]),F.landT=Math.max(0,F.landT-U),Ie(U,A);let Q=Math.hypot(F.x-Mt.merW.x,F.z-Mt.merW.z);!Mt.called&&Q<24&&(Mt.called=!0,A.push("call"));let ot=Math.atan2(-Math.cos(Mt.camp.rot),-Math.sin(Mt.camp.rot));if(!Mt.met&&Q<4.2&&(Mt.met=!0,Mt.focus={t:3.4,dist:6.2,x:(F.x+Mt.merW.x)/2,z:(F.z+Mt.merW.z)/2,yaw:ot,talk:!0},A.push("meet")),Mt.caught&&!Mt.delivered&&Math.hypot(F.x-Mt.zoneW.x,F.z-Mt.zoneW.z)<1.7){Mt.delivered=!0,Mt.gz.state="pen";let y=(F.x+Mt.merW.x)/2,T=(F.z+Mt.merW.z)/2;Mt.focus={t:4.6,dist:6.6,x:y,z:T,yaw:ot,talk:!0},A.push("deliver")}}return Mt.drop&&(Mt.drop.t+=U),Mt.focus&&(Mt.focus.t-=U,Mt.focus.t<=0&&(Mt.focus=null)),Et(U),A}let v={yaw:0,pitch:.34,dist:5.2,init:!1,tgt:new B,pos:new B},at=new B,Ft=new B;function Et(U){let H=Mt.p,A=Mt.phase==="walk",F=Mt.focus;at.set(F&&F.x!=null?F.x:H.x,H.y+(A?1.45:.6),F&&F.z!=null?F.z:H.z),F&&(v.yaw=Tn(v.yaw,F.yaw,2.2,U));let pt=F?F.dist:A?6.2:9;v.init||(v.tgt.copy(at),v.dist=pt,v.init=!0),v.tgt.x=Qe(v.tgt.x,at.x,A?14:8,U),v.tgt.z=Qe(v.tgt.z,at.z,A?14:8,U),v.tgt.y=Qe(v.tgt.y,at.y,A?10:12,U),v.dist=Qe(v.dist,pt,3,U);let Pt=v.dist,yt=_t=>Ft.set(v.tgt.x-Math.cos(v.yaw)*Math.cos(v.pitch)*_t,v.tgt.y+Math.sin(v.pitch)*_t,v.tgt.z-Math.sin(v.yaw)*Math.cos(v.pitch)*_t);for(let _t=1;_t<=6;_t++){let It=_t/6;if(yt(Pt*It),Ft.y<f(Ft.x,Ft.z)+.45){Pt=Math.max(1.6,Pt*(It-1/6));break}}yt(Pt);for(let _t of L){if(!_t.tall)continue;let It=Ft.x-_t.x,qt=Ft.z-_t.z,Lt=It*It+qt*qt,Vt=_t.r+.35;if(Lt<Vt*Vt&&Ft.y<f(_t.x,_t.z)+6.5){let Tt=Math.sqrt(Lt)||.01;Ft.x=_t.x+It/Tt*Vt,Ft.z=_t.z+qt/Tt*Vt}}let Dt=f(Ft.x,Ft.z)+.45;Ft.y<Dt&&(Ft.y=Dt),v.pos.copy(Ft)}function Zt(){return(v.yaw*180/Math.PI%360+360)%360}let Jt=0,ut=-1,St=0,Xt=0,re=2,X=390,xt=844,rt=new B,kt=new B,Kt=new fn;Kt.rotation.order="YXZ";function te(U,H,A){X=U,xt=H,re=A,e.setPixelRatio(A),e.setSize(U,H,!1),r.aspect=U/H,r.updateProjectionMatrix()}let Ee=U=>Math.PI/2-U;function Nt(U,H){let A=Mt.p,F=Rt,pt=Mt.phase==="walk",Pt=pt?Math.abs(Math.sin(A.hopPh))*(A.run?.17:.08):0;F.root.position.set(A.x,A.y+Pt,A.z),F.turn=Tn(F.turn||Ee(A.face),Ee(A.face),14,H),F.root.rotation.y=F.turn,F.inner.rotation.z=-A.rot;let yt=A.landT>0?A.landT*2.4:0;pt&&A.speed>.3&&(yt+=(1-Math.abs(Math.sin(A.hopPh)))*.22-.07),F.inner.scale.set(1+.2*yt,1-.22*yt,1+.2*yt),F.inner.position.y=.55*(1-.22*yt);for(let[Lt,Vt]of F.feet.entries())Vt.position.y=-.49+(pt&&A.speed>.3?Math.max(0,Math.sin(A.hopPh*2+Lt*Math.PI))*.06:0);let Dt=Mt.phase==="fall";F.nextBlink-=H,F.nextBlink<0&&(F.blink=.14,F.nextBlink=2.5+Math.random()*2.5),F.blink=Math.max(0,F.blink-H);let _t=Dt?1.15:F.blink>0?.12:1;for(let Lt of F.eyes)Lt.scale.set(Dt?1.08:1,_t,1);for(let Lt of F.pupils)Lt.scale.setScalar(Dt?.72:1),Lt.position.x=0,Lt.position.y=pt?0:-.035;F.smile.visible=!Dt,F.ooh.visible=Dt,F.acc.userData.star&&(F.acc.userData.star.rotation.y=U*2);for(let Lt of[-1,1]){let Vt=F.acc.userData["tail"+Lt];Vt&&(Vt.rotation.x=.5+Math.sin(U*12+Lt)*.25)}if(F.fire){F.bodyMat.emissiveIntensity=.5+Math.sin(U*13)*.1+Math.sin(U*7.3)*.08;for(let Lt of F.flames){let Vt=.8+Math.sin(U*14+Lt.userData.ph*1.7)*.25;Lt.scale.set(1,Vt,1)}}let It=F.chute;if(It.visible=A.chute>.01,It.visible){It.position.copy(F.root.position),It.rotation.y=F.root.rotation.y;let Lt=A.chute,Vt=Lt<1?En(.15,1,Lt)+Math.sin(Lt*Math.PI)*.12:1;F.canopyHolder.scale.set(Vt,En(.4,1,Lt),Vt),F.canopyHolder.position.y=En(1,2.25,Lt),It.rotation.z=-(Math.hypot(A.vx,A.vz)*.05)+Math.sin(U*1.5)*.05,It.rotation.x=Math.sin(U*1.1)*.05;let Tt=F.lines.geometry.attributes.position,we=F.canopyHolder.position.y,ye=1.7*Math.sin(Math.PI*.42)*Vt,Je=we+1.7*Math.cos(Math.PI*.42)*.62*En(.4,1,Lt);for(let E=0;E<10;E++){let Y=E/10*Re,tt=E%2?.22:-.22;Tt.setXYZ(E*2,Math.cos(Y)*ye,Je,Math.sin(Y)*ye),Tt.setXYZ(E*2+1,tt,.85,0)}Tt.needsUpdate=!0}let qt=Mt.drop;if(F.drop.visible=!!(qt&&qt.t<2.4),F.drop.visible){let Lt=Ze(1-qt.t*1.2,.1,1);F.drop.position.set(qt.x,f(qt.x,qt.z)+.02,qt.z),F.drop.scale.set(1.05,.62*Lt,1.05),F.drop.material.opacity=Ze(1-(qt.t-1.4),0,1)}}function Xe(U,H){let A=Mt.gz,F=Ce,pt=A.state,Pt=Math.hypot(A.vx,A.vz)>.25,yt=pt==="flee"||pt==="leap",Dt=pt==="tired",_t=Pt?Math.abs(Math.sin(A.ph))*(yt?.07:.025):Dt?Math.sin(U*9)*.008:0;F.root.position.set(A.x,f(A.x,A.z)+A.y,A.z),F.body.position.y=_t,F.yaw=Tn(F.yaw,-A.face,yt?14:8,H),F.root.rotation.y=F.yaw,F.body.rotation.z=yt?Math.sin(A.ph*2)*.05:0;let It=pt==="graze"||pt==="pen"&&!Pt,qt=It?-2.05:Dt?-1.15:yt?-.95:pt==="alert"||pt==="look"||pt==="cornered"?-.32:-.6;F.neckA=Qe(F.neckA,qt,It?3:7,H),F.neck.rotation.z=F.neckA,F.head.rotation.z=It?.5+Math.sin(U*7)*.08:pt==="alert"||pt==="look"?.2:.35,F.head.rotation.y=pt==="look"||pt==="alert"||pt==="cornered"?Math.sin(U*1.6)*.25:0,F.tail.rotation.z=.5+(pt==="alert"||yt?.9:Math.sin(U*3)*.2);let Lt=yt?.6:Dt?.28:.36,Vt=pt==="leap";for(let Tt of F.legs){let we=Tt.front?Tt.s>0?0:Math.PI:(Tt.s>0?Math.PI:0)+(yt?.6:0);if(Vt){Tt.hip.rotation.z=Tt.front?.9:-.9,Tt.knee.rotation.z=Tt.front?-1.2:1.1;continue}if(Pt){let ye=Math.sin(A.ph+we);Tt.hip.rotation.z=ye*Lt,Tt.knee.rotation.z=(Tt.front?-1:1)*Math.max(0,-Math.cos(A.ph+we))*Lt*1.1}else Tt.hip.rotation.z=Qe(Tt.hip.rotation.z,0,8,H),Tt.knee.rotation.z=Qe(Tt.knee.rotation.z,0,8,H)}}function _e(U,H,A){let F=ue,pt=Mt.p,Pt=pt.x-Mt.merW.x,yt=pt.z-Mt.merW.z,Dt=Math.hypot(Pt,yt),_t=Dt<16||!!A,It=_t?Math.atan2(Pt,yt):Mt.camp.rot+.15*Math.sin(U*.3);Mt.focus&&Mt.focus.talk&&(It=Mt.camp.rot+Ze(Di(Mt.camp.rot,Math.atan2(Pt,yt)),-.7,.7)),F.yaw=Tn(F.yaw,It,3,H),F.root.rotation.y=F.yaw,F.root.position.set(Mt.merW.x,Mt.camp.base,Mt.merW.z),F.root.scale.y=1+Math.sin(U*1.7)*.007;let qt=!!(A&&A.shown<[...A.text].length);F.mouth.scale.y=qt?.25+Math.abs(Math.sin(U*15))*.9:.3,F.head.rotation.x=qt?Math.sin(U*5)*.05:0;let[Lt,Vt]=F.arms;if(Mt.delivered){for(let Tt of F.arms)Tt.sh.rotation.z=Qe(Tt.sh.rotation.z,Tt.s*2.5,6,H),Tt.el.rotation.x=Qe(Tt.el.rotation.x,-.3+Math.sin(U*9+Tt.s)*.3,8,H);F.root.position.y=Mt.camp.base+Math.abs(Math.sin(U*6))*.06}else if(Mt.caught&&_t)Vt.sh.rotation.z=Qe(Vt.sh.rotation.z,1.35,5,H),Vt.el.rotation.x=Qe(Vt.el.rotation.x,0,5,H),Vt.sh.rotation.x=Qe(Vt.sh.rotation.x,-.2,5,H),Lt.sh.rotation.z=Qe(Lt.sh.rotation.z,-.12,5,H);else if(_t&&Dt>2.5)Vt.sh.rotation.z=Qe(Vt.sh.rotation.z,2.55,5,H),Vt.el.rotation.x=Qe(Vt.el.rotation.x,0,5,H),Vt.el.rotation.z=Math.sin(U*8)*.45,Vt.sh.rotation.x=0,Lt.sh.rotation.z=Qe(Lt.sh.rotation.z,-.12,5,H);else for(let Tt of F.arms)Tt.sh.rotation.z=Qe(Tt.sh.rotation.z,Tt.s*.12,4,H),Tt.el.rotation.z=Qe(Tt.el.rotation.z,0,4,H),Tt.el.rotation.x=Qe(Tt.el.rotation.x,-.25,4,H),Tt.sh.rotation.x=0}function ie(){let U=Rt.rope;if(U.visible=Mt.caught&&!Mt.delivered,!U.visible)return;Rt.root.updateMatrixWorld(),Ce.root.updateMatrixWorld();let H=Mt.p,A=rt.set(H.x-Math.cos(H.face)*.3,Rt.root.position.y+.5,H.z-Math.sin(H.face)*.3),F=Ce.collar.getWorldPosition(kt),pt=A.clone().lerp(F,.5);pt.y=Math.min(A.y,F.y)-.25,U.geometry.dispose(),U.geometry=new Pi(new Ns(A.clone(),pt,F.clone()),18,.016,5)}function $e(U,H={}){let A=performance.now(),F=Jt?Ze((A-Jt)/1e3,0,.1):1/60;Jt=A;let pt=ut>=0?Ze(U-ut,0,.1):1/60;if(ut=U,o.time.value=U,Xt++,St=St*.97+(F>1/38?1:0)*.03,Xt>90&&St>.6&&re>1.01&&(te(X,xt,Math.max(1,re-.25)),St=0,Xt=0),!Rt||!Mt.p)return;Nt(U,pt),Xe(U,pt),_e(U,pt,H.dlg),ie();let Pt=0;for(let _t=0;_t<Mt.coins.length&&Pt<40;_t++){let It=Mt.coins[_t];It.taken||(Kt.position.set(It.x,It.y,It.z),Kt.rotation.set(Math.PI/2,U*3+_t,0),Kt.scale.setScalar(1),Kt.updateMatrix(),Ue.setMatrixAt(Pt++,Kt.matrix))}if(Ue.count=Pt,Ue.instanceMatrix.needsUpdate=!0,Pe.visible=Mt.caught&&!Mt.delivered,Pe.visible){let _t=.5+.5*Math.sin(U*5);Pe.userData.ring.scale.setScalar(1+_t*.08),Pe.userData.arrow.position.y=1.9+_t*.25,Pe.userData.arrow.rotation.y=U*2}for(let _t of Ot.flames){let It=.75+Math.sin(U*13+_t.userData.i*2)*.18+Math.sin(U*23+_t.userData.i)*.08;_t.scale.set(1+Math.sin(U*9+_t.userData.i)*.08,It,1),_t.position.y=.12+_t.userData.h0*It/2}for(let _t of Ot.glows)_t.material.opacity=.5+Math.sin(U*11)*.08;Ot.lantern.rotation.z=Math.sin(U*1.6)*.08;for(let _t of Qt){let It=_t.userData,qt=It.ax+Math.sin(U*.45+It.ph)*2.2,Lt=It.az+Math.sin(U*.7+It.ph*2)*.9,Vt=f(qt,Lt)+.7+Math.sin(U*1.3+It.ph)*.35+Math.abs(Math.sin(U*4+It.ph))*.12;_t.position.set(qt,Vt,Lt),_t.rotation.y=Math.cos(U*.45+It.ph)>0?-Math.PI/2:Math.PI/2;let Tt=Math.sin(U*22+It.ph)*1.1;It.l.rotation.y=Tt,It.r.rotation.y=-Tt}for(let _t of gt){let It=_t.userData,qt=U*It.sp+It.ph;_t.position.set(It.cx+Math.cos(qt)*It.rad,It.y+Math.sin(U+It.ph)*.8,It.cz+Math.sin(qt)*It.rad),_t.rotation.y=-qt;let Lt=Math.sin(U*8+It.ph)*.6;It.l.rotation.z=Lt,It.r.rotation.z=-Lt}for(let _t of Se.children)_t.position.x+=_t.userData.v*pt,_t.position.x>220&&(_t.position.x=-80);if(r.position.copy(v.pos),r.lookAt(v.tgt),H.shake>0){let _t=H.shake*.25;r.position.x+=(Math.random()-.5)*_t,r.position.y+=(Math.random()-.5)*_t}p.position.copy(r.position);{let _t=pe.userData.seeds,It=pe.geometry.attributes.position,qt=Mt.p;for(let Lt=0;Lt<_t.length;Lt++){let[Vt,Tt,we,ye]=_t[Lt];It.setXYZ(Lt,qt.x+Vt*.8+Math.sin(U*.3+ye)*.8,qt.y+Tt+Math.sin(U*.5+ye*2)*.3,qt.z+(we-4)*.9+Math.cos(U*.25+ye)*.6)}It.needsUpdate=!0}let yt=Math.round(Mt.p.x/.25)*.25,Dt=Math.round(Mt.p.z/.25)*.25;h.target.position.set(yt,Mt.p.y,Dt),h.position.set(yt+c.x*60,Mt.p.y+c.y*60,Dt+c.z*60),e.render(n,r)}let gn=new B;function ri(U,H,A){return gn.set(U,H,A).project(r),{x:(gn.x+1)/2,y:(1-gn.y)/2,vis:gn.z<1&&gn.z>-1}}function Zs(U=160){n.updateMatrixWorld();let H=new B;ue.head.getWorldPosition(H);let A=e.domElement.width,F=e.domElement.height,pt=new Fn(28,A/F,.05,1200),Pt=new B(Math.sin(ue.root.rotation.y),0,Math.cos(ue.root.rotation.y));pt.position.copy(H).addScaledVector(Pt,1.75).add(new B(0,.05,0)),pt.lookAt(H.x,H.y-.02,H.z),p.position.copy(pt.position),h.target.position.copy(H),h.position.set(H.x+c.x*60,H.y+c.y*60,H.z+c.z*60);let yt=[Rt&&Rt.root.visible,Ce.root.visible];Rt&&(Rt.root.visible=!1),Ce.root.visible=!1,e.render(n,pt),Rt&&(Rt.root.visible=yt[0]),Ce.root.visible=yt[1];let Dt=document.createElement("canvas");Dt.width=Dt.height=U;let _t=Math.min(A,F);return Dt.getContext("2d").drawImage(e.domElement,(A-_t)/2,(F-_t)/2,_t,_t,0,0,U,U),Dt.toDataURL("image/jpeg",.9)}function Es(){let U=e.domElement.width,H=e.domElement.height,A=U/H,F=-8,pt=d+8,Pt=(pt-F)/2,yt=Pt*A,Dt=new Os(-yt,yt,Pt,-Pt,1,600);Dt.position.set((F+pt)/2,300,0),Dt.up.set(1,0,0),Dt.lookAt((F+pt)/2,0,0);let _t=[fe,ue.root,Ce.root,Ue,Pe,Se,pe,...gt,...Qt,...Rt?[Rt.root,Rt.chute,Rt.drop,Rt.rope]:[]],It=_t.map(we=>we.visible);_t.forEach(we=>{we.visible=!1});let qt=n.fog.near,Lt=n.fog.far;n.fog.near=1e5,n.fog.far=2e5;let Vt=h.shadow.camera.right;Object.assign(h.shadow.camera,{left:-80,right:80,top:80,bottom:-80}),h.shadow.camera.updateProjectionMatrix(),h.target.position.set(d/2,0,0),h.position.set(d/2+c.x*120,c.y*120,c.z*120),e.render(n,Dt),Object.assign(h.shadow.camera,{left:-Vt,right:Vt,top:Vt,bottom:-Vt}),h.shadow.camera.updateProjectionMatrix(),n.fog.near=qt,n.fog.far=Lt,_t.forEach((we,ye)=>{we.visible=It[ye]});let Tt=document.createElement("canvas");return Tt.width=Math.round(U/Math.max(1,re/1.5)),Tt.height=Math.round(H/Math.max(1,re/1.5)),Tt.getContext("2d").drawImage(e.domElement,0,0,Tt.width,Tt.height),{canvas:Tt,x0:F,x1:pt,z0:-yt,z1:yt}}function Uo(){e.dispose()}return{setSize:te,enter:pn,step:N,render:$e,project:ri,portrait:Zs,mapShot:Es,heading:Zt,ground:f,S:Mt,cam:v,info:{VL:d,FLOOR:u,CAMPS:b},renderer:e,scene:n,camera:r,U:o,get pr(){return re}}}function Mf(i){i=i||{};let t=i.renderer,e=new Ls,n=new Ae("#C6D6DE");e.background=n,e.fog=new Fs(n,22,120);let s=new Fn(62,.5,.1,1600),r={time:{value:0},wind:{value:0}},o=On(9091),a=new zs("#D2E6FF","#5E7F48",1);e.add(a);let l=new B(.5,.75,.42).normalize(),c=new Bs("#FFE9C4",2.8);c.castShadow=!0,c.shadow.mapSize.set(2048,2048),Object.assign(c.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:1,far:160}),c.shadow.bias=-5e-4,c.shadow.normalBias=.03,c.shadow.radius=2.5,e.add(c,c.target);let h=Ql("#3A7FD6","#9CCBF2","#EFE7D6",new B(.6,.35,-.7));e.add(h);let p=tc(),d=new Ye({vertexColors:!0}),u=new Ye({vertexColors:!0,flatShading:!0}),g=13.3,b=95,m=0,f=Math.PI/180,M=(y,T)=>[Math.cos(T*f)*y,Math.sin(T*f)*y];function R(y){if(y<=g+1)return b;let T=40+55*Math.pow(1-Ze((y-g-1)/(72-g-1),0,1),1.12),S=36+4*(1-Ze((y-72)/48,0,1)),x=36*Math.pow(1-Ze((y-120)/60,0,1),1.25)-cn(180,230,y)*14;return En(En(T,S,cn(68,76,y)),x,cn(116,124,y))}let w=[],D=(y,T)=>{let S=Math.hypot(y,T);return R(S)+(Zi(y*.028+5,T*.028)-.5)*9*cn(g+2,g+12,S)*(1-cn(200,260,S)*.5)},I=(y,T)=>{let S=Math.hypot(y,T),x=D(y,T);for(let O of w){let P=Math.atan2(T,y),$=Math.abs(Di(O.a,P))*S;S>O.r0&&S<O.r1&&$<O.w&&(x-=O.depth*cn(O.w,O.w*.25,$)*cn(O.r0,O.r0+4,S)*cn(O.r1,O.r1-4,S))}return x};w.push({a:118.5*f,r0:108,r1:190,w:7,depth:13}),w.push({a:101*f,r0:22,r1:64,w:5.5,depth:11}),w.push({a:58*f,r0:26,r1:72,w:4.5,depth:1.6,water:!0});let _=[],C={trail:0,maze:1,ledge:2,bridge:3,stones:4};function k(y,T={}){let S=y.map(([V,W])=>{let[et,Ct]=M(V,W);return new B(et,0,Ct)}),x=new Jn(S,!1,"centripetal"),O=[],P=30;for(let V=0;V<(S.length-1)*P;V++){let W=V/((S.length-1)*P),et=x.getPoint(W);O.push([et.x,et.z,Math.floor(V/P)])}let $=x.getPoint(1);O.push([$.x,$.z,S.length-2]);let G=[],q=0;G.push(O[0]);for(let V=1;V<O.length;V++){let W=Math.hypot(O[V][0]-O[V-1][0],O[V][1]-O[V-1][1]);q+=W,q>=.8&&(G.push(O[V]),q=0)}let j={id:_.length,kind:T.kind||"trail",pts:G.map(([V,W,et])=>({x:V,z:W,wi:et,y:0,hw:T.hw||1.35,kind:T.kinds&&T.kinds[et]||T.kind||"trail"}))},z=j.pts.map(V=>D(V.x,V.z));if(j.pts.forEach((V,W)=>{let et=0,Ct=0;for(let dt=-12;dt<=12;dt++){let jt=Ze(W+dt,0,z.length-1);et+=z[jt],Ct++}V.y=et/Ct}),T.y0!=null||T.y1!=null){let V=j.pts.length-1,W=T.y0!=null?T.y0-j.pts[0].y:0,et=T.y1!=null?T.y1-j.pts[V].y:0;j.pts.forEach((Ct,dt)=>{Ct.y+=En(W,et,dt/(V||1))})}for(let V of j.pts)V.kind==="ledge"?V.hw=.72:V.kind==="bridge"?V.hw=.62:V.kind==="stones"&&(V.hw=.6);return _.push(j),j}let L=k([[166,12],[160,40],[153,68],[146,94],[142.5,114.6],[140,122.4],[134,146],[127,172],[121,194],[117,206]],{kinds:{4:"bridge"}}),K=[110,98,86,74],st=[212,224,236,248,260,272,284],Z=(y,T)=>M(K[y],st[T]),ht=(y,T)=>{let[S,x]=Z(y,T),O=0;for(let P=0;P<9;P++)O+=D(S+Math.cos(P)*4,x+Math.sin(P)*4);return O/9},nt=[],lt=new Set,it=On(77),ft=(y,T)=>y*10+T;(function y(T,S){lt.add(ft(T,S));let x=[[T+1,S],[T-1,S],[T,S+1],[T,S-1]].filter(([O,P])=>O>=0&&O<4&&P>=0&&P<7&&!lt.has(ft(O,P)));for(let O=x.length-1;O>0;O--){let P=Math.floor(it()*(O+1));[x[O],x[P]]=[x[P],x[O]]}for(let[O,P]of x)lt.has(ft(O,P))||(nt.push([[T,S],[O,P]]),y(O,P))})(0,0),nt.push([[1,2],[1,3]],[[2,4],[3,4]]);let mt=new Map;for(let y of nt){let T=ft(...y[0])*100+ft(...y[1]),S=ft(...y[1])*100+ft(...y[0]);!mt.has(T)&&!mt.has(S)&&mt.set(T,y)}let wt=[],Ht=new Map;for(let[[y,T],[S,x]]of mt.values()){let[O,P]=Z(y,T),[$,G]=Z(S,x),q=(O+$)/2+(it()-.5)*3,j=(P+G)/2+(it()-.5)*3,z=(W,et)=>[Math.hypot(W,et),Math.atan2(et,W)/f],V=k([z(O,P),z(q,j),z($,G)].map(([W,et])=>[W,(et+360)%360]),{kind:"maze",hw:1.25,y0:ht(y,T),y1:ht(S,x)});V.cells=[[y,T],[S,x]],wt.push(V);for(let W of V.cells)Ht.set(ft(...W),(Ht.get(ft(...W))||0)+1)}k([[117,206],[113,209],[K[0],st[0]]],{kind:"maze",hw:1.3,y0:L.pts[L.pts.length-1].y,y1:ht(0,0)});let ee=k([[K[3],st[6]],[70,287],[66,292]],{kind:"maze",hw:1.3,y0:ht(3,6)}),Se=[[66,292],[62,306],[58,334],[54,308],[50,336],[46,309],[43,330],[41,344],[40,0],[39.3,16],[38.6,30],[37.5,42],[36.6,53],[35.8,63],[34.4,75],[32.4,86],[31.2,92],[29.6,110.5],[27.4,122],[24,138],[20,154],[g+.4,168]],gt=k(Se,{y0:ee.pts[ee.pts.length-1].y,kinds:{7:"ledge",8:"ledge",9:"ledge",12:"stones",16:"bridge"}});{let y=gt.pts,T=0;for(let S=y.length-1;S>=0&&(S<y.length-1&&(T+=Math.hypot(y[S+1].x-y[S].x,y[S+1].z-y[S].z)),y[S].y=Math.max(y[S].y,b-T*.42),!(T>60));S--);y[y.length-1].y=b;for(let S=Math.max(1,y.length-80);S<y.length;S++)(y[S].y-y[S-1].y)/(Math.hypot(y[S].x-y[S-1].x,y[S].z-y[S-1].z)||1)>.24&&y[S].kind==="trail"&&(y[S].kind="stairs",y[S].hw=1.25)}let Qt=[];for(let y of[L,gt]){let T=0;for(;T<y.pts.length;){if(y.pts[T].kind!=="bridge"){T++;continue}let S=T;for(;S+1<y.pts.length&&y.pts[S+1].kind==="bridge";)S++;let x=y.pts[Math.max(0,T-1)],O=y.pts[Math.min(y.pts.length-1,S+1)],P=S-T+1,$=P>10?[Math.floor(P*.38),Math.floor(P*.66)]:[Math.floor(P/2)];for(let G=T;G<=S;G++){let q=(G-T+1)/(P+1),j=y.pts[G];j.y=En(x.y,O.y,q)-Math.sin(q*Math.PI)*.7,j.gap=$.some(z=>Math.abs(G-T-z)<=0)}Qt.push({seg:y,i:T,j:S,a:x,b:O}),T=S+1}}let ne=[];for(let y of[gt])for(let T=0;T<y.pts.length;T++){let S=y.pts[T];if(S.kind==="stones"&&(!ne.length||Math.hypot(S.x-ne[ne.length-1].x,S.z-ne[ne.length-1].z)>2.25)){let x=(o()-.5)*.5,O=-(y.pts[Math.min(T+1,y.pts.length-1)].z-S.z),P=y.pts[Math.min(T+1,y.pts.length-1)].x-S.x,$=Math.hypot(O,P)||1;ne.push({x:S.x+O/$*x,z:S.z+P/$*x,y:S.y+.05,r:.72})}}let pe=[];for(let y of _)y.pts.forEach((T,S)=>{T.seg=y,T.k=S,pe.push(T)});let zt=4,oe=new Map,ke=(y,T)=>y*10007+T;for(let y of pe){let T=ke(Math.floor(y.x/zt),Math.floor(y.z/zt));oe.has(T)||oe.set(T,[]),oe.get(T).push(y)}function xe(y,T,S,x=1){let O=Math.floor(y/zt),P=Math.floor(T/zt),$=null,G=1/0;for(let $t=-x;$t<=x;$t++)for(let Te=-x;Te<=x;Te++){let le=oe.get(ke(O+$t,P+Te));if(le)for(let ve of le){let de=(ve.x-y)**2+(ve.z-T)**2+(S!=null?Math.max(0,Math.abs(ve.y-S)-1.2)**2*9:0);de<G&&(G=de,$=ve)}}if(!$)return null;let q=$.seg.pts,j=q[Math.min($.k+1,q.length-1)],z=q[Math.max($.k-1,0)],V=Math.hypot(y-$.x,T-$.z),W=$.y,et=j.x-z.x,Ct=j.z-z.z,dt=Math.hypot(et,Ct)||1;et/=dt,Ct/=dt;for(let[$t,Te]of[[z,$],[$,j]]){let le=Te.x-$t.x,ve=Te.z-$t.z,de=le*le+ve*ve||1,se=Ze(((y-$t.x)*le+(T-$t.z)*ve)/de,0,1),Gt=Math.hypot(y-($t.x+le*se),T-($t.z+ve*se));Gt<V&&(V=Gt,W=En($t.y,Te.y,se))}let jt=(y-$.x)*-Ct+(T-$.z)*et;return{p:$,d:V,y:W,tx:et,tz:Ct,side:jt}}let fe=[];function Ne(y,T){let S=Math.hypot(y,T),x=I(y,T);if(S<g+1.5)return En(x,b,cn(g+1.5,g+.3,S));let O=xe(y,T,null,2);if(O&&O.d<O.p.hw+3.2){let P=O.p.kind;if(P!=="bridge"){if(P==="stones")x=Math.min(x,O.y-.55);else if(x=En(x,O.y-.04,cn(O.p.hw+3.2,O.p.hw+.5,O.d)),P==="ledge"){let $=S>Math.hypot(O.p.x,O.p.z)?1:-1,G=O.d-O.p.hw;G>0&&($>0?x=Math.min(x,O.y-cn(0,2.2,G)*11):x=Math.max(x,O.y+cn(.3,2.4,G)*4.5))}}}return x}let bt=(y,T,S)=>{let x=y.pts[Ze(T,0,y.pts.length-1)],O={x:x.x,z:x.z,y:x.y,name:S,seg:y,k:T,active:!1};return fe.push(O),O},Ot=(y,T)=>y.pts.findIndex(S=>S.kind===T);bt(L,3,"\u0633\u0641\u062D \u0627\u0644\u062C\u0628\u0644"),bt(L,Ot(L,"bridge")-7,"\u0642\u0628\u0644 \u0627\u0644\u062C\u0633\u0631"),bt(L,L.pts.length-2,"\u0628\u0627\u0628 \u063A\u0627\u0628\u0629 \u0627\u0644\u0645\u062A\u0627\u0647\u0629"),bt(gt,4,"\u0637\u0644\u0639\u0629 \u0627\u0644\u0632\u0643\u0632\u0627\u0643"),bt(gt,Ot(gt,"ledge")-6,"\u0642\u0628\u0644 \u062D\u0627\u0641\u0629 \u0627\u0644\u062C\u0631\u0641"),bt(gt,Ot(gt,"stones")-5,"\u0642\u0628\u0644 \u0627\u0644\u0633\u0627\u0642\u064A\u0629"),bt(gt,Ot(gt,"bridge")-6,"\u0642\u0628\u0644 \u0627\u0644\u062C\u0633\u0631 \u0627\u0644\u062B\u0627\u0646\u064A");let Rt=300;{let y=[];for(let q=-Rt;q<=Rt;q+=q*q<36100?1.7:9)y.push(q);let T=y.length,S=new Float32Array(T*T*3),x=new Float32Array(T*T*3);for(let q=0;q<T;q++)for(let j=0;j<T;j++){let z=y[j],V=y[q],W=(q*T+j)*3;S[W]=z,S[W+1]=Math.hypot(z,V)>200?I(z,V):Ne(z,V),S[W+2]=V}let O=(q,j)=>S[(Ze(j,0,T-1)*T+Ze(q,0,T-1))*3+1];for(let q=0;q<T;q++)for(let j=0;j<T;j++){let z=(q*T+j)*3,V=S[z],W=S[z+1],et=S[z+2],Ct=Math.hypot(V,et),dt=Zi(V*.06+3,et*.06);rn(Be,"#3E6E2E","#6E9A44",dt*1.2-.1);let jt=Math.hypot((O(j+1,q)-O(j-1,q))/(y[Ze(j+1,0,T-1)]-y[Ze(j-1,0,T-1)]),(O(j,q+1)-O(j,q-1))/(y[Ze(q+1,0,T-1)]-y[Ze(q-1,0,T-1)]));if(jt>.8&&(rn(yi,"#5E5A55","#A9A398",Pn(V*.35+et*.2,W*1.6)*.8+Pn(V*2,et*2+W)*.35),Be.lerp(yi,cn(.8,1.3,jt))),Ct<200){let $t=xe(V,et,W,1);$t&&$t.d<$t.p.hw+.9&&$t.p.kind!=="bridge"&&Be.lerp(yi.set("#9C7E55"),cn($t.p.hw+.9,$t.p.hw-.2,$t.d)*.85)}Ct<g+1&&Be.set("#9A9388"),W<-4&&Be.lerp(yi.set("#5D7F4A"),.4),x[z]=Be.r,x[z+1]=Be.g,x[z+2]=Be.b}let P=[];for(let q=0;q<T-1;q++)for(let j=0;j<T-1;j++){let z=q*T+j,V=z+1,W=z+T,et=W+1;P.push(z,W,V,V,W,et)}let $=new qe;$.setAttribute("position",new Ge(S,3)),$.setAttribute("color",new Ge(x,3)),$.setIndex(P),$.computeVertexNormals();let G=new vt($,d);G.receiveShadow=!0,e.add(G)}{let y=vi(64,256,(G,q,j)=>{G.clearRect(0,0,q,j);for(let z=0;z<j;z+=2){let V=6+Pn(z*.06,1)*8,W=q-6-Pn(z*.06,5)*8,et=G.createLinearGradient(V,0,W,0);et.addColorStop(0,"rgba(150,118,78,0)"),et.addColorStop(.2,"rgba(150,118,78,.95)"),et.addColorStop(.8,"rgba(140,108,70,.95)"),et.addColorStop(1,"rgba(140,108,70,0)"),G.fillStyle=et,G.fillRect(V,z,W-V,2)}for(let z=0;z<260;z++)G.fillStyle=`rgba(${90+z%5*20},${80+z%7*12},${60+z%3*10},.6)`,G.beginPath(),G.arc(8+Math.random()*(q-16),Math.random()*j,.5+Math.random()*1.4,0,Re),G.fill()},[1,1]),T=[],S=[],x=[],O=0;for(let G of _){let q=[],j=()=>{if(q.length<2){q=[];return}let z=0;q.forEach((V,W)=>{let et=q[Math.max(0,W-1)],Ct=q[Math.min(q.length-1,W+1)],dt=Ct.x-et.x,jt=Ct.z-et.z,$t=Math.hypot(dt,jt)||1,Te=-jt/$t,le=dt/$t,ve=V.hw+.35;if(W&&(z+=Math.hypot(V.x-q[W-1].x,V.z-q[W-1].z)/6),T.push(V.x+Te*ve,V.y+.035,V.z+le*ve,V.x-Te*ve,V.y+.035,V.z-le*ve),S.push(0,z,1,z),W){let de=O+(W-1)*2;x.push(de,de+2,de+1,de+1,de+2,de+3)}}),O+=q.length*2,q=[]};for(let z of G.pts)z.kind==="bridge"||z.kind==="stones"||z.kind==="stairs"?j():q.push(z);j()}let P=new qe;P.setAttribute("position",new Ge(new Float32Array(T),3)),P.setAttribute("uv",new Ge(new Float32Array(S),2)),P.setIndex(x),P.computeVertexNormals();let $=new vt(P,new Ye({map:y,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,side:je}));$.receiveShadow=!0,e.add($)}let he=ec();{let y=w[2],T=[],S=[],x=[],O=0;for(let G=y.r0;G<=y.r1;G+=1){let[q,j]=M(G,y.a/f),[z,V]=[Math.cos(y.a),Math.sin(y.a)],W=-V,et=z,Ct=I(q,j)+.5;if(T.push(q+W*2.2,Ct,j+et*2.2,q-W*2.2,Ct,j-et*2.2),S.push(0,G/4,1,G/4),O){let dt=(O-1)*2;x.push(dt,dt+2,dt+1,dt+1,dt+2,dt+3)}O++}let P=new qe;P.setAttribute("position",new Ge(new Float32Array(T),3)),P.setAttribute("uv",new Ge(new Float32Array(S),2)),P.setIndex(x),P.computeVertexNormals();let $=new vt(P,new Dn({color:"#4AA6D8",specular:"#FFFFFF",shininess:140,normalMap:he,transparent:!0,opacity:.9,side:je}));$.material.normalScale.set(.8,.8),e.add($)}let Wt=[],Ce=(y,T,S,x,O)=>{let P=[Ut(Yt(new ge(.13,.22,S*.45,6),0,S*.22,0),"#5A3E26")];for(let $=0;$<T;$++){let G=$/T,q=x*(1-G*.62),j=S*.42;P.push(Yt(Ut(new An(q,j,8,1),(z,V,W)=>rn(z,O?"#1F4A2B":"#24572F",O?"#3F7A43":"#4E8C46",.25+(W/j+.5)*.6+(Sn(V*7,W*3)-.5)*.25)),0,S*.32+$*S*.22+j/2,0,0,y()*3,0))}return wn(P)},ue={pine:Mi(new Ye({vertexColors:!0,flatShading:!0}),.006,2,r),tree:Mi(new Ye({vertexColors:!0,flatShading:!0}),.01,1.2,r)},Ue=()=>{let y=On(43),T=[Ut(Yt(new ge(.14,.22,2.6,6),0,1.3,0),"#5A3E26")];for(let[S,x,O,P]of[[0,3.1,0,1.35],[.7,2.6,.3,.95],[-.6,2.7,-.4,1],[.1,3.8,-.2,.9]])T.push(Yt(Ut(new Un(P,0),($,G,q)=>rn($,"#2C6B33","#6FAE4E",.3+q/P*.35+(y()-.5)*.3)),S,x,O));return wn(T)},Pe={pineA:Ce(On(5),4,7.5,2,!1),pineB:Ce(On(6),3,6,2.5,!0),oak:Ue()},Mt=[],J={pineA:[],pineB:[],oak:[],bush:[],rock:[],tuft:[],fern:[]},mn=(y,T,S)=>{if(Math.hypot(y,T)<g+3)return!1;let O=xe(y,T,null,2);if(O&&O.d<O.p.hw+S)return!1;for(let P of fe)if(Math.hypot(y-P.x,T-P.z)<4.6)return!1;return!0};for(let y=-195;y<=195;y+=2.3)for(let T=-195;T<=195;T+=2.3){if(Math.hypot(y,T)>192)continue;let x=y+(o()-.5)*2,O=T+(o()-.5)*2,P=xe(x,O,null,6),$=P?P.d:99;if($>26&&o()<.62||!mn(x,O,1.05))continue;let G=Ne(x,O),q=o(),j=.8+o()*.55;if(G>84){o()<.3&&mn(x,O,.4)?J.rock.push({x,y:G+.05,z:O,rx:o()*3,ry:o()*3,rz:o()*3,s3:[.8+o()*1.4,.5+o()*.8,.8+o()*1.4]}):o()<.35&&J.bush.push({x,y:G,z:O,ry:o()*Re,s:.5+o()*.6});continue}if(G>72){if(o()<.45)continue;j*=En(1,.6,cn(72,84,G))}if(Math.abs(Di(Math.atan2(O,x),m))<.55&&G+9*j>b-7)continue;G>48&&(q=q*.86);let z={x,y:G-.15,z:O,ry:o()*Re,s:j};if(q<.46?J.pineA.push(z):q<.82?J.pineB.push(z):J.oak.push({...z,s:j*.95}),Wt.push({x,z:O,r:.42*j,tall:1}),$<9&&o()<.5){let V=x+(o()-.5)*1.6,W=O+(o()-.5)*1.6;mn(V,W,.25)&&J.bush.push({x:V,y:Ne(V,W),z:W,ry:o()*Re,s:.5+o()*.7})}}for(let y of pe){if(y.kind==="bridge"||y.kind==="stones"||y.k%2)continue;let T=-(y.seg.pts[Math.min(y.k+1,y.seg.pts.length-1)].z-y.seg.pts[Math.max(y.k-1,0)].z),S=y.seg.pts[Math.min(y.k+1,y.seg.pts.length-1)].x-y.seg.pts[Math.max(y.k-1,0)].x,x=Math.hypot(T,S)||1;for(let O of[-1,1]){let P=y.hw+.15+o()*1.4,$=y.x+T/x*P*O,G=y.z+S/x*P*O;if(y.kind==="ledge"&&O*1!==0&&o()<.5)continue;let q=Ne($,G),j=o();j<.55?J.tuft.push({x:$,y:q-.02,z:G,ry:o()*Re,s:.6+o()*.7}):j<.78?J.fern.push({x:$,y:q,z:G,ry:o()*Re,s:.7+o()*.6}):j<.9?J.bush.push({x:$,y:q,z:G,ry:o()*Re,s:.4+o()*.5}):J.rock.push({x:$,y:q+.05,z:G,rx:o()*3,ry:o()*3,rz:o()*3,s3:[.5+o(),.4+o()*.5,.5+o()]})}}let We=wn([...Array(7)].map((y,T)=>{let S=T/7*Re,x=.55+T%3*.12,O=[],P=[];for(let G=0;G<6;G++){let q=G/6,j=(G+1)/6,z=Math.sin(q*Math.PI)*.09,V=Math.sin(j*Math.PI)*.09,W=[Math.cos(S)*x*q,Math.sin(q*Math.PI*.8)*.3,Math.sin(S)*x*q],et=[Math.cos(S)*x*j,Math.sin(j*Math.PI*.8)*.3,Math.sin(S)*x*j],Ct=-Math.sin(S),dt=Math.cos(S);O.push(W[0]-Ct*z,W[1],W[2]-dt*z,et[0]-Ct*V,et[1],et[2]-dt*V,W[0]+Ct*z,W[1],W[2]+dt*z,W[0]+Ct*z,W[1],W[2]+dt*z,et[0]-Ct*V,et[1],et[2]-dt*V,et[0]+Ct*V,et[1],et[2]+dt*V);for(let jt=0;jt<6;jt++)rn(Be,"#2F6B2C","#79B356",q+.2),P.push(Be.r,Be.g,Be.b)}let $=new qe;return $.setAttribute("position",new Ge(new Float32Array(O),3)),$.setAttribute("color",new Ge(new Float32Array(P),3)),$.computeVertexNormals(),$})),an=new Ye({vertexColors:!0,flatShading:!0});function Bt(y,T,S,x={}){let O=new Map,P=new fn,$=x.size||26;for(let G of S){let q=ke(Math.floor(G.x/$),Math.floor(G.z/$));O.has(q)||O.set(q,[]),O.get(q).push(G)}for(let G of O.values()){let q=new fi(y,T,G.length),j=0,z=0;G.forEach((W,et)=>{P.position.set(W.x,W.y,W.z),P.rotation.set(W.rx||0,W.ry||0,W.rz||0),W.s3?P.scale.set(...W.s3):P.scale.setScalar(W.s||1),P.updateMatrix(),q.setMatrixAt(et,P.matrix),j+=W.x,z+=W.z}),q.castShadow=!!x.cast,q.receiveShadow=!0,q.computeBoundingSphere(),e.add(q);let V=null;x.lod&&(V=new fi(x.lod,an,G.length),V.instanceMatrix=q.instanceMatrix,V.computeBoundingSphere(),V.visible=!1,e.add(V)),Mt.push({m:q,lo:V,x:j/G.length,z:z/G.length,far:x.far||105})}}let pn=(y,T,S)=>Ut(Yt(new An(T*.9,y*.95,6,1,!0),0,y*.62,0),(x,O,P)=>rn(x,S?"#1F4A2B":"#24572F",S?"#3F7A43":"#4E8C46",.3+(P/y+.5)*.5));Bt(Pe.pineA,ue.pine,J.pineA,{cast:!0,lod:pn(7.5,2,!1)}),Bt(Pe.pineB,ue.pine,J.pineB,{cast:!0,lod:pn(6,2.5,!0)}),Bt(Pe.oak,ue.tree,J.oak,{cast:!0,lod:Yt(Ut(new Un(1.5,0),"#3E7D3A"),0,3.1,0)}),Bt(sc(),u,J.bush,{size:30,far:70}),Bt(rc(),u,J.rock,{size:30,far:80}),Bt(oc(),Mi(new Ye({vertexColors:!0,side:je}),.5,0,r),J.tuft,{size:30,far:45}),Bt(We,Mi(new Ye({vertexColors:!0,side:je}),.35,0,r),J.fern,{size:30,far:50});let Me=new De;e.add(Me);{let y=vi(256,128,(T,S,x)=>{T.clearRect(0,0,S,x);let O=On(3);for(let P=0;P<22;P++){let $=S*(.18+O()*.64),G=x*(.42+O()*.28),q=18+O()*30,j=T.createRadialGradient($,G,0,$,G,q);j.addColorStop(0,"rgba(255,255,255,.95)"),j.addColorStop(.6,"rgba(250,252,255,.55)"),j.addColorStop(1,"rgba(240,246,255,0)"),T.fillStyle=j,T.beginPath(),T.arc($,G,q,0,Re),T.fill()}});for(let T=0;T<46;T++){let S=o()*Re,x=230+o()*330,O=new Ci(new di({map:y,transparent:!0,opacity:.75+o()*.25,depthWrite:!1,fog:!1})),P=60+o()*90;O.scale.set(P,P*.42,1),O.position.set(Math.cos(S)*x,18+o()*40,Math.sin(S)*x),Me.add(O)}}{let y=[],T=(Gt,ce,me,on,xn,Ni)=>{let Bn=new An(on,me,28,10),us=Bn.attributes.position;for(let oi=0;oi<us.count;oi++){let Ji=us.getX(oi),$i=us.getY(oi),Kn=us.getZ(oi),ds=Math.atan2(Kn,Ji),Ui=($i+me/2)/me,zi=1+(Pn(ds*2.2+xn,Ui*3.5)-.5)*.45*(1-Ui*.4);us.setXYZ(oi,Ji*zi,$i,Kn*zi)}Bn=Ut(Bn,(oi,Ji,$i,Kn)=>{let ds=($i+me/2)/me,Ui=Pn(Math.atan2(Kn,Ji)*6+xn,ds*9);rn(oi,"#A9BCD2","#D3DEEA",ds*.9+Ui*.35),Ni<1&&ds>Ni-.06+Ui*.08&&oi.set("#F4F8FC")}),y.push(Yt(Bn,Gt,me/2-20,ce))};for(let Gt=0;Gt<22;Gt++){let ce=Gt/22*Re+.2+Math.sin(Gt*3.1)*.08,me=560+Gt%3*110;Math.abs(Di(ce,0))<.4||T(Math.cos(ce)*me,Math.sin(ce)*me,95+Gt%4*28,190+Gt%3*50,Gt*2.1,Gt%3?.7:2)}let S=new vt(wn(y),new Ye({vertexColors:!0,flatShading:!0,fog:!1}));e.add(S);let x=230,O=980,P=260,$=Gt=>Math.sin(Gt*.011)*22+Math.sin(Gt*.027+1)*8,G=(Gt,ce)=>{let me=Math.abs(ce-$(Gt));return-26+cn(18,110,me)*70+Zi(Gt*.012,ce*.012)*10*cn(10,60,me)-cn(x+60,x,Gt)*0},q=90,j=40,z=new qe,V=[],W=[],et=[];for(let Gt=0;Gt<=j;Gt++)for(let ce=0;ce<=q;ce++){let me=x+(O-x)*ce/q,on=-P+2*P*Gt/j,xn=G(me,on),Ni=Math.abs(on-$(me));if(V.push(me,xn,on),rn(Be,"#C9A56B","#E0C28A",Zi(me*.02,on*.02)),Ni<40&&Be.lerp(yi.set("#5E9A3E"),cn(40,14,Ni)),xn>20&&Be.lerp(yi.set("#B8946A"),cn(20,40,xn)*.7),W.push(Be.r,Be.g,Be.b),ce<q&&Gt<j){let Bn=Gt*(q+1)+ce;et.push(Bn,Bn+q+1,Bn+1,Bn+1,Bn+q+1,Bn+q+2)}}z.setAttribute("position",new Ge(new Float32Array(V),3)),z.setAttribute("color",new Ge(new Float32Array(W),3)),z.setIndex(et),z.computeVertexNormals(),e.add(new vt(z,new Ye({vertexColors:!0})));let Ct=[],dt=[];for(let Gt=0;Gt<=160;Gt++){let ce=x+(O-x)*Gt/160,me=$(ce),on=4.5+Math.sin(Gt*.3)*1.2;if(Ct.push(ce,-25.3,me-on,ce,-25.3,me+on),Gt){let xn=(Gt-1)*2;dt.push(xn,xn+1,xn+2,xn+1,xn+3,xn+2)}}let jt=new qe;jt.setAttribute("position",new Ge(new Float32Array(Ct),3)),jt.setIndex(dt),jt.computeVertexNormals(),e.add(new vt(jt,new Dn({color:"#3D9FD8",specular:"#FFFFFF",shininess:120,side:je})));let $t=wn([Ut(Yt(new ge(.3,.45,9,5),0,4.5,0),"#8B6A3E"),Ut(Yt(new Un(1.6,0),0,9.2,0,0,0,0,1,.55,1),"#3A7F34"),...[0,1,2,3,4,5].map(Gt=>Ut(Yt(Yt(Yt(new An(.7,4.6,3),0,2.3,0),0,0,0,1.9,0,0),0,9.3,0,0,Gt/6*Re,0),"#4C9A3E"))]),Te=[],le=On(12);for(let Gt=0;Gt<260;Gt++){let ce=x+20+le()*(O-x-40),me=le()<.5?-1:1,on=$(ce)+me*(7+le()*26);Te.push([ce,G(ce,on),on,le()*Re,.8+le()*.5])}let ve=new fi($t,new Ye({vertexColors:!0,flatShading:!0}),Te.length),de=new fn;Te.forEach(([Gt,ce,me,on,xn],Ni)=>{de.position.set(Gt,ce,me),de.rotation.set(0,on,0),de.scale.setScalar(xn),de.updateMatrix(),ve.setMatrixAt(Ni,de.matrix)}),e.add(ve);let se=[];for(let[Gt,ce]of[[330,16],[345,19],[420,-18],[520,15]]){let me=$(Gt)+ce,on=G(Gt,me);se.push(Ut(Yt(new An(3.4,3.4,4),Gt,on+1.7,me,0,.6,0),(xn,Ni,Bn)=>xn.set(Bn>1?"#F4ECDC":"#3B2A20")))}e.add(new vt(wn(se),new Ye({vertexColors:!0,flatShading:!0})))}{let y=[];for(let P of Qt){P.seg.pts.slice(P.i,P.j+1).forEach((G,q)=>{if(G.gap)return;let j=P.seg.pts[Math.min(G.k+1,P.seg.pts.length-1)],z=Math.atan2(j.z-G.z,j.x-G.x);y.push(Yt(Ut(new Ke(.5,.07,1.45),(V,W,et,Ct)=>rn(V,"#7A5634","#A57B4C",Sn(q,Ct*3)*.6+(et>0?.3:0))),G.x,G.y-.035,G.z,0,-z,0))});for(let G of[-1,1])for(let q of[.95,.45]){let j=[];for(let z=P.i-1;z<=P.j+1;z++){let V=P.seg.pts[Ze(z,0,P.seg.pts.length-1)],W=P.seg.pts[Ze(z+1,0,P.seg.pts.length-1)],et=P.seg.pts[Ze(z-1,0,P.seg.pts.length-1)],Ct=W.x-et.x,dt=W.z-et.z,jt=Math.hypot(Ct,dt)||1;j.push(new B(V.x-dt/jt*.72*G,V.y+q,V.z+Ct/jt*.72*G))}y.push(Ut(new Pi(new Jn(j),j.length*2,.03,5),"#C9A46B"))}for(let G of[P.a,P.b])for(let q of[-1,1]){let j=G.seg.pts[Math.min(G.k+1,G.seg.pts.length-1)],z=G.seg.pts[Math.max(G.k-1,0)],V=j.x-z.x,W=j.z-z.z,et=Math.hypot(V,W)||1;y.push(Yt(Ut(new ge(.09,.11,1.5,6),"#5C3A1A"),G.x-W/et*.8*q,G.y+.6,G.z+V/et*.8*q))}}for(let P of pe)if(P.kind==="stairs"){let $=P.seg.pts[Math.min(P.k+1,P.seg.pts.length-1)],G=P.seg.pts[Math.max(P.k-1,0)],q=Math.atan2($.z-G.z,$.x-G.x);y.push(Yt(Ut(new Ke(.9,.5,2.7),(j,z,V,W)=>rn(j,"#7C766B","#ABA393",V+.4+Sn(P.k,W*5)*.3)),P.x,P.y-.25,P.z,0,-q+(Sn(P.k,3)-.5)*.08,0))}for(let P of pe)if(P.kind==="ledge"&&P.k%2===0){let $=P.seg.pts[Math.min(P.k+1,P.seg.pts.length-1)],G=P.seg.pts[Math.max(P.k-1,0)],q=$.x-G.x,j=$.z-G.z,z=Math.hypot(q,j)||1,V=-j/z,W=q/z;Math.hypot(P.x+V,P.z+W)>Math.hypot(P.x,P.z)&&(V=-V,W=-W);let et=.9+Sn(P.k,1)*.8;y.push(Yt(Ut(new mi(1,0).scale(et,et*(1.3+Sn(P.k,5)),et*.8),(Ct,dt,jt,$t)=>rn(Ct,"#5E5A55","#A9A398",.35+jt*.2+Sn(dt*5+P.k,$t*5)*.3)),P.x+V*(P.hw+et*1),P.y+et*.3,P.z+W*(P.hw+et*1),Sn(P.k,2)*.4,Sn(P.k,4)*3,0)),Wt.push({x:P.x+V*(P.hw+et),z:P.z+W*(P.hw+et),r:et*.8,tall:1}),P.k%6===0&&y.push(Yt(Ut(new mi(.25,0),"#8A847A"),P.x-V*(P.hw-.05),P.y+.08,P.z-W*(P.hw-.05)))}for(let P of ne)y.push(Yt(Ut(new ge(P.r,P.r*1.12,1.4,9),($,G,q)=>rn($,"#7F7A72","#B7B1A6",q+.6+Sn(G*9,P.x)*.2)),P.x,P.y-.7,P.z,0,o()*3,0));{let P=fe[0],$=L.pts[8],G=Math.atan2($.z-P.z,$.x-P.x),q=-Math.sin(G),j=Math.cos(G);for(let W of[-1,1])y.push(Yt(Ut(new ge(.11,.13,3.4,7),"#5C3A1A"),P.x+Math.cos(G)*3+q*2*W,P.y+1.7,P.z+Math.sin(G)*3+j*2*W));y.push(Yt(Ut(new Ke(.2,.2,4.6),"#4F3420"),P.x+Math.cos(G)*3,P.y+3.35,P.z+Math.sin(G)*3,0,-G,0));let z=vi(512,128,(W,et,Ct)=>{W.fillStyle="#7A4E26",W.fillRect(0,0,et,Ct),W.strokeStyle="#E8C170",W.lineWidth=8,W.strokeRect(6,6,et-12,Ct-12),W.fillStyle="#FFF3D6",W.font='900 60px -apple-system, "Geeza Pro", system-ui, sans-serif',W.textAlign="center",W.textBaseline="middle";try{W.direction="rtl"}catch{}W.fillText("\u26F0\uFE0F \u0637\u0631\u064A\u0642 \u0627\u0644\u0642\u0645\u0629",et/2,Ct/2+4)}),V=new vt(new Yn(3.4,.85),new Ye({map:z,side:je}));V.position.set(P.x+Math.cos(G)*3,P.y+2.85,P.z+Math.sin(G)*3),V.rotation.y=-G-Math.PI/2,e.add(V)}for(let P of fe){for(let $=0;$<6;$++)y.push(Yt(Ut(new mi(.22-$*.025,0),"#9D978C"),P.x+1.6,P.y+.15+$*.25,P.z+1.1));y.push(Yt(Ut(new ge(.05,.06,2.4,6),"#5C3A1A"),P.x-1.4,P.y+1.2,P.z-1.1))}let T=new Map;{let P=new Map;for(let z of wt){let[V,W]=z.cells.map(et=>ft(...et));P.has(V)||P.set(V,[]),P.has(W)||P.set(W,[]),P.get(V).push(W),P.get(W).push(V)}let $=ft(0,0),G=ft(3,6),q=new Map([[$,-1]]),j=[$];for(;j.length;){let z=j.shift();if(z===G)break;for(let V of P.get(z)||[])q.has(V)||(q.set(V,z),j.push(V))}for(let z=G;q.get(z)!==-1&&q.has(z);z=q.get(z))T.set(q.get(z),z)}let S=vi(256,64,(P,$,G)=>{P.fillStyle="#8B5A2B",P.fillRect(0,0,$,G),P.strokeStyle="#E8C170",P.lineWidth=4,P.strokeRect(4,4,$-8,G-8),P.fillStyle="#FFF3D6",P.font='900 34px -apple-system, "Geeza Pro", system-ui, sans-serif',P.textAlign="center",P.textBaseline="middle";try{P.direction="rtl"}catch{}P.fillText("\u2B05 \u0644\u0644\u0642\u0645\u0629",$/2,G/2+2)}),x=0;for(let[P,$]of T){if((Ht.get(P)||0)<3||x%3===2){x++;continue}x++;let G=Math.floor(P/10),q=P%10,j=Math.floor($/10),z=$%10,[V,W]=Z(G,q),[et,Ct]=Z(j,z),dt=Math.atan2(Ct-W,et-V),jt=V+Math.cos(dt+.9)*1.9,$t=W+Math.sin(dt+.9)*1.9,Te=Ne(jt,$t);y.push(Yt(Ut(new ge(.06,.07,1.9,6),"#5C3A1A"),jt,Te+.95,$t));let le=new vt(new Yn(1.1,.28),new Ye({map:S,side:je}));le.position.set(jt+Math.cos(dt)*.45,Te+1.65,$t+Math.sin(dt)*.45),le.rotation.y=-dt+Math.PI,e.add(le)}for(let[P,$]of Ht){if($!==1||P===ft(0,0)||P===ft(3,6))continue;let[G,q]=Z(Math.floor(P/10),P%10),j=Ne(G,q),z=o()*Re;y.push(Yt(Ut(new ge(.32,.38,4.2,8),(V,W,et)=>V.set(Math.abs(et)>2?"#C9A36B":"#5A3E26")),G,j+.35,q,0,z,Math.PI/2)),Wt.push({x:G,z:q,r:.9})}let O=new vt(wn(y),new Ye({vertexColors:!0,side:je}));O.castShadow=!0,O.receiveShadow=!0,e.add(O)}let Ie=fe.map(y=>{let T=new qe;T.setAttribute("position",new Ge(new Float32Array([0,.32,0,0,-.32,0,1.05,0,0]),3)),T.computeVertexNormals();let S=new vt(T,new Ye({color:"#F4F1EA",side:je}));return S.position.set(y.x-1.4,y.y+2.05,y.z-1.1),e.add(S),S}),N=[];for(let y of[L,gt])for(let T=6;T<y.pts.length-4;T+=14){let S=y.pts[T];S.kind==="trail"&&N.push({x:S.x,y:S.y+.9,z:S.z,taken:!1})}for(let[y,T]of Ht){if(T!==1||y===ft(0,0)||y===ft(3,6))continue;let[S,x]=Z(Math.floor(y/10),y%10),O=xe(S,x,null,2),P=O?O.p.x:S,$=O?O.p.z:x,G=O?O.y:Ne(S,x);for(let q=0;q<4;q++){let j=O.p.seg.pts[Ze(O.p.k+(q-1.5)*2|0,0,O.p.seg.pts.length-1)];N.push({x:j.x,y:j.y+.9,z:j.z,taken:!1})}}let v=new fi(new ge(.22,.22,.05,20),new Dn({color:"#FFC93C",specular:"#FFF4C0",shininess:90,emissive:"#6B4A00",emissiveIntensity:.55}),N.length);v.castShadow=!0,v.frustumCulled=!1,e.add(v);let at=new De;at.position.set(0,b,0),e.add(at);let Ft=gt.pts[gt.pts.length-1],Et=Math.atan2(Ft.z,Ft.x),Zt=[],Jt=[],ut={flag:null,flagBase:null,bell:null,lanterns:[],water:null,drops:null,leaves:null,kiosk:null,cups:[]};{let y=vi(512,512,(At,be,nn)=>{At.fillStyle="#B9B1A3",At.fillRect(0,0,be,nn);for(let un=0;un<12;un++){let hn=un*22,In=hn+22,Zn=Math.max(6,Math.round(Re*(hn+11)/34));for(let Si=0;Si<Zn;Si++){let eu=Si/Zn*Re,nu=(Si+1)/Zn*Re,mc=.82+(un*7+Si*3)%5*.04;At.fillStyle=`rgb(${Math.round(196*mc)},${Math.round(186*mc)},${Math.round(168*mc)})`,At.beginPath(),At.arc(be/2,nn/2,In-1.5,eu+.01,nu-.01),At.arc(be/2,nn/2,Math.max(0,hn+1.5),nu-.01,eu+.01,!0),At.closePath(),At.fill()}}}),T=new vt(new ei(g,64),new Ye({map:y}));T.rotation.x=-Math.PI/2,T.position.y=.03,T.receiveShadow=!0,at.add(T);let S=[];for(let At=0;At<64;At++){let be=At/64*Re;Math.abs(Di(be,Et))<.16||Math.abs(Di(be,m))<.2||S.push(Yt(Ut(new Ke(1.36,.72,.55),(nn,un,hn,In)=>rn(nn,"#8E877B","#B8AF9F",.4+hn+Sn(At,In*4)*.3)),Math.cos(be)*(g-.1),.36,Math.sin(be)*(g-.1),0,-be+Math.PI/2,0))}for(let At=0;At<10;At++)S.push(Yt(Ut(new Ke(.46,.08,3.6),(be,nn,un,hn)=>rn(be,"#7A5634","#A57B4C",Sn(At,hn)*.5+.3)),g-.3+At*.48,.05,0));for(let At of[-1,1]){S.push(Yt(Ut(new Ke(4.8,.07,.07),"#6B4423"),g+2.1,.95,At*1.8));for(let be=0;be<5;be++)S.push(Yt(Ut(new ge(.05,.05,1,6),"#5C3A1A"),g+.1+be*1.1,.5,At*1.8))}S.push(Yt(Ut(new Ke(.07,.07,3.6),"#6B4423"),g+4.5,.95,0));for(let At=-1;At<=1;At++)S.push(Yt(Ut(new ge(.06,.06,1,6),"#5C3A1A"),g+4.5,.5,At*1.6));for(let At=0;At<4;At++)S.push(Yt(Ut(new ge(.12,.14,7,6),"#4F3420"),g+.5+At*1.3,-3.4,(At%2?1:-1)*1.5));S.push(Ut(new zn([new ct(.001,0),new ct(2.35,0),new ct(2.45,.08),new ct(2.4,.62),new ct(2.15,.66),new ct(2.1,.22),new ct(.001,.22)],40),(At,be,nn)=>rn(At,"#9F988C","#D6CFC2",nn*1.5+.2))),S.push(Ut(new zn([new ct(.001,.2),new ct(.32,.2),new ct(.22,.9),new ct(.18,1.4),new ct(.7,1.55),new ct(.72,1.68),new ct(.15,1.72),new ct(.12,2.15),new ct(.2,2.3),new ct(.001,2.38)],24),(At,be,nn)=>rn(At,"#A79F92","#DCD5C8",nn*.4)));let x=236*f,O=Math.cos(x)*9.2,P=Math.sin(x)*9.2,$=Math.atan2(-Math.cos(x),-Math.sin(x)),G=[],q=At=>G.push(At),j=(At,be)=>At.set(Math.floor((be+1.6)/.4)%2?"#A97B4C":"#93683E");q(Yt(Ut(new Ke(3.2,2.4,.12),j),0,1.2,-1.05));for(let At of[-1,1])q(Yt(Ut(new Ke(.12,2.4,2.2),"#8A5F36"),At*1.55,1.2,0));q(Yt(Ut(new Ke(3.5,.12,2.7),"#6B4423"),0,2.45,.15)),q(Yt(Ut(new Ke(3.1,1,.5),(At,be,nn)=>At.set(nn>.42?"#5C3A1A":Math.floor((be+1.55)/.31)%2?"#A97B4C":"#93683E")),0,.5,.85));for(let At=0;At<8;At++)q(Yt(Ut(new Ke(.44,.04,.9),At%2?"#FAF3E6":"#2E8B57"),-1.54+At*.44,2.3,1.75,.35,0,0));q(Yt(Ut(new Ke(2.6,.06,.35),"#6B4423"),0,1.6,-.9));for(let At=0;At<5;At++)q(Yt(Ut(new ge(.07,.06,.22,8),["#2E86AB","#C0612B","#F2E3C6","#9B2335","#E8C170"][At]),-1+At*.5,1.75,-.9));let z=new De;z.add(new vt(wn(G),new Ye({vertexColors:!0,side:je}))),z.position.set(O,0,P),z.rotation.y=$,at.add(z),z.traverse(At=>{At.isMesh&&(At.castShadow=!0,At.receiveShadow=!0)}),ut.kiosk=z;let V=new Dn({color:"#C9A13B",specular:"#FFE9A8",shininess:90}),W=new vt(new zn([new ct(.001,0),new ct(.14,0),new ct(.16,.05),new ct(.22,.2),new ct(.2,.42),new ct(.12,.5),new ct(.14,.56),new ct(.06,.62),new ct(.001,.64)],18),V);W.position.set(-1,1,.85),z.add(W);let et=new Dn({color:"#B5562A",specular:"#FFFFFF",shininess:120,transparent:!0,opacity:.85});for(let At=0;At<6;At++){let be=new vt(new ge(.045,.032,.1,10),et);be.position.set(-.3+At*.2,1.05,.9),z.add(be),ut.cups.push(be)}let Ct=Ys({thobe:"#EDE6DA",bisht:null,shmagh:"#1E1E1E",beard:"#2E2A26",beads:!1});Ct.root.position.set(.35,0,-.25),z.add(Ct.root),Jt.push({m:Ct,base:Ct.root.position.clone(),home:0,kind:"seller"}),Zt.push({id:"tea",x:O-Math.cos(x)*2.1,z:P-Math.sin(x)*2.1,r:2.3,label:"\u2615 \u0627\u0634\u0631\u0628 \u0634\u0627\u064A"});let dt=(At,be)=>{let nn=Math.cos(At)*be,un=Math.sin(At)*be,hn=-At-Math.PI/2,In=-Math.sin(At),Zn=Math.cos(At);S.push(Yt(Ut(new Ke(2.2,.1,.55),"#8A5F36"),nn,.45,un,0,hn,0)),S.push(Yt(Ut(new Ke(2.2,.5,.08),"#7A5232"),nn+Math.cos(At)*.3,.75,un+Math.sin(At)*.3,0,hn,0));for(let Si of[-.9,.9])S.push(Yt(Ut(new Ke(.1,.45,.5),"#6B4423"),nn+In*Si,.22,un+Zn*Si,0,hn,0));return Wt.push({x:nn,z:un,r:.75},{x:nn+In*.8,z:un+Zn*.8,r:.5},{x:nn-In*.8,z:un-Zn*.8,r:.5}),[nn,un,In,Zn]};dt(185*f,6.6),dt(150*f,6.6),dt(30*f,6.6);let jt=()=>{let At=new vt(new ge(.035,.026,.08,10),et);return At.position.set(0,-.43,.05),At},$t=(At,be,nn,un,hn)=>{let In=Math.cos(be)*nn,Zn=Math.sin(be)*nn;At.root.position.set(In,0,Zn),At.root.rotation.y=Math.atan2(un[0]-In,un[1]-Zn),at.add(At.root);let Si={m:At,base:At.root.position.clone(),kind:hn,ph:o()*6};return Jt.push(Si),Wt.push({x:In,z:Zn,r:.42}),Si},Te=Ys({thobe:"#D8CDB8",bisht:"#2D3A4E",shmagh:"#C8102E",beads:!1,beard:"#5A524C"}),le=Ys({thobe:"#F4F1EA",bisht:null,shmagh:"#F4F1EA",beard:"none",beads:!0}),ve=Ys({thobe:"#CFE0E8",bisht:null,shmagh:"#C8102E",beard:"#3A3430",beads:!1}),de=[Math.cos(221*f)*6.2,Math.sin(221*f)*6.2];$t(Te,212*f,6.9,de,"tea"),$t(le,229*f,6.9,de,"tea"),$t(ve,219*f,5.2,[O,P],"stand"),Te.arms[1].el.add(jt()),le.arms[1].el.add(jt()),Zt.push({id:"chat",x:de[0],z:de[1],r:2.2,label:"\u{1F5E3}\uFE0F \u0633\u0648\u0644\u0641 \u0648\u064A\u0627\u0647\u0645"});let se=118*f,Gt=Math.cos(se)*9,ce=Math.sin(se)*9,me=-Math.sin(se),on=Math.cos(se);for(let At of[-1,1])S.push(Yt(Ut(new Ke(.18,2.8,.18),"#5C3A1A"),Gt+me*.9*At,1.4,ce+on*.9*At));S.push(Yt(Ut(new Ke(2.3,.2,.24),"#4F3420"),Gt,2.8,ce,0,-se-Math.PI/2,0));let xn=new De;xn.position.set(Gt,2.7,ce),at.add(xn);let Ni=new Dn({color:"#B07A2E",specular:"#FFE2A0",shininess:100}),Bn=new vt(new zn([new ct(.001,-.05),new ct(.18,-.06),new ct(.24,-.25),new ct(.3,-.55),new ct(.42,-.72),new ct(.4,-.76),new ct(.001,-.76)],24),Ni);Bn.castShadow=!0;let us=new vt(new Oe(.07,10,8),Le("#3B2A1A"));us.position.y=-.7,xn.add(Bn,us),ut.bell={g:xn,swing:0,v:0},Zt.push({id:"bell",x:Gt*.84,z:ce*.84,r:2.2,label:"\u{1F514} \u062F\u0643 \u0627\u0644\u062C\u0631\u0633"});let oi=300*f,Ji=Math.cos(oi)*10.2,$i=Math.sin(oi)*10.2;S.push(Yt(Ut(new ge(.08,.1,9,8),"#D9D9D9"),Ji,4.5,$i)),S.push(Yt(Ut(new Oe(.16,10,8),"#E8C170"),Ji,9.05,$i));let Kn=new Yn(3.2,2,20,10);Kn.translate(1.6,0,0);let ds=new Float32Array(Kn.attributes.position.count*3);for(let At=0;At<Kn.attributes.position.count;At++){let be=Kn.attributes.position.getY(At);Be.set(be>.33?"#CE1126":be>-.33?"#FFFFFF":"#141414"),Math.abs(be)<.33&&Math.abs(Kn.attributes.position.getX(At)-1.6)<.35&&Math.abs(be)<.2&&Be.set("#007A3D"),ds.set([Be.r,Be.g,Be.b],At*3)}Kn.setAttribute("color",new Ge(ds,3));let Ui=new vt(Kn,new Ye({vertexColors:!0,side:je}));Ui.position.set(Ji+.1,7.9,$i),Ui.castShadow=!0,at.add(Ui),ut.flag=Ui,ut.flagBase=Float32Array.from(Kn.attributes.position.array);let zi=new De;zi.position.set(g+3.9,0,0),at.add(zi);for(let At=0;At<3;At++){let be=At/3*Re,nn=new vt(new ge(.03,.03,1.3,6),Le("#3B3B3B"));nn.position.set(Math.cos(be)*.25,.6,Math.sin(be)*.25),nn.rotation.set(Math.sin(be)*.38,0,-Math.cos(be)*.38),zi.add(nn)}let lc=new vt(new ge(.09,.13,1.1,16),V);lc.rotation.z=Math.PI/2-.15,lc.position.set(.1,1.32,0),zi.add(lc);let cc=new vt(new ge(.14,.14,.06,16),Le("#1A2A3A",{shininess:160,specular:"#FFFFFF"}));cc.rotation.z=Math.PI/2-.15,cc.position.set(.66,1.4,0),zi.add(cc),qs(zi),ut.scope=zi,Zt.push({id:"scope",x:g+3.1,z:0,r:1.8,label:"\u{1F52D} \u0628\u0627\u0648\u0639 \u0628\u0627\u0644\u062A\u0644\u0633\u0643\u0648\u0628"}),Zt.push({id:"fountain",x:0,z:0,r:3.4,label:"\u{1FA99} \u0627\u0631\u0645\u0650 \u0639\u0645\u0644\u0629 \u0628\u0627\u0644\u0646\u0627\u0641\u0648\u0631\u0629"});let hc=[45,145,255,330].map(At=>At*f);for(let At of hc){let be=Math.cos(At)*12.2,nn=Math.sin(At)*12.2;S.push(Yt(Ut(new ge(.06,.08,3.2,6),"#2E2E2E"),be,1.6,nn));let un=new De;un.position.set(be,3,nn);let hn=new vt(new ge(.11,.11,.26,8),new yn({color:"#FFD36B"})),In=new Ci(new di({map:p,color:"#FFC14D",transparent:!0,opacity:.7,depthWrite:!1,blending:si}));In.scale.setScalar(1.2),un.add(hn,In),at.add(un),ut.lanterns.push(un)}let uc=[];for(let At=0;At<4;At++){let be=hc[At],nn=hc[(At+1)%4],un=Di(be,nn);un<0&&(un+=Re);for(let hn=1;hn<9;hn++){let In=be+un*hn/9,Zn=Math.sin(hn/9*Math.PI)*.6;uc.push([Math.cos(In)*12.2,3.05-Zn,Math.sin(In)*12.2,hn])}}let dc=new fi(new Oe(.07,8,6),new yn({color:"#FFFFFF"}),uc.length),fc=new fn,Sf=["#FF5D8F","#FFD23F","#7FD1FF","#8DE26B"];uc.forEach(([At,be,nn,un],hn)=>{fc.position.set(At,be,nn),fc.updateMatrix(),dc.setMatrixAt(hn,fc.matrix),dc.setColorAt(hn,Be.set(Sf[hn%4]))}),at.add(dc);for(let At of[80,175,280,350]){let be=At*f,nn=Math.cos(be)*11,un=Math.sin(be)*11;S.push(Yt(Ut(new ge(.7,.6,.5,12),"#8E877B"),nn,.25,un));for(let hn=0;hn<9;hn++)S.push(Yt(Ut(new Un(.13,0),["#FF5D8F","#FFD23F","#FFFFFF","#B28DFF"][hn%4]),nn+Math.cos(hn)*.4,.58,un+Math.sin(hn)*.4))}let pc=new vt(wn(S),new Ye({vertexColors:!0,side:je}));pc.castShadow=!0,pc.receiveShadow=!0,at.add(pc);let Xh=[62,100,200,320].map(At=>{let be=At*f;return{x:Math.cos(be)*11.6,y:b-.1,z:Math.sin(be)*11.6,ry:o()*Re,s:.9}});Bt(Pe.pineA,ue.pine,Xh,{cast:!0,size:100,far:400});for(let At of Xh)Wt.push({x:At.x,z:At.z,r:.5,tall:1});let zo=new vt(new ei(2.12,40),new Dn({color:"#4AA6D8",specular:"#FFFFFF",shininess:140,normalMap:he,transparent:!0,opacity:.88}));zo.rotation.x=-Math.PI/2,zo.position.y=.55,at.add(zo),ut.water=zo;let qh=140,wf=new Float32Array(qh*3),Yh=[];for(let At=0;At<qh;At++)Yh.push([o()*Re,o(),.5+o()*.5]);let Zh=new qe;Zh.setAttribute("position",new Ge(wf,3)),ut.drops=new ys(Zh,new rs({size:.16,map:p,color:"#E6F6FF",transparent:!0,opacity:.9,depthWrite:!1})),ut.drops.userData.seed=Yh,ut.drops.frustumCulled=!1,at.add(ut.drops);let Jh=220,bf=new Float32Array(Jh*3),$h=[];for(let At=0;At<Jh;At++)$h.push([o()*60-30,o()*8,o()*60-30,o()]);let Kh=new qe;Kh.setAttribute("position",new Ge(bf,3)),ut.leaves=new ys(Kh,new rs({size:.22,map:p,color:"#A8D46A",transparent:!0,opacity:0,depthWrite:!1})),ut.leaves.userData.seed=$h,ut.leaves.frustumCulled=!1,at.add(ut.leaves);let Qh=70,Af=new Float32Array(Qh*6),jh=[];for(let At=0;At<Qh;At++)jh.push([o()*50-25,o()*9-1,o()*50-25,.5+o()]);let tu=new qe;tu.setAttribute("position",new Ge(Af,3)),ut.streaks=new Ds(tu,new _s({color:"#FFFFFF",transparent:!0,opacity:0,depthWrite:!1})),ut.streaks.userData.seed=jh,ut.streaks.frustumCulled=!1,at.add(ut.streaks),Wt.push({x:0,z:0,r:2.6,tall:1});for(let At of[-1.1,0,1.1])Wt.push({x:O+Math.cos(x+Math.PI/2)*At-Math.cos(x)*0,z:P+Math.sin(x+Math.PI/2)*At,r:1.05});Wt.push({x:Gt+me*.9,z:ce+on*.9,r:.25},{x:Gt-me*.9,z:ce-on*.9,r:.25},{x:Ji,z:$i,r:.3});for(let At of[80,175,280,350]){let be=At*f;Wt.push({x:Math.cos(be)*11,z:Math.sin(be)*11,r:.75})}}function St(y){let T=y==="wolf",S=new De,x=new De;S.add(x);let O=Le(T?"#7E8088":"#4E3626",{shininess:8}),P=Le(T?"#C9CACF":"#6E5038",{shininess:8}),$=Le(T?"#3E4048":"#2B1D12",{shininess:20}),G=T?.95:1,q=T?.72:.62,j=T?.22:.33,z=new vt(new Oe(1,22,14),O);z.scale.set(G/2,j,j*(T?.85:.9)),z.position.y=q,x.add(z);let V=new vt(new Oe(1,16,10),P);if(V.scale.set(G/2.3,j*.6,j*.75),V.position.set(0,q-j*.4,0),x.add(V),!T){let le=new vt(new Ke(G*.8,.12,.08),$);le.position.set(0,q+j*.95,0),x.add(le)}let W=new De;W.position.set(G/2+.05,q+(T?.16:0),0),x.add(W);let et=new vt(new Oe(T?.16:.2,16,12),O);et.scale.set(1.2,.95,.9),W.add(et);let Ct=new vt(new ge(T?.05:.09,T?.09:.13,T?.26:.22,10),T?P:O);Ct.rotation.z=-Math.PI/2,Ct.position.set(T?.24:.25,-.04,0),W.add(Ct);let dt=new vt(new Oe(T?.035:.07,10,8),$);dt.position.set(T?.37:.36,-.03,0),T||dt.scale.set(.5,1,1.1),W.add(dt);for(let le of[-1,1]){let ve=new vt(new Oe(.025,8,6),new yn({color:T?"#F2C14E":"#1A0E08"}));ve.position.set(.12,.06,le*.09),W.add(ve);let de=new vt(new An(T?.06:.05,T?.16:.1,6),O);if(de.position.set(-.02,T?.17:.15,le*.08),de.rotation.set(le*.25,0,T?-.1:.4),W.add(de),!T){let se=new vt(new An(.018,.12,6),Le("#F4EFE6"));se.position.set(.36,-.04,le*.08),se.rotation.z=.6,W.add(se)}}let jt=new De;jt.position.set(-G/2,q+.05,0),x.add(jt);let $t=new vt(T?new pi(.06,.36,4,8):new ge(.015,.02,.18,6),O);$t.position.y=T?-.2:-.09,jt.add($t),jt.rotation.z=T?.9:.4;let Te=[];for(let[le,ve]of[[G*.33,1],[-G*.33,0]])for(let de of[-1,1]){let se=new De;se.position.set(le,q-j*.4,de*j*.55),x.add(se);let Gt=new vt(new ge(.045,.06,(q-j*.4)*.55,8),O);Gt.position.y=-((q-j*.4)*.55)/2,se.add(Gt);let ce=new De;ce.position.y=-(q-j*.4)*.55,se.add(ce);let me=new vt(new ge(.03,.04,(q-j*.4)*.45,8),T?O:$);me.position.y=-((q-j*.4)*.45)/2,ce.add(me),Te.push({hip:se,knee:ce,front:ve,s:de})}return qs(S),e.add(S),{root:S,body:x,head:W,tail:jt,legs:Te,yaw:0}}let Xt=[],re=(y,T)=>{let S=y.pts[Ze(T,0,y.pts.length-1)];return{x:S.x,z:S.z,y:S.y}},X=(y,T,S=0)=>{let x=St(y);Xt.push({kind:y,m:x,home:T,x:T.x+S,z:T.z,y:T.y,vx:0,vz:0,face:o()*Re,state:"idle",t:o()*2,ph:0,cool:0,tx:T.x,tz:T.z,charge:null})};X("wolf",re(L,Math.floor(L.pts.length*.22)),0),X("wolf",re(L,Math.floor(L.pts.length*.22)+4),1.5),X("wolf",re(gt,Ot(gt,"ledge")-26),0),X("wolf",re(gt,Ot(gt,"ledge")-22),1.2);{let y=wt[Math.floor(wt.length*.4)],T=wt[Math.floor(wt.length*.75)];X("boar",re(y,Math.floor(y.pts.length/2))),X("boar",re(T,Math.floor(T.pts.length/2)))}let xt=null,rt={phase:"climb",t:0,p:null,cp:0,coinsGot:0,summit:null,scope:!1,fall:0,focus:null,best:0,startT:0};function kt(y,T,S,x){let O=Math.hypot(y,T);if(O<g-.45||O<g+1.3&&Math.abs(Di(Math.atan2(T,y),Et))<.24)return{y:b,kind:"plaza"};if(y>g-1&&y<g+4.35&&Math.abs(T)<1.65)return{y:b+.09,kind:"deck"};let P=xe(y,T,S,1);if(!P)return{y:null,edge:"wall"};let $=P.p;if($.kind==="stones"){for(let G of ne)if(Math.hypot(y-G.x,T-G.z)<G.r+(x?.5:0))return{y:G.y,kind:"stone",stone:G};return P.d<2.5?{y:null,edge:"fall",water:!0,q:P}:{y:null,edge:"wall",q:P}}if(P.d<=$.hw){if($.kind==="bridge"&&$.gap){let G=(y-$.x)*P.tx+(T-$.z)*P.tz;if(Math.abs(G)<.32)return{y:null,edge:"fall",q:P}}return{y:P.y,kind:$.kind,q:P}}return $.kind==="bridge"?{y:null,edge:"fall",q:P}:$.kind==="ledge"?{y:null,edge:Math.hypot(y,T)>Math.hypot($.x,$.z)?"fall":"wall",q:P}:{y:null,edge:"wall",q:P}}function Kt(y,T={}){if(!xt||xt.id!==y.id){if(xt)for(let O of[xt.root,xt.chute,xt.drop,xt.rope])e.remove(O);xt=ac(y,p),e.add(xt.root,xt.chute,xt.drop,xt.rope),xt.turn=0,xt.blink=0,xt.nextBlink=2}for(let O of N)O.taken=!1;fe.forEach((O,P)=>{O.active=P===0,Ie[P].material.color.set(P===0?"#FFD23F":"#F4F1EA")}),rt.cp=0,rt.coinsGot=0,rt.summit=null,rt.scope=!1,rt.fall=0,rt.focus=null,rt.t=0,rt.phase="climb";let S=fe[0],x=L.pts[6];rt.p={x:S.x,z:S.z,y:S.y,vx:0,vz:0,vy:0,air:!1,face:Math.atan2(x.z-S.z,x.x-S.x),speed:0,run:!1,hopPh:0,landT:0,stun:0,rot:0,chute:0,ground:S.y},T.at==="summit"&&Object.assign(rt.p,{x:-g+2.5,z:2,y:b,ground:b});for(let O of Xt)O.x=O.home.x,O.z=O.home.z,O.state="idle",O.cool=0;return H.yaw=rt.p.face,H.pitch=.24,H.init=!1,Dt=-1,r.wind.value=0,{checkpoints:fe.length,coins:N.length,trail:Math.round(pe.length*.8)}}function te(y){let T=fe[rt.cp],S=rt.p,x=T.seg.pts[Math.min(T.k+6,T.seg.pts.length-1)];Object.assign(S,{x:T.x,z:T.z,y:T.y,vx:0,vz:0,vy:0,air:!1,stun:0,rot:0,ground:T.y,face:Math.atan2(x.z-T.z,x.x-T.x)}),rt.fall=0,H.yaw=S.face,H.init=!1,y.push(["respawn",T.name])}function Ee(y,T,S,x,O){let P=kt(T,S,y.y);if(P.y!=null&&Math.abs(P.y-y.y)<1.1)return{x:T,z:S,y:P.y};if(!O&&P.edge==="fall"&&!y.air)return{fall:!0,water:P.water};if(P.q){let $=T-y.x,G=S-y.z,q=$*P.q.tx+G*P.q.tz,j=y.x+P.q.tx*q,z=y.z+P.q.tz*q,V=kt(j,z,y.y);if(V.y!=null&&Math.abs(V.y-y.y)<1.1)return{x:j,z,y:V.y}}return null}function Nt(y,T){let S=[],x=rt.p;if(!x)return S;if(rt.t+=y,H.yaw+=T.dyaw||0,H.pitch=Ze(H.pitch+(T.dpitch||0),.06,1.15),rt.scope)return H.scopeYaw=Ze((H.scopeYaw||0)+(T.dyaw||0)*.35,-.9,.9),H.scopePitch=Ze((H.scopePitch||-.2)+(T.dpitch||0)*-.3,-.55,.2),pt(y),S;let O=Math.cos(H.yaw),P=Math.sin(H.yaw),$=-Math.sin(H.yaw),G=Math.cos(H.yaw),q=O*(T.jy||0)+$*(T.jx||0),j=P*(T.jy||0)+G*(T.jx||0),z=Math.hypot(q,j);z>1e-4&&(q/=z,j/=z);let V=Ze(T.mag||0,0,1),W=rt.summit;if(W&&W.phase==="lift")return gn(y,S),pt(y),S;if(rt.fall>0)return rt.fall+=y,x.vy-=22*y,x.y+=x.vy*y,x.x+=x.vx*y*.5,x.z+=x.vz*y*.5,x.rot+=y*7,rt.fall>1.25&&te(S),pt(y),S;x.stun>0&&(x.stun-=y,V=0);let et=V>.62&&!T.sneak,Ct=V<.08?0:et?5.6:2.3*Ze(V/.62,.4,1),dt=0,jt=0;W&&W.wind>0&&(dt=W.wdx*W.wind*1.6,jt=W.wdz*W.wind*1.6);let $t=x.air?3:10,Te=x.air?Math.max(Ct,x.airSpd||0):Ct;if(x.vx=Qe(x.vx,q*Te+dt,$t,y),x.vz=Qe(x.vz,j*Te+jt,$t,y),T.jump&&!x.air&&x.stun<=0){x.air=!0,x.vy=6,x.ground=x.y,S.push("jump");let se=Math.hypot(x.vx,x.vz);se>.4&&se<3.4&&(x.vx*=3.4/se,x.vz*=3.4/se),x.airSpd=V>.08?Math.max(3.4,se):0}let le=x.x+x.vx*y,ve=x.z+x.vz*y;if([le,ve]=Xe(le,ve,.4),x.air){x.vy-=14*y;let se=x.y+x.vy*y,Gt=kt(le,ve,x.y,!0);if(Gt.y!=null&&se<=Gt.y&&x.vy<=0&&Gt.y-x.y<.9){if(x.x=le,x.z=ve,x.y=Gt.y,x.air=!1,x.vy=0,x.landT=.25,S.push(Gt.kind==="stone"?"landStone":"land"),Gt.stone){let ce=Math.hypot(x.x-Gt.stone.x,x.z-Gt.stone.z),me=.35;ce>me&&(x.x=Gt.stone.x+(x.x-Gt.stone.x)/ce*me,x.z=Gt.stone.z+(x.z-Gt.stone.z)/ce*me),x.vx*=.2,x.vz*=.2}}else Gt.y==null&&Gt.edge==="wall"||(x.x=le,x.z=ve),x.y=se;x.air&&x.y<x.ground-1.6&&(rt.fall=.01,S.push(["fall",Gt.water?"water":"drop"]))}else{let se=Ee(x,le,ve,S);se&&se.fall?(x.x=le,x.z=ve,rt.fall=.01,x.vy=0,S.push(["fall",se.water?"water":"drop"])):se?(x.speed=Math.hypot(se.x-x.x,se.z-x.z)/y,x.x=se.x,x.z=se.z,x.y=se.y):(x.speed=0,x.vx*=.5,x.vz*=.5)}x.run=et&&x.speed>3,x.speed>.3&&!x.air?x.face=Tn(x.face,Math.atan2(x.vz-jt,x.vx-dt),12,y):x.air&&Math.hypot(x.vx,x.vz)>.5&&(x.face=Tn(x.face,Math.atan2(x.vz,x.vx),8,y));let de=x.hopPh;x.hopPh=x.speed<.3||x.air?0:x.hopPh+x.speed*y*2.1,x.hopPh&&Math.floor(de/Math.PI)!==Math.floor(x.hopPh/Math.PI)&&S.push(["step",x.run,kt(x.x,x.z,x.y).kind]),x.landT=Math.max(0,x.landT-y),fe.forEach((se,Gt)=>{Gt>rt.cp&&Math.hypot(x.x-se.x,x.z-se.z)<3.2&&Math.abs(x.y-se.y)<2.5&&(rt.cp=Gt,se.active=!0,Ie[Gt].material.color.set("#FFD23F"),S.push(["checkpoint",se.name,Gt]))});for(let se of N)!se.taken&&Math.hypot(se.x-x.x,se.z-x.z)<1&&Math.abs(se.y-(x.y+.6))<1.2&&(se.taken=!0,rt.coinsGot++,S.push(["coin",se]));return _e(y,S),!W&&Math.hypot(x.x,x.z)<g-1&&Math.abs(x.y-b)<1&&(rt.summit={t:0,phase:"wait",wind:0,wdx:1,wdz:.3},rt.phase="summit",S.push("summit")),rt.summit&&$e(y,S),pt(y),S}function Xe(y,T,S){for(let x of Wt){let O=y-x.x,P=T-x.z,$=S+x.r,G=O*O+P*P;if(G<$*$&&G>1e-8){let q=Math.sqrt(G),j=($-q)/q;y+=O*j,T+=P*j}}return[y,T]}function _e(y,T){let S=rt.p;for(let x of Xt){x.t+=y,x.cool=Math.max(0,x.cool-y);let O=S.x-x.x,P=S.z-x.z,$=Math.hypot(O,P),G=Math.abs(S.y-x.y),q=S.run?14:S.speed>.4?9:5.5,j=x.kind==="wolf",z=(V,W,et)=>{let Ct=V-x.x,dt=W-x.z,jt=Math.hypot(Ct,dt);if(jt<.05)return x.vx=x.vz=0,jt;x.vx=Qe(x.vx,Ct/jt*et,6,y),x.vz=Qe(x.vz,dt/jt*et,6,y);let $t=Ee(x,x.x+x.vx*y,x.z+x.vz*y,T,!0);return $t?(x.x=$t.x,x.z=$t.z,x.y=$t.y):(x.vx*=.3,x.vz*=.3),x.face=Tn(x.face,Math.atan2(x.vz,x.vx),8,y),jt};switch(x.state){case"idle":if(x.cool<=0&&$<q&&G<3&&rt.fall<=0&&!rt.summit){x.state="notice",x.t=0,T.push([j?"growl":"grunt",x]);break}if(x.t>3+Math.random()*3){x.t=0;let V=Math.random()*Re;x.tx=x.home.x+Math.cos(V)*5,x.tz=x.home.z+Math.sin(V)*5}Math.hypot(x.tx-x.x,x.tz-x.z)>.6?z(x.tx,x.tz,1):x.vx=x.vz=0;break;case"notice":if(x.vx=x.vz=0,x.face=Tn(x.face,Math.atan2(P,O),10,y),x.t>(j?.6:.9)){if(x.state=j?"chase":"charge",x.t=0,!j){let V=$||1;x.charge=[O/V,P/V]}T.push([j?"howl":"grunt",x])}break;case"chase":z(S.x,S.z,4.7),($>22||x.t>7||Math.hypot(x.x-x.home.x,x.z-x.home.z)>32)&&(x.state="return",x.cool=3);break;case"charge":{let W=Ee(x,x.x+x.charge[0]*7.8*y,x.z+x.charge[1]*7.8*y,T,!0);W&&(x.x=W.x,x.z=W.z,x.y=W.y,x.vx=x.charge[0]*7.8,x.vz=x.charge[1]*7.8,x.face=Math.atan2(x.charge[1],x.charge[0])),(!W||x.t>1.8)&&(x.vx=x.vz=0,x.state=$<12&&x.t<6?"notice":"return",x.t=0);break}case"return":z(x.home.x,x.home.z,2.2)<1&&(x.state="idle",x.t=0);break}if((x.state==="chase"||x.state==="charge")&&$<.95&&G<1.2&&S.stun<=0&&rt.fall<=0){let V=$||1;S.vx=O/V*6,S.vz=P/V*6,S.stun=.9,S.landT=.3,x.state="return",x.cool=6,T.push(["bitten",x.kind])}}}let ie=45;function $e(y,T){let S=rt.summit;if(S.t+=y,S.phase==="wait"&&S.t>=ie&&(S.phase="wind",S.t=0,T.push("windStart")),S.phase==="wind"&&(S.wind=Ze(S.t/7,0,1),r.wind.value=S.wind,S.t>8.5)){S.phase="lift",S.t=0;let x=rt.p;S.from=[x.x,x.y,x.z],x.air=!0,rt.scope=!1,T.push("lift")}}function gn(y,T){let S=rt.summit,x=rt.p;S.t+=y,r.wind.value=1;let O=S.t;x.x=S.from[0]+S.wdx*O*O*2.2,x.z=S.from[2]+S.wdz*O*O*2.2,x.y=S.from[1]+O*O*3.2+Math.sin(O*6)*.2,x.rot+=y*(4+O*3),O>2.6&&!S.done&&(S.done=!0,T.push("toValley"))}function ri(){let y=[];for(let T of Xt)(T.state==="chase"||T.state==="charge"||T.state==="notice")&&y.push({kind:T.kind,x:T.x,y:T.y,z:T.z,state:T.state});return y}function Zs(){rt.summit&&rt.summit.phase==="wait"&&(rt.summit.t=ie)}function Es(y){let T=rt.p;if(y==="bell")return ut.bell.v+=2.4,!0;if(y==="tea"){for(let S of Jt)S.kind==="seller"&&(S.pour=1.4,S.talk=3);return!0}if(y==="chat"){let S=Jt.filter(x=>x.kind==="tea");return S[Math.floor(Math.random()*S.length)].talk=3,!0}return y==="scope"&&(rt.scope=!rt.scope,H.scopeYaw=.03,H.scopePitch=-.2),!0}function Uo(){let y=rt.p;if(!rt.summit||rt.summit.phase==="lift")return null;let T=null,S=1e9;for(let x of Zt){let O=Math.hypot(y.x-x.x,y.z-x.z);O<x.r&&O<S&&(S=O,T=x)}return T}let U=null,H={yaw:0,pitch:.24,dist:5.6,init:!1,tgt:new B,pos:new B},A=new B,F=new B;function pt(y){let T=rt.p,S=rt.summit&&rt.summit.phase==="lift";if(rt.scope){let W=g+3.9-.4,et=b+1.45,Ct=H.scopeYaw||0,dt=H.scopePitch||-.2;H.pos.set(W,et,0),H.tgt.set(W+Math.cos(Ct)*100*Math.cos(dt),et+Math.sin(dt)*100,Math.sin(Ct)*100*Math.cos(dt));return}A.set(T.x,T.y+(S?.6:1.45),T.z);let x=S?7:rt.summit?6.4:5.6;H.init||(H.tgt.copy(A),H.dist=x,H.effPitch=null,H.effDist=null,H.init=!0);let O=rt.fall>0?2:14;if(H.tgt.x=Qe(H.tgt.x,A.x,O,y),H.tgt.z=Qe(H.tgt.z,A.z,O,y),H.tgt.y=Qe(H.tgt.y,A.y,rt.fall>0?1.5:10,y),H.dist=Qe(H.dist,x,3,y),!U){U=new Map;for(let W of Wt)if(W.tall){let et=ke(Math.floor(W.x/4),Math.floor(W.z/4));U.has(et)||U.set(et,[]),U.get(et).push(W)}}let P=(W,et,Ct)=>{let dt=Math.floor(W/4),jt=Math.floor(et/4);for(let $t=-1;$t<=1;$t++)for(let Te=-1;Te<=1;Te++){let le=U.get(ke(dt+$t,jt+Te));if(le){for(let ve of le)if(Ct(ve))return!0}}return!1},$=(W,et)=>F.set(H.tgt.x-Math.cos(H.yaw)*Math.cos(et)*W,H.tgt.y+Math.sin(et)*W,H.tgt.z-Math.sin(H.yaw)*Math.cos(et)*W),G=(W,et)=>{for(let Ct=1;Ct<=8;Ct++){let dt=Ct/8;$(W*dt,et);let jt=Ne(F.x,F.z);if(F.y<jt+.4||Ct>=2&&!rt.summit&&P(F.x,F.z,$t=>{let Te=$t.r*3.4,le=F.x-$t.x,ve=F.z-$t.z;return le*le+ve*ve<Te*Te&&F.y>jt+1.9&&F.y<jt+9}))return dt}return 0},q=H.pitch,j=H.dist,z=G(j,q);if(z){let W=Math.min(q,.04),et=G(j,W);(!et||et>z)&&(q=W,z=et),z&&(j=Math.max(1.8,j*(z-1/8)))}H.effPitch=H.effPitch==null?q:Qe(H.effPitch,q,q<H.effPitch?8:2.5,y),H.effDist=H.effDist==null?j:Qe(H.effDist,j,j<H.effDist?10:2.5,y),$(Math.min(H.effDist,j+.6),H.effPitch),P(F.x,F.z,W=>{let et=F.x-W.x,Ct=F.z-W.z,dt=et*et+Ct*Ct,jt=W.r+.35;if(dt<jt*jt){let $t=Math.sqrt(dt)||.01;F.x=W.x+et/$t*jt,F.z=W.z+Ct/$t*jt}return!1});let V=Ne(F.x,F.z)+.4;F.y<V&&(F.y=V),H.pos.copy(F)}function Pt(){return(H.yaw*180/Math.PI%360+360)%360}let yt=0,Dt=-1,_t=0,It=0,qt=2,Lt=390,Vt=844,Tt=new fn;Tt.rotation.order="YXZ";function we(y,T,S){Lt=y,Vt=T,qt=S,t.setPixelRatio(S),t.setSize(y,T,!1),s.aspect=y/T,s.updateProjectionMatrix()}function ye(y,T){let S=rt.p,x=xt,O=!S.air&&rt.fall<=0,P=O?Math.abs(Math.sin(S.hopPh))*(S.run?.17:.08):0;x.root.position.set(S.x,S.y+P,S.z),x.turn=Tn(x.turn,Math.PI/2-S.face,14,T),x.root.rotation.y=x.turn,x.inner.rotation.z=-S.rot,!(rt.fall>0)&&!(rt.summit&&rt.summit.phase==="lift")&&(S.rot*=Math.pow(.001,T));let $=S.landT>0?S.landT*2.4:0;S.air&&($=-.12),O&&S.speed>.3&&($+=(1-Math.abs(Math.sin(S.hopPh)))*.22-.07),x.inner.scale.set(1+.2*$,1-.22*$,1+.2*$),x.inner.position.y=.55*(1-.22*$);for(let[q,j]of x.feet.entries())j.position.y=-.49+(O&&S.speed>.3?Math.max(0,Math.sin(S.hopPh*2+q*Math.PI))*.06:0);let G=rt.fall>0||S.stun>0||rt.summit&&(rt.summit.phase==="lift"||rt.summit.wind>.5);x.nextBlink-=T,x.nextBlink<0&&(x.blink=.14,x.nextBlink=2.5+Math.random()*2.5),x.blink=Math.max(0,x.blink-T);for(let q of x.eyes)q.scale.set(G?1.08:1,G?1.15:x.blink>0?.12:1,1);for(let q of x.pupils)q.scale.setScalar(G?.72:1);if(x.smile.visible=!G,x.ooh.visible=G,x.acc.userData.star&&(x.acc.userData.star.rotation.y=y*2),x.fire){x.bodyMat.emissiveIntensity=.5+Math.sin(y*13)*.1;for(let q of x.flames)q.scale.set(1,.8+Math.sin(y*14+q.userData.ph*1.7)*.25,1)}x.chute.visible=!1,x.drop.visible=!1,x.rope.visible=!1}function Je(y,T){for(let S of Xt){let x=S.m,O=Math.hypot(S.vx,S.vz)>.3,P=S.state==="chase"||S.state==="charge";S.ph+=T*(P?16:O?8:0),x.root.position.set(S.x,S.y,S.z),x.yaw=Tn(x.yaw,-S.face,10,T),x.root.rotation.y=x.yaw,x.body.position.y=O?Math.abs(Math.sin(S.ph))*(P?.06:.02):0,x.head.rotation.z=S.state==="notice"?-.25+Math.sin(y*20)*.04:O?-.1:Math.sin(y*1.3)*.15-.2,x.tail.rotation.z=(S.kind==="wolf"?.9:.4)+(P?.5:0)+Math.sin(y*(P?14:3))*.15;for(let $ of x.legs){let G=$.front?$.s>0?0:Math.PI:($.s>0?Math.PI:0)+(P?.6:0);O?($.hip.rotation.z=Math.sin(S.ph+G)*(P?.7:.4),$.knee.rotation.z=($.front?-1:1)*Math.max(0,-Math.cos(S.ph+G))*.5):($.hip.rotation.z=Qe($.hip.rotation.z,0,8,T),$.knee.rotation.z=Qe($.knee.rotation.z,0,8,T))}}}function E(y,T){let S=rt.summit,x=S?S.wind:0,P=S&&S.phase==="lift"?1:x,$=ut.flag.geometry.attributes.position,G=ut.flagBase;for(let dt=0;dt<$.count;dt++){let jt=G[dt*3],$t=G[dt*3+1],Te=jt/3.2;$.setXYZ(dt,jt*(1-P*.05),$t-Te*Te*.25*(1-P),Math.sin(y*(4+P*12)-jt*(1.6+P*1.5))*Te*(.18+P*.42)+Math.sin(y*7+$t*3)*.04*Te)}$.needsUpdate=!0,ut.flag.geometry.computeVertexNormals(),ut.flag.rotation.y=-.3*P;let q=ut.bell;q.v+=(-q.swing*18-q.v*1.4)*T,q.swing+=q.v*T,q.g.rotation.x=q.swing+P*.25*Math.sin(y*6);for(let dt of ut.lanterns)dt.rotation.z=Math.sin(y*(1.6+P*8)+dt.position.x)*(.06+P*.45),dt.rotation.x=Math.cos(y*(1.3+P*7))*P*.3;let j=ut.drops.geometry.attributes.position,z=ut.drops.userData.seed;for(let dt=0;dt<z.length;dt++){let[jt,$t,Te]=z[dt],le=(y*Te*.9+$t)%1,ve=.15+le*1.6;j.setXYZ(dt,Math.cos(jt)*ve+P*le*3.5,2.35+Math.sin(le*Math.PI)*.7-le*1.8,Math.sin(jt)*ve+P*le*1.2)}j.needsUpdate=!0,he.offset.x=y*.03,ut.water.material.normalScale.set(.6+P,.6+P);let V=ut.streaks.geometry.attributes.position,W=ut.streaks.userData.seed;ut.streaks.material.opacity=cn(.15,.8,P)*.55;for(let dt=0;dt<W.length;dt++){let[jt,$t,Te,le]=W[dt],ve=(y*le*(.6+P*1.6)+dt*.137)%1,de=-30+ve*60,se=1.5+P*3.5,Gt=Te+Math.sin(y*2+dt)*.6,ce=$t+Math.sin(ve*9+dt)*.4;V.setXYZ(dt*2,de,ce,Gt+ve*12-6),V.setXYZ(dt*2+1,de-se,ce+.05,Gt+ve*12-6-se*.3)}V.needsUpdate=!0;let et=ut.leaves.geometry.attributes.position,Ct=ut.leaves.userData.seed;ut.leaves.material.opacity=P*.9;for(let dt=0;dt<Ct.length;dt++){let[jt,$t,Te,le]=Ct[dt],ve=y*(.5+le)*(.4+P)%1;et.setXYZ(dt,(jt+ve*70)%60-30,$t*.6+.4+Math.sin(y*3+dt)*.5,Te+Math.sin(y+le*6)*2+ve*20*.3)}et.needsUpdate=!0;for(let dt of Jt){let jt=dt.m,[$t,Te]=jt.arms,le=1-Math.exp(-6*T);jt.root.scale.y=1+Math.sin(y*1.6+dt.base.x)*.006,jt.root.rotation.x=-P*.14+Math.sin(y*9+dt.base.x)*P*.03;let ve=0,de=-.12,se=-.25,Gt=0,ce=.12,me=-.25;if(P>.25&&(ve=-2.4,de=0,se=-1.3),dt.kind==="seller")Gt=-.5+Math.sin(y*2)*.1,me=-1.2,dt.pour>0&&(dt.pour-=T,Gt=-1,me=-.6);else if(dt.kind==="tea"){let on=Math.max(0,Math.sin(y*.5+dt.ph))**8;Gt=-.45-on*.7,me=-1.25-on*.9}else dt.kind==="stand"&&(ve=P>.25?ve:-.2,Gt=-.15+Math.sin(y*1.1)*.25*(dt.talk>0?1:.3),me=-.6);$t.sh.rotation.x+=(ve-$t.sh.rotation.x)*le,$t.sh.rotation.z+=(de-$t.sh.rotation.z)*le,$t.el.rotation.x+=(se-$t.el.rotation.x)*le,Te.sh.rotation.x+=(Gt-Te.sh.rotation.x)*le,Te.sh.rotation.z+=(ce-Te.sh.rotation.z)*le,Te.el.rotation.x+=(me-Te.el.rotation.x)*le,jt.mouth.scale.y=dt.talk>0?.25+Math.abs(Math.sin(y*15))*.9:.3,dt.talk>0&&(dt.talk-=T)}for(let dt of ut.cups)dt.position.x+=P*T*.05*Math.sin(y*13+dt.position.z*20);ut.kiosk.children[0].rotation.z=P*.01*Math.sin(y*17)}function Y(y,T={}){let S=performance.now(),x=yt?Ze((S-yt)/1e3,0,.1):1/60;yt=S;let O=Dt>=0?Ze(y-Dt,0,.1):1/60;if(Dt=y,r.time.value=y,It++,_t=_t*.97+(x>1/38?1:0)*.03,It>90&&_t>.6&&qt>1.01&&(we(Lt,Vt,Math.max(1,qt-.25)),_t=0,It=0),!xt||!rt.p)return;ye(y,O),Je(y,O),(Math.hypot(rt.p.x,rt.p.z)<60||rt.scope)&&E(y,O);let P=0;for(let j=0;j<N.length;j++){let z=N[j];z.taken||(z.x-rt.p.x)**2+(z.z-rt.p.z)**2>3600||(Tt.position.set(z.x,z.y+Math.sin(y*2+j)*.08,z.z),Tt.rotation.set(Math.PI/2,y*3+j,0),Tt.scale.setScalar(1),Tt.updateMatrix(),v.setMatrixAt(P++,Tt.matrix))}v.count=P,v.instanceMatrix.needsUpdate=!0,Ie.forEach((j,z)=>{j.rotation.y=Math.sin(y*2+z)*.3}),Me.rotation.y=y*.003,Me.visible=rt.p.y>30||rt.scope;let $=cn(55,90,rt.p.y);if(e.fog.near=En(20,90,$),e.fog.far=rt.scope?1500:En(115,700,$),ut.scope.visible=!rt.scope,s.fov=rt.scope?13:62,s.updateProjectionMatrix(),s.position.copy(H.pos),s.lookAt(H.tgt),T.shake>0){let j=T.shake*.25;s.position.x+=(Math.random()-.5)*j,s.position.y+=(Math.random()-.5)*j}h.position.copy(s.position);for(let j of Mt){let z=(j.x-s.position.x)**2+(j.z-s.position.z)**2,V=z<(j.far+(rt.scope?400:0)+$*110)**2;if(j.lo){let W=z<3844&&!rt.scope;j.m.visible=V&&W,j.lo.visible=V&&!W}else j.m.visible=V}let G=Math.round(rt.p.x/.25)*.25,q=Math.round(rt.p.z/.25)*.25;c.target.position.set(G,rt.p.y,q),c.position.set(G+l.x*80,rt.p.y+l.y*80,q+l.z*80),t.render(e,s)}let tt=new B;function Q(y,T,S){return tt.set(y,T,S).project(s),{x:(tt.x+1)/2,y:(1-tt.y)/2,vis:tt.z<1&&tt.z>-1}}function ot(y,T=3){for(let S of Jt)S.kind===y&&(S.talk=T)}return{setSize:we,enter:Kt,step:Nt,render:Y,project:Q,heading:Pt,interact:Es,nearInteract:Uo,skipWait:Zs,talkNpc:ot,threats:ri,ground:Ne,surface:kt,S:rt,cam:H,U:r,info:{RP:g,HS:b,checkpoints:fe,coins:N,segs:_,stones:ne,bridges:Qt,beasts:Xt,trailLen:Math.round(pe.length*.8),area:Math.round(Math.PI*g*g)},renderer:t,scene:e,camera:s,get pr(){return qt}}}return If(C_);})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
