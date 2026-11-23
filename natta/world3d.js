/* نطّة — العالم المفتوح 3D. يتضمن three.js r187 (MIT, © 2010-2026 three.js authors) */
var NattaWorld3D=(()=>{var oc=Object.defineProperty;var bf=Object.getOwnPropertyDescriptor;var Af=Object.getOwnPropertyNames;var Ef=Object.prototype.hasOwnProperty;var Tf=(i,t)=>{for(var e in t)oc(i,e,{get:t[e],enumerable:!0})},Cf=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Af(t))!Ef.call(i,s)&&s!==e&&oc(i,s,{get:()=>t[s],enumerable:!(n=bf(t,s))||n.enumerable});return i};var Rf=i=>Cf(oc({},"__esModule",{value:!0}),i);var D_={};Tf(D_,{createWorld:()=>wf,makeRenderer:()=>cf,supported:()=>hf});var nl="188dev";var Lu=0,Xc=1,Du=2;var Ps=1,zu=2,fr=3,ms=0,On=1,Ve=2,Is=0,pr=1,ni=2,qc=3,Yc=4,Nu=5;var Fs=100,Uu=101,Ou=102,Bu=103,ku=104,Vu=200,Hu=201,Gu=202,Wu=203,Zc=204,Jc=205,Xu=206,qu=207,Yu=208,Zu=209,Ju=210,$u=211,Ku=212,ju=213,Qu=214,xa=0,_a=1,ya=2,ir=3,va=4,Ma=5,Sa=6,wa=7,yo=0,td=1,ed=2,Vi=0,$c=1,Kc=2,jc=3,vo=4,Qc=5,th=6,eh=7;var nh=300,Ls=301,mr=302,il=303,sl=304,cs=1e3,zi=1001,ba=1002,Un=1003,nd=1004;var Mo=1005;var jn=1006,rl=1007;var es=1008;var oi=1009,ih=1010,sh=1011,gr=1012,ol=1013,Pi=1014,wi=1015,Ii=1016,al=1017,ll=1018,Ds=1020,rh=35902,oh=35899,ah=1021,lh=1022,Fi=1023,Ki=1026,ns=1027,cl=1028,hl=1029,gs=1030,ul=1031;var dl=1033,So=33776,wo=33777,bo=33778,Ao=33779,fl=35840,pl=35841,ml=35842,gl=35843,xl=36196,_l=37492,yl=37496,vl=37488,Ml=37489,Eo=37490,Sl=37491,wl=37808,bl=37809,Al=37810,El=37811,Tl=37812,Cl=37813,Rl=37814,Pl=37815,Il=37816,Fl=37817,Ll=37818,Dl=37819,zl=37820,Nl=37821,Ul=36492,Ol=36494,Bl=36495,kl=36283,Vl=36284,To=36285,Hl=36286;var Ur=2300,Aa=2301,ma=2302,Dc=2303,zc=2400,Nc=2401,Uc=2402;var id=3200;var Co=0,sd=1,is="",Kn="srgb",Or="srgb-linear",Br="linear",ln="srgb";var ga=7680;var rd=519,od=512,ad=513,ld=514,ch=515,cd=516,hd=517,hh=518,uh=519,dh=35044;var fh="300 es",gi=2e3,sr=2001;function Pf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}var If={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};typeof Float16Array<"u"&&(If.Float16Array=Float16Array);function Ff(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ud(){let i=kr("canvas");return i.style.display="block",i}var Yh={},rr=null;function Vr(...i){let t="THREE."+i.shift();rr?rr("log",t,...i):console.log(t,...i)}function dd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ue(...i){i=dd(i);let t="THREE."+i.shift();if(rr)rr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ke(...i){i=dd(i);let t="THREE."+i.shift();if(rr)rr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Dr(...i){let t=i.join(" ");t in Yh||(Yh[t]=!0,Ue(...i))}function fd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var pd={[xa]:xa,[ya]:Sa,[va]:va,[ir]:Ma,[_a]:_a,[Sa]:ya,[wa]:wa,[Ma]:ir},Ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ac=Math.PI/180,Ea=180/Math.PI;function xs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vn[i&255]+Vn[i>>8&255]+Vn[i>>16&255]+Vn[i>>24&255]+"-"+Vn[t&255]+Vn[t>>8&255]+"-"+Vn[t>>16&15|64]+Vn[t>>24&255]+"-"+Vn[e&63|128]+Vn[e>>8&255]+"-"+Vn[e>>16&255]+Vn[e>>24&255]+Vn[n&255]+Vn[n>>8&255]+Vn[n>>16&255]+Vn[n>>24&255]).toLowerCase()}function tn(i,t,e){return Math.max(t,Math.min(e,i))}function Lf(i,t){return(i%t+t)%t}function lc(i,t,e){return(1-e)*i+e*t}function md(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function gd(i,t){if(t.constructor===Float32Array)return i;let e=Gl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function xd(i,t){if(t.constructor===Float32Array)return i;let e=Gl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var yh=class yh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=tn(this.x,t.x,e.x),this.y=tn(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=tn(this.x,t,e),this.y=tn(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tn(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yh.prototype.isVector2=!0;var wt=yh,xi=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],p=r[o+0],m=r[o+1],g=r[o+2],E=r[o+3];if(d!==E||l!==p||c!==m||u!==g){let x=l*p+c*m+u*g+d*E;x<0&&(p=-p,m=-m,g=-g,E=-E,x=-x);let _=1-a;if(x<.9995){let A=Math.acos(x),P=Math.sin(A);_=Math.sin(_*A)/P,a=Math.sin(a*A)/P,l=l*_+p*a,c=c*_+m*a,u=u*_+g*a,d=d*_+E*a}else{l=l*_+p*a,c=c*_+m*a,u=u*_+g*a,d=d*_+E*a;let A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],p=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+u*d+l*m-c*p,t[e+1]=l*g+u*p+c*d-a*m,t[e+2]=c*g+u*m+a*p-l*d,t[e+3]=u*g-a*d-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),p=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=p*u*d+c*m*g,this._y=c*m*d-p*u*g,this._z=c*u*g+p*m*d,this._w=c*u*d-p*m*g;break;case"YXZ":this._x=p*u*d+c*m*g,this._y=c*m*d-p*u*g,this._z=c*u*g-p*m*d,this._w=c*u*d+p*m*g;break;case"ZXY":this._x=p*u*d-c*m*g,this._y=c*m*d+p*u*g,this._z=c*u*g+p*m*d,this._w=c*u*d-p*m*g;break;case"ZYX":this._x=p*u*d-c*m*g,this._y=c*m*d+p*u*g,this._z=c*u*g-p*m*d,this._w=c*u*d+p*m*g;break;case"YZX":this._x=p*u*d+c*m*g,this._y=c*m*d+p*u*g,this._z=c*u*g-p*m*d,this._w=c*u*d-p*m*g;break;case"XZY":this._x=p*u*d-c*m*g,this._y=c*m*d-p*u*g,this._z=c*u*g+p*m*d,this._w=c*u*d+p*m*g;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],p=n+a+d;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>d){let m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},vh=class vh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=tn(this.x,t.x,e.x),this.y=tn(this.y,t.y,e.y),this.z=tn(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=tn(this.x,t,e),this.y=tn(this.y,t,e),this.z=tn(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tn(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return cc.copy(this).projectOnVector(t),this.sub(cc)}reflect(t){return this.sub(cc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vh.prototype.isVector3=!0;var j=vh,cc=new j,Zh=new xi,Mh=class Mh{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],p=n[2],m=n[5],g=n[8],E=s[0],x=s[3],_=s[6],A=s[1],P=s[4],R=s[7],O=s[2],L=s[5],M=s[8];return r[0]=o*E+a*A+l*O,r[3]=o*x+a*P+l*L,r[6]=o*_+a*R+l*M,r[1]=c*E+u*A+d*O,r[4]=c*x+u*P+d*L,r[7]=c*_+u*R+d*M,r[2]=p*E+m*A+g*O,r[5]=p*x+m*P+g*L,r[8]=p*_+m*R+g*M,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,p=a*l-u*r,m=c*r-o*l,g=e*d+n*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/g;return t[0]=d*E,t[1]=(s*c-u*n)*E,t[2]=(a*n-s*o)*E,t[3]=p*E,t[4]=(u*e-s*l)*E,t[5]=(s*r-a*e)*E,t[6]=m*E,t[7]=(n*l-c*e)*E,t[8]=(o*e-n*r)*E,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Dr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hc.makeScale(t,e)),this}rotate(t){return Dr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hc.makeRotation(-t)),this}translate(t,e){return Dr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Mh.prototype.isMatrix3=!0;var Xe=Mh,hc=new Xe,Jh=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$h=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Df(){let i={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ln&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ln&&(s.r=nr(s.r),s.g=nr(s.g),s.b=nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===is?Br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Or]:{primaries:t,whitePoint:n,transfer:Br,toXYZ:Jh,fromXYZ:$h,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:t,whitePoint:n,transfer:ln,toXYZ:Jh,fromXYZ:$h,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),i}var nn=Df();function $i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Os,Ta=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Os===void 0&&(Os=kr("canvas")),Os.width=t.width,Os.height=t.height;let s=Os.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Os}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=kr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$i(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($i(e[n]/255)*255):e[n]=$i(e[n]);return{data:e,width:t.width,height:t.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zf=0,or=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=xs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(uc(s[o].image)):r.push(uc(s[o]))}else r=uc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function uc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ta.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}var Nf=0,dc=new j,Qn=class i extends Ui{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=zi,s=zi,r=jn,o=es,a=Fi,l=oi,c=i.DEFAULT_ANISOTROPY,u=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=xs(),this.name="",this.source=new or(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(dc).x}get height(){return this.source.getSize(dc).y}get depth(){return this.source.getSize(dc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ue(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ue(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cs:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cs:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=nh;Qn.DEFAULT_ANISOTROPY=1;var Sh=class Sh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){let e=tn(t.w,-1,1);this.w=2*Math.acos(e);let n=Math.sqrt(1-e*e);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],p=l[1],m=l[5],g=l[9],E=l[2],x=l[6],_=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-E)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+E)<.1&&Math.abs(g+x)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let P=(c+1)/2,R=(m+1)/2,O=(_+1)/2,L=(u+p)/4,M=(d+E)/4,F=(g+x)/4;return P>R&&P>O?P<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(P),s=L/n,r=M/n):R>O?R<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),n=L/s,r=F/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=M/r,s=F/r),this.set(n,s,r,e),this}let A=Math.sqrt((x-g)*(x-g)+(d-E)*(d-E)+(p-u)*(p-u));return Math.abs(A)<.001&&(A=1),this.x=(x-g)/A,this.y=(d-E)/A,this.z=(p-u)/A,this.w=Math.acos((c+m+_-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=tn(this.x,t.x,e.x),this.y=tn(this.y,t.y,e.y),this.z=tn(this.z,t.z,e.z),this.w=tn(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=tn(this.x,t,e),this.y=tn(this.y,t,e),this.z=tn(this.z,t,e),this.w=tn(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tn(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sh.prototype.isVector4=!0;var xn=Sh,Ca=class extends Ui{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xn(0,0,t,e),this.scissorTest=!1,this.viewport=new xn(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Qn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++){let o=this.textures[s],a=o.images?o.images[0]:o.image;a.width=t,a.height=e,a.depth=n,o.isData3DTexture!==!0&&(o.isArrayTexture=a.depth>1)}this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new or(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends Ca{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Hr=class extends Qn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ra=class extends Qn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var el=class el{constructor(t,e,n,s,r,o,a,l,c,u,d,p,m,g,E,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,d,p,m,g,E,x)}set(t,e,n,s,r,o,a,l,c,u,d,p,m,g,E,x){let _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=s,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=d,_[14]=p,_[3]=m,_[7]=g,_[11]=E,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new el().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Bs.setFromMatrixColumn(t,0).length(),r=1/Bs.setFromMatrixColumn(t,1).length(),o=1/Bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let p=o*u,m=o*d,g=a*u,E=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=p-E*c,e[9]=-a*l,e[2]=E-p*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){let p=l*u,m=l*d,g=c*u,E=c*d;e[0]=p+E*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=m*a-g,e[6]=E+p*a,e[10]=o*l}else if(t.order==="ZXY"){let p=l*u,m=l*d,g=c*u,E=c*d;e[0]=p-E*a,e[4]=-o*d,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*u,e[9]=E-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let p=o*u,m=o*d,g=a*u,E=a*d;e[0]=l*u,e[4]=g*c-m,e[8]=p*c+E,e[1]=l*d,e[5]=E*c+p,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let p=o*l,m=o*c,g=a*l,E=a*c;e[0]=l*u,e[4]=E-p*d,e[8]=g*d+m,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*d+g,e[10]=p-E*d}else if(t.order==="XZY"){let p=o*l,m=o*c,g=a*l,E=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=p*d+E,e[5]=o*u,e[9]=m*d-g,e[2]=g*d-m,e[6]=a*u,e[10]=E*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uf,t,Of)}lookAt(t,e,n){let s=this.elements;return li.subVectors(t,e),li.lengthSq()===0&&(li.z=1),li.normalize(),rs.crossVectors(n,li),rs.lengthSq()===0&&(Math.abs(n.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),rs.crossVectors(n,li)),rs.normalize(),Oo.crossVectors(li,rs),s[0]=rs.x,s[4]=Oo.x,s[8]=li.x,s[1]=rs.y,s[5]=Oo.y,s[9]=li.y,s[2]=rs.z,s[6]=Oo.z,s[10]=li.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],p=n[9],m=n[13],g=n[2],E=n[6],x=n[10],_=n[14],A=n[3],P=n[7],R=n[11],O=n[15],L=s[0],M=s[4],F=s[8],Z=s[12],k=s[1],at=s[5],ft=s[9],et=s[13],Mt=s[2],it=s[6],yt=s[10],lt=s[14],Rt=s[3],vt=s[7],Nt=s[11],Yt=s[15];return r[0]=o*L+a*k+l*Mt+c*Rt,r[4]=o*M+a*at+l*it+c*vt,r[8]=o*F+a*ft+l*yt+c*Nt,r[12]=o*Z+a*et+l*lt+c*Yt,r[1]=u*L+d*k+p*Mt+m*Rt,r[5]=u*M+d*at+p*it+m*vt,r[9]=u*F+d*ft+p*yt+m*Nt,r[13]=u*Z+d*et+p*lt+m*Yt,r[2]=g*L+E*k+x*Mt+_*Rt,r[6]=g*M+E*at+x*it+_*vt,r[10]=g*F+E*ft+x*yt+_*Nt,r[14]=g*Z+E*et+x*lt+_*Yt,r[3]=A*L+P*k+R*Mt+O*Rt,r[7]=A*M+P*at+R*it+O*vt,r[11]=A*F+P*ft+R*yt+O*Nt,r[15]=A*Z+P*et+R*lt+O*Yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],p=t[10],m=t[14],g=t[3],E=t[7],x=t[11],_=t[15],A=l*m-c*p,P=a*m-c*d,R=a*p-l*d,O=o*m-c*u,L=o*p-l*u,M=o*d-a*u;return e*(E*A-x*P+_*R)-n*(g*A-x*O+_*L)+s*(g*P-E*O+_*M)-r*(g*R-E*L+x*M)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],p=t[10],m=t[11],g=t[12],E=t[13],x=t[14],_=t[15],A=e*a-n*o,P=e*l-s*o,R=e*c-r*o,O=n*l-s*a,L=n*c-r*a,M=s*c-r*l,F=u*E-d*g,Z=u*x-p*g,k=u*_-m*g,at=d*x-p*E,ft=d*_-m*E,et=p*_-m*x,Mt=A*et-P*ft+R*at+O*k-L*Z+M*F;if(Mt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let it=1/Mt;return t[0]=(a*et-l*ft+c*at)*it,t[1]=(s*ft-n*et-r*at)*it,t[2]=(E*M-x*L+_*O)*it,t[3]=(p*L-d*M-m*O)*it,t[4]=(l*k-o*et-c*Z)*it,t[5]=(e*et-s*k+r*Z)*it,t[6]=(x*R-g*M-_*P)*it,t[7]=(u*M-p*R+m*P)*it,t[8]=(o*ft-a*k+c*F)*it,t[9]=(n*k-e*ft-r*F)*it,t[10]=(g*L-E*R+_*A)*it,t[11]=(d*R-u*L-m*A)*it,t[12]=(a*Z-o*at-l*F)*it,t[13]=(e*at-n*Z+s*F)*it,t[14]=(E*P-g*O-x*A)*it,t[15]=(u*O-d*P+p*A)*it,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,p=r*c,m=r*u,g=r*d,E=o*u,x=o*d,_=a*d,A=l*c,P=l*u,R=l*d,O=n.x,L=n.y,M=n.z;return s[0]=(1-(E+_))*O,s[1]=(m+R)*O,s[2]=(g-P)*O,s[3]=0,s[4]=(m-R)*L,s[5]=(1-(p+_))*L,s[6]=(x+A)*L,s[7]=0,s[8]=(g+P)*M,s[9]=(x-A)*M,s[10]=(1-(p+E))*M,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Bs.set(s[0],s[1],s[2]).length(),a=Bs.set(s[4],s[5],s[6]).length(),l=Bs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ai.copy(this);let c=1/o,u=1/a,d=1/l;return Ai.elements[0]*=c,Ai.elements[1]*=c,Ai.elements[2]*=c,Ai.elements[4]*=u,Ai.elements[5]*=u,Ai.elements[6]*=u,Ai.elements[8]*=d,Ai.elements[9]*=d,Ai.elements[10]*=d,e.setFromRotationMatrix(Ai),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=gi,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(n-s),p=(e+t)/(e-t),m=(n+s)/(n-s),g,E;if(l)g=r/(o-r),E=o*r/(o-r);else if(a===gi)g=-(o+r)/(o-r),E=-2*o*r/(o-r);else if(a===sr)g=-o/(o-r),E=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=gi,l=!1){let c=this.elements,u=2/(e-t),d=2/(n-s),p=-(e+t)/(e-t),m=-(n+s)/(n-s),g,E;if(l)g=1/(o-r),E=o/(o-r);else if(a===gi)g=-2/(o-r),E=-(o+r)/(o-r);else if(a===sr)g=-1/(o-r),E=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};el.prototype.isMatrix4=!0;var sn=el,Bs=new j,Ai=new sn,Uf=new j(0,0,0),Of=new j(1,1,1),rs=new j,Oo=new j,li=new j,Kh=new sn,jh=new xi,_i=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(tn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jh.setFromEuler(this),this.setFromQuaternion(jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_i.DEFAULT_ORDER="XYZ";var Gr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Bf=0,Qh=new j,ks=new xi,Wi=new sn,Bo=new j,wr=new j,kf=new j,Vf=new xi,tu=new j(1,0,0),eu=new j(0,1,0),nu=new j(0,0,1),iu={type:"added"},Hf={type:"removed"},Vs={type:"childadded",child:null},fc={type:"childremoved",child:null},_n=class i extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new j,e=new _i,n=new xi,s=new j(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new sn},normalMatrix:{value:new Xe}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(tu,t)}rotateY(t){return this.rotateOnAxis(eu,t)}rotateZ(t){return this.rotateOnAxis(nu,t)}translateOnAxis(t,e){return Qh.copy(t).applyQuaternion(this.quaternion),this.position.add(Qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tu,t)}translateY(t){return this.translateOnAxis(eu,t)}translateZ(t){return this.translateOnAxis(nu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Bo.copy(t):Bo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(wr,Bo,this.up):Wi.lookAt(Bo,wr,this.up),this.quaternion.setFromRotationMatrix(Wi),s&&(Wi.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(Wi),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ke("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(iu),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null):ke("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hf),fc.child=t,this.dispatchEvent(fc),fc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(iu),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,kf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Vf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1)===!0&&(n=!0),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}return n}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),p=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_n.DEFAULT_UP=new j(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ce=class extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gf={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let E of t.hand.values()){let x=e.getJointPose(E,n),_=this._getHandJoint(c,E);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function pc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var be=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,nn.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=nn.workingColorSpace){return this.r=t,this.g=e,this.b=n,nn.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=nn.workingColorSpace){if(t=Lf(t,1),e=tn(e,0,1),n=tn(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=pc(o,r,t+1/3),this.g=pc(o,r,t),this.b=pc(o,r,t-1/3)}return nn.colorSpaceToWorking(this,s),this}setStyle(t,e=Kn){function n(r){r!==void 0&&parseFloat(r)<1&&Ue("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ue("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ue("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Kn){let n=_d[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ue("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}copyLinearToSRGB(t){return this.r=nr(t.r),this.g=nr(t.g),this.b=nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Kn){return nn.workingToColorSpace(Hn.copy(this),t),Math.round(tn(Hn.r*255,0,255))*65536+Math.round(tn(Hn.g*255,0,255))*256+Math.round(tn(Hn.b*255,0,255))}getHexString(t=Kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=nn.workingColorSpace){nn.workingToColorSpace(Hn.copy(this),e);let n=Hn.r,s=Hn.g,r=Hn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=nn.workingColorSpace){return nn.workingToColorSpace(Hn.copy(this),e),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=Kn){nn.workingToColorSpace(Hn.copy(this),t);let e=Hn.r,n=Hn.g,s=Hn.b;return t!==Kn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(Ms),Ei.s===0&&(Ei.h=Ms.h),Ms.s===0&&(Ms.h=Ei.h);let n=lc(Ei.h,Ms.h,e),s=lc(Ei.s,Ms.s,e),r=lc(Ei.l,Ms.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Hn=new be;be.NAMES=_d;var Wr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new be(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Xr=class extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ti=new j,Xi=new j,mc=new j,qi=new j,Hs=new j,Gs=new j,su=new j,gc=new j,xc=new j,_c=new j,yc=new xn,vc=new xn,Mc=new xn,Ji=class i{constructor(t=new j,e=new j,n=new j){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ti.subVectors(t,e),s.cross(Ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ti.subVectors(s,e),Xi.subVectors(n,e),mc.subVectors(t,e);let o=Ti.dot(Ti),a=Ti.dot(Xi),l=Ti.dot(mc),c=Xi.dot(Xi),u=Xi.dot(mc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let p=1/d,m=(c*l-a*u)*p,g=(o*u-a*l)*p;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qi.x),l.addScaledVector(o,qi.y),l.addScaledVector(a,qi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return yc.setScalar(0),vc.setScalar(0),Mc.setScalar(0),yc.fromBufferAttribute(t,e),vc.fromBufferAttribute(t,n),Mc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(yc,r.x),o.addScaledVector(vc,r.y),o.addScaledVector(Mc,r.z),o}static isFrontFacing(t,e,n,s){return Ti.subVectors(n,e),Xi.subVectors(t,e),Ti.cross(Xi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),Ti.cross(Xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Hs.subVectors(s,n),Gs.subVectors(r,n),gc.subVectors(t,n);let l=Hs.dot(gc),c=Gs.dot(gc);if(l<=0&&c<=0)return e.copy(n);xc.subVectors(t,s);let u=Hs.dot(xc),d=Gs.dot(xc);if(u>=0&&d<=u)return e.copy(s);let p=l*d-u*c;if(p<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),e.copy(n).addScaledVector(Hs,o);_c.subVectors(t,r);let m=Hs.dot(_c),g=Gs.dot(_c);if(g>=0&&m<=g)return e.copy(r);let E=m*c-l*g;if(E<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Gs,a);let x=u*g-m*d;if(x<=0&&d-u>=0&&m-g>=0)return su.subVectors(r,s),a=(d-u)/(d-u+(m-g)),e.copy(s).addScaledVector(su,a);let _=1/(x+E+p);return o=E*_,a=p*_,e.copy(n).addScaledVector(Hs,o).addScaledVector(Gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Oi=class{constructor(t=new j(1/0,1/0,1/0),e=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ci):Ci.fromBufferAttribute(r,o),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ko.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ko.copy(n.boundingBox)),ko.applyMatrix4(t.matrixWorld),this.union(ko)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),Vo.subVectors(this.max,br),Ws.subVectors(t.a,br),Xs.subVectors(t.b,br),qs.subVectors(t.c,br),os.subVectors(Xs,Ws),as.subVectors(qs,Xs),Ss.subVectors(Ws,qs);let e=[0,-os.z,os.y,0,-as.z,as.y,0,-Ss.z,Ss.y,os.z,0,-os.x,as.z,0,-as.x,Ss.z,0,-Ss.x,-os.y,os.x,0,-as.y,as.x,0,-Ss.y,Ss.x,0];return!Sc(e,Ws,Xs,qs,Vo)||(e=[1,0,0,0,1,0,0,0,1],!Sc(e,Ws,Xs,qs,Vo))?!1:(Ho.crossVectors(os,as),e=[Ho.x,Ho.y,Ho.z],Sc(e,Ws,Xs,qs,Vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Yi=[new j,new j,new j,new j,new j,new j,new j,new j],Ci=new j,ko=new Oi,Ws=new j,Xs=new j,qs=new j,os=new j,as=new j,Ss=new j,br=new j,Vo=new j,Ho=new j,ws=new j;function Sc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ws.fromArray(i,r);let a=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),l=t.dot(ws),c=e.dot(ws),u=n.dot(ws);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Fn=new j,Go=new wt,Wf=0,Ze=class extends Ui{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dh,this.updateRanges=[],this.gpuType=wi,this.version=0,this._normalizationScale=t!==void 0?Gl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Go.fromBufferAttribute(this,e),Go.applyMatrix3(t),this.setXY(e,Go.x,Go.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fn.fromBufferAttribute(this,e),Fn.applyMatrix3(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fn.fromBufferAttribute(this,e),Fn.applyMatrix4(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fn.fromBufferAttribute(this,e),Fn.applyNormalMatrix(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fn.fromBufferAttribute(this,e),Fn.transformDirection(t),this.setXYZ(e,Fn.x,Fn.y,Fn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):gd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):xd(t,this.array)}};var qr=class extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Yr=class extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var We=class extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}},Xf=new Oi,Ar=new j,wc=new j,Bi=class{constructor(t=new j,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Xf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ar.subVectors(t,this.center);let e=Ar.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ar,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ar.copy(t.center).add(wc)),this.expandByPoint(Ar.copy(t.center).sub(wc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},qf=0,mi=new sn,bc=new _n,Ys=new j,ci=new Oi,Er=new Oi,Li=new j,Wo=new j,Xo=new j,$e=class i extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pf(t)?Yr:qr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,e,n){return mi.makeTranslation(t,e,n),this.applyMatrix4(mi),this}scale(t,e,n){return mi.makeScale(t,e,n),this.applyMatrix4(mi),this}lookAt(t){return bc.lookAt(t),bc.updateMatrix(),this.applyMatrix4(bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new We(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ci.setFromBufferAttribute(r),this.morphTargetsRelative?(Wo.addVectors(this.boundingBox.min,ci.min),Xo.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Wo),this.boundingBox.expandByPoint(Xo)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){let n=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Er.setFromBufferAttribute(a),this.morphTargetsRelative?(Wo.addVectors(ci.min,Er.min),Xo.addVectors(ci.max,Er.max),ci.expandByPoint(Wo),ci.expandByPoint(Xo)):(ci.expandByPoint(Er.min),ci.expandByPoint(Er.max))}ci.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Li.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Li));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Li.fromBufferAttribute(a,c),l&&(Ys.fromBufferAttribute(t,c),Li.add(Ys)),s=Math.max(s,n.distanceToSquared(Li))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ze(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let Z=0;Z<n.count;Z++)a[Z]=new j,l[Z]=new j;let u=new j,d=new j,p=new j,m=new wt,g=new wt,E=new wt,x=new j,_=new j;function A(Z,k,at){c[Z]=c[k]=c[at]=1,u.fromBufferAttribute(n,Z),d.fromBufferAttribute(n,k),p.fromBufferAttribute(n,at),m.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,k),E.fromBufferAttribute(r,at),d.sub(u),p.sub(u),g.sub(m),E.sub(m);let ft=1/(g.x*E.y-E.x*g.y);isFinite(ft)&&(x.copy(d).multiplyScalar(E.y).addScaledVector(p,-g.y).multiplyScalar(ft),_.copy(p).multiplyScalar(g.x).addScaledVector(d,-E.x).multiplyScalar(ft),a[Z].add(x),a[k].add(x),a[at].add(x),l[Z].add(_),l[k].add(_),l[at].add(_))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let Z=0,k=P.length;Z<k;++Z){let at=P[Z],ft=at.start,et=at.count;for(let Mt=ft,it=Math.min(t.count,ft+et);Mt<it;Mt+=3)A(t.getX(Mt+0),t.getX(Mt+1),t.getX(Mt+2))}let R=new j,O=new j,L=new j,M=new j;function F(Z){L.fromBufferAttribute(s,Z),M.copy(L);let k=a[Z];R.copy(k),R.sub(L.multiplyScalar(L.dot(k))).normalize(),R.lengthSq()===0&&(Math.abs(M.x)<.9?R.set(1,0,0):R.set(0,1,0),R.crossVectors(M,R).normalize()),O.crossVectors(M,k);let ft=O.dot(l[Z])<0?-1:1;o.setXYZW(Z,R.x,R.y,R.z,ft)}for(let Z=0,k=n.count;Z<k;++Z)c[Z]&&F(Z);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new j,r=new j,o=new j,a=new j,l=new j,c=new j,u=new j,d=new j;if(t)for(let p=0,m=t.count;p<m;p+=3){let g=t.getX(p+0),E=t.getX(p+1),x=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,E),o.fromBufferAttribute(e,x),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,x),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Li.fromBufferAttribute(t,e),Li.normalize(),t.setXYZ(e,Li.x,Li.y,Li.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,d=a.normalized,p=new c.constructor(l.length*u),m=0,g=0;for(let E=0,x=l.length;E<x;E++){a.isInterleavedBufferAttribute?m=l[E]*a.data.stride+a.offset:m=l[E]*u;for(let _=0;_<u;_++)p[g++]=c[m++]}return new Ze(p,u,d)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let p=c[u],m=t(p,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){let m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let p=0,m=d.length;p<m;p++)u.push(d[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=dh,this.updateRanges=[],this.version=0,this.uuid=xs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=ru(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=ru(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function ru(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=xs()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var $n=new j,Zr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Gl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$n.fromBufferAttribute(this,e),$n.applyMatrix4(t),this.setXYZ(e,$n.x,$n.y,$n.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$n.fromBufferAttribute(this,e),$n.applyNormalMatrix(t),this.setXYZ(e,$n.x,$n.y,$n.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$n.fromBufferAttribute(this,e),$n.transformDirection(t),this.setXYZ(e,$n.x,$n.y,$n.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Vr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Vr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):gd(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):xd(t,this.data.array)}},Ac=new j,Yf=new j,Zf=new Xe,Ri=class{constructor(t=new j(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ac.subVectors(n,e).cross(Yf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ac),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Zf.getNormalMatrix(t),s=this.coplanarPoint(Ac).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Jf=0,yi=class extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=pr,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Jc,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ga,this.stencilZFail=ga,this.stencilZPass=ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ue(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ue(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new be().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ri().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new wt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new wt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ti=class extends yi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zs,Tr=new j,Js=new j,$s=new j,Ks=new wt,Cr=new wt,yd=new sn,qo=new j,Rr=new j,Yo=new j,ou=new wt,Ec=new wt,au=new wt,si=class extends _n{constructor(t=new ti){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new $e;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Pa(e,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new Zr(n,3,0,!1)),Zs.setAttribute("uv",new Zr(n,2,3,!1))}this.geometry=Zs,this.material=t,this.center=new wt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),yd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),$s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-$s.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Zo(qo.set(-.5,-.5,0),$s,o,Js,s,r),Zo(Rr.set(.5,-.5,0),$s,o,Js,s,r),Zo(Yo.set(.5,.5,0),$s,o,Js,s,r),ou.set(0,0),Ec.set(1,0),au.set(1,1);let a=t.ray.intersectTriangle(qo,Rr,Yo,!1,Tr);if(a===null&&(Zo(Rr.set(-.5,.5,0),$s,o,Js,s,r),Ec.set(0,1),a=t.ray.intersectTriangle(qo,Yo,Rr,!1,Tr),a===null))return;let l=t.ray.origin.distanceTo(Tr);l<t.near||l>t.far||e.push({distance:l,point:Tr.clone(),uv:Ji.getInterpolation(Tr,qo,Rr,Yo,ou,Ec,au,new wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this.count=t.count,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Zo(i,t,e,n,s,r){Ks.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Cr.x=r*Ks.x-s*Ks.y,Cr.y=s*Ks.x+r*Ks.y):Cr.copy(Ks),i.copy(t),i.x+=Cr.x,i.y+=Cr.y,i.applyMatrix4(yd)}var Zi=new j,Tc=new j,Jo=new j,$o=new j,lr=class{constructor(t=new j,e=new j(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,e),Zi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Tc.copy(t).add(e).multiplyScalar(.5),Jo.copy(e).sub(t).normalize(),$o.copy(this.origin).sub(Tc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Jo),a=$o.dot(this.direction),l=-$o.dot(Jo),c=$o.lengthSq(),u=Math.abs(1-o*o),d,p,m,g;if(u>0)if(d=o*l-a,p=o*a-l,g=r*u,d>=0)if(p>=-g)if(p<=g){let E=1/u;d*=E,p*=E,m=d*(d+o*p+2*a)+p*(o*d+p+2*l)+c}else p=r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-o*r+a)),p=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(d=Math.max(0,-(o*r+a)),p=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c);else p=o>0?-r:r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Tc).addScaledVector(Jo,p),m}intersectSphere(t,e){if(t.radius<0)return null;Zi.subVectors(t.center,this.origin);let n=Zi.dot(this.direction),s=Zi.dot(Zi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),u>=0?(r=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-p.z)*d,l=(t.max.z-p.z)*d):(a=(t.max.z-p.z)*d,l=(t.min.z-p.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=t.x-o.x,p=t.y-o.y,m=t.z-o.z,g=e.x-o.x,E=e.y-o.y,x=e.z-o.z,_=n.x-o.x,A=n.y-o.y,P=n.z-o.z,R=Math.abs(l),O=Math.abs(c),L=Math.abs(u),M,F,Z,k,at,ft,et,Mt,it,yt,lt,Rt;if(R>=O&&R>=L?(Z=l,ft=d,it=g,Rt=_,l>=0?(M=c,F=u,k=p,at=m,et=E,Mt=x,yt=A,lt=P):(M=u,F=c,k=m,at=p,et=x,Mt=E,yt=P,lt=A)):O>=L?(Z=c,ft=p,it=E,Rt=A,c>=0?(M=u,F=l,k=m,at=d,et=x,Mt=g,yt=P,lt=_):(M=l,F=u,k=d,at=m,et=g,Mt=x,yt=_,lt=P)):(Z=u,ft=m,it=x,Rt=P,u>=0?(M=l,F=c,k=d,at=p,et=g,Mt=E,yt=_,lt=A):(M=c,F=l,k=p,at=d,et=E,Mt=g,yt=A,lt=_)),Z===0)return null;let vt=M/Z,Nt=F/Z,Yt=1/Z,$t=k-vt*ft,fe=at-Nt*ft,Pt=et-vt*it,ne=Mt-Nt*it,ce=yt-vt*Rt,ge=lt-Nt*Rt,ie=ce*ne-ge*Pt,_e=$t*ge-fe*ce,De=Pt*fe-ne*$t;if(s){if(ie<0||_e<0||De<0)return null}else if((ie<0||_e<0||De<0)&&(ie>0||_e>0||De>0))return null;let se=ie+_e+De;if(se===0)return null;let W=Yt*(ie*ft+_e*it+De*Rt);return(se>0?W<0:W>0)?null:this.at(W/se,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yn=class extends yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},lu=new sn,bs=new lr,Ko=new Bi,cu=new j,jo=new j,Qo=new j,ta=new j,Cc=new j,ea=new j,hu=new j,na=new j,Ft=class extends _n{constructor(t=new $e,e=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this.count=t.count,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(Cc.fromBufferAttribute(d,t),o?ea.addScaledVector(Cc,u):ea.addScaledVector(Cc.sub(e),u))}e.add(ea)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(r),bs.copy(t.ray).recast(t.near),!(Ko.containsPoint(bs.origin)===!1&&(bs.intersectSphere(Ko,cu)===null||bs.origin.distanceToSquared(cu)>(t.far-t.near)**2))&&(lu.copy(r).invert(),bs.copy(t.ray).applyMatrix4(lu),!(n.boundingBox!==null&&bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,bs)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,E=p.length;g<E;g++){let x=p[g],_=o[x.materialIndex],A=Math.max(x.start,m.start),P=Math.min(a.count,Math.min(x.start+x.count,m.start+m.count));for(let R=A,O=P;R<O;R+=3){let L=a.getX(R),M=a.getX(R+1),F=a.getX(R+2);s=ia(this,_,t,n,c,u,d,L,M,F),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),E=Math.min(a.count,m.start+m.count);for(let x=g,_=E;x<_;x+=3){let A=a.getX(x),P=a.getX(x+1),R=a.getX(x+2);s=ia(this,o,t,n,c,u,d,A,P,R),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,E=p.length;g<E;g++){let x=p[g],_=o[x.materialIndex],A=Math.max(x.start,m.start),P=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let R=A,O=P;R<O;R+=3){let L=R,M=R+1,F=R+2;s=ia(this,_,t,n,c,u,d,L,M,F),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let x=g,_=E;x<_;x+=3){let A=x,P=x+1,R=x+2;s=ia(this,o,t,n,c,u,d,A,P,R),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function $f(i,t,e,n,s,r,o,a){let l;if(t.side===On?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ms,a),l===null)return null;na.copy(a),na.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(na);return c<e.near||c>e.far?null:{distance:c,point:na.clone(),object:i}}function ia(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,jo),i.getVertexPosition(l,Qo),i.getVertexPosition(c,ta);let u=$f(i,t,e,n,jo,Qo,ta,hu);if(u){let d=new j;Ji.getBarycoord(hu,jo,Qo,ta,d),s&&(u.uv=Ji.getInterpolatedAttribute(s,a,l,c,d,new wt)),r&&(u.uv1=Ji.getInterpolatedAttribute(r,a,l,c,d,new wt)),o&&(u.normal=Ji.getInterpolatedAttribute(o,a,l,c,d,new j),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new j,materialIndex:0};Ji.getNormal(jo,Qo,ta,p.normal),u.face=p,u.barycoord=d}return u}var Jr=class extends Qn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Un,u=Un,d,p){super(null,o,a,l,c,u,s,r,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $r=class extends Ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},js=new sn,uu=new sn,sa=[],du=new Oi,Kf=new sn,Pr=new Ft,Ir=new Bi,ui=class extends Ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $r(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Kf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Oi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,js),du.copy(t.boundingBox).applyMatrix4(js),this.boundingBox.union(du)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,js),Ir.copy(t.boundingSphere).applyMatrix4(js),this.boundingSphere.union(Ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(n),t.ray.intersectsSphere(Ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,js),uu.multiplyMatrices(n,js),Pr.matrixWorld=uu,Pr.raycast(t,sa);for(let o=0,a=sa.length;o<a;o++){let l=sa[o];l.instanceId=r,l.object=this,e.push(l)}sa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new $r(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Jr(new Float32Array(s*this.count),s,this.count,cl,wi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},As=new Bi,jf=new wt(.5,.5),ra=new j,hs=class{constructor(t=new Ri,e=new Ri,n=new Ri,s=new Ri,r=new Ri,o=new Ri){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gi,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],p=r[6],m=r[7],g=r[8],E=r[9],x=r[10],_=r[11],A=r[12],P=r[13],R=r[14],O=r[15];if(s[0].setComponents(c-o,m-u,_-g,O-A).normalize(),s[1].setComponents(c+o,m+u,_+g,O+A).normalize(),s[2].setComponents(c+a,m+d,_+E,O+P).normalize(),s[3].setComponents(c-a,m-d,_-E,O-P).normalize(),n)s[4].setComponents(l,p,x,R).normalize(),s[5].setComponents(c-l,m-p,_-x,O-R).normalize();else if(s[4].setComponents(c-l,m-p,_-x,O-R).normalize(),e===gi)s[5].setComponents(c+l,m+p,_+x,O+R).normalize();else if(e===sr)s[5].setComponents(l,p,x,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(t){As.center.set(0,0,0);let e=jf.distanceTo(t.center);return As.radius=.7071067811865476+e,As.applyMatrix4(t.matrixWorld),this.intersectsSphere(As)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ra.x=s.normal.x>0?t.max.x:t.min.x,ra.y=s.normal.y>0?t.max.y:t.min.y,ra.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},fu=new sn,Ia=class i{constructor(){this.coordinateSystem=gi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];fu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new hs),n[s].setFromProjectionMatrix(fu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new hs),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var us=class extends yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Fa=new j,La=new j,pu=new sn,Fr=new lr,oa=new Bi,Rc=new j,mu=new j,Da=class extends _n{constructor(t=new $e,e=new us){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Fa.fromBufferAttribute(e,s-1),La.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Fa.distanceTo(La);t.setAttribute("lineDistance",new We(n,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(s),oa.radius+=r,t.ray.intersectsSphere(oa)===!1)return;pu.copy(s).invert(),Fr.copy(t.ray).applyMatrix4(pu);let a=r/s.getMaxScaleOnAxis(),l=a*a,c=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){let m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let E=m,x=g-1;E<x;E+=c){let _=u.getX(E),A=u.getX(E+1),P=aa(this,t,Fr,l,_,A,E);P&&e.push(P)}if(this.isLineLoop){let E=u.getX(g-1),x=u.getX(m),_=aa(this,t,Fr,l,E,x,g-1);_&&e.push(_)}}else{let m=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let E=m,x=g-1;E<x;E+=c){let _=aa(this,t,Fr,l,E,E+1,E);_&&e.push(_)}if(this.isLineLoop){let E=aa(this,t,Fr,l,g-1,m,g-1);E&&e.push(E)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function aa(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Fa.fromBufferAttribute(a,s),La.fromBufferAttribute(a,r),e.distanceSqToSegment(Fa,La,Rc,mu)>n)return;Rc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Rc);if(!(c<t.near||c>t.far))return{distance:c,point:mu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var gu=new j,xu=new j,Es=class extends Da{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)gu.fromBufferAttribute(e,s),xu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gu.distanceTo(xu);t.setAttribute("lineDistance",new We(n,1))}else Ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ts=class extends yi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_u=new sn,Oc=new lr,la=new Bi,ca=new j,cr=class extends _n{constructor(t=new $e,e=new Ts){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(s),la.radius+=r,t.ray.intersectsSphere(la)===!1)return;_u.copy(s).invert(),Oc.copy(t.ray).applyMatrix4(_u);let a=r/s.getMaxScaleOnAxis(),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let p=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=p,E=m;g<E;g++){let x=c.getX(g);ca.fromBufferAttribute(d,x),yu(ca,x,l,s,t,e,this)}}else{let p=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=p,E=m;g<E;g++)ca.fromBufferAttribute(d,g),yu(ca,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yu(i,t,e,n,s,r,o){let a=Oc.distanceSqToPoint(i);if(a<e){let l=new j;Oc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Kr=class extends Qn{constructor(t=[],e=Ls,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},jr=class extends Qn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ji=class extends Qn{constructor(t,e,n=Pi,s,r,o,a=Un,l=Un,c,u=Ki,d=1){if(u!==Ki&&u!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:d};super(p,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new or(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Qr=class extends ji{constructor(t,e=Pi,n=Ls,s,r,o=Un,a=Un,l,c=Ki){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},to=class extends Qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Re=class i extends $e{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],p=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(d,2));function g(E,x,_,A,P,R,O,L,M,F,Z){let k=R/M,at=O/F,ft=R/2,et=O/2,Mt=L/2,it=M+1,yt=F+1,lt=0,Rt=0,vt=new j;for(let Nt=0;Nt<yt;Nt++){let Yt=Nt*at-et;for(let $t=0;$t<it;$t++){let fe=$t*k-ft;vt[E]=fe*A,vt[x]=Yt*P,vt[_]=Mt,c.push(vt.x,vt.y,vt.z),vt[E]=0,vt[x]=0,vt[_]=L>0?1:-1,u.push(vt.x,vt.y,vt.z),d.push($t/M),d.push(1-Nt/F),lt+=1}}for(let Nt=0;Nt<F;Nt++)for(let Yt=0;Yt<M;Yt++){let $t=p+Yt+it*Nt,fe=p+Yt+it*(Nt+1),Pt=p+(Yt+1)+it*(Nt+1),ne=p+(Yt+1)+it*Nt;l.push($t,fe,ne),l.push(fe,Pt,ne),Rt+=6}a.addGroup(m,Rt,Z),m+=Rt,p+=lt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ki=class i extends $e{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=e/2,d=Math.PI/2*t,p=e,m=2*d+p,g=n*2+r,E=s+1,x=new j,_=new j;for(let A=0;A<=g;A++){let P=0,R=0,O=0,L=0;if(A<=n){let Z=A/n,k=Z*Math.PI/2;R=-u-t*Math.cos(k),O=t*Math.sin(k),L=-t*Math.cos(k),P=Z*d}else if(A<=n+r){let Z=(A-n)/r;R=-u+Z*e,O=t,L=0,P=d+Z*p}else{let Z=(A-n-r)/n,k=Z*Math.PI/2;R=u+t*Math.sin(k),O=t*Math.cos(k),L=t*Math.sin(k),P=d+p+Z*d}let M=Math.max(0,Math.min(1,P/m)),F=0;A===0?F=.5/s:A===g&&(F=-.5/s);for(let Z=0;Z<=s;Z++){let k=Z/s,at=k*Math.PI*2,ft=Math.sin(at),et=Math.cos(at);_.x=-O*et,_.y=R,_.z=O*ft,a.push(_.x,_.y,_.z),x.set(-O*et,L,O*ft),x.normalize(),l.push(x.x,x.y,x.z),c.push(k+F,M)}if(A>0){let Z=(A-1)*E;for(let k=0;k<s;k++){let at=Z+k,ft=Z+k+1,et=A*E+k,Mt=A*E+k+1;o.push(at,ft,et),o.push(ft,Mt,et)}}}this.setIndex(o),this.setAttribute("position",new We(a,3)),this.setAttribute("normal",new We(l,3)),this.setAttribute("uv",new We(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Wn=class i extends $e{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new j,u=new wt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){let m=n+d/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[p]/t+1)/2,u.y=(o[p+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new We(o,3)),this.setAttribute("normal",new We(a,3)),this.setAttribute("uv",new We(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},de=class i extends $e{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],p=[],m=[],g=0,E=[],x=n/2,_=0;A(),o===!1&&(t>0&&P(!0),e>0&&P(!1)),this.setIndex(u),this.setAttribute("position",new We(d,3)),this.setAttribute("normal",new We(p,3)),this.setAttribute("uv",new We(m,2));function A(){let R=new j,O=new j,L=0,M=(e-t)/n;for(let F=0;F<=r;F++){let Z=[],k=F/r,at=k*(e-t)+t;for(let ft=0;ft<=s;ft++){let et=ft/s,Mt=et*l+a,it=Math.sin(Mt),yt=Math.cos(Mt);O.x=at*it,O.y=-k*n+x,O.z=at*yt,d.push(O.x,O.y,O.z),R.set(it,M,yt).normalize(),p.push(R.x,R.y,R.z),m.push(et,1-k),Z.push(g++)}E.push(Z)}for(let F=0;F<s;F++)for(let Z=0;Z<r;Z++){let k=E[Z][F],at=E[Z+1][F],ft=E[Z+1][F+1],et=E[Z][F+1];(t>0||Z!==0)&&(u.push(k,at,et),L+=3),(e>0||Z!==r-1)&&(u.push(at,ft,et),L+=3)}c.addGroup(_,L,0),_+=L}function P(R){let O=g,L=new wt,M=new j,F=0,Z=R===!0?t:e,k=R===!0?1:-1;for(let ft=1;ft<=s;ft++)d.push(0,x*k,0),p.push(0,k,0),m.push(.5,.5),g++;let at=g;for(let ft=0;ft<=s;ft++){let Mt=ft/s*l+a,it=Math.cos(Mt),yt=Math.sin(Mt);M.x=Z*yt,M.y=x*k,M.z=Z*it,d.push(M.x,M.y,M.z),p.push(0,k,0),L.x=it*.5+.5,L.y=yt*.5*k+.5,m.push(L.x,L.y),g++}for(let ft=0;ft<s;ft++){let et=O+ft,Mt=at+ft;R===!0?u.push(Mt,Mt+1,et):u.push(Mt+1,Mt,et),F+=3}c.addGroup(_,F,R===!0?1:2),_+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ln=class i extends de{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},eo=class i extends $e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new We(r,3)),this.setAttribute("normal",new We(r.slice(),3)),this.setAttribute("uv",new We(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(A){let P=new j,R=new j,O=new j;for(let L=0;L<e.length;L+=3)m(e[L+0],P),m(e[L+1],R),m(e[L+2],O),l(P,R,O,A)}function l(A,P,R,O){let L=O+1,M=[];for(let F=0;F<=L;F++){M[F]=[];let Z=A.clone().lerp(R,F/L),k=P.clone().lerp(R,F/L),at=L-F;for(let ft=0;ft<=at;ft++)ft===0&&F===L?M[F][ft]=Z:M[F][ft]=Z.clone().lerp(k,ft/at)}for(let F=0;F<L;F++)for(let Z=0;Z<2*(L-F)-1;Z++){let k=Math.floor(Z/2);Z%2===0?(p(M[F][k+1]),p(M[F+1][k]),p(M[F][k])):(p(M[F][k+1]),p(M[F+1][k+1]),p(M[F+1][k]))}}function c(A){let P=new j;for(let R=0;R<r.length;R+=3)P.x=r[R+0],P.y=r[R+1],P.z=r[R+2],P.normalize().multiplyScalar(A),r[R+0]=P.x,r[R+1]=P.y,r[R+2]=P.z}function u(){let A=new j;for(let P=0;P<r.length;P+=3){A.x=r[P+0],A.y=r[P+1],A.z=r[P+2];let R=x(A)/2/Math.PI+.5,O=_(A)/Math.PI+.5;o.push(R,1-O)}g(),d()}function d(){for(let A=0;A<o.length;A+=6){let P=o[A+0],R=o[A+2],O=o[A+4],L=Math.max(P,R,O),M=Math.min(P,R,O);L>.9&&M<.1&&(P<.2&&(o[A+0]+=1),R<.2&&(o[A+2]+=1),O<.2&&(o[A+4]+=1))}}function p(A){r.push(A.x,A.y,A.z)}function m(A,P){let R=A*3;P.x=t[R+0],P.y=t[R+1],P.z=t[R+2]}function g(){let A=new j,P=new j,R=new j,O=new j,L=new wt,M=new wt,F=new wt;for(let Z=0,k=0;Z<r.length;Z+=9,k+=6){A.set(r[Z+0],r[Z+1],r[Z+2]),P.set(r[Z+3],r[Z+4],r[Z+5]),R.set(r[Z+6],r[Z+7],r[Z+8]),L.set(o[k+0],o[k+1]),M.set(o[k+2],o[k+3]),F.set(o[k+4],o[k+5]),O.copy(A).add(P).add(R).divideScalar(3);let at=x(O);E(L,k+0,A,at),E(M,k+2,P,at),E(F,k+4,R,at)}}function E(A,P,R,O){O<0&&A.x===1&&(o[P]=A.x-1),R.x===0&&R.z===0&&(o[P]=O/2/Math.PI+.5)}function x(A){return Math.atan2(A.z,-A.x)}function _(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},ri=class i extends eo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var di=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ue("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],p=n[s+1]-u,m=(o-u)/p;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new wt:new j);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new j,s=[],r=[],o=[],a=new j,l=new sn;for(let m=0;m<=t;m++){let g=m/t;s[m]=this.getTangentAt(g,new j)}r[0]=new j,o[0]=new j;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(tn(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(tn(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},hr=class extends di{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new wt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*u-m*d+this.aX,c=p*d+m*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},za=class extends hr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ph(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let p=(o-r)/c-(a-r)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+d)+(l-a)/d;p*=u,m*=u,s(o,a,p,m)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var vu=new j,Mu=new j,Pc=new ph,Ic=new ph,Fc=new ph,Xn=class extends di{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new j){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Mu.subVectors(s[0],s[1]).add(s[0]),c=Mu);let d=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(vu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=vu),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),m),E=Math.pow(d.distanceToSquared(p),m),x=Math.pow(p.distanceToSquared(u),m);E<1e-4&&(E=1),g<1e-4&&(g=E),x<1e-4&&(x=E),Pc.initNonuniformCatmullRom(c.x,d.x,p.x,u.x,g,E,x),Ic.initNonuniformCatmullRom(c.y,d.y,p.y,u.y,g,E,x),Fc.initNonuniformCatmullRom(c.z,d.z,p.z,u.z,g,E,x)}else this.curveType==="catmullrom"&&(Pc.initCatmullRom(c.x,d.x,p.x,u.x,this.tension),Ic.initCatmullRom(c.y,d.y,p.y,u.y,this.tension),Fc.initCatmullRom(c.z,d.z,p.z,u.z,this.tension));return n.set(Pc.calc(l),Ic.calc(l),Fc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new j().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Su(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Qf(i,t){let e=1-i;return e*e*t}function tp(i,t){return 2*(1-i)*i*t}function ep(i,t){return i*i*t}function zr(i,t,e,n){return Qf(i,t)+tp(i,e)+ep(i,n)}function np(i,t){let e=1-i;return e*e*e*t}function ip(i,t){let e=1-i;return 3*e*e*i*t}function sp(i,t){return 3*(1-i)*i*i*t}function rp(i,t){return i*i*i*t}function Nr(i,t,e,n,s){return np(i,t)+ip(i,e)+sp(i,n)+rp(i,s)}var no=class extends di{constructor(t=new wt,e=new wt,n=new wt,s=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new wt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Nr(t,s.x,r.x,o.x,a.x),Nr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Na=class extends di{constructor(t=new j,e=new j,n=new j,s=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Nr(t,s.x,r.x,o.x,a.x),Nr(t,s.y,r.y,o.y,a.y),Nr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},io=class extends di{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ua=class extends di{constructor(t=new j,e=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new j){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},so=class extends di{constructor(t=new wt,e=new wt,n=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new wt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(zr(t,s.x,r.x,o.x),zr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cs=class extends di{constructor(t=new j,e=new j,n=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(zr(t,s.x,r.x,o.x),zr(t,s.y,r.y,o.y),zr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ro=class extends di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Su(a,l.x,c.x,u.x,d.x),Su(a,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new wt().fromArray(s))}return this}},Oa=Object.freeze({__proto__:null,ArcCurve:za,CatmullRomCurve3:Xn,CubicBezierCurve:no,CubicBezierCurve3:Na,EllipseCurve:hr,LineCurve:io,LineCurve3:Ua,QuadraticBezierCurve:so,QuadraticBezierCurve3:Cs,SplineCurve:ro}),Ba=class extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oa[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Oa[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},oo=class extends Ba{constructor(t){super(),this.type="Path",this.currentPoint=new wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new io(this.currentPoint.clone(),new wt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new so(this.currentPoint.clone(),new wt(t,e),new wt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new no(this.currentPoint.clone(),new wt(t,e),new wt(n,s),new wt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ro(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new hr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},vi=class extends oo{constructor(t){super(t),this.uuid=xs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new oo().fromJSON(s))}return this}};function op(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=vd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=up(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let u=a,d=l;for(let p=e;p<s;p+=e){let m=i[p],g=i[p+1];m<a&&(a=m),g<l&&(l=g),m>u&&(u=m),g>d&&(d=g)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return ao(r,o,e,a,l,c,0),o}function vd(i,t,e,n,s){let r;if(s===Sp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=wu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=wu(o/n|0,i[o],i[o+1],r);return r&&ur(r,r.next)&&(co(r),r=r.next),r}function Rs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ur(e,e.next)||En(e.prev,e,e.next)===0)){if(co(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ao(i,t,e,n,s,r,o){if(!i)return;!o&&r&&gp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?lp(i,n,s,r):ap(i)){t.push(l.i,i.i,c.i),co(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=cp(Rs(i),t),ao(i,t,e,n,s,r,2)):o===2&&hp(i,t,e,n,s,r):ao(Rs(i),t,e,n,s,r,1);break}}}function ap(i){let t=i.prev,e=i,n=i.next;if(En(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),d=Math.min(a,l,c),p=Math.max(s,r,o),m=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=p&&g.y>=d&&g.y<=m&&Lr(s,a,r,l,o,c,g.x,g.y)&&En(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function lp(i,t,e,n){let s=i.prev,r=i,o=i.next;if(En(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,p=o.y,m=Math.min(a,l,c),g=Math.min(u,d,p),E=Math.max(a,l,c),x=Math.max(u,d,p),_=Bc(m,g,t,e,n),A=Bc(E,x,t,e,n),P=i.prevZ,R=i.nextZ;for(;P&&P.z>=_&&R&&R.z<=A;){if(P.x>=m&&P.x<=E&&P.y>=g&&P.y<=x&&P!==s&&P!==o&&Lr(a,u,l,d,c,p,P.x,P.y)&&En(P.prev,P,P.next)>=0||(P=P.prevZ,R.x>=m&&R.x<=E&&R.y>=g&&R.y<=x&&R!==s&&R!==o&&Lr(a,u,l,d,c,p,R.x,R.y)&&En(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;P&&P.z>=_;){if(P.x>=m&&P.x<=E&&P.y>=g&&P.y<=x&&P!==s&&P!==o&&Lr(a,u,l,d,c,p,P.x,P.y)&&En(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;R&&R.z<=A;){if(R.x>=m&&R.x<=E&&R.y>=g&&R.y<=x&&R!==s&&R!==o&&Lr(a,u,l,d,c,p,R.x,R.y)&&En(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function cp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ur(n,s)&&Sd(n,e,e.next,s)&&lo(n,s)&&lo(s,n)&&(t.push(n.i,e.i,s.i),co(e),co(e.next),e=i=s),e=e.next}while(e!==i);return Rs(e)}function hp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&yp(o,a)){let l=wd(o,a);o=Rs(o,o.next),l=Rs(l,l.next),ao(o,t,e,n,s,r,0),ao(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function up(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=vd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(_p(c))}s.sort(dp);for(let r=0;r<s.length;r++)e=fp(s[r],e);return e}function dp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function fp(i,t){let e=pp(i,t);if(!e)return t;let n=wd(e,i);return Rs(n,n.next),Rs(e,e.next)}function pp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(ur(i,e))return e;do{if(ur(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Md(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);lo(e,i)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&mp(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function mp(i,t){return En(i.prev,i,t.prev)<0&&En(t.next,i,i.next)<0}function gp(i,t,e,n){let s=i;do s.z===0&&(s.z=Bc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,xp(s)}function xp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Bc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function _p(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Md(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Lr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Md(i,t,e,n,s,r,o,a)}function yp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!vp(i,t)&&(lo(i,t)&&lo(t,i)&&Mp(i,t)&&(En(i.prev,i,t.prev)||En(i,t.prev,t))||ur(i,t)&&En(i.prev,i,i.next)>0&&En(t.prev,t,t.next)>0)}function En(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ur(i,t){return i.x===t.x&&i.y===t.y}function Sd(i,t,e,n){let s=ua(En(i,t,e)),r=ua(En(i,t,n)),o=ua(En(e,n,i)),a=ua(En(e,n,t));return!!(s!==r&&o!==a||s===0&&ha(i,e,t)||r===0&&ha(i,n,t)||o===0&&ha(e,i,n)||a===0&&ha(e,t,n))}function ha(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ua(i){return i>0?1:i<0?-1:0}function vp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Sd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function lo(i,t){return En(i.prev,i,i.next)<0?En(i,t,i.next)>=0&&En(i,i.prev,t)>=0:En(i,t,i.prev)<0||En(i,i.next,t)<0}function Mp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function wd(i,t){let e=kc(i.i,i.x,i.y),n=kc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function wu(i,t,e,n){let s=kc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function co(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function kc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Sp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Vc=class{static triangulate(t,e,n=2){return op(t,e,n)}},Ni=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];bu(t),Au(n,t);let o=t.length;e.forEach(bu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Au(n,e[l]);let a=Vc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function bu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Au(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ho=class i extends $e{constructor(t=new vi([new wt(.5,.5),new wt(-.5,.5),new wt(-.5,-.5),new wt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new We(s,3)),this.setAttribute("uv",new We(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,E=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,_=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:wp,P,R=!1,O,L,M,F;if(_){P=_.getSpacedPoints(u),R=!0,p=!1;let rt=_.isCatmullRomCurve3?_.closed:!1;O=_.computeFrenetFrames(u,rt),L=new j,M=new j,F=new j}p||(x=0,m=0,g=0,E=0);let Z=a.extractPoints(c),k=Z.shape,at=Z.holes;if(!Ni.isClockWise(k)){k=k.reverse();for(let rt=0,ut=at.length;rt<ut;rt++){let h=at[rt];Ni.isClockWise(h)&&(at[rt]=h.reverse())}}function et(rt){let h=10000000000000001e-36,y=rt[0];for(let D=1;D<=rt.length;D++){let N=D%rt.length,J=rt[N],dt=J.x-y.x,ot=J.y-y.y,Bt=dt*dt+ot*ot,X=Math.max(Math.abs(J.x),Math.abs(J.y),Math.abs(y.x),Math.abs(y.y)),Zt=h*X*X;if(Bt<=Zt){rt.splice(N,1),D--;continue}y=J}}et(k),at.forEach(et);let Mt=at.length,it=k;for(let rt=0;rt<Mt;rt++){let ut=at[rt];k=k.concat(ut)}function yt(rt,ut,h){return ut||ke("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(ut,h)}let lt=k.length;function Rt(rt,ut,h){let y,D,N,J=rt.x-ut.x,dt=rt.y-ut.y,ot=h.x-rt.x,Bt=h.y-rt.y,X=J*J+dt*dt,Zt=J*Bt-dt*ot;if(Math.abs(Zt)>Number.EPSILON){let K=Math.sqrt(X),Q=Math.sqrt(ot*ot+Bt*Bt),H=ut.x-dt/K,zt=ut.y+J/K,ht=h.x-Bt/Q,mt=h.y+ot/Q,z=((ht-H)*Bt-(mt-zt)*ot)/(J*Bt-dt*ot);y=H+J*z-rt.x,D=zt+dt*z-rt.y;let S=y*y+D*D;if(S<=2)return new wt(y,D);N=Math.sqrt(S/2)}else{let K=!1;J>Number.EPSILON?ot>Number.EPSILON&&(K=!0):J<-Number.EPSILON?ot<-Number.EPSILON&&(K=!0):Math.sign(dt)===Math.sign(Bt)&&(K=!0),K?(y=-dt,D=J,N=Math.sqrt(X)):(y=J,D=dt,N=Math.sqrt(X/2))}return new wt(y/N,D/N)}let vt=[];for(let rt=0,ut=it.length,h=ut-1,y=rt+1;rt<ut;rt++,h++,y++)h===ut&&(h=0),y===ut&&(y=0),vt[rt]=Rt(it[rt],it[h],it[y]);let Nt=[],Yt,$t=vt.concat();for(let rt=0,ut=Mt;rt<ut;rt++){let h=at[rt];Yt=[];for(let y=0,D=h.length,N=D-1,J=y+1;y<D;y++,N++,J++)N===D&&(N=0),J===D&&(J=0),Yt[y]=Rt(h[y],h[N],h[J]);Nt.push(Yt),$t=$t.concat(Yt)}let fe;if(x===0)fe=Ni.triangulateShape(it,at);else{let rt=[],ut=[];for(let h=0;h<x;h++){let y=h/x,D=m*Math.cos(y*Math.PI/2),N=g*Math.sin(y*Math.PI/2)+E;for(let J=0,dt=it.length;J<dt;J++){let ot=yt(it[J],vt[J],N);_e(ot.x,ot.y,-D),y===0&&rt.push(ot)}for(let J=0,dt=Mt;J<dt;J++){let ot=at[J];Yt=Nt[J];let Bt=[];for(let X=0,Zt=ot.length;X<Zt;X++){let K=yt(ot[X],Yt[X],N);_e(K.x,K.y,-D),y===0&&Bt.push(K)}y===0&&ut.push(Bt)}}fe=Ni.triangulateShape(rt,ut)}let Pt=fe.length,ne=g+E;for(let rt=0;rt<lt;rt++){let ut=p?yt(k[rt],$t[rt],ne):k[rt];R?(M.copy(O.normals[0]).multiplyScalar(ut.x),L.copy(O.binormals[0]).multiplyScalar(ut.y),F.copy(P[0]).add(M).add(L),_e(F.x,F.y,F.z)):_e(ut.x,ut.y,0)}for(let rt=1;rt<=u;rt++)for(let ut=0;ut<lt;ut++){let h=p?yt(k[ut],$t[ut],ne):k[ut];R?(M.copy(O.normals[rt]).multiplyScalar(h.x),L.copy(O.binormals[rt]).multiplyScalar(h.y),F.copy(P[rt]).add(M).add(L),_e(F.x,F.y,F.z)):_e(h.x,h.y,d/u*rt)}for(let rt=x-1;rt>=0;rt--){let ut=rt/x,h=m*Math.cos(ut*Math.PI/2),y=g*Math.sin(ut*Math.PI/2)+E;for(let D=0,N=it.length;D<N;D++){let J=yt(it[D],vt[D],y);_e(J.x,J.y,d+h)}for(let D=0,N=at.length;D<N;D++){let J=at[D];Yt=Nt[D];for(let dt=0,ot=J.length;dt<ot;dt++){let Bt=yt(J[dt],Yt[dt],y);R?_e(Bt.x,Bt.y+P[u-1].y,P[u-1].x+h):_e(Bt.x,Bt.y,d+h)}}}ce(),ge();function ce(){let rt=s.length/3;if(p){let ut=0,h=lt*ut;for(let y=0;y<Pt;y++){let D=fe[y];De(D[2]+h,D[1]+h,D[0]+h)}ut=u+x*2,h=lt*ut;for(let y=0;y<Pt;y++){let D=fe[y];De(D[0]+h,D[1]+h,D[2]+h)}}else{for(let ut=0;ut<Pt;ut++){let h=fe[ut];De(h[2],h[1],h[0])}for(let ut=0;ut<Pt;ut++){let h=fe[ut];De(h[0]+lt*u,h[1]+lt*u,h[2]+lt*u)}}n.addGroup(rt,s.length/3-rt,0)}function ge(){let rt=s.length/3,ut=0;ie(it,ut),ut+=it.length;for(let h=0,y=at.length;h<y;h++){let D=at[h];ie(D,ut),ut+=D.length}n.addGroup(rt,s.length/3-rt,1)}function ie(rt,ut){let h=rt.length;for(;--h>=0;){let y=h,D=h-1;D<0&&(D=rt.length-1);for(let N=0,J=u+x*2;N<J;N++){let dt=lt*N,ot=lt*(N+1),Bt=ut+y+dt,X=ut+D+dt,Zt=ut+D+ot,K=ut+y+ot;se(Bt,X,Zt,K)}}}function _e(rt,ut,h){l.push(rt),l.push(ut),l.push(h)}function De(rt,ut,h){W(rt),W(ut),W(h);let y=s.length/3,D=A.generateTopUV(n,s,y-3,y-2,y-1);St(D[0]),St(D[1]),St(D[2])}function se(rt,ut,h,y){W(rt),W(ut),W(y),W(ut),W(h),W(y);let D=s.length/3,N=A.generateSideWallUV(n,s,D-6,D-3,D-2,D-1);St(N[0]),St(N[1]),St(N[3]),St(N[1]),St(N[2]),St(N[3])}function W(rt){s.push(l[rt*3+0]),s.push(l[rt*3+1]),s.push(l[rt*3+2])}function St(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return bp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Oa[s.type]().fromJSON(s)),new i(n,t.options)}},wp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new wt(r,o),new wt(a,l),new wt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],d=t[n*3+2],p=t[s*3],m=t[s*3+1],g=t[s*3+2],E=t[r*3],x=t[r*3+1],_=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new wt(o,1-l),new wt(c,1-d),new wt(p,1-g),new wt(E,1-_)]:[new wt(a,1-l),new wt(u,1-d),new wt(m,1-g),new wt(x,1-_)]}};function bp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var An=class i extends eo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},ei=class i extends $e{constructor(t=[new wt(0,-.5),new wt(.5,0),new wt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=tn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/e,d=new j,p=new wt,m=new j,g=new j,E=new j,x=0,_=0;for(let A=0;A<=t.length-1;A++)switch(A){case 0:x=t[A+1].x-t[A].x,_=t[A+1].y-t[A].y,m.x=_*1,m.y=-x,m.z=_*0,E.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case t.length-1:E.normalize(),l.push(E.x,E.y,E.z);break;default:x=t[A+1].x-t[A].x,_=t[A+1].y-t[A].y,m.x=_*1,m.y=-x,m.z=_*0,g.copy(m),m.x+=E.x,m.y+=E.y,m.z+=E.z,m.normalize(),l.push(m.x,m.y,m.z),E.copy(g)}for(let A=0;A<=e;A++){let P=n+A*u*s,R=Math.sin(P),O=Math.cos(P);for(let L=0;L<=t.length-1;L++){d.x=t[L].x*R,d.y=t[L].y,d.z=t[L].x*O,o.push(d.x,d.y,d.z),p.x=A/e,p.y=L/(t.length-1),a.push(p.x,p.y);let M=l[3*L+0]*R,F=l[3*L+1],Z=l[3*L+0]*O;c.push(M,F,Z)}}for(let A=0;A<e;A++)for(let P=0;P<t.length-1;P++){let R=P+A*t.length,O=R,L=R+t.length,M=R+t.length+1,F=R+1;r.push(O,L,F),r.push(M,F,L)}this.setIndex(r),this.setAttribute("position",new We(o,3)),this.setAttribute("uv",new We(a,2)),this.setAttribute("normal",new We(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Tn=class i extends $e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=t/a,p=e/l,m=[],g=[],E=[],x=[];for(let _=0;_<u;_++){let A=_*p-o;for(let P=0;P<c;P++){let R=P*d-r;g.push(R,-A,0),E.push(0,0,1),x.push(P/a),x.push(1-_/l)}}for(let _=0;_<l;_++)for(let A=0;A<a;A++){let P=A+c*_,R=A+c*(_+1),O=A+1+c*(_+1),L=A+1+c*_;m.push(P,R,L),m.push(R,O,L)}this.setIndex(m),this.setAttribute("position",new We(g,3)),this.setAttribute("normal",new We(E,3)),this.setAttribute("uv",new We(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},uo=class i extends $e{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],d=t,p=(e-t)/s,m=new j,g=new wt;for(let E=0;E<=s;E++){for(let x=0;x<=n;x++){let _=r+x/n*o;m.x=d*Math.cos(_),m.y=d*Math.sin(_),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,u.push(g.x,g.y)}d+=p}for(let E=0;E<s;E++){let x=E*(n+1);for(let _=0;_<n;_++){let A=_+x,P=A,R=A+n+1,O=A+n+2,L=A+1;a.push(P,R,L),a.push(R,O,L)}}this.setIndex(a),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(c,3)),this.setAttribute("uv",new We(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Qi=class i extends $e{constructor(t=new vi([new wt(0,.5),new wt(-.5,-.5),new wt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new We(s,3)),this.setAttribute("normal",new We(r,3)),this.setAttribute("uv",new We(o,2));function c(u){let d=s.length/3,p=u.extractPoints(e),m=p.shape,g=p.holes;Ni.isClockWise(m)===!1&&(m=m.reverse());for(let x=0,_=g.length;x<_;x++){let A=g[x];Ni.isClockWise(A)===!0&&(g[x]=A.reverse())}let E=Ni.triangulateShape(m,g);for(let x=0,_=g.length;x<_;x++){let A=g[x];m=m.concat(A)}for(let x=0,_=m.length;x<_;x++){let A=m[x];s.push(A.x,A.y,0),r.push(0,0,1),o.push(A.x,A.y)}for(let x=0,_=E.length;x<_;x++){let A=E[x],P=A[0]+d,R=A[1]+d,O=A[2]+d;n.push(P,R,O),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Ap(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Ap(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var qe=class i extends $e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new j,p=new j,m=[],g=[],E=[],x=[];for(let _=0;_<=n;_++){let A=[],P=_/n,R=o+P*a,O=t*Math.cos(R),L=Math.sqrt(t*t-O*O),M=0;_===0&&o===0?M=.5/e:_===n&&l===Math.PI&&(M=-.5/e);for(let F=0;F<=e;F++){let Z=F/e,k=s+Z*r;d.x=-L*Math.cos(k),d.y=O,d.z=L*Math.sin(k),g.push(d.x,d.y,d.z),p.copy(d).normalize(),E.push(p.x,p.y,p.z),x.push(Z+M,1-P),A.push(c++)}u.push(A)}for(let _=0;_<n;_++)for(let A=0;A<e;A++){let P=u[_][A+1],R=u[_][A],O=u[_+1][A],L=u[_+1][A+1];(_!==0||o>0)&&m.push(P,R,L),(_!==n-1||l<Math.PI)&&m.push(R,O,L)}this.setIndex(m),this.setAttribute("position",new We(g,3)),this.setAttribute("normal",new We(E,3)),this.setAttribute("uv",new We(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ts=class i extends $e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],d=[],p=new j,m=new j,g=new j;for(let E=0;E<=n;E++){let x=o+E/n*a;for(let _=0;_<=s;_++){let A=_/s*r;m.x=(t+e*Math.cos(x))*Math.cos(A),m.y=(t+e*Math.cos(x))*Math.sin(A),m.z=e*Math.sin(x),c.push(m.x,m.y,m.z),p.x=t*Math.cos(A),p.y=t*Math.sin(A),g.subVectors(m,p).normalize(),u.push(g.x,g.y,g.z),d.push(_/s),d.push(E/n)}}for(let E=1;E<=n;E++)for(let x=1;x<=s;x++){let _=(s+1)*E+x-1,A=(s+1)*(E-1)+x-1,P=(s+1)*(E-1)+x,R=(s+1)*E+x;l.push(_,A,R),l.push(A,P,R)}this.setIndex(l),this.setAttribute("position",new We(c,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Mi=class i extends $e{constructor(t=new Cs(new j(-1,-1,0),new j(-1,1,0),new j(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new j,l=new j,c=new wt,u=new j,d=[],p=[],m=[],g=[];E(),this.setIndex(g),this.setAttribute("position",new We(d,3)),this.setAttribute("normal",new We(p,3)),this.setAttribute("uv",new We(m,2));function E(){for(let P=0;P<e;P++)x(P);x(r===!1?e:0),A(),_()}function x(P){u=t.getPointAt(P/e,u);let R=o.normals[P],O=o.binormals[P];for(let L=0;L<=s;L++){let M=L/s*Math.PI*2,F=Math.sin(M),Z=-Math.cos(M);l.x=Z*R.x+F*O.x,l.y=Z*R.y+F*O.y,l.z=Z*R.z+F*O.z,l.normalize(),p.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,d.push(a.x,a.y,a.z)}}function _(){for(let P=1;P<=e;P++)for(let R=1;R<=s;R++){let O=(s+1)*(P-1)+(R-1),L=(s+1)*P+(R-1),M=(s+1)*P+R,F=(s+1)*(P-1)+R;g.push(O,L,F),g.push(L,M,F)}}function A(){for(let P=0;P<=e;P++)for(let R=0;R<=s;R++)c.x=P/e,c.y=R/s,m.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Oa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function zs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Eu(s))s.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Eu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Yn(i){let t={};for(let e=0;e<i.length;e++){let n=zs(i[e]);for(let s in n)t[s]=n[s]}return t}function Eu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ep(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:nn.workingColorSpace}var bd={clone:zs,merge:Yn},Tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Si=class extends yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tp,this.fragmentShader=Cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zs(t.uniforms),this.uniformsGroups=Ep(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.linewidth=t.linewidth,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new be().setHex(s.value);break;case"v2":this.uniforms[n].value=new wt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new j().fromArray(s.value);break;case"v4":this.uniforms[n].value=new xn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new sn().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ka=class extends Si{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var qn=class extends yi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new be(16777215),this.specular=new be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=yo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Pe=class extends yi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=yo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Va=class extends yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ha=class extends yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Qs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function da(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ds=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ga=class extends ds{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zc,endingEnd:zc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nc:r=t,a=2*e-n;break;case Uc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nc:o=t,l=2*n-e;break;case Uc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),E=g*g,x=E*g,_=-p*x+2*p*E-p*g,A=(1+p)*x+(-1.5-2*p)*E+(-.5+p)*g+1,P=(-1-m)*x+(1.5+m)*E+.5*g,R=m*x-m*E;for(let O=0;O!==a;++O)r[O]=_*o[u+O]+A*o[c+O]+P*o[l+O]+R*o[d+O];return r}},Wa=class extends ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),d=1-u;for(let p=0;p!==a;++p)r[p]=o[c+p]*d+o[l+p]*u;return r}},Xa=class extends ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},qa=class extends ds{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-e)/(s-e),E=1-g;for(let x=0;x!==a;++x)r[x]=o[c+x]*E+o[l+x]*g;return r}let p=a*2,m=t-1;for(let g=0;g!==a;++g){let E=o[c+g],x=o[l+g],_=m*p+g*2,A=d[_],P=d[_+1],R=t*p+g*2,O=u[R],L=u[R+1],M=Pp(n,e,A,O,s);r[g]=Ad(M,E,P,L,x)}return r}};function Ad(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Rp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Pp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Ad(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Rp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var fi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qs(e,this.TimeBufferType),this.values=Qs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qs(t.times,Array),values:Qs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),da(t.settings)&&(n.settings={inTangents:Qs(t.settings.inTangents,Array),outTangents:Qs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new qa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ur:e=this.InterpolantFactoryMethodDiscrete;break;case Aa:e=this.InterpolantFactoryMethodLinear;break;case ma:e=this.InterpolantFactoryMethodSmooth;break;case Dc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ue("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return Aa;case this.InterpolantFactoryMethodSmooth:return ma;case this.InterpolantFactoryMethodBezier:return Dc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;da(this.settings)&&(Tu(this.settings.inTangents,t),Tu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;da(this.settings)&&(Cu(this.settings.inTangents,t),Cu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ke("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ke("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ke("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ke("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Ff(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ke("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ma,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,p=d-n,m=d+n;for(let g=0;g!==n;++g){let E=e[d+g];if(E!==e[p+g]||E!==e[m+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,p=o*n;for(let m=0;m!==n;++m)e[p+m]=e[d+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,da(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Tu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Cu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}fi.prototype.ValueTypeName="";fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=Aa;var fs=class extends fi{constructor(t,e,n){super(t,e,n)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Ur;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ya=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}};Ya.prototype.ValueTypeName="color";var Za=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}};Za.prototype.ValueTypeName="number";var Ja=class extends ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)xi.slerpFlat(r,0,o,c-a,o,c,l);return r}},fo=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ja(this.times,this.values,this.getValueSize(),t)}};fo.prototype.ValueTypeName="quaternion";fo.prototype.InterpolantFactoryMethodSmooth=void 0;var ps=class extends fi{constructor(t,e,n){super(t,e,n)}};ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Ur;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends fi{constructor(t,e,n,s){super(t,e,n,s)}};$a.prototype.ValueTypeName="vector";var Ka=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=c.length;d<p;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ed=new Ka,ja=class{constructor(t){this.manager=t!==void 0?t:Ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ja.DEFAULT_MATERIAL_NAME="__DEFAULT";var po=class extends _n{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},mo=class extends po{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Lc=new sn,Ru=new j,Pu=new j,Qa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.filterNode=null,this.shadowNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new xn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ru.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ru),Pu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Lc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Lc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===sr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Lc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this.filterNode=t.filterNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},fa=new j,pa=new xi,Di=new j,go=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(fa,pa,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fa,pa,Di.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){let s=super.updateWorldMatrix(t,e,n);return this.matrixWorld.decompose(fa,pa,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fa,pa,Di.set(1,1,1)).invert(),s}clone(){return new this.constructor().copy(this)}},ls=new j,Iu=new wt,Fu=new wt,Gn=class extends go{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ea*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ac*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,e){return this.getViewBounds(t,Iu,Fu),e.subVectors(Fu,Iu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ac*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var xo=class extends go{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Hc=class extends Qa{constructor(){super(new xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_o=class extends po{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new Hc}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var tr=-90,er=1,dr=class extends _n{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gn(tr,er,t,e);s.layers=this.layers,this.add(s);let r=new Gn(tr,er,t,e);r.layers=this.layers,this.add(r);let o=new Gn(tr,er,t,e);o.layers=this.layers,this.add(o);let a=new Gn(tr,er,t,e);a.layers=this.layers,this.add(a);let l=new Gn(tr,er,t,e);l.layers=this.layers,this.add(l);let c=new Gn(tr,er,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let E=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=E,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,p,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},tl=class extends Gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var gh="\\[\\]\\.:\\/",Ip=new RegExp("["+gh+"]","g"),xh="[^"+gh+"]",Fp="[^"+gh.replace("\\.","")+"]",Lp=/((?:WC+[\/:])*)/.source.replace("WC",xh),Dp=/(WCOD+)?/.source.replace("WCOD",Fp),zp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xh),Np=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xh),Up=new RegExp("^"+Lp+Dp+zp+Np+"$"),Op=["material","materials","bones","map"],Gc=class{constructor(t,e,n){let s=n||Mn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Mn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ip,"")}static parseTrackName(t){let e=Up.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Op.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;ke("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mn.Composite=Gc;Mn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mn.prototype.GetterByBindingType=[Mn.prototype._getValue_direct,Mn.prototype._getValue_array,Mn.prototype._getValue_arrayElement,Mn.prototype._getValue_toArray];Mn.prototype.SetterByBindingTypeAndVersioning=[[Mn.prototype._setValue_direct,Mn.prototype._setValue_direct_setNeedsUpdate,Mn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_array,Mn.prototype._setValue_array_setNeedsUpdate,Mn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_arrayElement,Mn.prototype._setValue_arrayElement_setNeedsUpdate,Mn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_fromArray,Mn.prototype._setValue_fromArray_setNeedsUpdate,Mn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var N_=new Float32Array(1);var wh=class wh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};wh.prototype.isMatrix2=!0;var Wc=wh;function _h(i,t,e,n){let s=Bp(n);switch(e){case ah:return i*t;case cl:return i*t/s.components*s.byteLength;case hl:return i*t/s.components*s.byteLength;case gs:return i*t*2/s.components*s.byteLength;case ul:return i*t*2/s.components*s.byteLength;case lh:return i*t*3/s.components*s.byteLength;case Fi:return i*t*4/s.components*s.byteLength;case dl:return i*t*4/s.components*s.byteLength;case So:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bo:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pl:case gl:return Math.max(i,16)*Math.max(t,8)/4;case fl:case ml:return Math.max(i,8)*Math.max(t,8)/2;case xl:case _l:case vl:case Ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yl:case Eo:case Sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case El:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Il:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ul:case Ol:case Bl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case kl:case Vl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case To:case Hl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bp(i){switch(i){case oi:case ih:return{byteLength:1,components:1};case gr:case sh:case Ii:return{byteLength:2,components:1};case al:case ll:return{byteLength:2,components:4};case Pi:case ol:case wi:return{byteLength:4,components:1};case rh:case oh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);function Zd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function kp(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,d=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<d.length;m++){let g=d[p],E=d[m];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++p,d[p]=E)}d.length=p+1;for(let m=0,g=d.length;m<g;m++){let E=d[m];i.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hp=`#ifdef USE_ALPHAHASH
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
#endif`,Gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yp=`#ifdef USE_AOMAP
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
#endif`,Zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jp=`#ifdef USE_BATCHING
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
#endif`,$p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t0=`#ifdef USE_IRIDESCENCE
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
#endif`,e0=`#ifdef USE_BUMPMAP
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
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,h0=`#define PI 3.141592653589793
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
} // validated`,u0=`vec3 transformedNormal = objectNormal;
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
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g0="gl_FragColor = linearToOutputTexel( gl_FragColor );",x0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_0=`#ifdef USE_ENVMAP
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
#endif`,y0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T0=`#ifdef USE_GRADIENTMAP
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
}`,C0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,F0=`#ifdef USE_ENVMAP
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
#endif`,L0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U0=`PhysicalMaterial material;
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
#endif`,O0=`uniform sampler2D dfgLUT;
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
}`,B0=`
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
#endif`,k0=`#if defined( RE_IndirectDiffuse )
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
#endif`,V0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,G0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$0=`#if defined( USE_POINTS_UV )
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
#endif`,K0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tm=`#if defined( USE_MORPHCOLORS )
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
#endif`,em=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`#ifdef USE_MORPHTARGETS
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
#endif`,im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cm=`#ifdef USE_NORMALMAP
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
#endif`,hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Am=`float getShadowMask() {
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
}`,Em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tm=`#ifdef USE_SKINNING
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
#endif`,Cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rm=`#ifdef USE_SKINNING
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
#endif`,Pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dm=`#ifdef USE_TRANSMISSION
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
#endif`,zm=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`uniform float backgroundBlurriness;
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`#include <common>
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
}`,Ym=`#if DEPTH_PACKING == 3200
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
}`,Zm=`#define DISTANCE
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
}`,Jm=`#define DISTANCE
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`uniform float scale;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,eg=`uniform vec3 diffuse;
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
}`,ng=`#define LAMBERT
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
}`,ig=`#define LAMBERT
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
}`,sg=`#define MATCAP
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
}`,rg=`#define MATCAP
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
}`,og=`#define NORMAL
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
}`,ag=`#define NORMAL
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
}`,lg=`#define PHONG
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
}`,cg=`#define PHONG
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
}`,hg=`#define STANDARD
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
}`,ug=`#define STANDARD
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
}`,dg=`#define TOON
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
}`,fg=`#define TOON
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
}`,pg=`uniform float size;
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#include <common>
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
}`,xg=`uniform vec3 color;
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
}`,_g=`uniform float rotation;
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
}`,yg=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Vp,alphahash_pars_fragment:Hp,alphamap_fragment:Gp,alphamap_pars_fragment:Wp,alphatest_fragment:Xp,alphatest_pars_fragment:qp,aomap_fragment:Yp,aomap_pars_fragment:Zp,batching_pars_vertex:Jp,batching_vertex:$p,begin_vertex:Kp,beginnormal_vertex:jp,bsdfs:Qp,iridescence_fragment:t0,bumpmap_pars_fragment:e0,clipping_planes_fragment:n0,clipping_planes_pars_fragment:i0,clipping_planes_pars_vertex:s0,clipping_planes_vertex:r0,color_fragment:o0,color_pars_fragment:a0,color_pars_vertex:l0,color_vertex:c0,common:h0,defaultnormal_vertex:u0,displacementmap_pars_vertex:d0,displacementmap_vertex:f0,emissivemap_fragment:p0,emissivemap_pars_fragment:m0,colorspace_fragment:g0,colorspace_pars_fragment:x0,envmap_fragment:_0,envmap_common_pars_fragment:y0,envmap_pars_fragment:v0,envmap_pars_vertex:M0,envmap_physical_pars_fragment:F0,envmap_vertex:S0,fog_vertex:w0,fog_pars_vertex:b0,fog_fragment:A0,fog_pars_fragment:E0,gradientmap_pars_fragment:T0,lightmap_pars_fragment:C0,lights_lambert_fragment:R0,lights_lambert_pars_fragment:P0,lights_pars_begin:I0,lights_toon_fragment:L0,lights_toon_pars_fragment:D0,lights_phong_fragment:z0,lights_phong_pars_fragment:N0,lights_physical_fragment:U0,lights_physical_pars_fragment:O0,lights_fragment_begin:B0,lights_fragment_maps:k0,lights_fragment_end:V0,lightprobes_pars_fragment:H0,logdepthbuf_fragment:G0,logdepthbuf_pars_fragment:W0,logdepthbuf_pars_vertex:X0,logdepthbuf_vertex:q0,map_fragment:Y0,map_pars_fragment:Z0,map_particle_fragment:J0,map_particle_pars_fragment:$0,metalnessmap_fragment:K0,metalnessmap_pars_fragment:j0,morphinstance_vertex:Q0,morphcolor_vertex:tm,morphnormal_vertex:em,morphtarget_pars_vertex:nm,morphtarget_vertex:im,normal_fragment_begin:sm,normal_fragment_maps:rm,normal_pars_fragment:om,normal_pars_vertex:am,normal_vertex:lm,normalmap_pars_fragment:cm,clearcoat_normal_fragment_begin:hm,clearcoat_normal_fragment_maps:um,clearcoat_pars_fragment:dm,iridescence_pars_fragment:fm,opaque_fragment:pm,packing:mm,premultiplied_alpha_fragment:gm,project_vertex:xm,dithering_fragment:_m,dithering_pars_fragment:ym,roughnessmap_fragment:vm,roughnessmap_pars_fragment:Mm,shadowmap_pars_fragment:Sm,shadowmap_pars_vertex:wm,shadowmap_vertex:bm,shadowmask_pars_fragment:Am,skinbase_vertex:Em,skinning_pars_vertex:Tm,skinning_vertex:Cm,skinnormal_vertex:Rm,specularmap_fragment:Pm,specularmap_pars_fragment:Im,tonemapping_fragment:Fm,tonemapping_pars_fragment:Lm,transmission_fragment:Dm,transmission_pars_fragment:zm,uv_pars_fragment:Nm,uv_pars_vertex:Um,uv_vertex:Om,worldpos_vertex:Bm,background_vert:km,background_frag:Vm,backgroundCube_vert:Hm,backgroundCube_frag:Gm,cube_vert:Wm,cube_frag:Xm,depth_vert:qm,depth_frag:Ym,distance_vert:Zm,distance_frag:Jm,equirect_vert:$m,equirect_frag:Km,linedashed_vert:jm,linedashed_frag:Qm,meshbasic_vert:tg,meshbasic_frag:eg,meshlambert_vert:ng,meshlambert_frag:ig,meshmatcap_vert:sg,meshmatcap_frag:rg,meshnormal_vert:og,meshnormal_frag:ag,meshphong_vert:lg,meshphong_frag:cg,meshphysical_vert:hg,meshphysical_frag:ug,meshtoon_vert:dg,meshtoon_frag:fg,points_vert:pg,points_frag:mg,shadow_vert:gg,shadow_frag:xg,sprite_vert:_g,sprite_frag:yg},ye={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]},probesIntensity:{value:[]}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Gi={basic:{uniforms:Yn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Yn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Yn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Yn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Yn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new be(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Yn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Yn([ye.points,ye.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Yn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Yn([ye.common,ye.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Yn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Yn([ye.sprite,ye.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:Yn([ye.common,ye.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:Yn([ye.lights,ye.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Gi.physical={uniforms:Yn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var Wl={r:0,b:0,g:0},vg=new sn,Jd=new Xe;Jd.set(-1,0,0,0,1,0,0,0,1);function Mg(i,t,e,n,s,r){let o=new be(0),a=s===!0?0:1,l,c,u=null,d=0,p=null;function m(A){let P=A.isScene===!0?A.background:null;if(P&&P.isTexture){let R=A.backgroundBlurriness>0;P=t.get(P,R)}return P}function g(A){let P=!1,R=m(A);R===null?x(o,a):R&&R.isColor&&(x(R,1),P=!0);let O=i.xr.getEnvironmentBlendMode();O==="additive"?e.buffers.color.setClear(0,0,0,1,r):O==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||P)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(A,P){let R=m(P);R&&R.isCubeTexture?(c===void 0&&(c=new Ft(new Re(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:zs(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(O,L,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=R,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(vg.makeRotationFromEuler(P.backgroundRotation)).transpose(),R.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jd),c.material.toneMapped=nn.getTransfer(R.colorSpace)!==ln,(u!==R||d!==R.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,p=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Ft(new Tn(2,2),new Si({name:"BackgroundMaterial",uniforms:zs(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=nn.getTransfer(R.colorSpace)!==ln,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=R,d=R.version,p=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function x(A,P){A.getRGB(Wl,mh(i)),e.buffers.color.setClear(Wl.r,Wl.g,Wl.b,P,r)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,P=1){o.set(A),a=P,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(A){a=A,x(o,a)},render:g,addToRenderList:E,dispose:_}}function Sg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(at,ft,et,Mt,it){let yt=!1,lt=d(at,Mt,et,ft);r!==lt&&(r=lt,c(r.object)),yt=m(at,Mt,et,it),yt&&g(at,Mt,et,it),it!==null&&t.update(it,i.ELEMENT_ARRAY_BUFFER),(yt||o)&&(o=!1,R(at,ft,et,Mt),it!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function l(){return i.createVertexArray()}function c(at){return i.bindVertexArray(at)}function u(at){return i.deleteVertexArray(at)}function d(at,ft,et,Mt){let it=Mt.wireframe===!0,yt=n[ft.id];yt===void 0&&(yt={},n[ft.id]=yt);let lt=at.isInstancedMesh===!0?at.id:0,Rt=yt[lt];Rt===void 0&&(Rt={},yt[lt]=Rt);let vt=Rt[et.id];vt===void 0&&(vt={},Rt[et.id]=vt);let Nt=vt[it];return Nt===void 0&&(Nt=p(l()),vt[it]=Nt),Nt}function p(at){let ft=[],et=[],Mt=[];for(let it=0;it<e;it++)ft[it]=0,et[it]=0,Mt[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ft,enabledAttributes:et,attributeDivisors:Mt,object:at,attributes:{},index:null}}function m(at,ft,et,Mt){let it=r.attributes,yt=ft.attributes,lt=0,Rt=et.getAttributes();for(let vt in Rt)if(Rt[vt].location>=0){let Yt=it[vt],$t=yt[vt];if($t===void 0&&(vt==="instanceMatrix"&&at.instanceMatrix&&($t=at.instanceMatrix),vt==="instanceColor"&&at.instanceColor&&($t=at.instanceColor)),Yt===void 0||Yt.attribute!==$t||$t&&Yt.data!==$t.data)return!0;lt++}return r.attributesNum!==lt||r.index!==Mt}function g(at,ft,et,Mt){let it={},yt=ft.attributes,lt=0,Rt=et.getAttributes();for(let vt in Rt)if(Rt[vt].location>=0){let Yt=yt[vt];Yt===void 0&&(vt==="instanceMatrix"&&at.instanceMatrix&&(Yt=at.instanceMatrix),vt==="instanceColor"&&at.instanceColor&&(Yt=at.instanceColor));let $t={};$t.attribute=Yt,Yt&&Yt.data&&($t.data=Yt.data),it[vt]=$t,lt++}r.attributes=it,r.attributesNum=lt,r.index=Mt}function E(){let at=r.newAttributes;for(let ft=0,et=at.length;ft<et;ft++)at[ft]=0}function x(at){_(at,0)}function _(at,ft){let et=r.newAttributes,Mt=r.enabledAttributes,it=r.attributeDivisors;et[at]=1,Mt[at]===0&&(i.enableVertexAttribArray(at),Mt[at]=1),it[at]!==ft&&(i.vertexAttribDivisor(at,ft),it[at]=ft)}function A(){let at=r.newAttributes,ft=r.enabledAttributes;for(let et=0,Mt=ft.length;et<Mt;et++)ft[et]!==at[et]&&(i.disableVertexAttribArray(et),ft[et]=0)}function P(at,ft,et,Mt,it,yt,lt){lt===!0?i.vertexAttribIPointer(at,ft,et,it,yt):i.vertexAttribPointer(at,ft,et,Mt,it,yt)}function R(at,ft,et,Mt){E();let it=Mt.attributes,yt=et.getAttributes(),lt=ft.defaultAttributeValues;for(let Rt in yt){let vt=yt[Rt];if(vt.location>=0){let Nt=it[Rt];if(Nt===void 0&&(Rt==="instanceMatrix"&&at.instanceMatrix&&(Nt=at.instanceMatrix),Rt==="instanceColor"&&at.instanceColor&&(Nt=at.instanceColor)),Nt!==void 0){let Yt=Nt.normalized,$t=Nt.itemSize,fe=t.get(Nt);if(fe===void 0)continue;let Pt=fe.buffer,ne=fe.type,ce=fe.bytesPerElement,ge=ne===i.INT||ne===i.UNSIGNED_INT||Nt.gpuType===ol;if(Nt.isInterleavedBufferAttribute){let ie=Nt.data,_e=ie.isInterleavedBuffer===!0?ie.stride:ie.itemSize,De=Nt.offset;if(ie.isInstancedInterleavedBuffer||ie.isInstancedBufferAttribute){for(let se=0;se<vt.locationSize;se++)_(vt.location+se,ie.meshPerAttribute);at.isInstancedMesh!==!0&&Mt._maxInstanceCount===void 0&&(Mt._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let se=0;se<vt.locationSize;se++)x(vt.location+se);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let se=0;se<vt.locationSize;se++)P(vt.location+se,$t/vt.locationSize,ne,Yt,_e*ce,(De+$t/vt.locationSize*se)*ce,ge)}else{if(Nt.isInstancedBufferAttribute){for(let ie=0;ie<vt.locationSize;ie++)_(vt.location+ie,Nt.meshPerAttribute);at.isInstancedMesh!==!0&&Mt._maxInstanceCount===void 0&&(Mt._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let ie=0;ie<vt.locationSize;ie++)x(vt.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let ie=0;ie<vt.locationSize;ie++)P(vt.location+ie,$t/vt.locationSize,ne,Yt,$t*ce,$t/vt.locationSize*ie*ce,ge)}}else if(lt!==void 0){let Yt=lt[Rt];if(Yt!==void 0)switch(Yt.length){case 2:i.vertexAttrib2fv(vt.location,Yt);break;case 3:i.vertexAttrib3fv(vt.location,Yt);break;case 4:i.vertexAttrib4fv(vt.location,Yt);break;default:i.vertexAttrib1fv(vt.location,Yt)}}}}A()}function O(){Z();for(let at in n){let ft=n[at];for(let et in ft){let Mt=ft[et];for(let it in Mt){let yt=Mt[it];for(let lt in yt)u(yt[lt].object),delete yt[lt];delete Mt[it]}}delete n[at]}}function L(at){if(n[at.id]===void 0)return;let ft=n[at.id];for(let et in ft){let Mt=ft[et];for(let it in Mt){let yt=Mt[it];for(let lt in yt)u(yt[lt].object),delete yt[lt];delete Mt[it]}}delete n[at.id]}function M(at){for(let ft in n){let et=n[ft];for(let Mt in et){let it=et[Mt];if(it[at.id]===void 0)continue;let yt=it[at.id];for(let lt in yt)u(yt[lt].object),delete yt[lt];delete it[at.id]}}}function F(at){for(let ft in n){let et=n[ft],Mt=at.isInstancedMesh===!0?at.id:0,it=et[Mt];if(it!==void 0){for(let yt in it){let lt=it[yt];for(let Rt in lt)u(lt[Rt].object),delete lt[Rt];delete it[yt]}delete et[Mt],Object.keys(et).length===0&&delete n[ft]}}}function Z(){k(),o=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:Z,resetDefaultState:k,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfObject:F,releaseStatesOfProgram:M,initAttributes:E,enableAttribute:x,disableUnusedAttributes:A}}function wg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let p=0;for(let m=0;m<u;m++)p+=c[m];e.update(p,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function bg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let M=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(M){return!(M!==Fi&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){let F=M===Ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(M!==oi&&M!==wi&&!F&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Ue("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Ue("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=i.getParameter(i.MAX_SAMPLES),L=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:A,maxVaryings:P,maxFragmentUniforms:R,maxSamples:O,samples:L}}function Ag(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ri,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let m=d.length!==0||p||n!==0||s;return s=p,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=u(d,p,0)},this.setState=function(d,p,m){let g=d.clippingPlanes,E=d.clipIntersection,x=d.clipShadows,_=i.get(d);if(!s||g===null||g.length===0||r&&!x)r?u(null):c();else{let A=r?0:n,P=A*4,R=_.clippingState||null;l.value=R,R=u(g,p,P,m);for(let O=0;O!==P;++O)R[O]=e[O];_.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,p,m,g){let E=d!==null?d.length:0,x=null;if(E!==0){if(x=l.value,g!==!0||x===null){let _=m+E*4,A=p.matrixWorldInverse;a.getNormalMatrix(A),(x===null||x.length<_)&&(x=new Float32Array(_));for(let P=0,R=m;P!==E;++P,R+=4)o.copy(d[P]).applyMatrix4(A,a),o.normal.toArray(x,R),x[R+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,x}}var Io=class extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Kr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Re(5,5,5),r=new Si({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:Is});r.uniforms.tEquirect.value=e;let o=new Ft(s,r),a=e.minFilter;return e.minFilter===es&&(e.minFilter=jn),new dr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Td=256,Eg=3,Tg=20,$d=256,Kd=16,Cg=3,Rg=new j,Pg=new be,ql=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new dr(1,10,null),this._boxMesh=new Ft(new Re(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Rg}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,p=l.autoClearColor,m=l.autoClearDepth,g=l.autoClearStencil,E=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,E===null&&(t.background=l.getClearColor(Pg));let x=new dr(n,s,u);return x.position.copy(a),x.update(l,t),l.autoClear=d,l.autoClearColor=p,l.autoClearDepth=m,l.autoClearStencil=g,t.background=E,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Td,md(t))}_fromTexture(t,e){t.mapping===Ls||t.mapping===mr?this._setSize(t.image.length===0?Td:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Cd(t,!1,!1),n=Math.log2(t)-Eg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Cd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ls||t.mapping===mr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Rd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Ig(),this._integrationMaterial=Fg());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Kd);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Cg)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/($d*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Lg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Cd(i,t,e){return new Io(i,{minFilter:es,generateMipmaps:t,type:Ii,colorSpace:Or,depthBuffer:e})}function Fo(i,t,e){return new Si({name:i,uniforms:t,vertexShader:Ke.cube_vert,fragmentShader:e,side:On,blending:Is,depthTest:!1,depthWrite:!1})}function Ig(){return Fo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function Fg(){return Fo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Kd}},`

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
	`)}function Lg(){return Fo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Tg}
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
	`)}function Dg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(p,m=!1){return p==null?null:m?o(p):r(p)}function r(p){if(p&&p.isTexture){let m=p.mapping;if(m===il||m===sl)if(t.has(p)){let g=t.get(p).texture;return a(g,p.mapping)}else{let g=p.image;if(g&&g.height>0){let E=new Io(g.height);return E.fromEquirectangularTexture(i,p),t.set(p,E),p.addEventListener("dispose",c),a(E.texture,p.mapping)}else return null}}return p}function o(p){if(p&&p.isTexture&&p.isPMREMTexture!==!0){let m=p.mapping,g=m===il||m===sl,E=m===Ls||m===mr;if(g||E){let x=e.get(p),_=x!==void 0?x.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==_)return n===null&&(n=new ql(i)),x=g?n.fromEquirectangular(p,x):n.fromCubemap(p,x),x.texture.pmremVersion=p.pmremVersion,e.set(p,x),x.texture;if(x!==void 0)return x.texture;{let A=p.image;return g&&A&&A.height>0||E&&A&&l(A)?(n===null&&(n=new ql(i)),x=g?n.fromEquirectangular(p):n.fromCubemap(p),x.texture.pmremVersion=p.pmremVersion,e.set(p,x),p.addEventListener("dispose",u),x.texture):null}}}return p}function a(p,m){return m===il?p.mapping=Ls:m===sl&&(p.mapping=mr),p}function l(p){let m=0,g=6;for(let E=0;E<g;E++)p[E]!==void 0&&m++;return m===g}function c(p){let m=p.target;m.removeEventListener("dispose",c);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function u(p){let m=p.target;m.removeEventListener("dispose",u);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function zg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Dr("WebGLRenderer: "+n+" extension not supported."),s}}}function Ng(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let x in g.attributes)t.remove(g.attributes[x]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);let E=r.get(g);E&&(t.remove(E),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,E){return s[E.id]!==void 0||(E.addEventListener("dispose",a),s[E.id]=new WeakRef(E),o.register(E,E.id,E),e.memory.geometries++),E}function u(g){let E=g.attributes;for(let x in E)t.update(E[x],i.ARRAY_BUFFER)}function d(g){let E=g.index,x=g.attributes.position,_=0;if(x===void 0)return;let A=E!==null?E.count:x.count-1,P=x.count>=65535?Yr:qr,R=new P(Math.ceil(A/3)*6,1),O=R.array;if(E!==null){let M=E.array;_=E.version;for(let F=0,Z=0;F<A;F+=3){let k=M[F+0],at=M[F+1],ft=M[F+2];O[Z++]=k,O[Z++]=at,O[Z++]=at,O[Z++]=ft,O[Z++]=ft,O[Z++]=k}}else{_=x.version;for(let M=0,F=0;M<A;M+=3){let Z=M+0,k=M+1,at=M+2;O[F++]=Z,O[F++]=k,O[F++]=k,O[F++]=at,O[F++]=at,O[F++]=Z}}R.version=_;let L=r.get(g);L&&t.remove(L),r.set(g,R)}function p(g){let E=r.get(g);if(E){let x=g.index;x!==null&&E.version<x.version&&d(g)}else d(g);return r.get(g)}function m(){for(let g in s){let E=s[g].deref();E!==void 0&&l(E)}}return{get:c,update:u,getWireframeAttribute:p,dispose:m}}function Ug(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,d*o,m),e.update(p,n,m))}function u(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,m);let E=0;for(let x=0;x<m;x++)E+=p[x];e.update(E,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Og(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ke("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Bg(i,t,e){let n=new WeakMap,s=new xn;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,p=n.get(a);if(p===void 0||p.count!==d){let Z=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",Z)};p!==void 0&&p.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,E=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],P=0;m===!0&&(P=1),g===!0&&(P=2),E===!0&&(P=3);let R=a.attributes.position.count*P,O=1;R>t.maxTextureSize&&(O=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);let L=new Float32Array(R*O*4*d),M=new Hr(L,R,O,d);M.type=wi,M.needsUpdate=!0;let F=P*4;for(let k=0;k<d;k++){let at=x[k],ft=_[k],et=A[k],Mt=R*O*4*k;for(let it=0;it<at.count;it++){let yt=it*F;m===!0&&(s.fromBufferAttribute(at,it),L[Mt+yt+0]=s.x,L[Mt+yt+1]=s.y,L[Mt+yt+2]=s.z,L[Mt+yt+3]=0),g===!0&&(s.fromBufferAttribute(ft,it),L[Mt+yt+4]=s.x,L[Mt+yt+5]=s.y,L[Mt+yt+6]=s.z,L[Mt+yt+7]=0),E===!0&&(s.fromBufferAttribute(et,it),L[Mt+yt+8]=s.x,L[Mt+yt+9]=s.y,L[Mt+yt+10]=s.z,L[Mt+yt+11]=et.itemSize===4?s.w:1)}}p={count:d,texture:M,size:new wt(R,O)},n.set(a,p),a.addEventListener("dispose",Z)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let E=0;E<c.length;E++)m+=c[E];let g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function kg(i,t,e,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,p=t.get(c,d);if(r.get(p)!==u&&(t.update(p),r.set(p,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return p}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Vg={[$c]:"LINEAR_TONE_MAPPING",[Kc]:"REINHARD_TONE_MAPPING",[jc]:"CINEON_TONE_MAPPING",[vo]:"ACES_FILMIC_TONE_MAPPING",[th]:"AGX_TONE_MAPPING",[eh]:"NEUTRAL_TONE_MAPPING",[Qc]:"CUSTOM_TONE_MAPPING"};function Hg(i,t,e,n,s,r){let o=new hi(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new $e;u.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new We([0,2,0,0,2,0],2));let d=new ka({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ft(u,d),m=new xo(-1,1,1,-1,0,1),g=null,E=null,x=!1,_,A=null,P=[],R=!1;this.setSize=function(O,L){o.setSize(O,L),a!==null&&a.setSize(O,L),l!==null&&l.setSize(O,L);for(let M=0;M<P.length;M++){let F=P[M];F.setSize&&F.setSize(O,L)}},this.setEffects=function(O){P=O,R=P.length>0&&P[0].isRenderPass===!0;let L=o.width,M=o.height;P.length>0&&a===null&&(a=new hi(L,M,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),l=new hi(L,M,{type:Ii,depthBuffer:!1,stencilBuffer:!1}));let F=s===!0&&P.some(Z=>Z.needsDepthTexture===!0);F!==(o.depthTexture!==null)&&(F===!0&&c===null&&(c=new ji(L,M),r===!0&&(c.format=ns,c.type=Ds)),o.dispose(),o.depthTexture=F?c:null,o.resolveDepthBuffer=F,o.storeMultisampledDepthBuffer=F);for(let Z=0;Z<P.length;Z++){let k=P[Z];k.setSize&&k.setSize(L,M),F&&k.needsDepthTexture===!0&&k.setDepthTexture&&k.setDepthTexture(c)}},this.begin=function(O,L){if(x||O.toneMapping===Vi&&P.length===0)return!1;if(A=L,L!==null){let M=L.width,F=L.height;(o.width!==M||o.height!==F)&&this.setSize(M,F)}return R===!1&&O.setRenderTarget(o),_=O.toneMapping,O.toneMapping=Vi,!0},this.hasRenderPass=function(){return R},this.end=function(O,L){O.toneMapping=_,x=!0;let M=o,F=a;for(let Z=0;Z<P.length;Z++){let k=P[Z];k.enabled!==!1&&(k.render(O,F,M,L),k.needsSwap!==!1&&(M=F,F=F===a?l:a))}if(g!==O.outputColorSpace||E!==O.toneMapping){g=O.outputColorSpace,E=O.toneMapping,d.defines={},nn.getTransfer(g)===ln&&(d.defines.SRGB_TRANSFER="");let Z=Vg[E];Z&&(d.defines[Z]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=M.texture,O.setRenderTarget(A),O.render(p,m),A=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var jd=new Qn,Qd=new ji(1,1),tf=new Qr(1),ef=new Hr,nf=new Ra,sf=new Kr,Id=[],Fd=[],Ld=new Float32Array(16),Dd=new Float32Array(9),zd=new Float32Array(4);function _r(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Id[s];if(r===void 0&&(r=new Float32Array(s),Id[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Dn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function zn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zl(i,t){let e=Fd[t];e===void 0&&(e=new Int32Array(t),Fd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Gg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Dn(e,t))return;i.uniform2fv(this.addr,t),zn(e,t)}}function Xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Dn(e,t))return;i.uniform3fv(this.addr,t),zn(e,t)}}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Dn(e,t))return;i.uniform4fv(this.addr,t),zn(e,t)}}function Yg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Dn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),zn(e,t)}else{if(Dn(e,n))return;zd.set(n),i.uniformMatrix2fv(this.addr,!1,zd),zn(e,n)}}function Zg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Dn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),zn(e,t)}else{if(Dn(e,n))return;Dd.set(n),i.uniformMatrix3fv(this.addr,!1,Dd),zn(e,n)}}function Jg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Dn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),zn(e,t)}else{if(Dn(e,n))return;Ld.set(n),i.uniformMatrix4fv(this.addr,!1,Ld),zn(e,n)}}function $g(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Dn(e,t))return;i.uniform2iv(this.addr,t),zn(e,t)}}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Dn(e,t))return;i.uniform3iv(this.addr,t),zn(e,t)}}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Dn(e,t))return;i.uniform4iv(this.addr,t),zn(e,t)}}function tx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Dn(e,t))return;i.uniform2uiv(this.addr,t),zn(e,t)}}function nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Dn(e,t))return;i.uniform3uiv(this.addr,t),zn(e,t)}}function ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Dn(e,t))return;i.uniform4uiv(this.addr,t),zn(e,t)}}function Jl(i){return i.version===0&&(i.compareFunction=uh,i.needsUpdate=!0),i}function sx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Jl(Qd):r=jd,e.setTexture2D(t||r,s)}function rx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nf,s)}function ox(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Jl(tf):r=sf,e.setTextureCube(t||r,s)}function ax(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ef,s)}function lx(i){switch(i){case 5126:return Gg;case 35664:return Wg;case 35665:return Xg;case 35666:return qg;case 35674:return Yg;case 35675:return Zg;case 35676:return Jg;case 5124:case 35670:return $g;case 35667:case 35671:return Kg;case 35668:case 35672:return jg;case 35669:case 35673:return Qg;case 5125:return tx;case 36294:return ex;case 36295:return nx;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return ax}}function cx(i,t){i.uniform1fv(this.addr,t)}function hx(i,t){let e=_r(t,this.size,2);i.uniform2fv(this.addr,e)}function ux(i,t){let e=_r(t,this.size,3);i.uniform3fv(this.addr,e)}function dx(i,t){let e=_r(t,this.size,4);i.uniform4fv(this.addr,e)}function fx(i,t){let e=_r(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function px(i,t){let e=_r(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function mx(i,t){let e=_r(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function gx(i,t){i.uniform1iv(this.addr,t)}function xx(i,t){i.uniform2iv(this.addr,t)}function _x(i,t){i.uniform3iv(this.addr,t)}function yx(i,t){i.uniform4iv(this.addr,t)}function vx(i,t){i.uniform1uiv(this.addr,t)}function Mx(i,t){i.uniform2uiv(this.addr,t)}function Sx(i,t){i.uniform3uiv(this.addr,t)}function wx(i,t){i.uniform4uiv(this.addr,t)}function bx(i,t,e){let n=this.cache,s=t.length,r=Zl(e,s);Dn(n,r)||(i.uniform1iv(this.addr,r),zn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Jl(Qd):o=jd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Ax(i,t,e){let n=this.cache,s=t.length,r=Zl(e,s);Dn(n,r)||(i.uniform1iv(this.addr,r),zn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||nf,r[o])}function Ex(i,t,e){let n=this.cache,s=t.length,r=Zl(e,s);Dn(n,r)||(i.uniform1iv(this.addr,r),zn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Jl(tf):o=sf;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Tx(i,t,e){let n=this.cache,s=t.length,r=Zl(e,s);Dn(n,r)||(i.uniform1iv(this.addr,r),zn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ef,r[o])}function Cx(i){switch(i){case 5126:return cx;case 35664:return hx;case 35665:return ux;case 35666:return dx;case 35674:return fx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return gx;case 35667:case 35671:return xx;case 35668:case 35672:return _x;case 35669:case 35673:return yx;case 5125:return vx;case 36294:return Mx;case 36295:return Sx;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return Tx}}var Eh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=lx(e.type)}},Th=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cx(e.type)}},Ch=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},bh=/(\w+)(\])?(\[|\.)?/g;function Nd(i,t){i.seq.push(t),i.map[t.id]=t}function Rx(i,t,e){let n=i.name,s=n.length;for(bh.lastIndex=0;;){let r=bh.exec(n),o=bh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Nd(e,c===void 0?new Eh(a,i,t):new Th(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Ch(a),Nd(e,d)),e=d}}}var xr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Rx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Ud(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Px=37297,Ix=0;function Fx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Od=new Xe;function Lx(i){nn._getMatrix(Od,nn.workingColorSpace,i);let t=`mat3( ${Od.elements.map(e=>e.toFixed(4))} )`;switch(nn.getTransfer(i)){case Br:return[t,"LinearTransferOETF"];case ln:return[t,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Bd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Fx(i.getShaderSource(t),a)}else return r}function Dx(i,t){let e=Lx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var zx={[$c]:"Linear",[Kc]:"Reinhard",[jc]:"Cineon",[vo]:"ACESFilmic",[th]:"AgX",[eh]:"Neutral",[Qc]:"Custom"};function Nx(i,t){let e=zx[t];return e===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xl=new j;function Ux(){nn.getLuminanceCoefficients(Xl);let i=Xl.x.toFixed(4),t=Xl.y.toFixed(4),e=Xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ox(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function Bx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Po(i){return i!==""}function kd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Vd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(i){return i.replace(Vx,Hx)}function Hx(i,t){let e=Ke[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Rh(e)}var Gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hd(i){return i.replace(Gx,Wx)}function Wx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Xx={[Ps]:"SHADOWMAP_TYPE_PCF",[fr]:"SHADOWMAP_TYPE_VSM"};function qx(i){return Xx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Yx={[mr]:"ENVMAP_MODE_REFRACTION"};function Zx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Yx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Jx={[yo]:"ENVMAP_BLENDING_MULTIPLY",[td]:"ENVMAP_BLENDING_MIX",[ed]:"ENVMAP_BLENDING_ADD"};function $x(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Jx[i.combine]||"ENVMAP_BLENDING_NONE"}function Kx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=qx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Zx(e),d=$x(e),p=Ox(e),m=Bx(r),g=s.createProgram(),E,x,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(E=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Po).join(`
`),E.length>0&&(E+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Po).join(`
`),x.length>0&&(x+=`
`)):(E=[Gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),x=[Gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vi?"#define TONE_MAPPING":"",e.toneMapping!==Vi?Ke.tonemapping_pars_fragment:"",e.toneMapping!==Vi?Nx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Dx("linearToOutputTexel",e.outputColorSpace),Ux(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Po).join(`
`)),o=Rh(o),o=kd(o,e),o=Vd(o,e),a=Rh(a),a=kd(a,e),a=Vd(a,e),o=Hd(o),a=Hd(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,E=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,x=["#define varying in",e.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let A=_+E+o,P=_+x+a,R=Ud(s,s.VERTEX_SHADER,A),O=Ud(s,s.FRAGMENT_SHADER,P);s.attachShader(g,R),s.attachShader(g,O),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function L(k){if(i.debug.checkShaderErrors){let at=s.getProgramInfoLog(g)||"",ft=s.getShaderInfoLog(R)||"",et=s.getShaderInfoLog(O)||"",Mt=at.trim(),it=ft.trim(),yt=et.trim(),lt=!0,Rt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(lt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,R,O);else{let vt=Bd(s,R,"vertex"),Nt=Bd(s,O,"fragment");ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+Mt+`
`+vt+`
`+Nt)}else Mt!==""?Ue("WebGLProgram: Program Info Log:",Mt):(it===""||yt==="")&&(Rt=!1);Rt&&(k.diagnostics={runnable:lt,programLog:Mt,vertexShader:{log:it,prefix:E},fragmentShader:{log:yt,prefix:x}})}s.deleteShader(R),s.deleteShader(O),M=new xr(s,g),F=kx(s,g)}let M;this.getUniforms=function(){return M===void 0&&L(this),M};let F;this.getAttributes=function(){return F===void 0&&L(this),F};let Z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=s.getProgramParameter(g,Px)),Z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ix++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=O,this}var jx=0,Ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ih(t),e.set(t,n)),n}},Ih=class{constructor(t){this.id=jx++,this.code=t,this.usedTimes=0}};function Qx(i){return i===gs||i===Eo||i===To}function t_(i,t,e,n,s,r){let o=new Gr,a=new Ph,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,F,Z,k,at,ft){let et=k.fog,Mt=at.geometry,it=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?k.environment:null,yt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,lt=t.get(M.envMap||it,yt),Rt=p[M.type],vt=n.precision;M.precision!==null&&(vt=n.getMaxPrecision(M.precision),vt!==M.precision&&Ue("WebGLProgram.getParameters:",M.precision,"not supported, using",vt,"instead."));let Nt=Mt.morphAttributes.position||Mt.morphAttributes.normal||Mt.morphAttributes.color,Yt=Nt!==void 0?Nt.length:0,$t=0;Mt.morphAttributes.position!==void 0&&($t=1),Mt.morphAttributes.normal!==void 0&&($t=2),Mt.morphAttributes.color!==void 0&&($t=3);let fe,Pt,ne,ce;if(Rt){let ue=Gi[Rt];fe=ue.vertexShader,Pt=ue.fragmentShader}else{fe=M.vertexShader,Pt=M.fragmentShader;let ue=a.getVertexShaderStage(M),Ye=a.getFragmentShaderStage(M);a.update(M,ue,Ye),ne=ue.id,ce=Ye.id}let ge=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),_e=at.isInstancedMesh===!0,De=at.isBatchedMesh===!0,se=!!M.map,W=!!M.matcap,St=!!lt,rt=St&&lt.isPMREMTexture===!0,ut=!!M.aoMap,h=!!M.lightMap,y=!!M.bumpMap&&M.wireframe===!1,D=!!M.normalMap,N=!!M.displacementMap,J=!!M.emissiveMap,dt=!!M.metalnessMap,ot=!!M.roughnessMap,Bt=M.anisotropy>0,X=M.clearcoat>0,Zt=M.diffuseRoughness>0,K=M.dispersion>0,Q=M.retroreflectivity>0,H=M.iridescence>0,zt=M.sheen>0,ht=M.transmission>0,mt=Bt&&!!M.anisotropyMap,z=X&&!!M.clearcoatMap,S=X&&!!M.clearcoatNormalMap,Y=X&&!!M.clearcoatRoughnessMap,gt=Zt&&!!M.diffuseRoughnessMap,pt=H&&!!M.iridescenceMap,At=H&&!!M.iridescenceThicknessMap,Gt=zt&&!!M.sheenColorMap,Lt=zt&&!!M.sheenRoughnessMap,Ot=!!M.specularMap,ee=!!M.specularColorMap,pe=!!M.specularIntensityMap,tt=ht&&!!M.transmissionMap,Ut=ht&&!!M.thicknessMap,qt=!!M.gradientMap,Qt=!!M.alphaMap,he=M.alphaTest>0,me=!!M.alphaHash,Ae=!!M.extensions,Kt=Vi;M.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Kt=i.toneMapping);let Ge=rt?lt.isCompressedCubeTexture?lt.image[0].mipmaps:lt.mipmaps:null,Se={shaderID:Rt,shaderType:M.type,shaderName:M.name,vertexShader:fe,fragmentShader:Pt,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:vt,batching:De,batchingColor:De&&at._colorsTexture!==null,instancing:_e,instancingColor:_e&&at.instanceColor!==null,instancingMorph:_e&&at.morphTexture!==null,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:nn.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:se,matcap:W,envMap:St,envMapMode:St&&lt.mapping,envMapPMREM:rt,envMapMaxLod:rt?Ge.length-1:null,envMapSize:rt?Ge[0].width:null,aoMap:ut,lightMap:h,bumpMap:y,normalMap:D,displacementMap:N,emissiveMap:J,normalMapObjectSpace:D&&M.normalMapType===sd,normalMapTangentSpace:D&&M.normalMapType===Co,packedNormalMap:D&&M.normalMapType===Co&&Qx(M.normalMap.format),metalnessMap:dt,roughnessMap:ot,anisotropy:Bt,anisotropyMap:mt,clearcoat:X,clearcoatMap:z,clearcoatNormalMap:S,clearcoatRoughnessMap:Y,diffuseRoughness:Zt,diffuseRoughnessMap:gt,dispersion:K,retroreflection:Q,iridescence:H,iridescenceMap:pt,iridescenceThicknessMap:At,sheen:zt,sheenColorMap:Gt,sheenRoughnessMap:Lt,specularMap:Ot,specularColorMap:ee,specularIntensityMap:pe,transmission:ht,transmissionMap:tt,thicknessMap:Ut,gradientMap:qt,opaque:M.transparent===!1&&M.blending===pr&&M.alphaToCoverage===!1,alphaMap:Qt,alphaTest:he,alphaHash:me,combine:M.combine,mapUv:se&&m(M.map.channel),aoMapUv:ut&&m(M.aoMap.channel),lightMapUv:h&&m(M.lightMap.channel),bumpMapUv:y&&m(M.bumpMap.channel),normalMapUv:D&&m(M.normalMap.channel),displacementMapUv:N&&m(M.displacementMap.channel),emissiveMapUv:J&&m(M.emissiveMap.channel),metalnessMapUv:dt&&m(M.metalnessMap.channel),roughnessMapUv:ot&&m(M.roughnessMap.channel),anisotropyMapUv:mt&&m(M.anisotropyMap.channel),clearcoatMapUv:z&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:S&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&m(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:gt&&m(M.diffuseRoughnessMap.channel),iridescenceMapUv:pt&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:At&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&m(M.sheenRoughnessMap.channel),specularMapUv:Ot&&m(M.specularMap.channel),specularColorMapUv:ee&&m(M.specularColorMap.channel),specularIntensityMapUv:pe&&m(M.specularIntensityMap.channel),transmissionMapUv:tt&&m(M.transmissionMap.channel),thicknessMapUv:Ut&&m(M.thicknessMap.channel),alphaMapUv:Qt&&m(M.alphaMap.channel),vertexTangents:!!Mt.attributes.tangent&&(D||Bt),vertexNormals:!!Mt.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Mt.attributes.color&&Mt.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!Mt.attributes.uv&&(se||Qt),fog:!!et,useFog:M.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||Mt.attributes.normal===void 0&&D===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ie,skinning:at.isSkinnedMesh===!0,hasPositionAttribute:Mt.attributes.position!==void 0,morphTargets:Mt.morphAttributes.position!==void 0,morphNormals:Mt.morphAttributes.normal!==void 0,morphColors:Mt.morphAttributes.color!==void 0,morphTargetsCount:Yt,morphTextureStride:$t,numSunLights:F.sun.length,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numSunLightShadows:F.sunShadowMap.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbeGrids:ft.filter(ue=>ue.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&Z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Kt,decodeVideoTexture:se&&M.map.isVideoTexture===!0&&nn.getTransfer(M.map.colorSpace)===ln,decodeVideoTextureEmissive:J&&M.emissiveMap.isVideoTexture===!0&&nn.getTransfer(M.emissiveMap.colorSpace)===ln,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ve,flipSided:M.side===On,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ae&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&M.extensions.multiDraw===!0||De)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function E(M){let F=[];if(M.shaderID?F.push(M.shaderID):(F.push(M.customVertexShaderID),F.push(M.customFragmentShaderID)),M.defines!==void 0)for(let Z in M.defines)F.push(Z),F.push(M.defines[Z]);return M.isRawShaderMaterial===!1&&(x(F,M),_(F,M),F.push(i.outputColorSpace)),F.push(M.customProgramCacheKey),F.join()}function x(M,F){M.push(F.precision),M.push(F.outputColorSpace),M.push(F.envMapMode),M.push(F.envMapPMREM),M.push(F.envMapMaxLod),M.push(F.envMapSize),M.push(F.mapUv),M.push(F.alphaMapUv),M.push(F.lightMapUv),M.push(F.aoMapUv),M.push(F.bumpMapUv),M.push(F.normalMapUv),M.push(F.displacementMapUv),M.push(F.emissiveMapUv),M.push(F.metalnessMapUv),M.push(F.roughnessMapUv),M.push(F.anisotropyMapUv),M.push(F.clearcoatMapUv),M.push(F.clearcoatNormalMapUv),M.push(F.clearcoatRoughnessMapUv),M.push(F.diffuseRoughnessMapUv),M.push(F.iridescenceMapUv),M.push(F.iridescenceThicknessMapUv),M.push(F.sheenColorMapUv),M.push(F.sheenRoughnessMapUv),M.push(F.specularMapUv),M.push(F.specularColorMapUv),M.push(F.specularIntensityMapUv),M.push(F.transmissionMapUv),M.push(F.thicknessMapUv),M.push(F.combine),M.push(F.fogExp2),M.push(F.sizeAttenuation),M.push(F.morphTargetsCount),M.push(F.numSunLights),M.push(F.numDirLights),M.push(F.numPointLights),M.push(F.numSpotLights),M.push(F.numSpotLightMaps),M.push(F.numHemiLights),M.push(F.numRectAreaLights),M.push(F.numSunLightShadows),M.push(F.numDirLightShadows),M.push(F.numPointLightShadows),M.push(F.numSpotLightShadows),M.push(F.numSpotLightShadowsWithMaps),M.push(F.numLightProbeGrids),M.push(F.shadowMapType),M.push(F.toneMapping),M.push(F.numClippingPlanes),M.push(F.numClipIntersection),M.push(F.depthPacking)}function _(M,F){o.disableAll(),F.instancing&&o.enable(0),F.instancingColor&&o.enable(1),F.instancingMorph&&o.enable(2),F.matcap&&o.enable(3),F.envMap&&o.enable(4),F.normalMapObjectSpace&&o.enable(5),F.normalMapTangentSpace&&o.enable(6),F.clearcoat&&o.enable(7),F.iridescence&&o.enable(8),F.alphaTest&&o.enable(9),F.vertexColors&&o.enable(10),F.vertexAlphas&&o.enable(11),F.vertexUv1s&&o.enable(12),F.vertexUv2s&&o.enable(13),F.vertexUv3s&&o.enable(14),F.vertexTangents&&o.enable(15),F.anisotropy&&o.enable(16),F.alphaHash&&o.enable(17),F.batching&&o.enable(18),F.dispersion&&o.enable(19),F.retroreflection&&o.enable(24),F.diffuseRoughness&&o.enable(25),F.batchingColor&&o.enable(20),F.gradientMap&&o.enable(21),F.packedNormalMap&&o.enable(22),F.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),F.fog&&o.enable(0),F.useFog&&o.enable(1),F.flatShading&&o.enable(2),F.logarithmicDepthBuffer&&o.enable(3),F.reversedDepthBuffer&&o.enable(4),F.skinning&&o.enable(5),F.morphTargets&&o.enable(6),F.morphNormals&&o.enable(7),F.morphColors&&o.enable(8),F.premultipliedAlpha&&o.enable(9),F.shadowMapEnabled&&o.enable(10),F.doubleSided&&o.enable(11),F.flipSided&&o.enable(12),F.useDepthPacking&&o.enable(13),F.dithering&&o.enable(14),F.transmission&&o.enable(15),F.sheen&&o.enable(16),F.opaque&&o.enable(17),F.pointsUvs&&o.enable(18),F.decodeVideoTexture&&o.enable(19),F.decodeVideoTextureEmissive&&o.enable(20),F.alphaToCoverage&&o.enable(21),F.numLightProbeGrids>0&&o.enable(22),F.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function A(M){let F=p[M.type],Z;if(F){let k=Gi[F];Z=bd.clone(k.uniforms)}else Z=M.uniforms;return Z}function P(M,F){let Z=u.get(F);return Z!==void 0?++Z.usedTimes:(Z=new Kx(i,F,M,s),c.push(Z),u.set(F,Z)),Z}function R(M){if(--M.usedTimes===0){let F=c.indexOf(M);c[F]=c[c.length-1],c.pop(),u.delete(M.cacheKey),M.destroy()}}function O(M){a.remove(M)}function L(){a.dispose()}return{getParameters:g,getProgramCacheKey:E,getUniforms:A,acquireProgram:P,releaseProgram:R,releaseShaderCache:O,programs:c,dispose:L}}function e_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function n_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Wd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(p){let m=0;return p.isInstancedMesh&&(m+=2),p.isSkinnedMesh&&(m+=1),m}function a(p,m,g,E,x,_){let A=i[t];return A===void 0?(A={id:p.id,object:p,geometry:m,material:g,materialVariant:o(p),groupOrder:E,renderOrder:p.renderOrder,z:x,group:_},i[t]=A):(A.id=p.id,A.object=p,A.geometry=m,A.material=g,A.materialVariant=o(p),A.groupOrder=E,A.renderOrder=p.renderOrder,A.z=x,A.group=_),t++,A}function l(p,m,g,E,x,_,A){A.reversedDepth===!0&&(x=-x);let P=a(p,m,g,E,x,_);g.transmission>0?n.push(P):g.transparent===!0?s.push(P):e.push(P)}function c(p,m,g,E,x,_){let A=a(p,m,g,E,x,_);g.transmission>0?n.unshift(A):g.transparent===!0?s.unshift(A):e.unshift(A)}function u(p,m){e.length>1&&e.sort(p||n_),n.length>1&&n.sort(m||Wd),s.length>1&&s.sort(m||Wd)}function d(){for(let p=t,m=i.length;p<m;p++){let g=i[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function i_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Xd,i.set(n,[o])):s>=r.length?(o=new Xd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function s_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new j,color:new be};break;case"SpotLight":e={position:new j,direction:new j,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new j,color:new be,distance:0,decay:0};break;case"HemisphereLight":e={direction:new j,skyColor:new be,groundColor:new be};break;case"RectAreaLight":e={color:new be,position:new j,halfWidth:new j,halfHeight:new j};break}return i[t.id]=e,e}}}function r_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var o_=0;function a_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function l_(i){let t=new s_,e=r_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0},s=new j,r=new sn,o=new sn;function a(c){let u=0,d=0,p=0,m=0,g=0,E=0,x=0,_=0,A=0,P=0,R=0,O=0,L=0,M=0,F=0,Z=0;c.sort(a_);for(let at=0,ft=c.length;at<ft;at++){let et=c[at],Mt=et.color,it=et.intensity,yt=et.distance,lt=null;if(et.shadow&&et.shadow.map&&(et.shadow.map.texture.format===gs?lt=et.shadow.map.texture:lt=et.shadow.map.depthTexture||et.shadow.map.texture),et.isAmbientLight)u+=Mt.r*it,d+=Mt.g*it,p+=Mt.b*it;else if(et.isSunLight){let Rt=t.get(et);if(Rt.color.copy(et.color).multiplyScalar(et.intensity),et.castShadow){let vt=et.shadow,Nt=e.get(et);Nt.shadowIntensity=vt.intensity,Nt.shadowBias=vt.bias,Nt.shadowNormalBias=vt.normalBias,Nt.shadowRadius=vt.radius,Nt.shadowMapSize.copy(vt.mapSize).multiply(vt.getFrameExtents()),n.sunShadow[g]=Nt,n.sunShadowMap[g]=lt;let Yt=vt.getViewportCount();for(let $t=0;$t<Yt;$t++)n.sunShadowMatrix[E+$t]=vt.getMatrix($t),n.sunShadowCascade[E+$t]=vt._cascadeData[$t];E+=Yt,g++}n.sun[m]=Rt,m++}else if(et.isDirectionalLight){let Rt=t.get(et);if(Rt.color.copy(et.color).multiplyScalar(et.intensity),et.castShadow){let vt=et.shadow,Nt=e.get(et);Nt.shadowIntensity=vt.intensity,Nt.shadowBias=vt.bias,Nt.shadowNormalBias=vt.normalBias,Nt.shadowRadius=vt.radius,Nt.shadowMapSize=vt.mapSize,n.directionalShadow[x]=Nt,n.directionalShadowMap[x]=lt,n.directionalShadowMatrix[x]=et.shadow.matrix,O++}n.directional[x]=Rt,x++}else if(et.isSpotLight){let Rt=t.get(et);Rt.position.setFromMatrixPosition(et.matrixWorld),Rt.color.copy(Mt).multiplyScalar(it),Rt.distance=yt,Rt.coneCos=Math.cos(et.angle),Rt.penumbraCos=Math.cos(et.angle*(1-et.penumbra)),Rt.decay=et.decay,n.spot[A]=Rt;let vt=et.shadow;if(et.map&&(n.spotLightMap[F]=et.map,F++,vt.updateMatrices(et),et.castShadow&&Z++),n.spotLightMatrix[A]=vt.matrix,et.castShadow){let Nt=e.get(et);Nt.shadowIntensity=vt.intensity,Nt.shadowBias=vt.bias,Nt.shadowNormalBias=vt.normalBias,Nt.shadowRadius=vt.radius,Nt.shadowMapSize=vt.mapSize,n.spotShadow[A]=Nt,n.spotShadowMap[A]=lt,M++}A++}else if(et.isRectAreaLight){let Rt=t.get(et);Rt.color.copy(Mt).multiplyScalar(it),Rt.halfWidth.set(et.width*.5,0,0),Rt.halfHeight.set(0,et.height*.5,0),n.rectArea[P]=Rt,P++}else if(et.isPointLight){let Rt=t.get(et);if(Rt.color.copy(et.color).multiplyScalar(et.intensity),Rt.distance=et.distance,Rt.decay=et.decay,et.castShadow){let vt=et.shadow,Nt=e.get(et);Nt.shadowIntensity=vt.intensity,Nt.shadowBias=vt.bias,Nt.shadowNormalBias=vt.normalBias,Nt.shadowRadius=vt.radius,Nt.shadowMapSize=vt.mapSize,Nt.shadowCameraNear=vt.camera.near,Nt.shadowCameraFar=vt.camera.far,n.pointShadow[_]=Nt,n.pointShadowMap[_]=lt,n.pointShadowMatrix[_]=et.shadow.matrix,L++}n.point[_]=Rt,_++}else if(et.isHemisphereLight){let Rt=t.get(et);Rt.skyColor.copy(et.color).multiplyScalar(it),Rt.groundColor.copy(et.groundColor).multiplyScalar(it),n.hemi[R]=Rt,R++}}P>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=p;let k=n.hash;(k.sunLength!==m||k.directionalLength!==x||k.pointLength!==_||k.spotLength!==A||k.rectAreaLength!==P||k.hemiLength!==R||k.numSunShadows!==g||k.numDirectionalShadows!==O||k.numPointShadows!==L||k.numSpotShadows!==M||k.numSpotMaps!==F)&&(n.sun.length=m,n.directional.length=x,n.spot.length=A,n.rectArea.length=P,n.point.length=_,n.hemi.length=R,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=E,n.sunShadowCascade.length=E,n.directionalShadow.length=O,n.directionalShadowMap.length=O,n.directionalShadowMatrix.length=O,n.pointShadow.length=L,n.pointShadowMap.length=L,n.pointShadowMatrix.length=L,n.spotShadow.length=M,n.spotShadowMap.length=M,n.spotLightMatrix.length=M+F-Z,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=Z,k.sunLength=m,k.directionalLength=x,k.pointLength=_,k.spotLength=A,k.rectAreaLength=P,k.hemiLength=R,k.numSunShadows=g,k.numDirectionalShadows=O,k.numPointShadows=L,k.numSpotShadows=M,k.numSpotMaps=F,n.version=o_++)}function l(c,u){let d=0,p=0,m=0,g=0,E=0,x=0,_=u.matrixWorldInverse;for(let A=0,P=c.length;A<P;A++){let R=c[A];if(R.isSunLight){let O=n.sun[d];O.direction.setFromMatrixPosition(R.matrixWorld),O.direction.transformDirection(_),d++}else if(R.isDirectionalLight){let O=n.directional[p];O.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),O.direction.sub(s),O.direction.transformDirection(_),p++}else if(R.isSpotLight){let O=n.spot[g];O.position.setFromMatrixPosition(R.matrixWorld),O.position.applyMatrix4(_),O.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),O.direction.sub(s),O.direction.transformDirection(_),g++}else if(R.isRectAreaLight){let O=n.rectArea[E];O.position.setFromMatrixPosition(R.matrixWorld),O.position.applyMatrix4(_),o.identity(),r.copy(R.matrixWorld),r.premultiply(_),o.extractRotation(r),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),O.halfWidth.applyMatrix4(o),O.halfHeight.applyMatrix4(o),E++}else if(R.isPointLight){let O=n.point[m];O.position.setFromMatrixPosition(R.matrixWorld),O.position.applyMatrix4(_),m++}else if(R.isHemisphereLight){let O=n.hemi[x];O.direction.setFromMatrixPosition(R.matrixWorld),O.direction.transformDirection(_),x++}}}return{setup:a,setupView:l,state:n}}function qd(i){let t=new l_(i),e=[],n=[],s=[];function r(d){u.camera=d,e.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),s.sort((d,p)=>d.priority-p.priority||d.id-p.id)}function c(d){t.setupView(e,d)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function c_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new qd(i),t.set(s,[a])):r>=o.length?(a=new qd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var h_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u_=`uniform sampler2D shadow_pass;
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
}`,d_=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],f_=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Yd=new sn,Ro=new j,Ah=new j;function p_(i,t,e){let n=new hs,s=new wt,r=new wt,o=new xn,a=new Va,l=new Ha,c={},u=e.maxTextureSize,d={[ms]:On,[On]:ms,[Ve]:Ve},p=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:h_,fragmentShader:u_}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new $e;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new Ft(g,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ps;let _=this.type;this.render=function(L,M,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;this.type===zu&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ps);let Z=i.getRenderTarget(),k=i.getActiveCubeFace(),at=i.getActiveMipmapLevel(),ft=i.state;ft.setBlending(Is),ft.buffers.depth.getReversed()===!0?ft.buffers.color.setClear(0,0,0,0):ft.buffers.color.setClear(1,1,1,1),ft.buffers.depth.setTest(!0),ft.setScissorTest(!1);let et=_!==this.type;et&&M.traverse(function(Mt){Mt.material&&(Array.isArray(Mt.material)?Mt.material.forEach(it=>it.needsUpdate=!0):Mt.material.needsUpdate=!0)});for(let Mt=0,it=L.length;Mt<it;Mt++){let yt=L[Mt],lt=yt.shadow;if(lt===void 0){Ue("WebGLShadowMap:",yt,"has no shadow.");continue}if(lt.autoUpdate===!1&&lt.needsUpdate===!1)continue;s.copy(lt.mapSize);let Rt=lt.getFrameExtents();s.multiply(Rt),r.copy(lt.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Rt.x),s.x=r.x*Rt.x,lt.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Rt.y),s.y=r.y*Rt.y,lt.mapSize.y=r.y));let vt=i.state.buffers.depth.getReversed();if(lt.camera._reversedDepth=vt,lt.map===null||et===!0){if(lt.map!==null&&(lt.map.depthTexture!==null&&(lt.map.depthTexture.dispose(),lt.map.depthTexture=null),lt.map.dispose()),this.type===fr){if(yt.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}lt.map=new hi(s.x,s.y,{format:gs,type:Ii,minFilter:jn,magFilter:jn,generateMipmaps:!1}),lt.map.texture.name=yt.name+".shadowMap",lt.map.depthTexture=new ji(s.x,s.y,wi),lt.map.depthTexture.name=yt.name+".shadowMapDepth",lt.map.depthTexture.format=Ki,lt.map.depthTexture.compareFunction=null,lt.map.depthTexture.minFilter=Un,lt.map.depthTexture.magFilter=Un}else yt.isPointLight?(lt.map=new Io(s.x),lt.map.depthTexture=new Qr(s.x,Pi)):(lt.map=new hi(s.x,s.y),lt.map.depthTexture=new ji(s.x,s.y,Pi)),lt.map.depthTexture.name=yt.name+".shadowMap",lt.map.depthTexture.format=Ki,this.type===Ps?(lt.map.depthTexture.compareFunction=vt?hh:ch,lt.map.depthTexture.minFilter=jn,lt.map.depthTexture.magFilter=jn):(lt.map.depthTexture.compareFunction=null,lt.map.depthTexture.minFilter=Un,lt.map.depthTexture.magFilter=Un);lt.camera.updateProjectionMatrix()}lt.map.isWebGLCubeRenderTarget!==!0&&(lt.map.width!==s.x||lt.map.height!==s.y)&&lt.map.setSize(s.x,s.y);let Nt=lt.map.isWebGLCubeRenderTarget?6:lt.getViewportCount();yt.isPointLight!==!0&&lt.updateMatrices(yt,F);let Yt=(lt.camera.layers.mask&4294967294)!==0?lt.camera.layers:F.layers;for(let $t=0;$t<Nt;$t++){let fe=lt.getCamera($t);if(yt.isPointLight){let Pt=lt.camera,ne=lt.matrix,ce=yt.distance||Pt.far;ce!==Pt.far&&(Pt.far=ce,Pt.updateProjectionMatrix()),Ro.setFromMatrixPosition(yt.matrixWorld),Pt.position.copy(Ro),Ah.copy(Pt.position),Ah.add(d_[$t]),Pt.up.copy(f_[$t]),Pt.lookAt(Ah),Pt.updateMatrixWorld(),ne.makeTranslation(-Ro.x,-Ro.y,-Ro.z),Yd.multiplyMatrices(Pt.projectionMatrix,Pt.matrixWorldInverse),lt._frustum.setFromProjectionMatrix(Yd,Pt.coordinateSystem,Pt.reversedDepth)}if(lt.map.isWebGLCubeRenderTarget)i.setRenderTarget(lt.map,$t),i.clear();else{$t===0&&(i.setRenderTarget(lt.map),i.clear());let Pt=lt.getViewport($t);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),ft.viewport(o)}n=lt.getFrustum($t),R(M,F,fe,yt,Yt,this.type)}lt.isPointLightShadow!==!0&&this.type===fr&&A(lt,F),lt.needsUpdate=!1}_=this.type,x.needsUpdate=!1,i.setRenderTarget(Z,k,at)};function A(L,M){let F=t.update(E);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null?L.mapPass=new hi(s.x,s.y,{format:gs,type:Ii}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),p.uniforms.shadow_pass.value=L.map.depthTexture,p.uniforms.resolution.value.set(L.map.width,L.map.height),p.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(M,null,F,p,E,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value.set(L.map.width,L.map.height),m.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(M,null,F,m,E,null)}function P(L,M,F,Z){let k=null,at=F.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(at!==void 0)k=at;else if(k=F.isPointLight===!0?l:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let ft=k.uuid,et=M.uuid,Mt=c[ft];Mt===void 0&&(Mt={},c[ft]=Mt);let it=Mt[et];it===void 0&&(it=k.clone(),Mt[et]=it,M.addEventListener("dispose",O)),k=it}if(k.visible=M.visible,k.wireframe=M.wireframe,Z===fr?k.side=M.shadowSide!==null?M.shadowSide:M.side:k.side=M.shadowSide!==null?M.shadowSide:d[M.side],k.alphaMap=M.alphaMap,k.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,k.map=M.map,k.clipShadows=M.clipShadows,k.clippingPlanes=M.clippingPlanes,k.clipIntersection=M.clipIntersection,k.displacementMap=M.displacementMap,k.displacementScale=M.displacementScale,k.displacementBias=M.displacementBias,k.wireframeLinewidth=M.wireframeLinewidth,k.linewidth=M.linewidth,F.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let ft=i.properties.get(k);ft.light=F}return k}function R(L,M,F,Z,k,at){if(L.visible===!1)return;if(L.layers.test(k)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&at===fr)&&(!L.frustumCulled||L.intersectsFrustum(n))){L.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,L.matrixWorld);let Mt=t.update(L),it=L.material;if(Array.isArray(it)){let yt=Mt.groups;for(let lt=0,Rt=yt.length;lt<Rt;lt++){let vt=yt[lt],Nt=it[vt.materialIndex];if(Nt&&Nt.visible){let Yt=P(L,Nt,Z,at);L.onBeforeShadow(i,L,M,F,Mt,Yt,vt),i.renderBufferDirect(F,null,Mt,Yt,L,vt),L.onAfterShadow(i,L,M,F,Mt,Yt,vt)}}}else if(it.visible){let yt=P(L,it,Z,at);L.onBeforeShadow(i,L,M,F,Mt,yt,null),i.renderBufferDirect(F,null,Mt,yt,L,null),L.onAfterShadow(i,L,M,F,Mt,yt,null)}}let et=L.children;for(let Mt=0,it=et.length;Mt<it;Mt++)R(et[Mt],M,F,Z,k,at)}function O(L){L.target.removeEventListener("dispose",O);for(let F in c){let Z=c[F],k=L.target.uuid;k in Z&&(Z[k].dispose(),delete Z[k])}}}function m_(i,t){function e(){let tt=!1,Ut=new xn,qt=null,Qt=new xn(0,0,0,0);return{setMask:function(he){qt!==he&&!tt&&(i.colorMask(he,he,he,he),qt=he)},setLocked:function(he){tt=he},setClear:function(he,me,Ae,Kt,Ge){Ge===!0&&(he*=Kt,me*=Kt,Ae*=Kt),Ut.set(he,me,Ae,Kt),Qt.equals(Ut)===!1&&(i.clearColor(he,me,Ae,Kt),Qt.copy(Ut))},reset:function(){tt=!1,qt=null,Qt.set(-1,0,0,0)}}}function n(){let tt=!1,Ut=!1,qt=null,Qt=null,he=null;return{setReversed:function(me){if(Ut!==me){let Ae=t.get("EXT_clip_control");me?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),Ut=me;let Kt=he;he=null,this.setClear(Kt)}},getReversed:function(){return Ut},setTest:function(me){me?ie(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(me){qt!==me&&!tt&&(i.depthMask(me),qt=me)},setFunc:function(me){if(Ut&&(me=pd[me]),Qt!==me){switch(me){case xa:i.depthFunc(i.NEVER);break;case _a:i.depthFunc(i.ALWAYS);break;case ya:i.depthFunc(i.LESS);break;case ir:i.depthFunc(i.LEQUAL);break;case va:i.depthFunc(i.EQUAL);break;case Ma:i.depthFunc(i.GEQUAL);break;case Sa:i.depthFunc(i.GREATER);break;case wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Qt=me}},setLocked:function(me){tt=me},setClear:function(me){he!==me&&(he=me,Ut&&(me=1-me),i.clearDepth(me))},reset:function(){tt=!1,qt=null,Qt=null,he=null,Ut=!1}}}function s(){let tt=!1,Ut=null,qt=null,Qt=null,he=null,me=null,Ae=null,Kt=null,Ge=null;return{setTest:function(Se){tt||(Se?ie(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(Se){Ut!==Se&&!tt&&(i.stencilMask(Se),Ut=Se)},setFunc:function(Se,ue,Ye){(qt!==Se||Qt!==ue||he!==Ye)&&(i.stencilFunc(Se,ue,Ye),qt=Se,Qt=ue,he=Ye)},setOp:function(Se,ue,Ye){(me!==Se||Ae!==ue||Kt!==Ye)&&(i.stencilOp(Se,ue,Ye),me=Se,Ae=ue,Kt=Ye)},setLocked:function(Se){tt=Se},setClear:function(Se){Ge!==Se&&(i.clearStencil(Se),Ge=Se)},reset:function(){tt=!1,Ut=null,qt=null,Qt=null,he=null,me=null,Ae=null,Kt=null,Ge=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,u={},d={},p={},m=new WeakMap,g=[],E=null,x=!1,_=null,A=null,P=null,R=null,O=null,L=null,M=null,F=new be(0,0,0),Z=0,k=!1,at=null,ft=null,et=null,Mt=null,it=null,yt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),lt=!1,Rt=0,vt=i.getParameter(i.VERSION);vt.indexOf("WebGL")!==-1?(Rt=parseFloat(/^WebGL (\d)/.exec(vt)[1]),lt=Rt>=1):vt.indexOf("OpenGL ES")!==-1&&(Rt=parseFloat(/^OpenGL ES (\d)/.exec(vt)[1]),lt=Rt>=2);let Nt=null,Yt={},$t=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),Pt=new xn().fromArray($t),ne=new xn().fromArray(fe);function ce(tt,Ut,qt,Qt){let he=new Uint8Array(4),me=i.createTexture();i.bindTexture(tt,me),i.texParameteri(tt,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(tt,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<qt;Ae++)tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?i.texImage3D(Ut,0,i.RGBA,1,1,Qt,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(Ut+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return me}let ge={};ge[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(i.DEPTH_TEST),o.setFunc(ir),D(!1),N(Xc),ie(i.CULL_FACE),h(Is);function ie(tt){u[tt]!==!0&&(i.enable(tt),u[tt]=!0)}function _e(tt){u[tt]!==!1&&(i.disable(tt),u[tt]=!1)}function De(tt,Ut){return tt===i.FRAMEBUFFER?p[i.DRAW_FRAMEBUFFER]===Ut&&p[i.READ_FRAMEBUFFER]===Ut?!1:(i.bindFramebuffer(i.FRAMEBUFFER,Ut),p[i.DRAW_FRAMEBUFFER]=Ut,p[i.READ_FRAMEBUFFER]=Ut,!0):p[tt]===Ut?!1:(i.bindFramebuffer(tt,Ut),p[tt]=Ut,!0)}function se(tt){return tt===i.FRAMEBUFFER&&(tt=i.DRAW_FRAMEBUFFER),p[tt]||null}function W(tt,Ut){let qt=g,Qt=!1;if(tt){qt=m.get(Ut),qt===void 0&&(qt=[],m.set(Ut,qt));let he=tt.textures;if(qt.length!==he.length||qt[0]!==i.COLOR_ATTACHMENT0){for(let me=0,Ae=he.length;me<Ae;me++)qt[me]=i.COLOR_ATTACHMENT0+me;qt.length=he.length,Qt=!0}}else qt[0]!==i.BACK&&(qt[0]=i.BACK,Qt=!0);Qt&&i.drawBuffers(qt)}function St(tt){return E!==tt?(i.useProgram(tt),E=tt,!0):!1}let rt={[Fs]:i.FUNC_ADD,[Uu]:i.FUNC_SUBTRACT,[Ou]:i.FUNC_REVERSE_SUBTRACT};rt[Bu]=i.MIN,rt[ku]=i.MAX;let ut={[Vu]:i.ZERO,[Hu]:i.ONE,[Gu]:i.SRC_COLOR,[Zc]:i.SRC_ALPHA,[Ju]:i.SRC_ALPHA_SATURATE,[Yu]:i.DST_COLOR,[Xu]:i.DST_ALPHA,[Wu]:i.ONE_MINUS_SRC_COLOR,[Jc]:i.ONE_MINUS_SRC_ALPHA,[Zu]:i.ONE_MINUS_DST_COLOR,[qu]:i.ONE_MINUS_DST_ALPHA,[$u]:i.CONSTANT_COLOR,[Ku]:i.ONE_MINUS_CONSTANT_COLOR,[ju]:i.CONSTANT_ALPHA,[Qu]:i.ONE_MINUS_CONSTANT_ALPHA};function h(tt,Ut,qt,Qt,he,me,Ae,Kt,Ge,Se){if(tt===Is){x===!0&&(_e(i.BLEND),x=!1);return}if(x===!1&&(ie(i.BLEND),x=!0),tt!==Nu){if(tt!==_||Se!==k){if((A!==Fs||O!==Fs)&&(i.blendEquation(i.FUNC_ADD),A=Fs,O=Fs),Se)switch(tt){case pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ni:i.blendFunc(i.ONE,i.ONE);break;case qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ke("WebGLState: Invalid blending: ",tt);break}else switch(tt){case pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case qc:ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yc:ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ke("WebGLState: Invalid blending: ",tt);break}P=null,R=null,L=null,M=null,F.set(0,0,0),Z=0,_=tt,k=Se}return}he=he||Ut,me=me||qt,Ae=Ae||Qt,(Ut!==A||he!==O)&&(i.blendEquationSeparate(rt[Ut],rt[he]),A=Ut,O=he),(qt!==P||Qt!==R||me!==L||Ae!==M)&&(i.blendFuncSeparate(ut[qt],ut[Qt],ut[me],ut[Ae]),P=qt,R=Qt,L=me,M=Ae),(Kt.equals(F)===!1||Ge!==Z)&&(i.blendColor(Kt.r,Kt.g,Kt.b,Ge),F.copy(Kt),Z=Ge),_=tt,k=!1}function y(tt,Ut){tt.side===Ve?_e(i.CULL_FACE):ie(i.CULL_FACE);let qt=tt.side===On;Ut&&(qt=!qt),D(qt),tt.blending===pr&&tt.transparent===!1?h(Is):h(tt.blending,tt.blendEquation,tt.blendSrc,tt.blendDst,tt.blendEquationAlpha,tt.blendSrcAlpha,tt.blendDstAlpha,tt.blendColor,tt.blendAlpha,tt.premultipliedAlpha),o.setFunc(tt.depthFunc),o.setTest(tt.depthTest),o.setMask(tt.depthWrite),r.setMask(tt.colorWrite);let Qt=tt.stencilWrite;a.setTest(Qt),Qt&&(a.setMask(tt.stencilWriteMask),a.setFunc(tt.stencilFunc,tt.stencilRef,tt.stencilFuncMask),a.setOp(tt.stencilFail,tt.stencilZFail,tt.stencilZPass)),dt(tt.polygonOffset,tt.polygonOffsetFactor,tt.polygonOffsetUnits),tt.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function D(tt){at!==tt&&(tt?i.frontFace(i.CW):i.frontFace(i.CCW),at=tt)}function N(tt){tt!==Lu?(ie(i.CULL_FACE),tt!==ft&&(tt===Xc?i.cullFace(i.BACK):tt===Du?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),ft=tt}function J(tt){tt!==et&&(lt&&i.lineWidth(tt),et=tt)}function dt(tt,Ut,qt){tt?(ie(i.POLYGON_OFFSET_FILL),(Mt!==Ut||it!==qt)&&(Mt=Ut,it=qt,o.getReversed()&&(Ut=-Ut,qt=-qt),i.polygonOffset(Ut,qt))):_e(i.POLYGON_OFFSET_FILL)}function ot(tt){tt?ie(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function Bt(tt){tt===void 0&&(tt=i.TEXTURE0+yt-1),Nt!==tt&&(i.activeTexture(tt),Nt=tt)}function X(tt,Ut,qt){qt===void 0&&(Nt===null?qt=i.TEXTURE0+yt-1:qt=Nt);let Qt=Yt[qt];Qt===void 0&&(Qt={type:void 0,texture:void 0},Yt[qt]=Qt),(Qt.type!==tt||Qt.texture!==Ut)&&(Nt!==qt&&(i.activeTexture(qt),Nt=qt),i.bindTexture(tt,Ut||ge[tt]),Qt.type=tt,Qt.texture=Ut)}function Zt(){let tt=Yt[Nt];tt!==void 0&&tt.type!==void 0&&(i.bindTexture(tt.type,null),tt.type=void 0,tt.texture=void 0)}function K(){try{i.compressedTexImage2D(...arguments)}catch(tt){ke("WebGLState:",tt)}}function Q(){try{i.compressedTexImage3D(...arguments)}catch(tt){ke("WebGLState:",tt)}}function H(){try{i.texSubImage2D(...arguments)}catch(tt){ke("WebGLState:",tt)}}function zt(){try{i.texSubImage3D(...arguments)}catch(tt){ke("WebGLState:",tt)}}function ht(){try{i.compressedTexSubImage2D(...arguments)}catch(tt){ke("WebGLState:",tt)}}function mt(){try{i.compressedTexSubImage3D(...arguments)}catch(tt){ke("WebGLState:",tt)}}function z(){try{i.texStorage2D(...arguments)}catch(tt){ke("WebGLState:",tt)}}function S(){try{i.texStorage3D(...arguments)}catch(tt){ke("WebGLState:",tt)}}function Y(){try{i.texImage2D(...arguments)}catch(tt){ke("WebGLState:",tt)}}function gt(){try{i.texImage3D(...arguments)}catch(tt){ke("WebGLState:",tt)}}function pt(tt){return d[tt]!==void 0?d[tt]:i.getParameter(tt)}function At(tt,Ut){d[tt]!==Ut&&(i.pixelStorei(tt,Ut),d[tt]=Ut)}function Gt(tt){Pt.equals(tt)===!1&&(i.scissor(tt.x,tt.y,tt.z,tt.w),Pt.copy(tt))}function Lt(tt){ne.equals(tt)===!1&&(i.viewport(tt.x,tt.y,tt.z,tt.w),ne.copy(tt))}function Ot(tt,Ut){let qt=c.get(Ut);qt===void 0&&(qt=new WeakMap,c.set(Ut,qt));let Qt=qt.get(tt);Qt===void 0&&(Qt=i.getUniformBlockIndex(Ut,tt.name),i.uniformBlockBinding(Ut,Qt,Qt),qt.set(tt,Qt))}function ee(tt,Ut,qt){let he=c.get(Ut).get(tt);l[he]!==qt&&(i.bindBufferBase(i.UNIFORM_BUFFER,he,qt),l[he]=qt)}function pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},Nt=null,Yt={},p={},l={},m=new WeakMap,g=[],E=null,x=!1,_=null,A=null,P=null,R=null,O=null,L=null,M=null,F=new be(0,0,0),Z=0,k=!1,at=null,ft=null,et=null,Mt=null,it=null,Pt.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:_e,bindFramebuffer:De,getBoundFramebuffer:se,drawBuffers:W,useProgram:St,setBlending:h,setMaterial:y,setFlipSided:D,setCullFace:N,setLineWidth:J,setPolygonOffset:dt,setScissorTest:ot,activeTexture:Bt,bindTexture:X,unbindTexture:Zt,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:Y,texImage3D:gt,pixelStorei:At,getParameter:pt,updateUBOMapping:Ot,uniformBlockBinding:ee,texStorage2D:z,texStorage3D:S,texSubImage2D:H,texSubImage3D:zt,compressedTexSubImage2D:ht,compressedTexSubImage3D:mt,scissor:Gt,viewport:Lt,reset:pe}}function g_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,u=new WeakMap,d=new Set,p,m=new WeakMap,g=new Set,E=new FinalizationRegistry(z=>g.delete(z)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(z,S){return x?new OffscreenCanvas(z,S):kr("canvas")}function A(z,S,Y){let gt=1,pt=mt(z);if((pt.width>Y||pt.height>Y)&&(gt=Y/Math.max(pt.width,pt.height)),gt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let At=Math.floor(gt*pt.width),Gt=Math.floor(gt*pt.height);p===void 0&&(p=_(At,Gt));let Lt=S?_(At,Gt):p;return Lt.width=At,Lt.height=Gt,Lt.getContext("2d").drawImage(z,0,0,At,Gt),Ue("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+At+"x"+Gt+")."),Lt}else return"data"in z&&Ue("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),z;return z}function P(z){return z.generateMipmaps}function R(z){i.generateMipmap(z)}function O(z){return z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?i.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function L(z,S,Y,gt,pt,At=!1){if(z!==null){if(i[z]!==void 0)return i[z];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Gt;gt&&(Gt=t.get("EXT_texture_norm16"),Gt||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Lt=S;if(S===i.RED&&(Y===i.FLOAT&&(Lt=i.R32F),Y===i.HALF_FLOAT&&(Lt=i.R16F),Y===i.UNSIGNED_BYTE&&(Lt=i.R8),Y===i.UNSIGNED_SHORT&&Gt&&(Lt=Gt.R16_EXT),Y===i.SHORT&&Gt&&(Lt=Gt.R16_SNORM_EXT)),S===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(Lt=i.R8UI),Y===i.UNSIGNED_SHORT&&(Lt=i.R16UI),Y===i.UNSIGNED_INT&&(Lt=i.R32UI),Y===i.BYTE&&(Lt=i.R8I),Y===i.SHORT&&(Lt=i.R16I),Y===i.INT&&(Lt=i.R32I)),S===i.RG&&(Y===i.FLOAT&&(Lt=i.RG32F),Y===i.HALF_FLOAT&&(Lt=i.RG16F),Y===i.UNSIGNED_BYTE&&(Lt=i.RG8),Y===i.UNSIGNED_SHORT&&Gt&&(Lt=Gt.RG16_EXT),Y===i.SHORT&&Gt&&(Lt=Gt.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(Lt=i.RG8UI),Y===i.UNSIGNED_SHORT&&(Lt=i.RG16UI),Y===i.UNSIGNED_INT&&(Lt=i.RG32UI),Y===i.BYTE&&(Lt=i.RG8I),Y===i.SHORT&&(Lt=i.RG16I),Y===i.INT&&(Lt=i.RG32I)),S===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(Lt=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(Lt=i.RGB16UI),Y===i.UNSIGNED_INT&&(Lt=i.RGB32UI),Y===i.BYTE&&(Lt=i.RGB8I),Y===i.SHORT&&(Lt=i.RGB16I),Y===i.INT&&(Lt=i.RGB32I)),S===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(Lt=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(Lt=i.RGBA16UI),Y===i.UNSIGNED_INT&&(Lt=i.RGBA32UI),Y===i.BYTE&&(Lt=i.RGBA8I),Y===i.SHORT&&(Lt=i.RGBA16I),Y===i.INT&&(Lt=i.RGBA32I)),S===i.RGB&&(Y===i.UNSIGNED_SHORT&&Gt&&(Lt=Gt.RGB16_EXT),Y===i.SHORT&&Gt&&(Lt=Gt.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(Lt=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(Lt=i.R11F_G11F_B10F)),S===i.RGBA){let Ot=At?Br:nn.getTransfer(pt);Y===i.FLOAT&&(Lt=i.RGBA32F),Y===i.HALF_FLOAT&&(Lt=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(Lt=Ot===ln?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&Gt&&(Lt=Gt.RGBA16_EXT),Y===i.SHORT&&Gt&&(Lt=Gt.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(Lt=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(Lt=i.RGB5_A1)}return(Lt===i.R16F||Lt===i.R32F||Lt===i.RG16F||Lt===i.RG32F||Lt===i.RGBA16F||Lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Lt}function M(z,S){let Y;return z?S===null||S===Pi||S===Ds?Y=i.DEPTH24_STENCIL8:S===wi?Y=i.DEPTH32F_STENCIL8:S===gr&&(Y=i.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Pi||S===Ds?Y=i.DEPTH_COMPONENT24:S===wi?Y=i.DEPTH_COMPONENT32F:S===gr&&(Y=i.DEPTH_COMPONENT16),Y}function F(z,S){return P(z)===!0||z.isFramebufferTexture&&z.minFilter!==Un&&z.minFilter!==jn?Math.log2(Math.max(S.width,S.height))+1:z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?S.mipmaps.length:1}function Z(z){let S=new WeakRef(z);n.get(z).__ref=S,g.add(S),E.register(z,S,S)}function k(z){let S=n.get(z).__ref;S!==void 0&&(g.delete(S),E.unregister(S))}function at(z){et(z.target)}function ft(z){Mt(z.target)}function et(z){z.removeEventListener("dispose",at),k(z),yt(z),z.isVideoTexture&&u.delete(z),z.isHTMLTexture&&d.delete(z)}function Mt(z){z.removeEventListener("dispose",ft),k(z),Rt(z)}function it(){for(let z of g){let S=z.deref();S!==void 0&&(S.isRenderTarget===!0?Mt(S):et(S))}g.clear(),d.clear()}function yt(z){let S=n.get(z);if(S.__webglInit===void 0)return;let Y=z.source,gt=m.get(Y);if(gt){let pt=gt[S.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&lt(z),Object.keys(gt).length===0&&m.delete(Y)}n.remove(z)}function lt(z){let S=n.get(z);i.deleteTexture(S.__webglTexture);let Y=z.source,gt=m.get(Y);delete gt[S.__cacheKey],o.memory.textures--}function Rt(z){let S=n.get(z);S.__depthDisposeCallback&&S.__depthDisposeCallback();let Y=z.depthTexture;if(Y&&Y.renderTarget===z&&et(Y),z.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(S.__webglFramebuffer[pt]))for(let At=0;At<S.__webglFramebuffer[pt].length;At++)i.deleteFramebuffer(S.__webglFramebuffer[pt][At]);else i.deleteFramebuffer(S.__webglFramebuffer[pt]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[pt])}else{if(Array.isArray(S.__webglFramebuffer))for(let pt=0;pt<S.__webglFramebuffer.length;pt++)i.deleteFramebuffer(S.__webglFramebuffer[pt]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let pt=0;pt<S.__webglColorRenderbuffer.length;pt++)S.__webglColorRenderbuffer[pt]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[pt]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let gt=z.textures;for(let pt=0,At=gt.length;pt<At;pt++){let Gt=n.get(gt[pt]);Gt.__webglTexture&&(i.deleteTexture(Gt.__webglTexture),o.memory.textures--),n.remove(gt[pt])}n.remove(z)}let vt=0;function Nt(){vt=0}function Yt(){return vt}function $t(z){vt=z}function fe(){let z=vt;return z>=s.maxTextures&&Ue("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+s.maxTextures),vt+=1,z}function Pt(z){let S=[];return S.push(z.wrapS),S.push(z.wrapT),S.push(z.wrapR||0),S.push(z.magFilter),S.push(z.minFilter),S.push(z.anisotropy),S.push(z.internalFormat),S.push(z.format),S.push(z.type),S.push(z.generateMipmaps),S.push(z.mipmapsAutoUpdate),S.push(z.premultiplyAlpha),S.push(z.flipY),S.push(z.unpackAlignment),S.push(z.colorSpace),S.join()}function ne(z,S){let Y=n.get(z);if(z.isVideoTexture&&zt(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&Y.__version!==z.version){let gt=z.image;if(gt===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{h(Y,z,S);return}}else z.isExternalTexture&&(Y.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+S)}function ce(z,S){let Y=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&Y.__version!==z.version){h(Y,z,S);return}else z.isExternalTexture&&(Y.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+S)}function ge(z,S){let Y=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&Y.__version!==z.version){h(Y,z,S);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+S)}function ie(z,S){let Y=n.get(z);if(z.version>0&&Y.__version!==z.version){y(Y,z,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+S)}let _e={[cs]:i.REPEAT,[zi]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},De={[Un]:i.NEAREST,[nd]:i.NEAREST_MIPMAP_NEAREST,[Mo]:i.NEAREST_MIPMAP_LINEAR,[jn]:i.LINEAR,[rl]:i.LINEAR_MIPMAP_NEAREST,[es]:i.LINEAR_MIPMAP_LINEAR},se={[od]:i.NEVER,[uh]:i.ALWAYS,[ad]:i.LESS,[ch]:i.LEQUAL,[ld]:i.EQUAL,[hh]:i.GEQUAL,[cd]:i.GREATER,[hd]:i.NOTEQUAL};function W(z,S){if(S.type===wi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===jn||S.magFilter===rl||S.magFilter===Mo||S.magFilter===es||S.minFilter===jn||S.minFilter===rl||S.minFilter===Mo||S.minFilter===es)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(z,i.TEXTURE_WRAP_S,_e[S.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,_e[S.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,_e[S.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,De[S.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,De[S.minFilter]),S.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,se[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Un||S.minFilter!==Mo&&S.minFilter!==es||S.type===wi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(z,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function St(z,S){let Y=!1;z.__webglInit===void 0&&(z.__webglInit=!0,S.addEventListener("dispose",at),Z(S));let gt=S.source,pt=m.get(gt);pt===void 0&&(pt={},m.set(gt,pt));let At=Pt(S);if(At!==z.__cacheKey){pt[At]===void 0&&(pt[At]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),pt[At].usedTimes++;let Gt=pt[z.__cacheKey];Gt!==void 0&&(pt[z.__cacheKey].usedTimes--,Gt.usedTimes===0&&lt(S)),z.__cacheKey=At,z.__webglTexture=pt[At].texture}return Y}function rt(z,S,Y){return Math.floor(Math.floor(z/Y)/S)}function ut(z,S,Y,gt){let At=z.updateRanges;if(At.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,Y,gt,S.data);else{At.sort((pe,tt)=>pe.start-tt.start);let Gt=0;for(let pe=1;pe<At.length;pe++){let tt=At[Gt],Ut=At[pe],qt=tt.start+tt.count,Qt=rt(Ut.start,S.width,4),he=rt(tt.start,S.width,4);Ut.start<=qt+1&&Qt===he&&rt(Ut.start+Ut.count-1,S.width,4)===Qt?tt.count=Math.max(tt.count,Ut.start+Ut.count-tt.start):(++Gt,At[Gt]=Ut)}At.length=Gt+1;let Lt=e.getParameter(i.UNPACK_ROW_LENGTH),Ot=e.getParameter(i.UNPACK_SKIP_PIXELS),ee=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let pe=0,tt=At.length;pe<tt;pe++){let Ut=At[pe],qt=Math.floor(Ut.start/4),Qt=Math.ceil(Ut.count/4),he=qt%S.width,me=Math.floor(qt/S.width),Ae=Qt,Kt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,he),e.pixelStorei(i.UNPACK_SKIP_ROWS,me),e.texSubImage2D(i.TEXTURE_2D,0,he,me,Ae,Kt,Y,gt,S.data)}z.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Lt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,ee)}}function h(z,S,Y){let gt=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(gt=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(gt=i.TEXTURE_3D);let pt=St(z,S),At=S.source;e.bindTexture(gt,z.__webglTexture,i.TEXTURE0+Y);let Gt=n.get(At);if(At.version!==Gt.__version||pt===!0){if(e.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let Kt=nn.getPrimaries(nn.workingColorSpace),Ge=S.colorSpace===is?null:nn.getPrimaries(S.colorSpace),Se=S.colorSpace===is||Kt===Ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let Ot=A(S.image,!1,s.maxTextureSize);Ot=ht(S,Ot);let ee=r.convert(S.format,S.colorSpace),pe=r.convert(S.type),tt=L(S.internalFormat,ee,pe,S.normalized,S.colorSpace,S.isVideoTexture);W(gt,S);let Ut,qt=S.mipmaps,Qt=S.isVideoTexture!==!0,he=Gt.__version===void 0||pt===!0,me=At.dataReady,Ae=F(S,Ot);if(S.isDepthTexture)tt=M(S.format===ns,S.type),he&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,tt,Ot.width,Ot.height):e.texImage2D(i.TEXTURE_2D,0,tt,Ot.width,Ot.height,0,ee,pe,null));else if(S.isDataTexture)if(qt.length>0){Qt&&he&&e.texStorage2D(i.TEXTURE_2D,Ae,tt,qt[0].width,qt[0].height);for(let Kt=0,Ge=qt.length;Kt<Ge;Kt++)Ut=qt[Kt],Qt?me&&e.texSubImage2D(i.TEXTURE_2D,Kt,0,0,Ut.width,Ut.height,ee,pe,Ut.data):e.texImage2D(i.TEXTURE_2D,Kt,tt,Ut.width,Ut.height,0,ee,pe,Ut.data);S.generateMipmaps=!1}else Qt?(he&&e.texStorage2D(i.TEXTURE_2D,Ae,tt,Ot.width,Ot.height),me&&ut(S,Ot,ee,pe)):e.texImage2D(i.TEXTURE_2D,0,tt,Ot.width,Ot.height,0,ee,pe,Ot.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Qt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,tt,qt[0].width,qt[0].height,Ot.depth);for(let Kt=0,Ge=qt.length;Kt<Ge;Kt++)if(Ut=qt[Kt],S.format!==Fi)if(ee!==null)if(Qt){if(me)if(S.layerUpdates.size>0){let Se=_h(Ut.width,Ut.height,S.format,S.type);for(let ue of S.layerUpdates){let Ye=Ut.data.subarray(ue*Se/Ut.data.BYTES_PER_ELEMENT,(ue+1)*Se/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Kt,0,0,ue,Ut.width,Ut.height,1,ee,Ye)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Kt,0,0,0,Ut.width,Ut.height,Ot.depth,ee,Ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Kt,tt,Ut.width,Ut.height,Ot.depth,0,Ut.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?me&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Kt,0,0,0,Ut.width,Ut.height,Ot.depth,ee,pe,Ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Kt,tt,Ut.width,Ut.height,Ot.depth,0,ee,pe,Ut.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Qt&&he&&e.texStorage2D(i.TEXTURE_2D,Ae,tt,qt[0].width,qt[0].height);for(let Kt=0,Ge=qt.length;Kt<Ge;Kt++)Ut=qt[Kt],S.format!==Fi?ee!==null?Qt?me&&e.compressedTexSubImage2D(i.TEXTURE_2D,Kt,0,0,Ut.width,Ut.height,ee,Ut.data):e.compressedTexImage2D(i.TEXTURE_2D,Kt,tt,Ut.width,Ut.height,0,Ut.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?me&&e.texSubImage2D(i.TEXTURE_2D,Kt,0,0,Ut.width,Ut.height,ee,pe,Ut.data):e.texImage2D(i.TEXTURE_2D,Kt,tt,Ut.width,Ut.height,0,ee,pe,Ut.data)}else if(S.isDataArrayTexture)if(Qt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,tt,Ot.width,Ot.height,Ot.depth),me)if(S.layerUpdates.size>0){let Kt=_h(Ot.width,Ot.height,S.format,S.type);for(let Ge of S.layerUpdates){let Se=Ot.data.subarray(Ge*Kt/Ot.data.BYTES_PER_ELEMENT,(Ge+1)*Kt/Ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ge,Ot.width,Ot.height,1,ee,pe,Se)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Ot.width,Ot.height,Ot.depth,ee,pe,Ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,tt,Ot.width,Ot.height,Ot.depth,0,ee,pe,Ot.data);else if(S.isData3DTexture)Qt?(he&&e.texStorage3D(i.TEXTURE_3D,Ae,tt,Ot.width,Ot.height,Ot.depth),me&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Ot.width,Ot.height,Ot.depth,ee,pe,Ot.data)):e.texImage3D(i.TEXTURE_3D,0,tt,Ot.width,Ot.height,Ot.depth,0,ee,pe,Ot.data);else if(S.isFramebufferTexture){if(he)if(Qt)e.texStorage2D(i.TEXTURE_2D,Ae,tt,Ot.width,Ot.height);else{let Kt=Ot.width,Ge=Ot.height;for(let Se=0;Se<Ae;Se++)e.texImage2D(i.TEXTURE_2D,Se,tt,Kt,Ge,0,ee,pe,null),Kt>>=1,Ge>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let Kt=i.canvas;if(Kt.hasAttribute("layoutsubtree")||Kt.setAttribute("layoutsubtree","true"),Ot.parentNode!==Kt){Kt.appendChild(Ot),d.add(S),Kt.onpaint=Ge=>{let Se=Ge.changedElements;for(let ue of d)Se.includes(ue.image)&&(ue.needsUpdate=!0)},Kt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Ot);else{let Se=i.RGBA,ue=i.RGBA,Ye=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Se,ue,Ye,Ot)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(qt.length>0){if(Qt&&he){let Kt=mt(qt[0]);e.texStorage2D(i.TEXTURE_2D,Ae,tt,Kt.width,Kt.height)}for(let Kt=0,Ge=qt.length;Kt<Ge;Kt++)Ut=qt[Kt],Qt?me&&e.texSubImage2D(i.TEXTURE_2D,Kt,0,0,ee,pe,Ut):e.texImage2D(i.TEXTURE_2D,Kt,tt,ee,pe,Ut);S.generateMipmaps=!1}else if(Qt){if(he){let Kt=mt(Ot);e.texStorage2D(i.TEXTURE_2D,Ae,tt,Kt.width,Kt.height)}me&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ee,pe,Ot)}else e.texImage2D(i.TEXTURE_2D,0,tt,ee,pe,Ot);P(S)&&S.mipmapsAutoUpdate===!0&&R(gt),Gt.__version=At.version,S.onUpdate&&S.onUpdate(S)}z.__version=S.version}function y(z,S,Y){if(S.image.length!==6)return;let gt=St(z,S),pt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+Y);let At=n.get(pt);if(pt.version!==At.__version||gt===!0){e.activeTexture(i.TEXTURE0+Y);let Gt=nn.getPrimaries(nn.workingColorSpace),Lt=S.colorSpace===is?null:nn.getPrimaries(S.colorSpace),Ot=S.colorSpace===is||Gt===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let ee=S.isCompressedTexture||S.image[0].isCompressedTexture,pe=S.image[0]&&S.image[0].isDataTexture,tt=[];for(let ue=0;ue<6;ue++)!ee&&!pe?tt[ue]=A(S.image[ue],!0,s.maxCubemapSize):tt[ue]=pe?S.image[ue].image:S.image[ue],tt[ue]=ht(S,tt[ue]);let Ut=tt[0],qt=r.convert(S.format,S.colorSpace),Qt=r.convert(S.type),he=L(S.internalFormat,qt,Qt,S.normalized,S.colorSpace),me=S.isVideoTexture!==!0,Ae=At.__version===void 0||gt===!0,Kt=pt.dataReady,Ge=F(S,Ut);W(i.TEXTURE_CUBE_MAP,S);let Se;if(S.isDepthTexture){if(he=M(S.format===ns,S.type),Ae)if(me)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,he,Ut.width,Ut.height);else for(let ue=0;ue<6;ue++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,he,Ut.width,Ut.height,0,qt,Qt,null)}else if(ee){me&&Ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,he,Ut.width,Ut.height);for(let ue=0;ue<6;ue++){Se=tt[ue].mipmaps;for(let Ye=0;Ye<Se.length;Ye++){let $=Se[Ye];S.format!==Fi?qt!==null?me?Kt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ye,0,0,$.width,$.height,qt,$.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ye,he,$.width,$.height,0,$.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?Kt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ye,0,0,$.width,$.height,qt,Qt,$.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ye,he,$.width,$.height,0,qt,Qt,$.data)}}}else{if(Se=S.mipmaps,me&&Ae){Se.length>0&&Ge++;let ue=mt(tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ge,he,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(pe){me?Kt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,tt[ue].width,tt[ue].height,qt,Qt,tt[ue].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,he,tt[ue].width,tt[ue].height,0,qt,Qt,tt[ue].data);for(let Ye=0;Ye<Se.length;Ye++){let ct=Se[Ye].image[ue].image;me?Kt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ye+1,0,0,ct.width,ct.height,qt,Qt,ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ye+1,he,ct.width,ct.height,0,qt,Qt,ct.data)}}else{me?Kt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,qt,Qt,tt[ue]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,he,qt,Qt,tt[ue]);for(let Ye=0;Ye<Se.length;Ye++){let $=Se[Ye];me?Kt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ye+1,0,0,qt,Qt,$.image[ue]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ye+1,he,qt,Qt,$.image[ue])}}}P(S)&&S.mipmapsAutoUpdate===!0&&R(i.TEXTURE_CUBE_MAP),At.__version=pt.version,S.onUpdate&&S.onUpdate(S)}z.__version=S.version}function D(z,S,Y,gt,pt,At){let Gt=r.convert(Y.format,Y.colorSpace),Lt=r.convert(Y.type),Ot=L(Y.internalFormat,Gt,Lt,Y.normalized,Y.colorSpace),ee=n.get(S),pe=n.get(Y);if(pe.__renderTarget=S,!ee.__hasExternalTextures){let tt=Math.max(1,S.width>>At),Ut=Math.max(1,S.height>>At);pt===i.TEXTURE_3D||pt===i.TEXTURE_2D_ARRAY?e.texImage3D(pt,At,Ot,tt,Ut,S.depth,0,Gt,Lt,null):e.texImage2D(pt,At,Ot,tt,Ut,0,Gt,Lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,z),H(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,gt,pt,pe.__webglTexture,0,Q(S)):(pt===i.TEXTURE_2D||pt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,gt,pt,pe.__webglTexture,At),e.bindFramebuffer(i.FRAMEBUFFER,null)}function N(z,S,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,z),S.depthBuffer){let gt=S.depthTexture,pt=gt&&gt.isDepthTexture?gt.type:null,At=M(S.stencilBuffer,pt),Gt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;H(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q(S),At,S.width,S.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q(S),At,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,At,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Gt,i.RENDERBUFFER,z)}else{let gt=S.textures;for(let pt=0;pt<gt.length;pt++){let At=gt[pt],Gt=r.convert(At.format,At.colorSpace),Lt=r.convert(At.type),Ot=L(At.internalFormat,Gt,Lt,At.normalized,At.colorSpace);H(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q(S),Ot,S.width,S.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q(S),Ot,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ot,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function J(z,S,Y){let gt=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,z),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let pt=n.get(S.depthTexture);pt.__renderTarget=S;let At=gt?S.depthTexture.image[0]:S.depthTexture.image;(!pt.__webglTexture||At.width!==S.width||At.height!==S.height)&&(At.width=S.width,At.height=S.height,S.depthTexture.needsUpdate=!0),gt?ie(S.depthTexture,0):ne(S.depthTexture,0);let Gt=pt.__webglTexture,Lt=Q(S),Ot=gt?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,ee=S.depthTexture.format===ns?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ki)H(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,Ot,Gt,0,Lt):i.framebufferTexture2D(i.FRAMEBUFFER,ee,Ot,Gt,0);else if(S.depthTexture.format===ns)H(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,Ot,Gt,0,Lt):i.framebufferTexture2D(i.FRAMEBUFFER,ee,Ot,Gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(z){let S=n.get(z),Y=z.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==z.depthTexture){let gt=z.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),gt){let pt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,gt.removeEventListener("dispose",pt)};gt.addEventListener("dispose",pt),S.__depthDisposeCallback=pt}S.__boundDepthTexture=gt}if(z.depthTexture&&!S.__autoAllocateDepthBuffer)if(Y)for(let gt=0;gt<6;gt++)J(S.__webglFramebuffer[gt],z,gt);else z.texture.mipmaps.length>0?J(S.__webglFramebuffer[0],z,0):J(S.__webglFramebuffer,z,0);else if(Y){S.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[gt]),S.__webglDepthbuffer[gt]===void 0)S.__webglDepthbuffer[gt]=i.createRenderbuffer(),N(S.__webglDepthbuffer[gt],z,!1);else{let pt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=S.__webglDepthbuffer[gt];i.bindRenderbuffer(i.RENDERBUFFER,At),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,At)}}else if(z.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),N(S.__webglDepthbuffer,z,!1);else{let pt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,At),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,At)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(z,S,Y){let gt=n.get(z);S!==void 0&&D(gt.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&dt(z)}function Bt(z){let S=z.texture,Y=n.get(z),gt=n.get(S);z.addEventListener("dispose",ft),Z(z);let pt=z.textures,At=z.isWebGLCubeRenderTarget===!0,Gt=pt.length>1;if(Gt||(gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture()),gt.__version=S.version,o.memory.textures++),At){Y.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(S.mipmaps.length>0){Y.__webglFramebuffer[Lt]=[];for(let Ot=0;Ot<S.mipmaps.length;Ot++)Y.__webglFramebuffer[Lt][Ot]=i.createFramebuffer()}else Y.__webglFramebuffer[Lt]=i.createFramebuffer()}else{if(S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Lt=0;Lt<S.mipmaps.length;Lt++)Y.__webglFramebuffer[Lt]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Gt)for(let Lt=0,Ot=pt.length;Lt<Ot;Lt++){let ee=n.get(pt[Lt]);ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(z.samples>0&&H(z)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Lt=0;Lt<pt.length;Lt++){let Ot=pt[Lt];Y.__webglColorRenderbuffer[Lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Lt]);let ee=r.convert(Ot.format,Ot.colorSpace),pe=r.convert(Ot.type),tt=L(Ot.internalFormat,ee,pe,Ot.normalized,Ot.colorSpace,z.isXRRenderTarget===!0),Ut=Q(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,tt,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),N(Y.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(At){e.bindTexture(i.TEXTURE_CUBE_MAP,gt.__webglTexture),W(i.TEXTURE_CUBE_MAP,S);for(let Lt=0;Lt<6;Lt++)if(S.mipmaps.length>0)for(let Ot=0;Ot<S.mipmaps.length;Ot++)D(Y.__webglFramebuffer[Lt][Ot],z,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Ot);else D(Y.__webglFramebuffer[Lt],z,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);P(S)?R(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(Gt){for(let Lt=0,Ot=pt.length;Lt<Ot;Lt++){let ee=pt[Lt],pe=n.get(ee),tt=i.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(tt=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,pe.__webglTexture),W(tt,ee),D(Y.__webglFramebuffer,z,ee,i.COLOR_ATTACHMENT0+Lt,tt,0),P(ee)&&R(tt)}e.unbindTexture()}else{let Lt=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Lt=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Lt,gt.__webglTexture),W(Lt,S),S.mipmaps.length>0)for(let Ot=0;Ot<S.mipmaps.length;Ot++)D(Y.__webglFramebuffer[Ot],z,S,i.COLOR_ATTACHMENT0,Lt,Ot);else D(Y.__webglFramebuffer,z,S,i.COLOR_ATTACHMENT0,Lt,0);P(S)?R(Lt):S.mipmaps.length>0&&i.texParameteri(Lt,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}z.depthBuffer&&dt(z)}function X(z){let S=z.textures;for(let Y=0,gt=S.length;Y<gt;Y++){let pt=S[Y];if(P(pt)&&pt.mipmapsAutoUpdate===!0){let At=O(z),Gt=n.get(pt).__webglTexture;e.bindTexture(At,Gt),R(At),e.unbindTexture()}}}let Zt=[];function K(z){if(z.samples>0){if(H(z)===!1){let S=z.textures,Y=z.width,gt=z.height,pt=i.COLOR_BUFFER_BIT,At=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Gt=n.get(z),Lt=S.length>1;if(Lt)for(let ee=0;ee<S.length;ee++)e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),z.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let ee=0;ee<S.length;ee++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(pt|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(pt|=i.STENCIL_BUFFER_BIT)),Lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Gt.__webglColorRenderbuffer[ee]);let pe=n.get(S[ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,Y,gt,0,0,Y,gt,pt,i.NEAREST),l===!0&&(Zt.length=0,Zt.push(i.COLOR_ATTACHMENT0+ee),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&Zt.push(At),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Lt)for(let ee=0;ee<S.length;ee++){e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,Gt.__webglColorRenderbuffer[ee]);let pe=n.get(S[ee]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.TEXTURE_2D,pe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Gt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&l){let S=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Q(z){return Math.min(s.maxSamples,z.samples)}function H(z){let S=n.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function zt(z){let S=o.render.frame;u.get(z)!==S&&(u.set(z,S),z.update())}function ht(z,S){let Y=z.colorSpace,gt=z.format,pt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||Y!==Or&&Y!==is&&(nn.getTransfer(Y)===ln?(gt!==Fi||pt!==oi)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ke("WebGLTextures: Unsupported texture color space:",Y)),S}function mt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(c.width=z.naturalWidth||z.width,c.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(c.width=z.displayWidth,c.height=z.displayHeight):(c.width=z.width,c.height=z.height),c}this.allocateTextureUnit=fe,this.resetTextureUnits=Nt,this.getTextureUnits=Yt,this.setTextureUnits=$t,this.setTexture2D=ne,this.setTexture2DArray=ce,this.setTexture3D=ge,this.setTextureCube=ie,this.rebindTextures=ot,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=D,this.useMultisampledRTT=H,this.dispose=it}function x_(i,t){function e(n,s=is){let r,o=nn.getTransfer(s);if(n===oi)return i.UNSIGNED_BYTE;if(n===al)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===oh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ih)return i.BYTE;if(n===sh)return i.SHORT;if(n===gr)return i.UNSIGNED_SHORT;if(n===ol)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===wi)return i.FLOAT;if(n===Ii)return i.HALF_FLOAT;if(n===ah)return i.ALPHA;if(n===lh)return i.RGB;if(n===Fi)return i.RGBA;if(n===Ki)return i.DEPTH_COMPONENT;if(n===ns)return i.DEPTH_STENCIL;if(n===cl)return i.RED;if(n===hl)return i.RED_INTEGER;if(n===gs)return i.RG;if(n===ul)return i.RG_INTEGER;if(n===dl)return i.RGBA_INTEGER;if(n===So||n===wo||n===bo||n===Ao)if(o===ln)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===So)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===So)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fl||n===pl||n===ml||n===gl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xl||n===_l||n===yl||n===vl||n===Ml||n===Eo||n===Sl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xl||n===_l)return o===ln?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yl)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===vl)return r.COMPRESSED_R11_EAC;if(n===Ml)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Eo)return r.COMPRESSED_RG11_EAC;if(n===Sl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wl||n===bl||n===Al||n===El||n===Tl||n===Cl||n===Rl||n===Pl||n===Il||n===Fl||n===Ll||n===Dl||n===zl||n===Nl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wl)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bl)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Al)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===El)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tl)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cl)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rl)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pl)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Il)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fl)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ll)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dl)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zl)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nl)return o===ln?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ul||n===Ol||n===Bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ul)return o===ln?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kl||n===Vl||n===To||n===Hl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===kl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===To)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var __=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y_=`
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

}`,Fh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new to(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Si({vertexShader:__,fragmentShader:y_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ft(new Tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lh=class extends Ui{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,p=null,m=null,g=null,E=typeof XRWebGLBinding<"u",x=new Fh,_={},A=e.getContextAttributes(),P=null,R=null,O=[],L=[],M=new wt,F=null,Z=null,k=new Gn;k.viewport=new xn;let at=new Gn;at.viewport=new xn;let ft=[k,at],et=new tl,Mt=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Pt){let ne=O[Pt];return ne===void 0&&(ne=new ar,O[Pt]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Pt){let ne=O[Pt];return ne===void 0&&(ne=new ar,O[Pt]=ne),ne.getGripSpace()},this.getHand=function(Pt){let ne=O[Pt];return ne===void 0&&(ne=new ar,O[Pt]=ne),ne.getHandSpace()};function yt(Pt){let ne=L.indexOf(Pt.inputSource);if(ne===-1)return;let ce=O[ne];ce!==void 0&&(ce.update(Pt.inputSource,Pt.frame,c||o),ce.dispatchEvent({type:Pt.type,data:Pt.inputSource}))}function lt(){s.removeEventListener("select",yt),s.removeEventListener("selectstart",yt),s.removeEventListener("selectend",yt),s.removeEventListener("squeeze",yt),s.removeEventListener("squeezestart",yt),s.removeEventListener("squeezeend",yt),s.removeEventListener("end",lt),s.removeEventListener("inputsourceschange",Rt);for(let Pt=0;Pt<O.length;Pt++){let ne=L[Pt];ne!==null&&(L[Pt]=null,O[Pt].disconnect(ne))}Mt=null,it=null,x.reset();for(let Pt in _)delete _[Pt];if(t.setRenderTarget(P),m=null,p=null,d=null,s=null,R=null,fe.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(M.width,M.height,!1),Z!==null){let Pt=Z.camera;Pt.fov=Z.fov,Pt.zoom=Z.zoom,Pt.updateProjectionMatrix(),Z=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Pt){r=Pt,n.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Pt){a=Pt,n.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Pt){c=Pt},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d===null&&E&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Pt){if(s=Pt,s!==null){if(P=t.getRenderTarget(),s.addEventListener("select",yt),s.addEventListener("selectstart",yt),s.addEventListener("selectend",yt),s.addEventListener("squeeze",yt),s.addEventListener("squeezestart",yt),s.addEventListener("squeezeend",yt),s.addEventListener("end",lt),s.addEventListener("inputsourceschange",Rt),A.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(M),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,ge=null,ie=null;A.depth&&(ie=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ce=A.stencil?ns:Ki,ge=A.stencil?Ds:Pi);let _e={colorFormat:e.RGBA8,depthFormat:ie,scaleFactor:r};d=this.getBinding(),p=d.createProjectionLayer(_e),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),R=new hi(p.textureWidth,p.textureHeight,{format:Fi,type:oi,depthTexture:new ji(p.textureWidth,p.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let ce={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,ce),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new hi(m.framebufferWidth,m.framebufferHeight,{format:Fi,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),fe.setContext(s),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Rt(Pt){for(let ne=0;ne<Pt.removed.length;ne++){let ce=Pt.removed[ne],ge=L.indexOf(ce);ge>=0&&(L[ge]=null,O[ge].disconnect(ce))}for(let ne=0;ne<Pt.added.length;ne++){let ce=Pt.added[ne],ge=L.indexOf(ce);if(ge===-1){for(let _e=0;_e<O.length;_e++)if(_e>=L.length){L.push(ce),ge=_e;break}else if(L[_e]===null){L[_e]=ce,ge=_e;break}if(ge===-1)break}let ie=O[ge];ie&&ie.connect(ce)}}function vt(Pt,ne){ne===null?Pt.matrixWorld.copy(Pt.matrix):Pt.matrixWorld.multiplyMatrices(ne.matrixWorld,Pt.matrix),Pt.matrixWorldInverse.copy(Pt.matrixWorld).invert()}this.updateCamera=function(Pt){if(s===null)return;let ne=Pt.near,ce=Pt.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(ce=x.depthFar)),et.near=at.near=k.near=ne,et.far=at.far=k.far=ce,(Mt!==et.near||it!==et.far)&&(s.updateRenderState({depthNear:et.near,depthFar:et.far}),Mt=et.near,it=et.far),et.layers.mask=Pt.layers.mask|6,k.layers.mask=et.layers.mask&-5,at.layers.mask=et.layers.mask&-3;let ge=Pt.parent,ie=et.cameras;vt(et,ge);for(let _e=0;_e<ie.length;_e++)vt(ie[_e],ge);et.projectionMatrix.copy(k.projectionMatrix),et.projectionMatrixInverse.copy(k.projectionMatrixInverse),Z===null&&Pt.isPerspectiveCamera&&(Z={camera:Pt,fov:Pt.fov,zoom:Pt.zoom}),Nt(Pt,et,ge)};function Nt(Pt,ne,ce){ce===null?Pt.matrix.copy(ne.matrixWorld):(Pt.matrix.copy(ce.matrixWorld),Pt.matrix.invert(),Pt.matrix.multiply(ne.matrixWorld)),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.updateMatrixWorld(!0),Pt.projectionMatrix.copy(ne.projectionMatrix),Pt.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Pt.isPerspectiveCamera&&(Pt.fov=Ea*2*Math.atan(1/Pt.projectionMatrix.elements[5]),Pt.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(Pt){l=Pt,p!==null&&(p.fixedFoveation=Pt),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Pt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(et)},this.getCameraTexture=function(Pt){return _[Pt]};let Yt=null;function $t(Pt,ne){if(u=ne.getViewerPose(c||o),g=ne,u!==null){let ce=u.views;m!==null&&(t.setRenderTargetFramebuffer(R,m.framebuffer),t.setRenderTarget(R));let ge=!1;ce.length!==et.cameras.length&&(et.cameras.length=0,ge=!0);for(let se=0;se<ce.length;se++){let W=ce[se],St=null;if(m!==null)St=m.getViewport(W);else{let ut=d.getViewSubImage(p,W);St=ut.viewport,se===0&&(t.setRenderTargetTextures(R,ut.colorTexture,ut.depthStencilTexture),t.setRenderTarget(R))}let rt=ft[se];rt===void 0&&(rt=new Gn,rt.layers.enable(se),rt.viewport=new xn,ft[se]=rt),rt.matrix.fromArray(W.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(W.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(St.x,St.y,St.width,St.height),se===0&&(et.matrix.copy(rt.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),ge===!0&&et.cameras.push(rt)}let ie=s.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){d=n.getBinding();let se=d.getDepthInformation(ce[0]);se&&se.isValid&&se.texture&&x.init(se,s.renderState)}if(ie&&ie.includes("camera-access")&&E){t.state.unbindTexture(),d=n.getBinding();for(let se=0;se<ce.length;se++){let W=ce[se].camera;if(W){let St=_[W];St||(St=new to,_[W]=St);let rt=d.getCameraImage(W);St.sourceTexture=rt}}}}for(let ce=0;ce<O.length;ce++){let ge=L[ce],ie=O[ce];ge!==null&&ie!==void 0&&ie.update(ge,ne,c||o)}Yt&&Yt(Pt,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let fe=new Zd;fe.setAnimationLoop($t),this.setAnimationLoop=function(Pt){Yt=Pt},this.dispose=function(){}}},v_=new sn,rf=new Xe;rf.set(-1,0,0,0,1,0,0,0,1);function M_(i,t){function e(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,mh(i)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function s(x,_,A,P,R){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(x,_):_.isMeshLambertMaterial?(r(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(x,_),d(x,_)):_.isMeshPhongMaterial?(r(x,_),u(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(x,_),p(x,_),_.isMeshPhysicalMaterial&&m(x,_,R)):_.isMeshMatcapMaterial?(r(x,_),g(x,_)):_.isMeshDepthMaterial?r(x,_):_.isMeshDistanceMaterial?(r(x,_),E(x,_)):_.isMeshNormalMaterial?r(x,_):_.isLineBasicMaterial?(o(x,_),_.isLineDashedMaterial&&a(x,_)):_.isPointsMaterial?l(x,_,A,P):_.isSpriteMaterial?c(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,e(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===On&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,e(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===On&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,e(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,e(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);let A=t.get(_),P=A.envMap,R=A.envMapRotation;P&&(x.envMap.value=P,x.envMapRotation.value.setFromMatrix4(v_.makeRotationFromEuler(R)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(rf),x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,x.aoMapTransform))}function o(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform))}function a(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function l(x,_,A,P){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*A,x.scale.value=P*.5,_.map&&(x.map.value=_.map,e(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function c(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function u(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function d(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function p(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function m(x,_,A){x.ior.value=_.ior,_.diffuseRoughness>0&&(x.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=_.diffuseRoughnessMap,e(_.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===On&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.retroreflectivity>0&&(x.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=A.texture,x.transmissionSamplerSize.value.set(A.width,A.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,_){_.matcap&&(x.matcap.value=_.matcap)}function E(x,_){let A=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(A.matrixWorld),x.nearDistance.value=A.shadow.camera.near,x.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function S_(i,t,e,n){let s={},r={};function o(A,P){let R=P.program;n.uniformBlockBinding(A,R,s[A.id])}function a(A,P){let R=s[A.id];R===void 0&&(g(A),R=l(A),s[A.id]=R,A.addEventListener("dispose",x));let O=P.program;n.updateUBOMapping(A,O);let L=t.render.frame;r[A.id]!==L&&(c(A),r[A.id]=L)}function l(A){let P=i.createBuffer(),R=A.__size,O=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,R,O),i.bindBuffer(i.UNIFORM_BUFFER,null),P}function c(A){let P=s[A.id],R=A.uniforms,O=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let L=0,M=R.length;L<M;L++){let F=R[L];if(Array.isArray(F))for(let Z=0,k=F.length;Z<k;Z++)u(F[Z],L,Z,O);else u(F,L,0,O)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(A,P,R,O){if(p(A,P,R,O)===!0){let L=A.__offset,M=A.value;if(Array.isArray(M)){let F=0;for(let Z=0;Z<M.length;Z++){let k=M[Z],at=E(k,!0);d(k,A.__data,F),F+=at.storage/Float32Array.BYTES_PER_ELEMENT}}else d(M,A.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,L,A.__data)}}function d(A,P,R){typeof A=="number"||typeof A=="boolean"?P[R]=A:A.isMatrix3?(P[R]=A.elements[0],P[R+1]=A.elements[1],P[R+2]=A.elements[2],P[R+3]=0,P[R+4]=A.elements[3],P[R+5]=A.elements[4],P[R+6]=A.elements[5],P[R+7]=0,P[R+8]=A.elements[6],P[R+9]=A.elements[7],P[R+10]=A.elements[8],P[R+11]=0):ArrayBuffer.isView(A)?P.set(A.subarray(0,P.length-R),R):A.toArray(P,R)}function p(A,P,R,O){let L=A.value,M=P+"_"+R;if(Array.isArray(L)){O[M]===void 0&&(O[M]=[]);let F=O[M],Z=!1;for(let k=0;k<L.length;k++)m(L[k],F,k)===!0&&(Z=!0);return Z}return m(L,O,M)}function m(A,P,R){if(P[R]===void 0)return typeof A=="number"||typeof A=="boolean"?P[R]=A:ArrayBuffer.isView(A)?P[R]=A.slice():P[R]=A.clone(),!0;{let O=P[R];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return P[R]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(O.equals(A)===!1)return O.copy(A),!0}}return!1}function g(A){let P=A.uniforms,R=0,O=16;for(let M=0,F=P.length;M<F;M++){let Z=Array.isArray(P[M])?P[M]:[P[M]];for(let k=0,at=Z.length;k<at;k++){let ft=Z[k],et=Array.isArray(ft.value)?ft.value:[ft.value],Mt=Array.isArray(P[M])||Array.isArray(ft.value),it=R;for(let lt=0,Rt=et.length;lt<Rt;lt++){let vt=et[lt],Nt=E(vt,Mt),Yt=R%O,$t=Yt%Nt.boundary,fe=Yt+$t;R+=$t,fe!==0&&O-fe<Nt.storage&&(R+=O-fe),lt===0&&(it=R),R+=Nt.storage}let yt=ft.type==="int"?Int32Array:ft.type==="uint"?Uint32Array:Float32Array;ft.__data=new yt((R-it)/Float32Array.BYTES_PER_ELEMENT),ft.__offset=it}}let L=R%O;return L>0&&(R+=O-L),A.__size=R,A.__cache={},this}function E(A,P){let R={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(R.boundary=4,R.storage=4):A.isVector2?(R.boundary=8,R.storage=8):A.isVector3||A.isColor?(R.boundary=16,R.storage=12):A.isVector4?(R.boundary=16,R.storage=16):A.isMatrix3?(R.boundary=16,R.storage=48):A.isMatrix4?(R.boundary=16,R.storage=64):A.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(R.boundary=16,R.storage=A.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",A),P===!0&&(R.boundary=16,R.storage=Math.ceil(R.storage/16)*16),R}function x(A){let P=A.target;P.removeEventListener("dispose",x),i.deleteBuffer(s[P.id]),delete s[P.id],delete r[P.id]}function _(){for(let A in s)i.deleteBuffer(s[A]);s={},r={}}return{bind:o,update:a,dispose:_}}var w_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hi=null;function b_(){return Hi===null&&(Hi=new Jr(w_,16,16,gs,Ii),Hi.name="DFG_LUT",Hi.minFilter=jn,Hi.magFilter=jn,Hi.wrapS=zi,Hi.wrapT=zi,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}var Yl=class{constructor(t={}){let{canvas:e=ud(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:p=!1,outputBufferType:m=oi}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let E=m,x=new Set([dl,ul,hl]),_=new Set([oi,Pi,gr,Ds,al,ll]),A=new Uint32Array(4),P=new Int32Array(4),R={textures:[],min:[],max:[],resolution:[],intensity:[]},O=null,L=null,M=[],F=[],Z=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,at=!1,ft=null,et=null,Mt=null,it=null;this._outputColorSpace=Kn;let yt=0,lt=0,Rt=null,vt=-1,Nt=null,Yt=new xn,$t=new xn,fe=null,Pt=new be(0),ne=0,ce=e.width,ge=e.height,ie=1,_e=null,De=null,se=new xn(0,0,ce,ge),W=new xn(0,0,ce,ge),St=!1,rt=new hs,ut=new Ia,h=!1,y=!1,D=new sn,N=new j,J=new xn,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ot=!1;function Bt(){return Rt===null?ie:1}let X=n;function Zt(f,C){return e.getContext(f,C)}let K,Q,H,zt,ht,mt,z,S,Y,gt,pt,At,Gt,Lt,Ot,ee,pe,tt,Ut,qt,Qt,he,me;try{let f={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nl}`),e.addEventListener("webglcontextlost",Ge,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",ue,!1),X===null){let C="webgl2";if(X=Zt(C,f),X===null)throw Zt(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ae()}catch(f){throw e.removeEventListener("webglcontextlost",Ge,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",ue,!1),ke("WebGLRenderer: "+f.message),f}function Ae(){K=new zg(X),K.init(),Qt=new x_(X,K),Q=new bg(X,K,t,Qt),H=new m_(X,K),Q.reversedDepthBuffer&&p&&H.buffers.depth.setReversed(!0),et=X.createFramebuffer(),Mt=X.createFramebuffer(),it=X.createFramebuffer(),zt=new Og(X),ht=new e_,mt=new g_(X,K,H,ht,Q,Qt,zt),z=new Dg(k),S=new kp(X),he=new Sg(X,S),Y=new Ng(X,S,zt,he),gt=new kg(X,Y,S,he,zt),tt=new Bg(X,Q,mt),Ot=new Ag(ht),pt=new t_(k,z,K,Q,he,Ot),At=new M_(k,ht),Gt=new i_,Lt=new c_(K),pe=new Mg(k,z,H,gt,g,l),ee=new p_(k,gt,Q),me=new S_(X,zt,Q,H),Ut=new wg(X,K,zt),qt=new Ug(X,K,zt),zt.programs=pt.programs,k.capabilities=Q,k.extensions=K,k.properties=ht,k.renderLists=Gt,k.shadowMap=ee,k.state=H,k.info=zt}E!==oi&&(Z=new Hg(E,e.width,e.height,a,s,r));let Kt=new Lh(k,X);this.xr=Kt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let f=K.get("WEBGL_lose_context");f&&f.loseContext()},this.forceContextRestore=function(){let f=K.get("WEBGL_lose_context");f&&f.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(f){f!==void 0&&(ie=f,this.setSize(ce,ge,!1))},this.getSize=function(f){return f.set(ce,ge)},this.setSize=function(f,C,V=!0){if(Kt.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=f,ge=C,e.width=Math.floor(f*ie),e.height=Math.floor(C*ie),V===!0&&(e.style.width=f+"px",e.style.height=C+"px"),Z!==null&&Z.setSize(e.width,e.height),this.setViewport(0,0,f,C)},this.getDrawingBufferSize=function(f){return f.set(ce*ie,ge*ie).floor()},this.setDrawingBufferSize=function(f,C,V){ce=f,ge=C,ie=V,e.width=Math.floor(f*V),e.height=Math.floor(C*V),this.setViewport(0,0,f,C)},this.setEffects=function(f){if(E===oi){ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(f){for(let C=0;C<f.length;C++)if(f[C].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(f||[])},this.getCurrentViewport=function(f){return f.copy(Yt)},this.getViewport=function(f){return f.copy(se)},this.setViewport=function(f,C,V,U){f.isVector4?se.set(f.x,f.y,f.z,f.w):se.set(f,C,V,U),H.viewport(Yt.copy(se).multiplyScalar(Bt()).round())},this.getScissor=function(f){return f.copy(W)},this.setScissor=function(f,C,V,U){f.isVector4?W.set(f.x,f.y,f.z,f.w):W.set(f,C,V,U),H.scissor($t.copy(W).multiplyScalar(Bt()).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(f){H.setScissorTest(St=f)},this.setOpaqueSort=function(f){_e=f},this.setTransparentSort=function(f){De=f},this.getClearColor=function(f){return f.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(f=!0,C=!0,V=!0){let U=0;if(f){let I=!1;if(Rt!==null){let st=Rt.texture.format;I=x.has(st)}if(I){let st=Rt.texture.type,xt=_.has(st),_t=pe.getClearColor(),Ct=pe.getClearAlpha(),Xt=_t.r,te=_t.g,Jt=_t.b;xt?(A[0]=Xt,A[1]=te,A[2]=Jt,A[3]=Ct,X.clearBufferuiv(X.COLOR,0,A)):(P[0]=Xt,P[1]=te,P[2]=Jt,P[3]=Ct,X.clearBufferiv(X.COLOR,0,P))}else U|=X.COLOR_BUFFER_BIT}C&&(U|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(U|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&X.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(f){f.setRenderer(this),ft=f},this.dispose=function(){e.removeEventListener("webglcontextlost",Ge,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",ue,!1),pe.dispose(),Gt.dispose(),Lt.dispose(),mt.dispose(),ht.dispose(),z.dispose(),gt.dispose(),Y.dispose(),he.dispose(),me.dispose(),pt.dispose(),Kt.dispose(),Kt.removeEventListener("sessionstart",bt),Kt.removeEventListener("sessionend",ze),Fe.stop()};function Ge(f){f.preventDefault(),Vr("WebGLRenderer: Context Lost."),at=!0}function Se(){Vr("WebGLRenderer: Context Restored."),at=!1;let f=zt.autoReset,C=ee.enabled,V=ee.autoUpdate,U=ee.needsUpdate,I=ee.type;Ae(),zt.autoReset=f,ee.enabled=C,ee.autoUpdate=V,ee.needsUpdate=U,ee.type=I}function ue(f){ke("WebGLRenderer: A WebGL context could not be created. Reason: ",f.statusMessage)}function Ye(f){let C=f.target;C.removeEventListener("dispose",Ye),$(C)}function $(f){ct(f),ht.remove(f)}function ct(f){let C=ht.get(f).programs;C!==void 0&&(C.forEach(function(V){pt.releaseProgram(V)}),f.isShaderMaterial&&pt.releaseShaderCache(f))}this.renderBufferDirect=function(f,C,V,U,I,st){C===null&&(C=dt);let xt=I.isMesh&&I.matrixWorld.determinantAffine()<0,_t=T(f,C,V,U,I);H.setMaterial(U,xt);let Ct=V.index,Xt=1;if(U.wireframe===!0){if(Ct=Y.getWireframeAttribute(V),Ct===void 0)return;Xt=2}let te=V.drawRange,Jt=V.attributes.position,Et=te.start*Xt,Wt=(te.start+te.count)*Xt;st!==null&&(Et=Math.max(Et,st.start*Xt),Wt=Math.min(Wt,(st.start+st.count)*Xt)),Ct!==null?(Et=Math.max(Et,0),Wt=Math.min(Wt,Ct.count)):Jt!=null&&(Et=Math.max(Et,0),Wt=Math.min(Wt,Jt.count));let Vt=Wt-Et;if(Vt<0||Vt===1/0)return;he.setup(I,U,_t,V,Ct);let oe,xe=Ut;if(Ct!==null&&(oe=S.get(Ct),xe=qt,xe.setIndex(oe)),I.isMesh)U.wireframe===!0?(H.setLineWidth(U.wireframeLinewidth*Bt()),xe.setMode(X.LINES)):xe.setMode(X.TRIANGLES);else if(I.isLine){let Te=U.linewidth;Te===void 0&&(Te=1),H.setLineWidth(Te*Bt()),I.isLineSegments?xe.setMode(X.LINES):I.isLineLoop?xe.setMode(X.LINE_LOOP):xe.setMode(X.LINE_STRIP)}else I.isPoints?xe.setMode(X.POINTS):I.isSprite&&xe.setMode(X.TRIANGLES);if(I.isBatchedMesh)if(K.get("WEBGL_multi_draw"))xe.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let Te=I._multiDrawStarts,re=I._multiDrawCounts,Je=I._multiDrawCount,Ne=Ct?S.get(Ct).bytesPerElement:1,ae=ht.get(U).currentProgram.getUniforms();for(let ve=0;ve<Je;ve++)ae.setValue(X,"_gl_DrawID",ve),xe.render(Te[ve]/Ne,re[ve])}else if(I.isInstancedMesh)xe.renderInstances(Et,Vt,I.count);else if(V.isInstancedBufferGeometry){let Te=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,re=Math.min(V.instanceCount,Te);xe.renderInstances(Et,Vt,re)}else xe.render(Et,Vt)};function Dt(f,C,V,U){ft!==null&&f.isNodeMaterial&&ft.setObject(U,f),h===!0&&Ot.setState(f,V,!1),f.transparent===!0&&f.side===Ve&&f.forceSinglePass===!1?(f.side=On,f.needsUpdate=!0,nt(f,C,U),f.side=ms,f.needsUpdate=!0,nt(f,C,U),f.side=Ve):nt(f,C,U)}this.compile=function(f,C,V=null){V===null&&(V=f),ft!==null&&ft.renderStart(f,C,V),L=Lt.get(V),L.init(C),F.push(L),V.traverseVisible(function(I){I.isLight&&I.layers.test(C.layers)&&(L.pushLight(I),I.castShadow&&L.pushShadow(I))}),f!==V&&f.traverseVisible(function(I){I.isLight&&I.layers.test(C.layers)&&(L.pushLight(I),I.castShadow&&L.pushShadow(I))}),L.setupLights(),ft!==null&&ft.updateLights(L.state.lightsArray),y=this.localClippingEnabled,h=Ot.init(this.clippingPlanes,y),h===!0&&Ot.setGlobalState(this.clippingPlanes,C),ft!==null&&ee.render(L.state.shadowsArray,V,C);let U=new Set;return f.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let st=I.material;if(st)if(Array.isArray(st))for(let xt=0;xt<st.length;xt++){let _t=st[xt];Dt(_t,V,C,I),U.add(_t)}else Dt(st,V,C,I),U.add(st)}),L=F.pop(),ft!==null&&ft.renderEnd(),U},this.compileAsync=function(f,C,V=null){let U=this.compile(f,C,V);return new Promise(I=>{function st(){if(U.forEach(function(xt){let Ct=ht.get(xt).currentProgram;(Ct===void 0||Ct.isReady())&&U.delete(xt)}),U.size===0){I(f);return}setTimeout(st,10)}K.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Tt=null;function It(f){Tt&&Tt(f)}function bt(){Fe.stop()}function ze(){Fe.start()}let Fe=new Zd;Fe.setAnimationLoop(It),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(f){Tt=f,Kt.setAnimationLoop(f),f===null?Fe.stop():Fe.start()},Kt.addEventListener("sessionstart",bt),Kt.addEventListener("sessionend",ze),this.render=function(f,C){if(C!==void 0&&C.isCamera!==!0){ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(at===!0)return;ft!==null&&ft.renderStart(f,C);let V=Kt.enabled===!0&&Kt.isPresenting===!0,U=Z!==null&&(Rt===null||V)&&Z.begin(k,Rt);if(f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Kt.enabled===!0&&Kt.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(Kt.cameraAutoUpdate===!0&&Kt.updateCamera(C),C=Kt.getCamera()),f.isScene===!0&&f.onBeforeRender(k,f,C,Rt),L=Lt.get(f,F.length),L.init(C),L.state.textureUnits=mt.getTextureUnits(),F.push(L),D.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),C.isArrayCamera?ut.setFromArrayCamera(C):rt.setFromProjectionMatrix(D,gi,C.reversedDepth),y=this.localClippingEnabled,h=Ot.init(this.clippingPlanes,y),O=Gt.get(f,M.length),O.init(),M.push(O),this.info.render.frame++,Kt.enabled===!0&&Kt.isPresenting===!0){let xt=k.xr.getDepthSensingMesh();xt!==null&&on(xt,C,-1/0,k.sortObjects)}on(f,C,0,k.sortObjects),O.finish(),ft!==null&&ft.updateLights(L.state.lightsArray),k.sortObjects===!0&&O.sort(_e,De),ot=Kt.enabled===!1||Kt.isPresenting===!1||Kt.hasDepthSensing()===!1,ot&&pe.addToRenderList(O,f),this.info.autoReset===!0&&this.info.reset(),h===!0&&Ot.beginShadows();let I=L.state.shadowsArray;if(ee.render(I,f,C),h===!0&&Ot.endShadows(),(U&&Z.hasRenderPass())===!1){let xt=O.opaque,_t=O.transmissive;if(L.setupLights(),C.isArrayCamera){let Ct=C.cameras;if(_t.length>0)for(let Xt=0,te=Ct.length;Xt<te;Xt++){let Jt=Ct[Xt];pn(xt,_t,f,Jt)}ot&&pe.render(f);for(let Xt=0,te=Ct.length;Xt<te;Xt++){let Jt=Ct[Xt];an(O,f,Jt,Jt.viewport)}}else _t.length>0&&pn(xt,_t,f,C),ot&&pe.render(f),an(O,f,C)}Rt!==null&&lt===0&&(mt.updateMultisampleRenderTarget(Rt),mt.updateRenderTargetMipmap(Rt)),U&&Z.end(k),f.isScene===!0&&f.onAfterRender(k,f,C),he.resetDefaultState(),vt=-1,Nt=null,F.pop(),F.length>0?(L=F[F.length-1],mt.setTextureUnits(L.state.textureUnits),h===!0&&Ot.setGlobalState(k.clippingPlanes,L.state.camera)):L=null,M.pop(),M.length>0?O=M[M.length-1]:O=null,ft!==null&&ft.renderEnd()};function on(f,C,V,U){if(f.visible===!1)return;if(f.layers.test(C.layers)){if(f.isGroup)V=f.renderOrder;else if(f.isLOD)f.autoUpdate===!0&&f.update(C);else if(f.isLight)L.pushLight(f),f.castShadow&&L.pushShadow(f);else if(f.isSprite){let xt=C.isArrayCamera?ut:rt;if(!f.frustumCulled||f.intersectsFrustum(xt)){U&&J.setFromMatrixPosition(f.matrixWorld).applyMatrix4(D);let _t=gt.update(f),Ct=f.material;Ct.visible&&O.push(f,_t,Ct,V,J.z,null,C)}}else if(f.isMesh||f.isLine||f.isPoints){let xt=C.isArrayCamera?ut:rt;if(!f.frustumCulled||f.intersectsFrustum(xt)){let _t=gt.update(f),Ct=f.material;if(U&&(f.boundingSphere!==void 0?(f.boundingSphere===null&&f.computeBoundingSphere(),J.copy(f.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),J.copy(_t.boundingSphere.center)),J.applyMatrix4(f.matrixWorld).applyMatrix4(D)),Array.isArray(Ct)){let Xt=_t.groups;for(let te=0,Jt=Xt.length;te<Jt;te++){let Et=Xt[te],Wt=Ct[Et.materialIndex];Wt&&Wt.visible&&O.push(f,_t,Wt,V,J.z,Et,C)}}else Ct.visible&&O.push(f,_t,Ct,V,J.z,null,C)}}}let st=f.children;for(let xt=0,_t=st.length;xt<_t;xt++)on(st[xt],C,V,U)}function an(f,C,V,U){let{opaque:I,transmissive:st,transparent:xt}=f;L.setupLightsView(V),h===!0&&Ot.setGlobalState(k.clippingPlanes,V),U&&H.viewport(Yt.copy(U)),I.length>0&&gn(I,C,V),st.length>0&&gn(st,C,V),xt.length>0&&gn(xt,C,V),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function pn(f,C,V,U){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[U.id]===void 0){let Et=K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[U.id]=new hi(1,1,{generateMipmaps:!0,type:Et?Ii:oi,minFilter:es,samples:Math.max(4,Q.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nn.workingColorSpace})}let st=L.state.transmissionRenderTarget[U.id],xt=U.viewport||Yt;st.setSize(xt.z*k.transmissionResolutionScale,xt.w*k.transmissionResolutionScale);let _t=k.getRenderTarget(),Ct=k.getActiveCubeFace(),Xt=k.getActiveMipmapLevel();k.setRenderTarget(st),k.getClearColor(Pt),ne=k.getClearAlpha(),ne<1&&k.setClearColor(16777215,.5),k.clear(),ot&&pe.render(V);let te=k.toneMapping;k.toneMapping=Vi;let Jt=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),L.setupLightsView(U),h===!0&&Ot.setGlobalState(k.clippingPlanes,U),gn(f,V,U),mt.updateMultisampleRenderTarget(st),mt.updateRenderTargetMipmap(st),K.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let Wt=0,Vt=C.length;Wt<Vt;Wt++){let oe=C[Wt],{object:xe,geometry:Te,material:re,group:Je}=oe;if(re.side===Ve&&xe.layers.test(U.layers)){let Ne=re.side;re.side=On,re.needsUpdate=!0,Nn(xe,V,U,Te,re,Je),re.side=Ne,re.needsUpdate=!0,Et=!0}}Et===!0&&(mt.updateMultisampleRenderTarget(st),mt.updateRenderTargetMipmap(st))}k.setRenderTarget(_t,Ct,Xt),k.setClearColor(Pt,ne),Jt!==void 0&&(U.viewport=Jt),k.toneMapping=te}function gn(f,C,V){let U=C.isScene===!0?C.overrideMaterial:null;for(let I=0,st=f.length;I<st;I++){let xt=f[I],{object:_t,geometry:Ct,group:Xt}=xt,te=xt.material;te.allowOverride===!0&&U!==null&&(te=U),_t.layers.test(V.layers)&&Nn(_t,C,V,Ct,te,Xt)}}function Nn(f,C,V,U,I,st){ft!==null&&I.isNodeMaterial&&ft.setObject(f,I),f.onBeforeRender(k,C,V,U,I,st),f.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,f.matrixWorld),f.normalMatrix.getNormalMatrix(f.modelViewMatrix),I.onBeforeRender(k,C,V,U,f,st),I.transparent===!0&&I.side===Ve&&I.forceSinglePass===!1?(I.side=On,I.needsUpdate=!0,k.renderBufferDirect(V,C,U,I,f,st),I.side=ms,I.needsUpdate=!0,k.renderBufferDirect(V,C,U,I,f,st),I.side=Ve):k.renderBufferDirect(V,C,U,I,f,st),f.onAfterRender(k,C,V,U,I,st)}function Bn(f){let C=0;for(let V of f)V.texture!==null&&C++;return C}function nt(f,C,V){C.isScene!==!0&&(C=dt);let U=ht.get(f),I=L.state.lights,st=L.state.shadowsArray,xt=I.state.version,_t=pt.getParameters(f,I.state,st,C,V,L.state.lightProbeGridArray),Ct=pt.getProgramCacheKey(_t),Xt=U.programs;U.environment=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?C.environment:null,U.fog=C.fog;let te=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap;U.envMap=z.get(f.envMap||U.environment,te),U.envMapRotation=U.environment!==null&&f.envMap===null?C.environmentRotation:f.envMapRotation,Xt===void 0&&(f.addEventListener("dispose",Ye),Xt=new Map,U.programs=Xt,U.programVariants=new Map);let Jt=Xt.get(Ct);if(Jt!==void 0){if(U.currentProgram===Jt&&U.lightsStateVersion===xt)return w(f,_t),Jt}else _t.uniforms=pt.getUniforms(f),ft!==null&&f.isNodeMaterial&&ft.build(f,V,_t),f.onBeforeCompile(_t,k),Jt=pt.acquireProgram(_t,Ct),Xt.set(Ct,Jt),U.uniforms=_t.uniforms;let Et=U.uniforms;return(!f.isShaderMaterial&&!f.isRawShaderMaterial||f.clipping===!0)&&(Et.clippingPlanes=Ot.uniform),w(f,_t),U.needsLights=G(f),U.lightsStateVersion=xt,U.needsLights&&(Et.ambientLightColor.value=I.state.ambient,Et.sunLights.value=I.state.sun,Et.sunLightShadows.value=I.state.sunShadow,Et.directionalLights.value=I.state.directional,Et.directionalLightShadows.value=I.state.directionalShadow,Et.spotLights.value=I.state.spot,Et.spotLightShadows.value=I.state.spotShadow,Et.rectAreaLights.value=I.state.rectArea,Et.ltc_1.value=I.state.rectAreaLTC1,Et.ltc_2.value=I.state.rectAreaLTC2,Et.pointLights.value=I.state.point,Et.pointLightShadows.value=I.state.pointShadow,Et.hemisphereLights.value=I.state.hemi,Et.sunShadowMatrix.value=I.state.sunShadowMatrix,Et.sunShadowCascade.value=I.state.sunShadowCascade,Et.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Et.spotLightMatrix.value=I.state.spotLightMatrix,Et.spotLightMap.value=I.state.spotLightMap,Et.pointShadowMatrix.value=I.state.pointShadowMatrix),U.numLightProbeGrids=Bn(L.state.lightProbeGridArray),U.currentProgram=Jt,U.uniformsList=null,Jt}function v(f,C,V,U,I){let st=ht.get(f),xt=st.currentProgram.id+","+U+","+I,_t=st.programVariants.get(xt);return _t===void 0?(_t=nt(f,C,V),st.programVariants.set(xt,_t)):(st.currentProgram=_t,st.uniformsList=null,st.outputColorSpace=U,st.toneMapping=I),_t}function b(f){if(f.uniformsList===null){let C=f.currentProgram.getUniforms();f.uniformsList=xr.seqWithValue(C.seq,f.uniforms)}return f.uniformsList}function w(f,C){let V=ht.get(f);V.outputColorSpace=C.outputColorSpace,V.batching=C.batching,V.batchingColor=C.batchingColor,V.instancing=C.instancing,V.instancingColor=C.instancingColor,V.instancingMorph=C.instancingMorph,V.skinning=C.skinning,V.morphTargets=C.morphTargets,V.morphNormals=C.morphNormals,V.morphColors=C.morphColors,V.morphTargetsCount=C.morphTargetsCount,V.numClippingPlanes=C.numClippingPlanes,V.numIntersection=C.numClipIntersection,V.vertexAlphas=C.vertexAlphas,V.vertexTangents=C.vertexTangents,V.toneMapping=C.toneMapping}function T(f,C,V,U,I){C.isScene!==!0&&(C=dt),mt.resetTextureUnits();let st=C.fog,xt=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?C.environment:null,_t=Rt===null?k.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:nn.workingColorSpace,Ct=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,Xt=z.get(U.envMap||xt,Ct),te=U.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Jt=!!V.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Et=!!V.morphAttributes.position,Wt=!!V.morphAttributes.normal,Vt=!!V.morphAttributes.color,oe=Vi;U.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(oe=k.toneMapping);let xe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Te=xe!==void 0?xe.length:0,re=ht.get(U),Je=L.state.lights;if(h===!0&&(y===!0||f!==Nt)){let un=f===Nt&&U.id===vt;Ot.setState(U,f,un)}let Ne=!1,ae=!1;U.version===re.__version?re.needsLights&&re.lightsStateVersion!==Je.state.version||I.isBatchedMesh&&re.batching===!1||!I.isBatchedMesh&&re.batching===!0||I.isBatchedMesh&&re.batchingColor===!0&&I._colorsTexture===null||I.isBatchedMesh&&re.batchingColor===!1&&I._colorsTexture!==null||I.isInstancedMesh&&re.instancing===!1||!I.isInstancedMesh&&re.instancing===!0||I.isSkinnedMesh&&re.skinning===!1||!I.isSkinnedMesh&&re.skinning===!0||I.isInstancedMesh&&re.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&re.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&re.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&re.instancingMorph===!1&&I.morphTexture!==null||re.envMap!==Xt||U.fog===!0&&re.fog!==st||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==Ot.numPlanes||re.numIntersection!==Ot.numIntersection)||re.vertexAlphas!==te||re.vertexTangents!==Jt||re.morphTargets!==Et||re.morphNormals!==Wt||re.morphColors!==Vt||re.morphTargetsCount!==Te||re.numLightProbeGrids!==Bn(L.state.lightProbeGridArray)?Ne=!0:(re.outputColorSpace!==_t||re.toneMapping!==oe)&&(ae=!0):(Ne=!0,re.__version=U.version);let ve=re.currentProgram;(Ne===!0||ae===!0)&&(ve=ae===!0?v(U,C,I,_t,oe):nt(U,C,I),ft&&U.isNodeMaterial&&ft.onUpdateProgram(U,ve,re));let Oe=!1,vn=!1,hn=!1,Le=ve.getUniforms(),mn=re.uniforms;if(H.useProgram(ve.program)&&(Oe=!0,vn=!0,hn=!0),U.id!==vt&&(vt=U.id,vn=!0),Oe||Nt!==f){H.buffers.depth.getReversed()&&f.reversedDepth!==!0&&(f._reversedDepth=!0,f.updateProjectionMatrix()),Le.setValue(X,"projectionMatrix",f.projectionMatrix),Le.setValue(X,"viewMatrix",f.matrixWorldInverse);let bn=Le.map.cameraPosition;bn!==void 0&&bn.setValue(X,N.setFromMatrixPosition(f.matrixWorld)),Q.logarithmicDepthBuffer&&Le.setValue(X,"logDepthBufFC",2/(Math.log(f.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Le.setValue(X,"isOrthographic",f.isOrthographicCamera===!0),Nt!==f&&(Nt=f,vn=!0,hn=!0)}if(re.needsLights&&(Je.state.sunShadowMap.length>0&&Le.setValue(X,"sunShadowMap",Je.state.sunShadowMap,mt),Je.state.directionalShadowMap.length>0&&Le.setValue(X,"directionalShadowMap",Je.state.directionalShadowMap,mt),Je.state.spotShadowMap.length>0&&Le.setValue(X,"spotShadowMap",Je.state.spotShadowMap,mt),Je.state.pointShadowMap.length>0&&Le.setValue(X,"pointShadowMap",Je.state.pointShadowMap,mt)),I.isSkinnedMesh){Le.setOptional(X,I,"bindMatrix"),Le.setOptional(X,I,"bindMatrixInverse");let un=I.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Le.setValue(X,"boneTexture",un.boneTexture,mt))}I.isBatchedMesh&&(Le.setOptional(X,I,"batchingTexture"),Le.setValue(X,"batchingTexture",I._matricesTexture,mt),Le.setOptional(X,I,"batchingIdTexture"),Le.setValue(X,"batchingIdTexture",I._indirectTexture,mt),Le.setOptional(X,I,"batchingColorTexture"),I._colorsTexture!==null&&Le.setValue(X,"batchingColorTexture",I._colorsTexture,mt));let Jn=V.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&tt.update(I,V,ve),(vn||re.receiveShadow!==I.receiveShadow)&&(re.receiveShadow=I.receiveShadow,Le.setValue(X,"receiveShadow",I.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&C.environment!==null&&(mn.envMapIntensity.value=C.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=b_()),vn){if(Le.setValue(X,"toneMappingExposure",k.toneMappingExposure),re.needsLights&&B(mn,hn),st&&U.fog===!0&&At.refreshFogUniforms(mn,st),At.refreshMaterialUniforms(mn,U,ie,ge,L.state.transmissionRenderTarget[f.id]),re.needsLights&&re.numLightProbeGrids>0){let un=R,bn=0;for(let ai of L.state.lightProbeGridArray)ai.texture!==null&&(un.textures[bn]=ai.texture,un.min[bn]=ai.boundingBox.min,un.max[bn]=ai.boundingBox.max,un.resolution[bn]=ai.resolution,un.intensity[bn]=ai.intensity,bn++);for(let ai in un)un[ai].length=bn;mn.probesSH.value=un.textures,mn.probesMin.value=un.min,mn.probesMax.value=un.max,mn.probesResolution.value=un.resolution,mn.probesIntensity.value=un.intensity}xr.upload(X,b(re),mn,mt)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(xr.upload(X,b(re),mn,mt),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Le.setValue(X,"center",I.center),Le.setValue(X,"modelViewMatrix",I.modelViewMatrix),Le.setValue(X,"normalMatrix",I.normalMatrix),Le.setValue(X,"modelMatrix",I.matrixWorld),U.uniformsGroups!==void 0){let un=U.uniformsGroups;for(let bn=0,ai=un.length;bn<ai;bn++){let Sr=un[bn];me.update(Sr,ve),me.bind(Sr,ve)}}return ve}function B(f,C){f.ambientLightColor.needsUpdate=C,f.sunLights.needsUpdate=C,f.sunLightShadows.needsUpdate=C,f.directionalLights.needsUpdate=C,f.directionalLightShadows.needsUpdate=C,f.pointLights.needsUpdate=C,f.pointLightShadows.needsUpdate=C,f.spotLights.needsUpdate=C,f.spotLightShadows.needsUpdate=C,f.rectAreaLights.needsUpdate=C,f.hemisphereLights.needsUpdate=C}function G(f){return f.isMeshLambertMaterial||f.isMeshToonMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isShadowMaterial||f.isShaderMaterial&&f.lights===!0}this.getActiveCubeFace=function(){return yt},this.getActiveMipmapLevel=function(){return lt},this.getRenderTarget=function(){return Rt},this.setRenderTargetTextures=function(f,C,V){let U=ht.get(f);U.__autoAllocateDepthBuffer=f.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),ht.get(f.texture).__webglTexture=C,ht.get(f.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:V,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(f,C){let V=ht.get(f);V.__webglFramebuffer=C,V.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(f,C=0,V=0){Rt=f,yt=C,lt=V;let U=null,I=!1,st=!1;if(f){let _t=ht.get(f);if(_t.__useDefaultFramebuffer!==void 0){H.bindFramebuffer(X.FRAMEBUFFER,_t.__webglFramebuffer),Yt.copy(f.viewport),$t.copy(f.scissor),fe=f.scissorTest,H.viewport(Yt),H.scissor($t),H.setScissorTest(fe),vt=-1;return}else if(_t.__webglFramebuffer===void 0)mt.setupRenderTarget(f);else if(_t.__hasExternalTextures)mt.rebindTextures(f,ht.get(f.texture).__webglTexture,ht.get(f.depthTexture).__webglTexture);else if(f.depthBuffer){let te=f.depthTexture;if(_t.__boundDepthTexture!==te){if(te!==null&&ht.has(te)&&(f.width!==te.image.width||f.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");mt.setupDepthRenderbuffer(f)}}let Ct=f.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(st=!0);let Xt=ht.get(f).__webglFramebuffer;f.isWebGLCubeRenderTarget?(Array.isArray(Xt[C])?U=Xt[C][V]:U=Xt[C],I=!0):f.samples>0&&mt.useMultisampledRTT(f)===!1?U=ht.get(f).__webglMultisampledFramebuffer:Array.isArray(Xt)?U=Xt[V]:U=Xt,Yt.copy(f.viewport),$t.copy(f.scissor),fe=f.scissorTest}else Yt.copy(se).multiplyScalar(ie).floor(),$t.copy(W).multiplyScalar(ie).floor(),fe=St;if(V!==0&&(U=et),H.bindFramebuffer(X.FRAMEBUFFER,U)&&H.drawBuffers(f,U),H.viewport(Yt),H.scissor($t),H.setScissorTest(fe),I){let _t=ht.get(f.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+C,_t.__webglTexture,V)}else if(st){let _t=C;for(let Ct=0;Ct<f.textures.length;Ct++){let Xt=ht.get(f.textures[Ct]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ct,Xt.__webglTexture,V,_t)}}else if(f!==null&&V!==0){let _t=ht.get(f.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,_t.__webglTexture,V)}vt=-1};function q(f){let C=ht.get(f);return(C.__readFormat!==f.format||C.__readType!==f.type)&&(C.__readFormat=f.format,C.__readType=f.type,C.__formatReadable=Q.textureFormatReadable(f.format),C.__typeReadable=Q.textureTypeReadable(f.type)),C}this.readRenderTargetPixels=function(f,C,V,U,I,st,xt,_t=0){if(!(f&&f.isWebGLRenderTarget)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=ht.get(f).__webglFramebuffer;if(f.isWebGLCubeRenderTarget&&xt!==void 0&&(Ct=Ct[xt]),Array.isArray(Ct)&&(Ct=Ct[0]),Ct){let Xt=H.getBoundFramebuffer(X.READ_FRAMEBUFFER);H.bindFramebuffer(X.READ_FRAMEBUFFER,Ct);try{let te=f.textures[_t],Jt=te.format,Et=te.type;f.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+_t);let Wt=q(te);if(Wt.__formatReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=f.width-U&&V>=0&&V<=f.height-I&&X.readPixels(C,V,U,I,Qt.convert(Jt),Qt.convert(Et),st)}finally{H.bindFramebuffer(X.READ_FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(f,C,V,U,I,st,xt,_t=0){if(!(f&&f.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=ht.get(f).__webglFramebuffer;if(f.isWebGLCubeRenderTarget&&xt!==void 0&&(Ct=Ct[xt]),Array.isArray(Ct)&&(Ct=Ct[0]),Ct)if(C>=0&&C<=f.width-U&&V>=0&&V<=f.height-I){let Xt=H.getBoundFramebuffer(X.READ_FRAMEBUFFER);H.bindFramebuffer(X.READ_FRAMEBUFFER,Ct);let te=f.textures[_t],Jt=te.format,Et=te.type;f.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+_t);let Wt=q(te);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Vt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Vt),X.bufferData(X.PIXEL_PACK_BUFFER,st.byteLength,X.STREAM_READ),X.readPixels(C,V,U,I,Qt.convert(Jt),Qt.convert(Et),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),H.bindFramebuffer(X.READ_FRAMEBUFFER,Xt);let oe=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await fd(X,oe,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Vt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,st),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(Vt),X.deleteSync(oe),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(f,C=null,V=0){let U=Math.pow(2,-V),I=Math.floor(f.image.width*U),st=Math.floor(f.image.height*U),xt=C!==null?C.x:0,_t=C!==null?C.y:0;mt.setTexture2D(f,0),H.activeTexture(X.TEXTURE0),X.copyTexSubImage2D(X.TEXTURE_2D,V,0,0,xt,_t,I,st),H.unbindTexture()},this.copyTextureToTexture=function(f,C,V=null,U=null,I=0,st=0){let xt,_t,Ct,Xt,te,Jt,Et,Wt,Vt,oe=f.isCompressedTexture?f.mipmaps[st]:f.image;if(V!==null)xt=V.max.x-V.min.x,_t=V.max.y-V.min.y,Ct=V.isBox3?V.max.z-V.min.z:1,Xt=V.min.x,te=V.min.y,Jt=V.isBox3?V.min.z:0;else{let Le=Math.pow(2,-I);xt=Math.floor(f.width*Le),_t=Math.floor(f.height*Le),f.isDataArrayTexture?Ct=oe.depth:f.isData3DTexture?Ct=Math.floor(oe.depth*Le):Ct=1,Xt=0,te=0,Jt=0}U!==null?(Et=U.x,Wt=U.y,Vt=U.z):(Et=0,Wt=0,Vt=0);let xe=Qt.convert(C.format),Te=Qt.convert(C.type),re;C.isData3DTexture?(mt.setTexture3D(C,0),re=X.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(mt.setTexture2DArray(C,0),re=X.TEXTURE_2D_ARRAY):(mt.setTexture2D(C,0),re=X.TEXTURE_2D),H.activeTexture(X.TEXTURE0),H.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,C.flipY),H.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),H.pixelStorei(X.UNPACK_ALIGNMENT,C.unpackAlignment);let Je=H.getParameter(X.UNPACK_ROW_LENGTH),Ne=H.getParameter(X.UNPACK_IMAGE_HEIGHT),ae=H.getParameter(X.UNPACK_SKIP_PIXELS),ve=H.getParameter(X.UNPACK_SKIP_ROWS),Oe=H.getParameter(X.UNPACK_SKIP_IMAGES);H.pixelStorei(X.UNPACK_ROW_LENGTH,oe.width),H.pixelStorei(X.UNPACK_IMAGE_HEIGHT,oe.height),H.pixelStorei(X.UNPACK_SKIP_PIXELS,Xt),H.pixelStorei(X.UNPACK_SKIP_ROWS,te),H.pixelStorei(X.UNPACK_SKIP_IMAGES,Jt);let vn=f.isDataArrayTexture||f.isData3DTexture,hn=C.isDataArrayTexture||C.isData3DTexture;if(f.isDepthTexture){let Le=ht.get(f),mn=ht.get(C),Jn=ht.get(Le.__renderTarget),un=ht.get(mn.__renderTarget);H.bindFramebuffer(X.READ_FRAMEBUFFER,Jn.__webglFramebuffer),H.bindFramebuffer(X.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let bn=0;bn<Ct;bn++)vn&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ht.get(f).__webglTexture,I,Jt+bn),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ht.get(C).__webglTexture,st,Vt+bn)),X.blitFramebuffer(Xt,te,Xt+xt,te+_t,Et,Wt,Et+xt,Wt+_t,X.DEPTH_BUFFER_BIT,X.NEAREST);H.bindFramebuffer(X.READ_FRAMEBUFFER,null),H.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(I!==0||f.isRenderTargetTexture||ht.has(f)){let Le=ht.get(f),mn=ht.get(C);H.bindFramebuffer(X.READ_FRAMEBUFFER,Mt),H.bindFramebuffer(X.DRAW_FRAMEBUFFER,it);for(let Jn=0;Jn<Ct;Jn++)vn?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Le.__webglTexture,I,Jt+Jn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Le.__webglTexture,I),hn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,mn.__webglTexture,st,Vt+Jn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,mn.__webglTexture,st),I!==0?X.blitFramebuffer(Xt,te,Xt+xt,te+_t,Et,Wt,Et+xt,Wt+_t,X.COLOR_BUFFER_BIT,X.NEAREST):hn?X.copyTexSubImage3D(re,st,Et,Wt,Vt+Jn,Xt,te,xt,_t):X.copyTexSubImage2D(re,st,Et,Wt,Xt,te,xt,_t);H.bindFramebuffer(X.READ_FRAMEBUFFER,null),H.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else hn?f.isDataTexture||f.isData3DTexture?X.texSubImage3D(re,st,Et,Wt,Vt,xt,_t,Ct,xe,Te,oe.data):C.isCompressedArrayTexture?X.compressedTexSubImage3D(re,st,Et,Wt,Vt,oe.width,oe.height,Ct,xe,oe.data):X.texSubImage3D(re,st,Et,Wt,Vt,xt,_t,Ct,xe,Te,oe):f.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,st,Et,Wt,xt,_t,xe,Te,oe.data):f.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,st,Et,Wt,oe.width,oe.height,xe,oe.data):X.texSubImage2D(X.TEXTURE_2D,st,Et,Wt,xt,_t,xe,Te,oe);H.pixelStorei(X.UNPACK_ROW_LENGTH,Je),H.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ne),H.pixelStorei(X.UNPACK_SKIP_PIXELS,ae),H.pixelStorei(X.UNPACK_SKIP_ROWS,ve),H.pixelStorei(X.UNPACK_SKIP_IMAGES,Oe),st===0&&C.generateMipmaps===!0&&C.mipmapsAutoUpdate===!0&&X.generateMipmap(re),H.unbindTexture()},this.initRenderTarget=function(f){ht.get(f).__webglFramebuffer===void 0&&mt.setupRenderTarget(f)},this.initTexture=function(f){f.isCubeTexture?mt.setTextureCube(f,0):f.isData3DTexture?mt.setTexture3D(f,0):f.isDataArrayTexture||f.isCompressedArrayTexture?mt.setTexture2DArray(f,0):mt.setTexture2D(f,0),H.unbindTexture()},this.resetState=function(){yt=0,lt=0,Rt=null,H.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=nn._getDrawingBufferColorSpace(t),e.unpackColorSpace=nn._getUnpackColorSpace()}};var Ee=Math.PI*2,we=(i,t,e)=>i<t?t:i>e?e:i,Me=(i,t,e)=>i+(t-i)*e,le=(i,t,e)=>{let n=we((e-i)/(t-i),0,1);return n*n*(3-2*n)},je=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-e*n));function dn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var en=(i,t)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)};function wn(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=en(e,n),c=en(e+1,n),u=en(e,n+1),d=en(e+1,n+1);return l+(c-l)*o+(u-l)*a+(l-c-u+d)*o*a}function cn(i,t){let e=0,n=.5,s=1;for(let r=0;r<4;r++)e+=n*wn(i*s,t*s),s*=2.03,n*=.5;return e/.9375}var $l=new sn,Kl=new xi,of=new _i,A_=new j,af=new j,Sn=new be;function kt(i,t){i.index&&(i=i.toNonIndexed()),i.attributes.uv&&i.deleteAttribute("uv"),i.attributes.uv1&&i.deleteAttribute("uv1");let e=i.attributes.position,n=e.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)typeof t=="function"?t(Sn,e.getX(r),e.getY(r),e.getZ(r),r):Sn.set(t),s[r*3]=Sn.r,s[r*3+1]=Sn.g,s[r*3+2]=Sn.b;return i.setAttribute("color",new Ze(s,3)),i}function Ht(i,t=0,e=0,n=0,s=0,r=0,o=0,a=1,l=a,c=a){return of.set(s,r,o),Kl.setFromEuler(of),$l.compose(A_.set(t,e,n),Kl,af.set(a,l,c)),i.applyMatrix4($l),i}function Dh(i,t,e){let n=new j().subVectors(e,t),s=n.length();return Kl.setFromUnitVectors(new j(0,1,0),n.normalize()),$l.compose(new j().addVectors(t,e).multiplyScalar(.5),Kl,af.set(1,1,1)),i.applyMatrix4($l),s}function fn(i){let t=0;for(let a of i)t+=a.attributes.position.count;let e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*3),r=0;for(let a of i)a.attributes.normal||a.computeVertexNormals(),e.set(a.attributes.position.array,r*3),n.set(a.attributes.normal.array,r*3),s.set(a.attributes.color.array,r*3),r+=a.attributes.position.count,a.dispose();let o=new $e;return o.setAttribute("position",new Ze(e,3)),o.setAttribute("normal",new Ze(n,3)),o.setAttribute("color",new Ze(s,3)),o.computeBoundingSphere(),o}var Be=(i,t,e,n)=>i.copy(pi.set(t)).lerp(Lo.set(e),we(n,0,1)),pi=new be,Lo=new be;function bi(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new jr(s);return r.colorSpace=Kn,r.anisotropy=4,n&&(r.wrapS=r.wrapT=cs,r.repeat.set(n[0],n[1])),r}var In=(i,t)=>{let e=(t-i)%Ee;return e>Math.PI&&(e-=Ee),e<-Math.PI&&(e+=Ee),e},Rn=(i,t,e,n)=>i+In(i,t)*(1-Math.exp(-e*n)),He=(i,t={})=>new qn({color:i,shininess:30,specular:"#2A2A2A",...t}),yr=i=>i.traverse(t=>{t.isMesh&&(t.castShadow=!0)});function lf(i="#2F78DA",t="#86C4F7",e="#F8E6C8",n=new j(.62,.3,-.73)){let s=new Ft(new qe(600,32,16),new Si({side:On,depthWrite:!1,fog:!1,uniforms:{top:{value:new be(i)},mid:{value:new be(t)},hor:{value:new be(e)},sunDir:{value:n.clone().normalize()}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top, mid, hor, sunDir; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float y = d.y;
        vec3 c = mix(hor, mid, smoothstep(-0.03, 0.2, y)); c = mix(c, top, smoothstep(0.2, 0.8, y));
        float s = max(dot(d, sunDir), 0.0);
        c += vec3(1.0, 0.86, 0.6) * (pow(s, 10.0) * 0.35 + pow(s, 90.0) * 0.6);
        c = mix(c, vec3(1.0, 0.97, 0.86), smoothstep(0.9982, 0.9992, s));
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));return s.renderOrder=-10,s.frustumCulled=!1,s}function cf(i){let t=new Yl({canvas:i,antialias:!0,powerPreference:"high-performance"});return t.toneMapping=vo,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=Ps,t}function hf(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}var uf=()=>bi(64,64,i=>{let t=i.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,64,64)});function df(){let i=bi(256,256,(t,e,n)=>{let s=t.createImageData(e,n),r=(o,a)=>wn(o/18,a/9)*.6+wn(o/7,a/4)*.4;for(let o=0;o<n;o++)for(let a=0;a<e;a++){let l=r(a+1,o)-r(a-1,o),c=r(a,o+1)-r(a,o-1),u=(o*e+a)*4,d=-l*3,p=-c*3,m=Math.hypot(d,p,1);s.data[u]=(d/m*.5+.5)*255,s.data[u+1]=(p/m*.5+.5)*255,s.data[u+2]=(1/m*.5+.5)*255,s.data[u+3]=255}t.putImageData(s,0,0)},[1,1]);return i.colorSpace="",i}function ff(i,t){!t||!t.see||(i.uniforms.uSee=t.see,i.vertexShader=`varying float vSeeZ;
`+i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
  vSeeZ = -mvPosition.z;`),i.fragmentShader=`uniform vec4 uSee; varying float vSeeZ;
`+i.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
    if (uSee.w > 0.0) {
      float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
      float sd = distance(gl_FragCoord.xy, uSee.xy) / uSee.w;
      if (vSeeZ < uSee.z - 0.7 && sd < 1.0 && ign >= smoothstep(0.5, 1.0, sd)) discard;
      if (vSeeZ < 1.2 && ign >= smoothstep(0.45, 1.2, vSeeZ)) discard;
    }`))}function jl(i,t){let e=i.clone();return e.onBeforeCompile=n=>ff(n,t),e.customProgramCacheKey=()=>"see"+(i.flatShading?"f":"")+i.side+(i.vertexColors?"v":""),e}function Zn(i,t,e,n){let s=i.clone();return s.onBeforeCompile=r=>{ff(r,n),r.uniforms.uTime=n.time,r.uniforms.uWind=n.wind||{value:0},r.vertexShader=`uniform float uTime; uniform float uWind;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float hh = max(0.0, transformed.y - ${e.toFixed(2)});
      float ph = 0.0;
      #ifdef USE_INSTANCING
        ph = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.23;
      #endif
      float wk = 1.0 + uWind * 6.0;
      transformed.x += ((sin(uTime * (1.25 + uWind * 3.0) + ph) + 0.35 * sin(uTime * 2.7 + ph * 1.7)) * ${t.toFixed(4)} * wk + uWind * ${(t*8).toFixed(4)}) * hh * hh;
      transformed.z += cos(uTime * (1.05 + uWind * 2.5) + ph) * ${(t*.5).toFixed(4)} * wk * hh * hh;`)},s.customProgramCacheKey=()=>"sway"+t+"_"+e+(i.flatShading?"f":"")+i.side+(n&&n.see?"see":""),s}function vr(i,t,e){let n=[],s=4.6+i()*1.6,r=new Xn([new j(0,-.2,0),new j(t*.2,s*.35,.05),new j(t*.6,s*.7,.1),new j(t,s,.12)]),o=13;for(let c=0;c<o;c++){let u=r.getPoint(c/o),d=r.getPoint((c+1)/o),p=Me(.25,.14,c/o),m=kt(new de(p*1.13,p*.9,1,9,1,!0),(E,x,_)=>Be(E,c%2?"#7E5E3C":"#8D6C46","#A9875C",_+.5)),g=u.distanceTo(d);Ht(m,0,0,0,0,0,0,1,g*1.04,1),Dh(m,u,d),n.push(m)}let a=r.getPoint(1),l=new j(0,1,0);n.push(Ht(kt(new An(.28,1),"#6B5A2E"),a.x,a.y,a.z));for(let c=0;c<e;c++){let u=c/e*Ee+i()*.35,d=new j(Math.cos(u),0,Math.sin(u)),p=2.6+i()*.9,m=.7+i()*.6,g=new Xn([a.clone(),a.clone().addScaledVector(d,p*.3).addScaledVector(l,.55),a.clone().addScaledVector(d,p*.65).addScaledVector(l,.35-m*.2),a.clone().addScaledVector(d,p).addScaledVector(l,-m)]),E=14,x=[],_=[],A=[];for(let O=0;O<=E;O++){let L=O/E,M=g.getPoint(L),F=g.getTangent(L),Z=new j().crossVectors(F,l).normalize(),k=Math.pow(Math.sin(Math.PI*Math.min(1,L*1.15)),.7)*.5*(O%2?1:.72);A.push([M,M.clone().addScaledVector(Z,k).addScaledVector(l,-k*.42),M.clone().addScaledVector(Z,-k).addScaledVector(l,-k*.42),L])}let P=(O,L,M)=>{x.push(O.x,O.y,O.z),Be(Sn,"#2E7A30","#6CC24A",L*.9+M*.25),_.push(Sn.r,Sn.g,Sn.b)};for(let O=0;O<E;O++){let[L,M,F,Z]=A[O],[k,at,ft,et]=A[O+1];P(L,Z,0),P(M,Z,1),P(k,et,0),P(M,Z,1),P(at,et,1),P(k,et,0),P(L,Z,0),P(k,et,0),P(F,Z,1),P(F,Z,1),P(k,et,0),P(ft,et,1)}let R=new $e;R.setAttribute("position",new Ze(new Float32Array(x),3)),R.setAttribute("color",new Ze(new Float32Array(_),3)),R.computeVertexNormals(),n.push(R)}for(let c=0;c<2;c++){let u=i()*Ee;for(let d=0;d<7;d++)n.push(Ht(kt(new An(.085,0),d%2?"#B85C1C":"#D07A26"),a.x+Math.cos(u)*.32+(i()-.5)*.16,a.y-.32-i()*.3,a.z+Math.sin(u)*.32+(i()-.5)*.16))}return fn(n)}function Ql(i,t,e){let n=[kt(Ht(new de(.12,.2,1.7,7),0,.85,0),"#7A5230")];n.push(kt(Ht(new de(.05,.08,.8,5),.25,1.55,0,0,0,-.7),"#7A5230"));for(let s=0;s<7;s++){let r=.62+i()*.45,o=(i()-.5)*1.3,a=2.15+i()*.9,l=(i()-.5)*1.1,c=i();n.push(Ht(kt(new An(r,1),(u,d,p,m)=>Be(u,e[0],e[1],.25+p/r*.45+c*.3+(en(d*9,m*9)-.5)*.2)),o,a,l))}if(t)for(let s=0;s<9;s++){let r=i()*Ee,o=i()*1.3;n.push(Ht(kt(new An(.08,1),t),Math.cos(r)*.95,2.1+Math.sin(o)*.9,Math.sin(r)*.85+.2))}return fn(n)}var Do=()=>fn([0,1,2,3].map(i=>Ht(kt(new An(.42-i*.05,1),(t,e,n)=>Be(t,"#2F8A3C","#86D05C",.4+n*.9+i*.1)),(i-1.5)*.32,.3,i%2*.2))),zo=()=>kt(new ri(.4,0),(i,t,e,n)=>Be(i,"#8C877B","#C9C4B6",.4+e*1.2+en(t*7,n*7)*.3)),tc=()=>fn([...Array(6)].map((i,t)=>{let e=t*1.1,n=.8+t%3*.22,s=kt(new Ln(.025,n,3),(r,o,a)=>Be(r,"#3C7F35","#8CC05A",a/n+.5));return Ht(s,Math.cos(e)*.12,n/2,Math.sin(e)*.12,Math.sin(e)*.15,0,Math.cos(e)*.15),t%2?fn([s,Ht(kt(new de(.035,.035,.16,6),"#6B4423"),Math.cos(e)*.12+Math.cos(e)*.15*n,n-.05,Math.sin(e)*.12)]):s})),No=()=>(()=>{let i=[],t=[];for(let n=0;n<5;n++){let s=n/5*Ee+.3,r=.22+n%3*.07,o=.035,a=Math.cos(s)*.05,l=Math.sin(s)*.05,c=a+Math.cos(s)*.1,u=l+Math.sin(s)*.1,d=-Math.sin(s)*o,p=Math.cos(s)*o;i.push(a-d,0,l-p,a+d,0,l+p,c,r,u);for(let m of[0,0,1])Be(Sn,"#5AA544","#B0E47A",m),t.push(Sn.r,Sn.g,Sn.b)}let e=new $e;return e.setAttribute("position",new Ze(new Float32Array(i),3)),e.setAttribute("color",new Ze(new Float32Array(t),3)),e.computeVertexNormals(),e})();function pf(i,t){let e=new Ce,n=new Ce;e.add(n),n.position.y=.55;let s=i.body==="fire",r=i.body==="rainbow",o;r?o=He("#FFFFFF",{vertexColors:!0,shininess:50}):s?o=He("#FF8A1F",{emissive:"#FF3D00",emissiveIntensity:.55,shininess:20}):o=He(i.body,{shininess:38});let a=new qe(.5,48,32);r&&(a=kt(a,(it,yt,lt,Rt)=>it.setHSL(((Math.atan2(Rt,yt)/Ee+1)%1+lt*.3)%1,.75,.62)));let l=new Ft(a,o);l.scale.set(1.05,1,.95);let c=new Ft(new qe(.5,32,20),new yn({color:i.dark,side:On}));c.scale.set(1.05*1.035,1.035,.95*1.035);let u=new Ft(new qe(.3,32,16),He(s||r?i.belly:new be(i.body).lerp(new be(i.belly),.5),{shininess:20}));u.position.set(0,-.25,.345),u.scale.set(.78,.5,.32),n.add(l,c,u);let d=[];for(let it of[-1,1]){let yt=new Ft(new qe(.15,20,12),He(i.dark,{shininess:20}));yt.scale.set(1.2,.55,1.45),yt.position.set(it*.22,-.49,.07),n.add(yt),d.push(yt)}let p=[],m=[],g=He("#FFFFFF",{shininess:90,specular:"#FFFFFF"}),E=He("#1B1F3B",{shininess:120,specular:"#FFFFFF"}),x=new yn({color:i.dark});for(let it of[-1,1]){let yt=new Ce;yt.position.set(it*.185,.15,.36);let lt=new Ft(new qe(.162,24,16),x);lt.scale.set(1,1.15,.6),lt.position.z=-.012;let Rt=new Ft(new qe(.15,24,16),g);Rt.scale.set(1,1.15,.72);let vt=new Ce;vt.position.z=.074;let Nt=new Ft(new qe(.07,16,12),E);Nt.scale.z=.6;let Yt=new Ft(new qe(.024,8,6),new yn({color:"#FFFFFF"}));Yt.position.set(.028,.035,.04),vt.add(Nt,Yt),yt.add(lt,Rt,vt),n.add(yt),p.push(yt),m.push(vt)}let _=new Ft(new ts(.075,.017,6,16,Math.PI*.8),new yn({color:"#1B1F3B"}));_.rotation.z=Math.PI+Math.PI*.1,_.position.set(0,0,.462),_.rotation.x=-.2;let A=new Ft(new qe(.05,12,10),new yn({color:"#7A1F2B"}));A.scale.set(1,1.25,.4),A.position.set(0,-.04,.47),A.visible=!1,n.add(_,A);let P=new Ce;n.add(P);let R=[];if(i.acc==="blush"||i.id==="orange")for(let it of[-1,1]){let yt=new Ft(new Wn(.07,16),new yn({color:"#FF7896",transparent:!0,opacity:.5}));yt.position.set(it*.33,-.06,.36),yt.rotation.y=it*.75,yt.scale.y=.62,P.add(yt)}if(i.acc==="leaf"){let it=new Ft(new de(.018,.022,.14,6),He("#6B3E1F"));it.position.set(0,.54,0),it.rotation.z=-.15;let yt=new Ft(new qe(.15,16,8),He("#3FB950"));yt.scale.set(1,.18,.5),yt.position.set(.13,.6,0),yt.rotation.z=.45,P.add(it,yt)}else if(i.acc==="antenna")for(let it of[-1,1]){let yt=new Ft(new de(.014,.014,.32,6),He(i.dark));yt.position.set(it*.18,.58,0),yt.rotation.z=-it*.35;let lt=new Ft(new qe(.06,12,10),He("#FF5DA2",{emissive:"#FF5DA2",emissiveIntensity:.3}));lt.position.set(it*.235,.73,0),P.add(yt,lt)}else if(i.acc==="crown"){let it=He("#FFC400",{shininess:110,specular:"#FFF2B0",emissive:"#5A3D00",emissiveIntensity:.3}),yt=new Ft(new de(.25,.23,.12,28,1,!0),it);yt.material.side=Ve,yt.position.y=.48,P.add(yt);for(let lt=0;lt<6;lt++){let Rt=lt/6*Ee,vt=new Ft(new Ln(.05,.16,6),it);vt.position.set(Math.sin(Rt)*.24,.6,Math.cos(Rt)*.24),P.add(vt);let Nt=new Ft(new qe(.028,8,6),He(lt%2?"#2EA8FF":"#E63946",{shininess:140,specular:"#FFFFFF"}));Nt.position.set(Math.sin(Rt)*.255,.48,Math.cos(Rt)*.255),P.add(Nt)}}else if(i.acc==="star"){let it=new vi;for(let lt=0;lt<10;lt++){let Rt=lt/10*Ee-Math.PI/2,vt=lt%2?.06:.14;lt?it.lineTo(Math.cos(Rt)*vt,-Math.sin(Rt)*vt):it.moveTo(Math.cos(Rt)*vt,-Math.sin(Rt)*vt)}let yt=new Ft(new ho(it,{depth:.04,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:1}),He("#FFE066",{emissive:"#FFB703",emissiveIntensity:.5,shininess:90}));yt.position.set(0,.74,-.02),P.add(yt),P.userData.star=yt}else if(i.acc==="band"){let it=He("#E63946"),yt=new Ft(new ts(.43,.05,8,40),it);yt.rotation.x=Math.PI/2-.08,yt.position.y=.2,yt.scale.set(1.05,.95,1),P.add(yt);for(let lt of[-1,1]){let Rt=new Ft(new Re(.06,.03,.3),it);Rt.position.set(lt*.06,.18,-.55),Rt.rotation.set(.5,lt*.3,0),P.add(Rt),P.userData["tail"+lt]=Rt}}else if(i.acc==="hat"){let it=He("#946232",{shininess:14}),yt=He("#4A2E14",{shininess:12}),lt=new Ft(new de(.46,.48,.035,36),it);lt.position.y=.4;let Rt=new Ft(new qe(.29,28,14,0,Ee,0,Math.PI/2),it);Rt.position.y=.41,Rt.scale.y=.75;let vt=new Ft(new de(.292,.295,.06,28,1,!0),yt);vt.material.side=Ve,vt.position.y=.45;let Nt=new Ce;Nt.add(lt,Rt,vt),Nt.rotation.set(-.12,0,.06),P.add(Nt);let Yt=He("#E63946",{shininess:15,side:Ve}),$t=new Ft(new ts(.34,.04,8,36),Yt);$t.rotation.x=Math.PI/2,$t.position.y=-.4,$t.scale.set(1.05,.95,1),P.add($t);let fe=new vi;fe.moveTo(-.2,0),fe.lineTo(.2,0),fe.lineTo(.02,-.17),fe.closePath();let Pt=new Ft(new Qi(fe),Yt);Pt.position.set(0,-.38,.33),Pt.rotation.x=-.55,P.add(Pt)}if(s){for(let yt=0;yt<7;yt++){let lt=yt/7*Math.PI-Math.PI/2,Rt=new Ft(new Ln(.09,.4,8,1,!0),new yn({color:yt%2?"#FFB13B":"#FF5A1F",transparent:!0,opacity:.9,depthWrite:!1,blending:ni}));Rt.position.set(Math.sin(lt)*.28,.42+Math.cos(lt)*.05,-.12-Math.abs(Math.cos(lt))*.08),Rt.userData.ph=yt,n.add(Rt),R.push(Rt)}let it=new si(new ti({map:t,color:"#FF6A1F",transparent:!0,opacity:.55,depthWrite:!1,blending:ni}));it.scale.setScalar(2.2),n.add(it)}yr(e),c.castShadow=!1;let O=new Ce,L=["#E63946","#FFFFFF","#FFB703","#FFFFFF","#2EA8FF","#FFFFFF"],M=kt(new qe(1.7,24,8,0,Ee,0,Math.PI*.42),(it,yt,lt,Rt)=>it.set(L[Math.floor((Math.atan2(Rt,yt)/Ee+1)%1*12+1e-4)%6])),F=new Pe({vertexColors:!0,side:Ve,transparent:!0,opacity:1}),Z=new Ft(M,F);Z.scale.set(1,.62,1),Z.castShadow=!0;let k=new Float32Array(60),at=new Es(new $e,new us({color:"#4A4A5A",transparent:!0,opacity:.85}));at.geometry.setAttribute("position",new Ze(k,3)),at.frustumCulled=!1;let ft=new Ce;ft.position.y=1.6,ft.add(Z),O.add(ft,at),O.visible=!1;let et=new Ft(M,F.clone());et.visible=!1,et.castShadow=!1;let Mt=new Ft(new $e,He("#8B5A2B",{shininess:5}));return Mt.visible=!1,Mt.castShadow=!0,{id:i.id,root:e,inner:n,eyes:p,pupils:m,smile:_,ooh:A,feet:d,acc:P,flames:R,bodyMat:o,fire:s,chute:O,canopy:Z,canopyHolder:ft,lines:at,drop:et,rope:Mt,turn:0,blink:0,nextBlink:2}}function _s(i={}){let t={skin:"#C98E62",thobe:"#F2EEE4",bisht:"#5B3A24",shmagh:"#C8102E",agal:"#141414",beard:"#4A4440",beads:!0,gold:!0,...i},e=new Ce,n=He(t.skin,{shininess:12}),s=He(t.thobe,{shininess:8}),r=He(t.bisht||t.thobe,{shininess:14,side:Ve}),o=new Ft(new ei([new wt(.001,0),new wt(.27,0),new wt(.275,.1),new wt(.25,.5),new wt(.232,.9),new wt(.222,1.2),new wt(.2,1.34),new wt(.12,1.42),new wt(.05,1.45)],30),s);e.add(o);for(let L of[-1,1]){let M=new Ft(new Re(.1,.04,.2),He("#4A2E18"));M.position.set(L*.09,.02,.2),e.add(M)}let a=new Ft(new ei([new wt(.245,.06),new wt(.295,.08),new wt(.285,.5),new wt(.265,.9),new wt(.255,1.2),new wt(.24,1.33),new wt(.16,1.41)],30,.62,Ee-1.24),r);e.add(a),a.visible=!!t.bisht;let l=He("#D4AF37",{shininess:90,specular:"#FFF2B0"});for(let L of[-1,1]){let M=L*.62,F=[[.247,.08],[.297,.1],[.287,.5],[.267,.9],[.257,1.2],[.242,1.33],[.162,1.41]].map(([Z,k])=>new j(Math.sin(M)*(Z+.006),k,Math.cos(M)*(Z+.006)));t.bisht&&t.gold&&e.add(new Ft(new Mi(new Xn(F),20,.014,6),l))}let c=[];for(let L of[-1,1]){let M=new Ce;M.position.set(L*.25,1.3,0),e.add(M);let F=new Ft(new ki(.072,.28,4,10),r);F.position.y=-.18,M.add(F);let Z=new Ce;Z.position.y=-.36,M.add(Z);let k=new Ft(new ki(.068,.22,4,10),r);k.position.y=-.14,Z.add(k);let at=new Ft(new de(.055,.06,.05,10),s);at.position.y=-.3,Z.add(at);let ft=new Ft(new qe(.052,12,10),n);if(ft.position.y=-.36,ft.scale.set(.9,1.1,.8),Z.add(ft),L<0&&t.beads){let et=new Ft(new ts(.06,.011,6,18),He("#E0A03C",{shininess:80,specular:"#FFF0C8"}));et.position.set(0,-.44,.02),et.rotation.y=.4,Z.add(et)}M.rotation.z=L*.12,Z.rotation.x=-.25,c.push({sh:M,el:Z,s:L})}let u=new Ft(new de(.06,.07,.1,10),n);u.position.y=1.46,e.add(u);let d=new Ce;d.position.y=1.6,e.add(d);let p=new Ft(new qe(.155,28,20),n);p.scale.set(.94,1.08,1),d.add(p);let m=new Ft(new qe(.034,10,8),He("#B97C52"));m.position.set(0,-.005,.15),m.scale.set(.85,1.1,1.25),d.add(m);for(let L of[-1,1]){let M=new Ft(new qe(.019,10,8),He("#1B140F",{shininess:120,specular:"#FFFFFF"}));M.position.set(L*.055,.025,.135),d.add(M);let F=new Ft(new Re(.065,.016,.02),He("#3A3430"));F.position.set(L*.056,.058,.138),F.rotation.z=-L*.12,d.add(F);let Z=new Ft(new ki(.019,.06,3,6),He("#2A2420"));Z.position.set(L*.034,-.045,.142),Z.rotation.z=L*1.15,d.add(Z)}let g=new Ft(new qe(.16,24,10,Math.PI/2-1.2,2.4,Math.PI*.6,Math.PI*.3),He(t.beard==="none"?"#000":t.beard,{side:Ve,shininess:5}));d.add(g),g.visible=t.beard!=="none";let E=new Ft(new qe(.026,10,8),new yn({color:"#4A1A14"}));E.position.set(0,-.07,.143),E.scale.set(1,.3,.5),d.add(E);let x=bi(128,128,(L,M,F)=>{L.fillStyle="#FBF8F2",L.fillRect(0,0,M,F),L.fillStyle=t.shmagh;for(let Z=0;Z<F;Z+=16)for(let k=0;k<M;k+=16)L.fillRect(k+2,Z+2,7,7),L.fillRect(k+9,Z+9,5,5),L.fillRect(k+9,Z+2,2,2),L.fillRect(k+2,Z+11,2,2)},[5,5]),_=new Pe({map:x,side:Ve}),A=new Ft(new qe(.168,28,14,0,Ee,0,Math.PI*.52),_);A.rotation.x=-.42,A.position.y=.01,d.add(A);let P=new Ft(new ei([new wt(.168,.02),new wt(.18,-.06),new wt(.2,-.16),new wt(.24,-.26),new wt(.28,-.33)],28,1.15,Ee-2.3),_);d.add(P);let R=new Ft(new Tn(.2,.36),_);R.position.set(.17,-.25,.1),R.rotation.set(-.15,.6,-.08),d.add(R);let O=He(t.agal,{shininess:40});for(let[L,M]of[[.07,.154],[.097,.139]]){let F=new Ft(new ts(M,.015,8,36),O);F.position.set(0,L*.913,-L*.408),F.rotation.x=Math.PI/2-.42,d.add(F)}return yr(e),{root:e,head:d,arms:c,mouth:E,yaw:0}}var Uh={id:"natta-island",name:"\u062C\u0632\u064A\u0631\u0629 \u0646\u0637\u0651\u0629",half:4330,seed:7531,sea:-300,features:[{type:"mountain",id:"M1",x:0,z:0},{type:"valley",id:"V1",x:-200,z:1350}],spawn:"fajr"},Ns=(i,t)=>Math.exp(-(i*i)/(t*t)),nc=(i,t,e)=>{let n=Math.max(e-Math.abs(i-t),0)/e;return Math.max(i,t)+n*n*e*.25},mf=(i,t,e)=>-nc(-i,-t,e);function zh(i){let t=new Map,e=(n,s)=>n*100003+s;return{add(n,s){let r=Math.floor((Math.min(n.ax,n.bx)-s)/i),o=Math.floor((Math.max(n.ax,n.bx)+s)/i),a=Math.floor((Math.min(n.az,n.bz)-s)/i),l=Math.floor((Math.max(n.az,n.bz)+s)/i);for(let c=r;c<=o;c++)for(let u=a;u<=l;u++){let d=e(c,u),p=t.get(d);p||(p=[],t.set(d,p)),p.push(n)}},at(n,s){return t.get(e(Math.floor(n/i),Math.floor(s/i)))}}}function Nh(i,t,e,n){let s=we(((t-i.ax)*i.dx+(e-i.az)*i.dz)*i.il2,0,1),r=i.ax+i.dx*s,o=i.az+i.dz*s;return n.d=Math.hypot(t-r,e-o),n.t=s,n}var ec=(i,t,e)=>{let n=t.x-i.x,s=t.z-i.z;return{ax:i.x,az:i.z,bx:t.x,bz:t.z,dx:n,dz:s,il2:1/Math.max(1e-6,n*n+s*s),a:i,b:t,...e}};function gf(i,t){let e=[];for(let s=0;s<i.length-1;s++){let r=i[Math.max(0,s-1)],o=i[s],a=i[s+1],l=i[Math.min(i.length-1,s+2)],c=Math.hypot(a[0]-o[0],a[1]-o[1]),u=Math.max(1,Math.round(c/t));for(let d=0;d<u;d++){let p=d/u,m=p*p,g=m*p,E=(x,_,A,P)=>.5*(2*_+(-x+A)*p+(2*x-5*_+4*A-P)*m+(-x+3*_-3*A+P)*g);e.push({x:E(r[0],o[0],a[0],l[0]),z:E(r[1],o[1],a[1],l[1])})}}let n=i[i.length-1];return e.push({x:n[0],z:n[1]}),e}function xf(i,t,e){let n=i.sea??-300,s=i.half||4330,r=t.x,o=t.z,a=dn(i.seed||7),l=286,c=0;function u($){let ct=3420+300*Math.sin(3*$+.7)+220*Math.sin(5*$+2.1)+140*Math.sin(9*$+4)+70*Math.sin(15*$+1.3);return ct-=1650*Ns(In($,c),.27),ct+=260*Ns(In($,-.52),.1)+220*Ns(In($,.55),.09),ct-=380*Ns(In($,-1.95),.22),ct+=250*Ns(In($,Math.PI),.15),Math.min(ct,s-300)}function d($,ct){let Dt=(cn($*.0011+3.1,ct*.0011-1.7)-.5)*520,Tt=(cn($*.0011-4.3,ct*.0011+2.2)-.5)*520,It=$+Dt-r,bt=ct+Tt-o;return u(Math.atan2(bt,It))-Math.hypot(It,bt)+(cn($*.006,ct*.006)-.5)*60}let p=[{a:1.32,w:.26},{a:-.84,w:.13},{a:-2.55,w:.2},{a:2.3,w:.1}];function m($,ct,Dt){let Tt=0;for(let It of p)Tt=Math.max(Tt,Ns(In($,It.a),It.w));return le(.35,.75,Tt*(.75+.5*wn(ct*.004,Dt*.004)))}let g=[{a:.95,w:.45,r:760,h:16},{a:-2.2,w:.5,r:900,h:18},{a:2.4,w:.35,r:640,h:14},{a:-.45,w:.3,r:1200,h:12},{a:1.9,w:.4,r:1300,h:15},{a:-1.45,w:.35,r:560,h:13}];function E($,ct){let Dt=$-r,Tt=ct-o,It=Math.hypot(Dt,Tt);if(It<300)return l;let bt=Math.atan2(Tt,Dt),ze=2150+380*Math.sin(3*bt+.4)+260*Math.sin(5*bt+2.2)+160*Math.sin(8*bt+1.1);ze-=700*Ns(In(bt,c),.33),ze*=1+(cn($*.0016+9,ct*.0016)-.5)*.35;let Fe=we((It-300)/(ze-300),0,1),on=l*(1-Fe*Fe*(3-2*Fe));on*=1+.1*Math.sin(11*bt+It*.0035)*le(320,700,It)*(1-Fe);for(let an of g){let pn=le(an.w,an.w*.55,Math.abs(In(bt,an.a)));pn>0&&(on-=an.h*pn*le(an.r-6,an.r+6,It)*(1-Fe*.6))}return on+=((cn($*.004+2,ct*.004-6)-.5)*46+(cn($*.02,ct*.02)-.5)*5)*le(300,650,It),on}let x=[{id:"falcons",x:1900,z:1900,h:230,r:820},{id:"kohl",x:1550,z:-1950,h:185,r:600,dark:!0},{id:"fort",x:-2500,z:-2e3,h:58,r:300}];function _($,ct,Dt){let Tt=Math.hypot(ct-$.x,Dt-$.z);if(Tt>$.r*1.3)return-1e9;let It=Tt*(1+.28*(cn(ct*.003+$.x*.01,Dt*.003)-.5)),bt=we(1-It/$.r,0,1);return $.h*Math.pow(bt,1.6)*(.85+.3*cn(ct*.01,Dt*.01))*(1+.12*Math.sin(7*Math.atan2(Dt-$.z,ct-$.x)+It*.012)*bt*le(0,90,Tt))}let A={x:-2e3,z:1400,r:950,amp:78},P={x:-1e3,z:2500,r:520,top:112,ramps:[-2.2,2.6]};function R($,ct){let Dt=P,Tt=Math.hypot($-Dt.x,ct-Dt.z);if(Tt>Dt.r+420)return-1e9;let It=Math.atan2(ct-Dt.z,$-Dt.x),bt=Dt.r*(1+.18*(wn(It*2.2+11,3.3)-.5)),ze=0;for(let on of Dt.ramps)ze=Math.max(ze,le(.28,.12,Math.abs(In(It,on))));let Fe=le(bt+Me(10,300,ze),bt-26,Tt);return(Dt.top+(cn($*.004+2,ct*.004)-.5)*22+(cn($*.02,ct*.02)-.5)*3)*Fe}let O=null;function L($,ct){let Dt=d($,ct),Tt=Math.atan2(ct-o,$-r),It=m(Tt,$,ct),bt;Dt<0?bt=Math.max(-38,Dt*Me(.035,.3,It)-.4):bt=1.4+Math.min(Dt,1500)*.011+(cn($*.0035+1,ct*.0035+8)-.5)*26*le(40,500,Dt)+(cn($*.03,ct*.03)-.5)*1.4+It*26*le(-4,28,Dt);let ze=le(-25,160,Dt);if(ze>0){let Fe=E($,ct);for(let gn of x){let Nn=_(gn,$,ct);Nn>0&&(Fe=Me(Fe,nc(Fe,Nn,18),le(0,15,Nn)))}let on=Math.hypot($-A.x,ct-A.z);on<A.r&&(bt+=A.amp*le(A.r,A.r*.45,on)*Math.pow(cn($*.0055+3,ct*.0055-2),1.5)*ze);let an=Fe*ze;bt=Me(Math.max(bt,an),nc(bt,an,14),le(0,12,an));let pn=R($,ct)*ze;pn>0&&(bt=Me(Math.max(bt,pn),nc(bt,pn,10),le(0,10,pn)))}if(O){let Fe=Math.hypot($-O.x,ct-O.z);Fe<O.r*1.6&&(bt=Math.max(bt,13*Math.pow(we(1-Fe/O.r,0,1),1.2)*(.8+.4*cn($*.02,ct*.02))-1.2));let on=Nh(O.bar,$,ct,M);on.d<40&&(bt=Math.max(bt,-.5+(cn($*.02,ct*.02)-.5)*.5-le(18,40,on.d)*3))}return bt}let M={d:0,t:0};function F($,ct=600){let Dt=Math.cos($),Tt=Math.sin($),It=ct;for(;It<s&&d(r+Dt*It,o+Tt*It)>0;)It+=12;return{r:It,x:r+Dt*It,z:o+Tt*It,c:Dt,s:Tt}}let Z=($,ct,Dt=0)=>({x:$.x-$.c*ct-$.s*Dt,z:$.z-$.s*ct+$.c*Dt});{let ct=F(2.29),Dt=r+Math.cos(2.29)*(ct.r+330),Tt=o+Math.sin(2.29)*(ct.r+330);O={x:Dt,z:Tt,r:170,bar:ec({x:ct.x-Math.cos(2.29)*30,z:ct.z-Math.sin(2.29)*30},{x:Dt,z:Tt})}}let k=F(c),at=Z(k,230),ft=F(-.52),et=Z(ft,45),Mt=F(-1.94),it={...Z(Mt,380),r:640},yt=F(Math.PI),lt=Z(yt,70),Rt=F(1.32),vt=Z(F(1.08),60),Nt={x:e.x+60,z:e.z,r:210},Yt={x:1150,z:-820,r:230},$t={x:560,z:-1580,r:70},fe={x:900,z:-2350,r:250},Pt={x:-2500,z:-2e3},ne={x:at.x-300,z:640,r:340},ce={x:-1500,z:-1650,r:520},ge=[],ie=($,ct)=>L($,ct);ge.push({x:at.x,z:at.z,r:52,fall:40,a:Math.max(7,ie(at.x,at.z))}),ge.push({x:Nt.x,z:Nt.z,r:Nt.r-70,fall:70,a:ie(Nt.x,Nt.z)}),ge.push({x:et.x,z:et.z,r:26,fall:25,a:Math.max(4,ie(et.x,et.z))}),ge.push({x:$t.x,z:$t.z,r:$t.r,fall:40,a:ie($t.x,$t.z)}),ge.push({x:Pt.x,z:Pt.z,r:34,fall:30,a:ie(Pt.x,Pt.z)});function _e($,ct,Dt){for(let It of ge){let bt=Math.hypot($-It.x,ct-It.z);bt<It.r+It.fall&&(Dt=Me(It.a,Dt,le(It.r,It.r+It.fall,bt)))}let Tt=Math.hypot($-Yt.x,ct-Yt.z);if(Tt<Yt.r+60){let It=Dt/3,bt=It-Math.floor(It),ze=(Math.floor(It)+le(.8,1,bt))*3;Dt=Me(ze,Dt,le(Yt.r,Yt.r+60,Tt))}return Dt}let De=[];for(let $=0;$<=24;$++){let ct=$/24*Math.PI*2;De.push([r+Math.cos(ct)*278,o+Math.sin(ct)*278])}let se=$=>[$.x,$.z],W=[{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0641\u062C\u0631",hw:1.9,way:[se(at),[at.x-140,220],[1520,120],[1330,260],[1150,150],[980,270],[820,150],[660,250],[520,120],[400,200],[300,80],[195,42]]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u063A\u064A\u0645",hw:1.5,way:De},{name:"\u062F\u0631\u0628 \u0627\u0644\u0631\u0637\u0628",hw:1.6,way:[se(at),[at.x-60,420],[ne.x,ne.z],[1500,1100],[1650,1450]]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0642\u0631\u064A\u0629",hw:1.8,way:[se(at),[at.x-120,-200],[1450,-450],[Yt.x+60,Yt.z+120],[Yt.x,Yt.z],[Yt.x+250,-1050],[et.x-300,et.z+150],se(et)]},{name:"\u062F\u0631\u0628 \u0627\u0644\u0628\u062D\u064A\u0631\u0629",hw:1.4,way:[[Yt.x,Yt.z],[1180,-1350],[fe.x+300,fe.z+120],[fe.x+200,fe.z+300],[$t.x+150,$t.z-200],se($t)]},{name:"\u062F\u0631\u0628 \u0627\u0644\u062D\u0637\u0651\u0627\u0628\u064A\u0646",hw:1.4,way:[[r-20,o-278],[60,-650],[300,-1100],se($t)]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0647\u0648\u0631",hw:1.6,way:[[r-197,o-197],[-600,-700],[-1e3,-1200],[ce.x,ce.z],[it.x-150,it.z+350],se(it)]},{name:"\u062F\u0631\u0628 \u0627\u0644\u062D\u0635\u0646",hw:1.3,way:[[ce.x,ce.z],[-2050,-1830],se(Pt)]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0628\u0644\u0648\u0637",hw:1.6,way:[[r-278,o],[-900,-100],[-1600,-250],[-2300,-200],[lt.x+250,lt.z-100],se(lt)]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0648\u0627\u062F\u064A",hw:1.6,way:[[r,o+278],[-150,700],[-250,1100],[e.x-75,e.z],[-700,1500],[-1300,1700],[-1800,2150],[O.bar.ax+60,O.bar.az-60],[O.bar.ax,O.bar.az]]},{name:"\u062F\u0631\u0628 \u0627\u0644\u0647\u0636\u0628\u0629",hw:1.3,way:[[-1300,1700],[-1e3+Math.cos(-2.2)*900,2500+Math.sin(-2.2)*900],[P.x,P.z]]},{name:"\u062F\u0631\u0628 \u0627\u0644\u0634\u0644\u0627\u0644",hw:1.4,way:[[r+197,o+197],[480,600],[700,1150],[560,1780],[650,2400],[vt.x-120,vt.z-200],se(vt)]}],St=[],rt=zh(48);for(let $ of W){let ct=gf($.way,5);for(let Tt of ct)Tt.a0=_e(Tt.x,Tt.z,L(Tt.x,Tt.z));for(let Tt=0;Tt<ct.length;Tt++){let It=0,bt=0;for(let ze=-6;ze<=6;ze++){let Fe=ct[we(Tt+ze,0,ct.length-1)];It+=Fe.a0,bt++}ct[Tt].a=Math.max(It/bt,.6)}let Dt={name:$.name,hw:$.hw,pts:ct};St.push(Dt);for(let Tt=0;Tt<ct.length-1;Tt++)rt.add(ec(ct[Tt],ct[Tt+1],{road:Dt}),$.hw+8)}let ut={d:0,t:0};function h($,ct){let Dt=rt.at($,ct);if(!Dt)return null;let Tt=null,It=1e9,bt=0;for(let ze of Dt)Nh(ze,$,ct,ut),ut.d<It&&(It=ut.d,Tt=ze,bt=ut.t);return Tt?{d:It,a:Me(Tt.a.a,Tt.b.a,bt),hw:Tt.road.hw,road:Tt.road}:null}function y($,ct,Dt){let Tt=h($,ct);return Tt&&Tt.d<Tt.hw+6&&(Dt=Me(Tt.a,Dt,le(Tt.hw+.3,Tt.hw+6,Tt.d))),Dt}let D={x:590,z:1950,nx:.17,nz:-.985,len:300,h:16},N=()=>0,J=[{id:"silver",name:"\u0646\u0647\u0631 \u0627\u0644\u0641\u0636\u0629",w0:2.4,w1:8,depth:1.5,way:[[520,720],[640,1050],[660,1400],[600,1750],[592,1950],[620,2300],[760,2700],[900,3100],[Rt.x+Rt.c*150,Rt.z+Rt.s*150]]},{id:"anbar",name:"\u0646\u0647\u0631 \u0627\u0644\u0639\u0646\u0628\u0631",w0:2.2,w1:7,depth:1.4,way:[[-330,-650],[-470,-1e3],[-640,-1450],[-800,-1900],[-960,-2300],[it.x+60,it.z+330],[it.x,it.z]]},{id:"dates",name:"\u0633\u0627\u0642\u064A\u0629 \u0627\u0644\u0631\u0637\u0628",w0:1.2,w1:2.4,depth:.7,way:[[640,320],[900,480],[1250,560],[ne.x+100,ne.z-40],[k.x+60,560]]}],dt=[],ot=zh(64),Bt=[],X=($,ct)=>y($,ct,_e($,ct,L($,ct)+N($,ct)));for(let $ of J){let ct=gf($.way,8),Dt=1e9;for(let It=0;It<ct.length;It++){let bt=ct[It],ze=It/(ct.length-1),Fe=X(bt.x,bt.z);Dt=Math.min(Dt-.03,Fe-Me(.9,.5,ze)),bt.lv=Math.max(Dt,$.id==="anbar"?.3:.05),bt.w=Me($.w0,$.w1,Math.pow(ze,.8)),It&&ct[It-1].lv-bt.lv>2.5&&Bt.push({river:$.id,x:(bt.x+ct[It-1].x)/2,z:(bt.z+ct[It-1].z)/2,top:ct[It-1].lv,bot:bt.lv,w:bt.w,dx:bt.x-ct[It-1].x,dz:bt.z-ct[It-1].z})}let Tt={...$,pts:ct};dt.push(Tt);for(let It=0;It<ct.length-1;It++)ot.add(ec(ct[It],ct[It+1],{river:Tt}),ct[It].w+70)}function Zt($,ct){let Dt=ot.at($,ct);if(!Dt)return null;let Tt=null,It=1e9,bt=0;for(let ze of Dt)Nh(ze,$,ct,ut),ut.d<It&&(It=ut.d,Tt=ze,bt=ut.t);return Tt?{d:It,lv:Me(Tt.a.lv,Tt.b.lv,bt),w:Me(Tt.a.w,Tt.b.w,bt),river:Tt.river,dx:Tt.dx,dz:Tt.dz}:null}function K($,ct,Dt){let Tt=Zt($,ct);if(!Tt)return Dt;if(Tt.d<Tt.w){let It=h($,ct),bt=It&&It.d<It.hw+3?.35:Tt.river.depth;Dt=Math.min(Dt,Tt.lv-.12-bt*(1-(Tt.d/Tt.w)**2))}else Dt=Math.min(Dt,mf(Tt.lv+.25+(Tt.d-Tt.w)*.42,Dt,1.5));return Dt}let Q=Bt.filter($=>$.river==="silver").sort(($,ct)=>ct.top-ct.bot-($.top-$.bot))[0],H=Q?{x:Q.x,z:Q.z}:{x:D.x,z:D.z},zt=_e(fe.x,fe.z,L(fe.x,fe.z))-2.5,ht=[{id:"moon",name:"\u0628\u062D\u064A\u0631\u0629 \u0627\u0644\u0642\u0645\u0631",x:fe.x,z:fe.z,r:fe.r,lv:zt}],mt=($,ct,Dt)=>$.r*(1+.2*(wn(Math.atan2(Dt-$.z,ct-$.x)*2.4+5,1.1)-.5)),z=.3;function S($,ct,Dt){for(let It of ht){let bt=Math.hypot($-It.x,ct-It.z);if(bt>It.r*1.25+160)continue;let ze=mt(It,$,ct);bt<ze?Dt=Math.min(Dt,It.lv-.2-3.6*(1-(bt/ze)**2)):Dt=Math.min(Dt,mf(It.lv+.35+(bt-ze)*.18,Dt,1.5))}let Tt=Math.hypot($-it.x,ct-it.z);if(Tt<it.r){let It=.22+(cn($*.022+4,ct*.022)-.47)*2.4;Dt=Me(It,Dt,le(it.r*.55,it.r,Tt))}return Dt}let Y=[],gt=[],pt=zh(32),At=($,ct=!0)=>{if(Y.push($),ct&&$.w){let Dt={x:$.x,z:$.z,c:Math.cos($.rot||0),s:Math.sin($.rot||0),hw:$.w/2+.6,hd:$.d/2+.6,a:null};gt.push(Dt),$.pad=Dt,pt.add(ec(Dt,Dt),Math.max(Dt.hw,Dt.hd)+4)}return $},Gt=($,ct)=>S($,ct,K($,ct,y($,ct,_e($,ct,L($,ct)+N($,ct))))),Lt=($,ct,Dt)=>{let Tt=h($,ct);if(Tt&&Tt.d<Tt.hw+Dt)return!1;let It=Zt($,ct);return It&&It.d<It.w+Dt+4?!1:!Y.some(bt=>Math.hypot(bt.x-$,bt.z-ct)<Dt+Math.max(bt.w||2,bt.d||2)*.6)};{let $=at,ct=0,Dt=(Tt,It)=>({x:$.x+Tt,z:$.z+It});At({kind:"square",...Dt(0,0),rot:ct,w:64,d:96,h:0},!1),At({kind:"fountain",...Dt(0,0),rot:ct,r:3.4},!1);for(let Tt=0;Tt<8;Tt++){let It=Tt/8*Math.PI*2+.2;At({kind:"palm",...Dt(Math.cos(It)*15,Math.sin(It)*15),s:.95+Tt%3*.08},!1)}for(let Tt=0;Tt<5;Tt++)At({kind:"stall",...Dt(-18+Tt*9,-38),rot:Math.PI/2,w:3.2,d:2.4,h:2.6,tint:Tt});At({kind:"teahouse",...Dt(-20,30),rot:Math.atan2(-30,20),w:6,d:10,h:3.3}),At({kind:"board",...Dt(9,-9),rot:-Math.PI/2,w:2.4,d:.4,h:2.4}),At({kind:"signpost",...Dt(-26,8),rot:0},!1),At({kind:"gate",...Dt(-31,0),rot:0,w:1.2,d:9,h:5.2},!1);for(let[Tt,It]of[[-30,-46],[-30,46],[30,-46],[30,46],[0,-46],[0,46],[-30,22],[-30,-22]])At({kind:"lamp",...Dt(Tt,It)},!1);At({kind:"pier",x:k.x+k.c*6,z:k.z-40+k.s*6,rot:Math.atan2(k.s,k.c),w:46,d:3,h:0},!1);for(let Tt=0;Tt<3;Tt++)At({kind:"boat",x:k.x+10+Tt*7,z:k.z-30+Tt*9,rot:.4+Tt*.5},!1)}{let $=Yt;for(let ct=0,Dt=0;Dt<22&&ct<900;ct++){let Tt=a()*Math.PI*2,It=Math.sqrt(a())*($.r-25),bt=$.x+Math.cos(Tt)*It,ze=$.z+Math.sin(Tt)*It;if(!Lt(bt,ze,8))continue;let Fe=(Nn,Bn)=>Gt(bt+Nn,ze+Bn),on=Fe(4,0)-Fe(-4,0),an=Fe(0,4)-Fe(0,-4),pn=Math.atan2(-an,-on)+Math.round(a()*2-1)*.05,gn=a()<.3;At({kind:"house",x:bt,z:ze,rot:pn,w:gn?7:8+a()*2,d:gn?9:9+a()*2.5,h:gn?6.4:3.2,floors:gn?2:1,tint:a()}),Dt++}At({kind:"well",x:$.x+6,z:$.z+4,r:1.1},!1)}{for(let $=0;$<5;$++){let ct=$/5*Math.PI*2+.4,Dt=$t.x+Math.cos(ct)*24,Tt=$t.z+Math.sin(ct)*24;At({kind:"hut",x:Dt,z:Tt,rot:ct+Math.PI,w:4,d:5,h:2.4})}At({kind:"logs",x:$t.x+6,z:$t.z-5,rot:.6,w:4.5,d:1.8,h:1.2}),At({kind:"campfire",x:$t.x,z:$t.z},!1)}{let $=it.x+40,ct=it.z+120;ge.push({x:$,z:ct,r:26,fall:14,a:1.1}),At({kind:"mudhif",x:$,z:ct,rot:.3,w:6.5,d:20,h:5.8});for(let Dt=0;Dt<4;Dt++){let Tt=1.2+Dt*1.3,It=$+Math.cos(Tt)*22,bt=ct+Math.sin(Tt)*22;ge.push({x:It,z:bt,r:6,fall:8,a:.9}),At({kind:"reedhut",x:It,z:bt,rot:Tt,w:3.2,d:6,h:3})}for(let Dt=0;Dt<3;Dt++)At({kind:"canoe",x:$-30+Dt*9,z:ct-20-Dt*6,rot:1+Dt*.7,float:!0},!1)}{At({kind:"lighthouse",x:et.x,z:et.z,rot:0,w:6,d:6,h:19}),At({kind:"house",x:et.x-16,z:et.z+4,rot:.3,w:6,d:7,h:3,floors:1,tint:.8,white:!0});for(let $=0;$<2;$++)At({kind:"boat",x:ft.x+18+$*8,z:ft.z+30+$*12,rot:1.6+$*.4},!1)}{let $=Pt,ct=17;for(let[Tt,It]of[[-1,-1],[1,-1],[1,1],[-1,1]])At({kind:"ftower",x:$.x+Tt*ct,z:$.z+It*ct,r:3.2,h:6+a()*3},!1);[[[-1,-1],[1,-1]],[[1,-1],[1,1]],[[1,1],[-1,1]],[[-1,1],[-1,-1]]].forEach(([[Tt,It],[bt,ze]],Fe)=>{let on=$.x+Tt*ct,an=$.z+It*ct,pn=$.x+bt*ct,gn=$.z+ze*ct;for(let[Nn,Bn]of Fe===2?[[.1,.38],[.62,.9]]:[[.12,.88]]){let nt=Me(on,pn,Nn),v=Me(an,gn,Nn),b=Me(on,pn,Bn),w=Me(an,gn,Bn);At({kind:"fwall",x:(nt+b)/2,z:(v+w)/2,rot:Math.atan2(w-v,b-nt),w:Math.hypot(b-nt,w-v),d:1.3,h:3+a()*2.2},!1)}})}{At({kind:"reedhut",x:lt.x+30,z:lt.z-20,rot:.5,w:3.2,d:6,h:3});for(let Dt=0;Dt<3;Dt++)At({kind:"boat",x:yt.x+8,z:yt.z-25+Dt*14,rot:Dt*.6},!1);let $=Math.atan2(90,240),ct={x:fe.x+Math.cos($)*(fe.r-8),z:fe.z+Math.sin($)*(fe.r-8)};At({kind:"pier",x:ct.x,z:ct.z,rot:$+Math.PI,w:26,d:2.4,h:0,lake:!0},!1)}for(let $ of gt)$.a=Gt($.x,$.z);let Ot={d:0,t:0};function ee($,ct,Dt){let Tt=pt.at($,ct);if(!Tt)return Dt;for(let It of Tt){let bt=It.a,ze=$-bt.x,Fe=ct-bt.z,on=Math.abs(ze*bt.c+Fe*bt.s),an=Math.abs(-ze*bt.s+Fe*bt.c),pn=Math.max(on-bt.hw,an-bt.hd,0);pn<4&&(Dt=Me(bt.a,Dt,le(0,4,pn)))}return Dt}function pe($,ct){return ee($,ct,S($,ct,K($,ct,y($,ct,_e($,ct,L($,ct)+N($,ct))))))}let tt=($,ct)=>n+pe($,ct);function Ut($,ct,Dt){for(let It of ht){let bt=Math.hypot($-It.x,ct-It.z);if(bt<It.r*1.25&&Dt<n+It.lv+.2&&bt<mt(It,$,ct)+2)return{kind:"lake",level:n+It.lv}}if(Math.hypot($-it.x,ct-it.z)<it.r&&Dt<n+z+.15)return{kind:"marsh",level:n+z};let Tt=Zt($,ct);return Tt&&Tt.d<Tt.w+.3&&Dt<n+Tt.lv+.25?{kind:"river",level:n+Tt.lv,dx:Tt.dx,dz:Tt.dz}:Dt<n+.1?{kind:"sea",level:n}:null}let qt=($,ct,Dt)=>le($.r,$.r*.6,Math.hypot(ct-$.x,Dt-$.z)),Qt={x:400,z:-1150,r:950},he={x:-1700,z:-250,r:750};function me($,ct,Dt,Tt,It){let bt={t:0,pine:0,oak:0,palm:0,olive:0,b:.04,rock:0,reed:0};if(Dt<.35)return Math.hypot($-it.x,ct-it.z)<it.r&&Dt>-.6&&(bt.reed=.75),bt;let ze=cn($*.0032+5,ct*.0032-3),Fe=le(.44,.62,ze),on=le(90,200,Dt);bt.t=Fe*Me(.55,.75,on)+.03,bt.pine=.25+on*.7,bt.oak=1-bt.pine,Dt<25&&(bt.olive=.3,bt.palm=le(25,6,Dt)*.6,bt.t*=.6);let an=qt(Qt,$,ct);an>0&&(bt.t=Me(bt.t,.9,an),bt.pine=Me(bt.pine,.85,an),bt.oak=1-bt.pine,bt.palm=bt.olive=0);let pn=qt(he,$,ct);pn>0&&(bt.t=Me(bt.t,.82,pn),bt.oak=Me(bt.oak,.95,pn),bt.pine=1-bt.oak,bt.palm*=1-pn,bt.olive*=1-pn);let gn=qt(ne,$,ct);gn>0&&(bt.t=Me(bt.t,.8,gn),bt.palm=Me(bt.palm,1,gn),bt.pine*=1-gn,bt.oak*=1-gn,bt.olive*=1-gn);let Nn=qt(ce,$,ct);Nn>0&&(bt.t*=1-Nn*.97,bt.b*=1-Nn);let Bn=qt(Yt,$,ct);Bn>0&&(bt.t=Me(bt.t,.14,Bn),bt.olive=Me(bt.olive,.6,Bn),bt.palm=Me(bt.palm,.4,Bn),bt.pine*=1-Bn,bt.oak*=1-Bn);let nt=le(A.r,A.r*.5,Math.hypot($-A.x,ct-A.z));nt>0&&(bt.t*=1-nt*.8,bt.b=Me(bt.b,.3,nt)),Math.hypot($-P.x,ct-P.z)<P.r&&(bt.t=.05,bt.oak=1,bt.pine=0),Tt<110&&Dt<5&&(bt.t=.05,bt.palm=1,bt.oak=bt.pine=bt.olive=0,bt.b=.03),Dt>330&&(bt.t*=.5),It>.75&&(bt.t*=.4,bt.rock=le(.75,1.1,It)*.35),bt.rock+=.006;let b=h($,ct);b&&b.d<b.hw+2.2&&(bt.t=bt.b=bt.rock=0);let w=Zt($,ct);return w&&w.d<w.w+1.5&&(bt.t=bt.rock=0,w.d>w.w-.5&&(bt.reed=.3)),bt}function Ae($,ct){if(Math.hypot($-at.x,ct-at.z)<62)return!0;for(let Tt of ue)if(Math.hypot($-Tt.fx,ct-Tt.fz)<7)return!0;if(Math.hypot($-$t.x,ct-$t.z)<$t.r-8||Math.hypot($-Pt.x,ct-Pt.z)<26||Math.hypot($-et.x,ct-et.z)<30)return!0;let Dt=pt.at($,ct);if(Dt)for(let Tt of Dt){let It=Tt.a,bt=$-It.x,ze=ct-It.z;if(Math.abs(bt*It.c+ze*It.s)<It.hw+2.5&&Math.abs(-bt*It.s+ze*It.c)<It.hd+2.5)return!0}for(let Tt of Y)if((Tt.kind==="fountain"||Tt.kind==="ftower")&&Math.hypot($-Tt.x,ct-Tt.z)<(Tt.r||2)+2)return!0;return!1}let Kt=[{id:"summit",name:"\u0642\u0645\u0629 \u0627\u0644\u0633\u062D\u0627\u0628",icon:"\u{1F3D4}\uFE0F",x:r,z:o,r:22,sub:"\u0623\u0628\u0648 \u062C\u0627\u0633\u0645 \u0648\u0627\u0644\u0686\u0627\u064A\u0686\u064A"},{id:"shoulder",name:"\u0645\u0635\u0637\u0628\u0629 \u0627\u0644\u063A\u064A\u0645",icon:"\u2601\uFE0F",x:r,z:o,r:340,ring:225,sub:"\u0643\u062A\u0641 \u0627\u0644\u062C\u0628\u0644"},{id:"mount",name:"\u062C\u0628\u0644 \u0627\u0644\u0647\u064A\u0628\u0629",icon:"\u26F0\uFE0F",x:r,z:o,r:1700,sub:"\u0642\u0644\u0628 \u0627\u0644\u062C\u0632\u064A\u0631\u0629"},{id:"fajr",name:"\u0633\u0627\u062D\u0629 \u0627\u0644\u0641\u062C\u0631",icon:"\u{1F305}",x:at.x,z:at.z,r:110,sub:"\u0633\u0648\u0642 \u0648\u0686\u0627\u064A\u062E\u0627\u0646\u0629 \u064A\u0645 \u0627\u0644\u062E\u0644\u064A\u062C"},{id:"bay",name:"\u062E\u0644\u064A\u062C \u0627\u0644\u0641\u062C\u0631",icon:"\u26F5",x:k.x+200,z:k.z,r:520},{id:"groves",name:"\u0628\u0633\u0627\u062A\u064A\u0646 \u0627\u0644\u0631\u0637\u0628",icon:"\u{1F334}",x:ne.x,z:ne.z,r:ne.r},{id:"village",name:"\u0642\u0631\u064A\u0629 \u0627\u0644\u0637\u064A\u0646",icon:"\u{1F3D8}\uFE0F",x:Yt.x,z:Yt.z,r:Yt.r+30},{id:"light",name:"\u0645\u0646\u0627\u0631\u0629 \u0627\u0644\u0635\u064A\u0627\u062F\u064A\u0646",icon:"\u{1F5FC}",x:et.x,z:et.z,r:200},{id:"kohl",name:"\u062C\u0628\u0644 \u0627\u0644\u0643\u062D\u0644",icon:"\u{1F5FB}",x:1550,z:-1950,r:560},{id:"lake",name:"\u0628\u062D\u064A\u0631\u0629 \u0627\u0644\u0642\u0645\u0631",icon:"\u{1F319}",x:fe.x,z:fe.z,r:fe.r+140},{id:"huts",name:"\u0623\u0643\u0648\u0627\u062E \u0627\u0644\u062D\u0637\u0651\u0627\u0628\u064A\u0646",icon:"\u{1FA93}",x:$t.x,z:$t.z,r:120},{id:"shadows",name:"\u063A\u0627\u0628\u0629 \u0627\u0644\u0638\u0644\u0627\u0644",icon:"\u{1F332}",x:Qt.x,z:Qt.z,r:Qt.r},{id:"marsh",name:"\u0647\u0648\u0631 \u0627\u0644\u0639\u0646\u0628\u0631",icon:"\u{1F6F6}",x:it.x,z:it.z,r:it.r},{id:"mudhif",name:"\u0645\u0636\u064A\u0641 \u0627\u0644\u0642\u0635\u0628",icon:"\u{1F6D6}",x:it.x+40,z:it.z+120,r:60},{id:"wheat",name:"\u0633\u0647\u0644 \u0627\u0644\u0633\u0646\u0627\u0628\u0644",icon:"\u{1F33E}",x:ce.x,z:ce.z,r:ce.r},{id:"fort",name:"\u0623\u0637\u0644\u0627\u0644 \u0627\u0644\u062D\u0635\u0646",icon:"\u{1F3F0}",x:Pt.x,z:Pt.z,r:260},{id:"oaks",name:"\u063A\u0627\u0628\u0629 \u0627\u0644\u0628\u0644\u0648\u0637",icon:"\u{1F333}",x:he.x,z:he.z,r:he.r},{id:"pearl",name:"\u0634\u0627\u0637\u0626 \u0627\u0644\u0644\u0624\u0644\u0624",icon:"\u{1F41A}",x:lt.x,z:lt.z,r:420},{id:"thyme",name:"\u062A\u0644\u0627\u0644 \u0627\u0644\u0632\u0639\u062A\u0631",icon:"\u{1F33F}",x:A.x,z:A.z,r:A.r},{id:"plateau",name:"\u0647\u0636\u0628\u0629 \u0627\u0644\u062E\u064A\u0651\u0627\u0644\u0629",icon:"\u{1F40E}",x:P.x,z:P.z,r:P.r+40},{id:"birds",name:"\u062C\u0632\u064A\u0631\u0629 \u0627\u0644\u0637\u064A\u0648\u0631",icon:"\u{1F54A}\uFE0F",x:O.x,z:O.z,r:O.r+80},{id:"gulls",name:"\u062C\u0631\u0641 \u0627\u0644\u0646\u0648\u0627\u0631\u0633",icon:"\u{1FAB6}",x:vt.x,z:vt.z,r:380},{id:"falls",name:"\u0634\u0644\u0627\u0644 \u0627\u0644\u0645\u0631\u0627\u064A\u0627",icon:"\u{1F4A6}",x:H.x,z:H.z,r:130},{id:"falcons",name:"\u062C\u0628\u0644 \u0627\u0644\u0635\u0642\u0648\u0631",icon:"\u{1F985}",x:1900,z:1900,r:760},{id:"valley",name:"\u0648\u0627\u062F\u064A \u0627\u0644\u063A\u0632\u0644\u0627\u0646",icon:"\u{1F98C}",x:Nt.x,z:Nt.z,r:Nt.r}];Kt.sort(($,ct)=>$.r-ct.r);function Ge($,ct){for(let Tt of Kt){let It=Math.hypot($-Tt.x,ct-Tt.z);if(Tt.ring?It<Tt.r&&It>Tt.ring:It<Tt.r)return Tt}let Dt=Zt($,ct);return Dt&&Dt.d<Dt.w+30?{id:Dt.river.id,name:Dt.river.name,icon:"\u{1F4A7}",river:!0}:d($,ct)<0?{id:"sea",name:"\u0627\u0644\u0628\u062D\u0631",icon:"\u{1F30A}"}:d($,ct)<160?{id:"coast",name:"\u0627\u0644\u0633\u0627\u062D\u0644",icon:"\u{1F3D6}\uFE0F"}:{id:"wild",name:"\u0627\u0644\u0628\u0631\u0651\u064A\u0629",icon:"\u{1F343}"}}let Se={fajr:[at.x-22,at.z-16],village:[Yt.x+14,Yt.z+10],light:[et.x-24,et.z-12],lake:[fe.x+290,fe.z+60],huts:[$t.x-6,$t.z+8],mudhif:[it.x+40,it.z+146],wheat:[ce.x+10,ce.z+14],fort:[Pt.x+26,Pt.z+4],oaks:[-1600,-238],pearl:[lt.x+40,lt.z+10],thyme:[-1300,1712],plateau:[P.x+10,P.z],birds:[O.x,O.z],gulls:[vt.x-40,vt.z-30],falls:[H.x-30,H.z-20],falcons:[1650,1460],kohl:[1300,-1500],groves:[ne.x,ne.z+14]},ue=[];for(let $ of Kt){let ct=Se[$.id];if(!ct)continue;let Dt=Math.atan2(o-ct[1],r-ct[0]);ue.push({id:"z_"+$.id,x:ct[0]-Math.cos(Dt)*3.4,z:ct[1]-Math.sin(Dt)*3.4,fx:ct[0],fz:ct[1],name:$.name,icon:$.icon,face:Dt,flag:!1,fire:!0})}ue.sort(($,ct)=>(ct.id==="z_fajr")-($.id==="z_fajr"));{let $=ue[0],ct=Math.atan2(o-at.z,r-at.x);Object.assign($,{x:at.x+12,z:at.z+2,face:ct})}let Ye=[...[[300,-1300],[650,-1050],[180,-1720]].map(([$,ct])=>({kind:"wolf",x:$,z:ct})),...[[-1600,-420],[-1900,-120],[-1480,-720],[-1900,1300],[-2250,1620]].map(([$,ct])=>({kind:"boar",x:$,z:ct}))];return{SEA:n,HALF:s,SHOULDER:l,beasts:Ye,H:tt,A:pe,baseA:L,coastS:d,Rc:u,rivers:dt,falls:Bt,lakes:ht,marsh:{...it,lv:z},roads:St,sites:Y,zones:Kt,zoneAt:Ge,rest:ue,nearRoad:h,nearRiver:Zt,water:Ut,flora:me,reserved:Ae,peaks:x,plateau:P,islet:O,fajr:at,shBay:k,valley:Nt,scarp:D,fallsAt:H}}var kn=Math.PI/180,ys=(i,t)=>i*100003+t;function ic(i){let t=new Map;return{cell:i,add(e,n=e.x,s=e.z){let r=ys(Math.floor(n/i),Math.floor(s/i)),o=t.get(r);o||(o=[],t.set(r,o)),o.push(e)},remove(e,n=e.x,s=e.z){let r=t.get(ys(Math.floor(n/i),Math.floor(s/i)));if(r){let o=r.indexOf(e);o>=0&&r.splice(o,1)}},addArea(e,n,s,r,o){for(let a=Math.floor(n/i);a<=Math.floor(r/i);a++)for(let l=Math.floor(s/i);l<=Math.floor(o/i);l++){let c=ys(a,l),u=t.get(c);u||(u=[],t.set(c,u)),u.push(e)}},each(e,n,s,r){let o=Math.floor(e/i),a=Math.floor(n/i);for(let l=-s;l<=s;l++)for(let c=-s;c<=s;c++){let u=t.get(ys(o+l,a+c));if(u){for(let d of u)if(r(d)===!0)return!0}}return!1}}}function E_(i,t){let e=i.x||0,n=i.z||0,s=13.3,r=95,o=0,a=(K,Q)=>[e+Math.cos(Q*kn)*K,n+Math.sin(Q*kn)*K],l=(K,Q)=>Math.hypot(K-e,Q-n),c=(K,Q)=>Math.atan2(Q-n,K-e);function u(K){if(K<=s+1)return r;let Q=40+55*Math.pow(1-we((K-s-1)/(72-s-1),0,1),1.12),H=36+4*(1-we((K-72)/48,0,1)),zt=36*Math.pow(1-we((K-120)/60,0,1),1.25)-le(180,230,K)*14;return Me(Me(Q,H,le(68,76,K)),zt,le(116,124,K))}let d=[{a:118.5*kn,r0:108,r1:190,w:7.5,depth:17},{a:101*kn,r0:22,r1:64,w:6,depth:15},{a:58*kn,r0:26,r1:72,w:4.5,depth:1.6,water:!0}],p=(K,Q)=>{let H=l(K,Q),zt=u(H)+(cn(K*.028+5,Q*.028)-.5)*9*le(s+2,s+12,H)*(1-le(200,260,H)*.5);return zt+=5*le(49.5,47.6,H)*le(28,42,H),zt+=4*le(27.2,25.3,H)*le(15.5,21,H),zt},m=(K,Q)=>{let H=l(K,Q),zt=p(K,Q);for(let ht of d){if(H<=ht.r0||H>=ht.r1)continue;let mt=Math.abs(In(ht.a,c(K,Q)))*H;mt<ht.w&&(zt-=ht.depth*le(ht.w,ht.w*.25,mt)*le(ht.r0,ht.r0+4,H)*le(ht.r1,ht.r1-4,H))}return zt},g=[];function E(K,Q={}){let H=K.map(([gt,pt])=>{let[At,Gt]=a(gt,pt);return new j(At,0,Gt)}),zt=new Xn(H,!1,"centripetal"),ht=zt.getLength(),mt=Math.max(2,Math.ceil(ht/.8)),z=[];for(let gt=0;gt<=mt;gt++){let pt=zt.getUtoTmapping(gt/mt),At=zt.getPoint(pt);z.push([At.x,At.z,Math.min(H.length-2,Math.floor(pt*(H.length-1)))])}let S={id:g.length,kind:Q.kind||"trail",pts:z.map(([gt,pt,At])=>({x:gt,z:pt,wi:At,y:0,hw:Q.hw||1.35,kind:Q.kinds&&Q.kinds[At]||Q.kind||"trail"}))},Y=S.pts.map(gt=>p(gt.x,gt.z));if(S.pts.forEach((gt,pt)=>{let At=0,Gt=0;for(let Lt=-22;Lt<=22;Lt++)At+=Y[we(pt+Lt,0,Y.length-1)],Gt++;gt.y=At/Gt}),Q.y0!=null||Q.y1!=null){let gt=S.pts.length-1,pt=Q.y0!=null?Q.y0-S.pts[0].y:0,At=Q.y1!=null?Q.y1-S.pts[gt].y:0;S.pts.forEach((Gt,Lt)=>{Gt.y+=Me(pt,At,Lt/(gt||1))})}for(let gt of S.pts)gt.kind==="ledge"?gt.hw=.72:gt.kind==="bridge"?gt.hw=.62:gt.kind==="stones"&&(gt.hw=.6);return g.push(S),S}let x=E([[166,12],[160,40],[153,68],[146,94],[142.5,114.6],[140,122.4],[134,146],[127,172],[121,194],[117,206]],{kinds:{4:"bridge"}}),_=[110,98,86,74],A=[212,224,236,248,260,272,284],P=(K,Q)=>a(_[K],A[Q]),R=(K,Q)=>{let[H,zt]=P(K,Q),ht=0;for(let mt=0;mt<9;mt++)ht+=p(H+Math.cos(mt)*4,zt+Math.sin(mt)*4);return ht/9},O=[],L=new Set,M=dn(77),F=(K,Q)=>K*10+Q;(function K(Q,H){L.add(F(Q,H));let zt=[[Q+1,H],[Q-1,H],[Q,H+1],[Q,H-1]].filter(([ht,mt])=>ht>=0&&ht<4&&mt>=0&&mt<7&&!L.has(F(ht,mt)));for(let ht=zt.length-1;ht>0;ht--){let mt=Math.floor(M()*(ht+1));[zt[ht],zt[mt]]=[zt[mt],zt[ht]]}for(let[ht,mt]of zt)L.has(F(ht,mt))||(O.push([[Q,H],[ht,mt]]),K(ht,mt))})(0,0),O.push([[1,2],[1,3]],[[2,4],[3,4]]);let Z=new Map;for(let K of O){let Q=F(...K[0])*100+F(...K[1]),H=F(...K[1])*100+F(...K[0]);!Z.has(Q)&&!Z.has(H)&&Z.set(Q,K)}let k=[],at=new Map;for(let[[K,Q],[H,zt]]of Z.values()){let[ht,mt]=P(K,Q),[z,S]=P(H,zt),Y=(ht+z)/2+(M()-.5)*3,gt=(mt+S)/2+(M()-.5)*3,pt=(Gt,Lt)=>[l(Gt,Lt),(c(Gt,Lt)/kn+360)%360],At=E([pt(ht,mt),pt(Y,gt),pt(z,S)],{kind:"maze",hw:1.25,y0:R(K,Q),y1:R(H,zt)});At.cells=[[K,Q],[H,zt]],k.push(At);for(let Gt of At.cells)at.set(F(...Gt),(at.get(F(...Gt))||0)+1)}let ft=E([[117,206],[113,209],[_[0],A[0]]],{kind:"maze",hw:1.3,y0:x.pts[x.pts.length-1].y,y1:R(0,0)}),et=E([[_[3],A[6]],[70,287],[66,292]],{kind:"maze",hw:1.3,y0:R(3,6)}),Mt=[[66,292],[62,306],[58,334],[54,308],[50,336],[46,309],[43,330],[41,344],[40,0],[39.3,16],[38.6,30],[37.5,42],[36.6,53],[35.8,63],[34.4,75],[32.4,86],[31.2,92],[29.6,110.5],[27.4,122],[24,138],[20,154],[s+.4,168]],it=E(Mt,{y0:et.pts[et.pts.length-1].y,kinds:{7:"ledge",8:"ledge",9:"ledge",12:"stones",16:"bridge"}});{let K=it.pts,Q=0;for(let H=K.length-1;H>=0&&(H<K.length-1&&(Q+=Math.hypot(K[H+1].x-K[H].x,K[H+1].z-K[H].z)),K[H].y=Math.max(K[H].y,r-Q*.42),!(Q>60));H--);K[K.length-1].y=r;for(let H=Math.max(1,K.length-80);H<K.length;H++)(K[H].y-K[H-1].y)/(Math.hypot(K[H].x-K[H-1].x,K[H].z-K[H-1].z)||1)>.24&&K[H].kind==="trail"&&(K[H].kind="stairs",K[H].hw=1.25)}let yt=[];for(let K of[x,it]){let Q=0;for(;Q<K.pts.length;){if(K.pts[Q].kind!=="bridge"){Q++;continue}let H=Q;for(;H+1<K.pts.length&&K.pts[H+1].kind==="bridge";)H++;let zt=K.pts[Math.max(0,Q-1)],ht=K.pts[Math.min(K.pts.length-1,H+1)],mt=H-Q+1,z=mt>10?[Math.floor(mt*.3),Math.floor(mt*.7)]:[Math.floor(mt/2)];for(let S=Q;S<=H;S++){let Y=(S-Q+1)/(mt+1),gt=K.pts[S];gt.y=Me(zt.y,ht.y,Y)-Math.sin(Y*Math.PI)*.7,gt.gap=z.includes(S-Q)}yt.push({seg:K,i:Q,j:H,a:zt,b:ht}),Q=H+1}}let lt=[];for(let K=0;K<it.pts.length;K++){let Q=it.pts[K];if(Q.kind==="stones"&&(!lt.length||Math.hypot(Q.x-lt[lt.length-1].x,Q.z-lt[lt.length-1].z)>2.25)){let H=it.pts[Math.min(K+1,it.pts.length-1)],zt=(t()-.5)*.5,ht=-(H.z-Q.z),mt=H.x-Q.x,z=Math.hypot(ht,mt)||1;lt.push({x:Q.x+ht/z*zt,z:Q.z+mt/z*zt,y:Q.y+.05,r:.72})}}let Rt=[];for(let K of g)K.pts.forEach((Q,H)=>{Q.seg=K,Q.k=H,Rt.push(Q)});let vt=ic(4);for(let K of Rt)vt.add(K);function Nt(K,Q,H,zt=1){let ht=null,mt=1/0;if(vt.each(K,Q,zt,Ot=>{let ee=(Ot.x-K)**2+(Ot.z-Q)**2+(H!=null?Math.max(0,Math.abs(Ot.y-H)-1.2)**2*9:0);ee<mt&&(mt=ee,ht=Ot)}),!ht)return null;let z=ht.seg.pts,S=z[Math.min(ht.k+1,z.length-1)],Y=z[Math.max(ht.k-1,0)],gt=Math.hypot(K-ht.x,Q-ht.z),pt=ht.y,At=S.x-Y.x,Gt=S.z-Y.z,Lt=Math.hypot(At,Gt)||1;At/=Lt,Gt/=Lt;for(let[Ot,ee]of[[Y,ht],[ht,S]]){let pe=ee.x-Ot.x,tt=ee.z-Ot.z,Ut=pe*pe+tt*tt||1,qt=we(((K-Ot.x)*pe+(Q-Ot.z)*tt)/Ut,0,1),Qt=Math.hypot(K-(Ot.x+pe*qt),Q-(Ot.z+tt*qt));Qt<gt&&(gt=Qt,pt=Me(Ot.y,ee.y,qt))}return{p:ht,d:gt,y:pt,tx:At,tz:Gt,side:(K-ht.x)*-Gt+(Q-ht.z)*At}}function Yt(K,Q){let H=l(K,Q),zt=m(K,Q);if(H<s+1.5)return Me(zt,r,le(s+1.5,s+.3,H));if(H>200)return zt;let ht=zt,mt=Nt(K,Q,null,2);if(mt&&mt.d<mt.p.hw+3.2){let z=mt.p.kind;if(z!=="bridge"){if(z==="stones")ht=Math.min(ht,mt.y-.55);else if(ht=Me(ht,mt.y-.04,le(mt.p.hw+3.2,mt.p.hw+.5,mt.d)),z==="ledge"){let S=mt.d-mt.p.hw;S>0&&(H>l(mt.p.x,mt.p.z)?ht=Math.min(ht,mt.y-le(0,2.2,S)*11):ht=Math.max(ht,mt.y+le(.3,2.4,S)*4.5))}}}return ht}let $t=[],fe=(K,Q)=>K.pts.findIndex(H=>H.kind===Q),Pt=(K,Q,H)=>{let zt=K.pts[we(Q,0,K.pts.length-1)],ht=K.pts[we(Q+6,0,K.pts.length-1)],mt={id:"cp"+$t.length,x:zt.x,z:zt.z,y:zt.y,name:H,face:Math.atan2(ht.z-zt.z,ht.x-zt.x),flag:!0};return $t.push(mt),mt};Pt(x,3,"\u0633\u0641\u062D \u0627\u0644\u062C\u0628\u0644"),Pt(x,fe(x,"bridge")-7,"\u0642\u0628\u0644 \u0627\u0644\u062C\u0633\u0631"),Pt(x,x.pts.length-2,"\u0628\u0627\u0628 \u063A\u0627\u0628\u0629 \u0627\u0644\u0645\u062A\u0627\u0647\u0629"),Pt(it,4,"\u0637\u0644\u0639\u0629 \u0627\u0644\u0632\u0643\u0632\u0627\u0643"),Pt(it,fe(it,"ledge")-6,"\u0642\u0628\u0644 \u062D\u0627\u0641\u0629 \u0627\u0644\u062C\u0631\u0641"),Pt(it,fe(it,"stones")-5,"\u0642\u0628\u0644 \u0627\u0644\u0633\u0627\u0642\u064A\u0629"),Pt(it,fe(it,"bridge")-6,"\u0642\u0628\u0644 \u0627\u0644\u062C\u0633\u0631 \u0627\u0644\u062B\u0627\u0646\u064A");let ne=it.pts[it.pts.length-1],ce=c(ne.x,ne.z);$t.push({id:"summit",x:e-3,z:n+3,y:r,name:"\u0633\u0627\u062D\u0629 \u0627\u0644\u0642\u0645\u0629",face:0,flag:!1,plaza:!0});let ge=[],ie=[];{let K=new Map;for(let S of k){let[Y,gt]=S.cells.map(pt=>F(...pt));for(let[pt,At]of[[Y,gt],[gt,Y]])K.has(pt)||K.set(pt,[]),K.get(pt).push(At)}let Q=F(0,0),H=F(3,6),zt=new Map([[Q,-1]]),ht=[Q],mt=new Map;for(;ht.length;){let S=ht.shift();if(S===H)break;for(let Y of K.get(S)||[])zt.has(Y)||(zt.set(Y,S),ht.push(Y))}for(let S=H;zt.get(S)!==-1&&zt.has(S);S=zt.get(S))mt.set(zt.get(S),S);let z=0;for(let[S,Y]of mt){if((at.get(S)||0)<3||z++%3===2)continue;let[gt,pt]=P(Math.floor(S/10),S%10),[At,Gt]=P(Math.floor(Y/10),Y%10),Lt=Math.atan2(Gt-pt,At-gt),Ot=gt+Math.cos(Lt+.9)*1.9,ee=pt+Math.sin(Lt+.9)*1.9;ge.push({x:Ot,z:ee,a:Lt,text:"\u2B05 \u0644\u0644\u0642\u0645\u0629"})}for(let[S,Y]of at){if(Y!==1||S===Q||S===H)continue;let[gt,pt]=P(Math.floor(S/10),S%10);ie.push({x:gt,z:pt,a:t()*Ee})}}let _e=[];for(let K of[x,it])for(let Q=8;Q<K.pts.length-4;Q+=17){let H=K.pts[Q];H.kind==="trail"&&_e.push({x:H.x,y:H.y+.9,z:H.z})}for(let K of ie){let Q=Nt(K.x,K.z,null,2);if(Q)for(let H=0;H<4;H++){let zt=Q.p.seg.pts[we(Q.p.k+(H-1.5)*2|0,0,Q.p.seg.pts.length-1)];_e.push({x:zt.x,y:zt.y+.9,z:zt.z})}}let De=(K,Q)=>{let H=K.pts[we(Q,0,K.pts.length-1)];return{x:H.x,z:H.z,y:H.y}},se=Math.floor(x.pts.length*.22),W=fe(it,"ledge"),St=[{kind:"wolf",home:De(x,se)},{kind:"wolf",home:De(x,se+4),ox:1.5},{kind:"wolf",home:De(it,W-26)},{kind:"wolf",home:De(it,W-22),ox:1.2},{kind:"boar",home:De(k[Math.floor(k.length*.4)],10)},{kind:"boar",home:De(k[Math.floor(k.length*.75)],10)}],rt=(K,Q)=>[e+Math.cos(K*kn)*Q,n+Math.sin(K*kn)*Q],ut=236,[h,y]=rt(ut,9.2),D=rt(221,6.2),N=rt(118,9),J=rt(300,10.2),dt={x:e,z:n,RP:s,HS:r,DECK_A:o,ENTRY_A:ce,kioskA:ut,kiosk:[h,y],meet:D,bell:N,flag:J,benches:[185,150,30],beds:[80,175,280,350],lamps:[45,145,255,330],pines:[62,100,200,320],guests:[{a:212,r:6.9,look:D,kind:"tea"},{a:229,r:6.9,look:D,kind:"tea"},{a:219,r:5.2,look:[h,y],kind:"stand"}],scope:[e+s+3.9,n],inter:[{id:"tea",x:h-Math.cos(ut*kn)*2.1,z:y-Math.sin(ut*kn)*2.1,r:2.3,label:"\u2615 \u0627\u0634\u0631\u0628 \u0634\u0627\u064A"},{id:"chat",x:D[0],z:D[1],r:2.2,label:"\u{1F5E3}\uFE0F \u0633\u0648\u0644\u0641 \u0648\u064A\u0627\u0647\u0645"},{id:"bell",x:e+(N[0]-e)*.84,z:n+(N[1]-n)*.84,r:2.2,label:"\u{1F514} \u062F\u0643 \u0627\u0644\u062C\u0631\u0633"},{id:"scope",x:e+s+3.1,z:n,r:1.8,label:"\u{1F52D} \u0628\u0627\u0648\u0639 \u0628\u0627\u0644\u062A\u0644\u0633\u0643\u0648\u0628"},{id:"fountain",x:e,z:n,r:3.4,label:"\u{1FA99} \u0627\u0631\u0645\u0650 \u0639\u0645\u0644\u0629 \u0628\u0627\u0644\u0646\u0627\u0641\u0648\u0631\u0629"}]},ot=[];ot.push({x:e,z:n,r:2.6,tall:1});for(let K of[-1.1,0,1.1])ot.push({x:h+Math.cos(ut*kn+Math.PI/2)*K,z:y+Math.sin(ut*kn+Math.PI/2)*K,r:1.05});{let K=-Math.sin(118*kn),Q=Math.cos(118*kn);ot.push({x:N[0]+K*.9,z:N[1]+Q*.9,r:.25},{x:N[0]-K*.9,z:N[1]-Q*.9,r:.25})}ot.push({x:J[0],z:J[1],r:.3});for(let K of dt.beds){let[Q,H]=rt(K,11);ot.push({x:Q,z:H,r:.75})}for(let K of dt.benches){let[Q,H]=rt(K,6.6),zt=-Math.sin(K*kn),ht=Math.cos(K*kn);ot.push({x:Q,z:H,r:.75},{x:Q+zt*.8,z:H+ht*.8,r:.5},{x:Q-zt*.8,z:H-ht*.8,r:.5})}for(let K of dt.guests){let[Q,H]=rt(K.a,K.r);ot.push({x:Q,z:H,r:.42})}for(let K of dt.pines){let[Q,H]=rt(K,11.6);ot.push({x:Q,z:H,r:.5,tall:1})}for(let K=0;K<64;K++){let Q=K/64*Ee;Math.abs(In(Q,ce))<.2||Math.abs(In(Q,o))<.22||ot.push({x:e+Math.cos(Q)*(s-.1),z:n+Math.sin(Q)*(s-.1),r:.55,wall:1})}let Bt=[];for(let K of Rt)if(K.kind==="ledge"&&K.k%2===0){let Q=K.seg.pts[Math.min(K.k+1,K.seg.pts.length-1)],H=K.seg.pts[Math.max(K.k-1,0)],zt=Q.x-H.x,ht=Q.z-H.z,mt=Math.hypot(zt,ht)||1,z=-ht/mt,S=zt/mt;l(K.x+z,K.z+S)>l(K.x,K.z)&&(z=-z,S=-S);let Y=.9+en(K.k,1)*.8;Bt.push({p:K,nx:z,nz:S,sz:Y}),ot.push({x:K.x+z*(K.hw+Y),z:K.z+S*(K.hw+Y),r:Y*.8,tall:1})}for(let K of ie)ot.push({x:K.x,z:K.z,r:.9});let X=d[2],Zt=(K,Q)=>{let H=l(K,Q),zt=(c(K,Q)/kn+360)%360;return H>66&&H<122&&zt>203&&zt<293};return{id:i.id||"M1",x:e,z:n,RP:s,HS:r,DECK_A:o,ENTRY_A:ce,rad:l,ang:c,P2:a,prof:u,gullies:d,stream:X,Hbase:p,Hnat:m,H:Yt,segs:g,ALL:Rt,A:x,C2:it,MAZ:k,entrySeg:ft,exitSeg:et,cellP:P,key:F,nearest:Nt,bridges:yt,stones:lt,rest:$t,signs:ge,logs:ie,coins:_e,beasts:St,plaza:dt,coll:ot,ledgeRocks:Bt,inMaze:Zt,foot:200}}function T_(i){let t=i.x,e=i.z||0,n=i.floor??-35,s=120,r=11,o=g=>2.6*Math.sin(g*.055+.6)+1.5*Math.sin(g*.13+2.1)-.6,a=[[17,1],[45,-1],[76,1],[103,-1]].map(([g,E])=>({x:g,z:we(o(g)+E*6.4,-8.2,8.2),side:E,rot:E>0?Math.PI:0,base:0}));function l(g,E){let x=Math.abs(E),_=(cn(g*.09+3.1,E*.09)-.5)*.55,A=E-o(we(g,-10,s+10));_-=Math.exp(-(A*A)/1.3)*.75*le(-12,-2,g);let P=we((x-(r-1))/21,0,1);if(_+=21*P*P+le(30,50,x)*7,_+=(cn(g*.07+(E>0?9:2),x*.09)-.5)*5*le(r+1,r+9,x),g<2&&(_=Math.max(_,21*Math.pow(we((2-g)/62,0,1),.9))),g>s-2){let R=(g-s+2)/30;_+=20*Math.min(1,R)**2+le(1,2.5,R)*6}return _+=le(46,70,x)*45+le(-62,-90,g)*45+le(s+35,s+70,g)*45,_}for(let g of a)g.base=l(g.x,g.z)+.05;let c=(g,E)=>[g-t,E-e];function u(g,E){let x=g-t,_=E-e;if(x<-95||x>s+75||Math.abs(_)>72)return 1/0;let A=l(x,_);for(let P of a){let R=x-P.x,O=_-P.z;R*R+O*O<49&&(A=Me(A,P.base,le(7,4.5,Math.hypot(R,O))))}return n+A}let d=g=>n+l(g,o(g))+.42,p=(g,E)=>g>1.5&&g<s-1.5&&Math.abs(E)<r-1.2,m=[{id:"valley",x:t+4,z:e+o(4)+3.2,y:n+l(4,o(4)+3.2),name:"\u0645\u062F\u062E\u0644 \u0627\u0644\u0648\u0627\u062F\u064A",face:0,flag:!1}];for(let g of m)g.y=u(g.x,g.z);return{id:i.id||"V1",x:t,z:e,VF:n,VL:s,FLOOR:r,riverZ:o,CAMPS:a,H0:l,Hv:u,toL:c,waterLevel:d,onFloor:p,rest:m}}var _f=Uh;function yf(i=Uh){let t=dn(i.seed||1),e=i.half||500,n=E_(i.features.find(W=>W.type==="mountain"),t),s=i.features.find(W=>W.type==="valley"),r=xf(i,n,s),o=r.SEA,a=T_({...s,floor:o+r.A(r.valley.x,r.valley.z)-21}),l=(W,St)=>r.H(W,St);function c(W,St){let rt=n.rad(W,St),ut=rt<245?rt>200?Me(n.H(W,St),l(W,St),le(200,245,rt)):n.H(W,St):l(W,St),h=a.Hv(W,St);return h<ut&&(ut=h),ut}let u=(W,St)=>Math.hypot(c(W+.4,St)-c(W-.4,St),c(W,St+.4)-c(W,St-.4))/.8,d=ic(4),p=[],m=W=>(p.push(W),d.add(W),W);for(let W of n.coll)m(W);let g={pineA:[],pineB:[],oak:[],hedge:[],bush:[],rock:[],palm:[[],[],[]],fruit:[[],[],[]],boulder:[],vbush:[],vrock:[],rim:[]},E=(W,St,rt)=>{if(n.rad(W,St)<n.RP+3)return!1;let ut=n.nearest(W,St,null,2);if(ut&&ut.d<ut.p.hw+rt)return!1;for(let h of n.rest)if(Math.hypot(W-h.x,St-h.z)<4.6)return!1;return!0};for(let W=-125;W<=125;W+=1.25)for(let St=-125;St<=125;St+=1.25){let rt=n.x+W+(t()-.5)*.4,ut=n.z+St+(t()-.5)*.4;if(!n.inMaze(rt,ut)||!E(rt,ut,.75))continue;let h=c(rt,ut);if(g.hedge.push({x:rt,y:h-.1,z:ut,ry:t()*Ee,s:.95+t()*.45}),m({x:rt,z:ut,r:.62,hedge:1}),t()<.16&&E(rt,ut,2.2)){let y={x:rt,y:h-.15,z:ut,ry:t()*Ee,s:.85+t()*.4};(t()<.5?g.pineA:g.oak).push(y)}}{let W=dn(20261123),St=(N,J)=>[a.x+N,a.z+J],rt=(N,J,dt)=>a.CAMPS.some(ot=>Math.hypot(N-ot.x,J-ot.z)<dt),ut=(N,J,dt)=>Math.abs(J-a.riverZ(N))<1.7+dt||rt(N,J,6.8+dt),h=(N=0,J=a.FLOOR-.6,dt=-1,ot=a.VL+1)=>({x:dt+W()*(ot-dt),z:(W()<.5?-1:1)*(N+W()*(J-N))}),y=(N,J)=>u(a.x+N,a.z+J),D=[];for(let N of[-1,1])for(let J=-2;J<a.VL+2;J+=5+W()*5){let dt=a.riverZ(J)+N*(2.3+W()*1.8);!rt(J,dt,7.5)&&Math.abs(dt)<a.FLOOR&&D.push({x:J,z:dt})}for(let N=0;N<16;N++){let J=h(2,a.FLOOR-1);ut(J.x,J.z,.6)||D.push(J)}D.forEach((N,J)=>{let[dt,ot]=St(N.x,N.z);m({x:dt,z:ot,r:.38,tall:1,tree:1}),g.palm[J%3].push({x:dt,y:c(dt,ot)-.05,z:ot,ry:W()*Ee,s:.85+W()*.4})});for(let N=0;N<3;N++)for(let J=0,dt=0;dt<9&&J<400;J++){let ot=h(1.5,a.FLOOR-.5),[Bt,X]=St(ot.x,ot.z);ut(ot.x,ot.z,1.4)||d.each(Bt,X,1,Zt=>Math.hypot(Zt.x-Bt,Zt.z-X)<3)||(m({x:Bt,z:X,r:.35,tall:1,tree:1}),g.fruit[N].push({x:Bt,y:c(Bt,X)-.05,z:X,ry:W()*Ee,s:.75+W()*.45}),dt++)}for(let N=0;g.vbush.length<130&&N<3e3;N++){let J=h(0,a.FLOOR+4);if(ut(J.x,J.z,.5)||y(J.x,J.z)>.7)continue;let[dt,ot]=St(J.x,J.z);g.vbush.push({x:dt,y:c(dt,ot),z:ot,ry:W()*Ee,s:.5+W()*.8})}for(let N=0;g.vrock.length<90&&N<2e3;N++){let J=h(0,a.FLOOR);if(rt(J.x,J.z,6)||Math.abs(J.z-a.riverZ(J.x))<1.1)continue;let dt=.35+W()*.8,[ot,Bt]=St(J.x,J.z);dt>.8&&m({x:ot,z:Bt,r:.3*dt}),g.vrock.push({x:ot,y:c(ot,Bt)+.04,z:Bt,rx:W()*3,ry:W()*3,rz:W()*3,s3:[dt,dt*(.6+W()*.4),dt*(.8+W()*.4)]})}for(let N=0;N<230;N++){let J=-14+W()*(a.VL+30),dt=a.FLOOR+1+W()*26,ot=(W()<.5?-1:1)*dt,Bt=.8+W()*3.2,[X,Zt]=St(J,ot);g.boulder.push({x:X,y:c(X,Zt)-Bt*.42,z:Zt,rx:W()*3,ry:W()*3,rz:W()*3,s3:[Bt,Bt*(.5+W()*.4),Bt*(.8+W()*.5)]})}for(let N=0;N<26;N++){let J=h(a.FLOOR-3,a.FLOOR+1);if(rt(J.x,J.z,7))continue;let dt=1.3+W()*1.6,[ot,Bt]=St(J.x,J.z);m({x:ot,z:Bt,r:.45*dt}),g.boulder.push({x:ot,y:c(ot,Bt)-.15,z:Bt,rx:W()*3,ry:W()*3,rz:W()*3,s3:[dt,dt*.7,dt]})}for(let N=0;N<140;N++){let J=-40+W()*(a.VL+80),dt=26+W()*40,ot=(W()<.5?-1:1)*dt;if(wn(J*.06,ot*.06)<.4)continue;let[Bt,X]=St(J,ot);g.rim.push({x:Bt,y:c(Bt,X)-.2,z:X,ry:W()*Ee,s:1+W()*1.3})}}let x=new Map,_=(W,St)=>{let rt=ys(Math.floor(W.x/6),Math.floor(W.z/6));x.set(rt,(x.get(rt)||0)+St)};for(let W of p)W.tree&&_(W,1);let A=[],P=ic(16),R=W=>{W.box=!0,W.c=Math.cos(W.rot||0),W.s=Math.sin(W.rot||0);let St=Math.hypot(W.hw,W.hd);return p.push(W),d.addArea(W,W.x-St,W.z-St,W.x+St,W.z+St),W};for(let W of r.sites){W.y=r.H(W.x,W.z);let St=W.kind,rt=W.rot||0;if(["house","hut","reedhut","mudhif","teahouse","stall","board","logs","fwall"].includes(St))R({x:W.x,z:W.z,hw:W.w/2,hd:W.d/2,rot:rt,tall:1,h:W.h,site:W});else if(St==="lighthouse")m({x:W.x,z:W.z,r:3.1,tall:1});else if(St==="fountain")m({x:W.x,z:W.z,r:W.r});else if(St==="well"||St==="ftower")m({x:W.x,z:W.z,r:W.r,tall:St==="ftower"?1:0});else if(St==="lamp"||St==="signpost")m({x:W.x,z:W.z,r:.14});else if(St==="palm")m({x:W.x,z:W.z,r:.3,tall:1,tree:1});else if(St==="gate")for(let ut of[-1,1])m({x:W.x-Math.sin(rt)*ut*4.6,z:W.z+Math.cos(rt)*ut*4.6,r:.55,tall:1});else if(St==="pier"){let ut=W.lake?r.lakes[0]:null,h=ut?o+ut.lv+.55:o+.95,y={x:W.x,z:W.z,c:Math.cos(rt),s:Math.sin(rt),hw:W.w/2,hd:W.d/2,y:h};W.y=h,A.push(y);let D=Math.max(W.w,W.d)/2+1;P.addArea(y,W.x-D,W.z-D,W.x+D,W.z+D)}}function O(W,St){let rt=null;return P.each(W,St,0,ut=>{let h=W-ut.x,y=St-ut.z;Math.abs(h*ut.c+y*ut.s)<ut.hw+.05&&Math.abs(-h*ut.s+y*ut.c)<ut.hd&&(rt=ut)}),rt}let L=32,M=new Map,F=(i.seed||1)*2654435761,Z=(W,St)=>{let rt=W-a.x,ut=St-a.z;return rt>-66&&rt<a.VL+30&&Math.abs(ut)<46};function k(W,St){let rt=ys(W,St),ut=M.get(rt);if(ut)return ut;ut={ci:W,cj:St,x:(W+.5)*L,z:(St+.5)*L,items:[],colls:[],on:!1};let h=dn((W*73856093^St*19349663^F)>>>0),y=W*L,D=St*L;for(let N=0;N<4;N++)for(let J=0;J<4;J++){let dt=y+(N+.5)*8+(h()-.5)*5,ot=D+(J+.5)*8+(h()-.5)*5,Bt=h(),X=h(),Zt=h(),K=h()*Ee;if(Math.abs(dt)>e-20||Math.abs(ot)>e-20||Z(dt,ot))continue;let Q=n.rad(dt,ot);if(Q<250&&(Q<n.RP+3||n.inMaze(dt,ot)||!E(dt,ot,1.4)||yt(dt,ot))||r.reserved(dt,ot)||at(dt,ot))continue;let H=c(dt,ot),zt=H-o;if(zt>-1&&zt<.35&&Bt>.6){let z=r.flora(dt,ot,zt,0,0);z.reed>0&&h()<z.reed&&ut.items.push({t:"reed",x:dt,y:H-.1,z:ot,s:.8+Zt*.6,ry:K});continue}if(zt<.35)continue;let ht=Math.hypot(c(dt+1.5,ot)-H,c(dt,ot+1.5)-H)/1.5,mt=r.flora(dt,ot,zt,r.coastS(dt,ot),ht);if(Q<250&&H>60&&(mt.t*=.35),Bt<mt.t){let z=mt.pine+mt.oak+mt.palm+mt.olive||1,S=X*z,Y;(S-=mt.pine)<0?Y="pine":(S-=mt.oak)<0?Y="oak":(S-=mt.palm)<0?Y="palm":Y="olive";let gt=Y==="pine"?.85+Zt*.4:Y==="oak"?.8+Zt*.4:Y==="palm"?.85+Zt*.35:.8+Zt*.5;ut.items.push({t:Y,x:dt,y:H-.12,z:ot,s:gt,ry:K}),ut.colls.push({x:dt,z:ot,r:(Y==="pine"?.34:Y==="oak"?.45:Y==="palm"?.28:.3)*gt,tall:1,tree:1})}else if(Bt<mt.t+mt.b)ut.items.push({t:"bush",x:dt,y:H,z:ot,s:.7+Zt*.9,ry:K});else if(Bt<mt.t+mt.b+mt.rock){let z=Zt>.7,S=z?1.6+X*2.4:.5+X*.9;ut.items.push({t:z?"boulder":"rock",x:dt,y:H-S*.25,z:ot,s:S,ry:K,rx:X*3,rz:Zt*3}),S>1.1&&ut.colls.push({x:dt,z:ot,r:S*.5})}}return M.set(rt,ut),ut}function at(W,St){if(typeof ie>"u")return!1;for(let rt of ie)for(let ut of rt.segs){let h=ut.B.x-ut.A.x,y=ut.B.z-ut.A.z,D=h*h+y*y,N=we(((W-ut.A.x)*h+(St-ut.A.z)*y)/D,0,1);if(Math.hypot(W-ut.A.x-h*N,St-ut.A.z-y*N)<7&&Me(ut.A.y,ut.B.y,N)-ut.sag*4*N*(1-N)-c(W,St)<28)return!0}return!1}let ft=null;function et(W,St,rt=170){if(ft&&Math.hypot(W-ft[0],St-ft[1])<12)return;ft=[W,St];let ut=Math.floor((W-rt)/L),h=Math.floor((W+rt)/L),y=Math.floor((St-rt)/L),D=Math.floor((St+rt)/L);for(let N=ut;N<=h;N++)for(let J=y;J<=D;J++){let dt=k(N,J);if(!dt.on){dt.on=!0;for(let ot of dt.colls)p.push(ot),d.add(ot),ot.tree&&_(ot,1)}}for(let N of M.values()){let J=Math.hypot(N.x-W,N.z-St);if(N.on&&J>rt+80){N.on=!1;for(let dt of N.colls)d.remove(dt),dt.tree&&_(dt,-1)}!N.on&&J>1900&&M.delete(ys(N.ci,N.cj))}}let Mt=(W,St)=>(x.get(ys(Math.floor(W/6),Math.floor(St/6)))||0)/3,it=ic(4);for(let W of n.bridges)for(let St=W.i;St<=W.j;St++)it.add(W.seg.pts[St]);function yt(W,St){let rt=null,ut=1/0;if(it.each(W,St,1,Zt=>{let K=(Zt.x-W)**2+(Zt.z-St)**2;K<ut&&(ut=K,rt=Zt)}),!rt||ut>2.5)return null;let h=rt.seg.pts,y=h[Math.min(rt.k+1,h.length-1)],D=h[Math.max(rt.k-1,0)],N=y.x-D.x,J=y.z-D.z,dt=Math.hypot(N,J)||1;N/=dt,J/=dt;let ot=(W-rt.x)*N+(St-rt.z)*J,Bt=Math.abs((W-rt.x)*-J+(St-rt.z)*N);if(Bt>rt.hw+.05)return{off:!0,p:rt,tx:N,tz:J,lat:Bt};let X=h[we(rt.k+(ot>0?1:-1),0,h.length-1)];return X.kind!=="bridge"&&Math.abs(ot)>.35?null:rt.gap&&Math.abs(ot)<.32?{hole:!0,p:rt,tx:N,tz:J,lat:Bt}:{y:Me(rt.y,X.y,we(Math.abs(ot)/.8,0,1)),p:rt,tx:N,tz:J,lat:Bt}}let lt={x0:n.x+n.RP-1,x1:n.x+n.RP+4.35,z0:n.z-1.65,z1:n.z+1.65,y:n.HS+.09};function Rt(W,St,rt,ut){let h=c(W,St),y=null,D=null,N=rt==null?1/0:rt+.7;if(rt!=null&&n.rad(W,St)<200){let ot=n.nearest(W,St,rt,1);ot&&ot.d<=ot.p.hw+.25&&ot.p.kind!=="bridge"&&ot.p.kind!=="stones"&&ot.y-.04<=N&&Math.abs(ot.y-.04-h)<7&&(h=ot.y-.04,y="path")}let J=yt(W,St);J&&J.y!=null&&J.y<=N&&J.y>h-.01&&(h=J.y,y="bridge",D=J);for(let ot of n.stones)Math.hypot(W-ot.x,St-ot.z)<ot.r+(ut?.5:0)&&ot.y<=N&&ot.y>h&&(h=ot.y,y="stone",D=ot);W>lt.x0&&W<lt.x1&&St>lt.z0&&St<lt.z1&&lt.y<=N&&lt.y>=h-.2&&(h=lt.y,y="deck");let dt=O(W,St);return dt&&dt.y<=N&&dt.y>h&&(h=dt.y,y="pier"),{y:h,kind:y,plat:D,b:J}}function vt(W,St,rt){let ut=n.rad(W,St);if(ut<n.RP+.5&&Math.abs(rt-n.HS)<.6)return"plaza";if(ut<200){let D=n.nearest(W,St,rt,1);if(D&&D.d<D.p.hw)return D.p.kind==="stones"?"trail":D.p.kind}let[h,y]=a.toL(W,St);if(h>-2&&h<a.VL+2&&Math.abs(y)<a.FLOOR+1)return"grass";if(ut>245){let D=rt-o,N=r.nearRoad(W,St);if(N&&N.d<N.hw+.3)return"trail";if(Math.hypot(W-r.fajr.x,St-r.fajr.z)<50)return"plaza";if(D<3.5&&r.coastS(W,St)<150)return"sand"}return u(W,St)>.85?"rock":Mt(W,St)>.55?"forest":"grass"}function Nt(W,St,rt){let[ut,h]=a.toL(W,St);if(ut>-6&&ut<a.VL+6&&Math.abs(h-a.riverZ(ut))<.95){let N=a.waterLevel(ut);if(rt<N+.3)return{kind:"river",level:N}}let y=n.stream,D=n.rad(W,St);if(D>245)return r.water(W,St,rt);if(D>y.r0+1&&D<y.r1-1&&Math.abs(In(y.a,n.ang(W,St)))*D<2.1){let J=n.Hnat(W,St)+.5;if(rt<J+.25)return{kind:"torrent",level:J,dx:Math.cos(y.a),dz:Math.sin(y.a)}}return null}let Yt=0;function $t(W,St,rt,ut){for(let h=0;h<2;h++){let y=++Yt;d.each(W,St,1,D=>{if(D._st===y||(D._st=y,ut&&!ut(D)))return;if(D.box){let Bt=W-D.x,X=St-D.z,Zt=Bt*D.c+X*D.s,K=-Bt*D.s+X*D.c,Q=Zt-we(Zt,-D.hw,D.hw),H=K-we(K,-D.hd,D.hd),zt=Q*Q+H*H;if(zt>=rt*rt)return;if(zt>1e-8){let ht=Math.sqrt(zt),mt=(rt-ht)/ht;Zt+=Q*mt,K+=H*mt}else{let ht=D.hw-Math.abs(Zt),mt=D.hd-Math.abs(K);ht<mt?Zt=(Zt<0?-1:1)*(D.hw+rt):K=(K<0?-1:1)*(D.hd+rt)}W=D.x+Zt*D.c-K*D.s,St=D.z+Zt*D.s+K*D.c;return}let N=W-D.x,J=St-D.z,dt=rt+D.r,ot=N*N+J*J;if(ot<dt*dt&&ot>1e-8){let Bt=Math.sqrt(ot),X=(dt-Bt)/Bt;W+=N*X,St+=J*X}})}return[we(W,-e+3,e-3),we(St,-e+3,e-3)]}let fe=(W,St,rt)=>d.each(W,St,1,ut=>ut.tall&&rt(ut)),Pt=[...r.rest.map(W=>({...W,y:c(W.x,W.z)})),...n.rest,...a.rest],ne=Math.PI/180,ce=W=>{let St=r.zones.find(rt=>rt.id===W);return[St.x,St.z]},ie=[{id:"fajr",name:"\u062D\u0628\u0644 \u0627\u0644\u0641\u062C\u0631",icon:"\u{1F305}",a:20,to:[r.fajr.x-330,r.fajr.z+110]},{id:"valley",name:"\u062D\u0628\u0644 \u0627\u0644\u0648\u0627\u062F\u064A",icon:"\u{1F98C}",a:128,to:[a.x-120,a.z-60]},{id:"huts",name:"\u062D\u0628\u0644 \u0627\u0644\u062D\u0637\u0651\u0627\u0628\u064A\u0646",icon:"\u{1FA93}",a:270,to:(([W,St])=>[W+70,St+40])(ce("huts"))}].map((W,St)=>{let rt=W.a*ne,ut={x:n.x+Math.cos(rt)*14.6,y:n.HS+4.6,z:n.z+Math.sin(rt)*14.6},h=W.to[0],y=W.to[1],D={x:h,y:c(h,y)+4.4,z:y},N=[ut,D],J=(Q,H,zt,ht)=>({x:Me(Q.x,H.x,zt),y:Me(Q.y,H.y,zt)-ht*4*zt*(1-zt),z:Me(Q.z,H.z,zt)});for(let Q=0;Q<6;Q++){let H=null;for(let ht=0;ht<N.length-1;ht++){let mt=N[ht],z=N[ht+1],S=Math.hypot(z.x-mt.x,z.z-mt.z),Y=S*.01;for(let gt=1;gt<40;gt++){let pt=gt/40,At=J(mt,z,pt,Y),Gt=At.y-3.4-c(At.x,At.z);(!H||Gt<H.c)&&(H={c:Gt,k:ht,t:pt,p:At})}}if(H.c>0)break;let zt={x:H.p.x,z:H.p.z,tower:!0};zt.y=c(zt.x,zt.z)+12,N.splice(H.k+1,0,zt)}let dt=[],ot=0;for(let Q=0;Q<N.length-1;Q++){let H=N[Q],zt=N[Q+1],ht=Math.hypot(zt.x-H.x,zt.y-H.y,zt.z-H.z);dt.push({A:H,B:zt,s0:ot,l:ht,sag:Math.hypot(zt.x-H.x,zt.z-H.z)*.01}),ot+=ht}let Bt=(D.x-ut.x)/Math.hypot(D.x-ut.x,D.z-ut.z),X=(D.z-ut.z)/Math.hypot(D.x-ut.x,D.z-ut.z),Zt={i:St,...W,S:ut,E:D,pts:N,segs:dt,L:ot,ux:Bt,uz:X,stand:{x:n.x+Math.cos(rt)*11.4,z:n.z+Math.sin(rt)*11.4},end:{x:h-Bt*2.5,z:y-X*2.5}};Zt.at=Q=>{Q=we(Q,0,ot);let H=dt[dt.length-1];for(let mt of dt)if(Q<=mt.s0+mt.l){H=mt;break}let zt=we((Q-H.s0)/H.l,0,1),ht=J(H.A,H.B,zt,H.sag);return ht.t=Q/ot,ht};let K=1e9;for(let Q=1;Q<200;Q++){let H=Zt.at(Q/200*ot);K=Math.min(K,H.y-2.2-c(H.x,H.z))}return Zt.clear=K,Zt}),_e=[];function De(W,St,rt,ut,h){let y=Math.cos(rt),D=Math.sin(rt),N=null,J=0;for(let Zt=h;Zt>ut;Zt-=1){let K=c(W+y*Zt,St+D*Zt),Q=c(W+y*(Zt-1),St+D*(Zt-1)),H=Q-K;H>J&&(J=H,N=Zt)}if(!N||J<.9)return null;let dt=N+1;for(;dt<h&&c(W+y*dt,St+D*dt)-c(W+y*(dt+1),St+D*(dt+1))>.55;)dt++;let ot=N-1;for(;ot>ut&&c(W+y*(ot-1),St+D*(ot-1))-c(W+y*ot,St+D*ot)>.55;)ot--;dt+=1.6,ot-=1.8;let Bt={x:W+y*dt,z:St+D*dt},X={x:W+y*ot,z:St+D*ot};return Bt.y=c(Bt.x,Bt.z),X.y=c(X.x,X.z),X.y-Bt.y<2.4||u(X.x,X.z)>1||u(Bt.x,Bt.z)>1||n.rad(Bt.x,Bt.z)<250&&(!E(Bt.x,Bt.z,1)||!E(X.x,X.z,1))?null:{bot:Bt,top:X,h:X.y-Bt.y}}let se=(W,St,rt,ut,h,y)=>{let D=De(W,St,rt*ne,ut,h);D&&_e.push({i:_e.length,name:y,...D})};for(let W of[35,140,215,320,250])se(n.x,n.z,W,43,54,"\u062D\u0632\u0627\u0645 \u0627\u0644\u0635\u062E\u0631");for(let W of[70,190,300,250])se(n.x,n.z,W,21,31,"\u0627\u0644\u062D\u0632\u0627\u0645 \u0627\u0644\u0639\u0627\u0644\u064A");for(let W of[[.95,760],[-2.2,900],[2.4,640],[-.45,1200],[1.9,1300],[-1.45,560]])se(n.x,n.z,W[0]/ne,W[1]-30,W[1]+30,"\u062C\u0631\u0641 \u0627\u0644\u062C\u0628\u0644");{let W=r.plateau;for(let St of[-60,30,150,210])se(W.x,W.z,St,W.r-140,W.r+150,"\u062C\u0631\u0641 \u0627\u0644\u0647\u0636\u0628\u0629")}return{map:i,HALF:e,M:n,V:a,H:c,slope:u,plains:l,surfaceAt:Rt,groundKind:vt,water:Nt,collide:$t,colliders:p,addColl:m,removeColl:W=>{d.remove(W);let St=p.indexOf(W);St>=0&&p.splice(St,1)},tallNear:fe,cgrid:d,veg:g,forestAt:Mt,restPoints:Pt,bridgeAt:yt,deck:lt,I:r,SEA:o,VC:L,vegCell:k,ensureVeg:et,platAt:O,zoneAt:r.zoneAt,zips:ie,anchors:_e}}var C_=14,R_=1,P_=1.15,I_=1.45,F_=1.6;function vf(i,t={}){let e=i.M,n=i.V,s=[],r=1,o={t:0,hero:null,rest:null,reached:new Set,coins:[],coinsGot:0,climb:{done:!1,time:0},summit:null,scope:!1,wind:0,vq:{camp:null,merW:{x:0,z:0},zoneW:{x:0,z:0},penW:{x:0,z:0},met:!1,called:!1,caught:!1,delivered:!1},carry:null,focus:null,seed:1},a=[],l=(...h)=>a.push(h.length===1?h[0]:h);function c(h,y,D,N={}){let J={id:r++,kind:h,x:y,z:D,y:i.H(y,D),vx:0,vy:0,vz:0,face:0,air:!1,peak:0,r:.4,speed:0,run:!1,hopPh:0,landT:0,stun:0,rot:0,surf:null,...N};return s.push(J),J}let d=[...e.beasts,...i.I.beasts.map(h=>({kind:h.kind,home:{x:h.x,z:h.z,y:i.H(h.x,h.z)}}))].map(h=>c(h.kind,h.home.x+(h.ox||0),h.home.z,{home:h.home,r:h.kind==="boar"?.52:.44,state:"idle",t:Math.random()*2,cool:0,tx:h.home.x,tz:h.home.z,charge:null,ph:0,face:Math.random()*Ee})),p=c("gazelle",n.x+60,n.z,{r:.42,state:"graze",t:0,gt:2.5,sus:0,stamina:4,ph:0,triedLeap:!1,tx:0,tz:0,fx:1,fz:0,stuck:0,hy:0}),m=c("merchant",n.x+20,n.z,{r:.42});function g(h,y,D,N,J,dt={}){let ot=h.air?3:10,Bt=h.air?Math.max(N,h.airSpd||0):N,X=dt.pushX||0,Zt=dt.pushZ||0;h.vx=je(h.vx,y*Bt+X,ot,J),h.vz=je(h.vz,D*Bt+Zt,ot,J);let K=h.x,Q=h.z,H=h.x+h.vx*J,zt=h.z+h.vz*J;if([H,zt]=i.collide(H,zt,h.r,dt.collFilter),h.air){h.vy-=C_*J;let ht=h.y+h.vy*J,mt=i.surfaceAt(H,zt,Math.max(h.y,ht)+.05,!0);if(mt.y>h.y+.45&&(H=h.x,zt=h.z,h.vx*=-.15,h.vz*=-.15,mt=i.surfaceAt(H,zt,h.y+.05,!0)),ht<=mt.y&&h.vy<=0){let z=(h.peak||h.y)-mt.y;if(h.x=H,h.z=zt,h.y=mt.y,h.air=!1,h.vy=0,h.landT=.25,h.surf=mt.kind,h.plat=mt.plat,mt.kind==="stone"&&mt.plat){let S=Math.hypot(h.x-mt.plat.x,h.z-mt.plat.z),Y=.35;S>Y&&(h.x=mt.plat.x+(h.x-mt.plat.x)/S*Y,h.z=mt.plat.z+(h.z-mt.plat.z)/S*Y),h.vx*=.2,h.vz*=.2}h.onLand&&h.onLand(z,mt)}else h.x=H,h.z=zt,h.y=ht,h.peak=Math.max(h.peak||ht,ht)}else{if(h.surf==="bridge"){let pt=i.bridgeAt(H,zt);if(pt&&pt.off){let At=H-h.x,Gt=zt-h.z,Lt=At*pt.tx+Gt*pt.tz;H=h.x+pt.tx*Lt,zt=h.z+pt.tz*Lt}}else if(h.surf==="deck"){let pt=i.deck;zt=we(zt,pt.z0+.35,pt.z1-.35),H=Math.min(H,pt.x1-.35)}let ht=i.surfaceAt(H,zt,h.y+.4),mt=Math.hypot(H-h.x,zt-h.z),z=ht.y-h.y,S=ht.kind==="path"?.75:.35,Y=h.boots?I_:R_;if(mt>1e-5&&z>S&&z>mt*Y){let pt=(Gt,Lt)=>{let Ot=i.surfaceAt(Gt,Lt,h.y+.4),ee=Math.hypot(Gt-h.x,Lt-h.z),pe=Ot.y-h.y;return pe<=(Ot.kind==="path"?.75:.35)||pe<=ee*Y?[Gt,Lt,Ot]:null},At=pt(H,h.z)||pt(h.x,zt);At?(H=At[0],zt=At[1],ht=At[2]):(H=h.x,zt=h.z,ht=i.surfaceAt(H,zt,h.y),h.vx*=.3,h.vz*=.3)}let gt=Math.hypot(H-h.x,zt-h.z);if(ht.y<h.y-Math.max(.45,gt*1.45)?dt.cautious?(H=h.x,zt=h.z,h.vx=h.vz=0,ht=i.surfaceAt(H,zt,h.y),h.y=ht.y):(h.air=!0,h.vy=Math.min(0,h.vy),h.peak=h.y,h.x=H,h.z=zt):(h.x=H,h.z=zt,h.y=ht.y,h.surf=ht.kind,h.plat=ht.plat),!h.air&&!h.surf&&!dt.noSlide){let pt=i.H(h.x+.4,h.z)-i.H(h.x-.4,h.z),At=i.H(h.x,h.z+.4)-i.H(h.x,h.z-.4),Gt=Math.hypot(pt,At)/.8,Lt=h.boots?F_:P_;if(Gt>Lt){let Ot=(Gt-Lt)*9*J;h.vx-=pt/.8*Ot,h.vz-=At/.8*Ot}}}h.speed=Math.hypot(h.x-K,h.z-Q)/J}function E(h,y){let D=c("hero",y.x,y.z,{r:.5,skin:h,hp:100,maxHp:100,st:100,stT:0,swim:!1,lastHurt:-99,mode:"walk",chute:0,airSpd:0,water:null,inTorrent:0,faintT:0,face:y.face||0});return D.y=y.y!=null?y.y:i.H(y.x,y.z),D.onLand=(N,J)=>{l(J.kind==="stone"?"landStone":"land"),N>4.2&&x(D,Math.round((N-4.2)*14),"fall")},D}function x(h,y,D){h.kind!=="hero"||h.mode!=="walk"||y<=0||(h.hp=Math.max(0,h.hp-y),h.lastHurt=o.t,l(["hurt",y,D,h.hp]),h.hp<=0&&(h.mode="faint",h.faintT=0,h.vx=h.vz=0,l(["faint",D])))}function _(h,y,D){y>0?(h.st=Math.max(0,h.st-y*D),h.stT=0,h.st<=0&&!h.outBreath&&(h.outBreath=!0,l("breath"))):(h.stT+=D,h.stT>.8&&(h.st=Math.min(100,h.st+D*(h.speed<.3?22:13)))),h.st>30&&(h.outBreath=!1)}function A(h,y,D,N,J,dt){h.swim=!0,h.air=!1,h.vy=0;let ot=Math.hypot(y.mx||0,y.mz||0),Bt=ot>1e-4?y.mx/ot:0,X=ot>1e-4?y.mz/ot:0,Zt=J<.08?0:dt?2.5:1.6;h.vx=je(h.vx,Bt*Zt,4,D),h.vz=je(h.vz,X*Zt,4,D);let K=h.x+h.vx*D,Q=h.z+h.vz*D;i.I.coastS(K,Q)<-700?(K=h.x,Q=h.z,h.vx*=-.3,h.vz*=-.3,h.farWarn||(h.farWarn=!0,l("farSea"))):h.farWarn=!1,[K,Q]=i.collide(K,Q,h.r),h.x=K,h.z=Q,h.y=Math.max(N.level-.7+Math.sin(o.t*2.2)*.05,i.H(K,Q)),h.speed=Math.hypot(h.vx,h.vz),h.surf="water",h.speed>.3&&(h.face=Rn(h.face,Math.atan2(h.vz,h.vx),6,D)),_(h,J>.08?dt?9:4:1.5,D),h.st<=0?(h.sinkT=(h.sinkT||0)+D,h.sinkT>1&&(h.sinkT=0,x(h,8,"water"))):h.sinkT=0;let H=h.hopPh||0;h.hopPh=h.speed<.3?0:H+h.speed*D*1.6,h.hopPh&&Math.floor(H/Math.PI)!==Math.floor(h.hopPh/Math.PI)&&l("splash"),o.t-h.lastHurt>6&&h.hp<h.maxHp&&(h.hp=Math.min(h.maxHp,h.hp+D*3))}function P(h,y){let D=o.rest||i.restPoints[0];if(Object.assign(h,{x:D.x,z:D.z,y:i.H(D.x,D.z),vx:0,vy:0,vz:0,air:!1,stun:0,rot:0,mode:"walk",face:D.face||0,inTorrent:0,surf:null,st:100,swim:!1}),D.plaza&&(h.y=e.HS),y==="faint"){h.hp=h.maxHp;let N=Math.ceil(o.coinsGot*.2);o.coinsGot-=N,l(["respawn",D.name,N])}else l(["respawn",D.name,0]);o.focus=null}function R(h){let y=o.hero;o.zip={z:h,s:0,v:4},o.scope=!1,y.mode="zip",y.air=!0,y.vy=0,y.rot=0,l(["zipStart",h.name,h.icon])}function O(h,y){let D=o.zip,N=D.z,J=N.at(D.s),dt=N.at(D.s+1.5),ot=(dt.y-J.y)/1.5;D.v+=(-9.8*ot*.85-.0016*D.v*D.v)*y,D.v=we(D.v,3.5,27);let Bt=le(N.L-70,N.L-12,D.s);Bt>0&&(D.v=Me(D.v,3.2,we(Bt*y*4,0,1))),D.s+=D.v*y,D.t=(D.t||0)+y;let X=N.at(D.s),Zt=N.at(D.s+2);if(h.x=X.x,h.y=X.y-2.1,h.z=X.z,h.face=Math.atan2(Zt.z-X.z,Zt.x-X.x),h.vx=Math.cos(h.face)*D.v,h.vz=Math.sin(h.face)*D.v,h.speed=D.v,D.s>=N.L-.4){let K=N.end;Object.assign(h,{x:K.x,z:K.z,y:i.H(K.x,K.z),mode:"walk",air:!1,vx:0,vz:0,vy:0,surf:null,peak:0}),o.zip=null,l(["zipEnd",N.name])}}function L(h){let y=o.hero;o.climbing={a:h,t:0,dur:Math.max(3,h.h/2.6)},y.mode="climb",y.vx=y.vz=0,y.rot=0,y.face=Math.atan2(h.top.z-h.bot.z,h.top.x-h.bot.x),l(["climbStart",h.name,Math.round(h.h)])}function M(h,y){let D=o.climbing,N=D.a;D.t+=y;let J=we(D.t/D.dur,0,1),dt=le(0,1,J);h.x=Me(N.bot.x,N.top.x,le(.75,1,J)),h.z=Me(N.bot.z,N.top.z,le(.75,1,J)),h.y=Me(N.bot.y,N.top.y,dt)+Math.sin(J*Math.PI)*.4,_(h,5,y),J>=1&&(Object.assign(h,{x:N.top.x,z:N.top.z,y:i.H(N.top.x,N.top.z),mode:"walk",air:!1,surf:null}),o.climbing=null,l(["climbEnd",N.name]))}function F(h){let y=o.hero;o.fishing={t:0,bite:3+Math.random()*4.5,kind:h.kind},y.mode="fish",y.vx=y.vz=0,y.rot=0,y.air=!1,l("fishStart")}function Z(h,y){let D=o.fishing;D.t+=y,D.t>=D.bite&&(o.fish=(o.fish||0)+1,h.mode="walk",o.fishing=null,l(["fish",o.fish]))}function k(h){let y=h.x+Math.cos(h.face)*3.5,D=h.z+Math.sin(h.face)*3.5,N=i.H(y,D),J=i.water(y,D,N+.05);return J&&(J.kind==="lake"||J.kind==="sea"||J.kind==="marsh")&&J.level-N>.3?J:null}function at(h,y,D){if(h.mode==="faint"){h.faintT+=D,h.faintT>1.6&&P(h,"faint");return}if(h.mode==="zip")return O(h,D);if(h.mode==="climb")return M(h,D);if(h.mode==="fish")if((y.mag||0)>.3)h.mode="walk",o.fishing=null,l("fishStop");else return Z(h,D);if(h.mode!=="walk")return ft(h,y,D);if(o.scope){h.vx=h.vz=0,h.speed=0;return}let N=we(y.mag||0,0,1);h.stun>0&&(h.stun-=D,N=0);let J=N>.62&&!y.sneak,dt=N<.08?0:J?5.6:2.3*we(N/.62,.4,1);i.ensureVeg(h.x,h.z);let ot=i.water(h.x,h.z,h.y);h.water=ot?ot.kind:null;let Bt=ot&&(ot.kind==="sea"||ot.kind==="lake"||ot.kind==="marsh")?ot.level-i.H(h.x,h.z):0,X=h.st<=.5;if(X&&dt>2.4&&(dt=2.4),Bt>1.15&&!h.air)return A(h,y,D,ot,N,J&&!X);Bt>.25&&(dt*=Me(1,.5,we(Bt/1.15,0,1))),h.swim=!1;let Zt=h.air?null:h.surf&&h.surf!=="path"?h.surf:i.groundKind(h.x,h.z,h.y);Zt==="forest"?dt*=.78:Zt==="rock"&&(dt*=.85),ot&&ot.kind==="river"&&(dt*=.6);let K=0,Q=0;if(o.summit&&o.summit.wind>0&&(K=o.summit.wind*1.6,Q=o.summit.wind*.48),ot&&ot.kind==="torrent"&&!h.air){if(K+=ot.dx*3.4,Q+=ot.dz*3.4,h.inTorrent+=D,h.inTorrent>.9){l("swept"),x(h,12,"water"),h.mode==="walk"&&P(h,"swept");return}}else h.inTorrent=0;if(y.jump&&!h.air&&h.stun<=0){h.air=!0,h.vy=6,h.peak=h.y,l("jump");let gt=Math.hypot(h.vx,h.vz);gt>.4&&gt<3.4&&(h.vx*=3.4/gt,h.vz*=3.4/gt),h.airSpd=N>.08?Math.max(3.4,gt):0}let H=Math.hypot(y.mx||0,y.mz||0),zt=H>1e-4?y.mx/H:0,ht=H>1e-4?y.mz/H:0,mt=h.y;g(h,zt,ht,dt,D,{pushX:K,pushZ:Q});let z=!h.air&&h.speed>.5?(h.y-mt)/(h.speed*D):0,S=(J&&h.speed>3?9:0)+(z>.3?7*we((z-.3)/.4,0,1)*(h.boots?.55:1):0);_(h,S,D),h.run=J&&h.speed>3,h.speed>.3&&!h.air?h.face=Rn(h.face,Math.atan2(h.vz-Q,h.vx-K),12,D):h.air&&Math.hypot(h.vx,h.vz)>.5&&(h.face=Rn(h.face,Math.atan2(h.vz,h.vx),8,D)),h.air&&h.vy<-7?h.rot+=D*5:h.air||(h.rot*=Math.pow(.001,D));let Y=h.hopPh;h.hopPh=h.speed<.3||h.air?0:h.hopPh+h.speed*D*2.1,h.hopPh&&Math.floor(Y/Math.PI)!==Math.floor(h.hopPh/Math.PI)&&l(h.water?"splash":["step",h.run,Zt]),h.landT=Math.max(0,h.landT-D),o.t-h.lastHurt>6&&h.hp<h.maxHp&&(h.hp=Math.min(h.maxHp,h.hp+D*3));for(let gt of i.restPoints)(!gt.dyn||gt.on)&&Math.hypot(h.x-gt.x,h.z-gt.z)<(gt.plaza?e.RP-1:gt.fire?6:3.2)&&Math.abs(h.y-(gt.plaza?e.HS:gt.y))<2.5&&o.rest!==gt&&(o.rest=gt,o.reached.has(gt.id)||(o.reached.add(gt.id),(gt.flag||gt.fire||gt.id==="valley")&&l(["rest",gt.name,gt.id])));for(let gt of o.coins)!gt.taken&&Math.abs(gt.x-h.x)<1.25&&Math.abs(gt.z-h.z)<1.25&&Math.hypot(gt.x-h.x,gt.z-h.z)<1&&Math.abs(gt.y-(h.y+.6))<1.2&&(gt.taken=!0,o.coinsGot++,l(["coin",gt]));!o.summit&&e.rad(h.x,h.z)<e.RP-1&&Math.abs(h.y-e.HS)<1&&!o.carry&&(o.summit={t:0,phase:"wait",wind:0},o.climb.done?l(["summit",0,!1]):(o.climb.done=!0,o.climb.time=o.t-(o.climb.t0||0),l(["summit",o.climb.time,!0]))),o.summit&&o.summit.phase==="wait"&&e.rad(h.x,h.z)>e.RP+8&&(o.summit=null)}function ft(h,y,D){let N=o.carry;if(h.mode==="lift"){N.t+=D;let J=N.t;h.x=N.from[0]+J*J*2.2,h.z=N.from[2]+J*J*.66,h.y=N.from[1]+J*J*3.2+Math.sin(J*6)*.2,h.rot+=D*(4+J*3),J>2.6&&(h.mode="carry",N.t=0,N.p0=[h.x,h.y,h.z],l("carry"));return}if(h.mode==="carry"){N.t+=D;let J=we(N.t/N.dur,0,1),dt=J*J*(3-2*J),ot=[N.p0,[e.x+80,e.HS+48,e.z+14],[n.x-50,n.VF+78,n.z],N.end],Bt=Q=>{let H=1-dt;return H*H*H*ot[0][Q]+3*H*H*dt*ot[1][Q]+3*H*dt*dt*ot[2][Q]+dt*dt*dt*ot[3][Q]},X=Bt(0),Zt=Bt(1),K=Bt(2);h.face=Math.atan2(K-h.z,X-h.x),h.x=X,h.y=Zt,h.z=K,h.rot+=D*Me(9,2,J),o.wind=Me(1,.25,J),J>=1&&(h.mode="glide",h.vy=-3,h.vx=h.vz=0,h.chute=0,l("chute"),et(h));return}if(h.mode==="glide"){h.chute=Math.min(1,h.chute+D*3),h.rot*=Math.pow(.015,D),h.vy+=(-3.2-h.vy)*Math.min(1,D*3);let J=we(y.mag||0,0,1),dt=Math.hypot(y.mx||0,y.mz||0),ot=dt>1e-4?y.mx/dt:0,Bt=dt>1e-4?y.mz/dt:0;h.vx=je(h.vx,ot*4.6*J,3,D),h.vz=je(h.vz,Bt*4.6*J,3,D),h.x+=h.vx*D,h.z+=h.vz*D,h.y+=h.vy*D,[h.x,h.z]=i.collide(h.x,h.z,.4,Zt=>Zt.tall),J>.1&&(h.face=Rn(h.face,Math.atan2(Bt,ot),5,D));for(let Zt of o.coins)!Zt.taken&&Math.hypot(Zt.x-h.x,Zt.z-h.z)<1.25&&Math.abs(Zt.y-(h.y+.55))<1.3&&(Zt.taken=!0,o.coinsGot++,l(["coin",Zt]));o.wind=Math.max(0,o.wind-D*.2);let X=i.surfaceAt(h.x,h.z,h.y+.5);h.y<=X.y&&(h.y=X.y,h.vy=0,h.rot=0,h.chute=0,h.landT=.35,h.mode="walk",h.air=!1,h.surf=X.kind,o.carry=null,o.drop={x:h.x+Math.cos(h.face)*1.2,z:h.z+Math.sin(h.face)*1.2,t:0,face:h.face},l(["landChute"]))}}function et(h){o.coins=o.coins.filter(y=>!y.sky);for(let y=0;y<20;y++){let D=y*.62;o.coins.push({x:h.x+Math.cos(D)*3.2,z:h.z+Math.sin(D)*3.2,y:h.y-4-y*1.55,sky:!0})}}function Mt(h){let y=o.summit;if(!(!y||o.carry)){if(y.t+=h,y.phase==="wait"&&y.t>=45&&o.windStory&&(y.phase="wind",y.t=0,l("windStart")),y.phase==="wind"&&(y.wind=we(y.t/7,0,1),o.wind=y.wind,y.t>8.5)){let D=o.hero;o.scope=!1;let[N,J]=it();o.carry={t:0,from:[D.x,D.y,D.z],dur:6.2,end:[n.x+N,n.VF+i.V.H0(N,J)+34,n.z+J]},D.mode="lift",D.air=!0,y.phase="lift",l("lift")}y.phase==="lift"&&!o.carry&&(o.summit=null)}}function it(){let h=dn(o.seed*7+13>>>0),y=(N,J)=>!i.tallNear(n.x+N,n.z+J,dt=>Math.hypot(dt.x-n.x-N,dt.z-n.z-J)<4.5+dt.r),D=null;for(let N=0;N<80;N++){let J=32+h()*56,dt=h()<.5?-1:1,ot=we(n.riverZ(J)+dt*(4.5+h()*3),-n.FLOOR+2.5,n.FLOOR-2.5);if(!(Math.hypot(J-o.vq.camp.x,ot-o.vq.camp.z)<16)){if(y(J,ot))return[J,ot];D||(D=[J,ot])}}return D||[60,n.riverZ(60)+5]}function yt(){o.summit&&o.summit.phase==="wait"&&o.windStory&&(o.summit.t=45)}function lt(h){let y=o.hero,D=y.mode==="walk"&&!o.summit;for(let N of d){N.t+=h,N.cool=Math.max(0,N.cool-h);let J=y.x-N.x,dt=y.z-N.z,ot=Math.hypot(J,dt),Bt=Math.abs(y.y-N.y);if(ot>120&&N.state==="idle"){N.vx=N.vz=0,N.speed=0;continue}let X=y.run?14:y.speed>.4?9:5.5,Zt=N.kind==="wolf",K=(Q,H,zt)=>{let ht=Q-N.x,mt=H-N.z,z=Math.hypot(ht,mt);return z<.05?(g(N,0,0,0,h,{cautious:!0}),z):(g(N,ht/z,mt/z,zt,h,{cautious:!0,collFilter:S=>!S.hedge||!0}),N.speed>.2&&(N.face=Rn(N.face,Math.atan2(N.vz,N.vx),8,h)),z)};switch(N.state){case"idle":if(D&&N.cool<=0&&ot<X&&Bt<3){N.state="notice",N.t=0,l([Zt?"growl":"grunt",N.kind]);break}if(N.t>3+Math.random()*3){N.t=0;let Q=Math.random()*Ee;N.tx=N.home.x+Math.cos(Q)*5,N.tz=N.home.z+Math.sin(Q)*5}Math.hypot(N.tx-N.x,N.tz-N.z)>.6?K(N.tx,N.tz,1):K(N.x,N.z,0);break;case"notice":if(K(N.x,N.z,0),N.face=Rn(N.face,Math.atan2(dt,J),10,h),!D){N.state="return";break}if(N.t>(Zt?.6:.9)){if(N.state=Zt?"chase":"charge",N.t=0,!Zt){let Q=ot||1;N.charge=[J/Q,dt/Q]}l([Zt?"howl":"grunt",N.kind])}break;case"chase":K(y.x,y.z,4.7),(!D||ot>22||N.t>7||Math.hypot(N.x-N.home.x,N.z-N.home.z)>32)&&(N.state="return",N.cool=3);break;case"charge":{let Q=N.x,H=N.z;g(N,N.charge[0],N.charge[1],7.8,h,{cautious:!0}),N.face=Math.atan2(N.charge[1],N.charge[0]),(Math.hypot(N.x-Q,N.z-H)<7.8*h*.3||N.t>1.8)&&(N.state=D&&ot<12&&N.t<6?"notice":"return",N.t=0);break}case"return":(K(N.home.x,N.home.z,2.2)<1||N.t>20)&&(N.state="idle",N.t=0);break}if(N.ph+=h*(N.state==="chase"||N.state==="charge"?16:N.speed>.3?8:0),(N.state==="chase"||N.state==="charge")&&ot<1.25&&Bt<1.4&&y.stun<=0&&D){let Q=ot||1;y.vx=J/Q*6,y.vz=dt/Q*6,y.stun=.9,y.landT=.3,N.state="return",N.cool=6;let H=Zt?18:25;l(["bitten",N.kind,H]),x(y,H,N.kind)}}}let Rt=(h,y)=>[h-n.x,y-n.z],vt={mer:[1.05,-.5],zone:[2.35,.35],pen:[-4.45,-1.75]},Nt=[[-1.1,-2.8,1.25],[0,-2.8,1.3],[1.1,-2.8,1.25],[-.78,-.8,.55],[4,-2.4,.62],[1.95,-1.8,.35],[-2.05,-1.6,.4],[1.68,-.25,.14],[-1.68,-.25,.14],[1.05,-.5,.42],[-5.8,-1,.3],[-5.8,-1.8,.3],[-5.8,-2.6,.3],[-5.1,-2.9,.3],[-4.45,-2.9,.3],[-3.8,-2.9,.3],[-3.1,-2.6,.3],[-3.1,-1.8,.3],[-3.1,-1,.3]],Yt=[],$t={id:"camp",x:0,z:0,y:0,name:"\u062E\u064A\u0645\u0629 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",face:0,flag:!1,dyn:!0,on:!1};i.restPoints.push($t);function fe(h,y,D){let N=Math.cos(h.rot),J=Math.sin(h.rot);return{x:n.x+h.x+y*N+D*J,z:n.z+h.z-y*J+D*N}}let Pt=80*Math.PI/180,ne=60*Math.PI/180;function ce(){for(let N of Yt)i.removeColl(N);let h=e.x+Math.cos(Pt)*8.7,y=e.z+Math.sin(Pt)*8.7,D=Math.atan2(e.z-y,e.x-h);o.vq.camp={summit:!0,rot:Math.PI/2-D,base:e.HS-n.VF,x:0,z:0},o.vq.merW={x:h,z:y},o.vq.zoneW={x:e.x+Math.cos(ne)*7.2,z:e.z+Math.sin(ne)*7.2},o.vq.penW={x:e.x+Math.cos(ne+.25)*9.2,z:e.z+Math.sin(ne+.25)*9.2},Yt=[i.addColl({x:e.x+Math.cos(Pt)*10,z:e.z+Math.sin(Pt)*10,r:1.1})],Object.assign(m,{x:h,z:y,y:e.HS,face:D})}function ge(h){h.state="flee",h.t=0,h.stuck=0;let y=o.hero,D=Math.hypot(h.x-y.x,h.z-y.z)||1;h.fx=(h.x-y.x)/D,h.fz=(h.z-y.z)/D,l("snort")}function ie(h){let y=p,D=o.hero,N=o.vq;y.t+=h;let J=D.x-y.x,dt=D.z-y.z,ot=Math.hypot(J,dt)||.001,Bt=Math.atan2(dt,J);if(ot>140&&!N.caught){y.vx=y.vz=0;return}let X=D.mode==="walk"?D.speed:0,Zt=Math.hypot(y.vx,y.vz)>.2;if(y.ph+=h*(y.state==="flee"?15:Zt?8:0),y.state!=="flee"&&y.state!=="leap"&&(y.stamina=Math.min(4,y.stamina+h*(y.state==="tired"?.5:.8))),!N.caught&&["graze","look","walk","alert"].includes(y.state)){let ht=ot<22?1+(1-ot/22)*1.6:0,mt=y.state!=="graze",z=X>4?mt?2.6:1.4:X>.5?mt?1.1:.06:0;y.sus=we(y.sus+(z*ht>0?z*ht:-.3)*h,0,1)}let K=(ht,mt)=>{let[z,S]=Rt(ht,mt);return i.slope(ht,mt)<.7&&z>1&&z<n.VL-1&&Math.abs(S)<n.FLOOR+1},Q=(ht,mt,z)=>{let S=ht-y.x,Y=mt-y.z,gt=Math.hypot(S,Y);if(gt<.05)return y.vx=y.vz=0,gt;y.vx=je(y.vx,S/gt*z,6,h),y.vz=je(y.vz,Y/gt*z,6,h);let pt=y.x+y.vx*h,At=y.z+y.vz*h;return[pt,At]=i.collide(pt,At,.42),K(pt,At)&&(y.x=pt,y.z=At),y.face=Rn(y.face,Math.atan2(y.vz,y.vx),7,h),gt},[H,zt]=Rt(y.x,y.z);switch(y.state){case"graze":if(y.vx=y.vz=0,y.sus>.5)y.state="alert",y.t=0,l("snort");else if(y.t>y.gt)if(y.t=0,Math.random()<.72)y.state="look";else for(let ht=0;ht<12;ht++){let mt=H+(Math.random()-.5)*14,z=zt+(Math.random()-.5)*10;if(n.onFloor(mt,z)&&Math.abs(z-n.riverZ(mt))>1.6){y.tx=n.x+mt,y.tz=n.z+z,y.state="walk";break}}break;case"look":y.vx=y.vz=0,ot<26&&(y.face=Rn(y.face,Bt,4,h)),y.sus>.5?(y.state="alert",y.t=0,l("snort")):y.t>1.1&&(y.state="graze",y.t=0,y.gt=1.4+Math.random()*1.8);break;case"walk":if(y.sus>.5){y.state="alert",y.t=0,y.vx=y.vz=0,l("snort");break}(Q(y.tx,y.tz,1.1)<.4||y.t>6)&&(y.state="graze",y.t=0,y.vx=y.vz=0,y.gt=1.4+Math.random()*1.8);break;case"alert":y.vx=y.vz=0,y.face=Rn(y.face,Bt,8,h),y.sus>=1||ot<1.6?ge(y):y.sus<.3&&(y.state="graze",y.t=0,y.gt=1.2+Math.random()*1.2);break;case"flee":{y.stamina-=h;let ht=8.2*(.55+.45*Math.max(0,y.stamina)/4),mt=-J/ot,z=-dt/ot;Math.abs(zt)>5.5&&(z-=Math.sign(zt)*(Math.abs(zt)-5.5)*.45),H<8&&(mt+=(8-H)*.35),H>n.VL-8&&(mt-=(H-n.VL+8)*.35);let S=Math.hypot(mt,z)||1;y.fx=je(y.fx,mt/S,5,h),y.fz=je(y.fz,z/S,5,h);let Y=Math.hypot(y.fx,y.fz)||1,gt=y.fx/Y,pt=y.fz/Y,At=y.x+gt*ht*h,Gt=y.z+pt*ht*h;[At,Gt]=i.collide(At,Gt,.42);let Lt=Math.hypot(At-y.x,Gt-y.z);K(At,Gt)&&(y.vx=(At-y.x)/h,y.vz=(Gt-y.z)/h,y.x=At,y.z=Gt),y.stuck=Lt<ht*h*.35?y.stuck+h:0,y.face=Rn(y.face,Math.atan2(pt,gt),10,h),y.stuck>.35&&ot<10?(y.state="cornered",y.t=0,y.vx=y.vz=0):y.stamina<=0?(y.state="tired",y.t=0,l("tired")):ot>32&&y.t>1.5&&(y.state="graze",y.t=0,y.vx=y.vz=0,y.sus=.35,y.gt=1.5);break}case"tired":ot<9?Q(y.x-J/ot*2,y.z-dt/ot*2,2.3):y.vx=y.vz=0,y.stamina>3.2&&y.t>2.2&&(y.sus=.45,ot<6?ge(y):(y.state="graze",y.t=0));break;case"cornered":if(y.vx=y.vz=0,y.face=Rn(y.face,Bt,8,h),!y.triedLeap&&ot<4&&y.t>.4){let ht=D.x+J/ot*4.5,mt=D.z+dt/ot*4.5,[z,S]=Rt(ht,mt);n.onFloor(z,S)||(ht=D.x+J/ot*3,mt=n.z+we(Rt(0,D.z+dt/ot*3)[1],-(n.FLOOR-2),n.FLOOR-2)),Object.assign(y,{triedLeap:!0,state:"leap",t:0,from:[y.x,y.z],to:[ht,mt]}),l("snort")}else y.t>4&&ot>9&&(y.state="graze",y.t=0,y.sus=.4);break;case"leap":{let ht=Math.min(1,y.t/.75);y.x=Me(y.from[0],y.to[0],ht),y.z=Me(y.from[1],y.to[1],ht),y.hy=Math.sin(ht*Math.PI)*1.5,y.vx=(y.to[0]-y.from[0])/.75,y.vz=(y.to[1]-y.from[1])/.75,y.face=Math.atan2(y.vz,y.vx),ht>=1&&(y.hy=0,ge(y));break}case"follow":{let ht=D.x-Math.cos(D.face)*1.45,mt=D.z-Math.sin(D.face)*1.45,z=Math.hypot(ht-y.x,mt-y.z);if(z>12)y.x=ht,y.z=mt;else if(z>.08){y.vx=je(y.vx,(ht-y.x)/z*Math.min(7,z*3.2),6,h),y.vz=je(y.vz,(mt-y.z)/z*Math.min(7,z*3.2),6,h);let S=y.x+y.vx*h,Y=y.z+y.vz*h;[S,Y]=i.collide(S,Y,.42),y.x=S,y.z=Y,y.face=Rn(y.face,Math.atan2(y.vz,y.vx),7,h)}else y.vx=y.vz=0;break}case"pen":{let ht=N.penW,mt=Math.hypot(ht.x-y.x,ht.z-y.z);mt>.3?(y.vx=(ht.x-y.x)/mt*1.3,y.vz=(ht.z-y.z)/mt*1.3,y.x+=y.vx*h,y.z+=y.vz*h,y.face=Rn(y.face,Math.atan2(y.vz,y.vx),6,h)):y.vx=y.vz=0;break}}y.y=i.H(y.x,y.z)+(y.hy||0),!N.caught&&D.mode==="walk"&&["graze","look","walk","alert","tired","cornered"].includes(y.state)&&ot<1.55&&(y.hy||0)<.25&&Math.abs(D.y-y.y)<1.5&&(N.caught=!0,y.state="follow",y.vx=y.vz=0,y.sus=0,o.focus={t:2.2,dist:5.2,yaw:Math.atan2(y.z-D.z,y.x-D.x)-Math.PI/2},l("catch"))}function _e(h){let y=o.hero,D=o.vq;if(y.mode!=="walk")return;let N=Math.hypot(y.x-D.merW.x,y.z-D.merW.z),J=D.camp,dt=Math.atan2(D.merW.z-e.z,D.merW.x-e.x);!D.called&&N<24&&Math.abs(y.y-m.y)<8&&(D.called=!0,l("call")),!D.met&&N<4.2&&(D.met=!0,o.focus={t:3.4,dist:6.2,x:(y.x+D.merW.x)/2,z:(y.z+D.merW.z)/2,yaw:dt,talk:!0},l("meet")),D.caught&&!D.delivered&&Math.hypot(y.x-D.zoneW.x,y.z-D.zoneW.z)<1.7&&(D.delivered=!0,p.state="pen",o.req={kind:"fish",need:2,done:!1},o.focus={t:4.6,dist:6.6,x:(y.x+D.merW.x)/2,z:(y.z+D.merW.z)/2,yaw:dt,talk:!0},l("deliver"))}function De(h,y={}){o.seed=(y.seed!=null?y.seed:Math.random()*4294967295)>>>0;let D=dn(o.seed);s.length=0,s.push(...d,p,m);for(let Bt of d)Object.assign(Bt,{x:Bt.home.x,z:Bt.home.z,y:Bt.home.y,vx:0,vz:0,vy:0,air:!1,state:"idle",cool:0,t:Math.random()*2});ce();let N=60,J=0;for(let Bt=0;Bt<400;Bt++){let X=6+D()*(n.VL-12),Zt=(D()-.5)*2*(n.FLOOR-2.5);if(!(X<22||Math.abs(Zt-n.riverZ(X))<2.2||!n.onFloor(X,Zt))){N=X,J=Zt;break}}Object.assign(p,{x:n.x+N,z:n.z+J,vx:0,vz:0,state:"graze",t:0,gt:2.5,sus:0,stamina:4,triedLeap:!1,hy:0,face:D()*Ee}),p.y=i.H(p.x,p.z),Object.assign(o.vq,{met:!1,called:!1,caught:!1,delivered:!1}),$t.on=!1,o.coins=e.coins.map(Bt=>({...Bt,taken:!1})),o.zip=null,o.climbing=null,o.fishing=null,o.fish=0,o.req=null,o.coinsGot=0,o.summit=null,o.scope=!1,o.carry=null,o.focus=null,o.wind=0,o.t=0,o.drop=null,o.climb={done:!1,time:0,t0:0},o.reached=new Set;let dt=i.restPoints[0];o.rest=dt,o.reached.add(dt.id),o.hero=E(h,dt),s.push(o.hero),o.hero.boots=!!o.tools.boots;let ot=o.hero;if(y.at==="summit"&&(Object.assign(ot,{x:e.x-e.RP+2.5,z:e.z+2,y:e.HS}),o.rest=i.restPoints.find(Bt=>Bt.id==="summit"),o.climb.done=!0),y.at==="valley"){let Bt=i.restPoints.find(X=>X.id==="valley");Object.assign(ot,{x:Bt.x,z:Bt.z,y:Bt.y,face:0}),o.rest=Bt}return{camp:0,gazelle:[p.x,p.z],start:[ot.x,ot.z]}}function se(h){o.tools={...h||{}},o.hero&&(o.hero.boots=!!o.tools.boots)}function W(h){let[y,D]=String(h).split(":");if(y==="zip"){let N=i.zips[+D];return N&&o.hero.mode==="walk"&&R(N),!0}if(y==="rope"){let N=i.anchors[+D];return N?o.tools.rope?(o.hero.mode==="walk"&&L(N),!0):(l(["needTool","rope"]),!1):!1}if(y==="fish"){let N=k(o.hero);return o.tools.rod?(N&&F(N),!0):(l(["needTool","rod"]),!1)}return y==="shop"?(l("shop"),!0):h==="scope"?(o.scope=!o.scope,!0):(h==="tea"&&(o.hero.hp=o.hero.maxHp),!0)}function St(){let h=o.hero;if(h.mode!=="walk"||h.air)return null;let y=null,D=1e9;if(o.summit&&o.summit.phase==="wait"){for(let N of e.plaza.inter){let J=Math.hypot(h.x-N.x,h.z-N.z);J<N.r&&J<D&&(D=J,y=N)}for(let N of i.zips){let J=Math.hypot(h.x-N.stand.x,h.z-N.stand.z);J<2.4&&J<D&&(D=J,y={id:"zip:"+N.i,label:`\u{1F6A1} ${N.name} ${N.icon}`,r:2.4})}if(o.vq.met){let N=Math.hypot(h.x-o.vq.merW.x,h.z-o.vq.merW.z);N<3.2&&N<D&&!(o.vq.caught&&!o.vq.delivered)&&(D=N,y={id:"shop",label:"\u{1F6D2} \u062F\u0643\u0627\u0646 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",r:3.2})}}for(let N of i.anchors){let J=Math.hypot(h.x-N.bot.x,h.z-N.bot.z);J<2.2&&Math.abs(h.y-N.bot.y)<1.6&&J<D&&(D=J,y={id:"rope:"+N.i,label:o.tools.rope?`\u{1F9D7} \u0627\u062A\u0633\u0644\u0651\u0642 ${Math.round(N.h)} \u0645`:"\u{1F9D7} \u062A\u062D\u062A\u0627\u062C \u062D\u0628\u0644 \u062A\u0633\u0644\u0651\u0642",r:2.2})}return!y&&!h.swim&&k(h)&&(y={id:"fish",label:o.tools.rod?"\u{1F3A3} \u0627\u0635\u0637\u0627\u062F \u0633\u0645\u0686":"\u{1F3A3} \u062A\u062D\u062A\u0627\u062C \u0633\u0646\u0627\u0631\u0629",r:3}),y}function rt(){let h=o.hero,y=o.vq;return h.mode==="faint"?"\u{1F635} \u2026":y.delivered?o.req&&!o.req.done?o.tools.rod?`\u{1F41F} \u062C\u064A\u0628 ${o.req.need} \u0633\u0645\u0686\u0627\u062A \u0644\u0623\u0628\u0648 \u062C\u0627\u0633\u0645 (${Math.min(o.fish,o.req.need)}/${o.req.need})`:"\u{1F3A3} \u0627\u0634\u062A\u0631\u064A \u0633\u0646\u0627\u0631\u0629 \u0645\u0646 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645 \u0648\u0635\u064A\u062F \u0633\u0645\u0686":"\u{1F30D} \u0627\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u062C\u0632\u064A\u0631\u0629":y.caught?"\u{1F3D4}\uFE0F \u0631\u062C\u0651\u0639 \u0627\u0644\u063A\u0632\u0627\u0644 \u0644\u0623\u0628\u0648 \u062C\u0627\u0633\u0645 \u0628\u0627\u0644\u0642\u0645\u0629":y.met?"\u{1F98C} \u062C\u064A\u0628 \u063A\u0632\u0627\u0644 \u0645\u0646 \u0648\u0627\u062F\u064A \u0627\u0644\u063A\u0632\u0644\u0627\u0646":o.summit?y.called?"\u{1F473} \u0643\u0644\u0651\u0645 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645":"\u2615 \u0633\u0627\u062D\u0629 \u0627\u0644\u0642\u0645\u0629":"\u26F0\uFE0F \u0627\u0637\u0644\u0639 \u0644\u0644\u0642\u0645\u0629: \u0623\u0628\u0648 \u062C\u0627\u0633\u0645 \u064A\u0646\u062A\u0638\u0631\u0643"}function ut(h,y){o.t+=h;let D=o.hero;if(!D)return[];at(D,y||{},h),Mt(h),!o.summit&&!o.carry&&(o.wind=Math.max(0,o.wind-h*.35)),lt(h),ie(h),_e(h),o.drop&&(o.drop.t+=h),o.focus&&(o.focus.t-=h,o.focus.t<=0&&(o.focus=null));let N=a.slice();return a.length=0,N}return o.tools={},o.fish=0,{S:o,ents:s,beasts:d,gz:p,merchant:m,step:ut,enter:De,interact:W,nearInteract:St,skipWait:yt,objective:rt,setTools:se,respawn:()=>{o.hero&&o.hero.mode==="walk"&&P(o.hero,"menu")},hurt:h=>x(o.hero,h,"test")}}var sc=new be,L_=new be,Cn=new be,Uo=new be,Us=(i,t,e,n)=>i.copy(sc.set(t)).lerp(L_.set(e),we(n,0,1));function Mf({scene:i,G:t,U:e,camera:n,waterN:s,glowTex:r,colorBase:o}){let a=t.I,l=t.SEA,c=t.M,u=t.HALF,d=new Pe({vertexColors:!0}),p=new Pe({vertexColors:!0,flatShading:!0}),m=jl(p,e),g=new _n,E=new be;function x(v,b,w,T,B,G){let q=b-l;if(q<.4)return Us(B,"#D9C99A","#3C7C88",-q/5),q<-5&&B.lerp(Cn.set("#1E4C69"),we((-q-5)/22,0,1)),B;Us(B,"#5C973C","#9CC45A",cn(v*.02+9,w*.02)*1.2-.1),B.lerp(Cn.set("#B5AE68"),le(.55,.8,wn(v*.008+3,w*.008))*.42);let f=a.coastS(v,w);if(G>0){let V=a.flora(v,w,q,f,T);B.lerp(Cn.set("#3D6629"),we(V.t,0,.9)*.6),V.reed>.3&&B.lerp(Cn.set("#6F7E3E"),.6)}else B.lerp(Cn.set("#3D6629"),le(.44,.62,cn(v*.0032+5,w*.0032-3))*.45);B.lerp(Cn.set("#8D8A70"),le(300,390,q)*.45);let C=Math.hypot(v+1500,w+1650);if(C<520&&(Us(Cn,"#D2AE52","#E6CB72",wn(v*.5,0)*.5+.5*Math.sin(v*.9+w*.15)**2),B.lerp(Cn,le(520,380,C)*.85)),f<160&&q<4.5&&B.lerp(Cn.set("#E4D3A0"),le(4.5,1.6,q)),T>.72){let V=a.peaks.some(U=>U.dark&&Math.hypot(v-U.x,w-U.z)<U.r);Us(Cn,V?"#3E3A37":"#6C665C",V?"#6A645E":"#ADA595",wn(v*.2,b*.6)),B.lerp(Cn,le(.72,1.1,T))}if(G>0){let V=a.nearRoad(v,w);V&&V.d<V.hw+1.2&&B.lerp(Cn.set(G>1?"#A88A5E":"#9E8A62"),le(V.hw+1.2,V.hw-.3,V.d)*.9);let U=a.nearRiver(v,w);U&&U.d<U.w+2.5&&B.lerp(Cn.set("#857A55"),le(U.w+2.5,U.w,U.d)*.7)}return B}let _=[{size:1024,split:760},{size:256,split:170},{size:64,split:0}],A=32,P=-4608,R=new Map,O=(v,b,w)=>v*1e8+(b+5e3)*1e4+(w+5e3),L=d;function M(v,b,w){let T=_[v].size,B=T/A,G=P+b*T,q=P+w*T,f=A+1,C=f+2,V=new Float32Array(C*C);for(let Vt=0;Vt<C;Vt++)for(let oe=0;oe<C;oe++)V[Vt*C+oe]=t.H(G+(oe-1)*B,q+(Vt-1)*B);let U=(Vt,oe)=>V[(oe+1)*C+(Vt+1)],I=new Float32Array((f*f+4*A)*3),st=new Float32Array(I.length),xt=new Float32Array(I.length),_t=[],Ct=0;for(let Vt=0;Vt<f;Vt++)for(let oe=0;oe<f;oe++){let xe=G+oe*B,Te=q+Vt*B,re=U(oe,Vt),Je=(U(oe+1,Vt)-U(oe-1,Vt))/(2*B),Ne=(U(oe,Vt+1)-U(oe,Vt-1))/(2*B),ae=Math.hypot(Je,Ne),ve=Math.hypot(Je,1,Ne);if(I[Ct*3]=xe,I[Ct*3+1]=re,I[Ct*3+2]=Te,st[Ct*3]=-Je/ve,st[Ct*3+1]=1/ve,st[Ct*3+2]=-Ne/ve,o(xe,re,Te,ae,Uo,v)||x(xe,re,Te,ae,Uo,v),xt[Ct*3]=Uo.r,xt[Ct*3+1]=Uo.g,xt[Ct*3+2]=Uo.b,Ct++,oe<f-1&&Vt<f-1){let Oe=Vt*f+oe;_t.push(Oe,Oe+f,Oe+1,Oe+1,Oe+f,Oe+f+1)}}let Xt=[];for(let Vt=0;Vt<f;Vt++)Xt.push(Vt);for(let Vt=1;Vt<f;Vt++)Xt.push(Vt*f+f-1);for(let Vt=f-2;Vt>=0;Vt--)Xt.push((f-1)*f+Vt);for(let Vt=f-2;Vt>0;Vt--)Xt.push(Vt*f);let te=Ct,Jt=B*.9+1;for(let Vt of Xt){I[Ct*3]=I[Vt*3],I[Ct*3+1]=I[Vt*3+1]-Jt,I[Ct*3+2]=I[Vt*3+2];for(let oe=0;oe<3;oe++)st[Ct*3+oe]=st[Vt*3+oe],xt[Ct*3+oe]=xt[Vt*3+oe];Ct++}for(let Vt=0;Vt<Xt.length;Vt++){let oe=Xt[Vt],xe=Xt[(Vt+1)%Xt.length],Te=te+Vt,re=te+(Vt+1)%Xt.length;_t.push(oe,Te,xe,xe,Te,re,oe,xe,Te,xe,re,Te)}let Et=new $e;Et.setAttribute("position",new Ze(I,3)),Et.setAttribute("normal",new Ze(st,3)),Et.setAttribute("color",new Ze(xt,3)),Et.setIndex(_t),Et.computeBoundingSphere();let Wt=new Ft(Et,L);return Wt.receiveShadow=!0,Wt.matrixAutoUpdate=!1,Wt.visible=!1,i.add(Wt),Wt}let F=(v,b)=>{let w=_[0].size,T=P+v*w,B=P+b*w;for(let G=0;G<=4;G++)for(let q=0;q<=4;q++)if(a.coastS(T+G/4*w,B+q/4*w)>-650)return!1;return!0},Z=[];for(let v=0;v<9;v++)for(let b=0;b<9;b++)F(v,b)||Z.push({lv:0,i:v,j:b});let k=[];function at(v,b,w){let T=O(v,b,w),B=R.get(T);return B||(B={lv:v,i:b,j:w,mesh:null,x:P+(b+.5)*_[v].size,z:P+(w+.5)*_[v].size,used:et},R.set(T,B)),B}let ft=(v,b,w)=>{let T=_[v.lv].size/2;return Math.hypot(Math.max(0,Math.abs(b-v.x)-T),Math.max(0,Math.abs(w-v.z)-T))},et=0;function Mt(v,b,w){et++,k.length=0;let T=Math.max(0,w-l-60)*1.4,B=G=>{if(G.used=et,!G.mesh)return k.push(G),!1;let q=ft(G,v,b),f=_[G.lv].split+(G.lv===0?T:T*.15);if(G.lv<2&&q<f){let C=[],U=!0;for(let I=0;I<4;I++)for(let st=0;st<4;st++){let xt=at(G.lv+1,G.i*4+I,G.j*4+st);C.push(xt),xt.mesh||(U=!1,k.push(xt),xt.used=et)}if(U){G.mesh.visible=!1;for(let I of C)B(I);return!0}}return G.mesh.visible=!0,!0};for(let G of Z)B(at(G.lv,G.i,G.j));for(let G of R.values())if(G.used!==et&&G.mesh){G.mesh.visible=!1;let q=ft(G,v,b);et-G.used>120&&(G.lv===2&&q>420||G.lv===1&&q>1700)&&(i.remove(G.mesh),G.mesh.geometry.dispose(),G.mesh=null,R.delete(O(G.lv,G.i,G.j)))}k.sort((G,q)=>(G.lv===0?-1e6:0)+ft(G,v,b)/(G.lv+1)-((q.lv===0?-1e6:0)+ft(q,v,b)/(q.lv+1)))}for(let v of Z){let b=at(0,v.i,v.j);b.mesh=M(0,v.i,v.j)}function it(v){let b=performance.now(),w=0;for(;k.length&&(performance.now()-b<v||w===0);){let T=k.shift();T.mesh||(T.mesh=M(T.lv,T.i,T.j),w++)}return k.length}let yt=(v,b)=>{let w=dn(v),T=18,B=[kt(Ht(new de(.2,.36,T*.9,7),0,T*.45,0),"#5B3F27")];for(let G=0;G<5;G++){let q=G/4,f=Me(5.4,T-2.6,q),C=Me(3.3,1,q)*(.9+w()*.2),V=Me(4.3,3,q);B.push(Ht(kt(new Ln(C,V,7,1),(U,I,st,xt)=>Be(U,b?"#1B4226":"#214F2C",b?"#3A7538":"#4C8C44",.3+(st/V+.5)*.5+(en(I*7,xt*7)-.5)*.2)),(w()-.5)*.2,f+V*.3,(w()-.5)*.2,0,w()*3,0))}return fn(B)},lt=v=>{let b=dn(v),w=[kt(Ht(new de(.3,.5,6,7),0,3,0),"#5E4630")];for(let[T,B]of[[1,.3],[-.8,.7],[.2,-1]])w.push(kt(Ht(new de(.1,.2,3.4,5),T*.9,6.2,B*.9,B*.5,0,-T*.5),"#5E4630"));for(let T=0;T<6;T++){let B=T/6*Ee+b(),G=T?2.6+b()*.8:3.2;w.push(Ht(kt(new An(G,0),(q,f,C,V)=>Be(q,"#2D5E2A","#6FA349",.35+C/G*.4+(en(f*3,V*3)-.5)*.3)),T?Math.cos(B)*2.8:0,T?8+b()*2.5:10.5,T?Math.sin(B)*2.8:0,0,0,0,1,.8,1))}return fn(w)},Rt=v=>{let b=dn(v),w=[kt(Ht(new de(.16,.3,2.2,6),0,1.1,0,.12,0,.08),"#6B5640")];for(let T=0;T<5;T++){let B=T/5*Ee+b();w.push(Ht(kt(new An(1.4+b()*.4,0),(G,q,f)=>Be(G,"#5F7A4F","#A6B98A",.4+f*.3)),Math.cos(B)*1.2,3.2+b()*.9,Math.sin(B)*1.2,0,0,0,1,.65,1))}return fn(w)},vt=()=>kt(new ri(1,0),(v,b,w,T)=>Be(v,"#7A746A","#B9B2A2",.4+w*.5+(en(b*5,T*5)-.5)*.35)),Nt={pine:[yt(5,!1)],oak:[lt(7)],palm:[vr(dn(3),1.1,9)],olive:[Rt(9)],bush:[Do()],rock:[zo()],boulder:[vt()],reed:[tc()]},Yt={pine:1,oak:1,palm:2.4,olive:1,bush:1.7,rock:1.3,boulder:1,reed:2.4},$t={pine:.22,oak:.18,palm:.12,olive:.12,bush:.2},fe={pine:Zn(new Pe({vertexColors:!0,flatShading:!0}),.0012,5,e),oak:Zn(new Pe({vertexColors:!0,flatShading:!0}),.0016,5,e),palm:Zn(new Pe({vertexColors:!0,side:Ve}),.003,9,e),olive:Zn(new Pe({vertexColors:!0,flatShading:!0}),.004,2,e),bush:m,rock:p,boulder:p,reed:Zn(new Pe({vertexColors:!0}),.09,.2,e)},Pt={pine:fn([kt(Ht(new de(.25,.35,6,4),0,3,0),"#4B3520"),kt(Ht(new Ln(3.4,13.5,5,1),0,11.2,0),(v,b,w)=>Be(v,"#1F4A2A","#3E7A3A",w/13.5+.5))]),oak:fn([kt(Ht(new de(.3,.45,6,4),0,3,0),"#4B3520"),kt(Ht(new An(4.6,0),0,9.6,0,0,0,0,1,.72,1),(v,b,w)=>Be(v,"#2B5A28","#5E9443",w/4+.5))]),palm:fn([kt(Ht(new de(.12,.17,5.5,4),0,2.75,0),"#8B6A3E"),kt(Ht(new An(1.25,0),0,5.6,0,0,0,0,1,.42,1),"#3F8A36")]),olive:kt(Ht(new An(2.4,0),0,3.5,0,0,0,0,1,.7,1),"#7C9467")},ne=kt(Ht(new Ln(.5,1,5,1),0,.5,0),(v,b,w)=>Be(v,"#BFBFBF","#FFFFFF",w)),ce={pine:[6.6,15,4,"#24502C"],oak:[9.5,9,4.5,"#355F2C"],palm:[5,3.5,11,"#3C7B34"],olive:[4.6,3.6,1.8,"#6E8A5E"]},ge=new Pe({vertexColors:!0,flatShading:!0}),ie=26e3,_e=9e4,De={};for(let v of Object.keys(Pt)){let b=new ui(Pt[v],ge,ie);b.count=0,b.frustumCulled=!1,b.receiveShadow=!0,i.add(b),De[v]=b}let se=new ui(ne,ge,_e);se.count=0,se.frustumCulled=!1,i.add(se);let W=130,St=480,rt=1400,ut=128,h=new Map,y=ut/t.VC,D=[];{let v=Math.ceil(rt/t.VC);for(let b=-v;b<=v;b++)for(let w=-v;w<=v;w++){let T=Math.hypot(b,w)*t.VC;T<=rt+t.VC&&D.push([b,w,T])}D.sort((b,w)=>b[2]-w[2])}let N=0,J=null,dt=null,ot=0,Bt=-1,X=new Set;function Zt(v,b,w){let T=Math.floor(v/t.VC),B=Math.floor(b/t.VC);(!J||J[0]!==T||J[1]!==B)&&(J=[T,B],N=0);let G=performance.now();for(;N<D.length&&performance.now()-G<w;){let[q,f]=D[N++],C=(T+q)*100003+(B+f);X.has(C)||(t.vegCell(T+q,B+f),X.add(C),ot++)}if(X.size>9e3){for(let q of X)if(X.delete(q),X.size<6e3)break}}function K(v,b){let w={};for(let B=0;B<y;B++)for(let G=0;G<y;G++)for(let q of t.vegCell(v*y+B,b*y+G).items)(w[q.t]=w[q.t]||[]).push(q);let T=new Ce;for(let[B,G]of Object.entries(w)){let q=Nt[B];q&&q.forEach((f,C)=>{let V=G.filter((I,st)=>st%q.length===C);if(!V.length)return;let U=new ui(f,fe[B],V.length);V.forEach((I,st)=>{g.position.set(I.x,I.y,I.z),g.rotation.set(I.rx||0,I.ry||0,I.rz||0),g.scale.setScalar((I.s||1)*Yt[B]),g.updateMatrix(),U.setMatrixAt(st,g.matrix),$t[B]&&U.setColorAt(st,E.setScalar(1).offsetHSL(0,0,(en(I.x,I.z)-.5)*$t[B]))}),U.castShadow=B!=="reed"&&B!=="rock",U.receiveShadow=!0,U.computeBoundingSphere(),T.add(U)})}return i.add(T),T}function Q(v,b,w,T=w*.5){let B=performance.now();Zt(v,b,T);let G=Math.floor(v/ut),q=Math.floor(b/ut),f=new Set;for(let U=-2;U<=2;U++)for(let I=-2;I<=2;I++){let st=(G+U+.5)*ut,xt=(q+I+.5)*ut;Math.hypot(Math.max(0,Math.abs(v-st)-ut/2),Math.max(0,Math.abs(b-xt)-ut/2))<W&&f.add((G+U)*100003+(q+I))}let C=!1;for(let[U,I]of h)f.has(U)||(i.remove(I.group),I.group.children.forEach(st=>st.dispose&&st.dispose()),h.delete(U),C=!0);for(let U of f)if(!h.has(U)&&performance.now()-B<w){let I=Math.round(U/100003),st=U-I*100003;h.set(U,{group:K(I,st)}),C=!0}(!dt||Math.hypot(v-dt[0],b-dt[1])>24||C||ot>60)&&performance.now()-Bt>350&&H(v,b)}function H(v,b){dt=[v,b],ot=0,Bt=performance.now();let w={pine:0,oak:0,palm:0,olive:0},T=0,B=Math.floor(v/t.VC),G=Math.floor(b/t.VC);for(let[q,f,C]of D){if(C<W-t.VC)continue;let V=(B+q)*100003+(G+f);if(!X.has(V))continue;let U=t.vegCell(B+q,G+f);if(!h.has(Math.floor(U.ci/y)*100003+Math.floor(U.cj/y)))for(let I of U.items){let st=ce[I.t];if(!st)continue;let xt=Math.hypot(I.x-v,I.z-b);if(xt<St){let _t=De[I.t];if(w[I.t]>=ie)continue;g.position.set(I.x,I.y,I.z),g.rotation.set(0,I.ry,0),g.scale.setScalar(I.s*(I.t==="palm"?2.4:1)),g.updateMatrix(),_t.setMatrixAt(w[I.t]++,g.matrix)}else if(xt<rt&&T<_e&&(I.s>.95||xt<900)){let _t=I.s;g.position.set(I.x,I.y+st[2]*_t,I.z),g.rotation.set(0,I.ry,0),g.scale.set(st[0]*_t,st[1]*_t,st[0]*_t),g.updateMatrix(),se.setMatrixAt(T,g.matrix),se.setColorAt(T,E.set(st[3]).offsetHSL(0,0,(en(I.x,I.z)-.5)*.06)),T++}}}for(let q in w)De[q].count=w[q],De[q].instanceMatrix.needsUpdate=!0;se.count=T,se.instanceMatrix.needsUpdate=!0,se.instanceColor&&(se.instanceColor.needsUpdate=!0)}let zt=1900,ht=new ui(No(),Zn(new Pe({vertexColors:!0,side:Ve}),.5,0,e),zt);ht.frustumCulled=!1,ht.count=0,i.add(ht);let mt=null;function z(v,b){if(mt&&Math.hypot(v-mt[0],b-mt[1])<8)return;mt=[v,b];let w=0,T=dn((Math.floor(v/8)*7919^Math.floor(b/8)*104729)>>>0);for(let B=0;B<zt*1.6&&w<zt;B++){let G=T()*Ee,q=Math.sqrt(T())*42,f=Math.round((v+Math.cos(G)*q)*4)/4,C=Math.round((b+Math.sin(G)*q)*4)/4,V=t.H(f,C),U=V-l;if(U<.6||U<4&&a.coastS(f,C)<160||a.reserved(f,C))continue;let I=a.nearRoad(f,C);if(I&&I.d<I.hw+.4)continue;if(c.rad(f,C)<250){let xt=c.nearest(f,C,V,1);if(c.rad(f,C)<c.RP+1||xt&&xt.d<xt.p.hw+.3)continue}let st=a.nearRiver(f,C);st&&st.d<st.w+.5||(g.position.set(f,V,C),g.rotation.set(0,en(f,C)*Ee,0),g.scale.setScalar(1+en(C,f)*.75))}ht.count=w,ht.instanceMatrix.needsUpdate=!0}let S=(v,b,w)=>{let T=s.clone();T.wrapS=T.wrapT=cs,T.repeat.set(w,w),T.needsUpdate=!0;let B=new qn({color:v,specular:"#FFFFFF",shininess:110,normalMap:T,transparent:!0,opacity:b});return B.normalScale.set(.6,.6),B},Y=S("#2A7DB2",.84,1400),gt=new Ft(new Tn(26e3,26e3),Y);gt.rotation.x=-Math.PI/2,gt.position.y=l,i.add(gt);let pt=new Ft(new Tn(26e3,26e3),new yn({color:"#174767"}));pt.rotation.x=-Math.PI/2,pt.position.y=l-42,i.add(pt);let At=[Y];for(let v of a.lakes){let b=S("#3A8FBE",.86,40);At.push(b);let w=new Ft(new Wn(v.r*1.3+30,48),b);w.rotation.x=-Math.PI/2,w.position.set(v.x,l+v.lv,v.z),i.add(w)}{let v=S("#4E8C8A",.8,60);At.push(v);let b=new Ft(new Wn(a.marsh.r,56),v);b.rotation.x=-Math.PI/2,b.position.set(a.marsh.x,l+a.marsh.lv,a.marsh.z),i.add(b)}let Gt=S("#3C95C8",.88,1);At.push(Gt);for(let v of a.rivers){let b=[],w=[],T=[],B=0,G=0;v.pts.forEach((C,V)=>{let U=v.pts[Math.max(0,V-1)],I=v.pts[Math.min(v.pts.length-1,V+1)],st=I.x-U.x,xt=I.z-U.z,_t=Math.hypot(st,xt)||1,Ct=-xt/_t,Xt=st/_t,te=C.w+.7;if(V&&(G+=Math.hypot(C.x-v.pts[V-1].x,C.z-v.pts[V-1].z)),b.push(C.x+Ct*te,l+C.lv+.04,C.z+Xt*te,C.x-Ct*te,l+C.lv+.04,C.z-Xt*te),w.push(0,G/6,1,G/6),V){let Jt=(V-1)*2;T.push(Jt,Jt+2,Jt+1,Jt+1,Jt+2,Jt+3)}});let q=new $e;q.setAttribute("position",new Ze(new Float32Array(b),3)),q.setAttribute("uv",new Ze(new Float32Array(w),2)),q.setIndex(T),q.computeVertexNormals();let f=new Ft(q,Gt);i.add(f)}let Lt=bi(64,128,(v,b,w)=>{v.clearRect(0,0,b,w);for(let T=0;T<90;T++)v.fillStyle=`rgba(255,255,255,${.25+Math.random()*.5})`,v.fillRect(Math.random()*b,0,1+Math.random()*3,w)},[3,1]),Ot=new Pe({map:Lt,color:"#DDF3FF",transparent:!0,opacity:.85,side:Ve,depthWrite:!1}),ee=[];for(let v of a.falls){if(v.top-v.bot<4)continue;let b=Math.hypot(v.dx,v.dz)||1,w=v.w*2+1.2,T=v.top-v.bot+1,B=new Ft(new Tn(w,T),Ot);B.position.set(v.x,l+(v.top+v.bot)/2,v.z),B.rotation.y=Math.atan2(v.dx,v.dz)+Math.PI/2,B.rotation.order="YXZ",B.rotation.x=-.25,i.add(B);let G=new si(new ti({map:r,color:"#FFFFFF",transparent:!0,opacity:.55,depthWrite:!1}));G.position.set(v.x+v.dx/b*3,l+v.bot+1.2,v.z+v.dz/b*3),G.scale.setScalar(w*1.4),i.add(G),ee.push({m:B,sp:G})}let pe=(v,b=512,w=128,T=56,B="#8B5A2B",G="#FFF6E0")=>bi(b,w,q=>{q.fillStyle=B,q.fillRect(0,0,b,w),q.strokeStyle="#E8C170",q.lineWidth=8,q.strokeRect(4,4,b-8,w-8),q.fillStyle=G,q.font=`900 ${T}px -apple-system,system-ui,sans-serif`,q.textAlign="center",q.textBaseline="middle",q.direction="rtl",q.fillText(v,b/2,w/2+4)}),tt=(v,b,w,T,B=0,G=0,q=0,f=0)=>Ht(kt(new Re(v,b,w),T),B,G,q,0,f,0),Ut=(v,b,w,T,B=0,G=0,q=0,f=10)=>Ht(kt(new de(v,b,w,f),T),B,G,q),qt=v=>(b,w,T,B)=>Be(b,v>.5?"#C79E72":"#B98D62",v>.5?"#DDBB8E":"#D1AE80",.45+(en(Math.round(w*3),Math.round(T*3+B*3))-.5)*.35);function Qt(v){let b=[],w=v.kind;if(w==="house"){let T=v.w,B=v.d,G=v.h,q=v.white?f=>f.set("#F1ECE2"):qt(v.tint);b.push(kt(Ht(new Re(T,G,B),0,G/2,0),q));for(let[f,C,V,U]of[[0,B/2-.15,T,.3],[0,-B/2+.15,T,.3],[T/2-.15,0,.3,B],[-T/2+.15,0,.3,B]])b.push(kt(Ht(new Re(V,.55,U),f,G+.27,C),q));b.push(tt(.12,2.1,1,"#5B3A1F",T/2+.03,1.05,0));for(let f of v.floors===2?[1.6,4.8]:[1.6])for(let C of[-1,1])b.push(tt(.1,.8,.9,"#3A2A1E",T/2+.03,f,C*B*.28));v.floors===2&&b.push(kt(Ht(new Re(T+.1,.18,B+.1),0,3.25,0),"#A9825A")),b.push(tt(1.4,.12,1.4,"#8B6B44",T/2+.7,2.3,0))}else if(w==="hut"){let T=v.w,B=v.d;b.push(kt(Ht(new Re(T,2.4,B),0,1.2,0),(q,f,C)=>Be(q,"#7A5434","#9C7048",(C+1.2)*3.3%1)));let G=new de(.01,T*.78,B+.6,3,1);b.push(kt(Ht(G,0,2.4+.75,0,Math.PI/2,0,0,1,1,1),"#5C3F27")),b.push(tt(.1,1.9,.9,"#3E2A18",T/2+.03,.95,0))}else if(w==="reedhut"||w==="mudhif"){let T=v.w,B=v.d,G=v.h,q=Math.round(B/.9),f=new de(T/2,T/2,B,18,1,!0,-Math.PI/2,Math.PI);b.push(kt(Ht(f,0,0,0,Math.PI/2,0,0,1,1,G/(T/2)),(C,V,U,I)=>Be(C,"#BFA35E","#E0C98A",.5+Math.sin(I*9)*.25+(en(V*4,I*4)-.5)*.2)));for(let C=0;C<=q;C++){let V=-B/2+C/q*B;b.push(kt(Ht(new de(T/2+.06,T/2+.06,.16,18,1,!0,-Math.PI/2,Math.PI),0,0,V,Math.PI/2,0,0,1,1,G/(T/2)),"#8C7038"))}if(w==="mudhif")for(let C of[-1,1])b.push(Ut(.35,.42,G+.8,"#A88A4C",C*(T/2-.5),(G+.8)/2,B/2+.2,8))}else if(w==="teahouse"){let T=v.w,B=v.d;b.push(tt(.3,3.3,B,"#E3D2B4",-T/2,1.65,0),tt(T,3.3,.3,"#E3D2B4",0,1.65,-B/2),tt(T,3.3,.3,"#E3D2B4",0,1.65,B/2)),b.push(tt(T+1.2,.25,B+.6,"#7B5534",.3,3.4,0));for(let G of[-1,1])b.push(Ut(.12,.12,3.3,"#6B4A2E",T/2+.6,1.65,G*(B/2-.2),6));for(let G=0;G<3;G++)b.push(tt(.6,.45,1.8,"#8E5A36",-.6,.23,-3+G*3),tt(.9,.7,.9,"#6B4A2E",.6,.35,-3+G*3));b.push(Ut(.22,.3,.7,"#C9A13B",-T/2+.6,1.25,0,10))}else if(w==="stall"){let T=["#E63946","#2A9D8F","#F4A261","#457B9D","#E9C46A"],B=T[(v.tint||0)%T.length];for(let[G,q]of[[-1,-1],[1,-1],[-1,1],[1,1]])b.push(Ut(.05,.05,2.6,"#6B4A2E",G*1.4,1.3,q*1,5));b.push(kt(Ht(new Re(3.1,.08,2.3),0,2.62,0,.12,0,0),(G,q)=>G.set(Math.floor((q+2)*2.5)%2?B:"#FFF5E0"))),b.push(tt(2.8,.85,1,"#8B5E3C",0,.43,.3));for(let G=0;G<6;G++)b.push(tt(.35,.3,.3,["#E76F51","#F4D35E","#7FB069","#C2185B","#FFB703","#8D6E63"][G],-1.1+G*.44,1,.3))}else if(w==="board")for(let T of[-1,1])b.push(Ut(.07,.08,2.4,"#5B3A1F",0,1.2,T*1.05,6));else if(w==="signpost")b.push(Ut(.08,.1,3.2,"#5B3A1F",0,1.6,0,6));else if(w==="gate"){for(let T of[-1,1])b.push(kt(Ht(new Re(1.1,5.2,1.1),0,2.6,T*4.6),qt(.8)));b.push(kt(Ht(new Re(1.2,.9,10.4),0,5.6,0),qt(.8)))}else if(w==="fountain")b.push(kt(Ht(new de(v.r,v.r+.15,.7,8),0,.35,0),"#D9CBB0"),Ut(.45,.6,1.8,"#CDBB9C",0,.9,0,8),Ut(1.1,.4,.35,"#D9CBB0",0,1.9,0,8));else if(w==="lamp")b.push(Ut(.06,.09,3.3,"#2E2E2E",0,1.65,0,6));else if(w==="pier"){b.push(kt(Ht(new Re(v.w,.22,v.d),0,0,0),(T,B,G,q)=>Be(T,"#7E5B3A","#A47A50",Math.floor((B+50)*1.6)%2*.6+.2)));for(let T=0;T<=Math.floor(v.w/4);T++)for(let B of[-1,1])b.push(Ut(.12,.12,4,"#5B3F27",-v.w/2+T*4,-2,B*(v.d/2-.1),6))}else if(w==="boat"||w==="canoe"){let T=w==="canoe"?6.5:5.2,B=w==="canoe"?.85:1.7;b.push(kt(Ht(new qe(1,14,6,0,Ee,Math.PI/2,Math.PI/2),0,.42,0,0,0,0,T/2,.5,B/2),w==="canoe"?"#3B2A1E":(G,q,f)=>Be(G,"#2A6F97","#F1ECE2",f*-2+.2))),w==="boat"&&b.push(tt(.25,.1,B*.8,"#7B5534",0,.38,0))}else if(w==="logs")for(let T=0;T<6;T++)b.push(kt(Ht(new de(.28,.28,v.w,8),0,.3+(T>3?.48:0),(T%4-1.5)*.48*(T>3?.6:1),0,0,Math.PI/2),"#8A6240"));else if(w==="well"){b.push(Ut(v.r,v.r+.1,.9,"#B8A88A",0,.45,0,12));for(let T of[-1,1])b.push(Ut(.06,.06,2.2,"#5B3A1F",T*.9,1.1,0,5));b.push(kt(Ht(new de(.01,1.2,.6,4),0,2.4,0,0,Math.PI/4,0),"#7B5534"))}else if(w==="lighthouse")b.push(kt(Ht(new de(2,3,17,16),0,8.5,0),(T,B,G)=>T.set(Math.floor((G+8.5)/3)%2?"#D62828":"#FBF7EF"))),b.push(Ut(2.6,2.6,.4,"#2E2E2E",0,17.2,0,16),Ut(1.6,1.6,1.8,"#9FD8FF",0,18.3,0,12),kt(Ht(new Ln(1.9,1.4,16),0,19.9,0),"#D62828")),b.push(tt(.15,2.2,1,"#5B3A1F",3,1.1,0));else if(w==="fwall"){let T=Math.max(2,Math.round(v.w/2));for(let B=0;B<T;B++){let G=v.h*(.6+.4*en(v.x+B,v.z));b.push(kt(Ht(new Re(v.w/T+.05,G,v.d),-v.w/2+(B+.5)*v.w/T,G/2,0),(q,f,C,V)=>Be(q,"#8E8576","#B8AE9B",.4+en(Math.round(f*2+v.x),Math.round(C*2))*.5)))}}else if(w==="ftower")b.push(kt(Ht(new de(v.r*.92,v.r,v.h,12),0,v.h/2,0),(T,B,G,q)=>Be(T,"#8E8576","#B8AE9B",.4+en(Math.round(B*2+q),Math.round(G*2))*.5)));else if(w==="campfire")for(let T=0;T<9;T++){let B=T/9*Ee;b.push(Ht(kt(new ri(.22,0),"#8A857B"),Math.cos(B)*.75,.12,Math.sin(B)*.75))}else if(w==="square"){b.push(kt(Ht(new Re(v.w,.2,v.d),0,-.02,0),(T,B,G,q)=>Be(T,"#CBB894","#E2D2B2",(Math.floor(B/1.5)+Math.floor(q/1.5))%2*.5+en(Math.floor(B/1.5),Math.floor(q/1.5))*.35)));for(let[T,B]of[[-20,-26],[20,-26],[-20,26],[20,26]])b.push(kt(Ht(new de(3.2,3.4,.5,14),T,.25,B),"#9C8466"),kt(Ht(new An(2.8,1),T,.6,B,0,0,0,1,.3,1),(G,q,f,C)=>G.set(["#FF6B9A","#FFD23F","#FFFFFF","#B28DFF","#E63946"][Math.floor(en(q*3,C*3)*5)])))}return b}let he=[],me=[],Ae=[],Kt=[];for(let v of a.sites){let b=Qt(v),w=new Ce;if(w.position.set(v.x,v.float?l+.15:v.y,v.z),w.rotation.y=-(v.rot||0),b.length){let T=new Ft(fn(b),new Pe({vertexColors:!0,side:Ve}));T.castShadow=!0,T.receiveShadow=!0,w.add(T)}if(v.kind==="palm"){let T=new Ft(Nt.palm[0],fe.palm);T.scale.setScalar(2.4*(v.s||1)),T.castShadow=!0,w.add(T)}if(v.kind==="board"){let T=new Ft(new Tn(2.2,1.5),new Pe({map:pe("\u{1F4DC} \u0637\u0644\u0628\u0627\u062A \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",512,360,52,"#6B4423"),side:Ve}));T.position.set(.1,1.7,0),T.rotation.y=Math.PI/2,w.add(T)}if(v.kind==="signpost"&&["\u26F0\uFE0F \u0642\u0645\u0629 \u0627\u0644\u0633\u062D\u0627\u0628","\u{1F3D8}\uFE0F \u0642\u0631\u064A\u0629 \u0627\u0644\u0637\u064A\u0646","\u{1F334} \u0628\u0633\u0627\u062A\u064A\u0646 \u0627\u0644\u0631\u0637\u0628","\u{1F5FC} \u0627\u0644\u0645\u0646\u0627\u0631\u0629"].forEach((T,B)=>{let G=new Ft(new Tn(1.9,.42),new Pe({map:pe(T,512,112,54),side:Ve}));G.position.set(0,2.9-B*.5,0),G.rotation.y=[Math.PI/2,0,Math.PI,-Math.PI/2][B]+.2,G.translateX(.95),w.add(G)}),v.kind==="gate"){let T=new Ft(new Tn(4.2,.8),new Pe({map:pe("\u26F0\uFE0F \u0637\u0631\u064A\u0642 \u0627\u0644\u0642\u0645\u0629",512,100,58),side:Ve}));T.position.set(.62,5.6,0),T.rotation.y=Math.PI/2,w.add(T)}if(v.kind==="lamp"||v.kind==="lighthouse"){let T=new si(new ti({map:r,color:"#FFC85A",transparent:!0,opacity:.8,depthWrite:!1,blending:ni}));T.position.y=v.kind==="lamp"?3.3:18.4,T.scale.setScalar(v.kind==="lamp"?1:7),w.add(T),me.push(T)}if(v.kind==="fountain"){let T=new Ft(new Wn(v.r-.2,24),At[1]);T.rotation.x=-Math.PI/2,T.position.y=.55,w.add(T)}if(v.kind==="campfire"&&Ae.push(Ge(w)),v.kind==="teahouse")for(let[T,B,G]of[[-.9,-3,Math.PI/2],[-.9,0,Math.PI/2+.3],[-.9,3,Math.PI/2-.2]]){let q=_s({thobe:["#F2EEE4","#D9D2C3","#EDE3CF"][Kt.length%3],bisht:null});q.root.position.set(T,0,B),q.root.rotation.y=G,w.add(q.root),Kt.push(q)}i.add(w),he.push({grp:w,x:v.x,z:v.z,st:v})}function Ge(v){let b=new Ce,w=B=>new yn({color:B,transparent:!0,opacity:.9,depthWrite:!1,blending:ni});[["#FF5A1F",.32,.9],["#FF9A2E",.24,.7],["#FFE07A",.14,.45]].forEach(([B,G,q])=>{let f=new Ft(new Ln(G,q,10,1,!0),w(B));f.position.y=q/2+.1,b.add(f)});for(let B=0;B<3;B++){let G=new Ft(new de(.08,.08,1.1,6),new Pe({color:"#5B3A1F"}));G.rotation.set(Math.PI/2,B/3*Math.PI,0),G.position.y=.12,b.add(G)}let T=new si(new ti({map:r,color:"#FF8A2E",transparent:!0,opacity:.65,depthWrite:!1,blending:ni}));return T.position.y=.6,T.scale.setScalar(2.6),b.add(T),v.add(b),b}for(let v of t.restPoints)if(v.fire){let b=new Ce;b.position.set(v.fx,t.H(v.fx,v.fz),v.fz);let w=new Ft(fn(Qt({kind:"campfire"})),new Pe({vertexColors:!0}));b.add(w);for(let T of[.4,2.5]){let B=new Ft(new de(.22,.24,1.8,8),new Pe({color:"#7A5434"}));B.rotation.set(0,T,Math.PI/2),B.position.set(Math.cos(T)*1.9,.22,Math.sin(T)*1.9),B.castShadow=!0,b.add(B)}Ae.push(Ge(b)),i.add(b),he.push({grp:b,x:v.x,z:v.z,st:{kind:"rest"}})}{let v=80*Math.PI/180,b=c.x+Math.cos(v)*10.1,w=c.z+Math.sin(v)*10.1,T=new Ce,B=[];B.push(kt(Ht(new Re(2.2,.03,3.2),0,.02,0),(q,f,C,V)=>q.set(Math.floor((V+2)*2.2)%2?"#9B2226":"#CA6702")));for(let[q,f]of[[-1.1,-1.6],[-1.1,1.6],[.9,-1.6],[.9,1.6]])B.push(Ut(.05,.05,2.4,"#6B4A2E",q,1.2,f,5));B.push(kt(Ht(new Re(2.4,.06,3.6),-.1,2.42,0,0,0,.1),(q,f,C,V)=>q.set(Math.floor((V+2)*2)%2?"#0A9396":"#E9D8A6")));for(let q=0;q<5;q++)B.push(kt(Ht(new de(.28,.33,.6,8),-.7,.3,-1.2+q*.6),["#D4A373","#CCD5AE","#E9EDC9","#FAEDCD","#BC6C25"][q]));B.push(tt(.6,.4,.9,"#7B5534",.1,.2,1.1),tt(.5,.3,.5,"#B5838D",.1,.55,1.1));let G=new Ft(fn(B),new Pe({vertexColors:!0,side:Ve}));G.castShadow=!0,T.add(G),T.position.set(b,c.HS+.01,w),T.rotation.y=-Math.atan2(c.z-w,c.x-b),i.add(T)}let Se=new Pe({color:"#3A3A3A"}),ue=new Pe({color:"#7B5534"}),Ye=(v,b,w,T,B)=>{let G=new Ce;for(let f of[-1,1]){let C=new Ft(new de(.14,.18,T,6),ue);C.position.set(-Math.sin(B)*f*1.3,T/2,Math.cos(B)*f*1.3),C.castShadow=!0,G.add(C)}let q=new Ft(new Re(.22,.22,2.9),ue);return q.position.y=T,q.rotation.y=-B,G.add(q),G.position.set(v,b,w),i.add(G),G};for(let v of t.zips){let b=[];for(let f=0;f<=v.L;f+=6){let C=v.at(f);b.push(new j(C.x,C.y,C.z))}let w=v.at(v.L);b.push(new j(w.x,w.y,w.z));let T=new Ft(new Mi(new Xn(b),b.length,.04,4,!1),Se);i.add(T);let B=Math.atan2(v.uz,v.ux);Ye(v.S.x,c.HS-1,v.S.z,5.6,B),Ye(v.E.x,t.H(v.E.x,v.E.z)-.2,v.E.z,4.6,B);for(let f of v.pts)if(f.tower){let C=new Ce;for(let[U,I]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let st=new Ft(new de(.12,.16,12.6,5),Se);st.position.set(U*.9,6.1,I*.9),st.rotation.set(I*.07,0,-U*.07),C.add(st)}let V=new Ft(new Re(2.4,.3,.6),Se);V.position.y=12,V.rotation.y=-B+Math.PI/2,C.add(V),C.position.set(f.x,t.H(f.x,f.z)-.3,f.z),i.add(C)}let G=new Ft(new Tn(2.4,.6),new Pe({map:pe(`\u{1F6A1} ${v.name} ${v.icon}`,512,128,56),side:Ve}));G.position.set(v.stand.x,c.HS+2.2,v.stand.z),G.rotation.y=-Math.atan2(v.stand.z-c.z,v.stand.x-c.x)+Math.PI/2,i.add(G);let q=new Ft(new de(.06,.06,2.4,6),ue);q.position.set(v.stand.x,c.HS+1.2,v.stand.z),i.add(q)}let $=new Ce;{let v=new Ft(new de(.16,.16,.1,12),Se);v.rotation.x=Math.PI/2,v.position.y=2.1,$.add(v);for(let w of[-1,1]){let T=new Ft(new de(.02,.02,1.2,4),new Pe({color:"#E63946"}));T.position.set(0,1.45,w*.25),T.rotation.x=w*.2,$.add(T)}let b=new Ft(new de(.03,.03,.9,6),Se);b.rotation.x=Math.PI/2,b.position.y=.88,$.add(b)}$.visible=!1,i.add($);let ct=new Pe({color:"#C8A46A"}),Dt=new Pe({color:"#E63946",side:Ve});for(let v of t.anchors){let b=new Ft(new Mi(new Xn([new j(v.top.x,v.top.y+.8,v.top.z),new j((v.top.x+v.bot.x)/2,(v.top.y+v.bot.y)/2,(v.top.z+v.bot.z)/2),new j(v.bot.x,v.bot.y+.2,v.bot.z)]),12,.035,4,!1),ct);i.add(b);let w=new Ft(new de(.06,.06,1.1,6),Se);w.position.set(v.top.x,v.top.y+.5,v.top.z),i.add(w);let T=new Ft(new de(.03,.03,1.8,5),ue);T.position.set(v.bot.x,v.bot.y+.9,v.bot.z),i.add(T);let B=new Ft(new Tn(.5,.32),Dt);B.position.set(v.bot.x+.25,v.bot.y+1.6,v.bot.z),i.add(B)}let Tt=new Ce;{let v=new Ft(new de(.015,.03,2.6,5),ue);v.rotation.z=-1,v.position.set(1.1,1.6,0),Tt.add(v);let b=new Ft(new de(.004,.004,2.4,3),new yn({color:"#EEEEEE"}));b.position.set(2.2,.95,0),Tt.add(b);let w=new Ft(new qe(.06,8,6),new Pe({color:"#E63946"}));w.position.set(2.2,-.2,0),Tt.add(w),Tt.userData.bob=w}Tt.visible=!1,i.add(Tt);let It=360,bt=new Float32Array(It*It),ze=new Float32Array(It*It),Fe=0,on=null;function an(v){let b=performance.now(),w=u*2/It;for(;Fe<It&&performance.now()-b<v;){let T=u-(Fe+.5)*w;for(let B=0;B<It;B++){let G=-u+(B+.5)*w,q=a.A(T,G),f=Fe*It+B;bt[f]=c.rad(T,G)<230?t.H(T,G)-l:q,ze[f]=q>.4?a.flora(T,G,q,999,0).t:0}Fe++}return It-Fe}function pn(v=1024){Fe<It&&an(1e9);let b=document.createElement("canvas");b.width=b.height=It;let w=b.getContext("2d"),T=w.createImageData(It,It),B=u*2/It;for(let C=0;C<It;C++)for(let V=0;V<It;V++){let U=C*It+V,I=bt[U],st=bt[Math.min(It-1,C+1)*It+V]-bt[Math.max(0,C-1)*It+V],xt=bt[C*It+Math.min(It-1,V+1)]-bt[C*It+Math.max(0,V-1)];if(I<.35)Us(Cn,"#BFE6EE","#2A6FA0",we(-I/14,0,1));else{Us(Cn,"#E6D7A6","#86B55A",I/4),I>4&&Us(Cn,"#86B55A","#5F9446",(I-4)/120),Cn.lerp(sc.set("#2F6B33"),we(ze[U],0,1)*.7),I>200&&Cn.lerp(sc.set("#A39B8B"),le(200,330,I)),I>330&&Cn.lerp(sc.set("#E8E4DA"),le(330,395,I));let _t=we(1+(st*.55-xt*.55)/B*.9,.6,1.3);Cn.multiplyScalar(_t)}T.data[U*4]=Cn.r*255,T.data[U*4+1]=Cn.g*255,T.data[U*4+2]=Cn.b*255,T.data[U*4+3]=255}w.putImageData(T,0,0);let G=document.createElement("canvas");G.width=G.height=v;let q=G.getContext("2d");q.imageSmoothingEnabled=!0,q.drawImage(b,0,0,v,v);let f=(C,V)=>[(V+u)/(2*u)*v,(u-C)/(2*u)*v];q.lineCap="round",q.lineJoin="round";for(let C of a.roads)q.strokeStyle="rgba(120,80,40,.85)",q.lineWidth=v/520,q.setLineDash([v/260,v/400]),q.beginPath(),C.pts.forEach((V,U)=>{let[I,st]=f(V.x,V.z);U?q.lineTo(I,st):q.moveTo(I,st)}),q.stroke();q.setLineDash([]);for(let C of a.rivers)q.strokeStyle="#3F93C8",q.lineWidth=v/340,q.beginPath(),C.pts.forEach((V,U)=>{let[I,st]=f(V.x,V.z);U?q.lineTo(I,st):q.moveTo(I,st)}),q.stroke();for(let C of a.sites)if(["house","hut","reedhut","mudhif","teahouse","lighthouse"].includes(C.kind)){let[V,U]=f(C.x,C.z);q.fillStyle="#7A4A2A",q.fillRect(V-1.5,U-1.5,3,3)}return on=G,{canvas:G,x0:-u,x1:u,z0:-u,z1:u}}let gn=0;function Nn(v,b,w,T,B){T&&($.visible=T.mode==="zip",$.visible&&($.position.set(T.x,T.y,T.z),$.rotation.y=-T.face),Tt.visible=T.mode==="fish",Tt.visible&&(Tt.position.set(T.x,T.y,T.z),Tt.rotation.y=-T.face,Tt.userData.bob.position.y=-.2+Math.sin(v*3)*.05-(t.S&&0))),Mt(w.x,w.z,w.y);let G=it(B*.45);Q(w.x,w.z,B*.4),T&&z(T.x,T.z),Fe<It&&!G&&an(B*.15),gn+=b;for(let f of At)f.normalMap.offset.set(gn*.01,gn*.006);Ae.forEach((f,C)=>{let V=.85+Math.sin(v*13+C*1.7)*.1+Math.sin(v*23+C)*.06;f.children.slice(0,3).forEach((U,I)=>{U.scale.set(1,V+I*.05,1),U.rotation.y=v*(1+I)})});for(let f of he)f.grp.visible=Math.hypot(f.x-w.x,f.z-w.z)<(f.st.kind==="lighthouse"?4e3:f.st.kind==="house"||f.st.kind==="mudhif"?1600:700);for(let f of Kt)f.head.rotation.y=Math.sin(v*.6+f.root.position.x)*.35;for(let f of ee)f.m.material.map.offset.y=-v*.9;let q=26e3/1400*11;gt.position.x=Math.round(w.x/q)*q,gt.position.z=Math.round(w.z/q)*q}function Bn(v,b,w){for(let G=0;G<3;G++)Mt(v,b,w),it(1e9);let T=Math.floor(v/t.VC),B=Math.floor(b/t.VC);for(let[G,q,f]of D){if(f>260)break;let C=(T+G)*100003+(B+q);X.has(C)||(t.vegCell(T+G,B+q),X.add(C))}Q(v,b,1e9,0),H(v,b),mt=null,z(v,b)}return{update:Nn,warm:Bn,colorIsland:x,mapShot:pn,pending:()=>k.length+(Fe<It?1:0),buildSome:it,selectTerrain:Mt,tiles:R,refill:H,nearChunks:h,mid:De,far:se,sea:gt,mapRows:an}}var Mr=Math.PI/180;function Sf(i,t,e){let n=i.renderer,s=t.M,r=t.V,o=e.S,a=new Xr,l=new be("#CFDFE8");a.background=l,a.fog=new Wr(l,320,3600);let c=new Gn(62,.5,.25,7e3),u={time:{value:0},wind:{value:0},see:{value:new xn(0,0,0,0)}},d=dn(4242),p=new mo("#D2E6FF","#6A8A4E",1);a.add(p);let m=new j(.5,.72,.45).normalize(),g=new _o("#FFE9C4",2.9);g.castShadow=!0,g.shadow.mapSize.set(2048,2048),Object.assign(g.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:1,far:180}),g.shadow.bias=-5e-4,g.shadow.normalBias=.03,g.shadow.radius=2.5,a.add(g,g.target);let E=lf("#3A7FD6","#9CCBF2","#EFE7D6",new j(.6,.35,-.7));a.add(E);let x=uf(),_=df(),A=new Pe({vertexColors:!0}),P=new Pe({vertexColors:!0,flatShading:!0}),R=new Pe({vertexColors:!0,flatShading:!0}),O=[],L=(nt,v)=>nt*100003+v,M=t.HALF,F=64,Z=Math.ceil(M*2/F),k=-Z*F/2;function at(nt,v,b,w,T){let B=s.rad(nt,b),G=r.Hv(nt,b);if(G<=v+.02&&G<1e8){let C=nt-r.x,V=b-r.z,U=Math.abs(V),I=cn(C*.07+11,V*.07),st=wn(C*.5,V*.5);Be(T,"#5FAE3E","#9AD85E",I*1.3-.15+st*.2);let xt=Math.abs(V-r.riverZ(C));xt<2.4&&U<r.FLOOR+1&&C>-4&&T.lerp(pi.set(xt<1?"#8F8A62":"#D9C891"),le(2.4,1.3,xt));let _t=le(1.2,5,v-r.VF)*le(r.FLOOR-.5,r.FLOOR+4,U)+le(.55,.9,w)*.8;if(_t>0){let Ct=.5+.5*Math.sin(v*1.9+cn(nt*.05,b*.05)*4);Be(Lo,"#B98F62","#DDBE8E",Ct),Lo.lerp(pi.set("#8E6A48"),wn(nt*.35,v*.6)*.35),T.lerp(Lo,we(_t,0,1))}return C<0&&U<9&&T.lerp(pi.set("#A88C62"),le(-2,-12,C)*le(9,5,U)*.6),T}if(B<205){Be(T,"#3E6E2E","#6E9A44",cn(nt*.06+3,b*.06)*1.2-.1),w>.8&&(Be(pi,"#5E5A55","#A9A398",wn(nt*.35+b*.2,v*1.6)*.8+wn(nt*2,b*2+v)*.35),T.lerp(pi,le(.8,1.3,w)));let C=s.nearest(nt,b,v,1);return C&&C.d<C.p.hw+.9&&C.p.kind!=="bridge"&&T.lerp(pi.set("#9C7E55"),le(C.p.hw+.9,C.p.hw-.2,C.d)*.85),B<s.RP+1&&T.set("#9A9388"),B>190&&T.lerp(pi.set("#5E8F3E"),le(190,205,B)),T}return null}let ft=null;function et(){return!ft||!ft.pending()}{let nt=bi(64,256,(f,C,V)=>{f.clearRect(0,0,C,V);for(let U=0;U<V;U+=2){let I=6+wn(U*.06,1)*8,st=C-6-wn(U*.06,5)*8,xt=f.createLinearGradient(I,0,st,0);xt.addColorStop(0,"rgba(150,118,78,0)"),xt.addColorStop(.2,"rgba(150,118,78,.95)"),xt.addColorStop(.8,"rgba(140,108,70,.95)"),xt.addColorStop(1,"rgba(140,108,70,0)"),f.fillStyle=xt,f.fillRect(I,U,st-I,2)}for(let U=0;U<260;U++)f.fillStyle=`rgba(${90+U%5*20},${80+U%7*12},${60+U%3*10},.6)`,f.beginPath(),f.arc(8+Math.random()*(C-16),Math.random()*V,.5+Math.random()*1.4,0,Ee),f.fill()},[1,1]),v=[],b=[],w=[],T=0,B=f=>{if(f.length<2)return;let C=0;f.forEach((V,U)=>{let I=f[Math.max(0,U-1)],st=f[Math.min(f.length-1,U+1)],xt=st.x-I.x,_t=st.z-I.z,Ct=Math.hypot(xt,_t)||1,Xt=-_t/Ct,te=xt/Ct,Jt=V.hw+.35;if(U&&(C+=Math.hypot(V.x-f[U-1].x,V.z-f[U-1].z)/6),v.push(V.x+Xt*Jt,V.y+.06,V.z+te*Jt,V.x-Xt*Jt,V.y+.06,V.z-te*Jt),b.push(0,C,1,C),U){let Et=T+(U-1)*2;w.push(Et,Et+2,Et+1,Et+1,Et+2,Et+3)}}),T+=f.length*2};for(let f of s.segs){let C=[];for(let V of f.pts)V.kind==="bridge"||V.kind==="stones"||V.kind==="stairs"?(B(C),C=[]):C.push(V);B(C)}let G=new $e;G.setAttribute("position",new Ze(new Float32Array(v),3)),G.setAttribute("uv",new Ze(new Float32Array(b),2)),G.setIndex(w),G.computeVertexNormals();let q=new Ft(G,new Pe({map:nt,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,side:Ve}));q.receiveShadow=!0,a.add(q)}{let nt=s.stream,v=[],b=[],w=[],T=0;for(let q=nt.r0;q<=nt.r1;q+=1){let f=s.x+Math.cos(nt.a)*q,C=s.z+Math.sin(nt.a)*q,V=-Math.sin(nt.a),U=Math.cos(nt.a),I=s.Hnat(f,C)+.5;if(v.push(f+V*2.2,I,C+U*2.2,f-V*2.2,I,C-U*2.2),b.push(0,q/4,1,q/4),T){let st=(T-1)*2;w.push(st,st+2,st+1,st+1,st+2,st+3)}T++}let B=new $e;B.setAttribute("position",new Ze(new Float32Array(v),3)),B.setAttribute("uv",new Ze(new Float32Array(b),2)),B.setIndex(w),B.computeVertexNormals();let G=new Ft(B,new qn({color:"#4AA6D8",specular:"#FFFFFF",shininess:140,normalMap:_,transparent:!0,opacity:.9,side:Ve}));G.material.normalScale.set(.8,.8),a.add(G)}{let nt=[],v=[],b=[],w=0;for(let G=-6;G<=r.VL+6;G+=.5){let q=r.riverZ(G),f=(r.riverZ(G+.1)-q)/.1,C=Math.hypot(1,f),V=-f/C,U=1/C,I=r.waterLevel(G);for(let st of[-1.35,1.35])nt.push(r.x+G+V*st,I,r.z+q+U*st),v.push(G/3,st>0?1:0);if(w){let st=(w-1)*2;b.push(st,st+1,st+2,st+1,st+3,st+2)}w++}let T=new $e;T.setAttribute("position",new Ze(new Float32Array(nt),3)),T.setAttribute("uv",new Ze(new Float32Array(v),2)),T.setIndex(b),T.computeVertexNormals();let B=new Ft(T,new qn({color:"#3D9FD8",specular:"#FFFFFF",shininess:140,normalMap:_,transparent:!0,opacity:.88}));B.material.normalScale.set(.7,.7),B.receiveShadow=!0,a.add(B)}let Mt=(nt,v,b,w,T)=>{let B=[kt(Ht(new de(.13,.22,b*.45,6),0,b*.22,0),"#5A3E26")];for(let G=0;G<v;G++){let q=G/v,f=w*(1-q*.62),C=b*.42;B.push(Ht(kt(new Ln(f,C,8,1),(V,U,I)=>Be(V,T?"#1F4A2B":"#24572F",T?"#3F7A43":"#4E8C46",.25+(I/C+.5)*.6+(en(U*7,I*3)-.5)*.25)),0,b*.32+G*b*.22+C/2,0,0,nt()*3,0))}return fn(B)},it=()=>{let nt=dn(43),v=[kt(Ht(new de(.14,.22,2.6,6),0,1.3,0),"#5A3E26")];for(let[b,w,T,B]of[[0,3.1,0,1.35],[.7,2.6,.3,.95],[-.6,2.7,-.4,1],[.1,3.8,-.2,.9]])v.push(Ht(kt(new An(B,0),(G,q,f)=>Be(G,"#2C6B33","#6FAE4E",.3+f/B*.35+(nt()-.5)*.3)),b,w,T));return fn(v)},yt=(nt,v,b)=>kt(Ht(new Ln(v*.9,nt*.95,6,1,!0),0,nt*.62,0),(w,T,B)=>Be(w,b?"#1F4A2B":"#24572F",b?"#3F7A43":"#4E8C46",.3+(B/nt+.5)*.5)),lt={pine:Zn(new Pe({vertexColors:!0,flatShading:!0}),.006,2,u),tree:Zn(new Pe({vertexColors:!0,flatShading:!0}),.01,1.2,u),palm:Zn(new Pe({vertexColors:!0,side:Ve}),.012,2.8,u),grass:Zn(new Pe({vertexColors:!0,side:Ve}),.5,0,u)},Rt={pineA:Mt(dn(5),4,7.5,2,!1),pineB:Mt(dn(6),3,6,2.5,!0),oak:it()};function vt(nt,v,b,w={}){let T=new Map,B=new _n,G=w.size||26;for(let q of b){let f=L(Math.floor(q.x/G),Math.floor(q.z/G));T.has(f)||T.set(f,[]),T.get(f).push(q)}for(let q of T.values()){let f=new ui(nt,v,q.length),C=0,V=0;q.forEach((I,st)=>{B.position.set(I.x,I.y,I.z),B.rotation.set(I.rx||0,I.ry||0,I.rz||0),I.s3?B.scale.set(...I.s3):B.scale.setScalar(I.s||1),B.updateMatrix(),f.setMatrixAt(st,B.matrix),I.color&&f.setColorAt(st,Sn.set(I.color)),C+=I.x,V+=I.z}),f.castShadow=!!w.cast,f.receiveShadow=!0,f.computeBoundingSphere(),a.add(f);let U=null;w.lod&&(U=new ui(w.lod,R,q.length),U.instanceMatrix=f.instanceMatrix,U.computeBoundingSphere(),U.visible=!1,a.add(U)),O.push({m:f,lo:U,x:C/q.length,z:V/q.length,far:w.far||105,lodAt:w.lodAt||62,small:!!w.small})}}let Nt=t.veg;vt(Rt.pineA,lt.pine,Nt.pineA,{cast:!0,lod:yt(7.5,2,!1)}),vt(Rt.pineB,lt.pine,Nt.pineB,{cast:!0,lod:yt(6,2.5,!0)}),vt(Rt.oak,lt.tree,Nt.oak,{cast:!0,lod:Ht(kt(new An(1.5,0),"#3E7D3A"),0,3.1,0)});let Yt=fn([Ht(kt(new An(.85,0),(nt,v,b,w)=>Be(nt,"#1E4A24","#4C8A3E",.35+b*.4+en(v*9,w*9)*.3)),0,.55,0,0,0,0,1,.95,1),Ht(kt(new An(.6,0),(nt,v,b)=>Be(nt,"#2A5C2C","#5E9E48",.5+b*.5)),.25,1.25,.1)]),$t=jl(P,u);vt(Yt,$t,Nt.hedge,{size:26,far:70,cast:!1}),vt(Do(),$t,Nt.bush,{size:30,far:70,small:!0}),vt(zo(),P,Nt.rock,{size:30,far:120});let fe=[vr(dn(3),1.1,9),vr(dn(8),-.8,10),vr(dn(15),.5,8)],Pt=fn([kt(Ht(new de(.25,.4,8,5),0,4,0),"#8B6A3E"),kt(Ht(new An(1.6,0),0,8.4,0,0,0,0,1,.55,1),"#3A7F34")]);fe.forEach((nt,v)=>vt(nt,lt.palm,Nt.palm[v].map(b=>({...b,s:b.s*2.2})),{cast:!0,lod:Pt,lodAt:70,far:260})),[Ql(dn(21),"#E8443A",["#2F8A3C","#7CCB55"]),Ql(dn(33),null,["#3B9447","#8AD460"]),Ql(dn(41),"#FFB52E",["#2C7F3A","#6FC24F"])].forEach((nt,v)=>vt(nt,lt.tree,Nt.fruit[v].map(b=>({...b,s:b.s*1.5})),{cast:!0,far:220})),vt(Do(),P,Nt.vbush,{size:30,far:90,small:!0}),vt(zo(),P,Nt.vrock,{size:30,far:70,small:!0}),vt(kt(new ri(.5,1),(nt,v,b,w)=>Be(nt,"#9C7A56","#D2B387",.45+b*.9+(en(v*5,w*5)-.5)*.4)),P,Nt.boulder,{size:40,far:260}),vt(fn([Ht(kt(new de(.15,.22,1.6,5),"#6B4A2A"),0,.8,0),Ht(kt(new An(1.2,0),(nt,v,b)=>Be(nt,"#4F7F3A","#8DB45E",b/1.2*.5+.5)),0,2.3,0,0,0,0,1,.85,1)]),P,Nt.rim,{size:40,far:300});{let nt=dn(5151),v=(I,st)=>[r.x+I,r.z+st],b=(I,st,xt)=>r.CAMPS.some(_t=>Math.hypot(I-_t.x,st-_t.z)<xt),w=[],T=[],B=[];for(let I=0;w.length<6e3&&I<3e4;I++){let st=-3+nt()*(r.VL+6),xt=(nt()<.5?-1:1)*nt()*(r.FLOOR+3);if(Math.abs(xt-r.riverZ(st))<1.15||b(st,xt,3.9))continue;let[_t,Ct]=v(st,xt);t.slope(_t,Ct)>.6||w.push({x:_t,y:t.H(_t,Ct)-.02,z:Ct,ry:nt()*Ee,s:.5+nt()*.7})}let G=["#FF6B9A","#FFFFFF","#FFD23F","#B28DFF","#FF8C42","#FF4D6D","#7FD1FF"];for(let I=0;I<9e3&&T.length<2400;I++){let st=-2+nt()*(r.VL+4),xt=(nt()<.5?-1:1)*nt()*(r.FLOOR-.3);if(Math.abs(xt-r.riverZ(st))<1.3||b(st,xt,3.9)||wn(st*.16,xt*.16)<.42)continue;let[_t,Ct]=v(st,xt);T.push({x:_t,y:t.H(_t,Ct),z:Ct,ry:nt()*Ee*.25,s:1.2+nt()*.8,color:G[Math.floor(wn(st*.3+40,xt*.3)*G.length*.999+nt()*1.5)%G.length]})}for(let I=-4;I<r.VL+4;I+=.55)for(let st of[-1,1]){if(nt()<.35)continue;let xt=r.riverZ(I)+st*(1.05+nt()*.55);if(b(I,xt,5))continue;let[_t,Ct]=v(I,xt);B.push({x:_t,y:t.H(_t,Ct)-.05,z:Ct,ry:nt()*Ee,s:.7+nt()*.6})}vt(No(),lt.grass,w,{size:24,far:55,small:!0});let q=fn([Ht(kt(new de(.007,.01,.24,3,1,!0),"#3E8E36"),0,.12,0),Ht(kt(new Wn(.02,6),"#FFD54A"),0,.248,.004,-1,0,0)]),f=fn([0,1,2,3,4].map(I=>{let st=I/5*Ee;return Ht(kt(new Wn(.036,5),"#FFFFFF"),Math.cos(st)*.035,Math.sin(st)*.035,0,0,0,st)}));Ht(f,0,.245,0,-1,0,0),vt(q,Zn(A,.8,0,u),T.map(I=>({...I,color:null})),{size:24,far:45,small:!0}),vt(f,Zn(new Pe({vertexColors:!0,side:Ve}),.8,0,u),T,{size:24,far:45,small:!0}),vt(tc(),Zn(A,.09,.2,u),B,{size:24,far:70,small:!0});let C=[],V=[];for(let I of s.ALL){if(I.kind==="bridge"||I.kind==="stones"||I.k%2)continue;let st=I.seg.pts,xt=-(st[Math.min(I.k+1,st.length-1)].z-st[Math.max(I.k-1,0)].z),_t=st[Math.min(I.k+1,st.length-1)].x-st[Math.max(I.k-1,0)].x,Ct=Math.hypot(xt,_t)||1;for(let Xt of[-1,1]){let te=I.hw+.15+d()*1.4,Jt=I.x+xt/Ct*te*Xt,Et=I.z+_t/Ct*te*Xt,Wt=t.H(Jt,Et),Vt=d();Vt<.55?C.push({x:Jt,y:Wt-.02,z:Et,ry:d()*Ee,s:.6+d()*.7}):Vt<.8&&V.push({x:Jt,y:Wt,z:Et,ry:d()*Ee,s:.7+d()*.6})}}vt(No(),lt.grass,C,{size:30,far:45,small:!0});let U=fn([...Array(7)].map((I,st)=>{let xt=st/7*Ee,_t=.55+st%3*.12,Ct=[],Xt=[];for(let Jt=0;Jt<6;Jt++){let Et=Jt/6,Wt=(Jt+1)/6,Vt=Math.sin(Et*Math.PI)*.09,oe=Math.sin(Wt*Math.PI)*.09,xe=[Math.cos(xt)*_t*Et,Math.sin(Et*Math.PI*.8)*.3,Math.sin(xt)*_t*Et],Te=[Math.cos(xt)*_t*Wt,Math.sin(Wt*Math.PI*.8)*.3,Math.sin(xt)*_t*Wt],re=-Math.sin(xt),Je=Math.cos(xt);Ct.push(xe[0]-re*Vt,xe[1],xe[2]-Je*Vt,Te[0]-re*oe,Te[1],Te[2]-Je*oe,xe[0]+re*Vt,xe[1],xe[2]+Je*Vt,xe[0]+re*Vt,xe[1],xe[2]+Je*Vt,Te[0]-re*oe,Te[1],Te[2]-Je*oe,Te[0]+re*oe,Te[1],Te[2]+Je*oe);for(let Ne=0;Ne<6;Ne++)Be(Sn,"#2F6B2C","#79B356",Et+.2),Xt.push(Sn.r,Sn.g,Sn.b)}let te=new $e;return te.setAttribute("position",new Ze(new Float32Array(Ct),3)),te.setAttribute("color",new Ze(new Float32Array(Xt),3)),te.computeVertexNormals(),te}));vt(U,Zn(new Pe({vertexColors:!0,side:Ve}),.35,0,u),V,{size:30,far:50,small:!0})}let ce=new Ce;a.add(ce);{let nt=bi(256,128,(v,b,w)=>{v.clearRect(0,0,b,w);let T=dn(3);for(let B=0;B<22;B++){let G=b*(.18+T()*.64),q=w*(.42+T()*.28),f=18+T()*30,C=v.createRadialGradient(G,q,0,G,q,f);C.addColorStop(0,"rgba(255,255,255,.95)"),C.addColorStop(.6,"rgba(250,252,255,.55)"),C.addColorStop(1,"rgba(240,246,255,0)"),v.fillStyle=C,v.beginPath(),v.arc(G,q,f,0,Ee),v.fill()}});for(let v=0;v<46;v++){let b=d()*Ee,w=600+d()*6200,T=new si(new ti({map:nt,transparent:!0,opacity:.45+d()*.35,depthWrite:!1,fog:!1})),B=380+d()*520;T.scale.set(B,B*.38,1),T.position.set(Math.cos(b)*w,t.SEA+1400+d()*800,Math.sin(b)*w),ce.add(T)}}ft=Mf({scene:a,G:t,U:u,camera:c,waterN:_,glowTex:x,colorBase:at});let ge=(nt,v=256,b=64,w=34)=>bi(v,b,T=>{T.fillStyle="#8B5A2B",T.fillRect(0,0,v,b),T.strokeStyle="#E8C170",T.lineWidth=Math.max(4,b/16),T.strokeRect(4,4,v-8,b-8),T.fillStyle="#FFF3D6",T.font=`900 ${w}px -apple-system, "Geeza Pro", system-ui, sans-serif`,T.textAlign="center",T.textBaseline="middle";try{T.direction="rtl"}catch{}T.fillText(nt,v/2,b/2+2)}),ie=new Map;{let nt=[];for(let w of s.bridges){w.seg.pts.slice(w.i,w.j+1).forEach((T,B)=>{if(T.gap)return;let G=w.seg.pts[Math.min(T.k+1,w.seg.pts.length-1)],q=Math.atan2(G.z-T.z,G.x-T.x);nt.push(Ht(kt(new Re(.5,.07,1.45),(f,C,V,U)=>Be(f,"#7A5634","#A57B4C",en(B,U*3)*.6+(V>0?.3:0))),T.x,T.y-.035,T.z,0,-q,0))});for(let T of[-1,1])for(let B of[.95,.45]){let G=[];for(let q=w.i-1;q<=w.j+1;q++){let f=w.seg.pts,C=f[we(q,0,f.length-1)],V=f[we(q+1,0,f.length-1)],U=f[we(q-1,0,f.length-1)],I=V.x-U.x,st=V.z-U.z,xt=Math.hypot(I,st)||1;G.push(new j(C.x-st/xt*.72*T,C.y+B,C.z+I/xt*.72*T))}nt.push(kt(new Mi(new Xn(G),G.length*2,.03,5),"#C9A46B"))}for(let T of[w.a,w.b])for(let B of[-1,1]){let G=T.seg.pts,q=G[Math.min(T.k+1,G.length-1)],f=G[Math.max(T.k-1,0)],C=q.x-f.x,V=q.z-f.z,U=Math.hypot(C,V)||1;nt.push(Ht(kt(new de(.09,.11,1.5,6),"#5C3A1A"),T.x-V/U*.8*B,T.y+.6,T.z+C/U*.8*B))}}for(let w of s.ALL)if(w.kind==="stairs"){let T=w.seg.pts,B=T[Math.min(w.k+1,T.length-1)],G=T[Math.max(w.k-1,0)],q=Math.atan2(B.z-G.z,B.x-G.x);nt.push(Ht(kt(new Re(.9,.5,2.7),(f,C,V,U)=>Be(f,"#7C766B","#ABA393",V+.4+en(w.k,U*5)*.3)),w.x,w.y-.25,w.z,0,-q+(en(w.k,3)-.5)*.08,0))}for(let{p:w,nx:T,nz:B,sz:G}of s.ledgeRocks)nt.push(Ht(kt(new ri(1,0).scale(G,G*(1.3+en(w.k,5)),G*.8),(q,f,C,V)=>Be(q,"#5E5A55","#A9A398",.35+C*.2+en(f*5+w.k,V*5)*.3)),w.x+T*(w.hw+G),w.y+G*.3,w.z+B*(w.hw+G),en(w.k,2)*.4,en(w.k,4)*3,0)),w.k%6===0&&nt.push(Ht(kt(new ri(.25,0),"#8A847A"),w.x-T*(w.hw-.05),w.y+.08,w.z-B*(w.hw-.05)));for(let w of s.stones)nt.push(Ht(kt(new de(w.r,w.r*1.12,1.4,9),(T,B,G)=>Be(T,"#7F7A72","#B7B1A6",G+.6+en(B*9,w.x)*.2)),w.x,w.y-.7,w.z,0,d()*3,0));{let w=s.rest[0],T=w.face,B=-Math.sin(T),G=Math.cos(T),q=w.x+Math.cos(T)*3,f=w.z+Math.sin(T)*3;for(let V of[-1,1])nt.push(Ht(kt(new de(.11,.13,3.4,7),"#5C3A1A"),q+B*2*V,w.y+1.7,f+G*2*V));nt.push(Ht(kt(new Re(.2,.2,4.6),"#4F3420"),q,w.y+3.35,f,0,-T,0));let C=new Ft(new Tn(3.4,.85),new Pe({map:ge("\u26F0\uFE0F \u0637\u0631\u064A\u0642 \u0627\u0644\u0642\u0645\u0629",512,128,60),side:Ve}));C.position.set(q,w.y+2.85,f),C.rotation.y=-T-Math.PI/2,a.add(C)}{let T=r.x+-6,B=r.z+5.5,G=t.H(T,B);nt.push(Ht(kt(new de(.08,.1,2.4,6),"#5C3A1A"),T,G+1.2,B));let q=new Ft(new Tn(2.4,.6),new Pe({map:ge("\u{1F3DE}\uFE0F \u0648\u0627\u062F\u064A \u0627\u0644\u063A\u0632\u0644\u0627\u0646",384,96,46),side:Ve}));q.position.set(T,G+2.25,B),q.rotation.y=Math.PI/2,a.add(q)}for(let w of s.rest)if(w.flag){for(let G=0;G<6;G++)nt.push(Ht(kt(new ri(.22-G*.025,0),"#9D978C"),w.x+1.6,w.y+.15+G*.25,w.z+1.1));nt.push(Ht(kt(new de(.05,.06,2.4,6),"#5C3A1A"),w.x-1.4,w.y+1.2,w.z-1.1));let T=new $e;T.setAttribute("position",new Ze(new Float32Array([0,.32,0,0,-.32,0,1.05,0,0]),3)),T.computeVertexNormals();let B=new Ft(T,new Pe({color:"#F4F1EA",side:Ve}));B.position.set(w.x-1.4,w.y+2.05,w.z-1.1),a.add(B),ie.set(w.id,B)}let v=ge("\u2B05 \u0644\u0644\u0642\u0645\u0629");for(let w of s.signs){let T=t.H(w.x,w.z);nt.push(Ht(kt(new de(.06,.07,1.9,6),"#5C3A1A"),w.x,T+.95,w.z));let B=new Ft(new Tn(1.1,.28),new Pe({map:v,side:Ve}));B.position.set(w.x+Math.cos(w.a)*.45,T+1.65,w.z+Math.sin(w.a)*.45),B.rotation.y=-w.a+Math.PI,a.add(B)}for(let w of s.logs){let T=t.H(w.x,w.z);nt.push(Ht(kt(new de(.32,.38,4.2,8),(B,G,q)=>B.set(Math.abs(q)>2?"#C9A36B":"#5A3E26")),w.x,T+.35,w.z,0,w.a,Math.PI/2))}let b=new Ft(fn(nt),new Pe({vertexColors:!0,side:Ve}));b.castShadow=!0,b.receiveShadow=!0,a.add(b)}let _e=200,De=new ui(new de(.22,.22,.05,20),new qn({color:"#FFC93C",specular:"#FFF4C0",shininess:90,emissive:"#6B4A00",emissiveIntensity:.55}),_e);De.castShadow=!0,De.frustumCulled=!1,De.count=0,a.add(De);let se=s.plaza,W=s.RP,St=s.HS,rt=new Ce;rt.position.set(se.x,St,se.z),a.add(rt);let ut=[],h={flag:null,flagBase:null,bell:null,lanterns:[],water:null,drops:null,leaves:null,kiosk:null,cups:[],streaks:null,scope:null},y=(nt,v)=>[Math.cos(nt*Mr)*v,Math.sin(nt*Mr)*v],D=new qn({color:"#B5562A",specular:"#FFFFFF",shininess:120,transparent:!0,opacity:.85}),N=new qn({color:"#C9A13B",specular:"#FFE9A8",shininess:90});{let nt=bi(512,512,(jt,Ie,Qe)=>{jt.fillStyle="#B9B1A3",jt.fillRect(0,0,Ie,Qe);for(let rn=0;rn<12;rn++){let Pn=rn*22,ii=Pn+22,vs=Math.max(6,Math.round(Ee*(Pn+11)/34));for(let ss=0;ss<vs;ss++){let Xh=ss/vs*Ee,qh=(ss+1)/vs*Ee,rc=.82+(rn*7+ss*3)%5*.04;jt.fillStyle=`rgb(${Math.round(196*rc)},${Math.round(186*rc)},${Math.round(168*rc)})`,jt.beginPath(),jt.arc(Ie/2,Qe/2,ii-1.5,Xh+.01,qh-.01),jt.arc(Ie/2,Qe/2,Math.max(0,Pn+1.5),qh-.01,Xh+.01,!0),jt.closePath(),jt.fill()}}}),v=new Ft(new Wn(W,64),new Pe({map:nt}));v.rotation.x=-Math.PI/2,v.position.y=.03,v.receiveShadow=!0,rt.add(v);let b=[];for(let jt=0;jt<64;jt++){let Ie=jt/64*Ee;Math.abs(In(Ie,s.ENTRY_A))<.16||Math.abs(In(Ie,s.DECK_A))<.2||b.push(Ht(kt(new Re(1.36,.72,.55),(Qe,rn,Pn,ii)=>Be(Qe,"#8E877B","#B8AF9F",.4+Pn+en(jt,ii*4)*.3)),Math.cos(Ie)*(W-.1),.36,Math.sin(Ie)*(W-.1),0,-Ie+Math.PI/2,0))}for(let jt=0;jt<10;jt++)b.push(Ht(kt(new Re(.46,.08,3.6),(Ie,Qe,rn,Pn)=>Be(Ie,"#7A5634","#A57B4C",en(jt,Pn)*.5+.3)),W-.3+jt*.48,.05,0));for(let jt of[-1,1]){b.push(Ht(kt(new Re(4.8,.07,.07),"#6B4423"),W+2.1,.95,jt*1.8));for(let Ie=0;Ie<5;Ie++)b.push(Ht(kt(new de(.05,.05,1,6),"#5C3A1A"),W+.1+Ie*1.1,.5,jt*1.8))}b.push(Ht(kt(new Re(.07,.07,3.6),"#6B4423"),W+4.5,.95,0));for(let jt=-1;jt<=1;jt++)b.push(Ht(kt(new de(.06,.06,1,6),"#5C3A1A"),W+4.5,.5,jt*1.6));for(let jt=0;jt<4;jt++)b.push(Ht(kt(new de(.12,.14,7,6),"#4F3420"),W+.5+jt*1.3,-3.4,(jt%2?1:-1)*1.5));b.push(kt(new ei([new wt(.001,0),new wt(2.35,0),new wt(2.45,.08),new wt(2.4,.62),new wt(2.15,.66),new wt(2.1,.22),new wt(.001,.22)],40),(jt,Ie,Qe)=>Be(jt,"#9F988C","#D6CFC2",Qe*1.5+.2))),b.push(kt(new ei([new wt(.001,.2),new wt(.32,.2),new wt(.22,.9),new wt(.18,1.4),new wt(.7,1.55),new wt(.72,1.68),new wt(.15,1.72),new wt(.12,2.15),new wt(.2,2.3),new wt(.001,2.38)],24),(jt,Ie,Qe)=>Be(jt,"#A79F92","#DCD5C8",Qe*.4)));let w=se.kioskA*Mr,[T,B]=y(se.kioskA,9.2),G=Math.atan2(-Math.cos(w),-Math.sin(w)),q=[],f=jt=>q.push(jt),C=(jt,Ie)=>jt.set(Math.floor((Ie+1.6)/.4)%2?"#A97B4C":"#93683E");f(Ht(kt(new Re(3.2,2.4,.12),C),0,1.2,-1.05));for(let jt of[-1,1])f(Ht(kt(new Re(.12,2.4,2.2),"#8A5F36"),jt*1.55,1.2,0));f(Ht(kt(new Re(3.5,.12,2.7),"#6B4423"),0,2.45,.15)),f(Ht(kt(new Re(3.1,1,.5),(jt,Ie,Qe)=>jt.set(Qe>.42?"#5C3A1A":Math.floor((Ie+1.55)/.31)%2?"#A97B4C":"#93683E")),0,.5,.85));for(let jt=0;jt<8;jt++)f(Ht(kt(new Re(.44,.04,.9),jt%2?"#FAF3E6":"#2E8B57"),-1.54+jt*.44,2.3,1.75,.35,0,0));f(Ht(kt(new Re(2.6,.06,.35),"#6B4423"),0,1.6,-.9));for(let jt=0;jt<5;jt++)f(Ht(kt(new de(.07,.06,.22,8),["#2E86AB","#C0612B","#F2E3C6","#9B2335","#E8C170"][jt]),-1+jt*.5,1.75,-.9));let V=new Ce;V.add(new Ft(fn(q),new Pe({vertexColors:!0,side:Ve}))),V.position.set(T,0,B),V.rotation.y=G,rt.add(V),V.traverse(jt=>{jt.isMesh&&(jt.castShadow=!0,jt.receiveShadow=!0)}),h.kiosk=V;let U=new Ft(new ei([new wt(.001,0),new wt(.14,0),new wt(.16,.05),new wt(.22,.2),new wt(.2,.42),new wt(.12,.5),new wt(.14,.56),new wt(.06,.62),new wt(.001,.64)],18),N);U.position.set(-1,1,.85),V.add(U);for(let jt=0;jt<6;jt++){let Ie=new Ft(new de(.045,.032,.1,10),D);Ie.position.set(-.3+jt*.2,1.05,.9),V.add(Ie),h.cups.push(Ie)}let I=_s({thobe:"#EDE6DA",bisht:null,shmagh:"#1E1E1E",beard:"#2E2A26",beads:!1});I.root.position.set(.35,0,-.25),V.add(I.root),ut.push({m:I,base:I.root.position.clone(),kind:"seller"});for(let jt of se.benches){let Ie=jt*Mr,[Qe,rn]=y(jt,6.6),Pn=-Ie-Math.PI/2,ii=-Math.sin(Ie),vs=Math.cos(Ie);b.push(Ht(kt(new Re(2.2,.1,.55),"#8A5F36"),Qe,.45,rn,0,Pn,0)),b.push(Ht(kt(new Re(2.2,.5,.08),"#7A5232"),Qe+Math.cos(Ie)*.3,.75,rn+Math.sin(Ie)*.3,0,Pn,0));for(let ss of[-.9,.9])b.push(Ht(kt(new Re(.1,.45,.5),"#6B4423"),Qe+ii*ss,.22,rn+vs*ss,0,Pn,0))}let st=()=>{let jt=new Ft(new de(.035,.026,.08,10),D);return jt.position.set(0,-.43,.05),jt},xt={tea:[se.meet[0]-se.x,se.meet[1]-se.z],stand:[T,B]},_t=[_s({thobe:"#D8CDB8",bisht:"#2D3A4E",shmagh:"#C8102E",beads:!1,beard:"#5A524C"}),_s({thobe:"#F4F1EA",bisht:null,shmagh:"#F4F1EA",beard:"none",beads:!0}),_s({thobe:"#CFE0E8",bisht:null,shmagh:"#C8102E",beard:"#3A3430",beads:!1})];se.guests.forEach((jt,Ie)=>{let Qe=_t[Ie],[rn,Pn]=y(jt.a,jt.r),ii=xt[jt.kind];Qe.root.position.set(rn,0,Pn),Qe.root.rotation.y=Math.atan2(ii[0]-rn,ii[1]-Pn),rt.add(Qe.root),ut.push({m:Qe,base:Qe.root.position.clone(),kind:jt.kind,ph:d()*6}),jt.kind==="tea"&&Qe.arms[1].el.add(st())});let Ct=118*Mr,[Xt,te]=y(118,9),Jt=-Math.sin(Ct),Et=Math.cos(Ct);for(let jt of[-1,1])b.push(Ht(kt(new Re(.18,2.8,.18),"#5C3A1A"),Xt+Jt*.9*jt,1.4,te+Et*.9*jt));b.push(Ht(kt(new Re(2.3,.2,.24),"#4F3420"),Xt,2.8,te,0,-Ct-Math.PI/2,0));let Wt=new Ce;Wt.position.set(Xt,2.7,te),rt.add(Wt);let Vt=new Ft(new ei([new wt(.001,-.05),new wt(.18,-.06),new wt(.24,-.25),new wt(.3,-.55),new wt(.42,-.72),new wt(.4,-.76),new wt(.001,-.76)],24),new qn({color:"#B07A2E",specular:"#FFE2A0",shininess:100}));Vt.castShadow=!0;let oe=new Ft(new qe(.07,10,8),He("#3B2A1A"));oe.position.y=-.7,Wt.add(Vt,oe),h.bell={g:Wt,swing:0,v:0};let[xe,Te]=y(300,10.2);b.push(Ht(kt(new de(.08,.1,9,8),"#D9D9D9"),xe,4.5,Te)),b.push(Ht(kt(new qe(.16,10,8),"#E8C170"),xe,9.05,Te));let re=new Tn(3.2,2,20,10);re.translate(1.6,0,0);let Je=new Float32Array(re.attributes.position.count*3);for(let jt=0;jt<re.attributes.position.count;jt++){let Ie=re.attributes.position.getY(jt);Sn.set(Ie>.33?"#CE1126":Ie>-.33?"#FFFFFF":"#141414"),Math.abs(Ie)<.2&&Math.abs(re.attributes.position.getX(jt)-1.6)<.35&&Sn.set("#007A3D"),Je.set([Sn.r,Sn.g,Sn.b],jt*3)}re.setAttribute("color",new Ze(Je,3));let Ne=new Ft(re,new Pe({vertexColors:!0,side:Ve}));Ne.position.set(xe+.1,7.9,Te),Ne.castShadow=!0,rt.add(Ne),h.flag=Ne,h.flagBase=Float32Array.from(re.attributes.position.array);let ae=new Ce;ae.position.set(W+3.9,0,0),rt.add(ae);for(let jt=0;jt<3;jt++){let Ie=jt/3*Ee,Qe=new Ft(new de(.03,.03,1.3,6),He("#3B3B3B"));Qe.position.set(Math.cos(Ie)*.25,.6,Math.sin(Ie)*.25),Qe.rotation.set(Math.sin(Ie)*.38,0,-Math.cos(Ie)*.38),ae.add(Qe)}let ve=new Ft(new de(.09,.13,1.1,16),N);ve.rotation.z=Math.PI/2-.15,ve.position.set(.1,1.32,0),ae.add(ve);let Oe=new Ft(new de(.14,.14,.06,16),He("#1A2A3A",{shininess:160,specular:"#FFFFFF"}));Oe.rotation.z=Math.PI/2-.15,Oe.position.set(.66,1.4,0),ae.add(Oe),yr(ae),h.scope=ae;let vn=se.lamps.map(jt=>jt*Mr);for(let jt of vn){let Ie=Math.cos(jt)*12.2,Qe=Math.sin(jt)*12.2;b.push(Ht(kt(new de(.06,.08,3.2,6),"#2E2E2E"),Ie,1.6,Qe));let rn=new Ce;rn.position.set(Ie,3,Qe);let Pn=new Ft(new de(.11,.11,.26,8),new yn({color:"#FFD36B"})),ii=new si(new ti({map:x,color:"#FFC14D",transparent:!0,opacity:.7,depthWrite:!1,blending:ni}));ii.scale.setScalar(.75),rn.add(Pn,ii),rt.add(rn),h.lanterns.push(rn)}let hn=[];for(let jt=0;jt<4;jt++){let Ie=vn[jt],Qe=vn[(jt+1)%4],rn=In(Ie,Qe);rn<0&&(rn+=Ee);for(let Pn=1;Pn<9;Pn++){let ii=Ie+rn*Pn/9,vs=Math.sin(Pn/9*Math.PI)*.6;hn.push([Math.cos(ii)*12.2,3.05-vs,Math.sin(ii)*12.2])}}let Le=new ui(new qe(.07,8,6),new yn({color:"#FFFFFF"}),hn.length),mn=new _n,Jn=["#FF5D8F","#FFD23F","#7FD1FF","#8DE26B"];hn.forEach(([jt,Ie,Qe],rn)=>{mn.position.set(jt,Ie,Qe),mn.updateMatrix(),Le.setMatrixAt(rn,mn.matrix),Le.setColorAt(rn,Sn.set(Jn[rn%4]))}),rt.add(Le);for(let jt of se.beds){let[Ie,Qe]=y(jt,11);b.push(Ht(kt(new de(.7,.6,.5,12),"#8E877B"),Ie,.25,Qe));for(let rn=0;rn<9;rn++)b.push(Ht(kt(new An(.13,0),["#FF5D8F","#FFD23F","#FFFFFF","#B28DFF"][rn%4]),Ie+Math.cos(rn)*.4,.58,Qe+Math.sin(rn)*.4))}let un=new Ft(fn(b),new Pe({vertexColors:!0,side:Ve}));un.castShadow=!0,un.receiveShadow=!0,rt.add(un),vt(Rt.pineA,lt.pine,se.pines.map(jt=>{let[Ie,Qe]=y(jt,11.6);return{x:se.x+Ie,y:St-.1,z:se.z+Qe,ry:d()*Ee,s:.9}}),{cast:!0,size:100,far:500});let bn=new Ft(new Wn(2.12,40),new qn({color:"#4AA6D8",specular:"#FFFFFF",shininess:140,normalMap:_,transparent:!0,opacity:.88}));bn.rotation.x=-Math.PI/2,bn.position.y=.55,rt.add(bn),h.water=bn;let ai=140,Sr=[];for(let jt=0;jt<ai;jt++)Sr.push([d()*Ee,d(),.5+d()*.5]);let Oh=new $e;Oh.setAttribute("position",new Ze(new Float32Array(ai*3),3)),h.drops=new cr(Oh,new Ts({size:.16,map:x,color:"#E6F6FF",transparent:!0,opacity:.9,depthWrite:!1})),h.drops.userData.seed=Sr,h.drops.frustumCulled=!1,rt.add(h.drops);let Bh=220,kh=[];for(let jt=0;jt<Bh;jt++)kh.push([d()*60-30,d()*8,d()*60-30,d()]);let Vh=new $e;Vh.setAttribute("position",new Ze(new Float32Array(Bh*3),3)),h.leaves=new cr(Vh,new Ts({size:.22,map:x,color:"#A8D46A",transparent:!0,opacity:0,depthWrite:!1})),h.leaves.userData.seed=kh,h.leaves.frustumCulled=!1,rt.add(h.leaves);let Hh=70,Gh=[];for(let jt=0;jt<Hh;jt++)Gh.push([d()*50-25,d()*9-1,d()*50-25,.5+d()]);let Wh=new $e;Wh.setAttribute("position",new Ze(new Float32Array(Hh*6),3)),h.streaks=new Es(Wh,new us({color:"#FFFFFF",transparent:!0,opacity:0,depthWrite:!1})),h.streaks.userData.seed=Gh,h.streaks.frustumCulled=!1,rt.add(h.streaks)}let J=new Ce;a.add(J);let dt={flames:[],glows:[],lantern:null};{let b=new j(4,0,-2.4),w=[],T=(ae,ve)=>ae.set(Math.floor((ve+1.7)/.425)%2?"#EAD9B5":"#D9C39C");w.push(Ht(kt(new Re(3.4,1.95,2.4),T),0,.975,-2.8));for(let ae of[-1,1])w.push(Ht(kt(new Re(3.62,.07,1.52),(ve,Oe)=>ve.set(Math.floor((Oe+1.81)/.4525)%2?"#C9AE82":"#B99D70")),0,2.32,-2.8+ae*.6,ae*.59,0,0));let B=new vi;B.moveTo(-1.2,0),B.lineTo(1.2,0),B.lineTo(0,.8),B.closePath();for(let ae of[-1,1])w.push(Ht(kt(new Qi(B),"#E3D0A8"),0+ae*1.7,1.95,-2.8,0,Math.PI/2,0));w.push(Ht(kt(new Re(.95,1.55,.05),"#3F2412"),0-.25,.775,-2.8+1.22));for(let ae of[-1,1]){let ve=new vi;ve.moveTo(0,0),ve.lineTo(.42*ae,0),ve.lineTo(0,-1),ve.closePath(),w.push(Ht(kt(new Qi(ve),"#E9D7B0"),0-.25+ae*.04,1.55,-2.8+1.25))}let G=new j(0,2.15,-2.8+1.2),q=new j(0,1.98,-2.8+2.55),f=G.distanceTo(q),C=Math.atan2(G.y-q.y,q.z-G.z);for(let ae=0;ae<8;ae++){let ve=-1.4875+ae*.425,Oe=ae%2?"#FAF3E6":"#D7263D";w.push(Ht(kt(new Re(.425,.035,f),Oe),ve,(G.y+q.y)/2,(G.z+q.z)/2,C,0,0)),w.push(Ht(kt(new Wn(.2125,10,Math.PI,Math.PI),Oe),ve,q.y,q.z+.01))}for(let ae of[-1,1])w.push(Ht(kt(new de(.045,.055,2.05,7),"#5C3A1A"),0+ae*1.68,1.02,-2.8+2.55));let V=0-.78,U=-2.8+2;w.push(Ht(kt(new Re(1,.06,.55),"#8B5A2B"),V,.74,U));for(let[ae,ve]of[[-1,-1],[1,-1],[-1,1],[1,1]])w.push(Ht(kt(new de(.03,.03,.72,5),"#6B4220"),V+ae*.44,.36,U+ve*.22));let I=ae=>new ei([new wt(.001,0),new wt(.09*ae,0),new wt(.15*ae,.07),new wt(.16*ae,.17),new wt(.11*ae,.28),new wt(.06*ae,.32),new wt(.075*ae,.36),new wt(.06*ae,.37)],14);w.push(Ht(kt(I(1),(ae,ve,Oe)=>ae.set(Oe>.2&&Oe<.24?"#F2E3C6":"#C0612B")),V-.3,.77,U)),w.push(Ht(kt(I(.8),(ae,ve,Oe)=>ae.set(Oe>.16&&Oe<.19?"#FFFFFF":"#2E86AB")),V+.02,.77,U-.05)),w.push(Ht(kt(new qe(.28,12,8),(ae,ve,Oe)=>Be(ae,"#C8B18A","#E2D2AE",Oe*2+.5)),0-2.05,.27,-2.8+1.2,0,0,0,1,1.2,1)),w.push(Ht(kt(new Re(.5,.42,.42),(ae,ve,Oe)=>ae.set(Math.abs(Oe)>.17||Math.abs(ve)>.21?"#7A4E25":"#A0703C")),0+1.95,.21,-2.8+1,0,.3,0));let st=(ae,ve)=>{let Oe=ae.distanceTo(ve),vn=Math.max(2,Math.round(Oe/.55));for(let hn=0;hn<=vn;hn++){let Le=ae.clone().lerp(ve,hn/vn);w.push(Ht(kt(new de(.045,.055,.85,6),"#8B5A2B"),Le.x,.42,Le.z))}for(let hn of[.3,.62]){let Le=kt(new Re(.05,1,.035),"#9C6A36");Ht(Le,0,0,0,0,0,0,1,Oe,1),Dh(Le,new j(ae.x,hn,ae.z),new j(ve.x,hn,ve.z)),w.push(Le)}},xt=new j(-5.8,0,-.75),_t=new j(-5.8,0,-2.9),Ct=new j(-3.1,0,-2.9),Xt=new j(-3.1,0,-.75);st(xt,_t),st(_t,Ct),st(Ct,Xt),w.push(Ht(kt(new Re(1,.18,.35),"#7A4E25"),-4.45,.09,-2.55)),w.push(Ht(kt(new Re(.9,.06,.28),"#D8C26A"),-4.45,.2,-2.55)),w.push(Ht(kt(new Re(1.75,.46,.06),"#7A4A22"),0,2.66,-2.8+1.25));for(let ae=0;ae<9;ae++){let ve=ae/9*Ee;w.push(Ht(kt(new ri(.11,0),(Oe,vn,hn)=>Be(Oe,"#7D776C","#B5AFA2",hn*4+.5)),b.x+Math.cos(ve)*.42,.06,b.z+Math.sin(ve)*.42,ae,ae*2,0,1,.7,1))}for(let ae=0;ae<3;ae++){let ve=ae/3*Math.PI;w.push(Ht(kt(new de(.05,.05,.62,6),(Oe,vn,hn)=>Oe.set(Math.abs(hn)>.27?"#C9A36B":"#4A2E18")),b.x,.1,b.z,0,ve,Math.PI/2-.25))}let te=new Ft(fn(w),new Pe({vertexColors:!0,side:Ve}));te.castShadow=!0,te.receiveShadow=!0,J.add(te);let Jt=new Ft(new Tn(1.62,.38),new Pe({map:ge(i.sign||"\u062E\u064A\u0645\u0629 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",512,128,64),emissive:"#3B2410",emissiveIntensity:.25}));Jt.position.set(0,2.66,-2.8+1.29),J.add(Jt);let Et=new Ce,Wt=new Ft(new de(.07,.07,.16,8),new yn({color:"#FFD36B"})),Vt=new si(new ti({map:x,color:"#FFC14D",transparent:!0,opacity:.75,depthWrite:!1,blending:ni}));Vt.scale.setScalar(.9),Et.add(Wt,Vt),Et.position.set(0+1.68,1.72,-2.8+2.55),J.add(Et),dt.lantern=Et;let oe=ae=>new yn({color:ae,transparent:!0,opacity:.9,depthWrite:!1,blending:ni});[["#FF5A1F",.2,.55,0],["#FF9A2E",.15,.45,.07],["#FFE07A",.09,.3,-.05]].forEach(([ae,ve,Oe,vn],hn)=>{let Le=new Ft(new Ln(ve,Oe,10,1,!0),oe(ae));Le.position.set(b.x+vn,.12+Oe/2,b.z-vn),Le.userData={h0:Oe,i:hn},J.add(Le),dt.flames.push(Le)});let xe=new si(new ti({map:x,color:"#FF8A2E",transparent:!0,opacity:.6,depthWrite:!1,blending:ni}));xe.position.set(b.x,.45,b.z),xe.scale.setScalar(1.8),J.add(xe),dt.glows.push(xe);let Te=new Ce,re=new Ft(new ei([new wt(.001,0),new wt(.1,0),new wt(.115,.02),new wt(.1,.09),new wt(.06,.14),new wt(.045,.2),new wt(.06,.24),new wt(.075,.26),new wt(.04,.3),new wt(.012,.34),new wt(.02,.36),new wt(.001,.37)],20),N);Te.add(re),Te.position.set(b.x-.75,.12,b.z+.35),J.add(Te);let Je=bi(256,160,(ae,ve,Oe)=>{ae.fillStyle="#8E1B26",ae.fillRect(0,0,ve,Oe),ae.fillStyle="#1F2F5C",ae.fillRect(10,10,ve-20,Oe-20),ae.fillStyle="#8E1B26",ae.fillRect(20,20,ve-40,Oe-40),ae.strokeStyle="#E8C170",ae.lineWidth=3,ae.strokeRect(16,16,ve-32,Oe-32);let vn=(hn,Le,mn,Jn)=>{ae.fillStyle=Jn,ae.beginPath(),ae.moveTo(hn,Le-mn),ae.lineTo(hn+mn*1.5,Le),ae.lineTo(hn,Le+mn),ae.lineTo(hn-mn*1.5,Le),ae.closePath(),ae.fill()};vn(ve/2,Oe/2,44,"#1F2F5C"),vn(ve/2,Oe/2,30,"#E8C170"),vn(ve/2,Oe/2,16,"#8E1B26"),vn(ve/2,Oe/2,6,"#F4EFE6")}),Ne=new Ft(new Tn(2,1.25),new Pe({map:Je}));Ne.rotation.x=-Math.PI/2,Ne.rotation.z=.04,Ne.position.set(0-.2,.02,-2.8+1.9),Ne.receiveShadow=!0,J.add(Ne)}let ot=new Ce;{let nt=new Ft(new uo(.95,1.18,48),new yn({color:"#FFD23F",transparent:!0,opacity:.9,depthWrite:!1,side:Ve}));nt.rotation.x=-Math.PI/2,nt.position.y=.03;let v=new Ft(new Wn(.95,40),new yn({color:"#FFE38A",transparent:!0,opacity:.25,depthWrite:!1}));v.rotation.x=-Math.PI/2,v.position.y=.025;let b=new Ft(new Ln(.2,.42,4),new qn({color:"#FFB703",emissive:"#FF8A00",emissiveIntensity:.6,shininess:80}));b.rotation.x=Math.PI,b.position.y=1.9,ot.add(nt,v,b),ot.userData={ring:nt,arrow:b},ot.visible=!1,a.add(ot)}function Bt(nt){let v=nt==="wolf",b=new Ce,w=new Ce;b.add(w);let T=He(v?"#7E8088":"#4E3626",{shininess:8}),B=He(v?"#C9CACF":"#6E5038",{shininess:8}),G=He(v?"#3E4048":"#2B1D12",{shininess:20}),q=v?.95:1,f=v?.72:.62,C=v?.22:.33,V=new Ft(new qe(1,22,14),T);V.scale.set(q/2,C,C*(v?.85:.9)),V.position.y=f,w.add(V);let U=new Ft(new qe(1,16,10),B);if(U.scale.set(q/2.3,C*.6,C*.75),U.position.set(0,f-C*.4,0),w.add(U),!v){let Jt=new Ft(new Re(q*.8,.12,.08),G);Jt.position.set(0,f+C*.95,0),w.add(Jt)}let I=new Ce;I.position.set(q/2+.05,f+(v?.16:0),0),w.add(I);let st=new Ft(new qe(v?.16:.2,16,12),T);st.scale.set(1.2,.95,.9),I.add(st);let xt=new Ft(new de(v?.05:.09,v?.09:.13,v?.26:.22,10),v?B:T);xt.rotation.z=-Math.PI/2,xt.position.set(v?.24:.25,-.04,0),I.add(xt);let _t=new Ft(new qe(v?.035:.07,10,8),G);_t.position.set(v?.37:.36,-.03,0),v||_t.scale.set(.5,1,1.1),I.add(_t);for(let Jt of[-1,1]){let Et=new Ft(new qe(.025,8,6),new yn({color:v?"#F2C14E":"#1A0E08"}));Et.position.set(.12,.06,Jt*.09),I.add(Et);let Wt=new Ft(new Ln(v?.06:.05,v?.16:.1,6),T);if(Wt.position.set(-.02,v?.17:.15,Jt*.08),Wt.rotation.set(Jt*.25,0,v?-.1:.4),I.add(Wt),!v){let Vt=new Ft(new Ln(.018,.12,6),He("#F4EFE6"));Vt.position.set(.36,-.04,Jt*.08),Vt.rotation.z=.6,I.add(Vt)}}let Ct=new Ce;Ct.position.set(-q/2,f+.05,0),w.add(Ct);let Xt=new Ft(v?new ki(.06,.36,4,8):new de(.015,.02,.18,6),T);Xt.position.y=v?-.2:-.09,Ct.add(Xt),Ct.rotation.z=v?.9:.4;let te=[];for(let[Jt,Et]of[[q*.33,1],[-q*.33,0]])for(let Wt of[-1,1]){let Vt=new Ce;Vt.position.set(Jt,f-C*.4,Wt*C*.55),w.add(Vt);let oe=new Ft(new de(.045,.06,(f-C*.4)*.55,8),T);oe.position.y=-((f-C*.4)*.55)/2,Vt.add(oe);let xe=new Ce;xe.position.y=-(f-C*.4)*.55,Vt.add(xe);let Te=new Ft(new de(.03,.04,(f-C*.4)*.45,8),v?T:G);Te.position.y=-((f-C*.4)*.45)/2,xe.add(Te),te.push({hip:Vt,knee:xe,front:Et,s:Wt})}return yr(b),a.add(b),b.scale.setScalar(1.15),{root:b,body:w,head:I,tail:Ct,legs:te,yaw:0}}let X=e.beasts.map(nt=>({e:nt,m:Bt(nt.kind)})),Zt=(()=>{let nt=new Ce,v=new Ce;nt.add(v);let b=He("#D9A066",{shininess:18}),w=He("#ECCB9C",{shininess:18}),T=He("#3B2A1A",{shininess:40}),B=[[-.56,0],[-.54,.1],[-.48,.17],[-.36,.2],[-.18,.18],[0,.185],[.18,.21],[.32,.215],[.44,.18],[.53,.11],[.57,0]],G=new ei(B.map(([Jt,Et])=>new wt(Et,Jt)),36);{let Jt=G.attributes.position;for(let Et=0;Et<Jt.count;Et++){let Wt=Jt.getX(Et),Vt=Jt.getY(Et),oe=Jt.getZ(Et),xe=Math.exp(-(((Vt+.1)/.22)**2));Wt<0&&(Wt*=1-xe*.28),Jt.setXYZ(Et,Vt,-Wt*(Wt<0?.95:1.05),oe*.82)}G.computeVertexNormals()}G=kt(G,(Jt,Et,Wt)=>{let Vt=Wt/.21;Vt<-.45?Jt.set("#FFF6E8"):Vt<-.15?Be(Jt,"#6A3F1F","#8A5528",(Vt+.45)/.3):Be(Jt,"#D9A066","#C58A50",(Vt-.3)*1.5),Et<-.46&&Vt<.55&&Jt.set("#FFF6E8")});let q=new Ft(G,He("#FFFFFF",{vertexColors:!0,shininess:22}));q.position.y=.8,v.add(q);let f=new Ce;f.position.set(-.56,.86,0);let C=new Ft(new ki(.025,.1,3,6),He("#2B1D12"));C.position.y=-.06,f.add(C),f.rotation.z=.5,v.add(f);let V=new Ce;V.position.set(.42,.88,0),v.add(V);let U=new Ft(new de(.055,.1,.5,14),b);U.position.y=.23,U.scale.z=.85,V.add(U);let I=new Ft(new de(.036,.06,.42,10),He("#FFF6E8"));I.position.set(.04,.21,0),I.rotation.z=-.08,V.add(I),V.rotation.z=-.6;let st=new Ce;st.position.set(0,.49,0),st.scale.setScalar(1.12),V.add(st);let xt=new Ft(new qe(.11,24,16),b);xt.scale.set(1.35,.9,.82),st.add(xt);let _t=new Ft(new qe(.075,18,12),w);_t.position.set(.14,-.045,0),_t.scale.set(1.25,.8,.85),st.add(_t);let Ct=new Ft(new qe(.03,10,8),T);Ct.position.set(.225,-.035,0),st.add(Ct);for(let Jt of[-1,1]){let Et=new Ft(new qe(.026,12,10),He("#120C08",{shininess:160,specular:"#FFFFFF"}));Et.position.set(.035,.035,Jt*.083),st.add(Et);let Wt=new Ft(new qe(.07,12,8),b);Wt.scale.set(.45,1.25,.25),Wt.position.set(-.08,.1,Jt*.08),Wt.rotation.set(Jt*.6,0,.6),st.add(Wt);let Vt=new Xn([new j(-.02,.07,Jt*.035),new j(-.09,.22,Jt*.07),new j(-.07,.38,Jt*.085),new j(0,.47,Jt*.06)]),oe=new Mi(Vt,18,.019,7);{let xe=oe.attributes.position,Te=8;for(let re=0;re<=18;re++){let Je=Vt.getPointAt(re/18),Ne=1-re/18*.7;for(let ae=0;ae<Te;ae++){let ve=re*Te+ae;xe.setXYZ(ve,Je.x+(xe.getX(ve)-Je.x)*Ne,Je.y+(xe.getY(ve)-Je.y)*Ne,Je.z+(xe.getZ(ve)-Je.z)*Ne)}}oe.computeVertexNormals()}st.add(new Ft(kt(oe,(xe,Te,re)=>xe.set(Math.floor(re*55)%2?"#3B2A1A":"#5A4330")),He("#FFFFFF",{vertexColors:!0,shininess:50})))}let Xt=new _n;Xt.position.set(0,.38,0),V.add(Xt);let te=[];for(let[Jt,Et]of[[.34,1],[-.38,0]])for(let Wt of[-1,1]){let Vt=new Ce;Vt.position.set(Jt,.76,Wt*.09),v.add(Vt);let oe=new Ft(new qe(Et?.075:.1,12,10),b);oe.scale.set(Et?1.1:1.15,Et?1.7:1.6,Et?.6:.55),oe.position.set(0,Et?-.05:-.07,0),Vt.add(oe);let xe=new Ft(new de(Et?.026:.03,Et?.04:.055,.36,10),b);xe.position.y=-.2,Vt.add(xe);let Te=new Ce;Te.position.y=-.38,Vt.add(Te),Te.add(new Ft(new qe(.024,8,6),w));let re=new Ft(new de(.014,.02,.34,8),w);re.position.y=-.17,Te.add(re);let Je=new Ft(new de(.017,.024,.045,8),He("#20150D",{shininess:60}));Je.position.y=-.355,Te.add(Je),te.push({hip:Vt,knee:Te,front:Et,s:Wt})}return yr(nt),a.add(nt),{root:nt,body:v,neck:V,head:st,tail:f,legs:te,collar:Xt,yaw:-.25,neckA:-.6}})(),K=_s();a.add(K.root);let Q=null,H=1.15,zt=1.6;function ht(nt){if(!(Q&&Q.id===nt.id)){if(Q)for(let v of[Q.root,Q.chute,Q.drop,Q.rope])a.remove(v);Q=pf(nt,x),Q.root.scale.set(H,zt,H),a.add(Q.root,Q.chute,Q.drop,Q.rope),Q.turn=0,Q.blink=0,Q.nextBlink=2}}function mt(){let nt=o.vq.camp;J.visible=!1,J.position.set(r.x+nt.x,r.VF+nt.base,r.z+nt.z),J.rotation.y=nt.rot,ot.position.set(o.vq.zoneW.x,t.H(o.vq.zoneW.x,o.vq.zoneW.z),o.vq.zoneW.z),K.root.rotation.y=nt.rot,K.yaw=nt.rot}let z=[],S=[];{let nt=new $e;nt.setAttribute("position",new Ze(new Float32Array([0,0,0,.9,0,-.25,.9,0,.25]),3)),nt.computeVertexNormals();let v=new yn({color:"#34406A",side:Ve});for(let B=0;B<9;B++){let G=new Ce,q=new Ft(nt,v),f=new Ft(nt,v);f.scale.x=-1,G.add(q,f);let C=B<5;G.userData={ph:d()*6,sp:.25+d()*.2,y:C?r.VF+26+d()*14:70+d()*40,cx:C?r.x+15+d()*90:(d()-.5)*300,cz:C?r.z+(d()-.5)*20:(d()-.5)*300,rad:10+d()*18,l:q,r:f},z.push(G),a.add(G)}let b=new vi;b.moveTo(0,0),b.bezierCurveTo(.05,.1,.16,.12,.15,.02),b.bezierCurveTo(.16,-.05,.08,-.1,0,-.02);let w=new Qi(b,6),T=["#FF8FD1","#FFD23F","#8FD6FF","#FFFFFF","#FF9E5E","#B28DFF"];for(let B=0;B<22;B++){let G=new Pe({color:T[B%T.length],side:Ve,emissive:T[B%T.length],emissiveIntensity:.25}),q=new Ce,f=new Ft(w,G),C=new Ft(w,G);C.scale.x=-1,q.add(f,C),q.userData={l:f,r:C,ax:r.x+6+d()*108,az:r.z+(d()-.5)*16,ph:d()*6},S.push(q),a.add(q)}}let Y={yaw:0,pitch:.26,dist:5.6,init:!1,tgt:new j,pos:new j,scopeYaw:0,scopePitch:-.38,effPitch:null,effDist:null},gt=new j,pt=new j;function At(nt){let v=o.hero;if(!v)return;if(o.scope){let xt=s.x+W+4.75,_t=St+1.45,Ct=s.z,Xt=Y.scopeYaw,te=Y.scopePitch;Y.pos.set(xt,_t,Ct),Y.tgt.set(xt+Math.cos(Xt)*100*Math.cos(te),_t+Math.sin(te)*100,Ct+Math.sin(Xt)*100*Math.cos(te));return}let b=o.focus,w=v.mode==="lift"||v.mode==="carry"||v.mode==="zip",T=v.mode==="glide";gt.set(b&&b.x!=null?b.x:v.x,v.y+(w||T?.9:1.6),b&&b.z!=null?b.z:v.z),b&&(Y.yaw=Rn(Y.yaw,b.yaw,2.2,nt)),v.mode==="carry"&&(Y.yaw=Rn(Y.yaw,Math.atan2(v.z-Y.pos.z,v.x-Y.pos.x),1.5,nt)),v.mode==="zip"&&(Y.yaw=Rn(Y.yaw,v.face,1.4,nt));let B=b?b.dist:v.mode==="carry"?11:v.mode==="zip"?9.5:w?7:T?9:o.summit?6.8:6.3;Y.init||(Y.tgt.copy(gt),Y.dist=B,Y.effPitch=null,Y.effDist=null,Y.init=!0);let G=v.mode==="faint"?2:w?6:14;Y.tgt.x=je(Y.tgt.x,gt.x,G,nt),Y.tgt.z=je(Y.tgt.z,gt.z,G,nt),Y.tgt.y=je(Y.tgt.y,gt.y,v.air&&!w&&!T?6:10,nt),Y.dist=je(Y.dist,B,3,nt);let q=(xt,_t)=>pt.set(Y.tgt.x-Math.cos(Y.yaw)*Math.cos(_t)*xt,Y.tgt.y+Math.sin(_t)*xt,Y.tgt.z-Math.sin(Y.yaw)*Math.cos(_t)*xt),f="",C=(xt,_t)=>{f="";for(let Ct=1;Ct<=8;Ct++){let Xt=Ct/8;q(xt*Xt,_t);let te=t.H(pt.x,pt.z);if(pt.y<te+.4||pt.y-.85*(1-Xt)<te+.2)return f="terr",Xt;if(f="canopy",!w&&t.tallNear(pt.x,pt.z,Jt=>{let Et=pt.x-Jt.x,Wt=pt.z-Jt.z,Vt=Et*Et+Wt*Wt,oe=Jt.r*(Jt.tree?3.4:1.2);return Ct>=2&&!o.summit&&Vt<oe*oe&&pt.y>te+1.9&&pt.y<te+9}))return Xt}return f="",0},V=w?.35:T?Math.max(Y.pitch,.42):Y.pitch,U=Y.dist,I=C(U,V);if(I&&f==="canopy"){let xt=Math.min(V,.04),_t=C(U,xt);(!_t||_t>I)&&(V=xt,I=_t)}else if(I)for(let xt of[.3,.6]){let _t=Math.min(V+xt,1.05),Ct=C(U,_t);if((!Ct||Ct>I)&&(V=_t,I=Ct),!I)break}I&&(U=Math.max(1.8,U*(I-1/8))),Y.effPitch=Y.effPitch==null?V:je(Y.effPitch,V,V<Y.effPitch?8:2.5,nt),Y.effDist=Y.effDist==null?U:je(Y.effDist,U,U<Y.effDist?10:2.5,nt),q(Math.min(Y.effDist,U+.6),Y.effPitch),t.tallNear(pt.x,pt.z,xt=>{let _t=pt.x-xt.x,Ct=pt.z-xt.z,Xt=_t*_t+Ct*Ct,te=xt.r+.35;if(Xt<te*te){let Jt=Math.sqrt(Xt)||.01;pt.x=xt.x+_t/Jt*te,pt.z=xt.z+Ct/Jt*te}return!1});let st=t.H(pt.x,pt.z)+.4;pt.y<st&&(pt.y=st),Y.pos.copy(pt)}let Gt=()=>(Y.yaw*180/Math.PI%360+360)%360,Lt=0,Ot=-1,ee=0,pe=0,tt=2,Ut=390,qt=844,Qt=new _n;Qt.rotation.order="YXZ";let he=new j,me=new j;function Ae(nt,v,b){Ut=nt,qt=v,tt=b,n.setPixelRatio(b),n.setSize(nt,v,!1),c.aspect=nt/v,c.updateProjectionMatrix()}let Kt=nt=>Math.PI/2-nt;function Ge(nt,v){let b=o.hero,w=Q,T=b.mode==="walk"&&!b.air,B=T?Math.abs(Math.sin(b.hopPh))*(b.run?.17:.08):0;w.root.position.set(b.x,b.y+B,b.z),w.turn=Rn(w.turn,Kt(b.face),14,v),w.root.rotation.y=w.turn;let G=b.mode==="faint";w.inner.rotation.z=G?-Math.PI/2*Math.min(1,b.faintT*4):-b.rot;let q=b.landT>0?b.landT*2.4:0;b.air&&b.mode==="walk"&&(q=-.12),T&&b.speed>.3&&(q+=(1-Math.abs(Math.sin(b.hopPh)))*.22-.07),w.inner.scale.set(1+.2*q,1-.22*q,1+.2*q),w.inner.position.y=.55*(1-.22*q);for(let[U,I]of w.feet.entries())I.position.y=-.49+(T&&b.speed>.3?Math.max(0,Math.sin(b.hopPh*2+U*Math.PI))*.06:0);let f=b.mode!=="walk"&&b.mode!=="glide"&&b.mode!=="fish"&&b.mode!=="climb"||b.stun>0||b.air&&b.vy<-7||o.wind>.5;w.nextBlink-=v,w.nextBlink<0&&(w.blink=.14,w.nextBlink=2.5+Math.random()*2.5),w.blink=Math.max(0,w.blink-v);for(let U of w.eyes)U.scale.set(f?1.08:1,f?1.15:w.blink>0||G?.12:1,1);for(let U of w.pupils)U.scale.setScalar(f?.72:1);w.smile.visible=!f,w.ooh.visible=f,w.acc.userData.star&&(w.acc.userData.star.rotation.y=nt*2);for(let U of[-1,1]){let I=w.acc.userData["tail"+U];I&&(I.rotation.x=.5+Math.sin(nt*12+U)*.25)}if(w.fire){w.bodyMat.emissiveIntensity=.5+Math.sin(nt*13)*.1;for(let U of w.flames)U.scale.set(1,.8+Math.sin(nt*14+U.userData.ph*1.7)*.25,1)}let C=w.chute;if(C.visible=b.chute>.01,C.visible){C.position.copy(w.root.position),C.rotation.y=w.root.rotation.y;let U=b.chute,I=U<1?Me(.15,1,U)+Math.sin(U*Math.PI)*.12:1;w.canopyHolder.scale.set(I,Me(.4,1,U),I),w.canopyHolder.position.y=Me(1,2.25,U),C.rotation.z=-(Math.hypot(b.vx,b.vz)*.05)+Math.sin(nt*1.5)*.05,C.rotation.x=Math.sin(nt*1.1)*.05;let st=w.lines.geometry.attributes.position,xt=w.canopyHolder.position.y,_t=1.7*Math.sin(Math.PI*.42)*I,Ct=xt+1.7*Math.cos(Math.PI*.42)*.62*Me(.4,1,U);for(let Xt=0;Xt<10;Xt++){let te=Xt/10*Ee,Jt=Xt%2?.22:-.22;st.setXYZ(Xt*2,Math.cos(te)*_t,Ct,Math.sin(te)*_t),st.setXYZ(Xt*2+1,Jt,.85,0)}st.needsUpdate=!0}let V=o.drop;if(w.drop.visible=!!(V&&V.t<2.4),w.drop.visible){let U=we(1-V.t*1.2,.1,1);w.drop.position.set(V.x,t.H(V.x,V.z)+.02,V.z),w.drop.scale.set(1.05,.62*U,1.05),w.drop.material.opacity=we(1-(V.t-1.4),0,1)}}function Se(nt,v){for(let{e:b,m:w}of X){let T=(b.x-c.position.x)**2+(b.z-c.position.z)**2>19600;if(w.root.visible=!T,T)continue;let B=b.speed>.3,G=b.state==="chase"||b.state==="charge";w.root.position.set(b.x,b.y,b.z),w.yaw=Rn(w.yaw,-b.face,10,v),w.root.rotation.y=w.yaw,w.body.position.y=B?Math.abs(Math.sin(b.ph))*(G?.06:.02):0,w.head.rotation.z=b.state==="notice"?-.25+Math.sin(nt*20)*.04:B?-.1:Math.sin(nt*1.3)*.15-.2,w.tail.rotation.z=(b.kind==="wolf"?.9:.4)+(G?.5:0)+Math.sin(nt*(G?14:3))*.15;for(let q of w.legs){let f=q.front?q.s>0?0:Math.PI:(q.s>0?Math.PI:0)+(G?.6:0);B?(q.hip.rotation.z=Math.sin(b.ph+f)*(G?.7:.4),q.knee.rotation.z=(q.front?-1:1)*Math.max(0,-Math.cos(b.ph+f))*.5):(q.hip.rotation.z=je(q.hip.rotation.z,0,8,v),q.knee.rotation.z=je(q.knee.rotation.z,0,8,v))}}}function ue(nt,v){let b=e.gz,w=Zt,T=b.state,B=Math.hypot(b.vx,b.vz)>.25;if(w.root.visible=(b.x-c.position.x)**2+(b.z-c.position.z)**2<260*260,!w.root.visible)return;let G=T==="flee"||T==="leap",q=T==="tired";w.root.position.set(b.x,b.y,b.z),w.body.position.y=B?Math.abs(Math.sin(b.ph))*(G?.07:.025):q?Math.sin(nt*9)*.008:0,w.yaw=Rn(w.yaw,-b.face,G?14:8,v),w.root.rotation.y=w.yaw,w.body.rotation.z=G?Math.sin(b.ph*2)*.05:0;let f=T==="graze"||T==="pen"&&!B;w.neckA=je(w.neckA,f?-2.05:q?-1.15:G?-.95:T==="alert"||T==="look"||T==="cornered"?-.32:-.6,f?3:7,v),w.neck.rotation.z=w.neckA,w.head.rotation.z=f?.5+Math.sin(nt*7)*.08:T==="alert"||T==="look"?.2:.35,w.head.rotation.y=T==="look"||T==="alert"||T==="cornered"?Math.sin(nt*1.6)*.25:0,w.tail.rotation.z=.5+(T==="alert"||G?.9:Math.sin(nt*3)*.2);let C=G?.6:q?.28:.36,V=T==="leap";for(let U of w.legs){let I=U.front?U.s>0?0:Math.PI:(U.s>0?Math.PI:0)+(G?.6:0);if(V){U.hip.rotation.z=U.front?.9:-.9,U.knee.rotation.z=U.front?-1.2:1.1;continue}if(B){let st=Math.sin(b.ph+I);U.hip.rotation.z=st*C,U.knee.rotation.z=(U.front?-1:1)*Math.max(0,-Math.cos(b.ph+I))*C*1.1}else U.hip.rotation.z=je(U.hip.rotation.z,0,8,v),U.knee.rotation.z=je(U.knee.rotation.z,0,8,v)}}function Ye(nt,v,b){let w=K,T=o.hero,B=o.vq,G=B.camp,q=T.x-B.merW.x,f=T.z-B.merW.z,C=Math.hypot(q,f);if(w.root.visible=C<200,!w.root.visible)return;let V=C<16||!!b,U=V?Math.atan2(q,f):G.rot+.15*Math.sin(nt*.3);o.focus&&o.focus.talk&&(U=G.rot+we(In(G.rot,Math.atan2(q,f)),-.7,.7)),w.yaw=Rn(w.yaw,U,3,v),w.root.rotation.y=w.yaw,w.root.position.set(B.merW.x,r.VF+G.base,B.merW.z),w.root.scale.y=1+Math.sin(nt*1.7)*.007;let I=!!(b&&b.who==="merchant"&&b.shown<[...b.text].length);w.mouth.scale.y=I?.25+Math.abs(Math.sin(nt*15))*.9:.3,w.head.rotation.x=I?Math.sin(nt*5)*.05:0;let[st,xt]=w.arms;if(B.delivered){for(let _t of w.arms)_t.sh.rotation.z=je(_t.sh.rotation.z,_t.s*2.5,6,v),_t.el.rotation.x=je(_t.el.rotation.x,-.3+Math.sin(nt*9+_t.s)*.3,8,v);w.root.position.y=r.VF+G.base+Math.abs(Math.sin(nt*6))*.06*(o.focus?1:0)}else if(B.caught&&V)xt.sh.rotation.z=je(xt.sh.rotation.z,1.35,5,v),xt.el.rotation.x=je(xt.el.rotation.x,0,5,v),xt.sh.rotation.x=je(xt.sh.rotation.x,-.2,5,v),st.sh.rotation.z=je(st.sh.rotation.z,-.12,5,v);else if(V&&C>2.5)xt.sh.rotation.z=je(xt.sh.rotation.z,2.55,5,v),xt.el.rotation.x=je(xt.el.rotation.x,0,5,v),xt.el.rotation.z=Math.sin(nt*8)*.45,xt.sh.rotation.x=0,st.sh.rotation.z=je(st.sh.rotation.z,-.12,5,v);else for(let _t of w.arms)_t.sh.rotation.z=je(_t.sh.rotation.z,_t.s*.12,4,v),_t.el.rotation.z=je(_t.el.rotation.z,0,4,v),_t.el.rotation.x=je(_t.el.rotation.x,-.25,4,v),_t.sh.rotation.x=0}function $(){let nt=Q.rope;if(nt.visible=o.vq.caught&&!o.vq.delivered&&Zt.root.visible,!nt.visible)return;Q.root.updateMatrixWorld(),Zt.root.updateMatrixWorld();let v=o.hero,b=he.set(v.x-Math.cos(v.face)*.3,Q.root.position.y+.8,v.z-Math.sin(v.face)*.3),w=Zt.collar.getWorldPosition(me),T=b.clone().lerp(w,.5);T.y=Math.min(b.y,w.y)-.25,nt.geometry.dispose(),nt.geometry=new Mi(new Cs(b.clone(),T,w.clone()),18,.016,5)}function ct(nt,v){let b=o.wind,w=h.flag.geometry.attributes.position,T=h.flagBase;for(let I=0;I<w.count;I++){let st=T[I*3],xt=T[I*3+1],_t=st/3.2;w.setXYZ(I,st*(1-b*.05),xt-_t*_t*.25*(1-b),Math.sin(nt*(4+b*12)-st*(1.6+b*1.5))*_t*(.18+b*.42)+Math.sin(nt*7+xt*3)*.04*_t)}w.needsUpdate=!0,h.flag.geometry.computeVertexNormals(),h.flag.rotation.y=-.3*b;let B=h.bell;B.v+=(-B.swing*18-B.v*1.4)*v,B.swing+=B.v*v,B.g.rotation.x=B.swing+b*.25*Math.sin(nt*6);for(let I of h.lanterns)I.rotation.z=Math.sin(nt*(1.6+b*8)+I.position.x)*(.06+b*.45),I.rotation.x=Math.cos(nt*(1.3+b*7))*b*.3;let G=h.drops.geometry.attributes.position,q=h.drops.userData.seed;for(let I=0;I<q.length;I++){let[st,xt,_t]=q[I],Ct=(nt*_t*.9+xt)%1,Xt=.15+Ct*1.6;G.setXYZ(I,Math.cos(st)*Xt+b*Ct*3.5,2.35+Math.sin(Ct*Math.PI)*.7-Ct*1.8,Math.sin(st)*Xt+b*Ct*1.2)}G.needsUpdate=!0,_.offset.x=nt*.03,h.water.material.normalScale.set(.6+b,.6+b);let f=h.streaks.geometry.attributes.position,C=h.streaks.userData.seed;h.streaks.material.opacity=le(.15,.8,b)*.55;for(let I=0;I<C.length;I++){let[,st,xt,_t]=C[I],Ct=(nt*_t*(.6+b*1.6)+I*.137)%1,Xt=-30+Ct*60,te=1.5+b*3.5,Jt=xt+Math.sin(nt*2+I)*.6,Et=st+Math.sin(Ct*9+I)*.4;f.setXYZ(I*2,Xt,Et,Jt+Ct*12-6),f.setXYZ(I*2+1,Xt-te,Et+.05,Jt+Ct*12-6-te*.3)}f.needsUpdate=!0;let V=h.leaves.geometry.attributes.position,U=h.leaves.userData.seed;h.leaves.material.opacity=b*.9;for(let I=0;I<U.length;I++){let[st,xt,_t,Ct]=U[I],Xt=nt*(.5+Ct)*(.4+b)%1;V.setXYZ(I,(st+Xt*70)%60-30,xt*.6+.4+Math.sin(nt*3+I)*.5,_t+Math.sin(nt+Ct*6)*2+Xt*6)}V.needsUpdate=!0;for(let I of ut){let st=I.m,[xt,_t]=st.arms,Ct=1-Math.exp(-6*v);st.root.scale.y=1+Math.sin(nt*1.6+I.base.x)*.006,st.root.rotation.x=-b*.14+Math.sin(nt*9+I.base.x)*b*.03;let Xt=0,te=-.12,Jt=-.25,Et=0,Wt=.12,Vt=-.25;if(b>.25&&(Xt=-2.4,te=0,Jt=-1.3),I.kind==="seller")Et=-.5+Math.sin(nt*2)*.1,Vt=-1.2,I.pour>0&&(I.pour-=v,Et=-1,Vt=-.6);else if(I.kind==="tea"){let oe=Math.max(0,Math.sin(nt*.5+I.ph))**8;Et=-.45-oe*.7,Vt=-1.25-oe*.9}else I.kind==="stand"&&(Xt=b>.25?Xt:-.2,Et=-.15+Math.sin(nt*1.1)*.25*(I.talk>0?1:.3),Vt=-.6);xt.sh.rotation.x+=(Xt-xt.sh.rotation.x)*Ct,xt.sh.rotation.z+=(te-xt.sh.rotation.z)*Ct,xt.el.rotation.x+=(Jt-xt.el.rotation.x)*Ct,_t.sh.rotation.x+=(Et-_t.sh.rotation.x)*Ct,_t.sh.rotation.z+=(Wt-_t.sh.rotation.z)*Ct,_t.el.rotation.x+=(Vt-_t.el.rotation.x)*Ct,st.mouth.scale.y=I.talk>0?.25+Math.abs(Math.sin(nt*15))*.9:.3,I.talk>0&&(I.talk-=v)}}let Dt=-1;function Tt(nt,v={}){let b=performance.now(),w=Lt?we((b-Lt)/1e3,0,.1):1/60;Lt=b;let T=Ot>=0?we(nt-Ot,0,.1):1/60;Ot=nt,u.time.value=nt,u.wind.value=je(u.wind.value,o.wind,3,T),pe++,ee=ee*.97+(w>1/38?1:0)*.03,pe>90&&ee>.6&&tt>1.01&&(Ae(Ut,qt,Math.max(1,tt-.25)),ee=0,pe=0);let B=o.hero;if(!B||!Q)return;Dt!==o.vq.camp&&(mt(),Dt=o.vq.camp),et(v.budget!=null?v.budget:4,B.x,B.z),Ge(nt,T),Se(nt,T),ue(nt,T),Ye(nt,T,v.dlg),$(),(s.rad(c.position.x,c.position.z)<120||o.scope)&&ct(nt,T);let G=0;for(let Et=0;Et<o.coins.length&&G<_e;Et++){let Wt=o.coins[Et];Wt.taken||(Wt.x-B.x)**2+(Wt.z-B.z)**2>3600||(Qt.position.set(Wt.x,Wt.y+Math.sin(nt*2+Et)*.08,Wt.z),Qt.rotation.set(Math.PI/2,nt*3+Et,0),Qt.scale.setScalar(1),Qt.updateMatrix(),De.setMatrixAt(G++,Qt.matrix))}De.count=G,De.instanceMatrix.needsUpdate=!0;for(let[Et,Wt]of ie)Wt.rotation.y=Math.sin(nt*2+Wt.position.x)*.3,Wt.material.color.set(o.reached.has(Et)?"#FFD23F":"#F4F1EA");if(ot.visible=o.vq.caught&&!o.vq.delivered,ot.visible){let Et=.5+.5*Math.sin(nt*5);ot.userData.ring.scale.setScalar(1+Et*.08),ot.userData.arrow.position.y=1.9+Et*.25,ot.userData.arrow.rotation.y=nt*2}for(let Et of dt.flames){let Wt=.75+Math.sin(nt*13+Et.userData.i*2)*.18;Et.scale.set(1,Wt,1),Et.position.y=.12+Et.userData.h0*Wt/2}for(let Et of dt.glows)Et.material.opacity=.5+Math.sin(nt*11)*.08;dt.lantern.rotation.z=Math.sin(nt*1.6)*.08;let q=Math.abs(c.position.x-(r.x+60))<160&&Math.abs(c.position.z-r.z)<90;for(let Et of S){if(Et.visible=q,!q)continue;let Wt=Et.userData,Vt=Wt.ax+Math.sin(nt*.45+Wt.ph)*2.2,oe=Wt.az+Math.sin(nt*.7+Wt.ph*2)*.9;Et.position.set(Vt,t.H(Vt,oe)+.7+Math.sin(nt*1.3+Wt.ph)*.35,oe),Et.rotation.y=Math.cos(nt*.45+Wt.ph)>0?-Math.PI/2:Math.PI/2;let xe=Math.sin(nt*22+Wt.ph)*1.1;Wt.l.rotation.y=xe,Wt.r.rotation.y=-xe}for(let Et of z){let Wt=Et.userData,Vt=nt*Wt.sp+Wt.ph;Et.position.set(Wt.cx+Math.cos(Vt)*Wt.rad,Wt.y+Math.sin(nt+Wt.ph)*.8,Wt.cz+Math.sin(Vt)*Wt.rad),Et.rotation.y=-Vt;let oe=Math.sin(nt*8+Wt.ph)*.6;Wt.l.rotation.z=oe,Wt.r.rotation.z=-oe}At(T);let f=s.rad(B.x,B.z),C=le(195,170,f)*le(78,62,B.y),V=le(50,95,B.y)*le(200,120,f),U=Math.max(0,c.position.y-t.SEA),I=le(20,420,U),st=o.scope?900:Me(Me(320,90,C),900,I),xt=o.scope?6500:Me(Me(3600,1200,C),6200,I);if(a.fog.near=je(a.fog.near,st,2,T),a.fog.far=je(a.fog.far,xt,2,T),h.scope.visible=!o.scope,c.fov=o.scope?13:62,c.updateProjectionMatrix(),c.position.copy(Y.pos),c.lookAt(Y.tgt),v.shake>0){let Et=v.shake*.25;c.position.x+=(Math.random()-.5)*Et,c.position.y+=(Math.random()-.5)*Et}E.position.copy(c.position);let _t=c.position.x,Ct=c.position.z,Xt=(o.scope?500:0)+le(40,95,c.position.y)*160;for(let Et of O){let Wt=(Et.x-_t)**2+(Et.z-Ct)**2,Vt=Et.small?Et.far:Et.far+Xt,oe=Wt<Vt*Vt;if(Et.lo){let xe=Wt<Et.lodAt*Et.lodAt&&!o.scope;Et.m.visible=oe&&xe,Et.lo.visible=oe&&!xe}else Et.m.visible=oe}ft.update(nt,T,c.position,B,v.budget!=null?v.budget:6);let te=Math.round(B.x/.25)*.25,Jt=Math.round(B.z/.25)*.25;g.target.position.set(te,B.y,Jt),g.position.set(te+m.x*90,B.y+m.y*90,Jt+m.z*90),ze(B),n.render(a,c)}let It=new j,bt=new wt;function ze(nt){let v=u.see.value;if(o.scope||nt.mode==="lift"||nt.mode==="carry"){v.w=0;return}c.updateMatrixWorld(),It.set(nt.x,nt.y+.9,nt.z).applyMatrix4(c.matrixWorldInverse);let b=-It.z;if(b<.3){v.w=0;return}It.set(nt.x,nt.y+.9,nt.z).project(c),n.getDrawingBufferSize(bt);let w=1.6/(b*Math.tan(c.fov*Math.PI/360))*(bt.y/2);v.set((It.x*.5+.5)*bt.x,(It.y*.5+.5)*bt.y,b,w)}let Fe=new j;function on(nt,v,b){return Fe.set(nt,v,b).project(c),{x:(Fe.x+1)/2,y:(1-Fe.y)/2,vis:Fe.z<1&&Fe.z>-1}}function an(nt=160){a.updateMatrixWorld(),u.see.value.w=0;let v=new j;K.head.getWorldPosition(v);let b=n.domElement.width,w=n.domElement.height,T=new Gn(28,b/w,.05,1200),B=new j(Math.sin(K.root.rotation.y),0,Math.cos(K.root.rotation.y));T.position.copy(v).addScaledVector(B,1.75).add(new j(0,.05,0)),T.lookAt(v.x,v.y-.02,v.z),E.position.copy(T.position),g.target.position.copy(v),g.position.set(v.x+m.x*60,v.y+m.y*60,v.z+m.z*60);let G=[Q&&Q.root.visible,Zt.root.visible];Q&&(Q.root.visible=!1),Zt.root.visible=!1,n.render(a,T),Q&&(Q.root.visible=G[0]),Zt.root.visible=G[1];let q=document.createElement("canvas");q.width=q.height=nt;let f=Math.min(b,w);return q.getContext("2d").drawImage(n.domElement,(b-f)/2,(w-f)/2,f,f,0,0,nt,nt),q.toDataURL("image/jpeg",.9)}return{IV:ft,setSize:Ae,render:Tt,project:on,heading:Gt,cam:Y,portrait:an,mapShot:(nt=1024)=>ft.mapShot(nt),buildHi:et,setHero:ht,pourTea:()=>{for(let nt of ut)nt.kind==="seller"&&(nt.pour=1.4,nt.talk=3)},talkNpc:nt=>{let v=ut.filter(b=>b.kind===nt);v.length&&(v[Math.floor(Math.random()*v.length)].talk=3)},ringBell:()=>{h.bell.v+=2.4},renderer:n,scene:a,camera:c,U:u,fx:h,npcs:ut,get pr(){return tt},get hiLeft(){return ft.pending()}}}function wf(i,t={}){let e=performance.now(),n=yf(t.map||_f),s=performance.now()-e,r=vf(n),o=Sf({renderer:t.renderer,sign:t.sign},n,r),a=r.S,l=o.cam,c=Math.round(performance.now()-e);function u(g,E={}){o.setHero(g);let x=r.enter(g.id,E);return l.yaw=a.hero.face,l.pitch=.26,l.init=!1,o.IV.warm(a.hero.x,a.hero.z,a.hero.y+3),x}function d(g,E={}){a.scope?(l.scopeYaw=we(l.scopeYaw+(E.dyaw||0)*.35,-.9,.9),l.scopePitch=we(l.scopePitch+(E.dpitch||0)*-.3,-.75,.2)):(l.yaw+=E.dyaw||0,l.pitch=we(l.pitch+(E.dpitch||0),-.3,1.15));let x=E.jx||0,_=E.jy||0,A=Math.cos(l.yaw),P=Math.sin(l.yaw),R={mx:A*_-P*x,mz:P*_+A*x,mag:E.mag||0,jump:!!E.jump,sneak:!!E.sneak},O=r.step(g,R);for(let L of O)Array.isArray(L)&&L[0]==="respawn"&&(l.yaw=a.hero.face,l.init=!1,o.IV.warm(a.hero.x,a.hero.z,a.hero.y+3));return O}function p(g){return g==="scope"?(r.interact("scope"),l.scopeYaw=0,l.scopePitch=-.2,a.scope):g==="tea"?(r.interact("tea"),o.pourTea(),!0):g==="chat"?(o.talkNpc("tea"),!0):g==="bell"?(o.ringBell(),!0):r.interact(g)}return{G:n,sim:r,view:o,S:a,cam:l,enter:u,step:d,interact:p,threats:()=>r.beasts.filter(g=>g.state==="chase"||g.state==="charge"||g.state==="notice").map(g=>({kind:g.kind,x:g.x,y:g.y,z:g.z,state:g.state})),render:o.render,setSize:o.setSize,project:o.project,heading:o.heading,nearInteract:r.nearInteract,skipWait:r.skipWait,objective:r.objective,respawn:r.respawn,setTools:r.setTools,mapShot:o.mapShot,portrait:o.portrait,ground:n.H,warm:(g,E,x)=>o.IV.warm(g,E,x),info:{HALF:n.HALF,M:n.M,V:n.V,I:n.I,SEA:n.SEA,rest:n.restPoints,buildMs:c,geoMs:Math.round(s)},renderer:o.renderer,scene:o.scene,camera:o.camera,U:o.U,get pr(){return o.pr}}}return Rf(D_);})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
