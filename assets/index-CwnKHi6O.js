var ep=i=>{throw TypeError(i)};var js=(i,e,t)=>e.has(i)?ep("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t);function tp(i,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in i)){const r=Object.getOwnPropertyDescriptor(n,s);r&&Object.defineProperty(i,s,r.get?r:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ml="180",np=0,th=1,ip=2,sp=0,gl=1,_l=2,ii=3,Ei=0,qt=1,$t=2,oi=0,Rs=1,Us=2,nh=3,ih=4,rp=5,Ni=100,op=101,ap=102,cp=103,lp=104,hp=200,up=201,fp=202,dp=203,lc=204,hc=205,pp=206,mp=207,gp=208,_p=209,vp=210,xp=211,yp=212,Sp=213,Mp=214,uc=0,fc=1,dc=2,Ns=3,pc=4,mc=5,gc=6,_c=7,vl=0,Ep=1,Tp=2,yi=0,ju=1,Zu=2,Ku=3,xl=4,Ju=5,Qu=6,ef=7,tf=300,Fs=301,Os=302,vc=303,xc=304,sa=306,Xi=1e3,ki=1001,yc=1002,yn=1003,bp=1004,Gr=1005,Wn=1006,ga=1007,Hi=1008,jn=1009,nf=1010,sf=1011,Tr=1012,yl=1013,$i=1014,Xn=1015,Yn=1016,Sl=1017,Ml=1018,br=1020,rf=35902,of=35899,af=1021,cf=1022,On=1023,Cr=1026,wr=1027,El=1028,Tl=1029,lf=1030,bl=1031,Cl=1033,wo=33776,Ao=33777,Ro=33778,Po=33779,Sc=35840,Mc=35841,Ec=35842,Tc=35843,bc=36196,Cc=37492,wc=37496,Ac=37808,Rc=37809,Pc=37810,Dc=37811,Lc=37812,Ic=37813,Uc=37814,Nc=37815,Fc=37816,Oc=37817,zc=37818,Bc=37819,kc=37820,Hc=37821,Gc=36492,Vc=36494,Wc=36495,Xc=36283,$c=36284,Yc=36285,qc=36286,Cp=3200,wp=3201,wl=0,Ap=1,_i="",Ut="srgb",zs="srgb-linear",Go="linear",_t="srgb",os=7680,sh=519,Rp=512,Pp=513,Dp=514,hf=515,Lp=516,Ip=517,Up=518,Np=519,rh=35044,oh="300 es",$n=2e3,Vo=2001;class Ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ah=1234567;const fr=Math.PI/180,Ar=180/Math.PI;function Ki(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function Al(i,e){return(i%e+e)%e}function Fp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Op(i,e,t){return i!==e?(t-i)/(e-i):0}function dr(i,e,t){return(1-t)*i+t*e}function zp(i,e,t,n){return dr(i,e,1-Math.exp(-t*n))}function Bp(i,e=1){return e-Math.abs(Al(i,e*2)-e)}function kp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Hp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Gp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Vp(i,e){return i+Math.random()*(e-i)}function Wp(i){return i*(.5-Math.random())}function Xp(i){i!==void 0&&(ah=i);let e=ah+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $p(i){return i*fr}function Yp(i){return i*Ar}function qp(i){return(i&i-1)===0&&i!==0}function jp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kp(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ts(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Xe={DEG2RAD:fr,RAD2DEG:Ar,generateUUID:Ki,clamp:tt,euclideanModulo:Al,mapLinear:Fp,inverseLerp:Op,lerp:dr,damp:zp,pingpong:Bp,smoothstep:kp,smootherstep:Hp,randInt:Gp,randFloat:Vp,randFloatSpread:Wp,seededRandom:Xp,degToRad:$p,radToDeg:Yp,isPowerOfTwo:qp,ceilPowerOfTwo:jp,floorPowerOfTwo:Zp,setQuaternionFromProperEuler:Kp,normalize:sn,denormalize:Ts};class ce{constructor(e=0,t=0){ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let p=1-a;const m=c*f+l*d+h*g+u*_,M=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const w=Math.sqrt(S),b=Math.atan2(w,m*M);p=Math.sin(p*b)/w,a=Math.sin(a*b)/w}const v=a*M;if(c=c*p+f*v,l=l*p+d*v,h=h*p+g*v,u=u*p+_*v,p===1-a){const w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-a*d,e[t+2]=l*g+h*d+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ch.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ch.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _a.copy(this).projectOnVector(e),this.sub(_a)}reflect(e){return this.sub(_a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new R,ch=new Yi;class Qe{constructor(e,t,n,s,r,o,a,c,l){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],p=s[3],m=s[6],M=s[1],S=s[4],v=s[7],w=s[2],b=s[5],A=s[8];return r[0]=o*_+a*M+c*w,r[3]=o*p+a*S+c*b,r[6]=o*m+a*v+c*A,r[1]=l*_+h*M+u*w,r[4]=l*p+h*S+u*b,r[7]=l*m+h*v+u*A,r[2]=f*_+d*M+g*w,r[5]=f*p+d*S+g*b,r[8]=f*m+d*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=t*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(va.makeScale(e,t)),this}rotate(e){return this.premultiply(va.makeRotation(-e)),this}translate(e,t){return this.premultiply(va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const va=new Qe;function uf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Wo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jp(){const i=Wo("canvas");return i.style.display="block",i}const lh={};function Rr(i){i in lh||(lh[i]=!0,console.warn(i))}function Qp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const hh=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uh=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function em(){const i={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?Go:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Rr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Rr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zs]:{primaries:e,whitePoint:n,transfer:Go,toXYZ:hh,fromXYZ:uh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:hh,fromXYZ:uh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),i}const ct=em();function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let as;class tm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{as===void 0&&(as=Wo("canvas")),as.width=e.width,as.height=e.height;const s=as.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=as}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ai(t[n]/255)*255):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nm=0;class Rl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xa(s[o].image)):r.push(xa(s[o]))}else r=xa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let im=0;const ya=new R;class en extends Ws{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=ki,s=ki,r=Wn,o=Hi,a=On,c=jn,l=en.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Ki(),this.name="",this.source=new Rl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ya).x}get height(){return this.source.getSize(ya).y}get depth(){return this.source.getSize(ya).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xi:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xi:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=tf;en.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,v=(d+1)/2,w=(m+1)/2,b=(h+f)/4,A=(u+_)/4,P=(g+p)/4;return S>v&&S>w?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=b/n,r=A/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=P/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=A/r,s=P/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sm extends Ws{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new en(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Rl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends sm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ff extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rm extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vr.copy(n.boundingBox)),Vr.applyMatrix4(e.matrixWorld),this.union(Vr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),Wr.subVectors(this.max,Zs),cs.subVectors(e.a,Zs),ls.subVectors(e.b,Zs),hs.subVectors(e.c,Zs),ci.subVectors(ls,cs),li.subVectors(hs,ls),wi.subVectors(cs,hs);let t=[0,-ci.z,ci.y,0,-li.z,li.y,0,-wi.z,wi.y,ci.z,0,-ci.x,li.z,0,-li.x,wi.z,0,-wi.x,-ci.y,ci.x,0,-li.y,li.x,0,-wi.y,wi.x,0];return!Sa(t,cs,ls,hs,Wr)||(t=[1,0,0,0,1,0,0,0,1],!Sa(t,cs,ls,hs,Wr))?!1:(Xr.crossVectors(ci,li),t=[Xr.x,Xr.y,Xr.z],Sa(t,cs,ls,hs,Wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Jn=[new R,new R,new R,new R,new R,new R,new R,new R],Rn=new R,Vr=new Ji,cs=new R,ls=new R,hs=new R,ci=new R,li=new R,wi=new R,Zs=new R,Wr=new R,Xr=new R,Ai=new R;function Sa(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ai.fromArray(i,r);const a=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),c=e.dot(Ai),l=t.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const om=new Ji,Ks=new R,Ma=new R;class Qi{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):om.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const t=Ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ks,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(Ma)),this.expandByPoint(Ks.copy(e.center).sub(Ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Qn=new R,Ea=new R,$r=new R,hi=new R,Ta=new R,Yr=new R,ba=new R;class Pl{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ea.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(Ea);const r=e.distanceTo(t)*.5,o=-this.direction.dot($r),a=hi.dot(this.direction),c=-hi.dot($r),l=hi.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ea).addScaledVector($r,f),d}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,s,r){Ta.subVectors(t,e),Yr.subVectors(n,e),ba.crossVectors(Ta,Yr);let o=this.direction.dot(ba),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,e);const c=a*this.direction.dot(Yr.crossVectors(hi,Yr));if(c<0)return null;const l=a*this.direction.dot(Ta.cross(hi));if(l<0||c+l>o)return null;const h=-a*hi.dot(ba);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,n,s,r,o,a,c,l,h,u,f,d,g,_,p){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,d,g,_,p)}set(e,t,n,s,r,o,a,c,l,h,u,f,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/us.setFromMatrixColumn(e,0).length(),r=1/us.setFromMatrixColumn(e,1).length(),o=1/us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(am,e,cm)}lookAt(e,t,n){const s=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),ui.crossVectors(n,_n),ui.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),ui.crossVectors(n,_n)),ui.normalize(),qr.crossVectors(_n,ui),s[0]=ui.x,s[4]=qr.x,s[8]=_n.x,s[1]=ui.y,s[5]=qr.y,s[9]=_n.y,s[2]=ui.z,s[6]=qr.z,s[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],M=n[3],S=n[7],v=n[11],w=n[15],b=s[0],A=s[4],P=s[8],E=s[12],x=s[1],D=s[5],I=s[9],H=s[13],q=s[2],V=s[6],k=s[10],J=s[14],$=s[3],pe=s[7],Z=s[11],re=s[15];return r[0]=o*b+a*x+c*q+l*$,r[4]=o*A+a*D+c*V+l*pe,r[8]=o*P+a*I+c*k+l*Z,r[12]=o*E+a*H+c*J+l*re,r[1]=h*b+u*x+f*q+d*$,r[5]=h*A+u*D+f*V+d*pe,r[9]=h*P+u*I+f*k+d*Z,r[13]=h*E+u*H+f*J+d*re,r[2]=g*b+_*x+p*q+m*$,r[6]=g*A+_*D+p*V+m*pe,r[10]=g*P+_*I+p*k+m*Z,r[14]=g*E+_*H+p*J+m*re,r[3]=M*b+S*x+v*q+w*$,r[7]=M*A+S*D+v*V+w*pe,r[11]=M*P+S*I+v*k+w*Z,r[15]=M*E+S*H+v*J+w*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+p*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+m*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],M=u*p*l-_*f*l+_*c*d-a*p*d-u*c*m+a*f*m,S=g*f*l-h*p*l-g*c*d+o*p*d+h*c*m-o*f*m,v=h*_*l-g*u*l+g*a*d-o*_*d-h*a*m+o*u*m,w=g*u*c-h*_*c-g*a*f+o*_*f+h*a*p-o*u*p,b=t*M+n*S+s*v+r*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=M*A,e[1]=(_*f*r-u*p*r-_*s*d+n*p*d+u*s*m-n*f*m)*A,e[2]=(a*p*r-_*c*r+_*s*l-n*p*l-a*s*m+n*c*m)*A,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*A,e[4]=S*A,e[5]=(h*p*r-g*f*r+g*s*d-t*p*d-h*s*m+t*f*m)*A,e[6]=(g*c*r-o*p*r-g*s*l+t*p*l+o*s*m-t*c*m)*A,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*d+t*c*d)*A,e[8]=v*A,e[9]=(g*u*r-h*_*r-g*n*d+t*_*d+h*n*m-t*u*m)*A,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*m+t*a*m)*A,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*A,e[12]=w*A,e[13]=(h*_*s-g*u*s+g*n*f-t*_*f-h*n*p+t*u*p)*A,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*p-t*a*p)*A,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,_=o*h,p=o*u,m=a*u,M=c*l,S=c*h,v=c*u,w=n.x,b=n.y,A=n.z;return s[0]=(1-(_+m))*w,s[1]=(d+v)*w,s[2]=(g-S)*w,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(f+m))*b,s[6]=(p+M)*b,s[7]=0,s[8]=(g+S)*A,s[9]=(p-M)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=us.set(s[0],s[1],s[2]).length();const o=us.set(s[4],s[5],s[6]).length(),a=us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Pn.copy(this);const l=1/r,h=1/o,u=1/a;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,t.setFromRotationMatrix(Pn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=$n,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===$n)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Vo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=$n,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===$n)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Vo)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const us=new R,Pn=new mt,am=new R(0,0,0),cm=new R(1,1,1),ui=new R,qr=new R,_n=new R,fh=new mt,dh=new Yi;class zn{constructor(e=0,t=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dh.setFromEuler(this),this.setFromQuaternion(dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class df{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lm=0;const ph=new R,fs=new Yi,ei=new mt,jr=new R,Js=new R,hm=new R,um=new Yi,mh=new R(1,0,0),gh=new R(0,1,0),_h=new R(0,0,1),vh={type:"added"},fm={type:"removed"},ds={type:"childadded",child:null},Ca={type:"childremoved",child:null};class Ot extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new R,t=new zn,n=new Yi,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new Qe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new df,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(mh,e)}rotateY(e){return this.rotateOnAxis(gh,e)}rotateZ(e){return this.rotateOnAxis(_h,e)}translateOnAxis(e,t){return ph.copy(e).applyQuaternion(this.quaternion),this.position.add(ph.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mh,e)}translateY(e){return this.translateOnAxis(gh,e)}translateZ(e){return this.translateOnAxis(_h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jr.copy(e):jr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Js,jr,this.up):ei.lookAt(jr,Js,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(ei),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vh),ds.child=e,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fm),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vh),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,hm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,um,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ot.DEFAULT_UP=new R(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new R,ti=new R,wa=new R,ni=new R,ps=new R,ms=new R,xh=new R,Aa=new R,Ra=new R,Pa=new R,Da=new dt,La=new dt,Ia=new dt;class Fn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Dn.subVectors(e,t),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Dn.subVectors(s,t),ti.subVectors(n,t),wa.subVectors(e,t);const o=Dn.dot(Dn),a=Dn.dot(ti),c=Dn.dot(wa),l=ti.dot(ti),h=ti.dot(wa),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ni.x),c.addScaledVector(o,ni.y),c.addScaledVector(a,ni.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Da.setScalar(0),La.setScalar(0),Ia.setScalar(0),Da.fromBufferAttribute(e,t),La.fromBufferAttribute(e,n),Ia.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Da,r.x),o.addScaledVector(La,r.y),o.addScaledVector(Ia,r.z),o}static isFrontFacing(e,t,n,s){return Dn.subVectors(n,t),ti.subVectors(e,t),Dn.cross(ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Dn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Fn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ps.subVectors(s,n),ms.subVectors(r,n),Aa.subVectors(e,n);const c=ps.dot(Aa),l=ms.dot(Aa);if(c<=0&&l<=0)return t.copy(n);Ra.subVectors(e,s);const h=ps.dot(Ra),u=ms.dot(Ra);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ps,o);Pa.subVectors(e,r);const d=ps.dot(Pa),g=ms.dot(Pa);if(g>=0&&d<=g)return t.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(ms,a);const p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return xh.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(xh,a);const m=1/(p+_+f);return o=_*m,a=f*m,t.copy(n).addScaledVector(ps,o).addScaledVector(ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function Ua(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=Al(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ua(o,r,e+1/3),this.g=Ua(o,r,e),this.b=Ua(o,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=pf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return ct.workingToColorSpace(Zt.copy(this),e),Math.round(tt(Zt.r*255,0,255))*65536+Math.round(tt(Zt.g*255,0,255))*256+Math.round(tt(Zt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Zt.copy(this),t);const n=Zt.r,s=Zt.g,r=Zt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Ut){ct.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,s=Zt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(Zr);const n=dr(fi.h,Zr.h,t),s=dr(fi.s,Zr.s,t),r=dr(fi.l,Zr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Ve;Ve.NAMES=pf;let dm=0;class Ti extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=Rs,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lc,this.blendDst=hc,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lc&&(n.blendSrc=this.blendSrc),this.blendDst!==hc&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yt extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new R,Kr=new ce;let pm=0;class zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rh,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ts(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rh&&(e.usage=this.usage),e}}class mf extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class gf extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nt extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mm=0;const Tn=new mt,Na=new Ot,gs=new R,vn=new Ji,Qs=new Ji,Ht=new R;class Et extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uf(e)?gf:mf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return Na.lookAt(e),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(vn.min,Qs.min),vn.expandByPoint(Ht),Ht.addVectors(vn.max,Qs.max),vn.expandByPoint(Ht)):(vn.expandByPoint(Qs.min),vn.expandByPoint(Qs.max))}vn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ht));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ht.fromBufferAttribute(a,l),c&&(gs.fromBufferAttribute(e,l),Ht.add(gs)),s=Math.max(s,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new R,c[P]=new R;const l=new R,h=new R,u=new R,f=new ce,d=new ce,g=new ce,_=new R,p=new R;function m(P,E,x){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(D),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(D),a[P].add(_),a[E].add(_),a[x].add(_),c[P].add(p),c[E].add(p),c[x].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let P=0,E=M.length;P<E;++P){const x=M[P],D=x.start,I=x.count;for(let H=D,q=D+I;H<q;H+=3)m(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const S=new R,v=new R,w=new R,b=new R;function A(P){w.fromBufferAttribute(s,P),b.copy(w);const E=a[P];S.copy(E),S.sub(w.multiplyScalar(w.dot(E))).normalize(),v.crossVectors(b,E);const D=v.dot(c[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,D)}for(let P=0,E=M.length;P<E;++P){const x=M[P],D=x.start,I=x.count;for(let H=D,q=D+I;H<q;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let m=0;m<h;m++)f[g++]=l[d++]}return new zt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yh=new mt,Ri=new Pl,Jr=new Qi,Sh=new R,Qr=new R,eo=new R,to=new R,Fa=new R,no=new R,Mh=new R,io=new R;class le extends Ot{constructor(e=new Et,t=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){no.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Fa.fromBufferAttribute(u,e),o?no.addScaledVector(Fa,h):no.addScaledVector(Fa.sub(t),h))}t.add(no)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(r),Ri.copy(e.ray).recast(e.near),!(Jr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Jr,Sh)===null||Ri.origin.distanceToSquared(Sh)>(e.far-e.near)**2))&&(yh.copy(r).invert(),Ri.copy(e.ray).applyMatrix4(yh),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),S=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=M,w=S;v<w;v+=3){const b=a.getX(v),A=a.getX(v+1),P=a.getX(v+2);s=so(this,m,e,n,l,h,u,b,A,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const M=a.getX(p),S=a.getX(p+1),v=a.getX(p+2);s=so(this,o,e,n,l,h,u,M,S,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],M=Math.max(p.start,d.start),S=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let v=M,w=S;v<w;v+=3){const b=v,A=v+1,P=v+2;s=so(this,m,e,n,l,h,u,b,A,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const M=p,S=p+1,v=p+2;s=so(this,o,e,n,l,h,u,M,S,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function gm(i,e,t,n,s,r,o,a){let c;if(e.side===qt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ei,a),c===null)return null;io.copy(a),io.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(io);return l<t.near||l>t.far?null:{distance:l,point:io.clone(),object:i}}function so(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Qr),i.getVertexPosition(c,eo),i.getVertexPosition(l,to);const h=gm(i,e,t,n,Qr,eo,to,Mh);if(h){const u=new R;Fn.getBarycoord(Mh,Qr,eo,to,u),s&&(h.uv=Fn.getInterpolatedAttribute(s,a,c,l,u,new ce)),r&&(h.uv1=Fn.getInterpolatedAttribute(r,a,c,l,u,new ce)),o&&(h.normal=Fn.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new R,materialIndex:0};Fn.getNormal(Qr,eo,to,f.normal),h.face=f,h.barycoord=u}return h}class at extends Et{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(u,2));function g(_,p,m,M,S,v,w,b,A,P,E){const x=v/A,D=w/P,I=v/2,H=w/2,q=b/2,V=A+1,k=P+1;let J=0,$=0;const pe=new R;for(let Z=0;Z<k;Z++){const re=Z*D-H;for(let ge=0;ge<V;ge++){const Ee=ge*x-I;pe[_]=Ee*M,pe[p]=re*S,pe[m]=q,l.push(pe.x,pe.y,pe.z),pe[_]=0,pe[p]=0,pe[m]=b>0?1:-1,h.push(pe.x,pe.y,pe.z),u.push(ge/A),u.push(1-Z/P),J+=1}}for(let Z=0;Z<P;Z++)for(let re=0;re<A;re++){const ge=f+re+V*Z,Ee=f+re+V*(Z+1),ze=f+(re+1)+V*(Z+1),Ye=f+(re+1)+V*Z;c.push(ge,Ee,Ye),c.push(Ee,ze,Ye),$+=6}a.addGroup(d,$,E),d+=$,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new at(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function rn(i){const e={};for(let t=0;t<i.length;t++){const n=Bs(i[t]);for(const s in n)e[s]=n[s]}return e}function _m(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _f(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const ks={clone:Bs,merge:rn};var vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xt extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vm,this.fragmentShader=xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=_m(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class vf extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new R,Eh=new ce,Th=new ce;class fn extends vf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,Eh,Th),t.subVectors(Th,Eh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _s=-90,vs=1;class ym extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(_s,vs,e,t);s.layers=this.layers,this.add(s);const r=new fn(_s,vs,e,t);r.layers=this.layers,this.add(r);const o=new fn(_s,vs,e,t);o.layers=this.layers,this.add(o);const a=new fn(_s,vs,e,t);a.layers=this.layers,this.add(a);const c=new fn(_s,vs,e,t);c.layers=this.layers,this.add(c);const l=new fn(_s,vs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class xf extends en{constructor(e=[],t=Fs,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sm extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new xf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new at(5,5,5),r=new Xt({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:oi});r.uniforms.tEquirect.value=t;const o=new le(s,r),a=t.minFilter;return t.minFilter===Hi&&(t.minFilter=Wn),new ym(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class yt extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mm={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mm)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ra{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=n}clone(){return new ra(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class yf extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Em extends en{constructor(e=null,t=1,n=1,s,r,o,a,c,l=yn,h=yn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bh extends zt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xs=new mt,Ch=new mt,ro=[],wh=new Ji,Tm=new mt,er=new le,tr=new Qi;class bm extends le{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Tm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ji),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),wh.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(wh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),tr.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(tr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),e.ray.intersectsSphere(tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xs),Ch.multiplyMatrices(n,xs),er.matrixWorld=Ch,er.raycast(e,ro);for(let o=0,a=ro.length;o<a;o++){const c=ro[o];c.instanceId=r,c.object=this,t.push(c)}ro.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Em(new Float32Array(s*this.count),s,this.count,El,Xn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const za=new R,Cm=new R,wm=new Qe;class mi{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=za.subVectors(n,t).cross(Cm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(za),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wm.getNormalMatrix(e),s=this.coplanarPoint(za).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new Qi,Am=new ce(.5,.5),oo=new R;class Dl{constructor(e=new mi,t=new mi,n=new mi,s=new mi,r=new mi,o=new mi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],_=r[9],p=r[10],m=r[11],M=r[12],S=r[13],v=r[14],w=r[15];if(s[0].setComponents(l-o,d-h,m-g,w-M).normalize(),s[1].setComponents(l+o,d+h,m+g,w+M).normalize(),s[2].setComponents(l+a,d+u,m+_,w+S).normalize(),s[3].setComponents(l-a,d-u,m-_,w-S).normalize(),n)s[4].setComponents(c,f,p,v).normalize(),s[5].setComponents(l-c,d-f,m-p,w-v).normalize();else if(s[4].setComponents(l-c,d-f,m-p,w-v).normalize(),t===$n)s[5].setComponents(l+c,d+f,m+p,w+v).normalize();else if(t===Vo)s[5].setComponents(c,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){Pi.center.set(0,0,0);const t=Am.distanceTo(e.center);return Pi.radius=.7071067811865476+t,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(oo.x=s.normal.x>0?e.max.x:e.min.x,oo.y=s.normal.y>0?e.max.y:e.min.y,oo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ll extends Ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xo=new R,$o=new R,Ah=new mt,nr=new Pl,ao=new Qi,Ba=new R,Rh=new R;class Rm extends Ot{constructor(e=new Et,t=new Ll){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Xo.fromBufferAttribute(t,s-1),$o.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Xo.distanceTo($o);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(s),ao.radius+=r,e.ray.intersectsSphere(ao)===!1)return;Ah.copy(s).invert(),nr.copy(e.ray).applyMatrix4(Ah);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=l){const m=h.getX(_),M=h.getX(_+1),S=co(this,e,nr,c,m,M,_);S&&t.push(S)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(d),m=co(this,e,nr,c,_,p,g-1);m&&t.push(m)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,p=g-1;_<p;_+=l){const m=co(this,e,nr,c,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=co(this,e,nr,c,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function co(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(Xo.fromBufferAttribute(a,s),$o.fromBufferAttribute(a,r),t.distanceSqToSegment(Xo,$o,Ba,Rh)>n)return;Ba.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ba);if(!(l<e.near||l>e.far))return{distance:l,point:Rh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Ph=new R,Dh=new R;class Sf extends Rm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ph.fromBufferAttribute(t,s),Dh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ph.distanceTo(Dh);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jc extends Ti{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lh=new mt,Zc=new Pl,lo=new Qi,ho=new R;class Ih extends Ot{constructor(e=new Et,t=new jc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),lo.radius+=r,e.ray.intersectsSphere(lo)===!1)return;Lh.copy(s).invert(),Zc.copy(e.ray).applyMatrix4(Lh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const p=l.getX(g);ho.fromBufferAttribute(u,p),Uh(ho,p,c,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)ho.fromBufferAttribute(u,g),Uh(ho,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Uh(i,e,t,n,s,r,o){const a=Zc.distanceSqToPoint(i);if(a<t){const c=new R;Zc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class kn extends en{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mf extends en{constructor(e,t,n=$i,s,r,o,a=yn,c=yn,l,h=Cr,u=1){if(h!==Cr&&h!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ef extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Gi extends Et{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,g=n*2+r,_=s+1,p=new R,m=new R;for(let M=0;M<=g;M++){let S=0,v=0,w=0,b=0;if(M<=n){const E=M/n,x=E*Math.PI/2;v=-h-e*Math.cos(x),w=e*Math.sin(x),b=-e*Math.cos(x),S=E*u}else if(M<=n+r){const E=(M-n)/r;v=-h+E*t,w=e,b=0,S=u+E*f}else{const E=(M-n-r)/n,x=E*Math.PI/2;v=h+e*Math.sin(x),w=e*Math.cos(x),b=e*Math.sin(x),S=u+f+E*u}const A=Math.max(0,Math.min(1,S/d));let P=0;M===0?P=.5/s:M===g&&(P=-.5/s);for(let E=0;E<=s;E++){const x=E/s,D=x*Math.PI*2,I=Math.sin(D),H=Math.cos(D);m.x=-w*H,m.y=v,m.z=w*I,a.push(m.x,m.y,m.z),p.set(-w*H,b,w*I),p.normalize(),c.push(p.x,p.y,p.z),l.push(x+P,A)}if(M>0){const E=(M-1)*_;for(let x=0;x<s;x++){const D=E+x,I=E+x+1,H=M*_+x,q=M*_+x+1;o.push(D,I,H),o.push(I,q,H)}}}this.setIndex(o),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Il extends Et{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new R,h=new ce;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(a,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Il(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class dn extends Et{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],p=n/2;let m=0;M(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(d,2));function M(){const v=new R,w=new R;let b=0;const A=(t-e)/n;for(let P=0;P<=r;P++){const E=[],x=P/r,D=x*(t-e)+e;for(let I=0;I<=s;I++){const H=I/s,q=H*c+a,V=Math.sin(q),k=Math.cos(q);w.x=D*V,w.y=-x*n+p,w.z=D*k,u.push(w.x,w.y,w.z),v.set(V,A,k).normalize(),f.push(v.x,v.y,v.z),d.push(H,1-x),E.push(g++)}_.push(E)}for(let P=0;P<s;P++)for(let E=0;E<r;E++){const x=_[E][P],D=_[E+1][P],I=_[E+1][P+1],H=_[E][P+1];(e>0||E!==0)&&(h.push(x,D,H),b+=3),(t>0||E!==r-1)&&(h.push(D,I,H),b+=3)}l.addGroup(m,b,0),m+=b}function S(v){const w=g,b=new ce,A=new R;let P=0;const E=v===!0?e:t,x=v===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,p*x,0),f.push(0,x,0),d.push(.5,.5),g++;const D=g;for(let I=0;I<=s;I++){const q=I/s*c+a,V=Math.cos(q),k=Math.sin(q);A.x=E*k,A.y=p*x,A.z=E*V,u.push(A.x,A.y,A.z),f.push(0,x,0),b.x=V*.5+.5,b.y=k*.5*x+.5,d.push(b.x,b.y),g++}for(let I=0;I<s;I++){const H=w+I,q=D+I;v===!0?h.push(q,q+1,H):h.push(q+1,q,H),P+=3}l.addGroup(m,P,v===!0?1:2),m+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vi extends dn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Vi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ul extends Et{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const S=new R,v=new R,w=new R;for(let b=0;b<t.length;b+=3)d(t[b+0],S),d(t[b+1],v),d(t[b+2],w),c(S,v,w,M)}function c(M,S,v,w){const b=w+1,A=[];for(let P=0;P<=b;P++){A[P]=[];const E=M.clone().lerp(v,P/b),x=S.clone().lerp(v,P/b),D=b-P;for(let I=0;I<=D;I++)I===0&&P===b?A[P][I]=E:A[P][I]=E.clone().lerp(x,I/D)}for(let P=0;P<b;P++)for(let E=0;E<2*(b-P)-1;E++){const x=Math.floor(E/2);E%2===0?(f(A[P][x+1]),f(A[P+1][x]),f(A[P][x])):(f(A[P][x+1]),f(A[P+1][x+1]),f(A[P+1][x]))}}function l(M){const S=new R;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(M),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function h(){const M=new R;for(let S=0;S<r.length;S+=3){M.x=r[S+0],M.y=r[S+1],M.z=r[S+2];const v=p(M)/2/Math.PI+.5,w=m(M)/Math.PI+.5;o.push(v,1-w)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){const S=o[M+0],v=o[M+2],w=o[M+4],b=Math.max(S,v,w),A=Math.min(S,v,w);b>.9&&A<.1&&(S<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),w<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,S){const v=M*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function g(){const M=new R,S=new R,v=new R,w=new R,b=new ce,A=new ce,P=new ce;for(let E=0,x=0;E<r.length;E+=9,x+=6){M.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),b.set(o[x+0],o[x+1]),A.set(o[x+2],o[x+3]),P.set(o[x+4],o[x+5]),w.copy(M).add(S).add(v).divideScalar(3);const D=p(w);_(b,x+0,M,D),_(A,x+2,S,D),_(P,x+4,v,D)}}function _(M,S,v,w){w<0&&M.x===1&&(o[S]=M.x-1),v.x===0&&v.z===0&&(o[S]=w/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.vertices,e.indices,e.radius,e.details)}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ce:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new R,s=[],r=[],o=[],a=new R,c=new mt;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(tt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(tt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Nl extends Zn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ce){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Pm extends Nl{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Fl(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const uo=new R,ka=new Fl,Ha=new Fl,Ga=new Fl;class Tf extends Zn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(uo.subVectors(s[0],s[1]).add(s[0]),l=uo);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(uo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=uo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),ka.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,p),Ha.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,p),Ga.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(ka.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Ha.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Ga.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(ka.calc(c),Ha.calc(c),Ga.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Nh(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Dm(i,e){const t=1-i;return t*t*e}function Lm(i,e){return 2*(1-i)*i*e}function Im(i,e){return i*i*e}function pr(i,e,t,n){return Dm(i,e)+Lm(i,t)+Im(i,n)}function Um(i,e){const t=1-i;return t*t*t*e}function Nm(i,e){const t=1-i;return 3*t*t*i*e}function Fm(i,e){return 3*(1-i)*i*i*e}function Om(i,e){return i*i*i*e}function mr(i,e,t,n,s){return Um(i,e)+Nm(i,t)+Fm(i,n)+Om(i,s)}class bf extends Zn{constructor(e=new ce,t=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ce){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mr(e,s.x,r.x,o.x,a.x),mr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zm extends Zn{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mr(e,s.x,r.x,o.x,a.x),mr(e,s.y,r.y,o.y,a.y),mr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cf extends Zn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bm extends Zn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wf extends Zn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(pr(e,s.x,r.x,o.x),pr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Af extends Zn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(pr(e,s.x,r.x,o.x),pr(e,s.y,r.y,o.y),pr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rf extends Zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Nh(a,c.x,l.x,h.x,u.x),Nh(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ce().fromArray(s))}return this}}var Yo=Object.freeze({__proto__:null,ArcCurve:Pm,CatmullRomCurve3:Tf,CubicBezierCurve:bf,CubicBezierCurve3:zm,EllipseCurve:Nl,LineCurve:Cf,LineCurve3:Bm,QuadraticBezierCurve:wf,QuadraticBezierCurve3:Af,SplineCurve:Rf});class km extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Yo[s.type]().fromJSON(s))}return this}}class Fh extends km{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Cf(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new wf(this.currentPoint.clone(),new ce(e,t),new ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new bf(this.currentPoint.clone(),new ce(e,t),new ce(n,s),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Rf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Nl(e,t,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Pf extends Fh{constructor(e){super(e),this.uuid=Ki(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Fh().fromJSON(s))}return this}}function Hm(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Df(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=$m(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){const d=i[f],g=i[f+1];d<a&&(a=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Pr(r,o,t,a,c,l,0),o}function Df(i,e,t,n,s){let r;if(s===i0(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Oh(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Oh(o/n|0,i[o],i[o+1],r);return r&&Hs(r,r.next)&&(Lr(r),r=r.next),r}function qi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Hs(t,t.next)||Rt(t.prev,t,t.next)===0)){if(Lr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Pr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Km(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?Vm(i,n,s,r):Gm(i)){e.push(c.i,i.i,l.i),Lr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Wm(qi(i),e),Pr(i,e,t,n,s,r,2)):o===2&&Xm(i,e,t,n,s,r):Pr(qi(i),e,t,n,s,r,1);break}}}function Gm(i){const e=i.prev,t=i,n=i.next;if(Rt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&or(s,a,r,c,o,l,g.x,g.y)&&Rt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Vm(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Rt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,c,l),g=Math.min(h,u,f),_=Math.max(a,c,l),p=Math.max(h,u,f),m=Kc(d,g,e,t,n),M=Kc(_,p,e,t,n);let S=i.prevZ,v=i.nextZ;for(;S&&S.z>=m&&v&&v.z<=M;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&or(a,h,c,u,l,f,S.x,S.y)&&Rt(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&or(a,h,c,u,l,f,v.x,v.y)&&Rt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=m;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&or(a,h,c,u,l,f,S.x,S.y)&&Rt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&or(a,h,c,u,l,f,v.x,v.y)&&Rt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Wm(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Hs(n,s)&&If(n,t,t.next,s)&&Dr(n,s)&&Dr(s,n)&&(e.push(n.i,t.i,s.i),Lr(t),Lr(t.next),t=i=s),t=t.next}while(t!==i);return qi(t)}function Xm(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&e0(o,a)){let c=Uf(o,a);o=qi(o,o.next),c=qi(c,c.next),Pr(o,e,t,n,s,r,0),Pr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function $m(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Df(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Qm(l))}s.sort(Ym);for(let r=0;r<s.length;r++)t=qm(s[r],t);return t}function Ym(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function qm(i,e){const t=jm(i,e);if(!t)return e;const n=Uf(t,i);return qi(n,n.next),qi(t,t.next)}function jm(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(Hs(i,t))return t;do{if(Hs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Lf(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);Dr(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Zm(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Zm(i,e){return Rt(i.prev,i,e.prev)<0&&Rt(e.next,i,i.next)<0}function Km(i,e,t,n){let s=i;do s.z===0&&(s.z=Kc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Jm(s)}function Jm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Kc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Qm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Lf(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function or(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Lf(i,e,t,n,s,r,o,a)}function e0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!t0(i,e)&&(Dr(i,e)&&Dr(e,i)&&n0(i,e)&&(Rt(i.prev,i,e.prev)||Rt(i,e.prev,e))||Hs(i,e)&&Rt(i.prev,i,i.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Hs(i,e){return i.x===e.x&&i.y===e.y}function If(i,e,t,n){const s=po(Rt(i,e,t)),r=po(Rt(i,e,n)),o=po(Rt(t,n,i)),a=po(Rt(t,n,e));return!!(s!==r&&o!==a||s===0&&fo(i,t,e)||r===0&&fo(i,n,e)||o===0&&fo(t,i,n)||a===0&&fo(t,e,n))}function fo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function po(i){return i>0?1:i<0?-1:0}function t0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&If(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Dr(i,e){return Rt(i.prev,i,i.next)<0?Rt(i,e,i.next)>=0&&Rt(i,i.prev,e)>=0:Rt(i,e,i.prev)<0||Rt(i,i.next,e)<0}function n0(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Uf(i,e){const t=Jc(i.i,i.x,i.y),n=Jc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Oh(i,e,t,n){const s=Jc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Jc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function i0(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class s0{static triangulate(e,t,n=2){return Hm(e,t,n)}}class bs{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return bs.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];zh(e),Bh(n,e);let o=e.length;t.forEach(zh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Bh(n,t[c]);const a=s0.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function zh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Bh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Ol extends Et{constructor(e=new Pf([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new nt(s,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:r0;let S,v=!1,w,b,A,P;m&&(S=m.getSpacedPoints(h),v=!0,f=!1,w=m.computeFrenetFrames(h,!1),b=new R,A=new R,P=new R),f||(p=0,d=0,g=0,_=0);const E=a.extractPoints(l);let x=E.shape;const D=E.holes;if(!bs.isClockWise(x)){x=x.reverse();for(let oe=0,ne=D.length;oe<ne;oe++){const Q=D[oe];bs.isClockWise(Q)&&(D[oe]=Q.reverse())}}function H(oe){const Q=10000000000000001e-36;let ee=oe[0];for(let W=1;W<=oe.length;W++){const N=W%oe.length,ie=oe[N],Le=ie.x-ee.x,Ne=ie.y-ee.y,C=Le*Le+Ne*Ne,y=Math.max(Math.abs(ie.x),Math.abs(ie.y),Math.abs(ee.x),Math.abs(ee.y)),O=Q*y*y;if(C<=O){oe.splice(N,1),W--;continue}ee=ie}}H(x),D.forEach(H);const q=D.length,V=x;for(let oe=0;oe<q;oe++){const ne=D[oe];x=x.concat(ne)}function k(oe,ne,Q){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(ne,Q)}const J=x.length;function $(oe,ne,Q){let ee,W,N;const ie=oe.x-ne.x,Le=oe.y-ne.y,Ne=Q.x-oe.x,C=Q.y-oe.y,y=ie*ie+Le*Le,O=ie*C-Le*Ne;if(Math.abs(O)>Number.EPSILON){const X=Math.sqrt(y),z=Math.sqrt(Ne*Ne+C*C),G=ne.x-Le/X,ve=ne.y+ie/X,ae=Q.x-C/z,be=Q.y+Ne/z,Pe=((ae-G)*C-(be-ve)*Ne)/(ie*C-Le*Ne);ee=G+ie*Pe-oe.x,W=ve+Le*Pe-oe.y;const he=ee*ee+W*W;if(he<=2)return new ce(ee,W);N=Math.sqrt(he/2)}else{let X=!1;ie>Number.EPSILON?Ne>Number.EPSILON&&(X=!0):ie<-Number.EPSILON?Ne<-Number.EPSILON&&(X=!0):Math.sign(Le)===Math.sign(C)&&(X=!0),X?(ee=-Le,W=ie,N=Math.sqrt(y)):(ee=ie,W=Le,N=Math.sqrt(y/2))}return new ce(ee/N,W/N)}const pe=[];for(let oe=0,ne=V.length,Q=ne-1,ee=oe+1;oe<ne;oe++,Q++,ee++)Q===ne&&(Q=0),ee===ne&&(ee=0),pe[oe]=$(V[oe],V[Q],V[ee]);const Z=[];let re,ge=pe.concat();for(let oe=0,ne=q;oe<ne;oe++){const Q=D[oe];re=[];for(let ee=0,W=Q.length,N=W-1,ie=ee+1;ee<W;ee++,N++,ie++)N===W&&(N=0),ie===W&&(ie=0),re[ee]=$(Q[ee],Q[N],Q[ie]);Z.push(re),ge=ge.concat(re)}let Ee;if(p===0)Ee=bs.triangulateShape(V,D);else{const oe=[],ne=[];for(let Q=0;Q<p;Q++){const ee=Q/p,W=d*Math.cos(ee*Math.PI/2),N=g*Math.sin(ee*Math.PI/2)+_;for(let ie=0,Le=V.length;ie<Le;ie++){const Ne=k(V[ie],pe[ie],N);Te(Ne.x,Ne.y,-W),ee===0&&oe.push(Ne)}for(let ie=0,Le=q;ie<Le;ie++){const Ne=D[ie];re=Z[ie];const C=[];for(let y=0,O=Ne.length;y<O;y++){const X=k(Ne[y],re[y],N);Te(X.x,X.y,-W),ee===0&&C.push(X)}ee===0&&ne.push(C)}}Ee=bs.triangulateShape(oe,ne)}const ze=Ee.length,Ye=g+_;for(let oe=0;oe<J;oe++){const ne=f?k(x[oe],ge[oe],Ye):x[oe];v?(A.copy(w.normals[0]).multiplyScalar(ne.x),b.copy(w.binormals[0]).multiplyScalar(ne.y),P.copy(S[0]).add(A).add(b),Te(P.x,P.y,P.z)):Te(ne.x,ne.y,0)}for(let oe=1;oe<=h;oe++)for(let ne=0;ne<J;ne++){const Q=f?k(x[ne],ge[ne],Ye):x[ne];v?(A.copy(w.normals[oe]).multiplyScalar(Q.x),b.copy(w.binormals[oe]).multiplyScalar(Q.y),P.copy(S[oe]).add(A).add(b),Te(P.x,P.y,P.z)):Te(Q.x,Q.y,u/h*oe)}for(let oe=p-1;oe>=0;oe--){const ne=oe/p,Q=d*Math.cos(ne*Math.PI/2),ee=g*Math.sin(ne*Math.PI/2)+_;for(let W=0,N=V.length;W<N;W++){const ie=k(V[W],pe[W],ee);Te(ie.x,ie.y,u+Q)}for(let W=0,N=D.length;W<N;W++){const ie=D[W];re=Z[W];for(let Le=0,Ne=ie.length;Le<Ne;Le++){const C=k(ie[Le],re[Le],ee);v?Te(C.x,C.y+S[h-1].y,S[h-1].x+Q):Te(C.x,C.y,u+Q)}}}K(),te();function K(){const oe=s.length/3;if(f){let ne=0,Q=J*ne;for(let ee=0;ee<ze;ee++){const W=Ee[ee];Ce(W[2]+Q,W[1]+Q,W[0]+Q)}ne=h+p*2,Q=J*ne;for(let ee=0;ee<ze;ee++){const W=Ee[ee];Ce(W[0]+Q,W[1]+Q,W[2]+Q)}}else{for(let ne=0;ne<ze;ne++){const Q=Ee[ne];Ce(Q[2],Q[1],Q[0])}for(let ne=0;ne<ze;ne++){const Q=Ee[ne];Ce(Q[0]+J*h,Q[1]+J*h,Q[2]+J*h)}}n.addGroup(oe,s.length/3-oe,0)}function te(){const oe=s.length/3;let ne=0;xe(V,ne),ne+=V.length;for(let Q=0,ee=D.length;Q<ee;Q++){const W=D[Q];xe(W,ne),ne+=W.length}n.addGroup(oe,s.length/3-oe,1)}function xe(oe,ne){let Q=oe.length;for(;--Q>=0;){const ee=Q;let W=Q-1;W<0&&(W=oe.length-1);for(let N=0,ie=h+p*2;N<ie;N++){const Le=J*N,Ne=J*(N+1),C=ne+ee+Le,y=ne+W+Le,O=ne+W+Ne,X=ne+ee+Ne;He(C,y,O,X)}}}function Te(oe,ne,Q){c.push(oe),c.push(ne),c.push(Q)}function Ce(oe,ne,Q){it(oe),it(ne),it(Q);const ee=s.length/3,W=M.generateTopUV(n,s,ee-3,ee-2,ee-1);L(W[0]),L(W[1]),L(W[2])}function He(oe,ne,Q,ee){it(oe),it(ne),it(ee),it(ne),it(Q),it(ee);const W=s.length/3,N=M.generateSideWallUV(n,s,W-6,W-3,W-2,W-1);L(N[0]),L(N[1]),L(N[3]),L(N[1]),L(N[2]),L(N[3])}function it(oe){s.push(c[oe*3+0]),s.push(c[oe*3+1]),s.push(c[oe*3+2])}function L(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return o0(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Yo[s.type]().fromJSON(s)),new Ol(n,e.options)}}const r0={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ce(r,o),new ce(a,c),new ce(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],_=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ce(o,1-c),new ce(l,1-u),new ce(f,1-g),new ce(_,1-m)]:[new ce(a,1-c),new ce(h,1-u),new ce(d,1-g),new ce(p,1-m)]}};function o0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class gr extends Ul{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new gr(e.radius,e.detail)}}class on extends Et{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const M=m*f-o;for(let S=0;S<l;S++){const v=S*u-r;g.push(v,-M,0),_.push(0,0,1),p.push(S/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){const S=M+l*m,v=M+l*(m+1),w=M+1+l*(m+1),b=M+1+l*m;d.push(S,v,b),d.push(v,w,b)}this.setIndex(d),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.width,e.height,e.widthSegments,e.heightSegments)}}class oa extends Et{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=e;const f=(t-e)/s,d=new R,g=new ce;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){const m=r+p/n*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){const p=_*(n+1);for(let m=0;m<n;m++){const M=m+p,S=M,v=M+n+1,w=M+n+2,b=M+1;a.push(S,v,b),a.push(v,w,b)}}this.setIndex(a),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Un extends Et{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new R,f=new R,d=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const M=[],S=m/n;let v=0;m===0&&o===0?v=.5/t:m===n&&c===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){const b=w/t;u.x=-e*Math.cos(s+b*r)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(s+b*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(b+v,1-S),M.push(l++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){const S=h[m][M+1],v=h[m][M],w=h[m+1][M],b=h[m+1][M+1];(m!==0||o>0)&&d.push(S,v,b),(m!==n-1||c<Math.PI)&&d.push(v,w,b)}this.setIndex(d),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class aa extends Et{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new R,u=new R,f=new R;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,p=d/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(_),u.y=(e+t*Math.cos(p))*Math.sin(_),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,M=(s+1)*d+g;o.push(_,p,M),o.push(p,m,M)}this.setIndex(o),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class zl extends Et{constructor(e=new Af(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,c=new R,l=new ce;let h=new R;const u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(d,2));function _(){for(let S=0;S<t;S++)p(S);p(r===!1?t:0),M(),m()}function p(S){h=e.getPointAt(S/t,h);const v=o.normals[S],w=o.binormals[S];for(let b=0;b<=s;b++){const A=b/s*Math.PI*2,P=Math.sin(A),E=-Math.cos(A);c.x=E*v.x+P*w.x,c.y=E*v.y+P*w.y,c.z=E*v.z+P*w.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function m(){for(let S=1;S<=t;S++)for(let v=1;v<=s;v++){const w=(s+1)*(S-1)+(v-1),b=(s+1)*S+(v-1),A=(s+1)*S+v,P=(s+1)*(S-1)+v;g.push(w,b,P),g.push(b,A,P)}}function M(){for(let S=0;S<=t;S++)for(let v=0;v<=s;v++)l.x=S/t,l.y=v/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new zl(new Yo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class a0 extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ze extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wl,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nf extends Ze{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class c0 extends Ti{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wl,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class l0 extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class h0 extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Bl extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ff extends Bl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Va=new mt,kh=new R,Hh=new R;class Of{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dl,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;kh.setFromMatrixPosition(e.matrixWorld),t.position.copy(kh),Hh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hh),t.updateMatrixWorld(),Va.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Va,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Va)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gh=new mt,ir=new R,Wa=new R;class u0 extends Of{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ir.setFromMatrixPosition(e.matrixWorld),n.position.copy(ir),Wa.copy(n.position),Wa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wa),n.updateMatrixWorld(),s.makeTranslation(-ir.x,-ir.y,-ir.z),Gh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh,n.coordinateSystem,n.reversedDepth)}}class f0 extends Bl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new u0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class kl extends vf{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class d0 extends Of{constructor(){super(new kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _r extends Bl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new d0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class p0 extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class m0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vh(i,e,t,n){const s=g0(n);switch(t){case af:return i*e;case El:return i*e/s.components*s.byteLength;case Tl:return i*e/s.components*s.byteLength;case lf:return i*e*2/s.components*s.byteLength;case bl:return i*e*2/s.components*s.byteLength;case cf:return i*e*3/s.components*s.byteLength;case On:return i*e*4/s.components*s.byteLength;case Cl:return i*e*4/s.components*s.byteLength;case wo:case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ro:case Po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mc:case Tc:return Math.max(i,16)*Math.max(e,8)/4;case Sc:case Ec:return Math.max(i,8)*Math.max(e,8)/2;case bc:case Cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Lc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case kc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Gc:case Vc:case Wc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xc:case $c:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Yc:case qc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function g0(i){switch(i){case jn:case nf:return{byteLength:1,components:1};case Tr:case sf:case Yn:return{byteLength:2,components:1};case Sl:case Ml:return{byteLength:2,components:4};case $i:case yl:case Xn:return{byteLength:4,components:1};case rf:case of:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ml);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function _0(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var v0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x0=`#ifdef USE_ALPHAHASH
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
#endif`,y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,b0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C0=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,w0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,D0=`#ifdef USE_IRIDESCENCE
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
#endif`,L0=`#ifdef USE_BUMPMAP
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
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,k0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,H0=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,G0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,V0=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",j0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ig=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,og=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ag=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
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
#endif`,hg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ug=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,gg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_g=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wg=`#if defined( USE_POINTS_UV )
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
#endif`,Ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ig=`#ifdef USE_MORPHTARGETS
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
#endif`,Ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ng=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kg=`#ifdef USE_NORMALMAP
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
#endif`,Hg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$g=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,e_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,t_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,n_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,i_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s_=`#ifdef USE_SKINNING
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
#endif`,r_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o_=`#ifdef USE_SKINNING
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
#endif`,a_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u_=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,f_=`#ifdef USE_TRANSMISSION
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
#endif`,d_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const __=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v_=`uniform sampler2D t2D;
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`#include <common>
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
}`,T_=`#if DEPTH_PACKING == 3200
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
}`,b_=`#define DISTANCE
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
}`,C_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,w_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R_=`uniform float scale;
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
}`,P_=`uniform vec3 diffuse;
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
}`,D_=`#include <common>
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
}`,L_=`uniform vec3 diffuse;
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
}`,I_=`#define LAMBERT
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
}`,U_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,N_=`#define MATCAP
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
}`,F_=`#define MATCAP
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
}`,O_=`#define NORMAL
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
}`,z_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,B_=`#define PHONG
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
}`,k_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,H_=`#define STANDARD
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
}`,G_=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,V_=`#define TOON
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
}`,W_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,X_=`uniform float size;
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
}`,$_=`uniform vec3 diffuse;
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
}`,Y_=`#include <common>
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
}`,q_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,j_=`uniform float rotation;
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
}`,Z_=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:v0,alphahash_pars_fragment:x0,alphamap_fragment:y0,alphamap_pars_fragment:S0,alphatest_fragment:M0,alphatest_pars_fragment:E0,aomap_fragment:T0,aomap_pars_fragment:b0,batching_pars_vertex:C0,batching_vertex:w0,begin_vertex:A0,beginnormal_vertex:R0,bsdfs:P0,iridescence_fragment:D0,bumpmap_pars_fragment:L0,clipping_planes_fragment:I0,clipping_planes_pars_fragment:U0,clipping_planes_pars_vertex:N0,clipping_planes_vertex:F0,color_fragment:O0,color_pars_fragment:z0,color_pars_vertex:B0,color_vertex:k0,common:H0,cube_uv_reflection_fragment:G0,defaultnormal_vertex:V0,displacementmap_pars_vertex:W0,displacementmap_vertex:X0,emissivemap_fragment:$0,emissivemap_pars_fragment:Y0,colorspace_fragment:q0,colorspace_pars_fragment:j0,envmap_fragment:Z0,envmap_common_pars_fragment:K0,envmap_pars_fragment:J0,envmap_pars_vertex:Q0,envmap_physical_pars_fragment:hg,envmap_vertex:eg,fog_vertex:tg,fog_pars_vertex:ng,fog_fragment:ig,fog_pars_fragment:sg,gradientmap_pars_fragment:rg,lightmap_pars_fragment:og,lights_lambert_fragment:ag,lights_lambert_pars_fragment:cg,lights_pars_begin:lg,lights_toon_fragment:ug,lights_toon_pars_fragment:fg,lights_phong_fragment:dg,lights_phong_pars_fragment:pg,lights_physical_fragment:mg,lights_physical_pars_fragment:gg,lights_fragment_begin:_g,lights_fragment_maps:vg,lights_fragment_end:xg,logdepthbuf_fragment:yg,logdepthbuf_pars_fragment:Sg,logdepthbuf_pars_vertex:Mg,logdepthbuf_vertex:Eg,map_fragment:Tg,map_pars_fragment:bg,map_particle_fragment:Cg,map_particle_pars_fragment:wg,metalnessmap_fragment:Ag,metalnessmap_pars_fragment:Rg,morphinstance_vertex:Pg,morphcolor_vertex:Dg,morphnormal_vertex:Lg,morphtarget_pars_vertex:Ig,morphtarget_vertex:Ug,normal_fragment_begin:Ng,normal_fragment_maps:Fg,normal_pars_fragment:Og,normal_pars_vertex:zg,normal_vertex:Bg,normalmap_pars_fragment:kg,clearcoat_normal_fragment_begin:Hg,clearcoat_normal_fragment_maps:Gg,clearcoat_pars_fragment:Vg,iridescence_pars_fragment:Wg,opaque_fragment:Xg,packing:$g,premultiplied_alpha_fragment:Yg,project_vertex:qg,dithering_fragment:jg,dithering_pars_fragment:Zg,roughnessmap_fragment:Kg,roughnessmap_pars_fragment:Jg,shadowmap_pars_fragment:Qg,shadowmap_pars_vertex:e_,shadowmap_vertex:t_,shadowmask_pars_fragment:n_,skinbase_vertex:i_,skinning_pars_vertex:s_,skinning_vertex:r_,skinnormal_vertex:o_,specularmap_fragment:a_,specularmap_pars_fragment:c_,tonemapping_fragment:l_,tonemapping_pars_fragment:h_,transmission_fragment:u_,transmission_pars_fragment:f_,uv_pars_fragment:d_,uv_pars_vertex:p_,uv_vertex:m_,worldpos_vertex:g_,background_vert:__,background_frag:v_,backgroundCube_vert:x_,backgroundCube_frag:y_,cube_vert:S_,cube_frag:M_,depth_vert:E_,depth_frag:T_,distanceRGBA_vert:b_,distanceRGBA_frag:C_,equirect_vert:w_,equirect_frag:A_,linedashed_vert:R_,linedashed_frag:P_,meshbasic_vert:D_,meshbasic_frag:L_,meshlambert_vert:I_,meshlambert_frag:U_,meshmatcap_vert:N_,meshmatcap_frag:F_,meshnormal_vert:O_,meshnormal_frag:z_,meshphong_vert:B_,meshphong_frag:k_,meshphysical_vert:H_,meshphysical_frag:G_,meshtoon_vert:V_,meshtoon_frag:W_,points_vert:X_,points_frag:$_,shadow_vert:Y_,shadow_frag:q_,sprite_vert:j_,sprite_frag:Z_},_e={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Gn={basic:{uniforms:rn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:rn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ve(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:rn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:rn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:rn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ve(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:rn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:rn([_e.points,_e.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:rn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:rn([_e.common,_e.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:rn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:rn([_e.sprite,_e.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:rn([_e.common,_e.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:rn([_e.lights,_e.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Gn.physical={uniforms:rn([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const mo={r:0,b:0,g:0},Di=new zn,K_=new mt;function J_(i,e,t,n,s,r,o){const a=new Ve(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function _(S){let v=!1;const w=g(S);w===null?m(a,c):w&&w.isColor&&(m(w,1),v=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,v){const w=g(v);w&&(w.isCubeTexture||w.mapping===sa)?(h===void 0&&(h=new le(new at(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:Bs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Di.copy(v.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(K_.makeRotationFromEuler(Di)),h.material.toneMapped=ct.getTransfer(w.colorSpace)!==_t,(u!==w||f!==w.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,d=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new le(new on(2,2),new Xt({name:"BackgroundMaterial",uniforms:Bs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ct.getTransfer(w.colorSpace)!==_t,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=w,f=w.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,v){S.getRGB(mo,_f(i)),n.buffers.color.setClear(mo.r,mo.g,mo.b,v,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),c=v,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,m(a,c)},render:_,addToRenderList:p,dispose:M}}function Q_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(x,D,I,H,q){let V=!1;const k=u(H,I,D);r!==k&&(r=k,l(r.object)),V=d(x,H,I,q),V&&g(x,H,I,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(x,D,I,H),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,D,I){const H=I.wireframe===!0;let q=n[x.id];q===void 0&&(q={},n[x.id]=q);let V=q[D.id];V===void 0&&(V={},q[D.id]=V);let k=V[H];return k===void 0&&(k=f(c()),V[H]=k),k}function f(x){const D=[],I=[],H=[];for(let q=0;q<t;q++)D[q]=0,I[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:H,object:x,attributes:{},index:null}}function d(x,D,I,H){const q=r.attributes,V=D.attributes;let k=0;const J=I.getAttributes();for(const $ in J)if(J[$].location>=0){const Z=q[$];let re=V[$];if(re===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(re=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(re=x.instanceColor)),Z===void 0||Z.attribute!==re||re&&Z.data!==re.data)return!0;k++}return r.attributesNum!==k||r.index!==H}function g(x,D,I,H){const q={},V=D.attributes;let k=0;const J=I.getAttributes();for(const $ in J)if(J[$].location>=0){let Z=V[$];Z===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(Z=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(Z=x.instanceColor));const re={};re.attribute=Z,Z&&Z.data&&(re.data=Z.data),q[$]=re,k++}r.attributes=q,r.attributesNum=k,r.index=H}function _(){const x=r.newAttributes;for(let D=0,I=x.length;D<I;D++)x[D]=0}function p(x){m(x,0)}function m(x,D){const I=r.newAttributes,H=r.enabledAttributes,q=r.attributeDivisors;I[x]=1,H[x]===0&&(i.enableVertexAttribArray(x),H[x]=1),q[x]!==D&&(i.vertexAttribDivisor(x,D),q[x]=D)}function M(){const x=r.newAttributes,D=r.enabledAttributes;for(let I=0,H=D.length;I<H;I++)D[I]!==x[I]&&(i.disableVertexAttribArray(I),D[I]=0)}function S(x,D,I,H,q,V,k){k===!0?i.vertexAttribIPointer(x,D,I,q,V):i.vertexAttribPointer(x,D,I,H,q,V)}function v(x,D,I,H){_();const q=H.attributes,V=I.getAttributes(),k=D.defaultAttributeValues;for(const J in V){const $=V[J];if($.location>=0){let pe=q[J];if(pe===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor)),pe!==void 0){const Z=pe.normalized,re=pe.itemSize,ge=e.get(pe);if(ge===void 0)continue;const Ee=ge.buffer,ze=ge.type,Ye=ge.bytesPerElement,K=ze===i.INT||ze===i.UNSIGNED_INT||pe.gpuType===yl;if(pe.isInterleavedBufferAttribute){const te=pe.data,xe=te.stride,Te=pe.offset;if(te.isInstancedInterleavedBuffer){for(let Ce=0;Ce<$.locationSize;Ce++)m($.location+Ce,te.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ce=0;Ce<$.locationSize;Ce++)p($.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let Ce=0;Ce<$.locationSize;Ce++)S($.location+Ce,re/$.locationSize,ze,Z,xe*Ye,(Te+re/$.locationSize*Ce)*Ye,K)}else{if(pe.isInstancedBufferAttribute){for(let te=0;te<$.locationSize;te++)m($.location+te,pe.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let te=0;te<$.locationSize;te++)p($.location+te);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let te=0;te<$.locationSize;te++)S($.location+te,re/$.locationSize,ze,Z,re*Ye,re/$.locationSize*te*Ye,K)}}else if(k!==void 0){const Z=k[J];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv($.location,Z);break;case 3:i.vertexAttrib3fv($.location,Z);break;case 4:i.vertexAttrib4fv($.location,Z);break;default:i.vertexAttrib1fv($.location,Z)}}}}M()}function w(){P();for(const x in n){const D=n[x];for(const I in D){const H=D[I];for(const q in H)h(H[q].object),delete H[q];delete D[I]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const D=n[x.id];for(const I in D){const H=D[I];for(const q in H)h(H[q].object),delete H[q];delete D[I]}delete n[x.id]}function A(x){for(const D in n){const I=n[D];if(I[x.id]===void 0)continue;const H=I[x.id];for(const q in H)h(H[q].object),delete H[q];delete I[x.id]}}function P(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function ev(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function tv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==On&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==jn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Xn&&!P)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:w,maxSamples:b}}function nv(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new mi,a=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{const M=r?0:n,S=M*4;let v=m.clippingState||null;c.value=v,v=h(g,f,S,d);for(let w=0;w!==S;++w)v[w]=t[w];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,v=d;S!==_;++S,v+=4)o.copy(u[S]).applyMatrix4(M,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function iv(i){let e=new WeakMap;function t(o,a){return a===vc?o.mapping=Fs:a===xc&&(o.mapping=Os),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===vc||a===xc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Sm(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Cs=4,Wh=[.125,.215,.35,.446,.526,.582],Fi=20,Xa=new kl,Xh=new Ve;let $a=null,Ya=0,qa=0,ja=!1;const Ii=(1+Math.sqrt(5))/2,ys=1/Ii,$h=[new R(-Ii,ys,0),new R(Ii,ys,0),new R(-ys,0,Ii),new R(ys,0,Ii),new R(0,Ii,-ys),new R(0,Ii,ys),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],sv=new R;class Qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=sv}=r;$a=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($a,Ya,qa),this._renderer.xr.enabled=ja,e.scissorTest=!1,go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$a=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Yn,format:On,colorSpace:zs,depthBuffer:!1},s=Yh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rv(r)),this._blurMaterial=ov(r,e,t)}return s}_compileMaterial(e){const t=new le(this._lodPlanes[0],e);this._renderer.compile(t,Xa)}_sceneToCubeUV(e,t,n,s,r){const c=new fn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Xh),u.toneMapping=yi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new Yt({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),p=new le(new at,_);let m=!1;const M=e.background;M?M.isColor&&(_.color.copy(M),e.background=null,m=!0):(_.color.copy(Xh),m=!0);for(let S=0;S<6;S++){const v=S%3;v===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[S],r.y,r.z)):v===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[S]));const w=this._cubeSize;go(s,v*w,S>2?w:0,w,w),u.setRenderTarget(s),m&&u.render(p,c),u.render(e,c)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Fs||e.mapping===Os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;go(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Xa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$h[(s-r-1)%$h.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new le(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Fi-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Fi;p>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fi}`);const m=[];let M=0;for(let A=0;A<Fi;++A){const P=A/_,E=Math.exp(-P*P/2);m.push(E),A===0?M+=E:A<p&&(M+=2*E)}for(let A=0;A<m.length;A++)m[A]=m[A]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const v=this._sizeLods[s],w=3*v*(s>S-Cs?s-S+Cs:0),b=4*(this._cubeSize-v);go(t,w,b,3*v,2*v),c.setRenderTarget(t),c.render(u,Xa)}}function rv(i){const e=[],t=[],n=[];let s=i;const r=i-Cs+1+Wh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Cs?c=Wh[o-i+Cs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,p=2,m=1,M=new Float32Array(_*g*d),S=new Float32Array(p*g*d),v=new Float32Array(m*g*d);for(let b=0;b<d;b++){const A=b%3*2/3-1,P=b>2?0:-1,E=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];M.set(E,_*g*b),S.set(f,p*g*b);const x=[b,b,b,b,b,b];v.set(x,m*g*b)}const w=new Et;w.setAttribute("position",new zt(M,_)),w.setAttribute("uv",new zt(S,p)),w.setAttribute("faceIndex",new zt(v,m)),e.push(w),s>Cs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yh(i,e,t){const n=new wn(i,e,t);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function go(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ov(i,e,t){const n=new Float32Array(Fi),s=new R(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function qh(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function jh(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Hl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function av(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===vc||c===xc,h=c===Fs||c===Os;if(l||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Qc(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Qc(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function cv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Rr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function lv(i,e,t,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let S=0,v=M.length;S<v;S+=3){const w=M[S+0],b=M[S+1],A=M[S+2];f.push(w,b,b,A,A,w)}}else if(g!==void 0){const M=g.array;_=g.version;for(let S=0,v=M.length/3-1;S<v;S+=3){const w=S+0,b=S+1,A=S+2;f.push(w,b,b,A,A,w)}}else return;const p=new(uf(f)?gf:mf)(f,1);p.version=_;const m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function hv(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];t.update(p,n,1)}function u(f,d,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)l(f[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let m=0;for(let M=0;M<g;M++)m+=d[M]*_[M];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function uv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function fv(i,e,t){const n=new WeakMap,s=new dt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let x=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let w=a.attributes.position.count*v,b=1;w>e.maxTextureSize&&(b=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const A=new Float32Array(w*b*4*u),P=new ff(A,w,b,u);P.type=Xn,P.needsUpdate=!0;const E=v*4;for(let D=0;D<u;D++){const I=m[D],H=M[D],q=S[D],V=w*b*4*D;for(let k=0;k<I.count;k++){const J=k*E;g===!0&&(s.fromBufferAttribute(I,k),A[V+J+0]=s.x,A[V+J+1]=s.y,A[V+J+2]=s.z,A[V+J+3]=0),_===!0&&(s.fromBufferAttribute(H,k),A[V+J+4]=s.x,A[V+J+5]=s.y,A[V+J+6]=s.z,A[V+J+7]=0),p===!0&&(s.fromBufferAttribute(q,k),A[V+J+8]=s.x,A[V+J+9]=s.y,A[V+J+10]=s.z,A[V+J+11]=q.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new ce(w,b)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function dv(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Bf=new en,Zh=new Mf(1,1),kf=new ff,Hf=new rm,Gf=new xf,Kh=[],Jh=[],Qh=new Float32Array(16),eu=new Float32Array(9),tu=new Float32Array(4);function Xs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Kh[s];if(r===void 0&&(r=new Float32Array(s),Kh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ca(i,e){let t=Jh[e];t===void 0&&(t=new Int32Array(e),Jh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function _v(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function vv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;tu.set(n),i.uniformMatrix2fv(this.addr,!1,tu),kt(t,n)}}function xv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;eu.set(n),i.uniformMatrix3fv(this.addr,!1,eu),kt(t,n)}}function yv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,n))return;Qh.set(n),i.uniformMatrix4fv(this.addr,!1,Qh),kt(t,n)}}function Sv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Mv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function Ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function Tv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function bv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Cv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function wv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function Av(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function Rv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zh.compareFunction=hf,r=Zh):r=Bf,t.setTexture2D(e||r,s)}function Pv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Hf,s)}function Dv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Gf,s)}function Lv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||kf,s)}function Iv(i){switch(i){case 5126:return pv;case 35664:return mv;case 35665:return gv;case 35666:return _v;case 35674:return vv;case 35675:return xv;case 35676:return yv;case 5124:case 35670:return Sv;case 35667:case 35671:return Mv;case 35668:case 35672:return Ev;case 35669:case 35673:return Tv;case 5125:return bv;case 36294:return Cv;case 36295:return wv;case 36296:return Av;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Lv}}function Uv(i,e){i.uniform1fv(this.addr,e)}function Nv(i,e){const t=Xs(e,this.size,2);i.uniform2fv(this.addr,t)}function Fv(i,e){const t=Xs(e,this.size,3);i.uniform3fv(this.addr,t)}function Ov(i,e){const t=Xs(e,this.size,4);i.uniform4fv(this.addr,t)}function zv(i,e){const t=Xs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Bv(i,e){const t=Xs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function kv(i,e){const t=Xs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Hv(i,e){i.uniform1iv(this.addr,e)}function Gv(i,e){i.uniform2iv(this.addr,e)}function Vv(i,e){i.uniform3iv(this.addr,e)}function Wv(i,e){i.uniform4iv(this.addr,e)}function Xv(i,e){i.uniform1uiv(this.addr,e)}function $v(i,e){i.uniform2uiv(this.addr,e)}function Yv(i,e){i.uniform3uiv(this.addr,e)}function qv(i,e){i.uniform4uiv(this.addr,e)}function jv(i,e,t){const n=this.cache,s=e.length,r=ca(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Bf,r[o])}function Zv(i,e,t){const n=this.cache,s=e.length,r=ca(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Hf,r[o])}function Kv(i,e,t){const n=this.cache,s=e.length,r=ca(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Gf,r[o])}function Jv(i,e,t){const n=this.cache,s=e.length,r=ca(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||kf,r[o])}function Qv(i){switch(i){case 5126:return Uv;case 35664:return Nv;case 35665:return Fv;case 35666:return Ov;case 35674:return zv;case 35675:return Bv;case 35676:return kv;case 5124:case 35670:return Hv;case 35667:case 35671:return Gv;case 35668:case 35672:return Vv;case 35669:case 35673:return Wv;case 5125:return Xv;case 36294:return $v;case 36295:return Yv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return Zv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Jv}}class ex{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Iv(t.type)}}class tx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qv(t.type)}}class nx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Za=/(\w+)(\])?(\[|\.)?/g;function nu(i,e){i.seq.push(e),i.map[e.id]=e}function ix(i,e,t){const n=i.name,s=n.length;for(Za.lastIndex=0;;){const r=Za.exec(n),o=Za.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){nu(t,l===void 0?new ex(a,i,e):new tx(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new nx(a),nu(t,u)),t=u}}}class Do{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);ix(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function iu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const sx=37297;let rx=0;function ox(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const su=new Qe;function ax(i){ct._getMatrix(su,ct.workingColorSpace,i);const e=`mat3( ${su.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case Go:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ru(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+ox(i.getShaderSource(e),a)}else return r}function cx(i,e){const t=ax(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function lx(i,e){let t;switch(e){case ju:t="Linear";break;case Zu:t="Reinhard";break;case Ku:t="Cineon";break;case xl:t="ACESFilmic";break;case Qu:t="AgX";break;case ef:t="Neutral";break;case Ju:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _o=new R;function hx(){ct.getLuminanceCoefficients(_o);const i=_o.x.toFixed(4),e=_o.y.toFixed(4),t=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ux(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function fx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ar(i){return i!==""}function ou(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function au(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const px=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(i){return i.replace(px,gx)}const mx=new Map;function gx(i,e){let t=et[e];if(t===void 0){const n=mx.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return el(t)}const _x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cu(i){return i.replace(_x,vx)}function vx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lu(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===_l?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function yx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fs:case Os:e="ENVMAP_TYPE_CUBE";break;case sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function Mx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vl:e="ENVMAP_BLENDING_MULTIPLY";break;case Ep:e="ENVMAP_BLENDING_MIX";break;case Tp:e="ENVMAP_BLENDING_ADD";break}return e}function Ex(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Tx(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=xx(t),l=yx(t),h=Sx(t),u=Mx(t),f=Ex(t),d=ux(t),g=fx(r),_=s.createProgram();let p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ar).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ar).join(`
`),m.length>0&&(m+=`
`)):(p=[lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),m=[lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?et.tonemapping_pars_fragment:"",t.toneMapping!==yi?lx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,cx("linearToOutputTexel",t.outputColorSpace),hx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ar).join(`
`)),o=el(o),o=ou(o,t),o=au(o,t),a=el(a),a=ou(a,t),a=au(a,t),o=cu(o),a=cu(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=M+p+o,v=M+m+a,w=iu(s,s.VERTEX_SHADER,S),b=iu(s,s.FRAGMENT_SHADER,v);s.attachShader(_,w),s.attachShader(_,b),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(D){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(w)||"",q=s.getShaderInfoLog(b)||"",V=I.trim(),k=H.trim(),J=q.trim();let $=!0,pe=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,b);else{const Z=ru(s,w,"vertex"),re=ru(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+Z+`
`+re)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(k===""||J==="")&&(pe=!1);pe&&(D.diagnostics={runnable:$,programLog:V,vertexShader:{log:k,prefix:p},fragmentShader:{log:J,prefix:m}})}s.deleteShader(w),s.deleteShader(b),P=new Do(s,_),E=dx(s,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,sx)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=b,this}let bx=0;class Cx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new wx(e),t.set(e,n)),n}}class wx{constructor(e){this.id=bx++,this.code=e,this.usedTimes=0}}function Ax(i,e,t,n,s,r,o){const a=new df,c=new Cx,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function p(E,x,D,I,H){const q=I.fog,V=H.geometry,k=E.isMeshStandardMaterial?I.environment:null,J=(E.isMeshStandardMaterial?t:e).get(E.envMap||k),$=J&&J.mapping===sa?J.image.height:null,pe=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const Z=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,re=Z!==void 0?Z.length:0;let ge=0;V.morphAttributes.position!==void 0&&(ge=1),V.morphAttributes.normal!==void 0&&(ge=2),V.morphAttributes.color!==void 0&&(ge=3);let Ee,ze,Ye,K;if(pe){const ft=Gn[pe];Ee=ft.vertexShader,ze=ft.fragmentShader}else Ee=E.vertexShader,ze=E.fragmentShader,c.update(E),Ye=c.getVertexShaderID(E),K=c.getFragmentShaderID(E);const te=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Te=H.isInstancedMesh===!0,Ce=H.isBatchedMesh===!0,He=!!E.map,it=!!E.matcap,L=!!J,oe=!!E.aoMap,ne=!!E.lightMap,Q=!!E.bumpMap,ee=!!E.normalMap,W=!!E.displacementMap,N=!!E.emissiveMap,ie=!!E.metalnessMap,Le=!!E.roughnessMap,Ne=E.anisotropy>0,C=E.clearcoat>0,y=E.dispersion>0,O=E.iridescence>0,X=E.sheen>0,z=E.transmission>0,G=Ne&&!!E.anisotropyMap,ve=C&&!!E.clearcoatMap,ae=C&&!!E.clearcoatNormalMap,be=C&&!!E.clearcoatRoughnessMap,Pe=O&&!!E.iridescenceMap,he=O&&!!E.iridescenceThicknessMap,Me=X&&!!E.sheenColorMap,We=X&&!!E.sheenRoughnessMap,Oe=!!E.specularMap,ye=!!E.specularColorMap,Je=!!E.specularIntensityMap,U=z&&!!E.transmissionMap,de=z&&!!E.thicknessMap,me=!!E.gradientMap,Ae=!!E.alphaMap,ue=E.alphaTest>0,se=!!E.alphaHash,Ie=!!E.extensions;let je=yi;E.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(je=i.toneMapping);const St={shaderID:pe,shaderType:E.type,shaderName:E.name,vertexShader:Ee,fragmentShader:ze,defines:E.defines,customVertexShaderID:Ye,customFragmentShaderID:K,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Ce,batchingColor:Ce&&H._colorsTexture!==null,instancing:Te,instancingColor:Te&&H.instanceColor!==null,instancingMorph:Te&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:zs,alphaToCoverage:!!E.alphaToCoverage,map:He,matcap:it,envMap:L,envMapMode:L&&J.mapping,envMapCubeUVHeight:$,aoMap:oe,lightMap:ne,bumpMap:Q,normalMap:ee,displacementMap:f&&W,emissiveMap:N,normalMapObjectSpace:ee&&E.normalMapType===Ap,normalMapTangentSpace:ee&&E.normalMapType===wl,metalnessMap:ie,roughnessMap:Le,anisotropy:Ne,anisotropyMap:G,clearcoat:C,clearcoatMap:ve,clearcoatNormalMap:ae,clearcoatRoughnessMap:be,dispersion:y,iridescence:O,iridescenceMap:Pe,iridescenceThicknessMap:he,sheen:X,sheenColorMap:Me,sheenRoughnessMap:We,specularMap:Oe,specularColorMap:ye,specularIntensityMap:Je,transmission:z,transmissionMap:U,thicknessMap:de,gradientMap:me,opaque:E.transparent===!1&&E.blending===Rs&&E.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ue,alphaHash:se,combine:E.combine,mapUv:He&&_(E.map.channel),aoMapUv:oe&&_(E.aoMap.channel),lightMapUv:ne&&_(E.lightMap.channel),bumpMapUv:Q&&_(E.bumpMap.channel),normalMapUv:ee&&_(E.normalMap.channel),displacementMapUv:W&&_(E.displacementMap.channel),emissiveMapUv:N&&_(E.emissiveMap.channel),metalnessMapUv:ie&&_(E.metalnessMap.channel),roughnessMapUv:Le&&_(E.roughnessMap.channel),anisotropyMapUv:G&&_(E.anisotropyMap.channel),clearcoatMapUv:ve&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:he&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:We&&_(E.sheenRoughnessMap.channel),specularMapUv:Oe&&_(E.specularMap.channel),specularColorMapUv:ye&&_(E.specularColorMap.channel),specularIntensityMapUv:Je&&_(E.specularIntensityMap.channel),transmissionMapUv:U&&_(E.transmissionMap.channel),thicknessMapUv:de&&_(E.thicknessMap.channel),alphaMapUv:Ae&&_(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ee||Ne),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!V.attributes.uv&&(He||Ae),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:H.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ge,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:je,decodeVideoTexture:He&&E.map.isVideoTexture===!0&&ct.getTransfer(E.map.colorSpace)===_t,decodeVideoTextureEmissive:N&&E.emissiveMap.isVideoTexture===!0&&ct.getTransfer(E.emissiveMap.colorSpace)===_t,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===$t,flipSided:E.side===qt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ie&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&E.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function m(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)x.push(D),x.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(M(x,E),S(x,E),x.push(i.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function M(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function S(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const x=g[E.type];let D;if(x){const I=Gn[x];D=ks.clone(I.uniforms)}else D=E.uniforms;return D}function w(E,x){let D;for(let I=0,H=h.length;I<H;I++){const q=h[I];if(q.cacheKey===x){D=q,++D.usedTimes;break}}return D===void 0&&(D=new Tx(i,x,E,r),h.push(D)),D}function b(E){if(--E.usedTimes===0){const x=h.indexOf(E);h[x]=h[h.length-1],h.pop(),E.destroy()}}function A(E){c.remove(E)}function P(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:w,releaseProgram:b,releaseShaderCache:A,programs:h,dispose:P}}function Rx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Px(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function hu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function uu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,g,_,p){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),e++,m}function a(u,f,d,g,_,p){const m=o(u,f,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):t.push(m)}function c(u,f,d,g,_,p){const m=o(u,f,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function l(u,f){t.length>1&&t.sort(u||Px),n.length>1&&n.sort(f||hu),s.length>1&&s.sort(f||hu)}function h(){for(let u=e,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Dx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new uu,i.set(n,[o])):s>=r.length?(o=new uu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Lx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ve};break;case"SpotLight":t={position:new R,direction:new R,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Ix(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ux=0;function Nx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Fx(i){const e=new Lx,t=Ix(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new mt,o=new mt;function a(l){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,M=0,S=0,v=0,w=0,b=0,A=0;l.sort(Nx);for(let E=0,x=l.length;E<x;E++){const D=l[E],I=D.color,H=D.intensity,q=D.distance,V=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=I.r*H,u+=I.g*H,f+=I.b*H;else if(D.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(D.sh.coefficients[k],H);A++}else if(D.isDirectionalLight){const k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,$=t.get(D);$.shadowIntensity=J.intensity,$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,n.directionalShadow[d]=$,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=D.shadow.matrix,M++}n.directional[d]=k,d++}else if(D.isSpotLight){const k=e.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(I).multiplyScalar(H),k.distance=q,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,n.spot[_]=k;const J=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,J.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[_]=J.matrix,D.castShadow){const $=t.get(D);$.shadowIntensity=J.intensity,$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=V,v++}_++}else if(D.isRectAreaLight){const k=e.get(D);k.color.copy(I).multiplyScalar(H),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=k,p++}else if(D.isPointLight){const k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),k.distance=D.distance,k.decay=D.decay,D.castShadow){const J=D.shadow,$=t.get(D);$.shadowIntensity=J.intensity,$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,$.shadowCameraNear=J.camera.near,$.shadowCameraFar=J.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=D.shadow.matrix,S++}n.point[g]=k,g++}else if(D.isHemisphereLight){const k=e.get(D);k.skyColor.copy(D.color).multiplyScalar(H),k.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[m]=k,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==M||P.numPointShadows!==S||P.numSpotShadows!==v||P.numSpotMaps!==w||P.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+w-b,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=M,P.numPointShadows=S,P.numSpotShadows=v,P.numSpotMaps=w,P.numLightProbes=A,n.version=Ux++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,M=l.length;m<M;m++){const S=l[m];if(S.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),u++}else if(S.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function fu(i){const e=new Fx(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Ox(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new fu(i),e.set(s,[a])):r>=o.length?(a=new fu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const zx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kx(i,e,t){let n=new Dl;const s=new ce,r=new ce,o=new dt,a=new l0({depthPacking:wp}),c=new h0,l={},h=t.maxTextureSize,u={[Ei]:qt,[qt]:Ei,[$t]:$t},f=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:zx,fragmentShader:Bx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new le(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gl;let m=this.type;this.render=function(b,A,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const E=i.getRenderTarget(),x=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),I=i.state;I.setBlending(oi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const H=m!==ii&&this.type===ii,q=m===ii&&this.type!==ii;for(let V=0,k=b.length;V<k;V++){const J=b[V],$=J.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const pe=$.getFrameExtents();if(s.multiply(pe),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pe.x),s.x=r.x*pe.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pe.y),s.y=r.y*pe.y,$.mapSize.y=r.y)),$.map===null||H===!0||q===!0){const re=this.type!==ii?{minFilter:yn,magFilter:yn}:{};$.map!==null&&$.map.dispose(),$.map=new wn(s.x,s.y,re),$.map.texture.name=J.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const Z=$.getViewportCount();for(let re=0;re<Z;re++){const ge=$.getViewport(re);o.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),I.viewport(o),$.updateMatrices(J,re),n=$.getFrustum(),v(A,P,$.camera,J,this.type)}$.isPointLightShadow!==!0&&this.type===ii&&M($,P),$.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(E,x,D)};function M(b,A){const P=e.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new wn(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,P,f,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,P,d,_,null)}function S(b,A,P,E){let x=null;const D=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)x=D;else if(x=P.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=x.uuid,H=A.uuid;let q=l[I];q===void 0&&(q={},l[I]=q);let V=q[H];V===void 0&&(V=x.clone(),q[H]=V,A.addEventListener("dispose",w)),x=V}if(x.visible=A.visible,x.wireframe=A.wireframe,E===ii?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:u[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=i.properties.get(x);I.light=P}return x}function v(b,A,P,E,x){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===ii)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const H=e.update(b),q=b.material;if(Array.isArray(q)){const V=H.groups;for(let k=0,J=V.length;k<J;k++){const $=V[k],pe=q[$.materialIndex];if(pe&&pe.visible){const Z=S(b,pe,E,x);b.onBeforeShadow(i,b,A,P,H,Z,$),i.renderBufferDirect(P,null,H,Z,b,$),b.onAfterShadow(i,b,A,P,H,Z,$)}}}else if(q.visible){const V=S(b,q,E,x);b.onBeforeShadow(i,b,A,P,H,V,null),i.renderBufferDirect(P,null,H,V,b,null),b.onAfterShadow(i,b,A,P,H,V,null)}}const I=b.children;for(let H=0,q=I.length;H<q;H++)v(I[H],A,P,E,x)}function w(b){b.target.removeEventListener("dispose",w);for(const P in l){const E=l[P],x=b.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const Hx={[uc]:fc,[dc]:gc,[pc]:_c,[Ns]:mc,[fc]:uc,[gc]:dc,[_c]:pc,[mc]:Ns};function Gx(i,e){function t(){let U=!1;const de=new dt;let me=null;const Ae=new dt(0,0,0,0);return{setMask:function(ue){me!==ue&&!U&&(i.colorMask(ue,ue,ue,ue),me=ue)},setLocked:function(ue){U=ue},setClear:function(ue,se,Ie,je,St){St===!0&&(ue*=je,se*=je,Ie*=je),de.set(ue,se,Ie,je),Ae.equals(de)===!1&&(i.clearColor(ue,se,Ie,je),Ae.copy(de))},reset:function(){U=!1,me=null,Ae.set(-1,0,0,0)}}}function n(){let U=!1,de=!1,me=null,Ae=null,ue=null;return{setReversed:function(se){if(de!==se){const Ie=e.get("EXT_clip_control");se?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),de=se;const je=ue;ue=null,this.setClear(je)}},getReversed:function(){return de},setTest:function(se){se?te(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(se){me!==se&&!U&&(i.depthMask(se),me=se)},setFunc:function(se){if(de&&(se=Hx[se]),Ae!==se){switch(se){case uc:i.depthFunc(i.NEVER);break;case fc:i.depthFunc(i.ALWAYS);break;case dc:i.depthFunc(i.LESS);break;case Ns:i.depthFunc(i.LEQUAL);break;case pc:i.depthFunc(i.EQUAL);break;case mc:i.depthFunc(i.GEQUAL);break;case gc:i.depthFunc(i.GREATER);break;case _c:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=se}},setLocked:function(se){U=se},setClear:function(se){ue!==se&&(de&&(se=1-se),i.clearDepth(se),ue=se)},reset:function(){U=!1,me=null,Ae=null,ue=null,de=!1}}}function s(){let U=!1,de=null,me=null,Ae=null,ue=null,se=null,Ie=null,je=null,St=null;return{setTest:function(ft){U||(ft?te(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(ft){de!==ft&&!U&&(i.stencilMask(ft),de=ft)},setFunc:function(ft,Kn,Hn){(me!==ft||Ae!==Kn||ue!==Hn)&&(i.stencilFunc(ft,Kn,Hn),me=ft,Ae=Kn,ue=Hn)},setOp:function(ft,Kn,Hn){(se!==ft||Ie!==Kn||je!==Hn)&&(i.stencilOp(ft,Kn,Hn),se=ft,Ie=Kn,je=Hn)},setLocked:function(ft){U=ft},setClear:function(ft){St!==ft&&(i.clearStencil(ft),St=ft)},reset:function(){U=!1,de=null,me=null,Ae=null,ue=null,se=null,Ie=null,je=null,St=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,p=null,m=null,M=null,S=null,v=null,w=null,b=null,A=new Ve(0,0,0),P=0,E=!1,x=null,D=null,I=null,H=null,q=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,J=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec($)[1]),k=J>=1):$.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),k=J>=2);let pe=null,Z={};const re=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Ee=new dt().fromArray(re),ze=new dt().fromArray(ge);function Ye(U,de,me,Ae){const ue=new Uint8Array(4),se=i.createTexture();i.bindTexture(U,se),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<me;Ie++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(de+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return se}const K={};K[i.TEXTURE_2D]=Ye(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(i.DEPTH_TEST),o.setFunc(Ns),Q(!1),ee(th),te(i.CULL_FACE),oe(oi);function te(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function xe(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Te(U,de){return u[U]!==de?(i.bindFramebuffer(U,de),u[U]=de,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=de),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Ce(U,de){let me=d,Ae=!1;if(U){me=f.get(de),me===void 0&&(me=[],f.set(de,me));const ue=U.textures;if(me.length!==ue.length||me[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Ie=ue.length;se<Ie;se++)me[se]=i.COLOR_ATTACHMENT0+se;me.length=ue.length,Ae=!0}}else me[0]!==i.BACK&&(me[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(me)}function He(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const it={[Ni]:i.FUNC_ADD,[op]:i.FUNC_SUBTRACT,[ap]:i.FUNC_REVERSE_SUBTRACT};it[cp]=i.MIN,it[lp]=i.MAX;const L={[hp]:i.ZERO,[up]:i.ONE,[fp]:i.SRC_COLOR,[lc]:i.SRC_ALPHA,[vp]:i.SRC_ALPHA_SATURATE,[gp]:i.DST_COLOR,[pp]:i.DST_ALPHA,[dp]:i.ONE_MINUS_SRC_COLOR,[hc]:i.ONE_MINUS_SRC_ALPHA,[_p]:i.ONE_MINUS_DST_COLOR,[mp]:i.ONE_MINUS_DST_ALPHA,[xp]:i.CONSTANT_COLOR,[yp]:i.ONE_MINUS_CONSTANT_COLOR,[Sp]:i.CONSTANT_ALPHA,[Mp]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(U,de,me,Ae,ue,se,Ie,je,St,ft){if(U===oi){_===!0&&(xe(i.BLEND),_=!1);return}if(_===!1&&(te(i.BLEND),_=!0),U!==rp){if(U!==p||ft!==E){if((m!==Ni||v!==Ni)&&(i.blendEquation(i.FUNC_ADD),m=Ni,v=Ni),ft)switch(U){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Us:i.blendFunc(i.ONE,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ih:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,S=null,w=null,b=null,A.set(0,0,0),P=0,p=U,E=ft}return}ue=ue||de,se=se||me,Ie=Ie||Ae,(de!==m||ue!==v)&&(i.blendEquationSeparate(it[de],it[ue]),m=de,v=ue),(me!==M||Ae!==S||se!==w||Ie!==b)&&(i.blendFuncSeparate(L[me],L[Ae],L[se],L[Ie]),M=me,S=Ae,w=se,b=Ie),(je.equals(A)===!1||St!==P)&&(i.blendColor(je.r,je.g,je.b,St),A.copy(je),P=St),p=U,E=!1}function ne(U,de){U.side===$t?xe(i.CULL_FACE):te(i.CULL_FACE);let me=U.side===qt;de&&(me=!me),Q(me),U.blending===Rs&&U.transparent===!1?oe(oi):oe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const Ae=U.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),N(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(U){x!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),x=U)}function ee(U){U!==np?(te(i.CULL_FACE),U!==D&&(U===th?i.cullFace(i.BACK):U===ip?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),D=U}function W(U){U!==I&&(k&&i.lineWidth(U),I=U)}function N(U,de,me){U?(te(i.POLYGON_OFFSET_FILL),(H!==de||q!==me)&&(i.polygonOffset(de,me),H=de,q=me)):xe(i.POLYGON_OFFSET_FILL)}function ie(U){U?te(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function Le(U){U===void 0&&(U=i.TEXTURE0+V-1),pe!==U&&(i.activeTexture(U),pe=U)}function Ne(U,de,me){me===void 0&&(pe===null?me=i.TEXTURE0+V-1:me=pe);let Ae=Z[me];Ae===void 0&&(Ae={type:void 0,texture:void 0},Z[me]=Ae),(Ae.type!==U||Ae.texture!==de)&&(pe!==me&&(i.activeTexture(me),pe=me),i.bindTexture(U,de||K[U]),Ae.type=U,Ae.texture=de)}function C(){const U=Z[pe];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(U){Ee.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ee.copy(U))}function We(U){ze.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ze.copy(U))}function Oe(U,de){let me=l.get(de);me===void 0&&(me=new WeakMap,l.set(de,me));let Ae=me.get(U);Ae===void 0&&(Ae=i.getUniformBlockIndex(de,U.name),me.set(U,Ae))}function ye(U,de){const Ae=l.get(de).get(U);c.get(de)!==Ae&&(i.uniformBlockBinding(de,Ae,U.__bindingPointIndex),c.set(de,Ae))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},pe=null,Z={},u={},f=new WeakMap,d=[],g=null,_=!1,p=null,m=null,M=null,S=null,v=null,w=null,b=null,A=new Ve(0,0,0),P=0,E=!1,x=null,D=null,I=null,H=null,q=null,Ee.set(0,0,i.canvas.width,i.canvas.height),ze.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:xe,bindFramebuffer:Te,drawBuffers:Ce,useProgram:He,setBlending:oe,setMaterial:ne,setFlipSided:Q,setCullFace:ee,setLineWidth:W,setPolygonOffset:N,setScissorTest:ie,activeTexture:Le,bindTexture:Ne,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:O,texImage2D:Pe,texImage3D:he,updateUBOMapping:Oe,uniformBlockBinding:ye,texStorage2D:ae,texStorage3D:be,texSubImage2D:X,texSubImage3D:z,compressedTexSubImage2D:G,compressedTexSubImage3D:ve,scissor:Me,viewport:We,reset:Je}}function Vx(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return d?new OffscreenCanvas(C,y):Wo("canvas")}function _(C,y,O){let X=1;const z=Ne(C);if((z.width>O||z.height>O)&&(X=O/Math.max(z.width,z.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const G=Math.floor(X*z.width),ve=Math.floor(X*z.height);u===void 0&&(u=g(G,ve));const ae=y?g(G,ve):u;return ae.width=G,ae.height=ve,ae.getContext("2d").drawImage(C,0,0,G,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+G+"x"+ve+")."),ae}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),C;return C}function p(C){return C.generateMipmaps}function m(C){i.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(C,y,O,X,z=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let G=y;if(y===i.RED&&(O===i.FLOAT&&(G=i.R32F),O===i.HALF_FLOAT&&(G=i.R16F),O===i.UNSIGNED_BYTE&&(G=i.R8)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(G=i.R8UI),O===i.UNSIGNED_SHORT&&(G=i.R16UI),O===i.UNSIGNED_INT&&(G=i.R32UI),O===i.BYTE&&(G=i.R8I),O===i.SHORT&&(G=i.R16I),O===i.INT&&(G=i.R32I)),y===i.RG&&(O===i.FLOAT&&(G=i.RG32F),O===i.HALF_FLOAT&&(G=i.RG16F),O===i.UNSIGNED_BYTE&&(G=i.RG8)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(G=i.RG8UI),O===i.UNSIGNED_SHORT&&(G=i.RG16UI),O===i.UNSIGNED_INT&&(G=i.RG32UI),O===i.BYTE&&(G=i.RG8I),O===i.SHORT&&(G=i.RG16I),O===i.INT&&(G=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(G=i.RGB8UI),O===i.UNSIGNED_SHORT&&(G=i.RGB16UI),O===i.UNSIGNED_INT&&(G=i.RGB32UI),O===i.BYTE&&(G=i.RGB8I),O===i.SHORT&&(G=i.RGB16I),O===i.INT&&(G=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),O===i.UNSIGNED_INT&&(G=i.RGBA32UI),O===i.BYTE&&(G=i.RGBA8I),O===i.SHORT&&(G=i.RGBA16I),O===i.INT&&(G=i.RGBA32I)),y===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),y===i.RGBA){const ve=z?Go:ct.getTransfer(X);O===i.FLOAT&&(G=i.RGBA32F),O===i.HALF_FLOAT&&(G=i.RGBA16F),O===i.UNSIGNED_BYTE&&(G=ve===_t?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function v(C,y){let O;return C?y===null||y===$i||y===br?O=i.DEPTH24_STENCIL8:y===Xn?O=i.DEPTH32F_STENCIL8:y===Tr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===$i||y===br?O=i.DEPTH_COMPONENT24:y===Xn?O=i.DEPTH_COMPONENT32F:y===Tr&&(O=i.DEPTH_COMPONENT16),O}function w(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==yn&&C.minFilter!==Wn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function b(C){const y=C.target;y.removeEventListener("dispose",b),P(y),y.isVideoTexture&&h.delete(y)}function A(C){const y=C.target;y.removeEventListener("dispose",A),x(y)}function P(C){const y=n.get(C);if(y.__webglInit===void 0)return;const O=C.source,X=f.get(O);if(X){const z=X[y.__cacheKey];z.usedTimes--,z.usedTimes===0&&E(C),Object.keys(X).length===0&&f.delete(O)}n.remove(C)}function E(C){const y=n.get(C);i.deleteTexture(y.__webglTexture);const O=C.source,X=f.get(O);delete X[y.__cacheKey],o.memory.textures--}function x(C){const y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let z=0;z<y.__webglFramebuffer[X].length;z++)i.deleteFramebuffer(y.__webglFramebuffer[X][z]);else i.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)i.deleteFramebuffer(y.__webglFramebuffer[X]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=C.textures;for(let X=0,z=O.length;X<z;X++){const G=n.get(O[X]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),o.memory.textures--),n.remove(O[X])}n.remove(C)}let D=0;function I(){D=0}function H(){const C=D;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function q(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function V(C,y){const O=n.get(C);if(C.isVideoTexture&&ie(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const X=C.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(O,C,y);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function k(C,y){const O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){K(O,C,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function J(C,y){const O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){K(O,C,y);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function $(C,y){const O=n.get(C);if(C.version>0&&O.__version!==C.version){te(O,C,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}const pe={[Xi]:i.REPEAT,[ki]:i.CLAMP_TO_EDGE,[yc]:i.MIRRORED_REPEAT},Z={[yn]:i.NEAREST,[bp]:i.NEAREST_MIPMAP_NEAREST,[Gr]:i.NEAREST_MIPMAP_LINEAR,[Wn]:i.LINEAR,[ga]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},re={[Rp]:i.NEVER,[Np]:i.ALWAYS,[Pp]:i.LESS,[hf]:i.LEQUAL,[Dp]:i.EQUAL,[Up]:i.GEQUAL,[Lp]:i.GREATER,[Ip]:i.NOTEQUAL};function ge(C,y){if(y.type===Xn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Wn||y.magFilter===ga||y.magFilter===Gr||y.magFilter===Hi||y.minFilter===Wn||y.minFilter===ga||y.minFilter===Gr||y.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,pe[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,pe[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,pe[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Z[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Z[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,re[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===yn||y.minFilter!==Gr&&y.minFilter!==Hi||y.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ee(C,y){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",b));const X=y.source;let z=f.get(X);z===void 0&&(z={},f.set(X,z));const G=q(y);if(G!==C.__cacheKey){z[G]===void 0&&(z[G]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),z[G].usedTimes++;const ve=z[C.__cacheKey];ve!==void 0&&(z[C.__cacheKey].usedTimes--,ve.usedTimes===0&&E(y)),C.__cacheKey=G,C.__webglTexture=z[G].texture}return O}function ze(C,y,O){return Math.floor(Math.floor(C/O)/y)}function Ye(C,y,O,X){const G=C.updateRanges;if(G.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,O,X,y.data);else{G.sort((he,Me)=>he.start-Me.start);let ve=0;for(let he=1;he<G.length;he++){const Me=G[ve],We=G[he],Oe=Me.start+Me.count,ye=ze(We.start,y.width,4),Je=ze(Me.start,y.width,4);We.start<=Oe+1&&ye===Je&&ze(We.start+We.count-1,y.width,4)===ye?Me.count=Math.max(Me.count,We.start+We.count-Me.start):(++ve,G[ve]=We)}G.length=ve+1;const ae=i.getParameter(i.UNPACK_ROW_LENGTH),be=i.getParameter(i.UNPACK_SKIP_PIXELS),Pe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let he=0,Me=G.length;he<Me;he++){const We=G[he],Oe=Math.floor(We.start/4),ye=Math.ceil(We.count/4),Je=Oe%y.width,U=Math.floor(Oe/y.width),de=ye,me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Je),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Je,U,de,me,O,X,y.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ae),i.pixelStorei(i.UNPACK_SKIP_PIXELS,be),i.pixelStorei(i.UNPACK_SKIP_ROWS,Pe)}}function K(C,y,O){let X=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=i.TEXTURE_3D);const z=Ee(C,y),G=y.source;t.bindTexture(X,C.__webglTexture,i.TEXTURE0+O);const ve=n.get(G);if(G.version!==ve.__version||z===!0){t.activeTexture(i.TEXTURE0+O);const ae=ct.getPrimaries(ct.workingColorSpace),be=y.colorSpace===_i?null:ct.getPrimaries(y.colorSpace),Pe=y.colorSpace===_i||ae===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let he=_(y.image,!1,s.maxTextureSize);he=Le(y,he);const Me=r.convert(y.format,y.colorSpace),We=r.convert(y.type);let Oe=S(y.internalFormat,Me,We,y.colorSpace,y.isVideoTexture);ge(X,y);let ye;const Je=y.mipmaps,U=y.isVideoTexture!==!0,de=ve.__version===void 0||z===!0,me=G.dataReady,Ae=w(y,he);if(y.isDepthTexture)Oe=v(y.format===wr,y.type),de&&(U?t.texStorage2D(i.TEXTURE_2D,1,Oe,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,Oe,he.width,he.height,0,Me,We,null));else if(y.isDataTexture)if(Je.length>0){U&&de&&t.texStorage2D(i.TEXTURE_2D,Ae,Oe,Je[0].width,Je[0].height);for(let ue=0,se=Je.length;ue<se;ue++)ye=Je[ue],U?me&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ye.width,ye.height,Me,We,ye.data):t.texImage2D(i.TEXTURE_2D,ue,Oe,ye.width,ye.height,0,Me,We,ye.data);y.generateMipmaps=!1}else U?(de&&t.texStorage2D(i.TEXTURE_2D,Ae,Oe,he.width,he.height),me&&Ye(y,he,Me,We)):t.texImage2D(i.TEXTURE_2D,0,Oe,he.width,he.height,0,Me,We,he.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){U&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Oe,Je[0].width,Je[0].height,he.depth);for(let ue=0,se=Je.length;ue<se;ue++)if(ye=Je[ue],y.format!==On)if(Me!==null)if(U){if(me)if(y.layerUpdates.size>0){const Ie=Vh(ye.width,ye.height,y.format,y.type);for(const je of y.layerUpdates){const St=ye.data.subarray(je*Ie/ye.data.BYTES_PER_ELEMENT,(je+1)*Ie/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,je,ye.width,ye.height,1,Me,St)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,ye.width,ye.height,he.depth,Me,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,Oe,ye.width,ye.height,he.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,ye.width,ye.height,he.depth,Me,We,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,Oe,ye.width,ye.height,he.depth,0,Me,We,ye.data)}else{U&&de&&t.texStorage2D(i.TEXTURE_2D,Ae,Oe,Je[0].width,Je[0].height);for(let ue=0,se=Je.length;ue<se;ue++)ye=Je[ue],y.format!==On?Me!==null?U?me&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,ye.width,ye.height,Me,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,Oe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?me&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ye.width,ye.height,Me,We,ye.data):t.texImage2D(i.TEXTURE_2D,ue,Oe,ye.width,ye.height,0,Me,We,ye.data)}else if(y.isDataArrayTexture)if(U){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Oe,he.width,he.height,he.depth),me)if(y.layerUpdates.size>0){const ue=Vh(he.width,he.height,y.format,y.type);for(const se of y.layerUpdates){const Ie=he.data.subarray(se*ue/he.data.BYTES_PER_ELEMENT,(se+1)*ue/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,he.width,he.height,1,Me,We,Ie)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Me,We,he.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,he.width,he.height,he.depth,0,Me,We,he.data);else if(y.isData3DTexture)U?(de&&t.texStorage3D(i.TEXTURE_3D,Ae,Oe,he.width,he.height,he.depth),me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Me,We,he.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,he.width,he.height,he.depth,0,Me,We,he.data);else if(y.isFramebufferTexture){if(de)if(U)t.texStorage2D(i.TEXTURE_2D,Ae,Oe,he.width,he.height);else{let ue=he.width,se=he.height;for(let Ie=0;Ie<Ae;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Oe,ue,se,0,Me,We,null),ue>>=1,se>>=1}}else if(Je.length>0){if(U&&de){const ue=Ne(Je[0]);t.texStorage2D(i.TEXTURE_2D,Ae,Oe,ue.width,ue.height)}for(let ue=0,se=Je.length;ue<se;ue++)ye=Je[ue],U?me&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Me,We,ye):t.texImage2D(i.TEXTURE_2D,ue,Oe,Me,We,ye);y.generateMipmaps=!1}else if(U){if(de){const ue=Ne(he);t.texStorage2D(i.TEXTURE_2D,Ae,Oe,ue.width,ue.height)}me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,We,he)}else t.texImage2D(i.TEXTURE_2D,0,Oe,Me,We,he);p(y)&&m(X),ve.__version=G.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function te(C,y,O){if(y.image.length!==6)return;const X=Ee(C,y),z=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+O);const G=n.get(z);if(z.version!==G.__version||X===!0){t.activeTexture(i.TEXTURE0+O);const ve=ct.getPrimaries(ct.workingColorSpace),ae=y.colorSpace===_i?null:ct.getPrimaries(y.colorSpace),be=y.colorSpace===_i||ve===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Pe=y.isCompressedTexture||y.image[0].isCompressedTexture,he=y.image[0]&&y.image[0].isDataTexture,Me=[];for(let se=0;se<6;se++)!Pe&&!he?Me[se]=_(y.image[se],!0,s.maxCubemapSize):Me[se]=he?y.image[se].image:y.image[se],Me[se]=Le(y,Me[se]);const We=Me[0],Oe=r.convert(y.format,y.colorSpace),ye=r.convert(y.type),Je=S(y.internalFormat,Oe,ye,y.colorSpace),U=y.isVideoTexture!==!0,de=G.__version===void 0||X===!0,me=z.dataReady;let Ae=w(y,We);ge(i.TEXTURE_CUBE_MAP,y);let ue;if(Pe){U&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Je,We.width,We.height);for(let se=0;se<6;se++){ue=Me[se].mipmaps;for(let Ie=0;Ie<ue.length;Ie++){const je=ue[Ie];y.format!==On?Oe!==null?U?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,je.width,je.height,Oe,je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,Je,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,je.width,je.height,Oe,ye,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,Je,je.width,je.height,0,Oe,ye,je.data)}}}else{if(ue=y.mipmaps,U&&de){ue.length>0&&Ae++;const se=Ne(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Je,se.width,se.height)}for(let se=0;se<6;se++)if(he){U?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Me[se].width,Me[se].height,Oe,ye,Me[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Je,Me[se].width,Me[se].height,0,Oe,ye,Me[se].data);for(let Ie=0;Ie<ue.length;Ie++){const St=ue[Ie].image[se].image;U?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,St.width,St.height,Oe,ye,St.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,Je,St.width,St.height,0,Oe,ye,St.data)}}else{U?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Oe,ye,Me[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Je,Oe,ye,Me[se]);for(let Ie=0;Ie<ue.length;Ie++){const je=ue[Ie];U?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,Oe,ye,je.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,Je,Oe,ye,je.image[se])}}}p(y)&&m(i.TEXTURE_CUBE_MAP),G.__version=z.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function xe(C,y,O,X,z,G){const ve=r.convert(O.format,O.colorSpace),ae=r.convert(O.type),be=S(O.internalFormat,ve,ae,O.colorSpace),Pe=n.get(y),he=n.get(O);if(he.__renderTarget=y,!Pe.__hasExternalTextures){const Me=Math.max(1,y.width>>G),We=Math.max(1,y.height>>G);z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?t.texImage3D(z,G,be,Me,We,y.depth,0,ve,ae,null):t.texImage2D(z,G,be,Me,We,0,ve,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),N(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,z,he.__webglTexture,0,W(y)):(z===i.TEXTURE_2D||z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,z,he.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(C,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){const X=y.depthTexture,z=X&&X.isDepthTexture?X.type:null,G=v(y.stencilBuffer,z),ve=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=W(y);N(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,G,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,G,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,G,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,C)}else{const X=y.textures;for(let z=0;z<X.length;z++){const G=X[z],ve=r.convert(G.format,G.colorSpace),ae=r.convert(G.type),be=S(G.internalFormat,ve,ae,G.colorSpace),Pe=W(y);O&&N(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,be,y.width,y.height):N(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,be,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,be,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(y.depthTexture);X.__renderTarget=y,(!X.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V(y.depthTexture,0);const z=X.__webglTexture,G=W(y);if(y.depthTexture.format===Cr)N(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,z,0);else if(y.depthTexture.format===wr)N(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function He(C){const y=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){const z=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",z)};X.addEventListener("dispose",z),y.__depthDisposeCallback=z}y.__boundDepthTexture=X}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const X=C.texture.mipmaps;X&&X.length>0?Ce(y.__webglFramebuffer[0],C):Ce(y.__webglFramebuffer,C)}else if(O){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=i.createRenderbuffer(),Te(y.__webglDepthbuffer[X],C,!1);else{const z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=y.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,G)}}else{const X=C.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Te(y.__webglDepthbuffer,C,!1);else{const z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,G)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(C,y,O){const X=n.get(C);y!==void 0&&xe(X.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&He(C)}function L(C){const y=C.texture,O=n.get(C),X=n.get(y);C.addEventListener("dispose",A);const z=C.textures,G=C.isWebGLCubeRenderTarget===!0,ve=z.length>1;if(ve||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=y.version,o.memory.textures++),G){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let be=0;be<y.mipmaps.length;be++)O.__webglFramebuffer[ae][be]=i.createFramebuffer()}else O.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)O.__webglFramebuffer[ae]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ve)for(let ae=0,be=z.length;ae<be;ae++){const Pe=n.get(z[ae]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&N(C)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ae=0;ae<z.length;ae++){const be=z[ae];O.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ae]);const Pe=r.convert(be.format,be.colorSpace),he=r.convert(be.type),Me=S(be.internalFormat,Pe,he,be.colorSpace,C.isXRRenderTarget===!0),We=W(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,We,Me,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,O.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),ge(i.TEXTURE_CUBE_MAP,y);for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0)for(let be=0;be<y.mipmaps.length;be++)xe(O.__webglFramebuffer[ae][be],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,be);else xe(O.__webglFramebuffer[ae],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(y)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ae=0,be=z.length;ae<be;ae++){const Pe=z[ae],he=n.get(Pe);let Me=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Me=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,he.__webglTexture),ge(Me,Pe),xe(O.__webglFramebuffer,C,Pe,i.COLOR_ATTACHMENT0+ae,Me,0),p(Pe)&&m(Me)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,X.__webglTexture),ge(ae,y),y.mipmaps&&y.mipmaps.length>0)for(let be=0;be<y.mipmaps.length;be++)xe(O.__webglFramebuffer[be],C,y,i.COLOR_ATTACHMENT0,ae,be);else xe(O.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,ae,0);p(y)&&m(ae),t.unbindTexture()}C.depthBuffer&&He(C)}function oe(C){const y=C.textures;for(let O=0,X=y.length;O<X;O++){const z=y[O];if(p(z)){const G=M(C),ve=n.get(z).__webglTexture;t.bindTexture(G,ve),m(G),t.unbindTexture()}}}const ne=[],Q=[];function ee(C){if(C.samples>0){if(N(C)===!1){const y=C.textures,O=C.width,X=C.height;let z=i.COLOR_BUFFER_BIT;const G=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(C),ae=y.length>1;if(ae)for(let Pe=0;Pe<y.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const be=C.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Pe=0;Pe<y.length;Pe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(z|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(z|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Pe]);const he=n.get(y[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,O,X,0,0,O,X,z,i.NEAREST),c===!0&&(ne.length=0,Q.length=0,ne.push(i.COLOR_ATTACHMENT0+Pe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ne.push(G),Q.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let Pe=0;Pe<y.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Pe]);const he=n.get(y[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,he,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function W(C){return Math.min(s.maxSamples,C.samples)}function N(C){const y=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ie(C){const y=o.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function Le(C,y){const O=C.colorSpace,X=C.format,z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==zs&&O!==_i&&(ct.getTransfer(O)===_t?(X!==On||z!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Ne(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=I,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=J,this.setTextureCube=$,this.rebindTextures=it,this.setupRenderTarget=L,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=N}function Wx(i,e){function t(n,s=_i){let r;const o=ct.getTransfer(s);if(n===jn)return i.UNSIGNED_BYTE;if(n===Sl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===of)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===nf)return i.BYTE;if(n===sf)return i.SHORT;if(n===Tr)return i.UNSIGNED_SHORT;if(n===yl)return i.INT;if(n===$i)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===Yn)return i.HALF_FLOAT;if(n===af)return i.ALPHA;if(n===cf)return i.RGB;if(n===On)return i.RGBA;if(n===Cr)return i.DEPTH_COMPONENT;if(n===wr)return i.DEPTH_STENCIL;if(n===El)return i.RED;if(n===Tl)return i.RED_INTEGER;if(n===lf)return i.RG;if(n===bl)return i.RG_INTEGER;if(n===Cl)return i.RGBA_INTEGER;if(n===wo||n===Ao||n===Ro||n===Po)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sc||n===Mc||n===Ec||n===Tc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bc||n===Cc||n===wc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bc||n===Cc)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ac||n===Rc||n===Pc||n===Dc||n===Lc||n===Ic||n===Uc||n===Nc||n===Fc||n===Oc||n===zc||n===Bc||n===kc||n===Hc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ac)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ic)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hc)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gc||n===Vc||n===Wc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Gc)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xc||n===$c||n===Yc||n===qc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$c)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$x=`
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

}`;class Yx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ef(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xt({vertexShader:Xx,fragmentShader:$x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new le(new on(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qx extends Ws{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",p=new Yx,m={},M=t.getContextAttributes();let S=null,v=null;const w=[],b=[],A=new ce;let P=null;const E=new fn;E.viewport=new dt;const x=new fn;x.viewport=new dt;const D=[E,x],I=new p0;let H=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let te=w[K];return te===void 0&&(te=new Oa,w[K]=te),te.getTargetRaySpace()},this.getControllerGrip=function(K){let te=w[K];return te===void 0&&(te=new Oa,w[K]=te),te.getGripSpace()},this.getHand=function(K){let te=w[K];return te===void 0&&(te=new Oa,w[K]=te),te.getHandSpace()};function V(K){const te=b.indexOf(K.inputSource);if(te===-1)return;const xe=w[te];xe!==void 0&&(xe.update(K.inputSource,K.frame,l||o),xe.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",J);for(let K=0;K<w.length;K++){const te=b[K];te!==null&&(b[K]=null,w[K].disconnect(te))}H=null,q=null,p.reset();for(const K in m)delete m[K];e.setRenderTarget(S),d=null,f=null,u=null,s=null,v=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",k),s.addEventListener("inputsourceschange",J),M.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Te=null,Ce=null;M.depth&&(Ce=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=M.stencil?wr:Cr,Te=M.stencil?br:$i);const He={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(He),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new wn(f.textureWidth,f.textureHeight,{format:On,type:jn,depthTexture:new Mf(f.textureWidth,f.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const xe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new wn(d.framebufferWidth,d.framebufferHeight,{format:On,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function J(K){for(let te=0;te<K.removed.length;te++){const xe=K.removed[te],Te=b.indexOf(xe);Te>=0&&(b[Te]=null,w[Te].disconnect(xe))}for(let te=0;te<K.added.length;te++){const xe=K.added[te];let Te=b.indexOf(xe);if(Te===-1){for(let He=0;He<w.length;He++)if(He>=b.length){b.push(xe),Te=He;break}else if(b[He]===null){b[He]=xe,Te=He;break}if(Te===-1)break}const Ce=w[Te];Ce&&Ce.connect(xe)}}const $=new R,pe=new R;function Z(K,te,xe){$.setFromMatrixPosition(te.matrixWorld),pe.setFromMatrixPosition(xe.matrixWorld);const Te=$.distanceTo(pe),Ce=te.projectionMatrix.elements,He=xe.projectionMatrix.elements,it=Ce[14]/(Ce[10]-1),L=Ce[14]/(Ce[10]+1),oe=(Ce[9]+1)/Ce[5],ne=(Ce[9]-1)/Ce[5],Q=(Ce[8]-1)/Ce[0],ee=(He[8]+1)/He[0],W=it*Q,N=it*ee,ie=Te/(-Q+ee),Le=ie*-Q;if(te.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Le),K.translateZ(ie),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ce[10]===-1)K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Ne=it+ie,C=L+ie,y=W-Le,O=N+(Te-Le),X=oe*L/C*Ne,z=ne*L/C*Ne;K.projectionMatrix.makePerspective(y,O,X,z,Ne,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function re(K,te){te===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(te.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let te=K.near,xe=K.far;p.texture!==null&&(p.depthNear>0&&(te=p.depthNear),p.depthFar>0&&(xe=p.depthFar)),I.near=x.near=E.near=te,I.far=x.far=E.far=xe,(H!==I.near||q!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),H=I.near,q=I.far),I.layers.mask=K.layers.mask|6,E.layers.mask=I.layers.mask&3,x.layers.mask=I.layers.mask&5;const Te=K.parent,Ce=I.cameras;re(I,Te);for(let He=0;He<Ce.length;He++)re(Ce[He],Te);Ce.length===2?Z(I,E,x):I.projectionMatrix.copy(E.projectionMatrix),ge(K,I,Te)};function ge(K,te,xe){xe===null?K.matrix.copy(te.matrixWorld):(K.matrix.copy(xe.matrixWorld),K.matrix.invert(),K.matrix.multiply(te.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ar*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(K){return m[K]};let Ee=null;function ze(K,te){if(h=te.getViewerPose(l||o),g=te,h!==null){const xe=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Te=!1;xe.length!==I.cameras.length&&(I.cameras.length=0,Te=!0);for(let L=0;L<xe.length;L++){const oe=xe[L];let ne=null;if(d!==null)ne=d.getViewport(oe);else{const ee=u.getViewSubImage(f,oe);ne=ee.viewport,L===0&&(e.setRenderTargetTextures(v,ee.colorTexture,ee.depthStencilTexture),e.setRenderTarget(v))}let Q=D[L];Q===void 0&&(Q=new fn,Q.layers.enable(L),Q.viewport=new dt,D[L]=Q),Q.matrix.fromArray(oe.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(oe.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ne.x,ne.y,ne.width,ne.height),L===0&&(I.matrix.copy(Q.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Te===!0&&I.cameras.push(Q)}const Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const L=u.getDepthInformation(xe[0]);L&&L.isValid&&L.texture&&p.init(L,s.renderState)}if(Ce&&Ce.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let L=0;L<xe.length;L++){const oe=xe[L].camera;if(oe){let ne=m[oe];ne||(ne=new Ef,m[oe]=ne);const Q=u.getCameraImage(oe);ne.sourceTexture=Q}}}}for(let xe=0;xe<w.length;xe++){const Te=b[xe],Ce=w[xe];Te!==null&&Ce!==void 0&&Ce.update(Te,te,l||o)}Ee&&Ee(K,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const Ye=new zf;Ye.setAnimationLoop(ze),this.setAnimationLoop=function(K){Ee=K},this.dispose=function(){}}}const Li=new zn,jx=new mt;function Zx(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,_f(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,S,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,M,S):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===qt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===qt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),S=M.envMap,v=M.envMapRotation;S&&(p.envMap.value=S,Li.copy(v),Li.x*=-1,Li.y*=-1,Li.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),p.envMapRotation.value.setFromMatrix4(jx.makeRotationFromEuler(Li)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=S*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Kx(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,S){const v=S.program;n.uniformBlockBinding(M,v)}function l(M,S){let v=s[M.id];v===void 0&&(g(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",p));const w=S.program;n.updateUBOMapping(M,w);const b=e.render.frame;r[M.id]!==b&&(f(M),r[M.id]=b)}function h(M){const S=u();M.__bindingPointIndex=S;const v=i.createBuffer(),w=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const S=s[M.id],v=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let b=0,A=v.length;b<A;b++){const P=Array.isArray(v[b])?v[b]:[v[b]];for(let E=0,x=P.length;E<x;E++){const D=P[E];if(d(D,b,E,w)===!0){const I=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let V=0;V<H.length;V++){const k=H[V],J=_(k);typeof k=="number"||typeof k=="boolean"?(D.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,I+q,D.__data)):k.isMatrix3?(D.__data[0]=k.elements[0],D.__data[1]=k.elements[1],D.__data[2]=k.elements[2],D.__data[3]=0,D.__data[4]=k.elements[3],D.__data[5]=k.elements[4],D.__data[6]=k.elements[5],D.__data[7]=0,D.__data[8]=k.elements[6],D.__data[9]=k.elements[7],D.__data[10]=k.elements[8],D.__data[11]=0):(k.toArray(D.__data,q),q+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,S,v,w){const b=M.value,A=S+"_"+v;if(w[A]===void 0)return typeof b=="number"||typeof b=="boolean"?w[A]=b:w[A]=b.clone(),!0;{const P=w[A];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return w[A]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(M){const S=M.uniforms;let v=0;const w=16;for(let A=0,P=S.length;A<P;A++){const E=Array.isArray(S[A])?S[A]:[S[A]];for(let x=0,D=E.length;x<D;x++){const I=E[x],H=Array.isArray(I.value)?I.value:[I.value];for(let q=0,V=H.length;q<V;q++){const k=H[q],J=_(k),$=v%w,pe=$%J.boundary,Z=$+pe;v+=pe,Z!==0&&w-Z<J.storage&&(v+=w-Z),I.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=J.storage}}}const b=v%w;return b>0&&(v+=w-b),M.__size=v,M.__cache={},this}function _(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function p(M){const S=M.target;S.removeEventListener("dispose",p);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class Jx{constructor(e={}){const{canvas:t=Jp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,m=null;const M=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1;this._outputColorSpace=Ut;let b=0,A=0,P=null,E=-1,x=null;const D=new dt,I=new dt;let H=null;const q=new Ve(0);let V=0,k=t.width,J=t.height,$=1,pe=null,Z=null;const re=new dt(0,0,k,J),ge=new dt(0,0,k,J);let Ee=!1;const ze=new Dl;let Ye=!1,K=!1;const te=new mt,xe=new R,Te=new dt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function it(){return P===null?$:1}let L=n;function oe(T,F){return t.getContext(T,F)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ml}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",ue,!1),L===null){const F="webgl2";if(L=oe(F,T),L===null)throw oe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ne,Q,ee,W,N,ie,Le,Ne,C,y,O,X,z,G,ve,ae,be,Pe,he,Me,We,Oe,ye,Je;function U(){ne=new cv(L),ne.init(),Oe=new Wx(L,ne),Q=new tv(L,ne,e,Oe),ee=new Gx(L,ne),Q.reversedDepthBuffer&&f&&ee.buffers.depth.setReversed(!0),W=new uv(L),N=new Rx,ie=new Vx(L,ne,ee,N,Q,Oe,W),Le=new iv(v),Ne=new av(v),C=new _0(L),ye=new Q_(L,C),y=new lv(L,C,W,ye),O=new dv(L,y,C,W),he=new fv(L,Q,ie),ae=new nv(N),X=new Ax(v,Le,Ne,ne,Q,ye,ae),z=new Zx(v,N),G=new Dx,ve=new Ox(ne),Pe=new J_(v,Le,Ne,ee,O,d,c),be=new kx(v,O,Q),Je=new Kx(L,W,Q,ee),Me=new ev(L,ne,W),We=new hv(L,ne,W),W.programs=X.programs,v.capabilities=Q,v.extensions=ne,v.properties=N,v.renderLists=G,v.shadowMap=be,v.state=ee,v.info=W}U();const de=new qx(v,L);this.xr=de,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=ne.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ne.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(k,J,!1))},this.getSize=function(T){return T.set(k,J)},this.setSize=function(T,F,Y=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,J=F,t.width=Math.floor(T*$),t.height=Math.floor(F*$),Y===!0&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(k*$,J*$).floor()},this.setDrawingBufferSize=function(T,F,Y){k=T,J=F,$=Y,t.width=Math.floor(T*Y),t.height=Math.floor(F*Y),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(re)},this.setViewport=function(T,F,Y,j){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,F,Y,j),ee.viewport(D.copy(re).multiplyScalar($).round())},this.getScissor=function(T){return T.copy(ge)},this.setScissor=function(T,F,Y,j){T.isVector4?ge.set(T.x,T.y,T.z,T.w):ge.set(T,F,Y,j),ee.scissor(I.copy(ge).multiplyScalar($).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(T){ee.setScissorTest(Ee=T)},this.setOpaqueSort=function(T){pe=T},this.setTransparentSort=function(T){Z=T},this.getClearColor=function(T){return T.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,Y=!0){let j=0;if(T){let B=!1;if(P!==null){const fe=P.texture.format;B=fe===Cl||fe===bl||fe===Tl}if(B){const fe=P.texture.type,Se=fe===jn||fe===$i||fe===Tr||fe===br||fe===Sl||fe===Ml,De=Pe.getClearColor(),we=Pe.getClearAlpha(),Ge=De.r,$e=De.g,Be=De.b;Se?(g[0]=Ge,g[1]=$e,g[2]=Be,g[3]=we,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Ge,_[1]=$e,_[2]=Be,_[3]=we,L.clearBufferiv(L.COLOR,0,_))}else j|=L.COLOR_BUFFER_BIT}F&&(j|=L.DEPTH_BUFFER_BIT),Y&&(j|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Pe.dispose(),G.dispose(),ve.dispose(),N.dispose(),Le.dispose(),Ne.dispose(),O.dispose(),ye.dispose(),Je.dispose(),X.dispose(),de.dispose(),de.removeEventListener("sessionstart",Hn),de.removeEventListener("sessionend",jl),bi.stop()};function me(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=W.autoReset,F=be.enabled,Y=be.autoUpdate,j=be.needsUpdate,B=be.type;U(),W.autoReset=T,be.enabled=F,be.autoUpdate=Y,be.needsUpdate=j,be.type=B}function ue(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function se(T){const F=T.target;F.removeEventListener("dispose",se),Ie(F)}function Ie(T){je(T),N.remove(T)}function je(T){const F=N.get(T).programs;F!==void 0&&(F.forEach(function(Y){X.releaseProgram(Y)}),T.isShaderMaterial&&X.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,Y,j,B,fe){F===null&&(F=Ce);const Se=B.isMesh&&B.matrixWorld.determinant()<0,De=qd(T,F,Y,j,B);ee.setMaterial(j,Se);let we=Y.index,Ge=1;if(j.wireframe===!0){if(we=y.getWireframeAttribute(Y),we===void 0)return;Ge=2}const $e=Y.drawRange,Be=Y.attributes.position;let st=$e.start*Ge,vt=($e.start+$e.count)*Ge;fe!==null&&(st=Math.max(st,fe.start*Ge),vt=Math.min(vt,(fe.start+fe.count)*Ge)),we!==null?(st=Math.max(st,0),vt=Math.min(vt,we.count)):Be!=null&&(st=Math.max(st,0),vt=Math.min(vt,Be.count));const Pt=vt-st;if(Pt<0||Pt===1/0)return;ye.setup(B,j,De,Y,we);let Tt,xt=Me;if(we!==null&&(Tt=C.get(we),xt=We,xt.setIndex(Tt)),B.isMesh)j.wireframe===!0?(ee.setLineWidth(j.wireframeLinewidth*it()),xt.setMode(L.LINES)):xt.setMode(L.TRIANGLES);else if(B.isLine){let ke=j.linewidth;ke===void 0&&(ke=1),ee.setLineWidth(ke*it()),B.isLineSegments?xt.setMode(L.LINES):B.isLineLoop?xt.setMode(L.LINE_LOOP):xt.setMode(L.LINE_STRIP)}else B.isPoints?xt.setMode(L.POINTS):B.isSprite&&xt.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Rr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))xt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const ke=B._multiDrawStarts,wt=B._multiDrawCounts,lt=B._multiDrawCount,mn=we?C.get(we).bytesPerElement:1,rs=N.get(j).currentProgram.getUniforms();for(let gn=0;gn<lt;gn++)rs.setValue(L,"_gl_DrawID",gn),xt.render(ke[gn]/mn,wt[gn])}else if(B.isInstancedMesh)xt.renderInstances(st,Pt,B.count);else if(Y.isInstancedBufferGeometry){const ke=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,wt=Math.min(Y.instanceCount,ke);xt.renderInstances(st,Pt,wt)}else xt.render(st,Pt)};function St(T,F,Y){T.transparent===!0&&T.side===$t&&T.forceSinglePass===!1?(T.side=qt,T.needsUpdate=!0,Hr(T,F,Y),T.side=Ei,T.needsUpdate=!0,Hr(T,F,Y),T.side=$t):Hr(T,F,Y)}this.compile=function(T,F,Y=null){Y===null&&(Y=T),m=ve.get(Y),m.init(F),S.push(m),Y.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),T!==Y&&T.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const j=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const fe=B.material;if(fe)if(Array.isArray(fe))for(let Se=0;Se<fe.length;Se++){const De=fe[Se];St(De,Y,B),j.add(De)}else St(fe,Y,B),j.add(fe)}),m=S.pop(),j},this.compileAsync=function(T,F,Y=null){const j=this.compile(T,F,Y);return new Promise(B=>{function fe(){if(j.forEach(function(Se){N.get(Se).currentProgram.isReady()&&j.delete(Se)}),j.size===0){B(T);return}setTimeout(fe,10)}ne.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let ft=null;function Kn(T){ft&&ft(T)}function Hn(){bi.stop()}function jl(){bi.start()}const bi=new zf;bi.setAnimationLoop(Kn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(T){ft=T,de.setAnimationLoop(T),T===null?bi.stop():bi.start()},de.addEventListener("sessionstart",Hn),de.addEventListener("sessionend",jl),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(F),F=de.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,F,P),m=ve.get(T,S.length),m.init(F),S.push(m),te.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ze.setFromProjectionMatrix(te,$n,F.reversedDepth),K=this.localClippingEnabled,Ye=ae.init(this.clippingPlanes,K),p=G.get(T,M.length),p.init(),M.push(p),de.enabled===!0&&de.isPresenting===!0){const fe=v.xr.getDepthSensingMesh();fe!==null&&pa(fe,F,-1/0,v.sortObjects)}pa(T,F,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(pe,Z),He=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,He&&Pe.addToRenderList(p,T),this.info.render.frame++,Ye===!0&&ae.beginShadows();const Y=m.state.shadowsArray;be.render(Y,T,F),Ye===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=p.opaque,B=p.transmissive;if(m.setupLights(),F.isArrayCamera){const fe=F.cameras;if(B.length>0)for(let Se=0,De=fe.length;Se<De;Se++){const we=fe[Se];Kl(j,B,T,we)}He&&Pe.render(T);for(let Se=0,De=fe.length;Se<De;Se++){const we=fe[Se];Zl(p,T,we,we.viewport)}}else B.length>0&&Kl(j,B,T,F),He&&Pe.render(T),Zl(p,T,F);P!==null&&A===0&&(ie.updateMultisampleRenderTarget(P),ie.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(v,T,F),ye.resetDefaultState(),E=-1,x=null,S.pop(),S.length>0?(m=S[S.length-1],Ye===!0&&ae.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function pa(T,F,Y,j){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ze.intersectsSprite(T)){j&&Te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(te);const Se=O.update(T),De=T.material;De.visible&&p.push(T,Se,De,Y,Te.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ze.intersectsObject(T))){const Se=O.update(T),De=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Te.copy(T.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Te.copy(Se.boundingSphere.center)),Te.applyMatrix4(T.matrixWorld).applyMatrix4(te)),Array.isArray(De)){const we=Se.groups;for(let Ge=0,$e=we.length;Ge<$e;Ge++){const Be=we[Ge],st=De[Be.materialIndex];st&&st.visible&&p.push(T,Se,st,Y,Te.z,Be)}}else De.visible&&p.push(T,Se,De,Y,Te.z,null)}}const fe=T.children;for(let Se=0,De=fe.length;Se<De;Se++)pa(fe[Se],F,Y,j)}function Zl(T,F,Y,j){const B=T.opaque,fe=T.transmissive,Se=T.transparent;m.setupLightsView(Y),Ye===!0&&ae.setGlobalState(v.clippingPlanes,Y),j&&ee.viewport(D.copy(j)),B.length>0&&kr(B,F,Y),fe.length>0&&kr(fe,F,Y),Se.length>0&&kr(Se,F,Y),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Kl(T,F,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new wn(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Yn:jn,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const fe=m.state.transmissionRenderTarget[j.id],Se=j.viewport||D;fe.setSize(Se.z*v.transmissionResolutionScale,Se.w*v.transmissionResolutionScale);const De=v.getRenderTarget(),we=v.getActiveCubeFace(),Ge=v.getActiveMipmapLevel();v.setRenderTarget(fe),v.getClearColor(q),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),He&&Pe.render(Y);const $e=v.toneMapping;v.toneMapping=yi;const Be=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),Ye===!0&&ae.setGlobalState(v.clippingPlanes,j),kr(T,Y,j),ie.updateMultisampleRenderTarget(fe),ie.updateRenderTargetMipmap(fe),ne.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let vt=0,Pt=F.length;vt<Pt;vt++){const Tt=F[vt],xt=Tt.object,ke=Tt.geometry,wt=Tt.material,lt=Tt.group;if(wt.side===$t&&xt.layers.test(j.layers)){const mn=wt.side;wt.side=qt,wt.needsUpdate=!0,Jl(xt,Y,j,ke,wt,lt),wt.side=mn,wt.needsUpdate=!0,st=!0}}st===!0&&(ie.updateMultisampleRenderTarget(fe),ie.updateRenderTargetMipmap(fe))}v.setRenderTarget(De,we,Ge),v.setClearColor(q,V),Be!==void 0&&(j.viewport=Be),v.toneMapping=$e}function kr(T,F,Y){const j=F.isScene===!0?F.overrideMaterial:null;for(let B=0,fe=T.length;B<fe;B++){const Se=T[B],De=Se.object,we=Se.geometry,Ge=Se.group;let $e=Se.material;$e.allowOverride===!0&&j!==null&&($e=j),De.layers.test(Y.layers)&&Jl(De,F,Y,we,$e,Ge)}}function Jl(T,F,Y,j,B,fe){T.onBeforeRender(v,F,Y,j,B,fe),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(v,F,Y,j,T,fe),B.transparent===!0&&B.side===$t&&B.forceSinglePass===!1?(B.side=qt,B.needsUpdate=!0,v.renderBufferDirect(Y,F,j,B,T,fe),B.side=Ei,B.needsUpdate=!0,v.renderBufferDirect(Y,F,j,B,T,fe),B.side=$t):v.renderBufferDirect(Y,F,j,B,T,fe),T.onAfterRender(v,F,Y,j,B,fe)}function Hr(T,F,Y){F.isScene!==!0&&(F=Ce);const j=N.get(T),B=m.state.lights,fe=m.state.shadowsArray,Se=B.state.version,De=X.getParameters(T,B.state,fe,F,Y),we=X.getProgramCacheKey(De);let Ge=j.programs;j.environment=T.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(T.isMeshStandardMaterial?Ne:Le).get(T.envMap||j.environment),j.envMapRotation=j.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ge===void 0&&(T.addEventListener("dispose",se),Ge=new Map,j.programs=Ge);let $e=Ge.get(we);if($e!==void 0){if(j.currentProgram===$e&&j.lightsStateVersion===Se)return eh(T,De),$e}else De.uniforms=X.getUniforms(T),T.onBeforeCompile(De,v),$e=X.acquireProgram(De,we),Ge.set(we,$e),j.uniforms=De.uniforms;const Be=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=ae.uniform),eh(T,De),j.needsLights=Zd(T),j.lightsStateVersion=Se,j.needsLights&&(Be.ambientLightColor.value=B.state.ambient,Be.lightProbe.value=B.state.probe,Be.directionalLights.value=B.state.directional,Be.directionalLightShadows.value=B.state.directionalShadow,Be.spotLights.value=B.state.spot,Be.spotLightShadows.value=B.state.spotShadow,Be.rectAreaLights.value=B.state.rectArea,Be.ltc_1.value=B.state.rectAreaLTC1,Be.ltc_2.value=B.state.rectAreaLTC2,Be.pointLights.value=B.state.point,Be.pointLightShadows.value=B.state.pointShadow,Be.hemisphereLights.value=B.state.hemi,Be.directionalShadowMap.value=B.state.directionalShadowMap,Be.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Be.spotShadowMap.value=B.state.spotShadowMap,Be.spotLightMatrix.value=B.state.spotLightMatrix,Be.spotLightMap.value=B.state.spotLightMap,Be.pointShadowMap.value=B.state.pointShadowMap,Be.pointShadowMatrix.value=B.state.pointShadowMatrix),j.currentProgram=$e,j.uniformsList=null,$e}function Ql(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Do.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function eh(T,F){const Y=N.get(T);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function qd(T,F,Y,j,B){F.isScene!==!0&&(F=Ce),ie.resetTextureUnits();const fe=F.fog,Se=j.isMeshStandardMaterial?F.environment:null,De=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:zs,we=(j.isMeshStandardMaterial?Ne:Le).get(j.envMap||Se),Ge=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,$e=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Be=!!Y.morphAttributes.position,st=!!Y.morphAttributes.normal,vt=!!Y.morphAttributes.color;let Pt=yi;j.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Pt=v.toneMapping);const Tt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,xt=Tt!==void 0?Tt.length:0,ke=N.get(j),wt=m.state.lights;if(Ye===!0&&(K===!0||T!==x)){const nn=T===x&&j.id===E;ae.setState(j,T,nn)}let lt=!1;j.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==wt.state.version||ke.outputColorSpace!==De||B.isBatchedMesh&&ke.batching===!1||!B.isBatchedMesh&&ke.batching===!0||B.isBatchedMesh&&ke.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&ke.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&ke.instancing===!1||!B.isInstancedMesh&&ke.instancing===!0||B.isSkinnedMesh&&ke.skinning===!1||!B.isSkinnedMesh&&ke.skinning===!0||B.isInstancedMesh&&ke.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&ke.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&ke.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&ke.instancingMorph===!1&&B.morphTexture!==null||ke.envMap!==we||j.fog===!0&&ke.fog!==fe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==ae.numPlanes||ke.numIntersection!==ae.numIntersection)||ke.vertexAlphas!==Ge||ke.vertexTangents!==$e||ke.morphTargets!==Be||ke.morphNormals!==st||ke.morphColors!==vt||ke.toneMapping!==Pt||ke.morphTargetsCount!==xt)&&(lt=!0):(lt=!0,ke.__version=j.version);let mn=ke.currentProgram;lt===!0&&(mn=Hr(j,F,B));let rs=!1,gn=!1,qs=!1;const At=mn.getUniforms(),Mn=ke.uniforms;if(ee.useProgram(mn.program)&&(rs=!0,gn=!0,qs=!0),j.id!==E&&(E=j.id,gn=!0),rs||x!==T){ee.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),At.setValue(L,"projectionMatrix",T.projectionMatrix),At.setValue(L,"viewMatrix",T.matrixWorldInverse);const hn=At.map.cameraPosition;hn!==void 0&&hn.setValue(L,xe.setFromMatrixPosition(T.matrixWorld)),Q.logarithmicDepthBuffer&&At.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&At.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,gn=!0,qs=!0)}if(B.isSkinnedMesh){At.setOptional(L,B,"bindMatrix"),At.setOptional(L,B,"bindMatrixInverse");const nn=B.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),At.setValue(L,"boneTexture",nn.boneTexture,ie))}B.isBatchedMesh&&(At.setOptional(L,B,"batchingTexture"),At.setValue(L,"batchingTexture",B._matricesTexture,ie),At.setOptional(L,B,"batchingIdTexture"),At.setValue(L,"batchingIdTexture",B._indirectTexture,ie),At.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&At.setValue(L,"batchingColorTexture",B._colorsTexture,ie));const En=Y.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&he.update(B,Y,mn),(gn||ke.receiveShadow!==B.receiveShadow)&&(ke.receiveShadow=B.receiveShadow,At.setValue(L,"receiveShadow",B.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Mn.envMap.value=we,Mn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&F.environment!==null&&(Mn.envMapIntensity.value=F.environmentIntensity),gn&&(At.setValue(L,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&jd(Mn,qs),fe&&j.fog===!0&&z.refreshFogUniforms(Mn,fe),z.refreshMaterialUniforms(Mn,j,$,J,m.state.transmissionRenderTarget[T.id]),Do.upload(L,Ql(ke),Mn,ie)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Do.upload(L,Ql(ke),Mn,ie),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&At.setValue(L,"center",B.center),At.setValue(L,"modelViewMatrix",B.modelViewMatrix),At.setValue(L,"normalMatrix",B.normalMatrix),At.setValue(L,"modelMatrix",B.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const nn=j.uniformsGroups;for(let hn=0,ma=nn.length;hn<ma;hn++){const Ci=nn[hn];Je.update(Ci,mn),Je.bind(Ci,mn)}}return mn}function jd(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Zd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,F,Y){const j=N.get(T);j.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),N.get(T.texture).__webglTexture=F,N.get(T.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Y,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){const Y=N.get(T);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0};const Kd=L.createFramebuffer();this.setRenderTarget=function(T,F=0,Y=0){P=T,b=F,A=Y;let j=!0,B=null,fe=!1,Se=!1;if(T){const we=N.get(T);if(we.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(L.FRAMEBUFFER,null),j=!1;else if(we.__webglFramebuffer===void 0)ie.setupRenderTarget(T);else if(we.__hasExternalTextures)ie.rebindTextures(T,N.get(T.texture).__webglTexture,N.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Be=T.depthTexture;if(we.__boundDepthTexture!==Be){if(Be!==null&&N.has(Be)&&(T.width!==Be.image.width||T.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(T)}}const Ge=T.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Se=!0);const $e=N.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray($e[F])?B=$e[F][Y]:B=$e[F],fe=!0):T.samples>0&&ie.useMultisampledRTT(T)===!1?B=N.get(T).__webglMultisampledFramebuffer:Array.isArray($e)?B=$e[Y]:B=$e,D.copy(T.viewport),I.copy(T.scissor),H=T.scissorTest}else D.copy(re).multiplyScalar($).floor(),I.copy(ge).multiplyScalar($).floor(),H=Ee;if(Y!==0&&(B=Kd),ee.bindFramebuffer(L.FRAMEBUFFER,B)&&j&&ee.drawBuffers(T,B),ee.viewport(D),ee.scissor(I),ee.setScissorTest(H),fe){const we=N.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,Y)}else if(Se){const we=F;for(let Ge=0;Ge<T.textures.length;Ge++){const $e=N.get(T.textures[Ge]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ge,$e.__webglTexture,Y,we)}}else if(T!==null&&Y!==0){const we=N.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,we.__webglTexture,Y)}E=-1},this.readRenderTargetPixels=function(T,F,Y,j,B,fe,Se,De=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=N.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){ee.bindFramebuffer(L.FRAMEBUFFER,we);try{const Ge=T.textures[De],$e=Ge.format,Be=Ge.type;if(!Q.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-j&&Y>=0&&Y<=T.height-B&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+De),L.readPixels(F,Y,j,B,Oe.convert($e),Oe.convert(Be),fe))}finally{const Ge=P!==null?N.get(P).__webglFramebuffer:null;ee.bindFramebuffer(L.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(T,F,Y,j,B,fe,Se,De=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=N.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we)if(F>=0&&F<=T.width-j&&Y>=0&&Y<=T.height-B){ee.bindFramebuffer(L.FRAMEBUFFER,we);const Ge=T.textures[De],$e=Ge.format,Be=Ge.type;if(!Q.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,st),L.bufferData(L.PIXEL_PACK_BUFFER,fe.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+De),L.readPixels(F,Y,j,B,Oe.convert($e),Oe.convert(Be),0);const vt=P!==null?N.get(P).__webglFramebuffer:null;ee.bindFramebuffer(L.FRAMEBUFFER,vt);const Pt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Qp(L,Pt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,st),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,fe),L.deleteBuffer(st),L.deleteSync(Pt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,Y=0){const j=Math.pow(2,-Y),B=Math.floor(T.image.width*j),fe=Math.floor(T.image.height*j),Se=F!==null?F.x:0,De=F!==null?F.y:0;ie.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,Se,De,B,fe),ee.unbindTexture()};const Jd=L.createFramebuffer(),Qd=L.createFramebuffer();this.copyTextureToTexture=function(T,F,Y=null,j=null,B=0,fe=null){fe===null&&(B!==0?(Rr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=B,B=0):fe=0);let Se,De,we,Ge,$e,Be,st,vt,Pt;const Tt=T.isCompressedTexture?T.mipmaps[fe]:T.image;if(Y!==null)Se=Y.max.x-Y.min.x,De=Y.max.y-Y.min.y,we=Y.isBox3?Y.max.z-Y.min.z:1,Ge=Y.min.x,$e=Y.min.y,Be=Y.isBox3?Y.min.z:0;else{const En=Math.pow(2,-B);Se=Math.floor(Tt.width*En),De=Math.floor(Tt.height*En),T.isDataArrayTexture?we=Tt.depth:T.isData3DTexture?we=Math.floor(Tt.depth*En):we=1,Ge=0,$e=0,Be=0}j!==null?(st=j.x,vt=j.y,Pt=j.z):(st=0,vt=0,Pt=0);const xt=Oe.convert(F.format),ke=Oe.convert(F.type);let wt;F.isData3DTexture?(ie.setTexture3D(F,0),wt=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ie.setTexture2DArray(F,0),wt=L.TEXTURE_2D_ARRAY):(ie.setTexture2D(F,0),wt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const lt=L.getParameter(L.UNPACK_ROW_LENGTH),mn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),rs=L.getParameter(L.UNPACK_SKIP_PIXELS),gn=L.getParameter(L.UNPACK_SKIP_ROWS),qs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Tt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Tt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ge),L.pixelStorei(L.UNPACK_SKIP_ROWS,$e),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Be);const At=T.isDataArrayTexture||T.isData3DTexture,Mn=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const En=N.get(T),nn=N.get(F),hn=N.get(En.__renderTarget),ma=N.get(nn.__renderTarget);ee.bindFramebuffer(L.READ_FRAMEBUFFER,hn.__webglFramebuffer),ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,ma.__webglFramebuffer);for(let Ci=0;Ci<we;Ci++)At&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,N.get(T).__webglTexture,B,Be+Ci),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,N.get(F).__webglTexture,fe,Pt+Ci)),L.blitFramebuffer(Ge,$e,Se,De,st,vt,Se,De,L.DEPTH_BUFFER_BIT,L.NEAREST);ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||T.isRenderTargetTexture||N.has(T)){const En=N.get(T),nn=N.get(F);ee.bindFramebuffer(L.READ_FRAMEBUFFER,Jd),ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,Qd);for(let hn=0;hn<we;hn++)At?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,En.__webglTexture,B,Be+hn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,En.__webglTexture,B),Mn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,nn.__webglTexture,fe,Pt+hn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,nn.__webglTexture,fe),B!==0?L.blitFramebuffer(Ge,$e,Se,De,st,vt,Se,De,L.COLOR_BUFFER_BIT,L.NEAREST):Mn?L.copyTexSubImage3D(wt,fe,st,vt,Pt+hn,Ge,$e,Se,De):L.copyTexSubImage2D(wt,fe,st,vt,Ge,$e,Se,De);ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Mn?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(wt,fe,st,vt,Pt,Se,De,we,xt,ke,Tt.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(wt,fe,st,vt,Pt,Se,De,we,xt,Tt.data):L.texSubImage3D(wt,fe,st,vt,Pt,Se,De,we,xt,ke,Tt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,fe,st,vt,Se,De,xt,ke,Tt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,fe,st,vt,Tt.width,Tt.height,xt,Tt.data):L.texSubImage2D(L.TEXTURE_2D,fe,st,vt,Se,De,xt,ke,Tt);L.pixelStorei(L.UNPACK_ROW_LENGTH,lt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,rs),L.pixelStorei(L.UNPACK_SKIP_ROWS,gn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qs),fe===0&&F.generateMipmaps&&L.generateMipmap(wt),ee.unbindTexture()},this.initRenderTarget=function(T){N.get(T).__webglFramebuffer===void 0&&ie.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ie.setTextureCube(T,0):T.isData3DTexture?ie.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ie.setTexture2DArray(T,0):ie.setTexture2D(T,0),ee.unbindTexture()},this.resetState=function(){b=0,A=0,P=null,ee.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}const Ke={HALF_LENGTH:6.7,LENGTH:13.4,HALF_WIDTH_SINGLES:2.59,HALF_WIDTH_DOUBLES:3.05,SHORT_SERVICE_LINE:1.98,LONG_SERVICE_INSET:.76,NET_HEIGHT_CENTER:1.524,NET_HEIGHT_POST:1.55,NET_DEPTH:.76,LINE_WIDTH:.04,RUNOFF:2.3,SIDEOFF:2.1},Ct={GRAVITY:9.81,TERMINAL_VELOCITY:6.8,get DRAG_K(){return this.GRAVITY/(this.TERMINAL_VELOCITY*this.TERMINAL_VELOCITY)},SUBSTEP:1/480,RADIUS:.033},ht={REACH_RADIUS:1.15,REACH_HIGH:2.95,REACH_LOW:.05,SWEET_SPOT:.45,CHARGE_TIME:.55,CHARGE_MIN:.18,SWING_COOLDOWN:.28,MISS_PENALTY_SCALE:.9,SMASH_MIN_HEIGHT:1.95,SMASH_MIN_CHARGE:.55,NET_LIFT_HEIGHT:1.05},Jt={SPEED:5.4,ACCEL:34,FRICTION:24,CHARGE_SPEED_SCALE:.52,BOUNDS_X:4.3,BOUNDS_Z_MIN:.35,BOUNDS_Z_MAX:7.6},Ui={POINTS_TO_WIN:11,WIN_BY:2,HARD_CAP:15,SERVE_HEIGHT:1.05,SERVE_DELAY:.9},vo={DEPTH_Z:[1.35,3.5,5.9],LANE_X:[-1.75,0,1.75]},ot={BASE_SPEED:9.5,MAX_SPEED:23,ACCEL:.32,TUCK_BONUS:4.5,TRICK_BOOST:2.6,STEER:7.8,WIDTH:5,HOP_V:4.8,RAMP_V:8.6,FLIP_RATE:Math.PI*1.9,MIN_FLIP_TURNS:.75,STUMBLE_SLOW:.52,STUMBLE_TIME:1.5,AVAL_GAP0:45,AVAL_SPEED0:8.2,AVAL_ACCEL:.26,TRICK_WINDOW:4.5,SEG_LEN:20,SPAWN_Z:-150,KILL_Z:12},sr={smash:{elevation:-14,name:"杀球"},drive:{elevation:6,name:"平抽"},drop:{elevation:18,name:"吊球"},clear:{elevation:42,name:"高远"},lift:{elevation:56,name:"挑球"},serve:{elevation:34,name:"发球"}},du={KeyW:[0,-1],KeyS:[0,1],KeyA:[-1,0],KeyD:[1,0]},pu={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]},xo=["Space","KeyJ","KeyF"],yo=["Enter","Numpad0","ShiftRight","Slash"];class Qx{constructor(e=window){this.down=new Set,this.pressed=new Set,this.released=new Set,this._onKeyDown=t=>{t.repeat||((xo.includes(t.code)||yo.includes(t.code)||t.code in du||t.code in pu)&&t.preventDefault(),this.down.add(t.code),this.pressed.add(t.code))},this._onKeyUp=t=>{this.down.delete(t.code),this.released.add(t.code)},this._onBlur=()=>{this.down.clear(),this._cancelled=!0},this._cancelled=!1,e.addEventListener("keydown",this._onKeyDown),e.addEventListener("keyup",this._onKeyUp),e.addEventListener("blur",this._onBlur),this._target=e}dispose(){this._target.removeEventListener("keydown",this._onKeyDown),this._target.removeEventListener("keyup",this._onKeyUp),this._target.removeEventListener("blur",this._onBlur)}endFrame(){this.pressed.clear(),this.released.clear()}consumeCancel(){const e=this._cancelled;return this._cancelled=!1,e}aimDir(e=0){return this.move(e)}isDown(e){return this.down.has(e)}wasPressed(e){return this.pressed.has(e)}move(e){const t=e===0?du:pu;let n=0,s=0;for(const o in t)this.down.has(o)&&(n+=t[o][0],s+=t[o][1]);const r=Math.hypot(n,s);return r>1?{x:n/r,z:s/r}:{x:n,z:s}}hitHeld(e){return(e===0?xo:yo).some(n=>this.down.has(n))}hitPressed(e){return(e===0?xo:yo).some(n=>this.pressed.has(n))}hitReleased(e){return(e===0?xo:yo).some(n=>this.released.has(n))&&!this.hitHeld(e)}anyPressed(){return this.pressed.size>0}}class mu{constructor(){this.dir={x:0,z:0},this.held=!1,this.errorBias={x:0,z:0},this._prevHeld=!1,this._pressedFlag=!1,this._releasedFlag=!1}set(e,t){this.dir=e,this._pressedFlag=t&&!this._prevHeld,this._releasedFlag=!t&&this._prevHeld,this._prevHeld=this.held=t}move(){return this.dir}aimDir(){return this.dir}hitHeld(){return this.held}hitPressed(){return this._pressedFlag}hitReleased(){return this._releasedFlag}consumeCancel(){return!1}endFrame(){this._pressedFlag=!1,this._releasedFlag=!1}}const Ka=.16,Ss=62,ey=.3;class ty{constructor(e){this.surface=e,this.enabled=!1,this.stickId=null,this.stickOrigin={x:0,y:0},this.dir={x:0,z:0},this.rawDir={x:0,z:0},this.aimSnapshot={x:0,z:0},this.glow=0,this.hitId=null,this.held=!1,this.swipeStart=null,this.aimSwipe=null,this._pendingPress=!1,this._pendingRelease=!1,this._pressedFlag=!1,this._releasedFlag=!1,this._buildUi(),this._onDown=t=>this._pointerDown(t),this._onMove=t=>this._pointerMove(t),this._onUp=t=>this._pointerUp(t),e.addEventListener("pointerdown",this._onDown),e.addEventListener("pointermove",this._onMove),e.addEventListener("pointerup",this._onUp),e.addEventListener("pointercancel",this._onUp),addEventListener("blur",()=>this._releaseAll(!0)),document.addEventListener("visibilitychange",()=>{document.hidden&&this._releaseAll(!0)})}_buildUi(){const e=document.createElement("div");e.id="touch-ui",e.innerHTML=`
      <div class="tc-stick" hidden>
        <div class="tc-stick-base"></div>
        <div class="tc-stick-knob"></div>
      </div>
      <div class="tc-hit">
        <svg viewBox="0 0 100 100" class="tc-hit-ring">
          <circle class="tc-ring-bg" cx="50" cy="50" r="44"></circle>
          <circle class="tc-ring-fill" cx="50" cy="50" r="44"></circle>
        </svg>
        <span class="tc-hit-arrow">➤</span>
        <span class="tc-hit-label">击球</span>
      </div>
      <div class="tc-hint">
        <span class="tc-hint-stick">左半屏拖动跑位</span>
        <span>按住蓄力 · <b>拖动选方向</b> · 松开击球</span>
      </div>`,document.body.appendChild(e),this.ui={root:e,stick:e.querySelector(".tc-stick"),knob:e.querySelector(".tc-stick-knob"),hit:e.querySelector(".tc-hit"),ring:e.querySelector(".tc-ring-fill"),hint:e.querySelector(".tc-hint")};const t=44;this._ringLen=2*Math.PI*t,this.ui.ring.style.strokeDasharray=String(this._ringLen),this.ui.ring.style.strokeDashoffset=String(this._ringLen)}setEnabled(e){this.enabled=e,this.ui.root.classList.toggle("active",e),e||this._releaseAll()}setStickEnabled(e){this.stickEnabled=e,this.ui.root.classList.toggle("no-stick",!e),!e&&this.stickId!==null&&(this.stickId=null,this.rawDir={x:0,z:0},this.ui.stick.hidden=!0)}fadeHint(){this.ui.hint.classList.add("gone")}_releaseAll(e=!1){this.stickId=null,this.hitId=null,this.rawDir={x:0,z:0},this.held&&(e?this._cancelled=!0:this._pendingRelease=!0),this.held=!1,this.swipeStart=null,this.aimSwipe=null,this.ui.stick.hidden=!0,this.ui.hit.classList.remove("down","aiming")}consumeCancel(){const e=this._cancelled;return this._cancelled=!1,e}_pointerDown(e){if(!this.enabled)return;e.preventDefault();const t=this.stickEnabled!==!1&&e.clientX<innerWidth*.5;if(t&&this.stickId===null){this.stickId=e.pointerId,this.stickOrigin={x:e.clientX,y:e.clientY},this.ui.stick.hidden=!1,this.ui.stick.style.left=`${e.clientX}px`,this.ui.stick.style.top=`${e.clientY}px`,this.ui.knob.style.transform="translate(-50%, -50%)";try{this.surface.setPointerCapture(e.pointerId)}catch{}}else if(!t&&this.hitId===null){this.hitId=e.pointerId,this.held=!0,this._pendingPress=!0,this.aimSnapshot=this.rawDir.x||this.rawDir.z?{...this.rawDir}:{...this.dir},this.swipeStart={x:e.clientX,y:e.clientY},this.aimSwipe=null,this.ui.hit.classList.add("down");try{this.surface.setPointerCapture(e.pointerId)}catch{}}}_pointerMove(e){if(!this.enabled)return;if(e.pointerId===this.hitId&&this.swipeStart){e.preventDefault();const c=e.clientX-this.swipeStart.x,l=e.clientY-this.swipeStart.y,h=Math.hypot(c,l);h>26&&(this.aimSwipe={x:c/h,z:l/h},this.ui.hit.style.setProperty("--aim",`${Math.atan2(l,c)}rad`),this.ui.hit.classList.add("aiming"));return}if(e.pointerId!==this.stickId)return;e.preventDefault();let t=e.clientX-this.stickOrigin.x,n=e.clientY-this.stickOrigin.y;const s=Math.hypot(t,n);if(s>Ss){const c=s-Ss;this.stickOrigin.x+=t/s*c,this.stickOrigin.y+=n/s*c,this.ui.stick.style.left=`${this.stickOrigin.x}px`,this.ui.stick.style.top=`${this.stickOrigin.y}px`,t=t/s*Ss,n=n/s*Ss}this.ui.knob.style.transform=`translate(calc(-50% + ${t}px), calc(-50% + ${n}px))`;const r=t/Ss,o=n/Ss,a=Math.hypot(r,o);if(a<Ka)this.rawDir={x:0,z:0};else{const c=Math.min(1,(a-Ka)/(1-Ka));this.rawDir={x:r/a*c,z:o/a*c}}}_pointerUp(e){e.pointerId===this.stickId?(this.stickId=null,this.rawDir={x:0,z:0},this.ui.stick.hidden=!0):e.pointerId===this.hitId&&(this.hitId=null,this.held=!1,this._pendingRelease=!0,this.swipeStart=null,this.ui.hit.classList.remove("down"),this.ui.hit.classList.remove("aiming"))}update(e,t=0){this.rawDir.x||this.rawDir.z?(this.dir={...this.rawDir},this.glow=ey):this.glow>0&&(this.glow-=e,this.glow<=0&&(this.dir={x:0,z:0})),this.ui.ring.style.strokeDashoffset=String(this._ringLen*(1-t))}move(){return{...this.rawDir}}aimDir(){return this.aimSwipe?{...this.aimSwipe}:this.rawDir.x||this.rawDir.z?{...this.rawDir}:{...this.aimSnapshot}}hitHeld(){return this.held}hitPressed(){return this._pressedFlag}hitReleased(){return this._releasedFlag}beginFrame(){this._pressedFlag=this._pendingPress,this._releasedFlag=this._pendingRelease}endFrame(){this._pendingPress=!1,this._pendingRelease=!1,this._pressedFlag=!1,this._releasedFlag=!1}}function ny(){return matchMedia("(pointer: coarse)").matches||matchMedia("(hover: none)").matches&&navigator.maxTouchPoints>0}class iy{constructor(){this.ctx=null,this.master=null,this.enabled=!0}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(!e){this.enabled=!1;return}this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.55,this.master.connect(this.ctx.destination)}setEnabled(e){this.enabled=e,this.master&&(this.master.gain.value=e?.55:0)}_noiseBuffer(e){const t=Math.max(1,Math.floor(this.ctx.sampleRate*e)),n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),s=n.getChannelData(0);for(let r=0;r<t;r++)s[r]=Math.random()*2-1;return n}_burst({duration:e=.08,freq:t=2400,q:n=1.2,gain:s=.5,type:r="bandpass",decay:o=.05}){if(!this.ctx||!this.enabled)return;const a=this.ctx.currentTime,c=this.ctx.createBufferSource();c.buffer=this._noiseBuffer(e);const l=this.ctx.createBiquadFilter();l.type=r,l.frequency.setValueAtTime(t,a),l.frequency.exponentialRampToValueAtTime(Math.max(120,t*.35),a+o),l.Q.value=n;const h=this.ctx.createGain();h.gain.setValueAtTime(s,a),h.gain.exponentialRampToValueAtTime(1e-4,a+e),c.connect(l),l.connect(h),h.connect(this.master),c.start(a),c.stop(a+e+.02)}_tone({freq:e=880,duration:t=.18,gain:n=.22,type:s="sine",slideTo:r=null}){if(!this.ctx||!this.enabled)return;const o=this.ctx.currentTime,a=this.ctx.createOscillator();a.type=s,a.frequency.setValueAtTime(e,o),r&&a.frequency.exponentialRampToValueAtTime(r,o+t);const c=this.ctx.createGain();c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(n,o+.012),c.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(c),c.connect(this.master),a.start(o),a.stop(o+t+.02)}hit(e,t=.5,n=30){const s=Math.min(1,n/90);e==="smash"?(this._burst({duration:.1,freq:3600,q:.8,gain:.62,decay:.045}),this._burst({duration:.16,freq:320,q:1.6,gain:.3,decay:.1}),this._tone({freq:180,slideTo:70,duration:.14,gain:.14,type:"triangle"})):e==="drop"||e==="serve"?this._burst({duration:.055,freq:1500+s*900,q:1.4,gain:.26,decay:.035}):e==="lift"?this._burst({duration:.075,freq:1900+s*1200,q:1.1,gain:.36,decay:.04}):this._burst({duration:.075,freq:2100+s*1600,q:1,gain:.3+s*.28,decay:.04})}whiff(){this._burst({duration:.16,freq:900,q:.6,gain:.13,type:"bandpass",decay:.14})}land(e){this._burst({duration:.09,freq:700,q:1,gain:.3,decay:.06}),e||this._tone({freq:320,slideTo:210,duration:.22,gain:.16,type:"square"})}netHit(){this._burst({duration:.13,freq:420,q:2.2,gain:.28,decay:.1})}point(e){const t=e?660:520;this._tone({freq:t,duration:.12,gain:.18,type:"triangle"}),setTimeout(()=>this._tone({freq:t*1.5,duration:.2,gain:.16,type:"triangle"}),105)}crowd(e=.6){if(!this.ctx||!this.enabled)return;const t=this.ctx.currentTime,n=.9+e*.8,s=this.ctx.createBufferSource();s.buffer=this._noiseBuffer(n);const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(600,t),r.frequency.linearRampToValueAtTime(1100,t+n*.3),r.Q.value=.7;const o=this.ctx.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(.1+e*.16,t+.18),o.gain.exponentialRampToValueAtTime(1e-4,t+n),s.connect(r),r.connect(o),o.connect(this.master),s.start(t),s.stop(t+n)}fanfare(){[523,659,784,1047].forEach((t,n)=>setTimeout(()=>this._tone({freq:t,duration:n===3?.5:.16,gain:.18,type:"triangle"}),n*130)),setTimeout(()=>this.crowd(1),200)}}const sy=Math.PI/180;function So(i,e,t,n){const s=Math.hypot(i,e,t),r=Ct.DRAG_K*s;return n.x=-r*i,n.y=-r*e-Ct.GRAVITY,n.z=-r*t,n}const Kt={x:0,y:0,z:0};function ry(i,e){const{x:t,y:n,z:s,vx:r,vy:o,vz:a}=i;So(r,o,a,Kt);const c=Kt.x,l=Kt.y,h=Kt.z,u=r,f=o,d=a;So(r+c*e/2,o+l*e/2,a+h*e/2,Kt);const g=Kt.x,_=Kt.y,p=Kt.z,m=r+c*e/2,M=o+l*e/2,S=a+h*e/2;So(r+g*e/2,o+_*e/2,a+p*e/2,Kt);const v=Kt.x,w=Kt.y,b=Kt.z,A=r+g*e/2,P=o+_*e/2,E=a+p*e/2;So(r+v*e,o+w*e,a+b*e,Kt);const x=Kt.x,D=Kt.y,I=Kt.z,H=r+v*e,q=o+w*e,V=a+b*e;return i.x=t+e/6*(u+2*m+2*A+H),i.y=n+e/6*(f+2*M+2*P+q),i.z=s+e/6*(d+2*S+2*E+V),i.vx=r+e/6*(c+2*g+2*v+x),i.vy=o+e/6*(l+2*_+2*w+D),i.vz=a+e/6*(h+2*p+2*b+I),i}function $s(i,e){let t=e;for(;t>1e-9;){const n=Math.min(Ct.SUBSTEP,t);ry(i,n),t-=n}return i}function Ir(i,e,t={}){const n=t.groundY??0,s=t.maxTime??8,r=t.dt??Ct.SUBSTEP*4,o=t.samples===!0,a={x:i.x,y:i.y,z:i.z,vx:e.x,vy:e.y,vz:e.z};let c=0,l=a.y,h=null,u=null;const f=o?[{t:0,x:a.x,y:a.y,z:a.z}]:null;for(;c<s;){const d=a.y,g=a.z,_=a.x;if($s(a,r),c+=r,a.y>l&&(l=a.y),h===null&&g*a.z<=0&&g!==a.z){const p=g/(g-a.z);h=d+(a.y-d)*p,u=_+(a.x-_)*p}if(o&&f.push({t:c,x:a.x,y:a.y,z:a.z}),a.y<=n&&a.vy<0){const p=(d-n)/(d-a.y);return{landing:{x:_+(a.x-_)*p,z:g+(a.z-g)*p},flightTime:c-r+r*p,apex:l,netY:h,netX:u,samples:f,grounded:!0}}}return{landing:{x:a.x,z:a.z},flightTime:c,apex:l,netY:h,netX:typeof u=="number"?u:null,samples:f,grounded:!1}}function qo(i,e,t,n){const s=Math.hypot(e,t)||1,r=e/s,o=t/s,a=n*sy,c=i*Math.cos(a);return{x:r*c,y:i*Math.sin(a),z:o*c}}function oy(i,e,t,n={}){const s=n.groundY??0,r=e.x-i.x,o=e.z-i.z,a=Math.hypot(r,o);if(a<1e-4)return null;const c=u=>{const f=qo(u,r,o,t),d=Ir(i,f,{groundY:s,dt:Ct.SUBSTEP*6,maxTime:6});return Math.hypot(d.landing.x-i.x,d.landing.z-i.z)};let l=1,h=120;if(c(h)<a||c(l)>a)return null;for(let u=0;u<26;u++){const f=(l+h)/2;c(f)<a?l=f:h=f}return(l+h)/2}function ay(i,e,t,n={}){const s=n.groundY??0,r=n.minElevation??-80,o=n.maxElevation??45,a=e.x-i.x,c=e.z-i.z,l=Math.hypot(a,c);if(l<1e-4)return{tooFast:!0};const h=p=>{const m=qo(t,a,c,p),M=Ir(i,m,{groundY:s,dt:Ct.SUBSTEP*6,maxTime:6});return Math.hypot(M.landing.x-i.x,M.landing.z-i.z)};if(h(o)<l)return{tooSlow:!0};if(h(r)>l)return{tooFast:!0};let u=r,f=o;for(let p=0;p<24;p++){const m=(u+f)/2;h(m)<l?u=m:f=m}const d=(u+f)/2,g=qo(t,a,c,d),_=Ir(i,g,{groundY:s,dt:Ct.SUBSTEP*4});return{velocity:g,elevation:d,speed:t,result:_}}function cy(i,e,t,n={}){const s=n.netHeight??1.524,r=n.netClearance??.04;let o=t;for(let a=0;a<9;a++){const c=ay(i,e,o,n);if(c.tooSlow){o*=1.25;continue}if(c.tooFast){o*=.82;continue}if(c.result.netY===null||c.result.netY>s+r)return c;o*=.88}return null}function Lo(i,e,t,n={}){const s=n.netClearance??.06,r=n.netHeight??1.524,o=n.groundY??0,a=n.needNet!==!1,c=n.maxElevation??70;let l=t;for(let h=0;h<10;h++){const u=oy(i,e,l,{groundY:o});if(u!==null){const f=qo(u,e.x-i.x,e.z-i.z,l),d=Ir(i,f,{groundY:o,dt:Ct.SUBSTEP*4});if(!a||d.netY===null||d.netY>r+s)return{velocity:f,elevation:l,speed:u,result:d}}if(l+=7,l>c)break}return null}function ly(i,e,t,n,s,r,o,a,c){const l=n-i,h=s-e,u=r-t,f=l*l+h*h+u*u;if(f<1e-12)return 0;const d=((o-i)*l+(a-e)*h+(c-t)*u)/f;return Math.max(0,Math.min(1,d))}class gu{constructor(e,t){this.index=e,this.side=t,this.x=0,this.z=t*3.2,this.vx=0,this.vz=0,this.charge=0,this.charging=!1,this.cooldown=0,this.swing=null,this.lastShotName="",this.reachFlash=0,this.splitStep=0,this._animLastHitter=null}reset(e,t){this.x=e,this.z=t,this.vx=this.vz=0,this.charge=0,this.charging=!1,this.cooldown=0,this.swing=null,this.splitStep=0,this._animLastHitter=null}get speedRatio(){return Math.min(1,Math.hypot(this.vx,this.vz)/Jt.SPEED)}get reachCenterY(){return 1.3}update(e,t,n,s={}){var _,p,m;const r=t.move(this.index),o=t.hitHeld(this.index),a=t.hitReleased(this.index);(_=t.consumeCancel)!=null&&_.call(t)&&(this.charging=!1,this.charge=0,this.swing&&!this.swing.playing&&(this.swing=null));const c=this.charging?Jt.CHARGE_SPEED_SCALE:1,l=r.x*Jt.SPEED*c,h=r.z*Jt.SPEED*c,u=r.x||r.z?Jt.ACCEL:Jt.FRICTION;this.vx+=(l-this.vx)*Math.min(1,u*e/Jt.SPEED),this.vz+=(h-this.vz)*Math.min(1,u*e/Jt.SPEED),this.x+=this.vx*e,this.z+=this.vz*e,this.x=Math.max(-4.3,Math.min(Jt.BOUNDS_X,this.x));const f=this.side>0?Jt.BOUNDS_Z_MIN:-7.6,d=this.side>0?Jt.BOUNDS_Z_MAX:-.35;this.z=Math.max(f,Math.min(d,this.z));const g=n==null?void 0:n.lastHitter;if(n!=null&&n.alive&&g!=null&&g!==this.index&&g!==this._animLastHitter&&(this.splitStep=.2),g!=null&&(this._animLastHitter=g),this.splitStep=Math.max(0,this.splitStep-e),this.cooldown>0&&(this.cooldown-=e),this.reachFlash=Math.max(0,this.reachFlash-e*3),(p=this.swing)!=null&&p.playing&&(this.swing.phase+=e/.3,this.swing.phase>=1&&(this.swing=null)),this.cooldown<=0&&o&&!((m=this.swing)!=null&&m.playing)){this.charging=!0,this.charge=Math.min(1,this.charge+e/ht.CHARGE_TIME);const M=this._predictStyle(n);this.swing={type:M,phase:.04+this.charge*.3,playing:!1}}else o||(this.charging=!1);if(a&&this.cooldown<=0){const M=Math.max(ht.CHARGE_MIN,this.charge),S=t.aimDir?t.aimDir():r,v=t.errorBias?{...s,errorBias:t.errorBias}:s,w=n&&n.alive?this._tryHit(n,M,S,v):null;return this.charging=!1,this.charge=0,this.swing?this.swing.playing=!0:this.swing={type:this._predictStyle(n),phase:.3,playing:!0},w||(this.cooldown=ht.SWING_COOLDOWN),w}return null}_predictStyle(e){return!e||!e.alive||Math.hypot(e.x-this.x,e.z-this.z)>3.5?"overhead":-this.side*(e.x-this.x)<-.28?"backhand":e.y>=ht.SMASH_MIN_HEIGHT?"overhead":e.y<=ht.NET_LIFT_HEIGHT?"low":"drive"}_findContact(e){const t=this.x,n=this.reachCenterY,s=this.z,r=ly(e.px,e.py,e.pz,e.x,e.y,e.z,t,n,s),o=e.px+(e.x-e.px)*r,a=e.py+(e.y-e.py)*r,c=e.pz+(e.z-e.pz)*r,l=Math.hypot(o-t,c-s),h=a>=ht.REACH_LOW&&a<=ht.REACH_HIGH,u=this.side*c>-.25;return l<=ht.REACH_RADIUS&&h&&u?{x:o,y:a,z:c,horiz:l}:null}_tryHit(e,t,n,s){const r=this._findContact(e);if(!r)return null;const o=-this.side,a=n.z*o,c=a>.35?2:a<-.35?0:1,l=n.x>.35?2:n.x<-.35?0:1,h=r.y>=ht.SMASH_MIN_HEIGHT,u=r.y<=ht.NET_LIFT_HEIGHT;let f;s.isServe?f="serve":u?f=c===0?"drop":"lift":h&&t>=ht.SMASH_MIN_CHARGE&&c!==0?f="smash":c===0?f="drop":c===2?f=t>.6?"clear":"drive":f="drive",u&&f==="drop"&&r.y<.7&&(f="lift");const d=vo.DEPTH_Z[c]*-this.side,g=(t-.5)*(c===0?.5:1.5)*-this.side,_=Math.max(0,r.horiz-ht.SWEET_SPOT)*ht.MISS_PENALTY_SCALE,p=(Math.random()-.5)*2*_,m=(Math.random()-.5)*2*_*1.4,M=s.errorBias??{x:0,z:0},S=M.x!==0||M.z!==0;let v={x:vo.LANE_X[l]+p+M.x,z:d+g+m+M.z};if(!S){const P=Ke.HALF_LENGTH-.25;v.z=Math.max(-P,Math.min(P,v.z)),v.x=Math.max(-2.59+.15,Math.min(Ke.HALF_WIDTH_SINGLES-.15,v.x))}const w={x:r.x,y:r.y,z:r.z},b={netHeight:Ke.NET_HEIGHT_CENTER,netClearance:.05};let A=null;if(f==="smash"){const P=52+t*52;A=cy(w,v,P,b)}return A||(A=Lo(w,v,sr[f].elevation,b)),A||(A=Lo(w,{x:0,z:-this.side*5.4},sr.clear.elevation,b)),A?(this.lastShotName=sr[f].name,this.reachFlash=1,{hitter:this.index,style:f,styleName:sr[f].name,charge:t,quality:1-Math.min(1,r.horiz/ht.REACH_RADIUS),from:w,aim:{x:n.x,z:n.z},target:{x:v.x,z:v.z},velocity:A.velocity,predicted:A.result}):null}serve(e,t){const n=-this.side,s=e.z*n,r=s>.35?2:s<-.35?0:1,o=e.x>.35?2:e.x<-.35?0:1,a={x:this.x+.35*(this.side>0?-1:1),y:Ui.SERVE_HEIGHT,z:this.z},c={x:vo.LANE_X[o]*.85,z:vo.DEPTH_Z[r]*(.65+t*.55)*-this.side},l=Ke.HALF_LENGTH-.4;c.z=Math.max(-l,Math.min(l,c.z));const h=Lo(a,c,sr.serve.elevation,{netHeight:Ke.NET_HEIGHT_CENTER,netClearance:.1});return h?(this.lastShotName="发球",{hitter:this.index,style:"serve",styleName:"发球",charge:t,quality:1,from:a,velocity:h.velocity,predicted:h.result}):null}animState(){var s,r;const e=Math.max(0,Math.min(1,((s=this.swing)==null?void 0:s.phase)??0)),t=((r=this.swing)==null?void 0:r.type)==="low"?Math.sin(e*Math.PI):0,n=this.splitStep>0?Math.sin((1-this.splitStep/.2)*Math.PI):0;return{speedRatio:this.speedRatio,crouch:this.charging?.62:.3+this.speedRatio*.12,swing:this.swing,lunge:t,splitStep:Math.max(0,n),moveX:-this.side*this.vx/Jt.SPEED,moveZ:-this.side*this.vz/Jt.SPEED}}}const Dt={READY:"ready",SERVE:"serve",RALLY:"rally",POINT:"point",GAMEOVER:"gameover"};function hy(i){const e=Math.min(1,Math.abs(i)/Ke.HALF_WIDTH_DOUBLES);return Ke.NET_HEIGHT_CENTER+(Ke.NET_HEIGHT_POST-Ke.NET_HEIGHT_CENTER)*e*e}class uy{constructor(e){this.players=e,this.ball={x:0,y:1.2,z:3,vx:0,vy:0,vz:0,px:0,py:1.2,pz:3,alive:!1},this.score=[0,0],this.server=0,this.phase=Dt.READY,this.phaseTimer=0,this.lastHitter=-1,this.rallyHits=0,this.longestRally=0,this.events=[],this.lastLanding=null,this.rallyHistory=[],this.pointReason="",this.pointWinner=-1,this.winner=-1,this.maxRallySpeed=0,this.matchMaxSpeed=0,this.targetPoints=Ui.POINTS_TO_WIN}emit(e){this.events.push(e)}drainEvents(){const e=this.events;return this.events=[],e}servePositions(){const e=this.server,t=this.players[e],n=this.players[1-e],s=this.score[e]%2===0,r=t.side>0?1:-1,o=s?r:-r;return{server:{x:o*1.15,z:t.side*2.55},receiver:{x:-o*1.25,z:n.side*3.7}}}startMatch(e=Ui.POINTS_TO_WIN){this.score=[0,0],this.server=0,this.winner=-1,this.longestRally=0,this.matchMaxSpeed=0,this.rallyHistory=[],this.targetPoints=e,this.toServe()}toServe(){const e=this.servePositions();this.players[this.server].reset(e.server.x,e.server.z),this.players[1-this.server].reset(e.receiver.x,e.receiver.z),this.phase=Dt.SERVE,this.phaseTimer=Ui.SERVE_DELAY,this.lastHitter=-1,this.rallyHits=0,this.maxRallySpeed=0,this.ball.alive=!1,this.lastLanding=null,this._placeServeBall(),this.emit({type:"serve-ready",server:this.server})}_placeServeBall(){const e=this.players[this.server],t=this.ball;t.x=e.x+(e.side>0?-.34:.34),t.y=Ui.SERVE_HEIGHT,t.z=e.z-e.side*.12,t.px=t.x,t.py=t.y,t.pz=t.z,t.vx=t.vy=t.vz=0}applyShot(e){const t=this.ball;t.x=e.from.x,t.y=e.from.y,t.z=e.from.z,t.px=t.x,t.py=t.y,t.pz=t.z,t.vx=e.velocity.x,t.vy=e.velocity.y,t.vz=e.velocity.z,t.alive=!0,this.lastHitter=e.hitter,this.rallyHits++,this.phase=Dt.RALLY;const n=Math.hypot(t.vx,t.vy,t.vz);this.maxRallySpeed=Math.max(this.maxRallySpeed,n),this.matchMaxSpeed=Math.max(this.matchMaxSpeed,n),this.emit({type:"hit",shot:e,speed:n})}_stepBall(e){const t=this.ball;t.px=t.x,t.py=t.y,t.pz=t.z;let n=e;for(;n>1e-9&&t.alive;){const s=Math.min(Ct.SUBSTEP*2,n),r=t.x,o=t.y,a=t.z;if($s(t,s),n-=s,a*t.z<=0&&a!==t.z){const c=a/(a-t.z),l=r+(t.x-r)*c,h=o+(t.y-o)*c;if(Math.abs(l)>Ke.HALF_WIDTH_DOUBLES){this._awardAgainst(this.lastHitter,"绕出网柱外侧"),t.alive=!1;return}if(h<=hy(l)){t.x=l,t.y=h,t.z=a>0?.05:-.05,t.vx*=.12,t.vy=Math.min(0,t.vy)*.2,t.vz=-Math.sign(t.vz)*.35,this.emit({type:"net-hit",x:l,y:h}),this._awardAgainst(this.lastHitter,"挂网"),t.alive=!1;return}}if(t.y<=Ct.RADIUS&&t.vy<0){const c=(o-Ct.RADIUS)/(o-t.y||1),l=r+(t.x-r)*c,h=a+(t.z-a)*c;t.x=l,t.y=Ct.RADIUS,t.z=h,t.vx=t.vy=t.vz=0,t.alive=!1,this._resolveLanding(l,h);return}if(Math.abs(t.x)>13||Math.abs(t.z)>20||t.y>18){t.alive=!1,this._awardAgainst(this.lastHitter,"打飞出界");return}}}_resolveLanding(e,t){const n=Math.abs(e)<=Ke.HALF_WIDTH_SINGLES&&Math.abs(t)<=Ke.HALF_LENGTH,s=t>0?0:1,r=this.lastHitter;if(this.lastLanding={x:e,z:t,inBounds:n},this.emit({type:"land",x:e,z:t,inBounds:n}),r<0){this._awardAgainst(this.server,"发球失误");return}s===r?this._awardAgainst(r,n?"未过网":"未过网出界"):n?this._award(r,this.rallyHits<=1?"发球直接得分":"落点得分"):this._awardAgainst(r,"出界")}_award(e,t){if(this.phase===Dt.POINT||this.phase===Dt.GAMEOVER)return;this.score[e]++,this.server=e,this.pointWinner=e,this.pointReason=t,this.longestRally=Math.max(this.longestRally,this.rallyHits),this.rallyHistory.push(this.rallyHits),this.phase=Dt.POINT,this.phaseTimer=1.7,this.emit({type:"point",winner:e,reason:t,score:[...this.score]});const[n,s]=this.score,r=Math.abs(n-s),o=Math.max(n,s);(o>=this.targetPoints&&r>=Ui.WIN_BY||o>=Ui.HARD_CAP)&&(this.winner=n>s?0:1,this.phase=Dt.GAMEOVER,this.emit({type:"gameover",winner:this.winner,score:[...this.score]}))}_awardAgainst(e,t){this._award(e===0?1:0,t)}update(e,t){const n=this.ball;if(this.phase===Dt.SERVE){this.phaseTimer-=e;const s=this.players[this.server];this.players[1-this.server].update(e,t[1-this.server],null);const o=this.phaseTimer<=0,a=t[this.server],c=a.move(this.server),l=a.aimDir?a.aimDir():c;if(s.x+=c.x*Jt.SPEED*.35*e,s.x=Math.max(-2.2,Math.min(2.2,s.x)),o&&a.hitHeld(this.server)&&(s.charging=!0,s.charge=Math.min(1,s.charge+e/ht.CHARGE_TIME),s.swing={type:"serve",phase:.04+s.charge*.3,playing:!1}),o&&a.hitReleased(this.server)){const h=s.serve(l,Math.max(.25,s.charge));s.charging=!1,s.charge=0,s.swing&&(s.swing.playing=!0),h&&this.applyShot(h)}this._placeServeBallIfIdle();return}if(this.phase===Dt.RALLY){this._stepBall(e);let s=!1;for(let r=0;r<2;r++){const o=this.players[r],a=!s&&n.alive&&this.lastHitter!==r,c=o.update(e,t[r],a?n:null);c&&a&&(this.applyShot(c),s=!0)}return}if(this.phase===Dt.POINT){this.phaseTimer-=e;for(let s=0;s<2;s++)this.players[s].update(e,t[s],null);this.phaseTimer<=0&&this.toServe();return}if(this.phase===Dt.GAMEOVER||this.phase===Dt.READY)for(let s=0;s<2;s++)this.players[s].update(e,t[s],null)}_placeServeBallIfIdle(){this.phase===Dt.SERVE&&this._placeServeBall()}get serveReady(){return this.phase===Dt.SERVE&&this.phaseTimer<=0}}const jo={casual:{name:"休闲",reaction:.34,speed:.7,aimError:.95,smash:.14,anticipate:.55,errorRate:.26},normal:{name:"普通",reaction:.2,speed:.87,aimError:.52,smash:.34,anticipate:.78,errorRate:.12},pro:{name:"高手",reaction:.1,speed:1,aimError:.2,smash:.62,anticipate:.95,errorRate:.04}};function fy(i,e,t,n,s){const r={x:i.x,y:i.y,z:i.z,vx:i.vx,vy:i.vy,vz:i.vz},o=Ct.SUBSTEP*8;let a=0,c=null,l=null;for(;a<4.5&&($s(r,o),a+=o,!(r.y<=Ct.RADIUS));)if(e*r.z>.35&&r.vy<0&&r.y<=ht.REACH_HIGH-.35&&r.y>=.35){const u=Math.hypot(r.x-t,r.z-n)-ht.REACH_RADIUS*.75,f=Math.max(0,u)/s;!c&&f<=a&&(c={x:r.x,z:r.z,t:a,y:r.y}),l={x:r.x,z:r.z,t:a,y:r.y}}return c??l}class _u{constructor(e,t){this.inner=e,this.player=t,this.enabled=!0,this.plan=null,this.replanTimer=0,this._steer={x:0,z:0}}update(e,t){if(!this.enabled)return;if(this._passthrough=t.phase!=="rally",this._passthrough){this.plan=null;return}const n=this.player,s=t.ball,r=s.alive&&t.lastHitter!==n.index;let o;r?(this.replanTimer-=e,(!this.plan||this.replanTimer<=0)&&(this.plan=fy(s,n.side,n.x,n.z,Jt.SPEED),this.replanTimer=.06),o=this.plan?{x:this.plan.x,z:this.plan.z+n.side*.28}:{x:0,z:n.side*3.1}):(this.plan=null,o={x:0,z:n.side*3.1});const a=n.index,c=this.inner.move(a),l=o.x-n.x+c.x*.9,h=o.z-n.z+c.z*.9,u=Math.hypot(l,h);this._steer=u<.1?{x:0,z:0}:{x:l/u*Math.min(1,u/.4),z:h/u*Math.min(1,u/.4)}}move(e){return!this.enabled||this._passthrough?this.inner.move(e):{...this._steer}}aimDir(){const e=this.inner;return e.aimDir?e.aimDir():e.move(this.player.index)}consumeCancel(){var e,t;return((t=(e=this.inner).consumeCancel)==null?void 0:t.call(e))??!1}hitHeld(e){return this.inner.hitHeld(e)}hitPressed(e){return this.inner.hitPressed(e)}hitReleased(e){return this.inner.hitReleased(e)}endFrame(){}}class Ja{constructor(e,t,n="normal"){this.player=e,this.vin=t,this.setDifficulty(n),this.plan=null,this.planAge=0,this.replanTimer=0,this.reactionTimer=0,this.desiredCharge=.6,this.wantSmash=!1,this.intentDecided=!1,this.aimBias={x:0,z:0},this.serveTimer=0}setDifficulty(e){this.difficultyKey=e,this.cfg=jo[e]??jo.normal}_predictIntercept(e){const t=this.player.side,n={x:e.x,y:e.y,z:e.z,vx:e.vx,vy:e.vy,vz:e.vz},s=Ct.SUBSTEP*8,r=Jt.SPEED*this.cfg.speed;let o=0,a=null,c=null,l=null;for(;o<4.5;){if($s(n,s),o+=s,n.y<=Ct.RADIUS){l={x:n.x,z:n.z,t:o};break}if(t*n.z>.35&&n.vy<0&&n.y<=ht.REACH_HIGH-.35&&n.y>=.35){const f=Math.hypot(n.x-this.player.x,n.z-this.player.z)-ht.REACH_RADIUS*.75,d=Math.max(0,f)/r;!a&&d<=o&&(a={x:n.x,z:n.z,t:o,y:n.y}),c={x:n.x,z:n.z,t:o,y:n.y}}}const h=a??c;return h?{...h,ground:l}:l?{x:l.x,z:l.z,t:l.t,y:0,ground:l}:null}_willLandOut(e){const t=e==null?void 0:e.ground;return t?Math.abs(t.x)>Ke.HALF_WIDTH_SINGLES+.12||Math.abs(t.z)>Ke.HALF_LENGTH+.12:!1}_chooseAim(e,t){const n=this.cfg,s=e.x>.4?-1:e.x<-.4?1:Math.random()<.5?-1:1,r=Math.abs(e.z),o=r>4?-1:r<2.6?1:Math.random()<.5?-1:1,a=Math.random()<n.anticipate?s:Math.random()<.5?-1:1,c=Math.random()<n.anticipate?o:Math.random()<.5?-1:1,l=this.wantSmash&&t>=ht.SMASH_MIN_HEIGHT;return{lane:a,depth:l?1:c}}_decideIntent(){var t;const e=(((t=this.plan)==null?void 0:t.y)??0)>=ht.SMASH_MIN_HEIGHT;this.wantSmash=e&&Math.random()<this.cfg.smash,this.desiredCharge=this.wantSmash?.88+Math.random()*.12:e?.55+Math.random()*.3:.4+Math.random()*.35,this.intentDecided=!0}update(e,t,n){const s=this.player.index,r=this.player.side,o=t.ball;if(t.phase===Dt.SERVE){if(t.server===s){this.serveTimer+=e;const A=this._chooseAim(n,1.05),P={x:A.lane*.6,z:-r*(A.depth>0?1:-1)*.8},E=t.serveReady&&this.serveTimer>.35+Math.random()*.3,x=t.serveReady&&this.serveTimer>1.05;this.vin.set(x?{x:P.x,z:P.z}:{x:0,z:0},E&&!x)}else{this.serveTimer=0;const A={x:-Math.sign(t.players[t.server].x||1)*.9,z:r*3.5};this.vin.set(this._steer(A),!1)}return}if(t.phase!==Dt.RALLY){this.vin.set({x:0,z:0},!1),this.plan=null,this.planAge=0,this.reactionTimer=0,this.serveTimer=0,this.intentDecided=!1,this.wantSmash=!1,this.desiredCharge=.6;return}if(!(o.alive&&t.lastHitter!==s)){this.plan=null,this.reactionTimer=0,this.intentDecided=!1,this.vin.set(this._steer({x:0,z:r*3.1}),!1);return}if(this.reactionTimer+=e,this.reactionTimer<this.cfg.reaction){this.vin.set({x:0,z:0},!1);return}if(this.planAge+=e,this.replanTimer-=e,!this.plan||this.replanTimer<=0){const A=this._predictIntercept(o);if(A){const P=!this.plan||Math.hypot(A.x-this.plan.x,A.z-this.plan.z)>.12;if(this.plan=A,this.planAge=0,P){const E=this.cfg.aimError;this.aimBias={x:(Math.random()-.5)*E,z:(Math.random()-.5)*E*1.3}}this.intentDecided||this._decideIntent()}this.replanTimer=.08}if(!this.plan){this.vin.set({x:0,z:r*.2},!1);return}if(this._willLandOut(this.plan)&&Math.random()<this.cfg.anticipate){this.vin.set(this._steer({x:this.plan.x*.4,z:r*3}),!1);return}const l={x:this.plan.x+this.aimBias.x*.35,z:this.plan.z+r*.28+this.aimBias.z*.25},h=this._steer(l),u=o.x-this.player.x,f=o.z-this.player.z,d=Math.hypot(u,f),g=Math.hypot(o.vx,o.vy,o.vz),_=Math.max(0,this.plan.t-this.planAge),p=this.desiredCharge*ht.CHARGE_TIME,m=_<=p+.1,M=g*e,S=d-M<=ht.REACH_RADIUS*.92,v=o.y>=ht.REACH_LOW&&o.y<=ht.REACH_HIGH,w=r*o.z>-.2;if(S&&v&&w&&this.vin.hitHeld()){const A=this._chooseAim(n,o.y),P=-r*(A.depth>0?1:-1);if(Math.random()<this.cfg.errorRate){const E=Math.random()<.55;this.vin.errorBias=E?{x:(Math.random()-.5)*1.6,z:-r*(.9+Math.random()*1.1)}:{x:(Math.random()<.5?-1:1)*(1.4+Math.random()*1.2),z:0}}else this.vin.errorBias={x:0,z:0};this.vin.set({x:A.lane*.9,z:P*.9},!1)}else this.vin.set(h,m)}_steer(e){const t=e.x-this.player.x,n=e.z-this.player.z,s=Math.hypot(t,n);if(s<.12)return{x:0,z:0};const r=this.cfg.speed*Math.min(1,s/.45);return{x:t/s*r,z:n/s*r}}}class dy extends yf{constructor(){super();const e=new at;e.deleteAttribute("uv");const t=new Ze({side:qt}),n=new Ze,s=new f0(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new le(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new bm(e,n,6),a=new Ot;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const c=new le(e,Ms(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new le(e,Ms(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new le(e,Ms(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new le(e,Ms(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const f=new le(e,Ms(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new le(e,Ms(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ms(i){return new c0({color:0,emissive:16777215,emissiveIntensity:i})}const Io={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ys{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const py=new kl(-1,1,1,-1,0,1);class my extends Et{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}}const gy=new my;class Gl{constructor(e){this._mesh=new le(gy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,py)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Vf extends Ys{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ks.clone(e.uniforms),this.material=new Xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Gl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class vu extends Ys{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class _y extends Ys{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class vy{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Yn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vf(Io),this.copyPass.material.blending=oi,this.clock=new m0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}vu!==void 0&&(o instanceof vu?n=!0:o instanceof _y&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class xy extends Ys{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ve}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const yy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Gs extends Ys{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new Ve(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new wn(r,o,{type:Yn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new wn(r,o,{type:Yn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new wn(r,o,{type:Yn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=yy;this.highPassUniforms=ks.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ce(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ks.clone(Io.uniforms),this.blendMaterial=new Xt({uniforms:this.copyUniforms,vertexShader:Io.vertexShader,fragmentShader:Io.fragmentShader,blending:Us,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ve,this._oldClearAlpha=1,this._basic=new Yt,this._fsQuad=new Gl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Gs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Gs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Xt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new Xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Gs.BlurDirectionX=new ce(1,0);Gs.BlurDirectionY=new ce(0,1);const Mo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Sy extends Ys{constructor(){super(),this.uniforms=ks.clone(Mo.uniforms),this.material=new a0({name:Mo.name,uniforms:this.uniforms,vertexShader:Mo.vertexShader,fragmentShader:Mo.fragmentShader}),this._fsQuad=new Gl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ju?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Zu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ku?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Qu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ef?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ju&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const cr={broadcast:{pos:new R(0,4.4,10.4),look:new R(0,1.75,-2)},low:{pos:new R(0,2.6,9.4),look:new R(0,1.7,-2.4)},high:{pos:new R(0,6.4,12.8),look:new R(0,1.4,-1)},portrait:{pos:new R(0,8.6,11.6),look:new R(0,.65,-1.7)}},Qa=["broadcast","low","high"],My=3.9,xu=40,Ey=68;function Wf(i,e){const t=i.look.clone().sub(i.pos).normalize(),n=i.pos.clone().negate(),s=Math.max(1,n.dot(t)),r=Math.atan(My/s),o=2*Math.atan(Math.tan(r)/e)*(180/Math.PI);return Xe.clamp(Math.max(o,xu),xu,Ey)}function Ty(i,e={}){const t=new Jx({antialias:e.antialias!==!1,powerPreference:e.powerPreference??"high-performance"});t.setPixelRatio(Math.min(devicePixelRatio,e.dpr??2)),t.setSize(innerWidth,innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=_l,t.toneMapping=xl,t.toneMappingExposure=1.05,t.outputColorSpace=Ut,i.appendChild(t.domElement);const n=new yf;n.background=new Ve(593429),n.fog=new ra(725274,18,48);const s=new Qc(t);n.environment=s.fromScene(new dy,.04).texture,n.environmentIntensity=.38;const r=cr.broadcast,o=innerWidth/innerHeight,a=new fn(Wf(r,o),o,.1,200);a.position.copy(r.pos),a.lookAt(r.look);const c=new vy(t);c.setPixelRatio(Math.min(devicePixelRatio,e.dpr??2)),c.setSize(innerWidth,innerHeight),c.addPass(new xy(n,a));const l=new Gs(new ce(innerWidth,innerHeight),.42,.65,.92);c.addPass(l),c.addPass(new Sy);const h=()=>{document.documentElement.style.setProperty("--vh",`${innerHeight*.01}px`),a.aspect=innerWidth/Math.max(1,innerHeight),a.updateProjectionMatrix(),t.setSize(innerWidth,innerHeight),c.setSize(innerWidth,innerHeight)};return h(),addEventListener("resize",h),addEventListener("orientationchange",()=>setTimeout(h,150)),visualViewport==null||visualViewport.addEventListener("resize",h),{renderer:t,scene:n,camera:a,composer:c,bloom:l,pmrem:s,resize:h}}class by{constructor(e){this.camera=e,this.viewName="broadcast",this.base=cr.broadcast,this.autoPortrait=!0,this.mirror=1,this.offsetX=0,this.zoom=0,this.shake=0,this._look=new R,this.applyViewport(),addEventListener("resize",()=>this.applyViewport()),addEventListener("orientationchange",()=>setTimeout(()=>this.applyViewport(),160))}setView(e){cr[e]&&(this.viewName=e,this.autoPortrait=!1,this.applyViewport())}toggleView(){const e=Qa.indexOf(this.viewName);this.setView(Qa[(e+1)%Qa.length])}applyViewport(){const e=innerWidth/Math.max(1,innerHeight),t=this.autoPortrait&&e<.95?"portrait":this.viewName;this.base=cr[t]??cr.broadcast,this.camera.aspect=e,this.camera.fov=Wf(this.base,e),this.camera.updateProjectionMatrix()}punch(e=1){this.shake=Math.min(1.4,this.shake+e)}update(e,t=0,n=0){const s=Xe.clamp(t*.28,-1.1,1.1);this.offsetX+=(s-this.offsetX)*Math.min(1,e*2.6),this.zoom+=(n*.55-this.zoom)*Math.min(1,e*1.8),this.shake*=Math.exp(-e*7);const r=this.shake*.035,o=(Math.random()-.5)*r,a=(Math.random()-.5)*r,c=this.mirror;this.camera.position.set(this.base.pos.x+this.offsetX+o,this.base.pos.y-this.zoom*.18+a,(this.base.pos.z-this.zoom)*c),this._look.set(this.base.look.x+this.offsetX*.7,this.base.look.y,this.base.look.z*c),this.camera.lookAt(this._look)}}class la extends le{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new fn;const n=this,s=t.color!==void 0?new Ve(t.color):new Ve(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,c=t.shader||la.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,h=new mi,u=new R,f=new R,d=new R,g=new mt,_=new R(0,0,-1),p=new dt,m=new R,M=new R,S=new dt,v=new mt,w=this.camera,b=new wn(r,o,{samples:l,type:Yn}),A=new Xt({name:c.name!==void 0?c.name:"unspecified",uniforms:ks.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});A.uniforms.tDiffuse.value=b.texture,A.uniforms.color.value=s,A.uniforms.textureMatrix.value=v,this.material=A,this.onBeforeRender=function(P,E,x){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(x.matrixWorld),g.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),m.subVectors(f,d),m.dot(u)>0===!0&&this.forceUpdate===!1)return;m.reflect(u).negate(),m.add(f),g.extractRotation(x.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(d),M.subVectors(f,_),M.reflect(u).negate(),M.add(f),w.position.copy(m),w.up.set(0,1,0),w.up.applyMatrix4(g),w.up.reflect(u),w.lookAt(M),w.far=x.far,w.updateMatrixWorld(),w.projectionMatrix.copy(x.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(w.projectionMatrix),v.multiply(w.matrixWorldInverse),v.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(w.matrixWorldInverse),p.set(h.normal.x,h.normal.y,h.normal.z,h.constant);const I=w.projectionMatrix;S.x=(Math.sign(p.x)+I.elements[8])/I.elements[0],S.y=(Math.sign(p.y)+I.elements[9])/I.elements[5],S.z=-1,S.w=(1+I.elements[10])/I.elements[14],p.multiplyScalar(2/p.dot(S)),I.elements[2]=p.x,I.elements[6]=p.y,I.elements[10]=p.z+1-a,I.elements[14]=p.w,n.visible=!1;const H=P.getRenderTarget(),q=P.xr.enabled,V=P.shadowMap.autoUpdate;P.xr.enabled=!1,P.shadowMap.autoUpdate=!1,P.setRenderTarget(b),P.state.buffers.depth.setMask(!0),P.autoClear===!1&&P.clear(),P.render(E,w),P.xr.enabled=q,P.shadowMap.autoUpdate=V,P.setRenderTarget(H);const k=x.viewport;k!==void 0&&P.state.viewport(k),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),n.material.dispose()}}}la.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const Cn={WIDTH:Ke.HALF_WIDTH_DOUBLES*2+Ke.SIDEOFF*2,LENGTH:Ke.LENGTH+Ke.RUNOFF*2};let Xf=112;function Cy(i){Xf=i}function $f(i,e,t=Xf){const n=document.createElement("canvas");return n.width=Math.round(i*t),n.height=Math.round(e*t),{canvas:n,ctx:n.getContext("2d"),pxPerM:t}}function ha(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function wy(){const{canvas:i,ctx:e,pxPerM:t}=$f(Cn.WIDTH,Cn.LENGTH),n=i.width,s=i.height,r=ha(20260802),o=p=>(p+Cn.WIDTH/2)*t,a=p=>(p+Cn.LENGTH/2)*t,c=Ke.HALF_WIDTH_DOUBLES,l=Ke.HALF_WIDTH_SINGLES,h=Ke.HALF_LENGTH;e.fillStyle="#1f5a41",e.fillRect(0,0,n,s),e.fillStyle="#124533",e.fillRect(o(-c),a(-h),c*2*t,h*2*t);for(let p=0;p<52e3;p++){const m=r()*n,M=r()*s,S=r();e.fillStyle=S>.5?`rgba(255,255,255,${.012+r()*.03})`:`rgba(0,40,25,${.015+r()*.035})`,e.fillRect(m,M,1+r()*2,1+r())}e.strokeStyle="rgba(255,255,255,0.016)",e.lineWidth=1;for(let p=0;p<s;p+=5)e.beginPath(),e.moveTo(0,p),e.lineTo(n,p),e.stroke();e.fillStyle="rgba(10,50,35,0.20)";for(let p=1.5;p<Cn.WIDTH;p+=1.5)e.fillRect(o(p-Cn.WIDTH/2),0,1.5,s);for(let p=0;p<22;p++){const m=r()*n,M=r()*s,S=(.8+r()*2.6)*t,v=e.createRadialGradient(m,M,0,m,M,S),w=r()>.45;v.addColorStop(0,w?"rgba(190,255,225,0.075)":"rgba(0,30,20,0.085)"),v.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=v,e.beginPath(),e.arc(m,M,S,0,Math.PI*2),e.fill()}e.save(),e.translate(o(0),a(-h*.52)),e.textAlign="center",e.textBaseline="middle",e.fillStyle="rgba(255,255,255,0.22)",e.font=`bold ${Math.round(.52*t)}px "Arial Black", Arial, sans-serif`,e.fillText("SHUTTLE CLASH",0,0),e.font=`600 ${Math.round(.24*t)}px Arial, sans-serif`,e.fillStyle="rgba(255,255,255,0.16)",e.fillText("WORLD SUPER SERIES",0,Math.round(.44*t)),e.restore();const u=Ke.LINE_WIDTH*t,f=(p,m,M,S)=>{e.fillStyle="#aeb4ae";const v={x:o(p),y:a(m)},w={x:o(M),y:a(S)};Math.abs(m-S)<1e-6?e.fillRect(v.x,v.y-u/2,w.x-v.x,u):e.fillRect(v.x-u/2,v.y,u,w.y-v.y)},d=Ke.SHORT_SERVICE_LINE,g=h-Ke.LONG_SERVICE_INSET;for(const p of[1,-1])f(-c,p*h,c,p*h),f(-c,p*g,c,p*g),f(-c,p*d,c,p*d),f(p*c,-h,p*c,h),f(p*l,-h,p*l,h),f(0,p*d,0,p*h);e.globalAlpha=.05,e.fillStyle="#0d3b28";for(let p=0;p<900;p++)e.fillRect(r()*n,r()*s,1+r()*3,1+r()*2);e.globalAlpha=.045,e.fillStyle="#7fd8b0";for(let p=0;p<260;p++){const m=r()>.5?1:-1,M=o((r()-.5)*4.6),S=a(m*(2+r()*4.2));e.save(),e.translate(M,S),e.rotate((r()-.5)*1.4),e.fillRect(0,0,8+r()*26,1.4),e.restore()}e.globalAlpha=1;const _=new kn(i);return _.colorSpace=Ut,_.anisotropy=16,_}function Ay(){const{canvas:i,ctx:e,pxPerM:t}=$f(Cn.WIDTH,Cn.LENGTH,26),n=i.width,s=i.height,r=ha(7788);e.fillStyle="#b8b8b8",e.fillRect(0,0,n,s);for(let a=0;a<70;a++){const c=r()*n,l=r()*s,h=(.5+r()*3)*t,u=e.createRadialGradient(c,l,0,c,l,h),f=r()>.5;u.addColorStop(0,f?`rgba(0,0,0,${.06+r()*.12})`:`rgba(255,255,255,${.04+r()*.08})`),u.addColorStop(1,"rgba(128,128,128,0)"),e.fillStyle=u,e.beginPath(),e.arc(c,l,h,0,Math.PI*2),e.fill()}const o=new kn(i);return o.anisotropy=8,o}function Ry(){const i=document.createElement("canvas");i.width=2048,i.height=256;const e=i.getContext("2d");e.clearRect(0,0,i.width,i.height);const t=320,n=40,s=i.width/t,r=i.height/n;e.strokeStyle="rgba(238,240,244,0.92)",e.lineWidth=1.5,e.beginPath();for(let l=0;l<=t;l++){const h=l*s;e.moveTo(h,0),e.lineTo(h,i.height)}for(let l=0;l<=n;l++){const h=l*r;e.moveTo(0,h),e.lineTo(i.width,h)}e.stroke();const o=i.height*(.075/.76),a=e.createLinearGradient(0,0,0,o);a.addColorStop(0,"#ffffff"),a.addColorStop(.5,"#e8ebf0"),a.addColorStop(1,"#cdd3db"),e.fillStyle=a,e.fillRect(0,0,i.width,o),e.fillStyle="rgba(150,160,175,0.5)",e.fillRect(0,o-2,i.width,2);const c=new kn(i);return c.colorSpace=Ut,c.anisotropy=16,c}function yu(){const i=document.createElement("canvas");i.width=2048,i.height=192;const e=i.getContext("2d"),t=ha(90210),n=[{bg:"#8e1f28",fg:"#ffffff",text:"CLASH"},{bg:"#13407a",fg:"#eaf2ff",text:"VICTOR"},{bg:"#e6e8ec",fg:"#1a2430",text:"BWF"},{bg:"#0f3d2c",fg:"#c8f0dc",text:"TOUR"},{bg:"#a8560f",fg:"#fff2e0",text:"S1000"},{bg:"#1b2a3a",fg:"#9fc4e8",text:"FINALS"}];let s=0,r=0;for(;s<i.width;){const a=n[r%n.length],c=300+Math.round(t()*90);e.fillStyle=a.bg,e.fillRect(s,0,c,i.height),e.fillStyle="rgba(255,255,255,0.10)",e.fillRect(s,0,c,5),e.fillStyle="rgba(0,0,0,0.28)",e.fillRect(s,i.height-7,c,7),e.fillStyle="rgba(0,0,0,0.42)",e.fillRect(s+c-3,0,3,i.height),e.save(),e.fillStyle=a.fg,e.textAlign="center",e.textBaseline="middle";let l=64;const h=c-34;for(e.font=`bold ${l}px "Arial Black", Arial, sans-serif`;e.measureText(a.text).width>h&&l>18;)l-=2,e.font=`bold ${l}px "Arial Black", Arial, sans-serif`;e.globalAlpha=.9,e.fillText(a.text,s+c/2,i.height/2+2),e.restore(),s+=c,r++}e.globalAlpha=1,e.fillStyle="rgba(0,0,0,0.22)",e.fillRect(0,0,i.width,i.height);const o=new kn(i);return o.colorSpace=Ut,o.wrapS=Xi,o.repeat.set(2,1),o.anisotropy=8,o}function Py(){const i=document.createElement("canvas");i.width=1024,i.height=256;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,i.height);t.addColorStop(0,"#12345a"),t.addColorStop(.55,"#0b2444"),t.addColorStop(1,"#160f2d"),e.fillStyle=t,e.fillRect(0,0,i.width,i.height),e.strokeStyle="rgba(90,190,255,0.22)",e.lineWidth=1;for(let s=0;s<i.width;s+=8)e.beginPath(),e.moveTo(s,0),e.lineTo(s,i.height),e.stroke();e.textAlign="center",e.textBaseline="middle",e.font='bold 96px "Arial Black", Arial, sans-serif',e.fillStyle="rgba(210,238,255,0.95)",e.fillText("SHUTTLE CLASH",i.width/2,i.height/2-18),e.font="600 34px Arial, sans-serif",e.fillStyle="rgba(92,199,255,0.78)",e.fillText("WORLD  SUPER  SERIES",i.width/2,i.height/2+62);const n=new kn(i);return n.colorSpace=Ut,n}function Zo(i,e=1.4){const t=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,t,n).data,r=document.createElement("canvas");r.width=t,r.height=n;const o=r.getContext("2d"),a=o.createImageData(t,n),c=a.data,l=(u,f)=>{const d=((f+n)%n*t+(u+t)%t)*4;return(s[d]*.299+s[d+1]*.587+s[d+2]*.114)/255};for(let u=0;u<n;u++)for(let f=0;f<t;f++){const d=(l(f+1,u)-l(f-1,u))*e,g=(l(f,u+1)-l(f,u-1))*e,_=1/Math.hypot(d,g,1),p=(u*t+f)*4;c[p]=(-d*_*.5+.5)*255,c[p+1]=(g*_*.5+.5)*255,c[p+2]=(_*.5+.5)*255,c[p+3]=255}o.putImageData(a,0,0);const h=new kn(r);return h.wrapS=h.wrapT=Xi,h.anisotropy=8,h}function Dy(){const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(0,0,0,0.85)"),t.addColorStop(.45,"rgba(0,0,0,0.45)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new kn(i)}function Ly(){const i=document.createElement("canvas");i.width=1024,i.height=192;const e=i.getContext("2d"),t=ha(4242);e.fillStyle="#0c0f16",e.fillRect(0,0,i.width,i.height);const n=32,s=1,r=i.width/n,o=i.height/s;for(let l=s-1;l>=0;l--){const h=l*o,u=1;for(let f=0;f<n;f++){const d=f*r,_=(f*7+l*3)%9===0?[34,56,88]:[92,30,39];if(e.fillStyle=`rgb(${_[0]*u|0},${_[1]*u|0},${_[2]*u|0})`,e.fillRect(d+2,h+o*.38,r-4,o*.48),e.fillStyle=`rgba(255,190,190,${.05*u})`,e.fillRect(d+2,h+o*.38,r-4,2),t()<.68){const p=(24+t()*20)*u,m=t()<.16;e.fillStyle=m?`rgb(${p+62|0},${p+56|0},${p+48|0})`:`rgb(${p|0},${p+3|0},${p+8|0})`;const M=d+r*.5;e.beginPath(),e.arc(M,h+o*.31,r*.15,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(M,h+o*.64,r*.29,o*.24,0,0,Math.PI*2),e.fill()}}}e.fillStyle="rgba(4,6,10,0.85)";for(let l=0;l<n;l+=8)e.fillRect(l*r-2,0,5,i.height);for(let l=0;l<8;l++){const h=t()*i.width,u=16+t()*(i.height-32),f=e.createRadialGradient(h,u,0,h,u,6);f.addColorStop(0,"rgba(180,200,225,0.34)"),f.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=f,e.beginPath(),e.arc(h,u,6,0,Math.PI*2),e.fill()}const a=e.createLinearGradient(0,i.height*.66,0,i.height);a.addColorStop(0,"rgba(6,8,12,0)"),a.addColorStop(1,"rgba(6,8,12,1)"),e.fillStyle=a,e.fillRect(0,i.height*.66,i.width,i.height*.34);const c=new kn(i);return c.colorSpace=Ut,c.wrapS=Xi,c.anisotropy=8,c}const Gt={WIDTH:30,LENGTH:46,HEIGHT:12.5};function Iy(i){const e=new yt;i.add(e);const t=new le(new on(Gt.WIDTH,Gt.LENGTH),new Ze({color:3426138,roughness:.88,metalness:.02}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,e.add(t);const n=wy(),s=new Nf({map:n,normalMap:Zo(n.image,1.1),normalScale:new ce(.55,.55),roughnessMap:Ay(),roughness:1,metalness:0,clearcoat:0,clearcoatRoughness:.45,envMapIntensity:.5}),r=new le(new on(Cn.WIDTH,Cn.LENGTH),s);r.rotation.x=-Math.PI/2,r.position.y=.004,r.receiveShadow=!0,e.add(r);const o=new la(new on(Cn.WIDTH,Cn.LENGTH),{textureWidth:1024,textureHeight:1024,color:9675444,clipBias:.003});{const Z=o.material;Z.transparent=!0,Z.depthWrite=!1,Z.uniforms.uStrength={value:1.2},Z.vertexShader=`
      uniform mat4 textureMatrix;
      varying vec4 vUv;
      varying vec3 vWorldPos;
      void main() {
        vUv = textureMatrix * vec4(position, 1.0);
        vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,Z.fragmentShader=`
      uniform vec3 color;
      uniform sampler2D tDiffuse;
      uniform float uStrength;
      varying vec4 vUv;
      varying vec3 vWorldPos;
      void main() {
        vec4 base = texture2DProj(tDiffuse, vUv);
        vec3 viewDir = normalize(cameraPosition - vWorldPos);
        // Floor normal is always +Y, so viewDir.y IS cos(incidence).
        // Schlick-ish: grazing angles reflect hard, top-down barely at all.
        float fres = pow(1.0 - clamp(viewDir.y, 0.0, 1.0), 6.0);
        gl_FragColor = vec4(base.rgb * color, fres * uStrength);
      }`,Z.needsUpdate=!0}o.rotation.x=-Math.PI/2,o.position.y=.0065,o.renderOrder=1,o.visible=!1,e.add(o);const a=new Yt({color:12178634,transparent:!0,opacity:.16,depthWrite:!1,fog:!1}),c=new yt;for(const Z of[-5.2,-1.75,1.75,5.2])for(const re of[-3.3,-1.1,1.1,3.3]){const ge=new le(new on(1.35,.075),a);ge.rotation.x=-Math.PI/2,ge.position.set(re,.009,Z),ge.renderOrder=2,c.add(ge)}e.add(c);const l=Ke.HALF_WIDTH_DOUBLES*2,h=new on(l,Ke.NET_DEPTH,72,6);{const Z=h.attributes.position,re=Ke.NET_HEIGHT_POST-Ke.NET_HEIGHT_CENTER;for(let ge=0;ge<Z.count;ge++){const Ee=Z.getX(ge)/(l/2);Z.setY(ge,Z.getY(ge)-re*(1-Ee*Ee))}h.computeVertexNormals()}const u=new le(h,new Ze({map:Ry(),transparent:!0,alphaTest:.06,side:$t,roughness:.75,metalness:0}));u.position.set(0,Ke.NET_HEIGHT_POST-Ke.NET_DEPTH/2,0),u.castShadow=!0,e.add(u);const f=new Ze({color:2830392,roughness:.35,metalness:.85});for(const Z of[1,-1]){const re=new le(new dn(.038,.045,Ke.NET_HEIGHT_POST,16),f);re.position.set(Z*Ke.HALF_WIDTH_DOUBLES,Ke.NET_HEIGHT_POST/2,0),re.castShadow=!0,e.add(re);const ge=new le(new dn(.24,.28,.06,20),f);ge.position.set(Z*Ke.HALF_WIDTH_DOUBLES,.03,0),ge.receiveShadow=!0,e.add(ge)}{const Z=new yt,re=new Ze({color:1454159,roughness:.3,metalness:.8}),ge=new Ze({color:2372680,roughness:.72,metalness:.05});for(const te of[-.32,.32])for(const xe of[-.28,.28]){const Te=new le(new dn(.035,.045,1.55,8),re);Te.position.set(te,.775,xe),Te.castShadow=!0,Z.add(Te)}const Ee=new le(new at(.78,.07,.68),re);Ee.position.y=1.58,Ee.castShadow=!0,Z.add(Ee);const ze=new le(new at(.62,.09,.52),ge);ze.position.y=1.66,ze.castShadow=!0,Z.add(ze);const Ye=new le(new at(.62,.62,.08),ge);Ye.position.set(0,1.99,-.24),Ye.castShadow=!0,Z.add(Ye);const K=new le(new at(.5,.05,.34),re);K.position.set(0,1.42,.38),K.rotation.x=-.22,Z.add(K),Z.scale.setScalar(.86),Z.position.set(Ke.HALF_WIDTH_DOUBLES+1.35,0,0),e.add(Z)}const d=Ly(),g=new Ze({color:2371645,roughness:.82,metalness:.04}),_=new Ze({map:d,roughness:1,metalness:0,side:$t}),p=(Z,re,ge,Ee,ze)=>{for(let Ye=0;Ye<Ee;Ye++){const K=.5+Ye*.52,te=ge+Ye*1.15,xe=Z==="x"?new at(1.15,K,ze):new at(ze,K,1.15),Te=new le(xe,g);Te.position.set(Z==="x"?re*(te+.575):0,K/2,Z==="z"?re*(te+.575):0),Te.receiveShadow=!0,e.add(Te);const Ce=Z==="x"?new on(ze,1.25):new on(ze,1.25),He=new le(Ce,_.clone());He.material.map=d.clone(),He.material.map.repeat.set(ze/6,1),He.material.map.offset.set(Math.random(),0),He.material.map.needsUpdate=!0,Z==="x"?(He.position.set(re*(te+.2),K+.5,0),He.rotation.y=re>0?-Math.PI/2:Math.PI/2):(He.position.set(0,K+.5,re*(te+.2)),He.rotation.y=re>0?Math.PI:0),e.add(He)}};p("x",1,8.8,7,Gt.LENGTH-8),p("x",-1,8.8,7,Gt.LENGTH-8),p("z",1,13,7,Gt.WIDTH-6),p("z",-1,13,7,Gt.WIDTH-6);const m=yu(),M=new Ze({map:m,normalMap:Zo(m.image,1.6),normalScale:new ce(.5,.5),roughness:.5,metalness:.06});M.normalMap.repeat.copy(m.repeat);const S=new Ze({color:10134704,roughness:.42,metalness:.5}),v=.92,w=Ke.HALF_WIDTH_DOUBLES+2.35,b=Ke.HALF_LENGTH+2.55;for(const Z of[1,-1]){const re=new le(new at(.09,v,b*2),M);re.position.set(Z*w,v/2,0),re.castShadow=!0,re.receiveShadow=!0,e.add(re);const ge=new le(new at(.14,.05,b*2),S);ge.position.set(Z*w,v+.02,0),e.add(ge);const Ee=new le(new at(w*2,v,.09),M);Ee.position.set(0,v/2,Z*b),Ee.castShadow=!0,Ee.receiveShadow=!0,e.add(Ee);const ze=new le(new at(w*2,.05,.14),S);ze.position.set(0,v+.02,Z*b),e.add(ze)}const A=new Ze({color:1516078,roughness:.88,side:qt}),P=new le(new at(Gt.WIDTH,Gt.HEIGHT,Gt.LENGTH),A);P.position.y=Gt.HEIGHT/2,e.add(P);const E=new Ze({color:529183,roughness:1});for(const Z of[1,-1]){const re=new le(new on(Gt.WIDTH-2,9),E);re.position.set(0,4.5,Z*(Gt.LENGTH/2-.35)),re.rotation.y=Z>0?Math.PI:0,e.add(re)}const x=Py();for(const Z of[1,-1]){const re=new le(new on(13.4,2.7),new Yt({map:Z>0?x:x.clone(),color:13886709,fog:!1}));re.position.set(0,5.65,Z*(Gt.LENGTH/2-.72)),re.rotation.y=Z>0?Math.PI:0,e.add(re);const ge=new le(new at(14.2,3.35,.18),new Ze({color:2504005,roughness:.34,metalness:.72}));ge.position.set(0,5.65,Z*(Gt.LENGTH/2-.6)),e.add(ge);const Ee=Z*(Gt.LENGTH/2-.48);for(const[ze,Ye]of[[-7.28,2982143],[7.28,16725597]]){const K=new le(new at(.16,3.42,.12),new Yt({color:Ye,fog:!1}));K.position.set(ze,5.65,Ee),e.add(K)}}const D=new Ze({color:2764600,roughness:.5,metalness:.7}),I=new Yt({color:16774882,fog:!1}),H=new Yt({color:16771517,transparent:!0,opacity:.16,fog:!1,blending:Us,depthWrite:!1}),q=7.4;for(const Z of[-13,-6.5,0,6.5,13]){const re=new le(new at(Gt.WIDTH-6,.26,.34),D);re.position.set(0,q,Z),e.add(re);for(const ge of[-7,-2.4,2.4,7]){const Ee=new le(new dn(.035,.035,1,6),D);Ee.position.set(ge,q+.6,Z),e.add(Ee)}for(const ge of[-6.2,-2.1,2.1,6.2]){const Ee=new le(new at(2.1,.16,.72),I);Ee.position.set(ge,q-.2,Z),e.add(Ee);const ze=new le(new at(2.6,.5,1.15),H);ze.position.copy(Ee.position),e.add(ze)}}{const Z=yu();Z.repeat.set(8,1);const re=new Ze({map:Z,roughness:.62,metalness:.05});for(const ge of[1,-1]){const Ee=new le(new at(.12,1,Gt.LENGTH-8),re);Ee.position.set(ge*(Gt.WIDTH/2-1.2),5.9,0),e.add(Ee)}}const V=new Ff(11982580,3813416,.62);i.add(V);const k=new _r(16773336,2.45);k.position.set(6.5,15,5.5),k.castShadow=!0,k.shadow.mapSize.set(2048,2048),k.shadow.camera.left=-12,k.shadow.camera.right=12,k.shadow.camera.top=14,k.shadow.camera.bottom=-14,k.shadow.camera.near=1,k.shadow.camera.far=40,k.shadow.bias=-6e-4,k.shadow.normalBias=.02,k.shadow.radius=6,i.add(k),i.add(k.target);const J=new _r(12114431,.58);J.position.set(-8,11,-7),i.add(J);const $=new _r(16765595,.88);return $.position.set(0,5.5,-16),i.add($),{group:e,floor:r,net:u,key:k,reflector:o,fixtureReflections:c,lights:[V,k,J,$],setReflector:Z=>{const re=typeof Z=="number"?Z>0:!!Z;o.visible=re,re&&typeof Z=="number"&&o.getRenderTarget().setSize(Z,Z)}}}function tl(i,e=.7,t=.5){const n=new le(new on(e,e),new Yt({map:Dy(),transparent:!0,opacity:t,depthWrite:!1}));return n.rotation.x=-Math.PI/2,n.position.y=.012,n.renderOrder=2,i.add(n),n}const gt=Math.PI/180,ut={hipHeight:.92,torsoLen:.52,headR:.115,upperArm:.3,foreArm:.27,thigh:.44,shin:.42,shoulderX:.19,hipX:.11},Su={overhead:[[0,145,-98,-20,-62,-32,-12,-22],[.32,172,-52,-5,-30,-22,-8,-10],[.5,208,-8,10,8,-10,-2,4],[.57,216,-3,12,16,-8,0,8],[1,318,-38,22,52,-25,8,34]],low:[[0,58,-46,18,-34,-25,-8,-18],[.34,18,-24,22,-16,-20,-4,-8],[.5,-30,-6,25,4,-13,0,6],[.57,-40,-4,24,10,-10,2,10],[1,-112,-46,4,34,-24,6,28]],drive:[[0,96,-74,4,-48,-36,-10,-32],[.3,52,-46,3,-24,-28,-6,-18],[.48,-54,-12,2,8,-16,0,0],[.55,-66,-8,2,16,-12,2,8],[1,-142,-54,0,50,-28,8,38]],backhand:[[0,72,-108,-5,58,-54,18,58],[.32,94,-72,0,38,-46,12,42],[.5,18,-10,7,-8,-24,4,12],[.57,4,-5,7,-18,-18,2,2],[1,-92,-58,8,-48,-34,-8,-42]],serve:[[0,48,-32,4,-20,-20,-5,-16],[.34,12,-18,3,-8,-16,-3,-8],[.5,-28,-6,2,2,-12,0,2],[.57,-34,-5,1,6,-10,1,6],[1,-78,-24,-2,18,-18,4,20]]};function Uy(i,e){let t=i[0],n=i[i.length-1];for(let a=0;a<i.length-1;a++)if(e>=i[a][0]&&e<=i[a+1][0]){t=i[a],n=i[a+1];break}const s=n[0]-t[0]||1,r=Xe.clamp((e-t[0])/s,0,1),o=r*r*(3-2*r);return{upper:Xe.lerp(t[1],n[1],o),fore:Xe.lerp(t[2],n[2],o),lean:Xe.lerp(t[3],n[3],o),twist:Xe.lerp(t[4],n[4],o),upperZ:Xe.lerp(t[5],n[5],o),elbowZ:Xe.lerp(t[6],n[6],o),racketYaw:Xe.lerp(t[7],n[7],o)}}function Ny(i,e){const t=document.createElement("canvas");t.width=256,t.height=256;const n=t.getContext("2d"),s=o=>`#${o.toString(16).padStart(6,"0")}`;n.fillStyle=s(i),n.fillRect(0,0,256,256),n.fillStyle=s(e),n.fillRect(0,0,22,256),n.fillRect(234,0,22,256),n.fillStyle="rgba(255,255,255,0.16)",n.fillRect(22,0,4,256),n.fillRect(230,0,4,256),n.fillStyle="rgba(10,14,22,0.5)",n.fillRect(0,0,256,16),n.fillStyle=s(e),n.fillRect(0,16,256,6),n.fillStyle="rgba(10,14,22,0.32)",n.fillRect(0,242,256,14),n.fillStyle="rgba(255,255,255,0.5)",n.beginPath(),n.moveTo(128,62),n.lineTo(140,78),n.lineTo(128,74),n.lineTo(116,78),n.closePath(),n.fill();for(let o=0;o<2600;o++)n.fillStyle=Math.random()>.5?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.04)",n.fillRect(Math.random()*256,Math.random()*256,2,2);const r=new kn(t);return r.colorSpace=Ut,r}function Fy(i){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d");t.clearRect(0,0,128,128),t.fillStyle="rgba(255,255,255,0.92)",t.font='bold 104px "Arial Black", Arial, sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText(String(i),64,70);const n=new kn(e);return n.colorSpace=Ut,n}function Eo(i,e,t){const n=new Gi(e,Math.max(.01,i-e*2),4,10),s=new le(n,t);s.position.y=-i/2,s.castShadow=!0;const r=new yt;return r.add(s),r}function Oy(i){const e=new yt;e.name="racket",e.userData.spec={headWidth:.22,headLength:.29,shaftDiameter:.007,strings:[21,23]};const t=new Ze({color:i.frame,roughness:.22,metalness:.85}),n=new Ze({color:2237996,roughness:.9}),s=new le(new dn(.017,.019,.13,8),n);s.position.y=-.065,e.add(s);const r=new le(new dn(.0035,.0035,.22,8),t);r.position.y=.11,e.add(r);const o=new yt;o.name="racketHead",o.position.y=.365;const a=[];for(let g=0;g<64;g++){const _=g/64*Math.PI*2,p=Math.sin(_)*.145,m=.105*(1+.08*Math.sin(_));a.push(new R(Math.cos(_)*m,p,0))}const c=new Tf(a,!0,"centripetal"),l=new le(new zl(c,64,.006,8,!0),t);o.add(l);const h=new Ll({color:14673646,transparent:!0,opacity:.55}),u=[];for(let g=-10;g<=10;g++){const _=g/10*.098,p=Math.sqrt(Math.max(0,1-(_/.105)**2));u.push(new R(_,-.145*p*.96,.001),new R(_,.145*p*1.04,.001))}for(let g=-11;g<=11;g++){const _=g/11*.136,p=.105*Math.sqrt(Math.max(0,1-(_/.145)**2))*(1+.08*_/.145);u.push(new R(-p,_,.001),new R(p,_,.001))}o.add(new Sf(new Et().setFromPoints(u),h)),e.add(o);const f=new Pf().moveTo(-.025,.22).lineTo(.025,.22).lineTo(.007,.25).lineTo(-.007,.25).closePath(),d=new le(new Ol(f,{depth:.012,bevelEnabled:!1}),t);return d.name="racketTee",d.position.z=-.006,e.add(d),e.traverse(g=>{g.isMesh&&(g.castShadow=!0)}),e}class Mu{constructor(e){this.palette=e;const t=new Ze({color:e.skin,roughness:.58,metalness:.02}),n=Ny(e.jersey,e.accent??e.shorts),s=new Ze({map:n,normalMap:Zo(n.image,1.2),normalScale:new ce(.18,.18),roughness:.86,metalness:0}),r=new Ze({color:e.shorts,roughness:.8,metalness:0}),o=new Ze({color:e.shoe,roughness:.32,metalness:.08}),a=new Ze({color:15922424,roughness:.9}),c=new Ze({color:e.accent??15922424,roughness:.85}),l=new Ze({color:e.jersey,roughness:.86});this.root=new yt,this.hips=new yt,this.hips.position.y=ut.hipHeight,this.root.add(this.hips),this.torso=new yt,this.hips.add(this.torso);const h=new le(new Gi(.155,ut.torsoLen-.24,4,12),s);h.position.y=ut.torsoLen/2,h.scale.z=.72,h.castShadow=!0,this.torso.add(h);const u=new le(new Gi(.135,.1,4,12),r);u.position.y=-.02,u.scale.z=.78,u.castShadow=!0,this.torso.add(u);const f=new le(new on(.2,.2),new Ze({map:Fy(e.number??1),transparent:!0,roughness:.7,depthWrite:!1}));f.userData.noOutline=!0,f.position.set(0,ut.torsoLen*.6,-.118),f.rotation.y=Math.PI,this.torso.add(f);for(const E of[-1,1]){const x=new le(new at(.12,.026,.012),c);x.position.set(E*.052,ut.torsoLen*.66,.119),x.rotation.z=E*.36,x.userData.noOutline=!0,this.torso.add(x)}const d=new le(new at(.23,.028,.012),c);d.position.set(0,ut.torsoLen*.88,-.119),d.userData.noOutline=!0,this.torso.add(d),this.head=new yt,this.head.position.y=ut.torsoLen+.05;const g=new le(new dn(.048,.055,.08,10),t);g.position.y=-.05,this.head.add(g);const _=new le(new Un(ut.headR,20,16),t);_.scale.set(.92,1.08,1),_.position.y=ut.headR*.55,_.castShadow=!0,this.head.add(_);const p=new Ze({color:1709330,roughness:.85}),m=new le(new Un(ut.headR*1.02,18,14,0,Math.PI*2,0,Math.PI*.62),p);m.position.y=ut.headR*.6,m.scale.set(.95,1.05,1.02),this.head.add(m);const M=new Ze({color:15911590,roughness:.66}),S=new le(new Un(ut.headR*1.015,20,14,Math.PI*.1,Math.PI*.8,Math.PI*.26,Math.PI*.5),M);S.position.y=ut.headR*.55,S.scale.set(.93,1.08,1.01),this.head.add(S);const v=new Yt({color:2366488});for(const E of[-1,1]){const x=new le(new Un(ut.headR*.135,10,8),v);x.position.set(E*ut.headR*.34,ut.headR*.6,ut.headR*.965),x.scale.set(1,.66,.55),x.userData.noOutline=!0,this.head.add(x)}const w=new le(new Un(ut.headR*.52,12,10),p);w.position.set(0,ut.headR*.3,-.115*.72),w.scale.set(1.1,.85,.7),this.head.add(w);const b=new le(new aa(ut.headR*.97,ut.headR*.13,6,20),c);b.position.y=ut.headR*.72,b.rotation.x=Math.PI/2,b.scale.set(.95,1,1.05),this.head.add(b),this.torso.add(this.head);const A=E=>{const x=new yt;x.position.set(E*ut.shoulderX,ut.torsoLen-.06,0);const D=Eo(ut.upperArm,.048,t);x.add(D);const I=new le(new Gi(.059,.075,4,10),l);I.position.y=-.065,I.castShadow=!0,x.add(I);const H=new le(new dn(.06,.055,.026,10),c);H.position.y=-.116,H.userData.noOutline=!0,x.add(H);const q=new yt;q.position.y=-.3,D.add(q);const V=Eo(ut.foreArm,.04,t);q.add(V);const k=new yt;k.position.y=-.27,V.add(k);const J=new le(new Un(.045,10,8),t);J.scale.set(.8,1.1,.6),k.add(J);const $=new le(new dn(.048,.048,.045,10),c);return $.position.y=.03,k.add($),this.torso.add(x),{shoulder:x,upper:D,elbow:q,fore:V,hand:k}};this.armR=A(1),this.armL=A(-1),this.racket=Oy(e),this.racket.position.y=-.02,this.armR.hand.add(this.racket);const P=E=>{const x=new yt;x.position.set(E*ut.hipX,-.06,0);const D=Eo(ut.thigh,.072,r);x.add(D);const I=new le(new at(.018,.28,.024),c);I.position.set(E*.071,-.17,0),I.userData.noOutline=!0,D.add(I);const H=new yt;H.position.y=-.44,D.add(H);const q=Eo(ut.shin,.055,t);H.add(q);const V=new le(new Gi(.058,ut.shin*.42,4,10),a);V.position.y=-.42*.72,V.castShadow=!0,q.add(V);const k=new yt;k.position.y=-.42,q.add(k);const J=new le(new at(.1,.055,.25),o);J.position.set(0,-.018,.055),J.castShadow=!0,k.add(J);const $=new le(new at(.105,.026,.26),new Ze({color:16054010,roughness:.55}));$.position.set(0,-.056,.058),k.add($);const pe=new le(new at(.106,.016,.11),c);return pe.position.set(0,-.012,.05),k.add(pe),this.hips.add(x),{hip:x,thigh:D,knee:H,shin:q,ankle:k}};this.legR=P(1),this.legL=P(-1),this.legPhase=0,this.bob=0,this._down=new R(0,-1,0),this._grabTarget=new R,this._grabDir=new R,this._grabHand=new R,this._grabQuat=new Yi,this._identityQuat=new Yi,this.grabDistance=null}update(e,t){const n=Xe.clamp(t.speedRatio??0,0,1),s=Xe.clamp(t.crouch??.3,0,1);this.legPhase+=e*(5.5+n*7.5)*(.25+n),this.bob+=e*2.1;const r=.72*n,o=Math.sin(this.legPhase),a=Math.sin(this.legPhase+Math.PI),c=Math.sin(this.bob*2.2)*.012*(1-n);this.legR.thigh.rotation.x=-s*.34+o*r,this.legL.thigh.rotation.x=-s*.34+a*r,this.legR.knee.rotation.x=s*.72+Math.max(0,-o)*r*1.15,this.legL.knee.rotation.x=s*.72+Math.max(0,-a)*r*1.15,this.legR.ankle.rotation.x=-s*.34-Math.max(0,o)*.22,this.legL.ankle.rotation.x=-s*.34-Math.max(0,a)*.22;const l=Xe.clamp(t.moveX??0,-1,1),h=Xe.clamp(t.moveZ??0,-1,1),u=Math.abs(l)>Math.abs(h)*.8?l:0,f=Math.max(0,o);this.legR.hip.rotation.z=u>=0?u*(.05-f*.1):u*(.08+f*.62),this.legL.hip.rotation.z=u>=0?u*(.08+f*.62):u*(.05-f*.1),this.legR.hip.rotation.y=u*o*.14,this.legL.hip.rotation.y=-u*o*.14;const d=Xe.clamp(t.splitStep??0,0,1);this.legR.hip.rotation.z+=d*.28,this.legL.hip.rotation.z-=d*.28;const g=Xe.clamp(t.lunge??0,0,1);this.legR.thigh.rotation.x=Xe.lerp(this.legR.thigh.rotation.x,-1.05,g),this.legR.knee.rotation.x=Xe.lerp(this.legR.knee.rotation.x,1.28,g),this.legR.ankle.rotation.x=Xe.lerp(this.legR.ankle.rotation.x,-.3,g),this.legL.thigh.rotation.x=Xe.lerp(this.legL.thigh.rotation.x,.48,g),this.legL.knee.rotation.x=Xe.lerp(this.legL.knee.rotation.x,.16,g),this.legL.ankle.rotation.x=Xe.lerp(this.legL.ankle.rotation.x,-.1,g),this.legR.hip.rotation.z=Xe.lerp(this.legR.hip.rotation.z,-.1,g),this.legL.hip.rotation.z=Xe.lerp(this.legL.hip.rotation.z,.08,g),this.hips.position.z=g*.16,this.hips.position.y=ut.hipHeight-s*.115-g*.16+d*.045+Math.abs(Math.sin(this.legPhase))*.035*n+c;const _=t.swing;if(_){const M=Uy(Su[_.type]??Su.overhead,_.phase);this.torso.rotation.x=M.lean*gt,this.torso.rotation.y=M.twist*gt,this.armR.upper.rotation.x=M.upper*gt,this.armR.upper.rotation.z=M.upperZ*gt,this.armR.elbow.rotation.x=M.fore*gt,this.armR.elbow.rotation.z=M.elbowZ*gt,this.racket.rotation.y=M.racketYaw*gt,this.armL.upper.rotation.x=(-40-M.twist*.9)*gt,this.armL.upper.rotation.z=(28+Math.abs(M.twist)*.35)*gt,this.armL.elbow.rotation.x=-50*gt,this.head.rotation.x=-M.lean*.5*gt,this.head.rotation.y=-M.twist*.35*gt}else{const M=o*.55*n;this.torso.rotation.x=(s*9+n*7)*gt,this.torso.rotation.y=Xe.lerp(this.torso.rotation.y,-14*gt,Math.min(1,e*6)),this.armR.upper.rotation.x=(-24-s*16)*gt-M,this.armR.upper.rotation.z=-.28,this.armR.elbow.rotation.x=(-72-s*16)*gt,this.armR.elbow.rotation.z=0,this.racket.rotation.y=24*gt,this.armL.upper.rotation.x=(-14-s*10)*gt+M,this.armL.upper.rotation.z=.3,this.armL.elbow.rotation.x=(-46-s*18)*gt,this.head.rotation.x=-(s*6+n*5)*gt,this.head.rotation.y=0}const p=Xe.clamp(t.grab??0,0,1);p>0?(this.hips.position.y-=p*.25,this.torso.rotation.x=Xe.lerp(this.torso.rotation.x,76*gt,p),this.torso.rotation.y=Xe.lerp(this.torso.rotation.y,-24*gt,p),this.armR.upper.rotation.x=Xe.lerp(this.armR.upper.rotation.x,6*gt,p),this.armR.upper.rotation.z=Xe.lerp(this.armR.upper.rotation.z,-38*gt,p),this.armR.elbow.rotation.x=Xe.lerp(this.armR.elbow.rotation.x,8*gt,p),this.armR.elbow.rotation.z=Xe.lerp(this.armR.elbow.rotation.z,-12*gt,p),this.head.rotation.x=Xe.lerp(this.head.rotation.x,-28*gt,p),this.racket.rotation.y=Xe.lerp(this.racket.rotation.y,78*gt,p),this.root.updateWorldMatrix(!0,!0),this._grabTarget.set(-.14,.12,.3),this.root.localToWorld(this._grabTarget),this._grabDir.copy(this._grabTarget),this.armL.shoulder.worldToLocal(this._grabDir).normalize(),this._grabQuat.setFromUnitVectors(this._down,this._grabDir),this.armL.upper.quaternion.slerp(this._grabQuat,p),this.armL.elbow.quaternion.slerp(this._identityQuat,p),this.root.updateWorldMatrix(!0,!0),this.armL.hand.getWorldPosition(this._grabHand),this.grabDistance=this._grabHand.distanceTo(this._grabTarget)):this.grabDistance=null;const m=Xe.clamp(t.landing??0,0,1);m>0&&(this.legR.thigh.rotation.x=Xe.lerp(this.legR.thigh.rotation.x,-1.05,m),this.legL.thigh.rotation.x=Xe.lerp(this.legL.thigh.rotation.x,-1.05,m),this.legR.knee.rotation.x=Xe.lerp(this.legR.knee.rotation.x,1.55,m),this.legL.knee.rotation.x=Xe.lerp(this.legL.knee.rotation.x,1.55,m),this.legR.ankle.rotation.x=Xe.lerp(this.legR.ankle.rotation.x,-.48,m),this.legL.ankle.rotation.x=Xe.lerp(this.legL.ankle.rotation.x,-.48,m),this.hips.position.y-=m*.26,this.torso.rotation.x=Xe.lerp(this.torso.rotation.x,24*gt,m))}getRacketHead(e=new R){return this.racket.updateWorldMatrix(!0,!1),e.set(0,.365,0).applyMatrix4(this.racket.matrixWorld)}}const Eu={p1:{jersey:2783976,shorts:1581882,skin:15250572,shoe:15265269,accent:8377599,frame:4891647,number:1},p2:{jersey:15217215,shorts:2757656,skin:14262388,shoe:1777446,accent:16761930,frame:16742986,number:2}},ua=2.9,Ln=.0135*ua,To=.033*ua,bo=.062*ua;class zy{constructor(e){this.group=new yt;const t=new Ze({color:16052712,roughness:.55,emissive:10466508,emissiveIntensity:.35}),n=new le(new Un(Ln,16,12),t);n.scale.z=1.15,n.position.z=Ln*.35,n.castShadow=!0,this.group.add(n);const s=new le(new dn(Ln*1.02,Ln*1.02,Ln*.5,16),new Ze({color:14867920,roughness:.8}));s.rotation.x=Math.PI/2,s.position.z=-Ln*.15,this.group.add(s);const r=new le(new Vi(To,bo,20,1,!0),new Ze({color:16777215,roughness:.92,metalness:0,emissive:9414852,emissiveIntensity:.22,transparent:!0,opacity:.66,side:$t,depthWrite:!1}));r.userData.noOutline=!0,r.rotation.x=Math.PI/2,r.position.z=-bo/2,this.group.add(r);const o=new Ll({color:16250351,transparent:!0,opacity:.85}),a=[];for(let d=0;d<16;d++){const g=d/16*Math.PI*2;a.push(new R(Math.cos(g)*Ln*.85,Math.sin(g)*Ln*.85,-Ln*.2),new R(Math.cos(g)*To,Math.sin(g)*To,-bo))}this.group.add(new Sf(new Et().setFromPoints(a),o));for(const[d,g]of[[.45,.5],[.8,.4]]){const _=Ln*.85+(To-Ln*.85)*d,p=new le(new aa(_,.0016*ua,5,24),new Yt({color:14674165,transparent:!0,opacity:g}));p.userData.noOutline=!0,p.position.z=-bo*d,this.group.add(p)}e.add(this.group),this.trailLen=26,this.history=[];const c=new Float32Array(this.trailLen*2*3),l=new Float32Array(this.trailLen*2),h=new Et;h.setAttribute("position",new zt(c,3)),h.setAttribute("aAlpha",new zt(l,1));const u=[];for(let d=0;d<this.trailLen-1;d++){const g=d*2,_=d*2+1,p=(d+1)*2,m=(d+1)*2+1;u.push(g,_,p,_,m,p)}h.setIndex(u),this.trailGeo=h;const f=new Xt({transparent:!0,depthWrite:!1,blending:Us,uniforms:{uColor:{value:new Ve(12575999)}},vertexShader:`
        attribute float aAlpha;
        varying float vAlpha;
        void main() {
          vAlpha = aAlpha;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        uniform vec3 uColor;
        varying float vAlpha;
        void main() { gl_FragColor = vec4(uColor, vAlpha); }`});this.trail=new le(h,f),this.trail.frustumCulled=!1,this.trail.renderOrder=3,e.add(this.trail),this._v=new R,this._side=new R,this._dir=new R,this._camDir=new R,this.spin=0}reset(){this.history.length=0,this.trailGeo.attributes.aAlpha.array.fill(0),this.trailGeo.attributes.aAlpha.needsUpdate=!0}update(e,t,n,s,r=!0){if(this.group.visible=r,this.trail.visible=r,!r)return;this.group.position.set(t.x,t.y,t.z);const o=Math.hypot(n.x,n.y,n.z);o>.6?(this._v.set(t.x+n.x,t.y+n.y,t.z+n.z),this.group.lookAt(this._v)):this.group.lookAt(t.x,t.y-1,t.z),this.spin+=e*Math.min(28,o*.9),this.group.rotateZ(this.spin*.35),this.history.unshift(new R(t.x,t.y,t.z)),this.history.length>this.trailLen&&this.history.pop();const a=this.trailGeo.attributes.position,c=this.trailGeo.attributes.aAlpha,l=Xe.clamp((o-7)/45,0,1),h=.012+l*.055;s.getWorldDirection(this._camDir);for(let u=0;u<this.trailLen;u++){const f=this.history[Math.min(u,this.history.length-1)]??this.history[0],d=this.history[Math.min(u+1,this.history.length-1)]??f;this._dir.subVectors(f,d),this._dir.lengthSq()<1e-9&&this._dir.set(0,0,1),this._side.crossVectors(this._dir,this._camDir).normalize();const g=1-u/this.trailLen,_=h*g,p=l*g*g*.85*(u<this.history.length?1:0);a.setXYZ(u*2,f.x+this._side.x*_,f.y+this._side.y*_,f.z+this._side.z*_),a.setXYZ(u*2+1,f.x-this._side.x*_,f.y-this._side.y*_,f.z-this._side.z*_),c.setX(u*2,p),c.setX(u*2+1,p)}a.needsUpdate=!0,c.needsUpdate=!0}}const Lt=i=>document.getElementById(i);class By{constructor(){this.el={team1:Lt("team1"),team2:Lt("team2"),pts1:Lt("pts1"),pts2:Lt("pts2"),name1:Lt("name1"),name2:Lt("name2"),rally:Lt("rallyinfo"),call:Lt("call"),shot:Lt("shotname"),charge1:Lt("charge1").querySelector(".fill"),charge2:Lt("charge2").querySelector(".fill"),mark1:Lt("charge1").querySelector(".smash-mark"),mark2:Lt("charge2").querySelector(".smash-mark"),label1:Lt("label1"),label2:Lt("label2"),menu:Lt("menu"),result:Lt("result"),verdict:Lt("verdict"),finalScore:Lt("finalscore"),stats:Lt("matchstats"),fps:Lt("fps")},this._callTimer=0,this._shotTimer=0,this._fpsAcc=0,this._fpsFrames=0,this._qualityLabel=""}setQualityLabel(e){this._qualityLabel=e}setSmashMark(e){this.el.mark1.style.left=`${e*100}%`,this.el.mark2.style.left=`${e*100}%`}setNames(e,t){this.el.name1.textContent=e,this.el.name2.textContent=t,this.el.label1.textContent=e,this.el.label2.textContent=t}setScore(e,t,n,s){this.el.pts1.textContent=e[0],this.el.pts2.textContent=e[1],this.el.team1.classList.toggle("serving",t===0),this.el.team2.classList.toggle("serving",t===1),this.el.rally.textContent=s>2?`第 ${n} 分 · 最长 ${s} 拍`:`第 ${n} 分`}setCharge(e,t){const n=e===0?this.el.charge1:this.el.charge2;n.style.width=`${Math.round(t*100)}%`}showCall(e,t="",n="#ffffff"){const s=this.el.call;if(s.textContent=String(e??""),t){const r=document.createElement("span");r.className="sub",r.textContent=String(t),s.appendChild(r)}s.style.color=n,s.classList.add("show"),this._callTimer=1.5}showShot(e){this.el.shot.textContent=e,this.el.shot.classList.add("show"),this._shotTimer=.7}update(e){if(this._callTimer>0&&(this._callTimer-=e,this._callTimer<=0&&this.el.call.classList.remove("show")),this._shotTimer>0&&(this._shotTimer-=e,this._shotTimer<=0&&this.el.shot.classList.remove("show")),this._fpsAcc+=e,this._fpsFrames++,this._fpsAcc>=.5){const t=Math.round(this._fpsFrames/this._fpsAcc);this.el.fps.textContent=this._qualityLabel?`${t} fps · 画质${this._qualityLabel}`:`${t} fps`,this._fpsAcc=0,this._fpsFrames=0}}showMenu(e){this.el.menu.classList.toggle("hidden",!e)}showResult(e,t,n){this.el.verdict.textContent=`${e} 获胜`,this.el.finalScore.textContent=`${t[0]} : ${t[1]}`,this.el.stats.innerHTML=n,this.el.result.classList.remove("hidden")}hideResult(){this.el.result.classList.add("hidden")}}const ec=["high","medium","low"],Ur={high:{name:"高",dpr:2,antialias:!0,shadows:!0,shadowSize:2048,shadowType:_l,bloom:.24,texturePxPerM:112,envIntensity:.78,reflection:1024},medium:{name:"中",dpr:1.5,antialias:!0,shadows:!0,shadowSize:1024,shadowType:gl,bloom:.16,texturePxPerM:84,envIntensity:.68,reflection:512},low:{name:"低",dpr:1,antialias:!1,shadows:!1,shadowSize:512,shadowType:sp,bloom:0,texturePxPerM:56,envIntensity:.54,reflection:0}};function ky(){const i=matchMedia("(pointer: coarse)").matches,e=navigator.hardwareConcurrency??4,t=navigator.deviceMemory;return i?e>=6&&(t===void 0||t>=4)?"medium":"low":e<=2?"medium":"high"}class Hy{constructor(e,t){this.ctx=e,this.level=t,this.frames=[],this.sinceChange=0,this.onChange=null,this.apply(t)}get config(){return Ur[this.level]}apply(e){var c;const t=Ur[e];if(!t)return;this.level=e;const{renderer:n,composer:s,bloom:r,scene:o}=this.ctx,a=Math.min(devicePixelRatio||1,t.dpr);n.setPixelRatio(a),s==null||s.setPixelRatio(a),n.shadowMap.enabled=t.shadows,n.shadowMap.type=t.shadowType,n.shadowMap.needsUpdate=!0,o&&(o.environmentIntensity=t.envIntensity),r&&(r.enabled=t.bloom>0,r.strength=t.bloom),o==null||o.traverse(l=>{l.isMesh&&l.material&&(l.material.needsUpdate=!0)}),this.sinceChange=0,this.frames.length=0,(c=this.onChange)==null||c.call(this,e,t)}stepDown(){const e=ec.indexOf(this.level);return e<0||e>=ec.length-1?!1:(this.apply(ec[e+1]),!0)}update(e){if(this.sinceChange+=e,this.sinceChange<2.5||(this.frames.push(e),this.frames.length<90))return;const t=[...this.frames].sort((s,r)=>s-r),n=t[Math.floor(t.length/2)];this.frames.length=0,n>1/42&&this.stepDown()}}function Gy(){const i=new Vf({uniforms:{tDiffuse:{value:null},uLines:{value:0},uFlash:{value:0},uSeed:{value:0},uAspect:{value:1},uCenter:{value:new ce(.5,.5)},uToon:{value:.38},uOutline:{value:.52},uTexel:{value:new ce(1,1)}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform float uLines, uFlash, uSeed, uAspect, uToon, uOutline;
      uniform vec2 uCenter;
      uniform vec2 uTexel;
      varying vec2 vUv;

      float hash(float n) { return fract(sin(n * 127.1 + uSeed * 311.7) * 43758.5453); }

      void main() {
        vec4 col = texture2D(tDiffuse, vUv);

        // Screen-space ink edge. This keeps outlines inside the optional pass;
        // the realistic scene contains no inverse-hull outline geometry.
        vec3 sx = texture2D(tDiffuse, vUv + vec2(uTexel.x, 0.0)).rgb;
        vec3 sy = texture2D(tDiffuse, vUv + vec2(0.0, uTexel.y)).rgb;
        float edge = max(length(col.rgb - sx), length(col.rgb - sy));
        float ink = smoothstep(0.10, 0.34, edge) * uOutline;
        col.rgb = mix(col.rgb, col.rgb * 0.24, ink);

        // NPR cel banding (hybrid): quantize midtone luminance only.
        // Shadows stay dark, highlights (>0.82) pass through untouched so
        // PBR specular / clearcoat sparkle survives. Hue & saturation kept.
        // NOTE: GLSL source must stay ASCII-only - non-ASCII comments break ANGLE.
        float l = dot(col.rgb, vec3(0.299, 0.587, 0.114));
        if (uToon > 0.01 && l > 0.03 && l < 0.82) {
          const float BANDS = 5.0;
          float band = floor(l * BANDS) / BANDS;
          float frac = fract(l * BANDS);
          // soften 18% of each band edge to avoid hard posterization seams
          float soft = smoothstep(0.0, 0.18, frac) * (1.0 - smoothstep(0.82, 1.0, frac));
          float lq = band + (frac > 0.5 ? 1.0 / BANDS : 0.0) * (1.0 - soft) + frac / BANDS * soft;
          col.rgb *= mix(1.0, lq / max(l, 1e-4), uToon * 0.8);
        }

        vec2 d = vUv - uCenter;
        d.x *= uAspect;
        float r = length(d);
        float a = atan(d.y, d.x);

        // 速度线：角向切 96 个扇区，随机点亮一部分，只出现在画面外圈。
        // 双层采样（粗层+细层）让线有粗细变化，更接近手绘排线。
        if (uLines > 0.003) {
          float s1 = step(1.0 - uLines * 0.42, hash(floor(a * 15.28)));
          float s2 = step(1.0 - uLines * 0.30, hash(floor(a * 33.0) + 3.7));
          float ring = smoothstep(0.34, 0.78, r);
          float mask = max(s1, s2 * 0.7) * ring;
          col.rgb = mix(col.rgb, vec3(0.97), mask * min(uLines * 1.15, 0.9));
        }

        // 冲击帧：整屏压白 + 放射状黑刺，从圆心炸开。漫画"决定性一格"。
        if (uFlash > 0.003) {
          float spikes = step(0.80, hash(floor(a * 8.9) + 11.0)) * smoothstep(0.10, 0.42, r);
          vec3 flashCol = mix(vec3(0.99), vec3(0.03), spikes);
          col.rgb = mix(col.rgb, flashCol, smoothstep(0.0, 0.85, uFlash) * 0.88);
        }

        gl_FragColor = col;
      }`});return i.material.transparent=!1,i}class Vy{constructor(e,t){this.pass=e,this.camera=t,this.lines=0,this.linesTarget=0,this.flash=0,this.enabled=!0,this._v=new R}setEnabled(e){this.enabled=!!e,this.pass.enabled=this.enabled,this.enabled||(this.lines=0,this.linesTarget=0,this.flash=0,this.pass.uniforms.uLines.value=0,this.pass.uniforms.uFlash.value=0)}smashLaunch(){this.linesTarget=1,this.pass.uniforms.uSeed.value=Math.random()*100}impact(e=1){this.flash=Math.min(1.2,e),this.pass.uniforms.uSeed.value=Math.random()*100}setRallySpeed(e){this.linesTarget<.99&&(this.linesTarget=Xe.clamp((e-22)/55,0,.5))}calmDown(){this.linesTarget=0}update(e,t){if(t){this._v.set(t.x,t.y,t.z).project(this.camera);const n=Xe.clamp(this._v.x*.5+.5,.12,.88),s=Xe.clamp(this._v.y*.5+.5,.12,.88);this.pass.uniforms.uCenter.value.set(n,s)}this.lines+=(this.linesTarget-this.lines)*Math.min(1,e*9),this.flash*=Math.exp(-e*9.5),this.flash<.004&&(this.flash=0),this.pass.uniforms.uLines.value=this.lines,this.pass.uniforms.uFlash.value=Math.min(1,this.flash),this.pass.uniforms.uAspect.value=innerWidth/Math.max(1,innerHeight),this.pass.uniforms.uTexel.value.set(1/Math.max(1,innerWidth),1/Math.max(1,innerHeight)),this.pass.enabled=this.enabled}}class Wy{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return Xy(e).buffer}}function Xy(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i){const r=new Uint8Array(s.buffer,s.byteOffset,s.byteLength);t.set(r,n),n+=s.byteLength}return t}function Yf(i){return new $y(i).unpack()}function qf(i){const e=new Yy,t=e.pack(i);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class $y{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,s="",r,o;for(;n<e;)r=t[n],r<160?(o=r,n++):(r^192)<32?(o=(r&31)<<6|t[n+1]&63,n+=2):(r^224)<16?(o=(r&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(o=(r&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),s+=String.fromCodePoint(o);return this.index+=e,s}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const s=this.unpack();t[s]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,s=e&8388607|8388608;return(t===0?1:-1)*s*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,s=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(s-20)+t*2**(s-52);return(n===0?1:-1)*o}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class Yy{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=s=>{if(s<t){const r=this.pack(e[s]);return r instanceof Promise?r.then(()=>n(s+1)):n(s+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),s=e/2**n-1,r=Math.floor(s*2**52),o=2**32,a=t<<31|n+1023<<20|r/o&1048575,c=r%o;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const s=r=>{if(r<t.length){const o=t[r];if(e.hasOwnProperty(o)){this.pack(o);const a=this.pack(e[o]);if(a instanceof Promise)return a.then(()=>s(r+1))}return s(r+1)}};return s(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new Wy,this._textEncoder=new TextEncoder}}let jf=!0,Zf=!0;function lr(i,e,t){const n=i.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function es(i,e,t){if(!i.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){Vl("Unable to polyfill events");return}const s=i.RTCPeerConnection.prototype,r=s.addEventListener;s.addEventListener=function(a,c){if(a!==e)return r.apply(this,arguments);const l=h=>{const u=t(h);u&&(c.handleEvent?c.handleEvent(u):c(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,l),r.apply(this,[a,l])};const o=s.removeEventListener;s.removeEventListener=function(a,c){if(a!==e||!this._eventMap||!this._eventMap[e])return o.apply(this,arguments);if(!this._eventMap[e].has(c))return o.apply(this,arguments);const l=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,o.apply(this,[a,l])},Object.defineProperty(s,"on"+e,{get(){return this["_on"+e]},set(a){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),a&&this.addEventListener(e,this["_on"+e]=a)},enumerable:!0,configurable:!0})}function qy(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(jf=i,i?"adapter.js logging disabled":"adapter.js logging enabled")}function jy(i){return typeof i!="boolean"?new Error("Argument type: "+typeof i+". Please use a boolean."):(Zf=!i,"adapter.js deprecation warnings "+(i?"disabled":"enabled"))}function Vl(){if(typeof window=="object"){if(jf)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function Wl(i,e){Zf&&console.warn(i+" is deprecated, please use "+e+" instead.")}function Zy(i){const e={browser:null,version:null};if(typeof i>"u"||!i.navigator||!i.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=i;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(s=>s.brand==="Chromium");if(n){const s=parseInt(n.version,10);if(s>=90)return{browser:"chrome",version:s}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(lr(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||i.isSecureContext===!1&&i.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(lr(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(i.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(lr(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=i.RTCRtpTransceiver&&"currentDirection"in i.RTCRtpTransceiver.prototype,e._safariVersion=lr(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function Tu(i){return Object.prototype.toString.call(i)==="[object Object]"}function Kf(i){return Tu(i)?Object.keys(i).reduce(function(e,t){const n=Tu(i[t]),s=n?Kf(i[t]):i[t],r=n&&!Object.keys(s).length;return s===void 0||r?e:Object.assign(e,{[t]:s})},{}):i}function nl(i,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?nl(i,i.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(s=>{nl(i,i.get(s),t)})}))}function bu(i,e,t){const n=t?"outbound-rtp":"inbound-rtp",s=new Map;if(e===null)return s;const r=[];return i.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&r.push(o)}),r.forEach(o=>{i.forEach(a=>{a.type===n&&a.trackId===o.id&&nl(i,a,s)})}),s}const Cu=Vl;function Jf(i,e){if(e.version>=64)return;const t=i&&i.navigator;if(!t.mediaDevices)return;const n=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;const c={};return Object.keys(a).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const h=typeof a[l]=="object"?a[l]:{ideal:a[l]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);const u=function(f,d){return f?f+d.charAt(0).toUpperCase()+d.slice(1):d==="deviceId"?"sourceId":d};if(h.ideal!==void 0){c.optional=c.optional||[];let f={};typeof h.ideal=="number"?(f[u("min",l)]=h.ideal,c.optional.push(f),f={},f[u("max",l)]=h.ideal,c.optional.push(f)):(f[u("",l)]=h.ideal,c.optional.push(f))}h.exact!==void 0&&typeof h.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[u("",l)]=h.exact):["min","max"].forEach(f=>{h[f]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[u(f,l)]=h[f])})}),a.advanced&&(c.optional=(c.optional||[]).concat(a.advanced)),c},s=function(a,c){if(e.version>=61)return c(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){const l=function(h,u,f){u in h&&!(f in h)&&(h[f]=h[u],delete h[u])};a=JSON.parse(JSON.stringify(a)),l(a.audio,"autoGainControl","googAutoGainControl"),l(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=n(a.audio)}if(a&&typeof a.video=="object"){let l=a.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const h=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!h)){delete a.video.facingMode;let u;if(l.exact==="environment"||l.ideal==="environment"?u=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(f=>{f=f.filter(g=>g.kind==="videoinput");let d=f.find(g=>u.some(_=>g.label.toLowerCase().includes(_)));return!d&&f.length&&u.includes("back")&&(d=f[f.length-1]),d&&(a.video.deviceId=l.exact?{exact:d.deviceId}:{ideal:d.deviceId}),a.video=n(a.video),Cu("chrome: "+JSON.stringify(a)),c(a)})}a.video=n(a.video)}return Cu("chrome: "+JSON.stringify(a)),c(a)},r=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,c,l){s(a,h=>{t.webkitGetUserMedia(h,c,u=>{l&&l(r(u))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){const a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return s(c,l=>a(l).then(h=>{if(l.audio&&!h.getAudioTracks().length||l.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return h},h=>Promise.reject(r(h))))}}}function Qf(i){i.MediaStream=i.MediaStream||i.webkitMediaStream}function ed(i,e){if(!(e.version>102))if(typeof i=="object"&&i.RTCPeerConnection&&!("ontrack"in i.RTCPeerConnection.prototype)){Object.defineProperty(i.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=s=>{s.stream.addEventListener("addtrack",r=>{let o;i.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===r.track.id):o={track:r.track};const a=new Event("track");a.track=r.track,a.receiver=o,a.transceiver={receiver:o},a.streams=[s.stream],this.dispatchEvent(a)}),s.stream.getTracks().forEach(r=>{let o;i.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===r.id):o={track:r};const a=new Event("track");a.track=r,a.receiver=o,a.transceiver={receiver:o},a.streams=[s.stream],this.dispatchEvent(a)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else es(i,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function td(i){if(typeof i=="object"&&i.RTCPeerConnection&&!("getSenders"in i.RTCPeerConnection.prototype)&&"createDTMFSender"in i.RTCPeerConnection.prototype){const e=function(s,r){return{track:r,get dtmf(){return this._dtmf===void 0&&(r.kind==="audio"?this._dtmf=s.createDTMFSender(r):this._dtmf=null),this._dtmf},_pc:s}};if(!i.RTCPeerConnection.prototype.getSenders){i.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const s=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(a,c){let l=s.apply(this,arguments);return l||(l=e(this,a),this._senders.push(l)),l};const r=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(a){r.apply(this,arguments);const c=this._senders.indexOf(a);c!==-1&&this._senders.splice(c,1)}}const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(r){this._senders=this._senders||[],t.apply(this,[r]),r.getTracks().forEach(o=>{this._senders.push(e(this,o))})};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(r){this._senders=this._senders||[],n.apply(this,[r]),r.getTracks().forEach(o=>{const a=this._senders.find(c=>c.track===o);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof i=="object"&&i.RTCPeerConnection&&"getSenders"in i.RTCPeerConnection.prototype&&"createDTMFSender"in i.RTCPeerConnection.prototype&&i.RTCRtpSender&&!("dtmf"in i.RTCRtpSender.prototype)){const e=i.RTCPeerConnection.prototype.getSenders;i.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n},Object.defineProperty(i.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function nd(i,e){if(e.version>=67||!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender&&i.RTCRtpReceiver))return;if(!("getStats"in i.RTCRtpSender.prototype)){const n=i.RTCPeerConnection.prototype.getSenders;n&&(i.RTCPeerConnection.prototype.getSenders=function(){const o=n.apply(this,[]);return o.forEach(a=>a._pc=this),o});const s=i.RTCPeerConnection.prototype.addTrack;s&&(i.RTCPeerConnection.prototype.addTrack=function(){const o=s.apply(this,arguments);return o._pc=this,o}),i.RTCRtpSender.prototype.getStats=function(){const o=this;return this._pc.getStats().then(a=>bu(a,o.track,!0))}}if(!("getStats"in i.RTCRtpReceiver.prototype)){const n=i.RTCPeerConnection.prototype.getReceivers;n&&(i.RTCPeerConnection.prototype.getReceivers=function(){const r=n.apply(this,[]);return r.forEach(o=>o._pc=this),r}),es(i,"track",s=>(s.receiver._pc=s.srcElement,s)),i.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(o=>bu(o,r.track,!1))}}if(!("getStats"in i.RTCRtpSender.prototype&&"getStats"in i.RTCRtpReceiver.prototype))return;const t=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof i.MediaStreamTrack){const s=arguments[0];let r,o,a;return this.getSenders().forEach(c=>{c.track===s&&(r?a=!0:r=c)}),this.getReceivers().forEach(c=>(c.track===s&&(o?a=!0:o=c),c.track===s)),a||r&&o?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():o?o.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function id(i){i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(c)===-1&&this._shimmedLocalStreams[a.id].push(c):this._shimmedLocalStreams[a.id]=[a,c],c};const t=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(l=>{if(this.getSenders().find(u=>u.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const a=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>a.indexOf(l)===-1);this._shimmedLocalStreams[o.id]=[o].concat(c)};const n=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],n.apply(this,arguments)};const s=i.RTCPeerConnection.prototype.removeTrack;i.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{const c=this._shimmedLocalStreams[a].indexOf(o);c!==-1&&this._shimmedLocalStreams[a].splice(c,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),s.apply(this,arguments)}}function sd(i,e){if(!i.RTCPeerConnection)return;if(i.RTCPeerConnection.prototype.addTrack&&e.version>=65)return id(i);const t=i.RTCPeerConnection.prototype.getLocalStreams;i.RTCPeerConnection.prototype.getLocalStreams=function(){const h=t.apply(this);return this._reverseStreams=this._reverseStreams||{},h.map(u=>this._reverseStreams[u.id])};const n=i.RTCPeerConnection.prototype.addStream;i.RTCPeerConnection.prototype.addStream=function(h){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},h.getTracks().forEach(u=>{if(this.getSenders().find(d=>d.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[h.id]){const u=new i.MediaStream(h.getTracks());this._streams[h.id]=u,this._reverseStreams[u.id]=h,h=u}n.apply(this,[h])};const s=i.RTCPeerConnection.prototype.removeStream;i.RTCPeerConnection.prototype.removeStream=function(h){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},s.apply(this,[this._streams[h.id]||h]),delete this._reverseStreams[this._streams[h.id]?this._streams[h.id].id:h.id],delete this._streams[h.id]},i.RTCPeerConnection.prototype.addTrack=function(h,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const f=[].slice.call(arguments,1);if(f.length!==1||!f[0].getTracks().find(_=>_===h))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(_=>_.track===h))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const g=this._streams[u.id];if(g)g.addTrack(h),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const _=new i.MediaStream([h]);this._streams[u.id]=_,this._reverseStreams[_.id]=u,this.addStream(_)}return this.getSenders().find(_=>_.track===h)};function r(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(f=>{const d=l._reverseStreams[f],g=l._streams[d.id];u=u.replace(new RegExp(g.id,"g"),d.id)}),new RTCSessionDescription({type:h.type,sdp:u})}function o(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(f=>{const d=l._reverseStreams[f],g=l._streams[d.id];u=u.replace(new RegExp(d.id,"g"),g.id)}),new RTCSessionDescription({type:h.type,sdp:u})}["createOffer","createAnswer"].forEach(function(l){const h=i.RTCPeerConnection.prototype[l],u={[l](){const f=arguments;return arguments.length&&typeof arguments[0]=="function"?h.apply(this,[g=>{const _=r(this,g);f[0].apply(null,[_])},g=>{f[1]&&f[1].apply(null,g)},arguments[2]]):h.apply(this,arguments).then(g=>r(this,g))}};i.RTCPeerConnection.prototype[l]=u[l]});const a=i.RTCPeerConnection.prototype.setLocalDescription;i.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(i.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(i.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:r(this,l)}}),i.RTCPeerConnection.prototype.removeTrack=function(h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!h._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(h._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let f;Object.keys(this._streams).forEach(d=>{this._streams[d].getTracks().find(_=>h.track===_)&&(f=this._streams[d])}),f&&(f.getTracks().length===1?this.removeStream(this._reverseStreams[f.id]):f.removeTrack(h.track),this.dispatchEvent(new Event("negotiationneeded")))}}function il(i,e){!i.RTCPeerConnection&&i.webkitRTCPeerConnection&&(i.RTCPeerConnection=i.webkitRTCPeerConnection),i.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]})}function rd(i,e){e.version>102||es(i,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const wu=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:rd,shimAddTrackRemoveTrack:sd,shimAddTrackRemoveTrackWithNative:id,shimGetSendersWithDtmf:td,shimGetUserMedia:Jf,shimMediaStream:Qf,shimOnTrack:ed,shimPeerConnection:il,shimSenderReceiverGetStats:nd},Symbol.toStringTag,{value:"Module"}));function od(i,e){const t=i&&i.navigator;if(!t.mediaDevices)return;const n=i&&i.MediaStreamTrack;if(t.getUserMedia=function(s,r,o){Wl("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(s).then(r,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const s=function(o,a,c){a in o&&!(c in o)&&(o[c]=o[a],delete o[a])},r=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),s(o.audio,"autoGainControl","mozAutoGainControl"),s(o.audio,"noiseSuppression","mozNoiseSuppression")),r(o)},n&&n.prototype.getSettings){const o=n.prototype.getSettings;n.prototype.getSettings=function(){const a=o.apply(this,arguments);return s(a,"mozAutoGainControl","autoGainControl"),s(a,"mozNoiseSuppression","noiseSuppression"),a}}if(n&&n.prototype.applyConstraints){const o=n.prototype.applyConstraints;n.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),s(a,"autoGainControl","mozAutoGainControl"),s(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}}function Ky(i,e){i.navigator.mediaDevices&&(i.navigator.mediaDevices&&"getDisplayMedia"in i.navigator.mediaDevices||(i.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const s=new DOMException("getDisplayMedia without video constraints is undefined");return s.name="NotFoundError",s.code=8,Promise.reject(s)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,i.navigator.mediaDevices.getUserMedia(n)}))}function ad(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function sl(i,e){typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||(!i.RTCPeerConnection&&i.mozRTCPeerConnection&&(i.RTCPeerConnection=i.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=i.RTCPeerConnection.prototype[t],s={[t](){return arguments[0]=new(t==="addIceCandidate"?i.RTCIceCandidate:i.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};i.RTCPeerConnection.prototype[t]=s[t]}))}function cd(i,e){if(typeof i!="object"||!(i.RTCPeerConnection||i.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=i.RTCPeerConnection.prototype.getStats;i.RTCPeerConnection.prototype.getStats=function(){const[r,o,a]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[r||null]).then(c=>{if(e.version<53&&!o)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((h,u)=>{c.set(u,Object.assign({},h,{type:t[h.type]||h.type}))})}return c}).then(o,a)}}function ld(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpSender.prototype)return;const e=i.RTCPeerConnection.prototype.getSenders;e&&(i.RTCPeerConnection.prototype.getSenders=function(){const s=e.apply(this,[]);return s.forEach(r=>r._pc=this),s});const t=i.RTCPeerConnection.prototype.addTrack;t&&(i.RTCPeerConnection.prototype.addTrack=function(){const s=t.apply(this,arguments);return s._pc=this,s}),i.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function hd(i){if(!(typeof i=="object"&&i.RTCPeerConnection&&i.RTCRtpSender)||i.RTCRtpSender&&"getStats"in i.RTCRtpReceiver.prototype)return;const e=i.RTCPeerConnection.prototype.getReceivers;e&&(i.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(s=>s._pc=this),n}),es(i,"track",t=>(t.receiver._pc=t.srcElement,t)),i.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function ud(i){!i.RTCPeerConnection||"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){Wl("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function fd(i){i.DataChannel&&!i.RTCDataChannel&&(i.RTCDataChannel=i.DataChannel)}function dd(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.addTransceiver;t&&(i.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let s=arguments[1]&&arguments[1].sendEncodings;s===void 0&&(s=[]),s=[...s];const r=s.length>0;r&&s.forEach(a=>{if("rid"in a&&!/^[a-z0-9]{0,16}$/i.test(a.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in a&&!(parseFloat(a.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in a&&!(parseFloat(a.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const o=t.apply(this,arguments);if(r){const{sender:a}=o,c=a.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=s,a.sendEncodings=s,this.setParametersPromises.push(a.setParameters(c).then(()=>{delete a.sendEncodings}).catch(()=>{delete a.sendEncodings})))}return o})}function pd(i,e){if(!(typeof i=="object"&&i.RTCRtpSender)||e.version>=110)return;const t=i.RTCRtpSender.prototype.getParameters;t&&(i.RTCRtpSender.prototype.getParameters=function(){const s=t.apply(this,arguments);return"encodings"in s||(s.encodings=[].concat(this.sendEncodings||[{}])),s})}function md(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function gd(i,e){if(!(typeof i=="object"&&i.RTCPeerConnection)||e.version>=110)return;const t=i.RTCPeerConnection.prototype.createAnswer;i.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const Au=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:dd,shimCreateAnswer:gd,shimCreateOffer:md,shimGetDisplayMedia:Ky,shimGetParameters:pd,shimGetStats:cd,shimGetUserMedia:od,shimOnTrack:ad,shimPeerConnection:sl,shimRTCDataChannel:fd,shimReceiverGetStats:hd,shimRemoveStream:ud,shimSenderGetStats:ld},Symbol.toStringTag,{value:"Module"}));function _d(i){if(!(typeof i!="object"||!i.RTCPeerConnection)){if("getLocalStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in i.RTCPeerConnection.prototype)){const e=i.RTCPeerConnection.prototype.addTrack;i.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(s=>e.call(this,s,n)),n.getVideoTracks().forEach(s=>e.call(this,s,n))},i.RTCPeerConnection.prototype.addTrack=function(n,...s){return s&&s.forEach(r=>{this._localStreams?this._localStreams.includes(r)||this._localStreams.push(r):this._localStreams=[r]}),e.apply(this,arguments)}}"removeStream"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const s=t.getTracks();this.getSenders().forEach(r=>{s.includes(r.track)&&this.removeTrack(r)})})}}function vd(i){if(!(typeof i!="object"||!i.RTCPeerConnection)&&("getRemoteStreams"in i.RTCPeerConnection.prototype||(i.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in i.RTCPeerConnection.prototype))){Object.defineProperty(i.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(s=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(s))return;this._remoteStreams.push(s);const r=new Event("addstream");r.stream=s,this.dispatchEvent(r)})})}});const e=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(s){s.streams.forEach(r=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(r)>=0)return;n._remoteStreams.push(r);const o=new Event("addstream");o.stream=r,n.dispatchEvent(o)})}),e.apply(n,arguments)}}}function xd(i){if(typeof i!="object"||!i.RTCPeerConnection)return;const e=i.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,s=e.setLocalDescription,r=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],f=t.apply(this,[u]);return h?(f.then(l,h),Promise.resolve()):f},e.createAnswer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],f=n.apply(this,[u]);return h?(f.then(l,h),Promise.resolve()):f};let a=function(c,l,h){const u=s.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u};e.setLocalDescription=a,a=function(c,l,h){const u=r.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.setRemoteDescription=a,a=function(c,l,h){const u=o.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.addIceCandidate=a}function yd(i){const e=i&&i.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=s=>n(Sd(s))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(n,s,r){e.mediaDevices.getUserMedia(n).then(s,r)}).bind(e))}function Sd(i){return i&&i.video!==void 0?Object.assign({},i,{video:Kf(i.video)}):i}function Md(i){if(!i.RTCPeerConnection)return;const e=i.RTCPeerConnection;i.RTCPeerConnection=function(n,s){if(n&&n.iceServers){const r=[];for(let o=0;o<n.iceServers.length;o++){let a=n.iceServers[o];a.urls===void 0&&a.url?(Wl("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,r.push(a)):r.push(n.iceServers[o])}n.iceServers=r}return new e(n,s)},i.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(i.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function Ed(i){typeof i=="object"&&i.RTCTrackEvent&&"receiver"in i.RTCTrackEvent.prototype&&!("transceiver"in i.RTCTrackEvent.prototype)&&Object.defineProperty(i.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Td(i){const e=i.RTCPeerConnection.prototype.createOffer;i.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const s=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveAudio===!0&&!s&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const r=this.getTransceivers().find(o=>o.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):n.offerToReceiveVideo===!0&&!r&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function bd(i){typeof i!="object"||i.AudioContext||(i.AudioContext=i.webkitAudioContext)}const Ru=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:bd,shimCallbacksAPI:xd,shimConstraints:Sd,shimCreateOfferLegacy:Td,shimGetUserMedia:yd,shimLocalStreamsAPI:_d,shimRTCIceServerUrls:Md,shimRemoteStreamsAPI:vd,shimTrackEventTransceiver:Ed},Symbol.toStringTag,{value:"Module"}));function Jy(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var tc={exports:{}},Pu;function Qy(){return Pu||(Pu=1,(function(i){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(n=>n.trim())},e.splitSections=function(t){return t.split(`
m=`).map((s,r)=>(r>0?"m="+s:s).trim()+`\r
`)},e.getDescription=function(t){const n=e.splitSections(t);return n&&n[0]},e.getMediaSections=function(t){const n=e.splitSections(t);return n.shift(),n},e.matchPrefix=function(t,n){return e.splitLines(t).filter(s=>s.indexOf(n)===0)},e.parseCandidate=function(t){let n;t.indexOf("a=candidate:")===0?n=t.substring(12).split(" "):n=t.substring(10).split(" ");const s={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let r=8;r<n.length;r+=2)switch(n[r]){case"raddr":s.relatedAddress=n[r+1];break;case"rport":s.relatedPort=parseInt(n[r+1],10);break;case"tcptype":s.tcpType=n[r+1];break;case"ufrag":s.ufrag=n[r+1],s.usernameFragment=n[r+1];break;default:s[n[r]]===void 0&&(s[n[r]]=n[r+1]);break}return s},e.writeCandidate=function(t){const n=[];n.push(t.foundation);const s=t.component;s==="rtp"?n.push(1):s==="rtcp"?n.push(2):n.push(s),n.push(t.protocol.toUpperCase()),n.push(t.priority),n.push(t.address||t.ip),n.push(t.port);const r=t.type;return n.push("typ"),n.push(r),r!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(n.push("raddr"),n.push(t.relatedAddress),n.push("rport"),n.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(n.push("ufrag"),n.push(t.usernameFragment||t.ufrag)),"candidate:"+n.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let n=t.substring(9).split(" ");const s={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),s.name=n[0],s.clockRate=parseInt(n[1],10),s.channels=n.length===3?parseInt(n[2],10):1,s.numChannels=s.channels,s},e.writeRtpMap=function(t){let n=t.payloadType;t.preferredPayloadType!==void 0&&(n=t.preferredPayloadType);const s=t.channels||t.numChannels||1;return"a=rtpmap:"+n+" "+t.name+"/"+t.clockRate+(s!==1?"/"+s:"")+`\r
`},e.parseExtmap=function(t){const n=t.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const n={};let s;const r=t.substring(t.indexOf(" ")+1).split(";");for(let o=0;o<r.length;o++)s=r[o].trim().split("="),n[s[0].trim()]=s[1];return n},e.writeFmtp=function(t){let n="",s=t.payloadType;if(t.preferredPayloadType!==void 0&&(s=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const r=[];Object.keys(t.parameters).forEach(o=>{t.parameters[o]!==void 0?r.push(o+"="+t.parameters[o]):r.push(o)}),n+="a=fmtp:"+s+" "+r.join(";")+`\r
`}return n},e.parseRtcpFb=function(t){const n=t.substring(t.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},e.writeRtcpFb=function(t){let n="",s=t.payloadType;return t.preferredPayloadType!==void 0&&(s=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(r=>{n+="a=rtcp-fb:"+s+" "+r.type+(r.parameter&&r.parameter.length?" "+r.parameter:"")+`\r
`}),n},e.parseSsrcMedia=function(t){const n=t.indexOf(" "),s={ssrc:parseInt(t.substring(7,n),10)},r=t.indexOf(":",n);return r>-1?(s.attribute=t.substring(n+1,r),s.value=t.substring(r+1)):s.attribute=t.substring(n+1),s},e.parseSsrcGroup=function(t){const n=t.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(s=>parseInt(s,10))}},e.getMid=function(t){const n=e.matchPrefix(t,"a=mid:")[0];if(n)return n.substring(6)},e.parseFingerprint=function(t){const n=t.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},e.getDtlsParameters=function(t,n){return{role:"auto",fingerprints:e.matchPrefix(t+n,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,n){let s="a=setup:"+n+`\r
`;return t.fingerprints.forEach(r=>{s+="a=fingerprint:"+r.algorithm+" "+r.value+`\r
`}),s},e.parseCryptoLine=function(t){const n=t.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const n=t.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,n){return e.matchPrefix(t+n,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,n){const s=e.matchPrefix(t+n,"a=ice-ufrag:")[0],r=e.matchPrefix(t+n,"a=ice-pwd:")[0];return s&&r?{usernameFragment:s.substring(12),password:r.substring(10)}:null},e.writeIceParameters=function(t){let n="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(n+=`a=ice-lite\r
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},r=e.splitLines(t)[0].split(" ");n.profile=r[2];for(let a=3;a<r.length;a++){const c=r[a],l=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(l){const h=e.parseRtpMap(l),u=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(h.parameters=u.length?e.parseFmtp(u[0]):{},h.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),n.codecs.push(h),h.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(h.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(a=>{n.headerExtensions.push(e.parseExtmap(a))});const o=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(a=>{o.forEach(c=>{a.rtcpFeedback.find(h=>h.type===c.type&&h.parameter===c.parameter)||a.rtcpFeedback.push(c)})}),n},e.writeRtpDescription=function(t,n){let s="";s+="m="+t+" ",s+=n.codecs.length>0?"9":"0",s+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",s+=n.codecs.map(o=>o.preferredPayloadType!==void 0?o.preferredPayloadType:o.payloadType).join(" ")+`\r
`,s+=`c=IN IP4 0.0.0.0\r
`,s+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(o=>{s+=e.writeRtpMap(o),s+=e.writeFmtp(o),s+=e.writeRtcpFb(o)});let r=0;return n.codecs.forEach(o=>{o.maxptime>r&&(r=o.maxptime)}),r>0&&(s+="a=maxptime:"+r+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(o=>{s+=e.writeExtmap(o)}),s},e.parseRtpEncodingParameters=function(t){const n=[],s=e.parseRtpParameters(t),r=s.fecMechanisms.indexOf("RED")!==-1,o=s.fecMechanisms.indexOf("ULPFEC")!==-1,a=e.matchPrefix(t,"a=ssrc:").map(f=>e.parseSsrcMedia(f)).filter(f=>f.attribute==="cname"),c=a.length>0&&a[0].ssrc;let l;const h=e.matchPrefix(t,"a=ssrc-group:FID").map(f=>f.substring(17).split(" ").map(g=>parseInt(g,10)));h.length>0&&h[0].length>1&&h[0][0]===c&&(l=h[0][1]),s.codecs.forEach(f=>{if(f.name.toUpperCase()==="RTX"&&f.parameters.apt){let d={ssrc:c,codecPayloadType:parseInt(f.parameters.apt,10)};c&&l&&(d.rtx={ssrc:l}),n.push(d),r&&(d=JSON.parse(JSON.stringify(d)),d.fec={ssrc:c,mechanism:o?"red+ulpfec":"red"},n.push(d))}}),n.length===0&&c&&n.push({ssrc:c});let u=e.matchPrefix(t,"b=");return u.length&&(u[0].indexOf("b=TIAS:")===0?u=parseInt(u[0].substring(7),10):u[0].indexOf("b=AS:")===0?u=parseInt(u[0].substring(5),10)*1e3*.95-2e3*8:u=void 0,n.forEach(f=>{f.maxBitrate=u})),n},e.parseRtcpParameters=function(t){const n={},s=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="cname")[0];s&&(n.cname=s.value,n.ssrc=s.ssrc);const r=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=r.length>0,n.compound=r.length===0;const o=e.matchPrefix(t,"a=rtcp-mux");return n.mux=o.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
`),t.mux&&(n+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(n+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),n},e.parseMsid=function(t){let n;const s=e.matchPrefix(t,"a=msid:");if(s.length===1)return n=s[0].substring(7).split(" "),{stream:n[0],track:n[1]};const r=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="msid");if(r.length>0)return n=r[0].value.split(" "),{stream:n[0],track:n[1]}},e.parseSctpDescription=function(t){const n=e.parseMLine(t),s=e.matchPrefix(t,"a=max-message-size:");let r;s.length>0&&(r=parseInt(s[0].substring(19),10)),isNaN(r)&&(r=65536);const o=e.matchPrefix(t,"a=sctp-port:");if(o.length>0)return{port:parseInt(o[0].substring(12),10),protocol:n.fmt,maxMessageSize:r};const a=e.matchPrefix(t,"a=sctpmap:");if(a.length>0){const c=a[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:r}}},e.writeSctpDescription=function(t,n){let s=[];return t.protocol!=="DTLS/SCTP"?s=["m="+t.kind+" 9 "+t.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:s=["m="+t.kind+" 9 "+t.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&s.push("a=max-message-size:"+n.maxMessageSize+`\r
`),s.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,n,s){let r;const o=n!==void 0?n:2;return t?r=t:r=e.generateSessionId(),`v=0\r
o=`+(s||"thisisadapterortc")+" "+r+" "+o+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,n){const s=e.splitLines(t);for(let r=0;r<s.length;r++)switch(s[r]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return s[r].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const s=e.splitLines(t)[0].substring(2).split(" ");return{kind:s[0],port:parseInt(s[1],10),protocol:s[2],fmt:s.slice(3).join(" ")}},e.parseOLine=function(t){const s=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:s[0],sessionId:s[1],sessionVersion:parseInt(s[2],10),netType:s[3],addressType:s[4],address:s[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let s=0;s<n.length;s++)if(n[s].length<2||n[s].charAt(1)!=="=")return!1;return!0},i.exports=e})(tc)),tc.exports}var Cd=Qy();const Ds=Jy(Cd),eS=tp({__proto__:null,default:Ds},[Cd]);function Uo(i){if(!i.RTCIceCandidate||i.RTCIceCandidate&&"foundation"in i.RTCIceCandidate.prototype)return;const e=i.RTCIceCandidate;i.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const s=new e(n),r=Ds.parseCandidate(n.candidate);for(const o in r)o in s||Object.defineProperty(s,o,{value:r[o]});return s.toJSON=function(){return{candidate:s.candidate,sdpMid:s.sdpMid,sdpMLineIndex:s.sdpMLineIndex,usernameFragment:s.usernameFragment}},s}return new e(n)},i.RTCIceCandidate.prototype=e.prototype,es(i,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new i.RTCIceCandidate(t.candidate),writable:"false"}),t))}function rl(i){!i.RTCIceCandidate||i.RTCIceCandidate&&"relayProtocol"in i.RTCIceCandidate.prototype||es(i,"icecandidate",e=>{if(e.candidate){const t=Ds.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function No(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in i.RTCPeerConnection.prototype||Object.defineProperty(i.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(a){if(!a||!a.sdp)return!1;const c=Ds.splitSections(a.sdp);return c.shift(),c.some(l=>{const h=Ds.parseMLine(l);return h&&h.kind==="application"&&h.protocol.indexOf("SCTP")!==-1})},n=function(a){const c=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},s=function(a){let c=65536;return e.browser==="firefox"&&(e.version<57?a===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},r=function(a,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const h=Ds.matchPrefix(a.sdp,"a=max-message-size:");return h.length>0?l=parseInt(h[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},o=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),l=s(c),h=r(arguments[0],c);let u;l===0&&h===0?u=Number.POSITIVE_INFINITY:l===0||h===0?u=Math.max(l,h):u=Math.min(l,h);const f={};Object.defineProperty(f,"maxMessageSize",{get(){return u}}),this._sctp=f}return o.apply(this,arguments)}}function Fo(i,e){if(!(i.RTCPeerConnection&&"createDataChannel"in i.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(s,r){const o=s.send;s.send=function(){const c=arguments[0],l=c.length||c.size||c.byteLength;if(s.readyState==="open"&&r.sctp&&l>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return o.apply(s,arguments)}}const n=i.RTCPeerConnection.prototype.createDataChannel;i.RTCPeerConnection.prototype.createDataChannel=function(){const r=n.apply(this,arguments);return t(r,this),r},es(i,"datachannel",s=>(t(s.channel,s.target),s))}function ol(i){if(!i.RTCPeerConnection||"connectionState"in i.RTCPeerConnection.prototype)return;const e=i.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=s=>{const r=s.target;if(r._lastConnectionState!==r.connectionState){r._lastConnectionState=r.connectionState;const o=new Event("connectionstatechange",s);r.dispatchEvent(o)}return s},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function al(i,e){if(!i.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=i.RTCPeerConnection.prototype.setRemoteDescription;i.RTCPeerConnection.prototype.setRemoteDescription=function(s){if(s&&s.sdp&&s.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const r=s.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);i.RTCSessionDescription&&s instanceof i.RTCSessionDescription?arguments[0]=new i.RTCSessionDescription({type:s.type,sdp:r}):s.sdp=r}return t.apply(this,arguments)}}function Oo(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(i.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function zo(i,e){if(!(i.RTCPeerConnection&&i.RTCPeerConnection.prototype))return;const t=i.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(i.RTCPeerConnection.prototype.setLocalDescription=function(){let s=arguments[0]||{};if(typeof s!="object"||s.type&&s.sdp)return t.apply(this,arguments);if(s={type:s.type,sdp:s.sdp},!s.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":s.type="offer";break;default:s.type="answer";break}return s.sdp||s.type!=="offer"&&s.type!=="answer"?t.apply(this,[s]):(s.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}const tS=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:al,shimAddIceCandidateNullOrEmpty:Oo,shimConnectionState:ol,shimMaxMessageSize:No,shimParameterlessSetLocalDescription:zo,shimRTCIceCandidate:Uo,shimRTCIceCandidateRelayProtocol:rl,shimSendThrowTypeError:Fo},Symbol.toStringTag,{value:"Module"}));function nS({window:i}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=Vl,n=Zy(i),s={browserDetails:n,commonShim:tS,extractVersion:lr,disableLog:qy,disableWarnings:jy,sdp:eS};switch(n.browser){case"chrome":if(!wu||!il||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),s;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),s;t("adapter.js shimming chrome."),s.browserShim=wu,Oo(i,n),zo(i),Jf(i,n),Qf(i),il(i,n),ed(i,n),sd(i,n),td(i),nd(i,n),rd(i,n),Uo(i),rl(i),ol(i),No(i,n),Fo(i,n),al(i,n);break;case"firefox":if(!Au||!sl||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),s;t("adapter.js shimming firefox."),s.browserShim=Au,Oo(i,n),zo(i),od(i,n),sl(i,n),cd(i,n),ad(i),ud(i),ld(i),hd(i),fd(i),dd(i,n),pd(i,n),md(i,n),gd(i,n),Uo(i),ol(i),No(i,n),Fo(i,n);break;case"safari":if(!Ru||!e.shimSafari)return t("Safari shim is not included in this adapter release."),s;t("adapter.js shimming safari."),s.browserShim=Ru,Oo(i,n),zo(i),Md(i),Td(i),xd(i),_d(i),vd(i),Ed(i),yd(i),bd(i),Uo(i),rl(i),No(i,n),Fo(i,n),al(i,n);break;default:t("Unsupported browser!");break}return s}const Du=nS({window:typeof window>"u"?void 0:window});function ts(i,e,t,n){Object.defineProperty(i,e,{get:t,set:n,enumerable:!0,configurable:!0})}class wd{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,s=Math.ceil(n/this.chunkedMTU);let r=0,o=0;for(;o<n;){const a=Math.min(n,o+this.chunkedMTU),c=e.slice(o,a),l={__peerData:this._dataCount,n:r,data:c,total:s};t.push(l),o=a,r++}return this._dataCount++,t}}}function iS(i){let e=0;for(const s of i)e+=s.byteLength;const t=new Uint8Array(e);let n=0;for(const s of i)t.set(s,n),n+=s.byteLength;return t}const nc=Du.default||Du,rr=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const i=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(i)?i==="chrome"?e>=this.minChromeVersion:i==="firefox"?e>=this.minFirefoxVersion:i==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return nc.browserDetails.browser}getVersion(){return nc.browserDetails.version||0}isUnifiedPlanSupported(){const i=this.getBrowser(),e=nc.browserDetails.version||0;if(i==="chrome"&&e<this.minChromeVersion)return!1;if(i==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},sS=i=>!i||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(i),Ad=()=>Math.random().toString(36).slice(2),Lu={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class rS extends wd{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(s){s.target&&t(s.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=Lu,this.browser=rr.getBrowser(),this.browserVersion=rr.getVersion(),this.pack=qf,this.unpack=Yf,this.supports=(function(){const t={browser:rr.isBrowserSupported(),webRTC:rr.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(Lu),t.audioVideo=!0;let s;try{s=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!s.ordered;try{s.binaryType="blob",t.binaryBlob=!rr.isIOS}catch{}}catch{}finally{s&&s.close()}}catch{}finally{n&&n.close()}return t})(),this.validateId=sS,this.randomToken=Ad}}const un=new rS,oS="PeerJS: ";class aS{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[oS,...t];for(const s in n)n[s]instanceof Error&&(n[s]="("+n[s].name+") "+n[s].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var Re=new aS,Xl={},cS=Object.prototype.hasOwnProperty,ln="~";function Nr(){}Object.create&&(Nr.prototype=Object.create(null),new Nr().__proto__||(ln=!1));function lS(i,e,t){this.fn=i,this.context=e,this.once=t||!1}function Rd(i,e,t,n,s){if(typeof t!="function")throw new TypeError("The listener must be a function");var r=new lS(t,n||i,s),o=ln?ln+e:e;return i._events[o]?i._events[o].fn?i._events[o]=[i._events[o],r]:i._events[o].push(r):(i._events[o]=r,i._eventsCount++),i}function Bo(i,e){--i._eventsCount===0?i._events=new Nr:delete i._events[e]}function tn(){this._events=new Nr,this._eventsCount=0}tn.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)cS.call(t,n)&&e.push(ln?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};tn.prototype.listeners=function(e){var t=ln?ln+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var s=0,r=n.length,o=new Array(r);s<r;s++)o[s]=n[s].fn;return o};tn.prototype.listenerCount=function(e){var t=ln?ln+e:e,n=this._events[t];return n?n.fn?1:n.length:0};tn.prototype.emit=function(e,t,n,s,r,o){var a=ln?ln+e:e;if(!this._events[a])return!1;var c=this._events[a],l=arguments.length,h,u;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,s),!0;case 5:return c.fn.call(c.context,t,n,s,r),!0;case 6:return c.fn.call(c.context,t,n,s,r,o),!0}for(u=1,h=new Array(l-1);u<l;u++)h[u-1]=arguments[u];c.fn.apply(c.context,h)}else{var f=c.length,d;for(u=0;u<f;u++)switch(c[u].once&&this.removeListener(e,c[u].fn,void 0,!0),l){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,t);break;case 3:c[u].fn.call(c[u].context,t,n);break;case 4:c[u].fn.call(c[u].context,t,n,s);break;default:if(!h)for(d=1,h=new Array(l-1);d<l;d++)h[d-1]=arguments[d];c[u].fn.apply(c[u].context,h)}}return!0};tn.prototype.on=function(e,t,n){return Rd(this,e,t,n,!1)};tn.prototype.once=function(e,t,n){return Rd(this,e,t,n,!0)};tn.prototype.removeListener=function(e,t,n,s){var r=ln?ln+e:e;if(!this._events[r])return this;if(!t)return Bo(this,r),this;var o=this._events[r];if(o.fn)o.fn===t&&(!s||o.once)&&(!n||o.context===n)&&Bo(this,r);else{for(var a=0,c=[],l=o.length;a<l;a++)(o[a].fn!==t||s&&!o[a].once||n&&o[a].context!==n)&&c.push(o[a]);c.length?this._events[r]=c.length===1?c[0]:c:Bo(this,r)}return this};tn.prototype.removeAllListeners=function(e){var t;return e?(t=ln?ln+e:e,this._events[t]&&Bo(this,t)):(this._events=new Nr,this._eventsCount=0),this};tn.prototype.off=tn.prototype.removeListener;tn.prototype.addListener=tn.prototype.on;tn.prefixed=ln;tn.EventEmitter=tn;Xl=tn;var ns={};ts(ns,"ConnectionType",()=>Si);ts(ns,"PeerErrorType",()=>Ft);ts(ns,"BaseConnectionErrorType",()=>cl);ts(ns,"DataConnectionErrorType",()=>$l);ts(ns,"SerializationType",()=>fa);ts(ns,"SocketEventType",()=>xi);ts(ns,"ServerMessageType",()=>Qt);var Si=(function(i){return i.Data="data",i.Media="media",i})({}),Ft=(function(i){return i.BrowserIncompatible="browser-incompatible",i.Disconnected="disconnected",i.InvalidID="invalid-id",i.InvalidKey="invalid-key",i.Network="network",i.PeerUnavailable="peer-unavailable",i.SslUnavailable="ssl-unavailable",i.ServerError="server-error",i.SocketError="socket-error",i.SocketClosed="socket-closed",i.UnavailableID="unavailable-id",i.WebRTC="webrtc",i})({}),cl=(function(i){return i.NegotiationFailed="negotiation-failed",i.ConnectionClosed="connection-closed",i})({}),$l=(function(i){return i.NotOpenYet="not-open-yet",i.MessageToBig="message-too-big",i})({}),fa=(function(i){return i.Binary="binary",i.BinaryUTF8="binary-utf8",i.JSON="json",i.None="raw",i})({}),xi=(function(i){return i.Message="message",i.Disconnected="disconnected",i.Error="error",i.Close="close",i})({}),Qt=(function(i){return i.Heartbeat="HEARTBEAT",i.Candidate="CANDIDATE",i.Offer="OFFER",i.Answer="ANSWER",i.Open="OPEN",i.Error="ERROR",i.IdTaken="ID-TAKEN",i.InvalidKey="INVALID-KEY",i.Leave="LEAVE",i.Expire="EXPIRE",i})({});const Pd="1.5.5";class hS extends Xl.EventEmitter{constructor(e,t,n,s,r,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];const a=e?"wss://":"ws://";this._baseUrl=a+t+":"+n+s+"peerjs?key="+r}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+Pd),this._disconnected=!1,this._socket.onmessage=s=>{let r;try{r=JSON.parse(s.data),Re.log("Server message received:",r)}catch{Re.log("Invalid server message",s.data);return}this.emit(xi.Message,r)},this._socket.onclose=s=>{this._disconnected||(Re.log("Socket closed.",s),this._cleanup(),this._disconnected=!0,this.emit(xi.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),Re.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){Re.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:Qt.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(xi.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class Dd{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Si.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,s={ordered:!!e.reliable},r=t.createDataChannel(n.label,s);n._initializeDataChannel(r),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){Re.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,s=this.connection.type,r=this.connection.provider;Re.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(Re.log(`Received ICE candidates for ${t}:`,o.candidate),r.socket.send({type:Qt.Candidate,payload:{candidate:o.candidate,type:s,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":Re.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(cl.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":Re.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(cl.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":Re.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},Re.log("Listening for data channel"),e.ondatachannel=o=>{Re.log("Received data channel");const a=o.channel;r.getConnection(t,n)._initializeDataChannel(a)},Re.log("Listening for remote stream"),e.ontrack=o=>{Re.log("Received remote stream");const a=o.streams[0],c=r.getConnection(t,n);if(c.type===Si.Media){const l=c;this._addStreamToMediaConnection(a,l)}}}cleanup(){Re.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const s=this.connection.dataChannel;s&&(n=!!s.readyState&&s.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);Re.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),Re.log("Set localDescription:",n,`for:${this.connection.peer}`);let s={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Si.Data){const r=this.connection;s={...s,label:r.label,reliable:r.reliable,serialization:r.serialization}}t.socket.send({type:Qt.Offer,payload:s,dst:this.connection.peer})}catch(s){s!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(Ft.WebRTC,s),Re.log("Failed to setLocalDescription, ",s))}}catch(n){t.emitError(Ft.WebRTC,n),Re.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();Re.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),Re.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:Qt.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(s){t.emitError(Ft.WebRTC,s),Re.log("Failed to setLocalDescription, ",s)}}catch(n){t.emitError(Ft.WebRTC,n),Re.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,s=this.connection.provider;Re.log("Setting remote description",t);const r=this;try{await n.setRemoteDescription(t),Re.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await r._makeAnswer()}catch(o){s.emitError(Ft.WebRTC,o),Re.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){Re.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),Re.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(Ft.WebRTC,t),Re.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(Re.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return Re.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){Re.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class Ld extends Xl.EventEmitter{emitError(e,t){Re.error("Error:",t),this.emit("error",new uS(`${e}`,t))}}class uS extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class Id extends Ld{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}var ul;const Mr=class Mr extends Id{get type(){return Si.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||Mr.ID_PREFIX+un.randomToken(),this._negotiator=new Dd(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Re.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{Re.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){Re.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case Qt.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case Qt.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:Re.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){Re.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const s of n)this.handleMessage(s);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};ul=new WeakMap,js(Mr,ul,Mr.ID_PREFIX="mc_");let Ko=Mr;class fS{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:s,path:r,key:o}=this._options,a=new URL(`${t}://${n}:${s}${r}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",Pd),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){Re.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==un.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===un.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw Re.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var fl,dl;const Bi=class Bi extends Id{get type(){return Si.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||Bi.ID_PREFIX+Ad(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new Dd(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{Re.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{Re.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{Re.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError($l.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case Qt.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case Qt.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:Re.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};fl=new WeakMap,dl=new WeakMap,js(Bi,fl,Bi.ID_PREFIX="dc_"),js(Bi,dl,Bi.MAX_BUFFERED_AMOUNT=8388608);let Jo=Bi;class Yl extends Jo{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Jo.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return Re.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class ic extends Yl{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new wd,this.serialization=fa.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=Yf(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const s=iS(n.data);this._handleDataMessage({data:s})}}_send(e,t){const n=qf(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);Re.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class dS extends Yl{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=fa.None}}class pS extends Yl{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=un.chunkedMTU){this.emitError($l.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=fa.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var pl;const Er=class Er extends Ld{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:dS,json:pS,binary:ic,"binary-utf8":ic,default:ic},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:un.CLOUD_HOST,port:un.CLOUD_PORT,path:"/",key:Er.DEFAULT_KEY,token:un.randomToken(),config:un.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==un.CLOUD_HOST?this._options.secure=un.isSecure():this._options.host==un.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&Re.setLogFunction(this._options.logFunction),Re.logLevel=this._options.debug||0,this._api=new fS(t),this._socket=this._createServerConnection(),!un.supports.audioVideo&&!un.supports.data){this._delayedAbort(Ft.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!un.validateId(n)){this._delayedAbort(Ft.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(s=>this._initialize(s)).catch(s=>this._abort(Ft.ServerError,s))}_createServerConnection(){const e=new hS(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(xi.Message,t=>{this._handleMessage(t)}),e.on(xi.Error,t=>{this._abort(Ft.SocketError,t)}),e.on(xi.Disconnected,()=>{this.disconnected||(this.emitError(Ft.Network,"Lost connection to server."),this.disconnect())}),e.on(xi.Close,()=>{this.disconnected||this._abort(Ft.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,s=e.src;switch(t){case Qt.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case Qt.Error:this._abort(Ft.ServerError,n.msg);break;case Qt.IdTaken:this._abort(Ft.UnavailableID,`ID "${this.id}" is taken`);break;case Qt.InvalidKey:this._abort(Ft.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Qt.Leave:Re.log(`Received leave message from ${s}`),this._cleanupPeer(s),this._connections.delete(s);break;case Qt.Expire:this.emitError(Ft.PeerUnavailable,`Could not connect to peer ${s}`);break;case Qt.Offer:{const r=n.connectionId;let o=this.getConnection(s,r);if(o&&(o.close(),Re.warn(`Offer received for existing Connection ID:${r}`)),n.type===Si.Media){const c=new Ko(s,this,{connectionId:r,_payload:n,metadata:n.metadata});o=c,this._addConnection(s,o),this.emit("call",c)}else if(n.type===Si.Data){const c=new this._serializers[n.serialization](s,this,{connectionId:r,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});o=c,this._addConnection(s,o),this.emit("connection",c)}else{Re.warn(`Received malformed connection type:${n.type}`);return}const a=this._getMessages(r);for(const c of a)o.handleMessage(c);break}default:{if(!n){Re.warn(`You received a malformed message from ${s} of type ${t}`);return}const r=n.connectionId,o=this.getConnection(s,r);o&&o.peerConnection?o.handleMessage(e):r?this._storeMessage(r,e):Re.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){Re.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Ft.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){Re.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Ft.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){Re.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const s=new Ko(e,this,{...n,_stream:t});return this._addConnection(e,s),s}_addConnection(e,t){Re.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const s of n)if(s.connectionId===t)return s;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){Re.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(Re.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;Re.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)Re.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)Re.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(Ft.ServerError,t))}};pl=new WeakMap,js(Er,pl,Er.DEFAULT_KEY="peerjs");let Qo=Er;const Iu="ABCDEFGHJKMNPQRSTUVWXYZ23456789",mS=4,Uu="shuttle-clash-v1-",Nu={iceServers:[{urls:"stun:stun.miwifi.com:3478"},{urls:"stun:stun.chat.bilibili.com:3478"},{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.cloudflare.com:3478"}]};function gS(){let i="";for(let e=0;e<mS;e++)i+=Iu[Math.random()*Iu.length|0];return i}class Ud{constructor(){this.peer=null,this.conn=null,this.role=null,this.code=null,this.onMessage=null,this.onPeerJoin=null,this.onClose=null,this.onError=null,this._closed=!1}host(e){return this.role="host",new Promise((t,n)=>{let s=0;const r=()=>{this.code=gS();const o=new Qo(Uu+this.code,{debug:0,config:Nu});o.on("open",()=>{this.peer=o,e==null||e(this.code),t(this.code)}),o.on("error",a=>{var c;a.type==="unavailable-id"&&s++<5?(o.destroy(),r()):this.peer?(c=this.onError)==null||c.call(this,a):n(a)}),o.on("connection",a=>{if(this.conn){a.close();return}this._wire(a),a.on("open",()=>{var c;return(c=this.onPeerJoin)==null?void 0:c.call(this)})})};r()})}join(e){return this.role="guest",this.code=e.toUpperCase().trim(),new Promise((t,n)=>{const s=new Qo({debug:0,config:Nu});this.peer=s,s.on("error",r=>{var o,a;(o=this.conn)!=null&&o.open?(a=this.onError)==null||a.call(this,r):n(r)}),s.on("open",()=>{const r=s.connect(Uu+this.code,{reliable:!0});this._wire(r),r.on("open",()=>t()),setTimeout(()=>{r.open||n(new Error("连接超时"))},12e3)})})}_wire(e){this.conn=e,e.on("data",t=>{var n;return(n=this.onMessage)==null?void 0:n.call(this,t)}),e.on("close",()=>{var t;this._closed||(t=this.onClose)==null||t.call(this)}),e.on("error",t=>{var n;return(n=this.onError)==null?void 0:n.call(this,t)})}get connected(){var e;return!!((e=this.conn)!=null&&e.open)}send(e){var t;(t=this.conn)!=null&&t.open&&this.conn.send(e)}close(){var e,t;this._closed=!0;try{(e=this.conn)==null||e.close()}catch{}try{(t=this.peer)==null||t.destroy()}catch{}this.conn=null,this.peer=null}}class _S{constructor(){this.dir={x:0,z:0},this.aim={x:0,z:0},this.held=!1,this.assist=!1,this._latchedRelease=!1,this._latchedPress=!1}reset(){this.dir={x:0,z:0},this.aim={x:0,z:0},this.held=!1,this.assist=!1,this._latchedRelease=!1,this._latchedPress=!1}apply(e){const t=r=>typeof r=="number"&&Number.isFinite(r)?r:null,n=r=>{if(!Array.isArray(r)||r.length<2)return null;const o=t(r[0]),a=t(r[1]);if(o===null||a===null)return null;const c=Math.hypot(o,a);return c>1?{x:o/c,z:a/c}:{x:o,z:a}},s=n(e.d);return s?(this.dir=s,this.aim=n(e.a)??s,this.assist=e.as===1||e.as===!0,(e.p===1||e.p===!0)&&(this._latchedPress=!0),(e.r===1||e.r===!0)&&(this._latchedRelease=!0),this.held=e.h===1||e.h===!0,!0):!1}move(){return{...this.dir}}aimDir(){return{...this.aim}}consumeCancel(){return!1}hitHeld(){return this.held}hitPressed(){return this._latchedPress}hitReleased(){return this._latchedRelease}endFrame(){this._latchedPress=!1,this._latchedRelease=!1}}function vS(i,e){const t=i.ball;return{t:"s",b:[t.x,t.y,t.z,t.vx,t.vy,t.vz,t.alive?1:0],p:e.map(n=>{var s,r,o;return[n.x,n.z,n.vx,n.vz,n.charging?n.charge:0,n.swing?1:0,((s=n.swing)==null?void 0:s.type)??"",((r=n.swing)==null?void 0:r.phase)??0,(o=n.swing)!=null&&o.playing?1:0]}),sc:[i.score[0],i.score[1]],srv:i.server,ph:i.phase,rh:i.rallyHits,lr:i.longestRally,ms:i.matchMaxSpeed}}function xS(i,e,t){const n=e.ball;[n.x,n.y,n.z,n.vx,n.vy,n.vz]=i.b,n.alive=!!i.b[6],i.p.forEach((s,r)=>{const o=t[r];o.netX=s[0],o.netZ=s[1],o.vx=s[2],o.vz=s[3],o.charge=s[4],o.charging=s[4]>.001,o.swing=s[5]?{type:s[6]||"drive",phase:s[7],playing:!!s[8]}:null}),e.score[0]=i.sc[0],e.score[1]=i.sc[1],e.server=i.srv,e.phase=i.ph,e.rallyHits=i.rh,e.longestRally=i.lr,e.matchMaxSpeed=i.ms}function yS(i,e,t,n,s,r,o,a,c){const l=n-i,h=s-e,u=r-t,f=l*l+h*h+u*u;if(f<1e-12)return 0;const d=((o-i)*l+(a-e)*h+(c-t)*u)/f;return Math.max(0,Math.min(1,d))}let ko=1;function bn(){return ko=ko*1103515245+12345&2147483647,ko/2147483647}const Fu=i=>i-Math.floor(i),SS=(i,e)=>(i%e+e)%e;function Ou(i,e,t){const n=Fu(Math.sin(i*12.9898)*43758.5453)*Math.PI*2,s=Math.sin(t*Math.PI*2/56+n)*1.15+Math.sin(t*Math.PI*2/78+n*1.73)*.65,r=Math.sin(t*Math.PI*2/11+e*.34+n*2.1)*.28,o=e*.075*Math.sin(t*Math.PI*2/42+n*.7),a=Math.floor((t+20)/70),c=Fu(Math.sin(a*127.1+i*.0137)*43758.5453),l=SS(t+20,70),h=24+c*13,u=Math.exp(-(((l-h)/4.8)**2))*(1.15+c*.65),f=Math.sin((l-44)*Math.PI/7)*.22*Math.max(0,1-Math.abs(l-51)/12);return s+r+o+u+f}const Es={ROCK:"rock",TREE:"tree",RAMP:"ramp"};class MS{constructor(){this.reset(),this.events=[]}reset(e=20260804){ko=e,this.seed=e|0,this._terrainBase=Ou(this.seed,0,0),this.px=0,this.py=0,this.groundY=0,this.groundSlope=0,this.vy=0,this.vx=0,this.carve=0,this.airborne=!1,this.rot=0,this.flipping=!1,this.flipDir=0,this.flips=0,this.spinRot=0,this.spinSteps=0,this.spinning=!1,this.grabbing=!1,this.grabTime=0,this.airTime=0,this.airBudget=0,this.landTimer=0,this.landImpact=0,this.maxLandingCompression=0,this.tuck=!1,this.stumbleTimer=0,this.speed=ot.BASE_SPEED,this.topSpeed=ot.BASE_SPEED,this.dist=0,this.avalDist=-45,this.time=0,this.score=0,this.combo=0,this.bestCombo=0,this.trickTimer=0,this.trickMult=1,this.smashes=0,this.bestAir=0,this.naturalJumps=0,this.trickHistory=[],this.tracks=[],this.landingMarks=[],this._lastTrackS=-1/0,this.obstacles=[],this.ball={x:0,y:0,z:0,vx:0,vy:0,vz:0,px:0,py:0,pz:0,alive:!1},this.ballCooldown=1.6,this.nextSegZ=ot.SPAWN_Z,this.over=!1;for(let t=-30;t>ot.SPAWN_Z;t-=ot.SEG_LEN)this._genSegment(t);this.charge=0,this.charging=!1,this.swingCooldown=0,this.swing=null,this._prevDirZ=0,this.groundSlope=this.terrainSlope(this.px,this.dist)}terrainHeight(e,t){return Ou(this.seed,e,t)-this._terrainBase}terrainSlope(e,t){return(this.terrainHeight(e,t+.35)-this.terrainHeight(e,t-.35))/(.35*2)}emit(e){this.events.push(e)}drainEvents(){const e=this.events;return this.events=[],e}_genSegment(e){const t=2+(bn()*2.4|0);for(let n=0;n<t;n++){const s=bn()<.3?Es.RAMP:bn()<.55?Es.TREE:Es.ROCK;this.obstacles.push({type:s,x:(bn()*2-1)*(ot.WIDTH-.5),z:e-bn()*ot.SEG_LEN,hit:!1})}}_launchBall(){const e={x:this.px+(bn()*2-1)*1.1,y:this.groundY,z:1.2+bn()*.9},t=bn()>.5?1:-1,n=12.5,s=t*(ot.WIDTH+1.8),r=-(8+bn()*3),o=Math.sqrt(Math.max(1,n*n-(e.z-r)**2)),a=Math.sign(s-e.x)*Math.min(Math.abs(s-e.x),o),c=this.terrainHeight(e.x+a,this.dist-r),l={x:e.x+a,y:c+2+bn()*1.4,z:r},h=Lo(l,e,24+bn()*14,{needNet:!1});if(!h){this.ballCooldown=.8;return}const u=this.ball;u.x=l.x,u.y=l.y,u.z=l.z,u.px=u.x,u.py=u.y,u.pz=u.z,u.vx=h.velocity.x,u.vy=h.velocity.y,u.vz=h.velocity.z,u.alive=!0,this.emit({type:"ball-launch",side:t})}update(e,t,n,s){if(this.over)return;const r=1/120;let o=Math.min(e,.25),a=!0;for(;o>1e-9&&!this.over;){const c=Math.min(r,o);this._step(c,t,n,a&&s),o-=c,a=!1}}_step(e,t,n,s){var w;this.time+=e,this.landTimer>0&&(this.landTimer=Math.max(0,this.landTimer-e),this.maxLandingCompression=Math.max(this.maxLandingCompression,this.landingCompression));const r=this.stumbleTimer>0;r&&(this.stumbleTimer-=e),this.tuck=t.z>.55&&!this.airborne;let o=Math.min(ot.MAX_SPEED,ot.BASE_SPEED+this.time*ot.ACCEL)+(this.tuck?ot.TUCK_BONUS:0);o+=Math.max(-5.5,Math.min(5.5,-this.groundSlope*22)),r&&(o*=ot.STUMBLE_SLOW),this.speed+=(o-this.speed)*Math.min(1,e*2.2),this.topSpeed=Math.max(this.topSpeed,this.speed);const a=.52+.48*Math.min(1,ot.BASE_SPEED/Math.max(ot.BASE_SPEED,this.speed)),c=r?0:t.x*ot.STEER*a*(this.airborne?.55:1);this.vx+=(c-this.vx)*Math.min(1,e*(this.airborne?2.2:4.5)),this.px+=this.vx*e,this.px=Math.max(-5,Math.min(ot.WIDTH,this.px)),Math.abs(this.px)>=ot.WIDTH-1e-4&&(this.vx=0);const l=this.airborne?0:t.x*Math.min(1,this.speed/18);this.carve+=(l-this.carve)*Math.min(1,e*5.5);const h=t.z<-.6&&this._prevDirZ>=-.6;if(this._prevDirZ=t.z,h&&!r)if(this.airborne)this.flipping||(this.flipping=!0,this.flipDir=1);else{const b=this.obstacles.find(A=>A.type===Es.RAMP&&!A.hit&&Math.abs(A.x-this.px)<1.5&&A.z>-2.5&&A.z<1.5);b&&(b.hit=!0),this._beginAir(b?ot.RAMP_V:ot.HOP_V,b?"ramp-jump":"hop")}if(this.airborne){if(this.airBudget<=0&&(this.airBudget=Math.max(1,Math.floor(2*Math.max(0,this.vy)/Ct.GRAVITY/.72))),this.airTime+=e,this.airTime>.1&&Math.abs(t.z)>.55&&(this.flipping=!0,this.flipDir=t.z<0?1:-1),this.airTime>.08&&Math.abs(t.x)>.48&&(this.spinning=!0),this.vy-=Ct.GRAVITY*e,this.py+=this.vy*e,this.flipping){this.flipDir||(this.flipDir=1),this.rot+=ot.FLIP_RATE*this.flipDir*e;const b=Math.floor(Math.abs(this.rot)/(Math.PI*2));b>this.flips&&(this.flips=b,this.emit({type:"flip",n:this.flips,dir:this.flipDir>0?"back":"front"}))}if(this.spinning&&Math.abs(t.x)>.15){this.spinRot+=Math.PI*2.6*Math.sign(t.x)*e;const b=Math.floor(Math.abs(this.spinRot)/Math.PI);b>this.spinSteps&&(this.spinSteps=b,this.emit({type:"spin",degrees:this.spinSteps*180,dir:this.spinRot>0?"right":"left"}))}this.bestAir=Math.max(this.bestAir,this.py)}this.trickTimer>0&&(this.trickTimer-=e,this.trickTimer<=0&&(this.trickMult=1));const u=this.groundY,f=this.groundSlope,d=this.speed*e;this.dist+=d,this.nextSegZ+=d,this.nextSegZ>ot.SPAWN_Z+ot.SEG_LEN&&(this._genSegment(ot.SPAWN_Z),this.nextSegZ=ot.SPAWN_Z);const g=this.terrainHeight(this.px,this.dist),_=this.terrainSlope(this.px,this.dist);if(this.groundY=g,this.groundSlope=_,this.airborne){this.py-=g-u;const b=this.vy-_*this.speed;this.py<=0&&b<0&&this._finishLanding(Math.max(0,-b))}else{this.py=0,this.vy=_*this.speed;const b=1.35,A=this.terrainHeight(this.px,this.dist+b),E=g+_*b-A;!r&&f>.025&&_<f-.018&&E>.055&&this.speed>8.5&&(this._beginAir(Math.max(1.35,f*this.speed),null),this.py=.025,this.naturalJumps+=1,this.emit({type:"terrain-jump",slope:f,speed:this.speed}))}for(const b of this.obstacles)b.z+=d,!b.hit&&b.type!==Es.RAMP&&b.z>-.5&&b.z<.6&&Math.abs(b.x-this.px)<.72&&this.py<.85&&(b.hit=!0,this._stumble(b.type===Es.TREE?"撞树上了":"磕在石头上"));this.obstacles=this.obstacles.filter(b=>b.z<ot.KILL_Z),!this.airborne&&this.dist-this._lastTrackS>=.32&&(this.tracks.push({x:this.px,s:this.dist,y:this.groundY,carve:Math.abs(this.carve)}),this._lastTrackS=this.dist);const p=ot.AVAL_SPEED0+this.time*ot.AVAL_ACCEL;this.avalDist+=p*e;const m=ot.AVAL_GAP0;if(this.dist-this.avalDist>m&&(this.avalDist=this.dist-m),this.avalDist>=this.dist){this.over=!0,this.emit({type:"run-over"});return}const M=this.ball;if(M.alive){M.px=M.x,M.py=M.y,M.pz=M.z,$s(M,e);const b=this.terrainHeight(M.x,this.dist-M.z);(M.y<=b+Ct.RADIUS||M.z>6)&&(M.alive=!1,this.ballCooldown=1.2+bn()*1.4,this.combo>0&&(this.combo=Math.floor(this.combo/2),this.emit({type:"ball-miss"})))}else this.ballCooldown-=e,this.ballCooldown<=0&&this._launchBall();this.swingCooldown>0&&(this.swingCooldown-=e),(w=this.swing)!=null&&w.playing&&(this.swing.phase+=e/.3,this.swing.phase>=1&&(this.swing=null));const S=!this.airborne||this._canAerialSmash();let v=!1;if(this.grabbing&&(!n||S)&&(this.grabbing=!1,v=!0,this.emit({type:"grab-end",duration:this.grabTime})),n&&this.airborne&&!S&&!r?(this.grabbing||this.emit({type:"grab-start"}),this.grabbing=!0,this.grabTime+=e,this.charging=!1,this.charge=0,this.swing=null):n&&this.swingCooldown<=0&&!r?(this.charging=!0,this.charge=Math.min(1,this.charge+e/ht.CHARGE_TIME),this.swing={type:"overhead",phase:.04+this.charge*.3,playing:!1}):!n&&!s&&(this.charging=!1),s&&!v&&this.swingCooldown<=0&&!r){const b=Math.max(.35,this.charge);this.charging=!1,this.charge=0,this.swing&&(this.swing.playing=!0),this._trySmash(b)}}_canAerialSmash(){const e=this.ball;if(!e.alive)return!1;const t=this.groundY+1.3+this.py;return Math.hypot(e.x-this.px,e.y-t,e.z)<=ht.REACH_RADIUS*2.1}_beginAir(e,t){this.vy=e,this.airborne=!0,this.airTime=0,this.airBudget=Math.max(1,Math.floor(2*Math.max(0,e)/Ct.GRAVITY/.72)),this.rot=0,this.flipDir=0,this.flips=0,this.flipping=!1,this.spinRot=0,this.spinSteps=0,this.spinning=!1,this.grabbing=!1,this.grabTime=0,t&&this.emit({type:t})}_trySmash(e){const t=this.ball;if(!t.alive){this.swingCooldown=ht.SWING_COOLDOWN,this.emit({type:"whiff"});return}const n=this.groundY+1.3+this.py,s=yS(t.px,t.py,t.pz,t.x,t.y,t.z,this.px,n,0),r=t.px+(t.x-t.px)*s,o=t.py+(t.y-t.py)*s,a=t.pz+(t.z-t.pz)*s,c=Math.hypot(r-this.px,o-n,a-0);if(c>ht.REACH_RADIUS*1.6){this.swingCooldown=ht.SWING_COOLDOWN,this.emit({type:"whiff"});return}const l=1-Math.min(1,c/(ht.REACH_RADIUS*1.6)),h=this.airborne;t.vx=(r-this.px)*6,t.vy=6+e*10,t.vz=-(38+e*30),t.x=r,t.y=Math.max(this.groundY+.5,o),t.z=a,this.combo+=1,this.bestCombo=Math.max(this.bestCombo,this.combo);const u=1+Math.min(2,this.combo*.12);let f=120*(.55+l*.9)*(.7+e*.6)*u*this.trickMult;h&&(f*=2),f=Math.round(f/10)*10,this.score+=f,this.smashes+=1,this.avalDist-=1.2+l*1.8,this.emit({type:"smash",pts:f,quality:l,aerial:h,trickMult:this.trickMult,combo:this.combo,at:{x:r,y:o,z:a}}),t.alive=!0}_finishLanding(e){this.py=0,this.airborne=!1,this.landImpact=Math.min(1,e/8),this.landTimer=.32;const t=Math.abs(this.rot)/(Math.PI*2),n=Math.abs(this.spinRot)/Math.PI,s=t>=ot.MIN_FLIP_TURNS?Math.max(1,Math.round(t)):0,r=n>=.42?Math.max(1,Math.round(n)):0,o=this.grabTime>=.12,a=this.flipping||this.spinning||this.grabTime>0,c=this.flipping&&!s||this.spinning&&!r||this.grabTime>0&&!o,l=s+Math.ceil(r/2);if(a&&(c||l>this.airBudget))this._stumble(c?"动作没做完整!":"动作超出滞空预算!");else if(a){const u=[],f=[];if(s){const p=this.flipDir<0;u.push(`${p?"Frontflip":"Backflip"}${s>1?` ×${s}`:""}`),f.push(p?"frontflip":"backflip")}r&&(u.push(`${r*180}° ${this.spinRot<0?"Left":"Right"}`),f.push("spin")),o&&(u.push("Grab"),f.push("grab")),u.length>1&&f.push("combo");const d=(1+s)*(1+r/2)*(o?1.5:1),g=s*500+r*180+Math.round(this.grabTime*260),_=Math.max(100,Math.round(g*d/10)*10);this.score+=_,this.trickMult=Math.max(2,Math.round(d)),this.trickTimer=ot.TRICK_WINDOW,this.speed+=ot.TRICK_BOOST*Math.max(1,s+Math.floor(r/2));for(const p of f)this.trickHistory.includes(p)||this.trickHistory.push(p);this.emit({type:"trick-land",name:`${u.join(" + ")}!`,flips:s,spin:r*180,grab:+this.grabTime.toFixed(2),pts:_,mult:this.trickMult})}const h={x:this.px,s:this.dist,y:this.groundY,impact:e};this.landingMarks.push(h),this.emit({type:"land",...h}),this.rot=0,this.flipDir=0,this.flips=0,this.flipping=!1,this.spinRot=0,this.spinSteps=0,this.spinning=!1,this.grabbing=!1,this.grabTime=0,this.airTime=0,this.airBudget=0}_stumble(e){this.stumbleTimer=ot.STUMBLE_TIME,this.combo=0,this.trickTimer=0,this.trickMult=1,this.rot=0,this.flipDir=0,this.flips=0,this.flipping=!1,this.spinRot=0,this.spinSteps=0,this.spinning=!1,this.grabbing=!1,this.grabTime=0,this.emit({type:"stumble",reason:e})}get avalCloseness(){return Math.max(0,Math.min(1,1-(this.dist-this.avalDist)/ot.AVAL_GAP0))}get landingCompression(){if(this.landTimer<=0)return 0;const e=1-this.landTimer/.32;return this.landImpact*Math.sin(Math.PI*Math.max(0,Math.min(1,e)))}get stats(){return{score:this.score,dist:Math.round(this.dist),bestCombo:this.bestCombo,smashes:this.smashes,bestAir:+this.bestAir.toFixed(1),naturalJumps:this.naturalJumps,trickKinds:this.trickHistory.length,groundY:+this.groundY.toFixed(2),slope:+this.groundSlope.toFixed(3),maxLandingCompression:+this.maxLandingCompression.toFixed(2)}}}const In=24,ES=10,pi=32,Oi=18;function TS(i){const e=(pi+1)*(Oi+1),t=new Float32Array(e*3),n=new Float32Array(e*2),s=[];let r=0;for(let a=0;a<=Oi;a++){const c=a/Oi*In;for(let l=0;l<=pi;l++,r++){const h=-i/2+l/pi*i;t[r*3]=h,t[r*3+1]=0,t[r*3+2]=In/2-c,n[r*2]=l/pi*2,n[r*2+1]=a/Oi}}for(let a=0;a<Oi;a++)for(let c=0;c<pi;c++){const l=a*(pi+1)+c,h=l+1,u=l+pi+1,f=u+1;s.push(l,u,h,h,u,f)}const o=new Et;return o.setAttribute("position",new zt(t,3)),o.setAttribute("uv",new zt(n,2)),o.setIndex(s),o}function zu(i,e,t){i.userData.sStart=t;const n=i.geometry.attributes.position,s=i.geometry.attributes.uv;let r=0;for(let o=0;o<=Oi;o++){const a=o/Oi*In;for(let c=0;c<=pi;c++,r++){const l=n.getX(r);n.setY(r,e.terrainHeight(l,t+a)),s.setY(r,(t+a)/42)}}n.needsUpdate=!0,s.needsUpdate=!0,i.geometry.computeVertexNormals(),i.geometry.computeBoundingSphere()}function bS(){const i=document.createElement("canvas");i.width=512,i.height=1024;const e=i.getContext("2d");e.fillStyle="#5f809b",e.fillRect(0,0,i.width,i.height);for(let n=0;n<9e3;n++){const s=Math.random();e.fillStyle=s>.5?`rgba(245,249,255,${.04+Math.random()*.08})`:`rgba(45,75,105,${.025+Math.random()*.05})`,e.fillRect(Math.random()*512,Math.random()*1024,1.5,1.5)}e.strokeStyle="rgba(40,60,90,0.16)",e.lineWidth=3;for(let n=0;n<7;n++){const s=Math.random()*512;e.beginPath(),e.moveTo(s,0),e.bezierCurveTo(s+30,300,s-30,700,s+10,1024),e.stroke()}const t=new kn(i);return t.colorSpace=Ut,t.wrapS=t.wrapT=Xi,t.repeat.set(2,6),t.anisotropy=8,t}function CS(i){const e=new yt;e.visible=!1,i.add(e);const t=new le(new Un(145,32,18),new Xt({side:qt,depthWrite:!1,fog:!1,vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      varying vec3 vDir;
      void main() {
        float h = clamp(vDir.y * 0.72 + 0.34, 0.0, 1.0);
        vec3 horizon = vec3(0.22, 0.55, 0.82);
        vec3 zenith = vec3(0.02, 0.12, 0.48);
        vec3 col = mix(horizon, zenith, smoothstep(0.0, 1.0, h));
        vec3 sunDir = normalize(vec3(-0.18, 0.18, -0.96));
        float sun = smoothstep(0.992, 0.9992, dot(normalize(vDir), sunDir));
        float glow = pow(max(0.0, dot(normalize(vDir), sunDir)), 18.0);
        col += vec3(1.0, 0.58, 0.24) * sun * 1.3;
        col += vec3(1.0, 0.55, 0.22) * glow * 0.16;
        gl_FragColor = vec4(col, 1.0);
      }`}));t.renderOrder=-10,e.add(t);const n=new Ff(9358335,3562114,.72),s=new _r(16763271,1.85);s.position.set(-18,18,-70),s.target.position.set(0,0,0),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.camera.left=-18,s.shadow.camera.right=18,s.shadow.camera.top=24,s.shadow.camera.bottom=-12,s.shadow.camera.near=1,s.shadow.camera.far=90,s.shadow.bias=-5e-4,s.shadow.normalBias=.035,s.shadow.radius=3;const r=new _r(7977727,.22);r.position.set(12,9,-8),e.add(n,s,s.target,r);const o=[n,s,r],a=new le(new Il(8.5,48),new Yt({color:14603675,side:$t,fog:!1,toneMapped:!1}));a.position.set(-18,18,-95),e.add(a);const c=bS(),l=Zo(c.image,2);l.repeat.copy(c.repeat);const h=new Nf({map:c,normalMap:l,normalScale:new ce(.7,.7),roughness:.9,metalness:0,clearcoat:.08,clearcoatRoughness:.38,envMapIntensity:.38,side:$t}),u=[];for(let W=0;W<ES;W++){const N=new le(TS((ot.WIDTH+3.2)*2),h);N.receiveShadow=!0,N.userData.sStart=null,u.push(N),e.add(N)}const f=12e3,d=new Float32Array(f*4*3),g=new Uint32Array((f-1)*12);let _=0;for(let W=1;W<f;W++){const N=(W-1)*4,ie=W*4;g[_++]=N,g[_++]=N+1,g[_++]=ie,g[_++]=N+1,g[_++]=ie+1,g[_++]=ie,g[_++]=N+2,g[_++]=N+3,g[_++]=ie+2,g[_++]=N+3,g[_++]=ie+3,g[_++]=ie+2}const p=new Et;p.setAttribute("position",new zt(d,3)),p.setIndex(new zt(g,1)),p.setDrawRange(0,0);const m=new le(p,new Yt({color:5401478,side:$t,polygonOffset:!0,polygonOffsetFactor:-2}));m.frustumCulled=!1,e.add(m);const M=new Ze({color:6387085,roughness:1,transparent:!0,opacity:.78,side:$t}),S=[];for(let W=0;W<48;W++){const N=new le(new oa(.18,.42,28),M);N.rotation.x=-Math.PI/2,N.visible=!1,S.push(N),e.add(N)}const v=220,w=new Float32Array(v*3),b=new Float32Array(v*3),A=new Float32Array(v);w.fill(-99);const P=new Et;P.setAttribute("position",new zt(w,3));const E=new Ih(P,new jc({color:15332607,size:.085,transparent:!0,opacity:.9,depthWrite:!1}));E.frustumCulled=!1,e.add(E);let x=0,D=0;const I=(W,N,ie,Le,Ne=0)=>{const C=x++%v;A[C]=.45+Math.random()*.55,w[C*3]=W+(Math.random()-.5)*.15,w[C*3+1]=N+.04,w[C*3+2]=ie+(Math.random()-.5)*.12,b[C*3]=Ne*(.8+Math.random()*1.8)+(Math.random()-.5)*Le*.16,b[C*3+1]=1.1+Math.random()*(1.2+Le*.22),b[C*3+2]=.6+Math.random()*1.8},H=(W,N,ie)=>{const Le=W.tracks[Math.max(0,ie-1)]??N,Ne=N.x-Le.x,C=Math.max(.001,N.s-Le.s),y=Math.hypot(Ne,C),O=C/y,X=Ne/y,z=.045+N.carve*.055,G=.28+N.carve*.05,ve=[-G/2-z/2,-G/2+z/2,G/2-z/2,G/2+z/2];for(let ae=0;ae<4;ae++){const be=N.x+O*ve[ae],Pe=-N.s+X*ve[ae],he=N.s-X*ve[ae];p.attributes.position.setXYZ(ie*4+ae,be,W.terrainHeight(be,he)+.014,Pe)}},q=[{z:-142,color:7049649,snow:15260869,scale:1.05,peaks:[[-48,29],[-22,35],[6,27],[34,33],[58,25]]},{z:-112,color:4550548,snow:14931126,scale:.92,peaks:[[-38,27],[-12,34],[18,30],[43,24]]},{z:-88,color:3234424,snow:14469540,scale:.78,peaks:[[-28,24],[0,31],[30,26]]}];for(const W of q){const N=new Ze({color:W.color,roughness:1}),ie=new Yt({color:W.snow});for(const[Le,Ne]of W.peaks){const C=16*W.scale,y=new le(new Vi(C,Ne,5),N);y.position.set(Le,Ne/2-4,W.z);const O=new le(new Vi(C*.38,Ne*.3,5),ie);O.position.set(Le,Ne*.85-4,W.z),e.add(y,O)}}const V=new Ze({color:4741995,roughness:.9}),k=new Ze({color:4863271,roughness:.95}),J=new Ze({color:2382921,roughness:.9}),$=new Ze({color:13753827,roughness:1,emissive:7044488,emissiveIntensity:.08}),pe=new Ze({color:11060182,roughness:.7}),Z=()=>{const W=new yt,N=new le(new gr(.55,0),V);N.scale.set(1.15,.8,1),N.position.y=.35,N.castShadow=!0;const ie=new le(new gr(.42,0),$);return ie.scale.set(1.1,.4,.95),ie.position.y=.72,W.add(N,ie),W},re=()=>{const W=new yt,N=new le(new dn(.09,.13,.7,7),k);N.position.y=.35,W.add(N);for(let ie=0;ie<3;ie++){const Le=new le(new Vi(.75-ie*.18,.85,8),J);Le.position.y=.95+ie*.55,Le.castShadow=!0,W.add(Le);const Ne=new le(new Vi(.72-ie*.18,.28,8),$);Ne.position.y=1.24+ie*.55,W.add(Ne)}return W},ge=()=>{const W=new yt,N=new le(new at(2.4,.55,2),pe);N.rotation.x=-.32,N.position.y=.16,N.castShadow=!0,W.add(N);const ie=new le(new at(2.5,.08,.2),new Yt({color:15223634}));return ie.position.set(0,.52,-.85),ie.rotation.x=-.32,W.add(ie),W},Ee={rock:[],tree:[],ramp:[]};for(let W=0;W<12;W++){const N=Z();N.visible=!1,e.add(N),Ee.rock.push(N)}for(let W=0;W<12;W++){const N=re();N.visible=!1,e.add(N),Ee.tree.push(N)}for(let W=0;W<8;W++){const N=ge();N.visible=!1,e.add(N),Ee.ramp.push(N)}const ze=new yt,Ye=new Ze({color:12112867,roughness:1,transparent:!0,opacity:.86});for(let W=0;W<9;W++){const N=new le(new gr(1.6+Math.random()*1.6,1),Ye);N.position.set((W-4)*2.3+(Math.random()-.5),.8+Math.random()*2.2,(Math.random()-.5)*1.5),N.userData.wob=Math.random()*Math.PI*2,ze.add(N)}e.add(ze);const K=420,te=new Float32Array(K*3);for(let W=0;W<K;W++)te[W*3]=(Math.random()-.5)*30,te[W*3+1]=Math.random()*12,te[W*3+2]=-Math.random()*60+8;const xe=new Et;xe.setAttribute("position",new zt(te,3));const Te=new Ih(xe,new jc({color:15857919,size:.075,transparent:!0,opacity:.42,depthWrite:!1}));e.add(Te);let Ce=null,He=-1,it=0,L=0;const oe=new Ve(5083076),ne=new ra(7907273,85,190);let Q=null,ee=null;return{group:e,sky:t,sun:s,sunDisc:a,mountainLayers:q,groundMat:h,groundTex:c,terrainChunks:u,trackMesh:m,impacts:S,snowSpray:E,pools:Ee,avalanche:ze,flakes:Te,lights:o,get trackSamples(){return it},activate(){Q||(Q=i.background,ee=i.fog),i.background=oe,i.fog=ne},deactivate(){Q&&(i.background=Q),i.fog=ee,Q=null,ee=null},update(W,N){if(Ce!==N.seed||N.dist+1<He){Ce=N.seed;const z=Math.floor(N.dist/In)*In-In;u.forEach((G,ve)=>zu(G,N,z+ve*In)),it=0,L=0,p.setDrawRange(0,0),S.forEach(G=>{G.visible=!1}),A.fill(0),w.fill(-99)}He=N.dist;let Le=Math.max(...u.map(z=>z.userData.sStart));for(const z of u)z.position.z=N.dist-(z.userData.sStart+In/2),z.position.z>In*1.5&&(Le+=In,zu(z,N,Le),z.position.z=N.dist-(Le+In/2));for(;it<N.tracks.length&&it<f;)H(N,N.tracks[it],it),it++;it>0&&(p.attributes.position.needsUpdate=!0),p.setDrawRange(0,Math.max(0,it-1)*12),m.position.z=N.dist;for(let z=L;z<N.landingMarks.length;z++){const G=N.landingMarks[z],ve=N.dist-G.s,ae=Math.min(42,16+Math.round(G.impact*3));for(let be=0;be<ae;be++)I(G.x,G.y,ve,G.impact)}if(L=N.landingMarks.length,S.forEach(z=>{z.visible=!1}),N.landingMarks.slice(-S.length).forEach((z,G)=>{const ve=S[G];ve.visible=!0,ve.position.set(z.x,z.y+.018,N.dist-z.s);const ae=Math.min(1.8,.65+z.impact*.09);ve.scale.set(.75+ae*.25,1+ae*.55,1)}),!N.airborne&&Math.abs(N.carve)>.42)for(D+=W*(8+Math.abs(N.carve)*18);D>=1;){D-=1;const z=-Math.sign(N.carve||1);I(N.px+z*.22,N.groundY,0,2.2,z)}else D=Math.min(D,.9);for(let z=0;z<v;z++)if(!(A[z]<=0)){if(A[z]-=W,A[z]<=0){w[z*3+1]=-99;continue}b[z*3+1]-=4.8*W,w[z*3]+=b[z*3]*W,w[z*3+1]+=b[z*3+1]*W,w[z*3+2]+=(N.speed+b[z*3+2])*W}P.attributes.position.needsUpdate=!0;const C={rock:0,tree:0,ramp:0};for(const z of Object.keys(Ee))Ee[z].forEach(G=>{G.visible=!1});for(const z of N.obstacles){const G=Ee[z.type],ve=C[z.type]++;if(!G||ve>=G.length)continue;const ae=G[ve];ae.visible=!z.hit||z.type==="ramp",ae.position.set(z.x,N.terrainHeight(z.x,N.dist-z.z),z.z)}const y=N.dist-N.avalDist;ze.position.z=2+Math.max(0,Math.min(9,y*.28)),ze.position.y=N.terrainHeight(0,N.dist-ze.position.z);const O=performance.now()*.002;ze.children.forEach(z=>{z.position.y=.8+Math.abs(Math.sin(O+z.userData.wob))*2,z.rotation.x+=W*2.2});const X=xe.attributes.position.array;for(let z=0;z<K;z++)X[z*3+1]-=W*(1.6+z%5*.3),X[z*3+2]+=W*N.speed*.5,(X[z*3+1]<0||X[z*3+2]>8)&&(X[z*3]=(Math.random()-.5)*30,X[z*3+1]=8+Math.random()*5,X[z*3+2]=-Math.random()*60);xe.attributes.position.needsUpdate=!0}}}const sc=1/120,Bu=14,is=ny(),ea=ky();Cy(Ur[ea].texturePxPerM);const{scene:Bn,camera:Vn,composer:ta,renderer:Nd,bloom:wS}=Ty(document.getElementById("app"),{antialias:Ur[ea].antialias,dpr:Ur[ea].dpr}),ji=Iy(Bn),Vs=CS(Bn),qn=new by(Vn),Br=new Hy({renderer:Nd,composer:ta,bloom:wS,scene:Bn},ea),an=[new gu(0,1),new gu(1,-1)],Sn=[new Mu(Eu.p1),new Mu(Eu.p2)];Sn[0].root.rotation.y=Math.PI;Sn[1].root.rotation.y=0;Bn.add(Sn[0].root,Sn[1].root);const rt=new uy(an),ss=new zy(Bn),pt=new By,Vt=new iy,Fd=Gy();ta.insertPass(Fd,ta.passes.length-1);const pn=new Vy(Fd,Vn);let zi=!0;function Od(i){return zi=!!i,pn.setEnabled(zi),document.documentElement.classList.toggle("stylize-off",!zi),zi||Hd(),zi}Od(!0);pt.setQualityLabel(Br.config.name);ji.setReflector(Br.config.reflection);Br.onChange=(i,e)=>{pt.setQualityLabel(e.name),ji.setReflector(e.reflection),console.info("[shuttle-clash] 画质档位 →",i)};const An=new Qx,Ue=is?new ty(document.getElementById("app")):null,gi=[new mu,new mu];let vi=[],ri=[An,An],bt=is?"normal":"duo";const ws=()=>Ue??An;let qe=null,Mt=null,Wt=0;const Ls=new _S;let rc=0,oc=0;const da=i=>Wt===1?1-i:i;let Is=localStorage.getItem("sc-assist")!=="0",vr=[];pt.setSmashMark(ht.SMASH_MIN_CHARGE);const Wi=tl(Bn,.62,.55),Fr=[tl(Bn,.95,.42),tl(Bn,.95,.42)];function zd(i,e,t){const n=new le(new oa(e,t,48),new Yt({color:i,transparent:!0,opacity:0,depthWrite:!1,side:$t}));return n.rotation.x=-Math.PI/2,n.position.y=.02,n.renderOrder=4,Bn.add(n),n}const si=zd(8380671,.3,.38),xr=zd(6356890,.34,.45);let yr=0,ll=!0;const Sr=new le(new Un(.16,14,10),new Yt({color:16777215,transparent:!0,opacity:0,blending:Us,depthWrite:!1}));Bn.add(Sr);let hr=0,Bd=1,na=0,hl=0;const Ho=[];let ur=0,Or=performance.now(),cn=!1,ac=0;function AS(i){Ue==null||Ue.beginFrame();for(const e of vi)e.update(i,rt,an[1-e.player.index]);for(const e of vr)e.inner===Ls&&(e.enabled=Ls.assist),e.update(i,rt);rt.update(i,ri),An.endFrame(),Ue==null||Ue.endFrame(),gi[0].endFrame(),gi[1].endFrame(),Ls.endFrame(),kd()}function kd(){var e,t,n,s,r,o,a,c;const i=rt.drainEvents();Mt==="host"&&(qe!=null&&qe.connected)&&i.length&&qe.send({t:"e",e:i});for(const l of i){if(l.type==="hit"){const{shot:h,speed:u}=l;Vt.hit(h.style,h.charge,u),Sr.position.set(h.from.x,h.from.y,h.from.z),hr=1,Bd=h.style==="smash"?2.1:1+h.charge*.5,qn.punch(h.style==="smash"?.85:.22+h.charge*.25),h.style==="smash"?(na=.045,pn.smashLaunch(),pn.impact(.9),Nn("唰!!",h.hitter===0?"#ffd94d":"#ff9b6b",h.from)):h.charge>.75&&Nn("啪!","#ffffff",h.from),pt.showShot(`${h.hitter===0?"◀":"▶"} ${h.styleName}`),ss.reset(),h.hitter===0&&(Ue==null||Ue.fadeHint()),Ho.push({style:h.style,speed:Math.round(u),y:+h.from.y.toFixed(2),charge:+h.charge.toFixed(2),by:h.hitter,aimX:+(((e=h.aim)==null?void 0:e.x)??0).toFixed(2),aimZ:+(((t=h.aim)==null?void 0:t.z)??0).toFixed(2),targetX:+(((n=h.target)==null?void 0:n.x)??0).toFixed(2),targetZ:+(((s=h.target)==null?void 0:s.z)??0).toFixed(2),predX:+(((o=(r=h.predicted)==null?void 0:r.landing)==null?void 0:o.x)??0).toFixed(2),predZ:+(((c=(a=h.predicted)==null?void 0:a.landing)==null?void 0:c.z)??0).toFixed(2)}),Ho.length>400&&Ho.shift()}else l.type==="net-hit"?(Vt.netHit(),qn.punch(.35),Nn("噗…","#9fb4c8",{x:l.x,y:1.5,z:0})):l.type==="land"?(Vt.land(l.inBounds),qn.punch(.3),xr.position.set(l.x,.02,l.z),xr.material.color.set(l.inBounds?6094746:16734810),yr=2,pn.impact(.5),pn.calmDown(),Nn(l.inBounds?"砰!!":"出界!",l.inBounds?"#ffffff":"#ff7a7a",{x:l.x,y:.4,z:l.z})):(l.type==="point"||l.type==="gameover")&&Hd();if(l.type==="point"){const h=rt.rallyHits>=6;Vt.point(l.winner===0),h&&Vt.crowd(Math.min(1,rt.rallyHits/14)),hl=.55;const u=da(l.winner)===0?"#6fc4ff":"#ff8a8f";pt.showCall(l.reason,`${As(l.winner)} 得分 · ${l.score[Wt]} : ${l.score[1-Wt]}`,u)}else if(l.type==="serve-ready"){const u=l.server===Wt||bt==="duo"?is?"右半屏":l.server===0?"空格":"回车":"";pt.showShot(u?`${As(l.server)} 发球 · 按住 ${u} 蓄力`:`${As(l.server)} 发球`)}else l.type==="gameover"&&(Vt.fanfare(),cn=!1,Ue==null||Ue.setEnabled(!1),pt.showResult(As(l.winner),[l.score[Wt],l.score[1-Wt]],`最长回合 ${rt.longestRally} 拍 · 最快球速 ${Math.round(rt.matchMaxSpeed*3.6)} km/h<br>${Mt?"双人联机":bt==="duo"?"双人同屏":bt==="demo"?"AI 观战演示":`单人 · ${jo[bt].name}`}`))}}function As(i){return Mt?i===Wt?"你":"对方":bt==="duo"?i===0?"玩家 1":"玩家 2":bt==="demo"?i===0?"AI · 普通":"AI · 高手":i===0?"你":`AI · ${jo[bt].name}`}const cc=new R;function Nn(i,e,t){if(!zi)return;const n=document.createElement("div");n.className="ono",n.textContent=i,n.style.color=e,n.style.setProperty("--rot",`${(Math.random()*22-11).toFixed(1)}deg`),t?(cc.set(t.x,t.y+.5,t.z).project(Vn),n.style.left=`${Xe.clamp((cc.x*.5+.5)*100,14,86)}%`,n.style.top=`${Xe.clamp((-cc.y*.5+.5)*100,12,78)}%`):(n.style.left="50%",n.style.top="38%"),document.body.appendChild(n),setTimeout(()=>n.remove(),620)}function Hd(){document.querySelectorAll(".ono").forEach(i=>i.remove())}function RS(){const i=document.getElementById("matchpoint");if(!i)return;const[e,t]=rt.score,n=(r,o)=>r+1>=rt.targetPoints&&r+1-o>=2||r+1>=15,s=rt.phase!==Dt.GAMEOVER&&(n(e,t)||n(t,e));i.classList.toggle("show",s),s&&(i.style.borderColor=da(n(e,t)?0:1)===0?"var(--p1)":"var(--p2)")}function PS(i){const e=rt.ball;for(let c=0;c<2;c++){const l=an[c];Sn[c].root.position.set(l.x,0,l.z),Sn[c].update(i,l.animState()),Fr[c].position.set(l.x,.011,l.z),pt.setCharge(da(c),l.charging?l.charge:0)}const t=an[Wt];Ue==null||Ue.update(i,t.charging?t.charge:0);const n=rt.phase!==Dt.READY;ss.update(i,e,{x:e.vx,y:e.vy,z:e.vz},Vn,n),Wi.visible=n;const s=Math.max(0,e.y),r=.55+s*.16;if(Wi.scale.setScalar(r),Wi.material.opacity=Math.max(.07,.55-s*.055),Wi.position.set(e.x,.012,e.z),ac-=i,rt.phase===Dt.RALLY&&e.alive&&ll){if(ac<=0){ac=.07;const c=Ir({x:e.x,y:e.y,z:e.z},{x:e.vx,y:e.vy,z:e.vz},{dt:Ct.SUBSTEP*8,maxTime:5});if(c.grounded){const l=Math.abs(c.landing.x)<=Ke.HALF_WIDTH_SINGLES&&Math.abs(c.landing.z)<=Ke.HALF_LENGTH;si.position.set(c.landing.x,.02,c.landing.z),si.material.color.set(l?8380671:16752736),si.userData.target=.55}else si.userData.target=0}}else si.userData.target=0;if(si.material.opacity+=((si.userData.target??0)-si.material.opacity)*Math.min(1,i*9),yr>0){yr-=i;const c=Math.max(0,yr/2);xr.material.opacity=c*.9,xr.scale.setScalar(1+(1-c)*.9)}else xr.material.opacity=0;hr>0?(hr-=i*6,Sr.material.opacity=Math.max(0,hr)*.75,Sr.scale.setScalar(Bd*(1+(1-Math.max(0,hr))*1.4))):Sr.material.opacity=0;const o=Math.hypot(e.vx,e.vy,e.vz),a=rt.phase===Dt.RALLY?e.x:(an[0].x+an[1].x)/2;qn.update(i,a,Math.min(1,o/60)),rt.phase===Dt.RALLY&&e.alive?pn.setRallySpeed(o):pn.calmDown(),pn.update(i,n?e:null),RS()}const Fe=new MS;let Mi=!1;const It={pitch:0,spin:0,tilt:0,crouch:.5,grab:0,land:0,blendTau:.12},zr=new yt;{const i=new Ze({color:15221819,roughness:.4});for(const e of[-.14,.14]){const t=new le(new at(.11,.035,1.55),i);t.position.set(e,.03,-.1);const n=new le(new at(.11,.035,.22),i);n.position.set(e,.1,-.95),n.rotation.x=.55,t.castShadow=!0,zr.add(t,n)}zr.visible=!1}Sn[0].root.add(zr);var ku;const xn={root:document.getElementById("runhud"),score:document.getElementById("runscore"),combo:document.getElementById("runcombo"),dist:document.getElementById("rundist"),aval:(ku=document.getElementById("runaval"))==null?void 0:ku.querySelector(".fill"),mult:document.getElementById("runmult")};function Gd(){var i,e,t;Vt.unlock(),Fe.reset(Math.random()*1e9|0),Object.assign(It,{pitch:0,spin:0,tilt:0,crouch:.5,grab:0,land:0}),Mi=!0,cn=!0,bt="snowrun",Wt=0,ji.group.visible=!1,(i=ji.lights)==null||i.forEach(n=>{n.visible=!1}),Vs.activate(),Vs.group.visible=!0,Sn[1].root.visible=!1,Fr[1].visible=!1,si.material.opacity=0,pt.showMenu(!1),pt.hideResult(),pt.setNames("滑手","雪山"),(e=xn.root)==null||e.classList.add("on"),zr.visible=!0,document.getElementById("scoreboard").style.display="none",Ue==null||Ue.setEnabled(!0),Ue==null||Ue.setStickEnabled(!0),is&&((t=document.getElementById("pausebtn"))==null||t.classList.add("ingame")),ss.reset(),Or=performance.now()}function ql(){var i,e;Mi=!1,zr.visible=!1,ji.group.visible=!0,(i=ji.lights)==null||i.forEach(t=>{t.visible=!0}),Vs.deactivate(),Vs.group.visible=!1,Sn[1].root.visible=!0,Fr[1].visible=!0,Sn[0].root.rotation.x=0,Sn[0].root.rotation.z=0,(e=xn.root)==null||e.classList.remove("on"),document.getElementById("scoreboard").style.display="",qn.applyViewport()}function DS(i){const e=ws();Ue==null||Ue.beginFrame();const t=e.move(0),n=e.hitHeld(0),s=e.hitReleased(0);Fe.update(i,t,n,s),An.endFrame(),Ue==null||Ue.endFrame();for(const r of Fe.drainEvents())if(r.type==="smash")Vt.hit(r.aerial?"smash":"drive",.8,40),pn.impact(r.aerial?1:.55),r.aerial&&(na=.05,pn.smashLaunch()),qn.punch(r.aerial?.9:.4),Nn(`+${r.pts}${r.aerial?"!!":"!"}`,r.aerial?"#ffd94d":"#ffffff",{x:r.at.x,y:r.at.y+.4,z:r.at.z}),ss.reset();else if(r.type==="whiff")Vt.whiff();else if(r.type==="flip")Vt.point(!0),Nn(`${r.dir==="front"?"Frontflip":"Backflip"} ×${r.n}!`,"#9fd0ff",{x:Fe.px,y:2.4+Fe.groundY+Fe.py,z:0});else if(r.type==="spin")Nn(`${r.degrees}° ${r.dir}!`,"#9fd0ff",{x:Fe.px,y:2.2+Fe.groundY+Fe.py,z:0});else if(r.type==="grab-start")Nn("Grab!","#7fe8ff",{x:Fe.px,y:2+Fe.groundY+Fe.py,z:0});else if(r.type==="trick-land")Vt.crowd(.5),Nn(`${r.name} +${r.pts} ×${r.mult}`,"#ffd94d",{x:Fe.px,y:Fe.groundY+1.6,z:0});else if(r.type==="stumble")Vt.land(!1),qn.punch(1.1),pn.impact(.7),Nn(r.reason,"#ff7a7a",{x:Fe.px,y:1.2,z:0});else if(r.type==="ramp-jump")Vt.hit("lift",.6,20);else if(r.type==="run-over"){Vt.fanfare(),cn=!1,Ue==null||Ue.setEnabled(!1);const o=Fe.stats;pt.showResult("被雪崩追上了",[o.score,0],`滑行 ${o.dist} m · 杀球 ${o.smashes} 拍 · 最高连击 ${o.bestCombo} · 最大滞空 ${o.bestAir} m<br>雪山大冒险`),document.getElementById("verdict").textContent=`得分 ${o.score}`,document.getElementById("finalscore").textContent=`滑了 ${o.dist} 米`}xn.score&&(xn.score.textContent=Fe.score),xn.combo&&(xn.combo.textContent=Fe.combo>=2?`连击 ×${Fe.combo}`:""),xn.mult&&(xn.mult.textContent=Fe.trickMult>1?`特技加成 ×${Fe.trickMult}`:"",xn.mult.style.opacity=Fe.trickMult>1?String(.5+Math.min(.5,Fe.trickTimer/IS*.5)):"0"),xn.dist&&(xn.dist.textContent=`${Math.round(Fe.dist)} m`),xn.aval&&(xn.aval.style.width=`${Math.round(Fe.avalCloseness*100)}%`)}function LS(i){Vs.update(i,Fe);const e=Sn[0],t=Fe.groundY+Fe.py,n=1-Math.exp(-i/It.blendTau),s=Fe.landingCompression,r=Fe.grabbing?.92:Fe.tuck?.85:Fe.stumbleTimer>0?.9:.38+s*.55;It.pitch+=(Fe.rot+(Fe.airborne?0:-Math.atan(Fe.groundSlope))-It.pitch)*n,It.spin+=(Fe.spinRot-It.spin)*n,It.tilt+=(-Fe.carve*.42-It.tilt)*n,It.crouch+=(r-It.crouch)*n,It.grab+=((Fe.grabbing?1:0)-It.grab)*n,It.land+=(s-It.land)*n,e.root.position.set(Fe.px,t,0),e.root.rotation.y=Math.PI+It.spin,e.root.rotation.x=It.pitch,e.root.rotation.z=It.tilt,e.update(i,{speedRatio:.15,crouch:It.crouch,swing:Fe.swing,lunge:0,grab:It.grab,landing:It.land}),Fr[0].position.set(Fe.px,Fe.groundY+.011,0),Fr[0].material.opacity=Math.max(.1,.42-Fe.py*.1);const o=Fe.ball;ss.update(i,o,{x:o.vx,y:o.vy,z:o.vz},Vn,o.alive),Wi.visible=o.alive,o.alive&&(Wi.position.set(o.x,Fe.terrainHeight(o.x,Fe.dist-o.z)+.012,o.z),Wi.scale.setScalar(.55+Math.max(0,o.y)*.16)),Ue==null||Ue.update(i,Fe.charging?Fe.charge:0),pt.setCharge(0,Fe.charging?Fe.charge:0);const a=Fe.speed/23;Vn.position.set(Fe.px*.55+(Math.random()-.5)*a*.05,3.1+t*.35,6.4-a*.7);const c=Fe.terrainHeight(Fe.px*.8,Fe.dist+8);Vn.lookAt(Fe.px*.8,c+1+Fe.py*.35,-8),Vn.fov=(innerWidth/innerHeight<1?64:50)+a*6,Vn.updateProjectionMatrix(),pn.setRallySpeed(Fe.speed*2.2),pn.update(i,o.alive?o:null)}const IS=4.5;function US(i){const e=rt.ball;e.alive&&(e.px=e.x,e.py=e.y,e.pz=e.z,$s(e,i),e.y<Ct.RADIUS&&(e.y=Ct.RADIUS));for(const a of an)a.netX!==void 0&&(a.x+=(a.netX-a.x)*Math.min(1,i*16),a.z+=(a.netZ-a.z)*Math.min(1,i*16));const t=ws();Ue==null||Ue.beginFrame();const n=t.move(0),s=t.aimDir?t.aimDir():n,r={t:"i",d:[-n.x,-n.z],a:[-s.x,-s.z],h:t.hitHeld(0)?1:0,as:Is?1:0},o=t.hitPressed(0)||t.hitReleased(0);t.hitPressed(0)&&(r.p=1),t.hitReleased(0)&&(r.r=1),oc+=i,(o||oc>=1/30)&&(oc=0,qe==null||qe.send(r)),An.endFrame(),Ue==null||Ue.endFrame(),kd()}let Vd="normal";function Wd(i){var e;Mt||(Vd=bt),Mt=i,bt=i==="host"?"online-host":"online-guest",qn.mirror=i==="guest"?-1:1,(e=document.getElementById("room"))==null||e.classList.add("hidden"),Zi()}function ia(i){if(Mt){try{qe==null||qe.send({t:"bye"})}catch{}qe==null||qe.close(),qe=null,Mt=null,Wt=0,qn.mirror=1,cn=!1,bt=Vd,document.querySelectorAll(".mode").forEach(e=>{e.classList.toggle("active",e.dataset.mode===bt)}),Ls.reset(),ri=[An,An],vi=[],vr=[],Ue==null||Ue.setEnabled(!1),pt.hideResult(),pt.showMenu(!0),i&&pt.showCall(i,"","#ffd94d")}}function Xd(){qe.onMessage=i=>{i.t==="i"&&Mt==="host"?Ls.apply(i):i.t==="s"&&Mt==="guest"?xS(i,rt,an):i.t==="e"&&Mt==="guest"?rt.events.push(...i.e):i.t==="start"&&Mt==="guest"?Wd("guest"):i.t==="again"?Mt==="host"&&(pt.hideResult(),Zi(),qe.send({t:"restart"})):i.t==="restart"&&Mt==="guest"?(pt.hideResult(),cn=!0,Ue==null||Ue.setEnabled(!0)):i.t==="bye"&&ia("对方已离开")},qe.onClose=()=>ia("连接已断开"),qe.onError=i=>console.warn("[net]",(i==null?void 0:i.type)??i)}async function NS(){const i=document.getElementById("roomcode"),e=document.getElementById("roomstatus");qe=new Ud,Mt="host",Xd();try{e.textContent="连接信令服务器…";const t=await qe.host();i.textContent=t,e.textContent="把这四个字发给对方 · 等待加入…",qe.onPeerJoin=()=>{qe.send({t:"start"}),Wd("host")}}catch(t){e.textContent=`建房失败：${(t==null?void 0:t.type)??(t==null?void 0:t.message)??t}（信令服务不可达？）`,Mt=null}}async function $d(){const i=document.getElementById("joincode"),e=document.getElementById("roomstatus"),t=i.value.trim();if(t.length<4){e.textContent="输入 4 位房间码";return}qe=new Ud,Mt="guest",Xd();try{e.textContent="连接中…",await qe.join(t),e.textContent="已连上，等待开局…"}catch(n){e.textContent=(n==null?void 0:n.type)==="peer-unavailable"?"没找到这个房间，检查一下码":`加入失败：${(n==null?void 0:n.type)??(n==null?void 0:n.message)??n}`,qe==null||qe.close(),qe=null,Mt=null}}function Yd(i){requestAnimationFrame(Yd);let e=Math.min(.1,(i-Or)/1e3);if(Or=i,pt.update(e),cn&&Br.update(e),cn){if(na>0&&(na-=e,e=0),hl>0&&(hl-=e,e*=.38),Mi)DS(e);else if(Mt==="guest")US(e);else{ur+=e;let t=0;for(;ur>=sc&&t<Bu;)AS(sc),ur-=sc,t++;t===Bu&&(ur=0),Mt==="host"&&(qe!=null&&qe.connected)&&(rc+=e,rc>=1/30&&(rc=0,qe.send(vS(rt,an))))}Mi||pt.setScore([rt.score[Wt],rt.score[1-Wt]],da(rt.server),rt.score[0]+rt.score[1]+1,rt.longestRally)}Mi?LS(cn?e:Math.min(e,1/60)):PS(cn?e:Math.min(e,1/60)),ta.render()}var Hu,Gu,Vu;is&&(document.querySelectorAll(".mode[data-needs-keyboard]").forEach(i=>{i.classList.remove("active"),i.remove()}),(Hu=document.querySelector('.mode[data-mode="normal"]'))==null||Hu.classList.add("active"),(Gu=document.getElementById("tips-kb"))==null||Gu.setAttribute("hidden",""),(Vu=document.getElementById("tips-touch"))==null||Vu.removeAttribute("hidden"));document.querySelectorAll(".mode").forEach(i=>{i.addEventListener("click",()=>{var e;if(i.dataset.mode==="online"){(e=document.getElementById("room"))==null||e.classList.remove("hidden"),document.getElementById("roomstatus").textContent="",document.getElementById("roomcode").textContent="····";return}document.querySelectorAll(".mode").forEach(t=>t.classList.remove("active")),i.classList.add("active"),bt=i.dataset.mode})});const Co=document.getElementById("assistchk");Co&&(Co.checked=Is,Co.addEventListener("change",()=>{Is=Co.checked,localStorage.setItem("sc-assist",Is?"1":"0")}));var Wu;(Wu=document.getElementById("hostbtn"))==null||Wu.addEventListener("click",NS);var Xu;(Xu=document.getElementById("joinbtn"))==null||Xu.addEventListener("click",$d);var $u;($u=document.getElementById("roomback"))==null||$u.addEventListener("click",()=>{var i;if(Mt){try{qe==null||qe.close()}catch{}qe=null,Mt=null}(i=document.getElementById("room"))==null||i.classList.add("hidden")});var Yu;(Yu=document.getElementById("joincode"))==null||Yu.addEventListener("keydown",i=>{i.key==="Enter"&&(i.stopPropagation(),$d())});function Zi(){var e;Vt.unlock(),vr=[];const i=(t,n)=>{if(!Is)return t;const s=new _u(t,an[n]);return vr.push(s),s};if(bt==="online-host"){vi=[];const t=new _u(Ls,an[1]);vr.push(t),ri=[i(ws(),0),t],Wt=0}else bt==="online-guest"?(vi=[],ri=[ws(),ws()],Wt=1):bt==="duo"?(vi=[],ri=[i(An,0),i(An,1)]):bt==="demo"?(vi=[new Ja(an[0],gi[0],"normal"),new Ja(an[1],gi[1],"pro")],ri=[gi[0],gi[1]]):(vi=[new Ja(an[1],gi[1],bt)],ri=[i(ws(),0),gi[1]]);bt.startsWith("online")||(Wt=0),Ue==null||Ue.setEnabled(bt!=="demo"),Ue==null||Ue.setStickEnabled(!Is),is&&((e=document.getElementById("pausebtn"))==null||e.classList.add("ingame")),pt.setNames(As(Wt),As(1-Wt)),pt.showMenu(!1),pt.hideResult(),rt.startMatch(),ss.reset(),yr=0,ur=0,Or=performance.now(),cn=!0}document.getElementById("startbtn").addEventListener("click",()=>{bt==="snowrun"?Gd():(Mi&&ql(),Zi())});document.getElementById("againbtn").addEventListener("click",()=>{if(bt==="snowrun"){pt.hideResult(),Gd();return}Mt==="guest"?(qe==null||qe.send({t:"again"}),document.getElementById("matchstats").textContent="已请求再来一局，等对方…"):Mt==="host"?(pt.hideResult(),Zi(),qe==null||qe.send({t:"restart"})):Zi()});addEventListener("keydown",i=>{i.code==="KeyV"?qn.toggleView():i.code==="KeyT"?ll=!ll:i.code==="KeyM"?Vt.setEnabled(!Vt.enabled):i.code==="KeyR"&&cn?(rt.startMatch(),pt.hideResult()):i.code==="Escape"?(Mt&&ia(),Mi&&ql(),cn=!1,Ue==null||Ue.setEnabled(!1),pt.showMenu(!0),pt.hideResult()):(i.code==="Space"||i.code==="Enter")&&!cn&&document.getElementById("menu").classList.contains("hidden")===!1&&Zi()});var qu;(qu=document.getElementById("pausebtn"))==null||qu.addEventListener("click",()=>{var i;Mt&&ia(),Mi&&ql(),cn=!1,Ue==null||Ue.setEnabled(!1),(i=document.getElementById("pausebtn"))==null||i.classList.remove("ingame"),pt.showMenu(!0),pt.hideResult()});rt.toServe();rt.phase=Dt.READY;requestAnimationFrame(i=>{Or=i,Yd(i);const e=document.getElementById("splash");setTimeout(()=>e==null?void 0:e.classList.add("gone"),350),setTimeout(()=>e==null?void 0:e.remove(),950)});window.__shuttle={match:rt,players:an,rigs:Sn,shuttleView:ss,audio:Vt,shotLog:Ho,camera:Vn,quality:Br,snowRun:Fe,snowPose:It,scene:Bn,arena:ji,snowArena:Vs,renderer:Nd,touch:Ue,isTouch:is,mangaFx:pn,ono:Nn,setStylize:Od,isStylized:()=>zi,debugKeys:()=>[...An.down].join(","),debugWiring:()=>({mode:bt,p1IsTouch:ri[0]===Ue,p1IsKeyboard:ri[0]===An,controllers:vi.length,running:cn,netRole:Mt,selfIdx:Wt,netConnected:(qe==null?void 0:qe.connected)??!1}),start(i){bt=i,Zi()},stats:()=>({phase:rt.phase,score:[...rt.score],rallyHits:rt.rallyHits,longestRally:rt.longestRally,maxSpeedKmh:Math.round(rt.matchMaxSpeed*3.6)})};console.info("[shuttle-clash] 场地 %fm × %fm，网高 %fm，终端速度 %fm/s",Ke.LENGTH,Ke.HALF_WIDTH_SINGLES*2,Ke.NET_HEIGHT_CENTER,Ct.TERMINAL_VELOCITY);
