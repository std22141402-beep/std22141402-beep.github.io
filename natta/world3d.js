/* نطّة — العالم المفتوح 3D. يتضمن three.js r187 (MIT, © 2010-2026 three.js authors) */
var NattaWorld3D=(()=>{var Yl=Object.defineProperty;var df=Object.getOwnPropertyDescriptor;var ff=Object.getOwnPropertyNames;var pf=Object.prototype.hasOwnProperty;var mf=(i,t)=>{for(var e in t)Yl(i,e,{get:t[e],enumerable:!0})},gf=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of ff(t))!pf.call(i,s)&&s!==e&&Yl(i,s,{get:()=>t[s],enumerable:!(n=df(t,s))||n.enumerable});return i};var xf=i=>gf(Yl({},"__esModule",{value:!0}),i);var x_={};mf(x_,{createWorld:()=>uf,makeRenderer:()=>Kd,supported:()=>Qd});var qa="188dev";var Su=0,Fc=1,bu=2;var _s=1,wu=2,tr=3,ns=0,vn=1,He=2,ys=0,er=1,ui=2,Lc=3,Dc=4,Au=5;var vs=100,Eu=101,Tu=102,Cu=103,Ru=104,Pu=200,Iu=201,Fu=202,Lu=203,Nc=204,Uc=205,Du=206,Nu=207,Uu=208,zu=209,Ou=210,Bu=211,ku=212,Vu=213,Gu=214,aa=0,la=1,ca=2,Hs=3,ha=4,ua=5,da=6,fa=7,lo=0,Hu=1,Wu=2,Ai=0,zc=1,Oc=2,Bc=3,co=4,kc=5,Vc=6,Gc=7;var Hc=300,Ms=301,nr=302,Ya=303,Za=304,Ws=1e3,_i=1001,pa=1002,yn=1003,Xu=1004;var ho=1005;var Pn=1006,Ja=1007;var ki=1008;var zn=1009,Wc=1010,Xc=1011,ir=1012,$a=1013,di=1014,ii=1015,fi=1016,Ka=1017,Qa=1018,Ss=1020,qc=35902,Yc=35899,Zc=1021,Jc=1022,pi=1023,Ni=1026,Vi=1027,ja=1028,tl=1029,is=1030,el=1031;var nl=1033,uo=33776,fo=33777,po=33778,mo=33779,il=35840,sl=35841,rl=35842,ol=35843,al=36196,ll=37492,cl=37496,hl=37488,ul=37489,go=37490,dl=37491,fl=37808,pl=37809,ml=37810,gl=37811,xl=37812,_l=37813,yl=37814,vl=37815,Ml=37816,Sl=37817,bl=37818,wl=37819,Al=37820,El=37821,Tl=36492,Cl=36494,Rl=36495,Pl=36283,Il=36284,xo=36285,Fl=36286;var Cr=2300,ma=2301,ra=2302,Mc=2303,Sc=2400,bc=2401,wc=2402;var qu=3200;var _o=0,Yu=1,Gi="",Rn="srgb",Rr="srgb-linear",Pr="linear",Je="srgb";var oa=7680;var Zu=519,Ju=512,$u=513,Ku=514,$c=515,Qu=516,ju=517,Kc=518,Qc=519,jc=35044;var th="300 es",$n=2e3,Xs=2001;function _f(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}var yf={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};typeof Float16Array<"u"&&(yf.Float16Array=Float16Array);function vf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function td(){let i=Ir("canvas");return i.style.display="block",i}var Uh={},qs=null;function Fr(...i){let t="THREE."+i.shift();qs?qs("log",t,...i):console.log(t,...i)}function ed(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Me(...i){i=ed(i);let t="THREE."+i.shift();if(qs)qs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function we(...i){i=ed(i);let t="THREE."+i.shift();if(qs)qs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ar(...i){let t=i.join(" ");t in Uh||(Uh[t]=!0,Me(...i))}function nd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var id={[aa]:aa,[ca]:da,[ha]:ha,[Hs]:ua,[la]:la,[da]:ca,[fa]:fa,[ua]:Hs},vi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zl=Math.PI/180,ga=180/Math.PI;function ss(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[e&63|128]+bn[e>>8&255]+"-"+bn[e>>16&255]+bn[e>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function Mf(i,t){return(i%t+t)%t}function Jl(i,t,e){return(1-e)*i+e*t}function sd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ll(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function rd(i,t){if(t.constructor===Float32Array)return i;let e=Ll(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function od(i,t){if(t.constructor===Float32Array)return i;let e=Ll(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var oh=class oh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Be(this.x,t.x,e.x),this.y=Be(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Be(this.x,t,e),this.y=Be(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};oh.prototype.isVector2=!0;var ct=oh,Kn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],w=r[o+3];if(u!==w||l!==f||c!==d||h!==m){let p=l*f+c*d+h*m+u*w;p<0&&(f=-f,d=-d,m=-m,w=-w,p=-p);let g=1-a;if(p<.9995){let b=Math.acos(p),E=Math.sin(b);g=Math.sin(g*b)/E,a=Math.sin(a*b)/E,l=l*g+f*a,c=c*g+d*a,h=h*g+m*a,u=u*g+w*a}else{l=l*g+f*a,c=c*g+d*a,h=h*g+m*a,u=u*g+w*a;let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-a*d,t[e+2]=c*m+h*d+a*f-l*u,t[e+3]=h*m-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ah=class ah{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Be(this.x,t.x,e.x),this.y=Be(this.y,t.y,e.y),this.z=Be(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Be(this.x,t,e),this.y=Be(this.y,t,e),this.z=Be(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $l.copy(this).projectOnVector(t),this.sub($l)}reflect(t){return this.sub($l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ah.prototype.isVector3=!0;var G=ah,$l=new G,zh=new Kn,lh=class lh{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],w=s[0],p=s[3],g=s[6],b=s[1],E=s[4],A=s[7],F=s[2],R=s[5],y=s[8];return r[0]=o*w+a*b+l*F,r[3]=o*p+a*E+l*R,r[6]=o*g+a*A+l*y,r[1]=c*w+h*b+u*F,r[4]=c*p+h*E+u*R,r[7]=c*g+h*A+u*y,r[2]=f*w+d*b+m*F,r[5]=f*p+d*E+m*R,r[8]=f*g+d*A+m*y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/m;return t[0]=u*w,t[1]=(s*c-h*n)*w,t[2]=(a*n-s*o)*w,t[3]=f*w,t[4]=(h*e-s*l)*w,t[5]=(s*r-a*e)*w,t[6]=d*w,t[7]=(n*l-c*e)*w,t[8]=(o*e-n*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ar("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kl.makeScale(t,e)),this}rotate(t){return Ar("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kl.makeRotation(-t)),this}translate(t,e){return Ar("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};lh.prototype.isMatrix3=!0;var Ce=lh,Kl=new Ce,Oh=new Ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bh=new Ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sf(){let i={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Je&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Je&&(s.r=Gs(s.r),s.g=Gs(s.g),s.b=Gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gi?Pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Rr]:{primaries:t,whitePoint:n,transfer:Pr,toXYZ:Oh,fromXYZ:Bh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:t,whitePoint:n,transfer:Je,toXYZ:Oh,fromXYZ:Bh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),i}var We=Sf();function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ws,xa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ws===void 0&&(ws=Ir("canvas")),ws.width=t.width,ws.height=t.height;let s=ws.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ws}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ir("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Di(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Di(e[n]/255)*255):e[n]=Di(e[n]);return{data:e,width:t.width,height:t.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},bf=0,Ys=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=ss(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ql(s[o].image)):r.push(Ql(s[o]))}else r=Ql(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ql(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}var wf=0,jl=new G,In=class i extends vi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=_i,s=_i,r=Pn,o=ki,a=pi,l=zn,c=i.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=ss(),this.name="",this.source=new Ys(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(jl).x}get height(){return this.source.getSize(jl).y}get depth(){return this.source.getSize(jl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Me(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Me(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ws:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ws:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Hc;In.DEFAULT_ANISOTROPY=1;var ch=class ch{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){let e=Be(t.w,-1,1);this.w=2*Math.acos(e);let n=Math.sqrt(1-e*e);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],w=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-w)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+w)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,A=(d+1)/2,F=(g+1)/2,R=(h+f)/4,y=(u+w)/4,x=(m+p)/4;return E>A&&E>F?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=R/n,r=y/n):A>F?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=R/s,r=x/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=y/r,s=x/r),this.set(n,s,r,e),this}let b=Math.sqrt((p-m)*(p-m)+(u-w)*(u-w)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(u-w)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Be(this.x,t.x,e.x),this.y=Be(this.y,t.y,e.y),this.z=Be(this.z,t.z,e.z),this.w=Be(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Be(this.x,t,e),this.y=Be(this.y,t,e),this.z=Be(this.z,t,e),this.w=Be(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ch.prototype.isVector4=!0;var en=ch,_a=class extends vi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new en(0,0,t,e),this.scissorTest=!1,this.viewport=new en(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new In({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++){let o=this.textures[s],a=o.images?o.images[0]:o.image;a.width=t,a.height=e,a.depth=n,o.isData3DTexture!==!0&&(o.isArrayTexture=a.depth>1)}this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ys(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gn=class extends _a{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Lr=class extends In{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ya=class extends In{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Xa=class Xa{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,m,w,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,w,p)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,w,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=m,g[11]=w,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/As.setFromMatrixColumn(t,0).length(),r=1/As.setFromMatrixColumn(t,1).length(),o=1/As.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,m=a*h,w=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-w*c,e[9]=-a*l,e[2]=w-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,m=c*h,w=c*u;e[0]=f+w*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=w+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,m=c*h,w=c*u;e[0]=f-w*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=w-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,m=a*h,w=a*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+w,e[1]=l*u,e[5]=w*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,m=a*l,w=a*c;e[0]=l*h,e[4]=w-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-w*u}else if(t.order==="XZY"){let f=o*l,d=o*c,m=a*l,w=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+w,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=w*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Af,t,Ef)}lookAt(t,e,n){let s=this.elements;return kn.subVectors(t,e),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),qi.crossVectors(n,kn),qi.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),qi.crossVectors(n,kn)),qi.normalize(),Co.crossVectors(kn,qi),s[0]=qi.x,s[4]=Co.x,s[8]=kn.x,s[1]=qi.y,s[5]=Co.y,s[9]=kn.y,s[2]=qi.z,s[6]=Co.z,s[10]=kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],w=n[6],p=n[10],g=n[14],b=n[3],E=n[7],A=n[11],F=n[15],R=s[0],y=s[4],x=s[8],P=s[12],T=s[1],V=s[5],Z=s[9],O=s[13],$=s[2],U=s[6],k=s[10],B=s[14],st=s[3],it=s[7],yt=s[11],It=s[15];return r[0]=o*R+a*T+l*$+c*st,r[4]=o*y+a*V+l*U+c*it,r[8]=o*x+a*Z+l*k+c*yt,r[12]=o*P+a*O+l*B+c*It,r[1]=h*R+u*T+f*$+d*st,r[5]=h*y+u*V+f*U+d*it,r[9]=h*x+u*Z+f*k+d*yt,r[13]=h*P+u*O+f*B+d*It,r[2]=m*R+w*T+p*$+g*st,r[6]=m*y+w*V+p*U+g*it,r[10]=m*x+w*Z+p*k+g*yt,r[14]=m*P+w*O+p*B+g*It,r[3]=b*R+E*T+A*$+F*st,r[7]=b*y+E*V+A*U+F*it,r[11]=b*x+E*Z+A*k+F*yt,r[15]=b*P+E*O+A*B+F*It,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],w=t[7],p=t[11],g=t[15],b=l*d-c*f,E=a*d-c*u,A=a*f-l*u,F=o*d-c*h,R=o*f-l*h,y=o*u-a*h;return e*(w*b-p*E+g*A)-n*(m*b-p*F+g*R)+s*(m*E-w*F+g*y)-r*(m*A-w*R+p*y)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],w=t[13],p=t[14],g=t[15],b=e*a-n*o,E=e*l-s*o,A=e*c-r*o,F=n*l-s*a,R=n*c-r*a,y=s*c-r*l,x=h*w-u*m,P=h*p-f*m,T=h*g-d*m,V=u*p-f*w,Z=u*g-d*w,O=f*g-d*p,$=b*O-E*Z+A*V+F*T-R*P+y*x;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/$;return t[0]=(a*O-l*Z+c*V)*U,t[1]=(s*Z-n*O-r*V)*U,t[2]=(w*y-p*R+g*F)*U,t[3]=(f*R-u*y-d*F)*U,t[4]=(l*T-o*O-c*P)*U,t[5]=(e*O-s*T+r*P)*U,t[6]=(p*A-m*y-g*E)*U,t[7]=(h*y-f*A+d*E)*U,t[8]=(o*Z-a*T+c*x)*U,t[9]=(n*T-e*Z-r*x)*U,t[10]=(m*R-w*A+g*b)*U,t[11]=(u*A-h*R-d*b)*U,t[12]=(a*P-o*V-l*x)*U,t[13]=(e*V-n*P+s*x)*U,t[14]=(w*E-m*F-p*b)*U,t[15]=(h*F-u*E+f*b)*U,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,w=o*h,p=o*u,g=a*u,b=l*c,E=l*h,A=l*u,F=n.x,R=n.y,y=n.z;return s[0]=(1-(w+g))*F,s[1]=(d+A)*F,s[2]=(m-E)*F,s[3]=0,s[4]=(d-A)*R,s[5]=(1-(f+g))*R,s[6]=(p+b)*R,s[7]=0,s[8]=(m+E)*y,s[9]=(p-b)*y,s[10]=(1-(f+w))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=As.set(s[0],s[1],s[2]).length(),a=As.set(s[4],s[5],s[6]).length(),l=As.set(s[8],s[9],s[10]).length();r<0&&(o=-o),si.copy(this);let c=1/o,h=1/a,u=1/l;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=u,si.elements[9]*=u,si.elements[10]*=u,e.setFromRotationMatrix(si),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=$n,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),m,w;if(l)m=r/(o-r),w=o*r/(o-r);else if(a===$n)m=-(o+r)/(o-r),w=-2*o*r/(o-r);else if(a===Xs)m=-o/(o-r),w=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=w,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=$n,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),m,w;if(l)m=1/(o-r),w=o/(o-r);else if(a===$n)m=-2/(o-r),w=-(o+r)/(o-r);else if(a===Xs)m=-1/(o-r),w=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=w,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Xa.prototype.isMatrix4=!0;var qe=Xa,As=new G,si=new qe,Af=new G(0,0,0),Ef=new G(1,1,1),qi=new G,Co=new G,kn=new G,kh=new qe,Vh=new Kn,Qn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qn.DEFAULT_ORDER="XYZ";var Dr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tf=0,Gh=new G,Es=new Kn,Ci=new qe,Ro=new G,pr=new G,Cf=new G,Rf=new Kn,Hh=new G(1,0,0),Wh=new G(0,1,0),Xh=new G(0,0,1),qh={type:"added"},Pf={type:"removed"},Ts={type:"childadded",child:null},tc={type:"childremoved",child:null},on=class i extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new Qn,n=new Kn,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ce}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(Hh,t)}rotateY(t){return this.rotateOnAxis(Wh,t)}rotateZ(t){return this.rotateOnAxis(Xh,t)}translateOnAxis(t,e){return Gh.copy(t).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hh,t)}translateY(t){return this.translateOnAxis(Wh,t)}translateZ(t){return this.translateOnAxis(Xh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ro.copy(t):Ro.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(pr,Ro,this.up):Ci.lookAt(Ro,pr,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(Ci),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(we("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qh),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pf),tc.child=t,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qh),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,t,Cf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,Rf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1)===!0&&(n=!0),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}return n}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};on.DEFAULT_UP=new G(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ee=class extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}},If={type:"move"},Zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let w of t.hand.values()){let p=e.getJointPose(w,n),g=this._getHandJoint(c,w);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(If)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},ls={h:0,s:0,l:0};function ec(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ge=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,We.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=We.workingColorSpace){return this.r=t,this.g=e,this.b=n,We.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=We.workingColorSpace){if(t=Mf(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ec(o,r,t+1/3),this.g=ec(o,r,t),this.b=ec(o,r,t-1/3)}return We.colorSpaceToWorking(this,s),this}setStyle(t,e=Rn){function n(r){r!==void 0&&parseFloat(r)<1&&Me("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Me("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Me("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Rn){let n=ad[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Me("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}copyLinearToSRGB(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Rn){return We.workingToColorSpace(wn.copy(this),t),Math.round(Be(wn.r*255,0,255))*65536+Math.round(Be(wn.g*255,0,255))*256+Math.round(Be(wn.b*255,0,255))}getHexString(t=Rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=We.workingColorSpace){We.workingToColorSpace(wn.copy(this),e);let n=wn.r,s=wn.g,r=wn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=We.workingColorSpace){return We.workingToColorSpace(wn.copy(this),e),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=Rn){We.workingToColorSpace(wn.copy(this),t);let e=wn.r,n=wn.g,s=wn.b;return t!==Rn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(ls),ri.s===0&&(ri.h=ls.h),ls.s===0&&(ls.h=ri.h);let n=Jl(ri.h,ls.h,e),s=Jl(ri.s,ls.s,e),r=Jl(ri.l,ls.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new ge;ge.NAMES=ad;var Nr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ge(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ur=class extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},oi=new G,Ri=new G,nc=new G,Pi=new G,Cs=new G,Rs=new G,Yh=new G,ic=new G,sc=new G,rc=new G,oc=new en,ac=new en,lc=new en,Li=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),oi.subVectors(t,e),s.cross(oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){oi.subVectors(s,e),Ri.subVectors(n,e),nc.subVectors(t,e);let o=oi.dot(oi),a=oi.dot(Ri),l=oi.dot(nc),c=Ri.dot(Ri),h=Ri.dot(nc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return oc.setScalar(0),ac.setScalar(0),lc.setScalar(0),oc.fromBufferAttribute(t,e),ac.fromBufferAttribute(t,n),lc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(oc,r.x),o.addScaledVector(ac,r.y),o.addScaledVector(lc,r.z),o}static isFrontFacing(t,e,n,s){return oi.subVectors(n,e),Ri.subVectors(t,e),oi.cross(Ri).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return oi.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),oi.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Cs.subVectors(s,n),Rs.subVectors(r,n),ic.subVectors(t,n);let l=Cs.dot(ic),c=Rs.dot(ic);if(l<=0&&c<=0)return e.copy(n);sc.subVectors(t,s);let h=Cs.dot(sc),u=Rs.dot(sc);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Cs,o);rc.subVectors(t,r);let d=Cs.dot(rc),m=Rs.dot(rc);if(m>=0&&d<=m)return e.copy(r);let w=d*c-l*m;if(w<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Rs,a);let p=h*m-d*u;if(p<=0&&u-h>=0&&d-m>=0)return Yh.subVectors(r,s),a=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(Yh,a);let g=1/(p+w+f);return o=w*g,a=f*g,e.copy(n).addScaledVector(Cs,o).addScaledVector(Rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Mi=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ai):ai.fromBufferAttribute(r,o),ai.applyMatrix4(t.matrixWorld),this.expandByPoint(ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Po.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Po.copy(n.boundingBox)),Po.applyMatrix4(t.matrixWorld),this.union(Po)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mr),Io.subVectors(this.max,mr),Ps.subVectors(t.a,mr),Is.subVectors(t.b,mr),Fs.subVectors(t.c,mr),Yi.subVectors(Is,Ps),Zi.subVectors(Fs,Is),cs.subVectors(Ps,Fs);let e=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-cs.z,cs.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,cs.z,0,-cs.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-cs.y,cs.x,0];return!cc(e,Ps,Is,Fs,Io)||(e=[1,0,0,0,1,0,0,0,1],!cc(e,Ps,Is,Fs,Io))?!1:(Fo.crossVectors(Yi,Zi),e=[Fo.x,Fo.y,Fo.z],cc(e,Ps,Is,Fs,Io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ii=[new G,new G,new G,new G,new G,new G,new G,new G],ai=new G,Po=new Mi,Ps=new G,Is=new G,Fs=new G,Yi=new G,Zi=new G,cs=new G,mr=new G,Io=new G,Fo=new G,hs=new G;function cc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){hs.fromArray(i,r);let a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),l=t.dot(hs),c=e.dot(hs),h=n.dot(hs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var dn=new G,Lo=new ct,Ff=0,De=class extends vi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ff++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jc,this.updateRanges=[],this.gpuType=ii,this.version=0,this._normalizationScale=t!==void 0?Ll(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lo.fromBufferAttribute(this,e),Lo.applyMatrix3(t),this.setXY(e,Lo.x,Lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix3(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):rd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):od(t,this.array)}};var zr=class extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Or=class extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Te=class extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}},Lf=new Mi,gr=new G,hc=new G,Si=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Lf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gr.subVectors(t,this.center);let e=gr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(gr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gr.copy(t.center).add(hc)),this.expandByPoint(gr.copy(t.center).sub(hc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Df=0,Jn=new qe,uc=new on,Ls=new G,Vn=new Mi,xr=new Mi,gi=new G,Do=new G,No=new G,ke=class i extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_f(t)?Or:zr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ce().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Jn.makeRotationFromQuaternion(t),this.applyMatrix4(Jn),this}rotateX(t){return Jn.makeRotationX(t),this.applyMatrix4(Jn),this}rotateY(t){return Jn.makeRotationY(t),this.applyMatrix4(Jn),this}rotateZ(t){return Jn.makeRotationZ(t),this.applyMatrix4(Jn),this}translate(t,e,n){return Jn.makeTranslation(t,e,n),this.applyMatrix4(Jn),this}scale(t,e,n){return Jn.makeScale(t,e,n),this.applyMatrix4(Jn),this}lookAt(t){return uc.lookAt(t),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Te(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Do.addVectors(this.boundingBox.min,Vn.min),No.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(Do),this.boundingBox.expandByPoint(No)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];xr.setFromBufferAttribute(a),this.morphTargetsRelative?(Do.addVectors(Vn.min,xr.min),No.addVectors(Vn.max,xr.max),Vn.expandByPoint(Do),Vn.expandByPoint(No)):(Vn.expandByPoint(xr.min),Vn.expandByPoint(xr.max))}Vn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)gi.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(gi));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)gi.fromBufferAttribute(a,c),l&&(Ls.fromBufferAttribute(t,c),gi.add(Ls)),s=Math.max(s,n.distanceToSquared(gi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new De(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new G,l[P]=new G;let h=new G,u=new G,f=new G,d=new ct,m=new ct,w=new ct,p=new G,g=new G;function b(P,T,V){c[P]=c[T]=c[V]=1,h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,V),d.fromBufferAttribute(r,P),m.fromBufferAttribute(r,T),w.fromBufferAttribute(r,V),u.sub(h),f.sub(h),m.sub(d),w.sub(d);let Z=1/(m.x*w.y-w.x*m.y);isFinite(Z)&&(p.copy(u).multiplyScalar(w.y).addScaledVector(f,-m.y).multiplyScalar(Z),g.copy(f).multiplyScalar(m.x).addScaledVector(u,-w.x).multiplyScalar(Z),a[P].add(p),a[T].add(p),a[V].add(p),l[P].add(g),l[T].add(g),l[V].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,T=E.length;P<T;++P){let V=E[P],Z=V.start,O=V.count;for(let $=Z,U=Math.min(t.count,Z+O);$<U;$+=3)b(t.getX($+0),t.getX($+1),t.getX($+2))}let A=new G,F=new G,R=new G,y=new G;function x(P){R.fromBufferAttribute(s,P),y.copy(R);let T=a[P];A.copy(T),A.sub(R.multiplyScalar(R.dot(T))).normalize(),A.lengthSq()===0&&(Math.abs(y.x)<.9?A.set(1,0,0):A.set(0,1,0),A.crossVectors(y,A).normalize()),F.crossVectors(y,T);let Z=F.dot(l[P])<0?-1:1;o.setXYZW(P,A.x,A.y,A.z,Z)}for(let P=0,T=n.count;P<T;++P)c[P]&&x(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,h=new G,u=new G;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),w=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,w),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,w),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(w,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)gi.fromBufferAttribute(t,e),gi.normalize(),t.setXYZ(e,gi.x,gi.y,gi.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let w=0,p=l.length;w<p;w++){a.isInterleavedBufferAttribute?d=l[w]*a.data.stride+a.offset:d=l[w]*h;for(let g=0;g<h;g++)f[m++]=c[d++]}return new De(f,h,u)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},va=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=jc,this.updateRanges=[],this.version=0,this.uuid=ss()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Zh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Zh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Zh(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ss()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Cn=new G,Br=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?Ll(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.applyMatrix4(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.applyNormalMatrix(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Cn.fromBufferAttribute(this,e),Cn.transformDirection(t),this.setXYZ(e,Cn.x,Cn.y,Cn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Fr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Fr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):rd(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):od(t,this.data.array)}},dc=new G,Nf=new G,Uf=new Ce,li=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=dc.subVectors(n,e).cross(Nf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(dc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Uf.getNormalMatrix(t),s=this.coplanarPoint(dc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},zf=0,jn=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=er,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Uc,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oa,this.stencilZFail=oa,this.stencilZPass=oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Me(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Me(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ge().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new li().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ct().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ci=class extends jn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ds,_r=new G,Ns=new G,Us=new G,zs=new ct,yr=new ct,ld=new qe,Uo=new G,vr=new G,zo=new G,Jh=new ct,fc=new ct,$h=new ct,bi=class extends on{constructor(t=new ci){if(super(),this.isSprite=!0,this.type="Sprite",Ds===void 0){Ds=new ke;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new va(e,5);Ds.setIndex([0,1,2,0,2,3]),Ds.setAttribute("position",new Br(n,3,0,!1)),Ds.setAttribute("uv",new Br(n,2,3,!1))}this.geometry=Ds,this.material=t,this.center=new ct(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&we('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ns.setFromMatrixScale(this.matrixWorld),ld.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Us.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ns.multiplyScalar(-Us.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Oo(Uo.set(-.5,-.5,0),Us,o,Ns,s,r),Oo(vr.set(.5,-.5,0),Us,o,Ns,s,r),Oo(zo.set(.5,.5,0),Us,o,Ns,s,r),Jh.set(0,0),fc.set(1,0),$h.set(1,1);let a=t.ray.intersectTriangle(Uo,vr,zo,!1,_r);if(a===null&&(Oo(vr.set(-.5,.5,0),Us,o,Ns,s,r),fc.set(0,1),a=t.ray.intersectTriangle(Uo,zo,vr,!1,_r),a===null))return;let l=t.ray.origin.distanceTo(_r);l<t.near||l>t.far||e.push({distance:l,point:_r.clone(),uv:Li.getInterpolation(_r,Uo,vr,zo,Jh,fc,$h,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this.count=t.count,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Oo(i,t,e,n,s,r){zs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(yr.x=r*zs.x-s*zs.y,yr.y=s*zs.x+r*zs.y):yr.copy(zs),i.copy(t),i.x+=yr.x,i.y+=yr.y,i.applyMatrix4(ld)}var Fi=new G,pc=new G,Bo=new G,ko=new G,Js=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fi.copy(this.origin).addScaledVector(this.direction,e),Fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){pc.copy(t).add(e).multiplyScalar(.5),Bo.copy(e).sub(t).normalize(),ko.copy(this.origin).sub(pc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Bo),a=ko.dot(this.direction),l=-ko.dot(Bo),c=ko.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let w=1/h;u*=w,f*=w,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(pc).addScaledVector(Bo,f),d}intersectSphere(t,e){if(t.radius<0)return null;Fi.subVectors(t.center,this.origin);let n=Fi.dot(this.direction),s=Fi.dot(Fi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Fi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,m=e.x-o.x,w=e.y-o.y,p=e.z-o.z,g=n.x-o.x,b=n.y-o.y,E=n.z-o.z,A=Math.abs(l),F=Math.abs(c),R=Math.abs(h),y,x,P,T,V,Z,O,$,U,k,B,st;if(A>=F&&A>=R?(P=l,Z=u,U=m,st=g,l>=0?(y=c,x=h,T=f,V=d,O=w,$=p,k=b,B=E):(y=h,x=c,T=d,V=f,O=p,$=w,k=E,B=b)):F>=R?(P=c,Z=f,U=w,st=b,c>=0?(y=h,x=l,T=d,V=u,O=p,$=m,k=E,B=g):(y=l,x=h,T=u,V=d,O=m,$=p,k=g,B=E)):(P=h,Z=d,U=p,st=E,h>=0?(y=l,x=c,T=u,V=f,O=m,$=w,k=g,B=b):(y=c,x=l,T=f,V=u,O=w,$=m,k=b,B=g)),P===0)return null;let it=y/P,yt=x/P,It=1/P,Vt=T-it*Z,M=V-yt*Z,v=O-it*U,et=$-yt*U,J=k-it*st,Tt=B-yt*st,Ct=J*et-Tt*v,Ft=Vt*Tt-M*J,oe=v*M-et*Vt;if(s){if(Ct<0||Ft<0||oe<0)return null}else if((Ct<0||Ft<0||oe<0)&&(Ct>0||Ft>0||oe>0))return null;let jt=Ct+Ft+oe;if(jt===0)return null;let te=It*(Ct*Z+Ft*U+oe*st);return(jt>0?te<0:te>0)?null:this.at(te/jt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ln=class extends jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Kh=new qe,us=new Js,Vo=new Si,Qh=new G,Go=new G,Ho=new G,Wo=new G,mc=new G,Xo=new G,jh=new G,qo=new G,Pt=class extends on{constructor(t=new ke,e=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this.count=t.count,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Xo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(mc.fromBufferAttribute(u,t),o?Xo.addScaledVector(mc,h):Xo.addScaledVector(mc.sub(e),h))}e.add(Xo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(r),us.copy(t.ray).recast(t.near),!(Vo.containsPoint(us.origin)===!1&&(us.intersectSphere(Vo,Qh)===null||us.origin.distanceToSquared(Qh)>(t.far-t.near)**2))&&(Kh.copy(r).invert(),us.copy(t.ray).applyMatrix4(Kh),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,us)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,w=f.length;m<w;m++){let p=f[m],g=o[p.materialIndex],b=Math.max(p.start,d.start),E=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let A=b,F=E;A<F;A+=3){let R=a.getX(A),y=a.getX(A+1),x=a.getX(A+2);s=Yo(this,g,t,n,c,h,u,R,y,x),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),w=Math.min(a.count,d.start+d.count);for(let p=m,g=w;p<g;p+=3){let b=a.getX(p),E=a.getX(p+1),A=a.getX(p+2);s=Yo(this,o,t,n,c,h,u,b,E,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,w=f.length;m<w;m++){let p=f[m],g=o[p.materialIndex],b=Math.max(p.start,d.start),E=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let A=b,F=E;A<F;A+=3){let R=A,y=A+1,x=A+2;s=Yo(this,g,t,n,c,h,u,R,y,x),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),w=Math.min(l.count,d.start+d.count);for(let p=m,g=w;p<g;p+=3){let b=p,E=p+1,A=p+2;s=Yo(this,o,t,n,c,h,u,b,E,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Of(i,t,e,n,s,r,o,a){let l;if(t.side===vn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ns,a),l===null)return null;qo.copy(a),qo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(qo);return c<e.near||c>e.far?null:{distance:c,point:qo.clone(),object:i}}function Yo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Go),i.getVertexPosition(l,Ho),i.getVertexPosition(c,Wo);let h=Of(i,t,e,n,Go,Ho,Wo,jh);if(h){let u=new G;Li.getBarycoord(jh,Go,Ho,Wo,u),s&&(h.uv=Li.getInterpolatedAttribute(s,a,l,c,u,new ct)),r&&(h.uv1=Li.getInterpolatedAttribute(r,a,l,c,u,new ct)),o&&(h.normal=Li.getInterpolatedAttribute(o,a,l,c,u,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new G,materialIndex:0};Li.getNormal(Go,Ho,Wo,f.normal),h.face=f,h.barycoord=u}return h}var kr=class extends In{constructor(t=null,e=1,n=1,s,r,o,a,l,c=yn,h=yn,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vr=class extends De{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Os=new qe,tu=new qe,Zo=[],eu=new Mi,Bf=new qe,Mr=new Pt,Sr=new Si,$i=class extends Pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Bf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Os),eu.copy(t.boundingBox).applyMatrix4(Os),this.boundingBox.union(eu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Os),Sr.copy(t.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(Sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Mr.geometry=this.geometry,Mr.material=this.material,Mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sr.copy(this.boundingSphere),Sr.applyMatrix4(n),t.ray.intersectsSphere(Sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Os),tu.multiplyMatrices(n,Os),Mr.matrixWorld=tu,Mr.raycast(t,Zo);for(let o=0,a=Zo.length;o<a;o++){let l=Zo[o];l.instanceId=r,l.object=this,e.push(l)}Zo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new kr(new Float32Array(s*this.count),s,this.count,ja,ii));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ds=new Si,kf=new ct(.5,.5),Jo=new G,Ki=class{constructor(t=new li,e=new li,n=new li,s=new li,r=new li,o=new li){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],w=r[9],p=r[10],g=r[11],b=r[12],E=r[13],A=r[14],F=r[15];if(s[0].setComponents(c-o,d-h,g-m,F-b).normalize(),s[1].setComponents(c+o,d+h,g+m,F+b).normalize(),s[2].setComponents(c+a,d+u,g+w,F+E).normalize(),s[3].setComponents(c-a,d-u,g-w,F-E).normalize(),n)s[4].setComponents(l,f,p,A).normalize(),s[5].setComponents(c-l,d-f,g-p,F-A).normalize();else if(s[4].setComponents(c-l,d-f,g-p,F-A).normalize(),e===$n)s[5].setComponents(c+l,d+f,g+p,F+A).normalize();else if(e===Xs)s[5].setComponents(l,f,p,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(t){ds.center.set(0,0,0);let e=kf.distanceTo(t.center);return ds.radius=.7071067811865476+e,ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Jo.x=s.normal.x>0?t.max.x:t.min.x,Jo.y=s.normal.y>0?t.max.y:t.min.y,Jo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Jo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},nu=new qe,Ma=class i{constructor(){this.coordinateSystem=$n,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];nu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ki),n[s].setFromProjectionMatrix(nu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ki),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Qi=class extends jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Sa=new G,ba=new G,iu=new qe,br=new Js,$o=new Si,gc=new G,su=new G,wa=class extends on{constructor(t=new ke,e=new Qi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Sa.fromBufferAttribute(e,s-1),ba.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Sa.distanceTo(ba);t.setAttribute("lineDistance",new Te(n,1))}else Me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(s),$o.radius+=r,t.ray.intersectsSphere($o)===!1)return;iu.copy(s).invert(),br.copy(t.ray).applyMatrix4(iu);let a=r/s.getMaxScaleOnAxis(),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let w=d,p=m-1;w<p;w+=c){let g=h.getX(w),b=h.getX(w+1),E=Ko(this,t,br,l,g,b,w);E&&e.push(E)}if(this.isLineLoop){let w=h.getX(m-1),p=h.getX(d),g=Ko(this,t,br,l,w,p,m-1);g&&e.push(g)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let w=d,p=m-1;w<p;w+=c){let g=Ko(this,t,br,l,w,w+1,w);g&&e.push(g)}if(this.isLineLoop){let w=Ko(this,t,br,l,m-1,d,m-1);w&&e.push(w)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ko(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Sa.fromBufferAttribute(a,s),ba.fromBufferAttribute(a,r),e.distanceSqToSegment(Sa,ba,gc,su)>n)return;gc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(gc);if(!(c<t.near||c>t.far))return{distance:c,point:su.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var ru=new G,ou=new G,fs=class extends wa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ru.fromBufferAttribute(e,s),ou.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ru.distanceTo(ou);t.setAttribute("lineDistance",new Te(n,1))}else Me("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ps=class extends jn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},au=new qe,Ac=new Js,Qo=new Si,jo=new G,$s=class extends on{constructor(t=new ke,e=new ps){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(s),Qo.radius+=r,t.ray.intersectsSphere(Qo)===!1)return;au.copy(s).invert(),Ac.copy(t.ray).applyMatrix4(au);let a=r/s.getMaxScaleOnAxis(),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,w=d;m<w;m++){let p=c.getX(m);jo.fromBufferAttribute(u,p),lu(jo,p,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,w=d;m<w;m++)jo.fromBufferAttribute(u,m),lu(jo,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lu(i,t,e,n,s,r,o){let a=Ac.distanceSqToPoint(i);if(a<e){let l=new G;Ac.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Gr=class extends In{constructor(t=[],e=Ms,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Hr=class extends In{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ui=class extends In{constructor(t,e,n=di,s,r,o,a=yn,l=yn,c,h=Ni,u=1){if(h!==Ni&&h!==Vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ys(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Wr=class extends Ui{constructor(t,e=di,n=Ms,s,r,o=yn,a=yn,l,c=Ni){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Xr=class extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ne=class i extends ke{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2));function m(w,p,g,b,E,A,F,R,y,x,P){let T=A/y,V=F/x,Z=A/2,O=F/2,$=R/2,U=y+1,k=x+1,B=0,st=0,it=new G;for(let yt=0;yt<k;yt++){let It=yt*V-O;for(let Vt=0;Vt<U;Vt++){let M=Vt*T-Z;it[w]=M*b,it[p]=It*E,it[g]=$,c.push(it.x,it.y,it.z),it[w]=0,it[p]=0,it[g]=R>0?1:-1,h.push(it.x,it.y,it.z),u.push(Vt/y),u.push(1-yt/x),B+=1}}for(let yt=0;yt<x;yt++)for(let It=0;It<y;It++){let Vt=f+It+U*yt,M=f+It+U*(yt+1),v=f+(It+1)+U*(yt+1),et=f+(It+1)+U*yt;l.push(Vt,M,et),l.push(M,v,et),st+=6}a.addGroup(d,st,P),d+=st,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},wi=class i extends ke{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,m=n*2+r,w=s+1,p=new G,g=new G;for(let b=0;b<=m;b++){let E=0,A=0,F=0,R=0;if(b<=n){let P=b/n,T=P*Math.PI/2;A=-h-t*Math.cos(T),F=t*Math.sin(T),R=-t*Math.cos(T),E=P*u}else if(b<=n+r){let P=(b-n)/r;A=-h+P*e,F=t,R=0,E=u+P*f}else{let P=(b-n-r)/n,T=P*Math.PI/2;A=h+t*Math.sin(T),F=t*Math.cos(T),R=t*Math.sin(T),E=u+f+P*u}let y=Math.max(0,Math.min(1,E/d)),x=0;b===0?x=.5/s:b===m&&(x=-.5/s);for(let P=0;P<=s;P++){let T=P/s,V=T*Math.PI*2,Z=Math.sin(V),O=Math.cos(V);g.x=-F*O,g.y=A,g.z=F*Z,a.push(g.x,g.y,g.z),p.set(-F*O,R,F*Z),p.normalize(),l.push(p.x,p.y,p.z),c.push(T+x,y)}if(b>0){let P=(b-1)*w;for(let T=0;T<s;T++){let V=P+T,Z=P+T+1,O=b*w+T,$=b*w+T+1;o.push(V,Z,O),o.push(Z,$,O)}}}this.setIndex(o),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ti=class i extends ke{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new G,h=new ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(a,3)),this.setAttribute("uv",new Te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},pe=class i extends ke{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,w=[],p=n/2,g=0;b(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(d,2));function b(){let A=new G,F=new G,R=0,y=(e-t)/n;for(let x=0;x<=r;x++){let P=[],T=x/r,V=T*(e-t)+t;for(let Z=0;Z<=s;Z++){let O=Z/s,$=O*l+a,U=Math.sin($),k=Math.cos($);F.x=V*U,F.y=-T*n+p,F.z=V*k,u.push(F.x,F.y,F.z),A.set(U,y,k).normalize(),f.push(A.x,A.y,A.z),d.push(O,1-T),P.push(m++)}w.push(P)}for(let x=0;x<s;x++)for(let P=0;P<r;P++){let T=w[P][x],V=w[P+1][x],Z=w[P+1][x+1],O=w[P][x+1];(t>0||P!==0)&&(h.push(T,V,O),R+=3),(e>0||P!==r-1)&&(h.push(V,Z,O),R+=3)}c.addGroup(g,R,0),g+=R}function E(A){let F=m,R=new ct,y=new G,x=0,P=A===!0?t:e,T=A===!0?1:-1;for(let Z=1;Z<=s;Z++)u.push(0,p*T,0),f.push(0,T,0),d.push(.5,.5),m++;let V=m;for(let Z=0;Z<=s;Z++){let $=Z/s*l+a,U=Math.cos($),k=Math.sin($);y.x=P*k,y.y=p*T,y.z=P*U,u.push(y.x,y.y,y.z),f.push(0,T,0),R.x=U*.5+.5,R.y=k*.5*T+.5,d.push(R.x,R.y),m++}for(let Z=0;Z<s;Z++){let O=F+Z,$=V+Z;A===!0?h.push($,$+1,O):h.push($+1,$,O),x+=3}c.addGroup(g,x,A===!0?1:2),g+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fn=class i extends pe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qr=class i extends ke{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Te(r,3)),this.setAttribute("normal",new Te(r.slice(),3)),this.setAttribute("uv",new Te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let E=new G,A=new G,F=new G;for(let R=0;R<e.length;R+=3)d(e[R+0],E),d(e[R+1],A),d(e[R+2],F),l(E,A,F,b)}function l(b,E,A,F){let R=F+1,y=[];for(let x=0;x<=R;x++){y[x]=[];let P=b.clone().lerp(A,x/R),T=E.clone().lerp(A,x/R),V=R-x;for(let Z=0;Z<=V;Z++)Z===0&&x===R?y[x][Z]=P:y[x][Z]=P.clone().lerp(T,Z/V)}for(let x=0;x<R;x++)for(let P=0;P<2*(R-x)-1;P++){let T=Math.floor(P/2);P%2===0?(f(y[x][T+1]),f(y[x+1][T]),f(y[x][T])):(f(y[x][T+1]),f(y[x+1][T+1]),f(y[x+1][T]))}}function c(b){let E=new G;for(let A=0;A<r.length;A+=3)E.x=r[A+0],E.y=r[A+1],E.z=r[A+2],E.normalize().multiplyScalar(b),r[A+0]=E.x,r[A+1]=E.y,r[A+2]=E.z}function h(){let b=new G;for(let E=0;E<r.length;E+=3){b.x=r[E+0],b.y=r[E+1],b.z=r[E+2];let A=p(b)/2/Math.PI+.5,F=g(b)/Math.PI+.5;o.push(A,1-F)}m(),u()}function u(){for(let b=0;b<o.length;b+=6){let E=o[b+0],A=o[b+2],F=o[b+4],R=Math.max(E,A,F),y=Math.min(E,A,F);R>.9&&y<.1&&(E<.2&&(o[b+0]+=1),A<.2&&(o[b+2]+=1),F<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function d(b,E){let A=b*3;E.x=t[A+0],E.y=t[A+1],E.z=t[A+2]}function m(){let b=new G,E=new G,A=new G,F=new G,R=new ct,y=new ct,x=new ct;for(let P=0,T=0;P<r.length;P+=9,T+=6){b.set(r[P+0],r[P+1],r[P+2]),E.set(r[P+3],r[P+4],r[P+5]),A.set(r[P+6],r[P+7],r[P+8]),R.set(o[T+0],o[T+1]),y.set(o[T+2],o[T+3]),x.set(o[T+4],o[T+5]),F.copy(b).add(E).add(A).divideScalar(3);let V=p(F);w(R,T+0,b,V),w(y,T+2,E,V),w(x,T+4,A,V)}}function w(b,E,A,F){F<0&&b.x===1&&(o[E]=b.x-1),A.x===0&&A.z===0&&(o[E]=F/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function g(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},hi=class i extends qr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Me("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ct:new G);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new G,s=[],r=[],o=[],a=new G,l=new qe;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new G)}r[0]=new G,o[0]=new G;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Be(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Be(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Ks=class extends Hn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Aa=class extends Ks{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function eh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var cu=new G,hu=new G,xc=new eh,_c=new eh,yc=new eh,Wn=class extends Hn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new G){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(hu.subVectors(s[0],s[1]).add(s[0]),c=hu);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(cu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=cu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),w=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);w<1e-4&&(w=1),m<1e-4&&(m=w),p<1e-4&&(p=w),xc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,w,p),_c.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,w,p),yc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,w,p)}else this.curveType==="catmullrom"&&(xc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),_c.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),yc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(xc.calc(l),_c.calc(l),yc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new G().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function uu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Vf(i,t){let e=1-i;return e*e*t}function Gf(i,t){return 2*(1-i)*i*t}function Hf(i,t){return i*i*t}function Er(i,t,e,n){return Vf(i,t)+Gf(i,e)+Hf(i,n)}function Wf(i,t){let e=1-i;return e*e*e*t}function Xf(i,t){let e=1-i;return 3*e*e*i*t}function qf(i,t){return 3*(1-i)*i*i*t}function Yf(i,t){return i*i*i*t}function Tr(i,t,e,n,s){return Wf(i,t)+Xf(i,e)+qf(i,n)+Yf(i,s)}var Yr=class extends Hn{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Tr(t,s.x,r.x,o.x,a.x),Tr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ea=class extends Hn{constructor(t=new G,e=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Tr(t,s.x,r.x,o.x,a.x),Tr(t,s.y,r.y,o.y,a.y),Tr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Zr=class extends Hn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ta=class extends Hn{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jr=class extends Hn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Er(t,s.x,r.x,o.x),Er(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ms=class extends Hn{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Er(t,s.x,r.x,o.x),Er(t,s.y,r.y,o.y),Er(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$r=class extends Hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(uu(a,l.x,c.x,h.x,u.x),uu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},Ca=Object.freeze({__proto__:null,ArcCurve:Aa,CatmullRomCurve3:Wn,CubicBezierCurve:Yr,CubicBezierCurve3:Ea,EllipseCurve:Ks,LineCurve:Zr,LineCurve3:Ta,QuadraticBezierCurve:Jr,QuadraticBezierCurve3:ms,SplineCurve:$r}),Ra=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ca[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ca[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Kr=class extends Ra{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Zr(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Jr(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Yr(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new $r(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Ks(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ei=class extends Kr{constructor(t){super(t),this.uuid=ss(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Kr().fromJSON(s))}return this}};function Zf(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=cd(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=jf(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<s;f+=e){let d=i[f],m=i[f+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Qr(r,o,e,a,l,c,0),o}function cd(i,t,e,n,s){let r;if(s===hp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=du(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=du(o/n|0,i[o],i[o+1],r);return r&&Qs(r,r.next)&&(to(r),r=r.next),r}function gs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Qs(e,e.next)||an(e.prev,e,e.next)===0)){if(to(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Qr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&sp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?$f(i,n,s,r):Jf(i)){t.push(l.i,i.i,c.i),to(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Kf(gs(i),t),Qr(i,t,e,n,s,r,2)):o===2&&Qf(i,t,e,n,s,r):Qr(gs(i),t,e,n,s,r,1);break}}}function Jf(i){let t=i.prev,e=i,n=i.next;if(an(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&wr(s,a,r,l,o,c,m.x,m.y)&&an(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function $f(i,t,e,n){let s=i.prev,r=i,o=i.next;if(an(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),m=Math.min(h,u,f),w=Math.max(a,l,c),p=Math.max(h,u,f),g=Ec(d,m,t,e,n),b=Ec(w,p,t,e,n),E=i.prevZ,A=i.nextZ;for(;E&&E.z>=g&&A&&A.z<=b;){if(E.x>=d&&E.x<=w&&E.y>=m&&E.y<=p&&E!==s&&E!==o&&wr(a,h,l,u,c,f,E.x,E.y)&&an(E.prev,E,E.next)>=0||(E=E.prevZ,A.x>=d&&A.x<=w&&A.y>=m&&A.y<=p&&A!==s&&A!==o&&wr(a,h,l,u,c,f,A.x,A.y)&&an(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;E&&E.z>=g;){if(E.x>=d&&E.x<=w&&E.y>=m&&E.y<=p&&E!==s&&E!==o&&wr(a,h,l,u,c,f,E.x,E.y)&&an(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;A&&A.z<=b;){if(A.x>=d&&A.x<=w&&A.y>=m&&A.y<=p&&A!==s&&A!==o&&wr(a,h,l,u,c,f,A.x,A.y)&&an(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function Kf(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Qs(n,s)&&ud(n,e,e.next,s)&&jr(n,s)&&jr(s,n)&&(t.push(n.i,e.i,s.i),to(e),to(e.next),e=i=s),e=e.next}while(e!==i);return gs(e)}function Qf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ap(o,a)){let l=dd(o,a);o=gs(o,o.next),l=gs(l,l.next),Qr(o,t,e,n,s,r,0),Qr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function jf(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=cd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(op(c))}s.sort(tp);for(let r=0;r<s.length;r++)e=ep(s[r],e);return e}function tp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function ep(i,t){let e=np(i,t);if(!e)return t;let n=dd(e,i);return gs(n,n.next),gs(e,e.next)}function np(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Qs(i,e))return e;do{if(Qs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&hd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);jr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&ip(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function ip(i,t){return an(i.prev,i,t.prev)<0&&an(t.next,i,i.next)<0}function sp(i,t,e,n){let s=i;do s.z===0&&(s.z=Ec(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,rp(s)}function rp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ec(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function op(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function hd(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function wr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&hd(i,t,e,n,s,r,o,a)}function ap(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!lp(i,t)&&(jr(i,t)&&jr(t,i)&&cp(i,t)&&(an(i.prev,i,t.prev)||an(i,t.prev,t))||Qs(i,t)&&an(i.prev,i,i.next)>0&&an(t.prev,t,t.next)>0)}function an(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Qs(i,t){return i.x===t.x&&i.y===t.y}function ud(i,t,e,n){let s=ea(an(i,t,e)),r=ea(an(i,t,n)),o=ea(an(e,n,i)),a=ea(an(e,n,t));return!!(s!==r&&o!==a||s===0&&ta(i,e,t)||r===0&&ta(i,n,t)||o===0&&ta(e,i,n)||a===0&&ta(e,t,n))}function ta(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ea(i){return i>0?1:i<0?-1:0}function lp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ud(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function jr(i,t){return an(i.prev,i,i.next)<0?an(i,t,i.next)>=0&&an(i,i.prev,t)>=0:an(i,t,i.prev)<0||an(i,i.next,t)<0}function cp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function dd(i,t){let e=Tc(i.i,i.x,i.y),n=Tc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function du(i,t,e,n){let s=Tc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function to(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Tc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Cc=class{static triangulate(t,e,n=2){return Zf(t,e,n)}},yi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];fu(t),pu(n,t);let o=t.length;e.forEach(fu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,pu(n,e[l]);let a=Cc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function fu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function pu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var eo=class i extends ke{constructor(t=new ei([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Te(s,3)),this.setAttribute("uv",new Te(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,w=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:up,E,A=!1,F,R,y,x;if(g){E=g.getSpacedPoints(h),A=!0,f=!1;let xt=g.isCatmullRomCurve3?g.closed:!1;F=g.computeFrenetFrames(h,xt),R=new G,y=new G,x=new G}f||(p=0,d=0,m=0,w=0);let P=a.extractPoints(c),T=P.shape,V=P.holes;if(!yi.isClockWise(T)){T=T.reverse();for(let xt=0,wt=V.length;xt<wt;xt++){let St=V[xt];yi.isClockWise(St)&&(V[xt]=St.reverse())}}function O(xt){let St=10000000000000001e-36,mt=xt[0];for(let at=1;at<=xt.length;at++){let Xt=at%xt.length,Kt=xt[Xt],ue=Kt.x-mt.x,$t=Kt.y-mt.y,de=ue*ue+$t*$t,q=Math.max(Math.abs(Kt.x),Math.abs(Kt.y),Math.abs(mt.x),Math.abs(mt.y)),Le=St*q*q;if(de<=Le){xt.splice(Xt,1),at--;continue}mt=Kt}}O(T),V.forEach(O);let $=V.length,U=T;for(let xt=0;xt<$;xt++){let wt=V[xt];T=T.concat(wt)}function k(xt,wt,St){return wt||we("ExtrudeGeometry: vec does not exist"),xt.clone().addScaledVector(wt,St)}let B=T.length;function st(xt,wt,St){let mt,at,Xt,Kt=xt.x-wt.x,ue=xt.y-wt.y,$t=St.x-xt.x,de=St.y-xt.y,q=Kt*Kt+ue*ue,Le=Kt*de-ue*$t;if(Math.abs(Le)>Number.EPSILON){let j=Math.sqrt(q),ht=Math.sqrt($t*$t+de*de),K=wt.x-ue/j,Dt=wt.y+Kt/j,Rt=St.x-de/ht,Ut=St.y+$t/ht,L=((Rt-K)*de-(Ut-Dt)*$t)/(Kt*de-ue*$t);mt=K+Kt*L-xt.x,at=Dt+ue*L-xt.y;let S=mt*mt+at*at;if(S<=2)return new ct(mt,at);Xt=Math.sqrt(S/2)}else{let j=!1;Kt>Number.EPSILON?$t>Number.EPSILON&&(j=!0):Kt<-Number.EPSILON?$t<-Number.EPSILON&&(j=!0):Math.sign(ue)===Math.sign(de)&&(j=!0),j?(mt=-ue,at=Kt,Xt=Math.sqrt(q)):(mt=Kt,at=ue,Xt=Math.sqrt(q/2))}return new ct(mt/Xt,at/Xt)}let it=[];for(let xt=0,wt=U.length,St=wt-1,mt=xt+1;xt<wt;xt++,St++,mt++)St===wt&&(St=0),mt===wt&&(mt=0),it[xt]=st(U[xt],U[St],U[mt]);let yt=[],It,Vt=it.concat();for(let xt=0,wt=$;xt<wt;xt++){let St=V[xt];It=[];for(let mt=0,at=St.length,Xt=at-1,Kt=mt+1;mt<at;mt++,Xt++,Kt++)Xt===at&&(Xt=0),Kt===at&&(Kt=0),It[mt]=st(St[mt],St[Xt],St[Kt]);yt.push(It),Vt=Vt.concat(It)}let M;if(p===0)M=yi.triangulateShape(U,V);else{let xt=[],wt=[];for(let St=0;St<p;St++){let mt=St/p,at=d*Math.cos(mt*Math.PI/2),Xt=m*Math.sin(mt*Math.PI/2)+w;for(let Kt=0,ue=U.length;Kt<ue;Kt++){let $t=k(U[Kt],it[Kt],Xt);Ft($t.x,$t.y,-at),mt===0&&xt.push($t)}for(let Kt=0,ue=$;Kt<ue;Kt++){let $t=V[Kt];It=yt[Kt];let de=[];for(let q=0,Le=$t.length;q<Le;q++){let j=k($t[q],It[q],Xt);Ft(j.x,j.y,-at),mt===0&&de.push(j)}mt===0&&wt.push(de)}}M=yi.triangulateShape(xt,wt)}let v=M.length,et=m+w;for(let xt=0;xt<B;xt++){let wt=f?k(T[xt],Vt[xt],et):T[xt];A?(y.copy(F.normals[0]).multiplyScalar(wt.x),R.copy(F.binormals[0]).multiplyScalar(wt.y),x.copy(E[0]).add(y).add(R),Ft(x.x,x.y,x.z)):Ft(wt.x,wt.y,0)}for(let xt=1;xt<=h;xt++)for(let wt=0;wt<B;wt++){let St=f?k(T[wt],Vt[wt],et):T[wt];A?(y.copy(F.normals[xt]).multiplyScalar(St.x),R.copy(F.binormals[xt]).multiplyScalar(St.y),x.copy(E[xt]).add(y).add(R),Ft(x.x,x.y,x.z)):Ft(St.x,St.y,u/h*xt)}for(let xt=p-1;xt>=0;xt--){let wt=xt/p,St=d*Math.cos(wt*Math.PI/2),mt=m*Math.sin(wt*Math.PI/2)+w;for(let at=0,Xt=U.length;at<Xt;at++){let Kt=k(U[at],it[at],mt);Ft(Kt.x,Kt.y,u+St)}for(let at=0,Xt=V.length;at<Xt;at++){let Kt=V[at];It=yt[at];for(let ue=0,$t=Kt.length;ue<$t;ue++){let de=k(Kt[ue],It[ue],mt);A?Ft(de.x,de.y+E[h-1].y,E[h-1].x+St):Ft(de.x,de.y,u+St)}}}J(),Tt();function J(){let xt=s.length/3;if(f){let wt=0,St=B*wt;for(let mt=0;mt<v;mt++){let at=M[mt];oe(at[2]+St,at[1]+St,at[0]+St)}wt=h+p*2,St=B*wt;for(let mt=0;mt<v;mt++){let at=M[mt];oe(at[0]+St,at[1]+St,at[2]+St)}}else{for(let wt=0;wt<v;wt++){let St=M[wt];oe(St[2],St[1],St[0])}for(let wt=0;wt<v;wt++){let St=M[wt];oe(St[0]+B*h,St[1]+B*h,St[2]+B*h)}}n.addGroup(xt,s.length/3-xt,0)}function Tt(){let xt=s.length/3,wt=0;Ct(U,wt),wt+=U.length;for(let St=0,mt=V.length;St<mt;St++){let at=V[St];Ct(at,wt),wt+=at.length}n.addGroup(xt,s.length/3-xt,1)}function Ct(xt,wt){let St=xt.length;for(;--St>=0;){let mt=St,at=St-1;at<0&&(at=xt.length-1);for(let Xt=0,Kt=h+p*2;Xt<Kt;Xt++){let ue=B*Xt,$t=B*(Xt+1),de=wt+mt+ue,q=wt+at+ue,Le=wt+at+$t,j=wt+mt+$t;jt(de,q,Le,j)}}}function Ft(xt,wt,St){l.push(xt),l.push(wt),l.push(St)}function oe(xt,wt,St){te(xt),te(wt),te(St);let mt=s.length/3,at=b.generateTopUV(n,s,mt-3,mt-2,mt-1);ae(at[0]),ae(at[1]),ae(at[2])}function jt(xt,wt,St,mt){te(xt),te(wt),te(mt),te(wt),te(St),te(mt);let at=s.length/3,Xt=b.generateSideWallUV(n,s,at-6,at-3,at-2,at-1);ae(Xt[0]),ae(Xt[1]),ae(Xt[3]),ae(Xt[1]),ae(Xt[2]),ae(Xt[3])}function te(xt){s.push(l[xt*3+0]),s.push(l[xt*3+1]),s.push(l[xt*3+2])}function ae(xt){r.push(xt.x),r.push(xt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return dp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ca[s.type]().fromJSON(s)),new i(n,t.options)}},up={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ct(r,o),new ct(a,l),new ct(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],m=t[s*3+2],w=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ct(o,1-l),new ct(c,1-u),new ct(f,1-m),new ct(w,1-g)]:[new ct(a,1-l),new ct(h,1-u),new ct(d,1-m),new ct(p,1-g)]}};function dp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Mn=class i extends qr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Ln=class i extends ke{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Be(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new G,f=new ct,d=new G,m=new G,w=new G,p=0,g=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:p=t[b+1].x-t[b].x,g=t[b+1].y-t[b].y,d.x=g*1,d.y=-p,d.z=g*0,w.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:w.normalize(),l.push(w.x,w.y,w.z);break;default:p=t[b+1].x-t[b].x,g=t[b+1].y-t[b].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=w.x,d.y+=w.y,d.z+=w.z,d.normalize(),l.push(d.x,d.y,d.z),w.copy(m)}for(let b=0;b<=e;b++){let E=n+b*h*s,A=Math.sin(E),F=Math.cos(E);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*A,u.y=t[R].y,u.z=t[R].x*F,o.push(u.x,u.y,u.z),f.x=b/e,f.y=R/(t.length-1),a.push(f.x,f.y);let y=l[3*R+0]*A,x=l[3*R+1],P=l[3*R+0]*F;c.push(y,x,P)}}for(let b=0;b<e;b++)for(let E=0;E<t.length-1;E++){let A=E+b*t.length,F=A,R=A+t.length,y=A+t.length+1,x=A+1;r.push(F,R,x),r.push(y,x,R)}this.setIndex(r),this.setAttribute("position",new Te(o,3)),this.setAttribute("uv",new Te(a,2)),this.setAttribute("normal",new Te(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Nn=class i extends ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],m=[],w=[],p=[];for(let g=0;g<h;g++){let b=g*f-o;for(let E=0;E<c;E++){let A=E*u-r;m.push(A,-b,0),w.push(0,0,1),p.push(E/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let b=0;b<a;b++){let E=b+c*g,A=b+c*(g+1),F=b+1+c*(g+1),R=b+1+c*g;d.push(E,A,R),d.push(A,F,R)}this.setIndex(d),this.setAttribute("position",new Te(m,3)),this.setAttribute("normal",new Te(w,3)),this.setAttribute("uv",new Te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},no=class i extends ke{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/s,d=new G,m=new ct;for(let w=0;w<=s;w++){for(let p=0;p<=n;p++){let g=r+p/n*o;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let w=0;w<s;w++){let p=w*(n+1);for(let g=0;g<n;g++){let b=g+p,E=b,A=b+n+1,F=b+n+2,R=b+1;a.push(E,A,R),a.push(A,F,R)}}this.setIndex(a),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},zi=class i extends ke{constructor(t=new ei([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Te(s,3)),this.setAttribute("normal",new Te(r,3)),this.setAttribute("uv",new Te(o,2));function c(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,m=f.holes;yi.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,g=m.length;p<g;p++){let b=m[p];yi.isClockWise(b)===!0&&(m[p]=b.reverse())}let w=yi.triangulateShape(d,m);for(let p=0,g=m.length;p<g;p++){let b=m[p];d=d.concat(b)}for(let p=0,g=d.length;p<g;p++){let b=d[p];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let p=0,g=w.length;p<g;p++){let b=w[p],E=b[0]+u,A=b[1]+u,F=b[2]+u;n.push(E,A,F),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return fp(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function fp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ie=class i extends ke{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new G,f=new G,d=[],m=[],w=[],p=[];for(let g=0;g<=n;g++){let b=[],E=g/n,A=o+E*a,F=t*Math.cos(A),R=Math.sqrt(t*t-F*F),y=0;g===0&&o===0?y=.5/e:g===n&&l===Math.PI&&(y=-.5/e);for(let x=0;x<=e;x++){let P=x/e,T=s+P*r;u.x=-R*Math.cos(T),u.y=F,u.z=R*Math.sin(T),m.push(u.x,u.y,u.z),f.copy(u).normalize(),w.push(f.x,f.y,f.z),p.push(P+y,1-E),b.push(c++)}h.push(b)}for(let g=0;g<n;g++)for(let b=0;b<e;b++){let E=h[g][b+1],A=h[g][b],F=h[g+1][b],R=h[g+1][b+1];(g!==0||o>0)&&d.push(E,A,R),(g!==n-1||l<Math.PI)&&d.push(A,F,R)}this.setIndex(d),this.setAttribute("position",new Te(m,3)),this.setAttribute("normal",new Te(w,3)),this.setAttribute("uv",new Te(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Oi=class i extends ke{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new G,d=new G,m=new G;for(let w=0;w<=n;w++){let p=o+w/n*a;for(let g=0;g<=s;g++){let b=g/s*r;d.x=(t+e*Math.cos(p))*Math.cos(b),d.y=(t+e*Math.cos(p))*Math.sin(b),d.z=e*Math.sin(p),c.push(d.x,d.y,d.z),f.x=t*Math.cos(b),f.y=t*Math.sin(b),m.subVectors(d,f).normalize(),h.push(m.x,m.y,m.z),u.push(g/s),u.push(w/n)}}for(let w=1;w<=n;w++)for(let p=1;p<=s;p++){let g=(s+1)*w+p-1,b=(s+1)*(w-1)+p-1,E=(s+1)*(w-1)+p,A=(s+1)*w+p;l.push(g,b,A),l.push(b,E,A)}this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Bi=class i extends ke{constructor(t=new ms(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new G,l=new G,c=new ct,h=new G,u=[],f=[],d=[],m=[];w(),this.setIndex(m),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(d,2));function w(){for(let E=0;E<e;E++)p(E);p(r===!1?e:0),b(),g()}function p(E){h=t.getPointAt(E/e,h);let A=o.normals[E],F=o.binormals[E];for(let R=0;R<=s;R++){let y=R/s*Math.PI*2,x=Math.sin(y),P=-Math.cos(y);l.x=P*A.x+x*F.x,l.y=P*A.y+x*F.y,l.z=P*A.z+x*F.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let E=1;E<=e;E++)for(let A=1;A<=s;A++){let F=(s+1)*(E-1)+(A-1),R=(s+1)*E+(A-1),y=(s+1)*E+A,x=(s+1)*(E-1)+A;m.push(F,R,x),m.push(R,y,x)}}function b(){for(let E=0;E<=e;E++)for(let A=0;A<=s;A++)c.x=E/e,c.y=A/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Ca[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function bs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(mu(s))s.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(mu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function En(i){let t={};for(let e=0;e<i.length;e++){let n=bs(i[e]);for(let s in n)t[s]=n[s]}return t}function mu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function pp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:We.workingColorSpace}var fd={clone:bs,merge:En},mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ni=class extends jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=pp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.linewidth=t.linewidth,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ge().setHex(s.value);break;case"v2":this.uniforms[n].value=new ct().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new en().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ce().fromArray(s.value);break;case"m4":this.uniforms[n].value=new qe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Pa=class extends ni{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Un=class extends jn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ge(16777215),this.specular=new ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_o,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=lo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ze=class extends jn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_o,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=lo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ia=class extends jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fa=class extends jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Bs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function na(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ji=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},La=class extends ji{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sc,endingEnd:Sc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case bc:r=t,a=2*e-n;break;case wc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bc:o=t,l=2*n-e;break;case wc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),w=m*m,p=w*m,g=-f*p+2*f*w-f*m,b=(1+f)*p+(-1.5-2*f)*w+(-.5+f)*m+1,E=(-1-d)*p+(1.5+d)*w+.5*m,A=d*p-d*w;for(let F=0;F!==a;++F)r[F]=g*o[h+F]+b*o[c+F]+E*o[l+F]+A*o[u+F];return r}},Da=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Na=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ua=class extends ji{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-e)/(s-e),w=1-m;for(let p=0;p!==a;++p)r[p]=o[c+p]*w+o[l+p]*m;return r}let f=a*2,d=t-1;for(let m=0;m!==a;++m){let w=o[c+m],p=o[l+m],g=d*f+m*2,b=u[g],E=u[g+1],A=t*f+m*2,F=h[A],R=h[A+1],y=_p(n,e,b,F,s);r[m]=pd(y,w,E,R,p)}return r}};function pd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function xp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function _p(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=pd(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=xp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Xn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Bs(e,this.TimeBufferType),this.values=Bs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Bs(t.times,Array),values:Bs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),na(t.settings)&&(n.settings={inTangents:Bs(t.settings.inTangents,Array),outTangents:Bs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new La(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ua(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Cr:e=this.InterpolantFactoryMethodDiscrete;break;case ma:e=this.InterpolantFactoryMethodLinear;break;case ra:e=this.InterpolantFactoryMethodSmooth;break;case Mc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Me("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cr;case this.InterpolantFactoryMethodLinear:return ma;case this.InterpolantFactoryMethodSmooth:return ra;case this.InterpolantFactoryMethodBezier:return Mc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;na(this.settings)&&(gu(this.settings.inTangents,t),gu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;na(this.settings)&&(xu(this.settings.inTangents,t),xu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(we("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(we("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){we("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){we("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&vf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){we("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ra,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let w=e[u+m];if(w!==e[f+m]||w!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,na(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function gu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function xu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Xn.prototype.ValueTypeName="";Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=ma;var ts=class extends Xn{constructor(t,e,n){super(t,e,n)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Cr;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends Xn{constructor(t,e,n,s){super(t,e,n,s)}};za.prototype.ValueTypeName="color";var Oa=class extends Xn{constructor(t,e,n,s){super(t,e,n,s)}};Oa.prototype.ValueTypeName="number";var Ba=class extends ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Kn.slerpFlat(r,0,o,c-a,o,c,l);return r}},io=class extends Xn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ba(this.times,this.values,this.getValueSize(),t)}};io.prototype.ValueTypeName="quaternion";io.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Xn{constructor(t,e,n){super(t,e,n)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Cr;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends Xn{constructor(t,e,n,s){super(t,e,n,s)}};ka.prototype.ValueTypeName="vector";var Va=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},md=new Va,Ga=class{constructor(t){this.manager=t!==void 0?t:md,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ga.DEFAULT_MATERIAL_NAME="__DEFAULT";var so=class extends on{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ro=class extends so{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},vc=new qe,_u=new G,yu=new G,Ha=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.filterNode=null,this.shadowNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=zn,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ki,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;_u.setFromMatrixPosition(t.matrixWorld),e.position.copy(_u),yu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){vc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(vc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Xs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(vc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this.filterNode=t.filterNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ia=new G,sa=new Kn,xi=new G,oo=class extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ia,sa,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ia,sa,xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){let s=super.updateWorldMatrix(t,e,n);return this.matrixWorld.decompose(ia,sa,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ia,sa,xi.set(1,1,1)).invert(),s}clone(){return new this.constructor().copy(this)}},Ji=new G,vu=new ct,Mu=new ct,An=class extends oo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ga*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(Zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z)}getViewSize(t,e){return this.getViewBounds(t,vu,Mu),e.subVectors(Mu,vu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var xs=class extends oo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Rc=class extends Ha{constructor(){super(new xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ao=class extends so{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new Rc}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ks=-90,Vs=1,js=class extends on{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new An(ks,Vs,t,e);s.layers=this.layers,this.add(s);let r=new An(ks,Vs,t,e);r.layers=this.layers,this.add(r);let o=new An(ks,Vs,t,e);o.layers=this.layers,this.add(o);let a=new An(ks,Vs,t,e);a.layers=this.layers,this.add(a);let l=new An(ks,Vs,t,e);l.layers=this.layers,this.add(l);let c=new An(ks,Vs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let w=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=w,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Wa=class extends An{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var ih="\\[\\]\\.:\\/",yp=new RegExp("["+ih+"]","g"),sh="[^"+ih+"]",vp="[^"+ih.replace("\\.","")+"]",Mp=/((?:WC+[\/:])*)/.source.replace("WC",sh),Sp=/(WCOD+)?/.source.replace("WCOD",vp),bp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sh),wp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sh),Ap=new RegExp("^"+Mp+Sp+bp+wp+"$"),Ep=["material","materials","bones","map"],Pc=class{constructor(t,e,n){let s=n||sn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},sn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(yp,"")}static parseTrackName(t){let e=Ap.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ep.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Me("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){we("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){we("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){we("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){we("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){we("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){we("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;we("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){we("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};sn.Composite=Pc;sn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};sn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};sn.prototype.GetterByBindingType=[sn.prototype._getValue_direct,sn.prototype._getValue_array,sn.prototype._getValue_arrayElement,sn.prototype._getValue_toArray];sn.prototype.SetterByBindingTypeAndVersioning=[[sn.prototype._setValue_direct,sn.prototype._setValue_direct_setNeedsUpdate,sn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_array,sn.prototype._setValue_array_setNeedsUpdate,sn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_arrayElement,sn.prototype._setValue_arrayElement_setNeedsUpdate,sn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[sn.prototype._setValue_fromArray,sn.prototype._setValue_fromArray_setNeedsUpdate,sn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var y_=new Float32Array(1);var hh=class hh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};hh.prototype.isMatrix2=!0;var Ic=hh;function rh(i,t,e,n){let s=Tp(n);switch(e){case Zc:return i*t;case ja:return i*t/s.components*s.byteLength;case tl:return i*t/s.components*s.byteLength;case is:return i*t*2/s.components*s.byteLength;case el:return i*t*2/s.components*s.byteLength;case Jc:return i*t*3/s.components*s.byteLength;case pi:return i*t*4/s.components*s.byteLength;case nl:return i*t*4/s.components*s.byteLength;case uo:case fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case po:case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sl:case ol:return Math.max(i,16)*Math.max(t,8)/4;case il:case rl:return Math.max(i,8)*Math.max(t,8)/2;case al:case ll:case hl:case ul:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case cl:case go:case dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ml:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case gl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case _l:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case yl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case vl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case bl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case El:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Tl:case Cl:case Rl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Pl:case Il:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xo:case Fl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tp(i){switch(i){case zn:case Wc:return{byteLength:1,components:1};case ir:case Xc:case fi:return{byteLength:2,components:1};case Ka:case Qa:return{byteLength:2,components:4};case di:case $a:case ii:return{byteLength:4,components:1};case qc:case Yc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);function zd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Cp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],w=u[d];w.start<=m.start+m.count+1?m.count=Math.max(m.count,w.start+w.count-m.start):(++f,u[f]=w)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let w=u[d];i.bufferSubData(c,w.start*h.BYTES_PER_ELEMENT,h,w.start,w.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pp=`#ifdef USE_ALPHAHASH
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
#endif`,Ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Np=`#ifdef USE_AOMAP
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
#endif`,Up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zp=`#ifdef USE_BATCHING
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
#endif`,Op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gp=`#ifdef USE_IRIDESCENCE
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
#endif`,Hp=`#ifdef USE_BUMPMAP
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Qp=`#define PI 3.141592653589793
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
} // validated`,jp=`vec3 transformedNormal = objectNormal;
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
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",rm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,om=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mm=`#ifdef USE_GRADIENTMAP
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
}`,gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ym=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bm=`BlinnPhongMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Am=`PhysicalMaterial material;
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
#endif`,Em=`uniform sampler2D dfgLUT;
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
}`,Tm=`
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
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Om=`#if defined( USE_POINTS_UV )
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
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gm=`#if defined( USE_MORPHCOLORS )
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
#endif`,Hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
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
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Km=`#ifdef USE_NORMALMAP
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
#endif`,Qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f0=`float getShadowMask() {
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
}`,p0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m0=`#ifdef USE_SKINNING
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
#endif`,g0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x0=`#ifdef USE_SKINNING
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
#endif`,_0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,b0=`#ifdef USE_TRANSMISSION
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,C0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R0=`uniform sampler2D t2D;
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`uniform float backgroundBlurriness;
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D0=`#include <common>
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
}`,N0=`#if DEPTH_PACKING == 3200
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
}`,U0=`#define DISTANCE
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
}`,z0=`#define DISTANCE
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`uniform float scale;
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
}`,V0=`uniform vec3 diffuse;
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
}`,G0=`#include <common>
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
}`,H0=`uniform vec3 diffuse;
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
}`,W0=`#define LAMBERT
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
}`,X0=`#define LAMBERT
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
}`,q0=`#define MATCAP
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
}`,Y0=`#define MATCAP
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
}`,Z0=`#define NORMAL
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
}`,J0=`#define NORMAL
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
}`,$0=`#define PHONG
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
}`,K0=`#define PHONG
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
}`,Q0=`#define STANDARD
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
}`,j0=`#define STANDARD
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
}`,tg=`#define TOON
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
}`,eg=`#define TOON
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
}`,ng=`uniform float size;
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,rg=`uniform vec3 color;
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
}`,og=`uniform float rotation;
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
}`,ag=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:Rp,alphahash_pars_fragment:Pp,alphamap_fragment:Ip,alphamap_pars_fragment:Fp,alphatest_fragment:Lp,alphatest_pars_fragment:Dp,aomap_fragment:Np,aomap_pars_fragment:Up,batching_pars_vertex:zp,batching_vertex:Op,begin_vertex:Bp,beginnormal_vertex:kp,bsdfs:Vp,iridescence_fragment:Gp,bumpmap_pars_fragment:Hp,clipping_planes_fragment:Wp,clipping_planes_pars_fragment:Xp,clipping_planes_pars_vertex:qp,clipping_planes_vertex:Yp,color_fragment:Zp,color_pars_fragment:Jp,color_pars_vertex:$p,color_vertex:Kp,common:Qp,defaultnormal_vertex:jp,displacementmap_pars_vertex:tm,displacementmap_vertex:em,emissivemap_fragment:nm,emissivemap_pars_fragment:im,colorspace_fragment:sm,colorspace_pars_fragment:rm,envmap_fragment:om,envmap_common_pars_fragment:am,envmap_pars_fragment:lm,envmap_pars_vertex:cm,envmap_physical_pars_fragment:vm,envmap_vertex:hm,fog_vertex:um,fog_pars_vertex:dm,fog_fragment:fm,fog_pars_fragment:pm,gradientmap_pars_fragment:mm,lightmap_pars_fragment:gm,lights_lambert_fragment:xm,lights_lambert_pars_fragment:_m,lights_pars_begin:ym,lights_toon_fragment:Mm,lights_toon_pars_fragment:Sm,lights_phong_fragment:bm,lights_phong_pars_fragment:wm,lights_physical_fragment:Am,lights_physical_pars_fragment:Em,lights_fragment_begin:Tm,lights_fragment_maps:Cm,lights_fragment_end:Rm,lightprobes_pars_fragment:Pm,logdepthbuf_fragment:Im,logdepthbuf_pars_fragment:Fm,logdepthbuf_pars_vertex:Lm,logdepthbuf_vertex:Dm,map_fragment:Nm,map_pars_fragment:Um,map_particle_fragment:zm,map_particle_pars_fragment:Om,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:km,morphinstance_vertex:Vm,morphcolor_vertex:Gm,morphnormal_vertex:Hm,morphtarget_pars_vertex:Wm,morphtarget_vertex:Xm,normal_fragment_begin:qm,normal_fragment_maps:Ym,normal_pars_fragment:Zm,normal_pars_vertex:Jm,normal_vertex:$m,normalmap_pars_fragment:Km,clearcoat_normal_fragment_begin:Qm,clearcoat_normal_fragment_maps:jm,clearcoat_pars_fragment:t0,iridescence_pars_fragment:e0,opaque_fragment:n0,packing:i0,premultiplied_alpha_fragment:s0,project_vertex:r0,dithering_fragment:o0,dithering_pars_fragment:a0,roughnessmap_fragment:l0,roughnessmap_pars_fragment:c0,shadowmap_pars_fragment:h0,shadowmap_pars_vertex:u0,shadowmap_vertex:d0,shadowmask_pars_fragment:f0,skinbase_vertex:p0,skinning_pars_vertex:m0,skinning_vertex:g0,skinnormal_vertex:x0,specularmap_fragment:_0,specularmap_pars_fragment:y0,tonemapping_fragment:v0,tonemapping_pars_fragment:M0,transmission_fragment:S0,transmission_pars_fragment:b0,uv_pars_fragment:w0,uv_pars_vertex:A0,uv_vertex:E0,worldpos_vertex:T0,background_vert:C0,background_frag:R0,backgroundCube_vert:P0,backgroundCube_frag:I0,cube_vert:F0,cube_frag:L0,depth_vert:D0,depth_frag:N0,distance_vert:U0,distance_frag:z0,equirect_vert:O0,equirect_frag:B0,linedashed_vert:k0,linedashed_frag:V0,meshbasic_vert:G0,meshbasic_frag:H0,meshlambert_vert:W0,meshlambert_frag:X0,meshmatcap_vert:q0,meshmatcap_frag:Y0,meshnormal_vert:Z0,meshnormal_frag:J0,meshphong_vert:$0,meshphong_frag:K0,meshphysical_vert:Q0,meshphysical_frag:j0,meshtoon_vert:tg,meshtoon_frag:eg,points_vert:ng,points_frag:ig,shadow_vert:sg,shadow_frag:rg,sprite_vert:og,sprite_frag:ag},se={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]},probesIntensity:{value:[]}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},Ti={basic:{uniforms:En([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:En([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ge(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:En([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:En([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:En([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new ge(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:En([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:En([se.points,se.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:En([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:En([se.common,se.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:En([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:En([se.sprite,se.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:En([se.common,se.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:En([se.lights,se.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Ti.physical={uniforms:En([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var Dl={r:0,b:0,g:0},lg=new qe,Od=new Ce;Od.set(-1,0,0,0,1,0,0,0,1);function cg(i,t,e,n,s,r){let o=new ge(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){let A=b.backgroundBlurriness>0;E=t.get(E,A)}return E}function m(b){let E=!1,A=d(b);A===null?p(o,a):A&&A.isColor&&(p(A,1),E=!0);let F=i.xr.getEnvironmentBlendMode();F==="additive"?e.buffers.color.setClear(0,0,0,1,r):F==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function w(b,E){let A=d(E);A&&A.isCubeTexture?(c===void 0&&(c=new Pt(new Ne(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:bs(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(F,R,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=A,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(lg.makeRotationFromEuler(E.backgroundRotation)).transpose(),A.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Od),c.material.toneMapped=We.getTransfer(A.colorSpace)!==Je,(h!==A||u!==A.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=A,u=A.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Pt(new Nn(2,2),new ni({name:"BackgroundMaterial",uniforms:bs(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=We.getTransfer(A.colorSpace)!==Je,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||u!==A.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=A,u=A.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,E){b.getRGB(Dl,nh(i)),e.buffers.color.setClear(Dl.r,Dl.g,Dl.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,p(o,a)},render:m,addToRenderList:w,dispose:g}}function hg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(V,Z,O,$,U){let k=!1,B=u(V,$,O,Z);r!==B&&(r=B,c(r.object)),k=d(V,$,O,U),k&&m(V,$,O,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,A(V,Z,O,$),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(V){return i.bindVertexArray(V)}function h(V){return i.deleteVertexArray(V)}function u(V,Z,O,$){let U=$.wireframe===!0,k=n[Z.id];k===void 0&&(k={},n[Z.id]=k);let B=V.isInstancedMesh===!0?V.id:0,st=k[B];st===void 0&&(st={},k[B]=st);let it=st[O.id];it===void 0&&(it={},st[O.id]=it);let yt=it[U];return yt===void 0&&(yt=f(l()),it[U]=yt),yt}function f(V){let Z=[],O=[],$=[];for(let U=0;U<e;U++)Z[U]=0,O[U]=0,$[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:O,attributeDivisors:$,object:V,attributes:{},index:null}}function d(V,Z,O,$){let U=r.attributes,k=Z.attributes,B=0,st=O.getAttributes();for(let it in st)if(st[it].location>=0){let It=U[it],Vt=k[it];if(Vt===void 0&&(it==="instanceMatrix"&&V.instanceMatrix&&(Vt=V.instanceMatrix),it==="instanceColor"&&V.instanceColor&&(Vt=V.instanceColor)),It===void 0||It.attribute!==Vt||Vt&&It.data!==Vt.data)return!0;B++}return r.attributesNum!==B||r.index!==$}function m(V,Z,O,$){let U={},k=Z.attributes,B=0,st=O.getAttributes();for(let it in st)if(st[it].location>=0){let It=k[it];It===void 0&&(it==="instanceMatrix"&&V.instanceMatrix&&(It=V.instanceMatrix),it==="instanceColor"&&V.instanceColor&&(It=V.instanceColor));let Vt={};Vt.attribute=It,It&&It.data&&(Vt.data=It.data),U[it]=Vt,B++}r.attributes=U,r.attributesNum=B,r.index=$}function w(){let V=r.newAttributes;for(let Z=0,O=V.length;Z<O;Z++)V[Z]=0}function p(V){g(V,0)}function g(V,Z){let O=r.newAttributes,$=r.enabledAttributes,U=r.attributeDivisors;O[V]=1,$[V]===0&&(i.enableVertexAttribArray(V),$[V]=1),U[V]!==Z&&(i.vertexAttribDivisor(V,Z),U[V]=Z)}function b(){let V=r.newAttributes,Z=r.enabledAttributes;for(let O=0,$=Z.length;O<$;O++)Z[O]!==V[O]&&(i.disableVertexAttribArray(O),Z[O]=0)}function E(V,Z,O,$,U,k,B){B===!0?i.vertexAttribIPointer(V,Z,O,U,k):i.vertexAttribPointer(V,Z,O,$,U,k)}function A(V,Z,O,$){w();let U=$.attributes,k=O.getAttributes(),B=Z.defaultAttributeValues;for(let st in k){let it=k[st];if(it.location>=0){let yt=U[st];if(yt===void 0&&(st==="instanceMatrix"&&V.instanceMatrix&&(yt=V.instanceMatrix),st==="instanceColor"&&V.instanceColor&&(yt=V.instanceColor)),yt!==void 0){let It=yt.normalized,Vt=yt.itemSize,M=t.get(yt);if(M===void 0)continue;let v=M.buffer,et=M.type,J=M.bytesPerElement,Tt=et===i.INT||et===i.UNSIGNED_INT||yt.gpuType===$a;if(yt.isInterleavedBufferAttribute){let Ct=yt.data,Ft=Ct.isInterleavedBuffer===!0?Ct.stride:Ct.itemSize,oe=yt.offset;if(Ct.isInstancedInterleavedBuffer||Ct.isInstancedBufferAttribute){for(let jt=0;jt<it.locationSize;jt++)g(it.location+jt,Ct.meshPerAttribute);V.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let jt=0;jt<it.locationSize;jt++)p(it.location+jt);i.bindBuffer(i.ARRAY_BUFFER,v);for(let jt=0;jt<it.locationSize;jt++)E(it.location+jt,Vt/it.locationSize,et,It,Ft*J,(oe+Vt/it.locationSize*jt)*J,Tt)}else{if(yt.isInstancedBufferAttribute){for(let Ct=0;Ct<it.locationSize;Ct++)g(it.location+Ct,yt.meshPerAttribute);V.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Ct=0;Ct<it.locationSize;Ct++)p(it.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,v);for(let Ct=0;Ct<it.locationSize;Ct++)E(it.location+Ct,Vt/it.locationSize,et,It,Vt*J,Vt/it.locationSize*Ct*J,Tt)}}else if(B!==void 0){let It=B[st];if(It!==void 0)switch(It.length){case 2:i.vertexAttrib2fv(it.location,It);break;case 3:i.vertexAttrib3fv(it.location,It);break;case 4:i.vertexAttrib4fv(it.location,It);break;default:i.vertexAttrib1fv(it.location,It)}}}}b()}function F(){P();for(let V in n){let Z=n[V];for(let O in Z){let $=Z[O];for(let U in $){let k=$[U];for(let B in k)h(k[B].object),delete k[B];delete $[U]}}delete n[V]}}function R(V){if(n[V.id]===void 0)return;let Z=n[V.id];for(let O in Z){let $=Z[O];for(let U in $){let k=$[U];for(let B in k)h(k[B].object),delete k[B];delete $[U]}}delete n[V.id]}function y(V){for(let Z in n){let O=n[Z];for(let $ in O){let U=O[$];if(U[V.id]===void 0)continue;let k=U[V.id];for(let B in k)h(k[B].object),delete k[B];delete U[V.id]}}}function x(V){for(let Z in n){let O=n[Z],$=V.isInstancedMesh===!0?V.id:0,U=O[$];if(U!==void 0){for(let k in U){let B=U[k];for(let st in B)h(B[st].object),delete B[st];delete U[k]}delete O[$],Object.keys(O).length===0&&delete n[Z]}}}function P(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:F,releaseStatesOfGeometry:R,releaseStatesOfObject:x,releaseStatesOfProgram:y,initAttributes:w,enableAttribute:p,disableUnusedAttributes:b}}function ug(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function dg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(y){return!(y!==pi&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let x=y===fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==zn&&y!==ii&&!x&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Me("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Me("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Me("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:w,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:A,maxSamples:F,samples:R}}function fg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new li,a=new Ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,w=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{let b=r?0:n,E=b*4,A=g.clippingState||null;l.value=A,A=h(m,f,E,d);for(let F=0;F!==E;++F)A[F]=e[F];g.clippingState=A,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let w=u!==null?u.length:0,p=null;if(w!==0){if(p=l.value,m!==!0||p===null){let g=d+w*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<g)&&(p=new Float32Array(g));for(let E=0,A=d;E!==w;++E,A+=4)o.copy(u[E]).applyMatrix4(b,a),o.normal.toArray(p,A),p[A+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,p}}var Mo=class extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Gr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ne(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:ys});r.uniforms.tEquirect.value=e;let o=new Pt(s,r),a=e.minFilter;return e.minFilter===ki&&(e.minFilter=Pn),new js(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},gd=256,pg=3,mg=20,Bd=256,kd=16,gg=3,xg=new G,_g=new ge,Ul=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new js(1,10,null),this._boxMesh=new Pt(new Ne(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=xg}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,w=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,w===null&&(t.background=l.getClearColor(_g));let p=new js(n,s,h);return p.position.copy(a),p.update(l,t),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=m,t.background=w,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(gd,sd(t))}_fromTexture(t,e){t.mapping===Ms||t.mapping===nr?this._setSize(t.image.length===0?gd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=xd(t,!1,!1),n=Math.log2(t)-pg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=xd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ms||t.mapping===nr?(this._cubemapMaterial===null&&(this._cubemapMaterial=yd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=_d()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=yg(),this._integrationMaterial=vg());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/kd);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-gg)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(Bd*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Mg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function xd(i,t,e){return new Mo(i,{minFilter:ki,generateMipmaps:t,type:fi,colorSpace:Rr,depthBuffer:e})}function So(i,t,e){return new ni({name:i,uniforms:t,vertexShader:Ue.cube_vert,fragmentShader:e,side:vn,blending:ys,depthTest:!1,depthWrite:!1})}function yg(){return So("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Bd}u

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
	`)}function vg(){return So("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:kd}},`

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
	`)}function Mg(){return So("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${mg}
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
	`)}function _d(){return So("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function yd(){return So("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureLod( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ), 0.0 ).rgb, 1.0 );

		}
	`)}function Sg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Ya||d===Za)if(t.has(f)){let m=t.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let w=new Mo(m.height);return w.fromEquirectangularTexture(i,f),t.set(f,w),f.addEventListener("dispose",c),a(w.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,m=d===Ya||d===Za,w=d===Ms||d===nr;if(m||w){let p=e.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Ul(i)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),p.texture;if(p!==void 0)return p.texture;{let b=f.image;return m&&b&&b.height>0||w&&b&&l(b)?(n===null&&(n=new Ul(i)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,e.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function a(f,d){return d===Ya?f.mapping=Ms:d===Za&&(f.mapping=nr),f}function l(f){let d=0,m=6;for(let w=0;w<m;w++)f[w]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function bg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ar("WebGLRenderer: "+n+" extension not supported."),s}}}function wg(i,t,e,n){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let w=r.get(m);w&&(t.remove(w),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,w){return s[w.id]!==void 0||(w.addEventListener("dispose",a),s[w.id]=new WeakRef(w),o.register(w,w.id,w),e.memory.geometries++),w}function h(m){let w=m.attributes;for(let p in w)t.update(w[p],i.ARRAY_BUFFER)}function u(m){let w=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let b=w!==null?w.count:p.count-1,E=p.count>=65535?Or:zr,A=new E(Math.ceil(b/3)*6,1),F=A.array;if(w!==null){let y=w.array;g=w.version;for(let x=0,P=0;x<b;x+=3){let T=y[x+0],V=y[x+1],Z=y[x+2];F[P++]=T,F[P++]=V,F[P++]=V,F[P++]=Z,F[P++]=Z,F[P++]=T}}else{g=p.version;for(let y=0,x=0;y<b;y+=3){let P=y+0,T=y+1,V=y+2;F[x++]=P,F[x++]=T,F[x++]=T,F[x++]=V,F[x++]=V,F[x++]=P}}A.version=g;let R=r.get(m);R&&t.remove(R),r.set(m,A)}function f(m){let w=r.get(m);if(w){let p=m.index;p!==null&&w.version<p.version&&u(m)}else u(m);return r.get(m)}function d(){for(let m in s){let w=s[m].deref();w!==void 0&&l(w)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function Ag(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let w=0;for(let p=0;p<d;p++)w+=f[p];e.update(w,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Eg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:we("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Tg(i,t,e){let n=new WeakMap,s=new en;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let P=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",P)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,w=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],E=0;d===!0&&(E=1),m===!0&&(E=2),w===!0&&(E=3);let A=a.attributes.position.count*E,F=1;A>t.maxTextureSize&&(F=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);let R=new Float32Array(A*F*4*u),y=new Lr(R,A,F,u);y.type=ii,y.needsUpdate=!0;let x=E*4;for(let T=0;T<u;T++){let V=p[T],Z=g[T],O=b[T],$=A*F*4*T;for(let U=0;U<V.count;U++){let k=U*x;d===!0&&(s.fromBufferAttribute(V,U),R[$+k+0]=s.x,R[$+k+1]=s.y,R[$+k+2]=s.z,R[$+k+3]=0),m===!0&&(s.fromBufferAttribute(Z,U),R[$+k+4]=s.x,R[$+k+5]=s.y,R[$+k+6]=s.z,R[$+k+7]=0),w===!0&&(s.fromBufferAttribute(O,U),R[$+k+8]=s.x,R[$+k+9]=s.y,R[$+k+10]=s.z,R[$+k+11]=O.itemSize===4?s.w:1)}}f={count:u,texture:y,size:new ct(A,F)},n.set(a,f),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let w=0;w<c.length;w++)d+=c[w];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Cg(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Rg={[zc]:"LINEAR_TONE_MAPPING",[Oc]:"REINHARD_TONE_MAPPING",[Bc]:"CINEON_TONE_MAPPING",[co]:"ACES_FILMIC_TONE_MAPPING",[Vc]:"AGX_TONE_MAPPING",[Gc]:"NEUTRAL_TONE_MAPPING",[kc]:"CUSTOM_TONE_MAPPING"};function Pg(i,t,e,n,s,r){let o=new Gn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new ke;h.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Te([0,2,0,0,2,0],2));let u=new Pa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Pt(h,u),d=new xs(-1,1,1,-1,0,1),m=null,w=null,p=!1,g,b=null,E=[],A=!1;this.setSize=function(F,R){o.setSize(F,R),a!==null&&a.setSize(F,R),l!==null&&l.setSize(F,R);for(let y=0;y<E.length;y++){let x=E[y];x.setSize&&x.setSize(F,R)}},this.setEffects=function(F){E=F,A=E.length>0&&E[0].isRenderPass===!0;let R=o.width,y=o.height;E.length>0&&a===null&&(a=new Gn(R,y,{type:fi,depthBuffer:!1,stencilBuffer:!1}),l=new Gn(R,y,{type:fi,depthBuffer:!1,stencilBuffer:!1}));let x=s===!0&&E.some(P=>P.needsDepthTexture===!0);x!==(o.depthTexture!==null)&&(x===!0&&c===null&&(c=new Ui(R,y),r===!0&&(c.format=Vi,c.type=Ss)),o.dispose(),o.depthTexture=x?c:null,o.resolveDepthBuffer=x,o.storeMultisampledDepthBuffer=x);for(let P=0;P<E.length;P++){let T=E[P];T.setSize&&T.setSize(R,y),x&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(c)}},this.begin=function(F,R){if(p||F.toneMapping===Ai&&E.length===0)return!1;if(b=R,R!==null){let y=R.width,x=R.height;(o.width!==y||o.height!==x)&&this.setSize(y,x)}return A===!1&&F.setRenderTarget(o),g=F.toneMapping,F.toneMapping=Ai,!0},this.hasRenderPass=function(){return A},this.end=function(F,R){F.toneMapping=g,p=!0;let y=o,x=a;for(let P=0;P<E.length;P++){let T=E[P];T.enabled!==!1&&(T.render(F,x,y,R),T.needsSwap!==!1&&(y=x,x=x===a?l:a))}if(m!==F.outputColorSpace||w!==F.toneMapping){m=F.outputColorSpace,w=F.toneMapping,u.defines={},We.getTransfer(m)===Je&&(u.defines.SRGB_TRANSFER="");let P=Rg[w];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=y.texture,F.setRenderTarget(b),F.render(f,d),b=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Vd=new In,Gd=new Ui(1,1),Hd=new Wr(1),Wd=new Lr,Xd=new ya,qd=new Gr,vd=[],Md=[],Sd=new Float32Array(16),bd=new Float32Array(9),wd=new Float32Array(4);function rr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=vd[s];if(r===void 0&&(r=new Float32Array(s),vd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function gn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ol(i,t){let e=Md[t];e===void 0&&(e=new Int32Array(t),Md[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ig(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;i.uniform2fv(this.addr,t),xn(e,t)}}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(gn(e,t))return;i.uniform3fv(this.addr,t),xn(e,t)}}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;i.uniform4fv(this.addr,t),xn(e,t)}}function Ng(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(gn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xn(e,t)}else{if(gn(e,n))return;wd.set(n),i.uniformMatrix2fv(this.addr,!1,wd),xn(e,n)}}function Ug(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(gn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xn(e,t)}else{if(gn(e,n))return;bd.set(n),i.uniformMatrix3fv(this.addr,!1,bd),xn(e,n)}}function zg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(gn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xn(e,t)}else{if(gn(e,n))return;Sd.set(n),i.uniformMatrix4fv(this.addr,!1,Sd),xn(e,n)}}function Og(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;i.uniform2iv(this.addr,t),xn(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(gn(e,t))return;i.uniform3iv(this.addr,t),xn(e,t)}}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;i.uniform4iv(this.addr,t),xn(e,t)}}function Gg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gn(e,t))return;i.uniform2uiv(this.addr,t),xn(e,t)}}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(gn(e,t))return;i.uniform3uiv(this.addr,t),xn(e,t)}}function Xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gn(e,t))return;i.uniform4uiv(this.addr,t),xn(e,t)}}function Bl(i){return i.version===0&&(i.compareFunction=Qc,i.needsUpdate=!0),i}function qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Bl(Gd):r=Vd,e.setTexture2D(t||r,s)}function Yg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xd,s)}function Zg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Bl(Hd):r=qd,e.setTextureCube(t||r,s)}function Jg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wd,s)}function $g(i){switch(i){case 5126:return Ig;case 35664:return Fg;case 35665:return Lg;case 35666:return Dg;case 35674:return Ng;case 35675:return Ug;case 35676:return zg;case 5124:case 35670:return Og;case 35667:case 35671:return Bg;case 35668:case 35672:return kg;case 35669:case 35673:return Vg;case 5125:return Gg;case 36294:return Hg;case 36295:return Wg;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}function Kg(i,t){i.uniform1fv(this.addr,t)}function Qg(i,t){let e=rr(t,this.size,2);i.uniform2fv(this.addr,e)}function jg(i,t){let e=rr(t,this.size,3);i.uniform3fv(this.addr,e)}function tx(i,t){let e=rr(t,this.size,4);i.uniform4fv(this.addr,e)}function ex(i,t){let e=rr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function nx(i,t){let e=rr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ix(i,t){let e=rr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sx(i,t){i.uniform1iv(this.addr,t)}function rx(i,t){i.uniform2iv(this.addr,t)}function ox(i,t){i.uniform3iv(this.addr,t)}function ax(i,t){i.uniform4iv(this.addr,t)}function lx(i,t){i.uniform1uiv(this.addr,t)}function cx(i,t){i.uniform2uiv(this.addr,t)}function hx(i,t){i.uniform3uiv(this.addr,t)}function ux(i,t){i.uniform4uiv(this.addr,t)}function dx(i,t,e){let n=this.cache,s=t.length,r=Ol(e,s);gn(n,r)||(i.uniform1iv(this.addr,r),xn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Bl(Gd):o=Vd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function fx(i,t,e){let n=this.cache,s=t.length,r=Ol(e,s);gn(n,r)||(i.uniform1iv(this.addr,r),xn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Xd,r[o])}function px(i,t,e){let n=this.cache,s=t.length,r=Ol(e,s);gn(n,r)||(i.uniform1iv(this.addr,r),xn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Bl(Hd):o=qd;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function mx(i,t,e){let n=this.cache,s=t.length,r=Ol(e,s);gn(n,r)||(i.uniform1iv(this.addr,r),xn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Wd,r[o])}function gx(i){switch(i){case 5126:return Kg;case 35664:return Qg;case 35665:return jg;case 35666:return tx;case 35674:return ex;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return sx;case 35667:case 35671:return rx;case 35668:case 35672:return ox;case 35669:case 35673:return ax;case 5125:return lx;case 36294:return cx;case 36295:return hx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return dx;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}var fh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$g(e.type)}},ph=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gx(e.type)}},mh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},uh=/(\w+)(\])?(\[|\.)?/g;function Ad(i,t){i.seq.push(t),i.map[t.id]=t}function xx(i,t,e){let n=i.name,s=n.length;for(uh.lastIndex=0;;){let r=uh.exec(n),o=uh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ad(e,c===void 0?new fh(a,i,t):new ph(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new mh(a),Ad(e,u)),e=u}}}var sr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);xx(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Ed(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var _x=37297,yx=0;function vx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Td=new Ce;function Mx(i){We._getMatrix(Td,We.workingColorSpace,i);let t=`mat3( ${Td.elements.map(e=>e.toFixed(4))} )`;switch(We.getTransfer(i)){case Pr:return[t,"LinearTransferOETF"];case Je:return[t,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Cd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+vx(i.getShaderSource(t),a)}else return r}function Sx(i,t){let e=Mx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var bx={[zc]:"Linear",[Oc]:"Reinhard",[Bc]:"Cineon",[co]:"ACESFilmic",[Vc]:"AgX",[Gc]:"Neutral",[kc]:"Custom"};function wx(i,t){let e=bx[t];return e===void 0?(Me("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Nl=new G;function Ax(){We.getLuminanceCoefficients(Nl);let i=Nl.x.toFixed(4),t=Nl.y.toFixed(4),e=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ex(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)}function Tx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function vo(i){return i!==""}function Rd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Pd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(i){return i.replace(Rx,Px)}function Px(i,t){let e=Ue[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return gh(e)}var Ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Id(i){return i.replace(Ix,Fx)}function Fx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Lx={[_s]:"SHADOWMAP_TYPE_PCF",[tr]:"SHADOWMAP_TYPE_VSM"};function Dx(i){return Lx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Nx={[nr]:"ENVMAP_MODE_REFRACTION"};function Ux(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Nx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var zx={[lo]:"ENVMAP_BLENDING_MULTIPLY",[Hu]:"ENVMAP_BLENDING_MIX",[Wu]:"ENVMAP_BLENDING_ADD"};function Ox(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":zx[i.combine]||"ENVMAP_BLENDING_NONE"}function Bx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Dx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Ux(e),u=Ox(e),f=Ex(e),d=Tx(r),m=s.createProgram(),w,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(w=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(vo).join(`
`),w.length>0&&(w+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(vo).join(`
`),p.length>0&&(p+=`
`)):(w=[Fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),p=[Fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ai?"#define TONE_MAPPING":"",e.toneMapping!==Ai?Ue.tonemapping_pars_fragment:"",e.toneMapping!==Ai?wx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,Sx("linearToOutputTexel",e.outputColorSpace),Ax(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vo).join(`
`)),o=gh(o),o=Rd(o,e),o=Pd(o,e),a=gh(a),a=Rd(a,e),a=Pd(a,e),o=Id(o),a=Id(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,w=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,p=["#define varying in",e.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=g+w+o,E=g+p+a,A=Ed(s,s.VERTEX_SHADER,b),F=Ed(s,s.FRAGMENT_SHADER,E);s.attachShader(m,A),s.attachShader(m,F),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function R(T){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(m)||"",Z=s.getShaderInfoLog(A)||"",O=s.getShaderInfoLog(F)||"",$=V.trim(),U=Z.trim(),k=O.trim(),B=!0,st=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,A,F);else{let it=Cd(s,A,"vertex"),yt=Cd(s,F,"fragment");we("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+$+`
`+it+`
`+yt)}else $!==""?Me("WebGLProgram: Program Info Log:",$):(U===""||k==="")&&(st=!1);st&&(T.diagnostics={runnable:B,programLog:$,vertexShader:{log:U,prefix:w},fragmentShader:{log:k,prefix:p}})}s.deleteShader(A),s.deleteShader(F),y=new sr(s,m),x=Cx(s,m)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let x;this.getAttributes=function(){return x===void 0&&R(this),x};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(m,_x)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=F,this}var kx=0,xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new _h(t),e.set(t,n)),n}},_h=class{constructor(t){this.id=kx++,this.code=t,this.usedTimes=0}};function Vx(i){return i===is||i===go||i===xo}function Gx(i,t,e,n,s,r){let o=new Dr,a=new xh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,x,P,T,V,Z){let O=T.fog,$=V.geometry,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?T.environment:null,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,B=t.get(y.envMap||U,k),st=f[y.type],it=n.precision;y.precision!==null&&(it=n.getMaxPrecision(y.precision),it!==y.precision&&Me("WebGLProgram.getParameters:",y.precision,"not supported, using",it,"instead."));let yt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,It=yt!==void 0?yt.length:0,Vt=0;$.morphAttributes.position!==void 0&&(Vt=1),$.morphAttributes.normal!==void 0&&(Vt=2),$.morphAttributes.color!==void 0&&(Vt=3);let M,v,et,J;if(st){let ie=Ti[st];M=ie.vertexShader,v=ie.fragmentShader}else{M=y.vertexShader,v=y.fragmentShader;let ie=a.getVertexShaderStage(y),ze=a.getFragmentShaderStage(y);a.update(y,ie,ze),et=ie.id,J=ze.id}let Tt=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Ft=V.isInstancedMesh===!0,oe=V.isBatchedMesh===!0,jt=!!y.map,te=!!y.matcap,ae=!!B,xt=ae&&B.isPMREMTexture===!0,wt=!!y.aoMap,St=!!y.lightMap,mt=!!y.bumpMap&&y.wireframe===!1,at=!!y.normalMap,Xt=!!y.displacementMap,Kt=!!y.emissiveMap,ue=!!y.metalnessMap,$t=!!y.roughnessMap,de=y.anisotropy>0,q=y.clearcoat>0,Le=y.diffuseRoughness>0,j=y.dispersion>0,ht=y.retroreflectivity>0,K=y.iridescence>0,Dt=y.sheen>0,Rt=y.transmission>0,Ut=de&&!!y.anisotropyMap,L=q&&!!y.clearcoatMap,S=q&&!!y.clearcoatNormalMap,Y=q&&!!y.clearcoatRoughnessMap,bt=Le&&!!y.diffuseRoughnessMap,dt=K&&!!y.iridescenceMap,Nt=K&&!!y.iridescenceThicknessMap,Bt=Dt&&!!y.sheenColorMap,vt=Dt&&!!y.sheenRoughnessMap,Mt=!!y.specularMap,qt=!!y.specularColorMap,re=!!y.specularIntensityMap,X=Rt&&!!y.transmissionMap,Et=Rt&&!!y.thicknessMap,zt=!!y.gradientMap,Gt=!!y.alphaMap,ee=y.alphaTest>0,ne=!!y.alphaHash,ye=!!y.extensions,kt=Ai;y.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(kt=i.toneMapping);let Fe=xt?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,fe={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:M,fragmentShader:v,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:it,batching:oe,batchingColor:oe&&V._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&V.instanceColor!==null,instancingMorph:Ft&&V.morphTexture!==null,outputColorSpace:Tt===null?i.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:jt,matcap:te,envMap:ae,envMapMode:ae&&B.mapping,envMapPMREM:xt,envMapMaxLod:xt?Fe.length-1:null,envMapSize:xt?Fe[0].width:null,aoMap:wt,lightMap:St,bumpMap:mt,normalMap:at,displacementMap:Xt,emissiveMap:Kt,normalMapObjectSpace:at&&y.normalMapType===Yu,normalMapTangentSpace:at&&y.normalMapType===_o,packedNormalMap:at&&y.normalMapType===_o&&Vx(y.normalMap.format),metalnessMap:ue,roughnessMap:$t,anisotropy:de,anisotropyMap:Ut,clearcoat:q,clearcoatMap:L,clearcoatNormalMap:S,clearcoatRoughnessMap:Y,diffuseRoughness:Le,diffuseRoughnessMap:bt,dispersion:j,retroreflection:ht,iridescence:K,iridescenceMap:dt,iridescenceThicknessMap:Nt,sheen:Dt,sheenColorMap:Bt,sheenRoughnessMap:vt,specularMap:Mt,specularColorMap:qt,specularIntensityMap:re,transmission:Rt,transmissionMap:X,thicknessMap:Et,gradientMap:zt,opaque:y.transparent===!1&&y.blending===er&&y.alphaToCoverage===!1,alphaMap:Gt,alphaTest:ee,alphaHash:ne,combine:y.combine,mapUv:jt&&d(y.map.channel),aoMapUv:wt&&d(y.aoMap.channel),lightMapUv:St&&d(y.lightMap.channel),bumpMapUv:mt&&d(y.bumpMap.channel),normalMapUv:at&&d(y.normalMap.channel),displacementMapUv:Xt&&d(y.displacementMap.channel),emissiveMapUv:Kt&&d(y.emissiveMap.channel),metalnessMapUv:ue&&d(y.metalnessMap.channel),roughnessMapUv:$t&&d(y.roughnessMap.channel),anisotropyMapUv:Ut&&d(y.anisotropyMap.channel),clearcoatMapUv:L&&d(y.clearcoatMap.channel),clearcoatNormalMapUv:S&&d(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&d(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:bt&&d(y.diffuseRoughnessMap.channel),iridescenceMapUv:dt&&d(y.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&d(y.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&d(y.sheenColorMap.channel),sheenRoughnessMapUv:vt&&d(y.sheenRoughnessMap.channel),specularMapUv:Mt&&d(y.specularMap.channel),specularColorMapUv:qt&&d(y.specularColorMap.channel),specularIntensityMapUv:re&&d(y.specularIntensityMap.channel),transmissionMapUv:X&&d(y.transmissionMap.channel),thicknessMapUv:Et&&d(y.thicknessMap.channel),alphaMapUv:Gt&&d(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(at||de),vertexNormals:!!$.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!$.attributes.uv&&(jt||Gt),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||$.attributes.normal===void 0&&at===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ct,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Vt,numSunLights:x.sun.length,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numSunLightShadows:x.sunShadowMap.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbeGrids:Z.filter(ie=>ie.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:jt&&y.map.isVideoTexture===!0&&We.getTransfer(y.map.colorSpace)===Je,decodeVideoTextureEmissive:Kt&&y.emissiveMap.isVideoTexture===!0&&We.getTransfer(y.emissiveMap.colorSpace)===Je,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===He,flipSided:y.side===vn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ye&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&y.extensions.multiDraw===!0||oe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function w(y){let x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)x.push(P),x.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(p(x,y),g(x,y),x.push(i.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function p(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapPMREM),y.push(x.envMapMaxLod),y.push(x.envMapSize),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.diffuseRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.numSunLights),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numSunLightShadows),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbeGrids),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function g(y,x){o.disableAll(),x.instancing&&o.enable(0),x.instancingColor&&o.enable(1),x.instancingMorph&&o.enable(2),x.matcap&&o.enable(3),x.envMap&&o.enable(4),x.normalMapObjectSpace&&o.enable(5),x.normalMapTangentSpace&&o.enable(6),x.clearcoat&&o.enable(7),x.iridescence&&o.enable(8),x.alphaTest&&o.enable(9),x.vertexColors&&o.enable(10),x.vertexAlphas&&o.enable(11),x.vertexUv1s&&o.enable(12),x.vertexUv2s&&o.enable(13),x.vertexUv3s&&o.enable(14),x.vertexTangents&&o.enable(15),x.anisotropy&&o.enable(16),x.alphaHash&&o.enable(17),x.batching&&o.enable(18),x.dispersion&&o.enable(19),x.retroreflection&&o.enable(24),x.diffuseRoughness&&o.enable(25),x.batchingColor&&o.enable(20),x.gradientMap&&o.enable(21),x.packedNormalMap&&o.enable(22),x.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),x.numLightProbeGrids>0&&o.enable(22),x.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function b(y){let x=f[y.type],P;if(x){let T=Ti[x];P=fd.clone(T.uniforms)}else P=y.uniforms;return P}function E(y,x){let P=h.get(x);return P!==void 0?++P.usedTimes:(P=new Bx(i,x,y,s),c.push(P),h.set(x,P)),P}function A(y){if(--y.usedTimes===0){let x=c.indexOf(y);c[x]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function F(y){a.remove(y)}function R(){a.dispose()}return{getParameters:m,getProgramCacheKey:w,getUniforms:b,acquireProgram:E,releaseProgram:A,releaseShaderCache:F,programs:c,dispose:R}}function Hx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Wx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ld(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Dd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,w,p,g){let b=i[t];return b===void 0?(b={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:w,renderOrder:f.renderOrder,z:p,group:g},i[t]=b):(b.id=f.id,b.object=f,b.geometry=d,b.material=m,b.materialVariant=o(f),b.groupOrder=w,b.renderOrder=f.renderOrder,b.z=p,b.group=g),t++,b}function l(f,d,m,w,p,g,b){b.reversedDepth===!0&&(p=-p);let E=a(f,d,m,w,p,g);m.transmission>0?n.push(E):m.transparent===!0?s.push(E):e.push(E)}function c(f,d,m,w,p,g){let b=a(f,d,m,w,p,g);m.transmission>0?n.unshift(b):m.transparent===!0?s.unshift(b):e.unshift(b)}function h(f,d){e.length>1&&e.sort(f||Wx),n.length>1&&n.sort(d||Ld),s.length>1&&s.sort(d||Ld)}function u(){for(let f=t,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Xx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Dd,i.set(n,[o])):s>=r.length?(o=new Dd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function qx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new ge};break;case"SpotLight":e={position:new G,direction:new G,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new ge,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":e={color:new ge,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function Yx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Zx=0;function Jx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $x(i){let t=new qx,e=Yx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0},s=new G,r=new qe,o=new qe;function a(c){let h=0,u=0,f=0,d=0,m=0,w=0,p=0,g=0,b=0,E=0,A=0,F=0,R=0,y=0,x=0,P=0;c.sort(Jx);for(let V=0,Z=c.length;V<Z;V++){let O=c[V],$=O.color,U=O.intensity,k=O.distance,B=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===is?B=O.shadow.map.texture:B=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=$.r*U,u+=$.g*U,f+=$.b*U;else if(O.isSunLight){let st=t.get(O);if(st.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let it=O.shadow,yt=e.get(O);yt.shadowIntensity=it.intensity,yt.shadowBias=it.bias,yt.shadowNormalBias=it.normalBias,yt.shadowRadius=it.radius,yt.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),n.sunShadow[m]=yt,n.sunShadowMap[m]=B;let It=it.getViewportCount();for(let Vt=0;Vt<It;Vt++)n.sunShadowMatrix[w+Vt]=it.getMatrix(Vt),n.sunShadowCascade[w+Vt]=it._cascadeData[Vt];w+=It,m++}n.sun[d]=st,d++}else if(O.isDirectionalLight){let st=t.get(O);if(st.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let it=O.shadow,yt=e.get(O);yt.shadowIntensity=it.intensity,yt.shadowBias=it.bias,yt.shadowNormalBias=it.normalBias,yt.shadowRadius=it.radius,yt.shadowMapSize=it.mapSize,n.directionalShadow[p]=yt,n.directionalShadowMap[p]=B,n.directionalShadowMatrix[p]=O.shadow.matrix,F++}n.directional[p]=st,p++}else if(O.isSpotLight){let st=t.get(O);st.position.setFromMatrixPosition(O.matrixWorld),st.color.copy($).multiplyScalar(U),st.distance=k,st.coneCos=Math.cos(O.angle),st.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),st.decay=O.decay,n.spot[b]=st;let it=O.shadow;if(O.map&&(n.spotLightMap[x]=O.map,x++,it.updateMatrices(O),O.castShadow&&P++),n.spotLightMatrix[b]=it.matrix,O.castShadow){let yt=e.get(O);yt.shadowIntensity=it.intensity,yt.shadowBias=it.bias,yt.shadowNormalBias=it.normalBias,yt.shadowRadius=it.radius,yt.shadowMapSize=it.mapSize,n.spotShadow[b]=yt,n.spotShadowMap[b]=B,y++}b++}else if(O.isRectAreaLight){let st=t.get(O);st.color.copy($).multiplyScalar(U),st.halfWidth.set(O.width*.5,0,0),st.halfHeight.set(0,O.height*.5,0),n.rectArea[E]=st,E++}else if(O.isPointLight){let st=t.get(O);if(st.color.copy(O.color).multiplyScalar(O.intensity),st.distance=O.distance,st.decay=O.decay,O.castShadow){let it=O.shadow,yt=e.get(O);yt.shadowIntensity=it.intensity,yt.shadowBias=it.bias,yt.shadowNormalBias=it.normalBias,yt.shadowRadius=it.radius,yt.shadowMapSize=it.mapSize,yt.shadowCameraNear=it.camera.near,yt.shadowCameraFar=it.camera.far,n.pointShadow[g]=yt,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=O.shadow.matrix,R++}n.point[g]=st,g++}else if(O.isHemisphereLight){let st=t.get(O);st.skyColor.copy(O.color).multiplyScalar(U),st.groundColor.copy(O.groundColor).multiplyScalar(U),n.hemi[A]=st,A++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let T=n.hash;(T.sunLength!==d||T.directionalLength!==p||T.pointLength!==g||T.spotLength!==b||T.rectAreaLength!==E||T.hemiLength!==A||T.numSunShadows!==m||T.numDirectionalShadows!==F||T.numPointShadows!==R||T.numSpotShadows!==y||T.numSpotMaps!==x)&&(n.sun.length=d,n.directional.length=p,n.spot.length=b,n.rectArea.length=E,n.point.length=g,n.hemi.length=A,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=w,n.sunShadowCascade.length=w,n.directionalShadow.length=F,n.directionalShadowMap.length=F,n.directionalShadowMatrix.length=F,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+x-P,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=P,T.sunLength=d,T.directionalLength=p,T.pointLength=g,T.spotLength=b,T.rectAreaLength=E,T.hemiLength=A,T.numSunShadows=m,T.numDirectionalShadows=F,T.numPointShadows=R,T.numSpotShadows=y,T.numSpotMaps=x,n.version=Zx++)}function l(c,h){let u=0,f=0,d=0,m=0,w=0,p=0,g=h.matrixWorldInverse;for(let b=0,E=c.length;b<E;b++){let A=c[b];if(A.isSunLight){let F=n.sun[u];F.direction.setFromMatrixPosition(A.matrixWorld),F.direction.transformDirection(g),u++}else if(A.isDirectionalLight){let F=n.directional[f];F.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),F.direction.sub(s),F.direction.transformDirection(g),f++}else if(A.isSpotLight){let F=n.spot[m];F.position.setFromMatrixPosition(A.matrixWorld),F.position.applyMatrix4(g),F.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),F.direction.sub(s),F.direction.transformDirection(g),m++}else if(A.isRectAreaLight){let F=n.rectArea[w];F.position.setFromMatrixPosition(A.matrixWorld),F.position.applyMatrix4(g),o.identity(),r.copy(A.matrixWorld),r.premultiply(g),o.extractRotation(r),F.halfWidth.set(A.width*.5,0,0),F.halfHeight.set(0,A.height*.5,0),F.halfWidth.applyMatrix4(o),F.halfHeight.applyMatrix4(o),w++}else if(A.isPointLight){let F=n.point[d];F.position.setFromMatrixPosition(A.matrixWorld),F.position.applyMatrix4(g),d++}else if(A.isHemisphereLight){let F=n.hemi[p];F.direction.setFromMatrixPosition(A.matrixWorld),F.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:n}}function Nd(i){let t=new $x(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Kx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Nd(i),t.set(s,[a])):r>=o.length?(a=new Nd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Qx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jx=`uniform sampler2D shadow_pass;
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
}`,t_=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],e_=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Ud=new qe,yo=new G,dh=new G;function n_(i,t,e){let n=new Ki,s=new ct,r=new ct,o=new en,a=new Ia,l=new Fa,c={},h=e.maxTextureSize,u={[ns]:vn,[vn]:ns,[He]:He},f=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Qx,fragmentShader:jx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new ke;m.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new Pt(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_s;let g=this.type;this.render=function(R,y,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;this.type===wu&&(Me("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_s);let P=i.getRenderTarget(),T=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(ys),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let O=g!==this.type;O&&y.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(U=>U.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,U=R.length;$<U;$++){let k=R[$],B=k.shadow;if(B===void 0){Me("WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let st=B.getFrameExtents();s.multiply(st),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,B.mapSize.y=r.y));let it=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=it,B.map===null||O===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===tr){if(k.isPointLight){Me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Gn(s.x,s.y,{format:is,type:fi,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),B.map.texture.name=k.name+".shadowMap",B.map.depthTexture=new Ui(s.x,s.y,ii),B.map.depthTexture.name=k.name+".shadowMapDepth",B.map.depthTexture.format=Ni,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=yn,B.map.depthTexture.magFilter=yn}else k.isPointLight?(B.map=new Mo(s.x),B.map.depthTexture=new Wr(s.x,di)):(B.map=new Gn(s.x,s.y),B.map.depthTexture=new Ui(s.x,s.y,di)),B.map.depthTexture.name=k.name+".shadowMap",B.map.depthTexture.format=Ni,this.type===_s?(B.map.depthTexture.compareFunction=it?Kc:$c,B.map.depthTexture.minFilter=Pn,B.map.depthTexture.magFilter=Pn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=yn,B.map.depthTexture.magFilter=yn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let yt=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();k.isPointLight!==!0&&B.updateMatrices(k,x);let It=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:x.layers;for(let Vt=0;Vt<yt;Vt++){let M=B.getCamera(Vt);if(k.isPointLight){let v=B.camera,et=B.matrix,J=k.distance||v.far;J!==v.far&&(v.far=J,v.updateProjectionMatrix()),yo.setFromMatrixPosition(k.matrixWorld),v.position.copy(yo),dh.copy(v.position),dh.add(t_[Vt]),v.up.copy(e_[Vt]),v.lookAt(dh),v.updateMatrixWorld(),et.makeTranslation(-yo.x,-yo.y,-yo.z),Ud.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Ud,v.coordinateSystem,v.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,Vt),i.clear();else{Vt===0&&(i.setRenderTarget(B.map),i.clear());let v=B.getViewport(Vt);o.set(r.x*v.x,r.y*v.y,r.x*v.z,r.y*v.w),Z.viewport(o)}n=B.getFrustum(Vt),A(y,x,M,k,It,this.type)}B.isPointLightShadow!==!0&&this.type===tr&&b(B,x),B.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(P,T,V)};function b(R,y){let x=t.update(w);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null?R.mapPass=new Gn(s.x,s.y,{format:is,type:fi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(y,null,x,f,w,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(y,null,x,d,w,null)}function E(R,y,x,P){let T=null,V=x.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(V!==void 0)T=V;else if(T=x.isPointLight===!0?l:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let Z=T.uuid,O=y.uuid,$=c[Z];$===void 0&&($={},c[Z]=$);let U=$[O];U===void 0&&(U=T.clone(),$[O]=U,y.addEventListener("dispose",F)),T=U}if(T.visible=y.visible,T.wireframe=y.wireframe,P===tr?T.side=y.shadowSide!==null?y.shadowSide:y.side:T.side=y.shadowSide!==null?y.shadowSide:u[y.side],T.alphaMap=y.alphaMap,T.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,T.map=y.map,T.clipShadows=y.clipShadows,T.clippingPlanes=y.clippingPlanes,T.clipIntersection=y.clipIntersection,T.displacementMap=y.displacementMap,T.displacementScale=y.displacementScale,T.displacementBias=y.displacementBias,T.wireframeLinewidth=y.wireframeLinewidth,T.linewidth=y.linewidth,x.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let Z=i.properties.get(T);Z.light=x}return T}function A(R,y,x,P,T,V){if(R.visible===!1)return;if(R.layers.test(T)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&V===tr)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,R.matrixWorld);let $=t.update(R),U=R.material;if(Array.isArray(U)){let k=$.groups;for(let B=0,st=k.length;B<st;B++){let it=k[B],yt=U[it.materialIndex];if(yt&&yt.visible){let It=E(R,yt,P,V);R.onBeforeShadow(i,R,y,x,$,It,it),i.renderBufferDirect(x,null,$,It,R,it),R.onAfterShadow(i,R,y,x,$,It,it)}}}else if(U.visible){let k=E(R,U,P,V);R.onBeforeShadow(i,R,y,x,$,k,null),i.renderBufferDirect(x,null,$,k,R,null),R.onAfterShadow(i,R,y,x,$,k,null)}}let O=R.children;for(let $=0,U=O.length;$<U;$++)A(O[$],y,x,P,T,V)}function F(R){R.target.removeEventListener("dispose",F);for(let x in c){let P=c[x],T=R.target.uuid;T in P&&(P[T].dispose(),delete P[T])}}}function i_(i,t){function e(){let X=!1,Et=new en,zt=null,Gt=new en(0,0,0,0);return{setMask:function(ee){zt!==ee&&!X&&(i.colorMask(ee,ee,ee,ee),zt=ee)},setLocked:function(ee){X=ee},setClear:function(ee,ne,ye,kt,Fe){Fe===!0&&(ee*=kt,ne*=kt,ye*=kt),Et.set(ee,ne,ye,kt),Gt.equals(Et)===!1&&(i.clearColor(ee,ne,ye,kt),Gt.copy(Et))},reset:function(){X=!1,zt=null,Gt.set(-1,0,0,0)}}}function n(){let X=!1,Et=!1,zt=null,Gt=null,ee=null;return{setReversed:function(ne){if(Et!==ne){let ye=t.get("EXT_clip_control");ne?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),Et=ne;let kt=ee;ee=null,this.setClear(kt)}},getReversed:function(){return Et},setTest:function(ne){ne?Ct(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(ne){zt!==ne&&!X&&(i.depthMask(ne),zt=ne)},setFunc:function(ne){if(Et&&(ne=id[ne]),Gt!==ne){switch(ne){case aa:i.depthFunc(i.NEVER);break;case la:i.depthFunc(i.ALWAYS);break;case ca:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case ha:i.depthFunc(i.EQUAL);break;case ua:i.depthFunc(i.GEQUAL);break;case da:i.depthFunc(i.GREATER);break;case fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Gt=ne}},setLocked:function(ne){X=ne},setClear:function(ne){ee!==ne&&(ee=ne,Et&&(ne=1-ne),i.clearDepth(ne))},reset:function(){X=!1,zt=null,Gt=null,ee=null,Et=!1}}}function s(){let X=!1,Et=null,zt=null,Gt=null,ee=null,ne=null,ye=null,kt=null,Fe=null;return{setTest:function(fe){X||(fe?Ct(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(fe){Et!==fe&&!X&&(i.stencilMask(fe),Et=fe)},setFunc:function(fe,ie,ze){(zt!==fe||Gt!==ie||ee!==ze)&&(i.stencilFunc(fe,ie,ze),zt=fe,Gt=ie,ee=ze)},setOp:function(fe,ie,ze){(ne!==fe||ye!==ie||kt!==ze)&&(i.stencilOp(fe,ie,ze),ne=fe,ye=ie,kt=ze)},setLocked:function(fe){X=fe},setClear:function(fe){Fe!==fe&&(i.clearStencil(fe),Fe=fe)},reset:function(){X=!1,Et=null,zt=null,Gt=null,ee=null,ne=null,ye=null,kt=null,Fe=null}}}let r=new e,o=new n,a=new s,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,m=[],w=null,p=!1,g=null,b=null,E=null,A=null,F=null,R=null,y=null,x=new ge(0,0,0),P=0,T=!1,V=null,Z=null,O=null,$=null,U=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,st=0,it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(it)[1]),B=st>=1):it.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),B=st>=2);let yt=null,It={},Vt=i.getParameter(i.SCISSOR_BOX),M=i.getParameter(i.VIEWPORT),v=new en().fromArray(Vt),et=new en().fromArray(M);function J(X,Et,zt,Gt){let ee=new Uint8Array(4),ne=i.createTexture();i.bindTexture(X,ne),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<zt;ye++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,Gt,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(Et+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return ne}let Tt={};Tt[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),Tt[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Tt[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Ct(i.DEPTH_TEST),o.setFunc(Hs),at(!1),Xt(Fc),Ct(i.CULL_FACE),St(ys);function Ct(X){h[X]!==!0&&(i.enable(X),h[X]=!0)}function Ft(X){h[X]!==!1&&(i.disable(X),h[X]=!1)}function oe(X,Et){return X===i.FRAMEBUFFER?f[i.DRAW_FRAMEBUFFER]===Et&&f[i.READ_FRAMEBUFFER]===Et?!1:(i.bindFramebuffer(i.FRAMEBUFFER,Et),f[i.DRAW_FRAMEBUFFER]=Et,f[i.READ_FRAMEBUFFER]=Et,!0):f[X]===Et?!1:(i.bindFramebuffer(X,Et),f[X]=Et,!0)}function jt(X){return X===i.FRAMEBUFFER&&(X=i.DRAW_FRAMEBUFFER),f[X]||null}function te(X,Et){let zt=m,Gt=!1;if(X){zt=d.get(Et),zt===void 0&&(zt=[],d.set(Et,zt));let ee=X.textures;if(zt.length!==ee.length||zt[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,ye=ee.length;ne<ye;ne++)zt[ne]=i.COLOR_ATTACHMENT0+ne;zt.length=ee.length,Gt=!0}}else zt[0]!==i.BACK&&(zt[0]=i.BACK,Gt=!0);Gt&&i.drawBuffers(zt)}function ae(X){return w!==X?(i.useProgram(X),w=X,!0):!1}let xt={[vs]:i.FUNC_ADD,[Eu]:i.FUNC_SUBTRACT,[Tu]:i.FUNC_REVERSE_SUBTRACT};xt[Cu]=i.MIN,xt[Ru]=i.MAX;let wt={[Pu]:i.ZERO,[Iu]:i.ONE,[Fu]:i.SRC_COLOR,[Nc]:i.SRC_ALPHA,[Ou]:i.SRC_ALPHA_SATURATE,[Uu]:i.DST_COLOR,[Du]:i.DST_ALPHA,[Lu]:i.ONE_MINUS_SRC_COLOR,[Uc]:i.ONE_MINUS_SRC_ALPHA,[zu]:i.ONE_MINUS_DST_COLOR,[Nu]:i.ONE_MINUS_DST_ALPHA,[Bu]:i.CONSTANT_COLOR,[ku]:i.ONE_MINUS_CONSTANT_COLOR,[Vu]:i.CONSTANT_ALPHA,[Gu]:i.ONE_MINUS_CONSTANT_ALPHA};function St(X,Et,zt,Gt,ee,ne,ye,kt,Fe,fe){if(X===ys){p===!0&&(Ft(i.BLEND),p=!1);return}if(p===!1&&(Ct(i.BLEND),p=!0),X!==Au){if(X!==g||fe!==T){if((b!==vs||F!==vs)&&(i.blendEquation(i.FUNC_ADD),b=vs,F=vs),fe)switch(X){case er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ui:i.blendFunc(i.ONE,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:we("WebGLState: Invalid blending: ",X);break}else switch(X){case er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lc:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dc:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",X);break}E=null,A=null,R=null,y=null,x.set(0,0,0),P=0,g=X,T=fe}return}ee=ee||Et,ne=ne||zt,ye=ye||Gt,(Et!==b||ee!==F)&&(i.blendEquationSeparate(xt[Et],xt[ee]),b=Et,F=ee),(zt!==E||Gt!==A||ne!==R||ye!==y)&&(i.blendFuncSeparate(wt[zt],wt[Gt],wt[ne],wt[ye]),E=zt,A=Gt,R=ne,y=ye),(kt.equals(x)===!1||Fe!==P)&&(i.blendColor(kt.r,kt.g,kt.b,Fe),x.copy(kt),P=Fe),g=X,T=!1}function mt(X,Et){X.side===He?Ft(i.CULL_FACE):Ct(i.CULL_FACE);let zt=X.side===vn;Et&&(zt=!zt),at(zt),X.blending===er&&X.transparent===!1?St(ys):St(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let Gt=X.stencilWrite;a.setTest(Gt),Gt&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ue(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Ct(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(X){V!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),V=X)}function Xt(X){X!==Su?(Ct(i.CULL_FACE),X!==Z&&(X===Fc?i.cullFace(i.BACK):X===bu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),Z=X}function Kt(X){X!==O&&(B&&i.lineWidth(X),O=X)}function ue(X,Et,zt){X?(Ct(i.POLYGON_OFFSET_FILL),($!==Et||U!==zt)&&($=Et,U=zt,o.getReversed()&&(Et=-Et,zt=-zt),i.polygonOffset(Et,zt))):Ft(i.POLYGON_OFFSET_FILL)}function $t(X){X?Ct(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function de(X){X===void 0&&(X=i.TEXTURE0+k-1),yt!==X&&(i.activeTexture(X),yt=X)}function q(X,Et,zt){zt===void 0&&(yt===null?zt=i.TEXTURE0+k-1:zt=yt);let Gt=It[zt];Gt===void 0&&(Gt={type:void 0,texture:void 0},It[zt]=Gt),(Gt.type!==X||Gt.texture!==Et)&&(yt!==zt&&(i.activeTexture(zt),yt=zt),i.bindTexture(X,Et||Tt[X]),Gt.type=X,Gt.texture=Et)}function Le(){let X=It[yt];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function j(){try{i.compressedTexImage2D(...arguments)}catch(X){we("WebGLState:",X)}}function ht(){try{i.compressedTexImage3D(...arguments)}catch(X){we("WebGLState:",X)}}function K(){try{i.texSubImage2D(...arguments)}catch(X){we("WebGLState:",X)}}function Dt(){try{i.texSubImage3D(...arguments)}catch(X){we("WebGLState:",X)}}function Rt(){try{i.compressedTexSubImage2D(...arguments)}catch(X){we("WebGLState:",X)}}function Ut(){try{i.compressedTexSubImage3D(...arguments)}catch(X){we("WebGLState:",X)}}function L(){try{i.texStorage2D(...arguments)}catch(X){we("WebGLState:",X)}}function S(){try{i.texStorage3D(...arguments)}catch(X){we("WebGLState:",X)}}function Y(){try{i.texImage2D(...arguments)}catch(X){we("WebGLState:",X)}}function bt(){try{i.texImage3D(...arguments)}catch(X){we("WebGLState:",X)}}function dt(X){return u[X]!==void 0?u[X]:i.getParameter(X)}function Nt(X,Et){u[X]!==Et&&(i.pixelStorei(X,Et),u[X]=Et)}function Bt(X){v.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),v.copy(X))}function vt(X){et.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),et.copy(X))}function Mt(X,Et){let zt=c.get(Et);zt===void 0&&(zt=new WeakMap,c.set(Et,zt));let Gt=zt.get(X);Gt===void 0&&(Gt=i.getUniformBlockIndex(Et,X.name),i.uniformBlockBinding(Et,Gt,Gt),zt.set(X,Gt))}function qt(X,Et,zt){let ee=c.get(Et).get(X);l[ee]!==zt&&(i.bindBufferBase(i.UNIFORM_BUFFER,ee,zt),l[ee]=zt)}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},yt=null,It={},f={},l={},d=new WeakMap,m=[],w=null,p=!1,g=null,b=null,E=null,A=null,F=null,R=null,y=null,x=new ge(0,0,0),P=0,T=!1,V=null,Z=null,O=null,$=null,U=null,v.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Ct,disable:Ft,bindFramebuffer:oe,getBoundFramebuffer:jt,drawBuffers:te,useProgram:ae,setBlending:St,setMaterial:mt,setFlipSided:at,setCullFace:Xt,setLineWidth:Kt,setPolygonOffset:ue,setScissorTest:$t,activeTexture:de,bindTexture:q,unbindTexture:Le,compressedTexImage2D:j,compressedTexImage3D:ht,texImage2D:Y,texImage3D:bt,pixelStorei:Nt,getParameter:dt,updateUBOMapping:Mt,uniformBlockBinding:qt,texStorage2D:L,texStorage3D:S,texSubImage2D:K,texSubImage3D:Dt,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Ut,scissor:Bt,viewport:vt,reset:re}}function s_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap,u=new Set,f,d=new WeakMap,m=new Set,w=new FinalizationRegistry(L=>m.delete(L)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,S){return p?new OffscreenCanvas(L,S):Ir("canvas")}function b(L,S,Y){let bt=1,dt=Ut(L);if((dt.width>Y||dt.height>Y)&&(bt=Y/Math.max(dt.width,dt.height)),bt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let Nt=Math.floor(bt*dt.width),Bt=Math.floor(bt*dt.height);f===void 0&&(f=g(Nt,Bt));let vt=S?g(Nt,Bt):f;return vt.width=Nt,vt.height=Bt,vt.getContext("2d").drawImage(L,0,0,Nt,Bt),Me("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+Nt+"x"+Bt+")."),vt}else return"data"in L&&Me("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),L;return L}function E(L){return L.generateMipmaps}function A(L){i.generateMipmap(L)}function F(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(L,S,Y,bt,dt,Nt=!1){if(L!==null){if(i[L]!==void 0)return i[L];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Bt;bt&&(Bt=t.get("EXT_texture_norm16"),Bt||Me("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let vt=S;if(S===i.RED&&(Y===i.FLOAT&&(vt=i.R32F),Y===i.HALF_FLOAT&&(vt=i.R16F),Y===i.UNSIGNED_BYTE&&(vt=i.R8),Y===i.UNSIGNED_SHORT&&Bt&&(vt=Bt.R16_EXT),Y===i.SHORT&&Bt&&(vt=Bt.R16_SNORM_EXT)),S===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(vt=i.R8UI),Y===i.UNSIGNED_SHORT&&(vt=i.R16UI),Y===i.UNSIGNED_INT&&(vt=i.R32UI),Y===i.BYTE&&(vt=i.R8I),Y===i.SHORT&&(vt=i.R16I),Y===i.INT&&(vt=i.R32I)),S===i.RG&&(Y===i.FLOAT&&(vt=i.RG32F),Y===i.HALF_FLOAT&&(vt=i.RG16F),Y===i.UNSIGNED_BYTE&&(vt=i.RG8),Y===i.UNSIGNED_SHORT&&Bt&&(vt=Bt.RG16_EXT),Y===i.SHORT&&Bt&&(vt=Bt.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(vt=i.RG8UI),Y===i.UNSIGNED_SHORT&&(vt=i.RG16UI),Y===i.UNSIGNED_INT&&(vt=i.RG32UI),Y===i.BYTE&&(vt=i.RG8I),Y===i.SHORT&&(vt=i.RG16I),Y===i.INT&&(vt=i.RG32I)),S===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(vt=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(vt=i.RGB16UI),Y===i.UNSIGNED_INT&&(vt=i.RGB32UI),Y===i.BYTE&&(vt=i.RGB8I),Y===i.SHORT&&(vt=i.RGB16I),Y===i.INT&&(vt=i.RGB32I)),S===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(vt=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(vt=i.RGBA16UI),Y===i.UNSIGNED_INT&&(vt=i.RGBA32UI),Y===i.BYTE&&(vt=i.RGBA8I),Y===i.SHORT&&(vt=i.RGBA16I),Y===i.INT&&(vt=i.RGBA32I)),S===i.RGB&&(Y===i.UNSIGNED_SHORT&&Bt&&(vt=Bt.RGB16_EXT),Y===i.SHORT&&Bt&&(vt=Bt.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(vt=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(vt=i.R11F_G11F_B10F)),S===i.RGBA){let Mt=Nt?Pr:We.getTransfer(dt);Y===i.FLOAT&&(vt=i.RGBA32F),Y===i.HALF_FLOAT&&(vt=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(vt=Mt===Je?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&Bt&&(vt=Bt.RGBA16_EXT),Y===i.SHORT&&Bt&&(vt=Bt.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(vt=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(vt=i.RGB5_A1)}return(vt===i.R16F||vt===i.R32F||vt===i.RG16F||vt===i.RG32F||vt===i.RGBA16F||vt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),vt}function y(L,S){let Y;return L?S===null||S===di||S===Ss?Y=i.DEPTH24_STENCIL8:S===ii?Y=i.DEPTH32F_STENCIL8:S===ir&&(Y=i.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===di||S===Ss?Y=i.DEPTH_COMPONENT24:S===ii?Y=i.DEPTH_COMPONENT32F:S===ir&&(Y=i.DEPTH_COMPONENT16),Y}function x(L,S){return E(L)===!0||L.isFramebufferTexture&&L.minFilter!==yn&&L.minFilter!==Pn?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function P(L){let S=new WeakRef(L);n.get(L).__ref=S,m.add(S),w.register(L,S,S)}function T(L){let S=n.get(L).__ref;S!==void 0&&(m.delete(S),w.unregister(S))}function V(L){O(L.target)}function Z(L){$(L.target)}function O(L){L.removeEventListener("dispose",V),T(L),k(L),L.isVideoTexture&&h.delete(L),L.isHTMLTexture&&u.delete(L)}function $(L){L.removeEventListener("dispose",Z),T(L),st(L)}function U(){for(let L of m){let S=L.deref();S!==void 0&&(S.isRenderTarget===!0?$(S):O(S))}m.clear(),u.clear()}function k(L){let S=n.get(L);if(S.__webglInit===void 0)return;let Y=L.source,bt=d.get(Y);if(bt){let dt=bt[S.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&B(L),Object.keys(bt).length===0&&d.delete(Y)}n.remove(L)}function B(L){let S=n.get(L);i.deleteTexture(S.__webglTexture);let Y=L.source,bt=d.get(Y);delete bt[S.__cacheKey],o.memory.textures--}function st(L){let S=n.get(L);S.__depthDisposeCallback&&S.__depthDisposeCallback();let Y=L.depthTexture;if(Y&&Y.renderTarget===L&&O(Y),L.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(S.__webglFramebuffer[dt]))for(let Nt=0;Nt<S.__webglFramebuffer[dt].length;Nt++)i.deleteFramebuffer(S.__webglFramebuffer[dt][Nt]);else i.deleteFramebuffer(S.__webglFramebuffer[dt]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[dt])}else{if(Array.isArray(S.__webglFramebuffer))for(let dt=0;dt<S.__webglFramebuffer.length;dt++)i.deleteFramebuffer(S.__webglFramebuffer[dt]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let dt=0;dt<S.__webglColorRenderbuffer.length;dt++)S.__webglColorRenderbuffer[dt]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[dt]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let bt=L.textures;for(let dt=0,Nt=bt.length;dt<Nt;dt++){let Bt=n.get(bt[dt]);Bt.__webglTexture&&(i.deleteTexture(Bt.__webglTexture),o.memory.textures--),n.remove(bt[dt])}n.remove(L)}let it=0;function yt(){it=0}function It(){return it}function Vt(L){it=L}function M(){let L=it;return L>=s.maxTextures&&Me("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),it+=1,L}function v(L){let S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.mipmapsAutoUpdate),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function et(L,S){let Y=n.get(L);if(L.isVideoTexture&&Dt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Y.__version!==L.version){let bt=L.image;if(bt===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(bt.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{St(Y,L,S);return}}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+S)}function J(L,S){let Y=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){St(Y,L,S);return}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+S)}function Tt(L,S){let Y=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){St(Y,L,S);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+S)}function Ct(L,S){let Y=n.get(L);if(L.version>0&&Y.__version!==L.version){mt(Y,L,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+S)}let Ft={[Ws]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[pa]:i.MIRRORED_REPEAT},oe={[yn]:i.NEAREST,[Xu]:i.NEAREST_MIPMAP_NEAREST,[ho]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[Ja]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},jt={[Ju]:i.NEVER,[Qc]:i.ALWAYS,[$u]:i.LESS,[$c]:i.LEQUAL,[Ku]:i.EQUAL,[Kc]:i.GEQUAL,[Qu]:i.GREATER,[ju]:i.NOTEQUAL};function te(L,S){if(S.type===ii&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Pn||S.magFilter===Ja||S.magFilter===ho||S.magFilter===ki||S.minFilter===Pn||S.minFilter===Ja||S.minFilter===ho||S.minFilter===ki)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,Ft[S.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Ft[S.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Ft[S.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,oe[S.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,oe[S.minFilter]),S.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,jt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===yn||S.minFilter!==ho&&S.minFilter!==ki||S.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ae(L,S){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",V),P(S));let bt=S.source,dt=d.get(bt);dt===void 0&&(dt={},d.set(bt,dt));let Nt=v(S);if(Nt!==L.__cacheKey){dt[Nt]===void 0&&(dt[Nt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),dt[Nt].usedTimes++;let Bt=dt[L.__cacheKey];Bt!==void 0&&(dt[L.__cacheKey].usedTimes--,Bt.usedTimes===0&&B(S)),L.__cacheKey=Nt,L.__webglTexture=dt[Nt].texture}return Y}function xt(L,S,Y){return Math.floor(Math.floor(L/Y)/S)}function wt(L,S,Y,bt){let Nt=L.updateRanges;if(Nt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,Y,bt,S.data);else{Nt.sort((re,X)=>re.start-X.start);let Bt=0;for(let re=1;re<Nt.length;re++){let X=Nt[Bt],Et=Nt[re],zt=X.start+X.count,Gt=xt(Et.start,S.width,4),ee=xt(X.start,S.width,4);Et.start<=zt+1&&Gt===ee&&xt(Et.start+Et.count-1,S.width,4)===Gt?X.count=Math.max(X.count,Et.start+Et.count-X.start):(++Bt,Nt[Bt]=Et)}Nt.length=Bt+1;let vt=e.getParameter(i.UNPACK_ROW_LENGTH),Mt=e.getParameter(i.UNPACK_SKIP_PIXELS),qt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let re=0,X=Nt.length;re<X;re++){let Et=Nt[re],zt=Math.floor(Et.start/4),Gt=Math.ceil(Et.count/4),ee=zt%S.width,ne=Math.floor(zt/S.width),ye=Gt,kt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),e.pixelStorei(i.UNPACK_SKIP_ROWS,ne),e.texSubImage2D(i.TEXTURE_2D,0,ee,ne,ye,kt,Y,bt,S.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,vt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Mt),e.pixelStorei(i.UNPACK_SKIP_ROWS,qt)}}function St(L,S,Y){let bt=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(bt=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(bt=i.TEXTURE_3D);let dt=ae(L,S),Nt=S.source;e.bindTexture(bt,L.__webglTexture,i.TEXTURE0+Y);let Bt=n.get(Nt);if(Nt.version!==Bt.__version||dt===!0){if(e.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let kt=We.getPrimaries(We.workingColorSpace),Fe=S.colorSpace===Gi?null:We.getPrimaries(S.colorSpace),fe=S.colorSpace===Gi||kt===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let Mt=b(S.image,!1,s.maxTextureSize);Mt=Rt(S,Mt);let qt=r.convert(S.format,S.colorSpace),re=r.convert(S.type),X=R(S.internalFormat,qt,re,S.normalized,S.colorSpace,S.isVideoTexture);te(bt,S);let Et,zt=S.mipmaps,Gt=S.isVideoTexture!==!0,ee=Bt.__version===void 0||dt===!0,ne=Nt.dataReady,ye=x(S,Mt);if(S.isDepthTexture)X=y(S.format===Vi,S.type),ee&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,X,Mt.width,Mt.height):e.texImage2D(i.TEXTURE_2D,0,X,Mt.width,Mt.height,0,qt,re,null));else if(S.isDataTexture)if(zt.length>0){Gt&&ee&&e.texStorage2D(i.TEXTURE_2D,ye,X,zt[0].width,zt[0].height);for(let kt=0,Fe=zt.length;kt<Fe;kt++)Et=zt[kt],Gt?ne&&e.texSubImage2D(i.TEXTURE_2D,kt,0,0,Et.width,Et.height,qt,re,Et.data):e.texImage2D(i.TEXTURE_2D,kt,X,Et.width,Et.height,0,qt,re,Et.data);S.generateMipmaps=!1}else Gt?(ee&&e.texStorage2D(i.TEXTURE_2D,ye,X,Mt.width,Mt.height),ne&&wt(S,Mt,qt,re)):e.texImage2D(i.TEXTURE_2D,0,X,Mt.width,Mt.height,0,qt,re,Mt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Gt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ye,X,zt[0].width,zt[0].height,Mt.depth);for(let kt=0,Fe=zt.length;kt<Fe;kt++)if(Et=zt[kt],S.format!==pi)if(qt!==null)if(Gt){if(ne)if(S.layerUpdates.size>0){let fe=rh(Et.width,Et.height,S.format,S.type);for(let ie of S.layerUpdates){let ze=Et.data.subarray(ie*fe/Et.data.BYTES_PER_ELEMENT,(ie+1)*fe/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,kt,0,0,ie,Et.width,Et.height,1,qt,ze)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,kt,0,0,0,Et.width,Et.height,Mt.depth,qt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,kt,X,Et.width,Et.height,Mt.depth,0,Et.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?ne&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,kt,0,0,0,Et.width,Et.height,Mt.depth,qt,re,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,kt,X,Et.width,Et.height,Mt.depth,0,qt,re,Et.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Gt&&ee&&e.texStorage2D(i.TEXTURE_2D,ye,X,zt[0].width,zt[0].height);for(let kt=0,Fe=zt.length;kt<Fe;kt++)Et=zt[kt],S.format!==pi?qt!==null?Gt?ne&&e.compressedTexSubImage2D(i.TEXTURE_2D,kt,0,0,Et.width,Et.height,qt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,kt,X,Et.width,Et.height,0,Et.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?ne&&e.texSubImage2D(i.TEXTURE_2D,kt,0,0,Et.width,Et.height,qt,re,Et.data):e.texImage2D(i.TEXTURE_2D,kt,X,Et.width,Et.height,0,qt,re,Et.data)}else if(S.isDataArrayTexture)if(Gt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ye,X,Mt.width,Mt.height,Mt.depth),ne)if(S.layerUpdates.size>0){let kt=rh(Mt.width,Mt.height,S.format,S.type);for(let Fe of S.layerUpdates){let fe=Mt.data.subarray(Fe*kt/Mt.data.BYTES_PER_ELEMENT,(Fe+1)*kt/Mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Fe,Mt.width,Mt.height,1,qt,re,fe)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,qt,re,Mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,X,Mt.width,Mt.height,Mt.depth,0,qt,re,Mt.data);else if(S.isData3DTexture)Gt?(ee&&e.texStorage3D(i.TEXTURE_3D,ye,X,Mt.width,Mt.height,Mt.depth),ne&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,qt,re,Mt.data)):e.texImage3D(i.TEXTURE_3D,0,X,Mt.width,Mt.height,Mt.depth,0,qt,re,Mt.data);else if(S.isFramebufferTexture){if(ee)if(Gt)e.texStorage2D(i.TEXTURE_2D,ye,X,Mt.width,Mt.height);else{let kt=Mt.width,Fe=Mt.height;for(let fe=0;fe<ye;fe++)e.texImage2D(i.TEXTURE_2D,fe,X,kt,Fe,0,qt,re,null),kt>>=1,Fe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let kt=i.canvas;if(kt.hasAttribute("layoutsubtree")||kt.setAttribute("layoutsubtree","true"),Mt.parentNode!==kt){kt.appendChild(Mt),u.add(S),kt.onpaint=Fe=>{let fe=Fe.changedElements;for(let ie of u)fe.includes(ie.image)&&(ie.needsUpdate=!0)},kt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Mt);else{let fe=i.RGBA,ie=i.RGBA,ze=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,fe,ie,ze,Mt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(zt.length>0){if(Gt&&ee){let kt=Ut(zt[0]);e.texStorage2D(i.TEXTURE_2D,ye,X,kt.width,kt.height)}for(let kt=0,Fe=zt.length;kt<Fe;kt++)Et=zt[kt],Gt?ne&&e.texSubImage2D(i.TEXTURE_2D,kt,0,0,qt,re,Et):e.texImage2D(i.TEXTURE_2D,kt,X,qt,re,Et);S.generateMipmaps=!1}else if(Gt){if(ee){let kt=Ut(Mt);e.texStorage2D(i.TEXTURE_2D,ye,X,kt.width,kt.height)}ne&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,qt,re,Mt)}else e.texImage2D(i.TEXTURE_2D,0,X,qt,re,Mt);E(S)&&S.mipmapsAutoUpdate===!0&&A(bt),Bt.__version=Nt.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function mt(L,S,Y){if(S.image.length!==6)return;let bt=ae(L,S),dt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+Y);let Nt=n.get(dt);if(dt.version!==Nt.__version||bt===!0){e.activeTexture(i.TEXTURE0+Y);let Bt=We.getPrimaries(We.workingColorSpace),vt=S.colorSpace===Gi?null:We.getPrimaries(S.colorSpace),Mt=S.colorSpace===Gi||Bt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let qt=S.isCompressedTexture||S.image[0].isCompressedTexture,re=S.image[0]&&S.image[0].isDataTexture,X=[];for(let ie=0;ie<6;ie++)!qt&&!re?X[ie]=b(S.image[ie],!0,s.maxCubemapSize):X[ie]=re?S.image[ie].image:S.image[ie],X[ie]=Rt(S,X[ie]);let Et=X[0],zt=r.convert(S.format,S.colorSpace),Gt=r.convert(S.type),ee=R(S.internalFormat,zt,Gt,S.normalized,S.colorSpace),ne=S.isVideoTexture!==!0,ye=Nt.__version===void 0||bt===!0,kt=dt.dataReady,Fe=x(S,Et);te(i.TEXTURE_CUBE_MAP,S);let fe;if(S.isDepthTexture){if(ee=y(S.format===Vi,S.type),ye)if(ne)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ee,Et.width,Et.height);else for(let ie=0;ie<6;ie++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ee,Et.width,Et.height,0,zt,Gt,null)}else if(qt){ne&&ye&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,ee,Et.width,Et.height);for(let ie=0;ie<6;ie++){fe=X[ie].mipmaps;for(let ze=0;ze<fe.length;ze++){let un=fe[ze];S.format!==pi?zt!==null?ne?kt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ze,0,0,un.width,un.height,zt,un.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ze,ee,un.width,un.height,0,un.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?kt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ze,0,0,un.width,un.height,zt,Gt,un.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ze,ee,un.width,un.height,0,zt,Gt,un.data)}}}else{if(fe=S.mipmaps,ne&&ye){fe.length>0&&Fe++;let ie=Ut(X[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,ee,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(re){ne?kt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,X[ie].width,X[ie].height,zt,Gt,X[ie].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ee,X[ie].width,X[ie].height,0,zt,Gt,X[ie].data);for(let ze=0;ze<fe.length;ze++){let mi=fe[ze].image[ie].image;ne?kt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ze+1,0,0,mi.width,mi.height,zt,Gt,mi.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ze+1,ee,mi.width,mi.height,0,zt,Gt,mi.data)}}else{ne?kt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,zt,Gt,X[ie]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ee,zt,Gt,X[ie]);for(let ze=0;ze<fe.length;ze++){let un=fe[ze];ne?kt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ze+1,0,0,zt,Gt,un.image[ie]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ze+1,ee,zt,Gt,un.image[ie])}}}E(S)&&S.mipmapsAutoUpdate===!0&&A(i.TEXTURE_CUBE_MAP),Nt.__version=dt.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function at(L,S,Y,bt,dt,Nt){let Bt=r.convert(Y.format,Y.colorSpace),vt=r.convert(Y.type),Mt=R(Y.internalFormat,Bt,vt,Y.normalized,Y.colorSpace),qt=n.get(S),re=n.get(Y);if(re.__renderTarget=S,!qt.__hasExternalTextures){let X=Math.max(1,S.width>>Nt),Et=Math.max(1,S.height>>Nt);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,Nt,Mt,X,Et,S.depth,0,Bt,vt,null):e.texImage2D(dt,Nt,Mt,X,Et,0,Bt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),K(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,bt,dt,re.__webglTexture,0,ht(S)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,bt,dt,re.__webglTexture,Nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(L,S,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,L),S.depthBuffer){let bt=S.depthTexture,dt=bt&&bt.isDepthTexture?bt.type:null,Nt=y(S.stencilBuffer,dt),Bt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;K(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(S),Nt,S.width,S.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(S),Nt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Bt,i.RENDERBUFFER,L)}else{let bt=S.textures;for(let dt=0;dt<bt.length;dt++){let Nt=bt[dt],Bt=r.convert(Nt.format,Nt.colorSpace),vt=r.convert(Nt.type),Mt=R(Nt.internalFormat,Bt,vt,Nt.normalized,Nt.colorSpace);K(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(S),Mt,S.width,S.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(S),Mt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Kt(L,S,Y){let bt=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let dt=n.get(S.depthTexture);dt.__renderTarget=S;let Nt=bt?S.depthTexture.image[0]:S.depthTexture.image;(!dt.__webglTexture||Nt.width!==S.width||Nt.height!==S.height)&&(Nt.width=S.width,Nt.height=S.height,S.depthTexture.needsUpdate=!0),bt?Ct(S.depthTexture,0):et(S.depthTexture,0);let Bt=dt.__webglTexture,vt=ht(S),Mt=bt?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,qt=S.depthTexture.format===Vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ni)K(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,qt,Mt,Bt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,qt,Mt,Bt,0);else if(S.depthTexture.format===Vi)K(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,qt,Mt,Bt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,qt,Mt,Bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ue(L){let S=n.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){let bt=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),bt){let dt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,bt.removeEventListener("dispose",dt)};bt.addEventListener("dispose",dt),S.__depthDisposeCallback=dt}S.__boundDepthTexture=bt}if(L.depthTexture&&!S.__autoAllocateDepthBuffer)if(Y)for(let bt=0;bt<6;bt++)Kt(S.__webglFramebuffer[bt],L,bt);else L.texture.mipmaps.length>0?Kt(S.__webglFramebuffer[0],L,0):Kt(S.__webglFramebuffer,L,0);else if(Y){S.__webglDepthbuffer=[];for(let bt=0;bt<6;bt++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[bt]),S.__webglDepthbuffer[bt]===void 0)S.__webglDepthbuffer[bt]=i.createRenderbuffer(),Xt(S.__webglDepthbuffer[bt],L,!1);else{let dt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=S.__webglDepthbuffer[bt];i.bindRenderbuffer(i.RENDERBUFFER,Nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,Nt)}}else if(L.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Xt(S.__webglDepthbuffer,L,!1);else{let dt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,Nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(L,S,Y){let bt=n.get(L);S!==void 0&&at(bt.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&ue(L)}function de(L){let S=L.texture,Y=n.get(L),bt=n.get(S);L.addEventListener("dispose",Z),P(L);let dt=L.textures,Nt=L.isWebGLCubeRenderTarget===!0,Bt=dt.length>1;if(Bt||(bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture()),bt.__version=S.version,o.memory.textures++),Nt){Y.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(S.mipmaps.length>0){Y.__webglFramebuffer[vt]=[];for(let Mt=0;Mt<S.mipmaps.length;Mt++)Y.__webglFramebuffer[vt][Mt]=i.createFramebuffer()}else Y.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let vt=0;vt<S.mipmaps.length;vt++)Y.__webglFramebuffer[vt]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(Bt)for(let vt=0,Mt=dt.length;vt<Mt;vt++){let qt=n.get(dt[vt]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&K(L)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let vt=0;vt<dt.length;vt++){let Mt=dt[vt];Y.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[vt]);let qt=r.convert(Mt.format,Mt.colorSpace),re=r.convert(Mt.type),X=R(Mt.internalFormat,qt,re,Mt.normalized,Mt.colorSpace,L.isXRRenderTarget===!0),Et=ht(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,X,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,Y.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Xt(Y.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Nt){e.bindTexture(i.TEXTURE_CUBE_MAP,bt.__webglTexture),te(i.TEXTURE_CUBE_MAP,S);for(let vt=0;vt<6;vt++)if(S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)at(Y.__webglFramebuffer[vt][Mt],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Mt);else at(Y.__webglFramebuffer[vt],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);E(S)?A(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(Bt){for(let vt=0,Mt=dt.length;vt<Mt;vt++){let qt=dt[vt],re=n.get(qt),X=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(X=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(X,re.__webglTexture),te(X,qt),at(Y.__webglFramebuffer,L,qt,i.COLOR_ATTACHMENT0+vt,X,0),E(qt)&&A(X)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(vt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,bt.__webglTexture),te(vt,S),S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)at(Y.__webglFramebuffer[Mt],L,S,i.COLOR_ATTACHMENT0,vt,Mt);else at(Y.__webglFramebuffer,L,S,i.COLOR_ATTACHMENT0,vt,0);E(S)?A(vt):S.mipmaps.length>0&&i.texParameteri(vt,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}L.depthBuffer&&ue(L)}function q(L){let S=L.textures;for(let Y=0,bt=S.length;Y<bt;Y++){let dt=S[Y];if(E(dt)&&dt.mipmapsAutoUpdate===!0){let Nt=F(L),Bt=n.get(dt).__webglTexture;e.bindTexture(Nt,Bt),A(Nt),e.unbindTexture()}}}let Le=[];function j(L){if(L.samples>0){if(K(L)===!1){let S=L.textures,Y=L.width,bt=L.height,dt=i.COLOR_BUFFER_BIT,Nt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Bt=n.get(L),vt=S.length>1;if(vt)for(let qt=0;qt<S.length;qt++)e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let qt=0;qt<S.length;qt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Bt.__webglColorRenderbuffer[qt]);let re=n.get(S[qt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,Y,bt,0,0,Y,bt,dt,i.NEAREST),l===!0&&(Le.length=0,Le.push(i.COLOR_ATTACHMENT0+qt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&Le.push(Nt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Le))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let qt=0;qt<S.length;qt++){e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.RENDERBUFFER,Bt.__webglColorRenderbuffer[qt]);let re=n.get(S[qt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qt,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let S=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ht(L){return Math.min(s.maxSamples,L.samples)}function K(L){let S=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Dt(L){let S=o.render.frame;h.get(L)!==S&&(h.set(L,S),L.update())}function Rt(L,S){let Y=L.colorSpace,bt=L.format,dt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==Rr&&Y!==Gi&&(We.getTransfer(Y)===Je?(bt!==pi||dt!==zn)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",Y)),S}function Ut(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=M,this.resetTextureUnits=yt,this.getTextureUnits=It,this.setTextureUnits=Vt,this.setTexture2D=et,this.setTexture2DArray=J,this.setTexture3D=Tt,this.setTextureCube=Ct,this.rebindTextures=$t,this.setupRenderTarget=de,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=at,this.useMultisampledRTT=K,this.dispose=U}function r_(i,t){function e(n,s=Gi){let r,o=We.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===Ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wc)return i.BYTE;if(n===Xc)return i.SHORT;if(n===ir)return i.UNSIGNED_SHORT;if(n===$a)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===fi)return i.HALF_FLOAT;if(n===Zc)return i.ALPHA;if(n===Jc)return i.RGB;if(n===pi)return i.RGBA;if(n===Ni)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===ja)return i.RED;if(n===tl)return i.RED_INTEGER;if(n===is)return i.RG;if(n===el)return i.RG_INTEGER;if(n===nl)return i.RGBA_INTEGER;if(n===uo||n===fo||n===po||n===mo)if(o===Je)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===il||n===sl||n===rl||n===ol)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===al||n===ll||n===cl||n===hl||n===ul||n===go||n===dl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===al||n===ll)return o===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===cl)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===hl)return r.COMPRESSED_R11_EAC;if(n===ul)return r.COMPRESSED_SIGNED_R11_EAC;if(n===go)return r.COMPRESSED_RG11_EAC;if(n===dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fl||n===pl||n===ml||n===gl||n===xl||n===_l||n===yl||n===vl||n===Ml||n===Sl||n===bl||n===wl||n===Al||n===El)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fl)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pl)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ml)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gl)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_l)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yl)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vl)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ml)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sl)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bl)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wl)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Al)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===El)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tl||n===Cl||n===Rl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Tl)return o===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pl||n===Il||n===xo||n===Fl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var o_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a_=`
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

}`,yh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Xr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ni({vertexShader:o_,fragmentShader:a_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new Nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vh=class extends vi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,w=typeof XRWebGLBinding<"u",p=new yh,g={},b=e.getContextAttributes(),E=null,A=null,F=[],R=[],y=new ct,x=null,P=null,T=new An;T.viewport=new en;let V=new An;V.viewport=new en;let Z=[T,V],O=new Wa,$=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(v){let et=F[v];return et===void 0&&(et=new Zs,F[v]=et),et.getTargetRaySpace()},this.getControllerGrip=function(v){let et=F[v];return et===void 0&&(et=new Zs,F[v]=et),et.getGripSpace()},this.getHand=function(v){let et=F[v];return et===void 0&&(et=new Zs,F[v]=et),et.getHandSpace()};function k(v){let et=R.indexOf(v.inputSource);if(et===-1)return;let J=F[et];J!==void 0&&(J.update(v.inputSource,v.frame,c||o),J.dispatchEvent({type:v.type,data:v.inputSource}))}function B(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",st);for(let v=0;v<F.length;v++){let et=R[v];et!==null&&(R[v]=null,F[v].disconnect(et))}$=null,U=null,p.reset();for(let v in g)delete g[v];if(t.setRenderTarget(E),d=null,f=null,u=null,s=null,A=null,M.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(y.width,y.height,!1),P!==null){let v=P.camera;v.fov=P.fov,v.zoom=P.zoom,v.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(v){r=v,n.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(v){a=v,n.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(v){c=v},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&w&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(v){if(s=v,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",B),s.addEventListener("inputsourceschange",st),b.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(y),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,Tt=null,Ct=null;b.depth&&(Ct=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=b.stencil?Vi:Ni,Tt=b.stencil?Ss:di);let Ft={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ft),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),A=new Gn(f.textureWidth,f.textureHeight,{format:pi,type:zn,depthTexture:new Ui(f.textureWidth,f.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let J={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new Gn(d.framebufferWidth,d.framebufferHeight,{format:pi,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),M.setContext(s),M.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function st(v){for(let et=0;et<v.removed.length;et++){let J=v.removed[et],Tt=R.indexOf(J);Tt>=0&&(R[Tt]=null,F[Tt].disconnect(J))}for(let et=0;et<v.added.length;et++){let J=v.added[et],Tt=R.indexOf(J);if(Tt===-1){for(let Ft=0;Ft<F.length;Ft++)if(Ft>=R.length){R.push(J),Tt=Ft;break}else if(R[Ft]===null){R[Ft]=J,Tt=Ft;break}if(Tt===-1)break}let Ct=F[Tt];Ct&&Ct.connect(J)}}function it(v,et){et===null?v.matrixWorld.copy(v.matrix):v.matrixWorld.multiplyMatrices(et.matrixWorld,v.matrix),v.matrixWorldInverse.copy(v.matrixWorld).invert()}this.updateCamera=function(v){if(s===null)return;let et=v.near,J=v.far;p.texture!==null&&(p.depthNear>0&&(et=p.depthNear),p.depthFar>0&&(J=p.depthFar)),O.near=V.near=T.near=et,O.far=V.far=T.far=J,($!==O.near||U!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),$=O.near,U=O.far),O.layers.mask=v.layers.mask|6,T.layers.mask=O.layers.mask&-5,V.layers.mask=O.layers.mask&-3;let Tt=v.parent,Ct=O.cameras;it(O,Tt);for(let Ft=0;Ft<Ct.length;Ft++)it(Ct[Ft],Tt);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),P===null&&v.isPerspectiveCamera&&(P={camera:v,fov:v.fov,zoom:v.zoom}),yt(v,O,Tt)};function yt(v,et,J){J===null?v.matrix.copy(et.matrixWorld):(v.matrix.copy(J.matrixWorld),v.matrix.invert(),v.matrix.multiply(et.matrixWorld)),v.matrix.decompose(v.position,v.quaternion,v.scale),v.updateMatrixWorld(!0),v.projectionMatrix.copy(et.projectionMatrix),v.projectionMatrixInverse.copy(et.projectionMatrixInverse),v.isPerspectiveCamera&&(v.fov=ga*2*Math.atan(1/v.projectionMatrix.elements[5]),v.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(v){l=v,f!==null&&(f.fixedFoveation=v),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=v)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(v){return g[v]};let It=null;function Vt(v,et){if(h=et.getViewerPose(c||o),m=et,h!==null){let J=h.views;d!==null&&(t.setRenderTargetFramebuffer(A,d.framebuffer),t.setRenderTarget(A));let Tt=!1;J.length!==O.cameras.length&&(O.cameras.length=0,Tt=!0);for(let jt=0;jt<J.length;jt++){let te=J[jt],ae=null;if(d!==null)ae=d.getViewport(te);else{let wt=u.getViewSubImage(f,te);ae=wt.viewport,jt===0&&(t.setRenderTargetTextures(A,wt.colorTexture,wt.depthStencilTexture),t.setRenderTarget(A))}let xt=Z[jt];xt===void 0&&(xt=new An,xt.layers.enable(jt),xt.viewport=new en,Z[jt]=xt),xt.matrix.fromArray(te.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(te.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(ae.x,ae.y,ae.width,ae.height),jt===0&&(O.matrix.copy(xt.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Tt===!0&&O.cameras.push(xt)}let Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){u=n.getBinding();let jt=u.getDepthInformation(J[0]);jt&&jt.isValid&&jt.texture&&p.init(jt,s.renderState)}if(Ct&&Ct.includes("camera-access")&&w){t.state.unbindTexture(),u=n.getBinding();for(let jt=0;jt<J.length;jt++){let te=J[jt].camera;if(te){let ae=g[te];ae||(ae=new Xr,g[te]=ae);let xt=u.getCameraImage(te);ae.sourceTexture=xt}}}}for(let J=0;J<F.length;J++){let Tt=R[J],Ct=F[J];Tt!==null&&Ct!==void 0&&Ct.update(Tt,et,c||o)}It&&It(v,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}let M=new zd;M.setAnimationLoop(Vt),this.setAnimationLoop=function(v){It=v},this.dispose=function(){}}},l_=new qe,Yd=new Ce;Yd.set(-1,0,0,0,1,0,0,0,1);function c_(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,nh(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,b,E,A){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,A)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),w(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,b,E):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===vn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===vn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let b=t.get(g),E=b.envMap,A=b.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(l_.makeRotationFromEuler(A)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Yd),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,b,E){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*b,p.scale.value=E*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,b){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===vn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function w(p,g){let b=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function h_(i,t,e,n){let s={},r={};function o(b,E){let A=E.program;n.uniformBlockBinding(b,A,s[b.id])}function a(b,E){let A=s[b.id];A===void 0&&(m(b),A=l(b),s[b.id]=A,b.addEventListener("dispose",p));let F=E.program;n.updateUBOMapping(b,F);let R=t.render.frame;r[b.id]!==R&&(c(b),r[b.id]=R)}function l(b){let E=i.createBuffer(),A=b.__size,F=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,A,F),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(b){let E=s[b.id],A=b.uniforms,F=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let R=0,y=A.length;R<y;R++){let x=A[R];if(Array.isArray(x))for(let P=0,T=x.length;P<T;P++)h(x[P],R,P,F);else h(x,R,0,F)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(b,E,A,F){if(f(b,E,A,F)===!0){let R=b.__offset,y=b.value;if(Array.isArray(y)){let x=0;for(let P=0;P<y.length;P++){let T=y[P],V=w(T,!0);u(T,b.__data,x),x+=V.storage/Float32Array.BYTES_PER_ELEMENT}}else u(y,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,R,b.__data)}}function u(b,E,A){typeof b=="number"||typeof b=="boolean"?E[A]=b:b.isMatrix3?(E[A]=b.elements[0],E[A+1]=b.elements[1],E[A+2]=b.elements[2],E[A+3]=0,E[A+4]=b.elements[3],E[A+5]=b.elements[4],E[A+6]=b.elements[5],E[A+7]=0,E[A+8]=b.elements[6],E[A+9]=b.elements[7],E[A+10]=b.elements[8],E[A+11]=0):ArrayBuffer.isView(b)?E.set(b.subarray(0,E.length-A),A):b.toArray(E,A)}function f(b,E,A,F){let R=b.value,y=E+"_"+A;if(Array.isArray(R)){F[y]===void 0&&(F[y]=[]);let x=F[y],P=!1;for(let T=0;T<R.length;T++)d(R[T],x,T)===!0&&(P=!0);return P}return d(R,F,y)}function d(b,E,A){if(E[A]===void 0)return typeof b=="number"||typeof b=="boolean"?E[A]=b:ArrayBuffer.isView(b)?E[A]=b.slice():E[A]=b.clone(),!0;{let F=E[A];if(typeof b=="number"||typeof b=="boolean"){if(F!==b)return E[A]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(F.equals(b)===!1)return F.copy(b),!0}}return!1}function m(b){let E=b.uniforms,A=0,F=16;for(let y=0,x=E.length;y<x;y++){let P=Array.isArray(E[y])?E[y]:[E[y]];for(let T=0,V=P.length;T<V;T++){let Z=P[T],O=Array.isArray(Z.value)?Z.value:[Z.value],$=Array.isArray(E[y])||Array.isArray(Z.value),U=A;for(let B=0,st=O.length;B<st;B++){let it=O[B],yt=w(it,$),It=A%F,Vt=It%yt.boundary,M=It+Vt;A+=Vt,M!==0&&F-M<yt.storage&&(A+=F-M),B===0&&(U=A),A+=yt.storage}let k=Z.type==="int"?Int32Array:Z.type==="uint"?Uint32Array:Float32Array;Z.__data=new k((A-U)/Float32Array.BYTES_PER_ELEMENT),Z.__offset=U}}let R=A%F;return R>0&&(A+=F-R),b.__size=A,b.__cache={},this}function w(b,E){let A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=16,A.storage=48):b.isMatrix4?(A.boundary=16,A.storage=64):b.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(A.boundary=16,A.storage=b.byteLength):Me("WebGLRenderer: Unsupported uniform value type.",b),E===!0&&(A.boundary=16,A.storage=Math.ceil(A.storage/16)*16),A}function p(b){let E=b.target;E.removeEventListener("dispose",p),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function g(){for(let b in s)i.deleteBuffer(s[b]);s={},r={}}return{bind:o,update:a,dispose:g}}var u_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ei=null;function d_(){return Ei===null&&(Ei=new kr(u_,16,16,is,fi),Ei.name="DFG_LUT",Ei.minFilter=Pn,Ei.magFilter=Pn,Ei.wrapS=_i,Ei.wrapT=_i,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}var zl=class{constructor(t={}){let{canvas:e=td(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=zn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let w=d,p=new Set([nl,el,tl]),g=new Set([zn,di,ir,Ss,Ka,Qa]),b=new Uint32Array(4),E=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[],intensity:[]},F=null,R=null,y=[],x=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,V=!1,Z=null,O=null,$=null,U=null;this._outputColorSpace=Rn;let k=0,B=0,st=null,it=-1,yt=null,It=new en,Vt=new en,M=null,v=new ge(0),et=0,J=e.width,Tt=e.height,Ct=1,Ft=null,oe=null,jt=new en(0,0,J,Tt),te=new en(0,0,J,Tt),ae=!1,xt=new Ki,wt=new Ma,St=!1,mt=!1,at=new qe,Xt=new G,Kt=new en,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function de(){return st===null?Ct:1}let q=n;function Le(_,C){return e.getContext(_,C)}let j,ht,K,Dt,Rt,Ut,L,S,Y,bt,dt,Nt,Bt,vt,Mt,qt,re,X,Et,zt,Gt,ee,ne;try{let _={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qa}`),e.addEventListener("webglcontextlost",Fe,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",ie,!1),q===null){let C="webgl2";if(q=Le(C,_),q===null)throw Le(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ye()}catch(_){throw e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),we("WebGLRenderer: "+_.message),_}function ye(){j=new bg(q),j.init(),Gt=new r_(q,j),ht=new dg(q,j,t,Gt),K=new i_(q,j),ht.reversedDepthBuffer&&f&&K.buffers.depth.setReversed(!0),O=q.createFramebuffer(),$=q.createFramebuffer(),U=q.createFramebuffer(),Dt=new Eg(q),Rt=new Hx,Ut=new s_(q,j,K,Rt,ht,Gt,Dt),L=new Sg(T),S=new Cp(q),ee=new hg(q,S),Y=new wg(q,S,Dt,ee),bt=new Cg(q,Y,S,ee,Dt),X=new Tg(q,ht,Ut),Mt=new fg(Rt),dt=new Gx(T,L,j,ht,ee,Mt),Nt=new c_(T,Rt),Bt=new Xx,vt=new Kx(j),re=new cg(T,L,K,bt,m,l),qt=new n_(T,bt,ht),ne=new h_(q,Dt,ht,K),Et=new ug(q,j,Dt),zt=new Ag(q,j,Dt),Dt.programs=dt.programs,T.capabilities=ht,T.extensions=j,T.properties=Rt,T.renderLists=Bt,T.shadowMap=qt,T.state=K,T.info=Dt}w!==zn&&(P=new Pg(w,e.width,e.height,a,s,r));let kt=new vh(T,q);this.xr=kt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let _=j.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=j.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return Ct},this.setPixelRatio=function(_){_!==void 0&&(Ct=_,this.setSize(J,Tt,!1))},this.getSize=function(_){return _.set(J,Tt)},this.setSize=function(_,C,z=!0){if(kt.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}J=_,Tt=C,e.width=Math.floor(_*Ct),e.height=Math.floor(C*Ct),z===!0&&(e.style.width=_+"px",e.style.height=C+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,_,C)},this.getDrawingBufferSize=function(_){return _.set(J*Ct,Tt*Ct).floor()},this.setDrawingBufferSize=function(_,C,z){J=_,Tt=C,Ct=z,e.width=Math.floor(_*z),e.height=Math.floor(C*z),this.setViewport(0,0,_,C)},this.setEffects=function(_){if(w===zn){we("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let C=0;C<_.length;C++)if(_[C].isOutputPass===!0){Me("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(It)},this.getViewport=function(_){return _.copy(jt)},this.setViewport=function(_,C,z,D){_.isVector4?jt.set(_.x,_.y,_.z,_.w):jt.set(_,C,z,D),K.viewport(It.copy(jt).multiplyScalar(de()).round())},this.getScissor=function(_){return _.copy(te)},this.setScissor=function(_,C,z,D){_.isVector4?te.set(_.x,_.y,_.z,_.w):te.set(_,C,z,D),K.scissor(Vt.copy(te).multiplyScalar(de()).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(_){K.setScissorTest(ae=_)},this.setOpaqueSort=function(_){Ft=_},this.setTransparentSort=function(_){oe=_},this.getClearColor=function(_){return _.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(_=!0,C=!0,z=!0){let D=0;if(_){let I=!1;if(st!==null){let Q=st.texture.format;I=p.has(Q)}if(I){let Q=st.texture.type,lt=g.has(Q),rt=re.getClearColor(),pt=re.getClearAlpha(),ft=rt.r,Lt=rt.g,gt=rt.b;lt?(b[0]=ft,b[1]=Lt,b[2]=gt,b[3]=pt,q.clearBufferuiv(q.COLOR,0,b)):(E[0]=ft,E[1]=Lt,E[2]=gt,E[3]=pt,q.clearBufferiv(q.COLOR,0,E))}else D|=q.COLOR_BUFFER_BIT}C&&(D|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(D|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D!==0&&q.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),Z=_},this.dispose=function(){e.removeEventListener("webglcontextlost",Fe,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),re.dispose(),Bt.dispose(),vt.dispose(),Ut.dispose(),Rt.dispose(),L.dispose(),bt.dispose(),Y.dispose(),ee.dispose(),ne.dispose(),dt.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",os),kt.removeEventListener("sessionend",Ao),On.stop()};function Fe(_){_.preventDefault(),Fr("WebGLRenderer: Context Lost."),V=!0}function fe(){Fr("WebGLRenderer: Context Restored."),V=!1;let _=Dt.autoReset,C=qt.enabled,z=qt.autoUpdate,D=qt.needsUpdate,I=qt.type;ye(),Dt.autoReset=_,qt.enabled=C,qt.autoUpdate=z,qt.needsUpdate=D,qt.type=I}function ie(_){we("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function ze(_){let C=_.target;C.removeEventListener("dispose",ze),un(C)}function un(_){mi(_),Rt.remove(_)}function mi(_){let C=Rt.get(_).programs;C!==void 0&&(C.forEach(function(z){dt.releaseProgram(z)}),_.isShaderMaterial&&dt.releaseShaderCache(_))}this.renderBufferDirect=function(_,C,z,D,I,Q){C===null&&(C=ue);let lt=I.isMesh&&I.matrixWorld.determinantAffine()<0,rt=nt(_,C,z,D,I);K.setMaterial(D,lt);let pt=z.index,ft=1;if(D.wireframe===!0){if(pt=Y.getWireframeAttribute(z),pt===void 0)return;ft=2}let Lt=z.drawRange,gt=z.attributes.position,ut=Lt.start*ft,Ht=(Lt.start+Lt.count)*ft;Q!==null&&(ut=Math.max(ut,Q.start*ft),Ht=Math.min(Ht,(Q.start+Q.count)*ft)),pt!==null?(ut=Math.max(ut,0),Ht=Math.min(Ht,pt.count)):gt!=null&&(ut=Math.max(ut,0),Ht=Math.min(Ht,gt.count));let Jt=Ht-ut;if(Jt<0||Jt===1/0)return;ee.setup(I,D,rt,z,pt);let le,he=Et;if(pt!==null&&(le=S.get(pt),he=zt,he.setIndex(le)),I.isMesh)D.wireframe===!0?(K.setLineWidth(D.wireframeLinewidth*de()),he.setMode(q.LINES)):he.setMode(q.TRIANGLES);else if(I.isLine){let ve=D.linewidth;ve===void 0&&(ve=1),K.setLineWidth(ve*de()),I.isLineSegments?he.setMode(q.LINES):I.isLineLoop?he.setMode(q.LINE_LOOP):he.setMode(q.LINE_STRIP)}else I.isPoints?he.setMode(q.POINTS):I.isSprite&&he.setMode(q.TRIANGLES);if(I.isBatchedMesh)if(j.get("WEBGL_multi_draw"))he.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let ve=I._multiDrawStarts,Wt=I._multiDrawCounts,Ge=I._multiDrawCount,be=pt?S.get(pt).bytesPerElement:1,Zt=Rt.get(D).currentProgram.getUniforms();for(let ce=0;ce<Ge;ce++)Zt.setValue(q,"_gl_DrawID",ce),he.render(ve[ce]/be,Wt[ce])}else if(I.isInstancedMesh)he.renderInstances(ut,Jt,I.count);else if(z.isInstancedBufferGeometry){let ve=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Wt=Math.min(z.instanceCount,ve);he.renderInstances(ut,Jt,Wt)}else he.render(ut,Jt)};function cr(_,C,z,D){Z!==null&&_.isNodeMaterial&&Z.setObject(D,_),St===!0&&Mt.setState(_,z,!1),_.transparent===!0&&_.side===He&&_.forceSinglePass===!1?(_.side=vn,_.needsUpdate=!0,W(_,C,D),_.side=ns,_.needsUpdate=!0,W(_,C,D),_.side=He):W(_,C,D)}this.compile=function(_,C,z=null){z===null&&(z=_),Z!==null&&Z.renderStart(_,C,z),R=vt.get(z),R.init(C),x.push(R),z.traverseVisible(function(I){I.isLight&&I.layers.test(C.layers)&&(R.pushLight(I),I.castShadow&&R.pushShadow(I))}),_!==z&&_.traverseVisible(function(I){I.isLight&&I.layers.test(C.layers)&&(R.pushLight(I),I.castShadow&&R.pushShadow(I))}),R.setupLights(),Z!==null&&Z.updateLights(R.state.lightsArray),mt=this.localClippingEnabled,St=Mt.init(this.clippingPlanes,mt),St===!0&&Mt.setGlobalState(this.clippingPlanes,C),Z!==null&&qt.render(R.state.shadowsArray,z,C);let D=new Set;return _.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let Q=I.material;if(Q)if(Array.isArray(Q))for(let lt=0;lt<Q.length;lt++){let rt=Q[lt];cr(rt,z,C,I),D.add(rt)}else cr(Q,z,C,I),D.add(Q)}),R=x.pop(),Z!==null&&Z.renderEnd(),D},this.compileAsync=function(_,C,z=null){let D=this.compile(_,C,z);return new Promise(I=>{function Q(){if(D.forEach(function(lt){let pt=Rt.get(lt).currentProgram;(pt===void 0||pt.isReady())&&D.delete(lt)}),D.size===0){I(_);return}setTimeout(Q,10)}j.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let hr=null;function rs(_){hr&&hr(_)}function os(){On.stop()}function Ao(){On.start()}let On=new zd;On.setAnimationLoop(rs),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(_){hr=_,kt.setAnimationLoop(_),_===null?On.stop():On.start()},kt.addEventListener("sessionstart",os),kt.addEventListener("sessionend",Ao),this.render=function(_,C){if(C!==void 0&&C.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Z!==null&&Z.renderStart(_,C);let z=kt.enabled===!0&&kt.isPresenting===!0,D=P!==null&&(st===null||z)&&P.begin(T,st);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(C),C=kt.getCamera()),_.isScene===!0&&_.onBeforeRender(T,_,C,st),R=vt.get(_,x.length),R.init(C),R.state.textureUnits=Ut.getTextureUnits(),x.push(R),at.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),C.isArrayCamera?wt.setFromArrayCamera(C):xt.setFromProjectionMatrix(at,$n,C.reversedDepth),mt=this.localClippingEnabled,St=Mt.init(this.clippingPlanes,mt),F=Bt.get(_,y.length),F.init(),y.push(F),this.info.render.frame++,kt.enabled===!0&&kt.isPresenting===!0){let lt=T.xr.getDepthSensingMesh();lt!==null&&ur(lt,C,-1/0,T.sortObjects)}ur(_,C,0,T.sortObjects),F.finish(),Z!==null&&Z.updateLights(R.state.lightsArray),T.sortObjects===!0&&F.sort(Ft,oe),$t=kt.enabled===!1||kt.isPresenting===!1||kt.hasDepthSensing()===!1,$t&&re.addToRenderList(F,_),this.info.autoReset===!0&&this.info.reset(),St===!0&&Mt.beginShadows();let I=R.state.shadowsArray;if(qt.render(I,_,C),St===!0&&Mt.endShadows(),(D&&P.hasRenderPass())===!1){let lt=F.opaque,rt=F.transmissive;if(R.setupLights(),C.isArrayCamera){let pt=C.cameras;if(rt.length>0)for(let ft=0,Lt=pt.length;ft<Lt;ft++){let gt=pt[ft];To(lt,rt,_,gt)}$t&&re.render(_);for(let ft=0,Lt=pt.length;ft<Lt;ft++){let gt=pt[ft];Eo(F,_,gt,gt.viewport)}}else rt.length>0&&To(lt,rt,_,C),$t&&re.render(_),Eo(F,_,C)}st!==null&&B===0&&(Ut.updateMultisampleRenderTarget(st),Ut.updateRenderTargetMipmap(st)),D&&P.end(T),_.isScene===!0&&_.onAfterRender(T,_,C),ee.resetDefaultState(),it=-1,yt=null,x.pop(),x.length>0?(R=x[x.length-1],Ut.setTextureUnits(R.state.textureUnits),St===!0&&Mt.setGlobalState(T.clippingPlanes,R.state.camera)):R=null,y.pop(),y.length>0?F=y[y.length-1]:F=null,Z!==null&&Z.renderEnd()};function ur(_,C,z,D){if(_.visible===!1)return;if(_.layers.test(C.layers)){if(_.isGroup)z=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(C);else if(_.isLight)R.pushLight(_),_.castShadow&&R.pushShadow(_);else if(_.isSprite){let lt=C.isArrayCamera?wt:xt;if(!_.frustumCulled||_.intersectsFrustum(lt)){D&&Kt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(at);let rt=bt.update(_),pt=_.material;pt.visible&&F.push(_,rt,pt,z,Kt.z,null,C)}}else if(_.isMesh||_.isLine||_.isPoints){let lt=C.isArrayCamera?wt:xt;if(!_.frustumCulled||_.intersectsFrustum(lt)){let rt=bt.update(_),pt=_.material;if(D&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Kt.copy(_.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),Kt.copy(rt.boundingSphere.center)),Kt.applyMatrix4(_.matrixWorld).applyMatrix4(at)),Array.isArray(pt)){let ft=rt.groups;for(let Lt=0,gt=ft.length;Lt<gt;Lt++){let ut=ft[Lt],Ht=pt[ut.materialIndex];Ht&&Ht.visible&&F.push(_,rt,Ht,z,Kt.z,ut,C)}}else pt.visible&&F.push(_,rt,pt,z,Kt.z,null,C)}}}let Q=_.children;for(let lt=0,rt=Q.length;lt<rt;lt++)ur(Q[lt],C,z,D)}function Eo(_,C,z,D){let{opaque:I,transmissive:Q,transparent:lt}=_;R.setupLightsView(z),St===!0&&Mt.setGlobalState(T.clippingPlanes,z),D&&K.viewport(It.copy(D)),I.length>0&&dr(I,C,z),Q.length>0&&dr(Q,C,z),lt.length>0&&dr(lt,C,z),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function To(_,C,z,D){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[D.id]===void 0){let ut=j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[D.id]=new Gn(1,1,{generateMipmaps:!0,type:ut?fi:zn,minFilter:ki,samples:Math.max(4,ht.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}let Q=R.state.transmissionRenderTarget[D.id],lt=D.viewport||It;Q.setSize(lt.z*T.transmissionResolutionScale,lt.w*T.transmissionResolutionScale);let rt=T.getRenderTarget(),pt=T.getActiveCubeFace(),ft=T.getActiveMipmapLevel();T.setRenderTarget(Q),T.getClearColor(v),et=T.getClearAlpha(),et<1&&T.setClearColor(16777215,.5),T.clear(),$t&&re.render(z);let Lt=T.toneMapping;T.toneMapping=Ai;let gt=D.viewport;if(D.viewport!==void 0&&(D.viewport=void 0),R.setupLightsView(D),St===!0&&Mt.setGlobalState(T.clippingPlanes,D),dr(_,z,D),Ut.updateMultisampleRenderTarget(Q),Ut.updateRenderTargetMipmap(Q),j.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Ht=0,Jt=C.length;Ht<Jt;Ht++){let le=C[Ht],{object:he,geometry:ve,material:Wt,group:Ge}=le;if(Wt.side===He&&he.layers.test(D.layers)){let be=Wt.side;Wt.side=vn,Wt.needsUpdate=!0,Wl(he,z,D,ve,Wt,Ge),Wt.side=be,Wt.needsUpdate=!0,ut=!0}}ut===!0&&(Ut.updateMultisampleRenderTarget(Q),Ut.updateRenderTargetMipmap(Q))}T.setRenderTarget(rt,pt,ft),T.setClearColor(v,et),gt!==void 0&&(D.viewport=gt),T.toneMapping=Lt}function dr(_,C,z){let D=C.isScene===!0?C.overrideMaterial:null;for(let I=0,Q=_.length;I<Q;I++){let lt=_[I],{object:rt,geometry:pt,group:ft}=lt,Lt=lt.material;Lt.allowOverride===!0&&D!==null&&(Lt=D),rt.layers.test(z.layers)&&Wl(rt,C,z,pt,Lt,ft)}}function Wl(_,C,z,D,I,Q){Z!==null&&I.isNodeMaterial&&Z.setObject(_,I),_.onBeforeRender(T,C,z,D,I,Q),_.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),I.onBeforeRender(T,C,z,D,_,Q),I.transparent===!0&&I.side===He&&I.forceSinglePass===!1?(I.side=vn,I.needsUpdate=!0,T.renderBufferDirect(z,C,D,I,_,Q),I.side=ns,I.needsUpdate=!0,T.renderBufferDirect(z,C,D,I,_,Q),I.side=He):T.renderBufferDirect(z,C,D,I,_,Q),_.onAfterRender(T,C,z,D,I,Q)}function Xl(_){let C=0;for(let z of _)z.texture!==null&&C++;return C}function W(_,C,z){C.isScene!==!0&&(C=ue);let D=Rt.get(_),I=R.state.lights,Q=R.state.shadowsArray,lt=I.state.version,rt=dt.getParameters(_,I.state,Q,C,z,R.state.lightProbeGridArray),pt=dt.getProgramCacheKey(rt),ft=D.programs;D.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,D.fog=C.fog;let Lt=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;D.envMap=L.get(_.envMap||D.environment,Lt),D.envMapRotation=D.environment!==null&&_.envMap===null?C.environmentRotation:_.envMapRotation,ft===void 0&&(_.addEventListener("dispose",ze),ft=new Map,D.programs=ft,D.programVariants=new Map);let gt=ft.get(pt);if(gt!==void 0){if(D.currentProgram===gt&&D.lightsStateVersion===lt)return N(_,rt),gt}else rt.uniforms=dt.getUniforms(_),Z!==null&&_.isNodeMaterial&&Z.build(_,z,rt),_.onBeforeCompile(rt,T),gt=dt.acquireProgram(rt,pt),ft.set(pt,gt),D.uniforms=rt.uniforms;let ut=D.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(ut.clippingPlanes=Mt.uniform),N(_,rt),D.needsLights=_t(_),D.lightsStateVersion=lt,D.needsLights&&(ut.ambientLightColor.value=I.state.ambient,ut.sunLights.value=I.state.sun,ut.sunLightShadows.value=I.state.sunShadow,ut.directionalLights.value=I.state.directional,ut.directionalLightShadows.value=I.state.directionalShadow,ut.spotLights.value=I.state.spot,ut.spotLightShadows.value=I.state.spotShadow,ut.rectAreaLights.value=I.state.rectArea,ut.ltc_1.value=I.state.rectAreaLTC1,ut.ltc_2.value=I.state.rectAreaLTC2,ut.pointLights.value=I.state.point,ut.pointLightShadows.value=I.state.pointShadow,ut.hemisphereLights.value=I.state.hemi,ut.sunShadowMatrix.value=I.state.sunShadowMatrix,ut.sunShadowCascade.value=I.state.sunShadowCascade,ut.directionalShadowMatrix.value=I.state.directionalShadowMatrix,ut.spotLightMatrix.value=I.state.spotLightMatrix,ut.spotLightMap.value=I.state.spotLightMap,ut.pointShadowMatrix.value=I.state.pointShadowMatrix),D.numLightProbeGrids=Xl(R.state.lightProbeGridArray),D.currentProgram=gt,D.uniformsList=null,gt}function tt(_,C,z,D,I){let Q=Rt.get(_),lt=Q.currentProgram.id+","+D+","+I,rt=Q.programVariants.get(lt);return rt===void 0?(rt=W(_,C,z),Q.programVariants.set(lt,rt)):(Q.currentProgram=rt,Q.uniformsList=null,Q.outputColorSpace=D,Q.toneMapping=I),rt}function H(_){if(_.uniformsList===null){let C=_.currentProgram.getUniforms();_.uniformsList=sr.seqWithValue(C.seq,_.uniforms)}return _.uniformsList}function N(_,C){let z=Rt.get(_);z.outputColorSpace=C.outputColorSpace,z.batching=C.batching,z.batchingColor=C.batchingColor,z.instancing=C.instancing,z.instancingColor=C.instancingColor,z.instancingMorph=C.instancingMorph,z.skinning=C.skinning,z.morphTargets=C.morphTargets,z.morphNormals=C.morphNormals,z.morphColors=C.morphColors,z.morphTargetsCount=C.morphTargetsCount,z.numClippingPlanes=C.numClippingPlanes,z.numIntersection=C.numClipIntersection,z.vertexAlphas=C.vertexAlphas,z.vertexTangents=C.vertexTangents,z.toneMapping=C.toneMapping}function nt(_,C,z,D,I){C.isScene!==!0&&(C=ue),Ut.resetTextureUnits();let Q=C.fog,lt=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?C.environment:null,rt=st===null?T.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:We.workingColorSpace,pt=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,ft=L.get(D.envMap||lt,pt),Lt=D.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,gt=!!z.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),ut=!!z.morphAttributes.position,Ht=!!z.morphAttributes.normal,Jt=!!z.morphAttributes.color,le=Ai;D.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(le=T.toneMapping);let he=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ve=he!==void 0?he.length:0,Wt=Rt.get(D),Ge=R.state.lights;if(St===!0&&(mt===!0||_!==yt)){let Ke=_===yt&&D.id===it;Mt.setState(D,_,Ke)}let be=!1,Zt=!1;D.version===Wt.__version?Wt.needsLights&&Wt.lightsStateVersion!==Ge.state.version||I.isBatchedMesh&&Wt.batching===!1||!I.isBatchedMesh&&Wt.batching===!0||I.isBatchedMesh&&Wt.batchingColor===!0&&I._colorsTexture===null||I.isBatchedMesh&&Wt.batchingColor===!1&&I._colorsTexture!==null||I.isInstancedMesh&&Wt.instancing===!1||!I.isInstancedMesh&&Wt.instancing===!0||I.isSkinnedMesh&&Wt.skinning===!1||!I.isSkinnedMesh&&Wt.skinning===!0||I.isInstancedMesh&&Wt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Wt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Wt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Wt.instancingMorph===!1&&I.morphTexture!==null||Wt.envMap!==ft||D.fog===!0&&Wt.fog!==Q||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Mt.numPlanes||Wt.numIntersection!==Mt.numIntersection)||Wt.vertexAlphas!==Lt||Wt.vertexTangents!==gt||Wt.morphTargets!==ut||Wt.morphNormals!==Ht||Wt.morphColors!==Jt||Wt.morphTargetsCount!==ve||Wt.numLightProbeGrids!==Xl(R.state.lightProbeGridArray)?be=!0:(Wt.outputColorSpace!==rt||Wt.toneMapping!==le)&&(Zt=!0):(be=!0,Wt.__version=D.version);let ce=Wt.currentProgram;(be===!0||Zt===!0)&&(ce=Zt===!0?tt(D,C,I,rt,le):W(D,C,I),Z&&D.isNodeMaterial&&Z.onUpdateProgram(D,ce,Wt));let Pe=!1,nn=!1,$e=!1,_e=ce.getUniforms(),je=Wt.uniforms;if(K.useProgram(ce.program)&&(Pe=!0,nn=!0,$e=!0),D.id!==it&&(it=D.id,nn=!0),Pe||yt!==_){K.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),_e.setValue(q,"projectionMatrix",_.projectionMatrix),_e.setValue(q,"viewMatrix",_.matrixWorldInverse);let rn=_e.map.cameraPosition;rn!==void 0&&rn.setValue(q,Xt.setFromMatrixPosition(_.matrixWorld)),ht.logarithmicDepthBuffer&&_e.setValue(q,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&_e.setValue(q,"isOrthographic",_.isOrthographicCamera===!0),yt!==_&&(yt=_,nn=!0,$e=!0)}if(Wt.needsLights&&(Ge.state.sunShadowMap.length>0&&_e.setValue(q,"sunShadowMap",Ge.state.sunShadowMap,Ut),Ge.state.directionalShadowMap.length>0&&_e.setValue(q,"directionalShadowMap",Ge.state.directionalShadowMap,Ut),Ge.state.spotShadowMap.length>0&&_e.setValue(q,"spotShadowMap",Ge.state.spotShadowMap,Ut),Ge.state.pointShadowMap.length>0&&_e.setValue(q,"pointShadowMap",Ge.state.pointShadowMap,Ut)),I.isSkinnedMesh){_e.setOptional(q,I,"bindMatrix"),_e.setOptional(q,I,"bindMatrixInverse");let Ke=I.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),_e.setValue(q,"boneTexture",Ke.boneTexture,Ut))}I.isBatchedMesh&&(_e.setOptional(q,I,"batchingTexture"),_e.setValue(q,"batchingTexture",I._matricesTexture,Ut),_e.setOptional(q,I,"batchingIdTexture"),_e.setValue(q,"batchingIdTexture",I._indirectTexture,Ut),_e.setOptional(q,I,"batchingColorTexture"),I._colorsTexture!==null&&_e.setValue(q,"batchingColorTexture",I._colorsTexture,Ut));let Tn=z.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&X.update(I,z,ce),(nn||Wt.receiveShadow!==I.receiveShadow)&&(Wt.receiveShadow=I.receiveShadow,_e.setValue(q,"receiveShadow",I.receiveShadow)),(D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial)&&D.envMap===null&&C.environment!==null&&(je.envMapIntensity.value=C.environmentIntensity),je.dfgLUT!==void 0&&(je.dfgLUT.value=d_()),nn){if(_e.setValue(q,"toneMappingExposure",T.toneMappingExposure),Wt.needsLights&&ot(je,$e),Q&&D.fog===!0&&Nt.refreshFogUniforms(je,Q),Nt.refreshMaterialUniforms(je,D,Ct,Tt,R.state.transmissionRenderTarget[_.id]),Wt.needsLights&&Wt.numLightProbeGrids>0){let Ke=A,rn=0;for(let Bn of R.state.lightProbeGridArray)Bn.texture!==null&&(Ke.textures[rn]=Bn.texture,Ke.min[rn]=Bn.boundingBox.min,Ke.max[rn]=Bn.boundingBox.max,Ke.resolution[rn]=Bn.resolution,Ke.intensity[rn]=Bn.intensity,rn++);for(let Bn in Ke)Ke[Bn].length=rn;je.probesSH.value=Ke.textures,je.probesMin.value=Ke.min,je.probesMax.value=Ke.max,je.probesResolution.value=Ke.resolution,je.probesIntensity.value=Ke.intensity}sr.upload(q,H(Wt),je,Ut)}if(D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(sr.upload(q,H(Wt),je,Ut),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&_e.setValue(q,"center",I.center),_e.setValue(q,"modelViewMatrix",I.modelViewMatrix),_e.setValue(q,"normalMatrix",I.normalMatrix),_e.setValue(q,"modelMatrix",I.matrixWorld),D.uniformsGroups!==void 0){let Ke=D.uniformsGroups;for(let rn=0,Bn=Ke.length;rn<Bn;rn++){let fr=Ke[rn];ne.update(fr,ce),ne.bind(fr,ce)}}return ce}function ot(_,C){_.ambientLightColor.needsUpdate=C,_.sunLights.needsUpdate=C,_.sunLightShadows.needsUpdate=C,_.directionalLights.needsUpdate=C,_.directionalLightShadows.needsUpdate=C,_.pointLights.needsUpdate=C,_.pointLightShadows.needsUpdate=C,_.spotLights.needsUpdate=C,_.spotLightShadows.needsUpdate=C,_.rectAreaLights.needsUpdate=C,_.hemisphereLights.needsUpdate=C}function _t(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(_,C,z){let D=Rt.get(_);D.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,D.__autoAllocateDepthBuffer===!1&&(D.__useRenderToTexture=!1),Rt.get(_.texture).__webglTexture=C,Rt.get(_.depthTexture).__webglTexture=D.__autoAllocateDepthBuffer?void 0:z,D.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,C){let z=Rt.get(_);z.__webglFramebuffer=C,z.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(_,C=0,z=0){st=_,k=C,B=z;let D=null,I=!1,Q=!1;if(_){let rt=Rt.get(_);if(rt.__useDefaultFramebuffer!==void 0){K.bindFramebuffer(q.FRAMEBUFFER,rt.__webglFramebuffer),It.copy(_.viewport),Vt.copy(_.scissor),M=_.scissorTest,K.viewport(It),K.scissor(Vt),K.setScissorTest(M),it=-1;return}else if(rt.__webglFramebuffer===void 0)Ut.setupRenderTarget(_);else if(rt.__hasExternalTextures)Ut.rebindTextures(_,Rt.get(_.texture).__webglTexture,Rt.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Lt=_.depthTexture;if(rt.__boundDepthTexture!==Lt){if(Lt!==null&&Rt.has(Lt)&&(_.width!==Lt.image.width||_.height!==Lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ut.setupDepthRenderbuffer(_)}}let pt=_.texture;(pt.isData3DTexture||pt.isDataArrayTexture||pt.isCompressedArrayTexture)&&(Q=!0);let ft=Rt.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(ft[C])?D=ft[C][z]:D=ft[C],I=!0):_.samples>0&&Ut.useMultisampledRTT(_)===!1?D=Rt.get(_).__webglMultisampledFramebuffer:Array.isArray(ft)?D=ft[z]:D=ft,It.copy(_.viewport),Vt.copy(_.scissor),M=_.scissorTest}else It.copy(jt).multiplyScalar(Ct).floor(),Vt.copy(te).multiplyScalar(Ct).floor(),M=ae;if(z!==0&&(D=O),K.bindFramebuffer(q.FRAMEBUFFER,D)&&K.drawBuffers(_,D),K.viewport(It),K.scissor(Vt),K.setScissorTest(M),I){let rt=Rt.get(_.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+C,rt.__webglTexture,z)}else if(Q){let rt=C;for(let pt=0;pt<_.textures.length;pt++){let ft=Rt.get(_.textures[pt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+pt,ft.__webglTexture,z,rt)}}else if(_!==null&&z!==0){let rt=Rt.get(_.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,rt.__webglTexture,z)}it=-1};function At(_){let C=Rt.get(_);return(C.__readFormat!==_.format||C.__readType!==_.type)&&(C.__readFormat=_.format,C.__readType=_.type,C.__formatReadable=ht.textureFormatReadable(_.format),C.__typeReadable=ht.textureTypeReadable(_.type)),C}this.readRenderTargetPixels=function(_,C,z,D,I,Q,lt,rt=0){if(!(_&&_.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Rt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),Array.isArray(pt)&&(pt=pt[0]),pt){let ft=K.getBoundFramebuffer(q.READ_FRAMEBUFFER);K.bindFramebuffer(q.READ_FRAMEBUFFER,pt);try{let Lt=_.textures[rt],gt=Lt.format,ut=Lt.type;_.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+rt);let Ht=At(Lt);if(Ht.__formatReadable===!1){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ht.__typeReadable===!1){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=_.width-D&&z>=0&&z<=_.height-I&&q.readPixels(C,z,D,I,Gt.convert(gt),Gt.convert(ut),Q)}finally{K.bindFramebuffer(q.READ_FRAMEBUFFER,ft)}}},this.readRenderTargetPixelsAsync=async function(_,C,z,D,I,Q,lt,rt=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=Rt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),Array.isArray(pt)&&(pt=pt[0]),pt)if(C>=0&&C<=_.width-D&&z>=0&&z<=_.height-I){let ft=K.getBoundFramebuffer(q.READ_FRAMEBUFFER);K.bindFramebuffer(q.READ_FRAMEBUFFER,pt);let Lt=_.textures[rt],gt=Lt.format,ut=Lt.type;_.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+rt);let Ht=At(Lt);if(Ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Jt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Jt),q.bufferData(q.PIXEL_PACK_BUFFER,Q.byteLength,q.STREAM_READ),q.readPixels(C,z,D,I,Gt.convert(gt),Gt.convert(ut),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),K.bindFramebuffer(q.READ_FRAMEBUFFER,ft);let le=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await nd(q,le,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Jt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Q),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(Jt),q.deleteSync(le),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,C=null,z=0){let D=Math.pow(2,-z),I=Math.floor(_.image.width*D),Q=Math.floor(_.image.height*D),lt=C!==null?C.x:0,rt=C!==null?C.y:0;Ut.setTexture2D(_,0),K.activeTexture(q.TEXTURE0),q.copyTexSubImage2D(q.TEXTURE_2D,z,0,0,lt,rt,I,Q),K.unbindTexture()},this.copyTextureToTexture=function(_,C,z=null,D=null,I=0,Q=0){let lt,rt,pt,ft,Lt,gt,ut,Ht,Jt,le=_.isCompressedTexture?_.mipmaps[Q]:_.image;if(z!==null)lt=z.max.x-z.min.x,rt=z.max.y-z.min.y,pt=z.isBox3?z.max.z-z.min.z:1,ft=z.min.x,Lt=z.min.y,gt=z.isBox3?z.min.z:0;else{let _e=Math.pow(2,-I);lt=Math.floor(_.width*_e),rt=Math.floor(_.height*_e),_.isDataArrayTexture?pt=le.depth:_.isData3DTexture?pt=Math.floor(le.depth*_e):pt=1,ft=0,Lt=0,gt=0}D!==null?(ut=D.x,Ht=D.y,Jt=D.z):(ut=0,Ht=0,Jt=0);let he=Gt.convert(C.format),ve=Gt.convert(C.type),Wt;C.isData3DTexture?(Ut.setTexture3D(C,0),Wt=q.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(Ut.setTexture2DArray(C,0),Wt=q.TEXTURE_2D_ARRAY):(Ut.setTexture2D(C,0),Wt=q.TEXTURE_2D),K.activeTexture(q.TEXTURE0),K.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,C.flipY),K.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),K.pixelStorei(q.UNPACK_ALIGNMENT,C.unpackAlignment);let Ge=K.getParameter(q.UNPACK_ROW_LENGTH),be=K.getParameter(q.UNPACK_IMAGE_HEIGHT),Zt=K.getParameter(q.UNPACK_SKIP_PIXELS),ce=K.getParameter(q.UNPACK_SKIP_ROWS),Pe=K.getParameter(q.UNPACK_SKIP_IMAGES);K.pixelStorei(q.UNPACK_ROW_LENGTH,le.width),K.pixelStorei(q.UNPACK_IMAGE_HEIGHT,le.height),K.pixelStorei(q.UNPACK_SKIP_PIXELS,ft),K.pixelStorei(q.UNPACK_SKIP_ROWS,Lt),K.pixelStorei(q.UNPACK_SKIP_IMAGES,gt);let nn=_.isDataArrayTexture||_.isData3DTexture,$e=C.isDataArrayTexture||C.isData3DTexture;if(_.isDepthTexture){let _e=Rt.get(_),je=Rt.get(C),Tn=Rt.get(_e.__renderTarget),Ke=Rt.get(je.__renderTarget);K.bindFramebuffer(q.READ_FRAMEBUFFER,Tn.__webglFramebuffer),K.bindFramebuffer(q.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let rn=0;rn<pt;rn++)nn&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Rt.get(_).__webglTexture,I,gt+rn),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Rt.get(C).__webglTexture,Q,Jt+rn)),q.blitFramebuffer(ft,Lt,ft+lt,Lt+rt,ut,Ht,ut+lt,Ht+rt,q.DEPTH_BUFFER_BIT,q.NEAREST);K.bindFramebuffer(q.READ_FRAMEBUFFER,null),K.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(I!==0||_.isRenderTargetTexture||Rt.has(_)){let _e=Rt.get(_),je=Rt.get(C);K.bindFramebuffer(q.READ_FRAMEBUFFER,$),K.bindFramebuffer(q.DRAW_FRAMEBUFFER,U);for(let Tn=0;Tn<pt;Tn++)nn?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,_e.__webglTexture,I,gt+Tn):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,_e.__webglTexture,I),$e?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,je.__webglTexture,Q,Jt+Tn):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,je.__webglTexture,Q),I!==0?q.blitFramebuffer(ft,Lt,ft+lt,Lt+rt,ut,Ht,ut+lt,Ht+rt,q.COLOR_BUFFER_BIT,q.NEAREST):$e?q.copyTexSubImage3D(Wt,Q,ut,Ht,Jt+Tn,ft,Lt,lt,rt):q.copyTexSubImage2D(Wt,Q,ut,Ht,ft,Lt,lt,rt);K.bindFramebuffer(q.READ_FRAMEBUFFER,null),K.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else $e?_.isDataTexture||_.isData3DTexture?q.texSubImage3D(Wt,Q,ut,Ht,Jt,lt,rt,pt,he,ve,le.data):C.isCompressedArrayTexture?q.compressedTexSubImage3D(Wt,Q,ut,Ht,Jt,le.width,le.height,pt,he,le.data):q.texSubImage3D(Wt,Q,ut,Ht,Jt,lt,rt,pt,he,ve,le):_.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Q,ut,Ht,lt,rt,he,ve,le.data):_.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Q,ut,Ht,le.width,le.height,he,le.data):q.texSubImage2D(q.TEXTURE_2D,Q,ut,Ht,lt,rt,he,ve,le);K.pixelStorei(q.UNPACK_ROW_LENGTH,Ge),K.pixelStorei(q.UNPACK_IMAGE_HEIGHT,be),K.pixelStorei(q.UNPACK_SKIP_PIXELS,Zt),K.pixelStorei(q.UNPACK_SKIP_ROWS,ce),K.pixelStorei(q.UNPACK_SKIP_IMAGES,Pe),Q===0&&C.generateMipmaps===!0&&C.mipmapsAutoUpdate===!0&&q.generateMipmap(Wt),K.unbindTexture()},this.initRenderTarget=function(_){Rt.get(_).__webglFramebuffer===void 0&&Ut.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?Ut.setTextureCube(_,0):_.isData3DTexture?Ut.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Ut.setTexture2DArray(_,0):Ut.setTexture2D(_,0),K.unbindTexture()},this.resetState=function(){k=0,B=0,st=null,K.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=We._getDrawingBufferColorSpace(t),e.unpackColorSpace=We._getUnpackColorSpace()}};var xe=Math.PI*2,Re=(i,t,e)=>i<t?t:i>e?e:i,tn=(i,t,e)=>i+(t-i)*e,Se=(i,t,e)=>{let n=Re((e-i)/(t-i),0,1);return n*n*(3-2*n)},Ve=(i,t,e,n)=>i+(t-i)*(1-Math.exp(-e*n));function pn(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var cn=(i,t)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)};function fn(i,t){let e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),l=cn(e,n),c=cn(e+1,n),h=cn(e,n+1),u=cn(e+1,n+1);return l+(c-l)*o+(h-l)*a+(l-c-h+u)*o*a}function qn(i,t){let e=0,n=.5,s=1;for(let r=0;r<4;r++)e+=n*fn(i*s,t*s),s*=2.03,n*=.5;return e/.9375}var kl=new qe,Vl=new Kn,Zd=new Qn,f_=new G,Jd=new G,Qe=new ge;function Yt(i,t){i.index&&(i=i.toNonIndexed()),i.attributes.uv&&i.deleteAttribute("uv"),i.attributes.uv1&&i.deleteAttribute("uv1");let e=i.attributes.position,n=e.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)typeof t=="function"?t(Qe,e.getX(r),e.getY(r),e.getZ(r),r):Qe.set(t),s[r*3]=Qe.r,s[r*3+1]=Qe.g,s[r*3+2]=Qe.b;return i.setAttribute("color",new De(s,3)),i}function Qt(i,t=0,e=0,n=0,s=0,r=0,o=0,a=1,l=a,c=a){return Zd.set(s,r,o),Vl.setFromEuler(Zd),kl.compose(f_.set(t,e,n),Vl,Jd.set(a,l,c)),i.applyMatrix4(kl),i}function Mh(i,t,e){let n=new G().subVectors(e,t),s=n.length();return Vl.setFromUnitVectors(new G(0,1,0),n.normalize()),kl.compose(new G().addVectors(t,e).multiplyScalar(.5),Vl,Jd.set(1,1,1)),i.applyMatrix4(kl),s}function _n(i){let t=0;for(let a of i)t+=a.attributes.position.count;let e=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*3),r=0;for(let a of i)a.attributes.normal||a.computeVertexNormals(),e.set(a.attributes.position.array,r*3),n.set(a.attributes.normal.array,r*3),s.set(a.attributes.color.array,r*3),r+=a.attributes.position.count,a.dispose();let o=new ke;return o.setAttribute("position",new De(e,3)),o.setAttribute("normal",new De(n,3)),o.setAttribute("color",new De(s,3)),o.computeBoundingSphere(),o}var Xe=(i,t,e,n)=>i.copy(Yn.set(t)).lerp(bo.set(e),Re(n,0,1)),Yn=new ge,bo=new ge;function Hi(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new Hr(s);return r.colorSpace=Rn,r.anisotropy=4,n&&(r.wrapS=r.wrapT=Ws,r.repeat.set(n[0],n[1])),r}var Zn=(i,t)=>{let e=(t-i)%xe;return e>Math.PI&&(e-=xe),e<-Math.PI&&(e+=xe),e},mn=(i,t,e,n)=>i+Zn(i,t)*(1-Math.exp(-e*n)),Ae=(i,t={})=>new Un({color:i,shininess:30,specular:"#2A2A2A",...t}),or=i=>i.traverse(t=>{t.isMesh&&(t.castShadow=!0)});function $d(i="#2F78DA",t="#86C4F7",e="#F8E6C8",n=new G(.62,.3,-.73)){let s=new Pt(new Ie(600,32,16),new ni({side:vn,depthWrite:!1,fog:!1,uniforms:{top:{value:new ge(i)},mid:{value:new ge(t)},hor:{value:new ge(e)},sunDir:{value:n.clone().normalize()}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top, mid, hor, sunDir; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float y = d.y;
        vec3 c = mix(hor, mid, smoothstep(-0.03, 0.2, y)); c = mix(c, top, smoothstep(0.2, 0.8, y));
        float s = max(dot(d, sunDir), 0.0);
        c += vec3(1.0, 0.86, 0.6) * (pow(s, 10.0) * 0.35 + pow(s, 90.0) * 0.6);
        c = mix(c, vec3(1.0, 0.97, 0.86), smoothstep(0.9982, 0.9992, s));
        gl_FragColor = vec4(c, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));return s.renderOrder=-10,s.frustumCulled=!1,s}function Kd(i){let t=new zl({canvas:i,antialias:!0,powerPreference:"high-performance"});return t.toneMapping=co,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=_s,t}function Qd(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}var jd=()=>Hi(64,64,i=>{let t=i.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=t,i.fillRect(0,0,64,64)});function tf(){let i=Hi(256,256,(t,e,n)=>{let s=t.createImageData(e,n),r=(o,a)=>fn(o/18,a/9)*.6+fn(o/7,a/4)*.4;for(let o=0;o<n;o++)for(let a=0;a<e;a++){let l=r(a+1,o)-r(a-1,o),c=r(a,o+1)-r(a,o-1),h=(o*e+a)*4,u=-l*3,f=-c*3,d=Math.hypot(u,f,1);s.data[h]=(u/d*.5+.5)*255,s.data[h+1]=(f/d*.5+.5)*255,s.data[h+2]=(1/d*.5+.5)*255,s.data[h+3]=255}t.putImageData(s,0,0)},[1,1]);return i.colorSpace="",i}function ef(i,t){!t||!t.see||(i.uniforms.uSee=t.see,i.vertexShader=`varying float vSeeZ;
`+i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
  vSeeZ = -mvPosition.z;`),i.fragmentShader=`uniform vec4 uSee; varying float vSeeZ;
`+i.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
    if (uSee.w > 0.0) {
      float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
      float sd = distance(gl_FragCoord.xy, uSee.xy) / uSee.w;
      if (vSeeZ < uSee.z - 0.7 && sd < 1.0 && ign >= smoothstep(0.5, 1.0, sd)) discard;
      if (vSeeZ < 1.2 && ign >= smoothstep(0.45, 1.2, vSeeZ)) discard;
    }`))}function nf(i,t){let e=i.clone();return e.onBeforeCompile=n=>ef(n,t),e.customProgramCacheKey=()=>"see"+(i.flatShading?"f":"")+i.side+(i.vertexColors?"v":""),e}function Wi(i,t,e,n){let s=i.clone();return s.onBeforeCompile=r=>{ef(r,n),r.uniforms.uTime=n.time,r.uniforms.uWind=n.wind||{value:0},r.vertexShader=`uniform float uTime; uniform float uWind;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float hh = max(0.0, transformed.y - ${e.toFixed(2)});
      float ph = 0.0;
      #ifdef USE_INSTANCING
        ph = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.23;
      #endif
      float wk = 1.0 + uWind * 6.0;
      transformed.x += ((sin(uTime * (1.25 + uWind * 3.0) + ph) + 0.35 * sin(uTime * 2.7 + ph * 1.7)) * ${t.toFixed(4)} * wk + uWind * ${(t*8).toFixed(4)}) * hh * hh;
      transformed.z += cos(uTime * (1.05 + uWind * 2.5) + ph) * ${(t*.5).toFixed(4)} * wk * hh * hh;`)},s.customProgramCacheKey=()=>"sway"+t+"_"+e+(i.flatShading?"f":"")+i.side+(n&&n.see?"see":""),s}function Gl(i,t,e){let n=[],s=4.6+i()*1.6,r=new Wn([new G(0,-.2,0),new G(t*.2,s*.35,.05),new G(t*.6,s*.7,.1),new G(t,s,.12)]),o=13;for(let c=0;c<o;c++){let h=r.getPoint(c/o),u=r.getPoint((c+1)/o),f=tn(.25,.14,c/o),d=Yt(new pe(f*1.13,f*.9,1,9,1,!0),(w,p,g)=>Xe(w,c%2?"#7E5E3C":"#8D6C46","#A9875C",g+.5)),m=h.distanceTo(u);Qt(d,0,0,0,0,0,0,1,m*1.04,1),Mh(d,h,u),n.push(d)}let a=r.getPoint(1),l=new G(0,1,0);n.push(Qt(Yt(new Mn(.28,1),"#6B5A2E"),a.x,a.y,a.z));for(let c=0;c<e;c++){let h=c/e*xe+i()*.35,u=new G(Math.cos(h),0,Math.sin(h)),f=2.6+i()*.9,d=.7+i()*.6,m=new Wn([a.clone(),a.clone().addScaledVector(u,f*.3).addScaledVector(l,.55),a.clone().addScaledVector(u,f*.65).addScaledVector(l,.35-d*.2),a.clone().addScaledVector(u,f).addScaledVector(l,-d)]),w=14,p=[],g=[],b=[];for(let F=0;F<=w;F++){let R=F/w,y=m.getPoint(R),x=m.getTangent(R),P=new G().crossVectors(x,l).normalize(),T=Math.pow(Math.sin(Math.PI*Math.min(1,R*1.15)),.7)*.5*(F%2?1:.72);b.push([y,y.clone().addScaledVector(P,T).addScaledVector(l,-T*.42),y.clone().addScaledVector(P,-T).addScaledVector(l,-T*.42),R])}let E=(F,R,y)=>{p.push(F.x,F.y,F.z),Xe(Qe,"#2E7A30","#6CC24A",R*.9+y*.25),g.push(Qe.r,Qe.g,Qe.b)};for(let F=0;F<w;F++){let[R,y,x,P]=b[F],[T,V,Z,O]=b[F+1];E(R,P,0),E(y,P,1),E(T,O,0),E(y,P,1),E(V,O,1),E(T,O,0),E(R,P,0),E(T,O,0),E(x,P,1),E(x,P,1),E(T,O,0),E(Z,O,1)}let A=new ke;A.setAttribute("position",new De(new Float32Array(p),3)),A.setAttribute("color",new De(new Float32Array(g),3)),A.computeVertexNormals(),n.push(A)}for(let c=0;c<2;c++){let h=i()*xe;for(let u=0;u<7;u++)n.push(Qt(Yt(new Mn(.085,0),u%2?"#B85C1C":"#D07A26"),a.x+Math.cos(h)*.32+(i()-.5)*.16,a.y-.32-i()*.3,a.z+Math.sin(h)*.32+(i()-.5)*.16))}return _n(n)}function Hl(i,t,e){let n=[Yt(Qt(new pe(.12,.2,1.7,7),0,.85,0),"#7A5230")];n.push(Yt(Qt(new pe(.05,.08,.8,5),.25,1.55,0,0,0,-.7),"#7A5230"));for(let s=0;s<7;s++){let r=.62+i()*.45,o=(i()-.5)*1.3,a=2.15+i()*.9,l=(i()-.5)*1.1,c=i();n.push(Qt(Yt(new Mn(r,1),(h,u,f,d)=>Xe(h,e[0],e[1],.25+f/r*.45+c*.3+(cn(u*9,d*9)-.5)*.2)),o,a,l))}if(t)for(let s=0;s<9;s++){let r=i()*xe,o=i()*1.3;n.push(Qt(Yt(new Mn(.08,1),t),Math.cos(r)*.95,2.1+Math.sin(o)*.9,Math.sin(r)*.85+.2))}return _n(n)}var Sh=()=>_n([0,1,2,3].map(i=>Qt(Yt(new Mn(.42-i*.05,1),(t,e,n)=>Xe(t,"#2F8A3C","#86D05C",.4+n*.9+i*.1)),(i-1.5)*.32,.3,i%2*.2))),bh=()=>Yt(new hi(.4,0),(i,t,e,n)=>Xe(i,"#8C877B","#C9C4B6",.4+e*1.2+cn(t*7,n*7)*.3)),sf=()=>_n([...Array(6)].map((i,t)=>{let e=t*1.1,n=.8+t%3*.22,s=Yt(new Fn(.025,n,3),(r,o,a)=>Xe(r,"#3C7F35","#8CC05A",a/n+.5));return Qt(s,Math.cos(e)*.12,n/2,Math.sin(e)*.12,Math.sin(e)*.15,0,Math.cos(e)*.15),t%2?_n([s,Qt(Yt(new pe(.035,.035,.16,6),"#6B4423"),Math.cos(e)*.12+Math.cos(e)*.15*n,n-.05,Math.sin(e)*.12)]):s})),wh=()=>(()=>{let i=[],t=[];for(let n=0;n<5;n++){let s=n/5*xe+.3,r=.22+n%3*.07,o=.035,a=Math.cos(s)*.05,l=Math.sin(s)*.05,c=a+Math.cos(s)*.1,h=l+Math.sin(s)*.1,u=-Math.sin(s)*o,f=Math.cos(s)*o;i.push(a-u,0,l-f,a+u,0,l+f,c,r,h);for(let d of[0,0,1])Xe(Qe,"#5AA544","#B0E47A",d),t.push(Qe.r,Qe.g,Qe.b)}let e=new ke;return e.setAttribute("position",new De(new Float32Array(i),3)),e.setAttribute("color",new De(new Float32Array(t),3)),e.computeVertexNormals(),e})();function rf(i,t){let e=new Ee,n=new Ee;e.add(n),n.position.y=.55;let s=i.body==="fire",r=i.body==="rainbow",o;r?o=Ae("#FFFFFF",{vertexColors:!0,shininess:50}):s?o=Ae("#FF8A1F",{emissive:"#FF3D00",emissiveIntensity:.55,shininess:20}):o=Ae(i.body,{shininess:38});let a=new Ie(.5,48,32);r&&(a=Yt(a,(U,k,B,st)=>U.setHSL(((Math.atan2(st,k)/xe+1)%1+B*.3)%1,.75,.62)));let l=new Pt(a,o);l.scale.set(1.05,1,.95);let c=new Pt(new Ie(.5,32,20),new ln({color:i.dark,side:vn}));c.scale.set(1.05*1.035,1.035,.95*1.035);let h=new Pt(new Ie(.3,32,16),Ae(s||r?i.belly:new ge(i.body).lerp(new ge(i.belly),.5),{shininess:20}));h.position.set(0,-.25,.345),h.scale.set(.78,.5,.32),n.add(l,c,h);let u=[];for(let U of[-1,1]){let k=new Pt(new Ie(.15,20,12),Ae(i.dark,{shininess:20}));k.scale.set(1.2,.55,1.45),k.position.set(U*.22,-.49,.07),n.add(k),u.push(k)}let f=[],d=[],m=Ae("#FFFFFF",{shininess:90,specular:"#FFFFFF"}),w=Ae("#1B1F3B",{shininess:120,specular:"#FFFFFF"}),p=new ln({color:i.dark});for(let U of[-1,1]){let k=new Ee;k.position.set(U*.185,.15,.36);let B=new Pt(new Ie(.162,24,16),p);B.scale.set(1,1.15,.6),B.position.z=-.012;let st=new Pt(new Ie(.15,24,16),m);st.scale.set(1,1.15,.72);let it=new Ee;it.position.z=.074;let yt=new Pt(new Ie(.07,16,12),w);yt.scale.z=.6;let It=new Pt(new Ie(.024,8,6),new ln({color:"#FFFFFF"}));It.position.set(.028,.035,.04),it.add(yt,It),k.add(B,st,it),n.add(k),f.push(k),d.push(it)}let g=new Pt(new Oi(.075,.017,6,16,Math.PI*.8),new ln({color:"#1B1F3B"}));g.rotation.z=Math.PI+Math.PI*.1,g.position.set(0,0,.462),g.rotation.x=-.2;let b=new Pt(new Ie(.05,12,10),new ln({color:"#7A1F2B"}));b.scale.set(1,1.25,.4),b.position.set(0,-.04,.47),b.visible=!1,n.add(g,b);let E=new Ee;n.add(E);let A=[];if(i.acc==="blush"||i.id==="orange")for(let U of[-1,1]){let k=new Pt(new ti(.07,16),new ln({color:"#FF7896",transparent:!0,opacity:.5}));k.position.set(U*.33,-.06,.36),k.rotation.y=U*.75,k.scale.y=.62,E.add(k)}if(i.acc==="leaf"){let U=new Pt(new pe(.018,.022,.14,6),Ae("#6B3E1F"));U.position.set(0,.54,0),U.rotation.z=-.15;let k=new Pt(new Ie(.15,16,8),Ae("#3FB950"));k.scale.set(1,.18,.5),k.position.set(.13,.6,0),k.rotation.z=.45,E.add(U,k)}else if(i.acc==="antenna")for(let U of[-1,1]){let k=new Pt(new pe(.014,.014,.32,6),Ae(i.dark));k.position.set(U*.18,.58,0),k.rotation.z=-U*.35;let B=new Pt(new Ie(.06,12,10),Ae("#FF5DA2",{emissive:"#FF5DA2",emissiveIntensity:.3}));B.position.set(U*.235,.73,0),E.add(k,B)}else if(i.acc==="crown"){let U=Ae("#FFC400",{shininess:110,specular:"#FFF2B0",emissive:"#5A3D00",emissiveIntensity:.3}),k=new Pt(new pe(.25,.23,.12,28,1,!0),U);k.material.side=He,k.position.y=.48,E.add(k);for(let B=0;B<6;B++){let st=B/6*xe,it=new Pt(new Fn(.05,.16,6),U);it.position.set(Math.sin(st)*.24,.6,Math.cos(st)*.24),E.add(it);let yt=new Pt(new Ie(.028,8,6),Ae(B%2?"#2EA8FF":"#E63946",{shininess:140,specular:"#FFFFFF"}));yt.position.set(Math.sin(st)*.255,.48,Math.cos(st)*.255),E.add(yt)}}else if(i.acc==="star"){let U=new ei;for(let B=0;B<10;B++){let st=B/10*xe-Math.PI/2,it=B%2?.06:.14;B?U.lineTo(Math.cos(st)*it,-Math.sin(st)*it):U.moveTo(Math.cos(st)*it,-Math.sin(st)*it)}let k=new Pt(new eo(U,{depth:.04,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:1}),Ae("#FFE066",{emissive:"#FFB703",emissiveIntensity:.5,shininess:90}));k.position.set(0,.74,-.02),E.add(k),E.userData.star=k}else if(i.acc==="band"){let U=Ae("#E63946"),k=new Pt(new Oi(.43,.05,8,40),U);k.rotation.x=Math.PI/2-.08,k.position.y=.2,k.scale.set(1.05,.95,1),E.add(k);for(let B of[-1,1]){let st=new Pt(new Ne(.06,.03,.3),U);st.position.set(B*.06,.18,-.55),st.rotation.set(.5,B*.3,0),E.add(st),E.userData["tail"+B]=st}}else if(i.acc==="hat"){let U=Ae("#946232",{shininess:14}),k=Ae("#4A2E14",{shininess:12}),B=new Pt(new pe(.46,.48,.035,36),U);B.position.y=.4;let st=new Pt(new Ie(.29,28,14,0,xe,0,Math.PI/2),U);st.position.y=.41,st.scale.y=.75;let it=new Pt(new pe(.292,.295,.06,28,1,!0),k);it.material.side=He,it.position.y=.45;let yt=new Ee;yt.add(B,st,it),yt.rotation.set(-.12,0,.06),E.add(yt);let It=Ae("#E63946",{shininess:15,side:He}),Vt=new Pt(new Oi(.34,.04,8,36),It);Vt.rotation.x=Math.PI/2,Vt.position.y=-.4,Vt.scale.set(1.05,.95,1),E.add(Vt);let M=new ei;M.moveTo(-.2,0),M.lineTo(.2,0),M.lineTo(.02,-.17),M.closePath();let v=new Pt(new zi(M),It);v.position.set(0,-.38,.33),v.rotation.x=-.55,E.add(v)}if(s){for(let k=0;k<7;k++){let B=k/7*Math.PI-Math.PI/2,st=new Pt(new Fn(.09,.4,8,1,!0),new ln({color:k%2?"#FFB13B":"#FF5A1F",transparent:!0,opacity:.9,depthWrite:!1,blending:ui}));st.position.set(Math.sin(B)*.28,.42+Math.cos(B)*.05,-.12-Math.abs(Math.cos(B))*.08),st.userData.ph=k,n.add(st),A.push(st)}let U=new bi(new ci({map:t,color:"#FF6A1F",transparent:!0,opacity:.55,depthWrite:!1,blending:ui}));U.scale.setScalar(2.2),n.add(U)}or(e),c.castShadow=!1;let F=new Ee,R=["#E63946","#FFFFFF","#FFB703","#FFFFFF","#2EA8FF","#FFFFFF"],y=Yt(new Ie(1.7,24,8,0,xe,0,Math.PI*.42),(U,k,B,st)=>U.set(R[Math.floor((Math.atan2(st,k)/xe+1)%1*12+1e-4)%6])),x=new Ze({vertexColors:!0,side:He,transparent:!0,opacity:1}),P=new Pt(y,x);P.scale.set(1,.62,1),P.castShadow=!0;let T=new Float32Array(60),V=new fs(new ke,new Qi({color:"#4A4A5A",transparent:!0,opacity:.85}));V.geometry.setAttribute("position",new De(T,3)),V.frustumCulled=!1;let Z=new Ee;Z.position.y=1.6,Z.add(P),F.add(Z,V),F.visible=!1;let O=new Pt(y,x.clone());O.visible=!1,O.castShadow=!1;let $=new Pt(new ke,Ae("#8B5A2B",{shininess:5}));return $.visible=!1,$.castShadow=!0,{id:i.id,root:e,inner:n,eyes:f,pupils:d,smile:g,ooh:b,feet:u,acc:E,flames:A,bodyMat:o,fire:s,chute:F,canopy:P,canopyHolder:Z,lines:V,drop:O,rope:$,turn:0,blink:0,nextBlink:2}}function ar(i={}){let t={skin:"#C98E62",thobe:"#F2EEE4",bisht:"#5B3A24",shmagh:"#C8102E",agal:"#141414",beard:"#4A4440",beads:!0,gold:!0,...i},e=new Ee,n=Ae(t.skin,{shininess:12}),s=Ae(t.thobe,{shininess:8}),r=Ae(t.bisht||t.thobe,{shininess:14,side:He}),o=new Pt(new Ln([new ct(.001,0),new ct(.27,0),new ct(.275,.1),new ct(.25,.5),new ct(.232,.9),new ct(.222,1.2),new ct(.2,1.34),new ct(.12,1.42),new ct(.05,1.45)],30),s);e.add(o);for(let R of[-1,1]){let y=new Pt(new Ne(.1,.04,.2),Ae("#4A2E18"));y.position.set(R*.09,.02,.2),e.add(y)}let a=new Pt(new Ln([new ct(.245,.06),new ct(.295,.08),new ct(.285,.5),new ct(.265,.9),new ct(.255,1.2),new ct(.24,1.33),new ct(.16,1.41)],30,.62,xe-1.24),r);e.add(a),a.visible=!!t.bisht;let l=Ae("#D4AF37",{shininess:90,specular:"#FFF2B0"});for(let R of[-1,1]){let y=R*.62,x=[[.247,.08],[.297,.1],[.287,.5],[.267,.9],[.257,1.2],[.242,1.33],[.162,1.41]].map(([P,T])=>new G(Math.sin(y)*(P+.006),T,Math.cos(y)*(P+.006)));t.bisht&&t.gold&&e.add(new Pt(new Bi(new Wn(x),20,.014,6),l))}let c=[];for(let R of[-1,1]){let y=new Ee;y.position.set(R*.25,1.3,0),e.add(y);let x=new Pt(new wi(.072,.28,4,10),r);x.position.y=-.18,y.add(x);let P=new Ee;P.position.y=-.36,y.add(P);let T=new Pt(new wi(.068,.22,4,10),r);T.position.y=-.14,P.add(T);let V=new Pt(new pe(.055,.06,.05,10),s);V.position.y=-.3,P.add(V);let Z=new Pt(new Ie(.052,12,10),n);if(Z.position.y=-.36,Z.scale.set(.9,1.1,.8),P.add(Z),R<0&&t.beads){let O=new Pt(new Oi(.06,.011,6,18),Ae("#E0A03C",{shininess:80,specular:"#FFF0C8"}));O.position.set(0,-.44,.02),O.rotation.y=.4,P.add(O)}y.rotation.z=R*.12,P.rotation.x=-.25,c.push({sh:y,el:P,s:R})}let h=new Pt(new pe(.06,.07,.1,10),n);h.position.y=1.46,e.add(h);let u=new Ee;u.position.y=1.6,e.add(u);let f=new Pt(new Ie(.155,28,20),n);f.scale.set(.94,1.08,1),u.add(f);let d=new Pt(new Ie(.034,10,8),Ae("#B97C52"));d.position.set(0,-.005,.15),d.scale.set(.85,1.1,1.25),u.add(d);for(let R of[-1,1]){let y=new Pt(new Ie(.019,10,8),Ae("#1B140F",{shininess:120,specular:"#FFFFFF"}));y.position.set(R*.055,.025,.135),u.add(y);let x=new Pt(new Ne(.065,.016,.02),Ae("#3A3430"));x.position.set(R*.056,.058,.138),x.rotation.z=-R*.12,u.add(x);let P=new Pt(new wi(.019,.06,3,6),Ae("#2A2420"));P.position.set(R*.034,-.045,.142),P.rotation.z=R*1.15,u.add(P)}let m=new Pt(new Ie(.16,24,10,Math.PI/2-1.2,2.4,Math.PI*.6,Math.PI*.3),Ae(t.beard==="none"?"#000":t.beard,{side:He,shininess:5}));u.add(m),m.visible=t.beard!=="none";let w=new Pt(new Ie(.026,10,8),new ln({color:"#4A1A14"}));w.position.set(0,-.07,.143),w.scale.set(1,.3,.5),u.add(w);let p=Hi(128,128,(R,y,x)=>{R.fillStyle="#FBF8F2",R.fillRect(0,0,y,x),R.fillStyle=t.shmagh;for(let P=0;P<x;P+=16)for(let T=0;T<y;T+=16)R.fillRect(T+2,P+2,7,7),R.fillRect(T+9,P+9,5,5),R.fillRect(T+9,P+2,2,2),R.fillRect(T+2,P+11,2,2)},[5,5]),g=new Ze({map:p,side:He}),b=new Pt(new Ie(.168,28,14,0,xe,0,Math.PI*.52),g);b.rotation.x=-.42,b.position.y=.01,u.add(b);let E=new Pt(new Ln([new ct(.168,.02),new ct(.18,-.06),new ct(.2,-.16),new ct(.24,-.26),new ct(.28,-.33)],28,1.15,xe-2.3),g);u.add(E);let A=new Pt(new Nn(.2,.36),g);A.position.set(.17,-.25,.1),A.rotation.set(-.15,.6,-.08),u.add(A);let F=Ae(t.agal,{shininess:40});for(let[R,y]of[[.07,.154],[.097,.139]]){let x=new Pt(new Oi(y,.015,8,36),F);x.position.set(0,R*.913,-R*.408),x.rotation.x=Math.PI/2-.42,u.add(x)}return or(e),{root:e,head:u,arms:c,mouth:w,yaw:0}}var Sn=Math.PI/180,wo=(i,t)=>i*100003+t;function Ah(i){let t=new Map;return{cell:i,add(e,n=e.x,s=e.z){let r=wo(Math.floor(n/i),Math.floor(s/i)),o=t.get(r);o||(o=[],t.set(r,o)),o.push(e)},remove(e,n=e.x,s=e.z){let r=t.get(wo(Math.floor(n/i),Math.floor(s/i)));if(r){let o=r.indexOf(e);o>=0&&r.splice(o,1)}},each(e,n,s,r){let o=Math.floor(e/i),a=Math.floor(n/i);for(let l=-s;l<=s;l++)for(let c=-s;c<=s;c++){let h=t.get(wo(o+l,a+c));if(h){for(let u of h)if(r(u)===!0)return!0}}return!1}}}function p_(i,t){let e=i.x||0,n=i.z||0,s=13.3,r=95,o=0,a=(j,ht)=>[e+Math.cos(ht*Sn)*j,n+Math.sin(ht*Sn)*j],l=(j,ht)=>Math.hypot(j-e,ht-n),c=(j,ht)=>Math.atan2(ht-n,j-e);function h(j){if(j<=s+1)return r;let ht=40+55*Math.pow(1-Re((j-s-1)/(72-s-1),0,1),1.12),K=36+4*(1-Re((j-72)/48,0,1)),Dt=36*Math.pow(1-Re((j-120)/60,0,1),1.25)-Se(180,230,j)*14;return tn(tn(ht,K,Se(68,76,j)),Dt,Se(116,124,j))}let u=[{a:118.5*Sn,r0:108,r1:190,w:7.5,depth:17},{a:101*Sn,r0:22,r1:64,w:6,depth:15},{a:58*Sn,r0:26,r1:72,w:4.5,depth:1.6,water:!0}],f=(j,ht)=>{let K=l(j,ht),Dt=h(K)+(qn(j*.028+5,ht*.028)-.5)*9*Se(s+2,s+12,K)*(1-Se(200,260,K)*.5);return Dt+=5*Se(49.5,47.6,K)*Se(28,42,K),Dt+=4*Se(27.2,25.3,K)*Se(15.5,21,K),Dt},d=(j,ht)=>{let K=l(j,ht),Dt=f(j,ht);for(let Rt of u){if(K<=Rt.r0||K>=Rt.r1)continue;let Ut=Math.abs(Zn(Rt.a,c(j,ht)))*K;Ut<Rt.w&&(Dt-=Rt.depth*Se(Rt.w,Rt.w*.25,Ut)*Se(Rt.r0,Rt.r0+4,K)*Se(Rt.r1,Rt.r1-4,K))}return Dt},m=[];function w(j,ht={}){let K=j.map(([bt,dt])=>{let[Nt,Bt]=a(bt,dt);return new G(Nt,0,Bt)}),Dt=new Wn(K,!1,"centripetal"),Rt=Dt.getLength(),Ut=Math.max(2,Math.ceil(Rt/.8)),L=[];for(let bt=0;bt<=Ut;bt++){let dt=Dt.getUtoTmapping(bt/Ut),Nt=Dt.getPoint(dt);L.push([Nt.x,Nt.z,Math.min(K.length-2,Math.floor(dt*(K.length-1)))])}let S={id:m.length,kind:ht.kind||"trail",pts:L.map(([bt,dt,Nt])=>({x:bt,z:dt,wi:Nt,y:0,hw:ht.hw||1.35,kind:ht.kinds&&ht.kinds[Nt]||ht.kind||"trail"}))},Y=S.pts.map(bt=>f(bt.x,bt.z));if(S.pts.forEach((bt,dt)=>{let Nt=0,Bt=0;for(let vt=-22;vt<=22;vt++)Nt+=Y[Re(dt+vt,0,Y.length-1)],Bt++;bt.y=Nt/Bt}),ht.y0!=null||ht.y1!=null){let bt=S.pts.length-1,dt=ht.y0!=null?ht.y0-S.pts[0].y:0,Nt=ht.y1!=null?ht.y1-S.pts[bt].y:0;S.pts.forEach((Bt,vt)=>{Bt.y+=tn(dt,Nt,vt/(bt||1))})}for(let bt of S.pts)bt.kind==="ledge"?bt.hw=.72:bt.kind==="bridge"?bt.hw=.62:bt.kind==="stones"&&(bt.hw=.6);return m.push(S),S}let p=w([[166,12],[160,40],[153,68],[146,94],[142.5,114.6],[140,122.4],[134,146],[127,172],[121,194],[117,206]],{kinds:{4:"bridge"}}),g=[110,98,86,74],b=[212,224,236,248,260,272,284],E=(j,ht)=>a(g[j],b[ht]),A=(j,ht)=>{let[K,Dt]=E(j,ht),Rt=0;for(let Ut=0;Ut<9;Ut++)Rt+=f(K+Math.cos(Ut)*4,Dt+Math.sin(Ut)*4);return Rt/9},F=[],R=new Set,y=pn(77),x=(j,ht)=>j*10+ht;(function j(ht,K){R.add(x(ht,K));let Dt=[[ht+1,K],[ht-1,K],[ht,K+1],[ht,K-1]].filter(([Rt,Ut])=>Rt>=0&&Rt<4&&Ut>=0&&Ut<7&&!R.has(x(Rt,Ut)));for(let Rt=Dt.length-1;Rt>0;Rt--){let Ut=Math.floor(y()*(Rt+1));[Dt[Rt],Dt[Ut]]=[Dt[Ut],Dt[Rt]]}for(let[Rt,Ut]of Dt)R.has(x(Rt,Ut))||(F.push([[ht,K],[Rt,Ut]]),j(Rt,Ut))})(0,0),F.push([[1,2],[1,3]],[[2,4],[3,4]]);let P=new Map;for(let j of F){let ht=x(...j[0])*100+x(...j[1]),K=x(...j[1])*100+x(...j[0]);!P.has(ht)&&!P.has(K)&&P.set(ht,j)}let T=[],V=new Map;for(let[[j,ht],[K,Dt]]of P.values()){let[Rt,Ut]=E(j,ht),[L,S]=E(K,Dt),Y=(Rt+L)/2+(y()-.5)*3,bt=(Ut+S)/2+(y()-.5)*3,dt=(Bt,vt)=>[l(Bt,vt),(c(Bt,vt)/Sn+360)%360],Nt=w([dt(Rt,Ut),dt(Y,bt),dt(L,S)],{kind:"maze",hw:1.25,y0:A(j,ht),y1:A(K,Dt)});Nt.cells=[[j,ht],[K,Dt]],T.push(Nt);for(let Bt of Nt.cells)V.set(x(...Bt),(V.get(x(...Bt))||0)+1)}let Z=w([[117,206],[113,209],[g[0],b[0]]],{kind:"maze",hw:1.3,y0:p.pts[p.pts.length-1].y,y1:A(0,0)}),O=w([[g[3],b[6]],[70,287],[66,292]],{kind:"maze",hw:1.3,y0:A(3,6)}),$=[[66,292],[62,306],[58,334],[54,308],[50,336],[46,309],[43,330],[41,344],[40,0],[39.3,16],[38.6,30],[37.5,42],[36.6,53],[35.8,63],[34.4,75],[32.4,86],[31.2,92],[29.6,110.5],[27.4,122],[24,138],[20,154],[s+.4,168]],U=w($,{y0:O.pts[O.pts.length-1].y,kinds:{7:"ledge",8:"ledge",9:"ledge",12:"stones",16:"bridge"}});{let j=U.pts,ht=0;for(let K=j.length-1;K>=0&&(K<j.length-1&&(ht+=Math.hypot(j[K+1].x-j[K].x,j[K+1].z-j[K].z)),j[K].y=Math.max(j[K].y,r-ht*.42),!(ht>60));K--);j[j.length-1].y=r;for(let K=Math.max(1,j.length-80);K<j.length;K++)(j[K].y-j[K-1].y)/(Math.hypot(j[K].x-j[K-1].x,j[K].z-j[K-1].z)||1)>.24&&j[K].kind==="trail"&&(j[K].kind="stairs",j[K].hw=1.25)}let k=[];for(let j of[p,U]){let ht=0;for(;ht<j.pts.length;){if(j.pts[ht].kind!=="bridge"){ht++;continue}let K=ht;for(;K+1<j.pts.length&&j.pts[K+1].kind==="bridge";)K++;let Dt=j.pts[Math.max(0,ht-1)],Rt=j.pts[Math.min(j.pts.length-1,K+1)],Ut=K-ht+1,L=Ut>10?[Math.floor(Ut*.3),Math.floor(Ut*.7)]:[Math.floor(Ut/2)];for(let S=ht;S<=K;S++){let Y=(S-ht+1)/(Ut+1),bt=j.pts[S];bt.y=tn(Dt.y,Rt.y,Y)-Math.sin(Y*Math.PI)*.7,bt.gap=L.includes(S-ht)}k.push({seg:j,i:ht,j:K,a:Dt,b:Rt}),ht=K+1}}let B=[];for(let j=0;j<U.pts.length;j++){let ht=U.pts[j];if(ht.kind==="stones"&&(!B.length||Math.hypot(ht.x-B[B.length-1].x,ht.z-B[B.length-1].z)>2.25)){let K=U.pts[Math.min(j+1,U.pts.length-1)],Dt=(t()-.5)*.5,Rt=-(K.z-ht.z),Ut=K.x-ht.x,L=Math.hypot(Rt,Ut)||1;B.push({x:ht.x+Rt/L*Dt,z:ht.z+Ut/L*Dt,y:ht.y+.05,r:.72})}}let st=[];for(let j of m)j.pts.forEach((ht,K)=>{ht.seg=j,ht.k=K,st.push(ht)});let it=Ah(4);for(let j of st)it.add(j);function yt(j,ht,K,Dt=1){let Rt=null,Ut=1/0;if(it.each(j,ht,Dt,Mt=>{let qt=(Mt.x-j)**2+(Mt.z-ht)**2+(K!=null?Math.max(0,Math.abs(Mt.y-K)-1.2)**2*9:0);qt<Ut&&(Ut=qt,Rt=Mt)}),!Rt)return null;let L=Rt.seg.pts,S=L[Math.min(Rt.k+1,L.length-1)],Y=L[Math.max(Rt.k-1,0)],bt=Math.hypot(j-Rt.x,ht-Rt.z),dt=Rt.y,Nt=S.x-Y.x,Bt=S.z-Y.z,vt=Math.hypot(Nt,Bt)||1;Nt/=vt,Bt/=vt;for(let[Mt,qt]of[[Y,Rt],[Rt,S]]){let re=qt.x-Mt.x,X=qt.z-Mt.z,Et=re*re+X*X||1,zt=Re(((j-Mt.x)*re+(ht-Mt.z)*X)/Et,0,1),Gt=Math.hypot(j-(Mt.x+re*zt),ht-(Mt.z+X*zt));Gt<bt&&(bt=Gt,dt=tn(Mt.y,qt.y,zt))}return{p:Rt,d:bt,y:dt,tx:Nt,tz:Bt,side:(j-Rt.x)*-Bt+(ht-Rt.z)*Nt}}function It(j,ht){let K=l(j,ht),Dt=d(j,ht);if(K<s+1.5)return tn(Dt,r,Se(s+1.5,s+.3,K));if(K>200)return Dt;let Rt=Dt,Ut=yt(j,ht,null,2);if(Ut&&Ut.d<Ut.p.hw+3.2){let L=Ut.p.kind;if(L!=="bridge"){if(L==="stones")Rt=Math.min(Rt,Ut.y-.55);else if(Rt=tn(Rt,Ut.y-.04,Se(Ut.p.hw+3.2,Ut.p.hw+.5,Ut.d)),L==="ledge"){let S=Ut.d-Ut.p.hw;S>0&&(K>l(Ut.p.x,Ut.p.z)?Rt=Math.min(Rt,Ut.y-Se(0,2.2,S)*11):Rt=Math.max(Rt,Ut.y+Se(.3,2.4,S)*4.5))}}}return Rt}let Vt=[],M=(j,ht)=>j.pts.findIndex(K=>K.kind===ht),v=(j,ht,K)=>{let Dt=j.pts[Re(ht,0,j.pts.length-1)],Rt=j.pts[Re(ht+6,0,j.pts.length-1)],Ut={id:"cp"+Vt.length,x:Dt.x,z:Dt.z,y:Dt.y,name:K,face:Math.atan2(Rt.z-Dt.z,Rt.x-Dt.x),flag:!0};return Vt.push(Ut),Ut};v(p,3,"\u0633\u0641\u062D \u0627\u0644\u062C\u0628\u0644"),v(p,M(p,"bridge")-7,"\u0642\u0628\u0644 \u0627\u0644\u062C\u0633\u0631"),v(p,p.pts.length-2,"\u0628\u0627\u0628 \u063A\u0627\u0628\u0629 \u0627\u0644\u0645\u062A\u0627\u0647\u0629"),v(U,4,"\u0637\u0644\u0639\u0629 \u0627\u0644\u0632\u0643\u0632\u0627\u0643"),v(U,M(U,"ledge")-6,"\u0642\u0628\u0644 \u062D\u0627\u0641\u0629 \u0627\u0644\u062C\u0631\u0641"),v(U,M(U,"stones")-5,"\u0642\u0628\u0644 \u0627\u0644\u0633\u0627\u0642\u064A\u0629"),v(U,M(U,"bridge")-6,"\u0642\u0628\u0644 \u0627\u0644\u062C\u0633\u0631 \u0627\u0644\u062B\u0627\u0646\u064A");let et=U.pts[U.pts.length-1],J=c(et.x,et.z);Vt.push({id:"summit",x:e-3,z:n+3,y:r,name:"\u0633\u0627\u062D\u0629 \u0627\u0644\u0642\u0645\u0629",face:0,flag:!1,plaza:!0});let Tt=[],Ct=[];{let j=new Map;for(let S of T){let[Y,bt]=S.cells.map(dt=>x(...dt));for(let[dt,Nt]of[[Y,bt],[bt,Y]])j.has(dt)||j.set(dt,[]),j.get(dt).push(Nt)}let ht=x(0,0),K=x(3,6),Dt=new Map([[ht,-1]]),Rt=[ht],Ut=new Map;for(;Rt.length;){let S=Rt.shift();if(S===K)break;for(let Y of j.get(S)||[])Dt.has(Y)||(Dt.set(Y,S),Rt.push(Y))}for(let S=K;Dt.get(S)!==-1&&Dt.has(S);S=Dt.get(S))Ut.set(Dt.get(S),S);let L=0;for(let[S,Y]of Ut){if((V.get(S)||0)<3||L++%3===2)continue;let[bt,dt]=E(Math.floor(S/10),S%10),[Nt,Bt]=E(Math.floor(Y/10),Y%10),vt=Math.atan2(Bt-dt,Nt-bt),Mt=bt+Math.cos(vt+.9)*1.9,qt=dt+Math.sin(vt+.9)*1.9;Tt.push({x:Mt,z:qt,a:vt,text:"\u2B05 \u0644\u0644\u0642\u0645\u0629"})}for(let[S,Y]of V){if(Y!==1||S===ht||S===K)continue;let[bt,dt]=E(Math.floor(S/10),S%10);Ct.push({x:bt,z:dt,a:t()*xe})}}let Ft=[];for(let j of[p,U])for(let ht=8;ht<j.pts.length-4;ht+=17){let K=j.pts[ht];K.kind==="trail"&&Ft.push({x:K.x,y:K.y+.9,z:K.z})}for(let j of Ct){let ht=yt(j.x,j.z,null,2);if(ht)for(let K=0;K<4;K++){let Dt=ht.p.seg.pts[Re(ht.p.k+(K-1.5)*2|0,0,ht.p.seg.pts.length-1)];Ft.push({x:Dt.x,y:Dt.y+.9,z:Dt.z})}}let oe=(j,ht)=>{let K=j.pts[Re(ht,0,j.pts.length-1)];return{x:K.x,z:K.z,y:K.y}},jt=Math.floor(p.pts.length*.22),te=M(U,"ledge"),ae=[{kind:"wolf",home:oe(p,jt)},{kind:"wolf",home:oe(p,jt+4),ox:1.5},{kind:"wolf",home:oe(U,te-26)},{kind:"wolf",home:oe(U,te-22),ox:1.2},{kind:"boar",home:oe(T[Math.floor(T.length*.4)],10)},{kind:"boar",home:oe(T[Math.floor(T.length*.75)],10)}],xt=(j,ht)=>[e+Math.cos(j*Sn)*ht,n+Math.sin(j*Sn)*ht],wt=236,[St,mt]=xt(wt,9.2),at=xt(221,6.2),Xt=xt(118,9),Kt=xt(300,10.2),ue={x:e,z:n,RP:s,HS:r,DECK_A:o,ENTRY_A:J,kioskA:wt,kiosk:[St,mt],meet:at,bell:Xt,flag:Kt,benches:[185,150,30],beds:[80,175,280,350],lamps:[45,145,255,330],pines:[62,100,200,320],guests:[{a:212,r:6.9,look:at,kind:"tea"},{a:229,r:6.9,look:at,kind:"tea"},{a:219,r:5.2,look:[St,mt],kind:"stand"}],scope:[e+s+3.9,n],inter:[{id:"tea",x:St-Math.cos(wt*Sn)*2.1,z:mt-Math.sin(wt*Sn)*2.1,r:2.3,label:"\u2615 \u0627\u0634\u0631\u0628 \u0634\u0627\u064A"},{id:"chat",x:at[0],z:at[1],r:2.2,label:"\u{1F5E3}\uFE0F \u0633\u0648\u0644\u0641 \u0648\u064A\u0627\u0647\u0645"},{id:"bell",x:e+(Xt[0]-e)*.84,z:n+(Xt[1]-n)*.84,r:2.2,label:"\u{1F514} \u062F\u0643 \u0627\u0644\u062C\u0631\u0633"},{id:"scope",x:e+s+3.1,z:n,r:1.8,label:"\u{1F52D} \u0628\u0627\u0648\u0639 \u0628\u0627\u0644\u062A\u0644\u0633\u0643\u0648\u0628"},{id:"fountain",x:e,z:n,r:3.4,label:"\u{1FA99} \u0627\u0631\u0645\u0650 \u0639\u0645\u0644\u0629 \u0628\u0627\u0644\u0646\u0627\u0641\u0648\u0631\u0629"}]},$t=[];$t.push({x:e,z:n,r:2.6,tall:1});for(let j of[-1.1,0,1.1])$t.push({x:St+Math.cos(wt*Sn+Math.PI/2)*j,z:mt+Math.sin(wt*Sn+Math.PI/2)*j,r:1.05});{let j=-Math.sin(118*Sn),ht=Math.cos(118*Sn);$t.push({x:Xt[0]+j*.9,z:Xt[1]+ht*.9,r:.25},{x:Xt[0]-j*.9,z:Xt[1]-ht*.9,r:.25})}$t.push({x:Kt[0],z:Kt[1],r:.3});for(let j of ue.beds){let[ht,K]=xt(j,11);$t.push({x:ht,z:K,r:.75})}for(let j of ue.benches){let[ht,K]=xt(j,6.6),Dt=-Math.sin(j*Sn),Rt=Math.cos(j*Sn);$t.push({x:ht,z:K,r:.75},{x:ht+Dt*.8,z:K+Rt*.8,r:.5},{x:ht-Dt*.8,z:K-Rt*.8,r:.5})}for(let j of ue.guests){let[ht,K]=xt(j.a,j.r);$t.push({x:ht,z:K,r:.42})}for(let j of ue.pines){let[ht,K]=xt(j,11.6);$t.push({x:ht,z:K,r:.5,tall:1})}for(let j=0;j<64;j++){let ht=j/64*xe;Math.abs(Zn(ht,J))<.2||Math.abs(Zn(ht,o))<.22||$t.push({x:e+Math.cos(ht)*(s-.1),z:n+Math.sin(ht)*(s-.1),r:.55,wall:1})}let de=[];for(let j of st)if(j.kind==="ledge"&&j.k%2===0){let ht=j.seg.pts[Math.min(j.k+1,j.seg.pts.length-1)],K=j.seg.pts[Math.max(j.k-1,0)],Dt=ht.x-K.x,Rt=ht.z-K.z,Ut=Math.hypot(Dt,Rt)||1,L=-Rt/Ut,S=Dt/Ut;l(j.x+L,j.z+S)>l(j.x,j.z)&&(L=-L,S=-S);let Y=.9+cn(j.k,1)*.8;de.push({p:j,nx:L,nz:S,sz:Y}),$t.push({x:j.x+L*(j.hw+Y),z:j.z+S*(j.hw+Y),r:Y*.8,tall:1})}for(let j of Ct)$t.push({x:j.x,z:j.z,r:.9});let q=u[2],Le=(j,ht)=>{let K=l(j,ht),Dt=(c(j,ht)/Sn+360)%360;return K>66&&K<122&&Dt>203&&Dt<293};return{id:i.id||"M1",x:e,z:n,RP:s,HS:r,DECK_A:o,ENTRY_A:J,rad:l,ang:c,P2:a,prof:h,gullies:u,stream:q,Hbase:f,Hnat:d,H:It,segs:m,ALL:st,A:p,C2:U,MAZ:T,entrySeg:Z,exitSeg:O,cellP:E,key:x,nearest:yt,bridges:k,stones:B,rest:Vt,signs:Tt,logs:Ct,coins:Ft,beasts:ae,plaza:ue,coll:$t,ledgeRocks:de,inMaze:Le,foot:200}}function m_(i){let t=i.x,e=i.z||0,n=i.floor??-35,s=120,r=11,o=m=>2.6*Math.sin(m*.055+.6)+1.5*Math.sin(m*.13+2.1)-.6,a=[[17,1],[45,-1],[76,1],[103,-1]].map(([m,w])=>({x:m,z:Re(o(m)+w*6.4,-8.2,8.2),side:w,rot:w>0?Math.PI:0,base:0}));function l(m,w){let p=Math.abs(w),g=(qn(m*.09+3.1,w*.09)-.5)*.55,b=w-o(Re(m,-10,s+10));g-=Math.exp(-(b*b)/1.3)*.75*Se(-12,-2,m);let E=Re((p-(r-1))/21,0,1);if(g+=21*E*E+Se(30,50,p)*7,g+=(qn(m*.07+(w>0?9:2),p*.09)-.5)*5*Se(r+1,r+9,p),m<2&&(g=Math.max(g,21*Math.pow(Re((2-m)/62,0,1),.9))),m>s-2){let A=(m-s+2)/30;g+=20*Math.min(1,A)**2+Se(1,2.5,A)*6}return g+=Se(46,70,p)*45+Se(-62,-90,m)*45+Se(s+35,s+70,m)*45,g}for(let m of a)m.base=l(m.x,m.z)+.05;let c=(m,w)=>[m-t,w-e];function h(m,w){let p=m-t,g=w-e;if(p<-95||p>s+75||Math.abs(g)>72)return 1/0;let b=l(p,g);for(let E of a){let A=p-E.x,F=g-E.z;A*A+F*F<49&&(b=tn(b,E.base,Se(7,4.5,Math.hypot(A,F))))}return n+b}let u=m=>n+l(m,o(m))+.42,f=(m,w)=>m>1.5&&m<s-1.5&&Math.abs(w)<r-1.2,d=[{id:"valley",x:t+4,z:e+o(4)+3.2,y:n+l(4,o(4)+3.2),name:"\u0645\u062F\u062E\u0644 \u0627\u0644\u0648\u0627\u062F\u064A",face:0,flag:!1}];for(let m of d)m.y=h(m.x,m.z);return{id:i.id||"V1",x:t,z:e,VF:n,VL:s,FLOOR:r,riverZ:o,CAMPS:a,H0:l,Hv:h,toL:c,waterLevel:u,onFloor:f,rest:d}}var Eh={id:"natta-1",name:"\u062C\u0628\u0644 \u0627\u0644\u063A\u0627\u0628\u0629 \u0648\u0648\u0627\u062F\u064A \u0627\u0644\u063A\u0632\u0644\u0627\u0646",half:500,seed:9091,features:[{type:"mountain",id:"M1",x:0,z:0},{type:"valley",id:"V1",x:258,z:0,floor:-35}],spawn:"cp0"};function of(i=Eh){let t=pn(i.seed||1),e=i.half||500,n=p_(i.features.find(x=>x.type==="mountain"),t),s=m_(i.features.find(x=>x.type==="valley")),r=(x,P)=>{let T=Math.max(Math.abs(x),Math.abs(P))+(qn(x*.008+1,P*.008+5)-.5)*70,V=x-s.x,Z=Se(140,70,Math.max(Math.abs(P-s.z),V<0?-V:V>s.VL?V-s.VL:0)),O=-14+((qn(x*.006+7,P*.006)-.5)*16+(qn(x*.025,P*.025+3)-.5)*2.5)*(1-Z*.85);return O+=Math.pow(Se(395,492,T),1.6)*85+(qn(x*.03,P*.03)-.5)*14*Se(400,470,T),O};function o(x,P){let T=n.rad(x,P),V=T<245?T>200?tn(n.H(x,P),r(x,P),Se(200,245,T)):n.H(x,P):r(x,P),Z=s.Hv(x,P);return Z<V&&(V=Z),V}let a=(x,P)=>Math.hypot(o(x+.4,P)-o(x-.4,P),o(x,P+.4)-o(x,P-.4))/.8,l=Ah(4),c=[],h=x=>(c.push(x),l.add(x),x);for(let x of n.coll)h(x);let u={pineA:[],pineB:[],oak:[],hedge:[],bush:[],rock:[],palm:[[],[],[]],fruit:[[],[],[]],boulder:[],vbush:[],vrock:[],rim:[]},f=(x,P,T)=>{if(n.rad(x,P)<n.RP+3)return!1;let V=n.nearest(x,P,null,2);if(V&&V.d<V.p.hw+T)return!1;for(let Z of n.rest)if(Math.hypot(x-Z.x,P-Z.z)<4.6)return!1;return!0};for(let x=-195;x<=195;x+=2.3)for(let P=-195;P<=195;P+=2.3){let T=n.x+x,V=n.z+P;if(Math.hypot(x,P)>192)continue;let O=T+(t()-.5)*2,$=V+(t()-.5)*2;if(n.inMaze(O,$))continue;let U=n.nearest(O,$,null,6),k=U?U.d:99;if(k>26&&t()<.5||!f(O,$,1.05))continue;let B=o(O,$),st=t(),it=.8+t()*.55;if(B>84){t()<.3&&f(O,$,.4)?u.rock.push({x:O,y:B+.05,z:$,rx:t()*3,ry:t()*3,rz:t()*3,s3:[.8+t()*1.4,.5+t()*.8,.8+t()*1.4]}):t()<.35&&u.bush.push({x:O,y:B,z:$,ry:t()*xe,s:.5+t()*.6});continue}if(B>72){if(t()<.45)continue;it*=tn(1,.6,Se(72,84,B))}if(Math.abs(Zn(n.ang(O,$),n.DECK_A))<.55&&B+9*it>n.HS-7)continue;B>48&&(st*=.86);let yt={x:O,y:B-.15,z:$,ry:t()*xe,s:it};if(st<.46?u.pineA.push(yt):st<.82?u.pineB.push(yt):u.oak.push({...yt,s:it*.95}),h({x:O,z:$,r:.42*it,tall:1,tree:1}),k<9&&t()<.5){let It=O+(t()-.5)*1.6,Vt=$+(t()-.5)*1.6;f(It,Vt,.25)&&u.bush.push({x:It,y:o(It,Vt),z:Vt,ry:t()*xe,s:.5+t()*.7})}}for(let x=-125;x<=125;x+=1.25)for(let P=-125;P<=125;P+=1.25){let T=n.x+x+(t()-.5)*.4,V=n.z+P+(t()-.5)*.4;if(!n.inMaze(T,V)||!f(T,V,.75))continue;let Z=o(T,V);if(u.hedge.push({x:T,y:Z-.1,z:V,ry:t()*xe,s:.95+t()*.45}),h({x:T,z:V,r:.62,hedge:1}),t()<.16&&f(T,V,2.2)){let O={x:T,y:Z-.15,z:V,ry:t()*xe,s:.85+t()*.4};(t()<.5?u.pineA:u.oak).push(O)}}for(let x=-e+10;x<=e-10;x+=6)for(let P=-e+10;P<=e-10;P+=6){let T=x+(t()-.5)*5,V=P+(t()-.5)*5;if(n.rad(T,V)<205)continue;let Z=T-s.x,O=V-s.z;if(Z>-100&&Z<s.VL+70&&Math.abs(O)<60)continue;let $=fn(T*.012+4,V*.012),U=Math.max(Math.abs(T),Math.abs(V));if(U>470)continue;let k=$>.62?.75:U>400?.25:.05;if(t()>k){t()<.03&&u.rock.push({x:T,y:o(T,V)+.05,z:V,rx:t()*3,ry:t()*3,rz:t()*3,s3:[.7+t()*1.6,.4+t()*.9,.7+t()*1.6]});continue}if(a(T,V)>.8)continue;let B=.8+t()*.6,st={x:T,y:o(T,V)-.15,z:V,ry:t()*xe,s:B};(U>400?t()<.6?u.pineB:u.pineA:t()<.55?u.oak:u.pineA).push(st),h({x:T,z:V,r:.42*B,tall:1,tree:1})}{let x=pn(20261123),P=(U,k)=>[s.x+U,s.z+k],T=(U,k,B)=>s.CAMPS.some(st=>Math.hypot(U-st.x,k-st.z)<B),V=(U,k,B)=>Math.abs(k-s.riverZ(U))<1.7+B||T(U,k,6.8+B),Z=(U=0,k=s.FLOOR-.6,B=-1,st=s.VL+1)=>({x:B+x()*(st-B),z:(x()<.5?-1:1)*(U+x()*(k-U))}),O=(U,k)=>a(s.x+U,s.z+k),$=[];for(let U of[-1,1])for(let k=-2;k<s.VL+2;k+=5+x()*5){let B=s.riverZ(k)+U*(2.3+x()*1.8);!T(k,B,7.5)&&Math.abs(B)<s.FLOOR&&$.push({x:k,z:B})}for(let U=0;U<16;U++){let k=Z(2,s.FLOOR-1);V(k.x,k.z,.6)||$.push(k)}$.forEach((U,k)=>{let[B,st]=P(U.x,U.z);h({x:B,z:st,r:.38,tall:1,tree:1}),u.palm[k%3].push({x:B,y:o(B,st)-.05,z:st,ry:x()*xe,s:.85+x()*.4})});for(let U=0;U<3;U++)for(let k=0,B=0;B<9&&k<400;k++){let st=Z(1.5,s.FLOOR-.5),[it,yt]=P(st.x,st.z);V(st.x,st.z,1.4)||l.each(it,yt,1,It=>Math.hypot(It.x-it,It.z-yt)<3)||(h({x:it,z:yt,r:.35,tall:1,tree:1}),u.fruit[U].push({x:it,y:o(it,yt)-.05,z:yt,ry:x()*xe,s:.75+x()*.45}),B++)}for(let U=0;u.vbush.length<130&&U<3e3;U++){let k=Z(0,s.FLOOR+4);if(V(k.x,k.z,.5)||O(k.x,k.z)>.7)continue;let[B,st]=P(k.x,k.z);u.vbush.push({x:B,y:o(B,st),z:st,ry:x()*xe,s:.5+x()*.8})}for(let U=0;u.vrock.length<90&&U<2e3;U++){let k=Z(0,s.FLOOR);if(T(k.x,k.z,6)||Math.abs(k.z-s.riverZ(k.x))<1.1)continue;let B=.35+x()*.8,[st,it]=P(k.x,k.z);B>.8&&h({x:st,z:it,r:.3*B}),u.vrock.push({x:st,y:o(st,it)+.04,z:it,rx:x()*3,ry:x()*3,rz:x()*3,s3:[B,B*(.6+x()*.4),B*(.8+x()*.4)]})}for(let U=0;U<230;U++){let k=-14+x()*(s.VL+30),B=s.FLOOR+1+x()*26,st=(x()<.5?-1:1)*B,it=.8+x()*3.2,[yt,It]=P(k,st);u.boulder.push({x:yt,y:o(yt,It)-it*.42,z:It,rx:x()*3,ry:x()*3,rz:x()*3,s3:[it,it*(.5+x()*.4),it*(.8+x()*.5)]})}for(let U=0;U<26;U++){let k=Z(s.FLOOR-3,s.FLOOR+1);if(T(k.x,k.z,7))continue;let B=1.3+x()*1.6,[st,it]=P(k.x,k.z);h({x:st,z:it,r:.45*B}),u.boulder.push({x:st,y:o(st,it)-.15,z:it,rx:x()*3,ry:x()*3,rz:x()*3,s3:[B,B*.7,B]})}for(let U=0;U<140;U++){let k=-40+x()*(s.VL+80),B=26+x()*40,st=(x()<.5?-1:1)*B;if(fn(k*.06,st*.06)<.4)continue;let[it,yt]=P(k,st);u.rim.push({x:it,y:o(it,yt)-.2,z:yt,ry:x()*xe,s:1+x()*1.3})}}let d=new Map;for(let x of c)if(x.tree){let P=wo(Math.floor(x.x/6),Math.floor(x.z/6));d.set(P,(d.get(P)||0)+1)}let m=(x,P)=>(d.get(wo(Math.floor(x/6),Math.floor(P/6)))||0)/7,w=Ah(4);for(let x of n.bridges)for(let P=x.i;P<=x.j;P++)w.add(x.seg.pts[P]);function p(x,P){let T=null,V=1/0;if(w.each(x,P,1,It=>{let Vt=(It.x-x)**2+(It.z-P)**2;Vt<V&&(V=Vt,T=It)}),!T||V>2.5)return null;let Z=T.seg.pts,O=Z[Math.min(T.k+1,Z.length-1)],$=Z[Math.max(T.k-1,0)],U=O.x-$.x,k=O.z-$.z,B=Math.hypot(U,k)||1;U/=B,k/=B;let st=(x-T.x)*U+(P-T.z)*k,it=Math.abs((x-T.x)*-k+(P-T.z)*U);if(it>T.hw+.05)return{off:!0,p:T,tx:U,tz:k,lat:it};let yt=Z[Re(T.k+(st>0?1:-1),0,Z.length-1)];return yt.kind!=="bridge"&&Math.abs(st)>.35?null:T.gap&&Math.abs(st)<.32?{hole:!0,p:T,tx:U,tz:k,lat:it}:{y:tn(T.y,yt.y,Re(Math.abs(st)/.8,0,1)),p:T,tx:U,tz:k,lat:it}}let g={x0:n.x+n.RP-1,x1:n.x+n.RP+4.35,z0:n.z-1.65,z1:n.z+1.65,y:n.HS+.09};function b(x,P,T,V){let Z=o(x,P),O=null,$=null,U=T==null?1/0:T+.7;if(T!=null&&n.rad(x,P)<200){let B=n.nearest(x,P,T,1);B&&B.d<=B.p.hw+.25&&B.p.kind!=="bridge"&&B.p.kind!=="stones"&&B.y-.04<=U&&Math.abs(B.y-.04-Z)<7&&(Z=B.y-.04,O="path")}let k=p(x,P);k&&k.y!=null&&k.y<=U&&k.y>Z-.01&&(Z=k.y,O="bridge",$=k);for(let B of n.stones)Math.hypot(x-B.x,P-B.z)<B.r+(V?.5:0)&&B.y<=U&&B.y>Z&&(Z=B.y,O="stone",$=B);return x>g.x0&&x<g.x1&&P>g.z0&&P<g.z1&&g.y<=U&&g.y>=Z-.2&&(Z=g.y,O="deck"),{y:Z,kind:O,plat:$,b:k}}function E(x,P,T){let V=n.rad(x,P);if(V<n.RP+.5&&Math.abs(T-n.HS)<.6)return"plaza";if(V<200){let $=n.nearest(x,P,T,1);if($&&$.d<$.p.hw)return $.p.kind==="stones"?"trail":$.p.kind}let[Z,O]=s.toL(x,P);return Z>-2&&Z<s.VL+2&&Math.abs(O)<s.FLOOR+1?"grass":a(x,P)>.85?"rock":m(x,P)>.55?"forest":"grass"}function A(x,P,T){let[V,Z]=s.toL(x,P);if(V>-6&&V<s.VL+6&&Math.abs(Z-s.riverZ(V))<.95){let U=s.waterLevel(V);if(T<U+.3)return{kind:"river",level:U}}let O=n.stream,$=n.rad(x,P);if($>O.r0+1&&$<O.r1-1&&Math.abs(Zn(O.a,n.ang(x,P)))*$<2.1){let k=n.Hnat(x,P)+.5;if(T<k+.25)return{kind:"torrent",level:k,dx:Math.cos(O.a),dz:Math.sin(O.a)}}return null}function F(x,P,T,V){for(let Z=0;Z<2;Z++)l.each(x,P,1,O=>{if(V&&!V(O))return;let $=x-O.x,U=P-O.z,k=T+O.r,B=$*$+U*U;if(B<k*k&&B>1e-8){let st=Math.sqrt(B),it=(k-st)/st;x+=$*it,P+=U*it}});return[Re(x,-e+3,e-3),Re(P,-e+3,e-3)]}let R=(x,P,T)=>l.each(x,P,1,V=>V.tall&&T(V)),y=[...n.rest,...s.rest];return{map:i,HALF:e,M:n,V:s,H:o,slope:a,plains:r,surfaceAt:b,groundKind:E,water:A,collide:F,colliders:c,addColl:h,removeColl:x=>{l.remove(x);let P=c.indexOf(x);P>=0&&c.splice(P,1)},tallNear:R,cgrid:l,veg:u,forestAt:m,restPoints:y,bridgeAt:p,deck:g}}var g_=14,af=1,lf=1.15;function cf(i,t={}){let e=i.M,n=i.V,s=[],r=1,o={t:0,hero:null,rest:null,reached:new Set,coins:[],coinsGot:0,climb:{done:!1,time:0},summit:null,scope:!1,wind:0,vq:{camp:null,merW:{x:0,z:0},zoneW:{x:0,z:0},penW:{x:0,z:0},met:!1,called:!1,caught:!1,delivered:!1},carry:null,focus:null,seed:1},a=[],l=(...M)=>a.push(M.length===1?M[0]:M);function c(M,v,et,J={}){let Tt={id:r++,kind:M,x:v,z:et,y:i.H(v,et),vx:0,vy:0,vz:0,face:0,air:!1,peak:0,r:.4,speed:0,run:!1,hopPh:0,landT:0,stun:0,rot:0,surf:null,...J};return s.push(Tt),Tt}let h=e.beasts.map(M=>c(M.kind,M.home.x+(M.ox||0),M.home.z,{home:M.home,r:M.kind==="boar"?.45:.38,state:"idle",t:Math.random()*2,cool:0,tx:M.home.x,tz:M.home.z,charge:null,ph:0,face:Math.random()*xe})),u=c("gazelle",n.x+60,n.z,{r:.42,state:"graze",t:0,gt:2.5,sus:0,stamina:4,ph:0,triedLeap:!1,tx:0,tz:0,fx:1,fz:0,stuck:0,hy:0}),f=c("merchant",n.x+20,n.z,{r:.42});function d(M,v,et,J,Tt,Ct={}){let Ft=M.air?3:10,oe=M.air?Math.max(J,M.airSpd||0):J,jt=Ct.pushX||0,te=Ct.pushZ||0;M.vx=Ve(M.vx,v*oe+jt,Ft,Tt),M.vz=Ve(M.vz,et*oe+te,Ft,Tt);let ae=M.x,xt=M.z,wt=M.x+M.vx*Tt,St=M.z+M.vz*Tt;if([wt,St]=i.collide(wt,St,M.r,Ct.collFilter),M.air){M.vy-=g_*Tt;let mt=M.y+M.vy*Tt,at=i.surfaceAt(wt,St,Math.max(M.y,mt)+.05,!0);if(at.y>M.y+.45&&(wt=M.x,St=M.z,M.vx*=-.15,M.vz*=-.15,at=i.surfaceAt(wt,St,M.y+.05,!0)),mt<=at.y&&M.vy<=0){let Xt=(M.peak||M.y)-at.y;if(M.x=wt,M.z=St,M.y=at.y,M.air=!1,M.vy=0,M.landT=.25,M.surf=at.kind,M.plat=at.plat,at.kind==="stone"&&at.plat){let Kt=Math.hypot(M.x-at.plat.x,M.z-at.plat.z),ue=.35;Kt>ue&&(M.x=at.plat.x+(M.x-at.plat.x)/Kt*ue,M.z=at.plat.z+(M.z-at.plat.z)/Kt*ue),M.vx*=.2,M.vz*=.2}M.onLand&&M.onLand(Xt,at)}else M.x=wt,M.z=St,M.y=mt,M.peak=Math.max(M.peak||mt,mt)}else{if(M.surf==="bridge"){let $t=i.bridgeAt(wt,St);if($t&&$t.off){let de=wt-M.x,q=St-M.z,Le=de*$t.tx+q*$t.tz;wt=M.x+$t.tx*Le,St=M.z+$t.tz*Le}}else if(M.surf==="deck"){let $t=i.deck;St=Re(St,$t.z0+.35,$t.z1-.35),wt=Math.min(wt,$t.x1-.35)}let mt=i.surfaceAt(wt,St,M.y+.4),at=Math.hypot(wt-M.x,St-M.z),Xt=mt.y-M.y,Kt=mt.kind==="path"?.75:.35;if(at>1e-5&&Xt>Kt&&Xt>at*af){let $t=(q,Le)=>{let j=i.surfaceAt(q,Le,M.y+.4),ht=Math.hypot(q-M.x,Le-M.z),K=j.y-M.y;return K<=(j.kind==="path"?.75:.35)||K<=ht*af?[q,Le,j]:null},de=$t(wt,M.z)||$t(M.x,St);de?(wt=de[0],St=de[1],mt=de[2]):(wt=M.x,St=M.z,mt=i.surfaceAt(wt,St,M.y),M.vx*=.3,M.vz*=.3)}let ue=Math.hypot(wt-M.x,St-M.z);if(mt.y<M.y-Math.max(.45,ue*1.45)?Ct.cautious?(wt=M.x,St=M.z,M.vx=M.vz=0,mt=i.surfaceAt(wt,St,M.y),M.y=mt.y):(M.air=!0,M.vy=Math.min(0,M.vy),M.peak=M.y,M.x=wt,M.z=St):(M.x=wt,M.z=St,M.y=mt.y,M.surf=mt.kind,M.plat=mt.plat),!M.air&&!M.surf&&!Ct.noSlide){let $t=i.H(M.x+.4,M.z)-i.H(M.x-.4,M.z),de=i.H(M.x,M.z+.4)-i.H(M.x,M.z-.4),q=Math.hypot($t,de)/.8;if(q>lf){let Le=(q-lf)*9*Tt;M.vx-=$t/.8*Le,M.vz-=de/.8*Le}}}M.speed=Math.hypot(M.x-ae,M.z-xt)/Tt}function m(M,v){let et=c("hero",v.x,v.z,{skin:M,hp:100,maxHp:100,lastHurt:-99,mode:"walk",chute:0,airSpd:0,water:null,inTorrent:0,faintT:0,face:v.face||0});return et.y=v.y!=null?v.y:i.H(v.x,v.z),et.onLand=(J,Tt)=>{l(Tt.kind==="stone"?"landStone":"land"),J>4.2&&w(et,Math.round((J-4.2)*14),"fall")},et}function w(M,v,et){M.kind!=="hero"||M.mode!=="walk"||v<=0||(M.hp=Math.max(0,M.hp-v),M.lastHurt=o.t,l(["hurt",v,et,M.hp]),M.hp<=0&&(M.mode="faint",M.faintT=0,M.vx=M.vz=0,l(["faint",et])))}function p(M,v){let et=o.rest||i.restPoints[0];if(Object.assign(M,{x:et.x,z:et.z,y:i.H(et.x,et.z),vx:0,vy:0,vz:0,air:!1,stun:0,rot:0,mode:"walk",face:et.face||0,inTorrent:0,surf:null}),et.plaza&&(M.y=e.HS),v==="faint"){M.hp=M.maxHp;let J=Math.ceil(o.coinsGot*.2);o.coinsGot-=J,l(["respawn",et.name,J])}else l(["respawn",et.name,0]);o.focus=null}function g(M,v,et){if(M.mode==="faint"){M.faintT+=et,M.faintT>1.6&&p(M,"faint");return}if(M.mode!=="walk")return b(M,v,et);if(o.scope){M.vx=M.vz=0,M.speed=0;return}let J=Re(v.mag||0,0,1);M.stun>0&&(M.stun-=et,J=0);let Tt=J>.62&&!v.sneak,Ct=J<.08?0:Tt?5.6:2.3*Re(J/.62,.4,1),Ft=i.water(M.x,M.z,M.y);M.water=Ft?Ft.kind:null;let oe=M.air?null:M.surf&&M.surf!=="path"?M.surf:i.groundKind(M.x,M.z,M.y);oe==="forest"?Ct*=.78:oe==="rock"&&(Ct*=.85),Ft&&Ft.kind==="river"&&(Ct*=.6);let jt=0,te=0;if(o.summit&&o.summit.wind>0&&(jt=o.summit.wind*1.6,te=o.summit.wind*.48),Ft&&Ft.kind==="torrent"&&!M.air){if(jt+=Ft.dx*3.4,te+=Ft.dz*3.4,M.inTorrent+=et,M.inTorrent>.9){l("swept"),w(M,12,"water"),M.mode==="walk"&&p(M,"swept");return}}else M.inTorrent=0;if(v.jump&&!M.air&&M.stun<=0){M.air=!0,M.vy=6,M.peak=M.y,l("jump");let mt=Math.hypot(M.vx,M.vz);mt>.4&&mt<3.4&&(M.vx*=3.4/mt,M.vz*=3.4/mt),M.airSpd=J>.08?Math.max(3.4,mt):0}let ae=Math.hypot(v.mx||0,v.mz||0),xt=ae>1e-4?v.mx/ae:0,wt=ae>1e-4?v.mz/ae:0;d(M,xt,wt,Ct,et,{pushX:jt,pushZ:te}),M.run=Tt&&M.speed>3,M.speed>.3&&!M.air?M.face=mn(M.face,Math.atan2(M.vz-te,M.vx-jt),12,et):M.air&&Math.hypot(M.vx,M.vz)>.5&&(M.face=mn(M.face,Math.atan2(M.vz,M.vx),8,et)),M.air&&M.vy<-7?M.rot+=et*5:M.air||(M.rot*=Math.pow(.001,et));let St=M.hopPh;M.hopPh=M.speed<.3||M.air?0:M.hopPh+M.speed*et*2.1,M.hopPh&&Math.floor(St/Math.PI)!==Math.floor(M.hopPh/Math.PI)&&l(M.water?"splash":["step",M.run,oe]),M.landT=Math.max(0,M.landT-et),o.t-M.lastHurt>6&&M.hp<M.maxHp&&(M.hp=Math.min(M.maxHp,M.hp+et*3));for(let mt of i.restPoints)(!mt.dyn||mt.on)&&Math.hypot(M.x-mt.x,M.z-mt.z)<(mt.plaza?e.RP-1:3.2)&&Math.abs(M.y-(mt.plaza?e.HS:mt.y))<2.5&&o.rest!==mt&&(o.rest=mt,o.reached.has(mt.id)||(o.reached.add(mt.id),(mt.flag||mt.id==="valley")&&l(["rest",mt.name,mt.id])));for(let mt of o.coins)!mt.taken&&Math.abs(mt.x-M.x)<1.25&&Math.abs(mt.z-M.z)<1.25&&Math.hypot(mt.x-M.x,mt.z-M.z)<1&&Math.abs(mt.y-(M.y+.6))<1.2&&(mt.taken=!0,o.coinsGot++,l(["coin",mt]));!o.summit&&e.rad(M.x,M.z)<e.RP-1&&Math.abs(M.y-e.HS)<1&&!o.carry&&(o.summit={t:0,phase:"wait",wind:0},o.climb.done?l(["summit",0,!1]):(o.climb.done=!0,o.climb.time=o.t-(o.climb.t0||0),l(["summit",o.climb.time,!0]))),o.summit&&o.summit.phase==="wait"&&e.rad(M.x,M.z)>e.RP+8&&(o.summit=null)}function b(M,v,et){let J=o.carry;if(M.mode==="lift"){J.t+=et;let Tt=J.t;M.x=J.from[0]+Tt*Tt*2.2,M.z=J.from[2]+Tt*Tt*.66,M.y=J.from[1]+Tt*Tt*3.2+Math.sin(Tt*6)*.2,M.rot+=et*(4+Tt*3),Tt>2.6&&(M.mode="carry",J.t=0,J.p0=[M.x,M.y,M.z],l("carry"));return}if(M.mode==="carry"){J.t+=et;let Tt=Re(J.t/J.dur,0,1),Ct=Tt*Tt*(3-2*Tt),Ft=[J.p0,[e.x+80,e.HS+48,e.z+14],[n.x-50,n.VF+78,n.z],J.end],oe=xt=>{let wt=1-Ct;return wt*wt*wt*Ft[0][xt]+3*wt*wt*Ct*Ft[1][xt]+3*wt*Ct*Ct*Ft[2][xt]+Ct*Ct*Ct*Ft[3][xt]},jt=oe(0),te=oe(1),ae=oe(2);M.face=Math.atan2(ae-M.z,jt-M.x),M.x=jt,M.y=te,M.z=ae,M.rot+=et*tn(9,2,Tt),o.wind=tn(1,.25,Tt),Tt>=1&&(M.mode="glide",M.vy=-3,M.vx=M.vz=0,M.chute=0,l("chute"),E(M));return}if(M.mode==="glide"){M.chute=Math.min(1,M.chute+et*3),M.rot*=Math.pow(.015,et),M.vy+=(-3.2-M.vy)*Math.min(1,et*3);let Tt=Re(v.mag||0,0,1),Ct=Math.hypot(v.mx||0,v.mz||0),Ft=Ct>1e-4?v.mx/Ct:0,oe=Ct>1e-4?v.mz/Ct:0;M.vx=Ve(M.vx,Ft*4.6*Tt,3,et),M.vz=Ve(M.vz,oe*4.6*Tt,3,et),M.x+=M.vx*et,M.z+=M.vz*et,M.y+=M.vy*et,[M.x,M.z]=i.collide(M.x,M.z,.4,te=>te.tall),Tt>.1&&(M.face=mn(M.face,Math.atan2(oe,Ft),5,et));for(let te of o.coins)!te.taken&&Math.hypot(te.x-M.x,te.z-M.z)<1.25&&Math.abs(te.y-(M.y+.55))<1.3&&(te.taken=!0,o.coinsGot++,l(["coin",te]));o.wind=Math.max(0,o.wind-et*.2);let jt=i.surfaceAt(M.x,M.z,M.y+.5);M.y<=jt.y&&(M.y=jt.y,M.vy=0,M.rot=0,M.chute=0,M.landT=.35,M.mode="walk",M.air=!1,M.surf=jt.kind,o.carry=null,o.drop={x:M.x+Math.cos(M.face)*1.2,z:M.z+Math.sin(M.face)*1.2,t:0,face:M.face},l(["landChute"]))}}function E(M){o.coins=o.coins.filter(v=>!v.sky);for(let v=0;v<20;v++){let et=v*.62;o.coins.push({x:M.x+Math.cos(et)*3.2,z:M.z+Math.sin(et)*3.2,y:M.y-4-v*1.55,sky:!0})}}function A(M){let v=o.summit;if(!(!v||o.carry)){if(v.t+=M,v.phase==="wait"&&v.t>=45&&(v.phase="wind",v.t=0,l("windStart")),v.phase==="wind"&&(v.wind=Re(v.t/7,0,1),o.wind=v.wind,v.t>8.5)){let et=o.hero;o.scope=!1;let[J,Tt]=F();o.carry={t:0,from:[et.x,et.y,et.z],dur:6.2,end:[n.x+J,n.VF+i.V.H0(J,Tt)+34,n.z+Tt]},et.mode="lift",et.air=!0,v.phase="lift",l("lift")}v.phase==="lift"&&!o.carry&&(o.summit=null)}}function F(){let M=pn(o.seed*7+13>>>0),v=(J,Tt)=>!i.tallNear(n.x+J,n.z+Tt,Ct=>Math.hypot(Ct.x-n.x-J,Ct.z-n.z-Tt)<4.5+Ct.r),et=null;for(let J=0;J<80;J++){let Tt=32+M()*56,Ct=M()<.5?-1:1,Ft=Re(n.riverZ(Tt)+Ct*(4.5+M()*3),-n.FLOOR+2.5,n.FLOOR-2.5);if(!(Math.hypot(Tt-o.vq.camp.x,Ft-o.vq.camp.z)<16)){if(v(Tt,Ft))return[Tt,Ft];et||(et=[Tt,Ft])}}return et||[60,n.riverZ(60)+5]}function R(){o.summit&&o.summit.phase==="wait"&&(o.summit.t=45)}function y(M){let v=o.hero,et=v.mode==="walk"&&!o.summit;for(let J of h){J.t+=M,J.cool=Math.max(0,J.cool-M);let Tt=v.x-J.x,Ct=v.z-J.z,Ft=Math.hypot(Tt,Ct),oe=Math.abs(v.y-J.y);if(Ft>120&&J.state==="idle"){J.vx=J.vz=0,J.speed=0;continue}let jt=v.run?14:v.speed>.4?9:5.5,te=J.kind==="wolf",ae=(xt,wt,St)=>{let mt=xt-J.x,at=wt-J.z,Xt=Math.hypot(mt,at);return Xt<.05?(d(J,0,0,0,M,{cautious:!0}),Xt):(d(J,mt/Xt,at/Xt,St,M,{cautious:!0,collFilter:Kt=>!Kt.hedge||!0}),J.speed>.2&&(J.face=mn(J.face,Math.atan2(J.vz,J.vx),8,M)),Xt)};switch(J.state){case"idle":if(et&&J.cool<=0&&Ft<jt&&oe<3){J.state="notice",J.t=0,l([te?"growl":"grunt",J.kind]);break}if(J.t>3+Math.random()*3){J.t=0;let xt=Math.random()*xe;J.tx=J.home.x+Math.cos(xt)*5,J.tz=J.home.z+Math.sin(xt)*5}Math.hypot(J.tx-J.x,J.tz-J.z)>.6?ae(J.tx,J.tz,1):ae(J.x,J.z,0);break;case"notice":if(ae(J.x,J.z,0),J.face=mn(J.face,Math.atan2(Ct,Tt),10,M),!et){J.state="return";break}if(J.t>(te?.6:.9)){if(J.state=te?"chase":"charge",J.t=0,!te){let xt=Ft||1;J.charge=[Tt/xt,Ct/xt]}l([te?"howl":"grunt",J.kind])}break;case"chase":ae(v.x,v.z,4.7),(!et||Ft>22||J.t>7||Math.hypot(J.x-J.home.x,J.z-J.home.z)>32)&&(J.state="return",J.cool=3);break;case"charge":{let xt=J.x,wt=J.z;d(J,J.charge[0],J.charge[1],7.8,M,{cautious:!0}),J.face=Math.atan2(J.charge[1],J.charge[0]),(Math.hypot(J.x-xt,J.z-wt)<7.8*M*.3||J.t>1.8)&&(J.state=et&&Ft<12&&J.t<6?"notice":"return",J.t=0);break}case"return":(ae(J.home.x,J.home.z,2.2)<1||J.t>20)&&(J.state="idle",J.t=0);break}if(J.ph+=M*(J.state==="chase"||J.state==="charge"?16:J.speed>.3?8:0),(J.state==="chase"||J.state==="charge")&&Ft<.95&&oe<1.2&&v.stun<=0&&et){let xt=Ft||1;v.vx=Tt/xt*6,v.vz=Ct/xt*6,v.stun=.9,v.landT=.3,J.state="return",J.cool=6;let wt=te?18:25;l(["bitten",J.kind,wt]),w(v,wt,J.kind)}}}let x=(M,v)=>[M-n.x,v-n.z],P={mer:[1.05,-.5],zone:[2.35,.35],pen:[-4.45,-1.75]},T=[[-1.1,-2.8,1.25],[0,-2.8,1.3],[1.1,-2.8,1.25],[-.78,-.8,.55],[4,-2.4,.62],[1.95,-1.8,.35],[-2.05,-1.6,.4],[1.68,-.25,.14],[-1.68,-.25,.14],[1.05,-.5,.42],[-5.8,-1,.3],[-5.8,-1.8,.3],[-5.8,-2.6,.3],[-5.1,-2.9,.3],[-4.45,-2.9,.3],[-3.8,-2.9,.3],[-3.1,-2.6,.3],[-3.1,-1.8,.3],[-3.1,-1,.3]],V=[],Z={id:"camp",x:0,z:0,y:0,name:"\u062E\u064A\u0645\u0629 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",face:0,flag:!1,dyn:!0,on:!1};i.restPoints.push(Z);function O(M,v,et){let J=Math.cos(M.rot),Tt=Math.sin(M.rot);return{x:n.x+M.x+v*J+et*Tt,z:n.z+M.z-v*Tt+et*J}}function $(M){for(let et of V)i.removeColl(et);o.vq.camp=M,o.vq.merW=O(M,...P.mer),o.vq.zoneW=O(M,...P.zone),o.vq.penW=O(M,...P.pen),V=T.map(([et,J,Tt])=>i.addColl({...O(M,et,J),r:Tt})),Object.assign(f,{x:o.vq.merW.x,z:o.vq.merW.z,y:n.VF+M.base,face:M.rot});let v=O(M,0,3.2);Object.assign(Z,{x:v.x,z:v.z,y:i.H(v.x,v.z),face:M.rot+Math.PI/2})}function U(M){M.state="flee",M.t=0,M.stuck=0;let v=o.hero,et=Math.hypot(M.x-v.x,M.z-v.z)||1;M.fx=(M.x-v.x)/et,M.fz=(M.z-v.z)/et,l("snort")}function k(M){let v=u,et=o.hero,J=o.vq;v.t+=M;let Tt=et.x-v.x,Ct=et.z-v.z,Ft=Math.hypot(Tt,Ct)||.001,oe=Math.atan2(Ct,Tt);if(Ft>140&&!J.caught){v.vx=v.vz=0;return}let jt=et.mode==="walk"?et.speed:0,te=Math.hypot(v.vx,v.vz)>.2;if(v.ph+=M*(v.state==="flee"?15:te?8:0),v.state!=="flee"&&v.state!=="leap"&&(v.stamina=Math.min(4,v.stamina+M*(v.state==="tired"?.5:.8))),!J.caught&&["graze","look","walk","alert"].includes(v.state)){let mt=Ft<22?1+(1-Ft/22)*1.6:0,at=v.state!=="graze",Xt=jt>4?at?2.6:1.4:jt>.5?at?1.1:.06:0;v.sus=Re(v.sus+(Xt*mt>0?Xt*mt:-.3)*M,0,1)}let ae=(mt,at)=>{let[Xt,Kt]=x(mt,at);return i.slope(mt,at)<.7&&Xt>1&&Xt<n.VL-1&&Math.abs(Kt)<n.FLOOR+1},xt=(mt,at,Xt)=>{let Kt=mt-v.x,ue=at-v.z,$t=Math.hypot(Kt,ue);if($t<.05)return v.vx=v.vz=0,$t;v.vx=Ve(v.vx,Kt/$t*Xt,6,M),v.vz=Ve(v.vz,ue/$t*Xt,6,M);let de=v.x+v.vx*M,q=v.z+v.vz*M;return[de,q]=i.collide(de,q,.42),ae(de,q)&&(v.x=de,v.z=q),v.face=mn(v.face,Math.atan2(v.vz,v.vx),7,M),$t},[wt,St]=x(v.x,v.z);switch(v.state){case"graze":if(v.vx=v.vz=0,v.sus>.5)v.state="alert",v.t=0,l("snort");else if(v.t>v.gt)if(v.t=0,Math.random()<.72)v.state="look";else for(let mt=0;mt<12;mt++){let at=wt+(Math.random()-.5)*14,Xt=St+(Math.random()-.5)*10;if(n.onFloor(at,Xt)&&Math.abs(Xt-n.riverZ(at))>1.6){v.tx=n.x+at,v.tz=n.z+Xt,v.state="walk";break}}break;case"look":v.vx=v.vz=0,Ft<26&&(v.face=mn(v.face,oe,4,M)),v.sus>.5?(v.state="alert",v.t=0,l("snort")):v.t>1.1&&(v.state="graze",v.t=0,v.gt=1.4+Math.random()*1.8);break;case"walk":if(v.sus>.5){v.state="alert",v.t=0,v.vx=v.vz=0,l("snort");break}(xt(v.tx,v.tz,1.1)<.4||v.t>6)&&(v.state="graze",v.t=0,v.vx=v.vz=0,v.gt=1.4+Math.random()*1.8);break;case"alert":v.vx=v.vz=0,v.face=mn(v.face,oe,8,M),v.sus>=1||Ft<1.6?U(v):v.sus<.3&&(v.state="graze",v.t=0,v.gt=1.2+Math.random()*1.2);break;case"flee":{v.stamina-=M;let mt=8.2*(.55+.45*Math.max(0,v.stamina)/4),at=-Tt/Ft,Xt=-Ct/Ft;Math.abs(St)>5.5&&(Xt-=Math.sign(St)*(Math.abs(St)-5.5)*.45),wt<8&&(at+=(8-wt)*.35),wt>n.VL-8&&(at-=(wt-n.VL+8)*.35);let Kt=Math.hypot(at,Xt)||1;v.fx=Ve(v.fx,at/Kt,5,M),v.fz=Ve(v.fz,Xt/Kt,5,M);let ue=Math.hypot(v.fx,v.fz)||1,$t=v.fx/ue,de=v.fz/ue,q=v.x+$t*mt*M,Le=v.z+de*mt*M;[q,Le]=i.collide(q,Le,.42);let j=Math.hypot(q-v.x,Le-v.z);ae(q,Le)&&(v.vx=(q-v.x)/M,v.vz=(Le-v.z)/M,v.x=q,v.z=Le),v.stuck=j<mt*M*.35?v.stuck+M:0,v.face=mn(v.face,Math.atan2(de,$t),10,M),v.stuck>.35&&Ft<10?(v.state="cornered",v.t=0,v.vx=v.vz=0):v.stamina<=0?(v.state="tired",v.t=0,l("tired")):Ft>32&&v.t>1.5&&(v.state="graze",v.t=0,v.vx=v.vz=0,v.sus=.35,v.gt=1.5);break}case"tired":Ft<9?xt(v.x-Tt/Ft*2,v.z-Ct/Ft*2,2.3):v.vx=v.vz=0,v.stamina>3.2&&v.t>2.2&&(v.sus=.45,Ft<6?U(v):(v.state="graze",v.t=0));break;case"cornered":if(v.vx=v.vz=0,v.face=mn(v.face,oe,8,M),!v.triedLeap&&Ft<4&&v.t>.4){let mt=et.x+Tt/Ft*4.5,at=et.z+Ct/Ft*4.5,[Xt,Kt]=x(mt,at);n.onFloor(Xt,Kt)||(mt=et.x+Tt/Ft*3,at=n.z+Re(x(0,et.z+Ct/Ft*3)[1],-(n.FLOOR-2),n.FLOOR-2)),Object.assign(v,{triedLeap:!0,state:"leap",t:0,from:[v.x,v.z],to:[mt,at]}),l("snort")}else v.t>4&&Ft>9&&(v.state="graze",v.t=0,v.sus=.4);break;case"leap":{let mt=Math.min(1,v.t/.75);v.x=tn(v.from[0],v.to[0],mt),v.z=tn(v.from[1],v.to[1],mt),v.hy=Math.sin(mt*Math.PI)*1.5,v.vx=(v.to[0]-v.from[0])/.75,v.vz=(v.to[1]-v.from[1])/.75,v.face=Math.atan2(v.vz,v.vx),mt>=1&&(v.hy=0,U(v));break}case"follow":{let mt=et.x-Math.cos(et.face)*1.45,at=et.z-Math.sin(et.face)*1.45,Xt=Math.hypot(mt-v.x,at-v.z);if(Xt>12)v.x=mt,v.z=at;else if(Xt>.08){v.vx=Ve(v.vx,(mt-v.x)/Xt*Math.min(7,Xt*3.2),6,M),v.vz=Ve(v.vz,(at-v.z)/Xt*Math.min(7,Xt*3.2),6,M);let Kt=v.x+v.vx*M,ue=v.z+v.vz*M;[Kt,ue]=i.collide(Kt,ue,.42),v.x=Kt,v.z=ue,v.face=mn(v.face,Math.atan2(v.vz,v.vx),7,M)}else v.vx=v.vz=0;break}case"pen":{let mt=J.penW,at=Math.hypot(mt.x-v.x,mt.z-v.z);at>.3?(v.vx=(mt.x-v.x)/at*1.3,v.vz=(mt.z-v.z)/at*1.3,v.x+=v.vx*M,v.z+=v.vz*M,v.face=mn(v.face,Math.atan2(v.vz,v.vx),6,M)):v.vx=v.vz=0;break}}v.y=i.H(v.x,v.z)+(v.hy||0),!J.caught&&et.mode==="walk"&&["graze","look","walk","alert","tired","cornered"].includes(v.state)&&Ft<1.2&&(v.hy||0)<.25&&Math.abs(et.y-v.y)<1.5&&(J.caught=!0,v.state="follow",v.vx=v.vz=0,v.sus=0,o.focus={t:2.2,dist:5.2,yaw:Math.atan2(v.z-et.z,v.x-et.x)-Math.PI/2},l("catch"))}function B(M){let v=o.hero,et=o.vq;if(v.mode!=="walk")return;let J=Math.hypot(v.x-et.merW.x,v.z-et.merW.z),Tt=et.camp,Ct=Math.atan2(-Math.cos(Tt.rot),-Math.sin(Tt.rot));!et.called&&J<24&&Math.abs(v.y-f.y)<8&&(et.called=!0,l("call")),!et.met&&J<4.2&&(et.met=!0,Z.on=!0,o.focus={t:3.4,dist:6.2,x:(v.x+et.merW.x)/2,z:(v.z+et.merW.z)/2,yaw:Ct,talk:!0},l("meet")),et.caught&&!et.delivered&&Math.hypot(v.x-et.zoneW.x,v.z-et.zoneW.z)<1.7&&(et.delivered=!0,u.state="pen",o.focus={t:4.6,dist:6.6,x:(v.x+et.merW.x)/2,z:(v.z+et.merW.z)/2,yaw:Ct,talk:!0},l("deliver"))}function st(M,v={}){o.seed=(v.seed!=null?v.seed:Math.random()*4294967295)>>>0;let et=pn(o.seed);s.length=0,s.push(...h,u,f);for(let oe of h)Object.assign(oe,{x:oe.home.x,z:oe.home.z,y:oe.home.y,vx:0,vz:0,vy:0,air:!1,state:"idle",cool:0,t:Math.random()*2});$(n.CAMPS[Math.floor(et()*n.CAMPS.length)]);let J=60,Tt=0;for(let oe=0;oe<400;oe++){let jt=6+et()*(n.VL-12),te=(et()-.5)*2*(n.FLOOR-2.5);if(!(jt<22||Math.hypot(jt-o.vq.camp.x,te-o.vq.camp.z)<24||Math.abs(te-n.riverZ(jt))<2.2||!n.onFloor(jt,te))){J=jt,Tt=te;break}}Object.assign(u,{x:n.x+J,z:n.z+Tt,vx:0,vz:0,state:"graze",t:0,gt:2.5,sus:0,stamina:4,triedLeap:!1,hy:0,face:et()*xe}),u.y=i.H(u.x,u.z),Object.assign(o.vq,{met:!1,called:!1,caught:!1,delivered:!1}),Z.on=!1,o.coins=e.coins.map(oe=>({...oe,taken:!1})),o.coinsGot=0,o.summit=null,o.scope=!1,o.carry=null,o.focus=null,o.wind=0,o.t=0,o.drop=null,o.climb={done:!1,time:0,t0:0},o.reached=new Set;let Ct=i.restPoints[0];o.rest=Ct,o.reached.add(Ct.id),o.hero=m(M,Ct),s.push(o.hero);let Ft=o.hero;if(v.at==="summit"&&(Object.assign(Ft,{x:e.x-e.RP+2.5,z:e.z+2,y:e.HS}),o.rest=i.restPoints.find(oe=>oe.id==="summit"),o.climb.done=!0),v.at==="valley"){let[oe,jt]=F();Object.assign(Ft,{x:n.x+oe,z:n.z+jt,y:n.VF+n.H0(oe,jt)+34,mode:"glide",air:!0,chute:.01,vy:-3}),o.carry={t:0},o.climb.done=!0,E(Ft),l("chute")}return{camp:n.CAMPS.indexOf(o.vq.camp),gazelle:[u.x,u.z],start:[Ft.x,Ft.z]}}function it(M){return M==="scope"?(o.scope=!o.scope,!0):(M==="tea"&&(o.hero.hp=o.hero.maxHp),!0)}function yt(){let M=o.hero;if(M.mode!=="walk"||!o.summit||o.summit.phase!=="wait")return null;let v=null,et=1e9;for(let J of e.plaza.inter){let Tt=Math.hypot(M.x-J.x,M.z-J.z);Tt<J.r&&Tt<et&&(et=Tt,v=J)}return v}function It(){let M=o.hero,v=o.vq,[et,J]=x(M.x,M.z),Tt=et>-70&&et<n.VL+25&&Math.abs(J)<45;return M.mode==="lift"||M.mode==="carry"?"\u{1F32A}\uFE0F \u0627\u0644\u0631\u064A\u062D \u0634\u0627\u0644\u062A\u0643!":M.mode==="glide"?"\u{1FA82} \u0627\u0646\u0632\u0644 \u0628\u0627\u0644\u0645\u0638\u0644\u0629":M.mode==="faint"?"\u{1F635} \u2026":o.summit?o.summit.phase==="wait"?"\u2615 \u0627\u0633\u062A\u0631\u064A\u062D \u0628\u0627\u0644\u0633\u0627\u062D\u0629":"\u{1F4A8} \u0627\u0644\u0631\u064A\u062D!":Tt||o.climb.done&&!v.delivered?v.delivered?"\u{1F30D} \u062A\u0645\u0634\u0651\u0649 \u0628\u0627\u0644\u0639\u0627\u0644\u0645":v.caught?v.met?"\u{1F3D5}\uFE0F \u0631\u062C\u0651\u0639\u0647 \u0644\u0623\u0628\u0648 \u062C\u0627\u0633\u0645":"\u{1F50E} \u062F\u0648\u0651\u0631 \u0639\u0644\u0649 \u0627\u0644\u062A\u0627\u062C\u0631":v.called&&!v.met?"\u{1F50E} \u062F\u0648\u0651\u0631 \u0639\u0644\u0649 \u0627\u0644\u063A\u0632\u0627\u0644 \u0648\u0627\u0644\u062A\u0627\u062C\u0631":"\u{1F50E} \u062F\u0648\u0651\u0631 \u0639\u0644\u0649 \u0627\u0644\u063A\u0632\u0627\u0644":o.climb.done?"\u{1F30D} \u062A\u0645\u0634\u0651\u0649 \u0628\u0627\u0644\u0639\u0627\u0644\u0645":"\u26F0\uFE0F \u0627\u0637\u0644\u0639 \u0644\u0644\u0642\u0645\u0629"}function Vt(M,v){a.length=0,o.t+=M;let et=o.hero;return et?(g(et,v||{},M),A(M),!o.summit&&!o.carry&&(o.wind=Math.max(0,o.wind-M*.35)),y(M),k(M),B(M),o.drop&&(o.drop.t+=M),o.focus&&(o.focus.t-=M,o.focus.t<=0&&(o.focus=null)),a.slice()):[]}return{S:o,ents:s,beasts:h,gz:u,merchant:f,step:Vt,enter:st,interact:it,nearInteract:yt,skipWait:R,objective:It,respawn:()=>{o.hero&&o.hero.mode==="walk"&&p(o.hero,"menu")},hurt:M=>w(o.hero,M,"test")}}var lr=Math.PI/180;function hf(i,t,e){let n=i.renderer,s=t.M,r=t.V,o=e.S,a=new Ur,l=new ge("#CFDFE8");a.background=l,a.fog=new Nr(l,60,400);let c=new An(62,.5,.1,2600),h={time:{value:0},wind:{value:0},see:{value:new en(0,0,0,0)}},u=pn(4242),f=new ro("#D2E6FF","#6A8A4E",1);a.add(f);let d=new G(.5,.72,.45).normalize(),m=new ao("#FFE9C4",2.9);m.castShadow=!0,m.shadow.mapSize.set(2048,2048),Object.assign(m.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:1,far:180}),m.shadow.bias=-5e-4,m.shadow.normalBias=.03,m.shadow.radius=2.5,a.add(m,m.target);let w=$d("#3A7FD6","#9CCBF2","#EFE7D6",new G(.6,.35,-.7));a.add(w);let p=jd(),g=tf(),b=new Ze({vertexColors:!0}),E=new Ze({vertexColors:!0,flatShading:!0}),A=new Ze({vertexColors:!0,flatShading:!0}),F=[],R=(W,tt)=>W*100003+tt,y=t.HALF,x=64,P=Math.ceil(y*2/x),T=-P*x/2;function V(W,tt,H,N,nt){let ot=s.rad(W,H),_t=r.Hv(W,H);if(_t<=tt+.02&&_t<1e8){let C=W-r.x,z=H-r.z,D=Math.abs(z),I=qn(C*.07+11,z*.07),Q=fn(C*.5,z*.5);Xe(nt,"#5FAE3E","#9AD85E",I*1.3-.15+Q*.2);let lt=Math.abs(z-r.riverZ(C));lt<2.4&&D<r.FLOOR+1&&C>-4&&nt.lerp(Yn.set(lt<1?"#8F8A62":"#D9C891"),Se(2.4,1.3,lt));let rt=Se(1.2,5,tt-r.VF)*Se(r.FLOOR-.5,r.FLOOR+4,D)+Se(.55,.9,N)*.8;if(rt>0){let pt=.5+.5*Math.sin(tt*1.9+qn(W*.05,H*.05)*4);Xe(bo,"#B98F62","#DDBE8E",pt),bo.lerp(Yn.set("#8E6A48"),fn(W*.35,tt*.6)*.35),nt.lerp(bo,Re(rt,0,1))}return C<0&&D<9&&nt.lerp(Yn.set("#A88C62"),Se(-2,-12,C)*Se(9,5,D)*.6),nt}if(ot<205){Xe(nt,"#3E6E2E","#6E9A44",qn(W*.06+3,H*.06)*1.2-.1),N>.8&&(Xe(Yn,"#5E5A55","#A9A398",fn(W*.35+H*.2,tt*1.6)*.8+fn(W*2,H*2+tt)*.35),nt.lerp(Yn,Se(.8,1.3,N)));let C=s.nearest(W,H,tt,1);return C&&C.d<C.p.hw+.9&&C.p.kind!=="bridge"&&nt.lerp(Yn.set("#9C7E55"),Se(C.p.hw+.9,C.p.hw-.2,C.d)*.85),ot<s.RP+1&&nt.set("#9A9388"),ot>190&&nt.lerp(Yn.set("#5E8F3E"),Se(190,205,ot)),nt}let _=Math.max(Math.abs(W),Math.abs(H));return Xe(nt,"#5E8F3E","#9BBF5C",qn(W*.02+9,H*.02)*1.25-.15),nt.lerp(Yn.set("#C8B87A"),Se(.55,.85,fn(W*.01+3,H*.01))*.45),N>.75&&(Xe(Yn,"#6D675E","#ABA294",fn(W*.2,tt*.7)),nt.lerp(Yn,Se(.75,1.2,N))),tt>40&&nt.lerp(Yn.set("#F2F5F8"),Se(40,60,tt+(fn(W*.05,H*.05)-.5)*16)*Se(380,430,_)),nt}let Z=[];function O(W,tt,H){let N=T+W*x,nt=T+tt*x,ot=Math.round(x/H)+1,_t=ot+2,At=new Float32Array(_t*_t);for(let ft=0;ft<_t;ft++)for(let Lt=0;Lt<_t;Lt++)At[ft*_t+Lt]=t.H(N+(Lt-1)*H,nt+(ft-1)*H);let _=(ft,Lt)=>At[(Lt+1)*_t+(ft+1)],C=[],z=[],D=[],I=[];for(let ft=0;ft<ot;ft++)for(let Lt=0;Lt<ot;Lt++){let gt=N+Lt*H,ut=nt+ft*H,Ht=_(Lt,ft),Jt=(_(Lt+1,ft)-_(Lt-1,ft))/(2*H),le=(_(Lt,ft+1)-_(Lt,ft-1))/(2*H),he=Math.hypot(Jt,le),ve=Math.hypot(Jt,1,le);if(C.push(gt,Ht,ut),I.push(-Jt/ve,1/ve,-le/ve),V(gt,Ht,ut,he,Qe),z.push(Qe.r,Qe.g,Qe.b),Lt<ot-1&&ft<ot-1){let Wt=ft*ot+Lt;D.push(Wt,Wt+ot,Wt+1,Wt+1,Wt+ot,Wt+ot+1)}}let Q=[];for(let ft=0;ft<ot;ft++)Q.push(ft);for(let ft=1;ft<ot;ft++)Q.push(ft*ot+ot-1);for(let ft=ot-2;ft>=0;ft--)Q.push((ot-1)*ot+ft);for(let ft=ot-2;ft>0;ft--)Q.push(ft*ot);let lt=C.length/3;Q.forEach(ft=>{C.push(C[ft*3],C[ft*3+1]-(H>3?6:2.5),C[ft*3+2]),z.push(z[ft*3],z[ft*3+1],z[ft*3+2]),I.push(I[ft*3],I[ft*3+1],I[ft*3+2])});for(let ft=0;ft<Q.length;ft++){let Lt=Q[ft],gt=Q[(ft+1)%Q.length],ut=lt+ft,Ht=lt+(ft+1)%Q.length;D.push(Lt,ut,gt,gt,ut,Ht,Lt,gt,ut,gt,Ht,ut)}let rt=new ke;rt.setAttribute("position",new De(new Float32Array(C),3)),rt.setAttribute("normal",new De(new Float32Array(I),3)),rt.setAttribute("color",new De(new Float32Array(z),3)),rt.setIndex(D),rt.computeBoundingSphere();let pt=new Pt(rt,b);return pt.receiveShadow=!0,pt.matrixAutoUpdate=!1,a.add(pt),pt}for(let W=0;W<P;W++)for(let tt=0;tt<P;tt++){let H=T+(W+.5)*x,N=T+(tt+.5)*x,nt=O(W,tt,8),ot={i:W,j:tt,x:H,z:N,lo:nt,hi:null};Z.push(ot)}let $=Z.slice();function U(W,tt,H){if(!$.length)return!0;tt!=null&&$.sort((nt,ot)=>(nt.x-tt)**2+(nt.z-H)**2-((ot.x-tt)**2+(ot.z-H)**2));let N=performance.now();for(;$.length&&performance.now()-N<W;){let nt=$.shift();nt.hi=O(nt.i,nt.j,2),nt.hi.visible=!1}return!$.length}{let W=Hi(64,256,(_,C,z)=>{_.clearRect(0,0,C,z);for(let D=0;D<z;D+=2){let I=6+fn(D*.06,1)*8,Q=C-6-fn(D*.06,5)*8,lt=_.createLinearGradient(I,0,Q,0);lt.addColorStop(0,"rgba(150,118,78,0)"),lt.addColorStop(.2,"rgba(150,118,78,.95)"),lt.addColorStop(.8,"rgba(140,108,70,.95)"),lt.addColorStop(1,"rgba(140,108,70,0)"),_.fillStyle=lt,_.fillRect(I,D,Q-I,2)}for(let D=0;D<260;D++)_.fillStyle=`rgba(${90+D%5*20},${80+D%7*12},${60+D%3*10},.6)`,_.beginPath(),_.arc(8+Math.random()*(C-16),Math.random()*z,.5+Math.random()*1.4,0,xe),_.fill()},[1,1]),tt=[],H=[],N=[],nt=0,ot=_=>{if(_.length<2)return;let C=0;_.forEach((z,D)=>{let I=_[Math.max(0,D-1)],Q=_[Math.min(_.length-1,D+1)],lt=Q.x-I.x,rt=Q.z-I.z,pt=Math.hypot(lt,rt)||1,ft=-rt/pt,Lt=lt/pt,gt=z.hw+.35;if(D&&(C+=Math.hypot(z.x-_[D-1].x,z.z-_[D-1].z)/6),tt.push(z.x+ft*gt,z.y+.06,z.z+Lt*gt,z.x-ft*gt,z.y+.06,z.z-Lt*gt),H.push(0,C,1,C),D){let ut=nt+(D-1)*2;N.push(ut,ut+2,ut+1,ut+1,ut+2,ut+3)}}),nt+=_.length*2};for(let _ of s.segs){let C=[];for(let z of _.pts)z.kind==="bridge"||z.kind==="stones"||z.kind==="stairs"?(ot(C),C=[]):C.push(z);ot(C)}let _t=new ke;_t.setAttribute("position",new De(new Float32Array(tt),3)),_t.setAttribute("uv",new De(new Float32Array(H),2)),_t.setIndex(N),_t.computeVertexNormals();let At=new Pt(_t,new Ze({map:W,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,side:He}));At.receiveShadow=!0,a.add(At)}{let W=s.stream,tt=[],H=[],N=[],nt=0;for(let At=W.r0;At<=W.r1;At+=1){let _=s.x+Math.cos(W.a)*At,C=s.z+Math.sin(W.a)*At,z=-Math.sin(W.a),D=Math.cos(W.a),I=s.Hnat(_,C)+.5;if(tt.push(_+z*2.2,I,C+D*2.2,_-z*2.2,I,C-D*2.2),H.push(0,At/4,1,At/4),nt){let Q=(nt-1)*2;N.push(Q,Q+2,Q+1,Q+1,Q+2,Q+3)}nt++}let ot=new ke;ot.setAttribute("position",new De(new Float32Array(tt),3)),ot.setAttribute("uv",new De(new Float32Array(H),2)),ot.setIndex(N),ot.computeVertexNormals();let _t=new Pt(ot,new Un({color:"#4AA6D8",specular:"#FFFFFF",shininess:140,normalMap:g,transparent:!0,opacity:.9,side:He}));_t.material.normalScale.set(.8,.8),a.add(_t)}{let W=[],tt=[],H=[],N=0;for(let _t=-6;_t<=r.VL+6;_t+=.5){let At=r.riverZ(_t),_=(r.riverZ(_t+.1)-At)/.1,C=Math.hypot(1,_),z=-_/C,D=1/C,I=r.waterLevel(_t);for(let Q of[-1.35,1.35])W.push(r.x+_t+z*Q,I,r.z+At+D*Q),tt.push(_t/3,Q>0?1:0);if(N){let Q=(N-1)*2;H.push(Q,Q+1,Q+2,Q+1,Q+3,Q+2)}N++}let nt=new ke;nt.setAttribute("position",new De(new Float32Array(W),3)),nt.setAttribute("uv",new De(new Float32Array(tt),2)),nt.setIndex(H),nt.computeVertexNormals();let ot=new Pt(nt,new Un({color:"#3D9FD8",specular:"#FFFFFF",shininess:140,normalMap:g,transparent:!0,opacity:.88}));ot.material.normalScale.set(.7,.7),ot.receiveShadow=!0,a.add(ot)}let k=(W,tt,H,N,nt)=>{let ot=[Yt(Qt(new pe(.13,.22,H*.45,6),0,H*.22,0),"#5A3E26")];for(let _t=0;_t<tt;_t++){let At=_t/tt,_=N*(1-At*.62),C=H*.42;ot.push(Qt(Yt(new Fn(_,C,8,1),(z,D,I)=>Xe(z,nt?"#1F4A2B":"#24572F",nt?"#3F7A43":"#4E8C46",.25+(I/C+.5)*.6+(cn(D*7,I*3)-.5)*.25)),0,H*.32+_t*H*.22+C/2,0,0,W()*3,0))}return _n(ot)},B=()=>{let W=pn(43),tt=[Yt(Qt(new pe(.14,.22,2.6,6),0,1.3,0),"#5A3E26")];for(let[H,N,nt,ot]of[[0,3.1,0,1.35],[.7,2.6,.3,.95],[-.6,2.7,-.4,1],[.1,3.8,-.2,.9]])tt.push(Qt(Yt(new Mn(ot,0),(_t,At,_)=>Xe(_t,"#2C6B33","#6FAE4E",.3+_/ot*.35+(W()-.5)*.3)),H,N,nt));return _n(tt)},st=(W,tt,H)=>Yt(Qt(new Fn(tt*.9,W*.95,6,1,!0),0,W*.62,0),(N,nt,ot)=>Xe(N,H?"#1F4A2B":"#24572F",H?"#3F7A43":"#4E8C46",.3+(ot/W+.5)*.5)),it={pine:Wi(new Ze({vertexColors:!0,flatShading:!0}),.006,2,h),tree:Wi(new Ze({vertexColors:!0,flatShading:!0}),.01,1.2,h),palm:Wi(new Ze({vertexColors:!0,side:He}),.012,2.8,h),grass:Wi(new Ze({vertexColors:!0,side:He}),.5,0,h)},yt={pineA:k(pn(5),4,7.5,2,!1),pineB:k(pn(6),3,6,2.5,!0),oak:B()};function It(W,tt,H,N={}){let nt=new Map,ot=new on,_t=N.size||26;for(let At of H){let _=R(Math.floor(At.x/_t),Math.floor(At.z/_t));nt.has(_)||nt.set(_,[]),nt.get(_).push(At)}for(let At of nt.values()){let _=new $i(W,tt,At.length),C=0,z=0;At.forEach((I,Q)=>{ot.position.set(I.x,I.y,I.z),ot.rotation.set(I.rx||0,I.ry||0,I.rz||0),I.s3?ot.scale.set(...I.s3):ot.scale.setScalar(I.s||1),ot.updateMatrix(),_.setMatrixAt(Q,ot.matrix),I.color&&_.setColorAt(Q,Qe.set(I.color)),C+=I.x,z+=I.z}),_.castShadow=!!N.cast,_.receiveShadow=!0,_.computeBoundingSphere(),a.add(_);let D=null;N.lod&&(D=new $i(N.lod,A,At.length),D.instanceMatrix=_.instanceMatrix,D.computeBoundingSphere(),D.visible=!1,a.add(D)),F.push({m:_,lo:D,x:C/At.length,z:z/At.length,far:N.far||105,lodAt:N.lodAt||62,small:!!N.small})}}let Vt=t.veg;It(yt.pineA,it.pine,Vt.pineA,{cast:!0,lod:st(7.5,2,!1)}),It(yt.pineB,it.pine,Vt.pineB,{cast:!0,lod:st(6,2.5,!0)}),It(yt.oak,it.tree,Vt.oak,{cast:!0,lod:Qt(Yt(new Mn(1.5,0),"#3E7D3A"),0,3.1,0)});let M=_n([Qt(Yt(new Mn(.85,0),(W,tt,H,N)=>Xe(W,"#1E4A24","#4C8A3E",.35+H*.4+cn(tt*9,N*9)*.3)),0,.55,0,0,0,0,1,.95,1),Qt(Yt(new Mn(.6,0),(W,tt,H)=>Xe(W,"#2A5C2C","#5E9E48",.5+H*.5)),.25,1.25,.1)]),v=nf(E,h);It(M,v,Vt.hedge,{size:26,far:70,cast:!1}),It(Sh(),v,Vt.bush,{size:30,far:70,small:!0}),It(bh(),E,Vt.rock,{size:30,far:120});let et=[Gl(pn(3),1.1,9),Gl(pn(8),-.8,10),Gl(pn(15),.5,8)],J=_n([Yt(Qt(new pe(.25,.4,8,5),0,4,0),"#8B6A3E"),Yt(Qt(new Mn(1.6,0),0,8.4,0,0,0,0,1,.55,1),"#3A7F34")]);et.forEach((W,tt)=>It(W,it.palm,Vt.palm[tt],{cast:!0,lod:J,lodAt:70,far:260})),[Hl(pn(21),"#E8443A",["#2F8A3C","#7CCB55"]),Hl(pn(33),null,["#3B9447","#8AD460"]),Hl(pn(41),"#FFB52E",["#2C7F3A","#6FC24F"])].forEach((W,tt)=>It(W,it.tree,Vt.fruit[tt],{cast:!0,far:220})),It(Sh(),E,Vt.vbush,{size:30,far:90,small:!0}),It(bh(),E,Vt.vrock,{size:30,far:70,small:!0}),It(Yt(new hi(.5,1),(W,tt,H,N)=>Xe(W,"#9C7A56","#D2B387",.45+H*.9+(cn(tt*5,N*5)-.5)*.4)),E,Vt.boulder,{size:40,far:260}),It(_n([Qt(Yt(new pe(.15,.22,1.6,5),"#6B4A2A"),0,.8,0),Qt(Yt(new Mn(1.2,0),(W,tt,H)=>Xe(W,"#4F7F3A","#8DB45E",H/1.2*.5+.5)),0,2.3,0,0,0,0,1,.85,1)]),E,Vt.rim,{size:40,far:300});{let W=pn(5151),tt=(I,Q)=>[r.x+I,r.z+Q],H=(I,Q,lt)=>r.CAMPS.some(rt=>Math.hypot(I-rt.x,Q-rt.z)<lt),N=[],nt=[],ot=[];for(let I=0;N.length<6e3&&I<3e4;I++){let Q=-3+W()*(r.VL+6),lt=(W()<.5?-1:1)*W()*(r.FLOOR+3);if(Math.abs(lt-r.riverZ(Q))<1.15||H(Q,lt,3.9))continue;let[rt,pt]=tt(Q,lt);t.slope(rt,pt)>.6||N.push({x:rt,y:t.H(rt,pt)-.02,z:pt,ry:W()*xe,s:.5+W()*.7})}let _t=["#FF6B9A","#FFFFFF","#FFD23F","#B28DFF","#FF8C42","#FF4D6D","#7FD1FF"];for(let I=0;I<9e3&&nt.length<2400;I++){let Q=-2+W()*(r.VL+4),lt=(W()<.5?-1:1)*W()*(r.FLOOR-.3);if(Math.abs(lt-r.riverZ(Q))<1.3||H(Q,lt,3.9)||fn(Q*.16,lt*.16)<.42)continue;let[rt,pt]=tt(Q,lt);nt.push({x:rt,y:t.H(rt,pt),z:pt,ry:W()*xe*.25,s:1.2+W()*.8,color:_t[Math.floor(fn(Q*.3+40,lt*.3)*_t.length*.999+W()*1.5)%_t.length]})}for(let I=-4;I<r.VL+4;I+=.55)for(let Q of[-1,1]){if(W()<.35)continue;let lt=r.riverZ(I)+Q*(1.05+W()*.55);if(H(I,lt,5))continue;let[rt,pt]=tt(I,lt);ot.push({x:rt,y:t.H(rt,pt)-.05,z:pt,ry:W()*xe,s:.7+W()*.6})}It(wh(),it.grass,N,{size:24,far:55,small:!0});let At=_n([Qt(Yt(new pe(.007,.01,.24,3,1,!0),"#3E8E36"),0,.12,0),Qt(Yt(new ti(.02,6),"#FFD54A"),0,.248,.004,-1,0,0)]),_=_n([0,1,2,3,4].map(I=>{let Q=I/5*xe;return Qt(Yt(new ti(.036,5),"#FFFFFF"),Math.cos(Q)*.035,Math.sin(Q)*.035,0,0,0,Q)}));Qt(_,0,.245,0,-1,0,0),It(At,Wi(b,.8,0,h),nt.map(I=>({...I,color:null})),{size:24,far:45,small:!0}),It(_,Wi(new Ze({vertexColors:!0,side:He}),.8,0,h),nt,{size:24,far:45,small:!0}),It(sf(),Wi(b,.09,.2,h),ot,{size:24,far:70,small:!0});let C=[],z=[];for(let I of s.ALL){if(I.kind==="bridge"||I.kind==="stones"||I.k%2)continue;let Q=I.seg.pts,lt=-(Q[Math.min(I.k+1,Q.length-1)].z-Q[Math.max(I.k-1,0)].z),rt=Q[Math.min(I.k+1,Q.length-1)].x-Q[Math.max(I.k-1,0)].x,pt=Math.hypot(lt,rt)||1;for(let ft of[-1,1]){let Lt=I.hw+.15+u()*1.4,gt=I.x+lt/pt*Lt*ft,ut=I.z+rt/pt*Lt*ft,Ht=t.H(gt,ut),Jt=u();Jt<.55?C.push({x:gt,y:Ht-.02,z:ut,ry:u()*xe,s:.6+u()*.7}):Jt<.8&&z.push({x:gt,y:Ht,z:ut,ry:u()*xe,s:.7+u()*.6})}}It(wh(),it.grass,C,{size:30,far:45,small:!0});let D=_n([...Array(7)].map((I,Q)=>{let lt=Q/7*xe,rt=.55+Q%3*.12,pt=[],ft=[];for(let gt=0;gt<6;gt++){let ut=gt/6,Ht=(gt+1)/6,Jt=Math.sin(ut*Math.PI)*.09,le=Math.sin(Ht*Math.PI)*.09,he=[Math.cos(lt)*rt*ut,Math.sin(ut*Math.PI*.8)*.3,Math.sin(lt)*rt*ut],ve=[Math.cos(lt)*rt*Ht,Math.sin(Ht*Math.PI*.8)*.3,Math.sin(lt)*rt*Ht],Wt=-Math.sin(lt),Ge=Math.cos(lt);pt.push(he[0]-Wt*Jt,he[1],he[2]-Ge*Jt,ve[0]-Wt*le,ve[1],ve[2]-Ge*le,he[0]+Wt*Jt,he[1],he[2]+Ge*Jt,he[0]+Wt*Jt,he[1],he[2]+Ge*Jt,ve[0]-Wt*le,ve[1],ve[2]-Ge*le,ve[0]+Wt*le,ve[1],ve[2]+Ge*le);for(let be=0;be<6;be++)Xe(Qe,"#2F6B2C","#79B356",ut+.2),ft.push(Qe.r,Qe.g,Qe.b)}let Lt=new ke;return Lt.setAttribute("position",new De(new Float32Array(pt),3)),Lt.setAttribute("color",new De(new Float32Array(ft),3)),Lt.computeVertexNormals(),Lt}));It(D,Wi(new Ze({vertexColors:!0,side:He}),.35,0,h),z,{size:30,far:50,small:!0})}let Ct=new Ee;a.add(Ct);{let W=Hi(256,128,(N,nt,ot)=>{N.clearRect(0,0,nt,ot);let _t=pn(3);for(let At=0;At<22;At++){let _=nt*(.18+_t()*.64),C=ot*(.42+_t()*.28),z=18+_t()*30,D=N.createRadialGradient(_,C,0,_,C,z);D.addColorStop(0,"rgba(255,255,255,.95)"),D.addColorStop(.6,"rgba(250,252,255,.55)"),D.addColorStop(1,"rgba(240,246,255,0)"),N.fillStyle=D,N.beginPath(),N.arc(_,C,z,0,xe),N.fill()}});for(let N=0;N<50;N++){let nt=u()*xe;Math.abs(Zn(nt,0))<.5&&(nt+=1.3);let ot=420+u()*420,_t=new bi(new ci({map:W,transparent:!0,opacity:.7+u()*.3,depthWrite:!1,fog:!1})),At=70+u()*110;_t.scale.set(At,At*.42,1),_t.position.set(Math.cos(nt)*ot,60+u()*70,Math.sin(nt)*ot),Ct.add(_t)}let tt=[],H=(N,nt,ot,_t,At,_)=>{let C=new Fn(_t,ot,28,10),z=C.attributes.position;for(let D=0;D<z.count;D++){let I=z.getX(D),Q=z.getY(D),lt=z.getZ(D),rt=Math.atan2(lt,I),pt=(Q+ot/2)/ot,ft=1+(fn(rt*2.2+At,pt*3.5)-.5)*.45*(1-pt*.4);z.setXYZ(D,I*ft,Q,lt*ft)}C=Yt(C,(D,I,Q,lt)=>{let rt=(Q+ot/2)/ot,pt=fn(Math.atan2(lt,I)*6+At,rt*9);Xe(D,"#A9BCD2","#D3DEEA",rt*.9+pt*.35),_<1&&rt>_-.06+pt*.08&&D.set("#F4F8FC")}),tt.push(Qt(C,N,ot/2-20,nt))};for(let N=0;N<26;N++){let nt=N/26*xe+Math.sin(N*3.1)*.06,ot=820+N%3*140;H(Math.cos(nt)*ot,Math.sin(nt)*ot,150+N%4*40,230+N%3*60,N*2.1,N%3?.7:2)}a.add(new Pt(_n(tt),new Ze({vertexColors:!0,flatShading:!0,fog:!1})))}let Ft=(W,tt=256,H=64,N=34)=>Hi(tt,H,nt=>{nt.fillStyle="#8B5A2B",nt.fillRect(0,0,tt,H),nt.strokeStyle="#E8C170",nt.lineWidth=Math.max(4,H/16),nt.strokeRect(4,4,tt-8,H-8),nt.fillStyle="#FFF3D6",nt.font=`900 ${N}px -apple-system, "Geeza Pro", system-ui, sans-serif`,nt.textAlign="center",nt.textBaseline="middle";try{nt.direction="rtl"}catch{}nt.fillText(W,tt/2,H/2+2)}),oe=new Map;{let W=[];for(let N of s.bridges){N.seg.pts.slice(N.i,N.j+1).forEach((nt,ot)=>{if(nt.gap)return;let _t=N.seg.pts[Math.min(nt.k+1,N.seg.pts.length-1)],At=Math.atan2(_t.z-nt.z,_t.x-nt.x);W.push(Qt(Yt(new Ne(.5,.07,1.45),(_,C,z,D)=>Xe(_,"#7A5634","#A57B4C",cn(ot,D*3)*.6+(z>0?.3:0))),nt.x,nt.y-.035,nt.z,0,-At,0))});for(let nt of[-1,1])for(let ot of[.95,.45]){let _t=[];for(let At=N.i-1;At<=N.j+1;At++){let _=N.seg.pts,C=_[Re(At,0,_.length-1)],z=_[Re(At+1,0,_.length-1)],D=_[Re(At-1,0,_.length-1)],I=z.x-D.x,Q=z.z-D.z,lt=Math.hypot(I,Q)||1;_t.push(new G(C.x-Q/lt*.72*nt,C.y+ot,C.z+I/lt*.72*nt))}W.push(Yt(new Bi(new Wn(_t),_t.length*2,.03,5),"#C9A46B"))}for(let nt of[N.a,N.b])for(let ot of[-1,1]){let _t=nt.seg.pts,At=_t[Math.min(nt.k+1,_t.length-1)],_=_t[Math.max(nt.k-1,0)],C=At.x-_.x,z=At.z-_.z,D=Math.hypot(C,z)||1;W.push(Qt(Yt(new pe(.09,.11,1.5,6),"#5C3A1A"),nt.x-z/D*.8*ot,nt.y+.6,nt.z+C/D*.8*ot))}}for(let N of s.ALL)if(N.kind==="stairs"){let nt=N.seg.pts,ot=nt[Math.min(N.k+1,nt.length-1)],_t=nt[Math.max(N.k-1,0)],At=Math.atan2(ot.z-_t.z,ot.x-_t.x);W.push(Qt(Yt(new Ne(.9,.5,2.7),(_,C,z,D)=>Xe(_,"#7C766B","#ABA393",z+.4+cn(N.k,D*5)*.3)),N.x,N.y-.25,N.z,0,-At+(cn(N.k,3)-.5)*.08,0))}for(let{p:N,nx:nt,nz:ot,sz:_t}of s.ledgeRocks)W.push(Qt(Yt(new hi(1,0).scale(_t,_t*(1.3+cn(N.k,5)),_t*.8),(At,_,C,z)=>Xe(At,"#5E5A55","#A9A398",.35+C*.2+cn(_*5+N.k,z*5)*.3)),N.x+nt*(N.hw+_t),N.y+_t*.3,N.z+ot*(N.hw+_t),cn(N.k,2)*.4,cn(N.k,4)*3,0)),N.k%6===0&&W.push(Qt(Yt(new hi(.25,0),"#8A847A"),N.x-nt*(N.hw-.05),N.y+.08,N.z-ot*(N.hw-.05)));for(let N of s.stones)W.push(Qt(Yt(new pe(N.r,N.r*1.12,1.4,9),(nt,ot,_t)=>Xe(nt,"#7F7A72","#B7B1A6",_t+.6+cn(ot*9,N.x)*.2)),N.x,N.y-.7,N.z,0,u()*3,0));{let N=s.rest[0],nt=N.face,ot=-Math.sin(nt),_t=Math.cos(nt),At=N.x+Math.cos(nt)*3,_=N.z+Math.sin(nt)*3;for(let z of[-1,1])W.push(Qt(Yt(new pe(.11,.13,3.4,7),"#5C3A1A"),At+ot*2*z,N.y+1.7,_+_t*2*z));W.push(Qt(Yt(new Ne(.2,.2,4.6),"#4F3420"),At,N.y+3.35,_,0,-nt,0));let C=new Pt(new Nn(3.4,.85),new Ze({map:Ft("\u26F0\uFE0F \u0637\u0631\u064A\u0642 \u0627\u0644\u0642\u0645\u0629",512,128,60),side:He}));C.position.set(At,N.y+2.85,_),C.rotation.y=-nt-Math.PI/2,a.add(C)}{let nt=r.x+-6,ot=r.z+5.5,_t=t.H(nt,ot);W.push(Qt(Yt(new pe(.08,.1,2.4,6),"#5C3A1A"),nt,_t+1.2,ot));let At=new Pt(new Nn(2.4,.6),new Ze({map:Ft("\u{1F3DE}\uFE0F \u0648\u0627\u062F\u064A \u0627\u0644\u063A\u0632\u0644\u0627\u0646",384,96,46),side:He}));At.position.set(nt,_t+2.25,ot),At.rotation.y=Math.PI/2,a.add(At)}for(let N of s.rest)if(N.flag){for(let _t=0;_t<6;_t++)W.push(Qt(Yt(new hi(.22-_t*.025,0),"#9D978C"),N.x+1.6,N.y+.15+_t*.25,N.z+1.1));W.push(Qt(Yt(new pe(.05,.06,2.4,6),"#5C3A1A"),N.x-1.4,N.y+1.2,N.z-1.1));let nt=new ke;nt.setAttribute("position",new De(new Float32Array([0,.32,0,0,-.32,0,1.05,0,0]),3)),nt.computeVertexNormals();let ot=new Pt(nt,new Ze({color:"#F4F1EA",side:He}));ot.position.set(N.x-1.4,N.y+2.05,N.z-1.1),a.add(ot),oe.set(N.id,ot)}let tt=Ft("\u2B05 \u0644\u0644\u0642\u0645\u0629");for(let N of s.signs){let nt=t.H(N.x,N.z);W.push(Qt(Yt(new pe(.06,.07,1.9,6),"#5C3A1A"),N.x,nt+.95,N.z));let ot=new Pt(new Nn(1.1,.28),new Ze({map:tt,side:He}));ot.position.set(N.x+Math.cos(N.a)*.45,nt+1.65,N.z+Math.sin(N.a)*.45),ot.rotation.y=-N.a+Math.PI,a.add(ot)}for(let N of s.logs){let nt=t.H(N.x,N.z);W.push(Qt(Yt(new pe(.32,.38,4.2,8),(ot,_t,At)=>ot.set(Math.abs(At)>2?"#C9A36B":"#5A3E26")),N.x,nt+.35,N.z,0,N.a,Math.PI/2))}let H=new Pt(_n(W),new Ze({vertexColors:!0,side:He}));H.castShadow=!0,H.receiveShadow=!0,a.add(H)}let jt=200,te=new $i(new pe(.22,.22,.05,20),new Un({color:"#FFC93C",specular:"#FFF4C0",shininess:90,emissive:"#6B4A00",emissiveIntensity:.55}),jt);te.castShadow=!0,te.frustumCulled=!1,te.count=0,a.add(te);let ae=s.plaza,xt=s.RP,wt=s.HS,St=new Ee;St.position.set(ae.x,wt,ae.z),a.add(St);let mt=[],at={flag:null,flagBase:null,bell:null,lanterns:[],water:null,drops:null,leaves:null,kiosk:null,cups:[],streaks:null,scope:null},Xt=(W,tt)=>[Math.cos(W*lr)*tt,Math.sin(W*lr)*tt],Kt=new Un({color:"#B5562A",specular:"#FFFFFF",shininess:120,transparent:!0,opacity:.85}),ue=new Un({color:"#C9A13B",specular:"#FFE9A8",shininess:90});{let W=Hi(512,512,(Ot,me,Oe)=>{Ot.fillStyle="#B9B1A3",Ot.fillRect(0,0,me,Oe);for(let Ye=0;Ye<12;Ye++){let hn=Ye*22,Dn=hn+22,as=Math.max(6,Math.round(xe*(hn+11)/34));for(let Xi=0;Xi<as;Xi++){let Dh=Xi/as*xe,Nh=(Xi+1)/as*xe,ql=.82+(Ye*7+Xi*3)%5*.04;Ot.fillStyle=`rgb(${Math.round(196*ql)},${Math.round(186*ql)},${Math.round(168*ql)})`,Ot.beginPath(),Ot.arc(me/2,Oe/2,Dn-1.5,Dh+.01,Nh-.01),Ot.arc(me/2,Oe/2,Math.max(0,hn+1.5),Nh-.01,Dh+.01,!0),Ot.closePath(),Ot.fill()}}}),tt=new Pt(new ti(xt,64),new Ze({map:W}));tt.rotation.x=-Math.PI/2,tt.position.y=.03,tt.receiveShadow=!0,St.add(tt);let H=[];for(let Ot=0;Ot<64;Ot++){let me=Ot/64*xe;Math.abs(Zn(me,s.ENTRY_A))<.16||Math.abs(Zn(me,s.DECK_A))<.2||H.push(Qt(Yt(new Ne(1.36,.72,.55),(Oe,Ye,hn,Dn)=>Xe(Oe,"#8E877B","#B8AF9F",.4+hn+cn(Ot,Dn*4)*.3)),Math.cos(me)*(xt-.1),.36,Math.sin(me)*(xt-.1),0,-me+Math.PI/2,0))}for(let Ot=0;Ot<10;Ot++)H.push(Qt(Yt(new Ne(.46,.08,3.6),(me,Oe,Ye,hn)=>Xe(me,"#7A5634","#A57B4C",cn(Ot,hn)*.5+.3)),xt-.3+Ot*.48,.05,0));for(let Ot of[-1,1]){H.push(Qt(Yt(new Ne(4.8,.07,.07),"#6B4423"),xt+2.1,.95,Ot*1.8));for(let me=0;me<5;me++)H.push(Qt(Yt(new pe(.05,.05,1,6),"#5C3A1A"),xt+.1+me*1.1,.5,Ot*1.8))}H.push(Qt(Yt(new Ne(.07,.07,3.6),"#6B4423"),xt+4.5,.95,0));for(let Ot=-1;Ot<=1;Ot++)H.push(Qt(Yt(new pe(.06,.06,1,6),"#5C3A1A"),xt+4.5,.5,Ot*1.6));for(let Ot=0;Ot<4;Ot++)H.push(Qt(Yt(new pe(.12,.14,7,6),"#4F3420"),xt+.5+Ot*1.3,-3.4,(Ot%2?1:-1)*1.5));H.push(Yt(new Ln([new ct(.001,0),new ct(2.35,0),new ct(2.45,.08),new ct(2.4,.62),new ct(2.15,.66),new ct(2.1,.22),new ct(.001,.22)],40),(Ot,me,Oe)=>Xe(Ot,"#9F988C","#D6CFC2",Oe*1.5+.2))),H.push(Yt(new Ln([new ct(.001,.2),new ct(.32,.2),new ct(.22,.9),new ct(.18,1.4),new ct(.7,1.55),new ct(.72,1.68),new ct(.15,1.72),new ct(.12,2.15),new ct(.2,2.3),new ct(.001,2.38)],24),(Ot,me,Oe)=>Xe(Ot,"#A79F92","#DCD5C8",Oe*.4)));let N=ae.kioskA*lr,[nt,ot]=Xt(ae.kioskA,9.2),_t=Math.atan2(-Math.cos(N),-Math.sin(N)),At=[],_=Ot=>At.push(Ot),C=(Ot,me)=>Ot.set(Math.floor((me+1.6)/.4)%2?"#A97B4C":"#93683E");_(Qt(Yt(new Ne(3.2,2.4,.12),C),0,1.2,-1.05));for(let Ot of[-1,1])_(Qt(Yt(new Ne(.12,2.4,2.2),"#8A5F36"),Ot*1.55,1.2,0));_(Qt(Yt(new Ne(3.5,.12,2.7),"#6B4423"),0,2.45,.15)),_(Qt(Yt(new Ne(3.1,1,.5),(Ot,me,Oe)=>Ot.set(Oe>.42?"#5C3A1A":Math.floor((me+1.55)/.31)%2?"#A97B4C":"#93683E")),0,.5,.85));for(let Ot=0;Ot<8;Ot++)_(Qt(Yt(new Ne(.44,.04,.9),Ot%2?"#FAF3E6":"#2E8B57"),-1.54+Ot*.44,2.3,1.75,.35,0,0));_(Qt(Yt(new Ne(2.6,.06,.35),"#6B4423"),0,1.6,-.9));for(let Ot=0;Ot<5;Ot++)_(Qt(Yt(new pe(.07,.06,.22,8),["#2E86AB","#C0612B","#F2E3C6","#9B2335","#E8C170"][Ot]),-1+Ot*.5,1.75,-.9));let z=new Ee;z.add(new Pt(_n(At),new Ze({vertexColors:!0,side:He}))),z.position.set(nt,0,ot),z.rotation.y=_t,St.add(z),z.traverse(Ot=>{Ot.isMesh&&(Ot.castShadow=!0,Ot.receiveShadow=!0)}),at.kiosk=z;let D=new Pt(new Ln([new ct(.001,0),new ct(.14,0),new ct(.16,.05),new ct(.22,.2),new ct(.2,.42),new ct(.12,.5),new ct(.14,.56),new ct(.06,.62),new ct(.001,.64)],18),ue);D.position.set(-1,1,.85),z.add(D);for(let Ot=0;Ot<6;Ot++){let me=new Pt(new pe(.045,.032,.1,10),Kt);me.position.set(-.3+Ot*.2,1.05,.9),z.add(me),at.cups.push(me)}let I=ar({thobe:"#EDE6DA",bisht:null,shmagh:"#1E1E1E",beard:"#2E2A26",beads:!1});I.root.position.set(.35,0,-.25),z.add(I.root),mt.push({m:I,base:I.root.position.clone(),kind:"seller"});for(let Ot of ae.benches){let me=Ot*lr,[Oe,Ye]=Xt(Ot,6.6),hn=-me-Math.PI/2,Dn=-Math.sin(me),as=Math.cos(me);H.push(Qt(Yt(new Ne(2.2,.1,.55),"#8A5F36"),Oe,.45,Ye,0,hn,0)),H.push(Qt(Yt(new Ne(2.2,.5,.08),"#7A5232"),Oe+Math.cos(me)*.3,.75,Ye+Math.sin(me)*.3,0,hn,0));for(let Xi of[-.9,.9])H.push(Qt(Yt(new Ne(.1,.45,.5),"#6B4423"),Oe+Dn*Xi,.22,Ye+as*Xi,0,hn,0))}let Q=()=>{let Ot=new Pt(new pe(.035,.026,.08,10),Kt);return Ot.position.set(0,-.43,.05),Ot},lt={tea:[ae.meet[0]-ae.x,ae.meet[1]-ae.z],stand:[nt,ot]},rt=[ar({thobe:"#D8CDB8",bisht:"#2D3A4E",shmagh:"#C8102E",beads:!1,beard:"#5A524C"}),ar({thobe:"#F4F1EA",bisht:null,shmagh:"#F4F1EA",beard:"none",beads:!0}),ar({thobe:"#CFE0E8",bisht:null,shmagh:"#C8102E",beard:"#3A3430",beads:!1})];ae.guests.forEach((Ot,me)=>{let Oe=rt[me],[Ye,hn]=Xt(Ot.a,Ot.r),Dn=lt[Ot.kind];Oe.root.position.set(Ye,0,hn),Oe.root.rotation.y=Math.atan2(Dn[0]-Ye,Dn[1]-hn),St.add(Oe.root),mt.push({m:Oe,base:Oe.root.position.clone(),kind:Ot.kind,ph:u()*6}),Ot.kind==="tea"&&Oe.arms[1].el.add(Q())});let pt=118*lr,[ft,Lt]=Xt(118,9),gt=-Math.sin(pt),ut=Math.cos(pt);for(let Ot of[-1,1])H.push(Qt(Yt(new Ne(.18,2.8,.18),"#5C3A1A"),ft+gt*.9*Ot,1.4,Lt+ut*.9*Ot));H.push(Qt(Yt(new Ne(2.3,.2,.24),"#4F3420"),ft,2.8,Lt,0,-pt-Math.PI/2,0));let Ht=new Ee;Ht.position.set(ft,2.7,Lt),St.add(Ht);let Jt=new Pt(new Ln([new ct(.001,-.05),new ct(.18,-.06),new ct(.24,-.25),new ct(.3,-.55),new ct(.42,-.72),new ct(.4,-.76),new ct(.001,-.76)],24),new Un({color:"#B07A2E",specular:"#FFE2A0",shininess:100}));Jt.castShadow=!0;let le=new Pt(new Ie(.07,10,8),Ae("#3B2A1A"));le.position.y=-.7,Ht.add(Jt,le),at.bell={g:Ht,swing:0,v:0};let[he,ve]=Xt(300,10.2);H.push(Qt(Yt(new pe(.08,.1,9,8),"#D9D9D9"),he,4.5,ve)),H.push(Qt(Yt(new Ie(.16,10,8),"#E8C170"),he,9.05,ve));let Wt=new Nn(3.2,2,20,10);Wt.translate(1.6,0,0);let Ge=new Float32Array(Wt.attributes.position.count*3);for(let Ot=0;Ot<Wt.attributes.position.count;Ot++){let me=Wt.attributes.position.getY(Ot);Qe.set(me>.33?"#CE1126":me>-.33?"#FFFFFF":"#141414"),Math.abs(me)<.2&&Math.abs(Wt.attributes.position.getX(Ot)-1.6)<.35&&Qe.set("#007A3D"),Ge.set([Qe.r,Qe.g,Qe.b],Ot*3)}Wt.setAttribute("color",new De(Ge,3));let be=new Pt(Wt,new Ze({vertexColors:!0,side:He}));be.position.set(he+.1,7.9,ve),be.castShadow=!0,St.add(be),at.flag=be,at.flagBase=Float32Array.from(Wt.attributes.position.array);let Zt=new Ee;Zt.position.set(xt+3.9,0,0),St.add(Zt);for(let Ot=0;Ot<3;Ot++){let me=Ot/3*xe,Oe=new Pt(new pe(.03,.03,1.3,6),Ae("#3B3B3B"));Oe.position.set(Math.cos(me)*.25,.6,Math.sin(me)*.25),Oe.rotation.set(Math.sin(me)*.38,0,-Math.cos(me)*.38),Zt.add(Oe)}let ce=new Pt(new pe(.09,.13,1.1,16),ue);ce.rotation.z=Math.PI/2-.15,ce.position.set(.1,1.32,0),Zt.add(ce);let Pe=new Pt(new pe(.14,.14,.06,16),Ae("#1A2A3A",{shininess:160,specular:"#FFFFFF"}));Pe.rotation.z=Math.PI/2-.15,Pe.position.set(.66,1.4,0),Zt.add(Pe),or(Zt),at.scope=Zt;let nn=ae.lamps.map(Ot=>Ot*lr);for(let Ot of nn){let me=Math.cos(Ot)*12.2,Oe=Math.sin(Ot)*12.2;H.push(Qt(Yt(new pe(.06,.08,3.2,6),"#2E2E2E"),me,1.6,Oe));let Ye=new Ee;Ye.position.set(me,3,Oe);let hn=new Pt(new pe(.11,.11,.26,8),new ln({color:"#FFD36B"})),Dn=new bi(new ci({map:p,color:"#FFC14D",transparent:!0,opacity:.7,depthWrite:!1,blending:ui}));Dn.scale.setScalar(.75),Ye.add(hn,Dn),St.add(Ye),at.lanterns.push(Ye)}let $e=[];for(let Ot=0;Ot<4;Ot++){let me=nn[Ot],Oe=nn[(Ot+1)%4],Ye=Zn(me,Oe);Ye<0&&(Ye+=xe);for(let hn=1;hn<9;hn++){let Dn=me+Ye*hn/9,as=Math.sin(hn/9*Math.PI)*.6;$e.push([Math.cos(Dn)*12.2,3.05-as,Math.sin(Dn)*12.2])}}let _e=new $i(new Ie(.07,8,6),new ln({color:"#FFFFFF"}),$e.length),je=new on,Tn=["#FF5D8F","#FFD23F","#7FD1FF","#8DE26B"];$e.forEach(([Ot,me,Oe],Ye)=>{je.position.set(Ot,me,Oe),je.updateMatrix(),_e.setMatrixAt(Ye,je.matrix),_e.setColorAt(Ye,Qe.set(Tn[Ye%4]))}),St.add(_e);for(let Ot of ae.beds){let[me,Oe]=Xt(Ot,11);H.push(Qt(Yt(new pe(.7,.6,.5,12),"#8E877B"),me,.25,Oe));for(let Ye=0;Ye<9;Ye++)H.push(Qt(Yt(new Mn(.13,0),["#FF5D8F","#FFD23F","#FFFFFF","#B28DFF"][Ye%4]),me+Math.cos(Ye)*.4,.58,Oe+Math.sin(Ye)*.4))}let Ke=new Pt(_n(H),new Ze({vertexColors:!0,side:He}));Ke.castShadow=!0,Ke.receiveShadow=!0,St.add(Ke),It(yt.pineA,it.pine,ae.pines.map(Ot=>{let[me,Oe]=Xt(Ot,11.6);return{x:ae.x+me,y:wt-.1,z:ae.z+Oe,ry:u()*xe,s:.9}}),{cast:!0,size:100,far:500});let rn=new Pt(new ti(2.12,40),new Un({color:"#4AA6D8",specular:"#FFFFFF",shininess:140,normalMap:g,transparent:!0,opacity:.88}));rn.rotation.x=-Math.PI/2,rn.position.y=.55,St.add(rn),at.water=rn;let Bn=140,fr=[];for(let Ot=0;Ot<Bn;Ot++)fr.push([u()*xe,u(),.5+u()*.5]);let Th=new ke;Th.setAttribute("position",new De(new Float32Array(Bn*3),3)),at.drops=new $s(Th,new ps({size:.16,map:p,color:"#E6F6FF",transparent:!0,opacity:.9,depthWrite:!1})),at.drops.userData.seed=fr,at.drops.frustumCulled=!1,St.add(at.drops);let Ch=220,Rh=[];for(let Ot=0;Ot<Ch;Ot++)Rh.push([u()*60-30,u()*8,u()*60-30,u()]);let Ph=new ke;Ph.setAttribute("position",new De(new Float32Array(Ch*3),3)),at.leaves=new $s(Ph,new ps({size:.22,map:p,color:"#A8D46A",transparent:!0,opacity:0,depthWrite:!1})),at.leaves.userData.seed=Rh,at.leaves.frustumCulled=!1,St.add(at.leaves);let Ih=70,Fh=[];for(let Ot=0;Ot<Ih;Ot++)Fh.push([u()*50-25,u()*9-1,u()*50-25,.5+u()]);let Lh=new ke;Lh.setAttribute("position",new De(new Float32Array(Ih*6),3)),at.streaks=new fs(Lh,new Qi({color:"#FFFFFF",transparent:!0,opacity:0,depthWrite:!1})),at.streaks.userData.seed=Fh,at.streaks.frustumCulled=!1,St.add(at.streaks)}let $t=new Ee;a.add($t);let de={flames:[],glows:[],lantern:null};{let H=new G(4,0,-2.4),N=[],nt=(Zt,ce)=>Zt.set(Math.floor((ce+1.7)/.425)%2?"#EAD9B5":"#D9C39C");N.push(Qt(Yt(new Ne(3.4,1.95,2.4),nt),0,.975,-2.8));for(let Zt of[-1,1])N.push(Qt(Yt(new Ne(3.62,.07,1.52),(ce,Pe)=>ce.set(Math.floor((Pe+1.81)/.4525)%2?"#C9AE82":"#B99D70")),0,2.32,-2.8+Zt*.6,Zt*.59,0,0));let ot=new ei;ot.moveTo(-1.2,0),ot.lineTo(1.2,0),ot.lineTo(0,.8),ot.closePath();for(let Zt of[-1,1])N.push(Qt(Yt(new zi(ot),"#E3D0A8"),0+Zt*1.7,1.95,-2.8,0,Math.PI/2,0));N.push(Qt(Yt(new Ne(.95,1.55,.05),"#3F2412"),0-.25,.775,-2.8+1.22));for(let Zt of[-1,1]){let ce=new ei;ce.moveTo(0,0),ce.lineTo(.42*Zt,0),ce.lineTo(0,-1),ce.closePath(),N.push(Qt(Yt(new zi(ce),"#E9D7B0"),0-.25+Zt*.04,1.55,-2.8+1.25))}let _t=new G(0,2.15,-2.8+1.2),At=new G(0,1.98,-2.8+2.55),_=_t.distanceTo(At),C=Math.atan2(_t.y-At.y,At.z-_t.z);for(let Zt=0;Zt<8;Zt++){let ce=-1.4875+Zt*.425,Pe=Zt%2?"#FAF3E6":"#D7263D";N.push(Qt(Yt(new Ne(.425,.035,_),Pe),ce,(_t.y+At.y)/2,(_t.z+At.z)/2,C,0,0)),N.push(Qt(Yt(new ti(.2125,10,Math.PI,Math.PI),Pe),ce,At.y,At.z+.01))}for(let Zt of[-1,1])N.push(Qt(Yt(new pe(.045,.055,2.05,7),"#5C3A1A"),0+Zt*1.68,1.02,-2.8+2.55));let z=0-.78,D=-2.8+2;N.push(Qt(Yt(new Ne(1,.06,.55),"#8B5A2B"),z,.74,D));for(let[Zt,ce]of[[-1,-1],[1,-1],[-1,1],[1,1]])N.push(Qt(Yt(new pe(.03,.03,.72,5),"#6B4220"),z+Zt*.44,.36,D+ce*.22));let I=Zt=>new Ln([new ct(.001,0),new ct(.09*Zt,0),new ct(.15*Zt,.07),new ct(.16*Zt,.17),new ct(.11*Zt,.28),new ct(.06*Zt,.32),new ct(.075*Zt,.36),new ct(.06*Zt,.37)],14);N.push(Qt(Yt(I(1),(Zt,ce,Pe)=>Zt.set(Pe>.2&&Pe<.24?"#F2E3C6":"#C0612B")),z-.3,.77,D)),N.push(Qt(Yt(I(.8),(Zt,ce,Pe)=>Zt.set(Pe>.16&&Pe<.19?"#FFFFFF":"#2E86AB")),z+.02,.77,D-.05)),N.push(Qt(Yt(new Ie(.28,12,8),(Zt,ce,Pe)=>Xe(Zt,"#C8B18A","#E2D2AE",Pe*2+.5)),0-2.05,.27,-2.8+1.2,0,0,0,1,1.2,1)),N.push(Qt(Yt(new Ne(.5,.42,.42),(Zt,ce,Pe)=>Zt.set(Math.abs(Pe)>.17||Math.abs(ce)>.21?"#7A4E25":"#A0703C")),0+1.95,.21,-2.8+1,0,.3,0));let Q=(Zt,ce)=>{let Pe=Zt.distanceTo(ce),nn=Math.max(2,Math.round(Pe/.55));for(let $e=0;$e<=nn;$e++){let _e=Zt.clone().lerp(ce,$e/nn);N.push(Qt(Yt(new pe(.045,.055,.85,6),"#8B5A2B"),_e.x,.42,_e.z))}for(let $e of[.3,.62]){let _e=Yt(new Ne(.05,1,.035),"#9C6A36");Qt(_e,0,0,0,0,0,0,1,Pe,1),Mh(_e,new G(Zt.x,$e,Zt.z),new G(ce.x,$e,ce.z)),N.push(_e)}},lt=new G(-5.8,0,-.75),rt=new G(-5.8,0,-2.9),pt=new G(-3.1,0,-2.9),ft=new G(-3.1,0,-.75);Q(lt,rt),Q(rt,pt),Q(pt,ft),N.push(Qt(Yt(new Ne(1,.18,.35),"#7A4E25"),-4.45,.09,-2.55)),N.push(Qt(Yt(new Ne(.9,.06,.28),"#D8C26A"),-4.45,.2,-2.55)),N.push(Qt(Yt(new Ne(1.75,.46,.06),"#7A4A22"),0,2.66,-2.8+1.25));for(let Zt=0;Zt<9;Zt++){let ce=Zt/9*xe;N.push(Qt(Yt(new hi(.11,0),(Pe,nn,$e)=>Xe(Pe,"#7D776C","#B5AFA2",$e*4+.5)),H.x+Math.cos(ce)*.42,.06,H.z+Math.sin(ce)*.42,Zt,Zt*2,0,1,.7,1))}for(let Zt=0;Zt<3;Zt++){let ce=Zt/3*Math.PI;N.push(Qt(Yt(new pe(.05,.05,.62,6),(Pe,nn,$e)=>Pe.set(Math.abs($e)>.27?"#C9A36B":"#4A2E18")),H.x,.1,H.z,0,ce,Math.PI/2-.25))}let Lt=new Pt(_n(N),new Ze({vertexColors:!0,side:He}));Lt.castShadow=!0,Lt.receiveShadow=!0,$t.add(Lt);let gt=new Pt(new Nn(1.62,.38),new Ze({map:Ft(i.sign||"\u062E\u064A\u0645\u0629 \u0623\u0628\u0648 \u062C\u0627\u0633\u0645",512,128,64),emissive:"#3B2410",emissiveIntensity:.25}));gt.position.set(0,2.66,-2.8+1.29),$t.add(gt);let ut=new Ee,Ht=new Pt(new pe(.07,.07,.16,8),new ln({color:"#FFD36B"})),Jt=new bi(new ci({map:p,color:"#FFC14D",transparent:!0,opacity:.75,depthWrite:!1,blending:ui}));Jt.scale.setScalar(.9),ut.add(Ht,Jt),ut.position.set(0+1.68,1.72,-2.8+2.55),$t.add(ut),de.lantern=ut;let le=Zt=>new ln({color:Zt,transparent:!0,opacity:.9,depthWrite:!1,blending:ui});[["#FF5A1F",.2,.55,0],["#FF9A2E",.15,.45,.07],["#FFE07A",.09,.3,-.05]].forEach(([Zt,ce,Pe,nn],$e)=>{let _e=new Pt(new Fn(ce,Pe,10,1,!0),le(Zt));_e.position.set(H.x+nn,.12+Pe/2,H.z-nn),_e.userData={h0:Pe,i:$e},$t.add(_e),de.flames.push(_e)});let he=new bi(new ci({map:p,color:"#FF8A2E",transparent:!0,opacity:.6,depthWrite:!1,blending:ui}));he.position.set(H.x,.45,H.z),he.scale.setScalar(1.8),$t.add(he),de.glows.push(he);let ve=new Ee,Wt=new Pt(new Ln([new ct(.001,0),new ct(.1,0),new ct(.115,.02),new ct(.1,.09),new ct(.06,.14),new ct(.045,.2),new ct(.06,.24),new ct(.075,.26),new ct(.04,.3),new ct(.012,.34),new ct(.02,.36),new ct(.001,.37)],20),ue);ve.add(Wt),ve.position.set(H.x-.75,.12,H.z+.35),$t.add(ve);let Ge=Hi(256,160,(Zt,ce,Pe)=>{Zt.fillStyle="#8E1B26",Zt.fillRect(0,0,ce,Pe),Zt.fillStyle="#1F2F5C",Zt.fillRect(10,10,ce-20,Pe-20),Zt.fillStyle="#8E1B26",Zt.fillRect(20,20,ce-40,Pe-40),Zt.strokeStyle="#E8C170",Zt.lineWidth=3,Zt.strokeRect(16,16,ce-32,Pe-32);let nn=($e,_e,je,Tn)=>{Zt.fillStyle=Tn,Zt.beginPath(),Zt.moveTo($e,_e-je),Zt.lineTo($e+je*1.5,_e),Zt.lineTo($e,_e+je),Zt.lineTo($e-je*1.5,_e),Zt.closePath(),Zt.fill()};nn(ce/2,Pe/2,44,"#1F2F5C"),nn(ce/2,Pe/2,30,"#E8C170"),nn(ce/2,Pe/2,16,"#8E1B26"),nn(ce/2,Pe/2,6,"#F4EFE6")}),be=new Pt(new Nn(2,1.25),new Ze({map:Ge}));be.rotation.x=-Math.PI/2,be.rotation.z=.04,be.position.set(0-.2,.02,-2.8+1.9),be.receiveShadow=!0,$t.add(be)}let q=new Ee;{let W=new Pt(new no(.95,1.18,48),new ln({color:"#FFD23F",transparent:!0,opacity:.9,depthWrite:!1,side:He}));W.rotation.x=-Math.PI/2,W.position.y=.03;let tt=new Pt(new ti(.95,40),new ln({color:"#FFE38A",transparent:!0,opacity:.25,depthWrite:!1}));tt.rotation.x=-Math.PI/2,tt.position.y=.025;let H=new Pt(new Fn(.2,.42,4),new Un({color:"#FFB703",emissive:"#FF8A00",emissiveIntensity:.6,shininess:80}));H.rotation.x=Math.PI,H.position.y=1.9,q.add(W,tt,H),q.userData={ring:W,arrow:H},q.visible=!1,a.add(q)}function Le(W){let tt=W==="wolf",H=new Ee,N=new Ee;H.add(N);let nt=Ae(tt?"#7E8088":"#4E3626",{shininess:8}),ot=Ae(tt?"#C9CACF":"#6E5038",{shininess:8}),_t=Ae(tt?"#3E4048":"#2B1D12",{shininess:20}),At=tt?.95:1,_=tt?.72:.62,C=tt?.22:.33,z=new Pt(new Ie(1,22,14),nt);z.scale.set(At/2,C,C*(tt?.85:.9)),z.position.y=_,N.add(z);let D=new Pt(new Ie(1,16,10),ot);if(D.scale.set(At/2.3,C*.6,C*.75),D.position.set(0,_-C*.4,0),N.add(D),!tt){let gt=new Pt(new Ne(At*.8,.12,.08),_t);gt.position.set(0,_+C*.95,0),N.add(gt)}let I=new Ee;I.position.set(At/2+.05,_+(tt?.16:0),0),N.add(I);let Q=new Pt(new Ie(tt?.16:.2,16,12),nt);Q.scale.set(1.2,.95,.9),I.add(Q);let lt=new Pt(new pe(tt?.05:.09,tt?.09:.13,tt?.26:.22,10),tt?ot:nt);lt.rotation.z=-Math.PI/2,lt.position.set(tt?.24:.25,-.04,0),I.add(lt);let rt=new Pt(new Ie(tt?.035:.07,10,8),_t);rt.position.set(tt?.37:.36,-.03,0),tt||rt.scale.set(.5,1,1.1),I.add(rt);for(let gt of[-1,1]){let ut=new Pt(new Ie(.025,8,6),new ln({color:tt?"#F2C14E":"#1A0E08"}));ut.position.set(.12,.06,gt*.09),I.add(ut);let Ht=new Pt(new Fn(tt?.06:.05,tt?.16:.1,6),nt);if(Ht.position.set(-.02,tt?.17:.15,gt*.08),Ht.rotation.set(gt*.25,0,tt?-.1:.4),I.add(Ht),!tt){let Jt=new Pt(new Fn(.018,.12,6),Ae("#F4EFE6"));Jt.position.set(.36,-.04,gt*.08),Jt.rotation.z=.6,I.add(Jt)}}let pt=new Ee;pt.position.set(-At/2,_+.05,0),N.add(pt);let ft=new Pt(tt?new wi(.06,.36,4,8):new pe(.015,.02,.18,6),nt);ft.position.y=tt?-.2:-.09,pt.add(ft),pt.rotation.z=tt?.9:.4;let Lt=[];for(let[gt,ut]of[[At*.33,1],[-At*.33,0]])for(let Ht of[-1,1]){let Jt=new Ee;Jt.position.set(gt,_-C*.4,Ht*C*.55),N.add(Jt);let le=new Pt(new pe(.045,.06,(_-C*.4)*.55,8),nt);le.position.y=-((_-C*.4)*.55)/2,Jt.add(le);let he=new Ee;he.position.y=-(_-C*.4)*.55,Jt.add(he);let ve=new Pt(new pe(.03,.04,(_-C*.4)*.45,8),tt?nt:_t);ve.position.y=-((_-C*.4)*.45)/2,he.add(ve),Lt.push({hip:Jt,knee:he,front:ut,s:Ht})}return or(H),a.add(H),{root:H,body:N,head:I,tail:pt,legs:Lt,yaw:0}}let j=e.beasts.map(W=>({e:W,m:Le(W.kind)})),ht=(()=>{let W=new Ee,tt=new Ee;W.add(tt);let H=Ae("#D9A066",{shininess:18}),N=Ae("#ECCB9C",{shininess:18}),nt=Ae("#3B2A1A",{shininess:40}),ot=[[-.56,0],[-.54,.1],[-.48,.17],[-.36,.2],[-.18,.18],[0,.185],[.18,.21],[.32,.215],[.44,.18],[.53,.11],[.57,0]],_t=new Ln(ot.map(([gt,ut])=>new ct(ut,gt)),36);{let gt=_t.attributes.position;for(let ut=0;ut<gt.count;ut++){let Ht=gt.getX(ut),Jt=gt.getY(ut),le=gt.getZ(ut),he=Math.exp(-(((Jt+.1)/.22)**2));Ht<0&&(Ht*=1-he*.28),gt.setXYZ(ut,Jt,-Ht*(Ht<0?.95:1.05),le*.82)}_t.computeVertexNormals()}_t=Yt(_t,(gt,ut,Ht)=>{let Jt=Ht/.21;Jt<-.45?gt.set("#FFF6E8"):Jt<-.15?Xe(gt,"#6A3F1F","#8A5528",(Jt+.45)/.3):Xe(gt,"#D9A066","#C58A50",(Jt-.3)*1.5),ut<-.46&&Jt<.55&&gt.set("#FFF6E8")});let At=new Pt(_t,Ae("#FFFFFF",{vertexColors:!0,shininess:22}));At.position.y=.8,tt.add(At);let _=new Ee;_.position.set(-.56,.86,0);let C=new Pt(new wi(.025,.1,3,6),Ae("#2B1D12"));C.position.y=-.06,_.add(C),_.rotation.z=.5,tt.add(_);let z=new Ee;z.position.set(.42,.88,0),tt.add(z);let D=new Pt(new pe(.055,.1,.5,14),H);D.position.y=.23,D.scale.z=.85,z.add(D);let I=new Pt(new pe(.036,.06,.42,10),Ae("#FFF6E8"));I.position.set(.04,.21,0),I.rotation.z=-.08,z.add(I),z.rotation.z=-.6;let Q=new Ee;Q.position.set(0,.49,0),Q.scale.setScalar(1.12),z.add(Q);let lt=new Pt(new Ie(.11,24,16),H);lt.scale.set(1.35,.9,.82),Q.add(lt);let rt=new Pt(new Ie(.075,18,12),N);rt.position.set(.14,-.045,0),rt.scale.set(1.25,.8,.85),Q.add(rt);let pt=new Pt(new Ie(.03,10,8),nt);pt.position.set(.225,-.035,0),Q.add(pt);for(let gt of[-1,1]){let ut=new Pt(new Ie(.026,12,10),Ae("#120C08",{shininess:160,specular:"#FFFFFF"}));ut.position.set(.035,.035,gt*.083),Q.add(ut);let Ht=new Pt(new Ie(.07,12,8),H);Ht.scale.set(.45,1.25,.25),Ht.position.set(-.08,.1,gt*.08),Ht.rotation.set(gt*.6,0,.6),Q.add(Ht);let Jt=new Wn([new G(-.02,.07,gt*.035),new G(-.09,.22,gt*.07),new G(-.07,.38,gt*.085),new G(0,.47,gt*.06)]),le=new Bi(Jt,18,.019,7);{let he=le.attributes.position,ve=8;for(let Wt=0;Wt<=18;Wt++){let Ge=Jt.getPointAt(Wt/18),be=1-Wt/18*.7;for(let Zt=0;Zt<ve;Zt++){let ce=Wt*ve+Zt;he.setXYZ(ce,Ge.x+(he.getX(ce)-Ge.x)*be,Ge.y+(he.getY(ce)-Ge.y)*be,Ge.z+(he.getZ(ce)-Ge.z)*be)}}le.computeVertexNormals()}Q.add(new Pt(Yt(le,(he,ve,Wt)=>he.set(Math.floor(Wt*55)%2?"#3B2A1A":"#5A4330")),Ae("#FFFFFF",{vertexColors:!0,shininess:50})))}let ft=new on;ft.position.set(0,.38,0),z.add(ft);let Lt=[];for(let[gt,ut]of[[.34,1],[-.38,0]])for(let Ht of[-1,1]){let Jt=new Ee;Jt.position.set(gt,.76,Ht*.09),tt.add(Jt);let le=new Pt(new Ie(ut?.075:.1,12,10),H);le.scale.set(ut?1.1:1.15,ut?1.7:1.6,ut?.6:.55),le.position.set(0,ut?-.05:-.07,0),Jt.add(le);let he=new Pt(new pe(ut?.026:.03,ut?.04:.055,.36,10),H);he.position.y=-.2,Jt.add(he);let ve=new Ee;ve.position.y=-.38,Jt.add(ve),ve.add(new Pt(new Ie(.024,8,6),N));let Wt=new Pt(new pe(.014,.02,.34,8),N);Wt.position.y=-.17,ve.add(Wt);let Ge=new Pt(new pe(.017,.024,.045,8),Ae("#20150D",{shininess:60}));Ge.position.y=-.355,ve.add(Ge),Lt.push({hip:Jt,knee:ve,front:ut,s:Ht})}return or(W),a.add(W),{root:W,body:tt,neck:z,head:Q,tail:_,legs:Lt,collar:ft,yaw:-.25,neckA:-.6}})(),K=ar();a.add(K.root);let Dt=null;function Rt(W){if(!(Dt&&Dt.id===W.id)){if(Dt)for(let tt of[Dt.root,Dt.chute,Dt.drop,Dt.rope])a.remove(tt);Dt=rf(W,p),a.add(Dt.root,Dt.chute,Dt.drop,Dt.rope),Dt.turn=0,Dt.blink=0,Dt.nextBlink=2}}function Ut(){let W=o.vq.camp;$t.position.set(r.x+W.x,r.VF+W.base,r.z+W.z),$t.rotation.y=W.rot,q.position.set(o.vq.zoneW.x,t.H(o.vq.zoneW.x,o.vq.zoneW.z),o.vq.zoneW.z),K.root.rotation.y=W.rot,K.yaw=W.rot}let L=[],S=[];{let W=new ke;W.setAttribute("position",new De(new Float32Array([0,0,0,.9,0,-.25,.9,0,.25]),3)),W.computeVertexNormals();let tt=new ln({color:"#34406A",side:He});for(let ot=0;ot<9;ot++){let _t=new Ee,At=new Pt(W,tt),_=new Pt(W,tt);_.scale.x=-1,_t.add(At,_);let C=ot<5;_t.userData={ph:u()*6,sp:.25+u()*.2,y:C?r.VF+26+u()*14:70+u()*40,cx:C?r.x+15+u()*90:(u()-.5)*300,cz:C?r.z+(u()-.5)*20:(u()-.5)*300,rad:10+u()*18,l:At,r:_},L.push(_t),a.add(_t)}let H=new ei;H.moveTo(0,0),H.bezierCurveTo(.05,.1,.16,.12,.15,.02),H.bezierCurveTo(.16,-.05,.08,-.1,0,-.02);let N=new zi(H,6),nt=["#FF8FD1","#FFD23F","#8FD6FF","#FFFFFF","#FF9E5E","#B28DFF"];for(let ot=0;ot<22;ot++){let _t=new Ze({color:nt[ot%nt.length],side:He,emissive:nt[ot%nt.length],emissiveIntensity:.25}),At=new Ee,_=new Pt(N,_t),C=new Pt(N,_t);C.scale.x=-1,At.add(_,C),At.userData={l:_,r:C,ax:r.x+6+u()*108,az:r.z+(u()-.5)*16,ph:u()*6},S.push(At),a.add(At)}}let Y={yaw:0,pitch:.26,dist:5.6,init:!1,tgt:new G,pos:new G,scopeYaw:0,scopePitch:-.38,effPitch:null,effDist:null},bt=new G,dt=new G;function Nt(W){let tt=o.hero;if(!tt)return;if(o.scope){let lt=s.x+xt+4.75,rt=wt+1.45,pt=s.z,ft=Y.scopeYaw,Lt=Y.scopePitch;Y.pos.set(lt,rt,pt),Y.tgt.set(lt+Math.cos(ft)*100*Math.cos(Lt),rt+Math.sin(Lt)*100,pt+Math.sin(ft)*100*Math.cos(Lt));return}let H=o.focus,N=tt.mode==="lift"||tt.mode==="carry",nt=tt.mode==="glide";bt.set(H&&H.x!=null?H.x:tt.x,tt.y+(N||nt?.6:1.45),H&&H.z!=null?H.z:tt.z),H&&(Y.yaw=mn(Y.yaw,H.yaw,2.2,W)),tt.mode==="carry"&&(Y.yaw=mn(Y.yaw,Math.atan2(tt.z-Y.pos.z,tt.x-Y.pos.x),1.5,W));let ot=H?H.dist:tt.mode==="carry"?11:N?7:nt?9:o.summit?6.4:5.6;Y.init||(Y.tgt.copy(bt),Y.dist=ot,Y.effPitch=null,Y.effDist=null,Y.init=!0);let _t=tt.mode==="faint"?2:N?6:14;Y.tgt.x=Ve(Y.tgt.x,bt.x,_t,W),Y.tgt.z=Ve(Y.tgt.z,bt.z,_t,W),Y.tgt.y=Ve(Y.tgt.y,bt.y,tt.air&&!N&&!nt?6:10,W),Y.dist=Ve(Y.dist,ot,3,W);let At=(lt,rt)=>dt.set(Y.tgt.x-Math.cos(Y.yaw)*Math.cos(rt)*lt,Y.tgt.y+Math.sin(rt)*lt,Y.tgt.z-Math.sin(Y.yaw)*Math.cos(rt)*lt),_="",C=(lt,rt)=>{_="";for(let pt=1;pt<=8;pt++){let ft=pt/8;At(lt*ft,rt);let Lt=t.H(dt.x,dt.z);if(dt.y<Lt+.4||dt.y-.85*(1-ft)<Lt+.2)return _="terr",ft;if(_="canopy",!N&&t.tallNear(dt.x,dt.z,gt=>{let ut=dt.x-gt.x,Ht=dt.z-gt.z,Jt=ut*ut+Ht*Ht,le=gt.r*(gt.tree?3.4:1.2);return pt>=2&&!o.summit&&Jt<le*le&&dt.y>Lt+1.9&&dt.y<Lt+9}))return ft}return _="",0},z=N?.35:nt?Math.max(Y.pitch,.42):Y.pitch,D=Y.dist,I=C(D,z);if(I&&_==="canopy"){let lt=Math.min(z,.04),rt=C(D,lt);(!rt||rt>I)&&(z=lt,I=rt)}else if(I)for(let lt of[.3,.6]){let rt=Math.min(z+lt,1.05),pt=C(D,rt);if((!pt||pt>I)&&(z=rt,I=pt),!I)break}I&&(D=Math.max(1.8,D*(I-1/8))),Y.effPitch=Y.effPitch==null?z:Ve(Y.effPitch,z,z<Y.effPitch?8:2.5,W),Y.effDist=Y.effDist==null?D:Ve(Y.effDist,D,D<Y.effDist?10:2.5,W),At(Math.min(Y.effDist,D+.6),Y.effPitch),t.tallNear(dt.x,dt.z,lt=>{let rt=dt.x-lt.x,pt=dt.z-lt.z,ft=rt*rt+pt*pt,Lt=lt.r+.35;if(ft<Lt*Lt){let gt=Math.sqrt(ft)||.01;dt.x=lt.x+rt/gt*Lt,dt.z=lt.z+pt/gt*Lt}return!1});let Q=t.H(dt.x,dt.z)+.4;dt.y<Q&&(dt.y=Q),Y.pos.copy(dt)}let Bt=()=>(Y.yaw*180/Math.PI%360+360)%360,vt=0,Mt=-1,qt=0,re=0,X=2,Et=390,zt=844,Gt=new on;Gt.rotation.order="YXZ";let ee=new G,ne=new G;function ye(W,tt,H){Et=W,zt=tt,X=H,n.setPixelRatio(H),n.setSize(W,tt,!1),c.aspect=W/tt,c.updateProjectionMatrix()}let kt=W=>Math.PI/2-W;function Fe(W,tt){let H=o.hero,N=Dt,nt=H.mode==="walk"&&!H.air,ot=nt?Math.abs(Math.sin(H.hopPh))*(H.run?.17:.08):0;N.root.position.set(H.x,H.y+ot,H.z),N.turn=mn(N.turn,kt(H.face),14,tt),N.root.rotation.y=N.turn;let _t=H.mode==="faint";N.inner.rotation.z=_t?-Math.PI/2*Math.min(1,H.faintT*4):-H.rot;let At=H.landT>0?H.landT*2.4:0;H.air&&H.mode==="walk"&&(At=-.12),nt&&H.speed>.3&&(At+=(1-Math.abs(Math.sin(H.hopPh)))*.22-.07),N.inner.scale.set(1+.2*At,1-.22*At,1+.2*At),N.inner.position.y=.55*(1-.22*At);for(let[D,I]of N.feet.entries())I.position.y=-.49+(nt&&H.speed>.3?Math.max(0,Math.sin(H.hopPh*2+D*Math.PI))*.06:0);let _=H.mode!=="walk"&&H.mode!=="glide"||H.stun>0||H.air&&H.vy<-7||o.wind>.5;N.nextBlink-=tt,N.nextBlink<0&&(N.blink=.14,N.nextBlink=2.5+Math.random()*2.5),N.blink=Math.max(0,N.blink-tt);for(let D of N.eyes)D.scale.set(_?1.08:1,_?1.15:N.blink>0||_t?.12:1,1);for(let D of N.pupils)D.scale.setScalar(_?.72:1);N.smile.visible=!_,N.ooh.visible=_,N.acc.userData.star&&(N.acc.userData.star.rotation.y=W*2);for(let D of[-1,1]){let I=N.acc.userData["tail"+D];I&&(I.rotation.x=.5+Math.sin(W*12+D)*.25)}if(N.fire){N.bodyMat.emissiveIntensity=.5+Math.sin(W*13)*.1;for(let D of N.flames)D.scale.set(1,.8+Math.sin(W*14+D.userData.ph*1.7)*.25,1)}let C=N.chute;if(C.visible=H.chute>.01,C.visible){C.position.copy(N.root.position),C.rotation.y=N.root.rotation.y;let D=H.chute,I=D<1?tn(.15,1,D)+Math.sin(D*Math.PI)*.12:1;N.canopyHolder.scale.set(I,tn(.4,1,D),I),N.canopyHolder.position.y=tn(1,2.25,D),C.rotation.z=-(Math.hypot(H.vx,H.vz)*.05)+Math.sin(W*1.5)*.05,C.rotation.x=Math.sin(W*1.1)*.05;let Q=N.lines.geometry.attributes.position,lt=N.canopyHolder.position.y,rt=1.7*Math.sin(Math.PI*.42)*I,pt=lt+1.7*Math.cos(Math.PI*.42)*.62*tn(.4,1,D);for(let ft=0;ft<10;ft++){let Lt=ft/10*xe,gt=ft%2?.22:-.22;Q.setXYZ(ft*2,Math.cos(Lt)*rt,pt,Math.sin(Lt)*rt),Q.setXYZ(ft*2+1,gt,.85,0)}Q.needsUpdate=!0}let z=o.drop;if(N.drop.visible=!!(z&&z.t<2.4),N.drop.visible){let D=Re(1-z.t*1.2,.1,1);N.drop.position.set(z.x,t.H(z.x,z.z)+.02,z.z),N.drop.scale.set(1.05,.62*D,1.05),N.drop.material.opacity=Re(1-(z.t-1.4),0,1)}}function fe(W,tt){for(let{e:H,m:N}of j){let nt=(H.x-c.position.x)**2+(H.z-c.position.z)**2>19600;if(N.root.visible=!nt,nt)continue;let ot=H.speed>.3,_t=H.state==="chase"||H.state==="charge";N.root.position.set(H.x,H.y,H.z),N.yaw=mn(N.yaw,-H.face,10,tt),N.root.rotation.y=N.yaw,N.body.position.y=ot?Math.abs(Math.sin(H.ph))*(_t?.06:.02):0,N.head.rotation.z=H.state==="notice"?-.25+Math.sin(W*20)*.04:ot?-.1:Math.sin(W*1.3)*.15-.2,N.tail.rotation.z=(H.kind==="wolf"?.9:.4)+(_t?.5:0)+Math.sin(W*(_t?14:3))*.15;for(let At of N.legs){let _=At.front?At.s>0?0:Math.PI:(At.s>0?Math.PI:0)+(_t?.6:0);ot?(At.hip.rotation.z=Math.sin(H.ph+_)*(_t?.7:.4),At.knee.rotation.z=(At.front?-1:1)*Math.max(0,-Math.cos(H.ph+_))*.5):(At.hip.rotation.z=Ve(At.hip.rotation.z,0,8,tt),At.knee.rotation.z=Ve(At.knee.rotation.z,0,8,tt))}}}function ie(W,tt){let H=e.gz,N=ht,nt=H.state,ot=Math.hypot(H.vx,H.vz)>.25;if(N.root.visible=(H.x-c.position.x)**2+(H.z-c.position.z)**2<260*260,!N.root.visible)return;let _t=nt==="flee"||nt==="leap",At=nt==="tired";N.root.position.set(H.x,H.y,H.z),N.body.position.y=ot?Math.abs(Math.sin(H.ph))*(_t?.07:.025):At?Math.sin(W*9)*.008:0,N.yaw=mn(N.yaw,-H.face,_t?14:8,tt),N.root.rotation.y=N.yaw,N.body.rotation.z=_t?Math.sin(H.ph*2)*.05:0;let _=nt==="graze"||nt==="pen"&&!ot;N.neckA=Ve(N.neckA,_?-2.05:At?-1.15:_t?-.95:nt==="alert"||nt==="look"||nt==="cornered"?-.32:-.6,_?3:7,tt),N.neck.rotation.z=N.neckA,N.head.rotation.z=_?.5+Math.sin(W*7)*.08:nt==="alert"||nt==="look"?.2:.35,N.head.rotation.y=nt==="look"||nt==="alert"||nt==="cornered"?Math.sin(W*1.6)*.25:0,N.tail.rotation.z=.5+(nt==="alert"||_t?.9:Math.sin(W*3)*.2);let C=_t?.6:At?.28:.36,z=nt==="leap";for(let D of N.legs){let I=D.front?D.s>0?0:Math.PI:(D.s>0?Math.PI:0)+(_t?.6:0);if(z){D.hip.rotation.z=D.front?.9:-.9,D.knee.rotation.z=D.front?-1.2:1.1;continue}if(ot){let Q=Math.sin(H.ph+I);D.hip.rotation.z=Q*C,D.knee.rotation.z=(D.front?-1:1)*Math.max(0,-Math.cos(H.ph+I))*C*1.1}else D.hip.rotation.z=Ve(D.hip.rotation.z,0,8,tt),D.knee.rotation.z=Ve(D.knee.rotation.z,0,8,tt)}}function ze(W,tt,H){let N=K,nt=o.hero,ot=o.vq,_t=ot.camp,At=nt.x-ot.merW.x,_=nt.z-ot.merW.z,C=Math.hypot(At,_);if(N.root.visible=C<200,!N.root.visible)return;let z=C<16||!!H,D=z?Math.atan2(At,_):_t.rot+.15*Math.sin(W*.3);o.focus&&o.focus.talk&&(D=_t.rot+Re(Zn(_t.rot,Math.atan2(At,_)),-.7,.7)),N.yaw=mn(N.yaw,D,3,tt),N.root.rotation.y=N.yaw,N.root.position.set(ot.merW.x,r.VF+_t.base,ot.merW.z),N.root.scale.y=1+Math.sin(W*1.7)*.007;let I=!!(H&&H.who==="merchant"&&H.shown<[...H.text].length);N.mouth.scale.y=I?.25+Math.abs(Math.sin(W*15))*.9:.3,N.head.rotation.x=I?Math.sin(W*5)*.05:0;let[Q,lt]=N.arms;if(ot.delivered){for(let rt of N.arms)rt.sh.rotation.z=Ve(rt.sh.rotation.z,rt.s*2.5,6,tt),rt.el.rotation.x=Ve(rt.el.rotation.x,-.3+Math.sin(W*9+rt.s)*.3,8,tt);N.root.position.y=r.VF+_t.base+Math.abs(Math.sin(W*6))*.06*(o.focus?1:0)}else if(ot.caught&&z)lt.sh.rotation.z=Ve(lt.sh.rotation.z,1.35,5,tt),lt.el.rotation.x=Ve(lt.el.rotation.x,0,5,tt),lt.sh.rotation.x=Ve(lt.sh.rotation.x,-.2,5,tt),Q.sh.rotation.z=Ve(Q.sh.rotation.z,-.12,5,tt);else if(z&&C>2.5)lt.sh.rotation.z=Ve(lt.sh.rotation.z,2.55,5,tt),lt.el.rotation.x=Ve(lt.el.rotation.x,0,5,tt),lt.el.rotation.z=Math.sin(W*8)*.45,lt.sh.rotation.x=0,Q.sh.rotation.z=Ve(Q.sh.rotation.z,-.12,5,tt);else for(let rt of N.arms)rt.sh.rotation.z=Ve(rt.sh.rotation.z,rt.s*.12,4,tt),rt.el.rotation.z=Ve(rt.el.rotation.z,0,4,tt),rt.el.rotation.x=Ve(rt.el.rotation.x,-.25,4,tt),rt.sh.rotation.x=0}function un(){let W=Dt.rope;if(W.visible=o.vq.caught&&!o.vq.delivered&&ht.root.visible,!W.visible)return;Dt.root.updateMatrixWorld(),ht.root.updateMatrixWorld();let tt=o.hero,H=ee.set(tt.x-Math.cos(tt.face)*.3,Dt.root.position.y+.5,tt.z-Math.sin(tt.face)*.3),N=ht.collar.getWorldPosition(ne),nt=H.clone().lerp(N,.5);nt.y=Math.min(H.y,N.y)-.25,W.geometry.dispose(),W.geometry=new Bi(new ms(H.clone(),nt,N.clone()),18,.016,5)}function mi(W,tt){let H=o.wind,N=at.flag.geometry.attributes.position,nt=at.flagBase;for(let I=0;I<N.count;I++){let Q=nt[I*3],lt=nt[I*3+1],rt=Q/3.2;N.setXYZ(I,Q*(1-H*.05),lt-rt*rt*.25*(1-H),Math.sin(W*(4+H*12)-Q*(1.6+H*1.5))*rt*(.18+H*.42)+Math.sin(W*7+lt*3)*.04*rt)}N.needsUpdate=!0,at.flag.geometry.computeVertexNormals(),at.flag.rotation.y=-.3*H;let ot=at.bell;ot.v+=(-ot.swing*18-ot.v*1.4)*tt,ot.swing+=ot.v*tt,ot.g.rotation.x=ot.swing+H*.25*Math.sin(W*6);for(let I of at.lanterns)I.rotation.z=Math.sin(W*(1.6+H*8)+I.position.x)*(.06+H*.45),I.rotation.x=Math.cos(W*(1.3+H*7))*H*.3;let _t=at.drops.geometry.attributes.position,At=at.drops.userData.seed;for(let I=0;I<At.length;I++){let[Q,lt,rt]=At[I],pt=(W*rt*.9+lt)%1,ft=.15+pt*1.6;_t.setXYZ(I,Math.cos(Q)*ft+H*pt*3.5,2.35+Math.sin(pt*Math.PI)*.7-pt*1.8,Math.sin(Q)*ft+H*pt*1.2)}_t.needsUpdate=!0,g.offset.x=W*.03,at.water.material.normalScale.set(.6+H,.6+H);let _=at.streaks.geometry.attributes.position,C=at.streaks.userData.seed;at.streaks.material.opacity=Se(.15,.8,H)*.55;for(let I=0;I<C.length;I++){let[,Q,lt,rt]=C[I],pt=(W*rt*(.6+H*1.6)+I*.137)%1,ft=-30+pt*60,Lt=1.5+H*3.5,gt=lt+Math.sin(W*2+I)*.6,ut=Q+Math.sin(pt*9+I)*.4;_.setXYZ(I*2,ft,ut,gt+pt*12-6),_.setXYZ(I*2+1,ft-Lt,ut+.05,gt+pt*12-6-Lt*.3)}_.needsUpdate=!0;let z=at.leaves.geometry.attributes.position,D=at.leaves.userData.seed;at.leaves.material.opacity=H*.9;for(let I=0;I<D.length;I++){let[Q,lt,rt,pt]=D[I],ft=W*(.5+pt)*(.4+H)%1;z.setXYZ(I,(Q+ft*70)%60-30,lt*.6+.4+Math.sin(W*3+I)*.5,rt+Math.sin(W+pt*6)*2+ft*6)}z.needsUpdate=!0;for(let I of mt){let Q=I.m,[lt,rt]=Q.arms,pt=1-Math.exp(-6*tt);Q.root.scale.y=1+Math.sin(W*1.6+I.base.x)*.006,Q.root.rotation.x=-H*.14+Math.sin(W*9+I.base.x)*H*.03;let ft=0,Lt=-.12,gt=-.25,ut=0,Ht=.12,Jt=-.25;if(H>.25&&(ft=-2.4,Lt=0,gt=-1.3),I.kind==="seller")ut=-.5+Math.sin(W*2)*.1,Jt=-1.2,I.pour>0&&(I.pour-=tt,ut=-1,Jt=-.6);else if(I.kind==="tea"){let le=Math.max(0,Math.sin(W*.5+I.ph))**8;ut=-.45-le*.7,Jt=-1.25-le*.9}else I.kind==="stand"&&(ft=H>.25?ft:-.2,ut=-.15+Math.sin(W*1.1)*.25*(I.talk>0?1:.3),Jt=-.6);lt.sh.rotation.x+=(ft-lt.sh.rotation.x)*pt,lt.sh.rotation.z+=(Lt-lt.sh.rotation.z)*pt,lt.el.rotation.x+=(gt-lt.el.rotation.x)*pt,rt.sh.rotation.x+=(ut-rt.sh.rotation.x)*pt,rt.sh.rotation.z+=(Ht-rt.sh.rotation.z)*pt,rt.el.rotation.x+=(Jt-rt.el.rotation.x)*pt,Q.mouth.scale.y=I.talk>0?.25+Math.abs(Math.sin(W*15))*.9:.3,I.talk>0&&(I.talk-=tt)}}let cr=-1;function hr(W,tt={}){let H=performance.now(),N=vt?Re((H-vt)/1e3,0,.1):1/60;vt=H;let nt=Mt>=0?Re(W-Mt,0,.1):1/60;Mt=W,h.time.value=W,h.wind.value=Ve(h.wind.value,o.wind,3,nt),re++,qt=qt*.97+(N>1/38?1:0)*.03,re>90&&qt>.6&&X>1.01&&(ye(Et,zt,Math.max(1,X-.25)),qt=0,re=0);let ot=o.hero;if(!ot||!Dt)return;cr!==o.vq.camp&&(Ut(),cr=o.vq.camp),U(tt.budget!=null?tt.budget:4,ot.x,ot.z),Fe(W,nt),fe(W,nt),ie(W,nt),ze(W,nt,tt.dlg),un(),(s.rad(c.position.x,c.position.z)<120||o.scope)&&mi(W,nt);let _t=0;for(let gt=0;gt<o.coins.length&&_t<jt;gt++){let ut=o.coins[gt];ut.taken||(ut.x-ot.x)**2+(ut.z-ot.z)**2>3600||(Gt.position.set(ut.x,ut.y+Math.sin(W*2+gt)*.08,ut.z),Gt.rotation.set(Math.PI/2,W*3+gt,0),Gt.scale.setScalar(1),Gt.updateMatrix(),te.setMatrixAt(_t++,Gt.matrix))}te.count=_t,te.instanceMatrix.needsUpdate=!0;for(let[gt,ut]of oe)ut.rotation.y=Math.sin(W*2+ut.position.x)*.3,ut.material.color.set(o.reached.has(gt)?"#FFD23F":"#F4F1EA");if(q.visible=o.vq.caught&&!o.vq.delivered,q.visible){let gt=.5+.5*Math.sin(W*5);q.userData.ring.scale.setScalar(1+gt*.08),q.userData.arrow.position.y=1.9+gt*.25,q.userData.arrow.rotation.y=W*2}for(let gt of de.flames){let ut=.75+Math.sin(W*13+gt.userData.i*2)*.18;gt.scale.set(1,ut,1),gt.position.y=.12+gt.userData.h0*ut/2}for(let gt of de.glows)gt.material.opacity=.5+Math.sin(W*11)*.08;de.lantern.rotation.z=Math.sin(W*1.6)*.08;let At=Math.abs(c.position.x-(r.x+60))<160&&Math.abs(c.position.z-r.z)<90;for(let gt of S){if(gt.visible=At,!At)continue;let ut=gt.userData,Ht=ut.ax+Math.sin(W*.45+ut.ph)*2.2,Jt=ut.az+Math.sin(W*.7+ut.ph*2)*.9;gt.position.set(Ht,t.H(Ht,Jt)+.7+Math.sin(W*1.3+ut.ph)*.35,Jt),gt.rotation.y=Math.cos(W*.45+ut.ph)>0?-Math.PI/2:Math.PI/2;let le=Math.sin(W*22+ut.ph)*1.1;ut.l.rotation.y=le,ut.r.rotation.y=-le}for(let gt of L){let ut=gt.userData,Ht=W*ut.sp+ut.ph;gt.position.set(ut.cx+Math.cos(Ht)*ut.rad,ut.y+Math.sin(W+ut.ph)*.8,ut.cz+Math.sin(Ht)*ut.rad),gt.rotation.y=-Ht;let Jt=Math.sin(W*8+ut.ph)*.6;ut.l.rotation.z=Jt,ut.r.rotation.z=-Jt}Nt(nt);let _=s.rad(ot.x,ot.z),C=Se(195,170,_)*Se(78,62,ot.y),z=Se(50,95,ot.y)*Se(200,120,_),D=o.scope?380:tn(tn(70,22,C),110,z),I=o.scope?1500:tn(tn(430,120,C),900,z);if(a.fog.near=Ve(a.fog.near,D,2,nt),a.fog.far=Ve(a.fog.far,I,2,nt),at.scope.visible=!o.scope,c.fov=o.scope?13:62,c.updateProjectionMatrix(),c.position.copy(Y.pos),c.lookAt(Y.tgt),tt.shake>0){let gt=tt.shake*.25;c.position.x+=(Math.random()-.5)*gt,c.position.y+=(Math.random()-.5)*gt}w.position.copy(c.position);let Q=c.position.x,lt=c.position.z,rt=(o.scope?500:0)+Se(40,95,c.position.y)*160;for(let gt of F){let ut=(gt.x-Q)**2+(gt.z-lt)**2,Ht=gt.small?gt.far:gt.far+rt,Jt=ut<Ht*Ht;if(gt.lo){let le=ut<gt.lodAt*gt.lodAt&&!o.scope;gt.m.visible=Jt&&le,gt.lo.visible=Jt&&!le}else gt.m.visible=Jt}let pt=o.scope?0:150;for(let gt of Z){let ut=(gt.x-Q)**2+(gt.z-lt)**2,Ht=gt.hi&&ut<pt*pt;gt.hi&&(gt.hi.visible=Ht),gt.lo.visible=!Ht}let ft=Math.round(ot.x/.25)*.25,Lt=Math.round(ot.z/.25)*.25;m.target.position.set(ft,ot.y,Lt),m.position.set(ft+d.x*90,ot.y+d.y*90,Lt+d.z*90),Ao(ot),n.render(a,c)}let rs=new G,os=new ct;function Ao(W){let tt=h.see.value;if(o.scope||W.mode==="lift"||W.mode==="carry"){tt.w=0;return}c.updateMatrixWorld(),rs.set(W.x,W.y+.75,W.z).applyMatrix4(c.matrixWorldInverse);let H=-rs.z;if(H<.3){tt.w=0;return}rs.set(W.x,W.y+.75,W.z).project(c),n.getDrawingBufferSize(os);let N=1.35/(H*Math.tan(c.fov*Math.PI/360))*(os.y/2);tt.set((rs.x*.5+.5)*os.x,(rs.y*.5+.5)*os.y,H,N)}let On=new G;function ur(W,tt,H){return On.set(W,tt,H).project(c),{x:(On.x+1)/2,y:(1-On.y)/2,vis:On.z<1&&On.z>-1}}function Eo(W=160){a.updateMatrixWorld(),h.see.value.w=0;let tt=new G;K.head.getWorldPosition(tt);let H=n.domElement.width,N=n.domElement.height,nt=new An(28,H/N,.05,1200),ot=new G(Math.sin(K.root.rotation.y),0,Math.cos(K.root.rotation.y));nt.position.copy(tt).addScaledVector(ot,1.75).add(new G(0,.05,0)),nt.lookAt(tt.x,tt.y-.02,tt.z),w.position.copy(nt.position),m.target.position.copy(tt),m.position.set(tt.x+d.x*60,tt.y+d.y*60,tt.z+d.z*60);let _t=[Dt&&Dt.root.visible,ht.root.visible];Dt&&(Dt.root.visible=!1),ht.root.visible=!1;for(let C of Z)C.lo.visible=!0,C.hi&&(C.hi.visible=!1);n.render(a,nt),Dt&&(Dt.root.visible=_t[0]),ht.root.visible=_t[1];let At=document.createElement("canvas");At.width=At.height=W;let _=Math.min(H,N);return At.getContext("2d").drawImage(n.domElement,(H-_)/2,(N-_)/2,_,_,0,0,W,W),At.toDataURL("image/jpeg",.9)}function To(W=1024){U(1e9),h.see.value.w=0;let tt=new xs(-y,y,y,-y,1,900);tt.position.set(0,600,0),tt.up.set(1,0,0),tt.lookAt(0,0,0);let H=[$t,K.root,ht.root,te,q,Ct,...L,...S,...j.map(C=>C.m.root),...Dt?[Dt.root,Dt.chute,Dt.drop,Dt.rope]:[]],N=H.map(C=>C.visible);H.forEach(C=>{C.visible=!1});for(let C of Z)C.lo.visible=!1,C.hi.visible=!0;for(let C of F)C.m.visible=!C.small,C.lo&&(C.m.visible=!1,C.lo.visible=!0);let nt=a.fog.near,ot=a.fog.far;a.fog.near=1e5,a.fog.far=2e5;let _t=m.shadow.camera.right;Object.assign(m.shadow.camera,{left:-y,right:y,top:y,bottom:-y}),m.shadow.camera.updateProjectionMatrix(),m.target.position.set(0,0,0),m.position.set(d.x*400,d.y*400,d.z*400);let At=n.getPixelRatio();n.setPixelRatio(1),n.setSize(W,W,!1),n.render(a,tt);let _=document.createElement("canvas");return _.width=_.height=W,_.getContext("2d").drawImage(n.domElement,0,0,W,W),n.setPixelRatio(At),n.setSize(Et,zt,!1),Object.assign(m.shadow.camera,{left:-_t,right:_t,top:_t,bottom:-_t}),m.shadow.camera.updateProjectionMatrix(),a.fog.near=nt,a.fog.far=ot,H.forEach((C,z)=>{C.visible=N[z]}),{canvas:_,x0:-y,x1:y,z0:-y,z1:y}}return{setSize:ye,render:hr,project:ur,heading:Bt,cam:Y,portrait:Eo,mapShot:To,buildHi:U,setHero:Rt,pourTea:()=>{for(let W of mt)W.kind==="seller"&&(W.pour=1.4,W.talk=3)},talkNpc:W=>{let tt=mt.filter(H=>H.kind===W);tt.length&&(tt[Math.floor(Math.random()*tt.length)].talk=3)},ringBell:()=>{at.bell.v+=2.4},renderer:n,scene:a,camera:c,U:h,fx:at,npcs:mt,get pr(){return X},get hiLeft(){return $.length}}}function uf(i,t={}){let e=performance.now(),n=of(t.map||Eh),s=performance.now()-e,r=cf(n),o=hf({renderer:t.renderer,sign:t.sign},n,r),a=r.S,l=o.cam,c=Math.round(performance.now()-e);function h(m,w={}){o.setHero(m);let p=r.enter(m.id,w);return l.yaw=a.hero.face,l.pitch=w.at==="valley"?.5:.26,l.init=!1,p}function u(m,w={}){a.scope?(l.scopeYaw=Re(l.scopeYaw+(w.dyaw||0)*.35,-.9,.9),l.scopePitch=Re(l.scopePitch+(w.dpitch||0)*-.3,-.75,.2)):(l.yaw+=w.dyaw||0,l.pitch=Re(l.pitch+(w.dpitch||0),-.3,1.15));let p=w.jx||0,g=w.jy||0,b=Math.cos(l.yaw),E=Math.sin(l.yaw),A={mx:b*g-E*p,mz:E*g+b*p,mag:w.mag||0,jump:!!w.jump,sneak:!!w.sneak},F=r.step(m,A);for(let R of F)Array.isArray(R)&&R[0]==="respawn"&&(l.yaw=a.hero.face,l.init=!1);return F}function f(m){return m==="scope"?(r.interact("scope"),l.scopeYaw=0,l.scopePitch=-.38,a.scope):m==="tea"?(r.interact("tea"),o.pourTea(),!0):m==="chat"?(o.talkNpc("tea"),!0):m==="bell"?(o.ringBell(),!0):r.interact(m)}return{G:n,sim:r,view:o,S:a,cam:l,enter:h,step:u,interact:f,threats:()=>r.beasts.filter(m=>m.state==="chase"||m.state==="charge"||m.state==="notice").map(m=>({kind:m.kind,x:m.x,y:m.y,z:m.z,state:m.state})),render:o.render,setSize:o.setSize,project:o.project,heading:o.heading,nearInteract:r.nearInteract,skipWait:r.skipWait,objective:r.objective,respawn:r.respawn,mapShot:o.mapShot,portrait:o.portrait,ground:n.H,info:{HALF:n.HALF,M:n.M,V:n.V,rest:n.restPoints,buildMs:c,geoMs:Math.round(s)},renderer:o.renderer,scene:o.scene,camera:o.camera,U:o.U,get pr(){return o.pr}}}return xf(x_);})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
