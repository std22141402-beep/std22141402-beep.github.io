/* نطّة — العالم المفتوح 3D. يتضمن three.js r187 (MIT, © 2010-2026 three.js authors) */
var NattaWorld3D=(()=>{var oc=Object.defineProperty;var Ef=Object.getOwnPropertyDescriptor;var Tf=Object.getOwnPropertyNames;var Cf=Object.prototype.hasOwnProperty;var Rf=(i,t)=>{for(var e in t)oc(i,e,{get:t[e],enumerable:!0})},Pf=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Tf(t))!Cf.call(i,s)&&s!==e&&oc(i,s,{get:()=>t[s],enumerable:!(n=Ef(t,s))||n.enumerable});return i};var If=i=>Pf(oc({},"__esModule",{value:!0}),i);var F_={};Rf(F_,{createWorld:()=>Af,makeRenderer:()=>cf,supported:()=>hf});var nl="188dev";var Lu=0,Xc=1,Du=2;var Ps=1,Nu=2,fr=3,ms=0,Bn=1,$e=2,Is=0,pr=1,ei=2,qc=3,Yc=4,zu=5;var Fs=100,Uu=101,Ou=102,Bu=103,ku=104,Vu=200,Gu=201,Hu=202,Wu=203,Zc=204,Jc=205,Xu=206,qu=207,Yu=208,Zu=209,Ju=210,$u=211,Ku=212,ju=213,Qu=214,xa=0,_a=1,ya=2,ir=3,va=4,Ma=5,Sa=6,wa=7,yo=0,td=1,ed=2,ki=0,$c=1,Kc=2,jc=3,vo=4,Qc=5,th=6,eh=7;var nh=300,Ls=301,mr=302,il=303,sl=304,cs=1e3,Di=1001,ba=1002,On=1003,nd=1004;var Mo=1005;var Kn=1006,rl=1007;var es=1008;var ri=1009,ih=1010,sh=1011,gr=1012,ol=1013,Ri=1014,Si=1015,Pi=1016,al=1017,ll=1018,Ds=1020,rh=35902,oh=35899,ah=1021,lh=1022,Ii=1023,$i=1026,ns=1027,cl=1028,hl=1029,gs=1030,ul=1031;var dl=1033,So=33776,wo=33777,bo=33778,Ao=33779,fl=35840,pl=35841,ml=35842,gl=35843,xl=36196,_l=37492,yl=37496,vl=37488,Ml=37489,Eo=37490,Sl=37491,wl=37808,bl=37809,Al=37810,El=37811,Tl=37812,Cl=37813,Rl=37814,Pl=37815,Il=37816,Fl=37817,Ll=37818,Dl=37819,Nl=37820,zl=37821,Ul=36492,Ol=36494,Bl=36495,kl=36283,Vl=36284,To=36285,Gl=36286;var Ur=2300,Aa=2301,ma=2302,Dc=2303,Nc=2400,zc=2401,Uc=2402;var id=3200;var Co=0,sd=1,is="",$n="srgb",Or="srgb-linear",Br="linear",dn="srgb";var ga=7680;var rd=519,od=512,ad=513,ld=514,ch=515,cd=516,hd=517,hh=518,uh=519,dh=35044;var fh="300 es",gi=2e3,sr=2001;function Ff(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}var Lf={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};typeof Float16Array<"u"&&(Lf.Float16Array=Float16Array);function Df(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ud(){let i=kr("canvas");return i.style.display="block",i}var Yh={},rr=null;function Vr(...i){let t="THREE."+i.shift();rr?rr("log",t,...i):console.log(t,...i)}function dd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Oe(...i){i=dd(i);let t="THREE."+i.shift();if(rr)rr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ge(...i){i=dd(i);let t="THREE."+i.shift();if(rr)rr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Dr(...i){let t=i.join(" ");t in Yh||(Yh[t]=!0,Oe(...i))}function fd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var pd={[xa]:xa,[ya]:Sa,[va]:va,[ir]:Ma,[_a]:_a,[Sa]:ya,[wa]:wa,[Ma]:ir},zi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ac=Math.PI/180,Ea=180/Math.PI;function xs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vn[i&255]+Vn[i>>8&255]+Vn[i>>16&255]+Vn[i>>24&255]+"-"+Vn[t&255]+Vn[t>>8&255]+"-"+Vn[t>>16&15|64]+Vn[t>>24&255]+"-"+Vn[e&63|128]+Vn[e>>8&255]+"-"+Vn[e>>16&255]+Vn[e>>24&255]+Vn[n&255]+Vn[n>>8&255]+Vn[n>>16&255]+Vn[n>>24&255]).toLowerCase()}function on(i,t,e){return Math.max(t,Math.min(e,i))}function Nf(i,t){return(i%t+t)%t}function lc(i,t,e){return(1-e)*i+e*t}function md(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function gd(i,t){if(t.constructor===Float32Array)return i;let e=Hl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function xd(i,t){if(t.constructor===Float32Array)return i;let e=Hl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var yh=class yh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=on(this.x,t.x,e.x),this.y=on(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=on(this.x,t,e),this.y=on(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(on(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(on(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yh.prototype.isVector2=!0;var At=yh,xi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],p=r[o+1],m=r[o+2],w=r[o+3];if(d!==w||l!==f||c!==p||h!==m){let g=l*f+c*p+h*m+d*w;g<0&&(f=-f,p=-p,m=-m,w=-w,g=-g);let x=1-a;if(g<.9995){let v=Math.acos(g),A=Math.sin(v);x=Math.sin(x*v)/A,a=Math.sin(a*v)/A,l=l*x+f*a,c=c*x+p*a,h=h*x+m*a,d=d*x+w*a}else{l=l*x+f*a,c=c*x+p*a,h=h*x+m*a,d=d*x+w*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],p=r[o+2],m=r[o+3];return t[e]=a*m+h*d+l*p-c*f,t[e+1]=l*m+h*f+c*d-a*p,t[e+2]=c*m+h*p+a*f-l*d,t[e+3]=h*m-a*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),p=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*p*m,this._y=c*p*d-f*h*m,this._z=c*h*m+f*p*d,this._w=c*h*d-f*p*m;break;case"YXZ":this._x=f*h*d+c*p*m,this._y=c*p*d-f*h*m,this._z=c*h*m-f*p*d,this._w=c*h*d+f*p*m;break;case"ZXY":this._x=f*h*d-c*p*m,this._y=c*p*d+f*h*m,this._z=c*h*m+f*p*d,this._w=c*h*d-f*p*m;break;case"ZYX":this._x=f*h*d-c*p*m,this._y=c*p*d+f*h*m,this._z=c*h*m-f*p*d,this._w=c*h*d+f*p*m;break;case"YZX":this._x=f*h*d+c*p*m,this._y=c*p*d+f*h*m,this._z=c*h*m-f*p*d,this._w=c*h*d-f*p*m;break;case"XZY":this._x=f*h*d-c*p*m,this._y=c*p*d-f*h*m,this._z=c*h*m+f*p*d,this._w=c*h*d+f*p*m;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(on(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},vh=class vh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=on(this.x,t.x,e.x),this.y=on(this.y,t.y,e.y),this.z=on(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=on(this.x,t,e),this.y=on(this.y,t,e),this.z=on(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(on(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return cc.copy(this).projectOnVector(t),this.sub(cc)}reflect(t){return this.sub(cc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(on(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vh.prototype.isVector3=!0;var Y=vh,cc=new Y,Zh=new xi,Mh=class Mh{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],m=n[8],w=s[0],g=s[3],x=s[6],v=s[1],A=s[4],b=s[7],L=s[2],C=s[5],y=s[8];return r[0]=o*w+a*v+l*L,r[3]=o*g+a*A+l*C,r[6]=o*x+a*b+l*y,r[1]=c*w+h*v+d*L,r[4]=c*g+h*A+d*C,r[7]=c*x+h*b+d*y,r[2]=f*w+p*v+m*L,r[5]=f*g+p*A+m*C,r[8]=f*x+p*b+m*y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,p=c*r-o*l,m=e*d+n*f+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/m;return t[0]=d*w,t[1]=(s*c-h*n)*w,t[2]=(a*n-s*o)*w,t[3]=f*w,t[4]=(h*e-s*l)*w,t[5]=(s*r-a*e)*w,t[6]=p*w,t[7]=(n*l-c*e)*w,t[8]=(o*e-n*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Dr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hc.makeScale(t,e)),this}rotate(t){return Dr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hc.makeRotation(-t)),this}translate(t,e){return Dr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Mh.prototype.isMatrix3=!0;var Je=Mh,hc=new Je,Jh=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$h=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zf(){let i={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===dn&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dn&&(s.r=nr(s.r),s.g=nr(s.g),s.b=nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===is?Br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Or]:{primaries:t,whitePoint:n,transfer:Br,toXYZ:Jh,fromXYZ:$h,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$n},outputColorSpaceConfig:{drawingBufferColorSpace:$n}},[$n]:{primaries:t,whitePoint:n,transfer:dn,toXYZ:Jh,fromXYZ:$h,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$n}}}),i}var cn=zf();function Ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Os,Ta=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Os===void 0&&(Os=kr("canvas")),Os.width=t.width,Os.height=t.height;let s=Os.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Os}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=kr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ji(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ji(e[n]/255)*255):e[n]=Ji(e[n]);return{data:e,width:t.width,height:t.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Uf=0,or=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=xs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(uc(s[o].image)):r.push(uc(s[o]))}else r=uc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function uc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ta.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var Of=0,dc=new Y,jn=class i extends zi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Di,s=Di,r=Kn,o=es,a=Ii,l=ri,c=i.DEFAULT_ANISOTROPY,h=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=xs(),this.name="",this.source=new or(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(dc).x}get height(){return this.source.getSize(dc).y}get depth(){return this.source.getSize(dc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Oe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cs:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cs:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=nh;jn.DEFAULT_ANISOTROPY=1;var Sh=class Sh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){let e=on(t.w,-1,1);this.w=2*Math.acos(e);let n=Math.sqrt(1-e*e);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],m=l[9],w=l[2],g=l[6],x=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-w)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+w)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,b=(p+1)/2,L=(x+1)/2,C=(h+f)/4,y=(d+w)/4,T=(m+g)/4;return A>b&&A>L?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=C/n,r=y/n):b>L?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=C/s,r=T/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=y/r,s=T/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(d-w)*(d-w)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-w)/v,this.z=(f-h)/v,this.w=Math.acos((c+p+x-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=on(this.x,t.x,e.x),this.y=on(this.y,t.y,e.y),this.z=on(this.z,t.z,e.z),this.w=on(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=on(this.x,t,e),this.y=on(this.y,t,e),this.z=on(this.z,t,e),this.w=on(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(on(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sh.prototype.isVector4=!0;var yn=Sh,Ca=class extends zi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new yn(0,0,t,e),this.scissorTest=!1,this.viewport=new yn(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new jn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Kn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++){let o=this.textures[s],a=o.images?o.images[0]:o.image;a.width=t,a.height=e,a.depth=n,o.isData3DTexture!==!0&&(o.isArrayTexture=a.depth>1)}this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new or(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ci=class extends Ca{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Gr=class extends jn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ra=class extends jn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var el=class el{constructor(t,e,n,s,r,o,a,l,c,h,d,f,p,m,w,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,f,p,m,w,g)}set(t,e,n,s,r,o,a,l,c,h,d,f,p,m,w,g){let x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=s,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=d,x[14]=f,x[3]=p,x[7]=m,x[11]=w,x[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new el().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Bs.setFromMatrixColumn(t,0).length(),r=1/Bs.setFromMatrixColumn(t,1).length(),o=1/Bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*d,m=a*h,w=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+m*c,e[5]=f-w*c,e[9]=-a*l,e[2]=w-f*c,e[6]=m+p*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,p=l*d,m=c*h,w=c*d;e[0]=f+w*a,e[4]=m*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-m,e[6]=w+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,p=l*d,m=c*h,w=c*d;e[0]=f-w*a,e[4]=-o*d,e[8]=m+p*a,e[1]=p+m*a,e[5]=o*h,e[9]=w-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,p=o*d,m=a*h,w=a*d;e[0]=l*h,e[4]=m*c-p,e[8]=f*c+w,e[1]=l*d,e[5]=w*c+f,e[9]=p*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,p=o*c,m=a*l,w=a*c;e[0]=l*h,e[4]=w-f*d,e[8]=m*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+m,e[10]=f-w*d}else if(t.order==="XZY"){let f=o*l,p=o*c,m=a*l,w=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+w,e[5]=o*h,e[9]=p*d-m,e[2]=m*d-p,e[6]=a*h,e[10]=w*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bf,t,kf)}lookAt(t,e,n){let s=this.elements;return ai.subVectors(t,e),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),rs.crossVectors(n,ai),rs.lengthSq()===0&&(Math.abs(n.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),rs.crossVectors(n,ai)),rs.normalize(),Oo.crossVectors(ai,rs),s[0]=rs.x,s[4]=Oo.x,s[8]=ai.x,s[1]=rs.y,s[5]=Oo.y,s[9]=ai.y,s[2]=rs.z,s[6]=Oo.z,s[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],m=n[2],w=n[6],g=n[10],x=n[14],v=n[3],A=n[7],b=n[11],L=n[15],C=s[0],y=s[4],T=s[8],V=s[12],D=s[1],nt=s[5],dt=s[9],$=s[13],yt=s[2],K=s[6],ft=s[10],at=s[14],Pt=s[3],_t=s[7],Dt=s[11],ee=s[15];return r[0]=o*C+a*D+l*yt+c*Pt,r[4]=o*y+a*nt+l*K+c*_t,r[8]=o*T+a*dt+l*ft+c*Dt,r[12]=o*V+a*$+l*at+c*ee,r[1]=h*C+d*D+f*yt+p*Pt,r[5]=h*y+d*nt+f*K+p*_t,r[9]=h*T+d*dt+f*ft+p*Dt,r[13]=h*V+d*$+f*at+p*ee,r[2]=m*C+w*D+g*yt+x*Pt,r[6]=m*y+w*nt+g*K+x*_t,r[10]=m*T+w*dt+g*ft+x*Dt,r[14]=m*V+w*$+g*at+x*ee,r[3]=v*C+A*D+b*yt+L*Pt,r[7]=v*y+A*nt+b*K+L*_t,r[11]=v*T+A*dt+b*ft+L*Dt,r[15]=v*V+A*$+b*at+L*ee,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],m=t[3],w=t[7],g=t[11],x=t[15],v=l*p-c*f,A=a*p-c*d,b=a*f-l*d,L=o*p-c*h,C=o*f-l*h,y=o*d-a*h;return e*(w*v-g*A+x*b)-n*(m*v-g*L+x*C)+s*(m*A-w*L+x*y)-r*(m*b-w*C+g*y)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],m=t[12],w=t[13],g=t[14],x=t[15],v=e*a-n*o,A=e*l-s*o,b=e*c-r*o,L=n*l-s*a,C=n*c-r*a,y=s*c-r*l,T=h*w-d*m,V=h*g-f*m,D=h*x-p*m,nt=d*g-f*w,dt=d*x-p*w,$=f*x-p*g,yt=v*$-A*dt+b*nt+L*D-C*V+y*T;if(yt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/yt;return t[0]=(a*$-l*dt+c*nt)*K,t[1]=(s*dt-n*$-r*nt)*K,t[2]=(w*y-g*C+x*L)*K,t[3]=(f*C-d*y-p*L)*K,t[4]=(l*D-o*$-c*V)*K,t[5]=(e*$-s*D+r*V)*K,t[6]=(g*b-m*y-x*A)*K,t[7]=(h*y-f*b+p*A)*K,t[8]=(o*dt-a*D+c*T)*K,t[9]=(n*D-e*dt-r*T)*K,t[10]=(m*C-w*b+x*v)*K,t[11]=(d*b-h*C-p*v)*K,t[12]=(a*V-o*nt-l*T)*K,t[13]=(e*nt-n*V+s*T)*K,t[14]=(w*A-m*L-g*v)*K,t[15]=(h*L-d*A+f*v)*K,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,p=r*h,m=r*d,w=o*h,g=o*d,x=a*d,v=l*c,A=l*h,b=l*d,L=n.x,C=n.y,y=n.z;return s[0]=(1-(w+x))*L,s[1]=(p+b)*L,s[2]=(m-A)*L,s[3]=0,s[4]=(p-b)*C,s[5]=(1-(f+x))*C,s[6]=(g+v)*C,s[7]=0,s[8]=(m+A)*y,s[9]=(g-v)*y,s[10]=(1-(f+w))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Bs.set(s[0],s[1],s[2]).length(),a=Bs.set(s[4],s[5],s[6]).length(),l=Bs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),bi.copy(this);let c=1/o,h=1/a,d=1/l;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=h,bi.elements[5]*=h,bi.elements[6]*=h,bi.elements[8]*=d,bi.elements[9]*=d,bi.elements[10]*=d,e.setFromRotationMatrix(bi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=gi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),m,w;if(l)m=r/(o-r),w=o*r/(o-r);else if(a===gi)m=-(o+r)/(o-r),w=-2*o*r/(o-r);else if(a===sr)m=-o/(o-r),w=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=gi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s),m,w;if(l)m=1/(o-r),w=o/(o-r);else if(a===gi)m=-2/(o-r),w=-(o+r)/(o-r);else if(a===sr)m=-1/(o-r),w=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};el.prototype.isMatrix4=!0;var hn=el,Bs=new Y,bi=new hn,Bf=new Y(0,0,0),kf=new Y(1,1,1),rs=new Y,Oo=new Y,ai=new Y,Kh=new hn,jh=new xi,_i=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(on(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-on(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jh.setFromEuler(this),this.setFromQuaternion(jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_i.DEFAULT_ORDER="XYZ";var Hr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vf=0,Qh=new Y,ks=new xi,Hi=new hn,Bo=new Y,wr=new Y,Gf=new Y,Hf=new xi,tu=new Y(1,0,0),eu=new Y(0,1,0),nu=new Y(0,0,1),iu={type:"added"},Wf={type:"removed"},Vs={type:"childadded",child:null},fc={type:"childremoved",child:null},vn=class i extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new Y,e=new _i,n=new xi,s=new Y(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new hn},normalMatrix:{value:new Je}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(tu,t)}rotateY(t){return this.rotateOnAxis(eu,t)}rotateZ(t){return this.rotateOnAxis(nu,t)}translateOnAxis(t,e){return Qh.copy(t).applyQuaternion(this.quaternion),this.position.add(Qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tu,t)}translateY(t){return this.translateOnAxis(eu,t)}translateZ(t){return this.translateOnAxis(nu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Bo.copy(t):Bo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(wr,Bo,this.up):Hi.lookAt(Bo,wr,this.up),this.quaternion.setFromRotationMatrix(Hi),s&&(Hi.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(Hi),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(iu),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wf),fc.child=t,this.dispatchEvent(fc),fc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(iu),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,Gf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Hf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1)===!0&&(n=!0),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}return n}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};vn.DEFAULT_UP=new Y(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Be=class extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xf={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let w of t.hand.values()){let g=e.getJointPose(w,n),x=this._getHandJoint(c,w);g!==null&&(x.matrix.fromArray(g.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=g.radius),x.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function pc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Pe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,cn.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=cn.workingColorSpace){return this.r=t,this.g=e,this.b=n,cn.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=cn.workingColorSpace){if(t=Nf(t,1),e=on(e,0,1),n=on(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=pc(o,r,t+1/3),this.g=pc(o,r,t),this.b=pc(o,r,t-1/3)}return cn.colorSpaceToWorking(this,s),this}setStyle(t,e=$n){function n(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Oe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$n){let n=_d[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}copyLinearToSRGB(t){return this.r=nr(t.r),this.g=nr(t.g),this.b=nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$n){return cn.workingToColorSpace(Gn.copy(this),t),Math.round(on(Gn.r*255,0,255))*65536+Math.round(on(Gn.g*255,0,255))*256+Math.round(on(Gn.b*255,0,255))}getHexString(t=$n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=cn.workingColorSpace){cn.workingToColorSpace(Gn.copy(this),e);let n=Gn.r,s=Gn.g,r=Gn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=cn.workingColorSpace){return cn.workingToColorSpace(Gn.copy(this),e),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=$n){cn.workingToColorSpace(Gn.copy(this),t);let e=Gn.r,n=Gn.g,s=Gn.b;return t!==$n?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ai),this.setHSL(Ai.h+t,Ai.s+e,Ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ai),t.getHSL(Ms),Ai.s===0&&(Ai.h=Ms.h),Ms.s===0&&(Ms.h=Ai.h);let n=lc(Ai.h,Ms.h,e),s=lc(Ai.s,Ms.s,e),r=lc(Ai.l,Ms.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gn=new Pe;Pe.NAMES=_d;var Wr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pe(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Xr=class extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ei=new Y,Wi=new Y,mc=new Y,Xi=new Y,Gs=new Y,Hs=new Y,su=new Y,gc=new Y,xc=new Y,_c=new Y,yc=new yn,vc=new yn,Mc=new yn,Zi=class i{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ei.subVectors(t,e),s.cross(Ei);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ei.subVectors(s,e),Wi.subVectors(n,e),mc.subVectors(t,e);let o=Ei.dot(Ei),a=Ei.dot(Wi),l=Ei.dot(mc),c=Wi.dot(Wi),h=Wi.dot(mc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xi.x),l.addScaledVector(o,Xi.y),l.addScaledVector(a,Xi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return yc.setScalar(0),vc.setScalar(0),Mc.setScalar(0),yc.fromBufferAttribute(t,e),vc.fromBufferAttribute(t,n),Mc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(yc,r.x),o.addScaledVector(vc,r.y),o.addScaledVector(Mc,r.z),o}static isFrontFacing(t,e,n,s){return Ei.subVectors(n,e),Wi.subVectors(t,e),Ei.cross(Wi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),Ei.cross(Wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Gs.subVectors(s,n),Hs.subVectors(r,n),gc.subVectors(t,n);let l=Gs.dot(gc),c=Hs.dot(gc);if(l<=0&&c<=0)return e.copy(n);xc.subVectors(t,s);let h=Gs.dot(xc),d=Hs.dot(xc);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Gs,o);_c.subVectors(t,r);let p=Gs.dot(_c),m=Hs.dot(_c);if(m>=0&&p<=m)return e.copy(r);let w=p*c-l*m;if(w<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Hs,a);let g=h*m-p*d;if(g<=0&&d-h>=0&&p-m>=0)return su.subVectors(r,s),a=(d-h)/(d-h+(p-m)),e.copy(s).addScaledVector(su,a);let x=1/(g+w+f);return o=w*x,a=f*x,e.copy(n).addScaledVector(Gs,o).addScaledVector(Hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ui=class{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ti):Ti.fromBufferAttribute(r,o),Ti.applyMatrix4(t.matrixWorld),this.expandByPoint(Ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ko.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ko.copy(n.boundingBox)),ko.applyMatrix4(t.matrixWorld),this.union(ko)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ti),Ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),Vo.subVectors(this.max,br),Ws.subVectors(t.a,br),Xs.subVectors(t.b,br),qs.subVectors(t.c,br),os.subVectors(Xs,Ws),as.subVectors(qs,Xs),Ss.subVectors(Ws,qs);let e=[0,-os.z,os.y,0,-as.z,as.y,0,-Ss.z,Ss.y,os.z,0,-os.x,as.z,0,-as.x,Ss.z,0,-Ss.x,-os.y,os.x,0,-as.y,as.x,0,-Ss.y,Ss.x,0];return!Sc(e,Ws,Xs,qs,Vo)||(e=[1,0,0,0,1,0,0,0,1],!Sc(e,Ws,Xs,qs,Vo))?!1:(Go.crossVectors(os,as),e=[Go.x,Go.y,Go.z],Sc(e,Ws,Xs,qs,Vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},qi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Ti=new Y,ko=new Ui,Ws=new Y,Xs=new Y,qs=new Y,os=new Y,as=new Y,Ss=new Y,br=new Y,Vo=new Y,Go=new Y,ws=new Y;function Sc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ws.fromArray(i,r);let a=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),l=t.dot(ws),c=e.dot(ws),h=n.dot(ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Dn=new Y,Ho=new At,qf=0,tn=class extends zi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dh,this.updateRanges=[],this.gpuType=Si,this.version=0,this._normalizationScale=t!==void 0?Hl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ho.fromBufferAttribute(this,e),Ho.applyMatrix3(t),this.setXY(e,Ho.x,Ho.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Dn.fromBufferAttribute(this,e),Dn.applyMatrix3(t),this.setXYZ(e,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Dn.fromBufferAttribute(this,e),Dn.applyMatrix4(t),this.setXYZ(e,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Dn.fromBufferAttribute(this,e),Dn.applyNormalMatrix(t),this.setXYZ(e,Dn.x,Dn.y,Dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Dn.fromBufferAttribute(this,e),Dn.transformDirection(t),this.setXYZ(e,Dn.x,Dn.y,Dn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):gd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):xd(t,this.array)}};var qr=class extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Yr=class extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ze=class extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Yf=new Ui,Ar=new Y,wc=new Y,Oi=class{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Yf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ar.subVectors(t,this.center);let e=Ar.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ar,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ar.copy(t.center).add(wc)),this.expandByPoint(Ar.copy(t.center).sub(wc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Zf=0,mi=new hn,bc=new vn,Ys=new Y,li=new Ui,Er=new Ui,Fi=new Y,Wo=new Y,Xo=new Y,en=class i extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ff(t)?Yr:qr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Je().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,e,n){return mi.makeTranslation(t,e,n),this.applyMatrix4(mi),this}scale(t,e,n){return mi.makeScale(t,e,n),this.applyMatrix4(mi),this}lookAt(t){return bc.lookAt(t),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ze(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];li.setFromBufferAttribute(r),this.morphTargetsRelative?(Wo.addVectors(this.boundingBox.min,li.min),Xo.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Wo),this.boundingBox.expandByPoint(Xo)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){let n=this.boundingSphere.center;if(li.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Er.setFromBufferAttribute(a),this.morphTargetsRelative?(Wo.addVectors(li.min,Er.min),Xo.addVectors(li.max,Er.max),li.expandByPoint(Wo),li.expandByPoint(Xo)):(li.expandByPoint(Er.min),li.expandByPoint(Er.max))}li.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Fi.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fi));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Fi.fromBufferAttribute(a,c),l&&(Ys.fromBufferAttribute(t,c),Fi.add(Ys)),s=Math.max(s,n.distanceToSquared(Fi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let V=0;V<n.count;V++)a[V]=new Y,l[V]=new Y;let h=new Y,d=new Y,f=new Y,p=new At,m=new At,w=new At,g=new Y,x=new Y;function v(V,D,nt){c[V]=c[D]=c[nt]=1,h.fromBufferAttribute(n,V),d.fromBufferAttribute(n,D),f.fromBufferAttribute(n,nt),p.fromBufferAttribute(r,V),m.fromBufferAttribute(r,D),w.fromBufferAttribute(r,nt),d.sub(h),f.sub(h),m.sub(p),w.sub(p);let dt=1/(m.x*w.y-w.x*m.y);isFinite(dt)&&(g.copy(d).multiplyScalar(w.y).addScaledVector(f,-m.y).multiplyScalar(dt),x.copy(f).multiplyScalar(m.x).addScaledVector(d,-w.x).multiplyScalar(dt),a[V].add(g),a[D].add(g),a[nt].add(g),l[V].add(x),l[D].add(x),l[nt].add(x))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let V=0,D=A.length;V<D;++V){let nt=A[V],dt=nt.start,$=nt.count;for(let yt=dt,K=Math.min(t.count,dt+$);yt<K;yt+=3)v(t.getX(yt+0),t.getX(yt+1),t.getX(yt+2))}let b=new Y,L=new Y,C=new Y,y=new Y;function T(V){C.fromBufferAttribute(s,V),y.copy(C);let D=a[V];b.copy(D),b.sub(C.multiplyScalar(C.dot(D))).normalize(),b.lengthSq()===0&&(Math.abs(y.x)<.9?b.set(1,0,0):b.set(0,1,0),b.crossVectors(y,b).normalize()),L.crossVectors(y,D);let dt=L.dot(l[V])<0?-1:1;o.setXYZW(V,b.x,b.y,b.z,dt)}for(let V=0,D=n.count;V<D;++V)c[V]&&T(V);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new Y,r=new Y,o=new Y,a=new Y,l=new Y,c=new Y,h=new Y,d=new Y;if(t)for(let f=0,p=t.count;f<p;f+=3){let m=t.getX(f+0),w=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,w),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,w),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(w,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fi.fromBufferAttribute(t,e),Fi.normalize(),t.setXYZ(e,Fi.x,Fi.y,Fi.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),p=0,m=0;for(let w=0,g=l.length;w<g;w++){a.isInterleavedBufferAttribute?p=l[w]*a.data.stride+a.offset:p=l[w]*h;for(let x=0;x<h;x++)f[m++]=c[p++]}return new tn(f,h,d)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=dh,this.updateRanges=[],this.version=0,this.uuid=xs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=ru(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=ru(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function ru(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=xs()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Jn=new Y,Zr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Hl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Jn.fromBufferAttribute(this,e),Jn.applyMatrix4(t),this.setXYZ(e,Jn.x,Jn.y,Jn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Jn.fromBufferAttribute(this,e),Jn.applyNormalMatrix(t),this.setXYZ(e,Jn.x,Jn.y,Jn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Jn.fromBufferAttribute(this,e),Jn.transformDirection(t),this.setXYZ(e,Jn.x,Jn.y,Jn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Vr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Vr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):gd(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):xd(t,this.data.array)}},Ac=new Y,Jf=new Y,$f=new Je,Ci=class{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ac.subVectors(n,e).cross(Jf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ac),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||$f.getNormalMatrix(t),s=this.coplanarPoint(Ac).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Kf=0,yi=class extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=pr,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Jc,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ga,this.stencilZFail=ga,this.stencilZPass=ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Oe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Pe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ci().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new At().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new At().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Qn=class extends yi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zs,Tr=new Y,Js=new Y,$s=new Y,Ks=new At,Cr=new At,yd=new hn,qo=new Y,Rr=new Y,Yo=new Y,ou=new At,Ec=new At,au=new At,ii=class extends vn{constructor(t=new Qn){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new en;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Pa(e,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new Zr(n,3,0,!1)),Zs.setAttribute("uv",new Zr(n,2,3,!1))}this.geometry=Zs,this.material=t,this.center=new At(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ge('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),yd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),$s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-$s.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Zo(qo.set(-.5,-.5,0),$s,o,Js,s,r),Zo(Rr.set(.5,-.5,0),$s,o,Js,s,r),Zo(Yo.set(.5,.5,0),$s,o,Js,s,r),ou.set(0,0),Ec.set(1,0),au.set(1,1);let a=t.ray.intersectTriangle(qo,Rr,Yo,!1,Tr);if(a===null&&(Zo(Rr.set(-.5,.5,0),$s,o,Js,s,r),Ec.set(0,1),a=t.ray.intersectTriangle(qo,Yo,Rr,!1,Tr),a===null))return;let l=t.ray.origin.distanceTo(Tr);l<t.near||l>t.far||e.push({distance:l,point:Tr.clone(),uv:Zi.getInterpolation(Tr,qo,Rr,Yo,ou,Ec,au,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this.count=t.count,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Zo(i,t,e,n,s,r){Ks.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Cr.x=r*Ks.x-s*Ks.y,Cr.y=s*Ks.x+r*Ks.y):Cr.copy(Ks),i.copy(t),i.x+=Cr.x,i.y+=Cr.y,i.applyMatrix4(yd)}var Yi=new Y,Tc=new Y,Jo=new Y,$o=new Y,lr=class{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yi.copy(this.origin).addScaledVector(this.direction,e),Yi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Tc.copy(t).add(e).multiplyScalar(.5),Jo.copy(e).sub(t).normalize(),$o.copy(this.origin).sub(Tc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Jo),a=$o.dot(this.direction),l=-$o.dot(Jo),c=$o.lengthSq(),h=Math.abs(1-o*o),d,f,p,m;if(h>0)if(d=o*l-a,f=o*a-l,m=r*h,d>=0)if(f>=-m)if(f<=m){let w=1/h;d*=w,f*=w,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Tc).addScaledVector(Jo,f),p}intersectSphere(t,e){if(t.radius<0)return null;Yi.subVectors(t.center,this.origin);let n=Yi.dot(this.direction),s=Yi.dot(Yi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Yi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,f=t.y-o.y,p=t.z-o.z,m=e.x-o.x,w=e.y-o.y,g=e.z-o.z,x=n.x-o.x,v=n.y-o.y,A=n.z-o.z,b=Math.abs(l),L=Math.abs(c),C=Math.abs(h),y,T,V,D,nt,dt,$,yt,K,ft,at,Pt;if(b>=L&&b>=C?(V=l,dt=d,K=m,Pt=x,l>=0?(y=c,T=h,D=f,nt=p,$=w,yt=g,ft=v,at=A):(y=h,T=c,D=p,nt=f,$=g,yt=w,ft=A,at=v)):L>=C?(V=c,dt=f,K=w,Pt=v,c>=0?(y=h,T=l,D=p,nt=d,$=g,yt=m,ft=A,at=x):(y=l,T=h,D=d,nt=p,$=m,yt=g,ft=x,at=A)):(V=h,dt=p,K=g,Pt=A,h>=0?(y=l,T=c,D=d,nt=f,$=m,yt=w,ft=x,at=v):(y=c,T=l,D=f,nt=d,$=w,yt=m,ft=v,at=x)),V===0)return null;let _t=y/V,Dt=T/V,ee=1/V,se=D-_t*dt,_e=nt-Dt*dt,P=$-_t*K,ht=yt-Dt*K,Rt=ft-_t*Pt,kt=at-Dt*Pt,u=Rt*ht-kt*P,S=se*kt-_e*Rt,j=P*_e-ht*se;if(s){if(u<0||S<0||j<0)return null}else if((u<0||S<0||j<0)&&(u>0||S>0||j>0))return null;let z=u+S+j;if(z===0)return null;let lt=ee*(u*dt+S*K+j*Pt);return(z>0?lt<0:lt>0)?null:this.at(lt/z,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wn=class extends yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},lu=new hn,bs=new lr,Ko=new Oi,cu=new Y,jo=new Y,Qo=new Y,ta=new Y,Cc=new Y,ea=new Y,hu=new Y,na=new Y,Vt=class extends vn{constructor(t=new en,e=new wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this.count=t.count,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Cc.fromBufferAttribute(d,t),o?ea.addScaledVector(Cc,h):ea.addScaledVector(Cc.sub(e),h))}e.add(ea)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(r),bs.copy(t.ray).recast(t.near),!(Ko.containsPoint(bs.origin)===!1&&(bs.intersectSphere(Ko,cu)===null||bs.origin.distanceToSquared(cu)>(t.far-t.near)**2))&&(lu.copy(r).invert(),bs.copy(t.ray).applyMatrix4(lu),!(n.boundingBox!==null&&bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bs)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,w=f.length;m<w;m++){let g=f[m],x=o[g.materialIndex],v=Math.max(g.start,p.start),A=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let b=v,L=A;b<L;b+=3){let C=a.getX(b),y=a.getX(b+1),T=a.getX(b+2);s=ia(this,x,t,n,c,h,d,C,y,T),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),w=Math.min(a.count,p.start+p.count);for(let g=m,x=w;g<x;g+=3){let v=a.getX(g),A=a.getX(g+1),b=a.getX(g+2);s=ia(this,o,t,n,c,h,d,v,A,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,w=f.length;m<w;m++){let g=f[m],x=o[g.materialIndex],v=Math.max(g.start,p.start),A=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let b=v,L=A;b<L;b+=3){let C=b,y=b+1,T=b+2;s=ia(this,x,t,n,c,h,d,C,y,T),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,p.start),w=Math.min(l.count,p.start+p.count);for(let g=m,x=w;g<x;g+=3){let v=g,A=g+1,b=g+2;s=ia(this,o,t,n,c,h,d,v,A,b),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function jf(i,t,e,n,s,r,o,a){let l;if(t.side===Bn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ms,a),l===null)return null;na.copy(a),na.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(na);return c<e.near||c>e.far?null:{distance:c,point:na.clone(),object:i}}function ia(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,jo),i.getVertexPosition(l,Qo),i.getVertexPosition(c,ta);let h=jf(i,t,e,n,jo,Qo,ta,hu);if(h){let d=new Y;Zi.getBarycoord(hu,jo,Qo,ta,d),s&&(h.uv=Zi.getInterpolatedAttribute(s,a,l,c,d,new At)),r&&(h.uv1=Zi.getInterpolatedAttribute(r,a,l,c,d,new At)),o&&(h.normal=Zi.getInterpolatedAttribute(o,a,l,c,d,new Y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new Y,materialIndex:0};Zi.getNormal(jo,Qo,ta,f.normal),h.face=f,h.barycoord=d}return h}var Jr=class extends jn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=On,h=On,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $r=class extends tn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},js=new hn,uu=new hn,sa=[],du=new Ui,Qf=new hn,Pr=new Vt,Ir=new Oi,hi=class extends Vt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $r(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Qf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,js),du.copy(t.boundingBox).applyMatrix4(js),this.boundingBox.union(du)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,js),Ir.copy(t.boundingSphere).applyMatrix4(js),this.boundingSphere.union(Ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(n),t.ray.intersectsSphere(Ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,js),uu.multiplyMatrices(n,js),Pr.matrixWorld=uu,Pr.raycast(t,sa);for(let o=0,a=sa.length;o<a;o++){let l=sa[o];l.instanceId=r,l.object=this,e.push(l)}sa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new $r(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Jr(new Float32Array(s*this.count),s,this.count,cl,Si));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},As=new Oi,tp=new At(.5,.5),ra=new Y,hs=class{constructor(t=new Ci,e=new Ci,n=new Ci,s=new Ci,r=new Ci,o=new Ci){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gi,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],p=r[7],m=r[8],w=r[9],g=r[10],x=r[11],v=r[12],A=r[13],b=r[14],L=r[15];if(s[0].setComponents(c-o,p-h,x-m,L-v).normalize(),s[1].setComponents(c+o,p+h,x+m,L+v).normalize(),s[2].setComponents(c+a,p+d,x+w,L+A).normalize(),s[3].setComponents(c-a,p-d,x-w,L-A).normalize(),n)s[4].setComponents(l,f,g,b).normalize(),s[5].setComponents(c-l,p-f,x-g,L-b).normalize();else if(s[4].setComponents(c-l,p-f,x-g,L-b).normalize(),e===gi)s[5].setComponents(c+l,p+f,x+g,L+b).normalize();else if(e===sr)s[5].setComponents(l,f,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(t){As.center.set(0,0,0);let e=tp.distanceTo(t.center);return As.radius=.7071067811865476+e,As.applyMatrix4(t.matrixWorld),this.intersectsSphere(As)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ra.x=s.normal.x>0?t.max.x:t.min.x,ra.y=s.normal.y>0?t.max.y:t.min.y,ra.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},fu=new hn,Ia=class i{constructor(){this.coordinateSystem=gi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];fu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new hs),n[s].setFromProjectionMatrix(fu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new hs),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var us=class extends yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Fa=new Y,La=new Y,pu=new hn,Fr=new lr,oa=new Oi,Rc=new Y,mu=new Y,Da=class extends vn{constructor(t=new en,e=new us){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Fa.fromBufferAttribute(e,s-1),La.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Fa.distanceTo(La);t.setAttribute("lineDistance",new Ze(n,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(s),oa.radius+=r,t.ray.intersectsSphere(oa)===!1)return;pu.copy(s).invert(),Fr.copy(t.ray).applyMatrix4(pu);let a=r/s.getMaxScaleOnAxis(),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let w=p,g=m-1;w<g;w+=c){let x=h.getX(w),v=h.getX(w+1),A=aa(this,t,Fr,l,x,v,w);A&&e.push(A)}if(this.isLineLoop){let w=h.getX(m-1),g=h.getX(p),x=aa(this,t,Fr,l,w,g,m-1);x&&e.push(x)}}else{let p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let w=p,g=m-1;w<g;w+=c){let x=aa(this,t,Fr,l,w,w+1,w);x&&e.push(x)}if(this.isLineLoop){let w=aa(this,t,Fr,l,m-1,p,m-1);w&&e.push(w)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function aa(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Fa.fromBufferAttribute(a,s),La.fromBufferAttribute(a,r),e.distanceSqToSegment(Fa,La,Rc,mu)>n)return;Rc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Rc);if(!(c<t.near||c>t.far))return{distance:c,point:mu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var gu=new Y,xu=new Y,Es=class extends Da{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)gu.fromBufferAttribute(e,s),xu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gu.distanceTo(xu);t.setAttribute("lineDistance",new Ze(n,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ts=class extends yi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_u=new hn,Oc=new lr,la=new Oi,ca=new Y,cr=class extends vn{constructor(t=new en,e=new Ts){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(s),la.radius+=r,t.ray.intersectsSphere(la)===!1)return;_u.copy(s).invert(),Oc.copy(t.ray).applyMatrix4(_u);let a=r/s.getMaxScaleOnAxis(),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=f,w=p;m<w;m++){let g=c.getX(m);ca.fromBufferAttribute(d,g),yu(ca,g,l,s,t,e,this)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let m=f,w=p;m<w;m++)ca.fromBufferAttribute(d,m),yu(ca,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yu(i,t,e,n,s,r,o){let a=Oc.distanceSqToPoint(i);if(a<e){let l=new Y;Oc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Kr=class extends jn{constructor(t=[],e=Ls,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},jr=class extends jn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ki=class extends jn{constructor(t,e,n=Ri,s,r,o,a=On,l=On,c,h=$i,d=1){if(h!==$i&&h!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new or(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Qr=class extends Ki{constructor(t,e=Ri,n=Ls,s,r,o=On,a=On,l,c=$i){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},to=class extends jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ze=class i extends en{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,p=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(d,2));function m(w,g,x,v,A,b,L,C,y,T,V){let D=b/y,nt=L/T,dt=b/2,$=L/2,yt=C/2,K=y+1,ft=T+1,at=0,Pt=0,_t=new Y;for(let Dt=0;Dt<ft;Dt++){let ee=Dt*nt-$;for(let se=0;se<K;se++){let _e=se*D-dt;_t[w]=_e*v,_t[g]=ee*A,_t[x]=yt,c.push(_t.x,_t.y,_t.z),_t[w]=0,_t[g]=0,_t[x]=C>0?1:-1,h.push(_t.x,_t.y,_t.z),d.push(se/y),d.push(1-Dt/T),at+=1}}for(let Dt=0;Dt<T;Dt++)for(let ee=0;ee<y;ee++){let se=f+ee+K*Dt,_e=f+ee+K*(Dt+1),P=f+(ee+1)+K*(Dt+1),ht=f+(ee+1)+K*Dt;l.push(se,_e,ht),l.push(_e,P,ht),Pt+=6}a.addGroup(p,Pt,V),p+=Pt,f+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Bi=class i extends en{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,f=e,p=2*d+f,m=n*2+r,w=s+1,g=new Y,x=new Y;for(let v=0;v<=m;v++){let A=0,b=0,L=0,C=0;if(v<=n){let V=v/n,D=V*Math.PI/2;b=-h-t*Math.cos(D),L=t*Math.sin(D),C=-t*Math.cos(D),A=V*d}else if(v<=n+r){let V=(v-n)/r;b=-h+V*e,L=t,C=0,A=d+V*f}else{let V=(v-n-r)/n,D=V*Math.PI/2;b=h+t*Math.sin(D),L=t*Math.cos(D),C=t*Math.sin(D),A=d+f+V*d}let y=Math.max(0,Math.min(1,A/p)),T=0;v===0?T=.5/s:v===m&&(T=-.5/s);for(let V=0;V<=s;V++){let D=V/s,nt=D*Math.PI*2,dt=Math.sin(nt),$=Math.cos(nt);x.x=-L*$,x.y=b,x.z=L*dt,a.push(x.x,x.y,x.z),g.set(-L*$,C,L*dt),g.normalize(),l.push(g.x,g.y,g.z),c.push(D+T,y)}if(v>0){let V=(v-1)*w;for(let D=0;D<s;D++){let nt=V+D,dt=V+D+1,$=v*w+D,yt=v*w+D+1;o.push(nt,dt,$),o.push(dt,yt,$)}}}this.setIndex(o),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Wn=class i extends en{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new Y,h=new At;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let p=n+d/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(a,3)),this.setAttribute("uv",new Ze(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},we=class i extends en{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],p=[],m=0,w=[],g=n/2,x=0;v(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Ze(d,3)),this.setAttribute("normal",new Ze(f,3)),this.setAttribute("uv",new Ze(p,2));function v(){let b=new Y,L=new Y,C=0,y=(e-t)/n;for(let T=0;T<=r;T++){let V=[],D=T/r,nt=D*(e-t)+t;for(let dt=0;dt<=s;dt++){let $=dt/s,yt=$*l+a,K=Math.sin(yt),ft=Math.cos(yt);L.x=nt*K,L.y=-D*n+g,L.z=nt*ft,d.push(L.x,L.y,L.z),b.set(K,y,ft).normalize(),f.push(b.x,b.y,b.z),p.push($,1-D),V.push(m++)}w.push(V)}for(let T=0;T<s;T++)for(let V=0;V<r;V++){let D=w[V][T],nt=w[V+1][T],dt=w[V+1][T+1],$=w[V][T+1];(t>0||V!==0)&&(h.push(D,nt,$),C+=3),(e>0||V!==r-1)&&(h.push(nt,dt,$),C+=3)}c.addGroup(x,C,0),x+=C}function A(b){let L=m,C=new At,y=new Y,T=0,V=b===!0?t:e,D=b===!0?1:-1;for(let dt=1;dt<=s;dt++)d.push(0,g*D,0),f.push(0,D,0),p.push(.5,.5),m++;let nt=m;for(let dt=0;dt<=s;dt++){let yt=dt/s*l+a,K=Math.cos(yt),ft=Math.sin(yt);y.x=V*ft,y.y=g*D,y.z=V*K,d.push(y.x,y.y,y.z),f.push(0,D,0),C.x=K*.5+.5,C.y=ft*.5*D+.5,p.push(C.x,C.y),m++}for(let dt=0;dt<s;dt++){let $=L+dt,yt=nt+dt;b===!0?h.push(yt,yt+1,$):h.push(yt+1,yt,$),T+=3}c.addGroup(x,T,b===!0?1:2),x+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Nn=class i extends we{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},eo=class i extends en{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(r.slice(),3)),this.setAttribute("uv",new Ze(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let A=new Y,b=new Y,L=new Y;for(let C=0;C<e.length;C+=3)p(e[C+0],A),p(e[C+1],b),p(e[C+2],L),l(A,b,L,v)}function l(v,A,b,L){let C=L+1,y=[];for(let T=0;T<=C;T++){y[T]=[];let V=v.clone().lerp(b,T/C),D=A.clone().lerp(b,T/C),nt=C-T;for(let dt=0;dt<=nt;dt++)dt===0&&T===C?y[T][dt]=V:y[T][dt]=V.clone().lerp(D,dt/nt)}for(let T=0;T<C;T++)for(let V=0;V<2*(C-T)-1;V++){let D=Math.floor(V/2);V%2===0?(f(y[T][D+1]),f(y[T+1][D]),f(y[T][D])):(f(y[T][D+1]),f(y[T+1][D+1]),f(y[T+1][D]))}}function c(v){let A=new Y;for(let b=0;b<r.length;b+=3)A.x=r[b+0],A.y=r[b+1],A.z=r[b+2],A.normalize().multiplyScalar(v),r[b+0]=A.x,r[b+1]=A.y,r[b+2]=A.z}function h(){let v=new Y;for(let A=0;A<r.length;A+=3){v.x=r[A+0],v.y=r[A+1],v.z=r[A+2];let b=g(v)/2/Math.PI+.5,L=x(v)/Math.PI+.5;o.push(b,1-L)}m(),d()}function d(){for(let v=0;v<o.length;v+=6){let A=o[v+0],b=o[v+2],L=o[v+4],C=Math.max(A,b,L),y=Math.min(A,b,L);C>.9&&y<.1&&(A<.2&&(o[v+0]+=1),b<.2&&(o[v+2]+=1),L<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function p(v,A){let b=v*3;A.x=t[b+0],A.y=t[b+1],A.z=t[b+2]}function m(){let v=new Y,A=new Y,b=new Y,L=new Y,C=new At,y=new At,T=new At;for(let V=0,D=0;V<r.length;V+=9,D+=6){v.set(r[V+0],r[V+1],r[V+2]),A.set(r[V+3],r[V+4],r[V+5]),b.set(r[V+6],r[V+7],r[V+8]),C.set(o[D+0],o[D+1]),y.set(o[D+2],o[D+3]),T.set(o[D+4],o[D+5]),L.copy(v).add(A).add(b).divideScalar(3);let nt=g(L);w(C,D+0,v,nt),w(y,D+2,A,nt),w(T,D+4,b,nt)}}function w(v,A,b,L){L<0&&v.x===1&&(o[A]=v.x-1),b.x===0&&b.z===0&&(o[A]=L/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function x(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},si=class i extends eo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ui=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new At:new Y);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new Y,s=[],r=[],o=[],a=new Y,l=new hn;for(let p=0;p<=t;p++){let m=p/t;s[p]=this.getTangentAt(m,new Y)}r[0]=new Y,o[0]=new Y;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(on(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(on(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],p*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},hr=class extends ui{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new At){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*d+this.aX,c=f*d+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Na=class extends hr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ph(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var vu=new Y,Mu=new Y,Pc=new ph,Ic=new ph,Fc=new ph,di=class extends ui{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new Y){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Mu.subVectors(s[0],s[1]).add(s[0]),c=Mu);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(vu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=vu),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),p),w=Math.pow(d.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(h),p);w<1e-4&&(w=1),m<1e-4&&(m=w),g<1e-4&&(g=w),Pc.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,m,w,g),Ic.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,m,w,g),Fc.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,m,w,g)}else this.curveType==="catmullrom"&&(Pc.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Ic.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Fc.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(Pc.calc(l),Ic.calc(l),Fc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Y().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Su(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function ep(i,t){let e=1-i;return e*e*t}function np(i,t){return 2*(1-i)*i*t}function ip(i,t){return i*i*t}function Nr(i,t,e,n){return ep(i,t)+np(i,e)+ip(i,n)}function sp(i,t){let e=1-i;return e*e*e*t}function rp(i,t){let e=1-i;return 3*e*e*i*t}function op(i,t){return 3*(1-i)*i*i*t}function ap(i,t){return i*i*i*t}function zr(i,t,e,n,s){return sp(i,t)+rp(i,e)+op(i,n)+ap(i,s)}var no=class extends ui{constructor(t=new At,e=new At,n=new At,s=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new At){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zr(t,s.x,r.x,o.x,a.x),zr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},za=class extends ui{constructor(t=new Y,e=new Y,n=new Y,s=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Y){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zr(t,s.x,r.x,o.x,a.x),zr(t,s.y,r.y,o.y,a.y),zr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},io=class extends ui{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ua=class extends ui{constructor(t=new Y,e=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new Y){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Y){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},so=class extends ui{constructor(t=new At,e=new At,n=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new At){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Nr(t,s.x,r.x,o.x),Nr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cs=class extends ui{constructor(t=new Y,e=new Y,n=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Y){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Nr(t,s.x,r.x,o.x),Nr(t,s.y,r.y,o.y),Nr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ro=class extends ui{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Su(a,l.x,c.x,h.x,d.x),Su(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new At().fromArray(s))}return this}},Oa=Object.freeze({__proto__:null,ArcCurve:Na,CatmullRomCurve3:di,CubicBezierCurve:no,CubicBezierCurve3:za,EllipseCurve:hr,LineCurve:io,LineCurve3:Ua,QuadraticBezierCurve:so,QuadraticBezierCurve3:Cs,SplineCurve:ro}),Ba=class extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oa[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Oa[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},oo=class extends Ba{constructor(t){super(),this.type="Path",this.currentPoint=new At,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new io(this.currentPoint.clone(),new At(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new so(this.currentPoint.clone(),new At(t,e),new At(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new no(this.currentPoint.clone(),new At(t,e),new At(n,s),new At(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ro(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new hr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},vi=class extends oo{constructor(t){super(t),this.uuid=xs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new oo().fromJSON(s))}return this}};function lp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=vd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=fp(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let f=e;f<s;f+=e){let p=i[f],m=i[f+1];p<a&&(a=p),m<l&&(l=m),p>h&&(h=p),m>d&&(d=m)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return ao(r,o,e,a,l,c,0),o}function vd(i,t,e,n,s){let r;if(s===bp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=wu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=wu(o/n|0,i[o],i[o+1],r);return r&&ur(r,r.next)&&(co(r),r=r.next),r}function Rs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ur(e,e.next)||Cn(e.prev,e,e.next)===0)){if(co(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ao(i,t,e,n,s,r,o){if(!i)return;!o&&r&&_p(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?hp(i,n,s,r):cp(i)){t.push(l.i,i.i,c.i),co(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=up(Rs(i),t),ao(i,t,e,n,s,r,2)):o===2&&dp(i,t,e,n,s,r):ao(Rs(i),t,e,n,s,r,1);break}}}function cp(i){let t=i.prev,e=i,n=i.next;if(Cn(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),f=Math.max(s,r,o),p=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=d&&m.y<=p&&Lr(s,a,r,l,o,c,m.x,m.y)&&Cn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function hp(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Cn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,f=o.y,p=Math.min(a,l,c),m=Math.min(h,d,f),w=Math.max(a,l,c),g=Math.max(h,d,f),x=Bc(p,m,t,e,n),v=Bc(w,g,t,e,n),A=i.prevZ,b=i.nextZ;for(;A&&A.z>=x&&b&&b.z<=v;){if(A.x>=p&&A.x<=w&&A.y>=m&&A.y<=g&&A!==s&&A!==o&&Lr(a,h,l,d,c,f,A.x,A.y)&&Cn(A.prev,A,A.next)>=0||(A=A.prevZ,b.x>=p&&b.x<=w&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&Lr(a,h,l,d,c,f,b.x,b.y)&&Cn(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;A&&A.z>=x;){if(A.x>=p&&A.x<=w&&A.y>=m&&A.y<=g&&A!==s&&A!==o&&Lr(a,h,l,d,c,f,A.x,A.y)&&Cn(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=w&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&Lr(a,h,l,d,c,f,b.x,b.y)&&Cn(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function up(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ur(n,s)&&Sd(n,e,e.next,s)&&lo(n,s)&&lo(s,n)&&(t.push(n.i,e.i,s.i),co(e),co(e.next),e=i=s),e=e.next}while(e!==i);return Rs(e)}function dp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Mp(o,a)){let l=wd(o,a);o=Rs(o,o.next),l=Rs(l,l.next),ao(o,t,e,n,s,r,0),ao(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function fp(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=vd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(vp(c))}s.sort(pp);for(let r=0;r<s.length;r++)e=mp(s[r],e);return e}function pp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function mp(i,t){let e=gp(i,t);if(!e)return t;let n=wd(e,i);return Rs(n,n.next),Rs(e,e.next)}function gp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(ur(i,e))return e;do{if(ur(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Md(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);lo(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&xp(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function xp(i,t){return Cn(i.prev,i,t.prev)<0&&Cn(t.next,i,i.next)<0}function _p(i,t,e,n){let s=i;do s.z===0&&(s.z=Bc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,yp(s)}function yp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Bc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function vp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Md(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Lr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Md(i,t,e,n,s,r,o,a)}function Mp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Sp(i,t)&&(lo(i,t)&&lo(t,i)&&wp(i,t)&&(Cn(i.prev,i,t.prev)||Cn(i,t.prev,t))||ur(i,t)&&Cn(i.prev,i,i.next)>0&&Cn(t.prev,t,t.next)>0)}function Cn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ur(i,t){return i.x===t.x&&i.y===t.y}function Sd(i,t,e,n){let s=ua(Cn(i,t,e)),r=ua(Cn(i,t,n)),o=ua(Cn(e,n,i)),a=ua(Cn(e,n,t));return!!(s!==r&&o!==a||s===0&&ha(i,e,t)||r===0&&ha(i,n,t)||o===0&&ha(e,i,n)||a===0&&ha(e,t,n))}function ha(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ua(i){return i>0?1:i<0?-1:0}function Sp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Sd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function lo(i,t){return Cn(i.prev,i,i.next)<0?Cn(i,t,i.next)>=0&&Cn(i,i.prev,t)>=0:Cn(i,t,i.prev)<0||Cn(i,i.next,t)<0}function wp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function wd(i,t){let e=kc(i.i,i.x,i.y),n=kc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function wu(i,t,e,n){let s=kc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function co(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function kc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Vc=class{static triangulate(t,e,n=2){return lp(t,e,n)}},Ni=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];bu(t),Au(n,t);let o=t.length;e.forEach(bu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Au(n,e[l]);let a=Vc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function bu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Au(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ho=class i extends en{constructor(t=new vi([new At(.5,.5),new At(-.5,.5),new At(-.5,-.5),new At(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Ze(s,3)),this.setAttribute("uv",new Ze(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:p-.1,w=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,x=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Ap,A,b=!1,L,C,y,T;if(x){A=x.getSpacedPoints(h),b=!0,f=!1;let B=x.isCatmullRomCurve3?x.closed:!1;L=x.computeFrenetFrames(h,B),C=new Y,y=new Y,T=new Y}f||(g=0,p=0,m=0,w=0);let V=a.extractPoints(c),D=V.shape,nt=V.holes;if(!Ni.isClockWise(D)){D=D.reverse();for(let B=0,mt=nt.length;B<mt;B++){let pt=nt[B];Ni.isClockWise(pt)&&(nt[B]=pt.reverse())}}function $(B){let pt=10000000000000001e-36,Ut=B[0];for(let Xt=1;Xt<=B.length;Xt++){let ce=Xt%B.length,Wt=B[ce],ue=Wt.x-Ut.x,Zt=Wt.y-Ut.y,te=ue*ue+Zt*Zt,H=Math.max(Math.abs(Wt.x),Math.abs(Wt.y),Math.abs(Ut.x),Math.abs(Ut.y)),Ee=pt*H*H;if(te<=Ee){B.splice(ce,1),Xt--;continue}Ut=Wt}}$(D),nt.forEach($);let yt=nt.length,K=D;for(let B=0;B<yt;B++){let mt=nt[B];D=D.concat(mt)}function ft(B,mt,pt){return mt||Ge("ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(mt,pt)}let at=D.length;function Pt(B,mt,pt){let Ut,Xt,ce,Wt=B.x-mt.x,ue=B.y-mt.y,Zt=pt.x-B.x,te=pt.y-B.y,H=Wt*Wt+ue*ue,Ee=Wt*te-ue*Zt;if(Math.abs(Ee)>Number.EPSILON){let tt=Math.sqrt(H),Z=Math.sqrt(Zt*Zt+te*te),st=mt.x-ue/tt,ne=mt.y+Wt/tt,Nt=pt.x-te/Z,$t=pt.y+Zt/Z,U=((Nt-st)*te-($t-ne)*Zt)/(Wt*te-ue*Zt);Ut=st+Wt*U-B.x,Xt=ne+ue*U-B.y;let M=Ut*Ut+Xt*Xt;if(M<=2)return new At(Ut,Xt);ce=Math.sqrt(M/2)}else{let tt=!1;Wt>Number.EPSILON?Zt>Number.EPSILON&&(tt=!0):Wt<-Number.EPSILON?Zt<-Number.EPSILON&&(tt=!0):Math.sign(ue)===Math.sign(te)&&(tt=!0),tt?(Ut=-ue,Xt=Wt,ce=Math.sqrt(H)):(Ut=Wt,Xt=ue,ce=Math.sqrt(H/2))}return new At(Ut/ce,Xt/ce)}let _t=[];for(let B=0,mt=K.length,pt=mt-1,Ut=B+1;B<mt;B++,pt++,Ut++)pt===mt&&(pt=0),Ut===mt&&(Ut=0),_t[B]=Pt(K[B],K[pt],K[Ut]);let Dt=[],ee,se=_t.concat();for(let B=0,mt=yt;B<mt;B++){let pt=nt[B];ee=[];for(let Ut=0,Xt=pt.length,ce=Xt-1,Wt=Ut+1;Ut<Xt;Ut++,ce++,Wt++)ce===Xt&&(ce=0),Wt===Xt&&(Wt=0),ee[Ut]=Pt(pt[Ut],pt[ce],pt[Wt]);Dt.push(ee),se=se.concat(ee)}let _e;if(g===0)_e=Ni.triangulateShape(K,nt);else{let B=[],mt=[];for(let pt=0;pt<g;pt++){let Ut=pt/g,Xt=p*Math.cos(Ut*Math.PI/2),ce=m*Math.sin(Ut*Math.PI/2)+w;for(let Wt=0,ue=K.length;Wt<ue;Wt++){let Zt=ft(K[Wt],_t[Wt],ce);S(Zt.x,Zt.y,-Xt),Ut===0&&B.push(Zt)}for(let Wt=0,ue=yt;Wt<ue;Wt++){let Zt=nt[Wt];ee=Dt[Wt];let te=[];for(let H=0,Ee=Zt.length;H<Ee;H++){let tt=ft(Zt[H],ee[H],ce);S(tt.x,tt.y,-Xt),Ut===0&&te.push(tt)}Ut===0&&mt.push(te)}}_e=Ni.triangulateShape(B,mt)}let P=_e.length,ht=m+w;for(let B=0;B<at;B++){let mt=f?ft(D[B],se[B],ht):D[B];b?(y.copy(L.normals[0]).multiplyScalar(mt.x),C.copy(L.binormals[0]).multiplyScalar(mt.y),T.copy(A[0]).add(y).add(C),S(T.x,T.y,T.z)):S(mt.x,mt.y,0)}for(let B=1;B<=h;B++)for(let mt=0;mt<at;mt++){let pt=f?ft(D[mt],se[mt],ht):D[mt];b?(y.copy(L.normals[B]).multiplyScalar(pt.x),C.copy(L.binormals[B]).multiplyScalar(pt.y),T.copy(A[B]).add(y).add(C),S(T.x,T.y,T.z)):S(pt.x,pt.y,d/h*B)}for(let B=g-1;B>=0;B--){let mt=B/g,pt=p*Math.cos(mt*Math.PI/2),Ut=m*Math.sin(mt*Math.PI/2)+w;for(let Xt=0,ce=K.length;Xt<ce;Xt++){let Wt=ft(K[Xt],_t[Xt],Ut);S(Wt.x,Wt.y,d+pt)}for(let Xt=0,ce=nt.length;Xt<ce;Xt++){let Wt=nt[Xt];ee=Dt[Xt];for(let ue=0,Zt=Wt.length;ue<Zt;ue++){let te=ft(Wt[ue],ee[ue],Ut);b?S(te.x,te.y+A[h-1].y,A[h-1].x+pt):S(te.x,te.y,d+pt)}}}Rt(),kt();function Rt(){let B=s.length/3;if(f){let mt=0,pt=at*mt;for(let Ut=0;Ut<P;Ut++){let Xt=_e[Ut];j(Xt[2]+pt,Xt[1]+pt,Xt[0]+pt)}mt=h+g*2,pt=at*mt;for(let Ut=0;Ut<P;Ut++){let Xt=_e[Ut];j(Xt[0]+pt,Xt[1]+pt,Xt[2]+pt)}}else{for(let mt=0;mt<P;mt++){let pt=_e[mt];j(pt[2],pt[1],pt[0])}for(let mt=0;mt<P;mt++){let pt=_e[mt];j(pt[0]+at*h,pt[1]+at*h,pt[2]+at*h)}}n.addGroup(B,s.length/3-B,0)}function kt(){let B=s.length/3,mt=0;u(K,mt),mt+=K.length;for(let pt=0,Ut=nt.length;pt<Ut;pt++){let Xt=nt[pt];u(Xt,mt),mt+=Xt.length}n.addGroup(B,s.length/3-B,1)}function u(B,mt){let pt=B.length;for(;--pt>=0;){let Ut=pt,Xt=pt-1;Xt<0&&(Xt=B.length-1);for(let ce=0,Wt=h+g*2;ce<Wt;ce++){let ue=at*ce,Zt=at*(ce+1),te=mt+Ut+ue,H=mt+Xt+ue,Ee=mt+Xt+Zt,tt=mt+Ut+Zt;z(te,H,Ee,tt)}}}function S(B,mt,pt){l.push(B),l.push(mt),l.push(pt)}function j(B,mt,pt){lt(B),lt(mt),lt(pt);let Ut=s.length/3,Xt=v.generateTopUV(n,s,Ut-3,Ut-2,Ut-1);St(Xt[0]),St(Xt[1]),St(Xt[2])}function z(B,mt,pt,Ut){lt(B),lt(mt),lt(Ut),lt(mt),lt(pt),lt(Ut);let Xt=s.length/3,ce=v.generateSideWallUV(n,s,Xt-6,Xt-3,Xt-2,Xt-1);St(ce[0]),St(ce[1]),St(ce[3]),St(ce[1]),St(ce[2]),St(ce[3])}function lt(B){s.push(l[B*3+0]),s.push(l[B*3+1]),s.push(l[B*3+2])}function St(B){r.push(B.x),r.push(B.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ep(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Oa[s.type]().fromJSON(s)),new i(n,t.options)}},Ap={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new At(r,o),new At(a,l),new At(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[s*3],p=t[s*3+1],m=t[s*3+2],w=t[r*3],g=t[r*3+1],x=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new At(o,1-l),new At(c,1-d),new At(f,1-m),new At(w,1-x)]:[new At(a,1-l),new At(h,1-d),new At(p,1-m),new At(g,1-x)]}};function Ep(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Tn=class i extends eo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},ti=class i extends en{constructor(t=[new At(0,-.5),new At(.5,0),new At(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=on(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new Y,f=new At,p=new Y,m=new Y,w=new Y,g=0,x=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,x=t[v+1].y-t[v].y,p.x=x*1,p.y=-g,p.z=x*0,w.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:w.normalize(),l.push(w.x,w.y,w.z);break;default:g=t[v+1].x-t[v].x,x=t[v+1].y-t[v].y,p.x=x*1,p.y=-g,p.z=x*0,m.copy(p),p.x+=w.x,p.y+=w.y,p.z+=w.z,p.normalize(),l.push(p.x,p.y,p.z),w.copy(m)}for(let v=0;v<=e;v++){let A=n+v*h*s,b=Math.sin(A),L=Math.cos(A);for(let C=0;C<=t.length-1;C++){d.x=t[C].x*b,d.y=t[C].y,d.z=t[C].x*L,o.push(d.x,d.y,d.z),f.x=v/e,f.y=C/(t.length-1),a.push(f.x,f.y);let y=l[3*C+0]*b,T=l[3*C+1],V=l[3*C+0]*L;c.push(y,T,V)}}for(let v=0;v<e;v++)for(let A=0;A<t.length-1;A++){let b=A+v*t.length,L=b,C=b+t.length,y=b+t.length+1,T=b+1;r.push(L,C,T),r.push(y,T,C)}this.setIndex(r),this.setAttribute("position",new Ze(o,3)),this.setAttribute("uv",new Ze(a,2)),this.setAttribute("normal",new Ze(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var In=class i extends en{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,p=[],m=[],w=[],g=[];for(let x=0;x<h;x++){let v=x*f-o;for(let A=0;A<c;A++){let b=A*d-r;m.push(b,-v,0),w.push(0,0,1),g.push(A/a),g.push(1-x/l)}}for(let x=0;x<l;x++)for(let v=0;v<a;v++){let A=v+c*x,b=v+c*(x+1),L=v+1+c*(x+1),C=v+1+c*x;p.push(A,b,C),p.push(b,L,C)}this.setIndex(p),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(w,3)),this.setAttribute("uv",new Ze(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},uo=class i extends en{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=t,f=(e-t)/s,p=new Y,m=new At;for(let w=0;w<=s;w++){for(let g=0;g<=n;g++){let x=r+g/n*o;p.x=d*Math.cos(x),p.y=d*Math.sin(x),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}d+=f}for(let w=0;w<s;w++){let g=w*(n+1);for(let x=0;x<n;x++){let v=x+g,A=v,b=v+n+1,L=v+n+2,C=v+1;a.push(A,b,C),a.push(b,L,C)}}this.setIndex(a),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ji=class i extends en{constructor(t=new vi([new At(0,.5),new At(-.5,-.5),new At(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ze(s,3)),this.setAttribute("normal",new Ze(r,3)),this.setAttribute("uv",new Ze(o,2));function c(h){let d=s.length/3,f=h.extractPoints(e),p=f.shape,m=f.holes;Ni.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,x=m.length;g<x;g++){let v=m[g];Ni.isClockWise(v)===!0&&(m[g]=v.reverse())}let w=Ni.triangulateShape(p,m);for(let g=0,x=m.length;g<x;g++){let v=m[g];p=p.concat(v)}for(let g=0,x=p.length;g<x;g++){let v=p[g];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let g=0,x=w.length;g<x;g++){let v=w[g],A=v[0]+d,b=v[1]+d,L=v[2]+d;n.push(A,b,L),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Tp(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Tp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ke=class i extends en{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new Y,f=new Y,p=[],m=[],w=[],g=[];for(let x=0;x<=n;x++){let v=[],A=x/n,b=o+A*a,L=t*Math.cos(b),C=Math.sqrt(t*t-L*L),y=0;x===0&&o===0?y=.5/e:x===n&&l===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){let V=T/e,D=s+V*r;d.x=-C*Math.cos(D),d.y=L,d.z=C*Math.sin(D),m.push(d.x,d.y,d.z),f.copy(d).normalize(),w.push(f.x,f.y,f.z),g.push(V+y,1-A),v.push(c++)}h.push(v)}for(let x=0;x<n;x++)for(let v=0;v<e;v++){let A=h[x][v+1],b=h[x][v],L=h[x+1][v],C=h[x+1][v+1];(x!==0||o>0)&&p.push(A,b,C),(x!==n-1||l<Math.PI)&&p.push(b,L,C)}this.setIndex(p),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(w,3)),this.setAttribute("uv",new Ze(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Qi=class i extends en{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],f=new Y,p=new Y,m=new Y;for(let w=0;w<=n;w++){let g=o+w/n*a;for(let x=0;x<=s;x++){let v=x/s*r;p.x=(t+e*Math.cos(g))*Math.cos(v),p.y=(t+e*Math.cos(g))*Math.sin(v),p.z=e*Math.sin(g),c.push(p.x,p.y,p.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),m.subVectors(p,f).normalize(),h.push(m.x,m.y,m.z),d.push(x/s),d.push(w/n)}}for(let w=1;w<=n;w++)for(let g=1;g<=s;g++){let x=(s+1)*w+g-1,v=(s+1)*(w-1)+g-1,A=(s+1)*(w-1)+g,b=(s+1)*w+g;l.push(x,v,b),l.push(v,A,b)}this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var ts=class i extends en{constructor(t=new Cs(new Y(-1,-1,0),new Y(-1,1,0),new Y(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new Y,l=new Y,c=new At,h=new Y,d=[],f=[],p=[],m=[];w(),this.setIndex(m),this.setAttribute("position",new Ze(d,3)),this.setAttribute("normal",new Ze(f,3)),this.setAttribute("uv",new Ze(p,2));function w(){for(let A=0;A<e;A++)g(A);g(r===!1?e:0),v(),x()}function g(A){h=t.getPointAt(A/e,h);let b=o.normals[A],L=o.binormals[A];for(let C=0;C<=s;C++){let y=C/s*Math.PI*2,T=Math.sin(y),V=-Math.cos(y);l.x=V*b.x+T*L.x,l.y=V*b.y+T*L.y,l.z=V*b.z+T*L.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function x(){for(let A=1;A<=e;A++)for(let b=1;b<=s;b++){let L=(s+1)*(A-1)+(b-1),C=(s+1)*A+(b-1),y=(s+1)*A+b,T=(s+1)*(A-1)+b;m.push(L,C,T),m.push(C,y,T)}}function v(){for(let A=0;A<=e;A++)for(let b=0;b<=s;b++)c.x=A/e,c.y=b/s,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Oa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ns(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Eu(s))s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Eu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function qn(i){let t={};for(let e=0;e<i.length;e++){let n=Ns(i[e]);for(let s in n)t[s]=n[s]}return t}function Eu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Cp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:cn.workingColorSpace}var bd={clone:Ns,merge:qn},Rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mi=class extends yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rp,this.fragmentShader=Pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=Cp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.linewidth=t.linewidth,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Pe().setHex(s.value);break;case"v2":this.uniforms[n].value=new At().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Y().fromArray(s.value);break;case"v4":this.uniforms[n].value=new yn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Je().fromArray(s.value);break;case"m4":this.uniforms[n].value=new hn().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ka=class extends Mi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Xn=class extends yi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pe(16777215),this.specular=new Pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=yo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var He=class extends yi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=yo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Va=class extends yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ga=class extends yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Qs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function da(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ds=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ha=class extends ds{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nc,endingEnd:Nc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case zc:r=t,a=2*e-n;break;case Uc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zc:o=t,l=2*n-e;break;case Uc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-e)/(s-e),w=m*m,g=w*m,x=-f*g+2*f*w-f*m,v=(1+f)*g+(-1.5-2*f)*w+(-.5+f)*m+1,A=(-1-p)*g+(1.5+p)*w+.5*m,b=p*g-p*w;for(let L=0;L!==a;++L)r[L]=x*o[h+L]+v*o[c+L]+A*o[l+L]+b*o[d+L];return r}},Wa=class extends ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},Xa=class extends ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},qa=class extends ds{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-e)/(s-e),w=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*w+o[l+g]*m;return r}let f=a*2,p=t-1;for(let m=0;m!==a;++m){let w=o[c+m],g=o[l+m],x=p*f+m*2,v=d[x],A=d[x+1],b=t*f+m*2,L=h[b],C=h[b+1],y=Fp(n,e,v,L,s);r[m]=Ad(y,w,A,C,g)}return r}};function Ad(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Ip(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Fp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Ad(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Ip(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var fi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qs(e,this.TimeBufferType),this.values=Qs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qs(t.times,Array),values:Qs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),da(t.settings)&&(n.settings={inTangents:Qs(t.settings.inTangents,Array),outTangents:Qs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new qa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ur:e=this.InterpolantFactoryMethodDiscrete;break;case Aa:e=this.InterpolantFactoryMethodLinear;break;case ma:e=this.InterpolantFactoryMethodSmooth;break;case Dc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Oe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return Aa;case this.InterpolantFactoryMethodSmooth:return ma;case this.InterpolantFactoryMethodBezier:return Dc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;da(this.settings)&&(Tu(this.settings.inTangents,t),Tu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;da(this.settings)&&(Cu(this.settings.inTangents,t),Cu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ge("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Df(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ge("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ma,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,f=d-n,p=d+n;for(let m=0;m!==n;++m){let w=e[d+m];if(w!==e[f+m]||w!==e[p+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,da(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Tu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Cu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}fi.prototype.ValueTypeName="";fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=Aa;var fs=class extends fi{constructor(t,e,n){super(t,e,n)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Ur;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ya=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}};Ya.prototype.ValueTypeName="color";var Za=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}};Za.prototype.ValueTypeName="number";var Ja=class extends ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)xi.slerpFlat(r,0,o,c-a,o,c,l);return r}},fo=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ja(this.times,this.values,this.getValueSize(),t)}};fo.prototype.ValueTypeName="quaternion";fo.prototype.InterpolantFactoryMethodSmooth=void 0;var ps=class extends fi{constructor(t,e,n){super(t,e,n)}};ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Ur;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}};$a.prototype.ValueTypeName="vector";var Ka=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],m=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ed=new Ka,ja=class{constructor(t){this.manager=t!==void 0?t:Ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ja.DEFAULT_MATERIAL_NAME="__DEFAULT";var po=class extends vn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},mo=class extends po{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Lc=new hn,Ru=new Y,Pu=new Y,Qa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.filterNode=null,this.shadowNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new hn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new yn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ru.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ru),Pu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Lc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Lc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===sr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Lc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this.filterNode=t.filterNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},fa=new Y,pa=new xi,Li=new Y,go=class extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(fa,pa,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fa,pa,Li.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){let s=super.updateWorldMatrix(t,e,n);return this.matrixWorld.decompose(fa,pa,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fa,pa,Li.set(1,1,1)).invert(),s}clone(){return new this.constructor().copy(this)}},ls=new Y,Iu=new At,Fu=new At,Hn=class extends go{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ea*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ac*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,e){return this.getViewBounds(t,Iu,Fu),e.subVectors(Fu,Iu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ac*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var xo=class extends go{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Gc=class extends Qa{constructor(){super(new xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_o=class extends po{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new Gc}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var tr=-90,er=1,dr=class extends vn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Hn(tr,er,t,e);s.layers=this.layers,this.add(s);let r=new Hn(tr,er,t,e);r.layers=this.layers,this.add(r);let o=new Hn(tr,er,t,e);o.layers=this.layers,this.add(o);let a=new Hn(tr,er,t,e);a.layers=this.layers,this.add(a);let l=new Hn(tr,er,t,e);l.layers=this.layers,this.add(l);let c=new Hn(tr,er,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let w=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=w,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},tl=class extends Hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var gh="\\[\\]\\.:\\/",Lp=new RegExp("["+gh+"]","g"),xh="[^"+gh+"]",Dp="[^"+gh.replace("\\.","")+"]",Np=/((?:WC+[\/:])*)/.source.replace("WC",xh),zp=/(WCOD+)?/.source.replace("WCOD",Dp),Up=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xh),Op=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xh),Bp=new RegExp("^"+Np+zp+Up+Op+"$"),kp=["material","materials","bones","map"],Hc=class{constructor(t,e,n){let s=n||Sn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Sn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Lp,"")}static parseTrackName(t){let e=Bp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);kp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Ge("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Sn.Composite=Hc;Sn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Sn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Sn.prototype.GetterByBindingType=[Sn.prototype._getValue_direct,Sn.prototype._getValue_array,Sn.prototype._getValue_arrayElement,Sn.prototype._getValue_toArray];Sn.prototype.SetterByBindingTypeAndVersioning=[[Sn.prototype._setValue_direct,Sn.prototype._setValue_direct_setNeedsUpdate,Sn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Sn.prototype._setValue_array,Sn.prototype._setValue_array_setNeedsUpdate,Sn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Sn.prototype._setValue_arrayElement,Sn.prototype._setValue_arrayElement_setNeedsUpdate,Sn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Sn.prototype._setValue_fromArray,Sn.prototype._setValue_fromArray_setNeedsUpdate,Sn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var D_=new Float32Array(1);var wh=class wh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};wh.prototype.isMatrix2=!0;var Wc=wh;function _h(i,t,e,n){let s=Vp(n);switch(e){case ah:return i*t;case cl:return i*t/s.components*s.byteLength;case hl:return i*t/s.components*s.byteLength;case gs:return i*t*2/s.components*s.byteLength;case ul:return i*t*2/s.components*s.byteLength;case lh:return i*t*3/s.components*s.byteLength;case Ii:return i*t*4/s.components*s.byteLength;case dl:return i*t*4/s.components*s.byteLength;case So:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bo:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pl:case gl:return Math.max(i,16)*Math.max(t,8)/4;case fl:case ml:return Math.max(i,8)*Math.max(t,8)/2;case xl:case _l:case vl:case Ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yl:case Eo:case Sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case El:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Il:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case zl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ul:case Ol:case Bl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case kl:case Vl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case To:case Gl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vp(i){switch(i){case ri:case ih:return{byteLength:1,components:1};case gr:case sh:case Pi:return{byteLength:2,components:1};case al:case ll:return{byteLength:2,components:4};case Ri:case ol:case Si:return{byteLength:4,components:1};case rh:case oh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);function Zd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<d.length;p++){let m=d[f],w=d[p];w.start<=m.start+m.count+1?m.count=Math.max(m.count,w.start+w.count-m.start):(++f,d[f]=w)}d.length=f+1;for(let p=0,m=d.length;p<m;p++){let w=d[p];i.bufferSubData(c,w.start*h.BYTES_PER_ELEMENT,h,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Hp=`#ifdef USE_ALPHAHASH
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
#endif`,jp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n0=`#ifdef USE_IRIDESCENCE
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
#endif`,i0=`#ifdef USE_BUMPMAP
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
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,h0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,u0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,d0=`#define PI 3.141592653589793
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
} // validated`,f0=`vec3 transformedNormal = objectNormal;
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
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_0="gl_FragColor = linearToOutputTexel( gl_FragColor );",y0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
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
#endif`,A0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R0=`#ifdef USE_GRADIENTMAP
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
}`,P0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,D0=`#ifdef USE_ENVMAP
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
#endif`,N0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B0=`PhysicalMaterial material;
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
#endif`,k0=`uniform sampler2D dfgLUT;
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
}`,V0=`
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
#endif`,G0=`#if defined( RE_IndirectDiffuse )
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
#endif`,H0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,X0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,j0=`#if defined( USE_POINTS_UV )
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
#endif`,Q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nm=`#if defined( USE_MORPHCOLORS )
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
#endif`,im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`#ifdef USE_MORPHTARGETS
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
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,am=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,um=`#ifdef USE_NORMALMAP
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
#endif`,dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tm=`float getShadowMask() {
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
}`,Cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
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
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Im=`#ifdef USE_SKINNING
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
#endif`,Fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zm=`#ifdef USE_TRANSMISSION
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
#endif`,Um=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hm=`uniform sampler2D t2D;
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`uniform float backgroundBlurriness;
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`#include <common>
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
}`,Jm=`#if DEPTH_PACKING == 3200
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
}`,$m=`#define DISTANCE
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
}`,Km=`#define DISTANCE
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qm=`uniform sampler2D tEquirect;
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
}`,nn={alphahash_fragment:Hp,alphahash_pars_fragment:Wp,alphamap_fragment:Xp,alphamap_pars_fragment:qp,alphatest_fragment:Yp,alphatest_pars_fragment:Zp,aomap_fragment:Jp,aomap_pars_fragment:$p,batching_pars_vertex:Kp,batching_vertex:jp,begin_vertex:Qp,beginnormal_vertex:t0,bsdfs:e0,iridescence_fragment:n0,bumpmap_pars_fragment:i0,clipping_planes_fragment:s0,clipping_planes_pars_fragment:r0,clipping_planes_pars_vertex:o0,clipping_planes_vertex:a0,color_fragment:l0,color_pars_fragment:c0,color_pars_vertex:h0,color_vertex:u0,common:d0,defaultnormal_vertex:f0,displacementmap_pars_vertex:p0,displacementmap_vertex:m0,emissivemap_fragment:g0,emissivemap_pars_fragment:x0,colorspace_fragment:_0,colorspace_pars_fragment:y0,envmap_fragment:v0,envmap_common_pars_fragment:M0,envmap_pars_fragment:S0,envmap_pars_vertex:w0,envmap_physical_pars_fragment:D0,envmap_vertex:b0,fog_vertex:A0,fog_pars_vertex:E0,fog_fragment:T0,fog_pars_fragment:C0,gradientmap_pars_fragment:R0,lightmap_pars_fragment:P0,lights_lambert_fragment:I0,lights_lambert_pars_fragment:F0,lights_pars_begin:L0,lights_toon_fragment:N0,lights_toon_pars_fragment:z0,lights_phong_fragment:U0,lights_phong_pars_fragment:O0,lights_physical_fragment:B0,lights_physical_pars_fragment:k0,lights_fragment_begin:V0,lights_fragment_maps:G0,lights_fragment_end:H0,lightprobes_pars_fragment:W0,logdepthbuf_fragment:X0,logdepthbuf_pars_fragment:q0,logdepthbuf_pars_vertex:Y0,logdepthbuf_vertex:Z0,map_fragment:J0,map_pars_fragment:$0,map_particle_fragment:K0,map_particle_pars_fragment:j0,metalnessmap_fragment:Q0,metalnessmap_pars_fragment:tm,morphinstance_vertex:em,morphcolor_vertex:nm,morphnormal_vertex:im,morphtarget_pars_vertex:sm,morphtarget_vertex:rm,normal_fragment_begin:om,normal_fragment_maps:am,normal_pars_fragment:lm,normal_pars_vertex:cm,normal_vertex:hm,normalmap_pars_fragment:um,clearcoat_normal_fragment_begin:dm,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:pm,iridescence_pars_fragment:mm,opaque_fragment:gm,packing:xm,premultiplied_alpha_fragment:_m,project_vertex:ym,dithering_fragment:vm,dithering_pars_fragment:Mm,roughnessmap_fragment:Sm,roughnessmap_pars_fragment:wm,shadowmap_pars_fragment:bm,shadowmap_pars_vertex:Am,shadowmap_vertex:Em,shadowmask_pars_fragment:Tm,skinbase_vertex:Cm,skinning_pars_vertex:Rm,skinning_vertex:Pm,skinnormal_vertex:Im,specularmap_fragment:Fm,specularmap_pars_fragment:Lm,tonemapping_fragment:Dm,tonemapping_pars_fragment:Nm,transmission_fragment:zm,transmission_pars_fragment:Um,uv_pars_fragment:Om,uv_pars_vertex:Bm,uv_vertex:km,worldpos_vertex:Vm,background_vert:Gm,background_frag:Hm,backgroundCube_vert:Wm,backgroundCube_frag:Xm,cube_vert:qm,cube_frag:Ym,depth_vert:Zm,depth_frag:Jm,distance_vert:$m,distance_frag:Km,equirect_vert:jm,equirect_frag:Qm,linedashed_vert:tg,linedashed_frag:eg,meshbasic_vert:ng,meshbasic_frag:ig,meshlambert_vert:sg,meshlambert_frag:rg,meshmatcap_vert:og,meshmatcap_frag:ag,meshnormal_vert:lg,meshnormal_frag:cg,meshphong_vert:hg,meshphong_frag:ug,meshphysical_vert:dg,meshphysical_frag:fg,meshtoon_vert:pg,meshtoon_frag:mg,points_vert:gg,points_frag:xg,shadow_vert:_g,shadow_frag:yg,sprite_vert:vg,sprite_frag:Mg},Ae={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]},probesIntensity:{value:[]}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Gi={basic:{uniforms:qn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:nn.meshbasic_vert,fragmentShader:nn.meshbasic_frag},lambert:{uniforms:qn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:nn.meshlambert_vert,fragmentShader:nn.meshlambert_frag},phong:{uniforms:qn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nn.meshphong_vert,fragmentShader:nn.meshphong_frag},standard:{uniforms:qn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nn.meshphysical_vert,fragmentShader:nn.meshphysical_frag},toon:{uniforms:qn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Pe(0)}}]),vertexShader:nn.meshtoon_vert,fragmentShader:nn.meshtoon_frag},matcap:{uniforms:qn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:nn.meshmatcap_vert,fragmentShader:nn.meshmatcap_frag},points:{uniforms:qn([Ae.points,Ae.fog]),vertexShader:nn.points_vert,fragmentShader:nn.points_frag},dashed:{uniforms:qn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nn.linedashed_vert,fragmentShader:nn.linedashed_frag},depth:{uniforms:qn([Ae.common,Ae.displacementmap]),vertexShader:nn.depth_vert,fragmentShader:nn.depth_frag},normal:{uniforms:qn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:nn.meshnormal_vert,fragmentShader:nn.meshnormal_frag},sprite:{uniforms:qn([Ae.sprite,Ae.fog]),vertexShader:nn.sprite_vert,fragmentShader:nn.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nn.background_vert,fragmentShader:nn.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:nn.backgroundCube_vert,fragmentShader:nn.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nn.cube_vert,fragmentShader:nn.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nn.equirect_vert,fragmentShader:nn.equirect_frag},distance:{uniforms:qn([Ae.common,Ae.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nn.distance_vert,fragmentShader:nn.distance_frag},shadow:{uniforms:qn([Ae.lights,Ae.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:nn.shadow_vert,fragmentShader:nn.shadow_frag}};Gi.physical={uniforms:qn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:nn.meshphysical_vert,fragmentShader:nn.meshphysical_frag};var Wl={r:0,b:0,g:0},Sg=new hn,Jd=new Je;Jd.set(-1,0,0,0,1,0,0,0,1);function wg(i,t,e,n,s,r){let o=new Pe(0),a=s===!0?0:1,l,c,h=null,d=0,f=null;function p(v){let A=v.isScene===!0?v.background:null;if(A&&A.isTexture){let b=v.backgroundBlurriness>0;A=t.get(A,b)}return A}function m(v){let A=!1,b=p(v);b===null?g(o,a):b&&b.isColor&&(g(b,1),A=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?e.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function w(v,A){let b=p(A);b&&b.isCubeTexture?(c===void 0&&(c=new Vt(new ze(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Ns(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,C,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sg.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jd),c.material.toneMapped=cn.getTransfer(b.colorSpace)!==dn,(h!==b||d!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Vt(new In(2,2),new Mi({name:"BackgroundMaterial",uniforms:Ns(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=cn.getTransfer(b.colorSpace)!==dn,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,A){v.getRGB(Wl,mh(i)),e.buffers.color.setClear(Wl.r,Wl.g,Wl.b,A,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,A=1){o.set(v),a=A,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:m,addToRenderList:w,dispose:x}}function bg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(nt,dt,$,yt,K){let ft=!1,at=d(nt,yt,$,dt);r!==at&&(r=at,c(r.object)),ft=p(nt,yt,$,K),ft&&m(nt,yt,$,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(ft||o)&&(o=!1,b(nt,dt,$,yt),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(nt){return i.bindVertexArray(nt)}function h(nt){return i.deleteVertexArray(nt)}function d(nt,dt,$,yt){let K=yt.wireframe===!0,ft=n[dt.id];ft===void 0&&(ft={},n[dt.id]=ft);let at=nt.isInstancedMesh===!0?nt.id:0,Pt=ft[at];Pt===void 0&&(Pt={},ft[at]=Pt);let _t=Pt[$.id];_t===void 0&&(_t={},Pt[$.id]=_t);let Dt=_t[K];return Dt===void 0&&(Dt=f(l()),_t[K]=Dt),Dt}function f(nt){let dt=[],$=[],yt=[];for(let K=0;K<e;K++)dt[K]=0,$[K]=0,yt[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:dt,enabledAttributes:$,attributeDivisors:yt,object:nt,attributes:{},index:null}}function p(nt,dt,$,yt){let K=r.attributes,ft=dt.attributes,at=0,Pt=$.getAttributes();for(let _t in Pt)if(Pt[_t].location>=0){let ee=K[_t],se=ft[_t];if(se===void 0&&(_t==="instanceMatrix"&&nt.instanceMatrix&&(se=nt.instanceMatrix),_t==="instanceColor"&&nt.instanceColor&&(se=nt.instanceColor)),ee===void 0||ee.attribute!==se||se&&ee.data!==se.data)return!0;at++}return r.attributesNum!==at||r.index!==yt}function m(nt,dt,$,yt){let K={},ft=dt.attributes,at=0,Pt=$.getAttributes();for(let _t in Pt)if(Pt[_t].location>=0){let ee=ft[_t];ee===void 0&&(_t==="instanceMatrix"&&nt.instanceMatrix&&(ee=nt.instanceMatrix),_t==="instanceColor"&&nt.instanceColor&&(ee=nt.instanceColor));let se={};se.attribute=ee,ee&&ee.data&&(se.data=ee.data),K[_t]=se,at++}r.attributes=K,r.attributesNum=at,r.index=yt}function w(){let nt=r.newAttributes;for(let dt=0,$=nt.length;dt<$;dt++)nt[dt]=0}function g(nt){x(nt,0)}function x(nt,dt){let $=r.newAttributes,yt=r.enabledAttributes,K=r.attributeDivisors;$[nt]=1,yt[nt]===0&&(i.enableVertexAttribArray(nt),yt[nt]=1),K[nt]!==dt&&(i.vertexAttribDivisor(nt,dt),K[nt]=dt)}function v(){let nt=r.newAttributes,dt=r.enabledAttributes;for(let $=0,yt=dt.length;$<yt;$++)dt[$]!==nt[$]&&(i.disableVertexAttribArray($),dt[$]=0)}function A(nt,dt,$,yt,K,ft,at){at===!0?i.vertexAttribIPointer(nt,dt,$,K,ft):i.vertexAttribPointer(nt,dt,$,yt,K,ft)}function b(nt,dt,$,yt){w();let K=yt.attributes,ft=$.getAttributes(),at=dt.defaultAttributeValues;for(let Pt in ft){let _t=ft[Pt];if(_t.location>=0){let Dt=K[Pt];if(Dt===void 0&&(Pt==="instanceMatrix"&&nt.instanceMatrix&&(Dt=nt.instanceMatrix),Pt==="instanceColor"&&nt.instanceColor&&(Dt=nt.instanceColor)),Dt!==void 0){let ee=Dt.normalized,se=Dt.itemSize,_e=t.get(Dt);if(_e===void 0)continue;let P=_e.buffer,ht=_e.type,Rt=_e.bytesPerElement,kt=ht===i.INT||ht===i.UNSIGNED_INT||Dt.gpuType===ol;if(Dt.isInterleavedBufferAttribute){let u=Dt.data,S=u.isInterleavedBuffer===!0?u.stride:u.itemSize,j=Dt.offset;if(u.isInstancedInterleavedBuffer||u.isInstancedBufferAttribute){for(let z=0;z<_t.locationSize;z++)x(_t.location+z,u.meshPerAttribute);nt.isInstancedMesh!==!0&&yt._maxInstanceCount===void 0&&(yt._maxInstanceCount=u.meshPerAttribute*u.count)}else for(let z=0;z<_t.locationSize;z++)g(_t.location+z);i.bindBuffer(i.ARRAY_BUFFER,P);for(let z=0;z<_t.locationSize;z++)A(_t.location+z,se/_t.locationSize,ht,ee,S*Rt,(j+se/_t.locationSize*z)*Rt,kt)}else{if(Dt.isInstancedBufferAttribute){for(let u=0;u<_t.locationSize;u++)x(_t.location+u,Dt.meshPerAttribute);nt.isInstancedMesh!==!0&&yt._maxInstanceCount===void 0&&(yt._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let u=0;u<_t.locationSize;u++)g(_t.location+u);i.bindBuffer(i.ARRAY_BUFFER,P);for(let u=0;u<_t.locationSize;u++)A(_t.location+u,se/_t.locationSize,ht,ee,se*Rt,se/_t.locationSize*u*Rt,kt)}}else if(at!==void 0){let ee=at[Pt];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(_t.location,ee);break;case 3:i.vertexAttrib3fv(_t.location,ee);break;case 4:i.vertexAttrib4fv(_t.location,ee);break;default:i.vertexAttrib1fv(_t.location,ee)}}}}v()}function L(){V();for(let nt in n){let dt=n[nt];for(let $ in dt){let yt=dt[$];for(let K in yt){let ft=yt[K];for(let at in ft)h(ft[at].object),delete ft[at];delete yt[K]}}delete n[nt]}}function C(nt){if(n[nt.id]===void 0)return;let dt=n[nt.id];for(let $ in dt){let yt=dt[$];for(let K in yt){let ft=yt[K];for(let at in ft)h(ft[at].object),delete ft[at];delete yt[K]}}delete n[nt.id]}function y(nt){for(let dt in n){let $=n[dt];for(let yt in $){let K=$[yt];if(K[nt.id]===void 0)continue;let ft=K[nt.id];for(let at in ft)h(ft[at].object),delete ft[at];delete K[nt.id]}}}function T(nt){for(let dt in n){let $=n[dt],yt=nt.isInstancedMesh===!0?nt.id:0,K=$[yt];if(K!==void 0){for(let ft in K){let at=K[ft];for(let Pt in at)h(at[Pt].object),delete at[Pt];delete K[ft]}delete $[yt],Object.keys($).length===0&&delete n[dt]}}}function V(){D(),o=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:V,resetDefaultState:D,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfObject:T,releaseStatesOfProgram:y,initAttributes:w,enableAttribute:g,disableUnusedAttributes:v}}function Ag(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let p=0;p<h;p++)f+=c[p];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Eg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(y){return!(y!==Ii&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let T=y===Pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==ri&&y!==Si&&!T&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Oe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:w,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:b,maxSamples:L,samples:C}}function Tg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ci,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){let m=d.clippingPlanes,w=d.clipIntersection,g=d.clipShadows,x=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let v=r?0:n,A=v*4,b=x.clippingState||null;l.value=b,b=h(m,f,A,p);for(let L=0;L!==A;++L)b[L]=e[L];x.clippingState=b,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,p,m){let w=d!==null?d.length:0,g=null;if(w!==0){if(g=l.value,m!==!0||g===null){let x=p+w*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<x)&&(g=new Float32Array(x));for(let A=0,b=p;A!==w;++A,b+=4)o.copy(d[A]).applyMatrix4(v,a),o.normal.toArray(g,b),g[b+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,g}}var Io=class extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Kr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ze(5,5,5),r=new Mi({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:Is});r.uniforms.tEquirect.value=e;let o=new Vt(s,r),a=e.minFilter;return e.minFilter===es&&(e.minFilter=Kn),new dr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Td=256,Cg=3,Rg=20,$d=256,Kd=16,Pg=3,Ig=new Y,Fg=new Pe,ql=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new dr(1,10,null),this._boxMesh=new Vt(new ze(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Ig}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,p=l.autoClearDepth,m=l.autoClearStencil,w=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,w===null&&(t.background=l.getClearColor(Fg));let g=new dr(n,s,h);return g.position.copy(a),g.update(l,t),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=p,l.autoClearStencil=m,t.background=w,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Td,md(t))}_fromTexture(t,e){t.mapping===Ls||t.mapping===mr?this._setSize(t.image.length===0?Td:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Cd(t,!1,!1),n=Math.log2(t)-Cg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Cd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ls||t.mapping===mr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Rd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Lg(),this._integrationMaterial=Dg());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Kd);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Pg)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/($d*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Ng());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Cd(i,t,e){return new Io(i,{minFilter:es,generateMipmaps:t,type:Pi,colorSpace:Or,depthBuffer:e})}function Fo(i,t,e){return new Mi({name:i,uniforms:t,vertexShader:nn.cube_vert,fragmentShader:e,side:Bn,blending:Is,depthTest:!1,depthWrite:!1})}function Lg(){return Fo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${$d}u

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
	`)}function Dg(){return Fo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Kd}},`

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
	`)}function Ng(){return Fo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

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
	`)}function Rd(){return Fo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Pd(){return Fo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureLod( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ), 0.0 ).rgb, 1.0 );

		}
	`)}function zg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?o(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===il||p===sl)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let w=new Io(m.height);return w.fromEquirectangularTexture(i,f),t.set(f,w),f.addEventListener("dispose",c),a(w.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let p=f.mapping,m=p===il||p===sl,w=p===Ls||p===mr;if(m||w){let g=e.get(f),x=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new ql(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let v=f.image;return m&&v&&v.height>0||w&&v&&l(v)?(n===null&&(n=new ql(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,p){return p===il?f.mapping=Ls:p===sl&&(f.mapping=mr),f}function l(f){let p=0,m=6;for(let w=0;w<m;w++)f[w]!==void 0&&p++;return p===m}function c(f){let p=f.target;p.removeEventListener("dispose",c);let m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function h(f){let p=f.target;p.removeEventListener("dispose",h);let m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Ug(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Dr("WebGLRenderer: "+n+" extension not supported."),s}}}function Og(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let g in m.attributes)t.remove(m.attributes[g]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let w=r.get(m);w&&(t.remove(w),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,w){return s[w.id]!==void 0||(w.addEventListener("dispose",a),s[w.id]=new WeakRef(w),o.register(w,w.id,w),e.memory.geometries++),w}function h(m){let w=m.attributes;for(let g in w)t.update(w[g],i.ARRAY_BUFFER)}function d(m){let w=m.index,g=m.attributes.position,x=0;if(g===void 0)return;let v=w!==null?w.count:g.count-1,A=g.count>=65535?Yr:qr,b=new A(Math.ceil(v/3)*6,1),L=b.array;if(w!==null){let y=w.array;x=w.version;for(let T=0,V=0;T<v;T+=3){let D=y[T+0],nt=y[T+1],dt=y[T+2];L[V++]=D,L[V++]=nt,L[V++]=nt,L[V++]=dt,L[V++]=dt,L[V++]=D}}else{x=g.version;for(let y=0,T=0;y<v;y+=3){let V=y+0,D=y+1,nt=y+2;L[T++]=V,L[T++]=D,L[T++]=D,L[T++]=nt,L[T++]=nt,L[T++]=V}}b.version=x;let C=r.get(m);C&&t.remove(C),r.set(m,b)}function f(m){let w=r.get(m);if(w){let g=m.index;g!==null&&w.version<g.version&&d(m)}else d(m);return r.get(m)}function p(){for(let m in s){let w=s[m].deref();w!==void 0&&l(w)}}return{get:c,update:h,getWireframeAttribute:f,dispose:p}}function Bg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,d*o,p),e.update(f,n,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let w=0;for(let g=0;g<p;g++)w+=f[g];e.update(w,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function kg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Ge("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Vg(i,t,e){let n=new WeakMap,s=new yn;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let V=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",V)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,w=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],A=0;p===!0&&(A=1),m===!0&&(A=2),w===!0&&(A=3);let b=a.attributes.position.count*A,L=1;b>t.maxTextureSize&&(L=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let C=new Float32Array(b*L*4*d),y=new Gr(C,b,L,d);y.type=Si,y.needsUpdate=!0;let T=A*4;for(let D=0;D<d;D++){let nt=g[D],dt=x[D],$=v[D],yt=b*L*4*D;for(let K=0;K<nt.count;K++){let ft=K*T;p===!0&&(s.fromBufferAttribute(nt,K),C[yt+ft+0]=s.x,C[yt+ft+1]=s.y,C[yt+ft+2]=s.z,C[yt+ft+3]=0),m===!0&&(s.fromBufferAttribute(dt,K),C[yt+ft+4]=s.x,C[yt+ft+5]=s.y,C[yt+ft+6]=s.z,C[yt+ft+7]=0),w===!0&&(s.fromBufferAttribute($,K),C[yt+ft+8]=s.x,C[yt+ft+9]=s.y,C[yt+ft+10]=s.z,C[yt+ft+11]=$.itemSize===4?s.w:1)}}f={count:d,texture:y,size:new At(b,L)},n.set(a,f),a.addEventListener("dispose",V)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let w=0;w<c.length;w++)p+=c[w];let m=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Gg(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Hg={[$c]:"LINEAR_TONE_MAPPING",[Kc]:"REINHARD_TONE_MAPPING",[jc]:"CINEON_TONE_MAPPING",[vo]:"ACES_FILMIC_TONE_MAPPING",[th]:"AGX_TONE_MAPPING",[eh]:"NEUTRAL_TONE_MAPPING",[Qc]:"CUSTOM_TONE_MAPPING"};function Wg(i,t,e,n,s,r){let o=new ci(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new en;h.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ze([0,2,0,0,2,0],2));let d=new ka({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Vt(h,d),p=new xo(-1,1,1,-1,0,1),m=null,w=null,g=!1,x,v=null,A=[],b=!1;this.setSize=function(L,C){o.setSize(L,C),a!==null&&a.setSize(L,C),l!==null&&l.setSize(L,C);for(let y=0;y<A.length;y++){let T=A[y];T.setSize&&T.setSize(L,C)}},this.setEffects=function(L){A=L,b=A.length>0&&A[0].isRenderPass===!0;let C=o.width,y=o.height;A.length>0&&a===null&&(a=new ci(C,y,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),l=new ci(C,y,{type:Pi,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&A.some(V=>V.needsDepthTexture===!0);T!==(o.depthTexture!==null)&&(T===!0&&c===null&&(c=new Ki(C,y),r===!0&&(c.format=ns,c.type=Ds)),o.dispose(),o.depthTexture=T?c:null,o.resolveDepthBuffer=T,o.storeMultisampledDepthBuffer=T);for(let V=0;V<A.length;V++){let D=A[V];D.setSize&&D.setSize(C,y),T&&D.needsDepthTexture===!0&&D.setDepthTexture&&D.setDepthTexture(c)}},this.begin=function(L,C){if(g||L.toneMapping===ki&&A.length===0)return!1;if(v=C,C!==null){let y=C.width,T=C.height;(o.width!==y||o.height!==T)&&this.setSize(y,T)}return b===!1&&L.setRenderTarget(o),x=L.toneMapping,L.toneMapping=ki,!0},this.hasRenderPass=function(){return b},this.end=function(L,C){L.toneMapping=x,g=!0;let y=o,T=a;for(let V=0;V<A.length;V++){let D=A[V];D.enabled!==!1&&(D.render(L,T,y,C),D.needsSwap!==!1&&(y=T,T=T===a?l:a))}if(m!==L.outputColorSpace||w!==L.toneMapping){m=L.outputColorSpace,w=L.toneMapping,d.defines={},cn.getTransfer(m)===dn&&(d.defines.SRGB_TRANSFER="");let V=Hg[w];V&&(d.defines[V]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=y.texture,L.setRenderTarget(v),L.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var jd=new jn,Qd=new Ki(1,1),tf=new Qr(1),ef=new Gr,nf=new Ra,sf=new Kr,Id=[],Fd=[],Ld=new Float32Array(16),Dd=new Float32Array(9),Nd=new Float32Array(4);function _r(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Id[s];if(r===void 0&&(r=new Float32Array(s),Id[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function zn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Un(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zl(i,t){let e=Fd[t];e===void 0&&(e=new Int32Array(t),Fd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(zn(e,t))return;i.uniform2fv(this.addr,t),Un(e,t)}}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(zn(e,t))return;i.uniform3fv(this.addr,t),Un(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(zn(e,t))return;i.uniform4fv(this.addr,t),Un(e,t)}}function Jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(zn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Un(e,t)}else{if(zn(e,n))return;Nd.set(n),i.uniformMatrix2fv(this.addr,!1,Nd),Un(e,n)}}function $g(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(zn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Un(e,t)}else{if(zn(e,n))return;Dd.set(n),i.uniformMatrix3fv(this.addr,!1,Dd),Un(e,n)}}function Kg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(zn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Un(e,t)}else{if(zn(e,n))return;Ld.set(n),i.uniformMatrix4fv(this.addr,!1,Ld),Un(e,n)}}function jg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(zn(e,t))return;i.uniform2iv(this.addr,t),Un(e,t)}}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(zn(e,t))return;i.uniform3iv(this.addr,t),Un(e,t)}}function ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(zn(e,t))return;i.uniform4iv(this.addr,t),Un(e,t)}}function nx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(zn(e,t))return;i.uniform2uiv(this.addr,t),Un(e,t)}}function sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(zn(e,t))return;i.uniform3uiv(this.addr,t),Un(e,t)}}function rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(zn(e,t))return;i.uniform4uiv(this.addr,t),Un(e,t)}}function Jl(i){return i.version===0&&(i.compareFunction=uh,i.needsUpdate=!0),i}function ox(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Jl(Qd):r=jd,e.setTexture2D(t||r,s)}function ax(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nf,s)}function lx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Jl(tf):r=sf,e.setTextureCube(t||r,s)}function cx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ef,s)}function hx(i){switch(i){case 5126:return Xg;case 35664:return qg;case 35665:return Yg;case 35666:return Zg;case 35674:return Jg;case 35675:return $g;case 35676:return Kg;case 5124:case 35670:return jg;case 35667:case 35671:return Qg;case 35668:case 35672:return tx;case 35669:case 35673:return ex;case 5125:return nx;case 36294:return ix;case 36295:return sx;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return ox;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return cx}}function ux(i,t){i.uniform1fv(this.addr,t)}function dx(i,t){let e=_r(t,this.size,2);i.uniform2fv(this.addr,e)}function fx(i,t){let e=_r(t,this.size,3);i.uniform3fv(this.addr,e)}function px(i,t){let e=_r(t,this.size,4);i.uniform4fv(this.addr,e)}function mx(i,t){let e=_r(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gx(i,t){let e=_r(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function xx(i,t){let e=_r(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _x(i,t){i.uniform1iv(this.addr,t)}function yx(i,t){i.uniform2iv(this.addr,t)}function vx(i,t){i.uniform3iv(this.addr,t)}function Mx(i,t){i.uniform4iv(this.addr,t)}function Sx(i,t){i.uniform1uiv(this.addr,t)}function wx(i,t){i.uniform2uiv(this.addr,t)}function bx(i,t){i.uniform3uiv(this.addr,t)}function Ax(i,t){i.uniform4uiv(this.addr,t)}function Ex(i,t,e){let n=this.cache,s=t.length,r=Zl(e,s);zn(n,r)||(i.uniform1iv(this.addr,r),Un(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Jl(Qd):o=jd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Tx(i,t,e){let n=this.cache,s=t.length,r=Zl(e,s);zn(n,r)||(i.uniform1iv(this.addr,r),Un(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||nf,r[o])}function Cx(i,t,e){let n=this.cache,s=t.length,r=Zl(e,s);zn(n,r)||(i.uniform1iv(this.addr,r),Un(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Jl(tf):o=sf;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Rx(i,t,e){let n=this.cache,s=t.length,r=Zl(e,s);zn(n,r)||(i.uniform1iv(this.addr,r),Un(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ef,r[o])}function Px(i){switch(i){case 5126:return ux;case 35664:return dx;case 35665:return fx;case 35666:return px;case 35674:return mx;case 35675:return gx;case 35676:return xx;case 5124:case 35670:return _x;case 35667:case 35671:return yx;case 35668:case 35672:return vx;case 35669:case 35673:return Mx;case 5125:return Sx;case 36294:return wx;case 36295:return bx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return Tx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Rx}}var Eh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hx(e.type)}},Th=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Px(e.type)}},Ch=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},bh=/(\w+)(\])?(\[|\.)?/g;function zd(i,t){i.seq.push(t),i.map[t.id]=t}function Ix(i,t,e){let n=i.name,s=n.length;for(bh.lastIndex=0;;){let r=bh.exec(n),o=bh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){zd(e,c===void 0?new Eh(a,i,t):new Th(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Ch(a),zd(e,d)),e=d}}}var xr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Ix(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Ud(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Fx=37297,Lx=0;function Dx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Od=new Je;function Nx(i){cn._getMatrix(Od,cn.workingColorSpace,i);let t=`mat3( ${Od.elements.map(e=>e.toFixed(4))} )`;switch(cn.getTransfer(i)){case Br:return[t,"LinearTransferOETF"];case dn:return[t,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Bd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Dx(i.getShaderSource(t),a)}else return r}function zx(i,t){let e=Nx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ux={[$c]:"Linear",[Kc]:"Reinhard",[jc]:"Cineon",[vo]:"ACESFilmic",[th]:"AgX",[eh]:"Neutral",[Qc]:"Custom"};function Ox(i,t){let e=Ux[t];return e===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xl=new Y;function Bx(){cn.getLuminanceCoefficients(Xl);let i=Xl.x.toFixed(4),t=Xl.y.toFixed(4),e=Xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function Vx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Po(i){return i!==""}function kd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Vd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(i){return i.replace(Hx,Wx)}function Wx(i,t){let e=nn[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Rh(e)}var Xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gd(i){return i.replace(Xx,qx)}function qx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Yx={[Ps]:"SHADOWMAP_TYPE_PCF",[fr]:"SHADOWMAP_TYPE_VSM"};function Zx(i){return Yx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Jx={[mr]:"ENVMAP_MODE_REFRACTION"};function $x(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Jx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Kx={[yo]:"ENVMAP_BLENDING_MULTIPLY",[td]:"ENVMAP_BLENDING_MIX",[ed]:"ENVMAP_BLENDING_ADD"};function jx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Kx[i.combine]||"ENVMAP_BLENDING_NONE"}function Qx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Zx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=$x(e),d=jx(e),f=kx(e),p=Vx(r),m=s.createProgram(),w,g,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(w=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Po).join(`
`),w.length>0&&(w+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Po).join(`
`),g.length>0&&(g+=`
`)):(w=[Hd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),g=[Hd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ki?"#define TONE_MAPPING":"",e.toneMapping!==ki?nn.tonemapping_pars_fragment:"",e.toneMapping!==ki?Ox("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",nn.colorspace_pars_fragment,zx("linearToOutputTexel",e.outputColorSpace),Bx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Po).join(`
`)),o=Rh(o),o=kd(o,e),o=Vd(o,e),a=Rh(a),a=kd(a,e),a=Vd(a,e),o=Gd(o),a=Gd(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,w=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,g=["#define varying in",e.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=x+w+o,A=x+g+a,b=Ud(s,s.VERTEX_SHADER,v),L=Ud(s,s.FRAGMENT_SHADER,A);s.attachShader(m,b),s.attachShader(m,L),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function C(D){if(i.debug.checkShaderErrors){let nt=s.getProgramInfoLog(m)||"",dt=s.getShaderInfoLog(b)||"",$=s.getShaderInfoLog(L)||"",yt=nt.trim(),K=dt.trim(),ft=$.trim(),at=!0,Pt=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(at=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,b,L);else{let _t=Bd(s,b,"vertex"),Dt=Bd(s,L,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+yt+`
`+_t+`
`+Dt)}else yt!==""?Oe("WebGLProgram: Program Info Log:",yt):(K===""||ft==="")&&(Pt=!1);Pt&&(D.diagnostics={runnable:at,programLog:yt,vertexShader:{log:K,prefix:w},fragmentShader:{log:ft,prefix:g}})}s.deleteShader(b),s.deleteShader(L),y=new xr(s,m),T=Gx(s,m)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(m,Fx)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=L,this}var t_=0,Ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ih(t),e.set(t,n)),n}},Ih=class{constructor(t){this.id=t_++,this.code=t,this.usedTimes=0}};function e_(i){return i===gs||i===Eo||i===To}function n_(i,t,e,n,s,r){let o=new Hr,a=new Ph,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,T,V,D,nt,dt){let $=D.fog,yt=nt.geometry,K=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,ft=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,at=t.get(y.envMap||K,ft),Pt=f[y.type],_t=n.precision;y.precision!==null&&(_t=n.getMaxPrecision(y.precision),_t!==y.precision&&Oe("WebGLProgram.getParameters:",y.precision,"not supported, using",_t,"instead."));let Dt=yt.morphAttributes.position||yt.morphAttributes.normal||yt.morphAttributes.color,ee=Dt!==void 0?Dt.length:0,se=0;yt.morphAttributes.position!==void 0&&(se=1),yt.morphAttributes.normal!==void 0&&(se=2),yt.morphAttributes.color!==void 0&&(se=3);let _e,P,ht,Rt;if(Pt){let me=Gi[Pt];_e=me.vertexShader,P=me.fragmentShader}else{_e=y.vertexShader,P=y.fragmentShader;let me=a.getVertexShaderStage(y),je=a.getFragmentShaderStage(y);a.update(y,me,je),ht=me.id,Rt=je.id}let kt=i.getRenderTarget(),u=i.state.buffers.depth.getReversed(),S=nt.isInstancedMesh===!0,j=nt.isBatchedMesh===!0,z=!!y.map,lt=!!y.matcap,St=!!at,B=St&&at.isPMREMTexture===!0,mt=!!y.aoMap,pt=!!y.lightMap,Ut=!!y.bumpMap&&y.wireframe===!1,Xt=!!y.normalMap,ce=!!y.displacementMap,Wt=!!y.emissiveMap,ue=!!y.metalnessMap,Zt=!!y.roughnessMap,te=y.anisotropy>0,H=y.clearcoat>0,Ee=y.diffuseRoughness>0,tt=y.dispersion>0,Z=y.retroreflectivity>0,st=y.iridescence>0,ne=y.sheen>0,Nt=y.transmission>0,$t=te&&!!y.anisotropyMap,U=H&&!!y.clearcoatMap,M=H&&!!y.clearcoatNormalMap,Q=H&&!!y.clearcoatRoughnessMap,Ot=Ee&&!!y.diffuseRoughnessMap,wt=st&&!!y.iridescenceMap,Gt=st&&!!y.iridescenceThicknessMap,ae=ne&&!!y.sheenColorMap,Bt=ne&&!!y.sheenRoughnessMap,Ht=!!y.specularMap,de=!!y.specularColorMap,Se=!!y.specularIntensityMap,q=Nt&&!!y.transmissionMap,zt=Nt&&!!y.thicknessMap,jt=!!y.gradientMap,he=!!y.alphaMap,ge=y.alphaTest>0,Me=!!y.alphaHash,Fe=!!y.extensions,re=ki;y.toneMapped&&(kt===null||kt.isXRRenderTarget===!0)&&(re=i.toneMapping);let qe=B?at.isCompressedCubeTexture?at.image[0].mipmaps:at.mipmaps:null,ye={shaderID:Pt,shaderType:y.type,shaderName:y.name,vertexShader:_e,fragmentShader:P,defines:y.defines,customVertexShaderID:ht,customFragmentShaderID:Rt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_t,batching:j,batchingColor:j&&nt._colorsTexture!==null,instancing:S,instancingColor:S&&nt.instanceColor!==null,instancingMorph:S&&nt.morphTexture!==null,outputColorSpace:kt===null?i.outputColorSpace:kt.isXRRenderTarget===!0?kt.texture.colorSpace:cn.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:z,matcap:lt,envMap:St,envMapMode:St&&at.mapping,envMapPMREM:B,envMapMaxLod:B?qe.length-1:null,envMapSize:B?qe[0].width:null,aoMap:mt,lightMap:pt,bumpMap:Ut,normalMap:Xt,displacementMap:ce,emissiveMap:Wt,normalMapObjectSpace:Xt&&y.normalMapType===sd,normalMapTangentSpace:Xt&&y.normalMapType===Co,packedNormalMap:Xt&&y.normalMapType===Co&&e_(y.normalMap.format),metalnessMap:ue,roughnessMap:Zt,anisotropy:te,anisotropyMap:$t,clearcoat:H,clearcoatMap:U,clearcoatNormalMap:M,clearcoatRoughnessMap:Q,diffuseRoughness:Ee,diffuseRoughnessMap:Ot,dispersion:tt,retroreflection:Z,iridescence:st,iridescenceMap:wt,iridescenceThicknessMap:Gt,sheen:ne,sheenColorMap:ae,sheenRoughnessMap:Bt,specularMap:Ht,specularColorMap:de,specularIntensityMap:Se,transmission:Nt,transmissionMap:q,thicknessMap:zt,gradientMap:jt,opaque:y.transparent===!1&&y.blending===pr&&y.alphaToCoverage===!1,alphaMap:he,alphaTest:ge,alphaHash:Me,combine:y.combine,mapUv:z&&p(y.map.channel),aoMapUv:mt&&p(y.aoMap.channel),lightMapUv:pt&&p(y.lightMap.channel),bumpMapUv:Ut&&p(y.bumpMap.channel),normalMapUv:Xt&&p(y.normalMap.channel),displacementMapUv:ce&&p(y.displacementMap.channel),emissiveMapUv:Wt&&p(y.emissiveMap.channel),metalnessMapUv:ue&&p(y.metalnessMap.channel),roughnessMapUv:Zt&&p(y.roughnessMap.channel),anisotropyMapUv:$t&&p(y.anisotropyMap.channel),clearcoatMapUv:U&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:M&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&p(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ot&&p(y.diffuseRoughnessMap.channel),iridescenceMapUv:wt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&p(y.sheenRoughnessMap.channel),specularMapUv:Ht&&p(y.specularMap.channel),specularColorMapUv:de&&p(y.specularColorMap.channel),specularIntensityMapUv:Se&&p(y.specularIntensityMap.channel),transmissionMapUv:q&&p(y.transmissionMap.channel),thicknessMapUv:zt&&p(y.thicknessMap.channel),alphaMapUv:he&&p(y.alphaMap.channel),vertexTangents:!!yt.attributes.tangent&&(Xt||te),vertexNormals:!!yt.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!yt.attributes.color&&yt.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!yt.attributes.uv&&(z||he),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||yt.attributes.normal===void 0&&Xt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:u,skinning:nt.isSkinnedMesh===!0,hasPositionAttribute:yt.attributes.position!==void 0,morphTargets:yt.morphAttributes.position!==void 0,morphNormals:yt.morphAttributes.normal!==void 0,morphColors:yt.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:se,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbeGrids:dt.filter(me=>me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:z&&y.map.isVideoTexture===!0&&cn.getTransfer(y.map.colorSpace)===dn,decodeVideoTextureEmissive:Wt&&y.emissiveMap.isVideoTexture===!0&&cn.getTransfer(y.emissiveMap.colorSpace)===dn,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===$e,flipSided:y.side===Bn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Fe&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&y.extensions.multiDraw===!0||j)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function w(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let V in y.defines)T.push(V),T.push(y.defines[V]);return y.isRawShaderMaterial===!1&&(g(T,y),x(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function g(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapPMREM),y.push(T.envMapMaxLod),y.push(T.envMapSize),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.diffuseRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbeGrids),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function x(y,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.diffuseRoughness&&o.enable(25),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function v(y){let T=f[y.type],V;if(T){let D=Gi[T];V=bd.clone(D.uniforms)}else V=y.uniforms;return V}function A(y,T){let V=h.get(T);return V!==void 0?++V.usedTimes:(V=new Qx(i,T,y,s),c.push(V),h.set(T,V)),V}function b(y){if(--y.usedTimes===0){let T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function L(y){a.remove(y)}function C(){a.dispose()}return{getParameters:m,getProgramCacheKey:w,getUniforms:v,acquireProgram:A,releaseProgram:b,releaseShaderCache:L,programs:c,dispose:C}}function i_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function s_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Wd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,m,w,g,x){let v=i[t];return v===void 0?(v={id:f.id,object:f,geometry:p,material:m,materialVariant:o(f),groupOrder:w,renderOrder:f.renderOrder,z:g,group:x},i[t]=v):(v.id=f.id,v.object=f,v.geometry=p,v.material=m,v.materialVariant=o(f),v.groupOrder=w,v.renderOrder=f.renderOrder,v.z=g,v.group=x),t++,v}function l(f,p,m,w,g,x,v){v.reversedDepth===!0&&(g=-g);let A=a(f,p,m,w,g,x);m.transmission>0?n.push(A):m.transparent===!0?s.push(A):e.push(A)}function c(f,p,m,w,g,x){let v=a(f,p,m,w,g,x);m.transmission>0?n.unshift(v):m.transparent===!0?s.unshift(v):e.unshift(v)}function h(f,p){e.length>1&&e.sort(f||s_),n.length>1&&n.sort(p||Wd),s.length>1&&s.sort(p||Wd)}function d(){for(let f=t,p=i.length;f<p;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function r_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Xd,i.set(n,[o])):s>=r.length?(o=new Xd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function o_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Y,color:new Pe};break;case"SpotLight":e={position:new Y,direction:new Y,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":e={color:new Pe,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[t.id]=e,e}}}function a_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var l_=0;function c_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function h_(i){let t=new o_,e=a_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0},s=new Y,r=new hn,o=new hn;function a(c){let h=0,d=0,f=0,p=0,m=0,w=0,g=0,x=0,v=0,A=0,b=0,L=0,C=0,y=0,T=0,V=0;c.sort(c_);for(let nt=0,dt=c.length;nt<dt;nt++){let $=c[nt],yt=$.color,K=$.intensity,ft=$.distance,at=null;if($.shadow&&$.shadow.map&&($.shadow.map.texture.format===gs?at=$.shadow.map.texture:at=$.shadow.map.depthTexture||$.shadow.map.texture),$.isAmbientLight)h+=yt.r*K,d+=yt.g*K,f+=yt.b*K;else if($.isSunLight){let Pt=t.get($);if(Pt.color.copy($.color).multiplyScalar($.intensity),$.castShadow){let _t=$.shadow,Dt=e.get($);Dt.shadowIntensity=_t.intensity,Dt.shadowBias=_t.bias,Dt.shadowNormalBias=_t.normalBias,Dt.shadowRadius=_t.radius,Dt.shadowMapSize.copy(_t.mapSize).multiply(_t.getFrameExtents()),n.sunShadow[m]=Dt,n.sunShadowMap[m]=at;let ee=_t.getViewportCount();for(let se=0;se<ee;se++)n.sunShadowMatrix[w+se]=_t.getMatrix(se),n.sunShadowCascade[w+se]=_t._cascadeData[se];w+=ee,m++}n.sun[p]=Pt,p++}else if($.isDirectionalLight){let Pt=t.get($);if(Pt.color.copy($.color).multiplyScalar($.intensity),$.castShadow){let _t=$.shadow,Dt=e.get($);Dt.shadowIntensity=_t.intensity,Dt.shadowBias=_t.bias,Dt.shadowNormalBias=_t.normalBias,Dt.shadowRadius=_t.radius,Dt.shadowMapSize=_t.mapSize,n.directionalShadow[g]=Dt,n.directionalShadowMap[g]=at,n.directionalShadowMatrix[g]=$.shadow.matrix,L++}n.directional[g]=Pt,g++}else if($.isSpotLight){let Pt=t.get($);Pt.position.setFromMatrixPosition($.matrixWorld),Pt.color.copy(yt).multiplyScalar(K),Pt.distance=ft,Pt.coneCos=Math.cos($.angle),Pt.penumbraCos=Math.cos($.angle*(1-$.penumbra)),Pt.decay=$.decay,n.spot[v]=Pt;let _t=$.shadow;if($.map&&(n.spotLightMap[T]=$.map,T++,_t.updateMatrices($),$.castShadow&&V++),n.spotLightMatrix[v]=_t.matrix,$.castShadow){let Dt=e.get($);Dt.shadowIntensity=_t.intensity,Dt.shadowBias=_t.bias,Dt.shadowNormalBias=_t.normalBias,Dt.shadowRadius=_t.radius,Dt.shadowMapSize=_t.mapSize,n.spotShadow[v]=Dt,n.spotShadowMap[v]=at,y++}v++}else if($.isRectAreaLight){let Pt=t.get($);Pt.color.copy(yt).multiplyScalar(K),Pt.halfWidth.set($.width*.5,0,0),Pt.halfHeight.set(0,$.height*.5,0),n.rectArea[A]=Pt,A++}else if($.isPointLight){let Pt=t.get($);if(Pt.color.copy($.color).multiplyScalar($.intensity),Pt.distance=$.distance,Pt.decay=$.decay,$.castShadow){let _t=$.shadow,Dt=e.get($);Dt.shadowIntensity=_t.intensity,Dt.shadowBias=_t.bias,Dt.shadowNormalBias=_t.normalBias,Dt.shadowRadius=_t.radius,Dt.shadowMapSize=_t.mapSize,Dt.shadowCameraNear=_t.camera.near,Dt.shadowCameraFar=_t.camera.far,n.pointShadow[x]=Dt,n.pointShadowMap[x]=at,n.pointShadowMatrix[x]=$.shadow.matrix,C++}n.point[x]=Pt,x++}else if($.isHemisphereLight){let Pt=t.get($);Pt.skyColor.copy($.color).multiplyScalar(K),Pt.groundColor.copy($.groundColor).multiplyScalar(K),n.hemi[b]=Pt,b++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let D=n.hash;(D.sunLength!==p||D.directionalLength!==g||D.pointLength!==x||D.spotLength!==v||D.rectAreaLength!==A||D.hemiLength!==b||D.numSunShadows!==m||D.numDirectionalShadows!==L||D.numPointShadows!==C||D.numSpotShadows!==y||D.numSpotMaps!==T)&&(n.sun.length=p,n.directional.length=g,n.spot.length=v,n.rectArea.length=A,n.point.length=x,n.hemi.length=b,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=w,n.sunShadowCascade.length=w,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.directionalShadowMatrix.length=L,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+T-V,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=V,D.sunLength=p,D.directionalLength=g,D.pointLength=x,D.spotLength=v,D.rectAreaLength=A,D.hemiLength=b,D.numSunShadows=m,D.numDirectionalShadows=L,D.numPointShadows=C,D.numSpotShadows=y,D.numSpotMaps=T,n.version=l_++)}function l(c,h){let d=0,f=0,p=0,m=0,w=0,g=0,x=h.matrixWorldInverse;for(let v=0,A=c.length;v<A;v++){let b=c[v];if(b.isSunLight){let L=n.sun[d];L.direction.setFromMatrixPosition(b.matrixWorld),L.direction.transformDirection(x),d++}else if(b.isDirectionalLight){let L=n.directional[f];L.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(x),f++}else if(b.isSpotLight){let L=n.spot[m];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(x),m++}else if(b.isRectAreaLight){let L=n.rectArea[w];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(x),o.identity(),r.copy(b.matrixWorld),r.premultiply(x),o.extractRotation(r),L.halfWidth.set(b.width*.5,0,0),L.halfHeight.set(0,b.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),w++}else if(b.isPointLight){let L=n.point[p];L.position.setFromMatrixPosition(b.matrixWorld),L.position.applyMatrix4(x),p++}else if(b.isHemisphereLight){let L=n.hemi[g];L.direction.setFromMatrixPosition(b.matrixWorld),L.direction.transformDirection(x),g++}}}return{setup:a,setupView:l,state:n}}function qd(i){let t=new h_(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),s.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function u_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new qd(i),t.set(s,[a])):r>=o.length?(a=new qd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var d_=`void main() {
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
}`,p_=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],m_=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Yd=new hn,Ro=new Y,Ah=new Y;function g_(i,t,e){let n=new hs,s=new At,r=new At,o=new yn,a=new Va,l=new Ga,c={},h=e.maxTextureSize,d={[ms]:Bn,[Bn]:ms,[$e]:$e},f=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:d_,fragmentShader:f_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new en;m.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new Vt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ps;let x=this.type;this.render=function(C,y,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;this.type===Nu&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ps);let V=i.getRenderTarget(),D=i.getActiveCubeFace(),nt=i.getActiveMipmapLevel(),dt=i.state;dt.setBlending(Is),dt.buffers.depth.getReversed()===!0?dt.buffers.color.setClear(0,0,0,0):dt.buffers.color.setClear(1,1,1,1),dt.buffers.depth.setTest(!0),dt.setScissorTest(!1);let $=x!==this.type;$&&y.traverse(function(yt){yt.material&&(Array.isArray(yt.material)?yt.material.forEach(K=>K.needsUpdate=!0):yt.material.needsUpdate=!0)});for(let yt=0,K=C.length;yt<K;yt++){let ft=C[yt],at=ft.shadow;if(at===void 0){Oe("WebGLShadowMap:",ft,"has no shadow.");continue}if(at.autoUpdate===!1&&at.needsUpdate===!1)continue;s.copy(at.mapSize);let Pt=at.getFrameExtents();s.multiply(Pt),r.copy(at.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Pt.x),s.x=r.x*Pt.x,at.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Pt.y),s.y=r.y*Pt.y,at.mapSize.y=r.y));let _t=i.state.buffers.depth.getReversed();if(at.camera._reversedDepth=_t,at.map===null||$===!0){if(at.map!==null&&(at.map.depthTexture!==null&&(at.map.depthTexture.dispose(),at.map.depthTexture=null),at.map.dispose()),this.type===fr){if(ft.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}at.map=new ci(s.x,s.y,{format:gs,type:Pi,minFilter:Kn,magFilter:Kn,generateMipmaps:!1}),at.map.texture.name=ft.name+".shadowMap",at.map.depthTexture=new Ki(s.x,s.y,Si),at.map.depthTexture.name=ft.name+".shadowMapDepth",at.map.depthTexture.format=$i,at.map.depthTexture.compareFunction=null,at.map.depthTexture.minFilter=On,at.map.depthTexture.magFilter=On}else ft.isPointLight?(at.map=new Io(s.x),at.map.depthTexture=new Qr(s.x,Ri)):(at.map=new ci(s.x,s.y),at.map.depthTexture=new Ki(s.x,s.y,Ri)),at.map.depthTexture.name=ft.name+".shadowMap",at.map.depthTexture.format=$i,this.type===Ps?(at.map.depthTexture.compareFunction=_t?hh:ch,at.map.depthTexture.minFilter=Kn,at.map.depthTexture.magFilter=Kn):(at.map.depthTexture.compareFunction=null,at.map.depthTexture.minFilter=On,at.map.depthTexture.magFilter=On);at.camera.updateProjectionMatrix()}at.map.isWebGLCubeRenderTarget!==!0&&(at.map.width!==s.x||at.map.height!==s.y)&&at.map.setSize(s.x,s.y);let Dt=at.map.isWebGLCubeRenderTarget?6:at.getViewportCount();ft.isPointLight!==!0&&at.updateMatrices(ft,T);let ee=(at.camera.layers.mask&4294967294)!==0?at.camera.layers:T.layers;for(let se=0;se<Dt;se++){let _e=at.getCamera(se);if(ft.isPointLight){let P=at.camera,ht=at.matrix,Rt=ft.distance||P.far;Rt!==P.far&&(P.far=Rt,P.updateProjectionMatrix()),Ro.setFromMatrixPosition(ft.matrixWorld),P.position.copy(Ro),Ah.copy(P.position),Ah.add(p_[se]),P.up.copy(m_[se]),P.lookAt(Ah),P.updateMatrixWorld(),ht.makeTranslation(-Ro.x,-Ro.y,-Ro.z),Yd.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),at._frustum.setFromProjectionMatrix(Yd,P.coordinateSystem,P.reversedDepth)}if(at.map.isWebGLCubeRenderTarget)i.setRenderTarget(at.map,se),i.clear();else{se===0&&(i.setRenderTarget(at.map),i.clear());let P=at.getViewport(se);o.set(r.x*P.x,r.y*P.y,r.x*P.z,r.y*P.w),dt.viewport(o)}n=at.getFrustum(se),b(y,T,_e,ft,ee,this.type)}at.isPointLightShadow!==!0&&this.type===fr&&v(at,T),at.needsUpdate=!1}x=this.type,g.needsUpdate=!1,i.setRenderTarget(V,D,nt)};function v(C,y){let T=t.update(w);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null?C.mapPass=new ci(s.x,s.y,{format:gs,type:Pi}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value.set(C.map.width,C.map.height),f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(y,null,T,f,w,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value.set(C.map.width,C.map.height),p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(y,null,T,p,w,null)}function A(C,y,T,V){let D=null,nt=T.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(nt!==void 0)D=nt;else if(D=T.isPointLight===!0?l:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let dt=D.uuid,$=y.uuid,yt=c[dt];yt===void 0&&(yt={},c[dt]=yt);let K=yt[$];K===void 0&&(K=D.clone(),yt[$]=K,y.addEventListener("dispose",L)),D=K}if(D.visible=y.visible,D.wireframe=y.wireframe,V===fr?D.side=y.shadowSide!==null?y.shadowSide:y.side:D.side=y.shadowSide!==null?y.shadowSide:d[y.side],D.alphaMap=y.alphaMap,D.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,D.map=y.map,D.clipShadows=y.clipShadows,D.clippingPlanes=y.clippingPlanes,D.clipIntersection=y.clipIntersection,D.displacementMap=y.displacementMap,D.displacementScale=y.displacementScale,D.displacementBias=y.displacementBias,D.wireframeLinewidth=y.wireframeLinewidth,D.linewidth=y.linewidth,T.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let dt=i.properties.get(D);dt.light=T}return D}function b(C,y,T,V,D,nt){if(C.visible===!1)return;if(C.layers.test(D)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&nt===fr)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,C.matrixWorld);let yt=t.update(C),K=C.material;if(Array.isArray(K)){let ft=yt.groups;for(let at=0,Pt=ft.length;at<Pt;at++){let _t=ft[at],Dt=K[_t.materialIndex];if(Dt&&Dt.visible){let ee=A(C,Dt,V,nt);C.onBeforeShadow(i,C,y,T,yt,ee,_t),i.renderBufferDirect(T,null,yt,ee,C,_t),C.onAfterShadow(i,C,y,T,yt,ee,_t)}}}else if(K.visible){let ft=A(C,K,V,nt);C.onBeforeShadow(i,C,y,T,yt,ft,null),i.renderBufferDirect(T,null,yt,ft,C,null),C.onAfterShadow(i,C,y,T,yt,ft,null)}}let $=C.children;for(let yt=0,K=$.length;yt<K;yt++)b($[yt],y,T,V,D,nt)}function L(C){C.target.removeEventListener("dispose",L);for(let T in c){let V=c[T],D=C.target.uuid;D in V&&(V[D].dispose(),delete V[D])}}}function x_(i,t){function e(){let q=!1,zt=new yn,jt=null,he=new yn(0,0,0,0);return{setMask:function(ge){jt!==ge&&!q&&(i.colorMask(ge,ge,ge,ge),jt=ge)},setLocked:function(ge){q=ge},setClear:function(ge,Me,Fe,re,qe){qe===!0&&(ge*=re,Me*=re,Fe*=re),zt.set(ge,Me,Fe,re),he.equals(zt)===!1&&(i.clearColor(ge,Me,Fe,re),he.copy(zt))},reset:function(){q=!1,jt=null,he.set(-1,0,0,0)}}}function n(){let q=!1,zt=!1,jt=null,he=null,ge=null;return{setReversed:function(Me){if(zt!==Me){let Fe=t.get("EXT_clip_control");Me?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),zt=Me;let re=ge;ge=null,this.setClear(re)}},getReversed:function(){return zt},setTest:function(Me){Me?u(i.DEPTH_TEST):S(i.DEPTH_TEST)},setMask:function(Me){jt!==Me&&!q&&(i.depthMask(Me),jt=Me)},setFunc:function(Me){if(zt&&(Me=pd[Me]),he!==Me){switch(Me){case xa:i.depthFunc(i.NEVER);break;case _a:i.depthFunc(i.ALWAYS);break;case ya:i.depthFunc(i.LESS);break;case ir:i.depthFunc(i.LEQUAL);break;case va:i.depthFunc(i.EQUAL);break;case Ma:i.depthFunc(i.GEQUAL);break;case Sa:i.depthFunc(i.GREATER);break;case wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=Me}},setLocked:function(Me){q=Me},setClear:function(Me){ge!==Me&&(ge=Me,zt&&(Me=1-Me),i.clearDepth(Me))},reset:function(){q=!1,jt=null,he=null,ge=null,zt=!1}}}function s(){let q=!1,zt=null,jt=null,he=null,ge=null,Me=null,Fe=null,re=null,qe=null;return{setTest:function(ye){q||(ye?u(i.STENCIL_TEST):S(i.STENCIL_TEST))},setMask:function(ye){zt!==ye&&!q&&(i.stencilMask(ye),zt=ye)},setFunc:function(ye,me,je){(jt!==ye||he!==me||ge!==je)&&(i.stencilFunc(ye,me,je),jt=ye,he=me,ge=je)},setOp:function(ye,me,je){(Me!==ye||Fe!==me||re!==je)&&(i.stencilOp(ye,me,je),Me=ye,Fe=me,re=je)},setLocked:function(ye){q=ye},setClear:function(ye){qe!==ye&&(i.clearStencil(ye),qe=ye)},reset:function(){q=!1,zt=null,jt=null,he=null,ge=null,Me=null,Fe=null,re=null,qe=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,h={},d={},f={},p=new WeakMap,m=[],w=null,g=!1,x=null,v=null,A=null,b=null,L=null,C=null,y=null,T=new Pe(0,0,0),V=0,D=!1,nt=null,dt=null,$=null,yt=null,K=null,ft=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),at=!1,Pt=0,_t=i.getParameter(i.VERSION);_t.indexOf("WebGL")!==-1?(Pt=parseFloat(/^WebGL (\d)/.exec(_t)[1]),at=Pt>=1):_t.indexOf("OpenGL ES")!==-1&&(Pt=parseFloat(/^OpenGL ES (\d)/.exec(_t)[1]),at=Pt>=2);let Dt=null,ee={},se=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),P=new yn().fromArray(se),ht=new yn().fromArray(_e);function Rt(q,zt,jt,he){let ge=new Uint8Array(4),Me=i.createTexture();i.bindTexture(q,Me),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<jt;Fe++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(zt,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(zt+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return Me}let kt={};kt[i.TEXTURE_2D]=Rt(i.TEXTURE_2D,i.TEXTURE_2D,1),kt[i.TEXTURE_CUBE_MAP]=Rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),kt[i.TEXTURE_2D_ARRAY]=Rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),kt[i.TEXTURE_3D]=Rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),u(i.DEPTH_TEST),o.setFunc(ir),Xt(!1),ce(Xc),u(i.CULL_FACE),pt(Is);function u(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function S(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function j(q,zt){return q===i.FRAMEBUFFER?f[i.DRAW_FRAMEBUFFER]===zt&&f[i.READ_FRAMEBUFFER]===zt?!1:(i.bindFramebuffer(i.FRAMEBUFFER,zt),f[i.DRAW_FRAMEBUFFER]=zt,f[i.READ_FRAMEBUFFER]=zt,!0):f[q]===zt?!1:(i.bindFramebuffer(q,zt),f[q]=zt,!0)}function z(q){return q===i.FRAMEBUFFER&&(q=i.DRAW_FRAMEBUFFER),f[q]||null}function lt(q,zt){let jt=m,he=!1;if(q){jt=p.get(zt),jt===void 0&&(jt=[],p.set(zt,jt));let ge=q.textures;if(jt.length!==ge.length||jt[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,Fe=ge.length;Me<Fe;Me++)jt[Me]=i.COLOR_ATTACHMENT0+Me;jt.length=ge.length,he=!0}}else jt[0]!==i.BACK&&(jt[0]=i.BACK,he=!0);he&&i.drawBuffers(jt)}function St(q){return w!==q?(i.useProgram(q),w=q,!0):!1}let B={[Fs]:i.FUNC_ADD,[Uu]:i.FUNC_SUBTRACT,[Ou]:i.FUNC_REVERSE_SUBTRACT};B[Bu]=i.MIN,B[ku]=i.MAX;let mt={[Vu]:i.ZERO,[Gu]:i.ONE,[Hu]:i.SRC_COLOR,[Zc]:i.SRC_ALPHA,[Ju]:i.SRC_ALPHA_SATURATE,[Yu]:i.DST_COLOR,[Xu]:i.DST_ALPHA,[Wu]:i.ONE_MINUS_SRC_COLOR,[Jc]:i.ONE_MINUS_SRC_ALPHA,[Zu]:i.ONE_MINUS_DST_COLOR,[qu]:i.ONE_MINUS_DST_ALPHA,[$u]:i.CONSTANT_COLOR,[Ku]:i.ONE_MINUS_CONSTANT_COLOR,[ju]:i.CONSTANT_ALPHA,[Qu]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(q,zt,jt,he,ge,Me,Fe,re,qe,ye){if(q===Is){g===!0&&(S(i.BLEND),g=!1);return}if(g===!1&&(u(i.BLEND),g=!0),q!==zu){if(q!==x||ye!==D){if((v!==Fs||L!==Fs)&&(i.blendEquation(i.FUNC_ADD),v=Fs,L=Fs),ye)switch(q){case pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ei:i.blendFunc(i.ONE,i.ONE);break;case qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ge("WebGLState: Invalid blending: ",q);break}else switch(q){case pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case qc:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yc:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",q);break}A=null,b=null,C=null,y=null,T.set(0,0,0),V=0,x=q,D=ye}return}ge=ge||zt,Me=Me||jt,Fe=Fe||he,(zt!==v||ge!==L)&&(i.blendEquationSeparate(B[zt],B[ge]),v=zt,L=ge),(jt!==A||he!==b||Me!==C||Fe!==y)&&(i.blendFuncSeparate(mt[jt],mt[he],mt[Me],mt[Fe]),A=jt,b=he,C=Me,y=Fe),(re.equals(T)===!1||qe!==V)&&(i.blendColor(re.r,re.g,re.b,qe),T.copy(re),V=qe),x=q,D=!1}function Ut(q,zt){q.side===$e?S(i.CULL_FACE):u(i.CULL_FACE);let jt=q.side===Bn;zt&&(jt=!jt),Xt(jt),q.blending===pr&&q.transparent===!1?pt(Is):pt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),r.setMask(q.colorWrite);let he=q.stencilWrite;a.setTest(he),he&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ue(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?u(i.SAMPLE_ALPHA_TO_COVERAGE):S(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(q){nt!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),nt=q)}function ce(q){q!==Lu?(u(i.CULL_FACE),q!==dt&&(q===Xc?i.cullFace(i.BACK):q===Du?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):S(i.CULL_FACE),dt=q}function Wt(q){q!==$&&(at&&i.lineWidth(q),$=q)}function ue(q,zt,jt){q?(u(i.POLYGON_OFFSET_FILL),(yt!==zt||K!==jt)&&(yt=zt,K=jt,o.getReversed()&&(zt=-zt,jt=-jt),i.polygonOffset(zt,jt))):S(i.POLYGON_OFFSET_FILL)}function Zt(q){q?u(i.SCISSOR_TEST):S(i.SCISSOR_TEST)}function te(q){q===void 0&&(q=i.TEXTURE0+ft-1),Dt!==q&&(i.activeTexture(q),Dt=q)}function H(q,zt,jt){jt===void 0&&(Dt===null?jt=i.TEXTURE0+ft-1:jt=Dt);let he=ee[jt];he===void 0&&(he={type:void 0,texture:void 0},ee[jt]=he),(he.type!==q||he.texture!==zt)&&(Dt!==jt&&(i.activeTexture(jt),Dt=jt),i.bindTexture(q,zt||kt[q]),he.type=q,he.texture=zt)}function Ee(){let q=ee[Dt];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function tt(){try{i.compressedTexImage2D(...arguments)}catch(q){Ge("WebGLState:",q)}}function Z(){try{i.compressedTexImage3D(...arguments)}catch(q){Ge("WebGLState:",q)}}function st(){try{i.texSubImage2D(...arguments)}catch(q){Ge("WebGLState:",q)}}function ne(){try{i.texSubImage3D(...arguments)}catch(q){Ge("WebGLState:",q)}}function Nt(){try{i.compressedTexSubImage2D(...arguments)}catch(q){Ge("WebGLState:",q)}}function $t(){try{i.compressedTexSubImage3D(...arguments)}catch(q){Ge("WebGLState:",q)}}function U(){try{i.texStorage2D(...arguments)}catch(q){Ge("WebGLState:",q)}}function M(){try{i.texStorage3D(...arguments)}catch(q){Ge("WebGLState:",q)}}function Q(){try{i.texImage2D(...arguments)}catch(q){Ge("WebGLState:",q)}}function Ot(){try{i.texImage3D(...arguments)}catch(q){Ge("WebGLState:",q)}}function wt(q){return d[q]!==void 0?d[q]:i.getParameter(q)}function Gt(q,zt){d[q]!==zt&&(i.pixelStorei(q,zt),d[q]=zt)}function ae(q){P.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),P.copy(q))}function Bt(q){ht.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),ht.copy(q))}function Ht(q,zt){let jt=c.get(zt);jt===void 0&&(jt=new WeakMap,c.set(zt,jt));let he=jt.get(q);he===void 0&&(he=i.getUniformBlockIndex(zt,q.name),i.uniformBlockBinding(zt,he,he),jt.set(q,he))}function de(q,zt,jt){let ge=c.get(zt).get(q);l[ge]!==jt&&(i.bindBufferBase(i.UNIFORM_BUFFER,ge,jt),l[ge]=jt)}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Dt=null,ee={},f={},l={},p=new WeakMap,m=[],w=null,g=!1,x=null,v=null,A=null,b=null,L=null,C=null,y=null,T=new Pe(0,0,0),V=0,D=!1,nt=null,dt=null,$=null,yt=null,K=null,P.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:u,disable:S,bindFramebuffer:j,getBoundFramebuffer:z,drawBuffers:lt,useProgram:St,setBlending:pt,setMaterial:Ut,setFlipSided:Xt,setCullFace:ce,setLineWidth:Wt,setPolygonOffset:ue,setScissorTest:Zt,activeTexture:te,bindTexture:H,unbindTexture:Ee,compressedTexImage2D:tt,compressedTexImage3D:Z,texImage2D:Q,texImage3D:Ot,pixelStorei:Gt,getParameter:wt,updateUBOMapping:Ht,uniformBlockBinding:de,texStorage2D:U,texStorage3D:M,texSubImage2D:st,texSubImage3D:ne,compressedTexSubImage2D:Nt,compressedTexSubImage3D:$t,scissor:ae,viewport:Bt,reset:Se}}function __(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,h=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,w=new FinalizationRegistry(U=>m.delete(U)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(U,M){return g?new OffscreenCanvas(U,M):kr("canvas")}function v(U,M,Q){let Ot=1,wt=$t(U);if((wt.width>Q||wt.height>Q)&&(Ot=Q/Math.max(wt.width,wt.height)),Ot<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let Gt=Math.floor(Ot*wt.width),ae=Math.floor(Ot*wt.height);f===void 0&&(f=x(Gt,ae));let Bt=M?x(Gt,ae):f;return Bt.width=Gt,Bt.height=ae,Bt.getContext("2d").drawImage(U,0,0,Gt,ae),Oe("WebGLRenderer: Texture has been resized from ("+wt.width+"x"+wt.height+") to ("+Gt+"x"+ae+")."),Bt}else return"data"in U&&Oe("WebGLRenderer: Image in DataTexture is too big ("+wt.width+"x"+wt.height+")."),U;return U}function A(U){return U.generateMipmaps}function b(U){i.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(U,M,Q,Ot,wt,Gt=!1){if(U!==null){if(i[U]!==void 0)return i[U];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ae;Ot&&(ae=t.get("EXT_texture_norm16"),ae||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Bt=M;if(M===i.RED&&(Q===i.FLOAT&&(Bt=i.R32F),Q===i.HALF_FLOAT&&(Bt=i.R16F),Q===i.UNSIGNED_BYTE&&(Bt=i.R8),Q===i.UNSIGNED_SHORT&&ae&&(Bt=ae.R16_EXT),Q===i.SHORT&&ae&&(Bt=ae.R16_SNORM_EXT)),M===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(Bt=i.R8UI),Q===i.UNSIGNED_SHORT&&(Bt=i.R16UI),Q===i.UNSIGNED_INT&&(Bt=i.R32UI),Q===i.BYTE&&(Bt=i.R8I),Q===i.SHORT&&(Bt=i.R16I),Q===i.INT&&(Bt=i.R32I)),M===i.RG&&(Q===i.FLOAT&&(Bt=i.RG32F),Q===i.HALF_FLOAT&&(Bt=i.RG16F),Q===i.UNSIGNED_BYTE&&(Bt=i.RG8),Q===i.UNSIGNED_SHORT&&ae&&(Bt=ae.RG16_EXT),Q===i.SHORT&&ae&&(Bt=ae.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(Bt=i.RG8UI),Q===i.UNSIGNED_SHORT&&(Bt=i.RG16UI),Q===i.UNSIGNED_INT&&(Bt=i.RG32UI),Q===i.BYTE&&(Bt=i.RG8I),Q===i.SHORT&&(Bt=i.RG16I),Q===i.INT&&(Bt=i.RG32I)),M===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(Bt=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(Bt=i.RGB16UI),Q===i.UNSIGNED_INT&&(Bt=i.RGB32UI),Q===i.BYTE&&(Bt=i.RGB8I),Q===i.SHORT&&(Bt=i.RGB16I),Q===i.INT&&(Bt=i.RGB32I)),M===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(Bt=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(Bt=i.RGBA16UI),Q===i.UNSIGNED_INT&&(Bt=i.RGBA32UI),Q===i.BYTE&&(Bt=i.RGBA8I),Q===i.SHORT&&(Bt=i.RGBA16I),Q===i.INT&&(Bt=i.RGBA32I)),M===i.RGB&&(Q===i.UNSIGNED_SHORT&&ae&&(Bt=ae.RGB16_EXT),Q===i.SHORT&&ae&&(Bt=ae.RGB16_SNORM_EXT),Q===i.UNSIGNED_INT_5_9_9_9_REV&&(Bt=i.RGB9_E5),Q===i.UNSIGNED_INT_10F_11F_11F_REV&&(Bt=i.R11F_G11F_B10F)),M===i.RGBA){let Ht=Gt?Br:cn.getTransfer(wt);Q===i.FLOAT&&(Bt=i.RGBA32F),Q===i.HALF_FLOAT&&(Bt=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(Bt=Ht===dn?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT&&ae&&(Bt=ae.RGBA16_EXT),Q===i.SHORT&&ae&&(Bt=ae.RGBA16_SNORM_EXT),Q===i.UNSIGNED_SHORT_4_4_4_4&&(Bt=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(Bt=i.RGB5_A1)}return(Bt===i.R16F||Bt===i.R32F||Bt===i.RG16F||Bt===i.RG32F||Bt===i.RGBA16F||Bt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Bt}function y(U,M){let Q;return U?M===null||M===Ri||M===Ds?Q=i.DEPTH24_STENCIL8:M===Si?Q=i.DEPTH32F_STENCIL8:M===gr&&(Q=i.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ri||M===Ds?Q=i.DEPTH_COMPONENT24:M===Si?Q=i.DEPTH_COMPONENT32F:M===gr&&(Q=i.DEPTH_COMPONENT16),Q}function T(U,M){return A(U)===!0||U.isFramebufferTexture&&U.minFilter!==On&&U.minFilter!==Kn?Math.log2(Math.max(M.width,M.height))+1:U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?M.mipmaps.length:1}function V(U){let M=new WeakRef(U);n.get(U).__ref=M,m.add(M),w.register(U,M,M)}function D(U){let M=n.get(U).__ref;M!==void 0&&(m.delete(M),w.unregister(M))}function nt(U){$(U.target)}function dt(U){yt(U.target)}function $(U){U.removeEventListener("dispose",nt),D(U),ft(U),U.isVideoTexture&&h.delete(U),U.isHTMLTexture&&d.delete(U)}function yt(U){U.removeEventListener("dispose",dt),D(U),Pt(U)}function K(){for(let U of m){let M=U.deref();M!==void 0&&(M.isRenderTarget===!0?yt(M):$(M))}m.clear(),d.clear()}function ft(U){let M=n.get(U);if(M.__webglInit===void 0)return;let Q=U.source,Ot=p.get(Q);if(Ot){let wt=Ot[M.__cacheKey];wt.usedTimes--,wt.usedTimes===0&&at(U),Object.keys(Ot).length===0&&p.delete(Q)}n.remove(U)}function at(U){let M=n.get(U);i.deleteTexture(M.__webglTexture);let Q=U.source,Ot=p.get(Q);delete Ot[M.__cacheKey],o.memory.textures--}function Pt(U){let M=n.get(U);M.__depthDisposeCallback&&M.__depthDisposeCallback();let Q=U.depthTexture;if(Q&&Q.renderTarget===U&&$(Q),U.isWebGLCubeRenderTarget)for(let wt=0;wt<6;wt++){if(Array.isArray(M.__webglFramebuffer[wt]))for(let Gt=0;Gt<M.__webglFramebuffer[wt].length;Gt++)i.deleteFramebuffer(M.__webglFramebuffer[wt][Gt]);else i.deleteFramebuffer(M.__webglFramebuffer[wt]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[wt])}else{if(Array.isArray(M.__webglFramebuffer))for(let wt=0;wt<M.__webglFramebuffer.length;wt++)i.deleteFramebuffer(M.__webglFramebuffer[wt]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let wt=0;wt<M.__webglColorRenderbuffer.length;wt++)M.__webglColorRenderbuffer[wt]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[wt]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let Ot=U.textures;for(let wt=0,Gt=Ot.length;wt<Gt;wt++){let ae=n.get(Ot[wt]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(Ot[wt])}n.remove(U)}let _t=0;function Dt(){_t=0}function ee(){return _t}function se(U){_t=U}function _e(){let U=_t;return U>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),_t+=1,U}function P(U){let M=[];return M.push(U.wrapS),M.push(U.wrapT),M.push(U.wrapR||0),M.push(U.magFilter),M.push(U.minFilter),M.push(U.anisotropy),M.push(U.internalFormat),M.push(U.format),M.push(U.type),M.push(U.generateMipmaps),M.push(U.mipmapsAutoUpdate),M.push(U.premultiplyAlpha),M.push(U.flipY),M.push(U.unpackAlignment),M.push(U.colorSpace),M.join()}function ht(U,M){let Q=n.get(U);if(U.isVideoTexture&&ne(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Q.__version!==U.version){let Ot=U.image;if(Ot===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(Ot.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(Q,U,M);return}}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+M)}function Rt(U,M){let Q=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){pt(Q,U,M);return}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+M)}function kt(U,M){let Q=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){pt(Q,U,M);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+M)}function u(U,M){let Q=n.get(U);if(U.version>0&&Q.__version!==U.version){Ut(Q,U,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+M)}let S={[cs]:i.REPEAT,[Di]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},j={[On]:i.NEAREST,[nd]:i.NEAREST_MIPMAP_NEAREST,[Mo]:i.NEAREST_MIPMAP_LINEAR,[Kn]:i.LINEAR,[rl]:i.LINEAR_MIPMAP_NEAREST,[es]:i.LINEAR_MIPMAP_LINEAR},z={[od]:i.NEVER,[uh]:i.ALWAYS,[ad]:i.LESS,[ch]:i.LEQUAL,[ld]:i.EQUAL,[hh]:i.GEQUAL,[cd]:i.GREATER,[hd]:i.NOTEQUAL};function lt(U,M){if(M.type===Si&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Kn||M.magFilter===rl||M.magFilter===Mo||M.magFilter===es||M.minFilter===Kn||M.minFilter===rl||M.minFilter===Mo||M.minFilter===es)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,S[M.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,S[M.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,S[M.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,j[M.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,j[M.minFilter]),M.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,z[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===On||M.minFilter!==Mo&&M.minFilter!==es||M.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function St(U,M){let Q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,M.addEventListener("dispose",nt),V(M));let Ot=M.source,wt=p.get(Ot);wt===void 0&&(wt={},p.set(Ot,wt));let Gt=P(M);if(Gt!==U.__cacheKey){wt[Gt]===void 0&&(wt[Gt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),wt[Gt].usedTimes++;let ae=wt[U.__cacheKey];ae!==void 0&&(wt[U.__cacheKey].usedTimes--,ae.usedTimes===0&&at(M)),U.__cacheKey=Gt,U.__webglTexture=wt[Gt].texture}return Q}function B(U,M,Q){return Math.floor(Math.floor(U/Q)/M)}function mt(U,M,Q,Ot){let Gt=U.updateRanges;if(Gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,Q,Ot,M.data);else{Gt.sort((Se,q)=>Se.start-q.start);let ae=0;for(let Se=1;Se<Gt.length;Se++){let q=Gt[ae],zt=Gt[Se],jt=q.start+q.count,he=B(zt.start,M.width,4),ge=B(q.start,M.width,4);zt.start<=jt+1&&he===ge&&B(zt.start+zt.count-1,M.width,4)===he?q.count=Math.max(q.count,zt.start+zt.count-q.start):(++ae,Gt[ae]=zt)}Gt.length=ae+1;let Bt=e.getParameter(i.UNPACK_ROW_LENGTH),Ht=e.getParameter(i.UNPACK_SKIP_PIXELS),de=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Se=0,q=Gt.length;Se<q;Se++){let zt=Gt[Se],jt=Math.floor(zt.start/4),he=Math.ceil(zt.count/4),ge=jt%M.width,Me=Math.floor(jt/M.width),Fe=he,re=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ge),e.pixelStorei(i.UNPACK_SKIP_ROWS,Me),e.texSubImage2D(i.TEXTURE_2D,0,ge,Me,Fe,re,Q,Ot,M.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Bt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,de)}}function pt(U,M,Q){let Ot=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Ot=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Ot=i.TEXTURE_3D);let wt=St(U,M),Gt=M.source;e.bindTexture(Ot,U.__webglTexture,i.TEXTURE0+Q);let ae=n.get(Gt);if(Gt.version!==ae.__version||wt===!0){if(e.activeTexture(i.TEXTURE0+Q),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let re=cn.getPrimaries(cn.workingColorSpace),qe=M.colorSpace===is?null:cn.getPrimaries(M.colorSpace),ye=M.colorSpace===is||re===qe?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let Ht=v(M.image,!1,s.maxTextureSize);Ht=Nt(M,Ht);let de=r.convert(M.format,M.colorSpace),Se=r.convert(M.type),q=C(M.internalFormat,de,Se,M.normalized,M.colorSpace,M.isVideoTexture);lt(Ot,M);let zt,jt=M.mipmaps,he=M.isVideoTexture!==!0,ge=ae.__version===void 0||wt===!0,Me=Gt.dataReady,Fe=T(M,Ht);if(M.isDepthTexture)q=y(M.format===ns,M.type),ge&&(he?e.texStorage2D(i.TEXTURE_2D,1,q,Ht.width,Ht.height):e.texImage2D(i.TEXTURE_2D,0,q,Ht.width,Ht.height,0,de,Se,null));else if(M.isDataTexture)if(jt.length>0){he&&ge&&e.texStorage2D(i.TEXTURE_2D,Fe,q,jt[0].width,jt[0].height);for(let re=0,qe=jt.length;re<qe;re++)zt=jt[re],he?Me&&e.texSubImage2D(i.TEXTURE_2D,re,0,0,zt.width,zt.height,de,Se,zt.data):e.texImage2D(i.TEXTURE_2D,re,q,zt.width,zt.height,0,de,Se,zt.data);M.generateMipmaps=!1}else he?(ge&&e.texStorage2D(i.TEXTURE_2D,Fe,q,Ht.width,Ht.height),Me&&mt(M,Ht,de,Se)):e.texImage2D(i.TEXTURE_2D,0,q,Ht.width,Ht.height,0,de,Se,Ht.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){he&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,q,jt[0].width,jt[0].height,Ht.depth);for(let re=0,qe=jt.length;re<qe;re++)if(zt=jt[re],M.format!==Ii)if(de!==null)if(he){if(Me)if(M.layerUpdates.size>0){let ye=_h(zt.width,zt.height,M.format,M.type);for(let me of M.layerUpdates){let je=zt.data.subarray(me*ye/zt.data.BYTES_PER_ELEMENT,(me+1)*ye/zt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,me,zt.width,zt.height,1,de,je)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,zt.width,zt.height,Ht.depth,de,zt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,q,zt.width,zt.height,Ht.depth,0,zt.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?Me&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,zt.width,zt.height,Ht.depth,de,Se,zt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,re,q,zt.width,zt.height,Ht.depth,0,de,Se,zt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{he&&ge&&e.texStorage2D(i.TEXTURE_2D,Fe,q,jt[0].width,jt[0].height);for(let re=0,qe=jt.length;re<qe;re++)zt=jt[re],M.format!==Ii?de!==null?he?Me&&e.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,zt.width,zt.height,de,zt.data):e.compressedTexImage2D(i.TEXTURE_2D,re,q,zt.width,zt.height,0,zt.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?Me&&e.texSubImage2D(i.TEXTURE_2D,re,0,0,zt.width,zt.height,de,Se,zt.data):e.texImage2D(i.TEXTURE_2D,re,q,zt.width,zt.height,0,de,Se,zt.data)}else if(M.isDataArrayTexture)if(he){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,q,Ht.width,Ht.height,Ht.depth),Me)if(M.layerUpdates.size>0){let re=_h(Ht.width,Ht.height,M.format,M.type);for(let qe of M.layerUpdates){let ye=Ht.data.subarray(qe*re/Ht.data.BYTES_PER_ELEMENT,(qe+1)*re/Ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,qe,Ht.width,Ht.height,1,de,Se,ye)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ht.width,Ht.height,Ht.depth,de,Se,Ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,q,Ht.width,Ht.height,Ht.depth,0,de,Se,Ht.data);else if(M.isData3DTexture)he?(ge&&e.texStorage3D(i.TEXTURE_3D,Fe,q,Ht.width,Ht.height,Ht.depth),Me&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ht.width,Ht.height,Ht.depth,de,Se,Ht.data)):e.texImage3D(i.TEXTURE_3D,0,q,Ht.width,Ht.height,Ht.depth,0,de,Se,Ht.data);else if(M.isFramebufferTexture){if(ge)if(he)e.texStorage2D(i.TEXTURE_2D,Fe,q,Ht.width,Ht.height);else{let re=Ht.width,qe=Ht.height;for(let ye=0;ye<Fe;ye++)e.texImage2D(i.TEXTURE_2D,ye,q,re,qe,0,de,Se,null),re>>=1,qe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let re=i.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),Ht.parentNode!==re){re.appendChild(Ht),d.add(M),re.onpaint=qe=>{let ye=qe.changedElements;for(let me of d)ye.includes(me.image)&&(me.needsUpdate=!0)},re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Ht);else{let ye=i.RGBA,me=i.RGBA,je=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ye,me,je,Ht)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(jt.length>0){if(he&&ge){let re=$t(jt[0]);e.texStorage2D(i.TEXTURE_2D,Fe,q,re.width,re.height)}for(let re=0,qe=jt.length;re<qe;re++)zt=jt[re],he?Me&&e.texSubImage2D(i.TEXTURE_2D,re,0,0,de,Se,zt):e.texImage2D(i.TEXTURE_2D,re,q,de,Se,zt);M.generateMipmaps=!1}else if(he){if(ge){let re=$t(Ht);e.texStorage2D(i.TEXTURE_2D,Fe,q,re.width,re.height)}Me&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Se,Ht)}else e.texImage2D(i.TEXTURE_2D,0,q,de,Se,Ht);A(M)&&M.mipmapsAutoUpdate===!0&&b(Ot),ae.__version=Gt.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function Ut(U,M,Q){if(M.image.length!==6)return;let Ot=St(U,M),wt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+Q);let Gt=n.get(wt);if(wt.version!==Gt.__version||Ot===!0){e.activeTexture(i.TEXTURE0+Q);let ae=cn.getPrimaries(cn.workingColorSpace),Bt=M.colorSpace===is?null:cn.getPrimaries(M.colorSpace),Ht=M.colorSpace===is||ae===Bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let de=M.isCompressedTexture||M.image[0].isCompressedTexture,Se=M.image[0]&&M.image[0].isDataTexture,q=[];for(let me=0;me<6;me++)!de&&!Se?q[me]=v(M.image[me],!0,s.maxCubemapSize):q[me]=Se?M.image[me].image:M.image[me],q[me]=Nt(M,q[me]);let zt=q[0],jt=r.convert(M.format,M.colorSpace),he=r.convert(M.type),ge=C(M.internalFormat,jt,he,M.normalized,M.colorSpace),Me=M.isVideoTexture!==!0,Fe=Gt.__version===void 0||Ot===!0,re=wt.dataReady,qe=T(M,zt);lt(i.TEXTURE_CUBE_MAP,M);let ye;if(M.isDepthTexture){if(ge=y(M.format===ns,M.type),Fe)if(Me)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ge,zt.width,zt.height);else for(let me=0;me<6;me++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ge,zt.width,zt.height,0,jt,he,null)}else if(de){Me&&Fe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,qe,ge,zt.width,zt.height);for(let me=0;me<6;me++){ye=q[me].mipmaps;for(let je=0;je<ye.length;je++){let G=ye[je];M.format!==Ii?jt!==null?Me?re&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,0,0,G.width,G.height,jt,G.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,ge,G.width,G.height,0,G.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Me?re&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,0,0,G.width,G.height,jt,he,G.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,ge,G.width,G.height,0,jt,he,G.data)}}}else{if(ye=M.mipmaps,Me&&Fe){ye.length>0&&qe++;let me=$t(q[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,qe,ge,me.width,me.height)}for(let me=0;me<6;me++)if(Se){Me?re&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,q[me].width,q[me].height,jt,he,q[me].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ge,q[me].width,q[me].height,0,jt,he,q[me].data);for(let je=0;je<ye.length;je++){let rt=ye[je].image[me].image;Me?re&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,0,0,rt.width,rt.height,jt,he,rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,ge,rt.width,rt.height,0,jt,he,rt.data)}}else{Me?re&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,jt,he,q[me]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ge,jt,he,q[me]);for(let je=0;je<ye.length;je++){let G=ye[je];Me?re&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,0,0,jt,he,G.image[me]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,ge,jt,he,G.image[me])}}}A(M)&&M.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),Gt.__version=wt.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function Xt(U,M,Q,Ot,wt,Gt){let ae=r.convert(Q.format,Q.colorSpace),Bt=r.convert(Q.type),Ht=C(Q.internalFormat,ae,Bt,Q.normalized,Q.colorSpace),de=n.get(M),Se=n.get(Q);if(Se.__renderTarget=M,!de.__hasExternalTextures){let q=Math.max(1,M.width>>Gt),zt=Math.max(1,M.height>>Gt);wt===i.TEXTURE_3D||wt===i.TEXTURE_2D_ARRAY?e.texImage3D(wt,Gt,Ht,q,zt,M.depth,0,ae,Bt,null):e.texImage2D(wt,Gt,Ht,q,zt,0,ae,Bt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),st(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ot,wt,Se.__webglTexture,0,Z(M)):(wt===i.TEXTURE_2D||wt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&wt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Ot,wt,Se.__webglTexture,Gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(U,M,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,U),M.depthBuffer){let Ot=M.depthTexture,wt=Ot&&Ot.isDepthTexture?Ot.type:null,Gt=y(M.stencilBuffer,wt),ae=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;st(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z(M),Gt,M.width,M.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z(M),Gt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Gt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,U)}else{let Ot=M.textures;for(let wt=0;wt<Ot.length;wt++){let Gt=Ot[wt],ae=r.convert(Gt.format,Gt.colorSpace),Bt=r.convert(Gt.type),Ht=C(Gt.internalFormat,ae,Bt,Gt.normalized,Gt.colorSpace);st(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z(M),Ht,M.width,M.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z(M),Ht,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ht,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Wt(U,M,Q){let Ot=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let wt=n.get(M.depthTexture);wt.__renderTarget=M;let Gt=Ot?M.depthTexture.image[0]:M.depthTexture.image;(!wt.__webglTexture||Gt.width!==M.width||Gt.height!==M.height)&&(Gt.width=M.width,Gt.height=M.height,M.depthTexture.needsUpdate=!0),Ot?u(M.depthTexture,0):ht(M.depthTexture,0);let ae=wt.__webglTexture,Bt=Z(M),Ht=Ot?i.TEXTURE_CUBE_MAP_POSITIVE_X+Q:i.TEXTURE_2D,de=M.depthTexture.format===ns?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===$i)st(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,Ht,ae,0,Bt):i.framebufferTexture2D(i.FRAMEBUFFER,de,Ht,ae,0);else if(M.depthTexture.format===ns)st(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,Ht,ae,0,Bt):i.framebufferTexture2D(i.FRAMEBUFFER,de,Ht,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ue(U){let M=n.get(U),Q=U.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==U.depthTexture){let Ot=U.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Ot){let wt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Ot.removeEventListener("dispose",wt)};Ot.addEventListener("dispose",wt),M.__depthDisposeCallback=wt}M.__boundDepthTexture=Ot}if(U.depthTexture&&!M.__autoAllocateDepthBuffer)if(Q)for(let Ot=0;Ot<6;Ot++)Wt(M.__webglFramebuffer[Ot],U,Ot);else U.texture.mipmaps.length>0?Wt(M.__webglFramebuffer[0],U,0):Wt(M.__webglFramebuffer,U,0);else if(Q){M.__webglDepthbuffer=[];for(let Ot=0;Ot<6;Ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Ot]),M.__webglDepthbuffer[Ot]===void 0)M.__webglDepthbuffer[Ot]=i.createRenderbuffer(),ce(M.__webglDepthbuffer[Ot],U,!1);else{let wt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Gt=M.__webglDepthbuffer[Ot];i.bindRenderbuffer(i.RENDERBUFFER,Gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,Gt)}}else if(U.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ce(M.__webglDepthbuffer,U,!1);else{let wt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Gt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,Gt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(U,M,Q){let Ot=n.get(U);M!==void 0&&Xt(Ot.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&ue(U)}function te(U){let M=U.texture,Q=n.get(U),Ot=n.get(M);U.addEventListener("dispose",dt),V(U);let wt=U.textures,Gt=U.isWebGLCubeRenderTarget===!0,ae=wt.length>1;if(ae||(Ot.__webglTexture===void 0&&(Ot.__webglTexture=i.createTexture()),Ot.__version=M.version,o.memory.textures++),Gt){Q.__webglFramebuffer=[];for(let Bt=0;Bt<6;Bt++)if(M.mipmaps.length>0){Q.__webglFramebuffer[Bt]=[];for(let Ht=0;Ht<M.mipmaps.length;Ht++)Q.__webglFramebuffer[Bt][Ht]=i.createFramebuffer()}else Q.__webglFramebuffer[Bt]=i.createFramebuffer()}else{if(M.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Bt=0;Bt<M.mipmaps.length;Bt++)Q.__webglFramebuffer[Bt]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(ae)for(let Bt=0,Ht=wt.length;Bt<Ht;Bt++){let de=n.get(wt[Bt]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&st(U)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Bt=0;Bt<wt.length;Bt++){let Ht=wt[Bt];Q.__webglColorRenderbuffer[Bt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[Bt]);let de=r.convert(Ht.format,Ht.colorSpace),Se=r.convert(Ht.type),q=C(Ht.internalFormat,de,Se,Ht.normalized,Ht.colorSpace,U.isXRRenderTarget===!0),zt=Z(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,q,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,Q.__webglColorRenderbuffer[Bt])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(Q.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Gt){e.bindTexture(i.TEXTURE_CUBE_MAP,Ot.__webglTexture),lt(i.TEXTURE_CUBE_MAP,M);for(let Bt=0;Bt<6;Bt++)if(M.mipmaps.length>0)for(let Ht=0;Ht<M.mipmaps.length;Ht++)Xt(Q.__webglFramebuffer[Bt][Ht],U,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,Ht);else Xt(Q.__webglFramebuffer[Bt],U,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0);A(M)?b(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(ae){for(let Bt=0,Ht=wt.length;Bt<Ht;Bt++){let de=wt[Bt],Se=n.get(de),q=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(q=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(q,Se.__webglTexture),lt(q,de),Xt(Q.__webglFramebuffer,U,de,i.COLOR_ATTACHMENT0+Bt,q,0),A(de)&&b(q)}e.unbindTexture()}else{let Bt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Bt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Bt,Ot.__webglTexture),lt(Bt,M),M.mipmaps.length>0)for(let Ht=0;Ht<M.mipmaps.length;Ht++)Xt(Q.__webglFramebuffer[Ht],U,M,i.COLOR_ATTACHMENT0,Bt,Ht);else Xt(Q.__webglFramebuffer,U,M,i.COLOR_ATTACHMENT0,Bt,0);A(M)?b(Bt):M.mipmaps.length>0&&i.texParameteri(Bt,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}U.depthBuffer&&ue(U)}function H(U){let M=U.textures;for(let Q=0,Ot=M.length;Q<Ot;Q++){let wt=M[Q];if(A(wt)&&wt.mipmapsAutoUpdate===!0){let Gt=L(U),ae=n.get(wt).__webglTexture;e.bindTexture(Gt,ae),b(Gt),e.unbindTexture()}}}let Ee=[];function tt(U){if(U.samples>0){if(st(U)===!1){let M=U.textures,Q=U.width,Ot=U.height,wt=i.COLOR_BUFFER_BIT,Gt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(U),Bt=M.length>1;if(Bt)for(let de=0;de<M.length;de++)e.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),U.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let de=0;de<M.length;de++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(wt|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(wt|=i.STENCIL_BUFFER_BIT)),Bt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[de]);let Se=n.get(M[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Se,0)}i.blitFramebuffer(0,0,Q,Ot,0,0,Q,Ot,wt,i.NEAREST),l===!0&&(Ee.length=0,Ee.push(i.COLOR_ATTACHMENT0+de),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&Ee.push(Gt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ee))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Bt)for(let de=0;de<M.length;de++){e.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,ae.__webglColorRenderbuffer[de]);let Se=n.get(M[de]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Se,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){let M=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Z(U){return Math.min(s.maxSamples,U.samples)}function st(U){let M=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ne(U){let M=o.render.frame;h.get(U)!==M&&(h.set(U,M),U.update())}function Nt(U,M){let Q=U.colorSpace,Ot=U.format,wt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Q!==Or&&Q!==is&&(cn.getTransfer(Q)===dn?(Ot!==Ii||wt!==ri)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",Q)),M}function $t(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=_e,this.resetTextureUnits=Dt,this.getTextureUnits=ee,this.setTextureUnits=se,this.setTexture2D=ht,this.setTexture2DArray=Rt,this.setTexture3D=kt,this.setTextureCube=u,this.rebindTextures=Zt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=Xt,this.useMultisampledRTT=st,this.dispose=K}function y_(i,t){function e(n,s=is){let r,o=cn.getTransfer(s);if(n===ri)return i.UNSIGNED_BYTE;if(n===al)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===oh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ih)return i.BYTE;if(n===sh)return i.SHORT;if(n===gr)return i.UNSIGNED_SHORT;if(n===ol)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===Si)return i.FLOAT;if(n===Pi)return i.HALF_FLOAT;if(n===ah)return i.ALPHA;if(n===lh)return i.RGB;if(n===Ii)return i.RGBA;if(n===$i)return i.DEPTH_COMPONENT;if(n===ns)return i.DEPTH_STENCIL;if(n===cl)return i.RED;if(n===hl)return i.RED_INTEGER;if(n===gs)return i.RG;if(n===ul)return i.RG_INTEGER;if(n===dl)return i.RGBA_INTEGER;if(n===So||n===wo||n===bo||n===Ao)if(o===dn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===So)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===So)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fl||n===pl||n===ml||n===gl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xl||n===_l||n===yl||n===vl||n===Ml||n===Eo||n===Sl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xl||n===_l)return o===dn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yl)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===vl)return r.COMPRESSED_R11_EAC;if(n===Ml)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Eo)return r.COMPRESSED_RG11_EAC;if(n===Sl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wl||n===bl||n===Al||n===El||n===Tl||n===Cl||n===Rl||n===Pl||n===Il||n===Fl||n===Ll||n===Dl||n===Nl||n===zl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wl)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bl)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Al)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===El)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tl)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cl)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rl)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pl)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Il)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fl)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ll)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dl)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nl)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zl)return o===dn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ul||n===Ol||n===Bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ul)return o===dn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kl||n===Vl||n===To||n===Gl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===kl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===To)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var v_=`
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

}`,Fh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new to(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Mi({vertexShader:v_,fragmentShader:M_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vt(new In(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lh=class extends zi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,m=null,w=typeof XRWebGLBinding<"u",g=new Fh,x={},v=e.getContextAttributes(),A=null,b=null,L=[],C=[],y=new At,T=null,V=null,D=new Hn;D.viewport=new yn;let nt=new Hn;nt.viewport=new yn;let dt=[D,nt],$=new tl,yt=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let ht=L[P];return ht===void 0&&(ht=new ar,L[P]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(P){let ht=L[P];return ht===void 0&&(ht=new ar,L[P]=ht),ht.getGripSpace()},this.getHand=function(P){let ht=L[P];return ht===void 0&&(ht=new ar,L[P]=ht),ht.getHandSpace()};function ft(P){let ht=C.indexOf(P.inputSource);if(ht===-1)return;let Rt=L[ht];Rt!==void 0&&(Rt.update(P.inputSource,P.frame,c||o),Rt.dispatchEvent({type:P.type,data:P.inputSource}))}function at(){s.removeEventListener("select",ft),s.removeEventListener("selectstart",ft),s.removeEventListener("selectend",ft),s.removeEventListener("squeeze",ft),s.removeEventListener("squeezestart",ft),s.removeEventListener("squeezeend",ft),s.removeEventListener("end",at),s.removeEventListener("inputsourceschange",Pt);for(let P=0;P<L.length;P++){let ht=C[P];ht!==null&&(C[P]=null,L[P].disconnect(ht))}yt=null,K=null,g.reset();for(let P in x)delete x[P];if(t.setRenderTarget(A),p=null,f=null,d=null,s=null,b=null,_e.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(y.width,y.height,!1),V!==null){let P=V.camera;P.fov=V.fov,P.zoom=V.zoom,P.updateProjectionMatrix(),V=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){r=P,n.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){a=P,n.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(P){c=P},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&w&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(P){if(s=P,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",ft),s.addEventListener("selectstart",ft),s.addEventListener("selectend",ft),s.addEventListener("squeeze",ft),s.addEventListener("squeezestart",ft),s.addEventListener("squeezeend",ft),s.addEventListener("end",at),s.addEventListener("inputsourceschange",Pt),v.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(y),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,kt=null,u=null;v.depth&&(u=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=v.stencil?ns:$i,kt=v.stencil?Ds:Ri);let S={colorFormat:e.RGBA8,depthFormat:u,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(S),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new ci(f.textureWidth,f.textureHeight,{format:Ii,type:ri,depthTexture:new Ki(f.textureWidth,f.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Rt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Rt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new ci(p.framebufferWidth,p.framebufferHeight,{format:Ii,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Pt(P){for(let ht=0;ht<P.removed.length;ht++){let Rt=P.removed[ht],kt=C.indexOf(Rt);kt>=0&&(C[kt]=null,L[kt].disconnect(Rt))}for(let ht=0;ht<P.added.length;ht++){let Rt=P.added[ht],kt=C.indexOf(Rt);if(kt===-1){for(let S=0;S<L.length;S++)if(S>=C.length){C.push(Rt),kt=S;break}else if(C[S]===null){C[S]=Rt,kt=S;break}if(kt===-1)break}let u=L[kt];u&&u.connect(Rt)}}function _t(P,ht){ht===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(ht.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(s===null)return;let ht=P.near,Rt=P.far;g.texture!==null&&(g.depthNear>0&&(ht=g.depthNear),g.depthFar>0&&(Rt=g.depthFar)),$.near=nt.near=D.near=ht,$.far=nt.far=D.far=Rt,(yt!==$.near||K!==$.far)&&(s.updateRenderState({depthNear:$.near,depthFar:$.far}),yt=$.near,K=$.far),$.layers.mask=P.layers.mask|6,D.layers.mask=$.layers.mask&-5,nt.layers.mask=$.layers.mask&-3;let kt=P.parent,u=$.cameras;_t($,kt);for(let S=0;S<u.length;S++)_t(u[S],kt);$.projectionMatrix.copy(D.projectionMatrix),$.projectionMatrixInverse.copy(D.projectionMatrixInverse),V===null&&P.isPerspectiveCamera&&(V={camera:P,fov:P.fov,zoom:P.zoom}),Dt(P,$,kt)};function Dt(P,ht,Rt){Rt===null?P.matrix.copy(ht.matrixWorld):(P.matrix.copy(Rt.matrixWorld),P.matrix.invert(),P.matrix.multiply(ht.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(ht.projectionMatrix),P.projectionMatrixInverse.copy(ht.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=Ea*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(P){l=P,f!==null&&(f.fixedFoveation=P),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=P)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh($)},this.getCameraTexture=function(P){return x[P]};let ee=null;function se(P,ht){if(h=ht.getViewerPose(c||o),m=ht,h!==null){let Rt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let kt=!1;Rt.length!==$.cameras.length&&($.cameras.length=0,kt=!0);for(let z=0;z<Rt.length;z++){let lt=Rt[z],St=null;if(p!==null)St=p.getViewport(lt);else{let mt=d.getViewSubImage(f,lt);St=mt.viewport,z===0&&(t.setRenderTargetTextures(b,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(b))}let B=dt[z];B===void 0&&(B=new Hn,B.layers.enable(z),B.viewport=new yn,dt[z]=B),B.matrix.fromArray(lt.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(lt.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(St.x,St.y,St.width,St.height),z===0&&($.matrix.copy(B.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),kt===!0&&$.cameras.push(B)}let u=s.enabledFeatures;if(u&&u.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){d=n.getBinding();let z=d.getDepthInformation(Rt[0]);z&&z.isValid&&z.texture&&g.init(z,s.renderState)}if(u&&u.includes("camera-access")&&w){t.state.unbindTexture(),d=n.getBinding();for(let z=0;z<Rt.length;z++){let lt=Rt[z].camera;if(lt){let St=x[lt];St||(St=new to,x[lt]=St);let B=d.getCameraImage(lt);St.sourceTexture=B}}}}for(let Rt=0;Rt<L.length;Rt++){let kt=C[Rt],u=L[Rt];kt!==null&&u!==void 0&&u.update(kt,ht,c||o)}ee&&ee(P,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),m=null}let _e=new Zd;_e.setAnimationLoop(se),this.setAnimationLoop=function(P){ee=P},this.dispose=function(){}}},S_=new hn,rf=new Je;rf.set(-1,0,0,0,1,0,0,0,1);function w_(i,t){function e(g,x){g.matrixAutoUpdate===!0&&g.updateMatrix(),x.value.copy(g.matrix)}function n(g,x){x.color.getRGB(g.fogColor.value,mh(i)),x.isFog?(g.fogNear.value=x.near,g.fogFar.value=x.far):x.isFogExp2&&(g.fogDensity.value=x.density)}function s(g,x,v,A,b){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(g,x):x.isMeshLambertMaterial?(r(g,x),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(g,x),d(g,x)):x.isMeshPhongMaterial?(r(g,x),h(g,x),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(g,x),f(g,x),x.isMeshPhysicalMaterial&&p(g,x,b)):x.isMeshMatcapMaterial?(r(g,x),m(g,x)):x.isMeshDepthMaterial?r(g,x):x.isMeshDistanceMaterial?(r(g,x),w(g,x)):x.isMeshNormalMaterial?r(g,x):x.isLineBasicMaterial?(o(g,x),x.isLineDashedMaterial&&a(g,x)):x.isPointsMaterial?l(g,x,v,A):x.isSpriteMaterial?c(g,x):x.isShadowMaterial?(g.color.value.copy(x.color),g.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(g,x){g.opacity.value=x.opacity,x.color&&g.diffuse.value.copy(x.color),x.emissive&&g.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(g.map.value=x.map,e(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,e(x.alphaMap,g.alphaMapTransform)),x.bumpMap&&(g.bumpMap.value=x.bumpMap,e(x.bumpMap,g.bumpMapTransform),g.bumpScale.value=x.bumpScale,x.side===Bn&&(g.bumpScale.value*=-1)),x.normalMap&&(g.normalMap.value=x.normalMap,e(x.normalMap,g.normalMapTransform),g.normalScale.value.copy(x.normalScale),x.side===Bn&&g.normalScale.value.negate()),x.displacementMap&&(g.displacementMap.value=x.displacementMap,e(x.displacementMap,g.displacementMapTransform),g.displacementScale.value=x.displacementScale,g.displacementBias.value=x.displacementBias),x.emissiveMap&&(g.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,g.emissiveMapTransform)),x.specularMap&&(g.specularMap.value=x.specularMap,e(x.specularMap,g.specularMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest);let v=t.get(x),A=v.envMap,b=v.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(S_.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(rf),g.reflectivity.value=x.reflectivity,g.ior.value=x.ior,g.refractionRatio.value=x.refractionRatio),x.lightMap&&(g.lightMap.value=x.lightMap,g.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,g.lightMapTransform)),x.aoMap&&(g.aoMap.value=x.aoMap,g.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,g.aoMapTransform))}function o(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,x.map&&(g.map.value=x.map,e(x.map,g.mapTransform))}function a(g,x){g.dashSize.value=x.dashSize,g.totalSize.value=x.dashSize+x.gapSize,g.scale.value=x.scale}function l(g,x,v,A){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.size.value=x.size*v,g.scale.value=A*.5,x.map&&(g.map.value=x.map,e(x.map,g.uvTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,e(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function c(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.rotation.value=x.rotation,x.map&&(g.map.value=x.map,e(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,e(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function h(g,x){g.specular.value.copy(x.specular),g.shininess.value=Math.max(x.shininess,1e-4)}function d(g,x){x.gradientMap&&(g.gradientMap.value=x.gradientMap)}function f(g,x){g.metalness.value=x.metalness,x.metalnessMap&&(g.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,g.metalnessMapTransform)),g.roughness.value=x.roughness,x.roughnessMap&&(g.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,g.roughnessMapTransform)),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)}function p(g,x,v){g.ior.value=x.ior,x.diffuseRoughness>0&&(g.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=x.diffuseRoughnessMap,e(x.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),x.sheen>0&&(g.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),g.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(g.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,g.sheenColorMapTransform)),x.sheenRoughnessMap&&(g.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,g.sheenRoughnessMapTransform))),x.clearcoat>0&&(g.clearcoat.value=x.clearcoat,g.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(g.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,g.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(g.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Bn&&g.clearcoatNormalScale.value.negate())),x.dispersion>0&&(g.dispersion.value=x.dispersion),x.retroreflectivity>0&&(g.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(g.iridescence.value=x.iridescence,g.iridescenceIOR.value=x.iridescenceIOR,g.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(g.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,g.iridescenceMapTransform)),x.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),x.transmission>0&&(g.transmission.value=x.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),x.transmissionMap&&(g.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,g.transmissionMapTransform)),g.thickness.value=x.thickness,x.thicknessMap&&(g.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=x.attenuationDistance,g.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(g.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(g.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=x.specularIntensity,g.specularColor.value.copy(x.specularColor),x.specularColorMap&&(g.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,g.specularColorMapTransform)),x.specularIntensityMap&&(g.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,x){x.matcap&&(g.matcap.value=x.matcap)}function w(g,x){let v=t.get(x).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function b_(i,t,e,n){let s={},r={};function o(v,A){let b=A.program;n.uniformBlockBinding(v,b,s[v.id])}function a(v,A){let b=s[v.id];b===void 0&&(m(v),b=l(v),s[v.id]=b,v.addEventListener("dispose",g));let L=A.program;n.updateUBOMapping(v,L);let C=t.render.frame;r[v.id]!==C&&(c(v),r[v.id]=C)}function l(v){let A=i.createBuffer(),b=v.__size,L=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,b,L),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function c(v){let A=s[v.id],b=v.uniforms,L=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let C=0,y=b.length;C<y;C++){let T=b[C];if(Array.isArray(T))for(let V=0,D=T.length;V<D;V++)h(T[V],C,V,L);else h(T,C,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,A,b,L){if(f(v,A,b,L)===!0){let C=v.__offset,y=v.value;if(Array.isArray(y)){let T=0;for(let V=0;V<y.length;V++){let D=y[V],nt=w(D,!0);d(D,v.__data,T),T+=nt.storage/Float32Array.BYTES_PER_ELEMENT}}else d(y,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,C,v.__data)}}function d(v,A,b){typeof v=="number"||typeof v=="boolean"?A[b]=v:v.isMatrix3?(A[b]=v.elements[0],A[b+1]=v.elements[1],A[b+2]=v.elements[2],A[b+3]=0,A[b+4]=v.elements[3],A[b+5]=v.elements[4],A[b+6]=v.elements[5],A[b+7]=0,A[b+8]=v.elements[6],A[b+9]=v.elements[7],A[b+10]=v.elements[8],A[b+11]=0):ArrayBuffer.isView(v)?A.set(v.subarray(0,A.length-b),b):v.toArray(A,b)}function f(v,A,b,L){let C=v.value,y=A+"_"+b;if(Array.isArray(C)){L[y]===void 0&&(L[y]=[]);let T=L[y],V=!1;for(let D=0;D<C.length;D++)p(C[D],T,D)===!0&&(V=!0);return V}return p(C,L,y)}function p(v,A,b){if(A[b]===void 0)return typeof v=="number"||typeof v=="boolean"?A[b]=v:ArrayBuffer.isView(v)?A[b]=v.slice():A[b]=v.clone(),!0;{let L=A[b];if(typeof v=="number"||typeof v=="boolean"){if(L!==v)return A[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(L.equals(v)===!1)return L.copy(v),!0}}return!1}function m(v){let A=v.uniforms,b=0,L=16;for(let y=0,T=A.length;y<T;y++){let V=Array.isArray(A[y])?A[y]:[A[y]];for(let D=0,nt=V.length;D<nt;D++){let dt=V[D],$=Array.isArray(dt.value)?dt.value:[dt.value],yt=Array.isArray(A[y])||Array.isArray(dt.value),K=b;for(let at=0,Pt=$.length;at<Pt;at++){let _t=$[at],Dt=w(_t,yt),ee=b%L,se=ee%Dt.boundary,_e=ee+se;b+=se,_e!==0&&L-_e<Dt.storage&&(b+=L-_e),at===0&&(K=b),b+=Dt.storage}let ft=dt.type==="int"?Int32Array:dt.type==="uint"?Uint32Array:Float32Array;dt.__data=new ft((b-K)/Float32Array.BYTES_PER_ELEMENT),dt.__offset=K}}let C=b%L;return C>0&&(b+=L-C),v.__size=b,v.__cache={},this}function w(v,A){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=16,b.storage=48):v.isMatrix4?(b.boundary=16,b.storage=64):v.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",v),A===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function g(v){let A=v.target;A.removeEventListener("dispose",g),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function x(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:a,dispose:x}}var A_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vi=null;function E_(){return Vi===null&&(Vi=new Jr(A_,16,16,gs,Pi),Vi.name="DFG_LUT",Vi.minFilter=Kn,Vi.magFilter=Kn,Vi.wrapS=Di,Vi.wrapT=Di,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}var Yl=class{constructor(t={}){let{canvas:e=ud(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=ri}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let w=p,g=new Set([dl,ul,hl]),x=new Set([ri,Ri,gr,Ds,al,ll]),v=new Uint32Array(4),A=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[],intensity:[]},L=null,C=null,y=[],T=[],V=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,nt=!1,dt=null,$=null,yt=null,K=null;this._outputColorSpace=$n;let ft=0,at=0,Pt=null,_t=-1,Dt=null,ee=new yn,se=new yn,_e=null,P=new Pe(0),ht=0,Rt=e.width,kt=e.height,u=1,S=null,j=null,z=new yn(0,0,Rt,kt),lt=new yn(0,0,Rt,kt),St=!1,B=new hs,mt=new Ia,pt=!1,Ut=!1,Xt=new hn,ce=new Y,Wt=new yn,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function te(){return Pt===null?u:1}let H=n;function Ee(_,F){return e.getContext(_,F)}let tt,Z,st,ne,Nt,$t,U,M,Q,Ot,wt,Gt,ae,Bt,Ht,de,Se,q,zt,jt,he,ge,Me;try{let _={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nl}`),e.addEventListener("webglcontextlost",qe,!1),e.addEventListener("webglcontextrestored",ye,!1),e.addEventListener("webglcontextcreationerror",me,!1),H===null){let F="webgl2";if(H=Ee(F,_),H===null)throw Ee(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(_){throw e.removeEventListener("webglcontextlost",qe,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",me,!1),Ge("WebGLRenderer: "+_.message),_}function Fe(){tt=new Ug(H),tt.init(),he=new y_(H,tt),Z=new Eg(H,tt,t,he),st=new x_(H,tt),Z.reversedDepthBuffer&&f&&st.buffers.depth.setReversed(!0),$=H.createFramebuffer(),yt=H.createFramebuffer(),K=H.createFramebuffer(),ne=new kg(H),Nt=new i_,$t=new __(H,tt,st,Nt,Z,he,ne),U=new zg(D),M=new Gp(H),ge=new bg(H,M),Q=new Og(H,M,ne,ge),Ot=new Gg(H,Q,M,ge,ne),q=new Vg(H,Z,$t),Ht=new Tg(Nt),wt=new n_(D,U,tt,Z,ge,Ht),Gt=new w_(D,Nt),ae=new r_,Bt=new u_(tt),Se=new wg(D,U,st,Ot,m,l),de=new g_(D,Ot,Z),Me=new b_(H,ne,Z,st),zt=new Ag(H,tt,ne),jt=new Bg(H,tt,ne),ne.programs=wt.programs,D.capabilities=Z,D.extensions=tt,D.properties=Nt,D.renderLists=ae,D.shadowMap=de,D.state=st,D.info=ne}w!==ri&&(V=new Wg(w,e.width,e.height,a,s,r));let re=new Lh(D,H);this.xr=re,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let _=tt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=tt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return u},this.setPixelRatio=function(_){_!==void 0&&(u=_,this.setSize(Rt,kt,!1))},this.getSize=function(_){return _.set(Rt,kt)},this.setSize=function(_,F,X=!0){if(re.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Rt=_,kt=F,e.width=Math.floor(_*u),e.height=Math.floor(F*u),X===!0&&(e.style.width=_+"px",e.style.height=F+"px"),V!==null&&V.setSize(e.width,e.height),this.setViewport(0,0,_,F)},this.getDrawingBufferSize=function(_){return _.set(Rt*u,kt*u).floor()},this.setDrawingBufferSize=function(_,F,X){Rt=_,kt=F,u=X,e.width=Math.floor(_*X),e.height=Math.floor(F*X),this.setViewport(0,0,_,F)},this.setEffects=function(_){if(w===ri){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let F=0;F<_.length;F++)if(_[F].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(ee)},this.getViewport=function(_){return _.copy(z)},this.setViewport=function(_,F,X,k){_.isVector4?z.set(_.x,_.y,_.z,_.w):z.set(_,F,X,k),st.viewport(ee.copy(z).multiplyScalar(te()).round())},this.getScissor=function(_){return _.copy(lt)},this.setScissor=function(_,F,X,k){_.isVector4?lt.set(_.x,_.y,_.z,_.w):lt.set(_,F,X,k),st.scissor(se.copy(lt).multiplyScalar(te()).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(_){st.setScissorTest(St=_)},this.setOpaqueSort=function(_){S=_},this.setTransparentSort=function(_){j=_},this.getClearColor=function(_){return _.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(_=!0,F=!0,X=!0){let k=0;if(_){let N=!1;if(Pt!==null){let ut=Pt.texture.format;N=g.has(ut)}if(N){let ut=Pt.texture.type,Et=x.has(ut),ot=Se.getClearColor(),Mt=Se.getClearAlpha(),Qt=ot.r,le=ot.g,ie=ot.b;Et?(v[0]=Qt,v[1]=le,v[2]=ie,v[3]=Mt,H.clearBufferuiv(H.COLOR,0,v)):(A[0]=Qt,A[1]=le,A[2]=ie,A[3]=Mt,H.clearBufferiv(H.COLOR,0,A))}else k|=H.COLOR_BUFFER_BIT}F&&(k|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&H.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),dt=_},this.dispose=function(){e.removeEventListener("webglcontextlost",qe,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",me,!1),Se.dispose(),ae.dispose(),Bt.dispose(),$t.dispose(),Nt.dispose(),U.dispose(),Ot.dispose(),Q.dispose(),ge.dispose(),Me.dispose(),wt.dispose(),re.dispose(),re.removeEventListener("sessionstart",Tt),re.removeEventListener("sessionend",Ue),Ye.stop()};function qe(_){_.preventDefault(),Vr("WebGLRenderer: Context Lost."),nt=!0}function ye(){Vr("WebGLRenderer: Context Restored."),nt=!1;let _=ne.autoReset,F=de.enabled,X=de.autoUpdate,k=de.needsUpdate,N=de.type;Fe(),ne.autoReset=_,de.enabled=F,de.autoUpdate=X,de.needsUpdate=k,de.type=N}function me(_){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function je(_){let F=_.target;F.removeEventListener("dispose",je),G(F)}function G(_){rt(_),Nt.remove(_)}function rt(_){let F=Nt.get(_).programs;F!==void 0&&(F.forEach(function(X){wt.releaseProgram(X)}),_.isShaderMaterial&&wt.releaseShaderCache(_))}this.renderBufferDirect=function(_,F,X,k,N,ut){F===null&&(F=ue);let Et=N.isMesh&&N.matrixWorld.determinantAffine()<0,ot=J(_,F,X,k,N);st.setMaterial(k,Et);let Mt=X.index,Qt=1;if(k.wireframe===!0){if(Mt=Q.getWireframeAttribute(X),Mt===void 0)return;Qt=2}let le=X.drawRange,ie=X.attributes.position,Ct=le.start*Qt,Kt=(le.start+le.count)*Qt;ut!==null&&(Ct=Math.max(Ct,ut.start*Qt),Kt=Math.min(Kt,(ut.start+ut.count)*Qt)),Mt!==null?(Ct=Math.max(Ct,0),Kt=Math.min(Kt,Mt.count)):ie!=null&&(Ct=Math.max(Ct,0),Kt=Math.min(Kt,ie.count));let xe=Kt-Ct;if(xe<0||xe===1/0)return;ge.setup(N,k,ot,X,Mt);let Te,be=zt;if(Mt!==null&&(Te=M.get(Mt),be=jt,be.setIndex(Te)),N.isMesh)k.wireframe===!0?(st.setLineWidth(k.wireframeLinewidth*te()),be.setMode(H.LINES)):be.setMode(H.TRIANGLES);else if(N.isLine){let We=k.linewidth;We===void 0&&(We=1),st.setLineWidth(We*te()),N.isLineSegments?be.setMode(H.LINES):N.isLineLoop?be.setMode(H.LINE_LOOP):be.setMode(H.LINE_STRIP)}else N.isPoints?be.setMode(H.POINTS):N.isSprite&&be.setMode(H.TRIANGLES);if(N.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))be.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let We=N._multiDrawStarts,fe=N._multiDrawCounts,an=N._multiDrawCount,Ve=Mt?M.get(Mt).bytesPerElement:1,pe=Nt.get(k).currentProgram.getUniforms();for(let Ce=0;Ce<an;Ce++)pe.setValue(H,"_gl_DrawID",Ce),be.render(We[Ce]/Ve,fe[Ce])}else if(N.isInstancedMesh)be.renderInstances(Ct,xe,N.count);else if(X.isInstancedBufferGeometry){let We=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,fe=Math.min(X.instanceCount,We);be.renderInstances(Ct,xe,fe)}else be.render(Ct,xe)};function Ft(_,F,X,k){dt!==null&&_.isNodeMaterial&&dt.setObject(k,_),pt===!0&&Ht.setState(_,X,!1),_.transparent===!0&&_.side===$e&&_.forceSinglePass===!1?(_.side=Bn,_.needsUpdate=!0,E(_,F,k),_.side=ms,_.needsUpdate=!0,E(_,F,k),_.side=$e):E(_,F,k)}this.compile=function(_,F,X=null){X===null&&(X=_),dt!==null&&dt.renderStart(_,F,X),C=Bt.get(X),C.init(F),T.push(C),X.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(C.pushLight(N),N.castShadow&&C.pushShadow(N))}),_!==X&&_.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(C.pushLight(N),N.castShadow&&C.pushShadow(N))}),C.setupLights(),dt!==null&&dt.updateLights(C.state.lightsArray),Ut=this.localClippingEnabled,pt=Ht.init(this.clippingPlanes,Ut),pt===!0&&Ht.setGlobalState(this.clippingPlanes,F),dt!==null&&de.render(C.state.shadowsArray,X,F);let k=new Set;return _.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let ut=N.material;if(ut)if(Array.isArray(ut))for(let Et=0;Et<ut.length;Et++){let ot=ut[Et];Ft(ot,X,F,N),k.add(ot)}else Ft(ut,X,F,N),k.add(ut)}),C=T.pop(),dt!==null&&dt.renderEnd(),k},this.compileAsync=function(_,F,X=null){let k=this.compile(_,F,X);return new Promise(N=>{function ut(){if(k.forEach(function(Et){let Mt=Nt.get(Et).currentProgram;(Mt===void 0||Mt.isReady())&&k.delete(Et)}),k.size===0){N(_);return}setTimeout(ut,10)}tt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let It=null;function qt(_){It&&It(_)}function Tt(){Ye.stop()}function Ue(){Ye.start()}let Ye=new Zd;Ye.setAnimationLoop(qt),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(_){It=_,re.setAnimationLoop(_),_===null?Ye.stop():Ye.start()},re.addEventListener("sessionstart",Tt),re.addEventListener("sessionend",Ue),this.render=function(_,F){if(F!==void 0&&F.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(nt===!0)return;dt!==null&&dt.renderStart(_,F);let X=re.enabled===!0&&re.isPresenting===!0,k=V!==null&&(Pt===null||X)&&V.begin(D,Pt);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(F),F=re.getCamera()),_.isScene===!0&&_.onBeforeRender(D,_,F,Pt),C=Bt.get(_,T.length),C.init(F),C.state.textureUnits=$t.getTextureUnits(),T.push(C),Xt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?mt.setFromArrayCamera(F):B.setFromProjectionMatrix(Xt,gi,F.reversedDepth),Ut=this.localClippingEnabled,pt=Ht.init(this.clippingPlanes,Ut),L=ae.get(_,y.length),L.init(),y.push(L),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Et=D.xr.getDepthSensingMesh();Et!==null&&W(Et,F,-1/0,D.sortObjects)}W(_,F,0,D.sortObjects),L.finish(),dt!==null&&dt.updateLights(C.state.lightsArray),D.sortObjects===!0&&L.sort(S,j),Zt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Zt&&Se.addToRenderList(L,_),this.info.autoReset===!0&&this.info.reset(),pt===!0&&Ht.beginShadows();let N=C.state.shadowsArray;if(de.render(N,_,F),pt===!0&&Ht.endShadows(),(k&&V.hasRenderPass())===!1){let Et=L.opaque,ot=L.transmissive;if(C.setupLights(),F.isArrayCamera){let Mt=F.cameras;if(ot.length>0)for(let Qt=0,le=Mt.length;Qt<le;Qt++){let ie=Mt[Qt];gt(Et,ot,_,ie)}Zt&&Se.render(_);for(let Qt=0,le=Mt.length;Qt<le;Qt++){let ie=Mt[Qt];ct(L,_,ie,ie.viewport)}}else ot.length>0&&gt(Et,ot,_,F),Zt&&Se.render(_),ct(L,_,F)}Pt!==null&&at===0&&($t.updateMultisampleRenderTarget(Pt),$t.updateRenderTargetMipmap(Pt)),k&&V.end(D),_.isScene===!0&&_.onAfterRender(D,_,F),ge.resetDefaultState(),_t=-1,Dt=null,T.pop(),T.length>0?(C=T[T.length-1],$t.setTextureUnits(C.state.textureUnits),pt===!0&&Ht.setGlobalState(D.clippingPlanes,C.state.camera)):C=null,y.pop(),y.length>0?L=y[y.length-1]:L=null,dt!==null&&dt.renderEnd()};function W(_,F,X,k){if(_.visible===!1)return;if(_.layers.test(F.layers)){if(_.isGroup)X=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(F);else if(_.isLight)C.pushLight(_),_.castShadow&&C.pushShadow(_);else if(_.isSprite){let Et=F.isArrayCamera?mt:B;if(!_.frustumCulled||_.intersectsFrustum(Et)){k&&Wt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Xt);let ot=Ot.update(_),Mt=_.material;Mt.visible&&L.push(_,ot,Mt,X,Wt.z,null,F)}}else if(_.isMesh||_.isLine||_.isPoints){let Et=F.isArrayCamera?mt:B;if(!_.frustumCulled||_.intersectsFrustum(Et)){let ot=Ot.update(_),Mt=_.material;if(k&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Wt.copy(_.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Wt.copy(ot.boundingSphere.center)),Wt.applyMatrix4(_.matrixWorld).applyMatrix4(Xt)),Array.isArray(Mt)){let Qt=ot.groups;for(let le=0,ie=Qt.length;le<ie;le++){let Ct=Qt[le],Kt=Mt[Ct.materialIndex];Kt&&Kt.visible&&L.push(_,ot,Kt,X,Wt.z,Ct,F)}}else Mt.visible&&L.push(_,ot,Mt,X,Wt.z,null,F)}}}let ut=_.children;for(let Et=0,ot=ut.length;Et<ot;Et++)W(ut[Et],F,X,k)}function ct(_,F,X,k){let{opaque:N,transmissive:ut,transparent:Et}=_;C.setupLightsView(X),pt===!0&&Ht.setGlobalState(D.clippingPlanes,X),k&&st.viewport(ee.copy(k)),N.length>0&&et(N,F,X),ut.length>0&&et(ut,F,X),Et.length>0&&et(Et,F,X),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function gt(_,F,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[k.id]===void 0){let Ct=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[k.id]=new ci(1,1,{generateMipmaps:!0,type:Ct?Pi:ri,minFilter:es,samples:Math.max(4,Z.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:cn.workingColorSpace})}let ut=C.state.transmissionRenderTarget[k.id],Et=k.viewport||ee;ut.setSize(Et.z*D.transmissionResolutionScale,Et.w*D.transmissionResolutionScale);let ot=D.getRenderTarget(),Mt=D.getActiveCubeFace(),Qt=D.getActiveMipmapLevel();D.setRenderTarget(ut),D.getClearColor(P),ht=D.getClearAlpha(),ht<1&&D.setClearColor(16777215,.5),D.clear(),Zt&&Se.render(X);let le=D.toneMapping;D.toneMapping=ki;let ie=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),C.setupLightsView(k),pt===!0&&Ht.setGlobalState(D.clippingPlanes,k),et(_,X,k),$t.updateMultisampleRenderTarget(ut),$t.updateRenderTargetMipmap(ut),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let Kt=0,xe=F.length;Kt<xe;Kt++){let Te=F[Kt],{object:be,geometry:We,material:fe,group:an}=Te;if(fe.side===$e&&be.layers.test(k.layers)){let Ve=fe.side;fe.side=Bn,fe.needsUpdate=!0,xt(be,X,k,We,fe,an),fe.side=Ve,fe.needsUpdate=!0,Ct=!0}}Ct===!0&&($t.updateMultisampleRenderTarget(ut),$t.updateRenderTargetMipmap(ut))}D.setRenderTarget(ot,Mt,Qt),D.setClearColor(P,ht),ie!==void 0&&(k.viewport=ie),D.toneMapping=le}function et(_,F,X){let k=F.isScene===!0?F.overrideMaterial:null;for(let N=0,ut=_.length;N<ut;N++){let Et=_[N],{object:ot,geometry:Mt,group:Qt}=Et,le=Et.material;le.allowOverride===!0&&k!==null&&(le=k),ot.layers.test(X.layers)&&xt(ot,F,X,Mt,le,Qt)}}function xt(_,F,X,k,N,ut){dt!==null&&N.isNodeMaterial&&dt.setObject(_,N),_.onBeforeRender(D,F,X,k,N,ut),_.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),N.onBeforeRender(D,F,X,k,_,ut),N.transparent===!0&&N.side===$e&&N.forceSinglePass===!1?(N.side=Bn,N.needsUpdate=!0,D.renderBufferDirect(X,F,k,N,_,ut),N.side=ms,N.needsUpdate=!0,D.renderBufferDirect(X,F,k,N,_,ut),N.side=$e):D.renderBufferDirect(X,F,k,N,_,ut),_.onAfterRender(D,F,X,k,N,ut)}function bt(_){let F=0;for(let X of _)X.texture!==null&&F++;return F}function E(_,F,X){F.isScene!==!0&&(F=ue);let k=Nt.get(_),N=C.state.lights,ut=C.state.shadowsArray,Et=N.state.version,ot=wt.getParameters(_,N.state,ut,F,X,C.state.lightProbeGridArray),Mt=wt.getProgramCacheKey(ot),Qt=k.programs;k.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?F.environment:null,k.fog=F.fog;let le=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;k.envMap=U.get(_.envMap||k.environment,le),k.envMapRotation=k.environment!==null&&_.envMap===null?F.environmentRotation:_.envMapRotation,Qt===void 0&&(_.addEventListener("dispose",je),Qt=new Map,k.programs=Qt,k.programVariants=new Map);let ie=Qt.get(Mt);if(ie!==void 0){if(k.currentProgram===ie&&k.lightsStateVersion===Et)return R(_,ot),ie}else ot.uniforms=wt.getUniforms(_),dt!==null&&_.isNodeMaterial&&dt.build(_,X,ot),_.onBeforeCompile(ot,D),ie=wt.acquireProgram(ot,Mt),Qt.set(Mt,ie),k.uniforms=ot.uniforms;let Ct=k.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ct.clippingPlanes=Ht.uniform),R(_,ot),k.needsLights=vt(_),k.lightsStateVersion=Et,k.needsLights&&(Ct.ambientLightColor.value=N.state.ambient,Ct.sunLights.value=N.state.sun,Ct.sunLightShadows.value=N.state.sunShadow,Ct.directionalLights.value=N.state.directional,Ct.directionalLightShadows.value=N.state.directionalShadow,Ct.spotLights.value=N.state.spot,Ct.spotLightShadows.value=N.state.spotShadow,Ct.rectAreaLights.value=N.state.rectArea,Ct.ltc_1.value=N.state.rectAreaLTC1,Ct.ltc_2.value=N.state.rectAreaLTC2,Ct.pointLights.value=N.state.point,Ct.pointLightShadows.value=N.state.pointShadow,Ct.hemisphereLights.value=N.state.hemi,Ct.sunShadowMatrix.value=N.state.sunShadowMatrix,Ct.sunShadowCascade.value=N.state.sunShadowCascade,Ct.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ct.spotLightMatrix.value=N.state.spotLightMatrix,Ct.spotLightMap.value=N.state.spotLightMap,Ct.pointShadowMatrix.value=N.state.pointShadowMatrix),k.numLightProbeGrids=bt(C.state.lightProbeGridArray),k.currentProgram=ie,k.uniformsList=null,ie}function O(_,F,X,k,N){let ut=Nt.get(_),Et=ut.currentProgram.id+","+k+","+N,ot=ut.programVariants.get(Et);return ot===void 0?(ot=E(_,F,X),ut.programVariants.set(Et,ot)):(ut.currentProgram=ot,ut.uniformsList=null,ut.outputColorSpace=k,ut.toneMapping=N),ot}function I(_){if(_.uniformsList===null){let F=_.currentProgram.getUniforms();_.uniformsList=xr.seqWithValue(F.seq,_.uniforms)}return _.uniformsList}function R(_,F){let X=Nt.get(_);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function J(_,F,X,k,N){F.isScene!==!0&&(F=ue),$t.resetTextureUnits();let ut=F.fog,Et=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?F.environment:null,ot=Pt===null?D.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:cn.workingColorSpace,Mt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Qt=U.get(k.envMap||Et,Mt),le=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ie=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ct=!!X.morphAttributes.position,Kt=!!X.morphAttributes.normal,xe=!!X.morphAttributes.color,Te=ki;k.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(Te=D.toneMapping);let be=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,We=be!==void 0?be.length:0,fe=Nt.get(k),an=C.state.lights;if(pt===!0&&(Ut===!0||_!==Dt)){let mn=_===Dt&&k.id===_t;Ht.setState(k,_,mn)}let Ve=!1,pe=!1;k.version===fe.__version?fe.needsLights&&fe.lightsStateVersion!==an.state.version||N.isBatchedMesh&&fe.batching===!1||!N.isBatchedMesh&&fe.batching===!0||N.isBatchedMesh&&fe.batchingColor===!0&&N._colorsTexture===null||N.isBatchedMesh&&fe.batchingColor===!1&&N._colorsTexture!==null||N.isInstancedMesh&&fe.instancing===!1||!N.isInstancedMesh&&fe.instancing===!0||N.isSkinnedMesh&&fe.skinning===!1||!N.isSkinnedMesh&&fe.skinning===!0||N.isInstancedMesh&&fe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&fe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&fe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&fe.instancingMorph===!1&&N.morphTexture!==null||fe.envMap!==Qt||k.fog===!0&&fe.fog!==ut||fe.numClippingPlanes!==void 0&&(fe.numClippingPlanes!==Ht.numPlanes||fe.numIntersection!==Ht.numIntersection)||fe.vertexAlphas!==le||fe.vertexTangents!==ie||fe.morphTargets!==Ct||fe.morphNormals!==Kt||fe.morphColors!==xe||fe.morphTargetsCount!==We||fe.numLightProbeGrids!==bt(C.state.lightProbeGridArray)?Ve=!0:(fe.outputColorSpace!==ot||fe.toneMapping!==Te)&&(pe=!0):(Ve=!0,fe.__version=k.version);let Ce=fe.currentProgram;(Ve===!0||pe===!0)&&(Ce=pe===!0?O(k,F,N,ot,Te):E(k,F,N),dt&&k.isNodeMaterial&&dt.onUpdateProgram(k,Ce,fe));let Qe=!1,Mn=!1,pn=!1,Ne=Ce.getUniforms(),_n=fe.uniforms;if(st.useProgram(Ce.program)&&(Qe=!0,Mn=!0,pn=!0),k.id!==_t&&(_t=k.id,Mn=!0),Qe||Dt!==_){st.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),Ne.setValue(H,"projectionMatrix",_.projectionMatrix),Ne.setValue(H,"viewMatrix",_.matrixWorldInverse);let En=Ne.map.cameraPosition;En!==void 0&&En.setValue(H,ce.setFromMatrixPosition(_.matrixWorld)),Z.logarithmicDepthBuffer&&Ne.setValue(H,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ne.setValue(H,"isOrthographic",_.isOrthographicCamera===!0),Dt!==_&&(Dt=_,Mn=!0,pn=!0)}if(fe.needsLights&&(an.state.sunShadowMap.length>0&&Ne.setValue(H,"sunShadowMap",an.state.sunShadowMap,$t),an.state.directionalShadowMap.length>0&&Ne.setValue(H,"directionalShadowMap",an.state.directionalShadowMap,$t),an.state.spotShadowMap.length>0&&Ne.setValue(H,"spotShadowMap",an.state.spotShadowMap,$t),an.state.pointShadowMap.length>0&&Ne.setValue(H,"pointShadowMap",an.state.pointShadowMap,$t)),N.isSkinnedMesh){Ne.setOptional(H,N,"bindMatrix"),Ne.setOptional(H,N,"bindMatrixInverse");let mn=N.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ne.setValue(H,"boneTexture",mn.boneTexture,$t))}N.isBatchedMesh&&(Ne.setOptional(H,N,"batchingTexture"),Ne.setValue(H,"batchingTexture",N._matricesTexture,$t),Ne.setOptional(H,N,"batchingIdTexture"),Ne.setValue(H,"batchingIdTexture",N._indirectTexture,$t),Ne.setOptional(H,N,"batchingColorTexture"),N._colorsTexture!==null&&Ne.setValue(H,"batchingColorTexture",N._colorsTexture,$t));let Zn=X.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&q.update(N,X,Ce),(Mn||fe.receiveShadow!==N.receiveShadow)&&(fe.receiveShadow=N.receiveShadow,Ne.setValue(H,"receiveShadow",N.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&F.environment!==null&&(_n.envMapIntensity.value=F.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=E_()),Mn){if(Ne.setValue(H,"toneMappingExposure",D.toneMappingExposure),fe.needsLights&&it(_n,pn),ut&&k.fog===!0&&Gt.refreshFogUniforms(_n,ut),Gt.refreshMaterialUniforms(_n,k,u,kt,C.state.transmissionRenderTarget[_.id]),fe.needsLights&&fe.numLightProbeGrids>0){let mn=b,En=0;for(let oi of C.state.lightProbeGridArray)oi.texture!==null&&(mn.textures[En]=oi.texture,mn.min[En]=oi.boundingBox.min,mn.max[En]=oi.boundingBox.max,mn.resolution[En]=oi.resolution,mn.intensity[En]=oi.intensity,En++);for(let oi in mn)mn[oi].length=En;_n.probesSH.value=mn.textures,_n.probesMin.value=mn.min,_n.probesMax.value=mn.max,_n.probesResolution.value=mn.resolution,_n.probesIntensity.value=mn.intensity}xr.upload(H,I(fe),_n,$t)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(xr.upload(H,I(fe),_n,$t),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ne.setValue(H,"center",N.center),Ne.setValue(H,"modelViewMatrix",N.modelViewMatrix),Ne.setValue(H,"normalMatrix",N.normalMatrix),Ne.setValue(H,"modelMatrix",N.matrixWorld),k.uniformsGroups!==void 0){let mn=k.uniformsGroups;for(let En=0,oi=mn.length;En<oi;En++){let Sr=mn[En];Me.update(Sr,Ce),Me.bind(Sr,Ce)}}return Ce}function it(_,F){_.ambientLightColor.needsUpdate=F,_.sunLights.needsUpdate=F,_.sunLightShadows.needsUpdate=F,_.directionalLights.needsUpdate=F,_.directionalLightShadows.needsUpdate=F,_.pointLights.needsUpdate=F,_.pointLightShadows.needsUpdate=F,_.spotLights.needsUpdate=F,_.spotLightShadows.needsUpdate=F,_.rectAreaLights.needsUpdate=F,_.hemisphereLights.needsUpdate=F}function vt(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return ft},this.getActiveMipmapLevel=function(){return at},this.getRenderTarget=function(){return Pt},this.setRenderTargetTextures=function(_,F,X){let k=Nt.get(_);k.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Nt.get(_.texture).__webglTexture=F,Nt.get(_.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,F){let X=Nt.get(_);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(_,F=0,X=0){Pt=_,ft=F,at=X;let k=null,N=!1,ut=!1;if(_){let ot=Nt.get(_);if(ot.__useDefaultFramebuffer!==void 0){st.bindFramebuffer(H.FRAMEBUFFER,ot.__webglFramebuffer),ee.copy(_.viewport),se.copy(_.scissor),_e=_.scissorTest,st.viewport(ee),st.scissor(se),st.setScissorTest(_e),_t=-1;return}else if(ot.__webglFramebuffer===void 0)$t.setupRenderTarget(_);else if(ot.__hasExternalTextures)$t.rebindTextures(_,Nt.get(_.texture).__webglTexture,Nt.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let le=_.depthTexture;if(ot.__boundDepthTexture!==le){if(le!==null&&Nt.has(le)&&(_.width!==le.image.width||_.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$t.setupDepthRenderbuffer(_)}}let Mt=_.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(ut=!0);let Qt=Nt.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Qt[F])?k=Qt[F][X]:k=Qt[F],N=!0):_.samples>0&&$t.useMultisampledRTT(_)===!1?k=Nt.get(_).__webglMultisampledFramebuffer:Array.isArray(Qt)?k=Qt[X]:k=Qt,ee.copy(_.viewport),se.copy(_.scissor),_e=_.scissorTest}else ee.copy(z).multiplyScalar(u).floor(),se.copy(lt).multiplyScalar(u).floor(),_e=St;if(X!==0&&(k=$),st.bindFramebuffer(H.FRAMEBUFFER,k)&&st.drawBuffers(_,k),st.viewport(ee),st.scissor(se),st.setScissorTest(_e),N){let ot=Nt.get(_.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+F,ot.__webglTexture,X)}else if(ut){let ot=F;for(let Mt=0;Mt<_.textures.length;Mt++){let Qt=Nt.get(_.textures[Mt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Mt,Qt.__webglTexture,X,ot)}}else if(_!==null&&X!==0){let ot=Nt.get(_.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ot.__webglTexture,X)}_t=-1};function Lt(_){let F=Nt.get(_);return(F.__readFormat!==_.format||F.__readType!==_.type)&&(F.__readFormat=_.format,F.__readType=_.type,F.__formatReadable=Z.textureFormatReadable(_.format),F.__typeReadable=Z.textureTypeReadable(_.type)),F}this.readRenderTargetPixels=function(_,F,X,k,N,ut,Et,ot=0){if(!(_&&_.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Nt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Et!==void 0&&(Mt=Mt[Et]),Array.isArray(Mt)&&(Mt=Mt[0]),Mt){let Qt=st.getBoundFramebuffer(H.READ_FRAMEBUFFER);st.bindFramebuffer(H.READ_FRAMEBUFFER,Mt);try{let le=_.textures[ot],ie=le.format,Ct=le.type;_.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ot);let Kt=Lt(le);if(Kt.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Kt.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=_.width-k&&X>=0&&X<=_.height-N&&H.readPixels(F,X,k,N,he.convert(ie),he.convert(Ct),ut)}finally{st.bindFramebuffer(H.READ_FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(_,F,X,k,N,ut,Et,ot=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Nt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&Et!==void 0&&(Mt=Mt[Et]),Array.isArray(Mt)&&(Mt=Mt[0]),Mt)if(F>=0&&F<=_.width-k&&X>=0&&X<=_.height-N){let Qt=st.getBoundFramebuffer(H.READ_FRAMEBUFFER);st.bindFramebuffer(H.READ_FRAMEBUFFER,Mt);let le=_.textures[ot],ie=le.format,Ct=le.type;_.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ot);let Kt=Lt(le);if(Kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,xe),H.bufferData(H.PIXEL_PACK_BUFFER,ut.byteLength,H.STREAM_READ),H.readPixels(F,X,k,N,he.convert(ie),he.convert(Ct),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),st.bindFramebuffer(H.READ_FRAMEBUFFER,Qt);let Te=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await fd(H,Te,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,xe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ut),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(xe),H.deleteSync(Te),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,F=null,X=0){let k=Math.pow(2,-X),N=Math.floor(_.image.width*k),ut=Math.floor(_.image.height*k),Et=F!==null?F.x:0,ot=F!==null?F.y:0;$t.setTexture2D(_,0),st.activeTexture(H.TEXTURE0),H.copyTexSubImage2D(H.TEXTURE_2D,X,0,0,Et,ot,N,ut),st.unbindTexture()},this.copyTextureToTexture=function(_,F,X=null,k=null,N=0,ut=0){let Et,ot,Mt,Qt,le,ie,Ct,Kt,xe,Te=_.isCompressedTexture?_.mipmaps[ut]:_.image;if(X!==null)Et=X.max.x-X.min.x,ot=X.max.y-X.min.y,Mt=X.isBox3?X.max.z-X.min.z:1,Qt=X.min.x,le=X.min.y,ie=X.isBox3?X.min.z:0;else{let Ne=Math.pow(2,-N);Et=Math.floor(_.width*Ne),ot=Math.floor(_.height*Ne),_.isDataArrayTexture?Mt=Te.depth:_.isData3DTexture?Mt=Math.floor(Te.depth*Ne):Mt=1,Qt=0,le=0,ie=0}k!==null?(Ct=k.x,Kt=k.y,xe=k.z):(Ct=0,Kt=0,xe=0);let be=he.convert(F.format),We=he.convert(F.type),fe;F.isData3DTexture?($t.setTexture3D(F,0),fe=H.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?($t.setTexture2DArray(F,0),fe=H.TEXTURE_2D_ARRAY):($t.setTexture2D(F,0),fe=H.TEXTURE_2D),st.activeTexture(H.TEXTURE0),st.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,F.flipY),st.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),st.pixelStorei(H.UNPACK_ALIGNMENT,F.unpackAlignment);let an=st.getParameter(H.UNPACK_ROW_LENGTH),Ve=st.getParameter(H.UNPACK_IMAGE_HEIGHT),pe=st.getParameter(H.UNPACK_SKIP_PIXELS),Ce=st.getParameter(H.UNPACK_SKIP_ROWS),Qe=st.getParameter(H.UNPACK_SKIP_IMAGES);st.pixelStorei(H.UNPACK_ROW_LENGTH,Te.width),st.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Te.height),st.pixelStorei(H.UNPACK_SKIP_PIXELS,Qt),st.pixelStorei(H.UNPACK_SKIP_ROWS,le),st.pixelStorei(H.UNPACK_SKIP_IMAGES,ie);let Mn=_.isDataArrayTexture||_.isData3DTexture,pn=F.isDataArrayTexture||F.isData3DTexture;if(_.isDepthTexture){let Ne=Nt.get(_),_n=Nt.get(F),Zn=Nt.get(Ne.__renderTarget),mn=Nt.get(_n.__renderTarget);st.bindFramebuffer(H.READ_FRAMEBUFFER,Zn.__webglFramebuffer),st.bindFramebuffer(H.DRAW_FRAMEBUFFER,mn.__webglFramebuffer);for(let En=0;En<Mt;En++)Mn&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Nt.get(_).__webglTexture,N,ie+En),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Nt.get(F).__webglTexture,ut,xe+En)),H.blitFramebuffer(Qt,le,Qt+Et,le+ot,Ct,Kt,Ct+Et,Kt+ot,H.DEPTH_BUFFER_BIT,H.NEAREST);st.bindFramebuffer(H.READ_FRAMEBUFFER,null),st.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(N!==0||_.isRenderTargetTexture||Nt.has(_)){let Ne=Nt.get(_),_n=Nt.get(F);st.bindFramebuffer(H.READ_FRAMEBUFFER,yt),st.bindFramebuffer(H.DRAW_FRAMEBUFFER,K);for(let Zn=0;Zn<Mt;Zn++)Mn?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ne.__webglTexture,N,ie+Zn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ne.__webglTexture,N),pn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,_n.__webglTexture,ut,xe+Zn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,_n.__webglTexture,ut),N!==0?H.blitFramebuffer(Qt,le,Qt+Et,le+ot,Ct,Kt,Ct+Et,Kt+ot,H.COLOR_BUFFER_BIT,H.NEAREST):pn?H.copyTexSubImage3D(fe,ut,Ct,Kt,xe+Zn,Qt,le,Et,ot):H.copyTexSubImage2D(fe,ut,Ct,Kt,Qt,le,Et,ot);st.bindFramebuffer(H.READ_FRAMEBUFFER,null),st.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else pn?_.isDataTexture||_.isData3DTexture?H.texSubImage3D(fe,ut,Ct,Kt,xe,Et,ot,Mt,be,We,Te.data):F.isCompressedArrayTexture?H.compressedTexSubImage3D(fe,ut,Ct,Kt,xe,Te.width,Te.height,Mt,be,Te.data):H.texSubImage3D(fe,ut,Ct,Kt,xe,Et,ot,Mt,be,We,Te):_.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,ut,Ct,Kt,Et,ot,be,We,Te.data):_.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,ut,Ct,Kt,Te.width,Te.height,be,Te.data):H.texSubImage2D(H.TEXTURE_2D,ut,Ct,Kt,Et,ot,be,We,Te);st.pixelStorei(H.UNPACK_ROW_LENGTH,an),st.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ve),st.pixelStorei(H.UNPACK_SKIP_PIXELS,pe),st.pixelStorei(H.UNPACK_SKIP_ROWS,Ce),st.pixelStorei(H.UNPACK_SKIP_IMAGES,Qe),ut===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&H.generateMipmap(fe),st.unbindTexture()},this.initRenderTarget=function(_){Nt.get(_).__webglFramebuffer===void 0&&$t.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?$t.setTextureCube(_,0):_.isData3DTexture?$t.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?$t.setTexture2DArray(_,0):$t.setTexture2D(_,0),st.unbindTexture()},this.resetState=function(){ft=0,at=0,Pt=null,st.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=cn._getDrawingBufferColorSpace(t),e.unpackColorSpace=cn._getUnpackColorSpace()}};var Le=Math.PI*2,Ie=(i,t,e)=>i<t?t:i>e?e:i,Re=(i,t,e)=>i+(t-i)*e,ve=(i,t,e)=>{let n=Ie((e-i)/(t-i),0,1);return n*n*(3-2*n)},sn=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-e*n));function gn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var ln=(i,t)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)};function An(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=ln(e,n),c=ln(e+1,n),h=ln(e,n+1),d=ln(e+1,n+1);return l+(c-l)*o+(h-l)*a+(l-c-h+d)*o*a}function fn(i,t){let e=0,n=.5,s=1;for(let r=0;r<4;r++)e+=n*An(i*s,t*s),s*=2.03,n*=.5;return e/.9375}var $l=new hn,Kl=new xi,of=new _i,T_=new Y,af=new Y,bn=new Pe;function Yt(i,t){i.index&&(i=i.toNonIndexed()),i.attributes.uv&&i.deleteAttribute("uv"),i.attributes.uv1&&i.deleteAttribute("uv1");let e=i.attributes.position,n=e.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)typeof t=="function"?t(bn,e.getX(r),e.getY(r),e.getZ(r),r):bn.set(t),s[r*3]=bn.r,s[r*3+1]=bn.g,s[r*3+2]=bn.b;return i.setAttribute("color",new tn(s,3)),i}function Jt(i,t=0,e=0,n=0,s=0,r=0,o=0,a=1,l=a,c=a){return of.set(s,r,o),Kl.setFromEuler(of),$l.compose(T_.set(t,e,n),Kl,af.set(a,l,c)),i.applyMatrix4($l),i}function Dh(i,t,e){let n=new Y().subVectors(e,t),s=n.length();return Kl.setFromUnitVectors(new Y(0,1,0),n.normalize()),$l.compose(new Y().addVectors(t,e).multiplyScalar(.5),Kl,af.set(1,1,1)),i.applyMatrix4($l),s}function xn(i){let t=0;for(let a of i)t+=a.attributes.position.count;let e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*3),r=0;for(let a of i)a.attributes.normal||a.computeVertexNormals(),e.set(a.attributes.position.array,r*3),n.set(a.attributes.normal.array,r*3),s.set(a.attributes.color.array,r*3),r+=a.attributes.position.count,a.dispose();let o=new en;return o.setAttribute("position",new tn(e,3)),o.setAttribute("normal",new tn(n,3)),o.setAttribute("color",new tn(s,3)),o.computeBoundingSphere(),o}var ke=(i,t,e,n)=>i.copy(pi.set(t)).lerp(Lo.set(e),Ie(n,0,1)),pi=new Pe,Lo=new Pe;function wi(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new jr(s);return r.colorSpace=$n,r.anisotropy=4,n&&(r.wrapS=r.wrapT=cs,r.repeat.set(n[0],n[1])),r}var Fn=(i,t)=>{let e=(t-i)%Le;return e>Math.PI&&(e-=Le),e<-Math.PI&&(e+=Le),e},Ln=(i,t,e,n)=>i+Fn(i,t)*(1-Math.exp(-e*n)),Xe=(i,t={})=>new Xn({color:i,shininess:30,specular:"#2A2A2A",...t}),yr=i=>i.traverse(t=>{t.isMesh&&(t.castShadow=!0)});function lf(i="#2F78DA",t="#86C4F7",e="#F8E6C8",n=new Y(.62,.3,-.73)){let s=new Vt(new Ke(600,32,16),new Mi({side:Bn,depthWrite:!1,fog:!1,uniforms:{top:{value:new Pe(i)},mid:{value:new Pe(t)},hor:{value:new Pe(e)},sunDir:{value:n.clone().normalize()}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top, mid, hor, sunDir; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float y = d.y;
        vec3 c = mix(hor, mid, smoothstep(-0.03, 0.2, y)); c = mix(c, top, smoothstep(0.2, 0.8, y));
        float s = max(dot(d, sunDir), 0.0);
        c += vec3(1.0, 0.86, 0.6) * (pow(s, 10.0) * 0.35 + pow(s, 90.0) * 0.6);
        c = mix(c, vec3(1.0, 0.97, 0.86), smoothstep(0.9982, 0.9992, s));
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));return s.renderOrder=-10,s.frustumCulled=!1,s}function cf(i){let t=new Yl({canvas:i,antialias:!0,powerPreference:"high-performance"});return t.toneMapping=vo,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=Ps,t}function hf(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}var uf=()=>wi(64,64,i=>{let t=i.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,64,64)});function df(){let i=wi(256,256,(t,e,n)=>{let s=t.createImageData(e,n),r=(o,a)=>An(o/18,a/9)*.6+An(o/7,a/4)*.4;for(let o=0;o<n;o++)for(let a=0;a<e;a++){let l=r(a+1,o)-r(a-1,o),c=r(a,o+1)-r(a,o-1),h=(o*e+a)*4,d=-l*3,f=-c*3,p=Math.hypot(d,f,1);s.data[h]=(d/p*.5+.5)*255,s.data[h+1]=(f/p*.5+.5)*255,s.data[h+2]=(1/p*.5+.5)*255,s.data[h+3]=255}t.putImageData(s,0,0)},[1,1]);return i.colorSpace="",i}function ff(i,t){!t||!t.see||(i.uniforms.uSee=t.see,i.vertexShader=`varying float vSeeZ;
`+i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
  vSeeZ = -mvPosition.z;`),i.fragmentShader=`uniform vec4 uSee; varying float vSeeZ;
`+i.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
    if (uSee.w > 0.0) {
      float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
      float sd = distance(gl_FragCoord.xy, uSee.xy) / uSee.w;
      if (vSeeZ < uSee.z - 0.7 && sd < 1.0 && ign >= smoothstep(0.5, 1.0, sd)) discard;
      if (vSeeZ < 1.2 && ign >= smoothstep(0.45, 1.2, vSeeZ)) discard;
    }`))}function jl(i,t){let e=i.clone();return e.onBeforeCompile=n=>ff(n,t),e.customProgramCacheKey=()=>"see"+(i.flatShading?"f":"")+i.side+(i.vertexColors?"v":""),e}function Yn(i,t,e,n){let s=i.clone();return s.onBeforeCompile=r=>{ff(r,n),r.uniforms.uTime=n.time,r.uniforms.uWind=n.wind||{value:0},r.vertexShader=`uniform float uTime; uniform float uWind;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float hh = max(0.0, transformed.y - ${e.toFixed(2)});
      float ph = 0.0;
      #ifdef USE_INSTANCING
        ph = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.23;
      #endif
      float wk = 1.0 + uWind * 6.0;
      transformed.x += ((sin(uTime * (1.25 + uWind * 3.0) + ph) + 0.35 * sin(uTime * 2.7 + ph * 1.7)) * ${t.toFixed(4)} * wk + uWind * ${(t*8).toFixed(4)}) * hh * hh;
      transformed.z += cos(uTime * (1.05 + uWind * 2.5) + ph) * ${(t*.5).toFixed(4)} * wk * hh * hh;`)},s.customProgramCacheKey=()=>"sway"+t+"_"+e+(i.flatShading?"f":"")+i.side+(n&&n.see?"see":""),s}function vr(i,t,e){let n=[],s=4.6+i()*1.6,r=new di([new Y(0,-.2,0),new Y(t*.2,s*.35,.05),new Y(t*.6,s*.7,.1),new Y(t,s,.12)]),o=13;for(let c=0;c<o;c++){let h=r.getPoint(c/o),d=r.getPoint((c+1)/o),f=Re(.25,.14,c/o),p=Yt(new we(f*1.13,f*.9,1,9,1,!0),(w,g,x)=>ke(w,c%2?"#7E5E3C":"#8D6C46","#A9875C",x+.5)),m=h.distanceTo(d);Jt(p,0,0,0,0,0,0,1,m*1.04,1),Dh(p,h,d),n.push(p)}let a=r.getPoint(1),l=new Y(0,1,0);n.push(Jt(Yt(new Tn(.28,1),"#6B5A2E"),a.x,a.y,a.z));for(let c=0;c<e;c++){let h=c/e*Le+i()*.35,d=new Y(Math.cos(h),0,Math.sin(h)),f=2.6+i()*.9,p=.7+i()*.6,m=new di([a.clone(),a.clone().addScaledVector(d,f*.3).addScaledVector(l,.55),a.clone().addScaledVector(d,f*.65).addScaledVector(l,.35-p*.2),a.clone().addScaledVector(d,f).addScaledVector(l,-p)]),w=14,g=[],x=[],v=[];for(let L=0;L<=w;L++){let C=L/w,y=m.getPoint(C),T=m.getTangent(C),V=new Y().crossVectors(T,l).normalize(),D=Math.pow(Math.sin(Math.PI*Math.min(1,C*1.15)),.7)*.5*(L%2?1:.72);v.push([y,y.clone().addScaledVector(V,D).addScaledVector(l,-D*.42),y.clone().addScaledVector(V,-D).addScaledVector(l,-D*.42),C])}let A=(L,C,y)=>{g.push(L.x,L.y,L.z),ke(bn,"#2E7A30","#6CC24A",C*.9+y*.25),x.push(bn.r,bn.g,bn.b)};for(let L=0;L<w;L++){let[C,y,T,V]=v[L],[D,nt,dt,$]=v[L+1];A(C,V,0),A(y,V,1),A(D,$,0),A(y,V,1),A(nt,$,1),A(D,$,0),A(C,V,0),A(D,$,0),A(T,V,1),A(T,V,1),A(D,$,0),A(dt,$,1)}let b=new en;b.setAttribute("position",new tn(new Float32Array(g),3)),b.setAttribute("color",new tn(new Float32Array(x),3)),b.computeVertexNormals(),n.push(b)}for(let c=0;c<2;c++){let h=i()*Le;for(let d=0;d<7;d++)n.push(Jt(Yt(new Tn(.085,0),d%2?"#B85C1C":"#D07A26"),a.x+Math.cos(h)*.32+(i()-.5)*.16,a.y-.32-i()*.3,a.z+Math.sin(h)*.32+(i()-.5)*.16))}return xn(n)}function Ql(i,t,e){let n=[Yt(Jt(new we(.12,.2,1.7,7),0,.85,0),"#7A5230")];n.push(Yt(Jt(new we(.05,.08,.8,5),.25,1.55,0,0,0,-.7),"#7A5230"));for(let s=0;s<7;s++){let r=.62+i()*.45,o=(i()-.5)*1.3,a=2.15+i()*.9,l=(i()-.5)*1.1,c=i();n.push(Jt(Yt(new Tn(r,1),(h,d,f,p)=>ke(h,e[0],e[1],.25+f/r*.45+c*.3+(ln(d*9,p*9)-.5)*.2)),o,a,l))}if(t)for(let s=0;s<9;s++){let r=i()*Le,o=i()*1.3;n.push(Jt(Yt(new Tn(.08,1),t),Math.cos(r)*.95,2.1+Math.sin(o)*.9,Math.sin(r)*.85+.2))}return xn(n)}var Do=()=>xn([0,1,2,3].map(i=>Jt(Yt(new Tn(.42-i*.05,1),(t,e,n)=>ke(t,"#2F8A3C","#86D05C",.4+n*.9+i*.1)),(i-1.5)*.32,.3,i%2*.2))),No=()=>Yt(new si(.4,0),(i,t,e,n)=>ke(i,"#8C877B","#C9C4B6",.4+e*1.2+ln(t*7,n*7)*.3)),tc=()=>xn([...Array(6)].map((i,t)=>{let e=t*1.1,n=.8+t%3*.22,s=Yt(new Nn(.025,n,3),(r,o,a)=>ke(r,"#3C7F35","#8CC05A",a/n+.5));return Jt(s,Math.cos(e)*.12,n/2,Math.sin(e)*.12,Math.sin(e)*.15,0,Math.cos(e)*.15),t%2?xn([s,Jt(Yt(new we(.035,.035,.16,6),"#6B4423"),Math.cos(e)*.12+Math.cos(e)*.15*n,n-.05,Math.sin(e)*.12)]):s})),zo=()=>(()=>{let i=[],t=[];for(let n=0;n<5;n++){let s=n/5*Le+.3,r=.22+n%3*.07,o=.035,a=Math.cos(s)*.05,l=Math.sin(s)*.05,c=a+Math.cos(s)*.1,h=l+Math.sin(s)*.1,d=-Math.sin(s)*o,f=Math.cos(s)*o;i.push(a-d,0,l-f,a+d,0,l+f,c,r,h);for(let p of[0,0,1])ke(bn,"#5AA544","#B0E47A",p),t.push(bn.r,bn.g,bn.b)}let e=new en;return e.setAttribute("position",new tn(new Float32Array(i),3)),e.setAttribute("color",new tn(new Float32Array(t),3)),e.computeVertexNormals(),e})();function pf(i,t){let e=new Be,n=new Be;e.add(n),n.position.y=.55;let s=i.body==="fire",r=i.body==="rainbow",o;r?o=Xe("#FFFFFF",{vertexColors:!0,shininess:50}):s?o=Xe("#FF8A1F",{emissive:"#FF3D00",emissiveIntensity:.55,shininess:20}):o=Xe(i.body,{shininess:38});let a=new Ke(.5,48,32);r&&(a=Yt(a,(K,ft,at,Pt)=>K.setHSL(((Math.atan2(Pt,ft)/Le+1)%1+at*.3)%1,.75,.62)));let l=new Vt(a,o);l.scale.set(1.05,1,.95);let c=new Vt(new Ke(.5,32,20),new wn({color:i.dark,side:Bn}));c.scale.set(1.05*1.035,1.035,.95*1.035);let h=new Vt(new Ke(.3,32,16),Xe(s||r?i.belly:new Pe(i.body).lerp(new Pe(i.belly),.5),{shininess:20}));h.position.set(0,-.25,.345),h.scale.set(.78,.5,.32),n.add(l,c,h);let d=[];for(let K of[-1,1]){let ft=new Vt(new Ke(.15,20,12),Xe(i.dark,{shininess:20}));ft.scale.set(1.2,.55,1.45),ft.position.set(K*.22,-.49,.07),n.add(ft),d.push(ft)}let f=[],p=[],m=Xe("#FFFFFF",{shininess:90,specular:"#FFFFFF"}),w=Xe("#1B1F3B",{shininess:120,specular:"#FFFFFF"}),g=new wn({color:i.dark});for(let K of[-1,1]){let ft=new Be;ft.position.set(K*.185,.15,.36);let at=new Vt(new Ke(.162,24,16),g);at.scale.set(1,1.15,.6),at.position.z=-.012;let Pt=new Vt(new Ke(.15,24,16),m);Pt.scale.set(1,1.15,.72);let _t=new Be;_t.position.z=.074;let Dt=new Vt(new Ke(.07,16,12),w);Dt.scale.z=.6;let ee=new Vt(new Ke(.024,8,6),new wn({color:"#FFFFFF"}));ee.position.set(.028,.035,.04),_t.add(Dt,ee),ft.add(at,Pt,_t),n.add(ft),f.push(ft),p.push(_t)}let x=new Vt(new Qi(.075,.017,6,16,Math.PI*.8),new wn({color:"#1B1F3B"}));x.rotation.z=Math.PI+Math.PI*.1,x.position.set(0,0,.462),x.rotation.x=-.2;let v=new Vt(new Ke(.05,12,10),new wn({color:"#7A1F2B"}));v.scale.set(1,1.25,.4),v.position.set(0,-.04,.47),v.visible=!1,n.add(x,v);let A=new Be;n.add(A);let b=[];if(i.acc==="blush"||i.id==="orange")for(let K of[-1,1]){let ft=new Vt(new Wn(.07,16),new wn({color:"#FF7896",transparent:!0,opacity:.5}));ft.position.set(K*.33,-.06,.36),ft.rotation.y=K*.75,ft.scale.y=.62,A.add(ft)}if(i.acc==="leaf"){let K=new Vt(new we(.018,.022,.14,6),Xe("#6B3E1F"));K.position.set(0,.54,0),K.rotation.z=-.15;let ft=new Vt(new Ke(.15,16,8),Xe("#3FB950"));ft.scale.set(1,.18,.5),ft.position.set(.13,.6,0),ft.rotation.z=.45,A.add(K,ft)}else if(i.acc==="antenna")for(let K of[-1,1]){let ft=new Vt(new we(.014,.014,.32,6),Xe(i.dark));ft.position.set(K*.18,.58,0),ft.rotation.z=-K*.35;let at=new Vt(new Ke(.06,12,10),Xe("#FF5DA2",{emissive:"#FF5DA2",emissiveIntensity:.3}));at.position.set(K*.235,.73,0),A.add(ft,at)}else if(i.acc==="crown"){let K=Xe("#FFC400",{shininess:110,specular:"#FFF2B0",emissive:"#5A3D00",emissiveIntensity:.3}),ft=new Vt(new we(.25,.23,.12,28,1,!0),K);ft.material.side=$e,ft.position.y=.48,A.add(ft);for(let at=0;at<6;at++){let Pt=at/6*Le,_t=new Vt(new Nn(.05,.16,6),K);_t.position.set(Math.sin(Pt)*.24,.6,Math.cos(Pt)*.24),A.add(_t);let Dt=new Vt(new Ke(.028,8,6),Xe(at%2?"#2EA8FF":"#E63946",{shininess:140,specular:"#FFFFFF"}));Dt.position.set(Math.sin(Pt)*.255,.48,Math.cos(Pt)*.255),A.add(Dt)}}else if(i.acc==="star"){let K=new vi;for(let at=0;at<10;at++){let Pt=at/10*Le-Math.PI/2,_t=at%2?.06:.14;at?K.lineTo(Math.cos(Pt)*_t,-Math.sin(Pt)*_t):K.moveTo(Math.cos(Pt)*_t,-Math.sin(Pt)*_t)}let ft=new Vt(new ho(K,{depth:.04,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:1}),Xe("#FFE066",{emissive:"#FFB703",emissiveIntensity:.5,shininess:90}));ft.position.set(0,.74,-.02),A.add(ft),A.userData.star=ft}else if(i.acc==="band"){let K=Xe("#E63946"),ft=new Vt(new Qi(.43,.05,8,40),K);ft.rotation.x=Math.PI/2-.08,ft.position.y=.2,ft.scale.set(1.05,.95,1),A.add(ft);for(let at of[-1,1]){let Pt=new Vt(new ze(.06,.03,.3),K);Pt.position.set(at*.06,.18,-.55),Pt.rotation.set(.5,at*.3,0),A.add(Pt),A.userData["tail"+at]=Pt}}else if(i.acc==="hat"){let K=Xe("#946232",{shininess:14}),ft=Xe("#4A2E14",{shininess:12}),at=new Vt(new we(.46,.48,.035,36),K);at.position.y=.4;let Pt=new Vt(new Ke(.29,28,14,0,Le,0,Math.PI/2),K);Pt.position.y=.41,Pt.scale.y=.75;let _t=new Vt(new we(.292,.295,.06,28,1,!0),ft);_t.material.side=$e,_t.position.y=.45;let Dt=new Be;Dt.add(at,Pt,_t),Dt.rotation.set(-.12,0,.06),A.add(Dt);let ee=Xe("#E63946",{shininess:15,side:$e}),se=new Vt(new Qi(.34,.04,8,36),ee);se.rotation.x=Math.PI/2,se.position.y=-.4,se.scale.set(1.05,.95,1),A.add(se);let _e=new vi;_e.moveTo(-.2,0),_e.lineTo(.2,0),_e.lineTo(.02,-.17),_e.closePath();let P=new Vt(new ji(_e),ee);P.position.set(0,-.38,.33),P.rotation.x=-.55,A.add(P)}if(s){for(let ft=0;ft<7;ft++){let at=ft/7*Math.PI-Math.PI/2,Pt=new Vt(new Nn(.09,.4,8,1,!0),new wn({color:ft%2?"#FFB13B":"#FF5A1F",transparent:!0,opacity:.9,depthWrite:!1,blending:ei}));Pt.position.set(Math.sin(at)*.28,.42+Math.cos(at)*.05,-.12-Math.abs(Math.cos(at))*.08),Pt.userData.ph=ft,n.add(Pt),b.push(Pt)}let K=new ii(new Qn({map:t,color:"#FF6A1F",transparent:!0,opacity:.55,depthWrite:!1,blending:ei}));K.scale.setScalar(2.2),n.add(K)}yr(e),c.castShadow=!1;let L=new Be,C=["#E63946","#FFFFFF","#FFB703","#FFFFFF","#2EA8FF","#FFFFFF"],y=Yt(new Ke(1.7,24,8,0,Le,0,Math.PI*.42),(K,ft,at,Pt)=>K.set(C[Math.floor((Math.atan2(Pt,ft)/Le+1)%1*12+1e-4)%6])),T=new He({vertexColors:!0,side:$e,transparent:!0,opacity:1}),V=new Vt(y,T);V.scale.set(1,.62,1),V.castShadow=!0;let D=new Float32Array(60),nt=new Es(new en,new us({color:"#4A4A5A",transparent:!0,opacity:.85}));nt.geometry.setAttribute("position",new tn(D,3)),nt.frustumCulled=!1;let dt=new Be;dt.position.y=1.6,dt.add(V),L.add(dt,nt),L.visible=!1;let $=new Vt(y,T.clone());$.visible=!1,$.castShadow=!1;let yt=new Vt(new en,Xe("#8B5A2B",{shininess:5}));return yt.visible=!1,yt.castShadow=!0,{id:i.id,root:e,inner:n,eyes:f,pupils:p,smile:x,ooh:v,feet:d,acc:A,flames:b,bodyMat:o,fire:s,chute:L,canopy:V,canopyHolder:dt,lines:nt,drop:$,rope:yt,turn:0,blink:0,nextBlink:2}}function _s(i={}){let t={skin:"#C98E62",thobe:"#F2EEE4",bisht:"#5B3A24",shmagh:"#C8102E",agal:"#141414",beard:"#4A4440",beads:!0,gold:!0,...i},e=new Be,n=Xe(t.skin,{shininess:12}),s=Xe(t.thobe,{shininess:8}),r=Xe(t.bisht||t.thobe,{shininess:14,side:$e}),o=new Vt(new ti([new At(.001,0),new At(.27,0),new At(.275,.1),new At(.25,.5),new At(.232,.9),new At(.222,1.2),new At(.2,1.34),new At(.12,1.42),new At(.05,1.45)],30),s);e.add(o);for(let C of[-1,1]){let y=new Vt(new ze(.1,.04,.2),Xe("#4A2E18"));y.position.set(C*.09,.02,.2),e.add(y)}let a=new Vt(new ti([new At(.245,.06),new At(.295,.08),new At(.285,.5),new At(.265,.9),new At(.255,1.2),new At(.24,1.33),new At(.16,1.41)],30,.62,Le-1.24),r);e.add(a),a.visible=!!t.bisht;let l=Xe("#D4AF37",{shininess:90,specular:"#FFF2B0"});for(let C of[-1,1]){let y=C*.62,T=[[.247,.08],[.297,.1],[.287,.5],[.267,.9],[.257,1.2],[.242,1.33],[.162,1.41]].map(([V,D])=>new Y(Math.sin(y)*(V+.006),D,Math.cos(y)*(V+.006)));t.bisht&&t.gold&&e.add(new Vt(new ts(new di(T),20,.014,6),l))}let c=[];for(let C of[-1,1]){let y=new Be;y.position.set(C*.25,1.3,0),e.add(y);let T=new Vt(new Bi(.072,.28,4,10),r);T.position.y=-.18,y.add(T);let V=new Be;V.position.y=-.36,y.add(V);let D=new Vt(new Bi(.068,.22,4,10),r);D.position.y=-.14,V.add(D);let nt=new Vt(new we(.055,.06,.05,10),s);nt.position.y=-.3,V.add(nt);let dt=new Vt(new Ke(.052,12,10),n);if(dt.position.y=-.36,dt.scale.set(.9,1.1,.8),V.add(dt),C<0&&t.beads){let $=new Vt(new Qi(.06,.011,6,18),Xe("#E0A03C",{shininess:80,specular:"#FFF0C8"}));$.position.set(0,-.44,.02),$.rotation.y=.4,V.add($)}y.rotation.z=C*.12,V.rotation.x=-.25,c.push({sh:y,el:V,s:C})}let h=new Vt(new we(.06,.07,.1,10),n);h.position.y=1.46,e.add(h);let d=new Be;d.position.y=1.6,e.add(d);let f=new Vt(new Ke(.155,28,20),n);f.scale.set(.94,1.08,1),d.add(f);let p=new Vt(new Ke(.034,10,8),Xe("#B97C52"));p.position.set(0,-.005,.15),p.scale.set(.85,1.1,1.25),d.add(p);for(let C of[-1,1]){let y=new Vt(new Ke(.019,10,8),Xe("#1B140F",{shininess:120,specular:"#FFFFFF"}));y.position.set(C*.055,.025,.135),d.add(y);let T=new Vt(new ze(.065,.016,.02),Xe("#3A3430"));T.position.set(C*.056,.058,.138),T.rotation.z=-C*.12,d.add(T);let V=new Vt(new Bi(.019,.06,3,6),Xe("#2A2420"));V.position.set(C*.034,-.045,.142),V.rotation.z=C*1.15,d.add(V)}let m=new Vt(new Ke(.16,24,10,Math.PI/2-1.2,2.4,Math.PI*.6,Math.PI*.3),Xe(t.beard==="none"?"#000":t.beard,{side:$e,shininess:5}));d.add(m),m.visible=t.beard!=="none";let w=new Vt(new Ke(.026,10,8),new wn({color:"#4A1A14"}));w.position.set(0,-.07,.143),w.scale.set(1,.3,.5),d.add(w);let g=wi(128,128,(C,y,T)=>{C.fillStyle="#FBF8F2",C.fillRect(0,0,y,T),C.fillStyle=t.shmagh;for(let V=0;V<T;V+=16)for(let D=0;D<y;D+=16)C.fillRect(D+2,V+2,7,7),C.fillRect(D+9,V+9,5,5),C.fillRect(D+9,V+2,2,2),C.fillRect(D+2,V+11,2,2)},[5,5]),x=new He({map:g,side:$e}),v=new Vt(new Ke(.168,28,14,0,Le,0,Math.PI*.52),x);v.rotation.x=-.42,v.position.y=.01,d.add(v);let A=new Vt(new ti([new At(.168,.02),new At(.18,-.06),new At(.2,-.16),new At(.24,-.26),new At(.28,-.33)],28,1.15,Le-2.3),x);d.add(A);let b=new Vt(new In(.2,.36),x);b.position.set(.17,-.25,.1),b.rotation.set(-.15,.6,-.08),d.add(b);let L=Xe(t.agal,{shininess:40});for(let[C,y]of[[.07,.154],[.097,.139]]){let T=new Vt(new Qi(y,.015,8,36),L);T.position.set(0,C*.913,-C*.408),T.rotation.x=Math.PI/2-.42,d.add(T)}return yr(e),{root:e,head:d,arms:c,mouth:w,yaw:0}}var Uh={id:"natta-island",name:"\u062C\u0632\u064A\u0631\u0629 \u0646\u0637\u0651\u0629",half:4330,seed:7531,sea:-300,features:[{type:"mountain",id:"M1",x:0,z:0},{type:"valley",id:"V1",x:-200,z:1350}],spawn:"fajr"},zs=(i,t)=>Math.exp(-(i*i)/(t*t)),nc=(i,t,e)=>{let n=Math.max(e-Math.abs(i-t),0)/e;return Math.max(i,t)+n*n*e*.25},mf=(i,t,e)=>-nc(-i,-t,e);function Nh(i){let t=new Map,e=(n,s)=>n*100003+s;return{add(n,s){let r=Math.floor((Math.min(n.ax,n.bx)-s)/i),o=Math.floor((Math.max(n.ax,n.bx)+s)/i),a=Math.floor((Math.min(n.az,n.bz)-s)/i),l=Math.floor((Math.max(n.az,n.bz)+s)/i);for(let c=r;c<=o;c++)for(let h=a;h<=l;h++){let d=e(c,h),f=t.get(d);f||(f=[],t.set(d,f)),f.push(n)}},at(n,s){return t.get(e(Math.floor(n/i),Math.floor(s/i)))}}}function zh(i,t,e,n){let s=Ie(((t-i.ax)*i.dx+(e-i.az)*i.dz)*i.il2,0,1),r=i.ax+i.dx*s,o=i.az+i.dz*s;return n.d=Math.hypot(t-r,e-o),n.t=s,n}var ec=(i,t,e)=>{let n=t.x-i.x,s=t.z-i.z;return{ax:i.x,az:i.z,bx:t.x,bz:t.z,dx:n,dz:s,il2:1/Math.max(1e-6,n*n+s*s),a:i,b:t,...e}};function gf(i,t){let e=[];for(let s=0;s<i.length-1;s++){let r=i[Math.max(0,s-1)],o=i[s],a=i[s+1],l=i[Math.min(i.length-1,s+2)],c=Math.hypot(a[0]-o[0],a[1]-o[1]),h=Math.max(1,Math.round(c/t));for(let d=0;d<h;d++){let f=d/h,p=f*f,m=p*f,w=(g,x,v,A)=>.5*(2*x+(-g+v)*f+(2*g-5*x+4*v-A)*p+(-g+3*x-3*v+A)*m);e.push({x:w(r[0],o[0],a[0],l[0]),z:w(r[1],o[1],a[1],l[1])})}}let n=i[i.length-1];return e.push({x:n[0],z:n[1]}),e}function xf(i,t,e){let n=i.sea??-300,s=i.half||4330,r=t.x,o=t.z,a=gn(i.seed||7),l=286,c=0;function h(G){let rt=3420+300*Math.sin(3*G+.7)+220*Math.sin(5*G+2.1)+140*Math.sin(9*G+4)+70*Math.sin(15*G+1.3);return rt-=1650*zs(Fn(G,c),.27),rt+=260*zs(Fn(G,-.52),.1)+220*zs(Fn(G,.55),.09),rt-=380*zs(Fn(G,-1.95),.22),rt+=250*zs(Fn(G,Math.PI),.15),Math.min(rt,s-300)}function d(G,rt){let Ft=(fn(G*.0011+3.1,rt*.0011-1.7)-.5)*520,It=(fn(G*.0011-4.3,rt*.0011+2.2)-.5)*520,qt=G+Ft-r,Tt=rt+It-o;return h(Math.atan2(Tt,qt))-Math.hypot(qt,Tt)+(fn(G*.006,rt*.006)-.5)*60}let f=[{a:1.32,w:.26},{a:-.84,w:.13},{a:-2.55,w:.2},{a:2.3,w:.1}];function p(G,rt,Ft){let It=0;for(let qt of f)It=Math.max(It,zs(Fn(G,qt.a),qt.w));return ve(.35,.75,It*(.75+.5*An(rt*.004,Ft*.004)))}let m=[{a:.95,w:.45,r:760,h:16},{a:-2.2,w:.5,r:900,h:18},{a:2.4,w:.35,r:640,h:14},{a:-.45,w:.3,r:1200,h:12},{a:1.9,w:.4,r:1300,h:15},{a:-1.45,w:.35,r:560,h:13}];function w(G,rt){let Ft=G-r,It=rt-o,qt=Math.hypot(Ft,It);if(qt<300)return l;let Tt=Math.atan2(It,Ft),Ue=2150+380*Math.sin(3*Tt+.4)+260*Math.sin(5*Tt+2.2)+160*Math.sin(8*Tt+1.1);Ue-=700*zs(Fn(Tt,c),.33),Ue*=1+(fn(G*.0016+9,rt*.0016)-.5)*.35;let Ye=Ie((qt-300)/(Ue-300),0,1),W=l*(1-Ye*Ye*(3-2*Ye));W*=1+.1*Math.sin(11*Tt+qt*.0035)*ve(320,700,qt)*(1-Ye);for(let ct of m){let gt=ve(ct.w,ct.w*.55,Math.abs(Fn(Tt,ct.a)));gt>0&&(W-=ct.h*gt*ve(ct.r-6,ct.r+6,qt)*(1-Ye*.6))}return W+=((fn(G*.004+2,rt*.004-6)-.5)*46+(fn(G*.02,rt*.02)-.5)*5)*ve(300,650,qt),W}let g=[{id:"falcons",x:1900,z:1900,h:230,r:820},{id:"kohl",x:1550,z:-1950,h:185,r:600,dark:!0},{id:"fort",x:-2500,z:-2e3,h:58,r:300}];function x(G,rt,Ft){let It=Math.hypot(rt-G.x,Ft-G.z);if(It>G.r*1.3)return-1e9;let qt=It*(1+.28*(fn(rt*.003+G.x*.01,Ft*.003)-.5)),Tt=Ie(1-qt/G.r,0,1);return G.h*Math.pow(Tt,1.6)*(.85+.3*fn(rt*.01,Ft*.01))*(1+.12*Math.sin(7*Math.atan2(Ft-G.z,rt-G.x)+qt*.012)*Tt*ve(0,90,It))}let v={x:-2e3,z:1400,r:950,amp:78},A={x:-1e3,z:2500,r:520,top:112,ramps:[-2.2,2.6]};function b(G,rt){let Ft=A,It=Math.hypot(G-Ft.x,rt-Ft.z);if(It>Ft.r+420)return-1e9;let qt=Math.atan2(rt-Ft.z,G-Ft.x),Tt=Ft.r*(1+.18*(An(qt*2.2+11,3.3)-.5)),Ue=0;for(let W of Ft.ramps)Ue=Math.max(Ue,ve(.28,.12,Math.abs(Fn(qt,W))));let Ye=ve(Tt+Re(10,300,Ue),Tt-26,It);return(Ft.top+(fn(G*.004+2,rt*.004)-.5)*22+(fn(G*.02,rt*.02)-.5)*3)*Ye}let L=null;function C(G,rt){let Ft=d(G,rt),It=Math.atan2(rt-o,G-r),qt=p(It,G,rt),Tt;Ft<0?Tt=Math.max(-38,Ft*Re(.035,.3,qt)-.4):Tt=1.4+Math.min(Ft,1500)*.011+(fn(G*.0035+1,rt*.0035+8)-.5)*26*ve(40,500,Ft)+(fn(G*.03,rt*.03)-.5)*1.4+qt*26*ve(-4,28,Ft);let Ue=ve(-25,160,Ft);if(Ue>0){let Ye=w(G,rt);for(let et of g){let xt=x(et,G,rt);xt>0&&(Ye=Re(Ye,nc(Ye,xt,18),ve(0,15,xt)))}let W=Math.hypot(G-v.x,rt-v.z);W<v.r&&(Tt+=v.amp*ve(v.r,v.r*.45,W)*Math.pow(fn(G*.0055+3,rt*.0055-2),1.5)*Ue);let ct=Ye*Ue;Tt=Re(Math.max(Tt,ct),nc(Tt,ct,14),ve(0,12,ct));let gt=b(G,rt)*Ue;gt>0&&(Tt=Re(Math.max(Tt,gt),nc(Tt,gt,10),ve(0,10,gt)))}if(L){let Ye=Math.hypot(G-L.x,rt-L.z);Ye<L.r*1.6&&(Tt=Math.max(Tt,13*Math.pow(Ie(1-Ye/L.r,0,1),1.2)*(.8+.4*fn(G*.02,rt*.02))-1.2));let W=zh(L.bar,G,rt,y);W.d<40&&(Tt=Math.max(Tt,-.5+(fn(G*.02,rt*.02)-.5)*.5-ve(18,40,W.d)*3))}return Tt}let y={d:0,t:0};function T(G,rt=600){let Ft=Math.cos(G),It=Math.sin(G),qt=rt;for(;qt<s&&d(r+Ft*qt,o+It*qt)>0;)qt+=12;return{r:qt,x:r+Ft*qt,z:o+It*qt,c:Ft,s:It}}let V=(G,rt,Ft=0)=>({x:G.x-G.c*rt-G.s*Ft,z:G.z-G.s*rt+G.c*Ft});{let rt=T(2.29),Ft=r+Math.cos(2.29)*(rt.r+330),It=o+Math.sin(2.29)*(rt.r+330);L={x:Ft,z:It,r:170,bar:ec({x:rt.x-Math.cos(2.29)*30,z:rt.z-Math.sin(2.29)*30},{x:Ft,z:It})}}let D=T(c),nt=V(D,230),dt=T(-.52),$=V(dt,45),yt=T(-1.94),K={...V(yt,380),r:640},ft=T(Math.PI),at=V(ft,70),Pt=T(1.32),_t=V(T(1.08),60),Dt={x:e.x+60,z:e.z,r:210},ee={x:1150,z:-820,r:230},se={x:560,z:-1580,r:70},_e={x:900,z:-2350,r:250},P={x:-2500,z:-2e3},ht={x:nt.x-300,z:640,r:340},Rt={x:-1500,z:-1650,r:520},kt=[],u=(G,rt)=>C(G,rt);kt.push({x:nt.x,z:nt.z,r:52,fall:40,a:Math.max(7,u(nt.x,nt.z))}),kt.push({x:Dt.x,z:Dt.z,r:Dt.r-70,fall:70,a:u(Dt.x,Dt.z)}),kt.push({x:$.x,z:$.z,r:26,fall:25,a:Math.max(4,u($.x,$.z))}),kt.push({x:se.x,z:se.z,r:se.r,fall:40,a:u(se.x,se.z)}),kt.push({x:P.x,z:P.z,r:34,fall:30,a:u(P.x,P.z)});function S(G,rt,Ft){for(let qt of kt){let Tt=Math.hypot(G-qt.x,rt-qt.z);Tt<qt.r+qt.fall&&(Ft=Re(qt.a,Ft,ve(qt.r,qt.r+qt.fall,Tt)))}let It=Math.hypot(G-ee.x,rt-ee.z);if(It<ee.r+60){let qt=Ft/3,Tt=qt-Math.floor(qt),Ue=(Math.floor(qt)+ve(.8,1,Tt))*3;Ft=Re(Ue,Ft,ve(ee.r,ee.r+60,It))}return Ft}let j=[];for(let G=0;G<=24;G++){let rt=G/24*Math.PI*2;j.push([r+Math.cos(rt)*278,o+Math.sin(rt)*278])}let z=G=>[G.x,G.z],lt=[{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0641\u062C\u0631",hw:1.9,way:[z(nt),[nt.x-140,220],[1520,120],[1330,260],[1150,150],[980,270],[820,150],[660,250],[520,120],[400,200],[300,80],[195,42]]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u063A\u064A\u0645",hw:1.5,way:j},{name:"\u062F\u0631\u0628 \u0627\u0644\u0631\u0637\u0628",hw:1.6,way:[z(nt),[nt.x-60,420],[ht.x,ht.z],[1500,1100],[1650,1450]]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0642\u0631\u064A\u0629",hw:1.8,way:[z(nt),[nt.x-120,-200],[1450,-450],[ee.x+60,ee.z+120],[ee.x,ee.z],[ee.x+250,-1050],[$.x-300,$.z+150],z($)]},{name:"\u062F\u0631\u0628 \u0627\u0644\u0628\u062D\u064A\u0631\u0629",hw:1.4,way:[[ee.x,ee.z],[1180,-1350],[_e.x+300,_e.z+120],[_e.x+200,_e.z+300],[se.x+150,se.z-200],z(se)]},{name:"\u062F\u0631\u0628 \u0627\u0644\u062D\u0637\u0651\u0627\u0628\u064A\u0646",hw:1.4,way:[[r-20,o-278],[60,-650],[300,-1100],z(se)]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0647\u0648\u0631",hw:1.6,way:[[r-197,o-197],[-600,-700],[-1e3,-1200],[Rt.x,Rt.z],[K.x-150,K.z+350],z(K)]},{name:"\u062F\u0631\u0628 \u0627\u0644\u062D\u0635\u0646",hw:1.3,way:[[Rt.x,Rt.z],[-2050,-1830],z(P)]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0628\u0644\u0648\u0637",hw:1.6,way:[[r-278,o],[-900,-100],[-1600,-250],[-2300,-200],[at.x+250,at.z-100],z(at)]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0648\u0627\u062F\u064A",hw:1.6,way:[[r,o+278],[-150,700],[-250,1100],[e.x-75,e.z],[-700,1500],[-1300,1700],[-1800,2150],[L.bar.ax+60,L.bar.az-60],[L.bar.ax,L.bar.az]]},{name:"\u062F\u0631\u0628 \u0627\u0644\u0647\u0636\u0628\u0629",hw:1.3,way:[[-1300,1700],[-1e3+Math.cos(-2.2)*900,2500+Math.sin(-2.2)*900],[A.x,A.z]]},{name:"\u062F\u0631\u0628 \u0627\u0644\u0634\u0644\u0627\u0644",hw:1.4,way:[[r+197,o+197],[480,600],[700,1150],[560,1780],[650,2400],[_t.x-120,_t.z-200],z(_t)]}],St=[],B=Nh(48);for(let G of lt){let rt=gf(G.way,5);for(let It of rt)It.a0=S(It.x,It.z,C(It.x,It.z));for(let It=0;It<rt.length;It++){let qt=0,Tt=0;for(let Ue=-6;Ue<=6;Ue++){let Ye=rt[Ie(It+Ue,0,rt.length-1)];qt+=Ye.a0,Tt++}rt[It].a=Math.max(qt/Tt,.6)}let Ft={name:G.name,hw:G.hw,pts:rt};St.push(Ft);for(let It=0;It<rt.length-1;It++)B.add(ec(rt[It],rt[It+1],{road:Ft}),G.hw+8)}let mt={d:0,t:0};function pt(G,rt){let Ft=B.at(G,rt);if(!Ft)return null;let It=null,qt=1e9,Tt=0;for(let Ue of Ft)zh(Ue,G,rt,mt),mt.d<qt&&(qt=mt.d,It=Ue,Tt=mt.t);return It?{d:qt,a:Re(It.a.a,It.b.a,Tt),hw:It.road.hw,road:It.road}:null}function Ut(G,rt,Ft){let It=pt(G,rt);return It&&It.d<It.hw+6&&(Ft=Re(It.a,Ft,ve(It.hw+.3,It.hw+6,It.d))),Ft}let Xt={x:590,z:1950,nx:.17,nz:-.985,len:300,h:16},ce=()=>0,Wt=[{id:"silver",name:"\u0646\u0647\u0631 \u0627\u0644\u0641\u0636\u0629",w0:2.4,w1:8,depth:1.5,way:[[520,720],[640,1050],[660,1400],[600,1750],[592,1950],[620,2300],[760,2700],[900,3100],[Pt.x+Pt.c*150,Pt.z+Pt.s*150]]},{id:"anbar",name:"\u0646\u0647\u0631 \u0627\u0644\u0639\u0646\u0628\u0631",w0:2.2,w1:7,depth:1.4,way:[[-330,-650],[-470,-1e3],[-640,-1450],[-800,-1900],[-960,-2300],[K.x+60,K.z+330],[K.x,K.z]]},{id:"dates",name:"\u0633\u0627\u0642\u064A\u0629 \u0627\u0644\u0631\u0637\u0628",w0:1.2,w1:2.4,depth:.7,way:[[640,320],[900,480],[1250,560],[ht.x+100,ht.z-40],[D.x+60,560]]}],ue=[],Zt=Nh(64),te=[],H=(G,rt)=>Ut(G,rt,S(G,rt,C(G,rt)+ce(G,rt)));for(let G of Wt){let rt=gf(G.way,8),Ft=1e9;for(let qt=0;qt<rt.length;qt++){let Tt=rt[qt],Ue=qt/(rt.length-1),Ye=H(Tt.x,Tt.z);Ft=Math.min(Ft-.03,Ye-Re(.9,.5,Ue)),Tt.lv=Math.max(Ft,G.id==="anbar"?.3:.05),Tt.w=Re(G.w0,G.w1,Math.pow(Ue,.8)),qt&&rt[qt-1].lv-Tt.lv>2.5&&te.push({river:G.id,x:(Tt.x+rt[qt-1].x)/2,z:(Tt.z+rt[qt-1].z)/2,top:rt[qt-1].lv,bot:Tt.lv,w:Tt.w,dx:Tt.x-rt[qt-1].x,dz:Tt.z-rt[qt-1].z})}let It={...G,pts:rt};ue.push(It);for(let qt=0;qt<rt.length-1;qt++)Zt.add(ec(rt[qt],rt[qt+1],{river:It}),rt[qt].w+70)}function Ee(G,rt){let Ft=Zt.at(G,rt);if(!Ft)return null;let It=null,qt=1e9,Tt=0;for(let Ue of Ft)zh(Ue,G,rt,mt),mt.d<qt&&(qt=mt.d,It=Ue,Tt=mt.t);return It?{d:qt,lv:Re(It.a.lv,It.b.lv,Tt),w:Re(It.a.w,It.b.w,Tt),river:It.river,dx:It.dx,dz:It.dz}:null}function tt(G,rt,Ft){let It=Ee(G,rt);if(!It)return Ft;if(It.d<It.w){let qt=pt(G,rt),Tt=qt&&qt.d<qt.hw+3?.35:It.river.depth;Ft=Math.min(Ft,It.lv-.12-Tt*(1-(It.d/It.w)**2))}else Ft=Math.min(Ft,mf(It.lv+.25+(It.d-It.w)*.42,Ft,1.5));return Ft}let Z=te.filter(G=>G.river==="silver").sort((G,rt)=>rt.top-rt.bot-(G.top-G.bot))[0],st=Z?{x:Z.x,z:Z.z}:{x:Xt.x,z:Xt.z},ne=S(_e.x,_e.z,C(_e.x,_e.z))-2.5,Nt=[{id:"moon",name:"\u0628\u062D\u064A\u0631\u0629 \u0627\u0644\u0642\u0645\u0631",x:_e.x,z:_e.z,r:_e.r,lv:ne}],$t=(G,rt,Ft)=>G.r*(1+.2*(An(Math.atan2(Ft-G.z,rt-G.x)*2.4+5,1.1)-.5)),U=.3;function M(G,rt,Ft){for(let qt of Nt){let Tt=Math.hypot(G-qt.x,rt-qt.z);if(Tt>qt.r*1.25+160)continue;let Ue=$t(qt,G,rt);Tt<Ue?Ft=Math.min(Ft,qt.lv-.2-3.6*(1-(Tt/Ue)**2)):Ft=Math.min(Ft,mf(qt.lv+.35+(Tt-Ue)*.18,Ft,1.5))}let It=Math.hypot(G-K.x,rt-K.z);if(It<K.r){let qt=.22+(fn(G*.022+4,rt*.022)-.47)*2.4;Ft=Re(qt,Ft,ve(K.r*.55,K.r,It))}return Ft}let Q=[],Ot=[],wt=Nh(32),Gt=(G,rt=!0)=>{if(Q.push(G),rt&&G.w){let Ft={x:G.x,z:G.z,c:Math.cos(G.rot||0),s:Math.sin(G.rot||0),hw:G.w/2+.6,hd:G.d/2+.6,a:null};Ot.push(Ft),G.pad=Ft,wt.add(ec(Ft,Ft),Math.max(Ft.hw,Ft.hd)+4)}return G},ae=(G,rt)=>M(G,rt,tt(G,rt,Ut(G,rt,S(G,rt,C(G,rt)+ce(G,rt))))),Bt=(G,rt,Ft)=>{let It=pt(G,rt);if(It&&It.d<It.hw+Ft)return!1;let qt=Ee(G,rt);return qt&&qt.d<qt.w+Ft+4?!1:!Q.some(Tt=>Math.hypot(Tt.x-G,Tt.z-rt)<Ft+Math.max(Tt.w||2,Tt.d||2)*.6)};{let G=nt,rt=0,Ft=(It,qt)=>({x:G.x+It,z:G.z+qt});Gt({kind:"square",...Ft(0,0),rot:rt,w:64,d:96,h:0},!1),Gt({kind:"fountain",...Ft(0,0),rot:rt,r:3.4},!1);for(let It=0;It<8;It++){let qt=It/8*Math.PI*2+.2;Gt({kind:"palm",...Ft(Math.cos(qt)*15,Math.sin(qt)*15),s:.95+It%3*.08},!1)}for(let It=0;It<5;It++)Gt({kind:"stall",...Ft(-18+It*9,-38),rot:Math.PI/2,w:3.2,d:2.4,h:2.6,tint:It});Gt({kind:"teahouse",...Ft(-20,30),rot:Math.atan2(-30,20),w:6,d:10,h:3.3}),Gt({kind:"board",...Ft(9,-9),rot:-Math.PI/2,w:2.4,d:.4,h:2.4}),Gt({kind:"signpost",...Ft(-26,8),rot:0},!1),Gt({kind:"gate",...Ft(-31,0),rot:0,w:1.2,d:9,h:5.2},!1);for(let[It,qt]of[[-30,-46],[-30,46],[30,-46],[30,46],[0,-46],[0,46],[-30,22],[-30,-22]])Gt({kind:"lamp",...Ft(It,qt)},!1);Gt({kind:"pier",x:D.x-D.c*18,z:D.z-40,rot:0,w:3,d:46,h:0},!1);for(let It=0;It<3;It++)Gt({kind:"boat",x:D.x+10+It*7,z:D.z-30+It*9,rot:.4+It*.5},!1)}{let G=ee;for(let rt=0,Ft=0;Ft<22&&rt<900;rt++){let It=a()*Math.PI*2,qt=Math.sqrt(a())*(G.r-25),Tt=G.x+Math.cos(It)*qt,Ue=G.z+Math.sin(It)*qt;if(!Bt(Tt,Ue,8))continue;let Ye=(xt,bt)=>ae(Tt+xt,Ue+bt),W=Ye(4,0)-Ye(-4,0),ct=Ye(0,4)-Ye(0,-4),gt=Math.atan2(-ct,-W)+Math.round(a()*2-1)*.05,et=a()<.3;Gt({kind:"house",x:Tt,z:Ue,rot:gt,w:et?7:8+a()*2,d:et?9:9+a()*2.5,h:et?6.4:3.2,floors:et?2:1,tint:a()}),Ft++}Gt({kind:"well",x:G.x+6,z:G.z+4,r:1.1},!1)}{for(let G=0;G<5;G++){let rt=G/5*Math.PI*2+.4,Ft=se.x+Math.cos(rt)*24,It=se.z+Math.sin(rt)*24;Gt({kind:"hut",x:Ft,z:It,rot:rt+Math.PI,w:4,d:5,h:2.4})}Gt({kind:"logs",x:se.x+6,z:se.z-5,rot:.6,w:4.5,d:1.8,h:1.2}),Gt({kind:"campfire",x:se.x,z:se.z},!1)}{let G=K.x+40,rt=K.z+120;kt.push({x:G,z:rt,r:26,fall:14,a:1.1}),Gt({kind:"mudhif",x:G,z:rt,rot:.3,w:6.5,d:20,h:5.8});for(let Ft=0;Ft<4;Ft++){let It=1.2+Ft*1.3,qt=G+Math.cos(It)*22,Tt=rt+Math.sin(It)*22;kt.push({x:qt,z:Tt,r:6,fall:8,a:.9}),Gt({kind:"reedhut",x:qt,z:Tt,rot:It,w:3.2,d:6,h:3})}for(let Ft=0;Ft<3;Ft++)Gt({kind:"canoe",x:G-30+Ft*9,z:rt-20-Ft*6,rot:1+Ft*.7,float:!0},!1)}{Gt({kind:"lighthouse",x:$.x,z:$.z,rot:0,w:6,d:6,h:19}),Gt({kind:"house",x:$.x-16,z:$.z+4,rot:.3,w:6,d:7,h:3,floors:1,tint:.8,white:!0});for(let G=0;G<2;G++)Gt({kind:"boat",x:dt.x+18+G*8,z:dt.z+30+G*12,rot:1.6+G*.4},!1)}{let G=P,rt=17;for(let[It,qt]of[[-1,-1],[1,-1],[1,1],[-1,1]])Gt({kind:"ftower",x:G.x+It*rt,z:G.z+qt*rt,r:3.2,h:6+a()*3},!1);[[[-1,-1],[1,-1]],[[1,-1],[1,1]],[[1,1],[-1,1]],[[-1,1],[-1,-1]]].forEach(([[It,qt],[Tt,Ue]],Ye)=>{let W=G.x+It*rt,ct=G.z+qt*rt,gt=G.x+Tt*rt,et=G.z+Ue*rt;for(let[xt,bt]of Ye===2?[[.1,.38],[.62,.9]]:[[.12,.88]]){let E=Re(W,gt,xt),O=Re(ct,et,xt),I=Re(W,gt,bt),R=Re(ct,et,bt);Gt({kind:"fwall",x:(E+I)/2,z:(O+R)/2,rot:Math.atan2(R-O,I-E),w:Math.hypot(I-E,R-O),d:1.3,h:3+a()*2.2},!1)}})}{Gt({kind:"reedhut",x:at.x+30,z:at.z-20,rot:.5,w:3.2,d:6,h:3});for(let rt=0;rt<3;rt++)Gt({kind:"boat",x:ft.x+8,z:ft.z-25+rt*14,rot:rt*.6},!1);let G={x:_e.x+240,z:_e.z+90};Gt({kind:"pier",x:G.x,z:G.z,rot:Math.atan2(_e.z-G.z,_e.x-G.x)-Math.PI/2,w:2.4,d:22,h:0,lake:!0},!1)}for(let G of Ot)G.a=ae(G.x,G.z);let Ht={d:0,t:0};function de(G,rt,Ft){let It=wt.at(G,rt);if(!It)return Ft;for(let qt of It){let Tt=qt.a,Ue=G-Tt.x,Ye=rt-Tt.z,W=Math.abs(Ue*Tt.c+Ye*Tt.s),ct=Math.abs(-Ue*Tt.s+Ye*Tt.c),gt=Math.max(W-Tt.hw,ct-Tt.hd,0);gt<4&&(Ft=Re(Tt.a,Ft,ve(0,4,gt)))}return Ft}function Se(G,rt){return de(G,rt,M(G,rt,tt(G,rt,Ut(G,rt,S(G,rt,C(G,rt)+ce(G,rt))))))}let q=(G,rt)=>n+Se(G,rt);function zt(G,rt,Ft){for(let qt of Nt){let Tt=Math.hypot(G-qt.x,rt-qt.z);if(Tt<qt.r*1.25&&Ft<n+qt.lv+.2&&Tt<$t(qt,G,rt)+2)return{kind:"lake",level:n+qt.lv}}if(Math.hypot(G-K.x,rt-K.z)<K.r&&Ft<n+U+.15)return{kind:"marsh",level:n+U};let It=Ee(G,rt);return It&&It.d<It.w+.3&&Ft<n+It.lv+.25?{kind:"river",level:n+It.lv,dx:It.dx,dz:It.dz}:Ft<n+.1?{kind:"sea",level:n}:null}let jt=(G,rt,Ft)=>ve(G.r,G.r*.6,Math.hypot(rt-G.x,Ft-G.z)),he={x:400,z:-1150,r:950},ge={x:-1700,z:-250,r:750};function Me(G,rt,Ft,It,qt){let Tt={t:0,pine:0,oak:0,palm:0,olive:0,b:.04,rock:0,reed:0};if(Ft<.35)return Math.hypot(G-K.x,rt-K.z)<K.r&&Ft>-.6&&(Tt.reed=.75),Tt;let Ue=fn(G*.0032+5,rt*.0032-3),Ye=ve(.44,.62,Ue),W=ve(90,200,Ft);Tt.t=Ye*Re(.55,.75,W)+.03,Tt.pine=.25+W*.7,Tt.oak=1-Tt.pine,Ft<25&&(Tt.olive=.3,Tt.palm=ve(25,6,Ft)*.6,Tt.t*=.6);let ct=jt(he,G,rt);ct>0&&(Tt.t=Re(Tt.t,.9,ct),Tt.pine=Re(Tt.pine,.85,ct),Tt.oak=1-Tt.pine,Tt.palm=Tt.olive=0);let gt=jt(ge,G,rt);gt>0&&(Tt.t=Re(Tt.t,.82,gt),Tt.oak=Re(Tt.oak,.95,gt),Tt.pine=1-Tt.oak,Tt.palm*=1-gt,Tt.olive*=1-gt);let et=jt(ht,G,rt);et>0&&(Tt.t=Re(Tt.t,.8,et),Tt.palm=Re(Tt.palm,1,et),Tt.pine*=1-et,Tt.oak*=1-et,Tt.olive*=1-et);let xt=jt(Rt,G,rt);xt>0&&(Tt.t*=1-xt*.97,Tt.b*=1-xt);let bt=jt(ee,G,rt);bt>0&&(Tt.t=Re(Tt.t,.14,bt),Tt.olive=Re(Tt.olive,.6,bt),Tt.palm=Re(Tt.palm,.4,bt),Tt.pine*=1-bt,Tt.oak*=1-bt);let E=ve(v.r,v.r*.5,Math.hypot(G-v.x,rt-v.z));E>0&&(Tt.t*=1-E*.8,Tt.b=Re(Tt.b,.3,E)),Math.hypot(G-A.x,rt-A.z)<A.r&&(Tt.t=.05,Tt.oak=1,Tt.pine=0),It<110&&Ft<5&&(Tt.t=.05,Tt.palm=1,Tt.oak=Tt.pine=Tt.olive=0,Tt.b=.03),Ft>330&&(Tt.t*=.5),qt>.75&&(Tt.t*=.4,Tt.rock=ve(.75,1.1,qt)*.35),Tt.rock+=.006;let I=pt(G,rt);I&&I.d<I.hw+2.2&&(Tt.t=Tt.b=Tt.rock=0);let R=Ee(G,rt);return R&&R.d<R.w+1.5&&(Tt.t=Tt.rock=0,R.d>R.w-.5&&(Tt.reed=.3)),Tt}function Fe(G,rt){if(Math.hypot(G-nt.x,rt-nt.z)<62)return!0;for(let It of me)if(Math.hypot(G-It.fx,rt-It.fz)<7)return!0;if(Math.hypot(G-se.x,rt-se.z)<se.r-8||Math.hypot(G-P.x,rt-P.z)<26||Math.hypot(G-$.x,rt-$.z)<30)return!0;let Ft=wt.at(G,rt);if(Ft)for(let It of Ft){let qt=It.a,Tt=G-qt.x,Ue=rt-qt.z;if(Math.abs(Tt*qt.c+Ue*qt.s)<qt.hw+2.5&&Math.abs(-Tt*qt.s+Ue*qt.c)<qt.hd+2.5)return!0}for(let It of Q)if((It.kind==="fountain"||It.kind==="ftower")&&Math.hypot(G-It.x,rt-It.z)<(It.r||2)+2)return!0;return!1}let re=[{id:"summit",name:"\u0642\u0645\u0629 \u0627\u0644\u0633\u062D\u0627\u0628",icon:"\u{1F3D4}\uFE0F",x:r,z:o,r:22,sub:"\u0623\u0628\u0648 \u062C\u0627\u0633\u0645 \u0648\u0627\u0644\u0686\u0627\u064A\u0686\u064A"},{id:"shoulder",name:"\u0645\u0635\u0637\u0628\u0629 \u0627\u0644\u063A\u064A\u0645",icon:"\u2601\uFE0F",x:r,z:o,r:340,ring:225,sub:"\u0643\u062A\u0641 \u0627\u0644\u062C\u0628\u0644"},{id:"mount",name:"\u062C\u0628\u0644 \u0627\u0644\u0647\u064A\u0628\u0629",icon:"\u26F0\uFE0F",x:r,z:o,r:1700,sub:"\u0642\u0644\u0628 \u0627\u0644\u062C\u0632\u064A\u0631\u0629"},{id:"fajr",name:"\u0633\u0627\u062D\u0629 \u0627\u0644\u0641\u062C\u0631",icon:"\u{1F305}",x:nt.x,z:nt.z,r:110,sub:"\u0633\u0648\u0642 \u0648\u0686\u0627\u064A\u062E\u0627\u0646\u0629 \u064A\u0645 \u0627\u0644\u062E\u0644\u064A\u062C"},{id:"bay",name:"\u062E\u0644\u064A\u062C \u0627\u0644\u0641\u062C\u0631",icon:"\u26F5",x:D.x+200,z:D.z,r:520},{id:"groves",name:"\u0628\u0633\u0627\u062A\u064A\u0646 \u0627\u0644\u0631\u0637\u0628",icon:"\u{1F334}",x:ht.x,z:ht.z,r:ht.r},{id:"village",name:"\u0642\u0631\u064A\u0629 \u0627\u0644\u0637\u064A\u0646",icon:"\u{1F3D8}\uFE0F",x:ee.x,z:ee.z,r:ee.r+30},{id:"light",name:"\u0645\u0646\u0627\u0631\u0629 \u0627\u0644\u0635\u064A\u0627\u062F\u064A\u0646",icon:"\u{1F5FC}",x:$.x,z:$.z,r:200},{id:"kohl",name:"\u062C\u0628\u0644 \u0627\u0644\u0643\u062D\u0644",icon:"\u{1F5FB}",x:1550,z:-1950,r:560},{id:"lake",name:"\u0628\u062D\u064A\u0631\u0629 \u0627\u0644\u0642\u0645\u0631",icon:"\u{1F319}",x:_e.x,z:_e.z,r:_e.r+140},{id:"huts",name:"\u0623\u0643\u0648\u0627\u062E \u0627\u0644\u062D\u0637\u0651\u0627\u0628\u064A\u0646",icon:"\u{1FA93}",x:se.x,z:se.z,r:120},{id:"shadows",name:"\u063A\u0627\u0628\u0629 \u0627\u0644\u0638\u0644\u0627\u0644",icon:"\u{1F332}",x:he.x,z:he.z,r:he.r},{id:"marsh",name:"\u0647\u0648\u0631 \u0627\u0644\u0639\u0646\u0628\u0631",icon:"\u{1F6F6}",x:K.x,z:K.z,r:K.r},{id:"mudhif",name:"\u0645\u0636\u064A\u0641 \u0627\u0644\u0642\u0635\u0628",icon:"\u{1F6D6}",x:K.x+40,z:K.z+120,r:60},{id:"wheat",name:"\u0633\u0647\u0644 \u0627\u0644\u0633\u0646\u0627\u0628\u0644",icon:"\u{1F33E}",x:Rt.x,z:Rt.z,r:Rt.r},{id:"fort",name:"\u0623\u0637\u0644\u0627\u0644 \u0627\u0644\u062D\u0635\u0646",icon:"\u{1F3F0}",x:P.x,z:P.z,r:260},{id:"oaks",name:"\u063A\u0627\u0628\u0629 \u0627\u0644\u0628\u0644\u0648\u0637",icon:"\u{1F333}",x:ge.x,z:ge.z,r:ge.r},{id:"pearl",name:"\u0634\u0627\u0637\u0626 \u0627\u0644\u0644\u0624\u0644\u0624",icon:"\u{1F41A}",x:at.x,z:at.z,r:420},{id:"thyme",name:"\u062A\u0644\u0627\u0644 \u0627\u0644\u0632\u0639\u062A\u0631",icon:"\u{1F33F}",x:v.x,z:v.z,r:v.r},{id:"plateau",name:"\u0647\u0636\u0628\u0629 \u0627\u0644\u062E\u064A\u0651\u0627\u0644\u0629",icon:"\u{1F40E}",x:A.x,z:A.z,r:A.r+40},{id:"birds",name:"\u062C\u0632\u064A\u0631\u0629 \u0627\u0644\u0637\u064A\u0648\u0631",icon:"\u{1F54A}\uFE0F",x:L.x,z:L.z,r:L.r+80},{id:"gulls",name:"\u062C\u0631\u0641 \u0627\u0644\u0646\u0648\u0627\u0631\u0633",icon:"\u{1FAB6}",x:_t.x,z:_t.z,r:380},{id:"falls",name:"\u0634\u0644\u0627\u0644 \u0627\u0644\u0645\u0631\u0627\u064A\u0627",icon:"\u{1F4A6}",x:st.x,z:st.z,r:130},{id:"falcons",name:"\u062C\u0628\u0644 \u0627\u0644\u0635\u0642\u0648\u0631",icon:"\u{1F985}",x:1900,z:1900,r:760},{id:"valley",name:"\u0648\u0627\u062F\u064A \u0627\u0644\u063A\u0632\u0644\u0627\u0646",icon:"\u{1F98C}",x:Dt.x,z:Dt.z,r:Dt.r}];re.sort((G,rt)=>G.r-rt.r);function qe(G,rt){for(let It of re){let qt=Math.hypot(G-It.x,rt-It.z);if(It.ring?qt<It.r&&qt>It.ring:qt<It.r)return It}let Ft=Ee(G,rt);return Ft&&Ft.d<Ft.w+30?{id:Ft.river.id,name:Ft.river.name,icon:"\u{1F4A7}",river:!0}:d(G,rt)<0?{id:"sea",name:"\u0627\u0644\u0628\u062D\u0631",icon:"\u{1F30A}"}:d(G,rt)<160?{id:"coast",name:"\u0627\u0644\u0633\u0627\u062D\u0644",icon:"\u{1F3D6}\uFE0F"}:{id:"wild",name:"\u0627\u0644\u0628\u0631\u0651\u064A\u0629",icon:"\u{1F343}"}}let ye={fajr:[nt.x-22,nt.z-16],village:[ee.x+14,ee.z+10],light:[$.x-24,$.z-12],lake:[_e.x+290,_e.z+60],huts:[se.x-6,se.z+8],mudhif:[K.x+40,K.z+146],wheat:[Rt.x+10,Rt.z+14],fort:[P.x+26,P.z+4],oaks:[-1600,-238],pearl:[at.x+40,at.z+10],thyme:[-1300,1712],plateau:[A.x+10,A.z],birds:[L.x,L.z],gulls:[_t.x-40,_t.z-30],falls:[st.x-30,st.z-20],falcons:[1650,1460],kohl:[1300,-1500],groves:[ht.x,ht.z+14]},me=[];for(let G of re){let rt=ye[G.id];if(!rt)continue;let Ft=Math.atan2(o-rt[1],r-rt[0]);me.push({id:"z_"+G.id,x:rt[0]-Math.cos(Ft)*3.4,z:rt[1]-Math.sin(Ft)*3.4,fx:rt[0],fz:rt[1],name:G.name,icon:G.icon,face:Ft,flag:!1,fire:!0})}me.sort((G,rt)=>(rt.id==="z_fajr")-(G.id==="z_fajr"));{let G=me[0],rt=Math.atan2(o-nt.z,r-nt.x);Object.assign(G,{x:nt.x+12,z:nt.z+2,face:rt})}let je=[...[[300,-1300],[650,-1050],[180,-1720]].map(([G,rt])=>({kind:"wolf",x:G,z:rt})),...[[-1600,-420],[-1900,-120],[-1480,-720],[-1900,1300],[-2250,1620]].map(([G,rt])=>({kind:"boar",x:G,z:rt}))];return{SEA:n,HALF:s,SHOULDER:l,beasts:je,H:q,A:Se,baseA:C,coastS:d,Rc:h,rivers:ue,falls:te,lakes:Nt,marsh:{...K,lv:U},roads:St,sites:Q,zones:re,zoneAt:qe,rest:me,nearRoad:pt,nearRiver:Ee,water:zt,flora:Me,reserved:Fe,peaks:g,plateau:A,islet:L,fajr:nt,shBay:D,valley:Dt,scarp:Xt,fallsAt:st}}var kn=Math.PI/180,ys=(i,t)=>i*100003+t;function ic(i){let t=new Map;return{cell:i,add(e,n=e.x,s=e.z){let r=ys(Math.floor(n/i),Math.floor(s/i)),o=t.get(r);o||(o=[],t.set(r,o)),o.push(e)},remove(e,n=e.x,s=e.z){let r=t.get(ys(Math.floor(n/i),Math.floor(s/i)));if(r){let o=r.indexOf(e);o>=0&&r.splice(o,1)}},addArea(e,n,s,r,o){for(let a=Math.floor(n/i);a<=Math.floor(r/i);a++)for(let l=Math.floor(s/i);l<=Math.floor(o/i);l++){let c=ys(a,l),h=t.get(c);h||(h=[],t.set(c,h)),h.push(e)}},each(e,n,s,r){let o=Math.floor(e/i),a=Math.floor(n/i);for(let l=-s;l<=s;l++)for(let c=-s;c<=s;c++){let h=t.get(ys(o+l,a+c));if(h){for(let d of h)if(r(d)===!0)return!0}}return!1}}}function C_(i,t){let e=i.x||0,n=i.z||0,s=13.3,r=95,o=0,a=(tt,Z)=>[e+Math.cos(Z*kn)*tt,n+Math.sin(Z*kn)*tt],l=(tt,Z)=>Math.hypot(tt-e,Z-n),c=(tt,Z)=>Math.atan2(Z-n,tt-e);function h(tt){if(tt<=s+1)return r;let Z=40+55*Math.pow(1-Ie((tt-s-1)/(72-s-1),0,1),1.12),st=36+4*(1-Ie((tt-72)/48,0,1)),ne=36*Math.pow(1-Ie((tt-120)/60,0,1),1.25)-ve(180,230,tt)*14;return Re(Re(Z,st,ve(68,76,tt)),ne,ve(116,124,tt))}let d=[{a:118.5*kn,r0:108,r1:190,w:7.5,depth:17},{a:101*kn,r0:22,r1:64,w:6,depth:15},{a:58*kn,r0:26,r1:72,w:4.5,depth:1.6,water:!0}],f=(tt,Z)=>{let st=l(tt,Z),ne=h(st)+(fn(tt*.028+5,Z*.028)-.5)*9*ve(s+2,s+12,st)*(1-ve(200,260,st)*.5);return ne+=5*ve(49.5,47.6,st)*ve(28,42,st),ne+=4*ve(27.2,25.3,st)*ve(15.5,21,st),ne},p=(tt,Z)=>{let st=l(tt,Z),ne=f(tt,Z);for(let Nt of d){if(st<=Nt.r0||st>=Nt.r1)continue;let $t=Math.abs(Fn(Nt.a,c(tt,Z)))*st;$t<Nt.w&&(ne-=Nt.depth*ve(Nt.w,Nt.w*.25,$t)*ve(Nt.r0,Nt.r0+4,st)*ve(Nt.r1,Nt.r1-4,st))}return ne},m=[];function w(tt,Z={}){let st=tt.map(([Ot,wt])=>{let[Gt,ae]=a(Ot,wt);return new Y(Gt,0,ae)}),ne=new di(st,!1,"centripetal"),Nt=ne.getLength(),$t=Math.max(2,Math.ceil(Nt/.8)),U=[];for(let Ot=0;Ot<=$t;Ot++){let wt=ne.getUtoTmapping(Ot/$t),Gt=ne.getPoint(wt);U.push([Gt.x,Gt.z,Math.min(st.length-2,Math.floor(wt*(st.length-1)))])}let M={id:m.length,kind:Z.kind||"trail",pts:U.map(([Ot,wt,Gt])=>({x:Ot,z:wt,wi:Gt,y:0,hw:Z.hw||1.35,kind:Z.kinds&&Z.kinds[Gt]||Z.kind||"trail"}))},Q=M.pts.map(Ot=>f(Ot.x,Ot.z));if(M.pts.forEach((Ot,wt)=>{let Gt=0,ae=0;for(let Bt=-22;Bt<=22;Bt++)Gt+=Q[Ie(wt+Bt,0,Q.length-1)],ae++;Ot.y=Gt/ae}),Z.y0!=null||Z.y1!=null){let Ot=M.pts.length-1,wt=Z.y0!=null?Z.y0-M.pts[0].y:0,Gt=Z.y1!=null?Z.y1-M.pts[Ot].y:0;M.pts.forEach((ae,Bt)=>{ae.y+=Re(wt,Gt,Bt/(Ot||1))})}for(let Ot of M.pts)Ot.kind==="ledge"?Ot.hw=.72:Ot.kind==="bridge"?Ot.hw=.62:Ot.kind==="stones"&&(Ot.hw=.6);return m.push(M),M}let g=w([[166,12],[160,40],[153,68],[146,94],[142.5,114.6],[140,122.4],[134,146],[127,172],[121,194],[117,206]],{kinds:{4:"bridge"}}),x=[110,98,86,74],v=[212,224,236,248,260,272,284],A=(tt,Z)=>a(x[tt],v[Z]),b=(tt,Z)=>{let[st,ne]=A(tt,Z),Nt=0;for(let $t=0;$t<9;$t++)Nt+=f(st+Math.cos($t)*4,ne+Math.sin($t)*4);return Nt/9},L=[],C=new Set,y=gn(77),T=(tt,Z)=>tt*10+Z;(function tt(Z,st){C.add(T(Z,st));let ne=[[Z+1,st],[Z-1,st],[Z,st+1],[Z,st-1]].filter(([Nt,$t])=>Nt>=0&&Nt<4&&$t>=0&&$t<7&&!C.has(T(Nt,$t)));for(let Nt=ne.length-1;Nt>0;Nt--){let $t=Math.floor(y()*(Nt+1));[ne[Nt],ne[$t]]=[ne[$t],ne[Nt]]}for(let[Nt,$t]of ne)C.has(T(Nt,$t))||(L.push([[Z,st],[Nt,$t]]),tt(Nt,$t))})(0,0),L.push([[1,2],[1,3]],[[2,4],[3,4]]);let V=new Map;for(let tt of L){let Z=T(...tt[0])*100+T(...tt[1]),st=T(...tt[1])*100+T(...tt[0]);!V.has(Z)&&!V.has(st)&&V.set(Z,tt)}let D=[],nt=new Map;for(let[[tt,Z],[st,ne]]of V.values()){let[Nt,$t]=A(tt,Z),[U,M]=A(st,ne),Q=(Nt+U)/2+(y()-.5)*3,Ot=($t+M)/2+(y()-.5)*3,wt=(ae,Bt)=>[l(ae,Bt),(c(ae,Bt)/kn+360)%360],Gt=w([wt(Nt,$t),wt(Q,Ot),wt(U,M)],{kind:"maze",hw:1.25,y0:b(tt,Z),y1:b(st,ne)});Gt.cells=[[tt,Z],[st,ne]],D.push(Gt);for(let ae of Gt.cells)nt.set(T(...ae),(nt.get(T(...ae))||0)+1)}let dt=w([[117,206],[113,209],[x[0],v[0]]],{kind:"maze",hw:1.3,y0:g.pts[g.pts.length-1].y,y1:b(0,0)}),$=w([[x[3],v[6]],[70,287],[66,292]],{kind:"maze",hw:1.3,y0:b(3,6)}),yt=[[66,292],[62,306],[58,334],[54,308],[50,336],[46,309],[43,330],[41,344],[40,0],[39.3,16],[38.6,30],[37.5,42],[36.6,53],[35.8,63],[34.4,75],[32.4,86],[31.2,92],[29.6,110.5],[27.4,122],[24,138],[20,154],[s+.4,168]],K=w(yt,{y0:$.pts[$.pts.length-1].y,kinds:{7:"ledge",8:"ledge",9:"ledge",12:"stones",16:"bridge"}});{let tt=K.pts,Z=0;for(let st=tt.length-1;st>=0&&(st<tt.length-1&&(Z+=Math.hypot(tt[st+1].x-tt[st].x,tt[st+1].z-tt[st].z)),tt[st].y=Math.max(tt[st].y,r-Z*.42),!(Z>60));st--);tt[tt.length-1].y=r;for(let st=Math.max(1,tt.length-80);st<tt.length;st++)(tt[st].y-tt[st-1].y)/(Math.hypot(tt[st].x-tt[st-1].x,tt[st].z-tt[st-1].z)||1)>.24&&tt[st].kind==="trail"&&(tt[st].kind="stairs",tt[st].hw=1.25)}let ft=[];for(let tt of[g,K]){let Z=0;for(;Z<tt.pts.length;){if(tt.pts[Z].kind!=="bridge"){Z++;continue}let st=Z;for(;st+1<tt.pts.length&&tt.pts[st+1].kind==="bridge";)st++;let ne=tt.pts[Math.max(0,Z-1)],Nt=tt.pts[Math.min(tt.pts.length-1,st+1)],$t=st-Z+1,U=$t>10?[Math.floor($t*.3),Math.floor($t*.7)]:[Math.floor($t/2)];for(let M=Z;M<=st;M++){let Q=(M-Z+1)/($t+1),Ot=tt.pts[M];Ot.y=Re(ne.y,Nt.y,Q)-Math.sin(Q*Math.PI)*.7,Ot.gap=U.includes(M-Z)}ft.push({seg:tt,i:Z,j:st,a:ne,b:Nt}),Z=st+1}}let at=[];for(let tt=0;tt<K.pts.length;tt++){let Z=K.pts[tt];if(Z.kind==="stones"&&(!at.length||Math.hypot(Z.x-at[at.length-1].x,Z.z-at[at.length-1].z)>2.25)){let st=K.pts[Math.min(tt+1,K.pts.length-1)],ne=(t()-.5)*.5,Nt=-(st.z-Z.z),$t=st.x-Z.x,U=Math.hypot(Nt,$t)||1;at.push({x:Z.x+Nt/U*ne,z:Z.z+$t/U*ne,y:Z.y+.05,r:.72})}}let Pt=[];for(let tt of m)tt.pts.forEach((Z,st)=>{Z.seg=tt,Z.k=st,Pt.push(Z)});let _t=ic(4);for(let tt of Pt)_t.add(tt);function Dt(tt,Z,st,ne=1){let Nt=null,$t=1/0;if(_t.each(tt,Z,ne,Ht=>{let de=(Ht.x-tt)**2+(Ht.z-Z)**2+(st!=null?Math.max(0,Math.abs(Ht.y-st)-1.2)**2*9:0);de<$t&&($t=de,Nt=Ht)}),!Nt)return null;let U=Nt.seg.pts,M=U[Math.min(Nt.k+1,U.length-1)],Q=U[Math.max(Nt.k-1,0)],Ot=Math.hypot(tt-Nt.x,Z-Nt.z),wt=Nt.y,Gt=M.x-Q.x,ae=M.z-Q.z,Bt=Math.hypot(Gt,ae)||1;Gt/=Bt,ae/=Bt;for(let[Ht,de]of[[Q,Nt],[Nt,M]]){let Se=de.x-Ht.x,q=de.z-Ht.z,zt=Se*Se+q*q||1,jt=Ie(((tt-Ht.x)*Se+(Z-Ht.z)*q)/zt,0,1),he=Math.hypot(tt-(Ht.x+Se*jt),Z-(Ht.z+q*jt));he<Ot&&(Ot=he,wt=Re(Ht.y,de.y,jt))}return{p:Nt,d:Ot,y:wt,tx:Gt,tz:ae,side:(tt-Nt.x)*-ae+(Z-Nt.z)*Gt}}function ee(tt,Z){let st=l(tt,Z),ne=p(tt,Z);if(st<s+1.5)return Re(ne,r,ve(s+1.5,s+.3,st));if(st>200)return ne;let Nt=ne,$t=Dt(tt,Z,null,2);if($t&&$t.d<$t.p.hw+3.2){let U=$t.p.kind;if(U!=="bridge"){if(U==="stones")Nt=Math.min(Nt,$t.y-.55);else if(Nt=Re(Nt,$t.y-.04,ve($t.p.hw+3.2,$t.p.hw+.5,$t.d)),U==="ledge"){let M=$t.d-$t.p.hw;M>0&&(st>l($t.p.x,$t.p.z)?Nt=Math.min(Nt,$t.y-ve(0,2.2,M)*11):Nt=Math.max(Nt,$t.y+ve(.3,2.4,M)*4.5))}}}return Nt}let se=[],_e=(tt,Z)=>tt.pts.findIndex(st=>st.kind===Z),P=(tt,Z,st)=>{let ne=tt.pts[Ie(Z,0,tt.pts.length-1)],Nt=tt.pts[Ie(Z+6,0,tt.pts.length-1)],$t={id:"cp"+se.length,x:ne.x,z:ne.z,y:ne.y,name:st,face:Math.atan2(Nt.z-ne.z,Nt.x-ne.x),flag:!0};return se.push($t),$t};P(g,3,"\u0633\u0641\u062D \u0627\u0644\u062C\u0628\u0644"),P(g,_e(g,"bridge")-7,"\u0642\u0628\u0644 \u0627\u0644\u062C\u0633\u0631"),P(g,g.pts.length-2,"\u0628\u0627\u0628 \u063A\u0627\u0628\u0629 \u0627\u0644\u0645\u062A\u0627\u0647\u0629"),P(K,4,"\u0637\u0644\u0639\u0629 \u0627\u0644\u0632\u0643\u0632\u0627\u0643"),P(K,_e(K,"ledge")-6,"\u0642\u0628\u0644 \u062D\u0627\u0641\u0629 \u0627\u0644\u062C\u0631\u0641"),P(K,_e(K,"stones")-5,"\u0642\u0628\u0644 \u0627\u0644\u0633\u0627\u0642\u064A\u0629"),P(K,_e(K,"bridge")-6,"\u0642\u0628\u0644 \u0627\u0644\u062C\u0633\u0631 \u0627\u0644\u062B\u0627\u0646\u064A");let ht=K.pts[K.pts.length-1],Rt=c(ht.x,ht.z);se.push({id:"summit",x:e-3,z:n+3,y:r,name:"\u0633\u0627\u062D\u0629 \u0627\u0644\u0642\u0645\u0629",face:0,flag:!1,plaza:!0});let kt=[],u=[];{let tt=new Map;for(let M of D){let[Q,Ot]=M.cells.map(wt=>T(...wt));for(let[wt,Gt]of[[Q,Ot],[Ot,Q]])tt.has(wt)||tt.set(wt,[]),tt.get(wt).push(Gt)}let Z=T(0,0),st=T(3,6),ne=new Map([[Z,-1]]),Nt=[Z],$t=new Map;for(;Nt.length;){let M=Nt.shift();if(M===st)break;for(let Q of tt.get(M)||[])ne.has(Q)||(ne.set(Q,M),Nt.push(Q))}for(let M=st;ne.get(M)!==-1&&ne.has(M);M=ne.get(M))$t.set(ne.get(M),M);let U=0;for(let[M,Q]of $t){if((nt.get(M)||0)<3||U++%3===2)continue;let[Ot,wt]=A(Math.floor(M/10),M%10),[Gt,ae]=A(Math.floor(Q/10),Q%10),Bt=Math.atan2(ae-wt,Gt-Ot),Ht=Ot+Math.cos(Bt+.9)*1.9,de=wt+Math.sin(Bt+.9)*1.9;kt.push({x:Ht,z:de,a:Bt,text:"\u2B05 \u0644\u0644\u0642\u0645\u0629"})}for(let[M,Q]of nt){if(Q!==1||M===Z||M===st)continue;let[Ot,wt]=A(Math.floor(M/10),M%10);u.push({x:Ot,z:wt,a:t()*Le})}}let S=[];for(let tt of[g,K])for(let Z=8;Z<tt.pts.length-4;Z+=17){let st=tt.pts[Z];st.kind==="trail"&&S.push({x:st.x,y:st.y+.9,z:st.z})}for(let tt of u){let Z=Dt(tt.x,tt.z,null,2);if(Z)for(let st=0;st<4;st++){let ne=Z.p.seg.pts[Ie(Z.p.k+(st-1.5)*2|0,0,Z.p.seg.pts.length-1)];S.push({x:ne.x,y:ne.y+.9,z:ne.z})}}let j=(tt,Z)=>{let st=tt.pts[Ie(Z,0,tt.pts.length-1)];return{x:st.x,z:st.z,y:st.y}},z=Math.floor(g.pts.length*.22),lt=_e(K,"ledge"),St=[{kind:"wolf",home:j(g,z)},{kind:"wolf",home:j(g,z+4),ox:1.5},{kind:"wolf",home:j(K,lt-26)},{kind:"wolf",home:j(K,lt-22),ox:1.2},{kind:"boar",home:j(D[Math.floor(D.length*.4)],10)},{kind:"boar",home:j(D[Math.floor(D.length*.75)],10)}],B=(tt,Z)=>[e+Math.cos(tt*kn)*Z,n+Math.sin(tt*kn)*Z],mt=236,[pt,Ut]=B(mt,9.2),Xt=B(221,6.2),ce=B(118,9),Wt=B(300,10.2),ue={x:e,z:n,RP:s,HS:r,DECK_A:o,ENTRY_A:Rt,kioskA:mt,kiosk:[pt,Ut],meet:Xt,bell:ce,flag:Wt,benches:[185,150,30],beds:[80,175,280,350],lamps:[45,145,255,330],pines:[62,100,200,320],guests:[{a:212,r:6.9,look:Xt,kind:"tea"},{a:229,r:6.9,look:Xt,kind:"tea"},{a:219,r:5.2,look:[pt,Ut],kind:"stand"}],scope:[e+s+3.9,n],inter:[{id:"tea",x:pt-Math.cos(mt*kn)*2.1,z:Ut-Math.sin(mt*kn)*2.1,r:2.3,label:"\u2615 \u0627\u0634\u0631\u0628 \u0634\u0627\u064A"},{id:"chat",x:Xt[0],z:Xt[1],r:2.2,label:"\u{1F5E3}\uFE0F \u0633\u0648\u0644\u0641 \u0648\u064A\u0627\u0647\u0645"},{id:"bell",x:e+(ce[0]-e)*.84,z:n+(ce[1]-n)*.84,r:2.2,label:"\u{1F514} \u062F\u0643 \u0627\u0644\u062C\u0631\u0633"},{id:"scope",x:e+s+3.1,z:n,r:1.8,label:"\u{1F52D} \u0628\u0627\u0648\u0639 \u0628\u0627\u0644\u062A\u0644\u0633\u0643\u0648\u0628"},{id:"fountain",x:e,z:n,r:3.4,label:"\u{1FA99} \u0627\u0631\u0645\u0650 \u0639\u0645\u0644\u0629 \u0628\u0627\u0644\u0646\u0627\u0641\u0648\u0631\u0629"}]},Zt=[];Zt.push({x:e,z:n,r:2.6,tall:1});for(let tt of[-1.1,0,1.1])Zt.push({x:pt+Math.cos(mt*kn+Math.PI/2)*tt,z:Ut+Math.sin(mt*kn+Math.PI/2)*tt,r:1.05});{let tt=-Math.sin(118*kn),Z=Math.cos(118*kn);Zt.push({x:ce[0]+tt*.9,z:ce[1]+Z*.9,r:.25},{x:ce[0]-tt*.9,z:ce[1]-Z*.9,r:.25})}Zt.push({x:Wt[0],z:Wt[1],r:.3});for(let tt of ue.beds){let[Z,st]=B(tt,11);Zt.push({x:Z,z:st,r:.75})}for(let tt of ue.benches){let[Z,st]=B(tt,6.6),ne=-Math.sin(tt*kn),Nt=Math.cos(tt*kn);Zt.push({x:Z,z:st,r:.75},{x:Z+ne*.8,z:st+Nt*.8,r:.5},{x:Z-ne*.8,z:st-Nt*.8,r:.5})}for(let tt of ue.guests){let[Z,st]=B(tt.a,tt.r);Zt.push({x:Z,z:st,r:.42})}for(let tt of ue.pines){let[Z,st]=B(tt,11.6);Zt.push({x:Z,z:st,r:.5,tall:1})}for(let tt=0;tt<64;tt++){let Z=tt/64*Le;Math.abs(Fn(Z,Rt))<.2||Math.abs(Fn(Z,o))<.22||Zt.push({x:e+Math.cos(Z)*(s-.1),z:n+Math.sin(Z)*(s-.1),r:.55,wall:1})}let te=[];for(let tt of Pt)if(tt.kind==="ledge"&&tt.k%2===0){let Z=tt.seg.pts[Math.min(tt.k+1,tt.seg.pts.length-1)],st=tt.seg.pts[Math.max(tt.k-1,0)],ne=Z.x-st.x,Nt=Z.z-st.z,$t=Math.hypot(ne,Nt)||1,U=-Nt/$t,M=ne/$t;l(tt.x+U,tt.z+M)>l(tt.x,tt.z)&&(U=-U,M=-M);let Q=.9+ln(tt.k,1)*.8;te.push({p:tt,nx:U,nz:M,sz:Q}),Zt.push({x:tt.x+U*(tt.hw+Q),z:tt.z+M*(tt.hw+Q),r:Q*.8,tall:1})}for(let tt of u)Zt.push({x:tt.x,z:tt.z,r:.9});let H=d[2],Ee=(tt,Z)=>{let st=l(tt,Z),ne=(c(tt,Z)/kn+360)%360;return st>66&&st<122&&ne>203&&ne<293};return{id:i.id||"M1",x:e,z:n,RP:s,HS:r,DECK_A:o,ENTRY_A:Rt,rad:l,ang:c,P2:a,prof:h,gullies:d,stream:H,Hbase:f,Hnat:p,H:ee,segs:m,ALL:Pt,A:g,C2:K,MAZ:D,entrySeg:dt,exitSeg:$,cellP:A,key:T,nearest:Dt,bridges:ft,stones:at,rest:se,signs:kt,logs:u,coins:S,beasts:St,plaza:ue,coll:Zt,ledgeRocks:te,inMaze:Ee,foot:200}}function R_(i){let t=i.x,e=i.z||0,n=i.floor??-35,s=120,r=11,o=m=>2.6*Math.sin(m*.055+.6)+1.5*Math.sin(m*.13+2.1)-.6,a=[[17,1],[45,-1],[76,1],[103,-1]].map(([m,w])=>({x:m,z:Ie(o(m)+w*6.4,-8.2,8.2),side:w,rot:w>0?Math.PI:0,base:0}));function l(m,w){let g=Math.abs(w),x=(fn(m*.09+3.1,w*.09)-.5)*.55,v=w-o(Ie(m,-10,s+10));x-=Math.exp(-(v*v)/1.3)*.75*ve(-12,-2,m);let A=Ie((g-(r-1))/21,0,1);if(x+=21*A*A+ve(30,50,g)*7,x+=(fn(m*.07+(w>0?9:2),g*.09)-.5)*5*ve(r+1,r+9,g),m<2&&(x=Math.max(x,21*Math.pow(Ie((2-m)/62,0,1),.9))),m>s-2){let b=(m-s+2)/30;x+=20*Math.min(1,b)**2+ve(1,2.5,b)*6}return x+=ve(46,70,g)*45+ve(-62,-90,m)*45+ve(s+35,s+70,m)*45,x}for(let m of a)m.base=l(m.x,m.z)+.05;let c=(m,w)=>[m-t,w-e];function h(m,w){let g=m-t,x=w-e;if(g<-95||g>s+75||Math.abs(x)>72)return 1/0;let v=l(g,x);for(let A of a){let b=g-A.x,L=x-A.z;b*b+L*L<49&&(v=Re(v,A.base,ve(7,4.5,Math.hypot(b,L))))}return n+v}let d=m=>n+l(m,o(m))+.42,f=(m,w)=>m>1.5&&m<s-1.5&&Math.abs(w)<r-1.2,p=[{id:"valley",x:t+4,z:e+o(4)+3.2,y:n+l(4,o(4)+3.2),name:"\u0645\u062F\u062E\u0644 \u0627\u0644\u0648\u0627\u062F\u064A",face:0,flag:!1}];for(let m of p)m.y=h(m.x,m.z);return{id:i.id||"V1",x:t,z:e,VF:n,VL:s,FLOOR:r,riverZ:o,CAMPS:a,H0:l,Hv:h,toL:c,waterLevel:d,onFloor:f,rest:p}}var _f=Uh;function yf(i=Uh){let t=gn(i.seed||1),e=i.half||500,n=C_(i.features.find(P=>P.type==="mountain"),t),s=i.features.find(P=>P.type==="valley"),r=xf(i,n,s),o=r.SEA,a=R_({...s,floor:o+r.A(r.valley.x,r.valley.z)-21}),l=(P,ht)=>r.H(P,ht);function c(P,ht){let Rt=n.rad(P,ht),kt=Rt<245?Rt>200?Re(n.H(P,ht),l(P,ht),ve(200,245,Rt)):n.H(P,ht):l(P,ht),u=a.Hv(P,ht);return u<kt&&(kt=u),kt}let h=(P,ht)=>Math.hypot(c(P+.4,ht)-c(P-.4,ht),c(P,ht+.4)-c(P,ht-.4))/.8,d=ic(4),f=[],p=P=>(f.push(P),d.add(P),P);for(let P of n.coll)p(P);let m={pineA:[],pineB:[],oak:[],hedge:[],bush:[],rock:[],palm:[[],[],[]],fruit:[[],[],[]],boulder:[],vbush:[],vrock:[],rim:[]},w=(P,ht,Rt)=>{if(n.rad(P,ht)<n.RP+3)return!1;let kt=n.nearest(P,ht,null,2);if(kt&&kt.d<kt.p.hw+Rt)return!1;for(let u of n.rest)if(Math.hypot(P-u.x,ht-u.z)<4.6)return!1;return!0};for(let P=-125;P<=125;P+=1.25)for(let ht=-125;ht<=125;ht+=1.25){let Rt=n.x+P+(t()-.5)*.4,kt=n.z+ht+(t()-.5)*.4;if(!n.inMaze(Rt,kt)||!w(Rt,kt,.75))continue;let u=c(Rt,kt);if(m.hedge.push({x:Rt,y:u-.1,z:kt,ry:t()*Le,s:.95+t()*.45}),p({x:Rt,z:kt,r:.62,hedge:1}),t()<.16&&w(Rt,kt,2.2)){let S={x:Rt,y:u-.15,z:kt,ry:t()*Le,s:.85+t()*.4};(t()<.5?m.pineA:m.oak).push(S)}}{let P=gn(20261123),ht=(z,lt)=>[a.x+z,a.z+lt],Rt=(z,lt,St)=>a.CAMPS.some(B=>Math.hypot(z-B.x,lt-B.z)<St),kt=(z,lt,St)=>Math.abs(lt-a.riverZ(z))<1.7+St||Rt(z,lt,6.8+St),u=(z=0,lt=a.FLOOR-.6,St=-1,B=a.VL+1)=>({x:St+P()*(B-St),z:(P()<.5?-1:1)*(z+P()*(lt-z))}),S=(z,lt)=>h(a.x+z,a.z+lt),j=[];for(let z of[-1,1])for(let lt=-2;lt<a.VL+2;lt+=5+P()*5){let St=a.riverZ(lt)+z*(2.3+P()*1.8);!Rt(lt,St,7.5)&&Math.abs(St)<a.FLOOR&&j.push({x:lt,z:St})}for(let z=0;z<16;z++){let lt=u(2,a.FLOOR-1);kt(lt.x,lt.z,.6)||j.push(lt)}j.forEach((z,lt)=>{let[St,B]=ht(z.x,z.z);p({x:St,z:B,r:.38,tall:1,tree:1}),m.palm[lt%3].push({x:St,y:c(St,B)-.05,z:B,ry:P()*Le,s:.85+P()*.4})});for(let z=0;z<3;z++)for(let lt=0,St=0;St<9&&lt<400;lt++){let B=u(1.5,a.FLOOR-.5),[mt,pt]=ht(B.x,B.z);kt(B.x,B.z,1.4)||d.each(mt,pt,1,Ut=>Math.hypot(Ut.x-mt,Ut.z-pt)<3)||(p({x:mt,z:pt,r:.35,tall:1,tree:1}),m.fruit[z].push({x:mt,y:c(mt,pt)-.05,z:pt,ry:P()*Le,s:.75+P()*.45}),St++)}for(let z=0;m.vbush.length<130&&z<3e3;z++){let lt=u(0,a.FLOOR+4);if(kt(lt.x,lt.z,.5)||S(lt.x,lt.z)>.7)continue;let[St,B]=ht(lt.x,lt.z);m.vbush.push({x:St,y:c(St,B),z:B,ry:P()*Le,s:.5+P()*.8})}for(let z=0;m.vrock.length<90&&z<2e3;z++){let lt=u(0,a.FLOOR);if(Rt(lt.x,lt.z,6)||Math.abs(lt.z-a.riverZ(lt.x))<1.1)continue;let St=.35+P()*.8,[B,mt]=ht(lt.x,lt.z);St>.8&&p({x:B,z:mt,r:.3*St}),m.vrock.push({x:B,y:c(B,mt)+.04,z:mt,rx:P()*3,ry:P()*3,rz:P()*3,s3:[St,St*(.6+P()*.4),St*(.8+P()*.4)]})}for(let z=0;z<230;z++){let lt=-14+P()*(a.VL+30),St=a.FLOOR+1+P()*26,B=(P()<.5?-1:1)*St,mt=.8+P()*3.2,[pt,Ut]=ht(lt,B);m.boulder.push({x:pt,y:c(pt,Ut)-mt*.42,z:Ut,rx:P()*3,ry:P()*3,rz:P()*3,s3:[mt,mt*(.5+P()*.4),mt*(.8+P()*.5)]})}for(let z=0;z<26;z++){let lt=u(a.FLOOR-3,a.FLOOR+1);if(Rt(lt.x,lt.z,7))continue;let St=1.3+P()*1.6,[B,mt]=ht(lt.x,lt.z);p({x:B,z:mt,r:.45*St}),m.boulder.push({x:B,y:c(B,mt)-.15,z:mt,rx:P()*3,ry:P()*3,rz:P()*3,s3:[St,St*.7,St]})}for(let z=0;z<140;z++){let lt=-40+P()*(a.VL+80),St=26+P()*40,B=(P()<.5?-1:1)*St;if(An(lt*.06,B*.06)<.4)continue;let[mt,pt]=ht(lt,B);m.rim.push({x:mt,y:c(mt,pt)-.2,z:pt,ry:P()*Le,s:1+P()*1.3})}}let g=new Map,x=(P,ht)=>{let Rt=ys(Math.floor(P.x/6),Math.floor(P.z/6));g.set(Rt,(g.get(Rt)||0)+ht)};for(let P of f)P.tree&&x(P,1);let v=[],A=ic(16),b=P=>{P.box=!0,P.c=Math.cos(P.rot||0),P.s=Math.sin(P.rot||0);let ht=Math.hypot(P.hw,P.hd);return f.push(P),d.addArea(P,P.x-ht,P.z-ht,P.x+ht,P.z+ht),P};for(let P of r.sites){P.y=r.H(P.x,P.z);let ht=P.kind,Rt=P.rot||0;if(["house","hut","reedhut","mudhif","teahouse","stall","board","logs","fwall"].includes(ht))b({x:P.x,z:P.z,hw:P.w/2,hd:P.d/2,rot:Rt,tall:1,h:P.h,site:P});else if(ht==="lighthouse")p({x:P.x,z:P.z,r:3.1,tall:1});else if(ht==="fountain")p({x:P.x,z:P.z,r:P.r});else if(ht==="well"||ht==="ftower")p({x:P.x,z:P.z,r:P.r,tall:ht==="ftower"?1:0});else if(ht==="lamp"||ht==="signpost")p({x:P.x,z:P.z,r:.14});else if(ht==="palm")p({x:P.x,z:P.z,r:.3,tall:1,tree:1});else if(ht==="gate")for(let kt of[-1,1])p({x:P.x-Math.sin(Rt)*kt*4.6,z:P.z+Math.cos(Rt)*kt*4.6,r:.55,tall:1});else if(ht==="pier"){let kt=P.lake?r.lakes[0]:null,u=kt?o+kt.lv+.55:o+.95,S={x:P.x,z:P.z,c:Math.cos(Rt),s:Math.sin(Rt),hw:P.w/2,hd:P.d/2,y:u};P.y=u,v.push(S),A.addArea(S,P.x-P.d,P.z-P.d,P.x+P.d,P.z+P.d)}}function L(P,ht){let Rt=null;return A.each(P,ht,0,kt=>{let u=P-kt.x,S=ht-kt.z;Math.abs(u*kt.c+S*kt.s)<kt.hw+.05&&Math.abs(-u*kt.s+S*kt.c)<kt.hd&&(Rt=kt)}),Rt}let C=32,y=new Map,T=(i.seed||1)*2654435761,V=(P,ht)=>{let Rt=P-a.x,kt=ht-a.z;return Rt>-66&&Rt<a.VL+30&&Math.abs(kt)<46};function D(P,ht){let Rt=ys(P,ht),kt=y.get(Rt);if(kt)return kt;kt={ci:P,cj:ht,x:(P+.5)*C,z:(ht+.5)*C,items:[],colls:[],on:!1};let u=gn((P*73856093^ht*19349663^T)>>>0),S=P*C,j=ht*C;for(let z=0;z<4;z++)for(let lt=0;lt<4;lt++){let St=S+(z+.5)*8+(u()-.5)*5,B=j+(lt+.5)*8+(u()-.5)*5,mt=u(),pt=u(),Ut=u(),Xt=u()*Le;if(Math.abs(St)>e-20||Math.abs(B)>e-20||V(St,B))continue;let ce=n.rad(St,B);if(ce<250&&(ce<n.RP+3||n.inMaze(St,B)||!w(St,B,1.4)||K(St,B))||r.reserved(St,B))continue;let Wt=c(St,B),ue=Wt-o;if(ue>-1&&ue<.35&&mt>.6){let H=r.flora(St,B,ue,0,0);H.reed>0&&u()<H.reed&&kt.items.push({t:"reed",x:St,y:Wt-.1,z:B,s:.8+Ut*.6,ry:Xt});continue}if(ue<.35)continue;let Zt=Math.hypot(c(St+1.5,B)-Wt,c(St,B+1.5)-Wt)/1.5,te=r.flora(St,B,ue,r.coastS(St,B),Zt);if(ce<250&&Wt>60&&(te.t*=.35),mt<te.t){let H=te.pine+te.oak+te.palm+te.olive||1,Ee=pt*H,tt;(Ee-=te.pine)<0?tt="pine":(Ee-=te.oak)<0?tt="oak":(Ee-=te.palm)<0?tt="palm":tt="olive";let Z=tt==="pine"?.85+Ut*.4:tt==="oak"?.8+Ut*.4:tt==="palm"?.85+Ut*.35:.8+Ut*.5;kt.items.push({t:tt,x:St,y:Wt-.12,z:B,s:Z,ry:Xt}),kt.colls.push({x:St,z:B,r:(tt==="pine"?.34:tt==="oak"?.45:tt==="palm"?.28:.3)*Z,tall:1,tree:1})}else if(mt<te.t+te.b)kt.items.push({t:"bush",x:St,y:Wt,z:B,s:.7+Ut*.9,ry:Xt});else if(mt<te.t+te.b+te.rock){let H=Ut>.7,Ee=H?1.6+pt*2.4:.5+pt*.9;kt.items.push({t:H?"boulder":"rock",x:St,y:Wt-Ee*.25,z:B,s:Ee,ry:Xt,rx:pt*3,rz:Ut*3}),Ee>1.1&&kt.colls.push({x:St,z:B,r:Ee*.5})}}return y.set(Rt,kt),kt}let nt=null;function dt(P,ht,Rt=170){if(nt&&Math.hypot(P-nt[0],ht-nt[1])<12)return;nt=[P,ht];let kt=Math.floor((P-Rt)/C),u=Math.floor((P+Rt)/C),S=Math.floor((ht-Rt)/C),j=Math.floor((ht+Rt)/C);for(let z=kt;z<=u;z++)for(let lt=S;lt<=j;lt++){let St=D(z,lt);if(!St.on){St.on=!0;for(let B of St.colls)f.push(B),d.add(B),B.tree&&x(B,1)}}for(let z of y.values()){let lt=Math.hypot(z.x-P,z.z-ht);if(z.on&&lt>Rt+80){z.on=!1;for(let St of z.colls)d.remove(St),St.tree&&x(St,-1)}!z.on&&lt>1900&&y.delete(ys(z.ci,z.cj))}}let $=(P,ht)=>(g.get(ys(Math.floor(P/6),Math.floor(ht/6)))||0)/3,yt=ic(4);for(let P of n.bridges)for(let ht=P.i;ht<=P.j;ht++)yt.add(P.seg.pts[ht]);function K(P,ht){let Rt=null,kt=1/0;if(yt.each(P,ht,1,Ut=>{let Xt=(Ut.x-P)**2+(Ut.z-ht)**2;Xt<kt&&(kt=Xt,Rt=Ut)}),!Rt||kt>2.5)return null;let u=Rt.seg.pts,S=u[Math.min(Rt.k+1,u.length-1)],j=u[Math.max(Rt.k-1,0)],z=S.x-j.x,lt=S.z-j.z,St=Math.hypot(z,lt)||1;z/=St,lt/=St;let B=(P-Rt.x)*z+(ht-Rt.z)*lt,mt=Math.abs((P-Rt.x)*-lt+(ht-Rt.z)*z);if(mt>Rt.hw+.05)return{off:!0,p:Rt,tx:z,tz:lt,lat:mt};let pt=u[Ie(Rt.k+(B>0?1:-1),0,u.length-1)];return pt.kind!=="bridge"&&Math.abs(B)>.35?null:Rt.gap&&Math.abs(B)<.32?{hole:!0,p:Rt,tx:z,tz:lt,lat:mt}:{y:Re(Rt.y,pt.y,Ie(Math.abs(B)/.8,0,1)),p:Rt,tx:z,tz:lt,lat:mt}}let ft={x0:n.x+n.RP-1,x1:n.x+n.RP+4.35,z0:n.z-1.65,z1:n.z+1.65,y:n.HS+.09};function at(P,ht,Rt,kt){let u=c(P,ht),S=null,j=null,z=Rt==null?1/0:Rt+.7;if(Rt!=null&&n.rad(P,ht)<200){let B=n.nearest(P,ht,Rt,1);B&&B.d<=B.p.hw+.25&&B.p.kind!=="bridge"&&B.p.kind!=="stones"&&B.y-.04<=z&&Math.abs(B.y-.04-u)<7&&(u=B.y-.04,S="path")}let lt=K(P,ht);lt&&lt.y!=null&&lt.y<=z&&lt.y>u-.01&&(u=lt.y,S="bridge",j=lt);for(let B of n.stones)Math.hypot(P-B.x,ht-B.z)<B.r+(kt?.5:0)&&B.y<=z&&B.y>u&&(u=B.y,S="stone",j=B);P>ft.x0&&P<ft.x1&&ht>ft.z0&&ht<ft.z1&&ft.y<=z&&ft.y>=u-.2&&(u=ft.y,S="deck");let St=L(P,ht);return St&&St.y<=z&&St.y>u&&(u=St.y,S="deck"),{y:u,kind:S,plat:j,b:lt}}function Pt(P,ht,Rt){let kt=n.rad(P,ht);if(kt<n.RP+.5&&Math.abs(Rt-n.HS)<.6)return"plaza";if(kt<200){let j=n.nearest(P,ht,Rt,1);if(j&&j.d<j.p.hw)return j.p.kind==="stones"?"trail":j.p.kind}let[u,S]=a.toL(P,ht);if(u>-2&&u<a.VL+2&&Math.abs(S)<a.FLOOR+1)return"grass";if(kt>245){let j=Rt-o,z=r.nearRoad(P,ht);if(z&&z.d<z.hw+.3)return"trail";if(Math.hypot(P-r.fajr.x,ht-r.fajr.z)<50)return"plaza";if(j<3.5&&r.coastS(P,ht)<150)return"sand"}return h(P,ht)>.85?"rock":$(P,ht)>.55?"forest":"grass"}function _t(P,ht,Rt){let[kt,u]=a.toL(P,ht);if(kt>-6&&kt<a.VL+6&&Math.abs(u-a.riverZ(kt))<.95){let z=a.waterLevel(kt);if(Rt<z+.3)return{kind:"river",level:z}}let S=n.stream,j=n.rad(P,ht);if(j>245)return r.water(P,ht,Rt);if(j>S.r0+1&&j<S.r1-1&&Math.abs(Fn(S.a,n.ang(P,ht)))*j<2.1){let lt=n.Hnat(P,ht)+.5;if(Rt<lt+.25)return{kind:"torrent",level:lt,dx:Math.cos(S.a),dz:Math.sin(S.a)}}return null}let Dt=0;function ee(P,ht,Rt,kt){for(let u=0;u<2;u++){let S=++Dt;d.each(P,ht,1,j=>{if(j._st===S||(j._st=S,kt&&!kt(j)))return;if(j.box){let mt=P-j.x,pt=ht-j.z,Ut=mt*j.c+pt*j.s,Xt=-mt*j.s+pt*j.c,ce=Ut-Ie(Ut,-j.hw,j.hw),Wt=Xt-Ie(Xt,-j.hd,j.hd),ue=ce*ce+Wt*Wt;if(ue>=Rt*Rt)return;if(ue>1e-8){let Zt=Math.sqrt(ue),te=(Rt-Zt)/Zt;Ut+=ce*te,Xt+=Wt*te}else{let Zt=j.hw-Math.abs(Ut),te=j.hd-Math.abs(Xt);Zt<te?Ut=(Ut<0?-1:1)*(j.hw+Rt):Xt=(Xt<0?-1:1)*(j.hd+Rt)}P=j.x+Ut*j.c-Xt*j.s,ht=j.z+Ut*j.s+Xt*j.c;return}let z=P-j.x,lt=ht-j.z,St=Rt+j.r,B=z*z+lt*lt;if(B<St*St&&B>1e-8){let mt=Math.sqrt(B),pt=(St-mt)/mt;P+=z*pt,ht+=lt*pt}})}return[Ie(P,-e+3,e-3),Ie(ht,-e+3,e-3)]}let se=(P,ht,Rt)=>d.each(P,ht,1,kt=>kt.tall&&Rt(kt)),_e=[...r.rest.map(P=>({...P,y:c(P.x,P.z)})),...n.rest,...a.rest];return{map:i,HALF:e,M:n,V:a,H:c,slope:h,plains:l,surfaceAt:at,groundKind:Pt,water:_t,collide:ee,colliders:f,addColl:p,removeColl:P=>{d.remove(P);let ht=f.indexOf(P);ht>=0&&f.splice(ht,1)},tallNear:se,cgrid:d,veg:m,forestAt:$,restPoints:_e,bridgeAt:K,deck:ft,I:r,SEA:o,VC:C,vegCell:D,ensureVeg:dt,platAt:L,zoneAt:r.zoneAt}}var P_=14,vf=1,Mf=1.15;function Sf(i,t={}){let e=i.M,n=i.V,s=[],r=1,o={t:0,hero:null,rest:null,reached:new Set,coins:[],coinsGot:0,climb:{done:!1,time:0},summit:null,scope:!1,wind:0,vq:{camp:null,merW:{x:0,z:0},zoneW:{x:0,z:0},penW:{x:0,z:0},met:!1,called:!1,caught:!1,delivered:!1},carry:null,focus:null,seed:1},a=[],l=(...u)=>a.push(u.length===1?u[0]:u);function c(u,S,j,z={}){let lt={id:r++,kind:u,x:S,z:j,y:i.H(S,j),vx:0,vy:0,vz:0,face:0,air:!1,peak:0,r:.4,speed:0,run:!1,hopPh:0,landT:0,stun:0,rot:0,surf:null,...z};return s.push(lt),lt}let d=[...e.beasts,...i.I.beasts.map(u=>({kind:u.kind,home:{x:u.x,z:u.z,y:i.H(u.x,u.z)}}))].map(u=>c(u.kind,u.home.x+(u.ox||0),u.home.z,{home:u.home,r:u.kind==="boar"?.52:.44,state:"idle",t:Math.random()*2,cool:0,tx:u.home.x,tz:u.home.z,charge:null,ph:0,face:Math.random()*Le})),f=c("gazelle",n.x+60,n.z,{r:.42,state:"graze",t:0,gt:2.5,sus:0,stamina:4,ph:0,triedLeap:!1,tx:0,tz:0,fx:1,fz:0,stuck:0,hy:0}),p=c("merchant",n.x+20,n.z,{r:.42});function m(u,S,j,z,lt,St={}){let B=u.air?3:10,mt=u.air?Math.max(z,u.airSpd||0):z,pt=St.pushX||0,Ut=St.pushZ||0;u.vx=sn(u.vx,S*mt+pt,B,lt),u.vz=sn(u.vz,j*mt+Ut,B,lt);let Xt=u.x,ce=u.z,Wt=u.x+u.vx*lt,ue=u.z+u.vz*lt;if([Wt,ue]=i.collide(Wt,ue,u.r,St.collFilter),u.air){u.vy-=P_*lt;let Zt=u.y+u.vy*lt,te=i.surfaceAt(Wt,ue,Math.max(u.y,Zt)+.05,!0);if(te.y>u.y+.45&&(Wt=u.x,ue=u.z,u.vx*=-.15,u.vz*=-.15,te=i.surfaceAt(Wt,ue,u.y+.05,!0)),Zt<=te.y&&u.vy<=0){let H=(u.peak||u.y)-te.y;if(u.x=Wt,u.z=ue,u.y=te.y,u.air=!1,u.vy=0,u.landT=.25,u.surf=te.kind,u.plat=te.plat,te.kind==="stone"&&te.plat){let Ee=Math.hypot(u.x-te.plat.x,u.z-te.plat.z),tt=.35;Ee>tt&&(u.x=te.plat.x+(u.x-te.plat.x)/Ee*tt,u.z=te.plat.z+(u.z-te.plat.z)/Ee*tt),u.vx*=.2,u.vz*=.2}u.onLand&&u.onLand(H,te)}else u.x=Wt,u.z=ue,u.y=Zt,u.peak=Math.max(u.peak||Zt,Zt)}else{if(u.surf==="bridge"){let Z=i.bridgeAt(Wt,ue);if(Z&&Z.off){let st=Wt-u.x,ne=ue-u.z,Nt=st*Z.tx+ne*Z.tz;Wt=u.x+Z.tx*Nt,ue=u.z+Z.tz*Nt}}else if(u.surf==="deck"){let Z=i.deck;ue=Ie(ue,Z.z0+.35,Z.z1-.35),Wt=Math.min(Wt,Z.x1-.35)}let Zt=i.surfaceAt(Wt,ue,u.y+.4),te=Math.hypot(Wt-u.x,ue-u.z),H=Zt.y-u.y,Ee=Zt.kind==="path"?.75:.35;if(te>1e-5&&H>Ee&&H>te*vf){let Z=(ne,Nt)=>{let $t=i.surfaceAt(ne,Nt,u.y+.4),U=Math.hypot(ne-u.x,Nt-u.z),M=$t.y-u.y;return M<=($t.kind==="path"?.75:.35)||M<=U*vf?[ne,Nt,$t]:null},st=Z(Wt,u.z)||Z(u.x,ue);st?(Wt=st[0],ue=st[1],Zt=st[2]):(Wt=u.x,ue=u.z,Zt=i.surfaceAt(Wt,ue,u.y),u.vx*=.3,u.vz*=.3)}let tt=Math.hypot(Wt-u.x,ue-u.z);if(Zt.y<u.y-Math.max(.45,tt*1.45)?St.cautious?(Wt=u.x,ue=u.z,u.vx=u.vz=0,Zt=i.surfaceAt(Wt,ue,u.y),u.y=Zt.y):(u.air=!0,u.vy=Math.min(0,u.vy),u.peak=u.y,u.x=Wt,u.z=ue):(u.x=Wt,u.z=ue,u.y=Zt.y,u.surf=Zt.kind,u.plat=Zt.plat),!u.air&&!u.surf&&!St.noSlide){let Z=i.H(u.x+.4,u.z)-i.H(u.x-.4,u.z),st=i.H(u.x,u.z+.4)-i.H(u.x,u.z-.4),ne=Math.hypot(Z,st)/.8;if(ne>Mf){let Nt=(ne-Mf)*9*lt;u.vx-=Z/.8*Nt,u.vz-=st/.8*Nt}}}u.speed=Math.hypot(u.x-Xt,u.z-ce)/lt}function w(u,S){let j=c("hero",S.x,S.z,{r:.5,skin:u,hp:100,maxHp:100,st:100,stT:0,swim:!1,lastHurt:-99,mode:"walk",chute:0,airSpd:0,water:null,inTorrent:0,faintT:0,face:S.face||0});return j.y=S.y!=null?S.y:i.H(S.x,S.z),j.onLand=(z,lt)=>{l(lt.kind==="stone"?"landStone":"land"),z>4.2&&g(j,Math.round((z-4.2)*14),"fall")},j}function g(u,S,j){u.kind!=="hero"||u.mode!=="walk"||S<=0||(u.hp=Math.max(0,u.hp-S),u.lastHurt=o.t,l(["hurt",S,j,u.hp]),u.hp<=0&&(u.mode="faint",u.faintT=0,u.vx=u.vz=0,l(["faint",j])))}function x(u,S,j){S>0?(u.st=Math.max(0,u.st-S*j),u.stT=0,u.st<=0&&!u.outBreath&&(u.outBreath=!0,l("breath"))):(u.stT+=j,u.stT>.8&&(u.st=Math.min(100,u.st+j*(u.speed<.3?22:13)))),u.st>30&&(u.outBreath=!1)}function v(u,S,j,z,lt,St){u.swim=!0,u.air=!1,u.vy=0;let B=Math.hypot(S.mx||0,S.mz||0),mt=B>1e-4?S.mx/B:0,pt=B>1e-4?S.mz/B:0,Ut=lt<.08?0:St?2.5:1.6;u.vx=sn(u.vx,mt*Ut,4,j),u.vz=sn(u.vz,pt*Ut,4,j);let Xt=u.x+u.vx*j,ce=u.z+u.vz*j;i.I.coastS(Xt,ce)<-700?(Xt=u.x,ce=u.z,u.vx*=-.3,u.vz*=-.3,u.farWarn||(u.farWarn=!0,l("farSea"))):u.farWarn=!1,[Xt,ce]=i.collide(Xt,ce,u.r),u.x=Xt,u.z=ce,u.y=Math.max(z.level-.7+Math.sin(o.t*2.2)*.05,i.H(Xt,ce)),u.speed=Math.hypot(u.vx,u.vz),u.surf="water",u.speed>.3&&(u.face=Ln(u.face,Math.atan2(u.vz,u.vx),6,j)),x(u,lt>.08?St?9:4:1.5,j),u.st<=0?(u.sinkT=(u.sinkT||0)+j,u.sinkT>1&&(u.sinkT=0,g(u,8,"water"))):u.sinkT=0;let Wt=u.hopPh||0;u.hopPh=u.speed<.3?0:Wt+u.speed*j*1.6,u.hopPh&&Math.floor(Wt/Math.PI)!==Math.floor(u.hopPh/Math.PI)&&l("splash"),o.t-u.lastHurt>6&&u.hp<u.maxHp&&(u.hp=Math.min(u.maxHp,u.hp+j*3))}function A(u,S){let j=o.rest||i.restPoints[0];if(Object.assign(u,{x:j.x,z:j.z,y:i.H(j.x,j.z),vx:0,vy:0,vz:0,air:!1,stun:0,rot:0,mode:"walk",face:j.face||0,inTorrent:0,surf:null,st:100,swim:!1}),j.plaza&&(u.y=e.HS),S==="faint"){u.hp=u.maxHp;let z=Math.ceil(o.coinsGot*.2);o.coinsGot-=z,l(["respawn",j.name,z])}else l(["respawn",j.name,0]);o.focus=null}function b(u,S,j){if(u.mode==="faint"){u.faintT+=j,u.faintT>1.6&&A(u,"faint");return}if(u.mode!=="walk")return L(u,S,j);if(o.scope){u.vx=u.vz=0,u.speed=0;return}let z=Ie(S.mag||0,0,1);u.stun>0&&(u.stun-=j,z=0);let lt=z>.62&&!S.sneak,St=z<.08?0:lt?5.6:2.3*Ie(z/.62,.4,1);i.ensureVeg(u.x,u.z);let B=i.water(u.x,u.z,u.y);u.water=B?B.kind:null;let mt=B&&(B.kind==="sea"||B.kind==="lake"||B.kind==="marsh")?B.level-i.H(u.x,u.z):0,pt=u.st<=.5;if(pt&&St>2.4&&(St=2.4),mt>1.15&&!u.air)return v(u,S,j,B,z,lt&&!pt);mt>.25&&(St*=Re(1,.5,Ie(mt/1.15,0,1))),u.swim=!1;let Ut=u.air?null:u.surf&&u.surf!=="path"?u.surf:i.groundKind(u.x,u.z,u.y);Ut==="forest"?St*=.78:Ut==="rock"&&(St*=.85),B&&B.kind==="river"&&(St*=.6);let Xt=0,ce=0;if(o.summit&&o.summit.wind>0&&(Xt=o.summit.wind*1.6,ce=o.summit.wind*.48),B&&B.kind==="torrent"&&!u.air){if(Xt+=B.dx*3.4,ce+=B.dz*3.4,u.inTorrent+=j,u.inTorrent>.9){l("swept"),g(u,12,"water"),u.mode==="walk"&&A(u,"swept");return}}else u.inTorrent=0;if(S.jump&&!u.air&&u.stun<=0){u.air=!0,u.vy=6,u.peak=u.y,l("jump");let Z=Math.hypot(u.vx,u.vz);Z>.4&&Z<3.4&&(u.vx*=3.4/Z,u.vz*=3.4/Z),u.airSpd=z>.08?Math.max(3.4,Z):0}let Wt=Math.hypot(S.mx||0,S.mz||0),ue=Wt>1e-4?S.mx/Wt:0,Zt=Wt>1e-4?S.mz/Wt:0,te=u.y;m(u,ue,Zt,St,j,{pushX:Xt,pushZ:ce});let H=!u.air&&u.speed>.5?(u.y-te)/(u.speed*j):0,Ee=(lt&&u.speed>3?9:0)+(H>.3?7*Ie((H-.3)/.4,0,1):0);x(u,Ee,j),u.run=lt&&u.speed>3,u.speed>.3&&!u.air?u.face=Ln(u.face,Math.atan2(u.vz-ce,u.vx-Xt),12,j):u.air&&Math.hypot(u.vx,u.vz)>.5&&(u.face=Ln(u.face,Math.atan2(u.vz,u.vx),8,j)),u.air&&u.vy<-7?u.rot+=j*5:u.air||(u.rot*=Math.pow(.001,j));let tt=u.hopPh;u.hopPh=u.speed<.3||u.air?0:u.hopPh+u.speed*j*2.1,u.hopPh&&Math.floor(tt/Math.PI)!==Math.floor(u.hopPh/Math.PI)&&l(u.water?"splash":["step",u.run,Ut]),u.landT=Math.max(0,u.landT-j),o.t-u.lastHurt>6&&u.hp<u.maxHp&&(u.hp=Math.min(u.maxHp,u.hp+j*3));for(let Z of i.restPoints)(!Z.dyn||Z.on)&&Math.hypot(u.x-Z.x,u.z-Z.z)<(Z.plaza?e.RP-1:Z.fire?6:3.2)&&Math.abs(u.y-(Z.plaza?e.HS:Z.y))<2.5&&o.rest!==Z&&(o.rest=Z,o.reached.has(Z.id)||(o.reached.add(Z.id),(Z.flag||Z.fire||Z.id==="valley")&&l(["rest",Z.name,Z.id])));for(let Z of o.coins)!Z.taken&&Math.abs(Z.x-u.x)<1.25&&Math.abs(Z.z-u.z)<1.25&&Math.hypot(Z.x-u.x,Z.z-u.z)<1&&Math.abs(Z.y-(u.y+.6))<1.2&&(Z.taken=!0,o.coinsGot++,l(["coin",Z]));!o.summit&&e.rad(u.x,u.z)<e.RP-1&&Math.abs(u.y-e.HS)<1&&!o.carry&&(o.summit={t:0,phase:"wait",wind:0},o.climb.done?l(["summit",0,!1]):(o.climb.done=!0,o.climb.time=o.t-(o.climb.t0||0),l(["summit",o.climb.time,!0]))),o.summit&&o.summit.phase==="wait"&&e.rad(u.x,u.z)>e.RP+8&&(o.summit=null)}function L(u,S,j){let z=o.carry;if(u.mode==="lift"){z.t+=j;let lt=z.t;u.x=z.from[0]+lt*lt*2.2,u.z=z.from[2]+lt*lt*.66,u.y=z.from[1]+lt*lt*3.2+Math.sin(lt*6)*.2,u.rot+=j*(4+lt*3),lt>2.6&&(u.mode="carry",z.t=0,z.p0=[u.x,u.y,u.z],l("carry"));return}if(u.mode==="carry"){z.t+=j;let lt=Ie(z.t/z.dur,0,1),St=lt*lt*(3-2*lt),B=[z.p0,[e.x+80,e.HS+48,e.z+14],[n.x-50,n.VF+78,n.z],z.end],mt=ce=>{let Wt=1-St;return Wt*Wt*Wt*B[0][ce]+3*Wt*Wt*St*B[1][ce]+3*Wt*St*St*B[2][ce]+St*St*St*B[3][ce]},pt=mt(0),Ut=mt(1),Xt=mt(2);u.face=Math.atan2(Xt-u.z,pt-u.x),u.x=pt,u.y=Ut,u.z=Xt,u.rot+=j*Re(9,2,lt),o.wind=Re(1,.25,lt),lt>=1&&(u.mode="glide",u.vy=-3,u.vx=u.vz=0,u.chute=0,l("chute"),C(u));return}if(u.mode==="glide"){u.chute=Math.min(1,u.chute+j*3),u.rot*=Math.pow(.015,j),u.vy+=(-3.2-u.vy)*Math.min(1,j*3);let lt=Ie(S.mag||0,0,1),St=Math.hypot(S.mx||0,S.mz||0),B=St>1e-4?S.mx/St:0,mt=St>1e-4?S.mz/St:0;u.vx=sn(u.vx,B*4.6*lt,3,j),u.vz=sn(u.vz,mt*4.6*lt,3,j),u.x+=u.vx*j,u.z+=u.vz*j,u.y+=u.vy*j,[u.x,u.z]=i.collide(u.x,u.z,.4,Ut=>Ut.tall),lt>.1&&(u.face=Ln(u.face,Math.atan2(mt,B),5,j));for(let Ut of o.coins)!Ut.taken&&Math.hypot(Ut.x-u.x,Ut.z-u.z)<1.25&&Math.abs(Ut.y-(u.y+.55))<1.3&&(Ut.taken=!0,o.coinsGot++,l(["coin",Ut]));o.wind=Math.max(0,o.wind-j*.2);let pt=i.surfaceAt(u.x,u.z,u.y+.5);u.y<=pt.y&&(u.y=pt.y,u.vy=0,u.rot=0,u.chute=0,u.landT=.35,u.mode="walk",u.air=!1,u.surf=pt.kind,o.carry=null,o.drop={x:u.x+Math.cos(u.face)*1.2,z:u.z+Math.sin(u.face)*1.2,t:0,face:u.face},l(["landChute"]))}}function C(u){o.coins=o.coins.filter(S=>!S.sky);for(let S=0;S<20;S++){let j=S*.62;o.coins.push({x:u.x+Math.cos(j)*3.2,z:u.z+Math.sin(j)*3.2,y:u.y-4-S*1.55,sky:!0})}}function y(u){let S=o.summit;if(!(!S||o.carry)){if(S.t+=u,S.phase==="wait"&&S.t>=45&&o.windStory&&(S.phase="wind",S.t=0,l("windStart")),S.phase==="wind"&&(S.wind=Ie(S.t/7,0,1),o.wind=S.wind,S.t>8.5)){let j=o.hero;o.scope=!1;let[z,lt]=T();o.carry={t:0,from:[j.x,j.y,j.z],dur:6.2,end:[n.x+z,n.VF+i.V.H0(z,lt)+34,n.z+lt]},j.mode="lift",j.air=!0,S.phase="lift",l("lift")}S.phase==="lift"&&!o.carry&&(o.summit=null)}}function T(){let u=gn(o.seed*7+13>>>0),S=(z,lt)=>!i.tallNear(n.x+z,n.z+lt,St=>Math.hypot(St.x-n.x-z,St.z-n.z-lt)<4.5+St.r),j=null;for(let z=0;z<80;z++){let lt=32+u()*56,St=u()<.5?-1:1,B=Ie(n.riverZ(lt)+St*(4.5+u()*3),-n.FLOOR+2.5,n.FLOOR-2.5);if(!(Math.hypot(lt-o.vq.camp.x,B-o.vq.camp.z)<16)){if(S(lt,B))return[lt,B];j||(j=[lt,B])}}return j||[60,n.riverZ(60)+5]}function V(){o.summit&&o.summit.phase==="wait"&&o.windStory&&(o.summit.t=45)}function D(u){let S=o.hero,j=S.mode==="walk"&&!o.summit;for(let z of d){z.t+=u,z.cool=Math.max(0,z.cool-u);let lt=S.x-z.x,St=S.z-z.z,B=Math.hypot(lt,St),mt=Math.abs(S.y-z.y);if(B>120&&z.state==="idle"){z.vx=z.vz=0,z.speed=0;continue}let pt=S.run?14:S.speed>.4?9:5.5,Ut=z.kind==="wolf",Xt=(ce,Wt,ue)=>{let Zt=ce-z.x,te=Wt-z.z,H=Math.hypot(Zt,te);return H<.05?(m(z,0,0,0,u,{cautious:!0}),H):(m(z,Zt/H,te/H,ue,u,{cautious:!0,collFilter:Ee=>!Ee.hedge||!0}),z.speed>.2&&(z.face=Ln(z.face,Math.atan2(z.vz,z.vx),8,u)),H)};switch(z.state){case"idle":if(j&&z.cool<=0&&B<pt&&mt<3){z.state="notice",z.t=0,l([Ut?"growl":"grunt",z.kind]);break}if(z.t>3+Math.random()*3){z.t=0;let ce=Math.random()*Le;z.tx=z.home.x+Math.cos(ce)*5,z.tz=z.home.z+Math.sin(ce)*5}Math.hypot(z.tx-z.x,z.tz-z.z)>.6?Xt(z.tx,z.tz,1):Xt(z.x,z.z,0);break;case"notice":if(Xt(z.x,z.z,0),z.face=Ln(z.face,Math.atan2(St,lt),10,u),!j){z.state="return";break}if(z.t>(Ut?.6:.9)){if(z.state=Ut?"chase":"charge",z.t=0,!Ut){let ce=B||1;z.charge=[lt/ce,St/ce]}l([Ut?"howl":"grunt",z.kind])}break;case"chase":Xt(S.x,S.z,4.7),(!j||B>22||z.t>7||Math.hypot(z.x-z.home.x,z.z-z.home.z)>32)&&(z.state="return",z.cool=3);break;case"charge":{let ce=z.x,Wt=z.z;m(z,z.charge[0],z.charge[1],7.8,u,{cautious:!0}),z.face=Math.atan2(z.charge[1],z.charge[0]),(Math.hypot(z.x-ce,z.z-Wt)<7.8*u*.3||z.t>1.8)&&(z.state=j&&B<12&&z.t<6?"notice":"return",z.t=0);break}case"return":(Xt(z.home.x,z.home.z,2.2)<1||z.t>20)&&(z.state="idle",z.t=0);break}if(z.ph+=u*(z.state==="chase"||z.state==="charge"?16:z.speed>.3?8:0),(z.state==="chase"||z.state==="charge")&&B<1.25&&mt<1.4&&S.stun<=0&&j){let ce=B||1;S.vx=lt/ce*6,S.vz=St/ce*6,S.stun=.9,S.landT=.3,z.state="return",z.cool=6;let Wt=Ut?18:25;l(["bitten",z.kind,Wt]),g(S,Wt,z.kind)}}}let nt=(u,S)=>[u-n.x,S-n.z],dt={mer:[1.05,-.5],zone:[2.35,.35],pen:[-4.45,-1.75]},$=[[-1.1,-2.8,1.25],[0,-2.8,1.3],[1.1,-2.8,1.25],[-.78,-.8,.55],[4,-2.4,.62],[1.95,-1.8,.35],[-2.05,-1.6,.4],[1.68,-.25,.14],[-1.68,-.25,.14],[1.05,-.5,.42],[-5.8,-1,.3],[-5.8,-1.8,.3],[-5.8,-2.6,.3],[-5.1,-2.9,.3],[-4.45,-2.9,.3],[-3.8,-2.9,.3],[-3.1,-2.6,.3],[-3.1,-1.8,.3],[-3.1,-1,.3]],yt=[],K={id:"camp",x:0,z:0,y:0,name:"\u062E\u064A\u0645\u0629 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",face:0,flag:!1,dyn:!0,on:!1};i.restPoints.push(K);function ft(u,S,j){let z=Math.cos(u.rot),lt=Math.sin(u.rot);return{x:n.x+u.x+S*z+j*lt,z:n.z+u.z-S*lt+j*z}}let at=80*Math.PI/180,Pt=60*Math.PI/180;function _t(){for(let z of yt)i.removeColl(z);let u=e.x+Math.cos(at)*8.7,S=e.z+Math.sin(at)*8.7,j=Math.atan2(e.z-S,e.x-u);o.vq.camp={summit:!0,rot:Math.PI/2-j,base:e.HS-n.VF,x:0,z:0},o.vq.merW={x:u,z:S},o.vq.zoneW={x:e.x+Math.cos(Pt)*7.2,z:e.z+Math.sin(Pt)*7.2},o.vq.penW={x:e.x+Math.cos(Pt+.25)*9.2,z:e.z+Math.sin(Pt+.25)*9.2},yt=[i.addColl({x:e.x+Math.cos(at)*10,z:e.z+Math.sin(at)*10,r:1.1})],Object.assign(p,{x:u,z:S,y:e.HS,face:j})}function Dt(u){u.state="flee",u.t=0,u.stuck=0;let S=o.hero,j=Math.hypot(u.x-S.x,u.z-S.z)||1;u.fx=(u.x-S.x)/j,u.fz=(u.z-S.z)/j,l("snort")}function ee(u){let S=f,j=o.hero,z=o.vq;S.t+=u;let lt=j.x-S.x,St=j.z-S.z,B=Math.hypot(lt,St)||.001,mt=Math.atan2(St,lt);if(B>140&&!z.caught){S.vx=S.vz=0;return}let pt=j.mode==="walk"?j.speed:0,Ut=Math.hypot(S.vx,S.vz)>.2;if(S.ph+=u*(S.state==="flee"?15:Ut?8:0),S.state!=="flee"&&S.state!=="leap"&&(S.stamina=Math.min(4,S.stamina+u*(S.state==="tired"?.5:.8))),!z.caught&&["graze","look","walk","alert"].includes(S.state)){let Zt=B<22?1+(1-B/22)*1.6:0,te=S.state!=="graze",H=pt>4?te?2.6:1.4:pt>.5?te?1.1:.06:0;S.sus=Ie(S.sus+(H*Zt>0?H*Zt:-.3)*u,0,1)}let Xt=(Zt,te)=>{let[H,Ee]=nt(Zt,te);return i.slope(Zt,te)<.7&&H>1&&H<n.VL-1&&Math.abs(Ee)<n.FLOOR+1},ce=(Zt,te,H)=>{let Ee=Zt-S.x,tt=te-S.z,Z=Math.hypot(Ee,tt);if(Z<.05)return S.vx=S.vz=0,Z;S.vx=sn(S.vx,Ee/Z*H,6,u),S.vz=sn(S.vz,tt/Z*H,6,u);let st=S.x+S.vx*u,ne=S.z+S.vz*u;return[st,ne]=i.collide(st,ne,.42),Xt(st,ne)&&(S.x=st,S.z=ne),S.face=Ln(S.face,Math.atan2(S.vz,S.vx),7,u),Z},[Wt,ue]=nt(S.x,S.z);switch(S.state){case"graze":if(S.vx=S.vz=0,S.sus>.5)S.state="alert",S.t=0,l("snort");else if(S.t>S.gt)if(S.t=0,Math.random()<.72)S.state="look";else for(let Zt=0;Zt<12;Zt++){let te=Wt+(Math.random()-.5)*14,H=ue+(Math.random()-.5)*10;if(n.onFloor(te,H)&&Math.abs(H-n.riverZ(te))>1.6){S.tx=n.x+te,S.tz=n.z+H,S.state="walk";break}}break;case"look":S.vx=S.vz=0,B<26&&(S.face=Ln(S.face,mt,4,u)),S.sus>.5?(S.state="alert",S.t=0,l("snort")):S.t>1.1&&(S.state="graze",S.t=0,S.gt=1.4+Math.random()*1.8);break;case"walk":if(S.sus>.5){S.state="alert",S.t=0,S.vx=S.vz=0,l("snort");break}(ce(S.tx,S.tz,1.1)<.4||S.t>6)&&(S.state="graze",S.t=0,S.vx=S.vz=0,S.gt=1.4+Math.random()*1.8);break;case"alert":S.vx=S.vz=0,S.face=Ln(S.face,mt,8,u),S.sus>=1||B<1.6?Dt(S):S.sus<.3&&(S.state="graze",S.t=0,S.gt=1.2+Math.random()*1.2);break;case"flee":{S.stamina-=u;let Zt=8.2*(.55+.45*Math.max(0,S.stamina)/4),te=-lt/B,H=-St/B;Math.abs(ue)>5.5&&(H-=Math.sign(ue)*(Math.abs(ue)-5.5)*.45),Wt<8&&(te+=(8-Wt)*.35),Wt>n.VL-8&&(te-=(Wt-n.VL+8)*.35);let Ee=Math.hypot(te,H)||1;S.fx=sn(S.fx,te/Ee,5,u),S.fz=sn(S.fz,H/Ee,5,u);let tt=Math.hypot(S.fx,S.fz)||1,Z=S.fx/tt,st=S.fz/tt,ne=S.x+Z*Zt*u,Nt=S.z+st*Zt*u;[ne,Nt]=i.collide(ne,Nt,.42);let $t=Math.hypot(ne-S.x,Nt-S.z);Xt(ne,Nt)&&(S.vx=(ne-S.x)/u,S.vz=(Nt-S.z)/u,S.x=ne,S.z=Nt),S.stuck=$t<Zt*u*.35?S.stuck+u:0,S.face=Ln(S.face,Math.atan2(st,Z),10,u),S.stuck>.35&&B<10?(S.state="cornered",S.t=0,S.vx=S.vz=0):S.stamina<=0?(S.state="tired",S.t=0,l("tired")):B>32&&S.t>1.5&&(S.state="graze",S.t=0,S.vx=S.vz=0,S.sus=.35,S.gt=1.5);break}case"tired":B<9?ce(S.x-lt/B*2,S.z-St/B*2,2.3):S.vx=S.vz=0,S.stamina>3.2&&S.t>2.2&&(S.sus=.45,B<6?Dt(S):(S.state="graze",S.t=0));break;case"cornered":if(S.vx=S.vz=0,S.face=Ln(S.face,mt,8,u),!S.triedLeap&&B<4&&S.t>.4){let Zt=j.x+lt/B*4.5,te=j.z+St/B*4.5,[H,Ee]=nt(Zt,te);n.onFloor(H,Ee)||(Zt=j.x+lt/B*3,te=n.z+Ie(nt(0,j.z+St/B*3)[1],-(n.FLOOR-2),n.FLOOR-2)),Object.assign(S,{triedLeap:!0,state:"leap",t:0,from:[S.x,S.z],to:[Zt,te]}),l("snort")}else S.t>4&&B>9&&(S.state="graze",S.t=0,S.sus=.4);break;case"leap":{let Zt=Math.min(1,S.t/.75);S.x=Re(S.from[0],S.to[0],Zt),S.z=Re(S.from[1],S.to[1],Zt),S.hy=Math.sin(Zt*Math.PI)*1.5,S.vx=(S.to[0]-S.from[0])/.75,S.vz=(S.to[1]-S.from[1])/.75,S.face=Math.atan2(S.vz,S.vx),Zt>=1&&(S.hy=0,Dt(S));break}case"follow":{let Zt=j.x-Math.cos(j.face)*1.45,te=j.z-Math.sin(j.face)*1.45,H=Math.hypot(Zt-S.x,te-S.z);if(H>12)S.x=Zt,S.z=te;else if(H>.08){S.vx=sn(S.vx,(Zt-S.x)/H*Math.min(7,H*3.2),6,u),S.vz=sn(S.vz,(te-S.z)/H*Math.min(7,H*3.2),6,u);let Ee=S.x+S.vx*u,tt=S.z+S.vz*u;[Ee,tt]=i.collide(Ee,tt,.42),S.x=Ee,S.z=tt,S.face=Ln(S.face,Math.atan2(S.vz,S.vx),7,u)}else S.vx=S.vz=0;break}case"pen":{let Zt=z.penW,te=Math.hypot(Zt.x-S.x,Zt.z-S.z);te>.3?(S.vx=(Zt.x-S.x)/te*1.3,S.vz=(Zt.z-S.z)/te*1.3,S.x+=S.vx*u,S.z+=S.vz*u,S.face=Ln(S.face,Math.atan2(S.vz,S.vx),6,u)):S.vx=S.vz=0;break}}S.y=i.H(S.x,S.z)+(S.hy||0),!z.caught&&j.mode==="walk"&&["graze","look","walk","alert","tired","cornered"].includes(S.state)&&B<1.55&&(S.hy||0)<.25&&Math.abs(j.y-S.y)<1.5&&(z.caught=!0,S.state="follow",S.vx=S.vz=0,S.sus=0,o.focus={t:2.2,dist:5.2,yaw:Math.atan2(S.z-j.z,S.x-j.x)-Math.PI/2},l("catch"))}function se(u){let S=o.hero,j=o.vq;if(S.mode!=="walk")return;let z=Math.hypot(S.x-j.merW.x,S.z-j.merW.z),lt=j.camp,St=Math.atan2(j.merW.z-e.z,j.merW.x-e.x);!j.called&&z<24&&Math.abs(S.y-p.y)<8&&(j.called=!0,l("call")),!j.met&&z<4.2&&(j.met=!0,o.focus={t:3.4,dist:6.2,x:(S.x+j.merW.x)/2,z:(S.z+j.merW.z)/2,yaw:St,talk:!0},l("meet")),j.caught&&!j.delivered&&Math.hypot(S.x-j.zoneW.x,S.z-j.zoneW.z)<1.7&&(j.delivered=!0,f.state="pen",o.focus={t:4.6,dist:6.6,x:(S.x+j.merW.x)/2,z:(S.z+j.merW.z)/2,yaw:St,talk:!0},l("deliver"))}function _e(u,S={}){o.seed=(S.seed!=null?S.seed:Math.random()*4294967295)>>>0;let j=gn(o.seed);s.length=0,s.push(...d,f,p);for(let mt of d)Object.assign(mt,{x:mt.home.x,z:mt.home.z,y:mt.home.y,vx:0,vz:0,vy:0,air:!1,state:"idle",cool:0,t:Math.random()*2});_t();let z=60,lt=0;for(let mt=0;mt<400;mt++){let pt=6+j()*(n.VL-12),Ut=(j()-.5)*2*(n.FLOOR-2.5);if(!(pt<22||Math.abs(Ut-n.riverZ(pt))<2.2||!n.onFloor(pt,Ut))){z=pt,lt=Ut;break}}Object.assign(f,{x:n.x+z,z:n.z+lt,vx:0,vz:0,state:"graze",t:0,gt:2.5,sus:0,stamina:4,triedLeap:!1,hy:0,face:j()*Le}),f.y=i.H(f.x,f.z),Object.assign(o.vq,{met:!1,called:!1,caught:!1,delivered:!1}),K.on=!1,o.coins=e.coins.map(mt=>({...mt,taken:!1})),o.coinsGot=0,o.summit=null,o.scope=!1,o.carry=null,o.focus=null,o.wind=0,o.t=0,o.drop=null,o.climb={done:!1,time:0,t0:0},o.reached=new Set;let St=i.restPoints[0];o.rest=St,o.reached.add(St.id),o.hero=w(u,St),s.push(o.hero);let B=o.hero;if(S.at==="summit"&&(Object.assign(B,{x:e.x-e.RP+2.5,z:e.z+2,y:e.HS}),o.rest=i.restPoints.find(mt=>mt.id==="summit"),o.climb.done=!0),S.at==="valley"){let mt=i.restPoints.find(pt=>pt.id==="valley");Object.assign(B,{x:mt.x,z:mt.z,y:mt.y,face:0}),o.rest=mt}return{camp:0,gazelle:[f.x,f.z],start:[B.x,B.z]}}function P(u){return u==="scope"?(o.scope=!o.scope,!0):(u==="tea"&&(o.hero.hp=o.hero.maxHp),!0)}function ht(){let u=o.hero;if(u.mode!=="walk"||!o.summit||o.summit.phase!=="wait")return null;let S=null,j=1e9;for(let z of e.plaza.inter){let lt=Math.hypot(u.x-z.x,u.z-z.z);lt<z.r&&lt<j&&(j=lt,S=z)}return S}function Rt(){let u=o.hero,S=o.vq;return u.mode==="faint"?"\u{1F635} \u2026":S.delivered?"\u{1F30D} \u0627\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u062C\u0632\u064A\u0631\u0629":S.caught?"\u{1F3D4}\uFE0F \u0631\u062C\u0651\u0639 \u0627\u0644\u063A\u0632\u0627\u0644 \u0644\u0623\u0628\u0648 \u062C\u0627\u0633\u0645 \u0628\u0627\u0644\u0642\u0645\u0629":S.met?"\u{1F98C} \u062C\u064A\u0628 \u063A\u0632\u0627\u0644 \u0645\u0646 \u0648\u0627\u062F\u064A \u0627\u0644\u063A\u0632\u0644\u0627\u0646":o.summit?S.called?"\u{1F473} \u0643\u0644\u0651\u0645 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645":"\u2615 \u0633\u0627\u062D\u0629 \u0627\u0644\u0642\u0645\u0629":"\u26F0\uFE0F \u0627\u0637\u0644\u0639 \u0644\u0644\u0642\u0645\u0629: \u0623\u0628\u0648 \u062C\u0627\u0633\u0645 \u064A\u0646\u062A\u0638\u0631\u0643"}function kt(u,S){a.length=0,o.t+=u;let j=o.hero;return j?(b(j,S||{},u),y(u),!o.summit&&!o.carry&&(o.wind=Math.max(0,o.wind-u*.35)),D(u),ee(u),se(u),o.drop&&(o.drop.t+=u),o.focus&&(o.focus.t-=u,o.focus.t<=0&&(o.focus=null)),a.slice()):[]}return{S:o,ents:s,beasts:d,gz:f,merchant:p,step:kt,enter:_e,interact:P,nearInteract:ht,skipWait:V,objective:Rt,respawn:()=>{o.hero&&o.hero.mode==="walk"&&A(o.hero,"menu")},hurt:u=>g(o.hero,u,"test")}}var sc=new Pe,I_=new Pe,Rn=new Pe,Uo=new Pe,Us=(i,t,e,n)=>i.copy(sc.set(t)).lerp(I_.set(e),Ie(n,0,1));function wf({scene:i,G:t,U:e,camera:n,waterN:s,glowTex:r,colorBase:o}){let a=t.I,l=t.SEA,c=t.M,h=t.HALF,d=new He({vertexColors:!0}),f=new He({vertexColors:!0,flatShading:!0}),p=jl(f,e),m=new vn,w=new Pe;function g(W,ct,gt,et,xt,bt){let E=ct-l;if(E<.4)return Us(xt,"#D9C99A","#3C7C88",-E/5),E<-5&&xt.lerp(Rn.set("#1E4C69"),Ie((-E-5)/22,0,1)),xt;Us(xt,"#5C973C","#9CC45A",fn(W*.02+9,gt*.02)*1.2-.1),xt.lerp(Rn.set("#B5AE68"),ve(.55,.8,An(W*.008+3,gt*.008))*.42);let O=a.coastS(W,gt);if(bt>0){let R=a.flora(W,gt,E,O,et);xt.lerp(Rn.set("#3D6629"),Ie(R.t,0,.9)*.6),R.reed>.3&&xt.lerp(Rn.set("#6F7E3E"),.6)}else xt.lerp(Rn.set("#3D6629"),ve(.44,.62,fn(W*.0032+5,gt*.0032-3))*.45);xt.lerp(Rn.set("#8D8A70"),ve(300,390,E)*.45);let I=Math.hypot(W+1500,gt+1650);if(I<520&&(Us(Rn,"#D2AE52","#E6CB72",An(W*.5,0)*.5+.5*Math.sin(W*.9+gt*.15)**2),xt.lerp(Rn,ve(520,380,I)*.85)),O<160&&E<4.5&&xt.lerp(Rn.set("#E4D3A0"),ve(4.5,1.6,E)),et>.72){let R=a.peaks.some(J=>J.dark&&Math.hypot(W-J.x,gt-J.z)<J.r);Us(Rn,R?"#3E3A37":"#6C665C",R?"#6A645E":"#ADA595",An(W*.2,ct*.6)),xt.lerp(Rn,ve(.72,1.1,et))}if(bt>0){let R=a.nearRoad(W,gt);R&&R.d<R.hw+1.2&&xt.lerp(Rn.set(bt>1?"#A88A5E":"#9E8A62"),ve(R.hw+1.2,R.hw-.3,R.d)*.9);let J=a.nearRiver(W,gt);J&&J.d<J.w+2.5&&xt.lerp(Rn.set("#857A55"),ve(J.w+2.5,J.w,J.d)*.7)}return xt}let x=[{size:1024,split:760},{size:256,split:170},{size:64,split:0}],v=32,A=-4608,b=new Map,L=(W,ct,gt)=>W*1e8+(ct+5e3)*1e4+(gt+5e3),C=d;function y(W,ct,gt){let et=x[W].size,xt=et/v,bt=A+ct*et,E=A+gt*et,O=v+1,I=O+2,R=new Float32Array(I*I);for(let ot=0;ot<I;ot++)for(let Mt=0;Mt<I;Mt++)R[ot*I+Mt]=t.H(bt+(Mt-1)*xt,E+(ot-1)*xt);let J=(ot,Mt)=>R[(Mt+1)*I+(ot+1)],it=new Float32Array((O*O+4*v)*3),vt=new Float32Array(it.length),Lt=new Float32Array(it.length),_=[],F=0;for(let ot=0;ot<O;ot++)for(let Mt=0;Mt<O;Mt++){let Qt=bt+Mt*xt,le=E+ot*xt,ie=J(Mt,ot),Ct=(J(Mt+1,ot)-J(Mt-1,ot))/(2*xt),Kt=(J(Mt,ot+1)-J(Mt,ot-1))/(2*xt),xe=Math.hypot(Ct,Kt),Te=Math.hypot(Ct,1,Kt);if(it[F*3]=Qt,it[F*3+1]=ie,it[F*3+2]=le,vt[F*3]=-Ct/Te,vt[F*3+1]=1/Te,vt[F*3+2]=-Kt/Te,o(Qt,ie,le,xe,Uo,W)||g(Qt,ie,le,xe,Uo,W),Lt[F*3]=Uo.r,Lt[F*3+1]=Uo.g,Lt[F*3+2]=Uo.b,F++,Mt<O-1&&ot<O-1){let be=ot*O+Mt;_.push(be,be+O,be+1,be+1,be+O,be+O+1)}}let X=[];for(let ot=0;ot<O;ot++)X.push(ot);for(let ot=1;ot<O;ot++)X.push(ot*O+O-1);for(let ot=O-2;ot>=0;ot--)X.push((O-1)*O+ot);for(let ot=O-2;ot>0;ot--)X.push(ot*O);let k=F,N=xt*.9+1;for(let ot of X){it[F*3]=it[ot*3],it[F*3+1]=it[ot*3+1]-N,it[F*3+2]=it[ot*3+2];for(let Mt=0;Mt<3;Mt++)vt[F*3+Mt]=vt[ot*3+Mt],Lt[F*3+Mt]=Lt[ot*3+Mt];F++}for(let ot=0;ot<X.length;ot++){let Mt=X[ot],Qt=X[(ot+1)%X.length],le=k+ot,ie=k+(ot+1)%X.length;_.push(Mt,le,Qt,Qt,le,ie,Mt,Qt,le,Qt,ie,le)}let ut=new en;ut.setAttribute("position",new tn(it,3)),ut.setAttribute("normal",new tn(vt,3)),ut.setAttribute("color",new tn(Lt,3)),ut.setIndex(_),ut.computeBoundingSphere();let Et=new Vt(ut,C);return Et.receiveShadow=!0,Et.matrixAutoUpdate=!1,Et.visible=!1,i.add(Et),Et}let T=(W,ct)=>{let gt=x[0].size,et=A+W*gt,xt=A+ct*gt;for(let bt=0;bt<=4;bt++)for(let E=0;E<=4;E++)if(a.coastS(et+bt/4*gt,xt+E/4*gt)>-650)return!1;return!0},V=[];for(let W=0;W<9;W++)for(let ct=0;ct<9;ct++)T(W,ct)||V.push({lv:0,i:W,j:ct});let D=[];function nt(W,ct,gt){let et=L(W,ct,gt),xt=b.get(et);return xt||(xt={lv:W,i:ct,j:gt,mesh:null,x:A+(ct+.5)*x[W].size,z:A+(gt+.5)*x[W].size,used:$},b.set(et,xt)),xt}let dt=(W,ct,gt)=>{let et=x[W.lv].size/2;return Math.hypot(Math.max(0,Math.abs(ct-W.x)-et),Math.max(0,Math.abs(gt-W.z)-et))},$=0;function yt(W,ct,gt){$++,D.length=0;let et=Math.max(0,gt-l-60)*1.4,xt=bt=>{if(bt.used=$,!bt.mesh)return D.push(bt),!1;let E=dt(bt,W,ct),O=x[bt.lv].split+(bt.lv===0?et:et*.15);if(bt.lv<2&&E<O){let I=[],J=!0;for(let it=0;it<4;it++)for(let vt=0;vt<4;vt++){let Lt=nt(bt.lv+1,bt.i*4+it,bt.j*4+vt);I.push(Lt),Lt.mesh||(J=!1,D.push(Lt),Lt.used=$)}if(J){bt.mesh.visible=!1;for(let it of I)xt(it);return!0}}return bt.mesh.visible=!0,!0};for(let bt of V)xt(nt(bt.lv,bt.i,bt.j));for(let bt of b.values())if(bt.used!==$&&bt.mesh){bt.mesh.visible=!1;let E=dt(bt,W,ct);$-bt.used>120&&(bt.lv===2&&E>420||bt.lv===1&&E>1700)&&(i.remove(bt.mesh),bt.mesh.geometry.dispose(),bt.mesh=null,b.delete(L(bt.lv,bt.i,bt.j)))}D.sort((bt,E)=>(bt.lv===0?-1e6:0)+dt(bt,W,ct)/(bt.lv+1)-((E.lv===0?-1e6:0)+dt(E,W,ct)/(E.lv+1)))}for(let W of V){let ct=nt(0,W.i,W.j);ct.mesh=y(0,W.i,W.j)}function K(W){let ct=performance.now(),gt=0;for(;D.length&&(performance.now()-ct<W||gt===0);){let et=D.shift();et.mesh||(et.mesh=y(et.lv,et.i,et.j),gt++)}return D.length}let ft=(W,ct)=>{let gt=gn(W),et=18,xt=[Yt(Jt(new we(.2,.36,et*.9,7),0,et*.45,0),"#5B3F27")];for(let bt=0;bt<5;bt++){let E=bt/4,O=Re(5.4,et-2.6,E),I=Re(3.3,1,E)*(.9+gt()*.2),R=Re(4.3,3,E);xt.push(Jt(Yt(new Nn(I,R,7,1),(J,it,vt,Lt)=>ke(J,ct?"#1B4226":"#214F2C",ct?"#3A7538":"#4C8C44",.3+(vt/R+.5)*.5+(ln(it*7,Lt*7)-.5)*.2)),(gt()-.5)*.2,O+R*.3,(gt()-.5)*.2,0,gt()*3,0))}return xn(xt)},at=W=>{let ct=gn(W),gt=[Yt(Jt(new we(.3,.5,6,7),0,3,0),"#5E4630")];for(let[et,xt]of[[1,.3],[-.8,.7],[.2,-1]])gt.push(Yt(Jt(new we(.1,.2,3.4,5),et*.9,6.2,xt*.9,xt*.5,0,-et*.5),"#5E4630"));for(let et=0;et<6;et++){let xt=et/6*Le+ct(),bt=et?2.6+ct()*.8:3.2;gt.push(Jt(Yt(new Tn(bt,0),(E,O,I,R)=>ke(E,"#2D5E2A","#6FA349",.35+I/bt*.4+(ln(O*3,R*3)-.5)*.3)),et?Math.cos(xt)*2.8:0,et?8+ct()*2.5:10.5,et?Math.sin(xt)*2.8:0,0,0,0,1,.8,1))}return xn(gt)},Pt=W=>{let ct=gn(W),gt=[Yt(Jt(new we(.16,.3,2.2,6),0,1.1,0,.12,0,.08),"#6B5640")];for(let et=0;et<5;et++){let xt=et/5*Le+ct();gt.push(Jt(Yt(new Tn(1.4+ct()*.4,0),(bt,E,O)=>ke(bt,"#5F7A4F","#A6B98A",.4+O*.3)),Math.cos(xt)*1.2,3.2+ct()*.9,Math.sin(xt)*1.2,0,0,0,1,.65,1))}return xn(gt)},_t=()=>Yt(new si(1,0),(W,ct,gt,et)=>ke(W,"#7A746A","#B9B2A2",.4+gt*.5+(ln(ct*5,et*5)-.5)*.35)),Dt={pine:[ft(5,!1)],oak:[at(7)],palm:[vr(gn(3),1.1,9)],olive:[Pt(9)],bush:[Do()],rock:[No()],boulder:[_t()],reed:[tc()]},ee={pine:1,oak:1,palm:2.4,olive:1,bush:1.7,rock:1.3,boulder:1,reed:2.4},se={pine:.22,oak:.18,palm:.12,olive:.12,bush:.2},_e={pine:Yn(new He({vertexColors:!0,flatShading:!0}),.0012,5,e),oak:Yn(new He({vertexColors:!0,flatShading:!0}),.0016,5,e),palm:Yn(new He({vertexColors:!0,side:$e}),.003,9,e),olive:Yn(new He({vertexColors:!0,flatShading:!0}),.004,2,e),bush:p,rock:f,boulder:f,reed:Yn(new He({vertexColors:!0}),.09,.2,e)},P={pine:xn([Yt(Jt(new we(.25,.35,6,4),0,3,0),"#4B3520"),Yt(Jt(new Nn(3.4,13.5,5,1),0,11.2,0),(W,ct,gt)=>ke(W,"#1F4A2A","#3E7A3A",gt/13.5+.5))]),oak:xn([Yt(Jt(new we(.3,.45,6,4),0,3,0),"#4B3520"),Yt(Jt(new Tn(4.6,0),0,9.6,0,0,0,0,1,.72,1),(W,ct,gt)=>ke(W,"#2B5A28","#5E9443",gt/4+.5))]),palm:xn([Yt(Jt(new we(.12,.17,5.5,4),0,2.75,0),"#8B6A3E"),Yt(Jt(new Tn(1.25,0),0,5.6,0,0,0,0,1,.42,1),"#3F8A36")]),olive:Yt(Jt(new Tn(2.4,0),0,3.5,0,0,0,0,1,.7,1),"#7C9467")},ht=Yt(Jt(new Nn(.5,1,5,1),0,.5,0),(W,ct,gt)=>ke(W,"#BFBFBF","#FFFFFF",gt)),Rt={pine:[6.6,15,4,"#24502C"],oak:[9.5,9,4.5,"#355F2C"],palm:[5,3.5,11,"#3C7B34"],olive:[4.6,3.6,1.8,"#6E8A5E"]},kt=new He({vertexColors:!0,flatShading:!0}),u=26e3,S=9e4,j={};for(let W of Object.keys(P)){let ct=new hi(P[W],kt,u);ct.count=0,ct.frustumCulled=!1,ct.receiveShadow=!0,i.add(ct),j[W]=ct}let z=new hi(ht,kt,S);z.count=0,z.frustumCulled=!1,i.add(z);let lt=130,St=480,B=1400,mt=128,pt=new Map,Ut=mt/t.VC,Xt=[];{let W=Math.ceil(B/t.VC);for(let ct=-W;ct<=W;ct++)for(let gt=-W;gt<=W;gt++){let et=Math.hypot(ct,gt)*t.VC;et<=B+t.VC&&Xt.push([ct,gt,et])}Xt.sort((ct,gt)=>ct[2]-gt[2])}let ce=0,Wt=null,ue=null,Zt=0,te=-1,H=new Set;function Ee(W,ct,gt){let et=Math.floor(W/t.VC),xt=Math.floor(ct/t.VC);(!Wt||Wt[0]!==et||Wt[1]!==xt)&&(Wt=[et,xt],ce=0);let bt=performance.now();for(;ce<Xt.length&&performance.now()-bt<gt;){let[E,O]=Xt[ce++],I=(et+E)*100003+(xt+O);H.has(I)||(t.vegCell(et+E,xt+O),H.add(I),Zt++)}if(H.size>9e3){for(let E of H)if(H.delete(E),H.size<6e3)break}}function tt(W,ct){let gt={};for(let xt=0;xt<Ut;xt++)for(let bt=0;bt<Ut;bt++)for(let E of t.vegCell(W*Ut+xt,ct*Ut+bt).items)(gt[E.t]=gt[E.t]||[]).push(E);let et=new Be;for(let[xt,bt]of Object.entries(gt)){let E=Dt[xt];E&&E.forEach((O,I)=>{let R=bt.filter((it,vt)=>vt%E.length===I);if(!R.length)return;let J=new hi(O,_e[xt],R.length);R.forEach((it,vt)=>{m.position.set(it.x,it.y,it.z),m.rotation.set(it.rx||0,it.ry||0,it.rz||0),m.scale.setScalar((it.s||1)*ee[xt]),m.updateMatrix(),J.setMatrixAt(vt,m.matrix),se[xt]&&J.setColorAt(vt,w.setScalar(1).offsetHSL(0,0,(ln(it.x,it.z)-.5)*se[xt]))}),J.castShadow=xt!=="reed"&&xt!=="rock",J.receiveShadow=!0,J.computeBoundingSphere(),et.add(J)})}return i.add(et),et}function Z(W,ct,gt,et=gt*.5){let xt=performance.now();Ee(W,ct,et);let bt=Math.floor(W/mt),E=Math.floor(ct/mt),O=new Set;for(let J=-2;J<=2;J++)for(let it=-2;it<=2;it++){let vt=(bt+J+.5)*mt,Lt=(E+it+.5)*mt;Math.hypot(Math.max(0,Math.abs(W-vt)-mt/2),Math.max(0,Math.abs(ct-Lt)-mt/2))<lt&&O.add((bt+J)*100003+(E+it))}let I=!1;for(let[J,it]of pt)O.has(J)||(i.remove(it.group),it.group.children.forEach(vt=>vt.dispose&&vt.dispose()),pt.delete(J),I=!0);for(let J of O)if(!pt.has(J)&&performance.now()-xt<gt){let it=Math.round(J/100003),vt=J-it*100003;pt.set(J,{group:tt(it,vt)}),I=!0}(!ue||Math.hypot(W-ue[0],ct-ue[1])>24||I||Zt>60)&&performance.now()-te>350&&st(W,ct)}function st(W,ct){ue=[W,ct],Zt=0,te=performance.now();let gt={pine:0,oak:0,palm:0,olive:0},et=0,xt=Math.floor(W/t.VC),bt=Math.floor(ct/t.VC);for(let[E,O,I]of Xt){if(I<lt-t.VC)continue;let R=(xt+E)*100003+(bt+O);if(!H.has(R))continue;let J=t.vegCell(xt+E,bt+O);if(!pt.has(Math.floor(J.ci/Ut)*100003+Math.floor(J.cj/Ut)))for(let it of J.items){let vt=Rt[it.t];if(!vt)continue;let Lt=Math.hypot(it.x-W,it.z-ct);if(Lt<St){let _=j[it.t];if(gt[it.t]>=u)continue;m.position.set(it.x,it.y,it.z),m.rotation.set(0,it.ry,0),m.scale.setScalar(it.s*(it.t==="palm"?2.4:1)),m.updateMatrix(),_.setMatrixAt(gt[it.t]++,m.matrix)}else if(Lt<B&&et<S&&(it.s>.95||Lt<900)){let _=it.s;m.position.set(it.x,it.y+vt[2]*_,it.z),m.rotation.set(0,it.ry,0),m.scale.set(vt[0]*_,vt[1]*_,vt[0]*_),m.updateMatrix(),z.setMatrixAt(et,m.matrix),z.setColorAt(et,w.set(vt[3]).offsetHSL(0,0,(ln(it.x,it.z)-.5)*.06)),et++}}}for(let E in gt)j[E].count=gt[E],j[E].instanceMatrix.needsUpdate=!0;z.count=et,z.instanceMatrix.needsUpdate=!0,z.instanceColor&&(z.instanceColor.needsUpdate=!0)}let ne=1900,Nt=new hi(zo(),Yn(new He({vertexColors:!0,side:$e}),.5,0,e),ne);Nt.frustumCulled=!1,Nt.count=0,i.add(Nt);let $t=null;function U(W,ct){if($t&&Math.hypot(W-$t[0],ct-$t[1])<8)return;$t=[W,ct];let gt=0,et=gn((Math.floor(W/8)*7919^Math.floor(ct/8)*104729)>>>0);for(let xt=0;xt<ne*1.6&&gt<ne;xt++){let bt=et()*Le,E=Math.sqrt(et())*42,O=Math.round((W+Math.cos(bt)*E)*4)/4,I=Math.round((ct+Math.sin(bt)*E)*4)/4,R=t.H(O,I),J=R-l;if(J<.6||J<4&&a.coastS(O,I)<160||a.reserved(O,I))continue;let it=a.nearRoad(O,I);if(it&&it.d<it.hw+.4)continue;if(c.rad(O,I)<250){let Lt=c.nearest(O,I,R,1);if(c.rad(O,I)<c.RP+1||Lt&&Lt.d<Lt.p.hw+.3)continue}let vt=a.nearRiver(O,I);vt&&vt.d<vt.w+.5||(m.position.set(O,R,I),m.rotation.set(0,ln(O,I)*Le,0),m.scale.setScalar(1+ln(I,O)*.75))}Nt.count=gt,Nt.instanceMatrix.needsUpdate=!0}let M=(W,ct,gt)=>{let et=s.clone();et.wrapS=et.wrapT=cs,et.repeat.set(gt,gt),et.needsUpdate=!0;let xt=new Xn({color:W,specular:"#FFFFFF",shininess:110,normalMap:et,transparent:!0,opacity:ct});return xt.normalScale.set(.6,.6),xt},Q=M("#2A7DB2",.84,1400),Ot=new Vt(new In(26e3,26e3),Q);Ot.rotation.x=-Math.PI/2,Ot.position.y=l,i.add(Ot);let wt=new Vt(new In(26e3,26e3),new wn({color:"#174767"}));wt.rotation.x=-Math.PI/2,wt.position.y=l-42,i.add(wt);let Gt=[Q];for(let W of a.lakes){let ct=M("#3A8FBE",.86,40);Gt.push(ct);let gt=new Vt(new Wn(W.r*1.3+30,48),ct);gt.rotation.x=-Math.PI/2,gt.position.set(W.x,l+W.lv,W.z),i.add(gt)}{let W=M("#4E8C8A",.8,60);Gt.push(W);let ct=new Vt(new Wn(a.marsh.r,56),W);ct.rotation.x=-Math.PI/2,ct.position.set(a.marsh.x,l+a.marsh.lv,a.marsh.z),i.add(ct)}let ae=M("#3C95C8",.88,1);Gt.push(ae);for(let W of a.rivers){let ct=[],gt=[],et=[],xt=0,bt=0;W.pts.forEach((I,R)=>{let J=W.pts[Math.max(0,R-1)],it=W.pts[Math.min(W.pts.length-1,R+1)],vt=it.x-J.x,Lt=it.z-J.z,_=Math.hypot(vt,Lt)||1,F=-Lt/_,X=vt/_,k=I.w+.7;if(R&&(bt+=Math.hypot(I.x-W.pts[R-1].x,I.z-W.pts[R-1].z)),ct.push(I.x+F*k,l+I.lv+.04,I.z+X*k,I.x-F*k,l+I.lv+.04,I.z-X*k),gt.push(0,bt/6,1,bt/6),R){let N=(R-1)*2;et.push(N,N+2,N+1,N+1,N+2,N+3)}});let E=new en;E.setAttribute("position",new tn(new Float32Array(ct),3)),E.setAttribute("uv",new tn(new Float32Array(gt),2)),E.setIndex(et),E.computeVertexNormals();let O=new Vt(E,ae);i.add(O)}let Bt=wi(64,128,(W,ct,gt)=>{W.clearRect(0,0,ct,gt);for(let et=0;et<90;et++)W.fillStyle=`rgba(255,255,255,${.25+Math.random()*.5})`,W.fillRect(Math.random()*ct,0,1+Math.random()*3,gt)},[3,1]),Ht=new He({map:Bt,color:"#DDF3FF",transparent:!0,opacity:.85,side:$e,depthWrite:!1}),de=[];for(let W of a.falls){if(W.top-W.bot<4)continue;let ct=Math.hypot(W.dx,W.dz)||1,gt=W.w*2+1.2,et=W.top-W.bot+1,xt=new Vt(new In(gt,et),Ht);xt.position.set(W.x,l+(W.top+W.bot)/2,W.z),xt.rotation.y=Math.atan2(W.dx,W.dz)+Math.PI/2,xt.rotation.order="YXZ",xt.rotation.x=-.25,i.add(xt);let bt=new ii(new Qn({map:r,color:"#FFFFFF",transparent:!0,opacity:.55,depthWrite:!1}));bt.position.set(W.x+W.dx/ct*3,l+W.bot+1.2,W.z+W.dz/ct*3),bt.scale.setScalar(gt*1.4),i.add(bt),de.push({m:xt,sp:bt})}let Se=(W,ct=512,gt=128,et=56,xt="#8B5A2B",bt="#FFF6E0")=>wi(ct,gt,E=>{E.fillStyle=xt,E.fillRect(0,0,ct,gt),E.strokeStyle="#E8C170",E.lineWidth=8,E.strokeRect(4,4,ct-8,gt-8),E.fillStyle=bt,E.font=`900 ${et}px -apple-system,system-ui,sans-serif`,E.textAlign="center",E.textBaseline="middle",E.direction="rtl",E.fillText(W,ct/2,gt/2+4)}),q=(W,ct,gt,et,xt=0,bt=0,E=0,O=0)=>Jt(Yt(new ze(W,ct,gt),et),xt,bt,E,0,O,0),zt=(W,ct,gt,et,xt=0,bt=0,E=0,O=10)=>Jt(Yt(new we(W,ct,gt,O),et),xt,bt,E),jt=W=>(ct,gt,et,xt)=>ke(ct,W>.5?"#C79E72":"#B98D62",W>.5?"#DDBB8E":"#D1AE80",.45+(ln(Math.round(gt*3),Math.round(et*3+xt*3))-.5)*.35);function he(W){let ct=[],gt=W.kind;if(gt==="house"){let et=W.w,xt=W.d,bt=W.h,E=W.white?O=>O.set("#F1ECE2"):jt(W.tint);ct.push(Yt(Jt(new ze(et,bt,xt),0,bt/2,0),E));for(let[O,I,R,J]of[[0,xt/2-.15,et,.3],[0,-xt/2+.15,et,.3],[et/2-.15,0,.3,xt],[-et/2+.15,0,.3,xt]])ct.push(Yt(Jt(new ze(R,.55,J),O,bt+.27,I),E));ct.push(q(.12,2.1,1,"#5B3A1F",et/2+.03,1.05,0));for(let O of W.floors===2?[1.6,4.8]:[1.6])for(let I of[-1,1])ct.push(q(.1,.8,.9,"#3A2A1E",et/2+.03,O,I*xt*.28));W.floors===2&&ct.push(Yt(Jt(new ze(et+.1,.18,xt+.1),0,3.25,0),"#A9825A")),ct.push(q(1.4,.12,1.4,"#8B6B44",et/2+.7,2.3,0))}else if(gt==="hut"){let et=W.w,xt=W.d;ct.push(Yt(Jt(new ze(et,2.4,xt),0,1.2,0),(E,O,I)=>ke(E,"#7A5434","#9C7048",(I+1.2)*3.3%1)));let bt=new we(.01,et*.78,xt+.6,3,1);ct.push(Yt(Jt(bt,0,2.4+.75,0,Math.PI/2,0,0,1,1,1),"#5C3F27")),ct.push(q(.1,1.9,.9,"#3E2A18",et/2+.03,.95,0))}else if(gt==="reedhut"||gt==="mudhif"){let et=W.w,xt=W.d,bt=W.h,E=Math.round(xt/.9),O=new we(et/2,et/2,xt,18,1,!0,-Math.PI/2,Math.PI);ct.push(Yt(Jt(O,0,0,0,Math.PI/2,0,0,1,1,bt/(et/2)),(I,R,J,it)=>ke(I,"#BFA35E","#E0C98A",.5+Math.sin(it*9)*.25+(ln(R*4,it*4)-.5)*.2)));for(let I=0;I<=E;I++){let R=-xt/2+I/E*xt;ct.push(Yt(Jt(new we(et/2+.06,et/2+.06,.16,18,1,!0,-Math.PI/2,Math.PI),0,0,R,Math.PI/2,0,0,1,1,bt/(et/2)),"#8C7038"))}if(gt==="mudhif")for(let I of[-1,1])ct.push(zt(.35,.42,bt+.8,"#A88A4C",I*(et/2-.5),(bt+.8)/2,xt/2+.2,8))}else if(gt==="teahouse"){let et=W.w,xt=W.d;ct.push(q(.3,3.3,xt,"#E3D2B4",-et/2,1.65,0),q(et,3.3,.3,"#E3D2B4",0,1.65,-xt/2),q(et,3.3,.3,"#E3D2B4",0,1.65,xt/2)),ct.push(q(et+1.2,.25,xt+.6,"#7B5534",.3,3.4,0));for(let bt of[-1,1])ct.push(zt(.12,.12,3.3,"#6B4A2E",et/2+.6,1.65,bt*(xt/2-.2),6));for(let bt=0;bt<3;bt++)ct.push(q(.6,.45,1.8,"#8E5A36",-.6,.23,-3+bt*3),q(.9,.7,.9,"#6B4A2E",.6,.35,-3+bt*3));ct.push(zt(.22,.3,.7,"#C9A13B",-et/2+.6,1.25,0,10))}else if(gt==="stall"){let et=["#E63946","#2A9D8F","#F4A261","#457B9D","#E9C46A"],xt=et[(W.tint||0)%et.length];for(let[bt,E]of[[-1,-1],[1,-1],[-1,1],[1,1]])ct.push(zt(.05,.05,2.6,"#6B4A2E",bt*1.4,1.3,E*1,5));ct.push(Yt(Jt(new ze(3.1,.08,2.3),0,2.62,0,.12,0,0),(bt,E)=>bt.set(Math.floor((E+2)*2.5)%2?xt:"#FFF5E0"))),ct.push(q(2.8,.85,1,"#8B5E3C",0,.43,.3));for(let bt=0;bt<6;bt++)ct.push(q(.35,.3,.3,["#E76F51","#F4D35E","#7FB069","#C2185B","#FFB703","#8D6E63"][bt],-1.1+bt*.44,1,.3))}else if(gt==="board")for(let et of[-1,1])ct.push(zt(.07,.08,2.4,"#5B3A1F",0,1.2,et*1.05,6));else if(gt==="signpost")ct.push(zt(.08,.1,3.2,"#5B3A1F",0,1.6,0,6));else if(gt==="gate"){for(let et of[-1,1])ct.push(Yt(Jt(new ze(1.1,5.2,1.1),0,2.6,et*4.6),jt(.8)));ct.push(Yt(Jt(new ze(1.2,.9,10.4),0,5.6,0),jt(.8)))}else if(gt==="fountain")ct.push(Yt(Jt(new we(W.r,W.r+.15,.7,8),0,.35,0),"#D9CBB0"),zt(.45,.6,1.8,"#CDBB9C",0,.9,0,8),zt(1.1,.4,.35,"#D9CBB0",0,1.9,0,8));else if(gt==="lamp")ct.push(zt(.06,.09,3.3,"#2E2E2E",0,1.65,0,6));else if(gt==="pier"){ct.push(Yt(Jt(new ze(W.w,.22,W.d),0,0,0),(et,xt,bt,E)=>ke(et,"#7E5B3A","#A47A50",Math.floor((E+50)*1.6)%2*.6+.2)));for(let et=0;et<=Math.floor(W.d/4);et++)for(let xt of[-1,1])ct.push(zt(.12,.12,4,"#5B3F27",xt*(W.w/2-.1),-2,-W.d/2+et*4,6))}else if(gt==="boat"||gt==="canoe"){let et=gt==="canoe"?6.5:5.2,xt=gt==="canoe"?.85:1.7;ct.push(Yt(Jt(new Ke(1,14,6,0,Le,Math.PI/2,Math.PI/2),0,.42,0,0,0,0,et/2,.5,xt/2),gt==="canoe"?"#3B2A1E":(bt,E,O)=>ke(bt,"#2A6F97","#F1ECE2",O*-2+.2))),gt==="boat"&&ct.push(q(.25,.1,xt*.8,"#7B5534",0,.38,0))}else if(gt==="logs")for(let et=0;et<6;et++)ct.push(Yt(Jt(new we(.28,.28,W.w,8),0,.3+(et>3?.48:0),(et%4-1.5)*.48*(et>3?.6:1),0,0,Math.PI/2),"#8A6240"));else if(gt==="well"){ct.push(zt(W.r,W.r+.1,.9,"#B8A88A",0,.45,0,12));for(let et of[-1,1])ct.push(zt(.06,.06,2.2,"#5B3A1F",et*.9,1.1,0,5));ct.push(Yt(Jt(new we(.01,1.2,.6,4),0,2.4,0,0,Math.PI/4,0),"#7B5534"))}else if(gt==="lighthouse")ct.push(Yt(Jt(new we(2,3,17,16),0,8.5,0),(et,xt,bt)=>et.set(Math.floor((bt+8.5)/3)%2?"#D62828":"#FBF7EF"))),ct.push(zt(2.6,2.6,.4,"#2E2E2E",0,17.2,0,16),zt(1.6,1.6,1.8,"#9FD8FF",0,18.3,0,12),Yt(Jt(new Nn(1.9,1.4,16),0,19.9,0),"#D62828")),ct.push(q(.15,2.2,1,"#5B3A1F",3,1.1,0));else if(gt==="fwall"){let et=Math.max(2,Math.round(W.w/2));for(let xt=0;xt<et;xt++){let bt=W.h*(.6+.4*ln(W.x+xt,W.z));ct.push(Yt(Jt(new ze(W.w/et+.05,bt,W.d),-W.w/2+(xt+.5)*W.w/et,bt/2,0),(E,O,I,R)=>ke(E,"#8E8576","#B8AE9B",.4+ln(Math.round(O*2+W.x),Math.round(I*2))*.5)))}}else if(gt==="ftower")ct.push(Yt(Jt(new we(W.r*.92,W.r,W.h,12),0,W.h/2,0),(et,xt,bt,E)=>ke(et,"#8E8576","#B8AE9B",.4+ln(Math.round(xt*2+E),Math.round(bt*2))*.5)));else if(gt==="campfire")for(let et=0;et<9;et++){let xt=et/9*Le;ct.push(Jt(Yt(new si(.22,0),"#8A857B"),Math.cos(xt)*.75,.12,Math.sin(xt)*.75))}else if(gt==="square"){ct.push(Yt(Jt(new ze(W.w,.2,W.d),0,-.02,0),(et,xt,bt,E)=>ke(et,"#CBB894","#E2D2B2",(Math.floor(xt/1.5)+Math.floor(E/1.5))%2*.5+ln(Math.floor(xt/1.5),Math.floor(E/1.5))*.35)));for(let[et,xt]of[[-20,-26],[20,-26],[-20,26],[20,26]])ct.push(Yt(Jt(new we(3.2,3.4,.5,14),et,.25,xt),"#9C8466"),Yt(Jt(new Tn(2.8,1),et,.6,xt,0,0,0,1,.3,1),(bt,E,O,I)=>bt.set(["#FF6B9A","#FFD23F","#FFFFFF","#B28DFF","#E63946"][Math.floor(ln(E*3,I*3)*5)])))}return ct}let ge=[],Me=[],Fe=[],re=[];for(let W of a.sites){let ct=he(W),gt=new Be;if(gt.position.set(W.x,W.float?l+.15:W.y,W.z),gt.rotation.y=-(W.rot||0),ct.length){let et=new Vt(xn(ct),new He({vertexColors:!0,side:$e}));et.castShadow=!0,et.receiveShadow=!0,gt.add(et)}if(W.kind==="palm"){let et=new Vt(Dt.palm[0],_e.palm);et.scale.setScalar(2.4*(W.s||1)),et.castShadow=!0,gt.add(et)}if(W.kind==="board"){let et=new Vt(new In(2.2,1.5),new He({map:Se("\u{1F4DC} \u0637\u0644\u0628\u0627\u062A \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",512,360,52,"#6B4423"),side:$e}));et.position.set(.1,1.7,0),et.rotation.y=Math.PI/2,gt.add(et)}if(W.kind==="signpost"&&["\u26F0\uFE0F \u0642\u0645\u0629 \u0627\u0644\u0633\u062D\u0627\u0628","\u{1F3D8}\uFE0F \u0642\u0631\u064A\u0629 \u0627\u0644\u0637\u064A\u0646","\u{1F334} \u0628\u0633\u0627\u062A\u064A\u0646 \u0627\u0644\u0631\u0637\u0628","\u{1F5FC} \u0627\u0644\u0645\u0646\u0627\u0631\u0629"].forEach((et,xt)=>{let bt=new Vt(new In(1.9,.42),new He({map:Se(et,512,112,54),side:$e}));bt.position.set(0,2.9-xt*.5,0),bt.rotation.y=[Math.PI/2,0,Math.PI,-Math.PI/2][xt]+.2,bt.translateX(.95),gt.add(bt)}),W.kind==="gate"){let et=new Vt(new In(4.2,.8),new He({map:Se("\u26F0\uFE0F \u0637\u0631\u064A\u0642 \u0627\u0644\u0642\u0645\u0629",512,100,58),side:$e}));et.position.set(.62,5.6,0),et.rotation.y=Math.PI/2,gt.add(et)}if(W.kind==="lamp"||W.kind==="lighthouse"){let et=new ii(new Qn({map:r,color:"#FFC85A",transparent:!0,opacity:.8,depthWrite:!1,blending:ei}));et.position.y=W.kind==="lamp"?3.3:18.4,et.scale.setScalar(W.kind==="lamp"?1:7),gt.add(et),Me.push(et)}if(W.kind==="fountain"){let et=new Vt(new Wn(W.r-.2,24),Gt[1]);et.rotation.x=-Math.PI/2,et.position.y=.55,gt.add(et)}if(W.kind==="campfire"&&Fe.push(qe(gt)),W.kind==="teahouse")for(let[et,xt,bt]of[[-.9,-3,Math.PI/2],[-.9,0,Math.PI/2+.3],[-.9,3,Math.PI/2-.2]]){let E=_s({thobe:["#F2EEE4","#D9D2C3","#EDE3CF"][re.length%3],bisht:null});E.root.position.set(et,0,xt),E.root.rotation.y=bt,gt.add(E.root),re.push(E)}i.add(gt),ge.push({grp:gt,x:W.x,z:W.z,st:W})}function qe(W){let ct=new Be,gt=xt=>new wn({color:xt,transparent:!0,opacity:.9,depthWrite:!1,blending:ei});[["#FF5A1F",.32,.9],["#FF9A2E",.24,.7],["#FFE07A",.14,.45]].forEach(([xt,bt,E])=>{let O=new Vt(new Nn(bt,E,10,1,!0),gt(xt));O.position.y=E/2+.1,ct.add(O)});for(let xt=0;xt<3;xt++){let bt=new Vt(new we(.08,.08,1.1,6),new He({color:"#5B3A1F"}));bt.rotation.set(Math.PI/2,xt/3*Math.PI,0),bt.position.y=.12,ct.add(bt)}let et=new ii(new Qn({map:r,color:"#FF8A2E",transparent:!0,opacity:.65,depthWrite:!1,blending:ei}));return et.position.y=.6,et.scale.setScalar(2.6),ct.add(et),W.add(ct),ct}for(let W of t.restPoints)if(W.fire){let ct=new Be;ct.position.set(W.fx,t.H(W.fx,W.fz),W.fz);let gt=new Vt(xn(he({kind:"campfire"})),new He({vertexColors:!0}));ct.add(gt);for(let et of[.4,2.5]){let xt=new Vt(new we(.22,.24,1.8,8),new He({color:"#7A5434"}));xt.rotation.set(0,et,Math.PI/2),xt.position.set(Math.cos(et)*1.9,.22,Math.sin(et)*1.9),xt.castShadow=!0,ct.add(xt)}Fe.push(qe(ct)),i.add(ct),ge.push({grp:ct,x:W.x,z:W.z,st:{kind:"rest"}})}{let W=80*Math.PI/180,ct=c.x+Math.cos(W)*10.1,gt=c.z+Math.sin(W)*10.1,et=new Be,xt=[];xt.push(Yt(Jt(new ze(2.2,.03,3.2),0,.02,0),(E,O,I,R)=>E.set(Math.floor((R+2)*2.2)%2?"#9B2226":"#CA6702")));for(let[E,O]of[[-1.1,-1.6],[-1.1,1.6],[.9,-1.6],[.9,1.6]])xt.push(zt(.05,.05,2.4,"#6B4A2E",E,1.2,O,5));xt.push(Yt(Jt(new ze(2.4,.06,3.6),-.1,2.42,0,0,0,.1),(E,O,I,R)=>E.set(Math.floor((R+2)*2)%2?"#0A9396":"#E9D8A6")));for(let E=0;E<5;E++)xt.push(Yt(Jt(new we(.28,.33,.6,8),-.7,.3,-1.2+E*.6),["#D4A373","#CCD5AE","#E9EDC9","#FAEDCD","#BC6C25"][E]));xt.push(q(.6,.4,.9,"#7B5534",.1,.2,1.1),q(.5,.3,.5,"#B5838D",.1,.55,1.1));let bt=new Vt(xn(xt),new He({vertexColors:!0,side:$e}));bt.castShadow=!0,et.add(bt),et.position.set(ct,c.HS+.01,gt),et.rotation.y=-Math.atan2(c.z-gt,c.x-ct),i.add(et)}let ye=360,me=new Float32Array(ye*ye),je=new Float32Array(ye*ye),G=0,rt=null;function Ft(W){let ct=performance.now(),gt=h*2/ye;for(;G<ye&&performance.now()-ct<W;){let et=h-(G+.5)*gt;for(let xt=0;xt<ye;xt++){let bt=-h+(xt+.5)*gt,E=a.A(et,bt),O=G*ye+xt;me[O]=c.rad(et,bt)<230?t.H(et,bt)-l:E,je[O]=E>.4?a.flora(et,bt,E,999,0).t:0}G++}return ye-G}function It(W=1024){G<ye&&Ft(1e9);let ct=document.createElement("canvas");ct.width=ct.height=ye;let gt=ct.getContext("2d"),et=gt.createImageData(ye,ye),xt=h*2/ye;for(let I=0;I<ye;I++)for(let R=0;R<ye;R++){let J=I*ye+R,it=me[J],vt=me[Math.min(ye-1,I+1)*ye+R]-me[Math.max(0,I-1)*ye+R],Lt=me[I*ye+Math.min(ye-1,R+1)]-me[I*ye+Math.max(0,R-1)];if(it<.35)Us(Rn,"#BFE6EE","#2A6FA0",Ie(-it/14,0,1));else{Us(Rn,"#E6D7A6","#86B55A",it/4),it>4&&Us(Rn,"#86B55A","#5F9446",(it-4)/120),Rn.lerp(sc.set("#2F6B33"),Ie(je[J],0,1)*.7),it>200&&Rn.lerp(sc.set("#A39B8B"),ve(200,330,it)),it>330&&Rn.lerp(sc.set("#E8E4DA"),ve(330,395,it));let _=Ie(1+(vt*.55-Lt*.55)/xt*.9,.6,1.3);Rn.multiplyScalar(_)}et.data[J*4]=Rn.r*255,et.data[J*4+1]=Rn.g*255,et.data[J*4+2]=Rn.b*255,et.data[J*4+3]=255}gt.putImageData(et,0,0);let bt=document.createElement("canvas");bt.width=bt.height=W;let E=bt.getContext("2d");E.imageSmoothingEnabled=!0,E.drawImage(ct,0,0,W,W);let O=(I,R)=>[(R+h)/(2*h)*W,(h-I)/(2*h)*W];E.lineCap="round",E.lineJoin="round";for(let I of a.roads)E.strokeStyle="rgba(120,80,40,.85)",E.lineWidth=W/520,E.setLineDash([W/260,W/400]),E.beginPath(),I.pts.forEach((R,J)=>{let[it,vt]=O(R.x,R.z);J?E.lineTo(it,vt):E.moveTo(it,vt)}),E.stroke();E.setLineDash([]);for(let I of a.rivers)E.strokeStyle="#3F93C8",E.lineWidth=W/340,E.beginPath(),I.pts.forEach((R,J)=>{let[it,vt]=O(R.x,R.z);J?E.lineTo(it,vt):E.moveTo(it,vt)}),E.stroke();for(let I of a.sites)if(["house","hut","reedhut","mudhif","teahouse","lighthouse"].includes(I.kind)){let[R,J]=O(I.x,I.z);E.fillStyle="#7A4A2A",E.fillRect(R-1.5,J-1.5,3,3)}return rt=bt,{canvas:bt,x0:-h,x1:h,z0:-h,z1:h}}let qt=0;function Tt(W,ct,gt,et,xt){yt(gt.x,gt.z,gt.y);let bt=K(xt*.45);Z(gt.x,gt.z,xt*.4),et&&U(et.x,et.z),G<ye&&!bt&&Ft(xt*.15),qt+=ct;for(let O of Gt)O.normalMap.offset.set(qt*.01,qt*.006);Fe.forEach((O,I)=>{let R=.85+Math.sin(W*13+I*1.7)*.1+Math.sin(W*23+I)*.06;O.children.slice(0,3).forEach((J,it)=>{J.scale.set(1,R+it*.05,1),J.rotation.y=W*(1+it)})});for(let O of ge)O.grp.visible=Math.hypot(O.x-gt.x,O.z-gt.z)<(O.st.kind==="lighthouse"?4e3:O.st.kind==="house"||O.st.kind==="mudhif"?1600:700);for(let O of re)O.head.rotation.y=Math.sin(W*.6+O.root.position.x)*.35;for(let O of de)O.m.material.map.offset.y=-W*.9;let E=26e3/1400*11;Ot.position.x=Math.round(gt.x/E)*E,Ot.position.z=Math.round(gt.z/E)*E}function Ue(W,ct,gt){for(let bt=0;bt<3;bt++)yt(W,ct,gt),K(1e9);let et=Math.floor(W/t.VC),xt=Math.floor(ct/t.VC);for(let[bt,E,O]of Xt){if(O>260)break;let I=(et+bt)*100003+(xt+E);H.has(I)||(t.vegCell(et+bt,xt+E),H.add(I))}Z(W,ct,1e9,0),st(W,ct),$t=null,U(W,ct)}return{update:Tt,warm:Ue,colorIsland:g,mapShot:It,pending:()=>D.length+(G<ye?1:0),buildSome:K,selectTerrain:yt,tiles:b,refill:st,nearChunks:pt,mid:j,far:z,sea:Ot,mapRows:Ft}}var Mr=Math.PI/180;function bf(i,t,e){let n=i.renderer,s=t.M,r=t.V,o=e.S,a=new Xr,l=new Pe("#CFDFE8");a.background=l,a.fog=new Wr(l,320,3600);let c=new Hn(62,.5,.25,7e3),h={time:{value:0},wind:{value:0},see:{value:new yn(0,0,0,0)}},d=gn(4242),f=new mo("#D2E6FF","#6A8A4E",1);a.add(f);let p=new Y(.5,.72,.45).normalize(),m=new _o("#FFE9C4",2.9);m.castShadow=!0,m.shadow.mapSize.set(2048,2048),Object.assign(m.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:1,far:180}),m.shadow.bias=-5e-4,m.shadow.normalBias=.03,m.shadow.radius=2.5,a.add(m,m.target);let w=lf("#3A7FD6","#9CCBF2","#EFE7D6",new Y(.6,.35,-.7));a.add(w);let g=uf(),x=df(),v=new He({vertexColors:!0}),A=new He({vertexColors:!0,flatShading:!0}),b=new He({vertexColors:!0,flatShading:!0}),L=[],C=(E,O)=>E*100003+O,y=t.HALF,T=64,V=Math.ceil(y*2/T),D=-V*T/2;function nt(E,O,I,R,J){let it=s.rad(E,I),vt=r.Hv(E,I);if(vt<=O+.02&&vt<1e8){let F=E-r.x,X=I-r.z,k=Math.abs(X),N=fn(F*.07+11,X*.07),ut=An(F*.5,X*.5);ke(J,"#5FAE3E","#9AD85E",N*1.3-.15+ut*.2);let Et=Math.abs(X-r.riverZ(F));Et<2.4&&k<r.FLOOR+1&&F>-4&&J.lerp(pi.set(Et<1?"#8F8A62":"#D9C891"),ve(2.4,1.3,Et));let ot=ve(1.2,5,O-r.VF)*ve(r.FLOOR-.5,r.FLOOR+4,k)+ve(.55,.9,R)*.8;if(ot>0){let Mt=.5+.5*Math.sin(O*1.9+fn(E*.05,I*.05)*4);ke(Lo,"#B98F62","#DDBE8E",Mt),Lo.lerp(pi.set("#8E6A48"),An(E*.35,O*.6)*.35),J.lerp(Lo,Ie(ot,0,1))}return F<0&&k<9&&J.lerp(pi.set("#A88C62"),ve(-2,-12,F)*ve(9,5,k)*.6),J}if(it<205){ke(J,"#3E6E2E","#6E9A44",fn(E*.06+3,I*.06)*1.2-.1),R>.8&&(ke(pi,"#5E5A55","#A9A398",An(E*.35+I*.2,O*1.6)*.8+An(E*2,I*2+O)*.35),J.lerp(pi,ve(.8,1.3,R)));let F=s.nearest(E,I,O,1);return F&&F.d<F.p.hw+.9&&F.p.kind!=="bridge"&&J.lerp(pi.set("#9C7E55"),ve(F.p.hw+.9,F.p.hw-.2,F.d)*.85),it<s.RP+1&&J.set("#9A9388"),it>190&&J.lerp(pi.set("#5E8F3E"),ve(190,205,it)),J}return null}let dt=null;function $(){return!dt||!dt.pending()}{let E=wi(64,256,(_,F,X)=>{_.clearRect(0,0,F,X);for(let k=0;k<X;k+=2){let N=6+An(k*.06,1)*8,ut=F-6-An(k*.06,5)*8,Et=_.createLinearGradient(N,0,ut,0);Et.addColorStop(0,"rgba(150,118,78,0)"),Et.addColorStop(.2,"rgba(150,118,78,.95)"),Et.addColorStop(.8,"rgba(140,108,70,.95)"),Et.addColorStop(1,"rgba(140,108,70,0)"),_.fillStyle=Et,_.fillRect(N,k,ut-N,2)}for(let k=0;k<260;k++)_.fillStyle=`rgba(${90+k%5*20},${80+k%7*12},${60+k%3*10},.6)`,_.beginPath(),_.arc(8+Math.random()*(F-16),Math.random()*X,.5+Math.random()*1.4,0,Le),_.fill()},[1,1]),O=[],I=[],R=[],J=0,it=_=>{if(_.length<2)return;let F=0;_.forEach((X,k)=>{let N=_[Math.max(0,k-1)],ut=_[Math.min(_.length-1,k+1)],Et=ut.x-N.x,ot=ut.z-N.z,Mt=Math.hypot(Et,ot)||1,Qt=-ot/Mt,le=Et/Mt,ie=X.hw+.35;if(k&&(F+=Math.hypot(X.x-_[k-1].x,X.z-_[k-1].z)/6),O.push(X.x+Qt*ie,X.y+.06,X.z+le*ie,X.x-Qt*ie,X.y+.06,X.z-le*ie),I.push(0,F,1,F),k){let Ct=J+(k-1)*2;R.push(Ct,Ct+2,Ct+1,Ct+1,Ct+2,Ct+3)}}),J+=_.length*2};for(let _ of s.segs){let F=[];for(let X of _.pts)X.kind==="bridge"||X.kind==="stones"||X.kind==="stairs"?(it(F),F=[]):F.push(X);it(F)}let vt=new en;vt.setAttribute("position",new tn(new Float32Array(O),3)),vt.setAttribute("uv",new tn(new Float32Array(I),2)),vt.setIndex(R),vt.computeVertexNormals();let Lt=new Vt(vt,new He({map:E,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,side:$e}));Lt.receiveShadow=!0,a.add(Lt)}{let E=s.stream,O=[],I=[],R=[],J=0;for(let Lt=E.r0;Lt<=E.r1;Lt+=1){let _=s.x+Math.cos(E.a)*Lt,F=s.z+Math.sin(E.a)*Lt,X=-Math.sin(E.a),k=Math.cos(E.a),N=s.Hnat(_,F)+.5;if(O.push(_+X*2.2,N,F+k*2.2,_-X*2.2,N,F-k*2.2),I.push(0,Lt/4,1,Lt/4),J){let ut=(J-1)*2;R.push(ut,ut+2,ut+1,ut+1,ut+2,ut+3)}J++}let it=new en;it.setAttribute("position",new tn(new Float32Array(O),3)),it.setAttribute("uv",new tn(new Float32Array(I),2)),it.setIndex(R),it.computeVertexNormals();let vt=new Vt(it,new Xn({color:"#4AA6D8",specular:"#FFFFFF",shininess:140,normalMap:x,transparent:!0,opacity:.9,side:$e}));vt.material.normalScale.set(.8,.8),a.add(vt)}{let E=[],O=[],I=[],R=0;for(let vt=-6;vt<=r.VL+6;vt+=.5){let Lt=r.riverZ(vt),_=(r.riverZ(vt+.1)-Lt)/.1,F=Math.hypot(1,_),X=-_/F,k=1/F,N=r.waterLevel(vt);for(let ut of[-1.35,1.35])E.push(r.x+vt+X*ut,N,r.z+Lt+k*ut),O.push(vt/3,ut>0?1:0);if(R){let ut=(R-1)*2;I.push(ut,ut+1,ut+2,ut+1,ut+3,ut+2)}R++}let J=new en;J.setAttribute("position",new tn(new Float32Array(E),3)),J.setAttribute("uv",new tn(new Float32Array(O),2)),J.setIndex(I),J.computeVertexNormals();let it=new Vt(J,new Xn({color:"#3D9FD8",specular:"#FFFFFF",shininess:140,normalMap:x,transparent:!0,opacity:.88}));it.material.normalScale.set(.7,.7),it.receiveShadow=!0,a.add(it)}let yt=(E,O,I,R,J)=>{let it=[Yt(Jt(new we(.13,.22,I*.45,6),0,I*.22,0),"#5A3E26")];for(let vt=0;vt<O;vt++){let Lt=vt/O,_=R*(1-Lt*.62),F=I*.42;it.push(Jt(Yt(new Nn(_,F,8,1),(X,k,N)=>ke(X,J?"#1F4A2B":"#24572F",J?"#3F7A43":"#4E8C46",.25+(N/F+.5)*.6+(ln(k*7,N*3)-.5)*.25)),0,I*.32+vt*I*.22+F/2,0,0,E()*3,0))}return xn(it)},K=()=>{let E=gn(43),O=[Yt(Jt(new we(.14,.22,2.6,6),0,1.3,0),"#5A3E26")];for(let[I,R,J,it]of[[0,3.1,0,1.35],[.7,2.6,.3,.95],[-.6,2.7,-.4,1],[.1,3.8,-.2,.9]])O.push(Jt(Yt(new Tn(it,0),(vt,Lt,_)=>ke(vt,"#2C6B33","#6FAE4E",.3+_/it*.35+(E()-.5)*.3)),I,R,J));return xn(O)},ft=(E,O,I)=>Yt(Jt(new Nn(O*.9,E*.95,6,1,!0),0,E*.62,0),(R,J,it)=>ke(R,I?"#1F4A2B":"#24572F",I?"#3F7A43":"#4E8C46",.3+(it/E+.5)*.5)),at={pine:Yn(new He({vertexColors:!0,flatShading:!0}),.006,2,h),tree:Yn(new He({vertexColors:!0,flatShading:!0}),.01,1.2,h),palm:Yn(new He({vertexColors:!0,side:$e}),.012,2.8,h),grass:Yn(new He({vertexColors:!0,side:$e}),.5,0,h)},Pt={pineA:yt(gn(5),4,7.5,2,!1),pineB:yt(gn(6),3,6,2.5,!0),oak:K()};function _t(E,O,I,R={}){let J=new Map,it=new vn,vt=R.size||26;for(let Lt of I){let _=C(Math.floor(Lt.x/vt),Math.floor(Lt.z/vt));J.has(_)||J.set(_,[]),J.get(_).push(Lt)}for(let Lt of J.values()){let _=new hi(E,O,Lt.length),F=0,X=0;Lt.forEach((N,ut)=>{it.position.set(N.x,N.y,N.z),it.rotation.set(N.rx||0,N.ry||0,N.rz||0),N.s3?it.scale.set(...N.s3):it.scale.setScalar(N.s||1),it.updateMatrix(),_.setMatrixAt(ut,it.matrix),N.color&&_.setColorAt(ut,bn.set(N.color)),F+=N.x,X+=N.z}),_.castShadow=!!R.cast,_.receiveShadow=!0,_.computeBoundingSphere(),a.add(_);let k=null;R.lod&&(k=new hi(R.lod,b,Lt.length),k.instanceMatrix=_.instanceMatrix,k.computeBoundingSphere(),k.visible=!1,a.add(k)),L.push({m:_,lo:k,x:F/Lt.length,z:X/Lt.length,far:R.far||105,lodAt:R.lodAt||62,small:!!R.small})}}let Dt=t.veg;_t(Pt.pineA,at.pine,Dt.pineA,{cast:!0,lod:ft(7.5,2,!1)}),_t(Pt.pineB,at.pine,Dt.pineB,{cast:!0,lod:ft(6,2.5,!0)}),_t(Pt.oak,at.tree,Dt.oak,{cast:!0,lod:Jt(Yt(new Tn(1.5,0),"#3E7D3A"),0,3.1,0)});let ee=xn([Jt(Yt(new Tn(.85,0),(E,O,I,R)=>ke(E,"#1E4A24","#4C8A3E",.35+I*.4+ln(O*9,R*9)*.3)),0,.55,0,0,0,0,1,.95,1),Jt(Yt(new Tn(.6,0),(E,O,I)=>ke(E,"#2A5C2C","#5E9E48",.5+I*.5)),.25,1.25,.1)]),se=jl(A,h);_t(ee,se,Dt.hedge,{size:26,far:70,cast:!1}),_t(Do(),se,Dt.bush,{size:30,far:70,small:!0}),_t(No(),A,Dt.rock,{size:30,far:120});let _e=[vr(gn(3),1.1,9),vr(gn(8),-.8,10),vr(gn(15),.5,8)],P=xn([Yt(Jt(new we(.25,.4,8,5),0,4,0),"#8B6A3E"),Yt(Jt(new Tn(1.6,0),0,8.4,0,0,0,0,1,.55,1),"#3A7F34")]);_e.forEach((E,O)=>_t(E,at.palm,Dt.palm[O].map(I=>({...I,s:I.s*2.2})),{cast:!0,lod:P,lodAt:70,far:260})),[Ql(gn(21),"#E8443A",["#2F8A3C","#7CCB55"]),Ql(gn(33),null,["#3B9447","#8AD460"]),Ql(gn(41),"#FFB52E",["#2C7F3A","#6FC24F"])].forEach((E,O)=>_t(E,at.tree,Dt.fruit[O].map(I=>({...I,s:I.s*1.5})),{cast:!0,far:220})),_t(Do(),A,Dt.vbush,{size:30,far:90,small:!0}),_t(No(),A,Dt.vrock,{size:30,far:70,small:!0}),_t(Yt(new si(.5,1),(E,O,I,R)=>ke(E,"#9C7A56","#D2B387",.45+I*.9+(ln(O*5,R*5)-.5)*.4)),A,Dt.boulder,{size:40,far:260}),_t(xn([Jt(Yt(new we(.15,.22,1.6,5),"#6B4A2A"),0,.8,0),Jt(Yt(new Tn(1.2,0),(E,O,I)=>ke(E,"#4F7F3A","#8DB45E",I/1.2*.5+.5)),0,2.3,0,0,0,0,1,.85,1)]),A,Dt.rim,{size:40,far:300});{let E=gn(5151),O=(N,ut)=>[r.x+N,r.z+ut],I=(N,ut,Et)=>r.CAMPS.some(ot=>Math.hypot(N-ot.x,ut-ot.z)<Et),R=[],J=[],it=[];for(let N=0;R.length<6e3&&N<3e4;N++){let ut=-3+E()*(r.VL+6),Et=(E()<.5?-1:1)*E()*(r.FLOOR+3);if(Math.abs(Et-r.riverZ(ut))<1.15||I(ut,Et,3.9))continue;let[ot,Mt]=O(ut,Et);t.slope(ot,Mt)>.6||R.push({x:ot,y:t.H(ot,Mt)-.02,z:Mt,ry:E()*Le,s:.5+E()*.7})}let vt=["#FF6B9A","#FFFFFF","#FFD23F","#B28DFF","#FF8C42","#FF4D6D","#7FD1FF"];for(let N=0;N<9e3&&J.length<2400;N++){let ut=-2+E()*(r.VL+4),Et=(E()<.5?-1:1)*E()*(r.FLOOR-.3);if(Math.abs(Et-r.riverZ(ut))<1.3||I(ut,Et,3.9)||An(ut*.16,Et*.16)<.42)continue;let[ot,Mt]=O(ut,Et);J.push({x:ot,y:t.H(ot,Mt),z:Mt,ry:E()*Le*.25,s:1.2+E()*.8,color:vt[Math.floor(An(ut*.3+40,Et*.3)*vt.length*.999+E()*1.5)%vt.length]})}for(let N=-4;N<r.VL+4;N+=.55)for(let ut of[-1,1]){if(E()<.35)continue;let Et=r.riverZ(N)+ut*(1.05+E()*.55);if(I(N,Et,5))continue;let[ot,Mt]=O(N,Et);it.push({x:ot,y:t.H(ot,Mt)-.05,z:Mt,ry:E()*Le,s:.7+E()*.6})}_t(zo(),at.grass,R,{size:24,far:55,small:!0});let Lt=xn([Jt(Yt(new we(.007,.01,.24,3,1,!0),"#3E8E36"),0,.12,0),Jt(Yt(new Wn(.02,6),"#FFD54A"),0,.248,.004,-1,0,0)]),_=xn([0,1,2,3,4].map(N=>{let ut=N/5*Le;return Jt(Yt(new Wn(.036,5),"#FFFFFF"),Math.cos(ut)*.035,Math.sin(ut)*.035,0,0,0,ut)}));Jt(_,0,.245,0,-1,0,0),_t(Lt,Yn(v,.8,0,h),J.map(N=>({...N,color:null})),{size:24,far:45,small:!0}),_t(_,Yn(new He({vertexColors:!0,side:$e}),.8,0,h),J,{size:24,far:45,small:!0}),_t(tc(),Yn(v,.09,.2,h),it,{size:24,far:70,small:!0});let F=[],X=[];for(let N of s.ALL){if(N.kind==="bridge"||N.kind==="stones"||N.k%2)continue;let ut=N.seg.pts,Et=-(ut[Math.min(N.k+1,ut.length-1)].z-ut[Math.max(N.k-1,0)].z),ot=ut[Math.min(N.k+1,ut.length-1)].x-ut[Math.max(N.k-1,0)].x,Mt=Math.hypot(Et,ot)||1;for(let Qt of[-1,1]){let le=N.hw+.15+d()*1.4,ie=N.x+Et/Mt*le*Qt,Ct=N.z+ot/Mt*le*Qt,Kt=t.H(ie,Ct),xe=d();xe<.55?F.push({x:ie,y:Kt-.02,z:Ct,ry:d()*Le,s:.6+d()*.7}):xe<.8&&X.push({x:ie,y:Kt,z:Ct,ry:d()*Le,s:.7+d()*.6})}}_t(zo(),at.grass,F,{size:30,far:45,small:!0});let k=xn([...Array(7)].map((N,ut)=>{let Et=ut/7*Le,ot=.55+ut%3*.12,Mt=[],Qt=[];for(let ie=0;ie<6;ie++){let Ct=ie/6,Kt=(ie+1)/6,xe=Math.sin(Ct*Math.PI)*.09,Te=Math.sin(Kt*Math.PI)*.09,be=[Math.cos(Et)*ot*Ct,Math.sin(Ct*Math.PI*.8)*.3,Math.sin(Et)*ot*Ct],We=[Math.cos(Et)*ot*Kt,Math.sin(Kt*Math.PI*.8)*.3,Math.sin(Et)*ot*Kt],fe=-Math.sin(Et),an=Math.cos(Et);Mt.push(be[0]-fe*xe,be[1],be[2]-an*xe,We[0]-fe*Te,We[1],We[2]-an*Te,be[0]+fe*xe,be[1],be[2]+an*xe,be[0]+fe*xe,be[1],be[2]+an*xe,We[0]-fe*Te,We[1],We[2]-an*Te,We[0]+fe*Te,We[1],We[2]+an*Te);for(let Ve=0;Ve<6;Ve++)ke(bn,"#2F6B2C","#79B356",Ct+.2),Qt.push(bn.r,bn.g,bn.b)}let le=new en;return le.setAttribute("position",new tn(new Float32Array(Mt),3)),le.setAttribute("color",new tn(new Float32Array(Qt),3)),le.computeVertexNormals(),le}));_t(k,Yn(new He({vertexColors:!0,side:$e}),.35,0,h),X,{size:30,far:50,small:!0})}let Rt=new Be;a.add(Rt);{let E=wi(256,128,(O,I,R)=>{O.clearRect(0,0,I,R);let J=gn(3);for(let it=0;it<22;it++){let vt=I*(.18+J()*.64),Lt=R*(.42+J()*.28),_=18+J()*30,F=O.createRadialGradient(vt,Lt,0,vt,Lt,_);F.addColorStop(0,"rgba(255,255,255,.95)"),F.addColorStop(.6,"rgba(250,252,255,.55)"),F.addColorStop(1,"rgba(240,246,255,0)"),O.fillStyle=F,O.beginPath(),O.arc(vt,Lt,_,0,Le),O.fill()}});for(let O=0;O<46;O++){let I=d()*Le,R=600+d()*6200,J=new ii(new Qn({map:E,transparent:!0,opacity:.45+d()*.35,depthWrite:!1,fog:!1})),it=380+d()*520;J.scale.set(it,it*.38,1),J.position.set(Math.cos(I)*R,t.SEA+1400+d()*800,Math.sin(I)*R),Rt.add(J)}}dt=wf({scene:a,G:t,U:h,camera:c,waterN:x,glowTex:g,colorBase:nt});let kt=(E,O=256,I=64,R=34)=>wi(O,I,J=>{J.fillStyle="#8B5A2B",J.fillRect(0,0,O,I),J.strokeStyle="#E8C170",J.lineWidth=Math.max(4,I/16),J.strokeRect(4,4,O-8,I-8),J.fillStyle="#FFF3D6",J.font=`900 ${R}px -apple-system, "Geeza Pro", system-ui, sans-serif`,J.textAlign="center",J.textBaseline="middle";try{J.direction="rtl"}catch{}J.fillText(E,O/2,I/2+2)}),u=new Map;{let E=[];for(let R of s.bridges){R.seg.pts.slice(R.i,R.j+1).forEach((J,it)=>{if(J.gap)return;let vt=R.seg.pts[Math.min(J.k+1,R.seg.pts.length-1)],Lt=Math.atan2(vt.z-J.z,vt.x-J.x);E.push(Jt(Yt(new ze(.5,.07,1.45),(_,F,X,k)=>ke(_,"#7A5634","#A57B4C",ln(it,k*3)*.6+(X>0?.3:0))),J.x,J.y-.035,J.z,0,-Lt,0))});for(let J of[-1,1])for(let it of[.95,.45]){let vt=[];for(let Lt=R.i-1;Lt<=R.j+1;Lt++){let _=R.seg.pts,F=_[Ie(Lt,0,_.length-1)],X=_[Ie(Lt+1,0,_.length-1)],k=_[Ie(Lt-1,0,_.length-1)],N=X.x-k.x,ut=X.z-k.z,Et=Math.hypot(N,ut)||1;vt.push(new Y(F.x-ut/Et*.72*J,F.y+it,F.z+N/Et*.72*J))}E.push(Yt(new ts(new di(vt),vt.length*2,.03,5),"#C9A46B"))}for(let J of[R.a,R.b])for(let it of[-1,1]){let vt=J.seg.pts,Lt=vt[Math.min(J.k+1,vt.length-1)],_=vt[Math.max(J.k-1,0)],F=Lt.x-_.x,X=Lt.z-_.z,k=Math.hypot(F,X)||1;E.push(Jt(Yt(new we(.09,.11,1.5,6),"#5C3A1A"),J.x-X/k*.8*it,J.y+.6,J.z+F/k*.8*it))}}for(let R of s.ALL)if(R.kind==="stairs"){let J=R.seg.pts,it=J[Math.min(R.k+1,J.length-1)],vt=J[Math.max(R.k-1,0)],Lt=Math.atan2(it.z-vt.z,it.x-vt.x);E.push(Jt(Yt(new ze(.9,.5,2.7),(_,F,X,k)=>ke(_,"#7C766B","#ABA393",X+.4+ln(R.k,k*5)*.3)),R.x,R.y-.25,R.z,0,-Lt+(ln(R.k,3)-.5)*.08,0))}for(let{p:R,nx:J,nz:it,sz:vt}of s.ledgeRocks)E.push(Jt(Yt(new si(1,0).scale(vt,vt*(1.3+ln(R.k,5)),vt*.8),(Lt,_,F,X)=>ke(Lt,"#5E5A55","#A9A398",.35+F*.2+ln(_*5+R.k,X*5)*.3)),R.x+J*(R.hw+vt),R.y+vt*.3,R.z+it*(R.hw+vt),ln(R.k,2)*.4,ln(R.k,4)*3,0)),R.k%6===0&&E.push(Jt(Yt(new si(.25,0),"#8A847A"),R.x-J*(R.hw-.05),R.y+.08,R.z-it*(R.hw-.05)));for(let R of s.stones)E.push(Jt(Yt(new we(R.r,R.r*1.12,1.4,9),(J,it,vt)=>ke(J,"#7F7A72","#B7B1A6",vt+.6+ln(it*9,R.x)*.2)),R.x,R.y-.7,R.z,0,d()*3,0));{let R=s.rest[0],J=R.face,it=-Math.sin(J),vt=Math.cos(J),Lt=R.x+Math.cos(J)*3,_=R.z+Math.sin(J)*3;for(let X of[-1,1])E.push(Jt(Yt(new we(.11,.13,3.4,7),"#5C3A1A"),Lt+it*2*X,R.y+1.7,_+vt*2*X));E.push(Jt(Yt(new ze(.2,.2,4.6),"#4F3420"),Lt,R.y+3.35,_,0,-J,0));let F=new Vt(new In(3.4,.85),new He({map:kt("\u26F0\uFE0F \u0637\u0631\u064A\u0642 \u0627\u0644\u0642\u0645\u0629",512,128,60),side:$e}));F.position.set(Lt,R.y+2.85,_),F.rotation.y=-J-Math.PI/2,a.add(F)}{let J=r.x+-6,it=r.z+5.5,vt=t.H(J,it);E.push(Jt(Yt(new we(.08,.1,2.4,6),"#5C3A1A"),J,vt+1.2,it));let Lt=new Vt(new In(2.4,.6),new He({map:kt("\u{1F3DE}\uFE0F \u0648\u0627\u062F\u064A \u0627\u0644\u063A\u0632\u0644\u0627\u0646",384,96,46),side:$e}));Lt.position.set(J,vt+2.25,it),Lt.rotation.y=Math.PI/2,a.add(Lt)}for(let R of s.rest)if(R.flag){for(let vt=0;vt<6;vt++)E.push(Jt(Yt(new si(.22-vt*.025,0),"#9D978C"),R.x+1.6,R.y+.15+vt*.25,R.z+1.1));E.push(Jt(Yt(new we(.05,.06,2.4,6),"#5C3A1A"),R.x-1.4,R.y+1.2,R.z-1.1));let J=new en;J.setAttribute("position",new tn(new Float32Array([0,.32,0,0,-.32,0,1.05,0,0]),3)),J.computeVertexNormals();let it=new Vt(J,new He({color:"#F4F1EA",side:$e}));it.position.set(R.x-1.4,R.y+2.05,R.z-1.1),a.add(it),u.set(R.id,it)}let O=kt("\u2B05 \u0644\u0644\u0642\u0645\u0629");for(let R of s.signs){let J=t.H(R.x,R.z);E.push(Jt(Yt(new we(.06,.07,1.9,6),"#5C3A1A"),R.x,J+.95,R.z));let it=new Vt(new In(1.1,.28),new He({map:O,side:$e}));it.position.set(R.x+Math.cos(R.a)*.45,J+1.65,R.z+Math.sin(R.a)*.45),it.rotation.y=-R.a+Math.PI,a.add(it)}for(let R of s.logs){let J=t.H(R.x,R.z);E.push(Jt(Yt(new we(.32,.38,4.2,8),(it,vt,Lt)=>it.set(Math.abs(Lt)>2?"#C9A36B":"#5A3E26")),R.x,J+.35,R.z,0,R.a,Math.PI/2))}let I=new Vt(xn(E),new He({vertexColors:!0,side:$e}));I.castShadow=!0,I.receiveShadow=!0,a.add(I)}let S=200,j=new hi(new we(.22,.22,.05,20),new Xn({color:"#FFC93C",specular:"#FFF4C0",shininess:90,emissive:"#6B4A00",emissiveIntensity:.55}),S);j.castShadow=!0,j.frustumCulled=!1,j.count=0,a.add(j);let z=s.plaza,lt=s.RP,St=s.HS,B=new Be;B.position.set(z.x,St,z.z),a.add(B);let mt=[],pt={flag:null,flagBase:null,bell:null,lanterns:[],water:null,drops:null,leaves:null,kiosk:null,cups:[],streaks:null,scope:null},Ut=(E,O)=>[Math.cos(E*Mr)*O,Math.sin(E*Mr)*O],Xt=new Xn({color:"#B5562A",specular:"#FFFFFF",shininess:120,transparent:!0,opacity:.85}),ce=new Xn({color:"#C9A13B",specular:"#FFE9A8",shininess:90});{let E=wi(512,512,(oe,De,rn)=>{oe.fillStyle="#B9B1A3",oe.fillRect(0,0,De,rn);for(let un=0;un<12;un++){let Pn=un*22,ni=Pn+22,vs=Math.max(6,Math.round(Le*(Pn+11)/34));for(let ss=0;ss<vs;ss++){let Xh=ss/vs*Le,qh=(ss+1)/vs*Le,rc=.82+(un*7+ss*3)%5*.04;oe.fillStyle=`rgb(${Math.round(196*rc)},${Math.round(186*rc)},${Math.round(168*rc)})`,oe.beginPath(),oe.arc(De/2,rn/2,ni-1.5,Xh+.01,qh-.01),oe.arc(De/2,rn/2,Math.max(0,Pn+1.5),qh-.01,Xh+.01,!0),oe.closePath(),oe.fill()}}}),O=new Vt(new Wn(lt,64),new He({map:E}));O.rotation.x=-Math.PI/2,O.position.y=.03,O.receiveShadow=!0,B.add(O);let I=[];for(let oe=0;oe<64;oe++){let De=oe/64*Le;Math.abs(Fn(De,s.ENTRY_A))<.16||Math.abs(Fn(De,s.DECK_A))<.2||I.push(Jt(Yt(new ze(1.36,.72,.55),(rn,un,Pn,ni)=>ke(rn,"#8E877B","#B8AF9F",.4+Pn+ln(oe,ni*4)*.3)),Math.cos(De)*(lt-.1),.36,Math.sin(De)*(lt-.1),0,-De+Math.PI/2,0))}for(let oe=0;oe<10;oe++)I.push(Jt(Yt(new ze(.46,.08,3.6),(De,rn,un,Pn)=>ke(De,"#7A5634","#A57B4C",ln(oe,Pn)*.5+.3)),lt-.3+oe*.48,.05,0));for(let oe of[-1,1]){I.push(Jt(Yt(new ze(4.8,.07,.07),"#6B4423"),lt+2.1,.95,oe*1.8));for(let De=0;De<5;De++)I.push(Jt(Yt(new we(.05,.05,1,6),"#5C3A1A"),lt+.1+De*1.1,.5,oe*1.8))}I.push(Jt(Yt(new ze(.07,.07,3.6),"#6B4423"),lt+4.5,.95,0));for(let oe=-1;oe<=1;oe++)I.push(Jt(Yt(new we(.06,.06,1,6),"#5C3A1A"),lt+4.5,.5,oe*1.6));for(let oe=0;oe<4;oe++)I.push(Jt(Yt(new we(.12,.14,7,6),"#4F3420"),lt+.5+oe*1.3,-3.4,(oe%2?1:-1)*1.5));I.push(Yt(new ti([new At(.001,0),new At(2.35,0),new At(2.45,.08),new At(2.4,.62),new At(2.15,.66),new At(2.1,.22),new At(.001,.22)],40),(oe,De,rn)=>ke(oe,"#9F988C","#D6CFC2",rn*1.5+.2))),I.push(Yt(new ti([new At(.001,.2),new At(.32,.2),new At(.22,.9),new At(.18,1.4),new At(.7,1.55),new At(.72,1.68),new At(.15,1.72),new At(.12,2.15),new At(.2,2.3),new At(.001,2.38)],24),(oe,De,rn)=>ke(oe,"#A79F92","#DCD5C8",rn*.4)));let R=z.kioskA*Mr,[J,it]=Ut(z.kioskA,9.2),vt=Math.atan2(-Math.cos(R),-Math.sin(R)),Lt=[],_=oe=>Lt.push(oe),F=(oe,De)=>oe.set(Math.floor((De+1.6)/.4)%2?"#A97B4C":"#93683E");_(Jt(Yt(new ze(3.2,2.4,.12),F),0,1.2,-1.05));for(let oe of[-1,1])_(Jt(Yt(new ze(.12,2.4,2.2),"#8A5F36"),oe*1.55,1.2,0));_(Jt(Yt(new ze(3.5,.12,2.7),"#6B4423"),0,2.45,.15)),_(Jt(Yt(new ze(3.1,1,.5),(oe,De,rn)=>oe.set(rn>.42?"#5C3A1A":Math.floor((De+1.55)/.31)%2?"#A97B4C":"#93683E")),0,.5,.85));for(let oe=0;oe<8;oe++)_(Jt(Yt(new ze(.44,.04,.9),oe%2?"#FAF3E6":"#2E8B57"),-1.54+oe*.44,2.3,1.75,.35,0,0));_(Jt(Yt(new ze(2.6,.06,.35),"#6B4423"),0,1.6,-.9));for(let oe=0;oe<5;oe++)_(Jt(Yt(new we(.07,.06,.22,8),["#2E86AB","#C0612B","#F2E3C6","#9B2335","#E8C170"][oe]),-1+oe*.5,1.75,-.9));let X=new Be;X.add(new Vt(xn(Lt),new He({vertexColors:!0,side:$e}))),X.position.set(J,0,it),X.rotation.y=vt,B.add(X),X.traverse(oe=>{oe.isMesh&&(oe.castShadow=!0,oe.receiveShadow=!0)}),pt.kiosk=X;let k=new Vt(new ti([new At(.001,0),new At(.14,0),new At(.16,.05),new At(.22,.2),new At(.2,.42),new At(.12,.5),new At(.14,.56),new At(.06,.62),new At(.001,.64)],18),ce);k.position.set(-1,1,.85),X.add(k);for(let oe=0;oe<6;oe++){let De=new Vt(new we(.045,.032,.1,10),Xt);De.position.set(-.3+oe*.2,1.05,.9),X.add(De),pt.cups.push(De)}let N=_s({thobe:"#EDE6DA",bisht:null,shmagh:"#1E1E1E",beard:"#2E2A26",beads:!1});N.root.position.set(.35,0,-.25),X.add(N.root),mt.push({m:N,base:N.root.position.clone(),kind:"seller"});for(let oe of z.benches){let De=oe*Mr,[rn,un]=Ut(oe,6.6),Pn=-De-Math.PI/2,ni=-Math.sin(De),vs=Math.cos(De);I.push(Jt(Yt(new ze(2.2,.1,.55),"#8A5F36"),rn,.45,un,0,Pn,0)),I.push(Jt(Yt(new ze(2.2,.5,.08),"#7A5232"),rn+Math.cos(De)*.3,.75,un+Math.sin(De)*.3,0,Pn,0));for(let ss of[-.9,.9])I.push(Jt(Yt(new ze(.1,.45,.5),"#6B4423"),rn+ni*ss,.22,un+vs*ss,0,Pn,0))}let ut=()=>{let oe=new Vt(new we(.035,.026,.08,10),Xt);return oe.position.set(0,-.43,.05),oe},Et={tea:[z.meet[0]-z.x,z.meet[1]-z.z],stand:[J,it]},ot=[_s({thobe:"#D8CDB8",bisht:"#2D3A4E",shmagh:"#C8102E",beads:!1,beard:"#5A524C"}),_s({thobe:"#F4F1EA",bisht:null,shmagh:"#F4F1EA",beard:"none",beads:!0}),_s({thobe:"#CFE0E8",bisht:null,shmagh:"#C8102E",beard:"#3A3430",beads:!1})];z.guests.forEach((oe,De)=>{let rn=ot[De],[un,Pn]=Ut(oe.a,oe.r),ni=Et[oe.kind];rn.root.position.set(un,0,Pn),rn.root.rotation.y=Math.atan2(ni[0]-un,ni[1]-Pn),B.add(rn.root),mt.push({m:rn,base:rn.root.position.clone(),kind:oe.kind,ph:d()*6}),oe.kind==="tea"&&rn.arms[1].el.add(ut())});let Mt=118*Mr,[Qt,le]=Ut(118,9),ie=-Math.sin(Mt),Ct=Math.cos(Mt);for(let oe of[-1,1])I.push(Jt(Yt(new ze(.18,2.8,.18),"#5C3A1A"),Qt+ie*.9*oe,1.4,le+Ct*.9*oe));I.push(Jt(Yt(new ze(2.3,.2,.24),"#4F3420"),Qt,2.8,le,0,-Mt-Math.PI/2,0));let Kt=new Be;Kt.position.set(Qt,2.7,le),B.add(Kt);let xe=new Vt(new ti([new At(.001,-.05),new At(.18,-.06),new At(.24,-.25),new At(.3,-.55),new At(.42,-.72),new At(.4,-.76),new At(.001,-.76)],24),new Xn({color:"#B07A2E",specular:"#FFE2A0",shininess:100}));xe.castShadow=!0;let Te=new Vt(new Ke(.07,10,8),Xe("#3B2A1A"));Te.position.y=-.7,Kt.add(xe,Te),pt.bell={g:Kt,swing:0,v:0};let[be,We]=Ut(300,10.2);I.push(Jt(Yt(new we(.08,.1,9,8),"#D9D9D9"),be,4.5,We)),I.push(Jt(Yt(new Ke(.16,10,8),"#E8C170"),be,9.05,We));let fe=new In(3.2,2,20,10);fe.translate(1.6,0,0);let an=new Float32Array(fe.attributes.position.count*3);for(let oe=0;oe<fe.attributes.position.count;oe++){let De=fe.attributes.position.getY(oe);bn.set(De>.33?"#CE1126":De>-.33?"#FFFFFF":"#141414"),Math.abs(De)<.2&&Math.abs(fe.attributes.position.getX(oe)-1.6)<.35&&bn.set("#007A3D"),an.set([bn.r,bn.g,bn.b],oe*3)}fe.setAttribute("color",new tn(an,3));let Ve=new Vt(fe,new He({vertexColors:!0,side:$e}));Ve.position.set(be+.1,7.9,We),Ve.castShadow=!0,B.add(Ve),pt.flag=Ve,pt.flagBase=Float32Array.from(fe.attributes.position.array);let pe=new Be;pe.position.set(lt+3.9,0,0),B.add(pe);for(let oe=0;oe<3;oe++){let De=oe/3*Le,rn=new Vt(new we(.03,.03,1.3,6),Xe("#3B3B3B"));rn.position.set(Math.cos(De)*.25,.6,Math.sin(De)*.25),rn.rotation.set(Math.sin(De)*.38,0,-Math.cos(De)*.38),pe.add(rn)}let Ce=new Vt(new we(.09,.13,1.1,16),ce);Ce.rotation.z=Math.PI/2-.15,Ce.position.set(.1,1.32,0),pe.add(Ce);let Qe=new Vt(new we(.14,.14,.06,16),Xe("#1A2A3A",{shininess:160,specular:"#FFFFFF"}));Qe.rotation.z=Math.PI/2-.15,Qe.position.set(.66,1.4,0),pe.add(Qe),yr(pe),pt.scope=pe;let Mn=z.lamps.map(oe=>oe*Mr);for(let oe of Mn){let De=Math.cos(oe)*12.2,rn=Math.sin(oe)*12.2;I.push(Jt(Yt(new we(.06,.08,3.2,6),"#2E2E2E"),De,1.6,rn));let un=new Be;un.position.set(De,3,rn);let Pn=new Vt(new we(.11,.11,.26,8),new wn({color:"#FFD36B"})),ni=new ii(new Qn({map:g,color:"#FFC14D",transparent:!0,opacity:.7,depthWrite:!1,blending:ei}));ni.scale.setScalar(.75),un.add(Pn,ni),B.add(un),pt.lanterns.push(un)}let pn=[];for(let oe=0;oe<4;oe++){let De=Mn[oe],rn=Mn[(oe+1)%4],un=Fn(De,rn);un<0&&(un+=Le);for(let Pn=1;Pn<9;Pn++){let ni=De+un*Pn/9,vs=Math.sin(Pn/9*Math.PI)*.6;pn.push([Math.cos(ni)*12.2,3.05-vs,Math.sin(ni)*12.2])}}let Ne=new hi(new Ke(.07,8,6),new wn({color:"#FFFFFF"}),pn.length),_n=new vn,Zn=["#FF5D8F","#FFD23F","#7FD1FF","#8DE26B"];pn.forEach(([oe,De,rn],un)=>{_n.position.set(oe,De,rn),_n.updateMatrix(),Ne.setMatrixAt(un,_n.matrix),Ne.setColorAt(un,bn.set(Zn[un%4]))}),B.add(Ne);for(let oe of z.beds){let[De,rn]=Ut(oe,11);I.push(Jt(Yt(new we(.7,.6,.5,12),"#8E877B"),De,.25,rn));for(let un=0;un<9;un++)I.push(Jt(Yt(new Tn(.13,0),["#FF5D8F","#FFD23F","#FFFFFF","#B28DFF"][un%4]),De+Math.cos(un)*.4,.58,rn+Math.sin(un)*.4))}let mn=new Vt(xn(I),new He({vertexColors:!0,side:$e}));mn.castShadow=!0,mn.receiveShadow=!0,B.add(mn),_t(Pt.pineA,at.pine,z.pines.map(oe=>{let[De,rn]=Ut(oe,11.6);return{x:z.x+De,y:St-.1,z:z.z+rn,ry:d()*Le,s:.9}}),{cast:!0,size:100,far:500});let En=new Vt(new Wn(2.12,40),new Xn({color:"#4AA6D8",specular:"#FFFFFF",shininess:140,normalMap:x,transparent:!0,opacity:.88}));En.rotation.x=-Math.PI/2,En.position.y=.55,B.add(En),pt.water=En;let oi=140,Sr=[];for(let oe=0;oe<oi;oe++)Sr.push([d()*Le,d(),.5+d()*.5]);let Oh=new en;Oh.setAttribute("position",new tn(new Float32Array(oi*3),3)),pt.drops=new cr(Oh,new Ts({size:.16,map:g,color:"#E6F6FF",transparent:!0,opacity:.9,depthWrite:!1})),pt.drops.userData.seed=Sr,pt.drops.frustumCulled=!1,B.add(pt.drops);let Bh=220,kh=[];for(let oe=0;oe<Bh;oe++)kh.push([d()*60-30,d()*8,d()*60-30,d()]);let Vh=new en;Vh.setAttribute("position",new tn(new Float32Array(Bh*3),3)),pt.leaves=new cr(Vh,new Ts({size:.22,map:g,color:"#A8D46A",transparent:!0,opacity:0,depthWrite:!1})),pt.leaves.userData.seed=kh,pt.leaves.frustumCulled=!1,B.add(pt.leaves);let Gh=70,Hh=[];for(let oe=0;oe<Gh;oe++)Hh.push([d()*50-25,d()*9-1,d()*50-25,.5+d()]);let Wh=new en;Wh.setAttribute("position",new tn(new Float32Array(Gh*6),3)),pt.streaks=new Es(Wh,new us({color:"#FFFFFF",transparent:!0,opacity:0,depthWrite:!1})),pt.streaks.userData.seed=Hh,pt.streaks.frustumCulled=!1,B.add(pt.streaks)}let Wt=new Be;a.add(Wt);let ue={flames:[],glows:[],lantern:null};{let I=new Y(4,0,-2.4),R=[],J=(pe,Ce)=>pe.set(Math.floor((Ce+1.7)/.425)%2?"#EAD9B5":"#D9C39C");R.push(Jt(Yt(new ze(3.4,1.95,2.4),J),0,.975,-2.8));for(let pe of[-1,1])R.push(Jt(Yt(new ze(3.62,.07,1.52),(Ce,Qe)=>Ce.set(Math.floor((Qe+1.81)/.4525)%2?"#C9AE82":"#B99D70")),0,2.32,-2.8+pe*.6,pe*.59,0,0));let it=new vi;it.moveTo(-1.2,0),it.lineTo(1.2,0),it.lineTo(0,.8),it.closePath();for(let pe of[-1,1])R.push(Jt(Yt(new ji(it),"#E3D0A8"),0+pe*1.7,1.95,-2.8,0,Math.PI/2,0));R.push(Jt(Yt(new ze(.95,1.55,.05),"#3F2412"),0-.25,.775,-2.8+1.22));for(let pe of[-1,1]){let Ce=new vi;Ce.moveTo(0,0),Ce.lineTo(.42*pe,0),Ce.lineTo(0,-1),Ce.closePath(),R.push(Jt(Yt(new ji(Ce),"#E9D7B0"),0-.25+pe*.04,1.55,-2.8+1.25))}let vt=new Y(0,2.15,-2.8+1.2),Lt=new Y(0,1.98,-2.8+2.55),_=vt.distanceTo(Lt),F=Math.atan2(vt.y-Lt.y,Lt.z-vt.z);for(let pe=0;pe<8;pe++){let Ce=-1.4875+pe*.425,Qe=pe%2?"#FAF3E6":"#D7263D";R.push(Jt(Yt(new ze(.425,.035,_),Qe),Ce,(vt.y+Lt.y)/2,(vt.z+Lt.z)/2,F,0,0)),R.push(Jt(Yt(new Wn(.2125,10,Math.PI,Math.PI),Qe),Ce,Lt.y,Lt.z+.01))}for(let pe of[-1,1])R.push(Jt(Yt(new we(.045,.055,2.05,7),"#5C3A1A"),0+pe*1.68,1.02,-2.8+2.55));let X=0-.78,k=-2.8+2;R.push(Jt(Yt(new ze(1,.06,.55),"#8B5A2B"),X,.74,k));for(let[pe,Ce]of[[-1,-1],[1,-1],[-1,1],[1,1]])R.push(Jt(Yt(new we(.03,.03,.72,5),"#6B4220"),X+pe*.44,.36,k+Ce*.22));let N=pe=>new ti([new At(.001,0),new At(.09*pe,0),new At(.15*pe,.07),new At(.16*pe,.17),new At(.11*pe,.28),new At(.06*pe,.32),new At(.075*pe,.36),new At(.06*pe,.37)],14);R.push(Jt(Yt(N(1),(pe,Ce,Qe)=>pe.set(Qe>.2&&Qe<.24?"#F2E3C6":"#C0612B")),X-.3,.77,k)),R.push(Jt(Yt(N(.8),(pe,Ce,Qe)=>pe.set(Qe>.16&&Qe<.19?"#FFFFFF":"#2E86AB")),X+.02,.77,k-.05)),R.push(Jt(Yt(new Ke(.28,12,8),(pe,Ce,Qe)=>ke(pe,"#C8B18A","#E2D2AE",Qe*2+.5)),0-2.05,.27,-2.8+1.2,0,0,0,1,1.2,1)),R.push(Jt(Yt(new ze(.5,.42,.42),(pe,Ce,Qe)=>pe.set(Math.abs(Qe)>.17||Math.abs(Ce)>.21?"#7A4E25":"#A0703C")),0+1.95,.21,-2.8+1,0,.3,0));let ut=(pe,Ce)=>{let Qe=pe.distanceTo(Ce),Mn=Math.max(2,Math.round(Qe/.55));for(let pn=0;pn<=Mn;pn++){let Ne=pe.clone().lerp(Ce,pn/Mn);R.push(Jt(Yt(new we(.045,.055,.85,6),"#8B5A2B"),Ne.x,.42,Ne.z))}for(let pn of[.3,.62]){let Ne=Yt(new ze(.05,1,.035),"#9C6A36");Jt(Ne,0,0,0,0,0,0,1,Qe,1),Dh(Ne,new Y(pe.x,pn,pe.z),new Y(Ce.x,pn,Ce.z)),R.push(Ne)}},Et=new Y(-5.8,0,-.75),ot=new Y(-5.8,0,-2.9),Mt=new Y(-3.1,0,-2.9),Qt=new Y(-3.1,0,-.75);ut(Et,ot),ut(ot,Mt),ut(Mt,Qt),R.push(Jt(Yt(new ze(1,.18,.35),"#7A4E25"),-4.45,.09,-2.55)),R.push(Jt(Yt(new ze(.9,.06,.28),"#D8C26A"),-4.45,.2,-2.55)),R.push(Jt(Yt(new ze(1.75,.46,.06),"#7A4A22"),0,2.66,-2.8+1.25));for(let pe=0;pe<9;pe++){let Ce=pe/9*Le;R.push(Jt(Yt(new si(.11,0),(Qe,Mn,pn)=>ke(Qe,"#7D776C","#B5AFA2",pn*4+.5)),I.x+Math.cos(Ce)*.42,.06,I.z+Math.sin(Ce)*.42,pe,pe*2,0,1,.7,1))}for(let pe=0;pe<3;pe++){let Ce=pe/3*Math.PI;R.push(Jt(Yt(new we(.05,.05,.62,6),(Qe,Mn,pn)=>Qe.set(Math.abs(pn)>.27?"#C9A36B":"#4A2E18")),I.x,.1,I.z,0,Ce,Math.PI/2-.25))}let le=new Vt(xn(R),new He({vertexColors:!0,side:$e}));le.castShadow=!0,le.receiveShadow=!0,Wt.add(le);let ie=new Vt(new In(1.62,.38),new He({map:kt(i.sign||"\u062E\u064A\u0645\u0629 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",512,128,64),emissive:"#3B2410",emissiveIntensity:.25}));ie.position.set(0,2.66,-2.8+1.29),Wt.add(ie);let Ct=new Be,Kt=new Vt(new we(.07,.07,.16,8),new wn({color:"#FFD36B"})),xe=new ii(new Qn({map:g,color:"#FFC14D",transparent:!0,opacity:.75,depthWrite:!1,blending:ei}));xe.scale.setScalar(.9),Ct.add(Kt,xe),Ct.position.set(0+1.68,1.72,-2.8+2.55),Wt.add(Ct),ue.lantern=Ct;let Te=pe=>new wn({color:pe,transparent:!0,opacity:.9,depthWrite:!1,blending:ei});[["#FF5A1F",.2,.55,0],["#FF9A2E",.15,.45,.07],["#FFE07A",.09,.3,-.05]].forEach(([pe,Ce,Qe,Mn],pn)=>{let Ne=new Vt(new Nn(Ce,Qe,10,1,!0),Te(pe));Ne.position.set(I.x+Mn,.12+Qe/2,I.z-Mn),Ne.userData={h0:Qe,i:pn},Wt.add(Ne),ue.flames.push(Ne)});let be=new ii(new Qn({map:g,color:"#FF8A2E",transparent:!0,opacity:.6,depthWrite:!1,blending:ei}));be.position.set(I.x,.45,I.z),be.scale.setScalar(1.8),Wt.add(be),ue.glows.push(be);let We=new Be,fe=new Vt(new ti([new At(.001,0),new At(.1,0),new At(.115,.02),new At(.1,.09),new At(.06,.14),new At(.045,.2),new At(.06,.24),new At(.075,.26),new At(.04,.3),new At(.012,.34),new At(.02,.36),new At(.001,.37)],20),ce);We.add(fe),We.position.set(I.x-.75,.12,I.z+.35),Wt.add(We);let an=wi(256,160,(pe,Ce,Qe)=>{pe.fillStyle="#8E1B26",pe.fillRect(0,0,Ce,Qe),pe.fillStyle="#1F2F5C",pe.fillRect(10,10,Ce-20,Qe-20),pe.fillStyle="#8E1B26",pe.fillRect(20,20,Ce-40,Qe-40),pe.strokeStyle="#E8C170",pe.lineWidth=3,pe.strokeRect(16,16,Ce-32,Qe-32);let Mn=(pn,Ne,_n,Zn)=>{pe.fillStyle=Zn,pe.beginPath(),pe.moveTo(pn,Ne-_n),pe.lineTo(pn+_n*1.5,Ne),pe.lineTo(pn,Ne+_n),pe.lineTo(pn-_n*1.5,Ne),pe.closePath(),pe.fill()};Mn(Ce/2,Qe/2,44,"#1F2F5C"),Mn(Ce/2,Qe/2,30,"#E8C170"),Mn(Ce/2,Qe/2,16,"#8E1B26"),Mn(Ce/2,Qe/2,6,"#F4EFE6")}),Ve=new Vt(new In(2,1.25),new He({map:an}));Ve.rotation.x=-Math.PI/2,Ve.rotation.z=.04,Ve.position.set(0-.2,.02,-2.8+1.9),Ve.receiveShadow=!0,Wt.add(Ve)}let Zt=new Be;{let E=new Vt(new uo(.95,1.18,48),new wn({color:"#FFD23F",transparent:!0,opacity:.9,depthWrite:!1,side:$e}));E.rotation.x=-Math.PI/2,E.position.y=.03;let O=new Vt(new Wn(.95,40),new wn({color:"#FFE38A",transparent:!0,opacity:.25,depthWrite:!1}));O.rotation.x=-Math.PI/2,O.position.y=.025;let I=new Vt(new Nn(.2,.42,4),new Xn({color:"#FFB703",emissive:"#FF8A00",emissiveIntensity:.6,shininess:80}));I.rotation.x=Math.PI,I.position.y=1.9,Zt.add(E,O,I),Zt.userData={ring:E,arrow:I},Zt.visible=!1,a.add(Zt)}function te(E){let O=E==="wolf",I=new Be,R=new Be;I.add(R);let J=Xe(O?"#7E8088":"#4E3626",{shininess:8}),it=Xe(O?"#C9CACF":"#6E5038",{shininess:8}),vt=Xe(O?"#3E4048":"#2B1D12",{shininess:20}),Lt=O?.95:1,_=O?.72:.62,F=O?.22:.33,X=new Vt(new Ke(1,22,14),J);X.scale.set(Lt/2,F,F*(O?.85:.9)),X.position.y=_,R.add(X);let k=new Vt(new Ke(1,16,10),it);if(k.scale.set(Lt/2.3,F*.6,F*.75),k.position.set(0,_-F*.4,0),R.add(k),!O){let ie=new Vt(new ze(Lt*.8,.12,.08),vt);ie.position.set(0,_+F*.95,0),R.add(ie)}let N=new Be;N.position.set(Lt/2+.05,_+(O?.16:0),0),R.add(N);let ut=new Vt(new Ke(O?.16:.2,16,12),J);ut.scale.set(1.2,.95,.9),N.add(ut);let Et=new Vt(new we(O?.05:.09,O?.09:.13,O?.26:.22,10),O?it:J);Et.rotation.z=-Math.PI/2,Et.position.set(O?.24:.25,-.04,0),N.add(Et);let ot=new Vt(new Ke(O?.035:.07,10,8),vt);ot.position.set(O?.37:.36,-.03,0),O||ot.scale.set(.5,1,1.1),N.add(ot);for(let ie of[-1,1]){let Ct=new Vt(new Ke(.025,8,6),new wn({color:O?"#F2C14E":"#1A0E08"}));Ct.position.set(.12,.06,ie*.09),N.add(Ct);let Kt=new Vt(new Nn(O?.06:.05,O?.16:.1,6),J);if(Kt.position.set(-.02,O?.17:.15,ie*.08),Kt.rotation.set(ie*.25,0,O?-.1:.4),N.add(Kt),!O){let xe=new Vt(new Nn(.018,.12,6),Xe("#F4EFE6"));xe.position.set(.36,-.04,ie*.08),xe.rotation.z=.6,N.add(xe)}}let Mt=new Be;Mt.position.set(-Lt/2,_+.05,0),R.add(Mt);let Qt=new Vt(O?new Bi(.06,.36,4,8):new we(.015,.02,.18,6),J);Qt.position.y=O?-.2:-.09,Mt.add(Qt),Mt.rotation.z=O?.9:.4;let le=[];for(let[ie,Ct]of[[Lt*.33,1],[-Lt*.33,0]])for(let Kt of[-1,1]){let xe=new Be;xe.position.set(ie,_-F*.4,Kt*F*.55),R.add(xe);let Te=new Vt(new we(.045,.06,(_-F*.4)*.55,8),J);Te.position.y=-((_-F*.4)*.55)/2,xe.add(Te);let be=new Be;be.position.y=-(_-F*.4)*.55,xe.add(be);let We=new Vt(new we(.03,.04,(_-F*.4)*.45,8),O?J:vt);We.position.y=-((_-F*.4)*.45)/2,be.add(We),le.push({hip:xe,knee:be,front:Ct,s:Kt})}return yr(I),a.add(I),I.scale.setScalar(1.15),{root:I,body:R,head:N,tail:Mt,legs:le,yaw:0}}let H=e.beasts.map(E=>({e:E,m:te(E.kind)})),Ee=(()=>{let E=new Be,O=new Be;E.add(O);let I=Xe("#D9A066",{shininess:18}),R=Xe("#ECCB9C",{shininess:18}),J=Xe("#3B2A1A",{shininess:40}),it=[[-.56,0],[-.54,.1],[-.48,.17],[-.36,.2],[-.18,.18],[0,.185],[.18,.21],[.32,.215],[.44,.18],[.53,.11],[.57,0]],vt=new ti(it.map(([ie,Ct])=>new At(Ct,ie)),36);{let ie=vt.attributes.position;for(let Ct=0;Ct<ie.count;Ct++){let Kt=ie.getX(Ct),xe=ie.getY(Ct),Te=ie.getZ(Ct),be=Math.exp(-(((xe+.1)/.22)**2));Kt<0&&(Kt*=1-be*.28),ie.setXYZ(Ct,xe,-Kt*(Kt<0?.95:1.05),Te*.82)}vt.computeVertexNormals()}vt=Yt(vt,(ie,Ct,Kt)=>{let xe=Kt/.21;xe<-.45?ie.set("#FFF6E8"):xe<-.15?ke(ie,"#6A3F1F","#8A5528",(xe+.45)/.3):ke(ie,"#D9A066","#C58A50",(xe-.3)*1.5),Ct<-.46&&xe<.55&&ie.set("#FFF6E8")});let Lt=new Vt(vt,Xe("#FFFFFF",{vertexColors:!0,shininess:22}));Lt.position.y=.8,O.add(Lt);let _=new Be;_.position.set(-.56,.86,0);let F=new Vt(new Bi(.025,.1,3,6),Xe("#2B1D12"));F.position.y=-.06,_.add(F),_.rotation.z=.5,O.add(_);let X=new Be;X.position.set(.42,.88,0),O.add(X);let k=new Vt(new we(.055,.1,.5,14),I);k.position.y=.23,k.scale.z=.85,X.add(k);let N=new Vt(new we(.036,.06,.42,10),Xe("#FFF6E8"));N.position.set(.04,.21,0),N.rotation.z=-.08,X.add(N),X.rotation.z=-.6;let ut=new Be;ut.position.set(0,.49,0),ut.scale.setScalar(1.12),X.add(ut);let Et=new Vt(new Ke(.11,24,16),I);Et.scale.set(1.35,.9,.82),ut.add(Et);let ot=new Vt(new Ke(.075,18,12),R);ot.position.set(.14,-.045,0),ot.scale.set(1.25,.8,.85),ut.add(ot);let Mt=new Vt(new Ke(.03,10,8),J);Mt.position.set(.225,-.035,0),ut.add(Mt);for(let ie of[-1,1]){let Ct=new Vt(new Ke(.026,12,10),Xe("#120C08",{shininess:160,specular:"#FFFFFF"}));Ct.position.set(.035,.035,ie*.083),ut.add(Ct);let Kt=new Vt(new Ke(.07,12,8),I);Kt.scale.set(.45,1.25,.25),Kt.position.set(-.08,.1,ie*.08),Kt.rotation.set(ie*.6,0,.6),ut.add(Kt);let xe=new di([new Y(-.02,.07,ie*.035),new Y(-.09,.22,ie*.07),new Y(-.07,.38,ie*.085),new Y(0,.47,ie*.06)]),Te=new ts(xe,18,.019,7);{let be=Te.attributes.position,We=8;for(let fe=0;fe<=18;fe++){let an=xe.getPointAt(fe/18),Ve=1-fe/18*.7;for(let pe=0;pe<We;pe++){let Ce=fe*We+pe;be.setXYZ(Ce,an.x+(be.getX(Ce)-an.x)*Ve,an.y+(be.getY(Ce)-an.y)*Ve,an.z+(be.getZ(Ce)-an.z)*Ve)}}Te.computeVertexNormals()}ut.add(new Vt(Yt(Te,(be,We,fe)=>be.set(Math.floor(fe*55)%2?"#3B2A1A":"#5A4330")),Xe("#FFFFFF",{vertexColors:!0,shininess:50})))}let Qt=new vn;Qt.position.set(0,.38,0),X.add(Qt);let le=[];for(let[ie,Ct]of[[.34,1],[-.38,0]])for(let Kt of[-1,1]){let xe=new Be;xe.position.set(ie,.76,Kt*.09),O.add(xe);let Te=new Vt(new Ke(Ct?.075:.1,12,10),I);Te.scale.set(Ct?1.1:1.15,Ct?1.7:1.6,Ct?.6:.55),Te.position.set(0,Ct?-.05:-.07,0),xe.add(Te);let be=new Vt(new we(Ct?.026:.03,Ct?.04:.055,.36,10),I);be.position.y=-.2,xe.add(be);let We=new Be;We.position.y=-.38,xe.add(We),We.add(new Vt(new Ke(.024,8,6),R));let fe=new Vt(new we(.014,.02,.34,8),R);fe.position.y=-.17,We.add(fe);let an=new Vt(new we(.017,.024,.045,8),Xe("#20150D",{shininess:60}));an.position.y=-.355,We.add(an),le.push({hip:xe,knee:We,front:Ct,s:Kt})}return yr(E),a.add(E),{root:E,body:O,neck:X,head:ut,tail:_,legs:le,collar:Qt,yaw:-.25,neckA:-.6}})(),tt=_s();a.add(tt.root);let Z=null,st=1.15,ne=1.6;function Nt(E){if(!(Z&&Z.id===E.id)){if(Z)for(let O of[Z.root,Z.chute,Z.drop,Z.rope])a.remove(O);Z=pf(E,g),Z.root.scale.set(st,ne,st),a.add(Z.root,Z.chute,Z.drop,Z.rope),Z.turn=0,Z.blink=0,Z.nextBlink=2}}function $t(){let E=o.vq.camp;Wt.visible=!1,Wt.position.set(r.x+E.x,r.VF+E.base,r.z+E.z),Wt.rotation.y=E.rot,Zt.position.set(o.vq.zoneW.x,t.H(o.vq.zoneW.x,o.vq.zoneW.z),o.vq.zoneW.z),tt.root.rotation.y=E.rot,tt.yaw=E.rot}let U=[],M=[];{let E=new en;E.setAttribute("position",new tn(new Float32Array([0,0,0,.9,0,-.25,.9,0,.25]),3)),E.computeVertexNormals();let O=new wn({color:"#34406A",side:$e});for(let it=0;it<9;it++){let vt=new Be,Lt=new Vt(E,O),_=new Vt(E,O);_.scale.x=-1,vt.add(Lt,_);let F=it<5;vt.userData={ph:d()*6,sp:.25+d()*.2,y:F?r.VF+26+d()*14:70+d()*40,cx:F?r.x+15+d()*90:(d()-.5)*300,cz:F?r.z+(d()-.5)*20:(d()-.5)*300,rad:10+d()*18,l:Lt,r:_},U.push(vt),a.add(vt)}let I=new vi;I.moveTo(0,0),I.bezierCurveTo(.05,.1,.16,.12,.15,.02),I.bezierCurveTo(.16,-.05,.08,-.1,0,-.02);let R=new ji(I,6),J=["#FF8FD1","#FFD23F","#8FD6FF","#FFFFFF","#FF9E5E","#B28DFF"];for(let it=0;it<22;it++){let vt=new He({color:J[it%J.length],side:$e,emissive:J[it%J.length],emissiveIntensity:.25}),Lt=new Be,_=new Vt(R,vt),F=new Vt(R,vt);F.scale.x=-1,Lt.add(_,F),Lt.userData={l:_,r:F,ax:r.x+6+d()*108,az:r.z+(d()-.5)*16,ph:d()*6},M.push(Lt),a.add(Lt)}}let Q={yaw:0,pitch:.26,dist:5.6,init:!1,tgt:new Y,pos:new Y,scopeYaw:0,scopePitch:-.38,effPitch:null,effDist:null},Ot=new Y,wt=new Y;function Gt(E){let O=o.hero;if(!O)return;if(o.scope){let Et=s.x+lt+4.75,ot=St+1.45,Mt=s.z,Qt=Q.scopeYaw,le=Q.scopePitch;Q.pos.set(Et,ot,Mt),Q.tgt.set(Et+Math.cos(Qt)*100*Math.cos(le),ot+Math.sin(le)*100,Mt+Math.sin(Qt)*100*Math.cos(le));return}let I=o.focus,R=O.mode==="lift"||O.mode==="carry",J=O.mode==="glide";Ot.set(I&&I.x!=null?I.x:O.x,O.y+(R||J?.9:1.6),I&&I.z!=null?I.z:O.z),I&&(Q.yaw=Ln(Q.yaw,I.yaw,2.2,E)),O.mode==="carry"&&(Q.yaw=Ln(Q.yaw,Math.atan2(O.z-Q.pos.z,O.x-Q.pos.x),1.5,E));let it=I?I.dist:O.mode==="carry"?11:R?7:J?9:o.summit?6.8:6.3;Q.init||(Q.tgt.copy(Ot),Q.dist=it,Q.effPitch=null,Q.effDist=null,Q.init=!0);let vt=O.mode==="faint"?2:R?6:14;Q.tgt.x=sn(Q.tgt.x,Ot.x,vt,E),Q.tgt.z=sn(Q.tgt.z,Ot.z,vt,E),Q.tgt.y=sn(Q.tgt.y,Ot.y,O.air&&!R&&!J?6:10,E),Q.dist=sn(Q.dist,it,3,E);let Lt=(Et,ot)=>wt.set(Q.tgt.x-Math.cos(Q.yaw)*Math.cos(ot)*Et,Q.tgt.y+Math.sin(ot)*Et,Q.tgt.z-Math.sin(Q.yaw)*Math.cos(ot)*Et),_="",F=(Et,ot)=>{_="";for(let Mt=1;Mt<=8;Mt++){let Qt=Mt/8;Lt(Et*Qt,ot);let le=t.H(wt.x,wt.z);if(wt.y<le+.4||wt.y-.85*(1-Qt)<le+.2)return _="terr",Qt;if(_="canopy",!R&&t.tallNear(wt.x,wt.z,ie=>{let Ct=wt.x-ie.x,Kt=wt.z-ie.z,xe=Ct*Ct+Kt*Kt,Te=ie.r*(ie.tree?3.4:1.2);return Mt>=2&&!o.summit&&xe<Te*Te&&wt.y>le+1.9&&wt.y<le+9}))return Qt}return _="",0},X=R?.35:J?Math.max(Q.pitch,.42):Q.pitch,k=Q.dist,N=F(k,X);if(N&&_==="canopy"){let Et=Math.min(X,.04),ot=F(k,Et);(!ot||ot>N)&&(X=Et,N=ot)}else if(N)for(let Et of[.3,.6]){let ot=Math.min(X+Et,1.05),Mt=F(k,ot);if((!Mt||Mt>N)&&(X=ot,N=Mt),!N)break}N&&(k=Math.max(1.8,k*(N-1/8))),Q.effPitch=Q.effPitch==null?X:sn(Q.effPitch,X,X<Q.effPitch?8:2.5,E),Q.effDist=Q.effDist==null?k:sn(Q.effDist,k,k<Q.effDist?10:2.5,E),Lt(Math.min(Q.effDist,k+.6),Q.effPitch),t.tallNear(wt.x,wt.z,Et=>{let ot=wt.x-Et.x,Mt=wt.z-Et.z,Qt=ot*ot+Mt*Mt,le=Et.r+.35;if(Qt<le*le){let ie=Math.sqrt(Qt)||.01;wt.x=Et.x+ot/ie*le,wt.z=Et.z+Mt/ie*le}return!1});let ut=t.H(wt.x,wt.z)+.4;wt.y<ut&&(wt.y=ut),Q.pos.copy(wt)}let ae=()=>(Q.yaw*180/Math.PI%360+360)%360,Bt=0,Ht=-1,de=0,Se=0,q=2,zt=390,jt=844,he=new vn;he.rotation.order="YXZ";let ge=new Y,Me=new Y;function Fe(E,O,I){zt=E,jt=O,q=I,n.setPixelRatio(I),n.setSize(E,O,!1),c.aspect=E/O,c.updateProjectionMatrix()}let re=E=>Math.PI/2-E;function qe(E,O){let I=o.hero,R=Z,J=I.mode==="walk"&&!I.air,it=J?Math.abs(Math.sin(I.hopPh))*(I.run?.17:.08):0;R.root.position.set(I.x,I.y+it,I.z),R.turn=Ln(R.turn,re(I.face),14,O),R.root.rotation.y=R.turn;let vt=I.mode==="faint";R.inner.rotation.z=vt?-Math.PI/2*Math.min(1,I.faintT*4):-I.rot;let Lt=I.landT>0?I.landT*2.4:0;I.air&&I.mode==="walk"&&(Lt=-.12),J&&I.speed>.3&&(Lt+=(1-Math.abs(Math.sin(I.hopPh)))*.22-.07),R.inner.scale.set(1+.2*Lt,1-.22*Lt,1+.2*Lt),R.inner.position.y=.55*(1-.22*Lt);for(let[k,N]of R.feet.entries())N.position.y=-.49+(J&&I.speed>.3?Math.max(0,Math.sin(I.hopPh*2+k*Math.PI))*.06:0);let _=I.mode!=="walk"&&I.mode!=="glide"||I.stun>0||I.air&&I.vy<-7||o.wind>.5;R.nextBlink-=O,R.nextBlink<0&&(R.blink=.14,R.nextBlink=2.5+Math.random()*2.5),R.blink=Math.max(0,R.blink-O);for(let k of R.eyes)k.scale.set(_?1.08:1,_?1.15:R.blink>0||vt?.12:1,1);for(let k of R.pupils)k.scale.setScalar(_?.72:1);R.smile.visible=!_,R.ooh.visible=_,R.acc.userData.star&&(R.acc.userData.star.rotation.y=E*2);for(let k of[-1,1]){let N=R.acc.userData["tail"+k];N&&(N.rotation.x=.5+Math.sin(E*12+k)*.25)}if(R.fire){R.bodyMat.emissiveIntensity=.5+Math.sin(E*13)*.1;for(let k of R.flames)k.scale.set(1,.8+Math.sin(E*14+k.userData.ph*1.7)*.25,1)}let F=R.chute;if(F.visible=I.chute>.01,F.visible){F.position.copy(R.root.position),F.rotation.y=R.root.rotation.y;let k=I.chute,N=k<1?Re(.15,1,k)+Math.sin(k*Math.PI)*.12:1;R.canopyHolder.scale.set(N,Re(.4,1,k),N),R.canopyHolder.position.y=Re(1,2.25,k),F.rotation.z=-(Math.hypot(I.vx,I.vz)*.05)+Math.sin(E*1.5)*.05,F.rotation.x=Math.sin(E*1.1)*.05;let ut=R.lines.geometry.attributes.position,Et=R.canopyHolder.position.y,ot=1.7*Math.sin(Math.PI*.42)*N,Mt=Et+1.7*Math.cos(Math.PI*.42)*.62*Re(.4,1,k);for(let Qt=0;Qt<10;Qt++){let le=Qt/10*Le,ie=Qt%2?.22:-.22;ut.setXYZ(Qt*2,Math.cos(le)*ot,Mt,Math.sin(le)*ot),ut.setXYZ(Qt*2+1,ie,.85,0)}ut.needsUpdate=!0}let X=o.drop;if(R.drop.visible=!!(X&&X.t<2.4),R.drop.visible){let k=Ie(1-X.t*1.2,.1,1);R.drop.position.set(X.x,t.H(X.x,X.z)+.02,X.z),R.drop.scale.set(1.05,.62*k,1.05),R.drop.material.opacity=Ie(1-(X.t-1.4),0,1)}}function ye(E,O){for(let{e:I,m:R}of H){let J=(I.x-c.position.x)**2+(I.z-c.position.z)**2>19600;if(R.root.visible=!J,J)continue;let it=I.speed>.3,vt=I.state==="chase"||I.state==="charge";R.root.position.set(I.x,I.y,I.z),R.yaw=Ln(R.yaw,-I.face,10,O),R.root.rotation.y=R.yaw,R.body.position.y=it?Math.abs(Math.sin(I.ph))*(vt?.06:.02):0,R.head.rotation.z=I.state==="notice"?-.25+Math.sin(E*20)*.04:it?-.1:Math.sin(E*1.3)*.15-.2,R.tail.rotation.z=(I.kind==="wolf"?.9:.4)+(vt?.5:0)+Math.sin(E*(vt?14:3))*.15;for(let Lt of R.legs){let _=Lt.front?Lt.s>0?0:Math.PI:(Lt.s>0?Math.PI:0)+(vt?.6:0);it?(Lt.hip.rotation.z=Math.sin(I.ph+_)*(vt?.7:.4),Lt.knee.rotation.z=(Lt.front?-1:1)*Math.max(0,-Math.cos(I.ph+_))*.5):(Lt.hip.rotation.z=sn(Lt.hip.rotation.z,0,8,O),Lt.knee.rotation.z=sn(Lt.knee.rotation.z,0,8,O))}}}function me(E,O){let I=e.gz,R=Ee,J=I.state,it=Math.hypot(I.vx,I.vz)>.25;if(R.root.visible=(I.x-c.position.x)**2+(I.z-c.position.z)**2<260*260,!R.root.visible)return;let vt=J==="flee"||J==="leap",Lt=J==="tired";R.root.position.set(I.x,I.y,I.z),R.body.position.y=it?Math.abs(Math.sin(I.ph))*(vt?.07:.025):Lt?Math.sin(E*9)*.008:0,R.yaw=Ln(R.yaw,-I.face,vt?14:8,O),R.root.rotation.y=R.yaw,R.body.rotation.z=vt?Math.sin(I.ph*2)*.05:0;let _=J==="graze"||J==="pen"&&!it;R.neckA=sn(R.neckA,_?-2.05:Lt?-1.15:vt?-.95:J==="alert"||J==="look"||J==="cornered"?-.32:-.6,_?3:7,O),R.neck.rotation.z=R.neckA,R.head.rotation.z=_?.5+Math.sin(E*7)*.08:J==="alert"||J==="look"?.2:.35,R.head.rotation.y=J==="look"||J==="alert"||J==="cornered"?Math.sin(E*1.6)*.25:0,R.tail.rotation.z=.5+(J==="alert"||vt?.9:Math.sin(E*3)*.2);let F=vt?.6:Lt?.28:.36,X=J==="leap";for(let k of R.legs){let N=k.front?k.s>0?0:Math.PI:(k.s>0?Math.PI:0)+(vt?.6:0);if(X){k.hip.rotation.z=k.front?.9:-.9,k.knee.rotation.z=k.front?-1.2:1.1;continue}if(it){let ut=Math.sin(I.ph+N);k.hip.rotation.z=ut*F,k.knee.rotation.z=(k.front?-1:1)*Math.max(0,-Math.cos(I.ph+N))*F*1.1}else k.hip.rotation.z=sn(k.hip.rotation.z,0,8,O),k.knee.rotation.z=sn(k.knee.rotation.z,0,8,O)}}function je(E,O,I){let R=tt,J=o.hero,it=o.vq,vt=it.camp,Lt=J.x-it.merW.x,_=J.z-it.merW.z,F=Math.hypot(Lt,_);if(R.root.visible=F<200,!R.root.visible)return;let X=F<16||!!I,k=X?Math.atan2(Lt,_):vt.rot+.15*Math.sin(E*.3);o.focus&&o.focus.talk&&(k=vt.rot+Ie(Fn(vt.rot,Math.atan2(Lt,_)),-.7,.7)),R.yaw=Ln(R.yaw,k,3,O),R.root.rotation.y=R.yaw,R.root.position.set(it.merW.x,r.VF+vt.base,it.merW.z),R.root.scale.y=1+Math.sin(E*1.7)*.007;let N=!!(I&&I.who==="merchant"&&I.shown<[...I.text].length);R.mouth.scale.y=N?.25+Math.abs(Math.sin(E*15))*.9:.3,R.head.rotation.x=N?Math.sin(E*5)*.05:0;let[ut,Et]=R.arms;if(it.delivered){for(let ot of R.arms)ot.sh.rotation.z=sn(ot.sh.rotation.z,ot.s*2.5,6,O),ot.el.rotation.x=sn(ot.el.rotation.x,-.3+Math.sin(E*9+ot.s)*.3,8,O);R.root.position.y=r.VF+vt.base+Math.abs(Math.sin(E*6))*.06*(o.focus?1:0)}else if(it.caught&&X)Et.sh.rotation.z=sn(Et.sh.rotation.z,1.35,5,O),Et.el.rotation.x=sn(Et.el.rotation.x,0,5,O),Et.sh.rotation.x=sn(Et.sh.rotation.x,-.2,5,O),ut.sh.rotation.z=sn(ut.sh.rotation.z,-.12,5,O);else if(X&&F>2.5)Et.sh.rotation.z=sn(Et.sh.rotation.z,2.55,5,O),Et.el.rotation.x=sn(Et.el.rotation.x,0,5,O),Et.el.rotation.z=Math.sin(E*8)*.45,Et.sh.rotation.x=0,ut.sh.rotation.z=sn(ut.sh.rotation.z,-.12,5,O);else for(let ot of R.arms)ot.sh.rotation.z=sn(ot.sh.rotation.z,ot.s*.12,4,O),ot.el.rotation.z=sn(ot.el.rotation.z,0,4,O),ot.el.rotation.x=sn(ot.el.rotation.x,-.25,4,O),ot.sh.rotation.x=0}function G(){let E=Z.rope;if(E.visible=o.vq.caught&&!o.vq.delivered&&Ee.root.visible,!E.visible)return;Z.root.updateMatrixWorld(),Ee.root.updateMatrixWorld();let O=o.hero,I=ge.set(O.x-Math.cos(O.face)*.3,Z.root.position.y+.8,O.z-Math.sin(O.face)*.3),R=Ee.collar.getWorldPosition(Me),J=I.clone().lerp(R,.5);J.y=Math.min(I.y,R.y)-.25,E.geometry.dispose(),E.geometry=new ts(new Cs(I.clone(),J,R.clone()),18,.016,5)}function rt(E,O){let I=o.wind,R=pt.flag.geometry.attributes.position,J=pt.flagBase;for(let N=0;N<R.count;N++){let ut=J[N*3],Et=J[N*3+1],ot=ut/3.2;R.setXYZ(N,ut*(1-I*.05),Et-ot*ot*.25*(1-I),Math.sin(E*(4+I*12)-ut*(1.6+I*1.5))*ot*(.18+I*.42)+Math.sin(E*7+Et*3)*.04*ot)}R.needsUpdate=!0,pt.flag.geometry.computeVertexNormals(),pt.flag.rotation.y=-.3*I;let it=pt.bell;it.v+=(-it.swing*18-it.v*1.4)*O,it.swing+=it.v*O,it.g.rotation.x=it.swing+I*.25*Math.sin(E*6);for(let N of pt.lanterns)N.rotation.z=Math.sin(E*(1.6+I*8)+N.position.x)*(.06+I*.45),N.rotation.x=Math.cos(E*(1.3+I*7))*I*.3;let vt=pt.drops.geometry.attributes.position,Lt=pt.drops.userData.seed;for(let N=0;N<Lt.length;N++){let[ut,Et,ot]=Lt[N],Mt=(E*ot*.9+Et)%1,Qt=.15+Mt*1.6;vt.setXYZ(N,Math.cos(ut)*Qt+I*Mt*3.5,2.35+Math.sin(Mt*Math.PI)*.7-Mt*1.8,Math.sin(ut)*Qt+I*Mt*1.2)}vt.needsUpdate=!0,x.offset.x=E*.03,pt.water.material.normalScale.set(.6+I,.6+I);let _=pt.streaks.geometry.attributes.position,F=pt.streaks.userData.seed;pt.streaks.material.opacity=ve(.15,.8,I)*.55;for(let N=0;N<F.length;N++){let[,ut,Et,ot]=F[N],Mt=(E*ot*(.6+I*1.6)+N*.137)%1,Qt=-30+Mt*60,le=1.5+I*3.5,ie=Et+Math.sin(E*2+N)*.6,Ct=ut+Math.sin(Mt*9+N)*.4;_.setXYZ(N*2,Qt,Ct,ie+Mt*12-6),_.setXYZ(N*2+1,Qt-le,Ct+.05,ie+Mt*12-6-le*.3)}_.needsUpdate=!0;let X=pt.leaves.geometry.attributes.position,k=pt.leaves.userData.seed;pt.leaves.material.opacity=I*.9;for(let N=0;N<k.length;N++){let[ut,Et,ot,Mt]=k[N],Qt=E*(.5+Mt)*(.4+I)%1;X.setXYZ(N,(ut+Qt*70)%60-30,Et*.6+.4+Math.sin(E*3+N)*.5,ot+Math.sin(E+Mt*6)*2+Qt*6)}X.needsUpdate=!0;for(let N of mt){let ut=N.m,[Et,ot]=ut.arms,Mt=1-Math.exp(-6*O);ut.root.scale.y=1+Math.sin(E*1.6+N.base.x)*.006,ut.root.rotation.x=-I*.14+Math.sin(E*9+N.base.x)*I*.03;let Qt=0,le=-.12,ie=-.25,Ct=0,Kt=.12,xe=-.25;if(I>.25&&(Qt=-2.4,le=0,ie=-1.3),N.kind==="seller")Ct=-.5+Math.sin(E*2)*.1,xe=-1.2,N.pour>0&&(N.pour-=O,Ct=-1,xe=-.6);else if(N.kind==="tea"){let Te=Math.max(0,Math.sin(E*.5+N.ph))**8;Ct=-.45-Te*.7,xe=-1.25-Te*.9}else N.kind==="stand"&&(Qt=I>.25?Qt:-.2,Ct=-.15+Math.sin(E*1.1)*.25*(N.talk>0?1:.3),xe=-.6);Et.sh.rotation.x+=(Qt-Et.sh.rotation.x)*Mt,Et.sh.rotation.z+=(le-Et.sh.rotation.z)*Mt,Et.el.rotation.x+=(ie-Et.el.rotation.x)*Mt,ot.sh.rotation.x+=(Ct-ot.sh.rotation.x)*Mt,ot.sh.rotation.z+=(Kt-ot.sh.rotation.z)*Mt,ot.el.rotation.x+=(xe-ot.el.rotation.x)*Mt,ut.mouth.scale.y=N.talk>0?.25+Math.abs(Math.sin(E*15))*.9:.3,N.talk>0&&(N.talk-=O)}}let Ft=-1;function It(E,O={}){let I=performance.now(),R=Bt?Ie((I-Bt)/1e3,0,.1):1/60;Bt=I;let J=Ht>=0?Ie(E-Ht,0,.1):1/60;Ht=E,h.time.value=E,h.wind.value=sn(h.wind.value,o.wind,3,J),Se++,de=de*.97+(R>1/38?1:0)*.03,Se>90&&de>.6&&q>1.01&&(Fe(zt,jt,Math.max(1,q-.25)),de=0,Se=0);let it=o.hero;if(!it||!Z)return;Ft!==o.vq.camp&&($t(),Ft=o.vq.camp),$(O.budget!=null?O.budget:4,it.x,it.z),qe(E,J),ye(E,J),me(E,J),je(E,J,O.dlg),G(),(s.rad(c.position.x,c.position.z)<120||o.scope)&&rt(E,J);let vt=0;for(let Ct=0;Ct<o.coins.length&&vt<S;Ct++){let Kt=o.coins[Ct];Kt.taken||(Kt.x-it.x)**2+(Kt.z-it.z)**2>3600||(he.position.set(Kt.x,Kt.y+Math.sin(E*2+Ct)*.08,Kt.z),he.rotation.set(Math.PI/2,E*3+Ct,0),he.scale.setScalar(1),he.updateMatrix(),j.setMatrixAt(vt++,he.matrix))}j.count=vt,j.instanceMatrix.needsUpdate=!0;for(let[Ct,Kt]of u)Kt.rotation.y=Math.sin(E*2+Kt.position.x)*.3,Kt.material.color.set(o.reached.has(Ct)?"#FFD23F":"#F4F1EA");if(Zt.visible=o.vq.caught&&!o.vq.delivered,Zt.visible){let Ct=.5+.5*Math.sin(E*5);Zt.userData.ring.scale.setScalar(1+Ct*.08),Zt.userData.arrow.position.y=1.9+Ct*.25,Zt.userData.arrow.rotation.y=E*2}for(let Ct of ue.flames){let Kt=.75+Math.sin(E*13+Ct.userData.i*2)*.18;Ct.scale.set(1,Kt,1),Ct.position.y=.12+Ct.userData.h0*Kt/2}for(let Ct of ue.glows)Ct.material.opacity=.5+Math.sin(E*11)*.08;ue.lantern.rotation.z=Math.sin(E*1.6)*.08;let Lt=Math.abs(c.position.x-(r.x+60))<160&&Math.abs(c.position.z-r.z)<90;for(let Ct of M){if(Ct.visible=Lt,!Lt)continue;let Kt=Ct.userData,xe=Kt.ax+Math.sin(E*.45+Kt.ph)*2.2,Te=Kt.az+Math.sin(E*.7+Kt.ph*2)*.9;Ct.position.set(xe,t.H(xe,Te)+.7+Math.sin(E*1.3+Kt.ph)*.35,Te),Ct.rotation.y=Math.cos(E*.45+Kt.ph)>0?-Math.PI/2:Math.PI/2;let be=Math.sin(E*22+Kt.ph)*1.1;Kt.l.rotation.y=be,Kt.r.rotation.y=-be}for(let Ct of U){let Kt=Ct.userData,xe=E*Kt.sp+Kt.ph;Ct.position.set(Kt.cx+Math.cos(xe)*Kt.rad,Kt.y+Math.sin(E+Kt.ph)*.8,Kt.cz+Math.sin(xe)*Kt.rad),Ct.rotation.y=-xe;let Te=Math.sin(E*8+Kt.ph)*.6;Kt.l.rotation.z=Te,Kt.r.rotation.z=-Te}Gt(J);let _=s.rad(it.x,it.z),F=ve(195,170,_)*ve(78,62,it.y),X=ve(50,95,it.y)*ve(200,120,_),k=Math.max(0,c.position.y-t.SEA),N=ve(20,420,k),ut=o.scope?900:Re(Re(320,90,F),900,N),Et=o.scope?6500:Re(Re(3600,1200,F),6200,N);if(a.fog.near=sn(a.fog.near,ut,2,J),a.fog.far=sn(a.fog.far,Et,2,J),pt.scope.visible=!o.scope,c.fov=o.scope?13:62,c.updateProjectionMatrix(),c.position.copy(Q.pos),c.lookAt(Q.tgt),O.shake>0){let Ct=O.shake*.25;c.position.x+=(Math.random()-.5)*Ct,c.position.y+=(Math.random()-.5)*Ct}w.position.copy(c.position);let ot=c.position.x,Mt=c.position.z,Qt=(o.scope?500:0)+ve(40,95,c.position.y)*160;for(let Ct of L){let Kt=(Ct.x-ot)**2+(Ct.z-Mt)**2,xe=Ct.small?Ct.far:Ct.far+Qt,Te=Kt<xe*xe;if(Ct.lo){let be=Kt<Ct.lodAt*Ct.lodAt&&!o.scope;Ct.m.visible=Te&&be,Ct.lo.visible=Te&&!be}else Ct.m.visible=Te}dt.update(E,J,c.position,it,O.budget!=null?O.budget:6);let le=Math.round(it.x/.25)*.25,ie=Math.round(it.z/.25)*.25;m.target.position.set(le,it.y,ie),m.position.set(le+p.x*90,it.y+p.y*90,ie+p.z*90),Ue(it),n.render(a,c)}let qt=new Y,Tt=new At;function Ue(E){let O=h.see.value;if(o.scope||E.mode==="lift"||E.mode==="carry"){O.w=0;return}c.updateMatrixWorld(),qt.set(E.x,E.y+.9,E.z).applyMatrix4(c.matrixWorldInverse);let I=-qt.z;if(I<.3){O.w=0;return}qt.set(E.x,E.y+.9,E.z).project(c),n.getDrawingBufferSize(Tt);let R=1.6/(I*Math.tan(c.fov*Math.PI/360))*(Tt.y/2);O.set((qt.x*.5+.5)*Tt.x,(qt.y*.5+.5)*Tt.y,I,R)}let Ye=new Y;function W(E,O,I){return Ye.set(E,O,I).project(c),{x:(Ye.x+1)/2,y:(1-Ye.y)/2,vis:Ye.z<1&&Ye.z>-1}}function ct(E=160){a.updateMatrixWorld(),h.see.value.w=0;let O=new Y;tt.head.getWorldPosition(O);let I=n.domElement.width,R=n.domElement.height,J=new Hn(28,I/R,.05,1200),it=new Y(Math.sin(tt.root.rotation.y),0,Math.cos(tt.root.rotation.y));J.position.copy(O).addScaledVector(it,1.75).add(new Y(0,.05,0)),J.lookAt(O.x,O.y-.02,O.z),w.position.copy(J.position),m.target.position.copy(O),m.position.set(O.x+p.x*60,O.y+p.y*60,O.z+p.z*60);let vt=[Z&&Z.root.visible,Ee.root.visible];Z&&(Z.root.visible=!1),Ee.root.visible=!1,n.render(a,J),Z&&(Z.root.visible=vt[0]),Ee.root.visible=vt[1];let Lt=document.createElement("canvas");Lt.width=Lt.height=E;let _=Math.min(I,R);return Lt.getContext("2d").drawImage(n.domElement,(I-_)/2,(R-_)/2,_,_,0,0,E,E),Lt.toDataURL("image/jpeg",.9)}return{IV:dt,setSize:Fe,render:It,project:W,heading:ae,cam:Q,portrait:ct,mapShot:(E=1024)=>dt.mapShot(E),buildHi:$,setHero:Nt,pourTea:()=>{for(let E of mt)E.kind==="seller"&&(E.pour=1.4,E.talk=3)},talkNpc:E=>{let O=mt.filter(I=>I.kind===E);O.length&&(O[Math.floor(Math.random()*O.length)].talk=3)},ringBell:()=>{pt.bell.v+=2.4},renderer:n,scene:a,camera:c,U:h,fx:pt,npcs:mt,get pr(){return q},get hiLeft(){return dt.pending()}}}function Af(i,t={}){let e=performance.now(),n=yf(t.map||_f),s=performance.now()-e,r=Sf(n),o=bf({renderer:t.renderer,sign:t.sign},n,r),a=r.S,l=o.cam,c=Math.round(performance.now()-e);function h(m,w={}){o.setHero(m);let g=r.enter(m.id,w);return l.yaw=a.hero.face,l.pitch=.26,l.init=!1,o.IV.warm(a.hero.x,a.hero.z,a.hero.y+3),g}function d(m,w={}){a.scope?(l.scopeYaw=Ie(l.scopeYaw+(w.dyaw||0)*.35,-.9,.9),l.scopePitch=Ie(l.scopePitch+(w.dpitch||0)*-.3,-.75,.2)):(l.yaw+=w.dyaw||0,l.pitch=Ie(l.pitch+(w.dpitch||0),-.3,1.15));let g=w.jx||0,x=w.jy||0,v=Math.cos(l.yaw),A=Math.sin(l.yaw),b={mx:v*x-A*g,mz:A*x+v*g,mag:w.mag||0,jump:!!w.jump,sneak:!!w.sneak},L=r.step(m,b);for(let C of L)Array.isArray(C)&&C[0]==="respawn"&&(l.yaw=a.hero.face,l.init=!1,o.IV.warm(a.hero.x,a.hero.z,a.hero.y+3));return L}function f(m){return m==="scope"?(r.interact("scope"),l.scopeYaw=0,l.scopePitch=-.2,a.scope):m==="tea"?(r.interact("tea"),o.pourTea(),!0):m==="chat"?(o.talkNpc("tea"),!0):m==="bell"?(o.ringBell(),!0):r.interact(m)}return{G:n,sim:r,view:o,S:a,cam:l,enter:h,step:d,interact:f,threats:()=>r.beasts.filter(m=>m.state==="chase"||m.state==="charge"||m.state==="notice").map(m=>({kind:m.kind,x:m.x,y:m.y,z:m.z,state:m.state})),render:o.render,setSize:o.setSize,project:o.project,heading:o.heading,nearInteract:r.nearInteract,skipWait:r.skipWait,objective:r.objective,respawn:r.respawn,mapShot:o.mapShot,portrait:o.portrait,ground:n.H,warm:(m,w,g)=>o.IV.warm(m,w,g),info:{HALF:n.HALF,M:n.M,V:n.V,I:n.I,SEA:n.SEA,rest:n.restPoints,buildMs:c,geoMs:Math.round(s)},renderer:o.renderer,scene:o.scene,camera:o.camera,U:o.U,get pr(){return o.pr}}}return If(F_);})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
