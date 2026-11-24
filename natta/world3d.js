/* نطّة — العالم المفتوح 3D. يتضمن three.js r187 (MIT, © 2010-2026 three.js authors) */
var NattaWorld3D=(()=>{var zc=Object.defineProperty;var h0=Object.getOwnPropertyDescriptor;var u0=Object.getOwnPropertyNames;var d0=Object.prototype.hasOwnProperty;var f0=(i,t)=>{for(var e in t)zc(i,e,{get:t[e],enumerable:!0})},p0=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of u0(t))!d0.call(i,s)&&s!==e&&zc(i,s,{get:()=>t[s],enumerable:!(n=h0(t,s))||n.enumerable});return i};var m0=i=>p0(zc({},"__esModule",{value:!0}),i);var Ry={};f0(Ry,{createWorld:()=>c0,makeRenderer:()=>Gf,supported:()=>Wf});var Al="188dev";var dd=0,yh=1,fd=2;var Js=1,pd=2,zr=3,Ls=0,ti=1,We=2,$s=0,Lr=1,Xn=2,_h=3,vh=4,md=5;var Ks=100,gd=101,xd=102,yd=103,_d=104,vd=200,Md=201,wd=202,Sd=203,Mh=204,wh=205,bd=206,Ad=207,Ed=208,Td=209,Cd=210,Rd=211,Fd=212,Pd=213,Id=214,ka=0,Va=1,Ha=2,Sr=3,Ga=4,Wa=5,Xa=6,qa=7,Oo=0,zd=1,Ld=2,ns=0,Sh=1,bh=2,Ah=3,ko=4,Eh=5,Th=6,Ch=7;var Rh=300,js=301,Dr=302,El=303,Tl=304,Cs=1e3,Ki=1001,Ya=1002,Zn=1003,Dd=1004;var Vo=1005;var pi=1006,Cl=1007;var xs=1008;var wi=1009,Fh=1010,Ph=1011,Nr=1012,Rl=1013,Xi=1014,Bi=1015,qi=1016,Fl=1017,Pl=1018,Qs=1020,Ih=35902,zh=35899,Lh=1021,Dh=1022,Yi=1023,fs=1026,ys=1027,Il=1028,zl=1029,Ds=1030,Ll=1031;var Dl=1033,Ho=33776,Go=33777,Wo=33778,Xo=33779,Nl=35840,Ul=35841,Bl=35842,Ol=35843,kl=36196,Vl=37492,Hl=37496,Gl=37488,Wl=37489,qo=37490,Xl=37491,ql=37808,Yl=37809,Zl=37810,Jl=37811,$l=37812,Kl=37813,jl=37814,Ql=37815,tc=37816,ec=37817,nc=37818,ic=37819,sc=37820,rc=37821,oc=36492,ac=36494,lc=36495,cc=36283,hc=36284,Yo=36285,uc=36286;var so=2300,Za=2301,Ba=2302,ah=2303,lh=2400,ch=2401,hh=2402;var Nd=3200;var Zo=0,Ud=1,_s="",fi="srgb",ro="srgb-linear",oo="linear",gn="srgb";var Oa=7680;var Bd=519,Od=512,kd=513,Vd=514,Nh=515,Hd=516,Gd=517,Uh=518,Bh=519,Oh=35044;var kh="300 es",zi=2e3,br=2001;function g0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}var x0={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};typeof Float16Array<"u"&&(x0.Float16Array=Float16Array);function y0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wd(){let i=ao("canvas");return i.style.display="block",i}var Eu={},Ar=null;function lo(...i){let t="THREE."+i.shift();Ar?Ar("log",t,...i):console.log(t,...i)}function Xd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ge(...i){i=Xd(i);let t="THREE."+i.shift();if(Ar)Ar("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ye(...i){i=Xd(i);let t="THREE."+i.shift();if(Ar)Ar("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function eo(...i){let t=i.join(" ");t in Eu||(Eu[t]=!0,Ge(...i))}function qd(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}var Yd={[ka]:ka,[Ha]:Xa,[Ga]:Ga,[Sr]:Wa,[Va]:Va,[Xa]:Ha,[qa]:qa,[Wa]:Sr},Qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}},si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Lc=Math.PI/180,Ja=180/Math.PI;function Ns(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(si[i&255]+si[i>>8&255]+si[i>>16&255]+si[i>>24&255]+"-"+si[t&255]+si[t>>8&255]+"-"+si[t>>16&15|64]+si[t>>24&255]+"-"+si[e&63|128]+si[e>>8&255]+"-"+si[e>>16&255]+si[e>>24&255]+si[n&255]+si[n>>8&255]+si[n>>16&255]+si[n>>24&255]).toLowerCase()}function on(i,t,e){return Math.max(t,Math.min(e,i))}function _0(i,t){return(i%t+t)%t}function Dc(i,t,e){return(1-e)*i+e*t}function Zd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Jd(i,t){if(t.constructor===Float32Array)return i;let e=dc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function $d(i,t){if(t.constructor===Float32Array)return i;let e=dc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var qh=class qh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=on(this.x,t.x,e.x),this.y=on(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=on(this.x,t,e),this.y=on(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(on(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(on(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qh.prototype.isVector2=!0;var Ot=qh,Qn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let c=n[s+0],h=n[s+1],d=n[s+2],f=n[s+3],m=o[r+0],x=o[r+1],y=o[r+2],b=o[r+3];if(f!==b||c!==m||h!==x||d!==y){let p=c*m+h*x+d*y+f*b;p<0&&(m=-m,x=-x,y=-y,b=-b,p=-p);let _=1-a;if(p<.9995){let A=Math.acos(p),P=Math.sin(A);_=Math.sin(_*A)/P,a=Math.sin(a*A)/P,c=c*_+m*a,h=h*_+x*a,d=d*_+y*a,f=f*_+b*a}else{c=c*_+m*a,h=h*_+x*a,d=d*_+y*a,f=f*_+b*a;let A=1/Math.sqrt(c*c+h*h+d*d+f*f);c*=A,h*=A,d*=A,f*=A}}t[e]=c,t[e+1]=h,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,o,r){let a=n[s],c=n[s+1],h=n[s+2],d=n[s+3],f=o[r],m=o[r+1],x=o[r+2],y=o[r+3];return t[e]=a*y+d*f+c*x-h*m,t[e+1]=c*y+d*m+h*f-a*x,t[e+2]=h*y+d*x+a*m-c*f,t[e+3]=d*y-a*f-c*m-h*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,h=a(n/2),d=a(s/2),f=a(o/2),m=c(n/2),x=c(s/2),y=c(o/2);switch(r){case"XYZ":this._x=m*d*f+h*x*y,this._y=h*x*f-m*d*y,this._z=h*d*y+m*x*f,this._w=h*d*f-m*x*y;break;case"YXZ":this._x=m*d*f+h*x*y,this._y=h*x*f-m*d*y,this._z=h*d*y-m*x*f,this._w=h*d*f+m*x*y;break;case"ZXY":this._x=m*d*f-h*x*y,this._y=h*x*f+m*d*y,this._z=h*d*y+m*x*f,this._w=h*d*f-m*x*y;break;case"ZYX":this._x=m*d*f-h*x*y,this._y=h*x*f+m*d*y,this._z=h*d*y-m*x*f,this._w=h*d*f+m*x*y;break;case"YZX":this._x=m*d*f+h*x*y,this._y=h*x*f+m*d*y,this._z=h*d*y-m*x*f,this._w=h*d*f-m*x*y;break;case"XZY":this._x=m*d*f-h*x*y,this._y=h*x*f-m*d*y,this._z=h*d*y+m*x*f,this._w=h*d*f+m*x*y;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],h=e[2],d=e[6],f=e[10],m=n+a+f;if(m>0){let x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(d-c)*x,this._y=(o-h)*x,this._z=(r-s)*x}else if(n>a&&n>f){let x=2*Math.sqrt(1+n-a-f);this._w=(d-c)/x,this._x=.25*x,this._y=(s+r)/x,this._z=(o+h)/x}else if(a>f){let x=2*Math.sqrt(1+a-n-f);this._w=(o-h)/x,this._x=(s+r)/x,this._y=.25*x,this._z=(c+d)/x}else{let x=2*Math.sqrt(1+f-n-a);this._w=(r-s)/x,this._x=(o+h)/x,this._y=(c+d)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(on(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,h=e._z,d=e._w;return this._x=n*d+r*a+s*h-o*c,this._y=s*d+r*c+o*a-n*h,this._z=o*d+r*h+n*c-s*a,this._w=r*d-n*a-s*c-o*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,o=t._z,r=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,o=-o,r=-r,a=-a);let c=1-e;if(a<.9995){let h=Math.acos(a),d=Math.sin(h);c=Math.sin(c*h)/d,e=Math.sin(e*h)/d,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+o*e,this._w=this._w*c+r*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+o*e,this._w=this._w*c+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Yh=class Yh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,h=2*(r*s-a*n),d=2*(a*e-o*s),f=2*(o*n-r*e);return this.x=e+c*h+r*f-a*d,this.y=n+c*d+a*h-o*f,this.z=s+c*f+o*d-r*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=on(this.x,t.x,e.x),this.y=on(this.y,t.y,e.y),this.z=on(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=on(this.x,t,e),this.y=on(this.y,t,e),this.z=on(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(on(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Nc.copy(this).projectOnVector(t),this.sub(Nc)}reflect(t){return this.sub(Nc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(on(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yh.prototype.isVector3=!0;var J=Yh,Nc=new J,Tu=new Qn,Zh=class Zh{constructor(t,e,n,s,o,r,a,c,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,h)}set(t,e,n,s,o,r,a,c,h){let d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=o,d[5]=c,d[6]=n,d[7]=r,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],h=n[1],d=n[4],f=n[7],m=n[2],x=n[5],y=n[8],b=s[0],p=s[3],_=s[6],A=s[1],P=s[4],M=s[7],N=s[2],R=s[5],v=s[8];return o[0]=r*b+a*A+c*N,o[3]=r*p+a*P+c*R,o[6]=r*_+a*M+c*v,o[1]=h*b+d*A+f*N,o[4]=h*p+d*P+f*R,o[7]=h*_+d*M+f*v,o[2]=m*b+x*A+y*N,o[5]=m*p+x*P+y*R,o[8]=m*_+x*M+y*v,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],h=t[7],d=t[8];return e*r*d-e*a*h-n*o*d+n*a*c+s*o*h-s*r*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],h=t[7],d=t[8],f=d*r-a*h,m=a*c-d*o,x=h*o-r*c,y=e*f+n*m+s*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/y;return t[0]=f*b,t[1]=(s*h-d*n)*b,t[2]=(a*n-s*r)*b,t[3]=m*b,t[4]=(d*e-s*c)*b,t[5]=(s*o-a*e)*b,t[6]=x*b,t[7]=(n*c-h*e)*b,t[8]=(r*e-n*o)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){let c=Math.cos(o),h=Math.sin(o);return this.set(n*c,n*h,-n*(c*r+h*a)+r+t,-s*h,s*c,-s*(-h*r+c*a)+a+e,0,0,1),this}scale(t,e){return eo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uc.makeScale(t,e)),this}rotate(t){return eo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uc.makeRotation(-t)),this}translate(t,e){return eo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Zh.prototype.isMatrix3=!0;var $e=Zh,Uc=new $e,Cu=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ru=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function v0(){let i={enabled:!0,workingColorSpace:ro,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===gn&&(s.r=ds(s.r),s.g=ds(s.g),s.b=ds(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===gn&&(s.r=wr(s.r),s.g=wr(s.g),s.b=wr(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_s?oo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[r].fromXYZ).multiply(this.spaces[o].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ro]:{primaries:t,whitePoint:n,transfer:oo,toXYZ:Cu,fromXYZ:Ru,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:n,transfer:gn,toXYZ:Cu,fromXYZ:Ru,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),i}var cn=v0();function ds(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var sr,$a=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{sr===void 0&&(sr=ao("canvas")),sr.width=t.width,sr.height=t.height;let s=sr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=sr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ao("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=ds(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ds(e[n]/255)*255):e[n]=ds(e[n]);return{data:e,width:t.width,height:t.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},M0=0,Er=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Ns(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Bc(s[r].image)):o.push(Bc(s[r]))}else o=Bc(s);n.url=o}return e||(t.images[this.uuid]=n),n}};function Bc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$a.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var w0=0,Oc=new J,mi=class i extends Qi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ki,s=Ki,o=pi,r=xs,a=Yi,c=wi,h=i.DEFAULT_ANISOTROPY,d=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Ns(),this.name="",this.source=new Er(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Oc).x}get height(){return this.source.getSize(Oc).y}get depth(){return this.source.getSize(Oc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ge(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ge(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cs:t.x=t.x-Math.floor(t.x);break;case Ki:t.x=t.x<0?0:1;break;case Ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cs:t.y=t.y-Math.floor(t.y);break;case Ki:t.y=t.y<0?0:1;break;case Ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};mi.DEFAULT_IMAGE=null;mi.DEFAULT_MAPPING=Rh;mi.DEFAULT_ANISOTROPY=1;var Jh=class Jh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){let e=on(t.w,-1,1);this.w=2*Math.acos(e);let n=Math.sqrt(1-e*e);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o,c=t.elements,h=c[0],d=c[4],f=c[8],m=c[1],x=c[5],y=c[9],b=c[2],p=c[6],_=c[10];if(Math.abs(d-m)<.01&&Math.abs(f-b)<.01&&Math.abs(y-p)<.01){if(Math.abs(d+m)<.1&&Math.abs(f+b)<.1&&Math.abs(y+p)<.1&&Math.abs(h+x+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let P=(h+1)/2,M=(x+1)/2,N=(_+1)/2,R=(d+m)/4,v=(f+b)/4,C=(y+p)/4;return P>M&&P>N?P<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(P),s=R/n,o=v/n):M>N?M<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(M),n=R/s,o=C/s):N<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(N),n=v/o,s=C/o),this.set(n,s,o,e),this}let A=Math.sqrt((p-y)*(p-y)+(f-b)*(f-b)+(m-d)*(m-d));return Math.abs(A)<.001&&(A=1),this.x=(p-y)/A,this.y=(f-b)/A,this.z=(m-d)/A,this.w=Math.acos((h+x+_-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=on(this.x,t.x,e.x),this.y=on(this.y,t.y,e.y),this.z=on(this.z,t.z,e.z),this.w=on(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=on(this.x,t,e),this.y=on(this.y,t,e),this.z=on(this.z,t,e),this.w=on(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(on(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jh.prototype.isVector4=!0;var Sn=Jh,Ka=class extends Qi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Sn(0,0,t,e),this.scissorTest=!1,this.viewport=new Sn(0,0,t,e),this.textures=[];let s=n.count;for(let o=0;o<s;o++)this.textures[o]=new mi({width:t,height:e,depth:n.depth}),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:pi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++){let r=this.textures[s],a=r.images?r.images[0]:r.image;a.width=t,a.height=e,a.depth=n,r.isData3DTexture!==!0&&(r.isArrayTexture=a.depth>1)}this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Er(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ei=class extends Ka{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},co=class extends mi{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ja=class extends mi{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var bl=class bl{constructor(t,e,n,s,o,r,a,c,h,d,f,m,x,y,b,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,h,d,f,m,x,y,b,p)}set(t,e,n,s,o,r,a,c,h,d,f,m,x,y,b,p){let _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=s,_[1]=o,_[5]=r,_[9]=a,_[13]=c,_[2]=h,_[6]=d,_[10]=f,_[14]=m,_[3]=x,_[7]=y,_[11]=b,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/rr.setFromMatrixColumn(t,0).length(),o=1/rr.setFromMatrixColumn(t,1).length(),r=1/rr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),h=Math.sin(s),d=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){let m=r*d,x=r*f,y=a*d,b=a*f;e[0]=c*d,e[4]=-c*f,e[8]=h,e[1]=x+y*h,e[5]=m-b*h,e[9]=-a*c,e[2]=b-m*h,e[6]=y+x*h,e[10]=r*c}else if(t.order==="YXZ"){let m=c*d,x=c*f,y=h*d,b=h*f;e[0]=m+b*a,e[4]=y*a-x,e[8]=r*h,e[1]=r*f,e[5]=r*d,e[9]=-a,e[2]=x*a-y,e[6]=b+m*a,e[10]=r*c}else if(t.order==="ZXY"){let m=c*d,x=c*f,y=h*d,b=h*f;e[0]=m-b*a,e[4]=-r*f,e[8]=y+x*a,e[1]=x+y*a,e[5]=r*d,e[9]=b-m*a,e[2]=-r*h,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){let m=r*d,x=r*f,y=a*d,b=a*f;e[0]=c*d,e[4]=y*h-x,e[8]=m*h+b,e[1]=c*f,e[5]=b*h+m,e[9]=x*h-y,e[2]=-h,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){let m=r*c,x=r*h,y=a*c,b=a*h;e[0]=c*d,e[4]=b-m*f,e[8]=y*f+x,e[1]=f,e[5]=r*d,e[9]=-a*d,e[2]=-h*d,e[6]=x*f+y,e[10]=m-b*f}else if(t.order==="XZY"){let m=r*c,x=r*h,y=a*c,b=a*h;e[0]=c*d,e[4]=-f,e[8]=h*d,e[1]=m*f+b,e[5]=r*d,e[9]=x*f-y,e[2]=y*f-x,e[6]=a*d,e[10]=b*f+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(S0,t,b0)}lookAt(t,e,n){let s=this.elements;return bi.subVectors(t,e),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),bs.crossVectors(n,bi),bs.lengthSq()===0&&(Math.abs(n.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),bs.crossVectors(n,bi)),bs.normalize(),aa.crossVectors(bi,bs),s[0]=bs.x,s[4]=aa.x,s[8]=bi.x,s[1]=bs.y,s[5]=aa.y,s[9]=bi.y,s[2]=bs.z,s[6]=aa.z,s[10]=bi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],h=n[12],d=n[1],f=n[5],m=n[9],x=n[13],y=n[2],b=n[6],p=n[10],_=n[14],A=n[3],P=n[7],M=n[11],N=n[15],R=s[0],v=s[4],C=s[8],G=s[12],B=s[1],st=s[5],at=s[9],W=s[13],bt=s[2],ft=s[6],Ct=s[10],pt=s[14],xt=s[3],Mt=s[7],Ut=s[11],Qt=s[15];return o[0]=r*R+a*B+c*bt+h*xt,o[4]=r*v+a*st+c*ft+h*Mt,o[8]=r*C+a*at+c*Ct+h*Ut,o[12]=r*G+a*W+c*pt+h*Qt,o[1]=d*R+f*B+m*bt+x*xt,o[5]=d*v+f*st+m*ft+x*Mt,o[9]=d*C+f*at+m*Ct+x*Ut,o[13]=d*G+f*W+m*pt+x*Qt,o[2]=y*R+b*B+p*bt+_*xt,o[6]=y*v+b*st+p*ft+_*Mt,o[10]=y*C+b*at+p*Ct+_*Ut,o[14]=y*G+b*W+p*pt+_*Qt,o[3]=A*R+P*B+M*bt+N*xt,o[7]=A*v+P*st+M*ft+N*Mt,o[11]=A*C+P*at+M*Ct+N*Ut,o[15]=A*G+P*W+M*pt+N*Qt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],h=t[13],d=t[2],f=t[6],m=t[10],x=t[14],y=t[3],b=t[7],p=t[11],_=t[15],A=c*x-h*m,P=a*x-h*f,M=a*m-c*f,N=r*x-h*d,R=r*m-c*d,v=r*f-a*d;return e*(b*A-p*P+_*M)-n*(y*A-p*N+_*R)+s*(y*P-b*N+_*v)-o*(y*M-b*R+p*v)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],o=t[1],r=t[5],a=t[9],c=t[2],h=t[6],d=t[10];return e*(r*d-a*h)-n*(o*d-a*c)+s*(o*h-r*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],h=t[7],d=t[8],f=t[9],m=t[10],x=t[11],y=t[12],b=t[13],p=t[14],_=t[15],A=e*a-n*r,P=e*c-s*r,M=e*h-o*r,N=n*c-s*a,R=n*h-o*a,v=s*h-o*c,C=d*b-f*y,G=d*p-m*y,B=d*_-x*y,st=f*p-m*b,at=f*_-x*b,W=m*_-x*p,bt=A*W-P*at+M*st+N*B-R*G+v*C;if(bt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let ft=1/bt;return t[0]=(a*W-c*at+h*st)*ft,t[1]=(s*at-n*W-o*st)*ft,t[2]=(b*v-p*R+_*N)*ft,t[3]=(m*R-f*v-x*N)*ft,t[4]=(c*B-r*W-h*G)*ft,t[5]=(e*W-s*B+o*G)*ft,t[6]=(p*M-y*v-_*P)*ft,t[7]=(d*v-m*M+x*P)*ft,t[8]=(r*at-a*B+h*C)*ft,t[9]=(n*B-e*at-o*C)*ft,t[10]=(y*R-b*M+_*A)*ft,t[11]=(f*M-d*R-x*A)*ft,t[12]=(a*G-r*st-c*C)*ft,t[13]=(e*st-n*G+s*C)*ft,t[14]=(b*P-y*N-p*A)*ft,t[15]=(d*N-f*P+m*A)*ft,this}scale(t){let e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,h=o*r,d=o*a;return this.set(h*r+n,h*a-s*c,h*c+s*a,0,h*a+s*c,d*a+n,d*c-s*r,0,h*c-s*a,d*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,h=o+o,d=r+r,f=a+a,m=o*h,x=o*d,y=o*f,b=r*d,p=r*f,_=a*f,A=c*h,P=c*d,M=c*f,N=n.x,R=n.y,v=n.z;return s[0]=(1-(b+_))*N,s[1]=(x+M)*N,s[2]=(y-P)*N,s[3]=0,s[4]=(x-M)*R,s[5]=(1-(m+_))*R,s[6]=(p+A)*R,s[7]=0,s[8]=(y+P)*v,s[9]=(p-A)*v,s[10]=(1-(m+b))*v,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let o=this.determinantAffine();if(o===0)return n.set(1,1,1),e.identity(),this;let r=rr.set(s[0],s[1],s[2]).length(),a=rr.set(s[4],s[5],s[6]).length(),c=rr.set(s[8],s[9],s[10]).length();o<0&&(r=-r),ki.copy(this);let h=1/r,d=1/a,f=1/c;return ki.elements[0]*=h,ki.elements[1]*=h,ki.elements[2]*=h,ki.elements[4]*=d,ki.elements[5]*=d,ki.elements[6]*=d,ki.elements[8]*=f,ki.elements[9]*=f,ki.elements[10]*=f,e.setFromRotationMatrix(ki),n.x=r,n.y=a,n.z=c,this}makePerspective(t,e,n,s,o,r,a=zi,c=!1){let h=this.elements,d=2*o/(e-t),f=2*o/(n-s),m=(e+t)/(e-t),x=(n+s)/(n-s),y,b;if(c)y=o/(r-o),b=r*o/(r-o);else if(a===zi)y=-(r+o)/(r-o),b=-2*r*o/(r-o);else if(a===br)y=-r/(r-o),b=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=d,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=f,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=zi,c=!1){let h=this.elements,d=2/(e-t),f=2/(n-s),m=-(e+t)/(e-t),x=-(n+s)/(n-s),y,b;if(c)y=1/(r-o),b=r/(r-o);else if(a===zi)y=-2/(r-o),b=-(r+o)/(r-o);else if(a===br)y=-1/(r-o),b=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=d,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=f,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=y,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};bl.prototype.isMatrix4=!0;var un=bl,rr=new J,ki=new un,S0=new J(0,0,0),b0=new J(1,1,1),bs=new J,aa=new J,bi=new J,Fu=new un,Pu=new Qn,Li=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],h=s[5],d=s[9],f=s[2],m=s[6],x=s[10];switch(e){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,x),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-on(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,x),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(on(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,x),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-on(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin(on(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,x));break;case"XZY":this._z=Math.asin(-on(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,x),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pu.setFromEuler(this),this.setFromQuaternion(Pu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Li.DEFAULT_ORDER="XYZ";var ho=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},A0=0,Iu=new J,or=new Qn,os=new un,la=new J,Wr=new J,E0=new J,T0=new Qn,zu=new J(1,0,0),Lu=new J(0,1,0),Du=new J(0,0,1),Nu={type:"added"},C0={type:"removed"},ar={type:"childadded",child:null},kc={type:"childremoved",child:null},Mn=class i extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new J,e=new Li,n=new Qn,s=new J(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new un},normalMatrix:{value:new $e}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.multiply(or),this}rotateOnWorldAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.premultiply(or),this}rotateX(t){return this.rotateOnAxis(zu,t)}rotateY(t){return this.rotateOnAxis(Lu,t)}rotateZ(t){return this.rotateOnAxis(Du,t)}translateOnAxis(t,e){return Iu.copy(t).applyQuaternion(this.quaternion),this.position.add(Iu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zu,t)}translateY(t){return this.translateOnAxis(Lu,t)}translateZ(t){return this.translateOnAxis(Du,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?la.copy(t):la.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(Wr,la,this.up):os.lookAt(la,Wr,this.up),this.quaternion.setFromRotationMatrix(os),s&&(os.extractRotation(s.matrixWorld),or.setFromRotationMatrix(os),this.quaternion.premultiply(or.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ye("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nu),ar.child=t,this.dispatchEvent(ar),ar.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(C0),kc.child=t,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),os.multiply(t.parent.matrixWorld)),t.applyMatrix4(os),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nu),ar.child=t,this.dispatchEvent(ar),ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,t,E0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,T0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,o=this.matrix.elements;o[12]+=e-o[0]*e-o[4]*n-o[8]*s,o[13]+=n-o[1]*e-o[5]*n-o[9]*s,o[14]+=s-o[2]*e-o[6]*n-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1)===!0&&(n=!0),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let o=this.children;for(let r=0,a=o.length;r<a;r++)o[r].updateWorldMatrix(!1,!0,n)}return n}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){let f=c[h];o(t.shapes,f)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){let a=r(t.geometries),c=r(t.materials),h=r(t.textures),d=r(t.images),f=r(t.shapes),m=r(t.skeletons),x=r(t.animations),y=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),m.length>0&&(n.skeletons=m),x.length>0&&(n.animations=x),y.length>0&&(n.nodes=y)}return n.object=s,n;function r(a){let c=[];for(let h in a){let d=a[h];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Mn.DEFAULT_UP=new J(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Re=class extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},R0={type:"move"},Tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null,a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){r=!0;for(let b of t.hand.values()){let p=e.getJointPose(b,n),_=this._getHandJoint(h,b);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=p.radius),_.visible=p!==null}let d=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],m=d.position.distanceTo(f.position),x=.02,y=.005;h.inputState.pinching&&m>x+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&m<=x-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(R0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),h!==null&&(h.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},ks={h:0,s:0,l:0};function Vc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ve=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,cn.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=cn.workingColorSpace){return this.r=t,this.g=e,this.b=n,cn.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=cn.workingColorSpace){if(t=_0(t,1),e=on(e,0,1),n=on(n,0,1),e===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Vc(r,o,t+1/3),this.g=Vc(r,o,t),this.b=Vc(r,o,t-1/3)}return cn.colorSpaceToWorking(this,s),this}setStyle(t,e=fi){function n(o){o!==void 0&&parseFloat(o)<1&&Ge("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseFloat(o[1]))/100,Math.min(100,parseFloat(o[2]))/100,Math.min(100,parseFloat(o[3]))/100,e);break;case"hsl":case"hsla":if(o=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:Ge("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);Ge("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fi){let n=Kd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ge("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return cn.workingToColorSpace(ri.copy(this),t),Math.round(on(ri.r*255,0,255))*65536+Math.round(on(ri.g*255,0,255))*256+Math.round(on(ri.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=cn.workingColorSpace){cn.workingToColorSpace(ri.copy(this),e);let n=ri.r,s=ri.g,o=ri.b,r=Math.max(n,s,o),a=Math.min(n,s,o),c,h,d=(a+r)/2;if(a===r)c=0,h=0;else{let f=r-a;switch(h=d<=.5?f/(r+a):f/(2-r-a),r){case n:c=(s-o)/f+(s<o?6:0);break;case s:c=(o-n)/f+2;break;case o:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=h,t.l=d,t}getRGB(t,e=cn.workingColorSpace){return cn.workingToColorSpace(ri.copy(this),e),t.r=ri.r,t.g=ri.g,t.b=ri.b,t}getStyle(t=fi){cn.workingToColorSpace(ri.copy(this),t);let e=ri.r,n=ri.g,s=ri.b;return t!==fi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(ks),Vi.s===0&&(Vi.h=ks.h),ks.s===0&&(ks.h=Vi.h);let n=Dc(Vi.h,ks.h,e),s=Dc(Vi.s,ks.s,e),o=Dc(Vi.l,ks.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ri=new Ve;Ve.NAMES=Kd;var uo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ve(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fo=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Hi=new J,as=new J,Hc=new J,ls=new J,lr=new J,cr=new J,Uu=new J,Gc=new J,Wc=new J,Xc=new J,qc=new Sn,Yc=new Sn,Zc=new Sn,us=class i{constructor(t=new J,e=new J,n=new J){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Hi.subVectors(t,e),s.cross(Hi);let o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Hi.subVectors(s,e),as.subVectors(n,e),Hc.subVectors(t,e);let r=Hi.dot(Hi),a=Hi.dot(as),c=Hi.dot(Hc),h=as.dot(as),d=as.dot(Hc),f=r*h-a*a;if(f===0)return o.set(0,0,0),null;let m=1/f,x=(h*c-a*d)*m,y=(r*d-a*c)*m;return o.set(1-x-y,y,x)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ls)===null?!1:ls.x>=0&&ls.y>=0&&ls.x+ls.y<=1}static getInterpolation(t,e,n,s,o,r,a,c){return this.getBarycoord(t,e,n,s,ls)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,ls.x),c.addScaledVector(r,ls.y),c.addScaledVector(a,ls.z),c)}static getInterpolatedAttribute(t,e,n,s,o,r){return qc.setScalar(0),Yc.setScalar(0),Zc.setScalar(0),qc.fromBufferAttribute(t,e),Yc.fromBufferAttribute(t,n),Zc.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(qc,o.x),r.addScaledVector(Yc,o.y),r.addScaledVector(Zc,o.z),r}static isFrontFacing(t,e,n,s){return Hi.subVectors(n,e),as.subVectors(t,e),Hi.cross(as).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hi.subVectors(this.c,this.b),as.subVectors(this.a,this.b),Hi.cross(as).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,o=this.c,r,a;lr.subVectors(s,n),cr.subVectors(o,n),Gc.subVectors(t,n);let c=lr.dot(Gc),h=cr.dot(Gc);if(c<=0&&h<=0)return e.copy(n);Wc.subVectors(t,s);let d=lr.dot(Wc),f=cr.dot(Wc);if(d>=0&&f<=d)return e.copy(s);let m=c*f-d*h;if(m<=0&&c>=0&&d<=0&&c-d>0)return r=c/(c-d),e.copy(n).addScaledVector(lr,r);Xc.subVectors(t,o);let x=lr.dot(Xc),y=cr.dot(Xc);if(y>=0&&x<=y)return e.copy(o);let b=x*h-c*y;if(b<=0&&h>=0&&y<=0)return a=h/(h-y),e.copy(n).addScaledVector(cr,a);let p=d*y-x*f;if(p<=0&&f-d>=0&&x-y>=0)return Uu.subVectors(o,s),a=(f-d)/(f-d+(x-y)),e.copy(s).addScaledVector(Uu,a);let _=1/(p+b+m);return r=b*_,a=m*_,e.copy(n).addScaledVector(lr,r).addScaledVector(cr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ts=class{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Gi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Gi):Gi.fromBufferAttribute(o,r),Gi.applyMatrix4(t.matrixWorld),this.expandByPoint(Gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ca.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ca.copy(n.boundingBox)),ca.applyMatrix4(t.matrixWorld),this.union(ca)}let s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gi),Gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xr),ha.subVectors(this.max,Xr),hr.subVectors(t.a,Xr),ur.subVectors(t.b,Xr),dr.subVectors(t.c,Xr),As.subVectors(ur,hr),Es.subVectors(dr,ur),Vs.subVectors(hr,dr);let e=[0,-As.z,As.y,0,-Es.z,Es.y,0,-Vs.z,Vs.y,As.z,0,-As.x,Es.z,0,-Es.x,Vs.z,0,-Vs.x,-As.y,As.x,0,-Es.y,Es.x,0,-Vs.y,Vs.x,0];return!Jc(e,hr,ur,dr,ha)||(e=[1,0,0,0,1,0,0,0,1],!Jc(e,hr,ur,dr,ha))?!1:(ua.crossVectors(As,Es),e=[ua.x,ua.y,ua.z],Jc(e,hr,ur,dr,ha))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},cs=[new J,new J,new J,new J,new J,new J,new J,new J],Gi=new J,ca=new ts,hr=new J,ur=new J,dr=new J,As=new J,Es=new J,Vs=new J,Xr=new J,ha=new J,ua=new J,Hs=new J;function Jc(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){Hs.fromArray(i,o);let a=s.x*Math.abs(Hs.x)+s.y*Math.abs(Hs.y)+s.z*Math.abs(Hs.z),c=t.dot(Hs),h=e.dot(Hs),d=n.dot(Hs);if(Math.max(-Math.max(c,h,d),Math.min(c,h,d))>a)return!1}return!0}var kn=new J,da=new Ot,F0=0,Ke=class extends Qi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:F0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oh,this.updateRanges=[],this.gpuType=Bi,this.version=0,this._normalizationScale=t!==void 0?dc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)da.fromBufferAttribute(this,e),da.applyMatrix3(t),this.setXY(e,da.x,da.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)kn.fromBufferAttribute(this,e),kn.applyMatrix3(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)kn.fromBufferAttribute(this,e),kn.applyMatrix4(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)kn.fromBufferAttribute(this,e),kn.applyNormalMatrix(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)kn.fromBufferAttribute(this,e),kn.transformDirection(t),this.setXYZ(e,kn.x,kn.y,kn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),o=this._normalize(o)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Jd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):$d(t,this.array)}};var po=class extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var mo=class extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Je=class extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},P0=new ts,qr=new J,$c=new J,es=class{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):P0.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qr.subVectors(t,this.center);let e=qr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(qr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($c.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qr.copy(t.center).add($c)),this.expandByPoint(qr.copy(t.center).sub($c))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},I0=0,Ii=new un,Kc=new Mn,fr=new J,Ai=new ts,Yr=new ts,Ji=new J,fa=new J,pa=new J,tn=class i extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(g0(t)?mo:po)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new $e().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ii.makeRotationFromQuaternion(t),this.applyMatrix4(Ii),this}rotateX(t){return Ii.makeRotationX(t),this.applyMatrix4(Ii),this}rotateY(t){return Ii.makeRotationY(t),this.applyMatrix4(Ii),this}rotateZ(t){return Ii.makeRotationZ(t),this.applyMatrix4(Ii),this}translate(t,e,n){return Ii.makeTranslation(t,e,n),this.applyMatrix4(Ii),this}scale(t,e,n){return Ii.makeScale(t,e,n),this.applyMatrix4(Ii),this}lookAt(t){return Kc.lookAt(t),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,o=t.length;s<o;s++){let r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let o=e[n];Ai.setFromBufferAttribute(o),this.morphTargetsRelative?(fa.addVectors(this.boundingBox.min,Ai.min),pa.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(fa),this.boundingBox.expandByPoint(pa)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){let n=this.boundingSphere.center;if(Ai.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){let a=e[o];Yr.setFromBufferAttribute(a),this.morphTargetsRelative?(fa.addVectors(Ai.min,Yr.min),pa.addVectors(Ai.max,Yr.max),Ai.expandByPoint(fa),Ai.expandByPoint(pa)):(Ai.expandByPoint(Yr.min),Ai.expandByPoint(Yr.max))}Ai.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Ji.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Ji));if(e)for(let o=0,r=e.length;o<r;o++){let a=e[o],c=this.morphTargetsRelative;for(let h=0,d=a.count;h<d;h++)Ji.fromBufferAttribute(a,h),c&&(fr.fromBufferAttribute(t,h),Ji.add(fr)),s=Math.max(s,n.distanceToSquared(Ji))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,o=e.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new Ke(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));let a=[],c=[],h=new Uint8Array(n.count);for(let G=0;G<n.count;G++)a[G]=new J,c[G]=new J;let d=new J,f=new J,m=new J,x=new Ot,y=new Ot,b=new Ot,p=new J,_=new J;function A(G,B,st){h[G]=h[B]=h[st]=1,d.fromBufferAttribute(n,G),f.fromBufferAttribute(n,B),m.fromBufferAttribute(n,st),x.fromBufferAttribute(o,G),y.fromBufferAttribute(o,B),b.fromBufferAttribute(o,st),f.sub(d),m.sub(d),y.sub(x),b.sub(x);let at=1/(y.x*b.y-b.x*y.y);isFinite(at)&&(p.copy(f).multiplyScalar(b.y).addScaledVector(m,-y.y).multiplyScalar(at),_.copy(m).multiplyScalar(y.x).addScaledVector(f,-b.x).multiplyScalar(at),a[G].add(p),a[B].add(p),a[st].add(p),c[G].add(_),c[B].add(_),c[st].add(_))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let G=0,B=P.length;G<B;++G){let st=P[G],at=st.start,W=st.count;for(let bt=at,ft=Math.min(t.count,at+W);bt<ft;bt+=3)A(t.getX(bt+0),t.getX(bt+1),t.getX(bt+2))}let M=new J,N=new J,R=new J,v=new J;function C(G){R.fromBufferAttribute(s,G),v.copy(R);let B=a[G];M.copy(B),M.sub(R.multiplyScalar(R.dot(B))).normalize(),M.lengthSq()===0&&(Math.abs(v.x)<.9?M.set(1,0,0):M.set(0,1,0),M.crossVectors(v,M).normalize()),N.crossVectors(v,B);let at=N.dot(c[G])<0?-1:1;r.setXYZW(G,M.x,M.y,M.z,at)}for(let G=0,B=n.count;G<B;++G)h[G]&&C(G);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,x=n.count;m<x;m++)n.setXYZ(m,0,0,0);let s=new J,o=new J,r=new J,a=new J,c=new J,h=new J,d=new J,f=new J;if(t)for(let m=0,x=t.count;m<x;m+=3){let y=t.getX(m+0),b=t.getX(m+1),p=t.getX(m+2);s.fromBufferAttribute(e,y),o.fromBufferAttribute(e,b),r.fromBufferAttribute(e,p),d.subVectors(r,o),f.subVectors(s,o),d.cross(f),a.fromBufferAttribute(n,y),c.fromBufferAttribute(n,b),h.fromBufferAttribute(n,p),a.add(d),c.add(d),h.add(d),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let m=0,x=e.count;m<x;m+=3)s.fromBufferAttribute(e,m+0),o.fromBufferAttribute(e,m+1),r.fromBufferAttribute(e,m+2),d.subVectors(r,o),f.subVectors(s,o),d.cross(f),n.setXYZ(m+0,d.x,d.y,d.z),n.setXYZ(m+1,d.x,d.y,d.z),n.setXYZ(m+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ji.fromBufferAttribute(t,e),Ji.normalize(),t.setXYZ(e,Ji.x,Ji.y,Ji.z)}toNonIndexed(){function t(a,c){let h=a.array,d=a.itemSize,f=a.normalized,m=new h.constructor(c.length*d),x=0,y=0;for(let b=0,p=c.length;b<p;b++){a.isInterleavedBufferAttribute?x=c[b]*a.data.stride+a.offset:x=c[b]*d;for(let _=0;_<d;_++)m[y++]=h[x++]}return new Ke(m,d,f)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],h=t(c,n);e.setAttribute(a,h)}let o=this.morphAttributes;for(let a in o){let c=[],h=o[a];for(let d=0,f=h.length;d<f;d++){let m=h[d],x=t(m,n);c.push(x)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,c=r.length;a<c;a++){let h=r[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},o=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],d=[];for(let f=0,m=h.length;f<m;f++){let x=h[f];d.push(x.toJSON(t.data))}d.length>0&&(s[c]=d,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let h in s){let d=s[h];this.setAttribute(h,d.clone(e))}let o=t.morphAttributes;for(let h in o){let d=[],f=o[h];for(let m=0,x=f.length;m<x;m++)d.push(f[m].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let h=0,d=r.length;h<d;h++){let f=r[h];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Oh,this.updateRanges=[],this.version=0,this.uuid=Ns()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Bu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Bu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Bu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Ns()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var di=new J,go=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?dc(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)di.fromBufferAttribute(this,e),di.applyMatrix4(t),this.setXYZ(e,di.x,di.y,di.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)di.fromBufferAttribute(this,e),di.applyNormalMatrix(t),this.setXYZ(e,di.x,di.y,di.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)di.fromBufferAttribute(this,e),di.transformDirection(t),this.setXYZ(e,di.x,di.y,di.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),o=this._normalize(o)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){lo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){lo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Jd(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):$d(t,this.data.array)}},jc=new J,z0=new J,L0=new $e,Wi=class{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=jc.subVectors(n,e).cross(z0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(jc),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/o;return n===!0&&(r<0||r>1)?null:e.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||L0.getNormalMatrix(t),s=this.coplanarPoint(jc).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},D0=0,Di=class extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=Lr,this.side=Ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mh,this.blendDst=wh,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oa,this.stencilZFail=Oa,this.stencilZPass=Oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ge(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ge(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){let r=[];for(let a in o){let c=o[a];delete c.metadata,r.push(c)}return r}if(e){let o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ve().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Wi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ot().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Hn=class extends Di{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},pr,Zr=new J,mr=new J,gr=new J,xr=new Ot,Jr=new Ot,jd=new un,ma=new J,$r=new J,ga=new J,Ou=new Ot,Qc=new Ot,ku=new Ot,Jn=class extends Mn{constructor(t=new Hn){if(super(),this.isSprite=!0,this.type="Sprite",pr===void 0){pr=new tn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qa(e,5);pr.setIndex([0,1,2,0,2,3]),pr.setAttribute("position",new go(n,3,0,!1)),pr.setAttribute("uv",new go(n,2,3,!1))}this.geometry=pr,this.material=t,this.center=new Ot(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mr.setFromMatrixScale(this.matrixWorld),jd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),gr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mr.multiplyScalar(-gr.z);let n=this.material.rotation,s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));let r=this.center;xa(ma.set(-.5,-.5,0),gr,r,mr,s,o),xa($r.set(.5,-.5,0),gr,r,mr,s,o),xa(ga.set(.5,.5,0),gr,r,mr,s,o),Ou.set(0,0),Qc.set(1,0),ku.set(1,1);let a=t.ray.intersectTriangle(ma,$r,ga,!1,Zr);if(a===null&&(xa($r.set(-.5,.5,0),gr,r,mr,s,o),Qc.set(0,1),a=t.ray.intersectTriangle(ma,ga,$r,!1,Zr),a===null))return;let c=t.ray.origin.distanceTo(Zr);c<t.near||c>t.far||e.push({distance:c,point:Zr.clone(),uv:us.getInterpolation(Zr,ma,$r,ga,Ou,Qc,ku,new Ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this.count=t.count,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function xa(i,t,e,n,s,o){xr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Jr.x=o*xr.x-s*xr.y,Jr.y=s*xr.x+o*xr.y):Jr.copy(xr),i.copy(t),i.x+=Jr.x,i.y+=Jr.y,i.applyMatrix4(jd)}var hs=new J,th=new J,ya=new J,_a=new J,Cr=class{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=hs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hs.copy(this.origin).addScaledVector(this.direction,e),hs.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){th.copy(t).add(e).multiplyScalar(.5),ya.copy(e).sub(t).normalize(),_a.copy(this.origin).sub(th);let o=t.distanceTo(e)*.5,r=-this.direction.dot(ya),a=_a.dot(this.direction),c=-_a.dot(ya),h=_a.lengthSq(),d=Math.abs(1-r*r),f,m,x,y;if(d>0)if(f=r*c-a,m=r*a-c,y=o*d,f>=0)if(m>=-y)if(m<=y){let b=1/d;f*=b,m*=b,x=f*(f+r*m+2*a)+m*(r*f+m+2*c)+h}else m=o,f=Math.max(0,-(r*m+a)),x=-f*f+m*(m+2*c)+h;else m=-o,f=Math.max(0,-(r*m+a)),x=-f*f+m*(m+2*c)+h;else m<=-y?(f=Math.max(0,-(-r*o+a)),m=f>0?-o:Math.min(Math.max(-o,-c),o),x=-f*f+m*(m+2*c)+h):m<=y?(f=0,m=Math.min(Math.max(-o,-c),o),x=m*(m+2*c)+h):(f=Math.max(0,-(r*o+a)),m=f>0?o:Math.min(Math.max(-o,-c),o),x=-f*f+m*(m+2*c)+h);else m=r>0?-o:o,f=Math.max(0,-(r*m+a)),x=-f*f+m*(m+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(th).addScaledVector(ya,m),x}intersectSphere(t,e){if(t.radius<0)return null;hs.subVectors(t.center,this.origin);let n=hs.dot(this.direction),s=hs.dot(hs)-n*n,o=t.radius*t.radius;if(s>o)return null;let r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,c,h=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,m=this.origin;return h>=0?(n=(t.min.x-m.x)*h,s=(t.max.x-m.x)*h):(n=(t.max.x-m.x)*h,s=(t.min.x-m.x)*h),d>=0?(o=(t.min.y-m.y)*d,r=(t.max.y-m.y)*d):(o=(t.max.y-m.y)*d,r=(t.min.y-m.y)*d),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),f>=0?(a=(t.min.z-m.z)*f,c=(t.max.z-m.z)*f):(a=(t.max.z-m.z)*f,c=(t.min.z-m.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hs)!==null}intersectTriangle(t,e,n,s,o){let r=this.origin,a=this.direction,c=a.x,h=a.y,d=a.z,f=t.x-r.x,m=t.y-r.y,x=t.z-r.z,y=e.x-r.x,b=e.y-r.y,p=e.z-r.z,_=n.x-r.x,A=n.y-r.y,P=n.z-r.z,M=Math.abs(c),N=Math.abs(h),R=Math.abs(d),v,C,G,B,st,at,W,bt,ft,Ct,pt,xt;if(M>=N&&M>=R?(G=c,at=f,ft=y,xt=_,c>=0?(v=h,C=d,B=m,st=x,W=b,bt=p,Ct=A,pt=P):(v=d,C=h,B=x,st=m,W=p,bt=b,Ct=P,pt=A)):N>=R?(G=h,at=m,ft=b,xt=A,h>=0?(v=d,C=c,B=x,st=f,W=p,bt=y,Ct=P,pt=_):(v=c,C=d,B=f,st=x,W=y,bt=p,Ct=_,pt=P)):(G=d,at=x,ft=p,xt=P,d>=0?(v=c,C=h,B=f,st=m,W=y,bt=b,Ct=_,pt=A):(v=h,C=c,B=m,st=f,W=b,bt=y,Ct=A,pt=_)),G===0)return null;let Mt=v/G,Ut=C/G,Qt=1/G,ne=B-Mt*at,_e=st-Ut*at,et=W-Mt*ft,Zt=bt-Ut*ft,le=Ct-Mt*xt,xe=pt-Ut*xt,te=le*Zt-xe*et,fe=ne*xe-_e*le,De=et*_e-Zt*ne;if(s){if(te<0||fe<0||De<0)return null}else if((te<0||fe<0||De<0)&&(te>0||fe>0||De>0))return null;let kt=te+fe+De;if(kt===0)return null;let k=Qt*(te*at+fe*ft+De*xt);return(kt>0?k<0:k>0)?null:this.at(k/kt,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_n=class extends Di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Vu=new un,Gs=new Cr,va=new es,Hu=new J,Ma=new J,wa=new J,Sa=new J,eh=new J,ba=new J,Gu=new J,Aa=new J,Gt=class extends Mn{constructor(t=new tn,e=new _n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this.count=t.count,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(o&&a){ba.set(0,0,0);for(let c=0,h=o.length;c<h;c++){let d=a[c],f=o[c];d!==0&&(eh.fromBufferAttribute(f,t),r?ba.addScaledVector(eh,d):ba.addScaledVector(eh.sub(e),d))}e.add(ba)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(o),Gs.copy(t.ray).recast(t.near),!(va.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(va,Hu)===null||Gs.origin.distanceToSquared(Hu)>(t.far-t.near)**2))&&(Vu.copy(o).invert(),Gs.copy(t.ray).applyMatrix4(Vu),!(n.boundingBox!==null&&Gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gs)))}_computeIntersections(t,e,n){let s,o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,h=o.attributes.uv,d=o.attributes.uv1,f=o.attributes.normal,m=o.groups,x=o.drawRange;if(a!==null)if(Array.isArray(r))for(let y=0,b=m.length;y<b;y++){let p=m[y],_=r[p.materialIndex],A=Math.max(p.start,x.start),P=Math.min(a.count,Math.min(p.start+p.count,x.start+x.count));for(let M=A,N=P;M<N;M+=3){let R=a.getX(M),v=a.getX(M+1),C=a.getX(M+2);s=Ea(this,_,t,n,h,d,f,R,v,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let y=Math.max(0,x.start),b=Math.min(a.count,x.start+x.count);for(let p=y,_=b;p<_;p+=3){let A=a.getX(p),P=a.getX(p+1),M=a.getX(p+2);s=Ea(this,r,t,n,h,d,f,A,P,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let y=0,b=m.length;y<b;y++){let p=m[y],_=r[p.materialIndex],A=Math.max(p.start,x.start),P=Math.min(c.count,Math.min(p.start+p.count,x.start+x.count));for(let M=A,N=P;M<N;M+=3){let R=M,v=M+1,C=M+2;s=Ea(this,_,t,n,h,d,f,R,v,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let y=Math.max(0,x.start),b=Math.min(c.count,x.start+x.count);for(let p=y,_=b;p<_;p+=3){let A=p,P=p+1,M=p+2;s=Ea(this,r,t,n,h,d,f,A,P,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function N0(i,t,e,n,s,o,r,a){let c;if(t.side===ti?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,t.side===Ls,a),c===null)return null;Aa.copy(a),Aa.applyMatrix4(i.matrixWorld);let h=e.ray.origin.distanceTo(Aa);return h<e.near||h>e.far?null:{distance:h,point:Aa.clone(),object:i}}function Ea(i,t,e,n,s,o,r,a,c,h){i.getVertexPosition(a,Ma),i.getVertexPosition(c,wa),i.getVertexPosition(h,Sa);let d=N0(i,t,e,n,Ma,wa,Sa,Gu);if(d){let f=new J;us.getBarycoord(Gu,Ma,wa,Sa,f),s&&(d.uv=us.getInterpolatedAttribute(s,a,c,h,f,new Ot)),o&&(d.uv1=us.getInterpolatedAttribute(o,a,c,h,f,new Ot)),r&&(d.normal=us.getInterpolatedAttribute(r,a,c,h,f,new J),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let m={a,b:c,c:h,normal:new J,materialIndex:0};us.getNormal(Ma,wa,Sa,m.normal),d.face=m,d.barycoord=f}return d}var xo=class extends mi{constructor(t=null,e=1,n=1,s,o,r,a,c,h=Zn,d=Zn,f,m){super(null,r,a,c,h,d,s,o,f,m),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yo=class extends Ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},yr=new un,Wu=new un,Ta=[],Xu=new ts,U0=new un,Kr=new Gt,jr=new es,Ti=class extends Gt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new yo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,U0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ts),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yr),Xu.copy(t.boundingBox).applyMatrix4(yr),this.boundingBox.union(Xu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new es),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yr),jr.copy(t.boundingSphere).applyMatrix4(yr),this.boundingSphere.union(jr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Kr.geometry=this.geometry,Kr.material=this.material,Kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(n),t.ray.intersectsSphere(jr)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,yr),Wu.multiplyMatrices(n,yr),Kr.matrixWorld=Wu,Kr.raycast(t,Ta);for(let r=0,a=Ta.length;r<a;r++){let c=Ta[r];c.instanceId=o,c.object=this,e.push(c)}Ta.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new yo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new xo(new Float32Array(s*this.count),s,this.count,Il,Bi));let o=this.morphTexture.source.data.data,r=0;for(let h=0;h<n.length;h++)r+=n[h];let a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;return o[c]=a,o.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ws=new es,B0=new Ot(.5,.5),Ca=new J,Rs=class{constructor(t=new Wi,e=new Wi,n=new Wi,s=new Wi,o=new Wi,r=new Wi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zi,n=!1){let s=this.planes,o=t.elements,r=o[0],a=o[1],c=o[2],h=o[3],d=o[4],f=o[5],m=o[6],x=o[7],y=o[8],b=o[9],p=o[10],_=o[11],A=o[12],P=o[13],M=o[14],N=o[15];if(s[0].setComponents(h-r,x-d,_-y,N-A).normalize(),s[1].setComponents(h+r,x+d,_+y,N+A).normalize(),s[2].setComponents(h+a,x+f,_+b,N+P).normalize(),s[3].setComponents(h-a,x-f,_-b,N-P).normalize(),n)s[4].setComponents(c,m,p,M).normalize(),s[5].setComponents(h-c,x-m,_-p,N-M).normalize();else if(s[4].setComponents(h-c,x-m,_-p,N-M).normalize(),e===zi)s[5].setComponents(h+c,x+m,_+p,N+M).normalize();else if(e===br)s[5].setComponents(c,m,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(t){Ws.center.set(0,0,0);let e=B0.distanceTo(t.center);return Ws.radius=.7071067811865476+e,Ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ca.x=s.normal.x>0?t.max.x:t.min.x,Ca.y=s.normal.y>0?t.max.y:t.min.y,Ca.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},qu=new un,tl=class i{constructor(){this.coordinateSystem=zi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let o=e[s];qu.multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse),n[s]===void 0&&(n[s]=new Rs),n[s].setFromProjectionMatrix(qu,o.coordinateSystem,o.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Rs),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var ps=class extends Di{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},el=new J,nl=new J,Yu=new un,Qr=new Cr,Ra=new es,nh=new J,Zu=new J,il=class extends Mn{constructor(t=new tn,e=new ps){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)el.fromBufferAttribute(e,s-1),nl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=el.distanceTo(nl);t.setAttribute("lineDistance",new Je(n,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=o,t.ray.intersectsSphere(Ra)===!1)return;Yu.copy(s).invert(),Qr.copy(t.ray).applyMatrix4(Yu);let a=o/s.getMaxScaleOnAxis(),c=a*a,h=this.isLineSegments?2:1,d=n.index,m=n.attributes.position;if(d!==null){let x=Math.max(0,r.start),y=Math.min(d.count,r.start+r.count);for(let b=x,p=y-1;b<p;b+=h){let _=d.getX(b),A=d.getX(b+1),P=Fa(this,t,Qr,c,_,A,b);P&&e.push(P)}if(this.isLineLoop){let b=d.getX(y-1),p=d.getX(x),_=Fa(this,t,Qr,c,b,p,y-1);_&&e.push(_)}}else{let x=Math.max(0,r.start),y=Math.min(m.count,r.start+r.count);for(let b=x,p=y-1;b<p;b+=h){let _=Fa(this,t,Qr,c,b,b+1,b);_&&e.push(_)}if(this.isLineLoop){let b=Fa(this,t,Qr,c,y-1,x,y-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Fa(i,t,e,n,s,o,r){let a=i.geometry.attributes.position;if(el.fromBufferAttribute(a,s),nl.fromBufferAttribute(a,o),e.distanceSqToSegment(el,nl,nh,Zu)>n)return;nh.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(nh);if(!(h<t.near||h>t.far))return{distance:h,point:Zu.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var Ju=new J,$u=new J,Fs=class extends il{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)Ju.fromBufferAttribute(e,s),$u.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ju.distanceTo($u);t.setAttribute("lineDistance",new Je(n,1))}else Ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Xs=class extends Di{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ku=new un,uh=new Cr,Pa=new es,Ia=new J,Rr=class extends Mn{constructor(t=new tn,e=new Xs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(s),Pa.radius+=o,t.ray.intersectsSphere(Pa)===!1)return;Ku.copy(s).invert(),uh.copy(t.ray).applyMatrix4(Ku);let a=o/s.getMaxScaleOnAxis(),c=a*a,h=n.index,f=n.attributes.position;if(h!==null){let m=Math.max(0,r.start),x=Math.min(h.count,r.start+r.count);for(let y=m,b=x;y<b;y++){let p=h.getX(y);Ia.fromBufferAttribute(f,p),ju(Ia,p,c,s,t,e,this)}}else{let m=Math.max(0,r.start),x=Math.min(f.count,r.start+r.count);for(let y=m,b=x;y<b;y++)Ia.fromBufferAttribute(f,y),ju(Ia,y,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function ju(i,t,e,n,s,o,r){let a=uh.distanceSqToPoint(i);if(a<e){let c=new J;uh.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;o.push({distance:h,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var _o=class extends mi{constructor(t=[],e=js,n,s,o,r,a,c,h,d){super(t,e,n,s,o,r,a,c,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vo=class extends mi{constructor(t,e,n,s,o,r,a,c,h){super(t,e,n,s,o,r,a,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ms=class extends mi{constructor(t,e,n=Xi,s,o,r,a=Zn,c=Zn,h,d=fs,f=1){if(d!==fs&&d!==ys)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:t,height:e,depth:f};super(m,s,o,r,a,c,d,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Er(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Mo=class extends ms{constructor(t,e=Xi,n=js,s,o,r=Zn,a=Zn,c,h=fs){let d={width:t,height:t,depth:1},f=[d,d,d,d,d,d];super(t,t,e,n,s,o,r,a,c,h),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},wo=class extends mi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Fe=class i extends tn{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};let a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);let c=[],h=[],d=[],f=[],m=0,x=0;y("z","y","x",-1,-1,n,e,t,r,o,0),y("z","y","x",1,-1,n,e,-t,r,o,1),y("x","z","y",1,1,t,n,e,s,r,2),y("x","z","y",1,-1,t,n,-e,s,r,3),y("x","y","z",1,-1,t,e,n,s,o,4),y("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new Je(h,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(f,2));function y(b,p,_,A,P,M,N,R,v,C,G){let B=M/v,st=N/C,at=M/2,W=N/2,bt=R/2,ft=v+1,Ct=C+1,pt=0,xt=0,Mt=new J;for(let Ut=0;Ut<Ct;Ut++){let Qt=Ut*st-W;for(let ne=0;ne<ft;ne++){let _e=ne*B-at;Mt[b]=_e*A,Mt[p]=Qt*P,Mt[_]=bt,h.push(Mt.x,Mt.y,Mt.z),Mt[b]=0,Mt[p]=0,Mt[_]=R>0?1:-1,d.push(Mt.x,Mt.y,Mt.z),f.push(ne/v),f.push(1-Ut/C),pt+=1}}for(let Ut=0;Ut<C;Ut++)for(let Qt=0;Qt<v;Qt++){let ne=m+Qt+ft*Ut,_e=m+Qt+ft*(Ut+1),et=m+(Qt+1)+ft*(Ut+1),Zt=m+(Qt+1)+ft*Ut;c.push(ne,_e,Zt),c.push(_e,et,Zt),xt+=6}a.addGroup(x,xt,G),x+=xt,m+=pt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ni=class i extends tn{constructor(t=1,e=1,n=4,s=8,o=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:o},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),o=Math.max(1,Math.floor(o));let r=[],a=[],c=[],h=[],d=e/2,f=Math.PI/2*t,m=e,x=2*f+m,y=n*2+o,b=s+1,p=new J,_=new J;for(let A=0;A<=y;A++){let P=0,M=0,N=0,R=0;if(A<=n){let G=A/n,B=G*Math.PI/2;M=-d-t*Math.cos(B),N=t*Math.sin(B),R=-t*Math.cos(B),P=G*f}else if(A<=n+o){let G=(A-n)/o;M=-d+G*e,N=t,R=0,P=f+G*m}else{let G=(A-n-o)/n,B=G*Math.PI/2;M=d+t*Math.sin(B),N=t*Math.cos(B),R=t*Math.sin(B),P=f+m+G*f}let v=Math.max(0,Math.min(1,P/x)),C=0;A===0?C=.5/s:A===y&&(C=-.5/s);for(let G=0;G<=s;G++){let B=G/s,st=B*Math.PI*2,at=Math.sin(st),W=Math.cos(st);_.x=-N*W,_.y=M,_.z=N*at,a.push(_.x,_.y,_.z),p.set(-N*W,R,N*at),p.normalize(),c.push(p.x,p.y,p.z),h.push(B+C,v)}if(A>0){let G=(A-1)*b;for(let B=0;B<s;B++){let st=G+B,at=G+B+1,W=A*b+B,bt=A*b+B+1;r.push(st,at,W),r.push(at,bt,W)}}}this.setIndex(r),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},$n=class i extends tn{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let o=[],r=[],a=[],c=[],h=new J,d=new Ot;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,m=3;f<=e;f++,m+=3){let x=n+f/e*s;h.x=t*Math.cos(x),h.y=t*Math.sin(x),r.push(h.x,h.y,h.z),a.push(0,0,1),d.x=(r[m]/t+1)/2,d.y=(r[m+1]/t+1)/2,c.push(d.x,d.y)}for(let f=1;f<=e;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(a,3)),this.setAttribute("uv",new Je(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ye=class i extends tn{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};let h=this;s=Math.floor(s),o=Math.floor(o);let d=[],f=[],m=[],x=[],y=0,b=[],p=n/2,_=0;A(),r===!1&&(t>0&&P(!0),e>0&&P(!1)),this.setIndex(d),this.setAttribute("position",new Je(f,3)),this.setAttribute("normal",new Je(m,3)),this.setAttribute("uv",new Je(x,2));function A(){let M=new J,N=new J,R=0,v=(e-t)/n;for(let C=0;C<=o;C++){let G=[],B=C/o,st=B*(e-t)+t;for(let at=0;at<=s;at++){let W=at/s,bt=W*c+a,ft=Math.sin(bt),Ct=Math.cos(bt);N.x=st*ft,N.y=-B*n+p,N.z=st*Ct,f.push(N.x,N.y,N.z),M.set(ft,v,Ct).normalize(),m.push(M.x,M.y,M.z),x.push(W,1-B),G.push(y++)}b.push(G)}for(let C=0;C<s;C++)for(let G=0;G<o;G++){let B=b[G][C],st=b[G+1][C],at=b[G+1][C+1],W=b[G][C+1];(t>0||G!==0)&&(d.push(B,st,W),R+=3),(e>0||G!==o-1)&&(d.push(st,at,W),R+=3)}h.addGroup(_,R,0),_+=R}function P(M){let N=y,R=new Ot,v=new J,C=0,G=M===!0?t:e,B=M===!0?1:-1;for(let at=1;at<=s;at++)f.push(0,p*B,0),m.push(0,B,0),x.push(.5,.5),y++;let st=y;for(let at=0;at<=s;at++){let bt=at/s*c+a,ft=Math.cos(bt),Ct=Math.sin(bt);v.x=G*Ct,v.y=p*B,v.z=G*ft,f.push(v.x,v.y,v.z),m.push(0,B,0),R.x=ft*.5+.5,R.y=Ct*.5*B+.5,x.push(R.x,R.y),y++}for(let at=0;at<s;at++){let W=N+at,bt=st+at;M===!0?d.push(bt,bt+1,W):d.push(bt+1,bt,W),C+=3}h.addGroup(_,C,M===!0?1:2),_+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Rn=class i extends ye{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},So=class i extends tn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let o=[],r=[];a(s),h(n),d(),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(o.slice(),3)),this.setAttribute("uv",new Je(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(A){let P=new J,M=new J,N=new J;for(let R=0;R<e.length;R+=3)x(e[R+0],P),x(e[R+1],M),x(e[R+2],N),c(P,M,N,A)}function c(A,P,M,N){let R=N+1,v=[];for(let C=0;C<=R;C++){v[C]=[];let G=A.clone().lerp(M,C/R),B=P.clone().lerp(M,C/R),st=R-C;for(let at=0;at<=st;at++)at===0&&C===R?v[C][at]=G:v[C][at]=G.clone().lerp(B,at/st)}for(let C=0;C<R;C++)for(let G=0;G<2*(R-C)-1;G++){let B=Math.floor(G/2);G%2===0?(m(v[C][B+1]),m(v[C+1][B]),m(v[C][B])):(m(v[C][B+1]),m(v[C+1][B+1]),m(v[C+1][B]))}}function h(A){let P=new J;for(let M=0;M<o.length;M+=3)P.x=o[M+0],P.y=o[M+1],P.z=o[M+2],P.normalize().multiplyScalar(A),o[M+0]=P.x,o[M+1]=P.y,o[M+2]=P.z}function d(){let A=new J;for(let P=0;P<o.length;P+=3){A.x=o[P+0],A.y=o[P+1],A.z=o[P+2];let M=p(A)/2/Math.PI+.5,N=_(A)/Math.PI+.5;r.push(M,1-N)}y(),f()}function f(){for(let A=0;A<r.length;A+=6){let P=r[A+0],M=r[A+2],N=r[A+4],R=Math.max(P,M,N),v=Math.min(P,M,N);R>.9&&v<.1&&(P<.2&&(r[A+0]+=1),M<.2&&(r[A+2]+=1),N<.2&&(r[A+4]+=1))}}function m(A){o.push(A.x,A.y,A.z)}function x(A,P){let M=A*3;P.x=t[M+0],P.y=t[M+1],P.z=t[M+2]}function y(){let A=new J,P=new J,M=new J,N=new J,R=new Ot,v=new Ot,C=new Ot;for(let G=0,B=0;G<o.length;G+=9,B+=6){A.set(o[G+0],o[G+1],o[G+2]),P.set(o[G+3],o[G+4],o[G+5]),M.set(o[G+6],o[G+7],o[G+8]),R.set(r[B+0],r[B+1]),v.set(r[B+2],r[B+3]),C.set(r[B+4],r[B+5]),N.copy(A).add(P).add(M).divideScalar(3);let st=p(N);b(R,B+0,A,st),b(v,B+2,P,st),b(C,B+4,M,st)}}function b(A,P,M,N){N<0&&A.x===1&&(r[P]=A.x-1),M.x===0&&M.z===0&&(r[P]=N/2/Math.PI+.5)}function p(A){return Math.atan2(A.z,-A.x)}function _(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},vi=class i extends So{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,o=n.length,r;e?r=e:r=t*n[o-1];let a=0,c=o-1,h;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),h=n[s]-r,h<0)a=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(o-1);let d=n[s],m=n[s+1]-d,x=(r-d)/m;return(s+x)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);let r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new Ot:new J);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new J,s=[],o=[],r=[],a=new J,c=new un;for(let x=0;x<=t;x++){let y=x/t;s[x]=this.getTangentAt(y,new J)}o[0]=new J,r[0]=new J;let h=Number.MAX_VALUE,d=Math.abs(s[0].x),f=Math.abs(s[0].y),m=Math.abs(s[0].z);d<=h&&(h=d,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),m<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let x=1;x<=t;x++){if(o[x]=o[x-1].clone(),r[x]=r[x-1].clone(),a.crossVectors(s[x-1],s[x]),a.length()>Number.EPSILON){a.normalize();let y=Math.acos(on(s[x-1].dot(s[x]),-1,1));o[x].applyMatrix4(c.makeRotationAxis(a,y))}r[x].crossVectors(s[x],o[x])}if(e===!0){let x=Math.acos(on(o[0].dot(o[t]),-1,1));x/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(x=-x);for(let y=1;y<=t;y++)o[y].applyMatrix4(c.makeRotationAxis(s[y],x*y)),r[y].crossVectors(s[y],o[y])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Fr=class extends Ci{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Ot){let n=e,s=Math.PI*2,o=this.aEndAngle-this.aStartAngle,r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);let a=this.aStartAngle+t*o,c=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),m=c-this.aX,x=h-this.aY;c=m*d-x*f+this.aX,h=m*f+x*d+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},sl=class extends Fr{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}};function Vh(){let i=0,t=0,e=0,n=0;function s(o,r,a,c){i=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,h){s(r,a,h*(a-o),h*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,h,d,f){let m=(r-o)/h-(a-o)/(h+d)+(a-r)/d,x=(a-r)/d-(c-r)/(d+f)+(c-a)/f;m*=d,x*=d,s(r,a,m,x)},calc:function(o){let r=o*o,a=r*o;return i+t*o+e*r+n*a}}}var Qu=new J,td=new J,ih=new Vh,sh=new Vh,rh=new Vh,Gn=class extends Ci{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new J){let n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t,a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let h,d;this.closed||a>0?h=s[(a-1)%o]:(td.subVectors(s[0],s[1]).add(s[0]),h=td);let f=s[a%o],m=s[(a+1)%o];if(this.closed||a+2<o?d=s[(a+2)%o]:(Qu.subVectors(s[o-1],s[o-2]).add(s[o-1]),d=Qu),this.curveType==="centripetal"||this.curveType==="chordal"){let x=this.curveType==="chordal"?.5:.25,y=Math.pow(h.distanceToSquared(f),x),b=Math.pow(f.distanceToSquared(m),x),p=Math.pow(m.distanceToSquared(d),x);b<1e-4&&(b=1),y<1e-4&&(y=b),p<1e-4&&(p=b),ih.initNonuniformCatmullRom(h.x,f.x,m.x,d.x,y,b,p),sh.initNonuniformCatmullRom(h.y,f.y,m.y,d.y,y,b,p),rh.initNonuniformCatmullRom(h.z,f.z,m.z,d.z,y,b,p)}else this.curveType==="catmullrom"&&(ih.initCatmullRom(h.x,f.x,m.x,d.x,this.tension),sh.initCatmullRom(h.y,f.y,m.y,d.y,this.tension),rh.initCatmullRom(h.z,f.z,m.z,d.z,this.tension));return n.set(ih.calc(c),sh.calc(c),rh.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new J().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ed(i,t,e,n,s){let o=(n-t)*.5,r=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*i+e}function O0(i,t){let e=1-i;return e*e*t}function k0(i,t){return 2*(1-i)*i*t}function V0(i,t){return i*i*t}function no(i,t,e,n){return O0(i,t)+k0(i,e)+V0(i,n)}function H0(i,t){let e=1-i;return e*e*e*t}function G0(i,t){let e=1-i;return 3*e*e*i*t}function W0(i,t){return 3*(1-i)*i*i*t}function X0(i,t){return i*i*i*t}function io(i,t,e,n,s){return H0(i,t)+G0(i,e)+W0(i,n)+X0(i,s)}var bo=class extends Ci{constructor(t=new Ot,e=new Ot,n=new Ot,s=new Ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ot){let n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(io(t,s.x,o.x,r.x,a.x),io(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},rl=class extends Ci{constructor(t=new J,e=new J,n=new J,s=new J){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new J){let n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(io(t,s.x,o.x,r.x,a.x),io(t,s.y,o.y,r.y,a.y),io(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ao=class extends Ci{constructor(t=new Ot,e=new Ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ol=class extends Ci{constructor(t=new J,e=new J){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new J){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eo=class extends Ci{constructor(t=new Ot,e=new Ot,n=new Ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ot){let n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(no(t,s.x,o.x,r.x),no(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qs=class extends Ci{constructor(t=new J,e=new J,n=new J){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new J){let n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(no(t,s.x,o.x,r.x),no(t,s.y,o.y,r.y),no(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},To=class extends Ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ot){let n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],h=s[r],d=s[r>s.length-2?s.length-1:r+1],f=s[r>s.length-3?s.length-1:r+2];return n.set(ed(a,c.x,h.x,d.x,f.x),ed(a,c.y,h.y,d.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Ot().fromArray(s))}return this}},al=Object.freeze({__proto__:null,ArcCurve:sl,CatmullRomCurve3:Gn,CubicBezierCurve:bo,CubicBezierCurve3:rl,EllipseCurve:Fr,LineCurve:Ao,LineCurve3:ol,QuadraticBezierCurve:Eo,QuadraticBezierCurve3:qs,SplineCurve:To}),ll=class extends Ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new al[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),o=0;for(;o<s.length;){if(s[o]>=n){let r=s[o]-n,a=this.curves[o],c=a.getLength(),h=c===0?0:1-r/c;return a.getPointAt(h,e)}o++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,o=this.curves;s<o.length;s++){let r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let h=0;h<c.length;h++){let d=c[h];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new al[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Co=class extends ll{constructor(t){super(),this.type="Path",this.currentPoint=new Ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ao(this.currentPoint.clone(),new Ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let o=new Eo(this.currentPoint.clone(),new Ot(t,e),new Ot(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){let a=new bo(this.currentPoint.clone(),new Ot(t,e),new Ot(n,s),new Ot(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new To(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,c){let h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+h,e+d,n,s,o,r,a,c),this}absellipse(t,e,n,s,o,r,a,c){let h=new Fr(t,e,n,s,o,r,a,c);if(this.curves.length>0){let f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);let d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Mi=class extends Co{constructor(t){super(t),this.uuid=Ns(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Co().fromJSON(s))}return this}};function q0(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,o=Qd(i,0,s,e,!0),r=[];if(!o||o.next===o.prev)return r;let a,c,h;if(n&&(o=K0(i,t,o,e)),i.length>80*e){a=i[0],c=i[1];let d=a,f=c;for(let m=e;m<s;m+=e){let x=i[m],y=i[m+1];x<a&&(a=x),y<c&&(c=y),x>d&&(d=x),y>f&&(f=y)}h=Math.max(d-a,f-c),h=h!==0?32767/h:0}return Ro(o,r,e,a,c,h,0),r}function Qd(i,t,e,n,s){let o;if(s===lp(i,t,e,n)>0)for(let r=t;r<e;r+=n)o=nd(r/n|0,i[r],i[r+1],o);else for(let r=e-n;r>=t;r-=n)o=nd(r/n|0,i[r],i[r+1],o);return o&&Pr(o,o.next)&&(Po(o),o=o.next),o}function Ys(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Pr(e,e.next)||In(e.prev,e,e.next)===0)){if(Po(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ro(i,t,e,n,s,o,r){if(!i)return;!r&&o&&np(i,n,s,o);let a=i;for(;i.prev!==i.next;){let c=i.prev,h=i.next;if(o?Z0(i,n,s,o):Y0(i)){t.push(c.i,i.i,h.i),Po(i),i=h.next,a=h.next;continue}if(i=h,i===a){r?r===1?(i=J0(Ys(i),t),Ro(i,t,e,n,s,o,2)):r===2&&$0(i,t,e,n,s,o):Ro(Ys(i),t,e,n,s,o,1);break}}}function Y0(i){let t=i.prev,e=i,n=i.next;if(In(t,e,n)>=0)return!1;let s=t.x,o=e.x,r=n.x,a=t.y,c=e.y,h=n.y,d=Math.min(s,o,r),f=Math.min(a,c,h),m=Math.max(s,o,r),x=Math.max(a,c,h),y=n.next;for(;y!==t;){if(y.x>=d&&y.x<=m&&y.y>=f&&y.y<=x&&to(s,a,o,c,r,h,y.x,y.y)&&In(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function Z0(i,t,e,n){let s=i.prev,o=i,r=i.next;if(In(s,o,r)>=0)return!1;let a=s.x,c=o.x,h=r.x,d=s.y,f=o.y,m=r.y,x=Math.min(a,c,h),y=Math.min(d,f,m),b=Math.max(a,c,h),p=Math.max(d,f,m),_=dh(x,y,t,e,n),A=dh(b,p,t,e,n),P=i.prevZ,M=i.nextZ;for(;P&&P.z>=_&&M&&M.z<=A;){if(P.x>=x&&P.x<=b&&P.y>=y&&P.y<=p&&P!==s&&P!==r&&to(a,d,c,f,h,m,P.x,P.y)&&In(P.prev,P,P.next)>=0||(P=P.prevZ,M.x>=x&&M.x<=b&&M.y>=y&&M.y<=p&&M!==s&&M!==r&&to(a,d,c,f,h,m,M.x,M.y)&&In(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;P&&P.z>=_;){if(P.x>=x&&P.x<=b&&P.y>=y&&P.y<=p&&P!==s&&P!==r&&to(a,d,c,f,h,m,P.x,P.y)&&In(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;M&&M.z<=A;){if(M.x>=x&&M.x<=b&&M.y>=y&&M.y<=p&&M!==s&&M!==r&&to(a,d,c,f,h,m,M.x,M.y)&&In(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function J0(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Pr(n,s)&&ef(n,e,e.next,s)&&Fo(n,s)&&Fo(s,n)&&(t.push(n.i,e.i,s.i),Po(e),Po(e.next),e=i=s),e=e.next}while(e!==i);return Ys(e)}function $0(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&rp(r,a)){let c=nf(r,a);r=Ys(r,r.next),c=Ys(c,c.next),Ro(r,t,e,n,s,o,0),Ro(c,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function K0(i,t,e,n){let s=[];for(let o=0,r=t.length;o<r;o++){let a=t[o]*n,c=o<r-1?t[o+1]*n:i.length,h=Qd(i,a,c,n,!1);h===h.next&&(h.steiner=!0),s.push(sp(h))}s.sort(j0);for(let o=0;o<s.length;o++)e=Q0(s[o],e);return e}function j0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Q0(i,t){let e=tp(i,t);if(!e)return t;let n=nf(e,i);return Ys(n,n.next),Ys(e,e.next)}function tp(i,t){let e=t,n=i.x,s=i.y,o=-1/0,r;if(Pr(i,e))return e;do{if(Pr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>o&&(o=f,r=e.x<e.next.x?e:e.next,f===n))return r}e=e.next}while(e!==t);if(!r)return null;let a=r,c=r.x,h=r.y,d=1/0;e=r;do{if(n>=e.x&&e.x>=c&&n!==e.x&&tf(s<h?n:o,s,c,h,s<h?o:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);Fo(e,i)&&(f<d||f===d&&(e.x>r.x||e.x===r.x&&ep(r,e)))&&(r=e,d=f)}e=e.next}while(e!==a);return r}function ep(i,t){return In(i.prev,i,t.prev)<0&&In(t.next,i,i.next)<0}function np(i,t,e,n){let s=i;do s.z===0&&(s.z=dh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ip(s)}function ip(i){let t,e=1;do{let n=i,s;i=null;let o=null;for(t=0;n;){t++;let r=n,a=0;for(let h=0;h<e&&(a++,r=r.nextZ,!!r);h++);let c=e;for(;a>0||c>0&&r;)a!==0&&(c===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,a--):(s=r,r=r.nextZ,c--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;n=r}o.nextZ=null,e*=2}while(t>1);return i}function dh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function sp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function tf(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function to(i,t,e,n,s,o,r,a){return!(i===r&&t===a)&&tf(i,t,e,n,s,o,r,a)}function rp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!op(i,t)&&(Fo(i,t)&&Fo(t,i)&&ap(i,t)&&(In(i.prev,i,t.prev)||In(i,t.prev,t))||Pr(i,t)&&In(i.prev,i,i.next)>0&&In(t.prev,t,t.next)>0)}function In(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Pr(i,t){return i.x===t.x&&i.y===t.y}function ef(i,t,e,n){let s=La(In(i,t,e)),o=La(In(i,t,n)),r=La(In(e,n,i)),a=La(In(e,n,t));return!!(s!==o&&r!==a||s===0&&za(i,e,t)||o===0&&za(i,n,t)||r===0&&za(e,i,n)||a===0&&za(e,t,n))}function za(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function La(i){return i>0?1:i<0?-1:0}function op(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ef(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Fo(i,t){return In(i.prev,i,i.next)<0?In(i,t,i.next)>=0&&In(i,i.prev,t)>=0:In(i,t,i.prev)<0||In(i,i.next,t)<0}function ap(i,t){let e=i,n=!1,s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function nf(i,t){let e=fh(i.i,i.x,i.y),n=fh(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function nd(i,t,e,n){let s=fh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Po(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lp(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}var ph=class{static triangulate(t,e,n=2){return q0(t,e,n)}},ji=class i{static area(t){let e=t.length,n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],o=[];id(t),sd(n,t);let r=t.length;e.forEach(id);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,sd(n,e[c]);let a=ph.triangulate(n,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}};function id(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function sd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Zs=class i extends tn{constructor(t=new Mi([new Ot(.5,.5),new Ot(-.5,.5),new Ot(-.5,-.5),new Ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],o=[];for(let a=0,c=t.length;a<c;a++){let h=t[a];r(h)}this.setAttribute("position",new Je(s,3)),this.setAttribute("uv",new Je(o,2)),this.computeVertexNormals();function r(a){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,x=e.bevelThickness!==void 0?e.bevelThickness:.2,y=e.bevelSize!==void 0?e.bevelSize:x-.1,b=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,_=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:cp,P,M=!1,N,R,v,C;if(_){P=_.getSpacedPoints(d),M=!0,m=!1;let K=_.isCatmullRomCurve3?_.closed:!1;N=_.computeFrenetFrames(d,K),R=new J,v=new J,C=new J}m||(p=0,x=0,y=0,b=0);let G=a.extractPoints(h),B=G.shape,st=G.holes;if(!ji.isClockWise(B)){B=B.reverse();for(let K=0,ht=st.length;K<ht;K++){let X=st[K];ji.isClockWise(X)&&(st[K]=X.reverse())}}function W(K){let X=10000000000000001e-36,mt=K[0];for(let rt=1;rt<=K.length;rt++){let gt=rt%K.length,St=K[gt],Lt=St.x-mt.x,It=St.y-mt.y,ce=Lt*Lt+It*It,tt=Math.max(Math.abs(St.x),Math.abs(St.y),Math.abs(mt.x),Math.abs(mt.y)),we=X*tt*tt;if(ce<=we){K.splice(gt,1),rt--;continue}mt=St}}W(B),st.forEach(W);let bt=st.length,ft=B;for(let K=0;K<bt;K++){let ht=st[K];B=B.concat(ht)}function Ct(K,ht,X){return ht||Ye("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(ht,X)}let pt=B.length;function xt(K,ht,X){let mt,rt,gt,St=K.x-ht.x,Lt=K.y-ht.y,It=X.x-K.x,ce=X.y-K.y,tt=St*St+Lt*Lt,we=St*ce-Lt*It;if(Math.abs(we)>Number.EPSILON){let ot=Math.sqrt(tt),ct=Math.sqrt(It*It+ce*ce),j=ht.x-Lt/ot,ie=ht.y+St/ot,qt=X.x-ce/ct,Jt=X.y+It/ct,l=((qt-j)*ce-(Jt-ie)*It)/(St*ce-Lt*It);mt=j+St*l-K.x,rt=ie+Lt*l-K.y;let u=mt*mt+rt*rt;if(u<=2)return new Ot(mt,rt);gt=Math.sqrt(u/2)}else{let ot=!1;St>Number.EPSILON?It>Number.EPSILON&&(ot=!0):St<-Number.EPSILON?It<-Number.EPSILON&&(ot=!0):Math.sign(Lt)===Math.sign(ce)&&(ot=!0),ot?(mt=-Lt,rt=St,gt=Math.sqrt(tt)):(mt=St,rt=Lt,gt=Math.sqrt(tt/2))}return new Ot(mt/gt,rt/gt)}let Mt=[];for(let K=0,ht=ft.length,X=ht-1,mt=K+1;K<ht;K++,X++,mt++)X===ht&&(X=0),mt===ht&&(mt=0),Mt[K]=xt(ft[K],ft[X],ft[mt]);let Ut=[],Qt,ne=Mt.concat();for(let K=0,ht=bt;K<ht;K++){let X=st[K];Qt=[];for(let mt=0,rt=X.length,gt=rt-1,St=mt+1;mt<rt;mt++,gt++,St++)gt===rt&&(gt=0),St===rt&&(St=0),Qt[mt]=xt(X[mt],X[gt],X[St]);Ut.push(Qt),ne=ne.concat(Qt)}let _e;if(p===0)_e=ji.triangulateShape(ft,st);else{let K=[],ht=[];for(let X=0;X<p;X++){let mt=X/p,rt=x*Math.cos(mt*Math.PI/2),gt=y*Math.sin(mt*Math.PI/2)+b;for(let St=0,Lt=ft.length;St<Lt;St++){let It=Ct(ft[St],Mt[St],gt);fe(It.x,It.y,-rt),mt===0&&K.push(It)}for(let St=0,Lt=bt;St<Lt;St++){let It=st[St];Qt=Ut[St];let ce=[];for(let tt=0,we=It.length;tt<we;tt++){let ot=Ct(It[tt],Qt[tt],gt);fe(ot.x,ot.y,-rt),mt===0&&ce.push(ot)}mt===0&&ht.push(ce)}}_e=ji.triangulateShape(K,ht)}let et=_e.length,Zt=y+b;for(let K=0;K<pt;K++){let ht=m?Ct(B[K],ne[K],Zt):B[K];M?(v.copy(N.normals[0]).multiplyScalar(ht.x),R.copy(N.binormals[0]).multiplyScalar(ht.y),C.copy(P[0]).add(v).add(R),fe(C.x,C.y,C.z)):fe(ht.x,ht.y,0)}for(let K=1;K<=d;K++)for(let ht=0;ht<pt;ht++){let X=m?Ct(B[ht],ne[ht],Zt):B[ht];M?(v.copy(N.normals[K]).multiplyScalar(X.x),R.copy(N.binormals[K]).multiplyScalar(X.y),C.copy(P[K]).add(v).add(R),fe(C.x,C.y,C.z)):fe(X.x,X.y,f/d*K)}for(let K=p-1;K>=0;K--){let ht=K/p,X=x*Math.cos(ht*Math.PI/2),mt=y*Math.sin(ht*Math.PI/2)+b;for(let rt=0,gt=ft.length;rt<gt;rt++){let St=Ct(ft[rt],Mt[rt],mt);fe(St.x,St.y,f+X)}for(let rt=0,gt=st.length;rt<gt;rt++){let St=st[rt];Qt=Ut[rt];for(let Lt=0,It=St.length;Lt<It;Lt++){let ce=Ct(St[Lt],Qt[Lt],mt);M?fe(ce.x,ce.y+P[d-1].y,P[d-1].x+X):fe(ce.x,ce.y,f+X)}}}le(),xe();function le(){let K=s.length/3;if(m){let ht=0,X=pt*ht;for(let mt=0;mt<et;mt++){let rt=_e[mt];De(rt[2]+X,rt[1]+X,rt[0]+X)}ht=d+p*2,X=pt*ht;for(let mt=0;mt<et;mt++){let rt=_e[mt];De(rt[0]+X,rt[1]+X,rt[2]+X)}}else{for(let ht=0;ht<et;ht++){let X=_e[ht];De(X[2],X[1],X[0])}for(let ht=0;ht<et;ht++){let X=_e[ht];De(X[0]+pt*d,X[1]+pt*d,X[2]+pt*d)}}n.addGroup(K,s.length/3-K,0)}function xe(){let K=s.length/3,ht=0;te(ft,ht),ht+=ft.length;for(let X=0,mt=st.length;X<mt;X++){let rt=st[X];te(rt,ht),ht+=rt.length}n.addGroup(K,s.length/3-K,1)}function te(K,ht){let X=K.length;for(;--X>=0;){let mt=X,rt=X-1;rt<0&&(rt=K.length-1);for(let gt=0,St=d+p*2;gt<St;gt++){let Lt=pt*gt,It=pt*(gt+1),ce=ht+mt+Lt,tt=ht+rt+Lt,we=ht+rt+It,ot=ht+mt+It;kt(ce,tt,we,ot)}}}function fe(K,ht,X){c.push(K),c.push(ht),c.push(X)}function De(K,ht,X){k(K),k(ht),k(X);let mt=s.length/3,rt=A.generateTopUV(n,s,mt-3,mt-2,mt-1);vt(rt[0]),vt(rt[1]),vt(rt[2])}function kt(K,ht,X,mt){k(K),k(ht),k(mt),k(ht),k(X),k(mt);let rt=s.length/3,gt=A.generateSideWallUV(n,s,rt-6,rt-3,rt-2,rt-1);vt(gt[0]),vt(gt[1]),vt(gt[3]),vt(gt[1]),vt(gt[2]),vt(gt[3])}function k(K){s.push(c[K*3+0]),s.push(c[K*3+1]),s.push(c[K*3+2])}function vt(K){o.push(K.x),o.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return hp(e,n,t)}static fromJSON(t,e){let n=[];for(let o=0,r=t.shapes.length;o<r;o++){let a=e[t.shapes[o]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new al[s.type]().fromJSON(s)),new i(n,t.options)}},cp={generateTopUV:function(i,t,e,n,s){let o=t[e*3],r=t[e*3+1],a=t[n*3],c=t[n*3+1],h=t[s*3],d=t[s*3+1];return[new Ot(o,r),new Ot(a,c),new Ot(h,d)]},generateSideWallUV:function(i,t,e,n,s,o){let r=t[e*3],a=t[e*3+1],c=t[e*3+2],h=t[n*3],d=t[n*3+1],f=t[n*3+2],m=t[s*3],x=t[s*3+1],y=t[s*3+2],b=t[o*3],p=t[o*3+1],_=t[o*3+2];return Math.abs(a-d)<Math.abs(r-h)?[new Ot(r,1-c),new Ot(h,1-f),new Ot(m,1-y),new Ot(b,1-_)]:[new Ot(a,1-c),new Ot(d,1-f),new Ot(x,1-y),new Ot(p,1-_)]}};function hp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var En=class i extends So{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Kn=class i extends tn{constructor(t=[new Ot(0,-.5),new Ot(.5,0),new Ot(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=on(s,0,Math.PI*2);let o=[],r=[],a=[],c=[],h=[],d=1/e,f=new J,m=new Ot,x=new J,y=new J,b=new J,p=0,_=0;for(let A=0;A<=t.length-1;A++)switch(A){case 0:p=t[A+1].x-t[A].x,_=t[A+1].y-t[A].y,x.x=_*1,x.y=-p,x.z=_*0,b.copy(x),x.normalize(),c.push(x.x,x.y,x.z);break;case t.length-1:b.normalize(),c.push(b.x,b.y,b.z);break;default:p=t[A+1].x-t[A].x,_=t[A+1].y-t[A].y,x.x=_*1,x.y=-p,x.z=_*0,y.copy(x),x.x+=b.x,x.y+=b.y,x.z+=b.z,x.normalize(),c.push(x.x,x.y,x.z),b.copy(y)}for(let A=0;A<=e;A++){let P=n+A*d*s,M=Math.sin(P),N=Math.cos(P);for(let R=0;R<=t.length-1;R++){f.x=t[R].x*M,f.y=t[R].y,f.z=t[R].x*N,r.push(f.x,f.y,f.z),m.x=A/e,m.y=R/(t.length-1),a.push(m.x,m.y);let v=c[3*R+0]*M,C=c[3*R+1],G=c[3*R+0]*N;h.push(v,C,G)}}for(let A=0;A<e;A++)for(let P=0;P<t.length-1;P++){let M=P+A*t.length,N=M,R=M+t.length,v=M+t.length+1,C=M+1;o.push(N,R,C),o.push(v,C,R)}this.setIndex(o),this.setAttribute("position",new Je(r,3)),this.setAttribute("uv",new Je(a,2)),this.setAttribute("normal",new Je(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var pn=class i extends tn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(s),h=a+1,d=c+1,f=t/a,m=e/c,x=[],y=[],b=[],p=[];for(let _=0;_<d;_++){let A=_*m-r;for(let P=0;P<h;P++){let M=P*f-o;y.push(M,-A,0),b.push(0,0,1),p.push(P/a),p.push(1-_/c)}}for(let _=0;_<c;_++)for(let A=0;A<a;A++){let P=A+h*_,M=A+h*(_+1),N=A+1+h*(_+1),R=A+1+h*_;x.push(P,M,R),x.push(M,N,R)}this.setIndex(x),this.setAttribute("position",new Je(y,3)),this.setAttribute("normal",new Je(b,3)),this.setAttribute("uv",new Je(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Io=class i extends tn{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],h=[],d=[],f=t,m=(e-t)/s,x=new J,y=new Ot;for(let b=0;b<=s;b++){for(let p=0;p<=n;p++){let _=o+p/n*r;x.x=f*Math.cos(_),x.y=f*Math.sin(_),c.push(x.x,x.y,x.z),h.push(0,0,1),y.x=(x.x/e+1)/2,y.y=(x.y/e+1)/2,d.push(y.x,y.y)}f+=m}for(let b=0;b<s;b++){let p=b*(n+1);for(let _=0;_<n;_++){let A=_+p,P=A,M=A+n+1,N=A+n+2,R=A+1;a.push(P,M,R),a.push(M,N,R)}}this.setIndex(a),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},gs=class i extends tn{constructor(t=new Mi([new Ot(0,.5),new Ot(-.5,-.5),new Ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],o=[],r=[],a=0,c=0;if(Array.isArray(t)===!1)h(t);else for(let d=0;d<t.length;d++)h(t[d]),this.addGroup(a,c,d),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(o,3)),this.setAttribute("uv",new Je(r,2));function h(d){let f=s.length/3,m=d.extractPoints(e),x=m.shape,y=m.holes;ji.isClockWise(x)===!1&&(x=x.reverse());for(let p=0,_=y.length;p<_;p++){let A=y[p];ji.isClockWise(A)===!0&&(y[p]=A.reverse())}let b=ji.triangulateShape(x,y);for(let p=0,_=y.length;p<_;p++){let A=y[p];x=x.concat(A)}for(let p=0,_=x.length;p<_;p++){let A=x[p];s.push(A.x,A.y,0),o.push(0,0,1),r.push(A.x,A.y)}for(let p=0,_=b.length;p<_;p++){let A=b[p],P=A[0]+f,M=A[1]+f,N=A[2]+f;n.push(P,M,N),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return up(e,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let r=e[t.shapes[s]];n.push(r)}return new i(n,t.curveSegments)}};function up(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ue=class i extends tn{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(r+a,Math.PI),h=0,d=[],f=new J,m=new J,x=[],y=[],b=[],p=[];for(let _=0;_<=n;_++){let A=[],P=_/n,M=r+P*a,N=t*Math.cos(M),R=Math.sqrt(t*t-N*N),v=0;_===0&&r===0?v=.5/e:_===n&&c===Math.PI&&(v=-.5/e);for(let C=0;C<=e;C++){let G=C/e,B=s+G*o;f.x=-R*Math.cos(B),f.y=N,f.z=R*Math.sin(B),y.push(f.x,f.y,f.z),m.copy(f).normalize(),b.push(m.x,m.y,m.z),p.push(G+v,1-P),A.push(h++)}d.push(A)}for(let _=0;_<n;_++)for(let A=0;A<e;A++){let P=d[_][A+1],M=d[_][A],N=d[_+1][A],R=d[_+1][A+1];(_!==0||r>0)&&x.push(P,M,R),(_!==n-1||c<Math.PI)&&x.push(M,N,R)}this.setIndex(x),this.setAttribute("position",new Je(y,3)),this.setAttribute("normal",new Je(b,3)),this.setAttribute("uv",new Je(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Wn=class i extends tn{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2,r=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o,thetaStart:r,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],h=[],d=[],f=[],m=new J,x=new J,y=new J;for(let b=0;b<=n;b++){let p=r+b/n*a;for(let _=0;_<=s;_++){let A=_/s*o;x.x=(t+e*Math.cos(p))*Math.cos(A),x.y=(t+e*Math.cos(p))*Math.sin(A),x.z=e*Math.sin(p),h.push(x.x,x.y,x.z),m.x=t*Math.cos(A),m.y=t*Math.sin(A),y.subVectors(x,m).normalize(),d.push(y.x,y.y,y.z),f.push(_/s),f.push(b/n)}}for(let b=1;b<=n;b++)for(let p=1;p<=s;p++){let _=(s+1)*b+p-1,A=(s+1)*(b-1)+p-1,P=(s+1)*(b-1)+p,M=(s+1)*b+p;c.push(_,A,M),c.push(A,P,M)}this.setIndex(c),this.setAttribute("position",new Je(h,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var gi=class i extends tn{constructor(t=new qs(new J(-1,-1,0),new J(-1,1,0),new J(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};let r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let a=new J,c=new J,h=new Ot,d=new J,f=[],m=[],x=[],y=[];b(),this.setIndex(y),this.setAttribute("position",new Je(f,3)),this.setAttribute("normal",new Je(m,3)),this.setAttribute("uv",new Je(x,2));function b(){for(let P=0;P<e;P++)p(P);p(o===!1?e:0),A(),_()}function p(P){d=t.getPointAt(P/e,d);let M=r.normals[P],N=r.binormals[P];for(let R=0;R<=s;R++){let v=R/s*Math.PI*2,C=Math.sin(v),G=-Math.cos(v);c.x=G*M.x+C*N.x,c.y=G*M.y+C*N.y,c.z=G*M.z+C*N.z,c.normalize(),m.push(c.x,c.y,c.z),a.x=d.x+n*c.x,a.y=d.y+n*c.y,a.z=d.z+n*c.z,f.push(a.x,a.y,a.z)}}function _(){for(let P=1;P<=e;P++)for(let M=1;M<=s;M++){let N=(s+1)*(P-1)+(M-1),R=(s+1)*P+(M-1),v=(s+1)*P+M,C=(s+1)*(P-1)+M;y.push(N,R,C),y.push(R,v,C)}}function A(){for(let P=0;P<=e;P++)for(let M=0;M<=s;M++)h.x=P/e,h.y=M/s,x.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new al[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function tr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(rd(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(rd(s[0])){let o=[];for(let r=0,a=s.length;r<a;r++)o[r]=s[r].clone();t[e][n]=o}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ai(i){let t={};for(let e=0;e<i.length;e++){let n=tr(i[e]);for(let s in n)t[s]=n[s]}return t}function rd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function dp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:cn.workingColorSpace}var sf={clone:tr,merge:ai},fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ui=class extends Di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fp,this.fragmentShader=pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=tr(t.uniforms),this.uniformsGroups=dp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.linewidth=t.linewidth,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ve().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ot().fromArray(s.value);break;case"v3":this.uniforms[n].value=new J().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Sn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(s.value);break;case"m4":this.uniforms[n].value=new un().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},cl=class extends Ui{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Fn=class extends Di{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ve(16777215),this.specular=new Ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Oo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Le=class extends Di{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Oo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},hl=class extends Di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ul=class extends Di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function _r(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Da(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ps=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],o=e[n-1];n:{t:{let r;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=s,s=e[++n],t<s)break t}r=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(n=2,o=a);for(let c=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=o,o=e[--n-1],t>=o)break t}r=n,n=0;break e}break n}for(;n<r;){let a=n+r>>>1;t<e[a]?r=a:n=a+1}if(s=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,s)}return this.interpolate_(n,o,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=t*s;for(let r=0;r!==s;++r)e[r]=n[o+r];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},dl=class extends Ps{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lh,endingEnd:lh}}intervalChanged_(t,e,n){let s=this.parameterPositions,o=t-2,r=t+1,a=s[o],c=s[r];if(a===void 0)switch(this.getSettings_().endingStart){case ch:o=t,a=2*e-n;break;case hh:o=s.length-2,a=e+s[o]-s[o+1];break;default:o=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ch:r=t,c=2*n-e;break;case hh:r=1,c=n+s[1]-s[0];break;default:r=t-1,c=e}let h=(n-e)*.5,d=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(c-n),this._offsetPrev=o*d,this._offsetNext=r*d}interpolate_(t,e,n,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,d=this._offsetPrev,f=this._offsetNext,m=this._weightPrev,x=this._weightNext,y=(n-e)/(s-e),b=y*y,p=b*y,_=-m*p+2*m*b-m*y,A=(1+m)*p+(-1.5-2*m)*b+(-.5+m)*y+1,P=(-1-x)*p+(1.5+x)*b+.5*y,M=x*p-x*b;for(let N=0;N!==a;++N)o[N]=_*r[d+N]+A*r[h+N]+P*r[c+N]+M*r[f+N];return o}},fl=class extends Ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,d=(n-e)/(s-e),f=1-d;for(let m=0;m!==a;++m)o[m]=r[h+m]*f+r[c+m]*d;return o}},pl=class extends Ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ml=class extends Ps{interpolate_(t,e,n,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,d=this.inTangents,f=this.outTangents;if(!d||!f){let y=(n-e)/(s-e),b=1-y;for(let p=0;p!==a;++p)o[p]=r[h+p]*b+r[c+p]*y;return o}let m=a*2,x=t-1;for(let y=0;y!==a;++y){let b=r[h+y],p=r[c+y],_=x*m+y*2,A=f[_],P=f[_+1],M=t*m+y*2,N=d[M],R=d[M+1],v=gp(n,e,A,N,s);o[y]=rf(v,b,P,R,p)}return o}};function rf(i,t,e,n,s){let o=1-i;return o*o*o*t+3*o*o*i*e+3*o*i*i*n+i*i*i*s}function mp(i,t,e,n,s){let o=1-i;return 3*o*o*(e-t)+6*o*i*(n-e)+3*i*i*(s-n)}function gp(i,t,e,n,s){let o=(i-t)/(s-t);for(let r=0;r<8;r++){let a=rf(o,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=mp(o,t,e,n,s);if(Math.abs(c)<1e-10)break;o=Math.max(0,Math.min(1,o-a/c))}return o}var Ri=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_r(e,this.TimeBufferType),this.values=_r(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:_r(t.times,Array),values:_r(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Da(t.settings)&&(n.settings={inTangents:_r(t.settings.inTangents,Array),outTangents:_r(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ml(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case so:e=this.InterpolantFactoryMethodDiscrete;break;case Za:e=this.InterpolantFactoryMethodLinear;break;case Ba:e=this.InterpolantFactoryMethodSmooth;break;case ah:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ge("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return so;case this.InterpolantFactoryMethodLinear:return Za;case this.InterpolantFactoryMethodSmooth:return Ba;case this.InterpolantFactoryMethodBezier:return ah}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Da(this.settings)&&(od(this.settings.inTangents,t),od(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Da(this.settings)&&(ad(this.settings.inTangents,t),ad(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,o=0,r=s-1;for(;o!==s&&n[o]<t;)++o;for(;r!==-1&&n[r]>e;)--r;if(++r,o!==0||r!==s){o>=r&&(r=Math.max(r,1),o=r-1);let a=this.getValueSize();this.times=n.slice(o,r),this.values=this.values.slice(o*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,o=n.length;o===0&&(Ye("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==o;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ye("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(r!==null&&r>c){Ye("KeyframeTrack: Out of order keys.",this,a,c,r),t=!1;break}r=c}if(s!==void 0&&y0(s))for(let a=0,c=s.length;a!==c;++a){let h=s[a];if(isNaN(h)){Ye("KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ba,o=t.length-1,r=1;for(let a=1;a<o;++a){let c=!1,h=t[a],d=t[a+1];if(h!==d&&(a!==1||h!==t[0]))if(s)c=!0;else{let f=a*n,m=f-n,x=f+n;for(let y=0;y!==n;++y){let b=e[f+y];if(b!==e[m+y]||b!==e[x+y]){c=!0;break}}}if(c){if(a!==r){t[r]=t[a];let f=a*n,m=r*n;for(let x=0;x!==n;++x)e[m+x]=e[f+x]}++r}}if(o>0){t[r]=t[o];for(let a=o*n,c=r*n,h=0;h!==n;++h)e[c+h]=e[a+h];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Da(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function od(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function ad(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ri.prototype.ValueTypeName="";Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=Za;var Is=class extends Ri{constructor(t,e,n){super(t,e,n)}};Is.prototype.ValueTypeName="bool";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=so;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}};gl.prototype.ValueTypeName="color";var xl=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}};xl.prototype.ValueTypeName="number";var yl=class extends Ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),h=t*a;for(let d=h+a;h!==d;h+=4)Qn.slerpFlat(o,0,r,h-a,r,h,c);return o}},zo=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new yl(this.times,this.values,this.getValueSize(),t)}};zo.prototype.ValueTypeName="quaternion";zo.prototype.InterpolantFactoryMethodSmooth=void 0;var zs=class extends Ri{constructor(t,e,n){super(t,e,n)}};zs.prototype.ValueTypeName="string";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=so;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends Ri{constructor(t,e,n,s){super(t,e,n,s)}};_l.prototype.ValueTypeName="vector";var vl=class{constructor(t,e,n){let s=this,o=!1,r=0,a=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,o===!1&&s.onStart!==void 0&&s.onStart(d,r,a),o=!0},this.itemEnd=function(d){r++,s.onProgress!==void 0&&s.onProgress(d,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,f){return h.push(d,f),this},this.removeHandler=function(d){let f=h.indexOf(d);return f!==-1&&h.splice(f,2),this},this.getHandler=function(d){for(let f=0,m=h.length;f<m;f+=2){let x=h[f],y=h[f+1];if(x.global&&(x.lastIndex=0),x.test(d))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},of=new vl,Ml=class{constructor(t){this.manager=t!==void 0?t:of,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var Lo=class extends Mn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Do=class extends Lo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},oh=new un,ld=new J,cd=new J,wl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.filterNode=null,this.shadowNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rs,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new Sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ld.setFromMatrixPosition(t.matrixWorld),e.position.copy(ld),cd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){oh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(oh,t.coordinateSystem,t.reversedDepth);let o=this._frameExtents,r=s?s.z/o.x:1,a=s?s.w/o.y:1,c=s?s.x/o.x:0,h=s?s.y/o.y:0;t.coordinateSystem===br||t.reversedDepth?e.set(.5*r,0,0,.5*r+c,0,.5*a,0,.5*a+h,0,0,1,0,0,0,0,1):e.set(.5*r,0,0,.5*r+c,0,.5*a,0,.5*a+h,0,0,.5,.5,0,0,0,1),e.multiply(oh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this.filterNode=t.filterNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Na=new J,Ua=new Qn,$i=new J,No=class extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Na,Ua,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Na,Ua,$i.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){let s=super.updateWorldMatrix(t,e,n);return this.matrixWorld.decompose(Na,Ua,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Na,Ua,$i.set(1,1,1)).invert(),s}clone(){return new this.constructor().copy(this)}},Ts=new J,hd=new Ot,ud=new Ot,oi=class extends No{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ja*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Lc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(Lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ts.x,Ts.y).multiplyScalar(-t/Ts.z),Ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ts.x,Ts.y).multiplyScalar(-t/Ts.z)}getViewSize(t,e){return this.getViewBounds(t,hd,ud),e.subVectors(ud,hd)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Lc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let c=r.fullWidth,h=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*n/h,s*=r.width/c,n*=r.height/h}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Uo=class extends No{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,o=n-t,r=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,r=o+h*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},mh=class extends wl{constructor(){super(new Uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bo=class extends Lo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new mh}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var vr=-90,Mr=1,Ir=class extends Mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new oi(vr,Mr,t,e);s.layers=this.layers,this.add(s);let o=new oi(vr,Mr,t,e);o.layers=this.layers,this.add(o);let r=new oi(vr,Mr,t,e);r.layers=this.layers,this.add(r);let a=new oi(vr,Mr,t,e);a.layers=this.layers,this.add(a);let c=new oi(vr,Mr,t,e);c.layers=this.layers,this.add(c);let h=new oi(vr,Mr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,c]=e;for(let h of e)this.remove(h);if(t===zi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,r,a,c,h,d]=this.children,f=t.getRenderTarget(),m=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.mipmapsAutoUpdate=b,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(f,m,x),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},Sl=class extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Gh="\\[\\]\\.:\\/",xp=new RegExp("["+Gh+"]","g"),Wh="[^"+Gh+"]",yp="[^"+Gh.replace("\\.","")+"]",_p=/((?:WC+[\/:])*)/.source.replace("WC",Wh),vp=/(WCOD+)?/.source.replace("WCOD",yp),Mp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wh),wp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wh),Sp=new RegExp("^"+_p+vp+Mp+wp+"$"),bp=["material","materials","bones","map"],gh=class{constructor(t,e,n){let s=n||An.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},An=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xp,"")}static parseTrackName(t){let e=Sp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=n.nodeName.substring(s+1);bp.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(o){for(let r=0;r<o.length;r++){let a=o[r];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,o=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===h){h=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let r=t[s];if(r===void 0){let h=e.nodeName;Ye("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=o}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};An.Composite=gh;An.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};An.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};An.prototype.GetterByBindingType=[An.prototype._getValue_direct,An.prototype._getValue_array,An.prototype._getValue_arrayElement,An.prototype._getValue_toArray];An.prototype.SetterByBindingTypeAndVersioning=[[An.prototype._setValue_direct,An.prototype._setValue_direct_setNeedsUpdate,An.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[An.prototype._setValue_array,An.prototype._setValue_array_setNeedsUpdate,An.prototype._setValue_array_setMatrixWorldNeedsUpdate],[An.prototype._setValue_arrayElement,An.prototype._setValue_arrayElement_setNeedsUpdate,An.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[An.prototype._setValue_fromArray,An.prototype._setValue_fromArray_setNeedsUpdate,An.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Py=new Float32Array(1);var $h=class $h{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let o=this.elements;return o[0]=t,o[2]=e,o[1]=n,o[3]=s,this}};$h.prototype.isMatrix2=!0;var xh=$h;function Xh(i,t,e,n){let s=Ap(n);switch(e){case Lh:return i*t;case Il:return i*t/s.components*s.byteLength;case zl:return i*t/s.components*s.byteLength;case Ds:return i*t*2/s.components*s.byteLength;case Ll:return i*t*2/s.components*s.byteLength;case Dh:return i*t*3/s.components*s.byteLength;case Yi:return i*t*4/s.components*s.byteLength;case Dl:return i*t*4/s.components*s.byteLength;case Ho:case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wo:case Xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ul:case Ol:return Math.max(i,16)*Math.max(t,8)/4;case Nl:case Bl:return Math.max(i,8)*Math.max(t,8)/2;case kl:case Vl:case Gl:case Wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hl:case qo:case Xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case jl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case oc:case ac:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case cc:case hc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Yo:case uc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ap(i){switch(i){case wi:case Fh:return{byteLength:1,components:1};case Nr:case Ph:case qi:return{byteLength:2,components:1};case Fl:case Pl:return{byteLength:2,components:4};case Xi:case Rl:case Bi:return{byteLength:4,components:1};case Ih:case zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Al}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Al);function Cf(){let i=null,t=!1,e=null,n=null;function s(o,r){n=i.requestAnimationFrame(s),e(o,r)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Ep(i){let t=new WeakMap;function e(a,c){let h=a.array,d=a.usage,f=h.byteLength,m=i.createBuffer();i.bindBuffer(c,m),i.bufferData(c,h,d),a.onUploadCallback();let x;if(h instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=i.HALF_FLOAT;else if(h instanceof Uint16Array)x=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=i.SHORT;else if(h instanceof Uint32Array)x=i.UNSIGNED_INT;else if(h instanceof Int32Array)x=i.INT;else if(h instanceof Int8Array)x=i.BYTE;else if(h instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,h){let d=c.array,f=c.updateRanges;if(i.bindBuffer(h,a),f.length===0)i.bufferSubData(h,0,d);else{f.sort((x,y)=>x.start-y.start);let m=0;for(let x=1;x<f.length;x++){let y=f[m],b=f[x];b.start<=y.start+y.count+1?y.count=Math.max(y.count,b.start+b.count-y.start):(++m,f[m]=b)}f.length=m+1;for(let x=0,y=f.length;x<y;x++){let b=f[x];i.bufferSubData(h,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,c));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,c),h.version=a.version}}return{get:s,remove:o,update:r}}var Tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cp=`#ifdef USE_ALPHAHASH
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
#endif`,Rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zp=`#ifdef USE_AOMAP
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
#endif`,Lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dp=`#ifdef USE_BATCHING
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
#endif`,Np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kp=`#ifdef USE_IRIDESCENCE
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
#endif`,Vp=`#ifdef USE_BUMPMAP
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$p=`#define PI 3.141592653589793
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
} // validated`,Kp=`vec3 transformedNormal = objectNormal;
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
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fm=`#ifdef USE_GRADIENTMAP
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
}`,pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ym=`#ifdef USE_ENVMAP
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
#endif`,_m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sm=`PhysicalMaterial material;
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
#endif`,bm=`uniform sampler2D dfgLUT;
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
}`,Am=`
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
#endif`,Em=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nm=`#if defined( USE_POINTS_UV )
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
#endif`,Um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,km=`#if defined( USE_MORPHCOLORS )
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
#endif`,Vm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`#ifdef USE_MORPHTARGETS
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
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jm=`#ifdef USE_NORMALMAP
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
#endif`,$m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ug=`float getShadowMask() {
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
}`,dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mg=`#ifdef USE_SKINNING
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
#endif`,gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_g=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vg=`#ifdef USE_TRANSMISSION
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
#endif`,Mg=`#ifdef USE_TRANSMISSION
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tg=`uniform sampler2D t2D;
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rg=`uniform float backgroundBlurriness;
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`#include <common>
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
}`,zg=`#if DEPTH_PACKING == 3200
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
}`,Lg=`#define DISTANCE
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
}`,Dg=`#define DISTANCE
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`uniform float scale;
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
}`,Og=`uniform vec3 diffuse;
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
}`,kg=`#include <common>
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
}`,Vg=`uniform vec3 diffuse;
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
}`,Hg=`#define LAMBERT
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
}`,Gg=`#define LAMBERT
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
}`,Wg=`#define MATCAP
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
}`,Xg=`#define MATCAP
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
}`,qg=`#define NORMAL
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
}`,Yg=`#define NORMAL
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
}`,Zg=`#define PHONG
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
}`,Jg=`#define PHONG
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
}`,$g=`#define STANDARD
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
}`,Kg=`#define STANDARD
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
}`,jg=`#define TOON
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
}`,Qg=`#define TOON
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
}`,tx=`uniform float size;
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
}`,ex=`uniform vec3 diffuse;
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
}`,nx=`#include <common>
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
}`,ix=`uniform vec3 color;
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
}`,sx=`uniform float rotation;
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
}`,rx=`uniform vec3 diffuse;
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
}`,nn={alphahash_fragment:Tp,alphahash_pars_fragment:Cp,alphamap_fragment:Rp,alphamap_pars_fragment:Fp,alphatest_fragment:Pp,alphatest_pars_fragment:Ip,aomap_fragment:zp,aomap_pars_fragment:Lp,batching_pars_vertex:Dp,batching_vertex:Np,begin_vertex:Up,beginnormal_vertex:Bp,bsdfs:Op,iridescence_fragment:kp,bumpmap_pars_fragment:Vp,clipping_planes_fragment:Hp,clipping_planes_pars_fragment:Gp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:Xp,color_fragment:qp,color_pars_fragment:Yp,color_pars_vertex:Zp,color_vertex:Jp,common:$p,defaultnormal_vertex:Kp,displacementmap_pars_vertex:jp,displacementmap_vertex:Qp,emissivemap_fragment:tm,emissivemap_pars_fragment:em,colorspace_fragment:nm,colorspace_pars_fragment:im,envmap_fragment:sm,envmap_common_pars_fragment:rm,envmap_pars_fragment:om,envmap_pars_vertex:am,envmap_physical_pars_fragment:ym,envmap_vertex:lm,fog_vertex:cm,fog_pars_vertex:hm,fog_fragment:um,fog_pars_fragment:dm,gradientmap_pars_fragment:fm,lightmap_pars_fragment:pm,lights_lambert_fragment:mm,lights_lambert_pars_fragment:gm,lights_pars_begin:xm,lights_toon_fragment:_m,lights_toon_pars_fragment:vm,lights_phong_fragment:Mm,lights_phong_pars_fragment:wm,lights_physical_fragment:Sm,lights_physical_pars_fragment:bm,lights_fragment_begin:Am,lights_fragment_maps:Em,lights_fragment_end:Tm,lightprobes_pars_fragment:Cm,logdepthbuf_fragment:Rm,logdepthbuf_pars_fragment:Fm,logdepthbuf_pars_vertex:Pm,logdepthbuf_vertex:Im,map_fragment:zm,map_pars_fragment:Lm,map_particle_fragment:Dm,map_particle_pars_fragment:Nm,metalnessmap_fragment:Um,metalnessmap_pars_fragment:Bm,morphinstance_vertex:Om,morphcolor_vertex:km,morphnormal_vertex:Vm,morphtarget_pars_vertex:Hm,morphtarget_vertex:Gm,normal_fragment_begin:Wm,normal_fragment_maps:Xm,normal_pars_fragment:qm,normal_pars_vertex:Ym,normal_vertex:Zm,normalmap_pars_fragment:Jm,clearcoat_normal_fragment_begin:$m,clearcoat_normal_fragment_maps:Km,clearcoat_pars_fragment:jm,iridescence_pars_fragment:Qm,opaque_fragment:tg,packing:eg,premultiplied_alpha_fragment:ng,project_vertex:ig,dithering_fragment:sg,dithering_pars_fragment:rg,roughnessmap_fragment:og,roughnessmap_pars_fragment:ag,shadowmap_pars_fragment:lg,shadowmap_pars_vertex:cg,shadowmap_vertex:hg,shadowmask_pars_fragment:ug,skinbase_vertex:dg,skinning_pars_vertex:fg,skinning_vertex:pg,skinnormal_vertex:mg,specularmap_fragment:gg,specularmap_pars_fragment:xg,tonemapping_fragment:yg,tonemapping_pars_fragment:_g,transmission_fragment:vg,transmission_pars_fragment:Mg,uv_pars_fragment:wg,uv_pars_vertex:Sg,uv_vertex:bg,worldpos_vertex:Ag,background_vert:Eg,background_frag:Tg,backgroundCube_vert:Cg,backgroundCube_frag:Rg,cube_vert:Fg,cube_frag:Pg,depth_vert:Ig,depth_frag:zg,distance_vert:Lg,distance_frag:Dg,equirect_vert:Ng,equirect_frag:Ug,linedashed_vert:Bg,linedashed_frag:Og,meshbasic_vert:kg,meshbasic_frag:Vg,meshlambert_vert:Hg,meshlambert_frag:Gg,meshmatcap_vert:Wg,meshmatcap_frag:Xg,meshnormal_vert:qg,meshnormal_frag:Yg,meshphong_vert:Zg,meshphong_frag:Jg,meshphysical_vert:$g,meshphysical_frag:Kg,meshtoon_vert:jg,meshtoon_frag:Qg,points_vert:tx,points_frag:ex,shadow_vert:nx,shadow_frag:ix,sprite_vert:sx,sprite_frag:rx},Ie={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]},probesIntensity:{value:[]}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ss={basic:{uniforms:ai([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:nn.meshbasic_vert,fragmentShader:nn.meshbasic_frag},lambert:{uniforms:ai([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ve(0)},envMapIntensity:{value:1}}]),vertexShader:nn.meshlambert_vert,fragmentShader:nn.meshlambert_frag},phong:{uniforms:ai([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nn.meshphong_vert,fragmentShader:nn.meshphong_frag},standard:{uniforms:ai([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nn.meshphysical_vert,fragmentShader:nn.meshphysical_frag},toon:{uniforms:ai([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Ve(0)}}]),vertexShader:nn.meshtoon_vert,fragmentShader:nn.meshtoon_frag},matcap:{uniforms:ai([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:nn.meshmatcap_vert,fragmentShader:nn.meshmatcap_frag},points:{uniforms:ai([Ie.points,Ie.fog]),vertexShader:nn.points_vert,fragmentShader:nn.points_frag},dashed:{uniforms:ai([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nn.linedashed_vert,fragmentShader:nn.linedashed_frag},depth:{uniforms:ai([Ie.common,Ie.displacementmap]),vertexShader:nn.depth_vert,fragmentShader:nn.depth_frag},normal:{uniforms:ai([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:nn.meshnormal_vert,fragmentShader:nn.meshnormal_frag},sprite:{uniforms:ai([Ie.sprite,Ie.fog]),vertexShader:nn.sprite_vert,fragmentShader:nn.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nn.background_vert,fragmentShader:nn.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:nn.backgroundCube_vert,fragmentShader:nn.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nn.cube_vert,fragmentShader:nn.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nn.equirect_vert,fragmentShader:nn.equirect_frag},distance:{uniforms:ai([Ie.common,Ie.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nn.distance_vert,fragmentShader:nn.distance_frag},shadow:{uniforms:ai([Ie.lights,Ie.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:nn.shadow_vert,fragmentShader:nn.shadow_frag}};ss.physical={uniforms:ai([ss.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:nn.meshphysical_vert,fragmentShader:nn.meshphysical_frag};var fc={r:0,b:0,g:0},ox=new un,Rf=new $e;Rf.set(-1,0,0,0,1,0,0,0,1);function ax(i,t,e,n,s,o){let r=new Ve(0),a=s===!0?0:1,c,h,d=null,f=0,m=null;function x(A){let P=A.isScene===!0?A.background:null;if(P&&P.isTexture){let M=A.backgroundBlurriness>0;P=t.get(P,M)}return P}function y(A){let P=!1,M=x(A);M===null?p(r,a):M&&M.isColor&&(p(M,1),P=!0);let N=i.xr.getEnvironmentBlendMode();N==="additive"?e.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,o),(i.autoClear||P)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(A,P){let M=x(P);M&&M.isCubeTexture?(h===void 0&&(h=new Gt(new Fe(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:tr(ss.backgroundCube.uniforms),vertexShader:ss.backgroundCube.vertexShader,fragmentShader:ss.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,R,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ox.makeRotationFromEuler(P.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Rf),h.material.toneMapped=cn.getTransfer(M.colorSpace)!==gn,(d!==M||f!==M.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,m=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Gt(new pn(2,2),new Ui({name:"BackgroundMaterial",uniforms:tr(ss.background.uniforms),vertexShader:ss.background.vertexShader,fragmentShader:ss.background.fragmentShader,side:Ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.toneMapped=cn.getTransfer(M.colorSpace)!==gn,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,m=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,P){A.getRGB(fc,Hh(i)),e.buffers.color.setClear(fc.r,fc.g,fc.b,P,o)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(A,P=1){r.set(A),a=P,p(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(A){a=A,p(r,a)},render:y,addToRenderList:b,dispose:_}}function lx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),o=s,r=!1;function a(st,at,W,bt,ft){let Ct=!1,pt=f(st,bt,W,at);o!==pt&&(o=pt,h(o.object)),Ct=x(st,bt,W,ft),Ct&&y(st,bt,W,ft),ft!==null&&t.update(ft,i.ELEMENT_ARRAY_BUFFER),(Ct||r)&&(r=!1,M(st,at,W,bt),ft!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function c(){return i.createVertexArray()}function h(st){return i.bindVertexArray(st)}function d(st){return i.deleteVertexArray(st)}function f(st,at,W,bt){let ft=bt.wireframe===!0,Ct=n[at.id];Ct===void 0&&(Ct={},n[at.id]=Ct);let pt=st.isInstancedMesh===!0?st.id:0,xt=Ct[pt];xt===void 0&&(xt={},Ct[pt]=xt);let Mt=xt[W.id];Mt===void 0&&(Mt={},xt[W.id]=Mt);let Ut=Mt[ft];return Ut===void 0&&(Ut=m(c()),Mt[ft]=Ut),Ut}function m(st){let at=[],W=[],bt=[];for(let ft=0;ft<e;ft++)at[ft]=0,W[ft]=0,bt[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:at,enabledAttributes:W,attributeDivisors:bt,object:st,attributes:{},index:null}}function x(st,at,W,bt){let ft=o.attributes,Ct=at.attributes,pt=0,xt=W.getAttributes();for(let Mt in xt)if(xt[Mt].location>=0){let Qt=ft[Mt],ne=Ct[Mt];if(ne===void 0&&(Mt==="instanceMatrix"&&st.instanceMatrix&&(ne=st.instanceMatrix),Mt==="instanceColor"&&st.instanceColor&&(ne=st.instanceColor)),Qt===void 0||Qt.attribute!==ne||ne&&Qt.data!==ne.data)return!0;pt++}return o.attributesNum!==pt||o.index!==bt}function y(st,at,W,bt){let ft={},Ct=at.attributes,pt=0,xt=W.getAttributes();for(let Mt in xt)if(xt[Mt].location>=0){let Qt=Ct[Mt];Qt===void 0&&(Mt==="instanceMatrix"&&st.instanceMatrix&&(Qt=st.instanceMatrix),Mt==="instanceColor"&&st.instanceColor&&(Qt=st.instanceColor));let ne={};ne.attribute=Qt,Qt&&Qt.data&&(ne.data=Qt.data),ft[Mt]=ne,pt++}o.attributes=ft,o.attributesNum=pt,o.index=bt}function b(){let st=o.newAttributes;for(let at=0,W=st.length;at<W;at++)st[at]=0}function p(st){_(st,0)}function _(st,at){let W=o.newAttributes,bt=o.enabledAttributes,ft=o.attributeDivisors;W[st]=1,bt[st]===0&&(i.enableVertexAttribArray(st),bt[st]=1),ft[st]!==at&&(i.vertexAttribDivisor(st,at),ft[st]=at)}function A(){let st=o.newAttributes,at=o.enabledAttributes;for(let W=0,bt=at.length;W<bt;W++)at[W]!==st[W]&&(i.disableVertexAttribArray(W),at[W]=0)}function P(st,at,W,bt,ft,Ct,pt){pt===!0?i.vertexAttribIPointer(st,at,W,ft,Ct):i.vertexAttribPointer(st,at,W,bt,ft,Ct)}function M(st,at,W,bt){b();let ft=bt.attributes,Ct=W.getAttributes(),pt=at.defaultAttributeValues;for(let xt in Ct){let Mt=Ct[xt];if(Mt.location>=0){let Ut=ft[xt];if(Ut===void 0&&(xt==="instanceMatrix"&&st.instanceMatrix&&(Ut=st.instanceMatrix),xt==="instanceColor"&&st.instanceColor&&(Ut=st.instanceColor)),Ut!==void 0){let Qt=Ut.normalized,ne=Ut.itemSize,_e=t.get(Ut);if(_e===void 0)continue;let et=_e.buffer,Zt=_e.type,le=_e.bytesPerElement,xe=Zt===i.INT||Zt===i.UNSIGNED_INT||Ut.gpuType===Rl;if(Ut.isInterleavedBufferAttribute){let te=Ut.data,fe=te.isInterleavedBuffer===!0?te.stride:te.itemSize,De=Ut.offset;if(te.isInstancedInterleavedBuffer||te.isInstancedBufferAttribute){for(let kt=0;kt<Mt.locationSize;kt++)_(Mt.location+kt,te.meshPerAttribute);st.isInstancedMesh!==!0&&bt._maxInstanceCount===void 0&&(bt._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let kt=0;kt<Mt.locationSize;kt++)p(Mt.location+kt);i.bindBuffer(i.ARRAY_BUFFER,et);for(let kt=0;kt<Mt.locationSize;kt++)P(Mt.location+kt,ne/Mt.locationSize,Zt,Qt,fe*le,(De+ne/Mt.locationSize*kt)*le,xe)}else{if(Ut.isInstancedBufferAttribute){for(let te=0;te<Mt.locationSize;te++)_(Mt.location+te,Ut.meshPerAttribute);st.isInstancedMesh!==!0&&bt._maxInstanceCount===void 0&&(bt._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let te=0;te<Mt.locationSize;te++)p(Mt.location+te);i.bindBuffer(i.ARRAY_BUFFER,et);for(let te=0;te<Mt.locationSize;te++)P(Mt.location+te,ne/Mt.locationSize,Zt,Qt,ne*le,ne/Mt.locationSize*te*le,xe)}}else if(pt!==void 0){let Qt=pt[xt];if(Qt!==void 0)switch(Qt.length){case 2:i.vertexAttrib2fv(Mt.location,Qt);break;case 3:i.vertexAttrib3fv(Mt.location,Qt);break;case 4:i.vertexAttrib4fv(Mt.location,Qt);break;default:i.vertexAttrib1fv(Mt.location,Qt)}}}}A()}function N(){G();for(let st in n){let at=n[st];for(let W in at){let bt=at[W];for(let ft in bt){let Ct=bt[ft];for(let pt in Ct)d(Ct[pt].object),delete Ct[pt];delete bt[ft]}}delete n[st]}}function R(st){if(n[st.id]===void 0)return;let at=n[st.id];for(let W in at){let bt=at[W];for(let ft in bt){let Ct=bt[ft];for(let pt in Ct)d(Ct[pt].object),delete Ct[pt];delete bt[ft]}}delete n[st.id]}function v(st){for(let at in n){let W=n[at];for(let bt in W){let ft=W[bt];if(ft[st.id]===void 0)continue;let Ct=ft[st.id];for(let pt in Ct)d(Ct[pt].object),delete Ct[pt];delete ft[st.id]}}}function C(st){for(let at in n){let W=n[at],bt=st.isInstancedMesh===!0?st.id:0,ft=W[bt];if(ft!==void 0){for(let Ct in ft){let pt=ft[Ct];for(let xt in pt)d(pt[xt].object),delete pt[xt];delete ft[Ct]}delete W[bt],Object.keys(W).length===0&&delete n[at]}}}function G(){B(),r=!0,o!==s&&(o=s,h(o.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:G,resetDefaultState:B,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfObject:C,releaseStatesOfProgram:v,initAttributes:b,enableAttribute:p,disableUnusedAttributes:A}}function cx(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let m=0;for(let x=0;x<d;x++)m+=h[x];e.update(m,n,1)}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a}function hx(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(v){return!(v!==Yi&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let C=v===qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==wi&&v!==Bi&&!C&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",d=c(h);d!==h&&(Ge("WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Ge("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:m,reversedDepthBuffer:f,maxTextures:x,maxVertexTextures:y,maxTextureSize:b,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:A,maxVaryings:P,maxFragmentUniforms:M,maxSamples:N,samples:R}}function ux(i){let t=this,e=null,n=0,s=!1,o=!1,r=new Wi,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){let x=f.length!==0||m||n!==0||s;return s=m,n=f.length,x},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,m){e=d(f,m,0)},this.setState=function(f,m,x){let y=f.clippingPlanes,b=f.clipIntersection,p=f.clipShadows,_=i.get(f);if(!s||y===null||y.length===0||o&&!p)o?d(null):h();else{let A=o?0:n,P=A*4,M=_.clippingState||null;c.value=M,M=d(y,m,P,x);for(let N=0;N!==P;++N)M[N]=e[N];_.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=A}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,m,x,y){let b=f!==null?f.length:0,p=null;if(b!==0){if(p=c.value,y!==!0||p===null){let _=x+b*4,A=m.matrixWorldInverse;a.getNormalMatrix(A),(p===null||p.length<_)&&(p=new Float32Array(_));for(let P=0,M=x;P!==b;++P,M+=4)r.copy(f[P]).applyMatrix4(A,a),r.normal.toArray(p,M),p[M+3]=r.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,p}}var Ko=class extends Ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _o(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fe(5,5,5),o=new Ui({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ti,blending:$s});o.uniforms.tEquirect.value=e;let r=new Gt(s,o),a=e.minFilter;return e.minFilter===xs&&(e.minFilter=pi),new Ir(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}},af=256,dx=3,fx=20,Ff=256,Pf=16,px=3,mx=new J,gx=new Ve,mc=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ir(1,10,null),this._boxMesh=new Gt(new Fe(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,o={}){let{size:r=256,position:a=mx}=o,c=this._renderer;this._setSize(r);let h=this._allocateTarget(),d=this._getSourceTarget(!0);e>0&&(d.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,m=c.autoClearColor,x=c.autoClearDepth,y=c.autoClearStencil,b=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,b===null&&(t.background=c.getClearColor(gx));let p=new Ir(n,s,d);return p.position.copy(a),p.update(c,t),c.autoClear=f,c.autoClearColor=m,c.autoClearDepth=x,c.autoClearStencil=y,t.background=b,e>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(h,e)),this._applyPMREM(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(af,Zd(t))}_fromTexture(t,e){t.mapping===js||t.mapping===Dr?this._setSize(t.image.length===0?af:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=lf(t,!1,!1),n=Math.log2(t)-dx;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=lf(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,o=this._cubeCamera;s.material=n,o.renderTarget=t,o.activeMipmapLevel=e;let r=t.width>>e;t.viewport.set(0,0,r,r),o.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===js||t.mapping===Dr?(this._cubemapMaterial===null&&(this._cubemapMaterial=hf()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=cf()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=xx(),this._integrationMaterial=yx());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let o=this._integrationMaterial.uniforms;o.envMap.value=this._sourceTarget.texture,o.sourceLod.value=Math.log2(e/Pf);for(let r=0;r<=n;r++){let a=i.lodToRoughness(r,n);if(r>n-px)o.roughness.value=a,this._renderCube(t,r,this._integrationMaterial);else{let c=a>0?Math.log2(e)+.5*Math.log2(6/(Ff*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=_x());let n=this._blurMaterial,s=n.uniforms,o=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=o.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(o,0,n)}};function lf(i,t,e){return new Ko(i,{minFilter:xs,generateMipmaps:t,type:qi,colorSpace:ro,depthBuffer:e})}function jo(i,t,e){return new Ui({name:i,uniforms:t,vertexShader:nn.cube_vert,fragmentShader:e,side:ti,blending:$s,depthTest:!1,depthWrite:!1})}function xx(){return jo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ff}u

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
	`)}function yx(){return jo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Pf}},`

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
	`)}function _x(){return jo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${fx}
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
	`)}function cf(){return jo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function hf(){return jo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureLod( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ), 0.0 ).rgb, 1.0 );

		}
	`)}function vx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(m,x=!1){return m==null?null:x?r(m):o(m)}function o(m){if(m&&m.isTexture){let x=m.mapping;if(x===El||x===Tl)if(t.has(m)){let y=t.get(m).texture;return a(y,m.mapping)}else{let y=m.image;if(y&&y.height>0){let b=new Ko(y.height);return b.fromEquirectangularTexture(i,m),t.set(m,b),m.addEventListener("dispose",h),a(b.texture,m.mapping)}else return null}}return m}function r(m){if(m&&m.isTexture&&m.isPMREMTexture!==!0){let x=m.mapping,y=x===El||x===Tl,b=x===js||x===Dr;if(y||b){let p=e.get(m),_=p!==void 0?p.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==_)return n===null&&(n=new mc(i)),p=y?n.fromEquirectangular(m,p):n.fromCubemap(m,p),p.texture.pmremVersion=m.pmremVersion,e.set(m,p),p.texture;if(p!==void 0)return p.texture;{let A=m.image;return y&&A&&A.height>0||b&&A&&c(A)?(n===null&&(n=new mc(i)),p=y?n.fromEquirectangular(m):n.fromCubemap(m),p.texture.pmremVersion=m.pmremVersion,e.set(m,p),m.addEventListener("dispose",d),p.texture):null}}}return m}function a(m,x){return x===El?m.mapping=js:x===Tl&&(m.mapping=Dr),m}function c(m){let x=0,y=6;for(let b=0;b<y;b++)m[b]!==void 0&&x++;return x===y}function h(m){let x=m.target;x.removeEventListener("dispose",h);let y=t.get(x);y!==void 0&&(t.delete(x),y.dispose())}function d(m){let x=m.target;x.removeEventListener("dispose",d);let y=e.get(x);y!==void 0&&(e.delete(x),y.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Mx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&eo("WebGLRenderer: "+n+" extension not supported."),s}}}function wx(i,t,e,n){let s={},o=new WeakMap,r=new FinalizationRegistry(y=>delete s[y]);function a(y){c(y.target)}function c(y){y.index!==null&&t.remove(y.index);for(let p in y.attributes)t.remove(y.attributes[p]);y.removeEventListener("dispose",a),delete s[y.id],r.unregister(y);let b=o.get(y);b&&(t.remove(b),o.delete(y)),n.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,e.memory.geometries--}function h(y,b){return s[b.id]!==void 0||(b.addEventListener("dispose",a),s[b.id]=new WeakRef(b),r.register(b,b.id,b),e.memory.geometries++),b}function d(y){let b=y.attributes;for(let p in b)t.update(b[p],i.ARRAY_BUFFER)}function f(y){let b=y.index,p=y.attributes.position,_=0;if(p===void 0)return;let A=b!==null?b.count:p.count-1,P=p.count>=65535?mo:po,M=new P(Math.ceil(A/3)*6,1),N=M.array;if(b!==null){let v=b.array;_=b.version;for(let C=0,G=0;C<A;C+=3){let B=v[C+0],st=v[C+1],at=v[C+2];N[G++]=B,N[G++]=st,N[G++]=st,N[G++]=at,N[G++]=at,N[G++]=B}}else{_=p.version;for(let v=0,C=0;v<A;v+=3){let G=v+0,B=v+1,st=v+2;N[C++]=G,N[C++]=B,N[C++]=B,N[C++]=st,N[C++]=st,N[C++]=G}}M.version=_;let R=o.get(y);R&&t.remove(R),o.set(y,M)}function m(y){let b=o.get(y);if(b){let p=y.index;p!==null&&b.version<p.version&&f(y)}else f(y);return o.get(y)}function x(){for(let y in s){let b=s[y].deref();b!==void 0&&c(b)}}return{get:h,update:d,getWireframeAttribute:m,dispose:x}}function Sx(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function c(f,m){i.drawElements(n,m,o,f*r),e.update(m,n,1)}function h(f,m,x){x!==0&&(i.drawElementsInstanced(n,m,o,f*r,x),e.update(m,n,x))}function d(f,m,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,o,f,0,x);let b=0;for(let p=0;p<x;p++)b+=m[p];e.update(b,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function bx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:Ye("WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ax(i,t,e){let n=new WeakMap,s=new Sn;function o(r,a,c){let h=r.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0,m=n.get(a);if(m===void 0||m.count!==f){let G=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",G)};m!==void 0&&m.texture.dispose();let x=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],P=0;x===!0&&(P=1),y===!0&&(P=2),b===!0&&(P=3);let M=a.attributes.position.count*P,N=1;M>t.maxTextureSize&&(N=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let R=new Float32Array(M*N*4*f),v=new co(R,M,N,f);v.type=Bi,v.needsUpdate=!0;let C=P*4;for(let B=0;B<f;B++){let st=p[B],at=_[B],W=A[B],bt=M*N*4*B;for(let ft=0;ft<st.count;ft++){let Ct=ft*C;x===!0&&(s.fromBufferAttribute(st,ft),R[bt+Ct+0]=s.x,R[bt+Ct+1]=s.y,R[bt+Ct+2]=s.z,R[bt+Ct+3]=0),y===!0&&(s.fromBufferAttribute(at,ft),R[bt+Ct+4]=s.x,R[bt+Ct+5]=s.y,R[bt+Ct+6]=s.z,R[bt+Ct+7]=0),b===!0&&(s.fromBufferAttribute(W,ft),R[bt+Ct+8]=s.x,R[bt+Ct+9]=s.y,R[bt+Ct+10]=s.z,R[bt+Ct+11]=W.itemSize===4?s.w:1)}}m={count:f,texture:v,size:new Ot(M,N)},n.set(a,m),a.addEventListener("dispose",G)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let x=0;for(let b=0;b<h.length;b++)x+=h[b];let y=a.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:o}}function Ex(i,t,e,n,s){let o=new WeakMap;function r(h){let d=s.render.frame,f=h.geometry,m=t.get(h,f);if(o.get(m)!==d&&(t.update(m),o.set(m,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),o.get(h)!==d&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),o.set(h,d))),h.isSkinnedMesh){let x=h.skeleton;o.get(x)!==d&&(x.update(),o.set(x,d))}return m}function a(){o=new WeakMap}function c(h){let d=h.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:r,dispose:a}}var Tx={[Sh]:"LINEAR_TONE_MAPPING",[bh]:"REINHARD_TONE_MAPPING",[Ah]:"CINEON_TONE_MAPPING",[ko]:"ACES_FILMIC_TONE_MAPPING",[Th]:"AGX_TONE_MAPPING",[Ch]:"NEUTRAL_TONE_MAPPING",[Eh]:"CUSTOM_TONE_MAPPING"};function Cx(i,t,e,n,s,o){let r=new Ei(t,e,{type:i,depthBuffer:s,stencilBuffer:o,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,h=null,d=new tn;d.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Je([0,2,0,0,2,0],2));let f=new cl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Gt(d,f),x=new Uo(-1,1,1,-1,0,1),y=null,b=null,p=!1,_,A=null,P=[],M=!1;this.setSize=function(N,R){r.setSize(N,R),a!==null&&a.setSize(N,R),c!==null&&c.setSize(N,R);for(let v=0;v<P.length;v++){let C=P[v];C.setSize&&C.setSize(N,R)}},this.setEffects=function(N){P=N,M=P.length>0&&P[0].isRenderPass===!0;let R=r.width,v=r.height;P.length>0&&a===null&&(a=new Ei(R,v,{type:qi,depthBuffer:!1,stencilBuffer:!1}),c=new Ei(R,v,{type:qi,depthBuffer:!1,stencilBuffer:!1}));let C=s===!0&&P.some(G=>G.needsDepthTexture===!0);C!==(r.depthTexture!==null)&&(C===!0&&h===null&&(h=new ms(R,v),o===!0&&(h.format=ys,h.type=Qs)),r.dispose(),r.depthTexture=C?h:null,r.resolveDepthBuffer=C,r.storeMultisampledDepthBuffer=C);for(let G=0;G<P.length;G++){let B=P[G];B.setSize&&B.setSize(R,v),C&&B.needsDepthTexture===!0&&B.setDepthTexture&&B.setDepthTexture(h)}},this.begin=function(N,R){if(p||N.toneMapping===ns&&P.length===0)return!1;if(A=R,R!==null){let v=R.width,C=R.height;(r.width!==v||r.height!==C)&&this.setSize(v,C)}return M===!1&&N.setRenderTarget(r),_=N.toneMapping,N.toneMapping=ns,!0},this.hasRenderPass=function(){return M},this.end=function(N,R){N.toneMapping=_,p=!0;let v=r,C=a;for(let G=0;G<P.length;G++){let B=P[G];B.enabled!==!1&&(B.render(N,C,v,R),B.needsSwap!==!1&&(v=C,C=C===a?c:a))}if(y!==N.outputColorSpace||b!==N.toneMapping){y=N.outputColorSpace,b=N.toneMapping,f.defines={},cn.getTransfer(y)===gn&&(f.defines.SRGB_TRANSFER="");let G=Tx[b];G&&(f.defines[G]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=v.texture,N.setRenderTarget(A),N.render(m,x),A=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),d.dispose(),f.dispose()}}var If=new mi,zf=new ms(1,1),Lf=new Mo(1),Df=new co,Nf=new ja,Uf=new _o,uf=[],df=[],ff=new Float32Array(16),pf=new Float32Array(9),mf=new Float32Array(4);function Br(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,o=uf[s];if(o===void 0&&(o=new Float32Array(s),uf[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function qn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Yn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xc(i,t){let e=df[t];e===void 0&&(e=new Int32Array(t),df[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Rx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Fx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qn(e,t))return;i.uniform2fv(this.addr,t),Yn(e,t)}}function Px(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qn(e,t))return;i.uniform3fv(this.addr,t),Yn(e,t)}}function Ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qn(e,t))return;i.uniform4fv(this.addr,t),Yn(e,t)}}function zx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Yn(e,t)}else{if(qn(e,n))return;mf.set(n),i.uniformMatrix2fv(this.addr,!1,mf),Yn(e,n)}}function Lx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Yn(e,t)}else{if(qn(e,n))return;pf.set(n),i.uniformMatrix3fv(this.addr,!1,pf),Yn(e,n)}}function Dx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(qn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Yn(e,t)}else{if(qn(e,n))return;ff.set(n),i.uniformMatrix4fv(this.addr,!1,ff),Yn(e,n)}}function Nx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qn(e,t))return;i.uniform2iv(this.addr,t),Yn(e,t)}}function Bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qn(e,t))return;i.uniform3iv(this.addr,t),Yn(e,t)}}function Ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qn(e,t))return;i.uniform4iv(this.addr,t),Yn(e,t)}}function kx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qn(e,t))return;i.uniform2uiv(this.addr,t),Yn(e,t)}}function Hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qn(e,t))return;i.uniform3uiv(this.addr,t),Yn(e,t)}}function Gx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qn(e,t))return;i.uniform4uiv(this.addr,t),Yn(e,t)}}function yc(i){return i.version===0&&(i.compareFunction=Bh,i.needsUpdate=!0),i}function Wx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?o=yc(zf):o=If,e.setTexture2D(t||o,s)}function Xx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nf,s)}function qx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_CUBE_SHADOW?o=yc(Lf):o=Uf,e.setTextureCube(t||o,s)}function Yx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Df,s)}function Zx(i){switch(i){case 5126:return Rx;case 35664:return Fx;case 35665:return Px;case 35666:return Ix;case 35674:return zx;case 35675:return Lx;case 35676:return Dx;case 5124:case 35670:return Nx;case 35667:case 35671:return Ux;case 35668:case 35672:return Bx;case 35669:case 35673:return Ox;case 5125:return kx;case 36294:return Vx;case 36295:return Hx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return qx;case 36289:case 36303:case 36311:case 36292:return Yx}}function Jx(i,t){i.uniform1fv(this.addr,t)}function $x(i,t){let e=Br(t,this.size,2);i.uniform2fv(this.addr,e)}function Kx(i,t){let e=Br(t,this.size,3);i.uniform3fv(this.addr,e)}function jx(i,t){let e=Br(t,this.size,4);i.uniform4fv(this.addr,e)}function Qx(i,t){let e=Br(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function t1(i,t){let e=Br(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function e1(i,t){let e=Br(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function n1(i,t){i.uniform1iv(this.addr,t)}function i1(i,t){i.uniform2iv(this.addr,t)}function s1(i,t){i.uniform3iv(this.addr,t)}function r1(i,t){i.uniform4iv(this.addr,t)}function o1(i,t){i.uniform1uiv(this.addr,t)}function a1(i,t){i.uniform2uiv(this.addr,t)}function l1(i,t){i.uniform3uiv(this.addr,t)}function c1(i,t){i.uniform4uiv(this.addr,t)}function h1(i,t,e){let n=this.cache,s=t.length,o=xc(e,s);qn(n,o)||(i.uniform1iv(this.addr,o),Yn(n,o));let r;this.type===i.SAMPLER_2D_SHADOW?r=yc(zf):r=If;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||r,o[a])}function u1(i,t,e){let n=this.cache,s=t.length,o=xc(e,s);qn(n,o)||(i.uniform1iv(this.addr,o),Yn(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Nf,o[r])}function d1(i,t,e){let n=this.cache,s=t.length,o=xc(e,s);qn(n,o)||(i.uniform1iv(this.addr,o),Yn(n,o));let r;this.type===i.SAMPLER_CUBE_SHADOW?r=yc(Lf):r=Uf;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||r,o[a])}function f1(i,t,e){let n=this.cache,s=t.length,o=xc(e,s);qn(n,o)||(i.uniform1iv(this.addr,o),Yn(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Df,o[r])}function p1(i){switch(i){case 5126:return Jx;case 35664:return $x;case 35665:return Kx;case 35666:return jx;case 35674:return Qx;case 35675:return t1;case 35676:return e1;case 5124:case 35670:return n1;case 35667:case 35671:return i1;case 35668:case 35672:return s1;case 35669:case 35673:return r1;case 5125:return o1;case 36294:return a1;case 36295:return l1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return h1;case 35679:case 36299:case 36307:return u1;case 35680:case 36300:case 36308:case 36293:return d1;case 36289:case 36303:case 36311:case 36292:return f1}}var Qh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zx(e.type)}},tu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=p1(e.type)}},eu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let o=0,r=s.length;o!==r;++o){let a=s[o];a.setValue(t,e[a.id],n)}}},Kh=/(\w+)(\])?(\[|\.)?/g;function gf(i,t){i.seq.push(t),i.map[t.id]=t}function m1(i,t,e){let n=i.name,s=n.length;for(Kh.lastIndex=0;;){let o=Kh.exec(n),r=Kh.lastIndex,a=o[1],c=o[2]==="]",h=o[3];if(c&&(a=a|0),h===void 0||h==="["&&r+2===s){gf(e,h===void 0?new Qh(a,i,t):new tu(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new eu(a),gf(e,f)),e=f}}}var Ur=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),c=t.getUniformLocation(e,a.name);m1(a,c,this)}let s=[],o=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):o.push(r);s.length>0&&(this.seq=s.concat(o))}setValue(t,e,n,s){let o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){let a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,o=t.length;s!==o;++s){let r=t[s];r.id in e&&n.push(r)}return n}};function xf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var g1=37297,x1=0;function y1(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){let a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}var yf=new $e;function _1(i){cn._getMatrix(yf,cn.workingColorSpace,i);let t=`mat3( ${yf.elements.map(e=>e.toFixed(4))} )`;switch(cn.getTransfer(i)){case oo:return[t,"LinearTransferOETF"];case gn:return[t,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function _f(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";let r=/ERROR: 0:(\d+)/.exec(o);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+o+`

`+y1(i.getShaderSource(t),a)}else return o}function v1(i,t){let e=_1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var M1={[Sh]:"Linear",[bh]:"Reinhard",[Ah]:"Cineon",[ko]:"ACESFilmic",[Th]:"AgX",[Ch]:"Neutral",[Eh]:"Custom"};function w1(i,t){let e=M1[t];return e===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var pc=new J;function S1(){cn.getLuminanceCoefficients(pc);let i=pc.x.toFixed(4),t=pc.y.toFixed(4),e=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function A1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function E1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let o=i.getActiveAttrib(t,s),r=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function $o(i){return i!==""}function vf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Mf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var T1=/^[ \t]*#include +<([\w\d./]+)>/gm;function nu(i){return i.replace(T1,C1)}function C1(i,t){let e=nn[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return nu(e)}var R1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wf(i){return i.replace(R1,F1)}function F1(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Sf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var P1={[Js]:"SHADOWMAP_TYPE_PCF",[zr]:"SHADOWMAP_TYPE_VSM"};function I1(i){return P1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var z1={[Dr]:"ENVMAP_MODE_REFRACTION"};function L1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":z1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var D1={[Oo]:"ENVMAP_BLENDING_MULTIPLY",[zd]:"ENVMAP_BLENDING_MIX",[Ld]:"ENVMAP_BLENDING_ADD"};function N1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":D1[i.combine]||"ENVMAP_BLENDING_NONE"}function U1(i,t,e,n){let s=i.getContext(),o=e.defines,r=e.vertexShader,a=e.fragmentShader,c=I1(e),h=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=L1(e),f=N1(e),m=b1(e),x=A1(o),y=s.createProgram(),b,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(b=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter($o).join(`
`),b.length>0&&(b+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter($o).join(`
`),p.length>0&&(p+=`
`)):(b=[Sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),p=[Sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ns?"#define TONE_MAPPING":"",e.toneMapping!==ns?nn.tonemapping_pars_fragment:"",e.toneMapping!==ns?w1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",nn.colorspace_pars_fragment,v1("linearToOutputTexel",e.outputColorSpace),S1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($o).join(`
`)),r=nu(r),r=vf(r,e),r=Mf(r,e),a=nu(a),a=vf(a,e),a=Mf(a,e),r=wf(r),a=wf(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,b=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,p=["#define varying in",e.glslVersion===kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=_+b+r,P=_+p+a,M=xf(s,s.VERTEX_SHADER,A),N=xf(s,s.FRAGMENT_SHADER,P);s.attachShader(y,M),s.attachShader(y,N),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(B){if(i.debug.checkShaderErrors){let st=s.getProgramInfoLog(y)||"",at=s.getShaderInfoLog(M)||"",W=s.getShaderInfoLog(N)||"",bt=st.trim(),ft=at.trim(),Ct=W.trim(),pt=!0,xt=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(pt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,M,N);else{let Mt=_f(s,M,"vertex"),Ut=_f(s,N,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+bt+`
`+Mt+`
`+Ut)}else bt!==""?Ge("WebGLProgram: Program Info Log:",bt):(ft===""||Ct==="")&&(xt=!1);xt&&(B.diagnostics={runnable:pt,programLog:bt,vertexShader:{log:ft,prefix:b},fragmentShader:{log:Ct,prefix:p}})}s.deleteShader(M),s.deleteShader(N),v=new Ur(s,y),C=E1(s,y)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let C;this.getAttributes=function(){return C===void 0&&R(this),C};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(y,g1)),G},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=x1++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=N,this}var B1=0,iu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new su(t),e.set(t,n)),n}},su=class{constructor(t){this.id=B1++,this.code=t,this.usedTimes=0}};function O1(i){return i===Ds||i===qo||i===Yo}function k1(i,t,e,n,s,o){let r=new ho,a=new iu,c=new Set,h=[],d=new Map,f=n.logarithmicDepthBuffer,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function y(v,C,G,B,st,at){let W=B.fog,bt=st.geometry,ft=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?B.environment:null,Ct=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,pt=t.get(v.envMap||ft,Ct),xt=m[v.type],Mt=n.precision;v.precision!==null&&(Mt=n.getMaxPrecision(v.precision),Mt!==v.precision&&Ge("WebGLProgram.getParameters:",v.precision,"not supported, using",Mt,"instead."));let Ut=bt.morphAttributes.position||bt.morphAttributes.normal||bt.morphAttributes.color,Qt=Ut!==void 0?Ut.length:0,ne=0;bt.morphAttributes.position!==void 0&&(ne=1),bt.morphAttributes.normal!==void 0&&(ne=2),bt.morphAttributes.color!==void 0&&(ne=3);let _e,et,Zt,le;if(xt){let he=ss[xt];_e=he.vertexShader,et=he.fragmentShader}else{_e=v.vertexShader,et=v.fragmentShader;let he=a.getVertexShaderStage(v),Ne=a.getFragmentShaderStage(v);a.update(v,he,Ne),Zt=he.id,le=Ne.id}let xe=i.getRenderTarget(),te=i.state.buffers.depth.getReversed(),fe=st.isInstancedMesh===!0,De=st.isBatchedMesh===!0,kt=!!v.map,k=!!v.matcap,vt=!!pt,K=vt&&pt.isPMREMTexture===!0,ht=!!v.aoMap,X=!!v.lightMap,mt=!!v.bumpMap&&v.wireframe===!1,rt=!!v.normalMap,gt=!!v.displacementMap,St=!!v.emissiveMap,Lt=!!v.metalnessMap,It=!!v.roughnessMap,ce=v.anisotropy>0,tt=v.clearcoat>0,we=v.diffuseRoughness>0,ot=v.dispersion>0,ct=v.retroreflectivity>0,j=v.iridescence>0,ie=v.sheen>0,qt=v.transmission>0,Jt=ce&&!!v.anisotropyMap,l=tt&&!!v.clearcoatMap,u=tt&&!!v.clearcoatNormalMap,T=tt&&!!v.clearcoatRoughnessMap,I=we&&!!v.diffuseRoughnessMap,H=j&&!!v.iridescenceMap,it=j&&!!v.iridescenceThicknessMap,Q=ie&&!!v.sheenColorMap,wt=ie&&!!v.sheenRoughnessMap,Tt=!!v.specularMap,jt=!!v.specularColorMap,re=!!v.specularIntensityMap,Y=qt&&!!v.transmissionMap,lt=qt&&!!v.thicknessMap,Ht=!!v.gradientMap,Yt=!!v.alphaMap,dt=v.alphaTest>0,se=!!v.alphaHash,Me=!!v.extensions,oe=ns;v.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(oe=i.toneMapping);let ke=K?pt.isCompressedCubeTexture?pt.image[0].mipmaps:pt.mipmaps:null,Te={shaderID:xt,shaderType:v.type,shaderName:v.name,vertexShader:_e,fragmentShader:et,defines:v.defines,customVertexShaderID:Zt,customFragmentShaderID:le,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:Mt,batching:De,batchingColor:De&&st._colorsTexture!==null,instancing:fe,instancingColor:fe&&st.instanceColor!==null,instancingMorph:fe&&st.morphTexture!==null,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:cn.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:kt,matcap:k,envMap:vt,envMapMode:vt&&pt.mapping,envMapPMREM:K,envMapMaxLod:K?ke.length-1:null,envMapSize:K?ke[0].width:null,aoMap:ht,lightMap:X,bumpMap:mt,normalMap:rt,displacementMap:gt,emissiveMap:St,normalMapObjectSpace:rt&&v.normalMapType===Ud,normalMapTangentSpace:rt&&v.normalMapType===Zo,packedNormalMap:rt&&v.normalMapType===Zo&&O1(v.normalMap.format),metalnessMap:Lt,roughnessMap:It,anisotropy:ce,anisotropyMap:Jt,clearcoat:tt,clearcoatMap:l,clearcoatNormalMap:u,clearcoatRoughnessMap:T,diffuseRoughness:we,diffuseRoughnessMap:I,dispersion:ot,retroreflection:ct,iridescence:j,iridescenceMap:H,iridescenceThicknessMap:it,sheen:ie,sheenColorMap:Q,sheenRoughnessMap:wt,specularMap:Tt,specularColorMap:jt,specularIntensityMap:re,transmission:qt,transmissionMap:Y,thicknessMap:lt,gradientMap:Ht,opaque:v.transparent===!1&&v.blending===Lr&&v.alphaToCoverage===!1,alphaMap:Yt,alphaTest:dt,alphaHash:se,combine:v.combine,mapUv:kt&&x(v.map.channel),aoMapUv:ht&&x(v.aoMap.channel),lightMapUv:X&&x(v.lightMap.channel),bumpMapUv:mt&&x(v.bumpMap.channel),normalMapUv:rt&&x(v.normalMap.channel),displacementMapUv:gt&&x(v.displacementMap.channel),emissiveMapUv:St&&x(v.emissiveMap.channel),metalnessMapUv:Lt&&x(v.metalnessMap.channel),roughnessMapUv:It&&x(v.roughnessMap.channel),anisotropyMapUv:Jt&&x(v.anisotropyMap.channel),clearcoatMapUv:l&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:u&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:T&&x(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:I&&x(v.diffuseRoughnessMap.channel),iridescenceMapUv:H&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:it&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:wt&&x(v.sheenRoughnessMap.channel),specularMapUv:Tt&&x(v.specularMap.channel),specularColorMapUv:jt&&x(v.specularColorMap.channel),specularIntensityMapUv:re&&x(v.specularIntensityMap.channel),transmissionMapUv:Y&&x(v.transmissionMap.channel),thicknessMapUv:lt&&x(v.thicknessMap.channel),alphaMapUv:Yt&&x(v.alphaMap.channel),vertexTangents:!!bt.attributes.tangent&&(rt||ce),vertexNormals:!!bt.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!bt.attributes.color&&bt.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!bt.attributes.uv&&(kt||Yt),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||bt.attributes.normal===void 0&&rt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:te,skinning:st.isSkinnedMesh===!0,hasPositionAttribute:bt.attributes.position!==void 0,morphTargets:bt.morphAttributes.position!==void 0,morphNormals:bt.morphAttributes.normal!==void 0,morphColors:bt.morphAttributes.color!==void 0,morphTargetsCount:Qt,morphTextureStride:ne,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbeGrids:at.filter(he=>he.texture!==null).length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:kt&&v.map.isVideoTexture===!0&&cn.getTransfer(v.map.colorSpace)===gn,decodeVideoTextureEmissive:St&&v.emissiveMap.isVideoTexture===!0&&cn.getTransfer(v.emissiveMap.colorSpace)===gn,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===We,flipSided:v.side===ti,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Me&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&v.extensions.multiDraw===!0||De)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function b(v){let C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(let G in v.defines)C.push(G),C.push(v.defines[G]);return v.isRawShaderMaterial===!1&&(p(C,v),_(C,v),C.push(i.outputColorSpace)),C.push(v.customProgramCacheKey),C.join()}function p(v,C){v.push(C.precision),v.push(C.outputColorSpace),v.push(C.envMapMode),v.push(C.envMapPMREM),v.push(C.envMapMaxLod),v.push(C.envMapSize),v.push(C.mapUv),v.push(C.alphaMapUv),v.push(C.lightMapUv),v.push(C.aoMapUv),v.push(C.bumpMapUv),v.push(C.normalMapUv),v.push(C.displacementMapUv),v.push(C.emissiveMapUv),v.push(C.metalnessMapUv),v.push(C.roughnessMapUv),v.push(C.anisotropyMapUv),v.push(C.clearcoatMapUv),v.push(C.clearcoatNormalMapUv),v.push(C.clearcoatRoughnessMapUv),v.push(C.diffuseRoughnessMapUv),v.push(C.iridescenceMapUv),v.push(C.iridescenceThicknessMapUv),v.push(C.sheenColorMapUv),v.push(C.sheenRoughnessMapUv),v.push(C.specularMapUv),v.push(C.specularColorMapUv),v.push(C.specularIntensityMapUv),v.push(C.transmissionMapUv),v.push(C.thicknessMapUv),v.push(C.combine),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.numSunLights),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numSunLightShadows),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.numLightProbeGrids),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function _(v,C){r.disableAll(),C.instancing&&r.enable(0),C.instancingColor&&r.enable(1),C.instancingMorph&&r.enable(2),C.matcap&&r.enable(3),C.envMap&&r.enable(4),C.normalMapObjectSpace&&r.enable(5),C.normalMapTangentSpace&&r.enable(6),C.clearcoat&&r.enable(7),C.iridescence&&r.enable(8),C.alphaTest&&r.enable(9),C.vertexColors&&r.enable(10),C.vertexAlphas&&r.enable(11),C.vertexUv1s&&r.enable(12),C.vertexUv2s&&r.enable(13),C.vertexUv3s&&r.enable(14),C.vertexTangents&&r.enable(15),C.anisotropy&&r.enable(16),C.alphaHash&&r.enable(17),C.batching&&r.enable(18),C.dispersion&&r.enable(19),C.retroreflection&&r.enable(24),C.diffuseRoughness&&r.enable(25),C.batchingColor&&r.enable(20),C.gradientMap&&r.enable(21),C.packedNormalMap&&r.enable(22),C.vertexNormals&&r.enable(23),v.push(r.mask),r.disableAll(),C.fog&&r.enable(0),C.useFog&&r.enable(1),C.flatShading&&r.enable(2),C.logarithmicDepthBuffer&&r.enable(3),C.reversedDepthBuffer&&r.enable(4),C.skinning&&r.enable(5),C.morphTargets&&r.enable(6),C.morphNormals&&r.enable(7),C.morphColors&&r.enable(8),C.premultipliedAlpha&&r.enable(9),C.shadowMapEnabled&&r.enable(10),C.doubleSided&&r.enable(11),C.flipSided&&r.enable(12),C.useDepthPacking&&r.enable(13),C.dithering&&r.enable(14),C.transmission&&r.enable(15),C.sheen&&r.enable(16),C.opaque&&r.enable(17),C.pointsUvs&&r.enable(18),C.decodeVideoTexture&&r.enable(19),C.decodeVideoTextureEmissive&&r.enable(20),C.alphaToCoverage&&r.enable(21),C.numLightProbeGrids>0&&r.enable(22),C.hasPositionAttribute&&r.enable(23),v.push(r.mask)}function A(v){let C=m[v.type],G;if(C){let B=ss[C];G=sf.clone(B.uniforms)}else G=v.uniforms;return G}function P(v,C){let G=d.get(C);return G!==void 0?++G.usedTimes:(G=new U1(i,C,v,s),h.push(G),d.set(C,G)),G}function M(v){if(--v.usedTimes===0){let C=h.indexOf(v);h[C]=h[h.length-1],h.pop(),d.delete(v.cacheKey),v.destroy()}}function N(v){a.remove(v)}function R(){a.dispose()}return{getParameters:y,getProgramCacheKey:b,getUniforms:A,acquireProgram:P,releaseProgram:M,releaseShaderCache:N,programs:h,dispose:R}}function V1(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,c){i.get(r)[a]=c}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function H1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function bf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Af(){let i=[],t=0,e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(m){let x=0;return m.isInstancedMesh&&(x+=2),m.isSkinnedMesh&&(x+=1),x}function a(m,x,y,b,p,_){let A=i[t];return A===void 0?(A={id:m.id,object:m,geometry:x,material:y,materialVariant:r(m),groupOrder:b,renderOrder:m.renderOrder,z:p,group:_},i[t]=A):(A.id=m.id,A.object=m,A.geometry=x,A.material=y,A.materialVariant=r(m),A.groupOrder=b,A.renderOrder=m.renderOrder,A.z=p,A.group=_),t++,A}function c(m,x,y,b,p,_,A){A.reversedDepth===!0&&(p=-p);let P=a(m,x,y,b,p,_);y.transmission>0?n.push(P):y.transparent===!0?s.push(P):e.push(P)}function h(m,x,y,b,p,_){let A=a(m,x,y,b,p,_);y.transmission>0?n.unshift(A):y.transparent===!0?s.unshift(A):e.unshift(A)}function d(m,x){e.length>1&&e.sort(m||H1),n.length>1&&n.sort(x||bf),s.length>1&&s.sort(x||bf)}function f(){for(let m=t,x=i.length;m<x;m++){let y=i[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:c,unshift:h,finish:f,sort:d}}function G1(){let i=new WeakMap;function t(n,s){let o=i.get(n),r;return o===void 0?(r=new Af,i.set(n,[r])):s>=o.length?(r=new Af,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function W1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new J,color:new Ve};break;case"SpotLight":e={position:new J,direction:new J,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":e={color:new Ve,position:new J,halfWidth:new J,halfHeight:new J};break}return i[t.id]=e,e}}}function X1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var q1=0;function Y1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Z1(i){let t=new W1,e=X1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0},s=new J,o=new un,r=new un;function a(h){let d=0,f=0,m=0,x=0,y=0,b=0,p=0,_=0,A=0,P=0,M=0,N=0,R=0,v=0,C=0,G=0;h.sort(Y1);for(let st=0,at=h.length;st<at;st++){let W=h[st],bt=W.color,ft=W.intensity,Ct=W.distance,pt=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===Ds?pt=W.shadow.map.texture:pt=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)d+=bt.r*ft,f+=bt.g*ft,m+=bt.b*ft;else if(W.isSunLight){let xt=t.get(W);if(xt.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){let Mt=W.shadow,Ut=e.get(W);Ut.shadowIntensity=Mt.intensity,Ut.shadowBias=Mt.bias,Ut.shadowNormalBias=Mt.normalBias,Ut.shadowRadius=Mt.radius,Ut.shadowMapSize.copy(Mt.mapSize).multiply(Mt.getFrameExtents()),n.sunShadow[y]=Ut,n.sunShadowMap[y]=pt;let Qt=Mt.getViewportCount();for(let ne=0;ne<Qt;ne++)n.sunShadowMatrix[b+ne]=Mt.getMatrix(ne),n.sunShadowCascade[b+ne]=Mt._cascadeData[ne];b+=Qt,y++}n.sun[x]=xt,x++}else if(W.isDirectionalLight){let xt=t.get(W);if(xt.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){let Mt=W.shadow,Ut=e.get(W);Ut.shadowIntensity=Mt.intensity,Ut.shadowBias=Mt.bias,Ut.shadowNormalBias=Mt.normalBias,Ut.shadowRadius=Mt.radius,Ut.shadowMapSize=Mt.mapSize,n.directionalShadow[p]=Ut,n.directionalShadowMap[p]=pt,n.directionalShadowMatrix[p]=W.shadow.matrix,N++}n.directional[p]=xt,p++}else if(W.isSpotLight){let xt=t.get(W);xt.position.setFromMatrixPosition(W.matrixWorld),xt.color.copy(bt).multiplyScalar(ft),xt.distance=Ct,xt.coneCos=Math.cos(W.angle),xt.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),xt.decay=W.decay,n.spot[A]=xt;let Mt=W.shadow;if(W.map&&(n.spotLightMap[C]=W.map,C++,Mt.updateMatrices(W),W.castShadow&&G++),n.spotLightMatrix[A]=Mt.matrix,W.castShadow){let Ut=e.get(W);Ut.shadowIntensity=Mt.intensity,Ut.shadowBias=Mt.bias,Ut.shadowNormalBias=Mt.normalBias,Ut.shadowRadius=Mt.radius,Ut.shadowMapSize=Mt.mapSize,n.spotShadow[A]=Ut,n.spotShadowMap[A]=pt,v++}A++}else if(W.isRectAreaLight){let xt=t.get(W);xt.color.copy(bt).multiplyScalar(ft),xt.halfWidth.set(W.width*.5,0,0),xt.halfHeight.set(0,W.height*.5,0),n.rectArea[P]=xt,P++}else if(W.isPointLight){let xt=t.get(W);if(xt.color.copy(W.color).multiplyScalar(W.intensity),xt.distance=W.distance,xt.decay=W.decay,W.castShadow){let Mt=W.shadow,Ut=e.get(W);Ut.shadowIntensity=Mt.intensity,Ut.shadowBias=Mt.bias,Ut.shadowNormalBias=Mt.normalBias,Ut.shadowRadius=Mt.radius,Ut.shadowMapSize=Mt.mapSize,Ut.shadowCameraNear=Mt.camera.near,Ut.shadowCameraFar=Mt.camera.far,n.pointShadow[_]=Ut,n.pointShadowMap[_]=pt,n.pointShadowMatrix[_]=W.shadow.matrix,R++}n.point[_]=xt,_++}else if(W.isHemisphereLight){let xt=t.get(W);xt.skyColor.copy(W.color).multiplyScalar(ft),xt.groundColor.copy(W.groundColor).multiplyScalar(ft),n.hemi[M]=xt,M++}}P>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=m;let B=n.hash;(B.sunLength!==x||B.directionalLength!==p||B.pointLength!==_||B.spotLength!==A||B.rectAreaLength!==P||B.hemiLength!==M||B.numSunShadows!==y||B.numDirectionalShadows!==N||B.numPointShadows!==R||B.numSpotShadows!==v||B.numSpotMaps!==C)&&(n.sun.length=x,n.directional.length=p,n.spot.length=A,n.rectArea.length=P,n.point.length=_,n.hemi.length=M,n.sunShadow.length=y,n.sunShadowMap.length=y,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=N,n.directionalShadowMap.length=N,n.directionalShadowMatrix.length=N,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+C-G,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=G,B.sunLength=x,B.directionalLength=p,B.pointLength=_,B.spotLength=A,B.rectAreaLength=P,B.hemiLength=M,B.numSunShadows=y,B.numDirectionalShadows=N,B.numPointShadows=R,B.numSpotShadows=v,B.numSpotMaps=C,n.version=q1++)}function c(h,d){let f=0,m=0,x=0,y=0,b=0,p=0,_=d.matrixWorldInverse;for(let A=0,P=h.length;A<P;A++){let M=h[A];if(M.isSunLight){let N=n.sun[f];N.direction.setFromMatrixPosition(M.matrixWorld),N.direction.transformDirection(_),f++}else if(M.isDirectionalLight){let N=n.directional[m];N.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(_),m++}else if(M.isSpotLight){let N=n.spot[y];N.position.setFromMatrixPosition(M.matrixWorld),N.position.applyMatrix4(_),N.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),N.direction.sub(s),N.direction.transformDirection(_),y++}else if(M.isRectAreaLight){let N=n.rectArea[b];N.position.setFromMatrixPosition(M.matrixWorld),N.position.applyMatrix4(_),r.identity(),o.copy(M.matrixWorld),o.premultiply(_),r.extractRotation(o),N.halfWidth.set(M.width*.5,0,0),N.halfHeight.set(0,M.height*.5,0),N.halfWidth.applyMatrix4(r),N.halfHeight.applyMatrix4(r),b++}else if(M.isPointLight){let N=n.point[x];N.position.setFromMatrixPosition(M.matrixWorld),N.position.applyMatrix4(_),x++}else if(M.isHemisphereLight){let N=n.hemi[p];N.direction.setFromMatrixPosition(M.matrixWorld),N.direction.transformDirection(_),p++}}}return{setup:a,setupView:c,state:n}}function Ef(i){let t=new Z1(i),e=[],n=[],s=[];function o(f){d.camera=f,e.length=0,n.length=0,s.length=0}function r(f){f.isLightProbeGrid?s.push(f):e.push(f)}function a(f){n.push(f)}function c(){t.setup(e),s.sort((f,m)=>f.priority-m.priority||f.id-m.id)}function h(f){t.setupView(e,f)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:d,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:a}}function J1(i){let t=new WeakMap;function e(s,o=0){let r=t.get(s),a;return r===void 0?(a=new Ef(i),t.set(s,[a])):o>=r.length?(a=new Ef(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var $1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K1=`uniform sampler2D shadow_pass;
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
}`,j1=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],Q1=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Tf=new un,Jo=new J,jh=new J;function ty(i,t,e){let n=new Rs,s=new Ot,o=new Ot,r=new Sn,a=new hl,c=new ul,h={},d=e.maxTextureSize,f={[Ls]:ti,[ti]:Ls,[We]:We},m=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:$1,fragmentShader:K1}),x=m.clone();x.defines.HORIZONTAL_PASS=1;let y=new tn;y.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Gt(y,m),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Js;let _=this.type;this.render=function(R,v,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;this.type===pd&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Js);let G=i.getRenderTarget(),B=i.getActiveCubeFace(),st=i.getActiveMipmapLevel(),at=i.state;at.setBlending($s),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);let W=_!==this.type;W&&v.traverse(function(bt){bt.material&&(Array.isArray(bt.material)?bt.material.forEach(ft=>ft.needsUpdate=!0):bt.material.needsUpdate=!0)});for(let bt=0,ft=R.length;bt<ft;bt++){let Ct=R[bt],pt=Ct.shadow;if(pt===void 0){Ge("WebGLShadowMap:",Ct,"has no shadow.");continue}if(pt.autoUpdate===!1&&pt.needsUpdate===!1)continue;s.copy(pt.mapSize);let xt=pt.getFrameExtents();s.multiply(xt),o.copy(pt.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(o.x=Math.floor(d/xt.x),s.x=o.x*xt.x,pt.mapSize.x=o.x),s.y>d&&(o.y=Math.floor(d/xt.y),s.y=o.y*xt.y,pt.mapSize.y=o.y));let Mt=i.state.buffers.depth.getReversed();if(pt.camera._reversedDepth=Mt,pt.map===null||W===!0){if(pt.map!==null&&(pt.map.depthTexture!==null&&(pt.map.depthTexture.dispose(),pt.map.depthTexture=null),pt.map.dispose()),this.type===zr){if(Ct.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}pt.map=new Ei(s.x,s.y,{format:Ds,type:qi,minFilter:pi,magFilter:pi,generateMipmaps:!1}),pt.map.texture.name=Ct.name+".shadowMap",pt.map.depthTexture=new ms(s.x,s.y,Bi),pt.map.depthTexture.name=Ct.name+".shadowMapDepth",pt.map.depthTexture.format=fs,pt.map.depthTexture.compareFunction=null,pt.map.depthTexture.minFilter=Zn,pt.map.depthTexture.magFilter=Zn}else Ct.isPointLight?(pt.map=new Ko(s.x),pt.map.depthTexture=new Mo(s.x,Xi)):(pt.map=new Ei(s.x,s.y),pt.map.depthTexture=new ms(s.x,s.y,Xi)),pt.map.depthTexture.name=Ct.name+".shadowMap",pt.map.depthTexture.format=fs,this.type===Js?(pt.map.depthTexture.compareFunction=Mt?Uh:Nh,pt.map.depthTexture.minFilter=pi,pt.map.depthTexture.magFilter=pi):(pt.map.depthTexture.compareFunction=null,pt.map.depthTexture.minFilter=Zn,pt.map.depthTexture.magFilter=Zn);pt.camera.updateProjectionMatrix()}pt.map.isWebGLCubeRenderTarget!==!0&&(pt.map.width!==s.x||pt.map.height!==s.y)&&pt.map.setSize(s.x,s.y);let Ut=pt.map.isWebGLCubeRenderTarget?6:pt.getViewportCount();Ct.isPointLight!==!0&&pt.updateMatrices(Ct,C);let Qt=(pt.camera.layers.mask&4294967294)!==0?pt.camera.layers:C.layers;for(let ne=0;ne<Ut;ne++){let _e=pt.getCamera(ne);if(Ct.isPointLight){let et=pt.camera,Zt=pt.matrix,le=Ct.distance||et.far;le!==et.far&&(et.far=le,et.updateProjectionMatrix()),Jo.setFromMatrixPosition(Ct.matrixWorld),et.position.copy(Jo),jh.copy(et.position),jh.add(j1[ne]),et.up.copy(Q1[ne]),et.lookAt(jh),et.updateMatrixWorld(),Zt.makeTranslation(-Jo.x,-Jo.y,-Jo.z),Tf.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),pt._frustum.setFromProjectionMatrix(Tf,et.coordinateSystem,et.reversedDepth)}if(pt.map.isWebGLCubeRenderTarget)i.setRenderTarget(pt.map,ne),i.clear();else{ne===0&&(i.setRenderTarget(pt.map),i.clear());let et=pt.getViewport(ne);r.set(o.x*et.x,o.y*et.y,o.x*et.z,o.y*et.w),at.viewport(r)}n=pt.getFrustum(ne),M(v,C,_e,Ct,Qt,this.type)}pt.isPointLightShadow!==!0&&this.type===zr&&A(pt,C),pt.needsUpdate=!1}_=this.type,p.needsUpdate=!1,i.setRenderTarget(G,B,st)};function A(R,v){let C=t.update(b);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,x.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),R.mapPass===null?R.mapPass=new Ei(s.x,s.y,{format:Ds,type:qi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),m.uniforms.shadow_pass.value=R.map.depthTexture,m.uniforms.resolution.value.set(R.map.width,R.map.height),m.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(v,null,C,m,b,null),x.uniforms.shadow_pass.value=R.mapPass.texture,x.uniforms.resolution.value.set(R.map.width,R.map.height),x.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(v,null,C,x,b,null)}function P(R,v,C,G){let B=null,st=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(st!==void 0)B=st;else if(B=C.isPointLight===!0?c:a,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let at=B.uuid,W=v.uuid,bt=h[at];bt===void 0&&(bt={},h[at]=bt);let ft=bt[W];ft===void 0&&(ft=B.clone(),bt[W]=ft,v.addEventListener("dispose",N)),B=ft}if(B.visible=v.visible,B.wireframe=v.wireframe,G===zr?B.side=v.shadowSide!==null?v.shadowSide:v.side:B.side=v.shadowSide!==null?v.shadowSide:f[v.side],B.alphaMap=v.alphaMap,B.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,B.map=v.map,B.clipShadows=v.clipShadows,B.clippingPlanes=v.clippingPlanes,B.clipIntersection=v.clipIntersection,B.displacementMap=v.displacementMap,B.displacementScale=v.displacementScale,B.displacementBias=v.displacementBias,B.wireframeLinewidth=v.wireframeLinewidth,B.linewidth=v.linewidth,C.isPointLight===!0&&B.isMeshDistanceMaterial===!0){let at=i.properties.get(B);at.light=C}return B}function M(R,v,C,G,B,st){if(R.visible===!1)return;if(R.layers.test(B)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&st===zr)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);let bt=t.update(R),ft=R.material;if(Array.isArray(ft)){let Ct=bt.groups;for(let pt=0,xt=Ct.length;pt<xt;pt++){let Mt=Ct[pt],Ut=ft[Mt.materialIndex];if(Ut&&Ut.visible){let Qt=P(R,Ut,G,st);R.onBeforeShadow(i,R,v,C,bt,Qt,Mt),i.renderBufferDirect(C,null,bt,Qt,R,Mt),R.onAfterShadow(i,R,v,C,bt,Qt,Mt)}}}else if(ft.visible){let Ct=P(R,ft,G,st);R.onBeforeShadow(i,R,v,C,bt,Ct,null),i.renderBufferDirect(C,null,bt,Ct,R,null),R.onAfterShadow(i,R,v,C,bt,Ct,null)}}let W=R.children;for(let bt=0,ft=W.length;bt<ft;bt++)M(W[bt],v,C,G,B,st)}function N(R){R.target.removeEventListener("dispose",N);for(let C in h){let G=h[C],B=R.target.uuid;B in G&&(G[B].dispose(),delete G[B])}}}function ey(i,t){function e(){let Y=!1,lt=new Sn,Ht=null,Yt=new Sn(0,0,0,0);return{setMask:function(dt){Ht!==dt&&!Y&&(i.colorMask(dt,dt,dt,dt),Ht=dt)},setLocked:function(dt){Y=dt},setClear:function(dt,se,Me,oe,ke){ke===!0&&(dt*=oe,se*=oe,Me*=oe),lt.set(dt,se,Me,oe),Yt.equals(lt)===!1&&(i.clearColor(dt,se,Me,oe),Yt.copy(lt))},reset:function(){Y=!1,Ht=null,Yt.set(-1,0,0,0)}}}function n(){let Y=!1,lt=!1,Ht=null,Yt=null,dt=null;return{setReversed:function(se){if(lt!==se){let Me=t.get("EXT_clip_control");se?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),lt=se;let oe=dt;dt=null,this.setClear(oe)}},getReversed:function(){return lt},setTest:function(se){se?te(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(se){Ht!==se&&!Y&&(i.depthMask(se),Ht=se)},setFunc:function(se){if(lt&&(se=Yd[se]),Yt!==se){switch(se){case ka:i.depthFunc(i.NEVER);break;case Va:i.depthFunc(i.ALWAYS);break;case Ha:i.depthFunc(i.LESS);break;case Sr:i.depthFunc(i.LEQUAL);break;case Ga:i.depthFunc(i.EQUAL);break;case Wa:i.depthFunc(i.GEQUAL);break;case Xa:i.depthFunc(i.GREATER);break;case qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Yt=se}},setLocked:function(se){Y=se},setClear:function(se){dt!==se&&(dt=se,lt&&(se=1-se),i.clearDepth(se))},reset:function(){Y=!1,Ht=null,Yt=null,dt=null,lt=!1}}}function s(){let Y=!1,lt=null,Ht=null,Yt=null,dt=null,se=null,Me=null,oe=null,ke=null;return{setTest:function(Te){Y||(Te?te(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(Te){lt!==Te&&!Y&&(i.stencilMask(Te),lt=Te)},setFunc:function(Te,he,Ne){(Ht!==Te||Yt!==he||dt!==Ne)&&(i.stencilFunc(Te,he,Ne),Ht=Te,Yt=he,dt=Ne)},setOp:function(Te,he,Ne){(se!==Te||Me!==he||oe!==Ne)&&(i.stencilOp(Te,he,Ne),se=Te,Me=he,oe=Ne)},setLocked:function(Te){Y=Te},setClear:function(Te){ke!==Te&&(i.clearStencil(Te),ke=Te)},reset:function(){Y=!1,lt=null,Ht=null,Yt=null,dt=null,se=null,Me=null,oe=null,ke=null}}}let o=new e,r=new n,a=new s,c={},h=new WeakMap,d={},f={},m={},x=new WeakMap,y=[],b=null,p=!1,_=null,A=null,P=null,M=null,N=null,R=null,v=null,C=new Ve(0,0,0),G=0,B=!1,st=null,at=null,W=null,bt=null,ft=null,Ct=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),pt=!1,xt=0,Mt=i.getParameter(i.VERSION);Mt.indexOf("WebGL")!==-1?(xt=parseFloat(/^WebGL (\d)/.exec(Mt)[1]),pt=xt>=1):Mt.indexOf("OpenGL ES")!==-1&&(xt=parseFloat(/^OpenGL ES (\d)/.exec(Mt)[1]),pt=xt>=2);let Ut=null,Qt={},ne=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),et=new Sn().fromArray(ne),Zt=new Sn().fromArray(_e);function le(Y,lt,Ht,Yt){let dt=new Uint8Array(4),se=i.createTexture();i.bindTexture(Y,se),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Me=0;Me<Ht;Me++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,Yt,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(lt+Me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return se}let xe={};xe[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),te(i.DEPTH_TEST),r.setFunc(Sr),rt(!1),gt(yh),te(i.CULL_FACE),X($s);function te(Y){d[Y]!==!0&&(i.enable(Y),d[Y]=!0)}function fe(Y){d[Y]!==!1&&(i.disable(Y),d[Y]=!1)}function De(Y,lt){return Y===i.FRAMEBUFFER?m[i.DRAW_FRAMEBUFFER]===lt&&m[i.READ_FRAMEBUFFER]===lt?!1:(i.bindFramebuffer(i.FRAMEBUFFER,lt),m[i.DRAW_FRAMEBUFFER]=lt,m[i.READ_FRAMEBUFFER]=lt,!0):m[Y]===lt?!1:(i.bindFramebuffer(Y,lt),m[Y]=lt,!0)}function kt(Y){return Y===i.FRAMEBUFFER&&(Y=i.DRAW_FRAMEBUFFER),m[Y]||null}function k(Y,lt){let Ht=y,Yt=!1;if(Y){Ht=x.get(lt),Ht===void 0&&(Ht=[],x.set(lt,Ht));let dt=Y.textures;if(Ht.length!==dt.length||Ht[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Me=dt.length;se<Me;se++)Ht[se]=i.COLOR_ATTACHMENT0+se;Ht.length=dt.length,Yt=!0}}else Ht[0]!==i.BACK&&(Ht[0]=i.BACK,Yt=!0);Yt&&i.drawBuffers(Ht)}function vt(Y){return b!==Y?(i.useProgram(Y),b=Y,!0):!1}let K={[Ks]:i.FUNC_ADD,[gd]:i.FUNC_SUBTRACT,[xd]:i.FUNC_REVERSE_SUBTRACT};K[yd]=i.MIN,K[_d]=i.MAX;let ht={[vd]:i.ZERO,[Md]:i.ONE,[wd]:i.SRC_COLOR,[Mh]:i.SRC_ALPHA,[Cd]:i.SRC_ALPHA_SATURATE,[Ed]:i.DST_COLOR,[bd]:i.DST_ALPHA,[Sd]:i.ONE_MINUS_SRC_COLOR,[wh]:i.ONE_MINUS_SRC_ALPHA,[Td]:i.ONE_MINUS_DST_COLOR,[Ad]:i.ONE_MINUS_DST_ALPHA,[Rd]:i.CONSTANT_COLOR,[Fd]:i.ONE_MINUS_CONSTANT_COLOR,[Pd]:i.CONSTANT_ALPHA,[Id]:i.ONE_MINUS_CONSTANT_ALPHA};function X(Y,lt,Ht,Yt,dt,se,Me,oe,ke,Te){if(Y===$s){p===!0&&(fe(i.BLEND),p=!1);return}if(p===!1&&(te(i.BLEND),p=!0),Y!==md){if(Y!==_||Te!==B){if((A!==Ks||N!==Ks)&&(i.blendEquation(i.FUNC_ADD),A=Ks,N=Ks),Te)switch(Y){case Lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xn:i.blendFunc(i.ONE,i.ONE);break;case _h:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _h:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vh:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",Y);break}P=null,M=null,R=null,v=null,C.set(0,0,0),G=0,_=Y,B=Te}return}dt=dt||lt,se=se||Ht,Me=Me||Yt,(lt!==A||dt!==N)&&(i.blendEquationSeparate(K[lt],K[dt]),A=lt,N=dt),(Ht!==P||Yt!==M||se!==R||Me!==v)&&(i.blendFuncSeparate(ht[Ht],ht[Yt],ht[se],ht[Me]),P=Ht,M=Yt,R=se,v=Me),(oe.equals(C)===!1||ke!==G)&&(i.blendColor(oe.r,oe.g,oe.b,ke),C.copy(oe),G=ke),_=Y,B=!1}function mt(Y,lt){Y.side===We?fe(i.CULL_FACE):te(i.CULL_FACE);let Ht=Y.side===ti;lt&&(Ht=!Ht),rt(Ht),Y.blending===Lr&&Y.transparent===!1?X($s):X(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),r.setFunc(Y.depthFunc),r.setTest(Y.depthTest),r.setMask(Y.depthWrite),o.setMask(Y.colorWrite);let Yt=Y.stencilWrite;a.setTest(Yt),Yt&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Lt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(Y){st!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),st=Y)}function gt(Y){Y!==dd?(te(i.CULL_FACE),Y!==at&&(Y===yh?i.cullFace(i.BACK):Y===fd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),at=Y}function St(Y){Y!==W&&(pt&&i.lineWidth(Y),W=Y)}function Lt(Y,lt,Ht){Y?(te(i.POLYGON_OFFSET_FILL),(bt!==lt||ft!==Ht)&&(bt=lt,ft=Ht,r.getReversed()&&(lt=-lt,Ht=-Ht),i.polygonOffset(lt,Ht))):fe(i.POLYGON_OFFSET_FILL)}function It(Y){Y?te(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function ce(Y){Y===void 0&&(Y=i.TEXTURE0+Ct-1),Ut!==Y&&(i.activeTexture(Y),Ut=Y)}function tt(Y,lt,Ht){Ht===void 0&&(Ut===null?Ht=i.TEXTURE0+Ct-1:Ht=Ut);let Yt=Qt[Ht];Yt===void 0&&(Yt={type:void 0,texture:void 0},Qt[Ht]=Yt),(Yt.type!==Y||Yt.texture!==lt)&&(Ut!==Ht&&(i.activeTexture(Ht),Ut=Ht),i.bindTexture(Y,lt||xe[Y]),Yt.type=Y,Yt.texture=lt)}function we(){let Y=Qt[Ut];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ot(){try{i.compressedTexImage2D(...arguments)}catch(Y){Ye("WebGLState:",Y)}}function ct(){try{i.compressedTexImage3D(...arguments)}catch(Y){Ye("WebGLState:",Y)}}function j(){try{i.texSubImage2D(...arguments)}catch(Y){Ye("WebGLState:",Y)}}function ie(){try{i.texSubImage3D(...arguments)}catch(Y){Ye("WebGLState:",Y)}}function qt(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){Ye("WebGLState:",Y)}}function Jt(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){Ye("WebGLState:",Y)}}function l(){try{i.texStorage2D(...arguments)}catch(Y){Ye("WebGLState:",Y)}}function u(){try{i.texStorage3D(...arguments)}catch(Y){Ye("WebGLState:",Y)}}function T(){try{i.texImage2D(...arguments)}catch(Y){Ye("WebGLState:",Y)}}function I(){try{i.texImage3D(...arguments)}catch(Y){Ye("WebGLState:",Y)}}function H(Y){return f[Y]!==void 0?f[Y]:i.getParameter(Y)}function it(Y,lt){f[Y]!==lt&&(i.pixelStorei(Y,lt),f[Y]=lt)}function Q(Y){et.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),et.copy(Y))}function wt(Y){Zt.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),Zt.copy(Y))}function Tt(Y,lt){let Ht=h.get(lt);Ht===void 0&&(Ht=new WeakMap,h.set(lt,Ht));let Yt=Ht.get(Y);Yt===void 0&&(Yt=i.getUniformBlockIndex(lt,Y.name),i.uniformBlockBinding(lt,Yt,Yt),Ht.set(Y,Yt))}function jt(Y,lt,Ht){let dt=h.get(lt).get(Y);c[dt]!==Ht&&(i.bindBufferBase(i.UNIFORM_BUFFER,dt,Ht),c[dt]=Ht)}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},f={},Ut=null,Qt={},m={},c={},x=new WeakMap,y=[],b=null,p=!1,_=null,A=null,P=null,M=null,N=null,R=null,v=null,C=new Ve(0,0,0),G=0,B=!1,st=null,at=null,W=null,bt=null,ft=null,et.set(0,0,i.canvas.width,i.canvas.height),Zt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:te,disable:fe,bindFramebuffer:De,getBoundFramebuffer:kt,drawBuffers:k,useProgram:vt,setBlending:X,setMaterial:mt,setFlipSided:rt,setCullFace:gt,setLineWidth:St,setPolygonOffset:Lt,setScissorTest:It,activeTexture:ce,bindTexture:tt,unbindTexture:we,compressedTexImage2D:ot,compressedTexImage3D:ct,texImage2D:T,texImage3D:I,pixelStorei:it,getParameter:H,updateUBOMapping:Tt,uniformBlockBinding:jt,texStorage2D:l,texStorage3D:u,texSubImage2D:j,texSubImage3D:ie,compressedTexSubImage2D:qt,compressedTexSubImage3D:Jt,scissor:Q,viewport:wt,reset:re}}function ny(i,t,e,n,s,o,r){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ot,d=new WeakMap,f=new Set,m,x=new WeakMap,y=new Set,b=new FinalizationRegistry(l=>y.delete(l)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(l,u){return p?new OffscreenCanvas(l,u):ao("canvas")}function A(l,u,T){let I=1,H=Jt(l);if((H.width>T||H.height>T)&&(I=T/Math.max(H.width,H.height)),I<1)if(typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap||typeof VideoFrame<"u"&&l instanceof VideoFrame){let it=Math.floor(I*H.width),Q=Math.floor(I*H.height);m===void 0&&(m=_(it,Q));let wt=u?_(it,Q):m;return wt.width=it,wt.height=Q,wt.getContext("2d").drawImage(l,0,0,it,Q),Ge("WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+it+"x"+Q+")."),wt}else return"data"in l&&Ge("WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),l;return l}function P(l){return l.generateMipmaps}function M(l){i.generateMipmap(l)}function N(l){return l.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:l.isWebGL3DRenderTarget?i.TEXTURE_3D:l.isWebGLArrayRenderTarget||l.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(l,u,T,I,H,it=!1){if(l!==null){if(i[l]!==void 0)return i[l];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+l+"'")}let Q;I&&(Q=t.get("EXT_texture_norm16"),Q||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let wt=u;if(u===i.RED&&(T===i.FLOAT&&(wt=i.R32F),T===i.HALF_FLOAT&&(wt=i.R16F),T===i.UNSIGNED_BYTE&&(wt=i.R8),T===i.UNSIGNED_SHORT&&Q&&(wt=Q.R16_EXT),T===i.SHORT&&Q&&(wt=Q.R16_SNORM_EXT)),u===i.RED_INTEGER&&(T===i.UNSIGNED_BYTE&&(wt=i.R8UI),T===i.UNSIGNED_SHORT&&(wt=i.R16UI),T===i.UNSIGNED_INT&&(wt=i.R32UI),T===i.BYTE&&(wt=i.R8I),T===i.SHORT&&(wt=i.R16I),T===i.INT&&(wt=i.R32I)),u===i.RG&&(T===i.FLOAT&&(wt=i.RG32F),T===i.HALF_FLOAT&&(wt=i.RG16F),T===i.UNSIGNED_BYTE&&(wt=i.RG8),T===i.UNSIGNED_SHORT&&Q&&(wt=Q.RG16_EXT),T===i.SHORT&&Q&&(wt=Q.RG16_SNORM_EXT)),u===i.RG_INTEGER&&(T===i.UNSIGNED_BYTE&&(wt=i.RG8UI),T===i.UNSIGNED_SHORT&&(wt=i.RG16UI),T===i.UNSIGNED_INT&&(wt=i.RG32UI),T===i.BYTE&&(wt=i.RG8I),T===i.SHORT&&(wt=i.RG16I),T===i.INT&&(wt=i.RG32I)),u===i.RGB_INTEGER&&(T===i.UNSIGNED_BYTE&&(wt=i.RGB8UI),T===i.UNSIGNED_SHORT&&(wt=i.RGB16UI),T===i.UNSIGNED_INT&&(wt=i.RGB32UI),T===i.BYTE&&(wt=i.RGB8I),T===i.SHORT&&(wt=i.RGB16I),T===i.INT&&(wt=i.RGB32I)),u===i.RGBA_INTEGER&&(T===i.UNSIGNED_BYTE&&(wt=i.RGBA8UI),T===i.UNSIGNED_SHORT&&(wt=i.RGBA16UI),T===i.UNSIGNED_INT&&(wt=i.RGBA32UI),T===i.BYTE&&(wt=i.RGBA8I),T===i.SHORT&&(wt=i.RGBA16I),T===i.INT&&(wt=i.RGBA32I)),u===i.RGB&&(T===i.UNSIGNED_SHORT&&Q&&(wt=Q.RGB16_EXT),T===i.SHORT&&Q&&(wt=Q.RGB16_SNORM_EXT),T===i.UNSIGNED_INT_5_9_9_9_REV&&(wt=i.RGB9_E5),T===i.UNSIGNED_INT_10F_11F_11F_REV&&(wt=i.R11F_G11F_B10F)),u===i.RGBA){let Tt=it?oo:cn.getTransfer(H);T===i.FLOAT&&(wt=i.RGBA32F),T===i.HALF_FLOAT&&(wt=i.RGBA16F),T===i.UNSIGNED_BYTE&&(wt=Tt===gn?i.SRGB8_ALPHA8:i.RGBA8),T===i.UNSIGNED_SHORT&&Q&&(wt=Q.RGBA16_EXT),T===i.SHORT&&Q&&(wt=Q.RGBA16_SNORM_EXT),T===i.UNSIGNED_SHORT_4_4_4_4&&(wt=i.RGBA4),T===i.UNSIGNED_SHORT_5_5_5_1&&(wt=i.RGB5_A1)}return(wt===i.R16F||wt===i.R32F||wt===i.RG16F||wt===i.RG32F||wt===i.RGBA16F||wt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),wt}function v(l,u){let T;return l?u===null||u===Xi||u===Qs?T=i.DEPTH24_STENCIL8:u===Bi?T=i.DEPTH32F_STENCIL8:u===Nr&&(T=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):u===null||u===Xi||u===Qs?T=i.DEPTH_COMPONENT24:u===Bi?T=i.DEPTH_COMPONENT32F:u===Nr&&(T=i.DEPTH_COMPONENT16),T}function C(l,u){return P(l)===!0||l.isFramebufferTexture&&l.minFilter!==Zn&&l.minFilter!==pi?Math.log2(Math.max(u.width,u.height))+1:l.mipmaps.length>0?l.mipmaps.length:l.isCompressedTexture&&Array.isArray(l.image)?u.mipmaps.length:1}function G(l){let u=new WeakRef(l);n.get(l).__ref=u,y.add(u),b.register(l,u,u)}function B(l){let u=n.get(l).__ref;u!==void 0&&(y.delete(u),b.unregister(u))}function st(l){W(l.target)}function at(l){bt(l.target)}function W(l){l.removeEventListener("dispose",st),B(l),Ct(l),l.isVideoTexture&&d.delete(l),l.isHTMLTexture&&f.delete(l)}function bt(l){l.removeEventListener("dispose",at),B(l),xt(l)}function ft(){for(let l of y){let u=l.deref();u!==void 0&&(u.isRenderTarget===!0?bt(u):W(u))}y.clear(),f.clear()}function Ct(l){let u=n.get(l);if(u.__webglInit===void 0)return;let T=l.source,I=x.get(T);if(I){let H=I[u.__cacheKey];H.usedTimes--,H.usedTimes===0&&pt(l),Object.keys(I).length===0&&x.delete(T)}n.remove(l)}function pt(l){let u=n.get(l);i.deleteTexture(u.__webglTexture);let T=l.source,I=x.get(T);delete I[u.__cacheKey],r.memory.textures--}function xt(l){let u=n.get(l);u.__depthDisposeCallback&&u.__depthDisposeCallback();let T=l.depthTexture;if(T&&T.renderTarget===l&&W(T),l.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(u.__webglFramebuffer[H]))for(let it=0;it<u.__webglFramebuffer[H].length;it++)i.deleteFramebuffer(u.__webglFramebuffer[H][it]);else i.deleteFramebuffer(u.__webglFramebuffer[H]);u.__webglDepthbuffer&&i.deleteRenderbuffer(u.__webglDepthbuffer[H])}else{if(Array.isArray(u.__webglFramebuffer))for(let H=0;H<u.__webglFramebuffer.length;H++)i.deleteFramebuffer(u.__webglFramebuffer[H]);else i.deleteFramebuffer(u.__webglFramebuffer);if(u.__webglDepthbuffer&&i.deleteRenderbuffer(u.__webglDepthbuffer),u.__webglMultisampledFramebuffer&&i.deleteFramebuffer(u.__webglMultisampledFramebuffer),u.__webglColorRenderbuffer)for(let H=0;H<u.__webglColorRenderbuffer.length;H++)u.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(u.__webglColorRenderbuffer[H]);u.__webglDepthRenderbuffer&&i.deleteRenderbuffer(u.__webglDepthRenderbuffer)}let I=l.textures;for(let H=0,it=I.length;H<it;H++){let Q=n.get(I[H]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),r.memory.textures--),n.remove(I[H])}n.remove(l)}let Mt=0;function Ut(){Mt=0}function Qt(){return Mt}function ne(l){Mt=l}function _e(){let l=Mt;return l>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(l+1)+" texture units while this GPU supports only "+s.maxTextures),Mt+=1,l}function et(l){let u=[];return u.push(l.wrapS),u.push(l.wrapT),u.push(l.wrapR||0),u.push(l.magFilter),u.push(l.minFilter),u.push(l.anisotropy),u.push(l.internalFormat),u.push(l.format),u.push(l.type),u.push(l.generateMipmaps),u.push(l.mipmapsAutoUpdate),u.push(l.premultiplyAlpha),u.push(l.flipY),u.push(l.unpackAlignment),u.push(l.colorSpace),u.join()}function Zt(l,u){let T=n.get(l);if(l.isVideoTexture&&ie(l),l.isRenderTargetTexture===!1&&l.isExternalTexture!==!0&&l.version>0&&T.__version!==l.version){let I=l.image;if(I===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{X(T,l,u);return}}else l.isExternalTexture&&(T.__webglTexture=l.sourceTexture?l.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,T.__webglTexture,i.TEXTURE0+u)}function le(l,u){let T=n.get(l);if(l.isRenderTargetTexture===!1&&l.version>0&&T.__version!==l.version){X(T,l,u);return}else l.isExternalTexture&&(T.__webglTexture=l.sourceTexture?l.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,T.__webglTexture,i.TEXTURE0+u)}function xe(l,u){let T=n.get(l);if(l.isRenderTargetTexture===!1&&l.version>0&&T.__version!==l.version){X(T,l,u);return}e.bindTexture(i.TEXTURE_3D,T.__webglTexture,i.TEXTURE0+u)}function te(l,u){let T=n.get(l);if(l.version>0&&T.__version!==l.version){mt(T,l,u);return}e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+u)}let fe={[Cs]:i.REPEAT,[Ki]:i.CLAMP_TO_EDGE,[Ya]:i.MIRRORED_REPEAT},De={[Zn]:i.NEAREST,[Dd]:i.NEAREST_MIPMAP_NEAREST,[Vo]:i.NEAREST_MIPMAP_LINEAR,[pi]:i.LINEAR,[Cl]:i.LINEAR_MIPMAP_NEAREST,[xs]:i.LINEAR_MIPMAP_LINEAR},kt={[Od]:i.NEVER,[Bh]:i.ALWAYS,[kd]:i.LESS,[Nh]:i.LEQUAL,[Vd]:i.EQUAL,[Uh]:i.GEQUAL,[Hd]:i.GREATER,[Gd]:i.NOTEQUAL};function k(l,u){if(u.type===Bi&&t.has("OES_texture_float_linear")===!1&&(u.magFilter===pi||u.magFilter===Cl||u.magFilter===Vo||u.magFilter===xs||u.minFilter===pi||u.minFilter===Cl||u.minFilter===Vo||u.minFilter===xs)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(l,i.TEXTURE_WRAP_S,fe[u.wrapS]),i.texParameteri(l,i.TEXTURE_WRAP_T,fe[u.wrapT]),(l===i.TEXTURE_3D||l===i.TEXTURE_2D_ARRAY)&&i.texParameteri(l,i.TEXTURE_WRAP_R,fe[u.wrapR]),i.texParameteri(l,i.TEXTURE_MAG_FILTER,De[u.magFilter]),i.texParameteri(l,i.TEXTURE_MIN_FILTER,De[u.minFilter]),u.compareFunction&&(i.texParameteri(l,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(l,i.TEXTURE_COMPARE_FUNC,kt[u.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(u.magFilter===Zn||u.minFilter!==Vo&&u.minFilter!==xs||u.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(u.anisotropy>1||n.get(u).__currentAnisotropy){let T=t.get("EXT_texture_filter_anisotropic");i.texParameterf(l,T.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(u.anisotropy,s.getMaxAnisotropy())),n.get(u).__currentAnisotropy=u.anisotropy}}}function vt(l,u){let T=!1;l.__webglInit===void 0&&(l.__webglInit=!0,u.addEventListener("dispose",st),G(u));let I=u.source,H=x.get(I);H===void 0&&(H={},x.set(I,H));let it=et(u);if(it!==l.__cacheKey){H[it]===void 0&&(H[it]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,T=!0),H[it].usedTimes++;let Q=H[l.__cacheKey];Q!==void 0&&(H[l.__cacheKey].usedTimes--,Q.usedTimes===0&&pt(u)),l.__cacheKey=it,l.__webglTexture=H[it].texture}return T}function K(l,u,T){return Math.floor(Math.floor(l/T)/u)}function ht(l,u,T,I){let it=l.updateRanges;if(it.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,u.width,u.height,T,I,u.data);else{it.sort((re,Y)=>re.start-Y.start);let Q=0;for(let re=1;re<it.length;re++){let Y=it[Q],lt=it[re],Ht=Y.start+Y.count,Yt=K(lt.start,u.width,4),dt=K(Y.start,u.width,4);lt.start<=Ht+1&&Yt===dt&&K(lt.start+lt.count-1,u.width,4)===Yt?Y.count=Math.max(Y.count,lt.start+lt.count-Y.start):(++Q,it[Q]=lt)}it.length=Q+1;let wt=e.getParameter(i.UNPACK_ROW_LENGTH),Tt=e.getParameter(i.UNPACK_SKIP_PIXELS),jt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,u.width);for(let re=0,Y=it.length;re<Y;re++){let lt=it[re],Ht=Math.floor(lt.start/4),Yt=Math.ceil(lt.count/4),dt=Ht%u.width,se=Math.floor(Ht/u.width),Me=Yt,oe=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,se),e.texSubImage2D(i.TEXTURE_2D,0,dt,se,Me,oe,T,I,u.data)}l.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,wt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,jt)}}function X(l,u,T){let I=i.TEXTURE_2D;(u.isDataArrayTexture||u.isCompressedArrayTexture)&&(I=i.TEXTURE_2D_ARRAY),u.isData3DTexture&&(I=i.TEXTURE_3D);let H=vt(l,u),it=u.source;e.bindTexture(I,l.__webglTexture,i.TEXTURE0+T);let Q=n.get(it);if(it.version!==Q.__version||H===!0){if(e.activeTexture(i.TEXTURE0+T),(typeof ImageBitmap<"u"&&u.image instanceof ImageBitmap)===!1){let oe=cn.getPrimaries(cn.workingColorSpace),ke=u.colorSpace===_s?null:cn.getPrimaries(u.colorSpace),Te=u.colorSpace===_s||oe===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,u.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}e.pixelStorei(i.UNPACK_ALIGNMENT,u.unpackAlignment);let Tt=A(u.image,!1,s.maxTextureSize);Tt=qt(u,Tt);let jt=o.convert(u.format,u.colorSpace),re=o.convert(u.type),Y=R(u.internalFormat,jt,re,u.normalized,u.colorSpace,u.isVideoTexture);k(I,u);let lt,Ht=u.mipmaps,Yt=u.isVideoTexture!==!0,dt=Q.__version===void 0||H===!0,se=it.dataReady,Me=C(u,Tt);if(u.isDepthTexture)Y=v(u.format===ys,u.type),dt&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Y,Tt.width,Tt.height):e.texImage2D(i.TEXTURE_2D,0,Y,Tt.width,Tt.height,0,jt,re,null));else if(u.isDataTexture)if(Ht.length>0){Yt&&dt&&e.texStorage2D(i.TEXTURE_2D,Me,Y,Ht[0].width,Ht[0].height);for(let oe=0,ke=Ht.length;oe<ke;oe++)lt=Ht[oe],Yt?se&&e.texSubImage2D(i.TEXTURE_2D,oe,0,0,lt.width,lt.height,jt,re,lt.data):e.texImage2D(i.TEXTURE_2D,oe,Y,lt.width,lt.height,0,jt,re,lt.data);u.generateMipmaps=!1}else Yt?(dt&&e.texStorage2D(i.TEXTURE_2D,Me,Y,Tt.width,Tt.height),se&&ht(u,Tt,jt,re)):e.texImage2D(i.TEXTURE_2D,0,Y,Tt.width,Tt.height,0,jt,re,Tt.data);else if(u.isCompressedTexture)if(u.isCompressedArrayTexture){Yt&&dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Y,Ht[0].width,Ht[0].height,Tt.depth);for(let oe=0,ke=Ht.length;oe<ke;oe++)if(lt=Ht[oe],u.format!==Yi)if(jt!==null)if(Yt){if(se)if(u.layerUpdates.size>0){let Te=Xh(lt.width,lt.height,u.format,u.type);for(let he of u.layerUpdates){let Ne=lt.data.subarray(he*Te/lt.data.BYTES_PER_ELEMENT,(he+1)*Te/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,he,lt.width,lt.height,1,jt,Ne)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,lt.width,lt.height,Tt.depth,jt,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Y,lt.width,lt.height,Tt.depth,0,lt.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?se&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,lt.width,lt.height,Tt.depth,jt,re,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,oe,Y,lt.width,lt.height,Tt.depth,0,jt,re,lt.data);u.layerUpdates.size>0&&u.clearLayerUpdates()}else{Yt&&dt&&e.texStorage2D(i.TEXTURE_2D,Me,Y,Ht[0].width,Ht[0].height);for(let oe=0,ke=Ht.length;oe<ke;oe++)lt=Ht[oe],u.format!==Yi?jt!==null?Yt?se&&e.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,lt.width,lt.height,jt,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,oe,Y,lt.width,lt.height,0,lt.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?se&&e.texSubImage2D(i.TEXTURE_2D,oe,0,0,lt.width,lt.height,jt,re,lt.data):e.texImage2D(i.TEXTURE_2D,oe,Y,lt.width,lt.height,0,jt,re,lt.data)}else if(u.isDataArrayTexture)if(Yt){if(dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Y,Tt.width,Tt.height,Tt.depth),se)if(u.layerUpdates.size>0){let oe=Xh(Tt.width,Tt.height,u.format,u.type);for(let ke of u.layerUpdates){let Te=Tt.data.subarray(ke*oe/Tt.data.BYTES_PER_ELEMENT,(ke+1)*oe/Tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ke,Tt.width,Tt.height,1,jt,re,Te)}u.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,jt,re,Tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Y,Tt.width,Tt.height,Tt.depth,0,jt,re,Tt.data);else if(u.isData3DTexture)Yt?(dt&&e.texStorage3D(i.TEXTURE_3D,Me,Y,Tt.width,Tt.height,Tt.depth),se&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,jt,re,Tt.data)):e.texImage3D(i.TEXTURE_3D,0,Y,Tt.width,Tt.height,Tt.depth,0,jt,re,Tt.data);else if(u.isFramebufferTexture){if(dt)if(Yt)e.texStorage2D(i.TEXTURE_2D,Me,Y,Tt.width,Tt.height);else{let oe=Tt.width,ke=Tt.height;for(let Te=0;Te<Me;Te++)e.texImage2D(i.TEXTURE_2D,Te,Y,oe,ke,0,jt,re,null),oe>>=1,ke>>=1}}else if(u.isHTMLTexture){if("texElementImage2D"in i){let oe=i.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),Tt.parentNode!==oe){oe.appendChild(Tt),f.add(u),oe.onpaint=ke=>{let Te=ke.changedElements;for(let he of f)Te.includes(he.image)&&(he.needsUpdate=!0)},oe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Tt);else{let Te=i.RGBA,he=i.RGBA,Ne=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Te,he,Ne,Tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ht.length>0){if(Yt&&dt){let oe=Jt(Ht[0]);e.texStorage2D(i.TEXTURE_2D,Me,Y,oe.width,oe.height)}for(let oe=0,ke=Ht.length;oe<ke;oe++)lt=Ht[oe],Yt?se&&e.texSubImage2D(i.TEXTURE_2D,oe,0,0,jt,re,lt):e.texImage2D(i.TEXTURE_2D,oe,Y,jt,re,lt);u.generateMipmaps=!1}else if(Yt){if(dt){let oe=Jt(Tt);e.texStorage2D(i.TEXTURE_2D,Me,Y,oe.width,oe.height)}se&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,jt,re,Tt)}else e.texImage2D(i.TEXTURE_2D,0,Y,jt,re,Tt);P(u)&&u.mipmapsAutoUpdate===!0&&M(I),Q.__version=it.version,u.onUpdate&&u.onUpdate(u)}l.__version=u.version}function mt(l,u,T){if(u.image.length!==6)return;let I=vt(l,u),H=u.source;e.bindTexture(i.TEXTURE_CUBE_MAP,l.__webglTexture,i.TEXTURE0+T);let it=n.get(H);if(H.version!==it.__version||I===!0){e.activeTexture(i.TEXTURE0+T);let Q=cn.getPrimaries(cn.workingColorSpace),wt=u.colorSpace===_s?null:cn.getPrimaries(u.colorSpace),Tt=u.colorSpace===_s||Q===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,u.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,u.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let jt=u.isCompressedTexture||u.image[0].isCompressedTexture,re=u.image[0]&&u.image[0].isDataTexture,Y=[];for(let he=0;he<6;he++)!jt&&!re?Y[he]=A(u.image[he],!0,s.maxCubemapSize):Y[he]=re?u.image[he].image:u.image[he],Y[he]=qt(u,Y[he]);let lt=Y[0],Ht=o.convert(u.format,u.colorSpace),Yt=o.convert(u.type),dt=R(u.internalFormat,Ht,Yt,u.normalized,u.colorSpace),se=u.isVideoTexture!==!0,Me=it.__version===void 0||I===!0,oe=H.dataReady,ke=C(u,lt);k(i.TEXTURE_CUBE_MAP,u);let Te;if(u.isDepthTexture){if(dt=v(u.format===ys,u.type),Me)if(se)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,dt,lt.width,lt.height);else for(let he=0;he<6;he++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,lt.width,lt.height,0,Ht,Yt,null)}else if(jt){se&&Me&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ke,dt,lt.width,lt.height);for(let he=0;he<6;he++){Te=Y[he].mipmaps;for(let Ne=0;Ne<Te.length;Ne++){let sn=Te[Ne];u.format!==Yi?Ht!==null?se?oe&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,0,0,sn.width,sn.height,Ht,sn.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,dt,sn.width,sn.height,0,sn.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?oe&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,0,0,sn.width,sn.height,Ht,Yt,sn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne,dt,sn.width,sn.height,0,Ht,Yt,sn.data)}}}else{if(Te=u.mipmaps,se&&Me){Te.length>0&&ke++;let he=Jt(Y[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ke,dt,he.width,he.height)}for(let he=0;he<6;he++)if(re){se?oe&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Y[he].width,Y[he].height,Ht,Yt,Y[he].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,Y[he].width,Y[he].height,0,Ht,Yt,Y[he].data);for(let Ne=0;Ne<Te.length;Ne++){let fn=Te[Ne].image[he].image;se?oe&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,0,0,fn.width,fn.height,Ht,Yt,fn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,dt,fn.width,fn.height,0,Ht,Yt,fn.data)}}else{se?oe&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ht,Yt,Y[he]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,Ht,Yt,Y[he]);for(let Ne=0;Ne<Te.length;Ne++){let sn=Te[Ne];se?oe&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,0,0,Ht,Yt,sn.image[he]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ne+1,dt,Ht,Yt,sn.image[he])}}}P(u)&&u.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),it.__version=H.version,u.onUpdate&&u.onUpdate(u)}l.__version=u.version}function rt(l,u,T,I,H,it){let Q=o.convert(T.format,T.colorSpace),wt=o.convert(T.type),Tt=R(T.internalFormat,Q,wt,T.normalized,T.colorSpace),jt=n.get(u),re=n.get(T);if(re.__renderTarget=u,!jt.__hasExternalTextures){let Y=Math.max(1,u.width>>it),lt=Math.max(1,u.height>>it);H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?e.texImage3D(H,it,Tt,Y,lt,u.depth,0,Q,wt,null):e.texImage2D(H,it,Tt,Y,lt,0,Q,wt,null)}e.bindFramebuffer(i.FRAMEBUFFER,l),j(u)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,I,H,re.__webglTexture,0,ct(u)):(H===i.TEXTURE_2D||H>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,I,H,re.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(l,u,T){if(i.bindRenderbuffer(i.RENDERBUFFER,l),u.depthBuffer){let I=u.depthTexture,H=I&&I.isDepthTexture?I.type:null,it=v(u.stencilBuffer,H),Q=u.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;j(u)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(u),it,u.width,u.height):T?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(u),it,u.width,u.height):i.renderbufferStorage(i.RENDERBUFFER,it,u.width,u.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,l)}else{let I=u.textures;for(let H=0;H<I.length;H++){let it=I[H],Q=o.convert(it.format,it.colorSpace),wt=o.convert(it.type),Tt=R(it.internalFormat,Q,wt,it.normalized,it.colorSpace);j(u)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(u),Tt,u.width,u.height):T?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(u),Tt,u.width,u.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,u.width,u.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(l,u,T){let I=u.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,l),!(u.depthTexture&&u.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let H=n.get(u.depthTexture);H.__renderTarget=u;let it=I?u.depthTexture.image[0]:u.depthTexture.image;(!H.__webglTexture||it.width!==u.width||it.height!==u.height)&&(it.width=u.width,it.height=u.height,u.depthTexture.needsUpdate=!0),I?te(u.depthTexture,0):Zt(u.depthTexture,0);let Q=H.__webglTexture,wt=ct(u),Tt=I?i.TEXTURE_CUBE_MAP_POSITIVE_X+T:i.TEXTURE_2D,jt=u.depthTexture.format===ys?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(u.depthTexture.format===fs)j(u)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,jt,Tt,Q,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,jt,Tt,Q,0);else if(u.depthTexture.format===ys)j(u)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,jt,Tt,Q,0,wt):i.framebufferTexture2D(i.FRAMEBUFFER,jt,Tt,Q,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Lt(l){let u=n.get(l),T=l.isWebGLCubeRenderTarget===!0;if(u.__boundDepthTexture!==l.depthTexture){let I=l.depthTexture;if(u.__depthDisposeCallback&&u.__depthDisposeCallback(),I){let H=()=>{delete u.__boundDepthTexture,delete u.__depthDisposeCallback,I.removeEventListener("dispose",H)};I.addEventListener("dispose",H),u.__depthDisposeCallback=H}u.__boundDepthTexture=I}if(l.depthTexture&&!u.__autoAllocateDepthBuffer)if(T)for(let I=0;I<6;I++)St(u.__webglFramebuffer[I],l,I);else l.texture.mipmaps.length>0?St(u.__webglFramebuffer[0],l,0):St(u.__webglFramebuffer,l,0);else if(T){u.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(e.bindFramebuffer(i.FRAMEBUFFER,u.__webglFramebuffer[I]),u.__webglDepthbuffer[I]===void 0)u.__webglDepthbuffer[I]=i.createRenderbuffer(),gt(u.__webglDepthbuffer[I],l,!1);else{let H=l.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=u.__webglDepthbuffer[I];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,it)}}else if(l.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,u.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,u.__webglFramebuffer),u.__webglDepthbuffer===void 0)u.__webglDepthbuffer=i.createRenderbuffer(),gt(u.__webglDepthbuffer,l,!1);else{let H=l.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=u.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(l,u,T){let I=n.get(l);u!==void 0&&rt(I.__webglFramebuffer,l,l.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),T!==void 0&&Lt(l)}function ce(l){let u=l.texture,T=n.get(l),I=n.get(u);l.addEventListener("dispose",at),G(l);let H=l.textures,it=l.isWebGLCubeRenderTarget===!0,Q=H.length>1;if(Q||(I.__webglTexture===void 0&&(I.__webglTexture=i.createTexture()),I.__version=u.version,r.memory.textures++),it){T.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(u.mipmaps.length>0){T.__webglFramebuffer[wt]=[];for(let Tt=0;Tt<u.mipmaps.length;Tt++)T.__webglFramebuffer[wt][Tt]=i.createFramebuffer()}else T.__webglFramebuffer[wt]=i.createFramebuffer()}else{if(u.mipmaps.length>0){T.__webglFramebuffer=[];for(let wt=0;wt<u.mipmaps.length;wt++)T.__webglFramebuffer[wt]=i.createFramebuffer()}else T.__webglFramebuffer=i.createFramebuffer();if(Q)for(let wt=0,Tt=H.length;wt<Tt;wt++){let jt=n.get(H[wt]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),r.memory.textures++)}if(l.samples>0&&j(l)===!1){T.__webglMultisampledFramebuffer=i.createFramebuffer(),T.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let wt=0;wt<H.length;wt++){let Tt=H[wt];T.__webglColorRenderbuffer[wt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,T.__webglColorRenderbuffer[wt]);let jt=o.convert(Tt.format,Tt.colorSpace),re=o.convert(Tt.type),Y=R(Tt.internalFormat,jt,re,Tt.normalized,Tt.colorSpace,l.isXRRenderTarget===!0),lt=ct(l);i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,Y,l.width,l.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,T.__webglColorRenderbuffer[wt])}i.bindRenderbuffer(i.RENDERBUFFER,null),l.depthBuffer&&(T.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(T.__webglDepthRenderbuffer,l,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture),k(i.TEXTURE_CUBE_MAP,u);for(let wt=0;wt<6;wt++)if(u.mipmaps.length>0)for(let Tt=0;Tt<u.mipmaps.length;Tt++)rt(T.__webglFramebuffer[wt][Tt],l,u,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Tt);else rt(T.__webglFramebuffer[wt],l,u,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);P(u)?M(i.TEXTURE_CUBE_MAP):u.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,u.mipmaps.length-1),e.unbindTexture()}else if(Q){for(let wt=0,Tt=H.length;wt<Tt;wt++){let jt=H[wt],re=n.get(jt),Y=i.TEXTURE_2D;(l.isWebGL3DRenderTarget||l.isWebGLArrayRenderTarget)&&(Y=l.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,re.__webglTexture),k(Y,jt),rt(T.__webglFramebuffer,l,jt,i.COLOR_ATTACHMENT0+wt,Y,0),P(jt)&&M(Y)}e.unbindTexture()}else{let wt=i.TEXTURE_2D;if((l.isWebGL3DRenderTarget||l.isWebGLArrayRenderTarget)&&(wt=l.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,I.__webglTexture),k(wt,u),u.mipmaps.length>0)for(let Tt=0;Tt<u.mipmaps.length;Tt++)rt(T.__webglFramebuffer[Tt],l,u,i.COLOR_ATTACHMENT0,wt,Tt);else rt(T.__webglFramebuffer,l,u,i.COLOR_ATTACHMENT0,wt,0);P(u)?M(wt):u.mipmaps.length>0&&i.texParameteri(wt,i.TEXTURE_MAX_LEVEL,u.mipmaps.length-1),e.unbindTexture()}l.depthBuffer&&Lt(l)}function tt(l){let u=l.textures;for(let T=0,I=u.length;T<I;T++){let H=u[T];if(P(H)&&H.mipmapsAutoUpdate===!0){let it=N(l),Q=n.get(H).__webglTexture;e.bindTexture(it,Q),M(it),e.unbindTexture()}}}let we=[];function ot(l){if(l.samples>0){if(j(l)===!1){let u=l.textures,T=l.width,I=l.height,H=i.COLOR_BUFFER_BIT,it=l.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=n.get(l),wt=u.length>1;if(wt)for(let jt=0;jt<u.length;jt++)e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+jt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+jt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer),l.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let jt=0;jt<u.length;jt++){if(l.resolveDepthBuffer&&(l.depthBuffer&&(H|=i.DEPTH_BUFFER_BIT),l.stencilBuffer&&l.resolveStencilBuffer&&(H|=i.STENCIL_BUFFER_BIT)),wt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Q.__webglColorRenderbuffer[jt]);let re=n.get(u[jt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,T,I,0,0,T,I,H,i.NEAREST),c===!0&&(we.length=0,we.push(i.COLOR_ATTACHMENT0+jt),l.depthBuffer&&l.storeMultisampledDepthBuffer===!1&&we.push(it),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,we))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),wt)for(let jt=0;jt<u.length;jt++){e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+jt,i.RENDERBUFFER,Q.__webglColorRenderbuffer[jt]);let re=n.get(u[jt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+jt,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}else if(l.depthBuffer&&l.storeMultisampledDepthBuffer===!1&&c){let u=l.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[u])}}}function ct(l){return Math.min(s.maxSamples,l.samples)}function j(l){let u=n.get(l);return l.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&u.__useRenderToTexture!==!1}function ie(l){let u=r.render.frame;d.get(l)!==u&&(d.set(l,u),l.update())}function qt(l,u){let T=l.colorSpace,I=l.format,H=l.type;return l.isCompressedTexture===!0||l.isVideoTexture===!0||T!==ro&&T!==_s&&(cn.getTransfer(T)===gn?(I!==Yi||H!==wi)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",T)),u}function Jt(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement?(h.width=l.naturalWidth||l.width,h.height=l.naturalHeight||l.height):typeof VideoFrame<"u"&&l instanceof VideoFrame?(h.width=l.displayWidth,h.height=l.displayHeight):(h.width=l.width,h.height=l.height),h}this.allocateTextureUnit=_e,this.resetTextureUnits=Ut,this.getTextureUnits=Qt,this.setTextureUnits=ne,this.setTexture2D=Zt,this.setTexture2DArray=le,this.setTexture3D=xe,this.setTextureCube=te,this.rebindTextures=It,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=j,this.dispose=ft}function iy(i,t){function e(n,s=_s){let o,r=cn.getTransfer(s);if(n===wi)return i.UNSIGNED_BYTE;if(n===Fl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ih)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fh)return i.BYTE;if(n===Ph)return i.SHORT;if(n===Nr)return i.UNSIGNED_SHORT;if(n===Rl)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===Bi)return i.FLOAT;if(n===qi)return i.HALF_FLOAT;if(n===Lh)return i.ALPHA;if(n===Dh)return i.RGB;if(n===Yi)return i.RGBA;if(n===fs)return i.DEPTH_COMPONENT;if(n===ys)return i.DEPTH_STENCIL;if(n===Il)return i.RED;if(n===zl)return i.RED_INTEGER;if(n===Ds)return i.RG;if(n===Ll)return i.RG_INTEGER;if(n===Dl)return i.RGBA_INTEGER;if(n===Ho||n===Go||n===Wo||n===Xo)if(r===gn)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ho)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ho)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Go)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nl||n===Ul||n===Bl||n===Ol)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Nl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ul)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ol)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kl||n===Vl||n===Hl||n===Gl||n===Wl||n===qo||n===Xl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===kl||n===Vl)return r===gn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Hl)return r===gn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Gl)return o.COMPRESSED_R11_EAC;if(n===Wl)return o.COMPRESSED_SIGNED_R11_EAC;if(n===qo)return o.COMPRESSED_RG11_EAC;if(n===Xl)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ql||n===Yl||n===Zl||n===Jl||n===$l||n===Kl||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ql)return r===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yl)return r===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return r===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jl)return r===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$l)return r===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kl)return r===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jl)return r===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ql)return r===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tc)return r===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ec)return r===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nc)return r===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ic)return r===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sc)return r===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rc)return r===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oc||n===ac||n===lc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===oc)return r===gn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ac)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cc||n===hc||n===Yo||n===uc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===cc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var sy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ry=`
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

}`,ru=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new wo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ui({vertexShader:sy,fragmentShader:ry,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Gt(new pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ou=class extends Qi{constructor(t,e){super();let n=this,s=null,o=1,r=null,a="local-floor",c=1,h=null,d=null,f=null,m=null,x=null,y=null,b=typeof XRWebGLBinding<"u",p=new ru,_={},A=e.getContextAttributes(),P=null,M=null,N=[],R=[],v=new Ot,C=null,G=null,B=new oi;B.viewport=new Sn;let st=new oi;st.viewport=new Sn;let at=[B,st],W=new Sl,bt=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let Zt=N[et];return Zt===void 0&&(Zt=new Tr,N[et]=Zt),Zt.getTargetRaySpace()},this.getControllerGrip=function(et){let Zt=N[et];return Zt===void 0&&(Zt=new Tr,N[et]=Zt),Zt.getGripSpace()},this.getHand=function(et){let Zt=N[et];return Zt===void 0&&(Zt=new Tr,N[et]=Zt),Zt.getHandSpace()};function Ct(et){let Zt=R.indexOf(et.inputSource);if(Zt===-1)return;let le=N[Zt];le!==void 0&&(le.update(et.inputSource,et.frame,h||r),le.dispatchEvent({type:et.type,data:et.inputSource}))}function pt(){s.removeEventListener("select",Ct),s.removeEventListener("selectstart",Ct),s.removeEventListener("selectend",Ct),s.removeEventListener("squeeze",Ct),s.removeEventListener("squeezestart",Ct),s.removeEventListener("squeezeend",Ct),s.removeEventListener("end",pt),s.removeEventListener("inputsourceschange",xt);for(let et=0;et<N.length;et++){let Zt=R[et];Zt!==null&&(R[et]=null,N[et].disconnect(Zt))}bt=null,ft=null,p.reset();for(let et in _)delete _[et];if(t.setRenderTarget(P),x=null,m=null,f=null,s=null,M=null,_e.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(v.width,v.height,!1),G!==null){let et=G.camera;et.fov=G.fov,et.zoom=G.zoom,et.updateProjectionMatrix(),G=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){o=et,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||r},this.setReferenceSpace=function(et){h=et},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(P=t.getRenderTarget(),s.addEventListener("select",Ct),s.addEventListener("selectstart",Ct),s.addEventListener("selectend",Ct),s.addEventListener("squeeze",Ct),s.addEventListener("squeezestart",Ct),s.addEventListener("squeezeend",Ct),s.addEventListener("end",pt),s.addEventListener("inputsourceschange",xt),A.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(v),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,xe=null,te=null;A.depth&&(te=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,le=A.stencil?ys:fs,xe=A.stencil?Qs:Xi);let fe={colorFormat:e.RGBA8,depthFormat:te,scaleFactor:o};f=this.getBinding(),m=f.createProjectionLayer(fe),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),M=new Ei(m.textureWidth,m.textureHeight,{format:Yi,type:wi,depthTexture:new ms(m.textureWidth,m.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{let le={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(s,e,le),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),M=new Ei(x.framebufferWidth,x.framebufferHeight,{format:Yi,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),h=null,r=await s.requestReferenceSpace(a),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function xt(et){for(let Zt=0;Zt<et.removed.length;Zt++){let le=et.removed[Zt],xe=R.indexOf(le);xe>=0&&(R[xe]=null,N[xe].disconnect(le))}for(let Zt=0;Zt<et.added.length;Zt++){let le=et.added[Zt],xe=R.indexOf(le);if(xe===-1){for(let fe=0;fe<N.length;fe++)if(fe>=R.length){R.push(le),xe=fe;break}else if(R[fe]===null){R[fe]=le,xe=fe;break}if(xe===-1)break}let te=N[xe];te&&te.connect(le)}}function Mt(et,Zt){Zt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(Zt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let Zt=et.near,le=et.far;p.texture!==null&&(p.depthNear>0&&(Zt=p.depthNear),p.depthFar>0&&(le=p.depthFar)),W.near=st.near=B.near=Zt,W.far=st.far=B.far=le,(bt!==W.near||ft!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),bt=W.near,ft=W.far),W.layers.mask=et.layers.mask|6,B.layers.mask=W.layers.mask&-5,st.layers.mask=W.layers.mask&-3;let xe=et.parent,te=W.cameras;Mt(W,xe);for(let fe=0;fe<te.length;fe++)Mt(te[fe],xe);W.projectionMatrix.copy(B.projectionMatrix),W.projectionMatrixInverse.copy(B.projectionMatrixInverse),G===null&&et.isPerspectiveCamera&&(G={camera:et,fov:et.fov,zoom:et.zoom}),Ut(et,W,xe)};function Ut(et,Zt,le){le===null?et.matrix.copy(Zt.matrixWorld):(et.matrix.copy(le.matrixWorld),et.matrix.invert(),et.matrix.multiply(Zt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(Zt.projectionMatrix),et.projectionMatrixInverse.copy(Zt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Ja*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(m===null&&x===null))return c},this.setFoveation=function(et){c=et,m!==null&&(m.fixedFoveation=et),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=et)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(W)},this.getCameraTexture=function(et){return _[et]};let Qt=null;function ne(et,Zt){if(d=Zt.getViewerPose(h||r),y=Zt,d!==null){let le=d.views;x!==null&&(t.setRenderTargetFramebuffer(M,x.framebuffer),t.setRenderTarget(M));let xe=!1;le.length!==W.cameras.length&&(W.cameras.length=0,xe=!0);for(let kt=0;kt<le.length;kt++){let k=le[kt],vt=null;if(x!==null)vt=x.getViewport(k);else{let ht=f.getViewSubImage(m,k);vt=ht.viewport,kt===0&&(t.setRenderTargetTextures(M,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(M))}let K=at[kt];K===void 0&&(K=new oi,K.layers.enable(kt),K.viewport=new Sn,at[kt]=K),K.matrix.fromArray(k.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(k.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(vt.x,vt.y,vt.width,vt.height),kt===0&&(W.matrix.copy(K.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),xe===!0&&W.cameras.push(K)}let te=s.enabledFeatures;if(te&&te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){f=n.getBinding();let kt=f.getDepthInformation(le[0]);kt&&kt.isValid&&kt.texture&&p.init(kt,s.renderState)}if(te&&te.includes("camera-access")&&b){t.state.unbindTexture(),f=n.getBinding();for(let kt=0;kt<le.length;kt++){let k=le[kt].camera;if(k){let vt=_[k];vt||(vt=new wo,_[k]=vt);let K=f.getCameraImage(k);vt.sourceTexture=K}}}}for(let le=0;le<N.length;le++){let xe=R[le],te=N[le];xe!==null&&te!==void 0&&te.update(xe,Zt,h||r)}Qt&&Qt(et,Zt),Zt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Zt}),y=null}let _e=new Cf;_e.setAnimationLoop(ne),this.setAnimationLoop=function(et){Qt=et},this.dispose=function(){}}},oy=new un,Bf=new $e;Bf.set(-1,0,0,0,1,0,0,0,1);function ay(i,t){function e(p,_){p.matrixAutoUpdate===!0&&p.updateMatrix(),_.value.copy(p.matrix)}function n(p,_){_.color.getRGB(p.fogColor.value,Hh(i)),_.isFog?(p.fogNear.value=_.near,p.fogFar.value=_.far):_.isFogExp2&&(p.fogDensity.value=_.density)}function s(p,_,A,P,M){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?o(p,_):_.isMeshLambertMaterial?(o(p,_),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(o(p,_),f(p,_)):_.isMeshPhongMaterial?(o(p,_),d(p,_),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(o(p,_),m(p,_),_.isMeshPhysicalMaterial&&x(p,_,M)):_.isMeshMatcapMaterial?(o(p,_),y(p,_)):_.isMeshDepthMaterial?o(p,_):_.isMeshDistanceMaterial?(o(p,_),b(p,_)):_.isMeshNormalMaterial?o(p,_):_.isLineBasicMaterial?(r(p,_),_.isLineDashedMaterial&&a(p,_)):_.isPointsMaterial?c(p,_,A,P):_.isSpriteMaterial?h(p,_):_.isShadowMaterial?(p.color.value.copy(_.color),p.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(p,_){p.opacity.value=_.opacity,_.color&&p.diffuse.value.copy(_.color),_.emissive&&p.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(p.map.value=_.map,e(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,e(_.alphaMap,p.alphaMapTransform)),_.bumpMap&&(p.bumpMap.value=_.bumpMap,e(_.bumpMap,p.bumpMapTransform),p.bumpScale.value=_.bumpScale,_.side===ti&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,e(_.normalMap,p.normalMapTransform),p.normalScale.value.copy(_.normalScale),_.side===ti&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,e(_.displacementMap,p.displacementMapTransform),p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias),_.emissiveMap&&(p.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,p.emissiveMapTransform)),_.specularMap&&(p.specularMap.value=_.specularMap,e(_.specularMap,p.specularMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest);let A=t.get(_),P=A.envMap,M=A.envMapRotation;P&&(p.envMap.value=P,p.envMapRotation.value.setFromMatrix4(oy.makeRotationFromEuler(M)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Bf),p.reflectivity.value=_.reflectivity,p.ior.value=_.ior,p.refractionRatio.value=_.refractionRatio),_.lightMap&&(p.lightMap.value=_.lightMap,p.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,p.lightMapTransform)),_.aoMap&&(p.aoMap.value=_.aoMap,p.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,p.aoMapTransform))}function r(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,_.map&&(p.map.value=_.map,e(_.map,p.mapTransform))}function a(p,_){p.dashSize.value=_.dashSize,p.totalSize.value=_.dashSize+_.gapSize,p.scale.value=_.scale}function c(p,_,A,P){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.size.value=_.size*A,p.scale.value=P*.5,_.map&&(p.map.value=_.map,e(_.map,p.uvTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,e(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function h(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.rotation.value=_.rotation,_.map&&(p.map.value=_.map,e(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,e(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function d(p,_){p.specular.value.copy(_.specular),p.shininess.value=Math.max(_.shininess,1e-4)}function f(p,_){_.gradientMap&&(p.gradientMap.value=_.gradientMap)}function m(p,_){p.metalness.value=_.metalness,_.metalnessMap&&(p.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,p.metalnessMapTransform)),p.roughness.value=_.roughness,_.roughnessMap&&(p.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,p.roughnessMapTransform)),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)}function x(p,_,A){p.ior.value=_.ior,_.diffuseRoughness>0&&(p.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=_.diffuseRoughnessMap,e(_.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),_.sheen>0&&(p.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),p.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(p.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,p.sheenColorMapTransform)),_.sheenRoughnessMap&&(p.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,p.sheenRoughnessMapTransform))),_.clearcoat>0&&(p.clearcoat.value=_.clearcoat,p.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(p.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,p.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(p.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ti&&p.clearcoatNormalScale.value.negate())),_.dispersion>0&&(p.dispersion.value=_.dispersion),_.retroreflectivity>0&&(p.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(p.iridescence.value=_.iridescence,p.iridescenceIOR.value=_.iridescenceIOR,p.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(p.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,p.iridescenceMapTransform)),_.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),_.transmission>0&&(p.transmission.value=_.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),_.transmissionMap&&(p.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,p.transmissionMapTransform)),p.thickness.value=_.thickness,_.thicknessMap&&(p.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=_.attenuationDistance,p.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(p.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(p.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=_.specularIntensity,p.specularColor.value.copy(_.specularColor),_.specularColorMap&&(p.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,p.specularColorMapTransform)),_.specularIntensityMap&&(p.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,_){_.matcap&&(p.matcap.value=_.matcap)}function b(p,_){let A=t.get(_).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ly(i,t,e,n){let s={},o={};function r(A,P){let M=P.program;n.uniformBlockBinding(A,M,s[A.id])}function a(A,P){let M=s[A.id];M===void 0&&(y(A),M=c(A),s[A.id]=M,A.addEventListener("dispose",p));let N=P.program;n.updateUBOMapping(A,N);let R=t.render.frame;o[A.id]!==R&&(h(A),o[A.id]=R)}function c(A){let P=i.createBuffer(),M=A.__size,N=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,M,N),i.bindBuffer(i.UNIFORM_BUFFER,null),P}function h(A){let P=s[A.id],M=A.uniforms,N=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let R=0,v=M.length;R<v;R++){let C=M[R];if(Array.isArray(C))for(let G=0,B=C.length;G<B;G++)d(C[G],R,G,N);else d(C,R,0,N)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(A,P,M,N){if(m(A,P,M,N)===!0){let R=A.__offset,v=A.value;if(Array.isArray(v)){let C=0;for(let G=0;G<v.length;G++){let B=v[G],st=b(B,!0);f(B,A.__data,C),C+=st.storage/Float32Array.BYTES_PER_ELEMENT}}else f(v,A.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,R,A.__data)}}function f(A,P,M){typeof A=="number"||typeof A=="boolean"?P[M]=A:A.isMatrix3?(P[M]=A.elements[0],P[M+1]=A.elements[1],P[M+2]=A.elements[2],P[M+3]=0,P[M+4]=A.elements[3],P[M+5]=A.elements[4],P[M+6]=A.elements[5],P[M+7]=0,P[M+8]=A.elements[6],P[M+9]=A.elements[7],P[M+10]=A.elements[8],P[M+11]=0):ArrayBuffer.isView(A)?P.set(A.subarray(0,P.length-M),M):A.toArray(P,M)}function m(A,P,M,N){let R=A.value,v=P+"_"+M;if(Array.isArray(R)){N[v]===void 0&&(N[v]=[]);let C=N[v],G=!1;for(let B=0;B<R.length;B++)x(R[B],C,B)===!0&&(G=!0);return G}return x(R,N,v)}function x(A,P,M){if(P[M]===void 0)return typeof A=="number"||typeof A=="boolean"?P[M]=A:ArrayBuffer.isView(A)?P[M]=A.slice():P[M]=A.clone(),!0;{let N=P[M];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return P[M]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(N.equals(A)===!1)return N.copy(A),!0}}return!1}function y(A){let P=A.uniforms,M=0,N=16;for(let v=0,C=P.length;v<C;v++){let G=Array.isArray(P[v])?P[v]:[P[v]];for(let B=0,st=G.length;B<st;B++){let at=G[B],W=Array.isArray(at.value)?at.value:[at.value],bt=Array.isArray(P[v])||Array.isArray(at.value),ft=M;for(let pt=0,xt=W.length;pt<xt;pt++){let Mt=W[pt],Ut=b(Mt,bt),Qt=M%N,ne=Qt%Ut.boundary,_e=Qt+ne;M+=ne,_e!==0&&N-_e<Ut.storage&&(M+=N-_e),pt===0&&(ft=M),M+=Ut.storage}let Ct=at.type==="int"?Int32Array:at.type==="uint"?Uint32Array:Float32Array;at.__data=new Ct((M-ft)/Float32Array.BYTES_PER_ELEMENT),at.__offset=ft}}let R=M%N;return R>0&&(M+=N-R),A.__size=M,A.__cache={},this}function b(A,P){let M={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(M.boundary=4,M.storage=4):A.isVector2?(M.boundary=8,M.storage=8):A.isVector3||A.isColor?(M.boundary=16,M.storage=12):A.isVector4?(M.boundary=16,M.storage=16):A.isMatrix3?(M.boundary=16,M.storage=48):A.isMatrix4?(M.boundary=16,M.storage=64):A.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(M.boundary=16,M.storage=A.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",A),P===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function p(A){let P=A.target;P.removeEventListener("dispose",p),i.deleteBuffer(s[P.id]),delete s[P.id],delete o[P.id]}function _(){for(let A in s)i.deleteBuffer(s[A]);s={},o={}}return{bind:r,update:a,dispose:_}}var cy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),is=null;function hy(){return is===null&&(is=new xo(cy,16,16,Ds,qi),is.name="DFG_LUT",is.minFilter=pi,is.magFilter=pi,is.wrapS=Ki,is.wrapT=Ki,is.generateMipmaps=!1,is.needsUpdate=!0),is}var gc=class{constructor(t={}){let{canvas:e=Wd(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:x=wi}=t;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=r;let b=x,p=new Set([Dl,Ll,zl]),_=new Set([wi,Xi,Nr,Qs,Fl,Pl]),A=new Uint32Array(4),P=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[],intensity:[]},N=null,R=null,v=[],C=[],G=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ns,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let B=this,st=!1,at=null,W=null,bt=null,ft=null;this._outputColorSpace=fi;let Ct=0,pt=0,xt=null,Mt=-1,Ut=null,Qt=new Sn,ne=new Sn,_e=null,et=new Ve(0),Zt=0,le=e.width,xe=e.height,te=1,fe=null,De=null,kt=new Sn(0,0,le,xe),k=new Sn(0,0,le,xe),vt=!1,K=new Rs,ht=new tl,X=!1,mt=!1,rt=new un,gt=new J,St=new Sn,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},It=!1;function ce(){return xt===null?te:1}let tt=n;function we(g,w){return e.getContext(g,w)}let ot,ct,j,ie,qt,Jt,l,u,T,I,H,it,Q,wt,Tt,jt,re,Y,lt,Ht,Yt,dt,se;try{let g={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Al}`),e.addEventListener("webglcontextlost",ke,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",he,!1),tt===null){let w="webgl2";if(tt=we(w,g),tt===null)throw we(w)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Me()}catch(g){throw e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",he,!1),Ye("WebGLRenderer: "+g.message),g}function Me(){ot=new Mx(tt),ot.init(),Yt=new iy(tt,ot),ct=new hx(tt,ot,t,Yt),j=new ey(tt,ot),ct.reversedDepthBuffer&&m&&j.buffers.depth.setReversed(!0),W=tt.createFramebuffer(),bt=tt.createFramebuffer(),ft=tt.createFramebuffer(),ie=new bx(tt),qt=new V1,Jt=new ny(tt,ot,j,qt,ct,Yt,ie),l=new vx(B),u=new Ep(tt),dt=new lx(tt,u),T=new wx(tt,u,ie,dt),I=new Ex(tt,T,u,dt,ie),Y=new Ax(tt,ct,Jt),Tt=new ux(qt),H=new k1(B,l,ot,ct,dt,Tt),it=new ay(B,qt),Q=new G1,wt=new J1(ot),re=new ax(B,l,j,I,y,c),jt=new ty(B,I,ct),se=new ly(tt,ie,ct,j),lt=new cx(tt,ot,ie),Ht=new Sx(tt,ot,ie),ie.programs=H.programs,B.capabilities=ct,B.extensions=ot,B.properties=qt,B.renderLists=Q,B.shadowMap=jt,B.state=j,B.info=ie}b!==wi&&(G=new Cx(b,e.width,e.height,a,s,o));let oe=new ou(B,tt);this.xr=oe,this.getContext=function(){return tt},this.getContextAttributes=function(){return tt.getContextAttributes()},this.forceContextLoss=function(){let g=ot.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){let g=ot.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(g){g!==void 0&&(te=g,this.setSize(le,xe,!1))},this.getSize=function(g){return g.set(le,xe)},this.setSize=function(g,w,F=!0){if(oe.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}le=g,xe=w,e.width=Math.floor(g*te),e.height=Math.floor(w*te),F===!0&&(e.style.width=g+"px",e.style.height=w+"px"),G!==null&&G.setSize(e.width,e.height),this.setViewport(0,0,g,w)},this.getDrawingBufferSize=function(g){return g.set(le*te,xe*te).floor()},this.setDrawingBufferSize=function(g,w,F){le=g,xe=w,te=F,e.width=Math.floor(g*F),e.height=Math.floor(w*F),this.setViewport(0,0,g,w)},this.setEffects=function(g){if(b===wi){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(g){for(let w=0;w<g.length;w++)if(g[w].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}G.setEffects(g||[])},this.getCurrentViewport=function(g){return g.copy(Qt)},this.getViewport=function(g){return g.copy(kt)},this.setViewport=function(g,w,F,z){g.isVector4?kt.set(g.x,g.y,g.z,g.w):kt.set(g,w,F,z),j.viewport(Qt.copy(kt).multiplyScalar(ce()).round())},this.getScissor=function(g){return g.copy(k)},this.setScissor=function(g,w,F,z){g.isVector4?k.set(g.x,g.y,g.z,g.w):k.set(g,w,F,z),j.scissor(ne.copy(k).multiplyScalar(ce()).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(g){j.setScissorTest(vt=g)},this.setOpaqueSort=function(g){fe=g},this.setTransparentSort=function(g){De=g},this.getClearColor=function(g){return g.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(g=!0,w=!0,F=!0){let z=0;if(g){let L=!1;if(xt!==null){let Z=xt.texture.format;L=p.has(Z)}if(L){let Z=xt.texture.type,ut=_.has(Z),yt=re.getClearColor(),_t=re.getClearAlpha(),E=yt.r,U=yt.g,O=yt.b;ut?(A[0]=E,A[1]=U,A[2]=O,A[3]=_t,tt.clearBufferuiv(tt.COLOR,0,A)):(P[0]=E,P[1]=U,P[2]=O,P[3]=_t,tt.clearBufferiv(tt.COLOR,0,P))}else z|=tt.COLOR_BUFFER_BIT}w&&(z|=tt.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),F&&(z|=tt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&tt.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(g){g.setRenderer(this),at=g},this.dispose=function(){e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",he,!1),re.dispose(),Q.dispose(),wt.dispose(),Jt.dispose(),qt.dispose(),l.dispose(),I.dispose(),T.dispose(),dt.dispose(),se.dispose(),H.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ui),oe.removeEventListener("sessionend",Oi),xi.stop()};function ke(g){g.preventDefault(),lo("WebGLRenderer: Context Lost."),st=!0}function Te(){lo("WebGLRenderer: Context Restored."),st=!1;let g=ie.autoReset,w=jt.enabled,F=jt.autoUpdate,z=jt.needsUpdate,L=jt.type;Me(),ie.autoReset=g,jt.enabled=w,jt.autoUpdate=F,jt.needsUpdate=z,jt.type=L}function he(g){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function Ne(g){let w=g.target;w.removeEventListener("dispose",Ne),sn(w)}function sn(g){fn(g),qt.remove(g)}function fn(g){let w=qt.get(g).programs;w!==void 0&&(w.forEach(function(F){H.releaseProgram(F)}),g.isShaderMaterial&&H.releaseShaderCache(g))}this.renderBufferDirect=function(g,w,F,z,L,Z){w===null&&(w=Lt);let ut=L.isMesh&&L.matrixWorld.determinantAffine()<0,yt=Nt(g,w,F,z,L);j.setMaterial(z,ut);let _t=F.index,E=1;if(z.wireframe===!0){if(_t=T.getWireframeAttribute(F),_t===void 0)return;E=2}let U=F.drawRange,O=F.attributes.position,D=U.start*E,nt=(U.start+U.count)*E;Z!==null&&(D=Math.max(D,Z.start*E),nt=Math.min(nt,(Z.start+Z.count)*E)),_t!==null?(D=Math.max(D,0),nt=Math.min(nt,_t.count)):O!=null&&(D=Math.max(D,0),nt=Math.min(nt,O.count));let Et=nt-D;if(Et<0||Et===1/0)return;dt.setup(L,z,yt,F,_t);let At,Bt=lt;if(_t!==null&&(At=u.get(_t),Bt=Ht,Bt.setIndex(At)),L.isMesh)z.wireframe===!0?(j.setLineWidth(z.wireframeLinewidth*ce()),Bt.setMode(tt.LINES)):Bt.setMode(tt.TRIANGLES);else if(L.isLine){let Xt=z.linewidth;Xt===void 0&&(Xt=1),j.setLineWidth(Xt*ce()),L.isLineSegments?Bt.setMode(tt.LINES):L.isLineLoop?Bt.setMode(tt.LINE_LOOP):Bt.setMode(tt.LINE_STRIP)}else L.isPoints?Bt.setMode(tt.POINTS):L.isSprite&&Bt.setMode(tt.TRIANGLES);if(L.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))Bt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let Xt=L._multiDrawStarts,Rt=L._multiDrawCounts,Wt=L._multiDrawCount,Pt=_t?u.get(_t).bytesPerElement:1,Dt=qt.get(z).currentProgram.getUniforms();for(let $t=0;$t<Wt;$t++)Dt.setValue(tt,"_gl_DrawID",$t),Bt.render(Xt[$t]/Pt,Rt[$t])}else if(L.isInstancedMesh)Bt.renderInstances(D,Et,L.count);else if(F.isInstancedBufferGeometry){let Xt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Rt=Math.min(F.instanceCount,Xt);Bt.renderInstances(D,Et,Rt)}else Bt.render(D,Et)};function hi(g,w,F,z){at!==null&&g.isNodeMaterial&&at.setObject(z,g),X===!0&&Tt.setState(g,F,!1),g.transparent===!0&&g.side===We&&g.forceSinglePass===!1?(g.side=ti,g.needsUpdate=!0,Si(g,w,z),g.side=Ls,g.needsUpdate=!0,Si(g,w,z),g.side=We):Si(g,w,z)}this.compile=function(g,w,F=null){F===null&&(F=g),at!==null&&at.renderStart(g,w,F),R=wt.get(F),R.init(w),C.push(R),F.traverseVisible(function(L){L.isLight&&L.layers.test(w.layers)&&(R.pushLight(L),L.castShadow&&R.pushShadow(L))}),g!==F&&g.traverseVisible(function(L){L.isLight&&L.layers.test(w.layers)&&(R.pushLight(L),L.castShadow&&R.pushShadow(L))}),R.setupLights(),at!==null&&at.updateLights(R.state.lightsArray),mt=this.localClippingEnabled,X=Tt.init(this.clippingPlanes,mt),X===!0&&Tt.setGlobalState(this.clippingPlanes,w),at!==null&&jt.render(R.state.shadowsArray,F,w);let z=new Set;return g.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let Z=L.material;if(Z)if(Array.isArray(Z))for(let ut=0;ut<Z.length;ut++){let yt=Z[ut];hi(yt,F,w,L),z.add(yt)}else hi(Z,F,w,L),z.add(Z)}),R=C.pop(),at!==null&&at.renderEnd(),z},this.compileAsync=function(g,w,F=null){let z=this.compile(g,w,F);return new Promise(L=>{function Z(){if(z.forEach(function(ut){let _t=qt.get(ut).currentProgram;(_t===void 0||_t.isReady())&&z.delete(ut)}),z.size===0){L(g);return}setTimeout(Z,10)}ot.get("KHR_parallel_shader_compile")!==null?Z():setTimeout(Z,10)})};let ni=null;function Ln(g){ni&&ni(g)}function ui(){xi.stop()}function Oi(){xi.start()}let xi=new Cf;xi.setAnimationLoop(Ln),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(g){ni=g,oe.setAnimationLoop(g),g===null?xi.stop():xi.start()},oe.addEventListener("sessionstart",ui),oe.addEventListener("sessionend",Oi),this.render=function(g,w){if(w!==void 0&&w.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(st===!0)return;at!==null&&at.renderStart(g,w);let F=oe.enabled===!0&&oe.isPresenting===!0,z=G!==null&&(xt===null||F)&&G.begin(B,xt);if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(G===null||G.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(w),w=oe.getCamera()),g.isScene===!0&&g.onBeforeRender(B,g,w,xt),R=wt.get(g,C.length),R.init(w),R.state.textureUnits=Jt.getTextureUnits(),C.push(R),rt.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),w.isArrayCamera?ht.setFromArrayCamera(w):K.setFromProjectionMatrix(rt,zi,w.reversedDepth),mt=this.localClippingEnabled,X=Tt.init(this.clippingPlanes,mt),N=Q.get(g,v.length),N.init(),v.push(N),this.info.render.frame++,oe.enabled===!0&&oe.isPresenting===!0){let ut=B.xr.getDepthSensingMesh();ut!==null&&yi(ut,w,-1/0,B.sortObjects)}yi(g,w,0,B.sortObjects),N.finish(),at!==null&&at.updateLights(R.state.lightsArray),B.sortObjects===!0&&N.sort(fe,De),It=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,It&&re.addToRenderList(N,g),this.info.autoReset===!0&&this.info.reset(),X===!0&&Tt.beginShadows();let L=R.state.shadowsArray;if(jt.render(L,g,w),X===!0&&Tt.endShadows(),(z&&G.hasRenderPass())===!1){let ut=N.opaque,yt=N.transmissive;if(R.setupLights(),w.isArrayCamera){let _t=w.cameras;if(yt.length>0)for(let E=0,U=_t.length;E<U;E++){let O=_t[E];wn(ut,yt,g,O)}It&&re.render(g);for(let E=0,U=_t.length;E<U;E++){let O=_t[E];hn(N,g,O,O.viewport)}}else yt.length>0&&wn(ut,yt,g,w),It&&re.render(g),hn(N,g,w)}xt!==null&&pt===0&&(Jt.updateMultisampleRenderTarget(xt),Jt.updateRenderTargetMipmap(xt)),z&&G.end(B),g.isScene===!0&&g.onAfterRender(B,g,w),dt.resetDefaultState(),Mt=-1,Ut=null,C.pop(),C.length>0?(R=C[C.length-1],Jt.setTextureUnits(R.state.textureUnits),X===!0&&Tt.setGlobalState(B.clippingPlanes,R.state.camera)):R=null,v.pop(),v.length>0?N=v[v.length-1]:N=null,at!==null&&at.renderEnd()};function yi(g,w,F,z){if(g.visible===!1)return;if(g.layers.test(w.layers)){if(g.isGroup)F=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(w);else if(g.isLight)R.pushLight(g),g.castShadow&&R.pushShadow(g);else if(g.isSprite){let ut=w.isArrayCamera?ht:K;if(!g.frustumCulled||g.intersectsFrustum(ut)){z&&St.setFromMatrixPosition(g.matrixWorld).applyMatrix4(rt);let yt=I.update(g),_t=g.material;_t.visible&&N.push(g,yt,_t,F,St.z,null,w)}}else if(g.isMesh||g.isLine||g.isPoints){let ut=w.isArrayCamera?ht:K;if(!g.frustumCulled||g.intersectsFrustum(ut)){let yt=I.update(g),_t=g.material;if(z&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),St.copy(g.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),St.copy(yt.boundingSphere.center)),St.applyMatrix4(g.matrixWorld).applyMatrix4(rt)),Array.isArray(_t)){let E=yt.groups;for(let U=0,O=E.length;U<O;U++){let D=E[U],nt=_t[D.materialIndex];nt&&nt.visible&&N.push(g,yt,nt,F,St.z,D,w)}}else _t.visible&&N.push(g,yt,_t,F,St.z,null,w)}}}let Z=g.children;for(let ut=0,yt=Z.length;ut<yt;ut++)yi(Z[ut],w,F,z)}function hn(g,w,F,z){let{opaque:L,transmissive:Z,transparent:ut}=g;R.setupLightsView(F),X===!0&&Tt.setGlobalState(B.clippingPlanes,F),z&&j.viewport(Qt.copy(z)),L.length>0&&Vn(L,w,F),Z.length>0&&Vn(Z,w,F),ut.length>0&&Vn(ut,w,F),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function wn(g,w,F,z){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[z.id]===void 0){let D=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[z.id]=new Ei(1,1,{generateMipmaps:!0,type:D?qi:wi,minFilter:xs,samples:Math.max(4,ct.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:cn.workingColorSpace})}let Z=R.state.transmissionRenderTarget[z.id],ut=z.viewport||Qt;Z.setSize(ut.z*B.transmissionResolutionScale,ut.w*B.transmissionResolutionScale);let yt=B.getRenderTarget(),_t=B.getActiveCubeFace(),E=B.getActiveMipmapLevel();B.setRenderTarget(Z),B.getClearColor(et),Zt=B.getClearAlpha(),Zt<1&&B.setClearColor(16777215,.5),B.clear(),It&&re.render(F);let U=B.toneMapping;B.toneMapping=ns;let O=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),R.setupLightsView(z),X===!0&&Tt.setGlobalState(B.clippingPlanes,z),Vn(g,F,z),Jt.updateMultisampleRenderTarget(Z),Jt.updateRenderTargetMipmap(Z),ot.has("WEBGL_multisampled_render_to_texture")===!1){let D=!1;for(let nt=0,Et=w.length;nt<Et;nt++){let At=w[nt],{object:Bt,geometry:Xt,material:Rt,group:Wt}=At;if(Rt.side===We&&Bt.layers.test(z.layers)){let Pt=Rt.side;Rt.side=ti,Rt.needsUpdate=!0,Bn(Bt,F,z,Xt,Rt,Wt),Rt.side=Pt,Rt.needsUpdate=!0,D=!0}}D===!0&&(Jt.updateMultisampleRenderTarget(Z),Jt.updateRenderTargetMipmap(Z))}B.setRenderTarget(yt,_t,E),B.setClearColor(et,Zt),O!==void 0&&(z.viewport=O),B.toneMapping=U}function Vn(g,w,F){let z=w.isScene===!0?w.overrideMaterial:null;for(let L=0,Z=g.length;L<Z;L++){let ut=g[L],{object:yt,geometry:_t,group:E}=ut,U=ut.material;U.allowOverride===!0&&z!==null&&(U=z),yt.layers.test(F.layers)&&Bn(yt,w,F,_t,U,E)}}function Bn(g,w,F,z,L,Z){at!==null&&L.isNodeMaterial&&at.setObject(g,L),g.onBeforeRender(B,w,F,z,L,Z),g.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),L.onBeforeRender(B,w,F,z,g,Z),L.transparent===!0&&L.side===We&&L.forceSinglePass===!1?(L.side=ti,L.needsUpdate=!0,B.renderBufferDirect(F,w,z,L,g,Z),L.side=Ls,L.needsUpdate=!0,B.renderBufferDirect(F,w,z,L,g,Z),L.side=We):B.renderBufferDirect(F,w,z,L,g,Z),g.onAfterRender(B,w,F,z,L,Z)}function Ms(g){let w=0;for(let F of g)F.texture!==null&&w++;return w}function Si(g,w,F){w.isScene!==!0&&(w=Lt);let z=qt.get(g),L=R.state.lights,Z=R.state.shadowsArray,ut=L.state.version,yt=H.getParameters(g,L.state,Z,w,F,R.state.lightProbeGridArray),_t=H.getProgramCacheKey(yt),E=z.programs;z.environment=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?w.environment:null,z.fog=w.fog;let U=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap;z.envMap=l.get(g.envMap||z.environment,U),z.envMapRotation=z.environment!==null&&g.envMap===null?w.environmentRotation:g.envMapRotation,E===void 0&&(g.addEventListener("dispose",Ne),E=new Map,z.programs=E,z.programVariants=new Map);let O=E.get(_t);if(O!==void 0){if(z.currentProgram===O&&z.lightsStateVersion===ut)return zt(g,yt),O}else yt.uniforms=H.getUniforms(g),at!==null&&g.isNodeMaterial&&at.build(g,F,yt),g.onBeforeCompile(yt,B),O=H.acquireProgram(yt,_t),E.set(_t,O),z.uniforms=yt.uniforms;let D=z.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(D.clippingPlanes=Tt.uniform),zt(g,yt),z.needsLights=S(g),z.lightsStateVersion=ut,z.needsLights&&(D.ambientLightColor.value=L.state.ambient,D.sunLights.value=L.state.sun,D.sunLightShadows.value=L.state.sunShadow,D.directionalLights.value=L.state.directional,D.directionalLightShadows.value=L.state.directionalShadow,D.spotLights.value=L.state.spot,D.spotLightShadows.value=L.state.spotShadow,D.rectAreaLights.value=L.state.rectArea,D.ltc_1.value=L.state.rectAreaLTC1,D.ltc_2.value=L.state.rectAreaLTC2,D.pointLights.value=L.state.point,D.pointLightShadows.value=L.state.pointShadow,D.hemisphereLights.value=L.state.hemi,D.sunShadowMatrix.value=L.state.sunShadowMatrix,D.sunShadowCascade.value=L.state.sunShadowCascade,D.directionalShadowMatrix.value=L.state.directionalShadowMatrix,D.spotLightMatrix.value=L.state.spotLightMatrix,D.spotLightMap.value=L.state.spotLightMap,D.pointShadowMatrix.value=L.state.pointShadowMatrix),z.numLightProbeGrids=Ms(R.state.lightProbeGridArray),z.currentProgram=O,z.uniformsList=null,O}function q(g,w,F,z,L){let Z=qt.get(g),ut=Z.currentProgram.id+","+z+","+L,yt=Z.programVariants.get(ut);return yt===void 0?(yt=Si(g,w,F),Z.programVariants.set(ut,yt)):(Z.currentProgram=yt,Z.uniformsList=null,Z.outputColorSpace=z,Z.toneMapping=L),yt}function $(g){if(g.uniformsList===null){let w=g.currentProgram.getUniforms();g.uniformsList=Ur.seqWithValue(w.seq,g.uniforms)}return g.uniformsList}function zt(g,w){let F=qt.get(g);F.outputColorSpace=w.outputColorSpace,F.batching=w.batching,F.batchingColor=w.batchingColor,F.instancing=w.instancing,F.instancingColor=w.instancingColor,F.instancingMorph=w.instancingMorph,F.skinning=w.skinning,F.morphTargets=w.morphTargets,F.morphNormals=w.morphNormals,F.morphColors=w.morphColors,F.morphTargetsCount=w.morphTargetsCount,F.numClippingPlanes=w.numClippingPlanes,F.numIntersection=w.numClipIntersection,F.vertexAlphas=w.vertexAlphas,F.vertexTangents=w.vertexTangents,F.toneMapping=w.toneMapping}function Nt(g,w,F,z,L){w.isScene!==!0&&(w=Lt),Jt.resetTextureUnits();let Z=w.fog,ut=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?w.environment:null,yt=xt===null?B.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:cn.workingColorSpace,_t=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,E=l.get(z.envMap||ut,_t),U=z.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,O=!!F.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),D=!!F.morphAttributes.position,nt=!!F.morphAttributes.normal,Et=!!F.morphAttributes.color,At=ns;z.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(At=B.toneMapping);let Bt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Xt=Bt!==void 0?Bt.length:0,Rt=qt.get(z),Wt=R.state.lights;if(X===!0&&(mt===!0||g!==Ut)){let Se=g===Ut&&z.id===Mt;Tt.setState(z,g,Se)}let Pt=!1,Dt=!1;z.version===Rt.__version?Rt.needsLights&&Rt.lightsStateVersion!==Wt.state.version||L.isBatchedMesh&&Rt.batching===!1||!L.isBatchedMesh&&Rt.batching===!0||L.isBatchedMesh&&Rt.batchingColor===!0&&L._colorsTexture===null||L.isBatchedMesh&&Rt.batchingColor===!1&&L._colorsTexture!==null||L.isInstancedMesh&&Rt.instancing===!1||!L.isInstancedMesh&&Rt.instancing===!0||L.isSkinnedMesh&&Rt.skinning===!1||!L.isSkinnedMesh&&Rt.skinning===!0||L.isInstancedMesh&&Rt.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Rt.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Rt.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Rt.instancingMorph===!1&&L.morphTexture!==null||Rt.envMap!==E||z.fog===!0&&Rt.fog!==Z||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Tt.numPlanes||Rt.numIntersection!==Tt.numIntersection)||Rt.vertexAlphas!==U||Rt.vertexTangents!==O||Rt.morphTargets!==D||Rt.morphNormals!==nt||Rt.morphColors!==Et||Rt.morphTargetsCount!==Xt||Rt.numLightProbeGrids!==Ms(R.state.lightProbeGridArray)?Pt=!0:(Rt.outputColorSpace!==yt||Rt.toneMapping!==At)&&(Dt=!0):(Pt=!0,Rt.__version=z.version);let $t=Rt.currentProgram;(Pt===!0||Dt===!0)&&($t=Dt===!0?q(z,w,L,yt,At):Si(z,w,L),at&&z.isNodeMaterial&&at.onUpdateProgram(z,$t,Rt));let pe=!1,ae=!1,be=!1,ve=$t.getUniforms(),ze=Rt.uniforms;if(j.useProgram($t.program)&&(pe=!0,ae=!0,be=!0),z.id!==Mt&&(Mt=z.id,ae=!0),pe||Ut!==g){j.buffers.depth.getReversed()&&g.reversedDepth!==!0&&(g._reversedDepth=!0,g.updateProjectionMatrix()),ve.setValue(tt,"projectionMatrix",g.projectionMatrix),ve.setValue(tt,"viewMatrix",g.matrixWorldInverse);let me=ve.map.cameraPosition;me!==void 0&&me.setValue(tt,gt.setFromMatrixPosition(g.matrixWorld)),ct.logarithmicDepthBuffer&&ve.setValue(tt,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ve.setValue(tt,"isOrthographic",g.isOrthographicCamera===!0),Ut!==g&&(Ut=g,ae=!0,be=!0)}if(Rt.needsLights&&(Wt.state.sunShadowMap.length>0&&ve.setValue(tt,"sunShadowMap",Wt.state.sunShadowMap,Jt),Wt.state.directionalShadowMap.length>0&&ve.setValue(tt,"directionalShadowMap",Wt.state.directionalShadowMap,Jt),Wt.state.spotShadowMap.length>0&&ve.setValue(tt,"spotShadowMap",Wt.state.spotShadowMap,Jt),Wt.state.pointShadowMap.length>0&&ve.setValue(tt,"pointShadowMap",Wt.state.pointShadowMap,Jt)),L.isSkinnedMesh){ve.setOptional(tt,L,"bindMatrix"),ve.setOptional(tt,L,"bindMatrixInverse");let Se=L.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),ve.setValue(tt,"boneTexture",Se.boneTexture,Jt))}L.isBatchedMesh&&(ve.setOptional(tt,L,"batchingTexture"),ve.setValue(tt,"batchingTexture",L._matricesTexture,Jt),ve.setOptional(tt,L,"batchingIdTexture"),ve.setValue(tt,"batchingIdTexture",L._indirectTexture,Jt),ve.setOptional(tt,L,"batchingColorTexture"),L._colorsTexture!==null&&ve.setValue(tt,"batchingColorTexture",L._colorsTexture,Jt));let Ae=F.morphAttributes;if((Ae.position!==void 0||Ae.normal!==void 0||Ae.color!==void 0)&&Y.update(L,F,$t),(ae||Rt.receiveShadow!==L.receiveShadow)&&(Rt.receiveShadow=L.receiveShadow,ve.setValue(tt,"receiveShadow",L.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&w.environment!==null&&(ze.envMapIntensity.value=w.environmentIntensity),ze.dfgLUT!==void 0&&(ze.dfgLUT.value=hy()),ae){if(ve.setValue(tt,"toneMappingExposure",B.toneMappingExposure),Rt.needsLights&&Kt(ze,be),Z&&z.fog===!0&&it.refreshFogUniforms(ze,Z),it.refreshMaterialUniforms(ze,z,te,xe,R.state.transmissionRenderTarget[g.id]),Rt.needsLights&&Rt.numLightProbeGrids>0){let Se=M,me=0;for(let ge of R.state.lightProbeGridArray)ge.texture!==null&&(Se.textures[me]=ge.texture,Se.min[me]=ge.boundingBox.min,Se.max[me]=ge.boundingBox.max,Se.resolution[me]=ge.resolution,Se.intensity[me]=ge.intensity,me++);for(let ge in Se)Se[ge].length=me;ze.probesSH.value=Se.textures,ze.probesMin.value=Se.min,ze.probesMax.value=Se.max,ze.probesResolution.value=Se.resolution,ze.probesIntensity.value=Se.intensity}Ur.upload(tt,$(Rt),ze,Jt)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ur.upload(tt,$(Rt),ze,Jt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ve.setValue(tt,"center",L.center),ve.setValue(tt,"modelViewMatrix",L.modelViewMatrix),ve.setValue(tt,"normalMatrix",L.normalMatrix),ve.setValue(tt,"modelMatrix",L.matrixWorld),z.uniformsGroups!==void 0){let Se=z.uniformsGroups;for(let me=0,ge=Se.length;me<ge;me++){let Qe=Se[me];se.update(Qe,$t),se.bind(Qe,$t)}}return $t}function Kt(g,w){g.ambientLightColor.needsUpdate=w,g.sunLights.needsUpdate=w,g.sunLightShadows.needsUpdate=w,g.directionalLights.needsUpdate=w,g.directionalLightShadows.needsUpdate=w,g.pointLights.needsUpdate=w,g.pointLightShadows.needsUpdate=w,g.spotLights.needsUpdate=w,g.spotLightShadows.needsUpdate=w,g.rectAreaLights.needsUpdate=w,g.hemisphereLights.needsUpdate=w}function S(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return Ct},this.getActiveMipmapLevel=function(){return pt},this.getRenderTarget=function(){return xt},this.setRenderTargetTextures=function(g,w,F){let z=qt.get(g);z.__autoAllocateDepthBuffer=g.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),qt.get(g.texture).__webglTexture=w,qt.get(g.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:F,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(g,w){let F=qt.get(g);F.__webglFramebuffer=w,F.__useDefaultFramebuffer=w===void 0},this.setRenderTarget=function(g,w=0,F=0){xt=g,Ct=w,pt=F;let z=null,L=!1,Z=!1;if(g){let yt=qt.get(g);if(yt.__useDefaultFramebuffer!==void 0){j.bindFramebuffer(tt.FRAMEBUFFER,yt.__webglFramebuffer),Qt.copy(g.viewport),ne.copy(g.scissor),_e=g.scissorTest,j.viewport(Qt),j.scissor(ne),j.setScissorTest(_e),Mt=-1;return}else if(yt.__webglFramebuffer===void 0)Jt.setupRenderTarget(g);else if(yt.__hasExternalTextures)Jt.rebindTextures(g,qt.get(g.texture).__webglTexture,qt.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){let U=g.depthTexture;if(yt.__boundDepthTexture!==U){if(U!==null&&qt.has(U)&&(g.width!==U.image.width||g.height!==U.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Jt.setupDepthRenderbuffer(g)}}let _t=g.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(Z=!0);let E=qt.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(E[w])?z=E[w][F]:z=E[w],L=!0):g.samples>0&&Jt.useMultisampledRTT(g)===!1?z=qt.get(g).__webglMultisampledFramebuffer:Array.isArray(E)?z=E[F]:z=E,Qt.copy(g.viewport),ne.copy(g.scissor),_e=g.scissorTest}else Qt.copy(kt).multiplyScalar(te).floor(),ne.copy(k).multiplyScalar(te).floor(),_e=vt;if(F!==0&&(z=W),j.bindFramebuffer(tt.FRAMEBUFFER,z)&&j.drawBuffers(g,z),j.viewport(Qt),j.scissor(ne),j.setScissorTest(_e),L){let yt=qt.get(g.texture);tt.framebufferTexture2D(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_CUBE_MAP_POSITIVE_X+w,yt.__webglTexture,F)}else if(Z){let yt=w;for(let _t=0;_t<g.textures.length;_t++){let E=qt.get(g.textures[_t]);tt.framebufferTextureLayer(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0+_t,E.__webglTexture,F,yt)}}else if(g!==null&&F!==0){let yt=qt.get(g.texture);tt.framebufferTexture2D(tt.FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_2D,yt.__webglTexture,F)}Mt=-1};function V(g){let w=qt.get(g);return(w.__readFormat!==g.format||w.__readType!==g.type)&&(w.__readFormat=g.format,w.__readType=g.type,w.__formatReadable=ct.textureFormatReadable(g.format),w.__typeReadable=ct.textureTypeReadable(g.type)),w}this.readRenderTargetPixels=function(g,w,F,z,L,Z,ut,yt=0){if(!(g&&g.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=qt.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&ut!==void 0&&(_t=_t[ut]),Array.isArray(_t)&&(_t=_t[0]),_t){let E=j.getBoundFramebuffer(tt.READ_FRAMEBUFFER);j.bindFramebuffer(tt.READ_FRAMEBUFFER,_t);try{let U=g.textures[yt],O=U.format,D=U.type;g.textures.length>1&&tt.readBuffer(tt.COLOR_ATTACHMENT0+yt);let nt=V(U);if(nt.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(nt.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=g.width-z&&F>=0&&F<=g.height-L&&tt.readPixels(w,F,z,L,Yt.convert(O),Yt.convert(D),Z)}finally{j.bindFramebuffer(tt.READ_FRAMEBUFFER,E)}}},this.readRenderTargetPixelsAsync=async function(g,w,F,z,L,Z,ut,yt=0){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=qt.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&ut!==void 0&&(_t=_t[ut]),Array.isArray(_t)&&(_t=_t[0]),_t)if(w>=0&&w<=g.width-z&&F>=0&&F<=g.height-L){let E=j.getBoundFramebuffer(tt.READ_FRAMEBUFFER);j.bindFramebuffer(tt.READ_FRAMEBUFFER,_t);let U=g.textures[yt],O=U.format,D=U.type;g.textures.length>1&&tt.readBuffer(tt.COLOR_ATTACHMENT0+yt);let nt=V(U);if(nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Et=tt.createBuffer();tt.bindBuffer(tt.PIXEL_PACK_BUFFER,Et),tt.bufferData(tt.PIXEL_PACK_BUFFER,Z.byteLength,tt.STREAM_READ),tt.readPixels(w,F,z,L,Yt.convert(O),Yt.convert(D),0),tt.bindBuffer(tt.PIXEL_PACK_BUFFER,null),j.bindFramebuffer(tt.READ_FRAMEBUFFER,E);let At=tt.fenceSync(tt.SYNC_GPU_COMMANDS_COMPLETE,0);return tt.flush(),await qd(tt,At,4),tt.bindBuffer(tt.PIXEL_PACK_BUFFER,Et),tt.getBufferSubData(tt.PIXEL_PACK_BUFFER,0,Z),tt.bindBuffer(tt.PIXEL_PACK_BUFFER,null),tt.deleteBuffer(Et),tt.deleteSync(At),Z}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(g,w=null,F=0){let z=Math.pow(2,-F),L=Math.floor(g.image.width*z),Z=Math.floor(g.image.height*z),ut=w!==null?w.x:0,yt=w!==null?w.y:0;Jt.setTexture2D(g,0),j.activeTexture(tt.TEXTURE0),tt.copyTexSubImage2D(tt.TEXTURE_2D,F,0,0,ut,yt,L,Z),j.unbindTexture()},this.copyTextureToTexture=function(g,w,F=null,z=null,L=0,Z=0){let ut,yt,_t,E,U,O,D,nt,Et,At=g.isCompressedTexture?g.mipmaps[Z]:g.image;if(F!==null)ut=F.max.x-F.min.x,yt=F.max.y-F.min.y,_t=F.isBox3?F.max.z-F.min.z:1,E=F.min.x,U=F.min.y,O=F.isBox3?F.min.z:0;else{let ve=Math.pow(2,-L);ut=Math.floor(g.width*ve),yt=Math.floor(g.height*ve),g.isDataArrayTexture?_t=At.depth:g.isData3DTexture?_t=Math.floor(At.depth*ve):_t=1,E=0,U=0,O=0}z!==null?(D=z.x,nt=z.y,Et=z.z):(D=0,nt=0,Et=0);let Bt=Yt.convert(w.format),Xt=Yt.convert(w.type),Rt;w.isData3DTexture?(Jt.setTexture3D(w,0),Rt=tt.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(Jt.setTexture2DArray(w,0),Rt=tt.TEXTURE_2D_ARRAY):(Jt.setTexture2D(w,0),Rt=tt.TEXTURE_2D),j.activeTexture(tt.TEXTURE0),j.pixelStorei(tt.UNPACK_FLIP_Y_WEBGL,w.flipY),j.pixelStorei(tt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),j.pixelStorei(tt.UNPACK_ALIGNMENT,w.unpackAlignment);let Wt=j.getParameter(tt.UNPACK_ROW_LENGTH),Pt=j.getParameter(tt.UNPACK_IMAGE_HEIGHT),Dt=j.getParameter(tt.UNPACK_SKIP_PIXELS),$t=j.getParameter(tt.UNPACK_SKIP_ROWS),pe=j.getParameter(tt.UNPACK_SKIP_IMAGES);j.pixelStorei(tt.UNPACK_ROW_LENGTH,At.width),j.pixelStorei(tt.UNPACK_IMAGE_HEIGHT,At.height),j.pixelStorei(tt.UNPACK_SKIP_PIXELS,E),j.pixelStorei(tt.UNPACK_SKIP_ROWS,U),j.pixelStorei(tt.UNPACK_SKIP_IMAGES,O);let ae=g.isDataArrayTexture||g.isData3DTexture,be=w.isDataArrayTexture||w.isData3DTexture;if(g.isDepthTexture){let ve=qt.get(g),ze=qt.get(w),Ae=qt.get(ve.__renderTarget),Se=qt.get(ze.__renderTarget);j.bindFramebuffer(tt.READ_FRAMEBUFFER,Ae.__webglFramebuffer),j.bindFramebuffer(tt.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let me=0;me<_t;me++)ae&&(tt.framebufferTextureLayer(tt.READ_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,qt.get(g).__webglTexture,L,O+me),tt.framebufferTextureLayer(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,qt.get(w).__webglTexture,Z,Et+me)),tt.blitFramebuffer(E,U,E+ut,U+yt,D,nt,D+ut,nt+yt,tt.DEPTH_BUFFER_BIT,tt.NEAREST);j.bindFramebuffer(tt.READ_FRAMEBUFFER,null),j.bindFramebuffer(tt.DRAW_FRAMEBUFFER,null)}else if(L!==0||g.isRenderTargetTexture||qt.has(g)){let ve=qt.get(g),ze=qt.get(w);j.bindFramebuffer(tt.READ_FRAMEBUFFER,bt),j.bindFramebuffer(tt.DRAW_FRAMEBUFFER,ft);for(let Ae=0;Ae<_t;Ae++)ae?tt.framebufferTextureLayer(tt.READ_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,ve.__webglTexture,L,O+Ae):tt.framebufferTexture2D(tt.READ_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_2D,ve.__webglTexture,L),be?tt.framebufferTextureLayer(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,ze.__webglTexture,Z,Et+Ae):tt.framebufferTexture2D(tt.DRAW_FRAMEBUFFER,tt.COLOR_ATTACHMENT0,tt.TEXTURE_2D,ze.__webglTexture,Z),L!==0?tt.blitFramebuffer(E,U,E+ut,U+yt,D,nt,D+ut,nt+yt,tt.COLOR_BUFFER_BIT,tt.NEAREST):be?tt.copyTexSubImage3D(Rt,Z,D,nt,Et+Ae,E,U,ut,yt):tt.copyTexSubImage2D(Rt,Z,D,nt,E,U,ut,yt);j.bindFramebuffer(tt.READ_FRAMEBUFFER,null),j.bindFramebuffer(tt.DRAW_FRAMEBUFFER,null)}else be?g.isDataTexture||g.isData3DTexture?tt.texSubImage3D(Rt,Z,D,nt,Et,ut,yt,_t,Bt,Xt,At.data):w.isCompressedArrayTexture?tt.compressedTexSubImage3D(Rt,Z,D,nt,Et,At.width,At.height,_t,Bt,At.data):tt.texSubImage3D(Rt,Z,D,nt,Et,ut,yt,_t,Bt,Xt,At):g.isDataTexture?tt.texSubImage2D(tt.TEXTURE_2D,Z,D,nt,ut,yt,Bt,Xt,At.data):g.isCompressedTexture?tt.compressedTexSubImage2D(tt.TEXTURE_2D,Z,D,nt,At.width,At.height,Bt,At.data):tt.texSubImage2D(tt.TEXTURE_2D,Z,D,nt,ut,yt,Bt,Xt,At);j.pixelStorei(tt.UNPACK_ROW_LENGTH,Wt),j.pixelStorei(tt.UNPACK_IMAGE_HEIGHT,Pt),j.pixelStorei(tt.UNPACK_SKIP_PIXELS,Dt),j.pixelStorei(tt.UNPACK_SKIP_ROWS,$t),j.pixelStorei(tt.UNPACK_SKIP_IMAGES,pe),Z===0&&w.generateMipmaps===!0&&w.mipmapsAutoUpdate===!0&&tt.generateMipmap(Rt),j.unbindTexture()},this.initRenderTarget=function(g){qt.get(g).__webglFramebuffer===void 0&&Jt.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?Jt.setTextureCube(g,0):g.isData3DTexture?Jt.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?Jt.setTexture2DArray(g,0):Jt.setTexture2D(g,0),j.unbindTexture()},this.resetState=function(){Ct=0,pt=0,xt=null,j.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=cn._getDrawingBufferColorSpace(t),e.unpackColorSpace=cn._getUnpackColorSpace()}};var Pe=Math.PI*2,Ee=(i,t,e)=>i<t?t:i>e?e:i,ee=(i,t,e)=>i+(t-i)*e,ue=(i,t,e)=>{let n=Ee((e-i)/(t-i),0,1);return n*n*(3-2*n)},Xe=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-e*n));function xn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var je=(i,t)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)};function Cn(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,o=t-n,r=s*s*(3-2*s),a=o*o*(3-2*o),c=je(e,n),h=je(e+1,n),d=je(e,n+1),f=je(e+1,n+1);return c+(h-c)*r+(d-c)*a+(c-h-d+f)*r*a}function yn(i,t){let e=0,n=.5,s=1;for(let o=0;o<4;o++)e+=n*Cn(i*s,t*s),s*=2.03,n*=.5;return e/.9375}var _c=new un,vc=new Qn,Of=new Li,uy=new J,Vf=new J,Tn=new Ve;function Ft(i,t){i.index&&(i=i.toNonIndexed()),i.attributes.uv&&i.deleteAttribute("uv"),i.attributes.uv1&&i.deleteAttribute("uv1");let e=i.attributes.position,n=e.count,s=new Float32Array(n*3);for(let o=0;o<n;o++)typeof t=="function"?t(Tn,e.getX(o),e.getY(o),e.getZ(o),o):Tn.set(t),s[o*3]=Tn.r,s[o*3+1]=Tn.g,s[o*3+2]=Tn.b;return i.setAttribute("color",new Ke(s,3)),i}function Vt(i,t=0,e=0,n=0,s=0,o=0,r=0,a=1,c=a,h=a){return Of.set(s,o,r),vc.setFromEuler(Of),_c.compose(uy.set(t,e,n),vc,Vf.set(a,c,h)),i.applyMatrix4(_c),i}function au(i,t,e){let n=new J().subVectors(e,t),s=n.length();return vc.setFromUnitVectors(new J(0,1,0),n.normalize()),_c.compose(new J().addVectors(t,e).multiplyScalar(.5),vc,Vf.set(1,1,1)),i.applyMatrix4(_c),s}function en(i){let t=0;for(let a of i)t+=a.attributes.position.count;let e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*3),o=0;for(let a of i)a.attributes.normal||a.computeVertexNormals(),e.set(a.attributes.position.array,o*3),n.set(a.attributes.normal.array,o*3),s.set(a.attributes.color.array,o*3),o+=a.attributes.position.count,a.dispose();let r=new tn;return r.setAttribute("position",new Ke(e,3)),r.setAttribute("normal",new Ke(n,3)),r.setAttribute("color",new Ke(s,3)),r.computeBoundingSphere(),r}var Be=(i,t,e,n)=>i.copy(Fi.set(t)).lerp(Qo.set(e),Ee(n,0,1)),Fi=new Ve,Qo=new Ve;function li(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let o=new vo(s);return o.colorSpace=fi,o.anisotropy=4,n&&(o.wrapS=o.wrapT=Cs,o.repeat.set(n[0],n[1])),o}var Pn=(i,t)=>{let e=(t-i)%Pe;return e>Math.PI&&(e-=Pe),e<-Math.PI&&(e+=Pe),e},bn=(i,t,e,n)=>i+Pn(i,t)*(1-Math.exp(-e*n)),Oe=(i,t={})=>new Fn({color:i,shininess:30,specular:"#2A2A2A",...t}),Or=i=>i.traverse(t=>{t.isMesh&&(t.castShadow=!0)});function Hf(i="#2F78DA",t="#86C4F7",e="#F8E6C8",n=new J(.62,.3,-.73)){let s=new Gt(new Ue(600,32,16),new Ui({side:ti,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ve(i)},mid:{value:new Ve(t)},hor:{value:new Ve(e)},sunDir:{value:n.clone().normalize()}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top, mid, hor, sunDir; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float y = d.y;
        vec3 c = mix(hor, mid, smoothstep(-0.03, 0.2, y)); c = mix(c, top, smoothstep(0.2, 0.8, y));
        float s = max(dot(d, sunDir), 0.0);
        c += vec3(1.0, 0.86, 0.6) * (pow(s, 10.0) * 0.35 + pow(s, 90.0) * 0.6);
        c = mix(c, vec3(1.0, 0.97, 0.86), smoothstep(0.9982, 0.9992, s));
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));return s.renderOrder=-10,s.frustumCulled=!1,s}function Gf(i){let t=new gc({canvas:i,antialias:!0,powerPreference:"high-performance"});return t.toneMapping=ko,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=Js,t}function Wf(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}var Xf=()=>li(64,64,i=>{let t=i.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,64,64)});function qf(){let i=li(256,256,(t,e,n)=>{let s=t.createImageData(e,n),o=(r,a)=>Cn(r/18,a/9)*.6+Cn(r/7,a/4)*.4;for(let r=0;r<n;r++)for(let a=0;a<e;a++){let c=o(a+1,r)-o(a-1,r),h=o(a,r+1)-o(a,r-1),d=(r*e+a)*4,f=-c*3,m=-h*3,x=Math.hypot(f,m,1);s.data[d]=(f/x*.5+.5)*255,s.data[d+1]=(m/x*.5+.5)*255,s.data[d+2]=(1/x*.5+.5)*255,s.data[d+3]=255}t.putImageData(s,0,0)},[1,1]);return i.colorSpace="",i}function Yf(i,t){!t||!t.see||(i.uniforms.uSee=t.see,i.vertexShader=`varying float vSeeZ;
`+i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
  vSeeZ = -mvPosition.z;`),i.fragmentShader=`uniform vec4 uSee; varying float vSeeZ;
`+i.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
    if (uSee.w > 0.0) {
      float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
      float sd = distance(gl_FragCoord.xy, uSee.xy) / uSee.w;
      if (vSeeZ < uSee.z - 0.7 && sd < 1.0 && ign >= smoothstep(0.5, 1.0, sd)) discard;
      if (vSeeZ < 1.2 && ign >= smoothstep(0.45, 1.2, vSeeZ)) discard;
    }`))}function Mc(i,t){let e=i.clone();return e.onBeforeCompile=n=>Yf(n,t),e.customProgramCacheKey=()=>"see"+(i.flatShading?"f":"")+i.side+(i.vertexColors?"v":""),e}function ci(i,t,e,n){let s=i.clone();return s.onBeforeCompile=o=>{Yf(o,n),o.uniforms.uTime=n.time,o.uniforms.uWind=n.wind||{value:0},o.vertexShader=`uniform float uTime; uniform float uWind;
`+o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float hh = max(0.0, transformed.y - ${e.toFixed(2)});
      float ph = 0.0;
      #ifdef USE_INSTANCING
        ph = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.23;
      #endif
      float wk = 1.0 + uWind * 6.0;
      transformed.x += ((sin(uTime * (1.25 + uWind * 3.0) + ph) + 0.35 * sin(uTime * 2.7 + ph * 1.7)) * ${t.toFixed(4)} * wk + uWind * ${(t*8).toFixed(4)}) * hh * hh;
      transformed.z += cos(uTime * (1.05 + uWind * 2.5) + ph) * ${(t*.5).toFixed(4)} * wk * hh * hh;`)},s.customProgramCacheKey=()=>"sway"+t+"_"+e+(i.flatShading?"f":"")+i.side+(n&&n.see?"see":""),s}function kr(i,t,e){let n=[],s=4.6+i()*1.6,o=new Gn([new J(0,-.2,0),new J(t*.2,s*.35,.05),new J(t*.6,s*.7,.1),new J(t,s,.12)]),r=13;for(let h=0;h<r;h++){let d=o.getPoint(h/r),f=o.getPoint((h+1)/r),m=ee(.25,.14,h/r),x=Ft(new ye(m*1.13,m*.9,1,9,1,!0),(b,p,_)=>Be(b,h%2?"#7E5E3C":"#8D6C46","#A9875C",_+.5)),y=d.distanceTo(f);Vt(x,0,0,0,0,0,0,1,y*1.04,1),au(x,d,f),n.push(x)}let a=o.getPoint(1),c=new J(0,1,0);n.push(Vt(Ft(new En(.28,1),"#6B5A2E"),a.x,a.y,a.z));for(let h=0;h<e;h++){let d=h/e*Pe+i()*.35,f=new J(Math.cos(d),0,Math.sin(d)),m=2.6+i()*.9,x=.7+i()*.6,y=new Gn([a.clone(),a.clone().addScaledVector(f,m*.3).addScaledVector(c,.55),a.clone().addScaledVector(f,m*.65).addScaledVector(c,.35-x*.2),a.clone().addScaledVector(f,m).addScaledVector(c,-x)]),b=14,p=[],_=[],A=[];for(let N=0;N<=b;N++){let R=N/b,v=y.getPoint(R),C=y.getTangent(R),G=new J().crossVectors(C,c).normalize(),B=Math.pow(Math.sin(Math.PI*Math.min(1,R*1.15)),.7)*.5*(N%2?1:.72);A.push([v,v.clone().addScaledVector(G,B).addScaledVector(c,-B*.42),v.clone().addScaledVector(G,-B).addScaledVector(c,-B*.42),R])}let P=(N,R,v)=>{p.push(N.x,N.y,N.z),Be(Tn,"#2E7A30","#6CC24A",R*.9+v*.25),_.push(Tn.r,Tn.g,Tn.b)};for(let N=0;N<b;N++){let[R,v,C,G]=A[N],[B,st,at,W]=A[N+1];P(R,G,0),P(v,G,1),P(B,W,0),P(v,G,1),P(st,W,1),P(B,W,0),P(R,G,0),P(B,W,0),P(C,G,1),P(C,G,1),P(B,W,0),P(at,W,1)}let M=new tn;M.setAttribute("position",new Ke(new Float32Array(p),3)),M.setAttribute("color",new Ke(new Float32Array(_),3)),M.computeVertexNormals(),n.push(M)}for(let h=0;h<2;h++){let d=i()*Pe;for(let f=0;f<7;f++)n.push(Vt(Ft(new En(.085,0),f%2?"#B85C1C":"#D07A26"),a.x+Math.cos(d)*.32+(i()-.5)*.16,a.y-.32-i()*.3,a.z+Math.sin(d)*.32+(i()-.5)*.16))}return en(n)}function wc(i,t,e){let n=[Ft(Vt(new ye(.12,.2,1.7,7),0,.85,0),"#7A5230")];n.push(Ft(Vt(new ye(.05,.08,.8,5),.25,1.55,0,0,0,-.7),"#7A5230"));for(let s=0;s<7;s++){let o=.62+i()*.45,r=(i()-.5)*1.3,a=2.15+i()*.9,c=(i()-.5)*1.1,h=i();n.push(Vt(Ft(new En(o,1),(d,f,m,x)=>Be(d,e[0],e[1],.25+m/o*.45+h*.3+(je(f*9,x*9)-.5)*.2)),r,a,c))}if(t)for(let s=0;s<9;s++){let o=i()*Pe,r=i()*1.3;n.push(Vt(Ft(new En(.08,1),t),Math.cos(o)*.95,2.1+Math.sin(r)*.9,Math.sin(o)*.85+.2))}return en(n)}var ta=()=>en([0,1,2,3].map(i=>Vt(Ft(new En(.42-i*.05,1),(t,e,n)=>Be(t,"#2F8A3C","#86D05C",.4+n*.9+i*.1)),(i-1.5)*.32,.3,i%2*.2))),ea=()=>Ft(new vi(.4,0),(i,t,e,n)=>Be(i,"#8C877B","#C9C4B6",.4+e*1.2+je(t*7,n*7)*.3)),Sc=()=>en([...Array(6)].map((i,t)=>{let e=t*1.1,n=.8+t%3*.22,s=Ft(new Rn(.025,n,3),(o,r,a)=>Be(o,"#3C7F35","#8CC05A",a/n+.5));return Vt(s,Math.cos(e)*.12,n/2,Math.sin(e)*.12,Math.sin(e)*.15,0,Math.cos(e)*.15),t%2?en([s,Vt(Ft(new ye(.035,.035,.16,6),"#6B4423"),Math.cos(e)*.12+Math.cos(e)*.15*n,n-.05,Math.sin(e)*.12)]):s})),na=()=>(()=>{let i=[],t=[];for(let n=0;n<5;n++){let s=n/5*Pe+.3,o=.22+n%3*.07,r=.035,a=Math.cos(s)*.05,c=Math.sin(s)*.05,h=a+Math.cos(s)*.1,d=c+Math.sin(s)*.1,f=-Math.sin(s)*r,m=Math.cos(s)*r;i.push(a-f,0,c-m,a+f,0,c+m,h,o,d);for(let x of[0,0,1])Be(Tn,"#5AA544","#B0E47A",x),t.push(Tn.r,Tn.g,Tn.b)}let e=new tn;return e.setAttribute("position",new Ke(new Float32Array(i),3)),e.setAttribute("color",new Ke(new Float32Array(t),3)),e.computeVertexNormals(),e})();var Zi={hip:.92,thigh:.42,shin:.42,ankle:.08,waist:.1,neck:.45,upper:.31,fore:.265,shW:.195,hipW:.092,height:1.72},kf={green:{shirt:"#4CB963",trim:"#D9F7D2",pants:"#34507A",shoes:"#4A3324",hair:"#2B1D14"},orange:{shirt:"#FF9A3A",trim:"#FFE2BC",pants:"#5B4636",shoes:"#33261D",hair:"#3A2416"},ghost:{shirt:"#F4F6FF",trim:"#AAB4E0",pants:"#8E9AC8",shoes:"#5E6893",hair:"#E7E9F2"},ninja:{shirt:"#30354A",trim:"#14172A",pants:"#1E2233",shoes:"#14172A",hair:"#141414",long:!0},alien:{shirt:"#9BE878",trim:"#3E8F2E",pants:"#2F5F2A",shoes:"#1F3A1C",hair:"#2B1D14"},fire:{shirt:"#FF7A1A",trim:"#FFE07A",pants:"#4A1608",shoes:"#2A1208",hair:"#2B1D14"},king:{shirt:"#F5C534",trim:"#FFF2B3",pants:"#6E1A26",shoes:"#3A1F10",hair:"#2B1D14",long:!0},rainbow:{shirt:"rainbow",trim:"#FFFFFF",pants:"#3C2E6B",shoes:"#2A2044",hair:"#2B1D14"},explorer:{shirt:"#DDB06A",trim:"#9A6326",pants:"#6B4A2B",shoes:"#4A2E16",hair:"#2B1D14",boots:!0}};function Zf(i,t){let e=Zi,n=kf[i.id]||kf.green,s=i.body==="fire",o=n.shirt==="rainbow",r=Oe("#D49C70",{shininess:16,specular:"#4A3426"}),a=o?Oe("#FFFFFF",{vertexColors:!0,shininess:10}):s?Oe(n.shirt,{emissive:"#FF3D00",emissiveIntensity:.35,shininess:10}):Oe(n.shirt,{shininess:8,specular:"#1A1A1A"}),c=Oe(n.trim,{shininess:8}),h=Oe(n.pants,{shininess:6,specular:"#141414"}),d=Oe(n.shoes,{shininess:26}),f=Oe("#2A211B",{shininess:4}),m=Oe(n.hair,{shininess:22,specular:"#3A3A3A"}),x=new Re,y=new Re,b=new Re;y.position.y=1,b.position.y=-1,x.add(y),y.add(b);let p=(X,mt,rt=0,gt=0,St=0)=>{let Lt=new Gt(mt,X);return Lt.position.set(rt,gt,St),Lt},_=(X,mt,rt,gt=12)=>new ye(X,mt,rt,gt),A=new Re;A.position.y=e.hip,b.add(A);let P=p(h,new Ue(.16,20,12),0,.03,0);P.scale.set(1,.72,.74),A.add(P);let M=new Re;M.position.y=e.waist,A.add(M);let N=[[.001,-.13],[.148,-.13],[.15,-.03],[.148,.06],[.152,.16],[.162,.26],[.166,.32],[.16,.375],[.135,.425],[.09,.455],[.062,.466]].map(([X,mt])=>new Ot(X,mt)),R=new Kn(N,28);o&&(R=Ft(R,(X,mt,rt,gt)=>X.setHSL(((Math.atan2(gt,mt)/Pe+1)%1+rt*.6)%1,.72,.6)));let v=p(a,R);v.scale.z=.68,M.add(v);let C=p(c,new Wn(.068,.012,6,20),0,.455,0);C.rotation.x=Math.PI/2,C.scale.y=.75,M.add(C);let G=p(Oe("#3A2618",{shininess:30}),_(.156,.155,.045,24),0,-.095,0);G.scale.z=.7,M.add(G),M.add(p(Oe("#D8B25A",{shininess:90,specular:"#FFF2B0"}),new Fe(.05,.036,.012),0,-.095,.108));let B=new Re;if(B.position.set(0,.2,-.112),M.add(B),i.id!=="king"){let X=Oe(i.id==="ninja"?"#262A3A":"#8A5A32",{shininess:12}),mt=Oe(i.id==="ninja"?"#14172A":"#5E3B1F",{shininess:10}),rt=p(X,new Ni(.1,.17,4,12),0,0,-.045);rt.scale.set(1.25,1,.62),B.add(rt);let gt=p(mt,new Ue(.105,14,8,0,Pe,0,Math.PI/2),0,.07,-.045);gt.scale.set(1.2,.55,.66),B.add(gt);let St=p(mt,new Fe(.15,.09,.04),0,-.06,-.115);B.add(St);for(let Lt of[-1,1]){let It=p(mt,new Fe(.035,.26,.012),Lt*.085,.31,.118);It.rotation.x=-.1,M.add(It)}}let st=new Re;st.position.y=e.neck,M.add(st),st.add(p(r,_(.05,.056,.12,12),0,.04,0));let at=new Re;at.position.y=.135,st.add(at);let W=p(r,new Ue(.1,28,20));W.scale.set(.8,1.08,.98),at.add(W);let bt=p(r,new Ue(.08,20,14),0,-.05,.016);bt.scale.set(.86,.78,.9),at.add(bt);let ft=p(Oe("#BC7F55",{shininess:16}),new Ue(.016,10,8),0,-.012,.098);ft.scale.set(.78,1.45,1.15),at.add(ft);for(let X of[-1,1]){let mt=p(r,new Ue(.024,10,8),X*.079,-.004,-.004);mt.scale.set(.42,1,.72),at.add(mt)}let Ct=[],pt=Oe("#F7F3EE",{shininess:60}),xt=Oe("#2A1A10",{shininess:120,specular:"#FFFFFF"}),Mt=Oe(n.hair==="#E7E9F2"?"#C9CDDB":"#2A1D15");for(let X of[-1,1]){let mt=new Re;mt.position.set(X*.032,.012,.081),at.add(mt);let rt=p(pt,new Ue(.0135,12,10));rt.scale.set(1.2,.82,.7),mt.add(rt),mt.add(p(xt,new Ue(.0078,10,8),0,0,.0072)),mt.add(p(new _n({color:"#FFFFFF"}),new Ue(.0022,6,4),.0025,.0028,.0146)),Ct.push(mt);let gt=p(Mt,new Fe(.032,.008,.01),X*.033,.033,.09);gt.rotation.z=-X*.1,at.add(gt)}let Ut=new _n({color:"#8C4A3A"}),Qt=p(Ut,new Wn(.017,.0035,5,14,Math.PI*.7),0,-.046,.088);Qt.rotation.z=Math.PI+Math.PI*.15,at.add(Qt);let ne=p(new _n({color:"#4A1A14"}),new Ue(.011,10,8),0,-.05,.09);ne.scale.set(1,1.3,.5),ne.visible=!1,at.add(ne);let _e=p(m,new Ue(.106,24,14,0,Pe,0,Math.PI*.56));_e.scale.set(.84,1.06,1.02),_e.rotation.x=-.32,_e.position.set(0,.012,-.006),at.add(_e);let et=p(m,new Ue(.1,18,10,Math.PI*1.12,Math.PI*.76,Math.PI*.4,Math.PI*.3));et.scale.set(.83,1.06,1),at.add(et);let Zt=!!n.long,le=[];for(let X of[1,-1]){let mt=new Re;mt.position.set(X*e.shW,.405,0),M.add(mt);let rt=p(a,new Ue(.056,14,10),0,-.012,0);rt.scale.set(.95,1,1.05),mt.add(rt),mt.add(p(Zt?a:r,_(.046,.039,e.upper),0,-e.upper/2,0)),Zt||mt.add(p(a,_(.06,.053,.15,14),0,-.07,0));let gt=new Re;gt.position.y=-e.upper,mt.add(gt),gt.add(p(Zt?a:r,new Ue(.04,10,8))),gt.add(p(Zt?a:r,_(.039,.03,e.fore),0,-e.fore/2,0)),i.id==="explorer"&&gt.add(p(a,_(.047,.045,.05,12),0,-.01,0));let St=new Re;St.position.y=-e.fore,gt.add(St);let Lt=p(r,new Ue(.05,14,10),0,-.075,.004);Lt.scale.set(.5,1.55,.86),St.add(Lt);let It=p(r,new Ni(.011,.04,3,6),-X*.006,-.045,.036);It.rotation.x=.45,St.add(It),le.push({s:X,sh:mt,el:gt,wr:St})}let xe=[];for(let X of[1,-1]){let mt=new Re;mt.position.set(X*e.hipW,0,0),A.add(mt),mt.add(p(h,new Ue(.077,14,10))),mt.add(p(h,_(.077,.056,e.thigh,14),0,-e.thigh/2,0));let rt=new Re;rt.position.y=-e.thigh,mt.add(rt),rt.add(p(h,new Ue(.056,12,10))),rt.add(p(h,_(.055,.043,e.shin,14),0,-e.shin/2,0)),n.boots&&rt.add(p(d,_(.054,.05,.2,14),0,-e.shin+.08,0));let gt=new Re;gt.position.y=-e.shin,rt.add(gt);let St=p(d,new Fe(.098,.07,.2),0,-.042,.03);gt.add(St);let Lt=p(d,new Ue(.05,12,8,0,Pe,0,Math.PI/2),0,-.077,.13);Lt.scale.set(.98,1,1.25),gt.add(Lt);let It=p(d,new Ue(.05,12,8),0,-.04,-.07);It.scale.set(.98,.78,.7),gt.add(It);let ce=p(f,new Fe(.104,.014,.27),0,-.075,.035);gt.add(ce),xe.push({s:X,hp:mt,kn:rt,an:gt})}let te=new Re;at.add(te);let fe=[],De=null,kt=null;if(i.acc==="hat"){let X=Oe("#8E5E2E",{shininess:12}),mt=Oe("#3E2612",{shininess:10}),rt=new Re;rt.position.set(0,.07,-.004),rt.rotation.set(-.1,0,.04),te.add(rt);let gt=p(X,_(.175,.18,.012,32));gt.scale.z=.92,rt.add(gt);let St=p(X,_(.088,.1,.1,24),0,.055,0);St.scale.z=1.08,rt.add(St);let Lt=p(X,new Ue(.089,18,8,0,Pe,0,Math.PI/2),0,.1,0);Lt.scale.set(1,.3,1.08),rt.add(Lt);let It=p(mt,_(.1,.1,.026,24,1),0,.018,0);It.scale.z=1.08,rt.add(It);let ce=Oe("#C8283A",{shininess:12,side:We}),tt=p(ce,new Wn(.068,.018,8,22),0,.43,.006);tt.rotation.x=Math.PI/2+.12,M.add(tt);let we=new Mi;we.moveTo(-.07,0),we.lineTo(.07,0),we.lineTo(0,-.09),we.closePath();let ot=p(ce,new gs(we),0,.42,.075);ot.rotation.x=-.25,M.add(ot)}else if(i.acc==="crown"){let X=Oe("#FFC400",{shininess:110,specular:"#FFF2B0",emissive:"#5A3D00",emissiveIntensity:.3}),mt=p(X,_(.092,.088,.045,24,1),0,.085,0);mt.material.side=We,te.add(mt);for(let St=0;St<6;St++){let Lt=St/6*Pe;te.add(p(X,new Rn(.018,.055,6),Math.sin(Lt)*.088,.13,Math.cos(Lt)*.088)),te.add(p(Oe(St%2?"#2EA8FF":"#E63946",{shininess:140,specular:"#FFFFFF"}),new Ue(.01,8,6),Math.sin(Lt)*.093,.085,Math.cos(Lt)*.093))}De=new Re,De.position.set(0,.43,-.1),M.add(De);let rt=new pn(.46,1.05,4,8);rt.translate(0,-.525,0);let gt=rt.attributes.position;for(let St=0;St<gt.count;St++){let Lt=gt.getX(St),It=gt.getY(St);gt.setZ(St,-Math.abs(Lt)*.35*(.4-It*.6)-.02),gt.setX(St,Lt*(1-It*.5))}rt.computeVertexNormals(),De.add(p(Oe("#A81E2D",{side:We,shininess:18}),rt))}else if(i.acc==="band"){let X=Oe("#D62839"),mt=p(X,new Wn(.087,.011,6,28),0,.03,.002);mt.rotation.x=Math.PI/2-.12,mt.scale.set(.92,1.12,1),te.add(mt);for(let gt of[-1,1]){let St=p(X,new Fe(.025,.012,.15),gt*.02,.02,-.16);St.rotation.set(.6,gt*.35,0),te.add(St),te.userData["tail"+gt]=St}let rt=p(Oe("#22263A",{side:We}),new Ue(.103,22,10,Math.PI*.1,Math.PI*.8,Math.PI*.52,Math.PI*.34));rt.scale.set(.84,1.1,1.02),te.add(rt)}else if(i.acc==="antenna")for(let X of[-1,1]){let mt=p(Oe("#2C6B23"),_(.005,.005,.13,6),X*.045,.14,0);mt.rotation.z=-X*.35,te.add(mt),te.add(p(Oe("#FF5DA2",{emissive:"#FF5DA2",emissiveIntensity:.35}),new Ue(.02,10,8),X*.068,.2,0))}else if(i.acc==="leaf"){let X=p(Oe("#6B3E1F"),_(.004,.005,.05,6),0,.125,.01);X.rotation.z=-.2,te.add(X);let mt=p(Oe("#3FB950"),new Ue(.04,12,8),.03,.15,.01);mt.scale.set(1,.2,.5),mt.rotation.z=.45,te.add(mt)}else if(i.acc==="star"){let X=new Mi;for(let mt=0;mt<10;mt++){let rt=mt/10*Pe-Math.PI/2,gt=mt%2?.03:.07;mt?X.lineTo(Math.cos(rt)*gt,-Math.sin(rt)*gt):X.moveTo(Math.cos(rt)*gt,-Math.sin(rt)*gt)}kt=p(Oe("#FFE066",{emissive:"#FFB703",emissiveIntensity:.5,shininess:90}),new Zs(X,{depth:.02,bevelEnabled:!0,bevelSize:.006,bevelThickness:.006,bevelSegments:1}),0,.26,0),te.add(kt)}if(i.acc==="blush"||i.id==="orange")for(let X of[-1,1]){let mt=p(new _n({color:"#FF7896",transparent:!0,opacity:.45}),new $n(.014,12),X*.05,-.022,.083);mt.rotation.y=X*.55,at.add(mt)}if(s){for(let mt=0;mt<7;mt++){let rt=mt/7*Math.PI-Math.PI/2,gt=p(new _n({color:mt%2?"#FFB13B":"#FF5A1F",transparent:!0,opacity:.85,depthWrite:!1,blending:Xn}),new Rn(.045,.2,8,1,!0),Math.sin(rt)*.15,.42,-.06-Math.abs(Math.cos(rt))*.04);gt.userData.ph=mt,M.add(gt),fe.push(gt)}let X=new Jn(new Hn({map:t,color:"#FF6A1F",transparent:!0,opacity:.45,depthWrite:!1,blending:Xn}));X.scale.setScalar(1.8),X.position.y=.25,M.add(X)}let k=new Re;x.add(k),k.visible=!1;let vt=p(Oe("#7A5230",{shininess:30}),_(.006,.013,2.4,6),0,1,0);k.add(vt),k.add(p(Oe("#2E2E2E"),_(.024,.024,.05,10),.03,.12,0));let K=new Mn;K.position.y=2.2,k.add(K),fy(x,new Set([v,Qt,ne,...fe,...kt?[kt]:[]])),Or(x);let ht=py();return{id:i.id,human:!0,root:x,body:y,rig:b,pelvis:A,spine:M,neck:st,head:at,torso:v,arms:le,legs:xe,eyes:Ct,smile:Qt,ooh:ne,acc:te,flames:fe,fire:s,cape:De,star:kt,pack:B,rod:k,rodTip:K,bodyMat:a,...ht,turn:0,blink:0,nextBlink:2}}var dy=new Fn({color:"#FFFFFF",vertexColors:!0,shininess:14,specular:"#2A2A2A"});function fy(i,t){let e=[];i.traverse(n=>{n.isMesh||e.push(n)});for(let n of e){let s=n.children.filter(a=>a.isMesh&&!t.has(a)&&a.material&&a.material.isMeshPhongMaterial&&a.material.side!==We&&!(a.material.emissive&&a.material.emissive.getHex())&&!a.material.transparent);if(s.length<1)continue;let o=[];for(let a of s){a.updateMatrix();let c=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();for(let h of Object.keys(c.attributes))h!=="position"&&h!=="normal"&&!(h==="color"&&a.material.vertexColors)&&c.deleteAttribute(h);if(c.attributes.normal||c.computeVertexNormals(),c.applyMatrix4(a.matrix),!c.attributes.color){let h=c.attributes.position.count,d=new Float32Array(h*3),f=a.material.color;for(let m=0;m<h;m++)d[m*3]=f.r,d[m*3+1]=f.g,d[m*3+2]=f.b;c.setAttribute("color",new Ke(d,3))}o.push(c),n.remove(a),a.geometry.dispose()}let r=new Gt(en(o),dy);r.castShadow=!0,n.add(r)}}function py(){let i=new Re,t=["#E63946","#FFFFFF","#FFB703","#FFFFFF","#2EA8FF","#FFFFFF"],e=Ft(new Ue(1.7,24,8,0,Pe,0,Math.PI*.42),(d,f,m,x)=>d.set(t[Math.floor((Math.atan2(x,f)/Pe+1)%1*12+1e-4)%6])),n=new Le({vertexColors:!0,side:We,transparent:!0,opacity:1}),s=new Gt(e,n);s.scale.set(1,.62,1),s.castShadow=!0;let o=new Float32Array(60),r=new Fs(new tn,new ps({color:"#4A4A5A",transparent:!0,opacity:.85}));r.geometry.setAttribute("position",new Ke(o,3)),r.frustumCulled=!1;let a=new Re;a.position.y=1.6,a.add(s),i.add(a,r),i.visible=!1;let c=new Gt(e,n.clone());c.visible=!1,c.castShadow=!1;let h=new Gt(new tn,Oe("#8B5A2B",{shininess:5}));return h.visible=!1,h.castShadow=!0,{chute:i,canopy:s,canopyHolder:a,lines:r,drop:c,rope:h}}function Us(i={}){let t={skin:"#C98E62",thobe:"#F2EEE4",bisht:"#5B3A24",shmagh:"#C8102E",agal:"#141414",beard:"#4A4440",beads:!0,gold:!0,...i},e=new Re,n=Oe(t.skin,{shininess:12}),s=Oe(t.thobe,{shininess:8}),o=Oe(t.bisht||t.thobe,{shininess:14,side:We}),r=new Gt(new Kn([new Ot(.001,0),new Ot(.27,0),new Ot(.275,.1),new Ot(.25,.5),new Ot(.232,.9),new Ot(.222,1.2),new Ot(.2,1.34),new Ot(.12,1.42),new Ot(.05,1.45)],30),s);e.add(r);for(let R of[-1,1]){let v=new Gt(new Fe(.1,.04,.2),Oe("#4A2E18"));v.position.set(R*.09,.02,.2),e.add(v)}let a=new Gt(new Kn([new Ot(.245,.06),new Ot(.295,.08),new Ot(.285,.5),new Ot(.265,.9),new Ot(.255,1.2),new Ot(.24,1.33),new Ot(.16,1.41)],30,.62,Pe-1.24),o);e.add(a),a.visible=!!t.bisht;let c=Oe("#D4AF37",{shininess:90,specular:"#FFF2B0"});for(let R of[-1,1]){let v=R*.62,C=[[.247,.08],[.297,.1],[.287,.5],[.267,.9],[.257,1.2],[.242,1.33],[.162,1.41]].map(([G,B])=>new J(Math.sin(v)*(G+.006),B,Math.cos(v)*(G+.006)));t.bisht&&t.gold&&e.add(new Gt(new gi(new Gn(C),20,.014,6),c))}let h=[];for(let R of[-1,1]){let v=new Re;v.position.set(R*.25,1.3,0),e.add(v);let C=new Gt(new Ni(.072,.28,4,10),o);C.position.y=-.18,v.add(C);let G=new Re;G.position.y=-.36,v.add(G);let B=new Gt(new Ni(.068,.22,4,10),o);B.position.y=-.14,G.add(B);let st=new Gt(new ye(.055,.06,.05,10),s);st.position.y=-.3,G.add(st);let at=new Gt(new Ue(.052,12,10),n);if(at.position.y=-.36,at.scale.set(.9,1.1,.8),G.add(at),R<0&&t.beads){let W=new Gt(new Wn(.06,.011,6,18),Oe("#E0A03C",{shininess:80,specular:"#FFF0C8"}));W.position.set(0,-.44,.02),W.rotation.y=.4,G.add(W)}v.rotation.z=R*.12,G.rotation.x=-.25,h.push({sh:v,el:G,s:R})}let d=new Gt(new ye(.06,.07,.1,10),n);d.position.y=1.46,e.add(d);let f=new Re;f.position.y=1.6,e.add(f);let m=new Gt(new Ue(.155,28,20),n);m.scale.set(.94,1.08,1),f.add(m);let x=new Gt(new Ue(.034,10,8),Oe("#B97C52"));x.position.set(0,-.005,.15),x.scale.set(.85,1.1,1.25),f.add(x);for(let R of[-1,1]){let v=new Gt(new Ue(.019,10,8),Oe("#1B140F",{shininess:120,specular:"#FFFFFF"}));v.position.set(R*.055,.025,.135),f.add(v);let C=new Gt(new Fe(.065,.016,.02),Oe("#3A3430"));C.position.set(R*.056,.058,.138),C.rotation.z=-R*.12,f.add(C);let G=new Gt(new Ni(.019,.06,3,6),Oe("#2A2420"));G.position.set(R*.034,-.045,.142),G.rotation.z=R*1.15,f.add(G)}let y=new Gt(new Ue(.16,24,10,Math.PI/2-1.2,2.4,Math.PI*.6,Math.PI*.3),Oe(t.beard==="none"?"#000":t.beard,{side:We,shininess:5}));f.add(y),y.visible=t.beard!=="none";let b=new Gt(new Ue(.026,10,8),new _n({color:"#4A1A14"}));b.position.set(0,-.07,.143),b.scale.set(1,.3,.5),f.add(b);let p=li(128,128,(R,v,C)=>{R.fillStyle="#FBF8F2",R.fillRect(0,0,v,C),R.fillStyle=t.shmagh;for(let G=0;G<C;G+=16)for(let B=0;B<v;B+=16)R.fillRect(B+2,G+2,7,7),R.fillRect(B+9,G+9,5,5),R.fillRect(B+9,G+2,2,2),R.fillRect(B+2,G+11,2,2)},[5,5]),_=new Le({map:p,side:We}),A=new Gt(new Ue(.168,28,14,0,Pe,0,Math.PI*.52),_);A.rotation.x=-.42,A.position.y=.01,f.add(A);let P=new Gt(new Kn([new Ot(.168,.02),new Ot(.18,-.06),new Ot(.2,-.16),new Ot(.24,-.26),new Ot(.28,-.33)],28,1.15,Pe-2.3),_);f.add(P);let M=new Gt(new pn(.2,.36),_);M.position.set(.17,-.25,.1),M.rotation.set(-.15,.6,-.08),f.add(M);let N=Oe(t.agal,{shininess:40});for(let[R,v]of[[.07,.154],[.097,.139]]){let C=new Gt(new Wn(v,.015,8,36),N);C.position.set(0,R*.913,-R*.408),C.rotation.x=Math.PI/2-.42,f.add(C)}return Or(e),{root:e,head:f,arms:h,mouth:b,yaw:0}}var hu={id:"natta-island",name:"\u062C\u0632\u064A\u0631\u0629 \u0646\u0637\u0651\u0629",half:4330,seed:7531,sea:-300,features:[{type:"mountain",id:"M1",x:0,z:0},{type:"valley",id:"V1",x:-200,z:1350}],spawn:"fajr"},er=(i,t)=>Math.exp(-(i*i)/(t*t)),Ac=(i,t,e)=>{let n=Math.max(e-Math.abs(i-t),0)/e;return Math.max(i,t)+n*n*e*.25},Jf=(i,t,e)=>-Ac(-i,-t,e);function lu(i){let t=new Map,e=(n,s)=>n*100003+s;return{add(n,s){let o=Math.floor((Math.min(n.ax,n.bx)-s)/i),r=Math.floor((Math.max(n.ax,n.bx)+s)/i),a=Math.floor((Math.min(n.az,n.bz)-s)/i),c=Math.floor((Math.max(n.az,n.bz)+s)/i);for(let h=o;h<=r;h++)for(let d=a;d<=c;d++){let f=e(h,d),m=t.get(f);m||(m=[],t.set(f,m)),m.push(n)}},at(n,s){return t.get(e(Math.floor(n/i),Math.floor(s/i)))}}}function cu(i,t,e,n){let s=Ee(((t-i.ax)*i.dx+(e-i.az)*i.dz)*i.il2,0,1),o=i.ax+i.dx*s,r=i.az+i.dz*s;return n.d=Math.hypot(t-o,e-r),n.t=s,n}var bc=(i,t,e)=>{let n=t.x-i.x,s=t.z-i.z;return{ax:i.x,az:i.z,bx:t.x,bz:t.z,dx:n,dz:s,il2:1/Math.max(1e-6,n*n+s*s),a:i,b:t,...e}};function $f(i,t){let e=[];for(let s=0;s<i.length-1;s++){let o=i[Math.max(0,s-1)],r=i[s],a=i[s+1],c=i[Math.min(i.length-1,s+2)],h=Math.hypot(a[0]-r[0],a[1]-r[1]),d=Math.max(1,Math.round(h/t));for(let f=0;f<d;f++){let m=f/d,x=m*m,y=x*m,b=(p,_,A,P)=>.5*(2*_+(-p+A)*m+(2*p-5*_+4*A-P)*x+(-p+3*_-3*A+P)*y);e.push({x:b(o[0],r[0],a[0],c[0]),z:b(o[1],r[1],a[1],c[1])})}}let n=i[i.length-1];return e.push({x:n[0],z:n[1]}),e}function Kf(i,t,e){let n=i.sea??-300,s=i.half||4330,o=t.x,r=t.z,a=xn(i.seed||7),c=286,h=0;function d(q){let $=3420+300*Math.sin(3*q+.7)+220*Math.sin(5*q+2.1)+140*Math.sin(9*q+4)+70*Math.sin(15*q+1.3);return $-=1650*er(Pn(q,h),.27),$+=260*er(Pn(q,-.52),.1)+220*er(Pn(q,.55),.09),$-=380*er(Pn(q,-1.95),.22),$+=250*er(Pn(q,Math.PI),.15),Math.min($,s-300)}function f(q,$){let zt=(yn(q*.0011+3.1,$*.0011-1.7)-.5)*520,Nt=(yn(q*.0011-4.3,$*.0011+2.2)-.5)*520,Kt=q+zt-o,S=$+Nt-r;return d(Math.atan2(S,Kt))-Math.hypot(Kt,S)+(yn(q*.006,$*.006)-.5)*60}let m=[{a:1.32,w:.26},{a:-.84,w:.13},{a:-2.55,w:.2},{a:2.3,w:.1}];function x(q,$,zt){let Nt=0;for(let Kt of m)Nt=Math.max(Nt,er(Pn(q,Kt.a),Kt.w));return ue(.35,.75,Nt*(.75+.5*Cn($*.004,zt*.004)))}let y=[{a:.95,w:.45,r:760,h:16},{a:-2.2,w:.5,r:900,h:18},{a:2.4,w:.35,r:640,h:14},{a:-.45,w:.3,r:1200,h:12},{a:1.9,w:.4,r:1300,h:15},{a:-1.45,w:.35,r:560,h:13}];function b(q,$){let zt=q-o,Nt=$-r,Kt=Math.hypot(zt,Nt);if(Kt<300)return c;let S=Math.atan2(Nt,zt),V=2150+380*Math.sin(3*S+.4)+260*Math.sin(5*S+2.2)+160*Math.sin(8*S+1.1);V-=700*er(Pn(S,h),.33),V*=1+(yn(q*.0016+9,$*.0016)-.5)*.35;let g=Ee((Kt-300)/(V-300),0,1),w=c*(1-g*g*(3-2*g));w*=1+.1*Math.sin(11*S+Kt*.0035)*ue(320,700,Kt)*(1-g);for(let F of y){let z=ue(F.w,F.w*.55,Math.abs(Pn(S,F.a)));z>0&&(w-=F.h*z*ue(F.r-6,F.r+6,Kt)*(1-g*.6))}return w+=((yn(q*.004+2,$*.004-6)-.5)*46+(yn(q*.02,$*.02)-.5)*5)*ue(300,650,Kt),w}let p=[{id:"falcons",x:1900,z:1900,h:230,r:820},{id:"kohl",x:1550,z:-1950,h:185,r:600,dark:!0},{id:"fort",x:-2500,z:-2e3,h:58,r:300}];function _(q,$,zt){let Nt=Math.hypot($-q.x,zt-q.z);if(Nt>q.r*1.3)return-1e9;let Kt=Nt*(1+.28*(yn($*.003+q.x*.01,zt*.003)-.5)),S=Ee(1-Kt/q.r,0,1);return q.h*Math.pow(S,1.6)*(.85+.3*yn($*.01,zt*.01))*(1+.12*Math.sin(7*Math.atan2(zt-q.z,$-q.x)+Kt*.012)*S*ue(0,90,Nt))}let A={x:-2e3,z:1400,r:950,amp:78},P={x:-1e3,z:2500,r:520,top:112,ramps:[-2.2,2.6]};function M(q,$){let zt=P,Nt=Math.hypot(q-zt.x,$-zt.z);if(Nt>zt.r+420)return-1e9;let Kt=Math.atan2($-zt.z,q-zt.x),S=zt.r*(1+.18*(Cn(Kt*2.2+11,3.3)-.5)),V=0;for(let w of zt.ramps)V=Math.max(V,ue(.28,.12,Math.abs(Pn(Kt,w))));let g=ue(S+ee(10,300,V),S-26,Nt);return(zt.top+(yn(q*.004+2,$*.004)-.5)*22+(yn(q*.02,$*.02)-.5)*3)*g}let N=null;function R(q,$){let zt=f(q,$),Nt=Math.atan2($-r,q-o),Kt=x(Nt,q,$),S;zt<0?S=Math.max(-38,zt*ee(.035,.3,Kt)-.4):S=1.4+Math.min(zt,1500)*.011+(yn(q*.0035+1,$*.0035+8)-.5)*26*ue(40,500,zt)+(yn(q*.03,$*.03)-.5)*1.4+Kt*26*ue(-4,28,zt);let V=ue(-25,160,zt);if(V>0){let g=b(q,$);for(let L of p){let Z=_(L,q,$);Z>0&&(g=ee(g,Ac(g,Z,18),ue(0,15,Z)))}let w=Math.hypot(q-A.x,$-A.z);w<A.r&&(S+=A.amp*ue(A.r,A.r*.45,w)*Math.pow(yn(q*.0055+3,$*.0055-2),1.5)*V);let F=g*V;S=ee(Math.max(S,F),Ac(S,F,14),ue(0,12,F));let z=M(q,$)*V;z>0&&(S=ee(Math.max(S,z),Ac(S,z,10),ue(0,10,z)))}if(N){let g=Math.hypot(q-N.x,$-N.z);g<N.r*1.6&&(S=Math.max(S,13*Math.pow(Ee(1-g/N.r,0,1),1.2)*(.8+.4*yn(q*.02,$*.02))-1.2));let w=cu(N.bar,q,$,v);w.d<40&&(S=Math.max(S,-.5+(yn(q*.02,$*.02)-.5)*.5-ue(18,40,w.d)*3))}return S}let v={d:0,t:0};function C(q,$=600){let zt=Math.cos(q),Nt=Math.sin(q),Kt=$;for(;Kt<s&&f(o+zt*Kt,r+Nt*Kt)>0;)Kt+=12;return{r:Kt,x:o+zt*Kt,z:r+Nt*Kt,c:zt,s:Nt}}let G=(q,$,zt=0)=>({x:q.x-q.c*$-q.s*zt,z:q.z-q.s*$+q.c*zt});{let $=C(2.29),zt=o+Math.cos(2.29)*($.r+330),Nt=r+Math.sin(2.29)*($.r+330);N={x:zt,z:Nt,r:170,bar:bc({x:$.x-Math.cos(2.29)*30,z:$.z-Math.sin(2.29)*30},{x:zt,z:Nt})}}let B=C(h),st=G(B,230),at=C(-.52),W=G(at,45),bt=C(-1.94),ft={...G(bt,380),r:640},Ct=C(Math.PI),pt=G(Ct,70),xt=C(1.32),Mt=G(C(1.08),60),Ut={x:e.x+60,z:e.z,r:210},Qt={x:1150,z:-820,r:230},ne={x:560,z:-1580,r:70},_e={x:900,z:-2350,r:250},et={x:-2500,z:-2e3},Zt={x:st.x-300,z:640,r:340},le={x:-1500,z:-1650,r:520},xe=[],te=(q,$)=>R(q,$);xe.push({x:st.x,z:st.z,r:52,fall:40,a:Math.max(7,te(st.x,st.z))}),xe.push({x:Ut.x,z:Ut.z,r:Ut.r-70,fall:70,a:te(Ut.x,Ut.z)}),xe.push({x:W.x,z:W.z,r:26,fall:25,a:Math.max(4,te(W.x,W.z))}),xe.push({x:ne.x,z:ne.z,r:ne.r,fall:40,a:te(ne.x,ne.z)}),xe.push({x:et.x,z:et.z,r:34,fall:30,a:te(et.x,et.z)});function fe(q,$,zt){for(let Kt of xe){let S=Math.hypot(q-Kt.x,$-Kt.z);S<Kt.r+Kt.fall&&(zt=ee(Kt.a,zt,ue(Kt.r,Kt.r+Kt.fall,S)))}let Nt=Math.hypot(q-Qt.x,$-Qt.z);if(Nt<Qt.r+60){let Kt=zt/3,S=Kt-Math.floor(Kt),V=(Math.floor(Kt)+ue(.8,1,S))*3;zt=ee(V,zt,ue(Qt.r,Qt.r+60,Nt))}return zt}let De=[];for(let q=0;q<=24;q++){let $=q/24*Math.PI*2;De.push([o+Math.cos($)*278,r+Math.sin($)*278])}let kt=q=>[q.x,q.z],k=[{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0641\u062C\u0631",hw:1.9,way:[kt(st),[st.x-140,220],[1520,120],[1330,260],[1150,150],[980,270],[820,150],[660,250],[520,120],[400,200],[300,80],[195,42]]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u063A\u064A\u0645",hw:1.5,way:De},{name:"\u062F\u0631\u0628 \u0627\u0644\u0631\u0637\u0628",hw:1.6,way:[kt(st),[st.x-60,420],[Zt.x,Zt.z],[1500,1100],[1650,1450]]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0642\u0631\u064A\u0629",hw:1.8,way:[kt(st),[st.x-120,-200],[1450,-450],[Qt.x+60,Qt.z+120],[Qt.x,Qt.z],[Qt.x+250,-1050],[W.x-300,W.z+150],kt(W)]},{name:"\u062F\u0631\u0628 \u0627\u0644\u0628\u062D\u064A\u0631\u0629",hw:1.4,way:[[Qt.x,Qt.z],[1180,-1350],[_e.x+300,_e.z+120],[_e.x+200,_e.z+300],[ne.x+150,ne.z-200],kt(ne)]},{name:"\u062F\u0631\u0628 \u0627\u0644\u062D\u0637\u0651\u0627\u0628\u064A\u0646",hw:1.4,way:[[o-20,r-278],[60,-650],[300,-1100],kt(ne)]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0647\u0648\u0631",hw:1.6,way:[[o-197,r-197],[-600,-700],[-1e3,-1200],[le.x,le.z],[ft.x-150,ft.z+350],kt(ft)]},{name:"\u062F\u0631\u0628 \u0627\u0644\u062D\u0635\u0646",hw:1.3,way:[[le.x,le.z],[-2050,-1830],kt(et)]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0628\u0644\u0648\u0637",hw:1.6,way:[[o-278,r],[-900,-100],[-1600,-250],[-2300,-200],[pt.x+250,pt.z-100],kt(pt)]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0648\u0627\u062F\u064A",hw:1.6,way:[[o,r+278],[-150,700],[-250,1100],[e.x-75,e.z],[-700,1500],[-1300,1700],[-1800,2150],[N.bar.ax+60,N.bar.az-60],[N.bar.ax,N.bar.az]]},{name:"\u062F\u0631\u0628 \u0627\u0644\u0647\u0636\u0628\u0629",hw:1.3,way:[[-1300,1700],[-1e3+Math.cos(-2.2)*900,2500+Math.sin(-2.2)*900],[P.x,P.z]]},{name:"\u062F\u0631\u0628 \u0627\u0644\u0634\u0644\u0627\u0644",hw:1.4,way:[[o+197,r+197],[480,600],[700,1150],[560,1780],[650,2400],[Mt.x-120,Mt.z-200],kt(Mt)]}],vt=[],K=lu(48);for(let q of k){let $=$f(q.way,5);for(let Nt of $)Nt.a0=fe(Nt.x,Nt.z,R(Nt.x,Nt.z));for(let Nt=0;Nt<$.length;Nt++){let Kt=0,S=0;for(let V=-6;V<=6;V++){let g=$[Ee(Nt+V,0,$.length-1)];Kt+=g.a0,S++}$[Nt].a=Math.max(Kt/S,.6)}let zt={name:q.name,hw:q.hw,pts:$};vt.push(zt);for(let Nt=0;Nt<$.length-1;Nt++)K.add(bc($[Nt],$[Nt+1],{road:zt}),q.hw+8)}let ht={d:0,t:0};function X(q,$){let zt=K.at(q,$);if(!zt)return null;let Nt=null,Kt=1e9,S=0;for(let V of zt)cu(V,q,$,ht),ht.d<Kt&&(Kt=ht.d,Nt=V,S=ht.t);return Nt?{d:Kt,a:ee(Nt.a.a,Nt.b.a,S),hw:Nt.road.hw,road:Nt.road}:null}function mt(q,$,zt){let Nt=X(q,$);return Nt&&Nt.d<Nt.hw+6&&(zt=ee(Nt.a,zt,ue(Nt.hw+.3,Nt.hw+6,Nt.d))),zt}let rt={x:590,z:1950,nx:.17,nz:-.985,len:300,h:16},gt=()=>0,St=[{id:"silver",name:"\u0646\u0647\u0631 \u0627\u0644\u0641\u0636\u0629",w0:2.4,w1:8,depth:1.5,way:[[520,720],[640,1050],[660,1400],[600,1750],[592,1950],[620,2300],[760,2700],[900,3100],[xt.x+xt.c*150,xt.z+xt.s*150]]},{id:"anbar",name:"\u0646\u0647\u0631 \u0627\u0644\u0639\u0646\u0628\u0631",w0:2.2,w1:7,depth:1.4,way:[[-330,-650],[-470,-1e3],[-640,-1450],[-800,-1900],[-960,-2300],[ft.x+60,ft.z+330],[ft.x,ft.z]]},{id:"dates",name:"\u0633\u0627\u0642\u064A\u0629 \u0627\u0644\u0631\u0637\u0628",w0:1.2,w1:2.4,depth:.7,way:[[640,320],[900,480],[1250,560],[Zt.x+100,Zt.z-40],[B.x+60,560]]}],Lt=[],It=lu(64),ce=[],tt=(q,$)=>mt(q,$,fe(q,$,R(q,$)+gt(q,$)));for(let q of St){let $=$f(q.way,8),zt=1e9;for(let Kt=0;Kt<$.length;Kt++){let S=$[Kt],V=Kt/($.length-1),g=tt(S.x,S.z);zt=Math.min(zt-.03,g-ee(.9,.5,V)),S.lv=Math.max(zt,q.id==="anbar"?.3:.05),S.w=ee(q.w0,q.w1,Math.pow(V,.8)),Kt&&$[Kt-1].lv-S.lv>2.5&&ce.push({river:q.id,x:(S.x+$[Kt-1].x)/2,z:(S.z+$[Kt-1].z)/2,top:$[Kt-1].lv,bot:S.lv,w:S.w,dx:S.x-$[Kt-1].x,dz:S.z-$[Kt-1].z})}let Nt={...q,pts:$};Lt.push(Nt);for(let Kt=0;Kt<$.length-1;Kt++)It.add(bc($[Kt],$[Kt+1],{river:Nt}),$[Kt].w+70)}function we(q,$){let zt=It.at(q,$);if(!zt)return null;let Nt=null,Kt=1e9,S=0;for(let V of zt)cu(V,q,$,ht),ht.d<Kt&&(Kt=ht.d,Nt=V,S=ht.t);return Nt?{d:Kt,lv:ee(Nt.a.lv,Nt.b.lv,S),w:ee(Nt.a.w,Nt.b.w,S),river:Nt.river,dx:Nt.dx,dz:Nt.dz}:null}function ot(q,$,zt){let Nt=we(q,$);if(!Nt)return zt;if(Nt.d<Nt.w){let Kt=X(q,$),S=Kt&&Kt.d<Kt.hw+3?.35:Nt.river.depth;zt=Math.min(zt,Nt.lv-.12-S*(1-(Nt.d/Nt.w)**2))}else zt=Math.min(zt,Jf(Nt.lv+.25+(Nt.d-Nt.w)*.42,zt,1.5));return zt}let ct=ce.filter(q=>q.river==="silver").sort((q,$)=>$.top-$.bot-(q.top-q.bot))[0],j=ct?{x:ct.x,z:ct.z}:{x:rt.x,z:rt.z},ie=fe(_e.x,_e.z,R(_e.x,_e.z))-2.5,qt=[{id:"moon",name:"\u0628\u062D\u064A\u0631\u0629 \u0627\u0644\u0642\u0645\u0631",x:_e.x,z:_e.z,r:_e.r,lv:ie}],Jt=(q,$,zt)=>q.r*(1+.2*(Cn(Math.atan2(zt-q.z,$-q.x)*2.4+5,1.1)-.5)),l=.3;function u(q,$,zt){for(let Kt of qt){let S=Math.hypot(q-Kt.x,$-Kt.z);if(S>Kt.r*1.25+160)continue;let V=Jt(Kt,q,$);S<V?zt=Math.min(zt,Kt.lv-.2-3.6*(1-(S/V)**2)):zt=Math.min(zt,Jf(Kt.lv+.35+(S-V)*.18,zt,1.5))}let Nt=Math.hypot(q-ft.x,$-ft.z);if(Nt<ft.r){let Kt=.22+(yn(q*.022+4,$*.022)-.47)*2.4;zt=ee(Kt,zt,ue(ft.r*.55,ft.r,Nt))}return zt}let T=[],I=[],H=lu(32),it=(q,$=!0)=>{if(T.push(q),$&&q.w){let zt={x:q.x,z:q.z,c:Math.cos(q.rot||0),s:Math.sin(q.rot||0),hw:q.w/2+.6,hd:q.d/2+.6,a:null};I.push(zt),q.pad=zt,H.add(bc(zt,zt),Math.max(zt.hw,zt.hd)+4)}return q},Q=(q,$)=>u(q,$,ot(q,$,mt(q,$,fe(q,$,R(q,$)+gt(q,$))))),wt=(q,$,zt)=>{let Nt=X(q,$);if(Nt&&Nt.d<Nt.hw+zt)return!1;let Kt=we(q,$);return Kt&&Kt.d<Kt.w+zt+4?!1:!T.some(S=>Math.hypot(S.x-q,S.z-$)<zt+Math.max(S.w||2,S.d||2)*.6)};{let q=st,$=0,zt=(Nt,Kt)=>({x:q.x+Nt,z:q.z+Kt});it({kind:"square",...zt(0,0),rot:$,w:64,d:96,h:0},!1),it({kind:"fountain",...zt(0,0),rot:$,r:3.4},!1);for(let Nt=0;Nt<8;Nt++){let Kt=Nt/8*Math.PI*2+.2;it({kind:"palm",...zt(Math.cos(Kt)*15,Math.sin(Kt)*15),s:.95+Nt%3*.08},!1)}for(let Nt=0;Nt<5;Nt++)it({kind:"stall",...zt(-18+Nt*9,-38),rot:Math.PI/2,w:3.2,d:2.4,h:2.6,tint:Nt});it({kind:"teahouse",...zt(-20,30),rot:Math.atan2(-30,20),w:6,d:10,h:3.3}),it({kind:"board",...zt(25,0),rot:Math.PI,w:1.9,d:4.6,h:4.2}),it({kind:"garage",...zt(4,-80),rot:Math.PI/2,w:10.4,d:8.4,h:4.6}),it({kind:"apron",...zt(4,-68.8),rot:Math.PI/2,w:12,d:9,h:0}),it({kind:"fuel",...zt(-2.4,-70.5),rot:Math.PI/2,w:.8,d:.55,h:1.9}),it({kind:"signpost",...zt(-26,8),rot:0},!1),it({kind:"gate",...zt(-31,0),rot:0,w:1.2,d:9,h:5.2},!1);for(let[Nt,Kt]of[[-30,-46],[-30,46],[30,-46],[30,46],[0,-46],[0,46],[-30,22],[-30,-22]])it({kind:"lamp",...zt(Nt,Kt)},!1);it({kind:"pier",x:B.x+B.c*6,z:B.z-40+B.s*6,rot:Math.atan2(B.s,B.c),w:46,d:3,h:0},!1);for(let Nt=0;Nt<3;Nt++)it({kind:"boat",x:B.x+10+Nt*7,z:B.z-30+Nt*9,rot:.4+Nt*.5},!1)}{let q=Qt;for(let $=0,zt=0;zt<22&&$<900;$++){let Nt=a()*Math.PI*2,Kt=Math.sqrt(a())*(q.r-25),S=q.x+Math.cos(Nt)*Kt,V=q.z+Math.sin(Nt)*Kt;if(!wt(S,V,8))continue;let g=(Z,ut)=>Q(S+Z,V+ut),w=g(4,0)-g(-4,0),F=g(0,4)-g(0,-4),z=Math.atan2(-F,-w)+Math.round(a()*2-1)*.05,L=a()<.3;it({kind:"house",x:S,z:V,rot:z,w:L?7:8+a()*2,d:L?9:9+a()*2.5,h:L?6.4:3.2,floors:L?2:1,tint:a()}),zt++}it({kind:"well",x:q.x+6,z:q.z+4,r:1.1},!1)}{for(let q=0;q<5;q++){let $=q/5*Math.PI*2+.4,zt=ne.x+Math.cos($)*24,Nt=ne.z+Math.sin($)*24;it({kind:"hut",x:zt,z:Nt,rot:$+Math.PI,w:4,d:5,h:2.4})}it({kind:"logs",x:ne.x+6,z:ne.z-5,rot:.6,w:4.5,d:1.8,h:1.2}),it({kind:"campfire",x:ne.x,z:ne.z},!1)}{let q=ft.x+40,$=ft.z+120;xe.push({x:q,z:$,r:26,fall:14,a:1.1}),it({kind:"mudhif",x:q,z:$,rot:.3,w:6.5,d:20,h:5.8});for(let zt=0;zt<4;zt++){let Nt=1.2+zt*1.3,Kt=q+Math.cos(Nt)*22,S=$+Math.sin(Nt)*22;xe.push({x:Kt,z:S,r:6,fall:8,a:.9}),it({kind:"reedhut",x:Kt,z:S,rot:Nt,w:3.2,d:6,h:3})}for(let zt=0;zt<3;zt++)it({kind:"canoe",x:q-30+zt*9,z:$-20-zt*6,rot:1+zt*.7,float:!0},!1)}{it({kind:"lighthouse",x:W.x,z:W.z,rot:0,w:6,d:6,h:19}),it({kind:"house",x:W.x-16,z:W.z+4,rot:.3,w:6,d:7,h:3,floors:1,tint:.8,white:!0});for(let q=0;q<2;q++)it({kind:"boat",x:at.x+18+q*8,z:at.z+30+q*12,rot:1.6+q*.4},!1)}{let q=et,$=17;for(let[Nt,Kt]of[[-1,-1],[1,-1],[1,1],[-1,1]])it({kind:"ftower",x:q.x+Nt*$,z:q.z+Kt*$,r:3.2,h:6+a()*3},!1);[[[-1,-1],[1,-1]],[[1,-1],[1,1]],[[1,1],[-1,1]],[[-1,1],[-1,-1]]].forEach(([[Nt,Kt],[S,V]],g)=>{let w=q.x+Nt*$,F=q.z+Kt*$,z=q.x+S*$,L=q.z+V*$;for(let[Z,ut]of g===2?[[.1,.38],[.62,.9]]:[[.12,.88]]){let yt=ee(w,z,Z),_t=ee(F,L,Z),E=ee(w,z,ut),U=ee(F,L,ut);it({kind:"fwall",x:(yt+E)/2,z:(_t+U)/2,rot:Math.atan2(U-_t,E-yt),w:Math.hypot(E-yt,U-_t),d:1.3,h:3+a()*2.2},!1)}})}{it({kind:"reedhut",x:pt.x+30,z:pt.z-20,rot:.5,w:3.2,d:6,h:3});for(let zt=0;zt<3;zt++)it({kind:"boat",x:Ct.x+8,z:Ct.z-25+zt*14,rot:zt*.6},!1);let q=Math.atan2(90,240),$={x:_e.x+Math.cos(q)*(_e.r-8),z:_e.z+Math.sin(q)*(_e.r-8)};it({kind:"pier",x:$.x,z:$.z,rot:q+Math.PI,w:26,d:2.4,h:0,lake:!0},!1)}for(let q of I)q.a=Q(q.x,q.z);{let q=T.find($=>$.kind==="garage").pad;for(let $ of T)($.kind==="apron"||$.kind==="fuel")&&($.pad.a=q.a)}let Tt={d:0,t:0};function jt(q,$,zt){let Nt=H.at(q,$);if(!Nt)return zt;for(let Kt of Nt){let S=Kt.a,V=q-S.x,g=$-S.z,w=Math.abs(V*S.c+g*S.s),F=Math.abs(-V*S.s+g*S.c),z=Math.max(w-S.hw,F-S.hd,0);z<4&&(zt=ee(S.a,zt,ue(0,4,z)))}return zt}function re(q,$){return jt(q,$,u(q,$,ot(q,$,mt(q,$,fe(q,$,R(q,$)+gt(q,$))))))}let Y=(q,$)=>n+re(q,$);function lt(q,$,zt){for(let Kt of qt){let S=Math.hypot(q-Kt.x,$-Kt.z);if(S<Kt.r*1.25&&zt<n+Kt.lv+.2&&S<Jt(Kt,q,$)+2)return{kind:"lake",level:n+Kt.lv}}if(Math.hypot(q-ft.x,$-ft.z)<ft.r&&zt<n+l+.15)return{kind:"marsh",level:n+l};let Nt=we(q,$);return Nt&&Nt.d<Nt.w+.3&&zt<n+Nt.lv+.25?{kind:"river",level:n+Nt.lv,dx:Nt.dx,dz:Nt.dz}:zt<n+.1?{kind:"sea",level:n}:null}let Ht=(q,$,zt)=>ue(q.r,q.r*.6,Math.hypot($-q.x,zt-q.z)),Yt={x:400,z:-1150,r:950},dt={x:-1700,z:-250,r:750};function se(q,$,zt,Nt,Kt){let S={t:0,pine:0,oak:0,palm:0,olive:0,b:.04,rock:0,reed:0};if(zt<.35)return Math.hypot(q-ft.x,$-ft.z)<ft.r&&zt>-.6&&(S.reed=.75),S;let V=yn(q*.0032+5,$*.0032-3),g=ue(.44,.62,V),w=ue(90,200,zt);S.t=g*ee(.55,.75,w)+.03,S.pine=.25+w*.7,S.oak=1-S.pine,zt<25&&(S.olive=.3,S.palm=ue(25,6,zt)*.6,S.t*=.6);let F=Ht(Yt,q,$);F>0&&(S.t=ee(S.t,.9,F),S.pine=ee(S.pine,.85,F),S.oak=1-S.pine,S.palm=S.olive=0);let z=Ht(dt,q,$);z>0&&(S.t=ee(S.t,.82,z),S.oak=ee(S.oak,.95,z),S.pine=1-S.oak,S.palm*=1-z,S.olive*=1-z);let L=Ht(Zt,q,$);L>0&&(S.t=ee(S.t,.8,L),S.palm=ee(S.palm,1,L),S.pine*=1-L,S.oak*=1-L,S.olive*=1-L);let Z=Ht(le,q,$);Z>0&&(S.t*=1-Z*.97,S.b*=1-Z);let ut=Ht(Qt,q,$);ut>0&&(S.t=ee(S.t,.14,ut),S.olive=ee(S.olive,.6,ut),S.palm=ee(S.palm,.4,ut),S.pine*=1-ut,S.oak*=1-ut);let yt=ue(A.r,A.r*.5,Math.hypot(q-A.x,$-A.z));yt>0&&(S.t*=1-yt*.8,S.b=ee(S.b,.3,yt)),Math.hypot(q-P.x,$-P.z)<P.r&&(S.t=.05,S.oak=1,S.pine=0),Nt<110&&zt<5&&(S.t=.05,S.palm=1,S.oak=S.pine=S.olive=0,S.b=.03),zt>330&&(S.t*=.5),Kt>.75&&(S.t*=.4,S.rock=ue(.75,1.1,Kt)*.35),S.rock+=.006;let E=X(q,$);E&&E.d<E.hw+2.2&&(S.t=S.b=S.rock=0);let U=we(q,$);return U&&U.d<U.w+1.5&&(S.t=S.rock=0,U.d>U.w-.5&&(S.reed=.3)),S}function Me(q,$){if(Math.hypot(q-st.x,$-st.z)<62||Bn&&Math.hypot(q-Bn.x-Bn.fx*6,$-Bn.z-Bn.fz*6)<17)return!0;for(let Nt of he)if(Math.hypot(q-Nt.fx,$-Nt.fz)<7)return!0;if(Oi&&xi(q,$,4.5)||Math.hypot(q-ne.x,$-ne.z)<ne.r-8||Math.hypot(q-et.x,$-et.z)<26||Math.hypot(q-W.x,$-W.z)<30)return!0;let zt=H.at(q,$);if(zt)for(let Nt of zt){let Kt=Nt.a,S=q-Kt.x,V=$-Kt.z;if(Math.abs(S*Kt.c+V*Kt.s)<Kt.hw+2.5&&Math.abs(-S*Kt.s+V*Kt.c)<Kt.hd+2.5)return!0}for(let Nt of T)if((Nt.kind==="fountain"||Nt.kind==="ftower")&&Math.hypot(q-Nt.x,$-Nt.z)<(Nt.r||2)+2)return!0;return!1}let oe=[{id:"summit",name:"\u0642\u0645\u0629 \u0627\u0644\u0633\u062D\u0627\u0628",icon:"\u{1F3D4}\uFE0F",x:o,z:r,r:22,sub:"\u0623\u0628\u0648 \u062C\u0627\u0633\u0645 \u0648\u0627\u0644\u0686\u0627\u064A\u0686\u064A"},{id:"shoulder",name:"\u0645\u0635\u0637\u0628\u0629 \u0627\u0644\u063A\u064A\u0645",icon:"\u2601\uFE0F",x:o,z:r,r:340,ring:225,sub:"\u0643\u062A\u0641 \u0627\u0644\u062C\u0628\u0644"},{id:"mount",name:"\u062C\u0628\u0644 \u0627\u0644\u0647\u064A\u0628\u0629",icon:"\u26F0\uFE0F",x:o,z:r,r:1700,sub:"\u0642\u0644\u0628 \u0627\u0644\u062C\u0632\u064A\u0631\u0629"},{id:"fajr",name:"\u0633\u0627\u062D\u0629 \u0627\u0644\u0641\u062C\u0631",icon:"\u{1F305}",x:st.x,z:st.z,r:110,sub:"\u0633\u0648\u0642 \u0648\u0686\u0627\u064A\u062E\u0627\u0646\u0629 \u064A\u0645 \u0627\u0644\u062E\u0644\u064A\u062C"},{id:"bay",name:"\u062E\u0644\u064A\u062C \u0627\u0644\u0641\u062C\u0631",icon:"\u26F5",x:B.x+200,z:B.z,r:520},{id:"groves",name:"\u0628\u0633\u0627\u062A\u064A\u0646 \u0627\u0644\u0631\u0637\u0628",icon:"\u{1F334}",x:Zt.x,z:Zt.z,r:Zt.r},{id:"village",name:"\u0642\u0631\u064A\u0629 \u0627\u0644\u0637\u064A\u0646",icon:"\u{1F3D8}\uFE0F",x:Qt.x,z:Qt.z,r:Qt.r+30},{id:"light",name:"\u0645\u0646\u0627\u0631\u0629 \u0627\u0644\u0635\u064A\u0627\u062F\u064A\u0646",icon:"\u{1F5FC}",x:W.x,z:W.z,r:200},{id:"kohl",name:"\u062C\u0628\u0644 \u0627\u0644\u0643\u062D\u0644",icon:"\u{1F5FB}",x:1550,z:-1950,r:560},{id:"lake",name:"\u0628\u062D\u064A\u0631\u0629 \u0627\u0644\u0642\u0645\u0631",icon:"\u{1F319}",x:_e.x,z:_e.z,r:_e.r+140},{id:"huts",name:"\u0623\u0643\u0648\u0627\u062E \u0627\u0644\u062D\u0637\u0651\u0627\u0628\u064A\u0646",icon:"\u{1FA93}",x:ne.x,z:ne.z,r:120},{id:"shadows",name:"\u063A\u0627\u0628\u0629 \u0627\u0644\u0638\u0644\u0627\u0644",icon:"\u{1F332}",x:Yt.x,z:Yt.z,r:Yt.r},{id:"marsh",name:"\u0647\u0648\u0631 \u0627\u0644\u0639\u0646\u0628\u0631",icon:"\u{1F6F6}",x:ft.x,z:ft.z,r:ft.r},{id:"mudhif",name:"\u0645\u0636\u064A\u0641 \u0627\u0644\u0642\u0635\u0628",icon:"\u{1F6D6}",x:ft.x+40,z:ft.z+120,r:60},{id:"wheat",name:"\u0633\u0647\u0644 \u0627\u0644\u0633\u0646\u0627\u0628\u0644",icon:"\u{1F33E}",x:le.x,z:le.z,r:le.r},{id:"fort",name:"\u0623\u0637\u0644\u0627\u0644 \u0627\u0644\u062D\u0635\u0646",icon:"\u{1F3F0}",x:et.x,z:et.z,r:260},{id:"oaks",name:"\u063A\u0627\u0628\u0629 \u0627\u0644\u0628\u0644\u0648\u0637",icon:"\u{1F333}",x:dt.x,z:dt.z,r:dt.r},{id:"pearl",name:"\u0634\u0627\u0637\u0626 \u0627\u0644\u0644\u0624\u0644\u0624",icon:"\u{1F41A}",x:pt.x,z:pt.z,r:420},{id:"thyme",name:"\u062A\u0644\u0627\u0644 \u0627\u0644\u0632\u0639\u062A\u0631",icon:"\u{1F33F}",x:A.x,z:A.z,r:A.r},{id:"plateau",name:"\u0647\u0636\u0628\u0629 \u0627\u0644\u062E\u064A\u0651\u0627\u0644\u0629",icon:"\u{1F40E}",x:P.x,z:P.z,r:P.r+40},{id:"birds",name:"\u062C\u0632\u064A\u0631\u0629 \u0627\u0644\u0637\u064A\u0648\u0631",icon:"\u{1F54A}\uFE0F",x:N.x,z:N.z,r:N.r+80},{id:"gulls",name:"\u062C\u0631\u0641 \u0627\u0644\u0646\u0648\u0627\u0631\u0633",icon:"\u{1FAB6}",x:Mt.x,z:Mt.z,r:380},{id:"falls",name:"\u0634\u0644\u0627\u0644 \u0627\u0644\u0645\u0631\u0627\u064A\u0627",icon:"\u{1F4A6}",x:j.x,z:j.z,r:130},{id:"falcons",name:"\u062C\u0628\u0644 \u0627\u0644\u0635\u0642\u0648\u0631",icon:"\u{1F985}",x:1900,z:1900,r:760},{id:"valley",name:"\u0648\u0627\u062F\u064A \u0627\u0644\u063A\u0632\u0644\u0627\u0646",icon:"\u{1F98C}",x:Ut.x,z:Ut.z,r:Ut.r}];oe.sort((q,$)=>q.r-$.r);function ke(q,$){for(let Nt of oe){let Kt=Math.hypot(q-Nt.x,$-Nt.z);if(Nt.ring?Kt<Nt.r&&Kt>Nt.ring:Kt<Nt.r)return Nt}let zt=we(q,$);return zt&&zt.d<zt.w+30?{id:zt.river.id,name:zt.river.name,icon:"\u{1F4A7}",river:!0}:f(q,$)<0?{id:"sea",name:"\u0627\u0644\u0628\u062D\u0631",icon:"\u{1F30A}"}:f(q,$)<160?{id:"coast",name:"\u0627\u0644\u0633\u0627\u062D\u0644",icon:"\u{1F3D6}\uFE0F"}:{id:"wild",name:"\u0627\u0644\u0628\u0631\u0651\u064A\u0629",icon:"\u{1F343}"}}let Te={fajr:[st.x-22,st.z-16],village:[Qt.x+14,Qt.z+10],light:[W.x-24,W.z-12],lake:[_e.x+290,_e.z+60],huts:[ne.x-6,ne.z+8],mudhif:[ft.x+40,ft.z+146],wheat:[le.x+10,le.z+14],fort:[et.x+26,et.z+4],oaks:[-1600,-238],pearl:[pt.x+40,pt.z+10],thyme:[-1300,1712],plateau:[P.x+10,P.z],birds:[N.x,N.z],gulls:[Mt.x-40,Mt.z-30],falls:[j.x-30,j.z-20],falcons:[1650,1460],kohl:[1300,-1500],groves:[Zt.x,Zt.z+14]},he=[];for(let q of oe){let $=Te[q.id];if(!$)continue;let zt=Math.atan2(r-$[1],o-$[0]);he.push({id:"z_"+q.id,x:$[0]-Math.cos(zt)*3.4,z:$[1]-Math.sin(zt)*3.4,fx:$[0],fz:$[1],name:q.name,icon:q.icon,face:zt,flag:!1,fire:!0})}he.sort((q,$)=>($.id==="z_fajr")-(q.id==="z_fajr"));{let q=he[0];Object.assign(q,{x:st.x+18.5,z:st.z,face:0,start:!0})}let Ne=xn((i.seed||7)*31+5),sn=Math.PI*2,fn=(q,$)=>Math.hypot(re(q+1,$)-re(q-1,$),re(q,$+1)-re(q,$-1))/2,hi=(q,$)=>{let zt=re(q,$);if(zt<.6||f(q,$)<12||lt(q,$,n+zt+.05))return!1;let Nt=X(q,$);if(Nt&&Nt.d<Nt.hw+3)return!1;let Kt=we(q,$);return Kt&&Kt.d<Kt.w+6?!1:!T.some(S=>Math.hypot(S.x-q,S.z-$)<12)};function ni(q,$,zt,Nt,Kt,S){let V=[];for(let g=0;g<6e3&&V.length<Nt;g++){let w=Ne()*sn,F=Math.sqrt(Ne())*zt,z=q+Math.cos(w)*F,L=$+Math.sin(w)*F;!S(z,L)||V.some(Z=>Math.hypot(Z.x-z,Z.z-L)<Kt)||V.push({x:z,z:L})}return V}function Ln(q){let $={x:q.x,z:q.z,a:-1e9};for(let zt=-40;zt<=40;zt++)for(let Nt=-40;Nt<=40;Nt++){let Kt=q.x+zt*6,S=q.z+Nt*6,V=re(Kt,S);V>$.a&&($={x:Kt,z:S,a:V})}return{x:$.x,z:$.z}}let ui={x:-1650,z:1560},Oi=[{id:"gazelle",icon:"\u{1F98C}",name:"\u063A\u0632\u0627\u0644 \u062D\u064A",need:1,reward:500,zone:"valley",at:{x:Ut.x,z:Ut.z},note:"\u0628\u0648\u0627\u062F\u064A \u0627\u0644\u063A\u0632\u0644\u0627\u0646 \u0634\u0631\u0642 \u0627\u0644\u062C\u0628\u0644. \u0627\u0645\u0634\u0650 \u064A\u0645\u0651\u0647 \u0639\u0644\u0649 \u0647\u0648\u0646\u0643\u2026 \u0625\u0630\u0627 \u0631\u0643\u0636\u062A \u064A\u0634\u0631\u062F",items:[]},{id:"thyme",icon:"\u{1F33F}",name:"\u0628\u0627\u0642\u0627\u062A \u0632\u0639\u062A\u0631 \u0628\u0631\u064A",need:5,reward:150,zone:"thyme",at:ui,note:"\u062A\u0646\u0628\u062A \u0628\u064A\u0646 \u0635\u062E\u0648\u0631 \u062A\u0644\u0627\u0644 \u0627\u0644\u0632\u0639\u062A\u0631\u060C \u062C\u0646\u0648\u0628 \u0634\u0631\u0642 \u0627\u0644\u062C\u0628\u0644",items:ni(ui.x,ui.z,330,5,55,(q,$)=>hi(q,$)&&fn(q,$)<.45)},{id:"pearl",icon:"\u{1F9AA}",name:"\u0645\u062D\u0627\u0631 \u0628\u064A\u0647 \u0644\u0624\u0644\u0624",need:3,reward:250,zone:"pearl",at:pt,note:"\u0639\u0644\u0649 \u0631\u0645\u0644 \u0634\u0627\u0637\u0626 \u0627\u0644\u0644\u0624\u0644\u0624 \u064A\u0645 \u0627\u0644\u0645\u0627\u064A\u060C \u062C\u0646\u0648\u0628 \u0627\u0644\u062C\u0632\u064A\u0631\u0629",items:ni(pt.x,pt.z,420,3,45,(q,$)=>{let zt=f(q,$),Nt=re(q,$);return zt>3&&zt<18&&Nt>.35&&Nt<4&&!lt(q,$,n+Nt+.05)&&fn(q,$)<.22})},{id:"honey",icon:"\u{1F36F}",name:"\u062C\u0631\u0651\u0629 \u0639\u0633\u0644 \u0628\u0631\u064A",need:1,reward:200,zone:"oaks",at:dt,note:"\u062E\u0644\u064A\u0629 \u0646\u062D\u0644 \u0642\u062F\u064A\u0645\u0629 \u0628\u0646\u0635 \u063A\u0627\u0628\u0629 \u0627\u0644\u0628\u0644\u0648\u0637\u2026 \u0648\u0627\u0646\u062A\u0628\u0647 \u0645\u0646 \u0627\u0644\u062E\u0646\u0627\u0632\u064A\u0631 \u{1F417}",items:ni(dt.x-60,dt.z-80,180,1,0,(q,$)=>hi(q,$)&&fn(q,$)<.3)},{id:"feather",icon:"\u{1FAB6}",name:"\u0631\u064A\u0634\u0629 \u0635\u0642\u0631",need:1,reward:300,zone:"falcons",at:{x:p[0].x,z:p[0].z},note:"\u0628\u0639\u0634 \u0627\u0644\u0635\u0642\u0631 \u0641\u0648\u0643 \u0642\u0645\u0629 \u062C\u0628\u0644 \u0627\u0644\u0635\u0642\u0648\u0631\u060C \u0634\u0645\u0627\u0644 \u0634\u0631\u0642 \u0627\u0644\u062C\u0632\u064A\u0631\u0629",items:[Ln(p[0])]},{id:"fish",icon:"\u{1F41F}",name:"\u0633\u0645\u0686\u062A\u064A\u0646",need:2,reward:300,zone:"lake",at:{x:_e.x,z:_e.z},note:"\u0645\u0646 \u0631\u0635\u064A\u0641 \u0627\u0644\u062E\u0644\u064A\u062C \u0623\u0648 \u0628\u062D\u064A\u0631\u0629 \u0627\u0644\u0642\u0645\u0631\u2026 \u062A\u062D\u062A\u0627\u062C \u0633\u0646\u0627\u0631\u0629 \u0645\u0646 \u062F\u0643\u0627\u0646\u064A",items:[]}];for(let q of Oi)for(let $ of q.items)$.y=Y($.x,$.z);let xi=(q,$,zt)=>Oi.some(Nt=>Nt.items.some(Kt=>Math.hypot(q-Kt.x,$-Kt.z)<zt)),yi=T.find(q=>q.kind==="board"),hn={x:yi.x,z:yi.z,fx:Math.cos(yi.rot),fz:Math.sin(yi.rot),w:yi.d},wn=T.find(q=>q.kind==="garage"),Vn=T.find(q=>q.kind==="apron"),Bn={x:wn.x,z:wn.z,rot:wn.rot,w:wn.w,d:wn.d,fx:Math.cos(wn.rot),fz:Math.sin(wn.rot),apron:{x:Vn.x,z:Vn.z,rot:Vn.rot,w:Vn.w,d:Vn.d},car:{x:wn.x-Math.cos(wn.rot)*.6,z:wn.z-Math.sin(wn.rot)*.6,yaw:wn.rot}},Ms=(q,$)=>[wn,Vn].some(zt=>{let Nt=q-zt.x,Kt=$-zt.z,S=Math.cos(zt.rot),V=Math.sin(zt.rot);return Math.abs(Nt*S+Kt*V)<zt.w/2+.3&&Math.abs(-Nt*V+Kt*S)<zt.d/2+.3}),Si=[...[[300,-1300],[650,-1050],[180,-1720]].map(([q,$])=>({kind:"wolf",x:q,z:$})),...[[-1600,-420],[-1900,-120],[-1480,-720],[-1900,1300],[-2250,1620]].map(([q,$])=>({kind:"boar",x:q,z:$}))];return{SEA:n,HALF:s,SHOULDER:c,beasts:Si,H:Y,A:re,baseA:R,coastS:f,Rc:d,rivers:Lt,falls:ce,lakes:qt,marsh:{...ft,lv:l},roads:vt,sites:T,zones:oe,zoneAt:ke,rest:he,nearRoad:X,nearRiver:we,water:lt,flora:se,reserved:Me,tasks:Oi,board:hn,garage:Bn,paved:Ms,peaks:p,plateau:P,islet:N,fajr:st,shBay:B,valley:Ut,scarp:rt,fallsAt:j}}var ei=Math.PI/180,Bs=(i,t)=>i*100003+t;function Ec(i){let t=new Map;return{cell:i,add(e,n=e.x,s=e.z){let o=Bs(Math.floor(n/i),Math.floor(s/i)),r=t.get(o);r||(r=[],t.set(o,r)),r.push(e)},remove(e,n=e.x,s=e.z){let o=t.get(Bs(Math.floor(n/i),Math.floor(s/i)));if(o){let r=o.indexOf(e);r>=0&&o.splice(r,1)}},addArea(e,n,s,o,r){for(let a=Math.floor(n/i);a<=Math.floor(o/i);a++)for(let c=Math.floor(s/i);c<=Math.floor(r/i);c++){let h=Bs(a,c),d=t.get(h);d||(d=[],t.set(h,d)),d.push(e)}},each(e,n,s,o){let r=Math.floor(e/i),a=Math.floor(n/i);for(let c=-s;c<=s;c++)for(let h=-s;h<=s;h++){let d=t.get(Bs(r+c,a+h));if(d){for(let f of d)if(o(f)===!0)return!0}}return!1}}}function my(i,t){let e=i.x||0,n=i.z||0,s=13.3,o=95,r=0,a=(ot,ct)=>[e+Math.cos(ct*ei)*ot,n+Math.sin(ct*ei)*ot],c=(ot,ct)=>Math.hypot(ot-e,ct-n),h=(ot,ct)=>Math.atan2(ct-n,ot-e);function d(ot){if(ot<=s+1)return o;let ct=40+55*Math.pow(1-Ee((ot-s-1)/(72-s-1),0,1),1.12),j=36+4*(1-Ee((ot-72)/48,0,1)),ie=36*Math.pow(1-Ee((ot-120)/60,0,1),1.25)-ue(180,230,ot)*14;return ee(ee(ct,j,ue(68,76,ot)),ie,ue(116,124,ot))}let f=[{a:118.5*ei,r0:108,r1:190,w:7.5,depth:17},{a:101*ei,r0:22,r1:64,w:6,depth:15},{a:58*ei,r0:26,r1:72,w:4.5,depth:1.6,water:!0}],m=(ot,ct)=>{let j=c(ot,ct),ie=d(j)+(yn(ot*.028+5,ct*.028)-.5)*9*ue(s+2,s+12,j)*(1-ue(200,260,j)*.5);return ie+=5*ue(49.5,47.6,j)*ue(28,42,j),ie+=4*ue(27.2,25.3,j)*ue(15.5,21,j),ie},x=(ot,ct)=>{let j=c(ot,ct),ie=m(ot,ct);for(let qt of f){if(j<=qt.r0||j>=qt.r1)continue;let Jt=Math.abs(Pn(qt.a,h(ot,ct)))*j;Jt<qt.w&&(ie-=qt.depth*ue(qt.w,qt.w*.25,Jt)*ue(qt.r0,qt.r0+4,j)*ue(qt.r1,qt.r1-4,j))}return ie},y=[];function b(ot,ct={}){let j=ot.map(([I,H])=>{let[it,Q]=a(I,H);return new J(it,0,Q)}),ie=new Gn(j,!1,"centripetal"),qt=ie.getLength(),Jt=Math.max(2,Math.ceil(qt/.8)),l=[];for(let I=0;I<=Jt;I++){let H=ie.getUtoTmapping(I/Jt),it=ie.getPoint(H);l.push([it.x,it.z,Math.min(j.length-2,Math.floor(H*(j.length-1)))])}let u={id:y.length,kind:ct.kind||"trail",pts:l.map(([I,H,it])=>({x:I,z:H,wi:it,y:0,hw:ct.hw||1.35,kind:ct.kinds&&ct.kinds[it]||ct.kind||"trail"}))},T=u.pts.map(I=>m(I.x,I.z));if(u.pts.forEach((I,H)=>{let it=0,Q=0;for(let wt=-22;wt<=22;wt++)it+=T[Ee(H+wt,0,T.length-1)],Q++;I.y=it/Q}),ct.y0!=null||ct.y1!=null){let I=u.pts.length-1,H=ct.y0!=null?ct.y0-u.pts[0].y:0,it=ct.y1!=null?ct.y1-u.pts[I].y:0;u.pts.forEach((Q,wt)=>{Q.y+=ee(H,it,wt/(I||1))})}for(let I of u.pts)I.kind==="ledge"?I.hw=.72:I.kind==="bridge"?I.hw=.62:I.kind==="stones"&&(I.hw=.6);return y.push(u),u}let p=b([[166,12],[160,40],[153,68],[146,94],[142.5,114.6],[140,122.4],[134,146],[127,172],[121,194],[117,206]],{kinds:{4:"bridge"}}),_=[110,98,86,74],A=[212,224,236,248,260,272,284],P=(ot,ct)=>a(_[ot],A[ct]),M=(ot,ct)=>{let[j,ie]=P(ot,ct),qt=0;for(let Jt=0;Jt<9;Jt++)qt+=m(j+Math.cos(Jt)*4,ie+Math.sin(Jt)*4);return qt/9},N=[],R=new Set,v=xn(77),C=(ot,ct)=>ot*10+ct;(function ot(ct,j){R.add(C(ct,j));let ie=[[ct+1,j],[ct-1,j],[ct,j+1],[ct,j-1]].filter(([qt,Jt])=>qt>=0&&qt<4&&Jt>=0&&Jt<7&&!R.has(C(qt,Jt)));for(let qt=ie.length-1;qt>0;qt--){let Jt=Math.floor(v()*(qt+1));[ie[qt],ie[Jt]]=[ie[Jt],ie[qt]]}for(let[qt,Jt]of ie)R.has(C(qt,Jt))||(N.push([[ct,j],[qt,Jt]]),ot(qt,Jt))})(0,0),N.push([[1,2],[1,3]],[[2,4],[3,4]]);let G=new Map;for(let ot of N){let ct=C(...ot[0])*100+C(...ot[1]),j=C(...ot[1])*100+C(...ot[0]);!G.has(ct)&&!G.has(j)&&G.set(ct,ot)}let B=[],st=new Map;for(let[[ot,ct],[j,ie]]of G.values()){let[qt,Jt]=P(ot,ct),[l,u]=P(j,ie),T=(qt+l)/2+(v()-.5)*3,I=(Jt+u)/2+(v()-.5)*3,H=(Q,wt)=>[c(Q,wt),(h(Q,wt)/ei+360)%360],it=b([H(qt,Jt),H(T,I),H(l,u)],{kind:"maze",hw:1.25,y0:M(ot,ct),y1:M(j,ie)});it.cells=[[ot,ct],[j,ie]],B.push(it);for(let Q of it.cells)st.set(C(...Q),(st.get(C(...Q))||0)+1)}let at=b([[117,206],[113,209],[_[0],A[0]]],{kind:"maze",hw:1.3,y0:p.pts[p.pts.length-1].y,y1:M(0,0)}),W=b([[_[3],A[6]],[70,287],[66,292]],{kind:"maze",hw:1.3,y0:M(3,6)}),bt=[[66,292],[62,306],[58,334],[54,308],[50,336],[46,309],[43,330],[41,344],[40,0],[39.3,16],[38.6,30],[37.5,42],[36.6,53],[35.8,63],[34.4,75],[32.4,86],[31.2,92],[29.6,110.5],[27.4,122],[24,138],[20,154],[s+.4,168]],ft=b(bt,{y0:W.pts[W.pts.length-1].y,kinds:{7:"ledge",8:"ledge",9:"ledge",12:"stones",16:"bridge"}});{let ot=ft.pts,ct=0;for(let j=ot.length-1;j>=0&&(j<ot.length-1&&(ct+=Math.hypot(ot[j+1].x-ot[j].x,ot[j+1].z-ot[j].z)),ot[j].y=Math.max(ot[j].y,o-ct*.42),!(ct>60));j--);ot[ot.length-1].y=o;for(let j=Math.max(1,ot.length-80);j<ot.length;j++)(ot[j].y-ot[j-1].y)/(Math.hypot(ot[j].x-ot[j-1].x,ot[j].z-ot[j-1].z)||1)>.24&&ot[j].kind==="trail"&&(ot[j].kind="stairs",ot[j].hw=1.25)}let Ct=[];for(let ot of[p,ft]){let ct=0;for(;ct<ot.pts.length;){if(ot.pts[ct].kind!=="bridge"){ct++;continue}let j=ct;for(;j+1<ot.pts.length&&ot.pts[j+1].kind==="bridge";)j++;let ie=ot.pts[Math.max(0,ct-1)],qt=ot.pts[Math.min(ot.pts.length-1,j+1)],Jt=j-ct+1,l=Jt>10?[Math.floor(Jt*.3),Math.floor(Jt*.7)]:[Math.floor(Jt/2)];for(let u=ct;u<=j;u++){let T=(u-ct+1)/(Jt+1),I=ot.pts[u];I.y=ee(ie.y,qt.y,T)-Math.sin(T*Math.PI)*.7,I.gap=l.includes(u-ct)}Ct.push({seg:ot,i:ct,j,a:ie,b:qt}),ct=j+1}}let pt=[];for(let ot=0;ot<ft.pts.length;ot++){let ct=ft.pts[ot];if(ct.kind==="stones"&&(!pt.length||Math.hypot(ct.x-pt[pt.length-1].x,ct.z-pt[pt.length-1].z)>2.25)){let j=ft.pts[Math.min(ot+1,ft.pts.length-1)],ie=(t()-.5)*.5,qt=-(j.z-ct.z),Jt=j.x-ct.x,l=Math.hypot(qt,Jt)||1;pt.push({x:ct.x+qt/l*ie,z:ct.z+Jt/l*ie,y:ct.y+.05,r:.72})}}let xt=[];for(let ot of y)ot.pts.forEach((ct,j)=>{ct.seg=ot,ct.k=j,xt.push(ct)});let Mt=Ec(4);for(let ot of xt)Mt.add(ot);function Ut(ot,ct,j,ie=1){let qt=null,Jt=1/0;if(Mt.each(ot,ct,ie,Tt=>{let jt=(Tt.x-ot)**2+(Tt.z-ct)**2+(j!=null?Math.max(0,Math.abs(Tt.y-j)-1.2)**2*9:0);jt<Jt&&(Jt=jt,qt=Tt)}),!qt)return null;let l=qt.seg.pts,u=l[Math.min(qt.k+1,l.length-1)],T=l[Math.max(qt.k-1,0)],I=Math.hypot(ot-qt.x,ct-qt.z),H=qt.y,it=u.x-T.x,Q=u.z-T.z,wt=Math.hypot(it,Q)||1;it/=wt,Q/=wt;for(let[Tt,jt]of[[T,qt],[qt,u]]){let re=jt.x-Tt.x,Y=jt.z-Tt.z,lt=re*re+Y*Y||1,Ht=Ee(((ot-Tt.x)*re+(ct-Tt.z)*Y)/lt,0,1),Yt=Math.hypot(ot-(Tt.x+re*Ht),ct-(Tt.z+Y*Ht));Yt<I&&(I=Yt,H=ee(Tt.y,jt.y,Ht))}return{p:qt,d:I,y:H,tx:it,tz:Q,side:(ot-qt.x)*-Q+(ct-qt.z)*it}}function Qt(ot,ct){let j=c(ot,ct),ie=x(ot,ct);if(j<s+1.5)return ee(ie,o,ue(s+1.5,s+.3,j));if(j>200)return ie;let qt=ie,Jt=Ut(ot,ct,null,2);if(Jt&&Jt.d<Jt.p.hw+3.2){let l=Jt.p.kind;if(l!=="bridge"){if(l==="stones")qt=Math.min(qt,Jt.y-.55);else if(qt=ee(qt,Jt.y-.04,ue(Jt.p.hw+3.2,Jt.p.hw+.5,Jt.d)),l==="ledge"){let u=Jt.d-Jt.p.hw;u>0&&(j>c(Jt.p.x,Jt.p.z)?qt=Math.min(qt,Jt.y-ue(0,2.2,u)*11):qt=Math.max(qt,Jt.y+ue(.3,2.4,u)*4.5))}}}return qt}let ne=[],_e=(ot,ct)=>ot.pts.findIndex(j=>j.kind===ct),et=(ot,ct,j)=>{let ie=ot.pts[Ee(ct,0,ot.pts.length-1)],qt=ot.pts[Ee(ct+6,0,ot.pts.length-1)],Jt={id:"cp"+ne.length,x:ie.x,z:ie.z,y:ie.y,name:j,face:Math.atan2(qt.z-ie.z,qt.x-ie.x),flag:!0};return ne.push(Jt),Jt};et(p,3,"\u0633\u0641\u062D \u0627\u0644\u062C\u0628\u0644"),et(p,_e(p,"bridge")-7,"\u0642\u0628\u0644 \u0627\u0644\u062C\u0633\u0631"),et(p,p.pts.length-2,"\u0628\u0627\u0628 \u063A\u0627\u0628\u0629 \u0627\u0644\u0645\u062A\u0627\u0647\u0629"),et(ft,4,"\u0637\u0644\u0639\u0629 \u0627\u0644\u0632\u0643\u0632\u0627\u0643"),et(ft,_e(ft,"ledge")-6,"\u0642\u0628\u0644 \u062D\u0627\u0641\u0629 \u0627\u0644\u062C\u0631\u0641"),et(ft,_e(ft,"stones")-5,"\u0642\u0628\u0644 \u0627\u0644\u0633\u0627\u0642\u064A\u0629"),et(ft,_e(ft,"bridge")-6,"\u0642\u0628\u0644 \u0627\u0644\u062C\u0633\u0631 \u0627\u0644\u062B\u0627\u0646\u064A");let Zt=ft.pts[ft.pts.length-1],le=h(Zt.x,Zt.z);ne.push({id:"summit",x:e-3,z:n+3,y:o,name:"\u0633\u0627\u062D\u0629 \u0627\u0644\u0642\u0645\u0629",face:0,flag:!1,plaza:!0});let xe=[],te=[];{let ot=new Map;for(let u of B){let[T,I]=u.cells.map(H=>C(...H));for(let[H,it]of[[T,I],[I,T]])ot.has(H)||ot.set(H,[]),ot.get(H).push(it)}let ct=C(0,0),j=C(3,6),ie=new Map([[ct,-1]]),qt=[ct],Jt=new Map;for(;qt.length;){let u=qt.shift();if(u===j)break;for(let T of ot.get(u)||[])ie.has(T)||(ie.set(T,u),qt.push(T))}for(let u=j;ie.get(u)!==-1&&ie.has(u);u=ie.get(u))Jt.set(ie.get(u),u);let l=0;for(let[u,T]of Jt){if((st.get(u)||0)<3||l++%3===2)continue;let[I,H]=P(Math.floor(u/10),u%10),[it,Q]=P(Math.floor(T/10),T%10),wt=Math.atan2(Q-H,it-I),Tt=I+Math.cos(wt+.9)*1.9,jt=H+Math.sin(wt+.9)*1.9;xe.push({x:Tt,z:jt,a:wt,text:"\u2B05 \u0644\u0644\u0642\u0645\u0629"})}for(let[u,T]of st){if(T!==1||u===ct||u===j)continue;let[I,H]=P(Math.floor(u/10),u%10);te.push({x:I,z:H,a:t()*Pe})}}let fe=[];for(let ot of[p,ft])for(let ct=8;ct<ot.pts.length-4;ct+=17){let j=ot.pts[ct];j.kind==="trail"&&fe.push({x:j.x,y:j.y+.9,z:j.z})}for(let ot of te){let ct=Ut(ot.x,ot.z,null,2);if(ct)for(let j=0;j<4;j++){let ie=ct.p.seg.pts[Ee(ct.p.k+(j-1.5)*2|0,0,ct.p.seg.pts.length-1)];fe.push({x:ie.x,y:ie.y+.9,z:ie.z})}}let De=(ot,ct)=>{let j=ot.pts[Ee(ct,0,ot.pts.length-1)];return{x:j.x,z:j.z,y:j.y}},kt=Math.floor(p.pts.length*.22),k=_e(ft,"ledge"),vt=[{kind:"wolf",home:De(p,kt)},{kind:"wolf",home:De(p,kt+4),ox:1.5},{kind:"wolf",home:De(ft,k-26)},{kind:"wolf",home:De(ft,k-22),ox:1.2},{kind:"boar",home:De(B[Math.floor(B.length*.4)],10)},{kind:"boar",home:De(B[Math.floor(B.length*.75)],10)}],K=(ot,ct)=>[e+Math.cos(ot*ei)*ct,n+Math.sin(ot*ei)*ct],ht=236,[X,mt]=K(ht,9.2),rt=K(221,6.2),gt=K(118,9),St=K(300,10.2),Lt={x:e,z:n,RP:s,HS:o,DECK_A:r,ENTRY_A:le,kioskA:ht,kiosk:[X,mt],meet:rt,bell:gt,flag:St,benches:[185,150,30],beds:[80,175,280,350],lamps:[45,145,255,330],pines:[62,100,200,320],guests:[{a:212,r:6.9,look:rt,kind:"tea"},{a:229,r:6.9,look:rt,kind:"tea"},{a:219,r:5.2,look:[X,mt],kind:"stand"}],scope:[e+s+3.9,n],inter:[{id:"tea",x:X-Math.cos(ht*ei)*2.1,z:mt-Math.sin(ht*ei)*2.1,r:2.3,label:"\u2615 \u0627\u0634\u0631\u0628 \u0634\u0627\u064A"},{id:"chat",x:rt[0],z:rt[1],r:2.2,label:"\u{1F5E3}\uFE0F \u0633\u0648\u0644\u0641 \u0648\u064A\u0627\u0647\u0645"},{id:"bell",x:e+(gt[0]-e)*.84,z:n+(gt[1]-n)*.84,r:2.2,label:"\u{1F514} \u062F\u0643 \u0627\u0644\u062C\u0631\u0633"},{id:"scope",x:e+s+3.1,z:n,r:1.8,label:"\u{1F52D} \u0628\u0627\u0648\u0639 \u0628\u0627\u0644\u062A\u0644\u0633\u0643\u0648\u0628"},{id:"fountain",x:e,z:n,r:3.4,label:"\u{1FA99} \u0627\u0631\u0645\u0650 \u0639\u0645\u0644\u0629 \u0628\u0627\u0644\u0646\u0627\u0641\u0648\u0631\u0629"}]},It=[];It.push({x:e,z:n,r:2.6,tall:1});for(let ot of[-1.1,0,1.1])It.push({x:X+Math.cos(ht*ei+Math.PI/2)*ot,z:mt+Math.sin(ht*ei+Math.PI/2)*ot,r:1.05});{let ot=-Math.sin(118*ei),ct=Math.cos(118*ei);It.push({x:gt[0]+ot*.9,z:gt[1]+ct*.9,r:.25},{x:gt[0]-ot*.9,z:gt[1]-ct*.9,r:.25})}It.push({x:St[0],z:St[1],r:.3});for(let ot of Lt.beds){let[ct,j]=K(ot,11);It.push({x:ct,z:j,r:.75})}for(let ot of Lt.benches){let[ct,j]=K(ot,6.6),ie=-Math.sin(ot*ei),qt=Math.cos(ot*ei);It.push({x:ct,z:j,r:.75},{x:ct+ie*.8,z:j+qt*.8,r:.5},{x:ct-ie*.8,z:j-qt*.8,r:.5})}for(let ot of Lt.guests){let[ct,j]=K(ot.a,ot.r);It.push({x:ct,z:j,r:.42})}for(let ot of Lt.pines){let[ct,j]=K(ot,11.6);It.push({x:ct,z:j,r:.5,tall:1})}for(let ot=0;ot<64;ot++){let ct=ot/64*Pe;Math.abs(Pn(ct,le))<.2||Math.abs(Pn(ct,r))<.22||It.push({x:e+Math.cos(ct)*(s-.1),z:n+Math.sin(ct)*(s-.1),r:.55,wall:1})}let ce=[];for(let ot of xt)if(ot.kind==="ledge"&&ot.k%2===0){let ct=ot.seg.pts[Math.min(ot.k+1,ot.seg.pts.length-1)],j=ot.seg.pts[Math.max(ot.k-1,0)],ie=ct.x-j.x,qt=ct.z-j.z,Jt=Math.hypot(ie,qt)||1,l=-qt/Jt,u=ie/Jt;c(ot.x+l,ot.z+u)>c(ot.x,ot.z)&&(l=-l,u=-u);let T=.9+je(ot.k,1)*.8;ce.push({p:ot,nx:l,nz:u,sz:T}),It.push({x:ot.x+l*(ot.hw+T),z:ot.z+u*(ot.hw+T),r:T*.8,tall:1})}for(let ot of te)It.push({x:ot.x,z:ot.z,r:.9});let tt=f[2],we=(ot,ct)=>{let j=c(ot,ct),ie=(h(ot,ct)/ei+360)%360;return j>66&&j<122&&ie>203&&ie<293};return{id:i.id||"M1",x:e,z:n,RP:s,HS:o,DECK_A:r,ENTRY_A:le,rad:c,ang:h,P2:a,prof:d,gullies:f,stream:tt,Hbase:m,Hnat:x,H:Qt,segs:y,ALL:xt,A:p,C2:ft,MAZ:B,entrySeg:at,exitSeg:W,cellP:P,key:C,nearest:Ut,bridges:Ct,stones:pt,rest:ne,signs:xe,logs:te,coins:fe,beasts:vt,plaza:Lt,coll:It,ledgeRocks:ce,inMaze:we,foot:200}}function gy(i){let t=i.x,e=i.z||0,n=i.floor??-35,s=120,o=11,r=y=>2.6*Math.sin(y*.055+.6)+1.5*Math.sin(y*.13+2.1)-.6,a=[[17,1],[45,-1],[76,1],[103,-1]].map(([y,b])=>({x:y,z:Ee(r(y)+b*6.4,-8.2,8.2),side:b,rot:b>0?Math.PI:0,base:0}));function c(y,b){let p=Math.abs(b),_=(yn(y*.09+3.1,b*.09)-.5)*.55,A=b-r(Ee(y,-10,s+10));_-=Math.exp(-(A*A)/1.3)*.75*ue(-12,-2,y);let P=Ee((p-(o-1))/21,0,1);if(_+=21*P*P+ue(30,50,p)*7,_+=(yn(y*.07+(b>0?9:2),p*.09)-.5)*5*ue(o+1,o+9,p),y<2&&(_=Math.max(_,21*Math.pow(Ee((2-y)/62,0,1),.9))),y>s-2){let M=(y-s+2)/30;_+=20*Math.min(1,M)**2+ue(1,2.5,M)*6}return _+=ue(46,70,p)*45+ue(-62,-90,y)*45+ue(s+35,s+70,y)*45,_}for(let y of a)y.base=c(y.x,y.z)+.05;let h=(y,b)=>[y-t,b-e];function d(y,b){let p=y-t,_=b-e;if(p<-95||p>s+75||Math.abs(_)>72)return 1/0;let A=c(p,_);for(let P of a){let M=p-P.x,N=_-P.z;M*M+N*N<49&&(A=ee(A,P.base,ue(7,4.5,Math.hypot(M,N))))}return n+A}let f=y=>n+c(y,r(y))+.42,m=(y,b)=>y>1.5&&y<s-1.5&&Math.abs(b)<o-1.2,x=[{id:"valley",x:t+4,z:e+r(4)+3.2,y:n+c(4,r(4)+3.2),name:"\u0645\u062F\u062E\u0644 \u0627\u0644\u0648\u0627\u062F\u064A",face:0,flag:!1}];for(let y of x)y.y=d(y.x,y.z);return{id:i.id||"V1",x:t,z:e,VF:n,VL:s,FLOOR:o,riverZ:r,CAMPS:a,H0:c,Hv:d,toL:h,waterLevel:f,onFloor:m,rest:x}}var jf=hu;function Qf(i=hu){let t=xn(i.seed||1),e=i.half||500,n=my(i.features.find(k=>k.type==="mountain"),t),s=i.features.find(k=>k.type==="valley"),o=Kf(i,n,s),r=o.SEA,a=gy({...s,floor:r+o.A(o.valley.x,o.valley.z)-21}),c=(k,vt)=>o.H(k,vt);function h(k,vt){let K=n.rad(k,vt),ht=K<245?K>200?ee(n.H(k,vt),c(k,vt),ue(200,245,K)):n.H(k,vt):c(k,vt),X=a.Hv(k,vt);return X<ht&&(ht=X),ht}let d=(k,vt)=>Math.hypot(h(k+.4,vt)-h(k-.4,vt),h(k,vt+.4)-h(k,vt-.4))/.8,f=Ec(4),m=[],x=k=>(m.push(k),f.add(k),k);for(let k of n.coll)x(k);let y={pineA:[],pineB:[],oak:[],hedge:[],bush:[],rock:[],palm:[[],[],[]],fruit:[[],[],[]],boulder:[],vbush:[],vrock:[],rim:[]},b=(k,vt,K)=>{if(n.rad(k,vt)<n.RP+3)return!1;let ht=n.nearest(k,vt,null,2);if(ht&&ht.d<ht.p.hw+K)return!1;for(let X of n.rest)if(Math.hypot(k-X.x,vt-X.z)<4.6)return!1;return!0};for(let k=-125;k<=125;k+=1.25)for(let vt=-125;vt<=125;vt+=1.25){let K=n.x+k+(t()-.5)*.4,ht=n.z+vt+(t()-.5)*.4;if(!n.inMaze(K,ht)||!b(K,ht,.75))continue;let X=h(K,ht);if(y.hedge.push({x:K,y:X-.1,z:ht,ry:t()*Pe,s:.95+t()*.45}),x({x:K,z:ht,r:.62,hedge:1}),t()<.16&&b(K,ht,2.2)){let mt={x:K,y:X-.15,z:ht,ry:t()*Pe,s:.85+t()*.4};(t()<.5?y.pineA:y.oak).push(mt)}}{let k=xn(20261123),vt=(gt,St)=>[a.x+gt,a.z+St],K=(gt,St,Lt)=>a.CAMPS.some(It=>Math.hypot(gt-It.x,St-It.z)<Lt),ht=(gt,St,Lt)=>Math.abs(St-a.riverZ(gt))<1.7+Lt||K(gt,St,6.8+Lt),X=(gt=0,St=a.FLOOR-.6,Lt=-1,It=a.VL+1)=>({x:Lt+k()*(It-Lt),z:(k()<.5?-1:1)*(gt+k()*(St-gt))}),mt=(gt,St)=>d(a.x+gt,a.z+St),rt=[];for(let gt of[-1,1])for(let St=-2;St<a.VL+2;St+=5+k()*5){let Lt=a.riverZ(St)+gt*(2.3+k()*1.8);!K(St,Lt,7.5)&&Math.abs(Lt)<a.FLOOR&&rt.push({x:St,z:Lt})}for(let gt=0;gt<16;gt++){let St=X(2,a.FLOOR-1);ht(St.x,St.z,.6)||rt.push(St)}rt.forEach((gt,St)=>{let[Lt,It]=vt(gt.x,gt.z);x({x:Lt,z:It,r:.38,tall:1,tree:1}),y.palm[St%3].push({x:Lt,y:h(Lt,It)-.05,z:It,ry:k()*Pe,s:.85+k()*.4})});for(let gt=0;gt<3;gt++)for(let St=0,Lt=0;Lt<9&&St<400;St++){let It=X(1.5,a.FLOOR-.5),[ce,tt]=vt(It.x,It.z);ht(It.x,It.z,1.4)||f.each(ce,tt,1,we=>Math.hypot(we.x-ce,we.z-tt)<3)||(x({x:ce,z:tt,r:.35,tall:1,tree:1}),y.fruit[gt].push({x:ce,y:h(ce,tt)-.05,z:tt,ry:k()*Pe,s:.75+k()*.45}),Lt++)}for(let gt=0;y.vbush.length<130&&gt<3e3;gt++){let St=X(0,a.FLOOR+4);if(ht(St.x,St.z,.5)||mt(St.x,St.z)>.7)continue;let[Lt,It]=vt(St.x,St.z);y.vbush.push({x:Lt,y:h(Lt,It),z:It,ry:k()*Pe,s:.5+k()*.8})}for(let gt=0;y.vrock.length<90&&gt<2e3;gt++){let St=X(0,a.FLOOR);if(K(St.x,St.z,6)||Math.abs(St.z-a.riverZ(St.x))<1.1)continue;let Lt=.35+k()*.8,[It,ce]=vt(St.x,St.z);Lt>.8&&x({x:It,z:ce,r:.3*Lt}),y.vrock.push({x:It,y:h(It,ce)+.04,z:ce,rx:k()*3,ry:k()*3,rz:k()*3,s3:[Lt,Lt*(.6+k()*.4),Lt*(.8+k()*.4)]})}for(let gt=0;gt<230;gt++){let St=-14+k()*(a.VL+30),Lt=a.FLOOR+1+k()*26,It=(k()<.5?-1:1)*Lt,ce=.8+k()*3.2,[tt,we]=vt(St,It);y.boulder.push({x:tt,y:h(tt,we)-ce*.42,z:we,rx:k()*3,ry:k()*3,rz:k()*3,s3:[ce,ce*(.5+k()*.4),ce*(.8+k()*.5)]})}for(let gt=0;gt<26;gt++){let St=X(a.FLOOR-3,a.FLOOR+1);if(K(St.x,St.z,7))continue;let Lt=1.3+k()*1.6,[It,ce]=vt(St.x,St.z);x({x:It,z:ce,r:.45*Lt}),y.boulder.push({x:It,y:h(It,ce)-.15,z:ce,rx:k()*3,ry:k()*3,rz:k()*3,s3:[Lt,Lt*.7,Lt]})}for(let gt=0;gt<140;gt++){let St=-40+k()*(a.VL+80),Lt=26+k()*40,It=(k()<.5?-1:1)*Lt;if(Cn(St*.06,It*.06)<.4)continue;let[ce,tt]=vt(St,It);y.rim.push({x:ce,y:h(ce,tt)-.2,z:tt,ry:k()*Pe,s:1+k()*1.3})}}let p=new Map,_=(k,vt)=>{let K=Bs(Math.floor(k.x/6),Math.floor(k.z/6));p.set(K,(p.get(K)||0)+vt)};for(let k of m)k.tree&&_(k,1);let A=[],P=Ec(16),M=k=>{k.box=!0,k.c=Math.cos(k.rot||0),k.s=Math.sin(k.rot||0);let vt=Math.hypot(k.hw,k.hd);return m.push(k),f.addArea(k,k.x-vt,k.z-vt,k.x+vt,k.z+vt),k};for(let k of o.sites){k.y=o.H(k.x,k.z);let vt=k.kind,K=k.rot||0;if(["house","hut","reedhut","mudhif","teahouse","stall","board","logs","fwall"].includes(vt))M({x:k.x,z:k.z,hw:k.w/2,hd:k.d/2,rot:K,tall:1,h:k.h,site:k});else if(vt==="garage"){let ht=Math.cos(K),X=Math.sin(K),mt=(rt,gt,St,Lt)=>M({x:k.x+rt*ht-gt*X,z:k.z+rt*X+gt*ht,hw:St,hd:Lt,rot:K,tall:1,h:k.h,site:k});mt(-k.w/2+.14,0,.14,k.d/2),mt(0,-k.d/2+.14,k.w/2,.14),mt(0,k.d/2-.14,k.w/2,.14),mt(-1.2,-k.d/2+.55,2.3,.42),mt(-3.9,k.d/2-.62,.7,.5),mt(2.6,k.d/2-.45,.9,.3)}else if(vt==="fuel")M({x:k.x,z:k.z,hw:k.w/2,hd:k.d/2,rot:K,tall:1,h:k.h,site:k});else if(vt==="lighthouse")x({x:k.x,z:k.z,r:3.1,tall:1});else if(vt==="fountain")x({x:k.x,z:k.z,r:k.r});else if(vt==="well"||vt==="ftower")x({x:k.x,z:k.z,r:k.r,tall:vt==="ftower"?1:0});else if(vt==="lamp"||vt==="signpost")x({x:k.x,z:k.z,r:.14});else if(vt==="palm")x({x:k.x,z:k.z,r:.3,tall:1,tree:1});else if(vt==="gate")for(let ht of[-1,1])x({x:k.x-Math.sin(K)*ht*4.6,z:k.z+Math.cos(K)*ht*4.6,r:.55,tall:1});else if(vt==="pier"){let ht=k.lake?o.lakes[0]:null,X=ht?r+ht.lv+.55:r+.95,mt={x:k.x,z:k.z,c:Math.cos(K),s:Math.sin(K),hw:k.w/2,hd:k.d/2,y:X};k.y=X,A.push(mt);let rt=Math.max(k.w,k.d)/2+1;P.addArea(mt,k.x-rt,k.z-rt,k.x+rt,k.z+rt)}}function N(k,vt){let K=null;return P.each(k,vt,0,ht=>{let X=k-ht.x,mt=vt-ht.z;Math.abs(X*ht.c+mt*ht.s)<ht.hw+.05&&Math.abs(-X*ht.s+mt*ht.c)<ht.hd&&(K=ht)}),K}let R=32,v=new Map,C=(i.seed||1)*2654435761,G=(k,vt)=>{let K=k-a.x,ht=vt-a.z;return K>-66&&K<a.VL+30&&Math.abs(ht)<46};function B(k,vt){let K=Bs(k,vt),ht=v.get(K);if(ht)return ht;ht={ci:k,cj:vt,x:(k+.5)*R,z:(vt+.5)*R,items:[],colls:[],on:!1};let X=xn((k*73856093^vt*19349663^C)>>>0),mt=k*R,rt=vt*R;for(let gt=0;gt<4;gt++)for(let St=0;St<4;St++){let Lt=mt+(gt+.5)*8+(X()-.5)*5,It=rt+(St+.5)*8+(X()-.5)*5,ce=X(),tt=X(),we=X(),ot=X()*Pe;if(Math.abs(Lt)>e-20||Math.abs(It)>e-20||G(Lt,It))continue;let ct=n.rad(Lt,It);if(ct<250&&(ct<n.RP+3||n.inMaze(Lt,It)||!b(Lt,It,1.4)||Ct(Lt,It))||o.reserved(Lt,It)||st(Lt,It))continue;let j=h(Lt,It),ie=j-r;if(ie>-1&&ie<.35&&ce>.6){let l=o.flora(Lt,It,ie,0,0);l.reed>0&&X()<l.reed&&ht.items.push({t:"reed",x:Lt,y:j-.1,z:It,s:.8+we*.6,ry:ot});continue}if(ie<.35)continue;let qt=Math.hypot(h(Lt+1.5,It)-j,h(Lt,It+1.5)-j)/1.5,Jt=o.flora(Lt,It,ie,o.coastS(Lt,It),qt);if(ct<250&&j>60&&(Jt.t*=.35),ce<Jt.t){let l=Jt.pine+Jt.oak+Jt.palm+Jt.olive||1,u=tt*l,T;(u-=Jt.pine)<0?T="pine":(u-=Jt.oak)<0?T="oak":(u-=Jt.palm)<0?T="palm":T="olive";let I=T==="pine"?.85+we*.4:T==="oak"?.8+we*.4:T==="palm"?.85+we*.35:.8+we*.5;ht.items.push({t:T,x:Lt,y:j-.12,z:It,s:I,ry:ot}),ht.colls.push({x:Lt,z:It,r:(T==="pine"?.34:T==="oak"?.45:T==="palm"?.28:.3)*I,tall:1,tree:1})}else if(ce<Jt.t+Jt.b)ht.items.push({t:"bush",x:Lt,y:j,z:It,s:.7+we*.9,ry:ot});else if(ce<Jt.t+Jt.b+Jt.rock){let l=we>.7,u=l?1.6+tt*2.4:.5+tt*.9;ht.items.push({t:l?"boulder":"rock",x:Lt,y:j-u*.25,z:It,s:u,ry:ot,rx:tt*3,rz:we*3}),u>1.1&&ht.colls.push({x:Lt,z:It,r:u*.5})}}return v.set(K,ht),ht}function st(k,vt){if(typeof te>"u")return!1;for(let K of te)for(let ht of K.segs){let X=ht.B.x-ht.A.x,mt=ht.B.z-ht.A.z,rt=X*X+mt*mt,gt=Ee(((k-ht.A.x)*X+(vt-ht.A.z)*mt)/rt,0,1);if(Math.hypot(k-ht.A.x-X*gt,vt-ht.A.z-mt*gt)<7&&ee(ht.A.y,ht.B.y,gt)-ht.sag*4*gt*(1-gt)-h(k,vt)<28)return!0}return!1}let at=null;function W(k,vt,K=170){if(at&&Math.hypot(k-at[0],vt-at[1])<12)return;at=[k,vt];let ht=Math.floor((k-K)/R),X=Math.floor((k+K)/R),mt=Math.floor((vt-K)/R),rt=Math.floor((vt+K)/R);for(let gt=ht;gt<=X;gt++)for(let St=mt;St<=rt;St++){let Lt=B(gt,St);if(!Lt.on){Lt.on=!0;for(let It of Lt.colls)m.push(It),f.add(It),It.tree&&_(It,1)}}for(let gt of v.values()){let St=Math.hypot(gt.x-k,gt.z-vt);if(gt.on&&St>K+80){gt.on=!1;for(let Lt of gt.colls)f.remove(Lt),Lt.tree&&_(Lt,-1)}!gt.on&&St>1900&&v.delete(Bs(gt.ci,gt.cj))}}let bt=(k,vt)=>(p.get(Bs(Math.floor(k/6),Math.floor(vt/6)))||0)/3,ft=Ec(4);for(let k of n.bridges)for(let vt=k.i;vt<=k.j;vt++)ft.add(k.seg.pts[vt]);function Ct(k,vt){let K=null,ht=1/0;if(ft.each(k,vt,1,we=>{let ot=(we.x-k)**2+(we.z-vt)**2;ot<ht&&(ht=ot,K=we)}),!K||ht>2.5)return null;let X=K.seg.pts,mt=X[Math.min(K.k+1,X.length-1)],rt=X[Math.max(K.k-1,0)],gt=mt.x-rt.x,St=mt.z-rt.z,Lt=Math.hypot(gt,St)||1;gt/=Lt,St/=Lt;let It=(k-K.x)*gt+(vt-K.z)*St,ce=Math.abs((k-K.x)*-St+(vt-K.z)*gt);if(ce>K.hw+.05)return{off:!0,p:K,tx:gt,tz:St,lat:ce};let tt=X[Ee(K.k+(It>0?1:-1),0,X.length-1)];return tt.kind!=="bridge"&&Math.abs(It)>.35?null:K.gap&&Math.abs(It)<.32?{hole:!0,p:K,tx:gt,tz:St,lat:ce}:{y:ee(K.y,tt.y,Ee(Math.abs(It)/.8,0,1)),p:K,tx:gt,tz:St,lat:ce}}let pt={x0:n.x+n.RP-1,x1:n.x+n.RP+4.35,z0:n.z-1.65,z1:n.z+1.65,y:n.HS+.09};function xt(k,vt,K,ht){let X=h(k,vt),mt=null,rt=null,gt=K==null?1/0:K+.7;if(K!=null&&n.rad(k,vt)<200){let It=n.nearest(k,vt,K,1);It&&It.d<=It.p.hw+.25&&It.p.kind!=="bridge"&&It.p.kind!=="stones"&&It.y-.04<=gt&&Math.abs(It.y-.04-X)<7&&(X=It.y-.04,mt="path")}let St=Ct(k,vt);St&&St.y!=null&&St.y<=gt&&St.y>X-.01&&(X=St.y,mt="bridge",rt=St);for(let It of n.stones)Math.hypot(k-It.x,vt-It.z)<It.r+(ht?.5:0)&&It.y<=gt&&It.y>X&&(X=It.y,mt="stone",rt=It);k>pt.x0&&k<pt.x1&&vt>pt.z0&&vt<pt.z1&&pt.y<=gt&&pt.y>=X-.2&&(X=pt.y,mt="deck");let Lt=N(k,vt);return Lt&&Lt.y<=gt&&Lt.y>X&&(X=Lt.y,mt="pier"),{y:X,kind:mt,plat:rt,b:St}}function Mt(k,vt,K){let ht=n.rad(k,vt);if(ht<n.RP+.5&&Math.abs(K-n.HS)<.6)return"plaza";if(ht<200){let rt=n.nearest(k,vt,K,1);if(rt&&rt.d<rt.p.hw)return rt.p.kind==="stones"?"trail":rt.p.kind}let[X,mt]=a.toL(k,vt);if(X>-2&&X<a.VL+2&&Math.abs(mt)<a.FLOOR+1)return"grass";if(ht>245){let rt=K-r,gt=o.nearRoad(k,vt);if(gt&&gt.d<gt.hw+.3)return"trail";if(Math.hypot(k-o.fajr.x,vt-o.fajr.z)<50||o.paved(k,vt))return"plaza";if(rt<3.5&&o.coastS(k,vt)<150)return"sand"}return d(k,vt)>.85?"rock":bt(k,vt)>.55?"forest":"grass"}function Ut(k,vt,K){let[ht,X]=a.toL(k,vt);if(ht>-6&&ht<a.VL+6&&Math.abs(X-a.riverZ(ht))<.95){let gt=a.waterLevel(ht);if(K<gt+.3)return{kind:"river",level:gt}}let mt=n.stream,rt=n.rad(k,vt);if(rt>245)return o.water(k,vt,K);if(rt>mt.r0+1&&rt<mt.r1-1&&Math.abs(Pn(mt.a,n.ang(k,vt)))*rt<2.1){let St=n.Hnat(k,vt)+.5;if(K<St+.25)return{kind:"torrent",level:St,dx:Math.cos(mt.a),dz:Math.sin(mt.a)}}return null}let Qt=0;function ne(k,vt,K,ht){for(let X=0;X<2;X++){let mt=++Qt;f.each(k,vt,1,rt=>{if(rt._st===mt||(rt._st=mt,ht&&!ht(rt)))return;if(rt.box){let ce=k-rt.x,tt=vt-rt.z,we=ce*rt.c+tt*rt.s,ot=-ce*rt.s+tt*rt.c,ct=we-Ee(we,-rt.hw,rt.hw),j=ot-Ee(ot,-rt.hd,rt.hd),ie=ct*ct+j*j;if(ie>=K*K)return;if(ie>1e-8){let qt=Math.sqrt(ie),Jt=(K-qt)/qt;we+=ct*Jt,ot+=j*Jt}else{let qt=rt.hw-Math.abs(we),Jt=rt.hd-Math.abs(ot);qt<Jt?we=(we<0?-1:1)*(rt.hw+K):ot=(ot<0?-1:1)*(rt.hd+K)}k=rt.x+we*rt.c-ot*rt.s,vt=rt.z+we*rt.s+ot*rt.c;return}let gt=k-rt.x,St=vt-rt.z,Lt=K+rt.r,It=gt*gt+St*St;if(It<Lt*Lt&&It>1e-8){let ce=Math.sqrt(It),tt=(Lt-ce)/ce;k+=gt*tt,vt+=St*tt}})}return[Ee(k,-e+3,e-3),Ee(vt,-e+3,e-3)]}let _e=(k,vt,K)=>f.each(k,vt,1,ht=>ht.tall&&K(ht)),et=[...o.rest.map(k=>({...k,y:h(k.x,k.z)})),...n.rest,...a.rest],Zt=Math.PI/180,le=k=>{let vt=o.zones.find(K=>K.id===k);return[vt.x,vt.z]},te=[{id:"fajr",name:"\u062D\u0628\u0644 \u0627\u0644\u0641\u062C\u0631",icon:"\u{1F305}",a:20,to:[o.fajr.x-330,o.fajr.z+110]},{id:"valley",name:"\u062D\u0628\u0644 \u0627\u0644\u0648\u0627\u062F\u064A",icon:"\u{1F98C}",a:128,to:[a.x-120,a.z-60]},{id:"huts",name:"\u062D\u0628\u0644 \u0627\u0644\u062D\u0637\u0651\u0627\u0628\u064A\u0646",icon:"\u{1FA93}",a:270,to:(([k,vt])=>[k+70,vt+40])(le("huts"))}].map((k,vt)=>{let K=k.a*Zt,ht={x:n.x+Math.cos(K)*14.6,y:n.HS+4.6,z:n.z+Math.sin(K)*14.6},X=k.to[0],mt=k.to[1],rt={x:X,y:h(X,mt)+4.4,z:mt},gt=[ht,rt],St=(ct,j,ie,qt)=>({x:ee(ct.x,j.x,ie),y:ee(ct.y,j.y,ie)-qt*4*ie*(1-ie),z:ee(ct.z,j.z,ie)});for(let ct=0;ct<6;ct++){let j=null;for(let qt=0;qt<gt.length-1;qt++){let Jt=gt[qt],l=gt[qt+1],u=Math.hypot(l.x-Jt.x,l.z-Jt.z),T=u*.01;for(let I=1;I<40;I++){let H=I/40,it=St(Jt,l,H,T),Q=it.y-3.4-h(it.x,it.z);(!j||Q<j.c)&&(j={c:Q,k:qt,t:H,p:it})}}if(j.c>0)break;let ie={x:j.p.x,z:j.p.z,tower:!0};ie.y=h(ie.x,ie.z)+12,gt.splice(j.k+1,0,ie)}let Lt=[],It=0;for(let ct=0;ct<gt.length-1;ct++){let j=gt[ct],ie=gt[ct+1],qt=Math.hypot(ie.x-j.x,ie.y-j.y,ie.z-j.z);Lt.push({A:j,B:ie,s0:It,l:qt,sag:Math.hypot(ie.x-j.x,ie.z-j.z)*.01}),It+=qt}let ce=(rt.x-ht.x)/Math.hypot(rt.x-ht.x,rt.z-ht.z),tt=(rt.z-ht.z)/Math.hypot(rt.x-ht.x,rt.z-ht.z),we={i:vt,...k,S:ht,E:rt,pts:gt,segs:Lt,L:It,ux:ce,uz:tt,stand:{x:n.x+Math.cos(K)*11.4,z:n.z+Math.sin(K)*11.4},end:{x:X-ce*2.5,z:mt-tt*2.5}};we.at=ct=>{ct=Ee(ct,0,It);let j=Lt[Lt.length-1];for(let Jt of Lt)if(ct<=Jt.s0+Jt.l){j=Jt;break}let ie=Ee((ct-j.s0)/j.l,0,1),qt=St(j.A,j.B,ie,j.sag);return qt.t=ct/It,qt};let ot=1e9;for(let ct=1;ct<200;ct++){let j=we.at(ct/200*It);ot=Math.min(ot,j.y-2.2-h(j.x,j.z))}return we.clear=ot,we}),fe=[];function De(k,vt,K,ht,X){let mt=Math.cos(K),rt=Math.sin(K),gt=null,St=0;for(let we=X;we>ht;we-=1){let ot=h(k+mt*we,vt+rt*we),ct=h(k+mt*(we-1),vt+rt*(we-1)),j=ct-ot;j>St&&(St=j,gt=we)}if(!gt||St<.9)return null;let Lt=gt+1;for(;Lt<X&&h(k+mt*Lt,vt+rt*Lt)-h(k+mt*(Lt+1),vt+rt*(Lt+1))>.55;)Lt++;let It=gt-1;for(;It>ht&&h(k+mt*(It-1),vt+rt*(It-1))-h(k+mt*It,vt+rt*It)>.55;)It--;Lt+=1.6,It-=1.8;let ce={x:k+mt*Lt,z:vt+rt*Lt},tt={x:k+mt*It,z:vt+rt*It};return ce.y=h(ce.x,ce.z),tt.y=h(tt.x,tt.z),tt.y-ce.y<2.4||d(tt.x,tt.z)>1||d(ce.x,ce.z)>1||n.rad(ce.x,ce.z)<250&&(!b(ce.x,ce.z,1)||!b(tt.x,tt.z,1))?null:{bot:ce,top:tt,h:tt.y-ce.y}}let kt=(k,vt,K,ht,X,mt)=>{let rt=De(k,vt,K*Zt,ht,X);rt&&fe.push({i:fe.length,name:mt,...rt})};for(let k of[35,140,215,320,250])kt(n.x,n.z,k,43,54,"\u062D\u0632\u0627\u0645 \u0627\u0644\u0635\u062E\u0631");for(let k of[70,190,300,250])kt(n.x,n.z,k,21,31,"\u0627\u0644\u062D\u0632\u0627\u0645 \u0627\u0644\u0639\u0627\u0644\u064A");for(let k of[[.95,760],[-2.2,900],[2.4,640],[-.45,1200],[1.9,1300],[-1.45,560]])kt(n.x,n.z,k[0]/Zt,k[1]-30,k[1]+30,"\u062C\u0631\u0641 \u0627\u0644\u062C\u0628\u0644");{let k=o.plateau;for(let vt of[-60,30,150,210])kt(k.x,k.z,vt,k.r-140,k.r+150,"\u062C\u0631\u0641 \u0627\u0644\u0647\u0636\u0628\u0629")}return{map:i,HALF:e,M:n,V:a,H:h,slope:d,plains:c,surfaceAt:xt,groundKind:Mt,water:Ut,collide:ne,colliders:m,addColl:x,removeColl:k=>{f.remove(k);let vt=m.indexOf(k);vt>=0&&m.splice(vt,1)},tallNear:_e,cgrid:f,veg:y,forestAt:bt,restPoints:et,bridgeAt:Ct,deck:pt,I:o,SEA:r,VC:R,vegCell:B,ensureVeg:W,platAt:N,zoneAt:o.zoneAt,zips:te,anchors:fe}}var Vr={L:3.38,W:1.69,H:1.68,WB:2.59,track:1.42,R:.356,clearance:.356,mass:830,hp:120,power:76e3,fMax:6800,vmax:31,vrev:7.5,droop:.3,bump:.2,K:15500,C:1400,Ip:900,Ir:300,hcg:.45,CdA:1.25,steerMax:.6,seat:{ox:-.22,oz:-.36,oy:-.47},door:{ox:-.22,oz:-1.25},rideY:.525},uu={plaza:[1,.015],path:[.92,.03],pier:[.9,.02],grass:[.82,.045],forest:[.78,.05],sand:[.62,.085],rock:[.88,.035],trail:[.9,.03],snow:[.5,.06],mud:[.55,.11],water:[.5,.14]},ia=9.81;function t0(i,t){let e=Vr,n=e.WB/2,s=e.track/2,o=[[n,-s],[n,s],[-n,-s],[-n,s]].map(([M,N],R)=>({i:R,ox:M,oz:N,front:R<2,d:.17,dv:0,q:0,F:0,contact:!1,g:0,kind:"grass",spin:0,x:0,z:0})),r={x:t.x,z:t.z,yaw:t.yaw||0,y:0,pitch:0,roll:0,vx:0,vz:0,vy:0,wp:0,wr:0,yawRate:0,steer:0,throttle:0,brake:0,hand:!1,rpm:0,gear:"N",vf:0,vl:0,slip:0,air:!1,airT:0,flipT:0,depth:0,engine:!1,driven:!1,sleep:!0,wheels:o,kind:"grass",mu:.8,crashT:0,deepT:0,landV:0,horn:!1,home:{x:t.x,z:t.z,yaw:t.yaw||0},door:0},a=[];function c(M,N,R){Object.assign(r,{x:M,z:N,yaw:R,vx:0,vz:0,vy:0,wp:0,wr:0,yawRate:0,pitch:0,roll:0,air:!1,flipT:0,steer:0}),f();let v=(o[0].g+o[1].g+o[2].g+o[3].g)/4;r.y=v+e.rideY,r.pitch=Math.atan((o[0].g+o[1].g-(o[2].g+o[3].g))/2/e.WB),r.roll=Math.atan((o[1].g+o[3].g-(o[0].g+o[2].g))/2/e.track);for(let C of o)C.d=.17,C.dv=0;r.sleep=!0}let h=()=>Math.cos(r.yaw),d=()=>Math.sin(r.yaw);function f(){let M=Math.cos(r.yaw),N=Math.sin(r.yaw);for(let R of o)R.x=r.x+M*R.ox-N*R.oz,R.z=r.z+N*R.ox+M*R.oz,R.g=i.H(R.x,R.z)}let m=0;function x(){let M=i.groundKind?i.groundKind(r.x,r.z,r.y-e.rideY):"grass",N=typeof M=="string"?M:M&&M.kind||"grass";r.kind=uu[N]?N:"grass";let R=i.water(r.x,r.z,i.H(r.x,r.z)+.05);r.depth=R?Math.max(0,R.level-i.H(r.x,r.z)):0,r.depth>.12&&(r.kind="water")}function y(M,N){if(r.driven){r.engine=!0;let G=Ee(N.ty||0,-1,1),B=Ee(N.sx||0,-1,1);G>.05?(r.throttle=G,r.brake=r.vf<-.6?G:0,r.gear=r.vf<-.6?"R":"D"):G<-.05?r.vf>.6?(r.brake=-G,r.throttle=0):(r.brake=0,r.throttle=G,r.gear="R"):(r.throttle=0,r.brake=0,Math.abs(r.vf)<.3&&(r.gear="N")),r.hand=!!N.hand;let st=Math.abs(r.vf),at=e.steerMax/(1+st/13);r.steer=Xe(r.steer,B*at,Math.abs(B*at)>Math.abs(r.steer)?7:9,M)}else r.throttle=0,r.brake=r.engine?0:1,r.hand=!r.engine,r.steer=Xe(r.steer,0,4,M),Math.abs(r.vf)<.3&&(r.gear="N");let R=Math.hypot(r.vx,r.vz)>.05||Math.abs(r.vy)>.05||r.air||Math.abs(r.wp)>.02||Math.abs(r.wr)>.02;if(!r.driven&&!R&&r.sleep)return r.rpm=r.engine?Xe(r.rpm,1100,3,M):0,a.splice(0);r.sleep=!1,(m-=M)<=0&&(m=.1,x());for(let G=0;G<2;G++)b(M/2);r.landV>3.5&&a.push(["carLand",+r.landV.toFixed(1)]),r.landV=0;let v=Math.abs(r.vf),C=r.engine?r.throttle!==0?r.air?8200:Ee(3600+3800*(v/e.vmax)+1400*Math.abs(r.throttle),3600,8e3):Ee(1150+v*95,1150,3600):0;return r.rpm=Xe(r.rpm,C,C>r.rpm?5:2.6,M),!r.driven&&!r.air&&Math.hypot(r.vx,r.vz)<.05&&Math.abs(r.vy)<.05&&(r.sleep=!0),a.splice(0)}function b(M){f();let N=Math.cos(r.yaw),R=Math.sin(r.yaw),v=Math.sin(r.pitch),C=Math.sin(r.roll),G=0,B=0,st=0,at=0;for(let kt of o){let vt=r.y+kt.ox*v+kt.oz*C-(kt.g+e.R),K=kt.d;if(vt>=e.droop){kt.contact=!1,kt.d=Xe(kt.d,e.droop,14,M),kt.F=0,kt.q=0;continue}kt.contact=!0,at++,kt.d=vt,kt.dv=(vt-K)/M;let ht=e.droop-vt;kt.q=ht;let X=e.K*ht-e.C*kt.dv;vt<-e.bump&&(X+=9e4*(-e.bump-vt)-4e3*kt.dv),X=Math.max(0,X),kt.F=X,G+=X,B+=X*kt.ox,st+=X*kt.oz}let W=r.air;r.air=at===0,r.airT=r.air?r.airT+M:0;let bt=[N,R],ft=[-R,N],Ct=r.vx*bt[0]+r.vz*bt[1],pt=r.vx*ft[0]+r.vz*ft[1],[xt,Mt]=uu[r.kind]||uu.grass,Ut=xt*(r.depth>.12?.75:1);r.mu=Ut;let Qt=Math.max(G,0),ne=e.mass,_e=at/4,et=0,Zt=0;if(at>0){let kt=(o[0].g+o[1].g-(o[2].g+o[3].g))/2/e.WB,k=(o[1].g+o[3].g-(o[0].g+o[2].g))/2/e.track,vt=Math.sqrt(1+kt*kt+k*k),K=-(ia*kt/vt)*_e;et+=K,Zt-=ia*k/vt*_e;let ht=Ut*Qt/vt,X=Ct;if(r.throttle>0&&r.engine){let ct=Math.max(Math.abs(Ct),1.5),j=Math.min(e.fMax,e.power/ct)*r.throttle*(Ct>e.vmax?0:1);et+=Math.min(j,ht)/ne}else r.throttle<0&&r.engine&&Ct>-e.vrev&&(et+=Math.max(-3200*-r.throttle,-ht)/ne*1);let mt=Ct>0?1:-1,rt=r.brake*.92*ht+(r.hand?.45*ht*.5:0);!r.driven&&!r.engine&&(rt=Math.max(rt,ht));let gt=Mt*Qt+(r.depth>.12?900*Math.min(r.depth,.8)*Math.abs(Ct):0)+(r.driven&&r.throttle===0&&r.brake===0?ne*.9:0),St=(rt+gt)/ne*M;Ct+=et*M,Ct-=e.CdA*Ct*Math.abs(Ct)/ne*M,Math.abs(Ct)<=St&&(r.throttle===0||!r.engine)?Ct=0:Ct-=mt*Math.min(St,Math.abs(Ct)),pt+=Zt*M;let Lt=Ut*ia*_e*(r.hand?.55:1)*M/vt,It=pt;pt-=Ee(pt,-Lt,Lt),r.slip=Math.abs(pt)*.8+Math.abs(It)*.2+(r.throttle>.6&&Math.abs(Ct)<5&&r.kind!=="plaza"?(1-Math.abs(Ct)/5)*2.5*r.throttle:0)+(r.hand&&Math.abs(Ct)>3?1.5:0)+(r.brake>.8&&Math.abs(Ct)>8?1.2:0);let ce=Ct*Math.tan(r.steer)/e.WB,tt=.96*Ut*ia*Math.max(_e,.5)/(Math.max(Math.abs(Ct),2)*vt);r.hand?ce=ce*1.7+r.steer*Math.sign(Ct)*.9:ce=Ee(ce,-tt,tt)+Ee(pt/Math.max(Math.abs(Ct),3),-.7,.7)*2.6*Math.sign(Ct||1),r.yawRate=Xe(r.yawRate,ce,(r.hand?3.5:9)*_e,M);let we=(Ct-X)/M-K,ot=Ct*r.yawRate;B+=ne*we*e.hcg,st+=ne*ot*e.hcg}else r.yawRate=Xe(r.yawRate,0,.4,M),r.slip=0,Ct-=e.CdA*Ct*Math.abs(Ct)/ne*M;r.vf=Ct,r.vl=pt,r.vx=bt[0]*Ct+ft[0]*pt,r.vz=bt[1]*Ct+ft[1]*pt,r.vy+=(G/ne-ia)*M,r.wp+=B*Math.cos(r.pitch)/e.Ip*M,r.wr+=st*Math.cos(r.roll)/e.Ir*M,r.air?(r.wp*=1-.6*M,r.wr*=1-.6*M,r.wp+=-r.pitch*.9*M,r.wr+=-r.roll*.9*M):(r.wp*=1-1.2*M,r.wr*=1-1.2*M);let le=r.x,xe=r.z,te=r.vy;r.x+=r.vx*M,r.z+=r.vz*M,r.y+=r.vy*M,r.yaw+=r.yawRate*M,r.pitch+=r.wp*M,r.roll+=r.wr*M;{let kt=i.water(r.x,r.z,i.H(r.x,r.z)+.05),k=kt?kt.level-i.H(r.x,r.z):0;if(k>.75&&k>r.depth){r.x=le,r.z=xe;let vt=r.vx*r.vx+r.vz*r.vz;r.vx*=-.2,r.vz*=-.2,vt>4&&r.deepT<=0&&(a.push(["deepWater"]),r.deepT=3)}}r.deepT-=M,A(M);for(let kt of[1,-1]){let k=r.x+Math.cos(r.yaw)*kt*(e.L/2+.05),vt=r.z+Math.sin(r.yaw)*kt*(e.L/2+.05),K=i.H(k,vt),ht=r.y-.17+kt*(e.L/2)*Math.sin(r.pitch);if(K>ht+.42&&r.vf*kt>0){let X=Math.abs(r.vf);r.x-=Math.cos(r.yaw)*kt*Math.min(.2,X*M*2),r.z-=Math.sin(r.yaw)*kt*Math.min(.2,X*M*2),p(X,-Math.cos(r.yaw)*kt,-Math.sin(r.yaw)*kt)}}let fe=i.H(r.x,r.z);r.y<fe+.16&&(r.y=fe+.16,r.vy<0&&(r.landV=Math.max(r.landV,-r.vy),r.vy=0)),W&&!r.air&&(r.landV=Math.max(r.landV,-te));let De=Math.abs(r.roll)>1.15||Math.abs(r.pitch)>1.2;r.pitch=Ee(r.pitch,-1.5,1.5),r.roll=Ee(r.roll,-1.6,1.6),De&&!r.air?(r.flipT+=M,r.flipT>2.2&&(a.push(["carFlip"]),c(r.x,r.z,r.yaw),r.sleep=!1)):r.flipT=0;for(let kt of o)kt.contact?kt.spin+=Ct/e.R*M:r.throttle>0&&(kt.spin+=40*r.throttle*M)}function p(M,N,R){let v=r.vx*N+r.vz*R;v<0&&(r.vx-=1.2*v*N,r.vz-=1.2*v*R);let C=r.vx*Math.cos(r.yaw)+r.vz*Math.sin(r.yaw);r.vf=C,-v>3.5&&r.crashT<=0&&(a.push(["carCrash",+(-v).toFixed(1)]),r.crashT=.6)}let _=[1.05,0,-1.05];function A(M){r.crashT-=M;for(let N=0;N<2;N++){let R=0,v=0,C=0,G=0;for(let B of _){let st=r.x+Math.cos(r.yaw)*B,at=r.z+Math.sin(r.yaw)*B,[W,bt]=i.collide(st,at,.86),ft=W-st,Ct=bt-at,pt=Math.hypot(ft,Ct);pt>C&&(C=pt,R=ft,v=Ct,G=B)}if(C<1e-4)return;r.x+=R,r.z+=v,p(Math.hypot(r.vx,r.vz),R/C,v/C),r.yawRate=r.yawRate*.6+(G?-Math.sign(G)*((v*Math.cos(r.yaw)-R*Math.sin(r.yaw))/C)*Math.min(1.2,Math.abs(r.vf)*.08):0)}}function P(M=e.seat){let N=Math.cos(r.yaw),R=Math.sin(r.yaw),v=Math.sin(r.pitch),C=Math.sin(r.roll);return{x:r.x+N*M.ox-R*M.oz,z:r.z+R*M.ox+N*M.oz,y:r.y+(M.oy||0)+M.ox*v+M.oz*C}}return c(t.x,t.z,t.yaw||0),{car:r,step:y,place:c,seatWorld:P,B:e}}var xy=9.81,yy=1,_y=1.15,vy=1.45,My=1.6,Pi={walk:1.7,walkMin:.6,jog:3.6,run:4.7,sprint:6.3,swim:1,swimFast:1.5,jumpV:3.7,jumpH:3.2},wy=i=>ee(.62,1.85,Ee((i-1)/5.3,0,1));function e0(i,t={}){let e=i.M,n=i.V,s=[],o=1,r={t:0,hero:null,rest:null,reached:new Set,coins:[],coinsGot:0,climb:{done:!1,time:0},summit:null,scope:!1,wind:0,vq:{camp:null,merW:{x:0,z:0},zoneW:{x:0,z:0},penW:{x:0,z:0},met:!1,called:!1,caught:!1,delivered:!1},carry:null,focus:null,seed:1},a=[],c=(...l)=>a.push(l.length===1?l[0]:l);function h(l,u,T,I={}){let H={id:o++,kind:l,x:u,z:T,y:i.H(u,T),vx:0,vy:0,vz:0,face:0,air:!1,peak:0,r:.4,speed:0,run:!1,hopPh:0,landT:0,stun:0,rot:0,surf:null,...I};return s.push(H),H}let f=[...e.beasts,...i.I.beasts.map(l=>({kind:l.kind,home:{x:l.x,z:l.z,y:i.H(l.x,l.z)}}))].map(l=>h(l.kind,l.home.x+(l.ox||0),l.home.z,{home:l.home,r:l.kind==="boar"?.52:.44,state:"idle",t:Math.random()*2,cool:0,tx:l.home.x,tz:l.home.z,charge:null,ph:0,face:Math.random()*Pe})),m=h("gazelle",n.x+60,n.z,{r:.42,state:"graze",t:0,gt:2.5,sus:0,stamina:4,ph:0,triedLeap:!1,tx:0,tz:0,fx:1,fz:0,stuck:0,hy:0}),x=h("merchant",n.x+20,n.z,{r:.42});function y(l,u,T,I,H,it={}){let Q=l.air?2.5:l.kind==="hero"?9:10,wt=l.air?Math.max(I,l.airSpd||0):I,Tt=it.pushX||0,jt=it.pushZ||0;l.vx=Xe(l.vx,u*wt+Tt,Q,H),l.vz=Xe(l.vz,T*wt+jt,Q,H);let re=l.x,Y=l.z,lt=l.x+l.vx*H,Ht=l.z+l.vz*H;if([lt,Ht]=i.collide(lt,Ht,l.r,it.collFilter),l.air){l.vy-=xy*H;let Yt=l.y+l.vy*H,dt=i.surfaceAt(lt,Ht,Math.max(l.y,Yt)+.05,!0);if(dt.y>l.y+.45){let se=l.kind==="hero"?i.surfaceAt(lt,Ht,l.y+1.15,!0):null;if(se&&se.y>l.y&&se.y<=l.y+1.15&&!l.mantled){l.mantled=!0,l.x=lt,l.z=Ht,l.y=se.y,l.air=!1,l.vy=0,l.vx*=.4,l.vz*=.4,l.landT=.3,l.surf=se.kind,l.plat=se.plat,l.peak=0,l.speed=Math.hypot(l.x-re,l.z-Y)/H,l.onLand&&l.onLand(0,se);return}lt=l.x,Ht=l.z,l.vx*=-.15,l.vz*=-.15,dt=i.surfaceAt(lt,Ht,l.y+.05,!0)}if(Yt<=dt.y&&l.vy<=0){let se=(l.peak||l.y)-dt.y;if(l.x=lt,l.z=Ht,l.y=dt.y,l.air=!1,l.vy=0,l.landT=.25,l.surf=dt.kind,l.plat=dt.plat,l.mantled=!1,dt.kind==="stone"&&dt.plat){let Me=Math.hypot(l.x-dt.plat.x,l.z-dt.plat.z),oe=.35;Me>oe&&(l.x=dt.plat.x+(l.x-dt.plat.x)/Me*oe,l.z=dt.plat.z+(l.z-dt.plat.z)/Me*oe),l.vx*=.2,l.vz*=.2}l.onLand&&l.onLand(se,dt)}else l.x=lt,l.z=Ht,l.y=Yt,l.peak=Math.max(l.peak||Yt,Yt)}else{if(l.surf==="bridge"){let Te=i.bridgeAt(lt,Ht);if(Te&&Te.off){let he=lt-l.x,Ne=Ht-l.z,sn=he*Te.tx+Ne*Te.tz;lt=l.x+Te.tx*sn,Ht=l.z+Te.tz*sn}}else if(l.surf==="deck"){let Te=i.deck;Ht=Ee(Ht,Te.z0+.35,Te.z1-.35),lt=Math.min(lt,Te.x1-.35)}let Yt=i.surfaceAt(lt,Ht,l.y+.4),dt=Math.hypot(lt-l.x,Ht-l.z),se=Yt.y-l.y,Me=Yt.kind==="path"?.75:.35,oe=l.boots?vy:yy;if(dt>1e-5&&se>Me&&se>dt*oe){let Te=(Ne,sn)=>{let fn=i.surfaceAt(Ne,sn,l.y+.4),hi=Math.hypot(Ne-l.x,sn-l.z),ni=fn.y-l.y;return ni<=(fn.kind==="path"?.75:.35)||ni<=hi*oe?[Ne,sn,fn]:null},he=Te(lt,l.z)||Te(l.x,Ht);he?(lt=he[0],Ht=he[1],Yt=he[2]):(lt=l.x,Ht=l.z,Yt=i.surfaceAt(lt,Ht,l.y),l.vx*=.3,l.vz*=.3)}let ke=Math.hypot(lt-l.x,Ht-l.z);if(Yt.y<l.y-Math.max(.45,ke*1.45)?it.cautious?(lt=l.x,Ht=l.z,l.vx=l.vz=0,Yt=i.surfaceAt(lt,Ht,l.y),l.y=Yt.y):(l.air=!0,l.vy=Math.min(0,l.vy),l.peak=l.y,l.x=lt,l.z=Ht):(l.x=lt,l.z=Ht,l.y=Yt.y,l.surf=Yt.kind,l.plat=Yt.plat),!l.air&&!l.surf&&!it.noSlide){let Te=i.H(l.x+.4,l.z)-i.H(l.x-.4,l.z),he=i.H(l.x,l.z+.4)-i.H(l.x,l.z-.4),Ne=Math.hypot(Te,he)/.8,sn=l.boots?My:_y;if(Ne>sn){let fn=(Ne-sn)*9*H;l.vx-=Te/.8*fn,l.vz-=he/.8*fn}}}l.speed=Math.hypot(l.x-re,l.z-Y)/H}function b(l,u){let T=h("hero",u.x,u.z,{r:.32,skin:l,hp:100,maxHp:100,swim:!1,sneak:!1,lastHurt:-99,mode:"walk",chute:0,airSpd:0,water:null,inTorrent:0,faintT:0,face:u.face||0});return T.y=u.y!=null?u.y:i.H(u.x,u.z),T.onLand=(I,H)=>{c(H.kind==="stone"?"landStone":"land"),I>4.2&&p(T,Math.round((I-4.2)*14),"fall")},T}function p(l,u,T){l.kind!=="hero"||l.mode!=="walk"&&l.mode!=="drive"||u<=0||(l.hp=Math.max(l.mode==="drive"?10:0,l.hp-u),l.lastHurt=r.t,c(["hurt",u,T,l.hp]),l.hp<=0&&(l.mode="faint",l.faintT=0,l.vx=l.vz=0,c(["faint",T])))}function _(l,u,T,I,H,it){l.swim=!0,l.air=!1,l.vy=0;let Q=Math.hypot(u.mx||0,u.mz||0),wt=Q>1e-4?u.mx/Q:0,Tt=Q>1e-4?u.mz/Q:0,jt=H<.08?0:it?Pi.swimFast:Pi.swim;l.vx=Xe(l.vx,wt*jt,4,T),l.vz=Xe(l.vz,Tt*jt,4,T);let re=l.x+l.vx*T,Y=l.z+l.vz*T;i.I.coastS(re,Y)<-700?(re=l.x,Y=l.z,l.vx*=-.3,l.vz*=-.3,l.farWarn||(l.farWarn=!0,c("farSea"))):l.farWarn=!1,[re,Y]=i.collide(re,Y,l.r),l.x=re,l.z=Y,l.y=Math.max(I.level-.7+Math.sin(r.t*2.2)*.05,i.H(re,Y)),l.speed=Math.hypot(l.vx,l.vz),l.surf="water",l.speed>.3&&(l.face=bn(l.face,Math.atan2(l.vz,l.vx),6,T));let lt=l.hopPh||0;l.hopPh=lt+(l.speed<.15?.9:1.6+l.speed*1.4)*T,l.hopPh&&Math.floor(lt/Math.PI)!==Math.floor(l.hopPh/Math.PI)&&c("splash"),r.t-l.lastHurt>6&&l.hp<l.maxHp&&(l.hp=Math.min(l.maxHp,l.hp+T*3))}function A(l,u){let T=r.rest||i.restPoints[0];if(Object.assign(l,{x:T.x,z:T.z,y:i.H(T.x,T.z),vx:0,vy:0,vz:0,air:!1,stun:0,rot:0,mode:"walk",face:T.face||0,inTorrent:0,surf:null,swim:!1,hopPh:0}),T.plaza&&(l.y=e.HS),u==="faint"){l.hp=l.maxHp;let I=Math.ceil(r.coinsGot*.2);r.coinsGot-=I,c(["respawn",T.name,I])}else c(["respawn",T.name,0]);r.focus=null}function P(l){let u=r.hero;r.zip={z:l,s:0,v:4},r.scope=!1,u.mode="zip",u.air=!0,u.vy=0,u.rot=0,c(["zipStart",l.name,l.icon])}function M(l,u){let T=r.zip,I=T.z,H=I.at(T.s),it=I.at(T.s+1.5),Q=(it.y-H.y)/1.5;T.v+=(-9.8*Q*.85-.0016*T.v*T.v)*u,T.v=Ee(T.v,3.5,27);let wt=ue(I.L-70,I.L-12,T.s);wt>0&&(T.v=ee(T.v,3.2,Ee(wt*u*4,0,1))),T.s+=T.v*u,T.t=(T.t||0)+u;let Tt=I.at(T.s),jt=I.at(T.s+2);if(l.x=Tt.x,l.y=Tt.y-2.4,l.z=Tt.z,T.s>=I.L-.4){let re=I.end;Object.assign(l,{x:re.x,z:re.z,y:i.H(re.x,re.z),mode:"walk",air:!1,vx:0,vz:0,vy:0,surf:null,peak:0}),r.zip=null,c(["zipEnd",I.name])}}function N(l){let u=r.hero;r.climbing={a:l,t:0,dur:Math.max(3,l.h/2.6)},u.mode="climb",u.vx=u.vz=0,u.rot=0,u.face=Math.atan2(l.top.z-l.bot.z,l.top.x-l.bot.x),c(["climbStart",l.name,Math.round(l.h)])}function R(l,u){let T=r.climbing,I=T.a;T.t+=u;let H=Ee(T.t/T.dur,0,1),it=ue(0,1,H);l.x=ee(I.bot.x,I.top.x,it),l.z=ee(I.bot.z,I.top.z,it),l.y=Math.max(i.H(l.x,l.z),ee(I.bot.y,I.top.y,it)-.6),H>=1&&(Object.assign(l,{x:I.top.x,z:I.top.z,y:i.H(I.top.x,I.top.z),mode:"walk",air:!1,surf:null}),r.climbing=null,c(["climbEnd",I.name]))}function v(l){let u=r.hero;r.fishing={t:0,bite:3+Math.random()*4.5,kind:l.kind},u.mode="fish",u.vx=u.vz=0,u.rot=0,u.air=!1,c("fishStart")}function C(l,u){let T=r.fishing;T.t+=u,T.t>=T.bite&&(r.fish=(r.fish||0)+1,l.mode="walk",r.fishing=null,c(["fish",r.fish]))}function G(l){let u=l.x+Math.cos(l.face)*3.5,T=l.z+Math.sin(l.face)*3.5,I=i.H(u,T),H=i.water(u,T,I+.05);return H&&(H.kind==="lake"||H.kind==="sea"||H.kind==="marsh")&&H.level-I>.3?H:null}function B(l,u,T){if(l.mode==="faint"){l.faintT+=T,l.faintT>1.6&&A(l,"faint");return}if(l.mode==="zip")return M(l,T);if(l.mode==="climb")return R(l,T);if(l.mode==="getin"||l.mode==="drive"||l.mode==="getout")return xt(l,u,T);if(l.mode==="fish")if((u.mag||0)>.3)l.mode="walk",r.fishing=null,c("fishStop");else return C(l,T);if(l.mode!=="walk")return Ut(l,u,T);if(r.scope){l.vx=l.vz=0,l.speed=0;return}let I=Ee(u.mag||0,0,1);l.stun>0&&(l.stun-=T,I=0);let H=I>.62&&!u.sneak;l.sneak=!!u.sneak&&I>.08;let it=I<.08?0:H?I>=.9?Pi.sprint:ee(Pi.jog,Pi.run,Ee((I-.62)/.26,0,1)):l.sneak?.9:ee(Pi.walkMin,Pi.walk,Ee((I-.08)/.5,0,1));l.sprint=it>=Pi.sprint-.01,i.ensureVeg(l.x,l.z);let Q=i.water(l.x,l.z,l.y);l.water=Q?Q.kind:null;let wt=Q&&(Q.kind==="sea"||Q.kind==="lake"||Q.kind==="marsh")?Q.level-i.H(l.x,l.z):0;if(wt>1.15&&!l.air)return _(l,u,T,Q,I,H);wt>.25&&(it*=ee(1,.5,Ee(wt/1.15,0,1))),l.swim=!1;let Tt=l.air?null:l.surf&&l.surf!=="path"?l.surf:i.groundKind(l.x,l.z,l.y);Tt==="forest"?it*=.78:Tt==="rock"&&(it*=.85),Q&&Q.kind==="river"&&(it*=.6);let jt=0,re=0;if(r.summit&&r.summit.wind>0&&(jt=r.summit.wind*1.6,re=r.summit.wind*.48),Q&&Q.kind==="torrent"&&!l.air){if(jt+=Q.dx*3.4,re+=Q.dz*3.4,l.inTorrent+=T,l.inTorrent>.9){c("swept"),p(l,12,"water"),l.mode==="walk"&&A(l,"swept");return}}else l.inTorrent=0;if(u.jump&&!l.air&&l.stun<=0){l.air=!0,l.vy=Pi.jumpV,l.peak=l.y,l.mantled=!1,c("jump");let dt=Math.hypot(l.vx,l.vz);dt>.4&&dt<Pi.jumpH&&(l.vx*=Pi.jumpH/dt,l.vz*=Pi.jumpH/dt),l.airSpd=I>.08?Math.max(Pi.jumpH,dt):0}let Y=Math.hypot(u.mx||0,u.mz||0),lt=Y>1e-4?u.mx/Y:0,Ht=Y>1e-4?u.mz/Y:0;y(l,lt,Ht,it,T,{pushX:jt,pushZ:re}),l.run=H&&l.speed>2.6,l.speed>.3&&!l.air?l.face=bn(l.face,Math.atan2(l.vz-re,l.vx-jt),12,T):l.air&&Math.hypot(l.vx,l.vz)>.5&&(l.face=bn(l.face,Math.atan2(l.vz,l.vx),8,T)),l.air&&l.vy<-7?l.rot+=T*5:l.air||(l.rot*=Math.pow(.001,T));let Yt=l.hopPh;l.hopPh=l.speed<.25||l.air?0:l.hopPh+l.speed/wy(l.speed)*Math.PI*T,l.hopPh&&Math.floor(Yt/Math.PI)!==Math.floor(l.hopPh/Math.PI)&&c(l.water?"splash":["step",l.run,Tt]),l.landT=Math.max(0,l.landT-T),r.t-l.lastHurt>6&&l.hp<l.maxHp&&(l.hp=Math.min(l.maxHp,l.hp+T*3));for(let dt of i.restPoints)(!dt.dyn||dt.on)&&Math.hypot(l.x-dt.x,l.z-dt.z)<(dt.plaza?e.RP-1:dt.fire?6:3.2)&&Math.abs(l.y-(dt.plaza?e.HS:dt.y))<2.5&&r.rest!==dt&&(r.rest=dt,r.reached.has(dt.id)||(r.reached.add(dt.id),(dt.flag||dt.fire||dt.id==="valley")&&c(["rest",dt.name,dt.id])));for(let dt of r.coins)!dt.taken&&Math.abs(dt.x-l.x)<1.25&&Math.abs(dt.z-l.z)<1.25&&Math.hypot(dt.x-l.x,dt.z-l.z)<1&&Math.abs(dt.y-(l.y+.6))<1.2&&(dt.taken=!0,r.coinsGot++,c(["coin",dt]));st(l.x,l.z,l.y,1.45),!r.summit&&e.rad(l.x,l.z)<e.RP-1&&Math.abs(l.y-e.HS)<1&&!r.carry&&(r.summit={t:0,phase:"wait",wind:0},r.climb.done?c(["summit",0,!1]):(r.climb.done=!0,r.climb.time=r.t-(r.climb.t0||0),c(["summit",r.climb.time,!0]))),r.summit&&r.summit.phase==="wait"&&e.rad(l.x,l.z)>e.RP+8&&(r.summit=null)}function st(l,u,T,I){for(let H of r.items)if(!H.taken&&Math.abs(H.x-l)<I+.2&&Math.abs(H.z-u)<I+.2&&Math.hypot(H.x-l,H.z-u)<I&&Math.abs(H.y-T)<1.8){H.taken=!0;let it=xe(H.task);it.got++,c(["pick",H.task,it.got,it.def.need]),(!r.track||r.track===H.task||xe(r.track).done)&&(r.track=H.task)}}let at=t0(i,i.I.garage.car),W=at.car;r.car=W;let bt=()=>at.seatWorld(Vr.door);function ft(l){if(l.mode!=="walk"||l.air||l.swim)return!1;let u=bt();return Math.hypot(l.x-u.x,l.z-u.z)<1.9&&Math.abs(l.y-(W.y-.5))<1.6&&!(Math.abs(W.roll)>.8)}function Ct(l){if(r.vq.caught&&!r.vq.delivered)return c(["carNo","gazelle"]),!1;let u=bt();return l.mode="getin",l.carT=0,l.from={x:l.x,z:l.z,y:l.y,face:l.face,dx:u.x,dz:u.z},l.vx=l.vz=0,l.speed=0,r.fishing=null,c("carDoor"),!0}function pt(l){return Math.abs(W.vf)>3?!1:(l.mode="getout",l.carT=0,W.driven=!1,c("carDoor"),c("carOff"),!0)}function xt(l,u,T){i.ensureVeg(W.x,W.z,170);let I=at.seatWorld();if(l.mode==="getin"){l.carT+=T;let Q=Ee(l.carT/1.05,0,1),wt=l.from;W.door=Math.min(1,l.carT/.3)*(1-ue(.7,1,Q));let Tt=bt(),jt=ue(0,.45,Q),re=ue(.4,1,Q);l.x=ee(ee(wt.x,Tt.x,jt),I.x,re),l.z=ee(ee(wt.z,Tt.z,jt),I.z,re),l.y=ee(ee(wt.y,W.y-.5,jt),I.y,re),l.face=jt<1?Math.atan2(Tt.z-wt.z,Tt.x-wt.x):W.yaw,re>0&&(l.face=bn(l.face,W.yaw,10,T)),l.speed=0,l.drive=re,Q>=1&&(l.mode="drive",W.driven=!0,W.engine=!0,W.door=0,c("carStart")),at.step(T,{});return}if(l.mode==="getout"){l.carT+=T;let Q=Ee(l.carT/.85,0,1);W.door=Math.min(1,l.carT/.25)*(1-ue(.75,1,Q)),W.engine=!1;let wt=bt(),Tt={x:wt.x-Math.sin(W.yaw)*-.15,z:wt.z+Math.cos(W.yaw)*-.15};if(l.x=ee(I.x,Tt.x,ue(.2,.9,Q)),l.z=ee(I.z,Tt.z,ue(.2,.9,Q)),l.y=ee(I.y,i.H(Tt.x,Tt.z),ue(.1,.6,Q)),l.face=W.yaw-Math.PI/2*ue(.5,1,Q),l.drive=1-ue(.15,.75,Q),at.step(T,{}),Q>=1){W.door=0,l.drive=0;let[jt,re]=i.collide(Tt.x,Tt.z,l.r),Y=i.surfaceAt(jt,re,i.H(jt,re)+.5);Object.assign(l,{mode:"walk",x:jt,z:re,y:Y.y,vx:0,vz:0,vy:0,air:!1,surf:Y.kind,hopPh:0,speed:0})}return}let H=u.kx!=null?{x:u.kx,y:u.ky}:{x:u.jx||0,y:u.jy||0},it=at.step(T,{ty:Ee(H.y*1.25,-1,1),sx:Ee(H.x*1.3,-1,1),hand:!!u.hand});for(let Q of it)c(Q);if(it.some(Q=>Q[0]==="carCrash"&&Q[1]>13)&&p(l,Math.round((it.find(Q=>Q[0]==="carCrash")[1]-13)*4),"crash"),it.some(Q=>Q[0]==="carLand"&&Q[1]>9)&&p(l,Math.round((it.find(Q=>Q[0]==="carLand")[1]-9)*5),"land"),l.mode==="drive"){l.x=I.x,l.z=I.z,l.y=I.y,l.face=W.yaw,l.speed=Math.abs(W.vf),l.vx=W.vx,l.vz=W.vz,l.drive=1,l.hp=Math.max(l.hp,1),r.t-l.lastHurt>6&&l.hp<l.maxHp&&(l.hp=Math.min(l.maxHp,l.hp+T*3));for(let Q of i.restPoints)(!Q.dyn||Q.on)&&!Q.plaza&&Math.hypot(l.x-Q.x,l.z-Q.z)<(Q.fire?7:3.5)&&Math.abs(l.y-Q.y)<3&&r.rest!==Q&&(r.rest=Q,r.reached.has(Q.id)||(r.reached.add(Q.id),(Q.flag||Q.fire||Q.id==="valley")&&c(["rest",Q.name,Q.id])));st(W.x,W.z,W.y-.5,2.6),W.depth>.9?(W.drownT=(W.drownT||0)+T,W.drownT>2.5&&(W.drownT=0,Mt(l))):W.drownT=0}}function Mt(l){if(W.driven=!1,W.engine=!1,at.place(W.home.x,W.home.z,W.home.yaw),l&&(l.mode==="drive"||l.mode==="getin"||l.mode==="getout")){let u=bt();Object.assign(l,{mode:"walk",x:u.x,z:u.z,y:i.H(u.x,u.z),vx:0,vz:0,air:!1,drive:0})}c("carTow")}function Ut(l,u,T){let I=r.carry;if(l.mode==="lift"){I.t+=T;let H=I.t;l.x=I.from[0]+H*H*2.2,l.z=I.from[2]+H*H*.66,l.y=I.from[1]+H*H*3.2+Math.sin(H*6)*.2,l.rot+=T*(4+H*3),H>2.6&&(l.mode="carry",I.t=0,I.p0=[l.x,l.y,l.z],c("carry"));return}if(l.mode==="carry"){I.t+=T;let H=Ee(I.t/I.dur,0,1),it=H*H*(3-2*H),Q=[I.p0,[e.x+80,e.HS+48,e.z+14],[n.x-50,n.VF+78,n.z],I.end],wt=Y=>{let lt=1-it;return lt*lt*lt*Q[0][Y]+3*lt*lt*it*Q[1][Y]+3*lt*it*it*Q[2][Y]+it*it*it*Q[3][Y]},Tt=wt(0),jt=wt(1),re=wt(2);l.face=Math.atan2(re-l.z,Tt-l.x),l.x=Tt,l.y=jt,l.z=re,l.rot+=T*ee(9,2,H),r.wind=ee(1,.25,H),H>=1&&(l.mode="glide",l.vy=-3,l.vx=l.vz=0,l.chute=0,c("chute"),Qt(l));return}if(l.mode==="glide"){l.chute=Math.min(1,l.chute+T*3),l.rot*=Math.pow(.015,T),l.vy+=(-3.2-l.vy)*Math.min(1,T*3);let H=Ee(u.mag||0,0,1),it=Math.hypot(u.mx||0,u.mz||0),Q=it>1e-4?u.mx/it:0,wt=it>1e-4?u.mz/it:0;l.vx=Xe(l.vx,Q*4.6*H,3,T),l.vz=Xe(l.vz,wt*4.6*H,3,T),l.x+=l.vx*T,l.z+=l.vz*T,l.y+=l.vy*T,[l.x,l.z]=i.collide(l.x,l.z,.4,jt=>jt.tall),H>.1&&(l.face=bn(l.face,Math.atan2(wt,Q),5,T));for(let jt of r.coins)!jt.taken&&Math.hypot(jt.x-l.x,jt.z-l.z)<1.25&&Math.abs(jt.y-(l.y+.55))<1.3&&(jt.taken=!0,r.coinsGot++,c(["coin",jt]));r.wind=Math.max(0,r.wind-T*.2);let Tt=i.surfaceAt(l.x,l.z,l.y+.5);l.y<=Tt.y&&(l.y=Tt.y,l.vy=0,l.rot=0,l.chute=0,l.landT=.35,l.mode="walk",l.air=!1,l.surf=Tt.kind,r.carry=null,r.drop={x:l.x+Math.cos(l.face)*1.2,z:l.z+Math.sin(l.face)*1.2,t:0,face:l.face},c(["landChute"]))}}function Qt(l){r.coins=r.coins.filter(u=>!u.sky);for(let u=0;u<20;u++){let T=u*.62;r.coins.push({x:l.x+Math.cos(T)*3.2,z:l.z+Math.sin(T)*3.2,y:l.y-4-u*1.55,sky:!0})}}function ne(l){let u=r.summit;if(!(!u||r.carry)){if(u.t+=l,u.phase==="wait"&&u.t>=45&&r.windStory&&(u.phase="wind",u.t=0,c("windStart")),u.phase==="wind"&&(u.wind=Ee(u.t/7,0,1),r.wind=u.wind,u.t>8.5)){let T=r.hero;r.scope=!1;let[I,H]=_e();r.carry={t:0,from:[T.x,T.y,T.z],dur:6.2,end:[n.x+I,n.VF+i.V.H0(I,H)+34,n.z+H]},T.mode="lift",T.air=!0,u.phase="lift",c("lift")}u.phase==="lift"&&!r.carry&&(r.summit=null)}}function _e(){let l=xn(r.seed*7+13>>>0),u=(I,H)=>!i.tallNear(n.x+I,n.z+H,it=>Math.hypot(it.x-n.x-I,it.z-n.z-H)<4.5+it.r),T=null;for(let I=0;I<80;I++){let H=32+l()*56,it=l()<.5?-1:1,Q=Ee(n.riverZ(H)+it*(4.5+l()*3),-n.FLOOR+2.5,n.FLOOR-2.5);if(!(Math.hypot(H-r.vq.camp.x,Q-r.vq.camp.z)<16)){if(u(H,Q))return[H,Q];T||(T=[H,Q])}}return T||[60,n.riverZ(60)+5]}function et(){r.summit&&r.summit.phase==="wait"&&r.windStory&&(r.summit.t=45)}function Zt(l){let u=r.hero,T=u.mode==="walk"&&!r.summit;for(let I of f){I.t+=l,I.cool=Math.max(0,I.cool-l);let H=u.x-I.x,it=u.z-I.z,Q=Math.hypot(H,it),wt=Math.abs(u.y-I.y);if(Q>120&&I.state==="idle"){I.vx=I.vz=0,I.speed=0;continue}let Tt=u.run?14:u.speed>.4?9:5.5,jt=I.kind==="wolf",re=(Y,lt,Ht)=>{let Yt=Y-I.x,dt=lt-I.z,se=Math.hypot(Yt,dt);return se<.05?(y(I,0,0,0,l,{cautious:!0}),se):(y(I,Yt/se,dt/se,Ht,l,{cautious:!0,collFilter:Me=>!Me.hedge||!0}),I.speed>.2&&(I.face=bn(I.face,Math.atan2(I.vz,I.vx),8,l)),se)};switch(I.state){case"idle":if(T&&I.cool<=0&&Q<Tt&&wt<3){I.state="notice",I.t=0,c([jt?"growl":"grunt",I.kind]);break}if(I.t>3+Math.random()*3){I.t=0;let Y=Math.random()*Pe;I.tx=I.home.x+Math.cos(Y)*5,I.tz=I.home.z+Math.sin(Y)*5}Math.hypot(I.tx-I.x,I.tz-I.z)>.6?re(I.tx,I.tz,1):re(I.x,I.z,0);break;case"notice":if(re(I.x,I.z,0),I.face=bn(I.face,Math.atan2(it,H),10,l),!T){I.state="return";break}if(I.t>(jt?.6:.9)){if(I.state=jt?"chase":"charge",I.t=0,!jt){let Y=Q||1;I.charge=[H/Y,it/Y]}c([jt?"howl":"grunt",I.kind])}break;case"chase":re(u.x,u.z,5),(!T||Q>22||I.t>7||Math.hypot(I.x-I.home.x,I.z-I.home.z)>32)&&(I.state="return",I.cool=3);break;case"charge":{let Y=I.x,lt=I.z;y(I,I.charge[0],I.charge[1],7.8,l,{cautious:!0}),I.face=Math.atan2(I.charge[1],I.charge[0]),(Math.hypot(I.x-Y,I.z-lt)<7.8*l*.3||I.t>1.8)&&(I.state=T&&Q<12&&I.t<6?"notice":"return",I.t=0);break}case"return":(re(I.home.x,I.home.z,2.2)<1||I.t>20)&&(I.state="idle",I.t=0);break}if(I.ph+=l*(I.state==="chase"||I.state==="charge"?16:I.speed>.3?8:0),(I.state==="chase"||I.state==="charge")&&Q<1.25&&wt<1.4&&u.stun<=0&&T){let Y=Q||1;u.vx=H/Y*6,u.vz=it/Y*6,u.stun=.9,u.landT=.3,I.state="return",I.cool=6;let lt=jt?18:25;c(["bitten",I.kind,lt]),p(u,lt,I.kind)}}}let le=i.I.tasks,xe=l=>r.tasks.find(u=>u.id===l);function te(l){return l.id==="gazelle"?r.vq.caught?1:0:l.id==="fish"?Math.min(r.fish,l.def.need):l.got}let fe=(l,u)=>[l-n.x,u-n.z],De={mer:[1.05,-.5],zone:[2.35,.35],pen:[-4.45,-1.75]},kt=[[-1.1,-2.8,1.25],[0,-2.8,1.3],[1.1,-2.8,1.25],[-.78,-.8,.55],[4,-2.4,.62],[1.95,-1.8,.35],[-2.05,-1.6,.4],[1.68,-.25,.14],[-1.68,-.25,.14],[1.05,-.5,.42],[-5.8,-1,.3],[-5.8,-1.8,.3],[-5.8,-2.6,.3],[-5.1,-2.9,.3],[-4.45,-2.9,.3],[-3.8,-2.9,.3],[-3.1,-2.6,.3],[-3.1,-1.8,.3],[-3.1,-1,.3]],k=[],vt={id:"camp",x:0,z:0,y:0,name:"\u062E\u064A\u0645\u0629 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",face:0,flag:!1,dyn:!0,on:!1};i.restPoints.push(vt);function K(l,u,T){let I=Math.cos(l.rot),H=Math.sin(l.rot);return{x:n.x+l.x+u*I+T*H,z:n.z+l.z-u*H+T*I}}let ht=80*Math.PI/180,X=60*Math.PI/180;function mt(){for(let I of k)i.removeColl(I);let l=e.x+Math.cos(ht)*8.7,u=e.z+Math.sin(ht)*8.7,T=Math.atan2(e.z-u,e.x-l);r.vq.camp={summit:!0,rot:Math.PI/2-T,base:e.HS-n.VF,x:0,z:0},r.vq.merW={x:l,z:u},r.vq.zoneW={x:e.x+Math.cos(X)*7.2,z:e.z+Math.sin(X)*7.2},r.vq.penW={x:e.x+Math.cos(X+.25)*9.2,z:e.z+Math.sin(X+.25)*9.2},k=[i.addColl({x:e.x+Math.cos(ht)*10,z:e.z+Math.sin(ht)*10,r:1.1})],Object.assign(x,{x:l,z:u,y:e.HS,face:T})}function rt(l){l.state="flee",l.t=0,l.stuck=0;let u=r.hero,T=Math.hypot(l.x-u.x,l.z-u.z)||1;l.fx=(l.x-u.x)/T,l.fz=(l.z-u.z)/T,c("snort")}function gt(l){let u=m,T=r.hero,I=r.vq;u.t+=l;let H=T.x-u.x,it=T.z-u.z,Q=Math.hypot(H,it)||.001,wt=Math.atan2(it,H);if(Q>140&&!I.caught){u.vx=u.vz=0;return}let Tt=T.mode==="walk"?T.speed:0,jt=Math.hypot(u.vx,u.vz)>.2;if(u.ph+=l*(u.state==="flee"?15:jt?8:0),u.state!=="flee"&&u.state!=="leap"&&(u.stamina=Math.min(4,u.stamina+l*(u.state==="tired"?.5:.8))),!I.caught&&["graze","look","walk","alert"].includes(u.state)){let Yt=Q<22?1+(1-Q/22)*1.6:0,dt=u.state!=="graze",se=Tt>2.6?dt?2.6:1.4:Tt>1?dt?1.1:.06:Tt>.3&&dt?.35:0;u.sus=Ee(u.sus+(se*Yt>0?se*Yt:-.3)*l,0,1)}let re=(Yt,dt)=>{let[se,Me]=fe(Yt,dt);return i.slope(Yt,dt)<.7&&se>1&&se<n.VL-1&&Math.abs(Me)<n.FLOOR+1},Y=(Yt,dt,se)=>{let Me=Yt-u.x,oe=dt-u.z,ke=Math.hypot(Me,oe);if(ke<.05)return u.vx=u.vz=0,ke;u.vx=Xe(u.vx,Me/ke*se,6,l),u.vz=Xe(u.vz,oe/ke*se,6,l);let Te=u.x+u.vx*l,he=u.z+u.vz*l;return[Te,he]=i.collide(Te,he,.42),re(Te,he)&&(u.x=Te,u.z=he),u.face=bn(u.face,Math.atan2(u.vz,u.vx),7,l),ke},[lt,Ht]=fe(u.x,u.z);switch(u.state){case"graze":if(u.vx=u.vz=0,u.sus>.5)u.state="alert",u.t=0,c("snort");else if(u.t>u.gt)if(u.t=0,Math.random()<.72)u.state="look";else for(let Yt=0;Yt<12;Yt++){let dt=lt+(Math.random()-.5)*14,se=Ht+(Math.random()-.5)*10;if(n.onFloor(dt,se)&&Math.abs(se-n.riverZ(dt))>1.6){u.tx=n.x+dt,u.tz=n.z+se,u.state="walk";break}}break;case"look":u.vx=u.vz=0,Q<26&&(u.face=bn(u.face,wt,4,l)),u.sus>.5?(u.state="alert",u.t=0,c("snort")):u.t>1.1&&(u.state="graze",u.t=0,u.gt=1.4+Math.random()*1.8);break;case"walk":if(u.sus>.5){u.state="alert",u.t=0,u.vx=u.vz=0,c("snort");break}(Y(u.tx,u.tz,1.1)<.4||u.t>6)&&(u.state="graze",u.t=0,u.vx=u.vz=0,u.gt=1.4+Math.random()*1.8);break;case"alert":u.vx=u.vz=0,u.face=bn(u.face,wt,8,l),u.sus>=1||Q<1.6?rt(u):u.sus<.3&&(u.state="graze",u.t=0,u.gt=1.2+Math.random()*1.2);break;case"flee":{u.stamina-=l;let Yt=8.2*(.55+.45*Math.max(0,u.stamina)/4),dt=-H/Q,se=-it/Q;Math.abs(Ht)>5.5&&(se-=Math.sign(Ht)*(Math.abs(Ht)-5.5)*.45),lt<8&&(dt+=(8-lt)*.35),lt>n.VL-8&&(dt-=(lt-n.VL+8)*.35);let Me=Math.hypot(dt,se)||1;u.fx=Xe(u.fx,dt/Me,5,l),u.fz=Xe(u.fz,se/Me,5,l);let oe=Math.hypot(u.fx,u.fz)||1,ke=u.fx/oe,Te=u.fz/oe,he=u.x+ke*Yt*l,Ne=u.z+Te*Yt*l;[he,Ne]=i.collide(he,Ne,.42);let sn=Math.hypot(he-u.x,Ne-u.z);re(he,Ne)&&(u.vx=(he-u.x)/l,u.vz=(Ne-u.z)/l,u.x=he,u.z=Ne),u.stuck=sn<Yt*l*.35?u.stuck+l:0,u.face=bn(u.face,Math.atan2(Te,ke),10,l),u.stuck>.35&&Q<10?(u.state="cornered",u.t=0,u.vx=u.vz=0):u.stamina<=0?(u.state="tired",u.t=0,c("tired")):Q>32&&u.t>1.5&&(u.state="graze",u.t=0,u.vx=u.vz=0,u.sus=.35,u.gt=1.5);break}case"tired":Q<9?Y(u.x-H/Q*2,u.z-it/Q*2,2.3):u.vx=u.vz=0,u.stamina>3.2&&u.t>2.2&&(u.sus=.45,Q<6?rt(u):(u.state="graze",u.t=0));break;case"cornered":if(u.vx=u.vz=0,u.face=bn(u.face,wt,8,l),!u.triedLeap&&Q<4&&u.t>.4){let Yt=T.x+H/Q*4.5,dt=T.z+it/Q*4.5,[se,Me]=fe(Yt,dt);n.onFloor(se,Me)||(Yt=T.x+H/Q*3,dt=n.z+Ee(fe(0,T.z+it/Q*3)[1],-(n.FLOOR-2),n.FLOOR-2)),Object.assign(u,{triedLeap:!0,state:"leap",t:0,from:[u.x,u.z],to:[Yt,dt]}),c("snort")}else u.t>4&&Q>9&&(u.state="graze",u.t=0,u.sus=.4);break;case"leap":{let Yt=Math.min(1,u.t/.75);u.x=ee(u.from[0],u.to[0],Yt),u.z=ee(u.from[1],u.to[1],Yt),u.hy=Math.sin(Yt*Math.PI)*1.5,u.vx=(u.to[0]-u.from[0])/.75,u.vz=(u.to[1]-u.from[1])/.75,u.face=Math.atan2(u.vz,u.vx),Yt>=1&&(u.hy=0,rt(u));break}case"follow":{let Yt=T.x-Math.cos(T.face)*1.45,dt=T.z-Math.sin(T.face)*1.45,se=Math.hypot(Yt-u.x,dt-u.z);if(se>12)u.x=Yt,u.z=dt;else if(se>.08){u.vx=Xe(u.vx,(Yt-u.x)/se*Math.min(7,se*3.2),6,l),u.vz=Xe(u.vz,(dt-u.z)/se*Math.min(7,se*3.2),6,l);let Me=u.x+u.vx*l,oe=u.z+u.vz*l;[Me,oe]=i.collide(Me,oe,.42),u.x=Me,u.z=oe,u.face=bn(u.face,Math.atan2(u.vz,u.vx),7,l)}else u.vx=u.vz=0;break}case"pen":{let Yt=I.penW,dt=Math.hypot(Yt.x-u.x,Yt.z-u.z);dt>.3?(u.vx=(Yt.x-u.x)/dt*1.3,u.vz=(Yt.z-u.z)/dt*1.3,u.x+=u.vx*l,u.z+=u.vz*l,u.face=bn(u.face,Math.atan2(u.vz,u.vx),6,l)):u.vx=u.vz=0;break}}u.y=i.H(u.x,u.z)+(u.hy||0),!I.caught&&T.mode==="walk"&&["graze","look","walk","alert","tired","cornered"].includes(u.state)&&Q<1.55&&(u.hy||0)<.25&&Math.abs(T.y-u.y)<1.5&&(I.caught=!0,u.state="follow",u.vx=u.vz=0,u.sus=0,r.focus={t:2.2,dist:5.2,yaw:Math.atan2(u.z-T.z,u.x-T.x)-Math.PI/2},c("catch"))}function St(l){let u=r.hero,T=r.vq;if(u.mode!=="walk")return;let I=Math.hypot(u.x-T.merW.x,u.z-T.merW.z),H=T.camp,it=Math.atan2(T.merW.z-e.z,T.merW.x-e.x);if(!T.called&&I<24&&Math.abs(u.y-x.y)<8&&(T.called=!0,c("call")),!T.met&&I<4.2&&(T.met=!0,r.focus={t:3.4,dist:6.2,x:(u.x+T.merW.x)/2,z:(u.z+T.merW.z)/2,yaw:it,talk:!0},c("meet")),I<3.6&&Math.abs(u.y-x.y)<3)for(let Q of r.tasks)Q.done||Q.id==="gazelle"||te(Q)<Q.def.need||(Q.done=!0,Q.id==="fish"&&(r.fish-=Q.def.need),r.focus={t:3.2,dist:6.4,x:(u.x+T.merW.x)/2,z:(u.z+T.merW.z)/2,yaw:it,talk:!0},c(["handIn",Q.id,Q.def.reward]),r.track===Q.id&&(r.track=null));T.caught&&!T.delivered&&Math.hypot(u.x-T.zoneW.x,u.z-T.zoneW.z)<1.7&&(T.delivered=!0,m.state="pen",xe("gazelle").done=!0,xe("gazelle").got=1,r.track==="gazelle"&&(r.track=null),r.focus={t:4.6,dist:6.6,x:(u.x+T.merW.x)/2,z:(u.z+T.merW.z)/2,yaw:it,talk:!0},c("deliver"))}function Lt(l,u={}){r.seed=(u.seed!=null?u.seed:Math.random()*4294967295)>>>0;let T=xn(r.seed);s.length=0,s.push(...f,m,x);for(let wt of f)Object.assign(wt,{x:wt.home.x,z:wt.home.z,y:wt.home.y,vx:0,vz:0,vy:0,air:!1,state:"idle",cool:0,t:Math.random()*2});mt();let I=60,H=0;for(let wt=0;wt<400;wt++){let Tt=6+T()*(n.VL-12),jt=(T()-.5)*2*(n.FLOOR-2.5);if(!(Tt<22||Math.abs(jt-n.riverZ(Tt))<2.2||!n.onFloor(Tt,jt))){I=Tt,H=jt;break}}Object.assign(m,{x:n.x+I,z:n.z+H,vx:0,vz:0,state:"graze",t:0,gt:2.5,sus:0,stamina:4,triedLeap:!1,hy:0,face:T()*Pe}),m.y=i.H(m.x,m.z),Object.assign(r.vq,{met:!1,called:!1,caught:!1,delivered:!1}),vt.on=!1,r.coins=e.coins.map(wt=>({...wt,taken:!1})),r.zip=null,r.climbing=null,r.fishing=null,r.fish=0,Object.assign(W,{driven:!1,engine:!1,door:0}),at.place(W.home.x,W.home.z,W.home.yaw),r.tasks=le.map(wt=>({id:wt.id,def:wt,got:0,done:!1})),r.track=null,r.boardRead=!1,r.items=le.flatMap(wt=>wt.items.map(Tt=>({...Tt,task:wt.id,taken:!1}))),r.coinsGot=0,r.summit=null,r.scope=!1,r.carry=null,r.focus=null,r.wind=0,r.t=0,r.drop=null,r.climb={done:!1,time:0,t0:0},r.reached=new Set;let it=i.restPoints[0];r.rest=it,r.reached.add(it.id),r.hero=b(l,it),s.push(r.hero),r.hero.boots=!!r.tools.boots;let Q=r.hero;if(u.at==="summit"&&(Object.assign(Q,{x:e.x-e.RP+2.5,z:e.z+2,y:e.HS}),r.rest=i.restPoints.find(wt=>wt.id==="summit"),r.climb.done=!0),u.at==="valley"){let wt=i.restPoints.find(Tt=>Tt.id==="valley");Object.assign(Q,{x:wt.x,z:wt.z,y:wt.y,face:0}),r.rest=wt}return{camp:0,gazelle:[m.x,m.z],start:[Q.x,Q.z]}}function It(){let l=r.hero;if(!l)return null;let u=l.mode==="walk"&&!l.air||l.mode==="fish",T=l.mode==="drive"||l.mode==="getin"||l.mode==="getout",I=T?bt():null;return{v:1,seed:r.seed,t:+r.t.toFixed(1),pos:u?{x:+l.x.toFixed(2),z:+l.z.toFixed(2),y:+l.y.toFixed(2)}:I?{x:+I.x.toFixed(2),z:+I.z.toFixed(2),y:+i.H(I.x,I.z).toFixed(2)}:null,face:+l.face.toFixed(3),hp:Math.round(l.hp),rest:r.rest&&r.rest.id,reached:[...r.reached],tasks:r.tasks.map(H=>[H.id,H.got,H.done?1:0]),items:r.items.map(H=>H.taken?1:0).join(""),fish:r.fish,track:r.track,board:r.boardRead?1:0,vq:{met:r.vq.met?1:0,called:r.vq.called?1:0,caught:r.vq.caught&&!r.vq.delivered?1:0,delivered:r.vq.delivered?1:0},climbDone:r.climb.done?1:0,coins:r.coins.map(H=>H.taken?1:0).join(""),coinsGot:r.coinsGot,car:{x:+W.x.toFixed(2),z:+W.z.toFixed(2),yaw:+W.yaw.toFixed(3)}}}function ce(l){if(!l||l.v!==1||!r.hero)return!1;let u=r.hero,T=r.vq;r.t=l.t||0;for(let it of l.reached||[])r.reached.add(it);let I=i.restPoints.find(it=>it.id===l.rest);I&&(r.rest=I);for(let[it,Q,wt]of l.tasks||[]){let Tt=xe(it);Tt&&(Tt.got=Q,Tt.done=!!wt)}if((l.items||"").split("").forEach((it,Q)=>{r.items[Q]&&(r.items[Q].taken=it==="1")}),r.tasks.every(it=>it.done)){for(let it of r.tasks)it.got=0,it.done=!1;for(let it of r.items)it.taken=!1}r.fish=l.fish||0,r.track=l.track||null,r.boardRead=!!l.board,Object.assign(T,{met:!!l.vq.met,called:!!l.vq.called,delivered:!!l.vq.delivered}),l.climbDone&&(r.climb.done=!0),(l.coins||"").split("").forEach((it,Q)=>{r.coins[Q]&&(r.coins[Q].taken=it==="1")}),r.coinsGot=l.coinsGot||0,l.car&&Number.isFinite(l.car.x)&&i.H(l.car.x,l.car.z)>i.SEA-.6&&at.place(l.car.x,l.car.z,l.car.yaw);let H=l.pos||(I?{x:I.x,z:I.z,y:I.y}:null);if(H){let it=i.surfaceAt(H.x,H.z,H.y+.6);Object.assign(u,{x:H.x,z:H.z,y:Math.max(it.y,Math.min(H.y,it.y+.05)),vx:0,vz:0,vy:0,air:!1,mode:"walk",surf:it.kind,plat:it.plat})}return u.face=l.face||0,u.hp=Ee(l.hp||u.maxHp,35,u.maxHp),T.delivered?(m.state="pen",Object.assign(m,{x:T.penW.x,z:T.penW.z,y:e.HS}),xe("gazelle").done=!0):l.vq.caught&&(T.caught=!0,m.state="follow",Object.assign(m,{x:u.x-Math.cos(u.face)*2,z:u.z-Math.sin(u.face)*2,vx:0,vz:0,sus:0}),m.y=i.H(m.x,m.z)),!0}function tt(l){r.tools={...l||{}},r.hero&&(r.hero.boots=!!r.tools.boots)}function we(l){let[u,T]=String(l).split(":");if(u==="zip"){let I=i.zips[+T];return I&&r.hero.mode==="walk"&&P(I),!0}if(u==="rope"){let I=i.anchors[+T];return I?r.tools.rope?(r.hero.mode==="walk"&&N(I),!0):(c(["needTool","rope"]),!1):!1}if(u==="fish"){let I=G(r.hero);return r.tools.rod?(I&&v(I),!0):(c(["needTool","rod"]),!1)}if(u==="shop")return c("shop"),!0;if(u==="board")return r.boardRead=!0,c("board"),!0;if(u==="car"){let I=r.hero;return I.mode==="drive"?pt(I):ft(I)?Ct(I):!1}return u==="tow"?(Mt(r.hero),!0):l==="scope"?(r.scope=!r.scope,!0):(l==="tea"&&(r.hero.hp=r.hero.maxHp),!0)}function ot(){let l=r.hero;if(l.mode==="drive")return Math.abs(W.vf)<3?{id:"car",label:"\u{1F6AA} \u0627\u0646\u0632\u0644"}:null;if(l.mode!=="walk"||l.air)return null;if(ft(l))return{id:"car",label:"\u{1F699} \u0627\u0631\u0643\u0628 \u0627\u0644\u0628\u0643\u064A",r:1.9};let u=null,T=1e9;if(r.summit&&r.summit.phase==="wait"){for(let I of e.plaza.inter){let H=Math.hypot(l.x-I.x,l.z-I.z);H<I.r&&H<T&&(T=H,u=I)}for(let I of i.zips){let H=Math.hypot(l.x-I.stand.x,l.z-I.stand.z);H<2.4&&H<T&&(T=H,u={id:"zip:"+I.i,label:`\u{1F6A1} ${I.name} ${I.icon}`,r:2.4})}if(r.vq.met){let I=Math.hypot(l.x-r.vq.merW.x,l.z-r.vq.merW.z);I<3.2&&I<T&&!(r.vq.caught&&!r.vq.delivered)&&(T=I,u={id:"shop",label:"\u{1F6D2} \u062F\u0643\u0627\u0646 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",r:3.2})}}for(let I of i.anchors){let H=Math.hypot(l.x-I.bot.x,l.z-I.bot.z);H<2.2&&Math.abs(l.y-I.bot.y)<1.6&&H<T&&(T=H,u={id:"rope:"+I.i,label:r.tools.rope?`\u{1F9D7} \u0627\u062A\u0633\u0644\u0651\u0642 ${Math.round(I.h)} \u0645`:"\u{1F9D7} \u062A\u062D\u062A\u0627\u062C \u062D\u0628\u0644 \u062A\u0633\u0644\u0651\u0642",r:2.2})}{let I=i.I.board,H=l.x-I.x,it=l.z-I.z,Q=Math.hypot(H,it);Q<7&&H*I.fx+it*I.fz>.8&&Math.abs(l.y-i.H(I.x,I.z))<2&&Q<T&&(T=Q,u={id:"board",label:"\u{1F4DC} \u0627\u0642\u0631\u0627 \u0644\u0648\u062D\u0629 \u0627\u0644\u0637\u0644\u0628\u0627\u062A",r:7})}return!u&&!l.swim&&G(l)&&(u={id:"fish",label:r.tools.rod?"\u{1F3A3} \u0627\u0635\u0637\u0627\u062F \u0633\u0645\u0686":"\u{1F3A3} \u062A\u062D\u062A\u0627\u062C \u0633\u0646\u0627\u0631\u0629",r:3}),u}function ct(){let l=r.track&&xe(r.track);return l&&!l.done?l:r.tasks.find(u=>!u.done)||null}function j(){let l=r.hero,u=r.vq;if(l.mode==="faint")return"\u{1F635} \u2026";if(u.caught&&!u.delivered)return"\u{1F3D4}\uFE0F \u0631\u062C\u0651\u0639 \u0627\u0644\u063A\u0632\u0627\u0644 \u0644\u0623\u0628\u0648 \u062C\u0627\u0633\u0645 \u0628\u0627\u0644\u0642\u0645\u0629";if(!r.boardRead&&!u.met&&!r.track)return"\u{1F4DC} \u0627\u0642\u0631\u0627 \u0644\u0648\u062D\u0629 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0628\u0633\u0627\u062D\u0629 \u0627\u0644\u0641\u062C\u0631";let T=ct();if(!T)return"\u{1F30D} \u0643\u0645\u0651\u0644\u062A \u0643\u0644 \u0627\u0644\u0637\u0644\u0628\u0627\u062A! \u0627\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u062C\u0632\u064A\u0631\u0629";let I=T.def,H=te(T),it=(i.I.zones.find(Q=>Q.id===I.zone)||{}).name||"";return H>=I.need?`\u26F0\uFE0F \u0633\u0644\u0651\u0645 ${I.icon} ${I.name} \u0644\u0623\u0628\u0648 \u062C\u0627\u0633\u0645 \u0628\u0627\u0644\u0642\u0645\u0629`:T.id==="fish"&&!r.tools.rod?"\u{1F3A3} \u0627\u0634\u062A\u0631\u064A \u0633\u0646\u0627\u0631\u0629 \u0645\u0646 \u062F\u0643\u0627\u0646 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645 \u0628\u0627\u0644\u0642\u0645\u0629":T.id==="gazelle"?`\u{1F98C} \u062C\u064A\u0628 ${I.name} \u0645\u0646 ${it}`:`${I.icon} ${I.name} ${H}/${I.need} \u2014 ${it}`}function ie(){let l=r.hero,u=r.vq;if(u.caught&&!u.delivered)return{x:e.x,z:e.z,icon:"\u{1F3D4}\uFE0F"};let T=ct();if(!T)return null;let I=T.def;if(te(T)>=I.need||T.id==="fish"&&!r.tools.rod)return{x:e.x,z:e.z,icon:"\u{1F3D4}\uFE0F"};let H=null,it=1e9;for(let Q of r.items)if(Q.task===T.id&&!Q.taken){let wt=Math.hypot(Q.x-l.x,Q.z-l.z);wt<it&&(it=wt,H=Q)}return H&&it<600?{x:H.x,z:H.z,icon:I.icon,item:!0}:{x:I.at.x,z:I.at.z,icon:I.icon}}function qt(l,u){if(!(l>0))return[];r.t+=l;let T=r.hero;if(!T)return[];if(B(T,u||{},l),T.mode!=="drive"&&T.mode!=="getin"&&T.mode!=="getout")for(let H of at.step(l,{}))H[0]==="carFlip"&&c(H);ne(l),!r.summit&&!r.carry&&(r.wind=Math.max(0,r.wind-l*.35)),Zt(l),gt(l),St(l),r.drop&&(r.drop.t+=l),r.focus&&(r.focus.t-=l,r.focus.t<=0&&(r.focus=null));let I=a.slice();return a.length=0,I}return r.tools={},r.fish=0,r.tasks=[],r.items=[],{S:r,ents:s,beasts:f,gz:m,merchant:x,step:qt,enter:Lt,interact:we,nearInteract:ot,skipWait:et,objective:j,trackTarget:ie,setTrack:l=>{r.track=l},setTools:tt,have:te,snapshot:It,restore:ce,respawn:()=>{r.hero&&r.hero.mode==="walk"&&A(r.hero,"menu")},hurt:l=>p(r.hero,l,"test")}}var Tc=new Ve,Sy=new Ve,zn=new Ve,sa=new Ve,nr=(i,t,e,n)=>i.copy(Tc.set(t)).lerp(Sy.set(e),Ee(n,0,1));function n0({scene:i,G:t,U:e,camera:n,waterN:s,glowTex:o,colorBase:r,S:a}){let c=t.I,h=t.SEA,d=t.M,f=t.HALF,m=new Le({vertexColors:!0}),x=new Le({vertexColors:!0,flatShading:!0}),y=Mc(x,e),b=new Mn,p=new Ve;function _(S,V,g,w,F,z){let L=V-h;if(L<.4)return nr(F,"#D9C99A","#3C7C88",-L/5),L<-5&&F.lerp(zn.set("#1E4C69"),Ee((-L-5)/22,0,1)),F;nr(F,"#5C973C","#9CC45A",yn(S*.02+9,g*.02)*1.2-.1),F.lerp(zn.set("#B5AE68"),ue(.55,.8,Cn(S*.008+3,g*.008))*.42);let Z=c.coastS(S,g);if(z>0){let yt=c.flora(S,g,L,Z,w);F.lerp(zn.set("#3D6629"),Ee(yt.t,0,.9)*.6),yt.reed>.3&&F.lerp(zn.set("#6F7E3E"),.6)}else F.lerp(zn.set("#3D6629"),ue(.44,.62,yn(S*.0032+5,g*.0032-3))*.45);F.lerp(zn.set("#8D8A70"),ue(300,390,L)*.45);let ut=Math.hypot(S+1500,g+1650);if(ut<520&&(nr(zn,"#D2AE52","#E6CB72",Cn(S*.5,0)*.5+.5*Math.sin(S*.9+g*.15)**2),F.lerp(zn,ue(520,380,ut)*.85)),Z<160&&L<4.5&&F.lerp(zn.set("#E4D3A0"),ue(4.5,1.6,L)),w>.72){let yt=c.peaks.some(_t=>_t.dark&&Math.hypot(S-_t.x,g-_t.z)<_t.r);nr(zn,yt?"#3E3A37":"#6C665C",yt?"#6A645E":"#ADA595",Cn(S*.2,V*.6)),F.lerp(zn,ue(.72,1.1,w))}if(z>0){let yt=c.nearRoad(S,g);yt&&yt.d<yt.hw+1.2&&F.lerp(zn.set(z>1?"#A88A5E":"#9E8A62"),ue(yt.hw+1.2,yt.hw-.3,yt.d)*.9);let _t=c.nearRiver(S,g);_t&&_t.d<_t.w+2.5&&F.lerp(zn.set("#857A55"),ue(_t.w+2.5,_t.w,_t.d)*.7)}return F}let A=[{size:1024,split:760},{size:256,split:170},{size:64,split:0}],P=32,M=-4608,N=new Map,R=(S,V,g)=>S*1e8+(V+5e3)*1e4+(g+5e3),v=m;function C(S,V,g){let w=A[S].size,F=w/P,z=M+V*w,L=M+g*w,Z=P+1,ut=Z+2,yt=new Float32Array(ut*ut);for(let Wt=0;Wt<ut;Wt++)for(let Pt=0;Pt<ut;Pt++)yt[Wt*ut+Pt]=t.H(z+(Pt-1)*F,L+(Wt-1)*F);let _t=(Wt,Pt)=>yt[(Pt+1)*ut+(Wt+1)],E=new Float32Array((Z*Z+4*P)*3),U=new Float32Array(E.length),O=new Float32Array(E.length),D=[],nt=0;for(let Wt=0;Wt<Z;Wt++)for(let Pt=0;Pt<Z;Pt++){let Dt=z+Pt*F,$t=L+Wt*F,pe=_t(Pt,Wt),ae=(_t(Pt+1,Wt)-_t(Pt-1,Wt))/(2*F),be=(_t(Pt,Wt+1)-_t(Pt,Wt-1))/(2*F),ve=Math.hypot(ae,be),ze=Math.hypot(ae,1,be);if(E[nt*3]=Dt,E[nt*3+1]=pe,E[nt*3+2]=$t,U[nt*3]=-ae/ze,U[nt*3+1]=1/ze,U[nt*3+2]=-be/ze,r(Dt,pe,$t,ve,sa,S)||_(Dt,pe,$t,ve,sa,S),O[nt*3]=sa.r,O[nt*3+1]=sa.g,O[nt*3+2]=sa.b,nt++,Pt<Z-1&&Wt<Z-1){let Ae=Wt*Z+Pt;D.push(Ae,Ae+Z,Ae+1,Ae+1,Ae+Z,Ae+Z+1)}}let Et=[];for(let Wt=0;Wt<Z;Wt++)Et.push(Wt);for(let Wt=1;Wt<Z;Wt++)Et.push(Wt*Z+Z-1);for(let Wt=Z-2;Wt>=0;Wt--)Et.push((Z-1)*Z+Wt);for(let Wt=Z-2;Wt>0;Wt--)Et.push(Wt*Z);let At=nt,Bt=F*.9+1;for(let Wt of Et){E[nt*3]=E[Wt*3],E[nt*3+1]=E[Wt*3+1]-Bt,E[nt*3+2]=E[Wt*3+2];for(let Pt=0;Pt<3;Pt++)U[nt*3+Pt]=U[Wt*3+Pt],O[nt*3+Pt]=O[Wt*3+Pt];nt++}for(let Wt=0;Wt<Et.length;Wt++){let Pt=Et[Wt],Dt=Et[(Wt+1)%Et.length],$t=At+Wt,pe=At+(Wt+1)%Et.length;D.push(Pt,$t,Dt,Dt,$t,pe,Pt,Dt,$t,Dt,pe,$t)}let Xt=new tn;Xt.setAttribute("position",new Ke(E,3)),Xt.setAttribute("normal",new Ke(U,3)),Xt.setAttribute("color",new Ke(O,3)),Xt.setIndex(D),Xt.computeBoundingSphere();let Rt=new Gt(Xt,v);return Rt.receiveShadow=!0,Rt.matrixAutoUpdate=!1,Rt.visible=!1,i.add(Rt),Rt}let G=(S,V)=>{let g=A[0].size,w=M+S*g,F=M+V*g;for(let z=0;z<=4;z++)for(let L=0;L<=4;L++)if(c.coastS(w+z/4*g,F+L/4*g)>-650)return!1;return!0},B=[];for(let S=0;S<9;S++)for(let V=0;V<9;V++)G(S,V)||B.push({lv:0,i:S,j:V});let st=[];function at(S,V,g){let w=R(S,V,g),F=N.get(w);return F||(F={lv:S,i:V,j:g,mesh:null,x:M+(V+.5)*A[S].size,z:M+(g+.5)*A[S].size,used:bt},N.set(w,F)),F}let W=(S,V,g)=>{let w=A[S.lv].size/2;return Math.hypot(Math.max(0,Math.abs(V-S.x)-w),Math.max(0,Math.abs(g-S.z)-w))},bt=0;function ft(S,V,g){bt++,st.length=0;let w=Math.max(0,g-h-60)*1.4,F=z=>{if(z.used=bt,!z.mesh)return st.push(z),!1;let L=W(z,S,V),Z=A[z.lv].split+(z.lv===0?w:w*.15);if(z.lv<2&&L<Z){let ut=[],_t=!0;for(let E=0;E<4;E++)for(let U=0;U<4;U++){let O=at(z.lv+1,z.i*4+E,z.j*4+U);ut.push(O),O.mesh||(_t=!1,st.push(O),O.used=bt)}if(_t){z.mesh.visible=!1;for(let E of ut)F(E);return!0}}return z.mesh.visible=!0,!0};for(let z of B)F(at(z.lv,z.i,z.j));for(let z of N.values())if(z.used!==bt&&z.mesh){z.mesh.visible=!1;let L=W(z,S,V);bt-z.used>120&&(z.lv===2&&L>420||z.lv===1&&L>1700)&&(i.remove(z.mesh),z.mesh.geometry.dispose(),z.mesh=null,N.delete(R(z.lv,z.i,z.j)))}st.sort((z,L)=>(z.lv===0?-1e6:0)+W(z,S,V)/(z.lv+1)-((L.lv===0?-1e6:0)+W(L,S,V)/(L.lv+1)))}for(let S of B){let V=at(0,S.i,S.j);V.mesh=C(0,S.i,S.j)}function Ct(S){let V=performance.now(),g=0;for(;st.length&&(performance.now()-V<S||g===0);){let w=st.shift();w.mesh||(w.mesh=C(w.lv,w.i,w.j),g++)}return st.length}let pt=(S,V)=>{let g=xn(S),w=18,F=[Ft(Vt(new ye(.2,.36,w*.9,7),0,w*.45,0),"#5B3F27")];for(let z=0;z<5;z++){let L=z/4,Z=ee(5.4,w-2.6,L),ut=ee(3.3,1,L)*(.9+g()*.2),yt=ee(4.3,3,L);F.push(Vt(Ft(new Rn(ut,yt,7,1),(_t,E,U,O)=>Be(_t,V?"#1B4226":"#214F2C",V?"#3A7538":"#4C8C44",.3+(U/yt+.5)*.5+(je(E*7,O*7)-.5)*.2)),(g()-.5)*.2,Z+yt*.3,(g()-.5)*.2,0,g()*3,0))}return en(F)},xt=S=>{let V=xn(S),g=[Ft(Vt(new ye(.3,.5,6,7),0,3,0),"#5E4630")];for(let[w,F]of[[1,.3],[-.8,.7],[.2,-1]])g.push(Ft(Vt(new ye(.1,.2,3.4,5),w*.9,6.2,F*.9,F*.5,0,-w*.5),"#5E4630"));for(let w=0;w<6;w++){let F=w/6*Pe+V(),z=w?2.6+V()*.8:3.2;g.push(Vt(Ft(new En(z,0),(L,Z,ut,yt)=>Be(L,"#2D5E2A","#6FA349",.35+ut/z*.4+(je(Z*3,yt*3)-.5)*.3)),w?Math.cos(F)*2.8:0,w?8+V()*2.5:10.5,w?Math.sin(F)*2.8:0,0,0,0,1,.8,1))}return en(g)},Mt=S=>{let V=xn(S),g=[Ft(Vt(new ye(.16,.3,2.2,6),0,1.1,0,.12,0,.08),"#6B5640")];for(let w=0;w<5;w++){let F=w/5*Pe+V();g.push(Vt(Ft(new En(1.4+V()*.4,0),(z,L,Z)=>Be(z,"#5F7A4F","#A6B98A",.4+Z*.3)),Math.cos(F)*1.2,3.2+V()*.9,Math.sin(F)*1.2,0,0,0,1,.65,1))}return en(g)},Ut=()=>Ft(new vi(1,0),(S,V,g,w)=>Be(S,"#7A746A","#B9B2A2",.4+g*.5+(je(V*5,w*5)-.5)*.35)),Qt={pine:[pt(5,!1)],oak:[xt(7)],palm:[kr(xn(3),1.1,9)],olive:[Mt(9)],bush:[ta()],rock:[ea()],boulder:[Ut()],reed:[Sc()]},ne={pine:1,oak:1,palm:2.4,olive:1,bush:1.7,rock:1.3,boulder:1,reed:2.4},_e={pine:.22,oak:.18,palm:.12,olive:.12,bush:.2},et={pine:ci(new Le({vertexColors:!0,flatShading:!0}),.0012,5,e),oak:ci(new Le({vertexColors:!0,flatShading:!0}),.0016,5,e),palm:ci(new Le({vertexColors:!0,side:We}),.003,9,e),olive:ci(new Le({vertexColors:!0,flatShading:!0}),.004,2,e),bush:y,rock:x,boulder:x,reed:ci(new Le({vertexColors:!0}),.09,.2,e)},Zt={pine:en([Ft(Vt(new ye(.25,.35,6,4),0,3,0),"#4B3520"),Ft(Vt(new Rn(3.4,13.5,5,1),0,11.2,0),(S,V,g)=>Be(S,"#1F4A2A","#3E7A3A",g/13.5+.5))]),oak:en([Ft(Vt(new ye(.3,.45,6,4),0,3,0),"#4B3520"),Ft(Vt(new En(4.6,0),0,9.6,0,0,0,0,1,.72,1),(S,V,g)=>Be(S,"#2B5A28","#5E9443",g/4+.5))]),palm:en([Ft(Vt(new ye(.12,.17,5.5,4),0,2.75,0),"#8B6A3E"),Ft(Vt(new En(1.25,0),0,5.6,0,0,0,0,1,.42,1),"#3F8A36")]),olive:Ft(Vt(new En(2.4,0),0,3.5,0,0,0,0,1,.7,1),"#7C9467")},le=Ft(Vt(new Rn(.5,1,5,1),0,.5,0),(S,V,g)=>Be(S,"#BFBFBF","#FFFFFF",g)),xe={pine:[6.6,15,4,"#24502C"],oak:[9.5,9,4.5,"#355F2C"],palm:[5,3.5,11,"#3C7B34"],olive:[4.6,3.6,1.8,"#6E8A5E"]},te=new Le({vertexColors:!0,flatShading:!0}),fe=26e3,De=9e4,kt={};for(let S of Object.keys(Zt)){let V=new Ti(Zt[S],te,fe);V.count=0,V.frustumCulled=!1,V.receiveShadow=!0,i.add(V),kt[S]=V}let k=new Ti(le,te,De);k.count=0,k.frustumCulled=!1,i.add(k);let vt=130,K=480,ht=1400,X=128,mt=new Map,rt=X/t.VC,gt=[];{let S=Math.ceil(ht/t.VC);for(let V=-S;V<=S;V++)for(let g=-S;g<=S;g++){let w=Math.hypot(V,g)*t.VC;w<=ht+t.VC&&gt.push([V,g,w])}gt.sort((V,g)=>V[2]-g[2])}let St=0,Lt=null,It=null,ce=0,tt=-1,we=new Set;function ot(S,V,g){let w=Math.floor(S/t.VC),F=Math.floor(V/t.VC);(!Lt||Lt[0]!==w||Lt[1]!==F)&&(Lt=[w,F],St=0);let z=performance.now();for(;St<gt.length&&performance.now()-z<g;){let[L,Z]=gt[St++],ut=(w+L)*100003+(F+Z);we.has(ut)||(t.vegCell(w+L,F+Z),we.add(ut),ce++)}if(we.size>9e3){for(let L of we)if(we.delete(L),we.size<6e3)break}}function ct(S,V){let g={};for(let F=0;F<rt;F++)for(let z=0;z<rt;z++)for(let L of t.vegCell(S*rt+F,V*rt+z).items)(g[L.t]=g[L.t]||[]).push(L);let w=new Re;for(let[F,z]of Object.entries(g)){let L=Qt[F];L&&L.forEach((Z,ut)=>{let yt=z.filter((E,U)=>U%L.length===ut);if(!yt.length)return;let _t=new Ti(Z,et[F],yt.length);yt.forEach((E,U)=>{b.position.set(E.x,E.y,E.z),b.rotation.set(E.rx||0,E.ry||0,E.rz||0),b.scale.setScalar((E.s||1)*ne[F]),b.updateMatrix(),_t.setMatrixAt(U,b.matrix),_e[F]&&_t.setColorAt(U,p.setScalar(1).offsetHSL(0,0,(je(E.x,E.z)-.5)*_e[F]))}),_t.castShadow=F!=="reed"&&F!=="rock",_t.receiveShadow=!0,_t.computeBoundingSphere(),w.add(_t)})}return i.add(w),w}function j(S,V,g,w=g*.5){let F=performance.now();ot(S,V,w);let z=Math.floor(S/X),L=Math.floor(V/X),Z=new Set;for(let _t=-2;_t<=2;_t++)for(let E=-2;E<=2;E++){let U=(z+_t+.5)*X,O=(L+E+.5)*X;Math.hypot(Math.max(0,Math.abs(S-U)-X/2),Math.max(0,Math.abs(V-O)-X/2))<vt&&Z.add((z+_t)*100003+(L+E))}let ut=!1;for(let[_t,E]of mt)Z.has(_t)||(i.remove(E.group),E.group.children.forEach(U=>U.dispose&&U.dispose()),mt.delete(_t),ut=!0);for(let _t of Z)if(!mt.has(_t)&&performance.now()-F<g){let E=Math.round(_t/100003),U=_t-E*100003;mt.set(_t,{group:ct(E,U)}),ut=!0}(!It||Math.hypot(S-It[0],V-It[1])>24||ut||ce>60)&&performance.now()-tt>350&&ie(S,V)}function ie(S,V){It=[S,V],ce=0,tt=performance.now();let g={pine:0,oak:0,palm:0,olive:0},w=0,F=Math.floor(S/t.VC),z=Math.floor(V/t.VC);for(let[L,Z,ut]of gt){if(ut<vt-t.VC)continue;let yt=(F+L)*100003+(z+Z);if(!we.has(yt))continue;let _t=t.vegCell(F+L,z+Z);if(!mt.has(Math.floor(_t.ci/rt)*100003+Math.floor(_t.cj/rt)))for(let E of _t.items){let U=xe[E.t];if(!U)continue;let O=Math.hypot(E.x-S,E.z-V);if(O<K){let D=kt[E.t];if(g[E.t]>=fe)continue;b.position.set(E.x,E.y,E.z),b.rotation.set(0,E.ry,0),b.scale.setScalar(E.s*(E.t==="palm"?2.4:1)),b.updateMatrix(),D.setMatrixAt(g[E.t]++,b.matrix)}else if(O<ht&&w<De&&(E.s>.95||O<900)){let D=E.s;b.position.set(E.x,E.y+U[2]*D,E.z),b.rotation.set(0,E.ry,0),b.scale.set(U[0]*D,U[1]*D,U[0]*D),b.updateMatrix(),k.setMatrixAt(w,b.matrix),k.setColorAt(w,p.set(U[3]).offsetHSL(0,0,(je(E.x,E.z)-.5)*.06)),w++}}}for(let L in g)kt[L].count=g[L],kt[L].instanceMatrix.needsUpdate=!0;k.count=w,k.instanceMatrix.needsUpdate=!0,k.instanceColor&&(k.instanceColor.needsUpdate=!0)}let qt=1900,Jt=new Ti(na(),ci(new Le({vertexColors:!0,side:We}),.5,0,e),qt);Jt.frustumCulled=!1,Jt.count=0,i.add(Jt);let l=null;function u(S,V){if(l&&Math.hypot(S-l[0],V-l[1])<8)return;l=[S,V];let g=0,w=xn((Math.floor(S/8)*7919^Math.floor(V/8)*104729)>>>0);for(let F=0;F<qt*1.6&&g<qt;F++){let z=w()*Pe,L=Math.sqrt(w())*42,Z=Math.round((S+Math.cos(z)*L)*4)/4,ut=Math.round((V+Math.sin(z)*L)*4)/4,yt=t.H(Z,ut),_t=yt-h;if(_t<.6||_t<4&&c.coastS(Z,ut)<160||c.reserved(Z,ut))continue;let E=c.nearRoad(Z,ut);if(E&&E.d<E.hw+.4)continue;if(d.rad(Z,ut)<250){let O=d.nearest(Z,ut,yt,1);if(d.rad(Z,ut)<d.RP+1||O&&O.d<O.p.hw+.3)continue}let U=c.nearRiver(Z,ut);U&&U.d<U.w+.5||(b.position.set(Z,yt,ut),b.rotation.set(0,je(Z,ut)*Pe,0),b.scale.setScalar(1+je(ut,Z)*.75))}Jt.count=g,Jt.instanceMatrix.needsUpdate=!0}let T=(S,V,g)=>{let w=s.clone();w.wrapS=w.wrapT=Cs,w.repeat.set(g,g),w.needsUpdate=!0;let F=new Fn({color:S,specular:"#FFFFFF",shininess:110,normalMap:w,transparent:!0,opacity:V});return F.normalScale.set(.6,.6),F},I=T("#2A7DB2",.84,1400),H=new Gt(new pn(26e3,26e3),I);H.rotation.x=-Math.PI/2,H.position.y=h,i.add(H);let it=new Gt(new pn(26e3,26e3),new _n({color:"#174767"}));it.rotation.x=-Math.PI/2,it.position.y=h-42,i.add(it);let Q=[I];for(let S of c.lakes){let V=T("#3A8FBE",.86,40);Q.push(V);let g=new Gt(new $n(S.r*1.3+30,48),V);g.rotation.x=-Math.PI/2,g.position.set(S.x,h+S.lv,S.z),i.add(g)}{let S=T("#4E8C8A",.8,60);Q.push(S);let V=new Gt(new $n(c.marsh.r,56),S);V.rotation.x=-Math.PI/2,V.position.set(c.marsh.x,h+c.marsh.lv,c.marsh.z),i.add(V)}let wt=T("#3C95C8",.88,1);Q.push(wt);for(let S of c.rivers){let V=[],g=[],w=[],F=0,z=0;S.pts.forEach((ut,yt)=>{let _t=S.pts[Math.max(0,yt-1)],E=S.pts[Math.min(S.pts.length-1,yt+1)],U=E.x-_t.x,O=E.z-_t.z,D=Math.hypot(U,O)||1,nt=-O/D,Et=U/D,At=ut.w+.7;if(yt&&(z+=Math.hypot(ut.x-S.pts[yt-1].x,ut.z-S.pts[yt-1].z)),V.push(ut.x+nt*At,h+ut.lv+.04,ut.z+Et*At,ut.x-nt*At,h+ut.lv+.04,ut.z-Et*At),g.push(0,z/6,1,z/6),yt){let Bt=(yt-1)*2;w.push(Bt,Bt+2,Bt+1,Bt+1,Bt+2,Bt+3)}});let L=new tn;L.setAttribute("position",new Ke(new Float32Array(V),3)),L.setAttribute("uv",new Ke(new Float32Array(g),2)),L.setIndex(w),L.computeVertexNormals();let Z=new Gt(L,wt);i.add(Z)}let Tt=li(64,128,(S,V,g)=>{S.clearRect(0,0,V,g);for(let w=0;w<90;w++)S.fillStyle=`rgba(255,255,255,${.25+Math.random()*.5})`,S.fillRect(Math.random()*V,0,1+Math.random()*3,g)},[3,1]),jt=new Le({map:Tt,color:"#DDF3FF",transparent:!0,opacity:.85,side:We,depthWrite:!1}),re=[];for(let S of c.falls){if(S.top-S.bot<4)continue;let V=Math.hypot(S.dx,S.dz)||1,g=S.w*2+1.2,w=S.top-S.bot+1,F=new Gt(new pn(g,w),jt);F.position.set(S.x,h+(S.top+S.bot)/2,S.z),F.rotation.y=Math.atan2(S.dx,S.dz)+Math.PI/2,F.rotation.order="YXZ",F.rotation.x=-.25,i.add(F);let z=new Jn(new Hn({map:o,color:"#FFFFFF",transparent:!0,opacity:.55,depthWrite:!1}));z.position.set(S.x+S.dx/V*3,h+S.bot+1.2,S.z+S.dz/V*3),z.scale.setScalar(g*1.4),i.add(z),re.push({m:F,sp:z})}let Y=(S,V=512,g=128,w=56,F="#8B5A2B",z="#FFF6E0")=>li(V,g,L=>{L.fillStyle=F,L.fillRect(0,0,V,g),L.strokeStyle="#E8C170",L.lineWidth=8,L.strokeRect(4,4,V-8,g-8),L.fillStyle=z,L.font=`900 ${w}px -apple-system,system-ui,sans-serif`,L.textAlign="center",L.textBaseline="middle",L.direction="rtl",L.fillText(S,V/2,g/2+4)}),lt=(S,V,g,w,F=0,z=0,L=0,Z=0)=>Vt(Ft(new Fe(S,V,g),w),F,z,L,0,Z,0),Ht=(S,V,g,w,F=0,z=0,L=0,Z=10)=>Vt(Ft(new ye(S,V,g,Z),w),F,z,L),Yt=S=>(V,g,w,F)=>Be(V,S>.5?"#C79E72":"#B98D62",S>.5?"#DDBB8E":"#D1AE80",.45+(je(Math.round(g*3),Math.round(w*3+F*3))-.5)*.35);function dt(S){let V=[],g=S.kind;if(g==="house"){let w=S.w,F=S.d,z=S.h,L=S.white?Z=>Z.set("#F1ECE2"):Yt(S.tint);V.push(Ft(Vt(new Fe(w,z,F),0,z/2,0),L));for(let[Z,ut,yt,_t]of[[0,F/2-.15,w,.3],[0,-F/2+.15,w,.3],[w/2-.15,0,.3,F],[-w/2+.15,0,.3,F]])V.push(Ft(Vt(new Fe(yt,.55,_t),Z,z+.27,ut),L));V.push(lt(.12,2.1,1,"#5B3A1F",w/2+.03,1.05,0));for(let Z of S.floors===2?[1.6,4.8]:[1.6])for(let ut of[-1,1])V.push(lt(.1,.8,.9,"#3A2A1E",w/2+.03,Z,ut*F*.28));S.floors===2&&V.push(Ft(Vt(new Fe(w+.1,.18,F+.1),0,3.25,0),"#A9825A")),V.push(lt(1.4,.12,1.4,"#8B6B44",w/2+.7,2.3,0))}else if(g==="hut"){let w=S.w,F=S.d;V.push(Ft(Vt(new Fe(w,2.4,F),0,1.2,0),(L,Z,ut)=>Be(L,"#7A5434","#9C7048",(ut+1.2)*3.3%1)));let z=new ye(.01,w*.78,F+.6,3,1);V.push(Ft(Vt(z,0,2.4+.75,0,Math.PI/2,0,0,1,1,1),"#5C3F27")),V.push(lt(.1,1.9,.9,"#3E2A18",w/2+.03,.95,0))}else if(g==="reedhut"||g==="mudhif"){let w=S.w,F=S.d,z=S.h,L=Math.round(F/.9),Z=new ye(w/2,w/2,F,18,1,!0,-Math.PI/2,Math.PI);V.push(Ft(Vt(Z,0,0,0,Math.PI/2,0,0,1,1,z/(w/2)),(ut,yt,_t,E)=>Be(ut,"#BFA35E","#E0C98A",.5+Math.sin(E*9)*.25+(je(yt*4,E*4)-.5)*.2)));for(let ut=0;ut<=L;ut++){let yt=-F/2+ut/L*F;V.push(Ft(Vt(new ye(w/2+.06,w/2+.06,.16,18,1,!0,-Math.PI/2,Math.PI),0,0,yt,Math.PI/2,0,0,1,1,z/(w/2)),"#8C7038"))}if(g==="mudhif")for(let ut of[-1,1])V.push(Ht(.35,.42,z+.8,"#A88A4C",ut*(w/2-.5),(z+.8)/2,F/2+.2,8))}else if(g==="teahouse"){let w=S.w,F=S.d;V.push(lt(.3,3.3,F,"#E3D2B4",-w/2,1.65,0),lt(w,3.3,.3,"#E3D2B4",0,1.65,-F/2),lt(w,3.3,.3,"#E3D2B4",0,1.65,F/2)),V.push(lt(w+1.2,.25,F+.6,"#7B5534",.3,3.4,0));for(let z of[-1,1])V.push(Ht(.12,.12,3.3,"#6B4A2E",w/2+.6,1.65,z*(F/2-.2),6));for(let z=0;z<3;z++)V.push(lt(.6,.45,1.8,"#8E5A36",-.6,.23,-3+z*3),lt(.9,.7,.9,"#6B4A2E",.6,.35,-3+z*3));V.push(Ht(.22,.3,.7,"#C9A13B",-w/2+.6,1.25,0,10))}else if(g==="stall"){let w=["#E63946","#2A9D8F","#F4A261","#457B9D","#E9C46A"],F=w[(S.tint||0)%w.length];for(let[z,L]of[[-1,-1],[1,-1],[-1,1],[1,1]])V.push(Ht(.05,.05,2.6,"#6B4A2E",z*1.4,1.3,L*1,5));V.push(Ft(Vt(new Fe(3.1,.08,2.3),0,2.62,0,.12,0,0),(z,L)=>z.set(Math.floor((L+2)*2.5)%2?F:"#FFF5E0"))),V.push(lt(2.8,.85,1,"#8B5E3C",0,.43,.3));for(let z=0;z<6;z++)V.push(lt(.35,.3,.3,["#E76F51","#F4D35E","#7FB069","#C2185B","#FFB703","#8D6E63"][z],-1.1+z*.44,1,.3))}else if(g==="garage"){let w=S.w,F=S.d,z=4.2,L=(ut,yt,_t,E)=>Be(ut,"#9E9C95","#BDBAB1",.5+(je(Math.round(yt*2),Math.round(E*2))-.5)*.35),Z=(ut,yt,_t,E)=>{let U=Math.floor((_t+.01)/.2),O=U%2?.2:0,D=Math.floor((E+yt+O+20)/.4);return _t<.6?ut.set("#8E877A"):Be(ut,"#D4CDBD","#E9E3D5",je(D,U))};V.push(Ft(Vt(new Fe(w+.4,.14,F+.4),0,.07,0),L)),V.push(Ft(Vt(new Fe(.28,z,F),-w/2+.14,z/2+.14,0),Z));for(let ut of[-1,1]){V.push(Ft(Vt(new Fe(w,z,.28),0,z/2+.14,ut*(F/2-.14)),Z)),V.push(lt(.26,z,.26,"#59616B",w/2-.13,z/2+.14,ut*(F/2-.13))),V.push(lt(.07,z-.5,.1,"#6E7680",w/2-.32,(z-.5)/2+.14,ut*(F/2-.36)));for(let yt of[-3,.5])V.push(lt(.04,.9,1.4,"#7FA6C4",yt,2.4,ut*(F/2+.005)))}V.push(Ft(Vt(new Fe(.32,.7,F),w/2-.16,z-.21,0),Z)),V.push(Ft(Vt(new ye(.3,.3,F-.7,18),w/2-.4,z-.72,0,Math.PI/2,0,0),(ut,yt,_t)=>ut.set(Math.floor((Math.atan2(_t-z+.72,yt)+4)*4)%2?"#9AA3AD":"#B6BEC6"))),V.push(Ft(Vt(new Fe(w+.9,.07,F+.7),.1,z+.32,0,0,0,.05),(ut,yt,_t,E)=>ut.set(Math.floor((E+10)*5)%2?"#A9B2BA":"#8D97A1"))),V.push(lt(.04,1.3,3.2,"#C9A878",-w/2+.31,1.95,-1.2));for(let ut=0;ut<9;ut++)V.push(lt(.03,.18+ut%3*.12,.05+ut%2*.05,["#2E2E2E","#C8283A","#7A7F86"][ut%3],-w/2+.35,2.15-ut%2*.45,-2.5+ut*.32));V.push(lt(4.6,.08,.84,"#8A5A30",-1.2,.98,-F/2+.56));for(let ut of[-3.4,1])for(let yt of[-F/2+.24,-F/2+.88])V.push(lt(.08,.86,.08,"#4A4A4A",ut,.55,yt));V.push(lt(4.4,.05,.76,"#6B4423",-1.2,.42,-F/2+.56)),V.push(lt(.55,.32,.3,"#C8283A",-2.4,1.18,-F/2+.5),lt(.5,.05,.26,"#2E2E2E",-2.4,1.36,-F/2+.5)),V.push(lt(.2,.18,.16,"#3B4D61",.2,1.11,-F/2+.4),lt(.3,.04,.12,"#3B4D61",.2,1.22,-F/2+.4));for(let ut=0;ut<4;ut++)V.push(Ht(.355,.355,.26,"#1D1D1F",-3.9,.27+ut*.27,F/2-.62,20)),V.push(Ht(.18,.18,.265,"#6E7680",-3.9,.27+ut*.27,F/2-.62,14));V.push(Ht(.29,.29,.88,"#B3261E",2.2,.58,F/2-.45,16),Ht(.29,.29,.88,"#1F5FA8",3,.58,F/2-.45,16));for(let ut of[2.2,3])for(let yt of[.34,.82])V.push(Ht(.3,.3,.03,"#2E2E2E",ut,yt,F/2-.45,16));V.push(Ft(Vt(new $n(1.3,20),-.4,.145,.4,-Math.PI/2,0,0),"#6F6C66")),V.push(lt(.9,.1,.3,"#C8283A",1.6,.2,-2.6),lt(.1,.5,.06,"#C8283A",1.2,.4,-2.6))}else if(g==="apron"){V.push(Ft(Vt(new Fe(S.w,.1,S.d),0,.03,0),(w,F,z,L)=>Be(w,"#A4A29B","#BCB9B0",.5+(je(Math.round(F*2),Math.round(L*2))-.5)*.3)));for(let w of[-1,1])V.push(lt(S.w-.6,.02,.14,"#E8C33A",0,.09,w*(S.d/2-.4)));for(let w=-2;w<=2;w++)V.push(lt(.6,.02,.14,"#F2F2F2",w*2.2,.09,0))}else if(g==="fuel")V.push(lt(1,.14,.8,"#8E8E8E",0,.07,0),lt(.55,1.6,.45,"#D62839",0,.94,0),lt(.6,.26,.5,"#F4F4F4",0,1.86,0)),V.push(lt(.02,.28,.3,"#1D2733",.285,1.35,0),lt(.06,.22,.1,"#2E2E2E",.3,.95,.12)),V.push(Ft(Vt(new Wn(.22,.02,5,14,Math.PI*1.2),.33,.72,.12,0,Math.PI/2,0),"#1D1D1F"));else if(g==="board"){let w=(F,z,L,Z)=>Be(F,"#C9B596","#E3D3B5",.4+(je(Math.round(z*3),Math.round(Z*3+L))-.5)*.5);V.push(Ft(Vt(new Fe(1.9,.18,4.6),0,.09,0),w),Ft(Vt(new Fe(1.25,.16,4.1),-.25,.26,0),w)),V.push(Ft(Vt(new Fe(1.95,.03,4.65),0,.185,0),"#B39C78"));for(let F of[-1,1])V.push(lt(.2,3.75,.2,"#5A3720",-.3,.34+1.875,F*1.82),lt(.28,.16,.28,"#7A4E2A",-.3,.42,F*1.82),lt(.26,.12,.26,"#7A4E2A",-.3,2.95,F*1.82)),V.push(Ft(Vt(new Rn(.2,.22,4),-.3,4.2,F*1.82,0,Math.PI/4,0),"#4A2C16")),V.push(Ft(Vt(new Fe(.55,.42,.55),.55,.55,F*1.95),w),Ft(Vt(new En(.3,1),.55,.88,F*1.95,0,0,0,1,.6,1),(z,L,Z,ut)=>z.set(["#FF6B9A","#FFD23F","#FFFFFF","#B28DFF","#E63946","#7FD16B"][Math.floor(je(L*9+F,ut*9)*6)])));V.push(lt(.1,2.05,3.5,"#6E4526",-.34,.34+.75+1.025,0));for(let[F,z]of[[1.06,.1],[3.17,.1]])V.push(lt(.16,z,3.62,"#8A5A30",-.27,F,0));for(let F of[-1,1])V.push(lt(.16,2.2,.1,"#8A5A30",-.27,2.12,F*1.76));for(let[F,z]of[[1,.02],[3.23,.02]])V.push(lt(.17,z,3.64,"#D4AF37",-.26,F,0));V.push(lt(.12,.5,2.7,"#5A3720",-.28,3.55,0));for(let F of[-1,1])V.push(Ft(Vt(new Fe(1.25,.08,4.5),-.3+F*.5,4.22,0,0,0,-F*.62),(z,L,Z,ut)=>z.set(Math.floor((ut+3)*4.5)%2?"#B5532F":"#C8653A")));V.push(lt(.16,.16,4.6,"#7A3A1E",-.3,4.55,0))}else if(g==="signpost")V.push(Ht(.08,.1,3.2,"#5B3A1F",0,1.6,0,6));else if(g==="gate"){for(let w of[-1,1])V.push(Ft(Vt(new Fe(1.1,5.2,1.1),0,2.6,w*4.6),Yt(.8)));V.push(Ft(Vt(new Fe(1.2,.9,10.4),0,5.6,0),Yt(.8)))}else if(g==="fountain")V.push(Ft(Vt(new ye(S.r,S.r+.15,.7,8),0,.35,0),"#D9CBB0"),Ht(.45,.6,1.8,"#CDBB9C",0,.9,0,8),Ht(1.1,.4,.35,"#D9CBB0",0,1.9,0,8));else if(g==="lamp")V.push(Ht(.06,.09,3.3,"#2E2E2E",0,1.65,0,6));else if(g==="pier"){V.push(Ft(Vt(new Fe(S.w,.22,S.d),0,0,0),(w,F,z,L)=>Be(w,"#7E5B3A","#A47A50",Math.floor((F+50)*1.6)%2*.6+.2)));for(let w=0;w<=Math.floor(S.w/4);w++)for(let F of[-1,1])V.push(Ht(.12,.12,4,"#5B3F27",-S.w/2+w*4,-2,F*(S.d/2-.1),6))}else if(g==="boat"||g==="canoe"){let w=g==="canoe"?6.5:5.2,F=g==="canoe"?.85:1.7;V.push(Ft(Vt(new Ue(1,14,6,0,Pe,Math.PI/2,Math.PI/2),0,.42,0,0,0,0,w/2,.5,F/2),g==="canoe"?"#3B2A1E":(z,L,Z)=>Be(z,"#2A6F97","#F1ECE2",Z*-2+.2))),g==="boat"&&V.push(lt(.25,.1,F*.8,"#7B5534",0,.38,0))}else if(g==="logs")for(let w=0;w<6;w++)V.push(Ft(Vt(new ye(.28,.28,S.w,8),0,.3+(w>3?.48:0),(w%4-1.5)*.48*(w>3?.6:1),0,0,Math.PI/2),"#8A6240"));else if(g==="well"){V.push(Ht(S.r,S.r+.1,.9,"#B8A88A",0,.45,0,12));for(let w of[-1,1])V.push(Ht(.06,.06,2.2,"#5B3A1F",w*.9,1.1,0,5));V.push(Ft(Vt(new ye(.01,1.2,.6,4),0,2.4,0,0,Math.PI/4,0),"#7B5534"))}else if(g==="lighthouse")V.push(Ft(Vt(new ye(2,3,17,16),0,8.5,0),(w,F,z)=>w.set(Math.floor((z+8.5)/3)%2?"#D62828":"#FBF7EF"))),V.push(Ht(2.6,2.6,.4,"#2E2E2E",0,17.2,0,16),Ht(1.6,1.6,1.8,"#9FD8FF",0,18.3,0,12),Ft(Vt(new Rn(1.9,1.4,16),0,19.9,0),"#D62828")),V.push(lt(.15,2.2,1,"#5B3A1F",3,1.1,0));else if(g==="fwall"){let w=Math.max(2,Math.round(S.w/2));for(let F=0;F<w;F++){let z=S.h*(.6+.4*je(S.x+F,S.z));V.push(Ft(Vt(new Fe(S.w/w+.05,z,S.d),-S.w/2+(F+.5)*S.w/w,z/2,0),(L,Z,ut,yt)=>Be(L,"#8E8576","#B8AE9B",.4+je(Math.round(Z*2+S.x),Math.round(ut*2))*.5)))}}else if(g==="ftower")V.push(Ft(Vt(new ye(S.r*.92,S.r,S.h,12),0,S.h/2,0),(w,F,z,L)=>Be(w,"#8E8576","#B8AE9B",.4+je(Math.round(F*2+L),Math.round(z*2))*.5)));else if(g==="campfire")for(let w=0;w<9;w++){let F=w/9*Pe;V.push(Vt(Ft(new vi(.22,0),"#8A857B"),Math.cos(F)*.75,.12,Math.sin(F)*.75))}else if(g==="square"){V.push(Ft(Vt(new Fe(S.w,.2,S.d),0,-.02,0),(w,F,z,L)=>Be(w,"#CBB894","#E2D2B2",(Math.floor(F/1.5)+Math.floor(L/1.5))%2*.5+je(Math.floor(F/1.5),Math.floor(L/1.5))*.35)));for(let[w,F]of[[-20,-26],[20,-26],[-20,26],[20,26]])V.push(Ft(Vt(new ye(3.2,3.4,.5,14),w,.25,F),"#9C8466"),Ft(Vt(new En(2.8,1),w,.6,F,0,0,0,1,.3,1),(z,L,Z,ut)=>z.set(["#FF6B9A","#FFD23F","#FFFFFF","#B28DFF","#E63946"][Math.floor(je(L*3,ut*3)*5)])))}return V}let se=[],Me=[],oe=[],ke=[],Te=[],he=null,Ne="";for(let S of c.sites){let V=dt(S),g=new Re;if(g.position.set(S.x,S.float?h+.15:S.y,S.z),g.rotation.y=-(S.rot||0),V.length){let w=new Gt(en(V),new Le({vertexColors:!0,side:We}));w.castShadow=!0,w.receiveShadow=!0,g.add(w)}if(S.kind==="palm"){let w=new Gt(Qt.palm[0],et.palm);w.scale.setScalar(2.4*(S.s||1)),w.castShadow=!0,g.add(w)}if(S.kind==="garage"){let w=new Gt(new pn(4.2,.6),new Le({map:Y("\u{1F527} \u0643\u0631\u0627\u062C \u0627\u0644\u0641\u062C\u0631 \xB7 \u{1F699}",1024,150,92,"#1F3B57","#FFE7A8"),emissive:"#0E1E2E",emissiveIntensity:.4}));w.position.set(S.w/2+.005,3.88,0),w.rotation.y=Math.PI/2,g.add(w);let F=new Le({color:"#FFFFFF",emissive:"#FFF4D6",emissiveIntensity:1});for(let z of[-2.5,1.5]){let L=new Gt(new Fe(1.2,.06,.14),F);L.position.set(z,4.05,0),g.add(L);let Z=new Jn(new Hn({map:o,color:"#FFF0C8",transparent:!0,opacity:.5,depthWrite:!1,blending:Xn}));Z.position.set(z,3.9,0),Z.scale.setScalar(2.4),g.add(Z),Me.push(Z)}}if(S.kind==="fuel"){let w=new Gt(new pn(.5,.2),new Le({map:Y("\u26FD \u0628\u0627\u0646\u0632\u064A\u0646",256,100,50,"#F4F4F4","#D62839")}));w.position.set(.305,1.86,0),w.rotation.y=Math.PI/2,g.add(w)}if(S.kind==="board"){let w=new Gt(new pn(2.6,.46),new Le({map:Y("\u{1F4DC} \u0637\u0644\u0628\u0627\u062A \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",1024,180,96,"#5A3720","#FFE7A8")}));w.position.set(-.215,3.55,0),w.rotation.y=Math.PI/2,g.add(w),he=li(1024,600,()=>{});let F=new Gt(new pn(3.4,1.99),new Le({map:he,emissive:"#2A1C10",emissiveIntensity:.25}));F.position.set(-.28,2.12,0),F.rotation.y=Math.PI/2,g.add(F);for(let z of[-1,1]){let L=new Re;L.position.set(.25,3.9,z*2.05);let Z=new Gt(new ye(.09,.11,.26,6),new Le({color:"#FFD27A",emissive:"#FFB347",emissiveIntensity:.9}));Z.position.y=-.3,L.add(Z);let ut=new Gt(new Rn(.13,.12,6),new Le({color:"#2E2E2E"}));ut.position.y=-.12,L.add(ut);let yt=new Gt(new ye(.008,.008,.25,4),new Le({color:"#2E2E2E"}));yt.position.y=0,L.add(yt);let _t=new Jn(new Hn({map:o,color:"#FFC85A",transparent:!0,opacity:.85,depthWrite:!1,blending:Xn}));_t.position.y=-.3,_t.scale.setScalar(1.3),L.add(_t),Me.push(_t),g.add(L),Te.push(L)}}if(S.kind==="signpost"&&["\u26F0\uFE0F \u0642\u0645\u0629 \u0627\u0644\u0633\u062D\u0627\u0628","\u{1F3D8}\uFE0F \u0642\u0631\u064A\u0629 \u0627\u0644\u0637\u064A\u0646","\u{1F334} \u0628\u0633\u0627\u062A\u064A\u0646 \u0627\u0644\u0631\u0637\u0628","\u{1F5FC} \u0627\u0644\u0645\u0646\u0627\u0631\u0629"].forEach((w,F)=>{let z=new Gt(new pn(1.9,.42),new Le({map:Y(w,512,112,54),side:We}));z.position.set(0,2.9-F*.5,0),z.rotation.y=[Math.PI/2,0,Math.PI,-Math.PI/2][F]+.2,z.translateX(.95),g.add(z)}),S.kind==="gate"){let w=new Gt(new pn(4.2,.8),new Le({map:Y("\u26F0\uFE0F \u0637\u0631\u064A\u0642 \u0627\u0644\u0642\u0645\u0629",512,100,58),side:We}));w.position.set(.62,5.6,0),w.rotation.y=Math.PI/2,g.add(w)}if(S.kind==="lamp"||S.kind==="lighthouse"){let w=new Jn(new Hn({map:o,color:"#FFC85A",transparent:!0,opacity:.8,depthWrite:!1,blending:Xn}));w.position.y=S.kind==="lamp"?3.3:18.4,w.scale.setScalar(S.kind==="lamp"?1:7),g.add(w),Me.push(w)}if(S.kind==="fountain"){let w=new Gt(new $n(S.r-.2,24),Q[1]);w.rotation.x=-Math.PI/2,w.position.y=.55,g.add(w)}if(S.kind==="campfire"&&oe.push(sn(g)),S.kind==="teahouse")for(let[w,F,z]of[[-.9,-3,Math.PI/2],[-.9,0,Math.PI/2+.3],[-.9,3,Math.PI/2-.2]]){let L=Us({thobe:["#F2EEE4","#D9D2C3","#EDE3CF"][ke.length%3],bisht:null});L.root.position.set(w,0,F),L.root.rotation.y=z,g.add(L.root),ke.push(L)}i.add(g),se.push({grp:g,x:S.x,z:S.z,st:S})}function sn(S){let V=new Re,g=F=>new _n({color:F,transparent:!0,opacity:.9,depthWrite:!1,blending:Xn});[["#FF5A1F",.32,.9],["#FF9A2E",.24,.7],["#FFE07A",.14,.45]].forEach(([F,z,L])=>{let Z=new Gt(new Rn(z,L,10,1,!0),g(F));Z.position.y=L/2+.1,V.add(Z)});for(let F=0;F<3;F++){let z=new Gt(new ye(.08,.08,1.1,6),new Le({color:"#5B3A1F"}));z.rotation.set(Math.PI/2,F/3*Math.PI,0),z.position.y=.12,V.add(z)}let w=new Jn(new Hn({map:o,color:"#FF8A2E",transparent:!0,opacity:.65,depthWrite:!1,blending:Xn}));return w.position.y=.6,w.scale.setScalar(2.6),V.add(w),S.add(V),V}for(let S of t.restPoints)if(S.fire){let V=new Re;V.position.set(S.fx,t.H(S.fx,S.fz),S.fz);let g=new Gt(en(dt({kind:"campfire"})),new Le({vertexColors:!0}));V.add(g);for(let w of[.4,2.5]){let F=new Gt(new ye(.22,.24,1.8,8),new Le({color:"#7A5434"}));F.rotation.set(0,w,Math.PI/2),F.position.set(Math.cos(w)*1.9,.22,Math.sin(w)*1.9),F.castShadow=!0,V.add(F)}oe.push(sn(V)),i.add(V),se.push({grp:V,x:S.x,z:S.z,st:{kind:"rest"}})}{let S=80*Math.PI/180,V=d.x+Math.cos(S)*10.1,g=d.z+Math.sin(S)*10.1,w=new Re,F=[];F.push(Ft(Vt(new Fe(2.2,.03,3.2),0,.02,0),(L,Z,ut,yt)=>L.set(Math.floor((yt+2)*2.2)%2?"#9B2226":"#CA6702")));for(let[L,Z]of[[-1.1,-1.6],[-1.1,1.6],[.9,-1.6],[.9,1.6]])F.push(Ht(.05,.05,2.4,"#6B4A2E",L,1.2,Z,5));F.push(Ft(Vt(new Fe(2.4,.06,3.6),-.1,2.42,0,0,0,.1),(L,Z,ut,yt)=>L.set(Math.floor((yt+2)*2)%2?"#0A9396":"#E9D8A6")));for(let L=0;L<5;L++)F.push(Ft(Vt(new ye(.28,.33,.6,8),-.7,.3,-1.2+L*.6),["#D4A373","#CCD5AE","#E9EDC9","#FAEDCD","#BC6C25"][L]));F.push(lt(.6,.4,.9,"#7B5534",.1,.2,1.1),lt(.5,.3,.5,"#B5838D",.1,.55,1.1));let z=new Gt(en(F),new Le({vertexColors:!0,side:We}));z.castShadow=!0,w.add(z),w.position.set(V,d.HS+.01,g),w.rotation.y=-Math.atan2(d.z-g,d.x-V),i.add(w)}let fn=new Le({color:"#3A3A3A"}),hi=new Le({color:"#7B5534"}),ni=(S,V,g,w,F)=>{let z=new Re;for(let Z of[-1,1]){let ut=new Gt(new ye(.14,.18,w,6),hi);ut.position.set(-Math.sin(F)*Z*1.3,w/2,Math.cos(F)*Z*1.3),ut.castShadow=!0,z.add(ut)}let L=new Gt(new Fe(.22,.22,2.9),hi);return L.position.y=w,L.rotation.y=-F,z.add(L),z.position.set(S,V,g),i.add(z),z};for(let S of t.zips){let V=[];for(let Z=0;Z<=S.L;Z+=6){let ut=S.at(Z);V.push(new J(ut.x,ut.y,ut.z))}let g=S.at(S.L);V.push(new J(g.x,g.y,g.z));let w=new Gt(new gi(new Gn(V),V.length,.04,4,!1),fn);i.add(w);let F=Math.atan2(S.uz,S.ux);ni(S.S.x,d.HS-1,S.S.z,5.6,F),ni(S.E.x,t.H(S.E.x,S.E.z)-.2,S.E.z,4.6,F);for(let Z of S.pts)if(Z.tower){let ut=new Re;for(let[_t,E]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let U=new Gt(new ye(.12,.16,12.6,5),fn);U.position.set(_t*.9,6.1,E*.9),U.rotation.set(E*.07,0,-_t*.07),ut.add(U)}let yt=new Gt(new Fe(2.4,.3,.6),fn);yt.position.y=12,yt.rotation.y=-F+Math.PI/2,ut.add(yt),ut.position.set(Z.x,t.H(Z.x,Z.z)-.3,Z.z),i.add(ut)}let z=new Gt(new pn(2.4,.6),new Le({map:Y(`\u{1F6A1} ${S.name} ${S.icon}`,512,128,56),side:We}));z.position.set(S.stand.x,d.HS+2.2,S.stand.z),z.rotation.y=-Math.atan2(S.stand.z-d.z,S.stand.x-d.x)+Math.PI/2,i.add(z);let L=new Gt(new ye(.06,.06,2.4,6),hi);L.position.set(S.stand.x,d.HS+1.2,S.stand.z),i.add(L)}let Ln=new Re;{let S=new Le({color:"#E63946"}),V=new Gt(new ye(.11,.11,.08,14),fn);V.rotation.x=Math.PI/2,V.position.y=2.4,Ln.add(V);let g=new Gt(new Fe(.3,.2,.04),S);g.position.set(0,2.38,.06),Ln.add(g);for(let L of[-1,1]){let Z=new Gt(new ye(.012,.012,.36,4),fn);Z.position.set(0,2.2,L*.17),Z.rotation.x=L*.35,Ln.add(Z)}let w=new Gt(new ye(.022,.022,.62,8),new Le({color:"#2E2E2E"}));w.rotation.x=Math.PI/2,w.position.y=2.03,Ln.add(w);let F=new Gt(new ye(.012,.012,1.3,4),S);F.position.set(0,1.68,0),Ln.add(F);let z=new Gt(new Wn(.17,.025,6,18),S);z.rotation.x=Math.PI/2,z.scale.z=.72,z.position.y=1,Ln.add(z)}Ln.visible=!1,i.add(Ln);let ui=new Le({color:"#C8A46A"}),Oi=new Le({color:"#E63946",side:We});for(let S of t.anchors){let V=[new J(S.top.x,S.top.y+.8,S.top.z)];for(let L=1;L<=16;L++){let Z=L/16,ut=ee(S.top.x,S.bot.x,Z),yt=ee(S.top.z,S.bot.z,Z);V.push(new J(ut,Math.max(t.H(ut,yt),ee(S.top.y,S.bot.y,Z)-.6)+.25,yt))}let g=new Gt(new gi(new Gn(V),40,.03,4,!1),ui);i.add(g);let w=new Gt(new ye(.06,.06,1.1,6),fn);w.position.set(S.top.x,S.top.y+.5,S.top.z),i.add(w);let F=new Gt(new ye(.03,.03,1.8,5),hi);F.position.set(S.bot.x,S.bot.y+.9,S.bot.z),i.add(F);let z=new Gt(new pn(.5,.32),Oi);z.position.set(S.bot.x+.25,S.bot.y+1.6,S.bot.z),i.add(z)}let xi=[];{let S=en([...Array(9)].map((yt,_t)=>{let E=_t*.7,U=.26+_t%3*.06;return Ft(Vt(new Rn(.05,U,5),Math.cos(E)*.07,U/2,Math.sin(E)*.07,Math.sin(E)*.2,0,Math.cos(E)*.2),(O,D,nt)=>Be(O,"#4E7A3A","#9BBF7A",nt/U+.3))}).concat([Ft(Vt(new Wn(.06,.012,5,12),0,.08,0,Math.PI/2),"#C8283A")],[...Array(6)].map((yt,_t)=>Ft(Vt(new Ue(.018,5,4),Math.cos(_t)*.08,.3+_t%2*.04,Math.sin(_t)*.08),"#B99CF0")))),V=en([Ft(Vt(new Ue(.11,12,6,0,Pe,0,Math.PI/2),0,.02,0,0,0,0,1,.38,.8),(yt,_t,E,U)=>Be(yt,"#8A8378","#D9D2C3",.5+Math.sin(Math.atan2(U,_t)*9)*.3)),Ft(Vt(new Ue(.11,12,6,0,Pe,0,Math.PI/2),-.02,.09,0,0,0,1.1,1,.32,.8),(yt,_t,E,U)=>Be(yt,"#7D776B","#CFC7B6",.5+Math.sin(Math.atan2(U,_t)*9)*.3)),Ft(Vt(new Ue(.03,10,8),.02,.05,0),"#FFF8EE")]),g=en([lt(.7,.08,.7,"#6B4A2E",0,.42,0),...[-1,1].flatMap(yt=>[-1,1].map(_t=>Ht(.03,.03,.42,"#5B3A1F",yt*.28,.21,_t*.28,5))),Ft(Vt(new ye(.27,.3,.55,12),0,.73,0),(yt,_t,E)=>Be(yt,"#C9963E","#E8C170",Math.floor((E+1)*9)%2?.2:.8)),Ft(Vt(new Rn(.33,.22,12),0,1.11,0),"#8C6A3A"),lt(.1,.06,.02,"#2A1C10",0,.55,.29),Ft(Vt(new ye(.09,.11,.16,10),.24,.53,.18),"#E0A83A")]),w=en([...Array(26)].map((yt,_t)=>{let E=_t*.26;return Ft(Vt(new ye(.018,.018,.55,4),Math.cos(E)*.3,.1+_t%3*.05,Math.sin(E)*.3,Math.PI/2,E+.3,.2*(_t%2?1:-1)),U=>U.set(_t%3?"#7A5A3A":"#5E4228"))}).concat([Ft(Vt(new $n(.27,12),0,.08,0,-Math.PI/2),"#5E4228"),Ft(Vt(new Ue(.06,8,6),.06,.12,.02,0,0,0,1,.78,1),"#EFE6D6"),Ft(Vt(new Ue(.06,8,6),-.07,.12,-.03,0,0,0,1,.78,1),"#E8DCC6")])),F=en([Ft(Vt(new ye(.004,.006,.42,4),0,.21,0),"#EFE6D6"),Ft(Vt(new Ue(.06,10,6),0,.25,0,0,0,0,.55,2.6,.12),(yt,_t,E)=>Be(yt,"#5A3A22","#D8B98A",.5+Math.sin(E*70)*.5))]),z=new Le({vertexColors:!0}),L=new _n({color:"#FFE38A",transparent:!0,opacity:.22,depthWrite:!1,blending:Xn,side:We}),Z=new ye(.18,.5,26,10,1,!0);Z.translate(0,13,0),c.tasks.flatMap(yt=>yt.items.map(_t=>({..._t,task:yt.id}))).forEach((yt,_t)=>{let E=new Re;E.position.set(yt.x,yt.y,yt.z);let U=yt.task==="thyme"?S:yt.task==="pearl"?V:yt.task==="honey"?g:w,O=new Gt(U,z);O.castShadow=!0,O.rotation.y=je(yt.x,yt.z)*Pe,E.add(O);let D=null;if(yt.task==="feather"&&(D=new Gt(F,z),D.position.set(.05,.12,0),D.rotation.z=-.5,E.add(D)),yt.task==="honey"){let At=new Gt(new ye(.07,.08,.14,10),new Le({color:"#F2A922",emissive:"#7A4A00",emissiveIntensity:.4}));At.position.set(.24,.53,.18),E.add(At),D=At}let nt=new Gt(Z,L);E.add(nt);let Et=new Jn(new Hn({map:o,color:"#FFE38A",transparent:!0,opacity:.7,depthWrite:!1,blending:Xn}));Et.position.y=yt.task==="honey"?.9:.35,Et.scale.setScalar(yt.task==="honey"?2.2:1.4),E.add(Et),i.add(E),xi.push({it:yt,idx:_t,grp:E,fe:D,beam:nt,gl:Et})})}function yi(){if(!he)return;let S=a.tasks.map(_t=>`${_t.id}:${_t.done?"D":""}${_t.got}`).join("|")+"|"+a.fish+"|"+a.track+"|"+(a.vq.caught?1:0);if(S===Ne)return;Ne=S;let V=he.image,g=V.getContext("2d"),w=V.width,F=V.height,z=g.createLinearGradient(0,0,0,F);z.addColorStop(0,"#A9794A"),z.addColorStop(1,"#8E6238"),g.fillStyle=z,g.fillRect(0,0,w,F);for(let _t=0;_t<900;_t++)g.fillStyle=`rgba(${60+_t%5*20},${35+_t%3*12},15,.25)`,g.fillRect(_t*97.3%w,_t*53.7%F,3,2);let L=318,Z=270,ut=18,yt=22;a.tasks.forEach((_t,E)=>{let U=_t.def,O=E%3,D=Math.floor(E/3),nt=w-ut-L-O*(L+18),Et=yt+D*(Z+18),At=_t.id==="gazelle"?a.vq.caught?1:0:_t.id==="fish"?Math.min(a.fish,U.need):_t.got,Bt=!_t.done&&At>=U.need;g.save(),g.translate(nt+L/2,Et+Z/2),g.rotate((E*37%7-3)*.008),g.fillStyle="rgba(0,0,0,.25)",g.fillRect(-L/2+6,-Z/2+8,L,Z),g.fillStyle=_t.done?"#E4EFD8":"#F6E8C6",g.fillRect(-L/2,-Z/2,L,Z),g.strokeStyle=a.track===_t.id&&!_t.done?"#E63946":"#C9A86A",g.lineWidth=a.track===_t.id&&!_t.done?8:3,g.strokeRect(-L/2+4,-Z/2+4,L-8,Z-8),g.fillStyle=["#E63946","#2A9D8F","#457B9D"][E%3],g.beginPath(),g.arc(0,-Z/2+16,10,0,Pe),g.fill(),g.textAlign="center",g.textBaseline="middle",g.direction="rtl",g.font='72px -apple-system,system-ui,"Apple Color Emoji","Noto Color Emoji",sans-serif',g.fillStyle="#000",g.fillText(U.icon,0,-Z/2+78),g.fillStyle="#3A2614",g.font="900 34px -apple-system,system-ui,sans-serif",g.fillText(U.name,0,-Z/2+146);let Xt=(c.zones.find(Rt=>Rt.id===U.zone)||{}).name||"";g.font="700 25px -apple-system,system-ui,sans-serif",g.fillStyle="#6B4A2B",g.fillText(U.need>1?`${Xt} \xB7 ${At}/${U.need}`:Xt,0,-Z/2+186),g.font="900 30px -apple-system,system-ui,sans-serif",g.fillStyle="#9A6B00",g.fillText(`${U.reward} \u{1FA99}`,0,-Z/2+230),(_t.done||Bt)&&(g.rotate(-.22),g.strokeStyle=_t.done?"rgba(46,140,60,.85)":"rgba(214,40,57,.85)",g.lineWidth=6,g.strokeRect(-110,-40,220,64),g.fillStyle=g.strokeStyle,g.font="900 38px -apple-system,system-ui,sans-serif",g.fillText(_t.done?"\u2714 \u062A\u0645":"\u062C\u0627\u0647\u0632 \u{1F392}",0,-8)),g.restore()}),he.needsUpdate=!0}let hn=360,wn=new Float32Array(hn*hn),Vn=new Float32Array(hn*hn),Bn=0,Ms=null;function Si(S){let V=performance.now(),g=f*2/hn;for(;Bn<hn&&performance.now()-V<S;){let w=f-(Bn+.5)*g;for(let F=0;F<hn;F++){let z=-f+(F+.5)*g,L=c.A(w,z),Z=Bn*hn+F;wn[Z]=d.rad(w,z)<230?t.H(w,z)-h:L,Vn[Z]=L>.4?c.flora(w,z,L,999,0).t:0}Bn++}return hn-Bn}function q(S=1024){Bn<hn&&Si(1e9);let V=document.createElement("canvas");V.width=V.height=hn;let g=V.getContext("2d"),w=g.createImageData(hn,hn),F=f*2/hn;for(let ut=0;ut<hn;ut++)for(let yt=0;yt<hn;yt++){let _t=ut*hn+yt,E=wn[_t],U=wn[Math.min(hn-1,ut+1)*hn+yt]-wn[Math.max(0,ut-1)*hn+yt],O=wn[ut*hn+Math.min(hn-1,yt+1)]-wn[ut*hn+Math.max(0,yt-1)];if(E<.35)nr(zn,"#BFE6EE","#2A6FA0",Ee(-E/14,0,1));else{nr(zn,"#E6D7A6","#86B55A",E/4),E>4&&nr(zn,"#86B55A","#5F9446",(E-4)/120),zn.lerp(Tc.set("#2F6B33"),Ee(Vn[_t],0,1)*.7),E>200&&zn.lerp(Tc.set("#A39B8B"),ue(200,330,E)),E>330&&zn.lerp(Tc.set("#E8E4DA"),ue(330,395,E));let D=Ee(1+(U*.55-O*.55)/F*.9,.6,1.3);zn.multiplyScalar(D)}w.data[_t*4]=zn.r*255,w.data[_t*4+1]=zn.g*255,w.data[_t*4+2]=zn.b*255,w.data[_t*4+3]=255}g.putImageData(w,0,0);let z=document.createElement("canvas");z.width=z.height=S;let L=z.getContext("2d");L.imageSmoothingEnabled=!0,L.drawImage(V,0,0,S,S);let Z=(ut,yt)=>[(yt+f)/(2*f)*S,(f-ut)/(2*f)*S];L.lineCap="round",L.lineJoin="round";for(let ut of c.roads)L.strokeStyle="rgba(120,80,40,.85)",L.lineWidth=S/520,L.setLineDash([S/260,S/400]),L.beginPath(),ut.pts.forEach((yt,_t)=>{let[E,U]=Z(yt.x,yt.z);_t?L.lineTo(E,U):L.moveTo(E,U)}),L.stroke();L.setLineDash([]);for(let ut of c.rivers)L.strokeStyle="#3F93C8",L.lineWidth=S/340,L.beginPath(),ut.pts.forEach((yt,_t)=>{let[E,U]=Z(yt.x,yt.z);_t?L.lineTo(E,U):L.moveTo(E,U)}),L.stroke();for(let ut of c.sites)if(["house","hut","reedhut","mudhif","teahouse","lighthouse"].includes(ut.kind)){let[yt,_t]=Z(ut.x,ut.z);L.fillStyle="#7A4A2A",L.fillRect(yt-1.5,_t-1.5,3,3)}return Ms=z,{canvas:z,x0:-f,x1:f,z0:-f,z1:f}}let $=0;function zt(S,V,g,w,F){w&&(Ln.visible=w.mode==="zip",Ln.visible&&(Ln.position.set(w.x,w.y,w.z),Ln.rotation.y=-w.face));for(let Z of xi){let ut=a.items[Z.idx],yt=!(ut&&ut.taken)&&(Z.it.x-g.x)**2+(Z.it.z-g.z)**2<1500*1500;if(Z.grp.visible=yt,!yt)continue;let _t=Math.hypot(Z.it.x-g.x,Z.it.z-g.z);Z.beam.visible=_t>6,Z.beam.scale.set(1+_t/220,1+_t/500,1+_t/220),Z.gl.material.opacity=.55+Math.sin(S*3+Z.it.x)*.2,Z.fe&&Z.it.task==="feather"&&(Z.fe.rotation.y=S*.8)}yi();for(let Z of Te)Z.rotation.z=Math.sin(S*1.4+Z.position.z)*.06;ft(g.x,g.z,g.y);let z=Ct(F*.45);j(g.x,g.z,F*.4),w&&u(w.x,w.z),Bn<hn&&!z&&Si(F*.15),$+=V;for(let Z of Q)Z.normalMap.offset.set($*.01,$*.006);oe.forEach((Z,ut)=>{let yt=.85+Math.sin(S*13+ut*1.7)*.1+Math.sin(S*23+ut)*.06;Z.children.slice(0,3).forEach((_t,E)=>{_t.scale.set(1,yt+E*.05,1),_t.rotation.y=S*(1+E)})});for(let Z of se)Z.grp.visible=Math.hypot(Z.x-g.x,Z.z-g.z)<(Z.st.kind==="lighthouse"?4e3:Z.st.kind==="house"||Z.st.kind==="mudhif"?1600:700);for(let Z of ke)Z.head.rotation.y=Math.sin(S*.6+Z.root.position.x)*.35;for(let Z of re)Z.m.material.map.offset.y=-S*.9;let L=26e3/1400*11;H.position.x=Math.round(g.x/L)*L,H.position.z=Math.round(g.z/L)*L}function Nt(S,V,g){for(let z=0;z<3;z++)ft(S,V,g),Ct(1e9);let w=Math.floor(S/t.VC),F=Math.floor(V/t.VC);for(let[z,L,Z]of gt){if(Z>260)break;let ut=(w+z)*100003+(F+L);we.has(ut)||(t.vegCell(w+z,F+L),we.add(ut))}j(S,V,1e9,0),ie(S,V),l=null,u(S,V)}return{update:zt,warm:Nt,colorIsland:_,mapShot:q,pending:()=>st.length+(Bn<hn?1:0),buildSome:Ct,selectTerrain:ft,tiles:N,refill:ie,nearChunks:mt,mid:kt,far:k,sea:H,mapRows:Si}}var du={th:[.36,.28,.15,.02,-.12,-.24,-.2,.02,.29,.4],kn:[.05,.24,.28,.14,.08,.14,.58,1.05,.68,.16],ft:[.22,0,0,0,-.06,-.28,-.62,-.22,.06,.2]},fu={th:[.42,.22,-.02,-.3,-.5,-.36,.06,.52,.8,.66],kn:[.32,.56,.48,.36,.5,1.42,1.95,1.7,.9,.42],ft:[.12,0,-.08,-.48,-.8,-.4,0,.2,.24,.18]};function Hr(i,t){let e=i.length,n=(t%1+1)%1*e,s=Math.floor(n),o=n-s,r=i[(s-1+e)%e],a=i[s%e],c=i[(s+1)%e],h=i[(s+2)%e];return .5*(2*a+(-r+c)*o+(2*r-5*a+4*c-h)*o*o+(-r+3*a-3*c+h)*o*o*o)}var ra=["bx","bz","by","px","py","pry","prz","sx","sy","sz","nx","ny","Lsx","Lsz","Lsy","Le","Rsx","Rsz","Rsy","Re","Lhx","Lhz","Lk","La","Rhx","Rhz","Rk","Ra"],by=new Set(["Lsx","Rsx"]),Ay=(i,t,e)=>Zi.thigh*Math.cos(i)+Zi.shin*Math.cos(t-i)+Zi.ankle+(e<0?.13*Math.sin(-e):0);function i0(){let i={},t={};for(let c of ra)i[c]=0,t[c]=0;i.py=t.py=Zi.hip;let e={lookT:2,lookYaw:0,lastFace:null,turn:0,inited:!1};function n(c,h,d,f,m=0){return t[c+"hx"]=h,t[c+"k"]=d,t[c+"a"]=-f+h-d,t[c+"hz"]=m,Ay(h,d,f)}function s(c,h,d,f,m=0){t[c+"sx"]=h,t[c+"sz"]=d,t[c+"e"]=f,t[c+"sy"]=m}function o(){for(let c of ra)t[c]=0;t.py=Zi.hip}function r(c,h,d,f,m){o();let x=c.mode==="walk"&&!c.air&&!c.swim?c.speed:0,y=e.lastFace==null?0:Pn(e.lastFace,c.face)/Math.max(f,.001);e.lastFace=c.face,e.turn=Xe(e.turn,Ee(y,-4,4),6,f);let b=0;if(c.mode==="faint"){let xt=Math.min(1,c.faintT*2.6);t.bx=-1.47*xt,t.by=-.86*xt,t.sx=.05,t.nx=.15*xt,n("L",.05,.15,.1,.16),n("R",0,.25,.1,.12),s("L",.2,1.15*xt+.1,.3),s("R",.1,.9*xt+.1,.5);return}if(c.mode==="drive"||c.mode==="getin"||c.mode==="getout"){let xt=ue(0,1,Ee(c.drive||0,0,1)),Mt=h.car,Ut=Mt?Ee(Mt.steer*4.2,-1.5,1.5):0,Qt=Math.sin(Ut),ne=Mt&&Mt.gear==="R"&&Mt.vf<-.4,_e=Mt?Mt.throttle:0,et=Mt?Mt.brake:0,Zt=n("L",ee(.02,1.47,xt),ee(.05,.27+et*.05,xt),ee(0,.9-et*.15,xt),ee(.03,.1,xt)),le=n("R",ee(-.02,1.4,xt),ee(.05,.34-_e*.06,xt),ee(0,.82-_e*.25,xt),ee(.03,.13,xt));t.py=ee(Math.max(Zt,le),.29,xt),t.sx=ee(0,-.2,xt),t.nx=ee(0,.17,xt),t.ny=xt*(ne?1.15:-Ut*.16),t.sy=xt*(ne?.25:0),s("L",ee(.03,.62+.3*Qt,xt),ee(.09,-.05+.08*Qt,xt),ee(.15,1.1-.22*Qt,xt)),s("R",ee(.03,ne?.4:.62-.3*Qt,xt),ee(.09,-.05-.08*Qt,xt),ee(.15,ne?.6:1.1+.22*Qt,xt)),Mt&&Mt.air&&xt>.9&&(t.nx-=.15,t.Lsx+=.1,t.Rsx+=.1);return}if(c.mode==="zip"&&h.zip){let xt=h.zip.v||0;t.bx=-.05-.12*ue(4,27,xt)+.05*Math.sin(d*2.3),t.bz=.03*Math.sin(d*1.7),s("L",2.92,.12,.18),s("R",2.92,.12,.18),t.py=Zi.hip-.02,n("L",.62+.08*Math.sin(d*2),.85,.2),n("R",.48+.08*Math.sin(d*2+1),.7,.2),t.sx=.06,t.nx=-.15;return}if(c.mode==="climb"&&h.climbing){let xt=h.climbing.t*3.4,Mt=Math.sin(xt),Ut=Math.sin(xt+1.6);t.bx=-.2,t.sx=.12,t.nx=-.35,t.py=Zi.hip-.12,s("L",2.45+.38*Mt,.22,.55-.42*Mt),s("R",2.45-.38*Mt,.22,.55+.42*Mt),n("L",.85+.38*Ut,1.25-.38*Ut,.45,.1),n("R",.85-.38*Ut,1.25+.38*Ut,.45,.1);return}if(c.mode==="fish"){let xt=h.fishing?ue(h.fishing.bite-.6,h.fishing.bite,h.fishing.t):0,Mt=Math.sin(d*1.6)*.012,Ut=n("L",.14,.12,0,.05),Qt=n("R",-.12,.08,0,.07);t.py=Math.max(Ut,Qt)-.005,t.pry=.1,t.sy=-.18,t.sx=.06-xt*.2+Mt,t.nx=.18,s("R",.5+xt*.5,-.12,1.25-xt*.4),s("L",.82+xt*.45,-.2,.78-xt*.3);return}if(c.mode==="glide"){s("L",2.6,.45,.4),s("R",2.6,.45,.4),n("L",.25,.4,.15),n("R",.15,.3,.15);return}if(c.mode==="lift"||c.mode==="carry"){s("L",2.2+Math.sin(d*12)*.5,1.2,.6),s("R",2+Math.sin(d*11+1)*.5,1.2,.6),n("L",.5+Math.sin(d*9)*.4,.8,.2),n("R",.3+Math.sin(d*9+2)*.4,.9,.2);return}if(c.swim){let xt=ue(.12,.6,c.speed),Mt=c.hopPh||0;t.bx=ee(.12,1.32,xt),t.by=ee(-.8,-.42,xt),t.nx=ee(.05,-.75,xt);for(let[Ut,Qt]of[["L",0],["R",Math.PI]]){let ne=Mt+Qt,_e=Math.sin(d*2.6+Qt);t[Ut+"sx"]=ee(.45+.25*_e,-(Math.PI+ne),xt),t[Ut+"sz"]=ee(1.15,.15,xt),t[Ut+"e"]=ee(.65,1.1*Math.max(0,Math.sin(ne)),xt);let et=Math.sin(Mt*2.4+Qt),Zt=ee(.5+.3*Math.sin(d*2.6+Qt),.22*et,xt),le=ee(.95+.4*Math.sin(d*2.6+Qt+1),.28+.22*Math.sin(Mt*2.4+Qt+1),xt);n(Ut,Zt,le,ee(-.2,-.6,xt),.06)}t.sy=.15*Math.sin(Mt)*xt,t.pry=-.1*Math.sin(Mt)*xt;return}if(c.air&&c.mode==="walk"){let xt=ue(.6,-1.6,c.vy),Mt=ue(-5.5,-8.5,c.vy);if(n("L",ee(.78,.38,xt),ee(1.15,.38,xt),.1),n("R",ee(.08,.14,xt),ee(.62,.28,xt),ee(-.4,.1,xt)),s("L",ee(1.25,.45,xt),ee(.2,.85,xt),ee(.6,.35,xt)),s("R",ee(.95,.35,xt),ee(.2,.85,xt),ee(.6,.35,xt)),t.sx=ee(.12,.04,xt),t.py=Zi.hip,Mt>0){for(let[Ut,Qt]of[["L",0],["R",2]])t[Ut+"sz"]=ee(t[Ut+"sz"],1.7+.45*Math.sin(d*13+Qt),Mt),t[Ut+"sx"]=ee(t[Ut+"sx"],.6*Math.sin(d*11+Qt),Mt);n("L",ee(t.Lhx,.45+.4*Math.sin(d*10),Mt),.6,0),n("R",ee(t.Rhx,.45+.4*Math.sin(d*10+3),Mt),.7,0)}return}let p=ue(.12,.55,x),_=ee(.5,1,ue(.45,1.35,x))*(1+.16*ue(4.7,6.3,x));b=ue(2,3.6,x);let A=ue(4.7,6.3,x),P=c.sneak?1:0,M=(c.hopPh||0)/Pe,N=Ee((c.landT||0)/.25,0,1),R=Ee((c.stun||0)/.9,0,1),v=xt=>({th:ee(Hr(du.th,xt),Hr(fu.th,xt),b)*_*p,kn:ee(Hr(du.kn,xt),Hr(fu.kn,xt),b)*ee(.8,1,_)*p,ft:ee(Hr(du.ft,xt),Hr(fu.ft,xt),b)*p}),C=v(M),G=v(M+.5),B=1-p,st=Math.sin(d*.45);C.th+=B*.035,G.th-=B*.03,C.kn+=B*(.05+.04*Math.max(0,-st)),G.kn+=B*(.07+.05*Math.max(0,st));for(let xt of[C,G])xt.th+=P*.34+N*.48,xt.kn+=P*.6+N*1,xt.ft*=1-N;let at=n("L",C.th,C.kn,C.ft,.025+B*.03),W=n("R",G.th,G.kn,G.ft,.025+B*.03),bt=b*.045*Math.pow(Math.max(0,Math.cos(Pe*2*(M-.43))),2);t.py=Math.max(at,W)+bt-.004,t.prz=ee(.045,.03,b)*Math.sin(Pe*M)*p+B*.02*st,t.px=.016*Math.sin(Pe*M)*p*(1-b)-B*.012*st,t.pry=-.13*(C.th-G.th)*p,t.sy=-1.7*t.pry;let ft=Math.sin(d*1.65)*.012*B;t.sx=.03*p+.13*b+.07*A+P*.32+N*.3+ft-R*.28,t.sz=-t.prz*.7,t.bz=Ee(-e.turn*x*.018,-.2,.2);let Ct=ee(.85,.62,b)+.18*A;for(let[xt,Mt]of[["L",G],["R",C]]){let Ut=Ct*Mt.th,Qt=Ut+b*.02+P*.25+N*.5+R*1.5+B*.03;s(xt,Qt,ee(.09,.13,b)+B*.02,ee(.2+.32*Math.max(0,Ut),1.5+.35*Ut,b)+P*.5+R*1.6+B*.08,0)}h.vq&&h.vq.caught&&!h.vq.delivered&&s("R",-.12+t.Rsx*.25,.14,.5),e.lookT-=f;let pt=0;m?pt=Ee(Pn(Math.PI/2-c.face,m),-1.25,1.25):B>.8&&(e.lookT<0&&(e.lookT=2.5+Math.random()*3.5,e.lookYaw=Math.random()<.45?0:(Math.random()-.5)*1.6),pt=e.lookYaw),t.ny=-(t.pry+t.sy)+pt*.75,t.sy+=pt*.25,t.nx=-t.sx*.65+R*-.2}function a(c,h,d){let f=d?22:12;for(let m of ra)Number.isFinite(t[m])||(t[m]=m==="py"?Zi.hip:0);for(let m of ra)i[m]=by.has(m)?bn(i[m],t[m],f,h):Xe(i[m],t[m],m==="py"||m==="by"?18:f,h);c.body.rotation.set(i.bx,0,i.bz),c.pelvis.position.set(i.px,i.py,0),c.pelvis.rotation.set(0,i.pry,i.prz),c.spine.rotation.set(i.sx,i.sy,i.sz),c.neck.rotation.set(i.nx*.4,i.ny*.4,0),c.head.rotation.set(i.nx*.6,i.ny*.6,0);for(let m of c.arms){let x=m.s>0?"L":"R";m.sh.rotation.set(-i[x+"sx"],m.s*i[x+"sy"],m.s*i[x+"sz"]),m.el.rotation.x=-i[x+"e"]}for(let m of c.legs){let x=m.s>0?"L":"R";m.hp.rotation.set(-i[x+"hx"],0,m.s*i[x+"hz"]),m.kn.rotation.x=i[x+"k"],m.an.rotation.x=i[x+"a"]}}return{update(c,h,d,f,m,x){if(!e.inited){e.inited=!0,r(h,d,f,m,x);for(let y of ra)i[y]=t[y]}return r(h,d,f,m,x),a(c,m,h.mode==="walk"&&!h.swim),i},reset(){e.inited=!1,e.lastFace=null},pose:i}}var ir="#F26B1D",Cc="#D9551A",rs="#1E2126",Ey="#24272C",Rc="#2B2E33",s0="#8A9099",Ty="#C9CDD2",mn=(i,t,e,n,s=0,o=0,r=0,a=0,c=0,h=0)=>Vt(Ft(new Fe(i,t,e),n),s,o,r,a,c,h),r0=(i,t,e,n,s,o,r=12)=>Vt(Ft(new ye(i,i,t,r),e),n,s,o,0,0,Math.PI/2),vs=(i,t=.028,e=Ey)=>Ft(new gi(new Gn(i.map(n=>new J(...n)),!1,"catmullrom",.05),Math.max(4,i.length*6),t,7,!1),e);function pu(i,t,e,n=0){let s=new Mi;i.forEach(([r,a],c)=>c?s.lineTo(r,a):s.moveTo(r,a)),s.closePath();let o=new Zs(s,{depth:t,bevelEnabled:!0,bevelThickness:.025,bevelSize:.025,bevelSegments:2,curveSegments:4});return o.translate(0,0,-t/2+n),Ft(o,e)}function o0(){let i=Vr.R,t=.26,e=.18,n=[[e,-t/2],[.29,-t/2-.006],[.335,-t/2+.01],[i,-t/2+.05],[i,t/2-.05],[.335,t/2-.01],[.29,t/2+.006],[e,t/2]].map(([a,c])=>new Ot(a,c)),o=[Ft(new Kn(n,30),(a,c,h,d)=>Be(a,"#141517","#26282C",Math.abs(h)/(t/2)*.7))];for(let a=0;a<24;a++)for(let c of[-1,1]){let h=a/24*Pe+(c>0?Pe/48:0);o.push(Vt(Ft(new Fe(.075,.022,.1),"#18191C"),Math.cos(h)*(i+.008),c*.065,Math.sin(h)*(i+.008),0,-h,0))}o.push(Vt(Ft(new Wn(.168,.016,6,24),"#3A3D44"),0,t/2-.01,0,Math.PI/2,0,0),Vt(Ft(new Wn(.168,.016,6,24),"#3A3D44"),0,-t/2+.01,0,Math.PI/2,0,0)),o.push(Ft(new ye(.165,.165,t-.05,20,1,!0),"#2A2D33")),o.push(Vt(Ft(new ye(.05,.06,.06,10),"#9AA0A8"),0,t/2-.02,0));for(let a=0;a<6;a++){let c=a/6*Pe;o.push(Vt(Ft(new Fe(.11,.025,.035),"#33363D"),Math.cos(c)*.105,t/2-.03,Math.sin(c)*.105,0,-c,0))}for(let a=0;a<12;a++){let c=a/12*Pe;o.push(Vt(Ft(new ye(.009,.009,.02,5),"#C8CCD2"),Math.cos(c)*.168,t/2+.006,Math.sin(c)*.168))}let r=en(o);return r.rotateX(Math.PI/2),r}function a0(){let i=Vr,t=i.WB/2,e=i.track/2,n=-.169,s=new Re,o=new Re;s.add(o),o.rotation.order="YZX";let r=new Fn({vertexColors:!0,shininess:40,specular:"#3A3A3A"}),a=[];a.push(mn(2.55,.06,.86,"#2B2E33",0,-.14,0),mn(1.55,.1,1.22,"#33363D",-.18,-.07,0),mn(1.1,.28,.22,rs,-.06,.1,0));for(let et of[-1,1])a.push(mn(1.15,.08,.12,rs,-.12,-.02,et*.63));a.push(pu([[.42,.02],[1.5,.04],[1.66,.2],[1.62,.4],[1.12,.54],[.56,.62],[.4,.5]],1.12,(et,Zt,le)=>Be(et,Cc,ir,le*1.6))),a.push(pu([[1.5,.02],[1.7,.12],[1.66,.22]],1,rs)),a.push(pu([[-.6,0],[-1.6,.03],[-1.72,.28],[-1.62,.7],[-.95,.8],[-.62,.76]],1.16,(et,Zt,le)=>Be(et,Cc,ir,le*1.4))),a.push(mn(.5,.04,1,"#2A2D33",-1.25,.82,0));for(let et=0;et<5;et++)a.push(mn(.03,.02,.9,"#1A1C20",-1.45+et*.1,.845,0));for(let et of[1,-1])for(let Zt of[-1,1])a.push(Vt(Ft(new ye(.52,.52,.34,18,1,!0,Math.PI*.69,Math.PI*.62),et>0?ir:Cc),et*t,n+.08,Zt*(e+.02),Math.PI/2,et>0?0:Math.PI,0));for(let et=0;et<4;et++)a.push(mn(.4,.015,.06,"#15171A",-1.1,.79,-.42+et*.09));a.push(r0(.05,.28,"#7A7F86",-1.78,.22,.32),r0(.06,.04,"#2A2A2A",-1.93,.22,.32)),a.push(mn(.32,.26,1.16,rs,.44,.47,0),mn(.06,.1,.34,"#101214",.29,.6,-.36));for(let et of[-1,1]){let Zt=et*.36;a.push(mn(.5,.12,.46,Rc,-.3,.1,Zt),mn(.44,.04,.2,s0,-.28,.17,Zt)),a.push(mn(.13,.7,.48,Rc,-.6,.47,Zt,0,0,.22),mn(.04,.5,.18,s0,-.53,.5,Zt,0,0,.22));for(let le of[-1,1])a.push(mn(.16,.6,.06,Rc,-.57,.42,Zt+le*.22,0,0,.22));a.push(mn(.12,.2,.3,Rc,-.74,.92,Zt,0,0,.22)),a.push(mn(.02,.6,.05,ir,-.52,.5,Zt-.1,0,0,.22),mn(.02,.6,.05,ir,-.52,.5,Zt+.1,0,0,.22))}a.push(Vt(Ft(new Wn(.09,.015,6,14,Math.PI),rs),.36,.66,.36,0,Math.PI/2,0));let c=[];for(let et of[-1,1])c.push(vs([[-.62,0,et*.62],[-.64,.6,et*.62],[-.67,1.08,et*.58],[-.62,1.15,et*.5]])),c.push(vs([[.58,.55,et*.6],[.36,.86,et*.58],[.14,1.12,et*.55]])),c.push(vs([[.14,1.12,et*.55],[-.24,1.16,et*.56],[-.62,1.15,et*.5]])),c.push(vs([[-.66,1,et*.52],[-1.05,.88,et*.5],[-1.45,.78,et*.48]])),c.push(vs([[.5,.5,et*.64],[-.1,.62,et*.66],[-.62,.6,et*.63]],.022));c.push(vs([[.14,1.12,-.55],[.14,1.13,.55]]),vs([[-.62,1.15,-.5],[-.62,1.15,.5]]),vs([[-.64,.74,-.6],[-.64,.74,.6]],.024)),c.push(vs([[1.74,.02,-.52],[1.8,.05,-.2],[1.8,.05,.2],[1.74,.02,.52]],.03,rs)),a.push(...c),a.push(mn(.82,.03,1.16,Ty,-.25,1.165,0),mn(.07,.08,.92,rs,.12,1.22,0));for(let et of[-1,1])a.push(mn(.04,.07,.12,rs,.3,.92,et*.66));let h=o0();h.rotateX(Math.PI/2),h.translate(-1.25,.98,0),a.push(h),a.push(mn(.04,.02,.76,"#3A3D44",-1.25,1.12,0));let d=new Gt(en(a),r);d.castShadow=!0,d.receiveShadow=!0,o.add(d);let f=new _n({color:"#F4FAFF"}),m=new Fn({color:"#7A0A0A",emissive:"#FF1A1A",emissiveIntensity:.35}),x=new _n({color:"#E8F2FF"}),y=new Gt(en([mn(.05,.045,.3,"#FFFFFF",1.645,.36,-.36,0,.18,0),mn(.05,.045,.3,"#FFFFFF",1.645,.36,.36,0,-.18,0),mn(.04,.03,.12,"#FFFFFF",1.6,.44,-.42),mn(.04,.03,.12,"#FFFFFF",1.6,.44,.42)]),f);o.add(y);let b=new Gt(en([mn(.04,.07,.2,"#FFFFFF",-1.7,.52,-.44),mn(.04,.07,.2,"#FFFFFF",-1.7,.52,.44)]),m);o.add(b);let p=new Gt(en([...Array(6)].map((et,Zt)=>mn(.02,.04,.1,"#FFFFFF",.158,1.22,-.33+Zt*.132))),x);o.add(p);let _=new _n({map:li(128,64,et=>{et.fillStyle="#0A1220",et.fillRect(0,0,128,64),et.fillStyle="#5EE7FF",et.font="900 28px sans-serif",et.textAlign="center",et.fillText("N",64,42)})}),A=new Gt(new pn(.16,.08),_);A.position.set(.32,.66,-.36),A.rotation.set(0,-Math.PI/2,0),A.rotateX(-.5),o.add(A);let P=new Re;P.position.set(.08,.66,-.36),P.rotation.z=-.62,o.add(P),P.add(new Gt(Vt(Ft(new ye(.018,.022,.5,8),"#2A2D33"),.25,0,0,0,0,Math.PI/2),r));let M=new Re;P.add(M),M.add(new Gt(en([Vt(Ft(new Wn(.175,.022,8,28),"#15171A"),0,0,0,0,Math.PI/2,0),...[0,1,2].map(et=>{let Zt=Math.PI/2+et*Pe/3;return Vt(Ft(new Fe(.03,.16,.03),"#2A2D33"),0,Math.sin(Zt)*.085,Math.cos(Zt)*.085,-Zt+Math.PI/2,0,0)}),Vt(Ft(new ye(.05,.05,.04,12),ir),0,0,0,0,0,Math.PI/2)]),r));let N=[];for(let et of[-1,1]){let Zt=new Re;Zt.position.set(.42,0,et*.645),o.add(Zt);let le=en([mn(.9,.46,.05,(fe,De,kt)=>Be(fe,Cc,ir,(kt-.1)*2.5),-.46,.33,0),mn(.9,.05,.06,rs,-.46,.1,0),mn(.7,.07,.055,rs,-.5,.42,0)]),xe=new Gt(le,r);xe.castShadow=!0,Zt.add(xe);let te=new Gt(new pn(.42,.13),new _n({map:li(256,80,fe=>{fe.clearRect(0,0,256,80),fe.fillStyle="#FFFFFF",fe.font="900 54px -apple-system,system-ui,sans-serif",fe.textAlign="center",fe.textBaseline="middle",fe.direction="rtl",fe.fillText("\u0646\u0637\u0651\u0629 \u{1F3DD}\uFE0F",128,44)}),transparent:!0}));te.position.set(-.46,.28,et*.03),te.rotation.y=et>0?0:Math.PI,Zt.add(te),N.push(Zt)}let R=new Re;R.position.set(-1.45,.78,.46),o.add(R),R.add(new Gt(Vt(Ft(new ye(.008,.012,2,6),"#1A1A1A"),0,1,0),r));let v=new pn(.42,.26,6,1);v.translate(-.21,0,0);let C=new Gt(v,new Le({color:"#FF5A1F",side:We,emissive:"#5A1A00",emissiveIntensity:.3}));C.position.y=1.86,R.add(C);let G=new Fn({color:"#2E3238",shininess:50}),B=new Fn({color:"#B9BEC6",shininess:90,specular:"#FFFFFF"}),st=new Fn({color:"#FF6A1A",shininess:60}),at=new Cy,W=o0(),bt=new Fn({vertexColors:!0,shininess:18}),ft=(()=>{let et=[];for(let Zt=0;Zt<=64;Zt++){let le=Zt/64,xe=le*Pe*7;et.push(new J(Math.cos(xe)*.045,le-.5,Math.sin(xe)*.045))}return new gi(new Gn(et),96,.008,5,!1)})(),Ct=[[t,-e],[t,e],[-t,-e],[-t,e]].map(([et,Zt],le)=>{let xe=le<2,te=Zt>0?1:-1,fe=new Re;fe.position.set(et,n,Zt+te*0),o.add(fe);let De=new Re;fe.add(De);let kt=new Re;De.add(kt);let k=new Gt(W,bt);k.castShadow=!0,kt.add(k),te<0&&(k.rotation.y=Math.PI);let vt=xe?[new Gt(at.g(.022),G),new Gt(at.g(.022),G)]:[new Gt(at.g(.035),G)],K=new Gt(at.g(.028),B),ht=new Gt(ft,st);for(let rt of[...vt,K,ht])rt.castShadow=!0,o.add(rt);let X=xe?[[et,.1,te*.27],[et,-.13,te*.27]]:[[-.35,-.05,te*.42]],mt=xe?[et-.08,.5,te*.36]:[-.92,.58,te*.42];return{i:le,front:xe,sz:te,ox:et,oz:Zt,hub:fe,steer:De,spin:kt,arms:vt,shock:K,spring:ht,inner:X,top:mt}}),pt=new J,xt=new J,Mt=new J,Ut=new Qn,Qt=new J(0,1,0);function ne(et,Zt,le,xe=1){Mt.subVectors(le,Zt);let te=Mt.length();et.position.addVectors(Zt,le).multiplyScalar(.5),et.quaternion.setFromUnitVectors(Qt,Mt.multiplyScalar(1/te)),et.scale.set(xe,te,xe)}function _e(et,Zt,le){s.position.set(et.x,et.y,et.z),s.rotation.y=-et.yaw,o.rotation.set(-et.roll,0,et.pitch);for(let kt of Ct){let k=et.wheels[kt.i],vt=-k.d;kt.hub.position.y=vt,kt.steer.rotation.y=kt.front?-et.steer:0,kt.spin.rotation.z=-k.spin;let K=kt.sz*(e+0);kt.front?(ne(kt.arms[0],pt.set(...kt.inner[0]),xt.set(kt.ox,vt+.1,K-kt.sz*.1)),ne(kt.arms[1],pt.set(...kt.inner[1]),xt.set(kt.ox,vt-.11,K-kt.sz*.1)),pt.set(...kt.top),xt.set(kt.ox-.02,vt-.06,K-kt.sz*.2)):(ne(kt.arms[0],pt.set(...kt.inner[0]),xt.set(kt.ox,vt,K-kt.sz*.12)),pt.set(...kt.top),xt.set(kt.ox+.18,vt+.04,K-kt.sz*.2)),ne(kt.shock,pt,xt),ne(kt.spring,pt.clone().lerp(xt,.12),pt.clone().lerp(xt,.62),1)}M.rotation.x=et.steer*4.2;let xe=et.brake>.1||et.hand&&et.driven,te=et.gear==="R";m.emissiveIntensity=xe?1.6:te?1:et.engine?.45:.12,f.color.set(et.engine?"#F4FAFF":"#9AA0A8"),x.color.set(et.engine?"#E8F2FF":"#8A9099");let fe=Math.min(1,Math.hypot(et.vx,et.vz)/20),De=v.attributes.position;for(let kt=0;kt<De.count;kt++){let k=De.getX(kt);De.setZ(kt,Math.sin(Zt*(5+fe*9)+k*14)*.05*(-k/.42)*(.4+fe))}De.needsUpdate=!0,C.rotation.y=Math.sin(Zt*1.3)*.3*(1-fe),N[0].rotation.y=-et.door*1.15}return{root:s,body:o,wheels:Ct,doors:N,update:_e,seat:i.seat}}function Cy(){let i={};this.g=t=>i[t]||(i[t]=new ye(t,t,1,8))}var Gr=Math.PI/180;function l0(i,t,e){let n=i.renderer,s=t.M,o=t.V,r=e.S,a=new fo,c=new Ve("#CFDFE8");a.background=c,a.fog=new uo(c,320,3600);let h=new oi(62,.5,.25,7e3),d={time:{value:0},wind:{value:0},see:{value:new Sn(0,0,0,0)}},f=xn(4242),m=new Do("#D2E6FF","#6A8A4E",1);a.add(m);let x=new J(.5,.72,.45).normalize(),y=new Bo("#FFE9C4",2.9);y.castShadow=!0,y.shadow.mapSize.set(2048,2048),Object.assign(y.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:1,far:180}),y.shadow.bias=-5e-4,y.shadow.normalBias=.03,y.shadow.radius=2.5,a.add(y,y.target);let b=Hf("#3A7FD6","#9CCBF2","#EFE7D6",new J(.6,.35,-.7));a.add(b);let p=Xf(),_=qf(),A=new Le({vertexColors:!0}),P=new Le({vertexColors:!0,flatShading:!0}),M=new Le({vertexColors:!0,flatShading:!0}),N=[],R=(E,U)=>E*100003+U,v=t.HALF,C=64,G=Math.ceil(v*2/C),B=-G*C/2;function st(E,U,O,D,nt){let Et=s.rad(E,O),At=o.Hv(E,O);if(At<=U+.02&&At<1e8){let Rt=E-o.x,Wt=O-o.z,Pt=Math.abs(Wt),Dt=yn(Rt*.07+11,Wt*.07),$t=Cn(Rt*.5,Wt*.5);Be(nt,"#5FAE3E","#9AD85E",Dt*1.3-.15+$t*.2);let pe=Math.abs(Wt-o.riverZ(Rt));pe<2.4&&Pt<o.FLOOR+1&&Rt>-4&&nt.lerp(Fi.set(pe<1?"#8F8A62":"#D9C891"),ue(2.4,1.3,pe));let ae=ue(1.2,5,U-o.VF)*ue(o.FLOOR-.5,o.FLOOR+4,Pt)+ue(.55,.9,D)*.8;if(ae>0){let be=.5+.5*Math.sin(U*1.9+yn(E*.05,O*.05)*4);Be(Qo,"#B98F62","#DDBE8E",be),Qo.lerp(Fi.set("#8E6A48"),Cn(E*.35,U*.6)*.35),nt.lerp(Qo,Ee(ae,0,1))}return Rt<0&&Pt<9&&nt.lerp(Fi.set("#A88C62"),ue(-2,-12,Rt)*ue(9,5,Pt)*.6),nt}if(Et<205){Be(nt,"#3E6E2E","#6E9A44",yn(E*.06+3,O*.06)*1.2-.1),D>.8&&(Be(Fi,"#5E5A55","#A9A398",Cn(E*.35+O*.2,U*1.6)*.8+Cn(E*2,O*2+U)*.35),nt.lerp(Fi,ue(.8,1.3,D)));let Rt=s.nearest(E,O,U,1);return Rt&&Rt.d<Rt.p.hw+.9&&Rt.p.kind!=="bridge"&&nt.lerp(Fi.set("#9C7E55"),ue(Rt.p.hw+.9,Rt.p.hw-.2,Rt.d)*.85),Et<s.RP+1&&nt.set("#9A9388"),Et>190&&nt.lerp(Fi.set("#5E8F3E"),ue(190,205,Et)),nt}return null}let at=null;function W(){return!at||!at.pending()}{let E=li(64,256,(Xt,Rt,Wt)=>{Xt.clearRect(0,0,Rt,Wt);for(let Pt=0;Pt<Wt;Pt+=2){let Dt=6+Cn(Pt*.06,1)*8,$t=Rt-6-Cn(Pt*.06,5)*8,pe=Xt.createLinearGradient(Dt,0,$t,0);pe.addColorStop(0,"rgba(150,118,78,0)"),pe.addColorStop(.2,"rgba(150,118,78,.95)"),pe.addColorStop(.8,"rgba(140,108,70,.95)"),pe.addColorStop(1,"rgba(140,108,70,0)"),Xt.fillStyle=pe,Xt.fillRect(Dt,Pt,$t-Dt,2)}for(let Pt=0;Pt<260;Pt++)Xt.fillStyle=`rgba(${90+Pt%5*20},${80+Pt%7*12},${60+Pt%3*10},.6)`,Xt.beginPath(),Xt.arc(8+Math.random()*(Rt-16),Math.random()*Wt,.5+Math.random()*1.4,0,Pe),Xt.fill()},[1,1]),U=[],O=[],D=[],nt=0,Et=Xt=>{if(Xt.length<2)return;let Rt=0;Xt.forEach((Wt,Pt)=>{let Dt=Xt[Math.max(0,Pt-1)],$t=Xt[Math.min(Xt.length-1,Pt+1)],pe=$t.x-Dt.x,ae=$t.z-Dt.z,be=Math.hypot(pe,ae)||1,ve=-ae/be,ze=pe/be,Ae=Wt.hw+.35;if(Pt&&(Rt+=Math.hypot(Wt.x-Xt[Pt-1].x,Wt.z-Xt[Pt-1].z)/6),U.push(Wt.x+ve*Ae,Wt.y+.06,Wt.z+ze*Ae,Wt.x-ve*Ae,Wt.y+.06,Wt.z-ze*Ae),O.push(0,Rt,1,Rt),Pt){let Se=nt+(Pt-1)*2;D.push(Se,Se+2,Se+1,Se+1,Se+2,Se+3)}}),nt+=Xt.length*2};for(let Xt of s.segs){let Rt=[];for(let Wt of Xt.pts)Wt.kind==="bridge"||Wt.kind==="stones"||Wt.kind==="stairs"?(Et(Rt),Rt=[]):Rt.push(Wt);Et(Rt)}let At=new tn;At.setAttribute("position",new Ke(new Float32Array(U),3)),At.setAttribute("uv",new Ke(new Float32Array(O),2)),At.setIndex(D),At.computeVertexNormals();let Bt=new Gt(At,new Le({map:E,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,side:We}));Bt.receiveShadow=!0,a.add(Bt)}{let E=s.stream,U=[],O=[],D=[],nt=0;for(let Bt=E.r0;Bt<=E.r1;Bt+=1){let Xt=s.x+Math.cos(E.a)*Bt,Rt=s.z+Math.sin(E.a)*Bt,Wt=-Math.sin(E.a),Pt=Math.cos(E.a),Dt=s.Hnat(Xt,Rt)+.5;if(U.push(Xt+Wt*2.2,Dt,Rt+Pt*2.2,Xt-Wt*2.2,Dt,Rt-Pt*2.2),O.push(0,Bt/4,1,Bt/4),nt){let $t=(nt-1)*2;D.push($t,$t+2,$t+1,$t+1,$t+2,$t+3)}nt++}let Et=new tn;Et.setAttribute("position",new Ke(new Float32Array(U),3)),Et.setAttribute("uv",new Ke(new Float32Array(O),2)),Et.setIndex(D),Et.computeVertexNormals();let At=new Gt(Et,new Fn({color:"#4AA6D8",specular:"#FFFFFF",shininess:140,normalMap:_,transparent:!0,opacity:.9,side:We}));At.material.normalScale.set(.8,.8),a.add(At)}{let E=[],U=[],O=[],D=0;for(let At=-6;At<=o.VL+6;At+=.5){let Bt=o.riverZ(At),Xt=(o.riverZ(At+.1)-Bt)/.1,Rt=Math.hypot(1,Xt),Wt=-Xt/Rt,Pt=1/Rt,Dt=o.waterLevel(At);for(let $t of[-1.35,1.35])E.push(o.x+At+Wt*$t,Dt,o.z+Bt+Pt*$t),U.push(At/3,$t>0?1:0);if(D){let $t=(D-1)*2;O.push($t,$t+1,$t+2,$t+1,$t+3,$t+2)}D++}let nt=new tn;nt.setAttribute("position",new Ke(new Float32Array(E),3)),nt.setAttribute("uv",new Ke(new Float32Array(U),2)),nt.setIndex(O),nt.computeVertexNormals();let Et=new Gt(nt,new Fn({color:"#3D9FD8",specular:"#FFFFFF",shininess:140,normalMap:_,transparent:!0,opacity:.88}));Et.material.normalScale.set(.7,.7),Et.receiveShadow=!0,a.add(Et)}let bt=(E,U,O,D,nt)=>{let Et=[Ft(Vt(new ye(.13,.22,O*.45,6),0,O*.22,0),"#5A3E26")];for(let At=0;At<U;At++){let Bt=At/U,Xt=D*(1-Bt*.62),Rt=O*.42;Et.push(Vt(Ft(new Rn(Xt,Rt,8,1),(Wt,Pt,Dt)=>Be(Wt,nt?"#1F4A2B":"#24572F",nt?"#3F7A43":"#4E8C46",.25+(Dt/Rt+.5)*.6+(je(Pt*7,Dt*3)-.5)*.25)),0,O*.32+At*O*.22+Rt/2,0,0,E()*3,0))}return en(Et)},ft=()=>{let E=xn(43),U=[Ft(Vt(new ye(.14,.22,2.6,6),0,1.3,0),"#5A3E26")];for(let[O,D,nt,Et]of[[0,3.1,0,1.35],[.7,2.6,.3,.95],[-.6,2.7,-.4,1],[.1,3.8,-.2,.9]])U.push(Vt(Ft(new En(Et,0),(At,Bt,Xt)=>Be(At,"#2C6B33","#6FAE4E",.3+Xt/Et*.35+(E()-.5)*.3)),O,D,nt));return en(U)},Ct=(E,U,O)=>Ft(Vt(new Rn(U*.9,E*.95,6,1,!0),0,E*.62,0),(D,nt,Et)=>Be(D,O?"#1F4A2B":"#24572F",O?"#3F7A43":"#4E8C46",.3+(Et/E+.5)*.5)),pt={pine:ci(new Le({vertexColors:!0,flatShading:!0}),.006,2,d),tree:ci(new Le({vertexColors:!0,flatShading:!0}),.01,1.2,d),palm:ci(new Le({vertexColors:!0,side:We}),.012,2.8,d),grass:ci(new Le({vertexColors:!0,side:We}),.5,0,d)},xt={pineA:bt(xn(5),4,7.5,2,!1),pineB:bt(xn(6),3,6,2.5,!0),oak:ft()};function Mt(E,U,O,D={}){let nt=new Map,Et=new Mn,At=D.size||26;for(let Bt of O){let Xt=R(Math.floor(Bt.x/At),Math.floor(Bt.z/At));nt.has(Xt)||nt.set(Xt,[]),nt.get(Xt).push(Bt)}for(let Bt of nt.values()){let Xt=new Ti(E,U,Bt.length),Rt=0,Wt=0;Bt.forEach((Dt,$t)=>{Et.position.set(Dt.x,Dt.y,Dt.z),Et.rotation.set(Dt.rx||0,Dt.ry||0,Dt.rz||0),Dt.s3?Et.scale.set(...Dt.s3):Et.scale.setScalar(Dt.s||1),Et.updateMatrix(),Xt.setMatrixAt($t,Et.matrix),Dt.color&&Xt.setColorAt($t,Tn.set(Dt.color)),Rt+=Dt.x,Wt+=Dt.z}),Xt.castShadow=!!D.cast,Xt.receiveShadow=!0,Xt.computeBoundingSphere(),a.add(Xt);let Pt=null;D.lod&&(Pt=new Ti(D.lod,M,Bt.length),Pt.instanceMatrix=Xt.instanceMatrix,Pt.computeBoundingSphere(),Pt.visible=!1,a.add(Pt)),N.push({m:Xt,lo:Pt,x:Rt/Bt.length,z:Wt/Bt.length,far:D.far||105,lodAt:D.lodAt||62,small:!!D.small})}}let Ut=t.veg;Mt(xt.pineA,pt.pine,Ut.pineA,{cast:!0,lod:Ct(7.5,2,!1)}),Mt(xt.pineB,pt.pine,Ut.pineB,{cast:!0,lod:Ct(6,2.5,!0)}),Mt(xt.oak,pt.tree,Ut.oak,{cast:!0,lod:Vt(Ft(new En(1.5,0),"#3E7D3A"),0,3.1,0)});let Qt=en([Vt(Ft(new En(.85,0),(E,U,O,D)=>Be(E,"#1E4A24","#4C8A3E",.35+O*.4+je(U*9,D*9)*.3)),0,.55,0,0,0,0,1,.95,1),Vt(Ft(new En(.6,0),(E,U,O)=>Be(E,"#2A5C2C","#5E9E48",.5+O*.5)),.25,1.25,.1)]),ne=Mc(P,d);Mt(Qt,ne,Ut.hedge,{size:26,far:70,cast:!1}),Mt(ta(),ne,Ut.bush,{size:30,far:70,small:!0}),Mt(ea(),P,Ut.rock,{size:30,far:120});let _e=[kr(xn(3),1.1,9),kr(xn(8),-.8,10),kr(xn(15),.5,8)],et=en([Ft(Vt(new ye(.25,.4,8,5),0,4,0),"#8B6A3E"),Ft(Vt(new En(1.6,0),0,8.4,0,0,0,0,1,.55,1),"#3A7F34")]);_e.forEach((E,U)=>Mt(E,pt.palm,Ut.palm[U].map(O=>({...O,s:O.s*2.2})),{cast:!0,lod:et,lodAt:70,far:260})),[wc(xn(21),"#E8443A",["#2F8A3C","#7CCB55"]),wc(xn(33),null,["#3B9447","#8AD460"]),wc(xn(41),"#FFB52E",["#2C7F3A","#6FC24F"])].forEach((E,U)=>Mt(E,pt.tree,Ut.fruit[U].map(O=>({...O,s:O.s*1.5})),{cast:!0,far:220})),Mt(ta(),P,Ut.vbush,{size:30,far:90,small:!0}),Mt(ea(),P,Ut.vrock,{size:30,far:70,small:!0}),Mt(Ft(new vi(.5,1),(E,U,O,D)=>Be(E,"#9C7A56","#D2B387",.45+O*.9+(je(U*5,D*5)-.5)*.4)),P,Ut.boulder,{size:40,far:260}),Mt(en([Vt(Ft(new ye(.15,.22,1.6,5),"#6B4A2A"),0,.8,0),Vt(Ft(new En(1.2,0),(E,U,O)=>Be(E,"#4F7F3A","#8DB45E",O/1.2*.5+.5)),0,2.3,0,0,0,0,1,.85,1)]),P,Ut.rim,{size:40,far:300});{let E=xn(5151),U=(Dt,$t)=>[o.x+Dt,o.z+$t],O=(Dt,$t,pe)=>o.CAMPS.some(ae=>Math.hypot(Dt-ae.x,$t-ae.z)<pe),D=[],nt=[],Et=[];for(let Dt=0;D.length<6e3&&Dt<3e4;Dt++){let $t=-3+E()*(o.VL+6),pe=(E()<.5?-1:1)*E()*(o.FLOOR+3);if(Math.abs(pe-o.riverZ($t))<1.15||O($t,pe,3.9))continue;let[ae,be]=U($t,pe);t.slope(ae,be)>.6||D.push({x:ae,y:t.H(ae,be)-.02,z:be,ry:E()*Pe,s:.5+E()*.7})}let At=["#FF6B9A","#FFFFFF","#FFD23F","#B28DFF","#FF8C42","#FF4D6D","#7FD1FF"];for(let Dt=0;Dt<9e3&&nt.length<2400;Dt++){let $t=-2+E()*(o.VL+4),pe=(E()<.5?-1:1)*E()*(o.FLOOR-.3);if(Math.abs(pe-o.riverZ($t))<1.3||O($t,pe,3.9)||Cn($t*.16,pe*.16)<.42)continue;let[ae,be]=U($t,pe);nt.push({x:ae,y:t.H(ae,be),z:be,ry:E()*Pe*.25,s:1.2+E()*.8,color:At[Math.floor(Cn($t*.3+40,pe*.3)*At.length*.999+E()*1.5)%At.length]})}for(let Dt=-4;Dt<o.VL+4;Dt+=.55)for(let $t of[-1,1]){if(E()<.35)continue;let pe=o.riverZ(Dt)+$t*(1.05+E()*.55);if(O(Dt,pe,5))continue;let[ae,be]=U(Dt,pe);Et.push({x:ae,y:t.H(ae,be)-.05,z:be,ry:E()*Pe,s:.7+E()*.6})}Mt(na(),pt.grass,D,{size:24,far:55,small:!0});let Bt=en([Vt(Ft(new ye(.007,.01,.24,3,1,!0),"#3E8E36"),0,.12,0),Vt(Ft(new $n(.02,6),"#FFD54A"),0,.248,.004,-1,0,0)]),Xt=en([0,1,2,3,4].map(Dt=>{let $t=Dt/5*Pe;return Vt(Ft(new $n(.036,5),"#FFFFFF"),Math.cos($t)*.035,Math.sin($t)*.035,0,0,0,$t)}));Vt(Xt,0,.245,0,-1,0,0),Mt(Bt,ci(A,.8,0,d),nt.map(Dt=>({...Dt,color:null})),{size:24,far:45,small:!0}),Mt(Xt,ci(new Le({vertexColors:!0,side:We}),.8,0,d),nt,{size:24,far:45,small:!0}),Mt(Sc(),ci(A,.09,.2,d),Et,{size:24,far:70,small:!0});let Rt=[],Wt=[];for(let Dt of s.ALL){if(Dt.kind==="bridge"||Dt.kind==="stones"||Dt.k%2)continue;let $t=Dt.seg.pts,pe=-($t[Math.min(Dt.k+1,$t.length-1)].z-$t[Math.max(Dt.k-1,0)].z),ae=$t[Math.min(Dt.k+1,$t.length-1)].x-$t[Math.max(Dt.k-1,0)].x,be=Math.hypot(pe,ae)||1;for(let ve of[-1,1]){let ze=Dt.hw+.15+f()*1.4,Ae=Dt.x+pe/be*ze*ve,Se=Dt.z+ae/be*ze*ve,me=t.H(Ae,Se),ge=f();ge<.55?Rt.push({x:Ae,y:me-.02,z:Se,ry:f()*Pe,s:.6+f()*.7}):ge<.8&&Wt.push({x:Ae,y:me,z:Se,ry:f()*Pe,s:.7+f()*.6})}}Mt(na(),pt.grass,Rt,{size:30,far:45,small:!0});let Pt=en([...Array(7)].map((Dt,$t)=>{let pe=$t/7*Pe,ae=.55+$t%3*.12,be=[],ve=[];for(let Ae=0;Ae<6;Ae++){let Se=Ae/6,me=(Ae+1)/6,ge=Math.sin(Se*Math.PI)*.09,Qe=Math.sin(me*Math.PI)*.09,Ze=[Math.cos(pe)*ae*Se,Math.sin(Se*Math.PI*.8)*.3,Math.sin(pe)*ae*Se],ln=[Math.cos(pe)*ae*me,Math.sin(me*Math.PI*.8)*.3,Math.sin(pe)*ae*me],vn=-Math.sin(pe),Dn=Math.cos(pe);be.push(Ze[0]-vn*ge,Ze[1],Ze[2]-Dn*ge,ln[0]-vn*Qe,ln[1],ln[2]-Dn*Qe,Ze[0]+vn*ge,Ze[1],Ze[2]+Dn*ge,Ze[0]+vn*ge,Ze[1],Ze[2]+Dn*ge,ln[0]-vn*Qe,ln[1],ln[2]-Dn*Qe,ln[0]+vn*Qe,ln[1],ln[2]+Dn*Qe);for(let jn=0;jn<6;jn++)Be(Tn,"#2F6B2C","#79B356",Se+.2),ve.push(Tn.r,Tn.g,Tn.b)}let ze=new tn;return ze.setAttribute("position",new Ke(new Float32Array(be),3)),ze.setAttribute("color",new Ke(new Float32Array(ve),3)),ze.computeVertexNormals(),ze}));Mt(Pt,ci(new Le({vertexColors:!0,side:We}),.35,0,d),Wt,{size:30,far:50,small:!0})}let le=new Re;a.add(le);{let E=li(256,128,(U,O,D)=>{U.clearRect(0,0,O,D);let nt=xn(3);for(let Et=0;Et<22;Et++){let At=O*(.18+nt()*.64),Bt=D*(.42+nt()*.28),Xt=18+nt()*30,Rt=U.createRadialGradient(At,Bt,0,At,Bt,Xt);Rt.addColorStop(0,"rgba(255,255,255,.95)"),Rt.addColorStop(.6,"rgba(250,252,255,.55)"),Rt.addColorStop(1,"rgba(240,246,255,0)"),U.fillStyle=Rt,U.beginPath(),U.arc(At,Bt,Xt,0,Pe),U.fill()}});for(let U=0;U<46;U++){let O=f()*Pe,D=600+f()*6200,nt=new Jn(new Hn({map:E,transparent:!0,opacity:.45+f()*.35,depthWrite:!1,fog:!1})),Et=380+f()*520;nt.scale.set(Et,Et*.38,1),nt.position.set(Math.cos(O)*D,t.SEA+1400+f()*800,Math.sin(O)*D),le.add(nt)}}at=n0({scene:a,G:t,U:d,camera:h,waterN:_,glowTex:p,colorBase:st,S:r});let xe=(E,U=256,O=64,D=34)=>li(U,O,nt=>{nt.fillStyle="#8B5A2B",nt.fillRect(0,0,U,O),nt.strokeStyle="#E8C170",nt.lineWidth=Math.max(4,O/16),nt.strokeRect(4,4,U-8,O-8),nt.fillStyle="#FFF3D6",nt.font=`900 ${D}px -apple-system, "Geeza Pro", system-ui, sans-serif`,nt.textAlign="center",nt.textBaseline="middle";try{nt.direction="rtl"}catch{}nt.fillText(E,U/2,O/2+2)}),te=new Map;{let E=[];for(let D of s.bridges){D.seg.pts.slice(D.i,D.j+1).forEach((nt,Et)=>{if(nt.gap)return;let At=D.seg.pts[Math.min(nt.k+1,D.seg.pts.length-1)],Bt=Math.atan2(At.z-nt.z,At.x-nt.x);E.push(Vt(Ft(new Fe(.5,.07,1.45),(Xt,Rt,Wt,Pt)=>Be(Xt,"#7A5634","#A57B4C",je(Et,Pt*3)*.6+(Wt>0?.3:0))),nt.x,nt.y-.035,nt.z,0,-Bt,0))});for(let nt of[-1,1])for(let Et of[.95,.45]){let At=[];for(let Bt=D.i-1;Bt<=D.j+1;Bt++){let Xt=D.seg.pts,Rt=Xt[Ee(Bt,0,Xt.length-1)],Wt=Xt[Ee(Bt+1,0,Xt.length-1)],Pt=Xt[Ee(Bt-1,0,Xt.length-1)],Dt=Wt.x-Pt.x,$t=Wt.z-Pt.z,pe=Math.hypot(Dt,$t)||1;At.push(new J(Rt.x-$t/pe*.72*nt,Rt.y+Et,Rt.z+Dt/pe*.72*nt))}E.push(Ft(new gi(new Gn(At),At.length*2,.03,5),"#C9A46B"))}for(let nt of[D.a,D.b])for(let Et of[-1,1]){let At=nt.seg.pts,Bt=At[Math.min(nt.k+1,At.length-1)],Xt=At[Math.max(nt.k-1,0)],Rt=Bt.x-Xt.x,Wt=Bt.z-Xt.z,Pt=Math.hypot(Rt,Wt)||1;E.push(Vt(Ft(new ye(.09,.11,1.5,6),"#5C3A1A"),nt.x-Wt/Pt*.8*Et,nt.y+.6,nt.z+Rt/Pt*.8*Et))}}for(let D of s.ALL)if(D.kind==="stairs"){let nt=D.seg.pts,Et=nt[Math.min(D.k+1,nt.length-1)],At=nt[Math.max(D.k-1,0)],Bt=Math.atan2(Et.z-At.z,Et.x-At.x);E.push(Vt(Ft(new Fe(.9,.5,2.7),(Xt,Rt,Wt,Pt)=>Be(Xt,"#7C766B","#ABA393",Wt+.4+je(D.k,Pt*5)*.3)),D.x,D.y-.25,D.z,0,-Bt+(je(D.k,3)-.5)*.08,0))}for(let{p:D,nx:nt,nz:Et,sz:At}of s.ledgeRocks)E.push(Vt(Ft(new vi(1,0).scale(At,At*(1.3+je(D.k,5)),At*.8),(Bt,Xt,Rt,Wt)=>Be(Bt,"#5E5A55","#A9A398",.35+Rt*.2+je(Xt*5+D.k,Wt*5)*.3)),D.x+nt*(D.hw+At),D.y+At*.3,D.z+Et*(D.hw+At),je(D.k,2)*.4,je(D.k,4)*3,0)),D.k%6===0&&E.push(Vt(Ft(new vi(.25,0),"#8A847A"),D.x-nt*(D.hw-.05),D.y+.08,D.z-Et*(D.hw-.05)));for(let D of s.stones)E.push(Vt(Ft(new ye(D.r,D.r*1.12,1.4,9),(nt,Et,At)=>Be(nt,"#7F7A72","#B7B1A6",At+.6+je(Et*9,D.x)*.2)),D.x,D.y-.7,D.z,0,f()*3,0));{let D=s.rest[0],nt=D.face,Et=-Math.sin(nt),At=Math.cos(nt),Bt=D.x+Math.cos(nt)*3,Xt=D.z+Math.sin(nt)*3;for(let Wt of[-1,1])E.push(Vt(Ft(new ye(.11,.13,3.4,7),"#5C3A1A"),Bt+Et*2*Wt,D.y+1.7,Xt+At*2*Wt));E.push(Vt(Ft(new Fe(.2,.2,4.6),"#4F3420"),Bt,D.y+3.35,Xt,0,-nt,0));let Rt=new Gt(new pn(3.4,.85),new Le({map:xe("\u26F0\uFE0F \u0637\u0631\u064A\u0642 \u0627\u0644\u0642\u0645\u0629",512,128,60),side:We}));Rt.position.set(Bt,D.y+2.85,Xt),Rt.rotation.y=-nt-Math.PI/2,a.add(Rt)}{let nt=o.x+-6,Et=o.z+5.5,At=t.H(nt,Et);E.push(Vt(Ft(new ye(.08,.1,2.4,6),"#5C3A1A"),nt,At+1.2,Et));let Bt=new Gt(new pn(2.4,.6),new Le({map:xe("\u{1F3DE}\uFE0F \u0648\u0627\u062F\u064A \u0627\u0644\u063A\u0632\u0644\u0627\u0646",384,96,46),side:We}));Bt.position.set(nt,At+2.25,Et),Bt.rotation.y=Math.PI/2,a.add(Bt)}for(let D of s.rest)if(D.flag){for(let At=0;At<6;At++)E.push(Vt(Ft(new vi(.22-At*.025,0),"#9D978C"),D.x+1.6,D.y+.15+At*.25,D.z+1.1));E.push(Vt(Ft(new ye(.05,.06,2.4,6),"#5C3A1A"),D.x-1.4,D.y+1.2,D.z-1.1));let nt=new tn;nt.setAttribute("position",new Ke(new Float32Array([0,.32,0,0,-.32,0,1.05,0,0]),3)),nt.computeVertexNormals();let Et=new Gt(nt,new Le({color:"#F4F1EA",side:We}));Et.position.set(D.x-1.4,D.y+2.05,D.z-1.1),a.add(Et),te.set(D.id,Et)}let U=xe("\u2B05 \u0644\u0644\u0642\u0645\u0629");for(let D of s.signs){let nt=t.H(D.x,D.z);E.push(Vt(Ft(new ye(.06,.07,1.9,6),"#5C3A1A"),D.x,nt+.95,D.z));let Et=new Gt(new pn(1.1,.28),new Le({map:U,side:We}));Et.position.set(D.x+Math.cos(D.a)*.45,nt+1.65,D.z+Math.sin(D.a)*.45),Et.rotation.y=-D.a+Math.PI,a.add(Et)}for(let D of s.logs){let nt=t.H(D.x,D.z);E.push(Vt(Ft(new ye(.32,.38,4.2,8),(Et,At,Bt)=>Et.set(Math.abs(Bt)>2?"#C9A36B":"#5A3E26")),D.x,nt+.35,D.z,0,D.a,Math.PI/2))}let O=new Gt(en(E),new Le({vertexColors:!0,side:We}));O.castShadow=!0,O.receiveShadow=!0,a.add(O)}let fe=200,De=new Ti(new ye(.22,.22,.05,20),new Fn({color:"#FFC93C",specular:"#FFF4C0",shininess:90,emissive:"#6B4A00",emissiveIntensity:.55}),fe);De.castShadow=!0,De.frustumCulled=!1,De.count=0,a.add(De);let kt=s.plaza,k=s.RP,vt=s.HS,K=new Re;K.position.set(kt.x,vt,kt.z),a.add(K);let ht=[],X={flag:null,flagBase:null,bell:null,lanterns:[],water:null,drops:null,leaves:null,kiosk:null,cups:[],streaks:null,scope:null},mt=(E,U)=>[Math.cos(E*Gr)*U,Math.sin(E*Gr)*U],rt=new Fn({color:"#B5562A",specular:"#FFFFFF",shininess:120,transparent:!0,opacity:.85}),gt=new Fn({color:"#C9A13B",specular:"#FFE9A8",shininess:90});{let E=li(512,512,(de,He,rn)=>{de.fillStyle="#B9B1A3",de.fillRect(0,0,He,rn);for(let dn=0;dn<12;dn++){let Un=dn*22,_i=Un+22,Os=Math.max(6,Math.round(Pe*(Un+11)/34));for(let Ss=0;Ss<Os;Ss++){let bu=Ss/Os*Pe,Au=(Ss+1)/Os*Pe,Ic=.82+(dn*7+Ss*3)%5*.04;de.fillStyle=`rgb(${Math.round(196*Ic)},${Math.round(186*Ic)},${Math.round(168*Ic)})`,de.beginPath(),de.arc(He/2,rn/2,_i-1.5,bu+.01,Au-.01),de.arc(He/2,rn/2,Math.max(0,Un+1.5),Au-.01,bu+.01,!0),de.closePath(),de.fill()}}}),U=new Gt(new $n(k,64),new Le({map:E}));U.rotation.x=-Math.PI/2,U.position.y=.03,U.receiveShadow=!0,K.add(U);let O=[];for(let de=0;de<64;de++){let He=de/64*Pe;Math.abs(Pn(He,s.ENTRY_A))<.16||Math.abs(Pn(He,s.DECK_A))<.2||O.push(Vt(Ft(new Fe(1.36,.72,.55),(rn,dn,Un,_i)=>Be(rn,"#8E877B","#B8AF9F",.4+Un+je(de,_i*4)*.3)),Math.cos(He)*(k-.1),.36,Math.sin(He)*(k-.1),0,-He+Math.PI/2,0))}for(let de=0;de<10;de++)O.push(Vt(Ft(new Fe(.46,.08,3.6),(He,rn,dn,Un)=>Be(He,"#7A5634","#A57B4C",je(de,Un)*.5+.3)),k-.3+de*.48,.05,0));for(let de of[-1,1]){O.push(Vt(Ft(new Fe(4.8,.07,.07),"#6B4423"),k+2.1,.95,de*1.8));for(let He=0;He<5;He++)O.push(Vt(Ft(new ye(.05,.05,1,6),"#5C3A1A"),k+.1+He*1.1,.5,de*1.8))}O.push(Vt(Ft(new Fe(.07,.07,3.6),"#6B4423"),k+4.5,.95,0));for(let de=-1;de<=1;de++)O.push(Vt(Ft(new ye(.06,.06,1,6),"#5C3A1A"),k+4.5,.5,de*1.6));for(let de=0;de<4;de++)O.push(Vt(Ft(new ye(.12,.14,7,6),"#4F3420"),k+.5+de*1.3,-3.4,(de%2?1:-1)*1.5));O.push(Ft(new Kn([new Ot(.001,0),new Ot(2.35,0),new Ot(2.45,.08),new Ot(2.4,.62),new Ot(2.15,.66),new Ot(2.1,.22),new Ot(.001,.22)],40),(de,He,rn)=>Be(de,"#9F988C","#D6CFC2",rn*1.5+.2))),O.push(Ft(new Kn([new Ot(.001,.2),new Ot(.32,.2),new Ot(.22,.9),new Ot(.18,1.4),new Ot(.7,1.55),new Ot(.72,1.68),new Ot(.15,1.72),new Ot(.12,2.15),new Ot(.2,2.3),new Ot(.001,2.38)],24),(de,He,rn)=>Be(de,"#A79F92","#DCD5C8",rn*.4)));let D=kt.kioskA*Gr,[nt,Et]=mt(kt.kioskA,9.2),At=Math.atan2(-Math.cos(D),-Math.sin(D)),Bt=[],Xt=de=>Bt.push(de),Rt=(de,He)=>de.set(Math.floor((He+1.6)/.4)%2?"#A97B4C":"#93683E");Xt(Vt(Ft(new Fe(3.2,2.4,.12),Rt),0,1.2,-1.05));for(let de of[-1,1])Xt(Vt(Ft(new Fe(.12,2.4,2.2),"#8A5F36"),de*1.55,1.2,0));Xt(Vt(Ft(new Fe(3.5,.12,2.7),"#6B4423"),0,2.45,.15)),Xt(Vt(Ft(new Fe(3.1,1,.5),(de,He,rn)=>de.set(rn>.42?"#5C3A1A":Math.floor((He+1.55)/.31)%2?"#A97B4C":"#93683E")),0,.5,.85));for(let de=0;de<8;de++)Xt(Vt(Ft(new Fe(.44,.04,.9),de%2?"#FAF3E6":"#2E8B57"),-1.54+de*.44,2.3,1.75,.35,0,0));Xt(Vt(Ft(new Fe(2.6,.06,.35),"#6B4423"),0,1.6,-.9));for(let de=0;de<5;de++)Xt(Vt(Ft(new ye(.07,.06,.22,8),["#2E86AB","#C0612B","#F2E3C6","#9B2335","#E8C170"][de]),-1+de*.5,1.75,-.9));let Wt=new Re;Wt.add(new Gt(en(Bt),new Le({vertexColors:!0,side:We}))),Wt.position.set(nt,0,Et),Wt.rotation.y=At,K.add(Wt),Wt.traverse(de=>{de.isMesh&&(de.castShadow=!0,de.receiveShadow=!0)}),X.kiosk=Wt;let Pt=new Gt(new Kn([new Ot(.001,0),new Ot(.14,0),new Ot(.16,.05),new Ot(.22,.2),new Ot(.2,.42),new Ot(.12,.5),new Ot(.14,.56),new Ot(.06,.62),new Ot(.001,.64)],18),gt);Pt.position.set(-1,1,.85),Wt.add(Pt);for(let de=0;de<6;de++){let He=new Gt(new ye(.045,.032,.1,10),rt);He.position.set(-.3+de*.2,1.05,.9),Wt.add(He),X.cups.push(He)}let Dt=Us({thobe:"#EDE6DA",bisht:null,shmagh:"#1E1E1E",beard:"#2E2A26",beads:!1});Dt.root.position.set(.35,0,-.25),Wt.add(Dt.root),ht.push({m:Dt,base:Dt.root.position.clone(),kind:"seller"});for(let de of kt.benches){let He=de*Gr,[rn,dn]=mt(de,6.6),Un=-He-Math.PI/2,_i=-Math.sin(He),Os=Math.cos(He);O.push(Vt(Ft(new Fe(2.2,.1,.55),"#8A5F36"),rn,.45,dn,0,Un,0)),O.push(Vt(Ft(new Fe(2.2,.5,.08),"#7A5232"),rn+Math.cos(He)*.3,.75,dn+Math.sin(He)*.3,0,Un,0));for(let Ss of[-.9,.9])O.push(Vt(Ft(new Fe(.1,.45,.5),"#6B4423"),rn+_i*Ss,.22,dn+Os*Ss,0,Un,0))}let $t=()=>{let de=new Gt(new ye(.035,.026,.08,10),rt);return de.position.set(0,-.43,.05),de},pe={tea:[kt.meet[0]-kt.x,kt.meet[1]-kt.z],stand:[nt,Et]},ae=[Us({thobe:"#D8CDB8",bisht:"#2D3A4E",shmagh:"#C8102E",beads:!1,beard:"#5A524C"}),Us({thobe:"#F4F1EA",bisht:null,shmagh:"#F4F1EA",beard:"none",beads:!0}),Us({thobe:"#CFE0E8",bisht:null,shmagh:"#C8102E",beard:"#3A3430",beads:!1})];kt.guests.forEach((de,He)=>{let rn=ae[He],[dn,Un]=mt(de.a,de.r),_i=pe[de.kind];rn.root.position.set(dn,0,Un),rn.root.rotation.y=Math.atan2(_i[0]-dn,_i[1]-Un),K.add(rn.root),ht.push({m:rn,base:rn.root.position.clone(),kind:de.kind,ph:f()*6}),de.kind==="tea"&&rn.arms[1].el.add($t())});let be=118*Gr,[ve,ze]=mt(118,9),Ae=-Math.sin(be),Se=Math.cos(be);for(let de of[-1,1])O.push(Vt(Ft(new Fe(.18,2.8,.18),"#5C3A1A"),ve+Ae*.9*de,1.4,ze+Se*.9*de));O.push(Vt(Ft(new Fe(2.3,.2,.24),"#4F3420"),ve,2.8,ze,0,-be-Math.PI/2,0));let me=new Re;me.position.set(ve,2.7,ze),K.add(me);let ge=new Gt(new Kn([new Ot(.001,-.05),new Ot(.18,-.06),new Ot(.24,-.25),new Ot(.3,-.55),new Ot(.42,-.72),new Ot(.4,-.76),new Ot(.001,-.76)],24),new Fn({color:"#B07A2E",specular:"#FFE2A0",shininess:100}));ge.castShadow=!0;let Qe=new Gt(new Ue(.07,10,8),Oe("#3B2A1A"));Qe.position.y=-.7,me.add(ge,Qe),X.bell={g:me,swing:0,v:0};let[Ze,ln]=mt(300,10.2);O.push(Vt(Ft(new ye(.08,.1,9,8),"#D9D9D9"),Ze,4.5,ln)),O.push(Vt(Ft(new Ue(.16,10,8),"#E8C170"),Ze,9.05,ln));let vn=new pn(3.2,2,20,10);vn.translate(1.6,0,0);let Dn=new Float32Array(vn.attributes.position.count*3);for(let de=0;de<vn.attributes.position.count;de++){let He=vn.attributes.position.getY(de);Tn.set(He>.33?"#CE1126":He>-.33?"#FFFFFF":"#141414"),Math.abs(He)<.2&&Math.abs(vn.attributes.position.getX(de)-1.6)<.35&&Tn.set("#007A3D"),Dn.set([Tn.r,Tn.g,Tn.b],de*3)}vn.setAttribute("color",new Ke(Dn,3));let jn=new Gt(vn,new Le({vertexColors:!0,side:We}));jn.position.set(Ze+.1,7.9,ln),jn.castShadow=!0,K.add(jn),X.flag=jn,X.flagBase=Float32Array.from(vn.attributes.position.array);let Ce=new Re;Ce.position.set(k+3.9,0,0),K.add(Ce);for(let de=0;de<3;de++){let He=de/3*Pe,rn=new Gt(new ye(.03,.03,1.3,6),Oe("#3B3B3B"));rn.position.set(Math.cos(He)*.25,.6,Math.sin(He)*.25),rn.rotation.set(Math.sin(He)*.38,0,-Math.cos(He)*.38),Ce.add(rn)}let qe=new Gt(new ye(.09,.13,1.1,16),gt);qe.rotation.z=Math.PI/2-.15,qe.position.set(.1,1.32,0),Ce.add(qe);let an=new Gt(new ye(.14,.14,.06,16),Oe("#1A2A3A",{shininess:160,specular:"#FFFFFF"}));an.rotation.z=Math.PI/2-.15,an.position.set(.66,1.4,0),Ce.add(an),Or(Ce),X.scope=Ce;let ii=kt.lamps.map(de=>de*Gr);for(let de of ii){let He=Math.cos(de)*12.2,rn=Math.sin(de)*12.2;O.push(Vt(Ft(new ye(.06,.08,3.2,6),"#2E2E2E"),He,1.6,rn));let dn=new Re;dn.position.set(He,3,rn);let Un=new Gt(new ye(.11,.11,.26,8),new _n({color:"#FFD36B"})),_i=new Jn(new Hn({map:p,color:"#FFC14D",transparent:!0,opacity:.7,depthWrite:!1,blending:Xn}));_i.scale.setScalar(.75),dn.add(Un,_i),K.add(dn),X.lanterns.push(dn)}let Nn=[];for(let de=0;de<4;de++){let He=ii[de],rn=ii[(de+1)%4],dn=Pn(He,rn);dn<0&&(dn+=Pe);for(let Un=1;Un<9;Un++){let _i=He+dn*Un/9,Os=Math.sin(Un/9*Math.PI)*.6;Nn.push([Math.cos(_i)*12.2,3.05-Os,Math.sin(_i)*12.2])}}let On=new Ti(new Ue(.07,8,6),new _n({color:"#FFFFFF"}),Nn.length),ws=new Mn,Fc=["#FF5D8F","#FFD23F","#7FD1FF","#8DE26B"];Nn.forEach(([de,He,rn],dn)=>{ws.position.set(de,He,rn),ws.updateMatrix(),On.setMatrixAt(dn,ws.matrix),On.setColorAt(dn,Tn.set(Fc[dn%4]))}),K.add(On);for(let de of kt.beds){let[He,rn]=mt(de,11);O.push(Vt(Ft(new ye(.7,.6,.5,12),"#8E877B"),He,.25,rn));for(let dn=0;dn<9;dn++)O.push(Vt(Ft(new En(.13,0),["#FF5D8F","#FFD23F","#FFFFFF","#B28DFF"][dn%4]),He+Math.cos(dn)*.4,.58,rn+Math.sin(dn)*.4))}let Pc=new Gt(en(O),new Le({vertexColors:!0,side:We}));Pc.castShadow=!0,Pc.receiveShadow=!0,K.add(Pc),Mt(xt.pineA,pt.pine,kt.pines.map(de=>{let[He,rn]=mt(de,11.6);return{x:kt.x+He,y:vt-.1,z:kt.z+rn,ry:f()*Pe,s:.9}}),{cast:!0,size:100,far:500});let oa=new Gt(new $n(2.12,40),new Fn({color:"#4AA6D8",specular:"#FFFFFF",shininess:140,normalMap:_,transparent:!0,opacity:.88}));oa.rotation.x=-Math.PI/2,oa.position.y=.55,K.add(oa),X.water=oa;let mu=140,gu=[];for(let de=0;de<mu;de++)gu.push([f()*Pe,f(),.5+f()*.5]);let xu=new tn;xu.setAttribute("position",new Ke(new Float32Array(mu*3),3)),X.drops=new Rr(xu,new Xs({size:.16,map:p,color:"#E6F6FF",transparent:!0,opacity:.9,depthWrite:!1})),X.drops.userData.seed=gu,X.drops.frustumCulled=!1,K.add(X.drops);let yu=220,_u=[];for(let de=0;de<yu;de++)_u.push([f()*60-30,f()*8,f()*60-30,f()]);let vu=new tn;vu.setAttribute("position",new Ke(new Float32Array(yu*3),3)),X.leaves=new Rr(vu,new Xs({size:.22,map:p,color:"#A8D46A",transparent:!0,opacity:0,depthWrite:!1})),X.leaves.userData.seed=_u,X.leaves.frustumCulled=!1,K.add(X.leaves);let Mu=70,wu=[];for(let de=0;de<Mu;de++)wu.push([f()*50-25,f()*9-1,f()*50-25,.5+f()]);let Su=new tn;Su.setAttribute("position",new Ke(new Float32Array(Mu*6),3)),X.streaks=new Fs(Su,new ps({color:"#FFFFFF",transparent:!0,opacity:0,depthWrite:!1})),X.streaks.userData.seed=wu,X.streaks.frustumCulled=!1,K.add(X.streaks)}let St=new Re;a.add(St);let Lt={flames:[],glows:[],lantern:null};{let O=new J(4,0,-2.4),D=[],nt=(Ce,qe)=>Ce.set(Math.floor((qe+1.7)/.425)%2?"#EAD9B5":"#D9C39C");D.push(Vt(Ft(new Fe(3.4,1.95,2.4),nt),0,.975,-2.8));for(let Ce of[-1,1])D.push(Vt(Ft(new Fe(3.62,.07,1.52),(qe,an)=>qe.set(Math.floor((an+1.81)/.4525)%2?"#C9AE82":"#B99D70")),0,2.32,-2.8+Ce*.6,Ce*.59,0,0));let Et=new Mi;Et.moveTo(-1.2,0),Et.lineTo(1.2,0),Et.lineTo(0,.8),Et.closePath();for(let Ce of[-1,1])D.push(Vt(Ft(new gs(Et),"#E3D0A8"),0+Ce*1.7,1.95,-2.8,0,Math.PI/2,0));D.push(Vt(Ft(new Fe(.95,1.55,.05),"#3F2412"),0-.25,.775,-2.8+1.22));for(let Ce of[-1,1]){let qe=new Mi;qe.moveTo(0,0),qe.lineTo(.42*Ce,0),qe.lineTo(0,-1),qe.closePath(),D.push(Vt(Ft(new gs(qe),"#E9D7B0"),0-.25+Ce*.04,1.55,-2.8+1.25))}let At=new J(0,2.15,-2.8+1.2),Bt=new J(0,1.98,-2.8+2.55),Xt=At.distanceTo(Bt),Rt=Math.atan2(At.y-Bt.y,Bt.z-At.z);for(let Ce=0;Ce<8;Ce++){let qe=-1.4875+Ce*.425,an=Ce%2?"#FAF3E6":"#D7263D";D.push(Vt(Ft(new Fe(.425,.035,Xt),an),qe,(At.y+Bt.y)/2,(At.z+Bt.z)/2,Rt,0,0)),D.push(Vt(Ft(new $n(.2125,10,Math.PI,Math.PI),an),qe,Bt.y,Bt.z+.01))}for(let Ce of[-1,1])D.push(Vt(Ft(new ye(.045,.055,2.05,7),"#5C3A1A"),0+Ce*1.68,1.02,-2.8+2.55));let Wt=0-.78,Pt=-2.8+2;D.push(Vt(Ft(new Fe(1,.06,.55),"#8B5A2B"),Wt,.74,Pt));for(let[Ce,qe]of[[-1,-1],[1,-1],[-1,1],[1,1]])D.push(Vt(Ft(new ye(.03,.03,.72,5),"#6B4220"),Wt+Ce*.44,.36,Pt+qe*.22));let Dt=Ce=>new Kn([new Ot(.001,0),new Ot(.09*Ce,0),new Ot(.15*Ce,.07),new Ot(.16*Ce,.17),new Ot(.11*Ce,.28),new Ot(.06*Ce,.32),new Ot(.075*Ce,.36),new Ot(.06*Ce,.37)],14);D.push(Vt(Ft(Dt(1),(Ce,qe,an)=>Ce.set(an>.2&&an<.24?"#F2E3C6":"#C0612B")),Wt-.3,.77,Pt)),D.push(Vt(Ft(Dt(.8),(Ce,qe,an)=>Ce.set(an>.16&&an<.19?"#FFFFFF":"#2E86AB")),Wt+.02,.77,Pt-.05)),D.push(Vt(Ft(new Ue(.28,12,8),(Ce,qe,an)=>Be(Ce,"#C8B18A","#E2D2AE",an*2+.5)),0-2.05,.27,-2.8+1.2,0,0,0,1,1.2,1)),D.push(Vt(Ft(new Fe(.5,.42,.42),(Ce,qe,an)=>Ce.set(Math.abs(an)>.17||Math.abs(qe)>.21?"#7A4E25":"#A0703C")),0+1.95,.21,-2.8+1,0,.3,0));let $t=(Ce,qe)=>{let an=Ce.distanceTo(qe),ii=Math.max(2,Math.round(an/.55));for(let Nn=0;Nn<=ii;Nn++){let On=Ce.clone().lerp(qe,Nn/ii);D.push(Vt(Ft(new ye(.045,.055,.85,6),"#8B5A2B"),On.x,.42,On.z))}for(let Nn of[.3,.62]){let On=Ft(new Fe(.05,1,.035),"#9C6A36");Vt(On,0,0,0,0,0,0,1,an,1),au(On,new J(Ce.x,Nn,Ce.z),new J(qe.x,Nn,qe.z)),D.push(On)}},pe=new J(-5.8,0,-.75),ae=new J(-5.8,0,-2.9),be=new J(-3.1,0,-2.9),ve=new J(-3.1,0,-.75);$t(pe,ae),$t(ae,be),$t(be,ve),D.push(Vt(Ft(new Fe(1,.18,.35),"#7A4E25"),-4.45,.09,-2.55)),D.push(Vt(Ft(new Fe(.9,.06,.28),"#D8C26A"),-4.45,.2,-2.55)),D.push(Vt(Ft(new Fe(1.75,.46,.06),"#7A4A22"),0,2.66,-2.8+1.25));for(let Ce=0;Ce<9;Ce++){let qe=Ce/9*Pe;D.push(Vt(Ft(new vi(.11,0),(an,ii,Nn)=>Be(an,"#7D776C","#B5AFA2",Nn*4+.5)),O.x+Math.cos(qe)*.42,.06,O.z+Math.sin(qe)*.42,Ce,Ce*2,0,1,.7,1))}for(let Ce=0;Ce<3;Ce++){let qe=Ce/3*Math.PI;D.push(Vt(Ft(new ye(.05,.05,.62,6),(an,ii,Nn)=>an.set(Math.abs(Nn)>.27?"#C9A36B":"#4A2E18")),O.x,.1,O.z,0,qe,Math.PI/2-.25))}let ze=new Gt(en(D),new Le({vertexColors:!0,side:We}));ze.castShadow=!0,ze.receiveShadow=!0,St.add(ze);let Ae=new Gt(new pn(1.62,.38),new Le({map:xe(i.sign||"\u062E\u064A\u0645\u0629 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",512,128,64),emissive:"#3B2410",emissiveIntensity:.25}));Ae.position.set(0,2.66,-2.8+1.29),St.add(Ae);let Se=new Re,me=new Gt(new ye(.07,.07,.16,8),new _n({color:"#FFD36B"})),ge=new Jn(new Hn({map:p,color:"#FFC14D",transparent:!0,opacity:.75,depthWrite:!1,blending:Xn}));ge.scale.setScalar(.9),Se.add(me,ge),Se.position.set(0+1.68,1.72,-2.8+2.55),St.add(Se),Lt.lantern=Se;let Qe=Ce=>new _n({color:Ce,transparent:!0,opacity:.9,depthWrite:!1,blending:Xn});[["#FF5A1F",.2,.55,0],["#FF9A2E",.15,.45,.07],["#FFE07A",.09,.3,-.05]].forEach(([Ce,qe,an,ii],Nn)=>{let On=new Gt(new Rn(qe,an,10,1,!0),Qe(Ce));On.position.set(O.x+ii,.12+an/2,O.z-ii),On.userData={h0:an,i:Nn},St.add(On),Lt.flames.push(On)});let Ze=new Jn(new Hn({map:p,color:"#FF8A2E",transparent:!0,opacity:.6,depthWrite:!1,blending:Xn}));Ze.position.set(O.x,.45,O.z),Ze.scale.setScalar(1.8),St.add(Ze),Lt.glows.push(Ze);let ln=new Re,vn=new Gt(new Kn([new Ot(.001,0),new Ot(.1,0),new Ot(.115,.02),new Ot(.1,.09),new Ot(.06,.14),new Ot(.045,.2),new Ot(.06,.24),new Ot(.075,.26),new Ot(.04,.3),new Ot(.012,.34),new Ot(.02,.36),new Ot(.001,.37)],20),gt);ln.add(vn),ln.position.set(O.x-.75,.12,O.z+.35),St.add(ln);let Dn=li(256,160,(Ce,qe,an)=>{Ce.fillStyle="#8E1B26",Ce.fillRect(0,0,qe,an),Ce.fillStyle="#1F2F5C",Ce.fillRect(10,10,qe-20,an-20),Ce.fillStyle="#8E1B26",Ce.fillRect(20,20,qe-40,an-40),Ce.strokeStyle="#E8C170",Ce.lineWidth=3,Ce.strokeRect(16,16,qe-32,an-32);let ii=(Nn,On,ws,Fc)=>{Ce.fillStyle=Fc,Ce.beginPath(),Ce.moveTo(Nn,On-ws),Ce.lineTo(Nn+ws*1.5,On),Ce.lineTo(Nn,On+ws),Ce.lineTo(Nn-ws*1.5,On),Ce.closePath(),Ce.fill()};ii(qe/2,an/2,44,"#1F2F5C"),ii(qe/2,an/2,30,"#E8C170"),ii(qe/2,an/2,16,"#8E1B26"),ii(qe/2,an/2,6,"#F4EFE6")}),jn=new Gt(new pn(2,1.25),new Le({map:Dn}));jn.rotation.x=-Math.PI/2,jn.rotation.z=.04,jn.position.set(0-.2,.02,-2.8+1.9),jn.receiveShadow=!0,St.add(jn)}let It=new Re;{let E=new Gt(new Io(.95,1.18,48),new _n({color:"#FFD23F",transparent:!0,opacity:.9,depthWrite:!1,side:We}));E.rotation.x=-Math.PI/2,E.position.y=.03;let U=new Gt(new $n(.95,40),new _n({color:"#FFE38A",transparent:!0,opacity:.25,depthWrite:!1}));U.rotation.x=-Math.PI/2,U.position.y=.025;let O=new Gt(new Rn(.2,.42,4),new Fn({color:"#FFB703",emissive:"#FF8A00",emissiveIntensity:.6,shininess:80}));O.rotation.x=Math.PI,O.position.y=1.9,It.add(E,U,O),It.userData={ring:E,arrow:O},It.visible=!1,a.add(It)}function ce(E){let U=E==="wolf",O=new Re,D=new Re;O.add(D);let nt=Oe(U?"#7E8088":"#4E3626",{shininess:8}),Et=Oe(U?"#C9CACF":"#6E5038",{shininess:8}),At=Oe(U?"#3E4048":"#2B1D12",{shininess:20}),Bt=U?.95:1,Xt=U?.72:.62,Rt=U?.22:.33,Wt=new Gt(new Ue(1,22,14),nt);Wt.scale.set(Bt/2,Rt,Rt*(U?.85:.9)),Wt.position.y=Xt,D.add(Wt);let Pt=new Gt(new Ue(1,16,10),Et);if(Pt.scale.set(Bt/2.3,Rt*.6,Rt*.75),Pt.position.set(0,Xt-Rt*.4,0),D.add(Pt),!U){let Ae=new Gt(new Fe(Bt*.8,.12,.08),At);Ae.position.set(0,Xt+Rt*.95,0),D.add(Ae)}let Dt=new Re;Dt.position.set(Bt/2+.05,Xt+(U?.16:0),0),D.add(Dt);let $t=new Gt(new Ue(U?.16:.2,16,12),nt);$t.scale.set(1.2,.95,.9),Dt.add($t);let pe=new Gt(new ye(U?.05:.09,U?.09:.13,U?.26:.22,10),U?Et:nt);pe.rotation.z=-Math.PI/2,pe.position.set(U?.24:.25,-.04,0),Dt.add(pe);let ae=new Gt(new Ue(U?.035:.07,10,8),At);ae.position.set(U?.37:.36,-.03,0),U||ae.scale.set(.5,1,1.1),Dt.add(ae);for(let Ae of[-1,1]){let Se=new Gt(new Ue(.025,8,6),new _n({color:U?"#F2C14E":"#1A0E08"}));Se.position.set(.12,.06,Ae*.09),Dt.add(Se);let me=new Gt(new Rn(U?.06:.05,U?.16:.1,6),nt);if(me.position.set(-.02,U?.17:.15,Ae*.08),me.rotation.set(Ae*.25,0,U?-.1:.4),Dt.add(me),!U){let ge=new Gt(new Rn(.018,.12,6),Oe("#F4EFE6"));ge.position.set(.36,-.04,Ae*.08),ge.rotation.z=.6,Dt.add(ge)}}let be=new Re;be.position.set(-Bt/2,Xt+.05,0),D.add(be);let ve=new Gt(U?new Ni(.06,.36,4,8):new ye(.015,.02,.18,6),nt);ve.position.y=U?-.2:-.09,be.add(ve),be.rotation.z=U?.9:.4;let ze=[];for(let[Ae,Se]of[[Bt*.33,1],[-Bt*.33,0]])for(let me of[-1,1]){let ge=new Re;ge.position.set(Ae,Xt-Rt*.4,me*Rt*.55),D.add(ge);let Qe=new Gt(new ye(.045,.06,(Xt-Rt*.4)*.55,8),nt);Qe.position.y=-((Xt-Rt*.4)*.55)/2,ge.add(Qe);let Ze=new Re;Ze.position.y=-(Xt-Rt*.4)*.55,ge.add(Ze);let ln=new Gt(new ye(.03,.04,(Xt-Rt*.4)*.45,8),U?nt:At);ln.position.y=-((Xt-Rt*.4)*.45)/2,Ze.add(ln),ze.push({hip:ge,knee:Ze,front:Se,s:me})}return Or(O),a.add(O),O.scale.setScalar(1.15),{root:O,body:D,head:Dt,tail:be,legs:ze,yaw:0}}let tt=e.beasts.map(E=>({e:E,m:ce(E.kind)})),we=(()=>{let E=new Re,U=new Re;E.add(U);let O=Oe("#D9A066",{shininess:18}),D=Oe("#ECCB9C",{shininess:18}),nt=Oe("#3B2A1A",{shininess:40}),Et=[[-.56,0],[-.54,.1],[-.48,.17],[-.36,.2],[-.18,.18],[0,.185],[.18,.21],[.32,.215],[.44,.18],[.53,.11],[.57,0]],At=new Kn(Et.map(([Ae,Se])=>new Ot(Se,Ae)),36);{let Ae=At.attributes.position;for(let Se=0;Se<Ae.count;Se++){let me=Ae.getX(Se),ge=Ae.getY(Se),Qe=Ae.getZ(Se),Ze=Math.exp(-(((ge+.1)/.22)**2));me<0&&(me*=1-Ze*.28),Ae.setXYZ(Se,ge,-me*(me<0?.95:1.05),Qe*.82)}At.computeVertexNormals()}At=Ft(At,(Ae,Se,me)=>{let ge=me/.21;ge<-.45?Ae.set("#FFF6E8"):ge<-.15?Be(Ae,"#6A3F1F","#8A5528",(ge+.45)/.3):Be(Ae,"#D9A066","#C58A50",(ge-.3)*1.5),Se<-.46&&ge<.55&&Ae.set("#FFF6E8")});let Bt=new Gt(At,Oe("#FFFFFF",{vertexColors:!0,shininess:22}));Bt.position.y=.8,U.add(Bt);let Xt=new Re;Xt.position.set(-.56,.86,0);let Rt=new Gt(new Ni(.025,.1,3,6),Oe("#2B1D12"));Rt.position.y=-.06,Xt.add(Rt),Xt.rotation.z=.5,U.add(Xt);let Wt=new Re;Wt.position.set(.42,.88,0),U.add(Wt);let Pt=new Gt(new ye(.055,.1,.5,14),O);Pt.position.y=.23,Pt.scale.z=.85,Wt.add(Pt);let Dt=new Gt(new ye(.036,.06,.42,10),Oe("#FFF6E8"));Dt.position.set(.04,.21,0),Dt.rotation.z=-.08,Wt.add(Dt),Wt.rotation.z=-.6;let $t=new Re;$t.position.set(0,.49,0),$t.scale.setScalar(1.12),Wt.add($t);let pe=new Gt(new Ue(.11,24,16),O);pe.scale.set(1.35,.9,.82),$t.add(pe);let ae=new Gt(new Ue(.075,18,12),D);ae.position.set(.14,-.045,0),ae.scale.set(1.25,.8,.85),$t.add(ae);let be=new Gt(new Ue(.03,10,8),nt);be.position.set(.225,-.035,0),$t.add(be);for(let Ae of[-1,1]){let Se=new Gt(new Ue(.026,12,10),Oe("#120C08",{shininess:160,specular:"#FFFFFF"}));Se.position.set(.035,.035,Ae*.083),$t.add(Se);let me=new Gt(new Ue(.07,12,8),O);me.scale.set(.45,1.25,.25),me.position.set(-.08,.1,Ae*.08),me.rotation.set(Ae*.6,0,.6),$t.add(me);let ge=new Gn([new J(-.02,.07,Ae*.035),new J(-.09,.22,Ae*.07),new J(-.07,.38,Ae*.085),new J(0,.47,Ae*.06)]),Qe=new gi(ge,18,.019,7);{let Ze=Qe.attributes.position,ln=8;for(let vn=0;vn<=18;vn++){let Dn=ge.getPointAt(vn/18),jn=1-vn/18*.7;for(let Ce=0;Ce<ln;Ce++){let qe=vn*ln+Ce;Ze.setXYZ(qe,Dn.x+(Ze.getX(qe)-Dn.x)*jn,Dn.y+(Ze.getY(qe)-Dn.y)*jn,Dn.z+(Ze.getZ(qe)-Dn.z)*jn)}}Qe.computeVertexNormals()}$t.add(new Gt(Ft(Qe,(Ze,ln,vn)=>Ze.set(Math.floor(vn*55)%2?"#3B2A1A":"#5A4330")),Oe("#FFFFFF",{vertexColors:!0,shininess:50})))}let ve=new Mn;ve.position.set(0,.38,0),Wt.add(ve);let ze=[];for(let[Ae,Se]of[[.34,1],[-.38,0]])for(let me of[-1,1]){let ge=new Re;ge.position.set(Ae,.76,me*.09),U.add(ge);let Qe=new Gt(new Ue(Se?.075:.1,12,10),O);Qe.scale.set(Se?1.1:1.15,Se?1.7:1.6,Se?.6:.55),Qe.position.set(0,Se?-.05:-.07,0),ge.add(Qe);let Ze=new Gt(new ye(Se?.026:.03,Se?.04:.055,.36,10),O);Ze.position.y=-.2,ge.add(Ze);let ln=new Re;ln.position.y=-.38,ge.add(ln),ln.add(new Gt(new Ue(.024,8,6),D));let vn=new Gt(new ye(.014,.02,.34,8),D);vn.position.y=-.17,ln.add(vn);let Dn=new Gt(new ye(.017,.024,.045,8),Oe("#20150D",{shininess:60}));Dn.position.y=-.355,ln.add(Dn),ze.push({hip:ge,knee:ln,front:Se,s:me})}return Or(E),a.add(E),{root:E,body:U,neck:Wt,head:$t,tail:Xt,legs:ze,collar:ve,yaw:-.25,neckA:-.6}})(),ot=Us();a.add(ot.root);let ct=null,j=i0(),ie=a0();a.add(ie.root);let qt=p,Jt=[];for(let E=0;E<130;E++){let U=new Jn(new Hn({map:qt,color:"#D9C49A",transparent:!0,opacity:0,depthWrite:!1}));U.visible=!1,a.add(U),Jt.push({sp:U,t:1,life:1,vx:0,vy:0,vz:0,s0:1})}let l=0,u=0,T={sand:"#DCC79C",grass:"#A9A07A",forest:"#8F8466",trail:"#C2A985",path:"#C2A985",rock:"#B5ADA0",water:"#E8F4FF",plaza:"#C9C4BA",mud:"#7A6248"};function I(E,U,O,D,nt,Et,At){let Bt=Jt[l++%Jt.length];Bt.sp.visible=!0,Bt.sp.material.color.set(T[D]||"#C2A985"),Bt.sp.position.set(E,U,O),Bt.t=0,Bt.life=1.1+Math.random()*1.5*nt,Bt.vx=Et*.12+(Math.random()-.5)*1.8,Bt.vz=At*.12+(Math.random()-.5)*1.8,Bt.vy=.5+Math.random()*1.2,Bt.s0=.55+nt*1.05,Bt.a0=D==="water"?.75:.32+.26*nt}let H=new J;function it(E,U){let O=r.car;if(!O)return;let D=(O.x-h.position.x)**2+(O.z-h.position.z)**2>800*800;if(ie.root.visible=!D,D)return;ie.update(O,E,U);let nt=Math.hypot(O.vx,O.vz),Et=Ee((nt-2.5)/14,0,1)+Ee(O.slip/3,0,1);if(!O.air&&Et>.05&&O.kind!=="plaza")for(u+=U*({sand:56,water:40,trail:46,path:46,mud:22,rock:16,grass:12,forest:14}[O.kind]||20)*Math.min(1.3,Et);u>1;){u-=1;let At=O.wheels[2+(l&1)];I(At.x-Math.cos(O.yaw)*.3,At.g+.15,At.z-Math.sin(O.yaw)*.3,O.kind,Math.min(1,Et),O.vx,O.vz)}for(let At of Jt){if(!At.sp.visible)continue;At.t+=U;let Bt=At.t/At.life;if(Bt>=1){At.sp.visible=!1;continue}At.sp.position.x+=At.vx*U,At.sp.position.y+=At.vy*U,At.sp.position.z+=At.vz*U,At.vy*=1-.8*U,At.sp.scale.setScalar(At.s0*(.6+Bt*3.2)),At.vx*=1-1.4*U,At.vz*=1-1.4*U,At.sp.material.opacity=At.a0*(1-Bt)*Math.min(1,Bt*6)}}let Q=new Qn,wt=new Qn().setFromAxisAngle(new J(0,1,0),Math.PI/2);function Tt(E){return ie.body.updateMatrixWorld(!0),ie.body.localToWorld(E.set(ie.seat.ox,-.02,ie.seat.oz)),ie.body.getWorldQuaternion(Q),Q.multiply(wt),Q}let jt=new Fs(new tn,new ps({color:"#F4F4F4",transparent:!0,opacity:.85}));jt.geometry.setAttribute("position",new Ke(new Float32Array(6),3)),jt.frustumCulled=!1,jt.visible=!1,a.add(jt);let re=new Gt(new Ue(.035,10,8),new Le({color:"#E63946"}));re.visible=!1,a.add(re);function Y(E){if(!(ct&&ct.id===E.id)){if(ct)for(let U of[ct.root,ct.chute,ct.drop,ct.rope])a.remove(U);ct=Zf(E,p),a.add(ct.root,ct.chute,ct.drop,ct.rope),j.reset()}}function lt(){let E=r.vq.camp;St.visible=!1,St.position.set(o.x+E.x,o.VF+E.base,o.z+E.z),St.rotation.y=E.rot,It.position.set(r.vq.zoneW.x,t.H(r.vq.zoneW.x,r.vq.zoneW.z),r.vq.zoneW.z),ot.root.rotation.y=E.rot,ot.yaw=E.rot}let Ht=[],Yt=[];{let E=new tn;E.setAttribute("position",new Ke(new Float32Array([0,0,0,.9,0,-.25,.9,0,.25]),3)),E.computeVertexNormals();let U=new _n({color:"#34406A",side:We});for(let Et=0;Et<9;Et++){let At=new Re,Bt=new Gt(E,U),Xt=new Gt(E,U);Xt.scale.x=-1,At.add(Bt,Xt);let Rt=Et<5;At.userData={ph:f()*6,sp:.25+f()*.2,y:Rt?o.VF+26+f()*14:70+f()*40,cx:Rt?o.x+15+f()*90:(f()-.5)*300,cz:Rt?o.z+(f()-.5)*20:(f()-.5)*300,rad:10+f()*18,l:Bt,r:Xt},Ht.push(At),a.add(At)}let O=new Mi;O.moveTo(0,0),O.bezierCurveTo(.05,.1,.16,.12,.15,.02),O.bezierCurveTo(.16,-.05,.08,-.1,0,-.02);let D=new gs(O,6),nt=["#FF8FD1","#FFD23F","#8FD6FF","#FFFFFF","#FF9E5E","#B28DFF"];for(let Et=0;Et<22;Et++){let At=new Le({color:nt[Et%nt.length],side:We,emissive:nt[Et%nt.length],emissiveIntensity:.25}),Bt=new Re,Xt=new Gt(D,At),Rt=new Gt(D,At);Rt.scale.x=-1,Bt.add(Xt,Rt),Bt.userData={l:Xt,r:Rt,ax:o.x+6+f()*108,az:o.z+(f()-.5)*16,ph:f()*6},Yt.push(Bt),a.add(Bt)}}let dt={yaw:0,pitch:.26,dist:5.6,init:!1,tgt:new J,pos:new J,scopeYaw:0,scopePitch:-.38,effPitch:null,effDist:null},se=new J,Me=new J;function oe(E){let U=r.hero;if(!U)return;if(r.scope){let ae=s.x+k+4.75,be=vt+1.45,ve=s.z,ze=dt.scopeYaw,Ae=dt.scopePitch;dt.pos.set(ae,be,ve),dt.tgt.set(ae+Math.cos(ze)*100*Math.cos(Ae),be+Math.sin(Ae)*100,ve+Math.sin(ze)*100*Math.cos(Ae));return}let O=r.focus,D=U.mode==="lift"||U.mode==="carry"||U.mode==="zip",nt=U.mode==="glide";se.set(O&&O.x!=null?O.x:U.x,U.y+(D||nt?.9:U.mode==="zip"?1.6:1.42),O&&O.z!=null?O.z:U.z),O&&(dt.yaw=bn(dt.yaw,O.yaw,2.2,E)),U.mode==="carry"&&(dt.yaw=bn(dt.yaw,Math.atan2(U.z-dt.pos.z,U.x-dt.pos.x),1.5,E)),U.mode==="zip"&&(dt.yaw=bn(dt.yaw,U.face,1.4,E));let Et=U.mode==="drive"||U.mode==="getin"||U.mode==="getout";if(Et){let ae=r.car;se.set(ae.x+ae.vx*.08,ae.y+.95,ae.z+ae.vz*.08),dt.dragT=(dt.dragT||0)-E,dt.dragT<=0&&!O&&U.mode==="drive"&&Math.abs(ae.vf)>1.5&&(dt.yaw=bn(dt.yaw,ae.yaw,1.6+Math.min(2,Math.abs(ae.vf)*.08),E))}let At=O?O.dist*.85:Et?6.2+Math.min(2.2,Math.abs(r.car.vf)*.07):U.mode==="carry"?11:U.mode==="zip"?7.2:D?7:nt?9:U.swim?5.2:r.summit?5.6:4.9;dt.init||(dt.tgt.copy(se),dt.dist=At,dt.effPitch=null,dt.effDist=null,dt.init=!0);let Bt=U.mode==="faint"?2:D?6:Et?9:14;dt.tgt.x=Xe(dt.tgt.x,se.x,Bt,E),dt.tgt.z=Xe(dt.tgt.z,se.z,Bt,E),dt.tgt.y=Xe(dt.tgt.y,se.y,U.air&&!D&&!nt?6:10,E),dt.dist=Xe(dt.dist,At,3,E);let Xt=(ae,be)=>Me.set(dt.tgt.x-Math.cos(dt.yaw)*Math.cos(be)*ae,dt.tgt.y+Math.sin(be)*ae,dt.tgt.z-Math.sin(dt.yaw)*Math.cos(be)*ae),Rt="",Wt=(ae,be)=>{Rt="";for(let ve=1;ve<=8;ve++){let ze=ve/8;Xt(ae*ze,be);let Ae=t.H(Me.x,Me.z);if(Me.y<Ae+.4||Me.y-.85*(1-ze)<Ae+.2)return Rt="terr",ze;if(Rt="canopy",!D&&t.tallNear(Me.x,Me.z,Se=>{let me=Me.x-Se.x,ge=Me.z-Se.z,Qe=me*me+ge*ge,Ze=Se.r*(Se.tree?3.4:1.2);return ve>=2&&!r.summit&&Qe<Ze*Ze&&Me.y>Ae+1.9&&Me.y<Ae+9}))return ze}return Rt="",0},Pt=D?.35:nt?Math.max(dt.pitch,.42):dt.pitch,Dt=dt.dist,$t=Wt(Dt,Pt);if($t&&Rt==="canopy"){let ae=Math.min(Pt,.04),be=Wt(Dt,ae);(!be||be>$t)&&(Pt=ae,$t=be)}else if($t)for(let ae of[.3,.6]){let be=Math.min(Pt+ae,1.05),ve=Wt(Dt,be);if((!ve||ve>$t)&&(Pt=be,$t=ve),!$t)break}$t&&(Dt=Math.max(1.8,Dt*($t-1/8))),dt.effPitch=dt.effPitch==null?Pt:Xe(dt.effPitch,Pt,Pt<dt.effPitch?8:2.5,E),dt.effDist=dt.effDist==null?Dt:Xe(dt.effDist,Dt,Dt<dt.effDist?10:2.5,E),Xt(Math.min(dt.effDist,Dt+.6),dt.effPitch),t.tallNear(Me.x,Me.z,ae=>{let be=Me.x-ae.x,ve=Me.z-ae.z,ze=be*be+ve*ve,Ae=ae.r+.35;if(ze<Ae*Ae){let Se=Math.sqrt(ze)||.01;Me.x=ae.x+be/Se*Ae,Me.z=ae.z+ve/Se*Ae}return!1});let pe=t.H(Me.x,Me.z)+.4;Me.y<pe&&(Me.y=pe),dt.pos.copy(Me)}let ke=()=>(dt.yaw*180/Math.PI%360+360)%360,Te=0,he=-1,Ne=0,sn=0,fn=2,hi=390,ni=844,Ln=62,ui=new Mn;ui.rotation.order="YXZ";let Oi=new J,xi=new J;function yi(E,U,O){hi=E,ni=U,fn=O,n.setPixelRatio(O),n.setSize(E,U,!1),h.aspect=E/U,h.updateProjectionMatrix()}let hn=E=>Math.PI/2-E,wn=new J,Vn=new J;function Bn(E,U){let O=r.hero,D=ct,nt=null,Et=(Pt,Dt,$t)=>{let pe=Math.hypot(Pt-O.x,Dt-O.z);return pe<$t&&pe>.8?(nt=Math.PI/2-Math.atan2(Dt-O.z,Pt-O.x),!0):!1};if(O.mode==="walk"&&!O.swim&&!(r.vq.merW&&Math.abs(O.y-s.HS)<4&&Et(r.vq.merW.x,r.vq.merW.z,9))&&!(!r.vq.caught&&Et(e.gz.x,e.gz.z,14))&&O.speed<1.2){let Pt=t.I.board;Et(Pt.x,Pt.z,9)}let At=j.update(D,O,r,E,U,nt);if(O.mode==="drive"||(O.mode==="getin"||O.mode==="getout")&&(O.drive||0)>.98){let Pt=Tt(H);D.root.position.copy(H),D.root.quaternion.copy(Pt),D.turn=hn(O.face)}else D.root.position.set(O.x,O.y+At.by,O.z),D.turn=bn(D.turn,hn(O.face),O.mode==="walk"?11:O.mode==="getin"||O.mode==="getout"?9:6,U),D.root.rotation.set(0,D.turn,0);let Bt=O.mode==="lift"||O.mode==="carry"||O.stun>0||O.air&&O.vy<-7||O.mode==="faint";D.nextBlink-=U,D.nextBlink<0&&(D.blink=.13,D.nextBlink=2.2+Math.random()*3),D.blink=Math.max(0,D.blink-U);for(let Pt of D.eyes)Pt.scale.y=D.blink>0||O.mode==="faint"&&O.faintT>.4?.12:Bt?1.25:1;D.smile.visible=!Bt,D.ooh.visible=Bt,D.star&&(D.star.rotation.y=E*2);for(let Pt of[-1,1]){let Dt=D.acc.userData["tail"+Pt];Dt&&(Dt.rotation.x=.6+Math.sin(E*12+Pt)*.2+O.speed*.08)}if(D.cape&&(D.cape.rotation.x=.08+.55*ue(0,4.2,O.speed)+Math.sin(E*3)*.03),D.fire){D.bodyMat.emissiveIntensity=.32+Math.sin(E*13)*.08;for(let Pt of D.flames)Pt.scale.set(1,.8+Math.sin(E*14+Pt.userData.ph*1.7)*.25,1)}D.torso.scale.x=1+Math.sin(E*1.65)*.008;let Xt=O.mode==="fish";if(D.rod.visible=Xt,jt.visible=re.visible=Xt,Xt){D.root.updateMatrixWorld(!0),D.arms[1].wr.getWorldPosition(wn),D.root.worldToLocal(wn),D.rod.position.copy(wn),D.rod.position.y-=.05,D.rod.rotation.set(.82,0,0),D.rod.updateMatrixWorld(!0),D.rodTip.getWorldPosition(Vn);let Pt=O.x+Math.cos(O.face)*3.6,Dt=O.z+Math.sin(O.face)*3.6,$t=t.water(Pt,Dt,t.H(Pt,Dt)+.05),pe=$t?$t.level:O.y-.5,ae=r.fishing,be=ae&&ae.t>ae.bite-.6?Math.sin(E*30)*.03-.05:0;re.position.set(Pt,pe+.02+Math.sin(E*2.6)*.012+be,Dt);let ve=jt.geometry.attributes.position;ve.setXYZ(0,Vn.x,Vn.y,Vn.z),ve.setXYZ(1,re.position.x,re.position.y,re.position.z),ve.needsUpdate=!0}let Rt=D.chute;if(Rt.visible=O.chute>.01,Rt.visible){Rt.position.copy(D.root.position),Rt.rotation.y=D.root.rotation.y;let Pt=O.chute,Dt=Pt<1?ee(.15,1,Pt)+Math.sin(Pt*Math.PI)*.12:1;D.canopyHolder.scale.set(Dt,ee(.4,1,Pt),Dt),D.canopyHolder.position.y=ee(2.2,3.6,Pt),Rt.rotation.z=-(Math.hypot(O.vx,O.vz)*.05)+Math.sin(E*1.5)*.05,Rt.rotation.x=Math.sin(E*1.1)*.05;let $t=D.lines.geometry.attributes.position,pe=D.canopyHolder.position.y,ae=1.7*Math.sin(Math.PI*.42)*Dt,be=pe+1.7*Math.cos(Math.PI*.42)*.62*ee(.4,1,Pt);for(let ve=0;ve<10;ve++){let ze=ve/10*Pe,Ae=ve%2?.22:-.22;$t.setXYZ(ve*2,Math.cos(ze)*ae,be,Math.sin(ze)*ae),$t.setXYZ(ve*2+1,Ae,2.05,0)}$t.needsUpdate=!0}let Wt=r.drop;if(D.drop.visible=!!(Wt&&Wt.t<2.4),D.drop.visible){let Pt=Ee(1-Wt.t*1.2,.1,1);D.drop.position.set(Wt.x,t.H(Wt.x,Wt.z)+.02,Wt.z),D.drop.scale.set(1.05,.62*Pt,1.05),D.drop.material.opacity=Ee(1-(Wt.t-1.4),0,1)}}function Ms(E,U){for(let{e:O,m:D}of tt){let nt=(O.x-h.position.x)**2+(O.z-h.position.z)**2>19600;if(D.root.visible=!nt,nt)continue;let Et=O.speed>.3,At=O.state==="chase"||O.state==="charge";D.root.position.set(O.x,O.y,O.z),D.yaw=bn(D.yaw,-O.face,10,U),D.root.rotation.y=D.yaw,D.body.position.y=Et?Math.abs(Math.sin(O.ph))*(At?.06:.02):0,D.head.rotation.z=O.state==="notice"?-.25+Math.sin(E*20)*.04:Et?-.1:Math.sin(E*1.3)*.15-.2,D.tail.rotation.z=(O.kind==="wolf"?.9:.4)+(At?.5:0)+Math.sin(E*(At?14:3))*.15;for(let Bt of D.legs){let Xt=Bt.front?Bt.s>0?0:Math.PI:(Bt.s>0?Math.PI:0)+(At?.6:0);Et?(Bt.hip.rotation.z=Math.sin(O.ph+Xt)*(At?.7:.4),Bt.knee.rotation.z=(Bt.front?-1:1)*Math.max(0,-Math.cos(O.ph+Xt))*.5):(Bt.hip.rotation.z=Xe(Bt.hip.rotation.z,0,8,U),Bt.knee.rotation.z=Xe(Bt.knee.rotation.z,0,8,U))}}}function Si(E,U){let O=e.gz,D=we,nt=O.state,Et=Math.hypot(O.vx,O.vz)>.25;if(D.root.visible=(O.x-h.position.x)**2+(O.z-h.position.z)**2<260*260,!D.root.visible)return;let At=nt==="flee"||nt==="leap",Bt=nt==="tired";D.root.position.set(O.x,O.y,O.z),D.body.position.y=Et?Math.abs(Math.sin(O.ph))*(At?.07:.025):Bt?Math.sin(E*9)*.008:0,D.yaw=bn(D.yaw,-O.face,At?14:8,U),D.root.rotation.y=D.yaw,D.body.rotation.z=At?Math.sin(O.ph*2)*.05:0;let Xt=nt==="graze"||nt==="pen"&&!Et;D.neckA=Xe(D.neckA,Xt?-2.05:Bt?-1.15:At?-.95:nt==="alert"||nt==="look"||nt==="cornered"?-.32:-.6,Xt?3:7,U),D.neck.rotation.z=D.neckA,D.head.rotation.z=Xt?.5+Math.sin(E*7)*.08:nt==="alert"||nt==="look"?.2:.35,D.head.rotation.y=nt==="look"||nt==="alert"||nt==="cornered"?Math.sin(E*1.6)*.25:0,D.tail.rotation.z=.5+(nt==="alert"||At?.9:Math.sin(E*3)*.2);let Rt=At?.6:Bt?.28:.36,Wt=nt==="leap";for(let Pt of D.legs){let Dt=Pt.front?Pt.s>0?0:Math.PI:(Pt.s>0?Math.PI:0)+(At?.6:0);if(Wt){Pt.hip.rotation.z=Pt.front?.9:-.9,Pt.knee.rotation.z=Pt.front?-1.2:1.1;continue}if(Et){let $t=Math.sin(O.ph+Dt);Pt.hip.rotation.z=$t*Rt,Pt.knee.rotation.z=(Pt.front?-1:1)*Math.max(0,-Math.cos(O.ph+Dt))*Rt*1.1}else Pt.hip.rotation.z=Xe(Pt.hip.rotation.z,0,8,U),Pt.knee.rotation.z=Xe(Pt.knee.rotation.z,0,8,U)}}function q(E,U,O){let D=ot,nt=r.hero,Et=r.vq,At=Et.camp,Bt=nt.x-Et.merW.x,Xt=nt.z-Et.merW.z,Rt=Math.hypot(Bt,Xt);if(D.root.visible=Rt<200,!D.root.visible)return;let Wt=Rt<16||!!O,Pt=Wt?Math.atan2(Bt,Xt):At.rot+.15*Math.sin(E*.3);r.focus&&r.focus.talk&&(Pt=At.rot+Ee(Pn(At.rot,Math.atan2(Bt,Xt)),-.7,.7)),D.yaw=bn(D.yaw,Pt,3,U),D.root.rotation.y=D.yaw,D.root.position.set(Et.merW.x,o.VF+At.base,Et.merW.z),D.root.scale.y=1+Math.sin(E*1.7)*.007;let Dt=!!(O&&O.who==="merchant"&&O.shown<[...O.text].length);D.mouth.scale.y=Dt?.25+Math.abs(Math.sin(E*15))*.9:.3,D.head.rotation.x=Dt?Math.sin(E*5)*.05:0;let[$t,pe]=D.arms;if(Et.delivered){for(let ae of D.arms)ae.sh.rotation.z=Xe(ae.sh.rotation.z,ae.s*2.5,6,U),ae.el.rotation.x=Xe(ae.el.rotation.x,-.3+Math.sin(E*9+ae.s)*.3,8,U);D.root.position.y=o.VF+At.base+Math.abs(Math.sin(E*6))*.06*(r.focus?1:0)}else if(Et.caught&&Wt)pe.sh.rotation.z=Xe(pe.sh.rotation.z,1.35,5,U),pe.el.rotation.x=Xe(pe.el.rotation.x,0,5,U),pe.sh.rotation.x=Xe(pe.sh.rotation.x,-.2,5,U),$t.sh.rotation.z=Xe($t.sh.rotation.z,-.12,5,U);else if(Wt&&Rt>2.5)pe.sh.rotation.z=Xe(pe.sh.rotation.z,2.55,5,U),pe.el.rotation.x=Xe(pe.el.rotation.x,0,5,U),pe.el.rotation.z=Math.sin(E*8)*.45,pe.sh.rotation.x=0,$t.sh.rotation.z=Xe($t.sh.rotation.z,-.12,5,U);else for(let ae of D.arms)ae.sh.rotation.z=Xe(ae.sh.rotation.z,ae.s*.12,4,U),ae.el.rotation.z=Xe(ae.el.rotation.z,0,4,U),ae.el.rotation.x=Xe(ae.el.rotation.x,-.25,4,U),ae.sh.rotation.x=0}function $(){let E=ct.rope;if(E.visible=r.vq.caught&&!r.vq.delivered&&we.root.visible,!E.visible)return;ct.root.updateMatrixWorld(),we.root.updateMatrixWorld();let U=ct.arms[1].wr.getWorldPosition(Oi),O=we.collar.getWorldPosition(xi),D=U.clone().lerp(O,.5);D.y=Math.min(U.y,O.y)-.25,E.geometry.dispose(),E.geometry=new gi(new qs(U.clone(),D,O.clone()),18,.016,5)}function zt(E,U){let O=r.wind,D=X.flag.geometry.attributes.position,nt=X.flagBase;for(let Dt=0;Dt<D.count;Dt++){let $t=nt[Dt*3],pe=nt[Dt*3+1],ae=$t/3.2;D.setXYZ(Dt,$t*(1-O*.05),pe-ae*ae*.25*(1-O),Math.sin(E*(4+O*12)-$t*(1.6+O*1.5))*ae*(.18+O*.42)+Math.sin(E*7+pe*3)*.04*ae)}D.needsUpdate=!0,X.flag.geometry.computeVertexNormals(),X.flag.rotation.y=-.3*O;let Et=X.bell;Et.v+=(-Et.swing*18-Et.v*1.4)*U,Et.swing+=Et.v*U,Et.g.rotation.x=Et.swing+O*.25*Math.sin(E*6);for(let Dt of X.lanterns)Dt.rotation.z=Math.sin(E*(1.6+O*8)+Dt.position.x)*(.06+O*.45),Dt.rotation.x=Math.cos(E*(1.3+O*7))*O*.3;let At=X.drops.geometry.attributes.position,Bt=X.drops.userData.seed;for(let Dt=0;Dt<Bt.length;Dt++){let[$t,pe,ae]=Bt[Dt],be=(E*ae*.9+pe)%1,ve=.15+be*1.6;At.setXYZ(Dt,Math.cos($t)*ve+O*be*3.5,2.35+Math.sin(be*Math.PI)*.7-be*1.8,Math.sin($t)*ve+O*be*1.2)}At.needsUpdate=!0,_.offset.x=E*.03,X.water.material.normalScale.set(.6+O,.6+O);let Xt=X.streaks.geometry.attributes.position,Rt=X.streaks.userData.seed;X.streaks.material.opacity=ue(.15,.8,O)*.55;for(let Dt=0;Dt<Rt.length;Dt++){let[,$t,pe,ae]=Rt[Dt],be=(E*ae*(.6+O*1.6)+Dt*.137)%1,ve=-30+be*60,ze=1.5+O*3.5,Ae=pe+Math.sin(E*2+Dt)*.6,Se=$t+Math.sin(be*9+Dt)*.4;Xt.setXYZ(Dt*2,ve,Se,Ae+be*12-6),Xt.setXYZ(Dt*2+1,ve-ze,Se+.05,Ae+be*12-6-ze*.3)}Xt.needsUpdate=!0;let Wt=X.leaves.geometry.attributes.position,Pt=X.leaves.userData.seed;X.leaves.material.opacity=O*.9;for(let Dt=0;Dt<Pt.length;Dt++){let[$t,pe,ae,be]=Pt[Dt],ve=E*(.5+be)*(.4+O)%1;Wt.setXYZ(Dt,($t+ve*70)%60-30,pe*.6+.4+Math.sin(E*3+Dt)*.5,ae+Math.sin(E+be*6)*2+ve*6)}Wt.needsUpdate=!0;for(let Dt of ht){let $t=Dt.m,[pe,ae]=$t.arms,be=1-Math.exp(-6*U);$t.root.scale.y=1+Math.sin(E*1.6+Dt.base.x)*.006,$t.root.rotation.x=-O*.14+Math.sin(E*9+Dt.base.x)*O*.03;let ve=0,ze=-.12,Ae=-.25,Se=0,me=.12,ge=-.25;if(O>.25&&(ve=-2.4,ze=0,Ae=-1.3),Dt.kind==="seller")Se=-.5+Math.sin(E*2)*.1,ge=-1.2,Dt.pour>0&&(Dt.pour-=U,Se=-1,ge=-.6);else if(Dt.kind==="tea"){let Qe=Math.max(0,Math.sin(E*.5+Dt.ph))**8;Se=-.45-Qe*.7,ge=-1.25-Qe*.9}else Dt.kind==="stand"&&(ve=O>.25?ve:-.2,Se=-.15+Math.sin(E*1.1)*.25*(Dt.talk>0?1:.3),ge=-.6);pe.sh.rotation.x+=(ve-pe.sh.rotation.x)*be,pe.sh.rotation.z+=(ze-pe.sh.rotation.z)*be,pe.el.rotation.x+=(Ae-pe.el.rotation.x)*be,ae.sh.rotation.x+=(Se-ae.sh.rotation.x)*be,ae.sh.rotation.z+=(me-ae.sh.rotation.z)*be,ae.el.rotation.x+=(ge-ae.el.rotation.x)*be,$t.mouth.scale.y=Dt.talk>0?.25+Math.abs(Math.sin(E*15))*.9:.3,Dt.talk>0&&(Dt.talk-=U)}}let Nt=-1;function Kt(E,U={}){let O=performance.now(),D=Te?Ee((O-Te)/1e3,0,.1):1/60;Te=O;let nt=he>=0?Ee(E-he,0,.1):1/60;he=E,d.time.value=E,d.wind.value=Xe(d.wind.value,r.wind,3,nt),sn++,Ne=Ne*.97+(D>1/38?1:0)*.03,sn>90&&Ne>.6&&fn>1.01&&(yi(hi,ni,Math.max(1,fn-.25)),Ne=0,sn=0);let Et=r.hero;if(!Et||!ct)return;Nt!==r.vq.camp&&(lt(),Nt=r.vq.camp),W(U.budget!=null?U.budget:4,Et.x,Et.z),it(E,nt),Bn(E,nt),Ms(E,nt),Si(E,nt),q(E,nt,U.dlg),$(),(s.rad(h.position.x,h.position.z)<120||r.scope)&&zt(E,nt);let At=0;for(let me=0;me<r.coins.length&&At<fe;me++){let ge=r.coins[me];ge.taken||(ge.x-Et.x)**2+(ge.z-Et.z)**2>3600||(ui.position.set(ge.x,ge.y+Math.sin(E*2+me)*.08,ge.z),ui.rotation.set(Math.PI/2,E*3+me,0),ui.scale.setScalar(1),ui.updateMatrix(),De.setMatrixAt(At++,ui.matrix))}De.count=At,De.instanceMatrix.needsUpdate=!0;for(let[me,ge]of te)ge.rotation.y=Math.sin(E*2+ge.position.x)*.3,ge.material.color.set(r.reached.has(me)?"#FFD23F":"#F4F1EA");if(It.visible=r.vq.caught&&!r.vq.delivered,It.visible){let me=.5+.5*Math.sin(E*5);It.userData.ring.scale.setScalar(1+me*.08),It.userData.arrow.position.y=1.9+me*.25,It.userData.arrow.rotation.y=E*2}for(let me of Lt.flames){let ge=.75+Math.sin(E*13+me.userData.i*2)*.18;me.scale.set(1,ge,1),me.position.y=.12+me.userData.h0*ge/2}for(let me of Lt.glows)me.material.opacity=.5+Math.sin(E*11)*.08;Lt.lantern.rotation.z=Math.sin(E*1.6)*.08;let Bt=Math.abs(h.position.x-(o.x+60))<160&&Math.abs(h.position.z-o.z)<90;for(let me of Yt){if(me.visible=Bt,!Bt)continue;let ge=me.userData,Qe=ge.ax+Math.sin(E*.45+ge.ph)*2.2,Ze=ge.az+Math.sin(E*.7+ge.ph*2)*.9;me.position.set(Qe,t.H(Qe,Ze)+.7+Math.sin(E*1.3+ge.ph)*.35,Ze),me.rotation.y=Math.cos(E*.45+ge.ph)>0?-Math.PI/2:Math.PI/2;let ln=Math.sin(E*22+ge.ph)*1.1;ge.l.rotation.y=ln,ge.r.rotation.y=-ln}for(let me of Ht){let ge=me.userData,Qe=E*ge.sp+ge.ph;me.position.set(ge.cx+Math.cos(Qe)*ge.rad,ge.y+Math.sin(E+ge.ph)*.8,ge.cz+Math.sin(Qe)*ge.rad),me.rotation.y=-Qe;let Ze=Math.sin(E*8+ge.ph)*.6;ge.l.rotation.z=Ze,ge.r.rotation.z=-Ze}oe(nt);let Xt=s.rad(Et.x,Et.z),Rt=ue(195,170,Xt)*ue(78,62,Et.y),Wt=ue(50,95,Et.y)*ue(200,120,Xt),Pt=Math.max(0,h.position.y-t.SEA),Dt=ue(20,420,Pt),$t=r.scope?900:ee(ee(320,90,Rt),900,Dt),pe=r.scope?6500:ee(ee(3600,1200,Rt),6200,Dt);a.fog.near=Xe(a.fog.near,$t,2,nt),a.fog.far=Xe(a.fog.far,pe,2,nt),X.scope.visible=!r.scope;let ae=Et.mode==="drive"?Math.abs(r.car.vf):0;if(Ln=Xe(Ln,r.scope?13:62+Ee(ae-8,0,22)*.35,3,nt),r.scope&&(Ln=13),h.fov=Ln,h.updateProjectionMatrix(),h.position.copy(dt.pos),h.lookAt(dt.tgt),U.shake>0){let me=U.shake*.25;h.position.x+=(Math.random()-.5)*me,h.position.y+=(Math.random()-.5)*me}b.position.copy(h.position);let be=h.position.x,ve=h.position.z,ze=(r.scope?500:0)+ue(40,95,h.position.y)*160;for(let me of N){let ge=(me.x-be)**2+(me.z-ve)**2,Qe=me.small?me.far:me.far+ze,Ze=ge<Qe*Qe;if(me.lo){let ln=ge<me.lodAt*me.lodAt&&!r.scope;me.m.visible=Ze&&ln,me.lo.visible=Ze&&!ln}else me.m.visible=Ze}at.update(E,nt,h.position,Et,U.budget!=null?U.budget:6);let Ae=Math.round(Et.x/.25)*.25,Se=Math.round(Et.z/.25)*.25;y.target.position.set(Ae,Et.y,Se),y.position.set(Ae+x.x*90,Et.y+x.y*90,Se+x.z*90),g(Et),n.render(a,h)}let S=new J,V=new Ot;function g(E){let U=d.see.value;if(r.scope||E.mode==="lift"||E.mode==="carry"){U.w=0;return}h.updateMatrixWorld(),S.set(E.x,E.y+.9,E.z).applyMatrix4(h.matrixWorldInverse);let O=-S.z;if(O<.3){U.w=0;return}S.set(E.x,E.y+.9,E.z).project(h),n.getDrawingBufferSize(V);let D=1.6/(O*Math.tan(h.fov*Math.PI/360))*(V.y/2);U.set((S.x*.5+.5)*V.x,(S.y*.5+.5)*V.y,O,D)}let w=new J;function F(E,U,O){return w.set(E,U,O).project(h),{x:(w.x+1)/2,y:(1-w.y)/2,vis:w.z<1&&w.z>-1}}function z(E=160){a.updateMatrixWorld(),d.see.value.w=0;let U=new J;ot.head.getWorldPosition(U);let O=n.domElement.width,D=n.domElement.height,nt=new oi(28,O/D,.05,1200),Et=new J(Math.sin(ot.root.rotation.y),0,Math.cos(ot.root.rotation.y));nt.position.copy(U).addScaledVector(Et,1.75).add(new J(0,.05,0)),nt.lookAt(U.x,U.y-.02,U.z),b.position.copy(nt.position),y.target.position.copy(U),y.position.set(U.x+x.x*60,U.y+x.y*60,U.z+x.z*60);let At=[ct&&ct.root.visible,we.root.visible];ct&&(ct.root.visible=!1),we.root.visible=!1,n.render(a,nt),ct&&(ct.root.visible=At[0]),we.root.visible=At[1];let Bt=document.createElement("canvas");Bt.width=Bt.height=E;let Xt=Math.min(O,D);return Bt.getContext("2d").drawImage(n.domElement,(O-Xt)/2,(D-Xt)/2,Xt,Xt,0,0,E,E),Bt.toDataURL("image/jpeg",.9)}let L=(E=1024)=>at.mapShot(E),Z=()=>{for(let E of ht)E.kind==="seller"&&(E.pour=1.4,E.talk=3)},ut=E=>{let U=ht.filter(O=>O.kind===E);U.length&&(U[Math.floor(Math.random()*U.length)].talk=3)},yt=()=>{X.bell.v+=2.4};function _t(){if(!ct)return null;ct.root.updateMatrixWorld(!0);let E=new J,U=r.hero;ct.head.getWorldPosition(E);let O=E.y+.115-(U.y+j.pose.by);ct.arms[0].sh.getWorldPosition(E);let D=E.clone();return ct.arms[1].sh.getWorldPosition(E),{height:+O.toFixed(3),shoulders:+D.distanceTo(E).toFixed(3),leg:+ct.pelvis.position.y.toFixed(3)}}return{IV:at,setSize:yi,render:Kt,project:F,heading:ke,cam:dt,portrait:z,mapShot:L,buildHi:W,setHero:Y,heroDims:_t,pourTea:Z,talkNpc:ut,ringBell:yt,renderer:n,scene:a,camera:h,U:d,fx:X,npcs:ht,get pr(){return fn},get hiLeft(){return at.pending()}}}function c0(i,t={}){let e=performance.now(),n=Qf(t.map||jf),s=performance.now()-e,o=e0(n),r=l0({renderer:t.renderer,sign:t.sign},n,o),a=o.S,c=r.cam,h=Math.round(performance.now()-e);function d(y,b={}){r.setHero(y);let p=o.enter(y.id,b);return c.yaw=a.hero.face,c.pitch=.26,c.init=!1,r.IV.warm(a.hero.x,a.hero.z,a.hero.y+3),p}function f(y,b={}){a.scope?(c.scopeYaw=Ee(c.scopeYaw+(b.dyaw||0)*.35,-.9,.9),c.scopePitch=Ee(c.scopePitch+(b.dpitch||0)*-.3,-.75,.2)):(c.yaw+=b.dyaw||0,c.pitch=Ee(c.pitch+(b.dpitch||0),-.3,1.15),b.dyaw&&(c.dragT=1.6));let p=b.jx||0,_=b.jy||0,A=Math.cos(c.yaw),P=Math.sin(c.yaw),M={mx:A*_-P*p,mz:P*_+A*p,mag:b.mag||0,jump:!!b.jump,sneak:!!b.sneak,jx:p,jy:_,kx:b.kx,ky:b.ky,hand:!!b.hand},N=o.step(y,M);for(let R of N)Array.isArray(R)&&R[0]==="respawn"&&(c.yaw=a.hero.face,c.init=!1,r.IV.warm(a.hero.x,a.hero.z,a.hero.y+3));return N}function m(y){return y==="scope"?(o.interact("scope"),c.scopeYaw=0,c.scopePitch=-.2,a.scope):y==="tea"?(o.interact("tea"),r.pourTea(),!0):y==="chat"?(r.talkNpc("tea"),!0):y==="bell"?(r.ringBell(),!0):o.interact(y)}return{G:n,sim:o,view:r,S:a,cam:c,enter:d,step:f,interact:m,threats:()=>o.beasts.filter(y=>y.state==="chase"||y.state==="charge"||y.state==="notice").map(y=>({kind:y.kind,x:y.x,y:y.y,z:y.z,state:y.state})),render:r.render,setSize:r.setSize,project:r.project,heading:r.heading,nearInteract:o.nearInteract,skipWait:o.skipWait,objective:o.objective,trackTarget:o.trackTarget,setTrack:o.setTrack,have:o.have,snapshot:o.snapshot,restore:y=>{let b=o.restore(y);if(b){let p=o.S.hero;r.IV.warm(p.x,p.z,p.y+3),r.cam.init=!1,r.cam.yaw=p.face}return b},respawn:o.respawn,setTools:o.setTools,mapShot:r.mapShot,portrait:r.portrait,ground:n.H,warm:(y,b,p)=>r.IV.warm(y,b,p),info:{HALF:n.HALF,M:n.M,V:n.V,I:n.I,SEA:n.SEA,rest:n.restPoints,buildMs:h,geoMs:Math.round(s)},renderer:r.renderer,scene:r.scene,camera:r.camera,U:r.U,get pr(){return r.pr}}}return m0(Ry);})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
