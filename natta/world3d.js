/* نطّة — العالم المفتوح 3D. يتضمن three.js r187 (MIT, © 2010-2026 three.js authors) */
var NattaWorld3D=(()=>{var Yl=Object.defineProperty;var of=Object.getOwnPropertyDescriptor;var af=Object.getOwnPropertyNames;var lf=Object.prototype.hasOwnProperty;var cf=(i,t)=>{for(var e in t)Yl(i,e,{get:t[e],enumerable:!0})},hf=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of af(t))!lf.call(i,s)&&s!==e&&Yl(i,s,{get:()=>t[s],enumerable:!(n=of(t,s))||n.enumerable});return i};var uf=i=>hf(Yl({},"__esModule",{value:!0}),i);var u_={};cf(u_,{createWorld:()=>rf,makeRenderer:()=>Yd,supported:()=>Zd});var qa="188dev";var _u=0,Fc=1,yu=2;var Ms=1,vu=2,ir=3,as=0,Mn=1,Xe=2,Ss=0,sr=1,mi=2,Lc=3,Dc=4,Mu=5;var bs=100,Su=101,bu=102,wu=103,Au=104,Eu=200,Tu=201,Cu=202,Ru=203,Nc=204,Uc=205,Pu=206,Iu=207,Fu=208,Lu=209,Du=210,Nu=211,Uu=212,zu=213,Ou=214,aa=0,la=1,ca=2,qs=3,ha=4,ua=5,da=6,fa=7,ao=0,Bu=1,ku=2,Ci=0,zc=1,Oc=2,Bc=3,lo=4,kc=5,Vc=6,Gc=7;var Hc=300,ws=301,rr=302,Ya=303,Za=304,Ys=1e3,Mi=1001,pa=1002,vn=1003,Vu=1004;var co=1005;var Pn=1006,Ja=1007;var Wi=1008;var On=1009,Wc=1010,Xc=1011,or=1012,$a=1013,gi=1014,ri=1015,xi=1016,Ka=1017,Qa=1018,As=1020,qc=35902,Yc=35899,Zc=1021,Jc=1022,_i=1023,Bi=1026,Xi=1027,ja=1028,tl=1029,ls=1030,el=1031;var nl=1033,ho=33776,uo=33777,fo=33778,po=33779,il=35840,sl=35841,rl=35842,ol=35843,al=36196,ll=37492,cl=37496,hl=37488,ul=37489,mo=37490,dl=37491,fl=37808,pl=37809,ml=37810,gl=37811,xl=37812,_l=37813,yl=37814,vl=37815,Ml=37816,Sl=37817,bl=37818,wl=37819,Al=37820,El=37821,Tl=36492,Cl=36494,Rl=36495,Pl=36283,Il=36284,go=36285,Fl=36286;var Tr=2300,ma=2301,ra=2302,Mc=2303,Sc=2400,bc=2401,wc=2402;var Gu=3200;var xo=0,Hu=1,qi="",Rn="srgb",Cr="srgb-linear",Rr="linear",Ke="srgb";var oa=7680;var Wu=519,Xu=512,qu=513,Yu=514,$c=515,Zu=516,Ju=517,Kc=518,Qc=519,jc=35044;var th="300 es",Qn=2e3,Zs=2001;function df(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}var ff={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};typeof Float16Array<"u"&&(ff.Float16Array=Float16Array);function pf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $u(){let i=Pr("canvas");return i.style.display="block",i}var Fh={},Js=null;function Ir(...i){let t="THREE."+i.shift();Js?Js("log",t,...i):console.log(t,...i)}function Ku(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ve(...i){i=Ku(i);let t="THREE."+i.shift();if(Js)Js("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function be(...i){i=Ku(i);let t="THREE."+i.shift();if(Js)Js("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function wr(...i){let t=i.join(" ");t in Fh||(Fh[t]=!0,ve(...i))}function Qu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ju={[aa]:aa,[ca]:da,[ha]:ha,[qs]:ua,[la]:la,[da]:ca,[fa]:fa,[ua]:qs},bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zl=Math.PI/180,ga=180/Math.PI;function cs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]+"-"+wn[t&255]+wn[t>>8&255]+"-"+wn[t>>16&15|64]+wn[t>>24&255]+"-"+wn[e&63|128]+wn[e>>8&255]+"-"+wn[e>>16&255]+wn[e>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function ke(i,t,e){return Math.max(t,Math.min(e,i))}function mf(i,t){return(i%t+t)%t}function Jl(i,t,e){return(1-e)*i+e*t}function td(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ll(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ed(i,t){if(t.constructor===Float32Array)return i;let e=Ll(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function nd(i,t){if(t.constructor===Float32Array)return i;let e=Ll(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var oh=class oh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ke(this.x,t.x,e.x),this.y=ke(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ke(this.x,t,e),this.y=ke(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};oh.prototype.isVector2=!0;var ct=oh,jn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],w=r[o+3];if(h!==w||l!==f||c!==d||u!==m){let p=l*f+c*d+u*m+h*w;p<0&&(f=-f,d=-d,m=-m,w=-w,p=-p);let g=1-a;if(p<.9995){let b=Math.acos(p),E=Math.sin(b);g=Math.sin(g*b)/E,a=Math.sin(a*b)/E,l=l*g+f*a,c=c*g+d*a,u=u*g+m*a,h=h*g+w*a}else{l=l*g+f*a,c=c*g+d*a,u=u*g+m*a,h=h*g+w*a;let b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+u*h+l*d-c*f,t[e+1]=l*m+u*f+c*h-a*d,t[e+2]=c*m+u*d+a*f-l*h,t[e+3]=u*m-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:ve("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ah=class ah{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ke(this.x,t.x,e.x),this.y=ke(this.y,t.y,e.y),this.z=ke(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ke(this.x,t,e),this.y=ke(this.y,t,e),this.z=ke(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $l.copy(this).projectOnVector(t),this.sub($l)}reflect(t){return this.sub($l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ah.prototype.isVector3=!0;var k=ah,$l=new k,Lh=new jn,lh=class lh{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],w=s[0],p=s[3],g=s[6],b=s[1],E=s[4],A=s[7],I=s[2],C=s[5],y=s[8];return r[0]=o*w+a*b+l*I,r[3]=o*p+a*E+l*C,r[6]=o*g+a*A+l*y,r[1]=c*w+u*b+h*I,r[4]=c*p+u*E+h*C,r[7]=c*g+u*A+h*y,r[2]=f*w+d*b+m*I,r[5]=f*p+d*E+m*C,r[8]=f*g+d*A+m*y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,m=e*h+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/m;return t[0]=h*w,t[1]=(s*c-u*n)*w,t[2]=(a*n-s*o)*w,t[3]=f*w,t[4]=(u*e-s*l)*w,t[5]=(s*r-a*e)*w,t[6]=d*w,t[7]=(n*l-c*e)*w,t[8]=(o*e-n*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return wr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kl.makeScale(t,e)),this}rotate(t){return wr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kl.makeRotation(-t)),this}translate(t,e){return wr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};lh.prototype.isMatrix3=!0;var Re=lh,Kl=new Re,Dh=new Re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nh=new Re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gf(){let i={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ke&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ke&&(s.r=Xs(s.r),s.g=Xs(s.g),s.b=Xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qi?Rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Cr]:{primaries:t,whitePoint:n,transfer:Rr,toXYZ:Dh,fromXYZ:Nh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:t,whitePoint:n,transfer:Ke,toXYZ:Dh,fromXYZ:Nh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),i}var qe=gf();function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ts,xa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ts===void 0&&(Ts=Pr("canvas")),Ts.width=t.width,Ts.height=t.height;let s=Ts.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ts}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Pr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},xf=0,$s=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ql(s[o].image)):r.push(Ql(s[o]))}else r=Ql(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ql(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ve("Texture: Unable to serialize Texture."),{})}var _f=0,jl=new k,In=class i extends bi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Mi,s=Mi,r=Pn,o=Wi,a=_i,l=On,c=i.DEFAULT_ANISOTROPY,u=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=cs(),this.name="",this.source=new $s(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(jl).x}get height(){return this.source.getSize(jl).y}get depth(){return this.source.getSize(jl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ve(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ve(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ys:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ys:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Hc;In.DEFAULT_ANISOTROPY=1;var ch=class ch{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){let e=ke(t.w,-1,1);this.w=2*Math.acos(e);let n=Math.sqrt(1-e*e);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],w=l[2],p=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-w)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+w)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,A=(d+1)/2,I=(g+1)/2,C=(u+f)/4,y=(h+w)/4,_=(m+p)/4;return E>A&&E>I?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=C/n,r=y/n):A>I?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=C/s,r=_/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=y/r,s=_/r),this.set(n,s,r,e),this}let b=Math.sqrt((p-m)*(p-m)+(h-w)*(h-w)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(h-w)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ke(this.x,t.x,e.x),this.y=ke(this.y,t.y,e.y),this.z=ke(this.z,t.z,e.z),this.w=ke(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ke(this.x,t,e),this.y=ke(this.y,t,e),this.z=ke(this.z,t,e),this.w=ke(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ch.prototype.isVector4=!0;var sn=ch,_a=class extends bi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new sn(0,0,t,e),this.scissorTest=!1,this.viewport=new sn(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new In({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++){let o=this.textures[s],a=o.images?o.images[0]:o.image;a.width=t,a.height=e,a.depth=n,o.isData3DTexture!==!0&&(o.isArrayTexture=a.depth>1)}this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new $s(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends _a{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fr=class extends In{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ya=class extends In{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Xa=class Xa{constructor(t,e,n,s,r,o,a,l,c,u,h,f,d,m,w,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,f,d,m,w,p)}set(t,e,n,s,r,o,a,l,c,u,h,f,d,m,w,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=m,g[11]=w,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Cs.setFromMatrixColumn(t,0).length(),r=1/Cs.setFromMatrixColumn(t,1).length(),o=1/Cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,d=o*h,m=a*u,w=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+m*c,e[5]=f-w*c,e[9]=-a*l,e[2]=w-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,m=c*u,w=c*h;e[0]=f+w*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=w+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,m=c*u,w=c*h;e[0]=f-w*a,e[4]=-o*h,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=w-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,d=o*h,m=a*u,w=a*h;e[0]=l*u,e[4]=m*c-d,e[8]=f*c+w,e[1]=l*h,e[5]=w*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,m=a*l,w=a*c;e[0]=l*u,e[4]=w-f*h,e[8]=m*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+m,e[10]=f-w*h}else if(t.order==="XZY"){let f=o*l,d=o*c,m=a*l,w=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+w,e[5]=o*u,e[9]=d*h-m,e[2]=m*h-d,e[6]=a*u,e[10]=w*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yf,t,vf)}lookAt(t,e,n){let s=this.elements;return Vn.subVectors(t,e),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Ki.crossVectors(n,Vn),Ki.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Ki.crossVectors(n,Vn)),Ki.normalize(),Co.crossVectors(Vn,Ki),s[0]=Ki.x,s[4]=Co.x,s[8]=Vn.x,s[1]=Ki.y,s[5]=Co.y,s[9]=Vn.y,s[2]=Ki.z,s[6]=Co.z,s[10]=Vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],w=n[6],p=n[10],g=n[14],b=n[3],E=n[7],A=n[11],I=n[15],C=s[0],y=s[4],_=s[8],R=s[12],T=s[1],B=s[5],q=s[9],U=s[13],$=s[2],D=s[6],O=s[10],z=s[14],it=s[3],nt=s[7],pt=s[11],Ft=s[15];return r[0]=o*C+a*T+l*$+c*it,r[4]=o*y+a*B+l*D+c*nt,r[8]=o*_+a*q+l*O+c*pt,r[12]=o*R+a*U+l*z+c*Ft,r[1]=u*C+h*T+f*$+d*it,r[5]=u*y+h*B+f*D+d*nt,r[9]=u*_+h*q+f*O+d*pt,r[13]=u*R+h*U+f*z+d*Ft,r[2]=m*C+w*T+p*$+g*it,r[6]=m*y+w*B+p*D+g*nt,r[10]=m*_+w*q+p*O+g*pt,r[14]=m*R+w*U+p*z+g*Ft,r[3]=b*C+E*T+A*$+I*it,r[7]=b*y+E*B+A*D+I*nt,r[11]=b*_+E*q+A*O+I*pt,r[15]=b*R+E*U+A*z+I*Ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],m=t[3],w=t[7],p=t[11],g=t[15],b=l*d-c*f,E=a*d-c*h,A=a*f-l*h,I=o*d-c*u,C=o*f-l*u,y=o*h-a*u;return e*(w*b-p*E+g*A)-n*(m*b-p*I+g*C)+s*(m*E-w*I+g*y)-r*(m*A-w*C+p*y)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],m=t[12],w=t[13],p=t[14],g=t[15],b=e*a-n*o,E=e*l-s*o,A=e*c-r*o,I=n*l-s*a,C=n*c-r*a,y=s*c-r*l,_=u*w-h*m,R=u*p-f*m,T=u*g-d*m,B=h*p-f*w,q=h*g-d*w,U=f*g-d*p,$=b*U-E*q+A*B+I*T-C*R+y*_;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/$;return t[0]=(a*U-l*q+c*B)*D,t[1]=(s*q-n*U-r*B)*D,t[2]=(w*y-p*C+g*I)*D,t[3]=(f*C-h*y-d*I)*D,t[4]=(l*T-o*U-c*R)*D,t[5]=(e*U-s*T+r*R)*D,t[6]=(p*A-m*y-g*E)*D,t[7]=(u*y-f*A+d*E)*D,t[8]=(o*q-a*T+c*_)*D,t[9]=(n*T-e*q-r*_)*D,t[10]=(m*C-w*A+g*b)*D,t[11]=(h*A-u*C-d*b)*D,t[12]=(a*R-o*B-l*_)*D,t[13]=(e*B-n*R+s*_)*D,t[14]=(w*E-m*I-p*b)*D,t[15]=(u*I-h*E+f*b)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,m=r*h,w=o*u,p=o*h,g=a*h,b=l*c,E=l*u,A=l*h,I=n.x,C=n.y,y=n.z;return s[0]=(1-(w+g))*I,s[1]=(d+A)*I,s[2]=(m-E)*I,s[3]=0,s[4]=(d-A)*C,s[5]=(1-(f+g))*C,s[6]=(p+b)*C,s[7]=0,s[8]=(m+E)*y,s[9]=(p-b)*y,s[10]=(1-(f+w))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Cs.set(s[0],s[1],s[2]).length(),a=Cs.set(s[4],s[5],s[6]).length(),l=Cs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),li.copy(this);let c=1/o,u=1/a,h=1/l;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=u,li.elements[5]*=u,li.elements[6]*=u,li.elements[8]*=h,li.elements[9]*=h,li.elements[10]*=h,e.setFromRotationMatrix(li),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Qn,l=!1){let c=this.elements,u=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),m,w;if(l)m=r/(o-r),w=o*r/(o-r);else if(a===Qn)m=-(o+r)/(o-r),w=-2*o*r/(o-r);else if(a===Zs)m=-o/(o-r),w=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Qn,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),m,w;if(l)m=1/(o-r),w=o/(o-r);else if(a===Qn)m=-2/(o-r),w=-(o+r)/(o-r);else if(a===Zs)m=-1/(o-r),w=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Xa.prototype.isMatrix4=!0;var Ze=Xa,Cs=new k,li=new Ze,yf=new k(0,0,0),vf=new k(1,1,1),Ki=new k,Co=new k,Vn=new k,Uh=new Ze,zh=new jn,ti=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zh.setFromEuler(this),this.setFromQuaternion(zh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var Lr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Mf=0,Oh=new k,Rs=new jn,Fi=new Ze,Ro=new k,fr=new k,Sf=new k,bf=new jn,Bh=new k(1,0,0),kh=new k(0,1,0),Vh=new k(0,0,1),Gh={type:"added"},wf={type:"removed"},Ps={type:"childadded",child:null},tc={type:"childremoved",child:null},rn=class i extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new ti,n=new jn,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new Re}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.premultiply(Rs),this}rotateX(t){return this.rotateOnAxis(Bh,t)}rotateY(t){return this.rotateOnAxis(kh,t)}rotateZ(t){return this.rotateOnAxis(Vh,t)}translateOnAxis(t,e){return Oh.copy(t).applyQuaternion(this.quaternion),this.position.add(Oh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bh,t)}translateY(t){return this.translateOnAxis(kh,t)}translateZ(t){return this.translateOnAxis(Vh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ro.copy(t):Ro.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(fr,Ro,this.up):Fi.lookAt(Ro,fr,this.up),this.quaternion.setFromRotationMatrix(Fi),s&&(Fi.extractRotation(s.matrixWorld),Rs.setFromRotationMatrix(Fi),this.quaternion.premultiply(Rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gh),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null):be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wf),tc.child=t,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gh),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,t,Sf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,bf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1)===!0&&(n=!0),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}return n}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rn.DEFAULT_UP=new k(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Te=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Af={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let w of t.hand.values()){let p=e.getJointPose(w,n),g=this._getHandJoint(c,w);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Af)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},us={h:0,s:0,l:0};function ec(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var xe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=qe.workingColorSpace){return this.r=t,this.g=e,this.b=n,qe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=qe.workingColorSpace){if(t=mf(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ec(o,r,t+1/3),this.g=ec(o,r,t),this.b=ec(o,r,t-1/3)}return qe.colorSpaceToWorking(this,s),this}setStyle(t,e=Rn){function n(r){r!==void 0&&parseFloat(r)<1&&ve("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ve("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);ve("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Rn){let n=id[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ve("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Rn){return qe.workingToColorSpace(An.copy(this),t),Math.round(ke(An.r*255,0,255))*65536+Math.round(ke(An.g*255,0,255))*256+Math.round(ke(An.b*255,0,255))}getHexString(t=Rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qe.workingColorSpace){qe.workingToColorSpace(An.copy(this),e);let n=An.r,s=An.g,r=An.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=qe.workingColorSpace){return qe.workingToColorSpace(An.copy(this),e),t.r=An.r,t.g=An.g,t.b=An.b,t}getStyle(t=Rn){qe.workingToColorSpace(An.copy(this),t);let e=An.r,n=An.g,s=An.b;return t!==Rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(us),ci.s===0&&(ci.h=us.h),us.s===0&&(us.h=ci.h);let n=Jl(ci.h,us.h,e),s=Jl(ci.s,us.s,e),r=Jl(ci.l,us.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},An=new xe;xe.NAMES=id;var Dr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new xe(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Nr=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},hi=new k,Li=new k,nc=new k,Di=new k,Is=new k,Fs=new k,Hh=new k,ic=new k,sc=new k,rc=new k,oc=new sn,ac=new sn,lc=new sn,zi=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),hi.subVectors(t,e),s.cross(hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){hi.subVectors(s,e),Li.subVectors(n,e),nc.subVectors(t,e);let o=hi.dot(hi),a=hi.dot(Li),l=hi.dot(nc),c=Li.dot(Li),u=Li.dot(nc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return oc.setScalar(0),ac.setScalar(0),lc.setScalar(0),oc.fromBufferAttribute(t,e),ac.fromBufferAttribute(t,n),lc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(oc,r.x),o.addScaledVector(ac,r.y),o.addScaledVector(lc,r.z),o}static isFrontFacing(t,e,n,s){return hi.subVectors(n,e),Li.subVectors(t,e),hi.cross(Li).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hi.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),hi.cross(Li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Is.subVectors(s,n),Fs.subVectors(r,n),ic.subVectors(t,n);let l=Is.dot(ic),c=Fs.dot(ic);if(l<=0&&c<=0)return e.copy(n);sc.subVectors(t,s);let u=Is.dot(sc),h=Fs.dot(sc);if(u>=0&&h<=u)return e.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),e.copy(n).addScaledVector(Is,o);rc.subVectors(t,r);let d=Is.dot(rc),m=Fs.dot(rc);if(m>=0&&d<=m)return e.copy(r);let w=d*c-l*m;if(w<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Fs,a);let p=u*m-d*h;if(p<=0&&h-u>=0&&d-m>=0)return Hh.subVectors(r,s),a=(h-u)/(h-u+(d-m)),e.copy(s).addScaledVector(Hh,a);let g=1/(p+w+f);return o=w*g,a=f*g,e.copy(n).addScaledVector(Is,o).addScaledVector(Fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},wi=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ui.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ui.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ui.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ui):ui.fromBufferAttribute(r,o),ui.applyMatrix4(t.matrixWorld),this.expandByPoint(ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Po.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Po.copy(n.boundingBox)),Po.applyMatrix4(t.matrixWorld),this.union(Po)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ui),ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pr),Io.subVectors(this.max,pr),Ls.subVectors(t.a,pr),Ds.subVectors(t.b,pr),Ns.subVectors(t.c,pr),Qi.subVectors(Ds,Ls),ji.subVectors(Ns,Ds),ds.subVectors(Ls,Ns);let e=[0,-Qi.z,Qi.y,0,-ji.z,ji.y,0,-ds.z,ds.y,Qi.z,0,-Qi.x,ji.z,0,-ji.x,ds.z,0,-ds.x,-Qi.y,Qi.x,0,-ji.y,ji.x,0,-ds.y,ds.x,0];return!cc(e,Ls,Ds,Ns,Io)||(e=[1,0,0,0,1,0,0,0,1],!cc(e,Ls,Ds,Ns,Io))?!1:(Fo.crossVectors(Qi,ji),e=[Fo.x,Fo.y,Fo.z],cc(e,Ls,Ds,Ns,Io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ni=[new k,new k,new k,new k,new k,new k,new k,new k],ui=new k,Po=new wi,Ls=new k,Ds=new k,Ns=new k,Qi=new k,ji=new k,ds=new k,pr=new k,Io=new k,Fo=new k,fs=new k;function cc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){fs.fromArray(i,r);let a=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),l=t.dot(fs),c=e.dot(fs),u=n.dot(fs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var fn=new k,Lo=new ct,Ef=0,Ne=class extends bi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ef++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jc,this.updateRanges=[],this.gpuType=ri,this.version=0,this._normalizationScale=t!==void 0?Ll(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lo.fromBufferAttribute(this,e),Lo.applyMatrix3(t),this.setXY(e,Lo.x,Lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix3(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ed(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):nd(t,this.array)}};var Ur=class extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var zr=class extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ce=class extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}},Tf=new wi,mr=new k,hc=new k,Ai=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Tf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mr.subVectors(t,this.center);let e=mr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(mr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mr.copy(t.center).add(hc)),this.expandByPoint(mr.copy(t.center).sub(hc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Cf=0,Kn=new Ze,uc=new rn,Us=new k,Gn=new wi,gr=new wi,yi=new k,Do=new k,No=new k,Ve=class i extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(df(t)?zr:Ur)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Kn.makeRotationFromQuaternion(t),this.applyMatrix4(Kn),this}rotateX(t){return Kn.makeRotationX(t),this.applyMatrix4(Kn),this}rotateY(t){return Kn.makeRotationY(t),this.applyMatrix4(Kn),this}rotateZ(t){return Kn.makeRotationZ(t),this.applyMatrix4(Kn),this}translate(t,e,n){return Kn.makeTranslation(t,e,n),this.applyMatrix4(Kn),this}scale(t,e,n){return Kn.makeScale(t,e,n),this.applyMatrix4(Kn),this}lookAt(t){return uc.lookAt(t),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ce(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Do.addVectors(this.boundingBox.min,Gn.min),No.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(Do),this.boundingBox.expandByPoint(No)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(Do.addVectors(Gn.min,gr.min),No.addVectors(Gn.max,gr.max),Gn.expandByPoint(Do),Gn.expandByPoint(No)):(Gn.expandByPoint(gr.min),Gn.expandByPoint(gr.max))}Gn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)yi.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(yi));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yi.fromBufferAttribute(a,c),l&&(Us.fromBufferAttribute(t,c),yi.add(Us)),s=Math.max(s,n.distanceToSquared(yi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ne(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)a[R]=new k,l[R]=new k;let u=new k,h=new k,f=new k,d=new ct,m=new ct,w=new ct,p=new k,g=new k;function b(R,T,B){c[R]=c[T]=c[B]=1,u.fromBufferAttribute(n,R),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,B),d.fromBufferAttribute(r,R),m.fromBufferAttribute(r,T),w.fromBufferAttribute(r,B),h.sub(u),f.sub(u),m.sub(d),w.sub(d);let q=1/(m.x*w.y-w.x*m.y);isFinite(q)&&(p.copy(h).multiplyScalar(w.y).addScaledVector(f,-m.y).multiplyScalar(q),g.copy(f).multiplyScalar(m.x).addScaledVector(h,-w.x).multiplyScalar(q),a[R].add(p),a[T].add(p),a[B].add(p),l[R].add(g),l[T].add(g),l[B].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let R=0,T=E.length;R<T;++R){let B=E[R],q=B.start,U=B.count;for(let $=q,D=Math.min(t.count,q+U);$<D;$+=3)b(t.getX($+0),t.getX($+1),t.getX($+2))}let A=new k,I=new k,C=new k,y=new k;function _(R){C.fromBufferAttribute(s,R),y.copy(C);let T=a[R];A.copy(T),A.sub(C.multiplyScalar(C.dot(T))).normalize(),A.lengthSq()===0&&(Math.abs(y.x)<.9?A.set(1,0,0):A.set(0,1,0),A.crossVectors(y,A).normalize()),I.crossVectors(y,T);let q=I.dot(l[R])<0?-1:1;o.setXYZW(R,A.x,A.y,A.z,q)}for(let R=0,T=n.count;R<T;++R)c[R]&&_(R);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,u=new k,h=new k;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),w=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,w),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,w),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(w,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)yi.fromBufferAttribute(t,e),yi.normalize(),t.setXYZ(e,yi.x,yi.y,yi.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let w=0,p=l.length;w<p;w++){a.isInterleavedBufferAttribute?d=l[w]*a.data.stride+a.offset:d=l[w]*u;for(let g=0;g<u;g++)f[m++]=c[d++]}return new Ne(f,u,h)}if(this.index===null)return ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},va=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=jc,this.updateRanges=[],this.version=0,this.uuid=cs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Wh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Wh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Wh(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=cs()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Cn=new k,Or=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Ll(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.applyMatrix4(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.applyNormalMatrix(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.transformDirection(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ir("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ir("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ed(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):nd(t,this.data.array)}},dc=new k,Rf=new k,Pf=new Re,di=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=dc.subVectors(n,e).cross(Rf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(dc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Pf.getNormalMatrix(t),s=this.coplanarPoint(dc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},If=0,ei=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=sr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Uc,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oa,this.stencilZFail=oa,this.stencilZPass=oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ve(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ve(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new xe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new di().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ct().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},fi=class extends ei{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},zs,xr=new k,Os=new k,Bs=new k,ks=new ct,_r=new ct,sd=new Ze,Uo=new k,yr=new k,zo=new k,Xh=new ct,fc=new ct,qh=new ct,Ei=class extends rn{constructor(t=new fi){if(super(),this.isSprite=!0,this.type="Sprite",zs===void 0){zs=new Ve;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new va(e,5);zs.setIndex([0,1,2,0,2,3]),zs.setAttribute("position",new Or(n,3,0,!1)),zs.setAttribute("uv",new Or(n,2,3,!1))}this.geometry=zs,this.material=t,this.center=new ct(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&be('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Os.setFromMatrixScale(this.matrixWorld),sd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Os.multiplyScalar(-Bs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Oo(Uo.set(-.5,-.5,0),Bs,o,Os,s,r),Oo(yr.set(.5,-.5,0),Bs,o,Os,s,r),Oo(zo.set(.5,.5,0),Bs,o,Os,s,r),Xh.set(0,0),fc.set(1,0),qh.set(1,1);let a=t.ray.intersectTriangle(Uo,yr,zo,!1,xr);if(a===null&&(Oo(yr.set(-.5,.5,0),Bs,o,Os,s,r),fc.set(0,1),a=t.ray.intersectTriangle(Uo,zo,yr,!1,xr),a===null))return;let l=t.ray.origin.distanceTo(xr);l<t.near||l>t.far||e.push({distance:l,point:xr.clone(),uv:zi.getInterpolation(xr,Uo,yr,zo,Xh,fc,qh,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this.count=t.count,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Oo(i,t,e,n,s,r){ks.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(_r.x=r*ks.x-s*ks.y,_r.y=s*ks.x+r*ks.y):_r.copy(ks),i.copy(t),i.x+=_r.x,i.y+=_r.y,i.applyMatrix4(sd)}var Ui=new k,pc=new k,Bo=new k,ko=new k,Qs=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ui.copy(this.origin).addScaledVector(this.direction,e),Ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){pc.copy(t).add(e).multiplyScalar(.5),Bo.copy(e).sub(t).normalize(),ko.copy(this.origin).sub(pc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Bo),a=ko.dot(this.direction),l=-ko.dot(Bo),c=ko.lengthSq(),u=Math.abs(1-o*o),h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=r*u,h>=0)if(f>=-m)if(f<=m){let w=1/u;h*=w,f*=w,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(pc).addScaledVector(Bo,f),d}intersectSphere(t,e){if(t.radius<0)return null;Ui.subVectors(t.center,this.origin);let n=Ui.dot(this.direction),s=Ui.dot(Ui)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ui)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=t.x-o.x,f=t.y-o.y,d=t.z-o.z,m=e.x-o.x,w=e.y-o.y,p=e.z-o.z,g=n.x-o.x,b=n.y-o.y,E=n.z-o.z,A=Math.abs(l),I=Math.abs(c),C=Math.abs(u),y,_,R,T,B,q,U,$,D,O,z,it;if(A>=I&&A>=C?(R=l,q=h,D=m,it=g,l>=0?(y=c,_=u,T=f,B=d,U=w,$=p,O=b,z=E):(y=u,_=c,T=d,B=f,U=p,$=w,O=E,z=b)):I>=C?(R=c,q=f,D=w,it=b,c>=0?(y=u,_=l,T=d,B=h,U=p,$=m,O=E,z=g):(y=l,_=u,T=h,B=d,U=m,$=p,O=g,z=E)):(R=u,q=d,D=p,it=E,u>=0?(y=l,_=c,T=h,B=f,U=m,$=w,O=g,z=b):(y=c,_=l,T=f,B=h,U=w,$=m,O=b,z=g)),R===0)return null;let nt=y/R,pt=_/R,Ft=1/R,Ht=T-nt*q,S=B-pt*q,M=U-nt*D,j=$-pt*D,J=O-nt*it,wt=z-pt*it,Et=J*j-wt*M,Lt=Ht*wt-S*J,he=M*S-j*Ht;if(s){if(Et<0||Lt<0||he<0)return null}else if((Et<0||Lt<0||he<0)&&(Et>0||Lt>0||he>0))return null;let $t=Et+Lt+he;if($t===0)return null;let Kt=Ft*(Et*q+Lt*D+he*it);return($t>0?Kt<0:Kt>0)?null:this.at(Kt/$t,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ln=class extends ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Yh=new Ze,ps=new Qs,Vo=new Ai,Zh=new k,Go=new k,Ho=new k,Wo=new k,mc=new k,Xo=new k,Jh=new k,qo=new k,Pt=class extends rn{constructor(t=new Ve,e=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this.count=t.count,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Xo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(mc.fromBufferAttribute(h,t),o?Xo.addScaledVector(mc,u):Xo.addScaledVector(mc.sub(e),u))}e.add(Xo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(r),ps.copy(t.ray).recast(t.near),!(Vo.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Vo,Zh)===null||ps.origin.distanceToSquared(Zh)>(t.far-t.near)**2))&&(Yh.copy(r).invert(),ps.copy(t.ray).applyMatrix4(Yh),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ps)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,w=f.length;m<w;m++){let p=f[m],g=o[p.materialIndex],b=Math.max(p.start,d.start),E=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let A=b,I=E;A<I;A+=3){let C=a.getX(A),y=a.getX(A+1),_=a.getX(A+2);s=Yo(this,g,t,n,c,u,h,C,y,_),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),w=Math.min(a.count,d.start+d.count);for(let p=m,g=w;p<g;p+=3){let b=a.getX(p),E=a.getX(p+1),A=a.getX(p+2);s=Yo(this,o,t,n,c,u,h,b,E,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,w=f.length;m<w;m++){let p=f[m],g=o[p.materialIndex],b=Math.max(p.start,d.start),E=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let A=b,I=E;A<I;A+=3){let C=A,y=A+1,_=A+2;s=Yo(this,g,t,n,c,u,h,C,y,_),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),w=Math.min(l.count,d.start+d.count);for(let p=m,g=w;p<g;p+=3){let b=p,E=p+1,A=p+2;s=Yo(this,o,t,n,c,u,h,b,E,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Ff(i,t,e,n,s,r,o,a){let l;if(t.side===Mn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===as,a),l===null)return null;qo.copy(a),qo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(qo);return c<e.near||c>e.far?null:{distance:c,point:qo.clone(),object:i}}function Yo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Go),i.getVertexPosition(l,Ho),i.getVertexPosition(c,Wo);let u=Ff(i,t,e,n,Go,Ho,Wo,Jh);if(u){let h=new k;zi.getBarycoord(Jh,Go,Ho,Wo,h),s&&(u.uv=zi.getInterpolatedAttribute(s,a,l,c,h,new ct)),r&&(u.uv1=zi.getInterpolatedAttribute(r,a,l,c,h,new ct)),o&&(u.normal=zi.getInterpolatedAttribute(o,a,l,c,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new k,materialIndex:0};zi.getNormal(Go,Ho,Wo,f.normal),u.face=f,u.barycoord=h}return u}var Br=class extends In{constructor(t=null,e=1,n=1,s,r,o,a,l,c=vn,u=vn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kr=class extends Ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Vs=new Ze,$h=new Ze,Zo=[],Kh=new wi,Lf=new Ze,vr=new Pt,Mr=new Ai,es=class extends Pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new kr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Lf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vs),Kh.copy(t.boundingBox).applyMatrix4(Vs),this.boundingBox.union(Kh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Vs),Mr.copy(t.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(Mr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(n),t.ray.intersectsSphere(Mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vs),$h.multiplyMatrices(n,Vs),vr.matrixWorld=$h,vr.raycast(t,Zo);for(let o=0,a=Zo.length;o<a;o++){let l=Zo[o];l.instanceId=r,l.object=this,e.push(l)}Zo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new kr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Br(new Float32Array(s*this.count),s,this.count,ja,ri));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ms=new Ai,Df=new ct(.5,.5),Jo=new k,ns=class{constructor(t=new di,e=new di,n=new di,s=new di,r=new di,o=new di){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],m=r[8],w=r[9],p=r[10],g=r[11],b=r[12],E=r[13],A=r[14],I=r[15];if(s[0].setComponents(c-o,d-u,g-m,I-b).normalize(),s[1].setComponents(c+o,d+u,g+m,I+b).normalize(),s[2].setComponents(c+a,d+h,g+w,I+E).normalize(),s[3].setComponents(c-a,d-h,g-w,I-E).normalize(),n)s[4].setComponents(l,f,p,A).normalize(),s[5].setComponents(c-l,d-f,g-p,I-A).normalize();else if(s[4].setComponents(c-l,d-f,g-p,I-A).normalize(),e===Qn)s[5].setComponents(c+l,d+f,g+p,I+A).normalize();else if(e===Zs)s[5].setComponents(l,f,p,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){ms.center.set(0,0,0);let e=Df.distanceTo(t.center);return ms.radius=.7071067811865476+e,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Jo.x=s.normal.x>0?t.max.x:t.min.x,Jo.y=s.normal.y>0?t.max.y:t.min.y,Jo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Jo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Qh=new Ze,Ma=class i{constructor(){this.coordinateSystem=Qn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Qh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ns),n[s].setFromProjectionMatrix(Qh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ns),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var is=class extends ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Sa=new k,ba=new k,jh=new Ze,Sr=new Qs,$o=new Ai,gc=new k,tu=new k,wa=class extends rn{constructor(t=new Ve,e=new is){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Sa.fromBufferAttribute(e,s-1),ba.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Sa.distanceTo(ba);t.setAttribute("lineDistance",new Ce(n,1))}else ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(s),$o.radius+=r,t.ray.intersectsSphere($o)===!1)return;jh.copy(s).invert(),Sr.copy(t.ray).applyMatrix4(jh);let a=r/s.getMaxScaleOnAxis(),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let w=d,p=m-1;w<p;w+=c){let g=u.getX(w),b=u.getX(w+1),E=Ko(this,t,Sr,l,g,b,w);E&&e.push(E)}if(this.isLineLoop){let w=u.getX(m-1),p=u.getX(d),g=Ko(this,t,Sr,l,w,p,m-1);g&&e.push(g)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let w=d,p=m-1;w<p;w+=c){let g=Ko(this,t,Sr,l,w,w+1,w);g&&e.push(g)}if(this.isLineLoop){let w=Ko(this,t,Sr,l,m-1,d,m-1);w&&e.push(w)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ko(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Sa.fromBufferAttribute(a,s),ba.fromBufferAttribute(a,r),e.distanceSqToSegment(Sa,ba,gc,tu)>n)return;gc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(gc);if(!(c<t.near||c>t.far))return{distance:c,point:tu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var eu=new k,nu=new k,gs=class extends wa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)eu.fromBufferAttribute(e,s),nu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+eu.distanceTo(nu);t.setAttribute("lineDistance",new Ce(n,1))}else ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var xs=class extends ei{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},iu=new Ze,Ac=new Qs,Qo=new Ai,jo=new k,js=class extends rn{constructor(t=new Ve,e=new xs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(s),Qo.radius+=r,t.ray.intersectsSphere(Qo)===!1)return;iu.copy(s).invert(),Ac.copy(t.ray).applyMatrix4(iu);let a=r/s.getMaxScaleOnAxis(),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,w=d;m<w;m++){let p=c.getX(m);jo.fromBufferAttribute(h,p),su(jo,p,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,w=d;m<w;m++)jo.fromBufferAttribute(h,m),su(jo,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function su(i,t,e,n,s,r,o){let a=Ac.distanceSqToPoint(i);if(a<e){let l=new k;Ac.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Vr=class extends In{constructor(t=[],e=ws,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Gr=class extends In{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ki=class extends In{constructor(t,e,n=gi,s,r,o,a=vn,l=vn,c,u=Bi,h=1){if(u!==Bi&&u!==Xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $s(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Hr=class extends ki{constructor(t,e=gi,n=ws,s,r,o=vn,a=vn,l,c=Bi){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Wr=class extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ue=class i extends Ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(h,2));function m(w,p,g,b,E,A,I,C,y,_,R){let T=A/y,B=I/_,q=A/2,U=I/2,$=C/2,D=y+1,O=_+1,z=0,it=0,nt=new k;for(let pt=0;pt<O;pt++){let Ft=pt*B-U;for(let Ht=0;Ht<D;Ht++){let S=Ht*T-q;nt[w]=S*b,nt[p]=Ft*E,nt[g]=$,c.push(nt.x,nt.y,nt.z),nt[w]=0,nt[p]=0,nt[g]=C>0?1:-1,u.push(nt.x,nt.y,nt.z),h.push(Ht/y),h.push(1-pt/_),z+=1}}for(let pt=0;pt<_;pt++)for(let Ft=0;Ft<y;Ft++){let Ht=f+Ft+D*pt,S=f+Ft+D*(pt+1),M=f+(Ft+1)+D*(pt+1),j=f+(Ft+1)+D*pt;l.push(Ht,S,j),l.push(S,M,j),it+=6}a.addGroup(d,it,R),d+=it,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ti=class i extends Ve{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=e/2,h=Math.PI/2*t,f=e,d=2*h+f,m=n*2+r,w=s+1,p=new k,g=new k;for(let b=0;b<=m;b++){let E=0,A=0,I=0,C=0;if(b<=n){let R=b/n,T=R*Math.PI/2;A=-u-t*Math.cos(T),I=t*Math.sin(T),C=-t*Math.cos(T),E=R*h}else if(b<=n+r){let R=(b-n)/r;A=-u+R*e,I=t,C=0,E=h+R*f}else{let R=(b-n-r)/n,T=R*Math.PI/2;A=u+t*Math.sin(T),I=t*Math.cos(T),C=t*Math.sin(T),E=h+f+R*h}let y=Math.max(0,Math.min(1,E/d)),_=0;b===0?_=.5/s:b===m&&(_=-.5/s);for(let R=0;R<=s;R++){let T=R/s,B=T*Math.PI*2,q=Math.sin(B),U=Math.cos(B);g.x=-I*U,g.y=A,g.z=I*q,a.push(g.x,g.y,g.z),p.set(-I*U,C,I*q),p.normalize(),l.push(p.x,p.y,p.z),c.push(T+_,y)}if(b>0){let R=(b-1)*w;for(let T=0;T<s;T++){let B=R+T,q=R+T+1,U=b*w+T,$=b*w+T+1;o.push(B,q,U),o.push(q,$,U)}}}this.setIndex(o),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ni=class i extends Ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new k,u=new ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(a,3)),this.setAttribute("uv",new Ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},me=class i extends Ve{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],m=0,w=[],p=n/2,g=0;b(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Ce(h,3)),this.setAttribute("normal",new Ce(f,3)),this.setAttribute("uv",new Ce(d,2));function b(){let A=new k,I=new k,C=0,y=(e-t)/n;for(let _=0;_<=r;_++){let R=[],T=_/r,B=T*(e-t)+t;for(let q=0;q<=s;q++){let U=q/s,$=U*l+a,D=Math.sin($),O=Math.cos($);I.x=B*D,I.y=-T*n+p,I.z=B*O,h.push(I.x,I.y,I.z),A.set(D,y,O).normalize(),f.push(A.x,A.y,A.z),d.push(U,1-T),R.push(m++)}w.push(R)}for(let _=0;_<s;_++)for(let R=0;R<r;R++){let T=w[R][_],B=w[R+1][_],q=w[R+1][_+1],U=w[R][_+1];(t>0||R!==0)&&(u.push(T,B,U),C+=3),(e>0||R!==r-1)&&(u.push(B,q,U),C+=3)}c.addGroup(g,C,0),g+=C}function E(A){let I=m,C=new ct,y=new k,_=0,R=A===!0?t:e,T=A===!0?1:-1;for(let q=1;q<=s;q++)h.push(0,p*T,0),f.push(0,T,0),d.push(.5,.5),m++;let B=m;for(let q=0;q<=s;q++){let $=q/s*l+a,D=Math.cos($),O=Math.sin($);y.x=R*O,y.y=p*T,y.z=R*D,h.push(y.x,y.y,y.z),f.push(0,T,0),C.x=D*.5+.5,C.y=O*.5*T+.5,d.push(C.x,C.y),m++}for(let q=0;q<s;q++){let U=I+q,$=B+q;A===!0?u.push($,$+1,U):u.push($+1,$,U),_+=3}c.addGroup(g,_,A===!0?1:2),g+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fn=class i extends me{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xr=class i extends Ve{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Ce(r,3)),this.setAttribute("normal",new Ce(r.slice(),3)),this.setAttribute("uv",new Ce(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let E=new k,A=new k,I=new k;for(let C=0;C<e.length;C+=3)d(e[C+0],E),d(e[C+1],A),d(e[C+2],I),l(E,A,I,b)}function l(b,E,A,I){let C=I+1,y=[];for(let _=0;_<=C;_++){y[_]=[];let R=b.clone().lerp(A,_/C),T=E.clone().lerp(A,_/C),B=C-_;for(let q=0;q<=B;q++)q===0&&_===C?y[_][q]=R:y[_][q]=R.clone().lerp(T,q/B)}for(let _=0;_<C;_++)for(let R=0;R<2*(C-_)-1;R++){let T=Math.floor(R/2);R%2===0?(f(y[_][T+1]),f(y[_+1][T]),f(y[_][T])):(f(y[_][T+1]),f(y[_+1][T+1]),f(y[_+1][T]))}}function c(b){let E=new k;for(let A=0;A<r.length;A+=3)E.x=r[A+0],E.y=r[A+1],E.z=r[A+2],E.normalize().multiplyScalar(b),r[A+0]=E.x,r[A+1]=E.y,r[A+2]=E.z}function u(){let b=new k;for(let E=0;E<r.length;E+=3){b.x=r[E+0],b.y=r[E+1],b.z=r[E+2];let A=p(b)/2/Math.PI+.5,I=g(b)/Math.PI+.5;o.push(A,1-I)}m(),h()}function h(){for(let b=0;b<o.length;b+=6){let E=o[b+0],A=o[b+2],I=o[b+4],C=Math.max(E,A,I),y=Math.min(E,A,I);C>.9&&y<.1&&(E<.2&&(o[b+0]+=1),A<.2&&(o[b+2]+=1),I<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function d(b,E){let A=b*3;E.x=t[A+0],E.y=t[A+1],E.z=t[A+2]}function m(){let b=new k,E=new k,A=new k,I=new k,C=new ct,y=new ct,_=new ct;for(let R=0,T=0;R<r.length;R+=9,T+=6){b.set(r[R+0],r[R+1],r[R+2]),E.set(r[R+3],r[R+4],r[R+5]),A.set(r[R+6],r[R+7],r[R+8]),C.set(o[T+0],o[T+1]),y.set(o[T+2],o[T+3]),_.set(o[T+4],o[T+5]),I.copy(b).add(E).add(A).divideScalar(3);let B=p(I);w(C,T+0,b,B),w(y,T+2,E,B),w(_,T+4,A,B)}}function w(b,E,A,I){I<0&&b.x===1&&(o[E]=b.x-1),A.x===0&&A.z===0&&(o[E]=I/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function g(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},pi=class i extends Xr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ve("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ct:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new k,s=[],r=[],o=[],a=new k,l=new Ze;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new k)}r[0]=new k,o[0]=new k;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ke(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ke(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},tr=class extends Wn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Aa=class extends tr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function eh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var ru=new k,ou=new k,xc=new eh,_c=new eh,yc=new eh,Xn=class extends Wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new k){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(ou.subVectors(s[0],s[1]).add(s[0]),c=ou);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ru.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ru),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),d),w=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);w<1e-4&&(w=1),m<1e-4&&(m=w),p<1e-4&&(p=w),xc.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,m,w,p),_c.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,m,w,p),yc.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,m,w,p)}else this.curveType==="catmullrom"&&(xc.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),_c.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),yc.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(xc.calc(l),_c.calc(l),yc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new k().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function au(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Nf(i,t){let e=1-i;return e*e*t}function Uf(i,t){return 2*(1-i)*i*t}function zf(i,t){return i*i*t}function Ar(i,t,e,n){return Nf(i,t)+Uf(i,e)+zf(i,n)}function Of(i,t){let e=1-i;return e*e*e*t}function Bf(i,t){let e=1-i;return 3*e*e*i*t}function kf(i,t){return 3*(1-i)*i*i*t}function Vf(i,t){return i*i*i*t}function Er(i,t,e,n,s){return Of(i,t)+Bf(i,e)+kf(i,n)+Vf(i,s)}var qr=class extends Wn{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Er(t,s.x,r.x,o.x,a.x),Er(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ea=class extends Wn{constructor(t=new k,e=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Er(t,s.x,r.x,o.x,a.x),Er(t,s.y,r.y,o.y,a.y),Er(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Yr=class extends Wn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ta=class extends Wn{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zr=class extends Wn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ar(t,s.x,r.x,o.x),Ar(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_s=class extends Wn{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ar(t,s.x,r.x,o.x),Ar(t,s.y,r.y,o.y),Ar(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jr=class extends Wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(au(a,l.x,c.x,u.x,h.x),au(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},Ca=Object.freeze({__proto__:null,ArcCurve:Aa,CatmullRomCurve3:Xn,CubicBezierCurve:qr,CubicBezierCurve3:Ea,EllipseCurve:tr,LineCurve:Yr,LineCurve3:Ta,QuadraticBezierCurve:Zr,QuadraticBezierCurve3:_s,SplineCurve:Jr}),Ra=class extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ca[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ca[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},$r=class extends Ra{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Yr(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Zr(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new qr(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Jr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new tr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ii=class extends $r{constructor(t){super(t),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new $r().fromJSON(s))}return this}};function Gf(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=rd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Yf(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let u=a,h=l;for(let f=e;f<s;f+=e){let d=i[f],m=i[f+1];d<a&&(a=d),m<l&&(l=m),d>u&&(u=d),m>h&&(h=m)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Kr(r,o,e,a,l,c,0),o}function rd(i,t,e,n,s){let r;if(s===sp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=lu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=lu(o/n|0,i[o],i[o+1],r);return r&&er(r,r.next)&&(jr(r),r=r.next),r}function ys(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(er(e,e.next)||on(e.prev,e,e.next)===0)){if(jr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Kr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Qf(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Wf(i,n,s,r):Hf(i)){t.push(l.i,i.i,c.i),jr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Xf(ys(i),t),Kr(i,t,e,n,s,r,2)):o===2&&qf(i,t,e,n,s,r):Kr(ys(i),t,e,n,s,r,1);break}}}function Hf(i){let t=i.prev,e=i,n=i.next;if(on(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),h=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&br(s,a,r,l,o,c,m.x,m.y)&&on(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Wf(i,t,e,n){let s=i.prev,r=i,o=i.next;if(on(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=Math.min(a,l,c),m=Math.min(u,h,f),w=Math.max(a,l,c),p=Math.max(u,h,f),g=Ec(d,m,t,e,n),b=Ec(w,p,t,e,n),E=i.prevZ,A=i.nextZ;for(;E&&E.z>=g&&A&&A.z<=b;){if(E.x>=d&&E.x<=w&&E.y>=m&&E.y<=p&&E!==s&&E!==o&&br(a,u,l,h,c,f,E.x,E.y)&&on(E.prev,E,E.next)>=0||(E=E.prevZ,A.x>=d&&A.x<=w&&A.y>=m&&A.y<=p&&A!==s&&A!==o&&br(a,u,l,h,c,f,A.x,A.y)&&on(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;E&&E.z>=g;){if(E.x>=d&&E.x<=w&&E.y>=m&&E.y<=p&&E!==s&&E!==o&&br(a,u,l,h,c,f,E.x,E.y)&&on(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;A&&A.z<=b;){if(A.x>=d&&A.x<=w&&A.y>=m&&A.y<=p&&A!==s&&A!==o&&br(a,u,l,h,c,f,A.x,A.y)&&on(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function Xf(i,t){let e=i;do{let n=e.prev,s=e.next.next;!er(n,s)&&ad(n,e,e.next,s)&&Qr(n,s)&&Qr(s,n)&&(t.push(n.i,e.i,s.i),jr(e),jr(e.next),e=i=s),e=e.next}while(e!==i);return ys(e)}function qf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ep(o,a)){let l=ld(o,a);o=ys(o,o.next),l=ys(l,l.next),Kr(o,t,e,n,s,r,0),Kr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Yf(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=rd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(tp(c))}s.sort(Zf);for(let r=0;r<s.length;r++)e=Jf(s[r],e);return e}function Zf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Jf(i,t){let e=$f(i,t);if(!e)return t;let n=ld(e,i);return ys(n,n.next),ys(e,e.next)}function $f(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(er(i,e))return e;do{if(er(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&od(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let h=Math.abs(s-e.y)/(n-e.x);Qr(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&Kf(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function Kf(i,t){return on(i.prev,i,t.prev)<0&&on(t.next,i,i.next)<0}function Qf(i,t,e,n){let s=i;do s.z===0&&(s.z=Ec(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,jf(s)}function jf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ec(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function tp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function od(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function br(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&od(i,t,e,n,s,r,o,a)}function ep(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!np(i,t)&&(Qr(i,t)&&Qr(t,i)&&ip(i,t)&&(on(i.prev,i,t.prev)||on(i,t.prev,t))||er(i,t)&&on(i.prev,i,i.next)>0&&on(t.prev,t,t.next)>0)}function on(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function er(i,t){return i.x===t.x&&i.y===t.y}function ad(i,t,e,n){let s=ea(on(i,t,e)),r=ea(on(i,t,n)),o=ea(on(e,n,i)),a=ea(on(e,n,t));return!!(s!==r&&o!==a||s===0&&ta(i,e,t)||r===0&&ta(i,n,t)||o===0&&ta(e,i,n)||a===0&&ta(e,t,n))}function ta(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ea(i){return i>0?1:i<0?-1:0}function np(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ad(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Qr(i,t){return on(i.prev,i,i.next)<0?on(i,t,i.next)>=0&&on(i,i.prev,t)>=0:on(i,t,i.prev)<0||on(i,i.next,t)<0}function ip(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ld(i,t){let e=Tc(i.i,i.x,i.y),n=Tc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function lu(i,t,e,n){let s=Tc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function jr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Tc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Cc=class{static triangulate(t,e,n=2){return Gf(t,e,n)}},Si=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];cu(t),hu(n,t);let o=t.length;e.forEach(cu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,hu(n,e[l]);let a=Cc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function cu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function hu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var to=class i extends Ve{constructor(t=new ii([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Ce(s,3)),this.setAttribute("uv",new Ce(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,w=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:rp,E,A=!1,I,C,y,_;if(g){E=g.getSpacedPoints(u),A=!0,f=!1;let mt=g.isCatmullRomCurve3?g.closed:!1;I=g.computeFrenetFrames(u,mt),C=new k,y=new k,_=new k}f||(p=0,d=0,m=0,w=0);let R=a.extractPoints(c),T=R.shape,B=R.holes;if(!Si.isClockWise(T)){T=T.reverse();for(let mt=0,gt=B.length;mt<gt;mt++){let Ct=B[mt];Si.isClockWise(Ct)&&(B[mt]=Ct.reverse())}}function U(mt){let Ct=10000000000000001e-36,rt=mt[0];for(let vt=1;vt<=mt.length;vt++){let Jt=vt%mt.length,jt=mt[Jt],ce=jt.x-rt.x,ee=jt.y-rt.y,de=ce*ce+ee*ee,Z=Math.max(Math.abs(jt.x),Math.abs(jt.y),Math.abs(rt.x),Math.abs(rt.y)),Le=Ct*Z*Z;if(de<=Le){mt.splice(Jt,1),vt--;continue}rt=jt}}U(T),B.forEach(U);let $=B.length,D=T;for(let mt=0;mt<$;mt++){let gt=B[mt];T=T.concat(gt)}function O(mt,gt,Ct){return gt||be("ExtrudeGeometry: vec does not exist"),mt.clone().addScaledVector(gt,Ct)}let z=T.length;function it(mt,gt,Ct){let rt,vt,Jt,jt=mt.x-gt.x,ce=mt.y-gt.y,ee=Ct.x-mt.x,de=Ct.y-mt.y,Z=jt*jt+ce*ce,Le=jt*de-ce*ee;if(Math.abs(Le)>Number.EPSILON){let K=Math.sqrt(Z),ht=Math.sqrt(ee*ee+de*de),Y=gt.x-ce/K,Qt=gt.y+jt/K,Rt=Ct.x-de/ht,Ut=Ct.y+ee/ht,F=((Rt-Y)*de-(Ut-Qt)*ee)/(jt*de-ce*ee);rt=Y+jt*F-mt.x,vt=Qt+ce*F-mt.y;let v=rt*rt+vt*vt;if(v<=2)return new ct(rt,vt);Jt=Math.sqrt(v/2)}else{let K=!1;jt>Number.EPSILON?ee>Number.EPSILON&&(K=!0):jt<-Number.EPSILON?ee<-Number.EPSILON&&(K=!0):Math.sign(ce)===Math.sign(de)&&(K=!0),K?(rt=-ce,vt=jt,Jt=Math.sqrt(Z)):(rt=jt,vt=ce,Jt=Math.sqrt(Z/2))}return new ct(rt/Jt,vt/Jt)}let nt=[];for(let mt=0,gt=D.length,Ct=gt-1,rt=mt+1;mt<gt;mt++,Ct++,rt++)Ct===gt&&(Ct=0),rt===gt&&(rt=0),nt[mt]=it(D[mt],D[Ct],D[rt]);let pt=[],Ft,Ht=nt.concat();for(let mt=0,gt=$;mt<gt;mt++){let Ct=B[mt];Ft=[];for(let rt=0,vt=Ct.length,Jt=vt-1,jt=rt+1;rt<vt;rt++,Jt++,jt++)Jt===vt&&(Jt=0),jt===vt&&(jt=0),Ft[rt]=it(Ct[rt],Ct[Jt],Ct[jt]);pt.push(Ft),Ht=Ht.concat(Ft)}let S;if(p===0)S=Si.triangulateShape(D,B);else{let mt=[],gt=[];for(let Ct=0;Ct<p;Ct++){let rt=Ct/p,vt=d*Math.cos(rt*Math.PI/2),Jt=m*Math.sin(rt*Math.PI/2)+w;for(let jt=0,ce=D.length;jt<ce;jt++){let ee=O(D[jt],nt[jt],Jt);Lt(ee.x,ee.y,-vt),rt===0&&mt.push(ee)}for(let jt=0,ce=$;jt<ce;jt++){let ee=B[jt];Ft=pt[jt];let de=[];for(let Z=0,Le=ee.length;Z<Le;Z++){let K=O(ee[Z],Ft[Z],Jt);Lt(K.x,K.y,-vt),rt===0&&de.push(K)}rt===0&&gt.push(de)}}S=Si.triangulateShape(mt,gt)}let M=S.length,j=m+w;for(let mt=0;mt<z;mt++){let gt=f?O(T[mt],Ht[mt],j):T[mt];A?(y.copy(I.normals[0]).multiplyScalar(gt.x),C.copy(I.binormals[0]).multiplyScalar(gt.y),_.copy(E[0]).add(y).add(C),Lt(_.x,_.y,_.z)):Lt(gt.x,gt.y,0)}for(let mt=1;mt<=u;mt++)for(let gt=0;gt<z;gt++){let Ct=f?O(T[gt],Ht[gt],j):T[gt];A?(y.copy(I.normals[mt]).multiplyScalar(Ct.x),C.copy(I.binormals[mt]).multiplyScalar(Ct.y),_.copy(E[mt]).add(y).add(C),Lt(_.x,_.y,_.z)):Lt(Ct.x,Ct.y,h/u*mt)}for(let mt=p-1;mt>=0;mt--){let gt=mt/p,Ct=d*Math.cos(gt*Math.PI/2),rt=m*Math.sin(gt*Math.PI/2)+w;for(let vt=0,Jt=D.length;vt<Jt;vt++){let jt=O(D[vt],nt[vt],rt);Lt(jt.x,jt.y,h+Ct)}for(let vt=0,Jt=B.length;vt<Jt;vt++){let jt=B[vt];Ft=pt[vt];for(let ce=0,ee=jt.length;ce<ee;ce++){let de=O(jt[ce],Ft[ce],rt);A?Lt(de.x,de.y+E[u-1].y,E[u-1].x+Ct):Lt(de.x,de.y,h+Ct)}}}J(),wt();function J(){let mt=s.length/3;if(f){let gt=0,Ct=z*gt;for(let rt=0;rt<M;rt++){let vt=S[rt];he(vt[2]+Ct,vt[1]+Ct,vt[0]+Ct)}gt=u+p*2,Ct=z*gt;for(let rt=0;rt<M;rt++){let vt=S[rt];he(vt[0]+Ct,vt[1]+Ct,vt[2]+Ct)}}else{for(let gt=0;gt<M;gt++){let Ct=S[gt];he(Ct[2],Ct[1],Ct[0])}for(let gt=0;gt<M;gt++){let Ct=S[gt];he(Ct[0]+z*u,Ct[1]+z*u,Ct[2]+z*u)}}n.addGroup(mt,s.length/3-mt,0)}function wt(){let mt=s.length/3,gt=0;Et(D,gt),gt+=D.length;for(let Ct=0,rt=B.length;Ct<rt;Ct++){let vt=B[Ct];Et(vt,gt),gt+=vt.length}n.addGroup(mt,s.length/3-mt,1)}function Et(mt,gt){let Ct=mt.length;for(;--Ct>=0;){let rt=Ct,vt=Ct-1;vt<0&&(vt=mt.length-1);for(let Jt=0,jt=u+p*2;Jt<jt;Jt++){let ce=z*Jt,ee=z*(Jt+1),de=gt+rt+ce,Z=gt+vt+ce,Le=gt+vt+ee,K=gt+rt+ee;$t(de,Z,Le,K)}}}function Lt(mt,gt,Ct){l.push(mt),l.push(gt),l.push(Ct)}function he(mt,gt,Ct){Kt(mt),Kt(gt),Kt(Ct);let rt=s.length/3,vt=b.generateTopUV(n,s,rt-3,rt-2,rt-1);ue(vt[0]),ue(vt[1]),ue(vt[2])}function $t(mt,gt,Ct,rt){Kt(mt),Kt(gt),Kt(rt),Kt(gt),Kt(Ct),Kt(rt);let vt=s.length/3,Jt=b.generateSideWallUV(n,s,vt-6,vt-3,vt-2,vt-1);ue(Jt[0]),ue(Jt[1]),ue(Jt[3]),ue(Jt[1]),ue(Jt[2]),ue(Jt[3])}function Kt(mt){s.push(l[mt*3+0]),s.push(l[mt*3+1]),s.push(l[mt*3+2])}function ue(mt){r.push(mt.x),r.push(mt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return op(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ca[s.type]().fromJSON(s)),new i(n,t.options)}},rp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new ct(r,o),new ct(a,l),new ct(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[s*3],d=t[s*3+1],m=t[s*3+2],w=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ct(o,1-l),new ct(c,1-h),new ct(f,1-m),new ct(w,1-g)]:[new ct(a,1-l),new ct(u,1-h),new ct(d,1-m),new ct(p,1-g)]}};function op(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Sn=class i extends Xr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Ln=class i extends Ve{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ke(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/e,h=new k,f=new ct,d=new k,m=new k,w=new k,p=0,g=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:p=t[b+1].x-t[b].x,g=t[b+1].y-t[b].y,d.x=g*1,d.y=-p,d.z=g*0,w.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:w.normalize(),l.push(w.x,w.y,w.z);break;default:p=t[b+1].x-t[b].x,g=t[b+1].y-t[b].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=w.x,d.y+=w.y,d.z+=w.z,d.normalize(),l.push(d.x,d.y,d.z),w.copy(m)}for(let b=0;b<=e;b++){let E=n+b*u*s,A=Math.sin(E),I=Math.cos(E);for(let C=0;C<=t.length-1;C++){h.x=t[C].x*A,h.y=t[C].y,h.z=t[C].x*I,o.push(h.x,h.y,h.z),f.x=b/e,f.y=C/(t.length-1),a.push(f.x,f.y);let y=l[3*C+0]*A,_=l[3*C+1],R=l[3*C+0]*I;c.push(y,_,R)}}for(let b=0;b<e;b++)for(let E=0;E<t.length-1;E++){let A=E+b*t.length,I=A,C=A+t.length,y=A+t.length+1,_=A+1;r.push(I,C,_),r.push(y,_,C)}this.setIndex(r),this.setAttribute("position",new Ce(o,3)),this.setAttribute("uv",new Ce(a,2)),this.setAttribute("normal",new Ce(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Un=class i extends Ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,d=[],m=[],w=[],p=[];for(let g=0;g<u;g++){let b=g*f-o;for(let E=0;E<c;E++){let A=E*h-r;m.push(A,-b,0),w.push(0,0,1),p.push(E/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){let E=b+c*g,A=b+c*(g+1),I=b+1+c*(g+1),C=b+1+c*g;d.push(E,A,C),d.push(A,I,C)}this.setIndex(d),this.setAttribute("position",new Ce(m,3)),this.setAttribute("normal",new Ce(w,3)),this.setAttribute("uv",new Ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},eo=class i extends Ve{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=t,f=(e-t)/s,d=new k,m=new ct;for(let w=0;w<=s;w++){for(let p=0;p<=n;p++){let g=r+p/n*o;d.x=h*Math.cos(g),d.y=h*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,u.push(m.x,m.y)}h+=f}for(let w=0;w<s;w++){let p=w*(n+1);for(let g=0;g<n;g++){let b=g+p,E=b,A=b+n+1,I=b+n+2,C=b+1;a.push(E,A,C),a.push(A,I,C)}}this.setIndex(a),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Vi=class i extends Ve{constructor(t=new ii([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ce(s,3)),this.setAttribute("normal",new Ce(r,3)),this.setAttribute("uv",new Ce(o,2));function c(u){let h=s.length/3,f=u.extractPoints(e),d=f.shape,m=f.holes;Si.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,g=m.length;p<g;p++){let b=m[p];Si.isClockWise(b)===!0&&(m[p]=b.reverse())}let w=Si.triangulateShape(d,m);for(let p=0,g=m.length;p<g;p++){let b=m[p];d=d.concat(b)}for(let p=0,g=d.length;p<g;p++){let b=d[p];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let p=0,g=w.length;p<g;p++){let b=w[p],E=b[0]+h,A=b[1]+h,I=b[2]+h;n.push(E,A,I),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return ap(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function ap(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Fe=class i extends Ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new k,f=new k,d=[],m=[],w=[],p=[];for(let g=0;g<=n;g++){let b=[],E=g/n,A=o+E*a,I=t*Math.cos(A),C=Math.sqrt(t*t-I*I),y=0;g===0&&o===0?y=.5/e:g===n&&l===Math.PI&&(y=-.5/e);for(let _=0;_<=e;_++){let R=_/e,T=s+R*r;h.x=-C*Math.cos(T),h.y=I,h.z=C*Math.sin(T),m.push(h.x,h.y,h.z),f.copy(h).normalize(),w.push(f.x,f.y,f.z),p.push(R+y,1-E),b.push(c++)}u.push(b)}for(let g=0;g<n;g++)for(let b=0;b<e;b++){let E=u[g][b+1],A=u[g][b],I=u[g+1][b],C=u[g+1][b+1];(g!==0||o>0)&&d.push(E,A,C),(g!==n-1||l<Math.PI)&&d.push(A,I,C)}this.setIndex(d),this.setAttribute("position",new Ce(m,3)),this.setAttribute("normal",new Ce(w,3)),this.setAttribute("uv",new Ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Gi=class i extends Ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],h=[],f=new k,d=new k,m=new k;for(let w=0;w<=n;w++){let p=o+w/n*a;for(let g=0;g<=s;g++){let b=g/s*r;d.x=(t+e*Math.cos(p))*Math.cos(b),d.y=(t+e*Math.cos(p))*Math.sin(b),d.z=e*Math.sin(p),c.push(d.x,d.y,d.z),f.x=t*Math.cos(b),f.y=t*Math.sin(b),m.subVectors(d,f).normalize(),u.push(m.x,m.y,m.z),h.push(g/s),h.push(w/n)}}for(let w=1;w<=n;w++)for(let p=1;p<=s;p++){let g=(s+1)*w+p-1,b=(s+1)*(w-1)+p-1,E=(s+1)*(w-1)+p,A=(s+1)*w+p;l.push(g,b,A),l.push(b,E,A)}this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Hi=class i extends Ve{constructor(t=new _s(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new k,l=new k,c=new ct,u=new k,h=[],f=[],d=[],m=[];w(),this.setIndex(m),this.setAttribute("position",new Ce(h,3)),this.setAttribute("normal",new Ce(f,3)),this.setAttribute("uv",new Ce(d,2));function w(){for(let E=0;E<e;E++)p(E);p(r===!1?e:0),b(),g()}function p(E){u=t.getPointAt(E/e,u);let A=o.normals[E],I=o.binormals[E];for(let C=0;C<=s;C++){let y=C/s*Math.PI*2,_=Math.sin(y),R=-Math.cos(y);l.x=R*A.x+_*I.x,l.y=R*A.y+_*I.y,l.z=R*A.z+_*I.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function g(){for(let E=1;E<=e;E++)for(let A=1;A<=s;A++){let I=(s+1)*(E-1)+(A-1),C=(s+1)*E+(A-1),y=(s+1)*E+A,_=(s+1)*(E-1)+A;m.push(I,C,_),m.push(C,y,_)}}function b(){for(let E=0;E<=e;E++)for(let A=0;A<=s;A++)c.x=E/e,c.y=A/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Ca[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Es(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(uu(s))s.isRenderTargetTexture?(ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(uu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Tn(i){let t={};for(let e=0;e<i.length;e++){let n=Es(i[e]);for(let s in n)t[s]=n[s]}return t}function uu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function lp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qe.workingColorSpace}var cd={clone:Es,merge:Tn},cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,si=class extends ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cp,this.fragmentShader=hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=lp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.linewidth=t.linewidth,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new xe().setHex(s.value);break;case"v2":this.uniforms[n].value=new ct().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new sn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Re().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ze().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Pa=class extends si{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var zn=class extends ei{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xe(16777215),this.specular=new xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xo,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=ao,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var $e=class extends ei{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xo,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=ao,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ia=class extends ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fa=class extends ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Gs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function na(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ss=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},La=class extends ss{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sc,endingEnd:Sc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bc:r=t,a=2*e-n;break;case wc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bc:o=t,l=2*n-e;break;case wc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),w=m*m,p=w*m,g=-f*p+2*f*w-f*m,b=(1+f)*p+(-1.5-2*f)*w+(-.5+f)*m+1,E=(-1-d)*p+(1.5+d)*w+.5*m,A=d*p-d*w;for(let I=0;I!==a;++I)r[I]=g*o[u+I]+b*o[c+I]+E*o[l+I]+A*o[h+I];return r}},Da=class extends ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Na=class extends ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ua=class extends ss{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(n-e)/(s-e),w=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*w+o[l+p]*m;return r}let f=a*2,d=t-1;for(let m=0;m!==a;++m){let w=o[c+m],p=o[l+m],g=d*f+m*2,b=h[g],E=h[g+1],A=t*f+m*2,I=u[A],C=u[A+1],y=dp(n,e,b,I,s);r[m]=hd(y,w,E,C,p)}return r}};function hd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function up(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function dp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=hd(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=up(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var qn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Gs(e,this.TimeBufferType),this.values=Gs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Gs(t.times,Array),values:Gs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),na(t.settings)&&(n.settings={inTangents:Gs(t.settings.inTangents,Array),outTangents:Gs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new La(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ua(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Tr:e=this.InterpolantFactoryMethodDiscrete;break;case ma:e=this.InterpolantFactoryMethodLinear;break;case ra:e=this.InterpolantFactoryMethodSmooth;break;case Mc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ve("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Tr;case this.InterpolantFactoryMethodLinear:return ma;case this.InterpolantFactoryMethodSmooth:return ra;case this.InterpolantFactoryMethodBezier:return Mc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;na(this.settings)&&(du(this.settings.inTangents,t),du(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;na(this.settings)&&(fu(this.settings.inTangents,t),fu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(be("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(be("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){be("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){be("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&pf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){be("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ra,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){let w=e[h+m];if(w!==e[f+m]||w!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,na(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function du(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function fu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=ma;var rs=class extends qn{constructor(t,e,n){super(t,e,n)}};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Tr;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends qn{constructor(t,e,n,s){super(t,e,n,s)}};za.prototype.ValueTypeName="color";var Oa=class extends qn{constructor(t,e,n,s){super(t,e,n,s)}};Oa.prototype.ValueTypeName="number";var Ba=class extends ss{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)jn.slerpFlat(r,0,o,c-a,o,c,l);return r}},no=class extends qn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ba(this.times,this.values,this.getValueSize(),t)}};no.prototype.ValueTypeName="quaternion";no.prototype.InterpolantFactoryMethodSmooth=void 0;var os=class extends qn{constructor(t,e,n){super(t,e,n)}};os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Tr;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends qn{constructor(t,e,n,s){super(t,e,n,s)}};ka.prototype.ValueTypeName="vector";var Va=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ud=new Va,Ga=class{constructor(t){this.manager=t!==void 0?t:ud,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ga.DEFAULT_MATERIAL_NAME="__DEFAULT";var io=class extends rn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},so=class extends io{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},vc=new Ze,pu=new k,mu=new k,Ha=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.filterNode=null,this.shadowNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ns,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;pu.setFromMatrixPosition(t.matrixWorld),e.position.copy(pu),mu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){vc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(vc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Zs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(vc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this.filterNode=t.filterNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ia=new k,sa=new jn,vi=new k,ro=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ia,sa,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ia,sa,vi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){let s=super.updateWorldMatrix(t,e,n);return this.matrixWorld.decompose(ia,sa,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ia,sa,vi.set(1,1,1)).invert(),s}clone(){return new this.constructor().copy(this)}},ts=new k,gu=new ct,xu=new ct,En=class extends ro{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ga*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(Zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,e){return this.getViewBounds(t,gu,xu),e.subVectors(xu,gu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var vs=class extends ro{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Rc=class extends Ha{constructor(){super(new vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oo=class extends io{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new Rc}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Hs=-90,Ws=1,nr=class extends rn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new En(Hs,Ws,t,e);s.layers=this.layers,this.add(s);let r=new En(Hs,Ws,t,e);r.layers=this.layers,this.add(r);let o=new En(Hs,Ws,t,e);o.layers=this.layers,this.add(o);let a=new En(Hs,Ws,t,e);a.layers=this.layers,this.add(a);let l=new En(Hs,Ws,t,e);l.layers=this.layers,this.add(l);let c=new En(Hs,Ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let w=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=w,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Wa=class extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var ih="\\[\\]\\.:\\/",fp=new RegExp("["+ih+"]","g"),sh="[^"+ih+"]",pp="[^"+ih.replace("\\.","")+"]",mp=/((?:WC+[\/:])*)/.source.replace("WC",sh),gp=/(WCOD+)?/.source.replace("WCOD",pp),xp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sh),_p=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sh),yp=new RegExp("^"+mp+gp+xp+_p+"$"),vp=["material","materials","bones","map"],Pc=class{constructor(t,e,n){let s=n||nn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},nn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(fp,"")}static parseTrackName(t){let e=yp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);vp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;be("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};nn.Composite=Pc;nn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nn.prototype.GetterByBindingType=[nn.prototype._getValue_direct,nn.prototype._getValue_array,nn.prototype._getValue_arrayElement,nn.prototype._getValue_toArray];nn.prototype.SetterByBindingTypeAndVersioning=[[nn.prototype._setValue_direct,nn.prototype._setValue_direct_setNeedsUpdate,nn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_array,nn.prototype._setValue_array_setNeedsUpdate,nn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_arrayElement,nn.prototype._setValue_arrayElement_setNeedsUpdate,nn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nn.prototype._setValue_fromArray,nn.prototype._setValue_fromArray_setNeedsUpdate,nn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var f_=new Float32Array(1);var hh=class hh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};hh.prototype.isMatrix2=!0;var Ic=hh;function rh(i,t,e,n){let s=Mp(n);switch(e){case Zc:return i*t;case ja:return i*t/s.components*s.byteLength;case tl:return i*t/s.components*s.byteLength;case ls:return i*t*2/s.components*s.byteLength;case el:return i*t*2/s.components*s.byteLength;case Jc:return i*t*3/s.components*s.byteLength;case _i:return i*t*4/s.components*s.byteLength;case nl:return i*t*4/s.components*s.byteLength;case ho:case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fo:case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sl:case ol:return Math.max(i,16)*Math.max(t,8)/4;case il:case rl:return Math.max(i,8)*Math.max(t,8)/2;case al:case ll:case hl:case ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case cl:case mo:case dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ml:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case gl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case _l:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case yl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case vl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case bl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case El:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Tl:case Cl:case Rl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Pl:case Il:return Math.ceil(i/4)*Math.ceil(t/4)*8;case go:case Fl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mp(i){switch(i){case On:case Wc:return{byteLength:1,components:1};case or:case Xc:case xi:return{byteLength:2,components:1};case Ka:case Qa:return{byteLength:2,components:4};case gi:case $a:case ri:return{byteLength:4,components:1};case qc:case Yc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window<"u"&&(window.__THREE__?ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);function Ld(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Sp(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],w=h[d];w.start<=m.start+m.count+1?m.count=Math.max(m.count,w.start+w.count-m.start):(++f,h[f]=w)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let w=h[d];i.bufferSubData(c,w.start*u.BYTES_PER_ELEMENT,u,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wp=`#ifdef USE_ALPHAHASH
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
#endif`,Ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
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
#endif`,Pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ip=`#ifdef USE_BATCHING
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
#endif`,Fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Np=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Up=`#ifdef USE_IRIDESCENCE
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
#endif`,zp=`#ifdef USE_BUMPMAP
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
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qp=`#define PI 3.141592653589793
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
} // validated`,Yp=`vec3 transformedNormal = objectNormal;
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
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",jp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cm=`#ifdef USE_GRADIENTMAP
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
}`,hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ym=`PhysicalMaterial material;
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
#endif`,vm=`uniform sampler2D dfgLUT;
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
}`,Mm=`
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
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
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
#endif`,bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Am=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fm=`#if defined( USE_POINTS_UV )
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
#endif`,Lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Um=`#if defined( USE_MORPHCOLORS )
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
#endif`,zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Om=`#ifdef USE_MORPHTARGETS
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
#endif`,Bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,km=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xm=`#ifdef USE_NORMALMAP
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
#endif`,qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Km=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,e0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,a0=`float getShadowMask() {
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
}`,l0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c0=`#ifdef USE_SKINNING
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
#endif`,h0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u0=`#ifdef USE_SKINNING
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
#endif`,d0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,g0=`#ifdef USE_TRANSMISSION
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
#endif`,x0=`#ifdef USE_TRANSMISSION
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,S0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b0=`uniform sampler2D t2D;
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
}`,w0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A0=`uniform float backgroundBlurriness;
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
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`#include <common>
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
}`,R0=`#if DEPTH_PACKING == 3200
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
}`,P0=`#define DISTANCE
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
}`,I0=`#define DISTANCE
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`uniform float scale;
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
}`,N0=`uniform vec3 diffuse;
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
}`,U0=`#include <common>
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
}`,z0=`uniform vec3 diffuse;
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
}`,O0=`#define LAMBERT
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
}`,B0=`#define LAMBERT
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
}`,k0=`#define MATCAP
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
}`,V0=`#define MATCAP
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
}`,G0=`#define NORMAL
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
}`,H0=`#define NORMAL
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
}`,W0=`#define PHONG
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
}`,X0=`#define PHONG
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
}`,q0=`#define STANDARD
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
}`,Y0=`#define STANDARD
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
}`,Z0=`#define TOON
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
}`,J0=`#define TOON
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
}`,$0=`uniform float size;
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
}`,K0=`uniform vec3 diffuse;
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
}`,Q0=`#include <common>
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
}`,j0=`uniform vec3 color;
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
}`,tg=`uniform float rotation;
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
}`,eg=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:bp,alphahash_pars_fragment:wp,alphamap_fragment:Ap,alphamap_pars_fragment:Ep,alphatest_fragment:Tp,alphatest_pars_fragment:Cp,aomap_fragment:Rp,aomap_pars_fragment:Pp,batching_pars_vertex:Ip,batching_vertex:Fp,begin_vertex:Lp,beginnormal_vertex:Dp,bsdfs:Np,iridescence_fragment:Up,bumpmap_pars_fragment:zp,clipping_planes_fragment:Op,clipping_planes_pars_fragment:Bp,clipping_planes_pars_vertex:kp,clipping_planes_vertex:Vp,color_fragment:Gp,color_pars_fragment:Hp,color_pars_vertex:Wp,color_vertex:Xp,common:qp,defaultnormal_vertex:Yp,displacementmap_pars_vertex:Zp,displacementmap_vertex:Jp,emissivemap_fragment:$p,emissivemap_pars_fragment:Kp,colorspace_fragment:Qp,colorspace_pars_fragment:jp,envmap_fragment:tm,envmap_common_pars_fragment:em,envmap_pars_fragment:nm,envmap_pars_vertex:im,envmap_physical_pars_fragment:pm,envmap_vertex:sm,fog_vertex:rm,fog_pars_vertex:om,fog_fragment:am,fog_pars_fragment:lm,gradientmap_pars_fragment:cm,lightmap_pars_fragment:hm,lights_lambert_fragment:um,lights_lambert_pars_fragment:dm,lights_pars_begin:fm,lights_toon_fragment:mm,lights_toon_pars_fragment:gm,lights_phong_fragment:xm,lights_phong_pars_fragment:_m,lights_physical_fragment:ym,lights_physical_pars_fragment:vm,lights_fragment_begin:Mm,lights_fragment_maps:Sm,lights_fragment_end:bm,lightprobes_pars_fragment:wm,logdepthbuf_fragment:Am,logdepthbuf_pars_fragment:Em,logdepthbuf_pars_vertex:Tm,logdepthbuf_vertex:Cm,map_fragment:Rm,map_pars_fragment:Pm,map_particle_fragment:Im,map_particle_pars_fragment:Fm,metalnessmap_fragment:Lm,metalnessmap_pars_fragment:Dm,morphinstance_vertex:Nm,morphcolor_vertex:Um,morphnormal_vertex:zm,morphtarget_pars_vertex:Om,morphtarget_vertex:Bm,normal_fragment_begin:km,normal_fragment_maps:Vm,normal_pars_fragment:Gm,normal_pars_vertex:Hm,normal_vertex:Wm,normalmap_pars_fragment:Xm,clearcoat_normal_fragment_begin:qm,clearcoat_normal_fragment_maps:Ym,clearcoat_pars_fragment:Zm,iridescence_pars_fragment:Jm,opaque_fragment:$m,packing:Km,premultiplied_alpha_fragment:Qm,project_vertex:jm,dithering_fragment:t0,dithering_pars_fragment:e0,roughnessmap_fragment:n0,roughnessmap_pars_fragment:i0,shadowmap_pars_fragment:s0,shadowmap_pars_vertex:r0,shadowmap_vertex:o0,shadowmask_pars_fragment:a0,skinbase_vertex:l0,skinning_pars_vertex:c0,skinning_vertex:h0,skinnormal_vertex:u0,specularmap_fragment:d0,specularmap_pars_fragment:f0,tonemapping_fragment:p0,tonemapping_pars_fragment:m0,transmission_fragment:g0,transmission_pars_fragment:x0,uv_pars_fragment:_0,uv_pars_vertex:y0,uv_vertex:v0,worldpos_vertex:M0,background_vert:S0,background_frag:b0,backgroundCube_vert:w0,backgroundCube_frag:A0,cube_vert:E0,cube_frag:T0,depth_vert:C0,depth_frag:R0,distance_vert:P0,distance_frag:I0,equirect_vert:F0,equirect_frag:L0,linedashed_vert:D0,linedashed_frag:N0,meshbasic_vert:U0,meshbasic_frag:z0,meshlambert_vert:O0,meshlambert_frag:B0,meshmatcap_vert:k0,meshmatcap_frag:V0,meshnormal_vert:G0,meshnormal_frag:H0,meshphong_vert:W0,meshphong_frag:X0,meshphysical_vert:q0,meshphysical_frag:Y0,meshtoon_vert:Z0,meshtoon_frag:J0,points_vert:$0,points_frag:K0,shadow_vert:Q0,shadow_frag:j0,sprite_vert:tg,sprite_frag:eg},oe={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]},probesIntensity:{value:[]}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},Pi={basic:{uniforms:Tn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Tn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new xe(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Tn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Tn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Tn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new xe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Tn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Tn([oe.points,oe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Tn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Tn([oe.common,oe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Tn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Tn([oe.sprite,oe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Tn([oe.common,oe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Tn([oe.lights,oe.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Pi.physical={uniforms:Tn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var Dl={r:0,b:0,g:0},ng=new Ze,Dd=new Re;Dd.set(-1,0,0,0,1,0,0,0,1);function ig(i,t,e,n,s,r){let o=new xe(0),a=s===!0?0:1,l,c,u=null,h=0,f=null;function d(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){let A=b.backgroundBlurriness>0;E=t.get(E,A)}return E}function m(b){let E=!1,A=d(b);A===null?p(o,a):A&&A.isColor&&(p(A,1),E=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?e.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function w(b,E){let A=d(E);A&&A.isCubeTexture?(c===void 0&&(c=new Pt(new Ue(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Es(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,C,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=A,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ng.makeRotationFromEuler(E.backgroundRotation)).transpose(),A.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Dd),c.material.toneMapped=qe.getTransfer(A.colorSpace)!==Ke,(u!==A||h!==A.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,h=A.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Pt(new Un(2,2),new si({name:"BackgroundMaterial",uniforms:Es(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=qe.getTransfer(A.colorSpace)!==Ke,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||h!==A.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=A,h=A.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,E){b.getRGB(Dl,nh(i)),e.buffers.color.setClear(Dl.r,Dl.g,Dl.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,p(o,a)},render:m,addToRenderList:w,dispose:g}}function sg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(B,q,U,$,D){let O=!1,z=h(B,$,U,q);r!==z&&(r=z,c(r.object)),O=d(B,$,U,D),O&&m(B,$,U,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,A(B,q,U,$),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return i.createVertexArray()}function c(B){return i.bindVertexArray(B)}function u(B){return i.deleteVertexArray(B)}function h(B,q,U,$){let D=$.wireframe===!0,O=n[q.id];O===void 0&&(O={},n[q.id]=O);let z=B.isInstancedMesh===!0?B.id:0,it=O[z];it===void 0&&(it={},O[z]=it);let nt=it[U.id];nt===void 0&&(nt={},it[U.id]=nt);let pt=nt[D];return pt===void 0&&(pt=f(l()),nt[D]=pt),pt}function f(B){let q=[],U=[],$=[];for(let D=0;D<e;D++)q[D]=0,U[D]=0,$[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:U,attributeDivisors:$,object:B,attributes:{},index:null}}function d(B,q,U,$){let D=r.attributes,O=q.attributes,z=0,it=U.getAttributes();for(let nt in it)if(it[nt].location>=0){let Ft=D[nt],Ht=O[nt];if(Ht===void 0&&(nt==="instanceMatrix"&&B.instanceMatrix&&(Ht=B.instanceMatrix),nt==="instanceColor"&&B.instanceColor&&(Ht=B.instanceColor)),Ft===void 0||Ft.attribute!==Ht||Ht&&Ft.data!==Ht.data)return!0;z++}return r.attributesNum!==z||r.index!==$}function m(B,q,U,$){let D={},O=q.attributes,z=0,it=U.getAttributes();for(let nt in it)if(it[nt].location>=0){let Ft=O[nt];Ft===void 0&&(nt==="instanceMatrix"&&B.instanceMatrix&&(Ft=B.instanceMatrix),nt==="instanceColor"&&B.instanceColor&&(Ft=B.instanceColor));let Ht={};Ht.attribute=Ft,Ft&&Ft.data&&(Ht.data=Ft.data),D[nt]=Ht,z++}r.attributes=D,r.attributesNum=z,r.index=$}function w(){let B=r.newAttributes;for(let q=0,U=B.length;q<U;q++)B[q]=0}function p(B){g(B,0)}function g(B,q){let U=r.newAttributes,$=r.enabledAttributes,D=r.attributeDivisors;U[B]=1,$[B]===0&&(i.enableVertexAttribArray(B),$[B]=1),D[B]!==q&&(i.vertexAttribDivisor(B,q),D[B]=q)}function b(){let B=r.newAttributes,q=r.enabledAttributes;for(let U=0,$=q.length;U<$;U++)q[U]!==B[U]&&(i.disableVertexAttribArray(U),q[U]=0)}function E(B,q,U,$,D,O,z){z===!0?i.vertexAttribIPointer(B,q,U,D,O):i.vertexAttribPointer(B,q,U,$,D,O)}function A(B,q,U,$){w();let D=$.attributes,O=U.getAttributes(),z=q.defaultAttributeValues;for(let it in O){let nt=O[it];if(nt.location>=0){let pt=D[it];if(pt===void 0&&(it==="instanceMatrix"&&B.instanceMatrix&&(pt=B.instanceMatrix),it==="instanceColor"&&B.instanceColor&&(pt=B.instanceColor)),pt!==void 0){let Ft=pt.normalized,Ht=pt.itemSize,S=t.get(pt);if(S===void 0)continue;let M=S.buffer,j=S.type,J=S.bytesPerElement,wt=j===i.INT||j===i.UNSIGNED_INT||pt.gpuType===$a;if(pt.isInterleavedBufferAttribute){let Et=pt.data,Lt=Et.isInterleavedBuffer===!0?Et.stride:Et.itemSize,he=pt.offset;if(Et.isInstancedInterleavedBuffer||Et.isInstancedBufferAttribute){for(let $t=0;$t<nt.locationSize;$t++)g(nt.location+$t,Et.meshPerAttribute);B.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let $t=0;$t<nt.locationSize;$t++)p(nt.location+$t);i.bindBuffer(i.ARRAY_BUFFER,M);for(let $t=0;$t<nt.locationSize;$t++)E(nt.location+$t,Ht/nt.locationSize,j,Ft,Lt*J,(he+Ht/nt.locationSize*$t)*J,wt)}else{if(pt.isInstancedBufferAttribute){for(let Et=0;Et<nt.locationSize;Et++)g(nt.location+Et,pt.meshPerAttribute);B.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Et=0;Et<nt.locationSize;Et++)p(nt.location+Et);i.bindBuffer(i.ARRAY_BUFFER,M);for(let Et=0;Et<nt.locationSize;Et++)E(nt.location+Et,Ht/nt.locationSize,j,Ft,Ht*J,Ht/nt.locationSize*Et*J,wt)}}else if(z!==void 0){let Ft=z[it];if(Ft!==void 0)switch(Ft.length){case 2:i.vertexAttrib2fv(nt.location,Ft);break;case 3:i.vertexAttrib3fv(nt.location,Ft);break;case 4:i.vertexAttrib4fv(nt.location,Ft);break;default:i.vertexAttrib1fv(nt.location,Ft)}}}}b()}function I(){R();for(let B in n){let q=n[B];for(let U in q){let $=q[U];for(let D in $){let O=$[D];for(let z in O)u(O[z].object),delete O[z];delete $[D]}}delete n[B]}}function C(B){if(n[B.id]===void 0)return;let q=n[B.id];for(let U in q){let $=q[U];for(let D in $){let O=$[D];for(let z in O)u(O[z].object),delete O[z];delete $[D]}}delete n[B.id]}function y(B){for(let q in n){let U=n[q];for(let $ in U){let D=U[$];if(D[B.id]===void 0)continue;let O=D[B.id];for(let z in O)u(O[z].object),delete O[z];delete D[B.id]}}}function _(B){for(let q in n){let U=n[q],$=B.isInstancedMesh===!0?B.id:0,D=U[$];if(D!==void 0){for(let O in D){let z=D[O];for(let it in z)u(z[it].object),delete z[it];delete D[O]}delete U[$],Object.keys(U).length===0&&delete n[q]}}}function R(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfObject:_,releaseStatesOfProgram:y,initAttributes:w,enableAttribute:p,disableUnusedAttributes:b}}function rg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function og(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(y){return!(y!==_i&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let _=y===xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==On&&y!==ri&&!_&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&h===!1;e.reversedDepthBuffer===!0&&h===!1&&ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&h===!0&&ve("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:w,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:A,maxSamples:I,samples:C}}function ag(i){let t=this,e=null,n=0,s=!1,r=!1,o=new di,a=new Re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,w=h.clipIntersection,p=h.clipShadows,g=i.get(h);if(!s||m===null||m.length===0||r&&!p)r?u(null):c();else{let b=r?0:n,E=b*4,A=g.clippingState||null;l.value=A,A=u(m,f,E,d);for(let I=0;I!==E;++I)A[I]=e[I];g.clippingState=A,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,m){let w=h!==null?h.length:0,p=null;if(w!==0){if(p=l.value,m!==!0||p===null){let g=d+w*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<g)&&(p=new Float32Array(g));for(let E=0,A=d;E!==w;++E,A+=4)o.copy(h[E]).applyMatrix4(b,a),o.normal.toArray(p,A),p[A+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,p}}var vo=class extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Vr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ue(5,5,5),r=new si({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Ss});r.uniforms.tEquirect.value=e;let o=new Pt(s,r),a=e.minFilter;return e.minFilter===Wi&&(e.minFilter=Pn),new nr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},dd=256,lg=3,cg=20,Nd=256,Ud=16,hg=3,ug=new k,dg=new xe,Ul=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new nr(1,10,null),this._boxMesh=new Pt(new Ue(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=ug}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,w=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,w===null&&(t.background=l.getClearColor(dg));let p=new nr(n,s,u);return p.position.copy(a),p.update(l,t),l.autoClear=h,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=m,t.background=w,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(dd,td(t))}_fromTexture(t,e){t.mapping===ws||t.mapping===rr?this._setSize(t.image.length===0?dd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=fd(t,!1,!1),n=Math.log2(t)-lg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=fd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ws||t.mapping===rr?(this._cubemapMaterial===null&&(this._cubemapMaterial=md()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=pd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=fg(),this._integrationMaterial=pg());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Ud);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-hg)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Nd*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=mg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function fd(i,t,e){return new vo(i,{minFilter:Wi,generateMipmaps:t,type:xi,colorSpace:Cr,depthBuffer:e})}function Mo(i,t,e){return new si({name:i,uniforms:t,vertexShader:ze.cube_vert,fragmentShader:e,side:Mn,blending:Ss,depthTest:!1,depthWrite:!1})}function fg(){return Mo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Nd}u

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
	`)}function pg(){return Mo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ud}},`

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
	`)}function mg(){return Mo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${cg}
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
	`)}function pd(){return Mo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function md(){return Mo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureLod( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ), 0.0 ).rgb, 1.0 );

		}
	`)}function gg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Ya||d===Za)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let w=new vo(m.height);return w.fromEquirectangularTexture(i,f),t.set(f,w),f.addEventListener("dispose",c),a(w.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,m=d===Ya||d===Za,w=d===ws||d===rr;if(m||w){let p=e.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Ul(i)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let b=f.image;return m&&b&&b.height>0||w&&b&&l(b)?(n===null&&(n=new Ul(i)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,d){return d===Ya?f.mapping=ws:d===Za&&(f.mapping=rr),f}function l(f){let d=0,m=6;for(let w=0;w<m;w++)f[w]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function xg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&wr("WebGLRenderer: "+n+" extension not supported."),s}}}function _g(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let w=r.get(m);w&&(t.remove(w),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,w){return s[w.id]!==void 0||(w.addEventListener("dispose",a),s[w.id]=new WeakRef(w),o.register(w,w.id,w),e.memory.geometries++),w}function u(m){let w=m.attributes;for(let p in w)t.update(w[p],i.ARRAY_BUFFER)}function h(m){let w=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let b=w!==null?w.count:p.count-1,E=p.count>=65535?zr:Ur,A=new E(Math.ceil(b/3)*6,1),I=A.array;if(w!==null){let y=w.array;g=w.version;for(let _=0,R=0;_<b;_+=3){let T=y[_+0],B=y[_+1],q=y[_+2];I[R++]=T,I[R++]=B,I[R++]=B,I[R++]=q,I[R++]=q,I[R++]=T}}else{g=p.version;for(let y=0,_=0;y<b;y+=3){let R=y+0,T=y+1,B=y+2;I[_++]=R,I[_++]=T,I[_++]=T,I[_++]=B,I[_++]=B,I[_++]=R}}A.version=g;let C=r.get(m);C&&t.remove(C),r.set(m,A)}function f(m){let w=r.get(m);if(w){let p=m.index;p!==null&&w.version<p.version&&h(m)}else h(m);return r.get(m)}function d(){for(let m in s){let w=s[m].deref();w!==void 0&&l(w)}}return{get:c,update:u,getWireframeAttribute:f,dispose:d}}function yg(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*o),e.update(f,n,1)}function c(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,h*o,d),e.update(f,n,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,d);let w=0;for(let p=0;p<d;p++)w+=f[p];e.update(w,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function vg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:be("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Mg(i,t,e){let n=new WeakMap,s=new sn;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let R=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,w=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],E=0;d===!0&&(E=1),m===!0&&(E=2),w===!0&&(E=3);let A=a.attributes.position.count*E,I=1;A>t.maxTextureSize&&(I=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);let C=new Float32Array(A*I*4*h),y=new Fr(C,A,I,h);y.type=ri,y.needsUpdate=!0;let _=E*4;for(let T=0;T<h;T++){let B=p[T],q=g[T],U=b[T],$=A*I*4*T;for(let D=0;D<B.count;D++){let O=D*_;d===!0&&(s.fromBufferAttribute(B,D),C[$+O+0]=s.x,C[$+O+1]=s.y,C[$+O+2]=s.z,C[$+O+3]=0),m===!0&&(s.fromBufferAttribute(q,D),C[$+O+4]=s.x,C[$+O+5]=s.y,C[$+O+6]=s.z,C[$+O+7]=0),w===!0&&(s.fromBufferAttribute(U,D),C[$+O+8]=s.x,C[$+O+9]=s.y,C[$+O+10]=s.z,C[$+O+11]=U.itemSize===4?s.w:1)}}f={count:h,texture:y,size:new ct(A,I)},n.set(a,f),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let w=0;w<c.length;w++)d+=c[w];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Sg(i,t,e,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,f=t.get(c,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var bg={[zc]:"LINEAR_TONE_MAPPING",[Oc]:"REINHARD_TONE_MAPPING",[Bc]:"CINEON_TONE_MAPPING",[lo]:"ACES_FILMIC_TONE_MAPPING",[Vc]:"AGX_TONE_MAPPING",[Gc]:"NEUTRAL_TONE_MAPPING",[kc]:"CUSTOM_TONE_MAPPING"};function wg(i,t,e,n,s,r){let o=new Hn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Ve;u.setAttribute("position",new Ce([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ce([0,2,0,0,2,0],2));let h=new Pa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Pt(u,h),d=new vs(-1,1,1,-1,0,1),m=null,w=null,p=!1,g,b=null,E=[],A=!1;this.setSize=function(I,C){o.setSize(I,C),a!==null&&a.setSize(I,C),l!==null&&l.setSize(I,C);for(let y=0;y<E.length;y++){let _=E[y];_.setSize&&_.setSize(I,C)}},this.setEffects=function(I){E=I,A=E.length>0&&E[0].isRenderPass===!0;let C=o.width,y=o.height;E.length>0&&a===null&&(a=new Hn(C,y,{type:xi,depthBuffer:!1,stencilBuffer:!1}),l=new Hn(C,y,{type:xi,depthBuffer:!1,stencilBuffer:!1}));let _=s===!0&&E.some(R=>R.needsDepthTexture===!0);_!==(o.depthTexture!==null)&&(_===!0&&c===null&&(c=new ki(C,y),r===!0&&(c.format=Xi,c.type=As)),o.dispose(),o.depthTexture=_?c:null,o.resolveDepthBuffer=_,o.storeMultisampledDepthBuffer=_);for(let R=0;R<E.length;R++){let T=E[R];T.setSize&&T.setSize(C,y),_&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(c)}},this.begin=function(I,C){if(p||I.toneMapping===Ci&&E.length===0)return!1;if(b=C,C!==null){let y=C.width,_=C.height;(o.width!==y||o.height!==_)&&this.setSize(y,_)}return A===!1&&I.setRenderTarget(o),g=I.toneMapping,I.toneMapping=Ci,!0},this.hasRenderPass=function(){return A},this.end=function(I,C){I.toneMapping=g,p=!0;let y=o,_=a;for(let R=0;R<E.length;R++){let T=E[R];T.enabled!==!1&&(T.render(I,_,y,C),T.needsSwap!==!1&&(y=_,_=_===a?l:a))}if(m!==I.outputColorSpace||w!==I.toneMapping){m=I.outputColorSpace,w=I.toneMapping,h.defines={},qe.getTransfer(m)===Ke&&(h.defines.SRGB_TRANSFER="");let R=bg[w];R&&(h.defines[R]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,I.setRenderTarget(b),I.render(f,d),b=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var zd=new In,Od=new ki(1,1),Bd=new Hr(1),kd=new Fr,Vd=new ya,Gd=new Vr,gd=[],xd=[],_d=new Float32Array(16),yd=new Float32Array(9),vd=new Float32Array(4);function lr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=gd[s];if(r===void 0&&(r=new Float32Array(s),gd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function xn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _n(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ol(i,t){let e=xd[t];e===void 0&&(e=new Int32Array(t),xd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ag(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xn(e,t))return;i.uniform2fv(this.addr,t),_n(e,t)}}function Tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xn(e,t))return;i.uniform3fv(this.addr,t),_n(e,t)}}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xn(e,t))return;i.uniform4fv(this.addr,t),_n(e,t)}}function Rg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_n(e,t)}else{if(xn(e,n))return;vd.set(n),i.uniformMatrix2fv(this.addr,!1,vd),_n(e,n)}}function Pg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_n(e,t)}else{if(xn(e,n))return;yd.set(n),i.uniformMatrix3fv(this.addr,!1,yd),_n(e,n)}}function Ig(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_n(e,t)}else{if(xn(e,n))return;_d.set(n),i.uniformMatrix4fv(this.addr,!1,_d),_n(e,n)}}function Fg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xn(e,t))return;i.uniform2iv(this.addr,t),_n(e,t)}}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xn(e,t))return;i.uniform3iv(this.addr,t),_n(e,t)}}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xn(e,t))return;i.uniform4iv(this.addr,t),_n(e,t)}}function Ug(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xn(e,t))return;i.uniform2uiv(this.addr,t),_n(e,t)}}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xn(e,t))return;i.uniform3uiv(this.addr,t),_n(e,t)}}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xn(e,t))return;i.uniform4uiv(this.addr,t),_n(e,t)}}function Bl(i){return i.version===0&&(i.compareFunction=Qc,i.needsUpdate=!0),i}function kg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Bl(Od):r=zd,e.setTexture2D(t||r,s)}function Vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vd,s)}function Gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Bl(Bd):r=Gd,e.setTextureCube(t||r,s)}function Hg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||kd,s)}function Wg(i){switch(i){case 5126:return Ag;case 35664:return Eg;case 35665:return Tg;case 35666:return Cg;case 35674:return Rg;case 35675:return Pg;case 35676:return Ig;case 5124:case 35670:return Fg;case 35667:case 35671:return Lg;case 35668:case 35672:return Dg;case 35669:case 35673:return Ng;case 5125:return Ug;case 36294:return zg;case 36295:return Og;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Hg}}function Xg(i,t){i.uniform1fv(this.addr,t)}function qg(i,t){let e=lr(t,this.size,2);i.uniform2fv(this.addr,e)}function Yg(i,t){let e=lr(t,this.size,3);i.uniform3fv(this.addr,e)}function Zg(i,t){let e=lr(t,this.size,4);i.uniform4fv(this.addr,e)}function Jg(i,t){let e=lr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $g(i,t){let e=lr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Kg(i,t){let e=lr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Qg(i,t){i.uniform1iv(this.addr,t)}function jg(i,t){i.uniform2iv(this.addr,t)}function tx(i,t){i.uniform3iv(this.addr,t)}function ex(i,t){i.uniform4iv(this.addr,t)}function nx(i,t){i.uniform1uiv(this.addr,t)}function ix(i,t){i.uniform2uiv(this.addr,t)}function sx(i,t){i.uniform3uiv(this.addr,t)}function rx(i,t){i.uniform4uiv(this.addr,t)}function ox(i,t,e){let n=this.cache,s=t.length,r=Ol(e,s);xn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Bl(Od):o=zd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function ax(i,t,e){let n=this.cache,s=t.length,r=Ol(e,s);xn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Vd,r[o])}function lx(i,t,e){let n=this.cache,s=t.length,r=Ol(e,s);xn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Bl(Bd):o=Gd;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function cx(i,t,e){let n=this.cache,s=t.length,r=Ol(e,s);xn(n,r)||(i.uniform1iv(this.addr,r),_n(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||kd,r[o])}function hx(i){switch(i){case 5126:return Xg;case 35664:return qg;case 35665:return Yg;case 35666:return Zg;case 35674:return Jg;case 35675:return $g;case 35676:return Kg;case 5124:case 35670:return Qg;case 35667:case 35671:return jg;case 35668:case 35672:return tx;case 35669:case 35673:return ex;case 5125:return nx;case 36294:return ix;case 36295:return sx;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return ox;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return cx}}var fh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wg(e.type)}},ph=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hx(e.type)}},mh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},uh=/(\w+)(\])?(\[|\.)?/g;function Md(i,t){i.seq.push(t),i.map[t.id]=t}function ux(i,t,e){let n=i.name,s=n.length;for(uh.lastIndex=0;;){let r=uh.exec(n),o=uh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Md(e,c===void 0?new fh(a,i,t):new ph(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new mh(a),Md(e,h)),e=h}}}var ar=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);ux(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Sd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var dx=37297,fx=0;function px(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var bd=new Re;function mx(i){qe._getMatrix(bd,qe.workingColorSpace,i);let t=`mat3( ${bd.elements.map(e=>e.toFixed(4))} )`;switch(qe.getTransfer(i)){case Rr:return[t,"LinearTransferOETF"];case Ke:return[t,"sRGBTransferOETF"];default:return ve("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+px(i.getShaderSource(t),a)}else return r}function gx(i,t){let e=mx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var xx={[zc]:"Linear",[Oc]:"Reinhard",[Bc]:"Cineon",[lo]:"ACESFilmic",[Vc]:"AgX",[Gc]:"Neutral",[kc]:"Custom"};function _x(i,t){let e=xx[t];return e===void 0?(ve("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Nl=new k;function yx(){qe.getLuminanceCoefficients(Nl);let i=Nl.x.toFixed(4),t=Nl.y.toFixed(4),e=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function Mx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function yo(i){return i!==""}function Ad(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ed(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(i){return i.replace(bx,wx)}function wx(i,t){let e=ze[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return gh(e)}var Ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(i){return i.replace(Ax,Ex)}function Ex(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Tx={[Ms]:"SHADOWMAP_TYPE_PCF",[ir]:"SHADOWMAP_TYPE_VSM"};function Cx(i){return Tx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Rx={[rr]:"ENVMAP_MODE_REFRACTION"};function Px(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Rx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ix={[ao]:"ENVMAP_BLENDING_MULTIPLY",[Bu]:"ENVMAP_BLENDING_MIX",[ku]:"ENVMAP_BLENDING_ADD"};function Fx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ix[i.combine]||"ENVMAP_BLENDING_NONE"}function Lx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Cx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Px(e),h=Fx(e),f=vx(e),d=Mx(r),m=s.createProgram(),w,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(w=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(yo).join(`
`),w.length>0&&(w+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(yo).join(`
`),p.length>0&&(p+=`
`)):(w=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),p=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ci?"#define TONE_MAPPING":"",e.toneMapping!==Ci?ze.tonemapping_pars_fragment:"",e.toneMapping!==Ci?_x("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,gx("linearToOutputTexel",e.outputColorSpace),yx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yo).join(`
`)),o=gh(o),o=Ad(o,e),o=Ed(o,e),a=gh(a),a=Ad(a,e),a=Ed(a,e),o=Td(o),a=Td(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,w=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,p=["#define varying in",e.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=g+w+o,E=g+p+a,A=Sd(s,s.VERTEX_SHADER,b),I=Sd(s,s.FRAGMENT_SHADER,E);s.attachShader(m,A),s.attachShader(m,I),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function C(T){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(m)||"",q=s.getShaderInfoLog(A)||"",U=s.getShaderInfoLog(I)||"",$=B.trim(),D=q.trim(),O=U.trim(),z=!0,it=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,A,I);else{let nt=wd(s,A,"vertex"),pt=wd(s,I,"fragment");be("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+$+`
`+nt+`
`+pt)}else $!==""?ve("WebGLProgram: Program Info Log:",$):(D===""||O==="")&&(it=!1);it&&(T.diagnostics={runnable:z,programLog:$,vertexShader:{log:D,prefix:w},fragmentShader:{log:O,prefix:p}})}s.deleteShader(A),s.deleteShader(I),y=new ar(s,m),_=Sx(s,m)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let _;this.getAttributes=function(){return _===void 0&&C(this),_};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(m,dx)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=I,this}var Dx=0,xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new _h(t),e.set(t,n)),n}},_h=class{constructor(t){this.id=Dx++,this.code=t,this.usedTimes=0}};function Nx(i){return i===ls||i===mo||i===go}function Ux(i,t,e,n,s,r){let o=new Lr,a=new xh,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,_,R,T,B,q){let U=T.fog,$=B.geometry,D=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?T.environment:null,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,z=t.get(y.envMap||D,O),it=f[y.type],nt=n.precision;y.precision!==null&&(nt=n.getMaxPrecision(y.precision),nt!==y.precision&&ve("WebGLProgram.getParameters:",y.precision,"not supported, using",nt,"instead."));let pt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ft=pt!==void 0?pt.length:0,Ht=0;$.morphAttributes.position!==void 0&&(Ht=1),$.morphAttributes.normal!==void 0&&(Ht=2),$.morphAttributes.color!==void 0&&(Ht=3);let S,M,j,J;if(it){let se=Pi[it];S=se.vertexShader,M=se.fragmentShader}else{S=y.vertexShader,M=y.fragmentShader;let se=a.getVertexShaderStage(y),Oe=a.getFragmentShaderStage(y);a.update(y,se,Oe),j=se.id,J=Oe.id}let wt=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),Lt=B.isInstancedMesh===!0,he=B.isBatchedMesh===!0,$t=!!y.map,Kt=!!y.matcap,ue=!!z,mt=ue&&z.isPMREMTexture===!0,gt=!!y.aoMap,Ct=!!y.lightMap,rt=!!y.bumpMap&&y.wireframe===!1,vt=!!y.normalMap,Jt=!!y.displacementMap,jt=!!y.emissiveMap,ce=!!y.metalnessMap,ee=!!y.roughnessMap,de=y.anisotropy>0,Z=y.clearcoat>0,Le=y.diffuseRoughness>0,K=y.dispersion>0,ht=y.retroreflectivity>0,Y=y.iridescence>0,Qt=y.sheen>0,Rt=y.transmission>0,Ut=de&&!!y.anisotropyMap,F=Z&&!!y.clearcoatMap,v=Z&&!!y.clearcoatNormalMap,st=Z&&!!y.clearcoatRoughnessMap,ut=Le&&!!y.diffuseRoughnessMap,_t=Y&&!!y.iridescenceMap,Bt=Y&&!!y.iridescenceThicknessMap,Vt=Qt&&!!y.sheenColorMap,yt=Qt&&!!y.sheenRoughnessMap,Mt=!!y.specularMap,qt=!!y.specularColorMap,ae=!!y.specularIntensityMap,W=Rt&&!!y.transmissionMap,At=Rt&&!!y.thicknessMap,zt=!!y.gradientMap,Yt=!!y.alphaMap,ne=y.alphaTest>0,ie=!!y.alphaHash,Me=!!y.extensions,Gt=Ci;y.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(Gt=i.toneMapping);let De=mt?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,fe={shaderID:it,shaderType:y.type,shaderName:y.name,vertexShader:S,fragmentShader:M,defines:y.defines,customVertexShaderID:j,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:nt,batching:he,batchingColor:he&&B._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&B.instanceColor!==null,instancingMorph:Lt&&B.morphTexture!==null,outputColorSpace:wt===null?i.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:$t,matcap:Kt,envMap:ue,envMapMode:ue&&z.mapping,envMapPMREM:mt,envMapMaxLod:mt?De.length-1:null,envMapSize:mt?De[0].width:null,aoMap:gt,lightMap:Ct,bumpMap:rt,normalMap:vt,displacementMap:Jt,emissiveMap:jt,normalMapObjectSpace:vt&&y.normalMapType===Hu,normalMapTangentSpace:vt&&y.normalMapType===xo,packedNormalMap:vt&&y.normalMapType===xo&&Nx(y.normalMap.format),metalnessMap:ce,roughnessMap:ee,anisotropy:de,anisotropyMap:Ut,clearcoat:Z,clearcoatMap:F,clearcoatNormalMap:v,clearcoatRoughnessMap:st,diffuseRoughness:Le,diffuseRoughnessMap:ut,dispersion:K,retroreflection:ht,iridescence:Y,iridescenceMap:_t,iridescenceThicknessMap:Bt,sheen:Qt,sheenColorMap:Vt,sheenRoughnessMap:yt,specularMap:Mt,specularColorMap:qt,specularIntensityMap:ae,transmission:Rt,transmissionMap:W,thicknessMap:At,gradientMap:zt,opaque:y.transparent===!1&&y.blending===sr&&y.alphaToCoverage===!1,alphaMap:Yt,alphaTest:ne,alphaHash:ie,combine:y.combine,mapUv:$t&&d(y.map.channel),aoMapUv:gt&&d(y.aoMap.channel),lightMapUv:Ct&&d(y.lightMap.channel),bumpMapUv:rt&&d(y.bumpMap.channel),normalMapUv:vt&&d(y.normalMap.channel),displacementMapUv:Jt&&d(y.displacementMap.channel),emissiveMapUv:jt&&d(y.emissiveMap.channel),metalnessMapUv:ce&&d(y.metalnessMap.channel),roughnessMapUv:ee&&d(y.roughnessMap.channel),anisotropyMapUv:Ut&&d(y.anisotropyMap.channel),clearcoatMapUv:F&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:v&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&d(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ut&&d(y.diffuseRoughnessMap.channel),iridescenceMapUv:_t&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:yt&&d(y.sheenRoughnessMap.channel),specularMapUv:Mt&&d(y.specularMap.channel),specularColorMapUv:qt&&d(y.specularColorMap.channel),specularIntensityMapUv:ae&&d(y.specularIntensityMap.channel),transmissionMapUv:W&&d(y.transmissionMap.channel),thicknessMapUv:At&&d(y.thicknessMap.channel),alphaMapUv:Yt&&d(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(vt||de),vertexNormals:!!$.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&($t||Yt),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||$.attributes.normal===void 0&&vt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Et,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:Ht,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbeGrids:q.filter(se=>se.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gt,decodeVideoTexture:$t&&y.map.isVideoTexture===!0&&qe.getTransfer(y.map.colorSpace)===Ke,decodeVideoTextureEmissive:jt&&y.emissiveMap.isVideoTexture===!0&&qe.getTransfer(y.emissiveMap.colorSpace)===Ke,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Xe,flipSided:y.side===Mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Me&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&y.extensions.multiDraw===!0||he)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function w(y){let _=[];if(y.shaderID?_.push(y.shaderID):(_.push(y.customVertexShaderID),_.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)_.push(R),_.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(p(_,y),g(_,y),_.push(i.outputColorSpace)),_.push(y.customProgramCacheKey),_.join()}function p(y,_){y.push(_.precision),y.push(_.outputColorSpace),y.push(_.envMapMode),y.push(_.envMapPMREM),y.push(_.envMapMaxLod),y.push(_.envMapSize),y.push(_.mapUv),y.push(_.alphaMapUv),y.push(_.lightMapUv),y.push(_.aoMapUv),y.push(_.bumpMapUv),y.push(_.normalMapUv),y.push(_.displacementMapUv),y.push(_.emissiveMapUv),y.push(_.metalnessMapUv),y.push(_.roughnessMapUv),y.push(_.anisotropyMapUv),y.push(_.clearcoatMapUv),y.push(_.clearcoatNormalMapUv),y.push(_.clearcoatRoughnessMapUv),y.push(_.diffuseRoughnessMapUv),y.push(_.iridescenceMapUv),y.push(_.iridescenceThicknessMapUv),y.push(_.sheenColorMapUv),y.push(_.sheenRoughnessMapUv),y.push(_.specularMapUv),y.push(_.specularColorMapUv),y.push(_.specularIntensityMapUv),y.push(_.transmissionMapUv),y.push(_.thicknessMapUv),y.push(_.combine),y.push(_.fogExp2),y.push(_.sizeAttenuation),y.push(_.morphTargetsCount),y.push(_.numSunLights),y.push(_.numDirLights),y.push(_.numPointLights),y.push(_.numSpotLights),y.push(_.numSpotLightMaps),y.push(_.numHemiLights),y.push(_.numRectAreaLights),y.push(_.numSunLightShadows),y.push(_.numDirLightShadows),y.push(_.numPointLightShadows),y.push(_.numSpotLightShadows),y.push(_.numSpotLightShadowsWithMaps),y.push(_.numLightProbeGrids),y.push(_.shadowMapType),y.push(_.toneMapping),y.push(_.numClippingPlanes),y.push(_.numClipIntersection),y.push(_.depthPacking)}function g(y,_){o.disableAll(),_.instancing&&o.enable(0),_.instancingColor&&o.enable(1),_.instancingMorph&&o.enable(2),_.matcap&&o.enable(3),_.envMap&&o.enable(4),_.normalMapObjectSpace&&o.enable(5),_.normalMapTangentSpace&&o.enable(6),_.clearcoat&&o.enable(7),_.iridescence&&o.enable(8),_.alphaTest&&o.enable(9),_.vertexColors&&o.enable(10),_.vertexAlphas&&o.enable(11),_.vertexUv1s&&o.enable(12),_.vertexUv2s&&o.enable(13),_.vertexUv3s&&o.enable(14),_.vertexTangents&&o.enable(15),_.anisotropy&&o.enable(16),_.alphaHash&&o.enable(17),_.batching&&o.enable(18),_.dispersion&&o.enable(19),_.retroreflection&&o.enable(24),_.diffuseRoughness&&o.enable(25),_.batchingColor&&o.enable(20),_.gradientMap&&o.enable(21),_.packedNormalMap&&o.enable(22),_.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),_.numLightProbeGrids>0&&o.enable(22),_.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function b(y){let _=f[y.type],R;if(_){let T=Pi[_];R=cd.clone(T.uniforms)}else R=y.uniforms;return R}function E(y,_){let R=u.get(_);return R!==void 0?++R.usedTimes:(R=new Lx(i,_,y,s),c.push(R),u.set(_,R)),R}function A(y){if(--y.usedTimes===0){let _=c.indexOf(y);c[_]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function I(y){a.remove(y)}function C(){a.dispose()}return{getParameters:m,getProgramCacheKey:w,getUniforms:b,acquireProgram:E,releaseProgram:A,releaseShaderCache:I,programs:c,dispose:C}}function zx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ox(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Rd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,w,p,g){let b=i[t];return b===void 0?(b={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:w,renderOrder:f.renderOrder,z:p,group:g},i[t]=b):(b.id=f.id,b.object=f,b.geometry=d,b.material=m,b.materialVariant=o(f),b.groupOrder=w,b.renderOrder=f.renderOrder,b.z=p,b.group=g),t++,b}function l(f,d,m,w,p,g,b){b.reversedDepth===!0&&(p=-p);let E=a(f,d,m,w,p,g);m.transmission>0?n.push(E):m.transparent===!0?s.push(E):e.push(E)}function c(f,d,m,w,p,g){let b=a(f,d,m,w,p,g);m.transmission>0?n.unshift(b):m.transparent===!0?s.unshift(b):e.unshift(b)}function u(f,d){e.length>1&&e.sort(f||Ox),n.length>1&&n.sort(d||Rd),s.length>1&&s.sort(d||Rd)}function h(){for(let f=t,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function Bx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Pd,i.set(n,[o])):s>=r.length?(o=new Pd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function kx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new xe};break;case"SpotLight":e={position:new k,direction:new k,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new xe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":e={color:new xe,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function Vx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Gx=0;function Hx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Wx(i){let t=new kx,e=Vx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0},s=new k,r=new Ze,o=new Ze;function a(c){let u=0,h=0,f=0,d=0,m=0,w=0,p=0,g=0,b=0,E=0,A=0,I=0,C=0,y=0,_=0,R=0;c.sort(Hx);for(let B=0,q=c.length;B<q;B++){let U=c[B],$=U.color,D=U.intensity,O=U.distance,z=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===ls?z=U.shadow.map.texture:z=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=$.r*D,h+=$.g*D,f+=$.b*D;else if(U.isSunLight){let it=t.get(U);if(it.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let nt=U.shadow,pt=e.get(U);pt.shadowIntensity=nt.intensity,pt.shadowBias=nt.bias,pt.shadowNormalBias=nt.normalBias,pt.shadowRadius=nt.radius,pt.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[m]=pt,n.sunShadowMap[m]=z;let Ft=nt.getViewportCount();for(let Ht=0;Ht<Ft;Ht++)n.sunShadowMatrix[w+Ht]=nt.getMatrix(Ht),n.sunShadowCascade[w+Ht]=nt._cascadeData[Ht];w+=Ft,m++}n.sun[d]=it,d++}else if(U.isDirectionalLight){let it=t.get(U);if(it.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let nt=U.shadow,pt=e.get(U);pt.shadowIntensity=nt.intensity,pt.shadowBias=nt.bias,pt.shadowNormalBias=nt.normalBias,pt.shadowRadius=nt.radius,pt.shadowMapSize=nt.mapSize,n.directionalShadow[p]=pt,n.directionalShadowMap[p]=z,n.directionalShadowMatrix[p]=U.shadow.matrix,I++}n.directional[p]=it,p++}else if(U.isSpotLight){let it=t.get(U);it.position.setFromMatrixPosition(U.matrixWorld),it.color.copy($).multiplyScalar(D),it.distance=O,it.coneCos=Math.cos(U.angle),it.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),it.decay=U.decay,n.spot[b]=it;let nt=U.shadow;if(U.map&&(n.spotLightMap[_]=U.map,_++,nt.updateMatrices(U),U.castShadow&&R++),n.spotLightMatrix[b]=nt.matrix,U.castShadow){let pt=e.get(U);pt.shadowIntensity=nt.intensity,pt.shadowBias=nt.bias,pt.shadowNormalBias=nt.normalBias,pt.shadowRadius=nt.radius,pt.shadowMapSize=nt.mapSize,n.spotShadow[b]=pt,n.spotShadowMap[b]=z,y++}b++}else if(U.isRectAreaLight){let it=t.get(U);it.color.copy($).multiplyScalar(D),it.halfWidth.set(U.width*.5,0,0),it.halfHeight.set(0,U.height*.5,0),n.rectArea[E]=it,E++}else if(U.isPointLight){let it=t.get(U);if(it.color.copy(U.color).multiplyScalar(U.intensity),it.distance=U.distance,it.decay=U.decay,U.castShadow){let nt=U.shadow,pt=e.get(U);pt.shadowIntensity=nt.intensity,pt.shadowBias=nt.bias,pt.shadowNormalBias=nt.normalBias,pt.shadowRadius=nt.radius,pt.shadowMapSize=nt.mapSize,pt.shadowCameraNear=nt.camera.near,pt.shadowCameraFar=nt.camera.far,n.pointShadow[g]=pt,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=U.shadow.matrix,C++}n.point[g]=it,g++}else if(U.isHemisphereLight){let it=t.get(U);it.skyColor.copy(U.color).multiplyScalar(D),it.groundColor.copy(U.groundColor).multiplyScalar(D),n.hemi[A]=it,A++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let T=n.hash;(T.sunLength!==d||T.directionalLength!==p||T.pointLength!==g||T.spotLength!==b||T.rectAreaLength!==E||T.hemiLength!==A||T.numSunShadows!==m||T.numDirectionalShadows!==I||T.numPointShadows!==C||T.numSpotShadows!==y||T.numSpotMaps!==_)&&(n.sun.length=d,n.directional.length=p,n.spot.length=b,n.rectArea.length=E,n.point.length=g,n.hemi.length=A,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=w,n.sunShadowCascade.length=w,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+_-R,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=R,T.sunLength=d,T.directionalLength=p,T.pointLength=g,T.spotLength=b,T.rectAreaLength=E,T.hemiLength=A,T.numSunShadows=m,T.numDirectionalShadows=I,T.numPointShadows=C,T.numSpotShadows=y,T.numSpotMaps=_,n.version=Gx++)}function l(c,u){let h=0,f=0,d=0,m=0,w=0,p=0,g=u.matrixWorldInverse;for(let b=0,E=c.length;b<E;b++){let A=c[b];if(A.isSunLight){let I=n.sun[h];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(g),h++}else if(A.isDirectionalLight){let I=n.directional[f];I.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(g),f++}else if(A.isSpotLight){let I=n.spot[m];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(g),I.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(g),m++}else if(A.isRectAreaLight){let I=n.rectArea[w];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(g),o.identity(),r.copy(A.matrixWorld),r.premultiply(g),o.extractRotation(r),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),w++}else if(A.isPointLight){let I=n.point[d];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(g),d++}else if(A.isHemisphereLight){let I=n.hemi[p];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function Id(i){let t=new Wx(i),e=[],n=[],s=[];function r(h){u.camera=h,e.length=0,n.length=0,s.length=0}function o(h){h.isLightProbeGrid?s.push(h):e.push(h)}function a(h){n.push(h)}function l(){t.setup(e),s.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function c(h){t.setupView(e,h)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Xx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Id(i),t.set(s,[a])):r>=o.length?(a=new Id(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var qx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yx=`uniform sampler2D shadow_pass;
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
}`,Zx=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Jx=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Fd=new Ze,_o=new k,dh=new k;function $x(i,t,e){let n=new ns,s=new ct,r=new ct,o=new sn,a=new Ia,l=new Fa,c={},u=e.maxTextureSize,h={[as]:Mn,[Mn]:as,[Xe]:Xe},f=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:qx,fragmentShader:Yx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ve;m.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new Pt(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ms;let g=this.type;this.render=function(C,y,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;this.type===vu&&(ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ms);let R=i.getRenderTarget(),T=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Ss),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let U=g!==this.type;U&&y.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(D=>D.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,D=C.length;$<D;$++){let O=C[$],z=O.shadow;if(z===void 0){ve("WebGLShadowMap:",O,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let it=z.getFrameExtents();s.multiply(it),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/it.x),s.x=r.x*it.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/it.y),s.y=r.y*it.y,z.mapSize.y=r.y));let nt=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=nt,z.map===null||U===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ir){if(O.isPointLight){ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Hn(s.x,s.y,{format:ls,type:xi,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),z.map.texture.name=O.name+".shadowMap",z.map.depthTexture=new ki(s.x,s.y,ri),z.map.depthTexture.name=O.name+".shadowMapDepth",z.map.depthTexture.format=Bi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=vn,z.map.depthTexture.magFilter=vn}else O.isPointLight?(z.map=new vo(s.x),z.map.depthTexture=new Hr(s.x,gi)):(z.map=new Hn(s.x,s.y),z.map.depthTexture=new ki(s.x,s.y,gi)),z.map.depthTexture.name=O.name+".shadowMap",z.map.depthTexture.format=Bi,this.type===Ms?(z.map.depthTexture.compareFunction=nt?Kc:$c,z.map.depthTexture.minFilter=Pn,z.map.depthTexture.magFilter=Pn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=vn,z.map.depthTexture.magFilter=vn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let pt=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();O.isPointLight!==!0&&z.updateMatrices(O,_);let Ft=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:_.layers;for(let Ht=0;Ht<pt;Ht++){let S=z.getCamera(Ht);if(O.isPointLight){let M=z.camera,j=z.matrix,J=O.distance||M.far;J!==M.far&&(M.far=J,M.updateProjectionMatrix()),_o.setFromMatrixPosition(O.matrixWorld),M.position.copy(_o),dh.copy(M.position),dh.add(Zx[Ht]),M.up.copy(Jx[Ht]),M.lookAt(dh),M.updateMatrixWorld(),j.makeTranslation(-_o.x,-_o.y,-_o.z),Fd.multiplyMatrices(M.projectionMatrix,M.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Fd,M.coordinateSystem,M.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,Ht),i.clear();else{Ht===0&&(i.setRenderTarget(z.map),i.clear());let M=z.getViewport(Ht);o.set(r.x*M.x,r.y*M.y,r.x*M.z,r.y*M.w),q.viewport(o)}n=z.getFrustum(Ht),A(y,_,S,O,Ft,this.type)}z.isPointLightShadow!==!0&&this.type===ir&&b(z,_),z.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(R,T,B)};function b(C,y){let _=t.update(w);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null?C.mapPass=new Hn(s.x,s.y,{format:ls,type:xi}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value.set(C.map.width,C.map.height),f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(y,null,_,f,w,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value.set(C.map.width,C.map.height),d.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(y,null,_,d,w,null)}function E(C,y,_,R){let T=null,B=_.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(B!==void 0)T=B;else if(T=_.isPointLight===!0?l:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let q=T.uuid,U=y.uuid,$=c[q];$===void 0&&($={},c[q]=$);let D=$[U];D===void 0&&(D=T.clone(),$[U]=D,y.addEventListener("dispose",I)),T=D}if(T.visible=y.visible,T.wireframe=y.wireframe,R===ir?T.side=y.shadowSide!==null?y.shadowSide:y.side:T.side=y.shadowSide!==null?y.shadowSide:h[y.side],T.alphaMap=y.alphaMap,T.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,T.map=y.map,T.clipShadows=y.clipShadows,T.clippingPlanes=y.clippingPlanes,T.clipIntersection=y.clipIntersection,T.displacementMap=y.displacementMap,T.displacementScale=y.displacementScale,T.displacementBias=y.displacementBias,T.wireframeLinewidth=y.wireframeLinewidth,T.linewidth=y.linewidth,_.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let q=i.properties.get(T);q.light=_}return T}function A(C,y,_,R,T,B){if(C.visible===!1)return;if(C.layers.test(T)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&B===ir)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,C.matrixWorld);let $=t.update(C),D=C.material;if(Array.isArray(D)){let O=$.groups;for(let z=0,it=O.length;z<it;z++){let nt=O[z],pt=D[nt.materialIndex];if(pt&&pt.visible){let Ft=E(C,pt,R,B);C.onBeforeShadow(i,C,y,_,$,Ft,nt),i.renderBufferDirect(_,null,$,Ft,C,nt),C.onAfterShadow(i,C,y,_,$,Ft,nt)}}}else if(D.visible){let O=E(C,D,R,B);C.onBeforeShadow(i,C,y,_,$,O,null),i.renderBufferDirect(_,null,$,O,C,null),C.onAfterShadow(i,C,y,_,$,O,null)}}let U=C.children;for(let $=0,D=U.length;$<D;$++)A(U[$],y,_,R,T,B)}function I(C){C.target.removeEventListener("dispose",I);for(let _ in c){let R=c[_],T=C.target.uuid;T in R&&(R[T].dispose(),delete R[T])}}}function Kx(i,t){function e(){let W=!1,At=new sn,zt=null,Yt=new sn(0,0,0,0);return{setMask:function(ne){zt!==ne&&!W&&(i.colorMask(ne,ne,ne,ne),zt=ne)},setLocked:function(ne){W=ne},setClear:function(ne,ie,Me,Gt,De){De===!0&&(ne*=Gt,ie*=Gt,Me*=Gt),At.set(ne,ie,Me,Gt),Yt.equals(At)===!1&&(i.clearColor(ne,ie,Me,Gt),Yt.copy(At))},reset:function(){W=!1,zt=null,Yt.set(-1,0,0,0)}}}function n(){let W=!1,At=!1,zt=null,Yt=null,ne=null;return{setReversed:function(ie){if(At!==ie){let Me=t.get("EXT_clip_control");ie?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),At=ie;let Gt=ne;ne=null,this.setClear(Gt)}},getReversed:function(){return At},setTest:function(ie){ie?Et(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(ie){zt!==ie&&!W&&(i.depthMask(ie),zt=ie)},setFunc:function(ie){if(At&&(ie=ju[ie]),Yt!==ie){switch(ie){case aa:i.depthFunc(i.NEVER);break;case la:i.depthFunc(i.ALWAYS);break;case ca:i.depthFunc(i.LESS);break;case qs:i.depthFunc(i.LEQUAL);break;case ha:i.depthFunc(i.EQUAL);break;case ua:i.depthFunc(i.GEQUAL);break;case da:i.depthFunc(i.GREATER);break;case fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Yt=ie}},setLocked:function(ie){W=ie},setClear:function(ie){ne!==ie&&(ne=ie,At&&(ie=1-ie),i.clearDepth(ie))},reset:function(){W=!1,zt=null,Yt=null,ne=null,At=!1}}}function s(){let W=!1,At=null,zt=null,Yt=null,ne=null,ie=null,Me=null,Gt=null,De=null;return{setTest:function(fe){W||(fe?Et(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(fe){At!==fe&&!W&&(i.stencilMask(fe),At=fe)},setFunc:function(fe,se,Oe){(zt!==fe||Yt!==se||ne!==Oe)&&(i.stencilFunc(fe,se,Oe),zt=fe,Yt=se,ne=Oe)},setOp:function(fe,se,Oe){(ie!==fe||Me!==se||Gt!==Oe)&&(i.stencilOp(fe,se,Oe),ie=fe,Me=se,Gt=Oe)},setLocked:function(fe){W=fe},setClear:function(fe){De!==fe&&(i.clearStencil(fe),De=fe)},reset:function(){W=!1,At=null,zt=null,Yt=null,ne=null,ie=null,Me=null,Gt=null,De=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,u={},h={},f={},d=new WeakMap,m=[],w=null,p=!1,g=null,b=null,E=null,A=null,I=null,C=null,y=null,_=new xe(0,0,0),R=0,T=!1,B=null,q=null,U=null,$=null,D=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,it=0,nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(nt)[1]),z=it>=1):nt.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),z=it>=2);let pt=null,Ft={},Ht=i.getParameter(i.SCISSOR_BOX),S=i.getParameter(i.VIEWPORT),M=new sn().fromArray(Ht),j=new sn().fromArray(S);function J(W,At,zt,Yt){let ne=new Uint8Array(4),ie=i.createTexture();i.bindTexture(W,ie),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Me=0;Me<zt;Me++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(At,0,i.RGBA,1,1,Yt,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(At+Me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return ie}let wt={};wt[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),wt[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),wt[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Et(i.DEPTH_TEST),o.setFunc(qs),vt(!1),Jt(Fc),Et(i.CULL_FACE),Ct(Ss);function Et(W){u[W]!==!0&&(i.enable(W),u[W]=!0)}function Lt(W){u[W]!==!1&&(i.disable(W),u[W]=!1)}function he(W,At){return W===i.FRAMEBUFFER?f[i.DRAW_FRAMEBUFFER]===At&&f[i.READ_FRAMEBUFFER]===At?!1:(i.bindFramebuffer(i.FRAMEBUFFER,At),f[i.DRAW_FRAMEBUFFER]=At,f[i.READ_FRAMEBUFFER]=At,!0):f[W]===At?!1:(i.bindFramebuffer(W,At),f[W]=At,!0)}function $t(W){return W===i.FRAMEBUFFER&&(W=i.DRAW_FRAMEBUFFER),f[W]||null}function Kt(W,At){let zt=m,Yt=!1;if(W){zt=d.get(At),zt===void 0&&(zt=[],d.set(At,zt));let ne=W.textures;if(zt.length!==ne.length||zt[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Me=ne.length;ie<Me;ie++)zt[ie]=i.COLOR_ATTACHMENT0+ie;zt.length=ne.length,Yt=!0}}else zt[0]!==i.BACK&&(zt[0]=i.BACK,Yt=!0);Yt&&i.drawBuffers(zt)}function ue(W){return w!==W?(i.useProgram(W),w=W,!0):!1}let mt={[bs]:i.FUNC_ADD,[Su]:i.FUNC_SUBTRACT,[bu]:i.FUNC_REVERSE_SUBTRACT};mt[wu]=i.MIN,mt[Au]=i.MAX;let gt={[Eu]:i.ZERO,[Tu]:i.ONE,[Cu]:i.SRC_COLOR,[Nc]:i.SRC_ALPHA,[Du]:i.SRC_ALPHA_SATURATE,[Fu]:i.DST_COLOR,[Pu]:i.DST_ALPHA,[Ru]:i.ONE_MINUS_SRC_COLOR,[Uc]:i.ONE_MINUS_SRC_ALPHA,[Lu]:i.ONE_MINUS_DST_COLOR,[Iu]:i.ONE_MINUS_DST_ALPHA,[Nu]:i.CONSTANT_COLOR,[Uu]:i.ONE_MINUS_CONSTANT_COLOR,[zu]:i.CONSTANT_ALPHA,[Ou]:i.ONE_MINUS_CONSTANT_ALPHA};function Ct(W,At,zt,Yt,ne,ie,Me,Gt,De,fe){if(W===Ss){p===!0&&(Lt(i.BLEND),p=!1);return}if(p===!1&&(Et(i.BLEND),p=!0),W!==Mu){if(W!==g||fe!==T){if((b!==bs||I!==bs)&&(i.blendEquation(i.FUNC_ADD),b=bs,I=bs),fe)switch(W){case sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mi:i.blendFunc(i.ONE,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:be("WebGLState: Invalid blending: ",W);break}else switch(W){case sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lc:be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dc:be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:be("WebGLState: Invalid blending: ",W);break}E=null,A=null,C=null,y=null,_.set(0,0,0),R=0,g=W,T=fe}return}ne=ne||At,ie=ie||zt,Me=Me||Yt,(At!==b||ne!==I)&&(i.blendEquationSeparate(mt[At],mt[ne]),b=At,I=ne),(zt!==E||Yt!==A||ie!==C||Me!==y)&&(i.blendFuncSeparate(gt[zt],gt[Yt],gt[ie],gt[Me]),E=zt,A=Yt,C=ie,y=Me),(Gt.equals(_)===!1||De!==R)&&(i.blendColor(Gt.r,Gt.g,Gt.b,De),_.copy(Gt),R=De),g=W,T=!1}function rt(W,At){W.side===Xe?Lt(i.CULL_FACE):Et(i.CULL_FACE);let zt=W.side===Mn;At&&(zt=!zt),vt(zt),W.blending===sr&&W.transparent===!1?Ct(Ss):Ct(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let Yt=W.stencilWrite;a.setTest(Yt),Yt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),ce(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Et(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function vt(W){B!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),B=W)}function Jt(W){W!==_u?(Et(i.CULL_FACE),W!==q&&(W===Fc?i.cullFace(i.BACK):W===yu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),q=W}function jt(W){W!==U&&(z&&i.lineWidth(W),U=W)}function ce(W,At,zt){W?(Et(i.POLYGON_OFFSET_FILL),($!==At||D!==zt)&&($=At,D=zt,o.getReversed()&&(At=-At,zt=-zt),i.polygonOffset(At,zt))):Lt(i.POLYGON_OFFSET_FILL)}function ee(W){W?Et(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function de(W){W===void 0&&(W=i.TEXTURE0+O-1),pt!==W&&(i.activeTexture(W),pt=W)}function Z(W,At,zt){zt===void 0&&(pt===null?zt=i.TEXTURE0+O-1:zt=pt);let Yt=Ft[zt];Yt===void 0&&(Yt={type:void 0,texture:void 0},Ft[zt]=Yt),(Yt.type!==W||Yt.texture!==At)&&(pt!==zt&&(i.activeTexture(zt),pt=zt),i.bindTexture(W,At||wt[W]),Yt.type=W,Yt.texture=At)}function Le(){let W=Ft[pt];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function K(){try{i.compressedTexImage2D(...arguments)}catch(W){be("WebGLState:",W)}}function ht(){try{i.compressedTexImage3D(...arguments)}catch(W){be("WebGLState:",W)}}function Y(){try{i.texSubImage2D(...arguments)}catch(W){be("WebGLState:",W)}}function Qt(){try{i.texSubImage3D(...arguments)}catch(W){be("WebGLState:",W)}}function Rt(){try{i.compressedTexSubImage2D(...arguments)}catch(W){be("WebGLState:",W)}}function Ut(){try{i.compressedTexSubImage3D(...arguments)}catch(W){be("WebGLState:",W)}}function F(){try{i.texStorage2D(...arguments)}catch(W){be("WebGLState:",W)}}function v(){try{i.texStorage3D(...arguments)}catch(W){be("WebGLState:",W)}}function st(){try{i.texImage2D(...arguments)}catch(W){be("WebGLState:",W)}}function ut(){try{i.texImage3D(...arguments)}catch(W){be("WebGLState:",W)}}function _t(W){return h[W]!==void 0?h[W]:i.getParameter(W)}function Bt(W,At){h[W]!==At&&(i.pixelStorei(W,At),h[W]=At)}function Vt(W){M.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),M.copy(W))}function yt(W){j.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),j.copy(W))}function Mt(W,At){let zt=c.get(At);zt===void 0&&(zt=new WeakMap,c.set(At,zt));let Yt=zt.get(W);Yt===void 0&&(Yt=i.getUniformBlockIndex(At,W.name),i.uniformBlockBinding(At,Yt,Yt),zt.set(W,Yt))}function qt(W,At,zt){let ne=c.get(At).get(W);l[ne]!==zt&&(i.bindBufferBase(i.UNIFORM_BUFFER,ne,zt),l[ne]=zt)}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},pt=null,Ft={},f={},l={},d=new WeakMap,m=[],w=null,p=!1,g=null,b=null,E=null,A=null,I=null,C=null,y=null,_=new xe(0,0,0),R=0,T=!1,B=null,q=null,U=null,$=null,D=null,M.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Et,disable:Lt,bindFramebuffer:he,getBoundFramebuffer:$t,drawBuffers:Kt,useProgram:ue,setBlending:Ct,setMaterial:rt,setFlipSided:vt,setCullFace:Jt,setLineWidth:jt,setPolygonOffset:ce,setScissorTest:ee,activeTexture:de,bindTexture:Z,unbindTexture:Le,compressedTexImage2D:K,compressedTexImage3D:ht,texImage2D:st,texImage3D:ut,pixelStorei:Bt,getParameter:_t,updateUBOMapping:Mt,uniformBlockBinding:qt,texStorage2D:F,texStorage3D:v,texSubImage2D:Y,texSubImage3D:Qt,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Ut,scissor:Vt,viewport:yt,reset:ae}}function Qx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap,h=new Set,f,d=new WeakMap,m=new Set,w=new FinalizationRegistry(F=>m.delete(F)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(F,v){return p?new OffscreenCanvas(F,v):Pr("canvas")}function b(F,v,st){let ut=1,_t=Ut(F);if((_t.width>st||_t.height>st)&&(ut=st/Math.max(_t.width,_t.height)),ut<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let Bt=Math.floor(ut*_t.width),Vt=Math.floor(ut*_t.height);f===void 0&&(f=g(Bt,Vt));let yt=v?g(Bt,Vt):f;return yt.width=Bt,yt.height=Vt,yt.getContext("2d").drawImage(F,0,0,Bt,Vt),ve("WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+Bt+"x"+Vt+")."),yt}else return"data"in F&&ve("WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),F;return F}function E(F){return F.generateMipmaps}function A(F){i.generateMipmap(F)}function I(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(F,v,st,ut,_t,Bt=!1){if(F!==null){if(i[F]!==void 0)return i[F];ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Vt;ut&&(Vt=t.get("EXT_texture_norm16"),Vt||ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let yt=v;if(v===i.RED&&(st===i.FLOAT&&(yt=i.R32F),st===i.HALF_FLOAT&&(yt=i.R16F),st===i.UNSIGNED_BYTE&&(yt=i.R8),st===i.UNSIGNED_SHORT&&Vt&&(yt=Vt.R16_EXT),st===i.SHORT&&Vt&&(yt=Vt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(st===i.UNSIGNED_BYTE&&(yt=i.R8UI),st===i.UNSIGNED_SHORT&&(yt=i.R16UI),st===i.UNSIGNED_INT&&(yt=i.R32UI),st===i.BYTE&&(yt=i.R8I),st===i.SHORT&&(yt=i.R16I),st===i.INT&&(yt=i.R32I)),v===i.RG&&(st===i.FLOAT&&(yt=i.RG32F),st===i.HALF_FLOAT&&(yt=i.RG16F),st===i.UNSIGNED_BYTE&&(yt=i.RG8),st===i.UNSIGNED_SHORT&&Vt&&(yt=Vt.RG16_EXT),st===i.SHORT&&Vt&&(yt=Vt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(st===i.UNSIGNED_BYTE&&(yt=i.RG8UI),st===i.UNSIGNED_SHORT&&(yt=i.RG16UI),st===i.UNSIGNED_INT&&(yt=i.RG32UI),st===i.BYTE&&(yt=i.RG8I),st===i.SHORT&&(yt=i.RG16I),st===i.INT&&(yt=i.RG32I)),v===i.RGB_INTEGER&&(st===i.UNSIGNED_BYTE&&(yt=i.RGB8UI),st===i.UNSIGNED_SHORT&&(yt=i.RGB16UI),st===i.UNSIGNED_INT&&(yt=i.RGB32UI),st===i.BYTE&&(yt=i.RGB8I),st===i.SHORT&&(yt=i.RGB16I),st===i.INT&&(yt=i.RGB32I)),v===i.RGBA_INTEGER&&(st===i.UNSIGNED_BYTE&&(yt=i.RGBA8UI),st===i.UNSIGNED_SHORT&&(yt=i.RGBA16UI),st===i.UNSIGNED_INT&&(yt=i.RGBA32UI),st===i.BYTE&&(yt=i.RGBA8I),st===i.SHORT&&(yt=i.RGBA16I),st===i.INT&&(yt=i.RGBA32I)),v===i.RGB&&(st===i.UNSIGNED_SHORT&&Vt&&(yt=Vt.RGB16_EXT),st===i.SHORT&&Vt&&(yt=Vt.RGB16_SNORM_EXT),st===i.UNSIGNED_INT_5_9_9_9_REV&&(yt=i.RGB9_E5),st===i.UNSIGNED_INT_10F_11F_11F_REV&&(yt=i.R11F_G11F_B10F)),v===i.RGBA){let Mt=Bt?Rr:qe.getTransfer(_t);st===i.FLOAT&&(yt=i.RGBA32F),st===i.HALF_FLOAT&&(yt=i.RGBA16F),st===i.UNSIGNED_BYTE&&(yt=Mt===Ke?i.SRGB8_ALPHA8:i.RGBA8),st===i.UNSIGNED_SHORT&&Vt&&(yt=Vt.RGBA16_EXT),st===i.SHORT&&Vt&&(yt=Vt.RGBA16_SNORM_EXT),st===i.UNSIGNED_SHORT_4_4_4_4&&(yt=i.RGBA4),st===i.UNSIGNED_SHORT_5_5_5_1&&(yt=i.RGB5_A1)}return(yt===i.R16F||yt===i.R32F||yt===i.RG16F||yt===i.RG32F||yt===i.RGBA16F||yt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),yt}function y(F,v){let st;return F?v===null||v===gi||v===As?st=i.DEPTH24_STENCIL8:v===ri?st=i.DEPTH32F_STENCIL8:v===or&&(st=i.DEPTH24_STENCIL8,ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===gi||v===As?st=i.DEPTH_COMPONENT24:v===ri?st=i.DEPTH_COMPONENT32F:v===or&&(st=i.DEPTH_COMPONENT16),st}function _(F,v){return E(F)===!0||F.isFramebufferTexture&&F.minFilter!==vn&&F.minFilter!==Pn?Math.log2(Math.max(v.width,v.height))+1:F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?v.mipmaps.length:1}function R(F){let v=new WeakRef(F);n.get(F).__ref=v,m.add(v),w.register(F,v,v)}function T(F){let v=n.get(F).__ref;v!==void 0&&(m.delete(v),w.unregister(v))}function B(F){U(F.target)}function q(F){$(F.target)}function U(F){F.removeEventListener("dispose",B),T(F),O(F),F.isVideoTexture&&u.delete(F),F.isHTMLTexture&&h.delete(F)}function $(F){F.removeEventListener("dispose",q),T(F),it(F)}function D(){for(let F of m){let v=F.deref();v!==void 0&&(v.isRenderTarget===!0?$(v):U(v))}m.clear(),h.clear()}function O(F){let v=n.get(F);if(v.__webglInit===void 0)return;let st=F.source,ut=d.get(st);if(ut){let _t=ut[v.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&z(F),Object.keys(ut).length===0&&d.delete(st)}n.remove(F)}function z(F){let v=n.get(F);i.deleteTexture(v.__webglTexture);let st=F.source,ut=d.get(st);delete ut[v.__cacheKey],o.memory.textures--}function it(F){let v=n.get(F);v.__depthDisposeCallback&&v.__depthDisposeCallback();let st=F.depthTexture;if(st&&st.renderTarget===F&&U(st),F.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(v.__webglFramebuffer[_t]))for(let Bt=0;Bt<v.__webglFramebuffer[_t].length;Bt++)i.deleteFramebuffer(v.__webglFramebuffer[_t][Bt]);else i.deleteFramebuffer(v.__webglFramebuffer[_t]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[_t])}else{if(Array.isArray(v.__webglFramebuffer))for(let _t=0;_t<v.__webglFramebuffer.length;_t++)i.deleteFramebuffer(v.__webglFramebuffer[_t]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let _t=0;_t<v.__webglColorRenderbuffer.length;_t++)v.__webglColorRenderbuffer[_t]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[_t]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let ut=F.textures;for(let _t=0,Bt=ut.length;_t<Bt;_t++){let Vt=n.get(ut[_t]);Vt.__webglTexture&&(i.deleteTexture(Vt.__webglTexture),o.memory.textures--),n.remove(ut[_t])}n.remove(F)}let nt=0;function pt(){nt=0}function Ft(){return nt}function Ht(F){nt=F}function S(){let F=nt;return F>=s.maxTextures&&ve("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),nt+=1,F}function M(F){let v=[];return v.push(F.wrapS),v.push(F.wrapT),v.push(F.wrapR||0),v.push(F.magFilter),v.push(F.minFilter),v.push(F.anisotropy),v.push(F.internalFormat),v.push(F.format),v.push(F.type),v.push(F.generateMipmaps),v.push(F.mipmapsAutoUpdate),v.push(F.premultiplyAlpha),v.push(F.flipY),v.push(F.unpackAlignment),v.push(F.colorSpace),v.join()}function j(F,v){let st=n.get(F);if(F.isVideoTexture&&Qt(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&st.__version!==F.version){let ut=F.image;if(ut===null)ve("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)ve("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(st,F,v);return}}else F.isExternalTexture&&(st.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,st.__webglTexture,i.TEXTURE0+v)}function J(F,v){let st=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&st.__version!==F.version){Ct(st,F,v);return}else F.isExternalTexture&&(st.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,st.__webglTexture,i.TEXTURE0+v)}function wt(F,v){let st=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&st.__version!==F.version){Ct(st,F,v);return}e.bindTexture(i.TEXTURE_3D,st.__webglTexture,i.TEXTURE0+v)}function Et(F,v){let st=n.get(F);if(F.version>0&&st.__version!==F.version){rt(st,F,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture,i.TEXTURE0+v)}let Lt={[Ys]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[pa]:i.MIRRORED_REPEAT},he={[vn]:i.NEAREST,[Vu]:i.NEAREST_MIPMAP_NEAREST,[co]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[Ja]:i.LINEAR_MIPMAP_NEAREST,[Wi]:i.LINEAR_MIPMAP_LINEAR},$t={[Xu]:i.NEVER,[Qc]:i.ALWAYS,[qu]:i.LESS,[$c]:i.LEQUAL,[Yu]:i.EQUAL,[Kc]:i.GEQUAL,[Zu]:i.GREATER,[Ju]:i.NOTEQUAL};function Kt(F,v){if(v.type===ri&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Pn||v.magFilter===Ja||v.magFilter===co||v.magFilter===Wi||v.minFilter===Pn||v.minFilter===Ja||v.minFilter===co||v.minFilter===Wi)&&ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,Lt[v.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,Lt[v.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,Lt[v.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,he[v.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,he[v.minFilter]),v.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,$t[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===vn||v.minFilter!==co&&v.minFilter!==Wi||v.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let st=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ue(F,v){let st=!1;F.__webglInit===void 0&&(F.__webglInit=!0,v.addEventListener("dispose",B),R(v));let ut=v.source,_t=d.get(ut);_t===void 0&&(_t={},d.set(ut,_t));let Bt=M(v);if(Bt!==F.__cacheKey){_t[Bt]===void 0&&(_t[Bt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,st=!0),_t[Bt].usedTimes++;let Vt=_t[F.__cacheKey];Vt!==void 0&&(_t[F.__cacheKey].usedTimes--,Vt.usedTimes===0&&z(v)),F.__cacheKey=Bt,F.__webglTexture=_t[Bt].texture}return st}function mt(F,v,st){return Math.floor(Math.floor(F/st)/v)}function gt(F,v,st,ut){let Bt=F.updateRanges;if(Bt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,st,ut,v.data);else{Bt.sort((ae,W)=>ae.start-W.start);let Vt=0;for(let ae=1;ae<Bt.length;ae++){let W=Bt[Vt],At=Bt[ae],zt=W.start+W.count,Yt=mt(At.start,v.width,4),ne=mt(W.start,v.width,4);At.start<=zt+1&&Yt===ne&&mt(At.start+At.count-1,v.width,4)===Yt?W.count=Math.max(W.count,At.start+At.count-W.start):(++Vt,Bt[Vt]=At)}Bt.length=Vt+1;let yt=e.getParameter(i.UNPACK_ROW_LENGTH),Mt=e.getParameter(i.UNPACK_SKIP_PIXELS),qt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ae=0,W=Bt.length;ae<W;ae++){let At=Bt[ae],zt=Math.floor(At.start/4),Yt=Math.ceil(At.count/4),ne=zt%v.width,ie=Math.floor(zt/v.width),Me=Yt,Gt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),e.pixelStorei(i.UNPACK_SKIP_ROWS,ie),e.texSubImage2D(i.TEXTURE_2D,0,ne,ie,Me,Gt,st,ut,v.data)}F.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,yt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Mt),e.pixelStorei(i.UNPACK_SKIP_ROWS,qt)}}function Ct(F,v,st){let ut=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ut=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ut=i.TEXTURE_3D);let _t=ue(F,v),Bt=v.source;e.bindTexture(ut,F.__webglTexture,i.TEXTURE0+st);let Vt=n.get(Bt);if(Bt.version!==Vt.__version||_t===!0){if(e.activeTexture(i.TEXTURE0+st),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let Gt=qe.getPrimaries(qe.workingColorSpace),De=v.colorSpace===qi?null:qe.getPrimaries(v.colorSpace),fe=v.colorSpace===qi||Gt===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let Mt=b(v.image,!1,s.maxTextureSize);Mt=Rt(v,Mt);let qt=r.convert(v.format,v.colorSpace),ae=r.convert(v.type),W=C(v.internalFormat,qt,ae,v.normalized,v.colorSpace,v.isVideoTexture);Kt(ut,v);let At,zt=v.mipmaps,Yt=v.isVideoTexture!==!0,ne=Vt.__version===void 0||_t===!0,ie=Bt.dataReady,Me=_(v,Mt);if(v.isDepthTexture)W=y(v.format===Xi,v.type),ne&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,W,Mt.width,Mt.height):e.texImage2D(i.TEXTURE_2D,0,W,Mt.width,Mt.height,0,qt,ae,null));else if(v.isDataTexture)if(zt.length>0){Yt&&ne&&e.texStorage2D(i.TEXTURE_2D,Me,W,zt[0].width,zt[0].height);for(let Gt=0,De=zt.length;Gt<De;Gt++)At=zt[Gt],Yt?ie&&e.texSubImage2D(i.TEXTURE_2D,Gt,0,0,At.width,At.height,qt,ae,At.data):e.texImage2D(i.TEXTURE_2D,Gt,W,At.width,At.height,0,qt,ae,At.data);v.generateMipmaps=!1}else Yt?(ne&&e.texStorage2D(i.TEXTURE_2D,Me,W,Mt.width,Mt.height),ie&&gt(v,Mt,qt,ae)):e.texImage2D(i.TEXTURE_2D,0,W,Mt.width,Mt.height,0,qt,ae,Mt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Yt&&ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Me,W,zt[0].width,zt[0].height,Mt.depth);for(let Gt=0,De=zt.length;Gt<De;Gt++)if(At=zt[Gt],v.format!==_i)if(qt!==null)if(Yt){if(ie)if(v.layerUpdates.size>0){let fe=rh(At.width,At.height,v.format,v.type);for(let se of v.layerUpdates){let Oe=At.data.subarray(se*fe/At.data.BYTES_PER_ELEMENT,(se+1)*fe/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Gt,0,0,se,At.width,At.height,1,qt,Oe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Gt,0,0,0,At.width,At.height,Mt.depth,qt,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Gt,W,At.width,At.height,Mt.depth,0,At.data,0,0);else ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?ie&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Gt,0,0,0,At.width,At.height,Mt.depth,qt,ae,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Gt,W,At.width,At.height,Mt.depth,0,qt,ae,At.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Yt&&ne&&e.texStorage2D(i.TEXTURE_2D,Me,W,zt[0].width,zt[0].height);for(let Gt=0,De=zt.length;Gt<De;Gt++)At=zt[Gt],v.format!==_i?qt!==null?Yt?ie&&e.compressedTexSubImage2D(i.TEXTURE_2D,Gt,0,0,At.width,At.height,qt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,Gt,W,At.width,At.height,0,At.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?ie&&e.texSubImage2D(i.TEXTURE_2D,Gt,0,0,At.width,At.height,qt,ae,At.data):e.texImage2D(i.TEXTURE_2D,Gt,W,At.width,At.height,0,qt,ae,At.data)}else if(v.isDataArrayTexture)if(Yt){if(ne&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Me,W,Mt.width,Mt.height,Mt.depth),ie)if(v.layerUpdates.size>0){let Gt=rh(Mt.width,Mt.height,v.format,v.type);for(let De of v.layerUpdates){let fe=Mt.data.subarray(De*Gt/Mt.data.BYTES_PER_ELEMENT,(De+1)*Gt/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,De,Mt.width,Mt.height,1,qt,ae,fe)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,qt,ae,Mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,W,Mt.width,Mt.height,Mt.depth,0,qt,ae,Mt.data);else if(v.isData3DTexture)Yt?(ne&&e.texStorage3D(i.TEXTURE_3D,Me,W,Mt.width,Mt.height,Mt.depth),ie&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,qt,ae,Mt.data)):e.texImage3D(i.TEXTURE_3D,0,W,Mt.width,Mt.height,Mt.depth,0,qt,ae,Mt.data);else if(v.isFramebufferTexture){if(ne)if(Yt)e.texStorage2D(i.TEXTURE_2D,Me,W,Mt.width,Mt.height);else{let Gt=Mt.width,De=Mt.height;for(let fe=0;fe<Me;fe++)e.texImage2D(i.TEXTURE_2D,fe,W,Gt,De,0,qt,ae,null),Gt>>=1,De>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let Gt=i.canvas;if(Gt.hasAttribute("layoutsubtree")||Gt.setAttribute("layoutsubtree","true"),Mt.parentNode!==Gt){Gt.appendChild(Mt),h.add(v),Gt.onpaint=De=>{let fe=De.changedElements;for(let se of h)fe.includes(se.image)&&(se.needsUpdate=!0)},Gt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Mt);else{let fe=i.RGBA,se=i.RGBA,Oe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,fe,se,Oe,Mt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(zt.length>0){if(Yt&&ne){let Gt=Ut(zt[0]);e.texStorage2D(i.TEXTURE_2D,Me,W,Gt.width,Gt.height)}for(let Gt=0,De=zt.length;Gt<De;Gt++)At=zt[Gt],Yt?ie&&e.texSubImage2D(i.TEXTURE_2D,Gt,0,0,qt,ae,At):e.texImage2D(i.TEXTURE_2D,Gt,W,qt,ae,At);v.generateMipmaps=!1}else if(Yt){if(ne){let Gt=Ut(Mt);e.texStorage2D(i.TEXTURE_2D,Me,W,Gt.width,Gt.height)}ie&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,qt,ae,Mt)}else e.texImage2D(i.TEXTURE_2D,0,W,qt,ae,Mt);E(v)&&v.mipmapsAutoUpdate===!0&&A(ut),Vt.__version=Bt.version,v.onUpdate&&v.onUpdate(v)}F.__version=v.version}function rt(F,v,st){if(v.image.length!==6)return;let ut=ue(F,v),_t=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+st);let Bt=n.get(_t);if(_t.version!==Bt.__version||ut===!0){e.activeTexture(i.TEXTURE0+st);let Vt=qe.getPrimaries(qe.workingColorSpace),yt=v.colorSpace===qi?null:qe.getPrimaries(v.colorSpace),Mt=v.colorSpace===qi||Vt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let qt=v.isCompressedTexture||v.image[0].isCompressedTexture,ae=v.image[0]&&v.image[0].isDataTexture,W=[];for(let se=0;se<6;se++)!qt&&!ae?W[se]=b(v.image[se],!0,s.maxCubemapSize):W[se]=ae?v.image[se].image:v.image[se],W[se]=Rt(v,W[se]);let At=W[0],zt=r.convert(v.format,v.colorSpace),Yt=r.convert(v.type),ne=C(v.internalFormat,zt,Yt,v.normalized,v.colorSpace),ie=v.isVideoTexture!==!0,Me=Bt.__version===void 0||ut===!0,Gt=_t.dataReady,De=_(v,At);Kt(i.TEXTURE_CUBE_MAP,v);let fe;if(v.isDepthTexture){if(ne=y(v.format===Xi,v.type),Me)if(ie)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ne,At.width,At.height);else for(let se=0;se<6;se++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ne,At.width,At.height,0,zt,Yt,null)}else if(qt){ie&&Me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,De,ne,At.width,At.height);for(let se=0;se<6;se++){fe=W[se].mipmaps;for(let Oe=0;Oe<fe.length;Oe++){let dn=fe[Oe];v.format!==_i?zt!==null?ie?Gt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,0,0,dn.width,dn.height,zt,dn.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,ne,dn.width,dn.height,0,dn.data):ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?Gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,0,0,dn.width,dn.height,zt,Yt,dn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,ne,dn.width,dn.height,0,zt,Yt,dn.data)}}}else{if(fe=v.mipmaps,ie&&Me){fe.length>0&&De++;let se=Ut(W[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,De,ne,se.width,se.height)}for(let se=0;se<6;se++)if(ae){ie?Gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,W[se].width,W[se].height,zt,Yt,W[se].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ne,W[se].width,W[se].height,0,zt,Yt,W[se].data);for(let Oe=0;Oe<fe.length;Oe++){let oi=fe[Oe].image[se].image;ie?Gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,0,0,oi.width,oi.height,zt,Yt,oi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,ne,oi.width,oi.height,0,zt,Yt,oi.data)}}else{ie?Gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,zt,Yt,W[se]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ne,zt,Yt,W[se]);for(let Oe=0;Oe<fe.length;Oe++){let dn=fe[Oe];ie?Gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,0,0,zt,Yt,dn.image[se]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,ne,zt,Yt,dn.image[se])}}}E(v)&&v.mipmapsAutoUpdate===!0&&A(i.TEXTURE_CUBE_MAP),Bt.__version=_t.version,v.onUpdate&&v.onUpdate(v)}F.__version=v.version}function vt(F,v,st,ut,_t,Bt){let Vt=r.convert(st.format,st.colorSpace),yt=r.convert(st.type),Mt=C(st.internalFormat,Vt,yt,st.normalized,st.colorSpace),qt=n.get(v),ae=n.get(st);if(ae.__renderTarget=v,!qt.__hasExternalTextures){let W=Math.max(1,v.width>>Bt),At=Math.max(1,v.height>>Bt);_t===i.TEXTURE_3D||_t===i.TEXTURE_2D_ARRAY?e.texImage3D(_t,Bt,Mt,W,At,v.depth,0,Vt,yt,null):e.texImage2D(_t,Bt,Mt,W,At,0,Vt,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),Y(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,_t,ae.__webglTexture,0,ht(v)):(_t===i.TEXTURE_2D||_t>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ut,_t,ae.__webglTexture,Bt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Jt(F,v,st){if(i.bindRenderbuffer(i.RENDERBUFFER,F),v.depthBuffer){let ut=v.depthTexture,_t=ut&&ut.isDepthTexture?ut.type:null,Bt=y(v.stencilBuffer,_t),Vt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Y(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(v),Bt,v.width,v.height):st?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(v),Bt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Bt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Vt,i.RENDERBUFFER,F)}else{let ut=v.textures;for(let _t=0;_t<ut.length;_t++){let Bt=ut[_t],Vt=r.convert(Bt.format,Bt.colorSpace),yt=r.convert(Bt.type),Mt=C(Bt.internalFormat,Vt,yt,Bt.normalized,Bt.colorSpace);Y(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(v),Mt,v.width,v.height):st?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(v),Mt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function jt(F,v,st){let ut=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let _t=n.get(v.depthTexture);_t.__renderTarget=v;let Bt=ut?v.depthTexture.image[0]:v.depthTexture.image;(!_t.__webglTexture||Bt.width!==v.width||Bt.height!==v.height)&&(Bt.width=v.width,Bt.height=v.height,v.depthTexture.needsUpdate=!0),ut?Et(v.depthTexture,0):j(v.depthTexture,0);let Vt=_t.__webglTexture,yt=ht(v),Mt=ut?i.TEXTURE_CUBE_MAP_POSITIVE_X+st:i.TEXTURE_2D,qt=v.depthTexture.format===Xi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Bi)Y(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,qt,Mt,Vt,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,qt,Mt,Vt,0);else if(v.depthTexture.format===Xi)Y(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,qt,Mt,Vt,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,qt,Mt,Vt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(F){let v=n.get(F),st=F.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==F.depthTexture){let ut=F.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ut){let _t=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ut.removeEventListener("dispose",_t)};ut.addEventListener("dispose",_t),v.__depthDisposeCallback=_t}v.__boundDepthTexture=ut}if(F.depthTexture&&!v.__autoAllocateDepthBuffer)if(st)for(let ut=0;ut<6;ut++)jt(v.__webglFramebuffer[ut],F,ut);else F.texture.mipmaps.length>0?jt(v.__webglFramebuffer[0],F,0):jt(v.__webglFramebuffer,F,0);else if(st){v.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ut]),v.__webglDepthbuffer[ut]===void 0)v.__webglDepthbuffer[ut]=i.createRenderbuffer(),Jt(v.__webglDepthbuffer[ut],F,!1);else{let _t=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Bt=v.__webglDepthbuffer[ut];i.bindRenderbuffer(i.RENDERBUFFER,Bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,Bt)}}else if(F.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Jt(v.__webglDepthbuffer,F,!1);else{let _t=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Bt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,Bt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(F,v,st){let ut=n.get(F);v!==void 0&&vt(ut.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),st!==void 0&&ce(F)}function de(F){let v=F.texture,st=n.get(F),ut=n.get(v);F.addEventListener("dispose",q),R(F);let _t=F.textures,Bt=F.isWebGLCubeRenderTarget===!0,Vt=_t.length>1;if(Vt||(ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture()),ut.__version=v.version,o.memory.textures++),Bt){st.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(v.mipmaps.length>0){st.__webglFramebuffer[yt]=[];for(let Mt=0;Mt<v.mipmaps.length;Mt++)st.__webglFramebuffer[yt][Mt]=i.createFramebuffer()}else st.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(v.mipmaps.length>0){st.__webglFramebuffer=[];for(let yt=0;yt<v.mipmaps.length;yt++)st.__webglFramebuffer[yt]=i.createFramebuffer()}else st.__webglFramebuffer=i.createFramebuffer();if(Vt)for(let yt=0,Mt=_t.length;yt<Mt;yt++){let qt=n.get(_t[yt]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&Y(F)===!1){st.__webglMultisampledFramebuffer=i.createFramebuffer(),st.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let yt=0;yt<_t.length;yt++){let Mt=_t[yt];st.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,st.__webglColorRenderbuffer[yt]);let qt=r.convert(Mt.format,Mt.colorSpace),ae=r.convert(Mt.type),W=C(Mt.internalFormat,qt,ae,Mt.normalized,Mt.colorSpace,F.isXRRenderTarget===!0),At=ht(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,W,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,st.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(st.__webglDepthRenderbuffer=i.createRenderbuffer(),Jt(st.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Bt){e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),Kt(i.TEXTURE_CUBE_MAP,v);for(let yt=0;yt<6;yt++)if(v.mipmaps.length>0)for(let Mt=0;Mt<v.mipmaps.length;Mt++)vt(st.__webglFramebuffer[yt][Mt],F,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Mt);else vt(st.__webglFramebuffer[yt],F,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);E(v)?A(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(Vt){for(let yt=0,Mt=_t.length;yt<Mt;yt++){let qt=_t[yt],ae=n.get(qt),W=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(W=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(W,ae.__webglTexture),Kt(W,qt),vt(st.__webglFramebuffer,F,qt,i.COLOR_ATTACHMENT0+yt,W,0),E(qt)&&A(W)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(yt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,ut.__webglTexture),Kt(yt,v),v.mipmaps.length>0)for(let Mt=0;Mt<v.mipmaps.length;Mt++)vt(st.__webglFramebuffer[Mt],F,v,i.COLOR_ATTACHMENT0,yt,Mt);else vt(st.__webglFramebuffer,F,v,i.COLOR_ATTACHMENT0,yt,0);E(v)?A(yt):v.mipmaps.length>0&&i.texParameteri(yt,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}F.depthBuffer&&ce(F)}function Z(F){let v=F.textures;for(let st=0,ut=v.length;st<ut;st++){let _t=v[st];if(E(_t)&&_t.mipmapsAutoUpdate===!0){let Bt=I(F),Vt=n.get(_t).__webglTexture;e.bindTexture(Bt,Vt),A(Bt),e.unbindTexture()}}}let Le=[];function K(F){if(F.samples>0){if(Y(F)===!1){let v=F.textures,st=F.width,ut=F.height,_t=i.COLOR_BUFFER_BIT,Bt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Vt=n.get(F),yt=v.length>1;if(yt)for(let qt=0;qt<v.length;qt++)e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),F.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let qt=0;qt<v.length;qt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(_t|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(_t|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Vt.__webglColorRenderbuffer[qt]);let ae=n.get(v[qt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,st,ut,0,0,st,ut,_t,i.NEAREST),l===!0&&(Le.length=0,Le.push(i.COLOR_ATTACHMENT0+qt),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&Le.push(Bt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Le))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let qt=0;qt<v.length;qt++){e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.RENDERBUFFER,Vt.__webglColorRenderbuffer[qt]);let ae=n.get(v[qt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.TEXTURE_2D,ae,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&l){let v=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ht(F){return Math.min(s.maxSamples,F.samples)}function Y(F){let v=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Qt(F){let v=o.render.frame;u.get(F)!==v&&(u.set(F,v),F.update())}function Rt(F,v){let st=F.colorSpace,ut=F.format,_t=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||st!==Cr&&st!==qi&&(qe.getTransfer(st)===Ke?(ut!==_i||_t!==On)&&ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):be("WebGLTextures: Unsupported texture color space:",st)),v}function Ut(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=S,this.resetTextureUnits=pt,this.getTextureUnits=Ft,this.setTextureUnits=Ht,this.setTexture2D=j,this.setTexture2DArray=J,this.setTexture3D=wt,this.setTextureCube=Et,this.rebindTextures=ee,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Y,this.dispose=D}function jx(i,t){function e(n,s=qi){let r,o=qe.getTransfer(s);if(n===On)return i.UNSIGNED_BYTE;if(n===Ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wc)return i.BYTE;if(n===Xc)return i.SHORT;if(n===or)return i.UNSIGNED_SHORT;if(n===$a)return i.INT;if(n===gi)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===xi)return i.HALF_FLOAT;if(n===Zc)return i.ALPHA;if(n===Jc)return i.RGB;if(n===_i)return i.RGBA;if(n===Bi)return i.DEPTH_COMPONENT;if(n===Xi)return i.DEPTH_STENCIL;if(n===ja)return i.RED;if(n===tl)return i.RED_INTEGER;if(n===ls)return i.RG;if(n===el)return i.RG_INTEGER;if(n===nl)return i.RGBA_INTEGER;if(n===ho||n===uo||n===fo||n===po)if(o===Ke)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===il||n===sl||n===rl||n===ol)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===al||n===ll||n===cl||n===hl||n===ul||n===mo||n===dl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===al||n===ll)return o===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cl)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===hl)return r.COMPRESSED_R11_EAC;if(n===ul)return r.COMPRESSED_SIGNED_R11_EAC;if(n===mo)return r.COMPRESSED_RG11_EAC;if(n===dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fl||n===pl||n===ml||n===gl||n===xl||n===_l||n===yl||n===vl||n===Ml||n===Sl||n===bl||n===wl||n===Al||n===El)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fl)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pl)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ml)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gl)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_l)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yl)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vl)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ml)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sl)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bl)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wl)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Al)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===El)return o===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tl||n===Cl||n===Rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Tl)return o===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pl||n===Il||n===go||n===Fl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===go)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var t_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e_=`
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

}`,yh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Wr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new si({vertexShader:t_,fragmentShader:e_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new Un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vh=class extends bi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,w=typeof XRWebGLBinding<"u",p=new yh,g={},b=e.getContextAttributes(),E=null,A=null,I=[],C=[],y=new ct,_=null,R=null,T=new En;T.viewport=new sn;let B=new En;B.viewport=new sn;let q=[T,B],U=new Wa,$=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(M){let j=I[M];return j===void 0&&(j=new Ks,I[M]=j),j.getTargetRaySpace()},this.getControllerGrip=function(M){let j=I[M];return j===void 0&&(j=new Ks,I[M]=j),j.getGripSpace()},this.getHand=function(M){let j=I[M];return j===void 0&&(j=new Ks,I[M]=j),j.getHandSpace()};function O(M){let j=C.indexOf(M.inputSource);if(j===-1)return;let J=I[j];J!==void 0&&(J.update(M.inputSource,M.frame,c||o),J.dispatchEvent({type:M.type,data:M.inputSource}))}function z(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",it);for(let M=0;M<I.length;M++){let j=C[M];j!==null&&(C[M]=null,I[M].disconnect(j))}$=null,D=null,p.reset();for(let M in g)delete g[M];if(t.setRenderTarget(E),d=null,f=null,h=null,s=null,A=null,S.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(y.width,y.height,!1),R!==null){let M=R.camera;M.fov=R.fov,M.zoom=R.zoom,M.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(M){r=M,n.isPresenting===!0&&ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(M){a=M,n.isPresenting===!0&&ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(M){c=M},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&w&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(M){if(s=M,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",z),s.addEventListener("inputsourceschange",it),b.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(y),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,wt=null,Et=null;b.depth&&(Et=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=b.stencil?Xi:Bi,wt=b.stencil?As:gi);let Lt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Lt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),A=new Hn(f.textureWidth,f.textureHeight,{format:_i,type:On,depthTexture:new ki(f.textureWidth,f.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let J={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new Hn(d.framebufferWidth,d.framebufferHeight,{format:_i,type:On,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),S.setContext(s),S.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function it(M){for(let j=0;j<M.removed.length;j++){let J=M.removed[j],wt=C.indexOf(J);wt>=0&&(C[wt]=null,I[wt].disconnect(J))}for(let j=0;j<M.added.length;j++){let J=M.added[j],wt=C.indexOf(J);if(wt===-1){for(let Lt=0;Lt<I.length;Lt++)if(Lt>=C.length){C.push(J),wt=Lt;break}else if(C[Lt]===null){C[Lt]=J,wt=Lt;break}if(wt===-1)break}let Et=I[wt];Et&&Et.connect(J)}}function nt(M,j){j===null?M.matrixWorld.copy(M.matrix):M.matrixWorld.multiplyMatrices(j.matrixWorld,M.matrix),M.matrixWorldInverse.copy(M.matrixWorld).invert()}this.updateCamera=function(M){if(s===null)return;let j=M.near,J=M.far;p.texture!==null&&(p.depthNear>0&&(j=p.depthNear),p.depthFar>0&&(J=p.depthFar)),U.near=B.near=T.near=j,U.far=B.far=T.far=J,($!==U.near||D!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),$=U.near,D=U.far),U.layers.mask=M.layers.mask|6,T.layers.mask=U.layers.mask&-5,B.layers.mask=U.layers.mask&-3;let wt=M.parent,Et=U.cameras;nt(U,wt);for(let Lt=0;Lt<Et.length;Lt++)nt(Et[Lt],wt);U.projectionMatrix.copy(T.projectionMatrix),U.projectionMatrixInverse.copy(T.projectionMatrixInverse),R===null&&M.isPerspectiveCamera&&(R={camera:M,fov:M.fov,zoom:M.zoom}),pt(M,U,wt)};function pt(M,j,J){J===null?M.matrix.copy(j.matrixWorld):(M.matrix.copy(J.matrixWorld),M.matrix.invert(),M.matrix.multiply(j.matrixWorld)),M.matrix.decompose(M.position,M.quaternion,M.scale),M.updateMatrixWorld(!0),M.projectionMatrix.copy(j.projectionMatrix),M.projectionMatrixInverse.copy(j.projectionMatrixInverse),M.isPerspectiveCamera&&(M.fov=ga*2*Math.atan(1/M.projectionMatrix.elements[5]),M.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(M){l=M,f!==null&&(f.fixedFoveation=M),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=M)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(U)},this.getCameraTexture=function(M){return g[M]};let Ft=null;function Ht(M,j){if(u=j.getViewerPose(c||o),m=j,u!==null){let J=u.views;d!==null&&(t.setRenderTargetFramebuffer(A,d.framebuffer),t.setRenderTarget(A));let wt=!1;J.length!==U.cameras.length&&(U.cameras.length=0,wt=!0);for(let $t=0;$t<J.length;$t++){let Kt=J[$t],ue=null;if(d!==null)ue=d.getViewport(Kt);else{let gt=h.getViewSubImage(f,Kt);ue=gt.viewport,$t===0&&(t.setRenderTargetTextures(A,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(A))}let mt=q[$t];mt===void 0&&(mt=new En,mt.layers.enable($t),mt.viewport=new sn,q[$t]=mt),mt.matrix.fromArray(Kt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Kt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(ue.x,ue.y,ue.width,ue.height),$t===0&&(U.matrix.copy(mt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),wt===!0&&U.cameras.push(mt)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){h=n.getBinding();let $t=h.getDepthInformation(J[0]);$t&&$t.isValid&&$t.texture&&p.init($t,s.renderState)}if(Et&&Et.includes("camera-access")&&w){t.state.unbindTexture(),h=n.getBinding();for(let $t=0;$t<J.length;$t++){let Kt=J[$t].camera;if(Kt){let ue=g[Kt];ue||(ue=new Wr,g[Kt]=ue);let mt=h.getCameraImage(Kt);ue.sourceTexture=mt}}}}for(let J=0;J<I.length;J++){let wt=C[J],Et=I[J];wt!==null&&Et!==void 0&&Et.update(wt,j,c||o)}Ft&&Ft(M,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),m=null}let S=new Ld;S.setAnimationLoop(Ht),this.setAnimationLoop=function(M){Ft=M},this.dispose=function(){}}},n_=new Ze,Hd=new Re;Hd.set(-1,0,0,0,1,0,0,0,1);function i_(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,nh(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,b,E,A){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),h(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,A)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),w(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,b,E):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Mn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Mn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let b=t.get(g),E=b.envMap,A=b.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(n_.makeRotationFromEuler(A)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Hd),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,b,E){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*b,p.scale.value=E*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,b){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Mn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function w(p,g){let b=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function s_(i,t,e,n){let s={},r={};function o(b,E){let A=E.program;n.uniformBlockBinding(b,A,s[b.id])}function a(b,E){let A=s[b.id];A===void 0&&(m(b),A=l(b),s[b.id]=A,b.addEventListener("dispose",p));let I=E.program;n.updateUBOMapping(b,I);let C=t.render.frame;r[b.id]!==C&&(c(b),r[b.id]=C)}function l(b){let E=i.createBuffer(),A=b.__size,I=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,A,I),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(b){let E=s[b.id],A=b.uniforms,I=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,y=A.length;C<y;C++){let _=A[C];if(Array.isArray(_))for(let R=0,T=_.length;R<T;R++)u(_[R],C,R,I);else u(_,C,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(b,E,A,I){if(f(b,E,A,I)===!0){let C=b.__offset,y=b.value;if(Array.isArray(y)){let _=0;for(let R=0;R<y.length;R++){let T=y[R],B=w(T,!0);h(T,b.__data,_),_+=B.storage/Float32Array.BYTES_PER_ELEMENT}}else h(y,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,C,b.__data)}}function h(b,E,A){typeof b=="number"||typeof b=="boolean"?E[A]=b:b.isMatrix3?(E[A]=b.elements[0],E[A+1]=b.elements[1],E[A+2]=b.elements[2],E[A+3]=0,E[A+4]=b.elements[3],E[A+5]=b.elements[4],E[A+6]=b.elements[5],E[A+7]=0,E[A+8]=b.elements[6],E[A+9]=b.elements[7],E[A+10]=b.elements[8],E[A+11]=0):ArrayBuffer.isView(b)?E.set(b.subarray(0,E.length-A),A):b.toArray(E,A)}function f(b,E,A,I){let C=b.value,y=E+"_"+A;if(Array.isArray(C)){I[y]===void 0&&(I[y]=[]);let _=I[y],R=!1;for(let T=0;T<C.length;T++)d(C[T],_,T)===!0&&(R=!0);return R}return d(C,I,y)}function d(b,E,A){if(E[A]===void 0)return typeof b=="number"||typeof b=="boolean"?E[A]=b:ArrayBuffer.isView(b)?E[A]=b.slice():E[A]=b.clone(),!0;{let I=E[A];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return E[A]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(I.equals(b)===!1)return I.copy(b),!0}}return!1}function m(b){let E=b.uniforms,A=0,I=16;for(let y=0,_=E.length;y<_;y++){let R=Array.isArray(E[y])?E[y]:[E[y]];for(let T=0,B=R.length;T<B;T++){let q=R[T],U=Array.isArray(q.value)?q.value:[q.value],$=Array.isArray(E[y])||Array.isArray(q.value),D=A;for(let z=0,it=U.length;z<it;z++){let nt=U[z],pt=w(nt,$),Ft=A%I,Ht=Ft%pt.boundary,S=Ft+Ht;A+=Ht,S!==0&&I-S<pt.storage&&(A+=I-S),z===0&&(D=A),A+=pt.storage}let O=q.type==="int"?Int32Array:q.type==="uint"?Uint32Array:Float32Array;q.__data=new O((A-D)/Float32Array.BYTES_PER_ELEMENT),q.__offset=D}}let C=A%I;return C>0&&(A+=I-C),b.__size=A,b.__cache={},this}function w(b,E){let A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=16,A.storage=48):b.isMatrix4?(A.boundary=16,A.storage=64):b.isTexture?ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(A.boundary=16,A.storage=b.byteLength):ve("WebGLRenderer: Unsupported uniform value type.",b),E===!0&&(A.boundary=16,A.storage=Math.ceil(A.storage/16)*16),A}function p(b){let E=b.target;E.removeEventListener("dispose",p),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function g(){for(let b in s)i.deleteBuffer(s[b]);s={},r={}}return{bind:o,update:a,dispose:g}}var r_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ri=null;function o_(){return Ri===null&&(Ri=new Br(r_,16,16,ls,xi),Ri.name="DFG_LUT",Ri.minFilter=Pn,Ri.magFilter=Pn,Ri.wrapS=Mi,Ri.wrapT=Mi,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var zl=class{constructor(t={}){let{canvas:e=$u(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=On}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let w=d,p=new Set([nl,el,tl]),g=new Set([On,gi,or,As,Ka,Qa]),b=new Uint32Array(4),E=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[],intensity:[]},I=null,C=null,y=[],_=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,B=!1,q=null,U=null,$=null,D=null;this._outputColorSpace=Rn;let O=0,z=0,it=null,nt=-1,pt=null,Ft=new sn,Ht=new sn,S=null,M=new xe(0),j=0,J=e.width,wt=e.height,Et=1,Lt=null,he=null,$t=new sn(0,0,J,wt),Kt=new sn(0,0,J,wt),ue=!1,mt=new ns,gt=new Ma,Ct=!1,rt=!1,vt=new Ze,Jt=new k,jt=new sn,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function de(){return it===null?Et:1}let Z=n;function Le(x,P){return e.getContext(x,P)}let K,ht,Y,Qt,Rt,Ut,F,v,st,ut,_t,Bt,Vt,yt,Mt,qt,ae,W,At,zt,Yt,ne,ie;try{let x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qa}`),e.addEventListener("webglcontextlost",De,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",se,!1),Z===null){let P="webgl2";if(Z=Le(P,x),Z===null)throw Le(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Me()}catch(x){throw e.removeEventListener("webglcontextlost",De,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",se,!1),be("WebGLRenderer: "+x.message),x}function Me(){K=new xg(Z),K.init(),Yt=new jx(Z,K),ht=new og(Z,K,t,Yt),Y=new Kx(Z,K),ht.reversedDepthBuffer&&f&&Y.buffers.depth.setReversed(!0),U=Z.createFramebuffer(),$=Z.createFramebuffer(),D=Z.createFramebuffer(),Qt=new vg(Z),Rt=new zx,Ut=new Qx(Z,K,Y,Rt,ht,Yt,Qt),F=new gg(T),v=new Sp(Z),ne=new sg(Z,v),st=new _g(Z,v,Qt,ne),ut=new Sg(Z,st,v,ne,Qt),W=new Mg(Z,ht,Ut),Mt=new ag(Rt),_t=new Ux(T,F,K,ht,ne,Mt),Bt=new i_(T,Rt),Vt=new Bx,yt=new Xx(K),ae=new ig(T,F,Y,ut,m,l),qt=new $x(T,ut,ht),ie=new s_(Z,Qt,ht,Y),At=new rg(Z,K,Qt),zt=new yg(Z,K,Qt),Qt.programs=_t.programs,T.capabilities=ht,T.extensions=K,T.properties=Rt,T.renderLists=Vt,T.shadowMap=qt,T.state=Y,T.info=Qt}w!==On&&(R=new wg(w,e.width,e.height,a,s,r));let Gt=new vh(T,Z);this.xr=Gt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let x=K.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=K.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Et},this.setPixelRatio=function(x){x!==void 0&&(Et=x,this.setSize(J,wt,!1))},this.getSize=function(x){return x.set(J,wt)},this.setSize=function(x,P,V=!0){if(Gt.isPresenting){ve("WebGLRenderer: Can't change size while VR device is presenting.");return}J=x,wt=P,e.width=Math.floor(x*Et),e.height=Math.floor(P*Et),V===!0&&(e.style.width=x+"px",e.style.height=P+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(J*Et,wt*Et).floor()},this.setDrawingBufferSize=function(x,P,V){J=x,wt=P,Et=V,e.width=Math.floor(x*V),e.height=Math.floor(P*V),this.setViewport(0,0,x,P)},this.setEffects=function(x){if(w===On){be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let P=0;P<x.length;P++)if(x[P].isOutputPass===!0){ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(Ft)},this.getViewport=function(x){return x.copy($t)},this.setViewport=function(x,P,V,N){x.isVector4?$t.set(x.x,x.y,x.z,x.w):$t.set(x,P,V,N),Y.viewport(Ft.copy($t).multiplyScalar(de()).round())},this.getScissor=function(x){return x.copy(Kt)},this.setScissor=function(x,P,V,N){x.isVector4?Kt.set(x.x,x.y,x.z,x.w):Kt.set(x,P,V,N),Y.scissor(Ht.copy(Kt).multiplyScalar(de()).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(x){Y.setScissorTest(ue=x)},this.setOpaqueSort=function(x){Lt=x},this.setTransparentSort=function(x){he=x},this.getClearColor=function(x){return x.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(x=!0,P=!0,V=!0){let N=0;if(x){let H=!1;if(it!==null){let ot=it.texture.format;H=p.has(ot)}if(H){let ot=it.texture.type,Tt=g.has(ot),et=ae.getClearColor(),at=ae.getClearAlpha(),Nt=et.r,Dt=et.g,re=et.b;Tt?(b[0]=Nt,b[1]=Dt,b[2]=re,b[3]=at,Z.clearBufferuiv(Z.COLOR,0,b)):(E[0]=Nt,E[1]=Dt,E[2]=re,E[3]=at,Z.clearBufferiv(Z.COLOR,0,E))}else N|=Z.COLOR_BUFFER_BIT}P&&(N|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(N|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N!==0&&Z.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),q=x},this.dispose=function(){e.removeEventListener("webglcontextlost",De,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",se,!1),ae.dispose(),Vt.dispose(),yt.dispose(),Ut.dispose(),Rt.dispose(),F.dispose(),ut.dispose(),st.dispose(),ne.dispose(),ie.dispose(),_t.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",Ao),Gt.removeEventListener("sessionend",Eo),Ji.stop()};function De(x){x.preventDefault(),Ir("WebGLRenderer: Context Lost."),B=!0}function fe(){Ir("WebGLRenderer: Context Restored."),B=!1;let x=Qt.autoReset,P=qt.enabled,V=qt.autoUpdate,N=qt.needsUpdate,H=qt.type;Me(),Qt.autoReset=x,qt.enabled=P,qt.autoUpdate=V,qt.needsUpdate=N,qt.type=H}function se(x){be("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Oe(x){let P=x.target;P.removeEventListener("dispose",Oe),dn(P)}function dn(x){oi(x),Rt.remove(x)}function oi(x){let P=Rt.get(x).programs;P!==void 0&&(P.forEach(function(V){_t.releaseProgram(V)}),x.isShaderMaterial&&_t.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,V,N,H,ot){P===null&&(P=ce);let Tt=H.isMesh&&H.matrixWorld.determinantAffine()<0,et=dt(x,P,V,N,H);Y.setMaterial(N,Tt);let at=V.index,Nt=1;if(N.wireframe===!0){if(at=st.getWireframeAttribute(V),at===void 0)return;Nt=2}let Dt=V.drawRange,re=V.attributes.position,Wt=Dt.start*Nt,le=(Dt.start+Dt.count)*Nt;ot!==null&&(Wt=Math.max(Wt,ot.start*Nt),le=Math.min(le,(ot.start+ot.count)*Nt)),at!==null?(Wt=Math.max(Wt,0),le=Math.min(le,at.count)):re!=null&&(Wt=Math.max(Wt,0),le=Math.min(le,re.count));let pe=le-Wt;if(pe<0||pe===1/0)return;ne.setup(H,N,et,V,at);let we,Pe=At;if(at!==null&&(we=v.get(at),Pe=zt,Pe.setIndex(we)),H.isMesh)N.wireframe===!0?(Y.setLineWidth(N.wireframeLinewidth*de()),Pe.setMode(Z.LINES)):Pe.setMode(Z.TRIANGLES);else if(H.isLine){let Xt=N.linewidth;Xt===void 0&&(Xt=1),Y.setLineWidth(Xt*de()),H.isLineSegments?Pe.setMode(Z.LINES):H.isLineLoop?Pe.setMode(Z.LINE_LOOP):Pe.setMode(Z.LINE_STRIP)}else H.isPoints?Pe.setMode(Z.POINTS):H.isSprite&&Pe.setMode(Z.TRIANGLES);if(H.isBatchedMesh)if(K.get("WEBGL_multi_draw"))Pe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Xt=H._multiDrawStarts,Ot=H._multiDrawCounts,ye=H._multiDrawCount,Ae=at?v.get(at).bytesPerElement:1,Qe=Rt.get(N).currentProgram.getUniforms();for(let We=0;We<ye;We++)Qe.setValue(Z,"_gl_DrawID",We),Pe.render(Xt[We]/Ae,Ot[We])}else if(H.isInstancedMesh)Pe.renderInstances(Wt,pe,H.count);else if(V.isInstancedBufferGeometry){let Xt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ot=Math.min(V.instanceCount,Xt);Pe.renderInstances(Wt,pe,Ot)}else Pe.render(Wt,pe)};function wo(x,P,V,N){q!==null&&x.isNodeMaterial&&q.setObject(N,x),Ct===!0&&Mt.setState(x,V,!1),x.transparent===!0&&x.side===Xe&&x.forceSinglePass===!1?(x.side=Mn,x.needsUpdate=!0,Q(x,P,N),x.side=as,x.needsUpdate=!0,Q(x,P,N),x.side=Xe):Q(x,P,N)}this.compile=function(x,P,V=null){V===null&&(V=x),q!==null&&q.renderStart(x,P,V),C=yt.get(V),C.init(P),_.push(C),V.traverseVisible(function(H){H.isLight&&H.layers.test(P.layers)&&(C.pushLight(H),H.castShadow&&C.pushShadow(H))}),x!==V&&x.traverseVisible(function(H){H.isLight&&H.layers.test(P.layers)&&(C.pushLight(H),H.castShadow&&C.pushShadow(H))}),C.setupLights(),q!==null&&q.updateLights(C.state.lightsArray),rt=this.localClippingEnabled,Ct=Mt.init(this.clippingPlanes,rt),Ct===!0&&Mt.setGlobalState(this.clippingPlanes,P),q!==null&&qt.render(C.state.shadowsArray,V,P);let N=new Set;return x.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ot=H.material;if(ot)if(Array.isArray(ot))for(let Tt=0;Tt<ot.length;Tt++){let et=ot[Tt];wo(et,V,P,H),N.add(et)}else wo(ot,V,P,H),N.add(ot)}),C=_.pop(),q!==null&&q.renderEnd(),N},this.compileAsync=function(x,P,V=null){let N=this.compile(x,P,V);return new Promise(H=>{function ot(){if(N.forEach(function(Tt){let at=Rt.get(Tt).currentProgram;(at===void 0||at.isReady())&&N.delete(Tt)}),N.size===0){H(x);return}setTimeout(ot,10)}K.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Ii=null;function Wl(x){Ii&&Ii(x)}function Ao(){Ji.stop()}function Eo(){Ji.start()}let Ji=new Ld;Ji.setAnimationLoop(Wl),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(x){Ii=x,Gt.setAnimationLoop(x),x===null?Ji.stop():Ji.start()},Gt.addEventListener("sessionstart",Ao),Gt.addEventListener("sessionend",Eo),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;q!==null&&q.renderStart(x,P);let V=Gt.enabled===!0&&Gt.isPresenting===!0,N=R!==null&&(it===null||V)&&R.begin(T,it);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(P),P=Gt.getCamera()),x.isScene===!0&&x.onBeforeRender(T,x,P,it),C=yt.get(x,_.length),C.init(P),C.state.textureUnits=Ut.getTextureUnits(),_.push(C),vt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?gt.setFromArrayCamera(P):mt.setFromProjectionMatrix(vt,Qn,P.reversedDepth),rt=this.localClippingEnabled,Ct=Mt.init(this.clippingPlanes,rt),I=Vt.get(x,y.length),I.init(),y.push(I),this.info.render.frame++,Gt.enabled===!0&&Gt.isPresenting===!0){let Tt=T.xr.getDepthSensingMesh();Tt!==null&&To(Tt,P,-1/0,T.sortObjects)}To(x,P,0,T.sortObjects),I.finish(),q!==null&&q.updateLights(C.state.lightsArray),T.sortObjects===!0&&I.sort(Lt,he),ee=Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1,ee&&ae.addToRenderList(I,x),this.info.autoReset===!0&&this.info.reset(),Ct===!0&&Mt.beginShadows();let H=C.state.shadowsArray;if(qt.render(H,x,P),Ct===!0&&Mt.endShadows(),(N&&R.hasRenderPass())===!1){let Tt=I.opaque,et=I.transmissive;if(C.setupLights(),P.isArrayCamera){let at=P.cameras;if(et.length>0)for(let Nt=0,Dt=at.length;Nt<Dt;Nt++){let re=at[Nt];X(Tt,et,x,re)}ee&&ae.render(x);for(let Nt=0,Dt=at.length;Nt<Dt;Nt++){let re=at[Nt];Xl(I,x,re,re.viewport)}}else et.length>0&&X(Tt,et,x,P),ee&&ae.render(x),Xl(I,x,P)}it!==null&&z===0&&(Ut.updateMultisampleRenderTarget(it),Ut.updateRenderTargetMipmap(it)),N&&R.end(T),x.isScene===!0&&x.onAfterRender(T,x,P),ne.resetDefaultState(),nt=-1,pt=null,_.pop(),_.length>0?(C=_[_.length-1],Ut.setTextureUnits(C.state.textureUnits),Ct===!0&&Mt.setGlobalState(T.clippingPlanes,C.state.camera)):C=null,y.pop(),y.length>0?I=y[y.length-1]:I=null,q!==null&&q.renderEnd()};function To(x,P,V,N){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLight)C.pushLight(x),x.castShadow&&C.pushShadow(x);else if(x.isSprite){let Tt=P.isArrayCamera?gt:mt;if(!x.frustumCulled||x.intersectsFrustum(Tt)){N&&jt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(vt);let et=ut.update(x),at=x.material;at.visible&&I.push(x,et,at,V,jt.z,null,P)}}else if(x.isMesh||x.isLine||x.isPoints){let Tt=P.isArrayCamera?gt:mt;if(!x.frustumCulled||x.intersectsFrustum(Tt)){let et=ut.update(x),at=x.material;if(N&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),jt.copy(x.boundingSphere.center)):(et.boundingSphere===null&&et.computeBoundingSphere(),jt.copy(et.boundingSphere.center)),jt.applyMatrix4(x.matrixWorld).applyMatrix4(vt)),Array.isArray(at)){let Nt=et.groups;for(let Dt=0,re=Nt.length;Dt<re;Dt++){let Wt=Nt[Dt],le=at[Wt.materialIndex];le&&le.visible&&I.push(x,et,le,V,jt.z,Wt,P)}}else at.visible&&I.push(x,et,at,V,jt.z,null,P)}}}let ot=x.children;for(let Tt=0,et=ot.length;Tt<et;Tt++)To(ot[Tt],P,V,N)}function Xl(x,P,V,N){let{opaque:H,transmissive:ot,transparent:Tt}=x;C.setupLightsView(V),Ct===!0&&Mt.setGlobalState(T.clippingPlanes,V),N&&Y.viewport(Ft.copy(N)),H.length>0&&tt(H,P,V),ot.length>0&&tt(ot,P,V),Tt.length>0&&tt(Tt,P,V),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function X(x,P,V,N){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[N.id]===void 0){let Wt=K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[N.id]=new Hn(1,1,{generateMipmaps:!0,type:Wt?xi:On,minFilter:Wi,samples:Math.max(4,ht.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qe.workingColorSpace})}let ot=C.state.transmissionRenderTarget[N.id],Tt=N.viewport||Ft;ot.setSize(Tt.z*T.transmissionResolutionScale,Tt.w*T.transmissionResolutionScale);let et=T.getRenderTarget(),at=T.getActiveCubeFace(),Nt=T.getActiveMipmapLevel();T.setRenderTarget(ot),T.getClearColor(M),j=T.getClearAlpha(),j<1&&T.setClearColor(16777215,.5),T.clear(),ee&&ae.render(V);let Dt=T.toneMapping;T.toneMapping=Ci;let re=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),C.setupLightsView(N),Ct===!0&&Mt.setGlobalState(T.clippingPlanes,N),tt(x,V,N),Ut.updateMultisampleRenderTarget(ot),Ut.updateRenderTargetMipmap(ot),K.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let le=0,pe=P.length;le<pe;le++){let we=P[le],{object:Pe,geometry:Xt,material:Ot,group:ye}=we;if(Ot.side===Xe&&Pe.layers.test(N.layers)){let Ae=Ot.side;Ot.side=Mn,Ot.needsUpdate=!0,G(Pe,V,N,Xt,Ot,ye),Ot.side=Ae,Ot.needsUpdate=!0,Wt=!0}}Wt===!0&&(Ut.updateMultisampleRenderTarget(ot),Ut.updateRenderTargetMipmap(ot))}T.setRenderTarget(et,at,Nt),T.setClearColor(M,j),re!==void 0&&(N.viewport=re),T.toneMapping=Dt}function tt(x,P,V){let N=P.isScene===!0?P.overrideMaterial:null;for(let H=0,ot=x.length;H<ot;H++){let Tt=x[H],{object:et,geometry:at,group:Nt}=Tt,Dt=Tt.material;Dt.allowOverride===!0&&N!==null&&(Dt=N),et.layers.test(V.layers)&&G(et,P,V,at,Dt,Nt)}}function G(x,P,V,N,H,ot){q!==null&&H.isNodeMaterial&&q.setObject(x,H),x.onBeforeRender(T,P,V,N,H,ot),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),H.onBeforeRender(T,P,V,N,x,ot),H.transparent===!0&&H.side===Xe&&H.forceSinglePass===!1?(H.side=Mn,H.needsUpdate=!0,T.renderBufferDirect(V,P,N,H,x,ot),H.side=as,H.needsUpdate=!0,T.renderBufferDirect(V,P,N,H,x,ot),H.side=Xe):T.renderBufferDirect(V,P,N,H,x,ot),x.onAfterRender(T,P,V,N,H,ot)}function L(x){let P=0;for(let V of x)V.texture!==null&&P++;return P}function Q(x,P,V){P.isScene!==!0&&(P=ce);let N=Rt.get(x),H=C.state.lights,ot=C.state.shadowsArray,Tt=H.state.version,et=_t.getParameters(x,H.state,ot,P,V,C.state.lightProbeGridArray),at=_t.getProgramCacheKey(et),Nt=N.programs;N.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,N.fog=P.fog;let Dt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;N.envMap=F.get(x.envMap||N.environment,Dt),N.envMapRotation=N.environment!==null&&x.envMap===null?P.environmentRotation:x.envMapRotation,Nt===void 0&&(x.addEventListener("dispose",Oe),Nt=new Map,N.programs=Nt,N.programVariants=new Map);let re=Nt.get(at);if(re!==void 0){if(N.currentProgram===re&&N.lightsStateVersion===Tt)return bt(x,et),re}else et.uniforms=_t.getUniforms(x),q!==null&&x.isNodeMaterial&&q.build(x,V,et),x.onBeforeCompile(et,T),re=_t.acquireProgram(et,at),Nt.set(at,re),N.uniforms=et.uniforms;let Wt=N.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Wt.clippingPlanes=Mt.uniform),bt(x,et),N.needsLights=It(x),N.lightsStateVersion=Tt,N.needsLights&&(Wt.ambientLightColor.value=H.state.ambient,Wt.sunLights.value=H.state.sun,Wt.sunLightShadows.value=H.state.sunShadow,Wt.directionalLights.value=H.state.directional,Wt.directionalLightShadows.value=H.state.directionalShadow,Wt.spotLights.value=H.state.spot,Wt.spotLightShadows.value=H.state.spotShadow,Wt.rectAreaLights.value=H.state.rectArea,Wt.ltc_1.value=H.state.rectAreaLTC1,Wt.ltc_2.value=H.state.rectAreaLTC2,Wt.pointLights.value=H.state.point,Wt.pointLightShadows.value=H.state.pointShadow,Wt.hemisphereLights.value=H.state.hemi,Wt.sunShadowMatrix.value=H.state.sunShadowMatrix,Wt.sunShadowCascade.value=H.state.sunShadowCascade,Wt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Wt.spotLightMatrix.value=H.state.spotLightMatrix,Wt.spotLightMap.value=H.state.spotLightMap,Wt.pointShadowMatrix.value=H.state.pointShadowMatrix),N.numLightProbeGrids=L(C.state.lightProbeGridArray),N.currentProgram=re,N.uniformsList=null,re}function lt(x,P,V,N,H){let ot=Rt.get(x),Tt=ot.currentProgram.id+","+N+","+H,et=ot.programVariants.get(Tt);return et===void 0?(et=Q(x,P,V),ot.programVariants.set(Tt,et)):(ot.currentProgram=et,ot.uniformsList=null,ot.outputColorSpace=N,ot.toneMapping=H),et}function ft(x){if(x.uniformsList===null){let P=x.currentProgram.getUniforms();x.uniformsList=ar.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function bt(x,P){let V=Rt.get(x);V.outputColorSpace=P.outputColorSpace,V.batching=P.batching,V.batchingColor=P.batchingColor,V.instancing=P.instancing,V.instancingColor=P.instancingColor,V.instancingMorph=P.instancingMorph,V.skinning=P.skinning,V.morphTargets=P.morphTargets,V.morphNormals=P.morphNormals,V.morphColors=P.morphColors,V.morphTargetsCount=P.morphTargetsCount,V.numClippingPlanes=P.numClippingPlanes,V.numIntersection=P.numClipIntersection,V.vertexAlphas=P.vertexAlphas,V.vertexTangents=P.vertexTangents,V.toneMapping=P.toneMapping}function dt(x,P,V,N,H){P.isScene!==!0&&(P=ce),Ut.resetTextureUnits();let ot=P.fog,Tt=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?P.environment:null,et=it===null?T.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:qe.workingColorSpace,at=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap,Nt=F.get(N.envMap||Tt,at),Dt=N.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,re=!!V.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Wt=!!V.morphAttributes.position,le=!!V.morphAttributes.normal,pe=!!V.morphAttributes.color,we=Ci;N.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(we=T.toneMapping);let Pe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Xt=Pe!==void 0?Pe.length:0,Ot=Rt.get(N),ye=C.state.lights;if(Ct===!0&&(rt===!0||x!==pt)){let tn=x===pt&&N.id===nt;Mt.setState(N,x,tn)}let Ae=!1,Qe=!1;N.version===Ot.__version?Ot.needsLights&&Ot.lightsStateVersion!==ye.state.version||H.isBatchedMesh&&Ot.batching===!1||!H.isBatchedMesh&&Ot.batching===!0||H.isBatchedMesh&&Ot.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Ot.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Ot.instancing===!1||!H.isInstancedMesh&&Ot.instancing===!0||H.isSkinnedMesh&&Ot.skinning===!1||!H.isSkinnedMesh&&Ot.skinning===!0||H.isInstancedMesh&&Ot.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ot.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ot.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ot.instancingMorph===!1&&H.morphTexture!==null||Ot.envMap!==Nt||N.fog===!0&&Ot.fog!==ot||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==Mt.numPlanes||Ot.numIntersection!==Mt.numIntersection)||Ot.vertexAlphas!==Dt||Ot.vertexTangents!==re||Ot.morphTargets!==Wt||Ot.morphNormals!==le||Ot.morphColors!==pe||Ot.morphTargetsCount!==Xt||Ot.numLightProbeGrids!==L(C.state.lightProbeGridArray)?Ae=!0:(Ot.outputColorSpace!==et||Ot.toneMapping!==we)&&(Qe=!0):(Ae=!0,Ot.__version=N.version);let We=Ot.currentProgram;(Ae===!0||Qe===!0)&&(We=Qe===!0?lt(N,P,H,et,we):Q(N,P,H),q&&N.isNodeMaterial&&q.onUpdateProgram(N,We,Ot));let Bn=!1,$n=!1,ai=!1,Ge=We.getUniforms(),hn=Ot.uniforms;if(Y.useProgram(We.program)&&(Bn=!0,$n=!0,ai=!0),N.id!==nt&&(nt=N.id,$n=!0),Bn||pt!==x){Y.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Ge.setValue(Z,"projectionMatrix",x.projectionMatrix),Ge.setValue(Z,"viewMatrix",x.matrixWorldInverse);let an=Ge.map.cameraPosition;an!==void 0&&an.setValue(Z,Jt.setFromMatrixPosition(x.matrixWorld)),ht.logarithmicDepthBuffer&&Ge.setValue(Z,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Ge.setValue(Z,"isOrthographic",x.isOrthographicCamera===!0),pt!==x&&(pt=x,$n=!0,ai=!0)}if(Ot.needsLights&&(ye.state.sunShadowMap.length>0&&Ge.setValue(Z,"sunShadowMap",ye.state.sunShadowMap,Ut),ye.state.directionalShadowMap.length>0&&Ge.setValue(Z,"directionalShadowMap",ye.state.directionalShadowMap,Ut),ye.state.spotShadowMap.length>0&&Ge.setValue(Z,"spotShadowMap",ye.state.spotShadowMap,Ut),ye.state.pointShadowMap.length>0&&Ge.setValue(Z,"pointShadowMap",ye.state.pointShadowMap,Ut)),H.isSkinnedMesh){Ge.setOptional(Z,H,"bindMatrix"),Ge.setOptional(Z,H,"bindMatrixInverse");let tn=H.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ge.setValue(Z,"boneTexture",tn.boneTexture,Ut))}H.isBatchedMesh&&(Ge.setOptional(Z,H,"batchingTexture"),Ge.setValue(Z,"batchingTexture",H._matricesTexture,Ut),Ge.setOptional(Z,H,"batchingIdTexture"),Ge.setValue(Z,"batchingIdTexture",H._indirectTexture,Ut),Ge.setOptional(Z,H,"batchingColorTexture"),H._colorsTexture!==null&&Ge.setValue(Z,"batchingColorTexture",H._colorsTexture,Ut));let Dn=V.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&W.update(H,V,We),($n||Ot.receiveShadow!==H.receiveShadow)&&(Ot.receiveShadow=H.receiveShadow,Ge.setValue(Z,"receiveShadow",H.receiveShadow)),(N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial)&&N.envMap===null&&P.environment!==null&&(hn.envMapIntensity.value=P.environmentIntensity),hn.dfgLUT!==void 0&&(hn.dfgLUT.value=o_()),$n){if(Ge.setValue(Z,"toneMappingExposure",T.toneMappingExposure),Ot.needsLights&&xt(hn,ai),ot&&N.fog===!0&&Bt.refreshFogUniforms(hn,ot),Bt.refreshMaterialUniforms(hn,N,Et,wt,C.state.transmissionRenderTarget[x.id]),Ot.needsLights&&Ot.numLightProbeGrids>0){let tn=A,an=0;for(let kn of C.state.lightProbeGridArray)kn.texture!==null&&(tn.textures[an]=kn.texture,tn.min[an]=kn.boundingBox.min,tn.max[an]=kn.boundingBox.max,tn.resolution[an]=kn.resolution,tn.intensity[an]=kn.intensity,an++);for(let kn in tn)tn[kn].length=an;hn.probesSH.value=tn.textures,hn.probesMin.value=tn.min,hn.probesMax.value=tn.max,hn.probesResolution.value=tn.resolution,hn.probesIntensity.value=tn.intensity}ar.upload(Z,ft(Ot),hn,Ut)}if(N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ar.upload(Z,ft(Ot),hn,Ut),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Ge.setValue(Z,"center",H.center),Ge.setValue(Z,"modelViewMatrix",H.modelViewMatrix),Ge.setValue(Z,"normalMatrix",H.normalMatrix),Ge.setValue(Z,"modelMatrix",H.matrixWorld),N.uniformsGroups!==void 0){let tn=N.uniformsGroups;for(let an=0,kn=tn.length;an<kn;an++){let dr=tn[an];ie.update(dr,We),ie.bind(dr,We)}}return We}function xt(x,P){x.ambientLightColor.needsUpdate=P,x.sunLights.needsUpdate=P,x.sunLightShadows.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function It(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(x,P,V){let N=Rt.get(x);N.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,N.__autoAllocateDepthBuffer===!1&&(N.__useRenderToTexture=!1),Rt.get(x.texture).__webglTexture=P,Rt.get(x.depthTexture).__webglTexture=N.__autoAllocateDepthBuffer?void 0:V,N.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,P){let V=Rt.get(x);V.__webglFramebuffer=P,V.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,V=0){it=x,O=P,z=V;let N=null,H=!1,ot=!1;if(x){let et=Rt.get(x);if(et.__useDefaultFramebuffer!==void 0){Y.bindFramebuffer(Z.FRAMEBUFFER,et.__webglFramebuffer),Ft.copy(x.viewport),Ht.copy(x.scissor),S=x.scissorTest,Y.viewport(Ft),Y.scissor(Ht),Y.setScissorTest(S),nt=-1;return}else if(et.__webglFramebuffer===void 0)Ut.setupRenderTarget(x);else if(et.__hasExternalTextures)Ut.rebindTextures(x,Rt.get(x.texture).__webglTexture,Rt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Dt=x.depthTexture;if(et.__boundDepthTexture!==Dt){if(Dt!==null&&Rt.has(Dt)&&(x.width!==Dt.image.width||x.height!==Dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ut.setupDepthRenderbuffer(x)}}let at=x.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(ot=!0);let Nt=Rt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Nt[P])?N=Nt[P][V]:N=Nt[P],H=!0):x.samples>0&&Ut.useMultisampledRTT(x)===!1?N=Rt.get(x).__webglMultisampledFramebuffer:Array.isArray(Nt)?N=Nt[V]:N=Nt,Ft.copy(x.viewport),Ht.copy(x.scissor),S=x.scissorTest}else Ft.copy($t).multiplyScalar(Et).floor(),Ht.copy(Kt).multiplyScalar(Et).floor(),S=ue;if(V!==0&&(N=U),Y.bindFramebuffer(Z.FRAMEBUFFER,N)&&Y.drawBuffers(x,N),Y.viewport(Ft),Y.scissor(Ht),Y.setScissorTest(S),H){let et=Rt.get(x.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+P,et.__webglTexture,V)}else if(ot){let et=P;for(let at=0;at<x.textures.length;at++){let Nt=Rt.get(x.textures[at]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+at,Nt.__webglTexture,V,et)}}else if(x!==null&&V!==0){let et=Rt.get(x.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,et.__webglTexture,V)}nt=-1};function St(x){let P=Rt.get(x);return(P.__readFormat!==x.format||P.__readType!==x.type)&&(P.__readFormat=x.format,P.__readType=x.type,P.__formatReadable=ht.textureFormatReadable(x.format),P.__typeReadable=ht.textureTypeReadable(x.type)),P}this.readRenderTargetPixels=function(x,P,V,N,H,ot,Tt,et=0){if(!(x&&x.isWebGLRenderTarget)){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=Rt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Tt!==void 0&&(at=at[Tt]),Array.isArray(at)&&(at=at[0]),at){let Nt=Y.getBoundFramebuffer(Z.READ_FRAMEBUFFER);Y.bindFramebuffer(Z.READ_FRAMEBUFFER,at);try{let Dt=x.textures[et],re=Dt.format,Wt=Dt.type;x.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+et);let le=St(Dt);if(le.__formatReadable===!1){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(le.__typeReadable===!1){be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-N&&V>=0&&V<=x.height-H&&Z.readPixels(P,V,N,H,Yt.convert(re),Yt.convert(Wt),ot)}finally{Y.bindFramebuffer(Z.READ_FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(x,P,V,N,H,ot,Tt,et=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let at=Rt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Tt!==void 0&&(at=at[Tt]),Array.isArray(at)&&(at=at[0]),at)if(P>=0&&P<=x.width-N&&V>=0&&V<=x.height-H){let Nt=Y.getBoundFramebuffer(Z.READ_FRAMEBUFFER);Y.bindFramebuffer(Z.READ_FRAMEBUFFER,at);let Dt=x.textures[et],re=Dt.format,Wt=Dt.type;x.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+et);let le=St(Dt);if(le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,pe),Z.bufferData(Z.PIXEL_PACK_BUFFER,ot.byteLength,Z.STREAM_READ),Z.readPixels(P,V,N,H,Yt.convert(re),Yt.convert(Wt),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Y.bindFramebuffer(Z.READ_FRAMEBUFFER,Nt);let we=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await Qu(Z,we,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,pe),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,ot),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer(pe),Z.deleteSync(we),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,P=null,V=0){let N=Math.pow(2,-V),H=Math.floor(x.image.width*N),ot=Math.floor(x.image.height*N),Tt=P!==null?P.x:0,et=P!==null?P.y:0;Ut.setTexture2D(x,0),Y.activeTexture(Z.TEXTURE0),Z.copyTexSubImage2D(Z.TEXTURE_2D,V,0,0,Tt,et,H,ot),Y.unbindTexture()},this.copyTextureToTexture=function(x,P,V=null,N=null,H=0,ot=0){let Tt,et,at,Nt,Dt,re,Wt,le,pe,we=x.isCompressedTexture?x.mipmaps[ot]:x.image;if(V!==null)Tt=V.max.x-V.min.x,et=V.max.y-V.min.y,at=V.isBox3?V.max.z-V.min.z:1,Nt=V.min.x,Dt=V.min.y,re=V.isBox3?V.min.z:0;else{let Ge=Math.pow(2,-H);Tt=Math.floor(x.width*Ge),et=Math.floor(x.height*Ge),x.isDataArrayTexture?at=we.depth:x.isData3DTexture?at=Math.floor(we.depth*Ge):at=1,Nt=0,Dt=0,re=0}N!==null?(Wt=N.x,le=N.y,pe=N.z):(Wt=0,le=0,pe=0);let Pe=Yt.convert(P.format),Xt=Yt.convert(P.type),Ot;P.isData3DTexture?(Ut.setTexture3D(P,0),Ot=Z.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Ut.setTexture2DArray(P,0),Ot=Z.TEXTURE_2D_ARRAY):(Ut.setTexture2D(P,0),Ot=Z.TEXTURE_2D),Y.activeTexture(Z.TEXTURE0),Y.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,P.flipY),Y.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),Y.pixelStorei(Z.UNPACK_ALIGNMENT,P.unpackAlignment);let ye=Y.getParameter(Z.UNPACK_ROW_LENGTH),Ae=Y.getParameter(Z.UNPACK_IMAGE_HEIGHT),Qe=Y.getParameter(Z.UNPACK_SKIP_PIXELS),We=Y.getParameter(Z.UNPACK_SKIP_ROWS),Bn=Y.getParameter(Z.UNPACK_SKIP_IMAGES);Y.pixelStorei(Z.UNPACK_ROW_LENGTH,we.width),Y.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,we.height),Y.pixelStorei(Z.UNPACK_SKIP_PIXELS,Nt),Y.pixelStorei(Z.UNPACK_SKIP_ROWS,Dt),Y.pixelStorei(Z.UNPACK_SKIP_IMAGES,re);let $n=x.isDataArrayTexture||x.isData3DTexture,ai=P.isDataArrayTexture||P.isData3DTexture;if(x.isDepthTexture){let Ge=Rt.get(x),hn=Rt.get(P),Dn=Rt.get(Ge.__renderTarget),tn=Rt.get(hn.__renderTarget);Y.bindFramebuffer(Z.READ_FRAMEBUFFER,Dn.__webglFramebuffer),Y.bindFramebuffer(Z.DRAW_FRAMEBUFFER,tn.__webglFramebuffer);for(let an=0;an<at;an++)$n&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Rt.get(x).__webglTexture,H,re+an),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Rt.get(P).__webglTexture,ot,pe+an)),Z.blitFramebuffer(Nt,Dt,Nt+Tt,Dt+et,Wt,le,Wt+Tt,le+et,Z.DEPTH_BUFFER_BIT,Z.NEAREST);Y.bindFramebuffer(Z.READ_FRAMEBUFFER,null),Y.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(H!==0||x.isRenderTargetTexture||Rt.has(x)){let Ge=Rt.get(x),hn=Rt.get(P);Y.bindFramebuffer(Z.READ_FRAMEBUFFER,$),Y.bindFramebuffer(Z.DRAW_FRAMEBUFFER,D);for(let Dn=0;Dn<at;Dn++)$n?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ge.__webglTexture,H,re+Dn):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ge.__webglTexture,H),ai?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,hn.__webglTexture,ot,pe+Dn):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,hn.__webglTexture,ot),H!==0?Z.blitFramebuffer(Nt,Dt,Nt+Tt,Dt+et,Wt,le,Wt+Tt,le+et,Z.COLOR_BUFFER_BIT,Z.NEAREST):ai?Z.copyTexSubImage3D(Ot,ot,Wt,le,pe+Dn,Nt,Dt,Tt,et):Z.copyTexSubImage2D(Ot,ot,Wt,le,Nt,Dt,Tt,et);Y.bindFramebuffer(Z.READ_FRAMEBUFFER,null),Y.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else ai?x.isDataTexture||x.isData3DTexture?Z.texSubImage3D(Ot,ot,Wt,le,pe,Tt,et,at,Pe,Xt,we.data):P.isCompressedArrayTexture?Z.compressedTexSubImage3D(Ot,ot,Wt,le,pe,we.width,we.height,at,Pe,we.data):Z.texSubImage3D(Ot,ot,Wt,le,pe,Tt,et,at,Pe,Xt,we):x.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,ot,Wt,le,Tt,et,Pe,Xt,we.data):x.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,ot,Wt,le,we.width,we.height,Pe,we.data):Z.texSubImage2D(Z.TEXTURE_2D,ot,Wt,le,Tt,et,Pe,Xt,we);Y.pixelStorei(Z.UNPACK_ROW_LENGTH,ye),Y.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Ae),Y.pixelStorei(Z.UNPACK_SKIP_PIXELS,Qe),Y.pixelStorei(Z.UNPACK_SKIP_ROWS,We),Y.pixelStorei(Z.UNPACK_SKIP_IMAGES,Bn),ot===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&Z.generateMipmap(Ot),Y.unbindTexture()},this.initRenderTarget=function(x){Rt.get(x).__webglFramebuffer===void 0&&Ut.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Ut.setTextureCube(x,0):x.isData3DTexture?Ut.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Ut.setTexture2DArray(x,0):Ut.setTexture2D(x,0),Y.unbindTexture()},this.resetState=function(){O=0,z=0,it=null,Y.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(t),e.unpackColorSpace=qe._getUnpackColorSpace()}};var _e=Math.PI*2,Ie=(i,t,e)=>i<t?t:i>e?e:i,en=(i,t,e)=>i+(t-i)*e,Se=(i,t,e)=>{let n=Ie((e-i)/(t-i),0,1);return n*n*(3-2*n)},He=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-e*n));function mn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var cn=(i,t)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)};function pn(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=cn(e,n),c=cn(e+1,n),u=cn(e,n+1),h=cn(e+1,n+1);return l+(c-l)*o+(u-l)*a+(l-c-u+h)*o*a}function Yn(i,t){let e=0,n=.5,s=1;for(let r=0;r<4;r++)e+=n*pn(i*s,t*s),s*=2.03,n*=.5;return e/.9375}var kl=new Ze,Vl=new jn,Wd=new ti,a_=new k,Xd=new k,je=new xe;function Zt(i,t){i.index&&(i=i.toNonIndexed()),i.attributes.uv&&i.deleteAttribute("uv"),i.attributes.uv1&&i.deleteAttribute("uv1");let e=i.attributes.position,n=e.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)typeof t=="function"?t(je,e.getX(r),e.getY(r),e.getZ(r),r):je.set(t),s[r*3]=je.r,s[r*3+1]=je.g,s[r*3+2]=je.b;return i.setAttribute("color",new Ne(s,3)),i}function te(i,t=0,e=0,n=0,s=0,r=0,o=0,a=1,l=a,c=a){return Wd.set(s,r,o),Vl.setFromEuler(Wd),kl.compose(a_.set(t,e,n),Vl,Xd.set(a,l,c)),i.applyMatrix4(kl),i}function Mh(i,t,e){let n=new k().subVectors(e,t),s=n.length();return Vl.setFromUnitVectors(new k(0,1,0),n.normalize()),kl.compose(new k().addVectors(t,e).multiplyScalar(.5),Vl,Xd.set(1,1,1)),i.applyMatrix4(kl),s}function yn(i){let t=0;for(let a of i)t+=a.attributes.position.count;let e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*3),r=0;for(let a of i)a.attributes.normal||a.computeVertexNormals(),e.set(a.attributes.position.array,r*3),n.set(a.attributes.normal.array,r*3),s.set(a.attributes.color.array,r*3),r+=a.attributes.position.count,a.dispose();let o=new Ve;return o.setAttribute("position",new Ne(e,3)),o.setAttribute("normal",new Ne(n,3)),o.setAttribute("color",new Ne(s,3)),o.computeBoundingSphere(),o}var Ye=(i,t,e,n)=>i.copy(Zn.set(t)).lerp(So.set(e),Ie(n,0,1)),Zn=new xe,So=new xe;function Yi(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new Gr(s);return r.colorSpace=Rn,r.anisotropy=4,n&&(r.wrapS=r.wrapT=Ys,r.repeat.set(n[0],n[1])),r}var Jn=(i,t)=>{let e=(t-i)%_e;return e>Math.PI&&(e-=_e),e<-Math.PI&&(e+=_e),e},gn=(i,t,e,n)=>i+Jn(i,t)*(1-Math.exp(-e*n)),Ee=(i,t={})=>new zn({color:i,shininess:30,specular:"#2A2A2A",...t}),cr=i=>i.traverse(t=>{t.isMesh&&(t.castShadow=!0)});function qd(i="#2F78DA",t="#86C4F7",e="#F8E6C8",n=new k(.62,.3,-.73)){let s=new Pt(new Fe(600,32,16),new si({side:Mn,depthWrite:!1,fog:!1,uniforms:{top:{value:new xe(i)},mid:{value:new xe(t)},hor:{value:new xe(e)},sunDir:{value:n.clone().normalize()}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top, mid, hor, sunDir; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float y = d.y;
        vec3 c = mix(hor, mid, smoothstep(-0.03, 0.2, y)); c = mix(c, top, smoothstep(0.2, 0.8, y));
        float s = max(dot(d, sunDir), 0.0);
        c += vec3(1.0, 0.86, 0.6) * (pow(s, 10.0) * 0.35 + pow(s, 90.0) * 0.6);
        c = mix(c, vec3(1.0, 0.97, 0.86), smoothstep(0.9982, 0.9992, s));
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));return s.renderOrder=-10,s.frustumCulled=!1,s}function Yd(i){let t=new zl({canvas:i,antialias:!0,powerPreference:"high-performance"});return t.toneMapping=lo,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=Ms,t}function Zd(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}var Jd=()=>Yi(64,64,i=>{let t=i.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,64,64)});function $d(){let i=Yi(256,256,(t,e,n)=>{let s=t.createImageData(e,n),r=(o,a)=>pn(o/18,a/9)*.6+pn(o/7,a/4)*.4;for(let o=0;o<n;o++)for(let a=0;a<e;a++){let l=r(a+1,o)-r(a-1,o),c=r(a,o+1)-r(a,o-1),u=(o*e+a)*4,h=-l*3,f=-c*3,d=Math.hypot(h,f,1);s.data[u]=(h/d*.5+.5)*255,s.data[u+1]=(f/d*.5+.5)*255,s.data[u+2]=(1/d*.5+.5)*255,s.data[u+3]=255}t.putImageData(s,0,0)},[1,1]);return i.colorSpace="",i}function Zi(i,t,e,n){let s=i.clone();return s.onBeforeCompile=r=>{r.uniforms.uTime=n.time,r.uniforms.uWind=n.wind||{value:0},r.vertexShader=`uniform float uTime; uniform float uWind;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float hh = max(0.0, transformed.y - ${e.toFixed(2)});
      float ph = 0.0;
      #ifdef USE_INSTANCING
        ph = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.23;
      #endif
      float wk = 1.0 + uWind * 6.0;
      transformed.x += ((sin(uTime * (1.25 + uWind * 3.0) + ph) + 0.35 * sin(uTime * 2.7 + ph * 1.7)) * ${t.toFixed(4)} * wk + uWind * ${(t*8).toFixed(4)}) * hh * hh;
      transformed.z += cos(uTime * (1.05 + uWind * 2.5) + ph) * ${(t*.5).toFixed(4)} * wk * hh * hh;`)},s.customProgramCacheKey=()=>"sway"+t+"_"+e+(i.flatShading?"f":"")+i.side,s}function Gl(i,t,e){let n=[],s=4.6+i()*1.6,r=new Xn([new k(0,-.2,0),new k(t*.2,s*.35,.05),new k(t*.6,s*.7,.1),new k(t,s,.12)]),o=13;for(let c=0;c<o;c++){let u=r.getPoint(c/o),h=r.getPoint((c+1)/o),f=en(.25,.14,c/o),d=Zt(new me(f*1.13,f*.9,1,9,1,!0),(w,p,g)=>Ye(w,c%2?"#7E5E3C":"#8D6C46","#A9875C",g+.5)),m=u.distanceTo(h);te(d,0,0,0,0,0,0,1,m*1.04,1),Mh(d,u,h),n.push(d)}let a=r.getPoint(1),l=new k(0,1,0);n.push(te(Zt(new Sn(.28,1),"#6B5A2E"),a.x,a.y,a.z));for(let c=0;c<e;c++){let u=c/e*_e+i()*.35,h=new k(Math.cos(u),0,Math.sin(u)),f=2.6+i()*.9,d=.7+i()*.6,m=new Xn([a.clone(),a.clone().addScaledVector(h,f*.3).addScaledVector(l,.55),a.clone().addScaledVector(h,f*.65).addScaledVector(l,.35-d*.2),a.clone().addScaledVector(h,f).addScaledVector(l,-d)]),w=14,p=[],g=[],b=[];for(let I=0;I<=w;I++){let C=I/w,y=m.getPoint(C),_=m.getTangent(C),R=new k().crossVectors(_,l).normalize(),T=Math.pow(Math.sin(Math.PI*Math.min(1,C*1.15)),.7)*.5*(I%2?1:.72);b.push([y,y.clone().addScaledVector(R,T).addScaledVector(l,-T*.42),y.clone().addScaledVector(R,-T).addScaledVector(l,-T*.42),C])}let E=(I,C,y)=>{p.push(I.x,I.y,I.z),Ye(je,"#2E7A30","#6CC24A",C*.9+y*.25),g.push(je.r,je.g,je.b)};for(let I=0;I<w;I++){let[C,y,_,R]=b[I],[T,B,q,U]=b[I+1];E(C,R,0),E(y,R,1),E(T,U,0),E(y,R,1),E(B,U,1),E(T,U,0),E(C,R,0),E(T,U,0),E(_,R,1),E(_,R,1),E(T,U,0),E(q,U,1)}let A=new Ve;A.setAttribute("position",new Ne(new Float32Array(p),3)),A.setAttribute("color",new Ne(new Float32Array(g),3)),A.computeVertexNormals(),n.push(A)}for(let c=0;c<2;c++){let u=i()*_e;for(let h=0;h<7;h++)n.push(te(Zt(new Sn(.085,0),h%2?"#B85C1C":"#D07A26"),a.x+Math.cos(u)*.32+(i()-.5)*.16,a.y-.32-i()*.3,a.z+Math.sin(u)*.32+(i()-.5)*.16))}return yn(n)}function Hl(i,t,e){let n=[Zt(te(new me(.12,.2,1.7,7),0,.85,0),"#7A5230")];n.push(Zt(te(new me(.05,.08,.8,5),.25,1.55,0,0,0,-.7),"#7A5230"));for(let s=0;s<7;s++){let r=.62+i()*.45,o=(i()-.5)*1.3,a=2.15+i()*.9,l=(i()-.5)*1.1,c=i();n.push(te(Zt(new Sn(r,1),(u,h,f,d)=>Ye(u,e[0],e[1],.25+f/r*.45+c*.3+(cn(h*9,d*9)-.5)*.2)),o,a,l))}if(t)for(let s=0;s<9;s++){let r=i()*_e,o=i()*1.3;n.push(te(Zt(new Sn(.08,1),t),Math.cos(r)*.95,2.1+Math.sin(o)*.9,Math.sin(r)*.85+.2))}return yn(n)}var Sh=()=>yn([0,1,2,3].map(i=>te(Zt(new Sn(.42-i*.05,1),(t,e,n)=>Ye(t,"#2F8A3C","#86D05C",.4+n*.9+i*.1)),(i-1.5)*.32,.3,i%2*.2))),bh=()=>Zt(new pi(.4,0),(i,t,e,n)=>Ye(i,"#8C877B","#C9C4B6",.4+e*1.2+cn(t*7,n*7)*.3)),Kd=()=>yn([...Array(6)].map((i,t)=>{let e=t*1.1,n=.8+t%3*.22,s=Zt(new Fn(.025,n,3),(r,o,a)=>Ye(r,"#3C7F35","#8CC05A",a/n+.5));return te(s,Math.cos(e)*.12,n/2,Math.sin(e)*.12,Math.sin(e)*.15,0,Math.cos(e)*.15),t%2?yn([s,te(Zt(new me(.035,.035,.16,6),"#6B4423"),Math.cos(e)*.12+Math.cos(e)*.15*n,n-.05,Math.sin(e)*.12)]):s})),wh=()=>(()=>{let i=[],t=[];for(let n=0;n<5;n++){let s=n/5*_e+.3,r=.22+n%3*.07,o=.035,a=Math.cos(s)*.05,l=Math.sin(s)*.05,c=a+Math.cos(s)*.1,u=l+Math.sin(s)*.1,h=-Math.sin(s)*o,f=Math.cos(s)*o;i.push(a-h,0,l-f,a+h,0,l+f,c,r,u);for(let d of[0,0,1])Ye(je,"#5AA544","#B0E47A",d),t.push(je.r,je.g,je.b)}let e=new Ve;return e.setAttribute("position",new Ne(new Float32Array(i),3)),e.setAttribute("color",new Ne(new Float32Array(t),3)),e.computeVertexNormals(),e})();function Qd(i,t){let e=new Te,n=new Te;e.add(n),n.position.y=.55;let s=i.body==="fire",r=i.body==="rainbow",o;r?o=Ee("#FFFFFF",{vertexColors:!0,shininess:50}):s?o=Ee("#FF8A1F",{emissive:"#FF3D00",emissiveIntensity:.55,shininess:20}):o=Ee(i.body,{shininess:38});let a=new Fe(.5,48,32);r&&(a=Zt(a,(D,O,z,it)=>D.setHSL(((Math.atan2(it,O)/_e+1)%1+z*.3)%1,.75,.62)));let l=new Pt(a,o);l.scale.set(1.05,1,.95);let c=new Pt(new Fe(.5,32,20),new ln({color:i.dark,side:Mn}));c.scale.set(1.05*1.035,1.035,.95*1.035);let u=new Pt(new Fe(.3,32,16),Ee(s||r?i.belly:new xe(i.body).lerp(new xe(i.belly),.5),{shininess:20}));u.position.set(0,-.25,.345),u.scale.set(.78,.5,.32),n.add(l,c,u);let h=[];for(let D of[-1,1]){let O=new Pt(new Fe(.15,20,12),Ee(i.dark,{shininess:20}));O.scale.set(1.2,.55,1.45),O.position.set(D*.22,-.49,.07),n.add(O),h.push(O)}let f=[],d=[],m=Ee("#FFFFFF",{shininess:90,specular:"#FFFFFF"}),w=Ee("#1B1F3B",{shininess:120,specular:"#FFFFFF"}),p=new ln({color:i.dark});for(let D of[-1,1]){let O=new Te;O.position.set(D*.185,.15,.36);let z=new Pt(new Fe(.162,24,16),p);z.scale.set(1,1.15,.6),z.position.z=-.012;let it=new Pt(new Fe(.15,24,16),m);it.scale.set(1,1.15,.72);let nt=new Te;nt.position.z=.074;let pt=new Pt(new Fe(.07,16,12),w);pt.scale.z=.6;let Ft=new Pt(new Fe(.024,8,6),new ln({color:"#FFFFFF"}));Ft.position.set(.028,.035,.04),nt.add(pt,Ft),O.add(z,it,nt),n.add(O),f.push(O),d.push(nt)}let g=new Pt(new Gi(.075,.017,6,16,Math.PI*.8),new ln({color:"#1B1F3B"}));g.rotation.z=Math.PI+Math.PI*.1,g.position.set(0,0,.462),g.rotation.x=-.2;let b=new Pt(new Fe(.05,12,10),new ln({color:"#7A1F2B"}));b.scale.set(1,1.25,.4),b.position.set(0,-.04,.47),b.visible=!1,n.add(g,b);let E=new Te;n.add(E);let A=[];if(i.acc==="blush"||i.id==="orange")for(let D of[-1,1]){let O=new Pt(new ni(.07,16),new ln({color:"#FF7896",transparent:!0,opacity:.5}));O.position.set(D*.33,-.06,.36),O.rotation.y=D*.75,O.scale.y=.62,E.add(O)}if(i.acc==="leaf"){let D=new Pt(new me(.018,.022,.14,6),Ee("#6B3E1F"));D.position.set(0,.54,0),D.rotation.z=-.15;let O=new Pt(new Fe(.15,16,8),Ee("#3FB950"));O.scale.set(1,.18,.5),O.position.set(.13,.6,0),O.rotation.z=.45,E.add(D,O)}else if(i.acc==="antenna")for(let D of[-1,1]){let O=new Pt(new me(.014,.014,.32,6),Ee(i.dark));O.position.set(D*.18,.58,0),O.rotation.z=-D*.35;let z=new Pt(new Fe(.06,12,10),Ee("#FF5DA2",{emissive:"#FF5DA2",emissiveIntensity:.3}));z.position.set(D*.235,.73,0),E.add(O,z)}else if(i.acc==="crown"){let D=Ee("#FFC400",{shininess:110,specular:"#FFF2B0",emissive:"#5A3D00",emissiveIntensity:.3}),O=new Pt(new me(.25,.23,.12,28,1,!0),D);O.material.side=Xe,O.position.y=.48,E.add(O);for(let z=0;z<6;z++){let it=z/6*_e,nt=new Pt(new Fn(.05,.16,6),D);nt.position.set(Math.sin(it)*.24,.6,Math.cos(it)*.24),E.add(nt);let pt=new Pt(new Fe(.028,8,6),Ee(z%2?"#2EA8FF":"#E63946",{shininess:140,specular:"#FFFFFF"}));pt.position.set(Math.sin(it)*.255,.48,Math.cos(it)*.255),E.add(pt)}}else if(i.acc==="star"){let D=new ii;for(let z=0;z<10;z++){let it=z/10*_e-Math.PI/2,nt=z%2?.06:.14;z?D.lineTo(Math.cos(it)*nt,-Math.sin(it)*nt):D.moveTo(Math.cos(it)*nt,-Math.sin(it)*nt)}let O=new Pt(new to(D,{depth:.04,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:1}),Ee("#FFE066",{emissive:"#FFB703",emissiveIntensity:.5,shininess:90}));O.position.set(0,.74,-.02),E.add(O),E.userData.star=O}else if(i.acc==="band"){let D=Ee("#E63946"),O=new Pt(new Gi(.43,.05,8,40),D);O.rotation.x=Math.PI/2-.08,O.position.y=.2,O.scale.set(1.05,.95,1),E.add(O);for(let z of[-1,1]){let it=new Pt(new Ue(.06,.03,.3),D);it.position.set(z*.06,.18,-.55),it.rotation.set(.5,z*.3,0),E.add(it),E.userData["tail"+z]=it}}else if(i.acc==="hat"){let D=Ee("#946232",{shininess:14}),O=Ee("#4A2E14",{shininess:12}),z=new Pt(new me(.46,.48,.035,36),D);z.position.y=.4;let it=new Pt(new Fe(.29,28,14,0,_e,0,Math.PI/2),D);it.position.y=.41,it.scale.y=.75;let nt=new Pt(new me(.292,.295,.06,28,1,!0),O);nt.material.side=Xe,nt.position.y=.45;let pt=new Te;pt.add(z,it,nt),pt.rotation.set(-.12,0,.06),E.add(pt);let Ft=Ee("#E63946",{shininess:15,side:Xe}),Ht=new Pt(new Gi(.34,.04,8,36),Ft);Ht.rotation.x=Math.PI/2,Ht.position.y=-.4,Ht.scale.set(1.05,.95,1),E.add(Ht);let S=new ii;S.moveTo(-.2,0),S.lineTo(.2,0),S.lineTo(.02,-.17),S.closePath();let M=new Pt(new Vi(S),Ft);M.position.set(0,-.38,.33),M.rotation.x=-.55,E.add(M)}if(s){for(let O=0;O<7;O++){let z=O/7*Math.PI-Math.PI/2,it=new Pt(new Fn(.09,.4,8,1,!0),new ln({color:O%2?"#FFB13B":"#FF5A1F",transparent:!0,opacity:.9,depthWrite:!1,blending:mi}));it.position.set(Math.sin(z)*.28,.42+Math.cos(z)*.05,-.12-Math.abs(Math.cos(z))*.08),it.userData.ph=O,n.add(it),A.push(it)}let D=new Ei(new fi({map:t,color:"#FF6A1F",transparent:!0,opacity:.55,depthWrite:!1,blending:mi}));D.scale.setScalar(2.2),n.add(D)}cr(e),c.castShadow=!1;let I=new Te,C=["#E63946","#FFFFFF","#FFB703","#FFFFFF","#2EA8FF","#FFFFFF"],y=Zt(new Fe(1.7,24,8,0,_e,0,Math.PI*.42),(D,O,z,it)=>D.set(C[Math.floor((Math.atan2(it,O)/_e+1)%1*12+1e-4)%6])),_=new $e({vertexColors:!0,side:Xe,transparent:!0,opacity:1}),R=new Pt(y,_);R.scale.set(1,.62,1),R.castShadow=!0;let T=new Float32Array(60),B=new gs(new Ve,new is({color:"#4A4A5A",transparent:!0,opacity:.85}));B.geometry.setAttribute("position",new Ne(T,3)),B.frustumCulled=!1;let q=new Te;q.position.y=1.6,q.add(R),I.add(q,B),I.visible=!1;let U=new Pt(y,_.clone());U.visible=!1,U.castShadow=!1;let $=new Pt(new Ve,Ee("#8B5A2B",{shininess:5}));return $.visible=!1,$.castShadow=!0,{id:i.id,root:e,inner:n,eyes:f,pupils:d,smile:g,ooh:b,feet:h,acc:E,flames:A,bodyMat:o,fire:s,chute:I,canopy:R,canopyHolder:q,lines:B,drop:U,rope:$,turn:0,blink:0,nextBlink:2}}function hr(i={}){let t={skin:"#C98E62",thobe:"#F2EEE4",bisht:"#5B3A24",shmagh:"#C8102E",agal:"#141414",beard:"#4A4440",beads:!0,gold:!0,...i},e=new Te,n=Ee(t.skin,{shininess:12}),s=Ee(t.thobe,{shininess:8}),r=Ee(t.bisht||t.thobe,{shininess:14,side:Xe}),o=new Pt(new Ln([new ct(.001,0),new ct(.27,0),new ct(.275,.1),new ct(.25,.5),new ct(.232,.9),new ct(.222,1.2),new ct(.2,1.34),new ct(.12,1.42),new ct(.05,1.45)],30),s);e.add(o);for(let C of[-1,1]){let y=new Pt(new Ue(.1,.04,.2),Ee("#4A2E18"));y.position.set(C*.09,.02,.2),e.add(y)}let a=new Pt(new Ln([new ct(.245,.06),new ct(.295,.08),new ct(.285,.5),new ct(.265,.9),new ct(.255,1.2),new ct(.24,1.33),new ct(.16,1.41)],30,.62,_e-1.24),r);e.add(a),a.visible=!!t.bisht;let l=Ee("#D4AF37",{shininess:90,specular:"#FFF2B0"});for(let C of[-1,1]){let y=C*.62,_=[[.247,.08],[.297,.1],[.287,.5],[.267,.9],[.257,1.2],[.242,1.33],[.162,1.41]].map(([R,T])=>new k(Math.sin(y)*(R+.006),T,Math.cos(y)*(R+.006)));t.bisht&&t.gold&&e.add(new Pt(new Hi(new Xn(_),20,.014,6),l))}let c=[];for(let C of[-1,1]){let y=new Te;y.position.set(C*.25,1.3,0),e.add(y);let _=new Pt(new Ti(.072,.28,4,10),r);_.position.y=-.18,y.add(_);let R=new Te;R.position.y=-.36,y.add(R);let T=new Pt(new Ti(.068,.22,4,10),r);T.position.y=-.14,R.add(T);let B=new Pt(new me(.055,.06,.05,10),s);B.position.y=-.3,R.add(B);let q=new Pt(new Fe(.052,12,10),n);if(q.position.y=-.36,q.scale.set(.9,1.1,.8),R.add(q),C<0&&t.beads){let U=new Pt(new Gi(.06,.011,6,18),Ee("#E0A03C",{shininess:80,specular:"#FFF0C8"}));U.position.set(0,-.44,.02),U.rotation.y=.4,R.add(U)}y.rotation.z=C*.12,R.rotation.x=-.25,c.push({sh:y,el:R,s:C})}let u=new Pt(new me(.06,.07,.1,10),n);u.position.y=1.46,e.add(u);let h=new Te;h.position.y=1.6,e.add(h);let f=new Pt(new Fe(.155,28,20),n);f.scale.set(.94,1.08,1),h.add(f);let d=new Pt(new Fe(.034,10,8),Ee("#B97C52"));d.position.set(0,-.005,.15),d.scale.set(.85,1.1,1.25),h.add(d);for(let C of[-1,1]){let y=new Pt(new Fe(.019,10,8),Ee("#1B140F",{shininess:120,specular:"#FFFFFF"}));y.position.set(C*.055,.025,.135),h.add(y);let _=new Pt(new Ue(.065,.016,.02),Ee("#3A3430"));_.position.set(C*.056,.058,.138),_.rotation.z=-C*.12,h.add(_);let R=new Pt(new Ti(.019,.06,3,6),Ee("#2A2420"));R.position.set(C*.034,-.045,.142),R.rotation.z=C*1.15,h.add(R)}let m=new Pt(new Fe(.16,24,10,Math.PI/2-1.2,2.4,Math.PI*.6,Math.PI*.3),Ee(t.beard==="none"?"#000":t.beard,{side:Xe,shininess:5}));h.add(m),m.visible=t.beard!=="none";let w=new Pt(new Fe(.026,10,8),new ln({color:"#4A1A14"}));w.position.set(0,-.07,.143),w.scale.set(1,.3,.5),h.add(w);let p=Yi(128,128,(C,y,_)=>{C.fillStyle="#FBF8F2",C.fillRect(0,0,y,_),C.fillStyle=t.shmagh;for(let R=0;R<_;R+=16)for(let T=0;T<y;T+=16)C.fillRect(T+2,R+2,7,7),C.fillRect(T+9,R+9,5,5),C.fillRect(T+9,R+2,2,2),C.fillRect(T+2,R+11,2,2)},[5,5]),g=new $e({map:p,side:Xe}),b=new Pt(new Fe(.168,28,14,0,_e,0,Math.PI*.52),g);b.rotation.x=-.42,b.position.y=.01,h.add(b);let E=new Pt(new Ln([new ct(.168,.02),new ct(.18,-.06),new ct(.2,-.16),new ct(.24,-.26),new ct(.28,-.33)],28,1.15,_e-2.3),g);h.add(E);let A=new Pt(new Un(.2,.36),g);A.position.set(.17,-.25,.1),A.rotation.set(-.15,.6,-.08),h.add(A);let I=Ee(t.agal,{shininess:40});for(let[C,y]of[[.07,.154],[.097,.139]]){let _=new Pt(new Gi(y,.015,8,36),I);_.position.set(0,C*.913,-C*.408),_.rotation.x=Math.PI/2-.42,h.add(_)}return cr(e),{root:e,head:h,arms:c,mouth:w,yaw:0}}var bn=Math.PI/180,bo=(i,t)=>i*100003+t;function Ah(i){let t=new Map;return{cell:i,add(e,n=e.x,s=e.z){let r=bo(Math.floor(n/i),Math.floor(s/i)),o=t.get(r);o||(o=[],t.set(r,o)),o.push(e)},remove(e,n=e.x,s=e.z){let r=t.get(bo(Math.floor(n/i),Math.floor(s/i)));if(r){let o=r.indexOf(e);o>=0&&r.splice(o,1)}},each(e,n,s,r){let o=Math.floor(e/i),a=Math.floor(n/i);for(let l=-s;l<=s;l++)for(let c=-s;c<=s;c++){let u=t.get(bo(o+l,a+c));if(u){for(let h of u)if(r(h)===!0)return!0}}return!1}}}function l_(i,t){let e=i.x||0,n=i.z||0,s=13.3,r=95,o=0,a=(K,ht)=>[e+Math.cos(ht*bn)*K,n+Math.sin(ht*bn)*K],l=(K,ht)=>Math.hypot(K-e,ht-n),c=(K,ht)=>Math.atan2(ht-n,K-e);function u(K){if(K<=s+1)return r;let ht=40+55*Math.pow(1-Ie((K-s-1)/(72-s-1),0,1),1.12),Y=36+4*(1-Ie((K-72)/48,0,1)),Qt=36*Math.pow(1-Ie((K-120)/60,0,1),1.25)-Se(180,230,K)*14;return en(en(ht,Y,Se(68,76,K)),Qt,Se(116,124,K))}let h=[{a:118.5*bn,r0:108,r1:190,w:7.5,depth:17},{a:101*bn,r0:22,r1:64,w:6,depth:15},{a:58*bn,r0:26,r1:72,w:4.5,depth:1.6,water:!0}],f=(K,ht)=>{let Y=l(K,ht),Qt=u(Y)+(Yn(K*.028+5,ht*.028)-.5)*9*Se(s+2,s+12,Y)*(1-Se(200,260,Y)*.5);return Qt+=5*Se(49.5,47.6,Y)*Se(28,42,Y),Qt+=4*Se(27.2,25.3,Y)*Se(15.5,21,Y),Qt},d=(K,ht)=>{let Y=l(K,ht),Qt=f(K,ht);for(let Rt of h){if(Y<=Rt.r0||Y>=Rt.r1)continue;let Ut=Math.abs(Jn(Rt.a,c(K,ht)))*Y;Ut<Rt.w&&(Qt-=Rt.depth*Se(Rt.w,Rt.w*.25,Ut)*Se(Rt.r0,Rt.r0+4,Y)*Se(Rt.r1,Rt.r1-4,Y))}return Qt},m=[];function w(K,ht={}){let Y=K.map(([ut,_t])=>{let[Bt,Vt]=a(ut,_t);return new k(Bt,0,Vt)}),Qt=new Xn(Y,!1,"centripetal"),Rt=Qt.getLength(),Ut=Math.max(2,Math.ceil(Rt/.8)),F=[];for(let ut=0;ut<=Ut;ut++){let _t=Qt.getUtoTmapping(ut/Ut),Bt=Qt.getPoint(_t);F.push([Bt.x,Bt.z,Math.min(Y.length-2,Math.floor(_t*(Y.length-1)))])}let v={id:m.length,kind:ht.kind||"trail",pts:F.map(([ut,_t,Bt])=>({x:ut,z:_t,wi:Bt,y:0,hw:ht.hw||1.35,kind:ht.kinds&&ht.kinds[Bt]||ht.kind||"trail"}))},st=v.pts.map(ut=>f(ut.x,ut.z));if(v.pts.forEach((ut,_t)=>{let Bt=0,Vt=0;for(let yt=-22;yt<=22;yt++)Bt+=st[Ie(_t+yt,0,st.length-1)],Vt++;ut.y=Bt/Vt}),ht.y0!=null||ht.y1!=null){let ut=v.pts.length-1,_t=ht.y0!=null?ht.y0-v.pts[0].y:0,Bt=ht.y1!=null?ht.y1-v.pts[ut].y:0;v.pts.forEach((Vt,yt)=>{Vt.y+=en(_t,Bt,yt/(ut||1))})}for(let ut of v.pts)ut.kind==="ledge"?ut.hw=.72:ut.kind==="bridge"?ut.hw=.62:ut.kind==="stones"&&(ut.hw=.6);return m.push(v),v}let p=w([[166,12],[160,40],[153,68],[146,94],[142.5,114.6],[140,122.4],[134,146],[127,172],[121,194],[117,206]],{kinds:{4:"bridge"}}),g=[110,98,86,74],b=[212,224,236,248,260,272,284],E=(K,ht)=>a(g[K],b[ht]),A=(K,ht)=>{let[Y,Qt]=E(K,ht),Rt=0;for(let Ut=0;Ut<9;Ut++)Rt+=f(Y+Math.cos(Ut)*4,Qt+Math.sin(Ut)*4);return Rt/9},I=[],C=new Set,y=mn(77),_=(K,ht)=>K*10+ht;(function K(ht,Y){C.add(_(ht,Y));let Qt=[[ht+1,Y],[ht-1,Y],[ht,Y+1],[ht,Y-1]].filter(([Rt,Ut])=>Rt>=0&&Rt<4&&Ut>=0&&Ut<7&&!C.has(_(Rt,Ut)));for(let Rt=Qt.length-1;Rt>0;Rt--){let Ut=Math.floor(y()*(Rt+1));[Qt[Rt],Qt[Ut]]=[Qt[Ut],Qt[Rt]]}for(let[Rt,Ut]of Qt)C.has(_(Rt,Ut))||(I.push([[ht,Y],[Rt,Ut]]),K(Rt,Ut))})(0,0),I.push([[1,2],[1,3]],[[2,4],[3,4]]);let R=new Map;for(let K of I){let ht=_(...K[0])*100+_(...K[1]),Y=_(...K[1])*100+_(...K[0]);!R.has(ht)&&!R.has(Y)&&R.set(ht,K)}let T=[],B=new Map;for(let[[K,ht],[Y,Qt]]of R.values()){let[Rt,Ut]=E(K,ht),[F,v]=E(Y,Qt),st=(Rt+F)/2+(y()-.5)*3,ut=(Ut+v)/2+(y()-.5)*3,_t=(Vt,yt)=>[l(Vt,yt),(c(Vt,yt)/bn+360)%360],Bt=w([_t(Rt,Ut),_t(st,ut),_t(F,v)],{kind:"maze",hw:1.25,y0:A(K,ht),y1:A(Y,Qt)});Bt.cells=[[K,ht],[Y,Qt]],T.push(Bt);for(let Vt of Bt.cells)B.set(_(...Vt),(B.get(_(...Vt))||0)+1)}let q=w([[117,206],[113,209],[g[0],b[0]]],{kind:"maze",hw:1.3,y0:p.pts[p.pts.length-1].y,y1:A(0,0)}),U=w([[g[3],b[6]],[70,287],[66,292]],{kind:"maze",hw:1.3,y0:A(3,6)}),$=[[66,292],[62,306],[58,334],[54,308],[50,336],[46,309],[43,330],[41,344],[40,0],[39.3,16],[38.6,30],[37.5,42],[36.6,53],[35.8,63],[34.4,75],[32.4,86],[31.2,92],[29.6,110.5],[27.4,122],[24,138],[20,154],[s+.4,168]],D=w($,{y0:U.pts[U.pts.length-1].y,kinds:{7:"ledge",8:"ledge",9:"ledge",12:"stones",16:"bridge"}});{let K=D.pts,ht=0;for(let Y=K.length-1;Y>=0&&(Y<K.length-1&&(ht+=Math.hypot(K[Y+1].x-K[Y].x,K[Y+1].z-K[Y].z)),K[Y].y=Math.max(K[Y].y,r-ht*.42),!(ht>60));Y--);K[K.length-1].y=r;for(let Y=Math.max(1,K.length-80);Y<K.length;Y++)(K[Y].y-K[Y-1].y)/(Math.hypot(K[Y].x-K[Y-1].x,K[Y].z-K[Y-1].z)||1)>.24&&K[Y].kind==="trail"&&(K[Y].kind="stairs",K[Y].hw=1.25)}let O=[];for(let K of[p,D]){let ht=0;for(;ht<K.pts.length;){if(K.pts[ht].kind!=="bridge"){ht++;continue}let Y=ht;for(;Y+1<K.pts.length&&K.pts[Y+1].kind==="bridge";)Y++;let Qt=K.pts[Math.max(0,ht-1)],Rt=K.pts[Math.min(K.pts.length-1,Y+1)],Ut=Y-ht+1,F=Ut>10?[Math.floor(Ut*.3),Math.floor(Ut*.7)]:[Math.floor(Ut/2)];for(let v=ht;v<=Y;v++){let st=(v-ht+1)/(Ut+1),ut=K.pts[v];ut.y=en(Qt.y,Rt.y,st)-Math.sin(st*Math.PI)*.7,ut.gap=F.includes(v-ht)}O.push({seg:K,i:ht,j:Y,a:Qt,b:Rt}),ht=Y+1}}let z=[];for(let K=0;K<D.pts.length;K++){let ht=D.pts[K];if(ht.kind==="stones"&&(!z.length||Math.hypot(ht.x-z[z.length-1].x,ht.z-z[z.length-1].z)>2.25)){let Y=D.pts[Math.min(K+1,D.pts.length-1)],Qt=(t()-.5)*.5,Rt=-(Y.z-ht.z),Ut=Y.x-ht.x,F=Math.hypot(Rt,Ut)||1;z.push({x:ht.x+Rt/F*Qt,z:ht.z+Ut/F*Qt,y:ht.y+.05,r:.72})}}let it=[];for(let K of m)K.pts.forEach((ht,Y)=>{ht.seg=K,ht.k=Y,it.push(ht)});let nt=Ah(4);for(let K of it)nt.add(K);function pt(K,ht,Y,Qt=1){let Rt=null,Ut=1/0;if(nt.each(K,ht,Qt,Mt=>{let qt=(Mt.x-K)**2+(Mt.z-ht)**2+(Y!=null?Math.max(0,Math.abs(Mt.y-Y)-1.2)**2*9:0);qt<Ut&&(Ut=qt,Rt=Mt)}),!Rt)return null;let F=Rt.seg.pts,v=F[Math.min(Rt.k+1,F.length-1)],st=F[Math.max(Rt.k-1,0)],ut=Math.hypot(K-Rt.x,ht-Rt.z),_t=Rt.y,Bt=v.x-st.x,Vt=v.z-st.z,yt=Math.hypot(Bt,Vt)||1;Bt/=yt,Vt/=yt;for(let[Mt,qt]of[[st,Rt],[Rt,v]]){let ae=qt.x-Mt.x,W=qt.z-Mt.z,At=ae*ae+W*W||1,zt=Ie(((K-Mt.x)*ae+(ht-Mt.z)*W)/At,0,1),Yt=Math.hypot(K-(Mt.x+ae*zt),ht-(Mt.z+W*zt));Yt<ut&&(ut=Yt,_t=en(Mt.y,qt.y,zt))}return{p:Rt,d:ut,y:_t,tx:Bt,tz:Vt,side:(K-Rt.x)*-Vt+(ht-Rt.z)*Bt}}function Ft(K,ht){let Y=l(K,ht),Qt=d(K,ht);if(Y<s+1.5)return en(Qt,r,Se(s+1.5,s+.3,Y));if(Y>200)return Qt;let Rt=Qt,Ut=pt(K,ht,null,2);if(Ut&&Ut.d<Ut.p.hw+3.2){let F=Ut.p.kind;if(F!=="bridge"){if(F==="stones")Rt=Math.min(Rt,Ut.y-.55);else if(Rt=en(Rt,Ut.y-.04,Se(Ut.p.hw+3.2,Ut.p.hw+.5,Ut.d)),F==="ledge"){let v=Ut.d-Ut.p.hw;v>0&&(Y>l(Ut.p.x,Ut.p.z)?Rt=Math.min(Rt,Ut.y-Se(0,2.2,v)*11):Rt=Math.max(Rt,Ut.y+Se(.3,2.4,v)*4.5))}}}return Rt}let Ht=[],S=(K,ht)=>K.pts.findIndex(Y=>Y.kind===ht),M=(K,ht,Y)=>{let Qt=K.pts[Ie(ht,0,K.pts.length-1)],Rt=K.pts[Ie(ht+6,0,K.pts.length-1)],Ut={id:"cp"+Ht.length,x:Qt.x,z:Qt.z,y:Qt.y,name:Y,face:Math.atan2(Rt.z-Qt.z,Rt.x-Qt.x),flag:!0};return Ht.push(Ut),Ut};M(p,3,"\u0633\u0641\u062D \u0627\u0644\u062C\u0628\u0644"),M(p,S(p,"bridge")-7,"\u0642\u0628\u0644 \u0627\u0644\u062C\u0633\u0631"),M(p,p.pts.length-2,"\u0628\u0627\u0628 \u063A\u0627\u0628\u0629 \u0627\u0644\u0645\u062A\u0627\u0647\u0629"),M(D,4,"\u0637\u0644\u0639\u0629 \u0627\u0644\u0632\u0643\u0632\u0627\u0643"),M(D,S(D,"ledge")-6,"\u0642\u0628\u0644 \u062D\u0627\u0641\u0629 \u0627\u0644\u062C\u0631\u0641"),M(D,S(D,"stones")-5,"\u0642\u0628\u0644 \u0627\u0644\u0633\u0627\u0642\u064A\u0629"),M(D,S(D,"bridge")-6,"\u0642\u0628\u0644 \u0627\u0644\u062C\u0633\u0631 \u0627\u0644\u062B\u0627\u0646\u064A");let j=D.pts[D.pts.length-1],J=c(j.x,j.z);Ht.push({id:"summit",x:e-3,z:n+3,y:r,name:"\u0633\u0627\u062D\u0629 \u0627\u0644\u0642\u0645\u0629",face:0,flag:!1,plaza:!0});let wt=[],Et=[];{let K=new Map;for(let v of T){let[st,ut]=v.cells.map(_t=>_(..._t));for(let[_t,Bt]of[[st,ut],[ut,st]])K.has(_t)||K.set(_t,[]),K.get(_t).push(Bt)}let ht=_(0,0),Y=_(3,6),Qt=new Map([[ht,-1]]),Rt=[ht],Ut=new Map;for(;Rt.length;){let v=Rt.shift();if(v===Y)break;for(let st of K.get(v)||[])Qt.has(st)||(Qt.set(st,v),Rt.push(st))}for(let v=Y;Qt.get(v)!==-1&&Qt.has(v);v=Qt.get(v))Ut.set(Qt.get(v),v);let F=0;for(let[v,st]of Ut){if((B.get(v)||0)<3||F++%3===2)continue;let[ut,_t]=E(Math.floor(v/10),v%10),[Bt,Vt]=E(Math.floor(st/10),st%10),yt=Math.atan2(Vt-_t,Bt-ut),Mt=ut+Math.cos(yt+.9)*1.9,qt=_t+Math.sin(yt+.9)*1.9;wt.push({x:Mt,z:qt,a:yt,text:"\u2B05 \u0644\u0644\u0642\u0645\u0629"})}for(let[v,st]of B){if(st!==1||v===ht||v===Y)continue;let[ut,_t]=E(Math.floor(v/10),v%10);Et.push({x:ut,z:_t,a:t()*_e})}}let Lt=[];for(let K of[p,D])for(let ht=8;ht<K.pts.length-4;ht+=17){let Y=K.pts[ht];Y.kind==="trail"&&Lt.push({x:Y.x,y:Y.y+.9,z:Y.z})}for(let K of Et){let ht=pt(K.x,K.z,null,2);if(ht)for(let Y=0;Y<4;Y++){let Qt=ht.p.seg.pts[Ie(ht.p.k+(Y-1.5)*2|0,0,ht.p.seg.pts.length-1)];Lt.push({x:Qt.x,y:Qt.y+.9,z:Qt.z})}}let he=(K,ht)=>{let Y=K.pts[Ie(ht,0,K.pts.length-1)];return{x:Y.x,z:Y.z,y:Y.y}},$t=Math.floor(p.pts.length*.22),Kt=S(D,"ledge"),ue=[{kind:"wolf",home:he(p,$t)},{kind:"wolf",home:he(p,$t+4),ox:1.5},{kind:"wolf",home:he(D,Kt-26)},{kind:"wolf",home:he(D,Kt-22),ox:1.2},{kind:"boar",home:he(T[Math.floor(T.length*.4)],10)},{kind:"boar",home:he(T[Math.floor(T.length*.75)],10)}],mt=(K,ht)=>[e+Math.cos(K*bn)*ht,n+Math.sin(K*bn)*ht],gt=236,[Ct,rt]=mt(gt,9.2),vt=mt(221,6.2),Jt=mt(118,9),jt=mt(300,10.2),ce={x:e,z:n,RP:s,HS:r,DECK_A:o,ENTRY_A:J,kioskA:gt,kiosk:[Ct,rt],meet:vt,bell:Jt,flag:jt,benches:[185,150,30],beds:[80,175,280,350],lamps:[45,145,255,330],pines:[62,100,200,320],guests:[{a:212,r:6.9,look:vt,kind:"tea"},{a:229,r:6.9,look:vt,kind:"tea"},{a:219,r:5.2,look:[Ct,rt],kind:"stand"}],scope:[e+s+3.9,n],inter:[{id:"tea",x:Ct-Math.cos(gt*bn)*2.1,z:rt-Math.sin(gt*bn)*2.1,r:2.3,label:"\u2615 \u0627\u0634\u0631\u0628 \u0634\u0627\u064A"},{id:"chat",x:vt[0],z:vt[1],r:2.2,label:"\u{1F5E3}\uFE0F \u0633\u0648\u0644\u0641 \u0648\u064A\u0627\u0647\u0645"},{id:"bell",x:e+(Jt[0]-e)*.84,z:n+(Jt[1]-n)*.84,r:2.2,label:"\u{1F514} \u062F\u0643 \u0627\u0644\u062C\u0631\u0633"},{id:"scope",x:e+s+3.1,z:n,r:1.8,label:"\u{1F52D} \u0628\u0627\u0648\u0639 \u0628\u0627\u0644\u062A\u0644\u0633\u0643\u0648\u0628"},{id:"fountain",x:e,z:n,r:3.4,label:"\u{1FA99} \u0627\u0631\u0645\u0650 \u0639\u0645\u0644\u0629 \u0628\u0627\u0644\u0646\u0627\u0641\u0648\u0631\u0629"}]},ee=[];ee.push({x:e,z:n,r:2.6,tall:1});for(let K of[-1.1,0,1.1])ee.push({x:Ct+Math.cos(gt*bn+Math.PI/2)*K,z:rt+Math.sin(gt*bn+Math.PI/2)*K,r:1.05});{let K=-Math.sin(118*bn),ht=Math.cos(118*bn);ee.push({x:Jt[0]+K*.9,z:Jt[1]+ht*.9,r:.25},{x:Jt[0]-K*.9,z:Jt[1]-ht*.9,r:.25})}ee.push({x:jt[0],z:jt[1],r:.3});for(let K of ce.beds){let[ht,Y]=mt(K,11);ee.push({x:ht,z:Y,r:.75})}for(let K of ce.benches){let[ht,Y]=mt(K,6.6),Qt=-Math.sin(K*bn),Rt=Math.cos(K*bn);ee.push({x:ht,z:Y,r:.75},{x:ht+Qt*.8,z:Y+Rt*.8,r:.5},{x:ht-Qt*.8,z:Y-Rt*.8,r:.5})}for(let K of ce.guests){let[ht,Y]=mt(K.a,K.r);ee.push({x:ht,z:Y,r:.42})}for(let K of ce.pines){let[ht,Y]=mt(K,11.6);ee.push({x:ht,z:Y,r:.5,tall:1})}for(let K=0;K<64;K++){let ht=K/64*_e;Math.abs(Jn(ht,J))<.2||Math.abs(Jn(ht,o))<.22||ee.push({x:e+Math.cos(ht)*(s-.1),z:n+Math.sin(ht)*(s-.1),r:.55,wall:1})}let de=[];for(let K of it)if(K.kind==="ledge"&&K.k%2===0){let ht=K.seg.pts[Math.min(K.k+1,K.seg.pts.length-1)],Y=K.seg.pts[Math.max(K.k-1,0)],Qt=ht.x-Y.x,Rt=ht.z-Y.z,Ut=Math.hypot(Qt,Rt)||1,F=-Rt/Ut,v=Qt/Ut;l(K.x+F,K.z+v)>l(K.x,K.z)&&(F=-F,v=-v);let st=.9+cn(K.k,1)*.8;de.push({p:K,nx:F,nz:v,sz:st}),ee.push({x:K.x+F*(K.hw+st),z:K.z+v*(K.hw+st),r:st*.8,tall:1})}for(let K of Et)ee.push({x:K.x,z:K.z,r:.9});let Z=h[2],Le=(K,ht)=>{let Y=l(K,ht),Qt=(c(K,ht)/bn+360)%360;return Y>66&&Y<122&&Qt>203&&Qt<293};return{id:i.id||"M1",x:e,z:n,RP:s,HS:r,DECK_A:o,ENTRY_A:J,rad:l,ang:c,P2:a,prof:u,gullies:h,stream:Z,Hbase:f,Hnat:d,H:Ft,segs:m,ALL:it,A:p,C2:D,MAZ:T,entrySeg:q,exitSeg:U,cellP:E,key:_,nearest:pt,bridges:O,stones:z,rest:Ht,signs:wt,logs:Et,coins:Lt,beasts:ue,plaza:ce,coll:ee,ledgeRocks:de,inMaze:Le,foot:200}}function c_(i){let t=i.x,e=i.z||0,n=i.floor??-35,s=120,r=11,o=m=>2.6*Math.sin(m*.055+.6)+1.5*Math.sin(m*.13+2.1)-.6,a=[[17,1],[45,-1],[76,1],[103,-1]].map(([m,w])=>({x:m,z:Ie(o(m)+w*6.4,-8.2,8.2),side:w,rot:w>0?Math.PI:0,base:0}));function l(m,w){let p=Math.abs(w),g=(Yn(m*.09+3.1,w*.09)-.5)*.55,b=w-o(Ie(m,-10,s+10));g-=Math.exp(-(b*b)/1.3)*.75*Se(-12,-2,m);let E=Ie((p-(r-1))/21,0,1);if(g+=21*E*E+Se(30,50,p)*7,g+=(Yn(m*.07+(w>0?9:2),p*.09)-.5)*5*Se(r+1,r+9,p),m<2&&(g=Math.max(g,21*Math.pow(Ie((2-m)/62,0,1),.9))),m>s-2){let A=(m-s+2)/30;g+=20*Math.min(1,A)**2+Se(1,2.5,A)*6}return g+=Se(46,70,p)*45+Se(-62,-90,m)*45+Se(s+35,s+70,m)*45,g}for(let m of a)m.base=l(m.x,m.z)+.05;let c=(m,w)=>[m-t,w-e];function u(m,w){let p=m-t,g=w-e;if(p<-95||p>s+75||Math.abs(g)>72)return 1/0;let b=l(p,g);for(let E of a){let A=p-E.x,I=g-E.z;A*A+I*I<49&&(b=en(b,E.base,Se(7,4.5,Math.hypot(A,I))))}return n+b}let h=m=>n+l(m,o(m))+.42,f=(m,w)=>m>1.5&&m<s-1.5&&Math.abs(w)<r-1.2,d=[{id:"valley",x:t+4,z:e+o(4)+3.2,y:n+l(4,o(4)+3.2),name:"\u0645\u062F\u062E\u0644 \u0627\u0644\u0648\u0627\u062F\u064A",face:0,flag:!1}];for(let m of d)m.y=u(m.x,m.z);return{id:i.id||"V1",x:t,z:e,VF:n,VL:s,FLOOR:r,riverZ:o,CAMPS:a,H0:l,Hv:u,toL:c,waterLevel:h,onFloor:f,rest:d}}var Eh={id:"natta-1",name:"\u062C\u0628\u0644 \u0627\u0644\u063A\u0627\u0628\u0629 \u0648\u0648\u0627\u062F\u064A \u0627\u0644\u063A\u0632\u0644\u0627\u0646",half:500,seed:9091,features:[{type:"mountain",id:"M1",x:0,z:0},{type:"valley",id:"V1",x:258,z:0,floor:-35}],spawn:"cp0"};function jd(i=Eh){let t=mn(i.seed||1),e=i.half||500,n=l_(i.features.find(_=>_.type==="mountain"),t),s=c_(i.features.find(_=>_.type==="valley")),r=(_,R)=>{let T=Math.max(Math.abs(_),Math.abs(R))+(Yn(_*.008+1,R*.008+5)-.5)*70,B=_-s.x,q=Se(140,70,Math.max(Math.abs(R-s.z),B<0?-B:B>s.VL?B-s.VL:0)),U=-14+((Yn(_*.006+7,R*.006)-.5)*16+(Yn(_*.025,R*.025+3)-.5)*2.5)*(1-q*.85);return U+=Math.pow(Se(395,492,T),1.6)*85+(Yn(_*.03,R*.03)-.5)*14*Se(400,470,T),U};function o(_,R){let T=n.rad(_,R),B=T<245?T>200?en(n.H(_,R),r(_,R),Se(200,245,T)):n.H(_,R):r(_,R),q=s.Hv(_,R);return q<B&&(B=q),B}let a=(_,R)=>Math.hypot(o(_+.4,R)-o(_-.4,R),o(_,R+.4)-o(_,R-.4))/.8,l=Ah(4),c=[],u=_=>(c.push(_),l.add(_),_);for(let _ of n.coll)u(_);let h={pineA:[],pineB:[],oak:[],hedge:[],bush:[],rock:[],palm:[[],[],[]],fruit:[[],[],[]],boulder:[],vbush:[],vrock:[],rim:[]},f=(_,R,T)=>{if(n.rad(_,R)<n.RP+3)return!1;let B=n.nearest(_,R,null,2);if(B&&B.d<B.p.hw+T)return!1;for(let q of n.rest)if(Math.hypot(_-q.x,R-q.z)<4.6)return!1;return!0};for(let _=-195;_<=195;_+=2.3)for(let R=-195;R<=195;R+=2.3){let T=n.x+_,B=n.z+R;if(Math.hypot(_,R)>192)continue;let U=T+(t()-.5)*2,$=B+(t()-.5)*2;if(n.inMaze(U,$))continue;let D=n.nearest(U,$,null,6),O=D?D.d:99;if(O>26&&t()<.5||!f(U,$,1.05))continue;let z=o(U,$),it=t(),nt=.8+t()*.55;if(z>84){t()<.3&&f(U,$,.4)?h.rock.push({x:U,y:z+.05,z:$,rx:t()*3,ry:t()*3,rz:t()*3,s3:[.8+t()*1.4,.5+t()*.8,.8+t()*1.4]}):t()<.35&&h.bush.push({x:U,y:z,z:$,ry:t()*_e,s:.5+t()*.6});continue}if(z>72){if(t()<.45)continue;nt*=en(1,.6,Se(72,84,z))}if(Math.abs(Jn(n.ang(U,$),n.DECK_A))<.55&&z+9*nt>n.HS-7)continue;z>48&&(it*=.86);let pt={x:U,y:z-.15,z:$,ry:t()*_e,s:nt};if(it<.46?h.pineA.push(pt):it<.82?h.pineB.push(pt):h.oak.push({...pt,s:nt*.95}),u({x:U,z:$,r:.42*nt,tall:1,tree:1}),O<9&&t()<.5){let Ft=U+(t()-.5)*1.6,Ht=$+(t()-.5)*1.6;f(Ft,Ht,.25)&&h.bush.push({x:Ft,y:o(Ft,Ht),z:Ht,ry:t()*_e,s:.5+t()*.7})}}for(let _=-125;_<=125;_+=1.25)for(let R=-125;R<=125;R+=1.25){let T=n.x+_+(t()-.5)*.4,B=n.z+R+(t()-.5)*.4;if(!n.inMaze(T,B)||!f(T,B,.75))continue;let q=o(T,B);if(h.hedge.push({x:T,y:q-.1,z:B,ry:t()*_e,s:.95+t()*.45}),u({x:T,z:B,r:.62,hedge:1}),t()<.16&&f(T,B,2.2)){let U={x:T,y:q-.15,z:B,ry:t()*_e,s:.85+t()*.4};(t()<.5?h.pineA:h.oak).push(U)}}for(let _=-e+10;_<=e-10;_+=6)for(let R=-e+10;R<=e-10;R+=6){let T=_+(t()-.5)*5,B=R+(t()-.5)*5;if(n.rad(T,B)<205)continue;let q=T-s.x,U=B-s.z;if(q>-100&&q<s.VL+70&&Math.abs(U)<60)continue;let $=pn(T*.012+4,B*.012),D=Math.max(Math.abs(T),Math.abs(B));if(D>470)continue;let O=$>.62?.75:D>400?.25:.05;if(t()>O){t()<.03&&h.rock.push({x:T,y:o(T,B)+.05,z:B,rx:t()*3,ry:t()*3,rz:t()*3,s3:[.7+t()*1.6,.4+t()*.9,.7+t()*1.6]});continue}if(a(T,B)>.8)continue;let z=.8+t()*.6,it={x:T,y:o(T,B)-.15,z:B,ry:t()*_e,s:z};(D>400?t()<.6?h.pineB:h.pineA:t()<.55?h.oak:h.pineA).push(it),u({x:T,z:B,r:.42*z,tall:1,tree:1})}{let _=mn(20261123),R=(D,O)=>[s.x+D,s.z+O],T=(D,O,z)=>s.CAMPS.some(it=>Math.hypot(D-it.x,O-it.z)<z),B=(D,O,z)=>Math.abs(O-s.riverZ(D))<1.7+z||T(D,O,6.8+z),q=(D=0,O=s.FLOOR-.6,z=-1,it=s.VL+1)=>({x:z+_()*(it-z),z:(_()<.5?-1:1)*(D+_()*(O-D))}),U=(D,O)=>a(s.x+D,s.z+O),$=[];for(let D of[-1,1])for(let O=-2;O<s.VL+2;O+=5+_()*5){let z=s.riverZ(O)+D*(2.3+_()*1.8);!T(O,z,7.5)&&Math.abs(z)<s.FLOOR&&$.push({x:O,z})}for(let D=0;D<16;D++){let O=q(2,s.FLOOR-1);B(O.x,O.z,.6)||$.push(O)}$.forEach((D,O)=>{let[z,it]=R(D.x,D.z);u({x:z,z:it,r:.38,tall:1,tree:1}),h.palm[O%3].push({x:z,y:o(z,it)-.05,z:it,ry:_()*_e,s:.85+_()*.4})});for(let D=0;D<3;D++)for(let O=0,z=0;z<9&&O<400;O++){let it=q(1.5,s.FLOOR-.5),[nt,pt]=R(it.x,it.z);B(it.x,it.z,1.4)||l.each(nt,pt,1,Ft=>Math.hypot(Ft.x-nt,Ft.z-pt)<3)||(u({x:nt,z:pt,r:.35,tall:1,tree:1}),h.fruit[D].push({x:nt,y:o(nt,pt)-.05,z:pt,ry:_()*_e,s:.75+_()*.45}),z++)}for(let D=0;h.vbush.length<130&&D<3e3;D++){let O=q(0,s.FLOOR+4);if(B(O.x,O.z,.5)||U(O.x,O.z)>.7)continue;let[z,it]=R(O.x,O.z);h.vbush.push({x:z,y:o(z,it),z:it,ry:_()*_e,s:.5+_()*.8})}for(let D=0;h.vrock.length<90&&D<2e3;D++){let O=q(0,s.FLOOR);if(T(O.x,O.z,6)||Math.abs(O.z-s.riverZ(O.x))<1.1)continue;let z=.35+_()*.8,[it,nt]=R(O.x,O.z);z>.8&&u({x:it,z:nt,r:.3*z}),h.vrock.push({x:it,y:o(it,nt)+.04,z:nt,rx:_()*3,ry:_()*3,rz:_()*3,s3:[z,z*(.6+_()*.4),z*(.8+_()*.4)]})}for(let D=0;D<230;D++){let O=-14+_()*(s.VL+30),z=s.FLOOR+1+_()*26,it=(_()<.5?-1:1)*z,nt=.8+_()*3.2,[pt,Ft]=R(O,it);h.boulder.push({x:pt,y:o(pt,Ft)-nt*.42,z:Ft,rx:_()*3,ry:_()*3,rz:_()*3,s3:[nt,nt*(.5+_()*.4),nt*(.8+_()*.5)]})}for(let D=0;D<26;D++){let O=q(s.FLOOR-3,s.FLOOR+1);if(T(O.x,O.z,7))continue;let z=1.3+_()*1.6,[it,nt]=R(O.x,O.z);u({x:it,z:nt,r:.45*z}),h.boulder.push({x:it,y:o(it,nt)-.15,z:nt,rx:_()*3,ry:_()*3,rz:_()*3,s3:[z,z*.7,z]})}for(let D=0;D<140;D++){let O=-40+_()*(s.VL+80),z=26+_()*40,it=(_()<.5?-1:1)*z;if(pn(O*.06,it*.06)<.4)continue;let[nt,pt]=R(O,it);h.rim.push({x:nt,y:o(nt,pt)-.2,z:pt,ry:_()*_e,s:1+_()*1.3})}}let d=new Map;for(let _ of c)if(_.tree){let R=bo(Math.floor(_.x/6),Math.floor(_.z/6));d.set(R,(d.get(R)||0)+1)}let m=(_,R)=>(d.get(bo(Math.floor(_/6),Math.floor(R/6)))||0)/7,w=Ah(4);for(let _ of n.bridges)for(let R=_.i;R<=_.j;R++)w.add(_.seg.pts[R]);function p(_,R){let T=null,B=1/0;if(w.each(_,R,1,Ft=>{let Ht=(Ft.x-_)**2+(Ft.z-R)**2;Ht<B&&(B=Ht,T=Ft)}),!T||B>2.5)return null;let q=T.seg.pts,U=q[Math.min(T.k+1,q.length-1)],$=q[Math.max(T.k-1,0)],D=U.x-$.x,O=U.z-$.z,z=Math.hypot(D,O)||1;D/=z,O/=z;let it=(_-T.x)*D+(R-T.z)*O,nt=Math.abs((_-T.x)*-O+(R-T.z)*D);if(nt>T.hw+.05)return{off:!0,p:T,tx:D,tz:O,lat:nt};let pt=q[Ie(T.k+(it>0?1:-1),0,q.length-1)];return pt.kind!=="bridge"&&Math.abs(it)>.35?null:T.gap&&Math.abs(it)<.32?{hole:!0,p:T,tx:D,tz:O,lat:nt}:{y:en(T.y,pt.y,Ie(Math.abs(it)/.8,0,1)),p:T,tx:D,tz:O,lat:nt}}let g={x0:n.x+n.RP-1,x1:n.x+n.RP+4.35,z0:n.z-1.65,z1:n.z+1.65,y:n.HS+.09};function b(_,R,T,B){let q=o(_,R),U=null,$=null,D=T==null?1/0:T+.7;if(T!=null&&n.rad(_,R)<200){let z=n.nearest(_,R,T,1);z&&z.d<=z.p.hw+.25&&z.p.kind!=="bridge"&&z.p.kind!=="stones"&&z.y-.04<=D&&Math.abs(z.y-.04-q)<7&&(q=z.y-.04,U="path")}let O=p(_,R);O&&O.y!=null&&O.y<=D&&O.y>q-.01&&(q=O.y,U="bridge",$=O);for(let z of n.stones)Math.hypot(_-z.x,R-z.z)<z.r+(B?.5:0)&&z.y<=D&&z.y>q&&(q=z.y,U="stone",$=z);return _>g.x0&&_<g.x1&&R>g.z0&&R<g.z1&&g.y<=D&&g.y>=q-.2&&(q=g.y,U="deck"),{y:q,kind:U,plat:$,b:O}}function E(_,R,T){let B=n.rad(_,R);if(B<n.RP+.5&&Math.abs(T-n.HS)<.6)return"plaza";if(B<200){let $=n.nearest(_,R,T,1);if($&&$.d<$.p.hw)return $.p.kind==="stones"?"trail":$.p.kind}let[q,U]=s.toL(_,R);return q>-2&&q<s.VL+2&&Math.abs(U)<s.FLOOR+1?"grass":a(_,R)>.85?"rock":m(_,R)>.55?"forest":"grass"}function A(_,R,T){let[B,q]=s.toL(_,R);if(B>-6&&B<s.VL+6&&Math.abs(q-s.riverZ(B))<.95){let D=s.waterLevel(B);if(T<D+.3)return{kind:"river",level:D}}let U=n.stream,$=n.rad(_,R);if($>U.r0+1&&$<U.r1-1&&Math.abs(Jn(U.a,n.ang(_,R)))*$<2.1){let O=n.Hnat(_,R)+.5;if(T<O+.25)return{kind:"torrent",level:O,dx:Math.cos(U.a),dz:Math.sin(U.a)}}return null}function I(_,R,T,B){for(let q=0;q<2;q++)l.each(_,R,1,U=>{if(B&&!B(U))return;let $=_-U.x,D=R-U.z,O=T+U.r,z=$*$+D*D;if(z<O*O&&z>1e-8){let it=Math.sqrt(z),nt=(O-it)/it;_+=$*nt,R+=D*nt}});return[Ie(_,-e+3,e-3),Ie(R,-e+3,e-3)]}let C=(_,R,T)=>l.each(_,R,1,B=>B.tall&&T(B)),y=[...n.rest,...s.rest];return{map:i,HALF:e,M:n,V:s,H:o,slope:a,plains:r,surfaceAt:b,groundKind:E,water:A,collide:I,colliders:c,addColl:u,removeColl:_=>{l.remove(_);let R=c.indexOf(_);R>=0&&c.splice(R,1)},tallNear:C,cgrid:l,veg:h,forestAt:m,restPoints:y,bridgeAt:p,deck:g}}var h_=14,tf=1,ef=1.15;function nf(i,t={}){let e=i.M,n=i.V,s=[],r=1,o={t:0,hero:null,rest:null,reached:new Set,coins:[],coinsGot:0,climb:{done:!1,time:0},summit:null,scope:!1,wind:0,vq:{camp:null,merW:{x:0,z:0},zoneW:{x:0,z:0},penW:{x:0,z:0},met:!1,called:!1,caught:!1,delivered:!1},carry:null,focus:null,seed:1},a=[],l=(...S)=>a.push(S.length===1?S[0]:S);function c(S,M,j,J={}){let wt={id:r++,kind:S,x:M,z:j,y:i.H(M,j),vx:0,vy:0,vz:0,face:0,air:!1,peak:0,r:.4,speed:0,run:!1,hopPh:0,landT:0,stun:0,rot:0,surf:null,...J};return s.push(wt),wt}let u=e.beasts.map(S=>c(S.kind,S.home.x+(S.ox||0),S.home.z,{home:S.home,r:S.kind==="boar"?.45:.38,state:"idle",t:Math.random()*2,cool:0,tx:S.home.x,tz:S.home.z,charge:null,ph:0,face:Math.random()*_e})),h=c("gazelle",n.x+60,n.z,{r:.42,state:"graze",t:0,gt:2.5,sus:0,stamina:4,ph:0,triedLeap:!1,tx:0,tz:0,fx:1,fz:0,stuck:0,hy:0}),f=c("merchant",n.x+20,n.z,{r:.42});function d(S,M,j,J,wt,Et={}){let Lt=S.air?3:10,he=S.air?Math.max(J,S.airSpd||0):J,$t=Et.pushX||0,Kt=Et.pushZ||0;S.vx=He(S.vx,M*he+$t,Lt,wt),S.vz=He(S.vz,j*he+Kt,Lt,wt);let ue=S.x,mt=S.z,gt=S.x+S.vx*wt,Ct=S.z+S.vz*wt;if([gt,Ct]=i.collide(gt,Ct,S.r,Et.collFilter),S.air){S.vy-=h_*wt;let rt=S.y+S.vy*wt,vt=i.surfaceAt(gt,Ct,Math.max(S.y,rt)+.05,!0);if(vt.y>S.y+.45&&(gt=S.x,Ct=S.z,S.vx*=-.15,S.vz*=-.15,vt=i.surfaceAt(gt,Ct,S.y+.05,!0)),rt<=vt.y&&S.vy<=0){let Jt=(S.peak||S.y)-vt.y;if(S.x=gt,S.z=Ct,S.y=vt.y,S.air=!1,S.vy=0,S.landT=.25,S.surf=vt.kind,S.plat=vt.plat,vt.kind==="stone"&&vt.plat){let jt=Math.hypot(S.x-vt.plat.x,S.z-vt.plat.z),ce=.35;jt>ce&&(S.x=vt.plat.x+(S.x-vt.plat.x)/jt*ce,S.z=vt.plat.z+(S.z-vt.plat.z)/jt*ce),S.vx*=.2,S.vz*=.2}S.onLand&&S.onLand(Jt,vt)}else S.x=gt,S.z=Ct,S.y=rt,S.peak=Math.max(S.peak||rt,rt)}else{if(S.surf==="bridge"){let ee=i.bridgeAt(gt,Ct);if(ee&&ee.off){let de=gt-S.x,Z=Ct-S.z,Le=de*ee.tx+Z*ee.tz;gt=S.x+ee.tx*Le,Ct=S.z+ee.tz*Le}}else if(S.surf==="deck"){let ee=i.deck;Ct=Ie(Ct,ee.z0+.35,ee.z1-.35),gt=Math.min(gt,ee.x1-.35)}let rt=i.surfaceAt(gt,Ct,S.y+.4),vt=Math.hypot(gt-S.x,Ct-S.z),Jt=rt.y-S.y,jt=rt.kind==="path"?.75:.35;if(vt>1e-5&&Jt>jt&&Jt>vt*tf){let ee=(Z,Le)=>{let K=i.surfaceAt(Z,Le,S.y+.4),ht=Math.hypot(Z-S.x,Le-S.z),Y=K.y-S.y;return Y<=(K.kind==="path"?.75:.35)||Y<=ht*tf?[Z,Le,K]:null},de=ee(gt,S.z)||ee(S.x,Ct);de?(gt=de[0],Ct=de[1],rt=de[2]):(gt=S.x,Ct=S.z,rt=i.surfaceAt(gt,Ct,S.y),S.vx*=.3,S.vz*=.3)}let ce=Math.hypot(gt-S.x,Ct-S.z);if(rt.y<S.y-Math.max(.45,ce*1.45)?Et.cautious?(gt=S.x,Ct=S.z,S.vx=S.vz=0,rt=i.surfaceAt(gt,Ct,S.y),S.y=rt.y):(S.air=!0,S.vy=Math.min(0,S.vy),S.peak=S.y,S.x=gt,S.z=Ct):(S.x=gt,S.z=Ct,S.y=rt.y,S.surf=rt.kind,S.plat=rt.plat),!S.air&&!S.surf&&!Et.noSlide){let ee=i.H(S.x+.4,S.z)-i.H(S.x-.4,S.z),de=i.H(S.x,S.z+.4)-i.H(S.x,S.z-.4),Z=Math.hypot(ee,de)/.8;if(Z>ef){let Le=(Z-ef)*9*wt;S.vx-=ee/.8*Le,S.vz-=de/.8*Le}}}S.speed=Math.hypot(S.x-ue,S.z-mt)/wt}function m(S,M){let j=c("hero",M.x,M.z,{skin:S,hp:100,maxHp:100,lastHurt:-99,mode:"walk",chute:0,airSpd:0,water:null,inTorrent:0,faintT:0,face:M.face||0});return j.y=M.y!=null?M.y:i.H(M.x,M.z),j.onLand=(J,wt)=>{l(wt.kind==="stone"?"landStone":"land"),J>4.2&&w(j,Math.round((J-4.2)*14),"fall")},j}function w(S,M,j){S.kind!=="hero"||S.mode!=="walk"||M<=0||(S.hp=Math.max(0,S.hp-M),S.lastHurt=o.t,l(["hurt",M,j,S.hp]),S.hp<=0&&(S.mode="faint",S.faintT=0,S.vx=S.vz=0,l(["faint",j])))}function p(S,M){let j=o.rest||i.restPoints[0];if(Object.assign(S,{x:j.x,z:j.z,y:i.H(j.x,j.z),vx:0,vy:0,vz:0,air:!1,stun:0,rot:0,mode:"walk",face:j.face||0,inTorrent:0,surf:null}),j.plaza&&(S.y=e.HS),M==="faint"){S.hp=S.maxHp;let J=Math.ceil(o.coinsGot*.2);o.coinsGot-=J,l(["respawn",j.name,J])}else l(["respawn",j.name,0]);o.focus=null}function g(S,M,j){if(S.mode==="faint"){S.faintT+=j,S.faintT>1.6&&p(S,"faint");return}if(S.mode!=="walk")return b(S,M,j);if(o.scope){S.vx=S.vz=0,S.speed=0;return}let J=Ie(M.mag||0,0,1);S.stun>0&&(S.stun-=j,J=0);let wt=J>.62&&!M.sneak,Et=J<.08?0:wt?5.6:2.3*Ie(J/.62,.4,1),Lt=i.water(S.x,S.z,S.y);S.water=Lt?Lt.kind:null;let he=S.air?null:S.surf&&S.surf!=="path"?S.surf:i.groundKind(S.x,S.z,S.y);he==="forest"?Et*=.78:he==="rock"&&(Et*=.85),Lt&&Lt.kind==="river"&&(Et*=.6);let $t=0,Kt=0;if(o.summit&&o.summit.wind>0&&($t=o.summit.wind*1.6,Kt=o.summit.wind*.48),Lt&&Lt.kind==="torrent"&&!S.air){if($t+=Lt.dx*3.4,Kt+=Lt.dz*3.4,S.inTorrent+=j,S.inTorrent>.9){l("swept"),w(S,12,"water"),S.mode==="walk"&&p(S,"swept");return}}else S.inTorrent=0;if(M.jump&&!S.air&&S.stun<=0){S.air=!0,S.vy=6,S.peak=S.y,l("jump");let rt=Math.hypot(S.vx,S.vz);rt>.4&&rt<3.4&&(S.vx*=3.4/rt,S.vz*=3.4/rt),S.airSpd=J>.08?Math.max(3.4,rt):0}let ue=Math.hypot(M.mx||0,M.mz||0),mt=ue>1e-4?M.mx/ue:0,gt=ue>1e-4?M.mz/ue:0;d(S,mt,gt,Et,j,{pushX:$t,pushZ:Kt}),S.run=wt&&S.speed>3,S.speed>.3&&!S.air?S.face=gn(S.face,Math.atan2(S.vz-Kt,S.vx-$t),12,j):S.air&&Math.hypot(S.vx,S.vz)>.5&&(S.face=gn(S.face,Math.atan2(S.vz,S.vx),8,j)),S.air&&S.vy<-7?S.rot+=j*5:S.air||(S.rot*=Math.pow(.001,j));let Ct=S.hopPh;S.hopPh=S.speed<.3||S.air?0:S.hopPh+S.speed*j*2.1,S.hopPh&&Math.floor(Ct/Math.PI)!==Math.floor(S.hopPh/Math.PI)&&l(S.water?"splash":["step",S.run,he]),S.landT=Math.max(0,S.landT-j),o.t-S.lastHurt>6&&S.hp<S.maxHp&&(S.hp=Math.min(S.maxHp,S.hp+j*3));for(let rt of i.restPoints)(!rt.dyn||rt.on)&&Math.hypot(S.x-rt.x,S.z-rt.z)<(rt.plaza?e.RP-1:3.2)&&Math.abs(S.y-(rt.plaza?e.HS:rt.y))<2.5&&o.rest!==rt&&(o.rest=rt,o.reached.has(rt.id)||(o.reached.add(rt.id),(rt.flag||rt.id==="valley")&&l(["rest",rt.name,rt.id])));for(let rt of o.coins)!rt.taken&&Math.abs(rt.x-S.x)<1.25&&Math.abs(rt.z-S.z)<1.25&&Math.hypot(rt.x-S.x,rt.z-S.z)<1&&Math.abs(rt.y-(S.y+.6))<1.2&&(rt.taken=!0,o.coinsGot++,l(["coin",rt]));!o.summit&&e.rad(S.x,S.z)<e.RP-1&&Math.abs(S.y-e.HS)<1&&!o.carry&&(o.summit={t:0,phase:"wait",wind:0},o.climb.done?l(["summit",0,!1]):(o.climb.done=!0,o.climb.time=o.t-(o.climb.t0||0),l(["summit",o.climb.time,!0]))),o.summit&&o.summit.phase==="wait"&&e.rad(S.x,S.z)>e.RP+8&&(o.summit=null)}function b(S,M,j){let J=o.carry;if(S.mode==="lift"){J.t+=j;let wt=J.t;S.x=J.from[0]+wt*wt*2.2,S.z=J.from[2]+wt*wt*.66,S.y=J.from[1]+wt*wt*3.2+Math.sin(wt*6)*.2,S.rot+=j*(4+wt*3),wt>2.6&&(S.mode="carry",J.t=0,J.p0=[S.x,S.y,S.z],l("carry"));return}if(S.mode==="carry"){J.t+=j;let wt=Ie(J.t/J.dur,0,1),Et=wt*wt*(3-2*wt),Lt=[J.p0,[e.x+80,e.HS+48,e.z+14],[n.x-50,n.VF+78,n.z],J.end],he=mt=>{let gt=1-Et;return gt*gt*gt*Lt[0][mt]+3*gt*gt*Et*Lt[1][mt]+3*gt*Et*Et*Lt[2][mt]+Et*Et*Et*Lt[3][mt]},$t=he(0),Kt=he(1),ue=he(2);S.face=Math.atan2(ue-S.z,$t-S.x),S.x=$t,S.y=Kt,S.z=ue,S.rot+=j*en(9,2,wt),o.wind=en(1,.25,wt),wt>=1&&(S.mode="glide",S.vy=-3,S.vx=S.vz=0,S.chute=0,l("chute"),E(S));return}if(S.mode==="glide"){S.chute=Math.min(1,S.chute+j*3),S.rot*=Math.pow(.015,j),S.vy+=(-3.2-S.vy)*Math.min(1,j*3);let wt=Ie(M.mag||0,0,1),Et=Math.hypot(M.mx||0,M.mz||0),Lt=Et>1e-4?M.mx/Et:0,he=Et>1e-4?M.mz/Et:0;S.vx=He(S.vx,Lt*4.6*wt,3,j),S.vz=He(S.vz,he*4.6*wt,3,j),S.x+=S.vx*j,S.z+=S.vz*j,S.y+=S.vy*j,[S.x,S.z]=i.collide(S.x,S.z,.4,Kt=>Kt.tall),wt>.1&&(S.face=gn(S.face,Math.atan2(he,Lt),5,j));for(let Kt of o.coins)!Kt.taken&&Math.hypot(Kt.x-S.x,Kt.z-S.z)<1.25&&Math.abs(Kt.y-(S.y+.55))<1.3&&(Kt.taken=!0,o.coinsGot++,l(["coin",Kt]));o.wind=Math.max(0,o.wind-j*.2);let $t=i.surfaceAt(S.x,S.z,S.y+.5);S.y<=$t.y&&(S.y=$t.y,S.vy=0,S.rot=0,S.chute=0,S.landT=.35,S.mode="walk",S.air=!1,S.surf=$t.kind,o.carry=null,o.drop={x:S.x+Math.cos(S.face)*1.2,z:S.z+Math.sin(S.face)*1.2,t:0,face:S.face},l(["landChute"]))}}function E(S){o.coins=o.coins.filter(M=>!M.sky);for(let M=0;M<20;M++){let j=M*.62;o.coins.push({x:S.x+Math.cos(j)*3.2,z:S.z+Math.sin(j)*3.2,y:S.y-4-M*1.55,sky:!0})}}function A(S){let M=o.summit;if(!(!M||o.carry)){if(M.t+=S,M.phase==="wait"&&M.t>=45&&(M.phase="wind",M.t=0,l("windStart")),M.phase==="wind"&&(M.wind=Ie(M.t/7,0,1),o.wind=M.wind,M.t>8.5)){let j=o.hero;o.scope=!1;let[J,wt]=I();o.carry={t:0,from:[j.x,j.y,j.z],dur:6.2,end:[n.x+J,n.VF+i.V.H0(J,wt)+34,n.z+wt]},j.mode="lift",j.air=!0,M.phase="lift",l("lift")}M.phase==="lift"&&!o.carry&&(o.summit=null)}}function I(){let S=mn(o.seed*7+13>>>0),M=(J,wt)=>!i.tallNear(n.x+J,n.z+wt,Et=>Math.hypot(Et.x-n.x-J,Et.z-n.z-wt)<4.5+Et.r),j=null;for(let J=0;J<80;J++){let wt=32+S()*56,Et=S()<.5?-1:1,Lt=Ie(n.riverZ(wt)+Et*(4.5+S()*3),-n.FLOOR+2.5,n.FLOOR-2.5);if(!(Math.hypot(wt-o.vq.camp.x,Lt-o.vq.camp.z)<16)){if(M(wt,Lt))return[wt,Lt];j||(j=[wt,Lt])}}return j||[60,n.riverZ(60)+5]}function C(){o.summit&&o.summit.phase==="wait"&&(o.summit.t=45)}function y(S){let M=o.hero,j=M.mode==="walk"&&!o.summit;for(let J of u){J.t+=S,J.cool=Math.max(0,J.cool-S);let wt=M.x-J.x,Et=M.z-J.z,Lt=Math.hypot(wt,Et),he=Math.abs(M.y-J.y);if(Lt>120&&J.state==="idle"){J.vx=J.vz=0,J.speed=0;continue}let $t=M.run?14:M.speed>.4?9:5.5,Kt=J.kind==="wolf",ue=(mt,gt,Ct)=>{let rt=mt-J.x,vt=gt-J.z,Jt=Math.hypot(rt,vt);return Jt<.05?(d(J,0,0,0,S,{cautious:!0}),Jt):(d(J,rt/Jt,vt/Jt,Ct,S,{cautious:!0,collFilter:jt=>!jt.hedge||!0}),J.speed>.2&&(J.face=gn(J.face,Math.atan2(J.vz,J.vx),8,S)),Jt)};switch(J.state){case"idle":if(j&&J.cool<=0&&Lt<$t&&he<3){J.state="notice",J.t=0,l([Kt?"growl":"grunt",J.kind]);break}if(J.t>3+Math.random()*3){J.t=0;let mt=Math.random()*_e;J.tx=J.home.x+Math.cos(mt)*5,J.tz=J.home.z+Math.sin(mt)*5}Math.hypot(J.tx-J.x,J.tz-J.z)>.6?ue(J.tx,J.tz,1):ue(J.x,J.z,0);break;case"notice":if(ue(J.x,J.z,0),J.face=gn(J.face,Math.atan2(Et,wt),10,S),!j){J.state="return";break}if(J.t>(Kt?.6:.9)){if(J.state=Kt?"chase":"charge",J.t=0,!Kt){let mt=Lt||1;J.charge=[wt/mt,Et/mt]}l([Kt?"howl":"grunt",J.kind])}break;case"chase":ue(M.x,M.z,4.7),(!j||Lt>22||J.t>7||Math.hypot(J.x-J.home.x,J.z-J.home.z)>32)&&(J.state="return",J.cool=3);break;case"charge":{let mt=J.x,gt=J.z;d(J,J.charge[0],J.charge[1],7.8,S,{cautious:!0}),J.face=Math.atan2(J.charge[1],J.charge[0]),(Math.hypot(J.x-mt,J.z-gt)<7.8*S*.3||J.t>1.8)&&(J.state=j&&Lt<12&&J.t<6?"notice":"return",J.t=0);break}case"return":(ue(J.home.x,J.home.z,2.2)<1||J.t>20)&&(J.state="idle",J.t=0);break}if(J.ph+=S*(J.state==="chase"||J.state==="charge"?16:J.speed>.3?8:0),(J.state==="chase"||J.state==="charge")&&Lt<.95&&he<1.2&&M.stun<=0&&j){let mt=Lt||1;M.vx=wt/mt*6,M.vz=Et/mt*6,M.stun=.9,M.landT=.3,J.state="return",J.cool=6;let gt=Kt?18:25;l(["bitten",J.kind,gt]),w(M,gt,J.kind)}}}let _=(S,M)=>[S-n.x,M-n.z],R={mer:[1.05,-.5],zone:[2.35,.35],pen:[-4.45,-1.75]},T=[[-1.1,-2.8,1.25],[0,-2.8,1.3],[1.1,-2.8,1.25],[-.78,-.8,.55],[4,-2.4,.62],[1.95,-1.8,.35],[-2.05,-1.6,.4],[1.68,-.25,.14],[-1.68,-.25,.14],[1.05,-.5,.42],[-5.8,-1,.3],[-5.8,-1.8,.3],[-5.8,-2.6,.3],[-5.1,-2.9,.3],[-4.45,-2.9,.3],[-3.8,-2.9,.3],[-3.1,-2.6,.3],[-3.1,-1.8,.3],[-3.1,-1,.3]],B=[],q={id:"camp",x:0,z:0,y:0,name:"\u062E\u064A\u0645\u0629 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",face:0,flag:!1,dyn:!0,on:!1};i.restPoints.push(q);function U(S,M,j){let J=Math.cos(S.rot),wt=Math.sin(S.rot);return{x:n.x+S.x+M*J+j*wt,z:n.z+S.z-M*wt+j*J}}function $(S){for(let j of B)i.removeColl(j);o.vq.camp=S,o.vq.merW=U(S,...R.mer),o.vq.zoneW=U(S,...R.zone),o.vq.penW=U(S,...R.pen),B=T.map(([j,J,wt])=>i.addColl({...U(S,j,J),r:wt})),Object.assign(f,{x:o.vq.merW.x,z:o.vq.merW.z,y:n.VF+S.base,face:S.rot});let M=U(S,0,3.2);Object.assign(q,{x:M.x,z:M.z,y:i.H(M.x,M.z),face:S.rot+Math.PI/2})}function D(S){S.state="flee",S.t=0,S.stuck=0;let M=o.hero,j=Math.hypot(S.x-M.x,S.z-M.z)||1;S.fx=(S.x-M.x)/j,S.fz=(S.z-M.z)/j,l("snort")}function O(S){let M=h,j=o.hero,J=o.vq;M.t+=S;let wt=j.x-M.x,Et=j.z-M.z,Lt=Math.hypot(wt,Et)||.001,he=Math.atan2(Et,wt);if(Lt>140&&!J.caught){M.vx=M.vz=0;return}let $t=j.mode==="walk"?j.speed:0,Kt=Math.hypot(M.vx,M.vz)>.2;if(M.ph+=S*(M.state==="flee"?15:Kt?8:0),M.state!=="flee"&&M.state!=="leap"&&(M.stamina=Math.min(4,M.stamina+S*(M.state==="tired"?.5:.8))),!J.caught&&["graze","look","walk","alert"].includes(M.state)){let rt=Lt<22?1+(1-Lt/22)*1.6:0,vt=M.state!=="graze",Jt=$t>4?vt?2.6:1.4:$t>.5?vt?1.1:.06:0;M.sus=Ie(M.sus+(Jt*rt>0?Jt*rt:-.3)*S,0,1)}let ue=(rt,vt)=>{let[Jt,jt]=_(rt,vt);return i.slope(rt,vt)<.7&&Jt>1&&Jt<n.VL-1&&Math.abs(jt)<n.FLOOR+1},mt=(rt,vt,Jt)=>{let jt=rt-M.x,ce=vt-M.z,ee=Math.hypot(jt,ce);if(ee<.05)return M.vx=M.vz=0,ee;M.vx=He(M.vx,jt/ee*Jt,6,S),M.vz=He(M.vz,ce/ee*Jt,6,S);let de=M.x+M.vx*S,Z=M.z+M.vz*S;return[de,Z]=i.collide(de,Z,.42),ue(de,Z)&&(M.x=de,M.z=Z),M.face=gn(M.face,Math.atan2(M.vz,M.vx),7,S),ee},[gt,Ct]=_(M.x,M.z);switch(M.state){case"graze":if(M.vx=M.vz=0,M.sus>.5)M.state="alert",M.t=0,l("snort");else if(M.t>M.gt)if(M.t=0,Math.random()<.72)M.state="look";else for(let rt=0;rt<12;rt++){let vt=gt+(Math.random()-.5)*14,Jt=Ct+(Math.random()-.5)*10;if(n.onFloor(vt,Jt)&&Math.abs(Jt-n.riverZ(vt))>1.6){M.tx=n.x+vt,M.tz=n.z+Jt,M.state="walk";break}}break;case"look":M.vx=M.vz=0,Lt<26&&(M.face=gn(M.face,he,4,S)),M.sus>.5?(M.state="alert",M.t=0,l("snort")):M.t>1.1&&(M.state="graze",M.t=0,M.gt=1.4+Math.random()*1.8);break;case"walk":if(M.sus>.5){M.state="alert",M.t=0,M.vx=M.vz=0,l("snort");break}(mt(M.tx,M.tz,1.1)<.4||M.t>6)&&(M.state="graze",M.t=0,M.vx=M.vz=0,M.gt=1.4+Math.random()*1.8);break;case"alert":M.vx=M.vz=0,M.face=gn(M.face,he,8,S),M.sus>=1||Lt<1.6?D(M):M.sus<.3&&(M.state="graze",M.t=0,M.gt=1.2+Math.random()*1.2);break;case"flee":{M.stamina-=S;let rt=8.2*(.55+.45*Math.max(0,M.stamina)/4),vt=-wt/Lt,Jt=-Et/Lt;Math.abs(Ct)>5.5&&(Jt-=Math.sign(Ct)*(Math.abs(Ct)-5.5)*.45),gt<8&&(vt+=(8-gt)*.35),gt>n.VL-8&&(vt-=(gt-n.VL+8)*.35);let jt=Math.hypot(vt,Jt)||1;M.fx=He(M.fx,vt/jt,5,S),M.fz=He(M.fz,Jt/jt,5,S);let ce=Math.hypot(M.fx,M.fz)||1,ee=M.fx/ce,de=M.fz/ce,Z=M.x+ee*rt*S,Le=M.z+de*rt*S;[Z,Le]=i.collide(Z,Le,.42);let K=Math.hypot(Z-M.x,Le-M.z);ue(Z,Le)&&(M.vx=(Z-M.x)/S,M.vz=(Le-M.z)/S,M.x=Z,M.z=Le),M.stuck=K<rt*S*.35?M.stuck+S:0,M.face=gn(M.face,Math.atan2(de,ee),10,S),M.stuck>.35&&Lt<10?(M.state="cornered",M.t=0,M.vx=M.vz=0):M.stamina<=0?(M.state="tired",M.t=0,l("tired")):Lt>32&&M.t>1.5&&(M.state="graze",M.t=0,M.vx=M.vz=0,M.sus=.35,M.gt=1.5);break}case"tired":Lt<9?mt(M.x-wt/Lt*2,M.z-Et/Lt*2,2.3):M.vx=M.vz=0,M.stamina>3.2&&M.t>2.2&&(M.sus=.45,Lt<6?D(M):(M.state="graze",M.t=0));break;case"cornered":if(M.vx=M.vz=0,M.face=gn(M.face,he,8,S),!M.triedLeap&&Lt<4&&M.t>.4){let rt=j.x+wt/Lt*4.5,vt=j.z+Et/Lt*4.5,[Jt,jt]=_(rt,vt);n.onFloor(Jt,jt)||(rt=j.x+wt/Lt*3,vt=n.z+Ie(_(0,j.z+Et/Lt*3)[1],-(n.FLOOR-2),n.FLOOR-2)),Object.assign(M,{triedLeap:!0,state:"leap",t:0,from:[M.x,M.z],to:[rt,vt]}),l("snort")}else M.t>4&&Lt>9&&(M.state="graze",M.t=0,M.sus=.4);break;case"leap":{let rt=Math.min(1,M.t/.75);M.x=en(M.from[0],M.to[0],rt),M.z=en(M.from[1],M.to[1],rt),M.hy=Math.sin(rt*Math.PI)*1.5,M.vx=(M.to[0]-M.from[0])/.75,M.vz=(M.to[1]-M.from[1])/.75,M.face=Math.atan2(M.vz,M.vx),rt>=1&&(M.hy=0,D(M));break}case"follow":{let rt=j.x-Math.cos(j.face)*1.45,vt=j.z-Math.sin(j.face)*1.45,Jt=Math.hypot(rt-M.x,vt-M.z);if(Jt>12)M.x=rt,M.z=vt;else if(Jt>.08){M.vx=He(M.vx,(rt-M.x)/Jt*Math.min(7,Jt*3.2),6,S),M.vz=He(M.vz,(vt-M.z)/Jt*Math.min(7,Jt*3.2),6,S);let jt=M.x+M.vx*S,ce=M.z+M.vz*S;[jt,ce]=i.collide(jt,ce,.42),M.x=jt,M.z=ce,M.face=gn(M.face,Math.atan2(M.vz,M.vx),7,S)}else M.vx=M.vz=0;break}case"pen":{let rt=J.penW,vt=Math.hypot(rt.x-M.x,rt.z-M.z);vt>.3?(M.vx=(rt.x-M.x)/vt*1.3,M.vz=(rt.z-M.z)/vt*1.3,M.x+=M.vx*S,M.z+=M.vz*S,M.face=gn(M.face,Math.atan2(M.vz,M.vx),6,S)):M.vx=M.vz=0;break}}M.y=i.H(M.x,M.z)+(M.hy||0),!J.caught&&j.mode==="walk"&&["graze","look","walk","alert","tired","cornered"].includes(M.state)&&Lt<1.2&&(M.hy||0)<.25&&Math.abs(j.y-M.y)<1.5&&(J.caught=!0,M.state="follow",M.vx=M.vz=0,M.sus=0,o.focus={t:2.2,dist:5.2,yaw:Math.atan2(M.z-j.z,M.x-j.x)-Math.PI/2},l("catch"))}function z(S){let M=o.hero,j=o.vq;if(M.mode!=="walk")return;let J=Math.hypot(M.x-j.merW.x,M.z-j.merW.z),wt=j.camp,Et=Math.atan2(-Math.cos(wt.rot),-Math.sin(wt.rot));!j.called&&J<24&&Math.abs(M.y-f.y)<8&&(j.called=!0,l("call")),!j.met&&J<4.2&&(j.met=!0,q.on=!0,o.focus={t:3.4,dist:6.2,x:(M.x+j.merW.x)/2,z:(M.z+j.merW.z)/2,yaw:Et,talk:!0},l("meet")),j.caught&&!j.delivered&&Math.hypot(M.x-j.zoneW.x,M.z-j.zoneW.z)<1.7&&(j.delivered=!0,h.state="pen",o.focus={t:4.6,dist:6.6,x:(M.x+j.merW.x)/2,z:(M.z+j.merW.z)/2,yaw:Et,talk:!0},l("deliver"))}function it(S,M={}){o.seed=(M.seed!=null?M.seed:Math.random()*4294967295)>>>0;let j=mn(o.seed);s.length=0,s.push(...u,h,f);for(let he of u)Object.assign(he,{x:he.home.x,z:he.home.z,y:he.home.y,vx:0,vz:0,vy:0,air:!1,state:"idle",cool:0,t:Math.random()*2});$(n.CAMPS[Math.floor(j()*n.CAMPS.length)]);let J=60,wt=0;for(let he=0;he<400;he++){let $t=6+j()*(n.VL-12),Kt=(j()-.5)*2*(n.FLOOR-2.5);if(!($t<22||Math.hypot($t-o.vq.camp.x,Kt-o.vq.camp.z)<24||Math.abs(Kt-n.riverZ($t))<2.2||!n.onFloor($t,Kt))){J=$t,wt=Kt;break}}Object.assign(h,{x:n.x+J,z:n.z+wt,vx:0,vz:0,state:"graze",t:0,gt:2.5,sus:0,stamina:4,triedLeap:!1,hy:0,face:j()*_e}),h.y=i.H(h.x,h.z),Object.assign(o.vq,{met:!1,called:!1,caught:!1,delivered:!1}),q.on=!1,o.coins=e.coins.map(he=>({...he,taken:!1})),o.coinsGot=0,o.summit=null,o.scope=!1,o.carry=null,o.focus=null,o.wind=0,o.t=0,o.drop=null,o.climb={done:!1,time:0,t0:0},o.reached=new Set;let Et=i.restPoints[0];o.rest=Et,o.reached.add(Et.id),o.hero=m(S,Et),s.push(o.hero);let Lt=o.hero;if(M.at==="summit"&&(Object.assign(Lt,{x:e.x-e.RP+2.5,z:e.z+2,y:e.HS}),o.rest=i.restPoints.find(he=>he.id==="summit"),o.climb.done=!0),M.at==="valley"){let[he,$t]=I();Object.assign(Lt,{x:n.x+he,z:n.z+$t,y:n.VF+n.H0(he,$t)+34,mode:"glide",air:!0,chute:.01,vy:-3}),o.carry={t:0},o.climb.done=!0,E(Lt),l("chute")}return{camp:n.CAMPS.indexOf(o.vq.camp),gazelle:[h.x,h.z],start:[Lt.x,Lt.z]}}function nt(S){return S==="scope"?(o.scope=!o.scope,!0):(S==="tea"&&(o.hero.hp=o.hero.maxHp),!0)}function pt(){let S=o.hero;if(S.mode!=="walk"||!o.summit||o.summit.phase!=="wait")return null;let M=null,j=1e9;for(let J of e.plaza.inter){let wt=Math.hypot(S.x-J.x,S.z-J.z);wt<J.r&&wt<j&&(j=wt,M=J)}return M}function Ft(){let S=o.hero,M=o.vq,[j,J]=_(S.x,S.z),wt=j>-70&&j<n.VL+25&&Math.abs(J)<45;return S.mode==="lift"||S.mode==="carry"?"\u{1F32A}\uFE0F \u0627\u0644\u0631\u064A\u062D \u0634\u0627\u0644\u062A\u0643!":S.mode==="glide"?"\u{1FA82} \u0627\u0646\u0632\u0644 \u0628\u0627\u0644\u0645\u0638\u0644\u0629":S.mode==="faint"?"\u{1F635} \u2026":o.summit?o.summit.phase==="wait"?"\u2615 \u0627\u0633\u062A\u0631\u064A\u062D \u0628\u0627\u0644\u0633\u0627\u062D\u0629":"\u{1F4A8} \u0627\u0644\u0631\u064A\u062D!":wt||o.climb.done&&!M.delivered?M.delivered?"\u{1F30D} \u062A\u0645\u0634\u0651\u0649 \u0628\u0627\u0644\u0639\u0627\u0644\u0645":M.caught?M.met?"\u{1F3D5}\uFE0F \u0631\u062C\u0651\u0639\u0647 \u0644\u0623\u0628\u0648 \u062C\u0627\u0633\u0645":"\u{1F50E} \u062F\u0648\u0651\u0631 \u0639\u0644\u0649 \u0627\u0644\u062A\u0627\u062C\u0631":M.called&&!M.met?"\u{1F50E} \u062F\u0648\u0651\u0631 \u0639\u0644\u0649 \u0627\u0644\u063A\u0632\u0627\u0644 \u0648\u0627\u0644\u062A\u0627\u062C\u0631":"\u{1F50E} \u062F\u0648\u0651\u0631 \u0639\u0644\u0649 \u0627\u0644\u063A\u0632\u0627\u0644":o.climb.done?"\u{1F30D} \u062A\u0645\u0634\u0651\u0649 \u0628\u0627\u0644\u0639\u0627\u0644\u0645":"\u26F0\uFE0F \u0627\u0637\u0644\u0639 \u0644\u0644\u0642\u0645\u0629"}function Ht(S,M){a.length=0,o.t+=S;let j=o.hero;return j?(g(j,M||{},S),A(S),!o.summit&&!o.carry&&(o.wind=Math.max(0,o.wind-S*.35)),y(S),O(S),z(S),o.drop&&(o.drop.t+=S),o.focus&&(o.focus.t-=S,o.focus.t<=0&&(o.focus=null)),a.slice()):[]}return{S:o,ents:s,beasts:u,gz:h,merchant:f,step:Ht,enter:it,interact:nt,nearInteract:pt,skipWait:C,objective:Ft,respawn:()=>{o.hero&&o.hero.mode==="walk"&&p(o.hero,"menu")},hurt:S=>w(o.hero,S,"test")}}var ur=Math.PI/180;function sf(i,t,e){let n=i.renderer,s=t.M,r=t.V,o=e.S,a=new Nr,l=new xe("#CFDFE8");a.background=l,a.fog=new Dr(l,60,400);let c=new En(62,.5,.1,2600),u={time:{value:0},wind:{value:0}},h=mn(4242),f=new so("#D2E6FF","#6A8A4E",1);a.add(f);let d=new k(.5,.72,.45).normalize(),m=new oo("#FFE9C4",2.9);m.castShadow=!0,m.shadow.mapSize.set(2048,2048),Object.assign(m.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:1,far:180}),m.shadow.bias=-5e-4,m.shadow.normalBias=.03,m.shadow.radius=2.5,a.add(m,m.target);let w=qd("#3A7FD6","#9CCBF2","#EFE7D6",new k(.6,.35,-.7));a.add(w);let p=Jd(),g=$d(),b=new $e({vertexColors:!0}),E=new $e({vertexColors:!0,flatShading:!0}),A=new $e({vertexColors:!0,flatShading:!0}),I=[],C=(X,tt)=>X*100003+tt,y=t.HALF,_=64,R=Math.ceil(y*2/_),T=-R*_/2;function B(X,tt,G,L,Q){let lt=s.rad(X,G),ft=r.Hv(X,G);if(ft<=tt+.02&&ft<1e8){let xt=X-r.x,It=G-r.z,St=Math.abs(It),x=Yn(xt*.07+11,It*.07),P=pn(xt*.5,It*.5);Ye(Q,"#5FAE3E","#9AD85E",x*1.3-.15+P*.2);let V=Math.abs(It-r.riverZ(xt));V<2.4&&St<r.FLOOR+1&&xt>-4&&Q.lerp(Zn.set(V<1?"#8F8A62":"#D9C891"),Se(2.4,1.3,V));let N=Se(1.2,5,tt-r.VF)*Se(r.FLOOR-.5,r.FLOOR+4,St)+Se(.55,.9,L)*.8;if(N>0){let H=.5+.5*Math.sin(tt*1.9+Yn(X*.05,G*.05)*4);Ye(So,"#B98F62","#DDBE8E",H),So.lerp(Zn.set("#8E6A48"),pn(X*.35,tt*.6)*.35),Q.lerp(So,Ie(N,0,1))}return xt<0&&St<9&&Q.lerp(Zn.set("#A88C62"),Se(-2,-12,xt)*Se(9,5,St)*.6),Q}if(lt<205){Ye(Q,"#3E6E2E","#6E9A44",Yn(X*.06+3,G*.06)*1.2-.1),L>.8&&(Ye(Zn,"#5E5A55","#A9A398",pn(X*.35+G*.2,tt*1.6)*.8+pn(X*2,G*2+tt)*.35),Q.lerp(Zn,Se(.8,1.3,L)));let xt=s.nearest(X,G,tt,1);return xt&&xt.d<xt.p.hw+.9&&xt.p.kind!=="bridge"&&Q.lerp(Zn.set("#9C7E55"),Se(xt.p.hw+.9,xt.p.hw-.2,xt.d)*.85),lt<s.RP+1&&Q.set("#9A9388"),lt>190&&Q.lerp(Zn.set("#5E8F3E"),Se(190,205,lt)),Q}let dt=Math.max(Math.abs(X),Math.abs(G));return Ye(Q,"#5E8F3E","#9BBF5C",Yn(X*.02+9,G*.02)*1.25-.15),Q.lerp(Zn.set("#C8B87A"),Se(.55,.85,pn(X*.01+3,G*.01))*.45),L>.75&&(Ye(Zn,"#6D675E","#ABA294",pn(X*.2,tt*.7)),Q.lerp(Zn,Se(.75,1.2,L))),tt>40&&Q.lerp(Zn.set("#F2F5F8"),Se(40,60,tt+(pn(X*.05,G*.05)-.5)*16)*Se(380,430,dt)),Q}let q=[];function U(X,tt,G){let L=T+X*_,Q=T+tt*_,lt=Math.round(_/G)+1,ft=lt+2,bt=new Float32Array(ft*ft);for(let ot=0;ot<ft;ot++)for(let Tt=0;Tt<ft;Tt++)bt[ot*ft+Tt]=t.H(L+(Tt-1)*G,Q+(ot-1)*G);let dt=(ot,Tt)=>bt[(Tt+1)*ft+(ot+1)],xt=[],It=[],St=[],x=[];for(let ot=0;ot<lt;ot++)for(let Tt=0;Tt<lt;Tt++){let et=L+Tt*G,at=Q+ot*G,Nt=dt(Tt,ot),Dt=(dt(Tt+1,ot)-dt(Tt-1,ot))/(2*G),re=(dt(Tt,ot+1)-dt(Tt,ot-1))/(2*G),Wt=Math.hypot(Dt,re),le=Math.hypot(Dt,1,re);if(xt.push(et,Nt,at),x.push(-Dt/le,1/le,-re/le),B(et,Nt,at,Wt,je),It.push(je.r,je.g,je.b),Tt<lt-1&&ot<lt-1){let pe=ot*lt+Tt;St.push(pe,pe+lt,pe+1,pe+1,pe+lt,pe+lt+1)}}let P=[];for(let ot=0;ot<lt;ot++)P.push(ot);for(let ot=1;ot<lt;ot++)P.push(ot*lt+lt-1);for(let ot=lt-2;ot>=0;ot--)P.push((lt-1)*lt+ot);for(let ot=lt-2;ot>0;ot--)P.push(ot*lt);let V=xt.length/3;P.forEach(ot=>{xt.push(xt[ot*3],xt[ot*3+1]-(G>3?6:2.5),xt[ot*3+2]),It.push(It[ot*3],It[ot*3+1],It[ot*3+2]),x.push(x[ot*3],x[ot*3+1],x[ot*3+2])});for(let ot=0;ot<P.length;ot++){let Tt=P[ot],et=P[(ot+1)%P.length],at=V+ot,Nt=V+(ot+1)%P.length;St.push(Tt,at,et,et,at,Nt,Tt,et,at,et,Nt,at)}let N=new Ve;N.setAttribute("position",new Ne(new Float32Array(xt),3)),N.setAttribute("normal",new Ne(new Float32Array(x),3)),N.setAttribute("color",new Ne(new Float32Array(It),3)),N.setIndex(St),N.computeBoundingSphere();let H=new Pt(N,b);return H.receiveShadow=!0,H.matrixAutoUpdate=!1,a.add(H),H}for(let X=0;X<R;X++)for(let tt=0;tt<R;tt++){let G=T+(X+.5)*_,L=T+(tt+.5)*_,Q=U(X,tt,8),lt={i:X,j:tt,x:G,z:L,lo:Q,hi:null};q.push(lt)}let $=q.slice();function D(X,tt,G){if(!$.length)return!0;tt!=null&&$.sort((Q,lt)=>(Q.x-tt)**2+(Q.z-G)**2-((lt.x-tt)**2+(lt.z-G)**2));let L=performance.now();for(;$.length&&performance.now()-L<X;){let Q=$.shift();Q.hi=U(Q.i,Q.j,2),Q.hi.visible=!1}return!$.length}{let X=Yi(64,256,(dt,xt,It)=>{dt.clearRect(0,0,xt,It);for(let St=0;St<It;St+=2){let x=6+pn(St*.06,1)*8,P=xt-6-pn(St*.06,5)*8,V=dt.createLinearGradient(x,0,P,0);V.addColorStop(0,"rgba(150,118,78,0)"),V.addColorStop(.2,"rgba(150,118,78,.95)"),V.addColorStop(.8,"rgba(140,108,70,.95)"),V.addColorStop(1,"rgba(140,108,70,0)"),dt.fillStyle=V,dt.fillRect(x,St,P-x,2)}for(let St=0;St<260;St++)dt.fillStyle=`rgba(${90+St%5*20},${80+St%7*12},${60+St%3*10},.6)`,dt.beginPath(),dt.arc(8+Math.random()*(xt-16),Math.random()*It,.5+Math.random()*1.4,0,_e),dt.fill()},[1,1]),tt=[],G=[],L=[],Q=0,lt=dt=>{if(dt.length<2)return;let xt=0;dt.forEach((It,St)=>{let x=dt[Math.max(0,St-1)],P=dt[Math.min(dt.length-1,St+1)],V=P.x-x.x,N=P.z-x.z,H=Math.hypot(V,N)||1,ot=-N/H,Tt=V/H,et=It.hw+.35;if(St&&(xt+=Math.hypot(It.x-dt[St-1].x,It.z-dt[St-1].z)/6),tt.push(It.x+ot*et,It.y+.06,It.z+Tt*et,It.x-ot*et,It.y+.06,It.z-Tt*et),G.push(0,xt,1,xt),St){let at=Q+(St-1)*2;L.push(at,at+2,at+1,at+1,at+2,at+3)}}),Q+=dt.length*2};for(let dt of s.segs){let xt=[];for(let It of dt.pts)It.kind==="bridge"||It.kind==="stones"||It.kind==="stairs"?(lt(xt),xt=[]):xt.push(It);lt(xt)}let ft=new Ve;ft.setAttribute("position",new Ne(new Float32Array(tt),3)),ft.setAttribute("uv",new Ne(new Float32Array(G),2)),ft.setIndex(L),ft.computeVertexNormals();let bt=new Pt(ft,new $e({map:X,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,side:Xe}));bt.receiveShadow=!0,a.add(bt)}{let X=s.stream,tt=[],G=[],L=[],Q=0;for(let bt=X.r0;bt<=X.r1;bt+=1){let dt=s.x+Math.cos(X.a)*bt,xt=s.z+Math.sin(X.a)*bt,It=-Math.sin(X.a),St=Math.cos(X.a),x=s.Hnat(dt,xt)+.5;if(tt.push(dt+It*2.2,x,xt+St*2.2,dt-It*2.2,x,xt-St*2.2),G.push(0,bt/4,1,bt/4),Q){let P=(Q-1)*2;L.push(P,P+2,P+1,P+1,P+2,P+3)}Q++}let lt=new Ve;lt.setAttribute("position",new Ne(new Float32Array(tt),3)),lt.setAttribute("uv",new Ne(new Float32Array(G),2)),lt.setIndex(L),lt.computeVertexNormals();let ft=new Pt(lt,new zn({color:"#4AA6D8",specular:"#FFFFFF",shininess:140,normalMap:g,transparent:!0,opacity:.9,side:Xe}));ft.material.normalScale.set(.8,.8),a.add(ft)}{let X=[],tt=[],G=[],L=0;for(let ft=-6;ft<=r.VL+6;ft+=.5){let bt=r.riverZ(ft),dt=(r.riverZ(ft+.1)-bt)/.1,xt=Math.hypot(1,dt),It=-dt/xt,St=1/xt,x=r.waterLevel(ft);for(let P of[-1.35,1.35])X.push(r.x+ft+It*P,x,r.z+bt+St*P),tt.push(ft/3,P>0?1:0);if(L){let P=(L-1)*2;G.push(P,P+1,P+2,P+1,P+3,P+2)}L++}let Q=new Ve;Q.setAttribute("position",new Ne(new Float32Array(X),3)),Q.setAttribute("uv",new Ne(new Float32Array(tt),2)),Q.setIndex(G),Q.computeVertexNormals();let lt=new Pt(Q,new zn({color:"#3D9FD8",specular:"#FFFFFF",shininess:140,normalMap:g,transparent:!0,opacity:.88}));lt.material.normalScale.set(.7,.7),lt.receiveShadow=!0,a.add(lt)}let O=(X,tt,G,L,Q)=>{let lt=[Zt(te(new me(.13,.22,G*.45,6),0,G*.22,0),"#5A3E26")];for(let ft=0;ft<tt;ft++){let bt=ft/tt,dt=L*(1-bt*.62),xt=G*.42;lt.push(te(Zt(new Fn(dt,xt,8,1),(It,St,x)=>Ye(It,Q?"#1F4A2B":"#24572F",Q?"#3F7A43":"#4E8C46",.25+(x/xt+.5)*.6+(cn(St*7,x*3)-.5)*.25)),0,G*.32+ft*G*.22+xt/2,0,0,X()*3,0))}return yn(lt)},z=()=>{let X=mn(43),tt=[Zt(te(new me(.14,.22,2.6,6),0,1.3,0),"#5A3E26")];for(let[G,L,Q,lt]of[[0,3.1,0,1.35],[.7,2.6,.3,.95],[-.6,2.7,-.4,1],[.1,3.8,-.2,.9]])tt.push(te(Zt(new Sn(lt,0),(ft,bt,dt)=>Ye(ft,"#2C6B33","#6FAE4E",.3+dt/lt*.35+(X()-.5)*.3)),G,L,Q));return yn(tt)},it=(X,tt,G)=>Zt(te(new Fn(tt*.9,X*.95,6,1,!0),0,X*.62,0),(L,Q,lt)=>Ye(L,G?"#1F4A2B":"#24572F",G?"#3F7A43":"#4E8C46",.3+(lt/X+.5)*.5)),nt={pine:Zi(new $e({vertexColors:!0,flatShading:!0}),.006,2,u),tree:Zi(new $e({vertexColors:!0,flatShading:!0}),.01,1.2,u),palm:Zi(new $e({vertexColors:!0,side:Xe}),.012,2.8,u),grass:Zi(new $e({vertexColors:!0,side:Xe}),.5,0,u)},pt={pineA:O(mn(5),4,7.5,2,!1),pineB:O(mn(6),3,6,2.5,!0),oak:z()};function Ft(X,tt,G,L={}){let Q=new Map,lt=new rn,ft=L.size||26;for(let bt of G){let dt=C(Math.floor(bt.x/ft),Math.floor(bt.z/ft));Q.has(dt)||Q.set(dt,[]),Q.get(dt).push(bt)}for(let bt of Q.values()){let dt=new es(X,tt,bt.length),xt=0,It=0;bt.forEach((x,P)=>{lt.position.set(x.x,x.y,x.z),lt.rotation.set(x.rx||0,x.ry||0,x.rz||0),x.s3?lt.scale.set(...x.s3):lt.scale.setScalar(x.s||1),lt.updateMatrix(),dt.setMatrixAt(P,lt.matrix),x.color&&dt.setColorAt(P,je.set(x.color)),xt+=x.x,It+=x.z}),dt.castShadow=!!L.cast,dt.receiveShadow=!0,dt.computeBoundingSphere(),a.add(dt);let St=null;L.lod&&(St=new es(L.lod,A,bt.length),St.instanceMatrix=dt.instanceMatrix,St.computeBoundingSphere(),St.visible=!1,a.add(St)),I.push({m:dt,lo:St,x:xt/bt.length,z:It/bt.length,far:L.far||105,lodAt:L.lodAt||62,small:!!L.small})}}let Ht=t.veg;Ft(pt.pineA,nt.pine,Ht.pineA,{cast:!0,lod:it(7.5,2,!1)}),Ft(pt.pineB,nt.pine,Ht.pineB,{cast:!0,lod:it(6,2.5,!0)}),Ft(pt.oak,nt.tree,Ht.oak,{cast:!0,lod:te(Zt(new Sn(1.5,0),"#3E7D3A"),0,3.1,0)});let S=yn([te(Zt(new Sn(.85,0),(X,tt,G,L)=>Ye(X,"#1E4A24","#4C8A3E",.35+G*.4+cn(tt*9,L*9)*.3)),0,.55,0,0,0,0,1,.95,1),te(Zt(new Sn(.6,0),(X,tt,G)=>Ye(X,"#2A5C2C","#5E9E48",.5+G*.5)),.25,1.25,.1)]);Ft(S,E,Ht.hedge,{size:26,far:70,cast:!1}),Ft(Sh(),E,Ht.bush,{size:30,far:70,small:!0}),Ft(bh(),E,Ht.rock,{size:30,far:120});let M=[Gl(mn(3),1.1,9),Gl(mn(8),-.8,10),Gl(mn(15),.5,8)],j=yn([Zt(te(new me(.25,.4,8,5),0,4,0),"#8B6A3E"),Zt(te(new Sn(1.6,0),0,8.4,0,0,0,0,1,.55,1),"#3A7F34")]);M.forEach((X,tt)=>Ft(X,nt.palm,Ht.palm[tt],{cast:!0,lod:j,lodAt:70,far:260})),[Hl(mn(21),"#E8443A",["#2F8A3C","#7CCB55"]),Hl(mn(33),null,["#3B9447","#8AD460"]),Hl(mn(41),"#FFB52E",["#2C7F3A","#6FC24F"])].forEach((X,tt)=>Ft(X,nt.tree,Ht.fruit[tt],{cast:!0,far:220})),Ft(Sh(),E,Ht.vbush,{size:30,far:90,small:!0}),Ft(bh(),E,Ht.vrock,{size:30,far:70,small:!0}),Ft(Zt(new pi(.5,1),(X,tt,G,L)=>Ye(X,"#9C7A56","#D2B387",.45+G*.9+(cn(tt*5,L*5)-.5)*.4)),E,Ht.boulder,{size:40,far:260}),Ft(yn([te(Zt(new me(.15,.22,1.6,5),"#6B4A2A"),0,.8,0),te(Zt(new Sn(1.2,0),(X,tt,G)=>Ye(X,"#4F7F3A","#8DB45E",G/1.2*.5+.5)),0,2.3,0,0,0,0,1,.85,1)]),E,Ht.rim,{size:40,far:300});{let X=mn(5151),tt=(x,P)=>[r.x+x,r.z+P],G=(x,P,V)=>r.CAMPS.some(N=>Math.hypot(x-N.x,P-N.z)<V),L=[],Q=[],lt=[];for(let x=0;L.length<6e3&&x<3e4;x++){let P=-3+X()*(r.VL+6),V=(X()<.5?-1:1)*X()*(r.FLOOR+3);if(Math.abs(V-r.riverZ(P))<1.15||G(P,V,3.9))continue;let[N,H]=tt(P,V);t.slope(N,H)>.6||L.push({x:N,y:t.H(N,H)-.02,z:H,ry:X()*_e,s:.5+X()*.7})}let ft=["#FF6B9A","#FFFFFF","#FFD23F","#B28DFF","#FF8C42","#FF4D6D","#7FD1FF"];for(let x=0;x<9e3&&Q.length<2400;x++){let P=-2+X()*(r.VL+4),V=(X()<.5?-1:1)*X()*(r.FLOOR-.3);if(Math.abs(V-r.riverZ(P))<1.3||G(P,V,3.9)||pn(P*.16,V*.16)<.42)continue;let[N,H]=tt(P,V);Q.push({x:N,y:t.H(N,H),z:H,ry:X()*_e*.25,s:1.2+X()*.8,color:ft[Math.floor(pn(P*.3+40,V*.3)*ft.length*.999+X()*1.5)%ft.length]})}for(let x=-4;x<r.VL+4;x+=.55)for(let P of[-1,1]){if(X()<.35)continue;let V=r.riverZ(x)+P*(1.05+X()*.55);if(G(x,V,5))continue;let[N,H]=tt(x,V);lt.push({x:N,y:t.H(N,H)-.05,z:H,ry:X()*_e,s:.7+X()*.6})}Ft(wh(),nt.grass,L,{size:24,far:55,small:!0});let bt=yn([te(Zt(new me(.007,.01,.24,3,1,!0),"#3E8E36"),0,.12,0),te(Zt(new ni(.02,6),"#FFD54A"),0,.248,.004,-1,0,0)]),dt=yn([0,1,2,3,4].map(x=>{let P=x/5*_e;return te(Zt(new ni(.036,5),"#FFFFFF"),Math.cos(P)*.035,Math.sin(P)*.035,0,0,0,P)}));te(dt,0,.245,0,-1,0,0),Ft(bt,Zi(b,.8,0,u),Q.map(x=>({...x,color:null})),{size:24,far:45,small:!0}),Ft(dt,Zi(new $e({vertexColors:!0,side:Xe}),.8,0,u),Q,{size:24,far:45,small:!0}),Ft(Kd(),Zi(b,.09,.2,u),lt,{size:24,far:70,small:!0});let xt=[],It=[];for(let x of s.ALL){if(x.kind==="bridge"||x.kind==="stones"||x.k%2)continue;let P=x.seg.pts,V=-(P[Math.min(x.k+1,P.length-1)].z-P[Math.max(x.k-1,0)].z),N=P[Math.min(x.k+1,P.length-1)].x-P[Math.max(x.k-1,0)].x,H=Math.hypot(V,N)||1;for(let ot of[-1,1]){let Tt=x.hw+.15+h()*1.4,et=x.x+V/H*Tt*ot,at=x.z+N/H*Tt*ot,Nt=t.H(et,at),Dt=h();Dt<.55?xt.push({x:et,y:Nt-.02,z:at,ry:h()*_e,s:.6+h()*.7}):Dt<.8&&It.push({x:et,y:Nt,z:at,ry:h()*_e,s:.7+h()*.6})}}Ft(wh(),nt.grass,xt,{size:30,far:45,small:!0});let St=yn([...Array(7)].map((x,P)=>{let V=P/7*_e,N=.55+P%3*.12,H=[],ot=[];for(let et=0;et<6;et++){let at=et/6,Nt=(et+1)/6,Dt=Math.sin(at*Math.PI)*.09,re=Math.sin(Nt*Math.PI)*.09,Wt=[Math.cos(V)*N*at,Math.sin(at*Math.PI*.8)*.3,Math.sin(V)*N*at],le=[Math.cos(V)*N*Nt,Math.sin(Nt*Math.PI*.8)*.3,Math.sin(V)*N*Nt],pe=-Math.sin(V),we=Math.cos(V);H.push(Wt[0]-pe*Dt,Wt[1],Wt[2]-we*Dt,le[0]-pe*re,le[1],le[2]-we*re,Wt[0]+pe*Dt,Wt[1],Wt[2]+we*Dt,Wt[0]+pe*Dt,Wt[1],Wt[2]+we*Dt,le[0]-pe*re,le[1],le[2]-we*re,le[0]+pe*re,le[1],le[2]+we*re);for(let Pe=0;Pe<6;Pe++)Ye(je,"#2F6B2C","#79B356",at+.2),ot.push(je.r,je.g,je.b)}let Tt=new Ve;return Tt.setAttribute("position",new Ne(new Float32Array(H),3)),Tt.setAttribute("color",new Ne(new Float32Array(ot),3)),Tt.computeVertexNormals(),Tt}));Ft(St,Zi(new $e({vertexColors:!0,side:Xe}),.35,0,u),It,{size:30,far:50,small:!0})}let wt=new Te;a.add(wt);{let X=Yi(256,128,(L,Q,lt)=>{L.clearRect(0,0,Q,lt);let ft=mn(3);for(let bt=0;bt<22;bt++){let dt=Q*(.18+ft()*.64),xt=lt*(.42+ft()*.28),It=18+ft()*30,St=L.createRadialGradient(dt,xt,0,dt,xt,It);St.addColorStop(0,"rgba(255,255,255,.95)"),St.addColorStop(.6,"rgba(250,252,255,.55)"),St.addColorStop(1,"rgba(240,246,255,0)"),L.fillStyle=St,L.beginPath(),L.arc(dt,xt,It,0,_e),L.fill()}});for(let L=0;L<50;L++){let Q=h()*_e;Math.abs(Jn(Q,0))<.5&&(Q+=1.3);let lt=420+h()*420,ft=new Ei(new fi({map:X,transparent:!0,opacity:.7+h()*.3,depthWrite:!1,fog:!1})),bt=70+h()*110;ft.scale.set(bt,bt*.42,1),ft.position.set(Math.cos(Q)*lt,60+h()*70,Math.sin(Q)*lt),wt.add(ft)}let tt=[],G=(L,Q,lt,ft,bt,dt)=>{let xt=new Fn(ft,lt,28,10),It=xt.attributes.position;for(let St=0;St<It.count;St++){let x=It.getX(St),P=It.getY(St),V=It.getZ(St),N=Math.atan2(V,x),H=(P+lt/2)/lt,ot=1+(pn(N*2.2+bt,H*3.5)-.5)*.45*(1-H*.4);It.setXYZ(St,x*ot,P,V*ot)}xt=Zt(xt,(St,x,P,V)=>{let N=(P+lt/2)/lt,H=pn(Math.atan2(V,x)*6+bt,N*9);Ye(St,"#A9BCD2","#D3DEEA",N*.9+H*.35),dt<1&&N>dt-.06+H*.08&&St.set("#F4F8FC")}),tt.push(te(xt,L,lt/2-20,Q))};for(let L=0;L<26;L++){let Q=L/26*_e+Math.sin(L*3.1)*.06,lt=820+L%3*140;G(Math.cos(Q)*lt,Math.sin(Q)*lt,150+L%4*40,230+L%3*60,L*2.1,L%3?.7:2)}a.add(new Pt(yn(tt),new $e({vertexColors:!0,flatShading:!0,fog:!1})))}let Et=(X,tt=256,G=64,L=34)=>Yi(tt,G,Q=>{Q.fillStyle="#8B5A2B",Q.fillRect(0,0,tt,G),Q.strokeStyle="#E8C170",Q.lineWidth=Math.max(4,G/16),Q.strokeRect(4,4,tt-8,G-8),Q.fillStyle="#FFF3D6",Q.font=`900 ${L}px -apple-system, "Geeza Pro", system-ui, sans-serif`,Q.textAlign="center",Q.textBaseline="middle";try{Q.direction="rtl"}catch{}Q.fillText(X,tt/2,G/2+2)}),Lt=new Map;{let X=[];for(let L of s.bridges){L.seg.pts.slice(L.i,L.j+1).forEach((Q,lt)=>{if(Q.gap)return;let ft=L.seg.pts[Math.min(Q.k+1,L.seg.pts.length-1)],bt=Math.atan2(ft.z-Q.z,ft.x-Q.x);X.push(te(Zt(new Ue(.5,.07,1.45),(dt,xt,It,St)=>Ye(dt,"#7A5634","#A57B4C",cn(lt,St*3)*.6+(It>0?.3:0))),Q.x,Q.y-.035,Q.z,0,-bt,0))});for(let Q of[-1,1])for(let lt of[.95,.45]){let ft=[];for(let bt=L.i-1;bt<=L.j+1;bt++){let dt=L.seg.pts,xt=dt[Ie(bt,0,dt.length-1)],It=dt[Ie(bt+1,0,dt.length-1)],St=dt[Ie(bt-1,0,dt.length-1)],x=It.x-St.x,P=It.z-St.z,V=Math.hypot(x,P)||1;ft.push(new k(xt.x-P/V*.72*Q,xt.y+lt,xt.z+x/V*.72*Q))}X.push(Zt(new Hi(new Xn(ft),ft.length*2,.03,5),"#C9A46B"))}for(let Q of[L.a,L.b])for(let lt of[-1,1]){let ft=Q.seg.pts,bt=ft[Math.min(Q.k+1,ft.length-1)],dt=ft[Math.max(Q.k-1,0)],xt=bt.x-dt.x,It=bt.z-dt.z,St=Math.hypot(xt,It)||1;X.push(te(Zt(new me(.09,.11,1.5,6),"#5C3A1A"),Q.x-It/St*.8*lt,Q.y+.6,Q.z+xt/St*.8*lt))}}for(let L of s.ALL)if(L.kind==="stairs"){let Q=L.seg.pts,lt=Q[Math.min(L.k+1,Q.length-1)],ft=Q[Math.max(L.k-1,0)],bt=Math.atan2(lt.z-ft.z,lt.x-ft.x);X.push(te(Zt(new Ue(.9,.5,2.7),(dt,xt,It,St)=>Ye(dt,"#7C766B","#ABA393",It+.4+cn(L.k,St*5)*.3)),L.x,L.y-.25,L.z,0,-bt+(cn(L.k,3)-.5)*.08,0))}for(let{p:L,nx:Q,nz:lt,sz:ft}of s.ledgeRocks)X.push(te(Zt(new pi(1,0).scale(ft,ft*(1.3+cn(L.k,5)),ft*.8),(bt,dt,xt,It)=>Ye(bt,"#5E5A55","#A9A398",.35+xt*.2+cn(dt*5+L.k,It*5)*.3)),L.x+Q*(L.hw+ft),L.y+ft*.3,L.z+lt*(L.hw+ft),cn(L.k,2)*.4,cn(L.k,4)*3,0)),L.k%6===0&&X.push(te(Zt(new pi(.25,0),"#8A847A"),L.x-Q*(L.hw-.05),L.y+.08,L.z-lt*(L.hw-.05)));for(let L of s.stones)X.push(te(Zt(new me(L.r,L.r*1.12,1.4,9),(Q,lt,ft)=>Ye(Q,"#7F7A72","#B7B1A6",ft+.6+cn(lt*9,L.x)*.2)),L.x,L.y-.7,L.z,0,h()*3,0));{let L=s.rest[0],Q=L.face,lt=-Math.sin(Q),ft=Math.cos(Q),bt=L.x+Math.cos(Q)*3,dt=L.z+Math.sin(Q)*3;for(let It of[-1,1])X.push(te(Zt(new me(.11,.13,3.4,7),"#5C3A1A"),bt+lt*2*It,L.y+1.7,dt+ft*2*It));X.push(te(Zt(new Ue(.2,.2,4.6),"#4F3420"),bt,L.y+3.35,dt,0,-Q,0));let xt=new Pt(new Un(3.4,.85),new $e({map:Et("\u26F0\uFE0F \u0637\u0631\u064A\u0642 \u0627\u0644\u0642\u0645\u0629",512,128,60),side:Xe}));xt.position.set(bt,L.y+2.85,dt),xt.rotation.y=-Q-Math.PI/2,a.add(xt)}{let Q=r.x+-6,lt=r.z+5.5,ft=t.H(Q,lt);X.push(te(Zt(new me(.08,.1,2.4,6),"#5C3A1A"),Q,ft+1.2,lt));let bt=new Pt(new Un(2.4,.6),new $e({map:Et("\u{1F3DE}\uFE0F \u0648\u0627\u062F\u064A \u0627\u0644\u063A\u0632\u0644\u0627\u0646",384,96,46),side:Xe}));bt.position.set(Q,ft+2.25,lt),bt.rotation.y=Math.PI/2,a.add(bt)}for(let L of s.rest)if(L.flag){for(let ft=0;ft<6;ft++)X.push(te(Zt(new pi(.22-ft*.025,0),"#9D978C"),L.x+1.6,L.y+.15+ft*.25,L.z+1.1));X.push(te(Zt(new me(.05,.06,2.4,6),"#5C3A1A"),L.x-1.4,L.y+1.2,L.z-1.1));let Q=new Ve;Q.setAttribute("position",new Ne(new Float32Array([0,.32,0,0,-.32,0,1.05,0,0]),3)),Q.computeVertexNormals();let lt=new Pt(Q,new $e({color:"#F4F1EA",side:Xe}));lt.position.set(L.x-1.4,L.y+2.05,L.z-1.1),a.add(lt),Lt.set(L.id,lt)}let tt=Et("\u2B05 \u0644\u0644\u0642\u0645\u0629");for(let L of s.signs){let Q=t.H(L.x,L.z);X.push(te(Zt(new me(.06,.07,1.9,6),"#5C3A1A"),L.x,Q+.95,L.z));let lt=new Pt(new Un(1.1,.28),new $e({map:tt,side:Xe}));lt.position.set(L.x+Math.cos(L.a)*.45,Q+1.65,L.z+Math.sin(L.a)*.45),lt.rotation.y=-L.a+Math.PI,a.add(lt)}for(let L of s.logs){let Q=t.H(L.x,L.z);X.push(te(Zt(new me(.32,.38,4.2,8),(lt,ft,bt)=>lt.set(Math.abs(bt)>2?"#C9A36B":"#5A3E26")),L.x,Q+.35,L.z,0,L.a,Math.PI/2))}let G=new Pt(yn(X),new $e({vertexColors:!0,side:Xe}));G.castShadow=!0,G.receiveShadow=!0,a.add(G)}let he=200,$t=new es(new me(.22,.22,.05,20),new zn({color:"#FFC93C",specular:"#FFF4C0",shininess:90,emissive:"#6B4A00",emissiveIntensity:.55}),he);$t.castShadow=!0,$t.frustumCulled=!1,$t.count=0,a.add($t);let Kt=s.plaza,ue=s.RP,mt=s.HS,gt=new Te;gt.position.set(Kt.x,mt,Kt.z),a.add(gt);let Ct=[],rt={flag:null,flagBase:null,bell:null,lanterns:[],water:null,drops:null,leaves:null,kiosk:null,cups:[],streaks:null,scope:null},vt=(X,tt)=>[Math.cos(X*ur)*tt,Math.sin(X*ur)*tt],Jt=new zn({color:"#B5562A",specular:"#FFFFFF",shininess:120,transparent:!0,opacity:.85}),jt=new zn({color:"#C9A13B",specular:"#FFE9A8",shininess:90});{let X=Yi(512,512,(kt,ge,Be)=>{kt.fillStyle="#B9B1A3",kt.fillRect(0,0,ge,Be);for(let Je=0;Je<12;Je++){let un=Je*22,Nn=un+22,hs=Math.max(6,Math.round(_e*(un+11)/34));for(let $i=0;$i<hs;$i++){let Ph=$i/hs*_e,Ih=($i+1)/hs*_e,ql=.82+(Je*7+$i*3)%5*.04;kt.fillStyle=`rgb(${Math.round(196*ql)},${Math.round(186*ql)},${Math.round(168*ql)})`,kt.beginPath(),kt.arc(ge/2,Be/2,Nn-1.5,Ph+.01,Ih-.01),kt.arc(ge/2,Be/2,Math.max(0,un+1.5),Ih-.01,Ph+.01,!0),kt.closePath(),kt.fill()}}}),tt=new Pt(new ni(ue,64),new $e({map:X}));tt.rotation.x=-Math.PI/2,tt.position.y=.03,tt.receiveShadow=!0,gt.add(tt);let G=[];for(let kt=0;kt<64;kt++){let ge=kt/64*_e;Math.abs(Jn(ge,s.ENTRY_A))<.16||Math.abs(Jn(ge,s.DECK_A))<.2||G.push(te(Zt(new Ue(1.36,.72,.55),(Be,Je,un,Nn)=>Ye(Be,"#8E877B","#B8AF9F",.4+un+cn(kt,Nn*4)*.3)),Math.cos(ge)*(ue-.1),.36,Math.sin(ge)*(ue-.1),0,-ge+Math.PI/2,0))}for(let kt=0;kt<10;kt++)G.push(te(Zt(new Ue(.46,.08,3.6),(ge,Be,Je,un)=>Ye(ge,"#7A5634","#A57B4C",cn(kt,un)*.5+.3)),ue-.3+kt*.48,.05,0));for(let kt of[-1,1]){G.push(te(Zt(new Ue(4.8,.07,.07),"#6B4423"),ue+2.1,.95,kt*1.8));for(let ge=0;ge<5;ge++)G.push(te(Zt(new me(.05,.05,1,6),"#5C3A1A"),ue+.1+ge*1.1,.5,kt*1.8))}G.push(te(Zt(new Ue(.07,.07,3.6),"#6B4423"),ue+4.5,.95,0));for(let kt=-1;kt<=1;kt++)G.push(te(Zt(new me(.06,.06,1,6),"#5C3A1A"),ue+4.5,.5,kt*1.6));for(let kt=0;kt<4;kt++)G.push(te(Zt(new me(.12,.14,7,6),"#4F3420"),ue+.5+kt*1.3,-3.4,(kt%2?1:-1)*1.5));G.push(Zt(new Ln([new ct(.001,0),new ct(2.35,0),new ct(2.45,.08),new ct(2.4,.62),new ct(2.15,.66),new ct(2.1,.22),new ct(.001,.22)],40),(kt,ge,Be)=>Ye(kt,"#9F988C","#D6CFC2",Be*1.5+.2))),G.push(Zt(new Ln([new ct(.001,.2),new ct(.32,.2),new ct(.22,.9),new ct(.18,1.4),new ct(.7,1.55),new ct(.72,1.68),new ct(.15,1.72),new ct(.12,2.15),new ct(.2,2.3),new ct(.001,2.38)],24),(kt,ge,Be)=>Ye(kt,"#A79F92","#DCD5C8",Be*.4)));let L=Kt.kioskA*ur,[Q,lt]=vt(Kt.kioskA,9.2),ft=Math.atan2(-Math.cos(L),-Math.sin(L)),bt=[],dt=kt=>bt.push(kt),xt=(kt,ge)=>kt.set(Math.floor((ge+1.6)/.4)%2?"#A97B4C":"#93683E");dt(te(Zt(new Ue(3.2,2.4,.12),xt),0,1.2,-1.05));for(let kt of[-1,1])dt(te(Zt(new Ue(.12,2.4,2.2),"#8A5F36"),kt*1.55,1.2,0));dt(te(Zt(new Ue(3.5,.12,2.7),"#6B4423"),0,2.45,.15)),dt(te(Zt(new Ue(3.1,1,.5),(kt,ge,Be)=>kt.set(Be>.42?"#5C3A1A":Math.floor((ge+1.55)/.31)%2?"#A97B4C":"#93683E")),0,.5,.85));for(let kt=0;kt<8;kt++)dt(te(Zt(new Ue(.44,.04,.9),kt%2?"#FAF3E6":"#2E8B57"),-1.54+kt*.44,2.3,1.75,.35,0,0));dt(te(Zt(new Ue(2.6,.06,.35),"#6B4423"),0,1.6,-.9));for(let kt=0;kt<5;kt++)dt(te(Zt(new me(.07,.06,.22,8),["#2E86AB","#C0612B","#F2E3C6","#9B2335","#E8C170"][kt]),-1+kt*.5,1.75,-.9));let It=new Te;It.add(new Pt(yn(bt),new $e({vertexColors:!0,side:Xe}))),It.position.set(Q,0,lt),It.rotation.y=ft,gt.add(It),It.traverse(kt=>{kt.isMesh&&(kt.castShadow=!0,kt.receiveShadow=!0)}),rt.kiosk=It;let St=new Pt(new Ln([new ct(.001,0),new ct(.14,0),new ct(.16,.05),new ct(.22,.2),new ct(.2,.42),new ct(.12,.5),new ct(.14,.56),new ct(.06,.62),new ct(.001,.64)],18),jt);St.position.set(-1,1,.85),It.add(St);for(let kt=0;kt<6;kt++){let ge=new Pt(new me(.045,.032,.1,10),Jt);ge.position.set(-.3+kt*.2,1.05,.9),It.add(ge),rt.cups.push(ge)}let x=hr({thobe:"#EDE6DA",bisht:null,shmagh:"#1E1E1E",beard:"#2E2A26",beads:!1});x.root.position.set(.35,0,-.25),It.add(x.root),Ct.push({m:x,base:x.root.position.clone(),kind:"seller"});for(let kt of Kt.benches){let ge=kt*ur,[Be,Je]=vt(kt,6.6),un=-ge-Math.PI/2,Nn=-Math.sin(ge),hs=Math.cos(ge);G.push(te(Zt(new Ue(2.2,.1,.55),"#8A5F36"),Be,.45,Je,0,un,0)),G.push(te(Zt(new Ue(2.2,.5,.08),"#7A5232"),Be+Math.cos(ge)*.3,.75,Je+Math.sin(ge)*.3,0,un,0));for(let $i of[-.9,.9])G.push(te(Zt(new Ue(.1,.45,.5),"#6B4423"),Be+Nn*$i,.22,Je+hs*$i,0,un,0))}let P=()=>{let kt=new Pt(new me(.035,.026,.08,10),Jt);return kt.position.set(0,-.43,.05),kt},V={tea:[Kt.meet[0]-Kt.x,Kt.meet[1]-Kt.z],stand:[Q,lt]},N=[hr({thobe:"#D8CDB8",bisht:"#2D3A4E",shmagh:"#C8102E",beads:!1,beard:"#5A524C"}),hr({thobe:"#F4F1EA",bisht:null,shmagh:"#F4F1EA",beard:"none",beads:!0}),hr({thobe:"#CFE0E8",bisht:null,shmagh:"#C8102E",beard:"#3A3430",beads:!1})];Kt.guests.forEach((kt,ge)=>{let Be=N[ge],[Je,un]=vt(kt.a,kt.r),Nn=V[kt.kind];Be.root.position.set(Je,0,un),Be.root.rotation.y=Math.atan2(Nn[0]-Je,Nn[1]-un),gt.add(Be.root),Ct.push({m:Be,base:Be.root.position.clone(),kind:kt.kind,ph:h()*6}),kt.kind==="tea"&&Be.arms[1].el.add(P())});let H=118*ur,[ot,Tt]=vt(118,9),et=-Math.sin(H),at=Math.cos(H);for(let kt of[-1,1])G.push(te(Zt(new Ue(.18,2.8,.18),"#5C3A1A"),ot+et*.9*kt,1.4,Tt+at*.9*kt));G.push(te(Zt(new Ue(2.3,.2,.24),"#4F3420"),ot,2.8,Tt,0,-H-Math.PI/2,0));let Nt=new Te;Nt.position.set(ot,2.7,Tt),gt.add(Nt);let Dt=new Pt(new Ln([new ct(.001,-.05),new ct(.18,-.06),new ct(.24,-.25),new ct(.3,-.55),new ct(.42,-.72),new ct(.4,-.76),new ct(.001,-.76)],24),new zn({color:"#B07A2E",specular:"#FFE2A0",shininess:100}));Dt.castShadow=!0;let re=new Pt(new Fe(.07,10,8),Ee("#3B2A1A"));re.position.y=-.7,Nt.add(Dt,re),rt.bell={g:Nt,swing:0,v:0};let[Wt,le]=vt(300,10.2);G.push(te(Zt(new me(.08,.1,9,8),"#D9D9D9"),Wt,4.5,le)),G.push(te(Zt(new Fe(.16,10,8),"#E8C170"),Wt,9.05,le));let pe=new Un(3.2,2,20,10);pe.translate(1.6,0,0);let we=new Float32Array(pe.attributes.position.count*3);for(let kt=0;kt<pe.attributes.position.count;kt++){let ge=pe.attributes.position.getY(kt);je.set(ge>.33?"#CE1126":ge>-.33?"#FFFFFF":"#141414"),Math.abs(ge)<.2&&Math.abs(pe.attributes.position.getX(kt)-1.6)<.35&&je.set("#007A3D"),we.set([je.r,je.g,je.b],kt*3)}pe.setAttribute("color",new Ne(we,3));let Pe=new Pt(pe,new $e({vertexColors:!0,side:Xe}));Pe.position.set(Wt+.1,7.9,le),Pe.castShadow=!0,gt.add(Pe),rt.flag=Pe,rt.flagBase=Float32Array.from(pe.attributes.position.array);let Xt=new Te;Xt.position.set(ue+3.9,0,0),gt.add(Xt);for(let kt=0;kt<3;kt++){let ge=kt/3*_e,Be=new Pt(new me(.03,.03,1.3,6),Ee("#3B3B3B"));Be.position.set(Math.cos(ge)*.25,.6,Math.sin(ge)*.25),Be.rotation.set(Math.sin(ge)*.38,0,-Math.cos(ge)*.38),Xt.add(Be)}let Ot=new Pt(new me(.09,.13,1.1,16),jt);Ot.rotation.z=Math.PI/2-.15,Ot.position.set(.1,1.32,0),Xt.add(Ot);let ye=new Pt(new me(.14,.14,.06,16),Ee("#1A2A3A",{shininess:160,specular:"#FFFFFF"}));ye.rotation.z=Math.PI/2-.15,ye.position.set(.66,1.4,0),Xt.add(ye),cr(Xt),rt.scope=Xt;let Ae=Kt.lamps.map(kt=>kt*ur);for(let kt of Ae){let ge=Math.cos(kt)*12.2,Be=Math.sin(kt)*12.2;G.push(te(Zt(new me(.06,.08,3.2,6),"#2E2E2E"),ge,1.6,Be));let Je=new Te;Je.position.set(ge,3,Be);let un=new Pt(new me(.11,.11,.26,8),new ln({color:"#FFD36B"})),Nn=new Ei(new fi({map:p,color:"#FFC14D",transparent:!0,opacity:.7,depthWrite:!1,blending:mi}));Nn.scale.setScalar(.75),Je.add(un,Nn),gt.add(Je),rt.lanterns.push(Je)}let Qe=[];for(let kt=0;kt<4;kt++){let ge=Ae[kt],Be=Ae[(kt+1)%4],Je=Jn(ge,Be);Je<0&&(Je+=_e);for(let un=1;un<9;un++){let Nn=ge+Je*un/9,hs=Math.sin(un/9*Math.PI)*.6;Qe.push([Math.cos(Nn)*12.2,3.05-hs,Math.sin(Nn)*12.2])}}let We=new es(new Fe(.07,8,6),new ln({color:"#FFFFFF"}),Qe.length),Bn=new rn,$n=["#FF5D8F","#FFD23F","#7FD1FF","#8DE26B"];Qe.forEach(([kt,ge,Be],Je)=>{Bn.position.set(kt,ge,Be),Bn.updateMatrix(),We.setMatrixAt(Je,Bn.matrix),We.setColorAt(Je,je.set($n[Je%4]))}),gt.add(We);for(let kt of Kt.beds){let[ge,Be]=vt(kt,11);G.push(te(Zt(new me(.7,.6,.5,12),"#8E877B"),ge,.25,Be));for(let Je=0;Je<9;Je++)G.push(te(Zt(new Sn(.13,0),["#FF5D8F","#FFD23F","#FFFFFF","#B28DFF"][Je%4]),ge+Math.cos(Je)*.4,.58,Be+Math.sin(Je)*.4))}let ai=new Pt(yn(G),new $e({vertexColors:!0,side:Xe}));ai.castShadow=!0,ai.receiveShadow=!0,gt.add(ai),Ft(pt.pineA,nt.pine,Kt.pines.map(kt=>{let[ge,Be]=vt(kt,11.6);return{x:Kt.x+ge,y:mt-.1,z:Kt.z+Be,ry:h()*_e,s:.9}}),{cast:!0,size:100,far:500});let Ge=new Pt(new ni(2.12,40),new zn({color:"#4AA6D8",specular:"#FFFFFF",shininess:140,normalMap:g,transparent:!0,opacity:.88}));Ge.rotation.x=-Math.PI/2,Ge.position.y=.55,gt.add(Ge),rt.water=Ge;let hn=140,Dn=[];for(let kt=0;kt<hn;kt++)Dn.push([h()*_e,h(),.5+h()*.5]);let tn=new Ve;tn.setAttribute("position",new Ne(new Float32Array(hn*3),3)),rt.drops=new js(tn,new xs({size:.16,map:p,color:"#E6F6FF",transparent:!0,opacity:.9,depthWrite:!1})),rt.drops.userData.seed=Dn,rt.drops.frustumCulled=!1,gt.add(rt.drops);let an=220,kn=[];for(let kt=0;kt<an;kt++)kn.push([h()*60-30,h()*8,h()*60-30,h()]);let dr=new Ve;dr.setAttribute("position",new Ne(new Float32Array(an*3),3)),rt.leaves=new js(dr,new xs({size:.22,map:p,color:"#A8D46A",transparent:!0,opacity:0,depthWrite:!1})),rt.leaves.userData.seed=kn,rt.leaves.frustumCulled=!1,gt.add(rt.leaves);let Th=70,Ch=[];for(let kt=0;kt<Th;kt++)Ch.push([h()*50-25,h()*9-1,h()*50-25,.5+h()]);let Rh=new Ve;Rh.setAttribute("position",new Ne(new Float32Array(Th*6),3)),rt.streaks=new gs(Rh,new is({color:"#FFFFFF",transparent:!0,opacity:0,depthWrite:!1})),rt.streaks.userData.seed=Ch,rt.streaks.frustumCulled=!1,gt.add(rt.streaks)}let ce=new Te;a.add(ce);let ee={flames:[],glows:[],lantern:null};{let G=new k(4,0,-2.4),L=[],Q=(Xt,Ot)=>Xt.set(Math.floor((Ot+1.7)/.425)%2?"#EAD9B5":"#D9C39C");L.push(te(Zt(new Ue(3.4,1.95,2.4),Q),0,.975,-2.8));for(let Xt of[-1,1])L.push(te(Zt(new Ue(3.62,.07,1.52),(Ot,ye)=>Ot.set(Math.floor((ye+1.81)/.4525)%2?"#C9AE82":"#B99D70")),0,2.32,-2.8+Xt*.6,Xt*.59,0,0));let lt=new ii;lt.moveTo(-1.2,0),lt.lineTo(1.2,0),lt.lineTo(0,.8),lt.closePath();for(let Xt of[-1,1])L.push(te(Zt(new Vi(lt),"#E3D0A8"),0+Xt*1.7,1.95,-2.8,0,Math.PI/2,0));L.push(te(Zt(new Ue(.95,1.55,.05),"#3F2412"),0-.25,.775,-2.8+1.22));for(let Xt of[-1,1]){let Ot=new ii;Ot.moveTo(0,0),Ot.lineTo(.42*Xt,0),Ot.lineTo(0,-1),Ot.closePath(),L.push(te(Zt(new Vi(Ot),"#E9D7B0"),0-.25+Xt*.04,1.55,-2.8+1.25))}let ft=new k(0,2.15,-2.8+1.2),bt=new k(0,1.98,-2.8+2.55),dt=ft.distanceTo(bt),xt=Math.atan2(ft.y-bt.y,bt.z-ft.z);for(let Xt=0;Xt<8;Xt++){let Ot=-1.4875+Xt*.425,ye=Xt%2?"#FAF3E6":"#D7263D";L.push(te(Zt(new Ue(.425,.035,dt),ye),Ot,(ft.y+bt.y)/2,(ft.z+bt.z)/2,xt,0,0)),L.push(te(Zt(new ni(.2125,10,Math.PI,Math.PI),ye),Ot,bt.y,bt.z+.01))}for(let Xt of[-1,1])L.push(te(Zt(new me(.045,.055,2.05,7),"#5C3A1A"),0+Xt*1.68,1.02,-2.8+2.55));let It=0-.78,St=-2.8+2;L.push(te(Zt(new Ue(1,.06,.55),"#8B5A2B"),It,.74,St));for(let[Xt,Ot]of[[-1,-1],[1,-1],[-1,1],[1,1]])L.push(te(Zt(new me(.03,.03,.72,5),"#6B4220"),It+Xt*.44,.36,St+Ot*.22));let x=Xt=>new Ln([new ct(.001,0),new ct(.09*Xt,0),new ct(.15*Xt,.07),new ct(.16*Xt,.17),new ct(.11*Xt,.28),new ct(.06*Xt,.32),new ct(.075*Xt,.36),new ct(.06*Xt,.37)],14);L.push(te(Zt(x(1),(Xt,Ot,ye)=>Xt.set(ye>.2&&ye<.24?"#F2E3C6":"#C0612B")),It-.3,.77,St)),L.push(te(Zt(x(.8),(Xt,Ot,ye)=>Xt.set(ye>.16&&ye<.19?"#FFFFFF":"#2E86AB")),It+.02,.77,St-.05)),L.push(te(Zt(new Fe(.28,12,8),(Xt,Ot,ye)=>Ye(Xt,"#C8B18A","#E2D2AE",ye*2+.5)),0-2.05,.27,-2.8+1.2,0,0,0,1,1.2,1)),L.push(te(Zt(new Ue(.5,.42,.42),(Xt,Ot,ye)=>Xt.set(Math.abs(ye)>.17||Math.abs(Ot)>.21?"#7A4E25":"#A0703C")),0+1.95,.21,-2.8+1,0,.3,0));let P=(Xt,Ot)=>{let ye=Xt.distanceTo(Ot),Ae=Math.max(2,Math.round(ye/.55));for(let Qe=0;Qe<=Ae;Qe++){let We=Xt.clone().lerp(Ot,Qe/Ae);L.push(te(Zt(new me(.045,.055,.85,6),"#8B5A2B"),We.x,.42,We.z))}for(let Qe of[.3,.62]){let We=Zt(new Ue(.05,1,.035),"#9C6A36");te(We,0,0,0,0,0,0,1,ye,1),Mh(We,new k(Xt.x,Qe,Xt.z),new k(Ot.x,Qe,Ot.z)),L.push(We)}},V=new k(-5.8,0,-.75),N=new k(-5.8,0,-2.9),H=new k(-3.1,0,-2.9),ot=new k(-3.1,0,-.75);P(V,N),P(N,H),P(H,ot),L.push(te(Zt(new Ue(1,.18,.35),"#7A4E25"),-4.45,.09,-2.55)),L.push(te(Zt(new Ue(.9,.06,.28),"#D8C26A"),-4.45,.2,-2.55)),L.push(te(Zt(new Ue(1.75,.46,.06),"#7A4A22"),0,2.66,-2.8+1.25));for(let Xt=0;Xt<9;Xt++){let Ot=Xt/9*_e;L.push(te(Zt(new pi(.11,0),(ye,Ae,Qe)=>Ye(ye,"#7D776C","#B5AFA2",Qe*4+.5)),G.x+Math.cos(Ot)*.42,.06,G.z+Math.sin(Ot)*.42,Xt,Xt*2,0,1,.7,1))}for(let Xt=0;Xt<3;Xt++){let Ot=Xt/3*Math.PI;L.push(te(Zt(new me(.05,.05,.62,6),(ye,Ae,Qe)=>ye.set(Math.abs(Qe)>.27?"#C9A36B":"#4A2E18")),G.x,.1,G.z,0,Ot,Math.PI/2-.25))}let Tt=new Pt(yn(L),new $e({vertexColors:!0,side:Xe}));Tt.castShadow=!0,Tt.receiveShadow=!0,ce.add(Tt);let et=new Pt(new Un(1.62,.38),new $e({map:Et(i.sign||"\u062E\u064A\u0645\u0629 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",512,128,64),emissive:"#3B2410",emissiveIntensity:.25}));et.position.set(0,2.66,-2.8+1.29),ce.add(et);let at=new Te,Nt=new Pt(new me(.07,.07,.16,8),new ln({color:"#FFD36B"})),Dt=new Ei(new fi({map:p,color:"#FFC14D",transparent:!0,opacity:.75,depthWrite:!1,blending:mi}));Dt.scale.setScalar(.9),at.add(Nt,Dt),at.position.set(0+1.68,1.72,-2.8+2.55),ce.add(at),ee.lantern=at;let re=Xt=>new ln({color:Xt,transparent:!0,opacity:.9,depthWrite:!1,blending:mi});[["#FF5A1F",.2,.55,0],["#FF9A2E",.15,.45,.07],["#FFE07A",.09,.3,-.05]].forEach(([Xt,Ot,ye,Ae],Qe)=>{let We=new Pt(new Fn(Ot,ye,10,1,!0),re(Xt));We.position.set(G.x+Ae,.12+ye/2,G.z-Ae),We.userData={h0:ye,i:Qe},ce.add(We),ee.flames.push(We)});let Wt=new Ei(new fi({map:p,color:"#FF8A2E",transparent:!0,opacity:.6,depthWrite:!1,blending:mi}));Wt.position.set(G.x,.45,G.z),Wt.scale.setScalar(1.8),ce.add(Wt),ee.glows.push(Wt);let le=new Te,pe=new Pt(new Ln([new ct(.001,0),new ct(.1,0),new ct(.115,.02),new ct(.1,.09),new ct(.06,.14),new ct(.045,.2),new ct(.06,.24),new ct(.075,.26),new ct(.04,.3),new ct(.012,.34),new ct(.02,.36),new ct(.001,.37)],20),jt);le.add(pe),le.position.set(G.x-.75,.12,G.z+.35),ce.add(le);let we=Yi(256,160,(Xt,Ot,ye)=>{Xt.fillStyle="#8E1B26",Xt.fillRect(0,0,Ot,ye),Xt.fillStyle="#1F2F5C",Xt.fillRect(10,10,Ot-20,ye-20),Xt.fillStyle="#8E1B26",Xt.fillRect(20,20,Ot-40,ye-40),Xt.strokeStyle="#E8C170",Xt.lineWidth=3,Xt.strokeRect(16,16,Ot-32,ye-32);let Ae=(Qe,We,Bn,$n)=>{Xt.fillStyle=$n,Xt.beginPath(),Xt.moveTo(Qe,We-Bn),Xt.lineTo(Qe+Bn*1.5,We),Xt.lineTo(Qe,We+Bn),Xt.lineTo(Qe-Bn*1.5,We),Xt.closePath(),Xt.fill()};Ae(Ot/2,ye/2,44,"#1F2F5C"),Ae(Ot/2,ye/2,30,"#E8C170"),Ae(Ot/2,ye/2,16,"#8E1B26"),Ae(Ot/2,ye/2,6,"#F4EFE6")}),Pe=new Pt(new Un(2,1.25),new $e({map:we}));Pe.rotation.x=-Math.PI/2,Pe.rotation.z=.04,Pe.position.set(0-.2,.02,-2.8+1.9),Pe.receiveShadow=!0,ce.add(Pe)}let de=new Te;{let X=new Pt(new eo(.95,1.18,48),new ln({color:"#FFD23F",transparent:!0,opacity:.9,depthWrite:!1,side:Xe}));X.rotation.x=-Math.PI/2,X.position.y=.03;let tt=new Pt(new ni(.95,40),new ln({color:"#FFE38A",transparent:!0,opacity:.25,depthWrite:!1}));tt.rotation.x=-Math.PI/2,tt.position.y=.025;let G=new Pt(new Fn(.2,.42,4),new zn({color:"#FFB703",emissive:"#FF8A00",emissiveIntensity:.6,shininess:80}));G.rotation.x=Math.PI,G.position.y=1.9,de.add(X,tt,G),de.userData={ring:X,arrow:G},de.visible=!1,a.add(de)}function Z(X){let tt=X==="wolf",G=new Te,L=new Te;G.add(L);let Q=Ee(tt?"#7E8088":"#4E3626",{shininess:8}),lt=Ee(tt?"#C9CACF":"#6E5038",{shininess:8}),ft=Ee(tt?"#3E4048":"#2B1D12",{shininess:20}),bt=tt?.95:1,dt=tt?.72:.62,xt=tt?.22:.33,It=new Pt(new Fe(1,22,14),Q);It.scale.set(bt/2,xt,xt*(tt?.85:.9)),It.position.y=dt,L.add(It);let St=new Pt(new Fe(1,16,10),lt);if(St.scale.set(bt/2.3,xt*.6,xt*.75),St.position.set(0,dt-xt*.4,0),L.add(St),!tt){let et=new Pt(new Ue(bt*.8,.12,.08),ft);et.position.set(0,dt+xt*.95,0),L.add(et)}let x=new Te;x.position.set(bt/2+.05,dt+(tt?.16:0),0),L.add(x);let P=new Pt(new Fe(tt?.16:.2,16,12),Q);P.scale.set(1.2,.95,.9),x.add(P);let V=new Pt(new me(tt?.05:.09,tt?.09:.13,tt?.26:.22,10),tt?lt:Q);V.rotation.z=-Math.PI/2,V.position.set(tt?.24:.25,-.04,0),x.add(V);let N=new Pt(new Fe(tt?.035:.07,10,8),ft);N.position.set(tt?.37:.36,-.03,0),tt||N.scale.set(.5,1,1.1),x.add(N);for(let et of[-1,1]){let at=new Pt(new Fe(.025,8,6),new ln({color:tt?"#F2C14E":"#1A0E08"}));at.position.set(.12,.06,et*.09),x.add(at);let Nt=new Pt(new Fn(tt?.06:.05,tt?.16:.1,6),Q);if(Nt.position.set(-.02,tt?.17:.15,et*.08),Nt.rotation.set(et*.25,0,tt?-.1:.4),x.add(Nt),!tt){let Dt=new Pt(new Fn(.018,.12,6),Ee("#F4EFE6"));Dt.position.set(.36,-.04,et*.08),Dt.rotation.z=.6,x.add(Dt)}}let H=new Te;H.position.set(-bt/2,dt+.05,0),L.add(H);let ot=new Pt(tt?new Ti(.06,.36,4,8):new me(.015,.02,.18,6),Q);ot.position.y=tt?-.2:-.09,H.add(ot),H.rotation.z=tt?.9:.4;let Tt=[];for(let[et,at]of[[bt*.33,1],[-bt*.33,0]])for(let Nt of[-1,1]){let Dt=new Te;Dt.position.set(et,dt-xt*.4,Nt*xt*.55),L.add(Dt);let re=new Pt(new me(.045,.06,(dt-xt*.4)*.55,8),Q);re.position.y=-((dt-xt*.4)*.55)/2,Dt.add(re);let Wt=new Te;Wt.position.y=-(dt-xt*.4)*.55,Dt.add(Wt);let le=new Pt(new me(.03,.04,(dt-xt*.4)*.45,8),tt?Q:ft);le.position.y=-((dt-xt*.4)*.45)/2,Wt.add(le),Tt.push({hip:Dt,knee:Wt,front:at,s:Nt})}return cr(G),a.add(G),{root:G,body:L,head:x,tail:H,legs:Tt,yaw:0}}let Le=e.beasts.map(X=>({e:X,m:Z(X.kind)})),K=(()=>{let X=new Te,tt=new Te;X.add(tt);let G=Ee("#D9A066",{shininess:18}),L=Ee("#ECCB9C",{shininess:18}),Q=Ee("#3B2A1A",{shininess:40}),lt=[[-.56,0],[-.54,.1],[-.48,.17],[-.36,.2],[-.18,.18],[0,.185],[.18,.21],[.32,.215],[.44,.18],[.53,.11],[.57,0]],ft=new Ln(lt.map(([et,at])=>new ct(at,et)),36);{let et=ft.attributes.position;for(let at=0;at<et.count;at++){let Nt=et.getX(at),Dt=et.getY(at),re=et.getZ(at),Wt=Math.exp(-(((Dt+.1)/.22)**2));Nt<0&&(Nt*=1-Wt*.28),et.setXYZ(at,Dt,-Nt*(Nt<0?.95:1.05),re*.82)}ft.computeVertexNormals()}ft=Zt(ft,(et,at,Nt)=>{let Dt=Nt/.21;Dt<-.45?et.set("#FFF6E8"):Dt<-.15?Ye(et,"#6A3F1F","#8A5528",(Dt+.45)/.3):Ye(et,"#D9A066","#C58A50",(Dt-.3)*1.5),at<-.46&&Dt<.55&&et.set("#FFF6E8")});let bt=new Pt(ft,Ee("#FFFFFF",{vertexColors:!0,shininess:22}));bt.position.y=.8,tt.add(bt);let dt=new Te;dt.position.set(-.56,.86,0);let xt=new Pt(new Ti(.025,.1,3,6),Ee("#2B1D12"));xt.position.y=-.06,dt.add(xt),dt.rotation.z=.5,tt.add(dt);let It=new Te;It.position.set(.42,.88,0),tt.add(It);let St=new Pt(new me(.055,.1,.5,14),G);St.position.y=.23,St.scale.z=.85,It.add(St);let x=new Pt(new me(.036,.06,.42,10),Ee("#FFF6E8"));x.position.set(.04,.21,0),x.rotation.z=-.08,It.add(x),It.rotation.z=-.6;let P=new Te;P.position.set(0,.49,0),P.scale.setScalar(1.12),It.add(P);let V=new Pt(new Fe(.11,24,16),G);V.scale.set(1.35,.9,.82),P.add(V);let N=new Pt(new Fe(.075,18,12),L);N.position.set(.14,-.045,0),N.scale.set(1.25,.8,.85),P.add(N);let H=new Pt(new Fe(.03,10,8),Q);H.position.set(.225,-.035,0),P.add(H);for(let et of[-1,1]){let at=new Pt(new Fe(.026,12,10),Ee("#120C08",{shininess:160,specular:"#FFFFFF"}));at.position.set(.035,.035,et*.083),P.add(at);let Nt=new Pt(new Fe(.07,12,8),G);Nt.scale.set(.45,1.25,.25),Nt.position.set(-.08,.1,et*.08),Nt.rotation.set(et*.6,0,.6),P.add(Nt);let Dt=new Xn([new k(-.02,.07,et*.035),new k(-.09,.22,et*.07),new k(-.07,.38,et*.085),new k(0,.47,et*.06)]),re=new Hi(Dt,18,.019,7);{let Wt=re.attributes.position,le=8;for(let pe=0;pe<=18;pe++){let we=Dt.getPointAt(pe/18),Pe=1-pe/18*.7;for(let Xt=0;Xt<le;Xt++){let Ot=pe*le+Xt;Wt.setXYZ(Ot,we.x+(Wt.getX(Ot)-we.x)*Pe,we.y+(Wt.getY(Ot)-we.y)*Pe,we.z+(Wt.getZ(Ot)-we.z)*Pe)}}re.computeVertexNormals()}P.add(new Pt(Zt(re,(Wt,le,pe)=>Wt.set(Math.floor(pe*55)%2?"#3B2A1A":"#5A4330")),Ee("#FFFFFF",{vertexColors:!0,shininess:50})))}let ot=new rn;ot.position.set(0,.38,0),It.add(ot);let Tt=[];for(let[et,at]of[[.34,1],[-.38,0]])for(let Nt of[-1,1]){let Dt=new Te;Dt.position.set(et,.76,Nt*.09),tt.add(Dt);let re=new Pt(new Fe(at?.075:.1,12,10),G);re.scale.set(at?1.1:1.15,at?1.7:1.6,at?.6:.55),re.position.set(0,at?-.05:-.07,0),Dt.add(re);let Wt=new Pt(new me(at?.026:.03,at?.04:.055,.36,10),G);Wt.position.y=-.2,Dt.add(Wt);let le=new Te;le.position.y=-.38,Dt.add(le),le.add(new Pt(new Fe(.024,8,6),L));let pe=new Pt(new me(.014,.02,.34,8),L);pe.position.y=-.17,le.add(pe);let we=new Pt(new me(.017,.024,.045,8),Ee("#20150D",{shininess:60}));we.position.y=-.355,le.add(we),Tt.push({hip:Dt,knee:le,front:at,s:Nt})}return cr(X),a.add(X),{root:X,body:tt,neck:It,head:P,tail:dt,legs:Tt,collar:ot,yaw:-.25,neckA:-.6}})(),ht=hr();a.add(ht.root);let Y=null;function Qt(X){if(!(Y&&Y.id===X.id)){if(Y)for(let tt of[Y.root,Y.chute,Y.drop,Y.rope])a.remove(tt);Y=Qd(X,p),a.add(Y.root,Y.chute,Y.drop,Y.rope),Y.turn=0,Y.blink=0,Y.nextBlink=2}}function Rt(){let X=o.vq.camp;ce.position.set(r.x+X.x,r.VF+X.base,r.z+X.z),ce.rotation.y=X.rot,de.position.set(o.vq.zoneW.x,t.H(o.vq.zoneW.x,o.vq.zoneW.z),o.vq.zoneW.z),ht.root.rotation.y=X.rot,ht.yaw=X.rot}let Ut=[],F=[];{let X=new Ve;X.setAttribute("position",new Ne(new Float32Array([0,0,0,.9,0,-.25,.9,0,.25]),3)),X.computeVertexNormals();let tt=new ln({color:"#34406A",side:Xe});for(let lt=0;lt<9;lt++){let ft=new Te,bt=new Pt(X,tt),dt=new Pt(X,tt);dt.scale.x=-1,ft.add(bt,dt);let xt=lt<5;ft.userData={ph:h()*6,sp:.25+h()*.2,y:xt?r.VF+26+h()*14:70+h()*40,cx:xt?r.x+15+h()*90:(h()-.5)*300,cz:xt?r.z+(h()-.5)*20:(h()-.5)*300,rad:10+h()*18,l:bt,r:dt},Ut.push(ft),a.add(ft)}let G=new ii;G.moveTo(0,0),G.bezierCurveTo(.05,.1,.16,.12,.15,.02),G.bezierCurveTo(.16,-.05,.08,-.1,0,-.02);let L=new Vi(G,6),Q=["#FF8FD1","#FFD23F","#8FD6FF","#FFFFFF","#FF9E5E","#B28DFF"];for(let lt=0;lt<22;lt++){let ft=new $e({color:Q[lt%Q.length],side:Xe,emissive:Q[lt%Q.length],emissiveIntensity:.25}),bt=new Te,dt=new Pt(L,ft),xt=new Pt(L,ft);xt.scale.x=-1,bt.add(dt,xt),bt.userData={l:dt,r:xt,ax:r.x+6+h()*108,az:r.z+(h()-.5)*16,ph:h()*6},F.push(bt),a.add(bt)}}let v={yaw:0,pitch:.26,dist:5.6,init:!1,tgt:new k,pos:new k,scopeYaw:0,scopePitch:-.38,effPitch:null,effDist:null},st=new k,ut=new k;function _t(X){let tt=o.hero;if(!tt)return;if(o.scope){let V=s.x+ue+4.75,N=mt+1.45,H=s.z,ot=v.scopeYaw,Tt=v.scopePitch;v.pos.set(V,N,H),v.tgt.set(V+Math.cos(ot)*100*Math.cos(Tt),N+Math.sin(Tt)*100,H+Math.sin(ot)*100*Math.cos(Tt));return}let G=o.focus,L=tt.mode==="lift"||tt.mode==="carry",Q=tt.mode==="glide";st.set(G&&G.x!=null?G.x:tt.x,tt.y+(L||Q?.6:1.45),G&&G.z!=null?G.z:tt.z),G&&(v.yaw=gn(v.yaw,G.yaw,2.2,X)),tt.mode==="carry"&&(v.yaw=gn(v.yaw,Math.atan2(tt.z-v.pos.z,tt.x-v.pos.x),1.5,X));let lt=G?G.dist:tt.mode==="carry"?11:L?7:Q?9:o.summit?6.4:5.6;v.init||(v.tgt.copy(st),v.dist=lt,v.effPitch=null,v.effDist=null,v.init=!0);let ft=tt.mode==="faint"?2:L?6:14;v.tgt.x=He(v.tgt.x,st.x,ft,X),v.tgt.z=He(v.tgt.z,st.z,ft,X),v.tgt.y=He(v.tgt.y,st.y,tt.air&&!L&&!Q?6:10,X),v.dist=He(v.dist,lt,3,X);let bt=(V,N)=>ut.set(v.tgt.x-Math.cos(v.yaw)*Math.cos(N)*V,v.tgt.y+Math.sin(N)*V,v.tgt.z-Math.sin(v.yaw)*Math.cos(N)*V),dt=!1,xt=(V,N)=>{dt=!1;for(let H=1;H<=8;H++){let ot=H/8;bt(V*ot,N);let Tt=t.H(ut.x,ut.z);if(ut.y<Tt+.4||!L&&t.tallNear(ut.x,ut.z,et=>{let at=ut.x-et.x,Nt=ut.z-et.z,Dt=at*at+Nt*Nt,re=et.r+.3;if(et.tree&&Dt<re*re&&ut.y<Tt+12)return dt=!0,!0;let Wt=et.r*(et.tree?3.4:1.2);return H>=2&&!o.summit&&Dt<Wt*Wt&&ut.y>Tt+1.9&&ut.y<Tt+9}))return ot}return 0},It=L?.35:Q?Math.max(v.pitch,.42):v.pitch,St=v.dist,x=xt(St,It);if(x&&!dt){let V=Math.min(It,.04),N=xt(St,V);(!N||N>x)&&(It=V,x=N)}x&&(St=Math.max(1.8,St*(x-1/8))),v.effPitch=v.effPitch==null?It:He(v.effPitch,It,It<v.effPitch?8:2.5,X),v.effDist=v.effDist==null?St:He(v.effDist,St,St<v.effDist?10:2.5,X),bt(Math.min(v.effDist,St+.6),v.effPitch),t.tallNear(ut.x,ut.z,V=>{let N=ut.x-V.x,H=ut.z-V.z,ot=N*N+H*H,Tt=V.r+.35;if(ot<Tt*Tt){let et=Math.sqrt(ot)||.01;ut.x=V.x+N/et*Tt,ut.z=V.z+H/et*Tt}return!1});let P=t.H(ut.x,ut.z)+.4;ut.y<P&&(ut.y=P),v.pos.copy(ut)}let Bt=()=>(v.yaw*180/Math.PI%360+360)%360,Vt=0,yt=-1,Mt=0,qt=0,ae=2,W=390,At=844,zt=new rn;zt.rotation.order="YXZ";let Yt=new k,ne=new k;function ie(X,tt,G){W=X,At=tt,ae=G,n.setPixelRatio(G),n.setSize(X,tt,!1),c.aspect=X/tt,c.updateProjectionMatrix()}let Me=X=>Math.PI/2-X;function Gt(X,tt){let G=o.hero,L=Y,Q=G.mode==="walk"&&!G.air,lt=Q?Math.abs(Math.sin(G.hopPh))*(G.run?.17:.08):0;L.root.position.set(G.x,G.y+lt,G.z),L.turn=gn(L.turn,Me(G.face),14,tt),L.root.rotation.y=L.turn;let ft=G.mode==="faint";L.inner.rotation.z=ft?-Math.PI/2*Math.min(1,G.faintT*4):-G.rot;let bt=G.landT>0?G.landT*2.4:0;G.air&&G.mode==="walk"&&(bt=-.12),Q&&G.speed>.3&&(bt+=(1-Math.abs(Math.sin(G.hopPh)))*.22-.07),L.inner.scale.set(1+.2*bt,1-.22*bt,1+.2*bt),L.inner.position.y=.55*(1-.22*bt);for(let[St,x]of L.feet.entries())x.position.y=-.49+(Q&&G.speed>.3?Math.max(0,Math.sin(G.hopPh*2+St*Math.PI))*.06:0);let dt=G.mode!=="walk"&&G.mode!=="glide"||G.stun>0||G.air&&G.vy<-7||o.wind>.5;L.nextBlink-=tt,L.nextBlink<0&&(L.blink=.14,L.nextBlink=2.5+Math.random()*2.5),L.blink=Math.max(0,L.blink-tt);for(let St of L.eyes)St.scale.set(dt?1.08:1,dt?1.15:L.blink>0||ft?.12:1,1);for(let St of L.pupils)St.scale.setScalar(dt?.72:1);L.smile.visible=!dt,L.ooh.visible=dt,L.acc.userData.star&&(L.acc.userData.star.rotation.y=X*2);for(let St of[-1,1]){let x=L.acc.userData["tail"+St];x&&(x.rotation.x=.5+Math.sin(X*12+St)*.25)}if(L.fire){L.bodyMat.emissiveIntensity=.5+Math.sin(X*13)*.1;for(let St of L.flames)St.scale.set(1,.8+Math.sin(X*14+St.userData.ph*1.7)*.25,1)}let xt=L.chute;if(xt.visible=G.chute>.01,xt.visible){xt.position.copy(L.root.position),xt.rotation.y=L.root.rotation.y;let St=G.chute,x=St<1?en(.15,1,St)+Math.sin(St*Math.PI)*.12:1;L.canopyHolder.scale.set(x,en(.4,1,St),x),L.canopyHolder.position.y=en(1,2.25,St),xt.rotation.z=-(Math.hypot(G.vx,G.vz)*.05)+Math.sin(X*1.5)*.05,xt.rotation.x=Math.sin(X*1.1)*.05;let P=L.lines.geometry.attributes.position,V=L.canopyHolder.position.y,N=1.7*Math.sin(Math.PI*.42)*x,H=V+1.7*Math.cos(Math.PI*.42)*.62*en(.4,1,St);for(let ot=0;ot<10;ot++){let Tt=ot/10*_e,et=ot%2?.22:-.22;P.setXYZ(ot*2,Math.cos(Tt)*N,H,Math.sin(Tt)*N),P.setXYZ(ot*2+1,et,.85,0)}P.needsUpdate=!0}let It=o.drop;if(L.drop.visible=!!(It&&It.t<2.4),L.drop.visible){let St=Ie(1-It.t*1.2,.1,1);L.drop.position.set(It.x,t.H(It.x,It.z)+.02,It.z),L.drop.scale.set(1.05,.62*St,1.05),L.drop.material.opacity=Ie(1-(It.t-1.4),0,1)}}function De(X,tt){for(let{e:G,m:L}of Le){let Q=(G.x-c.position.x)**2+(G.z-c.position.z)**2>19600;if(L.root.visible=!Q,Q)continue;let lt=G.speed>.3,ft=G.state==="chase"||G.state==="charge";L.root.position.set(G.x,G.y,G.z),L.yaw=gn(L.yaw,-G.face,10,tt),L.root.rotation.y=L.yaw,L.body.position.y=lt?Math.abs(Math.sin(G.ph))*(ft?.06:.02):0,L.head.rotation.z=G.state==="notice"?-.25+Math.sin(X*20)*.04:lt?-.1:Math.sin(X*1.3)*.15-.2,L.tail.rotation.z=(G.kind==="wolf"?.9:.4)+(ft?.5:0)+Math.sin(X*(ft?14:3))*.15;for(let bt of L.legs){let dt=bt.front?bt.s>0?0:Math.PI:(bt.s>0?Math.PI:0)+(ft?.6:0);lt?(bt.hip.rotation.z=Math.sin(G.ph+dt)*(ft?.7:.4),bt.knee.rotation.z=(bt.front?-1:1)*Math.max(0,-Math.cos(G.ph+dt))*.5):(bt.hip.rotation.z=He(bt.hip.rotation.z,0,8,tt),bt.knee.rotation.z=He(bt.knee.rotation.z,0,8,tt))}}}function fe(X,tt){let G=e.gz,L=K,Q=G.state,lt=Math.hypot(G.vx,G.vz)>.25;if(L.root.visible=(G.x-c.position.x)**2+(G.z-c.position.z)**2<260*260,!L.root.visible)return;let ft=Q==="flee"||Q==="leap",bt=Q==="tired";L.root.position.set(G.x,G.y,G.z),L.body.position.y=lt?Math.abs(Math.sin(G.ph))*(ft?.07:.025):bt?Math.sin(X*9)*.008:0,L.yaw=gn(L.yaw,-G.face,ft?14:8,tt),L.root.rotation.y=L.yaw,L.body.rotation.z=ft?Math.sin(G.ph*2)*.05:0;let dt=Q==="graze"||Q==="pen"&&!lt;L.neckA=He(L.neckA,dt?-2.05:bt?-1.15:ft?-.95:Q==="alert"||Q==="look"||Q==="cornered"?-.32:-.6,dt?3:7,tt),L.neck.rotation.z=L.neckA,L.head.rotation.z=dt?.5+Math.sin(X*7)*.08:Q==="alert"||Q==="look"?.2:.35,L.head.rotation.y=Q==="look"||Q==="alert"||Q==="cornered"?Math.sin(X*1.6)*.25:0,L.tail.rotation.z=.5+(Q==="alert"||ft?.9:Math.sin(X*3)*.2);let xt=ft?.6:bt?.28:.36,It=Q==="leap";for(let St of L.legs){let x=St.front?St.s>0?0:Math.PI:(St.s>0?Math.PI:0)+(ft?.6:0);if(It){St.hip.rotation.z=St.front?.9:-.9,St.knee.rotation.z=St.front?-1.2:1.1;continue}if(lt){let P=Math.sin(G.ph+x);St.hip.rotation.z=P*xt,St.knee.rotation.z=(St.front?-1:1)*Math.max(0,-Math.cos(G.ph+x))*xt*1.1}else St.hip.rotation.z=He(St.hip.rotation.z,0,8,tt),St.knee.rotation.z=He(St.knee.rotation.z,0,8,tt)}}function se(X,tt,G){let L=ht,Q=o.hero,lt=o.vq,ft=lt.camp,bt=Q.x-lt.merW.x,dt=Q.z-lt.merW.z,xt=Math.hypot(bt,dt);if(L.root.visible=xt<200,!L.root.visible)return;let It=xt<16||!!G,St=It?Math.atan2(bt,dt):ft.rot+.15*Math.sin(X*.3);o.focus&&o.focus.talk&&(St=ft.rot+Ie(Jn(ft.rot,Math.atan2(bt,dt)),-.7,.7)),L.yaw=gn(L.yaw,St,3,tt),L.root.rotation.y=L.yaw,L.root.position.set(lt.merW.x,r.VF+ft.base,lt.merW.z),L.root.scale.y=1+Math.sin(X*1.7)*.007;let x=!!(G&&G.who==="merchant"&&G.shown<[...G.text].length);L.mouth.scale.y=x?.25+Math.abs(Math.sin(X*15))*.9:.3,L.head.rotation.x=x?Math.sin(X*5)*.05:0;let[P,V]=L.arms;if(lt.delivered){for(let N of L.arms)N.sh.rotation.z=He(N.sh.rotation.z,N.s*2.5,6,tt),N.el.rotation.x=He(N.el.rotation.x,-.3+Math.sin(X*9+N.s)*.3,8,tt);L.root.position.y=r.VF+ft.base+Math.abs(Math.sin(X*6))*.06*(o.focus?1:0)}else if(lt.caught&&It)V.sh.rotation.z=He(V.sh.rotation.z,1.35,5,tt),V.el.rotation.x=He(V.el.rotation.x,0,5,tt),V.sh.rotation.x=He(V.sh.rotation.x,-.2,5,tt),P.sh.rotation.z=He(P.sh.rotation.z,-.12,5,tt);else if(It&&xt>2.5)V.sh.rotation.z=He(V.sh.rotation.z,2.55,5,tt),V.el.rotation.x=He(V.el.rotation.x,0,5,tt),V.el.rotation.z=Math.sin(X*8)*.45,V.sh.rotation.x=0,P.sh.rotation.z=He(P.sh.rotation.z,-.12,5,tt);else for(let N of L.arms)N.sh.rotation.z=He(N.sh.rotation.z,N.s*.12,4,tt),N.el.rotation.z=He(N.el.rotation.z,0,4,tt),N.el.rotation.x=He(N.el.rotation.x,-.25,4,tt),N.sh.rotation.x=0}function Oe(){let X=Y.rope;if(X.visible=o.vq.caught&&!o.vq.delivered&&K.root.visible,!X.visible)return;Y.root.updateMatrixWorld(),K.root.updateMatrixWorld();let tt=o.hero,G=Yt.set(tt.x-Math.cos(tt.face)*.3,Y.root.position.y+.5,tt.z-Math.sin(tt.face)*.3),L=K.collar.getWorldPosition(ne),Q=G.clone().lerp(L,.5);Q.y=Math.min(G.y,L.y)-.25,X.geometry.dispose(),X.geometry=new Hi(new _s(G.clone(),Q,L.clone()),18,.016,5)}function dn(X,tt){let G=o.wind,L=rt.flag.geometry.attributes.position,Q=rt.flagBase;for(let x=0;x<L.count;x++){let P=Q[x*3],V=Q[x*3+1],N=P/3.2;L.setXYZ(x,P*(1-G*.05),V-N*N*.25*(1-G),Math.sin(X*(4+G*12)-P*(1.6+G*1.5))*N*(.18+G*.42)+Math.sin(X*7+V*3)*.04*N)}L.needsUpdate=!0,rt.flag.geometry.computeVertexNormals(),rt.flag.rotation.y=-.3*G;let lt=rt.bell;lt.v+=(-lt.swing*18-lt.v*1.4)*tt,lt.swing+=lt.v*tt,lt.g.rotation.x=lt.swing+G*.25*Math.sin(X*6);for(let x of rt.lanterns)x.rotation.z=Math.sin(X*(1.6+G*8)+x.position.x)*(.06+G*.45),x.rotation.x=Math.cos(X*(1.3+G*7))*G*.3;let ft=rt.drops.geometry.attributes.position,bt=rt.drops.userData.seed;for(let x=0;x<bt.length;x++){let[P,V,N]=bt[x],H=(X*N*.9+V)%1,ot=.15+H*1.6;ft.setXYZ(x,Math.cos(P)*ot+G*H*3.5,2.35+Math.sin(H*Math.PI)*.7-H*1.8,Math.sin(P)*ot+G*H*1.2)}ft.needsUpdate=!0,g.offset.x=X*.03,rt.water.material.normalScale.set(.6+G,.6+G);let dt=rt.streaks.geometry.attributes.position,xt=rt.streaks.userData.seed;rt.streaks.material.opacity=Se(.15,.8,G)*.55;for(let x=0;x<xt.length;x++){let[,P,V,N]=xt[x],H=(X*N*(.6+G*1.6)+x*.137)%1,ot=-30+H*60,Tt=1.5+G*3.5,et=V+Math.sin(X*2+x)*.6,at=P+Math.sin(H*9+x)*.4;dt.setXYZ(x*2,ot,at,et+H*12-6),dt.setXYZ(x*2+1,ot-Tt,at+.05,et+H*12-6-Tt*.3)}dt.needsUpdate=!0;let It=rt.leaves.geometry.attributes.position,St=rt.leaves.userData.seed;rt.leaves.material.opacity=G*.9;for(let x=0;x<St.length;x++){let[P,V,N,H]=St[x],ot=X*(.5+H)*(.4+G)%1;It.setXYZ(x,(P+ot*70)%60-30,V*.6+.4+Math.sin(X*3+x)*.5,N+Math.sin(X+H*6)*2+ot*6)}It.needsUpdate=!0;for(let x of Ct){let P=x.m,[V,N]=P.arms,H=1-Math.exp(-6*tt);P.root.scale.y=1+Math.sin(X*1.6+x.base.x)*.006,P.root.rotation.x=-G*.14+Math.sin(X*9+x.base.x)*G*.03;let ot=0,Tt=-.12,et=-.25,at=0,Nt=.12,Dt=-.25;if(G>.25&&(ot=-2.4,Tt=0,et=-1.3),x.kind==="seller")at=-.5+Math.sin(X*2)*.1,Dt=-1.2,x.pour>0&&(x.pour-=tt,at=-1,Dt=-.6);else if(x.kind==="tea"){let re=Math.max(0,Math.sin(X*.5+x.ph))**8;at=-.45-re*.7,Dt=-1.25-re*.9}else x.kind==="stand"&&(ot=G>.25?ot:-.2,at=-.15+Math.sin(X*1.1)*.25*(x.talk>0?1:.3),Dt=-.6);V.sh.rotation.x+=(ot-V.sh.rotation.x)*H,V.sh.rotation.z+=(Tt-V.sh.rotation.z)*H,V.el.rotation.x+=(et-V.el.rotation.x)*H,N.sh.rotation.x+=(at-N.sh.rotation.x)*H,N.sh.rotation.z+=(Nt-N.sh.rotation.z)*H,N.el.rotation.x+=(Dt-N.el.rotation.x)*H,P.mouth.scale.y=x.talk>0?.25+Math.abs(Math.sin(X*15))*.9:.3,x.talk>0&&(x.talk-=tt)}}let oi=-1;function wo(X,tt={}){let G=performance.now(),L=Vt?Ie((G-Vt)/1e3,0,.1):1/60;Vt=G;let Q=yt>=0?Ie(X-yt,0,.1):1/60;yt=X,u.time.value=X,u.wind.value=He(u.wind.value,o.wind,3,Q),qt++,Mt=Mt*.97+(L>1/38?1:0)*.03,qt>90&&Mt>.6&&ae>1.01&&(ie(W,At,Math.max(1,ae-.25)),Mt=0,qt=0);let lt=o.hero;if(!lt||!Y)return;oi!==o.vq.camp&&(Rt(),oi=o.vq.camp),D(tt.budget!=null?tt.budget:4,lt.x,lt.z),Gt(X,Q),De(X,Q),fe(X,Q),se(X,Q,tt.dlg),Oe(),(s.rad(c.position.x,c.position.z)<120||o.scope)&&dn(X,Q);let ft=0;for(let et=0;et<o.coins.length&&ft<he;et++){let at=o.coins[et];at.taken||(at.x-lt.x)**2+(at.z-lt.z)**2>3600||(zt.position.set(at.x,at.y+Math.sin(X*2+et)*.08,at.z),zt.rotation.set(Math.PI/2,X*3+et,0),zt.scale.setScalar(1),zt.updateMatrix(),$t.setMatrixAt(ft++,zt.matrix))}$t.count=ft,$t.instanceMatrix.needsUpdate=!0;for(let[et,at]of Lt)at.rotation.y=Math.sin(X*2+at.position.x)*.3,at.material.color.set(o.reached.has(et)?"#FFD23F":"#F4F1EA");if(de.visible=o.vq.caught&&!o.vq.delivered,de.visible){let et=.5+.5*Math.sin(X*5);de.userData.ring.scale.setScalar(1+et*.08),de.userData.arrow.position.y=1.9+et*.25,de.userData.arrow.rotation.y=X*2}for(let et of ee.flames){let at=.75+Math.sin(X*13+et.userData.i*2)*.18;et.scale.set(1,at,1),et.position.y=.12+et.userData.h0*at/2}for(let et of ee.glows)et.material.opacity=.5+Math.sin(X*11)*.08;ee.lantern.rotation.z=Math.sin(X*1.6)*.08;let bt=Math.abs(c.position.x-(r.x+60))<160&&Math.abs(c.position.z-r.z)<90;for(let et of F){if(et.visible=bt,!bt)continue;let at=et.userData,Nt=at.ax+Math.sin(X*.45+at.ph)*2.2,Dt=at.az+Math.sin(X*.7+at.ph*2)*.9;et.position.set(Nt,t.H(Nt,Dt)+.7+Math.sin(X*1.3+at.ph)*.35,Dt),et.rotation.y=Math.cos(X*.45+at.ph)>0?-Math.PI/2:Math.PI/2;let re=Math.sin(X*22+at.ph)*1.1;at.l.rotation.y=re,at.r.rotation.y=-re}for(let et of Ut){let at=et.userData,Nt=X*at.sp+at.ph;et.position.set(at.cx+Math.cos(Nt)*at.rad,at.y+Math.sin(X+at.ph)*.8,at.cz+Math.sin(Nt)*at.rad),et.rotation.y=-Nt;let Dt=Math.sin(X*8+at.ph)*.6;at.l.rotation.z=Dt,at.r.rotation.z=-Dt}_t(Q);let dt=s.rad(lt.x,lt.z),xt=Se(195,170,dt)*Se(78,62,lt.y),It=Se(50,95,lt.y)*Se(200,120,dt),St=o.scope?380:en(en(70,22,xt),110,It),x=o.scope?1500:en(en(430,120,xt),900,It);if(a.fog.near=He(a.fog.near,St,2,Q),a.fog.far=He(a.fog.far,x,2,Q),rt.scope.visible=!o.scope,c.fov=o.scope?13:62,c.updateProjectionMatrix(),c.position.copy(v.pos),c.lookAt(v.tgt),tt.shake>0){let et=tt.shake*.25;c.position.x+=(Math.random()-.5)*et,c.position.y+=(Math.random()-.5)*et}w.position.copy(c.position);let P=c.position.x,V=c.position.z,N=(o.scope?500:0)+Se(40,95,c.position.y)*160;for(let et of I){let at=(et.x-P)**2+(et.z-V)**2,Nt=et.small?et.far:et.far+N,Dt=at<Nt*Nt;if(et.lo){let re=at<et.lodAt*et.lodAt&&!o.scope;et.m.visible=Dt&&re,et.lo.visible=Dt&&!re}else et.m.visible=Dt}let H=o.scope?0:150;for(let et of q){let at=(et.x-P)**2+(et.z-V)**2,Nt=et.hi&&at<H*H;et.hi&&(et.hi.visible=Nt),et.lo.visible=!Nt}let ot=Math.round(lt.x/.25)*.25,Tt=Math.round(lt.z/.25)*.25;m.target.position.set(ot,lt.y,Tt),m.position.set(ot+d.x*90,lt.y+d.y*90,Tt+d.z*90),n.render(a,c)}let Ii=new k;function Wl(X,tt,G){return Ii.set(X,tt,G).project(c),{x:(Ii.x+1)/2,y:(1-Ii.y)/2,vis:Ii.z<1&&Ii.z>-1}}function Ao(X=160){a.updateMatrixWorld();let tt=new k;ht.head.getWorldPosition(tt);let G=n.domElement.width,L=n.domElement.height,Q=new En(28,G/L,.05,1200),lt=new k(Math.sin(ht.root.rotation.y),0,Math.cos(ht.root.rotation.y));Q.position.copy(tt).addScaledVector(lt,1.75).add(new k(0,.05,0)),Q.lookAt(tt.x,tt.y-.02,tt.z),w.position.copy(Q.position),m.target.position.copy(tt),m.position.set(tt.x+d.x*60,tt.y+d.y*60,tt.z+d.z*60);let ft=[Y&&Y.root.visible,K.root.visible];Y&&(Y.root.visible=!1),K.root.visible=!1;for(let xt of q)xt.lo.visible=!0,xt.hi&&(xt.hi.visible=!1);n.render(a,Q),Y&&(Y.root.visible=ft[0]),K.root.visible=ft[1];let bt=document.createElement("canvas");bt.width=bt.height=X;let dt=Math.min(G,L);return bt.getContext("2d").drawImage(n.domElement,(G-dt)/2,(L-dt)/2,dt,dt,0,0,X,X),bt.toDataURL("image/jpeg",.9)}function Eo(X=1024){D(1e9);let tt=new vs(-y,y,y,-y,1,900);tt.position.set(0,600,0),tt.up.set(1,0,0),tt.lookAt(0,0,0);let G=[ce,ht.root,K.root,$t,de,wt,...Ut,...F,...Le.map(xt=>xt.m.root),...Y?[Y.root,Y.chute,Y.drop,Y.rope]:[]],L=G.map(xt=>xt.visible);G.forEach(xt=>{xt.visible=!1});for(let xt of q)xt.lo.visible=!1,xt.hi.visible=!0;for(let xt of I)xt.m.visible=!xt.small,xt.lo&&(xt.m.visible=!1,xt.lo.visible=!0);let Q=a.fog.near,lt=a.fog.far;a.fog.near=1e5,a.fog.far=2e5;let ft=m.shadow.camera.right;Object.assign(m.shadow.camera,{left:-y,right:y,top:y,bottom:-y}),m.shadow.camera.updateProjectionMatrix(),m.target.position.set(0,0,0),m.position.set(d.x*400,d.y*400,d.z*400);let bt=n.getPixelRatio();n.setPixelRatio(1),n.setSize(X,X,!1),n.render(a,tt);let dt=document.createElement("canvas");return dt.width=dt.height=X,dt.getContext("2d").drawImage(n.domElement,0,0,X,X),n.setPixelRatio(bt),n.setSize(W,At,!1),Object.assign(m.shadow.camera,{left:-ft,right:ft,top:ft,bottom:-ft}),m.shadow.camera.updateProjectionMatrix(),a.fog.near=Q,a.fog.far=lt,G.forEach((xt,It)=>{xt.visible=L[It]}),{canvas:dt,x0:-y,x1:y,z0:-y,z1:y}}return{setSize:ie,render:wo,project:Wl,heading:Bt,cam:v,portrait:Ao,mapShot:Eo,buildHi:D,setHero:Qt,pourTea:()=>{for(let X of Ct)X.kind==="seller"&&(X.pour=1.4,X.talk=3)},talkNpc:X=>{let tt=Ct.filter(G=>G.kind===X);tt.length&&(tt[Math.floor(Math.random()*tt.length)].talk=3)},ringBell:()=>{rt.bell.v+=2.4},renderer:n,scene:a,camera:c,U:u,fx:rt,npcs:Ct,get pr(){return ae},get hiLeft(){return $.length}}}function rf(i,t={}){let e=performance.now(),n=jd(t.map||Eh),s=performance.now()-e,r=nf(n),o=sf({renderer:t.renderer,sign:t.sign},n,r),a=r.S,l=o.cam,c=Math.round(performance.now()-e);function u(m,w={}){o.setHero(m);let p=r.enter(m.id,w);return l.yaw=a.hero.face,l.pitch=w.at==="valley"?.5:.26,l.init=!1,p}function h(m,w={}){a.scope?(l.scopeYaw=Ie(l.scopeYaw+(w.dyaw||0)*.35,-.9,.9),l.scopePitch=Ie(l.scopePitch+(w.dpitch||0)*-.3,-.75,.2)):(l.yaw+=w.dyaw||0,l.pitch=Ie(l.pitch+(w.dpitch||0),.06,1.15));let p=w.jx||0,g=w.jy||0,b=Math.cos(l.yaw),E=Math.sin(l.yaw),A={mx:b*g-E*p,mz:E*g+b*p,mag:w.mag||0,jump:!!w.jump,sneak:!!w.sneak},I=r.step(m,A);for(let C of I)Array.isArray(C)&&C[0]==="respawn"&&(l.yaw=a.hero.face,l.init=!1);return I}function f(m){return m==="scope"?(r.interact("scope"),l.scopeYaw=0,l.scopePitch=-.38,a.scope):m==="tea"?(r.interact("tea"),o.pourTea(),!0):m==="chat"?(o.talkNpc("tea"),!0):m==="bell"?(o.ringBell(),!0):r.interact(m)}return{G:n,sim:r,view:o,S:a,cam:l,enter:u,step:h,interact:f,threats:()=>r.beasts.filter(m=>m.state==="chase"||m.state==="charge"||m.state==="notice").map(m=>({kind:m.kind,x:m.x,y:m.y,z:m.z,state:m.state})),render:o.render,setSize:o.setSize,project:o.project,heading:o.heading,nearInteract:r.nearInteract,skipWait:r.skipWait,objective:r.objective,respawn:r.respawn,mapShot:o.mapShot,portrait:o.portrait,ground:n.H,info:{HALF:n.HALF,M:n.M,V:n.V,rest:n.restPoints,buildMs:c,geoMs:Math.round(s)},renderer:o.renderer,scene:o.scene,camera:o.camera,U:o.U,get pr(){return o.pr}}}return uf(u_);})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
