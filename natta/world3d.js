/* نطّة — العالم المفتوح 3D. يتضمن three.js r187 (MIT, © 2010-2026 three.js authors) */
var NattaWorld3D=(()=>{var dc=Object.defineProperty;var Nf=Object.getOwnPropertyDescriptor;var Uf=Object.getOwnPropertyNames;var Bf=Object.prototype.hasOwnProperty;var Of=(i,t)=>{for(var e in t)dc(i,e,{get:t[e],enumerable:!0})},kf=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Uf(t))!Bf.call(i,s)&&s!==e&&dc(i,s,{get:()=>t[s],enumerable:!(n=Nf(t,s))||n.enumerable});return i};var Vf=i=>kf(dc({},"__esModule",{value:!0}),i);var j1={};Of(j1,{createWorld:()=>zf,makeRenderer:()=>vf,supported:()=>Mf});var al="188dev";var Gu=0,Kc=1,Wu=2;var Fs=1,Xu=2,gr=3,_s=0,kn=1,Be=2,Ls=0,xr=1,zn=2,jc=3,Qc=4,qu=5;var Ds=100,Yu=101,Zu=102,Ju=103,$u=104,Ku=200,ju=201,Qu=202,td=203,th=204,eh=205,ed=206,nd=207,id=208,sd=209,rd=210,od=211,ad=212,ld=213,cd=214,wa=0,Sa=1,ba=2,or=3,Aa=4,Ea=5,Ta=6,Ca=7,wo=0,hd=1,ud=2,Wi=0,nh=1,ih=2,sh=3,So=4,rh=5,oh=6,ah=7;var lh=300,zs=301,_r=302,ll=303,cl=304,ds=1e3,Oi=1001,Ra=1002,Dn=1003,dd=1004;var bo=1005;var Qn=1006,hl=1007;var ss=1008;var ii=1009,ch=1010,hh=1011,yr=1012,ul=1013,Li=1014,Ai=1015,Di=1016,dl=1017,fl=1018,Ns=1020,uh=35902,dh=35899,fh=1021,ph=1022,zi=1023,ts=1026,rs=1027,pl=1028,ml=1029,ys=1030,gl=1031;var xl=1033,Ao=33776,Eo=33777,To=33778,Co=33779,_l=35840,yl=35841,vl=35842,Ml=35843,wl=36196,Sl=37492,bl=37496,Al=37488,El=37489,Ro=37490,Tl=37491,Cl=37808,Rl=37809,Pl=37810,Il=37811,Fl=37812,Ll=37813,Dl=37814,zl=37815,Nl=37816,Ul=37817,Bl=37818,Ol=37819,kl=37820,Vl=37821,Hl=36492,Gl=36494,Wl=36495,Xl=36283,ql=36284,Po=36285,Yl=36286;var kr=2300,Pa=2301,va=2302,kc=2303,Vc=2400,Hc=2401,Gc=2402;var fd=3200;var Io=0,pd=1,os="",jn="srgb",Vr="srgb-linear",Hr="linear",cn="srgb";var Ma=7680;var md=519,gd=512,xd=513,_d=514,mh=515,yd=516,vd=517,gh=518,xh=519,_h=35044;var yh="300 es",xi=2e3,ar=2001;function Hf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}var Gf={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};typeof Float16Array<"u"&&(Gf.Float16Array=Float16Array);function Wf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Md(){let i=Gr("canvas");return i.style.display="block",i}var iu={},lr=null;function Wr(...i){let t="THREE."+i.shift();lr?lr("log",t,...i):console.log(t,...i)}function wd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ue(...i){i=wd(i);let t="THREE."+i.shift();if(lr)lr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Oe(...i){i=wd(i);let t="THREE."+i.shift();if(lr)lr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ur(...i){let t=i.join(" ");t in iu||(iu[t]=!0,Ue(...i))}function Sd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var bd={[wa]:wa,[ba]:Ta,[Aa]:Aa,[or]:Ea,[Sa]:Sa,[Ta]:ba,[Ca]:Ca,[Ea]:or},Vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var fc=Math.PI/180,Ia=180/Math.PI;function vs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gn[i&255]+Gn[i>>8&255]+Gn[i>>16&255]+Gn[i>>24&255]+"-"+Gn[t&255]+Gn[t>>8&255]+"-"+Gn[t>>16&15|64]+Gn[t>>24&255]+"-"+Gn[e&63|128]+Gn[e>>8&255]+"-"+Gn[e>>16&255]+Gn[e>>24&255]+Gn[n&255]+Gn[n>>8&255]+Gn[n>>16&255]+Gn[n>>24&255]).toLowerCase()}function Qe(i,t,e){return Math.max(t,Math.min(e,i))}function Xf(i,t){return(i%t+t)%t}function pc(i,t,e){return(1-e)*i+e*t}function Ad(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ed(i,t){if(t.constructor===Float32Array)return i;let e=Zl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Td(i,t){if(t.constructor===Float32Array)return i;let e=Zl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Ah=class Ah{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qe(this.x,t.x,e.x),this.y=Qe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qe(this.x,t,e),this.y=Qe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ah.prototype.isVector2=!0;var It=Ah,_i=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],g=r[o+0],x=r[o+1],y=r[o+2],R=r[o+3];if(f!==R||l!==g||c!==x||u!==y){let m=l*g+c*x+u*y+f*R;m<0&&(g=-g,x=-x,y=-y,R=-R,m=-m);let v=1-a;if(m<.9995){let P=Math.acos(m),F=Math.sin(P);v=Math.sin(v*P)/F,a=Math.sin(a*P)/F,l=l*v+g*a,c=c*v+x*a,u=u*v+y*a,f=f*v+R*a}else{l=l*v+g*a,c=c*v+x*a,u=u*v+y*a,f=f*v+R*a;let P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],g=r[o+1],x=r[o+2],y=r[o+3];return t[e]=a*y+u*f+l*x-c*g,t[e+1]=l*y+u*g+c*f-a*x,t[e+2]=c*y+u*x+a*g-l*f,t[e+3]=u*y-a*f-l*g-c*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),g=l(n/2),x=l(s/2),y=l(r/2);switch(o){case"XYZ":this._x=g*u*f+c*x*y,this._y=c*x*f-g*u*y,this._z=c*u*y+g*x*f,this._w=c*u*f-g*x*y;break;case"YXZ":this._x=g*u*f+c*x*y,this._y=c*x*f-g*u*y,this._z=c*u*y-g*x*f,this._w=c*u*f+g*x*y;break;case"ZXY":this._x=g*u*f-c*x*y,this._y=c*x*f+g*u*y,this._z=c*u*y+g*x*f,this._w=c*u*f-g*x*y;break;case"ZYX":this._x=g*u*f-c*x*y,this._y=c*x*f+g*u*y,this._z=c*u*y-g*x*f,this._w=c*u*f+g*x*y;break;case"YZX":this._x=g*u*f+c*x*y,this._y=c*x*f+g*u*y,this._z=c*u*y-g*x*f,this._w=c*u*f-g*x*y;break;case"XZY":this._x=g*u*f-c*x*y,this._y=c*x*f-g*u*y,this._z=c*u*y+g*x*f,this._w=c*u*f+g*x*y;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],g=n+a+f;if(g>0){let x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(u-l)*x,this._y=(r-c)*x,this._z=(o-s)*x}else if(n>a&&n>f){let x=2*Math.sqrt(1+n-a-f);this._w=(u-l)/x,this._x=.25*x,this._y=(s+o)/x,this._z=(r+c)/x}else if(a>f){let x=2*Math.sqrt(1+a-n-f);this._w=(r-c)/x,this._x=(s+o)/x,this._y=.25*x,this._z=(l+u)/x}else{let x=2*Math.sqrt(1+f-n-a);this._w=(o-s)/x,this._x=(r+c)/x,this._y=(l+u)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Eh=class Eh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(su.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(su.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qe(this.x,t.x,e.x),this.y=Qe(this.y,t.y,e.y),this.z=Qe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qe(this.x,t,e),this.y=Qe(this.y,t,e),this.z=Qe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mc.copy(this).projectOnVector(t),this.sub(mc)}reflect(t){return this.sub(mc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Eh.prototype.isVector3=!0;var j=Eh,mc=new j,su=new _i,Th=class Th{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],g=n[2],x=n[5],y=n[8],R=s[0],m=s[3],v=s[6],P=s[1],F=s[4],I=s[7],O=s[2],D=s[5],b=s[8];return r[0]=o*R+a*P+l*O,r[3]=o*m+a*F+l*D,r[6]=o*v+a*I+l*b,r[1]=c*R+u*P+f*O,r[4]=c*m+u*F+f*D,r[7]=c*v+u*I+f*b,r[2]=g*R+x*P+y*O,r[5]=g*m+x*F+y*D,r[8]=g*v+x*I+y*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,g=a*l-u*r,x=c*r-o*l,y=e*f+n*g+s*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/y;return t[0]=f*R,t[1]=(s*c-u*n)*R,t[2]=(a*n-s*o)*R,t[3]=g*R,t[4]=(u*e-s*l)*R,t[5]=(s*r-a*e)*R,t[6]=x*R,t[7]=(n*l-c*e)*R,t[8]=(o*e-n*r)*R,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ur("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gc.makeScale(t,e)),this}rotate(t){return Ur("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gc.makeRotation(-t)),this}translate(t,e){return Ur("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Th.prototype.isMatrix3=!0;var We=Th,gc=new We,ru=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ou=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qf(){let i={enabled:!0,workingColorSpace:Vr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===cn&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===cn&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===os?Hr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vr]:{primaries:t,whitePoint:n,transfer:Hr,toXYZ:ru,fromXYZ:ou,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:t,whitePoint:n,transfer:cn,toXYZ:ru,fromXYZ:ou,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),i}var tn=qf();function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vs,Fa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Vs===void 0&&(Vs=Gr("canvas")),Vs.width=t.width,Vs.height=t.height;let s=Vs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Vs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Gr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qi(e[n]/255)*255):e[n]=Qi(e[n]);return{data:e,width:t.width,height:t.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Yf=0,cr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=vs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xc(s[o].image)):r.push(xc(s[o]))}else r=xc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function xc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}var Zf=0,_c=new j,ti=class i extends Vi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Oi,s=Oi,r=Qn,o=ss,a=zi,l=ii,c=i.DEFAULT_ANISOTROPY,u=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=vs(),this.name="",this.source=new cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(_c).x}get height(){return this.source.getSize(_c).y}get depth(){return this.source.getSize(_c).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ue(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ue(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ds:t.x=t.x-Math.floor(t.x);break;case Oi:t.x=t.x<0?0:1;break;case Ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ds:t.y=t.y-Math.floor(t.y);break;case Oi:t.y=t.y<0?0:1;break;case Ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=lh;ti.DEFAULT_ANISOTROPY=1;var Ch=class Ch{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){let e=Qe(t.w,-1,1);this.w=2*Math.acos(e);let n=Math.sqrt(1-e*e);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],f=l[8],g=l[1],x=l[5],y=l[9],R=l[2],m=l[6],v=l[10];if(Math.abs(u-g)<.01&&Math.abs(f-R)<.01&&Math.abs(y-m)<.01){if(Math.abs(u+g)<.1&&Math.abs(f+R)<.1&&Math.abs(y+m)<.1&&Math.abs(c+x+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let F=(c+1)/2,I=(x+1)/2,O=(v+1)/2,D=(u+g)/4,b=(f+R)/4,L=(y+m)/4;return F>I&&F>O?F<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(F),s=D/n,r=b/n):I>O?I<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(I),n=D/s,r=L/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=b/r,s=L/r),this.set(n,s,r,e),this}let P=Math.sqrt((m-y)*(m-y)+(f-R)*(f-R)+(g-u)*(g-u));return Math.abs(P)<.001&&(P=1),this.x=(m-y)/P,this.y=(f-R)/P,this.z=(g-u)/P,this.w=Math.acos((c+x+v-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qe(this.x,t.x,e.x),this.y=Qe(this.y,t.y,e.y),this.z=Qe(this.z,t.z,e.z),this.w=Qe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qe(this.x,t,e),this.y=Qe(this.y,t,e),this.z=Qe(this.z,t,e),this.w=Qe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ch.prototype.isVector4=!0;var fn=Ch,La=class extends Vi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new fn(0,0,t,e),this.scissorTest=!1,this.viewport=new fn(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new ti({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++){let o=this.textures[s],a=o.images?o.images[0]:o.image;a.width=t,a.height=e,a.depth=n,o.isData3DTexture!==!0&&(o.isArrayTexture=a.depth>1)}this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new cr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends La{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xr=class extends ti{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Da=class extends ti{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ol=class ol{constructor(t,e,n,s,r,o,a,l,c,u,f,g,x,y,R,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,f,g,x,y,R,m)}set(t,e,n,s,r,o,a,l,c,u,f,g,x,y,R,m){let v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=s,v[1]=r,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=f,v[14]=g,v[3]=x,v[7]=y,v[11]=R,v[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ol().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Hs.setFromMatrixColumn(t,0).length(),r=1/Hs.setFromMatrixColumn(t,1).length(),o=1/Hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let g=o*u,x=o*f,y=a*u,R=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=x+y*c,e[5]=g-R*c,e[9]=-a*l,e[2]=R-g*c,e[6]=y+x*c,e[10]=o*l}else if(t.order==="YXZ"){let g=l*u,x=l*f,y=c*u,R=c*f;e[0]=g+R*a,e[4]=y*a-x,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=x*a-y,e[6]=R+g*a,e[10]=o*l}else if(t.order==="ZXY"){let g=l*u,x=l*f,y=c*u,R=c*f;e[0]=g-R*a,e[4]=-o*f,e[8]=y+x*a,e[1]=x+y*a,e[5]=o*u,e[9]=R-g*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let g=o*u,x=o*f,y=a*u,R=a*f;e[0]=l*u,e[4]=y*c-x,e[8]=g*c+R,e[1]=l*f,e[5]=R*c+g,e[9]=x*c-y,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let g=o*l,x=o*c,y=a*l,R=a*c;e[0]=l*u,e[4]=R-g*f,e[8]=y*f+x,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=x*f+y,e[10]=g-R*f}else if(t.order==="XZY"){let g=o*l,x=o*c,y=a*l,R=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=g*f+R,e[5]=o*u,e[9]=x*f-y,e[2]=y*f-x,e[6]=a*u,e[10]=R*f+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jf,t,$f)}lookAt(t,e,n){let s=this.elements;return si.subVectors(t,e),si.lengthSq()===0&&(si.z=1),si.normalize(),ls.crossVectors(n,si),ls.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),ls.crossVectors(n,si)),ls.normalize(),Go.crossVectors(si,ls),s[0]=ls.x,s[4]=Go.x,s[8]=si.x,s[1]=ls.y,s[5]=Go.y,s[9]=si.y,s[2]=ls.z,s[6]=Go.z,s[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],g=n[9],x=n[13],y=n[2],R=n[6],m=n[10],v=n[14],P=n[3],F=n[7],I=n[11],O=n[15],D=s[0],b=s[4],L=s[8],J=s[12],k=s[1],st=s[5],dt=s[9],et=s[13],bt=s[2],ft=s[6],Ot=s[10],xt=s[14],wt=s[3],vt=s[7],Dt=s[11],qt=s[15];return r[0]=o*D+a*k+l*bt+c*wt,r[4]=o*b+a*st+l*ft+c*vt,r[8]=o*L+a*dt+l*Ot+c*Dt,r[12]=o*J+a*et+l*xt+c*qt,r[1]=u*D+f*k+g*bt+x*wt,r[5]=u*b+f*st+g*ft+x*vt,r[9]=u*L+f*dt+g*Ot+x*Dt,r[13]=u*J+f*et+g*xt+x*qt,r[2]=y*D+R*k+m*bt+v*wt,r[6]=y*b+R*st+m*ft+v*vt,r[10]=y*L+R*dt+m*Ot+v*Dt,r[14]=y*J+R*et+m*xt+v*qt,r[3]=P*D+F*k+I*bt+O*wt,r[7]=P*b+F*st+I*ft+O*vt,r[11]=P*L+F*dt+I*Ot+O*Dt,r[15]=P*J+F*et+I*xt+O*qt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],g=t[10],x=t[14],y=t[3],R=t[7],m=t[11],v=t[15],P=l*x-c*g,F=a*x-c*f,I=a*g-l*f,O=o*x-c*u,D=o*g-l*u,b=o*f-a*u;return e*(R*P-m*F+v*I)-n*(y*P-m*O+v*D)+s*(y*F-R*O+v*b)-r*(y*I-R*D+m*b)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],g=t[10],x=t[11],y=t[12],R=t[13],m=t[14],v=t[15],P=e*a-n*o,F=e*l-s*o,I=e*c-r*o,O=n*l-s*a,D=n*c-r*a,b=s*c-r*l,L=u*R-f*y,J=u*m-g*y,k=u*v-x*y,st=f*m-g*R,dt=f*v-x*R,et=g*v-x*m,bt=P*et-F*dt+I*st+O*k-D*J+b*L;if(bt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let ft=1/bt;return t[0]=(a*et-l*dt+c*st)*ft,t[1]=(s*dt-n*et-r*st)*ft,t[2]=(R*b-m*D+v*O)*ft,t[3]=(g*D-f*b-x*O)*ft,t[4]=(l*k-o*et-c*J)*ft,t[5]=(e*et-s*k+r*J)*ft,t[6]=(m*I-y*b-v*F)*ft,t[7]=(u*b-g*I+x*F)*ft,t[8]=(o*dt-a*k+c*L)*ft,t[9]=(n*k-e*dt-r*L)*ft,t[10]=(y*D-R*I+v*P)*ft,t[11]=(f*I-u*D-x*P)*ft,t[12]=(a*J-o*st-l*L)*ft,t[13]=(e*st-n*J+s*L)*ft,t[14]=(R*F-y*O-m*P)*ft,t[15]=(u*O-f*F+g*P)*ft,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,g=r*c,x=r*u,y=r*f,R=o*u,m=o*f,v=a*f,P=l*c,F=l*u,I=l*f,O=n.x,D=n.y,b=n.z;return s[0]=(1-(R+v))*O,s[1]=(x+I)*O,s[2]=(y-F)*O,s[3]=0,s[4]=(x-I)*D,s[5]=(1-(g+v))*D,s[6]=(m+P)*D,s[7]=0,s[8]=(y+F)*b,s[9]=(m-P)*b,s[10]=(1-(g+R))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Hs.set(s[0],s[1],s[2]).length(),a=Hs.set(s[4],s[5],s[6]).length(),l=Hs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ci.copy(this);let c=1/o,u=1/a,f=1/l;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=u,Ci.elements[5]*=u,Ci.elements[6]*=u,Ci.elements[8]*=f,Ci.elements[9]*=f,Ci.elements[10]*=f,e.setFromRotationMatrix(Ci),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=xi,l=!1){let c=this.elements,u=2*r/(e-t),f=2*r/(n-s),g=(e+t)/(e-t),x=(n+s)/(n-s),y,R;if(l)y=r/(o-r),R=o*r/(o-r);else if(a===xi)y=-(o+r)/(o-r),R=-2*o*r/(o-r);else if(a===ar)y=-o/(o-r),R=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=g,c[12]=0,c[1]=0,c[5]=f,c[9]=x,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=R,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=xi,l=!1){let c=this.elements,u=2/(e-t),f=2/(n-s),g=-(e+t)/(e-t),x=-(n+s)/(n-s),y,R;if(l)y=1/(o-r),R=o/(o-r);else if(a===xi)y=-2/(o-r),R=-(o+r)/(o-r);else if(a===ar)y=-1/(o-r),R=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=g,c[1]=0,c[5]=f,c[9]=0,c[13]=x,c[2]=0,c[6]=0,c[10]=y,c[14]=R,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ol.prototype.isMatrix4=!0;var rn=ol,Hs=new j,Ci=new rn,Jf=new j(0,0,0),$f=new j(1,1,1),ls=new j,Go=new j,si=new j,au=new rn,lu=new _i,yi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],g=s[6],x=s[10];switch(e){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,x),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(g,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,x),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-f,x),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,x));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,x),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return au.makeRotationFromQuaternion(t),this.setFromRotationMatrix(au,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lu.setFromEuler(this),this.setFromQuaternion(lu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};yi.DEFAULT_ORDER="XYZ";var qr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kf=0,cu=new j,Gs=new _i,Yi=new rn,Wo=new j,Er=new j,jf=new j,Qf=new _i,hu=new j(1,0,0),uu=new j(0,1,0),du=new j(0,0,1),fu={type:"added"},tp={type:"removed"},Ws={type:"childadded",child:null},yc={type:"childremoved",child:null},dn=class i extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new j,e=new yi,n=new _i,s=new j(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rn},normalMatrix:{value:new We}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gs.setFromAxisAngle(t,e),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(t,e){return Gs.setFromAxisAngle(t,e),this.quaternion.premultiply(Gs),this}rotateX(t){return this.rotateOnAxis(hu,t)}rotateY(t){return this.rotateOnAxis(uu,t)}rotateZ(t){return this.rotateOnAxis(du,t)}translateOnAxis(t,e){return cu.copy(t).applyQuaternion(this.quaternion),this.position.add(cu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hu,t)}translateY(t){return this.translateOnAxis(uu,t)}translateZ(t){return this.translateOnAxis(du,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wo.copy(t):Wo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Er,Wo,this.up):Yi.lookAt(Wo,Er,this.up),this.quaternion.setFromRotationMatrix(Yi),s&&(Yi.extractRotation(s.matrixWorld),Gs.setFromRotationMatrix(Yi),this.quaternion.premultiply(Gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Oe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fu),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tp),yc.child=t,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fu),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,jf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Qf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1)===!0&&(n=!0),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}return n}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),g=o(t.skeletons),x=o(t.animations),y=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),g.length>0&&(n.skeletons=g),x.length>0&&(n.animations=x),y.length>0&&(n.nodes=y)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dn.DEFAULT_UP=new j(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var we=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ep={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let R of t.hand.values()){let m=e.getJointPose(R,n),v=this._getHandJoint(c,R);m!==null&&(v.matrix.fromArray(m.transform.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=m.radius),v.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],g=u.position.distanceTo(f.position),x=.02,y=.005;c.inputState.pinching&&g>x+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&g<=x-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ep)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new we;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},bs={h:0,s:0,l:0};function vc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Fe=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,tn.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=tn.workingColorSpace){return this.r=t,this.g=e,this.b=n,tn.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=tn.workingColorSpace){if(t=Xf(t,1),e=Qe(e,0,1),n=Qe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=vc(o,r,t+1/3),this.g=vc(o,r,t),this.b=vc(o,r,t-1/3)}return tn.colorSpaceToWorking(this,s),this}setStyle(t,e=jn){function n(r){r!==void 0&&parseFloat(r)<1&&Ue("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ue("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ue("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=jn){let n=Cd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ue("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=jn){return tn.workingToColorSpace(Wn.copy(this),t),Math.round(Qe(Wn.r*255,0,255))*65536+Math.round(Qe(Wn.g*255,0,255))*256+Math.round(Qe(Wn.b*255,0,255))}getHexString(t=jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=tn.workingColorSpace){tn.workingToColorSpace(Wn.copy(this),e);let n=Wn.r,s=Wn.g,r=Wn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=tn.workingColorSpace){return tn.workingToColorSpace(Wn.copy(this),e),t.r=Wn.r,t.g=Wn.g,t.b=Wn.b,t}getStyle(t=jn){tn.workingToColorSpace(Wn.copy(this),t);let e=Wn.r,n=Wn.g,s=Wn.b;return t!==jn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(bs),Ri.s===0&&(Ri.h=bs.h),bs.s===0&&(bs.h=Ri.h);let n=pc(Ri.h,bs.h,e),s=pc(Ri.s,bs.s,e),r=pc(Ri.l,bs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wn=new Fe;Fe.NAMES=Cd;var Yr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Fe(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Zr=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Pi=new j,Zi=new j,Mc=new j,Ji=new j,Xs=new j,qs=new j,pu=new j,wc=new j,Sc=new j,bc=new j,Ac=new fn,Ec=new fn,Tc=new fn,ji=class i{constructor(t=new j,e=new j,n=new j){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pi.subVectors(t,e),s.cross(Pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pi.subVectors(s,e),Zi.subVectors(n,e),Mc.subVectors(t,e);let o=Pi.dot(Pi),a=Pi.dot(Zi),l=Pi.dot(Mc),c=Zi.dot(Zi),u=Zi.dot(Mc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let g=1/f,x=(c*l-a*u)*g,y=(o*u-a*l)*g;return r.set(1-x-y,y,x)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ji.x),l.addScaledVector(o,Ji.y),l.addScaledVector(a,Ji.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ac.setScalar(0),Ec.setScalar(0),Tc.setScalar(0),Ac.fromBufferAttribute(t,e),Ec.fromBufferAttribute(t,n),Tc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ac,r.x),o.addScaledVector(Ec,r.y),o.addScaledVector(Tc,r.z),o}static isFrontFacing(t,e,n,s){return Pi.subVectors(n,e),Zi.subVectors(t,e),Pi.cross(Zi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),Pi.cross(Zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Xs.subVectors(s,n),qs.subVectors(r,n),wc.subVectors(t,n);let l=Xs.dot(wc),c=qs.dot(wc);if(l<=0&&c<=0)return e.copy(n);Sc.subVectors(t,s);let u=Xs.dot(Sc),f=qs.dot(Sc);if(u>=0&&f<=u)return e.copy(s);let g=l*f-u*c;if(g<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),e.copy(n).addScaledVector(Xs,o);bc.subVectors(t,r);let x=Xs.dot(bc),y=qs.dot(bc);if(y>=0&&x<=y)return e.copy(r);let R=x*c-l*y;if(R<=0&&c>=0&&y<=0)return a=c/(c-y),e.copy(n).addScaledVector(qs,a);let m=u*y-x*f;if(m<=0&&f-u>=0&&x-y>=0)return pu.subVectors(r,s),a=(f-u)/(f-u+(x-y)),e.copy(s).addScaledVector(pu,a);let v=1/(m+R+g);return o=R*v,a=g*v,e.copy(n).addScaledVector(Xs,o).addScaledVector(qs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hi=class{constructor(t=new j(1/0,1/0,1/0),e=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ii.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ii.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ii.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ii):Ii.fromBufferAttribute(r,o),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xo.copy(n.boundingBox)),Xo.applyMatrix4(t.matrixWorld),this.union(Xo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tr),qo.subVectors(this.max,Tr),Ys.subVectors(t.a,Tr),Zs.subVectors(t.b,Tr),Js.subVectors(t.c,Tr),cs.subVectors(Zs,Ys),hs.subVectors(Js,Zs),As.subVectors(Ys,Js);let e=[0,-cs.z,cs.y,0,-hs.z,hs.y,0,-As.z,As.y,cs.z,0,-cs.x,hs.z,0,-hs.x,As.z,0,-As.x,-cs.y,cs.x,0,-hs.y,hs.x,0,-As.y,As.x,0];return!Cc(e,Ys,Zs,Js,qo)||(e=[1,0,0,0,1,0,0,0,1],!Cc(e,Ys,Zs,Js,qo))?!1:(Yo.crossVectors(cs,hs),e=[Yo.x,Yo.y,Yo.z],Cc(e,Ys,Zs,Js,qo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},$i=[new j,new j,new j,new j,new j,new j,new j,new j],Ii=new j,Xo=new Hi,Ys=new j,Zs=new j,Js=new j,cs=new j,hs=new j,As=new j,Tr=new j,qo=new j,Yo=new j,Es=new j;function Cc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Es.fromArray(i,r);let a=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),l=t.dot(Es),c=e.dot(Es),u=n.dot(Es);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Cn=new j,Zo=new It,np=0,qe=class extends Vi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:np++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_h,this.updateRanges=[],this.gpuType=Ai,this.version=0,this._normalizationScale=t!==void 0?Zl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zo.fromBufferAttribute(this,e),Zo.applyMatrix3(t),this.setXY(e,Zo.x,Zo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.applyMatrix3(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.applyMatrix4(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.applyNormalMatrix(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.transformDirection(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ed(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Td(t,this.array)}};var Jr=class extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var $r=class extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ge=class extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}},ip=new Hi,Cr=new j,Rc=new j,Gi=class{constructor(t=new j,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ip.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cr.subVectors(t,this.center);let e=Cr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Cr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cr.copy(t.center).add(Rc)),this.expandByPoint(Cr.copy(t.center).sub(Rc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},sp=0,gi=new rn,Pc=new dn,$s=new j,ri=new Hi,Rr=new Hi,Ui=new j,Jo=new j,$o=new j,Ze=class i extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hf(t)?$r:Jr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,e,n){return gi.makeTranslation(t,e,n),this.applyMatrix4(gi),this}scale(t,e,n){return gi.makeScale(t,e,n),this.applyMatrix4(gi),this}lookAt(t){return Pc.lookAt(t),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ge(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(Jo.addVectors(this.boundingBox.min,ri.min),$o.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Jo),this.boundingBox.expandByPoint($o)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){let n=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Jo.addVectors(ri.min,Rr.min),$o.addVectors(ri.max,Rr.max),ri.expandByPoint(Jo),ri.expandByPoint($o)):(ri.expandByPoint(Rr.min),ri.expandByPoint(Rr.max))}ri.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ui.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ui));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ui.fromBufferAttribute(a,c),l&&($s.fromBufferAttribute(t,c),Ui.add($s)),s=Math.max(s,n.distanceToSquared(Ui))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new qe(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let J=0;J<n.count;J++)a[J]=new j,l[J]=new j;let u=new j,f=new j,g=new j,x=new It,y=new It,R=new It,m=new j,v=new j;function P(J,k,st){c[J]=c[k]=c[st]=1,u.fromBufferAttribute(n,J),f.fromBufferAttribute(n,k),g.fromBufferAttribute(n,st),x.fromBufferAttribute(r,J),y.fromBufferAttribute(r,k),R.fromBufferAttribute(r,st),f.sub(u),g.sub(u),y.sub(x),R.sub(x);let dt=1/(y.x*R.y-R.x*y.y);isFinite(dt)&&(m.copy(f).multiplyScalar(R.y).addScaledVector(g,-y.y).multiplyScalar(dt),v.copy(g).multiplyScalar(y.x).addScaledVector(f,-R.x).multiplyScalar(dt),a[J].add(m),a[k].add(m),a[st].add(m),l[J].add(v),l[k].add(v),l[st].add(v))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let J=0,k=F.length;J<k;++J){let st=F[J],dt=st.start,et=st.count;for(let bt=dt,ft=Math.min(t.count,dt+et);bt<ft;bt+=3)P(t.getX(bt+0),t.getX(bt+1),t.getX(bt+2))}let I=new j,O=new j,D=new j,b=new j;function L(J){D.fromBufferAttribute(s,J),b.copy(D);let k=a[J];I.copy(k),I.sub(D.multiplyScalar(D.dot(k))).normalize(),I.lengthSq()===0&&(Math.abs(b.x)<.9?I.set(1,0,0):I.set(0,1,0),I.crossVectors(b,I).normalize()),O.crossVectors(b,k);let dt=O.dot(l[J])<0?-1:1;o.setXYZW(J,I.x,I.y,I.z,dt)}for(let J=0,k=n.count;J<k;++J)c[J]&&L(J);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,x=n.count;g<x;g++)n.setXYZ(g,0,0,0);let s=new j,r=new j,o=new j,a=new j,l=new j,c=new j,u=new j,f=new j;if(t)for(let g=0,x=t.count;g<x;g+=3){let y=t.getX(g+0),R=t.getX(g+1),m=t.getX(g+2);s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,R),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,y),l.fromBufferAttribute(n,R),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(R,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let g=0,x=e.count;g<x;g+=3)s.fromBufferAttribute(e,g+0),r.fromBufferAttribute(e,g+1),o.fromBufferAttribute(e,g+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(g+0,u.x,u.y,u.z),n.setXYZ(g+1,u.x,u.y,u.z),n.setXYZ(g+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ui.fromBufferAttribute(t,e),Ui.normalize(),t.setXYZ(e,Ui.x,Ui.y,Ui.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,f=a.normalized,g=new c.constructor(l.length*u),x=0,y=0;for(let R=0,m=l.length;R<m;R++){a.isInterleavedBufferAttribute?x=l[R]*a.data.stride+a.offset:x=l[R]*u;for(let v=0;v<u;v++)g[y++]=c[x++]}return new qe(g,u,f)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){let g=c[u],x=t(g,n);l.push(x)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,g=c.length;f<g;f++){let x=c[f];u.push(x.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],f=r[c];for(let g=0,x=f.length;g<x;g++)u.push(f[g].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},za=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_h,this.updateRanges=[],this.version=0,this.uuid=vs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=mu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=mu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function mu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=vs()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Kn=new j,Kr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Zl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Kn.fromBufferAttribute(this,e),Kn.applyMatrix4(t),this.setXYZ(e,Kn.x,Kn.y,Kn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Kn.fromBufferAttribute(this,e),Kn.applyNormalMatrix(t),this.setXYZ(e,Kn.x,Kn.y,Kn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Kn.fromBufferAttribute(this,e),Kn.transformDirection(t),this.setXYZ(e,Kn.x,Kn.y,Kn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Wr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Wr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Ed(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Td(t,this.data.array)}},Ic=new j,rp=new j,op=new We,Fi=class{constructor(t=new j(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ic.subVectors(n,e).cross(rp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ic),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||op.getNormalMatrix(t),s=this.coplanarPoint(Ic).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ap=0,vi=class extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=vs(),this.name="",this.type="Material",this.blending=xr,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=eh,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ma,this.stencilZFail=Ma,this.stencilZPass=Ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ue(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ue(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Fi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new It().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new It().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Un=class extends vi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ks,Pr=new j,js=new j,Qs=new j,tr=new It,Ir=new It,Rd=new rn,Ko=new j,Fr=new j,jo=new j,gu=new It,Fc=new It,xu=new It,qn=class extends dn{constructor(t=new Un){if(super(),this.isSprite=!0,this.type="Sprite",Ks===void 0){Ks=new Ze;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new za(e,5);Ks.setIndex([0,1,2,0,2,3]),Ks.setAttribute("position",new Kr(n,3,0,!1)),Ks.setAttribute("uv",new Kr(n,2,3,!1))}this.geometry=Ks,this.material=t,this.center=new It(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Oe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),js.setFromMatrixScale(this.matrixWorld),Rd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&js.multiplyScalar(-Qs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Qo(Ko.set(-.5,-.5,0),Qs,o,js,s,r),Qo(Fr.set(.5,-.5,0),Qs,o,js,s,r),Qo(jo.set(.5,.5,0),Qs,o,js,s,r),gu.set(0,0),Fc.set(1,0),xu.set(1,1);let a=t.ray.intersectTriangle(Ko,Fr,jo,!1,Pr);if(a===null&&(Qo(Fr.set(-.5,.5,0),Qs,o,js,s,r),Fc.set(0,1),a=t.ray.intersectTriangle(Ko,jo,Fr,!1,Pr),a===null))return;let l=t.ray.origin.distanceTo(Pr);l<t.near||l>t.far||e.push({distance:l,point:Pr.clone(),uv:ji.getInterpolation(Pr,Ko,Fr,jo,gu,Fc,xu,new It),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this.count=t.count,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Qo(i,t,e,n,s,r){tr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ir.x=r*tr.x-s*tr.y,Ir.y=s*tr.x+r*tr.y):Ir.copy(tr),i.copy(t),i.x+=Ir.x,i.y+=Ir.y,i.applyMatrix4(Rd)}var Ki=new j,Lc=new j,ta=new j,ea=new j,ur=class{constructor(t=new j,e=new j(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ki.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,e),Ki.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Lc.copy(t).add(e).multiplyScalar(.5),ta.copy(e).sub(t).normalize(),ea.copy(this.origin).sub(Lc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ta),a=ea.dot(this.direction),l=-ea.dot(ta),c=ea.lengthSq(),u=Math.abs(1-o*o),f,g,x,y;if(u>0)if(f=o*l-a,g=o*a-l,y=r*u,f>=0)if(g>=-y)if(g<=y){let R=1/u;f*=R,g*=R,x=f*(f+o*g+2*a)+g*(o*f+g+2*l)+c}else g=r,f=Math.max(0,-(o*g+a)),x=-f*f+g*(g+2*l)+c;else g=-r,f=Math.max(0,-(o*g+a)),x=-f*f+g*(g+2*l)+c;else g<=-y?(f=Math.max(0,-(-o*r+a)),g=f>0?-r:Math.min(Math.max(-r,-l),r),x=-f*f+g*(g+2*l)+c):g<=y?(f=0,g=Math.min(Math.max(-r,-l),r),x=g*(g+2*l)+c):(f=Math.max(0,-(o*r+a)),g=f>0?r:Math.min(Math.max(-r,-l),r),x=-f*f+g*(g+2*l)+c);else g=o>0?-r:r,f=Math.max(0,-(o*g+a)),x=-f*f+g*(g+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Lc).addScaledVector(ta,g),x}intersectSphere(t,e){if(t.radius<0)return null;Ki.subVectors(t.center,this.origin);let n=Ki.dot(this.direction),s=Ki.dot(Ki)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,g=this.origin;return c>=0?(n=(t.min.x-g.x)*c,s=(t.max.x-g.x)*c):(n=(t.max.x-g.x)*c,s=(t.min.x-g.x)*c),u>=0?(r=(t.min.y-g.y)*u,o=(t.max.y-g.y)*u):(r=(t.max.y-g.y)*u,o=(t.min.y-g.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-g.z)*f,l=(t.max.z-g.z)*f):(a=(t.max.z-g.z)*f,l=(t.min.z-g.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=t.x-o.x,g=t.y-o.y,x=t.z-o.z,y=e.x-o.x,R=e.y-o.y,m=e.z-o.z,v=n.x-o.x,P=n.y-o.y,F=n.z-o.z,I=Math.abs(l),O=Math.abs(c),D=Math.abs(u),b,L,J,k,st,dt,et,bt,ft,Ot,xt,wt;if(I>=O&&I>=D?(J=l,dt=f,ft=y,wt=v,l>=0?(b=c,L=u,k=g,st=x,et=R,bt=m,Ot=P,xt=F):(b=u,L=c,k=x,st=g,et=m,bt=R,Ot=F,xt=P)):O>=D?(J=c,dt=g,ft=R,wt=P,c>=0?(b=u,L=l,k=x,st=f,et=m,bt=y,Ot=F,xt=v):(b=l,L=u,k=f,st=x,et=y,bt=m,Ot=v,xt=F)):(J=u,dt=x,ft=m,wt=F,u>=0?(b=l,L=c,k=f,st=g,et=y,bt=R,Ot=v,xt=P):(b=c,L=l,k=g,st=f,et=R,bt=y,Ot=P,xt=v)),J===0)return null;let vt=b/J,Dt=L/J,qt=1/J,Kt=k-vt*dt,pe=st-Dt*dt,Ut=et-vt*ft,ne=bt-Dt*ft,he=Ot-vt*wt,_e=xt-Dt*wt,$t=he*ne-_e*Ut,ye=Kt*_e-pe*he,Le=Ut*pe-ne*Kt;if(s){if($t<0||ye<0||Le<0)return null}else if(($t<0||ye<0||Le<0)&&($t>0||ye>0||Le>0))return null;let le=$t+ye+Le;if(le===0)return null;let G=qt*($t*dt+ye*ft+Le*wt);return(le>0?G<0:G>0)?null:this.at(G/le,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vn=class extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},_u=new rn,Ts=new ur,na=new Gi,yu=new j,ia=new j,sa=new j,ra=new j,Dc=new j,oa=new j,vu=new j,aa=new j,Ht=class extends dn{constructor(t=new Ze,e=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this.count=t.count,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],f=r[l];u!==0&&(Dc.fromBufferAttribute(f,t),o?oa.addScaledVector(Dc,u):oa.addScaledVector(Dc.sub(e),u))}e.add(oa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(r),Ts.copy(t.ray).recast(t.near),!(na.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(na,yu)===null||Ts.origin.distanceToSquared(yu)>(t.far-t.near)**2))&&(_u.copy(r).invert(),Ts.copy(t.ray).applyMatrix4(_u),!(n.boundingBox!==null&&Ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ts)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,g=r.groups,x=r.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,R=g.length;y<R;y++){let m=g[y],v=o[m.materialIndex],P=Math.max(m.start,x.start),F=Math.min(a.count,Math.min(m.start+m.count,x.start+x.count));for(let I=P,O=F;I<O;I+=3){let D=a.getX(I),b=a.getX(I+1),L=a.getX(I+2);s=la(this,v,t,n,c,u,f,D,b,L),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let y=Math.max(0,x.start),R=Math.min(a.count,x.start+x.count);for(let m=y,v=R;m<v;m+=3){let P=a.getX(m),F=a.getX(m+1),I=a.getX(m+2);s=la(this,o,t,n,c,u,f,P,F,I),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,R=g.length;y<R;y++){let m=g[y],v=o[m.materialIndex],P=Math.max(m.start,x.start),F=Math.min(l.count,Math.min(m.start+m.count,x.start+x.count));for(let I=P,O=F;I<O;I+=3){let D=I,b=I+1,L=I+2;s=la(this,v,t,n,c,u,f,D,b,L),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let y=Math.max(0,x.start),R=Math.min(l.count,x.start+x.count);for(let m=y,v=R;m<v;m+=3){let P=m,F=m+1,I=m+2;s=la(this,o,t,n,c,u,f,P,F,I),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function lp(i,t,e,n,s,r,o,a){let l;if(t.side===kn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===_s,a),l===null)return null;aa.copy(a),aa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(aa);return c<e.near||c>e.far?null:{distance:c,point:aa.clone(),object:i}}function la(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ia),i.getVertexPosition(l,sa),i.getVertexPosition(c,ra);let u=lp(i,t,e,n,ia,sa,ra,vu);if(u){let f=new j;ji.getBarycoord(vu,ia,sa,ra,f),s&&(u.uv=ji.getInterpolatedAttribute(s,a,l,c,f,new It)),r&&(u.uv1=ji.getInterpolatedAttribute(r,a,l,c,f,new It)),o&&(u.normal=ji.getInterpolatedAttribute(o,a,l,c,f,new j),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let g={a,b:l,c,normal:new j,materialIndex:0};ji.getNormal(ia,sa,ra,g.normal),u.face=g,u.barycoord=f}return u}var jr=class extends ti{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Dn,u=Dn,f,g){super(null,o,a,l,c,u,s,r,f,g),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qr=class extends qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},er=new rn,Mu=new rn,ca=[],wu=new Hi,cp=new rn,Lr=new Ht,Dr=new Gi,ai=class extends Ht{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,er),wu.copy(t.boundingBox).applyMatrix4(er),this.boundingBox.union(wu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,er),Dr.copy(t.boundingSphere).applyMatrix4(er),this.boundingSphere.union(Dr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(n),t.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,er),Mu.multiplyMatrices(n,er),Lr.matrixWorld=Mu,Lr.raycast(t,ca);for(let o=0,a=ca.length;o<a;o++){let l=ca[o];l.instanceId=r,l.object=this,e.push(l)}ca.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Qr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new jr(new Float32Array(s*this.count),s,this.count,pl,Ai));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Cs=new Gi,hp=new It(.5,.5),ha=new j,fs=class{constructor(t=new Fi,e=new Fi,n=new Fi,s=new Fi,r=new Fi,o=new Fi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xi,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],g=r[6],x=r[7],y=r[8],R=r[9],m=r[10],v=r[11],P=r[12],F=r[13],I=r[14],O=r[15];if(s[0].setComponents(c-o,x-u,v-y,O-P).normalize(),s[1].setComponents(c+o,x+u,v+y,O+P).normalize(),s[2].setComponents(c+a,x+f,v+R,O+F).normalize(),s[3].setComponents(c-a,x-f,v-R,O-F).normalize(),n)s[4].setComponents(l,g,m,I).normalize(),s[5].setComponents(c-l,x-g,v-m,O-I).normalize();else if(s[4].setComponents(c-l,x-g,v-m,O-I).normalize(),e===xi)s[5].setComponents(c+l,x+g,v+m,O+I).normalize();else if(e===ar)s[5].setComponents(l,g,m,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(t){Cs.center.set(0,0,0);let e=hp.distanceTo(t.center);return Cs.radius=.7071067811865476+e,Cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ha.x=s.normal.x>0?t.max.x:t.min.x,ha.y=s.normal.y>0?t.max.y:t.min.y,ha.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ha)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Su=new rn,Na=class i{constructor(){this.coordinateSystem=xi,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Su.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new fs),n[s].setFromProjectionMatrix(Su,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new fs),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var es=class extends vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ua=new j,Ba=new j,bu=new rn,zr=new ur,ua=new Gi,zc=new j,Au=new j,Oa=class extends dn{constructor(t=new Ze,e=new es){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ua.fromBufferAttribute(e,s-1),Ba.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ua.distanceTo(Ba);t.setAttribute("lineDistance",new Ge(n,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,t.ray.intersectsSphere(ua)===!1)return;bu.copy(s).invert(),zr.copy(t.ray).applyMatrix4(bu);let a=r/s.getMaxScaleOnAxis(),l=a*a,c=this.isLineSegments?2:1,u=n.index,g=n.attributes.position;if(u!==null){let x=Math.max(0,o.start),y=Math.min(u.count,o.start+o.count);for(let R=x,m=y-1;R<m;R+=c){let v=u.getX(R),P=u.getX(R+1),F=da(this,t,zr,l,v,P,R);F&&e.push(F)}if(this.isLineLoop){let R=u.getX(y-1),m=u.getX(x),v=da(this,t,zr,l,R,m,y-1);v&&e.push(v)}}else{let x=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let R=x,m=y-1;R<m;R+=c){let v=da(this,t,zr,l,R,R+1,R);v&&e.push(v)}if(this.isLineLoop){let R=da(this,t,zr,l,y-1,x,y-1);R&&e.push(R)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function da(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Ua.fromBufferAttribute(a,s),Ba.fromBufferAttribute(a,r),e.distanceSqToSegment(Ua,Ba,zc,Au)>n)return;zc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(zc);if(!(c<t.near||c>t.far))return{distance:c,point:Au.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Eu=new j,Tu=new j,ps=class extends Oa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Eu.fromBufferAttribute(e,s),Tu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Eu.distanceTo(Tu);t.setAttribute("lineDistance",new Ge(n,1))}else Ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Rs=class extends vi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Cu=new rn,Wc=new ur,fa=new Gi,pa=new j,dr=class extends dn{constructor(t=new Ze,e=new Rs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(s),fa.radius+=r,t.ray.intersectsSphere(fa)===!1)return;Cu.copy(s).invert(),Wc.copy(t.ray).applyMatrix4(Cu);let a=r/s.getMaxScaleOnAxis(),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let g=Math.max(0,o.start),x=Math.min(c.count,o.start+o.count);for(let y=g,R=x;y<R;y++){let m=c.getX(y);pa.fromBufferAttribute(f,m),Ru(pa,m,l,s,t,e,this)}}else{let g=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let y=g,R=x;y<R;y++)pa.fromBufferAttribute(f,y),Ru(pa,y,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ru(i,t,e,n,s,r,o){let a=Wc.distanceSqToPoint(i);if(a<e){let l=new j;Wc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var to=class extends ti{constructor(t=[],e=zs,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},eo=class extends ti{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ns=class extends ti{constructor(t,e,n=Li,s,r,o,a=Dn,l=Dn,c,u=ts,f=1){if(u!==ts&&u!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let g={width:t,height:e,depth:f};super(g,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},no=class extends ns{constructor(t,e=Li,n=zs,s,r,o=Dn,a=Dn,l,c=ts){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},io=class extends ti{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},be=class i extends Ze{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],f=[],g=0,x=0;y("z","y","x",-1,-1,n,e,t,o,r,0),y("z","y","x",1,-1,n,e,-t,o,r,1),y("x","z","y",1,1,t,n,e,s,o,2),y("x","z","y",1,-1,t,n,-e,s,o,3),y("x","y","z",1,-1,t,e,n,s,r,4),y("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(u,3)),this.setAttribute("uv",new Ge(f,2));function y(R,m,v,P,F,I,O,D,b,L,J){let k=I/b,st=O/L,dt=I/2,et=O/2,bt=D/2,ft=b+1,Ot=L+1,xt=0,wt=0,vt=new j;for(let Dt=0;Dt<Ot;Dt++){let qt=Dt*st-et;for(let Kt=0;Kt<ft;Kt++){let pe=Kt*k-dt;vt[R]=pe*P,vt[m]=qt*F,vt[v]=bt,c.push(vt.x,vt.y,vt.z),vt[R]=0,vt[m]=0,vt[v]=D>0?1:-1,u.push(vt.x,vt.y,vt.z),f.push(Kt/b),f.push(1-Dt/L),xt+=1}}for(let Dt=0;Dt<L;Dt++)for(let qt=0;qt<b;qt++){let Kt=g+qt+ft*Dt,pe=g+qt+ft*(Dt+1),Ut=g+(qt+1)+ft*(Dt+1),ne=g+(qt+1)+ft*Dt;l.push(Kt,pe,ne),l.push(pe,Ut,ne),wt+=6}a.addGroup(x,wt,J),x+=wt,g+=xt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Mi=class i extends Ze{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=e/2,f=Math.PI/2*t,g=e,x=2*f+g,y=n*2+r,R=s+1,m=new j,v=new j;for(let P=0;P<=y;P++){let F=0,I=0,O=0,D=0;if(P<=n){let J=P/n,k=J*Math.PI/2;I=-u-t*Math.cos(k),O=t*Math.sin(k),D=-t*Math.cos(k),F=J*f}else if(P<=n+r){let J=(P-n)/r;I=-u+J*e,O=t,D=0,F=f+J*g}else{let J=(P-n-r)/n,k=J*Math.PI/2;I=u+t*Math.sin(k),O=t*Math.cos(k),D=t*Math.sin(k),F=f+g+J*f}let b=Math.max(0,Math.min(1,F/x)),L=0;P===0?L=.5/s:P===y&&(L=-.5/s);for(let J=0;J<=s;J++){let k=J/s,st=k*Math.PI*2,dt=Math.sin(st),et=Math.cos(st);v.x=-O*et,v.y=I,v.z=O*dt,a.push(v.x,v.y,v.z),m.set(-O*et,D,O*dt),m.normalize(),l.push(m.x,m.y,m.z),c.push(k+L,b)}if(P>0){let J=(P-1)*R;for(let k=0;k<s;k++){let st=J+k,dt=J+k+1,et=P*R+k,bt=P*R+k+1;o.push(st,dt,et),o.push(dt,bt,et)}}}this.setIndex(o),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Bn=class i extends Ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new j,u=new It;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,g=3;f<=e;f++,g+=3){let x=n+f/e*s;c.x=t*Math.cos(x),c.y=t*Math.sin(x),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[g]/t+1)/2,u.y=(o[g+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Ge(o,3)),this.setAttribute("normal",new Ge(a,3)),this.setAttribute("uv",new Ge(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},me=class i extends Ze{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],g=[],x=[],y=0,R=[],m=n/2,v=0;P(),o===!1&&(t>0&&F(!0),e>0&&F(!1)),this.setIndex(u),this.setAttribute("position",new Ge(f,3)),this.setAttribute("normal",new Ge(g,3)),this.setAttribute("uv",new Ge(x,2));function P(){let I=new j,O=new j,D=0,b=(e-t)/n;for(let L=0;L<=r;L++){let J=[],k=L/r,st=k*(e-t)+t;for(let dt=0;dt<=s;dt++){let et=dt/s,bt=et*l+a,ft=Math.sin(bt),Ot=Math.cos(bt);O.x=st*ft,O.y=-k*n+m,O.z=st*Ot,f.push(O.x,O.y,O.z),I.set(ft,b,Ot).normalize(),g.push(I.x,I.y,I.z),x.push(et,1-k),J.push(y++)}R.push(J)}for(let L=0;L<s;L++)for(let J=0;J<r;J++){let k=R[J][L],st=R[J+1][L],dt=R[J+1][L+1],et=R[J][L+1];(t>0||J!==0)&&(u.push(k,st,et),D+=3),(e>0||J!==r-1)&&(u.push(st,dt,et),D+=3)}c.addGroup(v,D,0),v+=D}function F(I){let O=y,D=new It,b=new j,L=0,J=I===!0?t:e,k=I===!0?1:-1;for(let dt=1;dt<=s;dt++)f.push(0,m*k,0),g.push(0,k,0),x.push(.5,.5),y++;let st=y;for(let dt=0;dt<=s;dt++){let bt=dt/s*l+a,ft=Math.cos(bt),Ot=Math.sin(bt);b.x=J*Ot,b.y=m*k,b.z=J*ft,f.push(b.x,b.y,b.z),g.push(0,k,0),D.x=ft*.5+.5,D.y=Ot*.5*k+.5,x.push(D.x,D.y),y++}for(let dt=0;dt<s;dt++){let et=O+dt,bt=st+dt;I===!0?u.push(bt,bt+1,et):u.push(bt+1,bt,et),L+=3}c.addGroup(v,L,I===!0?1:2),v+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Mn=class i extends me{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},so=class i extends Ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Ge(r,3)),this.setAttribute("normal",new Ge(r.slice(),3)),this.setAttribute("uv",new Ge(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(P){let F=new j,I=new j,O=new j;for(let D=0;D<e.length;D+=3)x(e[D+0],F),x(e[D+1],I),x(e[D+2],O),l(F,I,O,P)}function l(P,F,I,O){let D=O+1,b=[];for(let L=0;L<=D;L++){b[L]=[];let J=P.clone().lerp(I,L/D),k=F.clone().lerp(I,L/D),st=D-L;for(let dt=0;dt<=st;dt++)dt===0&&L===D?b[L][dt]=J:b[L][dt]=J.clone().lerp(k,dt/st)}for(let L=0;L<D;L++)for(let J=0;J<2*(D-L)-1;J++){let k=Math.floor(J/2);J%2===0?(g(b[L][k+1]),g(b[L+1][k]),g(b[L][k])):(g(b[L][k+1]),g(b[L+1][k+1]),g(b[L+1][k]))}}function c(P){let F=new j;for(let I=0;I<r.length;I+=3)F.x=r[I+0],F.y=r[I+1],F.z=r[I+2],F.normalize().multiplyScalar(P),r[I+0]=F.x,r[I+1]=F.y,r[I+2]=F.z}function u(){let P=new j;for(let F=0;F<r.length;F+=3){P.x=r[F+0],P.y=r[F+1],P.z=r[F+2];let I=m(P)/2/Math.PI+.5,O=v(P)/Math.PI+.5;o.push(I,1-O)}y(),f()}function f(){for(let P=0;P<o.length;P+=6){let F=o[P+0],I=o[P+2],O=o[P+4],D=Math.max(F,I,O),b=Math.min(F,I,O);D>.9&&b<.1&&(F<.2&&(o[P+0]+=1),I<.2&&(o[P+2]+=1),O<.2&&(o[P+4]+=1))}}function g(P){r.push(P.x,P.y,P.z)}function x(P,F){let I=P*3;F.x=t[I+0],F.y=t[I+1],F.z=t[I+2]}function y(){let P=new j,F=new j,I=new j,O=new j,D=new It,b=new It,L=new It;for(let J=0,k=0;J<r.length;J+=9,k+=6){P.set(r[J+0],r[J+1],r[J+2]),F.set(r[J+3],r[J+4],r[J+5]),I.set(r[J+6],r[J+7],r[J+8]),D.set(o[k+0],o[k+1]),b.set(o[k+2],o[k+3]),L.set(o[k+4],o[k+5]),O.copy(P).add(F).add(I).divideScalar(3);let st=m(O);R(D,k+0,P,st),R(b,k+2,F,st),R(L,k+4,I,st)}}function R(P,F,I,O){O<0&&P.x===1&&(o[F]=P.x-1),I.x===0&&I.z===0&&(o[F]=O/2/Math.PI+.5)}function m(P){return Math.atan2(P.z,-P.x)}function v(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},ni=class i extends so{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var li=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ue("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],g=n[s+1]-u,x=(o-u)/g;return(s+x)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new It:new j);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new j,s=[],r=[],o=[],a=new j,l=new rn;for(let x=0;x<=t;x++){let y=x/t;s[x]=this.getTangentAt(y,new j)}r[0]=new j,o[0]=new j;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),g=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),g<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let x=1;x<=t;x++){if(r[x]=r[x-1].clone(),o[x]=o[x-1].clone(),a.crossVectors(s[x-1],s[x]),a.length()>Number.EPSILON){a.normalize();let y=Math.acos(Qe(s[x-1].dot(s[x]),-1,1));r[x].applyMatrix4(l.makeRotationAxis(a,y))}o[x].crossVectors(s[x],r[x])}if(e===!0){let x=Math.acos(Qe(r[0].dot(r[t]),-1,1));x/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(x=-x);for(let y=1;y<=t;y++)r[y].applyMatrix4(l.makeRotationAxis(s[y],x*y)),o[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},fr=class extends li{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new It){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),g=l-this.aX,x=c-this.aY;l=g*u-x*f+this.aX,c=g*f+x*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ka=class extends fr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function vh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let g=(o-r)/c-(a-r)/(c+u)+(a-o)/u,x=(a-o)/u-(l-o)/(u+f)+(l-a)/f;g*=u,x*=u,s(o,a,g,x)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Pu=new j,Iu=new j,Nc=new vh,Uc=new vh,Bc=new vh,Yn=class extends li{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new j){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Iu.subVectors(s[0],s[1]).add(s[0]),c=Iu);let f=s[a%r],g=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Pu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Pu),this.curveType==="centripetal"||this.curveType==="chordal"){let x=this.curveType==="chordal"?.5:.25,y=Math.pow(c.distanceToSquared(f),x),R=Math.pow(f.distanceToSquared(g),x),m=Math.pow(g.distanceToSquared(u),x);R<1e-4&&(R=1),y<1e-4&&(y=R),m<1e-4&&(m=R),Nc.initNonuniformCatmullRom(c.x,f.x,g.x,u.x,y,R,m),Uc.initNonuniformCatmullRom(c.y,f.y,g.y,u.y,y,R,m),Bc.initNonuniformCatmullRom(c.z,f.z,g.z,u.z,y,R,m)}else this.curveType==="catmullrom"&&(Nc.initCatmullRom(c.x,f.x,g.x,u.x,this.tension),Uc.initCatmullRom(c.y,f.y,g.y,u.y,this.tension),Bc.initCatmullRom(c.z,f.z,g.z,u.z,this.tension));return n.set(Nc.calc(l),Uc.calc(l),Bc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new j().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Fu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function up(i,t){let e=1-i;return e*e*t}function dp(i,t){return 2*(1-i)*i*t}function fp(i,t){return i*i*t}function Br(i,t,e,n){return up(i,t)+dp(i,e)+fp(i,n)}function pp(i,t){let e=1-i;return e*e*e*t}function mp(i,t){let e=1-i;return 3*e*e*i*t}function gp(i,t){return 3*(1-i)*i*i*t}function xp(i,t){return i*i*i*t}function Or(i,t,e,n,s){return pp(i,t)+mp(i,e)+gp(i,n)+xp(i,s)}var ro=class extends li{constructor(t=new It,e=new It,n=new It,s=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new It){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Or(t,s.x,r.x,o.x,a.x),Or(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Va=class extends li{constructor(t=new j,e=new j,n=new j,s=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Or(t,s.x,r.x,o.x,a.x),Or(t,s.y,r.y,o.y,a.y),Or(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},oo=class extends li{constructor(t=new It,e=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new It){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new It){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ha=class extends li{constructor(t=new j,e=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new j){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ao=class extends li{constructor(t=new It,e=new It,n=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new It){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Br(t,s.x,r.x,o.x),Br(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ps=class extends li{constructor(t=new j,e=new j,n=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new j){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Br(t,s.x,r.x,o.x),Br(t,s.y,r.y,o.y),Br(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lo=class extends li{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new It){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Fu(a,l.x,c.x,u.x,f.x),Fu(a,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new It().fromArray(s))}return this}},Ga=Object.freeze({__proto__:null,ArcCurve:ka,CatmullRomCurve3:Yn,CubicBezierCurve:ro,CubicBezierCurve3:Va,EllipseCurve:fr,LineCurve:oo,LineCurve3:Ha,QuadraticBezierCurve:ao,QuadraticBezierCurve3:Ps,SplineCurve:lo}),Wa=class extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ga[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ga[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},co=class extends Wa{constructor(t){super(),this.type="Path",this.currentPoint=new It,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new oo(this.currentPoint.clone(),new It(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ao(this.currentPoint.clone(),new It(t,e),new It(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new ro(this.currentPoint.clone(),new It(t,e),new It(n,s),new It(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new lo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new fr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},wi=class extends co{constructor(t){super(t),this.uuid=vs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new co().fromJSON(s))}return this}};function _p(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Pd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Sp(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let u=a,f=l;for(let g=e;g<s;g+=e){let x=i[g],y=i[g+1];x<a&&(a=x),y<l&&(l=y),x>u&&(u=x),y>f&&(f=y)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return ho(r,o,e,a,l,c,0),o}function Pd(i,t,e,n,s){let r;if(s===Dp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Lu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Lu(o/n|0,i[o],i[o+1],r);return r&&pr(r,r.next)&&(fo(r),r=r.next),r}function Is(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(pr(e,e.next)||bn(e.prev,e,e.next)===0)){if(fo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ho(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Cp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?vp(i,n,s,r):yp(i)){t.push(l.i,i.i,c.i),fo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Mp(Is(i),t),ho(i,t,e,n,s,r,2)):o===2&&wp(i,t,e,n,s,r):ho(Is(i),t,e,n,s,r,1);break}}}function yp(i){let t=i.prev,e=i,n=i.next;if(bn(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),f=Math.min(a,l,c),g=Math.max(s,r,o),x=Math.max(a,l,c),y=n.next;for(;y!==t;){if(y.x>=u&&y.x<=g&&y.y>=f&&y.y<=x&&Nr(s,a,r,l,o,c,y.x,y.y)&&bn(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function vp(i,t,e,n){let s=i.prev,r=i,o=i.next;if(bn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,f=r.y,g=o.y,x=Math.min(a,l,c),y=Math.min(u,f,g),R=Math.max(a,l,c),m=Math.max(u,f,g),v=Xc(x,y,t,e,n),P=Xc(R,m,t,e,n),F=i.prevZ,I=i.nextZ;for(;F&&F.z>=v&&I&&I.z<=P;){if(F.x>=x&&F.x<=R&&F.y>=y&&F.y<=m&&F!==s&&F!==o&&Nr(a,u,l,f,c,g,F.x,F.y)&&bn(F.prev,F,F.next)>=0||(F=F.prevZ,I.x>=x&&I.x<=R&&I.y>=y&&I.y<=m&&I!==s&&I!==o&&Nr(a,u,l,f,c,g,I.x,I.y)&&bn(I.prev,I,I.next)>=0))return!1;I=I.nextZ}for(;F&&F.z>=v;){if(F.x>=x&&F.x<=R&&F.y>=y&&F.y<=m&&F!==s&&F!==o&&Nr(a,u,l,f,c,g,F.x,F.y)&&bn(F.prev,F,F.next)>=0)return!1;F=F.prevZ}for(;I&&I.z<=P;){if(I.x>=x&&I.x<=R&&I.y>=y&&I.y<=m&&I!==s&&I!==o&&Nr(a,u,l,f,c,g,I.x,I.y)&&bn(I.prev,I,I.next)>=0)return!1;I=I.nextZ}return!0}function Mp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!pr(n,s)&&Fd(n,e,e.next,s)&&uo(n,s)&&uo(s,n)&&(t.push(n.i,e.i,s.i),fo(e),fo(e.next),e=i=s),e=e.next}while(e!==i);return Is(e)}function wp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ip(o,a)){let l=Ld(o,a);o=Is(o,o.next),l=Is(l,l.next),ho(o,t,e,n,s,r,0),ho(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Sp(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Pd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Pp(c))}s.sort(bp);for(let r=0;r<s.length;r++)e=Ap(s[r],e);return e}function bp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Ap(i,t){let e=Ep(i,t);if(!e)return t;let n=Ld(e,i);return Is(n,n.next),Is(e,e.next)}function Ep(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(pr(i,e))return e;do{if(pr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Id(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);uo(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&Tp(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function Tp(i,t){return bn(i.prev,i,t.prev)<0&&bn(t.next,i,i.next)<0}function Cp(i,t,e,n){let s=i;do s.z===0&&(s.z=Xc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Rp(s)}function Rp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Xc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Pp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Id(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Nr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Id(i,t,e,n,s,r,o,a)}function Ip(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Fp(i,t)&&(uo(i,t)&&uo(t,i)&&Lp(i,t)&&(bn(i.prev,i,t.prev)||bn(i,t.prev,t))||pr(i,t)&&bn(i.prev,i,i.next)>0&&bn(t.prev,t,t.next)>0)}function bn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function pr(i,t){return i.x===t.x&&i.y===t.y}function Fd(i,t,e,n){let s=ga(bn(i,t,e)),r=ga(bn(i,t,n)),o=ga(bn(e,n,i)),a=ga(bn(e,n,t));return!!(s!==r&&o!==a||s===0&&ma(i,e,t)||r===0&&ma(i,n,t)||o===0&&ma(e,i,n)||a===0&&ma(e,t,n))}function ma(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ga(i){return i>0?1:i<0?-1:0}function Fp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Fd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function uo(i,t){return bn(i.prev,i,i.next)<0?bn(i,t,i.next)>=0&&bn(i,i.prev,t)>=0:bn(i,t,i.prev)<0||bn(i,i.next,t)<0}function Lp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ld(i,t){let e=qc(i.i,i.x,i.y),n=qc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Lu(i,t,e,n){let s=qc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Dp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Yc=class{static triangulate(t,e,n=2){return _p(t,e,n)}},ki=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Du(t),zu(n,t);let o=t.length;e.forEach(Du);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,zu(n,e[l]);let a=Yc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Du(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function zu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var po=class i extends Ze{constructor(t=new wi([new It(.5,.5),new It(-.5,.5),new It(-.5,-.5),new It(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Ge(s,3)),this.setAttribute("uv",new Ge(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,g=e.bevelEnabled!==void 0?e.bevelEnabled:!0,x=e.bevelThickness!==void 0?e.bevelThickness:.2,y=e.bevelSize!==void 0?e.bevelSize:x-.1,R=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,v=e.extrudePath,P=e.UVGenerator!==void 0?e.UVGenerator:zp,F,I=!1,O,D,b,L;if(v){F=v.getSpacedPoints(u),I=!0,g=!1;let it=v.isCatmullRomCurve3?v.closed:!1;O=v.computeFrenetFrames(u,it),D=new j,b=new j,L=new j}g||(m=0,x=0,y=0,R=0);let J=a.extractPoints(c),k=J.shape,st=J.holes;if(!ki.isClockWise(k)){k=k.reverse();for(let it=0,mt=st.length;it<mt;it++){let K=st[it];ki.isClockWise(K)&&(st[it]=K.reverse())}}function et(it){let K=10000000000000001e-36,pt=it[0];for(let ot=1;ot<=it.length;ot++){let ht=ot%it.length,_t=it[ht],Rt=_t.x-pt.x,Tt=_t.y-pt.y,d=Rt*Rt+Tt*Tt,p=Math.max(Math.abs(_t.x),Math.abs(_t.y),Math.abs(pt.x),Math.abs(pt.y)),X=K*p*p;if(d<=X){it.splice(ht,1),ot--;continue}pt=_t}}et(k),st.forEach(et);let bt=st.length,ft=k;for(let it=0;it<bt;it++){let mt=st[it];k=k.concat(mt)}function Ot(it,mt,K){return mt||Oe("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(mt,K)}let xt=k.length;function wt(it,mt,K){let pt,ot,ht,_t=it.x-mt.x,Rt=it.y-mt.y,Tt=K.x-it.x,d=K.y-it.y,p=_t*_t+Rt*Rt,X=_t*d-Rt*Tt;if(Math.abs(X)>Number.EPSILON){let C=Math.sqrt(p),V=Math.sqrt(Tt*Tt+d*d),B=mt.x-Rt/C,at=mt.y+_t/C,ut=K.x-d/V,Et=K.y+Tt/V,U=((ut-B)*d-(Et-at)*Tt)/(_t*d-Rt*Tt);pt=B+_t*U-it.x,ot=at+Rt*U-it.y;let T=pt*pt+ot*ot;if(T<=2)return new It(pt,ot);ht=Math.sqrt(T/2)}else{let C=!1;_t>Number.EPSILON?Tt>Number.EPSILON&&(C=!0):_t<-Number.EPSILON?Tt<-Number.EPSILON&&(C=!0):Math.sign(Rt)===Math.sign(d)&&(C=!0),C?(pt=-Rt,ot=_t,ht=Math.sqrt(p)):(pt=_t,ot=Rt,ht=Math.sqrt(p/2))}return new It(pt/ht,ot/ht)}let vt=[];for(let it=0,mt=ft.length,K=mt-1,pt=it+1;it<mt;it++,K++,pt++)K===mt&&(K=0),pt===mt&&(pt=0),vt[it]=wt(ft[it],ft[K],ft[pt]);let Dt=[],qt,Kt=vt.concat();for(let it=0,mt=bt;it<mt;it++){let K=st[it];qt=[];for(let pt=0,ot=K.length,ht=ot-1,_t=pt+1;pt<ot;pt++,ht++,_t++)ht===ot&&(ht=0),_t===ot&&(_t=0),qt[pt]=wt(K[pt],K[ht],K[_t]);Dt.push(qt),Kt=Kt.concat(qt)}let pe;if(m===0)pe=ki.triangulateShape(ft,st);else{let it=[],mt=[];for(let K=0;K<m;K++){let pt=K/m,ot=x*Math.cos(pt*Math.PI/2),ht=y*Math.sin(pt*Math.PI/2)+R;for(let _t=0,Rt=ft.length;_t<Rt;_t++){let Tt=Ot(ft[_t],vt[_t],ht);ye(Tt.x,Tt.y,-ot),pt===0&&it.push(Tt)}for(let _t=0,Rt=bt;_t<Rt;_t++){let Tt=st[_t];qt=Dt[_t];let d=[];for(let p=0,X=Tt.length;p<X;p++){let C=Ot(Tt[p],qt[p],ht);ye(C.x,C.y,-ot),pt===0&&d.push(C)}pt===0&&mt.push(d)}}pe=ki.triangulateShape(it,mt)}let Ut=pe.length,ne=y+R;for(let it=0;it<xt;it++){let mt=g?Ot(k[it],Kt[it],ne):k[it];I?(b.copy(O.normals[0]).multiplyScalar(mt.x),D.copy(O.binormals[0]).multiplyScalar(mt.y),L.copy(F[0]).add(b).add(D),ye(L.x,L.y,L.z)):ye(mt.x,mt.y,0)}for(let it=1;it<=u;it++)for(let mt=0;mt<xt;mt++){let K=g?Ot(k[mt],Kt[mt],ne):k[mt];I?(b.copy(O.normals[it]).multiplyScalar(K.x),D.copy(O.binormals[it]).multiplyScalar(K.y),L.copy(F[it]).add(b).add(D),ye(L.x,L.y,L.z)):ye(K.x,K.y,f/u*it)}for(let it=m-1;it>=0;it--){let mt=it/m,K=x*Math.cos(mt*Math.PI/2),pt=y*Math.sin(mt*Math.PI/2)+R;for(let ot=0,ht=ft.length;ot<ht;ot++){let _t=Ot(ft[ot],vt[ot],pt);ye(_t.x,_t.y,f+K)}for(let ot=0,ht=st.length;ot<ht;ot++){let _t=st[ot];qt=Dt[ot];for(let Rt=0,Tt=_t.length;Rt<Tt;Rt++){let d=Ot(_t[Rt],qt[Rt],pt);I?ye(d.x,d.y+F[u-1].y,F[u-1].x+K):ye(d.x,d.y,f+K)}}}he(),_e();function he(){let it=s.length/3;if(g){let mt=0,K=xt*mt;for(let pt=0;pt<Ut;pt++){let ot=pe[pt];Le(ot[2]+K,ot[1]+K,ot[0]+K)}mt=u+m*2,K=xt*mt;for(let pt=0;pt<Ut;pt++){let ot=pe[pt];Le(ot[0]+K,ot[1]+K,ot[2]+K)}}else{for(let mt=0;mt<Ut;mt++){let K=pe[mt];Le(K[2],K[1],K[0])}for(let mt=0;mt<Ut;mt++){let K=pe[mt];Le(K[0]+xt*u,K[1]+xt*u,K[2]+xt*u)}}n.addGroup(it,s.length/3-it,0)}function _e(){let it=s.length/3,mt=0;$t(ft,mt),mt+=ft.length;for(let K=0,pt=st.length;K<pt;K++){let ot=st[K];$t(ot,mt),mt+=ot.length}n.addGroup(it,s.length/3-it,1)}function $t(it,mt){let K=it.length;for(;--K>=0;){let pt=K,ot=K-1;ot<0&&(ot=it.length-1);for(let ht=0,_t=u+m*2;ht<_t;ht++){let Rt=xt*ht,Tt=xt*(ht+1),d=mt+pt+Rt,p=mt+ot+Rt,X=mt+ot+Tt,C=mt+pt+Tt;le(d,p,X,C)}}}function ye(it,mt,K){l.push(it),l.push(mt),l.push(K)}function Le(it,mt,K){G(it),G(mt),G(K);let pt=s.length/3,ot=P.generateTopUV(n,s,pt-3,pt-2,pt-1);At(ot[0]),At(ot[1]),At(ot[2])}function le(it,mt,K,pt){G(it),G(mt),G(pt),G(mt),G(K),G(pt);let ot=s.length/3,ht=P.generateSideWallUV(n,s,ot-6,ot-3,ot-2,ot-1);At(ht[0]),At(ht[1]),At(ht[3]),At(ht[1]),At(ht[2]),At(ht[3])}function G(it){s.push(l[it*3+0]),s.push(l[it*3+1]),s.push(l[it*3+2])}function At(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Np(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ga[s.type]().fromJSON(s)),new i(n,t.options)}},zp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new It(r,o),new It(a,l),new It(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],g=t[s*3],x=t[s*3+1],y=t[s*3+2],R=t[r*3],m=t[r*3+1],v=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new It(o,1-l),new It(c,1-f),new It(g,1-y),new It(R,1-v)]:[new It(a,1-l),new It(u,1-f),new It(x,1-y),new It(m,1-v)]}};function Np(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var gn=class i extends so{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Zn=class i extends Ze{constructor(t=[new It(0,-.5),new It(.5,0),new It(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Qe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/e,f=new j,g=new It,x=new j,y=new j,R=new j,m=0,v=0;for(let P=0;P<=t.length-1;P++)switch(P){case 0:m=t[P+1].x-t[P].x,v=t[P+1].y-t[P].y,x.x=v*1,x.y=-m,x.z=v*0,R.copy(x),x.normalize(),l.push(x.x,x.y,x.z);break;case t.length-1:R.normalize(),l.push(R.x,R.y,R.z);break;default:m=t[P+1].x-t[P].x,v=t[P+1].y-t[P].y,x.x=v*1,x.y=-m,x.z=v*0,y.copy(x),x.x+=R.x,x.y+=R.y,x.z+=R.z,x.normalize(),l.push(x.x,x.y,x.z),R.copy(y)}for(let P=0;P<=e;P++){let F=n+P*u*s,I=Math.sin(F),O=Math.cos(F);for(let D=0;D<=t.length-1;D++){f.x=t[D].x*I,f.y=t[D].y,f.z=t[D].x*O,o.push(f.x,f.y,f.z),g.x=P/e,g.y=D/(t.length-1),a.push(g.x,g.y);let b=l[3*D+0]*I,L=l[3*D+1],J=l[3*D+0]*O;c.push(b,L,J)}}for(let P=0;P<e;P++)for(let F=0;F<t.length-1;F++){let I=F+P*t.length,O=I,D=I+t.length,b=I+t.length+1,L=I+1;r.push(O,D,L),r.push(b,L,D)}this.setIndex(r),this.setAttribute("position",new Ge(o,3)),this.setAttribute("uv",new Ge(a,2)),this.setAttribute("normal",new Ge(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var xn=class i extends Ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=t/a,g=e/l,x=[],y=[],R=[],m=[];for(let v=0;v<u;v++){let P=v*g-o;for(let F=0;F<c;F++){let I=F*f-r;y.push(I,-P,0),R.push(0,0,1),m.push(F/a),m.push(1-v/l)}}for(let v=0;v<l;v++)for(let P=0;P<a;P++){let F=P+c*v,I=P+c*(v+1),O=P+1+c*(v+1),D=P+1+c*v;x.push(F,I,D),x.push(I,O,D)}this.setIndex(x),this.setAttribute("position",new Ge(y,3)),this.setAttribute("normal",new Ge(R,3)),this.setAttribute("uv",new Ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},mo=class i extends Ze{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],f=t,g=(e-t)/s,x=new j,y=new It;for(let R=0;R<=s;R++){for(let m=0;m<=n;m++){let v=r+m/n*o;x.x=f*Math.cos(v),x.y=f*Math.sin(v),l.push(x.x,x.y,x.z),c.push(0,0,1),y.x=(x.x/e+1)/2,y.y=(x.y/e+1)/2,u.push(y.x,y.y)}f+=g}for(let R=0;R<s;R++){let m=R*(n+1);for(let v=0;v<n;v++){let P=v+m,F=P,I=P+n+1,O=P+n+2,D=P+1;a.push(F,I,D),a.push(I,O,D)}}this.setIndex(a),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},is=class i extends Ze{constructor(t=new wi([new It(0,.5),new It(-.5,-.5),new It(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ge(s,3)),this.setAttribute("normal",new Ge(r,3)),this.setAttribute("uv",new Ge(o,2));function c(u){let f=s.length/3,g=u.extractPoints(e),x=g.shape,y=g.holes;ki.isClockWise(x)===!1&&(x=x.reverse());for(let m=0,v=y.length;m<v;m++){let P=y[m];ki.isClockWise(P)===!0&&(y[m]=P.reverse())}let R=ki.triangulateShape(x,y);for(let m=0,v=y.length;m<v;m++){let P=y[m];x=x.concat(P)}for(let m=0,v=x.length;m<v;m++){let P=x[m];s.push(P.x,P.y,0),r.push(0,0,1),o.push(P.x,P.y)}for(let m=0,v=R.length;m<v;m++){let P=R[m],F=P[0]+f,I=P[1]+f,O=P[2]+f;n.push(F,I,O),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Up(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Up(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ee=class i extends Ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],f=new j,g=new j,x=[],y=[],R=[],m=[];for(let v=0;v<=n;v++){let P=[],F=v/n,I=o+F*a,O=t*Math.cos(I),D=Math.sqrt(t*t-O*O),b=0;v===0&&o===0?b=.5/e:v===n&&l===Math.PI&&(b=-.5/e);for(let L=0;L<=e;L++){let J=L/e,k=s+J*r;f.x=-D*Math.cos(k),f.y=O,f.z=D*Math.sin(k),y.push(f.x,f.y,f.z),g.copy(f).normalize(),R.push(g.x,g.y,g.z),m.push(J+b,1-F),P.push(c++)}u.push(P)}for(let v=0;v<n;v++)for(let P=0;P<e;P++){let F=u[v][P+1],I=u[v][P],O=u[v+1][P],D=u[v+1][P+1];(v!==0||o>0)&&x.push(F,I,D),(v!==n-1||l<Math.PI)&&x.push(I,O,D)}this.setIndex(x),this.setAttribute("position",new Ge(y,3)),this.setAttribute("normal",new Ge(R,3)),this.setAttribute("uv",new Ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ci=class i extends Ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],f=[],g=new j,x=new j,y=new j;for(let R=0;R<=n;R++){let m=o+R/n*a;for(let v=0;v<=s;v++){let P=v/s*r;x.x=(t+e*Math.cos(m))*Math.cos(P),x.y=(t+e*Math.cos(m))*Math.sin(P),x.z=e*Math.sin(m),c.push(x.x,x.y,x.z),g.x=t*Math.cos(P),g.y=t*Math.sin(P),y.subVectors(x,g).normalize(),u.push(y.x,y.y,y.z),f.push(v/s),f.push(R/n)}}for(let R=1;R<=n;R++)for(let m=1;m<=s;m++){let v=(s+1)*R+m-1,P=(s+1)*(R-1)+m-1,F=(s+1)*(R-1)+m,I=(s+1)*R+m;l.push(v,P,I),l.push(P,F,I)}this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(u,3)),this.setAttribute("uv",new Ge(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Si=class i extends Ze{constructor(t=new Ps(new j(-1,-1,0),new j(-1,1,0),new j(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new j,l=new j,c=new It,u=new j,f=[],g=[],x=[],y=[];R(),this.setIndex(y),this.setAttribute("position",new Ge(f,3)),this.setAttribute("normal",new Ge(g,3)),this.setAttribute("uv",new Ge(x,2));function R(){for(let F=0;F<e;F++)m(F);m(r===!1?e:0),P(),v()}function m(F){u=t.getPointAt(F/e,u);let I=o.normals[F],O=o.binormals[F];for(let D=0;D<=s;D++){let b=D/s*Math.PI*2,L=Math.sin(b),J=-Math.cos(b);l.x=J*I.x+L*O.x,l.y=J*I.y+L*O.y,l.z=J*I.z+L*O.z,l.normalize(),g.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,f.push(a.x,a.y,a.z)}}function v(){for(let F=1;F<=e;F++)for(let I=1;I<=s;I++){let O=(s+1)*(F-1)+(I-1),D=(s+1)*F+(I-1),b=(s+1)*F+I,L=(s+1)*(F-1)+I;y.push(O,D,L),y.push(D,b,L)}}function P(){for(let F=0;F<=e;F++)for(let I=0;I<=s;I++)c.x=F/e,c.y=I/s,x.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Ga[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Us(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Nu(s))s.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Nu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Jn(i){let t={};for(let e=0;e<i.length;e++){let n=Us(i[e]);for(let s in n)t[s]=n[s]}return t}function Nu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Bp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Mh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:tn.workingColorSpace}var Dd={clone:Us,merge:Jn},Op=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bi=class extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Op,this.fragmentShader=kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=Bp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.linewidth=t.linewidth,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new It().fromArray(s.value);break;case"v3":this.uniforms[n].value=new j().fromArray(s.value);break;case"v4":this.uniforms[n].value=new fn().fromArray(s.value);break;case"m3":this.uniforms[n].value=new We().fromArray(s.value);break;case"m4":this.uniforms[n].value=new rn().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Xa=class extends bi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var On=class extends vi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=wo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Te=class extends vi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Io,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=wo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},qa=class extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ya=class extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function nr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function xa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ms=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Za=class extends ms{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vc,endingEnd:Vc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hc:r=t,a=2*e-n;break;case Gc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hc:o=t,l=2*n-e;break;case Gc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,g=this._weightPrev,x=this._weightNext,y=(n-e)/(s-e),R=y*y,m=R*y,v=-g*m+2*g*R-g*y,P=(1+g)*m+(-1.5-2*g)*R+(-.5+g)*y+1,F=(-1-x)*m+(1.5+x)*R+.5*y,I=x*m-x*R;for(let O=0;O!==a;++O)r[O]=v*o[u+O]+P*o[c+O]+F*o[l+O]+I*o[f+O];return r}},Ja=class extends ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),f=1-u;for(let g=0;g!==a;++g)r[g]=o[c+g]*f+o[l+g]*u;return r}},$a=class extends ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ka=class extends ms{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let y=(n-e)/(s-e),R=1-y;for(let m=0;m!==a;++m)r[m]=o[c+m]*R+o[l+m]*y;return r}let g=a*2,x=t-1;for(let y=0;y!==a;++y){let R=o[c+y],m=o[l+y],v=x*g+y*2,P=f[v],F=f[v+1],I=t*g+y*2,O=u[I],D=u[I+1],b=Hp(n,e,P,O,s);r[y]=zd(b,R,F,D,m)}return r}};function zd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Vp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Hp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=zd(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Vp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var hi=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=nr(e,this.TimeBufferType),this.values=nr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:nr(t.times,Array),values:nr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),xa(t.settings)&&(n.settings={inTangents:nr(t.settings.inTangents,Array),outTangents:nr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ka(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case kr:e=this.InterpolantFactoryMethodDiscrete;break;case Pa:e=this.InterpolantFactoryMethodLinear;break;case va:e=this.InterpolantFactoryMethodSmooth;break;case kc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ue("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return Pa;case this.InterpolantFactoryMethodSmooth:return va;case this.InterpolantFactoryMethodBezier:return kc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;xa(this.settings)&&(Uu(this.settings.inTangents,t),Uu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;xa(this.settings)&&(Bu(this.settings.inTangents,t),Bu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Oe("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Oe("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Oe("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Wf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Oe("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===va,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,g=f-n,x=f+n;for(let y=0;y!==n;++y){let R=e[f+y];if(R!==e[g+y]||R!==e[x+y]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,g=o*n;for(let x=0;x!==n;++x)e[g+x]=e[f+x]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,xa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Uu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Bu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}hi.prototype.ValueTypeName="";hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=Pa;var gs=class extends hi{constructor(t,e,n){super(t,e,n)}};gs.prototype.ValueTypeName="bool";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=kr;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}};ja.prototype.ValueTypeName="color";var Qa=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}};Qa.prototype.ValueTypeName="number";var tl=class extends ms{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)_i.slerpFlat(r,0,o,c-a,o,c,l);return r}},go=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new tl(this.times,this.values,this.getValueSize(),t)}};go.prototype.ValueTypeName="quaternion";go.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends hi{constructor(t,e,n){super(t,e,n)}};xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=kr;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends hi{constructor(t,e,n,s){super(t,e,n,s)}};el.prototype.ValueTypeName="vector";var nl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,g=c.length;f<g;f+=2){let x=c[f],y=c[f+1];if(x.global&&(x.lastIndex=0),x.test(u))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Nd=new nl,il=class{constructor(t){this.manager=t!==void 0?t:Nd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};il.DEFAULT_MATERIAL_NAME="__DEFAULT";var xo=class extends dn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},_o=class extends xo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Oc=new rn,Ou=new j,ku=new j,sl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.filterNode=null,this.shadowNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fs,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new fn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ou.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ou),ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ku),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Oc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Oc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ar||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Oc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this.filterNode=t.filterNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},_a=new j,ya=new _i,Bi=new j,yo=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_a,ya,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,ya,Bi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){let s=super.updateWorldMatrix(t,e,n);return this.matrixWorld.decompose(_a,ya,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,ya,Bi.set(1,1,1)).invert(),s}clone(){return new this.constructor().copy(this)}},us=new j,Vu=new It,Hu=new It,Xn=class extends yo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(us.x,us.y).multiplyScalar(-t/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(us.x,us.y).multiplyScalar(-t/us.z)}getViewSize(t,e){return this.getViewBounds(t,Vu,Hu),e.subVectors(Hu,Vu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var vo=class extends yo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Zc=class extends sl{constructor(){super(new vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mo=class extends xo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new Zc}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ir=-90,sr=1,mr=class extends dn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xn(ir,sr,t,e);s.layers=this.layers,this.add(s);let r=new Xn(ir,sr,t,e);r.layers=this.layers,this.add(r);let o=new Xn(ir,sr,t,e);o.layers=this.layers,this.add(o);let a=new Xn(ir,sr,t,e);a.layers=this.layers,this.add(a);let l=new Xn(ir,sr,t,e);l.layers=this.layers,this.add(l);let c=new Xn(ir,sr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===xi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let R=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=R,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,g,x),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},rl=class extends Xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var wh="\\[\\]\\.:\\/",Gp=new RegExp("["+wh+"]","g"),Sh="[^"+wh+"]",Wp="[^"+wh.replace("\\.","")+"]",Xp=/((?:WC+[\/:])*)/.source.replace("WC",Sh),qp=/(WCOD+)?/.source.replace("WCOD",Wp),Yp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sh),Zp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sh),Jp=new RegExp("^"+Xp+qp+Yp+Zp+"$"),$p=["material","materials","bones","map"],Jc=class{constructor(t,e,n){let s=n||mn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},mn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Gp,"")}static parseTrackName(t){let e=Jp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$p.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Oe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mn.Composite=Jc;mn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mn.prototype.GetterByBindingType=[mn.prototype._getValue_direct,mn.prototype._getValue_array,mn.prototype._getValue_arrayElement,mn.prototype._getValue_toArray];mn.prototype.SetterByBindingTypeAndVersioning=[[mn.prototype._setValue_direct,mn.prototype._setValue_direct_setNeedsUpdate,mn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_array,mn.prototype._setValue_array_setNeedsUpdate,mn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_arrayElement,mn.prototype._setValue_arrayElement_setNeedsUpdate,mn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_fromArray,mn.prototype._setValue_fromArray_setNeedsUpdate,mn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var t_=new Float32Array(1);var Rh=class Rh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Rh.prototype.isMatrix2=!0;var $c=Rh;function bh(i,t,e,n){let s=Kp(n);switch(e){case fh:return i*t;case pl:return i*t/s.components*s.byteLength;case ml:return i*t/s.components*s.byteLength;case ys:return i*t*2/s.components*s.byteLength;case gl:return i*t*2/s.components*s.byteLength;case ph:return i*t*3/s.components*s.byteLength;case zi:return i*t*4/s.components*s.byteLength;case xl:return i*t*4/s.components*s.byteLength;case Ao:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case To:case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yl:case Ml:return Math.max(i,16)*Math.max(t,8)/4;case _l:case vl:return Math.max(i,8)*Math.max(t,8)/2;case wl:case Sl:case Al:case El:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bl:case Ro:case Tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case kl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Hl:case Gl:case Wl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Xl:case ql:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Po:case Yl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kp(i){switch(i){case ii:case ch:return{byteLength:1,components:1};case yr:case hh:case Di:return{byteLength:2,components:1};case dl:case fl:return{byteLength:2,components:4};case Li:case ul:case Ai:return{byteLength:4,components:1};case uh:case dh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:al}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=al);function rf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function jp(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,f=c.byteLength,g=i.createBuffer();i.bindBuffer(l,g),i.bufferData(l,c,u),a.onUploadCallback();let x;if(c instanceof Float32Array)x=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)x=i.HALF_FLOAT;else if(c instanceof Uint16Array)x=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)x=i.SHORT;else if(c instanceof Uint32Array)x=i.UNSIGNED_INT;else if(c instanceof Int32Array)x=i.INT;else if(c instanceof Int8Array)x=i.BYTE;else if(c instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:g,type:x,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((x,y)=>x.start-y.start);let g=0;for(let x=1;x<f.length;x++){let y=f[g],R=f[x];R.start<=y.start+y.count+1?y.count=Math.max(y.count,R.start+R.count-y.start):(++g,f[g]=R)}f.length=g+1;for(let x=0,y=f.length;x<y;x++){let R=f[x];i.bufferSubData(c,R.start*u.BYTES_PER_ELEMENT,u,R.start,R.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Qp=`#ifdef USE_ALPHAHASH
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
}`,$e={alphahash_fragment:Qp,alphahash_pars_fragment:t0,alphamap_fragment:e0,alphamap_pars_fragment:n0,alphatest_fragment:i0,alphatest_pars_fragment:s0,aomap_fragment:r0,aomap_pars_fragment:o0,batching_pars_vertex:a0,batching_vertex:l0,begin_vertex:c0,beginnormal_vertex:h0,bsdfs:u0,iridescence_fragment:d0,bumpmap_pars_fragment:f0,clipping_planes_fragment:p0,clipping_planes_pars_fragment:m0,clipping_planes_pars_vertex:g0,clipping_planes_vertex:x0,color_fragment:_0,color_pars_fragment:y0,color_pars_vertex:v0,color_vertex:M0,common:w0,defaultnormal_vertex:S0,displacementmap_pars_vertex:b0,displacementmap_vertex:A0,emissivemap_fragment:E0,emissivemap_pars_fragment:T0,colorspace_fragment:C0,colorspace_pars_fragment:R0,envmap_fragment:P0,envmap_common_pars_fragment:I0,envmap_pars_fragment:F0,envmap_pars_vertex:L0,envmap_physical_pars_fragment:W0,envmap_vertex:D0,fog_vertex:z0,fog_pars_vertex:N0,fog_fragment:U0,fog_pars_fragment:B0,gradientmap_pars_fragment:O0,lightmap_pars_fragment:k0,lights_lambert_fragment:V0,lights_lambert_pars_fragment:H0,lights_pars_begin:G0,lights_toon_fragment:X0,lights_toon_pars_fragment:q0,lights_phong_fragment:Y0,lights_phong_pars_fragment:Z0,lights_physical_fragment:J0,lights_physical_pars_fragment:$0,lights_fragment_begin:K0,lights_fragment_maps:j0,lights_fragment_end:Q0,lightprobes_pars_fragment:tm,logdepthbuf_fragment:em,logdepthbuf_pars_fragment:nm,logdepthbuf_pars_vertex:im,logdepthbuf_vertex:sm,map_fragment:rm,map_pars_fragment:om,map_particle_fragment:am,map_particle_pars_fragment:lm,metalnessmap_fragment:cm,metalnessmap_pars_fragment:hm,morphinstance_vertex:um,morphcolor_vertex:dm,morphnormal_vertex:fm,morphtarget_pars_vertex:pm,morphtarget_vertex:mm,normal_fragment_begin:gm,normal_fragment_maps:xm,normal_pars_fragment:_m,normal_pars_vertex:ym,normal_vertex:vm,normalmap_pars_fragment:Mm,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Sm,clearcoat_pars_fragment:bm,iridescence_pars_fragment:Am,opaque_fragment:Em,packing:Tm,premultiplied_alpha_fragment:Cm,project_vertex:Rm,dithering_fragment:Pm,dithering_pars_fragment:Im,roughnessmap_fragment:Fm,roughnessmap_pars_fragment:Lm,shadowmap_pars_fragment:Dm,shadowmap_pars_vertex:zm,shadowmap_vertex:Nm,shadowmask_pars_fragment:Um,skinbase_vertex:Bm,skinning_pars_vertex:Om,skinning_vertex:km,skinnormal_vertex:Vm,specularmap_fragment:Hm,specularmap_pars_fragment:Gm,tonemapping_fragment:Wm,tonemapping_pars_fragment:Xm,transmission_fragment:qm,transmission_pars_fragment:Ym,uv_pars_fragment:Zm,uv_pars_vertex:Jm,uv_vertex:$m,worldpos_vertex:Km,background_vert:jm,background_frag:Qm,backgroundCube_vert:tg,backgroundCube_frag:eg,cube_vert:ng,cube_frag:ig,depth_vert:sg,depth_frag:rg,distance_vert:og,distance_frag:ag,equirect_vert:lg,equirect_frag:cg,linedashed_vert:hg,linedashed_frag:ug,meshbasic_vert:dg,meshbasic_frag:fg,meshlambert_vert:pg,meshlambert_frag:mg,meshmatcap_vert:gg,meshmatcap_frag:xg,meshnormal_vert:_g,meshnormal_frag:yg,meshphong_vert:vg,meshphong_frag:Mg,meshphysical_vert:wg,meshphysical_frag:Sg,meshtoon_vert:bg,meshtoon_frag:Ag,points_vert:Eg,points_frag:Tg,shadow_vert:Cg,shadow_frag:Rg,sprite_vert:Pg,sprite_frag:Ig},ve={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]},probesIntensity:{value:[]}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},qi={basic:{uniforms:Jn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Jn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Jn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Jn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Jn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Fe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Jn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Jn([ve.points,ve.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Jn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Jn([ve.common,ve.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Jn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Jn([ve.sprite,ve.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Jn([ve.common,ve.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Jn([ve.lights,ve.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};qi.physical={uniforms:Jn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Jl={r:0,b:0,g:0},Fg=new rn,of=new We;of.set(-1,0,0,0,1,0,0,0,1);function Lg(i,t,e,n,s,r){let o=new Fe(0),a=s===!0?0:1,l,c,u=null,f=0,g=null;function x(P){let F=P.isScene===!0?P.background:null;if(F&&F.isTexture){let I=P.backgroundBlurriness>0;F=t.get(F,I)}return F}function y(P){let F=!1,I=x(P);I===null?m(o,a):I&&I.isColor&&(m(I,1),F=!0);let O=i.xr.getEnvironmentBlendMode();O==="additive"?e.buffers.color.setClear(0,0,0,1,r):O==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||F)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function R(P,F){let I=x(F);I&&I.isCubeTexture?(c===void 0&&(c=new Ht(new be(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Us(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(O,D,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=I,c.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Fg.makeRotationFromEuler(F.backgroundRotation)).transpose(),I.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(of),c.material.toneMapped=tn.getTransfer(I.colorSpace)!==cn,(u!==I||f!==I.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,u=I,f=I.version,g=i.toneMapping),c.layers.enableAll(),P.unshift(c,c.geometry,c.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new Ht(new xn(2,2),new bi({name:"BackgroundMaterial",uniforms:Us(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,l.material.toneMapped=tn.getTransfer(I.colorSpace)!==cn,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(u!==I||f!==I.version||g!==i.toneMapping)&&(l.material.needsUpdate=!0,u=I,f=I.version,g=i.toneMapping),l.layers.enableAll(),P.unshift(l,l.geometry,l.material,0,0,null))}function m(P,F){P.getRGB(Jl,Mh(i)),e.buffers.color.setClear(Jl.r,Jl.g,Jl.b,F,r)}function v(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(P,F=1){o.set(P),a=F,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(P){a=P,m(o,a)},render:y,addToRenderList:R,dispose:v}}function Dg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=g(null),r=s,o=!1;function a(st,dt,et,bt,ft){let Ot=!1,xt=f(st,bt,et,dt);r!==xt&&(r=xt,c(r.object)),Ot=x(st,bt,et,ft),Ot&&y(st,bt,et,ft),ft!==null&&t.update(ft,i.ELEMENT_ARRAY_BUFFER),(Ot||o)&&(o=!1,I(st,dt,et,bt),ft!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function l(){return i.createVertexArray()}function c(st){return i.bindVertexArray(st)}function u(st){return i.deleteVertexArray(st)}function f(st,dt,et,bt){let ft=bt.wireframe===!0,Ot=n[dt.id];Ot===void 0&&(Ot={},n[dt.id]=Ot);let xt=st.isInstancedMesh===!0?st.id:0,wt=Ot[xt];wt===void 0&&(wt={},Ot[xt]=wt);let vt=wt[et.id];vt===void 0&&(vt={},wt[et.id]=vt);let Dt=vt[ft];return Dt===void 0&&(Dt=g(l()),vt[ft]=Dt),Dt}function g(st){let dt=[],et=[],bt=[];for(let ft=0;ft<e;ft++)dt[ft]=0,et[ft]=0,bt[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:dt,enabledAttributes:et,attributeDivisors:bt,object:st,attributes:{},index:null}}function x(st,dt,et,bt){let ft=r.attributes,Ot=dt.attributes,xt=0,wt=et.getAttributes();for(let vt in wt)if(wt[vt].location>=0){let qt=ft[vt],Kt=Ot[vt];if(Kt===void 0&&(vt==="instanceMatrix"&&st.instanceMatrix&&(Kt=st.instanceMatrix),vt==="instanceColor"&&st.instanceColor&&(Kt=st.instanceColor)),qt===void 0||qt.attribute!==Kt||Kt&&qt.data!==Kt.data)return!0;xt++}return r.attributesNum!==xt||r.index!==bt}function y(st,dt,et,bt){let ft={},Ot=dt.attributes,xt=0,wt=et.getAttributes();for(let vt in wt)if(wt[vt].location>=0){let qt=Ot[vt];qt===void 0&&(vt==="instanceMatrix"&&st.instanceMatrix&&(qt=st.instanceMatrix),vt==="instanceColor"&&st.instanceColor&&(qt=st.instanceColor));let Kt={};Kt.attribute=qt,qt&&qt.data&&(Kt.data=qt.data),ft[vt]=Kt,xt++}r.attributes=ft,r.attributesNum=xt,r.index=bt}function R(){let st=r.newAttributes;for(let dt=0,et=st.length;dt<et;dt++)st[dt]=0}function m(st){v(st,0)}function v(st,dt){let et=r.newAttributes,bt=r.enabledAttributes,ft=r.attributeDivisors;et[st]=1,bt[st]===0&&(i.enableVertexAttribArray(st),bt[st]=1),ft[st]!==dt&&(i.vertexAttribDivisor(st,dt),ft[st]=dt)}function P(){let st=r.newAttributes,dt=r.enabledAttributes;for(let et=0,bt=dt.length;et<bt;et++)dt[et]!==st[et]&&(i.disableVertexAttribArray(et),dt[et]=0)}function F(st,dt,et,bt,ft,Ot,xt){xt===!0?i.vertexAttribIPointer(st,dt,et,ft,Ot):i.vertexAttribPointer(st,dt,et,bt,ft,Ot)}function I(st,dt,et,bt){R();let ft=bt.attributes,Ot=et.getAttributes(),xt=dt.defaultAttributeValues;for(let wt in Ot){let vt=Ot[wt];if(vt.location>=0){let Dt=ft[wt];if(Dt===void 0&&(wt==="instanceMatrix"&&st.instanceMatrix&&(Dt=st.instanceMatrix),wt==="instanceColor"&&st.instanceColor&&(Dt=st.instanceColor)),Dt!==void 0){let qt=Dt.normalized,Kt=Dt.itemSize,pe=t.get(Dt);if(pe===void 0)continue;let Ut=pe.buffer,ne=pe.type,he=pe.bytesPerElement,_e=ne===i.INT||ne===i.UNSIGNED_INT||Dt.gpuType===ul;if(Dt.isInterleavedBufferAttribute){let $t=Dt.data,ye=$t.isInterleavedBuffer===!0?$t.stride:$t.itemSize,Le=Dt.offset;if($t.isInstancedInterleavedBuffer||$t.isInstancedBufferAttribute){for(let le=0;le<vt.locationSize;le++)v(vt.location+le,$t.meshPerAttribute);st.isInstancedMesh!==!0&&bt._maxInstanceCount===void 0&&(bt._maxInstanceCount=$t.meshPerAttribute*$t.count)}else for(let le=0;le<vt.locationSize;le++)m(vt.location+le);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let le=0;le<vt.locationSize;le++)F(vt.location+le,Kt/vt.locationSize,ne,qt,ye*he,(Le+Kt/vt.locationSize*le)*he,_e)}else{if(Dt.isInstancedBufferAttribute){for(let $t=0;$t<vt.locationSize;$t++)v(vt.location+$t,Dt.meshPerAttribute);st.isInstancedMesh!==!0&&bt._maxInstanceCount===void 0&&(bt._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let $t=0;$t<vt.locationSize;$t++)m(vt.location+$t);i.bindBuffer(i.ARRAY_BUFFER,Ut);for(let $t=0;$t<vt.locationSize;$t++)F(vt.location+$t,Kt/vt.locationSize,ne,qt,Kt*he,Kt/vt.locationSize*$t*he,_e)}}else if(xt!==void 0){let qt=xt[wt];if(qt!==void 0)switch(qt.length){case 2:i.vertexAttrib2fv(vt.location,qt);break;case 3:i.vertexAttrib3fv(vt.location,qt);break;case 4:i.vertexAttrib4fv(vt.location,qt);break;default:i.vertexAttrib1fv(vt.location,qt)}}}}P()}function O(){J();for(let st in n){let dt=n[st];for(let et in dt){let bt=dt[et];for(let ft in bt){let Ot=bt[ft];for(let xt in Ot)u(Ot[xt].object),delete Ot[xt];delete bt[ft]}}delete n[st]}}function D(st){if(n[st.id]===void 0)return;let dt=n[st.id];for(let et in dt){let bt=dt[et];for(let ft in bt){let Ot=bt[ft];for(let xt in Ot)u(Ot[xt].object),delete Ot[xt];delete bt[ft]}}delete n[st.id]}function b(st){for(let dt in n){let et=n[dt];for(let bt in et){let ft=et[bt];if(ft[st.id]===void 0)continue;let Ot=ft[st.id];for(let xt in Ot)u(Ot[xt].object),delete Ot[xt];delete ft[st.id]}}}function L(st){for(let dt in n){let et=n[dt],bt=st.isInstancedMesh===!0?st.id:0,ft=et[bt];if(ft!==void 0){for(let Ot in ft){let xt=ft[Ot];for(let wt in xt)u(xt[wt].object),delete xt[wt];delete ft[Ot]}delete et[bt],Object.keys(et).length===0&&delete n[dt]}}}function J(){k(),o=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:J,resetDefaultState:k,dispose:O,releaseStatesOfGeometry:D,releaseStatesOfObject:L,releaseStatesOfProgram:b,initAttributes:R,enableAttribute:m,disableUnusedAttributes:P}}function zg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let g=0;for(let x=0;x<u;x++)g+=c[x];e.update(g,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ng(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==zi&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let L=b===Di&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==ii&&b!==Ai&&!L&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Ue("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),g=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Ue("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let x=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),P=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),F=i.getParameter(i.MAX_VARYING_VECTORS),I=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=i.getParameter(i.MAX_SAMPLES),D=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:g,reversedDepthBuffer:f,maxTextures:x,maxVertexTextures:y,maxTextureSize:R,maxCubemapSize:m,maxAttributes:v,maxVertexUniforms:P,maxVaryings:F,maxFragmentUniforms:I,maxSamples:O,samples:D}}function Ug(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Fi,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,g){let x=f.length!==0||g||n!==0||s;return s=g,n=f.length,x},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,g){e=u(f,g,0)},this.setState=function(f,g,x){let y=f.clippingPlanes,R=f.clipIntersection,m=f.clipShadows,v=i.get(f);if(!s||y===null||y.length===0||r&&!m)r?u(null):c();else{let P=r?0:n,F=P*4,I=v.clippingState||null;l.value=I,I=u(y,g,F,x);for(let O=0;O!==F;++O)I[O]=e[O];v.clippingState=I,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=P}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,g,x,y){let R=f!==null?f.length:0,m=null;if(R!==0){if(m=l.value,y!==!0||m===null){let v=x+R*4,P=g.matrixWorldInverse;a.getNormalMatrix(P),(m===null||m.length<v)&&(m=new Float32Array(v));for(let F=0,I=x;F!==R;++F,I+=4)o.copy(f[F]).applyMatrix4(P,a),o.normal.toArray(m,I),m[I+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,m}}var Do=class extends oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new to(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new be(5,5,5),r=new bi({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:Ls});r.uniforms.tEquirect.value=e;let o=new Ht(s,r),a=e.minFilter;return e.minFilter===ss&&(e.minFilter=Qn),new mr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ud=256,Bg=3,Og=20,af=256,lf=16,kg=3,Vg=new j,Hg=new Fe,Kl=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new mr(1,10,null),this._boxMesh=new Ht(new be(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Vg}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,g=l.autoClearColor,x=l.autoClearDepth,y=l.autoClearStencil,R=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,R===null&&(t.background=l.getClearColor(Hg));let m=new mr(n,s,u);return m.position.copy(a),m.update(l,t),l.autoClear=f,l.autoClearColor=g,l.autoClearDepth=x,l.autoClearStencil=y,t.background=R,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Ud,Ad(t))}_fromTexture(t,e){t.mapping===zs||t.mapping===_r?this._setSize(t.image.length===0?Ud:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Bd(t,!1,!1),n=Math.log2(t)-Bg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Bd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===zs||t.mapping===_r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Od()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Gg(),this._integrationMaterial=Wg());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/lf);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-kg)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(af*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Xg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Bd(i,t,e){return new Do(i,{minFilter:ss,generateMipmaps:t,type:Di,colorSpace:Vr,depthBuffer:e})}function zo(i,t,e){return new bi({name:i,uniforms:t,vertexShader:$e.cube_vert,fragmentShader:e,side:kn,blending:Ls,depthTest:!1,depthWrite:!1})}function Gg(){return zo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function qg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(g,x=!1){return g==null?null:x?o(g):r(g)}function r(g){if(g&&g.isTexture){let x=g.mapping;if(x===ll||x===cl)if(t.has(g)){let y=t.get(g).texture;return a(y,g.mapping)}else{let y=g.image;if(y&&y.height>0){let R=new Do(y.height);return R.fromEquirectangularTexture(i,g),t.set(g,R),g.addEventListener("dispose",c),a(R.texture,g.mapping)}else return null}}return g}function o(g){if(g&&g.isTexture&&g.isPMREMTexture!==!0){let x=g.mapping,y=x===ll||x===cl,R=x===zs||x===_r;if(y||R){let m=e.get(g),v=m!==void 0?m.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return n===null&&(n=new Kl(i)),m=y?n.fromEquirectangular(g,m):n.fromCubemap(g,m),m.texture.pmremVersion=g.pmremVersion,e.set(g,m),m.texture;if(m!==void 0)return m.texture;{let P=g.image;return y&&P&&P.height>0||R&&P&&l(P)?(n===null&&(n=new Kl(i)),m=y?n.fromEquirectangular(g):n.fromCubemap(g),m.texture.pmremVersion=g.pmremVersion,e.set(g,m),g.addEventListener("dispose",u),m.texture):null}}}return g}function a(g,x){return x===ll?g.mapping=zs:x===cl&&(g.mapping=_r),g}function l(g){let x=0,y=6;for(let R=0;R<y;R++)g[R]!==void 0&&x++;return x===y}function c(g){let x=g.target;x.removeEventListener("dispose",c);let y=t.get(x);y!==void 0&&(t.delete(x),y.dispose())}function u(g){let x=g.target;x.removeEventListener("dispose",u);let y=e.get(x);y!==void 0&&(e.delete(x),y.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Yg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ur("WebGLRenderer: "+n+" extension not supported."),s}}}function Zg(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(y=>delete s[y]);function a(y){l(y.target)}function l(y){y.index!==null&&t.remove(y.index);for(let m in y.attributes)t.remove(y.attributes[m]);y.removeEventListener("dispose",a),delete s[y.id],o.unregister(y);let R=r.get(y);R&&(t.remove(R),r.delete(y)),n.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,e.memory.geometries--}function c(y,R){return s[R.id]!==void 0||(R.addEventListener("dispose",a),s[R.id]=new WeakRef(R),o.register(R,R.id,R),e.memory.geometries++),R}function u(y){let R=y.attributes;for(let m in R)t.update(R[m],i.ARRAY_BUFFER)}function f(y){let R=y.index,m=y.attributes.position,v=0;if(m===void 0)return;let P=R!==null?R.count:m.count-1,F=m.count>=65535?$r:Jr,I=new F(Math.ceil(P/3)*6,1),O=I.array;if(R!==null){let b=R.array;v=R.version;for(let L=0,J=0;L<P;L+=3){let k=b[L+0],st=b[L+1],dt=b[L+2];O[J++]=k,O[J++]=st,O[J++]=st,O[J++]=dt,O[J++]=dt,O[J++]=k}}else{v=m.version;for(let b=0,L=0;b<P;b+=3){let J=b+0,k=b+1,st=b+2;O[L++]=J,O[L++]=k,O[L++]=k,O[L++]=st,O[L++]=st,O[L++]=J}}I.version=v;let D=r.get(y);D&&t.remove(D),r.set(y,I)}function g(y){let R=r.get(y);if(R){let m=y.index;m!==null&&R.version<m.version&&f(y)}else f(y);return r.get(y)}function x(){for(let y in s){let R=s[y].deref();R!==void 0&&l(R)}}return{get:c,update:u,getWireframeAttribute:g,dispose:x}}function Jg(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,g){i.drawElements(n,g,r,f*o),e.update(g,n,1)}function c(f,g,x){x!==0&&(i.drawElementsInstanced(n,g,r,f*o,x),e.update(g,n,x))}function u(f,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,f,0,x);let R=0;for(let m=0;m<x;m++)R+=g[m];e.update(R,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function $g(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Oe("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Kg(i,t,e){let n=new WeakMap,s=new fn;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,g=n.get(a);if(g===void 0||g.count!==f){let J=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",J)};g!==void 0&&g.texture.dispose();let x=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,R=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],P=a.morphAttributes.color||[],F=0;x===!0&&(F=1),y===!0&&(F=2),R===!0&&(F=3);let I=a.attributes.position.count*F,O=1;I>t.maxTextureSize&&(O=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);let D=new Float32Array(I*O*4*f),b=new Xr(D,I,O,f);b.type=Ai,b.needsUpdate=!0;let L=F*4;for(let k=0;k<f;k++){let st=m[k],dt=v[k],et=P[k],bt=I*O*4*k;for(let ft=0;ft<st.count;ft++){let Ot=ft*L;x===!0&&(s.fromBufferAttribute(st,ft),D[bt+Ot+0]=s.x,D[bt+Ot+1]=s.y,D[bt+Ot+2]=s.z,D[bt+Ot+3]=0),y===!0&&(s.fromBufferAttribute(dt,ft),D[bt+Ot+4]=s.x,D[bt+Ot+5]=s.y,D[bt+Ot+6]=s.z,D[bt+Ot+7]=0),R===!0&&(s.fromBufferAttribute(et,ft),D[bt+Ot+8]=s.x,D[bt+Ot+9]=s.y,D[bt+Ot+10]=s.z,D[bt+Ot+11]=et.itemSize===4?s.w:1)}}g={count:f,texture:b,size:new It(I,O)},n.set(a,g),a.addEventListener("dispose",J)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let x=0;for(let R=0;R<c.length;R++)x+=c[R];let y=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:r}}function jg(i,t,e,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,f=c.geometry,g=t.get(c,f);if(r.get(g)!==u&&(t.update(g),r.set(g,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let x=c.skeleton;r.get(x)!==u&&(x.update(),r.set(x,u))}return g}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Qg={[nh]:"LINEAR_TONE_MAPPING",[ih]:"REINHARD_TONE_MAPPING",[sh]:"CINEON_TONE_MAPPING",[So]:"ACES_FILMIC_TONE_MAPPING",[oh]:"AGX_TONE_MAPPING",[ah]:"NEUTRAL_TONE_MAPPING",[rh]:"CUSTOM_TONE_MAPPING"};function tx(i,t,e,n,s,r){let o=new oi(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Ze;u.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ge([0,2,0,0,2,0],2));let f=new Xa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Ht(u,f),x=new vo(-1,1,1,-1,0,1),y=null,R=null,m=!1,v,P=null,F=[],I=!1;this.setSize=function(O,D){o.setSize(O,D),a!==null&&a.setSize(O,D),l!==null&&l.setSize(O,D);for(let b=0;b<F.length;b++){let L=F[b];L.setSize&&L.setSize(O,D)}},this.setEffects=function(O){F=O,I=F.length>0&&F[0].isRenderPass===!0;let D=o.width,b=o.height;F.length>0&&a===null&&(a=new oi(D,b,{type:Di,depthBuffer:!1,stencilBuffer:!1}),l=new oi(D,b,{type:Di,depthBuffer:!1,stencilBuffer:!1}));let L=s===!0&&F.some(J=>J.needsDepthTexture===!0);L!==(o.depthTexture!==null)&&(L===!0&&c===null&&(c=new ns(D,b),r===!0&&(c.format=rs,c.type=Ns)),o.dispose(),o.depthTexture=L?c:null,o.resolveDepthBuffer=L,o.storeMultisampledDepthBuffer=L);for(let J=0;J<F.length;J++){let k=F[J];k.setSize&&k.setSize(D,b),L&&k.needsDepthTexture===!0&&k.setDepthTexture&&k.setDepthTexture(c)}},this.begin=function(O,D){if(m||O.toneMapping===Wi&&F.length===0)return!1;if(P=D,D!==null){let b=D.width,L=D.height;(o.width!==b||o.height!==L)&&this.setSize(b,L)}return I===!1&&O.setRenderTarget(o),v=O.toneMapping,O.toneMapping=Wi,!0},this.hasRenderPass=function(){return I},this.end=function(O,D){O.toneMapping=v,m=!0;let b=o,L=a;for(let J=0;J<F.length;J++){let k=F[J];k.enabled!==!1&&(k.render(O,L,b,D),k.needsSwap!==!1&&(b=L,L=L===a?l:a))}if(y!==O.outputColorSpace||R!==O.toneMapping){y=O.outputColorSpace,R=O.toneMapping,f.defines={},tn.getTransfer(y)===cn&&(f.defines.SRGB_TRANSFER="");let J=Qg[R];J&&(f.defines[J]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=b.texture,O.setRenderTarget(P),O.render(g,x),P=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}var cf=new ti,hf=new ns(1,1),uf=new no(1),df=new Xr,ff=new Da,pf=new to,Vd=[],Hd=[],Gd=new Float32Array(16),Wd=new Float32Array(9),Xd=new Float32Array(4);function Mr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Vd[s];if(r===void 0&&(r=new Float32Array(s),Vd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Pn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function In(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ql(i,t){let e=Hd[t];e===void 0&&(e=new Int32Array(t),Hd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ex(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2fv(this.addr,t),In(e,t)}}function ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pn(e,t))return;i.uniform3fv(this.addr,t),In(e,t)}}function sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4fv(this.addr,t),In(e,t)}}function rx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),In(e,t)}else{if(Pn(e,n))return;Xd.set(n),i.uniformMatrix2fv(this.addr,!1,Xd),In(e,n)}}function ox(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),In(e,t)}else{if(Pn(e,n))return;Wd.set(n),i.uniformMatrix3fv(this.addr,!1,Wd),In(e,n)}}function ax(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),In(e,t)}else{if(Pn(e,n))return;Gd.set(n),i.uniformMatrix4fv(this.addr,!1,Gd),In(e,n)}}function lx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2iv(this.addr,t),In(e,t)}}function hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pn(e,t))return;i.uniform3iv(this.addr,t),In(e,t)}}function ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4iv(this.addr,t),In(e,t)}}function dx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function fx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pn(e,t))return;i.uniform2uiv(this.addr,t),In(e,t)}}function px(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pn(e,t))return;i.uniform3uiv(this.addr,t),In(e,t)}}function mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pn(e,t))return;i.uniform4uiv(this.addr,t),In(e,t)}}function tc(i){return i.version===0&&(i.compareFunction=xh,i.needsUpdate=!0),i}function gx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=tc(hf):r=cf,e.setTexture2D(t||r,s)}function xx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ff,s)}function _x(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=tc(uf):r=pf,e.setTextureCube(t||r,s)}function yx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||df,s)}function vx(i){switch(i){case 5126:return ex;case 35664:return nx;case 35665:return ix;case 35666:return sx;case 35674:return rx;case 35675:return ox;case 35676:return ax;case 5124:case 35670:return lx;case 35667:case 35671:return cx;case 35668:case 35672:return hx;case 35669:case 35673:return ux;case 5125:return dx;case 36294:return fx;case 36295:return px;case 36296:return mx;case 35678:case 36198:case 36298:case 36306:case 35682:return gx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return yx}}function Mx(i,t){i.uniform1fv(this.addr,t)}function wx(i,t){let e=Mr(t,this.size,2);i.uniform2fv(this.addr,e)}function Sx(i,t){let e=Mr(t,this.size,3);i.uniform3fv(this.addr,e)}function bx(i,t){let e=Mr(t,this.size,4);i.uniform4fv(this.addr,e)}function Ax(i,t){let e=Mr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ex(i,t){let e=Mr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Tx(i,t){let e=Mr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Cx(i,t){i.uniform1iv(this.addr,t)}function Rx(i,t){i.uniform2iv(this.addr,t)}function Px(i,t){i.uniform3iv(this.addr,t)}function Ix(i,t){i.uniform4iv(this.addr,t)}function Fx(i,t){i.uniform1uiv(this.addr,t)}function Lx(i,t){i.uniform2uiv(this.addr,t)}function Dx(i,t){i.uniform3uiv(this.addr,t)}function zx(i,t){i.uniform4uiv(this.addr,t)}function Nx(i,t,e){let n=this.cache,s=t.length,r=Ql(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=tc(hf):o=cf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Ux(i,t,e){let n=this.cache,s=t.length,r=Ql(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ff,r[o])}function Bx(i,t,e){let n=this.cache,s=t.length,r=Ql(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=tc(uf):o=pf;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function Ox(i,t,e){let n=this.cache,s=t.length,r=Ql(e,s);Pn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||df,r[o])}function kx(i){switch(i){case 5126:return Mx;case 35664:return wx;case 35665:return Sx;case 35666:return bx;case 35674:return Ax;case 35675:return Ex;case 35676:return Tx;case 5124:case 35670:return Cx;case 35667:case 35671:return Rx;case 35668:case 35672:return Px;case 35669:case 35673:return Ix;case 5125:return Fx;case 36294:return Lx;case 36295:return Dx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Bx;case 36289:case 36303:case 36311:case 36292:return Ox}}var Fh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vx(e.type)}},Lh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kx(e.type)}},Dh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ph=/(\w+)(\])?(\[|\.)?/g;function qd(i,t){i.seq.push(t),i.map[t.id]=t}function Vx(i,t,e){let n=i.name,s=n.length;for(Ph.lastIndex=0;;){let r=Ph.exec(n),o=Ph.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qd(e,c===void 0?new Fh(a,i,t):new Lh(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Dh(a),qd(e,f)),e=f}}}var vr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Vx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Yd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Hx=37297,Gx=0;function Wx(i,t){let e=i.split(`
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
#define LOW_PRECISION`),t}var i1={[Fs]:"SHADOWMAP_TYPE_PCF",[gr]:"SHADOWMAP_TYPE_VSM"};function s1(i){return i1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var r1={[_r]:"ENVMAP_MODE_REFRACTION"};function o1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":r1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var a1={[wo]:"ENVMAP_BLENDING_MULTIPLY",[hd]:"ENVMAP_BLENDING_MIX",[ud]:"ENVMAP_BLENDING_ADD"};function l1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":a1[i.combine]||"ENVMAP_BLENDING_NONE"}function c1(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=s1(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=o1(e),f=l1(e),g=$x(e),x=Kx(r),y=s.createProgram(),R,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(R=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Lo).join(`
`),R.length>0&&(R+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Lo).join(`
`),m.length>0&&(m+=`
`)):(R=[Qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),m=[Qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?$e.tonemapping_pars_fragment:"",e.toneMapping!==Wi?Zx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,qx("linearToOutputTexel",e.outputColorSpace),Jx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lo).join(`
`)),o=zh(o),o=$d(o,e),o=Kd(o,e),a=zh(a),a=$d(a,e),a=Kd(a,e),o=jd(o),a=jd(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,R=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,m=["#define varying in",e.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let P=v+R+o,F=v+m+a,I=Yd(s,s.VERTEX_SHADER,P),O=Yd(s,s.FRAGMENT_SHADER,F);s.attachShader(y,I),s.attachShader(y,O),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function D(k){if(i.debug.checkShaderErrors){let st=s.getProgramInfoLog(y)||"",dt=s.getShaderInfoLog(I)||"",et=s.getShaderInfoLog(O)||"",bt=st.trim(),ft=dt.trim(),Ot=et.trim(),xt=!0,wt=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(xt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,I,O);else{let vt=Jd(s,I,"vertex"),Dt=Jd(s,O,"fragment");Oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+bt+`
`+vt+`
`+Dt)}else bt!==""?Ue("WebGLProgram: Program Info Log:",bt):(ft===""||Ot==="")&&(wt=!1);wt&&(k.diagnostics={runnable:xt,programLog:bt,vertexShader:{log:ft,prefix:R},fragmentShader:{log:Ot,prefix:m}})}s.deleteShader(I),s.deleteShader(O),b=new vr(s,y),L=jx(s,y)}let b;this.getUniforms=function(){return b===void 0&&D(this),b};let L;this.getAttributes=function(){return L===void 0&&D(this),L};let J=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=s.getProgramParameter(y,Hx)),J},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gx++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=O,this}var h1=0,Nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Uh(t),e.set(t,n)),n}},Uh=class{constructor(t){this.id=h1++,this.code=t,this.usedTimes=0}};function u1(i){return i===ys||i===Ro||i===Po}function d1(i,t,e,n,s,r){let o=new qr,a=new Nh,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function y(b,L,J,k,st,dt){let et=k.fog,bt=st.geometry,ft=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,Ot=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,xt=t.get(b.envMap||ft,Ot),wt=g[b.type],vt=n.precision;b.precision!==null&&(vt=n.getMaxPrecision(b.precision),vt!==b.precision&&Ue("WebGLProgram.getParameters:",b.precision,"not supported, using",vt,"instead."));let Dt=bt.morphAttributes.position||bt.morphAttributes.normal||bt.morphAttributes.color,qt=Dt!==void 0?Dt.length:0,Kt=0;bt.morphAttributes.position!==void 0&&(Kt=1),bt.morphAttributes.normal!==void 0&&(Kt=2),bt.morphAttributes.color!==void 0&&(Kt=3);let pe,Ut,ne,he;if(wt){let fe=qi[wt];pe=fe.vertexShader,Ut=fe.fragmentShader}else{pe=b.vertexShader,Ut=b.fragmentShader;let fe=a.getVertexShaderStage(b),Xe=a.getFragmentShaderStage(b);a.update(b,fe,Xe),ne=fe.id,he=Xe.id}let _e=i.getRenderTarget(),$t=i.state.buffers.depth.getReversed(),ye=st.isInstancedMesh===!0,Le=st.isBatchedMesh===!0,le=!!b.map,G=!!b.matcap,At=!!xt,it=At&&xt.isPMREMTexture===!0,mt=!!b.aoMap,K=!!b.lightMap,pt=!!b.bumpMap&&b.wireframe===!1,ot=!!b.normalMap,ht=!!b.displacementMap,_t=!!b.emissiveMap,Rt=!!b.metalnessMap,Tt=!!b.roughnessMap,d=b.anisotropy>0,p=b.clearcoat>0,X=b.diffuseRoughness>0,C=b.dispersion>0,V=b.retroreflectivity>0,B=b.iridescence>0,at=b.sheen>0,ut=b.transmission>0,Et=d&&!!b.anisotropyMap,U=p&&!!b.clearcoatMap,T=p&&!!b.clearcoatNormalMap,tt=p&&!!b.clearcoatRoughnessMap,nt=X&&!!b.diffuseRoughnessMap,yt=B&&!!b.iridescenceMap,ct=B&&!!b.iridescenceThicknessMap,gt=at&&!!b.sheenColorMap,Mt=at&&!!b.sheenRoughnessMap,zt=!!b.specularMap,Zt=!!b.specularColorMap,ce=!!b.specularIntensityMap,$=ut&&!!b.transmissionMap,St=ut&&!!b.thicknessMap,Gt=!!b.gradientMap,Jt=!!b.alphaMap,se=b.alphaTest>0,ge=!!b.alphaHash,Ie=!!b.extensions,jt=Wi;b.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(jt=i.toneMapping);let ke=it?xt.isCompressedCubeTexture?xt.image[0].mipmaps:xt.mipmaps:null,Ae={shaderID:wt,shaderType:b.type,shaderName:b.name,vertexShader:pe,fragmentShader:Ut,defines:b.defines,customVertexShaderID:ne,customFragmentShaderID:he,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:vt,batching:Le,batchingColor:Le&&st._colorsTexture!==null,instancing:ye,instancingColor:ye&&st.instanceColor!==null,instancingMorph:ye&&st.morphTexture!==null,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:tn.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:le,matcap:G,envMap:At,envMapMode:At&&xt.mapping,envMapPMREM:it,envMapMaxLod:it?ke.length-1:null,envMapSize:it?ke[0].width:null,aoMap:mt,lightMap:K,bumpMap:pt,normalMap:ot,displacementMap:ht,emissiveMap:_t,normalMapObjectSpace:ot&&b.normalMapType===pd,normalMapTangentSpace:ot&&b.normalMapType===Io,packedNormalMap:ot&&b.normalMapType===Io&&u1(b.normalMap.format),metalnessMap:Rt,roughnessMap:Tt,anisotropy:d,anisotropyMap:Et,clearcoat:p,clearcoatMap:U,clearcoatNormalMap:T,clearcoatRoughnessMap:tt,diffuseRoughness:X,diffuseRoughnessMap:nt,dispersion:C,retroreflection:V,iridescence:B,iridescenceMap:yt,iridescenceThicknessMap:ct,sheen:at,sheenColorMap:gt,sheenRoughnessMap:Mt,specularMap:zt,specularColorMap:Zt,specularIntensityMap:ce,transmission:ut,transmissionMap:$,thicknessMap:St,gradientMap:Gt,opaque:b.transparent===!1&&b.blending===xr&&b.alphaToCoverage===!1,alphaMap:Jt,alphaTest:se,alphaHash:ge,combine:b.combine,mapUv:le&&x(b.map.channel),aoMapUv:mt&&x(b.aoMap.channel),lightMapUv:K&&x(b.lightMap.channel),bumpMapUv:pt&&x(b.bumpMap.channel),normalMapUv:ot&&x(b.normalMap.channel),displacementMapUv:ht&&x(b.displacementMap.channel),emissiveMapUv:_t&&x(b.emissiveMap.channel),metalnessMapUv:Rt&&x(b.metalnessMap.channel),roughnessMapUv:Tt&&x(b.roughnessMap.channel),anisotropyMapUv:Et&&x(b.anisotropyMap.channel),clearcoatMapUv:U&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:T&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&x(b.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&x(b.diffuseRoughnessMap.channel),iridescenceMapUv:yt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&x(b.sheenRoughnessMap.channel),specularMapUv:zt&&x(b.specularMap.channel),specularColorMapUv:Zt&&x(b.specularColorMap.channel),specularIntensityMapUv:ce&&x(b.specularIntensityMap.channel),transmissionMapUv:$&&x(b.transmissionMap.channel),thicknessMapUv:St&&x(b.thicknessMap.channel),alphaMapUv:Jt&&x(b.alphaMap.channel),vertexTangents:!!bt.attributes.tangent&&(ot||d),vertexNormals:!!bt.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!bt.attributes.color&&bt.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!bt.attributes.uv&&(le||Jt),fog:!!et,useFog:b.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||bt.attributes.normal===void 0&&ot===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:$t,skinning:st.isSkinnedMesh===!0,hasPositionAttribute:bt.attributes.position!==void 0,morphTargets:bt.morphAttributes.position!==void 0,morphNormals:bt.morphAttributes.normal!==void 0,morphColors:bt.morphAttributes.color!==void 0,morphTargetsCount:qt,morphTextureStride:Kt,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbeGrids:dt.filter(fe=>fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&J.length>0,shadowMapType:i.shadowMap.type,toneMapping:jt,decodeVideoTexture:le&&b.map.isVideoTexture===!0&&tn.getTransfer(b.map.colorSpace)===cn,decodeVideoTextureEmissive:_t&&b.emissiveMap.isVideoTexture===!0&&tn.getTransfer(b.emissiveMap.colorSpace)===cn,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Be,flipSided:b.side===kn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ie&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&b.extensions.multiDraw===!0||Le)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function R(b){let L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(let J in b.defines)L.push(J),L.push(b.defines[J]);return b.isRawShaderMaterial===!1&&(m(L,b),v(L,b),L.push(i.outputColorSpace)),L.push(b.customProgramCacheKey),L.join()}function m(b,L){b.push(L.precision),b.push(L.outputColorSpace),b.push(L.envMapMode),b.push(L.envMapPMREM),b.push(L.envMapMaxLod),b.push(L.envMapSize),b.push(L.mapUv),b.push(L.alphaMapUv),b.push(L.lightMapUv),b.push(L.aoMapUv),b.push(L.bumpMapUv),b.push(L.normalMapUv),b.push(L.displacementMapUv),b.push(L.emissiveMapUv),b.push(L.metalnessMapUv),b.push(L.roughnessMapUv),b.push(L.anisotropyMapUv),b.push(L.clearcoatMapUv),b.push(L.clearcoatNormalMapUv),b.push(L.clearcoatRoughnessMapUv),b.push(L.diffuseRoughnessMapUv),b.push(L.iridescenceMapUv),b.push(L.iridescenceThicknessMapUv),b.push(L.sheenColorMapUv),b.push(L.sheenRoughnessMapUv),b.push(L.specularMapUv),b.push(L.specularColorMapUv),b.push(L.specularIntensityMapUv),b.push(L.transmissionMapUv),b.push(L.thicknessMapUv),b.push(L.combine),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.numSunLights),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numSunLightShadows),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.numLightProbeGrids),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function v(b,L){o.disableAll(),L.instancing&&o.enable(0),L.instancingColor&&o.enable(1),L.instancingMorph&&o.enable(2),L.matcap&&o.enable(3),L.envMap&&o.enable(4),L.normalMapObjectSpace&&o.enable(5),L.normalMapTangentSpace&&o.enable(6),L.clearcoat&&o.enable(7),L.iridescence&&o.enable(8),L.alphaTest&&o.enable(9),L.vertexColors&&o.enable(10),L.vertexAlphas&&o.enable(11),L.vertexUv1s&&o.enable(12),L.vertexUv2s&&o.enable(13),L.vertexUv3s&&o.enable(14),L.vertexTangents&&o.enable(15),L.anisotropy&&o.enable(16),L.alphaHash&&o.enable(17),L.batching&&o.enable(18),L.dispersion&&o.enable(19),L.retroreflection&&o.enable(24),L.diffuseRoughness&&o.enable(25),L.batchingColor&&o.enable(20),L.gradientMap&&o.enable(21),L.packedNormalMap&&o.enable(22),L.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.reversedDepthBuffer&&o.enable(4),L.skinning&&o.enable(5),L.morphTargets&&o.enable(6),L.morphNormals&&o.enable(7),L.morphColors&&o.enable(8),L.premultipliedAlpha&&o.enable(9),L.shadowMapEnabled&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.transmission&&o.enable(15),L.sheen&&o.enable(16),L.opaque&&o.enable(17),L.pointsUvs&&o.enable(18),L.decodeVideoTexture&&o.enable(19),L.decodeVideoTextureEmissive&&o.enable(20),L.alphaToCoverage&&o.enable(21),L.numLightProbeGrids>0&&o.enable(22),L.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function P(b){let L=g[b.type],J;if(L){let k=qi[L];J=Dd.clone(k.uniforms)}else J=b.uniforms;return J}function F(b,L){let J=u.get(L);return J!==void 0?++J.usedTimes:(J=new c1(i,L,b,s),c.push(J),u.set(L,J)),J}function I(b){if(--b.usedTimes===0){let L=c.indexOf(b);c[L]=c[c.length-1],c.pop(),u.delete(b.cacheKey),b.destroy()}}function O(b){a.remove(b)}function D(){a.dispose()}return{getParameters:y,getProgramCacheKey:R,getUniforms:P,acquireProgram:F,releaseProgram:I,releaseShaderCache:O,programs:c,dispose:D}}function f1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function p1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function tf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ef(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function a(g,x,y,R,m,v){let P=i[t];return P===void 0?(P={id:g.id,object:g,geometry:x,material:y,materialVariant:o(g),groupOrder:R,renderOrder:g.renderOrder,z:m,group:v},i[t]=P):(P.id=g.id,P.object=g,P.geometry=x,P.material=y,P.materialVariant=o(g),P.groupOrder=R,P.renderOrder=g.renderOrder,P.z=m,P.group=v),t++,P}function l(g,x,y,R,m,v,P){P.reversedDepth===!0&&(m=-m);let F=a(g,x,y,R,m,v);y.transmission>0?n.push(F):y.transparent===!0?s.push(F):e.push(F)}function c(g,x,y,R,m,v){let P=a(g,x,y,R,m,v);y.transmission>0?n.unshift(P):y.transparent===!0?s.unshift(P):e.unshift(P)}function u(g,x){e.length>1&&e.sort(g||p1),n.length>1&&n.sort(x||tf),s.length>1&&s.sort(x||tf)}function f(){for(let g=t,x=i.length;g<x;g++){let y=i[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function m1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new ef,i.set(n,[o])):s>=r.length?(o=new ef,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function g1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new j,color:new Fe};break;case"SpotLight":e={position:new j,direction:new j,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new j,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new j,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":e={color:new Fe,position:new j,halfWidth:new j,halfHeight:new j};break}return i[t.id]=e,e}}}function x1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var _1=0;function y1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function v1(i){let t=new g1,e=x1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0},s=new j,r=new rn,o=new rn;function a(c){let u=0,f=0,g=0,x=0,y=0,R=0,m=0,v=0,P=0,F=0,I=0,O=0,D=0,b=0,L=0,J=0;c.sort(y1);for(let st=0,dt=c.length;st<dt;st++){let et=c[st],bt=et.color,ft=et.intensity,Ot=et.distance,xt=null;if(et.shadow&&et.shadow.map&&(et.shadow.map.texture.format===ys?xt=et.shadow.map.texture:xt=et.shadow.map.depthTexture||et.shadow.map.texture),et.isAmbientLight)u+=bt.r*ft,f+=bt.g*ft,g+=bt.b*ft;else if(et.isSunLight){let wt=t.get(et);if(wt.color.copy(et.color).multiplyScalar(et.intensity),et.castShadow){let vt=et.shadow,Dt=e.get(et);Dt.shadowIntensity=vt.intensity,Dt.shadowBias=vt.bias,Dt.shadowNormalBias=vt.normalBias,Dt.shadowRadius=vt.radius,Dt.shadowMapSize.copy(vt.mapSize).multiply(vt.getFrameExtents()),n.sunShadow[y]=Dt,n.sunShadowMap[y]=xt;let qt=vt.getViewportCount();for(let Kt=0;Kt<qt;Kt++)n.sunShadowMatrix[R+Kt]=vt.getMatrix(Kt),n.sunShadowCascade[R+Kt]=vt._cascadeData[Kt];R+=qt,y++}n.sun[x]=wt,x++}else if(et.isDirectionalLight){let wt=t.get(et);if(wt.color.copy(et.color).multiplyScalar(et.intensity),et.castShadow){let vt=et.shadow,Dt=e.get(et);Dt.shadowIntensity=vt.intensity,Dt.shadowBias=vt.bias,Dt.shadowNormalBias=vt.normalBias,Dt.shadowRadius=vt.radius,Dt.shadowMapSize=vt.mapSize,n.directionalShadow[m]=Dt,n.directionalShadowMap[m]=xt,n.directionalShadowMatrix[m]=et.shadow.matrix,O++}n.directional[m]=wt,m++}else if(et.isSpotLight){let wt=t.get(et);wt.position.setFromMatrixPosition(et.matrixWorld),wt.color.copy(bt).multiplyScalar(ft),wt.distance=Ot,wt.coneCos=Math.cos(et.angle),wt.penumbraCos=Math.cos(et.angle*(1-et.penumbra)),wt.decay=et.decay,n.spot[P]=wt;let vt=et.shadow;if(et.map&&(n.spotLightMap[L]=et.map,L++,vt.updateMatrices(et),et.castShadow&&J++),n.spotLightMatrix[P]=vt.matrix,et.castShadow){let Dt=e.get(et);Dt.shadowIntensity=vt.intensity,Dt.shadowBias=vt.bias,Dt.shadowNormalBias=vt.normalBias,Dt.shadowRadius=vt.radius,Dt.shadowMapSize=vt.mapSize,n.spotShadow[P]=Dt,n.spotShadowMap[P]=xt,b++}P++}else if(et.isRectAreaLight){let wt=t.get(et);wt.color.copy(bt).multiplyScalar(ft),wt.halfWidth.set(et.width*.5,0,0),wt.halfHeight.set(0,et.height*.5,0),n.rectArea[F]=wt,F++}else if(et.isPointLight){let wt=t.get(et);if(wt.color.copy(et.color).multiplyScalar(et.intensity),wt.distance=et.distance,wt.decay=et.decay,et.castShadow){let vt=et.shadow,Dt=e.get(et);Dt.shadowIntensity=vt.intensity,Dt.shadowBias=vt.bias,Dt.shadowNormalBias=vt.normalBias,Dt.shadowRadius=vt.radius,Dt.shadowMapSize=vt.mapSize,Dt.shadowCameraNear=vt.camera.near,Dt.shadowCameraFar=vt.camera.far,n.pointShadow[v]=Dt,n.pointShadowMap[v]=xt,n.pointShadowMatrix[v]=et.shadow.matrix,D++}n.point[v]=wt,v++}else if(et.isHemisphereLight){let wt=t.get(et);wt.skyColor.copy(et.color).multiplyScalar(ft),wt.groundColor.copy(et.groundColor).multiplyScalar(ft),n.hemi[I]=wt,I++}}F>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=g;let k=n.hash;(k.sunLength!==x||k.directionalLength!==m||k.pointLength!==v||k.spotLength!==P||k.rectAreaLength!==F||k.hemiLength!==I||k.numSunShadows!==y||k.numDirectionalShadows!==O||k.numPointShadows!==D||k.numSpotShadows!==b||k.numSpotMaps!==L)&&(n.sun.length=x,n.directional.length=m,n.spot.length=P,n.rectArea.length=F,n.point.length=v,n.hemi.length=I,n.sunShadow.length=y,n.sunShadowMap.length=y,n.sunShadowMatrix.length=R,n.sunShadowCascade.length=R,n.directionalShadow.length=O,n.directionalShadowMap.length=O,n.directionalShadowMatrix.length=O,n.pointShadow.length=D,n.pointShadowMap.length=D,n.pointShadowMatrix.length=D,n.spotShadow.length=b,n.spotShadowMap.length=b,n.spotLightMatrix.length=b+L-J,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=J,k.sunLength=x,k.directionalLength=m,k.pointLength=v,k.spotLength=P,k.rectAreaLength=F,k.hemiLength=I,k.numSunShadows=y,k.numDirectionalShadows=O,k.numPointShadows=D,k.numSpotShadows=b,k.numSpotMaps=L,n.version=_1++)}function l(c,u){let f=0,g=0,x=0,y=0,R=0,m=0,v=u.matrixWorldInverse;for(let P=0,F=c.length;P<F;P++){let I=c[P];if(I.isSunLight){let O=n.sun[f];O.direction.setFromMatrixPosition(I.matrixWorld),O.direction.transformDirection(v),f++}else if(I.isDirectionalLight){let O=n.directional[g];O.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),O.direction.sub(s),O.direction.transformDirection(v),g++}else if(I.isSpotLight){let O=n.spot[y];O.position.setFromMatrixPosition(I.matrixWorld),O.position.applyMatrix4(v),O.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),O.direction.sub(s),O.direction.transformDirection(v),y++}else if(I.isRectAreaLight){let O=n.rectArea[R];O.position.setFromMatrixPosition(I.matrixWorld),O.position.applyMatrix4(v),o.identity(),r.copy(I.matrixWorld),r.premultiply(v),o.extractRotation(r),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),O.halfWidth.applyMatrix4(o),O.halfHeight.applyMatrix4(o),R++}else if(I.isPointLight){let O=n.point[x];O.position.setFromMatrixPosition(I.matrixWorld),O.position.applyMatrix4(v),x++}else if(I.isHemisphereLight){let O=n.hemi[m];O.direction.setFromMatrixPosition(I.matrixWorld),O.direction.transformDirection(v),m++}}}return{setup:a,setupView:l,state:n}}function nf(i){let t=new v1(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):e.push(f)}function a(f){n.push(f)}function l(){t.setup(e),s.sort((f,g)=>f.priority-g.priority||f.id-g.id)}function c(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function M1(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new nf(i),t.set(s,[a])):r>=o.length?(a=new nf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var w1=`void main() {
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
}`,b1=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],A1=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],sf=new rn,Fo=new j,Ih=new j;function E1(i,t,e){let n=new fs,s=new It,r=new It,o=new fn,a=new qa,l=new Ya,c={},u=e.maxTextureSize,f={[_s]:kn,[kn]:_s,[Be]:Be},g=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:w1,fragmentShader:S1}),x=g.clone();x.defines.HORIZONTAL_PASS=1;let y=new Ze;y.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let R=new Ht(y,g),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fs;let v=this.type;this.render=function(D,b,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;this.type===Xu&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fs);let J=i.getRenderTarget(),k=i.getActiveCubeFace(),st=i.getActiveMipmapLevel(),dt=i.state;dt.setBlending(Ls),dt.buffers.depth.getReversed()===!0?dt.buffers.color.setClear(0,0,0,0):dt.buffers.color.setClear(1,1,1,1),dt.buffers.depth.setTest(!0),dt.setScissorTest(!1);let et=v!==this.type;et&&b.traverse(function(bt){bt.material&&(Array.isArray(bt.material)?bt.material.forEach(ft=>ft.needsUpdate=!0):bt.material.needsUpdate=!0)});for(let bt=0,ft=D.length;bt<ft;bt++){let Ot=D[bt],xt=Ot.shadow;if(xt===void 0){Ue("WebGLShadowMap:",Ot,"has no shadow.");continue}if(xt.autoUpdate===!1&&xt.needsUpdate===!1)continue;s.copy(xt.mapSize);let wt=xt.getFrameExtents();s.multiply(wt),r.copy(xt.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/wt.x),s.x=r.x*wt.x,xt.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/wt.y),s.y=r.y*wt.y,xt.mapSize.y=r.y));let vt=i.state.buffers.depth.getReversed();if(xt.camera._reversedDepth=vt,xt.map===null||et===!0){if(xt.map!==null&&(xt.map.depthTexture!==null&&(xt.map.depthTexture.dispose(),xt.map.depthTexture=null),xt.map.dispose()),this.type===gr){if(Ot.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}xt.map=new oi(s.x,s.y,{format:ys,type:Di,minFilter:Qn,magFilter:Qn,generateMipmaps:!1}),xt.map.texture.name=Ot.name+".shadowMap",xt.map.depthTexture=new ns(s.x,s.y,Ai),xt.map.depthTexture.name=Ot.name+".shadowMapDepth",xt.map.depthTexture.format=ts,xt.map.depthTexture.compareFunction=null,xt.map.depthTexture.minFilter=Dn,xt.map.depthTexture.magFilter=Dn}else Ot.isPointLight?(xt.map=new Do(s.x),xt.map.depthTexture=new no(s.x,Li)):(xt.map=new oi(s.x,s.y),xt.map.depthTexture=new ns(s.x,s.y,Li)),xt.map.depthTexture.name=Ot.name+".shadowMap",xt.map.depthTexture.format=ts,this.type===Fs?(xt.map.depthTexture.compareFunction=vt?gh:mh,xt.map.depthTexture.minFilter=Qn,xt.map.depthTexture.magFilter=Qn):(xt.map.depthTexture.compareFunction=null,xt.map.depthTexture.minFilter=Dn,xt.map.depthTexture.magFilter=Dn);xt.camera.updateProjectionMatrix()}xt.map.isWebGLCubeRenderTarget!==!0&&(xt.map.width!==s.x||xt.map.height!==s.y)&&xt.map.setSize(s.x,s.y);let Dt=xt.map.isWebGLCubeRenderTarget?6:xt.getViewportCount();Ot.isPointLight!==!0&&xt.updateMatrices(Ot,L);let qt=(xt.camera.layers.mask&4294967294)!==0?xt.camera.layers:L.layers;for(let Kt=0;Kt<Dt;Kt++){let pe=xt.getCamera(Kt);if(Ot.isPointLight){let Ut=xt.camera,ne=xt.matrix,he=Ot.distance||Ut.far;he!==Ut.far&&(Ut.far=he,Ut.updateProjectionMatrix()),Fo.setFromMatrixPosition(Ot.matrixWorld),Ut.position.copy(Fo),Ih.copy(Ut.position),Ih.add(b1[Kt]),Ut.up.copy(A1[Kt]),Ut.lookAt(Ih),Ut.updateMatrixWorld(),ne.makeTranslation(-Fo.x,-Fo.y,-Fo.z),sf.multiplyMatrices(Ut.projectionMatrix,Ut.matrixWorldInverse),xt._frustum.setFromProjectionMatrix(sf,Ut.coordinateSystem,Ut.reversedDepth)}if(xt.map.isWebGLCubeRenderTarget)i.setRenderTarget(xt.map,Kt),i.clear();else{Kt===0&&(i.setRenderTarget(xt.map),i.clear());let Ut=xt.getViewport(Kt);o.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),dt.viewport(o)}n=xt.getFrustum(Kt),I(b,L,pe,Ot,qt,this.type)}xt.isPointLightShadow!==!0&&this.type===gr&&P(xt,L),xt.needsUpdate=!1}v=this.type,m.needsUpdate=!1,i.setRenderTarget(J,k,st)};function P(D,b){let L=t.update(R);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null?D.mapPass=new oi(s.x,s.y,{format:ys,type:Di}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value.set(D.map.width,D.map.height),g.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(b,null,L,g,R,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value.set(D.map.width,D.map.height),x.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(b,null,L,x,R,null)}function F(D,b,L,J){let k=null,st=L.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(st!==void 0)k=st;else if(k=L.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let dt=k.uuid,et=b.uuid,bt=c[dt];bt===void 0&&(bt={},c[dt]=bt);let ft=bt[et];ft===void 0&&(ft=k.clone(),bt[et]=ft,b.addEventListener("dispose",O)),k=ft}if(k.visible=b.visible,k.wireframe=b.wireframe,J===gr?k.side=b.shadowSide!==null?b.shadowSide:b.side:k.side=b.shadowSide!==null?b.shadowSide:f[b.side],k.alphaMap=b.alphaMap,k.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,k.map=b.map,k.clipShadows=b.clipShadows,k.clippingPlanes=b.clippingPlanes,k.clipIntersection=b.clipIntersection,k.displacementMap=b.displacementMap,k.displacementScale=b.displacementScale,k.displacementBias=b.displacementBias,k.wireframeLinewidth=b.wireframeLinewidth,k.linewidth=b.linewidth,L.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let dt=i.properties.get(k);dt.light=L}return k}function I(D,b,L,J,k,st){if(D.visible===!1)return;if(D.layers.test(k)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&st===gr)&&(!D.frustumCulled||D.intersectsFrustum(n))){D.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,D.matrixWorld);let bt=t.update(D),ft=D.material;if(Array.isArray(ft)){let Ot=bt.groups;for(let xt=0,wt=Ot.length;xt<wt;xt++){let vt=Ot[xt],Dt=ft[vt.materialIndex];if(Dt&&Dt.visible){let qt=F(D,Dt,J,st);D.onBeforeShadow(i,D,b,L,bt,qt,vt),i.renderBufferDirect(L,null,bt,qt,D,vt),D.onAfterShadow(i,D,b,L,bt,qt,vt)}}}else if(ft.visible){let Ot=F(D,ft,J,st);D.onBeforeShadow(i,D,b,L,bt,Ot,null),i.renderBufferDirect(L,null,bt,Ot,D,null),D.onAfterShadow(i,D,b,L,bt,Ot,null)}}let et=D.children;for(let bt=0,ft=et.length;bt<ft;bt++)I(et[bt],b,L,J,k,st)}function O(D){D.target.removeEventListener("dispose",O);for(let L in c){let J=c[L],k=D.target.uuid;k in J&&(J[k].dispose(),delete J[k])}}}function T1(i,t){function e(){let $=!1,St=new fn,Gt=null,Jt=new fn(0,0,0,0);return{setMask:function(se){Gt!==se&&!$&&(i.colorMask(se,se,se,se),Gt=se)},setLocked:function(se){$=se},setClear:function(se,ge,Ie,jt,ke){ke===!0&&(se*=jt,ge*=jt,Ie*=jt),St.set(se,ge,Ie,jt),Jt.equals(St)===!1&&(i.clearColor(se,ge,Ie,jt),Jt.copy(St))},reset:function(){$=!1,Gt=null,Jt.set(-1,0,0,0)}}}function n(){let $=!1,St=!1,Gt=null,Jt=null,se=null;return{setReversed:function(ge){if(St!==ge){let Ie=t.get("EXT_clip_control");ge?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),St=ge;let jt=se;se=null,this.setClear(jt)}},getReversed:function(){return St},setTest:function(ge){ge?$t(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(ge){Gt!==ge&&!$&&(i.depthMask(ge),Gt=ge)},setFunc:function(ge){if(St&&(ge=bd[ge]),Jt!==ge){switch(ge){case wa:i.depthFunc(i.NEVER);break;case Sa:i.depthFunc(i.ALWAYS);break;case ba:i.depthFunc(i.LESS);break;case or:i.depthFunc(i.LEQUAL);break;case Aa:i.depthFunc(i.EQUAL);break;case Ea:i.depthFunc(i.GEQUAL);break;case Ta:i.depthFunc(i.GREATER);break;case Ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Jt=ge}},setLocked:function(ge){$=ge},setClear:function(ge){se!==ge&&(se=ge,St&&(ge=1-ge),i.clearDepth(ge))},reset:function(){$=!1,Gt=null,Jt=null,se=null,St=!1}}}function s(){let $=!1,St=null,Gt=null,Jt=null,se=null,ge=null,Ie=null,jt=null,ke=null;return{setTest:function(Ae){$||(Ae?$t(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(Ae){St!==Ae&&!$&&(i.stencilMask(Ae),St=Ae)},setFunc:function(Ae,fe,Xe){(Gt!==Ae||Jt!==fe||se!==Xe)&&(i.stencilFunc(Ae,fe,Xe),Gt=Ae,Jt=fe,se=Xe)},setOp:function(Ae,fe,Xe){(ge!==Ae||Ie!==fe||jt!==Xe)&&(i.stencilOp(Ae,fe,Xe),ge=Ae,Ie=fe,jt=Xe)},setLocked:function(Ae){$=Ae},setClear:function(Ae){ke!==Ae&&(i.clearStencil(Ae),ke=Ae)},reset:function(){$=!1,St=null,Gt=null,Jt=null,se=null,ge=null,Ie=null,jt=null,ke=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,u={},f={},g={},x=new WeakMap,y=[],R=null,m=!1,v=null,P=null,F=null,I=null,O=null,D=null,b=null,L=new Fe(0,0,0),J=0,k=!1,st=null,dt=null,et=null,bt=null,ft=null,Ot=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),xt=!1,wt=0,vt=i.getParameter(i.VERSION);vt.indexOf("WebGL")!==-1?(wt=parseFloat(/^WebGL (\d)/.exec(vt)[1]),xt=wt>=1):vt.indexOf("OpenGL ES")!==-1&&(wt=parseFloat(/^OpenGL ES (\d)/.exec(vt)[1]),xt=wt>=2);let Dt=null,qt={},Kt=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),Ut=new fn().fromArray(Kt),ne=new fn().fromArray(pe);function he($,St,Gt,Jt){let se=new Uint8Array(4),ge=i.createTexture();i.bindTexture($,ge),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<Gt;Ie++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,Jt,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(St+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return ge}let _e={};_e[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$t(i.DEPTH_TEST),o.setFunc(or),ot(!1),ht(Kc),$t(i.CULL_FACE),K(Ls);function $t($){u[$]!==!0&&(i.enable($),u[$]=!0)}function ye($){u[$]!==!1&&(i.disable($),u[$]=!1)}function Le($,St){return $===i.FRAMEBUFFER?g[i.DRAW_FRAMEBUFFER]===St&&g[i.READ_FRAMEBUFFER]===St?!1:(i.bindFramebuffer(i.FRAMEBUFFER,St),g[i.DRAW_FRAMEBUFFER]=St,g[i.READ_FRAMEBUFFER]=St,!0):g[$]===St?!1:(i.bindFramebuffer($,St),g[$]=St,!0)}function le($){return $===i.FRAMEBUFFER&&($=i.DRAW_FRAMEBUFFER),g[$]||null}function G($,St){let Gt=y,Jt=!1;if($){Gt=x.get(St),Gt===void 0&&(Gt=[],x.set(St,Gt));let se=$.textures;if(Gt.length!==se.length||Gt[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,Ie=se.length;ge<Ie;ge++)Gt[ge]=i.COLOR_ATTACHMENT0+ge;Gt.length=se.length,Jt=!0}}else Gt[0]!==i.BACK&&(Gt[0]=i.BACK,Jt=!0);Jt&&i.drawBuffers(Gt)}function At($){return R!==$?(i.useProgram($),R=$,!0):!1}let it={[Ds]:i.FUNC_ADD,[Yu]:i.FUNC_SUBTRACT,[Zu]:i.FUNC_REVERSE_SUBTRACT};it[Ju]=i.MIN,it[$u]=i.MAX;let mt={[Ku]:i.ZERO,[ju]:i.ONE,[Qu]:i.SRC_COLOR,[th]:i.SRC_ALPHA,[rd]:i.SRC_ALPHA_SATURATE,[id]:i.DST_COLOR,[ed]:i.DST_ALPHA,[td]:i.ONE_MINUS_SRC_COLOR,[eh]:i.ONE_MINUS_SRC_ALPHA,[sd]:i.ONE_MINUS_DST_COLOR,[nd]:i.ONE_MINUS_DST_ALPHA,[od]:i.CONSTANT_COLOR,[ad]:i.ONE_MINUS_CONSTANT_COLOR,[ld]:i.CONSTANT_ALPHA,[cd]:i.ONE_MINUS_CONSTANT_ALPHA};function K($,St,Gt,Jt,se,ge,Ie,jt,ke,Ae){if($===Ls){m===!0&&(ye(i.BLEND),m=!1);return}if(m===!1&&($t(i.BLEND),m=!0),$!==qu){if($!==v||Ae!==k){if((P!==Ds||O!==Ds)&&(i.blendEquation(i.FUNC_ADD),P=Ds,O=Ds),Ae)switch($){case xr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zn:i.blendFunc(i.ONE,i.ONE);break;case jc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Oe("WebGLState: Invalid blending: ",$);break}else switch($){case xr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jc:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qc:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",$);break}F=null,I=null,D=null,b=null,L.set(0,0,0),J=0,v=$,k=Ae}return}se=se||St,ge=ge||Gt,Ie=Ie||Jt,(St!==P||se!==O)&&(i.blendEquationSeparate(it[St],it[se]),P=St,O=se),(Gt!==F||Jt!==I||ge!==D||Ie!==b)&&(i.blendFuncSeparate(mt[Gt],mt[Jt],mt[ge],mt[Ie]),F=Gt,I=Jt,D=ge,b=Ie),(jt.equals(L)===!1||ke!==J)&&(i.blendColor(jt.r,jt.g,jt.b,ke),L.copy(jt),J=ke),v=$,k=!1}function pt($,St){$.side===Be?ye(i.CULL_FACE):$t(i.CULL_FACE);let Gt=$.side===kn;St&&(Gt=!Gt),ot(Gt),$.blending===xr&&$.transparent===!1?K(Ls):K($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),o.setFunc($.depthFunc),o.setTest($.depthTest),o.setMask($.depthWrite),r.setMask($.colorWrite);let Jt=$.stencilWrite;a.setTest(Jt),Jt&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Rt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?$t(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot($){st!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),st=$)}function ht($){$!==Gu?($t(i.CULL_FACE),$!==dt&&($===Kc?i.cullFace(i.BACK):$===Wu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),dt=$}function _t($){$!==et&&(xt&&i.lineWidth($),et=$)}function Rt($,St,Gt){$?($t(i.POLYGON_OFFSET_FILL),(bt!==St||ft!==Gt)&&(bt=St,ft=Gt,o.getReversed()&&(St=-St,Gt=-Gt),i.polygonOffset(St,Gt))):ye(i.POLYGON_OFFSET_FILL)}function Tt($){$?$t(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function d($){$===void 0&&($=i.TEXTURE0+Ot-1),Dt!==$&&(i.activeTexture($),Dt=$)}function p($,St,Gt){Gt===void 0&&(Dt===null?Gt=i.TEXTURE0+Ot-1:Gt=Dt);let Jt=qt[Gt];Jt===void 0&&(Jt={type:void 0,texture:void 0},qt[Gt]=Jt),(Jt.type!==$||Jt.texture!==St)&&(Dt!==Gt&&(i.activeTexture(Gt),Dt=Gt),i.bindTexture($,St||_e[$]),Jt.type=$,Jt.texture=St)}function X(){let $=qt[Dt];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function C(){try{i.compressedTexImage2D(...arguments)}catch($){Oe("WebGLState:",$)}}function V(){try{i.compressedTexImage3D(...arguments)}catch($){Oe("WebGLState:",$)}}function B(){try{i.texSubImage2D(...arguments)}catch($){Oe("WebGLState:",$)}}function at(){try{i.texSubImage3D(...arguments)}catch($){Oe("WebGLState:",$)}}function ut(){try{i.compressedTexSubImage2D(...arguments)}catch($){Oe("WebGLState:",$)}}function Et(){try{i.compressedTexSubImage3D(...arguments)}catch($){Oe("WebGLState:",$)}}function U(){try{i.texStorage2D(...arguments)}catch($){Oe("WebGLState:",$)}}function T(){try{i.texStorage3D(...arguments)}catch($){Oe("WebGLState:",$)}}function tt(){try{i.texImage2D(...arguments)}catch($){Oe("WebGLState:",$)}}function nt(){try{i.texImage3D(...arguments)}catch($){Oe("WebGLState:",$)}}function yt($){return f[$]!==void 0?f[$]:i.getParameter($)}function ct($,St){f[$]!==St&&(i.pixelStorei($,St),f[$]=St)}function gt($){Ut.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),Ut.copy($))}function Mt($){ne.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),ne.copy($))}function zt($,St){let Gt=c.get(St);Gt===void 0&&(Gt=new WeakMap,c.set(St,Gt));let Jt=Gt.get($);Jt===void 0&&(Jt=i.getUniformBlockIndex(St,$.name),i.uniformBlockBinding(St,Jt,Jt),Gt.set($,Jt))}function Zt($,St,Gt){let se=c.get(St).get($);l[se]!==Gt&&(i.bindBufferBase(i.UNIFORM_BUFFER,se,Gt),l[se]=Gt)}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},Dt=null,qt={},g={},l={},x=new WeakMap,y=[],R=null,m=!1,v=null,P=null,F=null,I=null,O=null,D=null,b=null,L=new Fe(0,0,0),J=0,k=!1,st=null,dt=null,et=null,bt=null,ft=null,Ut.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:$t,disable:ye,bindFramebuffer:Le,getBoundFramebuffer:le,drawBuffers:G,useProgram:At,setBlending:K,setMaterial:pt,setFlipSided:ot,setCullFace:ht,setLineWidth:_t,setPolygonOffset:Rt,setScissorTest:Tt,activeTexture:d,bindTexture:p,unbindTexture:X,compressedTexImage2D:C,compressedTexImage3D:V,texImage2D:tt,texImage3D:nt,pixelStorei:ct,getParameter:yt,updateUBOMapping:zt,uniformBlockBinding:Zt,texStorage2D:U,texStorage3D:T,texSubImage2D:B,texSubImage3D:at,compressedTexSubImage2D:ut,compressedTexSubImage3D:Et,scissor:gt,viewport:Mt,reset:ce}}function C1(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,u=new WeakMap,f=new Set,g,x=new WeakMap,y=new Set,R=new FinalizationRegistry(U=>y.delete(U)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(U,T){return m?new OffscreenCanvas(U,T):Gr("canvas")}function P(U,T,tt){let nt=1,yt=Et(U);if((yt.width>tt||yt.height>tt)&&(nt=tt/Math.max(yt.width,yt.height)),nt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let ct=Math.floor(nt*yt.width),gt=Math.floor(nt*yt.height);g===void 0&&(g=v(ct,gt));let Mt=T?v(ct,gt):g;return Mt.width=ct,Mt.height=gt,Mt.getContext("2d").drawImage(U,0,0,ct,gt),Ue("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ct+"x"+gt+")."),Mt}else return"data"in U&&Ue("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),U;return U}function F(U){return U.generateMipmaps}function I(U){i.generateMipmap(U)}function O(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(U,T,tt,nt,yt,ct=!1){if(U!==null){if(i[U]!==void 0)return i[U];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let gt;nt&&(gt=t.get("EXT_texture_norm16"),gt||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Mt=T;if(T===i.RED&&(tt===i.FLOAT&&(Mt=i.R32F),tt===i.HALF_FLOAT&&(Mt=i.R16F),tt===i.UNSIGNED_BYTE&&(Mt=i.R8),tt===i.UNSIGNED_SHORT&&gt&&(Mt=gt.R16_EXT),tt===i.SHORT&&gt&&(Mt=gt.R16_SNORM_EXT)),T===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(Mt=i.R8UI),tt===i.UNSIGNED_SHORT&&(Mt=i.R16UI),tt===i.UNSIGNED_INT&&(Mt=i.R32UI),tt===i.BYTE&&(Mt=i.R8I),tt===i.SHORT&&(Mt=i.R16I),tt===i.INT&&(Mt=i.R32I)),T===i.RG&&(tt===i.FLOAT&&(Mt=i.RG32F),tt===i.HALF_FLOAT&&(Mt=i.RG16F),tt===i.UNSIGNED_BYTE&&(Mt=i.RG8),tt===i.UNSIGNED_SHORT&&gt&&(Mt=gt.RG16_EXT),tt===i.SHORT&&gt&&(Mt=gt.RG16_SNORM_EXT)),T===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(Mt=i.RG8UI),tt===i.UNSIGNED_SHORT&&(Mt=i.RG16UI),tt===i.UNSIGNED_INT&&(Mt=i.RG32UI),tt===i.BYTE&&(Mt=i.RG8I),tt===i.SHORT&&(Mt=i.RG16I),tt===i.INT&&(Mt=i.RG32I)),T===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(Mt=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(Mt=i.RGB16UI),tt===i.UNSIGNED_INT&&(Mt=i.RGB32UI),tt===i.BYTE&&(Mt=i.RGB8I),tt===i.SHORT&&(Mt=i.RGB16I),tt===i.INT&&(Mt=i.RGB32I)),T===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(Mt=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(Mt=i.RGBA16UI),tt===i.UNSIGNED_INT&&(Mt=i.RGBA32UI),tt===i.BYTE&&(Mt=i.RGBA8I),tt===i.SHORT&&(Mt=i.RGBA16I),tt===i.INT&&(Mt=i.RGBA32I)),T===i.RGB&&(tt===i.UNSIGNED_SHORT&&gt&&(Mt=gt.RGB16_EXT),tt===i.SHORT&&gt&&(Mt=gt.RGB16_SNORM_EXT),tt===i.UNSIGNED_INT_5_9_9_9_REV&&(Mt=i.RGB9_E5),tt===i.UNSIGNED_INT_10F_11F_11F_REV&&(Mt=i.R11F_G11F_B10F)),T===i.RGBA){let zt=ct?Hr:tn.getTransfer(yt);tt===i.FLOAT&&(Mt=i.RGBA32F),tt===i.HALF_FLOAT&&(Mt=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(Mt=zt===cn?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT&&gt&&(Mt=gt.RGBA16_EXT),tt===i.SHORT&&gt&&(Mt=gt.RGBA16_SNORM_EXT),tt===i.UNSIGNED_SHORT_4_4_4_4&&(Mt=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(Mt=i.RGB5_A1)}return(Mt===i.R16F||Mt===i.R32F||Mt===i.RG16F||Mt===i.RG32F||Mt===i.RGBA16F||Mt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Mt}function b(U,T){let tt;return U?T===null||T===Li||T===Ns?tt=i.DEPTH24_STENCIL8:T===Ai?tt=i.DEPTH32F_STENCIL8:T===yr&&(tt=i.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Li||T===Ns?tt=i.DEPTH_COMPONENT24:T===Ai?tt=i.DEPTH_COMPONENT32F:T===yr&&(tt=i.DEPTH_COMPONENT16),tt}function L(U,T){return F(U)===!0||U.isFramebufferTexture&&U.minFilter!==Dn&&U.minFilter!==Qn?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function J(U){let T=new WeakRef(U);n.get(U).__ref=T,y.add(T),R.register(U,T,T)}function k(U){let T=n.get(U).__ref;T!==void 0&&(y.delete(T),R.unregister(T))}function st(U){et(U.target)}function dt(U){bt(U.target)}function et(U){U.removeEventListener("dispose",st),k(U),Ot(U),U.isVideoTexture&&u.delete(U),U.isHTMLTexture&&f.delete(U)}function bt(U){U.removeEventListener("dispose",dt),k(U),wt(U)}function ft(){for(let U of y){let T=U.deref();T!==void 0&&(T.isRenderTarget===!0?bt(T):et(T))}y.clear(),f.clear()}function Ot(U){let T=n.get(U);if(T.__webglInit===void 0)return;let tt=U.source,nt=x.get(tt);if(nt){let yt=nt[T.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&xt(U),Object.keys(nt).length===0&&x.delete(tt)}n.remove(U)}function xt(U){let T=n.get(U);i.deleteTexture(T.__webglTexture);let tt=U.source,nt=x.get(tt);delete nt[T.__cacheKey],o.memory.textures--}function wt(U){let T=n.get(U);T.__depthDisposeCallback&&T.__depthDisposeCallback();let tt=U.depthTexture;if(tt&&tt.renderTarget===U&&et(tt),U.isWebGLCubeRenderTarget)for(let yt=0;yt<6;yt++){if(Array.isArray(T.__webglFramebuffer[yt]))for(let ct=0;ct<T.__webglFramebuffer[yt].length;ct++)i.deleteFramebuffer(T.__webglFramebuffer[yt][ct]);else i.deleteFramebuffer(T.__webglFramebuffer[yt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[yt])}else{if(Array.isArray(T.__webglFramebuffer))for(let yt=0;yt<T.__webglFramebuffer.length;yt++)i.deleteFramebuffer(T.__webglFramebuffer[yt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let yt=0;yt<T.__webglColorRenderbuffer.length;yt++)T.__webglColorRenderbuffer[yt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[yt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let nt=U.textures;for(let yt=0,ct=nt.length;yt<ct;yt++){let gt=n.get(nt[yt]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(nt[yt])}n.remove(U)}let vt=0;function Dt(){vt=0}function qt(){return vt}function Kt(U){vt=U}function pe(){let U=vt;return U>=s.maxTextures&&Ue("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+s.maxTextures),vt+=1,U}function Ut(U){let T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.mipmapsAutoUpdate),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function ne(U,T){let tt=n.get(U);if(U.isVideoTexture&&at(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&tt.__version!==U.version){let nt=U.image;if(nt===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{K(tt,U,T);return}}else U.isExternalTexture&&(tt.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+T)}function he(U,T){let tt=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){K(tt,U,T);return}else U.isExternalTexture&&(tt.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+T)}function _e(U,T){let tt=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){K(tt,U,T);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+T)}function $t(U,T){let tt=n.get(U);if(U.version>0&&tt.__version!==U.version){pt(tt,U,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+T)}let ye={[ds]:i.REPEAT,[Oi]:i.CLAMP_TO_EDGE,[Ra]:i.MIRRORED_REPEAT},Le={[Dn]:i.NEAREST,[dd]:i.NEAREST_MIPMAP_NEAREST,[bo]:i.NEAREST_MIPMAP_LINEAR,[Qn]:i.LINEAR,[hl]:i.LINEAR_MIPMAP_NEAREST,[ss]:i.LINEAR_MIPMAP_LINEAR},le={[gd]:i.NEVER,[xh]:i.ALWAYS,[xd]:i.LESS,[mh]:i.LEQUAL,[_d]:i.EQUAL,[gh]:i.GEQUAL,[yd]:i.GREATER,[vd]:i.NOTEQUAL};function G(U,T){if(T.type===Ai&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Qn||T.magFilter===hl||T.magFilter===bo||T.magFilter===ss||T.minFilter===Qn||T.minFilter===hl||T.minFilter===bo||T.minFilter===ss)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,ye[T.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,ye[T.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,ye[T.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Le[T.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Le[T.minFilter]),T.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,le[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Dn||T.minFilter!==bo&&T.minFilter!==ss||T.type===Ai&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(U,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function At(U,T){let tt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",st),J(T));let nt=T.source,yt=x.get(nt);yt===void 0&&(yt={},x.set(nt,yt));let ct=Ut(T);if(ct!==U.__cacheKey){yt[ct]===void 0&&(yt[ct]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,tt=!0),yt[ct].usedTimes++;let gt=yt[U.__cacheKey];gt!==void 0&&(yt[U.__cacheKey].usedTimes--,gt.usedTimes===0&&xt(T)),U.__cacheKey=ct,U.__webglTexture=yt[ct].texture}return tt}function it(U,T,tt){return Math.floor(Math.floor(U/tt)/T)}function mt(U,T,tt,nt){let ct=U.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,tt,nt,T.data);else{ct.sort((ce,$)=>ce.start-$.start);let gt=0;for(let ce=1;ce<ct.length;ce++){let $=ct[gt],St=ct[ce],Gt=$.start+$.count,Jt=it(St.start,T.width,4),se=it($.start,T.width,4);St.start<=Gt+1&&Jt===se&&it(St.start+St.count-1,T.width,4)===Jt?$.count=Math.max($.count,St.start+St.count-$.start):(++gt,ct[gt]=St)}ct.length=gt+1;let Mt=e.getParameter(i.UNPACK_ROW_LENGTH),zt=e.getParameter(i.UNPACK_SKIP_PIXELS),Zt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let ce=0,$=ct.length;ce<$;ce++){let St=ct[ce],Gt=Math.floor(St.start/4),Jt=Math.ceil(St.count/4),se=Gt%T.width,ge=Math.floor(Gt/T.width),Ie=Jt,jt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,se),e.pixelStorei(i.UNPACK_SKIP_ROWS,ge),e.texSubImage2D(i.TEXTURE_2D,0,se,ge,Ie,jt,tt,nt,T.data)}U.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Mt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,zt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Zt)}}function K(U,T,tt){let nt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(nt=i.TEXTURE_3D);let yt=At(U,T),ct=T.source;e.bindTexture(nt,U.__webglTexture,i.TEXTURE0+tt);let gt=n.get(ct);if(ct.version!==gt.__version||yt===!0){if(e.activeTexture(i.TEXTURE0+tt),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let jt=tn.getPrimaries(tn.workingColorSpace),ke=T.colorSpace===os?null:tn.getPrimaries(T.colorSpace),Ae=T.colorSpace===os||jt===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment);let zt=P(T.image,!1,s.maxTextureSize);zt=ut(T,zt);let Zt=r.convert(T.format,T.colorSpace),ce=r.convert(T.type),$=D(T.internalFormat,Zt,ce,T.normalized,T.colorSpace,T.isVideoTexture);G(nt,T);let St,Gt=T.mipmaps,Jt=T.isVideoTexture!==!0,se=gt.__version===void 0||yt===!0,ge=ct.dataReady,Ie=L(T,zt);if(T.isDepthTexture)$=b(T.format===rs,T.type),se&&(Jt?e.texStorage2D(i.TEXTURE_2D,1,$,zt.width,zt.height):e.texImage2D(i.TEXTURE_2D,0,$,zt.width,zt.height,0,Zt,ce,null));else if(T.isDataTexture)if(Gt.length>0){Jt&&se&&e.texStorage2D(i.TEXTURE_2D,Ie,$,Gt[0].width,Gt[0].height);for(let jt=0,ke=Gt.length;jt<ke;jt++)St=Gt[jt],Jt?ge&&e.texSubImage2D(i.TEXTURE_2D,jt,0,0,St.width,St.height,Zt,ce,St.data):e.texImage2D(i.TEXTURE_2D,jt,$,St.width,St.height,0,Zt,ce,St.data);T.generateMipmaps=!1}else Jt?(se&&e.texStorage2D(i.TEXTURE_2D,Ie,$,zt.width,zt.height),ge&&mt(T,zt,Zt,ce)):e.texImage2D(i.TEXTURE_2D,0,$,zt.width,zt.height,0,Zt,ce,zt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Jt&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,$,Gt[0].width,Gt[0].height,zt.depth);for(let jt=0,ke=Gt.length;jt<ke;jt++)if(St=Gt[jt],T.format!==zi)if(Zt!==null)if(Jt){if(ge)if(T.layerUpdates.size>0){let Ae=bh(St.width,St.height,T.format,T.type);for(let fe of T.layerUpdates){let Xe=St.data.subarray(fe*Ae/St.data.BYTES_PER_ELEMENT,(fe+1)*Ae/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,jt,0,0,fe,St.width,St.height,1,Zt,Xe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,jt,0,0,0,St.width,St.height,zt.depth,Zt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,jt,$,St.width,St.height,zt.depth,0,St.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?ge&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,jt,0,0,0,St.width,St.height,zt.depth,Zt,ce,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,jt,$,St.width,St.height,zt.depth,0,Zt,ce,St.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Jt&&se&&e.texStorage2D(i.TEXTURE_2D,Ie,$,Gt[0].width,Gt[0].height);for(let jt=0,ke=Gt.length;jt<ke;jt++)St=Gt[jt],T.format!==zi?Zt!==null?Jt?ge&&e.compressedTexSubImage2D(i.TEXTURE_2D,jt,0,0,St.width,St.height,Zt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,jt,$,St.width,St.height,0,St.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?ge&&e.texSubImage2D(i.TEXTURE_2D,jt,0,0,St.width,St.height,Zt,ce,St.data):e.texImage2D(i.TEXTURE_2D,jt,$,St.width,St.height,0,Zt,ce,St.data)}else if(T.isDataArrayTexture)if(Jt){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,$,zt.width,zt.height,zt.depth),ge)if(T.layerUpdates.size>0){let jt=bh(zt.width,zt.height,T.format,T.type);for(let ke of T.layerUpdates){let Ae=zt.data.subarray(ke*jt/zt.data.BYTES_PER_ELEMENT,(ke+1)*jt/zt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ke,zt.width,zt.height,1,Zt,ce,Ae)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,zt.width,zt.height,zt.depth,Zt,ce,zt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$,zt.width,zt.height,zt.depth,0,Zt,ce,zt.data);else if(T.isData3DTexture)Jt?(se&&e.texStorage3D(i.TEXTURE_3D,Ie,$,zt.width,zt.height,zt.depth),ge&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,zt.width,zt.height,zt.depth,Zt,ce,zt.data)):e.texImage3D(i.TEXTURE_3D,0,$,zt.width,zt.height,zt.depth,0,Zt,ce,zt.data);else if(T.isFramebufferTexture){if(se)if(Jt)e.texStorage2D(i.TEXTURE_2D,Ie,$,zt.width,zt.height);else{let jt=zt.width,ke=zt.height;for(let Ae=0;Ae<Ie;Ae++)e.texImage2D(i.TEXTURE_2D,Ae,$,jt,ke,0,Zt,ce,null),jt>>=1,ke>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in i){let jt=i.canvas;if(jt.hasAttribute("layoutsubtree")||jt.setAttribute("layoutsubtree","true"),zt.parentNode!==jt){jt.appendChild(zt),f.add(T),jt.onpaint=ke=>{let Ae=ke.changedElements;for(let fe of f)Ae.includes(fe.image)&&(fe.needsUpdate=!0)},jt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,zt);else{let Ae=i.RGBA,fe=i.RGBA,Xe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ae,fe,Xe,zt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Gt.length>0){if(Jt&&se){let jt=Et(Gt[0]);e.texStorage2D(i.TEXTURE_2D,Ie,$,jt.width,jt.height)}for(let jt=0,ke=Gt.length;jt<ke;jt++)St=Gt[jt],Jt?ge&&e.texSubImage2D(i.TEXTURE_2D,jt,0,0,Zt,ce,St):e.texImage2D(i.TEXTURE_2D,jt,$,Zt,ce,St);T.generateMipmaps=!1}else if(Jt){if(se){let jt=Et(zt);e.texStorage2D(i.TEXTURE_2D,Ie,$,jt.width,jt.height)}ge&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Zt,ce,zt)}else e.texImage2D(i.TEXTURE_2D,0,$,Zt,ce,zt);F(T)&&T.mipmapsAutoUpdate===!0&&I(nt),gt.__version=ct.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function pt(U,T,tt){if(T.image.length!==6)return;let nt=At(U,T),yt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+tt);let ct=n.get(yt);if(yt.version!==ct.__version||nt===!0){e.activeTexture(i.TEXTURE0+tt);let gt=tn.getPrimaries(tn.workingColorSpace),Mt=T.colorSpace===os?null:tn.getPrimaries(T.colorSpace),zt=T.colorSpace===os||gt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let Zt=T.isCompressedTexture||T.image[0].isCompressedTexture,ce=T.image[0]&&T.image[0].isDataTexture,$=[];for(let fe=0;fe<6;fe++)!Zt&&!ce?$[fe]=P(T.image[fe],!0,s.maxCubemapSize):$[fe]=ce?T.image[fe].image:T.image[fe],$[fe]=ut(T,$[fe]);let St=$[0],Gt=r.convert(T.format,T.colorSpace),Jt=r.convert(T.type),se=D(T.internalFormat,Gt,Jt,T.normalized,T.colorSpace),ge=T.isVideoTexture!==!0,Ie=ct.__version===void 0||nt===!0,jt=yt.dataReady,ke=L(T,St);G(i.TEXTURE_CUBE_MAP,T);let Ae;if(T.isDepthTexture){if(se=b(T.format===rs,T.type),Ie)if(ge)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,se,St.width,St.height);else for(let fe=0;fe<6;fe++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,se,St.width,St.height,0,Gt,Jt,null)}else if(Zt){ge&&Ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ke,se,St.width,St.height);for(let fe=0;fe<6;fe++){Ae=$[fe].mipmaps;for(let Xe=0;Xe<Ae.length;Xe++){let pn=Ae[Xe];T.format!==zi?Gt!==null?ge?jt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe,0,0,pn.width,pn.height,Gt,pn.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe,se,pn.width,pn.height,0,pn.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ge?jt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe,0,0,pn.width,pn.height,Gt,Jt,pn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe,se,pn.width,pn.height,0,Gt,Jt,pn.data)}}}else{if(Ae=T.mipmaps,ge&&Ie){Ae.length>0&&ke++;let fe=Et($[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ke,se,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(ce){ge?jt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,$[fe].width,$[fe].height,Gt,Jt,$[fe].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,se,$[fe].width,$[fe].height,0,Gt,Jt,$[fe].data);for(let Xe=0;Xe<Ae.length;Xe++){let En=Ae[Xe].image[fe].image;ge?jt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe+1,0,0,En.width,En.height,Gt,Jt,En.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe+1,se,En.width,En.height,0,Gt,Jt,En.data)}}else{ge?jt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Gt,Jt,$[fe]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,se,Gt,Jt,$[fe]);for(let Xe=0;Xe<Ae.length;Xe++){let pn=Ae[Xe];ge?jt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe+1,0,0,Gt,Jt,pn.image[fe]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Xe+1,se,Gt,Jt,pn.image[fe])}}}F(T)&&T.mipmapsAutoUpdate===!0&&I(i.TEXTURE_CUBE_MAP),ct.__version=yt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ot(U,T,tt,nt,yt,ct){let gt=r.convert(tt.format,tt.colorSpace),Mt=r.convert(tt.type),zt=D(tt.internalFormat,gt,Mt,tt.normalized,tt.colorSpace),Zt=n.get(T),ce=n.get(tt);if(ce.__renderTarget=T,!Zt.__hasExternalTextures){let $=Math.max(1,T.width>>ct),St=Math.max(1,T.height>>ct);yt===i.TEXTURE_3D||yt===i.TEXTURE_2D_ARRAY?e.texImage3D(yt,ct,zt,$,St,T.depth,0,gt,Mt,null):e.texImage2D(yt,ct,zt,$,St,0,gt,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,U),B(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,yt,ce.__webglTexture,0,V(T)):(yt===i.TEXTURE_2D||yt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,yt,ce.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(U,T,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,U),T.depthBuffer){let nt=T.depthTexture,yt=nt&&nt.isDepthTexture?nt.type:null,ct=b(T.stencilBuffer,yt),gt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;B(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,V(T),ct,T.width,T.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,V(T),ct,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ct,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,U)}else{let nt=T.textures;for(let yt=0;yt<nt.length;yt++){let ct=nt[yt],gt=r.convert(ct.format,ct.colorSpace),Mt=r.convert(ct.type),zt=D(ct.internalFormat,gt,Mt,ct.normalized,ct.colorSpace);B(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,V(T),zt,T.width,T.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,V(T),zt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,zt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(U,T,tt){let nt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let yt=n.get(T.depthTexture);yt.__renderTarget=T;let ct=nt?T.depthTexture.image[0]:T.depthTexture.image;(!yt.__webglTexture||ct.width!==T.width||ct.height!==T.height)&&(ct.width=T.width,ct.height=T.height,T.depthTexture.needsUpdate=!0),nt?$t(T.depthTexture,0):ne(T.depthTexture,0);let gt=yt.__webglTexture,Mt=V(T),zt=nt?i.TEXTURE_CUBE_MAP_POSITIVE_X+tt:i.TEXTURE_2D,Zt=T.depthTexture.format===rs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===ts)B(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Zt,zt,gt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,Zt,zt,gt,0);else if(T.depthTexture.format===rs)B(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Zt,zt,gt,0,Mt):i.framebufferTexture2D(i.FRAMEBUFFER,Zt,zt,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Rt(U){let T=n.get(U),tt=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){let nt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),nt){let yt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,nt.removeEventListener("dispose",yt)};nt.addEventListener("dispose",yt),T.__depthDisposeCallback=yt}T.__boundDepthTexture=nt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer)if(tt)for(let nt=0;nt<6;nt++)_t(T.__webglFramebuffer[nt],U,nt);else U.texture.mipmaps.length>0?_t(T.__webglFramebuffer[0],U,0):_t(T.__webglFramebuffer,U,0);else if(tt){T.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[nt]),T.__webglDepthbuffer[nt]===void 0)T.__webglDepthbuffer[nt]=i.createRenderbuffer(),ht(T.__webglDepthbuffer[nt],U,!1);else{let yt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,ct)}}else if(U.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ht(T.__webglDepthbuffer,U,!1);else{let yt=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(U,T,tt){let nt=n.get(U);T!==void 0&&ot(nt.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&Rt(U)}function d(U){let T=U.texture,tt=n.get(U),nt=n.get(T);U.addEventListener("dispose",dt),J(U);let yt=U.textures,ct=U.isWebGLCubeRenderTarget===!0,gt=yt.length>1;if(gt||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=T.version,o.memory.textures++),ct){tt.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(T.mipmaps.length>0){tt.__webglFramebuffer[Mt]=[];for(let zt=0;zt<T.mipmaps.length;zt++)tt.__webglFramebuffer[Mt][zt]=i.createFramebuffer()}else tt.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Mt=0;Mt<T.mipmaps.length;Mt++)tt.__webglFramebuffer[Mt]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(gt)for(let Mt=0,zt=yt.length;Mt<zt;Mt++){let Zt=n.get(yt[Mt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&B(U)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Mt=0;Mt<yt.length;Mt++){let zt=yt[Mt];tt.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[Mt]);let Zt=r.convert(zt.format,zt.colorSpace),ce=r.convert(zt.type),$=D(zt.internalFormat,Zt,ce,zt.normalized,zt.colorSpace,U.isXRRenderTarget===!0),St=V(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,$,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,tt.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(tt.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),G(i.TEXTURE_CUBE_MAP,T);for(let Mt=0;Mt<6;Mt++)if(T.mipmaps.length>0)for(let zt=0;zt<T.mipmaps.length;zt++)ot(tt.__webglFramebuffer[Mt][zt],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,zt);else ot(tt.__webglFramebuffer[Mt],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);F(T)?I(i.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let Mt=0,zt=yt.length;Mt<zt;Mt++){let Zt=yt[Mt],ce=n.get(Zt),$=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&($=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,ce.__webglTexture),G($,Zt),ot(tt.__webglFramebuffer,U,Zt,i.COLOR_ATTACHMENT0+Mt,$,0),F(Zt)&&I($)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Mt=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,nt.__webglTexture),G(Mt,T),T.mipmaps.length>0)for(let zt=0;zt<T.mipmaps.length;zt++)ot(tt.__webglFramebuffer[zt],U,T,i.COLOR_ATTACHMENT0,Mt,zt);else ot(tt.__webglFramebuffer,U,T,i.COLOR_ATTACHMENT0,Mt,0);F(T)?I(Mt):T.mipmaps.length>0&&i.texParameteri(Mt,i.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}U.depthBuffer&&Rt(U)}function p(U){let T=U.textures;for(let tt=0,nt=T.length;tt<nt;tt++){let yt=T[tt];if(F(yt)&&yt.mipmapsAutoUpdate===!0){let ct=O(U),gt=n.get(yt).__webglTexture;e.bindTexture(ct,gt),I(ct),e.unbindTexture()}}}let X=[];function C(U){if(U.samples>0){if(B(U)===!1){let T=U.textures,tt=U.width,nt=U.height,yt=i.COLOR_BUFFER_BIT,ct=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(U),Mt=T.length>1;if(Mt)for(let Zt=0;Zt<T.length;Zt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Zt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Zt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),U.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Zt=0;Zt<T.length;Zt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(yt|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(yt|=i.STENCIL_BUFFER_BIT)),Mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Zt]);let ce=n.get(T[Zt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,tt,nt,0,0,tt,nt,yt,i.NEAREST),l===!0&&(X.length=0,X.push(i.COLOR_ATTACHMENT0+Zt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&X.push(ct),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,X))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let Zt=0;Zt<T.length;Zt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Zt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Zt]);let ce=n.get(T[Zt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Zt,i.TEXTURE_2D,ce,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){let T=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function V(U){return Math.min(s.maxSamples,U.samples)}function B(U){let T=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function at(U){let T=o.render.frame;u.get(U)!==T&&(u.set(U,T),U.update())}function ut(U,T){let tt=U.colorSpace,nt=U.format,yt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||tt!==Vr&&tt!==os&&(tn.getTransfer(tt)===cn?(nt!==zi||yt!==ii)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",tt)),T}function Et(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=pe,this.resetTextureUnits=Dt,this.getTextureUnits=qt,this.setTextureUnits=Kt,this.setTexture2D=ne,this.setTexture2DArray=he,this.setTexture3D=_e,this.setTextureCube=$t,this.rebindTextures=Tt,this.setupRenderTarget=d,this.updateRenderTargetMipmap=p,this.updateMultisampleRenderTarget=C,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=B,this.dispose=ft}function R1(i,t){function e(n,s=os){let r,o=tn.getTransfer(s);if(n===ii)return i.UNSIGNED_BYTE;if(n===dl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ch)return i.BYTE;if(n===hh)return i.SHORT;if(n===yr)return i.UNSIGNED_SHORT;if(n===ul)return i.INT;if(n===Li)return i.UNSIGNED_INT;if(n===Ai)return i.FLOAT;if(n===Di)return i.HALF_FLOAT;if(n===fh)return i.ALPHA;if(n===ph)return i.RGB;if(n===zi)return i.RGBA;if(n===ts)return i.DEPTH_COMPONENT;if(n===rs)return i.DEPTH_STENCIL;if(n===pl)return i.RED;if(n===ml)return i.RED_INTEGER;if(n===ys)return i.RG;if(n===gl)return i.RG_INTEGER;if(n===xl)return i.RGBA_INTEGER;if(n===Ao||n===Eo||n===To||n===Co)if(o===cn)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_l||n===yl||n===vl||n===Ml)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wl||n===Sl||n===bl||n===Al||n===El||n===Ro||n===Tl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wl||n===Sl)return o===cn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bl)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Al)return r.COMPRESSED_R11_EAC;if(n===El)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ro)return r.COMPRESSED_RG11_EAC;if(n===Tl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Cl||n===Rl||n===Pl||n===Il||n===Fl||n===Ll||n===Dl||n===zl||n===Nl||n===Ul||n===Bl||n===Ol||n===kl||n===Vl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cl)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rl)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pl)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fl)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ll)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dl)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zl)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nl)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ul)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bl)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ol)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kl)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return o===cn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hl||n===Gl||n===Wl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Hl)return o===cn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xl||n===ql||n===Po||n===Yl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var P1=`
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

}`,Bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new io(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new bi({vertexShader:P1,fragmentShader:I1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ht(new xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oh=class extends Vi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,g=null,x=null,y=null,R=typeof XRWebGLBinding<"u",m=new Bh,v={},P=e.getContextAttributes(),F=null,I=null,O=[],D=[],b=new It,L=null,J=null,k=new Xn;k.viewport=new fn;let st=new Xn;st.viewport=new fn;let dt=[k,st],et=new rl,bt=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Ut){let ne=O[Ut];return ne===void 0&&(ne=new hr,O[Ut]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Ut){let ne=O[Ut];return ne===void 0&&(ne=new hr,O[Ut]=ne),ne.getGripSpace()},this.getHand=function(Ut){let ne=O[Ut];return ne===void 0&&(ne=new hr,O[Ut]=ne),ne.getHandSpace()};function Ot(Ut){let ne=D.indexOf(Ut.inputSource);if(ne===-1)return;let he=O[ne];he!==void 0&&(he.update(Ut.inputSource,Ut.frame,c||o),he.dispatchEvent({type:Ut.type,data:Ut.inputSource}))}function xt(){s.removeEventListener("select",Ot),s.removeEventListener("selectstart",Ot),s.removeEventListener("selectend",Ot),s.removeEventListener("squeeze",Ot),s.removeEventListener("squeezestart",Ot),s.removeEventListener("squeezeend",Ot),s.removeEventListener("end",xt),s.removeEventListener("inputsourceschange",wt);for(let Ut=0;Ut<O.length;Ut++){let ne=D[Ut];ne!==null&&(D[Ut]=null,O[Ut].disconnect(ne))}bt=null,ft=null,m.reset();for(let Ut in v)delete v[Ut];if(t.setRenderTarget(F),x=null,g=null,f=null,s=null,I=null,pe.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(b.width,b.height,!1),J!==null){let Ut=J.camera;Ut.fov=J.fov,Ut.zoom=J.zoom,Ut.updateProjectionMatrix(),J=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Ut){r=Ut,n.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Ut){a=Ut,n.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Ut){c=Ut},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return f===null&&R&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(Ut){if(s=Ut,s!==null){if(F=t.getRenderTarget(),s.addEventListener("select",Ot),s.addEventListener("selectstart",Ot),s.addEventListener("selectend",Ot),s.addEventListener("squeeze",Ot),s.addEventListener("squeezestart",Ot),s.addEventListener("squeezeend",Ot),s.addEventListener("end",xt),s.addEventListener("inputsourceschange",wt),P.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(b),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,_e=null,$t=null;P.depth&&($t=P.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,he=P.stencil?rs:ts,_e=P.stencil?Ns:Li);let ye={colorFormat:e.RGBA8,depthFormat:$t,scaleFactor:r};f=this.getBinding(),g=f.createProjectionLayer(ye),s.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),I=new oi(g.textureWidth,g.textureHeight,{format:zi,type:ii,depthTexture:new ns(g.textureWidth,g.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{let he={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:r};x=new XRWebGLLayer(s,e,he),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),I=new oi(x.framebufferWidth,x.framebufferHeight,{format:zi,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),pe.setContext(s),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function wt(Ut){for(let ne=0;ne<Ut.removed.length;ne++){let he=Ut.removed[ne],_e=D.indexOf(he);_e>=0&&(D[_e]=null,O[_e].disconnect(he))}for(let ne=0;ne<Ut.added.length;ne++){let he=Ut.added[ne],_e=D.indexOf(he);if(_e===-1){for(let ye=0;ye<O.length;ye++)if(ye>=D.length){D.push(he),_e=ye;break}else if(D[ye]===null){D[ye]=he,_e=ye;break}if(_e===-1)break}let $t=O[_e];$t&&$t.connect(he)}}function vt(Ut,ne){ne===null?Ut.matrixWorld.copy(Ut.matrix):Ut.matrixWorld.multiplyMatrices(ne.matrixWorld,Ut.matrix),Ut.matrixWorldInverse.copy(Ut.matrixWorld).invert()}this.updateCamera=function(Ut){if(s===null)return;let ne=Ut.near,he=Ut.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(he=m.depthFar)),et.near=st.near=k.near=ne,et.far=st.far=k.far=he,(bt!==et.near||ft!==et.far)&&(s.updateRenderState({depthNear:et.near,depthFar:et.far}),bt=et.near,ft=et.far),et.layers.mask=Ut.layers.mask|6,k.layers.mask=et.layers.mask&-5,st.layers.mask=et.layers.mask&-3;let _e=Ut.parent,$t=et.cameras;vt(et,_e);for(let ye=0;ye<$t.length;ye++)vt($t[ye],_e);et.projectionMatrix.copy(k.projectionMatrix),et.projectionMatrixInverse.copy(k.projectionMatrixInverse),J===null&&Ut.isPerspectiveCamera&&(J={camera:Ut,fov:Ut.fov,zoom:Ut.zoom}),Dt(Ut,et,_e)};function Dt(Ut,ne,he){he===null?Ut.matrix.copy(ne.matrixWorld):(Ut.matrix.copy(he.matrixWorld),Ut.matrix.invert(),Ut.matrix.multiply(ne.matrixWorld)),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.updateMatrixWorld(!0),Ut.projectionMatrix.copy(ne.projectionMatrix),Ut.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Ut.isPerspectiveCamera&&(Ut.fov=Ia*2*Math.atan(1/Ut.projectionMatrix.elements[5]),Ut.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(g===null&&x===null))return l},this.setFoveation=function(Ut){l=Ut,g!==null&&(g.fixedFoveation=Ut),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Ut)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(et)},this.getCameraTexture=function(Ut){return v[Ut]};let qt=null;function Kt(Ut,ne){if(u=ne.getViewerPose(c||o),y=ne,u!==null){let he=u.views;x!==null&&(t.setRenderTargetFramebuffer(I,x.framebuffer),t.setRenderTarget(I));let _e=!1;he.length!==et.cameras.length&&(et.cameras.length=0,_e=!0);for(let le=0;le<he.length;le++){let G=he[le],At=null;if(x!==null)At=x.getViewport(G);else{let mt=f.getViewSubImage(g,G);At=mt.viewport,le===0&&(t.setRenderTargetTextures(I,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(I))}let it=dt[le];it===void 0&&(it=new Xn,it.layers.enable(le),it.viewport=new fn,dt[le]=it),it.matrix.fromArray(G.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(G.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(At.x,At.y,At.width,At.height),le===0&&(et.matrix.copy(it.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),_e===!0&&et.cameras.push(it)}let $t=s.enabledFeatures;if($t&&$t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&R){f=n.getBinding();let le=f.getDepthInformation(he[0]);le&&le.isValid&&le.texture&&m.init(le,s.renderState)}if($t&&$t.includes("camera-access")&&R){t.state.unbindTexture(),f=n.getBinding();for(let le=0;le<he.length;le++){let G=he[le].camera;if(G){let At=v[G];At||(At=new io,v[G]=At);let it=f.getCameraImage(G);At.sourceTexture=it}}}}for(let he=0;he<O.length;he++){let _e=D[he],$t=O[he];_e!==null&&$t!==void 0&&$t.update(_e,ne,c||o)}qt&&qt(Ut,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),y=null}let pe=new rf;pe.setAnimationLoop(Kt),this.setAnimationLoop=function(Ut){qt=Ut},this.dispose=function(){}}},F1=new rn,mf=new We;mf.set(-1,0,0,0,1,0,0,0,1);function L1(i,t){function e(m,v){m.matrixAutoUpdate===!0&&m.updateMatrix(),v.value.copy(m.matrix)}function n(m,v){v.color.getRGB(m.fogColor.value,Mh(i)),v.isFog?(m.fogNear.value=v.near,m.fogFar.value=v.far):v.isFogExp2&&(m.fogDensity.value=v.density)}function s(m,v,P,F,I){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?r(m,v):v.isMeshLambertMaterial?(r(m,v),v.envMap&&(m.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(r(m,v),f(m,v)):v.isMeshPhongMaterial?(r(m,v),u(m,v),v.envMap&&(m.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(r(m,v),g(m,v),v.isMeshPhysicalMaterial&&x(m,v,I)):v.isMeshMatcapMaterial?(r(m,v),y(m,v)):v.isMeshDepthMaterial?r(m,v):v.isMeshDistanceMaterial?(r(m,v),R(m,v)):v.isMeshNormalMaterial?r(m,v):v.isLineBasicMaterial?(o(m,v),v.isLineDashedMaterial&&a(m,v)):v.isPointsMaterial?l(m,v,P,F):v.isSpriteMaterial?c(m,v):v.isShadowMaterial?(m.color.value.copy(v.color),m.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function r(m,v){m.opacity.value=v.opacity,v.color&&m.diffuse.value.copy(v.color),v.emissive&&m.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(m.map.value=v.map,e(v.map,m.mapTransform)),v.alphaMap&&(m.alphaMap.value=v.alphaMap,e(v.alphaMap,m.alphaMapTransform)),v.bumpMap&&(m.bumpMap.value=v.bumpMap,e(v.bumpMap,m.bumpMapTransform),m.bumpScale.value=v.bumpScale,v.side===kn&&(m.bumpScale.value*=-1)),v.normalMap&&(m.normalMap.value=v.normalMap,e(v.normalMap,m.normalMapTransform),m.normalScale.value.copy(v.normalScale),v.side===kn&&m.normalScale.value.negate()),v.displacementMap&&(m.displacementMap.value=v.displacementMap,e(v.displacementMap,m.displacementMapTransform),m.displacementScale.value=v.displacementScale,m.displacementBias.value=v.displacementBias),v.emissiveMap&&(m.emissiveMap.value=v.emissiveMap,e(v.emissiveMap,m.emissiveMapTransform)),v.specularMap&&(m.specularMap.value=v.specularMap,e(v.specularMap,m.specularMapTransform)),v.alphaTest>0&&(m.alphaTest.value=v.alphaTest);let P=t.get(v),F=P.envMap,I=P.envMapRotation;F&&(m.envMap.value=F,m.envMapRotation.value.setFromMatrix4(F1.makeRotationFromEuler(I)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(mf),m.reflectivity.value=v.reflectivity,m.ior.value=v.ior,m.refractionRatio.value=v.refractionRatio),v.lightMap&&(m.lightMap.value=v.lightMap,m.lightMapIntensity.value=v.lightMapIntensity,e(v.lightMap,m.lightMapTransform)),v.aoMap&&(m.aoMap.value=v.aoMap,m.aoMapIntensity.value=v.aoMapIntensity,e(v.aoMap,m.aoMapTransform))}function o(m,v){m.diffuse.value.copy(v.color),m.opacity.value=v.opacity,v.map&&(m.map.value=v.map,e(v.map,m.mapTransform))}function a(m,v){m.dashSize.value=v.dashSize,m.totalSize.value=v.dashSize+v.gapSize,m.scale.value=v.scale}function l(m,v,P,F){m.diffuse.value.copy(v.color),m.opacity.value=v.opacity,m.size.value=v.size*P,m.scale.value=F*.5,v.map&&(m.map.value=v.map,e(v.map,m.uvTransform)),v.alphaMap&&(m.alphaMap.value=v.alphaMap,e(v.alphaMap,m.alphaMapTransform)),v.alphaTest>0&&(m.alphaTest.value=v.alphaTest)}function c(m,v){m.diffuse.value.copy(v.color),m.opacity.value=v.opacity,m.rotation.value=v.rotation,v.map&&(m.map.value=v.map,e(v.map,m.mapTransform)),v.alphaMap&&(m.alphaMap.value=v.alphaMap,e(v.alphaMap,m.alphaMapTransform)),v.alphaTest>0&&(m.alphaTest.value=v.alphaTest)}function u(m,v){m.specular.value.copy(v.specular),m.shininess.value=Math.max(v.shininess,1e-4)}function f(m,v){v.gradientMap&&(m.gradientMap.value=v.gradientMap)}function g(m,v){m.metalness.value=v.metalness,v.metalnessMap&&(m.metalnessMap.value=v.metalnessMap,e(v.metalnessMap,m.metalnessMapTransform)),m.roughness.value=v.roughness,v.roughnessMap&&(m.roughnessMap.value=v.roughnessMap,e(v.roughnessMap,m.roughnessMapTransform)),v.envMap&&(m.envMapIntensity.value=v.envMapIntensity)}function x(m,v,P){m.ior.value=v.ior,v.diffuseRoughness>0&&(m.diffuseRoughness.value=v.diffuseRoughness,v.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=v.diffuseRoughnessMap,e(v.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),v.sheen>0&&(m.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),m.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(m.sheenColorMap.value=v.sheenColorMap,e(v.sheenColorMap,m.sheenColorMapTransform)),v.sheenRoughnessMap&&(m.sheenRoughnessMap.value=v.sheenRoughnessMap,e(v.sheenRoughnessMap,m.sheenRoughnessMapTransform))),v.clearcoat>0&&(m.clearcoat.value=v.clearcoat,m.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(m.clearcoatMap.value=v.clearcoatMap,e(v.clearcoatMap,m.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,e(v.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(m.clearcoatNormalMap.value=v.clearcoatNormalMap,e(v.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===kn&&m.clearcoatNormalScale.value.negate())),v.dispersion>0&&(m.dispersion.value=v.dispersion),v.retroreflectivity>0&&(m.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(m.iridescence.value=v.iridescence,m.iridescenceIOR.value=v.iridescenceIOR,m.iridescenceThicknessMinimum.value=v.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=v.iridescenceThicknessMaximum,v.iridescenceMap&&(m.iridescenceMap.value=v.iridescenceMap,e(v.iridescenceMap,m.iridescenceMapTransform)),v.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=v.iridescenceThicknessMap,e(v.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),v.transmission>0&&(m.transmission.value=v.transmission,m.transmissionSamplerMap.value=P.texture,m.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(m.transmissionMap.value=v.transmissionMap,e(v.transmissionMap,m.transmissionMapTransform)),m.thickness.value=v.thickness,v.thicknessMap&&(m.thicknessMap.value=v.thicknessMap,e(v.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=v.attenuationDistance,m.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(m.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(m.anisotropyMap.value=v.anisotropyMap,e(v.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=v.specularIntensity,m.specularColor.value.copy(v.specularColor),v.specularColorMap&&(m.specularColorMap.value=v.specularColorMap,e(v.specularColorMap,m.specularColorMapTransform)),v.specularIntensityMap&&(m.specularIntensityMap.value=v.specularIntensityMap,e(v.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,v){v.matcap&&(m.matcap.value=v.matcap)}function R(m,v){let P=t.get(v).light;m.referencePosition.value.setFromMatrixPosition(P.matrixWorld),m.nearDistance.value=P.shadow.camera.near,m.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function D1(i,t,e,n){let s={},r={};function o(P,F){let I=F.program;n.uniformBlockBinding(P,I,s[P.id])}function a(P,F){let I=s[P.id];I===void 0&&(y(P),I=l(P),s[P.id]=I,P.addEventListener("dispose",m));let O=F.program;n.updateUBOMapping(P,O);let D=t.render.frame;r[P.id]!==D&&(c(P),r[P.id]=D)}function l(P){let F=i.createBuffer(),I=P.__size,O=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,F),i.bufferData(i.UNIFORM_BUFFER,I,O),i.bindBuffer(i.UNIFORM_BUFFER,null),F}function c(P){let F=s[P.id],I=P.uniforms,O=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,F);for(let D=0,b=I.length;D<b;D++){let L=I[D];if(Array.isArray(L))for(let J=0,k=L.length;J<k;J++)u(L[J],D,J,O);else u(L,D,0,O)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(P,F,I,O){if(g(P,F,I,O)===!0){let D=P.__offset,b=P.value;if(Array.isArray(b)){let L=0;for(let J=0;J<b.length;J++){let k=b[J],st=R(k,!0);f(k,P.__data,L),L+=st.storage/Float32Array.BYTES_PER_ELEMENT}}else f(b,P.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,D,P.__data)}}function f(P,F,I){typeof P=="number"||typeof P=="boolean"?F[I]=P:P.isMatrix3?(F[I]=P.elements[0],F[I+1]=P.elements[1],F[I+2]=P.elements[2],F[I+3]=0,F[I+4]=P.elements[3],F[I+5]=P.elements[4],F[I+6]=P.elements[5],F[I+7]=0,F[I+8]=P.elements[6],F[I+9]=P.elements[7],F[I+10]=P.elements[8],F[I+11]=0):ArrayBuffer.isView(P)?F.set(P.subarray(0,F.length-I),I):P.toArray(F,I)}function g(P,F,I,O){let D=P.value,b=F+"_"+I;if(Array.isArray(D)){O[b]===void 0&&(O[b]=[]);let L=O[b],J=!1;for(let k=0;k<D.length;k++)x(D[k],L,k)===!0&&(J=!0);return J}return x(D,O,b)}function x(P,F,I){if(F[I]===void 0)return typeof P=="number"||typeof P=="boolean"?F[I]=P:ArrayBuffer.isView(P)?F[I]=P.slice():F[I]=P.clone(),!0;{let O=F[I];if(typeof P=="number"||typeof P=="boolean"){if(O!==P)return F[I]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(O.equals(P)===!1)return O.copy(P),!0}}return!1}function y(P){let F=P.uniforms,I=0,O=16;for(let b=0,L=F.length;b<L;b++){let J=Array.isArray(F[b])?F[b]:[F[b]];for(let k=0,st=J.length;k<st;k++){let dt=J[k],et=Array.isArray(dt.value)?dt.value:[dt.value],bt=Array.isArray(F[b])||Array.isArray(dt.value),ft=I;for(let xt=0,wt=et.length;xt<wt;xt++){let vt=et[xt],Dt=R(vt,bt),qt=I%O,Kt=qt%Dt.boundary,pe=qt+Kt;I+=Kt,pe!==0&&O-pe<Dt.storage&&(I+=O-pe),xt===0&&(ft=I),I+=Dt.storage}let Ot=dt.type==="int"?Int32Array:dt.type==="uint"?Uint32Array:Float32Array;dt.__data=new Ot((I-ft)/Float32Array.BYTES_PER_ELEMENT),dt.__offset=ft}}let D=I%O;return D>0&&(I+=O-D),P.__size=I,P.__cache={},this}function R(P,F){let I={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(I.boundary=4,I.storage=4):P.isVector2?(I.boundary=8,I.storage=8):P.isVector3||P.isColor?(I.boundary=16,I.storage=12):P.isVector4?(I.boundary=16,I.storage=16):P.isMatrix3?(I.boundary=16,I.storage=48):P.isMatrix4?(I.boundary=16,I.storage=64):P.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(P)?(I.boundary=16,I.storage=P.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",P),F===!0&&(I.boundary=16,I.storage=Math.ceil(I.storage/16)*16),I}function m(P){let F=P.target;F.removeEventListener("dispose",m),i.deleteBuffer(s[F.id]),delete s[F.id],delete r[F.id]}function v(){for(let P in s)i.deleteBuffer(s[P]);s={},r={}}return{bind:o,update:a,dispose:v}}var z1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xi=null;function N1(){return Xi===null&&(Xi=new jr(z1,16,16,ys,Di),Xi.name="DFG_LUT",Xi.minFilter=Qn,Xi.magFilter=Qn,Xi.wrapS=Oi,Xi.wrapT=Oi,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}var jl=class{constructor(t={}){let{canvas:e=Md(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:g=!1,outputBufferType:x=ii}=t;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=o;let R=x,m=new Set([xl,gl,ml]),v=new Set([ii,Li,yr,Ns,dl,fl]),P=new Uint32Array(4),F=new Int32Array(4),I={textures:[],min:[],max:[],resolution:[],intensity:[]},O=null,D=null,b=[],L=[],J=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,st=!1,dt=null,et=null,bt=null,ft=null;this._outputColorSpace=jn;let Ot=0,xt=0,wt=null,vt=-1,Dt=null,qt=new fn,Kt=new fn,pe=null,Ut=new Fe(0),ne=0,he=e.width,_e=e.height,$t=1,ye=null,Le=null,le=new fn(0,0,he,_e),G=new fn(0,0,he,_e),At=!1,it=new fs,mt=new Na,K=!1,pt=!1,ot=new rn,ht=new j,_t=new fn,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Tt=!1;function d(){return wt===null?$t:1}let p=n;function X(h,_){return e.getContext(h,_)}let C,V,B,at,ut,Et,U,T,tt,nt,yt,ct,gt,Mt,zt,Zt,ce,$,St,Gt,Jt,se,ge;try{let h={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${al}`),e.addEventListener("webglcontextlost",ke,!1),e.addEventListener("webglcontextrestored",Ae,!1),e.addEventListener("webglcontextcreationerror",fe,!1),p===null){let _="webgl2";if(p=X(_,h),p===null)throw X(_)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(h){throw e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),Oe("WebGLRenderer: "+h.message),h}function Ie(){C=new Yg(p),C.init(),Jt=new R1(p,C),V=new Ng(p,C,t,Jt),B=new T1(p,C),V.reversedDepthBuffer&&g&&B.buffers.depth.setReversed(!0),et=p.createFramebuffer(),bt=p.createFramebuffer(),ft=p.createFramebuffer(),at=new $g(p),ut=new f1,Et=new C1(p,C,B,ut,V,Jt,at),U=new qg(k),T=new jp(p),se=new Dg(p,T),tt=new Zg(p,T,at,se),nt=new jg(p,tt,T,se,at),$=new Kg(p,V,Et),zt=new Ug(ut),yt=new d1(k,U,C,V,se,zt),ct=new L1(k,ut),gt=new m1,Mt=new M1(C),ce=new Lg(k,U,B,nt,y,l),Zt=new E1(k,nt,V),ge=new D1(p,at,V,B),St=new zg(p,C,at),Gt=new Jg(p,C,at),at.programs=yt.programs,k.capabilities=V,k.extensions=C,k.properties=ut,k.renderLists=gt,k.shadowMap=Zt,k.state=B,k.info=at}R!==ii&&(J=new tx(R,e.width,e.height,a,s,r));let jt=new Oh(k,p);this.xr=jt,this.getContext=function(){return p},this.getContextAttributes=function(){return p.getContextAttributes()},this.forceContextLoss=function(){let h=C.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){let h=C.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return $t},this.setPixelRatio=function(h){h!==void 0&&($t=h,this.setSize(he,_e,!1))},this.getSize=function(h){return h.set(he,_e)},this.setSize=function(h,_,S=!0){if(jt.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}he=h,_e=_,e.width=Math.floor(h*$t),e.height=Math.floor(_*$t),S===!0&&(e.style.width=h+"px",e.style.height=_+"px"),J!==null&&J.setSize(e.width,e.height),this.setViewport(0,0,h,_)},this.getDrawingBufferSize=function(h){return h.set(he*$t,_e*$t).floor()},this.setDrawingBufferSize=function(h,_,S){he=h,_e=_,$t=S,e.width=Math.floor(h*S),e.height=Math.floor(_*S),this.setViewport(0,0,h,_)},this.setEffects=function(h){if(R===ii){Oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(h){for(let _=0;_<h.length;_++)if(h[_].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}J.setEffects(h||[])},this.getCurrentViewport=function(h){return h.copy(qt)},this.getViewport=function(h){return h.copy(le)},this.setViewport=function(h,_,S,E){h.isVector4?le.set(h.x,h.y,h.z,h.w):le.set(h,_,S,E),B.viewport(qt.copy(le).multiplyScalar(d()).round())},this.getScissor=function(h){return h.copy(G)},this.setScissor=function(h,_,S,E){h.isVector4?G.set(h.x,h.y,h.z,h.w):G.set(h,_,S,E),B.scissor(Kt.copy(G).multiplyScalar(d()).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(h){B.setScissorTest(At=h)},this.setOpaqueSort=function(h){ye=h},this.setTransparentSort=function(h){Le=h},this.getClearColor=function(h){return h.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(h=!0,_=!0,S=!0){let E=0;if(h){let A=!1;if(wt!==null){let z=wt.texture.format;A=m.has(z)}if(A){let z=wt.texture.type,W=v.has(z),H=ce.getClearColor(),N=ce.getClearAlpha(),q=H.r,lt=H.g,Lt=H.b;W?(P[0]=q,P[1]=lt,P[2]=Lt,P[3]=N,p.clearBufferuiv(p.COLOR,0,P)):(F[0]=q,F[1]=lt,F[2]=Lt,F[3]=N,p.clearBufferiv(p.COLOR,0,F))}else E|=p.COLOR_BUFFER_BIT}_&&(E|=p.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),S&&(E|=p.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E!==0&&p.clear(E)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(h){h.setRenderer(this),dt=h},this.dispose=function(){e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",fe,!1),ce.dispose(),gt.dispose(),Mt.dispose(),Et.dispose(),ut.dispose(),U.dispose(),nt.dispose(),tt.dispose(),se.dispose(),ge.dispose(),yt.dispose(),jt.dispose(),jt.removeEventListener("sessionstart",Ei),jt.removeEventListener("sessionend",Ti),Ln.stop()};function ke(h){h.preventDefault(),Wr("WebGLRenderer: Context Lost."),st=!0}function Ae(){Wr("WebGLRenderer: Context Restored."),st=!1;let h=at.autoReset,_=Zt.enabled,S=Zt.autoUpdate,E=Zt.needsUpdate,A=Zt.type;Ie(),at.autoReset=h,Zt.enabled=_,Zt.autoUpdate=S,Zt.needsUpdate=E,Zt.type=A}function fe(h){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function Xe(h){let _=h.target;_.removeEventListener("dispose",Xe),pn(_)}function pn(h){En(h),ut.remove(h)}function En(h){let _=ut.get(h).programs;_!==void 0&&(_.forEach(function(S){yt.releaseProgram(S)}),h.isShaderMaterial&&yt.releaseShaderCache(h))}this.renderBufferDirect=function(h,_,S,E,A,z){_===null&&(_=Rt);let W=A.isMesh&&A.matrixWorld.determinantAffine()<0,H=Z(h,_,S,E,A);B.setMaterial(E,W);let N=S.index,q=1;if(E.wireframe===!0){if(N=tt.getWireframeAttribute(S),N===void 0)return;q=2}let lt=S.drawRange,Lt=S.attributes.position,Nt=lt.start*q,Yt=(lt.start+lt.count)*q;z!==null&&(Nt=Math.max(Nt,z.start*q),Yt=Math.min(Yt,(z.start+z.count)*q)),N!==null?(Nt=Math.max(Nt,0),Yt=Math.min(Yt,N.count)):Lt!=null&&(Nt=Math.max(Nt,0),Yt=Math.min(Yt,Lt.count));let de=Yt-Nt;if(de<0||de===1/0)return;se.setup(A,E,H,S,N);let Qt,Wt=St;if(N!==null&&(Qt=T.get(N),Wt=Gt,Wt.setIndex(Qt)),A.isMesh)E.wireframe===!0?(B.setLineWidth(E.wireframeLinewidth*d()),Wt.setMode(p.LINES)):Wt.setMode(p.TRIANGLES);else if(A.isLine){let ie=E.linewidth;ie===void 0&&(ie=1),B.setLineWidth(ie*d()),A.isLineSegments?Wt.setMode(p.LINES):A.isLineLoop?Wt.setMode(p.LINE_LOOP):Wt.setMode(p.LINE_STRIP)}else A.isPoints?Wt.setMode(p.POINTS):A.isSprite&&Wt.setMode(p.TRIANGLES);if(A.isBatchedMesh)if(C.get("WEBGL_multi_draw"))Wt.renderMultiDraw(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount);else{let ie=A._multiDrawStarts,Xt=A._multiDrawCounts,re=A._multiDrawCount,ae=N?T.get(N).bytesPerElement:1,Ve=ut.get(E).currentProgram.getUniforms();for(let Ne=0;Ne<re;Ne++)Ve.setValue(p,"_gl_DrawID",Ne),Wt.render(ie[Ne]/ae,Xt[Ne])}else if(A.isInstancedMesh)Wt.renderInstances(Nt,de,A.count);else if(S.isInstancedBufferGeometry){let ie=S._maxInstanceCount!==void 0?S._maxInstanceCount:1/0,Xt=Math.min(S.instanceCount,ie);Wt.renderInstances(Nt,de,Xt)}else Wt.render(Nt,de)};function pi(h,_,S,E){dt!==null&&h.isNodeMaterial&&dt.setObject(E,h),K===!0&&zt.setState(h,S,!1),h.transparent===!0&&h.side===Be&&h.forceSinglePass===!1?(h.side=kn,h.needsUpdate=!0,Ct(h,_,E),h.side=_s,h.needsUpdate=!0,Ct(h,_,E),h.side=Be):Ct(h,_,E)}this.compile=function(h,_,S=null){S===null&&(S=h),dt!==null&&dt.renderStart(h,_,S),D=Mt.get(S),D.init(_),L.push(D),S.traverseVisible(function(A){A.isLight&&A.layers.test(_.layers)&&(D.pushLight(A),A.castShadow&&D.pushShadow(A))}),h!==S&&h.traverseVisible(function(A){A.isLight&&A.layers.test(_.layers)&&(D.pushLight(A),A.castShadow&&D.pushShadow(A))}),D.setupLights(),dt!==null&&dt.updateLights(D.state.lightsArray),pt=this.localClippingEnabled,K=zt.init(this.clippingPlanes,pt),K===!0&&zt.setGlobalState(this.clippingPlanes,_),dt!==null&&Zt.render(D.state.shadowsArray,S,_);let E=new Set;return h.traverse(function(A){if(!(A.isMesh||A.isPoints||A.isLine||A.isSprite))return;let z=A.material;if(z)if(Array.isArray(z))for(let W=0;W<z.length;W++){let H=z[W];pi(H,S,_,A),E.add(H)}else pi(z,S,_,A),E.add(z)}),D=L.pop(),dt!==null&&dt.renderEnd(),E},this.compileAsync=function(h,_,S=null){let E=this.compile(h,_,S);return new Promise(A=>{function z(){if(E.forEach(function(W){let N=ut.get(W).currentProgram;(N===void 0||N.isReady())&&E.delete(W)}),E.size===0){A(h);return}setTimeout(z,10)}C.get("KHR_parallel_shader_compile")!==null?z():setTimeout(z,10)})};let mi=null;function Fn(h){mi&&mi(h)}function Ei(){Ln.stop()}function Ti(){Ln.start()}let Ln=new rf;Ln.setAnimationLoop(Fn),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(h){mi=h,jt.setAnimationLoop(h),h===null?Ln.stop():Ln.start()},jt.addEventListener("sessionstart",Ei),jt.addEventListener("sessionend",Ti),this.render=function(h,_){if(_!==void 0&&_.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(st===!0)return;dt!==null&&dt.renderStart(h,_);let S=jt.enabled===!0&&jt.isPresenting===!0,E=J!==null&&(wt===null||S)&&J.begin(k,wt);if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),jt.enabled===!0&&jt.isPresenting===!0&&(J===null||J.isCompositing()===!1)&&(jt.cameraAutoUpdate===!0&&jt.updateCamera(_),_=jt.getCamera()),h.isScene===!0&&h.onBeforeRender(k,h,_,wt),D=Mt.get(h,L.length),D.init(_),D.state.textureUnits=Et.getTextureUnits(),L.push(D),ot.multiplyMatrices(_.projectionMatrix,_.matrixWorldInverse),_.isArrayCamera?mt.setFromArrayCamera(_):it.setFromProjectionMatrix(ot,xi,_.reversedDepth),pt=this.localClippingEnabled,K=zt.init(this.clippingPlanes,pt),O=gt.get(h,b.length),O.init(),b.push(O),this.info.render.frame++,jt.enabled===!0&&jt.isPresenting===!0){let W=k.xr.getDepthSensingMesh();W!==null&&Hn(W,_,-1/0,k.sortObjects)}Hn(h,_,0,k.sortObjects),O.finish(),dt!==null&&dt.updateLights(D.state.lightsArray),k.sortObjects===!0&&O.sort(ye,Le),Tt=jt.enabled===!1||jt.isPresenting===!1||jt.hasDepthSensing()===!1,Tt&&ce.addToRenderList(O,h),this.info.autoReset===!0&&this.info.reset(),K===!0&&zt.beginShadows();let A=D.state.shadowsArray;if(Zt.render(A,h,_),K===!0&&zt.endShadows(),(E&&J.hasRenderPass())===!1){let W=O.opaque,H=O.transmissive;if(D.setupLights(),_.isArrayCamera){let N=_.cameras;if(H.length>0)for(let q=0,lt=N.length;q<lt;q++){let Lt=N[q];Nn(W,H,h,Lt)}Tt&&ce.render(h);for(let q=0,lt=N.length;q<lt;q++){let Lt=N[q];on(O,h,Lt,Lt.viewport)}}else H.length>0&&Nn(W,H,h,_),Tt&&ce.render(h),on(O,h,_)}wt!==null&&xt===0&&(Et.updateMultisampleRenderTarget(wt),Et.updateRenderTargetMipmap(wt)),E&&J.end(k),h.isScene===!0&&h.onAfterRender(k,h,_),se.resetDefaultState(),vt=-1,Dt=null,L.pop(),L.length>0?(D=L[L.length-1],Et.setTextureUnits(D.state.textureUnits),K===!0&&zt.setGlobalState(k.clippingPlanes,D.state.camera)):D=null,b.pop(),b.length>0?O=b[b.length-1]:O=null,dt!==null&&dt.renderEnd()};function Hn(h,_,S,E){if(h.visible===!1)return;if(h.layers.test(_.layers)){if(h.isGroup)S=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(_);else if(h.isLight)D.pushLight(h),h.castShadow&&D.pushShadow(h);else if(h.isSprite){let W=_.isArrayCamera?mt:it;if(!h.frustumCulled||h.intersectsFrustum(W)){E&&_t.setFromMatrixPosition(h.matrixWorld).applyMatrix4(ot);let H=nt.update(h),N=h.material;N.visible&&O.push(h,H,N,S,_t.z,null,_)}}else if(h.isMesh||h.isLine||h.isPoints){let W=_.isArrayCamera?mt:it;if(!h.frustumCulled||h.intersectsFrustum(W)){let H=nt.update(h),N=h.material;if(E&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),_t.copy(h.boundingSphere.center)):(H.boundingSphere===null&&H.computeBoundingSphere(),_t.copy(H.boundingSphere.center)),_t.applyMatrix4(h.matrixWorld).applyMatrix4(ot)),Array.isArray(N)){let q=H.groups;for(let lt=0,Lt=q.length;lt<Lt;lt++){let Nt=q[lt],Yt=N[Nt.materialIndex];Yt&&Yt.visible&&O.push(h,H,Yt,S,_t.z,Nt,_)}}else N.visible&&O.push(h,H,N,S,_t.z,null,_)}}}let z=h.children;for(let W=0,H=z.length;W<H;W++)Hn(z[W],_,S,E)}function on(h,_,S,E){let{opaque:A,transmissive:z,transparent:W}=h;D.setupLightsView(S),K===!0&&zt.setGlobalState(k.clippingPlanes,S),E&&B.viewport(qt.copy(E)),A.length>0&&Y(A,_,S),z.length>0&&Y(z,_,S),W.length>0&&Y(W,_,S),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function Nn(h,_,S,E){if((S.isScene===!0?S.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[E.id]===void 0){let Nt=C.has("EXT_color_buffer_half_float")||C.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[E.id]=new oi(1,1,{generateMipmaps:!0,type:Nt?Di:ii,minFilter:ss,samples:Math.max(4,V.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tn.workingColorSpace})}let z=D.state.transmissionRenderTarget[E.id],W=E.viewport||qt;z.setSize(W.z*k.transmissionResolutionScale,W.w*k.transmissionResolutionScale);let H=k.getRenderTarget(),N=k.getActiveCubeFace(),q=k.getActiveMipmapLevel();k.setRenderTarget(z),k.getClearColor(Ut),ne=k.getClearAlpha(),ne<1&&k.setClearColor(16777215,.5),k.clear(),Tt&&ce.render(S);let lt=k.toneMapping;k.toneMapping=Wi;let Lt=E.viewport;if(E.viewport!==void 0&&(E.viewport=void 0),D.setupLightsView(E),K===!0&&zt.setGlobalState(k.clippingPlanes,E),Y(h,S,E),Et.updateMultisampleRenderTarget(z),Et.updateRenderTargetMipmap(z),C.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Yt=0,de=_.length;Yt<de;Yt++){let Qt=_[Yt],{object:Wt,geometry:ie,material:Xt,group:re}=Qt;if(Xt.side===Be&&Wt.layers.test(E.layers)){let ae=Xt.side;Xt.side=kn,Xt.needsUpdate=!0,Q(Wt,S,E,ie,Xt,re),Xt.side=ae,Xt.needsUpdate=!0,Nt=!0}}Nt===!0&&(Et.updateMultisampleRenderTarget(z),Et.updateRenderTargetMipmap(z))}k.setRenderTarget(H,N,q),k.setClearColor(Ut,ne),Lt!==void 0&&(E.viewport=Lt),k.toneMapping=lt}function Y(h,_,S){let E=_.isScene===!0?_.overrideMaterial:null;for(let A=0,z=h.length;A<z;A++){let W=h[A],{object:H,geometry:N,group:q}=W,lt=W.material;lt.allowOverride===!0&&E!==null&&(lt=E),H.layers.test(S.layers)&&Q(H,_,S,N,lt,q)}}function Q(h,_,S,E,A,z){dt!==null&&A.isNodeMaterial&&dt.setObject(h,A),h.onBeforeRender(k,_,S,E,A,z),h.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),A.onBeforeRender(k,_,S,E,h,z),A.transparent===!0&&A.side===Be&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,k.renderBufferDirect(S,_,E,A,h,z),A.side=_s,A.needsUpdate=!0,k.renderBufferDirect(S,_,E,A,h,z),A.side=Be):k.renderBufferDirect(S,_,E,A,h,z),h.onAfterRender(k,_,S,E,A,z)}function Ft(h){let _=0;for(let S of h)S.texture!==null&&_++;return _}function Ct(h,_,S){_.isScene!==!0&&(_=Rt);let E=ut.get(h),A=D.state.lights,z=D.state.shadowsArray,W=A.state.version,H=yt.getParameters(h,A.state,z,_,S,D.state.lightProbeGridArray),N=yt.getProgramCacheKey(H),q=E.programs;E.environment=h.isMeshStandardMaterial||h.isMeshLambertMaterial||h.isMeshPhongMaterial?_.environment:null,E.fog=_.fog;let lt=h.isMeshStandardMaterial||h.isMeshLambertMaterial&&!h.envMap||h.isMeshPhongMaterial&&!h.envMap;E.envMap=U.get(h.envMap||E.environment,lt),E.envMapRotation=E.environment!==null&&h.envMap===null?_.environmentRotation:h.envMapRotation,q===void 0&&(h.addEventListener("dispose",Xe),q=new Map,E.programs=q,E.programVariants=new Map);let Lt=q.get(N);if(Lt!==void 0){if(E.currentProgram===Lt&&E.lightsStateVersion===W)return Pe(h,H),Lt}else H.uniforms=yt.getUniforms(h),dt!==null&&h.isNodeMaterial&&dt.build(h,S,H),h.onBeforeCompile(H,k),Lt=yt.acquireProgram(H,N),q.set(N,Lt),E.uniforms=H.uniforms;let Nt=E.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(Nt.clippingPlanes=zt.uniform),Pe(h,H),E.needsLights=M(h),E.lightsStateVersion=W,E.needsLights&&(Nt.ambientLightColor.value=A.state.ambient,Nt.sunLights.value=A.state.sun,Nt.sunLightShadows.value=A.state.sunShadow,Nt.directionalLights.value=A.state.directional,Nt.directionalLightShadows.value=A.state.directionalShadow,Nt.spotLights.value=A.state.spot,Nt.spotLightShadows.value=A.state.spotShadow,Nt.rectAreaLights.value=A.state.rectArea,Nt.ltc_1.value=A.state.rectAreaLTC1,Nt.ltc_2.value=A.state.rectAreaLTC2,Nt.pointLights.value=A.state.point,Nt.pointLightShadows.value=A.state.pointShadow,Nt.hemisphereLights.value=A.state.hemi,Nt.sunShadowMatrix.value=A.state.sunShadowMatrix,Nt.sunShadowCascade.value=A.state.sunShadowCascade,Nt.directionalShadowMatrix.value=A.state.directionalShadowMatrix,Nt.spotLightMatrix.value=A.state.spotLightMatrix,Nt.spotLightMap.value=A.state.spotLightMap,Nt.pointShadowMatrix.value=A.state.pointShadowMatrix),E.numLightProbeGrids=Ft(D.state.lightProbeGridArray),E.currentProgram=Lt,E.uniformsList=null,Lt}function Vt(h,_,S,E,A){let z=ut.get(h),W=z.currentProgram.id+","+E+","+A,H=z.programVariants.get(W);return H===void 0?(H=Ct(h,_,S),z.programVariants.set(W,H)):(z.currentProgram=H,z.uniformsList=null,z.outputColorSpace=E,z.toneMapping=A),H}function Pt(h){if(h.uniformsList===null){let _=h.currentProgram.getUniforms();h.uniformsList=vr.seqWithValue(_.seq,h.uniforms)}return h.uniformsList}function Pe(h,_){let S=ut.get(h);S.outputColorSpace=_.outputColorSpace,S.batching=_.batching,S.batchingColor=_.batchingColor,S.instancing=_.instancing,S.instancingColor=_.instancingColor,S.instancingMorph=_.instancingMorph,S.skinning=_.skinning,S.morphTargets=_.morphTargets,S.morphNormals=_.morphNormals,S.morphColors=_.morphColors,S.morphTargetsCount=_.morphTargetsCount,S.numClippingPlanes=_.numClippingPlanes,S.numIntersection=_.numClipIntersection,S.vertexAlphas=_.vertexAlphas,S.vertexTangents=_.vertexTangents,S.toneMapping=_.toneMapping}function Z(h,_,S,E,A){_.isScene!==!0&&(_=Rt),Et.resetTextureUnits();let z=_.fog,W=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?_.environment:null,H=wt===null?k.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:tn.workingColorSpace,N=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,q=U.get(E.envMap||W,N),lt=E.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,Lt=!!S.attributes.tangent&&(!!E.normalMap||E.anisotropy>0),Nt=!!S.morphAttributes.position,Yt=!!S.morphAttributes.normal,de=!!S.morphAttributes.color,Qt=Wi;E.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(Qt=k.toneMapping);let Wt=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,ie=Wt!==void 0?Wt.length:0,Xt=ut.get(E),re=D.state.lights;if(K===!0&&(pt===!0||h!==Dt)){let He=h===Dt&&E.id===vt;zt.setState(E,h,He)}let ae=!1,Ve=!1;E.version===Xt.__version?Xt.needsLights&&Xt.lightsStateVersion!==re.state.version||A.isBatchedMesh&&Xt.batching===!1||!A.isBatchedMesh&&Xt.batching===!0||A.isBatchedMesh&&Xt.batchingColor===!0&&A._colorsTexture===null||A.isBatchedMesh&&Xt.batchingColor===!1&&A._colorsTexture!==null||A.isInstancedMesh&&Xt.instancing===!1||!A.isInstancedMesh&&Xt.instancing===!0||A.isSkinnedMesh&&Xt.skinning===!1||!A.isSkinnedMesh&&Xt.skinning===!0||A.isInstancedMesh&&Xt.instancingColor===!0&&A.instanceColor===null||A.isInstancedMesh&&Xt.instancingColor===!1&&A.instanceColor!==null||A.isInstancedMesh&&Xt.instancingMorph===!0&&A.morphTexture===null||A.isInstancedMesh&&Xt.instancingMorph===!1&&A.morphTexture!==null||Xt.envMap!==q||E.fog===!0&&Xt.fog!==z||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==zt.numPlanes||Xt.numIntersection!==zt.numIntersection)||Xt.vertexAlphas!==lt||Xt.vertexTangents!==Lt||Xt.morphTargets!==Nt||Xt.morphNormals!==Yt||Xt.morphColors!==de||Xt.morphTargetsCount!==ie||Xt.numLightProbeGrids!==Ft(D.state.lightProbeGridArray)?ae=!0:(Xt.outputColorSpace!==H||Xt.toneMapping!==Qt)&&(Ve=!0):(ae=!0,Xt.__version=E.version);let Ne=Xt.currentProgram;(ae===!0||Ve===!0)&&(Ne=Ve===!0?Vt(E,_,A,H,Qt):Ct(E,_,A),dt&&E.isNodeMaterial&&dt.onUpdateProgram(E,Ne,Xt));let sn=!1,ln=!1,ue=!1,xe=Ne.getUniforms(),Re=Xt.uniforms;if(B.useProgram(Ne.program)&&(sn=!0,ln=!0,ue=!0),E.id!==vt&&(vt=E.id,ln=!0),sn||Dt!==h){B.buffers.depth.getReversed()&&h.reversedDepth!==!0&&(h._reversedDepth=!0,h.updateProjectionMatrix()),xe.setValue(p,"projectionMatrix",h.projectionMatrix),xe.setValue(p,"viewMatrix",h.matrixWorldInverse);let Je=xe.map.cameraPosition;Je!==void 0&&Je.setValue(p,ht.setFromMatrixPosition(h.matrixWorld)),V.logarithmicDepthBuffer&&xe.setValue(p,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(E.isMeshPhongMaterial||E.isMeshToonMaterial||E.isMeshLambertMaterial||E.isMeshBasicMaterial||E.isMeshStandardMaterial||E.isShaderMaterial)&&xe.setValue(p,"isOrthographic",h.isOrthographicCamera===!0),Dt!==h&&(Dt=h,ln=!0,ue=!0)}if(Xt.needsLights&&(re.state.sunShadowMap.length>0&&xe.setValue(p,"sunShadowMap",re.state.sunShadowMap,Et),re.state.directionalShadowMap.length>0&&xe.setValue(p,"directionalShadowMap",re.state.directionalShadowMap,Et),re.state.spotShadowMap.length>0&&xe.setValue(p,"spotShadowMap",re.state.spotShadowMap,Et),re.state.pointShadowMap.length>0&&xe.setValue(p,"pointShadowMap",re.state.pointShadowMap,Et)),A.isSkinnedMesh){xe.setOptional(p,A,"bindMatrix"),xe.setOptional(p,A,"bindMatrixInverse");let He=A.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),xe.setValue(p,"boneTexture",He.boneTexture,Et))}A.isBatchedMesh&&(xe.setOptional(p,A,"batchingTexture"),xe.setValue(p,"batchingTexture",A._matricesTexture,Et),xe.setOptional(p,A,"batchingIdTexture"),xe.setValue(p,"batchingIdTexture",A._indirectTexture,Et),xe.setOptional(p,A,"batchingColorTexture"),A._colorsTexture!==null&&xe.setValue(p,"batchingColorTexture",A._colorsTexture,Et));let en=S.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&$.update(A,S,Ne),(ln||Xt.receiveShadow!==A.receiveShadow)&&(Xt.receiveShadow=A.receiveShadow,xe.setValue(p,"receiveShadow",A.receiveShadow)),(E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial)&&E.envMap===null&&_.environment!==null&&(Re.envMapIntensity.value=_.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=N1()),ln){if(xe.setValue(p,"toneMappingExposure",k.toneMappingExposure),Xt.needsLights&&rt(Re,ue),z&&E.fog===!0&&ct.refreshFogUniforms(Re,z),ct.refreshMaterialUniforms(Re,E,$t,_e,D.state.transmissionRenderTarget[h.id]),Xt.needsLights&&Xt.numLightProbeGrids>0){let He=I,Je=0;for(let Rn of D.state.lightProbeGridArray)Rn.texture!==null&&(He.textures[Je]=Rn.texture,He.min[Je]=Rn.boundingBox.min,He.max[Je]=Rn.boundingBox.max,He.resolution[Je]=Rn.resolution,He.intensity[Je]=Rn.intensity,Je++);for(let Rn in He)He[Rn].length=Je;Re.probesSH.value=He.textures,Re.probesMin.value=He.min,Re.probesMax.value=He.max,Re.probesResolution.value=He.resolution,Re.probesIntensity.value=He.intensity}vr.upload(p,Pt(Xt),Re,Et)}if(E.isShaderMaterial&&E.uniformsNeedUpdate===!0&&(vr.upload(p,Pt(Xt),Re,Et),E.uniformsNeedUpdate=!1),E.isSpriteMaterial&&xe.setValue(p,"center",A.center),xe.setValue(p,"modelViewMatrix",A.modelViewMatrix),xe.setValue(p,"normalMatrix",A.normalMatrix),xe.setValue(p,"modelMatrix",A.matrixWorld),E.uniformsGroups!==void 0){let He=E.uniformsGroups;for(let Je=0,Rn=He.length;Je<Rn;Je++){let ks=He[Je];ge.update(ks,Ne),ge.bind(ks,Ne)}}return Ne}function rt(h,_){h.ambientLightColor.needsUpdate=_,h.sunLights.needsUpdate=_,h.sunLightShadows.needsUpdate=_,h.directionalLights.needsUpdate=_,h.directionalLightShadows.needsUpdate=_,h.pointLights.needsUpdate=_,h.pointLightShadows.needsUpdate=_,h.spotLights.needsUpdate=_,h.spotLightShadows.needsUpdate=_,h.rectAreaLights.needsUpdate=_,h.hemisphereLights.needsUpdate=_}function M(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return Ot},this.getActiveMipmapLevel=function(){return xt},this.getRenderTarget=function(){return wt},this.setRenderTargetTextures=function(h,_,S){let E=ut.get(h);E.__autoAllocateDepthBuffer=h.resolveDepthBuffer===!1,E.__autoAllocateDepthBuffer===!1&&(E.__useRenderToTexture=!1),ut.get(h.texture).__webglTexture=_,ut.get(h.depthTexture).__webglTexture=E.__autoAllocateDepthBuffer?void 0:S,E.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(h,_){let S=ut.get(h);S.__webglFramebuffer=_,S.__useDefaultFramebuffer=_===void 0},this.setRenderTarget=function(h,_=0,S=0){wt=h,Ot=_,xt=S;let E=null,A=!1,z=!1;if(h){let H=ut.get(h);if(H.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(p.FRAMEBUFFER,H.__webglFramebuffer),qt.copy(h.viewport),Kt.copy(h.scissor),pe=h.scissorTest,B.viewport(qt),B.scissor(Kt),B.setScissorTest(pe),vt=-1;return}else if(H.__webglFramebuffer===void 0)Et.setupRenderTarget(h);else if(H.__hasExternalTextures)Et.rebindTextures(h,ut.get(h.texture).__webglTexture,ut.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){let lt=h.depthTexture;if(H.__boundDepthTexture!==lt){if(lt!==null&&ut.has(lt)&&(h.width!==lt.image.width||h.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Et.setupDepthRenderbuffer(h)}}let N=h.texture;(N.isData3DTexture||N.isDataArrayTexture||N.isCompressedArrayTexture)&&(z=!0);let q=ut.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(q[_])?E=q[_][S]:E=q[_],A=!0):h.samples>0&&Et.useMultisampledRTT(h)===!1?E=ut.get(h).__webglMultisampledFramebuffer:Array.isArray(q)?E=q[S]:E=q,qt.copy(h.viewport),Kt.copy(h.scissor),pe=h.scissorTest}else qt.copy(le).multiplyScalar($t).floor(),Kt.copy(G).multiplyScalar($t).floor(),pe=At;if(S!==0&&(E=et),B.bindFramebuffer(p.FRAMEBUFFER,E)&&B.drawBuffers(h,E),B.viewport(qt),B.scissor(Kt),B.setScissorTest(pe),A){let H=ut.get(h.texture);p.framebufferTexture2D(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_CUBE_MAP_POSITIVE_X+_,H.__webglTexture,S)}else if(z){let H=_;for(let N=0;N<h.textures.length;N++){let q=ut.get(h.textures[N]);p.framebufferTextureLayer(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0+N,q.__webglTexture,S,H)}}else if(h!==null&&S!==0){let H=ut.get(h.texture);p.framebufferTexture2D(p.FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,H.__webglTexture,S)}vt=-1};function w(h){let _=ut.get(h);return(_.__readFormat!==h.format||_.__readType!==h.type)&&(_.__readFormat=h.format,_.__readType=h.type,_.__formatReadable=V.textureFormatReadable(h.format),_.__typeReadable=V.textureTypeReadable(h.type)),_}this.readRenderTargetPixels=function(h,_,S,E,A,z,W,H=0){if(!(h&&h.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let N=ut.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&W!==void 0&&(N=N[W]),Array.isArray(N)&&(N=N[0]),N){let q=B.getBoundFramebuffer(p.READ_FRAMEBUFFER);B.bindFramebuffer(p.READ_FRAMEBUFFER,N);try{let lt=h.textures[H],Lt=lt.format,Nt=lt.type;h.textures.length>1&&p.readBuffer(p.COLOR_ATTACHMENT0+H);let Yt=w(lt);if(Yt.__formatReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Yt.__typeReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}_>=0&&_<=h.width-E&&S>=0&&S<=h.height-A&&p.readPixels(_,S,E,A,Jt.convert(Lt),Jt.convert(Nt),z)}finally{B.bindFramebuffer(p.READ_FRAMEBUFFER,q)}}},this.readRenderTargetPixelsAsync=async function(h,_,S,E,A,z,W,H=0){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let N=ut.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&W!==void 0&&(N=N[W]),Array.isArray(N)&&(N=N[0]),N)if(_>=0&&_<=h.width-E&&S>=0&&S<=h.height-A){let q=B.getBoundFramebuffer(p.READ_FRAMEBUFFER);B.bindFramebuffer(p.READ_FRAMEBUFFER,N);let lt=h.textures[H],Lt=lt.format,Nt=lt.type;h.textures.length>1&&p.readBuffer(p.COLOR_ATTACHMENT0+H);let Yt=w(lt);if(Yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=p.createBuffer();p.bindBuffer(p.PIXEL_PACK_BUFFER,de),p.bufferData(p.PIXEL_PACK_BUFFER,z.byteLength,p.STREAM_READ),p.readPixels(_,S,E,A,Jt.convert(Lt),Jt.convert(Nt),0),p.bindBuffer(p.PIXEL_PACK_BUFFER,null),B.bindFramebuffer(p.READ_FRAMEBUFFER,q);let Qt=p.fenceSync(p.SYNC_GPU_COMMANDS_COMPLETE,0);return p.flush(),await Sd(p,Qt,4),p.bindBuffer(p.PIXEL_PACK_BUFFER,de),p.getBufferSubData(p.PIXEL_PACK_BUFFER,0,z),p.bindBuffer(p.PIXEL_PACK_BUFFER,null),p.deleteBuffer(de),p.deleteSync(Qt),z}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(h,_=null,S=0){let E=Math.pow(2,-S),A=Math.floor(h.image.width*E),z=Math.floor(h.image.height*E),W=_!==null?_.x:0,H=_!==null?_.y:0;Et.setTexture2D(h,0),B.activeTexture(p.TEXTURE0),p.copyTexSubImage2D(p.TEXTURE_2D,S,0,0,W,H,A,z),B.unbindTexture()},this.copyTextureToTexture=function(h,_,S=null,E=null,A=0,z=0){let W,H,N,q,lt,Lt,Nt,Yt,de,Qt=h.isCompressedTexture?h.mipmaps[z]:h.image;if(S!==null)W=S.max.x-S.min.x,H=S.max.y-S.min.y,N=S.isBox3?S.max.z-S.min.z:1,q=S.min.x,lt=S.min.y,Lt=S.isBox3?S.min.z:0;else{let xe=Math.pow(2,-A);W=Math.floor(h.width*xe),H=Math.floor(h.height*xe),h.isDataArrayTexture?N=Qt.depth:h.isData3DTexture?N=Math.floor(Qt.depth*xe):N=1,q=0,lt=0,Lt=0}E!==null?(Nt=E.x,Yt=E.y,de=E.z):(Nt=0,Yt=0,de=0);let Wt=Jt.convert(_.format),ie=Jt.convert(_.type),Xt;_.isData3DTexture?(Et.setTexture3D(_,0),Xt=p.TEXTURE_3D):_.isDataArrayTexture||_.isCompressedArrayTexture?(Et.setTexture2DArray(_,0),Xt=p.TEXTURE_2D_ARRAY):(Et.setTexture2D(_,0),Xt=p.TEXTURE_2D),B.activeTexture(p.TEXTURE0),B.pixelStorei(p.UNPACK_FLIP_Y_WEBGL,_.flipY),B.pixelStorei(p.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),B.pixelStorei(p.UNPACK_ALIGNMENT,_.unpackAlignment);let re=B.getParameter(p.UNPACK_ROW_LENGTH),ae=B.getParameter(p.UNPACK_IMAGE_HEIGHT),Ve=B.getParameter(p.UNPACK_SKIP_PIXELS),Ne=B.getParameter(p.UNPACK_SKIP_ROWS),sn=B.getParameter(p.UNPACK_SKIP_IMAGES);B.pixelStorei(p.UNPACK_ROW_LENGTH,Qt.width),B.pixelStorei(p.UNPACK_IMAGE_HEIGHT,Qt.height),B.pixelStorei(p.UNPACK_SKIP_PIXELS,q),B.pixelStorei(p.UNPACK_SKIP_ROWS,lt),B.pixelStorei(p.UNPACK_SKIP_IMAGES,Lt);let ln=h.isDataArrayTexture||h.isData3DTexture,ue=_.isDataArrayTexture||_.isData3DTexture;if(h.isDepthTexture){let xe=ut.get(h),Re=ut.get(_),en=ut.get(xe.__renderTarget),He=ut.get(Re.__renderTarget);B.bindFramebuffer(p.READ_FRAMEBUFFER,en.__webglFramebuffer),B.bindFramebuffer(p.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let Je=0;Je<N;Je++)ln&&(p.framebufferTextureLayer(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,ut.get(h).__webglTexture,A,Lt+Je),p.framebufferTextureLayer(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,ut.get(_).__webglTexture,z,de+Je)),p.blitFramebuffer(q,lt,q+W,lt+H,Nt,Yt,Nt+W,Yt+H,p.DEPTH_BUFFER_BIT,p.NEAREST);B.bindFramebuffer(p.READ_FRAMEBUFFER,null),B.bindFramebuffer(p.DRAW_FRAMEBUFFER,null)}else if(A!==0||h.isRenderTargetTexture||ut.has(h)){let xe=ut.get(h),Re=ut.get(_);B.bindFramebuffer(p.READ_FRAMEBUFFER,bt),B.bindFramebuffer(p.DRAW_FRAMEBUFFER,ft);for(let en=0;en<N;en++)ln?p.framebufferTextureLayer(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,xe.__webglTexture,A,Lt+en):p.framebufferTexture2D(p.READ_FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,xe.__webglTexture,A),ue?p.framebufferTextureLayer(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,Re.__webglTexture,z,de+en):p.framebufferTexture2D(p.DRAW_FRAMEBUFFER,p.COLOR_ATTACHMENT0,p.TEXTURE_2D,Re.__webglTexture,z),A!==0?p.blitFramebuffer(q,lt,q+W,lt+H,Nt,Yt,Nt+W,Yt+H,p.COLOR_BUFFER_BIT,p.NEAREST):ue?p.copyTexSubImage3D(Xt,z,Nt,Yt,de+en,q,lt,W,H):p.copyTexSubImage2D(Xt,z,Nt,Yt,q,lt,W,H);B.bindFramebuffer(p.READ_FRAMEBUFFER,null),B.bindFramebuffer(p.DRAW_FRAMEBUFFER,null)}else ue?h.isDataTexture||h.isData3DTexture?p.texSubImage3D(Xt,z,Nt,Yt,de,W,H,N,Wt,ie,Qt.data):_.isCompressedArrayTexture?p.compressedTexSubImage3D(Xt,z,Nt,Yt,de,Qt.width,Qt.height,N,Wt,Qt.data):p.texSubImage3D(Xt,z,Nt,Yt,de,W,H,N,Wt,ie,Qt):h.isDataTexture?p.texSubImage2D(p.TEXTURE_2D,z,Nt,Yt,W,H,Wt,ie,Qt.data):h.isCompressedTexture?p.compressedTexSubImage2D(p.TEXTURE_2D,z,Nt,Yt,Qt.width,Qt.height,Wt,Qt.data):p.texSubImage2D(p.TEXTURE_2D,z,Nt,Yt,W,H,Wt,ie,Qt);B.pixelStorei(p.UNPACK_ROW_LENGTH,re),B.pixelStorei(p.UNPACK_IMAGE_HEIGHT,ae),B.pixelStorei(p.UNPACK_SKIP_PIXELS,Ve),B.pixelStorei(p.UNPACK_SKIP_ROWS,Ne),B.pixelStorei(p.UNPACK_SKIP_IMAGES,sn),z===0&&_.generateMipmaps===!0&&_.mipmapsAutoUpdate===!0&&p.generateMipmap(Xt),B.unbindTexture()},this.initRenderTarget=function(h){ut.get(h).__webglFramebuffer===void 0&&Et.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?Et.setTextureCube(h,0):h.isData3DTexture?Et.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?Et.setTexture2DArray(h,0):Et.setTexture2D(h,0),B.unbindTexture()},this.resetState=function(){Ot=0,xt=0,wt=null,B.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=tn._getDrawingBufferColorSpace(t),e.unpackColorSpace=tn._getUnpackColorSpace()}};var Se=Math.PI*2,Me=(i,t,e)=>i<t?t:i>e?e:i,te=(i,t,e)=>i+(t-i)*e,oe=(i,t,e)=>{let n=Me((e-i)/(t-i),0,1);return n*n*(3-2*n)},Ye=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-e*n));function hn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var Ke=(i,t)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)};function yn(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=Ke(e,n),c=Ke(e+1,n),u=Ke(e,n+1),f=Ke(e+1,n+1);return l+(c-l)*o+(u-l)*a+(l-c-u+f)*o*a}function un(i,t){let e=0,n=.5,s=1;for(let r=0;r<4;r++)e+=n*yn(i*s,t*s),s*=2.03,n*=.5;return e/.9375}var ec=new rn,nc=new _i,gf=new yi,U1=new j,_f=new j,_n=new Fe;function Bt(i,t){i.index&&(i=i.toNonIndexed()),i.attributes.uv&&i.deleteAttribute("uv"),i.attributes.uv1&&i.deleteAttribute("uv1");let e=i.attributes.position,n=e.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)typeof t=="function"?t(_n,e.getX(r),e.getY(r),e.getZ(r),r):_n.set(t),s[r*3]=_n.r,s[r*3+1]=_n.g,s[r*3+2]=_n.b;return i.setAttribute("color",new qe(s,3)),i}function kt(i,t=0,e=0,n=0,s=0,r=0,o=0,a=1,l=a,c=a){return gf.set(s,r,o),nc.setFromEuler(gf),ec.compose(U1.set(t,e,n),nc,_f.set(a,l,c)),i.applyMatrix4(ec),i}function kh(i,t,e){let n=new j().subVectors(e,t),s=n.length();return nc.setFromUnitVectors(new j(0,1,0),n.normalize()),ec.compose(new j().addVectors(t,e).multiplyScalar(.5),nc,_f.set(1,1,1)),i.applyMatrix4(ec),s}function nn(i){let t=0;for(let a of i)t+=a.attributes.position.count;let e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*3),r=0;for(let a of i)a.attributes.normal||a.computeVertexNormals(),e.set(a.attributes.position.array,r*3),n.set(a.attributes.normal.array,r*3),s.set(a.attributes.color.array,r*3),r+=a.attributes.position.count,a.dispose();let o=new Ze;return o.setAttribute("position",new qe(e,3)),o.setAttribute("normal",new qe(n,3)),o.setAttribute("color",new qe(s,3)),o.computeBoundingSphere(),o}var De=(i,t,e,n)=>i.copy(ui.set(t)).lerp(No.set(e),Me(n,0,1)),ui=new Fe,No=new Fe;function di(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new eo(s);return r.colorSpace=jn,r.anisotropy=4,n&&(r.wrapS=r.wrapT=ds,r.repeat.set(n[0],n[1])),r}var wn=(i,t)=>{let e=(t-i)%Se;return e>Math.PI&&(e-=Se),e<-Math.PI&&(e+=Se),e},Sn=(i,t,e,n)=>i+wn(i,t)*(1-Math.exp(-e*n)),Ce=(i,t={})=>new On({color:i,shininess:30,specular:"#2A2A2A",...t}),wr=i=>i.traverse(t=>{t.isMesh&&(t.castShadow=!0)});function yf(i="#2F78DA",t="#86C4F7",e="#F8E6C8",n=new j(.62,.3,-.73)){let s=new Ht(new Ee(600,32,16),new bi({side:kn,depthWrite:!1,fog:!1,uniforms:{top:{value:new Fe(i)},mid:{value:new Fe(t)},hor:{value:new Fe(e)},sunDir:{value:n.clone().normalize()}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top, mid, hor, sunDir; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float y = d.y;
        vec3 c = mix(hor, mid, smoothstep(-0.03, 0.2, y)); c = mix(c, top, smoothstep(0.2, 0.8, y));
        float s = max(dot(d, sunDir), 0.0);
        c += vec3(1.0, 0.86, 0.6) * (pow(s, 10.0) * 0.35 + pow(s, 90.0) * 0.6);
        c = mix(c, vec3(1.0, 0.97, 0.86), smoothstep(0.9982, 0.9992, s));
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));return s.renderOrder=-10,s.frustumCulled=!1,s}function vf(i){let t=new jl({canvas:i,antialias:!0,powerPreference:"high-performance"});return t.toneMapping=So,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=Fs,t}function Mf(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}var wf=()=>di(64,64,i=>{let t=i.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,64,64)});function Sf(){let i=di(256,256,(t,e,n)=>{let s=t.createImageData(e,n),r=(o,a)=>yn(o/18,a/9)*.6+yn(o/7,a/4)*.4;for(let o=0;o<n;o++)for(let a=0;a<e;a++){let l=r(a+1,o)-r(a-1,o),c=r(a,o+1)-r(a,o-1),u=(o*e+a)*4,f=-l*3,g=-c*3,x=Math.hypot(f,g,1);s.data[u]=(f/x*.5+.5)*255,s.data[u+1]=(g/x*.5+.5)*255,s.data[u+2]=(1/x*.5+.5)*255,s.data[u+3]=255}t.putImageData(s,0,0)},[1,1]);return i.colorSpace="",i}function bf(i,t){!t||!t.see||(i.uniforms.uSee=t.see,i.vertexShader=`varying float vSeeZ;
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
      transformed.z += cos(uTime * (1.05 + uWind * 2.5) + ph) * ${(t*.5).toFixed(4)} * wk * hh * hh;`)},s.customProgramCacheKey=()=>"sway"+t+"_"+e+(i.flatShading?"f":"")+i.side+(n&&n.see?"see":""),s}function Sr(i,t,e){let n=[],s=4.6+i()*1.6,r=new Yn([new j(0,-.2,0),new j(t*.2,s*.35,.05),new j(t*.6,s*.7,.1),new j(t,s,.12)]),o=13;for(let c=0;c<o;c++){let u=r.getPoint(c/o),f=r.getPoint((c+1)/o),g=te(.25,.14,c/o),x=Bt(new me(g*1.13,g*.9,1,9,1,!0),(R,m,v)=>De(R,c%2?"#7E5E3C":"#8D6C46","#A9875C",v+.5)),y=u.distanceTo(f);kt(x,0,0,0,0,0,0,1,y*1.04,1),kh(x,u,f),n.push(x)}let a=r.getPoint(1),l=new j(0,1,0);n.push(kt(Bt(new gn(.28,1),"#6B5A2E"),a.x,a.y,a.z));for(let c=0;c<e;c++){let u=c/e*Se+i()*.35,f=new j(Math.cos(u),0,Math.sin(u)),g=2.6+i()*.9,x=.7+i()*.6,y=new Yn([a.clone(),a.clone().addScaledVector(f,g*.3).addScaledVector(l,.55),a.clone().addScaledVector(f,g*.65).addScaledVector(l,.35-x*.2),a.clone().addScaledVector(f,g).addScaledVector(l,-x)]),R=14,m=[],v=[],P=[];for(let O=0;O<=R;O++){let D=O/R,b=y.getPoint(D),L=y.getTangent(D),J=new j().crossVectors(L,l).normalize(),k=Math.pow(Math.sin(Math.PI*Math.min(1,D*1.15)),.7)*.5*(O%2?1:.72);P.push([b,b.clone().addScaledVector(J,k).addScaledVector(l,-k*.42),b.clone().addScaledVector(J,-k).addScaledVector(l,-k*.42),D])}let F=(O,D,b)=>{m.push(O.x,O.y,O.z),De(_n,"#2E7A30","#6CC24A",D*.9+b*.25),v.push(_n.r,_n.g,_n.b)};for(let O=0;O<R;O++){let[D,b,L,J]=P[O],[k,st,dt,et]=P[O+1];F(D,J,0),F(b,J,1),F(k,et,0),F(b,J,1),F(st,et,1),F(k,et,0),F(D,J,0),F(k,et,0),F(L,J,1),F(L,J,1),F(k,et,0),F(dt,et,1)}let I=new Ze;I.setAttribute("position",new qe(new Float32Array(m),3)),I.setAttribute("color",new qe(new Float32Array(v),3)),I.computeVertexNormals(),n.push(I)}for(let c=0;c<2;c++){let u=i()*Se;for(let f=0;f<7;f++)n.push(kt(Bt(new gn(.085,0),f%2?"#B85C1C":"#D07A26"),a.x+Math.cos(u)*.32+(i()-.5)*.16,a.y-.32-i()*.3,a.z+Math.sin(u)*.32+(i()-.5)*.16))}return nn(n)}function sc(i,t,e){let n=[Bt(kt(new me(.12,.2,1.7,7),0,.85,0),"#7A5230")];n.push(Bt(kt(new me(.05,.08,.8,5),.25,1.55,0,0,0,-.7),"#7A5230"));for(let s=0;s<7;s++){let r=.62+i()*.45,o=(i()-.5)*1.3,a=2.15+i()*.9,l=(i()-.5)*1.1,c=i();n.push(kt(Bt(new gn(r,1),(u,f,g,x)=>De(u,e[0],e[1],.25+g/r*.45+c*.3+(Ke(f*9,x*9)-.5)*.2)),o,a,l))}if(t)for(let s=0;s<9;s++){let r=i()*Se,o=i()*1.3;n.push(kt(Bt(new gn(.08,1),t),Math.cos(r)*.95,2.1+Math.sin(o)*.9,Math.sin(r)*.85+.2))}return nn(n)}var Uo=()=>nn([0,1,2,3].map(i=>kt(Bt(new gn(.42-i*.05,1),(t,e,n)=>De(t,"#2F8A3C","#86D05C",.4+n*.9+i*.1)),(i-1.5)*.32,.3,i%2*.2))),Bo=()=>Bt(new ni(.4,0),(i,t,e,n)=>De(i,"#8C877B","#C9C4B6",.4+e*1.2+Ke(t*7,n*7)*.3)),rc=()=>nn([...Array(6)].map((i,t)=>{let e=t*1.1,n=.8+t%3*.22,s=Bt(new Mn(.025,n,3),(r,o,a)=>De(r,"#3C7F35","#8CC05A",a/n+.5));return kt(s,Math.cos(e)*.12,n/2,Math.sin(e)*.12,Math.sin(e)*.15,0,Math.cos(e)*.15),t%2?nn([s,kt(Bt(new me(.035,.035,.16,6),"#6B4423"),Math.cos(e)*.12+Math.cos(e)*.15*n,n-.05,Math.sin(e)*.12)]):s})),Oo=()=>(()=>{let i=[],t=[];for(let n=0;n<5;n++){let s=n/5*Se+.3,r=.22+n%3*.07,o=.035,a=Math.cos(s)*.05,l=Math.sin(s)*.05,c=a+Math.cos(s)*.1,u=l+Math.sin(s)*.1,f=-Math.sin(s)*o,g=Math.cos(s)*o;i.push(a-f,0,l-g,a+f,0,l+g,c,r,u);for(let x of[0,0,1])De(_n,"#5AA544","#B0E47A",x),t.push(_n.r,_n.g,_n.b)}let e=new Ze;return e.setAttribute("position",new qe(new Float32Array(i),3)),e.setAttribute("color",new qe(new Float32Array(t),3)),e.computeVertexNormals(),e})();var Ni={hip:.92,thigh:.42,shin:.42,ankle:.08,waist:.1,neck:.45,upper:.31,fore:.265,shW:.195,hipW:.092,height:1.72},xf={green:{shirt:"#4CB963",trim:"#D9F7D2",pants:"#34507A",shoes:"#4A3324",hair:"#2B1D14"},orange:{shirt:"#FF9A3A",trim:"#FFE2BC",pants:"#5B4636",shoes:"#33261D",hair:"#3A2416"},ghost:{shirt:"#F4F6FF",trim:"#AAB4E0",pants:"#8E9AC8",shoes:"#5E6893",hair:"#E7E9F2"},ninja:{shirt:"#30354A",trim:"#14172A",pants:"#1E2233",shoes:"#14172A",hair:"#141414",long:!0},alien:{shirt:"#9BE878",trim:"#3E8F2E",pants:"#2F5F2A",shoes:"#1F3A1C",hair:"#2B1D14"},fire:{shirt:"#FF7A1A",trim:"#FFE07A",pants:"#4A1608",shoes:"#2A1208",hair:"#2B1D14"},king:{shirt:"#F5C534",trim:"#FFF2B3",pants:"#6E1A26",shoes:"#3A1F10",hair:"#2B1D14",long:!0},rainbow:{shirt:"rainbow",trim:"#FFFFFF",pants:"#3C2E6B",shoes:"#2A2044",hair:"#2B1D14"},explorer:{shirt:"#DDB06A",trim:"#9A6326",pants:"#6B4A2B",shoes:"#4A2E16",hair:"#2B1D14",boots:!0}};function Af(i,t){let e=Ni,n=xf[i.id]||xf.green,s=i.body==="fire",r=n.shirt==="rainbow",o=Ce("#D49C70",{shininess:16,specular:"#4A3426"}),a=r?Ce("#FFFFFF",{vertexColors:!0,shininess:10}):s?Ce(n.shirt,{emissive:"#FF3D00",emissiveIntensity:.35,shininess:10}):Ce(n.shirt,{shininess:8,specular:"#1A1A1A"}),l=Ce(n.trim,{shininess:8}),c=Ce(n.pants,{shininess:6,specular:"#141414"}),u=Ce(n.shoes,{shininess:26}),f=Ce("#2A211B",{shininess:4}),g=Ce(n.hair,{shininess:22,specular:"#3A3A3A"}),x=new we,y=new we,R=new we;y.position.y=1,R.position.y=-1,x.add(y),y.add(R);let m=(K,pt,ot=0,ht=0,_t=0)=>{let Rt=new Ht(pt,K);return Rt.position.set(ot,ht,_t),Rt},v=(K,pt,ot,ht=12)=>new me(K,pt,ot,ht),P=new we;P.position.y=e.hip,R.add(P);let F=m(c,new Ee(.16,20,12),0,.03,0);F.scale.set(1,.72,.74),P.add(F);let I=new we;I.position.y=e.waist,P.add(I);let O=[[.001,-.13],[.148,-.13],[.15,-.03],[.148,.06],[.152,.16],[.162,.26],[.166,.32],[.16,.375],[.135,.425],[.09,.455],[.062,.466]].map(([K,pt])=>new It(K,pt)),D=new Zn(O,28);r&&(D=Bt(D,(K,pt,ot,ht)=>K.setHSL(((Math.atan2(ht,pt)/Se+1)%1+ot*.6)%1,.72,.6)));let b=m(a,D);b.scale.z=.68,I.add(b);let L=m(l,new ci(.068,.012,6,20),0,.455,0);L.rotation.x=Math.PI/2,L.scale.y=.75,I.add(L);let J=m(Ce("#3A2618",{shininess:30}),v(.156,.155,.045,24),0,-.095,0);J.scale.z=.7,I.add(J),I.add(m(Ce("#D8B25A",{shininess:90,specular:"#FFF2B0"}),new be(.05,.036,.012),0,-.095,.108));let k=new we;if(k.position.set(0,.2,-.112),I.add(k),i.id!=="king"){let K=Ce(i.id==="ninja"?"#262A3A":"#8A5A32",{shininess:12}),pt=Ce(i.id==="ninja"?"#14172A":"#5E3B1F",{shininess:10}),ot=m(K,new Mi(.1,.17,4,12),0,0,-.045);ot.scale.set(1.25,1,.62),k.add(ot);let ht=m(pt,new Ee(.105,14,8,0,Se,0,Math.PI/2),0,.07,-.045);ht.scale.set(1.2,.55,.66),k.add(ht);let _t=m(pt,new be(.15,.09,.04),0,-.06,-.115);k.add(_t);for(let Rt of[-1,1]){let Tt=m(pt,new be(.035,.26,.012),Rt*.085,.31,.118);Tt.rotation.x=-.1,I.add(Tt)}}let st=new we;st.position.y=e.neck,I.add(st),st.add(m(o,v(.05,.056,.12,12),0,.04,0));let dt=new we;dt.position.y=.135,st.add(dt);let et=m(o,new Ee(.1,28,20));et.scale.set(.8,1.08,.98),dt.add(et);let bt=m(o,new Ee(.08,20,14),0,-.05,.016);bt.scale.set(.86,.78,.9),dt.add(bt);let ft=m(Ce("#BC7F55",{shininess:16}),new Ee(.016,10,8),0,-.012,.098);ft.scale.set(.78,1.45,1.15),dt.add(ft);for(let K of[-1,1]){let pt=m(o,new Ee(.024,10,8),K*.079,-.004,-.004);pt.scale.set(.42,1,.72),dt.add(pt)}let Ot=[],xt=Ce("#F7F3EE",{shininess:60}),wt=Ce("#2A1A10",{shininess:120,specular:"#FFFFFF"}),vt=Ce(n.hair==="#E7E9F2"?"#C9CDDB":"#2A1D15");for(let K of[-1,1]){let pt=new we;pt.position.set(K*.032,.012,.081),dt.add(pt);let ot=m(xt,new Ee(.0135,12,10));ot.scale.set(1.2,.82,.7),pt.add(ot),pt.add(m(wt,new Ee(.0078,10,8),0,0,.0072)),pt.add(m(new vn({color:"#FFFFFF"}),new Ee(.0022,6,4),.0025,.0028,.0146)),Ot.push(pt);let ht=m(vt,new be(.032,.008,.01),K*.033,.033,.09);ht.rotation.z=-K*.1,dt.add(ht)}let Dt=new vn({color:"#8C4A3A"}),qt=m(Dt,new ci(.017,.0035,5,14,Math.PI*.7),0,-.046,.088);qt.rotation.z=Math.PI+Math.PI*.15,dt.add(qt);let Kt=m(new vn({color:"#4A1A14"}),new Ee(.011,10,8),0,-.05,.09);Kt.scale.set(1,1.3,.5),Kt.visible=!1,dt.add(Kt);let pe=m(g,new Ee(.106,24,14,0,Se,0,Math.PI*.56));pe.scale.set(.84,1.06,1.02),pe.rotation.x=-.32,pe.position.set(0,.012,-.006),dt.add(pe);let Ut=m(g,new Ee(.1,18,10,Math.PI*1.12,Math.PI*.76,Math.PI*.4,Math.PI*.3));Ut.scale.set(.83,1.06,1),dt.add(Ut);let ne=!!n.long,he=[];for(let K of[1,-1]){let pt=new we;pt.position.set(K*e.shW,.405,0),I.add(pt);let ot=m(a,new Ee(.056,14,10),0,-.012,0);ot.scale.set(.95,1,1.05),pt.add(ot),pt.add(m(ne?a:o,v(.046,.039,e.upper),0,-e.upper/2,0)),ne||pt.add(m(a,v(.06,.053,.15,14),0,-.07,0));let ht=new we;ht.position.y=-e.upper,pt.add(ht),ht.add(m(ne?a:o,new Ee(.04,10,8))),ht.add(m(ne?a:o,v(.039,.03,e.fore),0,-e.fore/2,0)),i.id==="explorer"&&ht.add(m(a,v(.047,.045,.05,12),0,-.01,0));let _t=new we;_t.position.y=-e.fore,ht.add(_t);let Rt=m(o,new Ee(.05,14,10),0,-.075,.004);Rt.scale.set(.5,1.55,.86),_t.add(Rt);let Tt=m(o,new Mi(.011,.04,3,6),-K*.006,-.045,.036);Tt.rotation.x=.45,_t.add(Tt),he.push({s:K,sh:pt,el:ht,wr:_t})}let _e=[];for(let K of[1,-1]){let pt=new we;pt.position.set(K*e.hipW,0,0),P.add(pt),pt.add(m(c,new Ee(.077,14,10))),pt.add(m(c,v(.077,.056,e.thigh,14),0,-e.thigh/2,0));let ot=new we;ot.position.y=-e.thigh,pt.add(ot),ot.add(m(c,new Ee(.056,12,10))),ot.add(m(c,v(.055,.043,e.shin,14),0,-e.shin/2,0)),n.boots&&ot.add(m(u,v(.054,.05,.2,14),0,-e.shin+.08,0));let ht=new we;ht.position.y=-e.shin,ot.add(ht);let _t=m(u,new be(.098,.07,.2),0,-.042,.03);ht.add(_t);let Rt=m(u,new Ee(.05,12,8,0,Se,0,Math.PI/2),0,-.077,.13);Rt.scale.set(.98,1,1.25),ht.add(Rt);let Tt=m(u,new Ee(.05,12,8),0,-.04,-.07);Tt.scale.set(.98,.78,.7),ht.add(Tt);let d=m(f,new be(.104,.014,.27),0,-.075,.035);ht.add(d),_e.push({s:K,hp:pt,kn:ot,an:ht})}let $t=new we;dt.add($t);let ye=[],Le=null,le=null;if(i.acc==="hat"){let K=Ce("#8E5E2E",{shininess:12}),pt=Ce("#3E2612",{shininess:10}),ot=new we;ot.position.set(0,.07,-.004),ot.rotation.set(-.1,0,.04),$t.add(ot);let ht=m(K,v(.175,.18,.012,32));ht.scale.z=.92,ot.add(ht);let _t=m(K,v(.088,.1,.1,24),0,.055,0);_t.scale.z=1.08,ot.add(_t);let Rt=m(K,new Ee(.089,18,8,0,Se,0,Math.PI/2),0,.1,0);Rt.scale.set(1,.3,1.08),ot.add(Rt);let Tt=m(pt,v(.1,.1,.026,24,1),0,.018,0);Tt.scale.z=1.08,ot.add(Tt);let d=Ce("#C8283A",{shininess:12,side:Be}),p=m(d,new ci(.068,.018,8,22),0,.43,.006);p.rotation.x=Math.PI/2+.12,I.add(p);let X=new wi;X.moveTo(-.07,0),X.lineTo(.07,0),X.lineTo(0,-.09),X.closePath();let C=m(d,new is(X),0,.42,.075);C.rotation.x=-.25,I.add(C)}else if(i.acc==="crown"){let K=Ce("#FFC400",{shininess:110,specular:"#FFF2B0",emissive:"#5A3D00",emissiveIntensity:.3}),pt=m(K,v(.092,.088,.045,24,1),0,.085,0);pt.material.side=Be,$t.add(pt);for(let _t=0;_t<6;_t++){let Rt=_t/6*Se;$t.add(m(K,new Mn(.018,.055,6),Math.sin(Rt)*.088,.13,Math.cos(Rt)*.088)),$t.add(m(Ce(_t%2?"#2EA8FF":"#E63946",{shininess:140,specular:"#FFFFFF"}),new Ee(.01,8,6),Math.sin(Rt)*.093,.085,Math.cos(Rt)*.093))}Le=new we,Le.position.set(0,.43,-.1),I.add(Le);let ot=new xn(.46,1.05,4,8);ot.translate(0,-.525,0);let ht=ot.attributes.position;for(let _t=0;_t<ht.count;_t++){let Rt=ht.getX(_t),Tt=ht.getY(_t);ht.setZ(_t,-Math.abs(Rt)*.35*(.4-Tt*.6)-.02),ht.setX(_t,Rt*(1-Tt*.5))}ot.computeVertexNormals(),Le.add(m(Ce("#A81E2D",{side:Be,shininess:18}),ot))}else if(i.acc==="band"){let K=Ce("#D62839"),pt=m(K,new ci(.087,.011,6,28),0,.03,.002);pt.rotation.x=Math.PI/2-.12,pt.scale.set(.92,1.12,1),$t.add(pt);for(let ht of[-1,1]){let _t=m(K,new be(.025,.012,.15),ht*.02,.02,-.16);_t.rotation.set(.6,ht*.35,0),$t.add(_t),$t.userData["tail"+ht]=_t}let ot=m(Ce("#22263A",{side:Be}),new Ee(.103,22,10,Math.PI*.1,Math.PI*.8,Math.PI*.52,Math.PI*.34));ot.scale.set(.84,1.1,1.02),$t.add(ot)}else if(i.acc==="antenna")for(let K of[-1,1]){let pt=m(Ce("#2C6B23"),v(.005,.005,.13,6),K*.045,.14,0);pt.rotation.z=-K*.35,$t.add(pt),$t.add(m(Ce("#FF5DA2",{emissive:"#FF5DA2",emissiveIntensity:.35}),new Ee(.02,10,8),K*.068,.2,0))}else if(i.acc==="leaf"){let K=m(Ce("#6B3E1F"),v(.004,.005,.05,6),0,.125,.01);K.rotation.z=-.2,$t.add(K);let pt=m(Ce("#3FB950"),new Ee(.04,12,8),.03,.15,.01);pt.scale.set(1,.2,.5),pt.rotation.z=.45,$t.add(pt)}else if(i.acc==="star"){let K=new wi;for(let pt=0;pt<10;pt++){let ot=pt/10*Se-Math.PI/2,ht=pt%2?.03:.07;pt?K.lineTo(Math.cos(ot)*ht,-Math.sin(ot)*ht):K.moveTo(Math.cos(ot)*ht,-Math.sin(ot)*ht)}le=m(Ce("#FFE066",{emissive:"#FFB703",emissiveIntensity:.5,shininess:90}),new po(K,{depth:.02,bevelEnabled:!0,bevelSize:.006,bevelThickness:.006,bevelSegments:1}),0,.26,0),$t.add(le)}if(i.acc==="blush"||i.id==="orange")for(let K of[-1,1]){let pt=m(new vn({color:"#FF7896",transparent:!0,opacity:.45}),new Bn(.014,12),K*.05,-.022,.083);pt.rotation.y=K*.55,dt.add(pt)}if(s){for(let pt=0;pt<7;pt++){let ot=pt/7*Math.PI-Math.PI/2,ht=m(new vn({color:pt%2?"#FFB13B":"#FF5A1F",transparent:!0,opacity:.85,depthWrite:!1,blending:zn}),new Mn(.045,.2,8,1,!0),Math.sin(ot)*.15,.42,-.06-Math.abs(Math.cos(ot))*.04);ht.userData.ph=pt,I.add(ht),ye.push(ht)}let K=new qn(new Un({map:t,color:"#FF6A1F",transparent:!0,opacity:.45,depthWrite:!1,blending:zn}));K.scale.setScalar(1.8),K.position.y=.25,I.add(K)}let G=new we;x.add(G),G.visible=!1;let At=m(Ce("#7A5230",{shininess:30}),v(.006,.013,2.4,6),0,1,0);G.add(At),G.add(m(Ce("#2E2E2E"),v(.024,.024,.05,10),.03,.12,0));let it=new dn;it.position.y=2.2,G.add(it),O1(x,new Set([b,qt,Kt,...ye,...le?[le]:[]])),wr(x);let mt=k1();return{id:i.id,human:!0,root:x,body:y,rig:R,pelvis:P,spine:I,neck:st,head:dt,torso:b,arms:he,legs:_e,eyes:Ot,smile:qt,ooh:Kt,acc:$t,flames:ye,fire:s,cape:Le,star:le,pack:k,rod:G,rodTip:it,bodyMat:a,...mt,turn:0,blink:0,nextBlink:2}}var B1=new On({color:"#FFFFFF",vertexColors:!0,shininess:14,specular:"#2A2A2A"});function O1(i,t){let e=[];i.traverse(n=>{n.isMesh||e.push(n)});for(let n of e){let s=n.children.filter(a=>a.isMesh&&!t.has(a)&&a.material&&a.material.isMeshPhongMaterial&&a.material.side!==Be&&!(a.material.emissive&&a.material.emissive.getHex())&&!a.material.transparent);if(s.length<1)continue;let r=[];for(let a of s){a.updateMatrix();let l=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone();for(let c of Object.keys(l.attributes))c!=="position"&&c!=="normal"&&!(c==="color"&&a.material.vertexColors)&&l.deleteAttribute(c);if(l.attributes.normal||l.computeVertexNormals(),l.applyMatrix4(a.matrix),!l.attributes.color){let c=l.attributes.position.count,u=new Float32Array(c*3),f=a.material.color;for(let g=0;g<c;g++)u[g*3]=f.r,u[g*3+1]=f.g,u[g*3+2]=f.b;l.setAttribute("color",new qe(u,3))}r.push(l),n.remove(a),a.geometry.dispose()}let o=new Ht(nn(r),B1);o.castShadow=!0,n.add(o)}}function k1(){let i=new we,t=["#E63946","#FFFFFF","#FFB703","#FFFFFF","#2EA8FF","#FFFFFF"],e=Bt(new Ee(1.7,24,8,0,Se,0,Math.PI*.42),(u,f,g,x)=>u.set(t[Math.floor((Math.atan2(x,f)/Se+1)%1*12+1e-4)%6])),n=new Te({vertexColors:!0,side:Be,transparent:!0,opacity:1}),s=new Ht(e,n);s.scale.set(1,.62,1),s.castShadow=!0;let r=new Float32Array(60),o=new ps(new Ze,new es({color:"#4A4A5A",transparent:!0,opacity:.85}));o.geometry.setAttribute("position",new qe(r,3)),o.frustumCulled=!1;let a=new we;a.position.y=1.6,a.add(s),i.add(a,o),i.visible=!1;let l=new Ht(e,n.clone());l.visible=!1,l.castShadow=!1;let c=new Ht(new Ze,Ce("#8B5A2B",{shininess:5}));return c.visible=!1,c.castShadow=!0,{chute:i,canopy:s,canopyHolder:a,lines:o,drop:l,rope:c}}function Ms(i={}){let t={skin:"#C98E62",thobe:"#F2EEE4",bisht:"#5B3A24",shmagh:"#C8102E",agal:"#141414",beard:"#4A4440",beads:!0,gold:!0,...i},e=new we,n=Ce(t.skin,{shininess:12}),s=Ce(t.thobe,{shininess:8}),r=Ce(t.bisht||t.thobe,{shininess:14,side:Be}),o=new Ht(new Zn([new It(.001,0),new It(.27,0),new It(.275,.1),new It(.25,.5),new It(.232,.9),new It(.222,1.2),new It(.2,1.34),new It(.12,1.42),new It(.05,1.45)],30),s);e.add(o);for(let D of[-1,1]){let b=new Ht(new be(.1,.04,.2),Ce("#4A2E18"));b.position.set(D*.09,.02,.2),e.add(b)}let a=new Ht(new Zn([new It(.245,.06),new It(.295,.08),new It(.285,.5),new It(.265,.9),new It(.255,1.2),new It(.24,1.33),new It(.16,1.41)],30,.62,Se-1.24),r);e.add(a),a.visible=!!t.bisht;let l=Ce("#D4AF37",{shininess:90,specular:"#FFF2B0"});for(let D of[-1,1]){let b=D*.62,L=[[.247,.08],[.297,.1],[.287,.5],[.267,.9],[.257,1.2],[.242,1.33],[.162,1.41]].map(([J,k])=>new j(Math.sin(b)*(J+.006),k,Math.cos(b)*(J+.006)));t.bisht&&t.gold&&e.add(new Ht(new Si(new Yn(L),20,.014,6),l))}let c=[];for(let D of[-1,1]){let b=new we;b.position.set(D*.25,1.3,0),e.add(b);let L=new Ht(new Mi(.072,.28,4,10),r);L.position.y=-.18,b.add(L);let J=new we;J.position.y=-.36,b.add(J);let k=new Ht(new Mi(.068,.22,4,10),r);k.position.y=-.14,J.add(k);let st=new Ht(new me(.055,.06,.05,10),s);st.position.y=-.3,J.add(st);let dt=new Ht(new Ee(.052,12,10),n);if(dt.position.y=-.36,dt.scale.set(.9,1.1,.8),J.add(dt),D<0&&t.beads){let et=new Ht(new ci(.06,.011,6,18),Ce("#E0A03C",{shininess:80,specular:"#FFF0C8"}));et.position.set(0,-.44,.02),et.rotation.y=.4,J.add(et)}b.rotation.z=D*.12,J.rotation.x=-.25,c.push({sh:b,el:J,s:D})}let u=new Ht(new me(.06,.07,.1,10),n);u.position.y=1.46,e.add(u);let f=new we;f.position.y=1.6,e.add(f);let g=new Ht(new Ee(.155,28,20),n);g.scale.set(.94,1.08,1),f.add(g);let x=new Ht(new Ee(.034,10,8),Ce("#B97C52"));x.position.set(0,-.005,.15),x.scale.set(.85,1.1,1.25),f.add(x);for(let D of[-1,1]){let b=new Ht(new Ee(.019,10,8),Ce("#1B140F",{shininess:120,specular:"#FFFFFF"}));b.position.set(D*.055,.025,.135),f.add(b);let L=new Ht(new be(.065,.016,.02),Ce("#3A3430"));L.position.set(D*.056,.058,.138),L.rotation.z=-D*.12,f.add(L);let J=new Ht(new Mi(.019,.06,3,6),Ce("#2A2420"));J.position.set(D*.034,-.045,.142),J.rotation.z=D*1.15,f.add(J)}let y=new Ht(new Ee(.16,24,10,Math.PI/2-1.2,2.4,Math.PI*.6,Math.PI*.3),Ce(t.beard==="none"?"#000":t.beard,{side:Be,shininess:5}));f.add(y),y.visible=t.beard!=="none";let R=new Ht(new Ee(.026,10,8),new vn({color:"#4A1A14"}));R.position.set(0,-.07,.143),R.scale.set(1,.3,.5),f.add(R);let m=di(128,128,(D,b,L)=>{D.fillStyle="#FBF8F2",D.fillRect(0,0,b,L),D.fillStyle=t.shmagh;for(let J=0;J<L;J+=16)for(let k=0;k<b;k+=16)D.fillRect(k+2,J+2,7,7),D.fillRect(k+9,J+9,5,5),D.fillRect(k+9,J+2,2,2),D.fillRect(k+2,J+11,2,2)},[5,5]),v=new Te({map:m,side:Be}),P=new Ht(new Ee(.168,28,14,0,Se,0,Math.PI*.52),v);P.rotation.x=-.42,P.position.y=.01,f.add(P);let F=new Ht(new Zn([new It(.168,.02),new It(.18,-.06),new It(.2,-.16),new It(.24,-.26),new It(.28,-.33)],28,1.15,Se-2.3),v);f.add(F);let I=new Ht(new xn(.2,.36),v);I.position.set(.17,-.25,.1),I.rotation.set(-.15,.6,-.08),f.add(I);let O=Ce(t.agal,{shininess:40});for(let[D,b]of[[.07,.154],[.097,.139]]){let L=new Ht(new ci(b,.015,8,36),O);L.position.set(0,D*.913,-D*.408),L.rotation.x=Math.PI/2-.42,f.add(L)}return wr(e),{root:e,head:f,arms:c,mouth:R,yaw:0}}var Gh={id:"natta-island",name:"\u062C\u0632\u064A\u0631\u0629 \u0646\u0637\u0651\u0629",half:4330,seed:7531,sea:-300,features:[{type:"mountain",id:"M1",x:0,z:0},{type:"valley",id:"V1",x:-200,z:1350}],spawn:"fajr"},Bs=(i,t)=>Math.exp(-(i*i)/(t*t)),ac=(i,t,e)=>{let n=Math.max(e-Math.abs(i-t),0)/e;return Math.max(i,t)+n*n*e*.25},Ef=(i,t,e)=>-ac(-i,-t,e);function Vh(i){let t=new Map,e=(n,s)=>n*100003+s;return{add(n,s){let r=Math.floor((Math.min(n.ax,n.bx)-s)/i),o=Math.floor((Math.max(n.ax,n.bx)+s)/i),a=Math.floor((Math.min(n.az,n.bz)-s)/i),l=Math.floor((Math.max(n.az,n.bz)+s)/i);for(let c=r;c<=o;c++)for(let u=a;u<=l;u++){let f=e(c,u),g=t.get(f);g||(g=[],t.set(f,g)),g.push(n)}},at(n,s){return t.get(e(Math.floor(n/i),Math.floor(s/i)))}}}function Hh(i,t,e,n){let s=Me(((t-i.ax)*i.dx+(e-i.az)*i.dz)*i.il2,0,1),r=i.ax+i.dx*s,o=i.az+i.dz*s;return n.d=Math.hypot(t-r,e-o),n.t=s,n}var oc=(i,t,e)=>{let n=t.x-i.x,s=t.z-i.z;return{ax:i.x,az:i.z,bx:t.x,bz:t.z,dx:n,dz:s,il2:1/Math.max(1e-6,n*n+s*s),a:i,b:t,...e}};function Tf(i,t){let e=[];for(let s=0;s<i.length-1;s++){let r=i[Math.max(0,s-1)],o=i[s],a=i[s+1],l=i[Math.min(i.length-1,s+2)],c=Math.hypot(a[0]-o[0],a[1]-o[1]),u=Math.max(1,Math.round(c/t));for(let f=0;f<u;f++){let g=f/u,x=g*g,y=x*g,R=(m,v,P,F)=>.5*(2*v+(-m+P)*g+(2*m-5*v+4*P-F)*x+(-m+3*v-3*P+F)*y);e.push({x:R(r[0],o[0],a[0],l[0]),z:R(r[1],o[1],a[1],l[1])})}}let n=i[i.length-1];return e.push({x:n[0],z:n[1]}),e}function Cf(i,t,e){let n=i.sea??-300,s=i.half||4330,r=t.x,o=t.z,a=hn(i.seed||7),l=286,c=0;function u(Y){let Q=3420+300*Math.sin(3*Y+.7)+220*Math.sin(5*Y+2.1)+140*Math.sin(9*Y+4)+70*Math.sin(15*Y+1.3);return Q-=1650*Bs(wn(Y,c),.27),Q+=260*Bs(wn(Y,-.52),.1)+220*Bs(wn(Y,.55),.09),Q-=380*Bs(wn(Y,-1.95),.22),Q+=250*Bs(wn(Y,Math.PI),.15),Math.min(Q,s-300)}function f(Y,Q){let Ft=(un(Y*.0011+3.1,Q*.0011-1.7)-.5)*520,Ct=(un(Y*.0011-4.3,Q*.0011+2.2)-.5)*520,Vt=Y+Ft-r,Pt=Q+Ct-o;return u(Math.atan2(Pt,Vt))-Math.hypot(Vt,Pt)+(un(Y*.006,Q*.006)-.5)*60}let g=[{a:1.32,w:.26},{a:-.84,w:.13},{a:-2.55,w:.2},{a:2.3,w:.1}];function x(Y,Q,Ft){let Ct=0;for(let Vt of g)Ct=Math.max(Ct,Bs(wn(Y,Vt.a),Vt.w));return oe(.35,.75,Ct*(.75+.5*yn(Q*.004,Ft*.004)))}let y=[{a:.95,w:.45,r:760,h:16},{a:-2.2,w:.5,r:900,h:18},{a:2.4,w:.35,r:640,h:14},{a:-.45,w:.3,r:1200,h:12},{a:1.9,w:.4,r:1300,h:15},{a:-1.45,w:.35,r:560,h:13}];function R(Y,Q){let Ft=Y-r,Ct=Q-o,Vt=Math.hypot(Ft,Ct);if(Vt<300)return l;let Pt=Math.atan2(Ct,Ft),Pe=2150+380*Math.sin(3*Pt+.4)+260*Math.sin(5*Pt+2.2)+160*Math.sin(8*Pt+1.1);Pe-=700*Bs(wn(Pt,c),.33),Pe*=1+(un(Y*.0016+9,Q*.0016)-.5)*.35;let Z=Me((Vt-300)/(Pe-300),0,1),rt=l*(1-Z*Z*(3-2*Z));rt*=1+.1*Math.sin(11*Pt+Vt*.0035)*oe(320,700,Vt)*(1-Z);for(let M of y){let w=oe(M.w,M.w*.55,Math.abs(wn(Pt,M.a)));w>0&&(rt-=M.h*w*oe(M.r-6,M.r+6,Vt)*(1-Z*.6))}return rt+=((un(Y*.004+2,Q*.004-6)-.5)*46+(un(Y*.02,Q*.02)-.5)*5)*oe(300,650,Vt),rt}let m=[{id:"falcons",x:1900,z:1900,h:230,r:820},{id:"kohl",x:1550,z:-1950,h:185,r:600,dark:!0},{id:"fort",x:-2500,z:-2e3,h:58,r:300}];function v(Y,Q,Ft){let Ct=Math.hypot(Q-Y.x,Ft-Y.z);if(Ct>Y.r*1.3)return-1e9;let Vt=Ct*(1+.28*(un(Q*.003+Y.x*.01,Ft*.003)-.5)),Pt=Me(1-Vt/Y.r,0,1);return Y.h*Math.pow(Pt,1.6)*(.85+.3*un(Q*.01,Ft*.01))*(1+.12*Math.sin(7*Math.atan2(Ft-Y.z,Q-Y.x)+Vt*.012)*Pt*oe(0,90,Ct))}let P={x:-2e3,z:1400,r:950,amp:78},F={x:-1e3,z:2500,r:520,top:112,ramps:[-2.2,2.6]};function I(Y,Q){let Ft=F,Ct=Math.hypot(Y-Ft.x,Q-Ft.z);if(Ct>Ft.r+420)return-1e9;let Vt=Math.atan2(Q-Ft.z,Y-Ft.x),Pt=Ft.r*(1+.18*(yn(Vt*2.2+11,3.3)-.5)),Pe=0;for(let rt of Ft.ramps)Pe=Math.max(Pe,oe(.28,.12,Math.abs(wn(Vt,rt))));let Z=oe(Pt+te(10,300,Pe),Pt-26,Ct);return(Ft.top+(un(Y*.004+2,Q*.004)-.5)*22+(un(Y*.02,Q*.02)-.5)*3)*Z}let O=null;function D(Y,Q){let Ft=f(Y,Q),Ct=Math.atan2(Q-o,Y-r),Vt=x(Ct,Y,Q),Pt;Ft<0?Pt=Math.max(-38,Ft*te(.035,.3,Vt)-.4):Pt=1.4+Math.min(Ft,1500)*.011+(un(Y*.0035+1,Q*.0035+8)-.5)*26*oe(40,500,Ft)+(un(Y*.03,Q*.03)-.5)*1.4+Vt*26*oe(-4,28,Ft);let Pe=oe(-25,160,Ft);if(Pe>0){let Z=R(Y,Q);for(let h of m){let _=v(h,Y,Q);_>0&&(Z=te(Z,ac(Z,_,18),oe(0,15,_)))}let rt=Math.hypot(Y-P.x,Q-P.z);rt<P.r&&(Pt+=P.amp*oe(P.r,P.r*.45,rt)*Math.pow(un(Y*.0055+3,Q*.0055-2),1.5)*Pe);let M=Z*Pe;Pt=te(Math.max(Pt,M),ac(Pt,M,14),oe(0,12,M));let w=I(Y,Q)*Pe;w>0&&(Pt=te(Math.max(Pt,w),ac(Pt,w,10),oe(0,10,w)))}if(O){let Z=Math.hypot(Y-O.x,Q-O.z);Z<O.r*1.6&&(Pt=Math.max(Pt,13*Math.pow(Me(1-Z/O.r,0,1),1.2)*(.8+.4*un(Y*.02,Q*.02))-1.2));let rt=Hh(O.bar,Y,Q,b);rt.d<40&&(Pt=Math.max(Pt,-.5+(un(Y*.02,Q*.02)-.5)*.5-oe(18,40,rt.d)*3))}return Pt}let b={d:0,t:0};function L(Y,Q=600){let Ft=Math.cos(Y),Ct=Math.sin(Y),Vt=Q;for(;Vt<s&&f(r+Ft*Vt,o+Ct*Vt)>0;)Vt+=12;return{r:Vt,x:r+Ft*Vt,z:o+Ct*Vt,c:Ft,s:Ct}}let J=(Y,Q,Ft=0)=>({x:Y.x-Y.c*Q-Y.s*Ft,z:Y.z-Y.s*Q+Y.c*Ft});{let Q=L(2.29),Ft=r+Math.cos(2.29)*(Q.r+330),Ct=o+Math.sin(2.29)*(Q.r+330);O={x:Ft,z:Ct,r:170,bar:oc({x:Q.x-Math.cos(2.29)*30,z:Q.z-Math.sin(2.29)*30},{x:Ft,z:Ct})}}let k=L(c),st=J(k,230),dt=L(-.52),et=J(dt,45),bt=L(-1.94),ft={...J(bt,380),r:640},Ot=L(Math.PI),xt=J(Ot,70),wt=L(1.32),vt=J(L(1.08),60),Dt={x:e.x+60,z:e.z,r:210},qt={x:1150,z:-820,r:230},Kt={x:560,z:-1580,r:70},pe={x:900,z:-2350,r:250},Ut={x:-2500,z:-2e3},ne={x:st.x-300,z:640,r:340},he={x:-1500,z:-1650,r:520},_e=[],$t=(Y,Q)=>D(Y,Q);_e.push({x:st.x,z:st.z,r:52,fall:40,a:Math.max(7,$t(st.x,st.z))}),_e.push({x:Dt.x,z:Dt.z,r:Dt.r-70,fall:70,a:$t(Dt.x,Dt.z)}),_e.push({x:et.x,z:et.z,r:26,fall:25,a:Math.max(4,$t(et.x,et.z))}),_e.push({x:Kt.x,z:Kt.z,r:Kt.r,fall:40,a:$t(Kt.x,Kt.z)}),_e.push({x:Ut.x,z:Ut.z,r:34,fall:30,a:$t(Ut.x,Ut.z)});function ye(Y,Q,Ft){for(let Vt of _e){let Pt=Math.hypot(Y-Vt.x,Q-Vt.z);Pt<Vt.r+Vt.fall&&(Ft=te(Vt.a,Ft,oe(Vt.r,Vt.r+Vt.fall,Pt)))}let Ct=Math.hypot(Y-qt.x,Q-qt.z);if(Ct<qt.r+60){let Vt=Ft/3,Pt=Vt-Math.floor(Vt),Pe=(Math.floor(Vt)+oe(.8,1,Pt))*3;Ft=te(Pe,Ft,oe(qt.r,qt.r+60,Ct))}return Ft}let Le=[];for(let Y=0;Y<=24;Y++){let Q=Y/24*Math.PI*2;Le.push([r+Math.cos(Q)*278,o+Math.sin(Q)*278])}let le=Y=>[Y.x,Y.z],G=[{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0641\u062C\u0631",hw:1.9,way:[le(st),[st.x-140,220],[1520,120],[1330,260],[1150,150],[980,270],[820,150],[660,250],[520,120],[400,200],[300,80],[195,42]]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u063A\u064A\u0645",hw:1.5,way:Le},{name:"\u062F\u0631\u0628 \u0627\u0644\u0631\u0637\u0628",hw:1.6,way:[le(st),[st.x-60,420],[ne.x,ne.z],[1500,1100],[1650,1450]]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0642\u0631\u064A\u0629",hw:1.8,way:[le(st),[st.x-120,-200],[1450,-450],[qt.x+60,qt.z+120],[qt.x,qt.z],[qt.x+250,-1050],[et.x-300,et.z+150],le(et)]},{name:"\u062F\u0631\u0628 \u0627\u0644\u0628\u062D\u064A\u0631\u0629",hw:1.4,way:[[qt.x,qt.z],[1180,-1350],[pe.x+300,pe.z+120],[pe.x+200,pe.z+300],[Kt.x+150,Kt.z-200],le(Kt)]},{name:"\u062F\u0631\u0628 \u0627\u0644\u062D\u0637\u0651\u0627\u0628\u064A\u0646",hw:1.4,way:[[r-20,o-278],[60,-650],[300,-1100],le(Kt)]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0647\u0648\u0631",hw:1.6,way:[[r-197,o-197],[-600,-700],[-1e3,-1200],[he.x,he.z],[ft.x-150,ft.z+350],le(ft)]},{name:"\u062F\u0631\u0628 \u0627\u0644\u062D\u0635\u0646",hw:1.3,way:[[he.x,he.z],[-2050,-1830],le(Ut)]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0628\u0644\u0648\u0637",hw:1.6,way:[[r-278,o],[-900,-100],[-1600,-250],[-2300,-200],[xt.x+250,xt.z-100],le(xt)]},{name:"\u0637\u0631\u064A\u0642 \u0627\u0644\u0648\u0627\u062F\u064A",hw:1.6,way:[[r,o+278],[-150,700],[-250,1100],[e.x-75,e.z],[-700,1500],[-1300,1700],[-1800,2150],[O.bar.ax+60,O.bar.az-60],[O.bar.ax,O.bar.az]]},{name:"\u062F\u0631\u0628 \u0627\u0644\u0647\u0636\u0628\u0629",hw:1.3,way:[[-1300,1700],[-1e3+Math.cos(-2.2)*900,2500+Math.sin(-2.2)*900],[F.x,F.z]]},{name:"\u062F\u0631\u0628 \u0627\u0644\u0634\u0644\u0627\u0644",hw:1.4,way:[[r+197,o+197],[480,600],[700,1150],[560,1780],[650,2400],[vt.x-120,vt.z-200],le(vt)]}],At=[],it=Vh(48);for(let Y of G){let Q=Tf(Y.way,5);for(let Ct of Q)Ct.a0=ye(Ct.x,Ct.z,D(Ct.x,Ct.z));for(let Ct=0;Ct<Q.length;Ct++){let Vt=0,Pt=0;for(let Pe=-6;Pe<=6;Pe++){let Z=Q[Me(Ct+Pe,0,Q.length-1)];Vt+=Z.a0,Pt++}Q[Ct].a=Math.max(Vt/Pt,.6)}let Ft={name:Y.name,hw:Y.hw,pts:Q};At.push(Ft);for(let Ct=0;Ct<Q.length-1;Ct++)it.add(oc(Q[Ct],Q[Ct+1],{road:Ft}),Y.hw+8)}let mt={d:0,t:0};function K(Y,Q){let Ft=it.at(Y,Q);if(!Ft)return null;let Ct=null,Vt=1e9,Pt=0;for(let Pe of Ft)Hh(Pe,Y,Q,mt),mt.d<Vt&&(Vt=mt.d,Ct=Pe,Pt=mt.t);return Ct?{d:Vt,a:te(Ct.a.a,Ct.b.a,Pt),hw:Ct.road.hw,road:Ct.road}:null}function pt(Y,Q,Ft){let Ct=K(Y,Q);return Ct&&Ct.d<Ct.hw+6&&(Ft=te(Ct.a,Ft,oe(Ct.hw+.3,Ct.hw+6,Ct.d))),Ft}let ot={x:590,z:1950,nx:.17,nz:-.985,len:300,h:16},ht=()=>0,_t=[{id:"silver",name:"\u0646\u0647\u0631 \u0627\u0644\u0641\u0636\u0629",w0:2.4,w1:8,depth:1.5,way:[[520,720],[640,1050],[660,1400],[600,1750],[592,1950],[620,2300],[760,2700],[900,3100],[wt.x+wt.c*150,wt.z+wt.s*150]]},{id:"anbar",name:"\u0646\u0647\u0631 \u0627\u0644\u0639\u0646\u0628\u0631",w0:2.2,w1:7,depth:1.4,way:[[-330,-650],[-470,-1e3],[-640,-1450],[-800,-1900],[-960,-2300],[ft.x+60,ft.z+330],[ft.x,ft.z]]},{id:"dates",name:"\u0633\u0627\u0642\u064A\u0629 \u0627\u0644\u0631\u0637\u0628",w0:1.2,w1:2.4,depth:.7,way:[[640,320],[900,480],[1250,560],[ne.x+100,ne.z-40],[k.x+60,560]]}],Rt=[],Tt=Vh(64),d=[],p=(Y,Q)=>pt(Y,Q,ye(Y,Q,D(Y,Q)+ht(Y,Q)));for(let Y of _t){let Q=Tf(Y.way,8),Ft=1e9;for(let Vt=0;Vt<Q.length;Vt++){let Pt=Q[Vt],Pe=Vt/(Q.length-1),Z=p(Pt.x,Pt.z);Ft=Math.min(Ft-.03,Z-te(.9,.5,Pe)),Pt.lv=Math.max(Ft,Y.id==="anbar"?.3:.05),Pt.w=te(Y.w0,Y.w1,Math.pow(Pe,.8)),Vt&&Q[Vt-1].lv-Pt.lv>2.5&&d.push({river:Y.id,x:(Pt.x+Q[Vt-1].x)/2,z:(Pt.z+Q[Vt-1].z)/2,top:Q[Vt-1].lv,bot:Pt.lv,w:Pt.w,dx:Pt.x-Q[Vt-1].x,dz:Pt.z-Q[Vt-1].z})}let Ct={...Y,pts:Q};Rt.push(Ct);for(let Vt=0;Vt<Q.length-1;Vt++)Tt.add(oc(Q[Vt],Q[Vt+1],{river:Ct}),Q[Vt].w+70)}function X(Y,Q){let Ft=Tt.at(Y,Q);if(!Ft)return null;let Ct=null,Vt=1e9,Pt=0;for(let Pe of Ft)Hh(Pe,Y,Q,mt),mt.d<Vt&&(Vt=mt.d,Ct=Pe,Pt=mt.t);return Ct?{d:Vt,lv:te(Ct.a.lv,Ct.b.lv,Pt),w:te(Ct.a.w,Ct.b.w,Pt),river:Ct.river,dx:Ct.dx,dz:Ct.dz}:null}function C(Y,Q,Ft){let Ct=X(Y,Q);if(!Ct)return Ft;if(Ct.d<Ct.w){let Vt=K(Y,Q),Pt=Vt&&Vt.d<Vt.hw+3?.35:Ct.river.depth;Ft=Math.min(Ft,Ct.lv-.12-Pt*(1-(Ct.d/Ct.w)**2))}else Ft=Math.min(Ft,Ef(Ct.lv+.25+(Ct.d-Ct.w)*.42,Ft,1.5));return Ft}let V=d.filter(Y=>Y.river==="silver").sort((Y,Q)=>Q.top-Q.bot-(Y.top-Y.bot))[0],B=V?{x:V.x,z:V.z}:{x:ot.x,z:ot.z},at=ye(pe.x,pe.z,D(pe.x,pe.z))-2.5,ut=[{id:"moon",name:"\u0628\u062D\u064A\u0631\u0629 \u0627\u0644\u0642\u0645\u0631",x:pe.x,z:pe.z,r:pe.r,lv:at}],Et=(Y,Q,Ft)=>Y.r*(1+.2*(yn(Math.atan2(Ft-Y.z,Q-Y.x)*2.4+5,1.1)-.5)),U=.3;function T(Y,Q,Ft){for(let Vt of ut){let Pt=Math.hypot(Y-Vt.x,Q-Vt.z);if(Pt>Vt.r*1.25+160)continue;let Pe=Et(Vt,Y,Q);Pt<Pe?Ft=Math.min(Ft,Vt.lv-.2-3.6*(1-(Pt/Pe)**2)):Ft=Math.min(Ft,Ef(Vt.lv+.35+(Pt-Pe)*.18,Ft,1.5))}let Ct=Math.hypot(Y-ft.x,Q-ft.z);if(Ct<ft.r){let Vt=.22+(un(Y*.022+4,Q*.022)-.47)*2.4;Ft=te(Vt,Ft,oe(ft.r*.55,ft.r,Ct))}return Ft}let tt=[],nt=[],yt=Vh(32),ct=(Y,Q=!0)=>{if(tt.push(Y),Q&&Y.w){let Ft={x:Y.x,z:Y.z,c:Math.cos(Y.rot||0),s:Math.sin(Y.rot||0),hw:Y.w/2+.6,hd:Y.d/2+.6,a:null};nt.push(Ft),Y.pad=Ft,yt.add(oc(Ft,Ft),Math.max(Ft.hw,Ft.hd)+4)}return Y},gt=(Y,Q)=>T(Y,Q,C(Y,Q,pt(Y,Q,ye(Y,Q,D(Y,Q)+ht(Y,Q))))),Mt=(Y,Q,Ft)=>{let Ct=K(Y,Q);if(Ct&&Ct.d<Ct.hw+Ft)return!1;let Vt=X(Y,Q);return Vt&&Vt.d<Vt.w+Ft+4?!1:!tt.some(Pt=>Math.hypot(Pt.x-Y,Pt.z-Q)<Ft+Math.max(Pt.w||2,Pt.d||2)*.6)};{let Y=st,Q=0,Ft=(Ct,Vt)=>({x:Y.x+Ct,z:Y.z+Vt});ct({kind:"square",...Ft(0,0),rot:Q,w:64,d:96,h:0},!1),ct({kind:"fountain",...Ft(0,0),rot:Q,r:3.4},!1);for(let Ct=0;Ct<8;Ct++){let Vt=Ct/8*Math.PI*2+.2;ct({kind:"palm",...Ft(Math.cos(Vt)*15,Math.sin(Vt)*15),s:.95+Ct%3*.08},!1)}for(let Ct=0;Ct<5;Ct++)ct({kind:"stall",...Ft(-18+Ct*9,-38),rot:Math.PI/2,w:3.2,d:2.4,h:2.6,tint:Ct});ct({kind:"teahouse",...Ft(-20,30),rot:Math.atan2(-30,20),w:6,d:10,h:3.3}),ct({kind:"board",...Ft(25,0),rot:Math.PI,w:1.9,d:4.6,h:4.2}),ct({kind:"signpost",...Ft(-26,8),rot:0},!1),ct({kind:"gate",...Ft(-31,0),rot:0,w:1.2,d:9,h:5.2},!1);for(let[Ct,Vt]of[[-30,-46],[-30,46],[30,-46],[30,46],[0,-46],[0,46],[-30,22],[-30,-22]])ct({kind:"lamp",...Ft(Ct,Vt)},!1);ct({kind:"pier",x:k.x+k.c*6,z:k.z-40+k.s*6,rot:Math.atan2(k.s,k.c),w:46,d:3,h:0},!1);for(let Ct=0;Ct<3;Ct++)ct({kind:"boat",x:k.x+10+Ct*7,z:k.z-30+Ct*9,rot:.4+Ct*.5},!1)}{let Y=qt;for(let Q=0,Ft=0;Ft<22&&Q<900;Q++){let Ct=a()*Math.PI*2,Vt=Math.sqrt(a())*(Y.r-25),Pt=Y.x+Math.cos(Ct)*Vt,Pe=Y.z+Math.sin(Ct)*Vt;if(!Mt(Pt,Pe,8))continue;let Z=(_,S)=>gt(Pt+_,Pe+S),rt=Z(4,0)-Z(-4,0),M=Z(0,4)-Z(0,-4),w=Math.atan2(-M,-rt)+Math.round(a()*2-1)*.05,h=a()<.3;ct({kind:"house",x:Pt,z:Pe,rot:w,w:h?7:8+a()*2,d:h?9:9+a()*2.5,h:h?6.4:3.2,floors:h?2:1,tint:a()}),Ft++}ct({kind:"well",x:Y.x+6,z:Y.z+4,r:1.1},!1)}{for(let Y=0;Y<5;Y++){let Q=Y/5*Math.PI*2+.4,Ft=Kt.x+Math.cos(Q)*24,Ct=Kt.z+Math.sin(Q)*24;ct({kind:"hut",x:Ft,z:Ct,rot:Q+Math.PI,w:4,d:5,h:2.4})}ct({kind:"logs",x:Kt.x+6,z:Kt.z-5,rot:.6,w:4.5,d:1.8,h:1.2}),ct({kind:"campfire",x:Kt.x,z:Kt.z},!1)}{let Y=ft.x+40,Q=ft.z+120;_e.push({x:Y,z:Q,r:26,fall:14,a:1.1}),ct({kind:"mudhif",x:Y,z:Q,rot:.3,w:6.5,d:20,h:5.8});for(let Ft=0;Ft<4;Ft++){let Ct=1.2+Ft*1.3,Vt=Y+Math.cos(Ct)*22,Pt=Q+Math.sin(Ct)*22;_e.push({x:Vt,z:Pt,r:6,fall:8,a:.9}),ct({kind:"reedhut",x:Vt,z:Pt,rot:Ct,w:3.2,d:6,h:3})}for(let Ft=0;Ft<3;Ft++)ct({kind:"canoe",x:Y-30+Ft*9,z:Q-20-Ft*6,rot:1+Ft*.7,float:!0},!1)}{ct({kind:"lighthouse",x:et.x,z:et.z,rot:0,w:6,d:6,h:19}),ct({kind:"house",x:et.x-16,z:et.z+4,rot:.3,w:6,d:7,h:3,floors:1,tint:.8,white:!0});for(let Y=0;Y<2;Y++)ct({kind:"boat",x:dt.x+18+Y*8,z:dt.z+30+Y*12,rot:1.6+Y*.4},!1)}{let Y=Ut,Q=17;for(let[Ct,Vt]of[[-1,-1],[1,-1],[1,1],[-1,1]])ct({kind:"ftower",x:Y.x+Ct*Q,z:Y.z+Vt*Q,r:3.2,h:6+a()*3},!1);[[[-1,-1],[1,-1]],[[1,-1],[1,1]],[[1,1],[-1,1]],[[-1,1],[-1,-1]]].forEach(([[Ct,Vt],[Pt,Pe]],Z)=>{let rt=Y.x+Ct*Q,M=Y.z+Vt*Q,w=Y.x+Pt*Q,h=Y.z+Pe*Q;for(let[_,S]of Z===2?[[.1,.38],[.62,.9]]:[[.12,.88]]){let E=te(rt,w,_),A=te(M,h,_),z=te(rt,w,S),W=te(M,h,S);ct({kind:"fwall",x:(E+z)/2,z:(A+W)/2,rot:Math.atan2(W-A,z-E),w:Math.hypot(z-E,W-A),d:1.3,h:3+a()*2.2},!1)}})}{ct({kind:"reedhut",x:xt.x+30,z:xt.z-20,rot:.5,w:3.2,d:6,h:3});for(let Ft=0;Ft<3;Ft++)ct({kind:"boat",x:Ot.x+8,z:Ot.z-25+Ft*14,rot:Ft*.6},!1);let Y=Math.atan2(90,240),Q={x:pe.x+Math.cos(Y)*(pe.r-8),z:pe.z+Math.sin(Y)*(pe.r-8)};ct({kind:"pier",x:Q.x,z:Q.z,rot:Y+Math.PI,w:26,d:2.4,h:0,lake:!0},!1)}for(let Y of nt)Y.a=gt(Y.x,Y.z);let zt={d:0,t:0};function Zt(Y,Q,Ft){let Ct=yt.at(Y,Q);if(!Ct)return Ft;for(let Vt of Ct){let Pt=Vt.a,Pe=Y-Pt.x,Z=Q-Pt.z,rt=Math.abs(Pe*Pt.c+Z*Pt.s),M=Math.abs(-Pe*Pt.s+Z*Pt.c),w=Math.max(rt-Pt.hw,M-Pt.hd,0);w<4&&(Ft=te(Pt.a,Ft,oe(0,4,w)))}return Ft}function ce(Y,Q){return Zt(Y,Q,T(Y,Q,C(Y,Q,pt(Y,Q,ye(Y,Q,D(Y,Q)+ht(Y,Q))))))}let $=(Y,Q)=>n+ce(Y,Q);function St(Y,Q,Ft){for(let Vt of ut){let Pt=Math.hypot(Y-Vt.x,Q-Vt.z);if(Pt<Vt.r*1.25&&Ft<n+Vt.lv+.2&&Pt<Et(Vt,Y,Q)+2)return{kind:"lake",level:n+Vt.lv}}if(Math.hypot(Y-ft.x,Q-ft.z)<ft.r&&Ft<n+U+.15)return{kind:"marsh",level:n+U};let Ct=X(Y,Q);return Ct&&Ct.d<Ct.w+.3&&Ft<n+Ct.lv+.25?{kind:"river",level:n+Ct.lv,dx:Ct.dx,dz:Ct.dz}:Ft<n+.1?{kind:"sea",level:n}:null}let Gt=(Y,Q,Ft)=>oe(Y.r,Y.r*.6,Math.hypot(Q-Y.x,Ft-Y.z)),Jt={x:400,z:-1150,r:950},se={x:-1700,z:-250,r:750};function ge(Y,Q,Ft,Ct,Vt){let Pt={t:0,pine:0,oak:0,palm:0,olive:0,b:.04,rock:0,reed:0};if(Ft<.35)return Math.hypot(Y-ft.x,Q-ft.z)<ft.r&&Ft>-.6&&(Pt.reed=.75),Pt;let Pe=un(Y*.0032+5,Q*.0032-3),Z=oe(.44,.62,Pe),rt=oe(90,200,Ft);Pt.t=Z*te(.55,.75,rt)+.03,Pt.pine=.25+rt*.7,Pt.oak=1-Pt.pine,Ft<25&&(Pt.olive=.3,Pt.palm=oe(25,6,Ft)*.6,Pt.t*=.6);let M=Gt(Jt,Y,Q);M>0&&(Pt.t=te(Pt.t,.9,M),Pt.pine=te(Pt.pine,.85,M),Pt.oak=1-Pt.pine,Pt.palm=Pt.olive=0);let w=Gt(se,Y,Q);w>0&&(Pt.t=te(Pt.t,.82,w),Pt.oak=te(Pt.oak,.95,w),Pt.pine=1-Pt.oak,Pt.palm*=1-w,Pt.olive*=1-w);let h=Gt(ne,Y,Q);h>0&&(Pt.t=te(Pt.t,.8,h),Pt.palm=te(Pt.palm,1,h),Pt.pine*=1-h,Pt.oak*=1-h,Pt.olive*=1-h);let _=Gt(he,Y,Q);_>0&&(Pt.t*=1-_*.97,Pt.b*=1-_);let S=Gt(qt,Y,Q);S>0&&(Pt.t=te(Pt.t,.14,S),Pt.olive=te(Pt.olive,.6,S),Pt.palm=te(Pt.palm,.4,S),Pt.pine*=1-S,Pt.oak*=1-S);let E=oe(P.r,P.r*.5,Math.hypot(Y-P.x,Q-P.z));E>0&&(Pt.t*=1-E*.8,Pt.b=te(Pt.b,.3,E)),Math.hypot(Y-F.x,Q-F.z)<F.r&&(Pt.t=.05,Pt.oak=1,Pt.pine=0),Ct<110&&Ft<5&&(Pt.t=.05,Pt.palm=1,Pt.oak=Pt.pine=Pt.olive=0,Pt.b=.03),Ft>330&&(Pt.t*=.5),Vt>.75&&(Pt.t*=.4,Pt.rock=oe(.75,1.1,Vt)*.35),Pt.rock+=.006;let z=K(Y,Q);z&&z.d<z.hw+2.2&&(Pt.t=Pt.b=Pt.rock=0);let W=X(Y,Q);return W&&W.d<W.w+1.5&&(Pt.t=Pt.rock=0,W.d>W.w-.5&&(Pt.reed=.3)),Pt}function Ie(Y,Q){if(Math.hypot(Y-st.x,Q-st.z)<62)return!0;for(let Ct of fe)if(Math.hypot(Y-Ct.fx,Q-Ct.fz)<7)return!0;if(Ti&&Ln(Y,Q,4.5)||Math.hypot(Y-Kt.x,Q-Kt.z)<Kt.r-8||Math.hypot(Y-Ut.x,Q-Ut.z)<26||Math.hypot(Y-et.x,Q-et.z)<30)return!0;let Ft=yt.at(Y,Q);if(Ft)for(let Ct of Ft){let Vt=Ct.a,Pt=Y-Vt.x,Pe=Q-Vt.z;if(Math.abs(Pt*Vt.c+Pe*Vt.s)<Vt.hw+2.5&&Math.abs(-Pt*Vt.s+Pe*Vt.c)<Vt.hd+2.5)return!0}for(let Ct of tt)if((Ct.kind==="fountain"||Ct.kind==="ftower")&&Math.hypot(Y-Ct.x,Q-Ct.z)<(Ct.r||2)+2)return!0;return!1}let jt=[{id:"summit",name:"\u0642\u0645\u0629 \u0627\u0644\u0633\u062D\u0627\u0628",icon:"\u{1F3D4}\uFE0F",x:r,z:o,r:22,sub:"\u0623\u0628\u0648 \u062C\u0627\u0633\u0645 \u0648\u0627\u0644\u0686\u0627\u064A\u0686\u064A"},{id:"shoulder",name:"\u0645\u0635\u0637\u0628\u0629 \u0627\u0644\u063A\u064A\u0645",icon:"\u2601\uFE0F",x:r,z:o,r:340,ring:225,sub:"\u0643\u062A\u0641 \u0627\u0644\u062C\u0628\u0644"},{id:"mount",name:"\u062C\u0628\u0644 \u0627\u0644\u0647\u064A\u0628\u0629",icon:"\u26F0\uFE0F",x:r,z:o,r:1700,sub:"\u0642\u0644\u0628 \u0627\u0644\u062C\u0632\u064A\u0631\u0629"},{id:"fajr",name:"\u0633\u0627\u062D\u0629 \u0627\u0644\u0641\u062C\u0631",icon:"\u{1F305}",x:st.x,z:st.z,r:110,sub:"\u0633\u0648\u0642 \u0648\u0686\u0627\u064A\u062E\u0627\u0646\u0629 \u064A\u0645 \u0627\u0644\u062E\u0644\u064A\u062C"},{id:"bay",name:"\u062E\u0644\u064A\u062C \u0627\u0644\u0641\u062C\u0631",icon:"\u26F5",x:k.x+200,z:k.z,r:520},{id:"groves",name:"\u0628\u0633\u0627\u062A\u064A\u0646 \u0627\u0644\u0631\u0637\u0628",icon:"\u{1F334}",x:ne.x,z:ne.z,r:ne.r},{id:"village",name:"\u0642\u0631\u064A\u0629 \u0627\u0644\u0637\u064A\u0646",icon:"\u{1F3D8}\uFE0F",x:qt.x,z:qt.z,r:qt.r+30},{id:"light",name:"\u0645\u0646\u0627\u0631\u0629 \u0627\u0644\u0635\u064A\u0627\u062F\u064A\u0646",icon:"\u{1F5FC}",x:et.x,z:et.z,r:200},{id:"kohl",name:"\u062C\u0628\u0644 \u0627\u0644\u0643\u062D\u0644",icon:"\u{1F5FB}",x:1550,z:-1950,r:560},{id:"lake",name:"\u0628\u062D\u064A\u0631\u0629 \u0627\u0644\u0642\u0645\u0631",icon:"\u{1F319}",x:pe.x,z:pe.z,r:pe.r+140},{id:"huts",name:"\u0623\u0643\u0648\u0627\u062E \u0627\u0644\u062D\u0637\u0651\u0627\u0628\u064A\u0646",icon:"\u{1FA93}",x:Kt.x,z:Kt.z,r:120},{id:"shadows",name:"\u063A\u0627\u0628\u0629 \u0627\u0644\u0638\u0644\u0627\u0644",icon:"\u{1F332}",x:Jt.x,z:Jt.z,r:Jt.r},{id:"marsh",name:"\u0647\u0648\u0631 \u0627\u0644\u0639\u0646\u0628\u0631",icon:"\u{1F6F6}",x:ft.x,z:ft.z,r:ft.r},{id:"mudhif",name:"\u0645\u0636\u064A\u0641 \u0627\u0644\u0642\u0635\u0628",icon:"\u{1F6D6}",x:ft.x+40,z:ft.z+120,r:60},{id:"wheat",name:"\u0633\u0647\u0644 \u0627\u0644\u0633\u0646\u0627\u0628\u0644",icon:"\u{1F33E}",x:he.x,z:he.z,r:he.r},{id:"fort",name:"\u0623\u0637\u0644\u0627\u0644 \u0627\u0644\u062D\u0635\u0646",icon:"\u{1F3F0}",x:Ut.x,z:Ut.z,r:260},{id:"oaks",name:"\u063A\u0627\u0628\u0629 \u0627\u0644\u0628\u0644\u0648\u0637",icon:"\u{1F333}",x:se.x,z:se.z,r:se.r},{id:"pearl",name:"\u0634\u0627\u0637\u0626 \u0627\u0644\u0644\u0624\u0644\u0624",icon:"\u{1F41A}",x:xt.x,z:xt.z,r:420},{id:"thyme",name:"\u062A\u0644\u0627\u0644 \u0627\u0644\u0632\u0639\u062A\u0631",icon:"\u{1F33F}",x:P.x,z:P.z,r:P.r},{id:"plateau",name:"\u0647\u0636\u0628\u0629 \u0627\u0644\u062E\u064A\u0651\u0627\u0644\u0629",icon:"\u{1F40E}",x:F.x,z:F.z,r:F.r+40},{id:"birds",name:"\u062C\u0632\u064A\u0631\u0629 \u0627\u0644\u0637\u064A\u0648\u0631",icon:"\u{1F54A}\uFE0F",x:O.x,z:O.z,r:O.r+80},{id:"gulls",name:"\u062C\u0631\u0641 \u0627\u0644\u0646\u0648\u0627\u0631\u0633",icon:"\u{1FAB6}",x:vt.x,z:vt.z,r:380},{id:"falls",name:"\u0634\u0644\u0627\u0644 \u0627\u0644\u0645\u0631\u0627\u064A\u0627",icon:"\u{1F4A6}",x:B.x,z:B.z,r:130},{id:"falcons",name:"\u062C\u0628\u0644 \u0627\u0644\u0635\u0642\u0648\u0631",icon:"\u{1F985}",x:1900,z:1900,r:760},{id:"valley",name:"\u0648\u0627\u062F\u064A \u0627\u0644\u063A\u0632\u0644\u0627\u0646",icon:"\u{1F98C}",x:Dt.x,z:Dt.z,r:Dt.r}];jt.sort((Y,Q)=>Y.r-Q.r);function ke(Y,Q){for(let Ct of jt){let Vt=Math.hypot(Y-Ct.x,Q-Ct.z);if(Ct.ring?Vt<Ct.r&&Vt>Ct.ring:Vt<Ct.r)return Ct}let Ft=X(Y,Q);return Ft&&Ft.d<Ft.w+30?{id:Ft.river.id,name:Ft.river.name,icon:"\u{1F4A7}",river:!0}:f(Y,Q)<0?{id:"sea",name:"\u0627\u0644\u0628\u062D\u0631",icon:"\u{1F30A}"}:f(Y,Q)<160?{id:"coast",name:"\u0627\u0644\u0633\u0627\u062D\u0644",icon:"\u{1F3D6}\uFE0F"}:{id:"wild",name:"\u0627\u0644\u0628\u0631\u0651\u064A\u0629",icon:"\u{1F343}"}}let Ae={fajr:[st.x-22,st.z-16],village:[qt.x+14,qt.z+10],light:[et.x-24,et.z-12],lake:[pe.x+290,pe.z+60],huts:[Kt.x-6,Kt.z+8],mudhif:[ft.x+40,ft.z+146],wheat:[he.x+10,he.z+14],fort:[Ut.x+26,Ut.z+4],oaks:[-1600,-238],pearl:[xt.x+40,xt.z+10],thyme:[-1300,1712],plateau:[F.x+10,F.z],birds:[O.x,O.z],gulls:[vt.x-40,vt.z-30],falls:[B.x-30,B.z-20],falcons:[1650,1460],kohl:[1300,-1500],groves:[ne.x,ne.z+14]},fe=[];for(let Y of jt){let Q=Ae[Y.id];if(!Q)continue;let Ft=Math.atan2(o-Q[1],r-Q[0]);fe.push({id:"z_"+Y.id,x:Q[0]-Math.cos(Ft)*3.4,z:Q[1]-Math.sin(Ft)*3.4,fx:Q[0],fz:Q[1],name:Y.name,icon:Y.icon,face:Ft,flag:!1,fire:!0})}fe.sort((Y,Q)=>(Q.id==="z_fajr")-(Y.id==="z_fajr"));{let Y=fe[0];Object.assign(Y,{x:st.x+18.5,z:st.z,face:0,start:!0})}let Xe=hn((i.seed||7)*31+5),pn=Math.PI*2,En=(Y,Q)=>Math.hypot(ce(Y+1,Q)-ce(Y-1,Q),ce(Y,Q+1)-ce(Y,Q-1))/2,pi=(Y,Q)=>{let Ft=ce(Y,Q);if(Ft<.6||f(Y,Q)<12||St(Y,Q,n+Ft+.05))return!1;let Ct=K(Y,Q);if(Ct&&Ct.d<Ct.hw+3)return!1;let Vt=X(Y,Q);return Vt&&Vt.d<Vt.w+6?!1:!tt.some(Pt=>Math.hypot(Pt.x-Y,Pt.z-Q)<12)};function mi(Y,Q,Ft,Ct,Vt,Pt){let Pe=[];for(let Z=0;Z<6e3&&Pe.length<Ct;Z++){let rt=Xe()*pn,M=Math.sqrt(Xe())*Ft,w=Y+Math.cos(rt)*M,h=Q+Math.sin(rt)*M;!Pt(w,h)||Pe.some(_=>Math.hypot(_.x-w,_.z-h)<Vt)||Pe.push({x:w,z:h})}return Pe}function Fn(Y){let Q={x:Y.x,z:Y.z,a:-1e9};for(let Ft=-40;Ft<=40;Ft++)for(let Ct=-40;Ct<=40;Ct++){let Vt=Y.x+Ft*6,Pt=Y.z+Ct*6,Pe=ce(Vt,Pt);Pe>Q.a&&(Q={x:Vt,z:Pt,a:Pe})}return{x:Q.x,z:Q.z}}let Ei={x:-1650,z:1560},Ti=[{id:"gazelle",icon:"\u{1F98C}",name:"\u063A\u0632\u0627\u0644 \u062D\u064A",need:1,reward:500,zone:"valley",at:{x:Dt.x,z:Dt.z},note:"\u0628\u0648\u0627\u062F\u064A \u0627\u0644\u063A\u0632\u0644\u0627\u0646 \u0634\u0631\u0642 \u0627\u0644\u062C\u0628\u0644. \u0627\u0645\u0634\u0650 \u064A\u0645\u0651\u0647 \u0639\u0644\u0649 \u0647\u0648\u0646\u0643\u2026 \u0625\u0630\u0627 \u0631\u0643\u0636\u062A \u064A\u0634\u0631\u062F",items:[]},{id:"thyme",icon:"\u{1F33F}",name:"\u0628\u0627\u0642\u0627\u062A \u0632\u0639\u062A\u0631 \u0628\u0631\u064A",need:5,reward:150,zone:"thyme",at:Ei,note:"\u062A\u0646\u0628\u062A \u0628\u064A\u0646 \u0635\u062E\u0648\u0631 \u062A\u0644\u0627\u0644 \u0627\u0644\u0632\u0639\u062A\u0631\u060C \u062C\u0646\u0648\u0628 \u0634\u0631\u0642 \u0627\u0644\u062C\u0628\u0644",items:mi(Ei.x,Ei.z,330,5,55,(Y,Q)=>pi(Y,Q)&&En(Y,Q)<.45)},{id:"pearl",icon:"\u{1F9AA}",name:"\u0645\u062D\u0627\u0631 \u0628\u064A\u0647 \u0644\u0624\u0644\u0624",need:3,reward:250,zone:"pearl",at:xt,note:"\u0639\u0644\u0649 \u0631\u0645\u0644 \u0634\u0627\u0637\u0626 \u0627\u0644\u0644\u0624\u0644\u0624 \u064A\u0645 \u0627\u0644\u0645\u0627\u064A\u060C \u062C\u0646\u0648\u0628 \u0627\u0644\u062C\u0632\u064A\u0631\u0629",items:mi(xt.x,xt.z,420,3,45,(Y,Q)=>{let Ft=f(Y,Q),Ct=ce(Y,Q);return Ft>3&&Ft<18&&Ct>.35&&Ct<4&&!St(Y,Q,n+Ct+.05)&&En(Y,Q)<.22})},{id:"honey",icon:"\u{1F36F}",name:"\u062C\u0631\u0651\u0629 \u0639\u0633\u0644 \u0628\u0631\u064A",need:1,reward:200,zone:"oaks",at:se,note:"\u062E\u0644\u064A\u0629 \u0646\u062D\u0644 \u0642\u062F\u064A\u0645\u0629 \u0628\u0646\u0635 \u063A\u0627\u0628\u0629 \u0627\u0644\u0628\u0644\u0648\u0637\u2026 \u0648\u0627\u0646\u062A\u0628\u0647 \u0645\u0646 \u0627\u0644\u062E\u0646\u0627\u0632\u064A\u0631 \u{1F417}",items:mi(se.x-60,se.z-80,180,1,0,(Y,Q)=>pi(Y,Q)&&En(Y,Q)<.3)},{id:"feather",icon:"\u{1FAB6}",name:"\u0631\u064A\u0634\u0629 \u0635\u0642\u0631",need:1,reward:300,zone:"falcons",at:{x:m[0].x,z:m[0].z},note:"\u0628\u0639\u0634 \u0627\u0644\u0635\u0642\u0631 \u0641\u0648\u0643 \u0642\u0645\u0629 \u062C\u0628\u0644 \u0627\u0644\u0635\u0642\u0648\u0631\u060C \u0634\u0645\u0627\u0644 \u0634\u0631\u0642 \u0627\u0644\u062C\u0632\u064A\u0631\u0629",items:[Fn(m[0])]},{id:"fish",icon:"\u{1F41F}",name:"\u0633\u0645\u0686\u062A\u064A\u0646",need:2,reward:300,zone:"lake",at:{x:pe.x,z:pe.z},note:"\u0645\u0646 \u0631\u0635\u064A\u0641 \u0627\u0644\u062E\u0644\u064A\u062C \u0623\u0648 \u0628\u062D\u064A\u0631\u0629 \u0627\u0644\u0642\u0645\u0631\u2026 \u062A\u062D\u062A\u0627\u062C \u0633\u0646\u0627\u0631\u0629 \u0645\u0646 \u062F\u0643\u0627\u0646\u064A",items:[]}];for(let Y of Ti)for(let Q of Y.items)Q.y=$(Q.x,Q.z);let Ln=(Y,Q,Ft)=>Ti.some(Ct=>Ct.items.some(Vt=>Math.hypot(Y-Vt.x,Q-Vt.z)<Ft)),Hn=tt.find(Y=>Y.kind==="board"),on={x:Hn.x,z:Hn.z,fx:Math.cos(Hn.rot),fz:Math.sin(Hn.rot),w:Hn.d},Nn=[...[[300,-1300],[650,-1050],[180,-1720]].map(([Y,Q])=>({kind:"wolf",x:Y,z:Q})),...[[-1600,-420],[-1900,-120],[-1480,-720],[-1900,1300],[-2250,1620]].map(([Y,Q])=>({kind:"boar",x:Y,z:Q}))];return{SEA:n,HALF:s,SHOULDER:l,beasts:Nn,H:$,A:ce,baseA:D,coastS:f,Rc:u,rivers:Rt,falls:d,lakes:ut,marsh:{...ft,lv:U},roads:At,sites:tt,zones:jt,zoneAt:ke,rest:fe,nearRoad:K,nearRiver:X,water:St,flora:ge,reserved:Ie,tasks:Ti,board:on,peaks:m,plateau:F,islet:O,fajr:st,shBay:k,valley:Dt,scarp:ot,fallsAt:B}}var Vn=Math.PI/180,ws=(i,t)=>i*100003+t;function lc(i){let t=new Map;return{cell:i,add(e,n=e.x,s=e.z){let r=ws(Math.floor(n/i),Math.floor(s/i)),o=t.get(r);o||(o=[],t.set(r,o)),o.push(e)},remove(e,n=e.x,s=e.z){let r=t.get(ws(Math.floor(n/i),Math.floor(s/i)));if(r){let o=r.indexOf(e);o>=0&&r.splice(o,1)}},addArea(e,n,s,r,o){for(let a=Math.floor(n/i);a<=Math.floor(r/i);a++)for(let l=Math.floor(s/i);l<=Math.floor(o/i);l++){let c=ws(a,l),u=t.get(c);u||(u=[],t.set(c,u)),u.push(e)}},each(e,n,s,r){let o=Math.floor(e/i),a=Math.floor(n/i);for(let l=-s;l<=s;l++)for(let c=-s;c<=s;c++){let u=t.get(ws(o+l,a+c));if(u){for(let f of u)if(r(f)===!0)return!0}}return!1}}}function V1(i,t){let e=i.x||0,n=i.z||0,s=13.3,r=95,o=0,a=(C,V)=>[e+Math.cos(V*Vn)*C,n+Math.sin(V*Vn)*C],l=(C,V)=>Math.hypot(C-e,V-n),c=(C,V)=>Math.atan2(V-n,C-e);function u(C){if(C<=s+1)return r;let V=40+55*Math.pow(1-Me((C-s-1)/(72-s-1),0,1),1.12),B=36+4*(1-Me((C-72)/48,0,1)),at=36*Math.pow(1-Me((C-120)/60,0,1),1.25)-oe(180,230,C)*14;return te(te(V,B,oe(68,76,C)),at,oe(116,124,C))}let f=[{a:118.5*Vn,r0:108,r1:190,w:7.5,depth:17},{a:101*Vn,r0:22,r1:64,w:6,depth:15},{a:58*Vn,r0:26,r1:72,w:4.5,depth:1.6,water:!0}],g=(C,V)=>{let B=l(C,V),at=u(B)+(un(C*.028+5,V*.028)-.5)*9*oe(s+2,s+12,B)*(1-oe(200,260,B)*.5);return at+=5*oe(49.5,47.6,B)*oe(28,42,B),at+=4*oe(27.2,25.3,B)*oe(15.5,21,B),at},x=(C,V)=>{let B=l(C,V),at=g(C,V);for(let ut of f){if(B<=ut.r0||B>=ut.r1)continue;let Et=Math.abs(wn(ut.a,c(C,V)))*B;Et<ut.w&&(at-=ut.depth*oe(ut.w,ut.w*.25,Et)*oe(ut.r0,ut.r0+4,B)*oe(ut.r1,ut.r1-4,B))}return at},y=[];function R(C,V={}){let B=C.map(([nt,yt])=>{let[ct,gt]=a(nt,yt);return new j(ct,0,gt)}),at=new Yn(B,!1,"centripetal"),ut=at.getLength(),Et=Math.max(2,Math.ceil(ut/.8)),U=[];for(let nt=0;nt<=Et;nt++){let yt=at.getUtoTmapping(nt/Et),ct=at.getPoint(yt);U.push([ct.x,ct.z,Math.min(B.length-2,Math.floor(yt*(B.length-1)))])}let T={id:y.length,kind:V.kind||"trail",pts:U.map(([nt,yt,ct])=>({x:nt,z:yt,wi:ct,y:0,hw:V.hw||1.35,kind:V.kinds&&V.kinds[ct]||V.kind||"trail"}))},tt=T.pts.map(nt=>g(nt.x,nt.z));if(T.pts.forEach((nt,yt)=>{let ct=0,gt=0;for(let Mt=-22;Mt<=22;Mt++)ct+=tt[Me(yt+Mt,0,tt.length-1)],gt++;nt.y=ct/gt}),V.y0!=null||V.y1!=null){let nt=T.pts.length-1,yt=V.y0!=null?V.y0-T.pts[0].y:0,ct=V.y1!=null?V.y1-T.pts[nt].y:0;T.pts.forEach((gt,Mt)=>{gt.y+=te(yt,ct,Mt/(nt||1))})}for(let nt of T.pts)nt.kind==="ledge"?nt.hw=.72:nt.kind==="bridge"?nt.hw=.62:nt.kind==="stones"&&(nt.hw=.6);return y.push(T),T}let m=R([[166,12],[160,40],[153,68],[146,94],[142.5,114.6],[140,122.4],[134,146],[127,172],[121,194],[117,206]],{kinds:{4:"bridge"}}),v=[110,98,86,74],P=[212,224,236,248,260,272,284],F=(C,V)=>a(v[C],P[V]),I=(C,V)=>{let[B,at]=F(C,V),ut=0;for(let Et=0;Et<9;Et++)ut+=g(B+Math.cos(Et)*4,at+Math.sin(Et)*4);return ut/9},O=[],D=new Set,b=hn(77),L=(C,V)=>C*10+V;(function C(V,B){D.add(L(V,B));let at=[[V+1,B],[V-1,B],[V,B+1],[V,B-1]].filter(([ut,Et])=>ut>=0&&ut<4&&Et>=0&&Et<7&&!D.has(L(ut,Et)));for(let ut=at.length-1;ut>0;ut--){let Et=Math.floor(b()*(ut+1));[at[ut],at[Et]]=[at[Et],at[ut]]}for(let[ut,Et]of at)D.has(L(ut,Et))||(O.push([[V,B],[ut,Et]]),C(ut,Et))})(0,0),O.push([[1,2],[1,3]],[[2,4],[3,4]]);let J=new Map;for(let C of O){let V=L(...C[0])*100+L(...C[1]),B=L(...C[1])*100+L(...C[0]);!J.has(V)&&!J.has(B)&&J.set(V,C)}let k=[],st=new Map;for(let[[C,V],[B,at]]of J.values()){let[ut,Et]=F(C,V),[U,T]=F(B,at),tt=(ut+U)/2+(b()-.5)*3,nt=(Et+T)/2+(b()-.5)*3,yt=(gt,Mt)=>[l(gt,Mt),(c(gt,Mt)/Vn+360)%360],ct=R([yt(ut,Et),yt(tt,nt),yt(U,T)],{kind:"maze",hw:1.25,y0:I(C,V),y1:I(B,at)});ct.cells=[[C,V],[B,at]],k.push(ct);for(let gt of ct.cells)st.set(L(...gt),(st.get(L(...gt))||0)+1)}let dt=R([[117,206],[113,209],[v[0],P[0]]],{kind:"maze",hw:1.3,y0:m.pts[m.pts.length-1].y,y1:I(0,0)}),et=R([[v[3],P[6]],[70,287],[66,292]],{kind:"maze",hw:1.3,y0:I(3,6)}),bt=[[66,292],[62,306],[58,334],[54,308],[50,336],[46,309],[43,330],[41,344],[40,0],[39.3,16],[38.6,30],[37.5,42],[36.6,53],[35.8,63],[34.4,75],[32.4,86],[31.2,92],[29.6,110.5],[27.4,122],[24,138],[20,154],[s+.4,168]],ft=R(bt,{y0:et.pts[et.pts.length-1].y,kinds:{7:"ledge",8:"ledge",9:"ledge",12:"stones",16:"bridge"}});{let C=ft.pts,V=0;for(let B=C.length-1;B>=0&&(B<C.length-1&&(V+=Math.hypot(C[B+1].x-C[B].x,C[B+1].z-C[B].z)),C[B].y=Math.max(C[B].y,r-V*.42),!(V>60));B--);C[C.length-1].y=r;for(let B=Math.max(1,C.length-80);B<C.length;B++)(C[B].y-C[B-1].y)/(Math.hypot(C[B].x-C[B-1].x,C[B].z-C[B-1].z)||1)>.24&&C[B].kind==="trail"&&(C[B].kind="stairs",C[B].hw=1.25)}let Ot=[];for(let C of[m,ft]){let V=0;for(;V<C.pts.length;){if(C.pts[V].kind!=="bridge"){V++;continue}let B=V;for(;B+1<C.pts.length&&C.pts[B+1].kind==="bridge";)B++;let at=C.pts[Math.max(0,V-1)],ut=C.pts[Math.min(C.pts.length-1,B+1)],Et=B-V+1,U=Et>10?[Math.floor(Et*.3),Math.floor(Et*.7)]:[Math.floor(Et/2)];for(let T=V;T<=B;T++){let tt=(T-V+1)/(Et+1),nt=C.pts[T];nt.y=te(at.y,ut.y,tt)-Math.sin(tt*Math.PI)*.7,nt.gap=U.includes(T-V)}Ot.push({seg:C,i:V,j:B,a:at,b:ut}),V=B+1}}let xt=[];for(let C=0;C<ft.pts.length;C++){let V=ft.pts[C];if(V.kind==="stones"&&(!xt.length||Math.hypot(V.x-xt[xt.length-1].x,V.z-xt[xt.length-1].z)>2.25)){let B=ft.pts[Math.min(C+1,ft.pts.length-1)],at=(t()-.5)*.5,ut=-(B.z-V.z),Et=B.x-V.x,U=Math.hypot(ut,Et)||1;xt.push({x:V.x+ut/U*at,z:V.z+Et/U*at,y:V.y+.05,r:.72})}}let wt=[];for(let C of y)C.pts.forEach((V,B)=>{V.seg=C,V.k=B,wt.push(V)});let vt=lc(4);for(let C of wt)vt.add(C);function Dt(C,V,B,at=1){let ut=null,Et=1/0;if(vt.each(C,V,at,zt=>{let Zt=(zt.x-C)**2+(zt.z-V)**2+(B!=null?Math.max(0,Math.abs(zt.y-B)-1.2)**2*9:0);Zt<Et&&(Et=Zt,ut=zt)}),!ut)return null;let U=ut.seg.pts,T=U[Math.min(ut.k+1,U.length-1)],tt=U[Math.max(ut.k-1,0)],nt=Math.hypot(C-ut.x,V-ut.z),yt=ut.y,ct=T.x-tt.x,gt=T.z-tt.z,Mt=Math.hypot(ct,gt)||1;ct/=Mt,gt/=Mt;for(let[zt,Zt]of[[tt,ut],[ut,T]]){let ce=Zt.x-zt.x,$=Zt.z-zt.z,St=ce*ce+$*$||1,Gt=Me(((C-zt.x)*ce+(V-zt.z)*$)/St,0,1),Jt=Math.hypot(C-(zt.x+ce*Gt),V-(zt.z+$*Gt));Jt<nt&&(nt=Jt,yt=te(zt.y,Zt.y,Gt))}return{p:ut,d:nt,y:yt,tx:ct,tz:gt,side:(C-ut.x)*-gt+(V-ut.z)*ct}}function qt(C,V){let B=l(C,V),at=x(C,V);if(B<s+1.5)return te(at,r,oe(s+1.5,s+.3,B));if(B>200)return at;let ut=at,Et=Dt(C,V,null,2);if(Et&&Et.d<Et.p.hw+3.2){let U=Et.p.kind;if(U!=="bridge"){if(U==="stones")ut=Math.min(ut,Et.y-.55);else if(ut=te(ut,Et.y-.04,oe(Et.p.hw+3.2,Et.p.hw+.5,Et.d)),U==="ledge"){let T=Et.d-Et.p.hw;T>0&&(B>l(Et.p.x,Et.p.z)?ut=Math.min(ut,Et.y-oe(0,2.2,T)*11):ut=Math.max(ut,Et.y+oe(.3,2.4,T)*4.5))}}}return ut}let Kt=[],pe=(C,V)=>C.pts.findIndex(B=>B.kind===V),Ut=(C,V,B)=>{let at=C.pts[Me(V,0,C.pts.length-1)],ut=C.pts[Me(V+6,0,C.pts.length-1)],Et={id:"cp"+Kt.length,x:at.x,z:at.z,y:at.y,name:B,face:Math.atan2(ut.z-at.z,ut.x-at.x),flag:!0};return Kt.push(Et),Et};Ut(m,3,"\u0633\u0641\u062D \u0627\u0644\u062C\u0628\u0644"),Ut(m,pe(m,"bridge")-7,"\u0642\u0628\u0644 \u0627\u0644\u062C\u0633\u0631"),Ut(m,m.pts.length-2,"\u0628\u0627\u0628 \u063A\u0627\u0628\u0629 \u0627\u0644\u0645\u062A\u0627\u0647\u0629"),Ut(ft,4,"\u0637\u0644\u0639\u0629 \u0627\u0644\u0632\u0643\u0632\u0627\u0643"),Ut(ft,pe(ft,"ledge")-6,"\u0642\u0628\u0644 \u062D\u0627\u0641\u0629 \u0627\u0644\u062C\u0631\u0641"),Ut(ft,pe(ft,"stones")-5,"\u0642\u0628\u0644 \u0627\u0644\u0633\u0627\u0642\u064A\u0629"),Ut(ft,pe(ft,"bridge")-6,"\u0642\u0628\u0644 \u0627\u0644\u062C\u0633\u0631 \u0627\u0644\u062B\u0627\u0646\u064A");let ne=ft.pts[ft.pts.length-1],he=c(ne.x,ne.z);Kt.push({id:"summit",x:e-3,z:n+3,y:r,name:"\u0633\u0627\u062D\u0629 \u0627\u0644\u0642\u0645\u0629",face:0,flag:!1,plaza:!0});let _e=[],$t=[];{let C=new Map;for(let T of k){let[tt,nt]=T.cells.map(yt=>L(...yt));for(let[yt,ct]of[[tt,nt],[nt,tt]])C.has(yt)||C.set(yt,[]),C.get(yt).push(ct)}let V=L(0,0),B=L(3,6),at=new Map([[V,-1]]),ut=[V],Et=new Map;for(;ut.length;){let T=ut.shift();if(T===B)break;for(let tt of C.get(T)||[])at.has(tt)||(at.set(tt,T),ut.push(tt))}for(let T=B;at.get(T)!==-1&&at.has(T);T=at.get(T))Et.set(at.get(T),T);let U=0;for(let[T,tt]of Et){if((st.get(T)||0)<3||U++%3===2)continue;let[nt,yt]=F(Math.floor(T/10),T%10),[ct,gt]=F(Math.floor(tt/10),tt%10),Mt=Math.atan2(gt-yt,ct-nt),zt=nt+Math.cos(Mt+.9)*1.9,Zt=yt+Math.sin(Mt+.9)*1.9;_e.push({x:zt,z:Zt,a:Mt,text:"\u2B05 \u0644\u0644\u0642\u0645\u0629"})}for(let[T,tt]of st){if(tt!==1||T===V||T===B)continue;let[nt,yt]=F(Math.floor(T/10),T%10);$t.push({x:nt,z:yt,a:t()*Se})}}let ye=[];for(let C of[m,ft])for(let V=8;V<C.pts.length-4;V+=17){let B=C.pts[V];B.kind==="trail"&&ye.push({x:B.x,y:B.y+.9,z:B.z})}for(let C of $t){let V=Dt(C.x,C.z,null,2);if(V)for(let B=0;B<4;B++){let at=V.p.seg.pts[Me(V.p.k+(B-1.5)*2|0,0,V.p.seg.pts.length-1)];ye.push({x:at.x,y:at.y+.9,z:at.z})}}let Le=(C,V)=>{let B=C.pts[Me(V,0,C.pts.length-1)];return{x:B.x,z:B.z,y:B.y}},le=Math.floor(m.pts.length*.22),G=pe(ft,"ledge"),At=[{kind:"wolf",home:Le(m,le)},{kind:"wolf",home:Le(m,le+4),ox:1.5},{kind:"wolf",home:Le(ft,G-26)},{kind:"wolf",home:Le(ft,G-22),ox:1.2},{kind:"boar",home:Le(k[Math.floor(k.length*.4)],10)},{kind:"boar",home:Le(k[Math.floor(k.length*.75)],10)}],it=(C,V)=>[e+Math.cos(C*Vn)*V,n+Math.sin(C*Vn)*V],mt=236,[K,pt]=it(mt,9.2),ot=it(221,6.2),ht=it(118,9),_t=it(300,10.2),Rt={x:e,z:n,RP:s,HS:r,DECK_A:o,ENTRY_A:he,kioskA:mt,kiosk:[K,pt],meet:ot,bell:ht,flag:_t,benches:[185,150,30],beds:[80,175,280,350],lamps:[45,145,255,330],pines:[62,100,200,320],guests:[{a:212,r:6.9,look:ot,kind:"tea"},{a:229,r:6.9,look:ot,kind:"tea"},{a:219,r:5.2,look:[K,pt],kind:"stand"}],scope:[e+s+3.9,n],inter:[{id:"tea",x:K-Math.cos(mt*Vn)*2.1,z:pt-Math.sin(mt*Vn)*2.1,r:2.3,label:"\u2615 \u0627\u0634\u0631\u0628 \u0634\u0627\u064A"},{id:"chat",x:ot[0],z:ot[1],r:2.2,label:"\u{1F5E3}\uFE0F \u0633\u0648\u0644\u0641 \u0648\u064A\u0627\u0647\u0645"},{id:"bell",x:e+(ht[0]-e)*.84,z:n+(ht[1]-n)*.84,r:2.2,label:"\u{1F514} \u062F\u0643 \u0627\u0644\u062C\u0631\u0633"},{id:"scope",x:e+s+3.1,z:n,r:1.8,label:"\u{1F52D} \u0628\u0627\u0648\u0639 \u0628\u0627\u0644\u062A\u0644\u0633\u0643\u0648\u0628"},{id:"fountain",x:e,z:n,r:3.4,label:"\u{1FA99} \u0627\u0631\u0645\u0650 \u0639\u0645\u0644\u0629 \u0628\u0627\u0644\u0646\u0627\u0641\u0648\u0631\u0629"}]},Tt=[];Tt.push({x:e,z:n,r:2.6,tall:1});for(let C of[-1.1,0,1.1])Tt.push({x:K+Math.cos(mt*Vn+Math.PI/2)*C,z:pt+Math.sin(mt*Vn+Math.PI/2)*C,r:1.05});{let C=-Math.sin(118*Vn),V=Math.cos(118*Vn);Tt.push({x:ht[0]+C*.9,z:ht[1]+V*.9,r:.25},{x:ht[0]-C*.9,z:ht[1]-V*.9,r:.25})}Tt.push({x:_t[0],z:_t[1],r:.3});for(let C of Rt.beds){let[V,B]=it(C,11);Tt.push({x:V,z:B,r:.75})}for(let C of Rt.benches){let[V,B]=it(C,6.6),at=-Math.sin(C*Vn),ut=Math.cos(C*Vn);Tt.push({x:V,z:B,r:.75},{x:V+at*.8,z:B+ut*.8,r:.5},{x:V-at*.8,z:B-ut*.8,r:.5})}for(let C of Rt.guests){let[V,B]=it(C.a,C.r);Tt.push({x:V,z:B,r:.42})}for(let C of Rt.pines){let[V,B]=it(C,11.6);Tt.push({x:V,z:B,r:.5,tall:1})}for(let C=0;C<64;C++){let V=C/64*Se;Math.abs(wn(V,he))<.2||Math.abs(wn(V,o))<.22||Tt.push({x:e+Math.cos(V)*(s-.1),z:n+Math.sin(V)*(s-.1),r:.55,wall:1})}let d=[];for(let C of wt)if(C.kind==="ledge"&&C.k%2===0){let V=C.seg.pts[Math.min(C.k+1,C.seg.pts.length-1)],B=C.seg.pts[Math.max(C.k-1,0)],at=V.x-B.x,ut=V.z-B.z,Et=Math.hypot(at,ut)||1,U=-ut/Et,T=at/Et;l(C.x+U,C.z+T)>l(C.x,C.z)&&(U=-U,T=-T);let tt=.9+Ke(C.k,1)*.8;d.push({p:C,nx:U,nz:T,sz:tt}),Tt.push({x:C.x+U*(C.hw+tt),z:C.z+T*(C.hw+tt),r:tt*.8,tall:1})}for(let C of $t)Tt.push({x:C.x,z:C.z,r:.9});let p=f[2],X=(C,V)=>{let B=l(C,V),at=(c(C,V)/Vn+360)%360;return B>66&&B<122&&at>203&&at<293};return{id:i.id||"M1",x:e,z:n,RP:s,HS:r,DECK_A:o,ENTRY_A:he,rad:l,ang:c,P2:a,prof:u,gullies:f,stream:p,Hbase:g,Hnat:x,H:qt,segs:y,ALL:wt,A:m,C2:ft,MAZ:k,entrySeg:dt,exitSeg:et,cellP:F,key:L,nearest:Dt,bridges:Ot,stones:xt,rest:Kt,signs:_e,logs:$t,coins:ye,beasts:At,plaza:Rt,coll:Tt,ledgeRocks:d,inMaze:X,foot:200}}function H1(i){let t=i.x,e=i.z||0,n=i.floor??-35,s=120,r=11,o=y=>2.6*Math.sin(y*.055+.6)+1.5*Math.sin(y*.13+2.1)-.6,a=[[17,1],[45,-1],[76,1],[103,-1]].map(([y,R])=>({x:y,z:Me(o(y)+R*6.4,-8.2,8.2),side:R,rot:R>0?Math.PI:0,base:0}));function l(y,R){let m=Math.abs(R),v=(un(y*.09+3.1,R*.09)-.5)*.55,P=R-o(Me(y,-10,s+10));v-=Math.exp(-(P*P)/1.3)*.75*oe(-12,-2,y);let F=Me((m-(r-1))/21,0,1);if(v+=21*F*F+oe(30,50,m)*7,v+=(un(y*.07+(R>0?9:2),m*.09)-.5)*5*oe(r+1,r+9,m),y<2&&(v=Math.max(v,21*Math.pow(Me((2-y)/62,0,1),.9))),y>s-2){let I=(y-s+2)/30;v+=20*Math.min(1,I)**2+oe(1,2.5,I)*6}return v+=oe(46,70,m)*45+oe(-62,-90,y)*45+oe(s+35,s+70,y)*45,v}for(let y of a)y.base=l(y.x,y.z)+.05;let c=(y,R)=>[y-t,R-e];function u(y,R){let m=y-t,v=R-e;if(m<-95||m>s+75||Math.abs(v)>72)return 1/0;let P=l(m,v);for(let F of a){let I=m-F.x,O=v-F.z;I*I+O*O<49&&(P=te(P,F.base,oe(7,4.5,Math.hypot(I,O))))}return n+P}let f=y=>n+l(y,o(y))+.42,g=(y,R)=>y>1.5&&y<s-1.5&&Math.abs(R)<r-1.2,x=[{id:"valley",x:t+4,z:e+o(4)+3.2,y:n+l(4,o(4)+3.2),name:"\u0645\u062F\u062E\u0644 \u0627\u0644\u0648\u0627\u062F\u064A",face:0,flag:!1}];for(let y of x)y.y=u(y.x,y.z);return{id:i.id||"V1",x:t,z:e,VF:n,VL:s,FLOOR:r,riverZ:o,CAMPS:a,H0:l,Hv:u,toL:c,waterLevel:f,onFloor:g,rest:x}}var Rf=Gh;function Pf(i=Gh){let t=hn(i.seed||1),e=i.half||500,n=V1(i.features.find(G=>G.type==="mountain"),t),s=i.features.find(G=>G.type==="valley"),r=Cf(i,n,s),o=r.SEA,a=H1({...s,floor:o+r.A(r.valley.x,r.valley.z)-21}),l=(G,At)=>r.H(G,At);function c(G,At){let it=n.rad(G,At),mt=it<245?it>200?te(n.H(G,At),l(G,At),oe(200,245,it)):n.H(G,At):l(G,At),K=a.Hv(G,At);return K<mt&&(mt=K),mt}let u=(G,At)=>Math.hypot(c(G+.4,At)-c(G-.4,At),c(G,At+.4)-c(G,At-.4))/.8,f=lc(4),g=[],x=G=>(g.push(G),f.add(G),G);for(let G of n.coll)x(G);let y={pineA:[],pineB:[],oak:[],hedge:[],bush:[],rock:[],palm:[[],[],[]],fruit:[[],[],[]],boulder:[],vbush:[],vrock:[],rim:[]},R=(G,At,it)=>{if(n.rad(G,At)<n.RP+3)return!1;let mt=n.nearest(G,At,null,2);if(mt&&mt.d<mt.p.hw+it)return!1;for(let K of n.rest)if(Math.hypot(G-K.x,At-K.z)<4.6)return!1;return!0};for(let G=-125;G<=125;G+=1.25)for(let At=-125;At<=125;At+=1.25){let it=n.x+G+(t()-.5)*.4,mt=n.z+At+(t()-.5)*.4;if(!n.inMaze(it,mt)||!R(it,mt,.75))continue;let K=c(it,mt);if(y.hedge.push({x:it,y:K-.1,z:mt,ry:t()*Se,s:.95+t()*.45}),x({x:it,z:mt,r:.62,hedge:1}),t()<.16&&R(it,mt,2.2)){let pt={x:it,y:K-.15,z:mt,ry:t()*Se,s:.85+t()*.4};(t()<.5?y.pineA:y.oak).push(pt)}}{let G=hn(20261123),At=(ht,_t)=>[a.x+ht,a.z+_t],it=(ht,_t,Rt)=>a.CAMPS.some(Tt=>Math.hypot(ht-Tt.x,_t-Tt.z)<Rt),mt=(ht,_t,Rt)=>Math.abs(_t-a.riverZ(ht))<1.7+Rt||it(ht,_t,6.8+Rt),K=(ht=0,_t=a.FLOOR-.6,Rt=-1,Tt=a.VL+1)=>({x:Rt+G()*(Tt-Rt),z:(G()<.5?-1:1)*(ht+G()*(_t-ht))}),pt=(ht,_t)=>u(a.x+ht,a.z+_t),ot=[];for(let ht of[-1,1])for(let _t=-2;_t<a.VL+2;_t+=5+G()*5){let Rt=a.riverZ(_t)+ht*(2.3+G()*1.8);!it(_t,Rt,7.5)&&Math.abs(Rt)<a.FLOOR&&ot.push({x:_t,z:Rt})}for(let ht=0;ht<16;ht++){let _t=K(2,a.FLOOR-1);mt(_t.x,_t.z,.6)||ot.push(_t)}ot.forEach((ht,_t)=>{let[Rt,Tt]=At(ht.x,ht.z);x({x:Rt,z:Tt,r:.38,tall:1,tree:1}),y.palm[_t%3].push({x:Rt,y:c(Rt,Tt)-.05,z:Tt,ry:G()*Se,s:.85+G()*.4})});for(let ht=0;ht<3;ht++)for(let _t=0,Rt=0;Rt<9&&_t<400;_t++){let Tt=K(1.5,a.FLOOR-.5),[d,p]=At(Tt.x,Tt.z);mt(Tt.x,Tt.z,1.4)||f.each(d,p,1,X=>Math.hypot(X.x-d,X.z-p)<3)||(x({x:d,z:p,r:.35,tall:1,tree:1}),y.fruit[ht].push({x:d,y:c(d,p)-.05,z:p,ry:G()*Se,s:.75+G()*.45}),Rt++)}for(let ht=0;y.vbush.length<130&&ht<3e3;ht++){let _t=K(0,a.FLOOR+4);if(mt(_t.x,_t.z,.5)||pt(_t.x,_t.z)>.7)continue;let[Rt,Tt]=At(_t.x,_t.z);y.vbush.push({x:Rt,y:c(Rt,Tt),z:Tt,ry:G()*Se,s:.5+G()*.8})}for(let ht=0;y.vrock.length<90&&ht<2e3;ht++){let _t=K(0,a.FLOOR);if(it(_t.x,_t.z,6)||Math.abs(_t.z-a.riverZ(_t.x))<1.1)continue;let Rt=.35+G()*.8,[Tt,d]=At(_t.x,_t.z);Rt>.8&&x({x:Tt,z:d,r:.3*Rt}),y.vrock.push({x:Tt,y:c(Tt,d)+.04,z:d,rx:G()*3,ry:G()*3,rz:G()*3,s3:[Rt,Rt*(.6+G()*.4),Rt*(.8+G()*.4)]})}for(let ht=0;ht<230;ht++){let _t=-14+G()*(a.VL+30),Rt=a.FLOOR+1+G()*26,Tt=(G()<.5?-1:1)*Rt,d=.8+G()*3.2,[p,X]=At(_t,Tt);y.boulder.push({x:p,y:c(p,X)-d*.42,z:X,rx:G()*3,ry:G()*3,rz:G()*3,s3:[d,d*(.5+G()*.4),d*(.8+G()*.5)]})}for(let ht=0;ht<26;ht++){let _t=K(a.FLOOR-3,a.FLOOR+1);if(it(_t.x,_t.z,7))continue;let Rt=1.3+G()*1.6,[Tt,d]=At(_t.x,_t.z);x({x:Tt,z:d,r:.45*Rt}),y.boulder.push({x:Tt,y:c(Tt,d)-.15,z:d,rx:G()*3,ry:G()*3,rz:G()*3,s3:[Rt,Rt*.7,Rt]})}for(let ht=0;ht<140;ht++){let _t=-40+G()*(a.VL+80),Rt=26+G()*40,Tt=(G()<.5?-1:1)*Rt;if(yn(_t*.06,Tt*.06)<.4)continue;let[d,p]=At(_t,Tt);y.rim.push({x:d,y:c(d,p)-.2,z:p,ry:G()*Se,s:1+G()*1.3})}}let m=new Map,v=(G,At)=>{let it=ws(Math.floor(G.x/6),Math.floor(G.z/6));m.set(it,(m.get(it)||0)+At)};for(let G of g)G.tree&&v(G,1);let P=[],F=lc(16),I=G=>{G.box=!0,G.c=Math.cos(G.rot||0),G.s=Math.sin(G.rot||0);let At=Math.hypot(G.hw,G.hd);return g.push(G),f.addArea(G,G.x-At,G.z-At,G.x+At,G.z+At),G};for(let G of r.sites){G.y=r.H(G.x,G.z);let At=G.kind,it=G.rot||0;if(["house","hut","reedhut","mudhif","teahouse","stall","board","logs","fwall"].includes(At))I({x:G.x,z:G.z,hw:G.w/2,hd:G.d/2,rot:it,tall:1,h:G.h,site:G});else if(At==="lighthouse")x({x:G.x,z:G.z,r:3.1,tall:1});else if(At==="fountain")x({x:G.x,z:G.z,r:G.r});else if(At==="well"||At==="ftower")x({x:G.x,z:G.z,r:G.r,tall:At==="ftower"?1:0});else if(At==="lamp"||At==="signpost")x({x:G.x,z:G.z,r:.14});else if(At==="palm")x({x:G.x,z:G.z,r:.3,tall:1,tree:1});else if(At==="gate")for(let mt of[-1,1])x({x:G.x-Math.sin(it)*mt*4.6,z:G.z+Math.cos(it)*mt*4.6,r:.55,tall:1});else if(At==="pier"){let mt=G.lake?r.lakes[0]:null,K=mt?o+mt.lv+.55:o+.95,pt={x:G.x,z:G.z,c:Math.cos(it),s:Math.sin(it),hw:G.w/2,hd:G.d/2,y:K};G.y=K,P.push(pt);let ot=Math.max(G.w,G.d)/2+1;F.addArea(pt,G.x-ot,G.z-ot,G.x+ot,G.z+ot)}}function O(G,At){let it=null;return F.each(G,At,0,mt=>{let K=G-mt.x,pt=At-mt.z;Math.abs(K*mt.c+pt*mt.s)<mt.hw+.05&&Math.abs(-K*mt.s+pt*mt.c)<mt.hd&&(it=mt)}),it}let D=32,b=new Map,L=(i.seed||1)*2654435761,J=(G,At)=>{let it=G-a.x,mt=At-a.z;return it>-66&&it<a.VL+30&&Math.abs(mt)<46};function k(G,At){let it=ws(G,At),mt=b.get(it);if(mt)return mt;mt={ci:G,cj:At,x:(G+.5)*D,z:(At+.5)*D,items:[],colls:[],on:!1};let K=hn((G*73856093^At*19349663^L)>>>0),pt=G*D,ot=At*D;for(let ht=0;ht<4;ht++)for(let _t=0;_t<4;_t++){let Rt=pt+(ht+.5)*8+(K()-.5)*5,Tt=ot+(_t+.5)*8+(K()-.5)*5,d=K(),p=K(),X=K(),C=K()*Se;if(Math.abs(Rt)>e-20||Math.abs(Tt)>e-20||J(Rt,Tt))continue;let V=n.rad(Rt,Tt);if(V<250&&(V<n.RP+3||n.inMaze(Rt,Tt)||!R(Rt,Tt,1.4)||Ot(Rt,Tt))||r.reserved(Rt,Tt)||st(Rt,Tt))continue;let B=c(Rt,Tt),at=B-o;if(at>-1&&at<.35&&d>.6){let U=r.flora(Rt,Tt,at,0,0);U.reed>0&&K()<U.reed&&mt.items.push({t:"reed",x:Rt,y:B-.1,z:Tt,s:.8+X*.6,ry:C});continue}if(at<.35)continue;let ut=Math.hypot(c(Rt+1.5,Tt)-B,c(Rt,Tt+1.5)-B)/1.5,Et=r.flora(Rt,Tt,at,r.coastS(Rt,Tt),ut);if(V<250&&B>60&&(Et.t*=.35),d<Et.t){let U=Et.pine+Et.oak+Et.palm+Et.olive||1,T=p*U,tt;(T-=Et.pine)<0?tt="pine":(T-=Et.oak)<0?tt="oak":(T-=Et.palm)<0?tt="palm":tt="olive";let nt=tt==="pine"?.85+X*.4:tt==="oak"?.8+X*.4:tt==="palm"?.85+X*.35:.8+X*.5;mt.items.push({t:tt,x:Rt,y:B-.12,z:Tt,s:nt,ry:C}),mt.colls.push({x:Rt,z:Tt,r:(tt==="pine"?.34:tt==="oak"?.45:tt==="palm"?.28:.3)*nt,tall:1,tree:1})}else if(d<Et.t+Et.b)mt.items.push({t:"bush",x:Rt,y:B,z:Tt,s:.7+X*.9,ry:C});else if(d<Et.t+Et.b+Et.rock){let U=X>.7,T=U?1.6+p*2.4:.5+p*.9;mt.items.push({t:U?"boulder":"rock",x:Rt,y:B-T*.25,z:Tt,s:T,ry:C,rx:p*3,rz:X*3}),T>1.1&&mt.colls.push({x:Rt,z:Tt,r:T*.5})}}return b.set(it,mt),mt}function st(G,At){if(typeof $t>"u")return!1;for(let it of $t)for(let mt of it.segs){let K=mt.B.x-mt.A.x,pt=mt.B.z-mt.A.z,ot=K*K+pt*pt,ht=Me(((G-mt.A.x)*K+(At-mt.A.z)*pt)/ot,0,1);if(Math.hypot(G-mt.A.x-K*ht,At-mt.A.z-pt*ht)<7&&te(mt.A.y,mt.B.y,ht)-mt.sag*4*ht*(1-ht)-c(G,At)<28)return!0}return!1}let dt=null;function et(G,At,it=170){if(dt&&Math.hypot(G-dt[0],At-dt[1])<12)return;dt=[G,At];let mt=Math.floor((G-it)/D),K=Math.floor((G+it)/D),pt=Math.floor((At-it)/D),ot=Math.floor((At+it)/D);for(let ht=mt;ht<=K;ht++)for(let _t=pt;_t<=ot;_t++){let Rt=k(ht,_t);if(!Rt.on){Rt.on=!0;for(let Tt of Rt.colls)g.push(Tt),f.add(Tt),Tt.tree&&v(Tt,1)}}for(let ht of b.values()){let _t=Math.hypot(ht.x-G,ht.z-At);if(ht.on&&_t>it+80){ht.on=!1;for(let Rt of ht.colls)f.remove(Rt),Rt.tree&&v(Rt,-1)}!ht.on&&_t>1900&&b.delete(ws(ht.ci,ht.cj))}}let bt=(G,At)=>(m.get(ws(Math.floor(G/6),Math.floor(At/6)))||0)/3,ft=lc(4);for(let G of n.bridges)for(let At=G.i;At<=G.j;At++)ft.add(G.seg.pts[At]);function Ot(G,At){let it=null,mt=1/0;if(ft.each(G,At,1,X=>{let C=(X.x-G)**2+(X.z-At)**2;C<mt&&(mt=C,it=X)}),!it||mt>2.5)return null;let K=it.seg.pts,pt=K[Math.min(it.k+1,K.length-1)],ot=K[Math.max(it.k-1,0)],ht=pt.x-ot.x,_t=pt.z-ot.z,Rt=Math.hypot(ht,_t)||1;ht/=Rt,_t/=Rt;let Tt=(G-it.x)*ht+(At-it.z)*_t,d=Math.abs((G-it.x)*-_t+(At-it.z)*ht);if(d>it.hw+.05)return{off:!0,p:it,tx:ht,tz:_t,lat:d};let p=K[Me(it.k+(Tt>0?1:-1),0,K.length-1)];return p.kind!=="bridge"&&Math.abs(Tt)>.35?null:it.gap&&Math.abs(Tt)<.32?{hole:!0,p:it,tx:ht,tz:_t,lat:d}:{y:te(it.y,p.y,Me(Math.abs(Tt)/.8,0,1)),p:it,tx:ht,tz:_t,lat:d}}let xt={x0:n.x+n.RP-1,x1:n.x+n.RP+4.35,z0:n.z-1.65,z1:n.z+1.65,y:n.HS+.09};function wt(G,At,it,mt){let K=c(G,At),pt=null,ot=null,ht=it==null?1/0:it+.7;if(it!=null&&n.rad(G,At)<200){let Tt=n.nearest(G,At,it,1);Tt&&Tt.d<=Tt.p.hw+.25&&Tt.p.kind!=="bridge"&&Tt.p.kind!=="stones"&&Tt.y-.04<=ht&&Math.abs(Tt.y-.04-K)<7&&(K=Tt.y-.04,pt="path")}let _t=Ot(G,At);_t&&_t.y!=null&&_t.y<=ht&&_t.y>K-.01&&(K=_t.y,pt="bridge",ot=_t);for(let Tt of n.stones)Math.hypot(G-Tt.x,At-Tt.z)<Tt.r+(mt?.5:0)&&Tt.y<=ht&&Tt.y>K&&(K=Tt.y,pt="stone",ot=Tt);G>xt.x0&&G<xt.x1&&At>xt.z0&&At<xt.z1&&xt.y<=ht&&xt.y>=K-.2&&(K=xt.y,pt="deck");let Rt=O(G,At);return Rt&&Rt.y<=ht&&Rt.y>K&&(K=Rt.y,pt="pier"),{y:K,kind:pt,plat:ot,b:_t}}function vt(G,At,it){let mt=n.rad(G,At);if(mt<n.RP+.5&&Math.abs(it-n.HS)<.6)return"plaza";if(mt<200){let ot=n.nearest(G,At,it,1);if(ot&&ot.d<ot.p.hw)return ot.p.kind==="stones"?"trail":ot.p.kind}let[K,pt]=a.toL(G,At);if(K>-2&&K<a.VL+2&&Math.abs(pt)<a.FLOOR+1)return"grass";if(mt>245){let ot=it-o,ht=r.nearRoad(G,At);if(ht&&ht.d<ht.hw+.3)return"trail";if(Math.hypot(G-r.fajr.x,At-r.fajr.z)<50)return"plaza";if(ot<3.5&&r.coastS(G,At)<150)return"sand"}return u(G,At)>.85?"rock":bt(G,At)>.55?"forest":"grass"}function Dt(G,At,it){let[mt,K]=a.toL(G,At);if(mt>-6&&mt<a.VL+6&&Math.abs(K-a.riverZ(mt))<.95){let ht=a.waterLevel(mt);if(it<ht+.3)return{kind:"river",level:ht}}let pt=n.stream,ot=n.rad(G,At);if(ot>245)return r.water(G,At,it);if(ot>pt.r0+1&&ot<pt.r1-1&&Math.abs(wn(pt.a,n.ang(G,At)))*ot<2.1){let _t=n.Hnat(G,At)+.5;if(it<_t+.25)return{kind:"torrent",level:_t,dx:Math.cos(pt.a),dz:Math.sin(pt.a)}}return null}let qt=0;function Kt(G,At,it,mt){for(let K=0;K<2;K++){let pt=++qt;f.each(G,At,1,ot=>{if(ot._st===pt||(ot._st=pt,mt&&!mt(ot)))return;if(ot.box){let d=G-ot.x,p=At-ot.z,X=d*ot.c+p*ot.s,C=-d*ot.s+p*ot.c,V=X-Me(X,-ot.hw,ot.hw),B=C-Me(C,-ot.hd,ot.hd),at=V*V+B*B;if(at>=it*it)return;if(at>1e-8){let ut=Math.sqrt(at),Et=(it-ut)/ut;X+=V*Et,C+=B*Et}else{let ut=ot.hw-Math.abs(X),Et=ot.hd-Math.abs(C);ut<Et?X=(X<0?-1:1)*(ot.hw+it):C=(C<0?-1:1)*(ot.hd+it)}G=ot.x+X*ot.c-C*ot.s,At=ot.z+X*ot.s+C*ot.c;return}let ht=G-ot.x,_t=At-ot.z,Rt=it+ot.r,Tt=ht*ht+_t*_t;if(Tt<Rt*Rt&&Tt>1e-8){let d=Math.sqrt(Tt),p=(Rt-d)/d;G+=ht*p,At+=_t*p}})}return[Me(G,-e+3,e-3),Me(At,-e+3,e-3)]}let pe=(G,At,it)=>f.each(G,At,1,mt=>mt.tall&&it(mt)),Ut=[...r.rest.map(G=>({...G,y:c(G.x,G.z)})),...n.rest,...a.rest],ne=Math.PI/180,he=G=>{let At=r.zones.find(it=>it.id===G);return[At.x,At.z]},$t=[{id:"fajr",name:"\u062D\u0628\u0644 \u0627\u0644\u0641\u062C\u0631",icon:"\u{1F305}",a:20,to:[r.fajr.x-330,r.fajr.z+110]},{id:"valley",name:"\u062D\u0628\u0644 \u0627\u0644\u0648\u0627\u062F\u064A",icon:"\u{1F98C}",a:128,to:[a.x-120,a.z-60]},{id:"huts",name:"\u062D\u0628\u0644 \u0627\u0644\u062D\u0637\u0651\u0627\u0628\u064A\u0646",icon:"\u{1FA93}",a:270,to:(([G,At])=>[G+70,At+40])(he("huts"))}].map((G,At)=>{let it=G.a*ne,mt={x:n.x+Math.cos(it)*14.6,y:n.HS+4.6,z:n.z+Math.sin(it)*14.6},K=G.to[0],pt=G.to[1],ot={x:K,y:c(K,pt)+4.4,z:pt},ht=[mt,ot],_t=(V,B,at,ut)=>({x:te(V.x,B.x,at),y:te(V.y,B.y,at)-ut*4*at*(1-at),z:te(V.z,B.z,at)});for(let V=0;V<6;V++){let B=null;for(let ut=0;ut<ht.length-1;ut++){let Et=ht[ut],U=ht[ut+1],T=Math.hypot(U.x-Et.x,U.z-Et.z),tt=T*.01;for(let nt=1;nt<40;nt++){let yt=nt/40,ct=_t(Et,U,yt,tt),gt=ct.y-3.4-c(ct.x,ct.z);(!B||gt<B.c)&&(B={c:gt,k:ut,t:yt,p:ct})}}if(B.c>0)break;let at={x:B.p.x,z:B.p.z,tower:!0};at.y=c(at.x,at.z)+12,ht.splice(B.k+1,0,at)}let Rt=[],Tt=0;for(let V=0;V<ht.length-1;V++){let B=ht[V],at=ht[V+1],ut=Math.hypot(at.x-B.x,at.y-B.y,at.z-B.z);Rt.push({A:B,B:at,s0:Tt,l:ut,sag:Math.hypot(at.x-B.x,at.z-B.z)*.01}),Tt+=ut}let d=(ot.x-mt.x)/Math.hypot(ot.x-mt.x,ot.z-mt.z),p=(ot.z-mt.z)/Math.hypot(ot.x-mt.x,ot.z-mt.z),X={i:At,...G,S:mt,E:ot,pts:ht,segs:Rt,L:Tt,ux:d,uz:p,stand:{x:n.x+Math.cos(it)*11.4,z:n.z+Math.sin(it)*11.4},end:{x:K-d*2.5,z:pt-p*2.5}};X.at=V=>{V=Me(V,0,Tt);let B=Rt[Rt.length-1];for(let Et of Rt)if(V<=Et.s0+Et.l){B=Et;break}let at=Me((V-B.s0)/B.l,0,1),ut=_t(B.A,B.B,at,B.sag);return ut.t=V/Tt,ut};let C=1e9;for(let V=1;V<200;V++){let B=X.at(V/200*Tt);C=Math.min(C,B.y-2.2-c(B.x,B.z))}return X.clear=C,X}),ye=[];function Le(G,At,it,mt,K){let pt=Math.cos(it),ot=Math.sin(it),ht=null,_t=0;for(let X=K;X>mt;X-=1){let C=c(G+pt*X,At+ot*X),V=c(G+pt*(X-1),At+ot*(X-1)),B=V-C;B>_t&&(_t=B,ht=X)}if(!ht||_t<.9)return null;let Rt=ht+1;for(;Rt<K&&c(G+pt*Rt,At+ot*Rt)-c(G+pt*(Rt+1),At+ot*(Rt+1))>.55;)Rt++;let Tt=ht-1;for(;Tt>mt&&c(G+pt*(Tt-1),At+ot*(Tt-1))-c(G+pt*Tt,At+ot*Tt)>.55;)Tt--;Rt+=1.6,Tt-=1.8;let d={x:G+pt*Rt,z:At+ot*Rt},p={x:G+pt*Tt,z:At+ot*Tt};return d.y=c(d.x,d.z),p.y=c(p.x,p.z),p.y-d.y<2.4||u(p.x,p.z)>1||u(d.x,d.z)>1||n.rad(d.x,d.z)<250&&(!R(d.x,d.z,1)||!R(p.x,p.z,1))?null:{bot:d,top:p,h:p.y-d.y}}let le=(G,At,it,mt,K,pt)=>{let ot=Le(G,At,it*ne,mt,K);ot&&ye.push({i:ye.length,name:pt,...ot})};for(let G of[35,140,215,320,250])le(n.x,n.z,G,43,54,"\u062D\u0632\u0627\u0645 \u0627\u0644\u0635\u062E\u0631");for(let G of[70,190,300,250])le(n.x,n.z,G,21,31,"\u0627\u0644\u062D\u0632\u0627\u0645 \u0627\u0644\u0639\u0627\u0644\u064A");for(let G of[[.95,760],[-2.2,900],[2.4,640],[-.45,1200],[1.9,1300],[-1.45,560]])le(n.x,n.z,G[0]/ne,G[1]-30,G[1]+30,"\u062C\u0631\u0641 \u0627\u0644\u062C\u0628\u0644");{let G=r.plateau;for(let At of[-60,30,150,210])le(G.x,G.z,At,G.r-140,G.r+150,"\u062C\u0631\u0641 \u0627\u0644\u0647\u0636\u0628\u0629")}return{map:i,HALF:e,M:n,V:a,H:c,slope:u,plains:l,surfaceAt:wt,groundKind:vt,water:Dt,collide:Kt,colliders:g,addColl:x,removeColl:G=>{f.remove(G);let At=g.indexOf(G);At>=0&&g.splice(At,1)},tallNear:pe,cgrid:f,veg:y,forestAt:bt,restPoints:Ut,bridgeAt:Ot,deck:xt,I:r,SEA:o,VC:D,vegCell:k,ensureVeg:et,platAt:O,zoneAt:r.zoneAt,zips:$t,anchors:ye}}var G1=9.81,W1=1,X1=1.15,q1=1.45,Y1=1.6,fi={walk:1.7,walkMin:.6,jog:3.6,run:4.7,sprint:6.3,swim:1,swimFast:1.5,jumpV:3.7,jumpH:3.2},Z1=i=>te(.62,1.85,Me((i-1)/5.3,0,1));function If(i,t={}){let e=i.M,n=i.V,s=[],r=1,o={t:0,hero:null,rest:null,reached:new Set,coins:[],coinsGot:0,climb:{done:!1,time:0},summit:null,scope:!1,wind:0,vq:{camp:null,merW:{x:0,z:0},zoneW:{x:0,z:0},penW:{x:0,z:0},met:!1,called:!1,caught:!1,delivered:!1},carry:null,focus:null,seed:1},a=[],l=(...d)=>a.push(d.length===1?d[0]:d);function c(d,p,X,C={}){let V={id:r++,kind:d,x:p,z:X,y:i.H(p,X),vx:0,vy:0,vz:0,face:0,air:!1,peak:0,r:.4,speed:0,run:!1,hopPh:0,landT:0,stun:0,rot:0,surf:null,...C};return s.push(V),V}let f=[...e.beasts,...i.I.beasts.map(d=>({kind:d.kind,home:{x:d.x,z:d.z,y:i.H(d.x,d.z)}}))].map(d=>c(d.kind,d.home.x+(d.ox||0),d.home.z,{home:d.home,r:d.kind==="boar"?.52:.44,state:"idle",t:Math.random()*2,cool:0,tx:d.home.x,tz:d.home.z,charge:null,ph:0,face:Math.random()*Se})),g=c("gazelle",n.x+60,n.z,{r:.42,state:"graze",t:0,gt:2.5,sus:0,stamina:4,ph:0,triedLeap:!1,tx:0,tz:0,fx:1,fz:0,stuck:0,hy:0}),x=c("merchant",n.x+20,n.z,{r:.42});function y(d,p,X,C,V,B={}){let at=d.air?2.5:d.kind==="hero"?9:10,ut=d.air?Math.max(C,d.airSpd||0):C,Et=B.pushX||0,U=B.pushZ||0;d.vx=Ye(d.vx,p*ut+Et,at,V),d.vz=Ye(d.vz,X*ut+U,at,V);let T=d.x,tt=d.z,nt=d.x+d.vx*V,yt=d.z+d.vz*V;if([nt,yt]=i.collide(nt,yt,d.r,B.collFilter),d.air){d.vy-=G1*V;let ct=d.y+d.vy*V,gt=i.surfaceAt(nt,yt,Math.max(d.y,ct)+.05,!0);if(gt.y>d.y+.45){let Mt=d.kind==="hero"?i.surfaceAt(nt,yt,d.y+1.15,!0):null;if(Mt&&Mt.y>d.y&&Mt.y<=d.y+1.15&&!d.mantled){d.mantled=!0,d.x=nt,d.z=yt,d.y=Mt.y,d.air=!1,d.vy=0,d.vx*=.4,d.vz*=.4,d.landT=.3,d.surf=Mt.kind,d.plat=Mt.plat,d.peak=0,d.speed=Math.hypot(d.x-T,d.z-tt)/V,d.onLand&&d.onLand(0,Mt);return}nt=d.x,yt=d.z,d.vx*=-.15,d.vz*=-.15,gt=i.surfaceAt(nt,yt,d.y+.05,!0)}if(ct<=gt.y&&d.vy<=0){let Mt=(d.peak||d.y)-gt.y;if(d.x=nt,d.z=yt,d.y=gt.y,d.air=!1,d.vy=0,d.landT=.25,d.surf=gt.kind,d.plat=gt.plat,d.mantled=!1,gt.kind==="stone"&&gt.plat){let zt=Math.hypot(d.x-gt.plat.x,d.z-gt.plat.z),Zt=.35;zt>Zt&&(d.x=gt.plat.x+(d.x-gt.plat.x)/zt*Zt,d.z=gt.plat.z+(d.z-gt.plat.z)/zt*Zt),d.vx*=.2,d.vz*=.2}d.onLand&&d.onLand(Mt,gt)}else d.x=nt,d.z=yt,d.y=ct,d.peak=Math.max(d.peak||ct,ct)}else{if(d.surf==="bridge"){let $=i.bridgeAt(nt,yt);if($&&$.off){let St=nt-d.x,Gt=yt-d.z,Jt=St*$.tx+Gt*$.tz;nt=d.x+$.tx*Jt,yt=d.z+$.tz*Jt}}else if(d.surf==="deck"){let $=i.deck;yt=Me(yt,$.z0+.35,$.z1-.35),nt=Math.min(nt,$.x1-.35)}let ct=i.surfaceAt(nt,yt,d.y+.4),gt=Math.hypot(nt-d.x,yt-d.z),Mt=ct.y-d.y,zt=ct.kind==="path"?.75:.35,Zt=d.boots?q1:W1;if(gt>1e-5&&Mt>zt&&Mt>gt*Zt){let $=(Gt,Jt)=>{let se=i.surfaceAt(Gt,Jt,d.y+.4),ge=Math.hypot(Gt-d.x,Jt-d.z),Ie=se.y-d.y;return Ie<=(se.kind==="path"?.75:.35)||Ie<=ge*Zt?[Gt,Jt,se]:null},St=$(nt,d.z)||$(d.x,yt);St?(nt=St[0],yt=St[1],ct=St[2]):(nt=d.x,yt=d.z,ct=i.surfaceAt(nt,yt,d.y),d.vx*=.3,d.vz*=.3)}let ce=Math.hypot(nt-d.x,yt-d.z);if(ct.y<d.y-Math.max(.45,ce*1.45)?B.cautious?(nt=d.x,yt=d.z,d.vx=d.vz=0,ct=i.surfaceAt(nt,yt,d.y),d.y=ct.y):(d.air=!0,d.vy=Math.min(0,d.vy),d.peak=d.y,d.x=nt,d.z=yt):(d.x=nt,d.z=yt,d.y=ct.y,d.surf=ct.kind,d.plat=ct.plat),!d.air&&!d.surf&&!B.noSlide){let $=i.H(d.x+.4,d.z)-i.H(d.x-.4,d.z),St=i.H(d.x,d.z+.4)-i.H(d.x,d.z-.4),Gt=Math.hypot($,St)/.8,Jt=d.boots?Y1:X1;if(Gt>Jt){let se=(Gt-Jt)*9*V;d.vx-=$/.8*se,d.vz-=St/.8*se}}}d.speed=Math.hypot(d.x-T,d.z-tt)/V}function R(d,p){let X=c("hero",p.x,p.z,{r:.32,skin:d,hp:100,maxHp:100,swim:!1,sneak:!1,lastHurt:-99,mode:"walk",chute:0,airSpd:0,water:null,inTorrent:0,faintT:0,face:p.face||0});return X.y=p.y!=null?p.y:i.H(p.x,p.z),X.onLand=(C,V)=>{l(V.kind==="stone"?"landStone":"land"),C>4.2&&m(X,Math.round((C-4.2)*14),"fall")},X}function m(d,p,X){d.kind!=="hero"||d.mode!=="walk"||p<=0||(d.hp=Math.max(0,d.hp-p),d.lastHurt=o.t,l(["hurt",p,X,d.hp]),d.hp<=0&&(d.mode="faint",d.faintT=0,d.vx=d.vz=0,l(["faint",X])))}function v(d,p,X,C,V,B){d.swim=!0,d.air=!1,d.vy=0;let at=Math.hypot(p.mx||0,p.mz||0),ut=at>1e-4?p.mx/at:0,Et=at>1e-4?p.mz/at:0,U=V<.08?0:B?fi.swimFast:fi.swim;d.vx=Ye(d.vx,ut*U,4,X),d.vz=Ye(d.vz,Et*U,4,X);let T=d.x+d.vx*X,tt=d.z+d.vz*X;i.I.coastS(T,tt)<-700?(T=d.x,tt=d.z,d.vx*=-.3,d.vz*=-.3,d.farWarn||(d.farWarn=!0,l("farSea"))):d.farWarn=!1,[T,tt]=i.collide(T,tt,d.r),d.x=T,d.z=tt,d.y=Math.max(C.level-.7+Math.sin(o.t*2.2)*.05,i.H(T,tt)),d.speed=Math.hypot(d.vx,d.vz),d.surf="water",d.speed>.3&&(d.face=Sn(d.face,Math.atan2(d.vz,d.vx),6,X));let nt=d.hopPh||0;d.hopPh=nt+(d.speed<.15?.9:1.6+d.speed*1.4)*X,d.hopPh&&Math.floor(nt/Math.PI)!==Math.floor(d.hopPh/Math.PI)&&l("splash"),o.t-d.lastHurt>6&&d.hp<d.maxHp&&(d.hp=Math.min(d.maxHp,d.hp+X*3))}function P(d,p){let X=o.rest||i.restPoints[0];if(Object.assign(d,{x:X.x,z:X.z,y:i.H(X.x,X.z),vx:0,vy:0,vz:0,air:!1,stun:0,rot:0,mode:"walk",face:X.face||0,inTorrent:0,surf:null,swim:!1,hopPh:0}),X.plaza&&(d.y=e.HS),p==="faint"){d.hp=d.maxHp;let C=Math.ceil(o.coinsGot*.2);o.coinsGot-=C,l(["respawn",X.name,C])}else l(["respawn",X.name,0]);o.focus=null}function F(d){let p=o.hero;o.zip={z:d,s:0,v:4},o.scope=!1,p.mode="zip",p.air=!0,p.vy=0,p.rot=0,l(["zipStart",d.name,d.icon])}function I(d,p){let X=o.zip,C=X.z,V=C.at(X.s),B=C.at(X.s+1.5),at=(B.y-V.y)/1.5;X.v+=(-9.8*at*.85-.0016*X.v*X.v)*p,X.v=Me(X.v,3.5,27);let ut=oe(C.L-70,C.L-12,X.s);ut>0&&(X.v=te(X.v,3.2,Me(ut*p*4,0,1))),X.s+=X.v*p,X.t=(X.t||0)+p;let Et=C.at(X.s),U=C.at(X.s+2);if(d.x=Et.x,d.y=Et.y-2.4,d.z=Et.z,X.s>=C.L-.4){let T=C.end;Object.assign(d,{x:T.x,z:T.z,y:i.H(T.x,T.z),mode:"walk",air:!1,vx:0,vz:0,vy:0,surf:null,peak:0}),o.zip=null,l(["zipEnd",C.name])}}function O(d){let p=o.hero;o.climbing={a:d,t:0,dur:Math.max(3,d.h/2.6)},p.mode="climb",p.vx=p.vz=0,p.rot=0,p.face=Math.atan2(d.top.z-d.bot.z,d.top.x-d.bot.x),l(["climbStart",d.name,Math.round(d.h)])}function D(d,p){let X=o.climbing,C=X.a;X.t+=p;let V=Me(X.t/X.dur,0,1),B=oe(0,1,V);d.x=te(C.bot.x,C.top.x,B),d.z=te(C.bot.z,C.top.z,B),d.y=Math.max(i.H(d.x,d.z),te(C.bot.y,C.top.y,B)-.6),V>=1&&(Object.assign(d,{x:C.top.x,z:C.top.z,y:i.H(C.top.x,C.top.z),mode:"walk",air:!1,surf:null}),o.climbing=null,l(["climbEnd",C.name]))}function b(d){let p=o.hero;o.fishing={t:0,bite:3+Math.random()*4.5,kind:d.kind},p.mode="fish",p.vx=p.vz=0,p.rot=0,p.air=!1,l("fishStart")}function L(d,p){let X=o.fishing;X.t+=p,X.t>=X.bite&&(o.fish=(o.fish||0)+1,d.mode="walk",o.fishing=null,l(["fish",o.fish]))}function J(d){let p=d.x+Math.cos(d.face)*3.5,X=d.z+Math.sin(d.face)*3.5,C=i.H(p,X),V=i.water(p,X,C+.05);return V&&(V.kind==="lake"||V.kind==="sea"||V.kind==="marsh")&&V.level-C>.3?V:null}function k(d,p,X){if(d.mode==="faint"){d.faintT+=X,d.faintT>1.6&&P(d,"faint");return}if(d.mode==="zip")return I(d,X);if(d.mode==="climb")return D(d,X);if(d.mode==="fish")if((p.mag||0)>.3)d.mode="walk",o.fishing=null,l("fishStop");else return L(d,X);if(d.mode!=="walk")return st(d,p,X);if(o.scope){d.vx=d.vz=0,d.speed=0;return}let C=Me(p.mag||0,0,1);d.stun>0&&(d.stun-=X,C=0);let V=C>.62&&!p.sneak;d.sneak=!!p.sneak&&C>.08;let B=C<.08?0:V?C>=.9?fi.sprint:te(fi.jog,fi.run,Me((C-.62)/.26,0,1)):d.sneak?.9:te(fi.walkMin,fi.walk,Me((C-.08)/.5,0,1));d.sprint=B>=fi.sprint-.01,i.ensureVeg(d.x,d.z);let at=i.water(d.x,d.z,d.y);d.water=at?at.kind:null;let ut=at&&(at.kind==="sea"||at.kind==="lake"||at.kind==="marsh")?at.level-i.H(d.x,d.z):0;if(ut>1.15&&!d.air)return v(d,p,X,at,C,V);ut>.25&&(B*=te(1,.5,Me(ut/1.15,0,1))),d.swim=!1;let Et=d.air?null:d.surf&&d.surf!=="path"?d.surf:i.groundKind(d.x,d.z,d.y);Et==="forest"?B*=.78:Et==="rock"&&(B*=.85),at&&at.kind==="river"&&(B*=.6);let U=0,T=0;if(o.summit&&o.summit.wind>0&&(U=o.summit.wind*1.6,T=o.summit.wind*.48),at&&at.kind==="torrent"&&!d.air){if(U+=at.dx*3.4,T+=at.dz*3.4,d.inTorrent+=X,d.inTorrent>.9){l("swept"),m(d,12,"water"),d.mode==="walk"&&P(d,"swept");return}}else d.inTorrent=0;if(p.jump&&!d.air&&d.stun<=0){d.air=!0,d.vy=fi.jumpV,d.peak=d.y,d.mantled=!1,l("jump");let gt=Math.hypot(d.vx,d.vz);gt>.4&&gt<fi.jumpH&&(d.vx*=fi.jumpH/gt,d.vz*=fi.jumpH/gt),d.airSpd=C>.08?Math.max(fi.jumpH,gt):0}let tt=Math.hypot(p.mx||0,p.mz||0),nt=tt>1e-4?p.mx/tt:0,yt=tt>1e-4?p.mz/tt:0;y(d,nt,yt,B,X,{pushX:U,pushZ:T}),d.run=V&&d.speed>2.6,d.speed>.3&&!d.air?d.face=Sn(d.face,Math.atan2(d.vz-T,d.vx-U),12,X):d.air&&Math.hypot(d.vx,d.vz)>.5&&(d.face=Sn(d.face,Math.atan2(d.vz,d.vx),8,X)),d.air&&d.vy<-7?d.rot+=X*5:d.air||(d.rot*=Math.pow(.001,X));let ct=d.hopPh;d.hopPh=d.speed<.25||d.air?0:d.hopPh+d.speed/Z1(d.speed)*Math.PI*X,d.hopPh&&Math.floor(ct/Math.PI)!==Math.floor(d.hopPh/Math.PI)&&l(d.water?"splash":["step",d.run,Et]),d.landT=Math.max(0,d.landT-X),o.t-d.lastHurt>6&&d.hp<d.maxHp&&(d.hp=Math.min(d.maxHp,d.hp+X*3));for(let gt of i.restPoints)(!gt.dyn||gt.on)&&Math.hypot(d.x-gt.x,d.z-gt.z)<(gt.plaza?e.RP-1:gt.fire?6:3.2)&&Math.abs(d.y-(gt.plaza?e.HS:gt.y))<2.5&&o.rest!==gt&&(o.rest=gt,o.reached.has(gt.id)||(o.reached.add(gt.id),(gt.flag||gt.fire||gt.id==="valley")&&l(["rest",gt.name,gt.id])));for(let gt of o.coins)!gt.taken&&Math.abs(gt.x-d.x)<1.25&&Math.abs(gt.z-d.z)<1.25&&Math.hypot(gt.x-d.x,gt.z-d.z)<1&&Math.abs(gt.y-(d.y+.6))<1.2&&(gt.taken=!0,o.coinsGot++,l(["coin",gt]));for(let gt of o.items)if(!gt.taken&&Math.abs(gt.x-d.x)<1.6&&Math.abs(gt.z-d.z)<1.6&&Math.hypot(gt.x-d.x,gt.z-d.z)<1.45&&Math.abs(gt.y-d.y)<1.8){gt.taken=!0;let Mt=wt(gt.task);Mt.got++,l(["pick",gt.task,Mt.got,Mt.def.need]),(!o.track||o.track===gt.task||wt(o.track).done)&&(o.track=gt.task)}!o.summit&&e.rad(d.x,d.z)<e.RP-1&&Math.abs(d.y-e.HS)<1&&!o.carry&&(o.summit={t:0,phase:"wait",wind:0},o.climb.done?l(["summit",0,!1]):(o.climb.done=!0,o.climb.time=o.t-(o.climb.t0||0),l(["summit",o.climb.time,!0]))),o.summit&&o.summit.phase==="wait"&&e.rad(d.x,d.z)>e.RP+8&&(o.summit=null)}function st(d,p,X){let C=o.carry;if(d.mode==="lift"){C.t+=X;let V=C.t;d.x=C.from[0]+V*V*2.2,d.z=C.from[2]+V*V*.66,d.y=C.from[1]+V*V*3.2+Math.sin(V*6)*.2,d.rot+=X*(4+V*3),V>2.6&&(d.mode="carry",C.t=0,C.p0=[d.x,d.y,d.z],l("carry"));return}if(d.mode==="carry"){C.t+=X;let V=Me(C.t/C.dur,0,1),B=V*V*(3-2*V),at=[C.p0,[e.x+80,e.HS+48,e.z+14],[n.x-50,n.VF+78,n.z],C.end],ut=tt=>{let nt=1-B;return nt*nt*nt*at[0][tt]+3*nt*nt*B*at[1][tt]+3*nt*B*B*at[2][tt]+B*B*B*at[3][tt]},Et=ut(0),U=ut(1),T=ut(2);d.face=Math.atan2(T-d.z,Et-d.x),d.x=Et,d.y=U,d.z=T,d.rot+=X*te(9,2,V),o.wind=te(1,.25,V),V>=1&&(d.mode="glide",d.vy=-3,d.vx=d.vz=0,d.chute=0,l("chute"),dt(d));return}if(d.mode==="glide"){d.chute=Math.min(1,d.chute+X*3),d.rot*=Math.pow(.015,X),d.vy+=(-3.2-d.vy)*Math.min(1,X*3);let V=Me(p.mag||0,0,1),B=Math.hypot(p.mx||0,p.mz||0),at=B>1e-4?p.mx/B:0,ut=B>1e-4?p.mz/B:0;d.vx=Ye(d.vx,at*4.6*V,3,X),d.vz=Ye(d.vz,ut*4.6*V,3,X),d.x+=d.vx*X,d.z+=d.vz*X,d.y+=d.vy*X,[d.x,d.z]=i.collide(d.x,d.z,.4,U=>U.tall),V>.1&&(d.face=Sn(d.face,Math.atan2(ut,at),5,X));for(let U of o.coins)!U.taken&&Math.hypot(U.x-d.x,U.z-d.z)<1.25&&Math.abs(U.y-(d.y+.55))<1.3&&(U.taken=!0,o.coinsGot++,l(["coin",U]));o.wind=Math.max(0,o.wind-X*.2);let Et=i.surfaceAt(d.x,d.z,d.y+.5);d.y<=Et.y&&(d.y=Et.y,d.vy=0,d.rot=0,d.chute=0,d.landT=.35,d.mode="walk",d.air=!1,d.surf=Et.kind,o.carry=null,o.drop={x:d.x+Math.cos(d.face)*1.2,z:d.z+Math.sin(d.face)*1.2,t:0,face:d.face},l(["landChute"]))}}function dt(d){o.coins=o.coins.filter(p=>!p.sky);for(let p=0;p<20;p++){let X=p*.62;o.coins.push({x:d.x+Math.cos(X)*3.2,z:d.z+Math.sin(X)*3.2,y:d.y-4-p*1.55,sky:!0})}}function et(d){let p=o.summit;if(!(!p||o.carry)){if(p.t+=d,p.phase==="wait"&&p.t>=45&&o.windStory&&(p.phase="wind",p.t=0,l("windStart")),p.phase==="wind"&&(p.wind=Me(p.t/7,0,1),o.wind=p.wind,p.t>8.5)){let X=o.hero;o.scope=!1;let[C,V]=bt();o.carry={t:0,from:[X.x,X.y,X.z],dur:6.2,end:[n.x+C,n.VF+i.V.H0(C,V)+34,n.z+V]},X.mode="lift",X.air=!0,p.phase="lift",l("lift")}p.phase==="lift"&&!o.carry&&(o.summit=null)}}function bt(){let d=hn(o.seed*7+13>>>0),p=(C,V)=>!i.tallNear(n.x+C,n.z+V,B=>Math.hypot(B.x-n.x-C,B.z-n.z-V)<4.5+B.r),X=null;for(let C=0;C<80;C++){let V=32+d()*56,B=d()<.5?-1:1,at=Me(n.riverZ(V)+B*(4.5+d()*3),-n.FLOOR+2.5,n.FLOOR-2.5);if(!(Math.hypot(V-o.vq.camp.x,at-o.vq.camp.z)<16)){if(p(V,at))return[V,at];X||(X=[V,at])}}return X||[60,n.riverZ(60)+5]}function ft(){o.summit&&o.summit.phase==="wait"&&o.windStory&&(o.summit.t=45)}function Ot(d){let p=o.hero,X=p.mode==="walk"&&!o.summit;for(let C of f){C.t+=d,C.cool=Math.max(0,C.cool-d);let V=p.x-C.x,B=p.z-C.z,at=Math.hypot(V,B),ut=Math.abs(p.y-C.y);if(at>120&&C.state==="idle"){C.vx=C.vz=0,C.speed=0;continue}let Et=p.run?14:p.speed>.4?9:5.5,U=C.kind==="wolf",T=(tt,nt,yt)=>{let ct=tt-C.x,gt=nt-C.z,Mt=Math.hypot(ct,gt);return Mt<.05?(y(C,0,0,0,d,{cautious:!0}),Mt):(y(C,ct/Mt,gt/Mt,yt,d,{cautious:!0,collFilter:zt=>!zt.hedge||!0}),C.speed>.2&&(C.face=Sn(C.face,Math.atan2(C.vz,C.vx),8,d)),Mt)};switch(C.state){case"idle":if(X&&C.cool<=0&&at<Et&&ut<3){C.state="notice",C.t=0,l([U?"growl":"grunt",C.kind]);break}if(C.t>3+Math.random()*3){C.t=0;let tt=Math.random()*Se;C.tx=C.home.x+Math.cos(tt)*5,C.tz=C.home.z+Math.sin(tt)*5}Math.hypot(C.tx-C.x,C.tz-C.z)>.6?T(C.tx,C.tz,1):T(C.x,C.z,0);break;case"notice":if(T(C.x,C.z,0),C.face=Sn(C.face,Math.atan2(B,V),10,d),!X){C.state="return";break}if(C.t>(U?.6:.9)){if(C.state=U?"chase":"charge",C.t=0,!U){let tt=at||1;C.charge=[V/tt,B/tt]}l([U?"howl":"grunt",C.kind])}break;case"chase":T(p.x,p.z,5),(!X||at>22||C.t>7||Math.hypot(C.x-C.home.x,C.z-C.home.z)>32)&&(C.state="return",C.cool=3);break;case"charge":{let tt=C.x,nt=C.z;y(C,C.charge[0],C.charge[1],7.8,d,{cautious:!0}),C.face=Math.atan2(C.charge[1],C.charge[0]),(Math.hypot(C.x-tt,C.z-nt)<7.8*d*.3||C.t>1.8)&&(C.state=X&&at<12&&C.t<6?"notice":"return",C.t=0);break}case"return":(T(C.home.x,C.home.z,2.2)<1||C.t>20)&&(C.state="idle",C.t=0);break}if(C.ph+=d*(C.state==="chase"||C.state==="charge"?16:C.speed>.3?8:0),(C.state==="chase"||C.state==="charge")&&at<1.25&&ut<1.4&&p.stun<=0&&X){let tt=at||1;p.vx=V/tt*6,p.vz=B/tt*6,p.stun=.9,p.landT=.3,C.state="return",C.cool=6;let nt=U?18:25;l(["bitten",C.kind,nt]),m(p,nt,C.kind)}}}let xt=i.I.tasks,wt=d=>o.tasks.find(p=>p.id===d);function vt(d){return d.id==="gazelle"?o.vq.caught?1:0:d.id==="fish"?Math.min(o.fish,d.def.need):d.got}let Dt=(d,p)=>[d-n.x,p-n.z],qt={mer:[1.05,-.5],zone:[2.35,.35],pen:[-4.45,-1.75]},Kt=[[-1.1,-2.8,1.25],[0,-2.8,1.3],[1.1,-2.8,1.25],[-.78,-.8,.55],[4,-2.4,.62],[1.95,-1.8,.35],[-2.05,-1.6,.4],[1.68,-.25,.14],[-1.68,-.25,.14],[1.05,-.5,.42],[-5.8,-1,.3],[-5.8,-1.8,.3],[-5.8,-2.6,.3],[-5.1,-2.9,.3],[-4.45,-2.9,.3],[-3.8,-2.9,.3],[-3.1,-2.6,.3],[-3.1,-1.8,.3],[-3.1,-1,.3]],pe=[],Ut={id:"camp",x:0,z:0,y:0,name:"\u062E\u064A\u0645\u0629 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",face:0,flag:!1,dyn:!0,on:!1};i.restPoints.push(Ut);function ne(d,p,X){let C=Math.cos(d.rot),V=Math.sin(d.rot);return{x:n.x+d.x+p*C+X*V,z:n.z+d.z-p*V+X*C}}let he=80*Math.PI/180,_e=60*Math.PI/180;function $t(){for(let C of pe)i.removeColl(C);let d=e.x+Math.cos(he)*8.7,p=e.z+Math.sin(he)*8.7,X=Math.atan2(e.z-p,e.x-d);o.vq.camp={summit:!0,rot:Math.PI/2-X,base:e.HS-n.VF,x:0,z:0},o.vq.merW={x:d,z:p},o.vq.zoneW={x:e.x+Math.cos(_e)*7.2,z:e.z+Math.sin(_e)*7.2},o.vq.penW={x:e.x+Math.cos(_e+.25)*9.2,z:e.z+Math.sin(_e+.25)*9.2},pe=[i.addColl({x:e.x+Math.cos(he)*10,z:e.z+Math.sin(he)*10,r:1.1})],Object.assign(x,{x:d,z:p,y:e.HS,face:X})}function ye(d){d.state="flee",d.t=0,d.stuck=0;let p=o.hero,X=Math.hypot(d.x-p.x,d.z-p.z)||1;d.fx=(d.x-p.x)/X,d.fz=(d.z-p.z)/X,l("snort")}function Le(d){let p=g,X=o.hero,C=o.vq;p.t+=d;let V=X.x-p.x,B=X.z-p.z,at=Math.hypot(V,B)||.001,ut=Math.atan2(B,V);if(at>140&&!C.caught){p.vx=p.vz=0;return}let Et=X.mode==="walk"?X.speed:0,U=Math.hypot(p.vx,p.vz)>.2;if(p.ph+=d*(p.state==="flee"?15:U?8:0),p.state!=="flee"&&p.state!=="leap"&&(p.stamina=Math.min(4,p.stamina+d*(p.state==="tired"?.5:.8))),!C.caught&&["graze","look","walk","alert"].includes(p.state)){let ct=at<22?1+(1-at/22)*1.6:0,gt=p.state!=="graze",Mt=Et>2.6?gt?2.6:1.4:Et>1?gt?1.1:.06:Et>.3&&gt?.35:0;p.sus=Me(p.sus+(Mt*ct>0?Mt*ct:-.3)*d,0,1)}let T=(ct,gt)=>{let[Mt,zt]=Dt(ct,gt);return i.slope(ct,gt)<.7&&Mt>1&&Mt<n.VL-1&&Math.abs(zt)<n.FLOOR+1},tt=(ct,gt,Mt)=>{let zt=ct-p.x,Zt=gt-p.z,ce=Math.hypot(zt,Zt);if(ce<.05)return p.vx=p.vz=0,ce;p.vx=Ye(p.vx,zt/ce*Mt,6,d),p.vz=Ye(p.vz,Zt/ce*Mt,6,d);let $=p.x+p.vx*d,St=p.z+p.vz*d;return[$,St]=i.collide($,St,.42),T($,St)&&(p.x=$,p.z=St),p.face=Sn(p.face,Math.atan2(p.vz,p.vx),7,d),ce},[nt,yt]=Dt(p.x,p.z);switch(p.state){case"graze":if(p.vx=p.vz=0,p.sus>.5)p.state="alert",p.t=0,l("snort");else if(p.t>p.gt)if(p.t=0,Math.random()<.72)p.state="look";else for(let ct=0;ct<12;ct++){let gt=nt+(Math.random()-.5)*14,Mt=yt+(Math.random()-.5)*10;if(n.onFloor(gt,Mt)&&Math.abs(Mt-n.riverZ(gt))>1.6){p.tx=n.x+gt,p.tz=n.z+Mt,p.state="walk";break}}break;case"look":p.vx=p.vz=0,at<26&&(p.face=Sn(p.face,ut,4,d)),p.sus>.5?(p.state="alert",p.t=0,l("snort")):p.t>1.1&&(p.state="graze",p.t=0,p.gt=1.4+Math.random()*1.8);break;case"walk":if(p.sus>.5){p.state="alert",p.t=0,p.vx=p.vz=0,l("snort");break}(tt(p.tx,p.tz,1.1)<.4||p.t>6)&&(p.state="graze",p.t=0,p.vx=p.vz=0,p.gt=1.4+Math.random()*1.8);break;case"alert":p.vx=p.vz=0,p.face=Sn(p.face,ut,8,d),p.sus>=1||at<1.6?ye(p):p.sus<.3&&(p.state="graze",p.t=0,p.gt=1.2+Math.random()*1.2);break;case"flee":{p.stamina-=d;let ct=8.2*(.55+.45*Math.max(0,p.stamina)/4),gt=-V/at,Mt=-B/at;Math.abs(yt)>5.5&&(Mt-=Math.sign(yt)*(Math.abs(yt)-5.5)*.45),nt<8&&(gt+=(8-nt)*.35),nt>n.VL-8&&(gt-=(nt-n.VL+8)*.35);let zt=Math.hypot(gt,Mt)||1;p.fx=Ye(p.fx,gt/zt,5,d),p.fz=Ye(p.fz,Mt/zt,5,d);let Zt=Math.hypot(p.fx,p.fz)||1,ce=p.fx/Zt,$=p.fz/Zt,St=p.x+ce*ct*d,Gt=p.z+$*ct*d;[St,Gt]=i.collide(St,Gt,.42);let Jt=Math.hypot(St-p.x,Gt-p.z);T(St,Gt)&&(p.vx=(St-p.x)/d,p.vz=(Gt-p.z)/d,p.x=St,p.z=Gt),p.stuck=Jt<ct*d*.35?p.stuck+d:0,p.face=Sn(p.face,Math.atan2($,ce),10,d),p.stuck>.35&&at<10?(p.state="cornered",p.t=0,p.vx=p.vz=0):p.stamina<=0?(p.state="tired",p.t=0,l("tired")):at>32&&p.t>1.5&&(p.state="graze",p.t=0,p.vx=p.vz=0,p.sus=.35,p.gt=1.5);break}case"tired":at<9?tt(p.x-V/at*2,p.z-B/at*2,2.3):p.vx=p.vz=0,p.stamina>3.2&&p.t>2.2&&(p.sus=.45,at<6?ye(p):(p.state="graze",p.t=0));break;case"cornered":if(p.vx=p.vz=0,p.face=Sn(p.face,ut,8,d),!p.triedLeap&&at<4&&p.t>.4){let ct=X.x+V/at*4.5,gt=X.z+B/at*4.5,[Mt,zt]=Dt(ct,gt);n.onFloor(Mt,zt)||(ct=X.x+V/at*3,gt=n.z+Me(Dt(0,X.z+B/at*3)[1],-(n.FLOOR-2),n.FLOOR-2)),Object.assign(p,{triedLeap:!0,state:"leap",t:0,from:[p.x,p.z],to:[ct,gt]}),l("snort")}else p.t>4&&at>9&&(p.state="graze",p.t=0,p.sus=.4);break;case"leap":{let ct=Math.min(1,p.t/.75);p.x=te(p.from[0],p.to[0],ct),p.z=te(p.from[1],p.to[1],ct),p.hy=Math.sin(ct*Math.PI)*1.5,p.vx=(p.to[0]-p.from[0])/.75,p.vz=(p.to[1]-p.from[1])/.75,p.face=Math.atan2(p.vz,p.vx),ct>=1&&(p.hy=0,ye(p));break}case"follow":{let ct=X.x-Math.cos(X.face)*1.45,gt=X.z-Math.sin(X.face)*1.45,Mt=Math.hypot(ct-p.x,gt-p.z);if(Mt>12)p.x=ct,p.z=gt;else if(Mt>.08){p.vx=Ye(p.vx,(ct-p.x)/Mt*Math.min(7,Mt*3.2),6,d),p.vz=Ye(p.vz,(gt-p.z)/Mt*Math.min(7,Mt*3.2),6,d);let zt=p.x+p.vx*d,Zt=p.z+p.vz*d;[zt,Zt]=i.collide(zt,Zt,.42),p.x=zt,p.z=Zt,p.face=Sn(p.face,Math.atan2(p.vz,p.vx),7,d)}else p.vx=p.vz=0;break}case"pen":{let ct=C.penW,gt=Math.hypot(ct.x-p.x,ct.z-p.z);gt>.3?(p.vx=(ct.x-p.x)/gt*1.3,p.vz=(ct.z-p.z)/gt*1.3,p.x+=p.vx*d,p.z+=p.vz*d,p.face=Sn(p.face,Math.atan2(p.vz,p.vx),6,d)):p.vx=p.vz=0;break}}p.y=i.H(p.x,p.z)+(p.hy||0),!C.caught&&X.mode==="walk"&&["graze","look","walk","alert","tired","cornered"].includes(p.state)&&at<1.55&&(p.hy||0)<.25&&Math.abs(X.y-p.y)<1.5&&(C.caught=!0,p.state="follow",p.vx=p.vz=0,p.sus=0,o.focus={t:2.2,dist:5.2,yaw:Math.atan2(p.z-X.z,p.x-X.x)-Math.PI/2},l("catch"))}function le(d){let p=o.hero,X=o.vq;if(p.mode!=="walk")return;let C=Math.hypot(p.x-X.merW.x,p.z-X.merW.z),V=X.camp,B=Math.atan2(X.merW.z-e.z,X.merW.x-e.x);if(!X.called&&C<24&&Math.abs(p.y-x.y)<8&&(X.called=!0,l("call")),!X.met&&C<4.2&&(X.met=!0,o.focus={t:3.4,dist:6.2,x:(p.x+X.merW.x)/2,z:(p.z+X.merW.z)/2,yaw:B,talk:!0},l("meet")),C<3.6&&Math.abs(p.y-x.y)<3)for(let at of o.tasks)at.done||at.id==="gazelle"||vt(at)<at.def.need||(at.done=!0,at.id==="fish"&&(o.fish-=at.def.need),o.focus={t:3.2,dist:6.4,x:(p.x+X.merW.x)/2,z:(p.z+X.merW.z)/2,yaw:B,talk:!0},l(["handIn",at.id,at.def.reward]),o.track===at.id&&(o.track=null));X.caught&&!X.delivered&&Math.hypot(p.x-X.zoneW.x,p.z-X.zoneW.z)<1.7&&(X.delivered=!0,g.state="pen",wt("gazelle").done=!0,wt("gazelle").got=1,o.track==="gazelle"&&(o.track=null),o.focus={t:4.6,dist:6.6,x:(p.x+X.merW.x)/2,z:(p.z+X.merW.z)/2,yaw:B,talk:!0},l("deliver"))}function G(d,p={}){o.seed=(p.seed!=null?p.seed:Math.random()*4294967295)>>>0;let X=hn(o.seed);s.length=0,s.push(...f,g,x);for(let ut of f)Object.assign(ut,{x:ut.home.x,z:ut.home.z,y:ut.home.y,vx:0,vz:0,vy:0,air:!1,state:"idle",cool:0,t:Math.random()*2});$t();let C=60,V=0;for(let ut=0;ut<400;ut++){let Et=6+X()*(n.VL-12),U=(X()-.5)*2*(n.FLOOR-2.5);if(!(Et<22||Math.abs(U-n.riverZ(Et))<2.2||!n.onFloor(Et,U))){C=Et,V=U;break}}Object.assign(g,{x:n.x+C,z:n.z+V,vx:0,vz:0,state:"graze",t:0,gt:2.5,sus:0,stamina:4,triedLeap:!1,hy:0,face:X()*Se}),g.y=i.H(g.x,g.z),Object.assign(o.vq,{met:!1,called:!1,caught:!1,delivered:!1}),Ut.on=!1,o.coins=e.coins.map(ut=>({...ut,taken:!1})),o.zip=null,o.climbing=null,o.fishing=null,o.fish=0,o.tasks=xt.map(ut=>({id:ut.id,def:ut,got:0,done:!1})),o.track=null,o.boardRead=!1,o.items=xt.flatMap(ut=>ut.items.map(Et=>({...Et,task:ut.id,taken:!1}))),o.coinsGot=0,o.summit=null,o.scope=!1,o.carry=null,o.focus=null,o.wind=0,o.t=0,o.drop=null,o.climb={done:!1,time:0,t0:0},o.reached=new Set;let B=i.restPoints[0];o.rest=B,o.reached.add(B.id),o.hero=R(d,B),s.push(o.hero),o.hero.boots=!!o.tools.boots;let at=o.hero;if(p.at==="summit"&&(Object.assign(at,{x:e.x-e.RP+2.5,z:e.z+2,y:e.HS}),o.rest=i.restPoints.find(ut=>ut.id==="summit"),o.climb.done=!0),p.at==="valley"){let ut=i.restPoints.find(Et=>Et.id==="valley");Object.assign(at,{x:ut.x,z:ut.z,y:ut.y,face:0}),o.rest=ut}return{camp:0,gazelle:[g.x,g.z],start:[at.x,at.z]}}function At(){let d=o.hero;if(!d)return null;let p=d.mode==="walk"&&!d.air||d.mode==="fish";return{v:1,seed:o.seed,t:+o.t.toFixed(1),pos:p?{x:+d.x.toFixed(2),z:+d.z.toFixed(2),y:+d.y.toFixed(2)}:null,face:+d.face.toFixed(3),hp:Math.round(d.hp),rest:o.rest&&o.rest.id,reached:[...o.reached],tasks:o.tasks.map(X=>[X.id,X.got,X.done?1:0]),items:o.items.map(X=>X.taken?1:0).join(""),fish:o.fish,track:o.track,board:o.boardRead?1:0,vq:{met:o.vq.met?1:0,called:o.vq.called?1:0,caught:o.vq.caught&&!o.vq.delivered?1:0,delivered:o.vq.delivered?1:0},climbDone:o.climb.done?1:0,coins:o.coins.map(X=>X.taken?1:0).join(""),coinsGot:o.coinsGot}}function it(d){if(!d||d.v!==1||!o.hero)return!1;let p=o.hero,X=o.vq;o.t=d.t||0;for(let B of d.reached||[])o.reached.add(B);let C=i.restPoints.find(B=>B.id===d.rest);C&&(o.rest=C);for(let[B,at,ut]of d.tasks||[]){let Et=wt(B);Et&&(Et.got=at,Et.done=!!ut)}if((d.items||"").split("").forEach((B,at)=>{o.items[at]&&(o.items[at].taken=B==="1")}),o.tasks.every(B=>B.done)){for(let B of o.tasks)B.got=0,B.done=!1;for(let B of o.items)B.taken=!1}o.fish=d.fish||0,o.track=d.track||null,o.boardRead=!!d.board,Object.assign(X,{met:!!d.vq.met,called:!!d.vq.called,delivered:!!d.vq.delivered}),d.climbDone&&(o.climb.done=!0),(d.coins||"").split("").forEach((B,at)=>{o.coins[at]&&(o.coins[at].taken=B==="1")}),o.coinsGot=d.coinsGot||0;let V=d.pos||(C?{x:C.x,z:C.z,y:C.y}:null);if(V){let B=i.surfaceAt(V.x,V.z,V.y+.6);Object.assign(p,{x:V.x,z:V.z,y:Math.max(B.y,Math.min(V.y,B.y+.05)),vx:0,vz:0,vy:0,air:!1,mode:"walk",surf:B.kind,plat:B.plat})}return p.face=d.face||0,p.hp=Me(d.hp||p.maxHp,35,p.maxHp),X.delivered?(g.state="pen",Object.assign(g,{x:X.penW.x,z:X.penW.z,y:e.HS}),wt("gazelle").done=!0):d.vq.caught&&(X.caught=!0,g.state="follow",Object.assign(g,{x:p.x-Math.cos(p.face)*2,z:p.z-Math.sin(p.face)*2,vx:0,vz:0,sus:0}),g.y=i.H(g.x,g.z)),!0}function mt(d){o.tools={...d||{}},o.hero&&(o.hero.boots=!!o.tools.boots)}function K(d){let[p,X]=String(d).split(":");if(p==="zip"){let C=i.zips[+X];return C&&o.hero.mode==="walk"&&F(C),!0}if(p==="rope"){let C=i.anchors[+X];return C?o.tools.rope?(o.hero.mode==="walk"&&O(C),!0):(l(["needTool","rope"]),!1):!1}if(p==="fish"){let C=J(o.hero);return o.tools.rod?(C&&b(C),!0):(l(["needTool","rod"]),!1)}return p==="shop"?(l("shop"),!0):p==="board"?(o.boardRead=!0,l("board"),!0):d==="scope"?(o.scope=!o.scope,!0):(d==="tea"&&(o.hero.hp=o.hero.maxHp),!0)}function pt(){let d=o.hero;if(d.mode!=="walk"||d.air)return null;let p=null,X=1e9;if(o.summit&&o.summit.phase==="wait"){for(let C of e.plaza.inter){let V=Math.hypot(d.x-C.x,d.z-C.z);V<C.r&&V<X&&(X=V,p=C)}for(let C of i.zips){let V=Math.hypot(d.x-C.stand.x,d.z-C.stand.z);V<2.4&&V<X&&(X=V,p={id:"zip:"+C.i,label:`\u{1F6A1} ${C.name} ${C.icon}`,r:2.4})}if(o.vq.met){let C=Math.hypot(d.x-o.vq.merW.x,d.z-o.vq.merW.z);C<3.2&&C<X&&!(o.vq.caught&&!o.vq.delivered)&&(X=C,p={id:"shop",label:"\u{1F6D2} \u062F\u0643\u0627\u0646 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",r:3.2})}}for(let C of i.anchors){let V=Math.hypot(d.x-C.bot.x,d.z-C.bot.z);V<2.2&&Math.abs(d.y-C.bot.y)<1.6&&V<X&&(X=V,p={id:"rope:"+C.i,label:o.tools.rope?`\u{1F9D7} \u0627\u062A\u0633\u0644\u0651\u0642 ${Math.round(C.h)} \u0645`:"\u{1F9D7} \u062A\u062D\u062A\u0627\u062C \u062D\u0628\u0644 \u062A\u0633\u0644\u0651\u0642",r:2.2})}{let C=i.I.board,V=d.x-C.x,B=d.z-C.z,at=Math.hypot(V,B);at<7&&V*C.fx+B*C.fz>.8&&Math.abs(d.y-i.H(C.x,C.z))<2&&at<X&&(X=at,p={id:"board",label:"\u{1F4DC} \u0627\u0642\u0631\u0627 \u0644\u0648\u062D\u0629 \u0627\u0644\u0637\u0644\u0628\u0627\u062A",r:7})}return!p&&!d.swim&&J(d)&&(p={id:"fish",label:o.tools.rod?"\u{1F3A3} \u0627\u0635\u0637\u0627\u062F \u0633\u0645\u0686":"\u{1F3A3} \u062A\u062D\u062A\u0627\u062C \u0633\u0646\u0627\u0631\u0629",r:3}),p}function ot(){let d=o.track&&wt(o.track);return d&&!d.done?d:o.tasks.find(p=>!p.done)||null}function ht(){let d=o.hero,p=o.vq;if(d.mode==="faint")return"\u{1F635} \u2026";if(p.caught&&!p.delivered)return"\u{1F3D4}\uFE0F \u0631\u062C\u0651\u0639 \u0627\u0644\u063A\u0632\u0627\u0644 \u0644\u0623\u0628\u0648 \u062C\u0627\u0633\u0645 \u0628\u0627\u0644\u0642\u0645\u0629";if(!o.boardRead&&!p.met&&!o.track)return"\u{1F4DC} \u0627\u0642\u0631\u0627 \u0644\u0648\u062D\u0629 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0628\u0633\u0627\u062D\u0629 \u0627\u0644\u0641\u062C\u0631";let X=ot();if(!X)return"\u{1F30D} \u0643\u0645\u0651\u0644\u062A \u0643\u0644 \u0627\u0644\u0637\u0644\u0628\u0627\u062A! \u0627\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u062C\u0632\u064A\u0631\u0629";let C=X.def,V=vt(X),B=(i.I.zones.find(at=>at.id===C.zone)||{}).name||"";return V>=C.need?`\u26F0\uFE0F \u0633\u0644\u0651\u0645 ${C.icon} ${C.name} \u0644\u0623\u0628\u0648 \u062C\u0627\u0633\u0645 \u0628\u0627\u0644\u0642\u0645\u0629`:X.id==="fish"&&!o.tools.rod?"\u{1F3A3} \u0627\u0634\u062A\u0631\u064A \u0633\u0646\u0627\u0631\u0629 \u0645\u0646 \u062F\u0643\u0627\u0646 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645 \u0628\u0627\u0644\u0642\u0645\u0629":X.id==="gazelle"?`\u{1F98C} \u062C\u064A\u0628 ${C.name} \u0645\u0646 ${B}`:`${C.icon} ${C.name} ${V}/${C.need} \u2014 ${B}`}function _t(){let d=o.hero,p=o.vq;if(p.caught&&!p.delivered)return{x:e.x,z:e.z,icon:"\u{1F3D4}\uFE0F"};let X=ot();if(!X)return null;let C=X.def;if(vt(X)>=C.need||X.id==="fish"&&!o.tools.rod)return{x:e.x,z:e.z,icon:"\u{1F3D4}\uFE0F"};let V=null,B=1e9;for(let at of o.items)if(at.task===X.id&&!at.taken){let ut=Math.hypot(at.x-d.x,at.z-d.z);ut<B&&(B=ut,V=at)}return V&&B<600?{x:V.x,z:V.z,icon:C.icon,item:!0}:{x:C.at.x,z:C.at.z,icon:C.icon}}function Rt(d,p){if(!(d>0))return[];o.t+=d;let X=o.hero;if(!X)return[];k(X,p||{},d),et(d),!o.summit&&!o.carry&&(o.wind=Math.max(0,o.wind-d*.35)),Ot(d),Le(d),le(d),o.drop&&(o.drop.t+=d),o.focus&&(o.focus.t-=d,o.focus.t<=0&&(o.focus=null));let C=a.slice();return a.length=0,C}return o.tools={},o.fish=0,o.tasks=[],o.items=[],{S:o,ents:s,beasts:f,gz:g,merchant:x,step:Rt,enter:G,interact:K,nearInteract:pt,skipWait:ft,objective:ht,trackTarget:_t,setTrack:d=>{o.track=d},setTools:mt,have:vt,snapshot:At,restore:it,respawn:()=>{o.hero&&o.hero.mode==="walk"&&P(o.hero,"menu")},hurt:d=>m(o.hero,d,"test")}}var cc=new Fe,J1=new Fe,An=new Fe,ko=new Fe,Os=(i,t,e,n)=>i.copy(cc.set(t)).lerp(J1.set(e),Me(n,0,1));function Ff({scene:i,G:t,U:e,camera:n,waterN:s,glowTex:r,colorBase:o,S:a}){let l=t.I,c=t.SEA,u=t.M,f=t.HALF,g=new Te({vertexColors:!0}),x=new Te({vertexColors:!0,flatShading:!0}),y=ic(x,e),R=new dn,m=new Fe;function v(M,w,h,_,S,E){let A=w-c;if(A<.4)return Os(S,"#D9C99A","#3C7C88",-A/5),A<-5&&S.lerp(An.set("#1E4C69"),Me((-A-5)/22,0,1)),S;Os(S,"#5C973C","#9CC45A",un(M*.02+9,h*.02)*1.2-.1),S.lerp(An.set("#B5AE68"),oe(.55,.8,yn(M*.008+3,h*.008))*.42);let z=l.coastS(M,h);if(E>0){let H=l.flora(M,h,A,z,_);S.lerp(An.set("#3D6629"),Me(H.t,0,.9)*.6),H.reed>.3&&S.lerp(An.set("#6F7E3E"),.6)}else S.lerp(An.set("#3D6629"),oe(.44,.62,un(M*.0032+5,h*.0032-3))*.45);S.lerp(An.set("#8D8A70"),oe(300,390,A)*.45);let W=Math.hypot(M+1500,h+1650);if(W<520&&(Os(An,"#D2AE52","#E6CB72",yn(M*.5,0)*.5+.5*Math.sin(M*.9+h*.15)**2),S.lerp(An,oe(520,380,W)*.85)),z<160&&A<4.5&&S.lerp(An.set("#E4D3A0"),oe(4.5,1.6,A)),_>.72){let H=l.peaks.some(N=>N.dark&&Math.hypot(M-N.x,h-N.z)<N.r);Os(An,H?"#3E3A37":"#6C665C",H?"#6A645E":"#ADA595",yn(M*.2,w*.6)),S.lerp(An,oe(.72,1.1,_))}if(E>0){let H=l.nearRoad(M,h);H&&H.d<H.hw+1.2&&S.lerp(An.set(E>1?"#A88A5E":"#9E8A62"),oe(H.hw+1.2,H.hw-.3,H.d)*.9);let N=l.nearRiver(M,h);N&&N.d<N.w+2.5&&S.lerp(An.set("#857A55"),oe(N.w+2.5,N.w,N.d)*.7)}return S}let P=[{size:1024,split:760},{size:256,split:170},{size:64,split:0}],F=32,I=-4608,O=new Map,D=(M,w,h)=>M*1e8+(w+5e3)*1e4+(h+5e3),b=g;function L(M,w,h){let _=P[M].size,S=_/F,E=I+w*_,A=I+h*_,z=F+1,W=z+2,H=new Float32Array(W*W);for(let re=0;re<W;re++)for(let ae=0;ae<W;ae++)H[re*W+ae]=t.H(E+(ae-1)*S,A+(re-1)*S);let N=(re,ae)=>H[(ae+1)*W+(re+1)],q=new Float32Array((z*z+4*F)*3),lt=new Float32Array(q.length),Lt=new Float32Array(q.length),Nt=[],Yt=0;for(let re=0;re<z;re++)for(let ae=0;ae<z;ae++){let Ve=E+ae*S,Ne=A+re*S,sn=N(ae,re),ln=(N(ae+1,re)-N(ae-1,re))/(2*S),ue=(N(ae,re+1)-N(ae,re-1))/(2*S),xe=Math.hypot(ln,ue),Re=Math.hypot(ln,1,ue);if(q[Yt*3]=Ve,q[Yt*3+1]=sn,q[Yt*3+2]=Ne,lt[Yt*3]=-ln/Re,lt[Yt*3+1]=1/Re,lt[Yt*3+2]=-ue/Re,o(Ve,sn,Ne,xe,ko,M)||v(Ve,sn,Ne,xe,ko,M),Lt[Yt*3]=ko.r,Lt[Yt*3+1]=ko.g,Lt[Yt*3+2]=ko.b,Yt++,ae<z-1&&re<z-1){let en=re*z+ae;Nt.push(en,en+z,en+1,en+1,en+z,en+z+1)}}let de=[];for(let re=0;re<z;re++)de.push(re);for(let re=1;re<z;re++)de.push(re*z+z-1);for(let re=z-2;re>=0;re--)de.push((z-1)*z+re);for(let re=z-2;re>0;re--)de.push(re*z);let Qt=Yt,Wt=S*.9+1;for(let re of de){q[Yt*3]=q[re*3],q[Yt*3+1]=q[re*3+1]-Wt,q[Yt*3+2]=q[re*3+2];for(let ae=0;ae<3;ae++)lt[Yt*3+ae]=lt[re*3+ae],Lt[Yt*3+ae]=Lt[re*3+ae];Yt++}for(let re=0;re<de.length;re++){let ae=de[re],Ve=de[(re+1)%de.length],Ne=Qt+re,sn=Qt+(re+1)%de.length;Nt.push(ae,Ne,Ve,Ve,Ne,sn,ae,Ve,Ne,Ve,sn,Ne)}let ie=new Ze;ie.setAttribute("position",new qe(q,3)),ie.setAttribute("normal",new qe(lt,3)),ie.setAttribute("color",new qe(Lt,3)),ie.setIndex(Nt),ie.computeBoundingSphere();let Xt=new Ht(ie,b);return Xt.receiveShadow=!0,Xt.matrixAutoUpdate=!1,Xt.visible=!1,i.add(Xt),Xt}let J=(M,w)=>{let h=P[0].size,_=I+M*h,S=I+w*h;for(let E=0;E<=4;E++)for(let A=0;A<=4;A++)if(l.coastS(_+E/4*h,S+A/4*h)>-650)return!1;return!0},k=[];for(let M=0;M<9;M++)for(let w=0;w<9;w++)J(M,w)||k.push({lv:0,i:M,j:w});let st=[];function dt(M,w,h){let _=D(M,w,h),S=O.get(_);return S||(S={lv:M,i:w,j:h,mesh:null,x:I+(w+.5)*P[M].size,z:I+(h+.5)*P[M].size,used:bt},O.set(_,S)),S}let et=(M,w,h)=>{let _=P[M.lv].size/2;return Math.hypot(Math.max(0,Math.abs(w-M.x)-_),Math.max(0,Math.abs(h-M.z)-_))},bt=0;function ft(M,w,h){bt++,st.length=0;let _=Math.max(0,h-c-60)*1.4,S=E=>{if(E.used=bt,!E.mesh)return st.push(E),!1;let A=et(E,M,w),z=P[E.lv].split+(E.lv===0?_:_*.15);if(E.lv<2&&A<z){let W=[],N=!0;for(let q=0;q<4;q++)for(let lt=0;lt<4;lt++){let Lt=dt(E.lv+1,E.i*4+q,E.j*4+lt);W.push(Lt),Lt.mesh||(N=!1,st.push(Lt),Lt.used=bt)}if(N){E.mesh.visible=!1;for(let q of W)S(q);return!0}}return E.mesh.visible=!0,!0};for(let E of k)S(dt(E.lv,E.i,E.j));for(let E of O.values())if(E.used!==bt&&E.mesh){E.mesh.visible=!1;let A=et(E,M,w);bt-E.used>120&&(E.lv===2&&A>420||E.lv===1&&A>1700)&&(i.remove(E.mesh),E.mesh.geometry.dispose(),E.mesh=null,O.delete(D(E.lv,E.i,E.j)))}st.sort((E,A)=>(E.lv===0?-1e6:0)+et(E,M,w)/(E.lv+1)-((A.lv===0?-1e6:0)+et(A,M,w)/(A.lv+1)))}for(let M of k){let w=dt(0,M.i,M.j);w.mesh=L(0,M.i,M.j)}function Ot(M){let w=performance.now(),h=0;for(;st.length&&(performance.now()-w<M||h===0);){let _=st.shift();_.mesh||(_.mesh=L(_.lv,_.i,_.j),h++)}return st.length}let xt=(M,w)=>{let h=hn(M),_=18,S=[Bt(kt(new me(.2,.36,_*.9,7),0,_*.45,0),"#5B3F27")];for(let E=0;E<5;E++){let A=E/4,z=te(5.4,_-2.6,A),W=te(3.3,1,A)*(.9+h()*.2),H=te(4.3,3,A);S.push(kt(Bt(new Mn(W,H,7,1),(N,q,lt,Lt)=>De(N,w?"#1B4226":"#214F2C",w?"#3A7538":"#4C8C44",.3+(lt/H+.5)*.5+(Ke(q*7,Lt*7)-.5)*.2)),(h()-.5)*.2,z+H*.3,(h()-.5)*.2,0,h()*3,0))}return nn(S)},wt=M=>{let w=hn(M),h=[Bt(kt(new me(.3,.5,6,7),0,3,0),"#5E4630")];for(let[_,S]of[[1,.3],[-.8,.7],[.2,-1]])h.push(Bt(kt(new me(.1,.2,3.4,5),_*.9,6.2,S*.9,S*.5,0,-_*.5),"#5E4630"));for(let _=0;_<6;_++){let S=_/6*Se+w(),E=_?2.6+w()*.8:3.2;h.push(kt(Bt(new gn(E,0),(A,z,W,H)=>De(A,"#2D5E2A","#6FA349",.35+W/E*.4+(Ke(z*3,H*3)-.5)*.3)),_?Math.cos(S)*2.8:0,_?8+w()*2.5:10.5,_?Math.sin(S)*2.8:0,0,0,0,1,.8,1))}return nn(h)},vt=M=>{let w=hn(M),h=[Bt(kt(new me(.16,.3,2.2,6),0,1.1,0,.12,0,.08),"#6B5640")];for(let _=0;_<5;_++){let S=_/5*Se+w();h.push(kt(Bt(new gn(1.4+w()*.4,0),(E,A,z)=>De(E,"#5F7A4F","#A6B98A",.4+z*.3)),Math.cos(S)*1.2,3.2+w()*.9,Math.sin(S)*1.2,0,0,0,1,.65,1))}return nn(h)},Dt=()=>Bt(new ni(1,0),(M,w,h,_)=>De(M,"#7A746A","#B9B2A2",.4+h*.5+(Ke(w*5,_*5)-.5)*.35)),qt={pine:[xt(5,!1)],oak:[wt(7)],palm:[Sr(hn(3),1.1,9)],olive:[vt(9)],bush:[Uo()],rock:[Bo()],boulder:[Dt()],reed:[rc()]},Kt={pine:1,oak:1,palm:2.4,olive:1,bush:1.7,rock:1.3,boulder:1,reed:2.4},pe={pine:.22,oak:.18,palm:.12,olive:.12,bush:.2},Ut={pine:$n(new Te({vertexColors:!0,flatShading:!0}),.0012,5,e),oak:$n(new Te({vertexColors:!0,flatShading:!0}),.0016,5,e),palm:$n(new Te({vertexColors:!0,side:Be}),.003,9,e),olive:$n(new Te({vertexColors:!0,flatShading:!0}),.004,2,e),bush:y,rock:x,boulder:x,reed:$n(new Te({vertexColors:!0}),.09,.2,e)},ne={pine:nn([Bt(kt(new me(.25,.35,6,4),0,3,0),"#4B3520"),Bt(kt(new Mn(3.4,13.5,5,1),0,11.2,0),(M,w,h)=>De(M,"#1F4A2A","#3E7A3A",h/13.5+.5))]),oak:nn([Bt(kt(new me(.3,.45,6,4),0,3,0),"#4B3520"),Bt(kt(new gn(4.6,0),0,9.6,0,0,0,0,1,.72,1),(M,w,h)=>De(M,"#2B5A28","#5E9443",h/4+.5))]),palm:nn([Bt(kt(new me(.12,.17,5.5,4),0,2.75,0),"#8B6A3E"),Bt(kt(new gn(1.25,0),0,5.6,0,0,0,0,1,.42,1),"#3F8A36")]),olive:Bt(kt(new gn(2.4,0),0,3.5,0,0,0,0,1,.7,1),"#7C9467")},he=Bt(kt(new Mn(.5,1,5,1),0,.5,0),(M,w,h)=>De(M,"#BFBFBF","#FFFFFF",h)),_e={pine:[6.6,15,4,"#24502C"],oak:[9.5,9,4.5,"#355F2C"],palm:[5,3.5,11,"#3C7B34"],olive:[4.6,3.6,1.8,"#6E8A5E"]},$t=new Te({vertexColors:!0,flatShading:!0}),ye=26e3,Le=9e4,le={};for(let M of Object.keys(ne)){let w=new ai(ne[M],$t,ye);w.count=0,w.frustumCulled=!1,w.receiveShadow=!0,i.add(w),le[M]=w}let G=new ai(he,$t,Le);G.count=0,G.frustumCulled=!1,i.add(G);let At=130,it=480,mt=1400,K=128,pt=new Map,ot=K/t.VC,ht=[];{let M=Math.ceil(mt/t.VC);for(let w=-M;w<=M;w++)for(let h=-M;h<=M;h++){let _=Math.hypot(w,h)*t.VC;_<=mt+t.VC&&ht.push([w,h,_])}ht.sort((w,h)=>w[2]-h[2])}let _t=0,Rt=null,Tt=null,d=0,p=-1,X=new Set;function C(M,w,h){let _=Math.floor(M/t.VC),S=Math.floor(w/t.VC);(!Rt||Rt[0]!==_||Rt[1]!==S)&&(Rt=[_,S],_t=0);let E=performance.now();for(;_t<ht.length&&performance.now()-E<h;){let[A,z]=ht[_t++],W=(_+A)*100003+(S+z);X.has(W)||(t.vegCell(_+A,S+z),X.add(W),d++)}if(X.size>9e3){for(let A of X)if(X.delete(A),X.size<6e3)break}}function V(M,w){let h={};for(let S=0;S<ot;S++)for(let E=0;E<ot;E++)for(let A of t.vegCell(M*ot+S,w*ot+E).items)(h[A.t]=h[A.t]||[]).push(A);let _=new we;for(let[S,E]of Object.entries(h)){let A=qt[S];A&&A.forEach((z,W)=>{let H=E.filter((q,lt)=>lt%A.length===W);if(!H.length)return;let N=new ai(z,Ut[S],H.length);H.forEach((q,lt)=>{R.position.set(q.x,q.y,q.z),R.rotation.set(q.rx||0,q.ry||0,q.rz||0),R.scale.setScalar((q.s||1)*Kt[S]),R.updateMatrix(),N.setMatrixAt(lt,R.matrix),pe[S]&&N.setColorAt(lt,m.setScalar(1).offsetHSL(0,0,(Ke(q.x,q.z)-.5)*pe[S]))}),N.castShadow=S!=="reed"&&S!=="rock",N.receiveShadow=!0,N.computeBoundingSphere(),_.add(N)})}return i.add(_),_}function B(M,w,h,_=h*.5){let S=performance.now();C(M,w,_);let E=Math.floor(M/K),A=Math.floor(w/K),z=new Set;for(let N=-2;N<=2;N++)for(let q=-2;q<=2;q++){let lt=(E+N+.5)*K,Lt=(A+q+.5)*K;Math.hypot(Math.max(0,Math.abs(M-lt)-K/2),Math.max(0,Math.abs(w-Lt)-K/2))<At&&z.add((E+N)*100003+(A+q))}let W=!1;for(let[N,q]of pt)z.has(N)||(i.remove(q.group),q.group.children.forEach(lt=>lt.dispose&&lt.dispose()),pt.delete(N),W=!0);for(let N of z)if(!pt.has(N)&&performance.now()-S<h){let q=Math.round(N/100003),lt=N-q*100003;pt.set(N,{group:V(q,lt)}),W=!0}(!Tt||Math.hypot(M-Tt[0],w-Tt[1])>24||W||d>60)&&performance.now()-p>350&&at(M,w)}function at(M,w){Tt=[M,w],d=0,p=performance.now();let h={pine:0,oak:0,palm:0,olive:0},_=0,S=Math.floor(M/t.VC),E=Math.floor(w/t.VC);for(let[A,z,W]of ht){if(W<At-t.VC)continue;let H=(S+A)*100003+(E+z);if(!X.has(H))continue;let N=t.vegCell(S+A,E+z);if(!pt.has(Math.floor(N.ci/ot)*100003+Math.floor(N.cj/ot)))for(let q of N.items){let lt=_e[q.t];if(!lt)continue;let Lt=Math.hypot(q.x-M,q.z-w);if(Lt<it){let Nt=le[q.t];if(h[q.t]>=ye)continue;R.position.set(q.x,q.y,q.z),R.rotation.set(0,q.ry,0),R.scale.setScalar(q.s*(q.t==="palm"?2.4:1)),R.updateMatrix(),Nt.setMatrixAt(h[q.t]++,R.matrix)}else if(Lt<mt&&_<Le&&(q.s>.95||Lt<900)){let Nt=q.s;R.position.set(q.x,q.y+lt[2]*Nt,q.z),R.rotation.set(0,q.ry,0),R.scale.set(lt[0]*Nt,lt[1]*Nt,lt[0]*Nt),R.updateMatrix(),G.setMatrixAt(_,R.matrix),G.setColorAt(_,m.set(lt[3]).offsetHSL(0,0,(Ke(q.x,q.z)-.5)*.06)),_++}}}for(let A in h)le[A].count=h[A],le[A].instanceMatrix.needsUpdate=!0;G.count=_,G.instanceMatrix.needsUpdate=!0,G.instanceColor&&(G.instanceColor.needsUpdate=!0)}let ut=1900,Et=new ai(Oo(),$n(new Te({vertexColors:!0,side:Be}),.5,0,e),ut);Et.frustumCulled=!1,Et.count=0,i.add(Et);let U=null;function T(M,w){if(U&&Math.hypot(M-U[0],w-U[1])<8)return;U=[M,w];let h=0,_=hn((Math.floor(M/8)*7919^Math.floor(w/8)*104729)>>>0);for(let S=0;S<ut*1.6&&h<ut;S++){let E=_()*Se,A=Math.sqrt(_())*42,z=Math.round((M+Math.cos(E)*A)*4)/4,W=Math.round((w+Math.sin(E)*A)*4)/4,H=t.H(z,W),N=H-c;if(N<.6||N<4&&l.coastS(z,W)<160||l.reserved(z,W))continue;let q=l.nearRoad(z,W);if(q&&q.d<q.hw+.4)continue;if(u.rad(z,W)<250){let Lt=u.nearest(z,W,H,1);if(u.rad(z,W)<u.RP+1||Lt&&Lt.d<Lt.p.hw+.3)continue}let lt=l.nearRiver(z,W);lt&&lt.d<lt.w+.5||(R.position.set(z,H,W),R.rotation.set(0,Ke(z,W)*Se,0),R.scale.setScalar(1+Ke(W,z)*.75))}Et.count=h,Et.instanceMatrix.needsUpdate=!0}let tt=(M,w,h)=>{let _=s.clone();_.wrapS=_.wrapT=ds,_.repeat.set(h,h),_.needsUpdate=!0;let S=new On({color:M,specular:"#FFFFFF",shininess:110,normalMap:_,transparent:!0,opacity:w});return S.normalScale.set(.6,.6),S},nt=tt("#2A7DB2",.84,1400),yt=new Ht(new xn(26e3,26e3),nt);yt.rotation.x=-Math.PI/2,yt.position.y=c,i.add(yt);let ct=new Ht(new xn(26e3,26e3),new vn({color:"#174767"}));ct.rotation.x=-Math.PI/2,ct.position.y=c-42,i.add(ct);let gt=[nt];for(let M of l.lakes){let w=tt("#3A8FBE",.86,40);gt.push(w);let h=new Ht(new Bn(M.r*1.3+30,48),w);h.rotation.x=-Math.PI/2,h.position.set(M.x,c+M.lv,M.z),i.add(h)}{let M=tt("#4E8C8A",.8,60);gt.push(M);let w=new Ht(new Bn(l.marsh.r,56),M);w.rotation.x=-Math.PI/2,w.position.set(l.marsh.x,c+l.marsh.lv,l.marsh.z),i.add(w)}let Mt=tt("#3C95C8",.88,1);gt.push(Mt);for(let M of l.rivers){let w=[],h=[],_=[],S=0,E=0;M.pts.forEach((W,H)=>{let N=M.pts[Math.max(0,H-1)],q=M.pts[Math.min(M.pts.length-1,H+1)],lt=q.x-N.x,Lt=q.z-N.z,Nt=Math.hypot(lt,Lt)||1,Yt=-Lt/Nt,de=lt/Nt,Qt=W.w+.7;if(H&&(E+=Math.hypot(W.x-M.pts[H-1].x,W.z-M.pts[H-1].z)),w.push(W.x+Yt*Qt,c+W.lv+.04,W.z+de*Qt,W.x-Yt*Qt,c+W.lv+.04,W.z-de*Qt),h.push(0,E/6,1,E/6),H){let Wt=(H-1)*2;_.push(Wt,Wt+2,Wt+1,Wt+1,Wt+2,Wt+3)}});let A=new Ze;A.setAttribute("position",new qe(new Float32Array(w),3)),A.setAttribute("uv",new qe(new Float32Array(h),2)),A.setIndex(_),A.computeVertexNormals();let z=new Ht(A,Mt);i.add(z)}let zt=di(64,128,(M,w,h)=>{M.clearRect(0,0,w,h);for(let _=0;_<90;_++)M.fillStyle=`rgba(255,255,255,${.25+Math.random()*.5})`,M.fillRect(Math.random()*w,0,1+Math.random()*3,h)},[3,1]),Zt=new Te({map:zt,color:"#DDF3FF",transparent:!0,opacity:.85,side:Be,depthWrite:!1}),ce=[];for(let M of l.falls){if(M.top-M.bot<4)continue;let w=Math.hypot(M.dx,M.dz)||1,h=M.w*2+1.2,_=M.top-M.bot+1,S=new Ht(new xn(h,_),Zt);S.position.set(M.x,c+(M.top+M.bot)/2,M.z),S.rotation.y=Math.atan2(M.dx,M.dz)+Math.PI/2,S.rotation.order="YXZ",S.rotation.x=-.25,i.add(S);let E=new qn(new Un({map:r,color:"#FFFFFF",transparent:!0,opacity:.55,depthWrite:!1}));E.position.set(M.x+M.dx/w*3,c+M.bot+1.2,M.z+M.dz/w*3),E.scale.setScalar(h*1.4),i.add(E),ce.push({m:S,sp:E})}let $=(M,w=512,h=128,_=56,S="#8B5A2B",E="#FFF6E0")=>di(w,h,A=>{A.fillStyle=S,A.fillRect(0,0,w,h),A.strokeStyle="#E8C170",A.lineWidth=8,A.strokeRect(4,4,w-8,h-8),A.fillStyle=E,A.font=`900 ${_}px -apple-system,system-ui,sans-serif`,A.textAlign="center",A.textBaseline="middle",A.direction="rtl",A.fillText(M,w/2,h/2+4)}),St=(M,w,h,_,S=0,E=0,A=0,z=0)=>kt(Bt(new be(M,w,h),_),S,E,A,0,z,0),Gt=(M,w,h,_,S=0,E=0,A=0,z=10)=>kt(Bt(new me(M,w,h,z),_),S,E,A),Jt=M=>(w,h,_,S)=>De(w,M>.5?"#C79E72":"#B98D62",M>.5?"#DDBB8E":"#D1AE80",.45+(Ke(Math.round(h*3),Math.round(_*3+S*3))-.5)*.35);function se(M){let w=[],h=M.kind;if(h==="house"){let _=M.w,S=M.d,E=M.h,A=M.white?z=>z.set("#F1ECE2"):Jt(M.tint);w.push(Bt(kt(new be(_,E,S),0,E/2,0),A));for(let[z,W,H,N]of[[0,S/2-.15,_,.3],[0,-S/2+.15,_,.3],[_/2-.15,0,.3,S],[-_/2+.15,0,.3,S]])w.push(Bt(kt(new be(H,.55,N),z,E+.27,W),A));w.push(St(.12,2.1,1,"#5B3A1F",_/2+.03,1.05,0));for(let z of M.floors===2?[1.6,4.8]:[1.6])for(let W of[-1,1])w.push(St(.1,.8,.9,"#3A2A1E",_/2+.03,z,W*S*.28));M.floors===2&&w.push(Bt(kt(new be(_+.1,.18,S+.1),0,3.25,0),"#A9825A")),w.push(St(1.4,.12,1.4,"#8B6B44",_/2+.7,2.3,0))}else if(h==="hut"){let _=M.w,S=M.d;w.push(Bt(kt(new be(_,2.4,S),0,1.2,0),(A,z,W)=>De(A,"#7A5434","#9C7048",(W+1.2)*3.3%1)));let E=new me(.01,_*.78,S+.6,3,1);w.push(Bt(kt(E,0,2.4+.75,0,Math.PI/2,0,0,1,1,1),"#5C3F27")),w.push(St(.1,1.9,.9,"#3E2A18",_/2+.03,.95,0))}else if(h==="reedhut"||h==="mudhif"){let _=M.w,S=M.d,E=M.h,A=Math.round(S/.9),z=new me(_/2,_/2,S,18,1,!0,-Math.PI/2,Math.PI);w.push(Bt(kt(z,0,0,0,Math.PI/2,0,0,1,1,E/(_/2)),(W,H,N,q)=>De(W,"#BFA35E","#E0C98A",.5+Math.sin(q*9)*.25+(Ke(H*4,q*4)-.5)*.2)));for(let W=0;W<=A;W++){let H=-S/2+W/A*S;w.push(Bt(kt(new me(_/2+.06,_/2+.06,.16,18,1,!0,-Math.PI/2,Math.PI),0,0,H,Math.PI/2,0,0,1,1,E/(_/2)),"#8C7038"))}if(h==="mudhif")for(let W of[-1,1])w.push(Gt(.35,.42,E+.8,"#A88A4C",W*(_/2-.5),(E+.8)/2,S/2+.2,8))}else if(h==="teahouse"){let _=M.w,S=M.d;w.push(St(.3,3.3,S,"#E3D2B4",-_/2,1.65,0),St(_,3.3,.3,"#E3D2B4",0,1.65,-S/2),St(_,3.3,.3,"#E3D2B4",0,1.65,S/2)),w.push(St(_+1.2,.25,S+.6,"#7B5534",.3,3.4,0));for(let E of[-1,1])w.push(Gt(.12,.12,3.3,"#6B4A2E",_/2+.6,1.65,E*(S/2-.2),6));for(let E=0;E<3;E++)w.push(St(.6,.45,1.8,"#8E5A36",-.6,.23,-3+E*3),St(.9,.7,.9,"#6B4A2E",.6,.35,-3+E*3));w.push(Gt(.22,.3,.7,"#C9A13B",-_/2+.6,1.25,0,10))}else if(h==="stall"){let _=["#E63946","#2A9D8F","#F4A261","#457B9D","#E9C46A"],S=_[(M.tint||0)%_.length];for(let[E,A]of[[-1,-1],[1,-1],[-1,1],[1,1]])w.push(Gt(.05,.05,2.6,"#6B4A2E",E*1.4,1.3,A*1,5));w.push(Bt(kt(new be(3.1,.08,2.3),0,2.62,0,.12,0,0),(E,A)=>E.set(Math.floor((A+2)*2.5)%2?S:"#FFF5E0"))),w.push(St(2.8,.85,1,"#8B5E3C",0,.43,.3));for(let E=0;E<6;E++)w.push(St(.35,.3,.3,["#E76F51","#F4D35E","#7FB069","#C2185B","#FFB703","#8D6E63"][E],-1.1+E*.44,1,.3))}else if(h==="board"){let _=(S,E,A,z)=>De(S,"#C9B596","#E3D3B5",.4+(Ke(Math.round(E*3),Math.round(z*3+A))-.5)*.5);w.push(Bt(kt(new be(1.9,.18,4.6),0,.09,0),_),Bt(kt(new be(1.25,.16,4.1),-.25,.26,0),_)),w.push(Bt(kt(new be(1.95,.03,4.65),0,.185,0),"#B39C78"));for(let S of[-1,1])w.push(St(.2,3.75,.2,"#5A3720",-.3,.34+1.875,S*1.82),St(.28,.16,.28,"#7A4E2A",-.3,.42,S*1.82),St(.26,.12,.26,"#7A4E2A",-.3,2.95,S*1.82)),w.push(Bt(kt(new Mn(.2,.22,4),-.3,4.2,S*1.82,0,Math.PI/4,0),"#4A2C16")),w.push(Bt(kt(new be(.55,.42,.55),.55,.55,S*1.95),_),Bt(kt(new gn(.3,1),.55,.88,S*1.95,0,0,0,1,.6,1),(E,A,z,W)=>E.set(["#FF6B9A","#FFD23F","#FFFFFF","#B28DFF","#E63946","#7FD16B"][Math.floor(Ke(A*9+S,W*9)*6)])));w.push(St(.1,2.05,3.5,"#6E4526",-.34,.34+.75+1.025,0));for(let[S,E]of[[1.06,.1],[3.17,.1]])w.push(St(.16,E,3.62,"#8A5A30",-.27,S,0));for(let S of[-1,1])w.push(St(.16,2.2,.1,"#8A5A30",-.27,2.12,S*1.76));for(let[S,E]of[[1,.02],[3.23,.02]])w.push(St(.17,E,3.64,"#D4AF37",-.26,S,0));w.push(St(.12,.5,2.7,"#5A3720",-.28,3.55,0));for(let S of[-1,1])w.push(Bt(kt(new be(1.25,.08,4.5),-.3+S*.5,4.22,0,0,0,-S*.62),(E,A,z,W)=>E.set(Math.floor((W+3)*4.5)%2?"#B5532F":"#C8653A")));w.push(St(.16,.16,4.6,"#7A3A1E",-.3,4.55,0))}else if(h==="signpost")w.push(Gt(.08,.1,3.2,"#5B3A1F",0,1.6,0,6));else if(h==="gate"){for(let _ of[-1,1])w.push(Bt(kt(new be(1.1,5.2,1.1),0,2.6,_*4.6),Jt(.8)));w.push(Bt(kt(new be(1.2,.9,10.4),0,5.6,0),Jt(.8)))}else if(h==="fountain")w.push(Bt(kt(new me(M.r,M.r+.15,.7,8),0,.35,0),"#D9CBB0"),Gt(.45,.6,1.8,"#CDBB9C",0,.9,0,8),Gt(1.1,.4,.35,"#D9CBB0",0,1.9,0,8));else if(h==="lamp")w.push(Gt(.06,.09,3.3,"#2E2E2E",0,1.65,0,6));else if(h==="pier"){w.push(Bt(kt(new be(M.w,.22,M.d),0,0,0),(_,S,E,A)=>De(_,"#7E5B3A","#A47A50",Math.floor((S+50)*1.6)%2*.6+.2)));for(let _=0;_<=Math.floor(M.w/4);_++)for(let S of[-1,1])w.push(Gt(.12,.12,4,"#5B3F27",-M.w/2+_*4,-2,S*(M.d/2-.1),6))}else if(h==="boat"||h==="canoe"){let _=h==="canoe"?6.5:5.2,S=h==="canoe"?.85:1.7;w.push(Bt(kt(new Ee(1,14,6,0,Se,Math.PI/2,Math.PI/2),0,.42,0,0,0,0,_/2,.5,S/2),h==="canoe"?"#3B2A1E":(E,A,z)=>De(E,"#2A6F97","#F1ECE2",z*-2+.2))),h==="boat"&&w.push(St(.25,.1,S*.8,"#7B5534",0,.38,0))}else if(h==="logs")for(let _=0;_<6;_++)w.push(Bt(kt(new me(.28,.28,M.w,8),0,.3+(_>3?.48:0),(_%4-1.5)*.48*(_>3?.6:1),0,0,Math.PI/2),"#8A6240"));else if(h==="well"){w.push(Gt(M.r,M.r+.1,.9,"#B8A88A",0,.45,0,12));for(let _ of[-1,1])w.push(Gt(.06,.06,2.2,"#5B3A1F",_*.9,1.1,0,5));w.push(Bt(kt(new me(.01,1.2,.6,4),0,2.4,0,0,Math.PI/4,0),"#7B5534"))}else if(h==="lighthouse")w.push(Bt(kt(new me(2,3,17,16),0,8.5,0),(_,S,E)=>_.set(Math.floor((E+8.5)/3)%2?"#D62828":"#FBF7EF"))),w.push(Gt(2.6,2.6,.4,"#2E2E2E",0,17.2,0,16),Gt(1.6,1.6,1.8,"#9FD8FF",0,18.3,0,12),Bt(kt(new Mn(1.9,1.4,16),0,19.9,0),"#D62828")),w.push(St(.15,2.2,1,"#5B3A1F",3,1.1,0));else if(h==="fwall"){let _=Math.max(2,Math.round(M.w/2));for(let S=0;S<_;S++){let E=M.h*(.6+.4*Ke(M.x+S,M.z));w.push(Bt(kt(new be(M.w/_+.05,E,M.d),-M.w/2+(S+.5)*M.w/_,E/2,0),(A,z,W,H)=>De(A,"#8E8576","#B8AE9B",.4+Ke(Math.round(z*2+M.x),Math.round(W*2))*.5)))}}else if(h==="ftower")w.push(Bt(kt(new me(M.r*.92,M.r,M.h,12),0,M.h/2,0),(_,S,E,A)=>De(_,"#8E8576","#B8AE9B",.4+Ke(Math.round(S*2+A),Math.round(E*2))*.5)));else if(h==="campfire")for(let _=0;_<9;_++){let S=_/9*Se;w.push(kt(Bt(new ni(.22,0),"#8A857B"),Math.cos(S)*.75,.12,Math.sin(S)*.75))}else if(h==="square"){w.push(Bt(kt(new be(M.w,.2,M.d),0,-.02,0),(_,S,E,A)=>De(_,"#CBB894","#E2D2B2",(Math.floor(S/1.5)+Math.floor(A/1.5))%2*.5+Ke(Math.floor(S/1.5),Math.floor(A/1.5))*.35)));for(let[_,S]of[[-20,-26],[20,-26],[-20,26],[20,26]])w.push(Bt(kt(new me(3.2,3.4,.5,14),_,.25,S),"#9C8466"),Bt(kt(new gn(2.8,1),_,.6,S,0,0,0,1,.3,1),(E,A,z,W)=>E.set(["#FF6B9A","#FFD23F","#FFFFFF","#B28DFF","#E63946"][Math.floor(Ke(A*3,W*3)*5)])))}return w}let ge=[],Ie=[],jt=[],ke=[],Ae=[],fe=null,Xe="";for(let M of l.sites){let w=se(M),h=new we;if(h.position.set(M.x,M.float?c+.15:M.y,M.z),h.rotation.y=-(M.rot||0),w.length){let _=new Ht(nn(w),new Te({vertexColors:!0,side:Be}));_.castShadow=!0,_.receiveShadow=!0,h.add(_)}if(M.kind==="palm"){let _=new Ht(qt.palm[0],Ut.palm);_.scale.setScalar(2.4*(M.s||1)),_.castShadow=!0,h.add(_)}if(M.kind==="board"){let _=new Ht(new xn(2.6,.46),new Te({map:$("\u{1F4DC} \u0637\u0644\u0628\u0627\u062A \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",1024,180,96,"#5A3720","#FFE7A8")}));_.position.set(-.215,3.55,0),_.rotation.y=Math.PI/2,h.add(_),fe=di(1024,600,()=>{});let S=new Ht(new xn(3.4,1.99),new Te({map:fe,emissive:"#2A1C10",emissiveIntensity:.25}));S.position.set(-.28,2.12,0),S.rotation.y=Math.PI/2,h.add(S);for(let E of[-1,1]){let A=new we;A.position.set(.25,3.9,E*2.05);let z=new Ht(new me(.09,.11,.26,6),new Te({color:"#FFD27A",emissive:"#FFB347",emissiveIntensity:.9}));z.position.y=-.3,A.add(z);let W=new Ht(new Mn(.13,.12,6),new Te({color:"#2E2E2E"}));W.position.y=-.12,A.add(W);let H=new Ht(new me(.008,.008,.25,4),new Te({color:"#2E2E2E"}));H.position.y=0,A.add(H);let N=new qn(new Un({map:r,color:"#FFC85A",transparent:!0,opacity:.85,depthWrite:!1,blending:zn}));N.position.y=-.3,N.scale.setScalar(1.3),A.add(N),Ie.push(N),h.add(A),Ae.push(A)}}if(M.kind==="signpost"&&["\u26F0\uFE0F \u0642\u0645\u0629 \u0627\u0644\u0633\u062D\u0627\u0628","\u{1F3D8}\uFE0F \u0642\u0631\u064A\u0629 \u0627\u0644\u0637\u064A\u0646","\u{1F334} \u0628\u0633\u0627\u062A\u064A\u0646 \u0627\u0644\u0631\u0637\u0628","\u{1F5FC} \u0627\u0644\u0645\u0646\u0627\u0631\u0629"].forEach((_,S)=>{let E=new Ht(new xn(1.9,.42),new Te({map:$(_,512,112,54),side:Be}));E.position.set(0,2.9-S*.5,0),E.rotation.y=[Math.PI/2,0,Math.PI,-Math.PI/2][S]+.2,E.translateX(.95),h.add(E)}),M.kind==="gate"){let _=new Ht(new xn(4.2,.8),new Te({map:$("\u26F0\uFE0F \u0637\u0631\u064A\u0642 \u0627\u0644\u0642\u0645\u0629",512,100,58),side:Be}));_.position.set(.62,5.6,0),_.rotation.y=Math.PI/2,h.add(_)}if(M.kind==="lamp"||M.kind==="lighthouse"){let _=new qn(new Un({map:r,color:"#FFC85A",transparent:!0,opacity:.8,depthWrite:!1,blending:zn}));_.position.y=M.kind==="lamp"?3.3:18.4,_.scale.setScalar(M.kind==="lamp"?1:7),h.add(_),Ie.push(_)}if(M.kind==="fountain"){let _=new Ht(new Bn(M.r-.2,24),gt[1]);_.rotation.x=-Math.PI/2,_.position.y=.55,h.add(_)}if(M.kind==="campfire"&&jt.push(pn(h)),M.kind==="teahouse")for(let[_,S,E]of[[-.9,-3,Math.PI/2],[-.9,0,Math.PI/2+.3],[-.9,3,Math.PI/2-.2]]){let A=Ms({thobe:["#F2EEE4","#D9D2C3","#EDE3CF"][ke.length%3],bisht:null});A.root.position.set(_,0,S),A.root.rotation.y=E,h.add(A.root),ke.push(A)}i.add(h),ge.push({grp:h,x:M.x,z:M.z,st:M})}function pn(M){let w=new we,h=S=>new vn({color:S,transparent:!0,opacity:.9,depthWrite:!1,blending:zn});[["#FF5A1F",.32,.9],["#FF9A2E",.24,.7],["#FFE07A",.14,.45]].forEach(([S,E,A])=>{let z=new Ht(new Mn(E,A,10,1,!0),h(S));z.position.y=A/2+.1,w.add(z)});for(let S=0;S<3;S++){let E=new Ht(new me(.08,.08,1.1,6),new Te({color:"#5B3A1F"}));E.rotation.set(Math.PI/2,S/3*Math.PI,0),E.position.y=.12,w.add(E)}let _=new qn(new Un({map:r,color:"#FF8A2E",transparent:!0,opacity:.65,depthWrite:!1,blending:zn}));return _.position.y=.6,_.scale.setScalar(2.6),w.add(_),M.add(w),w}for(let M of t.restPoints)if(M.fire){let w=new we;w.position.set(M.fx,t.H(M.fx,M.fz),M.fz);let h=new Ht(nn(se({kind:"campfire"})),new Te({vertexColors:!0}));w.add(h);for(let _ of[.4,2.5]){let S=new Ht(new me(.22,.24,1.8,8),new Te({color:"#7A5434"}));S.rotation.set(0,_,Math.PI/2),S.position.set(Math.cos(_)*1.9,.22,Math.sin(_)*1.9),S.castShadow=!0,w.add(S)}jt.push(pn(w)),i.add(w),ge.push({grp:w,x:M.x,z:M.z,st:{kind:"rest"}})}{let M=80*Math.PI/180,w=u.x+Math.cos(M)*10.1,h=u.z+Math.sin(M)*10.1,_=new we,S=[];S.push(Bt(kt(new be(2.2,.03,3.2),0,.02,0),(A,z,W,H)=>A.set(Math.floor((H+2)*2.2)%2?"#9B2226":"#CA6702")));for(let[A,z]of[[-1.1,-1.6],[-1.1,1.6],[.9,-1.6],[.9,1.6]])S.push(Gt(.05,.05,2.4,"#6B4A2E",A,1.2,z,5));S.push(Bt(kt(new be(2.4,.06,3.6),-.1,2.42,0,0,0,.1),(A,z,W,H)=>A.set(Math.floor((H+2)*2)%2?"#0A9396":"#E9D8A6")));for(let A=0;A<5;A++)S.push(Bt(kt(new me(.28,.33,.6,8),-.7,.3,-1.2+A*.6),["#D4A373","#CCD5AE","#E9EDC9","#FAEDCD","#BC6C25"][A]));S.push(St(.6,.4,.9,"#7B5534",.1,.2,1.1),St(.5,.3,.5,"#B5838D",.1,.55,1.1));let E=new Ht(nn(S),new Te({vertexColors:!0,side:Be}));E.castShadow=!0,_.add(E),_.position.set(w,u.HS+.01,h),_.rotation.y=-Math.atan2(u.z-h,u.x-w),i.add(_)}let En=new Te({color:"#3A3A3A"}),pi=new Te({color:"#7B5534"}),mi=(M,w,h,_,S)=>{let E=new we;for(let z of[-1,1]){let W=new Ht(new me(.14,.18,_,6),pi);W.position.set(-Math.sin(S)*z*1.3,_/2,Math.cos(S)*z*1.3),W.castShadow=!0,E.add(W)}let A=new Ht(new be(.22,.22,2.9),pi);return A.position.y=_,A.rotation.y=-S,E.add(A),E.position.set(M,w,h),i.add(E),E};for(let M of t.zips){let w=[];for(let z=0;z<=M.L;z+=6){let W=M.at(z);w.push(new j(W.x,W.y,W.z))}let h=M.at(M.L);w.push(new j(h.x,h.y,h.z));let _=new Ht(new Si(new Yn(w),w.length,.04,4,!1),En);i.add(_);let S=Math.atan2(M.uz,M.ux);mi(M.S.x,u.HS-1,M.S.z,5.6,S),mi(M.E.x,t.H(M.E.x,M.E.z)-.2,M.E.z,4.6,S);for(let z of M.pts)if(z.tower){let W=new we;for(let[N,q]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let lt=new Ht(new me(.12,.16,12.6,5),En);lt.position.set(N*.9,6.1,q*.9),lt.rotation.set(q*.07,0,-N*.07),W.add(lt)}let H=new Ht(new be(2.4,.3,.6),En);H.position.y=12,H.rotation.y=-S+Math.PI/2,W.add(H),W.position.set(z.x,t.H(z.x,z.z)-.3,z.z),i.add(W)}let E=new Ht(new xn(2.4,.6),new Te({map:$(`\u{1F6A1} ${M.name} ${M.icon}`,512,128,56),side:Be}));E.position.set(M.stand.x,u.HS+2.2,M.stand.z),E.rotation.y=-Math.atan2(M.stand.z-u.z,M.stand.x-u.x)+Math.PI/2,i.add(E);let A=new Ht(new me(.06,.06,2.4,6),pi);A.position.set(M.stand.x,u.HS+1.2,M.stand.z),i.add(A)}let Fn=new we;{let M=new Te({color:"#E63946"}),w=new Ht(new me(.11,.11,.08,14),En);w.rotation.x=Math.PI/2,w.position.y=2.4,Fn.add(w);let h=new Ht(new be(.3,.2,.04),M);h.position.set(0,2.38,.06),Fn.add(h);for(let A of[-1,1]){let z=new Ht(new me(.012,.012,.36,4),En);z.position.set(0,2.2,A*.17),z.rotation.x=A*.35,Fn.add(z)}let _=new Ht(new me(.022,.022,.62,8),new Te({color:"#2E2E2E"}));_.rotation.x=Math.PI/2,_.position.y=2.03,Fn.add(_);let S=new Ht(new me(.012,.012,1.3,4),M);S.position.set(0,1.68,0),Fn.add(S);let E=new Ht(new ci(.17,.025,6,18),M);E.rotation.x=Math.PI/2,E.scale.z=.72,E.position.y=1,Fn.add(E)}Fn.visible=!1,i.add(Fn);let Ei=new Te({color:"#C8A46A"}),Ti=new Te({color:"#E63946",side:Be});for(let M of t.anchors){let w=[new j(M.top.x,M.top.y+.8,M.top.z)];for(let A=1;A<=16;A++){let z=A/16,W=te(M.top.x,M.bot.x,z),H=te(M.top.z,M.bot.z,z);w.push(new j(W,Math.max(t.H(W,H),te(M.top.y,M.bot.y,z)-.6)+.25,H))}let h=new Ht(new Si(new Yn(w),40,.03,4,!1),Ei);i.add(h);let _=new Ht(new me(.06,.06,1.1,6),En);_.position.set(M.top.x,M.top.y+.5,M.top.z),i.add(_);let S=new Ht(new me(.03,.03,1.8,5),pi);S.position.set(M.bot.x,M.bot.y+.9,M.bot.z),i.add(S);let E=new Ht(new xn(.5,.32),Ti);E.position.set(M.bot.x+.25,M.bot.y+1.6,M.bot.z),i.add(E)}let Ln=[];{let M=nn([...Array(9)].map((H,N)=>{let q=N*.7,lt=.26+N%3*.06;return Bt(kt(new Mn(.05,lt,5),Math.cos(q)*.07,lt/2,Math.sin(q)*.07,Math.sin(q)*.2,0,Math.cos(q)*.2),(Lt,Nt,Yt)=>De(Lt,"#4E7A3A","#9BBF7A",Yt/lt+.3))}).concat([Bt(kt(new ci(.06,.012,5,12),0,.08,0,Math.PI/2),"#C8283A")],[...Array(6)].map((H,N)=>Bt(kt(new Ee(.018,5,4),Math.cos(N)*.08,.3+N%2*.04,Math.sin(N)*.08),"#B99CF0")))),w=nn([Bt(kt(new Ee(.11,12,6,0,Se,0,Math.PI/2),0,.02,0,0,0,0,1,.38,.8),(H,N,q,lt)=>De(H,"#8A8378","#D9D2C3",.5+Math.sin(Math.atan2(lt,N)*9)*.3)),Bt(kt(new Ee(.11,12,6,0,Se,0,Math.PI/2),-.02,.09,0,0,0,1.1,1,.32,.8),(H,N,q,lt)=>De(H,"#7D776B","#CFC7B6",.5+Math.sin(Math.atan2(lt,N)*9)*.3)),Bt(kt(new Ee(.03,10,8),.02,.05,0),"#FFF8EE")]),h=nn([St(.7,.08,.7,"#6B4A2E",0,.42,0),...[-1,1].flatMap(H=>[-1,1].map(N=>Gt(.03,.03,.42,"#5B3A1F",H*.28,.21,N*.28,5))),Bt(kt(new me(.27,.3,.55,12),0,.73,0),(H,N,q)=>De(H,"#C9963E","#E8C170",Math.floor((q+1)*9)%2?.2:.8)),Bt(kt(new Mn(.33,.22,12),0,1.11,0),"#8C6A3A"),St(.1,.06,.02,"#2A1C10",0,.55,.29),Bt(kt(new me(.09,.11,.16,10),.24,.53,.18),"#E0A83A")]),_=nn([...Array(26)].map((H,N)=>{let q=N*.26;return Bt(kt(new me(.018,.018,.55,4),Math.cos(q)*.3,.1+N%3*.05,Math.sin(q)*.3,Math.PI/2,q+.3,.2*(N%2?1:-1)),lt=>lt.set(N%3?"#7A5A3A":"#5E4228"))}).concat([Bt(kt(new Bn(.27,12),0,.08,0,-Math.PI/2),"#5E4228"),Bt(kt(new Ee(.06,8,6),.06,.12,.02,0,0,0,1,.78,1),"#EFE6D6"),Bt(kt(new Ee(.06,8,6),-.07,.12,-.03,0,0,0,1,.78,1),"#E8DCC6")])),S=nn([Bt(kt(new me(.004,.006,.42,4),0,.21,0),"#EFE6D6"),Bt(kt(new Ee(.06,10,6),0,.25,0,0,0,0,.55,2.6,.12),(H,N,q)=>De(H,"#5A3A22","#D8B98A",.5+Math.sin(q*70)*.5))]),E=new Te({vertexColors:!0}),A=new vn({color:"#FFE38A",transparent:!0,opacity:.22,depthWrite:!1,blending:zn,side:Be}),z=new me(.18,.5,26,10,1,!0);z.translate(0,13,0),l.tasks.flatMap(H=>H.items.map(N=>({...N,task:H.id}))).forEach((H,N)=>{let q=new we;q.position.set(H.x,H.y,H.z);let lt=H.task==="thyme"?M:H.task==="pearl"?w:H.task==="honey"?h:_,Lt=new Ht(lt,E);Lt.castShadow=!0,Lt.rotation.y=Ke(H.x,H.z)*Se,q.add(Lt);let Nt=null;if(H.task==="feather"&&(Nt=new Ht(S,E),Nt.position.set(.05,.12,0),Nt.rotation.z=-.5,q.add(Nt)),H.task==="honey"){let Qt=new Ht(new me(.07,.08,.14,10),new Te({color:"#F2A922",emissive:"#7A4A00",emissiveIntensity:.4}));Qt.position.set(.24,.53,.18),q.add(Qt),Nt=Qt}let Yt=new Ht(z,A);q.add(Yt);let de=new qn(new Un({map:r,color:"#FFE38A",transparent:!0,opacity:.7,depthWrite:!1,blending:zn}));de.position.y=H.task==="honey"?.9:.35,de.scale.setScalar(H.task==="honey"?2.2:1.4),q.add(de),i.add(q),Ln.push({it:H,idx:N,grp:q,fe:Nt,beam:Yt,gl:de})})}function Hn(){if(!fe)return;let M=a.tasks.map(N=>`${N.id}:${N.done?"D":""}${N.got}`).join("|")+"|"+a.fish+"|"+a.track+"|"+(a.vq.caught?1:0);if(M===Xe)return;Xe=M;let w=fe.image,h=w.getContext("2d"),_=w.width,S=w.height,E=h.createLinearGradient(0,0,0,S);E.addColorStop(0,"#A9794A"),E.addColorStop(1,"#8E6238"),h.fillStyle=E,h.fillRect(0,0,_,S);for(let N=0;N<900;N++)h.fillStyle=`rgba(${60+N%5*20},${35+N%3*12},15,.25)`,h.fillRect(N*97.3%_,N*53.7%S,3,2);let A=318,z=270,W=18,H=22;a.tasks.forEach((N,q)=>{let lt=N.def,Lt=q%3,Nt=Math.floor(q/3),Yt=_-W-A-Lt*(A+18),de=H+Nt*(z+18),Qt=N.id==="gazelle"?a.vq.caught?1:0:N.id==="fish"?Math.min(a.fish,lt.need):N.got,Wt=!N.done&&Qt>=lt.need;h.save(),h.translate(Yt+A/2,de+z/2),h.rotate((q*37%7-3)*.008),h.fillStyle="rgba(0,0,0,.25)",h.fillRect(-A/2+6,-z/2+8,A,z),h.fillStyle=N.done?"#E4EFD8":"#F6E8C6",h.fillRect(-A/2,-z/2,A,z),h.strokeStyle=a.track===N.id&&!N.done?"#E63946":"#C9A86A",h.lineWidth=a.track===N.id&&!N.done?8:3,h.strokeRect(-A/2+4,-z/2+4,A-8,z-8),h.fillStyle=["#E63946","#2A9D8F","#457B9D"][q%3],h.beginPath(),h.arc(0,-z/2+16,10,0,Se),h.fill(),h.textAlign="center",h.textBaseline="middle",h.direction="rtl",h.font='72px -apple-system,system-ui,"Apple Color Emoji","Noto Color Emoji",sans-serif',h.fillStyle="#000",h.fillText(lt.icon,0,-z/2+78),h.fillStyle="#3A2614",h.font="900 34px -apple-system,system-ui,sans-serif",h.fillText(lt.name,0,-z/2+146);let ie=(l.zones.find(Xt=>Xt.id===lt.zone)||{}).name||"";h.font="700 25px -apple-system,system-ui,sans-serif",h.fillStyle="#6B4A2B",h.fillText(lt.need>1?`${ie} \xB7 ${Qt}/${lt.need}`:ie,0,-z/2+186),h.font="900 30px -apple-system,system-ui,sans-serif",h.fillStyle="#9A6B00",h.fillText(`${lt.reward} \u{1FA99}`,0,-z/2+230),(N.done||Wt)&&(h.rotate(-.22),h.strokeStyle=N.done?"rgba(46,140,60,.85)":"rgba(214,40,57,.85)",h.lineWidth=6,h.strokeRect(-110,-40,220,64),h.fillStyle=h.strokeStyle,h.font="900 38px -apple-system,system-ui,sans-serif",h.fillText(N.done?"\u2714 \u062A\u0645":"\u062C\u0627\u0647\u0632 \u{1F392}",0,-8)),h.restore()}),fe.needsUpdate=!0}let on=360,Nn=new Float32Array(on*on),Y=new Float32Array(on*on),Q=0,Ft=null;function Ct(M){let w=performance.now(),h=f*2/on;for(;Q<on&&performance.now()-w<M;){let _=f-(Q+.5)*h;for(let S=0;S<on;S++){let E=-f+(S+.5)*h,A=l.A(_,E),z=Q*on+S;Nn[z]=u.rad(_,E)<230?t.H(_,E)-c:A,Y[z]=A>.4?l.flora(_,E,A,999,0).t:0}Q++}return on-Q}function Vt(M=1024){Q<on&&Ct(1e9);let w=document.createElement("canvas");w.width=w.height=on;let h=w.getContext("2d"),_=h.createImageData(on,on),S=f*2/on;for(let W=0;W<on;W++)for(let H=0;H<on;H++){let N=W*on+H,q=Nn[N],lt=Nn[Math.min(on-1,W+1)*on+H]-Nn[Math.max(0,W-1)*on+H],Lt=Nn[W*on+Math.min(on-1,H+1)]-Nn[W*on+Math.max(0,H-1)];if(q<.35)Os(An,"#BFE6EE","#2A6FA0",Me(-q/14,0,1));else{Os(An,"#E6D7A6","#86B55A",q/4),q>4&&Os(An,"#86B55A","#5F9446",(q-4)/120),An.lerp(cc.set("#2F6B33"),Me(Y[N],0,1)*.7),q>200&&An.lerp(cc.set("#A39B8B"),oe(200,330,q)),q>330&&An.lerp(cc.set("#E8E4DA"),oe(330,395,q));let Nt=Me(1+(lt*.55-Lt*.55)/S*.9,.6,1.3);An.multiplyScalar(Nt)}_.data[N*4]=An.r*255,_.data[N*4+1]=An.g*255,_.data[N*4+2]=An.b*255,_.data[N*4+3]=255}h.putImageData(_,0,0);let E=document.createElement("canvas");E.width=E.height=M;let A=E.getContext("2d");A.imageSmoothingEnabled=!0,A.drawImage(w,0,0,M,M);let z=(W,H)=>[(H+f)/(2*f)*M,(f-W)/(2*f)*M];A.lineCap="round",A.lineJoin="round";for(let W of l.roads)A.strokeStyle="rgba(120,80,40,.85)",A.lineWidth=M/520,A.setLineDash([M/260,M/400]),A.beginPath(),W.pts.forEach((H,N)=>{let[q,lt]=z(H.x,H.z);N?A.lineTo(q,lt):A.moveTo(q,lt)}),A.stroke();A.setLineDash([]);for(let W of l.rivers)A.strokeStyle="#3F93C8",A.lineWidth=M/340,A.beginPath(),W.pts.forEach((H,N)=>{let[q,lt]=z(H.x,H.z);N?A.lineTo(q,lt):A.moveTo(q,lt)}),A.stroke();for(let W of l.sites)if(["house","hut","reedhut","mudhif","teahouse","lighthouse"].includes(W.kind)){let[H,N]=z(W.x,W.z);A.fillStyle="#7A4A2A",A.fillRect(H-1.5,N-1.5,3,3)}return Ft=E,{canvas:E,x0:-f,x1:f,z0:-f,z1:f}}let Pt=0;function Pe(M,w,h,_,S){_&&(Fn.visible=_.mode==="zip",Fn.visible&&(Fn.position.set(_.x,_.y,_.z),Fn.rotation.y=-_.face));for(let z of Ln){let W=a.items[z.idx],H=!(W&&W.taken)&&(z.it.x-h.x)**2+(z.it.z-h.z)**2<1500*1500;if(z.grp.visible=H,!H)continue;let N=Math.hypot(z.it.x-h.x,z.it.z-h.z);z.beam.visible=N>6,z.beam.scale.set(1+N/220,1+N/500,1+N/220),z.gl.material.opacity=.55+Math.sin(M*3+z.it.x)*.2,z.fe&&z.it.task==="feather"&&(z.fe.rotation.y=M*.8)}Hn();for(let z of Ae)z.rotation.z=Math.sin(M*1.4+z.position.z)*.06;ft(h.x,h.z,h.y);let E=Ot(S*.45);B(h.x,h.z,S*.4),_&&T(_.x,_.z),Q<on&&!E&&Ct(S*.15),Pt+=w;for(let z of gt)z.normalMap.offset.set(Pt*.01,Pt*.006);jt.forEach((z,W)=>{let H=.85+Math.sin(M*13+W*1.7)*.1+Math.sin(M*23+W)*.06;z.children.slice(0,3).forEach((N,q)=>{N.scale.set(1,H+q*.05,1),N.rotation.y=M*(1+q)})});for(let z of ge)z.grp.visible=Math.hypot(z.x-h.x,z.z-h.z)<(z.st.kind==="lighthouse"?4e3:z.st.kind==="house"||z.st.kind==="mudhif"?1600:700);for(let z of ke)z.head.rotation.y=Math.sin(M*.6+z.root.position.x)*.35;for(let z of ce)z.m.material.map.offset.y=-M*.9;let A=26e3/1400*11;yt.position.x=Math.round(h.x/A)*A,yt.position.z=Math.round(h.z/A)*A}function Z(M,w,h){for(let E=0;E<3;E++)ft(M,w,h),Ot(1e9);let _=Math.floor(M/t.VC),S=Math.floor(w/t.VC);for(let[E,A,z]of ht){if(z>260)break;let W=(_+E)*100003+(S+A);X.has(W)||(t.vegCell(_+E,S+A),X.add(W))}B(M,w,1e9,0),at(M,w),U=null,T(M,w)}return{update:Pe,warm:Z,colorIsland:v,mapShot:Vt,pending:()=>st.length+(Q<on?1:0),buildSome:Ot,selectTerrain:ft,tiles:O,refill:at,nearChunks:pt,mid:le,far:G,sea:yt,mapRows:Ct}}var Wh={th:[.36,.28,.15,.02,-.12,-.24,-.2,.02,.29,.4],kn:[.05,.24,.28,.14,.08,.14,.58,1.05,.68,.16],ft:[.22,0,0,0,-.06,-.28,-.62,-.22,.06,.2]},Xh={th:[.42,.22,-.02,-.3,-.5,-.36,.06,.52,.8,.66],kn:[.32,.56,.48,.36,.5,1.42,1.95,1.7,.9,.42],ft:[.12,0,-.08,-.48,-.8,-.4,0,.2,.24,.18]};function br(i,t){let e=i.length,n=(t%1+1)%1*e,s=Math.floor(n),r=n-s,o=i[(s-1+e)%e],a=i[s%e],l=i[(s+1)%e],c=i[(s+2)%e];return .5*(2*a+(-o+l)*r+(2*o-5*a+4*l-c)*r*r+(-o+3*a-3*l+c)*r*r*r)}var Vo=["bx","bz","by","px","py","pry","prz","sx","sy","sz","nx","ny","Lsx","Lsz","Lsy","Le","Rsx","Rsz","Rsy","Re","Lhx","Lhz","Lk","La","Rhx","Rhz","Rk","Ra"],$1=new Set(["Lsx","Rsx"]),K1=(i,t,e)=>Ni.thigh*Math.cos(i)+Ni.shin*Math.cos(t-i)+Ni.ankle+(e<0?.13*Math.sin(-e):0);function Lf(){let i={},t={};for(let l of Vo)i[l]=0,t[l]=0;i.py=t.py=Ni.hip;let e={lookT:2,lookYaw:0,lastFace:null,turn:0,inited:!1};function n(l,c,u,f,g=0){return t[l+"hx"]=c,t[l+"k"]=u,t[l+"a"]=-f+c-u,t[l+"hz"]=g,K1(c,u,f)}function s(l,c,u,f,g=0){t[l+"sx"]=c,t[l+"sz"]=u,t[l+"e"]=f,t[l+"sy"]=g}function r(){for(let l of Vo)t[l]=0;t.py=Ni.hip}function o(l,c,u,f,g){r();let x=l.mode==="walk"&&!l.air&&!l.swim?l.speed:0,y=e.lastFace==null?0:wn(e.lastFace,l.face)/Math.max(f,.001);e.lastFace=l.face,e.turn=Ye(e.turn,Me(y,-4,4),6,f);let R=0;if(l.mode==="faint"){let wt=Math.min(1,l.faintT*2.6);t.bx=-1.47*wt,t.by=-.86*wt,t.sx=.05,t.nx=.15*wt,n("L",.05,.15,.1,.16),n("R",0,.25,.1,.12),s("L",.2,1.15*wt+.1,.3),s("R",.1,.9*wt+.1,.5);return}if(l.mode==="zip"&&c.zip){let wt=c.zip.v||0;t.bx=-.05-.12*oe(4,27,wt)+.05*Math.sin(u*2.3),t.bz=.03*Math.sin(u*1.7),s("L",2.92,.12,.18),s("R",2.92,.12,.18),t.py=Ni.hip-.02,n("L",.62+.08*Math.sin(u*2),.85,.2),n("R",.48+.08*Math.sin(u*2+1),.7,.2),t.sx=.06,t.nx=-.15;return}if(l.mode==="climb"&&c.climbing){let wt=c.climbing.t*3.4,vt=Math.sin(wt),Dt=Math.sin(wt+1.6);t.bx=-.2,t.sx=.12,t.nx=-.35,t.py=Ni.hip-.12,s("L",2.45+.38*vt,.22,.55-.42*vt),s("R",2.45-.38*vt,.22,.55+.42*vt),n("L",.85+.38*Dt,1.25-.38*Dt,.45,.1),n("R",.85-.38*Dt,1.25+.38*Dt,.45,.1);return}if(l.mode==="fish"){let wt=c.fishing?oe(c.fishing.bite-.6,c.fishing.bite,c.fishing.t):0,vt=Math.sin(u*1.6)*.012,Dt=n("L",.14,.12,0,.05),qt=n("R",-.12,.08,0,.07);t.py=Math.max(Dt,qt)-.005,t.pry=.1,t.sy=-.18,t.sx=.06-wt*.2+vt,t.nx=.18,s("R",.5+wt*.5,-.12,1.25-wt*.4),s("L",.82+wt*.45,-.2,.78-wt*.3);return}if(l.mode==="glide"){s("L",2.6,.45,.4),s("R",2.6,.45,.4),n("L",.25,.4,.15),n("R",.15,.3,.15);return}if(l.mode==="lift"||l.mode==="carry"){s("L",2.2+Math.sin(u*12)*.5,1.2,.6),s("R",2+Math.sin(u*11+1)*.5,1.2,.6),n("L",.5+Math.sin(u*9)*.4,.8,.2),n("R",.3+Math.sin(u*9+2)*.4,.9,.2);return}if(l.swim){let wt=oe(.12,.6,l.speed),vt=l.hopPh||0;t.bx=te(.12,1.32,wt),t.by=te(-.8,-.42,wt),t.nx=te(.05,-.75,wt);for(let[Dt,qt]of[["L",0],["R",Math.PI]]){let Kt=vt+qt,pe=Math.sin(u*2.6+qt);t[Dt+"sx"]=te(.45+.25*pe,-(Math.PI+Kt),wt),t[Dt+"sz"]=te(1.15,.15,wt),t[Dt+"e"]=te(.65,1.1*Math.max(0,Math.sin(Kt)),wt);let Ut=Math.sin(vt*2.4+qt),ne=te(.5+.3*Math.sin(u*2.6+qt),.22*Ut,wt),he=te(.95+.4*Math.sin(u*2.6+qt+1),.28+.22*Math.sin(vt*2.4+qt+1),wt);n(Dt,ne,he,te(-.2,-.6,wt),.06)}t.sy=.15*Math.sin(vt)*wt,t.pry=-.1*Math.sin(vt)*wt;return}if(l.air&&l.mode==="walk"){let wt=oe(.6,-1.6,l.vy),vt=oe(-5.5,-8.5,l.vy);if(n("L",te(.78,.38,wt),te(1.15,.38,wt),.1),n("R",te(.08,.14,wt),te(.62,.28,wt),te(-.4,.1,wt)),s("L",te(1.25,.45,wt),te(.2,.85,wt),te(.6,.35,wt)),s("R",te(.95,.35,wt),te(.2,.85,wt),te(.6,.35,wt)),t.sx=te(.12,.04,wt),t.py=Ni.hip,vt>0){for(let[Dt,qt]of[["L",0],["R",2]])t[Dt+"sz"]=te(t[Dt+"sz"],1.7+.45*Math.sin(u*13+qt),vt),t[Dt+"sx"]=te(t[Dt+"sx"],.6*Math.sin(u*11+qt),vt);n("L",te(t.Lhx,.45+.4*Math.sin(u*10),vt),.6,0),n("R",te(t.Rhx,.45+.4*Math.sin(u*10+3),vt),.7,0)}return}let m=oe(.12,.55,x),v=te(.5,1,oe(.45,1.35,x))*(1+.16*oe(4.7,6.3,x));R=oe(2,3.6,x);let P=oe(4.7,6.3,x),F=l.sneak?1:0,I=(l.hopPh||0)/Se,O=Me((l.landT||0)/.25,0,1),D=Me((l.stun||0)/.9,0,1),b=wt=>({th:te(br(Wh.th,wt),br(Xh.th,wt),R)*v*m,kn:te(br(Wh.kn,wt),br(Xh.kn,wt),R)*te(.8,1,v)*m,ft:te(br(Wh.ft,wt),br(Xh.ft,wt),R)*m}),L=b(I),J=b(I+.5),k=1-m,st=Math.sin(u*.45);L.th+=k*.035,J.th-=k*.03,L.kn+=k*(.05+.04*Math.max(0,-st)),J.kn+=k*(.07+.05*Math.max(0,st));for(let wt of[L,J])wt.th+=F*.34+O*.48,wt.kn+=F*.6+O*1,wt.ft*=1-O;let dt=n("L",L.th,L.kn,L.ft,.025+k*.03),et=n("R",J.th,J.kn,J.ft,.025+k*.03),bt=R*.045*Math.pow(Math.max(0,Math.cos(Se*2*(I-.43))),2);t.py=Math.max(dt,et)+bt-.004,t.prz=te(.045,.03,R)*Math.sin(Se*I)*m+k*.02*st,t.px=.016*Math.sin(Se*I)*m*(1-R)-k*.012*st,t.pry=-.13*(L.th-J.th)*m,t.sy=-1.7*t.pry;let ft=Math.sin(u*1.65)*.012*k;t.sx=.03*m+.13*R+.07*P+F*.32+O*.3+ft-D*.28,t.sz=-t.prz*.7,t.bz=Me(-e.turn*x*.018,-.2,.2);let Ot=te(.85,.62,R)+.18*P;for(let[wt,vt]of[["L",J],["R",L]]){let Dt=Ot*vt.th,qt=Dt+R*.02+F*.25+O*.5+D*1.5+k*.03;s(wt,qt,te(.09,.13,R)+k*.02,te(.2+.32*Math.max(0,Dt),1.5+.35*Dt,R)+F*.5+D*1.6+k*.08,0)}c.vq&&c.vq.caught&&!c.vq.delivered&&s("R",-.12+t.Rsx*.25,.14,.5),e.lookT-=f;let xt=0;g?xt=Me(wn(Math.PI/2-l.face,g),-1.25,1.25):k>.8&&(e.lookT<0&&(e.lookT=2.5+Math.random()*3.5,e.lookYaw=Math.random()<.45?0:(Math.random()-.5)*1.6),xt=e.lookYaw),t.ny=-(t.pry+t.sy)+xt*.75,t.sy+=xt*.25,t.nx=-t.sx*.65+D*-.2}function a(l,c,u){let f=u?22:12;for(let g of Vo)Number.isFinite(t[g])||(t[g]=g==="py"?Ni.hip:0);for(let g of Vo)i[g]=$1.has(g)?Sn(i[g],t[g],f,c):Ye(i[g],t[g],g==="py"||g==="by"?18:f,c);l.body.rotation.set(i.bx,0,i.bz),l.pelvis.position.set(i.px,i.py,0),l.pelvis.rotation.set(0,i.pry,i.prz),l.spine.rotation.set(i.sx,i.sy,i.sz),l.neck.rotation.set(i.nx*.4,i.ny*.4,0),l.head.rotation.set(i.nx*.6,i.ny*.6,0);for(let g of l.arms){let x=g.s>0?"L":"R";g.sh.rotation.set(-i[x+"sx"],g.s*i[x+"sy"],g.s*i[x+"sz"]),g.el.rotation.x=-i[x+"e"]}for(let g of l.legs){let x=g.s>0?"L":"R";g.hp.rotation.set(-i[x+"hx"],0,g.s*i[x+"hz"]),g.kn.rotation.x=i[x+"k"],g.an.rotation.x=i[x+"a"]}}return{update(l,c,u,f,g,x){if(!e.inited){e.inited=!0,o(c,u,f,g,x);for(let y of Vo)i[y]=t[y]}return o(c,u,f,g,x),a(l,g,c.mode==="walk"&&!c.swim),i},reset(){e.inited=!1,e.lastFace=null},pose:i}}var Ar=Math.PI/180;function Df(i,t,e){let n=i.renderer,s=t.M,r=t.V,o=e.S,a=new Zr,l=new Fe("#CFDFE8");a.background=l,a.fog=new Yr(l,320,3600);let c=new Xn(62,.5,.25,7e3),u={time:{value:0},wind:{value:0},see:{value:new fn(0,0,0,0)}},f=hn(4242),g=new _o("#D2E6FF","#6A8A4E",1);a.add(g);let x=new j(.5,.72,.45).normalize(),y=new Mo("#FFE9C4",2.9);y.castShadow=!0,y.shadow.mapSize.set(2048,2048),Object.assign(y.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:1,far:180}),y.shadow.bias=-5e-4,y.shadow.normalBias=.03,y.shadow.radius=2.5,a.add(y,y.target);let R=yf("#3A7FD6","#9CCBF2","#EFE7D6",new j(.6,.35,-.7));a.add(R);let m=wf(),v=Sf(),P=new Te({vertexColors:!0}),F=new Te({vertexColors:!0,flatShading:!0}),I=new Te({vertexColors:!0,flatShading:!0}),O=[],D=(Z,rt)=>Z*100003+rt,b=t.HALF,L=64,J=Math.ceil(b*2/L),k=-J*L/2;function st(Z,rt,M,w,h){let _=s.rad(Z,M),S=r.Hv(Z,M);if(S<=rt+.02&&S<1e8){let z=Z-r.x,W=M-r.z,H=Math.abs(W),N=un(z*.07+11,W*.07),q=yn(z*.5,W*.5);De(h,"#5FAE3E","#9AD85E",N*1.3-.15+q*.2);let lt=Math.abs(W-r.riverZ(z));lt<2.4&&H<r.FLOOR+1&&z>-4&&h.lerp(ui.set(lt<1?"#8F8A62":"#D9C891"),oe(2.4,1.3,lt));let Lt=oe(1.2,5,rt-r.VF)*oe(r.FLOOR-.5,r.FLOOR+4,H)+oe(.55,.9,w)*.8;if(Lt>0){let Nt=.5+.5*Math.sin(rt*1.9+un(Z*.05,M*.05)*4);De(No,"#B98F62","#DDBE8E",Nt),No.lerp(ui.set("#8E6A48"),yn(Z*.35,rt*.6)*.35),h.lerp(No,Me(Lt,0,1))}return z<0&&H<9&&h.lerp(ui.set("#A88C62"),oe(-2,-12,z)*oe(9,5,H)*.6),h}if(_<205){De(h,"#3E6E2E","#6E9A44",un(Z*.06+3,M*.06)*1.2-.1),w>.8&&(De(ui,"#5E5A55","#A9A398",yn(Z*.35+M*.2,rt*1.6)*.8+yn(Z*2,M*2+rt)*.35),h.lerp(ui,oe(.8,1.3,w)));let z=s.nearest(Z,M,rt,1);return z&&z.d<z.p.hw+.9&&z.p.kind!=="bridge"&&h.lerp(ui.set("#9C7E55"),oe(z.p.hw+.9,z.p.hw-.2,z.d)*.85),_<s.RP+1&&h.set("#9A9388"),_>190&&h.lerp(ui.set("#5E8F3E"),oe(190,205,_)),h}return null}let dt=null;function et(){return!dt||!dt.pending()}{let Z=di(64,256,(A,z,W)=>{A.clearRect(0,0,z,W);for(let H=0;H<W;H+=2){let N=6+yn(H*.06,1)*8,q=z-6-yn(H*.06,5)*8,lt=A.createLinearGradient(N,0,q,0);lt.addColorStop(0,"rgba(150,118,78,0)"),lt.addColorStop(.2,"rgba(150,118,78,.95)"),lt.addColorStop(.8,"rgba(140,108,70,.95)"),lt.addColorStop(1,"rgba(140,108,70,0)"),A.fillStyle=lt,A.fillRect(N,H,q-N,2)}for(let H=0;H<260;H++)A.fillStyle=`rgba(${90+H%5*20},${80+H%7*12},${60+H%3*10},.6)`,A.beginPath(),A.arc(8+Math.random()*(z-16),Math.random()*W,.5+Math.random()*1.4,0,Se),A.fill()},[1,1]),rt=[],M=[],w=[],h=0,_=A=>{if(A.length<2)return;let z=0;A.forEach((W,H)=>{let N=A[Math.max(0,H-1)],q=A[Math.min(A.length-1,H+1)],lt=q.x-N.x,Lt=q.z-N.z,Nt=Math.hypot(lt,Lt)||1,Yt=-Lt/Nt,de=lt/Nt,Qt=W.hw+.35;if(H&&(z+=Math.hypot(W.x-A[H-1].x,W.z-A[H-1].z)/6),rt.push(W.x+Yt*Qt,W.y+.06,W.z+de*Qt,W.x-Yt*Qt,W.y+.06,W.z-de*Qt),M.push(0,z,1,z),H){let Wt=h+(H-1)*2;w.push(Wt,Wt+2,Wt+1,Wt+1,Wt+2,Wt+3)}}),h+=A.length*2};for(let A of s.segs){let z=[];for(let W of A.pts)W.kind==="bridge"||W.kind==="stones"||W.kind==="stairs"?(_(z),z=[]):z.push(W);_(z)}let S=new Ze;S.setAttribute("position",new qe(new Float32Array(rt),3)),S.setAttribute("uv",new qe(new Float32Array(M),2)),S.setIndex(w),S.computeVertexNormals();let E=new Ht(S,new Te({map:Z,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,side:Be}));E.receiveShadow=!0,a.add(E)}{let Z=s.stream,rt=[],M=[],w=[],h=0;for(let E=Z.r0;E<=Z.r1;E+=1){let A=s.x+Math.cos(Z.a)*E,z=s.z+Math.sin(Z.a)*E,W=-Math.sin(Z.a),H=Math.cos(Z.a),N=s.Hnat(A,z)+.5;if(rt.push(A+W*2.2,N,z+H*2.2,A-W*2.2,N,z-H*2.2),M.push(0,E/4,1,E/4),h){let q=(h-1)*2;w.push(q,q+2,q+1,q+1,q+2,q+3)}h++}let _=new Ze;_.setAttribute("position",new qe(new Float32Array(rt),3)),_.setAttribute("uv",new qe(new Float32Array(M),2)),_.setIndex(w),_.computeVertexNormals();let S=new Ht(_,new On({color:"#4AA6D8",specular:"#FFFFFF",shininess:140,normalMap:v,transparent:!0,opacity:.9,side:Be}));S.material.normalScale.set(.8,.8),a.add(S)}{let Z=[],rt=[],M=[],w=0;for(let S=-6;S<=r.VL+6;S+=.5){let E=r.riverZ(S),A=(r.riverZ(S+.1)-E)/.1,z=Math.hypot(1,A),W=-A/z,H=1/z,N=r.waterLevel(S);for(let q of[-1.35,1.35])Z.push(r.x+S+W*q,N,r.z+E+H*q),rt.push(S/3,q>0?1:0);if(w){let q=(w-1)*2;M.push(q,q+1,q+2,q+1,q+3,q+2)}w++}let h=new Ze;h.setAttribute("position",new qe(new Float32Array(Z),3)),h.setAttribute("uv",new qe(new Float32Array(rt),2)),h.setIndex(M),h.computeVertexNormals();let _=new Ht(h,new On({color:"#3D9FD8",specular:"#FFFFFF",shininess:140,normalMap:v,transparent:!0,opacity:.88}));_.material.normalScale.set(.7,.7),_.receiveShadow=!0,a.add(_)}let bt=(Z,rt,M,w,h)=>{let _=[Bt(kt(new me(.13,.22,M*.45,6),0,M*.22,0),"#5A3E26")];for(let S=0;S<rt;S++){let E=S/rt,A=w*(1-E*.62),z=M*.42;_.push(kt(Bt(new Mn(A,z,8,1),(W,H,N)=>De(W,h?"#1F4A2B":"#24572F",h?"#3F7A43":"#4E8C46",.25+(N/z+.5)*.6+(Ke(H*7,N*3)-.5)*.25)),0,M*.32+S*M*.22+z/2,0,0,Z()*3,0))}return nn(_)},ft=()=>{let Z=hn(43),rt=[Bt(kt(new me(.14,.22,2.6,6),0,1.3,0),"#5A3E26")];for(let[M,w,h,_]of[[0,3.1,0,1.35],[.7,2.6,.3,.95],[-.6,2.7,-.4,1],[.1,3.8,-.2,.9]])rt.push(kt(Bt(new gn(_,0),(S,E,A)=>De(S,"#2C6B33","#6FAE4E",.3+A/_*.35+(Z()-.5)*.3)),M,w,h));return nn(rt)},Ot=(Z,rt,M)=>Bt(kt(new Mn(rt*.9,Z*.95,6,1,!0),0,Z*.62,0),(w,h,_)=>De(w,M?"#1F4A2B":"#24572F",M?"#3F7A43":"#4E8C46",.3+(_/Z+.5)*.5)),xt={pine:$n(new Te({vertexColors:!0,flatShading:!0}),.006,2,u),tree:$n(new Te({vertexColors:!0,flatShading:!0}),.01,1.2,u),palm:$n(new Te({vertexColors:!0,side:Be}),.012,2.8,u),grass:$n(new Te({vertexColors:!0,side:Be}),.5,0,u)},wt={pineA:bt(hn(5),4,7.5,2,!1),pineB:bt(hn(6),3,6,2.5,!0),oak:ft()};function vt(Z,rt,M,w={}){let h=new Map,_=new dn,S=w.size||26;for(let E of M){let A=D(Math.floor(E.x/S),Math.floor(E.z/S));h.has(A)||h.set(A,[]),h.get(A).push(E)}for(let E of h.values()){let A=new ai(Z,rt,E.length),z=0,W=0;E.forEach((N,q)=>{_.position.set(N.x,N.y,N.z),_.rotation.set(N.rx||0,N.ry||0,N.rz||0),N.s3?_.scale.set(...N.s3):_.scale.setScalar(N.s||1),_.updateMatrix(),A.setMatrixAt(q,_.matrix),N.color&&A.setColorAt(q,_n.set(N.color)),z+=N.x,W+=N.z}),A.castShadow=!!w.cast,A.receiveShadow=!0,A.computeBoundingSphere(),a.add(A);let H=null;w.lod&&(H=new ai(w.lod,I,E.length),H.instanceMatrix=A.instanceMatrix,H.computeBoundingSphere(),H.visible=!1,a.add(H)),O.push({m:A,lo:H,x:z/E.length,z:W/E.length,far:w.far||105,lodAt:w.lodAt||62,small:!!w.small})}}let Dt=t.veg;vt(wt.pineA,xt.pine,Dt.pineA,{cast:!0,lod:Ot(7.5,2,!1)}),vt(wt.pineB,xt.pine,Dt.pineB,{cast:!0,lod:Ot(6,2.5,!0)}),vt(wt.oak,xt.tree,Dt.oak,{cast:!0,lod:kt(Bt(new gn(1.5,0),"#3E7D3A"),0,3.1,0)});let qt=nn([kt(Bt(new gn(.85,0),(Z,rt,M,w)=>De(Z,"#1E4A24","#4C8A3E",.35+M*.4+Ke(rt*9,w*9)*.3)),0,.55,0,0,0,0,1,.95,1),kt(Bt(new gn(.6,0),(Z,rt,M)=>De(Z,"#2A5C2C","#5E9E48",.5+M*.5)),.25,1.25,.1)]),Kt=ic(F,u);vt(qt,Kt,Dt.hedge,{size:26,far:70,cast:!1}),vt(Uo(),Kt,Dt.bush,{size:30,far:70,small:!0}),vt(Bo(),F,Dt.rock,{size:30,far:120});let pe=[Sr(hn(3),1.1,9),Sr(hn(8),-.8,10),Sr(hn(15),.5,8)],Ut=nn([Bt(kt(new me(.25,.4,8,5),0,4,0),"#8B6A3E"),Bt(kt(new gn(1.6,0),0,8.4,0,0,0,0,1,.55,1),"#3A7F34")]);pe.forEach((Z,rt)=>vt(Z,xt.palm,Dt.palm[rt].map(M=>({...M,s:M.s*2.2})),{cast:!0,lod:Ut,lodAt:70,far:260})),[sc(hn(21),"#E8443A",["#2F8A3C","#7CCB55"]),sc(hn(33),null,["#3B9447","#8AD460"]),sc(hn(41),"#FFB52E",["#2C7F3A","#6FC24F"])].forEach((Z,rt)=>vt(Z,xt.tree,Dt.fruit[rt].map(M=>({...M,s:M.s*1.5})),{cast:!0,far:220})),vt(Uo(),F,Dt.vbush,{size:30,far:90,small:!0}),vt(Bo(),F,Dt.vrock,{size:30,far:70,small:!0}),vt(Bt(new ni(.5,1),(Z,rt,M,w)=>De(Z,"#9C7A56","#D2B387",.45+M*.9+(Ke(rt*5,w*5)-.5)*.4)),F,Dt.boulder,{size:40,far:260}),vt(nn([kt(Bt(new me(.15,.22,1.6,5),"#6B4A2A"),0,.8,0),kt(Bt(new gn(1.2,0),(Z,rt,M)=>De(Z,"#4F7F3A","#8DB45E",M/1.2*.5+.5)),0,2.3,0,0,0,0,1,.85,1)]),F,Dt.rim,{size:40,far:300});{let Z=hn(5151),rt=(N,q)=>[r.x+N,r.z+q],M=(N,q,lt)=>r.CAMPS.some(Lt=>Math.hypot(N-Lt.x,q-Lt.z)<lt),w=[],h=[],_=[];for(let N=0;w.length<6e3&&N<3e4;N++){let q=-3+Z()*(r.VL+6),lt=(Z()<.5?-1:1)*Z()*(r.FLOOR+3);if(Math.abs(lt-r.riverZ(q))<1.15||M(q,lt,3.9))continue;let[Lt,Nt]=rt(q,lt);t.slope(Lt,Nt)>.6||w.push({x:Lt,y:t.H(Lt,Nt)-.02,z:Nt,ry:Z()*Se,s:.5+Z()*.7})}let S=["#FF6B9A","#FFFFFF","#FFD23F","#B28DFF","#FF8C42","#FF4D6D","#7FD1FF"];for(let N=0;N<9e3&&h.length<2400;N++){let q=-2+Z()*(r.VL+4),lt=(Z()<.5?-1:1)*Z()*(r.FLOOR-.3);if(Math.abs(lt-r.riverZ(q))<1.3||M(q,lt,3.9)||yn(q*.16,lt*.16)<.42)continue;let[Lt,Nt]=rt(q,lt);h.push({x:Lt,y:t.H(Lt,Nt),z:Nt,ry:Z()*Se*.25,s:1.2+Z()*.8,color:S[Math.floor(yn(q*.3+40,lt*.3)*S.length*.999+Z()*1.5)%S.length]})}for(let N=-4;N<r.VL+4;N+=.55)for(let q of[-1,1]){if(Z()<.35)continue;let lt=r.riverZ(N)+q*(1.05+Z()*.55);if(M(N,lt,5))continue;let[Lt,Nt]=rt(N,lt);_.push({x:Lt,y:t.H(Lt,Nt)-.05,z:Nt,ry:Z()*Se,s:.7+Z()*.6})}vt(Oo(),xt.grass,w,{size:24,far:55,small:!0});let E=nn([kt(Bt(new me(.007,.01,.24,3,1,!0),"#3E8E36"),0,.12,0),kt(Bt(new Bn(.02,6),"#FFD54A"),0,.248,.004,-1,0,0)]),A=nn([0,1,2,3,4].map(N=>{let q=N/5*Se;return kt(Bt(new Bn(.036,5),"#FFFFFF"),Math.cos(q)*.035,Math.sin(q)*.035,0,0,0,q)}));kt(A,0,.245,0,-1,0,0),vt(E,$n(P,.8,0,u),h.map(N=>({...N,color:null})),{size:24,far:45,small:!0}),vt(A,$n(new Te({vertexColors:!0,side:Be}),.8,0,u),h,{size:24,far:45,small:!0}),vt(rc(),$n(P,.09,.2,u),_,{size:24,far:70,small:!0});let z=[],W=[];for(let N of s.ALL){if(N.kind==="bridge"||N.kind==="stones"||N.k%2)continue;let q=N.seg.pts,lt=-(q[Math.min(N.k+1,q.length-1)].z-q[Math.max(N.k-1,0)].z),Lt=q[Math.min(N.k+1,q.length-1)].x-q[Math.max(N.k-1,0)].x,Nt=Math.hypot(lt,Lt)||1;for(let Yt of[-1,1]){let de=N.hw+.15+f()*1.4,Qt=N.x+lt/Nt*de*Yt,Wt=N.z+Lt/Nt*de*Yt,ie=t.H(Qt,Wt),Xt=f();Xt<.55?z.push({x:Qt,y:ie-.02,z:Wt,ry:f()*Se,s:.6+f()*.7}):Xt<.8&&W.push({x:Qt,y:ie,z:Wt,ry:f()*Se,s:.7+f()*.6})}}vt(Oo(),xt.grass,z,{size:30,far:45,small:!0});let H=nn([...Array(7)].map((N,q)=>{let lt=q/7*Se,Lt=.55+q%3*.12,Nt=[],Yt=[];for(let Qt=0;Qt<6;Qt++){let Wt=Qt/6,ie=(Qt+1)/6,Xt=Math.sin(Wt*Math.PI)*.09,re=Math.sin(ie*Math.PI)*.09,ae=[Math.cos(lt)*Lt*Wt,Math.sin(Wt*Math.PI*.8)*.3,Math.sin(lt)*Lt*Wt],Ve=[Math.cos(lt)*Lt*ie,Math.sin(ie*Math.PI*.8)*.3,Math.sin(lt)*Lt*ie],Ne=-Math.sin(lt),sn=Math.cos(lt);Nt.push(ae[0]-Ne*Xt,ae[1],ae[2]-sn*Xt,Ve[0]-Ne*re,Ve[1],Ve[2]-sn*re,ae[0]+Ne*Xt,ae[1],ae[2]+sn*Xt,ae[0]+Ne*Xt,ae[1],ae[2]+sn*Xt,Ve[0]-Ne*re,Ve[1],Ve[2]-sn*re,Ve[0]+Ne*re,Ve[1],Ve[2]+sn*re);for(let ln=0;ln<6;ln++)De(_n,"#2F6B2C","#79B356",Wt+.2),Yt.push(_n.r,_n.g,_n.b)}let de=new Ze;return de.setAttribute("position",new qe(new Float32Array(Nt),3)),de.setAttribute("color",new qe(new Float32Array(Yt),3)),de.computeVertexNormals(),de}));vt(H,$n(new Te({vertexColors:!0,side:Be}),.35,0,u),W,{size:30,far:50,small:!0})}let he=new we;a.add(he);{let Z=di(256,128,(rt,M,w)=>{rt.clearRect(0,0,M,w);let h=hn(3);for(let _=0;_<22;_++){let S=M*(.18+h()*.64),E=w*(.42+h()*.28),A=18+h()*30,z=rt.createRadialGradient(S,E,0,S,E,A);z.addColorStop(0,"rgba(255,255,255,.95)"),z.addColorStop(.6,"rgba(250,252,255,.55)"),z.addColorStop(1,"rgba(240,246,255,0)"),rt.fillStyle=z,rt.beginPath(),rt.arc(S,E,A,0,Se),rt.fill()}});for(let rt=0;rt<46;rt++){let M=f()*Se,w=600+f()*6200,h=new qn(new Un({map:Z,transparent:!0,opacity:.45+f()*.35,depthWrite:!1,fog:!1})),_=380+f()*520;h.scale.set(_,_*.38,1),h.position.set(Math.cos(M)*w,t.SEA+1400+f()*800,Math.sin(M)*w),he.add(h)}}dt=Ff({scene:a,G:t,U:u,camera:c,waterN:v,glowTex:m,colorBase:st,S:o});let _e=(Z,rt=256,M=64,w=34)=>di(rt,M,h=>{h.fillStyle="#8B5A2B",h.fillRect(0,0,rt,M),h.strokeStyle="#E8C170",h.lineWidth=Math.max(4,M/16),h.strokeRect(4,4,rt-8,M-8),h.fillStyle="#FFF3D6",h.font=`900 ${w}px -apple-system, "Geeza Pro", system-ui, sans-serif`,h.textAlign="center",h.textBaseline="middle";try{h.direction="rtl"}catch{}h.fillText(Z,rt/2,M/2+2)}),$t=new Map;{let Z=[];for(let w of s.bridges){w.seg.pts.slice(w.i,w.j+1).forEach((h,_)=>{if(h.gap)return;let S=w.seg.pts[Math.min(h.k+1,w.seg.pts.length-1)],E=Math.atan2(S.z-h.z,S.x-h.x);Z.push(kt(Bt(new be(.5,.07,1.45),(A,z,W,H)=>De(A,"#7A5634","#A57B4C",Ke(_,H*3)*.6+(W>0?.3:0))),h.x,h.y-.035,h.z,0,-E,0))});for(let h of[-1,1])for(let _ of[.95,.45]){let S=[];for(let E=w.i-1;E<=w.j+1;E++){let A=w.seg.pts,z=A[Me(E,0,A.length-1)],W=A[Me(E+1,0,A.length-1)],H=A[Me(E-1,0,A.length-1)],N=W.x-H.x,q=W.z-H.z,lt=Math.hypot(N,q)||1;S.push(new j(z.x-q/lt*.72*h,z.y+_,z.z+N/lt*.72*h))}Z.push(Bt(new Si(new Yn(S),S.length*2,.03,5),"#C9A46B"))}for(let h of[w.a,w.b])for(let _ of[-1,1]){let S=h.seg.pts,E=S[Math.min(h.k+1,S.length-1)],A=S[Math.max(h.k-1,0)],z=E.x-A.x,W=E.z-A.z,H=Math.hypot(z,W)||1;Z.push(kt(Bt(new me(.09,.11,1.5,6),"#5C3A1A"),h.x-W/H*.8*_,h.y+.6,h.z+z/H*.8*_))}}for(let w of s.ALL)if(w.kind==="stairs"){let h=w.seg.pts,_=h[Math.min(w.k+1,h.length-1)],S=h[Math.max(w.k-1,0)],E=Math.atan2(_.z-S.z,_.x-S.x);Z.push(kt(Bt(new be(.9,.5,2.7),(A,z,W,H)=>De(A,"#7C766B","#ABA393",W+.4+Ke(w.k,H*5)*.3)),w.x,w.y-.25,w.z,0,-E+(Ke(w.k,3)-.5)*.08,0))}for(let{p:w,nx:h,nz:_,sz:S}of s.ledgeRocks)Z.push(kt(Bt(new ni(1,0).scale(S,S*(1.3+Ke(w.k,5)),S*.8),(E,A,z,W)=>De(E,"#5E5A55","#A9A398",.35+z*.2+Ke(A*5+w.k,W*5)*.3)),w.x+h*(w.hw+S),w.y+S*.3,w.z+_*(w.hw+S),Ke(w.k,2)*.4,Ke(w.k,4)*3,0)),w.k%6===0&&Z.push(kt(Bt(new ni(.25,0),"#8A847A"),w.x-h*(w.hw-.05),w.y+.08,w.z-_*(w.hw-.05)));for(let w of s.stones)Z.push(kt(Bt(new me(w.r,w.r*1.12,1.4,9),(h,_,S)=>De(h,"#7F7A72","#B7B1A6",S+.6+Ke(_*9,w.x)*.2)),w.x,w.y-.7,w.z,0,f()*3,0));{let w=s.rest[0],h=w.face,_=-Math.sin(h),S=Math.cos(h),E=w.x+Math.cos(h)*3,A=w.z+Math.sin(h)*3;for(let W of[-1,1])Z.push(kt(Bt(new me(.11,.13,3.4,7),"#5C3A1A"),E+_*2*W,w.y+1.7,A+S*2*W));Z.push(kt(Bt(new be(.2,.2,4.6),"#4F3420"),E,w.y+3.35,A,0,-h,0));let z=new Ht(new xn(3.4,.85),new Te({map:_e("\u26F0\uFE0F \u0637\u0631\u064A\u0642 \u0627\u0644\u0642\u0645\u0629",512,128,60),side:Be}));z.position.set(E,w.y+2.85,A),z.rotation.y=-h-Math.PI/2,a.add(z)}{let h=r.x+-6,_=r.z+5.5,S=t.H(h,_);Z.push(kt(Bt(new me(.08,.1,2.4,6),"#5C3A1A"),h,S+1.2,_));let E=new Ht(new xn(2.4,.6),new Te({map:_e("\u{1F3DE}\uFE0F \u0648\u0627\u062F\u064A \u0627\u0644\u063A\u0632\u0644\u0627\u0646",384,96,46),side:Be}));E.position.set(h,S+2.25,_),E.rotation.y=Math.PI/2,a.add(E)}for(let w of s.rest)if(w.flag){for(let S=0;S<6;S++)Z.push(kt(Bt(new ni(.22-S*.025,0),"#9D978C"),w.x+1.6,w.y+.15+S*.25,w.z+1.1));Z.push(kt(Bt(new me(.05,.06,2.4,6),"#5C3A1A"),w.x-1.4,w.y+1.2,w.z-1.1));let h=new Ze;h.setAttribute("position",new qe(new Float32Array([0,.32,0,0,-.32,0,1.05,0,0]),3)),h.computeVertexNormals();let _=new Ht(h,new Te({color:"#F4F1EA",side:Be}));_.position.set(w.x-1.4,w.y+2.05,w.z-1.1),a.add(_),$t.set(w.id,_)}let rt=_e("\u2B05 \u0644\u0644\u0642\u0645\u0629");for(let w of s.signs){let h=t.H(w.x,w.z);Z.push(kt(Bt(new me(.06,.07,1.9,6),"#5C3A1A"),w.x,h+.95,w.z));let _=new Ht(new xn(1.1,.28),new Te({map:rt,side:Be}));_.position.set(w.x+Math.cos(w.a)*.45,h+1.65,w.z+Math.sin(w.a)*.45),_.rotation.y=-w.a+Math.PI,a.add(_)}for(let w of s.logs){let h=t.H(w.x,w.z);Z.push(kt(Bt(new me(.32,.38,4.2,8),(_,S,E)=>_.set(Math.abs(E)>2?"#C9A36B":"#5A3E26")),w.x,h+.35,w.z,0,w.a,Math.PI/2))}let M=new Ht(nn(Z),new Te({vertexColors:!0,side:Be}));M.castShadow=!0,M.receiveShadow=!0,a.add(M)}let ye=200,Le=new ai(new me(.22,.22,.05,20),new On({color:"#FFC93C",specular:"#FFF4C0",shininess:90,emissive:"#6B4A00",emissiveIntensity:.55}),ye);Le.castShadow=!0,Le.frustumCulled=!1,Le.count=0,a.add(Le);let le=s.plaza,G=s.RP,At=s.HS,it=new we;it.position.set(le.x,At,le.z),a.add(it);let mt=[],K={flag:null,flagBase:null,bell:null,lanterns:[],water:null,drops:null,leaves:null,kiosk:null,cups:[],streaks:null,scope:null},pt=(Z,rt)=>[Math.cos(Z*Ar)*rt,Math.sin(Z*Ar)*rt],ot=new On({color:"#B5562A",specular:"#FFFFFF",shininess:120,transparent:!0,opacity:.85}),ht=new On({color:"#C9A13B",specular:"#FFE9A8",shininess:90});{let Z=di(512,512,(ee,ze,je)=>{ee.fillStyle="#B9B1A3",ee.fillRect(0,0,ze,je);for(let an=0;an<12;an++){let Tn=an*22,ei=Tn+22,Ss=Math.max(6,Math.round(Se*(Tn+11)/34));for(let as=0;as<Ss;as++){let eu=as/Ss*Se,nu=(as+1)/Ss*Se,uc=.82+(an*7+as*3)%5*.04;ee.fillStyle=`rgb(${Math.round(196*uc)},${Math.round(186*uc)},${Math.round(168*uc)})`,ee.beginPath(),ee.arc(ze/2,je/2,ei-1.5,eu+.01,nu-.01),ee.arc(ze/2,je/2,Math.max(0,Tn+1.5),nu-.01,eu+.01,!0),ee.closePath(),ee.fill()}}}),rt=new Ht(new Bn(G,64),new Te({map:Z}));rt.rotation.x=-Math.PI/2,rt.position.y=.03,rt.receiveShadow=!0,it.add(rt);let M=[];for(let ee=0;ee<64;ee++){let ze=ee/64*Se;Math.abs(wn(ze,s.ENTRY_A))<.16||Math.abs(wn(ze,s.DECK_A))<.2||M.push(kt(Bt(new be(1.36,.72,.55),(je,an,Tn,ei)=>De(je,"#8E877B","#B8AF9F",.4+Tn+Ke(ee,ei*4)*.3)),Math.cos(ze)*(G-.1),.36,Math.sin(ze)*(G-.1),0,-ze+Math.PI/2,0))}for(let ee=0;ee<10;ee++)M.push(kt(Bt(new be(.46,.08,3.6),(ze,je,an,Tn)=>De(ze,"#7A5634","#A57B4C",Ke(ee,Tn)*.5+.3)),G-.3+ee*.48,.05,0));for(let ee of[-1,1]){M.push(kt(Bt(new be(4.8,.07,.07),"#6B4423"),G+2.1,.95,ee*1.8));for(let ze=0;ze<5;ze++)M.push(kt(Bt(new me(.05,.05,1,6),"#5C3A1A"),G+.1+ze*1.1,.5,ee*1.8))}M.push(kt(Bt(new be(.07,.07,3.6),"#6B4423"),G+4.5,.95,0));for(let ee=-1;ee<=1;ee++)M.push(kt(Bt(new me(.06,.06,1,6),"#5C3A1A"),G+4.5,.5,ee*1.6));for(let ee=0;ee<4;ee++)M.push(kt(Bt(new me(.12,.14,7,6),"#4F3420"),G+.5+ee*1.3,-3.4,(ee%2?1:-1)*1.5));M.push(Bt(new Zn([new It(.001,0),new It(2.35,0),new It(2.45,.08),new It(2.4,.62),new It(2.15,.66),new It(2.1,.22),new It(.001,.22)],40),(ee,ze,je)=>De(ee,"#9F988C","#D6CFC2",je*1.5+.2))),M.push(Bt(new Zn([new It(.001,.2),new It(.32,.2),new It(.22,.9),new It(.18,1.4),new It(.7,1.55),new It(.72,1.68),new It(.15,1.72),new It(.12,2.15),new It(.2,2.3),new It(.001,2.38)],24),(ee,ze,je)=>De(ee,"#A79F92","#DCD5C8",je*.4)));let w=le.kioskA*Ar,[h,_]=pt(le.kioskA,9.2),S=Math.atan2(-Math.cos(w),-Math.sin(w)),E=[],A=ee=>E.push(ee),z=(ee,ze)=>ee.set(Math.floor((ze+1.6)/.4)%2?"#A97B4C":"#93683E");A(kt(Bt(new be(3.2,2.4,.12),z),0,1.2,-1.05));for(let ee of[-1,1])A(kt(Bt(new be(.12,2.4,2.2),"#8A5F36"),ee*1.55,1.2,0));A(kt(Bt(new be(3.5,.12,2.7),"#6B4423"),0,2.45,.15)),A(kt(Bt(new be(3.1,1,.5),(ee,ze,je)=>ee.set(je>.42?"#5C3A1A":Math.floor((ze+1.55)/.31)%2?"#A97B4C":"#93683E")),0,.5,.85));for(let ee=0;ee<8;ee++)A(kt(Bt(new be(.44,.04,.9),ee%2?"#FAF3E6":"#2E8B57"),-1.54+ee*.44,2.3,1.75,.35,0,0));A(kt(Bt(new be(2.6,.06,.35),"#6B4423"),0,1.6,-.9));for(let ee=0;ee<5;ee++)A(kt(Bt(new me(.07,.06,.22,8),["#2E86AB","#C0612B","#F2E3C6","#9B2335","#E8C170"][ee]),-1+ee*.5,1.75,-.9));let W=new we;W.add(new Ht(nn(E),new Te({vertexColors:!0,side:Be}))),W.position.set(h,0,_),W.rotation.y=S,it.add(W),W.traverse(ee=>{ee.isMesh&&(ee.castShadow=!0,ee.receiveShadow=!0)}),K.kiosk=W;let H=new Ht(new Zn([new It(.001,0),new It(.14,0),new It(.16,.05),new It(.22,.2),new It(.2,.42),new It(.12,.5),new It(.14,.56),new It(.06,.62),new It(.001,.64)],18),ht);H.position.set(-1,1,.85),W.add(H);for(let ee=0;ee<6;ee++){let ze=new Ht(new me(.045,.032,.1,10),ot);ze.position.set(-.3+ee*.2,1.05,.9),W.add(ze),K.cups.push(ze)}let N=Ms({thobe:"#EDE6DA",bisht:null,shmagh:"#1E1E1E",beard:"#2E2A26",beads:!1});N.root.position.set(.35,0,-.25),W.add(N.root),mt.push({m:N,base:N.root.position.clone(),kind:"seller"});for(let ee of le.benches){let ze=ee*Ar,[je,an]=pt(ee,6.6),Tn=-ze-Math.PI/2,ei=-Math.sin(ze),Ss=Math.cos(ze);M.push(kt(Bt(new be(2.2,.1,.55),"#8A5F36"),je,.45,an,0,Tn,0)),M.push(kt(Bt(new be(2.2,.5,.08),"#7A5232"),je+Math.cos(ze)*.3,.75,an+Math.sin(ze)*.3,0,Tn,0));for(let as of[-.9,.9])M.push(kt(Bt(new be(.1,.45,.5),"#6B4423"),je+ei*as,.22,an+Ss*as,0,Tn,0))}let q=()=>{let ee=new Ht(new me(.035,.026,.08,10),ot);return ee.position.set(0,-.43,.05),ee},lt={tea:[le.meet[0]-le.x,le.meet[1]-le.z],stand:[h,_]},Lt=[Ms({thobe:"#D8CDB8",bisht:"#2D3A4E",shmagh:"#C8102E",beads:!1,beard:"#5A524C"}),Ms({thobe:"#F4F1EA",bisht:null,shmagh:"#F4F1EA",beard:"none",beads:!0}),Ms({thobe:"#CFE0E8",bisht:null,shmagh:"#C8102E",beard:"#3A3430",beads:!1})];le.guests.forEach((ee,ze)=>{let je=Lt[ze],[an,Tn]=pt(ee.a,ee.r),ei=lt[ee.kind];je.root.position.set(an,0,Tn),je.root.rotation.y=Math.atan2(ei[0]-an,ei[1]-Tn),it.add(je.root),mt.push({m:je,base:je.root.position.clone(),kind:ee.kind,ph:f()*6}),ee.kind==="tea"&&je.arms[1].el.add(q())});let Nt=118*Ar,[Yt,de]=pt(118,9),Qt=-Math.sin(Nt),Wt=Math.cos(Nt);for(let ee of[-1,1])M.push(kt(Bt(new be(.18,2.8,.18),"#5C3A1A"),Yt+Qt*.9*ee,1.4,de+Wt*.9*ee));M.push(kt(Bt(new be(2.3,.2,.24),"#4F3420"),Yt,2.8,de,0,-Nt-Math.PI/2,0));let ie=new we;ie.position.set(Yt,2.7,de),it.add(ie);let Xt=new Ht(new Zn([new It(.001,-.05),new It(.18,-.06),new It(.24,-.25),new It(.3,-.55),new It(.42,-.72),new It(.4,-.76),new It(.001,-.76)],24),new On({color:"#B07A2E",specular:"#FFE2A0",shininess:100}));Xt.castShadow=!0;let re=new Ht(new Ee(.07,10,8),Ce("#3B2A1A"));re.position.y=-.7,ie.add(Xt,re),K.bell={g:ie,swing:0,v:0};let[ae,Ve]=pt(300,10.2);M.push(kt(Bt(new me(.08,.1,9,8),"#D9D9D9"),ae,4.5,Ve)),M.push(kt(Bt(new Ee(.16,10,8),"#E8C170"),ae,9.05,Ve));let Ne=new xn(3.2,2,20,10);Ne.translate(1.6,0,0);let sn=new Float32Array(Ne.attributes.position.count*3);for(let ee=0;ee<Ne.attributes.position.count;ee++){let ze=Ne.attributes.position.getY(ee);_n.set(ze>.33?"#CE1126":ze>-.33?"#FFFFFF":"#141414"),Math.abs(ze)<.2&&Math.abs(Ne.attributes.position.getX(ee)-1.6)<.35&&_n.set("#007A3D"),sn.set([_n.r,_n.g,_n.b],ee*3)}Ne.setAttribute("color",new qe(sn,3));let ln=new Ht(Ne,new Te({vertexColors:!0,side:Be}));ln.position.set(ae+.1,7.9,Ve),ln.castShadow=!0,it.add(ln),K.flag=ln,K.flagBase=Float32Array.from(Ne.attributes.position.array);let ue=new we;ue.position.set(G+3.9,0,0),it.add(ue);for(let ee=0;ee<3;ee++){let ze=ee/3*Se,je=new Ht(new me(.03,.03,1.3,6),Ce("#3B3B3B"));je.position.set(Math.cos(ze)*.25,.6,Math.sin(ze)*.25),je.rotation.set(Math.sin(ze)*.38,0,-Math.cos(ze)*.38),ue.add(je)}let xe=new Ht(new me(.09,.13,1.1,16),ht);xe.rotation.z=Math.PI/2-.15,xe.position.set(.1,1.32,0),ue.add(xe);let Re=new Ht(new me(.14,.14,.06,16),Ce("#1A2A3A",{shininess:160,specular:"#FFFFFF"}));Re.rotation.z=Math.PI/2-.15,Re.position.set(.66,1.4,0),ue.add(Re),wr(ue),K.scope=ue;let en=le.lamps.map(ee=>ee*Ar);for(let ee of en){let ze=Math.cos(ee)*12.2,je=Math.sin(ee)*12.2;M.push(kt(Bt(new me(.06,.08,3.2,6),"#2E2E2E"),ze,1.6,je));let an=new we;an.position.set(ze,3,je);let Tn=new Ht(new me(.11,.11,.26,8),new vn({color:"#FFD36B"})),ei=new qn(new Un({map:m,color:"#FFC14D",transparent:!0,opacity:.7,depthWrite:!1,blending:zn}));ei.scale.setScalar(.75),an.add(Tn,ei),it.add(an),K.lanterns.push(an)}let He=[];for(let ee=0;ee<4;ee++){let ze=en[ee],je=en[(ee+1)%4],an=wn(ze,je);an<0&&(an+=Se);for(let Tn=1;Tn<9;Tn++){let ei=ze+an*Tn/9,Ss=Math.sin(Tn/9*Math.PI)*.6;He.push([Math.cos(ei)*12.2,3.05-Ss,Math.sin(ei)*12.2])}}let Je=new ai(new Ee(.07,8,6),new vn({color:"#FFFFFF"}),He.length),Rn=new dn,ks=["#FF5D8F","#FFD23F","#7FD1FF","#8DE26B"];He.forEach(([ee,ze,je],an)=>{Rn.position.set(ee,ze,je),Rn.updateMatrix(),Je.setMatrixAt(an,Rn.matrix),Je.setColorAt(an,_n.set(ks[an%4]))}),it.add(Je);for(let ee of le.beds){let[ze,je]=pt(ee,11);M.push(kt(Bt(new me(.7,.6,.5,12),"#8E877B"),ze,.25,je));for(let an=0;an<9;an++)M.push(kt(Bt(new gn(.13,0),["#FF5D8F","#FFD23F","#FFFFFF","#B28DFF"][an%4]),ze+Math.cos(an)*.4,.58,je+Math.sin(an)*.4))}let hc=new Ht(nn(M),new Te({vertexColors:!0,side:Be}));hc.castShadow=!0,hc.receiveShadow=!0,it.add(hc),vt(wt.pineA,xt.pine,le.pines.map(ee=>{let[ze,je]=pt(ee,11.6);return{x:le.x+ze,y:At-.1,z:le.z+je,ry:f()*Se,s:.9}}),{cast:!0,size:100,far:500});let Ho=new Ht(new Bn(2.12,40),new On({color:"#4AA6D8",specular:"#FFFFFF",shininess:140,normalMap:v,transparent:!0,opacity:.88}));Ho.rotation.x=-Math.PI/2,Ho.position.y=.55,it.add(Ho),K.water=Ho;let qh=140,Yh=[];for(let ee=0;ee<qh;ee++)Yh.push([f()*Se,f(),.5+f()*.5]);let Zh=new Ze;Zh.setAttribute("position",new qe(new Float32Array(qh*3),3)),K.drops=new dr(Zh,new Rs({size:.16,map:m,color:"#E6F6FF",transparent:!0,opacity:.9,depthWrite:!1})),K.drops.userData.seed=Yh,K.drops.frustumCulled=!1,it.add(K.drops);let Jh=220,$h=[];for(let ee=0;ee<Jh;ee++)$h.push([f()*60-30,f()*8,f()*60-30,f()]);let Kh=new Ze;Kh.setAttribute("position",new qe(new Float32Array(Jh*3),3)),K.leaves=new dr(Kh,new Rs({size:.22,map:m,color:"#A8D46A",transparent:!0,opacity:0,depthWrite:!1})),K.leaves.userData.seed=$h,K.leaves.frustumCulled=!1,it.add(K.leaves);let jh=70,Qh=[];for(let ee=0;ee<jh;ee++)Qh.push([f()*50-25,f()*9-1,f()*50-25,.5+f()]);let tu=new Ze;tu.setAttribute("position",new qe(new Float32Array(jh*6),3)),K.streaks=new ps(tu,new es({color:"#FFFFFF",transparent:!0,opacity:0,depthWrite:!1})),K.streaks.userData.seed=Qh,K.streaks.frustumCulled=!1,it.add(K.streaks)}let _t=new we;a.add(_t);let Rt={flames:[],glows:[],lantern:null};{let M=new j(4,0,-2.4),w=[],h=(ue,xe)=>ue.set(Math.floor((xe+1.7)/.425)%2?"#EAD9B5":"#D9C39C");w.push(kt(Bt(new be(3.4,1.95,2.4),h),0,.975,-2.8));for(let ue of[-1,1])w.push(kt(Bt(new be(3.62,.07,1.52),(xe,Re)=>xe.set(Math.floor((Re+1.81)/.4525)%2?"#C9AE82":"#B99D70")),0,2.32,-2.8+ue*.6,ue*.59,0,0));let _=new wi;_.moveTo(-1.2,0),_.lineTo(1.2,0),_.lineTo(0,.8),_.closePath();for(let ue of[-1,1])w.push(kt(Bt(new is(_),"#E3D0A8"),0+ue*1.7,1.95,-2.8,0,Math.PI/2,0));w.push(kt(Bt(new be(.95,1.55,.05),"#3F2412"),0-.25,.775,-2.8+1.22));for(let ue of[-1,1]){let xe=new wi;xe.moveTo(0,0),xe.lineTo(.42*ue,0),xe.lineTo(0,-1),xe.closePath(),w.push(kt(Bt(new is(xe),"#E9D7B0"),0-.25+ue*.04,1.55,-2.8+1.25))}let S=new j(0,2.15,-2.8+1.2),E=new j(0,1.98,-2.8+2.55),A=S.distanceTo(E),z=Math.atan2(S.y-E.y,E.z-S.z);for(let ue=0;ue<8;ue++){let xe=-1.4875+ue*.425,Re=ue%2?"#FAF3E6":"#D7263D";w.push(kt(Bt(new be(.425,.035,A),Re),xe,(S.y+E.y)/2,(S.z+E.z)/2,z,0,0)),w.push(kt(Bt(new Bn(.2125,10,Math.PI,Math.PI),Re),xe,E.y,E.z+.01))}for(let ue of[-1,1])w.push(kt(Bt(new me(.045,.055,2.05,7),"#5C3A1A"),0+ue*1.68,1.02,-2.8+2.55));let W=0-.78,H=-2.8+2;w.push(kt(Bt(new be(1,.06,.55),"#8B5A2B"),W,.74,H));for(let[ue,xe]of[[-1,-1],[1,-1],[-1,1],[1,1]])w.push(kt(Bt(new me(.03,.03,.72,5),"#6B4220"),W+ue*.44,.36,H+xe*.22));let N=ue=>new Zn([new It(.001,0),new It(.09*ue,0),new It(.15*ue,.07),new It(.16*ue,.17),new It(.11*ue,.28),new It(.06*ue,.32),new It(.075*ue,.36),new It(.06*ue,.37)],14);w.push(kt(Bt(N(1),(ue,xe,Re)=>ue.set(Re>.2&&Re<.24?"#F2E3C6":"#C0612B")),W-.3,.77,H)),w.push(kt(Bt(N(.8),(ue,xe,Re)=>ue.set(Re>.16&&Re<.19?"#FFFFFF":"#2E86AB")),W+.02,.77,H-.05)),w.push(kt(Bt(new Ee(.28,12,8),(ue,xe,Re)=>De(ue,"#C8B18A","#E2D2AE",Re*2+.5)),0-2.05,.27,-2.8+1.2,0,0,0,1,1.2,1)),w.push(kt(Bt(new be(.5,.42,.42),(ue,xe,Re)=>ue.set(Math.abs(Re)>.17||Math.abs(xe)>.21?"#7A4E25":"#A0703C")),0+1.95,.21,-2.8+1,0,.3,0));let q=(ue,xe)=>{let Re=ue.distanceTo(xe),en=Math.max(2,Math.round(Re/.55));for(let He=0;He<=en;He++){let Je=ue.clone().lerp(xe,He/en);w.push(kt(Bt(new me(.045,.055,.85,6),"#8B5A2B"),Je.x,.42,Je.z))}for(let He of[.3,.62]){let Je=Bt(new be(.05,1,.035),"#9C6A36");kt(Je,0,0,0,0,0,0,1,Re,1),kh(Je,new j(ue.x,He,ue.z),new j(xe.x,He,xe.z)),w.push(Je)}},lt=new j(-5.8,0,-.75),Lt=new j(-5.8,0,-2.9),Nt=new j(-3.1,0,-2.9),Yt=new j(-3.1,0,-.75);q(lt,Lt),q(Lt,Nt),q(Nt,Yt),w.push(kt(Bt(new be(1,.18,.35),"#7A4E25"),-4.45,.09,-2.55)),w.push(kt(Bt(new be(.9,.06,.28),"#D8C26A"),-4.45,.2,-2.55)),w.push(kt(Bt(new be(1.75,.46,.06),"#7A4A22"),0,2.66,-2.8+1.25));for(let ue=0;ue<9;ue++){let xe=ue/9*Se;w.push(kt(Bt(new ni(.11,0),(Re,en,He)=>De(Re,"#7D776C","#B5AFA2",He*4+.5)),M.x+Math.cos(xe)*.42,.06,M.z+Math.sin(xe)*.42,ue,ue*2,0,1,.7,1))}for(let ue=0;ue<3;ue++){let xe=ue/3*Math.PI;w.push(kt(Bt(new me(.05,.05,.62,6),(Re,en,He)=>Re.set(Math.abs(He)>.27?"#C9A36B":"#4A2E18")),M.x,.1,M.z,0,xe,Math.PI/2-.25))}let de=new Ht(nn(w),new Te({vertexColors:!0,side:Be}));de.castShadow=!0,de.receiveShadow=!0,_t.add(de);let Qt=new Ht(new xn(1.62,.38),new Te({map:_e(i.sign||"\u062E\u064A\u0645\u0629 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",512,128,64),emissive:"#3B2410",emissiveIntensity:.25}));Qt.position.set(0,2.66,-2.8+1.29),_t.add(Qt);let Wt=new we,ie=new Ht(new me(.07,.07,.16,8),new vn({color:"#FFD36B"})),Xt=new qn(new Un({map:m,color:"#FFC14D",transparent:!0,opacity:.75,depthWrite:!1,blending:zn}));Xt.scale.setScalar(.9),Wt.add(ie,Xt),Wt.position.set(0+1.68,1.72,-2.8+2.55),_t.add(Wt),Rt.lantern=Wt;let re=ue=>new vn({color:ue,transparent:!0,opacity:.9,depthWrite:!1,blending:zn});[["#FF5A1F",.2,.55,0],["#FF9A2E",.15,.45,.07],["#FFE07A",.09,.3,-.05]].forEach(([ue,xe,Re,en],He)=>{let Je=new Ht(new Mn(xe,Re,10,1,!0),re(ue));Je.position.set(M.x+en,.12+Re/2,M.z-en),Je.userData={h0:Re,i:He},_t.add(Je),Rt.flames.push(Je)});let ae=new qn(new Un({map:m,color:"#FF8A2E",transparent:!0,opacity:.6,depthWrite:!1,blending:zn}));ae.position.set(M.x,.45,M.z),ae.scale.setScalar(1.8),_t.add(ae),Rt.glows.push(ae);let Ve=new we,Ne=new Ht(new Zn([new It(.001,0),new It(.1,0),new It(.115,.02),new It(.1,.09),new It(.06,.14),new It(.045,.2),new It(.06,.24),new It(.075,.26),new It(.04,.3),new It(.012,.34),new It(.02,.36),new It(.001,.37)],20),ht);Ve.add(Ne),Ve.position.set(M.x-.75,.12,M.z+.35),_t.add(Ve);let sn=di(256,160,(ue,xe,Re)=>{ue.fillStyle="#8E1B26",ue.fillRect(0,0,xe,Re),ue.fillStyle="#1F2F5C",ue.fillRect(10,10,xe-20,Re-20),ue.fillStyle="#8E1B26",ue.fillRect(20,20,xe-40,Re-40),ue.strokeStyle="#E8C170",ue.lineWidth=3,ue.strokeRect(16,16,xe-32,Re-32);let en=(He,Je,Rn,ks)=>{ue.fillStyle=ks,ue.beginPath(),ue.moveTo(He,Je-Rn),ue.lineTo(He+Rn*1.5,Je),ue.lineTo(He,Je+Rn),ue.lineTo(He-Rn*1.5,Je),ue.closePath(),ue.fill()};en(xe/2,Re/2,44,"#1F2F5C"),en(xe/2,Re/2,30,"#E8C170"),en(xe/2,Re/2,16,"#8E1B26"),en(xe/2,Re/2,6,"#F4EFE6")}),ln=new Ht(new xn(2,1.25),new Te({map:sn}));ln.rotation.x=-Math.PI/2,ln.rotation.z=.04,ln.position.set(0-.2,.02,-2.8+1.9),ln.receiveShadow=!0,_t.add(ln)}let Tt=new we;{let Z=new Ht(new mo(.95,1.18,48),new vn({color:"#FFD23F",transparent:!0,opacity:.9,depthWrite:!1,side:Be}));Z.rotation.x=-Math.PI/2,Z.position.y=.03;let rt=new Ht(new Bn(.95,40),new vn({color:"#FFE38A",transparent:!0,opacity:.25,depthWrite:!1}));rt.rotation.x=-Math.PI/2,rt.position.y=.025;let M=new Ht(new Mn(.2,.42,4),new On({color:"#FFB703",emissive:"#FF8A00",emissiveIntensity:.6,shininess:80}));M.rotation.x=Math.PI,M.position.y=1.9,Tt.add(Z,rt,M),Tt.userData={ring:Z,arrow:M},Tt.visible=!1,a.add(Tt)}function d(Z){let rt=Z==="wolf",M=new we,w=new we;M.add(w);let h=Ce(rt?"#7E8088":"#4E3626",{shininess:8}),_=Ce(rt?"#C9CACF":"#6E5038",{shininess:8}),S=Ce(rt?"#3E4048":"#2B1D12",{shininess:20}),E=rt?.95:1,A=rt?.72:.62,z=rt?.22:.33,W=new Ht(new Ee(1,22,14),h);W.scale.set(E/2,z,z*(rt?.85:.9)),W.position.y=A,w.add(W);let H=new Ht(new Ee(1,16,10),_);if(H.scale.set(E/2.3,z*.6,z*.75),H.position.set(0,A-z*.4,0),w.add(H),!rt){let Qt=new Ht(new be(E*.8,.12,.08),S);Qt.position.set(0,A+z*.95,0),w.add(Qt)}let N=new we;N.position.set(E/2+.05,A+(rt?.16:0),0),w.add(N);let q=new Ht(new Ee(rt?.16:.2,16,12),h);q.scale.set(1.2,.95,.9),N.add(q);let lt=new Ht(new me(rt?.05:.09,rt?.09:.13,rt?.26:.22,10),rt?_:h);lt.rotation.z=-Math.PI/2,lt.position.set(rt?.24:.25,-.04,0),N.add(lt);let Lt=new Ht(new Ee(rt?.035:.07,10,8),S);Lt.position.set(rt?.37:.36,-.03,0),rt||Lt.scale.set(.5,1,1.1),N.add(Lt);for(let Qt of[-1,1]){let Wt=new Ht(new Ee(.025,8,6),new vn({color:rt?"#F2C14E":"#1A0E08"}));Wt.position.set(.12,.06,Qt*.09),N.add(Wt);let ie=new Ht(new Mn(rt?.06:.05,rt?.16:.1,6),h);if(ie.position.set(-.02,rt?.17:.15,Qt*.08),ie.rotation.set(Qt*.25,0,rt?-.1:.4),N.add(ie),!rt){let Xt=new Ht(new Mn(.018,.12,6),Ce("#F4EFE6"));Xt.position.set(.36,-.04,Qt*.08),Xt.rotation.z=.6,N.add(Xt)}}let Nt=new we;Nt.position.set(-E/2,A+.05,0),w.add(Nt);let Yt=new Ht(rt?new Mi(.06,.36,4,8):new me(.015,.02,.18,6),h);Yt.position.y=rt?-.2:-.09,Nt.add(Yt),Nt.rotation.z=rt?.9:.4;let de=[];for(let[Qt,Wt]of[[E*.33,1],[-E*.33,0]])for(let ie of[-1,1]){let Xt=new we;Xt.position.set(Qt,A-z*.4,ie*z*.55),w.add(Xt);let re=new Ht(new me(.045,.06,(A-z*.4)*.55,8),h);re.position.y=-((A-z*.4)*.55)/2,Xt.add(re);let ae=new we;ae.position.y=-(A-z*.4)*.55,Xt.add(ae);let Ve=new Ht(new me(.03,.04,(A-z*.4)*.45,8),rt?h:S);Ve.position.y=-((A-z*.4)*.45)/2,ae.add(Ve),de.push({hip:Xt,knee:ae,front:Wt,s:ie})}return wr(M),a.add(M),M.scale.setScalar(1.15),{root:M,body:w,head:N,tail:Nt,legs:de,yaw:0}}let p=e.beasts.map(Z=>({e:Z,m:d(Z.kind)})),X=(()=>{let Z=new we,rt=new we;Z.add(rt);let M=Ce("#D9A066",{shininess:18}),w=Ce("#ECCB9C",{shininess:18}),h=Ce("#3B2A1A",{shininess:40}),_=[[-.56,0],[-.54,.1],[-.48,.17],[-.36,.2],[-.18,.18],[0,.185],[.18,.21],[.32,.215],[.44,.18],[.53,.11],[.57,0]],S=new Zn(_.map(([Qt,Wt])=>new It(Wt,Qt)),36);{let Qt=S.attributes.position;for(let Wt=0;Wt<Qt.count;Wt++){let ie=Qt.getX(Wt),Xt=Qt.getY(Wt),re=Qt.getZ(Wt),ae=Math.exp(-(((Xt+.1)/.22)**2));ie<0&&(ie*=1-ae*.28),Qt.setXYZ(Wt,Xt,-ie*(ie<0?.95:1.05),re*.82)}S.computeVertexNormals()}S=Bt(S,(Qt,Wt,ie)=>{let Xt=ie/.21;Xt<-.45?Qt.set("#FFF6E8"):Xt<-.15?De(Qt,"#6A3F1F","#8A5528",(Xt+.45)/.3):De(Qt,"#D9A066","#C58A50",(Xt-.3)*1.5),Wt<-.46&&Xt<.55&&Qt.set("#FFF6E8")});let E=new Ht(S,Ce("#FFFFFF",{vertexColors:!0,shininess:22}));E.position.y=.8,rt.add(E);let A=new we;A.position.set(-.56,.86,0);let z=new Ht(new Mi(.025,.1,3,6),Ce("#2B1D12"));z.position.y=-.06,A.add(z),A.rotation.z=.5,rt.add(A);let W=new we;W.position.set(.42,.88,0),rt.add(W);let H=new Ht(new me(.055,.1,.5,14),M);H.position.y=.23,H.scale.z=.85,W.add(H);let N=new Ht(new me(.036,.06,.42,10),Ce("#FFF6E8"));N.position.set(.04,.21,0),N.rotation.z=-.08,W.add(N),W.rotation.z=-.6;let q=new we;q.position.set(0,.49,0),q.scale.setScalar(1.12),W.add(q);let lt=new Ht(new Ee(.11,24,16),M);lt.scale.set(1.35,.9,.82),q.add(lt);let Lt=new Ht(new Ee(.075,18,12),w);Lt.position.set(.14,-.045,0),Lt.scale.set(1.25,.8,.85),q.add(Lt);let Nt=new Ht(new Ee(.03,10,8),h);Nt.position.set(.225,-.035,0),q.add(Nt);for(let Qt of[-1,1]){let Wt=new Ht(new Ee(.026,12,10),Ce("#120C08",{shininess:160,specular:"#FFFFFF"}));Wt.position.set(.035,.035,Qt*.083),q.add(Wt);let ie=new Ht(new Ee(.07,12,8),M);ie.scale.set(.45,1.25,.25),ie.position.set(-.08,.1,Qt*.08),ie.rotation.set(Qt*.6,0,.6),q.add(ie);let Xt=new Yn([new j(-.02,.07,Qt*.035),new j(-.09,.22,Qt*.07),new j(-.07,.38,Qt*.085),new j(0,.47,Qt*.06)]),re=new Si(Xt,18,.019,7);{let ae=re.attributes.position,Ve=8;for(let Ne=0;Ne<=18;Ne++){let sn=Xt.getPointAt(Ne/18),ln=1-Ne/18*.7;for(let ue=0;ue<Ve;ue++){let xe=Ne*Ve+ue;ae.setXYZ(xe,sn.x+(ae.getX(xe)-sn.x)*ln,sn.y+(ae.getY(xe)-sn.y)*ln,sn.z+(ae.getZ(xe)-sn.z)*ln)}}re.computeVertexNormals()}q.add(new Ht(Bt(re,(ae,Ve,Ne)=>ae.set(Math.floor(Ne*55)%2?"#3B2A1A":"#5A4330")),Ce("#FFFFFF",{vertexColors:!0,shininess:50})))}let Yt=new dn;Yt.position.set(0,.38,0),W.add(Yt);let de=[];for(let[Qt,Wt]of[[.34,1],[-.38,0]])for(let ie of[-1,1]){let Xt=new we;Xt.position.set(Qt,.76,ie*.09),rt.add(Xt);let re=new Ht(new Ee(Wt?.075:.1,12,10),M);re.scale.set(Wt?1.1:1.15,Wt?1.7:1.6,Wt?.6:.55),re.position.set(0,Wt?-.05:-.07,0),Xt.add(re);let ae=new Ht(new me(Wt?.026:.03,Wt?.04:.055,.36,10),M);ae.position.y=-.2,Xt.add(ae);let Ve=new we;Ve.position.y=-.38,Xt.add(Ve),Ve.add(new Ht(new Ee(.024,8,6),w));let Ne=new Ht(new me(.014,.02,.34,8),w);Ne.position.y=-.17,Ve.add(Ne);let sn=new Ht(new me(.017,.024,.045,8),Ce("#20150D",{shininess:60}));sn.position.y=-.355,Ve.add(sn),de.push({hip:Xt,knee:Ve,front:Wt,s:ie})}return wr(Z),a.add(Z),{root:Z,body:rt,neck:W,head:q,tail:A,legs:de,collar:Yt,yaw:-.25,neckA:-.6}})(),C=Ms();a.add(C.root);let V=null,B=Lf(),at=new ps(new Ze,new es({color:"#F4F4F4",transparent:!0,opacity:.85}));at.geometry.setAttribute("position",new qe(new Float32Array(6),3)),at.frustumCulled=!1,at.visible=!1,a.add(at);let ut=new Ht(new Ee(.035,10,8),new Te({color:"#E63946"}));ut.visible=!1,a.add(ut);function Et(Z){if(!(V&&V.id===Z.id)){if(V)for(let rt of[V.root,V.chute,V.drop,V.rope])a.remove(rt);V=Af(Z,m),a.add(V.root,V.chute,V.drop,V.rope),B.reset()}}function U(){let Z=o.vq.camp;_t.visible=!1,_t.position.set(r.x+Z.x,r.VF+Z.base,r.z+Z.z),_t.rotation.y=Z.rot,Tt.position.set(o.vq.zoneW.x,t.H(o.vq.zoneW.x,o.vq.zoneW.z),o.vq.zoneW.z),C.root.rotation.y=Z.rot,C.yaw=Z.rot}let T=[],tt=[];{let Z=new Ze;Z.setAttribute("position",new qe(new Float32Array([0,0,0,.9,0,-.25,.9,0,.25]),3)),Z.computeVertexNormals();let rt=new vn({color:"#34406A",side:Be});for(let _=0;_<9;_++){let S=new we,E=new Ht(Z,rt),A=new Ht(Z,rt);A.scale.x=-1,S.add(E,A);let z=_<5;S.userData={ph:f()*6,sp:.25+f()*.2,y:z?r.VF+26+f()*14:70+f()*40,cx:z?r.x+15+f()*90:(f()-.5)*300,cz:z?r.z+(f()-.5)*20:(f()-.5)*300,rad:10+f()*18,l:E,r:A},T.push(S),a.add(S)}let M=new wi;M.moveTo(0,0),M.bezierCurveTo(.05,.1,.16,.12,.15,.02),M.bezierCurveTo(.16,-.05,.08,-.1,0,-.02);let w=new is(M,6),h=["#FF8FD1","#FFD23F","#8FD6FF","#FFFFFF","#FF9E5E","#B28DFF"];for(let _=0;_<22;_++){let S=new Te({color:h[_%h.length],side:Be,emissive:h[_%h.length],emissiveIntensity:.25}),E=new we,A=new Ht(w,S),z=new Ht(w,S);z.scale.x=-1,E.add(A,z),E.userData={l:A,r:z,ax:r.x+6+f()*108,az:r.z+(f()-.5)*16,ph:f()*6},tt.push(E),a.add(E)}}let nt={yaw:0,pitch:.26,dist:5.6,init:!1,tgt:new j,pos:new j,scopeYaw:0,scopePitch:-.38,effPitch:null,effDist:null},yt=new j,ct=new j;function gt(Z){let rt=o.hero;if(!rt)return;if(o.scope){let lt=s.x+G+4.75,Lt=At+1.45,Nt=s.z,Yt=nt.scopeYaw,de=nt.scopePitch;nt.pos.set(lt,Lt,Nt),nt.tgt.set(lt+Math.cos(Yt)*100*Math.cos(de),Lt+Math.sin(de)*100,Nt+Math.sin(Yt)*100*Math.cos(de));return}let M=o.focus,w=rt.mode==="lift"||rt.mode==="carry"||rt.mode==="zip",h=rt.mode==="glide";yt.set(M&&M.x!=null?M.x:rt.x,rt.y+(w||h?.9:rt.mode==="zip"?1.6:1.42),M&&M.z!=null?M.z:rt.z),M&&(nt.yaw=Sn(nt.yaw,M.yaw,2.2,Z)),rt.mode==="carry"&&(nt.yaw=Sn(nt.yaw,Math.atan2(rt.z-nt.pos.z,rt.x-nt.pos.x),1.5,Z)),rt.mode==="zip"&&(nt.yaw=Sn(nt.yaw,rt.face,1.4,Z));let _=M?M.dist*.85:rt.mode==="carry"?11:rt.mode==="zip"?7.2:w?7:h?9:rt.swim?5.2:o.summit?5.6:4.9;nt.init||(nt.tgt.copy(yt),nt.dist=_,nt.effPitch=null,nt.effDist=null,nt.init=!0);let S=rt.mode==="faint"?2:w?6:14;nt.tgt.x=Ye(nt.tgt.x,yt.x,S,Z),nt.tgt.z=Ye(nt.tgt.z,yt.z,S,Z),nt.tgt.y=Ye(nt.tgt.y,yt.y,rt.air&&!w&&!h?6:10,Z),nt.dist=Ye(nt.dist,_,3,Z);let E=(lt,Lt)=>ct.set(nt.tgt.x-Math.cos(nt.yaw)*Math.cos(Lt)*lt,nt.tgt.y+Math.sin(Lt)*lt,nt.tgt.z-Math.sin(nt.yaw)*Math.cos(Lt)*lt),A="",z=(lt,Lt)=>{A="";for(let Nt=1;Nt<=8;Nt++){let Yt=Nt/8;E(lt*Yt,Lt);let de=t.H(ct.x,ct.z);if(ct.y<de+.4||ct.y-.85*(1-Yt)<de+.2)return A="terr",Yt;if(A="canopy",!w&&t.tallNear(ct.x,ct.z,Qt=>{let Wt=ct.x-Qt.x,ie=ct.z-Qt.z,Xt=Wt*Wt+ie*ie,re=Qt.r*(Qt.tree?3.4:1.2);return Nt>=2&&!o.summit&&Xt<re*re&&ct.y>de+1.9&&ct.y<de+9}))return Yt}return A="",0},W=w?.35:h?Math.max(nt.pitch,.42):nt.pitch,H=nt.dist,N=z(H,W);if(N&&A==="canopy"){let lt=Math.min(W,.04),Lt=z(H,lt);(!Lt||Lt>N)&&(W=lt,N=Lt)}else if(N)for(let lt of[.3,.6]){let Lt=Math.min(W+lt,1.05),Nt=z(H,Lt);if((!Nt||Nt>N)&&(W=Lt,N=Nt),!N)break}N&&(H=Math.max(1.8,H*(N-1/8))),nt.effPitch=nt.effPitch==null?W:Ye(nt.effPitch,W,W<nt.effPitch?8:2.5,Z),nt.effDist=nt.effDist==null?H:Ye(nt.effDist,H,H<nt.effDist?10:2.5,Z),E(Math.min(nt.effDist,H+.6),nt.effPitch),t.tallNear(ct.x,ct.z,lt=>{let Lt=ct.x-lt.x,Nt=ct.z-lt.z,Yt=Lt*Lt+Nt*Nt,de=lt.r+.35;if(Yt<de*de){let Qt=Math.sqrt(Yt)||.01;ct.x=lt.x+Lt/Qt*de,ct.z=lt.z+Nt/Qt*de}return!1});let q=t.H(ct.x,ct.z)+.4;ct.y<q&&(ct.y=q),nt.pos.copy(ct)}let Mt=()=>(nt.yaw*180/Math.PI%360+360)%360,zt=0,Zt=-1,ce=0,$=0,St=2,Gt=390,Jt=844,se=new dn;se.rotation.order="YXZ";let ge=new j,Ie=new j;function jt(Z,rt,M){Gt=Z,Jt=rt,St=M,n.setPixelRatio(M),n.setSize(Z,rt,!1),c.aspect=Z/rt,c.updateProjectionMatrix()}let ke=Z=>Math.PI/2-Z,Ae=new j,fe=new j;function Xe(Z,rt){let M=o.hero,w=V,h=null,_=(H,N,q)=>{let lt=Math.hypot(H-M.x,N-M.z);return lt<q&&lt>.8?(h=Math.PI/2-Math.atan2(N-M.z,H-M.x),!0):!1};if(M.mode==="walk"&&!M.swim&&!(o.vq.merW&&Math.abs(M.y-s.HS)<4&&_(o.vq.merW.x,o.vq.merW.z,9))&&!(!o.vq.caught&&_(e.gz.x,e.gz.z,14))&&M.speed<1.2){let H=t.I.board;_(H.x,H.z,9)}let S=B.update(w,M,o,Z,rt,h);w.root.position.set(M.x,M.y+S.by,M.z),w.turn=Sn(w.turn,ke(M.face),M.mode==="walk"?11:6,rt),w.root.rotation.y=w.turn;let E=M.mode==="lift"||M.mode==="carry"||M.stun>0||M.air&&M.vy<-7||M.mode==="faint";w.nextBlink-=rt,w.nextBlink<0&&(w.blink=.13,w.nextBlink=2.2+Math.random()*3),w.blink=Math.max(0,w.blink-rt);for(let H of w.eyes)H.scale.y=w.blink>0||M.mode==="faint"&&M.faintT>.4?.12:E?1.25:1;w.smile.visible=!E,w.ooh.visible=E,w.star&&(w.star.rotation.y=Z*2);for(let H of[-1,1]){let N=w.acc.userData["tail"+H];N&&(N.rotation.x=.6+Math.sin(Z*12+H)*.2+M.speed*.08)}if(w.cape&&(w.cape.rotation.x=.08+.55*oe(0,4.2,M.speed)+Math.sin(Z*3)*.03),w.fire){w.bodyMat.emissiveIntensity=.32+Math.sin(Z*13)*.08;for(let H of w.flames)H.scale.set(1,.8+Math.sin(Z*14+H.userData.ph*1.7)*.25,1)}w.torso.scale.x=1+Math.sin(Z*1.65)*.008;let A=M.mode==="fish";if(w.rod.visible=A,at.visible=ut.visible=A,A){w.root.updateMatrixWorld(!0),w.arms[1].wr.getWorldPosition(Ae),w.root.worldToLocal(Ae),w.rod.position.copy(Ae),w.rod.position.y-=.05,w.rod.rotation.set(.82,0,0),w.rod.updateMatrixWorld(!0),w.rodTip.getWorldPosition(fe);let H=M.x+Math.cos(M.face)*3.6,N=M.z+Math.sin(M.face)*3.6,q=t.water(H,N,t.H(H,N)+.05),lt=q?q.level:M.y-.5,Lt=o.fishing,Nt=Lt&&Lt.t>Lt.bite-.6?Math.sin(Z*30)*.03-.05:0;ut.position.set(H,lt+.02+Math.sin(Z*2.6)*.012+Nt,N);let Yt=at.geometry.attributes.position;Yt.setXYZ(0,fe.x,fe.y,fe.z),Yt.setXYZ(1,ut.position.x,ut.position.y,ut.position.z),Yt.needsUpdate=!0}let z=w.chute;if(z.visible=M.chute>.01,z.visible){z.position.copy(w.root.position),z.rotation.y=w.root.rotation.y;let H=M.chute,N=H<1?te(.15,1,H)+Math.sin(H*Math.PI)*.12:1;w.canopyHolder.scale.set(N,te(.4,1,H),N),w.canopyHolder.position.y=te(2.2,3.6,H),z.rotation.z=-(Math.hypot(M.vx,M.vz)*.05)+Math.sin(Z*1.5)*.05,z.rotation.x=Math.sin(Z*1.1)*.05;let q=w.lines.geometry.attributes.position,lt=w.canopyHolder.position.y,Lt=1.7*Math.sin(Math.PI*.42)*N,Nt=lt+1.7*Math.cos(Math.PI*.42)*.62*te(.4,1,H);for(let Yt=0;Yt<10;Yt++){let de=Yt/10*Se,Qt=Yt%2?.22:-.22;q.setXYZ(Yt*2,Math.cos(de)*Lt,Nt,Math.sin(de)*Lt),q.setXYZ(Yt*2+1,Qt,2.05,0)}q.needsUpdate=!0}let W=o.drop;if(w.drop.visible=!!(W&&W.t<2.4),w.drop.visible){let H=Me(1-W.t*1.2,.1,1);w.drop.position.set(W.x,t.H(W.x,W.z)+.02,W.z),w.drop.scale.set(1.05,.62*H,1.05),w.drop.material.opacity=Me(1-(W.t-1.4),0,1)}}function pn(Z,rt){for(let{e:M,m:w}of p){let h=(M.x-c.position.x)**2+(M.z-c.position.z)**2>19600;if(w.root.visible=!h,h)continue;let _=M.speed>.3,S=M.state==="chase"||M.state==="charge";w.root.position.set(M.x,M.y,M.z),w.yaw=Sn(w.yaw,-M.face,10,rt),w.root.rotation.y=w.yaw,w.body.position.y=_?Math.abs(Math.sin(M.ph))*(S?.06:.02):0,w.head.rotation.z=M.state==="notice"?-.25+Math.sin(Z*20)*.04:_?-.1:Math.sin(Z*1.3)*.15-.2,w.tail.rotation.z=(M.kind==="wolf"?.9:.4)+(S?.5:0)+Math.sin(Z*(S?14:3))*.15;for(let E of w.legs){let A=E.front?E.s>0?0:Math.PI:(E.s>0?Math.PI:0)+(S?.6:0);_?(E.hip.rotation.z=Math.sin(M.ph+A)*(S?.7:.4),E.knee.rotation.z=(E.front?-1:1)*Math.max(0,-Math.cos(M.ph+A))*.5):(E.hip.rotation.z=Ye(E.hip.rotation.z,0,8,rt),E.knee.rotation.z=Ye(E.knee.rotation.z,0,8,rt))}}}function En(Z,rt){let M=e.gz,w=X,h=M.state,_=Math.hypot(M.vx,M.vz)>.25;if(w.root.visible=(M.x-c.position.x)**2+(M.z-c.position.z)**2<260*260,!w.root.visible)return;let S=h==="flee"||h==="leap",E=h==="tired";w.root.position.set(M.x,M.y,M.z),w.body.position.y=_?Math.abs(Math.sin(M.ph))*(S?.07:.025):E?Math.sin(Z*9)*.008:0,w.yaw=Sn(w.yaw,-M.face,S?14:8,rt),w.root.rotation.y=w.yaw,w.body.rotation.z=S?Math.sin(M.ph*2)*.05:0;let A=h==="graze"||h==="pen"&&!_;w.neckA=Ye(w.neckA,A?-2.05:E?-1.15:S?-.95:h==="alert"||h==="look"||h==="cornered"?-.32:-.6,A?3:7,rt),w.neck.rotation.z=w.neckA,w.head.rotation.z=A?.5+Math.sin(Z*7)*.08:h==="alert"||h==="look"?.2:.35,w.head.rotation.y=h==="look"||h==="alert"||h==="cornered"?Math.sin(Z*1.6)*.25:0,w.tail.rotation.z=.5+(h==="alert"||S?.9:Math.sin(Z*3)*.2);let z=S?.6:E?.28:.36,W=h==="leap";for(let H of w.legs){let N=H.front?H.s>0?0:Math.PI:(H.s>0?Math.PI:0)+(S?.6:0);if(W){H.hip.rotation.z=H.front?.9:-.9,H.knee.rotation.z=H.front?-1.2:1.1;continue}if(_){let q=Math.sin(M.ph+N);H.hip.rotation.z=q*z,H.knee.rotation.z=(H.front?-1:1)*Math.max(0,-Math.cos(M.ph+N))*z*1.1}else H.hip.rotation.z=Ye(H.hip.rotation.z,0,8,rt),H.knee.rotation.z=Ye(H.knee.rotation.z,0,8,rt)}}function pi(Z,rt,M){let w=C,h=o.hero,_=o.vq,S=_.camp,E=h.x-_.merW.x,A=h.z-_.merW.z,z=Math.hypot(E,A);if(w.root.visible=z<200,!w.root.visible)return;let W=z<16||!!M,H=W?Math.atan2(E,A):S.rot+.15*Math.sin(Z*.3);o.focus&&o.focus.talk&&(H=S.rot+Me(wn(S.rot,Math.atan2(E,A)),-.7,.7)),w.yaw=Sn(w.yaw,H,3,rt),w.root.rotation.y=w.yaw,w.root.position.set(_.merW.x,r.VF+S.base,_.merW.z),w.root.scale.y=1+Math.sin(Z*1.7)*.007;let N=!!(M&&M.who==="merchant"&&M.shown<[...M.text].length);w.mouth.scale.y=N?.25+Math.abs(Math.sin(Z*15))*.9:.3,w.head.rotation.x=N?Math.sin(Z*5)*.05:0;let[q,lt]=w.arms;if(_.delivered){for(let Lt of w.arms)Lt.sh.rotation.z=Ye(Lt.sh.rotation.z,Lt.s*2.5,6,rt),Lt.el.rotation.x=Ye(Lt.el.rotation.x,-.3+Math.sin(Z*9+Lt.s)*.3,8,rt);w.root.position.y=r.VF+S.base+Math.abs(Math.sin(Z*6))*.06*(o.focus?1:0)}else if(_.caught&&W)lt.sh.rotation.z=Ye(lt.sh.rotation.z,1.35,5,rt),lt.el.rotation.x=Ye(lt.el.rotation.x,0,5,rt),lt.sh.rotation.x=Ye(lt.sh.rotation.x,-.2,5,rt),q.sh.rotation.z=Ye(q.sh.rotation.z,-.12,5,rt);else if(W&&z>2.5)lt.sh.rotation.z=Ye(lt.sh.rotation.z,2.55,5,rt),lt.el.rotation.x=Ye(lt.el.rotation.x,0,5,rt),lt.el.rotation.z=Math.sin(Z*8)*.45,lt.sh.rotation.x=0,q.sh.rotation.z=Ye(q.sh.rotation.z,-.12,5,rt);else for(let Lt of w.arms)Lt.sh.rotation.z=Ye(Lt.sh.rotation.z,Lt.s*.12,4,rt),Lt.el.rotation.z=Ye(Lt.el.rotation.z,0,4,rt),Lt.el.rotation.x=Ye(Lt.el.rotation.x,-.25,4,rt),Lt.sh.rotation.x=0}function mi(){let Z=V.rope;if(Z.visible=o.vq.caught&&!o.vq.delivered&&X.root.visible,!Z.visible)return;V.root.updateMatrixWorld(),X.root.updateMatrixWorld();let rt=V.arms[1].wr.getWorldPosition(ge),M=X.collar.getWorldPosition(Ie),w=rt.clone().lerp(M,.5);w.y=Math.min(rt.y,M.y)-.25,Z.geometry.dispose(),Z.geometry=new Si(new Ps(rt.clone(),w,M.clone()),18,.016,5)}function Fn(Z,rt){let M=o.wind,w=K.flag.geometry.attributes.position,h=K.flagBase;for(let N=0;N<w.count;N++){let q=h[N*3],lt=h[N*3+1],Lt=q/3.2;w.setXYZ(N,q*(1-M*.05),lt-Lt*Lt*.25*(1-M),Math.sin(Z*(4+M*12)-q*(1.6+M*1.5))*Lt*(.18+M*.42)+Math.sin(Z*7+lt*3)*.04*Lt)}w.needsUpdate=!0,K.flag.geometry.computeVertexNormals(),K.flag.rotation.y=-.3*M;let _=K.bell;_.v+=(-_.swing*18-_.v*1.4)*rt,_.swing+=_.v*rt,_.g.rotation.x=_.swing+M*.25*Math.sin(Z*6);for(let N of K.lanterns)N.rotation.z=Math.sin(Z*(1.6+M*8)+N.position.x)*(.06+M*.45),N.rotation.x=Math.cos(Z*(1.3+M*7))*M*.3;let S=K.drops.geometry.attributes.position,E=K.drops.userData.seed;for(let N=0;N<E.length;N++){let[q,lt,Lt]=E[N],Nt=(Z*Lt*.9+lt)%1,Yt=.15+Nt*1.6;S.setXYZ(N,Math.cos(q)*Yt+M*Nt*3.5,2.35+Math.sin(Nt*Math.PI)*.7-Nt*1.8,Math.sin(q)*Yt+M*Nt*1.2)}S.needsUpdate=!0,v.offset.x=Z*.03,K.water.material.normalScale.set(.6+M,.6+M);let A=K.streaks.geometry.attributes.position,z=K.streaks.userData.seed;K.streaks.material.opacity=oe(.15,.8,M)*.55;for(let N=0;N<z.length;N++){let[,q,lt,Lt]=z[N],Nt=(Z*Lt*(.6+M*1.6)+N*.137)%1,Yt=-30+Nt*60,de=1.5+M*3.5,Qt=lt+Math.sin(Z*2+N)*.6,Wt=q+Math.sin(Nt*9+N)*.4;A.setXYZ(N*2,Yt,Wt,Qt+Nt*12-6),A.setXYZ(N*2+1,Yt-de,Wt+.05,Qt+Nt*12-6-de*.3)}A.needsUpdate=!0;let W=K.leaves.geometry.attributes.position,H=K.leaves.userData.seed;K.leaves.material.opacity=M*.9;for(let N=0;N<H.length;N++){let[q,lt,Lt,Nt]=H[N],Yt=Z*(.5+Nt)*(.4+M)%1;W.setXYZ(N,(q+Yt*70)%60-30,lt*.6+.4+Math.sin(Z*3+N)*.5,Lt+Math.sin(Z+Nt*6)*2+Yt*6)}W.needsUpdate=!0;for(let N of mt){let q=N.m,[lt,Lt]=q.arms,Nt=1-Math.exp(-6*rt);q.root.scale.y=1+Math.sin(Z*1.6+N.base.x)*.006,q.root.rotation.x=-M*.14+Math.sin(Z*9+N.base.x)*M*.03;let Yt=0,de=-.12,Qt=-.25,Wt=0,ie=.12,Xt=-.25;if(M>.25&&(Yt=-2.4,de=0,Qt=-1.3),N.kind==="seller")Wt=-.5+Math.sin(Z*2)*.1,Xt=-1.2,N.pour>0&&(N.pour-=rt,Wt=-1,Xt=-.6);else if(N.kind==="tea"){let re=Math.max(0,Math.sin(Z*.5+N.ph))**8;Wt=-.45-re*.7,Xt=-1.25-re*.9}else N.kind==="stand"&&(Yt=M>.25?Yt:-.2,Wt=-.15+Math.sin(Z*1.1)*.25*(N.talk>0?1:.3),Xt=-.6);lt.sh.rotation.x+=(Yt-lt.sh.rotation.x)*Nt,lt.sh.rotation.z+=(de-lt.sh.rotation.z)*Nt,lt.el.rotation.x+=(Qt-lt.el.rotation.x)*Nt,Lt.sh.rotation.x+=(Wt-Lt.sh.rotation.x)*Nt,Lt.sh.rotation.z+=(ie-Lt.sh.rotation.z)*Nt,Lt.el.rotation.x+=(Xt-Lt.el.rotation.x)*Nt,q.mouth.scale.y=N.talk>0?.25+Math.abs(Math.sin(Z*15))*.9:.3,N.talk>0&&(N.talk-=rt)}}let Ei=-1;function Ti(Z,rt={}){let M=performance.now(),w=zt?Me((M-zt)/1e3,0,.1):1/60;zt=M;let h=Zt>=0?Me(Z-Zt,0,.1):1/60;Zt=Z,u.time.value=Z,u.wind.value=Ye(u.wind.value,o.wind,3,h),$++,ce=ce*.97+(w>1/38?1:0)*.03,$>90&&ce>.6&&St>1.01&&(jt(Gt,Jt,Math.max(1,St-.25)),ce=0,$=0);let _=o.hero;if(!_||!V)return;Ei!==o.vq.camp&&(U(),Ei=o.vq.camp),et(rt.budget!=null?rt.budget:4,_.x,_.z),Xe(Z,h),pn(Z,h),En(Z,h),pi(Z,h,rt.dlg),mi(),(s.rad(c.position.x,c.position.z)<120||o.scope)&&Fn(Z,h);let S=0;for(let Wt=0;Wt<o.coins.length&&S<ye;Wt++){let ie=o.coins[Wt];ie.taken||(ie.x-_.x)**2+(ie.z-_.z)**2>3600||(se.position.set(ie.x,ie.y+Math.sin(Z*2+Wt)*.08,ie.z),se.rotation.set(Math.PI/2,Z*3+Wt,0),se.scale.setScalar(1),se.updateMatrix(),Le.setMatrixAt(S++,se.matrix))}Le.count=S,Le.instanceMatrix.needsUpdate=!0;for(let[Wt,ie]of $t)ie.rotation.y=Math.sin(Z*2+ie.position.x)*.3,ie.material.color.set(o.reached.has(Wt)?"#FFD23F":"#F4F1EA");if(Tt.visible=o.vq.caught&&!o.vq.delivered,Tt.visible){let Wt=.5+.5*Math.sin(Z*5);Tt.userData.ring.scale.setScalar(1+Wt*.08),Tt.userData.arrow.position.y=1.9+Wt*.25,Tt.userData.arrow.rotation.y=Z*2}for(let Wt of Rt.flames){let ie=.75+Math.sin(Z*13+Wt.userData.i*2)*.18;Wt.scale.set(1,ie,1),Wt.position.y=.12+Wt.userData.h0*ie/2}for(let Wt of Rt.glows)Wt.material.opacity=.5+Math.sin(Z*11)*.08;Rt.lantern.rotation.z=Math.sin(Z*1.6)*.08;let E=Math.abs(c.position.x-(r.x+60))<160&&Math.abs(c.position.z-r.z)<90;for(let Wt of tt){if(Wt.visible=E,!E)continue;let ie=Wt.userData,Xt=ie.ax+Math.sin(Z*.45+ie.ph)*2.2,re=ie.az+Math.sin(Z*.7+ie.ph*2)*.9;Wt.position.set(Xt,t.H(Xt,re)+.7+Math.sin(Z*1.3+ie.ph)*.35,re),Wt.rotation.y=Math.cos(Z*.45+ie.ph)>0?-Math.PI/2:Math.PI/2;let ae=Math.sin(Z*22+ie.ph)*1.1;ie.l.rotation.y=ae,ie.r.rotation.y=-ae}for(let Wt of T){let ie=Wt.userData,Xt=Z*ie.sp+ie.ph;Wt.position.set(ie.cx+Math.cos(Xt)*ie.rad,ie.y+Math.sin(Z+ie.ph)*.8,ie.cz+Math.sin(Xt)*ie.rad),Wt.rotation.y=-Xt;let re=Math.sin(Z*8+ie.ph)*.6;ie.l.rotation.z=re,ie.r.rotation.z=-re}gt(h);let A=s.rad(_.x,_.z),z=oe(195,170,A)*oe(78,62,_.y),W=oe(50,95,_.y)*oe(200,120,A),H=Math.max(0,c.position.y-t.SEA),N=oe(20,420,H),q=o.scope?900:te(te(320,90,z),900,N),lt=o.scope?6500:te(te(3600,1200,z),6200,N);if(a.fog.near=Ye(a.fog.near,q,2,h),a.fog.far=Ye(a.fog.far,lt,2,h),K.scope.visible=!o.scope,c.fov=o.scope?13:62,c.updateProjectionMatrix(),c.position.copy(nt.pos),c.lookAt(nt.tgt),rt.shake>0){let Wt=rt.shake*.25;c.position.x+=(Math.random()-.5)*Wt,c.position.y+=(Math.random()-.5)*Wt}R.position.copy(c.position);let Lt=c.position.x,Nt=c.position.z,Yt=(o.scope?500:0)+oe(40,95,c.position.y)*160;for(let Wt of O){let ie=(Wt.x-Lt)**2+(Wt.z-Nt)**2,Xt=Wt.small?Wt.far:Wt.far+Yt,re=ie<Xt*Xt;if(Wt.lo){let ae=ie<Wt.lodAt*Wt.lodAt&&!o.scope;Wt.m.visible=re&&ae,Wt.lo.visible=re&&!ae}else Wt.m.visible=re}dt.update(Z,h,c.position,_,rt.budget!=null?rt.budget:6);let de=Math.round(_.x/.25)*.25,Qt=Math.round(_.z/.25)*.25;y.target.position.set(de,_.y,Qt),y.position.set(de+x.x*90,_.y+x.y*90,Qt+x.z*90),on(_),n.render(a,c)}let Ln=new j,Hn=new It;function on(Z){let rt=u.see.value;if(o.scope||Z.mode==="lift"||Z.mode==="carry"){rt.w=0;return}c.updateMatrixWorld(),Ln.set(Z.x,Z.y+.9,Z.z).applyMatrix4(c.matrixWorldInverse);let M=-Ln.z;if(M<.3){rt.w=0;return}Ln.set(Z.x,Z.y+.9,Z.z).project(c),n.getDrawingBufferSize(Hn);let w=1.6/(M*Math.tan(c.fov*Math.PI/360))*(Hn.y/2);rt.set((Ln.x*.5+.5)*Hn.x,(Ln.y*.5+.5)*Hn.y,M,w)}let Nn=new j;function Y(Z,rt,M){return Nn.set(Z,rt,M).project(c),{x:(Nn.x+1)/2,y:(1-Nn.y)/2,vis:Nn.z<1&&Nn.z>-1}}function Q(Z=160){a.updateMatrixWorld(),u.see.value.w=0;let rt=new j;C.head.getWorldPosition(rt);let M=n.domElement.width,w=n.domElement.height,h=new Xn(28,M/w,.05,1200),_=new j(Math.sin(C.root.rotation.y),0,Math.cos(C.root.rotation.y));h.position.copy(rt).addScaledVector(_,1.75).add(new j(0,.05,0)),h.lookAt(rt.x,rt.y-.02,rt.z),R.position.copy(h.position),y.target.position.copy(rt),y.position.set(rt.x+x.x*60,rt.y+x.y*60,rt.z+x.z*60);let S=[V&&V.root.visible,X.root.visible];V&&(V.root.visible=!1),X.root.visible=!1,n.render(a,h),V&&(V.root.visible=S[0]),X.root.visible=S[1];let E=document.createElement("canvas");E.width=E.height=Z;let A=Math.min(M,w);return E.getContext("2d").drawImage(n.domElement,(M-A)/2,(w-A)/2,A,A,0,0,Z,Z),E.toDataURL("image/jpeg",.9)}let Ft=(Z=1024)=>dt.mapShot(Z),Ct=()=>{for(let Z of mt)Z.kind==="seller"&&(Z.pour=1.4,Z.talk=3)},Vt=Z=>{let rt=mt.filter(M=>M.kind===Z);rt.length&&(rt[Math.floor(Math.random()*rt.length)].talk=3)},Pt=()=>{K.bell.v+=2.4};function Pe(){if(!V)return null;V.root.updateMatrixWorld(!0);let Z=new j,rt=o.hero;V.head.getWorldPosition(Z);let M=Z.y+.115-(rt.y+B.pose.by);V.arms[0].sh.getWorldPosition(Z);let w=Z.clone();return V.arms[1].sh.getWorldPosition(Z),{height:+M.toFixed(3),shoulders:+w.distanceTo(Z).toFixed(3),leg:+V.pelvis.position.y.toFixed(3)}}return{IV:dt,setSize:jt,render:Ti,project:Y,heading:Mt,cam:nt,portrait:Q,mapShot:Ft,buildHi:et,setHero:Et,heroDims:Pe,pourTea:Ct,talkNpc:Vt,ringBell:Pt,renderer:n,scene:a,camera:c,U:u,fx:K,npcs:mt,get pr(){return St},get hiLeft(){return dt.pending()}}}function zf(i,t={}){let e=performance.now(),n=Pf(t.map||Rf),s=performance.now()-e,r=If(n),o=Df({renderer:t.renderer,sign:t.sign},n,r),a=r.S,l=o.cam,c=Math.round(performance.now()-e);function u(y,R={}){o.setHero(y);let m=r.enter(y.id,R);return l.yaw=a.hero.face,l.pitch=.26,l.init=!1,o.IV.warm(a.hero.x,a.hero.z,a.hero.y+3),m}function f(y,R={}){a.scope?(l.scopeYaw=Me(l.scopeYaw+(R.dyaw||0)*.35,-.9,.9),l.scopePitch=Me(l.scopePitch+(R.dpitch||0)*-.3,-.75,.2)):(l.yaw+=R.dyaw||0,l.pitch=Me(l.pitch+(R.dpitch||0),-.3,1.15));let m=R.jx||0,v=R.jy||0,P=Math.cos(l.yaw),F=Math.sin(l.yaw),I={mx:P*v-F*m,mz:F*v+P*m,mag:R.mag||0,jump:!!R.jump,sneak:!!R.sneak},O=r.step(y,I);for(let D of O)Array.isArray(D)&&D[0]==="respawn"&&(l.yaw=a.hero.face,l.init=!1,o.IV.warm(a.hero.x,a.hero.z,a.hero.y+3));return O}function g(y){return y==="scope"?(r.interact("scope"),l.scopeYaw=0,l.scopePitch=-.2,a.scope):y==="tea"?(r.interact("tea"),o.pourTea(),!0):y==="chat"?(o.talkNpc("tea"),!0):y==="bell"?(o.ringBell(),!0):r.interact(y)}return{G:n,sim:r,view:o,S:a,cam:l,enter:u,step:f,interact:g,threats:()=>r.beasts.filter(y=>y.state==="chase"||y.state==="charge"||y.state==="notice").map(y=>({kind:y.kind,x:y.x,y:y.y,z:y.z,state:y.state})),render:o.render,setSize:o.setSize,project:o.project,heading:o.heading,nearInteract:r.nearInteract,skipWait:r.skipWait,objective:r.objective,trackTarget:r.trackTarget,setTrack:r.setTrack,have:r.have,snapshot:r.snapshot,restore:y=>{let R=r.restore(y);if(R){let m=r.S.hero;o.IV.warm(m.x,m.z,m.y+3),o.cam.init=!1,o.cam.yaw=m.face}return R},respawn:r.respawn,setTools:r.setTools,mapShot:o.mapShot,portrait:o.portrait,ground:n.H,warm:(y,R,m)=>o.IV.warm(y,R,m),info:{HALF:n.HALF,M:n.M,V:n.V,I:n.I,SEA:n.SEA,rest:n.restPoints,buildMs:c,geoMs:Math.round(s)},renderer:o.renderer,scene:o.scene,camera:o.camera,U:o.U,get pr(){return o.pr}}}return Vf(j1);})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
