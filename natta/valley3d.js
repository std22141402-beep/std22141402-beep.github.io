/* نطّة — مشهد الوادي 3D. يتضمن three.js r187 (MIT, © 2010-2026 three.js authors) */
var NattaValley3D=(()=>{var El=Object.defineProperty;var gd=Object.getOwnPropertyDescriptor;var _d=Object.getOwnPropertyNames;var xd=Object.prototype.hasOwnProperty;var vd=(i,t)=>{for(var e in t)El(i,e,{get:t[e],enumerable:!0})},yd=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of _d(t))!xd.call(i,s)&&s!==e&&El(i,s,{get:()=>t[s],enumerable:!(n=gd(t,s))||n.enumerable});return i};var Md=i=>yd(El({},"__esModule",{value:!0}),i);var M_={};vd(M_,{create:()=>y_,supported:()=>v_});var Eo="188dev";var Gh=0,uc=1,Vh=2;var Ki=1,Hh=2,Us=3,Ni=0,ln=1,Xe=2,Qi=0,Os=1,si=2,dc=3,fc=4,Wh=5;var ji=100,Xh=101,qh=102,Yh=103,Zh=104,Jh=200,$h=201,Kh=202,Qh=203,pc=204,mc=205,jh=206,tu=207,eu=208,nu=209,iu=210,su=211,ru=212,au=213,ou=214,ka=0,Ga=1,Va=2,bs=3,Ha=4,Wa=5,Xa=6,qa=7,Gr=0,lu=1,cu=2,ri=0,gc=1,_c=2,xc=3,Vr=4,vc=5,yc=6,Mc=7;var Sc=300,ts=301,Bs=302,To=303,Co=304,ws=1e3,$n=1001,Ya=1002,on=1003,hu=1004;var Hr=1005;var _n=1006,Ro=1007;var Mi=1008;var vn=1009,bc=1010,wc=1011,zs=1012,Io=1013,Hn=1014,Ln=1015,Wn=1016,Po=1017,Lo=1018,es=1020,Ac=35902,Ec=35899,Tc=1021,Cc=1022,Xn=1023,gi=1026,Si=1027,Fo=1028,Do=1029,Ui=1030,No=1031;var Uo=1033,Wr=33776,Xr=33777,qr=33778,Yr=33779,Oo=35840,Bo=35841,zo=35842,ko=35843,Go=36196,Vo=37492,Ho=37496,Wo=37488,Xo=37489,Zr=37490,qo=37491,Yo=37808,Zo=37809,Jo=37810,$o=37811,Ko=37812,Qo=37813,jo=37814,tl=37815,el=37816,nl=37817,il=37818,sl=37819,rl=37820,al=37821,ol=36492,ll=36494,cl=36495,hl=36283,ul=36284,Jr=36285,dl=36286;var rr=2300,Za=2301,Ba=2302,tc=2303,ec=2400,nc=2401,ic=2402;var uu=3200;var $r=0,du=1,bi="",gn="srgb",ar="srgb-linear",or="linear",ze="srgb";var za=7680;var fu=519,pu=512,mu=513,gu=514,Rc=515,_u=516,xu=517,Ic=518,Pc=519,Lc=35044;var Fc="300 es",Tn=2e3,As=2001;function Sd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}var bd={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};typeof Float16Array<"u"&&(bd.Float16Array=Float16Array);function wd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vu(){let i=lr("canvas");return i.style.display="block",i}var eh={},Es=null;function cr(...i){let t="THREE."+i.shift();Es?Es("log",t,...i):console.log(t,...i)}function yu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ce(...i){i=yu(i);let t="THREE."+i.shift();if(Es)Es("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function fe(...i){i=yu(i);let t="THREE."+i.shift();if(Es)Es("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function nr(...i){let t=i.join(" ");t in eh||(eh[t]=!0,ce(...i))}function Mu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Su={[ka]:ka,[Va]:Xa,[Ha]:Ha,[bs]:Wa,[Ga]:Ga,[Xa]:Va,[qa]:qa,[Wa]:bs},Qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Tl=Math.PI/180,Ja=180/Math.PI;function Oi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function Ee(i,t,e){return Math.max(t,Math.min(e,i))}function Ad(i,t){return(i%t+t)%t}function Cl(i,t,e){return(1-e)*i+e*t}function bu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function wu(i,t){if(t.constructor===Float32Array)return i;let e=fl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Au(i,t){if(t.constructor===Float32Array)return i;let e=fl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var zc=class zc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zc.prototype.isVector2=!0;var nt=zc,Cn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],d=r[a+0],u=r[a+1],g=r[a+2],b=r[a+3];if(p!==b||l!==d||c!==u||h!==g){let m=l*d+c*u+h*g+p*b;m<0&&(d=-d,u=-u,g=-g,b=-b,m=-m);let f=1-o;if(m<.9995){let y=Math.acos(m),T=Math.sin(y);f=Math.sin(f*y)/T,o=Math.sin(o*y)/T,l=l*f+d*o,c=c*f+u*o,h=h*f+g*o,p=p*f+b*o}else{l=l*f+d*o,c=c*f+u*o,h=h*f+g*o,p=p*f+b*o;let y=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=y,c*=y,h*=y,p*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[a],d=r[a+1],u=r[a+2],g=r[a+3];return t[e]=o*g+h*p+l*u-c*d,t[e+1]=l*g+h*d+c*p-o*u,t[e+2]=c*g+h*u+o*d-l*p,t[e+3]=h*g-o*p-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),p=o(r/2),d=l(n/2),u=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*p+c*u*g,this._y=c*u*p-d*h*g,this._z=c*h*g+d*u*p,this._w=c*h*p-d*u*g;break;case"YXZ":this._x=d*h*p+c*u*g,this._y=c*u*p-d*h*g,this._z=c*h*g-d*u*p,this._w=c*h*p+d*u*g;break;case"ZXY":this._x=d*h*p-c*u*g,this._y=c*u*p+d*h*g,this._z=c*h*g+d*u*p,this._w=c*h*p-d*u*g;break;case"ZYX":this._x=d*h*p-c*u*g,this._y=c*u*p+d*h*g,this._z=c*h*g-d*u*p,this._w=c*h*p+d*u*g;break;case"YZX":this._x=d*h*p+c*u*g,this._y=c*u*p+d*h*g,this._z=c*h*g-d*u*p,this._w=c*h*p-d*u*g;break;case"XZY":this._x=d*h*p-c*u*g,this._y=c*u*p-d*h*g,this._z=c*h*g+d*u*p,this._w=c*h*p+d*u*g;break;default:ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],p=e[10],d=n+o+p;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>p){let u=2*Math.sqrt(1+n-o-p);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>p){let u=2*Math.sqrt(1+o-n-p);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+p-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},kc=class kc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*h,this.y=n+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this.z=Ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this.z=Ee(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rl.copy(this).projectOnVector(t),this.sub(Rl)}reflect(t){return this.sub(Rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kc.prototype.isVector3=!0;var D=kc,Rl=new D,nh=new Cn,Gc=class Gc{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],d=n[2],u=n[5],g=n[8],b=s[0],m=s[3],f=s[6],y=s[1],T=s[4],M=s[7],L=s[2],R=s[5],x=s[8];return r[0]=a*b+o*y+l*L,r[3]=a*m+o*T+l*R,r[6]=a*f+o*M+l*x,r[1]=c*b+h*y+p*L,r[4]=c*m+h*T+p*R,r[7]=c*f+h*M+p*x,r[2]=d*b+u*y+g*L,r[5]=d*m+u*T+g*R,r[8]=d*f+u*M+g*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*a-o*c,d=o*l-h*r,u=c*r-a*l,g=e*p+n*d+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return t[0]=p*b,t[1]=(s*c-h*n)*b,t[2]=(o*n-s*a)*b,t[3]=d*b,t[4]=(h*e-s*l)*b,t[5]=(s*r-o*e)*b,t[6]=u*b,t[7]=(n*l-c*e)*b,t[8]=(a*e-n*r)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Il.makeScale(t,e)),this}rotate(t){return nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Il.makeRotation(-t)),this}translate(t,e){return nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Il.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Gc.prototype.isMatrix3=!0;var xe=Gc,Il=new xe,ih=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ed(){let i={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ze&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ze&&(s.r=Ss(s.r),s.g=Ss(s.g),s.b=Ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ar]:{primaries:t,whitePoint:n,transfer:or,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:t,whitePoint:n,transfer:ze,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),i}var Ie=Ed();function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ss,$a=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ss===void 0&&(ss=lr("canvas")),ss.width=t.width,ss.height=t.height;let s=ss.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ss}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=lr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mi(e[n]/255)*255):e[n]=mi(e[n]);return{data:e,width:t.width,height:t.height}}else return ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Td=0,Ts=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Pl(s[a].image)):r.push(Pl(s[a]))}else r=Pl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Pl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$a.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ce("Texture: Unable to serialize Texture."),{})}var Cd=0,Ll=new D,xn=class i extends Qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=$n,s=$n,r=_n,a=Mi,o=Xn,l=vn,c=i.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Oi(),this.name="",this.source=new Ts(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ll).x}get height(){return this.source.getSize(Ll).y}get depth(){return this.source.getSize(Ll).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ce(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ce(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ws:t.x=t.x-Math.floor(t.x);break;case $n:t.x=t.x<0?0:1;break;case Ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ws:t.y=t.y-Math.floor(t.y);break;case $n:t.y=t.y<0?0:1;break;case Ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Sc;xn.DEFAULT_ANISOTROPY=1;var Vc=class Vc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){let e=Ee(t.w,-1,1);this.w=2*Math.acos(e);let n=Math.sqrt(1-e*e);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],d=l[1],u=l[5],g=l[9],b=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,M=(u+1)/2,L=(f+1)/2,R=(h+d)/4,x=(p+b)/4,A=(g+m)/4;return T>M&&T>L?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=R/n,r=x/n):M>L?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=R/s,r=A/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=x/r,s=A/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(p-b)*(p-b)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(p-b)/y,this.z=(d-h)/y,this.w=Math.acos((c+u+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this.z=Ee(this.z,t.z,e.z),this.w=Ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this.z=Ee(this.z,t,e),this.w=Ee(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vc.prototype.isVector4=!0;var Ye=Vc,Ka=class extends Qn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ye(0,0,t,e),this.scissorTest=!1,this.viewport=new Ye(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new xn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++){let a=this.textures[s],o=a.images?a.images[0]:a.image;o.width=t,o.height=e,o.depth=n,a.isData3DTexture!==!0&&(a.isArrayTexture=o.depth>1)}this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ts(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends Ka{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},hr=class extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qa=class extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ao=class Ao{constructor(t,e,n,s,r,a,o,l,c,h,p,d,u,g,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,p,d,u,g,b,m)}set(t,e,n,s,r,a,o,l,c,h,p,d,u,g,b,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=d,f[3]=u,f[7]=g,f[11]=b,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ao().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),a=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let d=a*h,u=a*p,g=o*h,b=o*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=u+g*c,e[5]=d-b*c,e[9]=-o*l,e[2]=b-d*c,e[6]=g+u*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,u=l*p,g=c*h,b=c*p;e[0]=d+b*o,e[4]=g*o-u,e[8]=a*c,e[1]=a*p,e[5]=a*h,e[9]=-o,e[2]=u*o-g,e[6]=b+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,u=l*p,g=c*h,b=c*p;e[0]=d-b*o,e[4]=-a*p,e[8]=g+u*o,e[1]=u+g*o,e[5]=a*h,e[9]=b-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,u=a*p,g=o*h,b=o*p;e[0]=l*h,e[4]=g*c-u,e[8]=d*c+b,e[1]=l*p,e[5]=b*c+d,e[9]=u*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,u=a*c,g=o*l,b=o*c;e[0]=l*h,e[4]=b-d*p,e[8]=g*p+u,e[1]=p,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*p+g,e[10]=d-b*p}else if(t.order==="XZY"){let d=a*l,u=a*c,g=o*l,b=o*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=d*p+b,e[5]=a*h,e[9]=u*p-g,e[2]=g*p-u,e[6]=o*h,e[10]=b*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rd,t,Id)}lookAt(t,e,n){let s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),wi.crossVectors(n,Mn),wi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),wi.crossVectors(n,Mn)),wi.normalize(),oa.crossVectors(Mn,wi),s[0]=wi.x,s[4]=oa.x,s[8]=Mn.x,s[1]=wi.y,s[5]=oa.y,s[9]=Mn.y,s[2]=wi.z,s[6]=oa.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],d=n[9],u=n[13],g=n[2],b=n[6],m=n[10],f=n[14],y=n[3],T=n[7],M=n[11],L=n[15],R=s[0],x=s[4],A=s[8],B=s[12],F=s[1],H=s[5],W=s[9],G=s[13],q=s[2],Q=s[6],ot=s[10],$=s[14],_t=s[3],st=s[7],vt=s[11],Ot=s[15];return r[0]=a*R+o*F+l*q+c*_t,r[4]=a*x+o*H+l*Q+c*st,r[8]=a*A+o*W+l*ot+c*vt,r[12]=a*B+o*G+l*$+c*Ot,r[1]=h*R+p*F+d*q+u*_t,r[5]=h*x+p*H+d*Q+u*st,r[9]=h*A+p*W+d*ot+u*vt,r[13]=h*B+p*G+d*$+u*Ot,r[2]=g*R+b*F+m*q+f*_t,r[6]=g*x+b*H+m*Q+f*st,r[10]=g*A+b*W+m*ot+f*vt,r[14]=g*B+b*G+m*$+f*Ot,r[3]=y*R+T*F+M*q+L*_t,r[7]=y*x+T*H+M*Q+L*st,r[11]=y*A+T*W+M*ot+L*vt,r[15]=y*B+T*G+M*$+L*Ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],d=t[10],u=t[14],g=t[3],b=t[7],m=t[11],f=t[15],y=l*u-c*d,T=o*u-c*p,M=o*d-l*p,L=a*u-c*h,R=a*d-l*h,x=a*p-o*h;return e*(b*y-m*T+f*M)-n*(g*y-m*L+f*R)+s*(g*T-b*L+f*x)-r*(g*M-b*R+m*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],d=t[10],u=t[11],g=t[12],b=t[13],m=t[14],f=t[15],y=e*o-n*a,T=e*l-s*a,M=e*c-r*a,L=n*l-s*o,R=n*c-r*o,x=s*c-r*l,A=h*b-p*g,B=h*m-d*g,F=h*f-u*g,H=p*m-d*b,W=p*f-u*b,G=d*f-u*m,q=y*G-T*W+M*H+L*F-R*B+x*A;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Q=1/q;return t[0]=(o*G-l*W+c*H)*Q,t[1]=(s*W-n*G-r*H)*Q,t[2]=(b*x-m*R+f*L)*Q,t[3]=(d*R-p*x-u*L)*Q,t[4]=(l*F-a*G-c*B)*Q,t[5]=(e*G-s*F+r*B)*Q,t[6]=(m*M-g*x-f*T)*Q,t[7]=(h*x-d*M+u*T)*Q,t[8]=(a*W-o*F+c*A)*Q,t[9]=(n*F-e*W-r*A)*Q,t[10]=(g*R-b*M+f*y)*Q,t[11]=(p*M-h*R-u*y)*Q,t[12]=(o*B-a*H-l*A)*Q,t[13]=(e*H-n*B+s*A)*Q,t[14]=(b*T-g*L-m*y)*Q,t[15]=(h*L-p*T+d*y)*Q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,p=o+o,d=r*c,u=r*h,g=r*p,b=a*h,m=a*p,f=o*p,y=l*c,T=l*h,M=l*p,L=n.x,R=n.y,x=n.z;return s[0]=(1-(b+f))*L,s[1]=(u+M)*L,s[2]=(g-T)*L,s[3]=0,s[4]=(u-M)*R,s[5]=(1-(d+f))*R,s[6]=(m+y)*R,s[7]=0,s[8]=(g+T)*x,s[9]=(m-y)*x,s[10]=(1-(d+b))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=rs.set(s[0],s[1],s[2]).length(),o=rs.set(s[4],s[5],s[6]).length(),l=rs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Dn.copy(this);let c=1/a,h=1/o,p=1/l;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=p,Dn.elements[9]*=p,Dn.elements[10]*=p,e.setFromRotationMatrix(Dn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Tn,l=!1){let c=this.elements,h=2*r/(e-t),p=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),g,b;if(l)g=r/(a-r),b=a*r/(a-r);else if(o===Tn)g=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===As)g=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=p,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Tn,l=!1){let c=this.elements,h=2/(e-t),p=2/(n-s),d=-(e+t)/(e-t),u=-(n+s)/(n-s),g,b;if(l)g=1/(a-r),b=a/(a-r);else if(o===Tn)g=-2/(a-r),b=-(a+r)/(a-r);else if(o===As)g=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=p,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ao.prototype.isMatrix4=!0;var Ue=Ao,rs=new D,Dn=new Ue,Rd=new D(0,0,0),Id=new D(1,1,1),wi=new D,oa=new D,Mn=new D,rh=new Ue,ah=new Cn,Rn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ee(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ah.setFromEuler(this),this.setFromQuaternion(ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var ur=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Pd=0,oh=new D,as=new Cn,ci=new Ue,la=new D,Xs=new D,Ld=new D,Fd=new Cn,lh=new D(1,0,0),ch=new D(0,1,0),hh=new D(0,0,1),uh={type:"added"},Dd={type:"removed"},os={type:"childadded",child:null},Fl={type:"childremoved",child:null},Je=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new Rn,n=new Cn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ue},normalMatrix:{value:new xe}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(lh,t)}rotateY(t){return this.rotateOnAxis(ch,t)}rotateZ(t){return this.rotateOnAxis(hh,t)}translateOnAxis(t,e){return oh.copy(t).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lh,t)}translateY(t){return this.translateOnAxis(ch,t)}translateZ(t){return this.translateOnAxis(hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?la.copy(t):la.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Xs,la,this.up):ci.lookAt(la,Xs,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),as.setFromRotationMatrix(ci),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(fe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uh),os.child=t,this.dispatchEvent(os),os.child=null):fe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dd),Fl.child=t,this.dispatchEvent(Fl),Fl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uh),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,Ld),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Fd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1)===!0&&(n=!0),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}return n}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),p=a(t.shapes),d=a(t.skeletons),u=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.DEFAULT_UP=new D(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pe=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nd={type:"move"},Cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let b of t.hand.values()){let m=e.getJointPose(b,n),f=this._getHandJoint(c,b);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=h.position.distanceTo(p.position),u=.02,g=.005;c.inputState.pinching&&d>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Gi={h:0,s:0,l:0};function Dl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var le=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ie.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Ie.workingColorSpace){if(t=Ad(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Dl(a,r,t+1/3),this.g=Dl(a,r,t),this.b=Dl(a,r,t-1/3)}return Ie.colorSpaceToWorking(this,s),this}setStyle(t,e=gn){function n(r){r!==void 0&&parseFloat(r)<1&&ce("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ce("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ce("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){let n=Eu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ce("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return Ie.workingToColorSpace(un.copy(this),t),Math.round(Ee(un.r*255,0,255))*65536+Math.round(Ee(un.g*255,0,255))*256+Math.round(Ee(un.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ie.workingColorSpace){Ie.workingToColorSpace(un.copy(this),e);let n=un.r,s=un.g,r=un.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Ie.workingColorSpace){return Ie.workingToColorSpace(un.copy(this),e),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=gn){Ie.workingToColorSpace(un.copy(this),t);let e=un.r,n=un.g,s=un.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Nn),this.setHSL(Nn.h+t,Nn.s+e,Nn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Nn),t.getHSL(Gi),Nn.s===0&&(Nn.h=Gi.h),Gi.s===0&&(Gi.h=Nn.h);let n=Cl(Nn.h,Gi.h,e),s=Cl(Nn.s,Gi.s,e),r=Cl(Nn.l,Gi.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new le;le.NAMES=Eu;var dr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new le(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fr=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Un=new D,hi=new D,Nl=new D,ui=new D,ls=new D,cs=new D,dh=new D,Ul=new D,Ol=new D,Bl=new D,zl=new Ye,kl=new Ye,Gl=new Ye,pi=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Un.subVectors(t,e),s.cross(Un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Un.subVectors(s,e),hi.subVectors(n,e),Nl.subVectors(t,e);let a=Un.dot(Un),o=Un.dot(hi),l=Un.dot(Nl),c=hi.dot(hi),h=hi.dot(Nl),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,u=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(a,ui.y),l.addScaledVector(o,ui.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return zl.setScalar(0),kl.setScalar(0),Gl.setScalar(0),zl.fromBufferAttribute(t,e),kl.fromBufferAttribute(t,n),Gl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(zl,r.x),a.addScaledVector(kl,r.y),a.addScaledVector(Gl,r.z),a}static isFrontFacing(t,e,n,s){return Un.subVectors(n,e),hi.subVectors(t,e),Un.cross(hi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Un.cross(hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ls.subVectors(s,n),cs.subVectors(r,n),Ul.subVectors(t,n);let l=ls.dot(Ul),c=cs.dot(Ul);if(l<=0&&c<=0)return e.copy(n);Ol.subVectors(t,s);let h=ls.dot(Ol),p=cs.dot(Ol);if(h>=0&&p<=h)return e.copy(s);let d=l*p-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(ls,a);Bl.subVectors(t,r);let u=ls.dot(Bl),g=cs.dot(Bl);if(g>=0&&u<=g)return e.copy(r);let b=u*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(cs,o);let m=h*g-u*p;if(m<=0&&p-h>=0&&u-g>=0)return dh.subVectors(r,s),o=(p-h)/(p-h+(u-g)),e.copy(s).addScaledVector(dh,o);let f=1/(m+b+d);return a=b*f,o=d*f,e.copy(n).addScaledVector(ls,a).addScaledVector(cs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ca.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)),ca.applyMatrix4(t.matrixWorld),this.union(ca)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qs),ha.subVectors(this.max,qs),hs.subVectors(t.a,qs),us.subVectors(t.b,qs),ds.subVectors(t.c,qs),Ai.subVectors(us,hs),Ei.subVectors(ds,us),Vi.subVectors(hs,ds);let e=[0,-Ai.z,Ai.y,0,-Ei.z,Ei.y,0,-Vi.z,Vi.y,Ai.z,0,-Ai.x,Ei.z,0,-Ei.x,Vi.z,0,-Vi.x,-Ai.y,Ai.x,0,-Ei.y,Ei.x,0,-Vi.y,Vi.x,0];return!Vl(e,hs,us,ds,ha)||(e=[1,0,0,0,1,0,0,0,1],!Vl(e,hs,us,ds,ha))?!1:(ua.crossVectors(Ai,Ei),e=[ua.x,ua.y,ua.z],Vl(e,hs,us,ds,ha))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},di=[new D,new D,new D,new D,new D,new D,new D,new D],On=new D,ca=new jn,hs=new D,us=new D,ds=new D,Ai=new D,Ei=new D,Vi=new D,qs=new D,ha=new D,ua=new D,Hi=new D;function Vl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hi.fromArray(i,r);let o=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),l=t.dot(Hi),c=e.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var tn=new D,da=new nt,Ud=0,He=class extends Qn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ud++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lc,this.updateRanges=[],this.gpuType=Ln,this.version=0,this._normalizationScale=t!==void 0?fl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)da.fromBufferAttribute(this,e),da.applyMatrix3(t),this.setXY(e,da.x,da.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):wu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Au(t,this.array)}};var pr=class extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var mr=class extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var _e=class extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}},Od=new jn,Ys=new D,Hl=new D,ti=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Od.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);let e=Ys.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ys,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(Hl)),this.expandByPoint(Ys.copy(t.center).sub(Hl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Bd=0,En=new Ue,Wl=new Je,fs=new D,Sn=new jn,Zs=new jn,Zn=new D,fa=new D,pa=new D,Oe=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sd(t)?mr:pr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new xe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return Wl.lookAt(t),Wl.updateMatrix(),this.applyMatrix4(Wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _e(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(fa.addVectors(this.boundingBox.min,Sn.min),pa.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(fa),this.boundingBox.expandByPoint(pa)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Zs.setFromBufferAttribute(o),this.morphTargetsRelative?(fa.addVectors(Sn.min,Zs.min),pa.addVectors(Sn.max,Zs.max),Sn.expandByPoint(fa),Sn.expandByPoint(pa)):(Sn.expandByPoint(Zs.min),Sn.expandByPoint(Zs.max))}Sn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Zn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Zn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Zn.fromBufferAttribute(o,c),l&&(fs.fromBufferAttribute(t,c),Zn.add(fs)),s=Math.max(s,n.distanceToSquared(Zn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new He(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let B=0;B<n.count;B++)o[B]=new D,l[B]=new D;let h=new D,p=new D,d=new D,u=new nt,g=new nt,b=new nt,m=new D,f=new D;function y(B,F,H){c[B]=c[F]=c[H]=1,h.fromBufferAttribute(n,B),p.fromBufferAttribute(n,F),d.fromBufferAttribute(n,H),u.fromBufferAttribute(r,B),g.fromBufferAttribute(r,F),b.fromBufferAttribute(r,H),p.sub(h),d.sub(h),g.sub(u),b.sub(u);let W=1/(g.x*b.y-b.x*g.y);isFinite(W)&&(m.copy(p).multiplyScalar(b.y).addScaledVector(d,-g.y).multiplyScalar(W),f.copy(d).multiplyScalar(g.x).addScaledVector(p,-b.x).multiplyScalar(W),o[B].add(m),o[F].add(m),o[H].add(m),l[B].add(f),l[F].add(f),l[H].add(f))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let B=0,F=T.length;B<F;++B){let H=T[B],W=H.start,G=H.count;for(let q=W,Q=Math.min(t.count,W+G);q<Q;q+=3)y(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let M=new D,L=new D,R=new D,x=new D;function A(B){R.fromBufferAttribute(s,B),x.copy(R);let F=o[B];M.copy(F),M.sub(R.multiplyScalar(R.dot(F))).normalize(),M.lengthSq()===0&&(Math.abs(x.x)<.9?M.set(1,0,0):M.set(0,1,0),M.crossVectors(x,M).normalize()),L.crossVectors(x,F);let W=L.dot(l[B])<0?-1:1;a.setXYZW(B,M.x,M.y,M.z,W)}for(let B=0,F=n.count;B<F;++B)c[B]&&A(B);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,p=new D;if(t)for(let d=0,u=t.count;d<u;d+=3){let g=t.getX(d+0),b=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,b),a.fromBufferAttribute(e,m),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Zn.fromBufferAttribute(t,e),Zn.normalize(),t.setXYZ(e,Zn.x,Zn.y,Zn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,d=new c.constructor(l.length*h),u=0,g=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?u=l[b]*o.data.stride+o.offset:u=l[b]*h;for(let f=0;f<h;f++)d[g++]=c[u++]}return new He(d,h,p)}if(this.index===null)return ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let d=c[h],u=t(d,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,d=c.length;p<d;p++){let u=c[p];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let d=0,u=p.length;d<u;d++)h.push(p[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ja=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Lc,this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=fh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=fh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function fh(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Oi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var mn=new D,gr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?fl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.applyMatrix4(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.applyNormalMatrix(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)mn.fromBufferAttribute(this,e),mn.transformDirection(t),this.setXYZ(e,mn.x,mn.y,mn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){cr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new He(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){cr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):wu(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Au(t,this.data.array)}},Xl=new D,zd=new D,kd=new xe,Bn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Xl.subVectors(n,e).cross(zd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Xl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||kd.getNormalMatrix(t),s=this.coplanarPoint(Xl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Gd=0,In=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=Os,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=za,this.stencilZFail=za,this.stencilZPass=za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ce(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ce(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new le().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Bn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ci=class extends In{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ps,Js=new D,ms=new D,gs=new D,_s=new nt,$s=new nt,Tu=new Ue,ma=new D,Ks=new D,ga=new D,ph=new nt,ql=new nt,mh=new nt,qi=class extends Je{constructor(t=new Ci){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new Oe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ja(e,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new gr(n,3,0,!1)),ps.setAttribute("uv",new gr(n,2,3,!1))}this.geometry=ps,this.material=t,this.center=new nt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&fe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),Tu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;_a(ma.set(-.5,-.5,0),gs,a,ms,s,r),_a(Ks.set(.5,-.5,0),gs,a,ms,s,r),_a(ga.set(.5,.5,0),gs,a,ms,s,r),ph.set(0,0),ql.set(1,0),mh.set(1,1);let o=t.ray.intersectTriangle(ma,Ks,ga,!1,Js);if(o===null&&(_a(Ks.set(-.5,.5,0),gs,a,ms,s,r),ql.set(0,1),o=t.ray.intersectTriangle(ma,ga,Ks,!1,Js),o===null))return;let l=t.ray.origin.distanceTo(Js);l<t.near||l>t.far||e.push({distance:l,point:Js.clone(),uv:pi.getInterpolation(Js,ma,Ks,ga,ph,ql,mh,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this.count=t.count,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function _a(i,t,e,n,s,r){_s.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?($s.x=r*_s.x-s*_s.y,$s.y=s*_s.x+r*_s.y):$s.copy(_s),i.copy(t),i.x+=$s.x,i.y+=$s.y,i.applyMatrix4(Tu)}var fi=new D,Yl=new D,xa=new D,va=new D,Rs=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Yl.copy(t).add(e).multiplyScalar(.5),xa.copy(e).sub(t).normalize(),va.copy(this.origin).sub(Yl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(xa),o=va.dot(this.direction),l=-va.dot(xa),c=va.lengthSq(),h=Math.abs(1-a*a),p,d,u,g;if(h>0)if(p=a*l-o,d=a*o-l,g=r*h,p>=0)if(d>=-g)if(d<=g){let b=1/h;p*=b,d*=b,u=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=r,p=Math.max(0,-(a*d+o)),u=-p*p+d*(d+2*l)+c;else d=-r,p=Math.max(0,-(a*d+o)),u=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-l),r),u=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-l),r),u=-p*p+d*(d+2*l)+c);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),u=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Yl).addScaledVector(xa,d),u}intersectSphere(t,e){if(t.radius<0)return null;fi.subVectors(t.center,this.origin);let n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-d.z)*p,l=(t.max.z-d.z)*p):(o=(t.max.z-d.z)*p,l=(t.min.z-d.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-a.x,d=t.y-a.y,u=t.z-a.z,g=e.x-a.x,b=e.y-a.y,m=e.z-a.z,f=n.x-a.x,y=n.y-a.y,T=n.z-a.z,M=Math.abs(l),L=Math.abs(c),R=Math.abs(h),x,A,B,F,H,W,G,q,Q,ot,$,_t;if(M>=L&&M>=R?(B=l,W=p,Q=g,_t=f,l>=0?(x=c,A=h,F=d,H=u,G=b,q=m,ot=y,$=T):(x=h,A=c,F=u,H=d,G=m,q=b,ot=T,$=y)):L>=R?(B=c,W=d,Q=b,_t=y,c>=0?(x=h,A=l,F=u,H=p,G=m,q=g,ot=T,$=f):(x=l,A=h,F=p,H=u,G=g,q=m,ot=f,$=T)):(B=h,W=u,Q=m,_t=T,h>=0?(x=l,A=c,F=p,H=d,G=g,q=b,ot=f,$=y):(x=c,A=l,F=d,H=p,G=b,q=g,ot=y,$=f)),B===0)return null;let st=x/B,vt=A/B,Ot=1/B,Yt=F-st*W,me=H-vt*W,lt=G-st*Q,kt=q-vt*Q,Zt=ot-st*_t,se=$-vt*_t,Gt=Zt*kt-se*lt,ie=Yt*se-me*Zt,ke=lt*me-kt*Yt;if(s){if(Gt<0||ie<0||ke<0)return null}else if((Gt<0||ie<0||ke<0)&&(Gt>0||ie>0||ke>0))return null;let $t=Gt+ie+ke;if($t===0)return null;let re=Ot*(Gt*W+ie*Q+ke*_t);return($t>0?re<0:re>0)?null:this.at(re/$t,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},en=class extends In{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Gr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},gh=new Ue,Wi=new Rs,ya=new ti,_h=new D,Ma=new D,Sa=new D,ba=new D,Zl=new D,wa=new D,xh=new D,Aa=new D,yt=class extends Je{constructor(t=new Oe,e=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this.count=t.count,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){wa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(Zl.fromBufferAttribute(p,t),a?wa.addScaledVector(Zl,h):wa.addScaledVector(Zl.sub(e),h))}e.add(wa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(r),Wi.copy(t.ray).recast(t.near),!(ya.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(ya,_h)===null||Wi.origin.distanceToSquared(_h)>(t.far-t.near)**2))&&(gh.copy(r).invert(),Wi.copy(t.ray).applyMatrix4(gh),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],f=a[m.materialIndex],y=Math.max(m.start,u.start),T=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let M=y,L=T;M<L;M+=3){let R=o.getX(M),x=o.getX(M+1),A=o.getX(M+2);s=Ea(this,f,t,n,c,h,p,R,x,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),b=Math.min(o.count,u.start+u.count);for(let m=g,f=b;m<f;m+=3){let y=o.getX(m),T=o.getX(m+1),M=o.getX(m+2);s=Ea(this,a,t,n,c,h,p,y,T,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],f=a[m.materialIndex],y=Math.max(m.start,u.start),T=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let M=y,L=T;M<L;M+=3){let R=M,x=M+1,A=M+2;s=Ea(this,f,t,n,c,h,p,R,x,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),b=Math.min(l.count,u.start+u.count);for(let m=g,f=b;m<f;m+=3){let y=m,T=m+1,M=m+2;s=Ea(this,a,t,n,c,h,p,y,T,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Vd(i,t,e,n,s,r,a,o){let l;if(t.side===ln?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ni,o),l===null)return null;Aa.copy(o),Aa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Aa);return c<e.near||c>e.far?null:{distance:c,point:Aa.clone(),object:i}}function Ea(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ma),i.getVertexPosition(l,Sa),i.getVertexPosition(c,ba);let h=Vd(i,t,e,n,Ma,Sa,ba,xh);if(h){let p=new D;pi.getBarycoord(xh,Ma,Sa,ba,p),s&&(h.uv=pi.getInterpolatedAttribute(s,o,l,c,p,new nt)),r&&(h.uv1=pi.getInterpolatedAttribute(r,o,l,c,p,new nt)),a&&(h.normal=pi.getInterpolatedAttribute(a,o,l,c,p,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};pi.getNormal(Ma,Sa,ba,d.normal),h.face=d,h.barycoord=p}return h}var _r=class extends xn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=on,h=on,p,d){super(null,a,o,l,c,h,s,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xr=class extends He{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},xs=new Ue,vh=new Ue,Ta=[],yh=new jn,Hd=new Ue,Qs=new yt,js=new ti,Is=class extends yt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Hd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),yh.copy(t.boundingBox).applyMatrix4(xs),this.boundingBox.union(yh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),js.copy(t.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),js.copy(this.boundingSphere),js.applyMatrix4(n),t.ray.intersectsSphere(js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xs),vh.multiplyMatrices(n,xs),Qs.matrixWorld=vh,Qs.raycast(t,Ta);for(let a=0,o=Ta.length;a<o;a++){let l=Ta[a];l.instanceId=r,l.object=this,e.push(l)}Ta.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new xr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _r(new Float32Array(s*this.count),s,this.count,Fo,Ln));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xi=new ti,Wd=new nt(.5,.5),Ca=new D,Ri=class{constructor(t=new Bn,e=new Bn,n=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],d=r[6],u=r[7],g=r[8],b=r[9],m=r[10],f=r[11],y=r[12],T=r[13],M=r[14],L=r[15];if(s[0].setComponents(c-a,u-h,f-g,L-y).normalize(),s[1].setComponents(c+a,u+h,f+g,L+y).normalize(),s[2].setComponents(c+o,u+p,f+b,L+T).normalize(),s[3].setComponents(c-o,u-p,f-b,L-T).normalize(),n)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,u-d,f-m,L-M).normalize();else if(s[4].setComponents(c-l,u-d,f-m,L-M).normalize(),e===Tn)s[5].setComponents(c+l,u+d,f+m,L+M).normalize();else if(e===As)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){Xi.center.set(0,0,0);let e=Wd.distanceTo(t.center);return Xi.radius=.7071067811865476+e,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ca.x=s.normal.x>0?t.max.x:t.min.x,Ca.y=s.normal.y>0?t.max.y:t.min.y,Ca.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Mh=new Ue,to=class i{constructor(){this.coordinateSystem=Tn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Mh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ri),n[s].setFromProjectionMatrix(Mh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ri),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Ps=class extends In{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},eo=new D,no=new D,Sh=new Ue,tr=new Rs,Ra=new ti,Jl=new D,bh=new D,io=class extends Je{constructor(t=new Oe,e=new Ps){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)eo.fromBufferAttribute(e,s-1),no.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=eo.distanceTo(no);t.setAttribute("lineDistance",new _e(n,1))}else ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=r,t.ray.intersectsSphere(Ra)===!1)return;Sh.copy(s).invert(),tr.copy(t.ray).applyMatrix4(Sh);let o=r/s.getMaxScaleOnAxis(),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=u,m=g-1;b<m;b+=c){let f=h.getX(b),y=h.getX(b+1),T=Ia(this,t,tr,l,f,y,b);T&&e.push(T)}if(this.isLineLoop){let b=h.getX(g-1),m=h.getX(u),f=Ia(this,t,tr,l,b,m,g-1);f&&e.push(f)}}else{let u=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let b=u,m=g-1;b<m;b+=c){let f=Ia(this,t,tr,l,b,b+1,b);f&&e.push(f)}if(this.isLineLoop){let b=Ia(this,t,tr,l,g-1,u,g-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ia(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(eo.fromBufferAttribute(o,s),no.fromBufferAttribute(o,r),e.distanceSqToSegment(eo,no,Jl,bh)>n)return;Jl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Jl);if(!(c<t.near||c>t.far))return{distance:c,point:bh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var wh=new D,Ah=new D,vr=class extends io{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)wh.fromBufferAttribute(e,s),Ah.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wh.distanceTo(Ah);t.setAttribute("lineDistance",new _e(n,1))}else ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ls=class extends In{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Eh=new Ue,sc=new Rs,Pa=new ti,La=new D,yr=class extends Je{constructor(t=new Oe,e=new Ls){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(s),Pa.radius+=r,t.ray.intersectsSphere(Pa)===!1)return;Eh.copy(s).invert(),sc.copy(t.ray).applyMatrix4(Eh);let o=r/s.getMaxScaleOnAxis(),l=o*o,c=n.index,p=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let g=d,b=u;g<b;g++){let m=c.getX(g);La.fromBufferAttribute(p,m),Th(La,m,l,s,t,e,this)}}else{let d=Math.max(0,a.start),u=Math.min(p.count,a.start+a.count);for(let g=d,b=u;g<b;g++)La.fromBufferAttribute(p,g),Th(La,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Th(i,t,e,n,s,r,a){let o=sc.distanceSqToPoint(i);if(o<e){let l=new D;sc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Mr=class extends xn{constructor(t=[],e=ts,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sr=class extends xn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _i=class extends xn{constructor(t,e,n=Hn,s,r,a,o=on,l=on,c,h=gi,p=1){if(h!==gi&&h!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:p};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ts(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},br=class extends _i{constructor(t,e=Hn,n=ts,s,r,a=on,o=on,l,c=gi){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},wr=class extends xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},nn=class i extends Oe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],p=[],d=0,u=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(p,2));function g(b,m,f,y,T,M,L,R,x,A,B){let F=M/x,H=L/A,W=M/2,G=L/2,q=R/2,Q=x+1,ot=A+1,$=0,_t=0,st=new D;for(let vt=0;vt<ot;vt++){let Ot=vt*H-G;for(let Yt=0;Yt<Q;Yt++){let me=Yt*F-W;st[b]=me*y,st[m]=Ot*T,st[f]=q,c.push(st.x,st.y,st.z),st[b]=0,st[m]=0,st[f]=R>0?1:-1,h.push(st.x,st.y,st.z),p.push(Yt/x),p.push(1-vt/A),$+=1}}for(let vt=0;vt<A;vt++)for(let Ot=0;Ot<x;Ot++){let Yt=d+Ot+Q*vt,me=d+Ot+Q*(vt+1),lt=d+(Ot+1)+Q*(vt+1),kt=d+(Ot+1)+Q*vt;l.push(Yt,me,kt),l.push(me,lt,kt),_t+=6}o.addGroup(u,_t,B),u+=_t,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},xi=class i extends Oe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,p=Math.PI/2*t,d=e,u=2*p+d,g=n*2+r,b=s+1,m=new D,f=new D;for(let y=0;y<=g;y++){let T=0,M=0,L=0,R=0;if(y<=n){let B=y/n,F=B*Math.PI/2;M=-h-t*Math.cos(F),L=t*Math.sin(F),R=-t*Math.cos(F),T=B*p}else if(y<=n+r){let B=(y-n)/r;M=-h+B*e,L=t,R=0,T=p+B*d}else{let B=(y-n-r)/n,F=B*Math.PI/2;M=h+t*Math.sin(F),L=t*Math.cos(F),R=t*Math.sin(F),T=p+d+B*p}let x=Math.max(0,Math.min(1,T/u)),A=0;y===0?A=.5/s:y===g&&(A=-.5/s);for(let B=0;B<=s;B++){let F=B/s,H=F*Math.PI*2,W=Math.sin(H),G=Math.cos(H);f.x=-L*G,f.y=M,f.z=L*W,o.push(f.x,f.y,f.z),m.set(-L*G,R,L*W),m.normalize(),l.push(m.x,m.y,m.z),c.push(F+A,x)}if(y>0){let B=(y-1)*b;for(let F=0;F<s;F++){let H=B+F,W=B+F+1,G=y*b+F,q=y*b+F+1;a.push(H,W,G),a.push(W,q,G)}}}this.setIndex(a),this.setAttribute("position",new _e(o,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},vi=class i extends Oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new D,h=new nt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let p=0,d=3;p<=e;p++,d+=3){let u=n+p/e*s;c.x=t*Math.cos(u),c.y=t*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new _e(a,3)),this.setAttribute("normal",new _e(o,3)),this.setAttribute("uv",new _e(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},De=class i extends Oe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],d=[],u=[],g=0,b=[],m=n/2,f=0;y(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new _e(p,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(u,2));function y(){let M=new D,L=new D,R=0,x=(e-t)/n;for(let A=0;A<=r;A++){let B=[],F=A/r,H=F*(e-t)+t;for(let W=0;W<=s;W++){let G=W/s,q=G*l+o,Q=Math.sin(q),ot=Math.cos(q);L.x=H*Q,L.y=-F*n+m,L.z=H*ot,p.push(L.x,L.y,L.z),M.set(Q,x,ot).normalize(),d.push(M.x,M.y,M.z),u.push(G,1-F),B.push(g++)}b.push(B)}for(let A=0;A<s;A++)for(let B=0;B<r;B++){let F=b[B][A],H=b[B+1][A],W=b[B+1][A+1],G=b[B][A+1];(t>0||B!==0)&&(h.push(F,H,G),R+=3),(e>0||B!==r-1)&&(h.push(H,W,G),R+=3)}c.addGroup(f,R,0),f+=R}function T(M){let L=g,R=new nt,x=new D,A=0,B=M===!0?t:e,F=M===!0?1:-1;for(let W=1;W<=s;W++)p.push(0,m*F,0),d.push(0,F,0),u.push(.5,.5),g++;let H=g;for(let W=0;W<=s;W++){let q=W/s*l+o,Q=Math.cos(q),ot=Math.sin(q);x.x=B*ot,x.y=m*F,x.z=B*Q,p.push(x.x,x.y,x.z),d.push(0,F,0),R.x=Q*.5+.5,R.y=ot*.5*F+.5,u.push(R.x,R.y),g++}for(let W=0;W<s;W++){let G=L+W,q=H+W;M===!0?h.push(q,q+1,G):h.push(q+1,q,G),A+=3}c.addGroup(f,A,M===!0?1:2),f+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},zn=class i extends De{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ar=class i extends Oe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(r.slice(),3)),this.setAttribute("uv",new _e(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let T=new D,M=new D,L=new D;for(let R=0;R<e.length;R+=3)u(e[R+0],T),u(e[R+1],M),u(e[R+2],L),l(T,M,L,y)}function l(y,T,M,L){let R=L+1,x=[];for(let A=0;A<=R;A++){x[A]=[];let B=y.clone().lerp(M,A/R),F=T.clone().lerp(M,A/R),H=R-A;for(let W=0;W<=H;W++)W===0&&A===R?x[A][W]=B:x[A][W]=B.clone().lerp(F,W/H)}for(let A=0;A<R;A++)for(let B=0;B<2*(R-A)-1;B++){let F=Math.floor(B/2);B%2===0?(d(x[A][F+1]),d(x[A+1][F]),d(x[A][F])):(d(x[A][F+1]),d(x[A+1][F+1]),d(x[A+1][F]))}}function c(y){let T=new D;for(let M=0;M<r.length;M+=3)T.x=r[M+0],T.y=r[M+1],T.z=r[M+2],T.normalize().multiplyScalar(y),r[M+0]=T.x,r[M+1]=T.y,r[M+2]=T.z}function h(){let y=new D;for(let T=0;T<r.length;T+=3){y.x=r[T+0],y.y=r[T+1],y.z=r[T+2];let M=m(y)/2/Math.PI+.5,L=f(y)/Math.PI+.5;a.push(M,1-L)}g(),p()}function p(){for(let y=0;y<a.length;y+=6){let T=a[y+0],M=a[y+2],L=a[y+4],R=Math.max(T,M,L),x=Math.min(T,M,L);R>.9&&x<.1&&(T<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),L<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function u(y,T){let M=y*3;T.x=t[M+0],T.y=t[M+1],T.z=t[M+2]}function g(){let y=new D,T=new D,M=new D,L=new D,R=new nt,x=new nt,A=new nt;for(let B=0,F=0;B<r.length;B+=9,F+=6){y.set(r[B+0],r[B+1],r[B+2]),T.set(r[B+3],r[B+4],r[B+5]),M.set(r[B+6],r[B+7],r[B+8]),R.set(a[F+0],a[F+1]),x.set(a[F+2],a[F+3]),A.set(a[F+4],a[F+5]),L.copy(y).add(T).add(M).divideScalar(3);let H=m(L);b(R,F+0,y,H),b(x,F+2,T,H),b(A,F+4,M,H)}}function b(y,T,M,L){L<0&&y.x===1&&(a[T]=y.x-1),M.x===0&&M.z===0&&(a[T]=L/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Yi=class i extends Ar{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ce("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new nt:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,s=[],r=[],a=[],o=new D,l=new Ue;for(let u=0;u<=t;u++){let g=u/t;s[u]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ee(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,g))}a[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(Ee(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],u*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Fs=class extends wn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new nt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*p+this.aX,c=d*p+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},so=class extends Fs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Dc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,p){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+p)+(l-o)/p;d*=h,u*=h,s(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Ch=new D,Rh=new D,$l=new Dc,Kl=new Dc,Ql=new Dc,ei=class extends wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Rh.subVectors(s[0],s[1]).add(s[0]),c=Rh);let p=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ch.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ch),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),u),b=Math.pow(p.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(h),u);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),$l.initNonuniformCatmullRom(c.x,p.x,d.x,h.x,g,b,m),Kl.initNonuniformCatmullRom(c.y,p.y,d.y,h.y,g,b,m),Ql.initNonuniformCatmullRom(c.z,p.z,d.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&($l.initCatmullRom(c.x,p.x,d.x,h.x,this.tension),Kl.initCatmullRom(c.y,p.y,d.y,h.y,this.tension),Ql.initCatmullRom(c.z,p.z,d.z,h.z,this.tension));return n.set($l.calc(l),Kl.calc(l),Ql.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ih(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Xd(i,t){let e=1-i;return e*e*t}function qd(i,t){return 2*(1-i)*i*t}function Yd(i,t){return i*i*t}function ir(i,t,e,n){return Xd(i,t)+qd(i,e)+Yd(i,n)}function Zd(i,t){let e=1-i;return e*e*e*t}function Jd(i,t){let e=1-i;return 3*e*e*i*t}function $d(i,t){return 3*(1-i)*i*i*t}function Kd(i,t){return i*i*i*t}function sr(i,t,e,n,s){return Zd(i,t)+Jd(i,e)+$d(i,n)+Kd(i,s)}var Er=class extends wn{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(sr(t,s.x,r.x,a.x,o.x),sr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ro=class extends wn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(sr(t,s.x,r.x,a.x,o.x),sr(t,s.y,r.y,a.y,o.y),sr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Tr=class extends wn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ao=class extends wn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cr=class extends wn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ir(t,s.x,r.x,a.x),ir(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zi=class extends wn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ir(t,s.x,r.x,a.x),ir(t,s.y,r.y,a.y),ir(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rr=class extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(Ih(o,l.x,c.x,h.x,p.x),Ih(o,l.y,c.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new nt().fromArray(s))}return this}},oo=Object.freeze({__proto__:null,ArcCurve:so,CatmullRomCurve3:ei,CubicBezierCurve:Er,CubicBezierCurve3:ro,EllipseCurve:Fs,LineCurve:Tr,LineCurve3:ao,QuadraticBezierCurve:Cr,QuadraticBezierCurve3:Zi,SplineCurve:Rr}),lo=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new oo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new oo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Ir=class extends lo{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Tr(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Cr(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Er(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Rr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Fs(t,e,n,s,r,a,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},kn=class extends Ir{constructor(t){super(t),this.uuid=Oi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ir().fromJSON(s))}return this}};function Qd(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Cu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=sf(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,p=l;for(let d=e;d<s;d+=e){let u=i[d],g=i[d+1];u<o&&(o=u),g<l&&(l=g),u>h&&(h=u),g>p&&(p=g)}c=Math.max(h-o,p-l),c=c!==0?32767/c:0}return Pr(r,a,e,o,l,c,0),a}function Cu(i,t,e,n,s){let r;if(s===mf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Ph(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Ph(a/n|0,i[a],i[a+1],r);return r&&Ds(r,r.next)&&(Fr(r),r=r.next),r}function Ji(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ds(e,e.next)||Ze(e.prev,e,e.next)===0)){if(Fr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Pr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&cf(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?tf(i,n,s,r):jd(i)){t.push(l.i,i.i,c.i),Fr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=ef(Ji(i),t),Pr(i,t,e,n,s,r,2)):a===2&&nf(i,t,e,n,s,r):Pr(Ji(i),t,e,n,s,r,1);break}}}function jd(i){let t=i.prev,e=i,n=i.next;if(Ze(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),p=Math.min(o,l,c),d=Math.max(s,r,a),u=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=p&&g.y<=u&&er(s,o,r,l,a,c,g.x,g.y)&&Ze(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function tf(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ze(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,p=r.y,d=a.y,u=Math.min(o,l,c),g=Math.min(h,p,d),b=Math.max(o,l,c),m=Math.max(h,p,d),f=rc(u,g,t,e,n),y=rc(b,m,t,e,n),T=i.prevZ,M=i.nextZ;for(;T&&T.z>=f&&M&&M.z<=y;){if(T.x>=u&&T.x<=b&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&er(o,h,l,p,c,d,T.x,T.y)&&Ze(T.prev,T,T.next)>=0||(T=T.prevZ,M.x>=u&&M.x<=b&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&er(o,h,l,p,c,d,M.x,M.y)&&Ze(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;T&&T.z>=f;){if(T.x>=u&&T.x<=b&&T.y>=g&&T.y<=m&&T!==s&&T!==a&&er(o,h,l,p,c,d,T.x,T.y)&&Ze(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;M&&M.z<=y;){if(M.x>=u&&M.x<=b&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&er(o,h,l,p,c,d,M.x,M.y)&&Ze(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function ef(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ds(n,s)&&Iu(n,e,e.next,s)&&Lr(n,s)&&Lr(s,n)&&(t.push(n.i,e.i,s.i),Fr(e),Fr(e.next),e=i=s),e=e.next}while(e!==i);return Ji(e)}function nf(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&df(a,o)){let l=Pu(a,o);a=Ji(a,a.next),l=Ji(l,l.next),Pr(a,t,e,n,s,r,0),Pr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function sf(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Cu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(uf(c))}s.sort(rf);for(let r=0;r<s.length;r++)e=af(s[r],e);return e}function rf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function af(i,t){let e=of(i,t);if(!e)return t;let n=Pu(e,i);return Ji(n,n.next),Ji(e,e.next)}function of(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ds(i,e))return e;do{if(Ds(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Ru(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let p=Math.abs(s-e.y)/(n-e.x);Lr(e,i)&&(p<h||p===h&&(e.x>a.x||e.x===a.x&&lf(a,e)))&&(a=e,h=p)}e=e.next}while(e!==o);return a}function lf(i,t){return Ze(i.prev,i,t.prev)<0&&Ze(t.next,i,i.next)<0}function cf(i,t,e,n){let s=i;do s.z===0&&(s.z=rc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,hf(s)}function hf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function rc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function uf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ru(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function er(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Ru(i,t,e,n,s,r,a,o)}function df(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ff(i,t)&&(Lr(i,t)&&Lr(t,i)&&pf(i,t)&&(Ze(i.prev,i,t.prev)||Ze(i,t.prev,t))||Ds(i,t)&&Ze(i.prev,i,i.next)>0&&Ze(t.prev,t,t.next)>0)}function Ze(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ds(i,t){return i.x===t.x&&i.y===t.y}function Iu(i,t,e,n){let s=Da(Ze(i,t,e)),r=Da(Ze(i,t,n)),a=Da(Ze(e,n,i)),o=Da(Ze(e,n,t));return!!(s!==r&&a!==o||s===0&&Fa(i,e,t)||r===0&&Fa(i,n,t)||a===0&&Fa(e,i,n)||o===0&&Fa(e,t,n))}function Fa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Da(i){return i>0?1:i<0?-1:0}function ff(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Iu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Lr(i,t){return Ze(i.prev,i,i.next)<0?Ze(i,t,i.next)>=0&&Ze(i,i.prev,t)>=0:Ze(i,t,i.prev)<0||Ze(i,i.next,t)<0}function pf(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Pu(i,t){let e=ac(i.i,i.x,i.y),n=ac(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ph(i,t,e,n){let s=ac(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ac(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var oc=class{static triangulate(t,e,n=2){return Qd(t,e,n)}},Kn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Lh(t),Fh(n,t);let a=t.length;e.forEach(Lh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Fh(n,e[l]);let o=oc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Lh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Fh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Dr=class i extends Oe{constructor(t=new kn([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new _e(s,3)),this.setAttribute("uv",new _e(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,b=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:gf,T,M=!1,L,R,x,A;if(f){T=f.getSpacedPoints(h),M=!0,d=!1;let mt=f.isCatmullRomCurve3?f.closed:!1;L=f.computeFrenetFrames(h,mt),R=new D,x=new D,A=new D}d||(m=0,u=0,g=0,b=0);let B=o.extractPoints(c),F=B.shape,H=B.holes;if(!Kn.isClockWise(F)){F=F.reverse();for(let mt=0,bt=H.length;mt<bt;mt++){let Ct=H[mt];Kn.isClockWise(Ct)&&(H[mt]=Ct.reverse())}}function G(mt){let Ct=10000000000000001e-36,Kt=mt[0];for(let Ft=1;Ft<=mt.length;Ft++){let Dt=Ft%mt.length,ee=mt[Dt],Qt=ee.x-Kt.x,Te=ee.y-Kt.y,Fe=Qt*Qt+Te*Te,k=Math.max(Math.abs(ee.x),Math.abs(ee.y),Math.abs(Kt.x),Math.abs(Kt.y)),Ge=Ct*k*k;if(Fe<=Ge){mt.splice(Dt,1),Ft--;continue}Kt=ee}}G(F),H.forEach(G);let q=H.length,Q=F;for(let mt=0;mt<q;mt++){let bt=H[mt];F=F.concat(bt)}function ot(mt,bt,Ct){return bt||fe("ExtrudeGeometry: vec does not exist"),mt.clone().addScaledVector(bt,Ct)}let $=F.length;function _t(mt,bt,Ct){let Kt,Ft,Dt,ee=mt.x-bt.x,Qt=mt.y-bt.y,Te=Ct.x-mt.x,Fe=Ct.y-mt.y,k=ee*ee+Qt*Qt,Ge=ee*Fe-Qt*Te;if(Math.abs(Ge)>Number.EPSILON){let ge=Math.sqrt(k),Ae=Math.sqrt(Te*Te+Fe*Fe),Nt=bt.x-Qt/ge,Le=bt.y+ee/ge,K=Ct.x-Fe/Ae,he=Ct.y+Te/Ae,P=((K-Nt)*Fe-(he-Le)*Te)/(ee*Fe-Qt*Te);Kt=Nt+ee*P-mt.x,Ft=Le+Qt*P-mt.y;let S=Kt*Kt+Ft*Ft;if(S<=2)return new nt(Kt,Ft);Dt=Math.sqrt(S/2)}else{let ge=!1;ee>Number.EPSILON?Te>Number.EPSILON&&(ge=!0):ee<-Number.EPSILON?Te<-Number.EPSILON&&(ge=!0):Math.sign(Qt)===Math.sign(Fe)&&(ge=!0),ge?(Kt=-Qt,Ft=ee,Dt=Math.sqrt(k)):(Kt=ee,Ft=Qt,Dt=Math.sqrt(k/2))}return new nt(Kt/Dt,Ft/Dt)}let st=[];for(let mt=0,bt=Q.length,Ct=bt-1,Kt=mt+1;mt<bt;mt++,Ct++,Kt++)Ct===bt&&(Ct=0),Kt===bt&&(Kt=0),st[mt]=_t(Q[mt],Q[Ct],Q[Kt]);let vt=[],Ot,Yt=st.concat();for(let mt=0,bt=q;mt<bt;mt++){let Ct=H[mt];Ot=[];for(let Kt=0,Ft=Ct.length,Dt=Ft-1,ee=Kt+1;Kt<Ft;Kt++,Dt++,ee++)Dt===Ft&&(Dt=0),ee===Ft&&(ee=0),Ot[Kt]=_t(Ct[Kt],Ct[Dt],Ct[ee]);vt.push(Ot),Yt=Yt.concat(Ot)}let me;if(m===0)me=Kn.triangulateShape(Q,H);else{let mt=[],bt=[];for(let Ct=0;Ct<m;Ct++){let Kt=Ct/m,Ft=u*Math.cos(Kt*Math.PI/2),Dt=g*Math.sin(Kt*Math.PI/2)+b;for(let ee=0,Qt=Q.length;ee<Qt;ee++){let Te=ot(Q[ee],st[ee],Dt);ie(Te.x,Te.y,-Ft),Kt===0&&mt.push(Te)}for(let ee=0,Qt=q;ee<Qt;ee++){let Te=H[ee];Ot=vt[ee];let Fe=[];for(let k=0,Ge=Te.length;k<Ge;k++){let ge=ot(Te[k],Ot[k],Dt);ie(ge.x,ge.y,-Ft),Kt===0&&Fe.push(ge)}Kt===0&&bt.push(Fe)}}me=Kn.triangulateShape(mt,bt)}let lt=me.length,kt=g+b;for(let mt=0;mt<$;mt++){let bt=d?ot(F[mt],Yt[mt],kt):F[mt];M?(x.copy(L.normals[0]).multiplyScalar(bt.x),R.copy(L.binormals[0]).multiplyScalar(bt.y),A.copy(T[0]).add(x).add(R),ie(A.x,A.y,A.z)):ie(bt.x,bt.y,0)}for(let mt=1;mt<=h;mt++)for(let bt=0;bt<$;bt++){let Ct=d?ot(F[bt],Yt[bt],kt):F[bt];M?(x.copy(L.normals[mt]).multiplyScalar(Ct.x),R.copy(L.binormals[mt]).multiplyScalar(Ct.y),A.copy(T[mt]).add(x).add(R),ie(A.x,A.y,A.z)):ie(Ct.x,Ct.y,p/h*mt)}for(let mt=m-1;mt>=0;mt--){let bt=mt/m,Ct=u*Math.cos(bt*Math.PI/2),Kt=g*Math.sin(bt*Math.PI/2)+b;for(let Ft=0,Dt=Q.length;Ft<Dt;Ft++){let ee=ot(Q[Ft],st[Ft],Kt);ie(ee.x,ee.y,p+Ct)}for(let Ft=0,Dt=H.length;Ft<Dt;Ft++){let ee=H[Ft];Ot=vt[Ft];for(let Qt=0,Te=ee.length;Qt<Te;Qt++){let Fe=ot(ee[Qt],Ot[Qt],Kt);M?ie(Fe.x,Fe.y+T[h-1].y,T[h-1].x+Ct):ie(Fe.x,Fe.y,p+Ct)}}}Zt(),se();function Zt(){let mt=s.length/3;if(d){let bt=0,Ct=$*bt;for(let Kt=0;Kt<lt;Kt++){let Ft=me[Kt];ke(Ft[2]+Ct,Ft[1]+Ct,Ft[0]+Ct)}bt=h+m*2,Ct=$*bt;for(let Kt=0;Kt<lt;Kt++){let Ft=me[Kt];ke(Ft[0]+Ct,Ft[1]+Ct,Ft[2]+Ct)}}else{for(let bt=0;bt<lt;bt++){let Ct=me[bt];ke(Ct[2],Ct[1],Ct[0])}for(let bt=0;bt<lt;bt++){let Ct=me[bt];ke(Ct[0]+$*h,Ct[1]+$*h,Ct[2]+$*h)}}n.addGroup(mt,s.length/3-mt,0)}function se(){let mt=s.length/3,bt=0;Gt(Q,bt),bt+=Q.length;for(let Ct=0,Kt=H.length;Ct<Kt;Ct++){let Ft=H[Ct];Gt(Ft,bt),bt+=Ft.length}n.addGroup(mt,s.length/3-mt,1)}function Gt(mt,bt){let Ct=mt.length;for(;--Ct>=0;){let Kt=Ct,Ft=Ct-1;Ft<0&&(Ft=mt.length-1);for(let Dt=0,ee=h+m*2;Dt<ee;Dt++){let Qt=$*Dt,Te=$*(Dt+1),Fe=bt+Kt+Qt,k=bt+Ft+Qt,Ge=bt+Ft+Te,ge=bt+Kt+Te;$t(Fe,k,Ge,ge)}}}function ie(mt,bt,Ct){l.push(mt),l.push(bt),l.push(Ct)}function ke(mt,bt,Ct){re(mt),re(bt),re(Ct);let Kt=s.length/3,Ft=y.generateTopUV(n,s,Kt-3,Kt-2,Kt-1);ue(Ft[0]),ue(Ft[1]),ue(Ft[2])}function $t(mt,bt,Ct,Kt){re(mt),re(bt),re(Kt),re(bt),re(Ct),re(Kt);let Ft=s.length/3,Dt=y.generateSideWallUV(n,s,Ft-6,Ft-3,Ft-2,Ft-1);ue(Dt[0]),ue(Dt[1]),ue(Dt[3]),ue(Dt[1]),ue(Dt[2]),ue(Dt[3])}function re(mt){s.push(l[mt*3+0]),s.push(l[mt*3+1]),s.push(l[mt*3+2])}function ue(mt){r.push(mt.x),r.push(mt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return _f(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new oo[s.type]().fromJSON(s)),new i(n,t.options)}},gf={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new nt(r,a),new nt(o,l),new nt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],p=t[n*3+2],d=t[s*3],u=t[s*3+1],g=t[s*3+2],b=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new nt(a,1-l),new nt(c,1-p),new nt(d,1-g),new nt(b,1-f)]:[new nt(o,1-l),new nt(h,1-p),new nt(u,1-g),new nt(m,1-f)]}};function _f(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Gn=class i extends Ar{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Vn=class i extends Oe{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ee(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,p=new D,d=new nt,u=new D,g=new D,b=new D,m=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,u.x=f*1,u.y=-m,u.z=f*0,b.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:b.normalize(),l.push(b.x,b.y,b.z);break;default:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,u.x=f*1,u.y=-m,u.z=f*0,g.copy(u),u.x+=b.x,u.y+=b.y,u.z+=b.z,u.normalize(),l.push(u.x,u.y,u.z),b.copy(g)}for(let y=0;y<=e;y++){let T=n+y*h*s,M=Math.sin(T),L=Math.cos(T);for(let R=0;R<=t.length-1;R++){p.x=t[R].x*M,p.y=t[R].y,p.z=t[R].x*L,a.push(p.x,p.y,p.z),d.x=y/e,d.y=R/(t.length-1),o.push(d.x,d.y);let x=l[3*R+0]*M,A=l[3*R+1],B=l[3*R+0]*L;c.push(x,A,B)}}for(let y=0;y<e;y++)for(let T=0;T<t.length-1;T++){let M=T+y*t.length,L=M,R=M+t.length,x=M+t.length+1,A=M+1;r.push(L,R,A),r.push(x,A,R)}this.setIndex(r),this.setAttribute("position",new _e(a,3)),this.setAttribute("uv",new _e(o,2)),this.setAttribute("normal",new _e(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ni=class i extends Oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,p=t/o,d=e/l,u=[],g=[],b=[],m=[];for(let f=0;f<h;f++){let y=f*d-a;for(let T=0;T<c;T++){let M=T*p-r;g.push(M,-y,0),b.push(0,0,1),m.push(T/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){let T=y+c*f,M=y+c*(f+1),L=y+1+c*(f+1),R=y+1+c*f;u.push(T,M,R),u.push(M,L,R)}this.setIndex(u),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(b,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Nr=class i extends Oe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],p=t,d=(e-t)/s,u=new D,g=new nt;for(let b=0;b<=s;b++){for(let m=0;m<=n;m++){let f=r+m/n*a;u.x=p*Math.cos(f),u.y=p*Math.sin(f),l.push(u.x,u.y,u.z),c.push(0,0,1),g.x=(u.x/e+1)/2,g.y=(u.y/e+1)/2,h.push(g.x,g.y)}p+=d}for(let b=0;b<s;b++){let m=b*(n+1);for(let f=0;f<n;f++){let y=f+m,T=y,M=y+n+1,L=y+n+2,R=y+1;o.push(T,M,R),o.push(M,L,R)}}this.setIndex(o),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ii=class i extends Oe{constructor(t=new kn([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new _e(s,3)),this.setAttribute("normal",new _e(r,3)),this.setAttribute("uv",new _e(a,2));function c(h){let p=s.length/3,d=h.extractPoints(e),u=d.shape,g=d.holes;Kn.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,f=g.length;m<f;m++){let y=g[m];Kn.isClockWise(y)===!0&&(g[m]=y.reverse())}let b=Kn.triangulateShape(u,g);for(let m=0,f=g.length;m<f;m++){let y=g[m];u=u.concat(y)}for(let m=0,f=u.length;m<f;m++){let y=u[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,f=b.length;m<f;m++){let y=b[m],T=y[0]+p,M=y[1]+p,L=y[2]+p;n.push(T,M,L),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return xf(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function xf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ce=class i extends Oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],p=new D,d=new D,u=[],g=[],b=[],m=[];for(let f=0;f<=n;f++){let y=[],T=f/n,M=a+T*o,L=t*Math.cos(M),R=Math.sqrt(t*t-L*L),x=0;f===0&&a===0?x=.5/e:f===n&&l===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){let B=A/e,F=s+B*r;p.x=-R*Math.cos(F),p.y=L,p.z=R*Math.sin(F),g.push(p.x,p.y,p.z),d.copy(p).normalize(),b.push(d.x,d.y,d.z),m.push(B+x,1-T),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){let T=h[f][y+1],M=h[f][y],L=h[f+1][y],R=h[f+1][y+1];(f!==0||a>0)&&u.push(T,M,R),(f!==n-1||l<Math.PI)&&u.push(M,L,R)}this.setIndex(u),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(b,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ii=class i extends Oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],p=[],d=new D,u=new D,g=new D;for(let b=0;b<=n;b++){let m=a+b/n*o;for(let f=0;f<=s;f++){let y=f/s*r;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),c.push(u.x,u.y,u.z),d.x=t*Math.cos(y),d.y=t*Math.sin(y),g.subVectors(u,d).normalize(),h.push(g.x,g.y,g.z),p.push(f/s),p.push(b/n)}}for(let b=1;b<=n;b++)for(let m=1;m<=s;m++){let f=(s+1)*b+m-1,y=(s+1)*(b-1)+m-1,T=(s+1)*(b-1)+m,M=(s+1)*b+m;l.push(f,y,M),l.push(y,T,M)}this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Pi=class i extends Oe{constructor(t=new Zi(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,l=new D,c=new nt,h=new D,p=[],d=[],u=[],g=[];b(),this.setIndex(g),this.setAttribute("position",new _e(p,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(u,2));function b(){for(let T=0;T<e;T++)m(T);m(r===!1?e:0),y(),f()}function m(T){h=t.getPointAt(T/e,h);let M=a.normals[T],L=a.binormals[T];for(let R=0;R<=s;R++){let x=R/s*Math.PI*2,A=Math.sin(x),B=-Math.cos(x);l.x=B*M.x+A*L.x,l.y=B*M.y+A*L.y,l.z=B*M.z+A*L.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,p.push(o.x,o.y,o.z)}}function f(){for(let T=1;T<=e;T++)for(let M=1;M<=s;M++){let L=(s+1)*(T-1)+(M-1),R=(s+1)*T+(M-1),x=(s+1)*T+M,A=(s+1)*(T-1)+M;g.push(L,R,A),g.push(R,x,A)}}function y(){for(let T=0;T<=e;T++)for(let M=0;M<=s;M++)c.x=T/e,c.y=M/s,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new oo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function ns(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Dh(s))s.isRenderTargetTexture?(ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Dh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function fn(i){let t={};for(let e=0;e<i.length;e++){let n=ns(i[e]);for(let s in n)t[s]=n[s]}return t}function Dh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function vf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ie.workingColorSpace}var Lu={clone:ns,merge:fn},yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pn=class extends In{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yf,this.fragmentShader=Mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ns(t.uniforms),this.uniformsGroups=vf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.linewidth=t.linewidth,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new le().setHex(s.value);break;case"v2":this.uniforms[n].value=new nt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new xe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ue().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},co=class extends Pn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var yi=class extends In{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new le(16777215),this.specular=new le(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Gr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ke=class extends In{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Gr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ho=class extends In{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},uo=class extends In{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function vs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Na(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Li=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fo=class extends Li{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ec,endingEnd:ec}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case nc:r=t,o=2*e-n;break;case ic:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nc:a=t,l=2*n-e;break;case ic:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-e)/(s-e),b=g*g,m=b*g,f=-d*m+2*d*b-d*g,y=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,T=(-1-u)*m+(1.5+u)*b+.5*g,M=u*m-u*b;for(let L=0;L!==o;++L)r[L]=f*a[h+L]+y*a[c+L]+T*a[l+L]+M*a[p+L];return r}},po=class extends Li{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),p=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*p+a[l+d]*h;return r}},mo=class extends Li{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},go=class extends Li{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let g=(n-e)/(s-e),b=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*b+a[l+m]*g;return r}let d=o*2,u=t-1;for(let g=0;g!==o;++g){let b=a[c+g],m=a[l+g],f=u*d+g*2,y=p[f],T=p[f+1],M=t*d+g*2,L=h[M],R=h[M+1],x=bf(n,e,y,L,s);r[g]=Fu(x,b,T,R,m)}return r}};function Fu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Sf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function bf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Fu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Sf(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var An=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vs(e,this.TimeBufferType),this.values=vs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:vs(t.times,Array),values:vs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Na(t.settings)&&(n.settings={inTangents:vs(t.settings.inTangents,Array),outTangents:vs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new mo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new go(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case rr:e=this.InterpolantFactoryMethodDiscrete;break;case Za:e=this.InterpolantFactoryMethodLinear;break;case Ba:e=this.InterpolantFactoryMethodSmooth;break;case tc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ce("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return Za;case this.InterpolantFactoryMethodSmooth:return Ba;case this.InterpolantFactoryMethodBezier:return tc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Na(this.settings)&&(Nh(this.settings.inTangents,t),Nh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Na(this.settings)&&(Uh(this.settings.inTangents,t),Uh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(fe("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(fe("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){fe("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){fe("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&wd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){fe("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ba,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*n,d=p-n,u=p+n;for(let g=0;g!==n;++g){let b=e[p+g];if(b!==e[d+g]||b!==e[u+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*n,d=a*n;for(let u=0;u!==n;++u)e[d+u]=e[p+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Na(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Nh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Uh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Za;var Fi=class extends An{constructor(t,e,n){super(t,e,n)}};Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=rr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var _o=class extends An{constructor(t,e,n,s){super(t,e,n,s)}};_o.prototype.ValueTypeName="color";var xo=class extends An{constructor(t,e,n,s){super(t,e,n,s)}};xo.prototype.ValueTypeName="number";var vo=class extends Li{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Cn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ur=class extends An{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new vo(this.times,this.values,this.getValueSize(),t)}};Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends An{constructor(t,e,n){super(t,e,n)}};Di.prototype.ValueTypeName="string";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=rr;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends An{constructor(t,e,n,s){super(t,e,n,s)}};yo.prototype.ValueTypeName="vector";var Mo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,d=c.length;p<d;p+=2){let u=c[p],g=c[p+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Du=new Mo,So=class{constructor(t){this.manager=t!==void 0?t:Du,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};So.DEFAULT_MATERIAL_NAME="__DEFAULT";var Or=class extends Je{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Br=class extends Or{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},jl=new Ue,Oh=new D,Bh=new D,bo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.filterNode=null,this.shadowNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ri,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Oh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Oh),Bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(jl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===As||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(jl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this.filterNode=t.filterNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ua=new D,Oa=new Cn,Jn=new D,zr=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ua,Oa,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ua,Oa,Jn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){let s=super.updateWorldMatrix(t,e,n);return this.matrixWorld.decompose(Ua,Oa,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ua,Oa,Jn.set(1,1,1)).invert(),s}clone(){return new this.constructor().copy(this)}},Ti=new D,zh=new nt,kh=new nt,dn=class extends zr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ja*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Tl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(Tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,zh,kh),e.subVectors(kh,zh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Tl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var $i=class extends zr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},lc=class extends bo{constructor(){super(new $i(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},kr=class extends Or{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new lc}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ys=-90,Ms=1,Ns=class extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(ys,Ms,t,e);s.layers=this.layers,this.add(s);let r=new dn(ys,Ms,t,e);r.layers=this.layers,this.add(r);let a=new dn(ys,Ms,t,e);a.layers=this.layers,this.add(a);let o=new dn(ys,Ms,t,e);o.layers=this.layers,this.add(o);let l=new dn(ys,Ms,t,e);l.layers=this.layers,this.add(l);let c=new dn(ys,Ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===As)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=b,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,d,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},wo=class extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Uc="\\[\\]\\.:\\/",wf=new RegExp("["+Uc+"]","g"),Oc="[^"+Uc+"]",Af="[^"+Uc.replace("\\.","")+"]",Ef=/((?:WC+[\/:])*)/.source.replace("WC",Oc),Tf=/(WCOD+)?/.source.replace("WCOD",Af),Cf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oc),Rf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oc),If=new RegExp("^"+Ef+Tf+Cf+Rf+"$"),Pf=["material","materials","bones","map"],cc=class{constructor(t,e,n){let s=n||qe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},qe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(wf,"")}static parseTrackName(t){let e=If.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Pf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;fe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qe.Composite=cc;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var b_=new Float32Array(1);var Hc=class Hc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Hc.prototype.isMatrix2=!0;var hc=Hc;function Bc(i,t,e,n){let s=Lf(n);switch(e){case Tc:return i*t;case Fo:return i*t/s.components*s.byteLength;case Do:return i*t/s.components*s.byteLength;case Ui:return i*t*2/s.components*s.byteLength;case No:return i*t*2/s.components*s.byteLength;case Cc:return i*t*3/s.components*s.byteLength;case Xn:return i*t*4/s.components*s.byteLength;case Uo:return i*t*4/s.components*s.byteLength;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qr:case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:case ko:return Math.max(i,16)*Math.max(t,8)/4;case Oo:case zo:return Math.max(i,8)*Math.max(t,8)/2;case Go:case Vo:case Wo:case Xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ho:case Zr:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $o:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case jo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case tl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case il:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case sl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case rl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case al:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ol:case ll:case cl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case hl:case ul:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Jr:case dl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lf(i){switch(i){case vn:case bc:return{byteLength:1,components:1};case zs:case wc:case Wn:return{byteLength:2,components:1};case Po:case Lo:return{byteLength:2,components:4};case Hn:case Io:case Ln:return{byteLength:4,components:1};case Ac:case Ec:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eo}}));typeof window<"u"&&(window.__THREE__?ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eo);function nd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ff(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,p=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,h);else{p.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<p.length;u++){let g=p[d],b=p[u];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,p[d]=b)}p.length=d+1;for(let u=0,g=p.length;u<g;u++){let b=p[u];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Df=`#ifdef USE_ALPHAHASH
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
}`,we={alphahash_fragment:Df,alphahash_pars_fragment:Nf,alphamap_fragment:Uf,alphamap_pars_fragment:Of,alphatest_fragment:Bf,alphatest_pars_fragment:zf,aomap_fragment:kf,aomap_pars_fragment:Gf,batching_pars_vertex:Vf,batching_vertex:Hf,begin_vertex:Wf,beginnormal_vertex:Xf,bsdfs:qf,iridescence_fragment:Yf,bumpmap_pars_fragment:Zf,clipping_planes_fragment:Jf,clipping_planes_pars_fragment:$f,clipping_planes_pars_vertex:Kf,clipping_planes_vertex:Qf,color_fragment:jf,color_pars_fragment:tp,color_pars_vertex:ep,color_vertex:np,common:ip,defaultnormal_vertex:sp,displacementmap_pars_vertex:rp,displacementmap_vertex:ap,emissivemap_fragment:op,emissivemap_pars_fragment:lp,colorspace_fragment:cp,colorspace_pars_fragment:hp,envmap_fragment:up,envmap_common_pars_fragment:dp,envmap_pars_fragment:fp,envmap_pars_vertex:pp,envmap_physical_pars_fragment:Ap,envmap_vertex:mp,fog_vertex:gp,fog_pars_vertex:_p,fog_fragment:xp,fog_pars_fragment:vp,gradientmap_pars_fragment:yp,lightmap_pars_fragment:Mp,lights_lambert_fragment:Sp,lights_lambert_pars_fragment:bp,lights_pars_begin:wp,lights_toon_fragment:Ep,lights_toon_pars_fragment:Tp,lights_phong_fragment:Cp,lights_phong_pars_fragment:Rp,lights_physical_fragment:Ip,lights_physical_pars_fragment:Pp,lights_fragment_begin:Lp,lights_fragment_maps:Fp,lights_fragment_end:Dp,lightprobes_pars_fragment:Np,logdepthbuf_fragment:Up,logdepthbuf_pars_fragment:Op,logdepthbuf_pars_vertex:Bp,logdepthbuf_vertex:zp,map_fragment:kp,map_pars_fragment:Gp,map_particle_fragment:Vp,map_particle_pars_fragment:Hp,metalnessmap_fragment:Wp,metalnessmap_pars_fragment:Xp,morphinstance_vertex:qp,morphcolor_vertex:Yp,morphnormal_vertex:Zp,morphtarget_pars_vertex:Jp,morphtarget_vertex:$p,normal_fragment_begin:Kp,normal_fragment_maps:Qp,normal_pars_fragment:jp,normal_pars_vertex:tm,normal_vertex:em,normalmap_pars_fragment:nm,clearcoat_normal_fragment_begin:im,clearcoat_normal_fragment_maps:sm,clearcoat_pars_fragment:rm,iridescence_pars_fragment:am,opaque_fragment:om,packing:lm,premultiplied_alpha_fragment:cm,project_vertex:hm,dithering_fragment:um,dithering_pars_fragment:dm,roughnessmap_fragment:fm,roughnessmap_pars_fragment:pm,shadowmap_pars_fragment:mm,shadowmap_pars_vertex:gm,shadowmap_vertex:_m,shadowmask_pars_fragment:xm,skinbase_vertex:vm,skinning_pars_vertex:ym,skinning_vertex:Mm,skinnormal_vertex:Sm,specularmap_fragment:bm,specularmap_pars_fragment:wm,tonemapping_fragment:Am,tonemapping_pars_fragment:Em,transmission_fragment:Tm,transmission_pars_fragment:Cm,uv_pars_fragment:Rm,uv_pars_vertex:Im,uv_vertex:Pm,worldpos_vertex:Lm,background_vert:Fm,background_frag:Dm,backgroundCube_vert:Nm,backgroundCube_frag:Um,cube_vert:Om,cube_frag:Bm,depth_vert:zm,depth_frag:km,distance_vert:Gm,distance_frag:Vm,equirect_vert:Hm,equirect_frag:Wm,linedashed_vert:Xm,linedashed_frag:qm,meshbasic_vert:Ym,meshbasic_frag:Zm,meshlambert_vert:Jm,meshlambert_frag:$m,meshmatcap_vert:Km,meshmatcap_frag:Qm,meshnormal_vert:jm,meshnormal_frag:t0,meshphong_vert:e0,meshphong_frag:n0,meshphysical_vert:i0,meshphysical_frag:s0,meshtoon_vert:r0,meshtoon_frag:a0,points_vert:o0,points_frag:l0,shadow_vert:c0,shadow_frag:h0,sprite_vert:u0,sprite_frag:d0},Xt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]},probesIntensity:{value:[]}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},oi={basic:{uniforms:fn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:fn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new le(0)},envMapIntensity:{value:1}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:fn([Xt.common,Xt.specularmap,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,Xt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:fn([Xt.common,Xt.envmap,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.roughnessmap,Xt.metalnessmap,Xt.fog,Xt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:fn([Xt.common,Xt.aomap,Xt.lightmap,Xt.emissivemap,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.gradientmap,Xt.fog,Xt.lights,{emissive:{value:new le(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:fn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,Xt.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:fn([Xt.points,Xt.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:fn([Xt.common,Xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:fn([Xt.common,Xt.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:fn([Xt.common,Xt.bumpmap,Xt.normalmap,Xt.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:fn([Xt.sprite,Xt.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distance:{uniforms:fn([Xt.common,Xt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distance_vert,fragmentShader:we.distance_frag},shadow:{uniforms:fn([Xt.lights,Xt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};oi.physical={uniforms:fn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};var pl={r:0,b:0,g:0},f0=new Ue,id=new xe;id.set(-1,0,0,0,1,0,0,0,1);function p0(i,t,e,n,s,r){let a=new le(0),o=s===!0?0:1,l,c,h=null,p=0,d=null;function u(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){let M=y.backgroundBlurriness>0;T=t.get(T,M)}return T}function g(y){let T=!1,M=u(y);M===null?m(a,o):M&&M.isColor&&(m(M,1),T=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?e.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(y,T){let M=u(T);M&&M.isCubeTexture?(c===void 0&&(c=new yt(new nn(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:ns(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,R,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(f0.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(id),c.material.toneMapped=Ie.getTransfer(M.colorSpace)!==ze,(h!==M||p!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,p=M.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new yt(new ni(2,2),new Pn({name:"BackgroundMaterial",uniforms:ns(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=Ie.getTransfer(M.colorSpace)!==ze,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||p!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,p=M.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,T){y.getRGB(pl,Nc(i)),e.buffers.color.setClear(pl.r,pl.g,pl.b,T,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:b,dispose:f}}function m0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(H,W,G,q,Q){let ot=!1,$=p(H,q,G,W);r!==$&&(r=$,c(r.object)),ot=u(H,q,G,Q),ot&&g(H,q,G,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(ot||a)&&(a=!1,M(H,W,G,q),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function l(){return i.createVertexArray()}function c(H){return i.bindVertexArray(H)}function h(H){return i.deleteVertexArray(H)}function p(H,W,G,q){let Q=q.wireframe===!0,ot=n[W.id];ot===void 0&&(ot={},n[W.id]=ot);let $=H.isInstancedMesh===!0?H.id:0,_t=ot[$];_t===void 0&&(_t={},ot[$]=_t);let st=_t[G.id];st===void 0&&(st={},_t[G.id]=st);let vt=st[Q];return vt===void 0&&(vt=d(l()),st[Q]=vt),vt}function d(H){let W=[],G=[],q=[];for(let Q=0;Q<e;Q++)W[Q]=0,G[Q]=0,q[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:G,attributeDivisors:q,object:H,attributes:{},index:null}}function u(H,W,G,q){let Q=r.attributes,ot=W.attributes,$=0,_t=G.getAttributes();for(let st in _t)if(_t[st].location>=0){let Ot=Q[st],Yt=ot[st];if(Yt===void 0&&(st==="instanceMatrix"&&H.instanceMatrix&&(Yt=H.instanceMatrix),st==="instanceColor"&&H.instanceColor&&(Yt=H.instanceColor)),Ot===void 0||Ot.attribute!==Yt||Yt&&Ot.data!==Yt.data)return!0;$++}return r.attributesNum!==$||r.index!==q}function g(H,W,G,q){let Q={},ot=W.attributes,$=0,_t=G.getAttributes();for(let st in _t)if(_t[st].location>=0){let Ot=ot[st];Ot===void 0&&(st==="instanceMatrix"&&H.instanceMatrix&&(Ot=H.instanceMatrix),st==="instanceColor"&&H.instanceColor&&(Ot=H.instanceColor));let Yt={};Yt.attribute=Ot,Ot&&Ot.data&&(Yt.data=Ot.data),Q[st]=Yt,$++}r.attributes=Q,r.attributesNum=$,r.index=q}function b(){let H=r.newAttributes;for(let W=0,G=H.length;W<G;W++)H[W]=0}function m(H){f(H,0)}function f(H,W){let G=r.newAttributes,q=r.enabledAttributes,Q=r.attributeDivisors;G[H]=1,q[H]===0&&(i.enableVertexAttribArray(H),q[H]=1),Q[H]!==W&&(i.vertexAttribDivisor(H,W),Q[H]=W)}function y(){let H=r.newAttributes,W=r.enabledAttributes;for(let G=0,q=W.length;G<q;G++)W[G]!==H[G]&&(i.disableVertexAttribArray(G),W[G]=0)}function T(H,W,G,q,Q,ot,$){$===!0?i.vertexAttribIPointer(H,W,G,Q,ot):i.vertexAttribPointer(H,W,G,q,Q,ot)}function M(H,W,G,q){b();let Q=q.attributes,ot=G.getAttributes(),$=W.defaultAttributeValues;for(let _t in ot){let st=ot[_t];if(st.location>=0){let vt=Q[_t];if(vt===void 0&&(_t==="instanceMatrix"&&H.instanceMatrix&&(vt=H.instanceMatrix),_t==="instanceColor"&&H.instanceColor&&(vt=H.instanceColor)),vt!==void 0){let Ot=vt.normalized,Yt=vt.itemSize,me=t.get(vt);if(me===void 0)continue;let lt=me.buffer,kt=me.type,Zt=me.bytesPerElement,se=kt===i.INT||kt===i.UNSIGNED_INT||vt.gpuType===Io;if(vt.isInterleavedBufferAttribute){let Gt=vt.data,ie=Gt.isInterleavedBuffer===!0?Gt.stride:Gt.itemSize,ke=vt.offset;if(Gt.isInstancedInterleavedBuffer||Gt.isInstancedBufferAttribute){for(let $t=0;$t<st.locationSize;$t++)f(st.location+$t,Gt.meshPerAttribute);H.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Gt.meshPerAttribute*Gt.count)}else for(let $t=0;$t<st.locationSize;$t++)m(st.location+$t);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let $t=0;$t<st.locationSize;$t++)T(st.location+$t,Yt/st.locationSize,kt,Ot,ie*Zt,(ke+Yt/st.locationSize*$t)*Zt,se)}else{if(vt.isInstancedBufferAttribute){for(let Gt=0;Gt<st.locationSize;Gt++)f(st.location+Gt,vt.meshPerAttribute);H.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Gt=0;Gt<st.locationSize;Gt++)m(st.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let Gt=0;Gt<st.locationSize;Gt++)T(st.location+Gt,Yt/st.locationSize,kt,Ot,Yt*Zt,Yt/st.locationSize*Gt*Zt,se)}}else if($!==void 0){let Ot=$[_t];if(Ot!==void 0)switch(Ot.length){case 2:i.vertexAttrib2fv(st.location,Ot);break;case 3:i.vertexAttrib3fv(st.location,Ot);break;case 4:i.vertexAttrib4fv(st.location,Ot);break;default:i.vertexAttrib1fv(st.location,Ot)}}}}y()}function L(){B();for(let H in n){let W=n[H];for(let G in W){let q=W[G];for(let Q in q){let ot=q[Q];for(let $ in ot)h(ot[$].object),delete ot[$];delete q[Q]}}delete n[H]}}function R(H){if(n[H.id]===void 0)return;let W=n[H.id];for(let G in W){let q=W[G];for(let Q in q){let ot=q[Q];for(let $ in ot)h(ot[$].object),delete ot[$];delete q[Q]}}delete n[H.id]}function x(H){for(let W in n){let G=n[W];for(let q in G){let Q=G[q];if(Q[H.id]===void 0)continue;let ot=Q[H.id];for(let $ in ot)h(ot[$].object),delete ot[$];delete Q[H.id]}}}function A(H){for(let W in n){let G=n[W],q=H.isInstancedMesh===!0?H.id:0,Q=G[q];if(Q!==void 0){for(let ot in Q){let $=Q[ot];for(let _t in $)h($[_t].object),delete $[_t];delete Q[ot]}delete G[q],Object.keys(G).length===0&&delete n[W]}}}function B(){F(),a=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:F,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfObject:A,releaseStatesOfProgram:x,initAttributes:b,enableAttribute:m,disableUnusedAttributes:y}}function g0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function _0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Xn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let A=x===Wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==vn&&x!==Ln&&!A&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(ce("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&ce("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:p,maxTextures:u,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:M,maxSamples:L,samples:R}}function x0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Bn,o=new xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let u=p.length!==0||d||n!==0||s;return s=d,n=p.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=h(p,d,0)},this.setState=function(p,d,u){let g=p.clippingPlanes,b=p.clipIntersection,m=p.clipShadows,f=i.get(p);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,T=y*4,M=f.clippingState||null;l.value=M,M=h(g,d,T,u);for(let L=0;L!==T;++L)M[L]=e[L];f.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,d,u,g){let b=p!==null?p.length:0,m=null;if(b!==0){if(m=l.value,g!==!0||m===null){let f=u+b*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,M=u;T!==b;++T,M+=4)a.copy(p[T]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}var jr=class extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new nn(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Qi});r.uniforms.tEquirect.value=e;let a=new yt(s,r),o=e.minFilter;return e.minFilter===Mi&&(e.minFilter=_n),new Ns(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Nu=256,v0=3,y0=20,sd=256,rd=16,M0=3,S0=new D,b0=new le,gl=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ns(1,10,null),this._boxMesh=new yt(new nn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=S0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,d=l.autoClearColor,u=l.autoClearDepth,g=l.autoClearStencil,b=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(t.background=l.getClearColor(b0));let m=new Ns(n,s,h);return m.position.copy(o),m.update(l,t),l.autoClear=p,l.autoClearColor=d,l.autoClearDepth=u,l.autoClearStencil=g,t.background=b,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Nu,bu(t))}_fromTexture(t,e){t.mapping===ts||t.mapping===Bs?this._setSize(t.image.length===0?Nu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Uu(t,!1,!1),n=Math.log2(t)-v0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Uu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ts||t.mapping===Bs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ou()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=w0(),this._integrationMaterial=A0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/rd);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-M0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(sd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=E0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Uu(i,t,e){return new jr(i,{minFilter:Mi,generateMipmaps:t,type:Wn,colorSpace:ar,depthBuffer:e})}function ta(i,t,e){return new Pn({name:i,uniforms:t,vertexShader:we.cube_vert,fragmentShader:e,side:ln,blending:Qi,depthTest:!1,depthWrite:!1})}function w0(){return ta("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function A0(){return ta("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:rd}},`

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
	`)}function E0(){return ta("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

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
	`)}function Ou(){return ta("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Bu(){return ta("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureLod( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ), 0.0 ).rgb, 1.0 );

		}
	`)}function T0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===To||u===Co)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let b=new jr(g.height);return b.fromEquirectangularTexture(i,d),t.set(d,b),d.addEventListener("dispose",c),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,g=u===To||u===Co,b=u===ts||u===Bs;if(g||b){let m=e.get(d),f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new gl(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return g&&y&&y.height>0||b&&y&&l(y)?(n===null&&(n=new gl(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,u){return u===To?d.mapping=ts:u===Co&&(d.mapping=Bs),d}function l(d){let u=0,g=6;for(let b=0;b<g;b++)d[b]!==void 0&&u++;return u===g}function c(d){let u=d.target;u.removeEventListener("dispose",c);let g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function C0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&nr("WebGLRenderer: "+n+" extension not supported."),s}}}function R0(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let b=r.get(g);b&&(t.remove(b),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,b){return s[b.id]!==void 0||(b.addEventListener("dispose",o),s[b.id]=new WeakRef(b),a.register(b,b.id,b),e.memory.geometries++),b}function h(g){let b=g.attributes;for(let m in b)t.update(b[m],i.ARRAY_BUFFER)}function p(g){let b=g.index,m=g.attributes.position,f=0;if(m===void 0)return;let y=b!==null?b.count:m.count-1,T=m.count>=65535?mr:pr,M=new T(Math.ceil(y/3)*6,1),L=M.array;if(b!==null){let x=b.array;f=b.version;for(let A=0,B=0;A<y;A+=3){let F=x[A+0],H=x[A+1],W=x[A+2];L[B++]=F,L[B++]=H,L[B++]=H,L[B++]=W,L[B++]=W,L[B++]=F}}else{f=m.version;for(let x=0,A=0;x<y;x+=3){let B=x+0,F=x+1,H=x+2;L[A++]=B,L[A++]=F,L[A++]=F,L[A++]=H,L[A++]=H,L[A++]=B}}M.version=f;let R=r.get(g);R&&t.remove(R),r.set(g,M)}function d(g){let b=r.get(g);if(b){let m=g.index;m!==null&&b.version<m.version&&p(g)}else p(g);return r.get(g)}function u(){for(let g in s){let b=s[g].deref();b!==void 0&&l(b)}}return{get:c,update:h,getWireframeAttribute:d,dispose:u}}function I0(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,d){i.drawElements(n,d,r,p*a),e.update(d,n,1)}function c(p,d,u){u!==0&&(i.drawElementsInstanced(n,d,r,p*a,u),e.update(d,n,u))}function h(p,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,u);let b=0;for(let m=0;m<u;m++)b+=d[m];e.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function P0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:fe("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function L0(i,t,e){let n=new WeakMap,s=new Ye;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==p){let B=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",B)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],T=0;u===!0&&(T=1),g===!0&&(T=2),b===!0&&(T=3);let M=o.attributes.position.count*T,L=1;M>t.maxTextureSize&&(L=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let R=new Float32Array(M*L*4*p),x=new hr(R,M,L,p);x.type=Ln,x.needsUpdate=!0;let A=T*4;for(let F=0;F<p;F++){let H=m[F],W=f[F],G=y[F],q=M*L*4*F;for(let Q=0;Q<H.count;Q++){let ot=Q*A;u===!0&&(s.fromBufferAttribute(H,Q),R[q+ot+0]=s.x,R[q+ot+1]=s.y,R[q+ot+2]=s.z,R[q+ot+3]=0),g===!0&&(s.fromBufferAttribute(W,Q),R[q+ot+4]=s.x,R[q+ot+5]=s.y,R[q+ot+6]=s.z,R[q+ot+7]=0),b===!0&&(s.fromBufferAttribute(G,Q),R[q+ot+8]=s.x,R[q+ot+9]=s.y,R[q+ot+10]=s.z,R[q+ot+11]=G.itemSize===4?s.w:1)}}d={count:p,texture:x,size:new nt(M,L)},n.set(o,d),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let b=0;b<c.length;b++)u+=c[b];let g=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function F0(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,p=c.geometry,d=t.get(c,p);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var D0={[gc]:"LINEAR_TONE_MAPPING",[_c]:"REINHARD_TONE_MAPPING",[xc]:"CINEON_TONE_MAPPING",[Vr]:"ACES_FILMIC_TONE_MAPPING",[yc]:"AGX_TONE_MAPPING",[Mc]:"NEUTRAL_TONE_MAPPING",[vc]:"CUSTOM_TONE_MAPPING"};function N0(i,t,e,n,s,r){let a=new bn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Oe;h.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new _e([0,2,0,0,2,0],2));let p=new co({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new yt(h,p),u=new $i(-1,1,1,-1,0,1),g=null,b=null,m=!1,f,y=null,T=[],M=!1;this.setSize=function(L,R){a.setSize(L,R),o!==null&&o.setSize(L,R),l!==null&&l.setSize(L,R);for(let x=0;x<T.length;x++){let A=T[x];A.setSize&&A.setSize(L,R)}},this.setEffects=function(L){T=L,M=T.length>0&&T[0].isRenderPass===!0;let R=a.width,x=a.height;T.length>0&&o===null&&(o=new bn(R,x,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),l=new bn(R,x,{type:Wn,depthBuffer:!1,stencilBuffer:!1}));let A=s===!0&&T.some(B=>B.needsDepthTexture===!0);A!==(a.depthTexture!==null)&&(A===!0&&c===null&&(c=new _i(R,x),r===!0&&(c.format=Si,c.type=es)),a.dispose(),a.depthTexture=A?c:null,a.resolveDepthBuffer=A,a.storeMultisampledDepthBuffer=A);for(let B=0;B<T.length;B++){let F=T[B];F.setSize&&F.setSize(R,x),A&&F.needsDepthTexture===!0&&F.setDepthTexture&&F.setDepthTexture(c)}},this.begin=function(L,R){if(m||L.toneMapping===ri&&T.length===0)return!1;if(y=R,R!==null){let x=R.width,A=R.height;(a.width!==x||a.height!==A)&&this.setSize(x,A)}return M===!1&&L.setRenderTarget(a),f=L.toneMapping,L.toneMapping=ri,!0},this.hasRenderPass=function(){return M},this.end=function(L,R){L.toneMapping=f,m=!0;let x=a,A=o;for(let B=0;B<T.length;B++){let F=T[B];F.enabled!==!1&&(F.render(L,A,x,R),F.needsSwap!==!1&&(x=A,A=A===o?l:o))}if(g!==L.outputColorSpace||b!==L.toneMapping){g=L.outputColorSpace,b=L.toneMapping,p.defines={},Ie.getTransfer(g)===ze&&(p.defines.SRGB_TRANSFER="");let B=D0[b];B&&(p.defines[B]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=x.texture,L.setRenderTarget(y),L.render(d,u),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}var ad=new xn,od=new _i(1,1),ld=new br(1),cd=new hr,hd=new Qa,ud=new Mr,zu=[],ku=[],Gu=new Float32Array(16),Vu=new Float32Array(9),Hu=new Float32Array(4);function Gs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=zu[s];if(r===void 0&&(r=new Float32Array(s),zu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function rn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function an(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xl(i,t){let e=ku[t];e===void 0&&(e=new Int32Array(t),ku[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function U0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function O0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2fv(this.addr,t),an(e,t)}}function B0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;i.uniform3fv(this.addr,t),an(e,t)}}function z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4fv(this.addr,t),an(e,t)}}function k0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;Hu.set(n),i.uniformMatrix2fv(this.addr,!1,Hu),an(e,n)}}function G0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;Vu.set(n),i.uniformMatrix3fv(this.addr,!1,Vu),an(e,n)}}function V0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;Gu.set(n),i.uniformMatrix4fv(this.addr,!1,Gu),an(e,n)}}function H0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function W0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2iv(this.addr,t),an(e,t)}}function X0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3iv(this.addr,t),an(e,t)}}function q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4iv(this.addr,t),an(e,t)}}function Y0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2uiv(this.addr,t),an(e,t)}}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3uiv(this.addr,t),an(e,t)}}function $0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4uiv(this.addr,t),an(e,t)}}function vl(i){return i.version===0&&(i.compareFunction=Pc,i.needsUpdate=!0),i}function K0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=vl(od):r=ad,e.setTexture2D(t||r,s)}function Q0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hd,s)}function j0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=vl(ld):r=ud,e.setTextureCube(t||r,s)}function tg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||cd,s)}function eg(i){switch(i){case 5126:return U0;case 35664:return O0;case 35665:return B0;case 35666:return z0;case 35674:return k0;case 35675:return G0;case 35676:return V0;case 5124:case 35670:return H0;case 35667:case 35671:return W0;case 35668:case 35672:return X0;case 35669:case 35673:return q0;case 5125:return Y0;case 36294:return Z0;case 36295:return J0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return j0;case 36289:case 36303:case 36311:case 36292:return tg}}function ng(i,t){i.uniform1fv(this.addr,t)}function ig(i,t){let e=Gs(t,this.size,2);i.uniform2fv(this.addr,e)}function sg(i,t){let e=Gs(t,this.size,3);i.uniform3fv(this.addr,e)}function rg(i,t){let e=Gs(t,this.size,4);i.uniform4fv(this.addr,e)}function ag(i,t){let e=Gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function og(i,t){let e=Gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function lg(i,t){let e=Gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function cg(i,t){i.uniform1iv(this.addr,t)}function hg(i,t){i.uniform2iv(this.addr,t)}function ug(i,t){i.uniform3iv(this.addr,t)}function dg(i,t){i.uniform4iv(this.addr,t)}function fg(i,t){i.uniform1uiv(this.addr,t)}function pg(i,t){i.uniform2uiv(this.addr,t)}function mg(i,t){i.uniform3uiv(this.addr,t)}function gg(i,t){i.uniform4uiv(this.addr,t)}function _g(i,t,e){let n=this.cache,s=t.length,r=xl(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=vl(od):a=ad;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function xg(i,t,e){let n=this.cache,s=t.length,r=xl(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||hd,r[a])}function vg(i,t,e){let n=this.cache,s=t.length,r=xl(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=vl(ld):a=ud;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function yg(i,t,e){let n=this.cache,s=t.length,r=xl(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||cd,r[a])}function Mg(i){switch(i){case 5126:return ng;case 35664:return ig;case 35665:return sg;case 35666:return rg;case 35674:return ag;case 35675:return og;case 35676:return lg;case 5124:case 35670:return cg;case 35667:case 35671:return hg;case 35668:case 35672:return ug;case 35669:case 35673:return dg;case 5125:return fg;case 36294:return pg;case 36295:return mg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return yg}}var qc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=eg(e.type)}},Yc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mg(e.type)}},Zc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Wc=/(\w+)(\])?(\[|\.)?/g;function Wu(i,t){i.seq.push(t),i.map[t.id]=t}function Sg(i,t,e){let n=i.name,s=n.length;for(Wc.lastIndex=0;;){let r=Wc.exec(n),a=Wc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Wu(e,c===void 0?new qc(o,i,t):new Yc(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new Zc(o),Wu(e,p)),e=p}}}var ks=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Sg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Xu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var bg=37297,wg=0;function Ag(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var qu=new xe;function Eg(i){Ie._getMatrix(qu,Ie.workingColorSpace,i);let t=`mat3( ${qu.elements.map(e=>e.toFixed(4))} )`;switch(Ie.getTransfer(i)){case or:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return ce("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Ag(i.getShaderSource(t),o)}else return r}function Tg(i,t){let e=Eg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Cg={[gc]:"Linear",[_c]:"Reinhard",[xc]:"Cineon",[Vr]:"ACESFilmic",[yc]:"AgX",[Mc]:"Neutral",[vc]:"Custom"};function Rg(i,t){let e=Cg[t];return e===void 0?(ce("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ml=new D;function Ig(){Ie.getLuminanceCoefficients(ml);let i=ml.x.toFixed(4),t=ml.y.toFixed(4),e=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function Lg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Qr(i){return i!==""}function Zu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ju(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(i){return i.replace(Dg,Ng)}function Ng(i,t){let e=we[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Jc(e)}var Ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $u(i){return i.replace(Ug,Og)}function Og(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ku(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Bg={[Ki]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function zg(i){return Bg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var kg={[Bs]:"ENVMAP_MODE_REFRACTION"};function Gg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":kg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Vg={[Gr]:"ENVMAP_BLENDING_MULTIPLY",[lu]:"ENVMAP_BLENDING_MIX",[cu]:"ENVMAP_BLENDING_ADD"};function Hg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Vg[i.combine]||"ENVMAP_BLENDING_NONE"}function Wg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=zg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Gg(e),p=Hg(e),d=Pg(e),u=Lg(r),g=s.createProgram(),b,m,f=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(b=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Qr).join(`
`),b.length>0&&(b+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Qr).join(`
`),m.length>0&&(m+=`
`)):(b=[Ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),m=[Ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?we.tonemapping_pars_fragment:"",e.toneMapping!==ri?Rg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",we.colorspace_pars_fragment,Tg("linearToOutputTexel",e.outputColorSpace),Ig(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qr).join(`
`)),a=Jc(a),a=Zu(a,e),a=Ju(a,e),o=Jc(o),o=Zu(o,e),o=Ju(o,e),a=$u(a),o=$u(o),e.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,b=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,m=["#define varying in",e.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=f+b+a,T=f+m+o,M=Xu(s,s.VERTEX_SHADER,y),L=Xu(s,s.FRAGMENT_SHADER,T);s.attachShader(g,M),s.attachShader(g,L),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(F){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(g)||"",W=s.getShaderInfoLog(M)||"",G=s.getShaderInfoLog(L)||"",q=H.trim(),Q=W.trim(),ot=G.trim(),$=!0,_t=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,L);else{let st=Yu(s,M,"vertex"),vt=Yu(s,L,"fragment");fe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+q+`
`+st+`
`+vt)}else q!==""?ce("WebGLProgram: Program Info Log:",q):(Q===""||ot==="")&&(_t=!1);_t&&(F.diagnostics={runnable:$,programLog:q,vertexShader:{log:Q,prefix:b},fragmentShader:{log:ot,prefix:m}})}s.deleteShader(M),s.deleteShader(L),x=new ks(s,g),A=Fg(s,g)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(g,bg)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=L,this}var Xg=0,$c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Kc(t),e.set(t,n)),n}},Kc=class{constructor(t){this.id=Xg++,this.code=t,this.usedTimes=0}};function qg(i){return i===Ui||i===Zr||i===Jr}function Yg(i,t,e,n,s,r){let a=new ur,o=new $c,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,A,B,F,H,W){let G=F.fog,q=H.geometry,Q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,ot=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,$=t.get(x.envMap||Q,ot),_t=d[x.type],st=n.precision;x.precision!==null&&(st=n.getMaxPrecision(x.precision),st!==x.precision&&ce("WebGLProgram.getParameters:",x.precision,"not supported, using",st,"instead."));let vt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ot=vt!==void 0?vt.length:0,Yt=0;q.morphAttributes.position!==void 0&&(Yt=1),q.morphAttributes.normal!==void 0&&(Yt=2),q.morphAttributes.color!==void 0&&(Yt=3);let me,lt,kt,Zt;if(_t){let Ht=oi[_t];me=Ht.vertexShader,lt=Ht.fragmentShader}else{me=x.vertexShader,lt=x.fragmentShader;let Ht=o.getVertexShaderStage(x),ve=o.getFragmentShaderStage(x);o.update(x,Ht,ve),kt=Ht.id,Zt=ve.id}let se=i.getRenderTarget(),Gt=i.state.buffers.depth.getReversed(),ie=H.isInstancedMesh===!0,ke=H.isBatchedMesh===!0,$t=!!x.map,re=!!x.matcap,ue=!!$,mt=ue&&$.isPMREMTexture===!0,bt=!!x.aoMap,Ct=!!x.lightMap,Kt=!!x.bumpMap&&x.wireframe===!1,Ft=!!x.normalMap,Dt=!!x.displacementMap,ee=!!x.emissiveMap,Qt=!!x.metalnessMap,Te=!!x.roughnessMap,Fe=x.anisotropy>0,k=x.clearcoat>0,Ge=x.diffuseRoughness>0,ge=x.dispersion>0,Ae=x.retroreflectivity>0,Nt=x.iridescence>0,Le=x.sheen>0,K=x.transmission>0,he=Fe&&!!x.anisotropyMap,P=k&&!!x.clearcoatMap,S=k&&!!x.clearcoatNormalMap,J=k&&!!x.clearcoatRoughnessMap,wt=Ge&&!!x.diffuseRoughnessMap,pt=Nt&&!!x.iridescenceMap,Pt=Nt&&!!x.iridescenceThicknessMap,Bt=Le&&!!x.sheenColorMap,ct=Le&&!!x.sheenRoughnessMap,Y=!!x.specularMap,It=!!x.specularColorMap,Vt=!!x.specularIntensityMap,U=K&&!!x.transmissionMap,rt=K&&!!x.thicknessMap,Mt=!!x.gradientMap,Et=!!x.alphaMap,Ut=x.alphaTest>0,zt=!!x.alphaHash,ae=!!x.extensions,St=ri;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(St=i.toneMapping);let ye=mt?$.isCompressedCubeTexture?$.image[0].mipmaps:$.mipmaps:null,ne={shaderID:_t,shaderType:x.type,shaderName:x.name,vertexShader:me,fragmentShader:lt,defines:x.defines,customVertexShaderID:kt,customFragmentShaderID:Zt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:st,batching:ke,batchingColor:ke&&H._colorsTexture!==null,instancing:ie,instancingColor:ie&&H.instanceColor!==null,instancingMorph:ie&&H.morphTexture!==null,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ie.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:$t,matcap:re,envMap:ue,envMapMode:ue&&$.mapping,envMapPMREM:mt,envMapMaxLod:mt?ye.length-1:null,envMapSize:mt?ye[0].width:null,aoMap:bt,lightMap:Ct,bumpMap:Kt,normalMap:Ft,displacementMap:Dt,emissiveMap:ee,normalMapObjectSpace:Ft&&x.normalMapType===du,normalMapTangentSpace:Ft&&x.normalMapType===$r,packedNormalMap:Ft&&x.normalMapType===$r&&qg(x.normalMap.format),metalnessMap:Qt,roughnessMap:Te,anisotropy:Fe,anisotropyMap:he,clearcoat:k,clearcoatMap:P,clearcoatNormalMap:S,clearcoatRoughnessMap:J,diffuseRoughness:Ge,diffuseRoughnessMap:wt,dispersion:ge,retroreflection:Ae,iridescence:Nt,iridescenceMap:pt,iridescenceThicknessMap:Pt,sheen:Le,sheenColorMap:Bt,sheenRoughnessMap:ct,specularMap:Y,specularColorMap:It,specularIntensityMap:Vt,transmission:K,transmissionMap:U,thicknessMap:rt,gradientMap:Mt,opaque:x.transparent===!1&&x.blending===Os&&x.alphaToCoverage===!1,alphaMap:Et,alphaTest:Ut,alphaHash:zt,combine:x.combine,mapUv:$t&&u(x.map.channel),aoMapUv:bt&&u(x.aoMap.channel),lightMapUv:Ct&&u(x.lightMap.channel),bumpMapUv:Kt&&u(x.bumpMap.channel),normalMapUv:Ft&&u(x.normalMap.channel),displacementMapUv:Dt&&u(x.displacementMap.channel),emissiveMapUv:ee&&u(x.emissiveMap.channel),metalnessMapUv:Qt&&u(x.metalnessMap.channel),roughnessMapUv:Te&&u(x.roughnessMap.channel),anisotropyMapUv:he&&u(x.anisotropyMap.channel),clearcoatMapUv:P&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:wt&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:pt&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:ct&&u(x.sheenRoughnessMap.channel),specularMapUv:Y&&u(x.specularMap.channel),specularColorMapUv:It&&u(x.specularColorMap.channel),specularIntensityMapUv:Vt&&u(x.specularIntensityMap.channel),transmissionMapUv:U&&u(x.transmissionMap.channel),thicknessMapUv:rt&&u(x.thicknessMap.channel),alphaMapUv:Et&&u(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ft||Fe),vertexNormals:!!q.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&($t||Et),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||q.attributes.normal===void 0&&Ft===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Gt,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Ot,morphTextureStride:Yt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbeGrids:W.filter(Ht=>Ht.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:St,decodeVideoTexture:$t&&x.map.isVideoTexture===!0&&Ie.getTransfer(x.map.colorSpace)===ze,decodeVideoTextureEmissive:ee&&x.emissiveMap.isVideoTexture===!0&&Ie.getTransfer(x.emissiveMap.colorSpace)===ze,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Xe,flipSided:x.side===ln,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ae&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&x.extensions.multiDraw===!0||ke)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ne.vertexUv1s=l.has(1),ne.vertexUv2s=l.has(2),ne.vertexUv3s=l.has(3),l.clear(),ne}function b(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let B in x.defines)A.push(B),A.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(m(A,x),f(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function m(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapPMREM),x.push(A.envMapMaxLod),x.push(A.envMapSize),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.diffuseRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbeGrids),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function f(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.diffuseRoughness&&a.enable(25),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function y(x){let A=d[x.type],B;if(A){let F=oi[A];B=Lu.clone(F.uniforms)}else B=x.uniforms;return B}function T(x,A){let B=h.get(A);return B!==void 0?++B.usedTimes:(B=new Wg(i,A,x,s),c.push(B),h.set(A,B)),B}function M(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function L(x){o.remove(x)}function R(){o.dispose()}return{getParameters:g,getProgramCacheKey:b,getUniforms:y,acquireProgram:T,releaseProgram:M,releaseShaderCache:L,programs:c,dispose:R}}function Zg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Jg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Qu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ju(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,g,b,m,f){let y=i[t];return y===void 0?(y={id:d.id,object:d,geometry:u,material:g,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:m,group:f},i[t]=y):(y.id=d.id,y.object=d,y.geometry=u,y.material=g,y.materialVariant=a(d),y.groupOrder=b,y.renderOrder=d.renderOrder,y.z=m,y.group=f),t++,y}function l(d,u,g,b,m,f,y){y.reversedDepth===!0&&(m=-m);let T=o(d,u,g,b,m,f);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):e.push(T)}function c(d,u,g,b,m,f){let y=o(d,u,g,b,m,f);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):e.unshift(y)}function h(d,u){e.length>1&&e.sort(d||Jg),n.length>1&&n.sort(u||Qu),s.length>1&&s.sort(u||Qu)}function p(){for(let d=t,u=i.length;d<u;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function $g(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new ju,i.set(n,[a])):s>=r.length?(a=new ju,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Kg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new le};break;case"SpotLight":e={position:new D,direction:new D,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Qg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var jg=0;function t_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function e_(i){let t=new Kg,e=Qg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0},s=new D,r=new Ue,a=new Ue;function o(c){let h=0,p=0,d=0,u=0,g=0,b=0,m=0,f=0,y=0,T=0,M=0,L=0,R=0,x=0,A=0,B=0;c.sort(t_);for(let H=0,W=c.length;H<W;H++){let G=c[H],q=G.color,Q=G.intensity,ot=G.distance,$=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Ui?$=G.shadow.map.texture:$=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)h+=q.r*Q,p+=q.g*Q,d+=q.b*Q;else if(G.isSunLight){let _t=t.get(G);if(_t.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){let st=G.shadow,vt=e.get(G);vt.shadowIntensity=st.intensity,vt.shadowBias=st.bias,vt.shadowNormalBias=st.normalBias,vt.shadowRadius=st.radius,vt.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),n.sunShadow[g]=vt,n.sunShadowMap[g]=$;let Ot=st.getViewportCount();for(let Yt=0;Yt<Ot;Yt++)n.sunShadowMatrix[b+Yt]=st.getMatrix(Yt),n.sunShadowCascade[b+Yt]=st._cascadeData[Yt];b+=Ot,g++}n.sun[u]=_t,u++}else if(G.isDirectionalLight){let _t=t.get(G);if(_t.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){let st=G.shadow,vt=e.get(G);vt.shadowIntensity=st.intensity,vt.shadowBias=st.bias,vt.shadowNormalBias=st.normalBias,vt.shadowRadius=st.radius,vt.shadowMapSize=st.mapSize,n.directionalShadow[m]=vt,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=G.shadow.matrix,L++}n.directional[m]=_t,m++}else if(G.isSpotLight){let _t=t.get(G);_t.position.setFromMatrixPosition(G.matrixWorld),_t.color.copy(q).multiplyScalar(Q),_t.distance=ot,_t.coneCos=Math.cos(G.angle),_t.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),_t.decay=G.decay,n.spot[y]=_t;let st=G.shadow;if(G.map&&(n.spotLightMap[A]=G.map,A++,st.updateMatrices(G),G.castShadow&&B++),n.spotLightMatrix[y]=st.matrix,G.castShadow){let vt=e.get(G);vt.shadowIntensity=st.intensity,vt.shadowBias=st.bias,vt.shadowNormalBias=st.normalBias,vt.shadowRadius=st.radius,vt.shadowMapSize=st.mapSize,n.spotShadow[y]=vt,n.spotShadowMap[y]=$,x++}y++}else if(G.isRectAreaLight){let _t=t.get(G);_t.color.copy(q).multiplyScalar(Q),_t.halfWidth.set(G.width*.5,0,0),_t.halfHeight.set(0,G.height*.5,0),n.rectArea[T]=_t,T++}else if(G.isPointLight){let _t=t.get(G);if(_t.color.copy(G.color).multiplyScalar(G.intensity),_t.distance=G.distance,_t.decay=G.decay,G.castShadow){let st=G.shadow,vt=e.get(G);vt.shadowIntensity=st.intensity,vt.shadowBias=st.bias,vt.shadowNormalBias=st.normalBias,vt.shadowRadius=st.radius,vt.shadowMapSize=st.mapSize,vt.shadowCameraNear=st.camera.near,vt.shadowCameraFar=st.camera.far,n.pointShadow[f]=vt,n.pointShadowMap[f]=$,n.pointShadowMatrix[f]=G.shadow.matrix,R++}n.point[f]=_t,f++}else if(G.isHemisphereLight){let _t=t.get(G);_t.skyColor.copy(G.color).multiplyScalar(Q),_t.groundColor.copy(G.groundColor).multiplyScalar(Q),n.hemi[M]=_t,M++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Xt.LTC_FLOAT_1,n.rectAreaLTC2=Xt.LTC_FLOAT_2):(n.rectAreaLTC1=Xt.LTC_HALF_1,n.rectAreaLTC2=Xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=d;let F=n.hash;(F.sunLength!==u||F.directionalLength!==m||F.pointLength!==f||F.spotLength!==y||F.rectAreaLength!==T||F.hemiLength!==M||F.numSunShadows!==g||F.numDirectionalShadows!==L||F.numPointShadows!==R||F.numSpotShadows!==x||F.numSpotMaps!==A)&&(n.sun.length=u,n.directional.length=m,n.spot.length=y,n.rectArea.length=T,n.point.length=f,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=L,n.directionalShadowMap.length=L,n.directionalShadowMatrix.length=L,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+A-B,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=B,F.sunLength=u,F.directionalLength=m,F.pointLength=f,F.spotLength=y,F.rectAreaLength=T,F.hemiLength=M,F.numSunShadows=g,F.numDirectionalShadows=L,F.numPointShadows=R,F.numSpotShadows=x,F.numSpotMaps=A,n.version=jg++)}function l(c,h){let p=0,d=0,u=0,g=0,b=0,m=0,f=h.matrixWorldInverse;for(let y=0,T=c.length;y<T;y++){let M=c[y];if(M.isSunLight){let L=n.sun[p];L.direction.setFromMatrixPosition(M.matrixWorld),L.direction.transformDirection(f),p++}else if(M.isDirectionalLight){let L=n.directional[d];L.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(f),d++}else if(M.isSpotLight){let L=n.spot[g];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(f),L.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(f),g++}else if(M.isRectAreaLight){let L=n.rectArea[b];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(f),a.identity(),r.copy(M.matrixWorld),r.premultiply(f),a.extractRotation(r),L.halfWidth.set(M.width*.5,0,0),L.halfHeight.set(0,M.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),b++}else if(M.isPointLight){let L=n.point[u];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(f),u++}else if(M.isHemisphereLight){let L=n.hemi[m];L.direction.setFromMatrixPosition(M.matrixWorld),L.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:n}}function td(i){let t=new e_(i),e=[],n=[],s=[];function r(p){h.camera=p,e.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):e.push(p)}function o(p){n.push(p)}function l(){t.setup(e),s.sort((p,d)=>p.priority-d.priority||p.id-d.id)}function c(p){t.setupView(e,p)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function n_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new td(i),t.set(s,[o])):r>=a.length?(o=new td(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var i_=`void main() {
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
}`,r_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],a_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],ed=new Ue,Kr=new D,Xc=new D;function o_(i,t,e){let n=new Ri,s=new nt,r=new nt,a=new Ye,o=new ho,l=new uo,c={},h=e.maxTextureSize,p={[Ni]:ln,[ln]:Ni,[Xe]:Xe},d=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:i_,fragmentShader:s_}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new Oe;g.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new yt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ki;let f=this.type;this.render=function(R,x,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===Hh&&(ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ki);let B=i.getRenderTarget(),F=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Qi),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let G=f!==this.type;G&&x.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(Q=>Q.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,Q=R.length;q<Q;q++){let ot=R[q],$=ot.shadow;if($===void 0){ce("WebGLShadowMap:",ot,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let _t=$.getFrameExtents();s.multiply(_t),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/_t.x),s.x=r.x*_t.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/_t.y),s.y=r.y*_t.y,$.mapSize.y=r.y));let st=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=st,$.map===null||G===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Us){if(ot.isPointLight){ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new bn(s.x,s.y,{format:Ui,type:Wn,minFilter:_n,magFilter:_n,generateMipmaps:!1}),$.map.texture.name=ot.name+".shadowMap",$.map.depthTexture=new _i(s.x,s.y,Ln),$.map.depthTexture.name=ot.name+".shadowMapDepth",$.map.depthTexture.format=gi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=on,$.map.depthTexture.magFilter=on}else ot.isPointLight?($.map=new jr(s.x),$.map.depthTexture=new br(s.x,Hn)):($.map=new bn(s.x,s.y),$.map.depthTexture=new _i(s.x,s.y,Hn)),$.map.depthTexture.name=ot.name+".shadowMap",$.map.depthTexture.format=gi,this.type===Ki?($.map.depthTexture.compareFunction=st?Ic:Rc,$.map.depthTexture.minFilter=_n,$.map.depthTexture.magFilter=_n):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=on,$.map.depthTexture.magFilter=on);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let vt=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();ot.isPointLight!==!0&&$.updateMatrices(ot,A);let Ot=($.camera.layers.mask&4294967294)!==0?$.camera.layers:A.layers;for(let Yt=0;Yt<vt;Yt++){let me=$.getCamera(Yt);if(ot.isPointLight){let lt=$.camera,kt=$.matrix,Zt=ot.distance||lt.far;Zt!==lt.far&&(lt.far=Zt,lt.updateProjectionMatrix()),Kr.setFromMatrixPosition(ot.matrixWorld),lt.position.copy(Kr),Xc.copy(lt.position),Xc.add(r_[Yt]),lt.up.copy(a_[Yt]),lt.lookAt(Xc),lt.updateMatrixWorld(),kt.makeTranslation(-Kr.x,-Kr.y,-Kr.z),ed.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),$._frustum.setFromProjectionMatrix(ed,lt.coordinateSystem,lt.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,Yt),i.clear();else{Yt===0&&(i.setRenderTarget($.map),i.clear());let lt=$.getViewport(Yt);a.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),W.viewport(a)}n=$.getFrustum(Yt),M(x,A,me,ot,Ot,this.type)}$.isPointLightShadow!==!0&&this.type===Us&&y($,A),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(B,F,H)};function y(R,x){let A=t.update(b);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,u.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),R.mapPass===null?R.mapPass=new bn(s.x,s.y,{format:Ui,type:Wn}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(x,null,A,d,b,null),u.uniforms.shadow_pass.value=R.mapPass.texture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(x,null,A,u,b,null)}function T(R,x,A,B){let F=null,H=A.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(H!==void 0)F=H;else if(F=A.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let W=F.uuid,G=x.uuid,q=c[W];q===void 0&&(q={},c[W]=q);let Q=q[G];Q===void 0&&(Q=F.clone(),q[G]=Q,x.addEventListener("dispose",L)),F=Q}if(F.visible=x.visible,F.wireframe=x.wireframe,B===Us?F.side=x.shadowSide!==null?x.shadowSide:x.side:F.side=x.shadowSide!==null?x.shadowSide:p[x.side],F.alphaMap=x.alphaMap,F.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,F.map=x.map,F.clipShadows=x.clipShadows,F.clippingPlanes=x.clippingPlanes,F.clipIntersection=x.clipIntersection,F.displacementMap=x.displacementMap,F.displacementScale=x.displacementScale,F.displacementBias=x.displacementBias,F.wireframeLinewidth=x.wireframeLinewidth,F.linewidth=x.linewidth,A.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let W=i.properties.get(F);W.light=A}return F}function M(R,x,A,B,F,H){if(R.visible===!1)return;if(R.layers.test(F)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&H===Us)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,R.matrixWorld);let q=t.update(R),Q=R.material;if(Array.isArray(Q)){let ot=q.groups;for(let $=0,_t=ot.length;$<_t;$++){let st=ot[$],vt=Q[st.materialIndex];if(vt&&vt.visible){let Ot=T(R,vt,B,H);R.onBeforeShadow(i,R,x,A,q,Ot,st),i.renderBufferDirect(A,null,q,Ot,R,st),R.onAfterShadow(i,R,x,A,q,Ot,st)}}}else if(Q.visible){let ot=T(R,Q,B,H);R.onBeforeShadow(i,R,x,A,q,ot,null),i.renderBufferDirect(A,null,q,ot,R,null),R.onAfterShadow(i,R,x,A,q,ot,null)}}let G=R.children;for(let q=0,Q=G.length;q<Q;q++)M(G[q],x,A,B,F,H)}function L(R){R.target.removeEventListener("dispose",L);for(let A in c){let B=c[A],F=R.target.uuid;F in B&&(B[F].dispose(),delete B[F])}}}function l_(i,t){function e(){let U=!1,rt=new Ye,Mt=null,Et=new Ye(0,0,0,0);return{setMask:function(Ut){Mt!==Ut&&!U&&(i.colorMask(Ut,Ut,Ut,Ut),Mt=Ut)},setLocked:function(Ut){U=Ut},setClear:function(Ut,zt,ae,St,ye){ye===!0&&(Ut*=St,zt*=St,ae*=St),rt.set(Ut,zt,ae,St),Et.equals(rt)===!1&&(i.clearColor(Ut,zt,ae,St),Et.copy(rt))},reset:function(){U=!1,Mt=null,Et.set(-1,0,0,0)}}}function n(){let U=!1,rt=!1,Mt=null,Et=null,Ut=null;return{setReversed:function(zt){if(rt!==zt){let ae=t.get("EXT_clip_control");zt?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),rt=zt;let St=Ut;Ut=null,this.setClear(St)}},getReversed:function(){return rt},setTest:function(zt){zt?Gt(i.DEPTH_TEST):ie(i.DEPTH_TEST)},setMask:function(zt){Mt!==zt&&!U&&(i.depthMask(zt),Mt=zt)},setFunc:function(zt){if(rt&&(zt=Su[zt]),Et!==zt){switch(zt){case ka:i.depthFunc(i.NEVER);break;case Ga:i.depthFunc(i.ALWAYS);break;case Va:i.depthFunc(i.LESS);break;case bs:i.depthFunc(i.LEQUAL);break;case Ha:i.depthFunc(i.EQUAL);break;case Wa:i.depthFunc(i.GEQUAL);break;case Xa:i.depthFunc(i.GREATER);break;case qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=zt}},setLocked:function(zt){U=zt},setClear:function(zt){Ut!==zt&&(Ut=zt,rt&&(zt=1-zt),i.clearDepth(zt))},reset:function(){U=!1,Mt=null,Et=null,Ut=null,rt=!1}}}function s(){let U=!1,rt=null,Mt=null,Et=null,Ut=null,zt=null,ae=null,St=null,ye=null;return{setTest:function(ne){U||(ne?Gt(i.STENCIL_TEST):ie(i.STENCIL_TEST))},setMask:function(ne){rt!==ne&&!U&&(i.stencilMask(ne),rt=ne)},setFunc:function(ne,Ht,ve){(Mt!==ne||Et!==Ht||Ut!==ve)&&(i.stencilFunc(ne,Ht,ve),Mt=ne,Et=Ht,Ut=ve)},setOp:function(ne,Ht,ve){(zt!==ne||ae!==Ht||St!==ve)&&(i.stencilOp(ne,Ht,ve),zt=ne,ae=Ht,St=ve)},setLocked:function(ne){U=ne},setClear:function(ne){ye!==ne&&(i.clearStencil(ne),ye=ne)},reset:function(){U=!1,rt=null,Mt=null,Et=null,Ut=null,zt=null,ae=null,St=null,ye=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},p={},d={},u=new WeakMap,g=[],b=null,m=!1,f=null,y=null,T=null,M=null,L=null,R=null,x=null,A=new le(0,0,0),B=0,F=!1,H=null,W=null,G=null,q=null,Q=null,ot=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,_t=0,st=i.getParameter(i.VERSION);st.indexOf("WebGL")!==-1?(_t=parseFloat(/^WebGL (\d)/.exec(st)[1]),$=_t>=1):st.indexOf("OpenGL ES")!==-1&&(_t=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),$=_t>=2);let vt=null,Ot={},Yt=i.getParameter(i.SCISSOR_BOX),me=i.getParameter(i.VIEWPORT),lt=new Ye().fromArray(Yt),kt=new Ye().fromArray(me);function Zt(U,rt,Mt,Et){let Ut=new Uint8Array(4),zt=i.createTexture();i.bindTexture(U,zt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ae=0;ae<Mt;ae++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(rt+ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return zt}let se={};se[i.TEXTURE_2D]=Zt(i.TEXTURE_2D,i.TEXTURE_2D,1),se[i.TEXTURE_CUBE_MAP]=Zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[i.TEXTURE_2D_ARRAY]=Zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),se[i.TEXTURE_3D]=Zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Gt(i.DEPTH_TEST),a.setFunc(bs),Ft(!1),Dt(uc),Gt(i.CULL_FACE),Ct(Qi);function Gt(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function ie(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function ke(U,rt){return U===i.FRAMEBUFFER?d[i.DRAW_FRAMEBUFFER]===rt&&d[i.READ_FRAMEBUFFER]===rt?!1:(i.bindFramebuffer(i.FRAMEBUFFER,rt),d[i.DRAW_FRAMEBUFFER]=rt,d[i.READ_FRAMEBUFFER]=rt,!0):d[U]===rt?!1:(i.bindFramebuffer(U,rt),d[U]=rt,!0)}function $t(U){return U===i.FRAMEBUFFER&&(U=i.DRAW_FRAMEBUFFER),d[U]||null}function re(U,rt){let Mt=g,Et=!1;if(U){Mt=u.get(rt),Mt===void 0&&(Mt=[],u.set(rt,Mt));let Ut=U.textures;if(Mt.length!==Ut.length||Mt[0]!==i.COLOR_ATTACHMENT0){for(let zt=0,ae=Ut.length;zt<ae;zt++)Mt[zt]=i.COLOR_ATTACHMENT0+zt;Mt.length=Ut.length,Et=!0}}else Mt[0]!==i.BACK&&(Mt[0]=i.BACK,Et=!0);Et&&i.drawBuffers(Mt)}function ue(U){return b!==U?(i.useProgram(U),b=U,!0):!1}let mt={[ji]:i.FUNC_ADD,[Xh]:i.FUNC_SUBTRACT,[qh]:i.FUNC_REVERSE_SUBTRACT};mt[Yh]=i.MIN,mt[Zh]=i.MAX;let bt={[Jh]:i.ZERO,[$h]:i.ONE,[Kh]:i.SRC_COLOR,[pc]:i.SRC_ALPHA,[iu]:i.SRC_ALPHA_SATURATE,[eu]:i.DST_COLOR,[jh]:i.DST_ALPHA,[Qh]:i.ONE_MINUS_SRC_COLOR,[mc]:i.ONE_MINUS_SRC_ALPHA,[nu]:i.ONE_MINUS_DST_COLOR,[tu]:i.ONE_MINUS_DST_ALPHA,[su]:i.CONSTANT_COLOR,[ru]:i.ONE_MINUS_CONSTANT_COLOR,[au]:i.CONSTANT_ALPHA,[ou]:i.ONE_MINUS_CONSTANT_ALPHA};function Ct(U,rt,Mt,Et,Ut,zt,ae,St,ye,ne){if(U===Qi){m===!0&&(ie(i.BLEND),m=!1);return}if(m===!1&&(Gt(i.BLEND),m=!0),U!==Wh){if(U!==f||ne!==F){if((y!==ji||L!==ji)&&(i.blendEquation(i.FUNC_ADD),y=ji,L=ji),ne)switch(U){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case si:i.blendFunc(i.ONE,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:fe("WebGLState: Invalid blending: ",U);break}else switch(U){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dc:fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fc:fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:fe("WebGLState: Invalid blending: ",U);break}T=null,M=null,R=null,x=null,A.set(0,0,0),B=0,f=U,F=ne}return}Ut=Ut||rt,zt=zt||Mt,ae=ae||Et,(rt!==y||Ut!==L)&&(i.blendEquationSeparate(mt[rt],mt[Ut]),y=rt,L=Ut),(Mt!==T||Et!==M||zt!==R||ae!==x)&&(i.blendFuncSeparate(bt[Mt],bt[Et],bt[zt],bt[ae]),T=Mt,M=Et,R=zt,x=ae),(St.equals(A)===!1||ye!==B)&&(i.blendColor(St.r,St.g,St.b,ye),A.copy(St),B=ye),f=U,F=!1}function Kt(U,rt){U.side===Xe?ie(i.CULL_FACE):Gt(i.CULL_FACE);let Mt=U.side===ln;rt&&(Mt=!Mt),Ft(Mt),U.blending===Os&&U.transparent===!1?Ct(Qi):Ct(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let Et=U.stencilWrite;o.setTest(Et),Et&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Qt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Gt(i.SAMPLE_ALPHA_TO_COVERAGE):ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(U){H!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),H=U)}function Dt(U){U!==Gh?(Gt(i.CULL_FACE),U!==W&&(U===uc?i.cullFace(i.BACK):U===Vh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ie(i.CULL_FACE),W=U}function ee(U){U!==G&&($&&i.lineWidth(U),G=U)}function Qt(U,rt,Mt){U?(Gt(i.POLYGON_OFFSET_FILL),(q!==rt||Q!==Mt)&&(q=rt,Q=Mt,a.getReversed()&&(rt=-rt,Mt=-Mt),i.polygonOffset(rt,Mt))):ie(i.POLYGON_OFFSET_FILL)}function Te(U){U?Gt(i.SCISSOR_TEST):ie(i.SCISSOR_TEST)}function Fe(U){U===void 0&&(U=i.TEXTURE0+ot-1),vt!==U&&(i.activeTexture(U),vt=U)}function k(U,rt,Mt){Mt===void 0&&(vt===null?Mt=i.TEXTURE0+ot-1:Mt=vt);let Et=Ot[Mt];Et===void 0&&(Et={type:void 0,texture:void 0},Ot[Mt]=Et),(Et.type!==U||Et.texture!==rt)&&(vt!==Mt&&(i.activeTexture(Mt),vt=Mt),i.bindTexture(U,rt||se[U]),Et.type=U,Et.texture=rt)}function Ge(){let U=Ot[vt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ge(){try{i.compressedTexImage2D(...arguments)}catch(U){fe("WebGLState:",U)}}function Ae(){try{i.compressedTexImage3D(...arguments)}catch(U){fe("WebGLState:",U)}}function Nt(){try{i.texSubImage2D(...arguments)}catch(U){fe("WebGLState:",U)}}function Le(){try{i.texSubImage3D(...arguments)}catch(U){fe("WebGLState:",U)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(U){fe("WebGLState:",U)}}function he(){try{i.compressedTexSubImage3D(...arguments)}catch(U){fe("WebGLState:",U)}}function P(){try{i.texStorage2D(...arguments)}catch(U){fe("WebGLState:",U)}}function S(){try{i.texStorage3D(...arguments)}catch(U){fe("WebGLState:",U)}}function J(){try{i.texImage2D(...arguments)}catch(U){fe("WebGLState:",U)}}function wt(){try{i.texImage3D(...arguments)}catch(U){fe("WebGLState:",U)}}function pt(U){return p[U]!==void 0?p[U]:i.getParameter(U)}function Pt(U,rt){p[U]!==rt&&(i.pixelStorei(U,rt),p[U]=rt)}function Bt(U){lt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),lt.copy(U))}function ct(U){kt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),kt.copy(U))}function Y(U,rt){let Mt=c.get(rt);Mt===void 0&&(Mt=new WeakMap,c.set(rt,Mt));let Et=Mt.get(U);Et===void 0&&(Et=i.getUniformBlockIndex(rt,U.name),i.uniformBlockBinding(rt,Et,Et),Mt.set(U,Et))}function It(U,rt,Mt){let Ut=c.get(rt).get(U);l[Ut]!==Mt&&(i.bindBufferBase(i.UNIFORM_BUFFER,Ut,Mt),l[Ut]=Mt)}function Vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},vt=null,Ot={},d={},l={},u=new WeakMap,g=[],b=null,m=!1,f=null,y=null,T=null,M=null,L=null,R=null,x=null,A=new le(0,0,0),B=0,F=!1,H=null,W=null,G=null,q=null,Q=null,lt.set(0,0,i.canvas.width,i.canvas.height),kt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Gt,disable:ie,bindFramebuffer:ke,getBoundFramebuffer:$t,drawBuffers:re,useProgram:ue,setBlending:Ct,setMaterial:Kt,setFlipSided:Ft,setCullFace:Dt,setLineWidth:ee,setPolygonOffset:Qt,setScissorTest:Te,activeTexture:Fe,bindTexture:k,unbindTexture:Ge,compressedTexImage2D:ge,compressedTexImage3D:Ae,texImage2D:J,texImage3D:wt,pixelStorei:Pt,getParameter:pt,updateUBOMapping:Y,uniformBlockBinding:It,texStorage2D:P,texStorage3D:S,texSubImage2D:Nt,texSubImage3D:Le,compressedTexSubImage2D:K,compressedTexSubImage3D:he,scissor:Bt,viewport:ct,reset:Vt}}function c_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap,p=new Set,d,u=new WeakMap,g=new Set,b=new FinalizationRegistry(P=>g.delete(P)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(P,S){return m?new OffscreenCanvas(P,S):lr("canvas")}function y(P,S,J){let wt=1,pt=he(P);if((pt.width>J||pt.height>J)&&(wt=J/Math.max(pt.width,pt.height)),wt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Pt=Math.floor(wt*pt.width),Bt=Math.floor(wt*pt.height);d===void 0&&(d=f(Pt,Bt));let ct=S?f(Pt,Bt):d;return ct.width=Pt,ct.height=Bt,ct.getContext("2d").drawImage(P,0,0,Pt,Bt),ce("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+Pt+"x"+Bt+")."),ct}else return"data"in P&&ce("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),P;return P}function T(P){return P.generateMipmaps}function M(P){i.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(P,S,J,wt,pt,Pt=!1){if(P!==null){if(i[P]!==void 0)return i[P];ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Bt;wt&&(Bt=t.get("EXT_texture_norm16"),Bt||ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ct=S;if(S===i.RED&&(J===i.FLOAT&&(ct=i.R32F),J===i.HALF_FLOAT&&(ct=i.R16F),J===i.UNSIGNED_BYTE&&(ct=i.R8),J===i.UNSIGNED_SHORT&&Bt&&(ct=Bt.R16_EXT),J===i.SHORT&&Bt&&(ct=Bt.R16_SNORM_EXT)),S===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(ct=i.R8UI),J===i.UNSIGNED_SHORT&&(ct=i.R16UI),J===i.UNSIGNED_INT&&(ct=i.R32UI),J===i.BYTE&&(ct=i.R8I),J===i.SHORT&&(ct=i.R16I),J===i.INT&&(ct=i.R32I)),S===i.RG&&(J===i.FLOAT&&(ct=i.RG32F),J===i.HALF_FLOAT&&(ct=i.RG16F),J===i.UNSIGNED_BYTE&&(ct=i.RG8),J===i.UNSIGNED_SHORT&&Bt&&(ct=Bt.RG16_EXT),J===i.SHORT&&Bt&&(ct=Bt.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(ct=i.RG8UI),J===i.UNSIGNED_SHORT&&(ct=i.RG16UI),J===i.UNSIGNED_INT&&(ct=i.RG32UI),J===i.BYTE&&(ct=i.RG8I),J===i.SHORT&&(ct=i.RG16I),J===i.INT&&(ct=i.RG32I)),S===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(ct=i.RGB8UI),J===i.UNSIGNED_SHORT&&(ct=i.RGB16UI),J===i.UNSIGNED_INT&&(ct=i.RGB32UI),J===i.BYTE&&(ct=i.RGB8I),J===i.SHORT&&(ct=i.RGB16I),J===i.INT&&(ct=i.RGB32I)),S===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(ct=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(ct=i.RGBA16UI),J===i.UNSIGNED_INT&&(ct=i.RGBA32UI),J===i.BYTE&&(ct=i.RGBA8I),J===i.SHORT&&(ct=i.RGBA16I),J===i.INT&&(ct=i.RGBA32I)),S===i.RGB&&(J===i.UNSIGNED_SHORT&&Bt&&(ct=Bt.RGB16_EXT),J===i.SHORT&&Bt&&(ct=Bt.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(ct=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(ct=i.R11F_G11F_B10F)),S===i.RGBA){let Y=Pt?or:Ie.getTransfer(pt);J===i.FLOAT&&(ct=i.RGBA32F),J===i.HALF_FLOAT&&(ct=i.RGBA16F),J===i.UNSIGNED_BYTE&&(ct=Y===ze?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&Bt&&(ct=Bt.RGBA16_EXT),J===i.SHORT&&Bt&&(ct=Bt.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)}return(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function x(P,S){let J;return P?S===null||S===Hn||S===es?J=i.DEPTH24_STENCIL8:S===Ln?J=i.DEPTH32F_STENCIL8:S===zs&&(J=i.DEPTH24_STENCIL8,ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Hn||S===es?J=i.DEPTH_COMPONENT24:S===Ln?J=i.DEPTH_COMPONENT32F:S===zs&&(J=i.DEPTH_COMPONENT16),J}function A(P,S){return T(P)===!0||P.isFramebufferTexture&&P.minFilter!==on&&P.minFilter!==_n?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function B(P){let S=new WeakRef(P);n.get(P).__ref=S,g.add(S),b.register(P,S,S)}function F(P){let S=n.get(P).__ref;S!==void 0&&(g.delete(S),b.unregister(S))}function H(P){G(P.target)}function W(P){q(P.target)}function G(P){P.removeEventListener("dispose",H),F(P),ot(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&p.delete(P)}function q(P){P.removeEventListener("dispose",W),F(P),_t(P)}function Q(){for(let P of g){let S=P.deref();S!==void 0&&(S.isRenderTarget===!0?q(S):G(S))}g.clear(),p.clear()}function ot(P){let S=n.get(P);if(S.__webglInit===void 0)return;let J=P.source,wt=u.get(J);if(wt){let pt=wt[S.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&$(P),Object.keys(wt).length===0&&u.delete(J)}n.remove(P)}function $(P){let S=n.get(P);i.deleteTexture(S.__webglTexture);let J=P.source,wt=u.get(J);delete wt[S.__cacheKey],a.memory.textures--}function _t(P){let S=n.get(P);S.__depthDisposeCallback&&S.__depthDisposeCallback();let J=P.depthTexture;if(J&&J.renderTarget===P&&G(J),P.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(S.__webglFramebuffer[pt]))for(let Pt=0;Pt<S.__webglFramebuffer[pt].length;Pt++)i.deleteFramebuffer(S.__webglFramebuffer[pt][Pt]);else i.deleteFramebuffer(S.__webglFramebuffer[pt]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[pt])}else{if(Array.isArray(S.__webglFramebuffer))for(let pt=0;pt<S.__webglFramebuffer.length;pt++)i.deleteFramebuffer(S.__webglFramebuffer[pt]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let pt=0;pt<S.__webglColorRenderbuffer.length;pt++)S.__webglColorRenderbuffer[pt]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[pt]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let wt=P.textures;for(let pt=0,Pt=wt.length;pt<Pt;pt++){let Bt=n.get(wt[pt]);Bt.__webglTexture&&(i.deleteTexture(Bt.__webglTexture),a.memory.textures--),n.remove(wt[pt])}n.remove(P)}let st=0;function vt(){st=0}function Ot(){return st}function Yt(P){st=P}function me(){let P=st;return P>=s.maxTextures&&ce("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),st+=1,P}function lt(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.mipmapsAutoUpdate),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function kt(P,S){let J=n.get(P);if(P.isVideoTexture&&Le(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&J.__version!==P.version){let wt=P.image;if(wt===null)ce("WebGLRenderer: Texture marked for update but no image data found.");else if(wt.complete===!1)ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(J,P,S);return}}else P.isExternalTexture&&(J.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+S)}function Zt(P,S){let J=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){Ct(J,P,S);return}else P.isExternalTexture&&(J.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+S)}function se(P,S){let J=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){Ct(J,P,S);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+S)}function Gt(P,S){let J=n.get(P);if(P.version>0&&J.__version!==P.version){Kt(J,P,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+S)}let ie={[ws]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[Ya]:i.MIRRORED_REPEAT},ke={[on]:i.NEAREST,[hu]:i.NEAREST_MIPMAP_NEAREST,[Hr]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[Ro]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},$t={[pu]:i.NEVER,[Pc]:i.ALWAYS,[mu]:i.LESS,[Rc]:i.LEQUAL,[gu]:i.EQUAL,[Ic]:i.GEQUAL,[_u]:i.GREATER,[xu]:i.NOTEQUAL};function re(P,S){if(S.type===Ln&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===_n||S.magFilter===Ro||S.magFilter===Hr||S.magFilter===Mi||S.minFilter===_n||S.minFilter===Ro||S.minFilter===Hr||S.minFilter===Mi)&&ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ie[S.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ie[S.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ie[S.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ke[S.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ke[S.minFilter]),S.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,$t[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===on||S.minFilter!==Hr&&S.minFilter!==Mi||S.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ue(P,S){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",H),B(S));let wt=S.source,pt=u.get(wt);pt===void 0&&(pt={},u.set(wt,pt));let Pt=lt(S);if(Pt!==P.__cacheKey){pt[Pt]===void 0&&(pt[Pt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),pt[Pt].usedTimes++;let Bt=pt[P.__cacheKey];Bt!==void 0&&(pt[P.__cacheKey].usedTimes--,Bt.usedTimes===0&&$(S)),P.__cacheKey=Pt,P.__webglTexture=pt[Pt].texture}return J}function mt(P,S,J){return Math.floor(Math.floor(P/J)/S)}function bt(P,S,J,wt){let Pt=P.updateRanges;if(Pt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,J,wt,S.data);else{Pt.sort((Vt,U)=>Vt.start-U.start);let Bt=0;for(let Vt=1;Vt<Pt.length;Vt++){let U=Pt[Bt],rt=Pt[Vt],Mt=U.start+U.count,Et=mt(rt.start,S.width,4),Ut=mt(U.start,S.width,4);rt.start<=Mt+1&&Et===Ut&&mt(rt.start+rt.count-1,S.width,4)===Et?U.count=Math.max(U.count,rt.start+rt.count-U.start):(++Bt,Pt[Bt]=rt)}Pt.length=Bt+1;let ct=e.getParameter(i.UNPACK_ROW_LENGTH),Y=e.getParameter(i.UNPACK_SKIP_PIXELS),It=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Vt=0,U=Pt.length;Vt<U;Vt++){let rt=Pt[Vt],Mt=Math.floor(rt.start/4),Et=Math.ceil(rt.count/4),Ut=Mt%S.width,zt=Math.floor(Mt/S.width),ae=Et,St=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,zt),e.texSubImage2D(i.TEXTURE_2D,0,Ut,zt,ae,St,J,wt,S.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ct),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Y),e.pixelStorei(i.UNPACK_SKIP_ROWS,It)}}function Ct(P,S,J){let wt=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(wt=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(wt=i.TEXTURE_3D);let pt=ue(P,S),Pt=S.source;e.bindTexture(wt,P.__webglTexture,i.TEXTURE0+J);let Bt=n.get(Pt);if(Pt.version!==Bt.__version||pt===!0){if(e.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let St=Ie.getPrimaries(Ie.workingColorSpace),ye=S.colorSpace===bi?null:Ie.getPrimaries(S.colorSpace),ne=S.colorSpace===bi||St===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne)}e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let Y=y(S.image,!1,s.maxTextureSize);Y=K(S,Y);let It=r.convert(S.format,S.colorSpace),Vt=r.convert(S.type),U=R(S.internalFormat,It,Vt,S.normalized,S.colorSpace,S.isVideoTexture);re(wt,S);let rt,Mt=S.mipmaps,Et=S.isVideoTexture!==!0,Ut=Bt.__version===void 0||pt===!0,zt=Pt.dataReady,ae=A(S,Y);if(S.isDepthTexture)U=x(S.format===Si,S.type),Ut&&(Et?e.texStorage2D(i.TEXTURE_2D,1,U,Y.width,Y.height):e.texImage2D(i.TEXTURE_2D,0,U,Y.width,Y.height,0,It,Vt,null));else if(S.isDataTexture)if(Mt.length>0){Et&&Ut&&e.texStorage2D(i.TEXTURE_2D,ae,U,Mt[0].width,Mt[0].height);for(let St=0,ye=Mt.length;St<ye;St++)rt=Mt[St],Et?zt&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,rt.width,rt.height,It,Vt,rt.data):e.texImage2D(i.TEXTURE_2D,St,U,rt.width,rt.height,0,It,Vt,rt.data);S.generateMipmaps=!1}else Et?(Ut&&e.texStorage2D(i.TEXTURE_2D,ae,U,Y.width,Y.height),zt&&bt(S,Y,It,Vt)):e.texImage2D(i.TEXTURE_2D,0,U,Y.width,Y.height,0,It,Vt,Y.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Et&&Ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ae,U,Mt[0].width,Mt[0].height,Y.depth);for(let St=0,ye=Mt.length;St<ye;St++)if(rt=Mt[St],S.format!==Xn)if(It!==null)if(Et){if(zt)if(S.layerUpdates.size>0){let ne=Bc(rt.width,rt.height,S.format,S.type);for(let Ht of S.layerUpdates){let ve=rt.data.subarray(Ht*ne/rt.data.BYTES_PER_ELEMENT,(Ht+1)*ne/rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,Ht,rt.width,rt.height,1,It,ve)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,rt.width,rt.height,Y.depth,It,rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,St,U,rt.width,rt.height,Y.depth,0,rt.data,0,0);else ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Et?zt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,St,0,0,0,rt.width,rt.height,Y.depth,It,Vt,rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,St,U,rt.width,rt.height,Y.depth,0,It,Vt,rt.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Et&&Ut&&e.texStorage2D(i.TEXTURE_2D,ae,U,Mt[0].width,Mt[0].height);for(let St=0,ye=Mt.length;St<ye;St++)rt=Mt[St],S.format!==Xn?It!==null?Et?zt&&e.compressedTexSubImage2D(i.TEXTURE_2D,St,0,0,rt.width,rt.height,It,rt.data):e.compressedTexImage2D(i.TEXTURE_2D,St,U,rt.width,rt.height,0,rt.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Et?zt&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,rt.width,rt.height,It,Vt,rt.data):e.texImage2D(i.TEXTURE_2D,St,U,rt.width,rt.height,0,It,Vt,rt.data)}else if(S.isDataArrayTexture)if(Et){if(Ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ae,U,Y.width,Y.height,Y.depth),zt)if(S.layerUpdates.size>0){let St=Bc(Y.width,Y.height,S.format,S.type);for(let ye of S.layerUpdates){let ne=Y.data.subarray(ye*St/Y.data.BYTES_PER_ELEMENT,(ye+1)*St/Y.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ye,Y.width,Y.height,1,It,Vt,ne)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,It,Vt,Y.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,U,Y.width,Y.height,Y.depth,0,It,Vt,Y.data);else if(S.isData3DTexture)Et?(Ut&&e.texStorage3D(i.TEXTURE_3D,ae,U,Y.width,Y.height,Y.depth),zt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,It,Vt,Y.data)):e.texImage3D(i.TEXTURE_3D,0,U,Y.width,Y.height,Y.depth,0,It,Vt,Y.data);else if(S.isFramebufferTexture){if(Ut)if(Et)e.texStorage2D(i.TEXTURE_2D,ae,U,Y.width,Y.height);else{let St=Y.width,ye=Y.height;for(let ne=0;ne<ae;ne++)e.texImage2D(i.TEXTURE_2D,ne,U,St,ye,0,It,Vt,null),St>>=1,ye>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let St=i.canvas;if(St.hasAttribute("layoutsubtree")||St.setAttribute("layoutsubtree","true"),Y.parentNode!==St){St.appendChild(Y),p.add(S),St.onpaint=ye=>{let ne=ye.changedElements;for(let Ht of p)ne.includes(Ht.image)&&(Ht.needsUpdate=!0)},St.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Y);else{let ne=i.RGBA,Ht=i.RGBA,ve=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ne,Ht,ve,Y)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Mt.length>0){if(Et&&Ut){let St=he(Mt[0]);e.texStorage2D(i.TEXTURE_2D,ae,U,St.width,St.height)}for(let St=0,ye=Mt.length;St<ye;St++)rt=Mt[St],Et?zt&&e.texSubImage2D(i.TEXTURE_2D,St,0,0,It,Vt,rt):e.texImage2D(i.TEXTURE_2D,St,U,It,Vt,rt);S.generateMipmaps=!1}else if(Et){if(Ut){let St=he(Y);e.texStorage2D(i.TEXTURE_2D,ae,U,St.width,St.height)}zt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,It,Vt,Y)}else e.texImage2D(i.TEXTURE_2D,0,U,It,Vt,Y);T(S)&&S.mipmapsAutoUpdate===!0&&M(wt),Bt.__version=Pt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Kt(P,S,J){if(S.image.length!==6)return;let wt=ue(P,S),pt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+J);let Pt=n.get(pt);if(pt.version!==Pt.__version||wt===!0){e.activeTexture(i.TEXTURE0+J);let Bt=Ie.getPrimaries(Ie.workingColorSpace),ct=S.colorSpace===bi?null:Ie.getPrimaries(S.colorSpace),Y=S.colorSpace===bi||Bt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);let It=S.isCompressedTexture||S.image[0].isCompressedTexture,Vt=S.image[0]&&S.image[0].isDataTexture,U=[];for(let Ht=0;Ht<6;Ht++)!It&&!Vt?U[Ht]=y(S.image[Ht],!0,s.maxCubemapSize):U[Ht]=Vt?S.image[Ht].image:S.image[Ht],U[Ht]=K(S,U[Ht]);let rt=U[0],Mt=r.convert(S.format,S.colorSpace),Et=r.convert(S.type),Ut=R(S.internalFormat,Mt,Et,S.normalized,S.colorSpace),zt=S.isVideoTexture!==!0,ae=Pt.__version===void 0||wt===!0,St=pt.dataReady,ye=A(S,rt);re(i.TEXTURE_CUBE_MAP,S);let ne;if(S.isDepthTexture){if(Ut=x(S.format===Si,S.type),ae)if(zt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Ut,rt.width,rt.height);else for(let Ht=0;Ht<6;Ht++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Ut,rt.width,rt.height,0,Mt,Et,null)}else if(It){zt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ut,rt.width,rt.height);for(let Ht=0;Ht<6;Ht++){ne=U[Ht].mipmaps;for(let ve=0;ve<ne.length;ve++){let Qe=ne[ve];S.format!==Xn?Mt!==null?zt?St&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,ve,0,0,Qe.width,Qe.height,Mt,Qe.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,ve,Ut,Qe.width,Qe.height,0,Qe.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,ve,0,0,Qe.width,Qe.height,Mt,Et,Qe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,ve,Ut,Qe.width,Qe.height,0,Mt,Et,Qe.data)}}}else{if(ne=S.mipmaps,zt&&ae){ne.length>0&&ye++;let Ht=he(U[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ut,Ht.width,Ht.height)}for(let Ht=0;Ht<6;Ht++)if(Vt){zt?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,0,0,U[Ht].width,U[Ht].height,Mt,Et,U[Ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Ut,U[Ht].width,U[Ht].height,0,Mt,Et,U[Ht].data);for(let ve=0;ve<ne.length;ve++){let Fn=ne[ve].image[Ht].image;zt?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,ve+1,0,0,Fn.width,Fn.height,Mt,Et,Fn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,ve+1,Ut,Fn.width,Fn.height,0,Mt,Et,Fn.data)}}else{zt?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,0,0,Mt,Et,U[Ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Ut,Mt,Et,U[Ht]);for(let ve=0;ve<ne.length;ve++){let Qe=ne[ve];zt?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,ve+1,0,0,Mt,Et,Qe.image[Ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,ve+1,Ut,Mt,Et,Qe.image[Ht])}}}T(S)&&S.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),Pt.__version=pt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Ft(P,S,J,wt,pt,Pt){let Bt=r.convert(J.format,J.colorSpace),ct=r.convert(J.type),Y=R(J.internalFormat,Bt,ct,J.normalized,J.colorSpace),It=n.get(S),Vt=n.get(J);if(Vt.__renderTarget=S,!It.__hasExternalTextures){let U=Math.max(1,S.width>>Pt),rt=Math.max(1,S.height>>Pt);pt===i.TEXTURE_3D||pt===i.TEXTURE_2D_ARRAY?e.texImage3D(pt,Pt,Y,U,rt,S.depth,0,Bt,ct,null):e.texImage2D(pt,Pt,Y,U,rt,0,Bt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Nt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,wt,pt,Vt.__webglTexture,0,Ae(S)):(pt===i.TEXTURE_2D||pt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,wt,pt,Vt.__webglTexture,Pt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(P,S,J){if(i.bindRenderbuffer(i.RENDERBUFFER,P),S.depthBuffer){let wt=S.depthTexture,pt=wt&&wt.isDepthTexture?wt.type:null,Pt=x(S.stencilBuffer,pt),Bt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Nt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae(S),Pt,S.width,S.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae(S),Pt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Bt,i.RENDERBUFFER,P)}else{let wt=S.textures;for(let pt=0;pt<wt.length;pt++){let Pt=wt[pt],Bt=r.convert(Pt.format,Pt.colorSpace),ct=r.convert(Pt.type),Y=R(Pt.internalFormat,Bt,ct,Pt.normalized,Pt.colorSpace);Nt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae(S),Y,S.width,S.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae(S),Y,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ee(P,S,J){let wt=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let pt=n.get(S.depthTexture);pt.__renderTarget=S;let Pt=wt?S.depthTexture.image[0]:S.depthTexture.image;(!pt.__webglTexture||Pt.width!==S.width||Pt.height!==S.height)&&(Pt.width=S.width,Pt.height=S.height,S.depthTexture.needsUpdate=!0),wt?Gt(S.depthTexture,0):kt(S.depthTexture,0);let Bt=pt.__webglTexture,ct=Ae(S),Y=wt?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,It=S.depthTexture.format===Si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===gi)Nt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,It,Y,Bt,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,It,Y,Bt,0);else if(S.depthTexture.format===Si)Nt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,It,Y,Bt,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,It,Y,Bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qt(P){let S=n.get(P),J=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let wt=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),wt){let pt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,wt.removeEventListener("dispose",pt)};wt.addEventListener("dispose",pt),S.__depthDisposeCallback=pt}S.__boundDepthTexture=wt}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(J)for(let wt=0;wt<6;wt++)ee(S.__webglFramebuffer[wt],P,wt);else P.texture.mipmaps.length>0?ee(S.__webglFramebuffer[0],P,0):ee(S.__webglFramebuffer,P,0);else if(J){S.__webglDepthbuffer=[];for(let wt=0;wt<6;wt++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[wt]),S.__webglDepthbuffer[wt]===void 0)S.__webglDepthbuffer[wt]=i.createRenderbuffer(),Dt(S.__webglDepthbuffer[wt],P,!1);else{let pt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=S.__webglDepthbuffer[wt];i.bindRenderbuffer(i.RENDERBUFFER,Pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,Pt)}}else if(P.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Dt(S.__webglDepthbuffer,P,!1);else{let pt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,Pt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(P,S,J){let wt=n.get(P);S!==void 0&&Ft(wt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&Qt(P)}function Fe(P){let S=P.texture,J=n.get(P),wt=n.get(S);P.addEventListener("dispose",W),B(P);let pt=P.textures,Pt=P.isWebGLCubeRenderTarget===!0,Bt=pt.length>1;if(Bt||(wt.__webglTexture===void 0&&(wt.__webglTexture=i.createTexture()),wt.__version=S.version,a.memory.textures++),Pt){J.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(S.mipmaps.length>0){J.__webglFramebuffer[ct]=[];for(let Y=0;Y<S.mipmaps.length;Y++)J.__webglFramebuffer[ct][Y]=i.createFramebuffer()}else J.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(S.mipmaps.length>0){J.__webglFramebuffer=[];for(let ct=0;ct<S.mipmaps.length;ct++)J.__webglFramebuffer[ct]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Bt)for(let ct=0,Y=pt.length;ct<Y;ct++){let It=n.get(pt[ct]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Nt(P)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ct=0;ct<pt.length;ct++){let Y=pt[ct];J.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[ct]);let It=r.convert(Y.format,Y.colorSpace),Vt=r.convert(Y.type),U=R(Y.internalFormat,It,Vt,Y.normalized,Y.colorSpace,P.isXRRenderTarget===!0),rt=Ae(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,U,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,J.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(J.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Pt){e.bindTexture(i.TEXTURE_CUBE_MAP,wt.__webglTexture),re(i.TEXTURE_CUBE_MAP,S);for(let ct=0;ct<6;ct++)if(S.mipmaps.length>0)for(let Y=0;Y<S.mipmaps.length;Y++)Ft(J.__webglFramebuffer[ct][Y],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Y);else Ft(J.__webglFramebuffer[ct],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);T(S)?M(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(Bt){for(let ct=0,Y=pt.length;ct<Y;ct++){let It=pt[ct],Vt=n.get(It),U=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(U=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(U,Vt.__webglTexture),re(U,It),Ft(J.__webglFramebuffer,P,It,i.COLOR_ATTACHMENT0+ct,U,0),T(It)&&M(U)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ct=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,wt.__webglTexture),re(ct,S),S.mipmaps.length>0)for(let Y=0;Y<S.mipmaps.length;Y++)Ft(J.__webglFramebuffer[Y],P,S,i.COLOR_ATTACHMENT0,ct,Y);else Ft(J.__webglFramebuffer,P,S,i.COLOR_ATTACHMENT0,ct,0);T(S)?M(ct):S.mipmaps.length>0&&i.texParameteri(ct,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}P.depthBuffer&&Qt(P)}function k(P){let S=P.textures;for(let J=0,wt=S.length;J<wt;J++){let pt=S[J];if(T(pt)&&pt.mipmapsAutoUpdate===!0){let Pt=L(P),Bt=n.get(pt).__webglTexture;e.bindTexture(Pt,Bt),M(Pt),e.unbindTexture()}}}let Ge=[];function ge(P){if(P.samples>0){if(Nt(P)===!1){let S=P.textures,J=P.width,wt=P.height,pt=i.COLOR_BUFFER_BIT,Pt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Bt=n.get(P),ct=S.length>1;if(ct)for(let It=0;It<S.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let It=0;It<S.length;It++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(pt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(pt|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Bt.__webglColorRenderbuffer[It]);let Vt=n.get(S[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,J,wt,0,0,J,wt,pt,i.NEAREST),l===!0&&(Ge.length=0,Ge.push(i.COLOR_ATTACHMENT0+It),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Ge.push(Pt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ge))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let It=0;It<S.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,Bt.__webglColorRenderbuffer[It]);let Vt=n.get(S[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let S=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ae(P){return Math.min(s.maxSamples,P.samples)}function Nt(P){let S=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Le(P){let S=a.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function K(P,S){let J=P.colorSpace,wt=P.format,pt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||J!==ar&&J!==bi&&(Ie.getTransfer(J)===ze?(wt!==Xn||pt!==vn)&&ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):fe("WebGLTextures: Unsupported texture color space:",J)),S}function he(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=me,this.resetTextureUnits=vt,this.getTextureUnits=Ot,this.setTextureUnits=Yt,this.setTexture2D=kt,this.setTexture2DArray=Zt,this.setTexture3D=se,this.setTextureCube=Gt,this.rebindTextures=Te,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Qt,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=Nt,this.dispose=Q}function h_(i,t){function e(n,s=bi){let r,a=Ie.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===Po)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Lo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ac)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ec)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bc)return i.BYTE;if(n===wc)return i.SHORT;if(n===zs)return i.UNSIGNED_SHORT;if(n===Io)return i.INT;if(n===Hn)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===Wn)return i.HALF_FLOAT;if(n===Tc)return i.ALPHA;if(n===Cc)return i.RGB;if(n===Xn)return i.RGBA;if(n===gi)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===Fo)return i.RED;if(n===Do)return i.RED_INTEGER;if(n===Ui)return i.RG;if(n===No)return i.RG_INTEGER;if(n===Uo)return i.RGBA_INTEGER;if(n===Wr||n===Xr||n===qr||n===Yr)if(a===ze)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oo||n===Bo||n===zo||n===ko)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Go||n===Vo||n===Ho||n===Wo||n===Xo||n===Zr||n===qo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Go||n===Vo)return a===ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ho)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wo)return r.COMPRESSED_R11_EAC;if(n===Xo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Zr)return r.COMPRESSED_RG11_EAC;if(n===qo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yo||n===Zo||n===Jo||n===$o||n===Ko||n===Qo||n===jo||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yo)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zo)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jo)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$o)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ko)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qo)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jo)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===el)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===il)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rl)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===al)return a===ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ol||n===ll||n===cl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ol)return a===ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hl||n===ul||n===Jr||n===dl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===hl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var u_=`
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

}`,Qc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new wr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Pn({vertexShader:u_,fragmentShader:d_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new yt(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jc=class extends Qn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,d=null,u=null,g=null,b=typeof XRWebGLBinding<"u",m=new Qc,f={},y=e.getContextAttributes(),T=null,M=null,L=[],R=[],x=new nt,A=null,B=null,F=new dn;F.viewport=new Ye;let H=new dn;H.viewport=new Ye;let W=[F,H],G=new wo,q=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let kt=L[lt];return kt===void 0&&(kt=new Cs,L[lt]=kt),kt.getTargetRaySpace()},this.getControllerGrip=function(lt){let kt=L[lt];return kt===void 0&&(kt=new Cs,L[lt]=kt),kt.getGripSpace()},this.getHand=function(lt){let kt=L[lt];return kt===void 0&&(kt=new Cs,L[lt]=kt),kt.getHandSpace()};function ot(lt){let kt=R.indexOf(lt.inputSource);if(kt===-1)return;let Zt=L[kt];Zt!==void 0&&(Zt.update(lt.inputSource,lt.frame,c||a),Zt.dispatchEvent({type:lt.type,data:lt.inputSource}))}function $(){s.removeEventListener("select",ot),s.removeEventListener("selectstart",ot),s.removeEventListener("selectend",ot),s.removeEventListener("squeeze",ot),s.removeEventListener("squeezestart",ot),s.removeEventListener("squeezeend",ot),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",_t);for(let lt=0;lt<L.length;lt++){let kt=R[lt];kt!==null&&(R[lt]=null,L[lt].disconnect(kt))}q=null,Q=null,m.reset();for(let lt in f)delete f[lt];if(t.setRenderTarget(T),u=null,d=null,p=null,s=null,M=null,me.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(x.width,x.height,!1),B!==null){let lt=B.camera;lt.fov=B.fov,lt.zoom=B.zoom,lt.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){r=lt,n.isPresenting===!0&&ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){o=lt,n.isPresenting===!0&&ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(lt){c=lt},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",ot),s.addEventListener("selectstart",ot),s.addEventListener("selectend",ot),s.addEventListener("squeeze",ot),s.addEventListener("squeezestart",ot),s.addEventListener("squeezeend",ot),s.addEventListener("end",$),s.addEventListener("inputsourceschange",_t),y.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(x),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Zt=null,se=null,Gt=null;y.depth&&(Gt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Zt=y.stencil?Si:gi,se=y.stencil?es:Hn);let ie={colorFormat:e.RGBA8,depthFormat:Gt,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(ie),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new bn(d.textureWidth,d.textureHeight,{format:Xn,type:vn,depthTexture:new _i(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Zt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Zt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,Zt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new bn(u.framebufferWidth,u.framebufferHeight,{format:Xn,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),me.setContext(s),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function _t(lt){for(let kt=0;kt<lt.removed.length;kt++){let Zt=lt.removed[kt],se=R.indexOf(Zt);se>=0&&(R[se]=null,L[se].disconnect(Zt))}for(let kt=0;kt<lt.added.length;kt++){let Zt=lt.added[kt],se=R.indexOf(Zt);if(se===-1){for(let ie=0;ie<L.length;ie++)if(ie>=R.length){R.push(Zt),se=ie;break}else if(R[ie]===null){R[ie]=Zt,se=ie;break}if(se===-1)break}let Gt=L[se];Gt&&Gt.connect(Zt)}}function st(lt,kt){kt===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(kt.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;let kt=lt.near,Zt=lt.far;m.texture!==null&&(m.depthNear>0&&(kt=m.depthNear),m.depthFar>0&&(Zt=m.depthFar)),G.near=H.near=F.near=kt,G.far=H.far=F.far=Zt,(q!==G.near||Q!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),q=G.near,Q=G.far),G.layers.mask=lt.layers.mask|6,F.layers.mask=G.layers.mask&-5,H.layers.mask=G.layers.mask&-3;let se=lt.parent,Gt=G.cameras;st(G,se);for(let ie=0;ie<Gt.length;ie++)st(Gt[ie],se);G.projectionMatrix.copy(F.projectionMatrix),G.projectionMatrixInverse.copy(F.projectionMatrixInverse),B===null&&lt.isPerspectiveCamera&&(B={camera:lt,fov:lt.fov,zoom:lt.zoom}),vt(lt,G,se)};function vt(lt,kt,Zt){Zt===null?lt.matrix.copy(kt.matrixWorld):(lt.matrix.copy(Zt.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(kt.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(kt.projectionMatrix),lt.projectionMatrixInverse.copy(kt.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=Ja*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(lt){l=lt,d!==null&&(d.fixedFoveation=lt),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=lt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(lt){return f[lt]};let Ot=null;function Yt(lt,kt){if(h=kt.getViewerPose(c||a),g=kt,h!==null){let Zt=h.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let se=!1;Zt.length!==G.cameras.length&&(G.cameras.length=0,se=!0);for(let $t=0;$t<Zt.length;$t++){let re=Zt[$t],ue=null;if(u!==null)ue=u.getViewport(re);else{let bt=p.getViewSubImage(d,re);ue=bt.viewport,$t===0&&(t.setRenderTargetTextures(M,bt.colorTexture,bt.depthStencilTexture),t.setRenderTarget(M))}let mt=W[$t];mt===void 0&&(mt=new dn,mt.layers.enable($t),mt.viewport=new Ye,W[$t]=mt),mt.matrix.fromArray(re.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(re.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(ue.x,ue.y,ue.width,ue.height),$t===0&&(G.matrix.copy(mt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),se===!0&&G.cameras.push(mt)}let Gt=s.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){p=n.getBinding();let $t=p.getDepthInformation(Zt[0]);$t&&$t.isValid&&$t.texture&&m.init($t,s.renderState)}if(Gt&&Gt.includes("camera-access")&&b){t.state.unbindTexture(),p=n.getBinding();for(let $t=0;$t<Zt.length;$t++){let re=Zt[$t].camera;if(re){let ue=f[re];ue||(ue=new wr,f[re]=ue);let mt=p.getCameraImage(re);ue.sourceTexture=mt}}}}for(let Zt=0;Zt<L.length;Zt++){let se=R[Zt],Gt=L[Zt];se!==null&&Gt!==void 0&&Gt.update(se,kt,c||a)}Ot&&Ot(lt,kt),kt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:kt}),g=null}let me=new nd;me.setAnimationLoop(Yt),this.setAnimationLoop=function(lt){Ot=lt},this.dispose=function(){}}},f_=new Ue,dd=new xe;dd.set(-1,0,0,0,1,0,0,0,1);function p_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Nc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,T,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),p(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&u(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),b(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,T):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ln&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ln&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=t.get(f),T=y.envMap,M=y.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(f_.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(dd),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=T*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function u(m,f,y){m.ior.value=f.ior,f.diffuseRoughness>0&&(m.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=f.diffuseRoughnessMap,e(f.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ln&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function b(m,f){let y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function m_(i,t,e,n){let s={},r={};function a(y,T){let M=T.program;n.uniformBlockBinding(y,M,s[y.id])}function o(y,T){let M=s[y.id];M===void 0&&(g(y),M=l(y),s[y.id]=M,y.addEventListener("dispose",m));let L=T.program;n.updateUBOMapping(y,L);let R=t.render.frame;r[y.id]!==R&&(c(y),r[y.id]=R)}function l(y){let T=i.createBuffer(),M=y.__size,L=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,M,L),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function c(y){let T=s[y.id],M=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let R=0,x=M.length;R<x;R++){let A=M[R];if(Array.isArray(A))for(let B=0,F=A.length;B<F;B++)h(A[B],R,B,L);else h(A,R,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,T,M,L){if(d(y,T,M,L)===!0){let R=y.__offset,x=y.value;if(Array.isArray(x)){let A=0;for(let B=0;B<x.length;B++){let F=x[B],H=b(F,!0);p(F,y.__data,A),A+=H.storage/Float32Array.BYTES_PER_ELEMENT}}else p(x,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,R,y.__data)}}function p(y,T,M){typeof y=="number"||typeof y=="boolean"?T[M]=y:y.isMatrix3?(T[M]=y.elements[0],T[M+1]=y.elements[1],T[M+2]=y.elements[2],T[M+3]=0,T[M+4]=y.elements[3],T[M+5]=y.elements[4],T[M+6]=y.elements[5],T[M+7]=0,T[M+8]=y.elements[6],T[M+9]=y.elements[7],T[M+10]=y.elements[8],T[M+11]=0):ArrayBuffer.isView(y)?T.set(y.subarray(0,T.length-M),M):y.toArray(T,M)}function d(y,T,M,L){let R=y.value,x=T+"_"+M;if(Array.isArray(R)){L[x]===void 0&&(L[x]=[]);let A=L[x],B=!1;for(let F=0;F<R.length;F++)u(R[F],A,F)===!0&&(B=!0);return B}return u(R,L,x)}function u(y,T,M){if(T[M]===void 0)return typeof y=="number"||typeof y=="boolean"?T[M]=y:ArrayBuffer.isView(y)?T[M]=y.slice():T[M]=y.clone(),!0;{let L=T[M];if(typeof y=="number"||typeof y=="boolean"){if(L!==y)return T[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(L.equals(y)===!1)return L.copy(y),!0}}return!1}function g(y){let T=y.uniforms,M=0,L=16;for(let x=0,A=T.length;x<A;x++){let B=Array.isArray(T[x])?T[x]:[T[x]];for(let F=0,H=B.length;F<H;F++){let W=B[F],G=Array.isArray(W.value)?W.value:[W.value],q=Array.isArray(T[x])||Array.isArray(W.value),Q=M;for(let $=0,_t=G.length;$<_t;$++){let st=G[$],vt=b(st,q),Ot=M%L,Yt=Ot%vt.boundary,me=Ot+Yt;M+=Yt,me!==0&&L-me<vt.storage&&(M+=L-me),$===0&&(Q=M),M+=vt.storage}let ot=W.type==="int"?Int32Array:W.type==="uint"?Uint32Array:Float32Array;W.__data=new ot((M-Q)/Float32Array.BYTES_PER_ELEMENT),W.__offset=Q}}let R=M%L;return R>0&&(M+=L-R),y.__size=M,y.__cache={},this}function b(y,T){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):ce("WebGLRenderer: Unsupported uniform value type.",y),T===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(y){let T=y.target;T.removeEventListener("dispose",m),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function f(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:f}}var g_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ai=null;function __(){return ai===null&&(ai=new _r(g_,16,16,Ui,Wn),ai.name="DFG_LUT",ai.minFilter=_n,ai.magFilter=_n,ai.wrapS=$n,ai.wrapT=$n,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}var _l=class{constructor(t={}){let{canvas:e=vu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:u=vn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let b=u,m=new Set([Uo,No,Do]),f=new Set([vn,Hn,zs,es,Po,Lo]),y=new Uint32Array(4),T=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[],intensity:[]},L=null,R=null,x=[],A=[],B=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,H=!1,W=null,G=null,q=null,Q=null;this._outputColorSpace=gn;let ot=0,$=0,_t=null,st=-1,vt=null,Ot=new Ye,Yt=new Ye,me=null,lt=new le(0),kt=0,Zt=e.width,se=e.height,Gt=1,ie=null,ke=null,$t=new Ye(0,0,Zt,se),re=new Ye(0,0,Zt,se),ue=!1,mt=new Ri,bt=new to,Ct=!1,Kt=!1,Ft=new Ue,Dt=new D,ee=new Ye,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Fe(){return _t===null?Gt:1}let k=n;function Ge(_,C){return e.getContext(_,C)}let ge,Ae,Nt,Le,K,he,P,S,J,wt,pt,Pt,Bt,ct,Y,It,Vt,U,rt,Mt,Et,Ut,zt;try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Eo}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",ne,!1),e.addEventListener("webglcontextcreationerror",Ht,!1),k===null){let C="webgl2";if(k=Ge(C,_),k===null)throw Ge(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ae()}catch(_){throw e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",Ht,!1),fe("WebGLRenderer: "+_.message),_}function ae(){ge=new C0(k),ge.init(),Et=new h_(k,ge),Ae=new _0(k,ge,t,Et),Nt=new l_(k,ge),Ae.reversedDepthBuffer&&d&&Nt.buffers.depth.setReversed(!0),G=k.createFramebuffer(),q=k.createFramebuffer(),Q=k.createFramebuffer(),Le=new P0(k),K=new Zg,he=new c_(k,ge,Nt,K,Ae,Et,Le),P=new T0(F),S=new Ff(k),Ut=new m0(k,S),J=new R0(k,S,Le,Ut),wt=new F0(k,J,S,Ut,Le),U=new L0(k,Ae,he),Y=new x0(K),pt=new Yg(F,P,ge,Ae,Ut,Y),Pt=new p_(F,K),Bt=new $g,ct=new n_(ge),Vt=new p0(F,P,Nt,wt,g,l),It=new o_(F,wt,Ae),zt=new m_(k,Le,Ae,Nt),rt=new g0(k,ge,Le),Mt=new I0(k,ge,Le),Le.programs=pt.programs,F.capabilities=Ae,F.extensions=ge,F.properties=K,F.renderLists=Bt,F.shadowMap=It,F.state=Nt,F.info=Le}b!==vn&&(B=new N0(b,e.width,e.height,o,s,r));let St=new jc(F,k);this.xr=St,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let _=ge.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=ge.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return Gt},this.setPixelRatio=function(_){_!==void 0&&(Gt=_,this.setSize(Zt,se,!1))},this.getSize=function(_){return _.set(Zt,se)},this.setSize=function(_,C,N=!0){if(St.isPresenting){ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Zt=_,se=C,e.width=Math.floor(_*Gt),e.height=Math.floor(C*Gt),N===!0&&(e.style.width=_+"px",e.style.height=C+"px"),B!==null&&B.setSize(e.width,e.height),this.setViewport(0,0,_,C)},this.getDrawingBufferSize=function(_){return _.set(Zt*Gt,se*Gt).floor()},this.setDrawingBufferSize=function(_,C,N){Zt=_,se=C,Gt=N,e.width=Math.floor(_*N),e.height=Math.floor(C*N),this.setViewport(0,0,_,C)},this.setEffects=function(_){if(b===vn){fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let C=0;C<_.length;C++)if(_[C].isOutputPass===!0){ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(Ot)},this.getViewport=function(_){return _.copy($t)},this.setViewport=function(_,C,N,I){_.isVector4?$t.set(_.x,_.y,_.z,_.w):$t.set(_,C,N,I),Nt.viewport(Ot.copy($t).multiplyScalar(Fe()).round())},this.getScissor=function(_){return _.copy(re)},this.setScissor=function(_,C,N,I){_.isVector4?re.set(_.x,_.y,_.z,_.w):re.set(_,C,N,I),Nt.scissor(Yt.copy(re).multiplyScalar(Fe()).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(_){Nt.setScissorTest(ue=_)},this.setOpaqueSort=function(_){ie=_},this.setTransparentSort=function(_){ke=_},this.getClearColor=function(_){return _.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(_=!0,C=!0,N=!0){let I=0;if(_){let z=!1;if(_t!==null){let tt=_t.texture.format;z=m.has(tt)}if(z){let tt=_t.texture.type,xt=f.has(tt),ft=Vt.getClearColor(),at=Vt.getClearAlpha(),ut=ft.r,dt=ft.g,At=ft.b;xt?(y[0]=ut,y[1]=dt,y[2]=At,y[3]=at,k.clearBufferuiv(k.COLOR,0,y)):(T[0]=ut,T[1]=dt,T[2]=At,T[3]=at,k.clearBufferiv(k.COLOR,0,T))}else I|=k.COLOR_BUFFER_BIT}C&&(I|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),N&&(I|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I!==0&&k.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),W=_},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",Ht,!1),Vt.dispose(),Bt.dispose(),ct.dispose(),he.dispose(),K.dispose(),P.dispose(),wt.dispose(),J.dispose(),Ut.dispose(),zt.dispose(),pt.dispose(),St.dispose(),St.removeEventListener("sessionstart",ia),St.removeEventListener("sessionend",sa),yn.stop()};function ye(_){_.preventDefault(),cr("WebGLRenderer: Context Lost."),H=!0}function ne(){cr("WebGLRenderer: Context Restored."),H=!1;let _=Le.autoReset,C=It.enabled,N=It.autoUpdate,I=It.needsUpdate,z=It.type;ae(),Le.autoReset=_,It.enabled=C,It.autoUpdate=N,It.needsUpdate=I,It.type=z}function Ht(_){fe("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function ve(_){let C=_.target;C.removeEventListener("dispose",ve),Qe(C)}function Qe(_){Fn(_),K.remove(_)}function Fn(_){let C=K.get(_).programs;C!==void 0&&(C.forEach(function(N){pt.releaseProgram(N)}),_.isShaderMaterial&&pt.releaseShaderCache(_))}this.renderBufferDirect=function(_,C,N,I,z,tt){C===null&&(C=Qt);let xt=z.isMesh&&z.matrixWorld.determinantAffine()<0,ft=X(_,C,N,I,z);Nt.setMaterial(I,xt);let at=N.index,ut=1;if(I.wireframe===!0){if(at=J.getWireframeAttribute(N),at===void 0)return;ut=2}let dt=N.drawRange,At=N.attributes.position,gt=dt.start*ut,Rt=(dt.start+dt.count)*ut;tt!==null&&(gt=Math.max(gt,tt.start*ut),Rt=Math.min(Rt,(tt.start+tt.count)*ut)),at!==null?(gt=Math.max(gt,0),Rt=Math.min(Rt,at.count)):At!=null&&(gt=Math.max(gt,0),Rt=Math.min(Rt,At.count));let te=Rt-gt;if(te<0||te===1/0)return;Ut.setup(z,I,ft,N,at);let de,oe=rt;if(at!==null&&(de=S.get(at),oe=Mt,oe.setIndex(de)),z.isMesh)I.wireframe===!0?(Nt.setLineWidth(I.wireframeLinewidth*Fe()),oe.setMode(k.LINES)):oe.setMode(k.TRIANGLES);else if(z.isLine){let be=I.linewidth;be===void 0&&(be=1),Nt.setLineWidth(be*Fe()),z.isLineSegments?oe.setMode(k.LINES):z.isLineLoop?oe.setMode(k.LINE_LOOP):oe.setMode(k.LINE_STRIP)}else z.isPoints?oe.setMode(k.POINTS):z.isSprite&&oe.setMode(k.TRIANGLES);if(z.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))oe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let be=z._multiDrawStarts,Lt=z._multiDrawCounts,Re=z._multiDrawCount,Wt=at?S.get(at).bytesPerElement:1,jt=K.get(I).currentProgram.getUniforms();for(let j=0;j<Re;j++)jt.setValue(k,"_gl_DrawID",j),oe.render(be[j]/Wt,Lt[j])}else if(z.isInstancedMesh)oe.renderInstances(gt,te,z.count);else if(N.isInstancedBufferGeometry){let be=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Lt=Math.min(N.instanceCount,be);oe.renderInstances(gt,te,Lt)}else oe.render(gt,te)};function na(_,C,N,I){W!==null&&_.isNodeMaterial&&W.setObject(I,_),Ct===!0&&Y.setState(_,N,!1),_.transparent===!0&&_.side===Xe&&_.forceSinglePass===!1?(_.side=ln,_.needsUpdate=!0,v(_,C,I),_.side=Ni,_.needsUpdate=!0,v(_,C,I),_.side=Xe):v(_,C,I)}this.compile=function(_,C,N=null){N===null&&(N=_),W!==null&&W.renderStart(_,C,N),R=ct.get(N),R.init(C),A.push(R),N.traverseVisible(function(z){z.isLight&&z.layers.test(C.layers)&&(R.pushLight(z),z.castShadow&&R.pushShadow(z))}),_!==N&&_.traverseVisible(function(z){z.isLight&&z.layers.test(C.layers)&&(R.pushLight(z),z.castShadow&&R.pushShadow(z))}),R.setupLights(),W!==null&&W.updateLights(R.state.lightsArray),Kt=this.localClippingEnabled,Ct=Y.init(this.clippingPlanes,Kt),Ct===!0&&Y.setGlobalState(this.clippingPlanes,C),W!==null&&It.render(R.state.shadowsArray,N,C);let I=new Set;return _.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let tt=z.material;if(tt)if(Array.isArray(tt))for(let xt=0;xt<tt.length;xt++){let ft=tt[xt];na(ft,N,C,z),I.add(ft)}else na(tt,N,C,z),I.add(tt)}),R=A.pop(),W!==null&&W.renderEnd(),I},this.compileAsync=function(_,C,N=null){let I=this.compile(_,C,N);return new Promise(z=>{function tt(){if(I.forEach(function(xt){let at=K.get(xt).currentProgram;(at===void 0||at.isReady())&&I.delete(xt)}),I.size===0){z(_);return}setTimeout(tt,10)}ge.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Vs=null;function Al(_){Vs&&Vs(_)}function ia(){yn.stop()}function sa(){yn.start()}let yn=new nd;yn.setAnimationLoop(Al),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(_){Vs=_,St.setAnimationLoop(_),_===null?yn.stop():yn.start()},St.addEventListener("sessionstart",ia),St.addEventListener("sessionend",sa),this.render=function(_,C){if(C!==void 0&&C.isCamera!==!0){fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;W!==null&&W.renderStart(_,C);let N=St.enabled===!0&&St.isPresenting===!0,I=B!==null&&(_t===null||N)&&B.begin(F,_t);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(St.cameraAutoUpdate===!0&&St.updateCamera(C),C=St.getCamera()),_.isScene===!0&&_.onBeforeRender(F,_,C,_t),R=ct.get(_,A.length),R.init(C),R.state.textureUnits=he.getTextureUnits(),A.push(R),Ft.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),C.isArrayCamera?bt.setFromArrayCamera(C):mt.setFromProjectionMatrix(Ft,Tn,C.reversedDepth),Kt=this.localClippingEnabled,Ct=Y.init(this.clippingPlanes,Kt),L=Bt.get(_,x.length),L.init(),x.push(L),this.info.render.frame++,St.enabled===!0&&St.isPresenting===!0){let xt=F.xr.getDepthSensingMesh();xt!==null&&Hs(xt,C,-1/0,F.sortObjects)}Hs(_,C,0,F.sortObjects),L.finish(),W!==null&&W.updateLights(R.state.lightsArray),F.sortObjects===!0&&L.sort(ie,ke),Te=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,Te&&Vt.addToRenderList(L,_),this.info.autoReset===!0&&this.info.reset(),Ct===!0&&Y.beginShadows();let z=R.state.shadowsArray;if(It.render(z,_,C),Ct===!0&&Y.endShadows(),(I&&B.hasRenderPass())===!1){let xt=L.opaque,ft=L.transmissive;if(R.setupLights(),C.isArrayCamera){let at=C.cameras;if(ft.length>0)for(let ut=0,dt=at.length;ut<dt;ut++){let At=at[ut];aa(xt,ft,_,At)}Te&&Vt.render(_);for(let ut=0,dt=at.length;ut<dt;ut++){let At=at[ut];ra(L,_,At,At.viewport)}}else ft.length>0&&aa(xt,ft,_,C),Te&&Vt.render(_),ra(L,_,C)}_t!==null&&$===0&&(he.updateMultisampleRenderTarget(_t),he.updateRenderTargetMipmap(_t)),I&&B.end(F),_.isScene===!0&&_.onAfterRender(F,_,C),Ut.resetDefaultState(),st=-1,vt=null,A.pop(),A.length>0?(R=A[A.length-1],he.setTextureUnits(R.state.textureUnits),Ct===!0&&Y.setGlobalState(F.clippingPlanes,R.state.camera)):R=null,x.pop(),x.length>0?L=x[x.length-1]:L=null,W!==null&&W.renderEnd()};function Hs(_,C,N,I){if(_.visible===!1)return;if(_.layers.test(C.layers)){if(_.isGroup)N=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(C);else if(_.isLight)R.pushLight(_),_.castShadow&&R.pushShadow(_);else if(_.isSprite){let xt=C.isArrayCamera?bt:mt;if(!_.frustumCulled||_.intersectsFrustum(xt)){I&&ee.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Ft);let ft=wt.update(_),at=_.material;at.visible&&L.push(_,ft,at,N,ee.z,null,C)}}else if(_.isMesh||_.isLine||_.isPoints){let xt=C.isArrayCamera?bt:mt;if(!_.frustumCulled||_.intersectsFrustum(xt)){let ft=wt.update(_),at=_.material;if(I&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),ee.copy(_.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),ee.copy(ft.boundingSphere.center)),ee.applyMatrix4(_.matrixWorld).applyMatrix4(Ft)),Array.isArray(at)){let ut=ft.groups;for(let dt=0,At=ut.length;dt<At;dt++){let gt=ut[dt],Rt=at[gt.materialIndex];Rt&&Rt.visible&&L.push(_,ft,Rt,N,ee.z,gt,C)}}else at.visible&&L.push(_,ft,at,N,ee.z,null,C)}}}let tt=_.children;for(let xt=0,ft=tt.length;xt<ft;xt++)Hs(tt[xt],C,N,I)}function ra(_,C,N,I){let{opaque:z,transmissive:tt,transparent:xt}=_;R.setupLightsView(N),Ct===!0&&Y.setGlobalState(F.clippingPlanes,N),I&&Nt.viewport(Ot.copy(I)),z.length>0&&Ws(z,C,N),tt.length>0&&Ws(tt,C,N),xt.length>0&&Ws(xt,C,N),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function aa(_,C,N,I){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[I.id]===void 0){let gt=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[I.id]=new bn(1,1,{generateMipmaps:!0,type:gt?Wn:vn,minFilter:Mi,samples:Math.max(4,Ae.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ie.workingColorSpace})}let tt=R.state.transmissionRenderTarget[I.id],xt=I.viewport||Ot;tt.setSize(xt.z*F.transmissionResolutionScale,xt.w*F.transmissionResolutionScale);let ft=F.getRenderTarget(),at=F.getActiveCubeFace(),ut=F.getActiveMipmapLevel();F.setRenderTarget(tt),F.getClearColor(lt),kt=F.getClearAlpha(),kt<1&&F.setClearColor(16777215,.5),F.clear(),Te&&Vt.render(N);let dt=F.toneMapping;F.toneMapping=ri;let At=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),R.setupLightsView(I),Ct===!0&&Y.setGlobalState(F.clippingPlanes,I),Ws(_,N,I),he.updateMultisampleRenderTarget(tt),he.updateRenderTargetMipmap(tt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let gt=!1;for(let Rt=0,te=C.length;Rt<te;Rt++){let de=C[Rt],{object:oe,geometry:be,material:Lt,group:Re}=de;if(Lt.side===Xe&&oe.layers.test(I.layers)){let Wt=Lt.side;Lt.side=ln,Lt.needsUpdate=!0,w(oe,N,I,be,Lt,Re),Lt.side=Wt,Lt.needsUpdate=!0,gt=!0}}gt===!0&&(he.updateMultisampleRenderTarget(tt),he.updateRenderTargetMipmap(tt))}F.setRenderTarget(ft,at,ut),F.setClearColor(lt,kt),At!==void 0&&(I.viewport=At),F.toneMapping=dt}function Ws(_,C,N){let I=C.isScene===!0?C.overrideMaterial:null;for(let z=0,tt=_.length;z<tt;z++){let xt=_[z],{object:ft,geometry:at,group:ut}=xt,dt=xt.material;dt.allowOverride===!0&&I!==null&&(dt=I),ft.layers.test(N.layers)&&w(ft,C,N,at,dt,ut)}}function w(_,C,N,I,z,tt){W!==null&&z.isNodeMaterial&&W.setObject(_,z),_.onBeforeRender(F,C,N,I,z,tt),_.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),z.onBeforeRender(F,C,N,I,_,tt),z.transparent===!0&&z.side===Xe&&z.forceSinglePass===!1?(z.side=ln,z.needsUpdate=!0,F.renderBufferDirect(N,C,I,z,_,tt),z.side=Ni,z.needsUpdate=!0,F.renderBufferDirect(N,C,I,z,_,tt),z.side=Xe):F.renderBufferDirect(N,C,I,z,_,tt),_.onAfterRender(F,C,N,I,z,tt)}function O(_){let C=0;for(let N of _)N.texture!==null&&C++;return C}function v(_,C,N){C.isScene!==!0&&(C=Qt);let I=K.get(_),z=R.state.lights,tt=R.state.shadowsArray,xt=z.state.version,ft=pt.getParameters(_,z.state,tt,C,N,R.state.lightProbeGridArray),at=pt.getProgramCacheKey(ft),ut=I.programs;I.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,I.fog=C.fog;let dt=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;I.envMap=P.get(_.envMap||I.environment,dt),I.envMapRotation=I.environment!==null&&_.envMap===null?C.environmentRotation:_.envMapRotation,ut===void 0&&(_.addEventListener("dispose",ve),ut=new Map,I.programs=ut,I.programVariants=new Map);let At=ut.get(at);if(At!==void 0){if(I.currentProgram===At&&I.lightsStateVersion===xt)return it(_,ft),At}else ft.uniforms=pt.getUniforms(_),W!==null&&_.isNodeMaterial&&W.build(_,N,ft),_.onBeforeCompile(ft,F),At=pt.acquireProgram(ft,at),ut.set(at,At),I.uniforms=ft.uniforms;let gt=I.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(gt.clippingPlanes=Y.uniform),it(_,ft),I.needsLights=Z(_),I.lightsStateVersion=xt,I.needsLights&&(gt.ambientLightColor.value=z.state.ambient,gt.sunLights.value=z.state.sun,gt.sunLightShadows.value=z.state.sunShadow,gt.directionalLights.value=z.state.directional,gt.directionalLightShadows.value=z.state.directionalShadow,gt.spotLights.value=z.state.spot,gt.spotLightShadows.value=z.state.spotShadow,gt.rectAreaLights.value=z.state.rectArea,gt.ltc_1.value=z.state.rectAreaLTC1,gt.ltc_2.value=z.state.rectAreaLTC2,gt.pointLights.value=z.state.point,gt.pointLightShadows.value=z.state.pointShadow,gt.hemisphereLights.value=z.state.hemi,gt.sunShadowMatrix.value=z.state.sunShadowMatrix,gt.sunShadowCascade.value=z.state.sunShadowCascade,gt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,gt.spotLightMatrix.value=z.state.spotLightMatrix,gt.spotLightMap.value=z.state.spotLightMap,gt.pointShadowMatrix.value=z.state.pointShadowMatrix),I.numLightProbeGrids=O(R.state.lightProbeGridArray),I.currentProgram=At,I.uniformsList=null,At}function E(_,C,N,I,z){let tt=K.get(_),xt=tt.currentProgram.id+","+I+","+z,ft=tt.programVariants.get(xt);return ft===void 0?(ft=v(_,C,N),tt.programVariants.set(xt,ft)):(tt.currentProgram=ft,tt.uniformsList=null,tt.outputColorSpace=I,tt.toneMapping=z),ft}function V(_){if(_.uniformsList===null){let C=_.currentProgram.getUniforms();_.uniformsList=ks.seqWithValue(C.seq,_.uniforms)}return _.uniformsList}function it(_,C){let N=K.get(_);N.outputColorSpace=C.outputColorSpace,N.batching=C.batching,N.batchingColor=C.batchingColor,N.instancing=C.instancing,N.instancingColor=C.instancingColor,N.instancingMorph=C.instancingMorph,N.skinning=C.skinning,N.morphTargets=C.morphTargets,N.morphNormals=C.morphNormals,N.morphColors=C.morphColors,N.morphTargetsCount=C.morphTargetsCount,N.numClippingPlanes=C.numClippingPlanes,N.numIntersection=C.numClipIntersection,N.vertexAlphas=C.vertexAlphas,N.vertexTangents=C.vertexTangents,N.toneMapping=C.toneMapping}function X(_,C,N,I,z){C.isScene!==!0&&(C=Qt),he.resetTextureUnits();let tt=C.fog,xt=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?C.environment:null,ft=_t===null?F.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Ie.workingColorSpace,at=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap,ut=P.get(I.envMap||xt,at),dt=I.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,At=!!N.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),gt=!!N.morphAttributes.position,Rt=!!N.morphAttributes.normal,te=!!N.morphAttributes.color,de=ri;I.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(de=F.toneMapping);let oe=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,be=oe!==void 0?oe.length:0,Lt=K.get(I),Re=R.state.lights;if(Ct===!0&&(Kt===!0||_!==vt)){let Be=_===vt&&I.id===st;Y.setState(I,_,Be)}let Wt=!1,jt=!1;I.version===Lt.__version?Lt.needsLights&&Lt.lightsStateVersion!==Re.state.version||z.isBatchedMesh&&Lt.batching===!1||!z.isBatchedMesh&&Lt.batching===!0||z.isBatchedMesh&&Lt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Lt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Lt.instancing===!1||!z.isInstancedMesh&&Lt.instancing===!0||z.isSkinnedMesh&&Lt.skinning===!1||!z.isSkinnedMesh&&Lt.skinning===!0||z.isInstancedMesh&&Lt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Lt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Lt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Lt.instancingMorph===!1&&z.morphTexture!==null||Lt.envMap!==ut||I.fog===!0&&Lt.fog!==tt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==Y.numPlanes||Lt.numIntersection!==Y.numIntersection)||Lt.vertexAlphas!==dt||Lt.vertexTangents!==At||Lt.morphTargets!==gt||Lt.morphNormals!==Rt||Lt.morphColors!==te||Lt.morphTargetsCount!==be||Lt.numLightProbeGrids!==O(R.state.lightProbeGridArray)?Wt=!0:(Lt.outputColorSpace!==ft||Lt.toneMapping!==de)&&(jt=!0):(Wt=!0,Lt.__version=I.version);let j=Lt.currentProgram;(Wt===!0||jt===!0)&&(j=jt===!0?E(I,C,z,ft,de):v(I,C,z),W&&I.isNodeMaterial&&W.onUpdateProgram(I,j,Lt));let Tt=!1,qt=!1,Ne=!1,Jt=j.getUniforms(),Se=Lt.uniforms;if(Nt.useProgram(j.program)&&(Tt=!0,qt=!0,Ne=!0),I.id!==st&&(st=I.id,qt=!0),Tt||vt!==_){Nt.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),Jt.setValue(k,"projectionMatrix",_.projectionMatrix),Jt.setValue(k,"viewMatrix",_.matrixWorldInverse);let sn=Jt.map.cameraPosition;sn!==void 0&&sn.setValue(k,Dt.setFromMatrixPosition(_.matrixWorld)),Ae.logarithmicDepthBuffer&&Jt.setValue(k,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Jt.setValue(k,"isOrthographic",_.isOrthographicCamera===!0),vt!==_&&(vt=_,qt=!0,Ne=!0)}if(Lt.needsLights&&(Re.state.sunShadowMap.length>0&&Jt.setValue(k,"sunShadowMap",Re.state.sunShadowMap,he),Re.state.directionalShadowMap.length>0&&Jt.setValue(k,"directionalShadowMap",Re.state.directionalShadowMap,he),Re.state.spotShadowMap.length>0&&Jt.setValue(k,"spotShadowMap",Re.state.spotShadowMap,he),Re.state.pointShadowMap.length>0&&Jt.setValue(k,"pointShadowMap",Re.state.pointShadowMap,he)),z.isSkinnedMesh){Jt.setOptional(k,z,"bindMatrix"),Jt.setOptional(k,z,"bindMatrixInverse");let Be=z.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),Jt.setValue(k,"boneTexture",Be.boneTexture,he))}z.isBatchedMesh&&(Jt.setOptional(k,z,"batchingTexture"),Jt.setValue(k,"batchingTexture",z._matricesTexture,he),Jt.setOptional(k,z,"batchingIdTexture"),Jt.setValue(k,"batchingIdTexture",z._indirectTexture,he),Jt.setOptional(k,z,"batchingColorTexture"),z._colorsTexture!==null&&Jt.setValue(k,"batchingColorTexture",z._colorsTexture,he));let $e=N.morphAttributes;if(($e.position!==void 0||$e.normal!==void 0||$e.color!==void 0)&&U.update(z,N,j),(qt||Lt.receiveShadow!==z.receiveShadow)&&(Lt.receiveShadow=z.receiveShadow,Jt.setValue(k,"receiveShadow",z.receiveShadow)),(I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial)&&I.envMap===null&&C.environment!==null&&(Se.envMapIntensity.value=C.environmentIntensity),Se.dfgLUT!==void 0&&(Se.dfgLUT.value=__()),qt){if(Jt.setValue(k,"toneMappingExposure",F.toneMappingExposure),Lt.needsLights&&ht(Se,Ne),tt&&I.fog===!0&&Pt.refreshFogUniforms(Se,tt),Pt.refreshMaterialUniforms(Se,I,Gt,se,R.state.transmissionRenderTarget[_.id]),Lt.needsLights&&Lt.numLightProbeGrids>0){let Be=M,sn=0;for(let Yn of R.state.lightProbeGridArray)Yn.texture!==null&&(Be.textures[sn]=Yn.texture,Be.min[sn]=Yn.boundingBox.min,Be.max[sn]=Yn.boundingBox.max,Be.resolution[sn]=Yn.resolution,Be.intensity[sn]=Yn.intensity,sn++);for(let Yn in Be)Be[Yn].length=sn;Se.probesSH.value=Be.textures,Se.probesMin.value=Be.min,Se.probesMax.value=Be.max,Se.probesResolution.value=Be.resolution,Se.probesIntensity.value=Be.intensity}ks.upload(k,V(Lt),Se,he)}if(I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(ks.upload(k,V(Lt),Se,he),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Jt.setValue(k,"center",z.center),Jt.setValue(k,"modelViewMatrix",z.modelViewMatrix),Jt.setValue(k,"normalMatrix",z.normalMatrix),Jt.setValue(k,"modelMatrix",z.matrixWorld),I.uniformsGroups!==void 0){let Be=I.uniformsGroups;for(let sn=0,Yn=Be.length;sn<Yn;sn++){let th=Be[sn];zt.update(th,j),zt.bind(th,j)}}return j}function ht(_,C){_.ambientLightColor.needsUpdate=C,_.sunLights.needsUpdate=C,_.sunLightShadows.needsUpdate=C,_.directionalLights.needsUpdate=C,_.directionalLightShadows.needsUpdate=C,_.pointLights.needsUpdate=C,_.pointLightShadows.needsUpdate=C,_.spotLights.needsUpdate=C,_.spotLightShadows.needsUpdate=C,_.rectAreaLights.needsUpdate=C,_.hemisphereLights.needsUpdate=C}function Z(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return ot},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return _t},this.setRenderTargetTextures=function(_,C,N){let I=K.get(_);I.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,I.__autoAllocateDepthBuffer===!1&&(I.__useRenderToTexture=!1),K.get(_.texture).__webglTexture=C,K.get(_.depthTexture).__webglTexture=I.__autoAllocateDepthBuffer?void 0:N,I.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,C){let N=K.get(_);N.__webglFramebuffer=C,N.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(_,C=0,N=0){_t=_,ot=C,$=N;let I=null,z=!1,tt=!1;if(_){let ft=K.get(_);if(ft.__useDefaultFramebuffer!==void 0){Nt.bindFramebuffer(k.FRAMEBUFFER,ft.__webglFramebuffer),Ot.copy(_.viewport),Yt.copy(_.scissor),me=_.scissorTest,Nt.viewport(Ot),Nt.scissor(Yt),Nt.setScissorTest(me),st=-1;return}else if(ft.__webglFramebuffer===void 0)he.setupRenderTarget(_);else if(ft.__hasExternalTextures)he.rebindTextures(_,K.get(_.texture).__webglTexture,K.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let dt=_.depthTexture;if(ft.__boundDepthTexture!==dt){if(dt!==null&&K.has(dt)&&(_.width!==dt.image.width||_.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(_)}}let at=_.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(tt=!0);let ut=K.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(ut[C])?I=ut[C][N]:I=ut[C],z=!0):_.samples>0&&he.useMultisampledRTT(_)===!1?I=K.get(_).__webglMultisampledFramebuffer:Array.isArray(ut)?I=ut[N]:I=ut,Ot.copy(_.viewport),Yt.copy(_.scissor),me=_.scissorTest}else Ot.copy($t).multiplyScalar(Gt).floor(),Yt.copy(re).multiplyScalar(Gt).floor(),me=ue;if(N!==0&&(I=G),Nt.bindFramebuffer(k.FRAMEBUFFER,I)&&Nt.drawBuffers(_,I),Nt.viewport(Ot),Nt.scissor(Yt),Nt.setScissorTest(me),z){let ft=K.get(_.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+C,ft.__webglTexture,N)}else if(tt){let ft=C;for(let at=0;at<_.textures.length;at++){let ut=K.get(_.textures[at]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+at,ut.__webglTexture,N,ft)}}else if(_!==null&&N!==0){let ft=K.get(_.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ft.__webglTexture,N)}st=-1};function et(_){let C=K.get(_);return(C.__readFormat!==_.format||C.__readType!==_.type)&&(C.__readFormat=_.format,C.__readType=_.type,C.__formatReadable=Ae.textureFormatReadable(_.format),C.__typeReadable=Ae.textureTypeReadable(_.type)),C}this.readRenderTargetPixels=function(_,C,N,I,z,tt,xt,ft=0){if(!(_&&_.isWebGLRenderTarget)){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let at=K.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&xt!==void 0&&(at=at[xt]),Array.isArray(at)&&(at=at[0]),at){let ut=Nt.getBoundFramebuffer(k.READ_FRAMEBUFFER);Nt.bindFramebuffer(k.READ_FRAMEBUFFER,at);try{let dt=_.textures[ft],At=dt.format,gt=dt.type;_.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ft);let Rt=et(dt);if(Rt.__formatReadable===!1){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=_.width-I&&N>=0&&N<=_.height-z&&k.readPixels(C,N,I,z,Et.convert(At),Et.convert(gt),tt)}finally{Nt.bindFramebuffer(k.READ_FRAMEBUFFER,ut)}}},this.readRenderTargetPixelsAsync=async function(_,C,N,I,z,tt,xt,ft=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let at=K.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&xt!==void 0&&(at=at[xt]),Array.isArray(at)&&(at=at[0]),at)if(C>=0&&C<=_.width-I&&N>=0&&N<=_.height-z){let ut=Nt.getBoundFramebuffer(k.READ_FRAMEBUFFER);Nt.bindFramebuffer(k.READ_FRAMEBUFFER,at);let dt=_.textures[ft],At=dt.format,gt=dt.type;_.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ft);let Rt=et(dt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,te),k.bufferData(k.PIXEL_PACK_BUFFER,tt.byteLength,k.STREAM_READ),k.readPixels(C,N,I,z,Et.convert(At),Et.convert(gt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),Nt.bindFramebuffer(k.READ_FRAMEBUFFER,ut);let de=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Mu(k,de,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,te),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,tt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(te),k.deleteSync(de),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,C=null,N=0){let I=Math.pow(2,-N),z=Math.floor(_.image.width*I),tt=Math.floor(_.image.height*I),xt=C!==null?C.x:0,ft=C!==null?C.y:0;he.setTexture2D(_,0),Nt.activeTexture(k.TEXTURE0),k.copyTexSubImage2D(k.TEXTURE_2D,N,0,0,xt,ft,z,tt),Nt.unbindTexture()},this.copyTextureToTexture=function(_,C,N=null,I=null,z=0,tt=0){let xt,ft,at,ut,dt,At,gt,Rt,te,de=_.isCompressedTexture?_.mipmaps[tt]:_.image;if(N!==null)xt=N.max.x-N.min.x,ft=N.max.y-N.min.y,at=N.isBox3?N.max.z-N.min.z:1,ut=N.min.x,dt=N.min.y,At=N.isBox3?N.min.z:0;else{let Jt=Math.pow(2,-z);xt=Math.floor(_.width*Jt),ft=Math.floor(_.height*Jt),_.isDataArrayTexture?at=de.depth:_.isData3DTexture?at=Math.floor(de.depth*Jt):at=1,ut=0,dt=0,At=0}I!==null?(gt=I.x,Rt=I.y,te=I.z):(gt=0,Rt=0,te=0);let oe=Et.convert(C.format),be=Et.convert(C.type),Lt;C.isData3DTexture?(he.setTexture3D(C,0),Lt=k.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(he.setTexture2DArray(C,0),Lt=k.TEXTURE_2D_ARRAY):(he.setTexture2D(C,0),Lt=k.TEXTURE_2D),Nt.activeTexture(k.TEXTURE0),Nt.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,C.flipY),Nt.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),Nt.pixelStorei(k.UNPACK_ALIGNMENT,C.unpackAlignment);let Re=Nt.getParameter(k.UNPACK_ROW_LENGTH),Wt=Nt.getParameter(k.UNPACK_IMAGE_HEIGHT),jt=Nt.getParameter(k.UNPACK_SKIP_PIXELS),j=Nt.getParameter(k.UNPACK_SKIP_ROWS),Tt=Nt.getParameter(k.UNPACK_SKIP_IMAGES);Nt.pixelStorei(k.UNPACK_ROW_LENGTH,de.width),Nt.pixelStorei(k.UNPACK_IMAGE_HEIGHT,de.height),Nt.pixelStorei(k.UNPACK_SKIP_PIXELS,ut),Nt.pixelStorei(k.UNPACK_SKIP_ROWS,dt),Nt.pixelStorei(k.UNPACK_SKIP_IMAGES,At);let qt=_.isDataArrayTexture||_.isData3DTexture,Ne=C.isDataArrayTexture||C.isData3DTexture;if(_.isDepthTexture){let Jt=K.get(_),Se=K.get(C),$e=K.get(Jt.__renderTarget),Be=K.get(Se.__renderTarget);Nt.bindFramebuffer(k.READ_FRAMEBUFFER,$e.__webglFramebuffer),Nt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let sn=0;sn<at;sn++)qt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,K.get(_).__webglTexture,z,At+sn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,K.get(C).__webglTexture,tt,te+sn)),k.blitFramebuffer(ut,dt,ut+xt,dt+ft,gt,Rt,gt+xt,Rt+ft,k.DEPTH_BUFFER_BIT,k.NEAREST);Nt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(z!==0||_.isRenderTargetTexture||K.has(_)){let Jt=K.get(_),Se=K.get(C);Nt.bindFramebuffer(k.READ_FRAMEBUFFER,q),Nt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Q);for(let $e=0;$e<at;$e++)qt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Jt.__webglTexture,z,At+$e):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Jt.__webglTexture,z),Ne?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Se.__webglTexture,tt,te+$e):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Se.__webglTexture,tt),z!==0?k.blitFramebuffer(ut,dt,ut+xt,dt+ft,gt,Rt,gt+xt,Rt+ft,k.COLOR_BUFFER_BIT,k.NEAREST):Ne?k.copyTexSubImage3D(Lt,tt,gt,Rt,te+$e,ut,dt,xt,ft):k.copyTexSubImage2D(Lt,tt,gt,Rt,ut,dt,xt,ft);Nt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ne?_.isDataTexture||_.isData3DTexture?k.texSubImage3D(Lt,tt,gt,Rt,te,xt,ft,at,oe,be,de.data):C.isCompressedArrayTexture?k.compressedTexSubImage3D(Lt,tt,gt,Rt,te,de.width,de.height,at,oe,de.data):k.texSubImage3D(Lt,tt,gt,Rt,te,xt,ft,at,oe,be,de):_.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,tt,gt,Rt,xt,ft,oe,be,de.data):_.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,tt,gt,Rt,de.width,de.height,oe,de.data):k.texSubImage2D(k.TEXTURE_2D,tt,gt,Rt,xt,ft,oe,be,de);Nt.pixelStorei(k.UNPACK_ROW_LENGTH,Re),Nt.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Wt),Nt.pixelStorei(k.UNPACK_SKIP_PIXELS,jt),Nt.pixelStorei(k.UNPACK_SKIP_ROWS,j),Nt.pixelStorei(k.UNPACK_SKIP_IMAGES,Tt),tt===0&&C.generateMipmaps===!0&&C.mipmapsAutoUpdate===!0&&k.generateMipmap(Lt),Nt.unbindTexture()},this.initRenderTarget=function(_){K.get(_).__webglFramebuffer===void 0&&he.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?he.setTextureCube(_,0):_.isData3DTexture?he.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?he.setTexture2DArray(_,0):he.setTexture2D(_,0),Nt.unbindTexture()},this.resetState=function(){ot=0,$=0,_t=null,Nt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ie._getUnpackColorSpace()}};var My=1/40,Ve=Math.PI*2,pn=(i,t,e)=>i<t?t:i>e?e:i,Bi=(i,t,e)=>i+(t-i)*e,zi=(i,t,e)=>{let n=pn((e-i)/(t-i),0,1);return n*n*(3-2*n)},We=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-e*n));function ki(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var is=(i,t)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)};function qn(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,a=s*s*(3-2*s),o=r*r*(3-2*r),l=is(e,n),c=is(e+1,n),h=is(e,n+1),p=is(e+1,n+1);return l+(c-l)*a+(h-l)*o+(l-c-h+p)*a*o}function yl(i,t){let e=0,n=.5,s=1;for(let r=0;r<4;r++)e+=n*qn(i*s,t*s),s*=2.03,n*=.5;return e/.9375}var bl=new Ue,wl=new Cn,fd=new Rn,x_=new D,md=new D,je=new le;function pe(i,t){i.index&&(i=i.toNonIndexed()),i.attributes.uv&&i.deleteAttribute("uv"),i.attributes.uv1&&i.deleteAttribute("uv1");let e=i.attributes.position,n=e.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)typeof t=="function"?t(je,e.getX(r),e.getY(r),e.getZ(r),r):je.set(t),s[r*3]=je.r,s[r*3+1]=je.g,s[r*3+2]=je.b;return i.setAttribute("color",new He(s,3)),i}function Me(i,t=0,e=0,n=0,s=0,r=0,a=0,o=1,l=o,c=o){return fd.set(s,r,a),wl.setFromEuler(fd),bl.compose(x_.set(t,e,n),wl,md.set(o,l,c)),i.applyMatrix4(bl),i}function pd(i,t,e){let n=new D().subVectors(e,t),s=n.length();return wl.setFromUnitVectors(new D(0,1,0),n.normalize()),bl.compose(new D().addVectors(t,e).multiplyScalar(.5),wl,md.set(1,1,1)),i.applyMatrix4(bl),s}function li(i){let t=0;for(let o of i)t+=o.attributes.position.count;let e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*3),r=0;for(let o of i)o.attributes.normal||o.computeVertexNormals(),e.set(o.attributes.position.array,r*3),n.set(o.attributes.normal.array,r*3),s.set(o.attributes.color.array,r*3),r+=o.attributes.position.count,o.dispose();let a=new Oe;return a.setAttribute("position",new He(e,3)),a.setAttribute("normal",new He(n,3)),a.setAttribute("color",new He(s,3)),a.computeBoundingSphere(),a}var cn=(i,t,e,n)=>i.copy(Ml.set(t)).lerp(Sl.set(e),pn(n,0,1)),Ml=new le,Sl=new le;function ea(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new Sr(s);return r.colorSpace=gn,r.anisotropy=4,n&&(r.wrapS=r.wrapT=ws,r.repeat.set(n[0],n[1])),r}function v_(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}function y_(i,t){t=t||{};let e=new _l({canvas:i,antialias:!0,powerPreference:"high-performance"});e.toneMapping=Vr,e.toneMappingExposure=1.05,e.shadowMap.enabled=!0,e.shadowMap.type=Ki;let n=new fr,s=new le("#D3E3EA");n.background=s,n.fog=new dr(s,60,340);let r=new dn(62,.5,.1,1400),a={time:{value:0}},o=ki(20261123),l=new Br("#CFE5FF","#7FA458",1.05);n.add(l);let c=new D(.55,.6,.5).normalize(),h=new kr("#FFE6BC",3);h.castShadow=!0,h.shadow.mapSize.set(2048,2048),Object.assign(h.shadow.camera,{left:-17,right:17,top:17,bottom:-17,near:1,far:140}),h.shadow.bias=-4e-4,h.shadow.normalBias=.025,h.shadow.radius=2.5,n.add(h,h.target);let p=new yt(new Ce(600,32,16),new Pn({side:ln,depthWrite:!1,fog:!1,uniforms:{top:{value:new le("#2F78DA")},mid:{value:new le("#86C4F7")},hor:{value:new le("#F8E6C8")},sunDir:{value:new D(.62,.3,-.73).normalize()}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top, mid, hor, sunDir; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float y = d.y;
        vec3 c = mix(hor, mid, smoothstep(-0.03, 0.2, y)); c = mix(c, top, smoothstep(0.2, 0.8, y));
        float s = max(dot(d, sunDir), 0.0);
        c += vec3(1.0, 0.86, 0.6) * (pow(s, 10.0) * 0.35 + pow(s, 90.0) * 0.6);
        c = mix(c, vec3(1.0, 0.97, 0.86), smoothstep(0.9982, 0.9992, s));
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));p.renderOrder=-10,p.frustumCulled=!1,n.add(p);let d=120,u=11,g=w=>2.6*Math.sin(w*.055+.6)+1.5*Math.sin(w*.13+2.1)-.6,b=[[17,1],[45,-1],[76,1],[103,-1]].map(([w,O])=>({x:w,z:pn(g(w)+O*6.4,-8.2,8.2),side:O,rot:O>0?Math.PI:0,base:0}));function m(w,O){let v=Math.abs(O),E=(yl(w*.09+3.1,O*.09)-.5)*.55,V=O-g(w);E-=Math.exp(-(V*V)/1.3)*.75;let it=pn((v-(u-1))/21,0,1);E+=21*it*it+zi(30,50,v)*7,E+=(yl(w*.07+(O>0?9:2),v*.09)-.5)*5*zi(u+1,u+9,v);let X=w<2?(2-w)/22:w>d-2?(w-d+2)/30:0;return X>0&&(E+=20*Math.min(1,X)**2+zi(1,2.5,X)*6),E}for(let w of b)w.base=m(w.x,w.z)+.05;function f(w,O){let v=m(w,O);for(let E of b){let V=w-E.x,it=O-E.z;V*V+it*it<49&&(v=Bi(v,E.base,zi(7,4.5,Math.hypot(V,it))))}return v}let y=(w,O)=>Math.hypot(f(w+.3,O)-f(w-.3,O),f(w,O+.3)-f(w,O-.3))/.6;{let w=[-150,-110,-80,-60,-45,-35,-27,-21,-16,-12.5];for(let _=-10;_<=130;_+=1)w.push(_);w.push(133,137,142,148,156,166,180,200,230,270);let O=[0];for(let _=.6;_<14;_+=.6)O.push(+_.toFixed(2));for(let _=14;_<36;_+=1.4)O.push(+_.toFixed(2));for(let _=36;_<=80;_+=4)O.push(_);O.push(95,120,160);let v=[...O.slice(1).reverse().map(_=>-_),...O],E=w.length,V=v.length,it=new Float32Array(E*V*3),X=new Float32Array(E*V*3);for(let _=0;_<V;_++)for(let C=0;C<E;C++){let N=w[C],I=v[_],z=f(N,I),tt=(_*E+C)*3,xt=Math.abs(I);it[tt]=N,it[tt+1]=z,it[tt+2]=I;let ft=yl(N*.07+11,I*.07),at=qn(N*.5,I*.5);cn(je,"#5FAE3E","#9AD85E",ft*1.3-.15+at*.2);let ut=Math.abs(I-g(N));ut<2.4&&xt<u+1&&je.lerp(Ml.set(ut<1?"#8F8A62":"#D9C891"),zi(2.4,1.3,ut));let dt=zi(1.2,5,z)*zi(u-.5,u+4,xt);if(dt>0){let At=.5+.5*Math.sin(z*1.9+yl(N*.05,I*.05)*4);cn(Sl,"#B98F62","#DDBE8E",At),Sl.lerp(Ml.set("#8E6A48"),qn(N*.35,z*.6)*.35),je.lerp(Sl,dt)}xt>31&&je.lerp(Ml.set("#B7A96E"),zi(31,40,xt)*.7),X[tt]=je.r,X[tt+1]=je.g,X[tt+2]=je.b}let ht=[];for(let _=0;_<V-1;_++)for(let C=0;C<E-1;C++){let N=_*E+C,I=N+1,z=N+E,tt=z+1;ht.push(N,z,I,I,z,tt)}let Z=new Oe;Z.setAttribute("position",new He(it,3)),Z.setAttribute("color",new He(X,3)),Z.setIndex(ht),Z.computeVertexNormals();let et=new yt(Z,new Ke({vertexColors:!0}));et.receiveShadow=!0,n.add(et)}let T=ea(256,256,(w,O,v)=>{let E=w.createImageData(O,v),V=(it,X)=>qn(it/18,X/9)*.6+qn(it/7,X/4)*.4;for(let it=0;it<v;it++)for(let X=0;X<O;X++){let ht=V(X+1,it)-V(X-1,it),Z=V(X,it+1)-V(X,it-1),et=(it*O+X)*4,_=-ht*3,C=-Z*3,N=Math.hypot(_,C,1);E.data[et]=(_/N*.5+.5)*255,E.data[et+1]=(C/N*.5+.5)*255,E.data[et+2]=(1/N*.5+.5)*255,E.data[et+3]=255}w.putImageData(E,0,0)},[1,1]);T.colorSpace="";let M=w=>m(w,g(w))+.42,L=(()=>{let w=[],O=[],v=[],E=0;for(let X=-6;X<=d+6;X+=.5){let ht=g(X),Z=(g(X+.1)-ht)/.1,et=Math.hypot(1,Z),_=-Z/et,C=1/et,N=M(X);for(let I of[-1.35,1.35])w.push(X+_*I,N,ht+C*I),O.push(X/3,I>0?1:0);if(E){let I=(E-1)*2;v.push(I,I+1,I+2,I+1,I+3,I+2)}E++}let V=new Oe;V.setAttribute("position",new He(new Float32Array(w),3)),V.setAttribute("uv",new He(new Float32Array(O),2)),V.setIndex(v),V.computeVertexNormals();let it=new yt(V,new yi({color:"#3D9FD8",specular:"#FFFFFF",shininess:140,normalMap:T,transparent:!0,opacity:.88}));return it.material.normalScale.set(.7,.7),it.receiveShadow=!0,n.add(it),it})();{let w=[],O=(ht,Z,et,_,C,N)=>{let I=new zn(_,et,30,12),z=I.attributes.position;for(let tt=0;tt<z.count;tt++){let xt=z.getX(tt),ft=z.getY(tt),at=z.getZ(tt),ut=Math.atan2(at,xt),dt=(ft+et/2)/et,At=1+(qn(ut*2.2+C,dt*3.5)-.5)*.45*(1-dt*.4);z.setXYZ(tt,xt*At,ft+(qn(ut*4+C*2,dt*5)-.5)*et*.07*(1-dt),at*At)}I=pe(I,(tt,xt,ft,at)=>{let ut=(ft+et/2)/et,dt=qn(Math.atan2(at,xt)*6+C,ut*9);cn(tt,"#7F9CC0","#B4C6E0",ut*1.15+dt*.3),N<1&&ut>N-.06+dt*.08&&tt.set("#F7FAFF")}),w.push(Me(I,ht,et/2-2,Z))};O(430,-40,175,110,1.3,.6),[[380,120,120,90],[400,-170,130,95],[-260,40,120,100],[-240,-140,110,90],[60,-260,140,110],[180,-250,120,95],[-60,-250,115,100],[60,260,140,110],[200,250,125,95],[-80,250,120,100],[330,260,110,90],[320,-260,120,95]].forEach(([ht,Z,et,_],C)=>O(ht,Z,et,_,C*3.7,et>118?.74:2));let E=new yt(li(w),new Ke({vertexColors:!0,flatShading:!0,fog:!1}));n.add(E);let V=new Pe,it=new yt(new De(.25,.25,9,6),new Ke({color:"#5C3A1A"}));it.position.y=4.5;let X=new yt(new ni(6,3.6),new en({color:"#FFB703",side:Xe,fog:!1}));X.position.set(3,7,0),V.add(it,X),V.position.set(430,171,-40),V.scale.setScalar(2.2),n.add(V)}let R=new Ke({vertexColors:!0}),x=new Ke({vertexColors:!0,flatShading:!0});function A(w,O,v){let E=w.clone();return E.onBeforeCompile=V=>{V.uniforms.uTime=a.time,V.vertexShader=`uniform float uTime;
`+V.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float hh = max(0.0, transformed.y - ${v.toFixed(2)});
        float ph = 0.0;
        #ifdef USE_INSTANCING
          ph = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.23;
        #endif
        transformed.x += (sin(uTime * 1.25 + ph) + 0.35 * sin(uTime * 2.7 + ph * 1.7)) * ${O.toFixed(4)} * hh * hh;
        transformed.z += cos(uTime * 1.05 + ph) * ${(O*.5).toFixed(4)} * hh * hh;`)},E.customProgramCacheKey=()=>"sway"+O+"_"+v+(w.flatShading?"f":"")+w.side,E}let B=(w,O,v)=>b.some(E=>Math.hypot(w-E.x,O-E.z)<v),F=(w,O,v)=>Math.abs(O-g(w))<1.7+v||B(w,O,6.8+v),H=[];function W(w,O,v,E={}){let V=new Map;for(let X of v){let ht=Math.floor((X.x+40)/32);V.has(ht)||V.set(ht,[]),V.get(ht).push(X)}let it=new Je;for(let X of V.values()){let ht=new Is(w,O,X.length);X.forEach((Z,et)=>{it.position.set(Z.x,Z.y,Z.z),it.rotation.set(Z.rx||0,Z.ry||0,Z.rz||0),Z.s3?it.scale.set(Z.s3[0],Z.s3[1],Z.s3[2]):it.scale.setScalar(Z.s||1),it.updateMatrix(),ht.setMatrixAt(et,it.matrix),Z.color&&ht.setColorAt(et,je.set(Z.color))}),ht.castShadow=!!E.cast,ht.receiveShadow=E.receive!==!1,ht.computeBoundingSphere(),n.add(ht)}}let G=(w=0,O=u-.6,v=-1,E=d+1)=>({x:v+o()*(E-v),z:(o()<.5?-1:1)*(w+o()*(O-w))});function q(w,O,v){let E=[],V=4.6+w()*1.6,it=new ei([new D(0,-.2,0),new D(O*.2,V*.35,.05),new D(O*.6,V*.7,.1),new D(O,V,.12)]),X=13;for(let et=0;et<X;et++){let _=it.getPoint(et/X),C=it.getPoint((et+1)/X),N=Bi(.25,.14,et/X),I=pe(new De(N*1.13,N*.9,1,9,1,!0),(tt,xt,ft)=>cn(tt,et%2?"#7E5E3C":"#8D6C46","#A9875C",ft+.5)),z=_.distanceTo(C);Me(I,0,0,0,0,0,0,1,z*1.04,1),pd(I,_,C),E.push(I)}let ht=it.getPoint(1),Z=new D(0,1,0);E.push(Me(pe(new Gn(.28,1),"#6B5A2E"),ht.x,ht.y,ht.z));for(let et=0;et<v;et++){let _=et/v*Ve+w()*.35,C=new D(Math.cos(_),0,Math.sin(_)),N=2.6+w()*.9,I=.7+w()*.6,z=new ei([ht.clone(),ht.clone().addScaledVector(C,N*.3).addScaledVector(Z,.55),ht.clone().addScaledVector(C,N*.65).addScaledVector(Z,.35-I*.2),ht.clone().addScaledVector(C,N).addScaledVector(Z,-I)]),tt=14,xt=[],ft=[],at=[];for(let At=0;At<=tt;At++){let gt=At/tt,Rt=z.getPoint(gt),te=z.getTangent(gt),de=new D().crossVectors(te,Z).normalize(),oe=Math.pow(Math.sin(Math.PI*Math.min(1,gt*1.15)),.7)*.5*(At%2?1:.72);at.push([Rt,Rt.clone().addScaledVector(de,oe).addScaledVector(Z,-oe*.42),Rt.clone().addScaledVector(de,-oe).addScaledVector(Z,-oe*.42),gt])}let ut=(At,gt,Rt)=>{xt.push(At.x,At.y,At.z),cn(je,"#2E7A30","#6CC24A",gt*.9+Rt*.25),ft.push(je.r,je.g,je.b)};for(let At=0;At<tt;At++){let[gt,Rt,te,de]=at[At],[oe,be,Lt,Re]=at[At+1];ut(gt,de,0),ut(Rt,de,1),ut(oe,Re,0),ut(Rt,de,1),ut(be,Re,1),ut(oe,Re,0),ut(gt,de,0),ut(oe,Re,0),ut(te,de,1),ut(te,de,1),ut(oe,Re,0),ut(Lt,Re,1)}let dt=new Oe;dt.setAttribute("position",new He(new Float32Array(xt),3)),dt.setAttribute("color",new He(new Float32Array(ft),3)),dt.computeVertexNormals(),E.push(dt)}for(let et=0;et<2;et++){let _=w()*Ve;for(let C=0;C<7;C++)E.push(Me(pe(new Gn(.085,0),C%2?"#B85C1C":"#D07A26"),ht.x+Math.cos(_)*.32+(w()-.5)*.16,ht.y-.32-w()*.3,ht.z+Math.sin(_)*.32+(w()-.5)*.16))}return li(E)}let Q=A(new Ke({vertexColors:!0,side:Xe}),.012,2.8),ot=[q(ki(3),1.1,9),q(ki(8),-.8,10),q(ki(15),.5,8)];{let w=[];for(let O of[-1,1])for(let v=-2;v<d+2;v+=5+o()*5){let E=g(v)+O*(2.3+o()*1.8);!B(v,E,7.5)&&Math.abs(E)<u&&w.push({x:v,z:E})}for(let O=0;O<16;O++){let v=G(2,u-1);F(v.x,v.z,.6)||w.push(v)}ot.forEach((O,v)=>{let E=w.filter((V,it)=>it%3===v).map(V=>(H.push({x:V.x,z:V.z,r:.38,tall:1}),{x:V.x,y:f(V.x,V.z)-.05,z:V.z,ry:o()*Ve,s:.85+o()*.4}));W(O,Q,E,{cast:!0})})}function $(w,O,v){let E=[pe(Me(new De(.12,.2,1.7,7),0,.85,0),"#7A5230")];E.push(pe(Me(new De(.05,.08,.8,5),.25,1.55,0,0,0,-.7),"#7A5230"));for(let V=0;V<7;V++){let it=.62+w()*.45,X=(w()-.5)*1.3,ht=2.15+w()*.9,Z=(w()-.5)*1.1,et=w();E.push(Me(pe(new Gn(it,1),(_,C,N,I)=>cn(_,v[0],v[1],.25+N/it*.45+et*.3+(is(C*9,I*9)-.5)*.2)),X,ht,Z))}if(O)for(let V=0;V<9;V++){let it=w()*Ve,X=w()*1.3;E.push(Me(pe(new Gn(.08,1),O),Math.cos(it)*.95,2.1+Math.sin(X)*.9,Math.sin(it)*.85+.2))}return li(E)}let _t=A(new Ke({vertexColors:!0,flatShading:!0}),.01,1.2);[$(ki(21),"#E8443A",["#2F8A3C","#7CCB55"]),$(ki(33),null,["#3B9447","#8AD460"]),$(ki(41),"#FFB52E",["#2C7F3A","#6FC24F"])].forEach((w,O)=>{let v=[];for(let E=0;v.length<9&&E<400;E++){let V=G(1.5,u-.5);F(V.x,V.z,1.4)||H.some(it=>Math.hypot(it.x-V.x,it.z-V.z)<3)||(H.push({x:V.x,z:V.z,r:.35,tall:1}),v.push({x:V.x,y:f(V.x,V.z)-.05,z:V.z,ry:o()*Ve,s:.75+o()*.45}))}W(w,_t,v,{cast:!0})});let vt=li([0,1,2,3].map(w=>Me(pe(new Gn(.42-w*.05,1),(O,v,E)=>cn(O,"#2F8A3C","#86D05C",.4+E*.9+w*.1)),(w-1.5)*.32,.3,w%2*.2))),Ot=pe(new Yi(.4,0),(w,O,v,E)=>cn(w,"#8C877B","#C9C4B6",.4+v*1.2+is(O*7,E*7)*.3));{let w=[];for(let it=0;w.length<130&&it<3e3;it++){let X=G(0,u+4);F(X.x,X.z,.5)||y(X.x,X.z)>.7||w.push({x:X.x,y:f(X.x,X.z),z:X.z,ry:o()*Ve,s:.5+o()*.8})}W(vt,x,w,{cast:!0});let O=[];for(let it=0;O.length<90&&it<2e3;it++){let X=G(0,u);if(B(X.x,X.z,6)||Math.abs(X.z-g(X.x))<1.1)continue;let ht=.35+o()*.8;ht>.8&&H.push({x:X.x,z:X.z,r:.3*ht}),O.push({x:X.x,y:f(X.x,X.z)+.04,z:X.z,rx:o()*3,ry:o()*3,rz:o()*3,s3:[ht,ht*(.6+o()*.4),ht*(.8+o()*.4)]})}let v=pe(new Yi(.5,1),(it,X,ht,Z)=>{cn(it,"#9C7A56","#D2B387",.45+ht*.9+(is(X*5,Z*5)-.5)*.4)}),E=[];for(let it=0;it<230;it++){let X=-14+o()*(d+30),ht=u+1+o()*26,Z=(o()<.5?-1:1)*ht,et=.8+o()*3.2;E.push({x:X,y:f(X,Z)-et*.42,z:Z,rx:o()*3,ry:o()*3,rz:o()*3,s3:[et,et*(.5+o()*.4),et*(.8+o()*.5)]})}for(let it=0;it<26;it++){let X=G(u-3,u+1);if(B(X.x,X.z,7))continue;let ht=1.3+o()*1.6;H.push({x:X.x,z:X.z,r:.45*ht}),E.push({x:X.x,y:f(X.x,X.z)-.15,z:X.z,rx:o()*3,ry:o()*3,rz:o()*3,s3:[ht,ht*.7,ht]})}W(Ot,x,O,{cast:!1}),W(v,x,E,{cast:!1});let V=[];for(let it=0;it<140;it++){let X=-40+o()*(d+80),ht=26+o()*40,Z=(o()<.5?-1:1)*ht;qn(X*.06,Z*.06)<.4||V.push({x:X,y:f(X,Z)-.2,z:Z,ry:o()*Ve,s:1+o()*1.3})}W(li([Me(pe(new De(.15,.22,1.6,5),"#6B4A2A"),0,.8,0),Me(pe(new Gn(1.2,0),(it,X,ht)=>cn(it,"#4F7F3A","#8DB45E",ht/1.2*.5+.5)),0,2.3,0,0,0,0,1,.85,1)]),x,V,{cast:!1})}let Yt=li([...Array(6)].map((w,O)=>{let v=O*1.1,E=.8+O%3*.22,V=pe(new zn(.025,E,3),(it,X,ht)=>cn(it,"#3C7F35","#8CC05A",ht/E+.5));return Me(V,Math.cos(v)*.12,E/2,Math.sin(v)*.12,Math.sin(v)*.15,0,Math.cos(v)*.15),O%2?li([V,Me(pe(new De(.035,.035,.16,6),"#6B4423"),Math.cos(v)*.12+Math.cos(v)*.15*E,E-.05,Math.sin(v)*.12)]):V}));{let w=[];for(let O=-4;O<d+4;O+=.55)for(let v of[-1,1]){if(o()<.35)continue;let E=g(O)+v*(1.05+o()*.55);B(O,E,5)||w.push({x:O,y:f(O,E)-.05,z:E,ry:o()*Ve,s:.7+o()*.6})}W(Yt,A(R,.09,.2),w,{cast:!1})}let me=(()=>{let w=[],O=[];for(let E=0;E<5;E++){let V=E/5*Ve+.3,it=.22+E%3*.07,X=.035,ht=Math.cos(V)*.05,Z=Math.sin(V)*.05,et=ht+Math.cos(V)*.1,_=Z+Math.sin(V)*.1,C=-Math.sin(V)*X,N=Math.cos(V)*X;w.push(ht-C,0,Z-N,ht+C,0,Z+N,et,it,_);for(let I of[0,0,1])cn(je,"#5AA544","#B0E47A",I),O.push(je.r,je.g,je.b)}let v=new Oe;return v.setAttribute("position",new He(new Float32Array(w),3)),v.setAttribute("color",new He(new Float32Array(O),3)),v.computeVertexNormals(),v})();{let w=[];for(let O=0;w.length<7500&&O<3e4;O++){let v=G(0,u+3,-3,d+3);Math.abs(v.z-g(v.x))<1.15||B(v.x,v.z,3.9)||y(v.x,v.z)>.6||w.push({x:v.x,y:f(v.x,v.z)-.02,z:v.z,ry:o()*Ve,s:.5+o()*.7})}W(me,A(new Ke({vertexColors:!0,side:Xe}),.5,0),w)}let lt=li([Me(pe(new De(.007,.01,.24,3,1,!0),"#3E8E36"),0,.12,0),Me(pe(new vi(.02,6),"#FFD54A"),0,.248,.004,-1,0,0)]),kt=li([0,1,2,3,4].map(w=>{let O=w/5*Ve;return Me(pe(new vi(.036,5),"#FFFFFF"),Math.cos(O)*.035,Math.sin(O)*.035,0,0,0,O)}));Me(kt,0,.245,0,-1,0,0);{let w=[],O=["#FF6B9A","#FFFFFF","#FFD23F","#B28DFF","#FF8C42","#FF4D6D","#7FD1FF"];for(let E=0;E<9e3&&w.length<2600;E++){let V=G(0,u-.3,-2,d+2);Math.abs(V.z-g(V.x))<1.3||B(V.x,V.z,3.9)||qn(V.x*.16,V.z*.16)<.42||w.push({x:V.x,y:f(V.x,V.z),z:V.z,ry:o()*Ve*.25,s:1.2+o()*.8,color:O[Math.floor(qn(V.x*.3+40,V.z*.3)*O.length*.999+o()*1.5)%O.length]})}let v=new Ke({vertexColors:!0,side:Xe});W(lt,A(R,.8,0),w.map(E=>({...E,color:null}))),W(kt,A(v,.8,0),w)}let Zt=new Pe;n.add(Zt);{let w=new Ke({color:"#FFFFFF",emissive:"#C9D8E6",emissiveIntensity:.35,flatShading:!1,fog:!0});for(let O=0;O<11;O++){let v=new Pe;for(let E=0;E<6;E++){let V=new yt(new Gn(1,2),w);V.position.set((E-2.5)*2.1+o(),o()*1.4,o()*1.5),V.scale.set(2.2+o()*1.6,1.5+o()*1.1,1.8+o()),v.add(V)}v.position.set(-60+o()*260,48+o()*26,-140+o()*280),v.userData.v=.4+o()*.6,Zt.add(v)}}let se=[];{let w=new Oe;w.setAttribute("position",new He(new Float32Array([0,0,0,.9,0,-.25,.9,0,.25]),3)),w.computeVertexNormals();let O=new en({color:"#34406A",side:Xe});for(let v=0;v<6;v++){let E=new Pe,V=new yt(w,O),it=new yt(w,O);it.scale.x=-1,E.add(V,it),E.userData={ph:o()*6,sp:.25+o()*.2,y:26+o()*14,cx:15+o()*90,cz:(o()-.5)*20,rad:10+o()*14,l:V,r:it},se.push(E),n.add(E)}}let Gt=[];{let w=new kn;w.moveTo(0,0),w.bezierCurveTo(.05,.1,.16,.12,.15,.02),w.bezierCurveTo(.16,-.05,.08,-.1,0,-.02);let O=new Ii(w,6),v=["#FF8FD1","#FFD23F","#8FD6FF","#FFFFFF","#FF9E5E","#B28DFF"];for(let E=0;E<22;E++){let V=new Ke({color:v[E%v.length],side:Xe,emissive:v[E%v.length],emissiveIntensity:.25}),it=new Pe,X=new yt(O,V),ht=new yt(O,V);ht.scale.x=-1;let Z=new yt(new xi(.012,.07,3,5),new en({color:"#2B2233"}));Z.rotation.x=Math.PI/2,it.add(X,ht,Z),it.userData={l:X,r:ht,ax:6+o()*108,az:(o()-.5)*16,ph:o()*6},Gt.push(it),n.add(it)}}let ie=ea(64,64,w=>{let O=w.createRadialGradient(32,32,0,32,32,32);O.addColorStop(0,"rgba(255,255,255,1)"),O.addColorStop(.35,"rgba(255,255,255,.5)"),O.addColorStop(1,"rgba(255,255,255,0)"),w.fillStyle=O,w.fillRect(0,0,64,64)}),ke=(()=>{let O=new Float32Array(480),v=[];for(let it=0;it<160;it++)v.push([o()*30-15,.3+o()*3.5,-4+o()*12,o()*6]);let E=new Oe;E.setAttribute("position",new He(O,3));let V=new yr(E,new Ls({size:.07,map:ie,color:"#FFF4C4",transparent:!0,opacity:.85,depthWrite:!1,blending:si}));return V.frustumCulled=!1,n.add(V),V.userData.seeds=v,V})(),$t=0,re=-2.8,ue=new D(4,0,-2.4),mt=1.05,bt=new Pe;n.add(bt);let Ct={mer:new D(mt,0,-.5),zone:new D(2.35,0,.35),pen:new D(-4.45,0,-1.75)},Kt=[[-1.1,-2.8,1.25],[0,-2.8,1.3],[1.1,-2.8,1.25],[-.78,-.8,.55],[4,-2.4,.62],[1.95,-1.8,.35],[-2.05,-1.6,.4],[1.68,-.25,.14],[-1.68,-.25,.14],[mt,-.5,.42],[-5.8,-1,.3],[-5.8,-1.8,.3],[-5.8,-2.6,.3],[-5.1,-2.9,.3],[-4.45,-2.9,.3],[-3.8,-2.9,.3],[-3.1,-2.6,.3],[-3.1,-1.8,.3],[-3.1,-1,.3]],Ft={flames:[],glows:[],lantern:null,merchant:null};{let w=[],O=(j,Tt)=>j.set(Math.floor((Tt+1.7)/.425)%2?"#EAD9B5":"#D9C39C");w.push(Me(pe(new nn(3.4,1.95,2.4),O),$t,.975,re));for(let j of[-1,1])w.push(Me(pe(new nn(3.62,.07,1.52),(Tt,qt)=>Tt.set(Math.floor((qt+1.81)/.4525)%2?"#C9AE82":"#B99D70")),$t,2.32,re+j*.6,j*.59,0,0));let v=new kn;v.moveTo(-1.2,0),v.lineTo(1.2,0),v.lineTo(0,.8),v.closePath();for(let j of[-1,1])w.push(Me(pe(new Ii(v),"#E3D0A8"),$t+j*1.7,1.95,re,0,Math.PI/2,0));w.push(Me(pe(new nn(.95,1.55,.05),"#3F2412"),$t-.25,.775,re+1.22));for(let j of[-1,1]){let Tt=new kn;Tt.moveTo(0,0),Tt.lineTo(.42*j,0),Tt.lineTo(0,-1),Tt.closePath(),w.push(Me(pe(new Ii(Tt),"#E9D7B0"),$t-.25+j*.04,1.55,re+1.25))}let E=new D(0,2.15,re+1.2),V=new D(0,1.98,re+2.55),it=E.distanceTo(V),X=Math.atan2(E.y-V.y,V.z-E.z);for(let j=0;j<8;j++){let Tt=$t-1.7+.2125+j*.425,qt=j%2?"#FAF3E6":"#D7263D";w.push(Me(pe(new nn(.425,.035,it),qt),Tt,(E.y+V.y)/2,(E.z+V.z)/2,X,0,0)),w.push(Me(pe(new vi(.2125,10,Math.PI,Math.PI),qt),Tt,V.y,V.z+.01))}for(let j of[-1,1])w.push(Me(pe(new De(.045,.055,2.05,7),"#5C3A1A"),$t+j*1.68,1.02,re+2.55));w.push(Me(pe(new De(.03,.03,.5,5),"#5C3A1A"),$t,2.95,re+1.22,0,0,0));let ht=$t-.78,Z=re+2;w.push(Me(pe(new nn(1,.06,.55),"#8B5A2B"),ht,.74,Z));for(let[j,Tt]of[[-1,-1],[1,-1],[-1,1],[1,1]])w.push(Me(pe(new De(.03,.03,.72,5),"#6B4220"),ht+j*.44,.36,Z+Tt*.22));let et=j=>new Vn([new nt(.001,0),new nt(.09*j,0),new nt(.15*j,.07),new nt(.16*j,.17),new nt(.11*j,.28),new nt(.06*j,.32),new nt(.075*j,.36),new nt(.06*j,.37)],14);w.push(Me(pe(et(1),(j,Tt,qt)=>j.set(qt>.2&&qt<.24?"#F2E3C6":"#C0612B")),ht-.3,.77,Z)),w.push(Me(pe(et(.8),(j,Tt,qt)=>j.set(qt>.16&&qt<.19?"#FFFFFF":"#2E86AB")),ht+.02,.77,Z-.05)),w.push(Me(pe(new De(.07,.07,.42,10),(j,Tt,qt)=>j.set(Math.abs(qt)>.17?"#E8C170":Math.floor((qt+.2)/.06)%2?"#9B2335":"#1F3A68")),ht+.3,.84,Z,0,0,Math.PI/2)),w.push(Me(pe(new Ce(.28,12,8),(j,Tt,qt)=>cn(j,"#C8B18A","#E2D2AE",qt*2+.5)),$t-2.05,.27,re+1.2,0,0,0,1,1.2,1)),w.push(Me(pe(new Ce(.22,12,8),(j,Tt,qt)=>cn(j,"#C8B18A","#E2D2AE",qt*2+.5)),$t-2,.22,re+1.75,0,0,0,1,1.15,1)),w.push(Me(pe(new nn(.5,.42,.42),(j,Tt,qt,Ne)=>j.set(Math.abs(qt)>.17||Math.abs(Tt)>.21?"#7A4E25":"#A0703C")),$t+1.95,.21,re+1,0,.3,0));let _=(j,Tt)=>{let qt=j.distanceTo(Tt),Ne=Math.max(2,Math.round(qt/.55));for(let Jt=0;Jt<=Ne;Jt++){let Se=j.clone().lerp(Tt,Jt/Ne);w.push(Me(pe(new De(.045,.055,.85,6),"#8B5A2B"),Se.x,.42,Se.z))}for(let Jt of[.3,.62]){let Se=pe(new nn(.05,1,.035),"#9C6A36");Me(Se,0,0,0,0,0,0,1,qt,1),pd(Se,new D(j.x,Jt,j.z),new D(Tt.x,Jt,Tt.z)),w.push(Se)}},C=new D(-5.8,0,-.75),N=new D(-5.8,0,-2.9),I=new D(-3.1,0,-2.9),z=new D(-3.1,0,-.75);_(C,N),_(N,I),_(I,z),w.push(Me(pe(new nn(1,.18,.35),"#7A4E25"),-4.45,.09,-2.55)),w.push(Me(pe(new nn(.9,.06,.28),"#D8C26A"),-4.45,.2,-2.55)),w.push(Me(pe(new nn(1.75,.46,.06),"#7A4A22"),$t,2.66,re+1.25));for(let j=0;j<9;j++){let Tt=j/9*Ve;w.push(Me(pe(new Yi(.11,0),(qt,Ne,Jt)=>cn(qt,"#7D776C","#B5AFA2",Jt*4+.5)),ue.x+Math.cos(Tt)*.42,.06,ue.z+Math.sin(Tt)*.42,j,j*2,0,1,.7,1))}for(let j=0;j<3;j++){let Tt=j/3*Math.PI;w.push(Me(pe(new De(.05,.05,.62,6),(qt,Ne,Jt)=>qt.set(Math.abs(Jt)>.27?"#C9A36B":"#4A2E18")),ue.x,.1,ue.z,0,Tt,Math.PI/2-.25))}w.push(Me(pe(new De(.22,.25,.12,9),"#9A948A"),ue.x-.75,.06,ue.z+.35));for(let[j,Tt]of[[-.55,.75],[-.35,.82]])w.push(Me(pe(new Vn([new nt(.001,0),new nt(.022,0),new nt(.03,.045),new nt(.026,.046)],10),"#F4EFE6"),ue.x+j,.12,ue.z+Tt));let tt=new yt(li(w),new Ke({vertexColors:!0,side:Xe}));tt.castShadow=!0,tt.receiveShadow=!0,bt.add(tt);let xt=ea(512,128,(j,Tt,qt)=>{j.fillStyle="#8B5A2B",j.fillRect(0,0,Tt,qt),j.strokeStyle="#E8C170",j.lineWidth=6,j.strokeRect(8,8,Tt-16,qt-16),j.fillStyle="#FFF3D6",j.font='900 64px -apple-system, "SF Arabic", "Geeza Pro", system-ui, sans-serif',j.textAlign="center",j.textBaseline="middle";try{j.direction="rtl"}catch{}j.fillText(t.sign||"\u062E\u064A\u0645\u0629 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",Tt/2,qt/2+4)}),ft=new yt(new ni(1.62,.38),new Ke({map:xt,emissive:"#3B2410",emissiveIntensity:.25}));ft.position.set($t,2.66,re+1.29),bt.add(ft);let at=ea(256,160,(j,Tt,qt)=>{j.fillStyle="#8E1B26",j.fillRect(0,0,Tt,qt),j.fillStyle="#1F2F5C",j.fillRect(10,10,Tt-20,qt-20),j.fillStyle="#8E1B26",j.fillRect(20,20,Tt-40,qt-40),j.strokeStyle="#E8C170",j.lineWidth=3,j.strokeRect(16,16,Tt-32,qt-32),j.fillStyle="#E8C170";for(let Jt=0;Jt<14;Jt++)j.beginPath(),j.arc(24+Jt*16.3,14,3,0,Ve),j.arc(24+Jt*16.3,qt-14,3,0,Ve),j.fill();let Ne=(Jt,Se,$e,Be)=>{j.fillStyle=Be,j.beginPath(),j.moveTo(Jt,Se-$e),j.lineTo(Jt+$e*1.5,Se),j.lineTo(Jt,Se+$e),j.lineTo(Jt-$e*1.5,Se),j.closePath(),j.fill()};Ne(Tt/2,qt/2,44,"#1F2F5C"),Ne(Tt/2,qt/2,30,"#E8C170"),Ne(Tt/2,qt/2,16,"#8E1B26"),Ne(Tt/2,qt/2,6,"#F4EFE6");for(let[Jt,Se]of[[50,45],[Tt-50,45],[50,qt-45],[Tt-50,qt-45]])Ne(Jt,Se,12,"#2E86AB");j.fillStyle="#F4EFE6";for(let Jt=4;Jt<qt;Jt+=8)j.fillRect(0,Jt,4,3),j.fillRect(Tt-4,Jt,4,3)}),ut=new yt(new ni(2,1.25),new Ke({map:at}));ut.rotation.x=-Math.PI/2,ut.rotation.z=.04,ut.position.set($t-.2,.02,re+1.9),ut.receiveShadow=!0,bt.add(ut);let dt=new Pe,At=new yt(new De(.07,.07,.16,8),new en({color:"#FFD36B"})),gt=new yt(new zn(.1,.08,8),new Ke({color:"#3B2A1A"}));gt.position.y=.12;let Rt=new yt(new De(.085,.07,.03,8),new Ke({color:"#3B2A1A"}));Rt.position.y=-.09;let te=new qi(new Ci({map:ie,color:"#FFC14D",transparent:!0,opacity:.75,depthWrite:!1,blending:si}));te.scale.setScalar(.9),dt.add(At,gt,Rt,te),dt.position.set($t+1.68,1.72,re+2.55),bt.add(dt),Ft.lantern=dt;let de=j=>new en({color:j,transparent:!0,opacity:.9,depthWrite:!1,blending:si});[["#FF5A1F",.2,.55,0],["#FF9A2E",.15,.45,.07],["#FFE07A",.09,.3,-.05]].forEach(([j,Tt,qt,Ne],Jt)=>{let Se=new yt(new zn(Tt,qt,10,1,!0),de(j));Se.position.set(ue.x+Ne,.12+qt/2,ue.z-Ne),Se.userData={h0:qt,i:Jt},bt.add(Se),Ft.flames.push(Se)});let oe=new qi(new Ci({map:ie,color:"#FF8A2E",transparent:!0,opacity:.6,depthWrite:!1,blending:si}));oe.position.set(ue.x,.45,ue.z),oe.scale.setScalar(1.8),bt.add(oe),Ft.glows.push(oe);let be=new yi({color:"#C9A13B",specular:"#FFE9A8",shininess:90}),Lt=new Pe,Re=new yt(new Vn([new nt(.001,0),new nt(.1,0),new nt(.115,.02),new nt(.1,.09),new nt(.06,.14),new nt(.045,.2),new nt(.06,.24),new nt(.075,.26),new nt(.04,.3),new nt(.012,.34),new nt(.02,.36),new nt(.001,.37)],20),be),Wt=new yt(new Pi(new ei([new D(.07,.07,0),new D(.14,.14,0),new D(.17,.25,0),new D(.23,.3,0)]),10,.016,6),be),jt=new yt(new ii(.07,.01,6,14,Math.PI*1.2),be);jt.position.set(-.07,.15,0),jt.rotation.z=Math.PI*.4,Lt.add(Re,Wt,jt),Lt.position.set(ue.x-.75,.12,ue.z+.35),Lt.rotation.y=-.6,Lt.traverse(j=>{j.castShadow=!0}),bt.add(Lt)}let Dt=(w,O={})=>new yi({color:w,shininess:30,specular:"#2A2A2A",...O}),ee=w=>w.traverse(O=>{O.isMesh&&(O.castShadow=!0)}),Qt=null;function Te(w){let O=new Pe,v=new Pe;O.add(v),v.position.y=.55;let E=w.body==="fire",V=w.body==="rainbow",it;V?it=Dt("#FFFFFF",{vertexColors:!0,shininess:50}):E?it=Dt("#FF8A1F",{emissive:"#FF3D00",emissiveIntensity:.55,shininess:20}):it=Dt(w.body,{shininess:38});let X=new Ce(.5,48,32);V&&(X=pe(X,(Wt,jt,j,Tt)=>Wt.setHSL(((Math.atan2(Tt,jt)/Ve+1)%1+j*.3)%1,.75,.62)));let ht=new yt(X,it);ht.scale.set(1.05,1,.95);let Z=new yt(new Ce(.5,32,20),new en({color:w.dark,side:ln}));Z.scale.set(1.05*1.035,1.035,.95*1.035);let et=new yt(new Ce(.3,32,16),Dt(E||V?w.belly:new le(w.body).lerp(new le(w.belly),.5),{shininess:20}));et.position.set(0,-.25,.345),et.scale.set(.78,.5,.32),v.add(ht,Z,et);let _=[];for(let Wt of[-1,1]){let jt=new yt(new Ce(.15,20,12),Dt(w.dark,{shininess:20}));jt.scale.set(1.2,.55,1.45),jt.position.set(Wt*.22,-.49,.07),v.add(jt),_.push(jt)}let C=[],N=[],I=Dt("#FFFFFF",{shininess:90,specular:"#FFFFFF"}),z=Dt("#1B1F3B",{shininess:120,specular:"#FFFFFF"}),tt=new en({color:w.dark});for(let Wt of[-1,1]){let jt=new Pe;jt.position.set(Wt*.185,.15,.36);let j=new yt(new Ce(.162,24,16),tt);j.scale.set(1,1.15,.6),j.position.z=-.012;let Tt=new yt(new Ce(.15,24,16),I);Tt.scale.set(1,1.15,.72);let qt=new Pe;qt.position.z=.074;let Ne=new yt(new Ce(.07,16,12),z);Ne.scale.z=.6;let Jt=new yt(new Ce(.024,8,6),new en({color:"#FFFFFF"}));Jt.position.set(.028,.035,.04),qt.add(Ne,Jt),jt.add(j,Tt,qt),v.add(jt),C.push(jt),N.push(qt)}let xt=new yt(new ii(.075,.017,6,16,Math.PI*.8),new en({color:"#1B1F3B"}));xt.rotation.z=Math.PI+Math.PI*.1,xt.position.set(0,0,.462),xt.rotation.x=-.2;let ft=new yt(new Ce(.05,12,10),new en({color:"#7A1F2B"}));ft.scale.set(1,1.25,.4),ft.position.set(0,-.04,.47),ft.visible=!1,v.add(xt,ft);let at=new Pe;v.add(at);let ut=[];if(w.acc==="blush"||w.id==="orange")for(let Wt of[-1,1]){let jt=new yt(new vi(.07,16),new en({color:"#FF7896",transparent:!0,opacity:.5}));jt.position.set(Wt*.33,-.06,.36),jt.rotation.y=Wt*.75,jt.scale.y=.62,at.add(jt)}if(w.acc==="leaf"){let Wt=new yt(new De(.018,.022,.14,6),Dt("#6B3E1F"));Wt.position.set(0,.54,0),Wt.rotation.z=-.15;let jt=new yt(new Ce(.15,16,8),Dt("#3FB950"));jt.scale.set(1,.18,.5),jt.position.set(.13,.6,0),jt.rotation.z=.45,at.add(Wt,jt)}else if(w.acc==="antenna")for(let Wt of[-1,1]){let jt=new yt(new De(.014,.014,.32,6),Dt(w.dark));jt.position.set(Wt*.18,.58,0),jt.rotation.z=-Wt*.35;let j=new yt(new Ce(.06,12,10),Dt("#FF5DA2",{emissive:"#FF5DA2",emissiveIntensity:.3}));j.position.set(Wt*.235,.73,0),at.add(jt,j)}else if(w.acc==="crown"){let Wt=Dt("#FFC400",{shininess:110,specular:"#FFF2B0",emissive:"#5A3D00",emissiveIntensity:.3}),jt=new yt(new De(.25,.23,.12,28,1,!0),Wt);jt.material.side=Xe,jt.position.y=.48,at.add(jt);for(let j=0;j<6;j++){let Tt=j/6*Ve,qt=new yt(new zn(.05,.16,6),Wt);qt.position.set(Math.sin(Tt)*.24,.6,Math.cos(Tt)*.24),at.add(qt);let Ne=new yt(new Ce(.028,8,6),Dt(j%2?"#2EA8FF":"#E63946",{shininess:140,specular:"#FFFFFF"}));Ne.position.set(Math.sin(Tt)*.255,.48,Math.cos(Tt)*.255),at.add(Ne)}}else if(w.acc==="star"){let Wt=new kn;for(let j=0;j<10;j++){let Tt=j/10*Ve-Math.PI/2,qt=j%2?.06:.14;j?Wt.lineTo(Math.cos(Tt)*qt,-Math.sin(Tt)*qt):Wt.moveTo(Math.cos(Tt)*qt,-Math.sin(Tt)*qt)}let jt=new yt(new Dr(Wt,{depth:.04,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:1}),Dt("#FFE066",{emissive:"#FFB703",emissiveIntensity:.5,shininess:90}));jt.position.set(0,.74,-.02),at.add(jt),at.userData.star=jt}else if(w.acc==="band"){let Wt=Dt("#E63946"),jt=new yt(new ii(.43,.05,8,40),Wt);jt.rotation.x=Math.PI/2-.08,jt.position.y=.2,jt.scale.set(1.05,.95,1),at.add(jt);for(let j of[-1,1]){let Tt=new yt(new nn(.06,.03,.3),Wt);Tt.position.set(j*.06,.18,-.55),Tt.rotation.set(.5,j*.3,0),at.add(Tt),at.userData["tail"+j]=Tt}}else if(w.acc==="hat"){let Wt=Dt("#946232",{shininess:14}),jt=Dt("#4A2E14",{shininess:12}),j=new yt(new De(.46,.48,.035,36),Wt);j.position.y=.4;let Tt=new yt(new Ce(.29,28,14,0,Ve,0,Math.PI/2),Wt);Tt.position.y=.41,Tt.scale.y=.75;let qt=new yt(new De(.292,.295,.06,28,1,!0),jt);qt.material.side=Xe,qt.position.y=.45;let Ne=new Pe;Ne.add(j,Tt,qt),Ne.rotation.set(-.12,0,.06),at.add(Ne);let Jt=Dt("#E63946",{shininess:15,side:Xe}),Se=new yt(new ii(.34,.04,8,36),Jt);Se.rotation.x=Math.PI/2,Se.position.y=-.4,Se.scale.set(1.05,.95,1),at.add(Se);let $e=new kn;$e.moveTo(-.2,0),$e.lineTo(.2,0),$e.lineTo(.02,-.17),$e.closePath();let Be=new yt(new Ii($e),Jt);Be.position.set(0,-.38,.33),Be.rotation.x=-.55,at.add(Be)}if(E){for(let jt=0;jt<7;jt++){let j=jt/7*Math.PI-Math.PI/2,Tt=new yt(new zn(.09,.4,8,1,!0),new en({color:jt%2?"#FFB13B":"#FF5A1F",transparent:!0,opacity:.9,depthWrite:!1,blending:si}));Tt.position.set(Math.sin(j)*.28,.42+Math.cos(j)*.05,-.12-Math.abs(Math.cos(j))*.08),Tt.userData.ph=jt,v.add(Tt),ut.push(Tt)}let Wt=new qi(new Ci({map:ie,color:"#FF6A1F",transparent:!0,opacity:.55,depthWrite:!1,blending:si}));Wt.scale.setScalar(2.2),v.add(Wt)}ee(O),Z.castShadow=!1;let dt=new Pe,At=["#E63946","#FFFFFF","#FFB703","#FFFFFF","#2EA8FF","#FFFFFF"],gt=pe(new Ce(1.7,24,8,0,Ve,0,Math.PI*.42),(Wt,jt,j,Tt)=>Wt.set(At[Math.floor((Math.atan2(Tt,jt)/Ve+1)%1*12+1e-4)%6])),Rt=new Ke({vertexColors:!0,side:Xe,transparent:!0,opacity:1}),te=new yt(gt,Rt);te.scale.set(1,.62,1),te.castShadow=!0;let de=new Float32Array(60),oe=new vr(new Oe,new Ps({color:"#4A4A5A",transparent:!0,opacity:.85}));oe.geometry.setAttribute("position",new He(de,3)),oe.frustumCulled=!1;let be=new Pe;be.position.y=1.6,be.add(te),dt.add(be,oe),dt.visible=!1;let Lt=new yt(gt,Rt.clone());Lt.visible=!1,Lt.castShadow=!1,n.add(dt,Lt);let Re=new yt(new Oe,Dt("#8B5A2B",{shininess:5}));return Re.visible=!1,Re.castShadow=!0,n.add(Re),n.add(O),{id:w.id,root:O,inner:v,eyes:C,pupils:N,smile:xt,ooh:ft,feet:_,acc:at,flames:ut,bodyMat:it,fire:E,chute:dt,canopy:te,canopyHolder:be,lines:oe,drop:Lt,rope:Re,turn:0,blink:0,nextBlink:2}}function Fe(){if(Qt){for(let w of[Qt.root,Qt.chute,Qt.drop,Qt.rope])n.remove(w),w.traverse(O=>{O.geometry&&O.geometry.dispose(),O.material&&[].concat(O.material).forEach(v=>v.dispose())});Qt=null}}let k=(()=>{let w=new Pe,O=new Pe;w.add(O);let v=Dt("#D9A066",{shininess:18}),E=Dt("#ECCB9C",{shininess:18}),V=Dt("#3B2A1A",{shininess:40}),it=[[-.56,0],[-.54,.1],[-.48,.17],[-.36,.2],[-.18,.18],[0,.185],[.18,.21],[.32,.215],[.44,.18],[.53,.11],[.57,0]],X=new Vn(it.map(([ut,dt])=>new nt(dt,ut)),36);{let ut=X.attributes.position;for(let dt=0;dt<ut.count;dt++){let At=ut.getX(dt),gt=ut.getY(dt),Rt=ut.getZ(dt),te=Math.exp(-(((gt+.1)/.22)**2));At<0&&(At*=1-te*.28),ut.setXYZ(dt,gt,-At*(At<0?.95:1.05),Rt*.82)}X.computeVertexNormals()}X=pe(X,(ut,dt,At)=>{let gt=At/.21;gt<-.45?ut.set("#FFF6E8"):gt<-.15?cn(ut,"#6A3F1F","#8A5528",(gt+.45)/.3):cn(ut,"#D9A066","#C58A50",(gt-.3)*1.5),dt<-.46&&gt<.55&&ut.set("#FFF6E8")});let ht=new yt(X,Dt("#FFFFFF",{vertexColors:!0,shininess:22}));ht.position.y=.8,O.add(ht);let Z=new Pe;Z.position.set(-.56,.86,0);let et=new yt(new xi(.025,.1,3,6),Dt("#2B1D12"));et.position.y=-.06,Z.add(et),Z.rotation.z=.5,O.add(Z);let _=new Pe;_.position.set(.42,.88,0),O.add(_);let C=new yt(new De(.055,.1,.5,14),v);C.position.y=.23,C.scale.z=.85,_.add(C);let N=new yt(new De(.036,.06,.42,10),Dt("#FFF6E8"));N.position.set(.04,.21,0),N.rotation.z=-.08,_.add(N),_.rotation.z=-.6;let I=new Pe;I.position.set(0,.49,0),I.scale.setScalar(1.12),_.add(I);let z=new yt(new Ce(.11,24,16),v);z.scale.set(1.35,.9,.82),I.add(z);let tt=new yt(new Ce(.075,18,12),E);tt.position.set(.14,-.045,0),tt.scale.set(1.25,.8,.85),I.add(tt);let xt=new yt(new Ce(.03,10,8),V);xt.position.set(.225,-.035,0),I.add(xt);for(let ut of[-1,1]){let dt=new yt(new Ce(1,10,6),Dt("#5A3518"));dt.scale.set(.1,.012,.01),dt.position.set(.1,-.012,ut*.07),dt.rotation.z=-.28,I.add(dt);let At=new yt(new Ce(1,10,6),Dt("#FFF6E8"));At.scale.set(.095,.012,.01),At.position.set(.085,.022,ut*.074),At.rotation.z=-.22,I.add(At);let gt=new yt(new Ce(.026,12,10),Dt("#120C08",{shininess:160,specular:"#FFFFFF"}));gt.position.set(.035,.035,ut*.083),I.add(gt);let Rt=new yt(new Ce(.07,12,8),v);Rt.scale.set(.45,1.25,.25),Rt.position.set(-.08,.1,ut*.08),Rt.rotation.set(ut*.6,0,.6),I.add(Rt);let te=new ei([new D(-.02,.07,ut*.035),new D(-.09,.22,ut*.07),new D(-.07,.38,ut*.085),new D(0,.47,ut*.06)]),de=new Pi(te,18,.019,7);{let be=de.attributes.position,Lt=8;for(let Re=0;Re<=18;Re++){let Wt=te.getPointAt(Re/18),jt=1-Re/18*.7;for(let j=0;j<Lt;j++){let Tt=Re*Lt+j;be.setXYZ(Tt,Wt.x+(be.getX(Tt)-Wt.x)*jt,Wt.y+(be.getY(Tt)-Wt.y)*jt,Wt.z+(be.getZ(Tt)-Wt.z)*jt)}}de.computeVertexNormals()}let oe=pe(de,(be,Lt,Re)=>be.set(Math.floor(Re*55)%2?"#3B2A1A":"#5A4330"));I.add(new yt(oe,Dt("#FFFFFF",{vertexColors:!0,shininess:50})))}let ft=new Je;ft.position.set(0,.38,0),_.add(ft);let at=[];for(let[ut,dt]of[[.34,1],[-.38,0]])for(let At of[-1,1]){let gt=new Pe;if(gt.position.set(ut,.76,At*.09),O.add(gt),dt){let Lt=new yt(new Ce(.075,12,10),v);Lt.scale.set(1.1,1.7,.6),Lt.position.set(.01,-.05,0),gt.add(Lt)}else{let Lt=new yt(new Ce(.1,14,10),v);Lt.scale.set(1.15,1.6,.55),Lt.position.set(0,-.07,0),gt.add(Lt)}let Rt=new yt(new De(dt?.026:.03,dt?.04:.055,.36,10),v);Rt.position.y=-.2,gt.add(Rt);let te=new Pe;te.position.y=-.38,gt.add(te);let de=new yt(new Ce(.024,8,6),E);te.add(de);let oe=new yt(new De(.014,.02,.34,8),E);oe.position.y=-.17,te.add(oe);let be=new yt(new De(.017,.024,.045,8),Dt("#20150D",{shininess:60}));be.position.y=-.355,te.add(be),at.push({hip:gt,knee:te,front:dt,s:At})}return ee(w),n.add(w),{root:w,body:O,neck:_,head:I,tail:Z,legs:at,collar:ft,yaw:-.25,z:0,neckA:-.6}})(),Ge=(()=>{let w=new Pe,O=Dt("#C98E62",{shininess:12}),v=Dt("#F2EEE4",{shininess:8}),E=Dt("#5B3A24",{shininess:14,side:Xe}),V=new yt(new Vn([new nt(.001,0),new nt(.27,0),new nt(.275,.1),new nt(.25,.5),new nt(.232,.9),new nt(.222,1.2),new nt(.2,1.34),new nt(.12,1.42),new nt(.05,1.45)],30),v);w.add(V);for(let dt of[-1,1]){let At=new yt(new nn(.1,.04,.2),Dt("#4A2E18"));At.position.set(dt*.09,.02,.2),w.add(At)}let it=new yt(new Vn([new nt(.245,.06),new nt(.295,.08),new nt(.285,.5),new nt(.265,.9),new nt(.255,1.2),new nt(.24,1.33),new nt(.16,1.41)],30,.62,Ve-1.24),E);w.add(it);let X=Dt("#D4AF37",{shininess:90,specular:"#FFF2B0"});for(let dt of[-1,1]){let At=dt*.62,gt=[[.247,.08],[.297,.1],[.287,.5],[.267,.9],[.257,1.2],[.242,1.33],[.162,1.41]].map(([Rt,te])=>new D(Math.sin(At)*(Rt+.006),te,Math.cos(At)*(Rt+.006)));w.add(new yt(new Pi(new ei(gt),20,.014,6),X))}let ht=[];for(let dt of[-1,1]){let At=new Pe;At.position.set(dt*.25,1.3,0),w.add(At);let gt=new yt(new xi(.072,.28,4,10),E);gt.position.y=-.18,At.add(gt);let Rt=new Pe;Rt.position.y=-.36,At.add(Rt);let te=new yt(new xi(.068,.22,4,10),E);te.position.y=-.14,Rt.add(te);let de=new yt(new De(.055,.06,.05,10),v);de.position.y=-.3,Rt.add(de);let oe=new yt(new Ce(.052,12,10),O);if(oe.position.y=-.36,oe.scale.set(.9,1.1,.8),Rt.add(oe),dt<0){let be=new yt(new ii(.06,.011,6,18),Dt("#E0A03C",{shininess:80,specular:"#FFF0C8"}));be.position.set(0,-.44,.02),be.rotation.y=.4,Rt.add(be)}At.rotation.z=dt*.12,Rt.rotation.x=-.25,ht.push({sh:At,el:Rt,s:dt})}let Z=new yt(new De(.06,.07,.1,10),O);Z.position.y=1.46,w.add(Z);let et=new Pe;et.position.y=1.6,w.add(et);let _=new yt(new Ce(.155,28,20),O);_.scale.set(.94,1.08,1),et.add(_);let C=new yt(new Ce(.034,10,8),Dt("#B97C52"));C.position.set(0,-.005,.15),C.scale.set(.85,1.1,1.25),et.add(C);for(let dt of[-1,1]){let At=new yt(new Ce(.019,10,8),Dt("#1B140F",{shininess:120,specular:"#FFFFFF"}));At.position.set(dt*.055,.025,.135),et.add(At);let gt=new yt(new nn(.065,.016,.02),Dt("#3A3430"));gt.position.set(dt*.056,.058,.138),gt.rotation.z=-dt*.12,et.add(gt);let Rt=new yt(new xi(.019,.06,3,6),Dt("#2A2420"));Rt.position.set(dt*.034,-.045,.142),Rt.rotation.z=dt*1.15,et.add(Rt)}let N=new yt(new Ce(.16,24,10,Math.PI/2-1.2,2.4,Math.PI*.6,Math.PI*.3),Dt("#4A4440",{side:Xe,shininess:5}));et.add(N);let I=new yt(new Ce(.026,10,8),new en({color:"#4A1A14"}));I.position.set(0,-.07,.143),I.scale.set(1,.3,.5),et.add(I);let z=ea(128,128,(dt,At,gt)=>{dt.fillStyle="#FBF8F2",dt.fillRect(0,0,At,gt),dt.fillStyle="#C8102E";for(let Rt=0;Rt<gt;Rt+=16)for(let te=0;te<At;te+=16)dt.fillRect(te+2,Rt+2,7,7),dt.fillRect(te+9,Rt+9,5,5),dt.fillRect(te+9,Rt+2,2,2),dt.fillRect(te+2,Rt+11,2,2)},[5,5]),tt=new Ke({map:z,side:Xe}),xt=new yt(new Ce(.168,28,14,0,Ve,0,Math.PI*.52),tt);xt.rotation.x=-.42,xt.position.y=.01,et.add(xt);let ft=new yt(new Vn([new nt(.168,.02),new nt(.18,-.06),new nt(.2,-.16),new nt(.24,-.26),new nt(.28,-.33)],28,1.15,Ve-2.3),tt);et.add(ft);let at=new yt(new ni(.2,.36),tt);at.position.set(.17,-.25,.1),at.rotation.set(-.15,.6,-.08),et.add(at);let ut=Dt("#141414",{shininess:40});for(let[dt,At]of[[.07,.154],[.097,.139]]){let gt=new yt(new ii(At,.015,8,36),ut);gt.position.set(0,dt*.913,-dt*.408),gt.rotation.x=Math.PI/2-.42,et.add(gt)}return ee(w),n.add(w),{root:w,head:et,arms:ht,mouth:I,yaw:0}})(),ge=new Is(new De(.22,.22,.05,22),new yi({color:"#FFC93C",specular:"#FFF4C0",shininess:90,emissive:"#6B4A00",emissiveIntensity:.55}),40);ge.castShadow=!0,ge.count=0,ge.frustumCulled=!1,n.add(ge);let Ae=new Pe;{let w=new yt(new Nr(.95,1.18,48),new en({color:"#FFD23F",transparent:!0,opacity:.9,depthWrite:!1,side:Xe}));w.rotation.x=-Math.PI/2,w.position.y=.03;let O=new yt(new vi(.95,40),new en({color:"#FFE38A",transparent:!0,opacity:.25,depthWrite:!1}));O.rotation.x=-Math.PI/2,O.position.y=.025;let v=new yt(new zn(.2,.42,4),new yi({color:"#FFB703",emissive:"#FF8A00",emissiveIntensity:.6,shininess:80}));v.rotation.x=Math.PI,v.position.y=1.9,Ae.add(w,O,v),Ae.userData={ring:w,arrow:v},Ae.visible=!1,n.add(Ae)}let Nt=(w,O)=>{let v=(O-w)%Ve;return v>Math.PI&&(v-=Ve),v<-Math.PI&&(v+=Ve),v},Le=(w,O,v,E)=>w+Nt(w,O)*(1-Math.exp(-v*E)),K={phase:"fall",t:0,p:null,gz:null,coins:[],caught:!1,delivered:!1,met:!1,called:!1,coinsGot:0,camp:null,drop:null,focus:null,merW:new D,zoneW:new D,penW:new D},he=[];function P(w){K.camp=w,bt.position.set(w.x,w.base,w.z),bt.rotation.y=w.rot,bt.updateMatrixWorld(!0),K.merW.copy(Ct.mer).applyMatrix4(bt.matrixWorld),K.zoneW.copy(Ct.zone).applyMatrix4(bt.matrixWorld),K.penW.copy(Ct.pen).applyMatrix4(bt.matrixWorld),Ge.root.position.copy(K.merW),Ge.root.rotation.y=w.rot,Ge.yaw=w.rot,Ae.position.set(K.zoneW.x,f(K.zoneW.x,K.zoneW.z),K.zoneW.z),he=Kt.map(([O,v,E])=>{let V=new D(O,0,v).applyMatrix4(bt.matrixWorld);return{x:V.x,z:V.z,r:E}})}function S(w,O,v,E){for(let V of E){let it=w-V.x,X=O-V.z,ht=v+V.r,Z=it*it+X*X;if(Z<ht*ht&&Z>1e-8){let et=Math.sqrt(Z),_=(ht-et)/et;w+=it*_,O+=X*_}}return[w,O]}let J=()=>H.concat(he),wt=(w,O)=>w>1.5&&w<d-1.5&&Math.abs(O)<u-1.2&&y(w,O)<.55;function pt(w,O){(!Qt||Qt.id!==w.id)&&(Fe(),Qt=Te(w));let v=ki(O>>>0);P(b[Math.floor(v()*b.length)]);let E=32+v()*56,V=g(E)+(v()<.5?-3:3);K.p={x:E,z:V,y:f(E,V)+42,vx:0,vz:0,vy:-3,face:0,chute:0,rot:0,landT:0,hopPh:0,speed:0,water:!1,run:!1},K.coins=[];for(let ht=0;ht<20;ht++){let Z=ht*.62;K.coins.push({x:E+Math.cos(Z)*3.2,z:V+Math.sin(Z)*3.2,y:K.p.y-4-ht*1.55,taken:!1})}let it=60,X=0;for(let ht=0;ht<400;ht++){let Z=6+v()*(d-12),et=(v()-.5)*2*(u-2.5);if(!(Math.hypot(Z-E,et-V)<36||Math.hypot(Z-K.camp.x,et-K.camp.z)<24||Math.abs(et-g(Z))<2.2||!wt(Z,et))){it=Z,X=et;break}}return K.gz={x:it,z:X,y:0,vx:0,vz:0,face:v()*Ve,state:"graze",t:0,gt:2.5,sus:0,stamina:4,ph:0,triedLeap:!1,tx:it,tz:X,fx:1,fz:0,stuck:0},Object.assign(K,{phase:"fall",t:0,caught:!1,delivered:!1,met:!1,called:!1,coinsGot:0,drop:null,focus:null}),Y.yaw=0,Y.pitch=.5,Y.dist=9,Y.init=!1,Ut=0,zt=0,Et=-1,{camp:b.indexOf(K.camp),gazelle:[it,X],start:[E,V]}}function Pt(w,O){w.state="flee",w.t=0,w.stuck=0;let v=K.p,E=Math.hypot(w.x-v.x,w.z-v.z)||1;w.fx=(w.x-v.x)/E,w.fz=(w.z-v.z)/E,O.push("snort")}function Bt(w,O){let v=K.gz,E=K.p;v.t+=w;let V=E.x-v.x,it=E.z-v.z,X=Math.hypot(V,it)||.001,ht=Math.atan2(it,V),Z=E.speed,et=Math.hypot(v.vx,v.vz)>.2;if(v.ph+=w*(v.state==="flee"?15:et?8:0),v.state!=="flee"&&v.state!=="leap"&&(v.stamina=Math.min(4,v.stamina+w*(v.state==="tired"?.5:.8))),!K.caught&&(v.state==="graze"||v.state==="look"||v.state==="walk"||v.state==="alert")){let C=X<22?1+(1-X/22)*1.6:0,N=v.state!=="graze",z=(Z>4?N?2.6:1.4:Z>.5?N?1.1:.06:0)*C;v.sus=pn(v.sus+(z>0?z:-.3)*w,0,1)}let _=(C,N,I)=>{let z=C-v.x,tt=N-v.z,xt=Math.hypot(z,tt);if(xt<.05)return v.vx=v.vz=0,xt;v.vx=We(v.vx,z/xt*I,6,w),v.vz=We(v.vz,tt/xt*I,6,w);let ft=v.x+v.vx*w,at=v.z+v.vz*w;return[ft,at]=S(ft,at,.42,J()),y(ft,at)<.7&&(v.x=ft,v.z=at),v.face=Le(v.face,Math.atan2(v.vz,v.vx),7,w),xt};switch(v.state){case"graze":if(v.vx=v.vz=0,v.sus>.5)v.state="alert",v.t=0,O.push("snort");else if(v.t>v.gt)if(v.t=0,Math.random()<.72)v.state="look";else for(let C=0;C<12;C++){let N=v.x+(Math.random()-.5)*14,I=v.z+(Math.random()-.5)*10;if(wt(N,I)&&Math.abs(I-g(N))>1.6){v.tx=N,v.tz=I,v.state="walk";break}}break;case"look":v.vx=v.vz=0,X<26&&(v.face=Le(v.face,ht,4,w)),v.sus>.5?(v.state="alert",v.t=0,O.push("snort")):v.t>1.1&&(v.state="graze",v.t=0,v.gt=1.4+Math.random()*1.8);break;case"walk":if(v.sus>.5){v.state="alert",v.t=0,v.vx=v.vz=0,O.push("snort");break}(_(v.tx,v.tz,1.1)<.4||v.t>6)&&(v.state="graze",v.t=0,v.vx=v.vz=0,v.gt=1.4+Math.random()*1.8);break;case"alert":v.vx=v.vz=0,v.face=Le(v.face,ht,8,w),v.sus>=1||X<1.6?Pt(v,O):v.sus<.3&&(v.state="graze",v.t=0,v.gt=1.2+Math.random()*1.2);break;case"flee":{v.stamina-=w;let C=8.2*(.55+.45*Math.max(0,v.stamina)/4),N=-V/X,I=-it/X;Math.abs(v.z)>5.5&&(I-=Math.sign(v.z)*(Math.abs(v.z)-5.5)*.45),v.x<8&&(N+=(8-v.x)*.35),v.x>d-8&&(N-=(v.x-d+8)*.35);let z=Math.hypot(N,I)||1;v.fx=We(v.fx,N/z,5,w),v.fz=We(v.fz,I/z,5,w);let tt=Math.hypot(v.fx,v.fz)||1,xt=v.fx/tt,ft=v.fz/tt,at=v.x+xt*C*w,ut=v.z+ft*C*w;[at,ut]=S(at,ut,.42,J());let dt=Math.hypot(at-v.x,ut-v.z);y(at,ut)<.7&&Math.abs(ut)<u+1&&at>1&&at<d-1&&(v.vx=(at-v.x)/w,v.vz=(ut-v.z)/w,v.x=at,v.z=ut),v.stuck=dt<C*w*.35?v.stuck+w:0,v.face=Le(v.face,Math.atan2(ft,xt),10,w),v.stuck>.35&&X<10?(v.state="cornered",v.t=0,v.vx=v.vz=0):v.stamina<=0?(v.state="tired",v.t=0,O.push("tired")):X>32&&v.t>1.5&&(v.state="graze",v.t=0,v.vx=v.vz=0,v.sus=.35,v.gt=1.5);break}case"tired":X<9?_(v.x-V/X*2,v.z-it/X*2,2.3):v.vx=v.vz=0,v.stamina>3.2&&v.t>2.2&&(v.sus=.45,X<6?Pt(v,O):(v.state="graze",v.t=0));break;case"cornered":if(v.vx=v.vz=0,v.face=Le(v.face,ht,8,w),!v.triedLeap&&X<4&&v.t>.4){let C=E.x+V/X*4.5,N=E.z+it/X*4.5;wt(C,N)||(C=E.x+V/X*3,N=pn(E.z+it/X*3,-(u-2),u-2)),Object.assign(v,{triedLeap:!0,state:"leap",t:0,from:[v.x,v.z],to:[C,N]}),O.push("snort")}else v.t>4&&X>9&&(v.state="graze",v.t=0,v.sus=.4);break;case"leap":{let C=Math.min(1,v.t/.75);v.x=Bi(v.from[0],v.to[0],C),v.z=Bi(v.from[1],v.to[1],C),v.y=Math.sin(C*Math.PI)*1.5,v.vx=(v.to[0]-v.from[0])/.75,v.vz=(v.to[1]-v.from[1])/.75,v.face=Math.atan2(v.vz,v.vx),C>=1&&(v.y=0,Pt(v,O));break}case"follow":{let C=E.x-Math.cos(E.face)*1.45,N=E.z-Math.sin(E.face)*1.45,I=Math.hypot(C-v.x,N-v.z),z=Math.min(7,I*3.2);I>.08?_(C,N,z):v.vx=v.vz=0;break}case"pen":{let C=Math.hypot(K.penW.x-v.x,K.penW.z-v.z);C>.3?(v.vx=(K.penW.x-v.x)/C*1.3,v.vz=(K.penW.z-v.z)/C*1.3,v.x+=v.vx*w,v.z+=v.vz*w,v.face=Le(v.face,Math.atan2(v.vz,v.vx),6,w)):v.vx=v.vz=0;break}}!K.caught&&["graze","look","walk","alert","tired","cornered"].includes(v.state)&&X<1.2&&v.y<.25&&(K.caught=!0,v.state="follow",v.vx=v.vz=0,v.sus=0,K.focus={t:2.2,dist:5.2,yaw:Math.atan2(v.z-E.z,v.x-E.x)-Math.PI/2},O.push("catch"))}function ct(w,O){let v=[],E=K.p;if(!E)return v;K.t+=w,Y.yaw+=O.dyaw||0,Y.pitch=pn(Y.pitch+(O.dpitch||0),.06,1.15);let V=Math.cos(Y.yaw),it=Math.sin(Y.yaw),X=-Math.sin(Y.yaw),ht=Math.cos(Y.yaw),Z=V*(O.jy||0)+X*(O.jx||0),et=it*(O.jy||0)+ht*(O.jx||0),_=Math.hypot(Z,et);_>1e-4&&(Z/=_,et/=_);let C=pn(O.mag||0,0,1);if(K.phase!=="walk"){K.phase==="fall"?(E.rot+=w*8,E.vy=Math.max(E.vy-9.8*w,-16),K.t>1.1&&(K.phase="glide",v.push("chute"))):(E.chute=Math.min(1,E.chute+w*3),E.rot*=Math.pow(.015,w),E.vy+=(-2.4-E.vy)*Math.min(1,w*3));let N=(K.phase==="glide"?4.6:1.5)*C;E.vx=We(E.vx,Z*N,3,w),E.vz=We(E.vz,et*N,3,w),E.x=pn(E.x+E.vx*w,2,d-2),E.z=pn(E.z+E.vz*w,-(u+3),u+3),E.y+=E.vy*w,C>.1&&(E.face=Le(E.face,Math.atan2(et,Z),5,w));for(let z of K.coins)!z.taken&&Math.hypot(z.x-E.x,z.z-E.z)<1.25&&Math.abs(z.y-(E.y+.55))<1.3&&(z.taken=!0,K.coinsGot++,v.push(["coin",z]));let I=f(E.x,E.z);E.y<=I&&(E.y=I,E.vy=0,E.rot=0,E.chute=0,E.landT=.35,K.phase="walk",K.drop={x:E.x+Math.cos(E.face)*1.2,z:E.z+Math.sin(E.face)*1.2,t:0,face:E.face},Y.pitch=Math.min(Y.pitch,.3),v.push("land"))}else{let N=C>.62&&!O.sneak,I=C<.08?0:N?5.6:2.2*pn(C/.62,.4,1);E.water=Math.abs(E.z-g(E.x))<.95;let z=I*(E.water?.6:1);E.vx=We(E.vx,Z*z,10,w),E.vz=We(E.vz,et*z,10,w);let tt=E.x+E.vx*w,xt=E.z+E.vz*w,ft=f(E.x,E.z),at=(gt,Rt)=>{let te=Math.hypot(gt-E.x,Rt-E.z);return te<1e-6||(f(gt,Rt)-ft)/te<.8};at(tt,xt)||(at(tt,E.z)?xt=E.z:at(E.x,xt)?tt=E.x:(tt=E.x,xt=E.z)),[tt,xt]=S(tt,xt,.4,J()),K.caught&&!K.delivered&&([tt,xt]=S(tt,xt,.4,[{x:K.gz.x,z:K.gz.z,r:.25}])),tt=pn(tt,.6,d-.6),E.speed=Math.hypot(tt-E.x,xt-E.z)/w,E.run=N&&E.speed>3,E.x=tt,E.z=xt,E.y=f(tt,xt),E.speed>.3&&(E.face=Le(E.face,Math.atan2(E.vz,E.vx),12,w));let ut=E.hopPh;E.hopPh=E.speed<.3?0:E.hopPh+E.speed*w*2.1,E.hopPh&&Math.floor(ut/Math.PI)!==Math.floor(E.hopPh/Math.PI)&&v.push(E.water?"splash":["step",E.run]),E.landT=Math.max(0,E.landT-w),Bt(w,v);let dt=Math.hypot(E.x-K.merW.x,E.z-K.merW.z);!K.called&&dt<24&&(K.called=!0,v.push("call"));let At=Math.atan2(-Math.cos(K.camp.rot),-Math.sin(K.camp.rot));if(!K.met&&dt<4.2&&(K.met=!0,K.focus={t:3.2,dist:6.2,x:(E.x+K.merW.x)/2,z:(E.z+K.merW.z)/2,yaw:At},v.push("meet")),K.caught&&!K.delivered&&Math.hypot(E.x-K.zoneW.x,E.z-K.zoneW.z)<1.7){K.delivered=!0,K.gz.state="pen";let gt=(E.x+K.merW.x)/2,Rt=(E.z+K.merW.z)/2;K.focus={t:4.6,dist:6.6,x:gt,z:Rt,yaw:At},v.push("deliver")}}return K.drop&&(K.drop.t+=w),K.focus&&(K.focus.t-=w,K.focus.t<=0&&(K.focus=null)),U(w),v}let Y={yaw:0,pitch:.34,dist:5.2,init:!1,tgt:new D,pos:new D},It=new D,Vt=new D;function U(w){let O=K.p,v=K.phase==="walk",E=K.focus;It.set(E&&E.x!=null?E.x:O.x,O.y+(v?1.45:.6),E&&E.z!=null?E.z:O.z),E&&(Y.yaw=Le(Y.yaw,E.yaw,2.2,w));let V=E?E.dist:v?6.2:9;Y.init||(Y.tgt.copy(It),Y.dist=V,Y.init=!0),Y.tgt.x=We(Y.tgt.x,It.x,v?14:8,w),Y.tgt.z=We(Y.tgt.z,It.z,v?14:8,w),Y.tgt.y=We(Y.tgt.y,It.y,v?10:12,w),Y.dist=We(Y.dist,V,3,w);let it=Y.dist,X=Z=>Vt.set(Y.tgt.x-Math.cos(Y.yaw)*Math.cos(Y.pitch)*Z,Y.tgt.y+Math.sin(Y.pitch)*Z,Y.tgt.z-Math.sin(Y.yaw)*Math.cos(Y.pitch)*Z);for(let Z=1;Z<=6;Z++){let et=Z/6;if(X(it*et),Vt.y<f(Vt.x,Vt.z)+.45){it=Math.max(1.6,it*(et-1/6));break}}X(it);for(let Z of H){if(!Z.tall)continue;let et=Vt.x-Z.x,_=Vt.z-Z.z,C=et*et+_*_,N=Z.r+.35;if(C<N*N&&Vt.y<f(Z.x,Z.z)+6.5){let I=Math.sqrt(C)||.01;Vt.x=Z.x+et/I*N,Vt.z=Z.z+_/I*N}}let ht=f(Vt.x,Vt.z)+.45;Vt.y<ht&&(Vt.y=ht),Y.pos.copy(Vt)}function rt(){return(Y.yaw*180/Math.PI%360+360)%360}let Mt=0,Et=-1,Ut=0,zt=0,ae=2,St=390,ye=844,ne=new D,Ht=new D,ve=new Je;ve.rotation.order="YXZ";function Qe(w,O,v){St=w,ye=O,ae=v,e.setPixelRatio(v),e.setSize(w,O,!1),r.aspect=w/O,r.updateProjectionMatrix()}let Fn=w=>Math.PI/2-w;function na(w,O){let v=K.p,E=Qt,V=K.phase==="walk",it=V?Math.abs(Math.sin(v.hopPh))*(v.run?.17:.08):0;E.root.position.set(v.x,v.y+it,v.z),E.turn=Le(E.turn||Fn(v.face),Fn(v.face),14,O),E.root.rotation.y=E.turn,E.inner.rotation.z=-v.rot;let X=v.landT>0?v.landT*2.4:0;V&&v.speed>.3&&(X+=(1-Math.abs(Math.sin(v.hopPh)))*.22-.07),E.inner.scale.set(1+.2*X,1-.22*X,1+.2*X),E.inner.position.y=.55*(1-.22*X);for(let[C,N]of E.feet.entries())N.position.y=-.49+(V&&v.speed>.3?Math.max(0,Math.sin(v.hopPh*2+C*Math.PI))*.06:0);let ht=K.phase==="fall";E.nextBlink-=O,E.nextBlink<0&&(E.blink=.14,E.nextBlink=2.5+Math.random()*2.5),E.blink=Math.max(0,E.blink-O);let Z=ht?1.15:E.blink>0?.12:1;for(let C of E.eyes)C.scale.set(ht?1.08:1,Z,1);for(let C of E.pupils)C.scale.setScalar(ht?.72:1),C.position.x=0,C.position.y=V?0:-.035;E.smile.visible=!ht,E.ooh.visible=ht,E.acc.userData.star&&(E.acc.userData.star.rotation.y=w*2);for(let C of[-1,1]){let N=E.acc.userData["tail"+C];N&&(N.rotation.x=.5+Math.sin(w*12+C)*.25)}if(E.fire){E.bodyMat.emissiveIntensity=.5+Math.sin(w*13)*.1+Math.sin(w*7.3)*.08;for(let C of E.flames){let N=.8+Math.sin(w*14+C.userData.ph*1.7)*.25;C.scale.set(1,N,1)}}let et=E.chute;if(et.visible=v.chute>.01,et.visible){et.position.copy(E.root.position),et.rotation.y=E.root.rotation.y;let C=v.chute,N=C<1?Bi(.15,1,C)+Math.sin(C*Math.PI)*.12:1;E.canopyHolder.scale.set(N,Bi(.4,1,C),N),E.canopyHolder.position.y=Bi(1,2.25,C),et.rotation.z=-(Math.hypot(v.vx,v.vz)*.05)+Math.sin(w*1.5)*.05,et.rotation.x=Math.sin(w*1.1)*.05;let I=E.lines.geometry.attributes.position,z=E.canopyHolder.position.y,tt=1.7*Math.sin(Math.PI*.42)*N,xt=z+1.7*Math.cos(Math.PI*.42)*.62*Bi(.4,1,C);for(let ft=0;ft<10;ft++){let at=ft/10*Ve,ut=ft%2?.22:-.22;I.setXYZ(ft*2,Math.cos(at)*tt,xt,Math.sin(at)*tt),I.setXYZ(ft*2+1,ut,.85,0)}I.needsUpdate=!0}let _=K.drop;if(E.drop.visible=!!(_&&_.t<2.4),E.drop.visible){let C=pn(1-_.t*1.2,.1,1);E.drop.position.set(_.x,f(_.x,_.z)+.02,_.z),E.drop.scale.set(1.05,.62*C,1.05),E.drop.material.opacity=pn(1-(_.t-1.4),0,1)}}function Vs(w,O){let v=K.gz,E=k,V=v.state,it=Math.hypot(v.vx,v.vz)>.25,X=V==="flee"||V==="leap",ht=V==="tired",Z=it?Math.abs(Math.sin(v.ph))*(X?.07:.025):ht?Math.sin(w*9)*.008:0;E.root.position.set(v.x,f(v.x,v.z)+v.y,v.z),E.body.position.y=Z,E.yaw=Le(E.yaw,-v.face,X?14:8,O),E.root.rotation.y=E.yaw,E.body.rotation.z=X?Math.sin(v.ph*2)*.05:0;let et=V==="graze"||V==="pen"&&!it,_=et?-2.05:ht?-1.15:X?-.95:V==="alert"||V==="look"||V==="cornered"?-.32:-.6;E.neckA=We(E.neckA,_,et?3:7,O),E.neck.rotation.z=E.neckA,E.head.rotation.z=et?.5+Math.sin(w*7)*.08:V==="alert"||V==="look"?.2:.35,E.head.rotation.y=V==="look"||V==="alert"||V==="cornered"?Math.sin(w*1.6)*.25:0,E.tail.rotation.z=.5+(V==="alert"||X?.9:Math.sin(w*3)*.2);let C=X?.6:ht?.28:.36,N=V==="leap";for(let I of E.legs){let z=I.front?I.s>0?0:Math.PI:(I.s>0?Math.PI:0)+(X?.6:0);if(N){I.hip.rotation.z=I.front?.9:-.9,I.knee.rotation.z=I.front?-1.2:1.1;continue}if(it){let tt=Math.sin(v.ph+z);I.hip.rotation.z=tt*C,I.knee.rotation.z=(I.front?-1:1)*Math.max(0,-Math.cos(v.ph+z))*C*1.1}else I.hip.rotation.z=We(I.hip.rotation.z,0,8,O),I.knee.rotation.z=We(I.knee.rotation.z,0,8,O)}}function Al(w,O,v){let E=Ge,V=K.p,it=V.x-K.merW.x,X=V.z-K.merW.z,ht=Math.hypot(it,X),Z=ht<16||!!v,et=Z?Math.atan2(it,X):K.camp.rot+.15*Math.sin(w*.3);E.yaw=Le(E.yaw,et,3,O),E.root.rotation.y=E.yaw,E.root.position.set(K.merW.x,K.camp.base,K.merW.z),E.root.scale.y=1+Math.sin(w*1.7)*.007;let _=!!(v&&v.shown<[...v.text].length);E.mouth.scale.y=_?.25+Math.abs(Math.sin(w*15))*.9:.3,E.head.rotation.x=_?Math.sin(w*5)*.05:0;let[C,N]=E.arms;if(K.delivered){for(let I of E.arms)I.sh.rotation.z=We(I.sh.rotation.z,I.s*2.5,6,O),I.el.rotation.x=We(I.el.rotation.x,-.3+Math.sin(w*9+I.s)*.3,8,O);E.root.position.y=K.camp.base+Math.abs(Math.sin(w*6))*.06}else if(K.caught&&Z)N.sh.rotation.z=We(N.sh.rotation.z,1.35,5,O),N.el.rotation.x=We(N.el.rotation.x,0,5,O),N.sh.rotation.x=We(N.sh.rotation.x,-.2,5,O),C.sh.rotation.z=We(C.sh.rotation.z,-.12,5,O);else if(Z&&ht>2.5)N.sh.rotation.z=We(N.sh.rotation.z,2.55,5,O),N.el.rotation.x=We(N.el.rotation.x,0,5,O),N.el.rotation.z=Math.sin(w*8)*.45,N.sh.rotation.x=0,C.sh.rotation.z=We(C.sh.rotation.z,-.12,5,O);else for(let I of E.arms)I.sh.rotation.z=We(I.sh.rotation.z,I.s*.12,4,O),I.el.rotation.z=We(I.el.rotation.z,0,4,O),I.el.rotation.x=We(I.el.rotation.x,-.25,4,O),I.sh.rotation.x=0}function ia(){let w=Qt.rope;if(w.visible=K.caught&&!K.delivered,!w.visible)return;Qt.root.updateMatrixWorld(),k.root.updateMatrixWorld();let O=K.p,v=ne.set(O.x-Math.cos(O.face)*.3,Qt.root.position.y+.5,O.z-Math.sin(O.face)*.3),E=k.collar.getWorldPosition(Ht),V=v.clone().lerp(E,.5);V.y=Math.min(v.y,E.y)-.25,w.geometry.dispose(),w.geometry=new Pi(new Zi(v.clone(),V,E.clone()),18,.016,5)}function sa(w,O={}){let v=performance.now(),E=Mt?pn((v-Mt)/1e3,0,.1):1/60;Mt=v;let V=Et>=0?pn(w-Et,0,.1):1/60;if(Et=w,a.time.value=w,zt++,Ut=Ut*.97+(E>1/38?1:0)*.03,zt>90&&Ut>.6&&ae>1.01&&(Qe(St,ye,Math.max(1,ae-.25)),Ut=0,zt=0),!Qt||!K.p)return;na(w,V),Vs(w,V),Al(w,V,O.dlg),ia();let it=0;for(let Z=0;Z<K.coins.length&&it<40;Z++){let et=K.coins[Z];et.taken||(ve.position.set(et.x,et.y,et.z),ve.rotation.set(Math.PI/2,w*3+Z,0),ve.scale.setScalar(1),ve.updateMatrix(),ge.setMatrixAt(it++,ve.matrix))}if(ge.count=it,ge.instanceMatrix.needsUpdate=!0,Ae.visible=K.caught&&!K.delivered,Ae.visible){let Z=.5+.5*Math.sin(w*5);Ae.userData.ring.scale.setScalar(1+Z*.08),Ae.userData.arrow.position.y=1.9+Z*.25,Ae.userData.arrow.rotation.y=w*2}for(let Z of Ft.flames){let et=.75+Math.sin(w*13+Z.userData.i*2)*.18+Math.sin(w*23+Z.userData.i)*.08;Z.scale.set(1+Math.sin(w*9+Z.userData.i)*.08,et,1),Z.position.y=.12+Z.userData.h0*et/2}for(let Z of Ft.glows)Z.material.opacity=.5+Math.sin(w*11)*.08;Ft.lantern.rotation.z=Math.sin(w*1.6)*.08;for(let Z of Gt){let et=Z.userData,_=et.ax+Math.sin(w*.45+et.ph)*2.2,C=et.az+Math.sin(w*.7+et.ph*2)*.9,N=f(_,C)+.7+Math.sin(w*1.3+et.ph)*.35+Math.abs(Math.sin(w*4+et.ph))*.12;Z.position.set(_,N,C),Z.rotation.y=Math.cos(w*.45+et.ph)>0?-Math.PI/2:Math.PI/2;let I=Math.sin(w*22+et.ph)*1.1;et.l.rotation.y=I,et.r.rotation.y=-I}for(let Z of se){let et=Z.userData,_=w*et.sp+et.ph;Z.position.set(et.cx+Math.cos(_)*et.rad,et.y+Math.sin(w+et.ph)*.8,et.cz+Math.sin(_)*et.rad),Z.rotation.y=-_;let C=Math.sin(w*8+et.ph)*.6;et.l.rotation.z=C,et.r.rotation.z=-C}for(let Z of Zt.children)Z.position.x+=Z.userData.v*V,Z.position.x>220&&(Z.position.x=-80);if(r.position.copy(Y.pos),r.lookAt(Y.tgt),O.shake>0){let Z=O.shake*.25;r.position.x+=(Math.random()-.5)*Z,r.position.y+=(Math.random()-.5)*Z}p.position.copy(r.position);{let Z=ke.userData.seeds,et=ke.geometry.attributes.position,_=K.p;for(let C=0;C<Z.length;C++){let[N,I,z,tt]=Z[C];et.setXYZ(C,_.x+N*.8+Math.sin(w*.3+tt)*.8,_.y+I+Math.sin(w*.5+tt*2)*.3,_.z+(z-4)*.9+Math.cos(w*.25+tt)*.6)}et.needsUpdate=!0}let X=Math.round(K.p.x/.25)*.25,ht=Math.round(K.p.z/.25)*.25;h.target.position.set(X,K.p.y,ht),h.position.set(X+c.x*60,K.p.y+c.y*60,ht+c.z*60),e.render(n,r)}let yn=new D;function Hs(w,O,v){return yn.set(w,O,v).project(r),{x:(yn.x+1)/2,y:(1-yn.y)/2,vis:yn.z<1&&yn.z>-1}}function ra(w=160){n.updateMatrixWorld();let O=new D;Ge.head.getWorldPosition(O);let v=e.domElement.width,E=e.domElement.height,V=new dn(28,v/E,.05,1200),it=new D(Math.sin(Ge.root.rotation.y),0,Math.cos(Ge.root.rotation.y));V.position.copy(O).addScaledVector(it,1.75).add(new D(0,.05,0)),V.lookAt(O.x,O.y-.02,O.z),p.position.copy(V.position),h.target.position.copy(O),h.position.set(O.x+c.x*60,O.y+c.y*60,O.z+c.z*60);let X=[Qt&&Qt.root.visible,k.root.visible];Qt&&(Qt.root.visible=!1),k.root.visible=!1,e.render(n,V),Qt&&(Qt.root.visible=X[0]),k.root.visible=X[1];let ht=document.createElement("canvas");ht.width=ht.height=w;let Z=Math.min(v,E);return ht.getContext("2d").drawImage(e.domElement,(v-Z)/2,(E-Z)/2,Z,Z,0,0,w,w),ht.toDataURL("image/jpeg",.9)}function aa(){let w=e.domElement.width,O=e.domElement.height,v=w/O,E=-8,V=d+8,it=(V-E)/2,X=it*v,ht=new $i(-X,X,it,-it,1,600);ht.position.set((E+V)/2,300,0),ht.up.set(1,0,0),ht.lookAt((E+V)/2,0,0);let Z=[bt,Ge.root,k.root,ge,Ae,Zt,ke,...se,...Gt,...Qt?[Qt.root,Qt.chute,Qt.drop,Qt.rope]:[]],et=Z.map(z=>z.visible);Z.forEach(z=>{z.visible=!1});let _=n.fog.near,C=n.fog.far;n.fog.near=1e5,n.fog.far=2e5;let N=h.shadow.camera.right;Object.assign(h.shadow.camera,{left:-80,right:80,top:80,bottom:-80}),h.shadow.camera.updateProjectionMatrix(),h.target.position.set(d/2,0,0),h.position.set(d/2+c.x*120,c.y*120,c.z*120),e.render(n,ht),Object.assign(h.shadow.camera,{left:-N,right:N,top:N,bottom:-N}),h.shadow.camera.updateProjectionMatrix(),n.fog.near=_,n.fog.far=C,Z.forEach((z,tt)=>{z.visible=et[tt]});let I=document.createElement("canvas");return I.width=Math.round(w/Math.max(1,ae/1.5)),I.height=Math.round(O/Math.max(1,ae/1.5)),I.getContext("2d").drawImage(e.domElement,0,0,I.width,I.height),{canvas:I,x0:E,x1:V,z0:-X,z1:X}}function Ws(){e.dispose()}return{setSize:Qe,enter:pt,step:ct,render:sa,project:Hs,portrait:ra,mapShot:aa,heading:rt,ground:f,S:K,cam:Y,info:{VL:d,FLOOR:u,CAMPS:b},renderer:e,scene:n,camera:r,get pr(){return ae}}}return Md(M_);})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
