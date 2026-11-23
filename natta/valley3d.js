/* نطّة — مشهد الوادي 3D. يتضمن three.js r187 (MIT, © 2010-2026 three.js authors) */
var NattaValley3D=(()=>{var El=Object.defineProperty;var gd=Object.getOwnPropertyDescriptor;var _d=Object.getOwnPropertyNames;var xd=Object.prototype.hasOwnProperty;var vd=(i,t)=>{for(var e in t)El(i,e,{get:t[e],enumerable:!0})},yd=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of _d(t))!xd.call(i,s)&&s!==e&&El(i,s,{get:()=>t[s],enumerable:!(n=gd(t,s))||n.enumerable});return i};var Md=i=>yd(El({},"__esModule",{value:!0}),i);var S_={};vd(S_,{create:()=>M_,supported:()=>y_});var Ro="188dev";var Gh=0,uc=1,Vh=2;var ns=1,Hh=2,Vs=3,Hi=0,un=1,Ge=2,is=0,Hs=1,ui=2,dc=3,fc=4,Wh=5;var ss=100,Xh=101,qh=102,Yh=103,Zh=104,Jh=200,$h=201,Kh=202,Qh=203,pc=204,mc=205,jh=206,tu=207,eu=208,nu=209,iu=210,su=211,ru=212,au=213,ou=214,Ha=0,Wa=1,Xa=2,Cs=3,qa=4,Ya=5,Za=6,Ja=7,Zr=0,lu=1,cu=2,di=0,gc=1,_c=2,xc=3,Jr=4,vc=5,yc=6,Mc=7;var Sc=300,rs=301,Ws=302,Io=303,Po=304,Rs=1e3,si=1001,$a=1002,hn=1003,hu=1004;var $r=1005;var bn=1006,Lo=1007;var Ci=1008;var An=1009,bc=1010,wc=1011,Xs=1012,Fo=1013,$n=1014,kn=1015,Kn=1016,Do=1017,No=1018,as=1020,Ac=35902,Ec=35899,Tc=1021,Cc=1022,Qn=1023,bi=1026,Ri=1027,Uo=1028,Oo=1029,Wi=1030,Bo=1031;var zo=1033,Kr=33776,Qr=33777,jr=33778,ta=33779,ko=35840,Go=35841,Vo=35842,Ho=35843,Wo=36196,Xo=37492,qo=37496,Yo=37488,Zo=37489,ea=37490,Jo=37491,$o=37808,Ko=37809,Qo=37810,jo=37811,tl=37812,el=37813,nl=37814,il=37815,sl=37816,rl=37817,al=37818,ol=37819,ll=37820,cl=37821,hl=36492,ul=36494,dl=36495,fl=36283,pl=36284,na=36285,ml=36286;var ur=2300,Ka=2301,Ga=2302,tc=2303,ec=2400,nc=2401,ic=2402;var uu=3200;var ia=0,du=1,Ii="",Sn="srgb",dr="srgb-linear",fr="linear",De="srgb";var Va=7680;var fu=519,pu=512,mu=513,gu=514,Rc=515,_u=516,xu=517,Ic=518,Pc=519,Lc=35044;var Fc="300 es",Fn=2e3,Is=2001;function Sd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}var bd={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};typeof Float16Array<"u"&&(bd.Float16Array=Float16Array);function wd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vu(){let i=pr("canvas");return i.style.display="block",i}var eh={},Ps=null;function mr(...i){let t="THREE."+i.shift();Ps?Ps("log",t,...i):console.log(t,...i)}function yu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=yu(i);let t="THREE."+i.shift();if(Ps)Ps("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ee(...i){i=yu(i);let t="THREE."+i.shift();if(Ps)Ps("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function lr(...i){let t=i.join(" ");t in eh||(eh[t]=!0,jt(...i))}function Mu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Su={[Ha]:Ha,[Xa]:Za,[qa]:qa,[Cs]:Ya,[Wa]:Wa,[Za]:Xa,[Ja]:Ja,[Ya]:Cs},ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Tl=Math.PI/180,Qa=180/Math.PI;function Xi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function ve(i,t,e){return Math.max(t,Math.min(e,i))}function Ad(i,t){return(i%t+t)%t}function Cl(i,t,e){return(1-e)*i+e*t}function bu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function wu(i,t){if(t.constructor===Float32Array)return i;let e=gl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Au(i,t){if(t.constructor===Float32Array)return i;let e=gl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var zc=class zc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zc.prototype.isVector2=!0;var tt=zc,Dn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],d=r[a+0],u=r[a+1],_=r[a+2],b=r[a+3];if(p!==b||l!==d||c!==u||h!==_){let f=l*d+c*u+h*_+p*b;f<0&&(d=-d,u=-u,_=-_,b=-b,f=-f);let m=1-o;if(f<.9995){let y=Math.acos(f),E=Math.sin(y);m=Math.sin(m*y)/E,o=Math.sin(o*y)/E,l=l*m+d*o,c=c*m+u*o,h=h*m+_*o,p=p*m+b*o}else{l=l*m+d*o,c=c*m+u*o,h=h*m+_*o,p=p*m+b*o;let y=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=y,c*=y,h*=y,p*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[a],d=r[a+1],u=r[a+2],_=r[a+3];return t[e]=o*_+h*p+l*u-c*d,t[e+1]=l*_+h*d+c*p-o*u,t[e+2]=c*_+h*u+o*d-l*p,t[e+3]=h*_-o*p-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),p=o(r/2),d=l(n/2),u=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*p+c*u*_,this._y=c*u*p-d*h*_,this._z=c*h*_+d*u*p,this._w=c*h*p-d*u*_;break;case"YXZ":this._x=d*h*p+c*u*_,this._y=c*u*p-d*h*_,this._z=c*h*_-d*u*p,this._w=c*h*p+d*u*_;break;case"ZXY":this._x=d*h*p-c*u*_,this._y=c*u*p+d*h*_,this._z=c*h*_+d*u*p,this._w=c*h*p-d*u*_;break;case"ZYX":this._x=d*h*p-c*u*_,this._y=c*u*p+d*h*_,this._z=c*h*_-d*u*p,this._w=c*h*p+d*u*_;break;case"YZX":this._x=d*h*p+c*u*_,this._y=c*u*p+d*h*_,this._z=c*h*_-d*u*p,this._w=c*h*p-d*u*_;break;case"XZY":this._x=d*h*p-c*u*_,this._y=c*u*p-d*h*_,this._z=c*h*_+d*u*p,this._w=c*h*p+d*u*_;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],p=e[10],d=n+o+p;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>p){let u=2*Math.sqrt(1+n-o-p);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>p){let u=2*Math.sqrt(1+o-n-p);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+p-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},kc=class kc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*h,this.y=n+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rl.copy(this).projectOnVector(t),this.sub(Rl)}reflect(t){return this.sub(Rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kc.prototype.isVector3=!0;var F=kc,Rl=new F,nh=new Dn,Gc=class Gc{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],d=n[2],u=n[5],_=n[8],b=s[0],f=s[3],m=s[6],y=s[1],E=s[4],M=s[7],R=s[2],T=s[5],x=s[8];return r[0]=a*b+o*y+l*R,r[3]=a*f+o*E+l*T,r[6]=a*m+o*M+l*x,r[1]=c*b+h*y+p*R,r[4]=c*f+h*E+p*T,r[7]=c*m+h*M+p*x,r[2]=d*b+u*y+_*R,r[5]=d*f+u*E+_*T,r[8]=d*m+u*M+_*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*a-o*c,d=o*l-h*r,u=c*r-a*l,_=e*p+n*d+s*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/_;return t[0]=p*b,t[1]=(s*c-h*n)*b,t[2]=(o*n-s*a)*b,t[3]=d*b,t[4]=(h*e-s*l)*b,t[5]=(s*r-o*e)*b,t[6]=u*b,t[7]=(n*l-c*e)*b,t[8]=(a*e-n*r)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Il.makeScale(t,e)),this}rotate(t){return lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Il.makeRotation(-t)),this}translate(t,e){return lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Il.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Gc.prototype.isMatrix3=!0;var ce=Gc,Il=new ce,ih=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ed(){let i={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===De&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===De&&(s.r=Ts(s.r),s.g=Ts(s.g),s.b=Ts(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[dr]:{primaries:t,whitePoint:n,transfer:fr,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:t,whitePoint:n,transfer:De,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),i}var Ae=Ed();function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var cs,ja=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{cs===void 0&&(cs=pr("canvas")),cs.width=t.width,cs.height=t.height;let s=cs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=cs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=pr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Si(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Si(e[n]/255)*255):e[n]=Si(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Td=0,Ls=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Xi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Pl(s[a].image)):r.push(Pl(s[a]))}else r=Pl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Pl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ja.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var Cd=0,Ll=new F,wn=class i extends ai{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=si,s=si,r=bn,a=Ci,o=Qn,l=An,c=i.DEFAULT_ANISOTROPY,h=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Xi(),this.name="",this.source=new Ls(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ll).x}get height(){return this.source.getSize(Ll).y}get depth(){return this.source.getSize(Ll).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rs:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case $a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rs:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case $a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Sc;wn.DEFAULT_ANISOTROPY=1;var Vc=class Vc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){let e=ve(t.w,-1,1);this.w=2*Math.acos(e);let n=Math.sqrt(1-e*e);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],d=l[1],u=l[5],_=l[9],b=l[2],f=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-b)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+b)<.1&&Math.abs(_+f)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,M=(u+1)/2,R=(m+1)/2,T=(h+d)/4,x=(p+b)/4,A=(_+f)/4;return E>M&&E>R?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=x/n):M>R?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=A/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=x/r,s=A/r),this.set(n,s,r,e),this}let y=Math.sqrt((f-_)*(f-_)+(p-b)*(p-b)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(f-_)/y,this.y=(p-b)/y,this.z=(d-h)/y,this.w=Math.acos((c+u+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ve(this.x,t.x,e.x),this.y=ve(this.y,t.y,e.y),this.z=ve(this.z,t.z,e.z),this.w=ve(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ve(this.x,t,e),this.y=ve(this.y,t,e),this.z=ve(this.z,t,e),this.w=ve(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ve(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vc.prototype.isVector4=!0;var $e=Vc,to=class extends ai{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new $e(0,0,t,e),this.scissorTest=!1,this.viewport=new $e(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new wn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++){let a=this.textures[s],o=a.images?a.images[0]:a.image;o.width=t,o.height=e,o.depth=n,a.isData3DTexture!==!0&&(a.isArrayTexture=o.depth>1)}this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ls(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends to{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},gr=class extends wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var eo=class extends wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=hn,this.minFilter=hn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Co=class Co{constructor(t,e,n,s,r,a,o,l,c,h,p,d,u,_,b,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,p,d,u,_,b,f)}set(t,e,n,s,r,a,o,l,c,h,p,d,u,_,b,f){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=p,m[14]=d,m[3]=u,m[7]=_,m[11]=b,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Co().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/hs.setFromMatrixColumn(t,0).length(),r=1/hs.setFromMatrixColumn(t,1).length(),a=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let d=a*h,u=a*p,_=o*h,b=o*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=u+_*c,e[5]=d-b*c,e[9]=-o*l,e[2]=b-d*c,e[6]=_+u*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,u=l*p,_=c*h,b=c*p;e[0]=d+b*o,e[4]=_*o-u,e[8]=a*c,e[1]=a*p,e[5]=a*h,e[9]=-o,e[2]=u*o-_,e[6]=b+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,u=l*p,_=c*h,b=c*p;e[0]=d-b*o,e[4]=-a*p,e[8]=_+u*o,e[1]=u+_*o,e[5]=a*h,e[9]=b-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,u=a*p,_=o*h,b=o*p;e[0]=l*h,e[4]=_*c-u,e[8]=d*c+b,e[1]=l*p,e[5]=b*c+d,e[9]=u*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,u=a*c,_=o*l,b=o*c;e[0]=l*h,e[4]=b-d*p,e[8]=_*p+u,e[1]=p,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*p+_,e[10]=d-b*p}else if(t.order==="XZY"){let d=a*l,u=a*c,_=o*l,b=o*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=d*p+b,e[5]=a*h,e[9]=u*p-_,e[2]=_*p-u,e[6]=o*h,e[10]=b*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rd,t,Id)}lookAt(t,e,n){let s=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Li.crossVectors(n,Tn),Li.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Li.crossVectors(n,Tn)),Li.normalize(),ha.crossVectors(Tn,Li),s[0]=Li.x,s[4]=ha.x,s[8]=Tn.x,s[1]=Li.y,s[5]=ha.y,s[9]=Tn.y,s[2]=Li.z,s[6]=ha.z,s[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],d=n[9],u=n[13],_=n[2],b=n[6],f=n[10],m=n[14],y=n[3],E=n[7],M=n[11],R=n[15],T=s[0],x=s[4],A=s[8],U=s[12],P=s[1],V=s[5],q=s[9],k=s[13],Z=s[2],K=s[6],rt=s[10],$=s[14],ht=s[3],et=s[7],ut=s[11],Et=s[15];return r[0]=a*T+o*P+l*Z+c*ht,r[4]=a*x+o*V+l*K+c*et,r[8]=a*A+o*q+l*rt+c*ut,r[12]=a*U+o*k+l*$+c*Et,r[1]=h*T+p*P+d*Z+u*ht,r[5]=h*x+p*V+d*K+u*et,r[9]=h*A+p*q+d*rt+u*ut,r[13]=h*U+p*k+d*$+u*Et,r[2]=_*T+b*P+f*Z+m*ht,r[6]=_*x+b*V+f*K+m*et,r[10]=_*A+b*q+f*rt+m*ut,r[14]=_*U+b*k+f*$+m*Et,r[3]=y*T+E*P+M*Z+R*ht,r[7]=y*x+E*V+M*K+R*et,r[11]=y*A+E*q+M*rt+R*ut,r[15]=y*U+E*k+M*$+R*Et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],d=t[10],u=t[14],_=t[3],b=t[7],f=t[11],m=t[15],y=l*u-c*d,E=o*u-c*p,M=o*d-l*p,R=a*u-c*h,T=a*d-l*h,x=a*p-o*h;return e*(b*y-f*E+m*M)-n*(_*y-f*R+m*T)+s*(_*E-b*R+m*x)-r*(_*M-b*T+f*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],d=t[10],u=t[11],_=t[12],b=t[13],f=t[14],m=t[15],y=e*o-n*a,E=e*l-s*a,M=e*c-r*a,R=n*l-s*o,T=n*c-r*o,x=s*c-r*l,A=h*b-p*_,U=h*f-d*_,P=h*m-u*_,V=p*f-d*b,q=p*m-u*b,k=d*m-u*f,Z=y*k-E*q+M*V+R*P-T*U+x*A;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/Z;return t[0]=(o*k-l*q+c*V)*K,t[1]=(s*q-n*k-r*V)*K,t[2]=(b*x-f*T+m*R)*K,t[3]=(d*T-p*x-u*R)*K,t[4]=(l*P-a*k-c*U)*K,t[5]=(e*k-s*P+r*U)*K,t[6]=(f*M-_*x-m*E)*K,t[7]=(h*x-d*M+u*E)*K,t[8]=(a*q-o*P+c*A)*K,t[9]=(n*P-e*q-r*A)*K,t[10]=(_*T-b*M+m*y)*K,t[11]=(p*M-h*T-u*y)*K,t[12]=(o*U-a*V-l*A)*K,t[13]=(e*V-n*U+s*A)*K,t[14]=(b*E-_*R-f*y)*K,t[15]=(h*R-p*E+d*y)*K,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,p=o+o,d=r*c,u=r*h,_=r*p,b=a*h,f=a*p,m=o*p,y=l*c,E=l*h,M=l*p,R=n.x,T=n.y,x=n.z;return s[0]=(1-(b+m))*R,s[1]=(u+M)*R,s[2]=(_-E)*R,s[3]=0,s[4]=(u-M)*T,s[5]=(1-(d+m))*T,s[6]=(f+y)*T,s[7]=0,s[8]=(_+E)*x,s[9]=(f-y)*x,s[10]=(1-(d+b))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=hs.set(s[0],s[1],s[2]).length(),o=hs.set(s[4],s[5],s[6]).length(),l=hs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Vn.copy(this);let c=1/a,h=1/o,p=1/l;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=p,Vn.elements[9]*=p,Vn.elements[10]*=p,e.setFromRotationMatrix(Vn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Fn,l=!1){let c=this.elements,h=2*r/(e-t),p=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),_,b;if(l)_=r/(a-r),b=a*r/(a-r);else if(o===Fn)_=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Is)_=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Fn,l=!1){let c=this.elements,h=2/(e-t),p=2/(n-s),d=-(e+t)/(e-t),u=-(n+s)/(n-s),_,b;if(l)_=1/(a-r),b=a/(a-r);else if(o===Fn)_=-2/(a-r),b=-(a+r)/(a-r);else if(o===Is)_=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Co.prototype.isMatrix4=!0;var Ie=Co,hs=new F,Vn=new Ie,Rd=new F(0,0,0),Id=new F(1,1,1),Li=new F,ha=new F,Tn=new F,rh=new Ie,ah=new Dn,Nn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ve(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ah.setFromEuler(this),this.setFromQuaternion(ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER="XYZ";var _r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Pd=0,oh=new F,us=new Dn,gi=new Ie,ua=new F,Ks=new F,Ld=new F,Fd=new Dn,lh=new F(1,0,0),ch=new F(0,1,0),hh=new F(0,0,1),uh={type:"added"},Dd={type:"removed"},ds={type:"childadded",child:null},Fl={type:"childremoved",child:null},Qe=class i extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new Nn,n=new Dn,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new ce}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(lh,t)}rotateY(t){return this.rotateOnAxis(ch,t)}rotateZ(t){return this.rotateOnAxis(hh,t)}translateOnAxis(t,e){return oh.copy(t).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lh,t)}translateY(t){return this.translateOnAxis(ch,t)}translateZ(t){return this.translateOnAxis(hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ua.copy(t):ua.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Ks,ua,this.up):gi.lookAt(ua,Ks,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),us.setFromRotationMatrix(gi),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uh),ds.child=t,this.dispatchEvent(ds),ds.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dd),Fl.child=t,this.dispatchEvent(Fl),Fl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uh),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,Ld),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,Fd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1)===!0&&(n=!0),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}return n}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),p=a(t.shapes),d=a(t.skeletons),u=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Qe.DEFAULT_UP=new F(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ee=class extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nd={type:"move"},Fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let b of t.hand.values()){let f=e.getJointPose(b,n),m=this._getHandJoint(c,b);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=h.position.distanceTo(p.position),u=.02,_=.005;c.inputState.pinching&&d>u+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Zi={h:0,s:0,l:0};function Dl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ae.workingColorSpace){if(t=Ad(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Dl(a,r,t+1/3),this.g=Dl(a,r,t),this.b=Dl(a,r,t-1/3)}return Ae.colorSpaceToWorking(this,s),this}setStyle(t,e=Sn){function n(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Sn){let n=Eu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Sn){return Ae.workingToColorSpace(gn.copy(this),t),Math.round(ve(gn.r*255,0,255))*65536+Math.round(ve(gn.g*255,0,255))*256+Math.round(ve(gn.b*255,0,255))}getHexString(t=Sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ae.workingColorSpace){Ae.workingToColorSpace(gn.copy(this),e);let n=gn.r,s=gn.g,r=gn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ae.workingColorSpace){return Ae.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=Sn){Ae.workingToColorSpace(gn.copy(this),t);let e=gn.r,n=gn.g,s=gn.b;return t!==Sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(Zi),Hn.s===0&&(Hn.h=Zi.h),Zi.s===0&&(Zi.h=Hn.h);let n=Cl(Hn.h,Zi.h,e),s=Cl(Hn.s,Zi.s,e),r=Cl(Hn.l,Zi.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new Qt;Qt.NAMES=Eu;var xr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},vr=class extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Wn=new F,_i=new F,Nl=new F,xi=new F,fs=new F,ps=new F,dh=new F,Ul=new F,Ol=new F,Bl=new F,zl=new $e,kl=new $e,Gl=new $e,Mi=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Wn.subVectors(t,e),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Wn.subVectors(s,e),_i.subVectors(n,e),Nl.subVectors(t,e);let a=Wn.dot(Wn),o=Wn.dot(_i),l=Wn.dot(Nl),c=_i.dot(_i),h=_i.dot(Nl),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,u=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-u-_,_,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(a,xi.y),l.addScaledVector(o,xi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return zl.setScalar(0),kl.setScalar(0),Gl.setScalar(0),zl.fromBufferAttribute(t,e),kl.fromBufferAttribute(t,n),Gl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(zl,r.x),a.addScaledVector(kl,r.y),a.addScaledVector(Gl,r.z),a}static isFrontFacing(t,e,n,s){return Wn.subVectors(n,e),_i.subVectors(t,e),Wn.cross(_i).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Wn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;fs.subVectors(s,n),ps.subVectors(r,n),Ul.subVectors(t,n);let l=fs.dot(Ul),c=ps.dot(Ul);if(l<=0&&c<=0)return e.copy(n);Ol.subVectors(t,s);let h=fs.dot(Ol),p=ps.dot(Ol);if(h>=0&&p<=h)return e.copy(s);let d=l*p-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(fs,a);Bl.subVectors(t,r);let u=fs.dot(Bl),_=ps.dot(Bl);if(_>=0&&u<=_)return e.copy(r);let b=u*c-l*_;if(b<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(ps,o);let f=h*_-u*p;if(f<=0&&p-h>=0&&u-_>=0)return dh.subVectors(r,s),o=(p-h)/(p-h+(u-_)),e.copy(s).addScaledVector(dh,o);let m=1/(f+b+d);return a=b*m,o=d*m,e.copy(n).addScaledVector(fs,a).addScaledVector(ps,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},oi=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xn):Xn.fromBufferAttribute(r,a),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),da.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),da.copy(n.boundingBox)),da.applyMatrix4(t.matrixWorld),this.union(da)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),fa.subVectors(this.max,Qs),ms.subVectors(t.a,Qs),gs.subVectors(t.b,Qs),_s.subVectors(t.c,Qs),Fi.subVectors(gs,ms),Di.subVectors(_s,gs),Ji.subVectors(ms,_s);let e=[0,-Fi.z,Fi.y,0,-Di.z,Di.y,0,-Ji.z,Ji.y,Fi.z,0,-Fi.x,Di.z,0,-Di.x,Ji.z,0,-Ji.x,-Fi.y,Fi.x,0,-Di.y,Di.x,0,-Ji.y,Ji.x,0];return!Vl(e,ms,gs,_s,fa)||(e=[1,0,0,0,1,0,0,0,1],!Vl(e,ms,gs,_s,fa))?!1:(pa.crossVectors(Fi,Di),e=[pa.x,pa.y,pa.z],Vl(e,ms,gs,_s,fa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},vi=[new F,new F,new F,new F,new F,new F,new F,new F],Xn=new F,da=new oi,ms=new F,gs=new F,_s=new F,Fi=new F,Di=new F,Ji=new F,Qs=new F,fa=new F,pa=new F,$i=new F;function Vl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){$i.fromArray(i,r);let o=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),l=t.dot($i),c=e.dot($i),h=n.dot($i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var nn=new F,ma=new tt,Ud=0,ke=class extends ai{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ud++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lc,this.updateRanges=[],this.gpuType=kn,this.version=0,this._normalizationScale=t!==void 0?gl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ma.fromBufferAttribute(this,e),ma.applyMatrix3(t),this.setXY(e,ma.x,ma.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):wu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Au(t,this.array)}};var yr=class extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Mr=class extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var le=class extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},Od=new oi,js=new F,Hl=new F,li=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Od.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);let e=js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(Hl)),this.expandByPoint(js.copy(t.center).sub(Hl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Bd=0,Ln=new Ie,Wl=new Qe,xs=new F,Cn=new oi,tr=new oi,ni=new F,ga=new F,_a=new F,Le=class i extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sd(t)?Mr:yr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,n){return Ln.makeTranslation(t,e,n),this.applyMatrix4(Ln),this}scale(t,e,n){return Ln.makeScale(t,e,n),this.applyMatrix4(Ln),this}lookAt(t){return Wl.lookAt(t),Wl.updateMatrix(),this.applyMatrix4(Wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new le(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(ga.addVectors(this.boundingBox.min,Cn.min),_a.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(ga),this.boundingBox.expandByPoint(_a)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(ga.addVectors(Cn.min,tr.min),_a.addVectors(Cn.max,tr.max),Cn.expandByPoint(ga),Cn.expandByPoint(_a)):(Cn.expandByPoint(tr.min),Cn.expandByPoint(tr.max))}Cn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ni.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ni));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ni.fromBufferAttribute(o,c),l&&(xs.fromBufferAttribute(t,c),ni.add(xs)),s=Math.max(s,n.distanceToSquared(ni))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ke(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new F,l[U]=new F;let h=new F,p=new F,d=new F,u=new tt,_=new tt,b=new tt,f=new F,m=new F;function y(U,P,V){c[U]=c[P]=c[V]=1,h.fromBufferAttribute(n,U),p.fromBufferAttribute(n,P),d.fromBufferAttribute(n,V),u.fromBufferAttribute(r,U),_.fromBufferAttribute(r,P),b.fromBufferAttribute(r,V),p.sub(h),d.sub(h),_.sub(u),b.sub(u);let q=1/(_.x*b.y-b.x*_.y);isFinite(q)&&(f.copy(p).multiplyScalar(b.y).addScaledVector(d,-_.y).multiplyScalar(q),m.copy(d).multiplyScalar(_.x).addScaledVector(p,-b.x).multiplyScalar(q),o[U].add(f),o[P].add(f),o[V].add(f),l[U].add(m),l[P].add(m),l[V].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let U=0,P=E.length;U<P;++U){let V=E[U],q=V.start,k=V.count;for(let Z=q,K=Math.min(t.count,q+k);Z<K;Z+=3)y(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}let M=new F,R=new F,T=new F,x=new F;function A(U){T.fromBufferAttribute(s,U),x.copy(T);let P=o[U];M.copy(P),M.sub(T.multiplyScalar(T.dot(P))).normalize(),M.lengthSq()===0&&(Math.abs(x.x)<.9?M.set(1,0,0):M.set(0,1,0),M.crossVectors(x,M).normalize()),R.crossVectors(x,P);let q=R.dot(l[U])<0?-1:1;a.setXYZW(U,M.x,M.y,M.z,q)}for(let U=0,P=n.count;U<P;++U)c[U]&&A(U);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,p=new F;if(t)for(let d=0,u=t.count;d<u;d+=3){let _=t.getX(d+0),b=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,b),a.fromBufferAttribute(e,f),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ni.fromBufferAttribute(t,e),ni.normalize(),t.setXYZ(e,ni.x,ni.y,ni.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,d=new c.constructor(l.length*h),u=0,_=0;for(let b=0,f=l.length;b<f;b++){o.isInterleavedBufferAttribute?u=l[b]*o.data.stride+o.offset:u=l[b]*h;for(let m=0;m<h;m++)d[_++]=c[u++]}return new ke(d,h,p)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let d=c[h],u=t(d,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,d=c.length;p<d;p++){let u=c[p];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let d=0,u=p.length;d<u;d++)h.push(p[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},no=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Lc,this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=fh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=fh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function fh(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Xi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Mn=new F,Sr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?gl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix4(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyNormalMatrix(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.transformDirection(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){mr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){mr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):wu(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Au(t,this.data.array)}},Xl=new F,zd=new F,kd=new ce,qn=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Xl.subVectors(n,e).cross(zd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Xl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||kd.getNormalMatrix(t),s=this.coplanarPoint(Xl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Gd=0,Un=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Hs,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Va,this.stencilZFail=Va,this.stencilZPass=Va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new qn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new tt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new tt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ui=class extends Un{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},vs,er=new F,ys=new F,Ms=new F,Ss=new tt,nr=new tt,Tu=new Ie,xa=new F,ir=new F,va=new F,ph=new tt,ql=new tt,mh=new tt,ji=class extends Qe{constructor(t=new Ui){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new Le;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new no(e,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new Sr(n,3,0,!1)),vs.setAttribute("uv",new Sr(n,2,3,!1))}this.geometry=vs,this.material=t,this.center=new tt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ee('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),Tu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-Ms.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;ya(xa.set(-.5,-.5,0),Ms,a,ys,s,r),ya(ir.set(.5,-.5,0),Ms,a,ys,s,r),ya(va.set(.5,.5,0),Ms,a,ys,s,r),ph.set(0,0),ql.set(1,0),mh.set(1,1);let o=t.ray.intersectTriangle(xa,ir,va,!1,er);if(o===null&&(ya(ir.set(-.5,.5,0),Ms,a,ys,s,r),ql.set(0,1),o=t.ray.intersectTriangle(xa,va,ir,!1,er),o===null))return;let l=t.ray.origin.distanceTo(er);l<t.near||l>t.far||e.push({distance:l,point:er.clone(),uv:Mi.getInterpolation(er,xa,ir,va,ph,ql,mh,new tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this.count=t.count,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function ya(i,t,e,n,s,r){Ss.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(nr.x=r*Ss.x-s*Ss.y,nr.y=s*Ss.x+r*Ss.y):nr.copy(Ss),i.copy(t),i.x+=nr.x,i.y+=nr.y,i.applyMatrix4(Tu)}var yi=new F,Yl=new F,Ma=new F,Sa=new F,Ds=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yi.copy(this.origin).addScaledVector(this.direction,e),yi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Yl.copy(t).add(e).multiplyScalar(.5),Ma.copy(e).sub(t).normalize(),Sa.copy(this.origin).sub(Yl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ma),o=Sa.dot(this.direction),l=-Sa.dot(Ma),c=Sa.lengthSq(),h=Math.abs(1-a*a),p,d,u,_;if(h>0)if(p=a*l-o,d=a*o-l,_=r*h,p>=0)if(d>=-_)if(d<=_){let b=1/h;p*=b,d*=b,u=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=r,p=Math.max(0,-(a*d+o)),u=-p*p+d*(d+2*l)+c;else d=-r,p=Math.max(0,-(a*d+o)),u=-p*p+d*(d+2*l)+c;else d<=-_?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-l),r),u=-p*p+d*(d+2*l)+c):d<=_?(p=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-l),r),u=-p*p+d*(d+2*l)+c);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),u=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Yl).addScaledVector(Ma,d),u}intersectSphere(t,e){if(t.radius<0)return null;yi.subVectors(t.center,this.origin);let n=yi.dot(this.direction),s=yi.dot(yi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(o=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-a.x,d=t.y-a.y,u=t.z-a.z,_=e.x-a.x,b=e.y-a.y,f=e.z-a.z,m=n.x-a.x,y=n.y-a.y,E=n.z-a.z,M=Math.abs(l),R=Math.abs(c),T=Math.abs(h),x,A,U,P,V,q,k,Z,K,rt,$,ht;if(M>=R&&M>=T?(U=l,q=p,K=_,ht=m,l>=0?(x=c,A=h,P=d,V=u,k=b,Z=f,rt=y,$=E):(x=h,A=c,P=u,V=d,k=f,Z=b,rt=E,$=y)):R>=T?(U=c,q=d,K=b,ht=y,c>=0?(x=h,A=l,P=u,V=p,k=f,Z=_,rt=E,$=m):(x=l,A=h,P=p,V=u,k=_,Z=f,rt=m,$=E)):(U=h,q=u,K=f,ht=E,h>=0?(x=l,A=c,P=p,V=d,k=_,Z=b,rt=m,$=y):(x=c,A=l,P=d,V=p,k=b,Z=_,rt=y,$=m)),U===0)return null;let et=x/U,ut=A/U,Et=1/U,Ft=P-et*q,ne=V-ut*q,j=k-et*K,_t=Z-ut*K,Rt=rt-et*ht,Jt=$-ut*ht,Tt=Rt*_t-Jt*j,gt=Ft*Jt-ne*Rt,Ne=j*ne-_t*Ft;if(s){if(Tt<0||gt<0||Ne<0)return null}else if((Tt<0||gt<0||Ne<0)&&(Tt>0||gt>0||Ne>0))return null;let zt=Tt+gt+Ne;if(zt===0)return null;let fe=Et*(Tt*q+gt*K+Ne*ht);return(zt>0?fe<0:fe>0)?null:this.at(fe/zt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},sn=class extends Un{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Zr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},gh=new Ie,Ki=new Ds,ba=new li,_h=new F,wa=new F,Aa=new F,Ea=new F,Zl=new F,Ta=new F,xh=new F,Ca=new F,ft=class extends Qe{constructor(t=new Le,e=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this.count=t.count,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(Zl.fromBufferAttribute(p,t),a?Ta.addScaledVector(Zl,h):Ta.addScaledVector(Zl.sub(e),h))}e.add(Ta)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(r),Ki.copy(t.ray).recast(t.near),!(ba.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(ba,_h)===null||Ki.origin.distanceToSquared(_h)>(t.far-t.near)**2))&&(gh.copy(r).invert(),Ki.copy(t.ray).applyMatrix4(gh),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ki)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,b=d.length;_<b;_++){let f=d[_],m=a[f.materialIndex],y=Math.max(f.start,u.start),E=Math.min(o.count,Math.min(f.start+f.count,u.start+u.count));for(let M=y,R=E;M<R;M+=3){let T=o.getX(M),x=o.getX(M+1),A=o.getX(M+2);s=Ra(this,m,t,n,c,h,p,T,x,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,u.start),b=Math.min(o.count,u.start+u.count);for(let f=_,m=b;f<m;f+=3){let y=o.getX(f),E=o.getX(f+1),M=o.getX(f+2);s=Ra(this,a,t,n,c,h,p,y,E,M),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,b=d.length;_<b;_++){let f=d[_],m=a[f.materialIndex],y=Math.max(f.start,u.start),E=Math.min(l.count,Math.min(f.start+f.count,u.start+u.count));for(let M=y,R=E;M<R;M+=3){let T=M,x=M+1,A=M+2;s=Ra(this,m,t,n,c,h,p,T,x,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,u.start),b=Math.min(l.count,u.start+u.count);for(let f=_,m=b;f<m;f+=3){let y=f,E=f+1,M=f+2;s=Ra(this,a,t,n,c,h,p,y,E,M),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function Vd(i,t,e,n,s,r,a,o){let l;if(t.side===un?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Hi,o),l===null)return null;Ca.copy(o),Ca.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ca);return c<e.near||c>e.far?null:{distance:c,point:Ca.clone(),object:i}}function Ra(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,wa),i.getVertexPosition(l,Aa),i.getVertexPosition(c,Ea);let h=Vd(i,t,e,n,wa,Aa,Ea,xh);if(h){let p=new F;Mi.getBarycoord(xh,wa,Aa,Ea,p),s&&(h.uv=Mi.getInterpolatedAttribute(s,o,l,c,p,new tt)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,o,l,c,p,new tt)),a&&(h.normal=Mi.getInterpolatedAttribute(a,o,l,c,p,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new F,materialIndex:0};Mi.getNormal(wa,Aa,Ea,d.normal),h.face=d,h.barycoord=p}return h}var br=class extends wn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=hn,h=hn,p,d){super(null,a,o,l,c,h,s,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wr=class extends ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},bs=new Ie,vh=new Ie,Ia=[],yh=new oi,Hd=new Ie,sr=new ft,rr=new li,Ns=class extends ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Hd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new oi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bs),yh.copy(t.boundingBox).applyMatrix4(bs),this.boundingBox.union(yh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bs),rr.copy(t.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(rr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(n),t.ray.intersectsSphere(rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bs),vh.multiplyMatrices(n,bs),sr.matrixWorld=vh,sr.raycast(t,Ia);for(let a=0,o=Ia.length;a<o;a++){let l=Ia[a];l.instanceId=r,l.object=this,e.push(l)}Ia.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new wr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new br(new Float32Array(s*this.count),s,this.count,Uo,kn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Qi=new li,Wd=new tt(.5,.5),Pa=new F,Oi=class{constructor(t=new qn,e=new qn,n=new qn,s=new qn,r=new qn,a=new qn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],d=r[6],u=r[7],_=r[8],b=r[9],f=r[10],m=r[11],y=r[12],E=r[13],M=r[14],R=r[15];if(s[0].setComponents(c-a,u-h,m-_,R-y).normalize(),s[1].setComponents(c+a,u+h,m+_,R+y).normalize(),s[2].setComponents(c+o,u+p,m+b,R+E).normalize(),s[3].setComponents(c-o,u-p,m-b,R-E).normalize(),n)s[4].setComponents(l,d,f,M).normalize(),s[5].setComponents(c-l,u-d,m-f,R-M).normalize();else if(s[4].setComponents(c-l,u-d,m-f,R-M).normalize(),e===Fn)s[5].setComponents(c+l,u+d,m+f,R+M).normalize();else if(e===Is)s[5].setComponents(l,d,f,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(t){Qi.center.set(0,0,0);let e=Wd.distanceTo(t.center);return Qi.radius=.7071067811865476+e,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Pa.x=s.normal.x>0?t.max.x:t.min.x,Pa.y=s.normal.y>0?t.max.y:t.min.y,Pa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Mh=new Ie,io=class i{constructor(){this.coordinateSystem=Fn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Mh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Oi),n[s].setFromProjectionMatrix(Mh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Oi),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Us=class extends Un{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},so=new F,ro=new F,Sh=new Ie,ar=new Ds,La=new li,Jl=new F,bh=new F,ao=class extends Qe{constructor(t=new Le,e=new Us){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)so.fromBufferAttribute(e,s-1),ro.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=so.distanceTo(ro);t.setAttribute("lineDistance",new le(n,1))}else jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(s),La.radius+=r,t.ray.intersectsSphere(La)===!1)return;Sh.copy(s).invert(),ar.copy(t.ray).applyMatrix4(Sh);let o=r/s.getMaxScaleOnAxis(),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let b=u,f=_-1;b<f;b+=c){let m=h.getX(b),y=h.getX(b+1),E=Fa(this,t,ar,l,m,y,b);E&&e.push(E)}if(this.isLineLoop){let b=h.getX(_-1),f=h.getX(u),m=Fa(this,t,ar,l,b,f,_-1);m&&e.push(m)}}else{let u=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let b=u,f=_-1;b<f;b+=c){let m=Fa(this,t,ar,l,b,b+1,b);m&&e.push(m)}if(this.isLineLoop){let b=Fa(this,t,ar,l,_-1,u,_-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Fa(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(so.fromBufferAttribute(o,s),ro.fromBufferAttribute(o,r),e.distanceSqToSegment(so,ro,Jl,bh)>n)return;Jl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Jl);if(!(c<t.near||c>t.far))return{distance:c,point:bh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var wh=new F,Ah=new F,Ar=class extends ao{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)wh.fromBufferAttribute(e,s),Ah.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wh.distanceTo(Ah);t.setAttribute("lineDistance",new le(n,1))}else jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Os=class extends Un{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Eh=new Ie,sc=new Ds,Da=new li,Na=new F,Er=class extends Qe{constructor(t=new Le,e=new Os){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(s),Da.radius+=r,t.ray.intersectsSphere(Da)===!1)return;Eh.copy(s).invert(),sc.copy(t.ray).applyMatrix4(Eh);let o=r/s.getMaxScaleOnAxis(),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let _=d,b=u;_<b;_++){let f=c.getX(_);Na.fromBufferAttribute(p,f),Th(Na,f,l,s,t,e,this)}}else{let d=Math.max(0,a.start),u=Math.min(p.count,a.start+a.count);for(let _=d,b=u;_<b;_++)Na.fromBufferAttribute(p,_),Th(Na,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Th(i,t,e,n,s,r,a){let o=sc.distanceSqToPoint(i);if(o<e){let l=new F;sc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Tr=class extends wn{constructor(t=[],e=rs,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cr=class extends wn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wi=class extends wn{constructor(t,e,n=$n,s,r,a,o=hn,l=hn,c,h=bi,p=1){if(h!==bi&&h!==Ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:p};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ls(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Rr=class extends wi{constructor(t,e=$n,n=rs,s,r,a=hn,o=hn,l,c=bi){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ir=class extends wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},rn=class i extends Le{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],p=[],d=0,u=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(p,2));function _(b,f,m,y,E,M,R,T,x,A,U){let P=M/x,V=R/A,q=M/2,k=R/2,Z=T/2,K=x+1,rt=A+1,$=0,ht=0,et=new F;for(let ut=0;ut<rt;ut++){let Et=ut*V-k;for(let Ft=0;Ft<K;Ft++){let ne=Ft*P-q;et[b]=ne*y,et[f]=Et*E,et[m]=Z,c.push(et.x,et.y,et.z),et[b]=0,et[f]=0,et[m]=T>0?1:-1,h.push(et.x,et.y,et.z),p.push(Ft/x),p.push(1-ut/A),$+=1}}for(let ut=0;ut<A;ut++)for(let Et=0;Et<x;Et++){let Ft=d+Et+K*ut,ne=d+Et+K*(ut+1),j=d+(Et+1)+K*(ut+1),_t=d+(Et+1)+K*ut;l.push(Ft,ne,_t),l.push(ne,j,_t),ht+=6}o.addGroup(u,ht,U),u+=ht,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ai=class i extends Le{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,p=Math.PI/2*t,d=e,u=2*p+d,_=n*2+r,b=s+1,f=new F,m=new F;for(let y=0;y<=_;y++){let E=0,M=0,R=0,T=0;if(y<=n){let U=y/n,P=U*Math.PI/2;M=-h-t*Math.cos(P),R=t*Math.sin(P),T=-t*Math.cos(P),E=U*p}else if(y<=n+r){let U=(y-n)/r;M=-h+U*e,R=t,T=0,E=p+U*d}else{let U=(y-n-r)/n,P=U*Math.PI/2;M=h+t*Math.sin(P),R=t*Math.cos(P),T=t*Math.sin(P),E=p+d+U*p}let x=Math.max(0,Math.min(1,E/u)),A=0;y===0?A=.5/s:y===_&&(A=-.5/s);for(let U=0;U<=s;U++){let P=U/s,V=P*Math.PI*2,q=Math.sin(V),k=Math.cos(V);m.x=-R*k,m.y=M,m.z=R*q,o.push(m.x,m.y,m.z),f.set(-R*k,T,R*q),f.normalize(),l.push(f.x,f.y,f.z),c.push(P+A,x)}if(y>0){let U=(y-1)*b;for(let P=0;P<s;P++){let V=U+P,q=U+P+1,k=y*b+P,Z=y*b+P+1;a.push(V,q,k),a.push(q,Z,k)}}}this.setIndex(a),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ei=class i extends Le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new F,h=new tt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=e;p++,d+=3){let u=n+p/e*s;c.x=t*Math.cos(u),c.y=t*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(o,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ce=class i extends Le{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],d=[],u=[],_=0,b=[],f=n/2,m=0;y(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new le(p,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(u,2));function y(){let M=new F,R=new F,T=0,x=(e-t)/n;for(let A=0;A<=r;A++){let U=[],P=A/r,V=P*(e-t)+t;for(let q=0;q<=s;q++){let k=q/s,Z=k*l+o,K=Math.sin(Z),rt=Math.cos(Z);R.x=V*K,R.y=-P*n+f,R.z=V*rt,p.push(R.x,R.y,R.z),M.set(K,x,rt).normalize(),d.push(M.x,M.y,M.z),u.push(k,1-P),U.push(_++)}b.push(U)}for(let A=0;A<s;A++)for(let U=0;U<r;U++){let P=b[U][A],V=b[U+1][A],q=b[U+1][A+1],k=b[U][A+1];(t>0||U!==0)&&(h.push(P,V,k),T+=3),(e>0||U!==r-1)&&(h.push(V,q,k),T+=3)}c.addGroup(m,T,0),m+=T}function E(M){let R=_,T=new tt,x=new F,A=0,U=M===!0?t:e,P=M===!0?1:-1;for(let q=1;q<=s;q++)p.push(0,f*P,0),d.push(0,P,0),u.push(.5,.5),_++;let V=_;for(let q=0;q<=s;q++){let Z=q/s*l+o,K=Math.cos(Z),rt=Math.sin(Z);x.x=U*rt,x.y=f*P,x.z=U*K,p.push(x.x,x.y,x.z),d.push(0,P,0),T.x=K*.5+.5,T.y=rt*.5*P+.5,u.push(T.x,T.y),_++}for(let q=0;q<s;q++){let k=R+q,Z=V+q;M===!0?h.push(Z,Z+1,k):h.push(Z+1,Z,k),A+=3}c.addGroup(m,A,M===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Yn=class i extends Ce{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pr=class i extends Le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let E=new F,M=new F,R=new F;for(let T=0;T<e.length;T+=3)u(e[T+0],E),u(e[T+1],M),u(e[T+2],R),l(E,M,R,y)}function l(y,E,M,R){let T=R+1,x=[];for(let A=0;A<=T;A++){x[A]=[];let U=y.clone().lerp(M,A/T),P=E.clone().lerp(M,A/T),V=T-A;for(let q=0;q<=V;q++)q===0&&A===T?x[A][q]=U:x[A][q]=U.clone().lerp(P,q/V)}for(let A=0;A<T;A++)for(let U=0;U<2*(T-A)-1;U++){let P=Math.floor(U/2);U%2===0?(d(x[A][P+1]),d(x[A+1][P]),d(x[A][P])):(d(x[A][P+1]),d(x[A+1][P+1]),d(x[A+1][P]))}}function c(y){let E=new F;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(y),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function h(){let y=new F;for(let E=0;E<r.length;E+=3){y.x=r[E+0],y.y=r[E+1],y.z=r[E+2];let M=f(y)/2/Math.PI+.5,R=m(y)/Math.PI+.5;a.push(M,1-R)}_(),p()}function p(){for(let y=0;y<a.length;y+=6){let E=a[y+0],M=a[y+2],R=a[y+4],T=Math.max(E,M,R),x=Math.min(E,M,R);T>.9&&x<.1&&(E<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function u(y,E){let M=y*3;E.x=t[M+0],E.y=t[M+1],E.z=t[M+2]}function _(){let y=new F,E=new F,M=new F,R=new F,T=new tt,x=new tt,A=new tt;for(let U=0,P=0;U<r.length;U+=9,P+=6){y.set(r[U+0],r[U+1],r[U+2]),E.set(r[U+3],r[U+4],r[U+5]),M.set(r[U+6],r[U+7],r[U+8]),T.set(a[P+0],a[P+1]),x.set(a[P+2],a[P+3]),A.set(a[P+4],a[P+5]),R.copy(y).add(E).add(M).divideScalar(3);let V=f(R);b(T,P+0,y,V),b(x,P+2,E,V),b(A,P+4,M,V)}}function b(y,E,M,R){R<0&&y.x===1&&(a[E]=y.x-1),M.x===0&&M.z===0&&(a[E]=R/2/Math.PI+.5)}function f(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Bs=class i extends Pr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new tt:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new F,s=[],r=[],a=[],o=new F,l=new Ie;for(let u=0;u<=t;u++){let _=u/t;s[u]=this.getTangentAt(_,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(ve(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,_))}a[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(ve(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],u*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},zs=class extends In{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new tt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*p+this.aX,c=d*p+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},oo=class extends zs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Dc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,p){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+p)+(l-o)/p;d*=h,u*=h,s(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Ch=new F,Rh=new F,$l=new Dc,Kl=new Dc,Ql=new Dc,ci=class extends In{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Rh.subVectors(s[0],s[1]).add(s[0]),c=Rh);let p=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ch.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ch),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(p),u),b=Math.pow(p.distanceToSquared(d),u),f=Math.pow(d.distanceToSquared(h),u);b<1e-4&&(b=1),_<1e-4&&(_=b),f<1e-4&&(f=b),$l.initNonuniformCatmullRom(c.x,p.x,d.x,h.x,_,b,f),Kl.initNonuniformCatmullRom(c.y,p.y,d.y,h.y,_,b,f),Ql.initNonuniformCatmullRom(c.z,p.z,d.z,h.z,_,b,f)}else this.curveType==="catmullrom"&&($l.initCatmullRom(c.x,p.x,d.x,h.x,this.tension),Kl.initCatmullRom(c.y,p.y,d.y,h.y,this.tension),Ql.initCatmullRom(c.z,p.z,d.z,h.z,this.tension));return n.set($l.calc(l),Kl.calc(l),Ql.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ih(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Xd(i,t){let e=1-i;return e*e*t}function qd(i,t){return 2*(1-i)*i*t}function Yd(i,t){return i*i*t}function cr(i,t,e,n){return Xd(i,t)+qd(i,e)+Yd(i,n)}function Zd(i,t){let e=1-i;return e*e*e*t}function Jd(i,t){let e=1-i;return 3*e*e*i*t}function $d(i,t){return 3*(1-i)*i*i*t}function Kd(i,t){return i*i*i*t}function hr(i,t,e,n,s){return Zd(i,t)+Jd(i,e)+$d(i,n)+Kd(i,s)}var Lr=class extends In{constructor(t=new tt,e=new tt,n=new tt,s=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new tt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hr(t,s.x,r.x,a.x,o.x),hr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lo=class extends In{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hr(t,s.x,r.x,a.x,o.x),hr(t,s.y,r.y,a.y,o.y),hr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fr=class extends In{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},co=class extends In{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dr=class extends In{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(cr(t,s.x,r.x,a.x),cr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ts=class extends In{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(cr(t,s.x,r.x,a.x),cr(t,s.y,r.y,a.y),cr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nr=class extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(Ih(o,l.x,c.x,h.x,p.x),Ih(o,l.y,c.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new tt().fromArray(s))}return this}},ho=Object.freeze({__proto__:null,ArcCurve:oo,CatmullRomCurve3:ci,CubicBezierCurve:Lr,CubicBezierCurve3:lo,EllipseCurve:zs,LineCurve:Fr,LineCurve3:co,QuadraticBezierCurve:Dr,QuadraticBezierCurve3:ts,SplineCurve:Nr}),uo=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ho[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ho[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Ur=class extends uo{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Fr(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Dr(this.currentPoint.clone(),new tt(t,e),new tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Lr(this.currentPoint.clone(),new tt(t,e),new tt(n,s),new tt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Nr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new zs(t,e,n,s,r,a,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Zn=class extends Ur{constructor(t){super(t),this.uuid=Xi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ur().fromJSON(s))}return this}};function Qd(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Cu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=sf(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,p=l;for(let d=e;d<s;d+=e){let u=i[d],_=i[d+1];u<o&&(o=u),_<l&&(l=_),u>h&&(h=u),_>p&&(p=_)}c=Math.max(h-o,p-l),c=c!==0?32767/c:0}return Or(r,a,e,o,l,c,0),a}function Cu(i,t,e,n,s){let r;if(s===mf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Ph(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Ph(a/n|0,i[a],i[a+1],r);return r&&ks(r,r.next)&&(zr(r),r=r.next),r}function es(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ks(e,e.next)||Ke(e.prev,e,e.next)===0)){if(zr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Or(i,t,e,n,s,r,a){if(!i)return;!a&&r&&cf(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?tf(i,n,s,r):jd(i)){t.push(l.i,i.i,c.i),zr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=ef(es(i),t),Or(i,t,e,n,s,r,2)):a===2&&nf(i,t,e,n,s,r):Or(es(i),t,e,n,s,r,1);break}}}function jd(i){let t=i.prev,e=i,n=i.next;if(Ke(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),p=Math.min(o,l,c),d=Math.max(s,r,a),u=Math.max(o,l,c),_=n.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=p&&_.y<=u&&or(s,o,r,l,a,c,_.x,_.y)&&Ke(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function tf(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ke(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,p=r.y,d=a.y,u=Math.min(o,l,c),_=Math.min(h,p,d),b=Math.max(o,l,c),f=Math.max(h,p,d),m=rc(u,_,t,e,n),y=rc(b,f,t,e,n),E=i.prevZ,M=i.nextZ;for(;E&&E.z>=m&&M&&M.z<=y;){if(E.x>=u&&E.x<=b&&E.y>=_&&E.y<=f&&E!==s&&E!==a&&or(o,h,l,p,c,d,E.x,E.y)&&Ke(E.prev,E,E.next)>=0||(E=E.prevZ,M.x>=u&&M.x<=b&&M.y>=_&&M.y<=f&&M!==s&&M!==a&&or(o,h,l,p,c,d,M.x,M.y)&&Ke(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;E&&E.z>=m;){if(E.x>=u&&E.x<=b&&E.y>=_&&E.y<=f&&E!==s&&E!==a&&or(o,h,l,p,c,d,E.x,E.y)&&Ke(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;M&&M.z<=y;){if(M.x>=u&&M.x<=b&&M.y>=_&&M.y<=f&&M!==s&&M!==a&&or(o,h,l,p,c,d,M.x,M.y)&&Ke(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function ef(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ks(n,s)&&Iu(n,e,e.next,s)&&Br(n,s)&&Br(s,n)&&(t.push(n.i,e.i,s.i),zr(e),zr(e.next),e=i=s),e=e.next}while(e!==i);return es(e)}function nf(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&df(a,o)){let l=Pu(a,o);a=es(a,a.next),l=es(l,l.next),Or(a,t,e,n,s,r,0),Or(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function sf(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Cu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(uf(c))}s.sort(rf);for(let r=0;r<s.length;r++)e=af(s[r],e);return e}function rf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function af(i,t){let e=of(i,t);if(!e)return t;let n=Pu(e,i);return es(n,n.next),es(e,e.next)}function of(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(ks(i,e))return e;do{if(ks(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Ru(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let p=Math.abs(s-e.y)/(n-e.x);Br(e,i)&&(p<h||p===h&&(e.x>a.x||e.x===a.x&&lf(a,e)))&&(a=e,h=p)}e=e.next}while(e!==o);return a}function lf(i,t){return Ke(i.prev,i,t.prev)<0&&Ke(t.next,i,i.next)<0}function cf(i,t,e,n){let s=i;do s.z===0&&(s.z=rc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,hf(s)}function hf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function rc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function uf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ru(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function or(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Ru(i,t,e,n,s,r,a,o)}function df(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ff(i,t)&&(Br(i,t)&&Br(t,i)&&pf(i,t)&&(Ke(i.prev,i,t.prev)||Ke(i,t.prev,t))||ks(i,t)&&Ke(i.prev,i,i.next)>0&&Ke(t.prev,t,t.next)>0)}function Ke(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ks(i,t){return i.x===t.x&&i.y===t.y}function Iu(i,t,e,n){let s=Oa(Ke(i,t,e)),r=Oa(Ke(i,t,n)),a=Oa(Ke(e,n,i)),o=Oa(Ke(e,n,t));return!!(s!==r&&a!==o||s===0&&Ua(i,e,t)||r===0&&Ua(i,n,t)||a===0&&Ua(e,i,n)||o===0&&Ua(e,t,n))}function Ua(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Oa(i){return i>0?1:i<0?-1:0}function ff(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Iu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Br(i,t){return Ke(i.prev,i,i.next)<0?Ke(i,t,i.next)>=0&&Ke(i,i.prev,t)>=0:Ke(i,t,i.prev)<0||Ke(i,i.next,t)<0}function pf(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Pu(i,t){let e=ac(i.i,i.x,i.y),n=ac(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ph(i,t,e,n){let s=ac(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function zr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ac(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var oc=class{static triangulate(t,e,n=2){return Qd(t,e,n)}},ri=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Lh(t),Fh(n,t);let a=t.length;e.forEach(Lh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Fh(n,e[l]);let o=oc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Lh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Fh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var kr=class i extends Le{constructor(t=new Zn([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new le(s,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:u-.1,b=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:gf,E,M=!1,R,T,x,A;if(m){E=m.getSpacedPoints(h),M=!0,d=!1;let lt=m.isCatmullRomCurve3?m.closed:!1;R=m.computeFrenetFrames(h,lt),T=new F,x=new F,A=new F}d||(f=0,u=0,_=0,b=0);let U=o.extractPoints(c),P=U.shape,V=U.holes;if(!ri.isClockWise(P)){P=P.reverse();for(let lt=0,Mt=V.length;lt<Mt;lt++){let xt=V[lt];ri.isClockWise(xt)&&(V[lt]=xt.reverse())}}function k(lt){let xt=10000000000000001e-36,Pt=lt[0];for(let dt=1;dt<=lt.length;dt++){let oe=dt%lt.length,kt=lt[oe],de=kt.x-Pt.x,pe=kt.y-Pt.y,ye=de*de+pe*pe,B=Math.max(Math.abs(kt.x),Math.abs(kt.y),Math.abs(Pt.x),Math.abs(Pt.y)),He=xt*B*B;if(ye<=He){lt.splice(oe,1),dt--;continue}Pt=kt}}k(P),V.forEach(k);let Z=V.length,K=P;for(let lt=0;lt<Z;lt++){let Mt=V[lt];P=P.concat(Mt)}function rt(lt,Mt,xt){return Mt||ee("ExtrudeGeometry: vec does not exist"),lt.clone().addScaledVector(Mt,xt)}let $=P.length;function ht(lt,Mt,xt){let Pt,dt,oe,kt=lt.x-Mt.x,de=lt.y-Mt.y,pe=xt.x-lt.x,ye=xt.y-lt.y,B=kt*kt+de*de,He=kt*ye-de*pe;if(Math.abs(He)>Number.EPSILON){let me=Math.sqrt(B),Fe=Math.sqrt(pe*pe+ye*ye),St=Mt.x-de/me,Ze=Mt.y+kt/me,Yt=xt.x-ye/Fe,te=xt.y+pe/Fe,I=((Yt-St)*ye-(te-Ze)*pe)/(kt*ye-de*pe);Pt=St+kt*I-lt.x,dt=Ze+de*I-lt.y;let S=Pt*Pt+dt*dt;if(S<=2)return new tt(Pt,dt);oe=Math.sqrt(S/2)}else{let me=!1;kt>Number.EPSILON?pe>Number.EPSILON&&(me=!0):kt<-Number.EPSILON?pe<-Number.EPSILON&&(me=!0):Math.sign(de)===Math.sign(ye)&&(me=!0),me?(Pt=-de,dt=kt,oe=Math.sqrt(B)):(Pt=kt,dt=de,oe=Math.sqrt(B/2))}return new tt(Pt/oe,dt/oe)}let et=[];for(let lt=0,Mt=K.length,xt=Mt-1,Pt=lt+1;lt<Mt;lt++,xt++,Pt++)xt===Mt&&(xt=0),Pt===Mt&&(Pt=0),et[lt]=ht(K[lt],K[xt],K[Pt]);let ut=[],Et,Ft=et.concat();for(let lt=0,Mt=Z;lt<Mt;lt++){let xt=V[lt];Et=[];for(let Pt=0,dt=xt.length,oe=dt-1,kt=Pt+1;Pt<dt;Pt++,oe++,kt++)oe===dt&&(oe=0),kt===dt&&(kt=0),Et[Pt]=ht(xt[Pt],xt[oe],xt[kt]);ut.push(Et),Ft=Ft.concat(Et)}let ne;if(f===0)ne=ri.triangulateShape(K,V);else{let lt=[],Mt=[];for(let xt=0;xt<f;xt++){let Pt=xt/f,dt=u*Math.cos(Pt*Math.PI/2),oe=_*Math.sin(Pt*Math.PI/2)+b;for(let kt=0,de=K.length;kt<de;kt++){let pe=rt(K[kt],et[kt],oe);gt(pe.x,pe.y,-dt),Pt===0&&lt.push(pe)}for(let kt=0,de=Z;kt<de;kt++){let pe=V[kt];Et=ut[kt];let ye=[];for(let B=0,He=pe.length;B<He;B++){let me=rt(pe[B],Et[B],oe);gt(me.x,me.y,-dt),Pt===0&&ye.push(me)}Pt===0&&Mt.push(ye)}}ne=ri.triangulateShape(lt,Mt)}let j=ne.length,_t=_+b;for(let lt=0;lt<$;lt++){let Mt=d?rt(P[lt],Ft[lt],_t):P[lt];M?(x.copy(R.normals[0]).multiplyScalar(Mt.x),T.copy(R.binormals[0]).multiplyScalar(Mt.y),A.copy(E[0]).add(x).add(T),gt(A.x,A.y,A.z)):gt(Mt.x,Mt.y,0)}for(let lt=1;lt<=h;lt++)for(let Mt=0;Mt<$;Mt++){let xt=d?rt(P[Mt],Ft[Mt],_t):P[Mt];M?(x.copy(R.normals[lt]).multiplyScalar(xt.x),T.copy(R.binormals[lt]).multiplyScalar(xt.y),A.copy(E[lt]).add(x).add(T),gt(A.x,A.y,A.z)):gt(xt.x,xt.y,p/h*lt)}for(let lt=f-1;lt>=0;lt--){let Mt=lt/f,xt=u*Math.cos(Mt*Math.PI/2),Pt=_*Math.sin(Mt*Math.PI/2)+b;for(let dt=0,oe=K.length;dt<oe;dt++){let kt=rt(K[dt],et[dt],Pt);gt(kt.x,kt.y,p+xt)}for(let dt=0,oe=V.length;dt<oe;dt++){let kt=V[dt];Et=ut[dt];for(let de=0,pe=kt.length;de<pe;de++){let ye=rt(kt[de],Et[de],Pt);M?gt(ye.x,ye.y+E[h-1].y,E[h-1].x+xt):gt(ye.x,ye.y,p+xt)}}}Rt(),Jt();function Rt(){let lt=s.length/3;if(d){let Mt=0,xt=$*Mt;for(let Pt=0;Pt<j;Pt++){let dt=ne[Pt];Ne(dt[2]+xt,dt[1]+xt,dt[0]+xt)}Mt=h+f*2,xt=$*Mt;for(let Pt=0;Pt<j;Pt++){let dt=ne[Pt];Ne(dt[0]+xt,dt[1]+xt,dt[2]+xt)}}else{for(let Mt=0;Mt<j;Mt++){let xt=ne[Mt];Ne(xt[2],xt[1],xt[0])}for(let Mt=0;Mt<j;Mt++){let xt=ne[Mt];Ne(xt[0]+$*h,xt[1]+$*h,xt[2]+$*h)}}n.addGroup(lt,s.length/3-lt,0)}function Jt(){let lt=s.length/3,Mt=0;Tt(K,Mt),Mt+=K.length;for(let xt=0,Pt=V.length;xt<Pt;xt++){let dt=V[xt];Tt(dt,Mt),Mt+=dt.length}n.addGroup(lt,s.length/3-lt,1)}function Tt(lt,Mt){let xt=lt.length;for(;--xt>=0;){let Pt=xt,dt=xt-1;dt<0&&(dt=lt.length-1);for(let oe=0,kt=h+f*2;oe<kt;oe++){let de=$*oe,pe=$*(oe+1),ye=Mt+Pt+de,B=Mt+dt+de,He=Mt+dt+pe,me=Mt+Pt+pe;zt(ye,B,He,me)}}}function gt(lt,Mt,xt){l.push(lt),l.push(Mt),l.push(xt)}function Ne(lt,Mt,xt){fe(lt),fe(Mt),fe(xt);let Pt=s.length/3,dt=y.generateTopUV(n,s,Pt-3,Pt-2,Pt-1);be(dt[0]),be(dt[1]),be(dt[2])}function zt(lt,Mt,xt,Pt){fe(lt),fe(Mt),fe(Pt),fe(Mt),fe(xt),fe(Pt);let dt=s.length/3,oe=y.generateSideWallUV(n,s,dt-6,dt-3,dt-2,dt-1);be(oe[0]),be(oe[1]),be(oe[3]),be(oe[1]),be(oe[2]),be(oe[3])}function fe(lt){s.push(l[lt*3+0]),s.push(l[lt*3+1]),s.push(l[lt*3+2])}function be(lt){r.push(lt.x),r.push(lt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return _f(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ho[s.type]().fromJSON(s)),new i(n,t.options)}},gf={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new tt(r,a),new tt(o,l),new tt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],p=t[n*3+2],d=t[s*3],u=t[s*3+1],_=t[s*3+2],b=t[r*3],f=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new tt(a,1-l),new tt(c,1-p),new tt(d,1-_),new tt(b,1-m)]:[new tt(o,1-l),new tt(h,1-p),new tt(u,1-_),new tt(f,1-m)]}};function _f(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var On=class i extends Pr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Jn=class i extends Le{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ve(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,p=new F,d=new tt,u=new F,_=new F,b=new F,f=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:f=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,u.x=m*1,u.y=-f,u.z=m*0,b.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:b.normalize(),l.push(b.x,b.y,b.z);break;default:f=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,u.x=m*1,u.y=-f,u.z=m*0,_.copy(u),u.x+=b.x,u.y+=b.y,u.z+=b.z,u.normalize(),l.push(u.x,u.y,u.z),b.copy(_)}for(let y=0;y<=e;y++){let E=n+y*h*s,M=Math.sin(E),R=Math.cos(E);for(let T=0;T<=t.length-1;T++){p.x=t[T].x*M,p.y=t[T].y,p.z=t[T].x*R,a.push(p.x,p.y,p.z),d.x=y/e,d.y=T/(t.length-1),o.push(d.x,d.y);let x=l[3*T+0]*M,A=l[3*T+1],U=l[3*T+0]*R;c.push(x,A,U)}}for(let y=0;y<e;y++)for(let E=0;E<t.length-1;E++){let M=E+y*t.length,R=M,T=M+t.length,x=M+t.length+1,A=M+1;r.push(R,T,A),r.push(x,A,T)}this.setIndex(r),this.setAttribute("position",new le(a,3)),this.setAttribute("uv",new le(o,2)),this.setAttribute("normal",new le(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Bn=class i extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,p=t/o,d=e/l,u=[],_=[],b=[],f=[];for(let m=0;m<h;m++){let y=m*d-a;for(let E=0;E<c;E++){let M=E*p-r;_.push(M,-y,0),b.push(0,0,1),f.push(E/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){let E=y+c*m,M=y+c*(m+1),R=y+1+c*(m+1),T=y+1+c*m;u.push(E,M,T),u.push(M,R,T)}this.setIndex(u),this.setAttribute("position",new le(_,3)),this.setAttribute("normal",new le(b,3)),this.setAttribute("uv",new le(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Gr=class i extends Le{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],p=t,d=(e-t)/s,u=new F,_=new tt;for(let b=0;b<=s;b++){for(let f=0;f<=n;f++){let m=r+f/n*a;u.x=p*Math.cos(m),u.y=p*Math.sin(m),l.push(u.x,u.y,u.z),c.push(0,0,1),_.x=(u.x/e+1)/2,_.y=(u.y/e+1)/2,h.push(_.x,_.y)}p+=d}for(let b=0;b<s;b++){let f=b*(n+1);for(let m=0;m<n;m++){let y=m+f,E=y,M=y+n+1,R=y+n+2,T=y+1;o.push(E,M,T),o.push(M,R,T)}}this.setIndex(o),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Bi=class i extends Le{constructor(t=new Zn([new tt(0,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new le(s,3)),this.setAttribute("normal",new le(r,3)),this.setAttribute("uv",new le(a,2));function c(h){let p=s.length/3,d=h.extractPoints(e),u=d.shape,_=d.holes;ri.isClockWise(u)===!1&&(u=u.reverse());for(let f=0,m=_.length;f<m;f++){let y=_[f];ri.isClockWise(y)===!0&&(_[f]=y.reverse())}let b=ri.triangulateShape(u,_);for(let f=0,m=_.length;f<m;f++){let y=_[f];u=u.concat(y)}for(let f=0,m=u.length;f<m;f++){let y=u[f];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let f=0,m=b.length;f<m;f++){let y=b[f],E=y[0]+p,M=y[1]+p,R=y[2]+p;n.push(E,M,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return xf(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function xf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Se=class i extends Le{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],p=new F,d=new F,u=[],_=[],b=[],f=[];for(let m=0;m<=n;m++){let y=[],E=m/n,M=a+E*o,R=t*Math.cos(M),T=Math.sqrt(t*t-R*R),x=0;m===0&&a===0?x=.5/e:m===n&&l===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){let U=A/e,P=s+U*r;p.x=-T*Math.cos(P),p.y=R,p.z=T*Math.sin(P),_.push(p.x,p.y,p.z),d.copy(p).normalize(),b.push(d.x,d.y,d.z),f.push(U+x,1-E),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){let E=h[m][y+1],M=h[m][y],R=h[m+1][y],T=h[m+1][y+1];(m!==0||a>0)&&u.push(E,M,T),(m!==n-1||l<Math.PI)&&u.push(M,R,T)}this.setIndex(u),this.setAttribute("position",new le(_,3)),this.setAttribute("normal",new le(b,3)),this.setAttribute("uv",new le(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var hi=class i extends Le{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],p=[],d=new F,u=new F,_=new F;for(let b=0;b<=n;b++){let f=a+b/n*o;for(let m=0;m<=s;m++){let y=m/s*r;u.x=(t+e*Math.cos(f))*Math.cos(y),u.y=(t+e*Math.cos(f))*Math.sin(y),u.z=e*Math.sin(f),c.push(u.x,u.y,u.z),d.x=t*Math.cos(y),d.y=t*Math.sin(y),_.subVectors(u,d).normalize(),h.push(_.x,_.y,_.z),p.push(m/s),p.push(b/n)}}for(let b=1;b<=n;b++)for(let f=1;f<=s;f++){let m=(s+1)*b+f-1,y=(s+1)*(b-1)+f-1,E=(s+1)*(b-1)+f,M=(s+1)*b+f;l.push(m,y,M),l.push(y,E,M)}this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var zi=class i extends Le{constructor(t=new ts(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new F,l=new F,c=new tt,h=new F,p=[],d=[],u=[],_=[];b(),this.setIndex(_),this.setAttribute("position",new le(p,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(u,2));function b(){for(let E=0;E<e;E++)f(E);f(r===!1?e:0),y(),m()}function f(E){h=t.getPointAt(E/e,h);let M=a.normals[E],R=a.binormals[E];for(let T=0;T<=s;T++){let x=T/s*Math.PI*2,A=Math.sin(x),U=-Math.cos(x);l.x=U*M.x+A*R.x,l.y=U*M.y+A*R.y,l.z=U*M.z+A*R.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,p.push(o.x,o.y,o.z)}}function m(){for(let E=1;E<=e;E++)for(let M=1;M<=s;M++){let R=(s+1)*(E-1)+(M-1),T=(s+1)*E+(M-1),x=(s+1)*E+M,A=(s+1)*(E-1)+M;_.push(R,T,A),_.push(T,x,A)}}function y(){for(let E=0;E<=e;E++)for(let M=0;M<=s;M++)c.x=E/e,c.y=M/s,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new ho[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function os(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Dh(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Dh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function xn(i){let t={};for(let e=0;e<i.length;e++){let n=os(i[e]);for(let s in n)t[s]=n[s]}return t}function Dh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function vf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}var Lu={clone:os,merge:xn},yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zn=class extends Un{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yf,this.fragmentShader=Mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=vf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.linewidth=t.linewidth,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new tt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new $e().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ce().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ie().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},fo=class extends zn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ti=class extends Un{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qt(16777215),this.specular=new Qt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ia,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Zr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var je=class extends Un{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ia,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Zr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},po=class extends Un{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},mo=class extends Un{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ws(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ba(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ki=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},go=class extends ki{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ec,endingEnd:ec}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case nc:r=t,o=2*e-n;break;case ic:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nc:a=t,l=2*n-e;break;case ic:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,u=this._weightNext,_=(n-e)/(s-e),b=_*_,f=b*_,m=-d*f+2*d*b-d*_,y=(1+d)*f+(-1.5-2*d)*b+(-.5+d)*_+1,E=(-1-u)*f+(1.5+u)*b+.5*_,M=u*f-u*b;for(let R=0;R!==o;++R)r[R]=m*a[h+R]+y*a[c+R]+E*a[l+R]+M*a[p+R];return r}},_o=class extends ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),p=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*p+a[l+d]*h;return r}},xo=class extends ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},vo=class extends ki{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let _=(n-e)/(s-e),b=1-_;for(let f=0;f!==o;++f)r[f]=a[c+f]*b+a[l+f]*_;return r}let d=o*2,u=t-1;for(let _=0;_!==o;++_){let b=a[c+_],f=a[l+_],m=u*d+_*2,y=p[m],E=p[m+1],M=t*d+_*2,R=h[M],T=h[M+1],x=bf(n,e,y,R,s);r[_]=Fu(x,b,E,T,f)}return r}};function Fu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Sf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function bf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Fu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Sf(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Pn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ws(e,this.TimeBufferType),this.values=ws(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ws(t.times,Array),values:ws(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ba(t.settings)&&(n.settings={inTangents:ws(t.settings.inTangents,Array),outTangents:ws(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new go(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new vo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ur:e=this.InterpolantFactoryMethodDiscrete;break;case Ka:e=this.InterpolantFactoryMethodLinear;break;case Ga:e=this.InterpolantFactoryMethodSmooth;break;case tc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return Ka;case this.InterpolantFactoryMethodSmooth:return Ga;case this.InterpolantFactoryMethodBezier:return tc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Ba(this.settings)&&(Nh(this.settings.inTangents,t),Nh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ba(this.settings)&&(Uh(this.settings.inTangents,t),Uh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ee("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ee("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&wd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ee("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ga,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*n,d=p-n,u=p+n;for(let _=0;_!==n;++_){let b=e[p+_];if(b!==e[d+_]||b!==e[u+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*n,d=a*n;for(let u=0;u!==n;++u)e[d+u]=e[p+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ba(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Nh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Uh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Ka;var Gi=class extends Pn{constructor(t,e,n){super(t,e,n)}};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=ur;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends Pn{constructor(t,e,n,s){super(t,e,n,s)}};yo.prototype.ValueTypeName="color";var Mo=class extends Pn{constructor(t,e,n,s){super(t,e,n,s)}};Mo.prototype.ValueTypeName="number";var So=class extends ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Dn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Vr=class extends Pn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new So(this.times,this.values,this.getValueSize(),t)}};Vr.prototype.ValueTypeName="quaternion";Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends Pn{constructor(t,e,n){super(t,e,n)}};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=ur;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends Pn{constructor(t,e,n,s){super(t,e,n,s)}};bo.prototype.ValueTypeName="vector";var wo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,d=c.length;p<d;p+=2){let u=c[p],_=c[p+1];if(u.global&&(u.lastIndex=0),u.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Du=new wo,Ao=class{constructor(t){this.manager=t!==void 0?t:Du,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ao.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hr=class extends Qe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Wr=class extends Hr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},jl=new Ie,Oh=new F,Bh=new F,Eo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.filterNode=null,this.shadowNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oi,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Oh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Oh),Bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(jl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Is||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(jl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this.filterNode=t.filterNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},za=new F,ka=new Dn,ii=new F,Xr=class extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(za,ka,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,ka,ii.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){let s=super.updateWorldMatrix(t,e,n);return this.matrixWorld.decompose(za,ka,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,ka,ii.set(1,1,1)).invert(),s}clone(){return new this.constructor().copy(this)}},Ni=new F,zh=new tt,kh=new tt,_n=class extends Xr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Tl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qa*2*Math.atan(Math.tan(Tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,zh,kh),e.subVectors(kh,zh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Tl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var qr=class extends Xr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},lc=class extends Eo{constructor(){super(new qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yr=class extends Hr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new lc}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var As=-90,Es=1,Gs=class extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _n(As,Es,t,e);s.layers=this.layers,this.add(s);let r=new _n(As,Es,t,e);r.layers=this.layers,this.add(r);let a=new _n(As,Es,t,e);a.layers=this.layers,this.add(a);let o=new _n(As,Es,t,e);o.layers=this.layers,this.add(o);let l=new _n(As,Es,t,e);l.layers=this.layers,this.add(l);let c=new _n(As,Es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Is)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=b,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,d,u),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},To=class extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Uc="\\[\\]\\.:\\/",wf=new RegExp("["+Uc+"]","g"),Oc="[^"+Uc+"]",Af="[^"+Uc.replace("\\.","")+"]",Ef=/((?:WC+[\/:])*)/.source.replace("WC",Oc),Tf=/(WCOD+)?/.source.replace("WCOD",Af),Cf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oc),Rf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oc),If=new RegExp("^"+Ef+Tf+Cf+Rf+"$"),Pf=["material","materials","bones","map"],cc=class{constructor(t,e,n){let s=n||qe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},qe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(wf,"")}static parseTrackName(t){let e=If.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Pf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qe.Composite=cc;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var w_=new Float32Array(1);var Hc=class Hc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Hc.prototype.isMatrix2=!0;var hc=Hc;function Bc(i,t,e,n){let s=Lf(n);switch(e){case Tc:return i*t;case Uo:return i*t/s.components*s.byteLength;case Oo:return i*t/s.components*s.byteLength;case Wi:return i*t*2/s.components*s.byteLength;case Bo:return i*t*2/s.components*s.byteLength;case Cc:return i*t*3/s.components*s.byteLength;case Qn:return i*t*4/s.components*s.byteLength;case zo:return i*t*4/s.components*s.byteLength;case Kr:case Qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jr:case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Go:case Ho:return Math.max(i,16)*Math.max(t,8)/4;case ko:case Vo:return Math.max(i,8)*Math.max(t,8)/2;case Wo:case Xo:case Yo:case Zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qo:case ea:case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ko:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case jo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case nl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case il:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case sl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ll:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case cl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case hl:case ul:case dl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fl:case pl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case na:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lf(i){switch(i){case An:case bc:return{byteLength:1,components:1};case Xs:case wc:case Kn:return{byteLength:2,components:1};case Do:case No:return{byteLength:2,components:4};case $n:case Fo:case kn:return{byteLength:4,components:1};case Ac:case Ec:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);function nd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ff(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,p=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,h);else{p.sort((u,_)=>u.start-_.start);let d=0;for(let u=1;u<p.length;u++){let _=p[d],b=p[u];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++d,p[d]=b)}p.length=d+1;for(let u=0,_=p.length;u<_;u++){let b=p[u];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nf=`#ifdef USE_ALPHAHASH
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
#endif`,Uf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kf=`#ifdef USE_AOMAP
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
#endif`,Gf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vf=`#ifdef USE_BATCHING
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
#endif`,Hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yf=`#ifdef USE_IRIDESCENCE
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
#endif`,Zf=`#ifdef USE_BUMPMAP
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
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ip=`#define PI 3.141592653589793
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
} // validated`,sp=`vec3 transformedNormal = objectNormal;
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
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",hp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_p=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yp=`#ifdef USE_GRADIENTMAP
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
}`,Mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ip=`PhysicalMaterial material;
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
#endif`,Pp=`uniform sampler2D dfgLUT;
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
}`,Lp=`
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
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Np=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Op=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hp=`#if defined( USE_POINTS_UV )
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
#endif`,Wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yp=`#if defined( USE_MORPHCOLORS )
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
#endif`,Zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jp=`#ifdef USE_MORPHTARGETS
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
#endif`,$p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nm=`#ifdef USE_NORMALMAP
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
#endif`,im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,om=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xm=`float getShadowMask() {
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
}`,vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ym=`#ifdef USE_SKINNING
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
#endif`,Mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sm=`#ifdef USE_SKINNING
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
#endif`,bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Em=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tm=`#ifdef USE_TRANSMISSION
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
#endif`,Cm=`#ifdef USE_TRANSMISSION
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
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dm=`uniform sampler2D t2D;
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`uniform float backgroundBlurriness;
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`#include <common>
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
}`,km=`#if DEPTH_PACKING == 3200
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
}`,Gm=`#define DISTANCE
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
}`,Vm=`#define DISTANCE
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`uniform float scale;
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
}`,qm=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Jm=`#define LAMBERT
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
}`,$m=`#define LAMBERT
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
}`,Km=`#define MATCAP
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
}`,Qm=`#define MATCAP
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
}`,jm=`#define NORMAL
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
}`,t0=`#define NORMAL
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
}`,e0=`#define PHONG
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
}`,n0=`#define PHONG
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
}`,i0=`#define STANDARD
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
}`,s0=`#define STANDARD
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
}`,r0=`#define TOON
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
}`,a0=`#define TOON
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
}`,o0=`uniform float size;
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#include <common>
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
}`,h0=`uniform vec3 color;
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
}`,u0=`uniform float rotation;
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
}`,d0=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:Df,alphahash_pars_fragment:Nf,alphamap_fragment:Uf,alphamap_pars_fragment:Of,alphatest_fragment:Bf,alphatest_pars_fragment:zf,aomap_fragment:kf,aomap_pars_fragment:Gf,batching_pars_vertex:Vf,batching_vertex:Hf,begin_vertex:Wf,beginnormal_vertex:Xf,bsdfs:qf,iridescence_fragment:Yf,bumpmap_pars_fragment:Zf,clipping_planes_fragment:Jf,clipping_planes_pars_fragment:$f,clipping_planes_pars_vertex:Kf,clipping_planes_vertex:Qf,color_fragment:jf,color_pars_fragment:tp,color_pars_vertex:ep,color_vertex:np,common:ip,defaultnormal_vertex:sp,displacementmap_pars_vertex:rp,displacementmap_vertex:ap,emissivemap_fragment:op,emissivemap_pars_fragment:lp,colorspace_fragment:cp,colorspace_pars_fragment:hp,envmap_fragment:up,envmap_common_pars_fragment:dp,envmap_pars_fragment:fp,envmap_pars_vertex:pp,envmap_physical_pars_fragment:Ap,envmap_vertex:mp,fog_vertex:gp,fog_pars_vertex:_p,fog_fragment:xp,fog_pars_fragment:vp,gradientmap_pars_fragment:yp,lightmap_pars_fragment:Mp,lights_lambert_fragment:Sp,lights_lambert_pars_fragment:bp,lights_pars_begin:wp,lights_toon_fragment:Ep,lights_toon_pars_fragment:Tp,lights_phong_fragment:Cp,lights_phong_pars_fragment:Rp,lights_physical_fragment:Ip,lights_physical_pars_fragment:Pp,lights_fragment_begin:Lp,lights_fragment_maps:Fp,lights_fragment_end:Dp,lightprobes_pars_fragment:Np,logdepthbuf_fragment:Up,logdepthbuf_pars_fragment:Op,logdepthbuf_pars_vertex:Bp,logdepthbuf_vertex:zp,map_fragment:kp,map_pars_fragment:Gp,map_particle_fragment:Vp,map_particle_pars_fragment:Hp,metalnessmap_fragment:Wp,metalnessmap_pars_fragment:Xp,morphinstance_vertex:qp,morphcolor_vertex:Yp,morphnormal_vertex:Zp,morphtarget_pars_vertex:Jp,morphtarget_vertex:$p,normal_fragment_begin:Kp,normal_fragment_maps:Qp,normal_pars_fragment:jp,normal_pars_vertex:tm,normal_vertex:em,normalmap_pars_fragment:nm,clearcoat_normal_fragment_begin:im,clearcoat_normal_fragment_maps:sm,clearcoat_pars_fragment:rm,iridescence_pars_fragment:am,opaque_fragment:om,packing:lm,premultiplied_alpha_fragment:cm,project_vertex:hm,dithering_fragment:um,dithering_pars_fragment:dm,roughnessmap_fragment:fm,roughnessmap_pars_fragment:pm,shadowmap_pars_fragment:mm,shadowmap_pars_vertex:gm,shadowmap_vertex:_m,shadowmask_pars_fragment:xm,skinbase_vertex:vm,skinning_pars_vertex:ym,skinning_vertex:Mm,skinnormal_vertex:Sm,specularmap_fragment:bm,specularmap_pars_fragment:wm,tonemapping_fragment:Am,tonemapping_pars_fragment:Em,transmission_fragment:Tm,transmission_pars_fragment:Cm,uv_pars_fragment:Rm,uv_pars_vertex:Im,uv_vertex:Pm,worldpos_vertex:Lm,background_vert:Fm,background_frag:Dm,backgroundCube_vert:Nm,backgroundCube_frag:Um,cube_vert:Om,cube_frag:Bm,depth_vert:zm,depth_frag:km,distance_vert:Gm,distance_frag:Vm,equirect_vert:Hm,equirect_frag:Wm,linedashed_vert:Xm,linedashed_frag:qm,meshbasic_vert:Ym,meshbasic_frag:Zm,meshlambert_vert:Jm,meshlambert_frag:$m,meshmatcap_vert:Km,meshmatcap_frag:Qm,meshnormal_vert:jm,meshnormal_frag:t0,meshphong_vert:e0,meshphong_frag:n0,meshphysical_vert:i0,meshphysical_frag:s0,meshtoon_vert:r0,meshtoon_frag:a0,points_vert:o0,points_frag:l0,shadow_vert:c0,shadow_frag:h0,sprite_vert:u0,sprite_frag:d0},Lt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]},probesIntensity:{value:[]}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},pi={basic:{uniforms:xn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:xn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:xn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:xn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:xn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:xn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:xn([Lt.points,Lt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:xn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:xn([Lt.common,Lt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:xn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:xn([Lt.sprite,Lt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distance:{uniforms:xn([Lt.common,Lt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distance_vert,fragmentShader:ge.distance_frag},shadow:{uniforms:xn([Lt.lights,Lt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};pi.physical={uniforms:xn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};var _l={r:0,b:0,g:0},f0=new Ie,id=new ce;id.set(-1,0,0,0,1,0,0,0,1);function p0(i,t,e,n,s,r){let a=new Qt(0),o=s===!0?0:1,l,c,h=null,p=0,d=null;function u(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){let M=y.backgroundBlurriness>0;E=t.get(E,M)}return E}function _(y){let E=!1,M=u(y);M===null?f(a,o):M&&M.isColor&&(f(M,1),E=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(y,E){let M=u(E);M&&M.isCubeTexture?(c===void 0&&(c=new ft(new rn(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:os(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(f0.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(id),c.material.toneMapped=Ae.getTransfer(M.colorSpace)!==De,(h!==M||p!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,p=M.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ft(new Bn(2,2),new zn({name:"BackgroundMaterial",uniforms:os(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Ae.getTransfer(M.colorSpace)!==De,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||p!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,p=M.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function f(y,E){y.getRGB(_l,Nc(i)),e.buffers.color.setClear(_l.r,_l.g,_l.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,E=1){a.set(y),o=E,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,f(a,o)},render:_,addToRenderList:b,dispose:m}}function m0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(V,q,k,Z,K){let rt=!1,$=p(V,Z,k,q);r!==$&&(r=$,c(r.object)),rt=u(V,Z,k,K),rt&&_(V,Z,k,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(rt||a)&&(a=!1,M(V,q,k,Z),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(V){return i.bindVertexArray(V)}function h(V){return i.deleteVertexArray(V)}function p(V,q,k,Z){let K=Z.wireframe===!0,rt=n[q.id];rt===void 0&&(rt={},n[q.id]=rt);let $=V.isInstancedMesh===!0?V.id:0,ht=rt[$];ht===void 0&&(ht={},rt[$]=ht);let et=ht[k.id];et===void 0&&(et={},ht[k.id]=et);let ut=et[K];return ut===void 0&&(ut=d(l()),et[K]=ut),ut}function d(V){let q=[],k=[],Z=[];for(let K=0;K<e;K++)q[K]=0,k[K]=0,Z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:k,attributeDivisors:Z,object:V,attributes:{},index:null}}function u(V,q,k,Z){let K=r.attributes,rt=q.attributes,$=0,ht=k.getAttributes();for(let et in ht)if(ht[et].location>=0){let Et=K[et],Ft=rt[et];if(Ft===void 0&&(et==="instanceMatrix"&&V.instanceMatrix&&(Ft=V.instanceMatrix),et==="instanceColor"&&V.instanceColor&&(Ft=V.instanceColor)),Et===void 0||Et.attribute!==Ft||Ft&&Et.data!==Ft.data)return!0;$++}return r.attributesNum!==$||r.index!==Z}function _(V,q,k,Z){let K={},rt=q.attributes,$=0,ht=k.getAttributes();for(let et in ht)if(ht[et].location>=0){let Et=rt[et];Et===void 0&&(et==="instanceMatrix"&&V.instanceMatrix&&(Et=V.instanceMatrix),et==="instanceColor"&&V.instanceColor&&(Et=V.instanceColor));let Ft={};Ft.attribute=Et,Et&&Et.data&&(Ft.data=Et.data),K[et]=Ft,$++}r.attributes=K,r.attributesNum=$,r.index=Z}function b(){let V=r.newAttributes;for(let q=0,k=V.length;q<k;q++)V[q]=0}function f(V){m(V,0)}function m(V,q){let k=r.newAttributes,Z=r.enabledAttributes,K=r.attributeDivisors;k[V]=1,Z[V]===0&&(i.enableVertexAttribArray(V),Z[V]=1),K[V]!==q&&(i.vertexAttribDivisor(V,q),K[V]=q)}function y(){let V=r.newAttributes,q=r.enabledAttributes;for(let k=0,Z=q.length;k<Z;k++)q[k]!==V[k]&&(i.disableVertexAttribArray(k),q[k]=0)}function E(V,q,k,Z,K,rt,$){$===!0?i.vertexAttribIPointer(V,q,k,K,rt):i.vertexAttribPointer(V,q,k,Z,K,rt)}function M(V,q,k,Z){b();let K=Z.attributes,rt=k.getAttributes(),$=q.defaultAttributeValues;for(let ht in rt){let et=rt[ht];if(et.location>=0){let ut=K[ht];if(ut===void 0&&(ht==="instanceMatrix"&&V.instanceMatrix&&(ut=V.instanceMatrix),ht==="instanceColor"&&V.instanceColor&&(ut=V.instanceColor)),ut!==void 0){let Et=ut.normalized,Ft=ut.itemSize,ne=t.get(ut);if(ne===void 0)continue;let j=ne.buffer,_t=ne.type,Rt=ne.bytesPerElement,Jt=_t===i.INT||_t===i.UNSIGNED_INT||ut.gpuType===Fo;if(ut.isInterleavedBufferAttribute){let Tt=ut.data,gt=Tt.isInterleavedBuffer===!0?Tt.stride:Tt.itemSize,Ne=ut.offset;if(Tt.isInstancedInterleavedBuffer||Tt.isInstancedBufferAttribute){for(let zt=0;zt<et.locationSize;zt++)m(et.location+zt,Tt.meshPerAttribute);V.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let zt=0;zt<et.locationSize;zt++)f(et.location+zt);i.bindBuffer(i.ARRAY_BUFFER,j);for(let zt=0;zt<et.locationSize;zt++)E(et.location+zt,Ft/et.locationSize,_t,Et,gt*Rt,(Ne+Ft/et.locationSize*zt)*Rt,Jt)}else{if(ut.isInstancedBufferAttribute){for(let Tt=0;Tt<et.locationSize;Tt++)m(et.location+Tt,ut.meshPerAttribute);V.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Tt=0;Tt<et.locationSize;Tt++)f(et.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,j);for(let Tt=0;Tt<et.locationSize;Tt++)E(et.location+Tt,Ft/et.locationSize,_t,Et,Ft*Rt,Ft/et.locationSize*Tt*Rt,Jt)}}else if($!==void 0){let Et=$[ht];if(Et!==void 0)switch(Et.length){case 2:i.vertexAttrib2fv(et.location,Et);break;case 3:i.vertexAttrib3fv(et.location,Et);break;case 4:i.vertexAttrib4fv(et.location,Et);break;default:i.vertexAttrib1fv(et.location,Et)}}}}y()}function R(){U();for(let V in n){let q=n[V];for(let k in q){let Z=q[k];for(let K in Z){let rt=Z[K];for(let $ in rt)h(rt[$].object),delete rt[$];delete Z[K]}}delete n[V]}}function T(V){if(n[V.id]===void 0)return;let q=n[V.id];for(let k in q){let Z=q[k];for(let K in Z){let rt=Z[K];for(let $ in rt)h(rt[$].object),delete rt[$];delete Z[K]}}delete n[V.id]}function x(V){for(let q in n){let k=n[q];for(let Z in k){let K=k[Z];if(K[V.id]===void 0)continue;let rt=K[V.id];for(let $ in rt)h(rt[$].object),delete rt[$];delete K[V.id]}}}function A(V){for(let q in n){let k=n[q],Z=V.isInstancedMesh===!0?V.id:0,K=k[Z];if(K!==void 0){for(let rt in K){let $=K[rt];for(let ht in $)h($[ht].object),delete $[ht];delete K[rt]}delete k[Z],Object.keys(k).length===0&&delete n[q]}}}function U(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:A,releaseStatesOfProgram:x,initAttributes:b,enableAttribute:f,disableUnusedAttributes:y}}function g0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function _0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Qn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let A=x===Kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==An&&x!==kn&&!A&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&jt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:u,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:M,maxSamples:R,samples:T}}function x0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new qn,o=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let u=p.length!==0||d||n!==0||s;return s=d,n=p.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=h(p,d,0)},this.setState=function(p,d,u){let _=p.clippingPlanes,b=p.clipIntersection,f=p.clipShadows,m=i.get(p);if(!s||_===null||_.length===0||r&&!f)r?h(null):c();else{let y=r?0:n,E=y*4,M=m.clippingState||null;l.value=M,M=h(_,d,E,u);for(let R=0;R!==E;++R)M[R]=e[R];m.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,d,u,_){let b=p!==null?p.length:0,f=null;if(b!==0){if(f=l.value,_!==!0||f===null){let m=u+b*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(f===null||f.length<m)&&(f=new Float32Array(m));for(let E=0,M=u;E!==b;++E,M+=4)a.copy(p[E]).applyMatrix4(y,o),a.normal.toArray(f,M),f[M+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,f}}var aa=class extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Tr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rn(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:is});r.uniforms.tEquirect.value=e;let a=new ft(s,r),o=e.minFilter;return e.minFilter===Ci&&(e.minFilter=bn),new Gs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Nu=256,v0=3,y0=20,sd=256,rd=16,M0=3,S0=new F,b0=new Qt,vl=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Gs(1,10,null),this._boxMesh=new ft(new rn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=S0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,d=l.autoClearColor,u=l.autoClearDepth,_=l.autoClearStencil,b=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(t.background=l.getClearColor(b0));let f=new Gs(n,s,h);return f.position.copy(o),f.update(l,t),l.autoClear=p,l.autoClearColor=d,l.autoClearDepth=u,l.autoClearStencil=_,t.background=b,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Nu,bu(t))}_fromTexture(t,e){t.mapping===rs||t.mapping===Ws?this._setSize(t.image.length===0?Nu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Uu(t,!1,!1),n=Math.log2(t)-v0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Uu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===rs||t.mapping===Ws?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ou()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=w0(),this._integrationMaterial=A0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/rd);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-M0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(sd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=E0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Uu(i,t,e){return new aa(i,{minFilter:Ci,generateMipmaps:t,type:Kn,colorSpace:dr,depthBuffer:e})}function oa(i,t,e){return new zn({name:i,uniforms:t,vertexShader:ge.cube_vert,fragmentShader:e,side:un,blending:is,depthTest:!1,depthWrite:!1})}function w0(){return oa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${sd}u

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
	`)}function A0(){return oa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:rd}},`

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
	`)}function E0(){return oa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${y0}
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
	`)}function Ou(){return oa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Bu(){return oa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureLod( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ), 0.0 ).rgb, 1.0 );

		}
	`)}function T0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===Io||u===Po)if(t.has(d)){let _=t.get(d).texture;return o(_,d.mapping)}else{let _=d.image;if(_&&_.height>0){let b=new aa(_.height);return b.fromEquirectangularTexture(i,d),t.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,_=u===Io||u===Po,b=u===rs||u===Ws;if(_||b){let f=e.get(d),m=f!==void 0?f.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new vl(i)),f=_?n.fromEquirectangular(d,f):n.fromCubemap(d,f),f.texture.pmremVersion=d.pmremVersion,e.set(d,f),f.texture;if(f!==void 0)return f.texture;{let y=d.image;return _&&y&&y.height>0||b&&y&&l(y)?(n===null&&(n=new vl(i)),f=_?n.fromEquirectangular(d):n.fromCubemap(d),f.texture.pmremVersion=d.pmremVersion,e.set(d,f),d.addEventListener("dispose",h),f.texture):null}}}return d}function o(d,u){return u===Io?d.mapping=rs:u===Po&&(d.mapping=Ws),d}function l(d){let u=0,_=6;for(let b=0;b<_;b++)d[b]!==void 0&&u++;return u===_}function c(d){let u=d.target;u.removeEventListener("dispose",c);let _=t.get(u);_!==void 0&&(t.delete(u),_.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let _=e.get(u);_!==void 0&&(e.delete(u),_.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function C0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&lr("WebGLRenderer: "+n+" extension not supported."),s}}}function R0(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(let f in _.attributes)t.remove(_.attributes[f]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let b=r.get(_);b&&(t.remove(b),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,b){return s[b.id]!==void 0||(b.addEventListener("dispose",o),s[b.id]=new WeakRef(b),a.register(b,b.id,b),e.memory.geometries++),b}function h(_){let b=_.attributes;for(let f in b)t.update(b[f],i.ARRAY_BUFFER)}function p(_){let b=_.index,f=_.attributes.position,m=0;if(f===void 0)return;let y=b!==null?b.count:f.count-1,E=f.count>=65535?Mr:yr,M=new E(Math.ceil(y/3)*6,1),R=M.array;if(b!==null){let x=b.array;m=b.version;for(let A=0,U=0;A<y;A+=3){let P=x[A+0],V=x[A+1],q=x[A+2];R[U++]=P,R[U++]=V,R[U++]=V,R[U++]=q,R[U++]=q,R[U++]=P}}else{m=f.version;for(let x=0,A=0;x<y;x+=3){let U=x+0,P=x+1,V=x+2;R[A++]=U,R[A++]=P,R[A++]=P,R[A++]=V,R[A++]=V,R[A++]=U}}M.version=m;let T=r.get(_);T&&t.remove(T),r.set(_,M)}function d(_){let b=r.get(_);if(b){let f=_.index;f!==null&&b.version<f.version&&p(_)}else p(_);return r.get(_)}function u(){for(let _ in s){let b=s[_].deref();b!==void 0&&l(b)}}return{get:c,update:h,getWireframeAttribute:d,dispose:u}}function I0(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,d){i.drawElements(n,d,r,p*a),e.update(d,n,1)}function c(p,d,u){u!==0&&(i.drawElementsInstanced(n,d,r,p*a,u),e.update(d,n,u))}function h(p,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,u);let b=0;for(let f=0;f<u;f++)b+=d[f];e.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function P0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ee("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function L0(i,t,e){let n=new WeakMap,s=new $e;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==p){let U=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",U)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],E=0;u===!0&&(E=1),_===!0&&(E=2),b===!0&&(E=3);let M=o.attributes.position.count*E,R=1;M>t.maxTextureSize&&(R=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*R*4*p),x=new gr(T,M,R,p);x.type=kn,x.needsUpdate=!0;let A=E*4;for(let P=0;P<p;P++){let V=f[P],q=m[P],k=y[P],Z=M*R*4*P;for(let K=0;K<V.count;K++){let rt=K*A;u===!0&&(s.fromBufferAttribute(V,K),T[Z+rt+0]=s.x,T[Z+rt+1]=s.y,T[Z+rt+2]=s.z,T[Z+rt+3]=0),_===!0&&(s.fromBufferAttribute(q,K),T[Z+rt+4]=s.x,T[Z+rt+5]=s.y,T[Z+rt+6]=s.z,T[Z+rt+7]=0),b===!0&&(s.fromBufferAttribute(k,K),T[Z+rt+8]=s.x,T[Z+rt+9]=s.y,T[Z+rt+10]=s.z,T[Z+rt+11]=k.itemSize===4?s.w:1)}}d={count:p,texture:x,size:new tt(M,R)},n.set(o,d),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let b=0;b<c.length;b++)u+=c[b];let _=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function F0(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,p=c.geometry,d=t.get(c,p);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var D0={[gc]:"LINEAR_TONE_MAPPING",[_c]:"REINHARD_TONE_MAPPING",[xc]:"CINEON_TONE_MAPPING",[Jr]:"ACES_FILMIC_TONE_MAPPING",[yc]:"AGX_TONE_MAPPING",[Mc]:"NEUTRAL_TONE_MAPPING",[vc]:"CUSTOM_TONE_MAPPING"};function N0(i,t,e,n,s,r){let a=new Rn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Le;h.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new le([0,2,0,0,2,0],2));let p=new fo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ft(h,p),u=new qr(-1,1,1,-1,0,1),_=null,b=null,f=!1,m,y=null,E=[],M=!1;this.setSize=function(R,T){a.setSize(R,T),o!==null&&o.setSize(R,T),l!==null&&l.setSize(R,T);for(let x=0;x<E.length;x++){let A=E[x];A.setSize&&A.setSize(R,T)}},this.setEffects=function(R){E=R,M=E.length>0&&E[0].isRenderPass===!0;let T=a.width,x=a.height;E.length>0&&o===null&&(o=new Rn(T,x,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),l=new Rn(T,x,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));let A=s===!0&&E.some(U=>U.needsDepthTexture===!0);A!==(a.depthTexture!==null)&&(A===!0&&c===null&&(c=new wi(T,x),r===!0&&(c.format=Ri,c.type=as)),a.dispose(),a.depthTexture=A?c:null,a.resolveDepthBuffer=A,a.storeMultisampledDepthBuffer=A);for(let U=0;U<E.length;U++){let P=E[U];P.setSize&&P.setSize(T,x),A&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(R,T){if(f||R.toneMapping===di&&E.length===0)return!1;if(y=T,T!==null){let x=T.width,A=T.height;(a.width!==x||a.height!==A)&&this.setSize(x,A)}return M===!1&&R.setRenderTarget(a),m=R.toneMapping,R.toneMapping=di,!0},this.hasRenderPass=function(){return M},this.end=function(R,T){R.toneMapping=m,f=!0;let x=a,A=o;for(let U=0;U<E.length;U++){let P=E[U];P.enabled!==!1&&(P.render(R,A,x,T),P.needsSwap!==!1&&(x=A,A=A===o?l:o))}if(_!==R.outputColorSpace||b!==R.toneMapping){_=R.outputColorSpace,b=R.toneMapping,p.defines={},Ae.getTransfer(_)===De&&(p.defines.SRGB_TRANSFER="");let U=D0[b];U&&(p.defines[U]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=x.texture,R.setRenderTarget(y),R.render(d,u),y=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}var ad=new wn,od=new wi(1,1),ld=new Rr(1),cd=new gr,hd=new eo,ud=new Tr,zu=[],ku=[],Gu=new Float32Array(16),Vu=new Float32Array(9),Hu=new Float32Array(4);function Ys(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=zu[s];if(r===void 0&&(r=new Float32Array(s),zu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function on(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ln(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ml(i,t){let e=ku[t];e===void 0&&(e=new Int32Array(t),ku[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function U0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function O0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2fv(this.addr,t),ln(e,t)}}function B0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;i.uniform3fv(this.addr,t),ln(e,t)}}function z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4fv(this.addr,t),ln(e,t)}}function k0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;Hu.set(n),i.uniformMatrix2fv(this.addr,!1,Hu),ln(e,n)}}function G0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;Vu.set(n),i.uniformMatrix3fv(this.addr,!1,Vu),ln(e,n)}}function V0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(on(e,n))return;Gu.set(n),i.uniformMatrix4fv(this.addr,!1,Gu),ln(e,n)}}function H0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function W0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2iv(this.addr,t),ln(e,t)}}function X0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3iv(this.addr,t),ln(e,t)}}function q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4iv(this.addr,t),ln(e,t)}}function Y0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2uiv(this.addr,t),ln(e,t)}}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3uiv(this.addr,t),ln(e,t)}}function $0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4uiv(this.addr,t),ln(e,t)}}function Sl(i){return i.version===0&&(i.compareFunction=Pc,i.needsUpdate=!0),i}function K0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Sl(od):r=ad,e.setTexture2D(t||r,s)}function Q0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hd,s)}function j0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Sl(ld):r=ud,e.setTextureCube(t||r,s)}function tg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||cd,s)}function eg(i){switch(i){case 5126:return U0;case 35664:return O0;case 35665:return B0;case 35666:return z0;case 35674:return k0;case 35675:return G0;case 35676:return V0;case 5124:case 35670:return H0;case 35667:case 35671:return W0;case 35668:case 35672:return X0;case 35669:case 35673:return q0;case 5125:return Y0;case 36294:return Z0;case 36295:return J0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return j0;case 36289:case 36303:case 36311:case 36292:return tg}}function ng(i,t){i.uniform1fv(this.addr,t)}function ig(i,t){let e=Ys(t,this.size,2);i.uniform2fv(this.addr,e)}function sg(i,t){let e=Ys(t,this.size,3);i.uniform3fv(this.addr,e)}function rg(i,t){let e=Ys(t,this.size,4);i.uniform4fv(this.addr,e)}function ag(i,t){let e=Ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function og(i,t){let e=Ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function lg(i,t){let e=Ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function cg(i,t){i.uniform1iv(this.addr,t)}function hg(i,t){i.uniform2iv(this.addr,t)}function ug(i,t){i.uniform3iv(this.addr,t)}function dg(i,t){i.uniform4iv(this.addr,t)}function fg(i,t){i.uniform1uiv(this.addr,t)}function pg(i,t){i.uniform2uiv(this.addr,t)}function mg(i,t){i.uniform3uiv(this.addr,t)}function gg(i,t){i.uniform4uiv(this.addr,t)}function _g(i,t,e){let n=this.cache,s=t.length,r=Ml(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Sl(od):a=ad;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function xg(i,t,e){let n=this.cache,s=t.length,r=Ml(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||hd,r[a])}function vg(i,t,e){let n=this.cache,s=t.length,r=Ml(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Sl(ld):a=ud;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function yg(i,t,e){let n=this.cache,s=t.length,r=Ml(e,s);on(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||cd,r[a])}function Mg(i){switch(i){case 5126:return ng;case 35664:return ig;case 35665:return sg;case 35666:return rg;case 35674:return ag;case 35675:return og;case 35676:return lg;case 5124:case 35670:return cg;case 35667:case 35671:return hg;case 35668:case 35672:return ug;case 35669:case 35673:return dg;case 5125:return fg;case 36294:return pg;case 36295:return mg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return yg}}var qc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=eg(e.type)}},Yc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mg(e.type)}},Zc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Wc=/(\w+)(\])?(\[|\.)?/g;function Wu(i,t){i.seq.push(t),i.map[t.id]=t}function Sg(i,t,e){let n=i.name,s=n.length;for(Wc.lastIndex=0;;){let r=Wc.exec(n),a=Wc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Wu(e,c===void 0?new qc(o,i,t):new Yc(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new Zc(o),Wu(e,p)),e=p}}}var qs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Sg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Xu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var bg=37297,wg=0;function Ag(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var qu=new ce;function Eg(i){Ae._getMatrix(qu,Ae.workingColorSpace,i);let t=`mat3( ${qu.elements.map(e=>e.toFixed(4))} )`;switch(Ae.getTransfer(i)){case fr:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Ag(i.getShaderSource(t),o)}else return r}function Tg(i,t){let e=Eg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Cg={[gc]:"Linear",[_c]:"Reinhard",[xc]:"Cineon",[Jr]:"ACESFilmic",[yc]:"AgX",[Mc]:"Neutral",[vc]:"Custom"};function Rg(i,t){let e=Cg[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var xl=new F;function Ig(){Ae.getLuminanceCoefficients(xl);let i=xl.x.toFixed(4),t=xl.y.toFixed(4),e=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function Lg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ra(i){return i!==""}function Zu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ju(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(i){return i.replace(Dg,Ng)}function Ng(i,t){let e=ge[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Jc(e)}var Ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $u(i){return i.replace(Ug,Og)}function Og(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ku(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Bg={[ns]:"SHADOWMAP_TYPE_PCF",[Vs]:"SHADOWMAP_TYPE_VSM"};function zg(i){return Bg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var kg={[Ws]:"ENVMAP_MODE_REFRACTION"};function Gg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":kg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Vg={[Zr]:"ENVMAP_BLENDING_MULTIPLY",[lu]:"ENVMAP_BLENDING_MIX",[cu]:"ENVMAP_BLENDING_ADD"};function Hg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Vg[i.combine]||"ENVMAP_BLENDING_NONE"}function Wg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=zg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Gg(e),p=Hg(e),d=Pg(e),u=Lg(r),_=s.createProgram(),b,f,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(b=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(ra).join(`
`),b.length>0&&(b+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(ra).join(`
`),f.length>0&&(f+=`
`)):(b=[Ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),f=[Ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?ge.tonemapping_pars_fragment:"",e.toneMapping!==di?Rg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,Tg("linearToOutputTexel",e.outputColorSpace),Ig(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ra).join(`
`)),a=Jc(a),a=Zu(a,e),a=Ju(a,e),o=Jc(o),o=Zu(o,e),o=Ju(o,e),a=$u(a),o=$u(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,b=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,f=["#define varying in",e.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let y=m+b+a,E=m+f+o,M=Xu(s,s.VERTEX_SHADER,y),R=Xu(s,s.FRAGMENT_SHADER,E);s.attachShader(_,M),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(P){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(_)||"",q=s.getShaderInfoLog(M)||"",k=s.getShaderInfoLog(R)||"",Z=V.trim(),K=q.trim(),rt=k.trim(),$=!0,ht=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,M,R);else{let et=Yu(s,M,"vertex"),ut=Yu(s,R,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Z+`
`+et+`
`+ut)}else Z!==""?jt("WebGLProgram: Program Info Log:",Z):(K===""||rt==="")&&(ht=!1);ht&&(P.diagnostics={runnable:$,programLog:Z,vertexShader:{log:K,prefix:b},fragmentShader:{log:rt,prefix:f}})}s.deleteShader(M),s.deleteShader(R),x=new qs(s,_),A=Fg(s,_)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let A;this.getAttributes=function(){return A===void 0&&T(this),A};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(_,bg)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=R,this}var Xg=0,$c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Kc(t),e.set(t,n)),n}},Kc=class{constructor(t){this.id=Xg++,this.code=t,this.usedTimes=0}};function qg(i){return i===Wi||i===ea||i===na}function Yg(i,t,e,n,s,r){let a=new _r,o=new $c,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,A,U,P,V,q){let k=P.fog,Z=V.geometry,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,rt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,$=t.get(x.envMap||K,rt),ht=d[x.type],et=n.precision;x.precision!==null&&(et=n.getMaxPrecision(x.precision),et!==x.precision&&jt("WebGLProgram.getParameters:",x.precision,"not supported, using",et,"instead."));let ut=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Et=ut!==void 0?ut.length:0,Ft=0;Z.morphAttributes.position!==void 0&&(Ft=1),Z.morphAttributes.normal!==void 0&&(Ft=2),Z.morphAttributes.color!==void 0&&(Ft=3);let ne,j,_t,Rt;if(ht){let X=pi[ht];ne=X.vertexShader,j=X.fragmentShader}else{ne=x.vertexShader,j=x.fragmentShader;let X=o.getVertexShaderStage(x),st=o.getFragmentShaderStage(x);o.update(x,X,st),_t=X.id,Rt=st.id}let Jt=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),gt=V.isInstancedMesh===!0,Ne=V.isBatchedMesh===!0,zt=!!x.map,fe=!!x.matcap,be=!!$,lt=be&&$.isPMREMTexture===!0,Mt=!!x.aoMap,xt=!!x.lightMap,Pt=!!x.bumpMap&&x.wireframe===!1,dt=!!x.normalMap,oe=!!x.displacementMap,kt=!!x.emissiveMap,de=!!x.metalnessMap,pe=!!x.roughnessMap,ye=x.anisotropy>0,B=x.clearcoat>0,He=x.diffuseRoughness>0,me=x.dispersion>0,Fe=x.retroreflectivity>0,St=x.iridescence>0,Ze=x.sheen>0,Yt=x.transmission>0,te=ye&&!!x.anisotropyMap,I=B&&!!x.clearcoatMap,S=B&&!!x.clearcoatNormalMap,J=B&&!!x.clearcoatRoughnessMap,mt=He&&!!x.diffuseRoughnessMap,ct=St&&!!x.iridescenceMap,bt=St&&!!x.iridescenceThicknessMap,wt=Ze&&!!x.sheenColorMap,at=Ze&&!!x.sheenRoughnessMap,ot=!!x.specularMap,At=!!x.specularColorMap,Gt=!!x.specularIntensityMap,g=Yt&&!!x.transmissionMap,w=Yt&&!!x.thicknessMap,C=!!x.gradientMap,L=!!x.alphaMap,D=x.alphaTest>0,O=!!x.alphaHash,Q=!!x.extensions,z=di;x.toneMapped&&(Jt===null||Jt.isXRRenderTarget===!0)&&(z=i.toneMapping);let nt=lt?$.isCompressedCubeTexture?$.image[0].mipmaps:$.mipmaps:null,W={shaderID:ht,shaderType:x.type,shaderName:x.name,vertexShader:ne,fragmentShader:j,defines:x.defines,customVertexShaderID:_t,customFragmentShaderID:Rt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:et,batching:Ne,batchingColor:Ne&&V._colorsTexture!==null,instancing:gt,instancingColor:gt&&V.instanceColor!==null,instancingMorph:gt&&V.morphTexture!==null,outputColorSpace:Jt===null?i.outputColorSpace:Jt.isXRRenderTarget===!0?Jt.texture.colorSpace:Ae.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:zt,matcap:fe,envMap:be,envMapMode:be&&$.mapping,envMapPMREM:lt,envMapMaxLod:lt?nt.length-1:null,envMapSize:lt?nt[0].width:null,aoMap:Mt,lightMap:xt,bumpMap:Pt,normalMap:dt,displacementMap:oe,emissiveMap:kt,normalMapObjectSpace:dt&&x.normalMapType===du,normalMapTangentSpace:dt&&x.normalMapType===ia,packedNormalMap:dt&&x.normalMapType===ia&&qg(x.normalMap.format),metalnessMap:de,roughnessMap:pe,anisotropy:ye,anisotropyMap:te,clearcoat:B,clearcoatMap:I,clearcoatNormalMap:S,clearcoatRoughnessMap:J,diffuseRoughness:He,diffuseRoughnessMap:mt,dispersion:me,retroreflection:Fe,iridescence:St,iridescenceMap:ct,iridescenceThicknessMap:bt,sheen:Ze,sheenColorMap:wt,sheenRoughnessMap:at,specularMap:ot,specularColorMap:At,specularIntensityMap:Gt,transmission:Yt,transmissionMap:g,thicknessMap:w,gradientMap:C,opaque:x.transparent===!1&&x.blending===Hs&&x.alphaToCoverage===!1,alphaMap:L,alphaTest:D,alphaHash:O,combine:x.combine,mapUv:zt&&u(x.map.channel),aoMapUv:Mt&&u(x.aoMap.channel),lightMapUv:xt&&u(x.lightMap.channel),bumpMapUv:Pt&&u(x.bumpMap.channel),normalMapUv:dt&&u(x.normalMap.channel),displacementMapUv:oe&&u(x.displacementMap.channel),emissiveMapUv:kt&&u(x.emissiveMap.channel),metalnessMapUv:de&&u(x.metalnessMap.channel),roughnessMapUv:pe&&u(x.roughnessMap.channel),anisotropyMapUv:te&&u(x.anisotropyMap.channel),clearcoatMapUv:I&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:mt&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:ct&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:at&&u(x.sheenRoughnessMap.channel),specularMapUv:ot&&u(x.specularMap.channel),specularColorMapUv:At&&u(x.specularColorMap.channel),specularIntensityMapUv:Gt&&u(x.specularIntensityMap.channel),transmissionMapUv:g&&u(x.transmissionMap.channel),thicknessMapUv:w&&u(x.thicknessMap.channel),alphaMapUv:L&&u(x.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(dt||ye),vertexNormals:!!Z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Z.attributes.uv&&(zt||L),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||Z.attributes.normal===void 0&&dt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Tt,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Ft,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbeGrids:q.filter(X=>X.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:z,decodeVideoTexture:zt&&x.map.isVideoTexture===!0&&Ae.getTransfer(x.map.colorSpace)===De,decodeVideoTextureEmissive:kt&&x.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(x.emissiveMap.colorSpace)===De,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ge,flipSided:x.side===un,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Q&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Q&&x.extensions.multiDraw===!0||Ne)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return W.vertexUv1s=l.has(1),W.vertexUv2s=l.has(2),W.vertexUv3s=l.has(3),l.clear(),W}function b(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let U in x.defines)A.push(U),A.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(f(A,x),m(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function f(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapPMREM),x.push(A.envMapMaxLod),x.push(A.envMapSize),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.diffuseRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbeGrids),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function m(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.diffuseRoughness&&a.enable(25),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function y(x){let A=d[x.type],U;if(A){let P=pi[A];U=Lu.clone(P.uniforms)}else U=x.uniforms;return U}function E(x,A){let U=h.get(A);return U!==void 0?++U.usedTimes:(U=new Wg(i,A,x,s),c.push(U),h.set(A,U)),U}function M(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function R(x){o.remove(x)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:b,getUniforms:y,acquireProgram:E,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:T}}function Zg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Jg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Qu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ju(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,_,b,f,m){let y=i[t];return y===void 0?(y={id:d.id,object:d,geometry:u,material:_,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:f,group:m},i[t]=y):(y.id=d.id,y.object=d,y.geometry=u,y.material=_,y.materialVariant=a(d),y.groupOrder=b,y.renderOrder=d.renderOrder,y.z=f,y.group=m),t++,y}function l(d,u,_,b,f,m,y){y.reversedDepth===!0&&(f=-f);let E=o(d,u,_,b,f,m);_.transmission>0?n.push(E):_.transparent===!0?s.push(E):e.push(E)}function c(d,u,_,b,f,m){let y=o(d,u,_,b,f,m);_.transmission>0?n.unshift(y):_.transparent===!0?s.unshift(y):e.unshift(y)}function h(d,u){e.length>1&&e.sort(d||Jg),n.length>1&&n.sort(u||Qu),s.length>1&&s.sort(u||Qu)}function p(){for(let d=t,u=i.length;d<u;d++){let _=i[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function $g(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new ju,i.set(n,[a])):s>=r.length?(a=new ju,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Kg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new Qt};break;case"SpotLight":e={position:new F,direction:new F,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Qg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var jg=0;function t_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function e_(i){let t=new Kg,e=Qg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0},s=new F,r=new Ie,a=new Ie;function o(c){let h=0,p=0,d=0,u=0,_=0,b=0,f=0,m=0,y=0,E=0,M=0,R=0,T=0,x=0,A=0,U=0;c.sort(t_);for(let V=0,q=c.length;V<q;V++){let k=c[V],Z=k.color,K=k.intensity,rt=k.distance,$=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Wi?$=k.shadow.map.texture:$=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)h+=Z.r*K,p+=Z.g*K,d+=Z.b*K;else if(k.isSunLight){let ht=t.get(k);if(ht.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let et=k.shadow,ut=e.get(k);ut.shadowIntensity=et.intensity,ut.shadowBias=et.bias,ut.shadowNormalBias=et.normalBias,ut.shadowRadius=et.radius,ut.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[_]=ut,n.sunShadowMap[_]=$;let Et=et.getViewportCount();for(let Ft=0;Ft<Et;Ft++)n.sunShadowMatrix[b+Ft]=et.getMatrix(Ft),n.sunShadowCascade[b+Ft]=et._cascadeData[Ft];b+=Et,_++}n.sun[u]=ht,u++}else if(k.isDirectionalLight){let ht=t.get(k);if(ht.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let et=k.shadow,ut=e.get(k);ut.shadowIntensity=et.intensity,ut.shadowBias=et.bias,ut.shadowNormalBias=et.normalBias,ut.shadowRadius=et.radius,ut.shadowMapSize=et.mapSize,n.directionalShadow[f]=ut,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=k.shadow.matrix,R++}n.directional[f]=ht,f++}else if(k.isSpotLight){let ht=t.get(k);ht.position.setFromMatrixPosition(k.matrixWorld),ht.color.copy(Z).multiplyScalar(K),ht.distance=rt,ht.coneCos=Math.cos(k.angle),ht.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ht.decay=k.decay,n.spot[y]=ht;let et=k.shadow;if(k.map&&(n.spotLightMap[A]=k.map,A++,et.updateMatrices(k),k.castShadow&&U++),n.spotLightMatrix[y]=et.matrix,k.castShadow){let ut=e.get(k);ut.shadowIntensity=et.intensity,ut.shadowBias=et.bias,ut.shadowNormalBias=et.normalBias,ut.shadowRadius=et.radius,ut.shadowMapSize=et.mapSize,n.spotShadow[y]=ut,n.spotShadowMap[y]=$,x++}y++}else if(k.isRectAreaLight){let ht=t.get(k);ht.color.copy(Z).multiplyScalar(K),ht.halfWidth.set(k.width*.5,0,0),ht.halfHeight.set(0,k.height*.5,0),n.rectArea[E]=ht,E++}else if(k.isPointLight){let ht=t.get(k);if(ht.color.copy(k.color).multiplyScalar(k.intensity),ht.distance=k.distance,ht.decay=k.decay,k.castShadow){let et=k.shadow,ut=e.get(k);ut.shadowIntensity=et.intensity,ut.shadowBias=et.bias,ut.shadowNormalBias=et.normalBias,ut.shadowRadius=et.radius,ut.shadowMapSize=et.mapSize,ut.shadowCameraNear=et.camera.near,ut.shadowCameraFar=et.camera.far,n.pointShadow[m]=ut,n.pointShadowMap[m]=$,n.pointShadowMatrix[m]=k.shadow.matrix,T++}n.point[m]=ht,m++}else if(k.isHemisphereLight){let ht=t.get(k);ht.skyColor.copy(k.color).multiplyScalar(K),ht.groundColor.copy(k.groundColor).multiplyScalar(K),n.hemi[M]=ht,M++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=d;let P=n.hash;(P.sunLength!==u||P.directionalLength!==f||P.pointLength!==m||P.spotLength!==y||P.rectAreaLength!==E||P.hemiLength!==M||P.numSunShadows!==_||P.numDirectionalShadows!==R||P.numPointShadows!==T||P.numSpotShadows!==x||P.numSpotMaps!==A)&&(n.sun.length=u,n.directional.length=f,n.spot.length=y,n.rectArea.length=E,n.point.length=m,n.hemi.length=M,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+A-U,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=U,P.sunLength=u,P.directionalLength=f,P.pointLength=m,P.spotLength=y,P.rectAreaLength=E,P.hemiLength=M,P.numSunShadows=_,P.numDirectionalShadows=R,P.numPointShadows=T,P.numSpotShadows=x,P.numSpotMaps=A,n.version=jg++)}function l(c,h){let p=0,d=0,u=0,_=0,b=0,f=0,m=h.matrixWorldInverse;for(let y=0,E=c.length;y<E;y++){let M=c[y];if(M.isSunLight){let R=n.sun[p];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(m),p++}else if(M.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),d++}else if(M.isSpotLight){let R=n.spot[_];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),_++}else if(M.isRectAreaLight){let R=n.rectArea[b];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),b++}else if(M.isPointLight){let R=n.point[u];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){let R=n.hemi[f];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(m),f++}}}return{setup:o,setupView:l,state:n}}function td(i){let t=new e_(i),e=[],n=[],s=[];function r(p){h.camera=p,e.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):e.push(p)}function o(p){n.push(p)}function l(){t.setup(e),s.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function c(p){t.setupView(e,p)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function n_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new td(i),t.set(s,[o])):r>=a.length?(o=new td(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var i_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s_=`uniform sampler2D shadow_pass;
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
}`,r_=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],a_=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],ed=new Ie,sa=new F,Xc=new F;function o_(i,t,e){let n=new Oi,s=new tt,r=new tt,a=new $e,o=new po,l=new mo,c={},h=e.maxTextureSize,p={[Hi]:un,[un]:Hi,[Ge]:Ge},d=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:i_,fragmentShader:s_}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let _=new Le;_.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ft(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ns;let m=this.type;this.render=function(T,x,A){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;this.type===Hh&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ns);let U=i.getRenderTarget(),P=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),q=i.state;q.setBlending(is),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let k=m!==this.type;k&&x.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(K=>K.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,K=T.length;Z<K;Z++){let rt=T[Z],$=rt.shadow;if($===void 0){jt("WebGLShadowMap:",rt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let ht=$.getFrameExtents();s.multiply(ht),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,$.mapSize.y=r.y));let et=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=et,$.map===null||k===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Vs){if(rt.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Rn(s.x,s.y,{format:Wi,type:Kn,minFilter:bn,magFilter:bn,generateMipmaps:!1}),$.map.texture.name=rt.name+".shadowMap",$.map.depthTexture=new wi(s.x,s.y,kn),$.map.depthTexture.name=rt.name+".shadowMapDepth",$.map.depthTexture.format=bi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=hn,$.map.depthTexture.magFilter=hn}else rt.isPointLight?($.map=new aa(s.x),$.map.depthTexture=new Rr(s.x,$n)):($.map=new Rn(s.x,s.y),$.map.depthTexture=new wi(s.x,s.y,$n)),$.map.depthTexture.name=rt.name+".shadowMap",$.map.depthTexture.format=bi,this.type===ns?($.map.depthTexture.compareFunction=et?Ic:Rc,$.map.depthTexture.minFilter=bn,$.map.depthTexture.magFilter=bn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=hn,$.map.depthTexture.magFilter=hn);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let ut=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();rt.isPointLight!==!0&&$.updateMatrices(rt,A);let Et=($.camera.layers.mask&4294967294)!==0?$.camera.layers:A.layers;for(let Ft=0;Ft<ut;Ft++){let ne=$.getCamera(Ft);if(rt.isPointLight){let j=$.camera,_t=$.matrix,Rt=rt.distance||j.far;Rt!==j.far&&(j.far=Rt,j.updateProjectionMatrix()),sa.setFromMatrixPosition(rt.matrixWorld),j.position.copy(sa),Xc.copy(j.position),Xc.add(r_[Ft]),j.up.copy(a_[Ft]),j.lookAt(Xc),j.updateMatrixWorld(),_t.makeTranslation(-sa.x,-sa.y,-sa.z),ed.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),$._frustum.setFromProjectionMatrix(ed,j.coordinateSystem,j.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,Ft),i.clear();else{Ft===0&&(i.setRenderTarget($.map),i.clear());let j=$.getViewport(Ft);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),q.viewport(a)}n=$.getFrustum(Ft),M(x,A,ne,rt,Et,this.type)}$.isPointLightShadow!==!0&&this.type===Vs&&y($,A),$.needsUpdate=!1}m=this.type,f.needsUpdate=!1,i.setRenderTarget(U,P,V)};function y(T,x){let A=t.update(b);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null?T.mapPass=new Rn(s.x,s.y,{format:Wi,type:Kn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(x,null,A,d,b,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(x,null,A,u,b,null)}function E(T,x,A,U){let P=null,V=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(V!==void 0)P=V;else if(P=A.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let q=P.uuid,k=x.uuid,Z=c[q];Z===void 0&&(Z={},c[q]=Z);let K=Z[k];K===void 0&&(K=P.clone(),Z[k]=K,x.addEventListener("dispose",R)),P=K}if(P.visible=x.visible,P.wireframe=x.wireframe,U===Vs?P.side=x.shadowSide!==null?x.shadowSide:x.side:P.side=x.shadowSide!==null?x.shadowSide:p[x.side],P.alphaMap=x.alphaMap,P.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,P.map=x.map,P.clipShadows=x.clipShadows,P.clippingPlanes=x.clippingPlanes,P.clipIntersection=x.clipIntersection,P.displacementMap=x.displacementMap,P.displacementScale=x.displacementScale,P.displacementBias=x.displacementBias,P.wireframeLinewidth=x.wireframeLinewidth,P.linewidth=x.linewidth,A.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let q=i.properties.get(P);q.light=A}return P}function M(T,x,A,U,P,V){if(T.visible===!1)return;if(T.layers.test(P)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&V===Vs)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);let Z=t.update(T),K=T.material;if(Array.isArray(K)){let rt=Z.groups;for(let $=0,ht=rt.length;$<ht;$++){let et=rt[$],ut=K[et.materialIndex];if(ut&&ut.visible){let Et=E(T,ut,U,V);T.onBeforeShadow(i,T,x,A,Z,Et,et),i.renderBufferDirect(A,null,Z,Et,T,et),T.onAfterShadow(i,T,x,A,Z,Et,et)}}}else if(K.visible){let rt=E(T,K,U,V);T.onBeforeShadow(i,T,x,A,Z,rt,null),i.renderBufferDirect(A,null,Z,rt,T,null),T.onAfterShadow(i,T,x,A,Z,rt,null)}}let k=T.children;for(let Z=0,K=k.length;Z<K;Z++)M(k[Z],x,A,U,P,V)}function R(T){T.target.removeEventListener("dispose",R);for(let A in c){let U=c[A],P=T.target.uuid;P in U&&(U[P].dispose(),delete U[P])}}}function l_(i,t){function e(){let g=!1,w=new $e,C=null,L=new $e(0,0,0,0);return{setMask:function(D){C!==D&&!g&&(i.colorMask(D,D,D,D),C=D)},setLocked:function(D){g=D},setClear:function(D,O,Q,z,nt){nt===!0&&(D*=z,O*=z,Q*=z),w.set(D,O,Q,z),L.equals(w)===!1&&(i.clearColor(D,O,Q,z),L.copy(w))},reset:function(){g=!1,C=null,L.set(-1,0,0,0)}}}function n(){let g=!1,w=!1,C=null,L=null,D=null;return{setReversed:function(O){if(w!==O){let Q=t.get("EXT_clip_control");O?Q.clipControlEXT(Q.LOWER_LEFT_EXT,Q.ZERO_TO_ONE_EXT):Q.clipControlEXT(Q.LOWER_LEFT_EXT,Q.NEGATIVE_ONE_TO_ONE_EXT),w=O;let z=D;D=null,this.setClear(z)}},getReversed:function(){return w},setTest:function(O){O?Tt(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(O){C!==O&&!g&&(i.depthMask(O),C=O)},setFunc:function(O){if(w&&(O=Su[O]),L!==O){switch(O){case Ha:i.depthFunc(i.NEVER);break;case Wa:i.depthFunc(i.ALWAYS);break;case Xa:i.depthFunc(i.LESS);break;case Cs:i.depthFunc(i.LEQUAL);break;case qa:i.depthFunc(i.EQUAL);break;case Ya:i.depthFunc(i.GEQUAL);break;case Za:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}L=O}},setLocked:function(O){g=O},setClear:function(O){D!==O&&(D=O,w&&(O=1-O),i.clearDepth(O))},reset:function(){g=!1,C=null,L=null,D=null,w=!1}}}function s(){let g=!1,w=null,C=null,L=null,D=null,O=null,Q=null,z=null,nt=null;return{setTest:function(W){g||(W?Tt(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(W){w!==W&&!g&&(i.stencilMask(W),w=W)},setFunc:function(W,X,st){(C!==W||L!==X||D!==st)&&(i.stencilFunc(W,X,st),C=W,L=X,D=st)},setOp:function(W,X,st){(O!==W||Q!==X||z!==st)&&(i.stencilOp(W,X,st),O=W,Q=X,z=st)},setLocked:function(W){g=W},setClear:function(W){nt!==W&&(i.clearStencil(W),nt=W)},reset:function(){g=!1,w=null,C=null,L=null,D=null,O=null,Q=null,z=null,nt=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},p={},d={},u=new WeakMap,_=[],b=null,f=!1,m=null,y=null,E=null,M=null,R=null,T=null,x=null,A=new Qt(0,0,0),U=0,P=!1,V=null,q=null,k=null,Z=null,K=null,rt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,ht=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(et)[1]),$=ht>=1):et.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),$=ht>=2);let ut=null,Et={},Ft=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),j=new $e().fromArray(Ft),_t=new $e().fromArray(ne);function Rt(g,w,C,L){let D=new Uint8Array(4),O=i.createTexture();i.bindTexture(g,O),i.texParameteri(g,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(g,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Q=0;Q<C;Q++)g===i.TEXTURE_3D||g===i.TEXTURE_2D_ARRAY?i.texImage3D(w,0,i.RGBA,1,1,L,0,i.RGBA,i.UNSIGNED_BYTE,D):i.texImage2D(w+Q,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,D);return O}let Jt={};Jt[i.TEXTURE_2D]=Rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Jt[i.TEXTURE_CUBE_MAP]=Rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Jt[i.TEXTURE_2D_ARRAY]=Rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Jt[i.TEXTURE_3D]=Rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Tt(i.DEPTH_TEST),a.setFunc(Cs),dt(!1),oe(uc),Tt(i.CULL_FACE),xt(is);function Tt(g){h[g]!==!0&&(i.enable(g),h[g]=!0)}function gt(g){h[g]!==!1&&(i.disable(g),h[g]=!1)}function Ne(g,w){return g===i.FRAMEBUFFER?d[i.DRAW_FRAMEBUFFER]===w&&d[i.READ_FRAMEBUFFER]===w?!1:(i.bindFramebuffer(i.FRAMEBUFFER,w),d[i.DRAW_FRAMEBUFFER]=w,d[i.READ_FRAMEBUFFER]=w,!0):d[g]===w?!1:(i.bindFramebuffer(g,w),d[g]=w,!0)}function zt(g){return g===i.FRAMEBUFFER&&(g=i.DRAW_FRAMEBUFFER),d[g]||null}function fe(g,w){let C=_,L=!1;if(g){C=u.get(w),C===void 0&&(C=[],u.set(w,C));let D=g.textures;if(C.length!==D.length||C[0]!==i.COLOR_ATTACHMENT0){for(let O=0,Q=D.length;O<Q;O++)C[O]=i.COLOR_ATTACHMENT0+O;C.length=D.length,L=!0}}else C[0]!==i.BACK&&(C[0]=i.BACK,L=!0);L&&i.drawBuffers(C)}function be(g){return b!==g?(i.useProgram(g),b=g,!0):!1}let lt={[ss]:i.FUNC_ADD,[Xh]:i.FUNC_SUBTRACT,[qh]:i.FUNC_REVERSE_SUBTRACT};lt[Yh]=i.MIN,lt[Zh]=i.MAX;let Mt={[Jh]:i.ZERO,[$h]:i.ONE,[Kh]:i.SRC_COLOR,[pc]:i.SRC_ALPHA,[iu]:i.SRC_ALPHA_SATURATE,[eu]:i.DST_COLOR,[jh]:i.DST_ALPHA,[Qh]:i.ONE_MINUS_SRC_COLOR,[mc]:i.ONE_MINUS_SRC_ALPHA,[nu]:i.ONE_MINUS_DST_COLOR,[tu]:i.ONE_MINUS_DST_ALPHA,[su]:i.CONSTANT_COLOR,[ru]:i.ONE_MINUS_CONSTANT_COLOR,[au]:i.CONSTANT_ALPHA,[ou]:i.ONE_MINUS_CONSTANT_ALPHA};function xt(g,w,C,L,D,O,Q,z,nt,W){if(g===is){f===!0&&(gt(i.BLEND),f=!1);return}if(f===!1&&(Tt(i.BLEND),f=!0),g!==Wh){if(g!==m||W!==P){if((y!==ss||R!==ss)&&(i.blendEquation(i.FUNC_ADD),y=ss,R=ss),W)switch(g){case Hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ui:i.blendFunc(i.ONE,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ee("WebGLState: Invalid blending: ",g);break}else switch(g){case Hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dc:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fc:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",g);break}E=null,M=null,T=null,x=null,A.set(0,0,0),U=0,m=g,P=W}return}D=D||w,O=O||C,Q=Q||L,(w!==y||D!==R)&&(i.blendEquationSeparate(lt[w],lt[D]),y=w,R=D),(C!==E||L!==M||O!==T||Q!==x)&&(i.blendFuncSeparate(Mt[C],Mt[L],Mt[O],Mt[Q]),E=C,M=L,T=O,x=Q),(z.equals(A)===!1||nt!==U)&&(i.blendColor(z.r,z.g,z.b,nt),A.copy(z),U=nt),m=g,P=!1}function Pt(g,w){g.side===Ge?gt(i.CULL_FACE):Tt(i.CULL_FACE);let C=g.side===un;w&&(C=!C),dt(C),g.blending===Hs&&g.transparent===!1?xt(is):xt(g.blending,g.blendEquation,g.blendSrc,g.blendDst,g.blendEquationAlpha,g.blendSrcAlpha,g.blendDstAlpha,g.blendColor,g.blendAlpha,g.premultipliedAlpha),a.setFunc(g.depthFunc),a.setTest(g.depthTest),a.setMask(g.depthWrite),r.setMask(g.colorWrite);let L=g.stencilWrite;o.setTest(L),L&&(o.setMask(g.stencilWriteMask),o.setFunc(g.stencilFunc,g.stencilRef,g.stencilFuncMask),o.setOp(g.stencilFail,g.stencilZFail,g.stencilZPass)),de(g.polygonOffset,g.polygonOffsetFactor,g.polygonOffsetUnits),g.alphaToCoverage===!0?Tt(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(g){V!==g&&(g?i.frontFace(i.CW):i.frontFace(i.CCW),V=g)}function oe(g){g!==Gh?(Tt(i.CULL_FACE),g!==q&&(g===uc?i.cullFace(i.BACK):g===Vh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),q=g}function kt(g){g!==k&&($&&i.lineWidth(g),k=g)}function de(g,w,C){g?(Tt(i.POLYGON_OFFSET_FILL),(Z!==w||K!==C)&&(Z=w,K=C,a.getReversed()&&(w=-w,C=-C),i.polygonOffset(w,C))):gt(i.POLYGON_OFFSET_FILL)}function pe(g){g?Tt(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function ye(g){g===void 0&&(g=i.TEXTURE0+rt-1),ut!==g&&(i.activeTexture(g),ut=g)}function B(g,w,C){C===void 0&&(ut===null?C=i.TEXTURE0+rt-1:C=ut);let L=Et[C];L===void 0&&(L={type:void 0,texture:void 0},Et[C]=L),(L.type!==g||L.texture!==w)&&(ut!==C&&(i.activeTexture(C),ut=C),i.bindTexture(g,w||Jt[g]),L.type=g,L.texture=w)}function He(){let g=Et[ut];g!==void 0&&g.type!==void 0&&(i.bindTexture(g.type,null),g.type=void 0,g.texture=void 0)}function me(){try{i.compressedTexImage2D(...arguments)}catch(g){ee("WebGLState:",g)}}function Fe(){try{i.compressedTexImage3D(...arguments)}catch(g){ee("WebGLState:",g)}}function St(){try{i.texSubImage2D(...arguments)}catch(g){ee("WebGLState:",g)}}function Ze(){try{i.texSubImage3D(...arguments)}catch(g){ee("WebGLState:",g)}}function Yt(){try{i.compressedTexSubImage2D(...arguments)}catch(g){ee("WebGLState:",g)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(g){ee("WebGLState:",g)}}function I(){try{i.texStorage2D(...arguments)}catch(g){ee("WebGLState:",g)}}function S(){try{i.texStorage3D(...arguments)}catch(g){ee("WebGLState:",g)}}function J(){try{i.texImage2D(...arguments)}catch(g){ee("WebGLState:",g)}}function mt(){try{i.texImage3D(...arguments)}catch(g){ee("WebGLState:",g)}}function ct(g){return p[g]!==void 0?p[g]:i.getParameter(g)}function bt(g,w){p[g]!==w&&(i.pixelStorei(g,w),p[g]=w)}function wt(g){j.equals(g)===!1&&(i.scissor(g.x,g.y,g.z,g.w),j.copy(g))}function at(g){_t.equals(g)===!1&&(i.viewport(g.x,g.y,g.z,g.w),_t.copy(g))}function ot(g,w){let C=c.get(w);C===void 0&&(C=new WeakMap,c.set(w,C));let L=C.get(g);L===void 0&&(L=i.getUniformBlockIndex(w,g.name),i.uniformBlockBinding(w,L,L),C.set(g,L))}function At(g,w,C){let D=c.get(w).get(g);l[D]!==C&&(i.bindBufferBase(i.UNIFORM_BUFFER,D,C),l[D]=C)}function Gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},ut=null,Et={},d={},l={},u=new WeakMap,_=[],b=null,f=!1,m=null,y=null,E=null,M=null,R=null,T=null,x=null,A=new Qt(0,0,0),U=0,P=!1,V=null,q=null,k=null,Z=null,K=null,j.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Tt,disable:gt,bindFramebuffer:Ne,getBoundFramebuffer:zt,drawBuffers:fe,useProgram:be,setBlending:xt,setMaterial:Pt,setFlipSided:dt,setCullFace:oe,setLineWidth:kt,setPolygonOffset:de,setScissorTest:pe,activeTexture:ye,bindTexture:B,unbindTexture:He,compressedTexImage2D:me,compressedTexImage3D:Fe,texImage2D:J,texImage3D:mt,pixelStorei:bt,getParameter:ct,updateUBOMapping:ot,uniformBlockBinding:At,texStorage2D:I,texStorage3D:S,texSubImage2D:St,texSubImage3D:Ze,compressedTexSubImage2D:Yt,compressedTexSubImage3D:te,scissor:wt,viewport:at,reset:Gt}}function c_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,h=new WeakMap,p=new Set,d,u=new WeakMap,_=new Set,b=new FinalizationRegistry(I=>_.delete(I)),f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,S){return f?new OffscreenCanvas(I,S):pr("canvas")}function y(I,S,J){let mt=1,ct=te(I);if((ct.width>J||ct.height>J)&&(mt=J/Math.max(ct.width,ct.height)),mt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let bt=Math.floor(mt*ct.width),wt=Math.floor(mt*ct.height);d===void 0&&(d=m(bt,wt));let at=S?m(bt,wt):d;return at.width=bt,at.height=wt,at.getContext("2d").drawImage(I,0,0,bt,wt),jt("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+bt+"x"+wt+")."),at}else return"data"in I&&jt("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),I;return I}function E(I){return I.generateMipmaps}function M(I){i.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(I,S,J,mt,ct,bt=!1){if(I!==null){if(i[I]!==void 0)return i[I];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let wt;mt&&(wt=t.get("EXT_texture_norm16"),wt||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let at=S;if(S===i.RED&&(J===i.FLOAT&&(at=i.R32F),J===i.HALF_FLOAT&&(at=i.R16F),J===i.UNSIGNED_BYTE&&(at=i.R8),J===i.UNSIGNED_SHORT&&wt&&(at=wt.R16_EXT),J===i.SHORT&&wt&&(at=wt.R16_SNORM_EXT)),S===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(at=i.R8UI),J===i.UNSIGNED_SHORT&&(at=i.R16UI),J===i.UNSIGNED_INT&&(at=i.R32UI),J===i.BYTE&&(at=i.R8I),J===i.SHORT&&(at=i.R16I),J===i.INT&&(at=i.R32I)),S===i.RG&&(J===i.FLOAT&&(at=i.RG32F),J===i.HALF_FLOAT&&(at=i.RG16F),J===i.UNSIGNED_BYTE&&(at=i.RG8),J===i.UNSIGNED_SHORT&&wt&&(at=wt.RG16_EXT),J===i.SHORT&&wt&&(at=wt.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(at=i.RG8UI),J===i.UNSIGNED_SHORT&&(at=i.RG16UI),J===i.UNSIGNED_INT&&(at=i.RG32UI),J===i.BYTE&&(at=i.RG8I),J===i.SHORT&&(at=i.RG16I),J===i.INT&&(at=i.RG32I)),S===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(at=i.RGB8UI),J===i.UNSIGNED_SHORT&&(at=i.RGB16UI),J===i.UNSIGNED_INT&&(at=i.RGB32UI),J===i.BYTE&&(at=i.RGB8I),J===i.SHORT&&(at=i.RGB16I),J===i.INT&&(at=i.RGB32I)),S===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),J===i.UNSIGNED_INT&&(at=i.RGBA32UI),J===i.BYTE&&(at=i.RGBA8I),J===i.SHORT&&(at=i.RGBA16I),J===i.INT&&(at=i.RGBA32I)),S===i.RGB&&(J===i.UNSIGNED_SHORT&&wt&&(at=wt.RGB16_EXT),J===i.SHORT&&wt&&(at=wt.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(at=i.R11F_G11F_B10F)),S===i.RGBA){let ot=bt?fr:Ae.getTransfer(ct);J===i.FLOAT&&(at=i.RGBA32F),J===i.HALF_FLOAT&&(at=i.RGBA16F),J===i.UNSIGNED_BYTE&&(at=ot===De?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&wt&&(at=wt.RGBA16_EXT),J===i.SHORT&&wt&&(at=wt.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function x(I,S){let J;return I?S===null||S===$n||S===as?J=i.DEPTH24_STENCIL8:S===kn?J=i.DEPTH32F_STENCIL8:S===Xs&&(J=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===$n||S===as?J=i.DEPTH_COMPONENT24:S===kn?J=i.DEPTH_COMPONENT32F:S===Xs&&(J=i.DEPTH_COMPONENT16),J}function A(I,S){return E(I)===!0||I.isFramebufferTexture&&I.minFilter!==hn&&I.minFilter!==bn?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function U(I){let S=new WeakRef(I);n.get(I).__ref=S,_.add(S),b.register(I,S,S)}function P(I){let S=n.get(I).__ref;S!==void 0&&(_.delete(S),b.unregister(S))}function V(I){k(I.target)}function q(I){Z(I.target)}function k(I){I.removeEventListener("dispose",V),P(I),rt(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&p.delete(I)}function Z(I){I.removeEventListener("dispose",q),P(I),ht(I)}function K(){for(let I of _){let S=I.deref();S!==void 0&&(S.isRenderTarget===!0?Z(S):k(S))}_.clear(),p.clear()}function rt(I){let S=n.get(I);if(S.__webglInit===void 0)return;let J=I.source,mt=u.get(J);if(mt){let ct=mt[S.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&$(I),Object.keys(mt).length===0&&u.delete(J)}n.remove(I)}function $(I){let S=n.get(I);i.deleteTexture(S.__webglTexture);let J=I.source,mt=u.get(J);delete mt[S.__cacheKey],a.memory.textures--}function ht(I){let S=n.get(I);S.__depthDisposeCallback&&S.__depthDisposeCallback();let J=I.depthTexture;if(J&&J.renderTarget===I&&k(J),I.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(S.__webglFramebuffer[ct]))for(let bt=0;bt<S.__webglFramebuffer[ct].length;bt++)i.deleteFramebuffer(S.__webglFramebuffer[ct][bt]);else i.deleteFramebuffer(S.__webglFramebuffer[ct]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ct])}else{if(Array.isArray(S.__webglFramebuffer))for(let ct=0;ct<S.__webglFramebuffer.length;ct++)i.deleteFramebuffer(S.__webglFramebuffer[ct]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ct=0;ct<S.__webglColorRenderbuffer.length;ct++)S.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ct]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let mt=I.textures;for(let ct=0,bt=mt.length;ct<bt;ct++){let wt=n.get(mt[ct]);wt.__webglTexture&&(i.deleteTexture(wt.__webglTexture),a.memory.textures--),n.remove(mt[ct])}n.remove(I)}let et=0;function ut(){et=0}function Et(){return et}function Ft(I){et=I}function ne(){let I=et;return I>=s.maxTextures&&jt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),et+=1,I}function j(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.mipmapsAutoUpdate),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function _t(I,S){let J=n.get(I);if(I.isVideoTexture&&Ze(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&J.__version!==I.version){let mt=I.image;if(mt===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(J,I,S);return}}else I.isExternalTexture&&(J.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+S)}function Rt(I,S){let J=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){xt(J,I,S);return}else I.isExternalTexture&&(J.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+S)}function Jt(I,S){let J=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){xt(J,I,S);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+S)}function Tt(I,S){let J=n.get(I);if(I.version>0&&J.__version!==I.version){Pt(J,I,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+S)}let gt={[Rs]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[$a]:i.MIRRORED_REPEAT},Ne={[hn]:i.NEAREST,[hu]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[Lo]:i.LINEAR_MIPMAP_NEAREST,[Ci]:i.LINEAR_MIPMAP_LINEAR},zt={[pu]:i.NEVER,[Pc]:i.ALWAYS,[mu]:i.LESS,[Rc]:i.LEQUAL,[gu]:i.EQUAL,[Ic]:i.GEQUAL,[_u]:i.GREATER,[xu]:i.NOTEQUAL};function fe(I,S){if(S.type===kn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===bn||S.magFilter===Lo||S.magFilter===$r||S.magFilter===Ci||S.minFilter===bn||S.minFilter===Lo||S.minFilter===$r||S.minFilter===Ci)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,gt[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,gt[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,gt[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Ne[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Ne[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,zt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===hn||S.minFilter!==$r&&S.minFilter!==Ci||S.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function be(I,S){let J=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",V),U(S));let mt=S.source,ct=u.get(mt);ct===void 0&&(ct={},u.set(mt,ct));let bt=j(S);if(bt!==I.__cacheKey){ct[bt]===void 0&&(ct[bt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),ct[bt].usedTimes++;let wt=ct[I.__cacheKey];wt!==void 0&&(ct[I.__cacheKey].usedTimes--,wt.usedTimes===0&&$(S)),I.__cacheKey=bt,I.__webglTexture=ct[bt].texture}return J}function lt(I,S,J){return Math.floor(Math.floor(I/J)/S)}function Mt(I,S,J,mt){let bt=I.updateRanges;if(bt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,J,mt,S.data);else{bt.sort((Gt,g)=>Gt.start-g.start);let wt=0;for(let Gt=1;Gt<bt.length;Gt++){let g=bt[wt],w=bt[Gt],C=g.start+g.count,L=lt(w.start,S.width,4),D=lt(g.start,S.width,4);w.start<=C+1&&L===D&&lt(w.start+w.count-1,S.width,4)===L?g.count=Math.max(g.count,w.start+w.count-g.start):(++wt,bt[wt]=w)}bt.length=wt+1;let at=e.getParameter(i.UNPACK_ROW_LENGTH),ot=e.getParameter(i.UNPACK_SKIP_PIXELS),At=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Gt=0,g=bt.length;Gt<g;Gt++){let w=bt[Gt],C=Math.floor(w.start/4),L=Math.ceil(w.count/4),D=C%S.width,O=Math.floor(C/S.width),Q=L,z=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,D),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,D,O,Q,z,J,mt,S.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,at),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,At)}}function xt(I,S,J){let mt=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(mt=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(mt=i.TEXTURE_3D);let ct=be(I,S),bt=S.source;e.bindTexture(mt,I.__webglTexture,i.TEXTURE0+J);let wt=n.get(bt);if(bt.version!==wt.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let z=Ae.getPrimaries(Ae.workingColorSpace),nt=S.colorSpace===Ii?null:Ae.getPrimaries(S.colorSpace),W=S.colorSpace===Ii||z===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,W)}e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let ot=y(S.image,!1,s.maxTextureSize);ot=Yt(S,ot);let At=r.convert(S.format,S.colorSpace),Gt=r.convert(S.type),g=T(S.internalFormat,At,Gt,S.normalized,S.colorSpace,S.isVideoTexture);fe(mt,S);let w,C=S.mipmaps,L=S.isVideoTexture!==!0,D=wt.__version===void 0||ct===!0,O=bt.dataReady,Q=A(S,ot);if(S.isDepthTexture)g=x(S.format===Ri,S.type),D&&(L?e.texStorage2D(i.TEXTURE_2D,1,g,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,g,ot.width,ot.height,0,At,Gt,null));else if(S.isDataTexture)if(C.length>0){L&&D&&e.texStorage2D(i.TEXTURE_2D,Q,g,C[0].width,C[0].height);for(let z=0,nt=C.length;z<nt;z++)w=C[z],L?O&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,w.width,w.height,At,Gt,w.data):e.texImage2D(i.TEXTURE_2D,z,g,w.width,w.height,0,At,Gt,w.data);S.generateMipmaps=!1}else L?(D&&e.texStorage2D(i.TEXTURE_2D,Q,g,ot.width,ot.height),O&&Mt(S,ot,At,Gt)):e.texImage2D(i.TEXTURE_2D,0,g,ot.width,ot.height,0,At,Gt,ot.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&D&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Q,g,C[0].width,C[0].height,ot.depth);for(let z=0,nt=C.length;z<nt;z++)if(w=C[z],S.format!==Qn)if(At!==null)if(L){if(O)if(S.layerUpdates.size>0){let W=Bc(w.width,w.height,S.format,S.type);for(let X of S.layerUpdates){let st=w.data.subarray(X*W/w.data.BYTES_PER_ELEMENT,(X+1)*W/w.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,X,w.width,w.height,1,At,st)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,w.width,w.height,ot.depth,At,w.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,g,w.width,w.height,ot.depth,0,w.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,w.width,w.height,ot.depth,At,Gt,w.data):e.texImage3D(i.TEXTURE_2D_ARRAY,z,g,w.width,w.height,ot.depth,0,At,Gt,w.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{L&&D&&e.texStorage2D(i.TEXTURE_2D,Q,g,C[0].width,C[0].height);for(let z=0,nt=C.length;z<nt;z++)w=C[z],S.format!==Qn?At!==null?L?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,w.width,w.height,At,w.data):e.compressedTexImage2D(i.TEXTURE_2D,z,g,w.width,w.height,0,w.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?O&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,w.width,w.height,At,Gt,w.data):e.texImage2D(i.TEXTURE_2D,z,g,w.width,w.height,0,At,Gt,w.data)}else if(S.isDataArrayTexture)if(L){if(D&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Q,g,ot.width,ot.height,ot.depth),O)if(S.layerUpdates.size>0){let z=Bc(ot.width,ot.height,S.format,S.type);for(let nt of S.layerUpdates){let W=ot.data.subarray(nt*z/ot.data.BYTES_PER_ELEMENT,(nt+1)*z/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,ot.width,ot.height,1,At,Gt,W)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,At,Gt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,g,ot.width,ot.height,ot.depth,0,At,Gt,ot.data);else if(S.isData3DTexture)L?(D&&e.texStorage3D(i.TEXTURE_3D,Q,g,ot.width,ot.height,ot.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,At,Gt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,g,ot.width,ot.height,ot.depth,0,At,Gt,ot.data);else if(S.isFramebufferTexture){if(D)if(L)e.texStorage2D(i.TEXTURE_2D,Q,g,ot.width,ot.height);else{let z=ot.width,nt=ot.height;for(let W=0;W<Q;W++)e.texImage2D(i.TEXTURE_2D,W,g,z,nt,0,At,Gt,null),z>>=1,nt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let z=i.canvas;if(z.hasAttribute("layoutsubtree")||z.setAttribute("layoutsubtree","true"),ot.parentNode!==z){z.appendChild(ot),p.add(S),z.onpaint=nt=>{let W=nt.changedElements;for(let X of p)W.includes(X.image)&&(X.needsUpdate=!0)},z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ot);else{let W=i.RGBA,X=i.RGBA,st=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,W,X,st,ot)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(C.length>0){if(L&&D){let z=te(C[0]);e.texStorage2D(i.TEXTURE_2D,Q,g,z.width,z.height)}for(let z=0,nt=C.length;z<nt;z++)w=C[z],L?O&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,At,Gt,w):e.texImage2D(i.TEXTURE_2D,z,g,At,Gt,w);S.generateMipmaps=!1}else if(L){if(D){let z=te(ot);e.texStorage2D(i.TEXTURE_2D,Q,g,z.width,z.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Gt,ot)}else e.texImage2D(i.TEXTURE_2D,0,g,At,Gt,ot);E(S)&&S.mipmapsAutoUpdate===!0&&M(mt),wt.__version=bt.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Pt(I,S,J){if(S.image.length!==6)return;let mt=be(I,S),ct=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+J);let bt=n.get(ct);if(ct.version!==bt.__version||mt===!0){e.activeTexture(i.TEXTURE0+J);let wt=Ae.getPrimaries(Ae.workingColorSpace),at=S.colorSpace===Ii?null:Ae.getPrimaries(S.colorSpace),ot=S.colorSpace===Ii||wt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let At=S.isCompressedTexture||S.image[0].isCompressedTexture,Gt=S.image[0]&&S.image[0].isDataTexture,g=[];for(let X=0;X<6;X++)!At&&!Gt?g[X]=y(S.image[X],!0,s.maxCubemapSize):g[X]=Gt?S.image[X].image:S.image[X],g[X]=Yt(S,g[X]);let w=g[0],C=r.convert(S.format,S.colorSpace),L=r.convert(S.type),D=T(S.internalFormat,C,L,S.normalized,S.colorSpace),O=S.isVideoTexture!==!0,Q=bt.__version===void 0||mt===!0,z=ct.dataReady,nt=A(S,w);fe(i.TEXTURE_CUBE_MAP,S);let W;if(S.isDepthTexture){if(D=x(S.format===Ri,S.type),Q)if(O)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,D,w.width,w.height);else for(let X=0;X<6;X++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,D,w.width,w.height,0,C,L,null)}else if(At){O&&Q&&e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,D,w.width,w.height);for(let X=0;X<6;X++){W=g[X].mipmaps;for(let st=0;st<W.length;st++){let pt=W[st];S.format!==Qn?C!==null?O?z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,st,0,0,pt.width,pt.height,C,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,st,D,pt.width,pt.height,0,pt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,st,0,0,pt.width,pt.height,C,L,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,st,D,pt.width,pt.height,0,C,L,pt.data)}}}else{if(W=S.mipmaps,O&&Q){W.length>0&&nt++;let X=te(g[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,D,X.width,X.height)}for(let X=0;X<6;X++)if(Gt){O?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,g[X].width,g[X].height,C,L,g[X].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,D,g[X].width,g[X].height,0,C,L,g[X].data);for(let st=0;st<W.length;st++){let Nt=W[st].image[X].image;O?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,st+1,0,0,Nt.width,Nt.height,C,L,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,st+1,D,Nt.width,Nt.height,0,C,L,Nt.data)}}else{O?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,C,L,g[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,D,C,L,g[X]);for(let st=0;st<W.length;st++){let pt=W[st];O?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,st+1,0,0,C,L,pt.image[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,st+1,D,C,L,pt.image[X])}}}E(S)&&S.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),bt.__version=ct.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function dt(I,S,J,mt,ct,bt){let wt=r.convert(J.format,J.colorSpace),at=r.convert(J.type),ot=T(J.internalFormat,wt,at,J.normalized,J.colorSpace),At=n.get(S),Gt=n.get(J);if(Gt.__renderTarget=S,!At.__hasExternalTextures){let g=Math.max(1,S.width>>bt),w=Math.max(1,S.height>>bt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,bt,ot,g,w,S.depth,0,wt,at,null):e.texImage2D(ct,bt,ot,g,w,0,wt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),St(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,ct,Gt.__webglTexture,0,Fe(S)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,mt,ct,Gt.__webglTexture,bt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(I,S,J){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){let mt=S.depthTexture,ct=mt&&mt.isDepthTexture?mt.type:null,bt=x(S.stencilBuffer,ct),wt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;St(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe(S),bt,S.width,S.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe(S),bt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,bt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,I)}else{let mt=S.textures;for(let ct=0;ct<mt.length;ct++){let bt=mt[ct],wt=r.convert(bt.format,bt.colorSpace),at=r.convert(bt.type),ot=T(bt.internalFormat,wt,at,bt.normalized,bt.colorSpace);St(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe(S),ot,S.width,S.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe(S),ot,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ot,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function kt(I,S,J){let mt=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ct=n.get(S.depthTexture);ct.__renderTarget=S;let bt=mt?S.depthTexture.image[0]:S.depthTexture.image;(!ct.__webglTexture||bt.width!==S.width||bt.height!==S.height)&&(bt.width=S.width,bt.height=S.height,S.depthTexture.needsUpdate=!0),mt?Tt(S.depthTexture,0):_t(S.depthTexture,0);let wt=ct.__webglTexture,at=Fe(S),ot=mt?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,At=S.depthTexture.format===Ri?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===bi)St(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,At,ot,wt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,At,ot,wt,0);else if(S.depthTexture.format===Ri)St(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,At,ot,wt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,At,ot,wt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function de(I){let S=n.get(I),J=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let mt=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),mt){let ct=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,mt.removeEventListener("dispose",ct)};mt.addEventListener("dispose",ct),S.__depthDisposeCallback=ct}S.__boundDepthTexture=mt}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(J)for(let mt=0;mt<6;mt++)kt(S.__webglFramebuffer[mt],I,mt);else I.texture.mipmaps.length>0?kt(S.__webglFramebuffer[0],I,0):kt(S.__webglFramebuffer,I,0);else if(J){S.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[mt]),S.__webglDepthbuffer[mt]===void 0)S.__webglDepthbuffer[mt]=i.createRenderbuffer(),oe(S.__webglDepthbuffer[mt],I,!1);else{let ct=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=S.__webglDepthbuffer[mt];i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,bt)}}else if(I.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),oe(S.__webglDepthbuffer,I,!1);else{let ct=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,bt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,bt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(I,S,J){let mt=n.get(I);S!==void 0&&dt(mt.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&de(I)}function ye(I){let S=I.texture,J=n.get(I),mt=n.get(S);I.addEventListener("dispose",q),U(I);let ct=I.textures,bt=I.isWebGLCubeRenderTarget===!0,wt=ct.length>1;if(wt||(mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture()),mt.__version=S.version,a.memory.textures++),bt){J.__webglFramebuffer=[];for(let at=0;at<6;at++)if(S.mipmaps.length>0){J.__webglFramebuffer[at]=[];for(let ot=0;ot<S.mipmaps.length;ot++)J.__webglFramebuffer[at][ot]=i.createFramebuffer()}else J.__webglFramebuffer[at]=i.createFramebuffer()}else{if(S.mipmaps.length>0){J.__webglFramebuffer=[];for(let at=0;at<S.mipmaps.length;at++)J.__webglFramebuffer[at]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(wt)for(let at=0,ot=ct.length;at<ot;at++){let At=n.get(ct[at]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&St(I)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let at=0;at<ct.length;at++){let ot=ct[at];J.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[at]);let At=r.convert(ot.format,ot.colorSpace),Gt=r.convert(ot.type),g=T(ot.internalFormat,At,Gt,ot.normalized,ot.colorSpace,I.isXRRenderTarget===!0),w=Fe(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,w,g,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,J.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(J.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(bt){e.bindTexture(i.TEXTURE_CUBE_MAP,mt.__webglTexture),fe(i.TEXTURE_CUBE_MAP,S);for(let at=0;at<6;at++)if(S.mipmaps.length>0)for(let ot=0;ot<S.mipmaps.length;ot++)dt(J.__webglFramebuffer[at][ot],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ot);else dt(J.__webglFramebuffer[at],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);E(S)?M(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(wt){for(let at=0,ot=ct.length;at<ot;at++){let At=ct[at],Gt=n.get(At),g=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(g=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(g,Gt.__webglTexture),fe(g,At),dt(J.__webglFramebuffer,I,At,i.COLOR_ATTACHMENT0+at,g,0),E(At)&&M(g)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(at=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,mt.__webglTexture),fe(at,S),S.mipmaps.length>0)for(let ot=0;ot<S.mipmaps.length;ot++)dt(J.__webglFramebuffer[ot],I,S,i.COLOR_ATTACHMENT0,at,ot);else dt(J.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,at,0);E(S)?M(at):S.mipmaps.length>0&&i.texParameteri(at,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}I.depthBuffer&&de(I)}function B(I){let S=I.textures;for(let J=0,mt=S.length;J<mt;J++){let ct=S[J];if(E(ct)&&ct.mipmapsAutoUpdate===!0){let bt=R(I),wt=n.get(ct).__webglTexture;e.bindTexture(bt,wt),M(bt),e.unbindTexture()}}}let He=[];function me(I){if(I.samples>0){if(St(I)===!1){let S=I.textures,J=I.width,mt=I.height,ct=i.COLOR_BUFFER_BIT,bt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(I),at=S.length>1;if(at)for(let At=0;At<S.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let At=0;At<S.length;At++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);let Gt=n.get(S[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,J,mt,0,0,J,mt,ct,i.NEAREST),l===!0&&(He.length=0,He.push(i.COLOR_ATTACHMENT0+At),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&He.push(bt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,He))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let At=0;At<S.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,wt.__webglColorRenderbuffer[At]);let Gt=n.get(S[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Fe(I){return Math.min(s.maxSamples,I.samples)}function St(I){let S=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ze(I){let S=a.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function Yt(I,S){let J=I.colorSpace,mt=I.format,ct=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||J!==dr&&J!==Ii&&(Ae.getTransfer(J)===De?(mt!==Qn||ct!==An)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",J)),S}function te(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=ne,this.resetTextureUnits=ut,this.getTextureUnits=Et,this.setTextureUnits=Ft,this.setTexture2D=_t,this.setTexture2DArray=Rt,this.setTexture3D=Jt,this.setTextureCube=Tt,this.rebindTextures=pe,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=St,this.dispose=K}function h_(i,t){function e(n,s=Ii){let r,a=Ae.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===Do)return i.UNSIGNED_SHORT_4_4_4_4;if(n===No)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ac)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ec)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bc)return i.BYTE;if(n===wc)return i.SHORT;if(n===Xs)return i.UNSIGNED_SHORT;if(n===Fo)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===Tc)return i.ALPHA;if(n===Cc)return i.RGB;if(n===Qn)return i.RGBA;if(n===bi)return i.DEPTH_COMPONENT;if(n===Ri)return i.DEPTH_STENCIL;if(n===Uo)return i.RED;if(n===Oo)return i.RED_INTEGER;if(n===Wi)return i.RG;if(n===Bo)return i.RG_INTEGER;if(n===zo)return i.RGBA_INTEGER;if(n===Kr||n===Qr||n===jr||n===ta)if(a===De)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ko||n===Go||n===Vo||n===Ho)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===ea||n===Jo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wo||n===Xo)return a===De?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qo)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yo)return r.COMPRESSED_R11_EAC;if(n===Zo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ea)return r.COMPRESSED_RG11_EAC;if(n===Jo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$o||n===Ko||n===Qo||n===jo||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$o)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ko)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qo)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jo)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===el)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===il)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===al)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ol)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ll)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hl||n===ul||n===dl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===hl)return a===De?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fl||n===pl||n===na||n===ml)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===as?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var u_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d_=`
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

}`,Qc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ir(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new zn({vertexShader:u_,fragmentShader:d_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ft(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jc=class extends ai{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,d=null,u=null,_=null,b=typeof XRWebGLBinding<"u",f=new Qc,m={},y=e.getContextAttributes(),E=null,M=null,R=[],T=[],x=new tt,A=null,U=null,P=new _n;P.viewport=new $e;let V=new _n;V.viewport=new $e;let q=[P,V],k=new To,Z=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let _t=R[j];return _t===void 0&&(_t=new Fs,R[j]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(j){let _t=R[j];return _t===void 0&&(_t=new Fs,R[j]=_t),_t.getGripSpace()},this.getHand=function(j){let _t=R[j];return _t===void 0&&(_t=new Fs,R[j]=_t),_t.getHandSpace()};function rt(j){let _t=T.indexOf(j.inputSource);if(_t===-1)return;let Rt=R[_t];Rt!==void 0&&(Rt.update(j.inputSource,j.frame,c||a),Rt.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){s.removeEventListener("select",rt),s.removeEventListener("selectstart",rt),s.removeEventListener("selectend",rt),s.removeEventListener("squeeze",rt),s.removeEventListener("squeezestart",rt),s.removeEventListener("squeezeend",rt),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",ht);for(let j=0;j<R.length;j++){let _t=T[j];_t!==null&&(T[j]=null,R[j].disconnect(_t))}Z=null,K=null,f.reset();for(let j in m)delete m[j];if(t.setRenderTarget(E),u=null,d=null,p=null,s=null,M=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(x.width,x.height,!1),U!==null){let j=U.camera;j.fov=U.fov,j.zoom=U.zoom,j.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",rt),s.addEventListener("selectstart",rt),s.addEventListener("selectend",rt),s.addEventListener("squeeze",rt),s.addEventListener("squeezestart",rt),s.addEventListener("squeezeend",rt),s.addEventListener("end",$),s.addEventListener("inputsourceschange",ht),y.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(x),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Jt=null,Tt=null;y.depth&&(Tt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=y.stencil?Ri:bi,Jt=y.stencil?as:$n);let gt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(gt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Rn(d.textureWidth,d.textureHeight,{format:Qn,type:An,depthTexture:new wi(d.textureWidth,d.textureHeight,Jt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Rt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,Rt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new Rn(u.framebufferWidth,u.framebufferHeight,{format:Qn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function ht(j){for(let _t=0;_t<j.removed.length;_t++){let Rt=j.removed[_t],Jt=T.indexOf(Rt);Jt>=0&&(T[Jt]=null,R[Jt].disconnect(Rt))}for(let _t=0;_t<j.added.length;_t++){let Rt=j.added[_t],Jt=T.indexOf(Rt);if(Jt===-1){for(let gt=0;gt<R.length;gt++)if(gt>=T.length){T.push(Rt),Jt=gt;break}else if(T[gt]===null){T[gt]=Rt,Jt=gt;break}if(Jt===-1)break}let Tt=R[Jt];Tt&&Tt.connect(Rt)}}function et(j,_t){_t===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(_t.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let _t=j.near,Rt=j.far;f.texture!==null&&(f.depthNear>0&&(_t=f.depthNear),f.depthFar>0&&(Rt=f.depthFar)),k.near=V.near=P.near=_t,k.far=V.far=P.far=Rt,(Z!==k.near||K!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),Z=k.near,K=k.far),k.layers.mask=j.layers.mask|6,P.layers.mask=k.layers.mask&-5,V.layers.mask=k.layers.mask&-3;let Jt=j.parent,Tt=k.cameras;et(k,Jt);for(let gt=0;gt<Tt.length;gt++)et(Tt[gt],Jt);k.projectionMatrix.copy(P.projectionMatrix),k.projectionMatrixInverse.copy(P.projectionMatrixInverse),U===null&&j.isPerspectiveCamera&&(U={camera:j,fov:j.fov,zoom:j.zoom}),ut(j,k,Jt)};function ut(j,_t,Rt){Rt===null?j.matrix.copy(_t.matrixWorld):(j.matrix.copy(Rt.matrixWorld),j.matrix.invert(),j.matrix.multiply(_t.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(_t.projectionMatrix),j.projectionMatrixInverse.copy(_t.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Qa*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=j)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(k)},this.getCameraTexture=function(j){return m[j]};let Et=null;function Ft(j,_t){if(h=_t.getViewerPose(c||a),_=_t,h!==null){let Rt=h.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let Jt=!1;Rt.length!==k.cameras.length&&(k.cameras.length=0,Jt=!0);for(let zt=0;zt<Rt.length;zt++){let fe=Rt[zt],be=null;if(u!==null)be=u.getViewport(fe);else{let Mt=p.getViewSubImage(d,fe);be=Mt.viewport,zt===0&&(t.setRenderTargetTextures(M,Mt.colorTexture,Mt.depthStencilTexture),t.setRenderTarget(M))}let lt=q[zt];lt===void 0&&(lt=new _n,lt.layers.enable(zt),lt.viewport=new $e,q[zt]=lt),lt.matrix.fromArray(fe.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(fe.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(be.x,be.y,be.width,be.height),zt===0&&(k.matrix.copy(lt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Jt===!0&&k.cameras.push(lt)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){p=n.getBinding();let zt=p.getDepthInformation(Rt[0]);zt&&zt.isValid&&zt.texture&&f.init(zt,s.renderState)}if(Tt&&Tt.includes("camera-access")&&b){t.state.unbindTexture(),p=n.getBinding();for(let zt=0;zt<Rt.length;zt++){let fe=Rt[zt].camera;if(fe){let be=m[fe];be||(be=new Ir,m[fe]=be);let lt=p.getCameraImage(fe);be.sourceTexture=lt}}}}for(let Rt=0;Rt<R.length;Rt++){let Jt=T[Rt],Tt=R[Rt];Jt!==null&&Tt!==void 0&&Tt.update(Jt,_t,c||a)}Et&&Et(j,_t),_t.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_t}),_=null}let ne=new nd;ne.setAnimationLoop(Ft),this.setAnimationLoop=function(j){Et=j},this.dispose=function(){}}},f_=new Ie,dd=new ce;dd.set(-1,0,0,0,1,0,0,0,1);function p_(i,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,Nc(i)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,y,E,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(f,m):m.isMeshLambertMaterial?(r(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(f,m),p(f,m)):m.isMeshPhongMaterial?(r(f,m),h(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(f,m),d(f,m),m.isMeshPhysicalMaterial&&u(f,m,M)):m.isMeshMatcapMaterial?(r(f,m),_(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),b(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(a(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,y,E):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===un&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===un&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let y=t.get(m),E=y.envMap,M=y.envMapRotation;E&&(f.envMap.value=E,f.envMapRotation.value.setFromMatrix4(f_.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(dd),f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function a(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,y,E){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*y,f.scale.value=E*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function p(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function u(f,m,y){f.ior.value=m.ior,m.diffuseRoughness>0&&(f.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===un&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.retroreflectivity>0&&(f.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,m){m.matcap&&(f.matcap.value=m.matcap)}function b(f,m){let y=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function m_(i,t,e,n){let s={},r={};function a(y,E){let M=E.program;n.uniformBlockBinding(y,M,s[y.id])}function o(y,E){let M=s[y.id];M===void 0&&(_(y),M=l(y),s[y.id]=M,y.addEventListener("dispose",f));let R=E.program;n.updateUBOMapping(y,R);let T=t.render.frame;r[y.id]!==T&&(c(y),r[y.id]=T)}function l(y){let E=i.createBuffer(),M=y.__size,R=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,M,R),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(y){let E=s[y.id],M=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,x=M.length;T<x;T++){let A=M[T];if(Array.isArray(A))for(let U=0,P=A.length;U<P;U++)h(A[U],T,U,R);else h(A,T,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,E,M,R){if(d(y,E,M,R)===!0){let T=y.__offset,x=y.value;if(Array.isArray(x)){let A=0;for(let U=0;U<x.length;U++){let P=x[U],V=b(P,!0);p(P,y.__data,A),A+=V.storage/Float32Array.BYTES_PER_ELEMENT}}else p(x,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,y.__data)}}function p(y,E,M){typeof y=="number"||typeof y=="boolean"?E[M]=y:y.isMatrix3?(E[M]=y.elements[0],E[M+1]=y.elements[1],E[M+2]=y.elements[2],E[M+3]=0,E[M+4]=y.elements[3],E[M+5]=y.elements[4],E[M+6]=y.elements[5],E[M+7]=0,E[M+8]=y.elements[6],E[M+9]=y.elements[7],E[M+10]=y.elements[8],E[M+11]=0):ArrayBuffer.isView(y)?E.set(y.subarray(0,E.length-M),M):y.toArray(E,M)}function d(y,E,M,R){let T=y.value,x=E+"_"+M;if(Array.isArray(T)){R[x]===void 0&&(R[x]=[]);let A=R[x],U=!1;for(let P=0;P<T.length;P++)u(T[P],A,P)===!0&&(U=!0);return U}return u(T,R,x)}function u(y,E,M){if(E[M]===void 0)return typeof y=="number"||typeof y=="boolean"?E[M]=y:ArrayBuffer.isView(y)?E[M]=y.slice():E[M]=y.clone(),!0;{let R=E[M];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return E[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function _(y){let E=y.uniforms,M=0,R=16;for(let x=0,A=E.length;x<A;x++){let U=Array.isArray(E[x])?E[x]:[E[x]];for(let P=0,V=U.length;P<V;P++){let q=U[P],k=Array.isArray(q.value)?q.value:[q.value],Z=Array.isArray(E[x])||Array.isArray(q.value),K=M;for(let $=0,ht=k.length;$<ht;$++){let et=k[$],ut=b(et,Z),Et=M%R,Ft=Et%ut.boundary,ne=Et+Ft;M+=Ft,ne!==0&&R-ne<ut.storage&&(M+=R-ne),$===0&&(K=M),M+=ut.storage}let rt=q.type==="int"?Int32Array:q.type==="uint"?Uint32Array:Float32Array;q.__data=new rt((M-K)/Float32Array.BYTES_PER_ELEMENT),q.__offset=K}}let T=M%R;return T>0&&(M+=R-T),y.__size=M,y.__cache={},this}function b(y,E){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",y),E===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function f(y){let E=y.target;E.removeEventListener("dispose",f),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:m}}var g_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;function __(){return fi===null&&(fi=new br(g_,16,16,Wi,Kn),fi.name="DFG_LUT",fi.minFilter=bn,fi.magFilter=bn,fi.wrapS=si,fi.wrapT=si,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var yl=class{constructor(t={}){let{canvas:e=vu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:u=An}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let b=u,f=new Set([zo,Bo,Oo]),m=new Set([An,$n,Xs,as,Do,No]),y=new Uint32Array(4),E=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[],intensity:[]},R=null,T=null,x=[],A=[],U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,V=!1,q=null,k=null,Z=null,K=null;this._outputColorSpace=Sn;let rt=0,$=0,ht=null,et=-1,ut=null,Et=new $e,Ft=new $e,ne=null,j=new Qt(0),_t=0,Rt=e.width,Jt=e.height,Tt=1,gt=null,Ne=null,zt=new $e(0,0,Rt,Jt),fe=new $e(0,0,Rt,Jt),be=!1,lt=new Oi,Mt=new io,xt=!1,Pt=!1,dt=new Ie,oe=new F,kt=new $e,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function ye(){return ht===null?Tt:1}let B=n;function He(v,N){return e.getContext(v,N)}let me,Fe,St,Ze,Yt,te,I,S,J,mt,ct,bt,wt,at,ot,At,Gt,g,w,C,L,D,O;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ro}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",W,!1),e.addEventListener("webglcontextcreationerror",X,!1),B===null){let N="webgl2";if(B=He(N,v),B===null)throw He(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Q()}catch(v){throw e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",W,!1),e.removeEventListener("webglcontextcreationerror",X,!1),ee("WebGLRenderer: "+v.message),v}function Q(){me=new C0(B),me.init(),L=new h_(B,me),Fe=new _0(B,me,t,L),St=new l_(B,me),Fe.reversedDepthBuffer&&d&&St.buffers.depth.setReversed(!0),k=B.createFramebuffer(),Z=B.createFramebuffer(),K=B.createFramebuffer(),Ze=new P0(B),Yt=new Zg,te=new c_(B,me,St,Yt,Fe,L,Ze),I=new T0(P),S=new Ff(B),D=new m0(B,S),J=new R0(B,S,Ze,D),mt=new F0(B,J,S,D,Ze),g=new L0(B,Fe,te),ot=new x0(Yt),ct=new Yg(P,I,me,Fe,D,ot),bt=new p_(P,Yt),wt=new $g,at=new n_(me),Gt=new p0(P,I,St,mt,_,l),At=new o_(P,mt,Fe),O=new m_(B,Ze,Fe,St),w=new g0(B,me,Ze),C=new I0(B,me,Ze),Ze.programs=ct.programs,P.capabilities=Fe,P.extensions=me,P.properties=Yt,P.renderLists=wt,P.shadowMap=At,P.state=St,P.info=Ze}b!==An&&(U=new N0(b,e.width,e.height,o,s,r));let z=new jc(P,B);this.xr=z,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let v=me.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=me.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Tt},this.setPixelRatio=function(v){v!==void 0&&(Tt=v,this.setSize(Rt,Jt,!1))},this.getSize=function(v){return v.set(Rt,Jt)},this.setSize=function(v,N,H=!0){if(z.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Rt=v,Jt=N,e.width=Math.floor(v*Tt),e.height=Math.floor(N*Tt),H===!0&&(e.style.width=v+"px",e.style.height=N+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(Rt*Tt,Jt*Tt).floor()},this.setDrawingBufferSize=function(v,N,H){Rt=v,Jt=N,Tt=H,e.width=Math.floor(v*H),e.height=Math.floor(N*H),this.setViewport(0,0,v,N)},this.setEffects=function(v){if(b===An){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let N=0;N<v.length;N++)if(v[N].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(Et)},this.getViewport=function(v){return v.copy(zt)},this.setViewport=function(v,N,H,G){v.isVector4?zt.set(v.x,v.y,v.z,v.w):zt.set(v,N,H,G),St.viewport(Et.copy(zt).multiplyScalar(ye()).round())},this.getScissor=function(v){return v.copy(fe)},this.setScissor=function(v,N,H,G){v.isVector4?fe.set(v.x,v.y,v.z,v.w):fe.set(v,N,H,G),St.scissor(Ft.copy(fe).multiplyScalar(ye()).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(v){St.setScissorTest(be=v)},this.setOpaqueSort=function(v){gt=v},this.setTransparentSort=function(v){Ne=v},this.getClearColor=function(v){return v.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor(...arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha(...arguments)},this.clear=function(v=!0,N=!0,H=!0){let G=0;if(v){let Y=!1;if(ht!==null){let yt=ht.texture.format;Y=f.has(yt)}if(Y){let yt=ht.texture.type,Vt=m.has(yt),Ct=Gt.getClearColor(),Dt=Gt.getClearAlpha(),Kt=Ct.r,se=Ct.g,we=Ct.b;Vt?(y[0]=Kt,y[1]=se,y[2]=we,y[3]=Dt,B.clearBufferuiv(B.COLOR,0,y)):(E[0]=Kt,E[1]=se,E[2]=we,E[3]=Dt,B.clearBufferiv(B.COLOR,0,E))}else G|=B.COLOR_BUFFER_BIT}N&&(G|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),q=v},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",W,!1),e.removeEventListener("webglcontextcreationerror",X,!1),Gt.dispose(),wt.dispose(),at.dispose(),te.dispose(),Yt.dispose(),I.dispose(),mt.dispose(),J.dispose(),D.dispose(),O.dispose(),ct.dispose(),z.dispose(),z.removeEventListener("sessionstart",_e),z.removeEventListener("sessionend",ae),Ut.stop()};function nt(v){v.preventDefault(),mr("WebGLRenderer: Context Lost."),V=!0}function W(){mr("WebGLRenderer: Context Restored."),V=!1;let v=Ze.autoReset,N=At.enabled,H=At.autoUpdate,G=At.needsUpdate,Y=At.type;Q(),Ze.autoReset=v,At.enabled=N,At.autoUpdate=H,At.needsUpdate=G,At.type=Y}function X(v){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function st(v){let N=v.target;N.removeEventListener("dispose",st),pt(N)}function pt(v){Nt(v),Yt.remove(v)}function Nt(v){let N=Yt.get(v).programs;N!==void 0&&(N.forEach(function(H){ct.releaseProgram(H)}),v.isShaderMaterial&&ct.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,H,G,Y,yt){N===null&&(N=de);let Vt=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Ct=he(v,N,H,G,Y);St.setMaterial(G,Vt);let Dt=H.index,Kt=1;if(G.wireframe===!0){if(Dt=J.getWireframeAttribute(H),Dt===void 0)return;Kt=2}let se=H.drawRange,we=H.attributes.position,Wt=se.start*Kt,Me=(se.start+se.count)*Kt;yt!==null&&(Wt=Math.max(Wt,yt.start*Kt),Me=Math.min(Me,(yt.start+yt.count)*Kt)),Dt!==null?(Wt=Math.max(Wt,0),Me=Math.min(Me,Dt.count)):we!=null&&(Wt=Math.max(Wt,0),Me=Math.min(Me,we.count));let tn=Me-Wt;if(tn<0||tn===1/0)return;D.setup(Y,G,Ct,H,Dt);let ze,Oe=w;if(Dt!==null&&(ze=S.get(Dt),Oe=C,Oe.setIndex(ze)),Y.isMesh)G.wireframe===!0?(St.setLineWidth(G.wireframeLinewidth*ye()),Oe.setMode(B.LINES)):Oe.setMode(B.TRIANGLES);else if(Y.isLine){let fn=G.linewidth;fn===void 0&&(fn=1),St.setLineWidth(fn*ye()),Y.isLineSegments?Oe.setMode(B.LINES):Y.isLineLoop?Oe.setMode(B.LINE_LOOP):Oe.setMode(B.LINE_STRIP)}else Y.isPoints?Oe.setMode(B.POINTS):Y.isSprite&&Oe.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(me.get("WEBGL_multi_draw"))Oe.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let fn=Y._multiDrawStarts,Ht=Y._multiDrawCounts,yn=Y._multiDrawCount,Pe=Dt?S.get(Dt).bytesPerElement:1,qi=Yt.get(G).currentProgram.getUniforms();for(let pn=0;pn<yn;pn++)qi.setValue(B,"_gl_DrawID",pn),Oe.render(fn[pn]/Pe,Ht[pn])}else if(Y.isInstancedMesh)Oe.renderInstances(Wt,tn,Y.count);else if(H.isInstancedBufferGeometry){let fn=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ht=Math.min(H.instanceCount,fn);Oe.renderInstances(Wt,tn,Ht)}else Oe.render(Wt,tn)};function ie(v,N,H,G){q!==null&&v.isNodeMaterial&&q.setObject(G,v),xt===!0&&ot.setState(v,H,!1),v.transparent===!0&&v.side===Ge&&v.forceSinglePass===!1?(v.side=un,v.needsUpdate=!0,Te(v,N,G),v.side=Hi,v.needsUpdate=!0,Te(v,N,G),v.side=Ge):Te(v,N,G)}this.compile=function(v,N,H=null){H===null&&(H=v),q!==null&&q.renderStart(v,N,H),T=at.get(H),T.init(N),A.push(T),H.traverseVisible(function(Y){Y.isLight&&Y.layers.test(N.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),v!==H&&v.traverseVisible(function(Y){Y.isLight&&Y.layers.test(N.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),q!==null&&q.updateLights(T.state.lightsArray),Pt=this.localClippingEnabled,xt=ot.init(this.clippingPlanes,Pt),xt===!0&&ot.setGlobalState(this.clippingPlanes,N),q!==null&&At.render(T.state.shadowsArray,H,N);let G=new Set;return v.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let yt=Y.material;if(yt)if(Array.isArray(yt))for(let Vt=0;Vt<yt.length;Vt++){let Ct=yt[Vt];ie(Ct,H,N,Y),G.add(Ct)}else ie(yt,H,N,Y),G.add(yt)}),T=A.pop(),q!==null&&q.renderEnd(),G},this.compileAsync=function(v,N,H=null){let G=this.compile(v,N,H);return new Promise(Y=>{function yt(){if(G.forEach(function(Vt){let Dt=Yt.get(Vt).currentProgram;(Dt===void 0||Dt.isReady())&&G.delete(Vt)}),G.size===0){Y(v);return}setTimeout(yt,10)}me.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Bt=null;function Xt(v){Bt&&Bt(v)}function _e(){Ut.stop()}function ae(){Ut.start()}let Ut=new nd;Ut.setAnimationLoop(Xt),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(v){Bt=v,z.setAnimationLoop(v),v===null?Ut.stop():Ut.start()},z.addEventListener("sessionstart",_e),z.addEventListener("sessionend",ae),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;q!==null&&q.renderStart(v,N);let H=z.enabled===!0&&z.isPresenting===!0,G=U!==null&&(ht===null||H)&&U.begin(P,ht);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(z.cameraAutoUpdate===!0&&z.updateCamera(N),N=z.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,N,ht),T=at.get(v,A.length),T.init(N),T.state.textureUnits=te.getTextureUnits(),A.push(T),dt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?Mt.setFromArrayCamera(N):lt.setFromProjectionMatrix(dt,Fn,N.reversedDepth),Pt=this.localClippingEnabled,xt=ot.init(this.clippingPlanes,Pt),R=wt.get(v,x.length),R.init(),x.push(R),this.info.render.frame++,z.enabled===!0&&z.isPresenting===!0){let Vt=P.xr.getDepthSensingMesh();Vt!==null&&It(Vt,N,-1/0,P.sortObjects)}It(v,N,0,P.sortObjects),R.finish(),q!==null&&q.updateLights(T.state.lightsArray),P.sortObjects===!0&&R.sort(gt,Ne),pe=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,pe&&Gt.addToRenderList(R,v),this.info.autoReset===!0&&this.info.reset(),xt===!0&&ot.beginShadows();let Y=T.state.shadowsArray;if(At.render(Y,v,N),xt===!0&&ot.endShadows(),(G&&U.hasRenderPass())===!1){let Vt=R.opaque,Ct=R.transmissive;if(T.setupLights(),N.isArrayCamera){let Dt=N.cameras;if(Ct.length>0)for(let Kt=0,se=Dt.length;Kt<se;Kt++){let we=Dt[Kt];qt(Vt,Ct,v,we)}pe&&Gt.render(v);for(let Kt=0,se=Dt.length;Kt<se;Kt++){let we=Dt[Kt];Ot(R,v,we,we.viewport)}}else Ct.length>0&&qt(Vt,Ct,v,N),pe&&Gt.render(v),Ot(R,v,N)}ht!==null&&$===0&&(te.updateMultisampleRenderTarget(ht),te.updateRenderTargetMipmap(ht)),G&&U.end(P),v.isScene===!0&&v.onAfterRender(P,v,N),D.resetDefaultState(),et=-1,ut=null,A.pop(),A.length>0?(T=A[A.length-1],te.setTextureUnits(T.state.textureUnits),xt===!0&&ot.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?R=x[x.length-1]:R=null,q!==null&&q.renderEnd()};function It(v,N,H,G){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){let Vt=N.isArrayCamera?Mt:lt;if(!v.frustumCulled||v.intersectsFrustum(Vt)){G&&kt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(dt);let Ct=mt.update(v),Dt=v.material;Dt.visible&&R.push(v,Ct,Dt,H,kt.z,null,N)}}else if(v.isMesh||v.isLine||v.isPoints){let Vt=N.isArrayCamera?Mt:lt;if(!v.frustumCulled||v.intersectsFrustum(Vt)){let Ct=mt.update(v),Dt=v.material;if(G&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),kt.copy(v.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),kt.copy(Ct.boundingSphere.center)),kt.applyMatrix4(v.matrixWorld).applyMatrix4(dt)),Array.isArray(Dt)){let Kt=Ct.groups;for(let se=0,we=Kt.length;se<we;se++){let Wt=Kt[se],Me=Dt[Wt.materialIndex];Me&&Me.visible&&R.push(v,Ct,Me,H,kt.z,Wt,N)}}else Dt.visible&&R.push(v,Ct,Dt,H,kt.z,null,N)}}}let yt=v.children;for(let Vt=0,Ct=yt.length;Vt<Ct;Vt++)It(yt[Vt],N,H,G)}function Ot(v,N,H,G){let{opaque:Y,transmissive:yt,transparent:Vt}=v;T.setupLightsView(H),xt===!0&&ot.setGlobalState(P.clippingPlanes,H),G&&St.viewport(Et.copy(G)),Y.length>0&&$t(Y,N,H),yt.length>0&&$t(yt,N,H),Vt.length>0&&$t(Vt,N,H),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function qt(v,N,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){let Wt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new Rn(1,1,{generateMipmaps:!0,type:Wt?Kn:An,minFilter:Ci,samples:Math.max(4,Fe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ae.workingColorSpace})}let yt=T.state.transmissionRenderTarget[G.id],Vt=G.viewport||Et;yt.setSize(Vt.z*P.transmissionResolutionScale,Vt.w*P.transmissionResolutionScale);let Ct=P.getRenderTarget(),Dt=P.getActiveCubeFace(),Kt=P.getActiveMipmapLevel();P.setRenderTarget(yt),P.getClearColor(j),_t=P.getClearAlpha(),_t<1&&P.setClearColor(16777215,.5),P.clear(),pe&&Gt.render(H);let se=P.toneMapping;P.toneMapping=di;let we=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),xt===!0&&ot.setGlobalState(P.clippingPlanes,G),$t(v,H,G),te.updateMultisampleRenderTarget(yt),te.updateRenderTargetMipmap(yt),me.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Me=0,tn=N.length;Me<tn;Me++){let ze=N[Me],{object:Oe,geometry:fn,material:Ht,group:yn}=ze;if(Ht.side===Ge&&Oe.layers.test(G.layers)){let Pe=Ht.side;Ht.side=un,Ht.needsUpdate=!0,xe(Oe,H,G,fn,Ht,yn),Ht.side=Pe,Ht.needsUpdate=!0,Wt=!0}}Wt===!0&&(te.updateMultisampleRenderTarget(yt),te.updateRenderTargetMipmap(yt))}P.setRenderTarget(Ct,Dt,Kt),P.setClearColor(j,_t),we!==void 0&&(G.viewport=we),P.toneMapping=se}function $t(v,N,H){let G=N.isScene===!0?N.overrideMaterial:null;for(let Y=0,yt=v.length;Y<yt;Y++){let Vt=v[Y],{object:Ct,geometry:Dt,group:Kt}=Vt,se=Vt.material;se.allowOverride===!0&&G!==null&&(se=G),Ct.layers.test(H.layers)&&xe(Ct,N,H,Dt,se,Kt)}}function xe(v,N,H,G,Y,yt){q!==null&&Y.isNodeMaterial&&q.setObject(v,Y),v.onBeforeRender(P,N,H,G,Y,yt),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),Y.onBeforeRender(P,N,H,G,v,yt),Y.transparent===!0&&Y.side===Ge&&Y.forceSinglePass===!1?(Y.side=un,Y.needsUpdate=!0,P.renderBufferDirect(H,N,G,Y,v,yt),Y.side=Hi,Y.needsUpdate=!0,P.renderBufferDirect(H,N,G,Y,v,yt),Y.side=Ge):P.renderBufferDirect(H,N,G,Y,v,yt),v.onAfterRender(P,N,H,G,Y,yt)}function We(v){let N=0;for(let H of v)H.texture!==null&&N++;return N}function Te(v,N,H){N.isScene!==!0&&(N=de);let G=Yt.get(v),Y=T.state.lights,yt=T.state.shadowsArray,Vt=Y.state.version,Ct=ct.getParameters(v,Y.state,yt,N,H,T.state.lightProbeGridArray),Dt=ct.getProgramCacheKey(Ct),Kt=G.programs;G.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,G.fog=N.fog;let se=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;G.envMap=I.get(v.envMap||G.environment,se),G.envMapRotation=G.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,Kt===void 0&&(v.addEventListener("dispose",st),Kt=new Map,G.programs=Kt,G.programVariants=new Map);let we=Kt.get(Dt);if(we!==void 0){if(G.currentProgram===we&&G.lightsStateVersion===Vt)return Je(v,Ct),we}else Ct.uniforms=ct.getUniforms(v),q!==null&&v.isNodeMaterial&&q.build(v,H,Ct),v.onBeforeCompile(Ct,P),we=ct.acquireProgram(Ct,Dt),Kt.set(Dt,we),G.uniforms=Ct.uniforms;let Wt=G.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Wt.clippingPlanes=ot.uniform),Je(v,Ct),G.needsLights=it(v),G.lightsStateVersion=Vt,G.needsLights&&(Wt.ambientLightColor.value=Y.state.ambient,Wt.sunLights.value=Y.state.sun,Wt.sunLightShadows.value=Y.state.sunShadow,Wt.directionalLights.value=Y.state.directional,Wt.directionalLightShadows.value=Y.state.directionalShadow,Wt.spotLights.value=Y.state.spot,Wt.spotLightShadows.value=Y.state.spotShadow,Wt.rectAreaLights.value=Y.state.rectArea,Wt.ltc_1.value=Y.state.rectAreaLTC1,Wt.ltc_2.value=Y.state.rectAreaLTC2,Wt.pointLights.value=Y.state.point,Wt.pointLightShadows.value=Y.state.pointShadow,Wt.hemisphereLights.value=Y.state.hemi,Wt.sunShadowMatrix.value=Y.state.sunShadowMatrix,Wt.sunShadowCascade.value=Y.state.sunShadowCascade,Wt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Wt.spotLightMatrix.value=Y.state.spotLightMatrix,Wt.spotLightMap.value=Y.state.spotLightMap,Wt.pointShadowMatrix.value=Y.state.pointShadowMatrix),G.numLightProbeGrids=We(T.state.lightProbeGridArray),G.currentProgram=we,G.uniformsList=null,we}function Be(v,N,H,G,Y){let yt=Yt.get(v),Vt=yt.currentProgram.id+","+G+","+Y,Ct=yt.programVariants.get(Vt);return Ct===void 0?(Ct=Te(v,N,H),yt.programVariants.set(Vt,Ct)):(yt.currentProgram=Ct,yt.uniformsList=null,yt.outputColorSpace=G,yt.toneMapping=Y),Ct}function Ue(v){if(v.uniformsList===null){let N=v.currentProgram.getUniforms();v.uniformsList=qs.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function Je(v,N){let H=Yt.get(v);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function he(v,N,H,G,Y){N.isScene!==!0&&(N=de),te.resetTextureUnits();let yt=N.fog,Vt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?N.environment:null,Ct=ht===null?P.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Ae.workingColorSpace,Dt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Kt=I.get(G.envMap||Vt,Dt),se=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,we=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Wt=!!H.morphAttributes.position,Me=!!H.morphAttributes.normal,tn=!!H.morphAttributes.color,ze=di;G.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ze=P.toneMapping);let Oe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,fn=Oe!==void 0?Oe.length:0,Ht=Yt.get(G),yn=T.state.lights;if(xt===!0&&(Pt===!0||v!==ut)){let Xe=v===ut&&G.id===et;ot.setState(G,v,Xe)}let Pe=!1,qi=!1;G.version===Ht.__version?Ht.needsLights&&Ht.lightsStateVersion!==yn.state.version||Y.isBatchedMesh&&Ht.batching===!1||!Y.isBatchedMesh&&Ht.batching===!0||Y.isBatchedMesh&&Ht.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ht.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ht.instancing===!1||!Y.isInstancedMesh&&Ht.instancing===!0||Y.isSkinnedMesh&&Ht.skinning===!1||!Y.isSkinnedMesh&&Ht.skinning===!0||Y.isInstancedMesh&&Ht.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ht.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ht.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ht.instancingMorph===!1&&Y.morphTexture!==null||Ht.envMap!==Kt||G.fog===!0&&Ht.fog!==yt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==ot.numPlanes||Ht.numIntersection!==ot.numIntersection)||Ht.vertexAlphas!==se||Ht.vertexTangents!==we||Ht.morphTargets!==Wt||Ht.morphNormals!==Me||Ht.morphColors!==tn||Ht.morphTargetsCount!==fn||Ht.numLightProbeGrids!==We(T.state.lightProbeGridArray)?Pe=!0:(Ht.outputColorSpace!==Ct||Ht.toneMapping!==ze)&&(qi=!0):(Pe=!0,Ht.__version=G.version);let pn=Ht.currentProgram;(Pe===!0||qi===!0)&&(pn=qi===!0?Be(G,N,Y,Ct,ze):Te(G,N,Y),q&&G.isNodeMaterial&&q.onUpdateProgram(G,pn,Ht));let ca=!1,Pi=!1,Yi=!1,Re=pn.getUniforms(),cn=Ht.uniforms;if(St.useProgram(pn.program)&&(ca=!0,Pi=!0,Yi=!0),G.id!==et&&(et=G.id,Pi=!0),ca||ut!==v){St.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Re.setValue(B,"projectionMatrix",v.projectionMatrix),Re.setValue(B,"viewMatrix",v.matrixWorldInverse);let an=Re.map.cameraPosition;an!==void 0&&an.setValue(B,oe.setFromMatrixPosition(v.matrixWorld)),Fe.logarithmicDepthBuffer&&Re.setValue(B,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Re.setValue(B,"isOrthographic",v.isOrthographicCamera===!0),ut!==v&&(ut=v,Pi=!0,Yi=!0)}if(Ht.needsLights&&(yn.state.sunShadowMap.length>0&&Re.setValue(B,"sunShadowMap",yn.state.sunShadowMap,te),yn.state.directionalShadowMap.length>0&&Re.setValue(B,"directionalShadowMap",yn.state.directionalShadowMap,te),yn.state.spotShadowMap.length>0&&Re.setValue(B,"spotShadowMap",yn.state.spotShadowMap,te),yn.state.pointShadowMap.length>0&&Re.setValue(B,"pointShadowMap",yn.state.pointShadowMap,te)),Y.isSkinnedMesh){Re.setOptional(B,Y,"bindMatrix"),Re.setOptional(B,Y,"bindMatrixInverse");let Xe=Y.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),Re.setValue(B,"boneTexture",Xe.boneTexture,te))}Y.isBatchedMesh&&(Re.setOptional(B,Y,"batchingTexture"),Re.setValue(B,"batchingTexture",Y._matricesTexture,te),Re.setOptional(B,Y,"batchingIdTexture"),Re.setValue(B,"batchingIdTexture",Y._indirectTexture,te),Re.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Re.setValue(B,"batchingColorTexture",Y._colorsTexture,te));let Gn=H.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&g.update(Y,H,pn),(Pi||Ht.receiveShadow!==Y.receiveShadow)&&(Ht.receiveShadow=Y.receiveShadow,Re.setValue(B,"receiveShadow",Y.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&N.environment!==null&&(cn.envMapIntensity.value=N.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=__()),Pi){if(Re.setValue(B,"toneMappingExposure",P.toneMappingExposure),Ht.needsLights&&Zt(cn,Yi),yt&&G.fog===!0&&bt.refreshFogUniforms(cn,yt),bt.refreshMaterialUniforms(cn,G,Tt,Jt,T.state.transmissionRenderTarget[v.id]),Ht.needsLights&&Ht.numLightProbeGrids>0){let Xe=M,an=0;for(let ei of T.state.lightProbeGridArray)ei.texture!==null&&(Xe.textures[an]=ei.texture,Xe.min[an]=ei.boundingBox.min,Xe.max[an]=ei.boundingBox.max,Xe.resolution[an]=ei.resolution,Xe.intensity[an]=ei.intensity,an++);for(let ei in Xe)Xe[ei].length=an;cn.probesSH.value=Xe.textures,cn.probesMin.value=Xe.min,cn.probesMax.value=Xe.max,cn.probesResolution.value=Xe.resolution,cn.probesIntensity.value=Xe.intensity}qs.upload(B,Ue(Ht),cn,te)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(qs.upload(B,Ue(Ht),cn,te),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Re.setValue(B,"center",Y.center),Re.setValue(B,"modelViewMatrix",Y.modelViewMatrix),Re.setValue(B,"normalMatrix",Y.normalMatrix),Re.setValue(B,"modelMatrix",Y.matrixWorld),G.uniformsGroups!==void 0){let Xe=G.uniformsGroups;for(let an=0,ei=Xe.length;an<ei;an++){let th=Xe[an];O.update(th,pn),O.bind(th,pn)}}return pn}function Zt(v,N){v.ambientLightColor.needsUpdate=N,v.sunLights.needsUpdate=N,v.sunLightShadows.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function it(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return rt},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ht},this.setRenderTargetTextures=function(v,N,H){let G=Yt.get(v);G.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Yt.get(v.texture).__webglTexture=N,Yt.get(v.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,N){let H=Yt.get(v);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(v,N=0,H=0){ht=v,rt=N,$=H;let G=null,Y=!1,yt=!1;if(v){let Ct=Yt.get(v);if(Ct.__useDefaultFramebuffer!==void 0){St.bindFramebuffer(B.FRAMEBUFFER,Ct.__webglFramebuffer),Et.copy(v.viewport),Ft.copy(v.scissor),ne=v.scissorTest,St.viewport(Et),St.scissor(Ft),St.setScissorTest(ne),et=-1;return}else if(Ct.__webglFramebuffer===void 0)te.setupRenderTarget(v);else if(Ct.__hasExternalTextures)te.rebindTextures(v,Yt.get(v.texture).__webglTexture,Yt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let se=v.depthTexture;if(Ct.__boundDepthTexture!==se){if(se!==null&&Yt.has(se)&&(v.width!==se.image.width||v.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(v)}}let Dt=v.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(yt=!0);let Kt=Yt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Kt[N])?G=Kt[N][H]:G=Kt[N],Y=!0):v.samples>0&&te.useMultisampledRTT(v)===!1?G=Yt.get(v).__webglMultisampledFramebuffer:Array.isArray(Kt)?G=Kt[H]:G=Kt,Et.copy(v.viewport),Ft.copy(v.scissor),ne=v.scissorTest}else Et.copy(zt).multiplyScalar(Tt).floor(),Ft.copy(fe).multiplyScalar(Tt).floor(),ne=be;if(H!==0&&(G=k),St.bindFramebuffer(B.FRAMEBUFFER,G)&&St.drawBuffers(v,G),St.viewport(Et),St.scissor(Ft),St.setScissorTest(ne),Y){let Ct=Yt.get(v.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ct.__webglTexture,H)}else if(yt){let Ct=N;for(let Dt=0;Dt<v.textures.length;Dt++){let Kt=Yt.get(v.textures[Dt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Dt,Kt.__webglTexture,H,Ct)}}else if(v!==null&&H!==0){let Ct=Yt.get(v.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ct.__webglTexture,H)}et=-1};function vt(v){let N=Yt.get(v);return(N.__readFormat!==v.format||N.__readType!==v.type)&&(N.__readFormat=v.format,N.__readType=v.type,N.__formatReadable=Fe.textureFormatReadable(v.format),N.__typeReadable=Fe.textureTypeReadable(v.type)),N}this.readRenderTargetPixels=function(v,N,H,G,Y,yt,Vt,Ct=0){if(!(v&&v.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Yt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Vt!==void 0&&(Dt=Dt[Vt]),Array.isArray(Dt)&&(Dt=Dt[0]),Dt){let Kt=St.getBoundFramebuffer(B.READ_FRAMEBUFFER);St.bindFramebuffer(B.READ_FRAMEBUFFER,Dt);try{let se=v.textures[Ct],we=se.format,Wt=se.type;v.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ct);let Me=vt(se);if(Me.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Me.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-G&&H>=0&&H<=v.height-Y&&B.readPixels(N,H,G,Y,L.convert(we),L.convert(Wt),yt)}finally{St.bindFramebuffer(B.READ_FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(v,N,H,G,Y,yt,Vt,Ct=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Yt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Vt!==void 0&&(Dt=Dt[Vt]),Array.isArray(Dt)&&(Dt=Dt[0]),Dt)if(N>=0&&N<=v.width-G&&H>=0&&H<=v.height-Y){let Kt=St.getBoundFramebuffer(B.READ_FRAMEBUFFER);St.bindFramebuffer(B.READ_FRAMEBUFFER,Dt);let se=v.textures[Ct],we=se.format,Wt=se.type;v.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ct);let Me=vt(se);if(Me.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Me.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tn=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,tn),B.bufferData(B.PIXEL_PACK_BUFFER,yt.byteLength,B.STREAM_READ),B.readPixels(N,H,G,Y,L.convert(we),L.convert(Wt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),St.bindFramebuffer(B.READ_FRAMEBUFFER,Kt);let ze=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Mu(B,ze,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,tn),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,yt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(tn),B.deleteSync(ze),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,N=null,H=0){let G=Math.pow(2,-H),Y=Math.floor(v.image.width*G),yt=Math.floor(v.image.height*G),Vt=N!==null?N.x:0,Ct=N!==null?N.y:0;te.setTexture2D(v,0),St.activeTexture(B.TEXTURE0),B.copyTexSubImage2D(B.TEXTURE_2D,H,0,0,Vt,Ct,Y,yt),St.unbindTexture()},this.copyTextureToTexture=function(v,N,H=null,G=null,Y=0,yt=0){let Vt,Ct,Dt,Kt,se,we,Wt,Me,tn,ze=v.isCompressedTexture?v.mipmaps[yt]:v.image;if(H!==null)Vt=H.max.x-H.min.x,Ct=H.max.y-H.min.y,Dt=H.isBox3?H.max.z-H.min.z:1,Kt=H.min.x,se=H.min.y,we=H.isBox3?H.min.z:0;else{let Re=Math.pow(2,-Y);Vt=Math.floor(v.width*Re),Ct=Math.floor(v.height*Re),v.isDataArrayTexture?Dt=ze.depth:v.isData3DTexture?Dt=Math.floor(ze.depth*Re):Dt=1,Kt=0,se=0,we=0}G!==null?(Wt=G.x,Me=G.y,tn=G.z):(Wt=0,Me=0,tn=0);let Oe=L.convert(N.format),fn=L.convert(N.type),Ht;N.isData3DTexture?(te.setTexture3D(N,0),Ht=B.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(te.setTexture2DArray(N,0),Ht=B.TEXTURE_2D_ARRAY):(te.setTexture2D(N,0),Ht=B.TEXTURE_2D),St.activeTexture(B.TEXTURE0),St.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,N.flipY),St.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),St.pixelStorei(B.UNPACK_ALIGNMENT,N.unpackAlignment);let yn=St.getParameter(B.UNPACK_ROW_LENGTH),Pe=St.getParameter(B.UNPACK_IMAGE_HEIGHT),qi=St.getParameter(B.UNPACK_SKIP_PIXELS),pn=St.getParameter(B.UNPACK_SKIP_ROWS),ca=St.getParameter(B.UNPACK_SKIP_IMAGES);St.pixelStorei(B.UNPACK_ROW_LENGTH,ze.width),St.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ze.height),St.pixelStorei(B.UNPACK_SKIP_PIXELS,Kt),St.pixelStorei(B.UNPACK_SKIP_ROWS,se),St.pixelStorei(B.UNPACK_SKIP_IMAGES,we);let Pi=v.isDataArrayTexture||v.isData3DTexture,Yi=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){let Re=Yt.get(v),cn=Yt.get(N),Gn=Yt.get(Re.__renderTarget),Xe=Yt.get(cn.__renderTarget);St.bindFramebuffer(B.READ_FRAMEBUFFER,Gn.__webglFramebuffer),St.bindFramebuffer(B.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let an=0;an<Dt;an++)Pi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Yt.get(v).__webglTexture,Y,we+an),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Yt.get(N).__webglTexture,yt,tn+an)),B.blitFramebuffer(Kt,se,Kt+Vt,se+Ct,Wt,Me,Wt+Vt,Me+Ct,B.DEPTH_BUFFER_BIT,B.NEAREST);St.bindFramebuffer(B.READ_FRAMEBUFFER,null),St.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||v.isRenderTargetTexture||Yt.has(v)){let Re=Yt.get(v),cn=Yt.get(N);St.bindFramebuffer(B.READ_FRAMEBUFFER,Z),St.bindFramebuffer(B.DRAW_FRAMEBUFFER,K);for(let Gn=0;Gn<Dt;Gn++)Pi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Re.__webglTexture,Y,we+Gn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Re.__webglTexture,Y),Yi?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,cn.__webglTexture,yt,tn+Gn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,cn.__webglTexture,yt),Y!==0?B.blitFramebuffer(Kt,se,Kt+Vt,se+Ct,Wt,Me,Wt+Vt,Me+Ct,B.COLOR_BUFFER_BIT,B.NEAREST):Yi?B.copyTexSubImage3D(Ht,yt,Wt,Me,tn+Gn,Kt,se,Vt,Ct):B.copyTexSubImage2D(Ht,yt,Wt,Me,Kt,se,Vt,Ct);St.bindFramebuffer(B.READ_FRAMEBUFFER,null),St.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Yi?v.isDataTexture||v.isData3DTexture?B.texSubImage3D(Ht,yt,Wt,Me,tn,Vt,Ct,Dt,Oe,fn,ze.data):N.isCompressedArrayTexture?B.compressedTexSubImage3D(Ht,yt,Wt,Me,tn,ze.width,ze.height,Dt,Oe,ze.data):B.texSubImage3D(Ht,yt,Wt,Me,tn,Vt,Ct,Dt,Oe,fn,ze):v.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,yt,Wt,Me,Vt,Ct,Oe,fn,ze.data):v.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,yt,Wt,Me,ze.width,ze.height,Oe,ze.data):B.texSubImage2D(B.TEXTURE_2D,yt,Wt,Me,Vt,Ct,Oe,fn,ze);St.pixelStorei(B.UNPACK_ROW_LENGTH,yn),St.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pe),St.pixelStorei(B.UNPACK_SKIP_PIXELS,qi),St.pixelStorei(B.UNPACK_SKIP_ROWS,pn),St.pixelStorei(B.UNPACK_SKIP_IMAGES,ca),yt===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&B.generateMipmap(Ht),St.unbindTexture()},this.initRenderTarget=function(v){Yt.get(v).__webglFramebuffer===void 0&&te.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?te.setTextureCube(v,0):v.isData3DTexture?te.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?te.setTexture2DArray(v,0):te.setTexture2D(v,0),St.unbindTexture()},this.resetState=function(){rt=0,$=0,ht=null,St.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ae._getUnpackColorSpace()}};var dn=1/40,Ve=Math.PI*2,ti=(i,t,e)=>i<t?t:i>e?e:i,Zs=(i,t,e)=>i+(t-i)*e,jn=(i,t,e)=>{let n=ti((e-i)/(t-i),0,1);return n*n*(3-2*n)},Ye=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-e*n));function ls(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var $s=(i,t)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)};function En(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,a=s*s*(3-2*s),o=r*r*(3-2*r),l=$s(e,n),c=$s(e+1,n),h=$s(e,n+1),p=$s(e+1,n+1);return l+(c-l)*a+(h-l)*o+(l-c-h+p)*a*o}function la(i,t){let e=0,n=.5,s=1;for(let r=0;r<4;r++)e+=n*En(i*s,t*s),s*=2.03,n*=.5;return e/.9375}var wl=new Ie,Al=new Dn,fd=new Nn,x_=new F,md=new F,en=new Qt;function re(i,t){i.index&&(i=i.toNonIndexed()),i.attributes.uv&&i.deleteAttribute("uv"),i.attributes.uv1&&i.deleteAttribute("uv1");let e=i.attributes.position,n=e.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)typeof t=="function"?t(en,e.getX(r),e.getY(r),e.getZ(r),r):en.set(t),s[r*3]=en.r,s[r*3+1]=en.g,s[r*3+2]=en.b;return i.setAttribute("color",new ke(s,3)),i}function ue(i,t=0,e=0,n=0,s=0,r=0,a=0,o=1,l=o,c=o){return fd.set(s,r,a),Al.setFromEuler(fd),wl.compose(x_.set(t,e,n),Al,md.set(o,l,c)),i.applyMatrix4(wl),i}function pd(i,t,e){let n=new F().subVectors(e,t),s=n.length();return Al.setFromUnitVectors(new F(0,1,0),n.normalize()),wl.compose(new F().addVectors(t,e).multiplyScalar(.5),Al,md.set(1,1,1)),i.applyMatrix4(wl),s}function mi(i){let t=0;for(let o of i)t+=o.attributes.position.count;let e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*3),r=0;for(let o of i)o.attributes.normal||o.computeVertexNormals(),e.set(o.attributes.position.array,r*3),n.set(o.attributes.normal.array,r*3),s.set(o.attributes.color.array,r*3),r+=o.attributes.position.count,o.dispose();let a=new Le;return a.setAttribute("position",new ke(e,3)),a.setAttribute("normal",new ke(n,3)),a.setAttribute("color",new ke(s,3)),a.computeBoundingSphere(),a}var vn=(i,t,e,n)=>i.copy(bl.set(t)).lerp(v_.set(e),ti(n,0,1)),bl=new Qt,v_=new Qt;function Js(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new Cr(s);return r.colorSpace=Sn,r.anisotropy=4,n&&(r.wrapS=r.wrapT=Rs,r.repeat.set(n[0],n[1])),r}function y_(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}function M_(i,t){let{VW:e=2600,MER_X:n=330,ZONE_X:s=480}=t||{},r=new yl({canvas:i,antialias:!0,powerPreference:"high-performance"});r.toneMapping=Jr,r.toneMappingExposure=1.05,r.shadowMap.enabled=!0,r.shadowMap.type=ns;let a=new vr,o=new Qt("#D5E6EE");a.background=o,a.fog=new xr(o,70,520);let l=new _n(40,.5,.1,1200),c={time:{value:0}},h=ls(20261123),p=new Wr("#CFE5FF","#7FA458",1.05);a.add(p);let d=new F(.55,.6,.5).normalize(),u=new Yr("#FFE6BC",3);u.castShadow=!0,u.shadow.mapSize.set(2048,2048),Object.assign(u.shadow.camera,{left:-17,right:17,top:17,bottom:-17,near:1,far:140}),u.shadow.bias=-4e-4,u.shadow.normalBias=.025,u.shadow.radius=2.5,a.add(u,u.target);let _=new ft(new Se(600,32,16),new zn({side:un,depthWrite:!1,fog:!1,uniforms:{top:{value:new Qt("#2F78DA")},mid:{value:new Qt("#86C4F7")},hor:{value:new Qt("#F8E6C8")},sunDir:{value:new F(.62,.3,-.73).normalize()}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top, mid, hor, sunDir; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float y = d.y;
        vec3 c = mix(hor, mid, smoothstep(-0.03, 0.2, y)); c = mix(c, top, smoothstep(0.2, 0.8, y));
        float s = max(dot(d, sunDir), 0.0);
        c += vec3(1.0, 0.86, 0.6) * (pow(s, 10.0) * 0.35 + pow(s, 90.0) * 0.6);
        c = mix(c, vec3(1.0, 0.97, 0.86), smoothstep(0.9982, 0.9992, s));
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));_.renderOrder=-10,_.frustumCulled=!1,a.add(_);let b=-8.2;function f(g,w){let C=Math.abs(w),L=(la(g*.11+3.1,w*.11)-.5)*.7*jn(1.8,5,C);w>5&&(L-=(w-5)*.045);let D=w-b;if(L-=Math.exp(-(D*D)/3.2)*1.05*jn(1.6,4.5,C),w<-10.5){let Q=jn(-10.5,-26,w);L+=Q*(1.6+la(g*.035+9,w*.035)*9)+jn(-35,-110,w)*16*la(g*.02,w*.02+4)-jn(-150,-260,w)*10}let O=jn(1,-16,g)+jn(64,80,g);return O>0&&(L+=O*(7+la(g*.06,w*.06)*6)*jn(-1,3,-Math.abs(w-b*.5)+30)),L}{let g=[];for(let W=-75;W<=145;W+=1.25)g.push(W);g.unshift(-260,-180,-120),g.push(200,260,330);let w=[];for(let W=36;W>14;W-=1)w.push(W);for(let W=14;W>-10;W-=.5)w.push(W);for(let W=-10;W>-40;W-=1.25)w.push(W);for(let W=-40;W>-160;W-=3.5)w.push(W);for(let W=-160;W>=-380;W-=9)w.push(W);let C=g.length,L=w.length,D=new Float32Array(C*L*3),O=new Float32Array(C*L*3);for(let W=0;W<L;W++)for(let X=0;X<C;X++){let st=g[X],pt=w[W],Nt=f(st,pt),ie=(W*C+X)*3;D[ie]=st,D[ie+1]=Nt,D[ie+2]=pt;let Bt=la(st*.07+11,pt*.07),Xt=En(st*.5,pt*.5);vn(en,"#5FAE3E","#9AD85E",Bt*1.3-.15+Xt*.2);let _e=Math.abs(pt-b);_e<2.8&&en.lerp(bl.set(Nt<-.35?"#8F8A62":"#D9C891"),jn(2.8,1.7,_e)),pt<-12&&en.lerp(bl.set("#4F9A3E"),jn(-12,-40,pt)*.6),Nt>6&&en.lerp(bl.set("#A99A78"),jn(6,14,Nt)*.55),O[ie]=en.r,O[ie+1]=en.g,O[ie+2]=en.b}let Q=[];for(let W=0;W<L-1;W++)for(let X=0;X<C-1;X++){let st=W*C+X,pt=st+1,Nt=st+C,ie=Nt+1;Q.push(st,pt,Nt,pt,ie,Nt)}let z=new Le;z.setAttribute("position",new ke(D,3)),z.setAttribute("color",new ke(O,3)),z.setIndex(Q),z.computeVertexNormals();let nt=new ft(z,new je({vertexColors:!0}));nt.receiveShadow=!0,a.add(nt)}{let g=Js(1024,64,(C,L,D)=>{C.clearRect(0,0,L,D);for(let O=0;O<L;O+=2){let Q=8+En(O*.05,1)*10+En(O*.3,2)*3,z=D-8-En(O*.05,5)*10-En(O*.3,7)*3,nt=C.createLinearGradient(0,Q,0,z);nt.addColorStop(0,"rgba(214,190,128,0)"),nt.addColorStop(.18,"rgba(214,190,128,.92)"),nt.addColorStop(.82,"rgba(206,180,118,.92)"),nt.addColorStop(1,"rgba(206,180,118,0)"),C.fillStyle=nt,C.fillRect(O,Q,2,z-Q)}for(let O=0;O<700;O++)C.fillStyle=`rgba(${150+O%5*18},${130+O%7*10},${95+O%3*12},.55)`,C.beginPath(),C.arc(Math.random()*L,14+Math.random()*(D-28),.6+Math.random()*1.6,0,Ve),C.fill()},[7,1]),w=new ft(new Bn(90,2.1),new je({map:g,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));w.rotation.x=-Math.PI/2,w.position.set(32,.012,0),w.receiveShadow=!0,a.add(w)}let m=Js(256,256,(g,w,C)=>{let L=g.createImageData(w,C),D=(O,Q)=>En(O/18,Q/9)*.6+En(O/7,Q/4)*.4;for(let O=0;O<C;O++)for(let Q=0;Q<w;Q++){let z=D(Q+1,O)-D(Q-1,O),nt=D(Q,O+1)-D(Q,O-1),W=(O*w+Q)*4,X=-z*3,st=-nt*3,pt=Math.hypot(X,st,1);L.data[W]=(X/pt*.5+.5)*255,L.data[W+1]=(st/pt*.5+.5)*255,L.data[W+2]=(1/pt*.5+.5)*255,L.data[W+3]=255}g.putImageData(L,0,0)},[40,2]);m.colorSpace="";let y=new ft(new Bn(240,4.4),new Ti({color:"#3D9FD8",specular:"#FFFFFF",shininess:140,normalMap:m,transparent:!0,opacity:.9}));y.material.normalScale.set(.7,.7),y.rotation.x=-Math.PI/2,y.position.set(35,-.34,b),y.receiveShadow=!0,a.add(y);{let g=[],w=(z,nt,W,X,st,pt)=>{let Nt=new Yn(X,W,30,12),ie=Nt.attributes.position;for(let Bt=0;Bt<ie.count;Bt++){let Xt=ie.getX(Bt),_e=ie.getY(Bt),ae=ie.getZ(Bt),Ut=Math.atan2(ae,Xt),It=(_e+W/2)/W,Ot=1+(En(Ut*2.2+st,It*3.5)-.5)*.45*(1-It*.4);ie.setXYZ(Bt,Xt*Ot,_e+(En(Ut*4+st*2,It*5)-.5)*W*.07*(1-It),ae*Ot)}Nt=re(Nt,(Bt,Xt,_e,ae)=>{let Ut=(_e+W/2)/W,It=En(Math.atan2(ae,Xt)*6+st,Ut*9);vn(Bt,"#5E7FA6","#93A9CE",Ut*1.15+It*.3),pt<1&&Ut>pt-.06+It*.08&&Bt.set("#F7FAFF")}),g.push(ue(Nt,z,W/2-2,nt))};w(70,-360,125,80,1.3,.6),[[-90,-330,70,70],[-30,-350,88,75],[15,-320,60,60],[30,-390,100,85],[125,-350,90,75],[170,-320,64,62],[215,-370,82,72],[-150,-380,95,85],[100,-300,42,50],[-20,-290,38,46],[150,-290,40,44]].forEach(([z,nt,W,X],st)=>w(z,nt,W,X,st*3.7,W>75?.76:2));let L=new ft(mi(g),new je({vertexColors:!0,flatShading:!0}));a.add(L);let D=new Ee,O=new ft(new Ce(.25,.25,9,6),new je({color:"#5C3A1A"}));O.position.y=4.5;let Q=new ft(new Bn(6,3.6),new sn({color:"#FFB703",side:Ge,fog:!1}));Q.position.set(3,7,0),D.add(O,Q),D.position.set(70,121,-360),D.scale.setScalar(1.6),a.add(D)}let E=new je({vertexColors:!0}),M=new je({vertexColors:!0,flatShading:!0});function R(g,w,C){let L=g.clone();return L.onBeforeCompile=D=>{D.uniforms.uTime=c.time,D.vertexShader=`uniform float uTime;
`+D.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float hh = max(0.0, transformed.y - ${C.toFixed(2)});
        float ph = 0.0;
        #ifdef USE_INSTANCING
          ph = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.23;
        #endif
        transformed.x += (sin(uTime * 1.25 + ph) + 0.35 * sin(uTime * 2.7 + ph * 1.7)) * ${w.toFixed(4)} * hh * hh;
        transformed.z += cos(uTime * 1.05 + ph) * ${(w*.5).toFixed(4)} * hh * hh;`)},L.customProgramCacheKey=()=>"sway"+w+"_"+C+(g.flatShading?"f":"")+g.side,L}let T=(g,w,C)=>Math.abs(w)<1.25+C||g>2.6&&g<15.4&&w>-5.4&&w<1.8||Math.abs(w-b)<2.4+C;function x(g,w,C,L,D={}){let O=new Ns(g,w,C),Q=new Qe,z=0;for(let nt=0;z<C&&nt<C*30;nt++)L(Q,z)&&(Q.updateMatrix(),O.setMatrixAt(z,Q.matrix),D.color&&O.setColorAt(z,en.set(D.color(z))),z++);return O.count=z,O.castShadow=!!D.cast,O.receiveShadow=D.receive!==!1,a.add(O),O}function A(g,w,C){let L=[],D=4.6+g()*1.6,O=new ci([new F(0,-.2,0),new F(w*.2,D*.35,.05),new F(w*.6,D*.7,.1),new F(w,D,.12)]),Q=13;for(let W=0;W<Q;W++){let X=O.getPoint(W/Q),st=O.getPoint((W+1)/Q),pt=Zs(.25,.14,W/Q),Nt=re(new Ce(pt*1.13,pt*.9,1,9,1,!0),(Bt,Xt,_e)=>vn(Bt,W%2?"#7E5E3C":"#8D6C46","#A9875C",_e+.5)),ie=X.distanceTo(st);ue(Nt,0,0,0,0,0,0,1,ie*1.04,1),pd(Nt,X,st),L.push(Nt)}let z=O.getPoint(1),nt=new F(0,1,0);L.push(ue(re(new On(.28,1),"#6B5A2E"),z.x,z.y,z.z));for(let W=0;W<C;W++){let X=W/C*Ve+g()*.35,st=new F(Math.cos(X),0,Math.sin(X)),pt=2.6+g()*.9,Nt=.7+g()*.6,ie=new ci([z.clone(),z.clone().addScaledVector(st,pt*.3).addScaledVector(nt,.55),z.clone().addScaledVector(st,pt*.65).addScaledVector(nt,.35-Nt*.2),z.clone().addScaledVector(st,pt).addScaledVector(nt,-Nt)]),Bt=14,Xt=[],_e=[],ae=[];for(let Ot=0;Ot<=Bt;Ot++){let qt=Ot/Bt,$t=ie.getPoint(qt),xe=ie.getTangent(qt),We=new F().crossVectors(xe,nt).normalize(),Te=Math.pow(Math.sin(Math.PI*Math.min(1,qt*1.15)),.7)*.5*(Ot%2?1:.72);ae.push([$t,$t.clone().addScaledVector(We,Te).addScaledVector(nt,-Te*.42),$t.clone().addScaledVector(We,-Te).addScaledVector(nt,-Te*.42),qt])}let Ut=(Ot,qt,$t)=>{Xt.push(Ot.x,Ot.y,Ot.z),vn(en,"#2E7A30","#6CC24A",qt*.9+$t*.25),_e.push(en.r,en.g,en.b)};for(let Ot=0;Ot<Bt;Ot++){let[qt,$t,xe,We]=ae[Ot],[Te,Be,Ue,Je]=ae[Ot+1];Ut(qt,We,0),Ut($t,We,1),Ut(Te,Je,0),Ut($t,We,1),Ut(Be,Je,1),Ut(Te,Je,0),Ut(qt,We,0),Ut(Te,Je,0),Ut(xe,We,1),Ut(xe,We,1),Ut(Te,Je,0),Ut(Ue,Je,1)}let It=new Le;It.setAttribute("position",new ke(new Float32Array(Xt),3)),It.setAttribute("color",new ke(new Float32Array(_e),3)),It.computeVertexNormals(),L.push(It)}for(let W=0;W<2;W++){let X=g()*Ve;for(let st=0;st<7;st++)L.push(ue(re(new On(.085,0),st%2?"#B85C1C":"#D07A26"),z.x+Math.cos(X)*.32+(g()-.5)*.16,z.y-.32-g()*.3,z.z+Math.sin(X)*.32+(g()-.5)*.16))}return mi(L)}let U=R(new je({vertexColors:!0,side:Ge}),.012,2.8),P=[[2.4,-3.6],[11.8,-5.7],[15.6,-3.9],[.6,-5.2]];for(let g=17;g<64;g+=5.5+h()*4)P.push([g,-(3.4+h()*2.4)]);for(let g=-6;g<70;g+=4.5+h()*5)P.push([g,b-3.2-h()*4]);for(let g=-8;g<70;g+=7+h()*7)P.push([g,b+3+h()*.6]);[A(ls(3),1.1,9),A(ls(8),-.8,10),A(ls(15),.5,8)].forEach((g,w)=>{for(let C of[!0,!1]){let L=P.filter((O,Q)=>Q%3===w&&O[1]>-7===C),D=0;L.length&&x(g,U,L.length,O=>{let[Q,z]=L[D++];return O.position.set(Q,f(Q,z)-.05,z),O.rotation.set(0,h()*Ve,0),O.scale.setScalar(.85+h()*.35),!0},{cast:C})}});function q(g,w,C){let L=[re(ue(new Ce(.12,.2,1.7,7),0,.85,0),"#7A5230")];L.push(re(ue(new Ce(.05,.08,.8,5),.25,1.55,0,0,0,-.7),"#7A5230"));for(let D=0;D<7;D++){let O=.62+g()*.45,Q=(g()-.5)*1.3,z=2.15+g()*.9,nt=(g()-.5)*1.1,W=g();L.push(ue(re(new On(O,1),(X,st,pt,Nt)=>vn(X,C[0],C[1],.25+pt/O*.45+W*.3+($s(st*9,Nt*9)-.5)*.2)),Q,z,nt))}if(w)for(let D=0;D<9;D++){let O=g()*Ve,Q=g()*1.3;L.push(ue(re(new On(.08,1),w),Math.cos(O)*.95,2.1+Math.sin(Q)*.9,Math.sin(O)*.85+.2))}return mi(L)}let k=R(new je({vertexColors:!0,flatShading:!0}),.01,1.2);[q(ls(21),"#E8443A",["#2F8A3C","#7CCB55"]),q(ls(33),null,["#3B9447","#8AD460"]),q(ls(41),"#FFB52E",["#2C7F3A","#6FC24F"])].forEach((g,w)=>x(g,k,w===1?6:12,C=>{let L=-6+h()*76,D=w===1?-(4.6+h()*2):b-4-h()*16;return T(L,D,1.6)||Math.abs(L-9)<7&&D>-6?!1:(C.position.set(L,f(L,D)-.05,D),C.rotation.set(0,h()*Ve,0),C.scale.setScalar(w===1?.6+h()*.25:.75+h()*.45),!0)},{cast:w===1}));let K=mi([0,1,2,3].map(g=>ue(re(new On(.42-g*.05,1),(w,C,L)=>vn(w,"#2F8A3C","#86D05C",.4+L*.9+g*.1)),(g-1.5)*.32,.3,g%2*.2)));x(K,M,70,g=>{let w=h()<.3,C=-8+h()*80,L=w?1.9+h()*1.4:-(2.2+h()*4.5);return T(C,L,.6)?!1:(g.position.set(C,f(C,L),L),g.rotation.y=h()*Ve,g.scale.setScalar(w?.4+h()*.3:.6+h()*.7),!0)},{cast:!0});let rt=re(new Bs(.4,0),(g,w,C,L)=>vn(g,"#8C877B","#C9C4B6",.4+C*1.2+$s(w*7,L*7)*.3));x(rt,M,55,g=>{let w=-8+h()*80,C=h()<.5?-(1.6+h()*6):1.6+h()*2.2;if(T(w,C,.3)&&!(Math.abs(C-b)<3.4&&Math.abs(C-b)>1.6))return!1;g.position.set(w,f(w,C)+.05,C),g.rotation.set(h()*3,h()*3,h()*3);let L=C>0?.45:1;return g.scale.set((.4+h()*.9)*L,(.3+h()*.5)*L,(.4+h()*.8)*L),!0},{cast:!0}),x(mi([ue(re(new Ce(.15,.22,1.6,5),"#6B4A2A"),0,.8,0),ue(re(new On(1.2,0),(g,w,C)=>vn(g,"#2F7A38","#68B24E",C/1.2*.5+.5)),0,2.3,0,0,0,0,1,.85,1),ue(re(new On(.8,0),(g,w,C)=>vn(g,"#3A8740","#78C05A",C/.8*.5+.5)),.6,2.9,.2)]),M,170,g=>{let w=-50+h()*170,C=-24-h()*70,L=f(w,C);return En(w*.05,C*.05)<.42?!1:(g.position.set(w,L-.2,C),g.rotation.y=h()*Ve,g.scale.setScalar(1+h()*1.4),!0)});let $=mi([...Array(6)].map((g,w)=>{let C=w*1.1,L=.8+w%3*.22,D=re(new Yn(.025,L,3),(O,Q,z)=>vn(O,"#3C7F35","#8CC05A",z/L+.5));return ue(D,Math.cos(C)*.12,L/2,Math.sin(C)*.12,Math.sin(C)*.15,0,Math.cos(C)*.15),w%2?mi([D,ue(re(new Ce(.035,.035,.16,6),"#6B4423"),Math.cos(C)*.12+Math.cos(C)*.15*L,L-.05,Math.sin(C)*.12)]):D}));x($,R(E,.09,.2),90,g=>{let w=-8+h()*82,C=b+(h()<.5?-1:1)*(1.75+h()*.5);return g.position.set(w,f(w,C)-.05,C),g.rotation.y=h()*Ve,g.scale.setScalar(.8+h()*.5),!0});let ht=(()=>{let g=[],w=[];for(let L=0;L<5;L++){let D=L/5*Ve+.3,O=.22+L%3*.07,Q=.035,z=Math.cos(D)*.05,nt=Math.sin(D)*.05,W=z+Math.cos(D)*.1,X=nt+Math.sin(D)*.1,st=-Math.sin(D)*Q,pt=Math.cos(D)*Q;g.push(z-st,0,nt-pt,z+st,0,nt+pt,W,O,X);for(let Nt of[0,0,1])vn(en,"#3A8A34","#A6E070",Nt),w.push(en.r,en.g,en.b)}let C=new Le;return C.setAttribute("position",new ke(new Float32Array(g),3)),C.setAttribute("color",new ke(new Float32Array(w),3)),C.computeVertexNormals(),C})();x(ht,R(new je({vertexColors:!0,side:Ge}),.5,0),3200,g=>{let w=-8+h()*82,C=-7+h()*17;return Math.abs(C)<.95||Math.abs(C-b)<2.2||w>7.6&&w<11.8&&C>-4.2&&C<-.2?!1:(g.position.set(w,f(w,C)-.02,C),g.rotation.y=h()*Ve,g.scale.setScalar(C>4?.5+h()*.5:.7+h()*.9),!0)},{receive:!0});{let g=mi([ue(re(new Ce(.007,.01,.24,3,1,!0),"#3E8E36"),0,.12,0),ue(re(new Ei(.02,6),"#FFD54A"),0,.248,.004,-1,0,0)]),w=mi([0,1,2,3,4].map(Q=>{let z=Q/5*Ve;return ue(re(new Ei(.036,5),"#FFFFFF"),Math.cos(z)*.035,Math.sin(z)*.035,0,0,0,z)}));ue(w,0,.245,0,-1,0,0);let C=[],L=["#FF6B9A","#FFFFFF","#FFD23F","#B28DFF","#FF8C42","#FF4D6D","#7FD1FF"];for(let Q=0;Q<1500&&C.length<1400;Q++){let z=-6+h()*78,nt=-6+h()*9.4;Math.abs(nt)<.95||Math.abs(nt-b)<2.3||z>7.2&&z<12.2&&nt>-4.4&&nt<-.1||En(z*.18,nt*.18)<.38||C.push([z,nt,h()*Ve,1.2+h()*.8,L[Math.floor(En(z*.3+40,nt*.3)*L.length*.999+h()*1.5)%L.length]])}let D=new je({vertexColors:!0,side:Ge}),O=0;x(g,R(E,.8,0),C.length,Q=>{let[z,nt,W,X]=C[O++];return Q.position.set(z,f(z,nt),nt),Q.rotation.set(0,W*.25,0),Q.scale.setScalar(X),!0}),O=0,x(w,R(D,.8,0),C.length,Q=>{let[z,nt,W,X]=C[O++];return Q.position.set(z,f(z,nt),nt),Q.rotation.set(0,W*.25,0),Q.scale.setScalar(X),!0},{color:Q=>C[Q][4]})}let et=new Ee;a.add(et);{let g=new je({color:"#FFFFFF",emissive:"#C9D8E6",emissiveIntensity:.35,flatShading:!1,fog:!0});for(let w=0;w<11;w++){let C=new Ee;for(let L=0;L<6;L++){let D=new ft(new On(1,2),g);D.position.set((L-2.5)*2.1+h(),h()*1.4,h()*1.5),D.scale.set(2.2+h()*1.6,1.5+h()*1.1,1.8+h()),C.add(D)}C.position.set(-60+h()*200,28+h()*22,-70-h()*90),C.userData.v=.4+h()*.6,et.add(C)}}let ut=[];{let g=new Le;g.setAttribute("position",new ke(new Float32Array([0,0,0,.9,0,-.25,.9,0,.25]),3)),g.computeVertexNormals();let w=new sn({color:"#34406A",side:Ge});for(let C=0;C<6;C++){let L=new Ee,D=new ft(g,w),O=new ft(g,w);O.scale.x=-1,L.add(D,O),L.userData={ph:h()*6,sp:2+h()*2,y:18+h()*14,z:-30-h()*40,x0:h()*200,l:D,r:O},ut.push(L),a.add(L)}}let Et=[];{let g=new Zn;g.moveTo(0,0),g.bezierCurveTo(.05,.1,.16,.12,.15,.02),g.bezierCurveTo(.16,-.05,.08,-.1,0,-.02);let w=new Bi(g,6),C=["#FF8FD1","#FFD23F","#8FD6FF","#FFFFFF","#FF9E5E","#B28DFF"];for(let L=0;L<9;L++){let D=new je({color:C[L%C.length],side:Ge,emissive:C[L%C.length],emissiveIntensity:.25}),O=new Ee,Q=new ft(w,D),z=new ft(w,D);z.scale.x=-1;let nt=new ft(new Ai(.012,.07,3,5),new sn({color:"#2B2233"}));nt.rotation.x=Math.PI/2,O.add(Q,z,nt),O.userData={l:Q,r:z,ax:3+L*7.5+h()*3,az:(L%3===0?1.8:-1.8)+h()*1.5,ph:h()*6},Et.push(O),a.add(O)}}let Ft=Js(64,64,g=>{let w=g.createRadialGradient(32,32,0,32,32,32);w.addColorStop(0,"rgba(255,255,255,1)"),w.addColorStop(.35,"rgba(255,255,255,.5)"),w.addColorStop(1,"rgba(255,255,255,0)"),g.fillStyle=w,g.fillRect(0,0,64,64)}),ne=(()=>{let w=new Float32Array(480),C=[];for(let O=0;O<160;O++)C.push([h()*30-15,.3+h()*3.5,-4+h()*12,h()*6]);let L=new Le;L.setAttribute("position",new ke(w,3));let D=new Er(L,new Os({size:.07,map:Ft,color:"#FFF4C4",transparent:!0,opacity:.85,depthWrite:!1,blending:ui}));return D.frustumCulled=!1,a.add(D),D.userData.seeds=C,D})(),j=9.7,_t=-2.8,Rt=new F(13.7,0,-2.4),Jt=10.75,Tt={flames:[],glows:[],lantern:null,merchant:null};{let g=[],w=(it,vt)=>it.set(Math.floor((vt+1.7)/.425)%2?"#EAD9B5":"#D9C39C");g.push(ue(re(new rn(3.4,1.95,2.4),w),j,.975,_t));for(let it of[-1,1])g.push(ue(re(new rn(3.62,.07,1.52),(vt,v)=>vt.set(Math.floor((v+1.81)/.4525)%2?"#C9AE82":"#B99D70")),j,2.32,_t+it*.6,it*.59,0,0));let C=new Zn;C.moveTo(-1.2,0),C.lineTo(1.2,0),C.lineTo(0,.8),C.closePath();for(let it of[-1,1])g.push(ue(re(new Bi(C),"#E3D0A8"),j+it*1.7,1.95,_t,0,Math.PI/2,0));g.push(ue(re(new rn(.95,1.55,.05),"#3F2412"),j-.25,.775,_t+1.22));for(let it of[-1,1]){let vt=new Zn;vt.moveTo(0,0),vt.lineTo(.42*it,0),vt.lineTo(0,-1),vt.closePath(),g.push(ue(re(new Bi(vt),"#E9D7B0"),j-.25+it*.04,1.55,_t+1.25))}let L=new F(0,2.15,_t+1.2),D=new F(0,1.98,_t+2.55),O=L.distanceTo(D),Q=Math.atan2(L.y-D.y,D.z-L.z);for(let it=0;it<8;it++){let vt=j-1.7+.2125+it*.425,v=it%2?"#FAF3E6":"#D7263D";g.push(ue(re(new rn(.425,.035,O),v),vt,(L.y+D.y)/2,(L.z+D.z)/2,Q,0,0)),g.push(ue(re(new Ei(.2125,10,Math.PI,Math.PI),v),vt,D.y,D.z+.01))}for(let it of[-1,1])g.push(ue(re(new Ce(.045,.055,2.05,7),"#5C3A1A"),j+it*1.68,1.02,_t+2.55));g.push(ue(re(new Ce(.03,.03,.5,5),"#5C3A1A"),j,2.95,_t+1.22,0,0,0));let z=j-.78,nt=_t+2;g.push(ue(re(new rn(1,.06,.55),"#8B5A2B"),z,.74,nt));for(let[it,vt]of[[-1,-1],[1,-1],[-1,1],[1,1]])g.push(ue(re(new Ce(.03,.03,.72,5),"#6B4220"),z+it*.44,.36,nt+vt*.22));let W=it=>new Jn([new tt(.001,0),new tt(.09*it,0),new tt(.15*it,.07),new tt(.16*it,.17),new tt(.11*it,.28),new tt(.06*it,.32),new tt(.075*it,.36),new tt(.06*it,.37)],14);g.push(ue(re(W(1),(it,vt,v)=>it.set(v>.2&&v<.24?"#F2E3C6":"#C0612B")),z-.3,.77,nt)),g.push(ue(re(W(.8),(it,vt,v)=>it.set(v>.16&&v<.19?"#FFFFFF":"#2E86AB")),z+.02,.77,nt-.05)),g.push(ue(re(new Ce(.07,.07,.42,10),(it,vt,v)=>it.set(Math.abs(v)>.17?"#E8C170":Math.floor((v+.2)/.06)%2?"#9B2335":"#1F3A68")),z+.3,.84,nt,0,0,Math.PI/2)),g.push(ue(re(new Se(.28,12,8),(it,vt,v)=>vn(it,"#C8B18A","#E2D2AE",v*2+.5)),j-2.05,.27,_t+1.2,0,0,0,1,1.2,1)),g.push(ue(re(new Se(.22,12,8),(it,vt,v)=>vn(it,"#C8B18A","#E2D2AE",v*2+.5)),j-2,.22,_t+1.75,0,0,0,1,1.15,1)),g.push(ue(re(new rn(.5,.42,.42),(it,vt,v,N)=>it.set(Math.abs(v)>.17||Math.abs(vt)>.21?"#7A4E25":"#A0703C")),j+1.95,.21,_t+1,0,.3,0));let X=(it,vt)=>{let v=it.distanceTo(vt),N=Math.max(2,Math.round(v/.55));for(let H=0;H<=N;H++){let G=it.clone().lerp(vt,H/N);g.push(ue(re(new Ce(.045,.055,.85,6),"#8B5A2B"),G.x,.42,G.z))}for(let H of[.3,.62]){let G=re(new rn(.05,1,.035),"#9C6A36");ue(G,0,0,0,0,0,0,1,v,1),pd(G,new F(it.x,H,it.z),new F(vt.x,H,vt.z)),g.push(G)}},st=new F(3.9,0,-.75),pt=new F(3.9,0,-2.9),Nt=new F(6.6,0,-2.9),ie=new F(6.6,0,-.75);X(st,pt),X(pt,Nt),X(Nt,ie),g.push(ue(re(new rn(1,.18,.35),"#7A4E25"),5.25,.09,-2.55)),g.push(ue(re(new rn(.9,.06,.28),"#D8C26A"),5.25,.2,-2.55)),g.push(ue(re(new rn(1.75,.46,.06),"#7A4A22"),j,2.66,_t+1.25));for(let it=0;it<9;it++){let vt=it/9*Ve;g.push(ue(re(new Bs(.11,0),(v,N,H)=>vn(v,"#7D776C","#B5AFA2",H*4+.5)),Rt.x+Math.cos(vt)*.42,.06,Rt.z+Math.sin(vt)*.42,it,it*2,0,1,.7,1))}for(let it=0;it<3;it++){let vt=it/3*Math.PI;g.push(ue(re(new Ce(.05,.05,.62,6),(v,N,H)=>v.set(Math.abs(H)>.27?"#C9A36B":"#4A2E18")),Rt.x,.1,Rt.z,0,vt,Math.PI/2-.25))}g.push(ue(re(new Ce(.22,.25,.12,9),"#9A948A"),Rt.x-.75,.06,Rt.z+.35));for(let[it,vt]of[[-.55,.75],[-.35,.82]])g.push(ue(re(new Jn([new tt(.001,0),new tt(.022,0),new tt(.03,.045),new tt(.026,.046)],10),"#F4EFE6"),Rt.x+it,.12,Rt.z+vt));let Bt=new ft(mi(g),new je({vertexColors:!0,side:Ge}));Bt.castShadow=!0,Bt.receiveShadow=!0,a.add(Bt);let Xt=Js(512,128,(it,vt,v)=>{it.fillStyle="#8B5A2B",it.fillRect(0,0,vt,v),it.strokeStyle="#E8C170",it.lineWidth=6,it.strokeRect(8,8,vt-16,v-16),it.fillStyle="#FFF3D6",it.font='900 64px -apple-system, "SF Arabic", "Geeza Pro", system-ui, sans-serif',it.textAlign="center",it.textBaseline="middle";try{it.direction="rtl"}catch{}it.fillText(t.sign||"\u062E\u064A\u0645\u0629 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",vt/2,v/2+4)}),_e=new ft(new Bn(1.62,.38),new je({map:Xt,emissive:"#3B2410",emissiveIntensity:.25}));_e.position.set(j,2.66,_t+1.29),a.add(_e);let ae=Js(256,160,(it,vt,v)=>{it.fillStyle="#8E1B26",it.fillRect(0,0,vt,v),it.fillStyle="#1F2F5C",it.fillRect(10,10,vt-20,v-20),it.fillStyle="#8E1B26",it.fillRect(20,20,vt-40,v-40),it.strokeStyle="#E8C170",it.lineWidth=3,it.strokeRect(16,16,vt-32,v-32),it.fillStyle="#E8C170";for(let H=0;H<14;H++)it.beginPath(),it.arc(24+H*16.3,14,3,0,Ve),it.arc(24+H*16.3,v-14,3,0,Ve),it.fill();let N=(H,G,Y,yt)=>{it.fillStyle=yt,it.beginPath(),it.moveTo(H,G-Y),it.lineTo(H+Y*1.5,G),it.lineTo(H,G+Y),it.lineTo(H-Y*1.5,G),it.closePath(),it.fill()};N(vt/2,v/2,44,"#1F2F5C"),N(vt/2,v/2,30,"#E8C170"),N(vt/2,v/2,16,"#8E1B26"),N(vt/2,v/2,6,"#F4EFE6");for(let[H,G]of[[50,45],[vt-50,45],[50,v-45],[vt-50,v-45]])N(H,G,12,"#2E86AB");it.fillStyle="#F4EFE6";for(let H=4;H<v;H+=8)it.fillRect(0,H,4,3),it.fillRect(vt-4,H,4,3)}),Ut=new ft(new Bn(2,1.25),new je({map:ae}));Ut.rotation.x=-Math.PI/2,Ut.rotation.z=.04,Ut.position.set(j-.2,.02,_t+1.9),Ut.receiveShadow=!0,a.add(Ut);let It=new Ee,Ot=new ft(new Ce(.07,.07,.16,8),new sn({color:"#FFD36B"})),qt=new ft(new Yn(.1,.08,8),new je({color:"#3B2A1A"}));qt.position.y=.12;let $t=new ft(new Ce(.085,.07,.03,8),new je({color:"#3B2A1A"}));$t.position.y=-.09;let xe=new ji(new Ui({map:Ft,color:"#FFC14D",transparent:!0,opacity:.75,depthWrite:!1,blending:ui}));xe.scale.setScalar(.9),It.add(Ot,qt,$t,xe),It.position.set(j+1.68,1.72,_t+2.55),a.add(It),Tt.lantern=It;let We=it=>new sn({color:it,transparent:!0,opacity:.9,depthWrite:!1,blending:ui});[["#FF5A1F",.2,.55,0],["#FF9A2E",.15,.45,.07],["#FFE07A",.09,.3,-.05]].forEach(([it,vt,v,N],H)=>{let G=new ft(new Yn(vt,v,10,1,!0),We(it));G.position.set(Rt.x+N,.12+v/2,Rt.z-N),G.userData={h0:v,i:H},a.add(G),Tt.flames.push(G)});let Te=new ji(new Ui({map:Ft,color:"#FF8A2E",transparent:!0,opacity:.6,depthWrite:!1,blending:ui}));Te.position.set(Rt.x,.45,Rt.z),Te.scale.setScalar(1.8),a.add(Te),Tt.glows.push(Te);let Be=new Ti({color:"#C9A13B",specular:"#FFE9A8",shininess:90}),Ue=new Ee,Je=new ft(new Jn([new tt(.001,0),new tt(.1,0),new tt(.115,.02),new tt(.1,.09),new tt(.06,.14),new tt(.045,.2),new tt(.06,.24),new tt(.075,.26),new tt(.04,.3),new tt(.012,.34),new tt(.02,.36),new tt(.001,.37)],20),Be),he=new ft(new zi(new ci([new F(.07,.07,0),new F(.14,.14,0),new F(.17,.25,0),new F(.23,.3,0)]),10,.016,6),Be),Zt=new ft(new hi(.07,.01,6,14,Math.PI*1.2),Be);Zt.position.set(-.07,.15,0),Zt.rotation.z=Math.PI*.4,Ue.add(Je,he,Zt),Ue.position.set(Rt.x-.75,.12,Rt.z+.35),Ue.rotation.y=-.6,Ue.traverse(it=>{it.castShadow=!0}),a.add(Ue)}let gt=(g,w={})=>new Ti({color:g,shininess:30,specular:"#2A2A2A",...w}),Ne=g=>g.traverse(w=>{w.isMesh&&(w.castShadow=!0)}),zt=null;function fe(g){let w=new Ee,C=new Ee;w.add(C),C.position.y=.55;let L=g.body==="fire",D=g.body==="rainbow",O;D?O=gt("#FFFFFF",{vertexColors:!0,shininess:50}):L?O=gt("#FF8A1F",{emissive:"#FF3D00",emissiveIntensity:.55,shininess:20}):O=gt(g.body,{shininess:38});let Q=new Se(.5,48,32);D&&(Q=re(Q,(he,Zt,it,vt)=>he.setHSL(((Math.atan2(vt,Zt)/Ve+1)%1+it*.3)%1,.75,.62)));let z=new ft(Q,O);z.scale.set(1.05,1,.95);let nt=new ft(new Se(.5,32,20),new sn({color:g.dark,side:un}));nt.scale.set(1.05*1.035,1.035,.95*1.035);let W=new ft(new Se(.3,32,16),gt(L||D?g.belly:new Qt(g.body).lerp(new Qt(g.belly),.5),{shininess:20}));W.position.set(0,-.25,.345),W.scale.set(.78,.5,.32),C.add(z,nt,W);let X=[];for(let he of[-1,1]){let Zt=new ft(new Se(.15,20,12),gt(g.dark,{shininess:20}));Zt.scale.set(1.2,.55,1.45),Zt.position.set(he*.22,-.49,.07),C.add(Zt),X.push(Zt)}let st=[],pt=[],Nt=gt("#FFFFFF",{shininess:90,specular:"#FFFFFF"}),ie=gt("#1B1F3B",{shininess:120,specular:"#FFFFFF"}),Bt=new sn({color:g.dark});for(let he of[-1,1]){let Zt=new Ee;Zt.position.set(he*.185,.15,.36);let it=new ft(new Se(.162,24,16),Bt);it.scale.set(1,1.15,.6),it.position.z=-.012;let vt=new ft(new Se(.15,24,16),Nt);vt.scale.set(1,1.15,.72);let v=new Ee;v.position.z=.074;let N=new ft(new Se(.07,16,12),ie);N.scale.z=.6;let H=new ft(new Se(.024,8,6),new sn({color:"#FFFFFF"}));H.position.set(.028,.035,.04),v.add(N,H),Zt.add(it,vt,v),C.add(Zt),st.push(Zt),pt.push(v)}let Xt=new ft(new hi(.075,.017,6,16,Math.PI*.8),new sn({color:"#1B1F3B"}));Xt.rotation.z=Math.PI+Math.PI*.1,Xt.position.set(0,0,.462),Xt.rotation.x=-.2;let _e=new ft(new Se(.05,12,10),new sn({color:"#7A1F2B"}));_e.scale.set(1,1.25,.4),_e.position.set(0,-.04,.47),_e.visible=!1,C.add(Xt,_e);let ae=new Ee;C.add(ae);let Ut=[];if(g.acc==="blush"||g.id==="orange")for(let he of[-1,1]){let Zt=new ft(new Ei(.07,16),new sn({color:"#FF7896",transparent:!0,opacity:.5}));Zt.position.set(he*.33,-.06,.36),Zt.rotation.y=he*.75,Zt.scale.y=.62,ae.add(Zt)}if(g.acc==="leaf"){let he=new ft(new Ce(.018,.022,.14,6),gt("#6B3E1F"));he.position.set(0,.54,0),he.rotation.z=-.15;let Zt=new ft(new Se(.15,16,8),gt("#3FB950"));Zt.scale.set(1,.18,.5),Zt.position.set(.13,.6,0),Zt.rotation.z=.45,ae.add(he,Zt)}else if(g.acc==="antenna")for(let he of[-1,1]){let Zt=new ft(new Ce(.014,.014,.32,6),gt(g.dark));Zt.position.set(he*.18,.58,0),Zt.rotation.z=-he*.35;let it=new ft(new Se(.06,12,10),gt("#FF5DA2",{emissive:"#FF5DA2",emissiveIntensity:.3}));it.position.set(he*.235,.73,0),ae.add(Zt,it)}else if(g.acc==="crown"){let he=gt("#FFC400",{shininess:110,specular:"#FFF2B0",emissive:"#5A3D00",emissiveIntensity:.3}),Zt=new ft(new Ce(.25,.23,.12,28,1,!0),he);Zt.material.side=Ge,Zt.position.y=.48,ae.add(Zt);for(let it=0;it<6;it++){let vt=it/6*Ve,v=new ft(new Yn(.05,.16,6),he);v.position.set(Math.sin(vt)*.24,.6,Math.cos(vt)*.24),ae.add(v);let N=new ft(new Se(.028,8,6),gt(it%2?"#2EA8FF":"#E63946",{shininess:140,specular:"#FFFFFF"}));N.position.set(Math.sin(vt)*.255,.48,Math.cos(vt)*.255),ae.add(N)}}else if(g.acc==="star"){let he=new Zn;for(let it=0;it<10;it++){let vt=it/10*Ve-Math.PI/2,v=it%2?.06:.14;it?he.lineTo(Math.cos(vt)*v,-Math.sin(vt)*v):he.moveTo(Math.cos(vt)*v,-Math.sin(vt)*v)}let Zt=new ft(new kr(he,{depth:.04,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:1}),gt("#FFE066",{emissive:"#FFB703",emissiveIntensity:.5,shininess:90}));Zt.position.set(0,.74,-.02),ae.add(Zt),ae.userData.star=Zt}else if(g.acc==="band"){let he=gt("#E63946"),Zt=new ft(new hi(.43,.05,8,40),he);Zt.rotation.x=Math.PI/2-.08,Zt.position.y=.2,Zt.scale.set(1.05,.95,1),ae.add(Zt);for(let it of[-1,1]){let vt=new ft(new rn(.06,.03,.3),he);vt.position.set(it*.06,.18,-.55),vt.rotation.set(.5,it*.3,0),ae.add(vt),ae.userData["tail"+it]=vt}}else if(g.acc==="hat"){let he=gt("#946232",{shininess:14}),Zt=gt("#4A2E14",{shininess:12}),it=new ft(new Ce(.46,.48,.035,36),he);it.position.y=.4;let vt=new ft(new Se(.29,28,14,0,Ve,0,Math.PI/2),he);vt.position.y=.41,vt.scale.y=.75;let v=new ft(new Ce(.292,.295,.06,28,1,!0),Zt);v.material.side=Ge,v.position.y=.45;let N=new Ee;N.add(it,vt,v),N.rotation.set(-.12,0,.06),ae.add(N);let H=gt("#E63946",{shininess:15,side:Ge}),G=new ft(new hi(.34,.04,8,36),H);G.rotation.x=Math.PI/2,G.position.y=-.4,G.scale.set(1.05,.95,1),ae.add(G);let Y=new Zn;Y.moveTo(-.2,0),Y.lineTo(.2,0),Y.lineTo(.02,-.17),Y.closePath();let yt=new ft(new Bi(Y),H);yt.position.set(0,-.38,.33),yt.rotation.x=-.55,ae.add(yt)}if(L){for(let Zt=0;Zt<7;Zt++){let it=Zt/7*Math.PI-Math.PI/2,vt=new ft(new Yn(.09,.4,8,1,!0),new sn({color:Zt%2?"#FFB13B":"#FF5A1F",transparent:!0,opacity:.9,depthWrite:!1,blending:ui}));vt.position.set(Math.sin(it)*.28,.42+Math.cos(it)*.05,-.12-Math.abs(Math.cos(it))*.08),vt.userData.ph=Zt,C.add(vt),Ut.push(vt)}let he=new ji(new Ui({map:Ft,color:"#FF6A1F",transparent:!0,opacity:.55,depthWrite:!1,blending:ui}));he.scale.setScalar(2.2),C.add(he)}Ne(w),nt.castShadow=!1;let It=new Ee,Ot=["#E63946","#FFFFFF","#FFB703","#FFFFFF","#2EA8FF","#FFFFFF"],qt=re(new Se(1.7,24,8,0,Ve,0,Math.PI*.42),(he,Zt,it,vt)=>he.set(Ot[Math.floor((Math.atan2(vt,Zt)/Ve+1)%1*12+1e-4)%6])),$t=new je({vertexColors:!0,side:Ge,transparent:!0,opacity:1}),xe=new ft(qt,$t);xe.scale.set(1,.62,1),xe.castShadow=!0;let We=new Float32Array(60),Te=new Ar(new Le,new Us({color:"#4A4A5A",transparent:!0,opacity:.85}));Te.geometry.setAttribute("position",new ke(We,3)),Te.frustumCulled=!1;let Be=new Ee;Be.position.y=1.6,Be.add(xe),It.add(Be,Te),It.visible=!1;let Ue=new ft(qt,$t.clone());Ue.visible=!1,Ue.castShadow=!1,a.add(It,Ue);let Je=new ft(new Le,gt("#8B5A2B",{shininess:5}));return Je.visible=!1,Je.castShadow=!0,a.add(Je),a.add(w),{id:g.id,root:w,inner:C,eyes:st,pupils:pt,smile:Xt,ooh:_e,feet:X,acc:ae,flames:Ut,bodyMat:O,fire:L,chute:It,canopy:xe,canopyHolder:Be,lines:Te,drop:Ue,rope:Je,turn:0,blink:0,nextBlink:2}}function be(){if(zt){for(let g of[zt.root,zt.chute,zt.drop,zt.rope])a.remove(g),g.traverse(w=>{w.geometry&&w.geometry.dispose(),w.material&&[].concat(w.material).forEach(C=>C.dispose())});zt=null}}let lt=(()=>{let g=new Ee,w=new Ee;g.add(w);let C=gt("#D9A066",{shininess:18}),L=gt("#ECCB9C",{shininess:18}),D=gt("#3B2A1A",{shininess:40}),O=[[-.56,0],[-.54,.1],[-.48,.17],[-.36,.2],[-.18,.18],[0,.185],[.18,.21],[.32,.215],[.44,.18],[.53,.11],[.57,0]],Q=new Jn(O.map(([Ut,It])=>new tt(It,Ut)),36);{let Ut=Q.attributes.position;for(let It=0;It<Ut.count;It++){let Ot=Ut.getX(It),qt=Ut.getY(It),$t=Ut.getZ(It),xe=Math.exp(-(((qt+.1)/.22)**2));Ot<0&&(Ot*=1-xe*.28),Ut.setXYZ(It,qt,-Ot*(Ot<0?.95:1.05),$t*.82)}Q.computeVertexNormals()}Q=re(Q,(Ut,It,Ot)=>{let qt=Ot/.21;qt<-.45?Ut.set("#FFF6E8"):qt<-.15?vn(Ut,"#6A3F1F","#8A5528",(qt+.45)/.3):vn(Ut,"#D9A066","#C58A50",(qt-.3)*1.5),It<-.46&&qt<.55&&Ut.set("#FFF6E8")});let z=new ft(Q,gt("#FFFFFF",{vertexColors:!0,shininess:22}));z.position.y=.8,w.add(z);let nt=new Ee;nt.position.set(-.56,.86,0);let W=new ft(new Ai(.025,.1,3,6),gt("#2B1D12"));W.position.y=-.06,nt.add(W),nt.rotation.z=.5,w.add(nt);let X=new Ee;X.position.set(.42,.88,0),w.add(X);let st=new ft(new Ce(.055,.1,.5,14),C);st.position.y=.23,st.scale.z=.85,X.add(st);let pt=new ft(new Ce(.036,.06,.42,10),gt("#FFF6E8"));pt.position.set(.04,.21,0),pt.rotation.z=-.08,X.add(pt),X.rotation.z=-.6;let Nt=new Ee;Nt.position.set(0,.49,0),Nt.scale.setScalar(1.12),X.add(Nt);let ie=new ft(new Se(.11,24,16),C);ie.scale.set(1.35,.9,.82),Nt.add(ie);let Bt=new ft(new Se(.075,18,12),L);Bt.position.set(.14,-.045,0),Bt.scale.set(1.25,.8,.85),Nt.add(Bt);let Xt=new ft(new Se(.03,10,8),D);Xt.position.set(.225,-.035,0),Nt.add(Xt);for(let Ut of[-1,1]){let It=new ft(new Se(1,10,6),gt("#5A3518"));It.scale.set(.1,.012,.01),It.position.set(.1,-.012,Ut*.07),It.rotation.z=-.28,Nt.add(It);let Ot=new ft(new Se(1,10,6),gt("#FFF6E8"));Ot.scale.set(.095,.012,.01),Ot.position.set(.085,.022,Ut*.074),Ot.rotation.z=-.22,Nt.add(Ot);let qt=new ft(new Se(.026,12,10),gt("#120C08",{shininess:160,specular:"#FFFFFF"}));qt.position.set(.035,.035,Ut*.083),Nt.add(qt);let $t=new ft(new Se(.07,12,8),C);$t.scale.set(.45,1.25,.25),$t.position.set(-.08,.1,Ut*.08),$t.rotation.set(Ut*.6,0,.6),Nt.add($t);let xe=new ci([new F(-.02,.07,Ut*.035),new F(-.09,.22,Ut*.07),new F(-.07,.38,Ut*.085),new F(0,.47,Ut*.06)]),We=new zi(xe,18,.019,7);{let Be=We.attributes.position,Ue=8;for(let Je=0;Je<=18;Je++){let he=xe.getPointAt(Je/18),Zt=1-Je/18*.7;for(let it=0;it<Ue;it++){let vt=Je*Ue+it;Be.setXYZ(vt,he.x+(Be.getX(vt)-he.x)*Zt,he.y+(Be.getY(vt)-he.y)*Zt,he.z+(Be.getZ(vt)-he.z)*Zt)}}We.computeVertexNormals()}let Te=re(We,(Be,Ue,Je)=>Be.set(Math.floor(Je*55)%2?"#3B2A1A":"#5A4330"));Nt.add(new ft(Te,gt("#FFFFFF",{vertexColors:!0,shininess:50})))}let _e=new Qe;_e.position.set(0,.38,0),X.add(_e);let ae=[];for(let[Ut,It]of[[.34,1],[-.38,0]])for(let Ot of[-1,1]){let qt=new Ee;if(qt.position.set(Ut,.76,Ot*.09),w.add(qt),It){let Ue=new ft(new Se(.075,12,10),C);Ue.scale.set(1.1,1.7,.6),Ue.position.set(.01,-.05,0),qt.add(Ue)}else{let Ue=new ft(new Se(.1,14,10),C);Ue.scale.set(1.15,1.6,.55),Ue.position.set(0,-.07,0),qt.add(Ue)}let $t=new ft(new Ce(It?.026:.03,It?.04:.055,.36,10),C);$t.position.y=-.2,qt.add($t);let xe=new Ee;xe.position.y=-.38,qt.add(xe);let We=new ft(new Se(.024,8,6),L);xe.add(We);let Te=new ft(new Ce(.014,.02,.34,8),L);Te.position.y=-.17,xe.add(Te);let Be=new ft(new Ce(.017,.024,.045,8),gt("#20150D",{shininess:60}));Be.position.y=-.355,xe.add(Be),ae.push({hip:qt,knee:xe,front:It,s:Ot})}return Ne(g),a.add(g),{root:g,body:w,neck:X,head:Nt,tail:nt,legs:ae,collar:_e,yaw:-.25,z:0,neckA:-.6}})(),Mt=(()=>{let g=new Ee,w=gt("#C98E62",{shininess:12}),C=gt("#F2EEE4",{shininess:8}),L=gt("#5B3A24",{shininess:14,side:Ge}),D=new ft(new Jn([new tt(.001,0),new tt(.27,0),new tt(.275,.1),new tt(.25,.5),new tt(.232,.9),new tt(.222,1.2),new tt(.2,1.34),new tt(.12,1.42),new tt(.05,1.45)],30),C);g.add(D);for(let It of[-1,1]){let Ot=new ft(new rn(.1,.04,.2),gt("#4A2E18"));Ot.position.set(It*.09,.02,.2),g.add(Ot)}let O=new ft(new Jn([new tt(.245,.06),new tt(.295,.08),new tt(.285,.5),new tt(.265,.9),new tt(.255,1.2),new tt(.24,1.33),new tt(.16,1.41)],30,.62,Ve-1.24),L);g.add(O);let Q=gt("#D4AF37",{shininess:90,specular:"#FFF2B0"});for(let It of[-1,1]){let Ot=It*.62,qt=[[.247,.08],[.297,.1],[.287,.5],[.267,.9],[.257,1.2],[.242,1.33],[.162,1.41]].map(([$t,xe])=>new F(Math.sin(Ot)*($t+.006),xe,Math.cos(Ot)*($t+.006)));g.add(new ft(new zi(new ci(qt),20,.014,6),Q))}let z=[];for(let It of[-1,1]){let Ot=new Ee;Ot.position.set(It*.25,1.3,0),g.add(Ot);let qt=new ft(new Ai(.072,.28,4,10),L);qt.position.y=-.18,Ot.add(qt);let $t=new Ee;$t.position.y=-.36,Ot.add($t);let xe=new ft(new Ai(.068,.22,4,10),L);xe.position.y=-.14,$t.add(xe);let We=new ft(new Ce(.055,.06,.05,10),C);We.position.y=-.3,$t.add(We);let Te=new ft(new Se(.052,12,10),w);if(Te.position.y=-.36,Te.scale.set(.9,1.1,.8),$t.add(Te),It<0){let Be=new ft(new hi(.06,.011,6,18),gt("#E0A03C",{shininess:80,specular:"#FFF0C8"}));Be.position.set(0,-.44,.02),Be.rotation.y=.4,$t.add(Be)}Ot.rotation.z=It*.12,$t.rotation.x=-.25,z.push({sh:Ot,el:$t,s:It})}let nt=new ft(new Ce(.06,.07,.1,10),w);nt.position.y=1.46,g.add(nt);let W=new Ee;W.position.y=1.6,g.add(W);let X=new ft(new Se(.155,28,20),w);X.scale.set(.94,1.08,1),W.add(X);let st=new ft(new Se(.034,10,8),gt("#B97C52"));st.position.set(0,-.005,.15),st.scale.set(.85,1.1,1.25),W.add(st);for(let It of[-1,1]){let Ot=new ft(new Se(.019,10,8),gt("#1B140F",{shininess:120,specular:"#FFFFFF"}));Ot.position.set(It*.055,.025,.135),W.add(Ot);let qt=new ft(new rn(.065,.016,.02),gt("#3A3430"));qt.position.set(It*.056,.058,.138),qt.rotation.z=-It*.12,W.add(qt);let $t=new ft(new Ai(.019,.06,3,6),gt("#2A2420"));$t.position.set(It*.034,-.045,.142),$t.rotation.z=It*1.15,W.add($t)}let pt=new ft(new Se(.16,24,10,Math.PI/2-1.2,2.4,Math.PI*.6,Math.PI*.3),gt("#4A4440",{side:Ge,shininess:5}));W.add(pt);let Nt=new ft(new Se(.026,10,8),new sn({color:"#4A1A14"}));Nt.position.set(0,-.07,.143),Nt.scale.set(1,.3,.5),W.add(Nt);let ie=Js(128,128,(It,Ot,qt)=>{It.fillStyle="#FBF8F2",It.fillRect(0,0,Ot,qt),It.fillStyle="#C8102E";for(let $t=0;$t<qt;$t+=16)for(let xe=0;xe<Ot;xe+=16)It.fillRect(xe+2,$t+2,7,7),It.fillRect(xe+9,$t+9,5,5),It.fillRect(xe+9,$t+2,2,2),It.fillRect(xe+2,$t+11,2,2)},[5,5]),Bt=new je({map:ie,side:Ge}),Xt=new ft(new Se(.168,28,14,0,Ve,0,Math.PI*.52),Bt);Xt.rotation.x=-.42,Xt.position.y=.01,W.add(Xt);let _e=new ft(new Jn([new tt(.168,.02),new tt(.18,-.06),new tt(.2,-.16),new tt(.24,-.26),new tt(.28,-.33)],28,1.15,Ve-2.3),Bt);W.add(_e);let ae=new ft(new Bn(.2,.36),Bt);ae.position.set(.17,-.25,.1),ae.rotation.set(-.15,.6,-.08),W.add(ae);let Ut=gt("#141414",{shininess:40});for(let[It,Ot]of[[.07,.154],[.097,.139]]){let qt=new ft(new hi(Ot,.015,8,36),Ut);qt.position.set(0,It*.913,-It*.408),qt.rotation.x=Math.PI/2-.42,W.add(qt)}return Ne(g),g.position.set(Jt,0,-.5),a.add(g),{root:g,head:W,arms:z,mouth:Nt,yaw:0}})(),xt=new Ns(new Ce(.22,.22,.05,22),new Ti({color:"#FFC93C",specular:"#FFF4C0",shininess:90,emissive:"#6B4A00",emissiveIntensity:.55}),40);xt.castShadow=!0,xt.count=0,xt.frustumCulled=!1,a.add(xt);let Pt=new Ee;{let g=new ft(new Gr(.95,1.18,48),new sn({color:"#FFD23F",transparent:!0,opacity:.9,depthWrite:!1,side:Ge}));g.rotation.x=-Math.PI/2,g.position.y=.03;let w=new ft(new Ei(.95,40),new sn({color:"#FFE38A",transparent:!0,opacity:.25,depthWrite:!1}));w.rotation.x=-Math.PI/2,w.position.y=.025;let C=new ft(new Yn(.2,.42,4),new Ti({color:"#FFB703",emissive:"#FF8A00",emissiveIntensity:.6,shininess:80}));C.rotation.x=Math.PI,C.position.y=1.9,Pt.add(g,w,C),Pt.userData={ring:g,arrow:C},Pt.position.set(s*dn,0,0),Pt.visible=!1,a.add(Pt)}let dt={pos:new F,look:new F,init:!1,dist:10,cx:0};function oe(g,w){if(g.debugCam){w.pos.fromArray(g.debugCam[0]),w.look.fromArray(g.debugCam[1]);return}let C=g.p,L=C.x*dn,D=C.y*dn,O=l.aspect,Q=Math.tan(l.fov*Math.PI/360);if(g.phase!=="walk"){let ae=D;w.pos.set(L-1.4,D-.4,14),w.look.set(L,D-.55,0);return}let z=L,nt=L,W=ae=>{z=Math.min(z,ae),nt=Math.max(nt,ae)};if(g.focus&&g.focus.t>0){for(let $t of g.focus.xs)W($t*dn);let ae=(nt-z)/2+1,Ut=ti(ae/(Q*O),5.6,14),It=(z+nt)/2,Ot=.75+Ut*.09,qt=Math.atan(Ot/Ut)-Math.atan(.16*2*Q);w.pos.set(It+.6,Ot,Ut),w.look.set(It,Ot-Ut*Math.tan(qt),-.3);return}let X=g.gz.x*dn;(g.caught||Math.abs(g.gz.x-C.x)<320)&&W(X),(Math.abs(C.x-n)<560||g.delivered||g.caught&&Math.abs(C.x-s)<700)&&(W(j-1.4),W(Jt+.4),g.caught&&!g.delivered&&W(s*dn+.6));let st=(nt-z)/2+1.35,pt=ti(st/(Q*O),7.2,26),Nt=pt*Q*O,ie=ti((z+nt)/2,L-Nt+1.1,L+Nt-1.1),Bt=.95+pt*.105,Xt=Zs(.665,.735,ti((pt-7.2)/18,0,1)),_e=Math.atan(Bt/pt)-Math.atan((Xt-.5)*2*Q);w.pos.set(ie,Bt,pt),w.look.set(ie,Bt-pt*Math.tan(_e),0)}let kt={pos:new F,look:new F},de=0,pe=-1,ye=0,B=0,He=2,me=390,Fe=844,St=new F,Ze=new F,Yt=new Qe;Yt.rotation.order="YXZ";function te(g,w,C){me=g,Fe=w,He=C,r.setPixelRatio(C),r.setSize(g,w,!1),l.aspect=g/w,l.updateProjectionMatrix()}function I(g){(!zt||zt.id!==g.id)&&(be(),zt=fe(g)),dt.init=!1,ye=0,B=0,pe=-1}function S(g,w,C){let L=g.p,D=zt,O=g.phase==="walk",Q=O?Math.abs(Math.sin(L.hopPh))*(Math.abs(L.vx)>160?.25:.12):0;D.root.position.set(L.x*dn,L.y*dn+Q,0);let z=(L.face||1)*(O?.62:.35);D.turn=Ye(D.turn,z,9,C),D.root.rotation.y=D.turn,D.inner.rotation.z=-L.rot;let nt=L.landT>0?L.landT*2.4:0;O&&Math.abs(L.vx)>10&&(nt+=(1-Math.abs(Math.sin(L.hopPh)))*.25-.08),D.inner.scale.set(1+.2*nt,1-.22*nt,1+.2*nt),D.inner.position.y=.55*(1-.22*nt);for(let[Bt,Xt]of D.feet.entries())Xt.position.y=-.49+(O&&Math.abs(L.vx)>10?Math.max(0,Math.sin(L.hopPh*2+Bt*Math.PI))*.06:0);let W=g.phase==="fall";D.nextBlink-=C,D.nextBlink<0&&(D.blink=.14,D.nextBlink=2.5+Math.random()*2.5),D.blink=Math.max(0,D.blink-C);let X=W?1.15:D.blink>0?.12:1;for(let Bt of D.eyes)Bt.scale.set(W?1.08:1,X,1);let st=O?.03*(L.face||1):0,pt=O?0:-.035;for(let Bt of D.pupils)Bt.scale.setScalar(W?.72:1),Bt.position.x=st,Bt.position.y=pt;D.smile.visible=!W,D.ooh.visible=W,D.acc.userData.star&&(D.acc.userData.star.rotation.y=w*2);for(let Bt of[-1,1]){let Xt=D.acc.userData["tail"+Bt];Xt&&(Xt.rotation.x=.5+Math.sin(w*12+Bt)*.25)}if(D.fire){D.bodyMat.emissiveIntensity=.5+Math.sin(w*13)*.1+Math.sin(w*7.3)*.08;for(let Bt of D.flames){let Xt=.8+Math.sin(w*14+Bt.userData.ph*1.7)*.25;Bt.scale.set(1,Xt,1)}}let Nt=D.chute;if(Nt.visible=L.chute>.01,Nt.visible){Nt.position.copy(D.root.position);let Bt=L.chute,Xt=Bt<1?Zs(.15,1,Bt)+Math.sin(Bt*Math.PI)*.12:1;D.canopyHolder.scale.set(Xt,Zs(.4,1,Bt),Xt),D.canopyHolder.position.y=Zs(1,2.25,Bt),Nt.rotation.z=-(L.vx*.0011+Math.sin(w*1.5)*.06),Nt.rotation.x=Math.sin(w*1.1)*.05;let _e=D.lines.geometry.attributes.position,ae=D.canopyHolder.position.y,Ut=1.7*Math.sin(Math.PI*.42)*Xt,It=ae+1.7*Math.cos(Math.PI*.42)*.62*Zs(.4,1,Bt);for(let Ot=0;Ot<10;Ot++){let qt=Ot/10*Ve,$t=Ot%2?.22:-.22;_e.setXYZ(Ot*2,Math.cos(qt)*Ut,It,Math.sin(qt)*Ut),_e.setXYZ(Ot*2+1,$t,.85,0)}_e.needsUpdate=!0}let ie=g.chuteDrop;if(D.drop.visible=!!(ie&&ie.t<2.4),D.drop.visible){let Bt=ti(1-ie.t*1.2,.1,1);D.drop.position.set((ie.x+ie.face*40)*dn,.02,-.3),D.drop.scale.set(1.05,.62*Bt,1.05),D.drop.material.opacity=ti(1-(ie.t-1.4),0,1)}}function J(g,w,C){let L=g.gz,D=lt,O=L.state,Q=Math.abs(L.vx)>5,z=O==="pen"?-1.75:0;D.z=Ye(D.z,z,2,C);let nt=O==="flee"||O==="leap",W=O==="tired",X=Q?Math.abs(Math.sin(L.ph))*(nt?.07:.025):W?Math.sin(w*9)*.008:0;D.root.position.set(L.x*dn,L.y*dn,D.z),D.body.position.y=X;let st=(L.face||1)>0?-.28:-Math.PI+.28;D.yaw=Ye(D.yaw,st,nt?10:6,C),D.root.rotation.y=D.yaw,D.body.rotation.z=nt?Math.sin(L.ph*2)*.05:0;let pt=O==="graze"||O==="pen"&&!Q,Nt=pt?-2.05:W?-1.15:nt?-.95:O==="alert"||O==="look"||O==="cornered"?-.32:-.6;D.neckA=Ye(D.neckA,Nt,pt?3:7,C),D.neck.rotation.z=D.neckA,D.head.rotation.z=pt?.5+Math.sin(w*7)*.08:O==="alert"||O==="look"?.2:.35,D.head.rotation.y=O==="look"||O==="alert"||O==="cornered"?Math.sin(w*1.6)*.25+.35:0,D.tail.rotation.z=.5+(O==="alert"||nt?.9:Math.sin(w*3)*.2);let ie=nt?.6:W?.28:.36,Bt=O==="leap";for(let Xt of D.legs){let _e=Xt.front?Xt.s>0?0:Math.PI:(Xt.s>0?Math.PI:0)+(nt?.6:0);if(Bt){Xt.hip.rotation.z=Xt.front?.9:-.9,Xt.knee.rotation.z=Xt.front?-1.2:1.1;continue}if(Q){let ae=Math.sin(L.ph+_e);Xt.hip.rotation.z=ae*ie,Xt.knee.rotation.z=(Xt.front?-1:1)*Math.max(0,-Math.cos(L.ph+_e))*ie*1.1}else Xt.hip.rotation.z=Ye(Xt.hip.rotation.z,0,8,C),Xt.knee.rotation.z=Ye(Xt.knee.rotation.z,0,8,C)}}function mt(g,w,C){let L=Mt,D=g.p,O=D.x*dn,Q=O-L.root.position.x,z=Math.abs(g.p.x*dn-Jt)<14||!!g.dlg,nt=z?ti(Math.atan2(Q,2.2),-1.1,1.1):.15*Math.sin(w*.3);L.yaw=Ye(L.yaw,nt,3,C),L.root.rotation.y=L.yaw,L.root.scale.y=1+Math.sin(w*1.7)*.007;let W=!!(g.dlg&&g.dlg.shown<[...g.dlg.text].length);L.mouth.scale.y=W?.25+Math.abs(Math.sin(w*15))*.9:.3,L.head.rotation.x=W?Math.sin(w*5)*.05:0;let[X,st]=L.arms;if(g.delivered){for(let pt of L.arms)pt.sh.rotation.z=Ye(pt.sh.rotation.z,pt.s*2.5,6,C),pt.el.rotation.x=Ye(pt.el.rotation.x,-.3+Math.sin(w*9+pt.s)*.3,8,C);L.root.position.y=Math.abs(Math.sin(w*6))*.06}else if(g.caught&&z)st.sh.rotation.z=Ye(st.sh.rotation.z,1.35,5,C),st.el.rotation.x=Ye(st.el.rotation.x,0,5,C),st.sh.rotation.x=Ye(st.sh.rotation.x,-.2,5,C),X.sh.rotation.z=Ye(X.sh.rotation.z,-.12,5,C),L.root.position.y=0;else if(z)st.sh.rotation.z=Ye(st.sh.rotation.z,2.55,5,C),st.el.rotation.x=Ye(st.el.rotation.x,0,5,C),st.el.rotation.z=Math.sin(w*8)*.45,st.sh.rotation.x=0,X.sh.rotation.z=Ye(X.sh.rotation.z,-.12,5,C),L.root.position.y=0;else{for(let pt of L.arms)pt.sh.rotation.z=Ye(pt.sh.rotation.z,pt.s*.12,4,C),pt.el.rotation.z=Ye(pt.el.rotation.z,0,4,C),pt.el.rotation.x=Ye(pt.el.rotation.x,-.25,4,C),pt.sh.rotation.x=0;L.root.position.y=0}}function ct(g){let w=zt.rope;if(w.visible=!!g.caught&&!g.delivered,!w.visible)return;zt.root.updateMatrixWorld(),lt.root.updateMatrixWorld();let C=St.set(zt.root.position.x+Math.sign(zt.turn||1)*.36,zt.root.position.y+.5,.15),L=lt.collar.getWorldPosition(Ze),D=C.clone().lerp(L,.5);D.y=Math.min(C.y,L.y)-.25,w.geometry.dispose(),w.geometry=new zi(new ts(C.clone(),D,L.clone()),18,.016,5)}function bt(g,w,C={}){let L=performance.now(),D=de?ti((L-de)/1e3,0,.1):1/60;de=L;let O=pe>=0?ti(w-pe,0,.1):1/60;if(pe=w,c.time.value=w,B++,ye=ye*.97+(D>1/38?1:0)*.03,B>90&&ye>.6&&He>1.01&&(te(me,Fe,Math.max(1,He-.25)),ye=0,B=0),!zt)return;S(g,w,O),J(g,w,O),mt(g,w,O),ct(g);let Q=0;for(let X=0;X<g.coins.length&&Q<40;X++){let st=g.coins[X];st.taken||(Yt.position.set(st.x*dn,st.y*dn,0),Yt.rotation.set(Math.PI/2,w*3+X,0),Yt.scale.setScalar(1),Yt.updateMatrix(),xt.setMatrixAt(Q++,Yt.matrix))}if(xt.count=Q,xt.instanceMatrix.needsUpdate=!0,Pt.visible=!!(g.caught&&!g.delivered),Pt.visible){let X=.5+.5*Math.sin(w*5);Pt.userData.ring.scale.setScalar(1+X*.08),Pt.userData.arrow.position.y=1.9+X*.25,Pt.userData.arrow.rotation.y=w*2}for(let X of Tt.flames){let st=.75+Math.sin(w*13+X.userData.i*2)*.18+Math.sin(w*23+X.userData.i)*.08;X.scale.set(1+Math.sin(w*9+X.userData.i)*.08,st,1),X.position.y=.12+X.userData.h0*st/2}for(let X of Tt.glows)X.material.opacity=.5+Math.sin(w*11)*.08;Tt.lantern.rotation.z=Math.sin(w*1.6)*.08;for(let X of Et){let st=X.userData,pt=st.ax+Math.sin(w*.45+st.ph)*2.2,Nt=st.az+Math.sin(w*.7+st.ph*2)*.9,ie=.7+Math.sin(w*1.3+st.ph)*.35+Math.abs(Math.sin(w*4+st.ph))*.12;X.position.set(pt,ie,Nt),X.rotation.y=Math.cos(w*.45+st.ph)>0?-Math.PI/2:Math.PI/2;let Bt=Math.sin(w*22+st.ph)*1.1;st.l.rotation.y=Bt,st.r.rotation.y=-Bt}for(let X of ut){let st=X.userData;X.position.set((st.x0+w*st.sp)%220-60,st.y+Math.sin(w+st.ph)*.8,st.z);let pt=Math.sin(w*8+st.ph)*.6;st.l.rotation.z=pt,st.r.rotation.z=-pt}for(let X of et.children)X.position.x+=X.userData.v*O,X.position.x>150&&(X.position.x=-70);oe(g,kt),dt.init||(dt.pos.copy(kt.pos),dt.look.copy(kt.look),dt.init=!0);let z=g.phase!=="walk",nt=z?5:2.4;if(dt.pos.x=Ye(dt.pos.x,kt.pos.x,nt,O),dt.pos.y=Ye(dt.pos.y,kt.pos.y,z?8:nt,O),dt.pos.z=Ye(dt.pos.z,kt.pos.z,nt*.8,O),dt.look.x=Ye(dt.look.x,kt.look.x,nt,O),dt.look.y=Ye(dt.look.y,kt.look.y,z?8:nt,O),dt.look.z=Ye(dt.look.z,kt.look.z,nt,O),dt.pos.y<f(dt.pos.x,dt.pos.z)+.8&&(dt.pos.y=f(dt.pos.x,dt.pos.z)+.8),l.position.copy(dt.pos),l.lookAt(dt.look),C.shake>0){let X=C.shake*.25;l.position.x+=(Math.random()-.5)*X,l.position.y+=(Math.random()-.5)*X}_.position.copy(l.position);{let X=ne.userData.seeds,st=ne.geometry.attributes.position;for(let pt=0;pt<X.length;pt++){let[Nt,ie,Bt,Xt]=X[pt];st.setXYZ(pt,dt.look.x+Nt+Math.sin(w*.3+Xt)*.8,ie+Math.sin(w*.5+Xt*2)*.3,Bt+Math.cos(w*.25+Xt)*.6)}st.needsUpdate=!0}let W=Math.round(dt.look.x/.25)*.25;u.target.position.set(W,0,-1),u.position.set(W+d.x*60,d.y*60,-1+d.z*60),r.render(a,l)}let wt=new F;function at(g,w,C=0){return wt.set(g*dn,w*dn,C).project(l),{x:(wt.x+1)/2,y:(1-wt.y)/2,vis:wt.z<1}}function ot(){return lt.z}function At(g=160){a.updateMatrixWorld();let w=new F;Mt.head.getWorldPosition(w);let C=r.domElement.width,L=r.domElement.height,D=new _n(28,C/L,.05,1200);D.position.set(w.x+.35,w.y+.05,w.z+1.75),D.lookAt(w.x,w.y-.02,w.z),_.position.copy(D.position);let O=u.shadow.autoUpdate;u.target.position.set(w.x,0,w.z),u.position.set(w.x+d.x*60,d.y*60,w.z+d.z*60),r.render(a,D),u.shadow.autoUpdate=O;let Q=document.createElement("canvas");Q.width=Q.height=g;let z=Math.min(C,L);return Q.getContext("2d").drawImage(r.domElement,(C-z)/2,(L-z)/2,z,z,0,0,g,g),Q.toDataURL("image/jpeg",.9)}function Gt(){r.dispose()}return{setSize:te,enter:I,render:bt,project:at,gazelleZ:ot,portrait:At,dispose:Gt,renderer:r,scene:a,camera:l,get pr(){return He}}}return Md(S_);})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
